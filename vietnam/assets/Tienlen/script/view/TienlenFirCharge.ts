
import { _decorator, Label, sp, Vec3, tween, randomRangeInt, Node } from 'cc';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import welfare from '../../../ScriptCore/protocol/welfare.js';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenUIMgr } from '../TienlenUIMgr';

const { ccclass, property } = _decorator;

@ccclass('TienlenFirCharge')
export class TienlenFirCharge extends UIWindow {
    @property(sp.Skeleton)
    spine_mango: sp.Skeleton = null;
    @property(Label)
    label_money: Label = null;
    @property(Label)
    label_disconut: Label = null;
    @property(Label)
    label_num1: Label = null;
    @property(Label)
    label_num2: Label = null;
    @property(Label)
    label_num3: Label = null;
    @property(Node)
    node_tip: Node = null;
    @property(Node)
    node_btn: Node = null;

    private firChargeInfo: welfare.welfare.SCWelfareFirstPayData = null;
    private node_mangoToPos: Vec3 = new Vec3(340, -160, 0);
    private isCanClickBtnBuy: boolean = true;
    private mangoAniName: string[] = ["idle", "jushou", "zhi"];
    private randomInterval: number = randomRangeInt(5, 10);

    start() {

    }

    onShow(...args: any[]) {
        TienlenHelper.playSound(TienlenDefine.TIENLEN_FIRSTCHARGE_SHOUCHONG);
        EventMgr.getInstance().addEventListener(EventName.SC_WELF_FIRSTPAY, this.onFirChargeBuy, this);
        this.firChargeInfo = args[0];
        for (let data of this.firChargeInfo.List.Item) {
            let str = Utils.cvtToKMB(data.Grade);
            str = str.replace(".", "d");
            if(data.Type == 1) {
                this.label_num1.string = str;
            } else if (data.Type == 2) {
                this.label_num2.string = str;
            }
        }
        this.label_num3.string = this.firChargeInfo.List.VIPEX.toString();
        this.label_money.string = this.firChargeInfo.List.price1.toString();
        this.label_disconut.string = (this.firChargeInfo.List.Discount * 10).toString();

        if (this.firChargeInfo.Draw == 1) {
            this.node_tip.active = true;
            this.node_btn.active = false;

            tween(this.spine_mango.node).to(0.6, {position: this.node_mangoToPos})
                                        .call(() => {
                                            this.spine_mango.setAnimation(0, "beng", false);
                                            this.spine_mango.setCompleteListener(() => {
                                                this.spine_mango.setCompleteListener(null);
                                                this.spine_mango.setAnimation(0, "idle", true);
                                            })
                                        })
                                        .start();

        } else {
            this.node_tip.active = false;
            this.node_btn.active = true;

            tween(this.spine_mango.node).to(0.6, {position: this.node_mangoToPos})
                                        .call(() => {
                                            this.spine_mango.setAnimation(0, "beng", false);
                                            this.spine_mango.setCompleteListener(() => {
                                                this.spine_mango.setCompleteListener(null);
                                                this.spine_mango.setAnimation(0, this.mangoAniName[randomRangeInt(0, 3)], true);
                                            })
                                        })
                                        .start();

            this.schedule(() => {
                        this.spine_mango.setAnimation(0, this.mangoAniName[randomRangeInt(0, 3)], true);
                        this.randomInterval = randomRangeInt(5, 10);
                        }, this.randomInterval);
                    }
    }

    onHide() {
        EventMgr.getInstance().remove(EventName.SC_WELF_FIRSTPAY, this.onFirChargeBuy, this);
    }

    btnOnClose() {
        this.closeSelf();
    }

    onFirChargeBuy(msg: welfare.welfare.SCWelfareFirstPay) {
        this.isCanClickBtnBuy = true;
        console.log("recv firchargebuy get");
        // UIMgr.getInstance().clearWaiting();
        if (msg.OpRetCode == welfare.welfare.OpResultCode.OPRC_Sucess) {
            let list: { id: number, cnt: number }[] = [];
            for (let data of this.firChargeInfo.List.Item) {
                if(data.Type == 1) {
                    list.push({ id: 1, cnt: data.Grade });
                } else if (data.Type == 2) {
                    list.push({ id: 2, cnt: data.Grade });
                }
            }

            TienlenUIMgr.getInstance().showAwardGet(list);

            this.node_tip.active = true;
            this.node_btn.active = false;
        }
    }

    btnFirChargeBuy() {
        if (!this.isCanClickBtnBuy) {
            return;
        }
        this.isCanClickBtnBuy = false;

        console.log("send firchargebuy get");
        // UIMgr.getInstance().showWaiting();
        let pack = new welfare.welfare.CSWelfareFirstPay();
        SocketMgr.send(welfare.welfare.SPacketID.PACKET_CS_WELF_FIRSTPAY, pack);
    }
}
