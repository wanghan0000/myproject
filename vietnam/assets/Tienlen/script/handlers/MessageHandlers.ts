import { AudioClip, AudioSource, find, game, view } from "cc";
import { UserData } from "../../../ScriptCore/data/UserData";
import { EventMgr } from "../../../ScriptCore/events/eventmgr";
import { EventName } from "../../../ScriptCore/events/EventName";
import { GameState } from "../../../ScriptCore/gamestate/GameState";
import { UIMgr } from "../../../ScriptCore/Lobby/Scripts/UIMgr";
import { SocketMgr } from "../../../ScriptCore/panda/net/SocketMgr";
import gamehall from "../../../ScriptCore/protocol/gamehall";
import { IMessage, IMessageHandler, MessageHandler } from "../common/Type";
import TienlenDefine from "../TienlenDefine";
import { TienlenGameData } from "../model/TienlenGameData";
import _ from '../protocol/tienlen.js';
import TienlenHelper from "../TienlenHelper";
import { TienlenGame } from "../view/TienlenGame";
import { TienlenTips } from "../view/TienlenTips";
import { GameData } from "../../../ScriptCore/Lobby/Scripts/gameconfig/GameData";
import CardHelper from "../common/helper/CardHelper";
import ObjectWait from "../common/async/ObjectWait";
import { UIRoot } from "../../../ScriptCore/UIFrame/UIRoot";
import { TienlenRuntime } from "../TienlenRuntime";
import player from "../../../ScriptCore/protocol/player.js";
import { SpineEffect } from "../view/SpineEffect";
@MessageHandler(_.tienlen.TienLenPacketID.PACKET_SCTienLenRoomInfo)
export class RoomInfoHandler implements IMessageHandler {
    async run(msg: _.tienlen.SCTienLenRoomInfo) {
        TienlenGameData.instance.roomInfo = msg;
        TienlenGameData.instance.selfPlayerData = TienlenHelper.getSelfData(msg.Players);
        this.addListeners();
        if (TienlenHelper.checkLoadingIsShowOrLoad()) {
            TienlenHelper.log("loading状态下收到roominfo忽略处理");
        } else if (TienlenHelper.checkGameIsShow()) {//断线重连
            TienlenGame.instance.updateShow(msg, TienlenRuntime.matchStartFlag);
            TienlenRuntime.matchStartFlag = false;
        } else {
            if (TienlenHelper.checkGameIsLoading()) {
                let view = await TienlenHelper.getTienlenGame();
                view.updateShow(msg, TienlenRuntime.matchStartFlag);
                TienlenRuntime.matchStartFlag = false;
            } else {
                await this.showGame(msg);
            }
            if (TienlenGameData.instance.roomInfo.State == -1) {//房间已销毁,自动退出房间
                this.hideGame();
                TienlenHelper.showFloatTips('房间销毁', TienlenHelper.getUIRoot());
            }
        }
    }

    async showGame(msg: any) {
        if (TienlenGameData.instance.isMatch) {
            if (TienlenHelper.checkMatchWaitingIsShow()) {
                await TienlenHelper.showMatchGame(msg);
            } else {//断线重连，先切到匹配界面再到游戏界面
                await TienlenHelper.showMatchWaiting();
                await TienlenHelper.wait(1);
                await TienlenHelper.showMatchGame(msg);
            }
        } else {
            await TienlenHelper.showGame(msg);
        }
    }

    hideGame() {
        if (TienlenGameData.instance.isMatch) {
            TienlenHelper.hideMatchGame();
        } else {
            TienlenHelper.hideGame();
        }
        ObjectWait.instance.clear(TienlenGame);
    }

