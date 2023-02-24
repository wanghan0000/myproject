import { _decorator, Component, Node, Label, Sprite, sp, Prefab, UITransform, Vec3, Tween, tween } from 'cc';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { CancelationToken } from '../common/async/CancelationToken';
import { BaseComponent } from '../common/component/BaseComponent';
import { Card } from '../common/component/Card';
import { Model2D } from '../common/component/Model2D';
import { WaitProgress } from '../common/component/WaitProgress';
import CardHelper from '../common/helper/CardHelper';
import tala from '../protocol/tala.js';
import { PlayerOp } from '../TalaDefine';
import TalaHelper from '../TalaHelper';
import TalaRuntime from '../TalaRuntime';
import { PhomCardZone } from './PhomCardZone';
import { TalaClock } from './TalaClock';
import { TalaOpCardList } from './TalaOpCardList';
import { TalaShowCardList } from './TalaShowCardList';
const { ccclass, property } = _decorator;

@ccclass('TalaPlayer')
export class TalaPlayer extends BaseComponent {
    @property(Label)
    public labelUP: Label;
    @property(Label)
    public labelDown: Label;
    @property(Label)
    public labelDown2: Label;
    @property(Node)
    public cardNode: Node;
    @property(Sprite)
    public spMaster: Sprite;
    @property(sp.Skeleton)
    public spineState: sp.Skeleton;
    @property(sp.Skeleton)
    public spineResult: sp.Skeleton;
    @property(Sprite)
    public spPropBg: Sprite;
    @property(Sprite)
    public spGold: Sprite;
    @property(Sprite)
    public spVCard: Sprite;
    @property(Sprite)
    public spHead: Sprite;
    @property(Node)
    public holdPoint: Node;
    @property(Node)
    public coinNode: Node;
    @property(TalaOpCardList)
    public opCardList: TalaOpCardList;
    @property
    public index: number = 0;
    private _data: tala.tala.ITaLaPlayerData;
    private _roomInfo: tala.tala.ISCTaLaRoomInfo;
    private _showCardList: TalaShowCardList;
    private _phomCardZone: PhomCardZone;
    private _waitProgress: WaitProgress;
    // private _goldAnim: BillGoldAnim;

    onLoad() {
        this._showCardList = this.getComponentInChildren(TalaShowCardList);
        this._phomCardZone = this.getComponentInChildren(PhomCardZone);
        this._waitProgress = this.getComponentInChildren(WaitProgress);
    }

    async start() {
        if (this.index == 1 || this.index == 2) {
            this.labelUP.node.setSiblingIndex(1);
        }
        if (this.index != 0) {//其他玩家不显示vcard
            this.hideVCard();
        }
        // this._goldAnim = this.node.children[0].getChildByName("BillGoldAnim").getComponent(BillGoldAnim);

    }

    public get infoNode(): Node {
        return this.node.children[0].getChildByName("info");
    }

    public get isSelf(): boolean {
        if (this._data) {
            return this._data.SnId == TalaRuntime.instance.selfPlayerData.SnId;
        } else {
            return this.index == 0;
        }
    }

    public get data(): tala.tala.ITaLaPlayerData {
        return this._data;
    }

    public get snId(): number {
        return this._data.SnId;
    }

    public get roleSex(): number {
        return this._data.RoleId - 2000001;
    }

    hideVCard() {
        let trans = this.spPropBg.getComponent(UITransform);
        trans.height = trans.height / 2;
        this.labelDown2.node.active = false;
        this.spVCard.node.active = false;
    }


    playWait(totalTime: number) {
        if (totalTime <= 0) return;
        this._waitProgress?.play(totalTime);
    }

    stopWait() {
        this._waitProgress?.stop();
    }

    public get popupCardList() {
        return this.opCardList?.popupCardList;
    }

    public get cardList() {
        return this.opCardList.cardList;
    }

    public showCardTip(value: number[]) {
        this.opCardList?.showCardTip(value);
    }

    public getCardList(list: number[]) {
        return this.opCardList.getCardList(list);
    }

    public get labelName(): Label {
        return this.labelUP;
    }

    public get labelCoin(): Label {
        return this.labelDown;
    }

    public get labelVCard(): Label {
        return this.labelDown2;
    }

    public async show(...args: any[]) {
        super.show(...args);
        this.reset();
        let data: tala.tala.ITaLaPlayerData = this._data = args[0];
        this._roomInfo = args[1];
        this.checkShowCardFlag();
        this.labelName.string = `${data.SnId}`;
        this.labelCoin.string = Utils.cvtToKMB(data.Coin);
        this.labelVCard.string = Utils.cvtToKMB(data.Items['30001'] || 0);
        let isAudience = TalaRuntime.instance.isAudience;
        !isAudience && this.showOpCards(data.Cards, data.ChiCards);
        isAudience && this.hideVCard();
        this.updatePlayerStateFlag();
        this.updateMasterFlag();
        this.updateHead(data.Head);
        // this.showNextOp(data.LastOp);
    }

