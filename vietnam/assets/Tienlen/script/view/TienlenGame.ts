import { _decorator, Component, Node, Button, Label, input, Input, EventTouch, Sprite, director, game, Game, Animation, BlockInputEvents, sp, tween, v3, macro, Prefab, instantiate, SpriteFrame, Widget, Toggle } from 'cc';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import gamehall from '../../../ScriptCore/protocol/gamehall.js';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import TienlenDefine from '../TienlenDefine';
import { TienlenGameData } from '../model/TienlenGameData';
import tienlen from '../protocol/tienlen.js';
import TienlenHelper from '../TienlenHelper';
import { TienlenClock } from './TienlenClock';
import { TienlenDispatchCard } from './TienlenDispatchCard';
import { TienlenOpCardList } from './TienlenOpCardList';
import { TienlenPlayer } from './TienlenPlayer';
import { TienlenShowCardZone } from './TienlenShowCardZone';
import { TienlenTips } from './TienlenTips';
import { TienlenRuntime } from '../TienlenRuntime';
import ObjectWait from '../common/async/ObjectWait';
import { ButtonPlus } from '../common/component/ButtonPlus';
import CardHelper from '../common/helper/CardHelper';
import { UIManager } from '../../../ScriptCore/UIFrame/UIManager';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { Model2D } from '../common/component/Model2D';
import { GameInfo } from './GameInfo';
import ResourceHelper from '../common/helper/ResourceHelper';
import { SceneEffect } from './SceneEffect';
import { TaskFactory } from '../common/async/TaskFactory';
import { MatchPromotion } from '../match/MatchPromotion';
const { ccclass, property } = _decorator;

@ccclass('TienlenGame')
export class TienlenGame extends UIScreen {
    @property(Prefab)
    private pfbMatchPromotion: Prefab;
    @property(Prefab)
    private pfbMatchBgJBS: Prefab;
    @property(Prefab)
    private pfbMatchBgGJS: Prefab;
    @property(Prefab)
    private pfbModel2DInit: Prefab;
    @property(ButtonPlus)
    private btnPass: ButtonPlus;
    @property(ButtonPlus)
    private btnPlay: ButtonPlus;
    @property(ButtonPlus)
    private btnReturn: ButtonPlus;
    @property(ButtonPlus)
    private btnStart: ButtonPlus;
    @property(ButtonPlus)
    private btnSort: ButtonPlus;
    @property(sp.Skeleton)
    private spineWaitPlayer: sp.Skeleton;
    @property(Animation)
    private animArrow: Animation;
    @property(ButtonPlus)
    private btnJoin: ButtonPlus;
    @property(ButtonPlus)
    private btnInvite1: ButtonPlus;
    @property(ButtonPlus)
    private btnInvite2: ButtonPlus;
    @property(ButtonPlus)
    private btnInvite3: ButtonPlus;
    @property(TienlenClock)
    private clock: TienlenClock;
    @property(Toggle)
    private toggleTip: Toggle;

    private _playerList: TienlenPlayer[];
    private _dispatchCard: TienlenDispatchCard;
    private _showCardZone: TienlenShowCardZone;
    private _activeList: TienlenPlayer[];
    private _roomInfo: tienlen.tienlen.ISCTienLenRoomInfo;
    private _showTime: number = 0;
    private _gameInfo: GameInfo;
    private static _instance: TienlenGame;

    public static get instance(): TienlenGame {
        return this._instance;
    }

