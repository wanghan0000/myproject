import { _decorator, Component, Node, BlockInputEvents, sp, animation, Animation, Label } from 'cc';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import ObjectWait from '../common/async/ObjectWait';
import { ButtonPlus } from '../common/component/ButtonPlus';
import tala from '../protocol/tala.js';
import TalaDefine, { PlayerOp } from '../TalaDefine';
import TalaHelper from '../TalaHelper';
import TalaRuntime from '../TalaRuntime';
import { TalaClock } from './TalaClock';
import { TalaDispatchCard } from './TalaDispatchCard';
import { TalaPlayer } from './TalaPlayer';
import { TalaShowCardZone } from './TalaShowCardZone';
const { ccclass, property } = _decorator;

@ccclass('TalaGame')
export class TalaGame extends UIScreen {
    @property(ButtonPlus)
    public btnReturn: ButtonPlus;
    @property(ButtonPlus)
    public btnSort: ButtonPlus;
    @property(ButtonPlus)
    public btnPlay: ButtonPlus;
    @property(ButtonPlus)
    public btnStart: ButtonPlus;
    @property(sp.Skeleton)
    private spineWaitPlayer: sp.Skeleton;
    @property(Animation)
    private animArrow0: Animation;
    @property(Animation)
    private animArrow1: Animation;
    @property(TalaClock)
    private clock: TalaClock;
    @property(Label)
    private labelCoin: Label;
    private _playerList: TalaPlayer[];
    private _dispatchCard: TalaDispatchCard;
    private _showCardZone: TalaShowCardZone;
    private _activeList: TalaPlayer[];
    private _roomInfo: tala.tala.SCTaLaRoomInfo;
    private static _instance: TalaGame;
    public static get instance(): TalaGame {
        return this._instance;
    }

    onLoad() {
        TalaGame._instance = this;
        this._playerList = this.getComponentsInChildren(TalaPlayer);
        this._dispatchCard = this.getComponentInChildren(TalaDispatchCard);
        this._showCardZone = this.getComponentInChildren(TalaShowCardZone);
        this.btnReturn.setClickHandler(async () => {
            let ret = await TalaHelper.callLeaveRoom();
        }, this);
        this.btnSort.setClickHandler(async () => {
            this.selfPlayer.opCardList.sort();
        });
        this.btnPlay.setClickHandler(async () => {
            let list = this.selfPlayer.opCardList.popupCardDataList;
            let type = TalaRuntime.instance.lastRoundOpIndex;
            if (TalaRuntime.instance.roomInfo.IsLast) {
                if (type == 0) {
                    TalaHelper.callOpCard(PlayerOp.PLAY, list);
                } else if (type == 1) {
                    TalaHelper.callOpCard(PlayerOp.SHOW, list);
                } else if (type == 2) {
                    TalaHelper.callOpCard(PlayerOp.COMBINE, list);
                }
            } else {
                TalaHelper.callOpCard(PlayerOp.PLAY, list);
            }
        });
        this.btnStart.setClickHandler(() => {
            TalaHelper.callOpCard(PlayerOp.START);
        });
        this._dispatchCard.node.on(Node.EventType.TOUCH_END, () => {
            TalaHelper.callOpCard(PlayerOp.DRAW, null);
        }
        );
        //屏蔽其他层可能穿透的输入
        this.addComponent(BlockInputEvents);
        ObjectWait.instance.notify(TalaGame, this);
    }
    onDestroy() {
        TalaGame._instance = null;
    }

    onShow(...params: any) {
        this.updateShow(params[0]);
    }