    async updateHead(head: number) {
        this.spHead.spriteFrame = await Utils.getHeadSpriteFrame(head);
    }

    public showPhom(...args: any) {
        this._phomCardZone.show();
        this.flyPhom(args[0]);
        this.removeEatCardFlag();
    }

    public showLastHandCards(cards: number[]) {
        !this.isSelf && this._showCardList.show(cards);
    }

    public combinePhom(otherPlayer: TalaPlayer, cardId: number) {
        let showPhoms = TalaRuntime.instance.getShowPhoms(this.data.SnId);
        let result = CardHelper.markPhoms(showPhoms.Phoms, cardId);
        if (result.length == 0) {
            TalaHelper.log("combinephom result is 0");
        }
        let index = result.length > 0 ? result[0] : 0;
        this._phomCardZone.flyCards(otherPlayer, [cardId], index);
        this._phomCardZone.removeTips();
    }

    public async flyPhom(cardList: tala.tala.IPhoms[]) {
        for (let index = 0; index < cardList.length; index++) {
            const element = cardList[index];
            this._phomCardZone.flyCards(this, element.Phom, index);
            await TalaHelper.wait(0.1);
        }
    }

    public showPhomZoneTip(indexs: number[]) {
        for (let index = 0; index < indexs.length; index++) {
            const element = indexs[index];
            this._phomCardZone.showTips(element);
        }
    }

    public removePhomZoneTip() {
        this._phomCardZone.removeTips();
    }

    public hidePhom() {
        this._phomCardZone.hide();
    }

    public async updatePlayerStateFlag() {
        if (this.isWaiting) {
            this.spineState.node.active = true;
            this.spineState.animation = 'WAITING';
        } else {
            this.spineState.node.active = false;
        }
    }

    public updateMasterFlag() {
        this.spMaster.node.active = this.isMaster;
    }

    checkShowCardFlag() {
        if (this._roomInfo.State == 4) {
            this.hideCardFlag();
            this._showCardList.show(this._data.Cards);
        } else {
            if (this.isSelf) {
                this.hideCardFlag();
            } else {
                if (this._data && this._data.Cards.length > 0) {
                    this.showCardFlag();
                } else {
                    this.hideCardFlag();
                }
            }
        }
    }

    public get cardNum(): number {
        return this._data.Cards.length;
    }

    showCardFlag() {
        this.cardNode.parent.active = true;
    }

    hideCardFlag() {
        this.removeEatCardFlag();
        this.cardNode.parent.active = false;
    }