    addListeners() {
        //EventMgr.getInstance().addEventListener(EventName.Reconnect_complete, this.onReconnect, this);
        // EventMgr.getInstance().addEventListener(EventName.Socket_Connect_close, this.onClose, this);
        // EventMgr.getInstance().once(EventName.SC_QUIT_GAME, this.onGameQuit, this);
        EventMgr.getInstance().addEventListener(EventName.SC_LeaveRoom, this.onGameQuit, this);
        EventMgr.getInstance().addEventListener(EventName.SC_PlayerFlagUpdate, this.onUpdatePlayerFlag, this);
    }

    onReconnect() {
        TienlenHelper.checkReconnect();
        TienlenHelper.showFloatTips('断线重连成功', TienlenHelper.getUIRoot());
    }

    onClose() {
        let view = TienlenGame.instance;
        TienlenHelper.showFloatTips('断开连接', TienlenHelper.getUIRoot());
    }

    onGameQuit(msg: any) {
        if (msg.OpCode == 0 || msg.OpRetCode == 0) {
            TienlenGameData.instance.roomInfo.State = -1;
            EventMgr.getInstance().removeByTarget(this);
            this.hideGame();
            if (msg.Reason == 1) {
                if (TienlenRuntime.getCoinCheck) {
                    TienlenHelper.showFloatTips('金币不足', TienlenHelper.getUIRoot());
                } else {
                    TienlenHelper.showGetCoin(TienlenRuntime.getCoinCheck);
                    TienlenRuntime.saveCoinCheckDate();
                }
            } else if (msg.Reason == 2) {
                TienlenHelper.showFloatTips('房间销毁', TienlenHelper.getUIRoot());
            } else if (msg.Reason == 5) {
                TienlenHelper.log("比赛场结束销毁房间");
            }
            else if (msg.Reason) {
                TienlenHelper.showFloatTips('leave room reason: ' + msg.Reason, TienlenHelper.getUIRoot());
            }
        }
    }

    onUpdatePlayerFlag(msg: player.player.SCPlayerFlag) {
        let player = TienlenHelper.getPlayerData(msg.PlayerId);
        if (player) {
            player.Flag = msg.Flag;
        }
    }

}

