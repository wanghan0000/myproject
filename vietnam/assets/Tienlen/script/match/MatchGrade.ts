import { _decorator, Component, Node, ToggleContainer, Prefab, sp, Vec3, tween, v3, ScrollView, instantiate, Label, SpriteFrame, Button, Sprite } from 'cc';
import { UserData } from '../../../ScriptCore/data/UserData';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import server from '../../../ScriptCore/protocol/server.js';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import { DB_GamMatchLV } from '../../config/db_gammatchlv';
import { ButtonPlus } from '../common/component/ButtonPlus';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { TienlenUIMgr } from '../TienlenUIMgr';
import { ItemAwardIcon } from './ItemAwardIcon';
import { ItemGradeRank } from './ItemGradeRank';
import { MatchEvent } from './ItemMatch';
import { MatchRank } from './MatchRank';
const { ccclass, property } = _decorator;

@ccclass('MatchGrade')
export class MatchGrade extends UIScreen {
    @property(Prefab)
    public pfbItemRank: Prefab;
    @property(SpriteFrame)
    public sfCanGet: SpriteFrame;
    @property(SpriteFrame)
    public sfGot: SpriteFrame;
    @property(ToggleContainer)
    public leftToggles: ToggleContainer;
    @property(ButtonPlus)
    public btnReturn: ButtonPlus;
    @property(sp.Skeleton)
    public spineBase: sp.Skeleton;
    @property(ButtonPlus)
    public btnGetAward: ButtonPlus;
    @property(MatchRank)
    public matchRank0: MatchRank;
    @property(MatchRank)
    public matchRank1: MatchRank;
    private _toggleIndex: number = -1;

    onLoad() {
        this.btnReturn.setClickHandler(() => {
            this.node.dispatchEvent(new MatchEvent("leaveGrade"));
        }, this);
        this.btnGetAward.setClickHandler(async () => {
            let ret = await TienlenHelper.callSeasonAward();
            if (ret.Code == 0) {
                this.showAwardGetTip(ret.Lv);
                this.setBtnGetEnable(false);
                TienlenRuntime.matchSeasonInfo.IsAward = true;
            } else {
                TienlenHelper.showFloatTips("get award fail: " + ret.Code);
            }
        }, this);
    }

    public onToggleClick() {
        let idx = this.leftToggles.toggleItems.findIndex((v) => v.isChecked);
        this.toggleIndex = idx;
        TienlenHelper.playSound(TienlenDefine.SoundClick);
    }

    public set toggleIndex(value: number) {
        if (this.toggleIndex == value) return;
        this._toggleIndex = value;
        if (value == -1) return;
        this.leftToggles.toggleItems[value].isChecked = true;
        this.onToggleChange();
    }

    public get toggleIndex(): number {
        return this._toggleIndex;
    }

    onToggleChange() {
        this.hideAllNodeInfo();
        this.getNodeInfo(this.toggleIndex).active = true;
        this.updateNodeInfo(this.toggleIndex);
    }

