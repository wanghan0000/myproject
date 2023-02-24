import { _decorator, Component, Node, ToggleContainer, Label, Prefab, instantiate, tween, sp, Vec3, v3, UIOpacity } from 'cc';
import { UserData } from '../../../ScriptCore/data/UserData';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import { ButtonPlus } from '../common/component/ButtonPlus';
import { Model2D } from '../common/component/Model2D';
import tournament from '../protocol/tournament.js';
import TienlenDefine, { ItemIconType } from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { ItemAward } from './ItemAward';
import { ItemAwardIcon } from './ItemAwardIcon';
import { MatchEvent } from './ItemMatch';
import { ItemRank1 } from './ItemRank1';
const { ccclass, property } = _decorator;

@ccclass('MatchEnroll')
export class MatchEnroll extends UIScreen {
    @property(Prefab)
    public pfbItemAward: Prefab;
    @property(Prefab)
    public pfbItemRank: Prefab;
    @property(ButtonPlus)
    public btnRank: ButtonPlus;
    @property(ButtonPlus)
    public btnEnroll: ButtonPlus;
    @property(ButtonPlus)
    public btnReturn: ButtonPlus;
    @property(Label)
    public labelRank: Label;
    @property(Label)
    public labelRankTime: Label;
    @property(Node)
    public rankList: Node;
    @property(Node)
    public awardList: Node;
    @property(ToggleContainer)
    public toggleContainer: ToggleContainer;
    @property(Label)
    public labelRule: Label;
    @property(sp.Skeleton)
    public spineBase: sp.Skeleton;
    private _data: tournament.tournament.ITMInfo;
    private _toggleIndex: number = -1;
    private _showIndex: number = -1;
    private _model2D: Model2D;

    onLoad() {
        this.btnReturn.setClickHandler(() => {
            this.node.dispatchEvent(new MatchEvent("leaveEnroll"));
        }, this);
        this.btnEnroll.setClickHandler(async () => {
            let code = await TienlenHelper.callSignRace(0, this._data.Id)
            if (code == 0) {
                TienlenHelper.showMatchWaiting(this._data.Id);
            }
        }, this);
        this.btnRank.setClickHandler(() => {
            this.showIndex = this.showIndex == 0 ? 1 : 0;
        }, this);
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
        let modelNode = this.node.getChildByName('ModelNode');
        if (modelNode.children.length == 0) {
            let model = PoolManager.instance.getNode(pfb, modelNode);
            model.position = Vec3.ZERO;
            this._model2D = model.getComponent(Model2D);
            this._model2D.playEnterAnim();
        }
    }

    async updateRankList() {
        let ranklist = await TienlenHelper.callRankList(this._data.Id);
        this.labelRankTime.string = ranklist.TimeRange;
        let nodecount = this.rankList.children.length;
        for (let index = 0; index < ranklist.TMRank.length; index++) {
            const element = ranklist.TMRank[index];
            let node: Node;
            if (index < nodecount) {
                node = this.rankList.children[index];
            } else {
                node = instantiate(this.pfbItemRank);
                this.rankList.addChild(node);
            }
            node.active = true;
            node.getComponent(ItemRank1).init(element);
        }
        for (let index = ranklist.TMRank.length; index < nodecount; index++) {
            const element = this.rankList.children[index];
            element.active = false;
        }
    }

    updateAwardList() {
        let awardlist = this._data.Award;
        let nodecount = this.awardList.children.length;
        for (let index = 0; index < awardlist.length; index++) {
            const element = awardlist[index];
            let node: Node;
            if (index < nodecount) {
                node = this.awardList.children[index];
            } else {
                node = instantiate(this.pfbItemAward);
                this.awardList.addChild(node);
            }
            node.active = true;
            node.getComponent(ItemAward).init(element);
        }
        for (let index = awardlist.length; index < nodecount; index++) {
            const element = this.awardList.children[index];
            element.active = false;
        }
    }

    updateRule() {
        let node = this.toggleContainer.node.parent.getChildByName("NodeRule");
        node.getComponentInChildren(Label).string = Utils.getLanguageString(this._data.Rule);
    }


    public set showIndex(value: number) {
        if (this.showIndex == value) return;
        this._showIndex = value;
        this.labelRank.node.parent.active = value == 0;
        this.toggleContainer.node.parent.active = value != 0;
    }

    public get showIndex(): number {
        return this._showIndex;
    }

    public set toggleIndex(value: number) {
        if (this.toggleIndex == value) return;
        this._toggleIndex = value;
        this.onToggleChange();
        this.toggleContainer.toggleItems[value].isChecked = true;
    }

    public get toggleIndex(): number {
        return this._toggleIndex;
    }