    removeEatCardFlag() {
        let list = this.cardNode.parent.getComponentsInChildren(Card);
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            element.mark = false;
            TalaHelper.putCard(element.node);
        }
    }

    public get isWaiting(): boolean {
        if (!this._data) return false;
        return TalaHelper.isWaiting(this._data.Flag);
    }

    public get isAudience(): boolean {
        if (!this._data) return false;
        return TalaHelper.isAudience(this._data.Flag);
    }

    public get isMaster(): boolean {
        if (!this._data) return false;
        return this._roomInfo.MasterSnid == this._data.SnId;
    }

    public showOpCards(list: any[], eatList: any[] = []) {
        this.opCardList?.show(list, eatList);
    }

    public showOpCardIndex(index: number, id: number, pos: Vec3 = null) {
        this.opCardList?.showIndex(index, id);
        pos && this.opCardList?.setPosX(index, pos.x, pos.y);
    }

    public fillOpCards(list: any[]) {
        this.opCardList?.fill(list);
    }

    public hideOpCards() {
        this.opCardList?.hide();
    }

    public removeOpCard(list: any[]) {
        this.opCardList?.removeCards(list);
    }

    public hideShowCard() {
        this._showCardList.hide();
    }

    public async showNextOp(opcode: PlayerOp) {
        if (opcode == PlayerOp.DRAW) {
            this.spineState.node.active = true;
            this.spineState.animation = 'Drawing cards';
        } else if (opcode == PlayerOp.PLAY) {
            this.spineState.node.active = true;
            this.spineState.animation = 'Playing cards';
        } else {
            this.spineState.node.active = false;
        }
    }

    public resetPopup() {
        this.opCardList?.resetPopup();
    }

    public hideOp() {
        this.spineState.node.active = false;
    }

    public hide() {
        super.hide();
        this.reset();
    }

    public async showBill(data: tala.tala.ITaLaPlayerGameBilled, winPlayer: TalaPlayer) {
        this.labelCoin.string = Utils.cvtToKMB(data.GameCoin);
        let awardNode = this.getAwardNode();
        awardNode.active = true;
        let labels = awardNode.getComponentsInChildren(Label);
        let labelWin = labels[0];
        let labelLose = labels[1];
        if (data.IsWin == 2) {
            labelWin.node.active = false;
            labelLose.node.active = true;
            labelLose.string = `-${Math.abs(data.WinCoin)}` //`-${Utils.cvtToKMB(Math.abs(data.WinCoin))}`;
            this.showSpineResult(data);
            this.tweenShow(labelLose);
            // if (TalaRuntime.instance.showAnimFlag)
            // this._goldAnim.show(winPlayer.coinNode);
        } else {
            labelWin.node.active = true;
            labelLose.node.active = false;
            labelWin.string = `+${Math.abs(data.WinCoin)}`//`+${Utils.cvtToKMB(Math.abs(data.WinCoin))}`;
            this.showSpineResult(data);
            this.tweenShow(labelWin);
        }
        if (this.isSelf && TalaRuntime.instance.showAnimFlag)
            this.delayShowGainItem(2, data);
        CardHelper.sortBigger(data.Cards);
        !this.isSelf && this._showCardList.show(data.Cards);
        this.hideCardFlag();
        // this.hideOpCards();
    }

    showSpineResult(data: tala.tala.ITaLaPlayerGameBilled) {
        this.spineResult.node.active = true;
        if (data.Rank == -1) {//胡牌只显示赢和输 没有名次
            if (data.IsWin == 1) {
                this.spineResult.animation = "FIRST";
            } else {
                this.spineResult.animation = "LAST";
            }
        } else {
            let list = ['FIRST', "SECOND", "THIRD", "Fourth", "MOM"]
            this.spineResult.animation = list[data.Rank];
        }
    }

    async showMom(delay: number) {
        this.spineResult.node.active = true;
        this.spineResult.animation = "MOM";
        let flag = await TalaHelper.nodeWait(delay, this.node);
        if (!flag) return;
        this.spineResult.node.active = false;
    }

    async delayShowGainItem(delay: number, data: tala.tala.ITaLaPlayerGameBilled) {
        // let flag = await TalaHelper.nodeWait(delay, this.node);
        // if (!flag) return;
        // let items = TalaRuntime.instance.gainItems;
        // let list: { id: number, cnt: number }[] = [];
        // let self = TalaRuntime.instance.selfPlayerData;
        // if (items) {
        //     for (const key in items) {
        //         if (Object.prototype.hasOwnProperty.call(items, key)) {
        //             const element = items[key];
        //             list.push({ id: parseInt(key), cnt: element });
        //             self.Items[key] += element;
        //         }
        //     }
        //     this.labelVCard.string = Utils.cvtToKMB(self.Items['30001']);
        // }
        // if (data.IsWin != 2) {
        //     list.push({ id: 1, cnt: data.WinCoin });
        // }
        // if (list.length != 0) {
        //     TienlenUIMgr.getInstance().showAwardGet(list);
        // }
        // TienlenGameData.instance.gainItems = null;
        // await TienlenHelper.nodeWait(5, this.node);
        // UIManager.getInstance().closeForm("Tienlen/prefab/common/UITienlenAwardGet");
    }

    public async showSmallBill(billCoin: number, gameCoin: number, winPlayer?: TalaPlayer) {
        this.labelCoin.string = Utils.cvtToKMB(gameCoin);
        let awardNode = this.getAwardNode();
        awardNode.active = true;
        let labels = awardNode.getComponentsInChildren(Label);
        let labelWin = labels[0];
        let labelLose = labels[1];
        if (billCoin < 0) {
            labelLose.node.active = true;
            labelWin.node.active = false;
            labelLose.string = `-${-billCoin}` //`-${Utils.cvtToKMB(-billCoin)}`;
            this.tweenShow(labelLose);
            // if (TalaRuntime.instance.showAnimFlag)
            // this._goldAnim.show(winPlayer.coinNode);
        } else {
            labelLose.node.active = false;
            labelWin.node.active = true;
            labelWin.string = `+${billCoin}` //`+${Utils.cvtToKMB(billCoin)}`;
            this.tweenShow(labelWin);
        }
        let flag = await TalaHelper.nodeWait(3, this.node);
        if (!flag) return;
        awardNode.active = false;
    }

    tweenShow(label: Label) {
        Tween.stopAllByTarget(label.node);
        label.node.setScale(Vec3.ZERO);
        tween(label.node).to(0.2, { scale: Vec3.ONE }, { easing: "backOut" }).start();
    }

    public getAwardNode(): Node {
        return this.node.children[0].getChildByName("awardNode");
    }

    //添加吃牌
    public addSpecialCard(card: Card) {
        card.mark = true;
        this.cardNode.parent.addChild(card.node);
    }

    public reset() {
        this.node.children[0].getChildByName("awardNode").active = false;
        this.spineState.node.active = false;
        this.spineResult.node.active = false;
        // this._goldAnim?.hide();
        this.stopWait();
        this.hideOpCards();
        this.hideShowCard();
        this.hideCardFlag();
        this.hidePhom();
        this.hideOpCards();
        this.grayHandCards(false);
    }

    public grayHandCards(flag: boolean) {
        this._showCardList.isGray = flag;
    }
}