    updateShow(info: tala.tala.SCTaLaRoomInfo) {
        this._roomInfo = info;
        this._setDefault();
        let players = info.Players;
        for (let i = 0; i < players.length; ++i) {
            let data = players[i];
            if (TalaHelper.isAudience(data.Flag)) continue;
            let index = TalaHelper.PosToIndex(data.Pos, TalaHelper.getBaseSeat(), info.MaxPlayerNum);
            this.showPlayer(index, data, info);
        }
        //显示发牌区
        if (info.CardsNum > 0) {
            this._dispatchCard.showCount(info.CardsNum);
        }
        this.updateState(info);
        //显示垃圾牌
        for (let i = 0; i < players.length; ++i) {
            let data = players[i];
            let index = TalaHelper.PosToIndex(data.Pos, TalaHelper.getBaseSeat(), info.MaxPlayerNum);
            this._showCardZone.showIndex(index, data.DelCards);
        }
        this.labelCoin.string = Utils.cvtToKMB(info.BaseScore);
        if (info.CurOpIdx != -1) {
            let index = TalaHelper.PosToIndex(info.CurOpIdx, TalaHelper.getBaseSeat(), info.MaxPlayerNum);
            let player = this.getPlayer(index);
            player.playWait(TalaDefine.PlayCardTime - info.TimeOut);
            if (player.isSelf) {
                this.showBtnSort();
                this.checkShowBtnPlay();
                this.checkShowArrowAnim();
            }
        }
    }

    updateState(roomInfo: tala.tala.ISCTaLaRoomInfo) {
        let state = roomInfo.State;
        if (state == 0) {
            this.reset();
            this.showWaitPlayer();
        } else if (state == 1) {
            this.reset();
            let time = TalaDefine.DelayStartTime - roomInfo.TimeOut;
            time = time < 0 ? TalaDefine.DelayStartTime : time;
            this.clock.show(time);
            if (this.selfPlayer?.isMaster) {
                this.showBtnStart();
            }
        } else if (state == 2) {
            this.clock.hide();
            this.hideBtnStart();
            // if (TalaRuntime.instance.isAudience) {
            //     this.dispatchCards(TienlenGameData.instance.defaultCards);
            // }
        } else if (state == 3) {
            // if (TalaRuntime.instance.isAudience) {
            //     this.activeList.forEach((v) => {
            //         !v.isSelf && v.showCardFlag(true);
            //     })
            // }
            this.showShowCardZone();
            this.showBtnSort();
        } else if (state == 4) {
            this.hideOpList();
        }
    }

    _setDefault() {
        this.hideAllPlayer();
        this.hideOpList();
        this.hideShowCardZone();
        this.hideDispatchCard();
        this.hideBtnStart();
        this.hideArrowAnim(0);
        this.hideArrowAnim(1);
        this.hideWaitPlayer();
        this.hideClock();
    }

    hideAllPlayer() {
        for (let i = 0; i < 4; ++i) {
            this.hidePlayer(i);
        }
    }


    reset() {
        this.hideOpList();
        this.hideShowCardZone();
        this.hideDispatchCard();
        this.clock.hide();
        this.hideArrowAnim(0);
        this.hideArrowAnim(1);
        this.hideBtnSort();
        this.hideBtnStart();
        this.hideWaitPlayer();
        this._playerList.forEach((v) => {
            v.reset();
        })
    }

    hideClock() {
        this.clock.hide();
    }

    hideOpList() {
        this.hideBtnPlay();
        this.hideBtnSort();
    }

    showOpList() {
        this.showBtnPlay();
        this.showBtnSort();
    }

    checkShowBtnPlay() {
        let flag = this.selfPlayer.opCardList.cardCount == 10;
        if (flag) this.showBtnPlay();
        else this.hideBtnPlay();
    }

    checkShowArrowAnim() {
        !this.btnPlay.node.active && this.showArrowAnim(0);
    }

    setBtnPlayType(type: number) {
        if (type == 1) {
            this.btnPlay.getComponentInChildren(Label).string = "SHOW";
        } else if (type == 2) {
            this.btnPlay.getComponentInChildren(Label).string = "COMBINE";
        } else {
            this.btnPlay.getComponentInChildren(Label).string = "PLAY";
        }
    }