    onLoad() {
        TienlenGame._instance = this;
        this._playerList = this.getComponentsInChildren(TienlenPlayer);
        this._dispatchCard = this.getComponentInChildren(TienlenDispatchCard);
        this._showCardZone = this.getComponentInChildren(TienlenShowCardZone);
        this._gameInfo = this.getComponentInChildren(GameInfo);
        this.btnReturn?.setClickHandler(async () => {
            if (game.totalTime - this._showTime <= TienlenDefine.CloseDelayTime) {
                return;
            }
            let ret = await TienlenHelper.callLeaveRoom();
            ret && TienlenHelper.showFloatTips(`cannot leave in game`, this.node);
        }, this);
        this.btnPass.setClickHandler(() => {
            TienlenHelper.callOpCard(2);
        }, this);
        this.btnPlay.setClickHandler(() => {
            TienlenHelper.log(this.selfPlayer.opCardList.toString());
            let list = this.selfPlayer.opCardList.popupCardDataList;
            TienlenHelper.callOpCard(1, list);
        }, this);
        this.btnStart.setClickHandler(() => {
            TienlenHelper.callOpCard(3);
        }, this);
        this.btnSort.setClickHandler(async () => {
            this.selfPlayer.opCardList.changeSortMode();
            if (this.selfPlayer.opCardList.sortMode == 1) {
                this.hideToggleTip();
            } else {
                this.showToggleTip();
            }
        }, this);
        this.btnJoin.setClickHandler(async () => {
            let ret = await TienlenHelper.callJoin(TienlenGameData.instance.roomInfo.RoomId);
            if (ret == gamehall.gamehall.OpResultCode_Game.OPRC_CoinNotEnough_Game || ret == gamehall.gamehall.OpResultCode_Game.OPRC_MoneyNotEnough_Game) {
                TienlenHelper.showFloatTips(`金币不足`, this.node);
            } else if (ret == gamehall.gamehall.OpResultCode_Game.OPRC_RoomIsFull_Game) {
                TienlenHelper.showFloatTips(`人数已满`, this.node);
            } else if (ret) {
                TienlenHelper.showFloatTips(`${gamehall.gamehall.OpResultCode_Game[ret]} : ${ret}`, this.node);
            }
        });
        this.btnInvite1.setClickHandler(() => {
            let pos = TienlenHelper.IndexToPos(1, TienlenHelper.getBaseSeat(), this._roomInfo.MaxPlayerNum);
            TienlenHelper.showInviteList(pos);
        }, this);
        this.btnInvite2.setClickHandler(() => {
            let pos = TienlenHelper.IndexToPos(2, TienlenHelper.getBaseSeat(), this._roomInfo.MaxPlayerNum);
            TienlenHelper.showInviteList(pos);
        }, this);
        this.btnInvite3.setClickHandler(() => {
            let pos = TienlenHelper.IndexToPos(3, TienlenHelper.getBaseSeat(), this._roomInfo.MaxPlayerNum);
            TienlenHelper.showInviteList(pos);
        }, this);
        this.node.on(Node.EventType.TOUCH_END, (evt: EventTouch) => {
            if (evt.target == this.node) {
                this.selfPlayer?.opCardList.resetPopup();
            }
        }, this);
        //屏蔽其他层可能穿透的输入
        this.addComponent(BlockInputEvents);
        ObjectWait.instance.notify(TienlenGame, this);
    }

    _setDefault() {
        this.hideAllPlayer();
        this.hideOpList();
        this.clearShowCardZone();
        this._dispatchCard.hide();
        this.clock.hide();
        this.hideBtnSort();
        this.hideToggleTip();
        this.hideArrowAnim();
        this.hideBtnStart();
        this.hideWaitPlayer();
        this.hideBtnJoin();
        this.checkInviteBtn();
        this.hideGameInfo();
    }

    hideGameInfo() {
        let list = this.getComponentsInChildren(GameInfo);
        list.forEach((v) => v.hide());
    }

    checkInviteBtn() {
        let flag = this.isPrivateMode;
        let roomInfo = TienlenGameData.instance.roomInfo;
        if (!roomInfo || roomInfo.MaxPlayerNum == 4) {
            this.btnInvite1.node.active = flag;
            this.btnInvite2.node.active = flag;
            this.btnInvite3.node.active = flag;
        } else {
            this.btnInvite1.node.active = false;
            this.btnInvite3.node.active = false;
            this.btnInvite2.node.active = flag;
        }
    }

    hideAllInviteBtn() {
        this.btnInvite1.node.active = false;
        this.btnInvite2.node.active = false;
        this.btnInvite3.node.active = false;
    }

    get isPrivateMode(): boolean {
        return this._roomInfo && this._roomInfo.RoomMode == 2;
    }

    showInviteBtn(index: number) {
        let btn = (<any>this)['btnInvite' + index] as ButtonPlus;
        btn && (btn.node.active = true);
    }

    hideInviteBtn(index: number) {
        let btn = (<any>this)['btnInvite' + index] as ButtonPlus;
        btn && (btn.node.active = false);
    }

    showBtnJoin() {
        this.btnJoin.node.active = true;
    }

    hideBtnJoin() {
        this.btnJoin.node.active = false;
    }

    showBtnSort() {
        this.btnSort.node.active = true;
    }

    hideBtnSort() {
        this.btnSort.node.active = false;
    }

    showToggleTip() {
        this.toggleTip.node.active = true;
        this.toggleTip.isChecked = TienlenRuntime.cardTip;
    }

    hideToggleTip() {
        this.toggleTip.node.active = false;
    }

