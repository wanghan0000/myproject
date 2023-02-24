import { _decorator, Component, Node, Button, Sprite, Label, ProgressBar, Prefab, instantiate, sp, v3, tween, Tween, Vec3, UIOpacity, screen, view, ToggleContainer, assetManager } from 'cc';
import { BagData } from '../../../ScriptCore/data/BagData';
import { UserData } from '../../../ScriptCore/data/UserData';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import { UIManager } from '../../../ScriptCore/UIFrame/UIManager';
import { ButtonPlus } from '../common/component/ButtonPlus';
import ResourceHelper from '../common/helper/ResourceHelper';
import tournament from '../protocol/tournament.js';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { TienlenUIMgr } from '../TienlenUIMgr';
import { TienlenUser } from '../view/TienlenUser';
import { ItemMatch, MatchEvent } from './ItemMatch';
import { MatchEnroll } from './MatchEnroll';
import { MatchGrade } from './MatchGrade';
import { MatchRank } from './MatchRank';
const { ccclass, property } = _decorator;

@ccclass('MatchSelect')
export class MatchSelect extends UIScreen {
    @property(Prefab)
    public pfbItemMatch: Prefab;
    @property(Prefab)
    public pfbItemMatchEx: Prefab;
    @property(Node)
    public list: Node;
    @property(ButtonPlus)
    public btnReturn: ButtonPlus;
    @property(ButtonPlus)
    public btnAddGold: ButtonPlus;
    @property(Sprite)
    public head: Sprite;
    @property(Label)
    public labelGold: Label;
    @property(Label)
    public labelDiamond: Label;
    @property(Label)
    public labelVCard: Label;
    @property(sp.Skeleton)
    public spineBg: sp.Skeleton;
    @property(sp.Skeleton)
    public spineCup: sp.Skeleton;
    @property(sp.Skeleton)
    public spineBase: sp.Skeleton;
    @property(MatchRank)
    public matchRank: MatchRank;
    private _matchEnroll: MatchEnroll;
    private _matchGrade: MatchGrade;
    private _matchTogContainer: ToggleContainer;
    private _matchTogIndex: number = -1;
    private static _instance: MatchSelect;

    public static get instance(): MatchSelect {
        return this._instance;
    }

    onLoad() {
        MatchSelect._instance = this;
        this.spineBg.node.active = false;
        this.spineBg.scheduleOnce(() => {
            this.spineBg.node.active = true;
        }, 0.3);
        this.btnReturn.setClickHandler(() => {
            TienlenRuntime.matchSeasonInfo = null;
            this.playLeaveAnim();
        }, this);
        this.btnAddGold.setClickHandler(() => {
            TienlenUIMgr.getInstance().showTienLenShop();
        });
        this.matchRank.getComponent(ButtonPlus).setClickHandler(() => {
            this.playEnterGradeAnim();
        }, this);
        this._matchEnroll = this.getComponentInChildren(MatchEnroll);
        this._matchGrade = this.getComponentInChildren(MatchGrade);
        this.node.on("enterEnroll", (evt: MatchEvent) => {
            evt.propagationStopped = true;
            this.playEnterEnrollAnim(evt.data);
        }, this, true);
        this.node.on("leaveEnroll", (evt: MatchEvent) => {
            evt.propagationStopped = true;
            this.playLeaveEnrollAnim();
        }, this, true);
        this.node.on("leaveGrade", (evt: MatchEvent) => {
            evt.propagationStopped = true;
            this.playLeaveGradeAnim();
        }, this, true);
        this._matchTogContainer = this.getComponentInChildren(ToggleContainer);
    }

    onDestroy() {
        MatchSelect._instance = null;
    }

    async onShow() {
        this.onUpdatePlayerData();
        this.updateHead(UserData.getInstance().getHead());
        this.playEnterAnim();
        this.matchTogIndex = 0;
        EventMgr.getInstance().addEventListener(EventName.SC_USER_GOLD_CHANGE, this.onUpdatePlayerData, this);
        EventMgr.getInstance().addEventListener(EventName.SC_Player_Coin_Change, this.onUpdatePlayerData, this);
        EventMgr.getInstance().addEventListener(EventName.BAG_DATA_ASYNC_NOTIFY, this.onUpdatePlayerData, this);
    }
    public set matchTogIndex(value: number) {
        if (this.matchTogIndex == value) return;
        this._matchTogIndex = value;
        this.onToggleChange();
    }

    public get matchTogIndex(): number {
        return this._matchTogIndex;
    }

