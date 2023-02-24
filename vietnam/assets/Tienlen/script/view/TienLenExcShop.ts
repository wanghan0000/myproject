import { _decorator, Node, instantiate, UITransform, Size, Label, Color, Sprite, Button, EditBox, ScrollView, assetManager, ImageAsset, SpriteFrame, Texture2D, labelAssembler, Toggle } from 'cc';
import { UserData } from '../../../ScriptCore/data/UserData';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import  shop  from '../../../ScriptCore/protocol/shop.js';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { BagData } from '../../../ScriptCore/data/BagData';
import { TienlenUIMgr } from '../TienlenUIMgr';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
const { ccclass, property } = _decorator;

@ccclass('TienLenExcShop')
export class TienLenExcShop extends UIScreen {
    @property(Node)
    nodeEtyContent: Node = null;
    @property(Node)
    nodeEtyItem: Node = null;
    @property(Node)
    nodeRecord: Node = null;
    @property(Node)
    nodeRecordContent: Node = null;
    @property(Node)
    nodeRecordItem: Node = null;
    @property(Node)
    nodeGoodsDetails: Node = null;
    @property(Node)
    nodeDetails: Node = null;
    @property(Node)
    nodeOrderTel: Node = null;
    @property(Node)
    nodeOrderObj: Node = null;
    @property(EditBox)
    editTelMobile: EditBox = null;
    @property(EditBox)
    editObjName: EditBox = null;
    @property(EditBox)
    editObjMobile: EditBox = null;
    @property(EditBox)
    editObjAddr: EditBox = null;
    @property(Node)
    nodeRecordScroll: Node = null;
    @property(Label)
    labelVcoin: Label = null;

    private colorYellow = new Color(255,146,50);
    private colorGreen = new Color(108,255,50);
    private colorRed = new Color(255,50,50);

    private _telphoneArr: shop.shop.IShopExchangeInfo[] = [];
    private _objectArr: shop.shop.IShopExchangeInfo[] = [];
    static ETY_TYPE_TELPHONE = 1;
    static ETY_TYPE_OBJECT = 2;
    private _etyType = TienLenExcShop.ETY_TYPE_TELPHONE;
    private _selGoodInfo: shop.shop.IShopExchangeInfo = null;

    private _recordCurPageNo: number = 1;
    private _recordPageSize: number = 20;
    private _recordPageSum: number = 0;