    public get checkIndex(): number {
        let items = this.toggleContainer.toggleItems;
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            if (element.isChecked) return index;
        }
        return -1;
    }

    onToggleChange() {
        this.toggleContainer.node.parent.getChildByName("NodeAward").active = this.toggleIndex == 0;
        this.toggleContainer.node.parent.getChildByName("NodeRule").active = this.toggleIndex != 0;
    }

    onToggleClick() {
        this.toggleIndex = this.checkIndex;
        TienlenHelper.playSound(TienlenDefine.SoundClick);
    }

    onShow(...args: any[]) {
        this.node.active = true;
        this.showIndex = 1;
        this.toggleIndex = 0;
        this.data = args[0];
        this.playEnterAnim();
    }

    public set data(value: any) {
        this._data = value;
        if (!value) {
            this.node.dispatchEvent(new MatchEvent("leaveEnroll"));
            TienlenHelper.showFloatTips("该场次已关闭");
            return;
        }
        this.updateEnrollCost();
        if (this.showIndex == 0) {
            this.updateRankList();
        } else {
            this.updateAwardList();
            this.updateRule();
        }
    }

    updateTMInfo(data: tournament.tournament.SCTMInfos) {
        let curId = this._data.Id;
        let info = data.TMInfo.find((v) => v.Id == curId);
        this.data = info;
    }

    updateEnrollCost() {
        let node = this.btnEnroll.node.parent;
        let nodeTime = node.getChildByName("nodeTime")
        let nodeCost = node.getChildByName("nodeCost")
        let labelCost = node.getChildByName("labelCost");
        nodeCost.active = false;
        labelCost.active = true;
        nodeTime.children[0].active = false;
        nodeTime.children[1].active = false;
        if (this._data.MatchTimeType == 0) {
            nodeTime.children[0].active = true;
        } else {
            nodeTime.children[1].active = true;
            nodeTime.children[1].getComponent(Label).string = TienlenHelper.formatMatchTimeStr(this._data);
        }
        if (this._data.SignupCostCoin > 0) {
            nodeCost.active = true;
            labelCost.active = false;
            nodeCost.children[0].active = true;
            nodeCost.children[0].getComponent(ItemAwardIcon).init(ItemIconType.GOLD, this._data.SignupCostCoin);
            nodeCost.children[1].active = false;
            nodeCost.children[2].active = false;
        }
        if (this._data.SignupCostDiamond > 0) {
            nodeCost.active = true;
            labelCost.active = false;
            nodeCost.children[0].active = false;
            nodeCost.children[1].active = true;
            nodeCost.children[1].getComponent(ItemAwardIcon).init(ItemIconType.DIAMOND, this._data.SignupCostDiamond);
            nodeCost.children[2].active = false;
        }
        if (this._data.SignupCostItem) {
            nodeCost.active = true;
            labelCost.active = false;
            nodeCost.children[0].active = false;
            nodeCost.children[1].active = false;
            nodeCost.children[2].active = true;
            let type = TienlenHelper.getItemIconType(this._data.SignupCostItem.ItemId)
            nodeCost.children[2].getComponent(ItemAwardIcon).init(type, this._data.SignupCostItem.ItemNum);
        }
    }


    _originBasePos: Vec3;
    async playEnterAnim() {
        this.btnRank.node.parent.active = false;
        this.btnEnroll.node.parent.active = false;
        this.node.getChildByName("cup").active = false;
        this._originBasePos = this._originBasePos || this.spineBase.node.position.clone();
        this.spineBase.node.setPosition(this._originBasePos.x - 60, this._originBasePos.y + 60);
        this.spineBase.node.setScale(0.1, 0.1, 0.1);
        tween(this.spineBase.node).to(0.3, { position: this._originBasePos, scale: v3(0.8, 0.8, 0.8) }).start();
        this.spineBase.setAnimation(0, "ch2", false);
        this.spineBase.setCompleteListener(() => {
            if (this.spineBase.animation == "ch2")
                this.spineBase.setAnimation(0, "idle2", true);
        })
        await TienlenHelper.nodeWait(0.5, this.node);
        this.btnRank.node.parent.active = true;
        this.btnEnroll.node.parent.active = true;
        this.node.getChildByName("cup").active = true;
        this.btnRank.node.parent.setScale(1, 0, 1);
        tween(this.btnRank.node.parent).to(0.3, { scale: Vec3.ONE }, { easing: "backOut" }).start();
        this.showModel(UserData.getInstance().getUserRoleId());
    }

    onHide() {
        this.node.active = false;
        this._showIndex = -1;
        this._toggleIndex = -1;
    }
}

