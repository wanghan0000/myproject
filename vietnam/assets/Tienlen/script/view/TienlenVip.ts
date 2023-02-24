
import { _decorator, Node, instantiate, Label, Button, UITransform, Size, sp, ProgressBar, Sprite, v2, ScrollView, RichText } from 'cc';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import player from '../../../ScriptCore/protocol/player.js';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { TienlenUIMgr } from '../TienlenUIMgr';

const { ccclass, property } = _decorator;

@ccclass('TienlenVip')
export class TienlenVip extends UIWindow {
    @property(ScrollView)
    scrollLeft: ScrollView = null;
    @property(Node)
    scrollContent: Node = null;
    @property(Node)
    nodeItem: Node = null;
    @property(Node)
    scrollContentCtx: Node = null;
    @property(Node)
    nodeItemCtx: Node = null;
    @property(ProgressBar)
    progressBar: ProgressBar = null;
    @property(Node)
    nodeProgressEffect: Node = null;
    @property(Label)
    labelProgress: Label = null;
    @property(sp.Skeleton)
    spineBigVipIcon: sp.Skeleton = null;
    @property(sp.Skeleton)
    spineSmallVipIcon: sp.Skeleton = null;
    @property(Label)
    labelVip: Label = null;
    @property(RichText)
    labelUpNeedMoney: RichText = null;
    @property(Node)
    nodeItemGetLayout: Node = null;
    @property(Node)
    nodeItemGet: Node = null;
    @property(Node)
    nodeBtnItemGet: Node = null;
    @property(Node)
    nodeBtnItemNoGet: Node = null;

    private nodeVipItemArr: Node[] = [];
    private vipItemSel: number = 0;
    private leftItemHeight: number = 90;

    private vipInfo: player.player.SCVIPInfo = null;
    private curVip: number = 0;
    private progressLen: number = 651;

    private flag1: boolean = true;
    private flag2: boolean = true;
    
    start() {
        this.initVipScroll();
        this.initVipCtxScroll();
    }

    onShow(...args: any[]) {
        EventMgr.getInstance().addEventListener(EventName.SC_VIPBUY, this.onVipBuy, this);
        EventMgr.getInstance().addEventListener(EventName.SC_DRAWVIPGIFT, this.onVipItemGet, this);
        this.vipInfo = args[0];
        let curVip = this.vipInfo.Vip;
        this.curVip = curVip;
        this.vipItemSel = this.curVip;
        // curVip = this.vipInfo.List.length - 1;
        let upNeedExp = this.vipInfo.List[curVip].VIPEX; 
        let percent = this.vipInfo.TolVipExp / upNeedExp;
        this.progressBar.progress = percent;
        this.labelProgress.string = this.vipInfo.TolVipExp.toString() + "/" + upNeedExp.toString();
        this.spineBigVipIcon.setAnimation(0, "daiji_" + (curVip + 1), true);
        // this.labelVip.string = curVip.toString();
        this.spineSmallVipIcon.setAnimation(0, "daiji_" + (curVip + 2), true);
        this.nodeProgressEffect.setPosition(percent * this.progressLen, 0, 0);
        let upNeedMoney = (Math.ceil((1 - percent) * 100) * this.vipInfo.List[curVip].price / 100);
        this.labelUpNeedMoney.string = `<color=#ffffff>再充值</color><color=#f5dd62>${upNeedMoney}元</color><color=#ffffff>可升级为</color>`;
        this.nodeProgressEffect.active = false;
        if (percent > 0.4) {
            this.nodeProgressEffect.active = true;
        }

        let toVipData = this.vipInfo.List[curVip];
        this.refreshItem(toVipData.Item);
    }

    onHide() {
        EventMgr.getInstance().remove(EventName.SC_VIPBUY, this.onVipBuy, this);
        EventMgr.getInstance().remove(EventName.SC_DRAWVIPGIFT, this.onVipItemGet, this);
    }

    btnOnClose() {
        this.closeSelf();
    }

    refreshItem(itemArr: player.player.IItemInfo[]) {
        if (itemArr.length <= 0) {
            return;
        }
        this.nodeItemGetLayout.removeAllChildren();
        for (let data of itemArr) {
            let node = instantiate(this.nodeItemGet);
            node.active = true;
            node.parent = this.nodeItemGetLayout;
            if (data.CType == 1) {
                node.getChildByName("spine_coin").active = true;
            } else if (data.CType == 2) {
                node.getChildByName("spine_diamond").active = true;
            } else {
                node.getChildByName("spr_item").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_" + data.ItemId);
            }
            node.getChildByName("label").getComponent(Label).string = "X" + Utils.cvtToKMB(data.ItemNum);
        }
    }

    initVipScroll () {
        let itemWidth = 216;
        let count = this.vipInfo.List.length;
        for (let i = 0; i < count; i++) {
            let data = this.vipInfo.List[i];
            let posy = i * this.leftItemHeight;
            let item = instantiate(this.nodeItem);
            item.setPosition(0, -posy);
            this.scrollContent.addChild(item)
            item.active = true;
            this.nodeVipItemArr.push(item);

            if (data.VIPId == this.curVip + 1) {
                item.getChildByName("spr_sel").active = true;
            }

            item.getChildByName("label").getComponent(Label).string = "VIP" + data.VIPId;
            item.on(Button.EventType.CLICK, async () => {
                if (this.vipItemSel != i) {
                    item.getChildByName("spr_sel").active = true;
                    this.nodeVipItemArr[this.vipItemSel].getChildByName("spr_sel").active = false;
                    this.vipItemSel = i;

                    let toVipData = this.vipInfo.List[this.vipItemSel];
                    this.refreshItem(toVipData.Item);

                    if(this.vipItemSel < this.curVip && this.vipInfo.VipId.indexOf(this.vipItemSel + 1) == -1) {
                        this.nodeBtnItemGet.active = true;
                        this.nodeBtnItemNoGet.active = false;
                    } else {
                        this.nodeBtnItemGet.active = false;
                        this.nodeBtnItemNoGet.active = true;
                    }
                }
            })
            let name = "daiji_" + (data.VIPId + 1);
            item.getChildByName("spine_vip").getComponent(sp.Skeleton).setAnimation(0, name, false);
        }
        this.scrollContent.getComponent(UITransform).contentSize = new Size(itemWidth, this.leftItemHeight * count);

        if (this.curVip > 5) {
            let height = this.curVip * this.leftItemHeight;
            this.scrollLeft.scrollToOffset(v2(0, height));
        }
    }

