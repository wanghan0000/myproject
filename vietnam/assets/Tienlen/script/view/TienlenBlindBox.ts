
import { _decorator, sp, Node, tween, Label, sys} from 'cc';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import welfare from '../../../ScriptCore/protocol/welfare.js';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenUIMgr } from '../TienlenUIMgr';

const { ccclass, property } = _decorator;

@ccclass('TienlenBlindBox')
export class TienlenBlindBox extends UIWindow {
    @property(Node)
    nodeBg: Node = null;
    @property(sp.Skeleton)
    spineBg: sp.Skeleton = null;
    @property(sp.Skeleton)
    spineBox: sp.Skeleton = null;
    @property(sp.Skeleton)
    spineBoxEffect: sp.Skeleton = null;
    @property(sp.Skeleton)
    spineKuang: sp.Skeleton = null;
    @property(Node)
    nodeSprTitle: Node = null;
    @property(Node)
    nodePanPosTo: Node = null;
    @property(Node)
    nodeKuangPosTo: Node = null;
    @property(Node)
    nodePan: Node = null;
    @property(Label)
    labelPriceOri: Label = null;
    @property(Label)
    labelPriceNow: Label = null;
    @property(Label)
    labelItemNum: Label = null;
    @property(Label)
    labelDiscount: Label = null;
    @property(Node)
    nodeMinDiscountTip: Node = null;
    @property(Node)
    nodeBtnBuy: Node = null;
    @property(Node)
    nodeBtnReopen: Node = null;
    @property(Node)
    nodeLabelTip: Node = null;

    private blindBoxInfo: welfare.welfare.SCBlindBoxInfo = null;
    private isCanReOpen: boolean = true;

    start() {
        TienlenHelper.playSound(TienlenDefine.TIENLEN_BLINDBOX_YAOHUANG);
        this.spineBox.setAnimation(0, "dong", false);
        this.spineBox.setCompleteListener(() => {
            // this.spineBox.setAnimation(0, "idle", false);
            this.spineBoxEffect.node.active = true;
            this.nodeSprTitle.active = false;
            this.nodeBg.active = false;
            // tween(this.nodePan).to(0.1, {position: this.nodePanPosTo.position})
            //                         .call(() => {
            //                             tween(this.spineKuang.node).to(0.05, {position: this.nodeKuangPosTo.position})
            //                                                         .call(() => {
            //                                                             this.nodeBg.active = true;
            //                                                             this.spineBg.setAnimation(0, "2", true);
            //                                                         })
            //                                                         .start();
            //                         })
            //                         .start();

            tween(this.nodePan).to(0.1, {position: this.nodePanPosTo.position})
                                .start();

            tween(this.spineKuang.node).delay(0.05)
                                        .to(0.08, {position: this.nodeKuangPosTo.position})
                                        .call(() => {
                                            this.nodeBg.active = true;
                                            this.spineBg.setAnimation(0, "2", true);
                                        })
                                        .start();
        })
    }

    onShow(...args: any[]) {
        EventMgr.getInstance().addEventListener(EventName.SC_WELF_BLINBOXINFO, this.onBlindBox, this);
        EventMgr.getInstance().addEventListener(EventName.SC_WELF_GETBLINBOX, this.onBuyBlindBox, this);
        this.blindBoxInfo = args[0];
        if (this.blindBoxInfo.Draw == 1) {
            this.labelDiscount.string = sys.localStorage.getItem("TienlenBlindBoxInfo_discount");
            let str =  Utils.cvtToKMB(Number(sys.localStorage.getItem("TienlenBlindBoxInfo_itemnum")));
            str = str.replace(".", "d");
            this.labelItemNum.string = str;
            this.labelPriceOri.string = "原价：" + sys.localStorage.getItem("TienlenBlindBoxInfo_priceori") + "钻石";
            this.labelPriceNow.string = sys.localStorage.getItem("TienlenBlindBoxInfo_pricenow") + "钻石购买";

            this.nodeBtnBuy.active = false;
            this.nodeBtnReopen.active = false;
            this.nodeLabelTip.active = true;
        } else {
            this.refreshBlindBoxInfo();
        }

        // if (sys.localStorage.getItem("TienlenBlindBoxInfo_flag") == "true") {
        //     TienlenUIMgr.getInstance().showBlindBox(null);
        // }
    }

    onHide() {
        EventMgr.getInstance().remove(EventName.SC_WELF_BLINBOXINFO, this.onBlindBox, this);
        EventMgr.getInstance().remove(EventName.SC_WELF_GETBLINBOX, this.onBuyBlindBox, this);
    }

