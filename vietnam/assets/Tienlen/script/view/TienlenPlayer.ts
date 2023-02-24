import { _decorator, Component, Node, Label, Sprite, Graphics, UITransform, Mask, math, Font, BitmapFont, TTFFont, v3, UIOpacity, CCInteger, Vec3, Color, SkeletalAnimation, Animation, Prefab, instantiate, Pool, SpriteFrame, Skeleton, sp } from 'cc';
import { WaitProgress } from '../common/component/WaitProgress';
import { BaseComponent } from '../common/component/BaseComponent';
import { TienlenShowCardList } from './TienlenShowCardList';
import tienlen from '../protocol/tienlen.js';
import { TienlenOpCardList } from './TienlenOpCardList';
import ResourceHelper from '../common/helper/ResourceHelper';
import TienlenHelper from '../TienlenHelper';
import TienlenDefine from '../TienlenDefine';
import { PlayerStateFlag } from '../common/define';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { BillGoldAnim } from './BillGoldAnim';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import CardHelper from '../common/helper/CardHelper';
import { TienlenGameData } from '../model/TienlenGameData';
import { TienlenClock } from './TienlenClock';
import { UserData } from '../../../ScriptCore/data/UserData';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { Model2D } from '../common/component/Model2D';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { TienlenUIMgr } from '../TienlenUIMgr';
import { CancelationToken } from '../common/async/CancelationToken';
import { TienlenRuntime } from '../TienlenRuntime';
import { UIManager } from '../../../ScriptCore/UIFrame/UIManager';
import { MatchRank } from '../match/MatchRank';
const { ccclass, property } = _decorator;

@ccclass('TienlenPlayer')
export class TienlenPlayer extends BaseComponent {
    @property(Label)
    public labelUP: Label;
    @property(Label)
    public labelDown: Label;
    @property(Label)
    public labelDown2: Label;
    @property(Label)
    public labelCardNum: Label;
    @property(Node)
    public cardNode: Node;
    @property(Sprite)
    public spMaster: Sprite;
    @property(sp.Skeleton)
    public spineState: sp.Skeleton;
    @property(sp.Skeleton)
    public spineResult: sp.Skeleton;
    @property(Node)
    public modelViewNode: Node;
    @property(Prefab)
    public pfbMaleModel: Prefab;
    @property(Prefab)
    public pfbFemaleModel: Prefab;
    @property(Prefab)
    public pfbDefModel: Prefab;
    @property(Sprite)
    public spPropBg: Sprite;
    @property(Sprite)
    public spGold: Sprite;
    @property(Sprite)
    public spVCard: Sprite;
    @property(Node)
    public holdPoint: Node;
    @property(Node)
    public coinNode: Node;
    @property(TienlenOpCardList)
    public opCardList: TienlenOpCardList;
    @property
    public index: number = 0;
    private _model2D: Model2D;
    private _waitClock: TienlenClock;
    private _data: tienlen.tienlen.TienLenPlayerData;
    private _roomInfo: tienlen.tienlen.ISCTienLenRoomInfo;
    private _showCardList: TienlenShowCardList;
    private _goldAnim: BillGoldAnim;
    private _cancelToken: CancelationToken;

    onLoad() {
        this._waitClock = this.getComponentInChildren(TienlenClock);
        this._showCardList = this.getComponentInChildren(TienlenShowCardList);
    }

    async start() {
        if (this.index == 1 || this.index == 2) {
            this.labelUP.node.setSiblingIndex(1);
        }
        if (this.index != 0) {//其他玩家不显示vcard
            this.hideVCard();
        }
        this.infoNode.active = false;
        this.node.children[0].getChildByName("matchInfo").active = false;
        this.node.children[0].getChildByName("matchInfo2").active = false;
        if (TienlenGameData.instance.isMatch) {
            this.hideVCard();
            this.spGold.spriteFrame = await TienlenHelper.getGameJifenRes(true);
            let node = this.matchInfoNode;
            if (this.index == 0) {
                node.setSiblingIndex(node.parent.children.length - 1);
            }
            node.active = true;
            this.index != 0 && node.getChildByName("MatchRank").getComponent(MatchRank).show(this._data.Lv);
            this._goldAnim = this.node.children[0].getChildByName("BillGoldAnim2").getComponent(BillGoldAnim);
        } else {
            this.infoNode.active = true;
            this._goldAnim = this.node.children[0].getChildByName("BillGoldAnim").getComponent(BillGoldAnim);
        }
    }