    initView () {
        this.updateVcoin();
        this.nodeRecordScroll.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.recordScrollCb, this);
    }

    onShow () {
        EventMgr.getInstance().addEventListener(EventName.SC_SHOP_EXCHANGELIST,this.onExchangeList,this);
        EventMgr.getInstance().addEventListener(EventName.SC_SHOP_EXCHANGERECORD,this.onRecordList,this);
        EventMgr.getInstance().addEventListener(EventName.SC_SHOP_EXCHANGE,this.onExchange,this);
        EventMgr.getInstance().addEventListener(EventName.BAG_DATA_ASYNC_NOTIFY, this.updateVcoin, this);

        this.initView();
        this.doReqExchangeList();
    }

    onHide () {
        EventMgr.getInstance().removeByTarget(this);
    }

    updateVcoin () {
        this.labelVcoin.string = Utils.cvtToKMB(BagData.getInstance().getVCardCnt()).toString();
    }

    doReqExchangeList () {
        console.log("send get exchange list");
        let pack = new shop.shop.CSShopExchangeList();
        SocketMgr.send(shop.shop.SPacketID.PACKET_CS_SHOP_EXCHANGELIST, pack);
    }

    onExchangeList (msg: shop.shop.SCShopExchangeList) {
        console.log("recv exchange list msg:", msg.Infos);
        if (msg.RetCode != 0) {
            console.log("get exchange list err:", msg.RetCode);
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("tienlen.duihuanwupinshibaiTxt"));
            return;
        }

        this._telphoneArr.length = 0;
        this._objectArr.length = 0;
        for (let i = 0; i < msg.Infos.length; i++) {
            let info = msg.Infos[i];
            if (info.Type == TienLenExcShop.ETY_TYPE_TELPHONE) {
                this._telphoneArr.push(info);
            } else if (info.Type == TienLenExcShop.ETY_TYPE_OBJECT) {    
                this._objectArr.push(info);
            }
        }

        this.initEtyScrollView(TienLenExcShop.ETY_TYPE_TELPHONE);
    }

    //初始化兑换物品scrollview
    async initEtyScrollView (type: number) {
        let tempArr: shop.shop.IShopExchangeInfo[] = [];
        if (type == TienLenExcShop.ETY_TYPE_TELPHONE) {
            tempArr = this._telphoneArr;
        } else if (type == TienLenExcShop.ETY_TYPE_OBJECT) {
            tempArr = this._objectArr;
        }
        
        let itemWidth = 210;
        let itemHeight = 240;
        let interval = 42.5;
        this.nodeEtyContent.destroyAllChildren();
        let count = tempArr.length;
        for (let i = 0; i < count; i++) {
            let info = tempArr[i];
            let row = Math.floor(i/3);
            let column = Math.floor(i%3);
            let posx = column * itemWidth + interval * (column+1);
            let posy = row * itemHeight;
            let item = instantiate(this.nodeEtyItem);
            item.setPosition(posx, -posy);
            this.nodeEtyContent.addChild(item)
            item.active = true;
            let sprIcon = item.getChildByName("spr_icon").getComponent(Sprite);
            // sprIcon.spriteFrame = await ResMgr.getInstance().lazyLoadSpriteFrame("Lobby/Textures/exchange/" + info.Picture);
            // console.log("网络图片的处理=========");
            // console.log(info.Picture);
            // //http://avatar-icon.oss-cn-guangzhou.aliyuncs.com/shop/1_1_d1d7b70fef301eb689cc65573972820a.png
            // info.Picture = "http://avatar-icon.oss-cn-guangzhou.aliyuncs.com/shop/1_1_d1d7b70fef301eb689cc65573972820axxx.png"

            console.log("网络图片的处理=========");
            assetManager.loadRemote<ImageAsset>(info.Picture, function (err, imageAsset) {
                if (err != null) {
                    console.log("网络图片加载错误");
                    console.log(err);
                } else {
                    if (sprIcon.isValid) {
                        const spriteFrame = new SpriteFrame();
                        const texture = new Texture2D();
                        texture.image = imageAsset;
                        spriteFrame.texture = texture;
                        sprIcon.spriteFrame = spriteFrame;
                    }
                 }
            });

            let label_limit = item.getChildByName("label_limit").getComponent(Label);
            if (info.DayMaxLimit == -1) {
                label_limit.string = "--";
            } else {
                label_limit.string = info.DayMaxLimit.toString();
            }
            let label_last = item.getChildByName("label_last").getComponent(Label);
            if (info.ShopLimit == -1) {
                label_last.string = "--";
            } else {
                label_last.string = info.ShopLimit.toString();
            }
            let labelNum = item.getChildByName("label_num").getComponent(Label);
            labelNum.string = info.NeedNum.toString();

            item.on(Button.EventType.CLICK, async () => {
                if (info.DayMaxLimit != -1 && info.DayPlayLimit == info.DayMaxLimit) {
                    TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.mingtianzailaiTxt"))
                    return;
                }

                if (info.ShopLimit == 0) {
                    TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.duihuawangTxt"));
                    return;
                }

                this.nodeGoodsDetails.active = true;
                this.nodeDetails.active = true;
                this.nodeOrderTel.active = false;
                this.nodeOrderObj.active = false;

                let sprIcon = this.nodeGoodsDetails.getChildByName("dikuang").getChildByName("spr_icon").getComponent(Sprite);
                // sprIcon.spriteFrame = await ResMgr.getInstance().lazyLoadSpriteFrame("Lobby/Textures/exchange/" + info.Picture);

                assetManager.loadRemote<ImageAsset>(info.Picture, function (err, imageAsset) {
                    if (err != null) {
                        console.log("网络图片加载错误");
                        console.log(err);
                    } else {
                        if (sprIcon.isValid) {
                            const spriteFrame = new SpriteFrame();
                            const texture = new Texture2D();
                            texture.image = imageAsset;
                            spriteFrame.texture = texture;
                            sprIcon.spriteFrame = spriteFrame;
                        }
                     }
                });

                let labelName = this.nodeDetails.getChildByName("label_name").getComponent(Label);
                labelName.string = Utils.getLanguageString(info.Name);
                


                let content = this.nodeDetails.getChildByName("ScrollView").getChildByName("view").getChildByName("content");
                content.setPosition(0,90,0);
                let labelDetail = content.getChildByName("label_rule").getComponent(Label);
                console.log("===========================");
                console.log(info.Rule);
                console.log("===========================");

                labelDetail.string = Utils.getLanguageString(info.Rule);

                this.scheduleOnce(() => {
                    let labelSize = labelDetail.node.getComponent(UITransform).contentSize;
                    content.getComponent(UITransform).contentSize = new Size(labelSize.width, labelSize.height);
                }, 0.1);

                let labelLimit = this.nodeDetails.getChildByName("label_count").getComponent(Label);
                labelLimit.string = (info.DayPlayLimit != -2 ? info.DayPlayLimit : "--") + "/" + (info.DayMaxLimit != -1 ? info.DayMaxLimit : "--");
                let labelExchange = this.nodeGoodsDetails.getChildByName("dikuang").getChildByName("btn_exchange").getChildByName("Label").getComponent(Label);
                //labelExchange.string = info.NeedNum.toString() + "兑换";
                labelExchange.string = info.NeedNum.toString() + I18nMgr.getInstance().getStringByKey("duihuanTxt");

                this._selGoodInfo = info;
                let btnExchange = this.nodeGoodsDetails.getChildByName("dikuang").getChildByName("btn_exchange").getComponent(Button);
                btnExchange.interactable = true;
                btnExchange.node.getComponent(Sprite).grayscale = false;
                if (info.NeedNum > BagData.getInstance().getVCardCnt()) {
                    btnExchange.interactable = false;
                    btnExchange.node.getComponent(Sprite).grayscale = true;
                }
            }, this);
        }

        let rowCnt = Math.floor((count)/2) + 1;
        this.nodeEtyContent.getComponent(UITransform).contentSize = new Size(720, itemHeight * rowCnt);
    }

    doReqRecordList (pageNo: number) {
        // UIMgr.getInstance().showWaiting();
        console.log("send get record list");
        let pack = new shop.shop.CSShopExchangeRecord();
        pack.PageNo = pageNo;
        SocketMgr.send(shop.shop.SPacketID.PACKET_CS_SHOP_EXCHANGERECORD, pack);
    }
    
    onRecordList (msg: shop.shop.SCShopExchangeRecord) {
        // UIMgr.getInstance().clearWaiting();
        console.log("recv record list msg:");
        this.nodeRecord.active = true;
        if (this._recordCurPageNo == 1) {
            this.nodeRecordContent.setPosition(0,0,0);
            this.nodeRecordContent.removeAllChildren();
        }
        this._recordCurPageNo = msg.PageNo + 1;
        this._recordPageSize = msg.PageSize;
        this._recordPageSum = msg.PageSum;
        this.initRecordScrollView(msg.Infos);
    }

    //初始化兑换记录scrollview
    initRecordScrollView (recordArr: shop.shop.IShopExchangeRecord[]) {
        let itemHeight = 70;
        let curCount = this.nodeRecordContent.children.length;
        let count = recordArr.length;
        for (let i = 0; i < count; i++) {
            let recordInfo = recordArr[i];
            let posy = (i + curCount) * itemHeight;
            let item = instantiate(this.nodeRecordItem);
            item.setPosition(340, -posy);
            this.nodeRecordContent.addChild(item)
            item.active = true;
            item.getChildByName("label_num").getComponent(Label).string = (i+curCount+1).toString();
            let date = new Date(recordInfo.CreateTs*1000);
            item.getChildByName("label_date").getComponent(Label).string = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
            
            item.getChildByName("label_entity").getComponent(Label).string = Utils.getLanguageString(recordInfo.Name);

            let labelState1 = item.getChildByName("label_state1").getComponent(Label);
            let labelState2 = item.getChildByName("label_state2").getComponent(Label);
            labelState2.node.active = false;
            let cb = () => {
                let nodeTip = this.nodeRecord.getChildByName("node_tip");
                nodeTip.active = true;
                let content = nodeTip.getChildByName("ScrollView").getChildByName("view").getChildByName("content");
                let label = content.getChildByName("label_tip").getComponent(Label);
                label.string = recordInfo.Remark;
                content.setPosition(0,0,0);
                let size = content.getComponent(UITransform).contentSize;
                this.scheduleOnce(() => {
                    content.getComponent(UITransform).contentSize = new Size(size.width, label.node.getComponent(UITransform).contentSize.height);
                }, 0.03);
                let btnClose = nodeTip.getChildByName("btn_close");
                btnClose.on(Button.EventType.CLICK, () => {
                    nodeTip.active = false;
                })
            }
            // Shop_Status_Keep    = iota //0为待审核
            // Shop_Status_Pass           // 1为审核通过
            // Shop_Status_Send           // 2为已发货
            // Shop_Status_NotSend        // 3为审核不通过
            // Shop_Status_Revoke         // 4为撤单

            if (recordInfo.State == 0 || recordInfo.State == 1) {
                //labelState1.string = "审核中";
                labelState1.string = I18nMgr.getInstance().getStringByKey("tienlen.shenhezhongTxt");
                labelState1.color = this.colorYellow;
            } else if (recordInfo.State == 2) {
                labelState1.node.active = false;
                labelState2.node.active = true;
                //labelState2.string = "已完成";
                labelState2.string = I18nMgr.getInstance().getStringByKey("tienlen.yiwanchengTxt");
                labelState2.color = this.colorGreen;
                labelState2.node.on(Button.EventType.CLICK, cb);
            } else if (recordInfo.State == 3) {
                labelState1.node.active = false;
                labelState2.node.active = true;
                //labelState2.string = "未通过";
                labelState2.string = I18nMgr.getInstance().getStringByKey("tienlen.wentongguoTxt");

                labelState2.color = this.colorRed;
                labelState2.node.on(Button.EventType.CLICK, cb);
            } else if (recordInfo.State == 4) {
                labelState1.node.active = false;
                labelState2.node.active = true;
                //labelState2.string = "撤单";
                labelState2.string = I18nMgr.getInstance().getStringByKey("tienlen.chedanTxt");
                labelState2.color = this.colorRed;
                labelState2.node.on(Button.EventType.CLICK, cb);
            }
        }
        this.nodeRecordContent.getComponent(UITransform).contentSize = new Size(680, itemHeight * (count+curCount));
    }

    onExchange (msg: shop.shop.SCShopExchange) {
        UIMgr.getInstance().clearWaiting();
        console.log("recv exchange");
        if (msg.RetCode == shop.shop.OpResultCode.OPRC_Sucess) {
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.duihuan_dengdaishenheTxt"));
        } else if (msg.RetCode == shop.shop.OpResultCode.OPRC_VCoinNotEnough) {
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.vcardbuzuTxt"));
        } else if (msg.RetCode == shop.shop.OpResultCode.OPRC_ExchangeLimit) {
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.mingtianzailaiTxt"));
        } else if (msg.RetCode == shop.shop.OpResultCode.OPRC_ExchangeNotEnough) {
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.duihuawangTxt"));
        } else if (msg.RetCode == shop.shop.OpResultCode.OPRC_ExchangeDataRtt) {
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.xinxiyouwuTxt"));
        } else if (msg.RetCode == shop.shop.OpResultCode.OPRC_ExchangeSoldOut) {
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.shangpinxiajiaTxt"));
        }
        this.node.getChildByName("node_show").getChildByName("togglegroup").getChildByName("Toggle1").getComponent(Toggle).isChecked = true;
        this.btnOnCloseGoodsDetails();
        this.doReqExchangeList();
    }

    //话费
    onToggleTelePhone () {
        this.initEtyScrollView(TienLenExcShop.ETY_TYPE_TELPHONE);
    }

    //实物
    onToggleEntity () {
        this.initEtyScrollView(TienLenExcShop.ETY_TYPE_OBJECT);
    }

    //兑换记录
    onToggleRecord () {
        this._recordCurPageNo = 1;
        this._recordPageSize = 20;
        this._recordPageSum = 0;
        this.doReqRecordList(this._recordCurPageNo);
    }

    btnOnCloseRecord () {
        this.nodeRecord.active = false;
    }

    btnOnCloseGoodsDetails () {
        this.nodeGoodsDetails.active = false;
    }

    btnOnExchange () {
        if (this.nodeDetails.active) {
            this.nodeDetails.active = false;
            if (this._selGoodInfo.Type == TienLenExcShop.ETY_TYPE_TELPHONE) {
                this.editTelMobile.string = "";
                this._etyType = TienLenExcShop.ETY_TYPE_TELPHONE;
                this.nodeOrderTel.active = true;
                this.nodeOrderObj.active = false;
            } else if (this._selGoodInfo.Type == TienLenExcShop.ETY_TYPE_OBJECT) {
                this.editObjName.string = "";
                this.editObjMobile.string = "";
                this.editObjAddr.string = "";
                this._etyType = TienLenExcShop.ETY_TYPE_OBJECT;
                this.nodeOrderTel.active = false;
                this.nodeOrderObj.active = true;
            }
        } else {
            this.btnOnSureOrder();
        }
    }

    btnOnBack() {
        this.closeSelf();
    }

    btnOnSureOrder () {
        let pack = new shop.shop.CSShopExchange();
        if (this._etyType == TienLenExcShop.ETY_TYPE_TELPHONE) {
            if (this.editTelMobile.string.length < 11) {
                TienlenUIMgr.getInstance().AlertTxt("lobby.telnumwucuoTxt");
                return;
            }

            pack.GoodsId = this._selGoodInfo.GoodsId;
            pack.Mobile = this.editTelMobile.string;
        } else if (this._etyType == TienLenExcShop.ETY_TYPE_OBJECT) {
            if (this.editObjName.string.length == 0) {
                TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.xingmingbunengkongTxt"));
                return;
            }

            if (this.editObjMobile.string.length == 0) {
                TienlenUIMgr.getInstance().AlertTxt("lobby.telnumbunengkongTxt");
                return;
            }

            if (this.editObjMobile.string.length < 11) {
                TienlenUIMgr.getInstance().AlertTxt("lobby.telnumwucuoTxt");
                return;
            }

            if (this.editObjAddr.string.length === 0) {
                TienlenUIMgr.getInstance().AlertTxt("lobby.dizhibunengkongTxt");
                return;
            }

            pack.GoodsId = this._selGoodInfo.GoodsId;
            pack.UserName = this.editObjName.string;
            pack.Mobile = this.editObjMobile.string;
            pack.Comment = this.editObjAddr.string;
        }

        UIMgr.getInstance().showWaiting();
        console.log("send sure order");
        SocketMgr.send(shop.shop.SPacketID.PACKET_CS_SHOP_EXCHANGE, pack);
    }

    recordScrollCb (scrollView: ScrollView) {
        if (this._recordCurPageNo > this._recordPageSum) {
            return;
        }
        this.doReqRecordList(this._recordCurPageNo);
    }
}