    btnOnClose() {
        this.closeSelf();
    }

    refreshBlindBoxInfo() {
        this.labelDiscount.string = this.blindBoxInfo.Date.Discount.toString();
        let str = Utils.cvtToKMB(this.blindBoxInfo.Date.Grade);
        str = str.replace(".", "d");
        this.labelItemNum.string = str;
        this.labelPriceOri.string = "原价：" + this.blindBoxInfo.Date.price1 + "钻石";
        this.labelPriceNow.string = this.blindBoxInfo.Date.price2 + "钻石购买";
        if (this.blindBoxInfo.Draw == 1) {
            this.nodeBtnBuy.active = false;
            this.nodeBtnReopen.active = false;
            this.nodeLabelTip.active = true;
        }
    }

    async onBtnReOpen() {
        if (!this.isCanReOpen) {
            return;
        }

        console.log("send reopen blindboxinfo get");
        this.isCanReOpen = false;
        // UIMgr.getInstance().showWaiting();
        let pack = new welfare.welfare.CSBlindBoxInfo();
        pack.Id = this.blindBoxInfo.Date.Id;
        SocketMgr.send(welfare.welfare.SPacketID.PACKET_CS_WELF_BLINBOXINFO, pack);
        TienlenHelper.playSound(TienlenDefine.TIENLEN_BLINDBOX_YAOHUANG);
    }

    onBlindBox(msg: welfare.welfare.SCBlindBoxInfo) {
        console.log("recv reopen blindboxinfo get");
        this.isCanReOpen = true;
        // UIMgr.getInstance().clearWaiting();
        if (msg.OpRetCode == welfare.welfare.OpResultCode.OPRC_Sucess) {
            this.blindBoxInfo = msg;
            this.nodeMinDiscountTip.active = false;
            console.log("onBtnReOpen", this.blindBoxInfo.MinId, this.blindBoxInfo.Date.Id);
            if (this.blindBoxInfo.MinId == this.blindBoxInfo.Date.Id) {
                this.nodeMinDiscountTip.active = true;
            }
            this.spineBoxEffect.node.active = false;
            this.spineBox.setAnimation(0, "dong", false);
            this.spineBox.setCompleteListener(() => {
                this.spineBoxEffect.node.active = true;
                // this.spineBox.setAnimation(0, "idle", true);
                TienlenHelper.playSound(TienlenDefine.TIENLEN_BLINDBOX_SHUAXIN);
                this.spineKuang.setAnimation(0, "chou", false);
                this.refreshBlindBoxInfo();
            })
        }
    }

    async onBtnBuyBlindBox() {
        console.log("send buy blindbox get");
        UIMgr.getInstance().showWaiting();
        let pack = new welfare.welfare.CSGetBlindBox();
        pack.Id = this.blindBoxInfo.Date.Id;
        SocketMgr.send(welfare.welfare.SPacketID.PACKET_CS_WELF_GETBLINBOX, pack);
    }

    onBuyBlindBox(msg: welfare.welfare.SCGetBlindBox) {
        console.log("recv buy blindbox get");
        UIMgr.getInstance().clearWaiting();
        if (msg.OpRetCode == welfare.welfare.OpResultCode.OPRC_Sucess) {
            let list: { id: number, cnt: number }[] = [];
            list.push({ id: 1, cnt: this.blindBoxInfo.Date.Grade });
            TienlenUIMgr.getInstance().showAwardGet(list);
            sys.localStorage.setItem("TienlenBlindBoxInfo_flag", "true");
            sys.localStorage.setItem("TienlenBlindBoxInfo_discount", this.blindBoxInfo.Date.Discount.toString());
            sys.localStorage.setItem("TienlenBlindBoxInfo_itemnum", this.blindBoxInfo.Date.Grade.toString());
            sys.localStorage.setItem("TienlenBlindBoxInfo_priceori", this.blindBoxInfo.Date.price1.toString());
            sys.localStorage.setItem("TienlenBlindBoxInfo_pricenow", this.blindBoxInfo.Date.price2.toString());
            this.nodeBtnBuy.active = false;
            this.nodeBtnReopen.active = false;
            this.nodeLabelTip.active = true;
        } else if (msg.OpRetCode == welfare.welfare.OpResultCode.OPRC_ErrCoin) {
            // TienlenUIMgr.getInstance().AlertTxt("钻石不足");
            TienlenUIMgr.getInstance().showTienLenShop("2");
            this.closeSelf();
        }
    }
}