    showBtnSort() {
        this.btnSort.node.active = true;
    }

    hideBtnSort() {
        this.btnSort.node.active = false;
    }

    showBtnPlay() {
        this.btnPlay.node.active = true;
        this.setBtnPlayType(TalaRuntime.instance.lastRoundOpIndex);
        this.showArrowAnim(1);
    }

    hideBtnPlay() {
        this.btnPlay.node.active = false;
        this.hideArrowAnim(1);
    }

    hideShowCardZone() {
        this._showCardZone.hide();
    }

    grayShowCardZone(flag: boolean) {
        this._showCardZone.isGray = flag;
    }

    grayOtherHandCard(flag: boolean) {
        let list = this.activeList;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            !element.isSelf && element.grayHandCards(flag);
        }
    }

    showShowCardZone(...args: any) {
        this._showCardZone.show(...args);
    }

    hideDispatchCard() {
        this._dispatchCard.hide();
    }

    hideArrowAnim(index: number) {
        if (index == 0) {
            this.animArrow0.node.active = false;
        } else {
            this.animArrow1.node.active = false;
        }
    }

    showArrowAnim(index: number) {
        if (index == 0) {
            this.animArrow0.node.active = true;
            this.animArrow0.play();
        } else {
            this.animArrow1.node.active = true;
            this.animArrow1.play();
        }
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

    async dispatchCards(list: number[]) {
        let player = this.selfPlayer
        let activeList = this.activeList;
        if (!TalaRuntime.instance.showAnimFlag) {
            player?.showOpCards(list);
            activeList.forEach((v) => {
                !v.isSelf && v.showCardFlag();
            })
        } else {
            player?.opCardList.enableClick(false);
            player?.fillOpCards(list);
            activeList.forEach((v) => {
                !v.isSelf && v.showCardFlag();
            })
            await this._dispatchCard.show(activeList, list);
            activeList.forEach((v) => {
                !v.isSelf && v.showCardFlag();
            })
            if (player && !player.isWaiting) {
                await player.opCardList.sort();
            }
        }
    }

    updateCardNum(num: number) {
        this._dispatchCard.showCount(num);
        if (num == 0) {
            this._dispatchCard.hideCardStack();
        }
    }

    removeEatTip() {
        this._showCardZone.removeTips();
    }

    removePhomZoneTip() {
        let list = this.activeList;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            element.removePhomZoneTip();
        }
    }

    async dispatchCardToPlayer(player: TalaPlayer, id: number) {
        await this._dispatchCard.dispatchCardToPlayer(player, id);
    }

    async playCard(player: TalaPlayer, cardId: number) {
        this._showCardZone.flyCard(player, cardId);
    }

    async moveShowCard(srdIdx: number, dstIdx: number, cardId: number) {
        this._showCardZone.moveCard(srdIdx, dstIdx, cardId);
    }

    async eatCard(index: number, cardId: number, player: TalaPlayer) {
        this._showCardZone.flyCardToPlayer(index, cardId, player);
    }

    showEatTip(index: number) {
        this._showCardZone.showTip(index);
    }

    showPlayer(index: number, ...args: any[]) {
        this._playerList[index].show(...args);
    }

    hidePlayer(index: number) {
        this._playerList[index].hide();
    }

    getPlayer(index: number): TalaPlayer {
        return this._playerList[index];
    }

    get activeList(): TalaPlayer[] {
        this._activeList = this._activeList || [];
        this._activeList.length = 0;
        for (let index = 0; index < this._playerList.length; index++) {
            const element = this._playerList[index];
            if (element.node.active && !element.isAudience && !element.isWaiting) this._activeList.push(element);
        }
        return this._activeList;
    }

    get selfPlayer(): TalaPlayer {
        if (!TalaRuntime.instance.isAudience)
            return this.getPlayer(0);
        else
            return null;
    }
}

