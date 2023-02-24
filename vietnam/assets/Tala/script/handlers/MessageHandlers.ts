import { AudioClip, AudioSource, find, game, view } from "cc";
import { UserData } from "../../../ScriptCore/data/UserData";
import { EventMgr } from "../../../ScriptCore/events/eventmgr";
import { EventName } from "../../../ScriptCore/events/EventName";
import { GameState } from "../../../ScriptCore/gamestate/GameState";
import { UIMgr } from "../../../ScriptCore/Lobby/Scripts/UIMgr";
import { SocketMgr } from "../../../ScriptCore/panda/net/SocketMgr";
import gamehall from "../../../ScriptCore/protocol/gamehall";
import player from "../../../ScriptCore/protocol/player.js";
import { TienlenRuntime } from "../../../Tienlen/script/TienlenRuntime";
import ObjectWait from "../common/async/ObjectWait";
import CardHelper from "../common/helper/CardHelper";
import { IMessageHandler, MessageHandler } from "../common/Type";
import tala from "../protocol/tala.js";
import TalaDefine, { PlayerOp } from "../TalaDefine";
import TalaHelper from "../TalaHelper";
import TalaRuntime from "../TalaRuntime";
import { TalaGame } from "../view/TalaGame";


@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaRoomInfo)
export class RoomInfoHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaRoomInfo) {
        TalaRuntime.instance.roomInfo = msg;
        this.addListeners();
        if (TalaHelper.checkLoadingIsShowOrLoad()) {
            TalaHelper.log("loading状态下收到roominfo忽略处理");
        } else if (TalaHelper.checkGameIsShow()) {//断线重连
            TalaGame.instance.updateShow(msg);
        } else {
            if (TalaHelper.checkGameIsLoading()) {
                let view = await TalaHelper.getTalaGame();
                view.updateShow(msg);
            } else {
                await this.showGame(msg);
            }
            if (TalaRuntime.instance.roomInfo.State == -1) {//房间已销毁,自动退出房间
                this.hideGame();
                UIMgr.getInstance().tipTxt(`房间销毁`);
            }
        }
    }

    async showGame(msg: any) {
        await TalaHelper.showGame(msg);
    }

    hideGame() {
        TalaHelper.hideGame();
        ObjectWait.instance.clear(TalaGame);
    }

    addListeners() {
        //EventMgr.getInstance().addEventListener(EventName.Reconnect_complete, this.onReconnect, this);
        // EventMgr.getInstance().addEventListener(EventName.Socket_Connect_close, this.onClose, this);
        // EventMgr.getInstance().once(EventName.SC_QUIT_GAME, this.onGameQuit, this);
        EventMgr.getInstance().addEventListener(EventName.SC_LeaveRoom, this.onGameQuit, this);
        EventMgr.getInstance().addEventListener(EventName.SC_PlayerFlagUpdate, this.onUpdatePlayerFlag, this);
    }

    onReconnect() {

    }

    onGameQuit(msg: any) {
        if (msg.OpCode == 0 || msg.OpRetCode == 0) {
            TalaRuntime.instance.roomInfo.State = -1;
            EventMgr.getInstance().removeByTarget(this);
            this.hideGame();
            if (msg.Reason == 1) {
                // if (TienlenRuntime.getCoinCheck) {
                //     TienlenHelper.showFloatTips('金币不足', TienlenHelper.getUIRoot());
                // } else {
                //     TienlenHelper.showGetCoin(TienlenRuntime.getCoinCheck);
                //     TienlenRuntime.saveCoinCheckDate();
                // }
            } else if (msg.Reason == 2) {
                UIMgr.getInstance().tipTxt(`房间销毁`);
            } else if (msg.Reason == 5) {
                UIMgr.getInstance().tipTxt(`比赛场结束销毁房间`);
            }
            else if (msg.Reason) {
                UIMgr.getInstance().tipTxt('leave room reason: ' + msg.Reason);
            }
        }
    }

    onUpdatePlayerFlag(msg: player.player.SCPlayerFlag) {
        let player = TalaRuntime.instance.getPlayerData(msg.PlayerId);
        if (player) {
            player.Flag = msg.Flag;
        }
    }

}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaRoomState)
export class RoomStateHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaRoomState) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        roomInfo.State = msg.State;
        if (msg.State == 4) {//如果结算状态,就重置所有旁观者的flag
            // roomInfo.Players.forEach((v) => {
            //     if (v.Flag == 4097) {
            //         v.Flag = 1;
            //         let index = TienlenHelper.PosToIndex(v.Pos, TienlenHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
            //         let player = TienlenGame.instance?.getPlayer(index);
            //         player?.updatePlayerStateFlag();
            //     }
            // })
        } else if (msg.State == 1) {
            this.resetData();
            TalaHelper.playMusic(TalaDefine.MusicGame);
        } else if (msg.State == 2) {
            // let self = TienlenGameData.instance.selfPlayerData;
            // roomInfo.Players.forEach((v) => {
            //     if (v.SnId != self.SnId)
            //         v.Cards = TienlenGameData.instance.defaultCards.slice();
            // })
        } else if (msg.State == 0) {
            this.resetData();
        }
        let view = await TalaHelper.getTalaGame();
        view.updateState(roomInfo);
    }

    resetData() {
        let roomInfo = TalaRuntime.instance.roomInfo;
        roomInfo.TimeOut = 0;
        roomInfo.Players.forEach((v) => {
            v.Cards.length = 0;
            v.ChiCards.length = 0;
            v.DelCards.length = 0;
            v.Chi2Phom.length = 0;
        });
        TalaRuntime.instance.clearShowPhoms();
        TalaRuntime.instance.lastRoundOpIndex = 0;
    }
}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaPlayerEnter)
export class PlayerEnterHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaPlayerEnter) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        roomInfo.Players.push(msg.Data);
        if (TalaHelper.isAudience(msg.Data.Flag)) {
            TalaHelper.log(`旁观者${msg.Data.SnId}进入`)
            return;
        }
        let view = await TalaHelper.getTalaGame();
        let index = TalaHelper.PosToIndex(msg.Data.Pos, TalaHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
        view.showPlayer(index, msg.Data, roomInfo);
    }
}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaPlayerLeave)
export class PlayerLeaveHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaPlayerLeave) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let view = await TalaHelper.getTalaGame();
        let index = TalaHelper.PosToIndex(msg.Pos, TalaHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
        view.hidePlayer(index);
        let delIdx = roomInfo.Players.findIndex((v) => v.Pos == msg.Pos);
        delIdx != -1 && roomInfo.Players.splice(delIdx, 1);
    }
}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaHandCard)
export class CardHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaHandCard) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let self = TalaRuntime.instance.selfPlayerData;
        let view = await TalaHelper.getTalaGame();
        //随机打乱，然后再排序,放在异步获取game后，为了在发牌之前显示的数据是空，不然播放发牌动画时手牌里已经显示数据了
        // self.Cards = CardHelper.sortRandom(msg.Cards.slice());
        self.Cards = msg.Cards.slice();
        view.dispatchCards(self.Cards);
    }
}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaShowPhom)
export class ShowPhomHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaShowPhom) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        TalaRuntime.instance.addShowPhoms(msg);
        let self = TalaRuntime.instance.selfPlayerData;
        let view = await TalaHelper.getTalaGame();
        let index = TalaHelper.SnIdToIndex(msg.Snid);
        let player = view.getPlayer(index);
        if (player.isSelf) {
            let phomList = TalaHelper.phomsToCardList(msg.Phoms);
            TalaHelper.removeList(self.Cards, phomList, player.isSelf);
        }
        !roomInfo.IsLast && player.stopWait();
        if (msg.Phoms.length > 0)
            player.showPhom(msg.Phoms);
        //亮完牌显示组牌提示
        if (player.isSelf) {
            let flag = TalaHelper.markAllPhoms(self.Cards);
            if (flag) {
                TalaRuntime.instance.lastRoundOpIndex++;
            } else {
                TalaHelper.callOpCard(PlayerOp.COMBINE);
            }
        }
        if (msg.Phoms.length == 0) {//没有组合就显示瘪
            player.showMom(5);
        }
        // if (msg.OpRetCode) {
        //     TalaHelper.log(`Cannot SHOW!`);
        //     UIMgr.getInstance().tipTxt(`Cannot SHOW!`);
        // }
    }
}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaOpPhom)
export class OpPhomHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaOpPhom) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let self = TalaRuntime.instance.selfPlayerData;
        let view = await TalaHelper.getTalaGame();
        let index = TalaHelper.SnIdToIndex(msg.Snid);
        let player = view.getPlayer(index);
        for (let index = 0; index < msg.MapSnidCard.length; index++) {
            const element = msg.MapSnidCard[index];
            for (const key in element.SnidCard) {
                if (Object.prototype.hasOwnProperty.call(element.SnidCard, key)) {
                    const cardId = element.SnidCard[key];
                    let targetIdx = TalaHelper.SnIdToIndex(parseInt(key));
                    let targetPlayer = view.getPlayer(targetIdx);
                    targetPlayer.combinePhom(player, cardId);
                }
            }
        }
        player.stopWait();
        if (player.isSelf) {
            player.opCardList.removeTip();
            player.resetPopup();
        }
        view.removePhomZoneTip();
        //重置操作状态，可能会有第二次抽牌亮牌
        TalaRuntime.instance.lastRoundOpIndex = 0;
        // if (msg.OpRetCode) {
        //     TalaHelper.log(`Cannot COMBINE!`);
        //     UIMgr.getInstance().tipTxt(`Cannot COMBINE!`);
        // }
    }
}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaCurOpPos)
export class GameCurOpHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaCurOpPos) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        if (roomInfo.State != 3) return;
        let view = await TalaHelper.getTalaGame();
        let self = TalaRuntime.instance.selfPlayerData;
        let index = TalaHelper.PosToIndex(msg.Pos, TalaHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
        let player = view.getPlayer(index);
        player.showNextOp(PlayerOp.DRAW);
        if (self.Pos == msg.Pos) {
            view.checkShowBtnPlay();
            view.checkShowArrowAnim();
            TalaHelper.playSound(TalaDefine.SoundYourTurn);
            await TalaHelper.nodeWait(0.5, view.node);
            if (msg.Card != -1 && CardHelper.checkCanEat(player.data.Cards, msg.Card, player.data.Chi2Phom)) {
                let index = TalaHelper.SnIdToIndex(TalaRuntime.instance.lastPlaySnid);
                view.showEatTip(index);
            }
        } else {
            view.hideBtnPlay();
        }
        view.activeList.forEach((v) => v.stopWait());
        player.playWait(TalaDefine.PlayCardTime);
    }
}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaPlayerOp)
export class PlayerOpHandler implements IMessageHandler {
    private _playDelay: number = 500; //ms
    private _drawTime: number = 0;
    async run(msg: tala.tala.SCTaLaPlayerOp) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let data = TalaRuntime.instance.getPlayerData(msg.SnId);
        let view = await TalaHelper.getTalaGame();
        let index = TalaHelper.SnIdToIndex(msg.SnId);
        let player = view.getPlayer(index);
        if (msg.OpRetCode != 0) {
            if (msg.OpRetCode) {
                TalaHelper.log(`Cannot `, PlayerOp[msg.OpCode]);
                // UIMgr.getInstance().tipTxt(`Cannot ${PlayerOp[msg.OpCode]}`);
            }
        } else {
            player.isSelf && player.resetPopup();
            //opparam服务器类型是long,这里需要转成number
            if (msg.OpCode == PlayerOp.PLAY) {
                TalaRuntime.instance.lastPlaySnid = msg.SnId;
                data.DelCards.push(msg.OpParam[0]);
                msg.OpParam = msg.OpParam.map((v) => TalaHelper.getSafeNumber(v));
                TalaHelper.removeList(data.Cards, msg.OpParam, player.isSelf);
                if (!roomInfo.IsLast) {
                    player.isSelf && view.hideBtnPlay();
                    player.stopWait();
                }
                if (TalaRuntime.instance.roomInfo.IsLast && player.isSelf) {
                    TalaRuntime.instance.lastRoundOpIndex++;
                }
                player.showNextOp(PlayerOp.NONE);
                let delay = game.totalTime - this._drawTime;
                if (delay < this._playDelay) { //抽牌和出牌都有动画，之间需要间隔
                    await TalaHelper.nodeWait((this._playDelay - delay) / 1000, view.node);
                }
                view.playCard(player, msg.OpParam[0]);
                view.removeEatTip();
            } else if (msg.OpCode == PlayerOp.DRAW) {
                this._drawTime = game.totalTime;
                if (msg.OpParam[0]) {
                    data.Cards.push(msg.OpParam[0]);
                    view.dispatchCardToPlayer(player, msg.OpParam[0]);
                } else {

                }
                if (player.isSelf) {
                    view.showBtnPlay();
                    view.hideArrowAnim(0);
                    view.removeEatTip();
                }
                player.showNextOp(PlayerOp.PLAY);
            } else if (msg.OpCode == PlayerOp.EAT) {
                data.ChiCards.push(msg.OpParam[0]);
                data.Cards.push(msg.OpParam[0]);
                data.Chi2Phom = data.Chi2Phom.concat(msg.OpParam);
                TalaRuntime.instance.eatCardId = msg.OpParam[0];
                player.isSelf && view.showBtnPlay();
                player.isSelf && view.hideArrowAnim(0);
            }
        }
    }
}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaSmallGameBilled)
export class SmallGameBilldHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaSmallGameBilled) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let view = await TalaHelper.getTalaGame();
        let idx = TalaHelper.PosToIndex(msg.WinPos, TalaHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
        let winPlayer = view.getPlayer(idx);
        idx = TalaHelper.PosToIndex(msg.LosePos, TalaHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
        let losePlayer = view.getPlayer(idx);
        view.eatCard(idx, TalaRuntime.instance.eatCardId, winPlayer);
        winPlayer.showSmallBill(msg.WinCoin, msg.WinPosCoin);
        losePlayer.showSmallBill(-msg.LoseCoin, msg.LosePosCoin, winPlayer);
    }
}


