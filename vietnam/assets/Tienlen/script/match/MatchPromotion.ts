import { _decorator, Component, Node, Label, Vec3, UITransform, sp, Tween, tween, UIOpacity, v3, view, SpriteFrame, Sprite } from 'cc';
import { UserData } from '../../../ScriptCore/data/UserData';
import { Currency } from '../../../ScriptCore/Lobby/Scripts/General/Currency';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { AdapterMgr, AdapterType } from '../../../ScriptCore/UIFrame/AdapterMgr';
import { UIScreen, UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import ObjectWait from '../common/async/ObjectWait';
import { ButtonPlus } from '../common/component/ButtonPlus';
import { Model2D } from '../common/component/Model2D';
import { TienlenGameData } from '../model/TienlenGameData';
import tournament from '../protocol/tournament.js';
import TienlenDefine, { ItemIconType } from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { MatchRank } from './MatchRank';
const { ccclass, property } = _decorator;

@ccclass('MatchPromotion')
export class MatchPromotion extends UIWindow {
    @property(Label)
    public labelRank: Label;
    @property(Label)
    public labelWin: Label;
    @property(Label)
    public labelFail: Label;
    @property(Label)
    public labelTitle: Label;
    @property(sp.Skeleton)
    public mainSpine: sp.Skeleton;
    @property(sp.Skeleton)
    public goldSpine: sp.Skeleton;
    @property(sp.Skeleton)
    public promotionSpine: sp.Skeleton;
    @property(ButtonPlus)
    public btnReturn: ButtonPlus;
    @property(ButtonPlus)
    public btnNext: ButtonPlus;
    @property(Node)
    public awardNode: Node;
    private _model2D: Model2D;
    private _data: tournament.tournament.SCPromotionInfo;
    private _matchRank: MatchRank;
    private static _instance: MatchPromotion;

    onLoad() {
        this.btnNext.setClickHandler(async () => {
            let code = await TienlenHelper.callSignRace(0, this._data.MatchId);
            if (code == 0) {
                await TienlenHelper.showMatchWaiting(this._data.MatchId);
                this.closeSelf();
            }
        }, this);
        this.btnReturn.setClickHandler(() => {
            this.closeSelf();
            //断线重连，此时激活的screen是一级选场,就切换背景音乐
            if (TienlenHelper.checkSelectIsShow()) {
                TienlenHelper.playMusic(TienlenDefine.MusicHall);
            }
        }, this);
        this._matchRank = this.getComponentInChildren(MatchRank);
        let size = view.getVisibleSize();
        let w = Math.max(size.width, size.height);
        if (w < 1490) {
            this.mainSpine.node.setPosition(-110, 0);
            this.mainSpine.node.getChildByName("pingmu").setPosition(-374 + 110, 193);
        } else {
            this.mainSpine.node.setPosition(0, 0);
            this.mainSpine.node.getChildByName("pingmu").setPosition(-374, 193);
        }
        this._matchRank.hide();
    }

    public static get instance() {
        return this._instance;
    }

    async onShow(...args: any) {
        MatchPromotion._instance = this;
        ObjectWait.instance.notify(MatchPromotion, this);
        AdapterMgr.getInstance().adapterByType(AdapterType.FullScreen, this);
        this._data = args[0];
        if (!this._data) {
            this.node.active = false;
            return;
        } else {
            this.node.active = true;
        }
        this.labelTitle.node.parent.getChildByName("uiNode").setPosition(0, 0);
        this.labelRank.node.parent.active = this._data.RetCode != 2;
        this.labelRank.string = this._data.RankId.toString();
        this.labelWin.string = (this._data.Record["1"] || 0).toString();
        this.labelFail.string = (this._data.Record["-1"] || 0).toString();
        this.node.getChildByName("cup").active = false;
        this.hideAwardUI();
        this.hideRoundText();
        this.updateTitle();
        if (this.isMatchOver(this._data)) {
            TienlenHelper.log("updateGrade000 ", TienlenGameData.instance.selfPlayerData.Lv, 0);
            this.updateGrade(TienlenGameData.instance.selfPlayerData.Lv, 0);
        }
        await this.showModel(UserData.getInstance().getUserRoleId());
        this.updateRound(this._data.MatchPromotion, this._data.Round, this._data.RetCode);
    }

    updateShow(data: tournament.tournament.SCPromotionInfo) {
        this._data = data;
        if (!this._data) {
            this.node.active = false;
            return;
        } else {
            this.node.active = true;
        }
        this.labelRank.node.parent.active = true;
        this.labelRank.string = this._data.RankId.toString();
        this.updateRound(this._data.MatchPromotion, this._data.Round, this._data.RetCode);
        this.updateGrade(TienlenGameData.instance.selfPlayerData.Lv, 0);
        TienlenHelper.log("updateGrade111 ", TienlenGameData.instance.selfPlayerData.Lv, 0);
    }

    isMatchOver(data: tournament.tournament.SCPromotionInfo) {
        if (data.RetCode == 1) return true;
        let totalRound = data.MatchPromotion.length - 1;
        let index = totalRound - data.Round;
        return index == 0;
    }

    async updateTitle() {
        this.labelTitle.string = TienlenRuntime.matchName;
    }

    public updateGrade(grade: number, lastGrade: number) {
        let uiNode = this.labelTitle.node.parent.getChildByName("uiNode");
        tween(uiNode).to(0.3, { position: v3(120, 0) }).start();
        this._matchRank.show(grade, lastGrade);
    }

    hideAwardUI() {
        this.btnNext.node.parent.active = false;
    }

    async showAwardUI(data: tournament.tournament.SCPromotionInfo) {
        this.btnNext.node.parent.active = true;
        this.btnNext.node.active = false;
        this.btnReturn.node.active = false;
        this.awardNode.children.forEach((v) => v.active = false);
        if (!data || !data.RankAward) {
            this.btnNext.node.active = true;
            this.btnReturn.node.active = true;
            return;
        }
        let count = 0;
        if (data.RankAward.Coin > 0) {
            let node = this.awardNode.children[0]
            node.getComponentInChildren(Label).string = Utils.cvtToKMB(data.RankAward.Coin, 0);
            this.playDropAnim(node);
            ++count;
        }
        if (data.RankAward.Diamond > 0) {
            let node = this.awardNode.children[1];
            node.getComponentInChildren(Label).string = Utils.cvtToKMB(data.RankAward.Diamond, 0);
            this.playDropAnim(node);
            ++count;
        }
        this.awardNode.children[2].active = false;
        for (let index = count; index < count + data.RankAward.ItemInfo.length; index++) {
            if (index >= this.awardNode.children.length) return;
            let node = this.awardNode.children[index];
            const element = data.RankAward.ItemInfo[index - count];
            if (element.ItemNum == 0) {
                node.active = false;
                continue;
            } else {
                node.active = true;
            }
            let icon = node.getChildByName("icon");
            let label = node.getComponentInChildren(Label).node;
            icon.setScale(0.6, 0.6, 0.6);
            this._updateItemIcon(icon, element.ItemId);
            label.getComponent(Label).string = Utils.cvtToKMB(element.ItemNum, 0);
            this.playDropAnim(node);
        }
    }

    async _updateItemIcon(node: Node, itemID: number) {
        node.getComponent(Sprite).spriteFrame = await TienlenHelper.getItemSF(itemID);
    }

    playDropAnim(target: Node) {
        target.active = true;
        target.children[0].active = false;
        target.children[1].active = false;
        target.children[2].active = false;
        let spine = target.getChildByName("lihe").getComponent(sp.Skeleton);
        spine.setAnimation(0, "lihe", false);
        spine.setCompleteListener(() => {
            if (spine.animation == 'lihe') {
                target.children[0].active = true;
                target.children[1].active = true;
                target.children[2].active = true;
                target.scale = Vec3.ZERO;
                tween(target).to(0.3, { scale: Vec3.ONE }).start();
                this.btnNext.node.active = true;
                this.btnReturn.node.active = true;
            }
        })
    }

    hideRoundText() {
        for (let index = 0; index < 6; index++) {
            let node = this.mainSpine.node.getChildByName("holdpoint" + index);
            node.active = false;
        }
        this.hideTotalRound();
    }

    updateRound(promotionList: number[], curRound: number, promotion: number) {
        let totalRound = promotionList.length - 1;
        let index = totalRound - curRound;
        if (index > 4) {
            this.play1To8Anim(promotion);
        } else if (index == 4) {
            this.play9Anim(promotion);
        } else if (index == 3) {
            this.play10Anim(promotion);
        } else if (index == 2) {
            this.play11Anim(promotion);
        } else if (index == 1) {
            this.play12Anim(promotion);
        } else {
            this.play13Anim(promotion);
        }
        this.updateRoundText(promotionList, curRound, promotion);
    }

    async updateRoundText(promotionList: number[], curRound: number, promotion: number) {
        this.showTotalRound(`${promotionList.length - 1}`);
        let node0 = this.mainSpine.node.getChildByName("holdpoint0");
        if (promotion == 2) {//淘汰动画第一个台子没有骨骼,这里特殊处理
            node0.active = true;
            node0.children[0].getComponentInChildren(Label).string = `${curRound}`;
            for (let index = 0; index < 5; index++) {
                if ((curRound + index) >= promotionList.length - 1) continue;
                let node = this.mainSpine.node.getChildByName(`holdpoint${index + 1}`);
                node.active = true;
                node.children[0].getComponent(Label).string = promotionList[curRound + index].toString();
                node.children[1].getComponentInChildren(Label).string = `${curRound + index + 1}`;
            }
        } else {
            for (let index = 0; index < 5; index++) {
                if ((curRound + index) >= promotionList.length - 1) continue;
                let node = this.mainSpine.node.getChildByName(`holdpoint${index + 1}`);
                node.active = true;
                node.children[0].getComponent(Label).string = promotionList[curRound + index].toString();
                node.children[1].getComponentInChildren(Label).string = `${curRound + index + 1}`;
            }
            node0.active = true;
            node0.children[0].getComponentInChildren(Label).string = `${curRound}`;
            let flag = await TienlenHelper.nodeWait(1, this.node);
            if (!flag) return;
            node0.active = false;
        }
    }

    hideTotalRound() {
        this.mainSpine.node.getChildByName("totalRoundNode").active = false;
    }

    showTotalRound(str: string) {
        let node = this.mainSpine.node.getChildByName("totalRoundNode");
        node.active = true;
        node.getComponentInChildren(Label).string = str;
    }

    onHide() {
        MatchPromotion._instance = null;
        this._model2D && PoolManager.instance.putNode(this._model2D.node);
        this._model2D = null;
    }

    async showModel(roleId: number) {
        if (this._model2D) {
            return;
        }
        let pfb = await TienlenHelper.getModel2DPfb(roleId);
        if (!pfb) {
            TienlenHelper.log("showModel error roleId: ", roleId)
            return;
        }
        let modelNode = this.mainSpine.node.getChildByName('ModelNode');
        if (modelNode.children.length == 0) {
            let model = PoolManager.instance.getNode(pfb, modelNode);
            model.position = Vec3.ZERO;
            this._model2D = model.getComponent(Model2D);
            this.playRoleIdleAnim();
        }
    }

    async delayPlayRoleEnterAnim(delay: number) {
        let flag = await TienlenHelper.nodeWait(delay, this.node);
        if (!flag) return;
        this.playRoleEnterAnim(false);
    }

    async playRoleEnterAnim(isOver: boolean = true) {
        this._model2D && this._model2D.playEnterAnim();
        if (isOver) {
            let node = this.mainSpine.node.getChildByName('ModelNode');
            tween(this.mainSpine.node).to(0.5, { position: Vec3.ZERO }).start();
            //现在由于遮挡关系,屏幕挂在节点下,需要同步位置
            this.mainSpine.node.getChildByName("pingmu").setPosition(-374, 193);
            await TienlenHelper.tweenTo(node, 0.5, { position: v3(10, -192) });
            if (this._data.RankId == 1) {
                this.node.getChildByName("cup").active = true;
                TienlenHelper.playVoice(TienlenDefine.SoundMatchNO1, UserData.getInstance().getRoleSex(), "match");
            } else if (this._data.RankId == 2 || this._data.RankId == 3) {
                TienlenHelper.playVoice(TienlenDefine.SoundMatchNO23, UserData.getInstance().getRoleSex(), "match");
            } else {
                TienlenHelper.playVoice(TienlenDefine.SoundMatchNO0, UserData.getInstance().getRoleSex(), "match");
            }
            this.playWinAnim(this._data.RankId);
        } else {
            TienlenHelper.playVoice(TienlenDefine.SoundMatchPromotion, UserData.getInstance().getRoleSex(), "match");
        }
        //稍作延迟，播放道具掉落动画，同时播放音效
        let flag = await TienlenHelper.nodeWait(1, this.node);
        if (!flag) return;
        TienlenHelper.playSound(TienlenDefine.SoundMatchDrop);
    }

    async playWinAnim(rank: number) {
        let node = this.node.getChildByName("lihe");
        let spine = node.getComponent(sp.Skeleton);
        if (rank == 1) {
            node.active = true;
            spine.setAnimation(0, "guanjun", false);
        } else if (this.hasAward()) {
            node.active = true;
            spine.setAnimation(0, "taotai", false);
        } else {
            node.active = false;
        }
        let flag = await TienlenHelper.nodeWait(0.5, this.node);
        if (!flag) return;
        this.showAwardUI(this._data);
    }

    hasAward() {
        return (this._data && this._data.RankAward && (this._data.RankAward.Coin > 0 || this._data.RankAward.Diamond > 0 || this._data.RankAward.ItemInfo.length > 0));
    }

    playRoleIdleAnim() {
        this._model2D && this._model2D.playIdleAnim();
    }

    playPromotionAnim(promotion: number, lastGame: boolean = false) {
        if (promotion == 0) {
            if (lastGame) return;
            this.promotionSpine.node.active = true;
            this.promotionSpine.setAnimation(0, "jinji", false);
            this.promotionSpine.setCompleteListener(() => {
                if (this.promotionSpine.animation == "jinji")
                    this.promotionSpine.setAnimation(0, "jinjiloop", true);
            })
            this.goldSpine.node.active = true;
            this.goldSpine.setAnimation(0, "1", false);
        } else if (promotion == 1) {
            if (lastGame) return;
            this.promotionSpine.node.active = true;
            this.promotionSpine.setAnimation(0, "taotai", false);
            this.promotionSpine.setCompleteListener(() => {
                if (this.promotionSpine.animation == "taotai")
                    this.promotionSpine.setAnimation(0, "taotailoop", true);
            })
        } else if (promotion == 2) {
            this.promotionSpine.node.active = true;
            this.promotionSpine.setAnimation(0, "daiding", false);
            this.promotionSpine.setCompleteListener(() => {
                if (this.promotionSpine.animation == "daiding")
                    this.promotionSpine.setAnimation(0, "daidingloop", true);
            })
        }
    }

    hidePromotionAnim() {
        this.promotionSpine.node.active = false;
    }

    //0 晋级 1 淘汰 2 等待晋级
    async play1To8Anim(promotion: number) {
        let spine = this.mainSpine;
        //1-9动画开始,3和5隐藏，动画结束,3和5显示,4隐藏
        let node1 = spine.node.getChildByName("holdpoint1");
        let node3 = spine.node.getChildByName("holdpoint3");
        let node4 = spine.node.getChildByName("holdpoint4");
        let node5 = spine.node.getChildByName("holdpoint5");
        node1.children[0].active = true;
        node3.children[1].active = false;
        node5.children[1].active = false;
        node4.children[1].active = true;
        if (promotion == 0) {
            this.delayPlayRoleEnterAnim(1);
            spine.setAnimation(0, "jinji_1-9", false);
            this.hidePromotionAnim();
            let flag = await TienlenHelper.nodeWait(1, this.node);
            if (!flag) return;
            node1.children[0].active = false;
            node3.children[1].active = true;
            node5.children[1].active = true;
            node4.children[1].active = false;
            flag = await TienlenHelper.nodeWait(0.8, this.node);
            if (!flag) return;
            this.playPromotionAnim(promotion);
        } else if (promotion == 1) {
            spine.setAnimation(0, "daiji_1-9", true);
            this.playPromotionAnim(promotion);
            let flag = await TienlenHelper.nodeWait(3, this.node);
            if (!flag) return;
            this.hidePromotionAnim();
            spine.setAnimation(0, "taotai", false);
            this.hideRoundText();
            this.playRoleEnterAnim();
        } else if (promotion == 2) {
            spine.setAnimation(0, "daiji_1-9", true);
            this.playPromotionAnim(promotion);
        }
    }

    async play9Anim(promotion: number) {
        let spine = this.mainSpine;
        //1-9动画开始,3和5隐藏，动画结束,3和5显示,4隐藏
        let node1 = spine.node.getChildByName("holdpoint1");
        let node3 = spine.node.getChildByName("holdpoint3");
        let node4 = spine.node.getChildByName("holdpoint4");
        let node5 = spine.node.getChildByName("holdpoint5");
        node5.active = false;
        node1.children[0].active = true;
        node3.children[1].active = false;
        node4.children[1].active = true;
        if (promotion == 0) {
            this.delayPlayRoleEnterAnim(1);
            spine.setAnimation(0, "jinji_10", false);
            this.hidePromotionAnim();
            let flag = await TienlenHelper.nodeWait(1, this.node);
            if (!flag) return;
            node1.children[0].active = false;
            node3.children[1].active = true;
            node4.children[1].active = false;
            flag = await TienlenHelper.nodeWait(0.8, this.node);
            if (!flag) return;
            this.playPromotionAnim(promotion);
        } else if (promotion == 1) {
            spine.setAnimation(0, "daiji_10", true);
            this.playPromotionAnim(promotion);
            let flag = await TienlenHelper.nodeWait(3, this.node);
            if (!flag) return;
            this.hidePromotionAnim();
            spine.setAnimation(0, "taotai", false);
            this.hideRoundText();
            this.playRoleEnterAnim();
        } else if (promotion == 2) {
            spine.setAnimation(0, "daiji_10", true);
            this.playPromotionAnim(promotion);
        }
    }

    async play10Anim(promotion: number) {
        let spine = this.mainSpine;
        let node1 = spine.node.getChildByName("holdpoint1");
        let node3 = spine.node.getChildByName("holdpoint3");
        let node4 = spine.node.getChildByName("holdpoint4");
        let node5 = spine.node.getChildByName("holdpoint5");
        node4.active = false;
        node5.active = false;
        node1.children[0].active = true;
        node3.children[1].active = false;
        if (promotion == 0) {
            this.delayPlayRoleEnterAnim(1);
            spine.setAnimation(0, "jinji_11", false);
            this.hidePromotionAnim();
            let flag = await TienlenHelper.nodeWait(1, this.node);
            if (!flag) return;
            node1.children[0].active = false;
            node3.children[1].active = true;
            flag = await TienlenHelper.nodeWait(0.8, this.node);
            if (!flag) return;
            this.playPromotionAnim(promotion);
        } else if (promotion == 1) {
            spine.setAnimation(0, "daiji_11", false);
            this.playPromotionAnim(promotion);
            let flag = await TienlenHelper.nodeWait(3, this.node);
            if (!flag) return;
            this.hidePromotionAnim();
            spine.setAnimation(0, "taotai", false);
            this.hideRoundText();
            this.playRoleEnterAnim();
        } else if (promotion == 2) {
            spine.setAnimation(0, "daiji_11", false);
            this.playPromotionAnim(promotion);
        }
    }

    async play11Anim(promotion: number) {
        let spine = this.mainSpine;
        let node1 = spine.node.getChildByName("holdpoint1");
        let node3 = spine.node.getChildByName("holdpoint3");
        let node4 = spine.node.getChildByName("holdpoint4");
        let node5 = spine.node.getChildByName("holdpoint5");
        node1.children[0].active = true;
        node3.active = false;
        node5.active = false;
        node4.active = false;
        if (promotion == 0) {
            this.delayPlayRoleEnterAnim(1);
            spine.setAnimation(0, "jinji_12", false);
            this.hidePromotionAnim();
            let flag = await TienlenHelper.nodeWait(1, this.node);
            if (!flag) return;
            node1.children[0].active = false;
            flag = await TienlenHelper.nodeWait(0.8, this.node);
            if (!flag) return;
            this.playPromotionAnim(promotion);
        } else if (promotion == 1) {
            spine.setAnimation(0, "daiji_12", false);
            this.playPromotionAnim(promotion);
            let flag = await TienlenHelper.nodeWait(3, this.node);
            if (!flag) return;
            this.hidePromotionAnim();
            spine.setAnimation(0, "taotai", false);
            this.hideRoundText();
            this.playRoleEnterAnim();
        } else if (promotion == 2) {
            spine.setAnimation(0, "daiji_12", false);
            this.playPromotionAnim(promotion);
        }
    }

    async play12Anim(promotion: number) {
        let spine = this.mainSpine;
        let node1 = spine.node.getChildByName("holdpoint1");
        let node2 = spine.node.getChildByName("holdpoint2");
        let node3 = spine.node.getChildByName("holdpoint3");
        let node4 = spine.node.getChildByName("holdpoint4");
        let node5 = spine.node.getChildByName("holdpoint5");
        node1.children[0].active = true;
        node2.active = false;
        node3.active = false;
        node5.active = false;
        node4.active = false;
        if (promotion == 0) {
            this.delayPlayRoleEnterAnim(1);
            spine.setAnimation(0, "jinji_13", false);
            this.hidePromotionAnim();
            let flag = await TienlenHelper.nodeWait(1, this.node);
            if (!flag) return;
            node1.children[0].active = false;
            flag = await TienlenHelper.nodeWait(0.8, this.node);
            if (!flag) return;
            this.playPromotionAnim(promotion);
        } else if (promotion == 1) {
            spine.setAnimation(0, "daiji_13", false);
            this.playPromotionAnim(promotion);
            let flag = await TienlenHelper.nodeWait(3, this.node);
            if (!flag) return;
            this.hidePromotionAnim();
            spine.setAnimation(0, "taotai", false);
            this.hideRoundText();
            this.playRoleEnterAnim();
        } else if (promotion == 2) {
            spine.setAnimation(0, "daiji_13", false);
            this.playPromotionAnim(promotion);
        }
    }

    async play13Anim(promotion: number) {
        let spine = this.mainSpine;
        let node1 = spine.node.getChildByName("holdpoint1");
        let node2 = spine.node.getChildByName("holdpoint2");
        let node3 = spine.node.getChildByName("holdpoint3");
        let node4 = spine.node.getChildByName("holdpoint4");
        let node5 = spine.node.getChildByName("holdpoint5");
        node1.active = false;
        node2.active = false;
        node3.active = false;
        node5.active = false;
        node4.active = false;
        if (promotion == 0) {
            spine.setAnimation(0, "daiji_14", false);
            this.playPromotionAnim(promotion, true);
            let flag = await TienlenHelper.nodeWait(1, this.node);
            if (!flag) return;
            this.hidePromotionAnim();
            spine.setAnimation(0, "guanjun", false);
            this.hideRoundText();
            this.playRoleEnterAnim();
        } else if (promotion == 1) {
            spine.setAnimation(0, "daiji_14", false);
            this.playPromotionAnim(promotion, true);
            let flag = await TienlenHelper.nodeWait(1, this.node);
            if (!flag) return;
            this.hidePromotionAnim();
            spine.setAnimation(0, "taotai", false);
            this.hideRoundText();
            this.playRoleEnterAnim();
        } else if (promotion == 2) {
            spine.setAnimation(0, "daiji_14", false);
            this.playPromotionAnim(promotion, true);
        }
    }

    public getShowEffectTime(): number {
        return 0.1;
    }

    public getHideEffectTime(): number {
        return 0.1;
    }

    async showEffect() {
        let op = this.getComponent(UIOpacity);
        Tween.stopAllByTarget(op);
        op.opacity = 0;
        tween(op).to(0.5, { opacity: 255 }).start();
        return true;
    }

    async hideEffect() {
        return true;
    }

}