@MessageHandler(_.tienlen.TienLenPacketID.PACKET_SCTienLenRoomState)
export class RoomStateHandler implements IMessageHandler {
    async run(msg: _.tienlen.SCTienLenRoomState) {
        let roomInfo = TienlenGameData.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        roomInfo.State = msg.State;
        if (msg.State == 4) {//如果结算状态,就重置所有旁观者的flag
            roomInfo.Players.forEach((v) => {
                if (v.Flag == 4097) {
                    v.Flag = 1;
                    let index = TienlenHelper.PosToIndex(v.Pos, TienlenHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
                    let player = TienlenGame.instance?.getPlayer(index);
                    player?.updatePlayerStateFlag();
                }
            })
            //半决赛结束，更新决赛标志位
            if (roomInfo.MatchFinals == 1) {
                roomInfo.MatchFinals = 2;
            }
        } else if (msg.State == 1) {
            roomInfo.TimeOut = 0;
            roomInfo.WinSnids.length = 0;
            TienlenHelper.playMusic(TienlenDefine.MusicGame);
        } else if (msg.State == 2) {
            let self = TienlenGameData.instance.selfPlayerData;
            roomInfo.Players.forEach((v) => {
                if (v.SnId != self.SnId)
                    v.Cards = TienlenGameData.instance.defaultCards.slice();
            })
        }
        let view = await TienlenHelper.getTienlenGame();
        view.updateState(roomInfo);
    }
}

@MessageHandler(_.tienlen.TienLenPacketID.PACKET_SCTienLenPlayerOp)
export class PlayerOpHandler implements IMessageHandler {
    async run(msg: _.tienlen.SCTienLenPlayerOp) {
        let roomInfo = TienlenGameData.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let data = TienlenHelper.getPlayerData(msg.SnId);
        let view = await TienlenHelper.getTienlenGame();
        let index = TienlenHelper.SnIdToIndex(msg.SnId);
        let player = view.getPlayer(index);
        if (msg.OpRetCode != 0) {
            TienlenHelper.showFloatTips(`Cannot play this - invalid combination`, view.node);
        } else {
            view.hideOpList();
            view.hideArrowAnim();
            player.stopWait();
            //opparam服务器类型是long,这里需要转成number
            if (msg.OpCode == 1) {
                msg.OpParam = msg.OpParam.map((v) => TienlenHelper.getSafeNumber(v));
                CardHelper.sortBigger(msg.OpParam);
                TienlenHelper.removeList(data.Cards, msg.OpParam, player.isSelf);
                view.playCards(player, msg.OpParam, roomInfo.WinSnids.length, TienlenGameData.instance.lastCards);
                if (data.Cards.length == 0) {
                    roomInfo.WinSnids.push(data.SnId);
                    if (player.isSelf && TienlenGameData.instance.isFightToEnd) {
                        view.hideBtnJoin();
                        view.hideToggleTip();
                    }
                }
            } else if (msg.OpCode == 2) {
                TienlenHelper.playVoice(TienlenDefine.SoundPass, player.roleSex);
                player.isSelf && player.resetPopup();
                player.playCardIdleAnim();
            }
            player.showOp(msg.OpCode);
        }
    }
}

@MessageHandler(_.tienlen.TienLenPacketID.PACKET_SCTienLenPlayerEnter)
export class PlayerEnterHandler implements IMessageHandler {
    async run(msg: _.tienlen.SCTienLenPlayerEnter) {
        let roomInfo = TienlenGameData.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        roomInfo.Players.push(msg.Data);
        if (TienlenHelper.isAudience(msg.Data.Flag)) {
            TienlenHelper.log(`旁观者${msg.Data.SnId}进入`)
            return;
        }
        let view = await TienlenHelper.getTienlenGame();
        let index = TienlenHelper.PosToIndex(msg.Data.Pos, TienlenHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
        view.showPlayer(index, msg.Data, roomInfo);
        view.getPlayer(index).playEnterAnim();
    }
}

@MessageHandler(_.tienlen.TienLenPacketID.PACKET_SCTienLenPlayerLeave)
export class PlayerLeaveHandler implements IMessageHandler {
    async run(msg: _.tienlen.SCTienLenPlayerLeave) {
        let roomInfo = TienlenGameData.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let view = await TienlenHelper.getTienlenGame();
        let index = TienlenHelper.PosToIndex(msg.Pos, TienlenHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
        view.hidePlayer(index);
        let delIdx = roomInfo.Players.findIndex((v) => v.Pos == msg.Pos);
        delIdx != -1 && roomInfo.Players.splice(delIdx, 1);
    }
}

@MessageHandler(_.tienlen.TienLenPacketID.PACKET_SCTienLenCard)
export class TienlenCardHandler implements IMessageHandler {
    async run(msg: _.tienlen.SCTienLenCard) {
        let roomInfo = TienlenGameData.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let self = TienlenGameData.instance.selfPlayerData;
        let view = await TienlenHelper.getTienlenGame();
        //随机打乱，然后再排序,放在异步获取game后，为了在发牌之前显示的数据是空，不然播放发牌动画时手牌里已经显示数据了
        self.Cards = CardHelper.sortRandom(msg.Cards.slice());
        view.dispatchCards(self.Cards);
    }
}

@MessageHandler(_.tienlen.TienLenPacketID.PACKET_SCTienLenCurOpPos)
export class GameCurOpHandler implements IMessageHandler {
    async run(msg: _.tienlen.SCTienLenCurOpPos) {
        let roomInfo = TienlenGameData.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        TienlenGameData.instance.isNewRound = msg.IsNew;
        TienlenGameData.instance.lastCards = msg.Cards.slice();
        let view = await TienlenHelper.getTienlenGame();
        let self = TienlenGameData.instance.selfPlayerData;
        let index = TienlenHelper.PosToIndex(msg.Pos, TienlenHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
        let player = view.getPlayer(index);
        let flag = true;
        if (msg.ExDelay > 0) {
            flag = await TienlenHelper.nodeWait(msg.ExDelay, view.node);
        } else {
            flag = await TienlenHelper.nodeWait(0.5, view.node);
        }
        if (!flag) return;
        if (self.Pos == msg.Pos) {
            let lastFlag = CardHelper.checkLastCards(self.Cards, msg.Cards, msg.IsNew, TienlenGameData.instance.isTraditonal);
            TienlenHelper.log("最后一手牌是否能出: ", lastFlag);
            if (lastFlag) {
                flag = await TienlenHelper.callOpCard(1, self.Cards);
                if (flag) return;
            }
            player.playWait(TienlenDefine.PlayCardTime);
            view.showOpList(msg.IsNew);
            TienlenHelper.playSound(TienlenDefine.SoundYourTurn);
            TienlenHelper.logOpCards(player.opCardList.cardList);
            if (!msg.IsNew && msg.Cards.length > 0) {
                TienlenHelper.log("上家出牌:")
                TienlenHelper.logCards(msg.Cards);
                let [flag, tips] = CardHelper.getCardTip(self.Cards, msg.Cards, TienlenGameData.instance.isTraditonal);
                TienlenHelper.log("智能出牌提示 ", tips);
                TienlenHelper.log("popup sortmode ", player.popupCardList.length, player.opCardList.sortMode)
                if (!flag) {
                    view.showArrowAnim();
                } else if (player.popupCardList.length == 0 && player.opCardList.sortMode == 0 && TienlenRuntime.cardTip) {
                    view.showCardTip(<number[]>tips);
                }
            }
        } else {
            player.playWait(TienlenDefine.PlayCardTime);
        }
        if (msg.IsNew) {
            view.clearShowCardZone();
            if (TienlenRuntime.showAnimFlag) {
                let flag = await TienlenHelper.nodeWait(0.5, view.node);
                if (!flag) return;
            }
            view.resetPlayerOp();
        }
    }
}

@MessageHandler(_.tienlen.TienLenPacketID.PACKET_SCTienLenSmallGameBilled)
export class SmallGameBilldHandler implements IMessageHandler {
    async run(msg: _.tienlen.SCTienLenSmallGameBilled) {
        let roomInfo = TienlenGameData.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let view = await TienlenHelper.getTienlenGame();
        let idx = TienlenHelper.PosToIndex(msg.WinPos, TienlenHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
        let winPlayer = view.getPlayer(idx);
        idx = TienlenHelper.PosToIndex(msg.LosePos, TienlenHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
        let losePlayer = view.getPlayer(idx);
        winPlayer.showSmallBill(msg.WinCoin, msg.WinPosCoin);
        losePlayer.showSmallBill(-msg.LoseCoin, msg.LosePosCoin, winPlayer);
        TienlenRuntime.billTime = game.totalTime;
    }
}


@MessageHandler(_.tienlen.TienLenPacketID.PACKET_SCTienLenGameBilled)
export class GameBilldHandler implements IMessageHandler {
    async run(msg: _.tienlen.SCTienLenGameBilled) {
        let roomInfo = TienlenGameData.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        let view = await TienlenHelper.getTienlenGame();
        let delta = game.totalTime - TienlenRuntime.billTime;
        let flag = true;
        if (delta < 2000) {
            flag = await TienlenHelper.nodeWait((2000 - delta) / 1000, view.node);
        }
        if (!flag) return;
        flag = await TienlenHelper.nodeWait(0.5, view.node);
        if (!flag) return;
        let win = this.getWinPlayer(msg);
        let idx = TienlenHelper.SnIdToIndex(win.SnId);
        let winPlayer = view.getPlayer(idx);
        if (roomInfo.MatchFinals == 2) {//半决赛根据结算分数更新排名
            this.updateRank(msg.Datas);
            view.updateGameInfo(roomInfo);
        }
        for (let index = 0; index < msg.Datas.length; index++) {
            const element = msg.Datas[index];
            let idx = TienlenHelper.SnIdToIndex(element.SnId);
            let player = view.getPlayer(idx);
            player.showBill(element, winPlayer);
            if (element.IsWin == 1 && player.isSelf) {
                TienlenHelper.playMusic(TienlenDefine.MusicWin, false);
                TienlenHelper.playSound(TienlenDefine.SoundCoin);
            } else if (element.IsWin == 2 && player.isSelf) {
                TienlenHelper.playMusic(TienlenDefine.MusicLose, false);
            }
        }
    }

    getWinPlayer(msg: _.tienlen.SCTienLenGameBilled) {
        for (let index = 0; index < msg.Datas.length; index++) {
            const element = msg.Datas[index];
            if (element.IsWin == 1) return element;
        }
    }

    updateRank(list: _.tienlen.ITienLenPlayerGameBilled[]) {
        list.sort((l, r) => {
            return r.GameCoin - l.GameCoin;
        });
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            let player = TienlenHelper.getPlayerData(element.SnId);
            if (index == 0) {
                player.MatchRankId = index + 1;
                TienlenHelper.log(`updateRank snid rank `, player.SnId, player.MatchRankId);
            } else {
                let lastPlayer = TienlenHelper.getPlayerData(list[index - 1].SnId);
                if (list[index].GameCoin == list[index - 1].GameCoin) {
                    player.MatchRankId = lastPlayer.MatchRankId;
                    TienlenHelper.log(`updateRank snid rank `, player.SnId, player.MatchRankId);
                } else {
                    player.MatchRankId = lastPlayer.MatchRankId + 1;
                    TienlenHelper.log(`updateRank snid rank `, player.SnId, player.MatchRankId);
                }

            }
        }
    }

}

@MessageHandler(_.tienlen.TienLenPacketID.PACKET_SCTienLenUpdateMasterSnid)
export class UpdateMasterdHandler implements IMessageHandler {
    async run(msg: _.tienlen.SCTienLenUpdateMasterSnid) {
        let roomInfo = TienlenGameData.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        roomInfo.MasterSnid = msg.MasterSnid;
        let view = await TienlenHelper.getTienlenGame();
        let index = TienlenHelper.SnIdToIndex(msg.MasterSnid);
        let player = view.getPlayer(index);
        player.updateMasterFlag();
    }
}

@MessageHandler(_.tienlen.TienLenPacketID.PACKET_SCTienLenUpdateAudienceNum)
export class UpdateAudNumHandler implements IMessageHandler {
    async run(msg: _.tienlen.SCTienLenUpdateAudienceNum) {
        let roomInfo = TienlenGameData.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        roomInfo.AudienceNum = msg.AudienceNum;
        let view = await TienlenHelper.getTienlenGame();
        view.updateAudNum(msg.AudienceNum);
    }
}

@MessageHandler(_.tienlen.TienLenPacketID.PACKET_SCTienLenFirstOpPos)
export class FirstOpPosHandler implements IMessageHandler {
    async run(msg: _.tienlen.SCTienLenFirstOpPos) {
        let roomInfo = TienlenGameData.instance.roomInfo;
        if (!roomInfo || roomInfo.State == -1) return;
        roomInfo.CurOpIdx = msg.Pos;
        let view = await TienlenHelper.getTienlenGame();
        let index = TienlenHelper.PosToIndex(msg.Pos, TienlenHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
        let player = view.getPlayer(index);
        let flag = await TienlenHelper.nodeWait(2.5, view.node);
        if (!flag) return;
        SpineEffect.playFirstPlayer(player.spineResult.node.parent, player.spineResult.node.position);
    }
}


@MessageHandler(player.player.PlayerPacketID.PACKET_SCGAMEEXDROPITEMS)
export class DropItemHandler implements IMessageHandler {
    async run(msg: player.player.SCGameExDropItems) {
        TienlenGameData.instance.gainItems = msg.Items;
    }
}


