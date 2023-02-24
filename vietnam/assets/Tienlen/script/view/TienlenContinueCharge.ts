
import { _decorator, sp, Label, Button, Node, Color, Sprite, tween, Vec3 } from 'cc';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import welfare from '../../../ScriptCore/protocol/welfare.js';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { TienlenUIMgr } from '../TienlenUIMgr';

const { ccclass, property } = _decorator;

@ccclass('TienlenContinueCharge')
export class TienlenContinueCharge extends UIWindow {
    @property(sp.Skeleton)
    spine_boxArr: sp.Skeleton[] = [];
    @property(Label)
    label_money: Label[] = [];
    @property(Label)
    label_num: Label[] = [];
    @property(Label)
    label_daycanuse: Label[] = [];
    @property(Label)
    label_dayunuse: Label[] = [];
    @property(Button)
    btn_itemget: Button[] = [];
    @property(Button)
    btn_onboxitemget: Button[] = [];
    @property(Node)
    node_kuang: Node[] = [];

    private index: number = -1;
    private grayColor: Color = new Color(128, 128, 128);
    private flag: boolean = true;
    private continueDataInfo: welfare.welfare.SCWelfareContinuousPayData = null;

    start() {

    }

    onShow(...args: any[]) {
        EventMgr.getInstance().addEventListener(EventName.SC_WELF_CONTINPAY, this.onRewardGet, this);
        this.continueDataInfo = args[0];
        let count = this.continueDataInfo.List.length;
        for (let i = 0; i < count; i++) {
            let data = this.continueDataInfo.List[i];
            let item = data.Item[0];
            let str = Utils.cvtToKMB(data.price1);
            str = str.replace(".", "d");
            this.label_money[i].string = "￥" + str;
            str = Utils.cvtToKMB(item.Grade);
            str = str.replace(".", "d");
            this.label_num[i].string = str;
            this.btn_itemget[i].node.getChildByName("spr_canuse").getChildByName("label_day").getComponent(Label).string = data.Day.toString();
            this.btn_itemget[i].node.getChildByName("spr_unuse").getChildByName("label_day").getComponent(Label).string = data.Day.toString();
            if(this.continueDataInfo.Day == data.Day) {
                this.index = i;
            }
        }

        for (let i = 0; i < count; i++) {
            this.spine_boxArr[i].setAnimation(0, "close_idle" + (i + 1), true);
            if (i < this.index) {
                this.refreshItemHaveGetView(i);
            } else if (i == this.index) {
                if (this.continueDataInfo.Draw == 1) {
                    this.refreshItemHaveGetView(this.index);
                } else if (this.continueDataInfo.Draw == 2) {
                    this.spine_boxArr[i].setAnimation(0, "close_idle" + (i + 1), true);
                    this.btn_itemget[i].node.getChildByName("spr_canuse").active = true;
                    this.btn_itemget[i].node.getChildByName("spr_unuse").active = false;
                    // console.log("huangdong1:", i);
                    tween(this.spine_boxArr[i].node).repeatForever(tween(this.spine_boxArr[i].node)
                                                                    .to(0.2, { eulerAngles: new Vec3(0, 0, 5)}) 
                                                                    .to(0.2, { eulerAngles: new Vec3(0, 0, -5)})
                                                                    )
                                                    .start();
                }
            } else {
                this.spine_boxArr[i].setAnimation(0, "close_idle" + (i + 1), true);
                this.btn_itemget[i].interactable = false;
                this.btn_itemget[i].node.getChildByName("spr_canuse").active = false;
                this.btn_itemget[i].node.getChildByName("spr_unuse").active = true;
                this.btn_onboxitemget[i].interactable = false;
                this.label_num[i].string = "www"; //位图字体问号
            }
        }
    }

    refreshItemHaveGetView(index: number) {
        this.spine_boxArr[index].setAnimation(0, "open_idle" + (index + 1), true);
        this.spine_boxArr[index].node.getChildByName("spr_haveget").active = true;
        this.btn_itemget[index].interactable = false;
        this.btn_itemget[index].node.getChildByName("spr_canuse").active = false;
        this.btn_itemget[index].node.getChildByName("spr_unuse").active = true;
        this.btn_onboxitemget[index].interactable = false;

        this.spine_boxArr[index].color = this.grayColor;
        this.node.getChildByName("spr_numbg" + (index+1)).getComponent(Sprite).color = this.grayColor;
        this.node.getChildByName("spr_numbg" + (index+1)).getChildByName("label_money").getComponent(Label).color = this.grayColor;
        this.node_kuang[index].getComponent(Sprite).color = this.grayColor;
        this.node_kuang[index].getChildByName("label_num").getComponent(Label).color = this.grayColor;

        let data = this.continueDataInfo.List[index];
        let item = data.Item[0];
        let nodeIcon = this.spine_boxArr[index].node.getChildByName("node");
        if (item.Type == 1) {
            nodeIcon.getChildByName("spr_coin").active = true;
            nodeIcon.getChildByName("spr_coin").getComponent(Sprite).color = this.grayColor;
        } else if (item.Type == 2) {
            nodeIcon.getChildByName("spr_diamond").active = true;
            nodeIcon.getChildByName("spr_diamond").getComponent(Sprite).color = this.grayColor;
        } else {
            let nodeItem = nodeIcon.getChildByName("spr_item")
            nodeItem.active = true;
            nodeItem.getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_" + item.Item_Id);
            nodeItem.getComponent(Sprite).color = this.grayColor;
        }
    }

    onHide() {
        EventMgr.getInstance().remove(EventName.SC_WELF_CONTINPAY, this.onRewardGet, this);
    }

    btnOnClose() {
        this.closeSelf();
    }

    onRewardGet(msg: welfare.welfare.SCWelfareContinuousPay) {
        console.log("recv continueItem get");
        // UIMgr.getInstance().clearWaiting();

        if (this.index >= 0 && this.index < this.continueDataInfo.List.length) {
            this.flag = true;
            this.spine_boxArr[this.index].setAnimation(0, "open_" + (this.index + 1), false);
            this.spine_boxArr[this.index].setCompleteListener(() => {
                this.spine_boxArr[this.index].setCompleteListener(null);
                this.refreshItemHaveGetView(this.index);

                let data = this.continueDataInfo.List[this.index];
                let list: { id: number, cnt: number }[] = [];
                if (data.Item.length > 0) {
                    for (let i = 0; i < data.Item.length; i++) {
                        let itemData = data.Item[i];
                        if (itemData.Type == 1) {
                            list.push({ id: 1, cnt: itemData.Grade });
                        } else if (itemData.Type == 2) {
                            list.push({ id: 2, cnt: itemData.Grade });
                        } else {
                            list.push({ id: itemData.Item_Id, cnt: itemData.Grade });
                        }
                    }
                }
    
                TienlenUIMgr.getInstance().showAwardGet(list);
            })
        }
    }

    btnOnGetReward() {
        console.log("send continueItem get");
        if (!this.flag) {
            return;
        }
        this.flag = false;
        // UIMgr.getInstance().showWaiting();
        let pack = new welfare.welfare.CSWelfareContinuousPay();
        SocketMgr.send(welfare.welfare.SPacketID.PACKET_CS_WELF_CONTINPAY, pack);
        // console.log("huangdong2:", this.index);
        tween(this.spine_boxArr[this.index].node).stop(); //无法停止？？
    }
}