    initVipCtxScroll() {
        let itemWidth = 950;
        let itemHeight = 45;
        let count = 5;
        for (let i = 0; i < count; i++) {
            let posy = i * itemHeight;
            let item = instantiate(this.nodeItemCtx);
            item.setPosition(0, -posy);
            this.scrollContentCtx.addChild(item)
            item.active = true;
        }
        this.scrollContentCtx.getComponent(UITransform).contentSize = new Size(itemWidth, itemHeight * count);
    }

    btnOnVipBuy() {
        console.log("send vipbuy get");
        // UIMgr.getInstance().showWaiting();

        if (!this.flag1) {
            return;
        }
        this.flag1 = false;

        let pack = new player.player.CSVIPBuy();
        pack.Money = 100;
        SocketMgr.send(player.player.PlayerPacketID.PACKET_CS_VIPBUY, pack);
    }

    onVipBuy(msg: player.player.SCVIPBuy) {
        console.log("recv vipbuy get");
        this.flag1 = true;
        // UIMgr.getInstance().clearWaiting();
        if (msg.OpRetCode == player.player.OpResultCode.OPRC_Sucess) {
            let upNeedExp = this.vipInfo.List[msg.Vip].VIPEX; 
            let percent = msg.TolVipExp / upNeedExp;
            this.progressBar.progress = percent;
            this.labelProgress.string = msg.TolVipExp.toString() + "/" + upNeedExp.toString();
            this.nodeProgressEffect.setPosition(percent * this.progressLen, 0, 0);
            let upNeedMoney = (Math.ceil((1 - percent) * 100) * this.vipInfo.List[this.curVip].price / 100);
            this.labelUpNeedMoney.string = `<color=#ffffff>再充值</color><color=#f5dd62>${upNeedMoney}元</color><color=#ffffff>可升级为</color>`;
            this.nodeProgressEffect.active = false;
            if (percent > 0.4) {
                this.nodeProgressEffect.active = true;
            }
            if (msg.Vip != this.curVip) {
                this.curVip = msg.Vip;

                this.spineBigVipIcon.setAnimation(0, "xiaoshi_" + this.curVip, false);
                this.spineBigVipIcon.setCompleteListener(() => {
                    this.spineBigVipIcon.setCompleteListener(null);
                    this.spineBigVipIcon.setAnimation(0, "daiji_" + (this.curVip + 1), true);

                    this.nodeVipItemArr[this.curVip].getChildByName("spr_sel").active = true;
                    this.nodeVipItemArr[this.vipItemSel].getChildByName("spr_sel").active = false;
                    this.vipItemSel = this.curVip;
                    // this.labelVip.string = this.curVip.toString();
    
                    if (this.curVip > 5) {
                        let height = this.curVip * this.leftItemHeight;
                        this.scrollLeft.scrollToOffset(v2(0, height));
                    }
    
                    let toVipData = this.vipInfo.List[this.curVip];
                    this.refreshItem(toVipData.Item);
    
                    this.nodeBtnItemGet.active = false;
                    this.nodeBtnItemNoGet.active = true;

                    this.spineSmallVipIcon.setAnimation(0, "shengji_" + (this.curVip + 2), false);
                    this.spineSmallVipIcon.setCompleteListener(() => {
                        this.spineSmallVipIcon.setCompleteListener(null);
                        this.spineSmallVipIcon.setAnimation(0, "daiji_" + (this.curVip + 2), true);
                    })
                })
            }
        }
    }

    btnOnVipItemGet() {
        console.log("send vipitemget get");
        // UIMgr.getInstance().showWaiting();

        if (!this.flag2) {
            return;
        }
        this.flag2 = false;

        let pack = new player.player.CSVIPDraw();
        pack.Id = this.vipInfo.List[this.vipItemSel].VIPId;
        this.vipInfo.VipId.push(pack.Id);
        SocketMgr.send(player.player.PlayerPacketID.PACKET_CS_DRAWVIPGIFT, pack);
    }

    onVipItemGet(msg: player.player.SCVIPDraw) {
        console.log("recv vipitemget get");
        // UIMgr.getInstance().clearWaiting();
        this.flag2 = true;
        if (msg.OpRetCode == player.player.OpResultCode.OPRC_Sucess) {    
            this.nodeBtnItemGet.active = false;
            this.nodeBtnItemNoGet.active = true;
            let list: { id: number, cnt: number }[] = [];
            let itemArr = this.vipInfo.List[this.vipItemSel].Item;
            for (let data of itemArr) {
                if (data.CType == 1) {
                    list.push({ id: 1, cnt: data.ItemNum });
                } else if (data.CType == 2) {
                    list.push({ id: 2, cnt: data.ItemNum });
                } else {
                    list.push({ id: data.ItemId, cnt: data.ItemNum });
                }
            }
            TienlenUIMgr.getInstance().showAwardGet(list);
        }
    }
}