    onToggleTip() {
        TienlenHelper.log("onToggleTip");
        TienlenRuntime.cardTip = this.toggleTip.isChecked;
    }

    showArrowAnim() {
        this.animArrow.node.active = true;
        this.animArrow.play();
    }

    hideArrowAnim() {
        this.animArrow.stop();
        this.animArrow.node.active = false;
    }

    showCardTip(cards: number[]) {
        this.selfPlayer?.showCardTip(cards);
    }

    showPlayer(index: number, ...args: any[]) {
        this._playerList[index].show(...args);
        this.hideInviteBtn(index);
    }

    hidePlayer(index: number) {
        this._playerList[index].hide();
        this.isPrivateMode && this.showInviteBtn(index);
    }

    getPlayer(index: number): TienlenPlayer {
        return this._playerList[index];
    }

    get selfPlayer(): TienlenPlayer {
        if (!TienlenGameData.instance.isAudience)
            return this.getPlayer(0);
        else
            return null;
    }

    showBtnStart() {
        this.btnStart.node.active = true;
    }

    hideBtnStart() {
        this.btnStart.node.active = false;
    }

    showWaitPlayer() {
        this.spineWaitPlayer.node.active = true;
    }

    hideWaitPlayer() {
        this.spineWaitPlayer.node.active = false;
    }

    showOpList(newTurn: boolean = true) {
        this.btnPlay.node.active = true;
        this.btnPass.node.active = true;
    }

    hideOpList() {
        this.btnPlay.node.active = false;
        this.btnPass.node.active = false;
    }

    async onShow(...params: any[]) {
        this._showTime = game.totalTime;
        this.updateShow(params[0]);
    }