@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaGameBilled)
export class GameBilldHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaGameBilled) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let view = await TalaHelper.getTalaGame();
        // let delta = game.totalTime - TienlenRuntime.billTime;
        let flag = true;
        // if (delta < 2000) {
        //     flag = await TienlenHelper.nodeWait((2000 - delta) / 1000, view.node);
        // }
        // if (!flag) return;
        flag = await TalaHelper.nodeWait(0.5, view.node);
        if (!flag) return;
        let win = this.getWinPlayer(msg);
        let idx = TalaHelper.SnIdToIndex(win.SnId);
        let winPlayer = view.getPlayer(idx);
        for (let index = 0; index < msg.Datas.length; index++) {
            const element = msg.Datas[index];
            let idx = TalaHelper.SnIdToIndex(element.SnId);
            let player = view.getPlayer(idx);
            player.showBill(element, winPlayer);
            if (element.IsWin == 1 && player.isSelf) {
                TalaHelper.playMusic(TalaDefine.MusicWin, false);
                TalaHelper.playSound(TalaDefine.SoundCoin);
            } else if (element.IsWin == 2 && player.isSelf) {
                TalaHelper.playMusic(TalaDefine.MusicLose, false);
            }
        }
        //灰掉所有手牌和出的垃圾牌
        view.grayOtherHandCard(true);
        view.grayShowCardZone(true);
        view.activeList.forEach((v) => v.stopWait());
    }

    getWinPlayer(msg: tala.tala.SCTaLaGameBilled) {
        for (let index = 0; index < msg.Datas.length; index++) {
            const element = msg.Datas[index];
            if (element.IsWin == 1) return element;
        }
    }
}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaUpdateMasterSnid)
export class UpdateMasterdHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaUpdateMasterSnid) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        roomInfo.MasterSnid = msg.MasterSnid;
        let view = await TalaHelper.getTalaGame();
        let index = TalaHelper.SnIdToIndex(msg.MasterSnid);
        let player = view.getPlayer(index);
        player.updateMasterFlag();
    }
}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaUpdateCardsNum)
export class UpdateCardNumHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaUpdateCardsNum) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let flag = roomInfo.IsLast != msg.IsLast;
        roomInfo.IsLast = msg.IsLast;
        let view = await TalaHelper.getTalaGame();
        view.updateCardNum(msg.CardsNum);
        if (flag) {
            TalaRuntime.instance.lastRoundOpIndex = 0;
        }
    }
}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaMoveCard)
export class MoveCardNumHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaMoveCard) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let view = await TalaHelper.getTalaGame();
        let srcIdx = TalaHelper.SnIdToIndex(msg.Snid);
        let dstIdx = TalaHelper.SnIdToIndex(msg.DstSnid);
        view.moveShowCard(srcIdx, dstIdx, msg.Card);
    }
}

@MessageHandler(tala.tala.TaLaPacketID.PACKET_SCTaLaRecommendPhom)
export class RecommendCardNumHandler implements IMessageHandler {
    async run(msg: tala.tala.SCTaLaRecommendPhom) {
        let roomInfo = TalaRuntime.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        if (msg.cards.length > 0) {
            let view = await TalaHelper.getTalaGame();
            let index = TalaHelper.SnIdToIndex(msg.Snid);
            let player = view.getPlayer(index);
            player.opCardList.markCardListPopup(msg.cards);
        } else {
            TalaHelper.callOpCard(PlayerOp.SHOW);
        }

    }
}