    async updateNodeInfo(index: number) {
        if (index == 0) {
            let node = this.getNodeInfo(index);
            let list = node.getComponentInChildren(ScrollView).content;
            list.children.forEach((v) => v.active = false);
            let count = list.children.length;
            let data = await TienlenHelper.callSeasonRank();
            data.ReasonRanks.sort((l, r) => l.Rank - r.Rank);
            for (let index = 0; index < data.ReasonRanks.length; index++) {
                const element = data.ReasonRanks[index];
                let node: Node = null;
                if (index < count) {
                    node = list.children[index];
                } else {
                    node = instantiate(this.pfbItemRank);
                    list.addChild(node);
                }
                node.active = true;
                node.getComponent(ItemGradeRank).init(element);
            }
            for (let index = data.ReasonRanks.length; index < count; index++) {
                const element = list.children[index];
                element.active = false;
            }
            let selfList = node.children[1].getComponentsInChildren(Label);
            let snId = UserData.getInstance().getSnId();
            let rank = data.ReasonRanks.find((v) => v.Snid == snId);
            selfList[0].string = rank ? `${rank.Rank}` : I18nMgr.getInstance().getStringByKey("tienlen.weishangbangTxt");
            selfList[1].string = UserData.getInstance().getUserName();
            let lv = rank ? rank.Lv : TienlenRuntime.matchSeasonInfo.Lv;
            selfList[2].string = TienlenHelper.getRankStr(lv);
            let starRank = TienlenHelper.getStarRank(lv);
            selfList[3].string = `X${starRank}`;

        } else if (index == 1) {
            let seasonInfo = TienlenRuntime.matchSeasonInfo;
            let node = this.getNodeInfo(index);
            node.getChildByName("labelTitle0").getComponent(Label).string = `S${seasonInfo.Id}${I18nMgr.getInstance().getStringByKey("tienlen.saijiTxt")}:`;
            let time0 = TienlenHelper.formatTimeStr2(seasonInfo.SeasonTimeStamp[0] * 1000);
            let time1 = TienlenHelper.formatTimeStr2(seasonInfo.SeasonTimeStamp[1] * 1000);
            node.getChildByName("labelTitle1").getComponent(Label).string = `${time0}-${time1}`;
        } else {
            let node = this.getNodeInfo(index);
            let seasonInfo = TienlenRuntime.matchSeasonInfo;
            let lastBg = node.getChildByName("bgLastSeason");
            if (seasonInfo.LastLv == 0) {//上赛季无数据
                lastBg.active = false;
                node.getChildByName("labelTip").active = true;
            } else {
                lastBg.active = true;
                node.getChildByName("labelTip").active = false;
                let lastData = TienlenHelper.getMatchLvCfg(seasonInfo.LastLv);
                this.updateAwardList(node.getChildByName("bgLastSeason").getChildByName("AwardList0"), lastData);
                this.setBtnGetEnable(!seasonInfo.IsAward);
                this.matchRank0.show(seasonInfo.LastLv);
            }
            let curData = TienlenHelper.getMatchLvCfg(seasonInfo.Lv);
            this.matchRank1.show(seasonInfo.Lv);
            this.updateAwardList(node.getChildByName("AwardList1"), curData);
        }
    }

    setBtnGetEnable(flag: boolean) {
        this.btnGetAward.interactable = flag;
        this.btnGetAward.node.children[0].getComponent(Sprite).spriteFrame = !flag ? this.sfGot : this.sfCanGet;
    }


    showAwardGetTip(lv: number) {
        let data = TienlenHelper.getMatchLvCfg(lv);
        let list: { id: number, cnt: number }[] = [];
        for (let index = 0; index < 3; index++) {
            let type = (<any>data)['AwardType' + (index + 1)];
            let itemId = (<any>data)['AwardId' + (index + 1)];
            let num = (<any>data)['Number' + (index + 1)];
            if (num > 0) {
                let _id = type <= 2 ? type : itemId;
                list.push({ id: _id, cnt: num });
            }
        }
        if (list.length != 0) {
            TienlenUIMgr.getInstance().showAwardGet(list);
        }
    }

    updateAwardList(node: Node, data: server.server.IDB_GamMatchLV) {
        for (let index = 0; index < node.children.length; index++) {
            const element = node.children[index];
            let type = (<any>data)['AwardType' + (index + 1)];
            let itemId = (<any>data)['AwardId' + (index + 1)];
            let num = (<any>data)['Number' + (index + 1)];
            if (num > 0) {
                let id = type <= 2 ? type : itemId;
                let itemType = TienlenHelper.getItemIconType(id);
                element.active = true;
                element.getComponent(ItemAwardIcon).init(itemType, num);
            } else {
                element.active = false;
            }
        }
    }

    getNodeInfo(index: number) {
        return this.node.getChildByName("bg").getChildByName("NodeInfo").children[index];
    }

    hideAllNodeInfo() {
        let node = this.node.getChildByName("bg").getChildByName("NodeInfo");
        node.children.forEach((v) => v.active = false);
    }

    onShow() {
        this.node.active = true;
        this.toggleIndex = 0;
        this.playEnterAnim();
    }

    onHide() {
        this.node.active = false;
        this.toggleIndex = -1;
    }


    _originBasePos: Vec3;
    async playEnterAnim() {
        let bgNode = this.node.getChildByName("bg");
        bgNode.active = false;
        this.btnReturn.node.active = false;
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
        bgNode.active = true;
        bgNode.setScale(1, 0, 1);
        tween(bgNode).to(0.3, { scale: Vec3.ONE }, { easing: "backOut" }).start();
        this.btnReturn.node.active = true;
    }



}