    async updateShow(roomInfo: tienlen.tienlen.ISCTienLenRoomInfo, matchStartFlag: boolean = false) {
        this._roomInfo = roomInfo;
        this._setDefault();
        if (!roomInfo) {
            return;
        } else if (matchStartFlag) {
            this.playPromotionTipAnim();
        }
        let players = roomInfo.Players;
        for (let i = 0; i < players.length; ++i) {
            let data = players[i];
            if (TienlenHelper.isAudience(data.Flag)) continue;
            let index = TienlenHelper.PosToIndex(data.Pos, TienlenHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
            this.showPlayer(index, data, roomInfo);
        }
        //只显示最近1次出牌
        if (roomInfo.LastDelCards.length > 0) {
            const element = roomInfo.LastDelCards[0];
            CardHelper.sortBigger(element.Cards);
            this.showCards(element.Cards)
        }
        this.updateState(roomInfo, true);
        if (roomInfo.CurOpIdx != -1) {
            let index = TienlenHelper.PosToIndex(roomInfo.CurOpIdx, TienlenHelper.getBaseSeat(), roomInfo.MaxPlayerNum);
            let player = this.getPlayer(index);
            player.playWait(TienlenDefine.PlayCardTime - roomInfo.TimeOut);
            if (player.isSelf) {
                this.showOpList();
            }
        }
        this.updateGameInfo(this._roomInfo);
        TienlenGameData.instance.isAudience && this.showBtnJoin();
    }

    updateGameInfo(info: tienlen.tienlen.ISCTienLenRoomInfo) {
        let node1 = this.node.getChildByName("MatchGameInfo");
        let node2 = this.node.getChildByName("MatchGameInfo2");
        if (info.IsMatch == 1) {
            this._gameInfo = node1.getComponent(GameInfo);
        } else if (info.IsMatch == 2) {
            this._gameInfo = node2.getComponent(GameInfo);
        }
        this._gameInfo.show(info)
    }

    async delayShowDesk(delay: number) {
        let desk = this.node.getChildByName("desk");
        desk.active = false;
        this.playEnterAnim();
        let flag = await TienlenHelper.nodeWait(delay, this.node);
        if (!flag) return;
        desk.active = true;
        this.playPromotionTipAnim();
    }

    async playEnterAnim() {
        let node = this.node.getChildByName('bisaipaizhuo');
        let node2 = this.node.getChildByName("MatchBoard");
        node2.active = false;
        node.destroyAllChildren();
        let pfb = TienlenGameData.instance.matchType == 1 ? this.pfbMatchBgJBS : this.pfbMatchBgGJS;
        let spine = instantiate(pfb).getComponent(sp.Skeleton);
        node.addChild(spine.node);
        spine.setAnimation(0, "kaichang", false);
        spine.setCompleteListener(() => {
            if (spine.animation == "kaichang") {
                spine.setAnimation(0, "daiji", true);
            }
        })
    }

    async playPromotionTipAnim() {
        let node2 = this.node.getChildByName("MatchBoard");
        node2.active = true;
        node2.children[0].active = false;
        node2.children[1].active = false;
        node2.children[2].active = false;
        node2.getComponent(sp.Skeleton).setAnimation(0, "kaichang", false);
        let flag = await TienlenHelper.nodeWait(0.5, this.node);
        if (!flag) return;
        if (this._roomInfo.MatchFinals == 1) {//半决赛
            node2.children[1].active = true;
        } else if (this._roomInfo.MatchFinals == 2) {//决赛
            node2.children[2].active = true;
        } else {
            node2.children[0].active = true;
            node2.children[0].getComponentInChildren(Label).string = this._roomInfo.NextNeed.toString();
        }
        flag = await TienlenHelper.nodeWait(1.1, this.node);
        if (!flag) return;
        node2.active = false;
    }

    async playLeaveAnim() {
        this._setDefault();
        let node = this.node.getChildByName('bisaipaizhuo');
        let spine = node.children[0].getComponent(sp.Skeleton);
        spine.setAnimation(0, "jiesuan", false);
        let flag = await TienlenHelper.nodeWait(0.5, this.node);//动画结束回调时间太长,需要代码控制
        if (!flag) return false;
    }

    onHide() {

    }

    updateAudNum(num: number) {
        // this.labelAudienceNum.string = num.toString();
    }


    updateState(roomInfo: tienlen.tienlen.ISCTienLenRoomInfo, updateFlag: boolean = false) {
        let state = roomInfo.State;
        if (state == 0) {
            this.reset();
            !TienlenGameData.instance.isMatch && this.showWaitPlayer();
            this.activeList.forEach((v) => {
                v.playIdleAnim();
            });
        } else if (state == 1) {
            this.reset();
            if (!this.isPrivateMode && !TienlenGameData.instance.isMatch) {
                this.clock.show(TienlenDefine.DelayStartTime - roomInfo.TimeOut);
            }
            if (this.selfPlayer?.isMaster && !TienlenGameData.instance.isMatch) {
                this.showBtnStart();
            }
            if (this._roomInfo.MatchFinals == 2 && !updateFlag) {//决赛
                this.playPromotionTipAnim();
            }
        } else if (state == 2) {
            this.clock.hide();
            this.hideBtnStart();
            this.hideAllInviteBtn();
            if (TienlenGameData.instance.isAudience) {
                this.dispatchCards(TienlenGameData.instance.defaultCards);
            }
        } else if (state == 3) {
            //娱乐场暂不理牌
            if (this.selfPlayer && !this.selfPlayer.isWaiting) {
                TienlenGameData.instance.isTraditonal && this.showBtnSort();
                this.showToggleTip();
            }
            if (TienlenGameData.instance.isAudience) {
                this.activeList.forEach((v) => {
                    !v.isSelf && v.showCardFlag(true);
                })
            }
            this.activeList.forEach((v) => {
                if (v.isWaiting) {
                    v.playIdleAnim();
                } else {
                    v.playCardIdleAnim();
                }
            });
        } else if (state == 4) {
            this.hideOpList();
            this.hideBtnSort();
            this.hideToggleTip();
            this.resetPlayerOp();
        }
    }

    async resetIdleAnim() {
        let flag = await TienlenHelper.nodeWait(4, this.node);//等出牌胜利动作都结束了再重置工作
        if (!flag) return;
        this.activeList.forEach((v) => {
            v.playIdleAnim();
        });
    }

    async dispatchCards(list: number[]) {
        let player = this.selfPlayer
        player?.checkOpCardsValid();
        let activeList = this.activeList;
        if (!TienlenRuntime.showAnimFlag) {
            player?.showOpCards(list);
            activeList.forEach((v) => {
                !v.isSelf && v.showCardFlag(true);
            })
        } else {
            player?.opCardList.enableClick(false);
            player?.fillOpCards(list);
            activeList.forEach((v) => {
                !v.isSelf && v.showCardFlag(false);
            })
            await this._dispatchCard.show(activeList, list);
            this._dispatchCard.hide();
            activeList.forEach((v) => {
                !v.isSelf && v.showCardFlag(true);
            })
            if (player && !player.isWaiting) {
                await player.opCardList.sort();
            }
        }
    }

    get activeList(): TienlenPlayer[] {
        this._activeList = this._activeList || [];
        this._activeList.length = 0;
        for (let index = 0; index < this._playerList.length; index++) {
            const element = this._playerList[index];
            if (element.node.active && !element.isAudience && !element.isWaiting) this._activeList.push(element);
        }
        return this._activeList;
    }
    private _playCardTime: number = 0;
    async playCards(player: TienlenPlayer, list: number[], winIndex: number, lastCards: number[]) {
        let delta = game.totalTime - this._playCardTime;
        let isNewRound = TienlenGameData.instance.isNewRound;
        if (player.isSelf) {
            if (!TienlenRuntime.showAnimFlag) {
                this._showCardZone.show(list);
                player.removeShowCard(list);
                if (player.cardNum == 0 && TienlenGameData.instance.isFightToEnd) {
                    player.showWinIndex(winIndex);
                }
            } else {
                let flag = true;
                if (delta <= 500) {
                    flag = await TienlenHelper.nodeWait((500 - delta) / 1000, this.node);
                }
                if (!flag) return;
                if (player.cardNum == 0 && TienlenGameData.instance.isFightToEnd) {
                    player.playCardOutWinAnim(2.5);
                    flag = await TienlenHelper.nodeWait(1, this.node);
                    if (!flag) return;
                    player.showWinIndex(winIndex);
                } else {
                    player.playCardOutAnim(2.5);
                }
                flag = await TienlenHelper.nodeWait(0.1, this.node);
                if (!flag) return;
                player.isSelf && TienlenHelper.playSound(TienlenDefine.SoundPlayCard);
                TienlenHelper.playCardEffect(list, player.holdPoint, isNewRound, lastCards, player.roleSex);
                this._playCardTime = game.totalTime;
                this._showCardZone.flySelfCards(player, list)
                flag = await TienlenHelper.nodeWait(0.1, this.node);
                if (!flag) return;
                player.removeShowCard(list);
                player.resetPopup();
            }
        } else {
            if (!TienlenRuntime.showAnimFlag) {
                this._showCardZone.show(list);
                player.updateCardNum();
                if (player.cardNum == 0 && TienlenGameData.instance.isFightToEnd) {
                    player.showWinIndex(winIndex);
                }
            } else {
                let flag = true;
                if (delta <= 500) {
                    flag = await TienlenHelper.nodeWait((500 - delta) / 1000, this.node);
                }
                if (!flag) return;
                if (player.cardNum == 0 && TienlenGameData.instance.isFightToEnd) {
                    player.playCardOutWinAnim();
                    flag = await TienlenHelper.nodeWait(1, this.node);
                    if (!flag) return;
                    player.showWinIndex(winIndex);
                } else {
                    player.playCardOutAnim();
                }
                flag = await TienlenHelper.nodeWait(0.5, this.node);
                if (!flag) return;
                TienlenHelper.playCardEffect(list, player.holdPoint, isNewRound, lastCards, player.roleSex);
                this._playCardTime = game.totalTime;
                if (this._showCardZone != null && this._showCardZone.isValid) {
                    this._showCardZone.flyOtherCards(player, list);
                    player.updateCardNum();
                }

            }
        }
    }
    //直接显示最近两次出牌
    async showCards(list: number[]) {
        this._showCardZone.show(list)
    }

    clearShowCardZone() {
        this._showCardZone.clearCards();
    }

    resetPlayerOp() {
        for (let index = 0; index < this._playerList.length; index++) {
            const element = this._playerList[index];
            !element.isWaiting && element.hideOp();
        }
    }

    hideAllPlayer() {
        for (let i = 0; i < 4; ++i) {
            this.hidePlayer(i);
        }
    }

    reset() {
        this.hideOpList();
        this.clearShowCardZone();
        this._dispatchCard.hide();
        this.clock.hide();
        this.hideArrowAnim();
        this.hideBtnSort();
        this.hideToggleTip();
        this.hideBtnStart();
        this.hideWaitPlayer();
        this._playerList.forEach((v) => {
            v.reset();
        })
    }

    public getShowEffectTime(): number {
        return 0.1;
    }

    public getHideEffectTime(): number {
        return 0.1;
    }

    async showEffect() {
        if (!this._roomInfo) {
            this.playEnterAnim();
        } else if (this._roomInfo.IsMatch) {
            this.delayShowDesk(2);
        }
        UIManager.getInstance().closeAllWin();
        return true;
    }

    async hideEffect() {
        if (this._roomInfo && this._roomInfo.IsMatch) {
            await ObjectWait.instance.wait(MatchPromotion);
            await this.playLeaveAnim();
        }
        return true;
    }

    onDestroy() {
        TienlenGame._instance = null;
    }

}