    onToggleChange() {
        if (this.matchTogIndex == 0) {
            this.updateList(TienlenRuntime.matchInfos, 1);
        } else if (this.matchTogIndex == 1) {
            // this.list.active = false;
            // TienlenHelper.showFloatTips('暂未开放', this.node)
            this.updateList(TienlenRuntime.matchInfos, 2);
        }
    }

    public updateTMInfos(data: tournament.tournament.SCTMInfos) {
        if (this.matchTogIndex == 0) {
            this.updateList(TienlenRuntime.matchInfos, 1);
        } else if (this.matchTogIndex == 1) {
            this.updateList(TienlenRuntime.matchInfos, 2);
        }
        if (this._matchEnroll.node.active) {
            this._matchEnroll.updateTMInfo(data)
        }
    }

    onToggleClick() {
        TienlenHelper.playSound(TienlenDefine.SoundClick);
        this.matchTogIndex = this.checkindex;
    }

    get checkindex() {
        let list = this._matchTogContainer.toggleItems;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element.isChecked) return index;
        }
    }

    showUINode(flag: boolean) {
        let uiNode = this.btnReturn.node.parent;
        if (flag) {
            uiNode.children.forEach((v) => v.active = true);
            this.btnReturn.getComponent(Sprite).enabled = true;
        } else {
            uiNode.children.forEach((v) => v.active = false);
            //如果隐藏按钮，在长屏幕设备下widget不会起作用,导致显示按钮时会跳一下从原位置移动到当前屏幕左边缘
            this.btnReturn.node.active = true;
            this.btnReturn.getComponent(Sprite).enabled = false;
        }
    }

    async playEnterAnim() {
        this.showUINode(false);
        this.spineBase.node.active = false;
        this.spineBg.node.active = false;
        //this.scheduleOnce(()=>{
        this.spineCup.node.active = true;
        //这里经过测试好像效果还是没有  先执行一个动画，然后执行 真正的动画好
        this.spineCup.setToSetupPose();
        this.spineCup.updateAnimation(0);
        this.spineCup.setAnimation(0, "rc1", false);
        this.spineCup.setCompleteListener(() => {
            console.log("动画回调xxxx", this.spineCup.animation, "===");
            if (this.spineCup.animation == "rc1") {
                this.spineCup.setAnimation(0, "rc2", false);
                this.showUINode(true);
                this.spineBase.node.active = true;
                this.playMatchRankAnim();
                this.spineBase.setAnimation(0, "ch1", false);
                this.spineBase.setCompleteListener(() => {
                    if (this.spineBase.animation == "ch1")
                        this.spineBase.setAnimation(0, "idle1", true);
                })
            } else if (this.spineCup.animation == "rc2") {
                //清除动画回调
                this.spineCup.setCompleteListener(null);
                this.spineCup.setAnimation(0, "idle", true);

            }

        });
    }

    async playMatchRankAnim(flag: boolean = true) {
        this.matchRank.node.active = false;
        let data = TienlenRuntime.matchSeasonInfo;
        if (!data) {
            data = await TienlenHelper.callSeasonInfo();
        }
        this.matchRank.node.active = true;
        if (flag) {
            this.matchRank.show(data.Lv, data.Lv);
        } else {
            this.matchRank.show(data.Lv, 0);
        }
    }

    async playLeaveAnim() {
        this.showUINode(false);
        this.spineBase.node.active = false;
        this.spineCup.setCompleteListener(null);
        this.spineCup.setAnimation(0, "cc", false);
        this.spineBg.node.active = false;
        this.spineBg.destroy();
        this.scheduleOnce(() => {
            UIManager.getInstance().showActiveLowNode();
        }, 10 / 30)
        this.scheduleOnce(() => {
            this.closeSelf();
        }, 15 / 30);
        await TienlenHelper.wait(0.6);
        TienlenHelper.playMusic(TienlenDefine.MusicHall);
    }

    async playEnterEnrollAnim(data: any) {
        this.node.getChildByName("uiNode").active = false;
        let node = this.node.getChildByName("spineNode");
        Tween.stopAllByTarget(node);
        node.scale = Vec3.ONE;
        let tweenTime = 0.3;
        //进到报名界面，背景居中
        tween(this.spineBg.node).to(tweenTime, { position: v3(0, this.spineBg.node.position.y) }).start();
        tween(this.spineCup.node).to(tweenTime, { position: v3(-165, 0) }).start();
        tween(node).to(tweenTime, { scale: v3(0.9, 0.9) }).start();
        tween(this.spineBase.node).by(tweenTime, { position: v3(120, -240) }).start();
        tween(this.spineBase.getComponent(UIOpacity)).to(tweenTime, { opacity: 0 }).start();
        await TienlenHelper.wait(tweenTime);
        data && this._matchEnroll.onShow(data);
    }

    async playLeaveEnrollAnim() {
        this._matchEnroll.onHide();
        let node = this.node.getChildByName("spineNode");
        Tween.stopAllByTarget(node);
        let tweenTime = 0.3
        tween(node).to(tweenTime, { scale: Vec3.ONE }).start();
        tween(this.spineBg.node).to(tweenTime, { position: v3(165, this.spineBg.node.position.y) }).start();
        tween(this.spineCup.node).to(tweenTime, { position: v3(0, 0) }).start();
        tween(this.spineBase.node).by(tweenTime, { position: v3(-120, 240) }).start();
        tween(this.spineBase.getComponent(UIOpacity)).to(tweenTime, { opacity: 255 }).start();
        await TienlenHelper.wait(tweenTime);
        this.node.getChildByName("uiNode").active = true;
        this.playMatchRankAnim(false);
        TienlenHelper.playSound(TienlenDefine.SoundMatchReturnList);
    }

    async playEnterGradeAnim() {
        this.node.getChildByName("uiNode").active = false;
        let node = this.node.getChildByName("spineNode");
        Tween.stopAllByTarget(node);
        node.scale = Vec3.ONE;
        let tweenTime = 0.3;
        //进到报名界面，背景居中
        tween(this.spineBg.node).to(tweenTime, { position: v3(0, this.spineBg.node.position.y) }).start();
        tween(this.spineCup.node).to(tweenTime, { position: v3(-165, 0) }).start();
        tween(node).to(tweenTime, { scale: v3(0.9, 0.9) }).start();
        tween(this.spineBase.node).by(tweenTime, { position: v3(120, -240) }).start();
        tween(this.spineBase.getComponent(UIOpacity)).to(tweenTime, { opacity: 0 }).start();
        await TienlenHelper.wait(tweenTime);
        this._matchGrade.onShow();
    }

    async playLeaveGradeAnim() {
        this._matchGrade.onHide();
        let node = this.node.getChildByName("spineNode");
        Tween.stopAllByTarget(node);
        let tweenTime = 0.3
        tween(node).to(tweenTime, { scale: Vec3.ONE }).start();
        tween(this.spineBg.node).to(tweenTime, { position: v3(165, this.spineBg.node.position.y) }).start();
        tween(this.spineCup.node).to(tweenTime, { position: v3(0, 0) }).start();
        tween(this.spineBase.node).by(tweenTime, { position: v3(-120, 240) }).start();
        tween(this.spineBase.getComponent(UIOpacity)).to(tweenTime, { opacity: 255 }).start();
        await TienlenHelper.wait(tweenTime);
        this.node.getChildByName("uiNode").active = true;
        this.playMatchRankAnim(false);
        TienlenHelper.playSound(TienlenDefine.SoundMatchReturnList);
    }

    async updateList(msg: tournament.tournament.SCTMInfos, type: number) {
        if (!msg) {
            msg = await TienlenHelper.callTMInfo();
            return;
        }
        this.list.active = true;
        this.list.destroyAllChildren();
        msg.TMInfo.sort((l, r) => l.MatchNumebr - r.MatchNumebr);
        let infos = msg.TMInfo.filter((v) => v.MatchType == type);
        let count = 0;//this.list.children.length;
        for (let i = 0; i < infos.length; ++i) {
            let info = infos[i];
            if (i < count) {
                let node = this.list.children[i];
                node.active = true;
                node.getComponent(ItemMatch).init(info, i);
            } else {
                let pfb = type == 1 ? this.pfbItemMatch : this.pfbItemMatchEx;
                let node = instantiate(pfb);
                this.list.addChild(node);
                node.getComponent(ItemMatch).init(info, i);
            }
        }
        for (let index = infos.length; index < count; index++) {
            const element = this.list.children[index];
            element.active = false;
        }
    }



    async updateHead(head: number) {
        this.head.spriteFrame = await Utils.getHeadSpriteFrame(head);
    }

    onUpdatePlayerData() {
        let gold = UserData.getInstance().getGold();
        let diamond = UserData.getInstance().getDiamond();
        let vcard = BagData.getInstance().getVCardCnt();
        this.labelGold.string = Utils.cvtToKMB(gold);
        this.labelDiamond.string = Utils.cvtToKMB(diamond);
        this.labelVCard.string = Utils.cvtToKMB(vcard);
    }

    onHide() {
        EventMgr.getInstance().removeByTarget(this);
        this.matchTogIndex = -1;
        // ResourceHelper.releasePrefab(TienlenDefine.ABName, TienlenDefine.PrefabMatchName);
    }

}