    public get matchInfoNode(): Node {
        if (this._roomInfo.IsMatch == 1) {
            return this.node.children[0].getChildByName("matchInfo");
        } else if (this._roomInfo.IsMatch == 2) {
            return this.node.children[0].getChildByName("matchInfo2");
        }
    }

    public get infoNode(): Node {
        return this.node.children[0].getChildByName("info");
    }

    public get isSelf(): boolean {
        if (this._data) {
            return this._data.SnId == TienlenGameData.instance.selfPlayerData.SnId;
        } else {
            return false;
        }
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

    async showModel(roleId: number) {
        if (this._model2D) {
            return;
        }
        let pfb = await TienlenHelper.getModel2DPfb(roleId);
        if (this.modelViewNode.children.length == 0) {
            let model = PoolManager.instance.getNode(pfb, this.modelViewNode);
            model.position = Vec3.ZERO;
            this._model2D = model.getComponent(Model2D);
            let modelNode = this._model2D.getComponentsInChildren(UITransform)[0];
            modelNode.node.on(Node.EventType.TOUCH_END, async () => {
                if (!this.isSelf) {
                    let ret = await TienlenHelper.callQueryPlayer(this._data.SnId)
                    TienlenHelper.showUserInfo(ret);
                }
            }, this);
            this.playIdleAnim();
        }
    }

    hideModel() {
        if (!this._model2D) return;
        let modelNode = this._model2D.getComponentsInChildren(UITransform)[0];
        modelNode.node.targetOff(this);
        PoolManager.instance.putNode(this._model2D.node);
        this._model2D = null;
    }

    playWait(totalTime: number) {
        if (totalTime <= 0) return;
        this._waitClock && this._waitClock.show(totalTime, this.isSelf);
        this.playThinkAnim();
    }

    stopWait() {
        this._waitClock.hide();
    }

    playEnterAnim() {
        this._model2D && this._model2D.playEnterAnim();
    }

    playIdleAnim() {
        this._model2D && this._model2D.playIdleAnim();
    }

    playCardIdleAnim() {
        this._model2D && this._model2D.playCardIdleAnim();
    }

    playThinkAnim() {
        this._model2D && this._model2D.playThinkAnim();
    }

    playCardOutAnim(speed: number = 2) {
        this._model2D && this._model2D.playCardOutAnim(speed);
    }

    playCardOutWinAnim(speed: number = 2) {
        this._model2D && this._model2D.playCardOutWinAnim(speed);
    }

    playWinAnim() {
        this._model2D && this._model2D.playEnterAnim();
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

    public get model2D(): Model2D {
        return this._model2D;
    }

    public get labelName(): Label {
        if (TienlenGameData.instance.isMatch) {
            let node = this.matchInfoNode;
            return node.getChildByName("labelUp").getComponent(Label);
        } else {
            return this.labelUP;
        }
    }

    public get labelCoin(): Label {
        if (TienlenGameData.instance.isMatch) {
            let node = this.matchInfoNode;
            return node.getChildByName("labelDown").getComponent(Label);
        } else {
            return this.labelDown;
        }
    }

    public get labelVCard(): Label {
        return this.labelDown2;
    }

    public async show(...args: any[]) {
        super.show(...args);
        this.reset();
        let data: tienlen.tienlen.TienLenPlayerData = this._data = args[0];
        this._roomInfo = args[1];
        this.checkShowCardFlag();
        this.labelName.string = `${data.SnId}`;
        this.labelCoin.string = this._roomInfo.IsMatch ? data.Coin.toString() : Utils.cvtToKMB(data.Coin);
        this.labelVCard.string = Utils.cvtToKMB(data.Items['30001'] || 0);
        let isAudience = TienlenGameData.instance.isAudience;
        !isAudience && this.showOpCards(data.Cards);
        isAudience && this.hideVCard();
        this.updatePlayerStateFlag();
        this.updateMasterFlag();
        this.showOp(data.LastOp);
        this.showModel(this._data.RoleId);
        let winIdx = this._roomInfo.WinSnids.indexOf(data.SnId);
        if (winIdx != -1) {
            this.showWinIndex(winIdx);
        }
    }

    public updatePlayerStateFlag() {
        if (this.isWaiting) {
            this.spineState.node.active = true;
            this.spineState.animation = 'WAITING';
        } else {
            this.spineState.node.active = false;
        }
    }

    public updateMasterFlag() {
        this.spMaster.node.active = this.isMaster && !TienlenGameData.instance.isMatch;
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
                    this.showCardFlag(true);
                } else {
                    this.hideCardFlag();
                }
            }
        }
    }

    updateCardNum() {
        if (this._data && this._data.Cards.length > 0) {
            this.labelCardNum.node.parent.active = true;
            let offset = this._data.Cards.length < 10 ? 0 : -2;
            this.labelCardNum.node.setPosition(offset, this.labelCardNum.node.position.y);
            this.labelCardNum.string = this._data.Cards.length.toString();
        } else {
            this.labelCardNum.node.parent.active = false;
        }
    }

    public get cardNum(): number {
        return this._data.Cards.length;
    }



    showCardFlag(showNum: boolean) {
        this.cardNode.parent.active = true;
        if (showNum)
            this.updateCardNum();
        else {
            this.labelCardNum.node.parent.active = false;
        }
    }

    hideCardFlag() {
        this.cardNode.parent.active = false;
    }

    public get isWaiting(): boolean {
        if (!this._data) return false;
        return TienlenHelper.isWaiting(this._data.Flag);
    }

    public get isAudience(): boolean {
        if (!this._data) return false;
        return TienlenHelper.isAudience(this._data.Flag);
    }

    public get isMaster(): boolean {
        if (!this._data) return false;
        return this._roomInfo.MasterSnid == this._data.SnId;
    }

    public showOpCards(list: any[]) {
        this.opCardList?.show(list);
    }

    public showOpCardIndex(index: number, id: number, pos: Vec3 = null) {
        this.opCardList?.showIndex(index, id);
        pos && this.opCardList?.setPosX(index, pos.x, pos.y);
    }

    public fillOpCards(list: any[]) {
        this.opCardList?.fill(list);
    }

    public checkOpCardsValid() {
        if (this.opCardList.cardList.length != 13) {
            TienlenHelper.warn('checkOpCardsValid length ', this.opCardList.cardList.length)
            this.opCardList.resetCards();
        }
    }

    public hideOpCards() {
        this.opCardList?.hide();
    }

    public removeShowCard(list: any[]) {
        this.opCardList?.removeCards(list);
        !this.isSelf && this.updateCardNum();
    }

    public hideShowCard() {
        this._showCardList.hide();
    }

    public async showOp(opcode: number) {
        if (opcode == 2) {
            this.spineState.node.active = true;
            this.spineState.animation = 'PASS';
        } else if (!this.isWaiting) {
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
        this.hideModel();
        // this._cancelToken && this._cancelToken.invoke();
        // this._cancelToken = null;
    }

    public showWinIndex(index: number) {
        let list = ["FIRST", "SECOND", "THIRD"];
        if (index >= list.length) return;
        this.spineResult.node.active = true;
        this.spineResult.animation = list[index];
    }

    public async showBill(data: tienlen.tienlen.ITienLenPlayerGameBilled, winPlayer: TienlenPlayer) {
        this.labelCoin.string = this._roomInfo.IsMatch ? data.GameCoin.toString() : Utils.cvtToKMB(data.GameCoin);
        let awardNode = this.getAwardNode();
        awardNode.active = true;
        let labels = awardNode.getComponentsInChildren(Label);
        let labelWin = labels[0];
        let labelLose = labels[1];
        let isMatch = this._roomInfo.IsMatch;
        if (data.IsWin == 2) {
            if (this._data.Cards.length > 0) {
                this.spineResult.node.active = true;
                this.spineResult.animation = 'LAST';
            }
            labelWin.node.active = false;
            labelLose.node.active = true;
            labelLose.string = isMatch ? `-${Math.abs(data.WinCoin)}` : `-${Utils.cvtToKMB(Math.abs(data.WinCoin))}`;
            this.playIdleAnim();
            if (TienlenRuntime.showAnimFlag)
                this._goldAnim.show(winPlayer.coinNode);
        } else {
            labelWin.node.active = true;
            labelLose.node.active = false;
            labelWin.string = isMatch ? `+${Math.abs(data.WinCoin)}` : `+${Utils.cvtToKMB(Math.abs(data.WinCoin))}`;
            if (!TienlenGameData.instance.isFightToEnd) {
                this.spineResult.node.active = true;
                this.spineResult.animation = 'FIRST';
            }
            this.playWinAnim();
        }
        if (this.isSelf && TienlenRuntime.showAnimFlag && !isMatch)
            this.delayShowGainItem(2, data);
        CardHelper.sortBigger(data.Cards);
        this._showCardList.show(data.Cards);
        this.hideCardFlag();
        this.hideOpCards();
    }

    async delayShowGainItem(delay: number, data: tienlen.tienlen.ITienLenPlayerGameBilled) {
        // this._cancelToken = new CancelationToken();
        let flag = await TienlenHelper.nodeWait(delay, this.node);
        if (!flag) return;
        let items = TienlenGameData.instance.gainItems;
        let list: { id: number, cnt: number }[] = [];
        let self = TienlenGameData.instance.selfPlayerData;
        if (items) {
            for (const key in items) {
                if (Object.prototype.hasOwnProperty.call(items, key)) {
                    const element = items[key];
                    list.push({ id: parseInt(key), cnt: element });
                    self.Items[key] += element;
                }
            }
            this.labelVCard.string = Utils.cvtToKMB(self.Items['30001']);
        }
        if (data.IsWin != 2) {
            list.push({ id: 1, cnt: data.WinCoin });
        }
        if (list.length != 0) {
            TienlenUIMgr.getInstance().showAwardGet(list);
        }
        TienlenGameData.instance.gainItems = null;
        await TienlenHelper.nodeWait(5, this.node);
        UIManager.getInstance().closeForm("Tienlen/prefab/common/UITienlenAwardGet");
    }

    public async showSmallBill(billCoin: number, gameCoin: number, winPlayer?: TienlenPlayer) {
        this.labelCoin.string = this._roomInfo.IsMatch ? gameCoin.toString() : Utils.cvtToKMB(gameCoin);
        let awardNode = this.getAwardNode();
        awardNode.active = true;
        let labels = awardNode.getComponentsInChildren(Label);
        let labelWin = labels[0];
        let labelLose = labels[1];
        let isMatch = this._roomInfo.IsMatch;
        if (billCoin < 0) {
            labelLose.node.active = true;
            labelWin.node.active = false;
            labelLose.string = isMatch ? `-${Math.abs(billCoin)}` : `-${Utils.cvtToKMB(-billCoin)}`;
            if (TienlenRuntime.showAnimFlag)
                this._goldAnim.show(winPlayer.coinNode);
        } else {
            labelLose.node.active = false;
            labelWin.node.active = true;
            labelWin.string = isMatch ? `+${Math.abs(billCoin)}` : `+${Utils.cvtToKMB(billCoin)}`;
        }
        let flag = await TienlenHelper.nodeWait(3, this.node);
        if (!flag) return;
        awardNode.active = false;
    }

    public getAwardNode(): Node {
        if (this._roomInfo && this._roomInfo.IsMatch) {
            return this.node.children[0].getChildByName("matchAwardNode");
        } else {
            return this.node.children[0].getChildByName("awardNode");
        }
    }


    public reset() {
        this.node.children[0].getChildByName("matchAwardNode").active = false;
        this.node.children[0].getChildByName("awardNode").active = false;
        this.spineState.node.active = false;
        this.spineResult.node.active = false;
        this._goldAnim?.hide();
        this.stopWait();
        this.hideOpCards();
        this.hideShowCard();
        this.hideCardFlag();
    }

}

