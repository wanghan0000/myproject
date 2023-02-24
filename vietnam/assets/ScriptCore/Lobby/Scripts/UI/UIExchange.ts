import { _decorator, Node, instantiate, UITransform, Size, Label, Color, Sprite, Button, EditBox, ScrollView, assetManager, ImageAsset, SpriteFrame, Texture2D, Toggle, utils } from 'cc';
import { BagData } from '../../../data/BagData';
import { EventMgr } from '../../../events/eventmgr';
import { EventName } from '../../../events/EventName';
import { I18nMgr } from '../../../i18n/I18nMgr';
import { SocketMgr } from '../../../panda/net/SocketMgr';
import { Utils } from '../../../panda/utils/Utils';
import  shop  from '../../../protocol/shop.js';
import { Gray_Material_Name, Normail_Material_Name, ResMgr } from '../../../UIFrame/ResMgr';
import { UIScreen } from '../../../UIFrame/UIForm';
import { UIMgr } from '../UIMgr';
const { ccclass, property } = _decorator;

@ccclass('UIExchange')
export class UIExchange extends UIScreen {
    @property(Node)
    nodeShow: Node = null;
    @property(Node)
    nodeOrder: Node = null;
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
    nodeOrderTel: Node = null;
    @property(Node)
    nodeOrderObj: Node = null;
    @property(Button)
    btnSureOrder: Button = null;
    @property(Node)
    nodeSureOrderTip: Node = null;
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

    private colorYellow = new Color(255,146,50);
    private colorGreen = new Color(108,255,50);
    private colorRed = new Color(255,50,50);

    private _telphoneArr: shop.shop.IShopExchangeInfo[] = [];
    private _objectArr: shop.shop.IShopExchangeInfo[] = [];
    static ETY_TYPE_TELPHONE = 1;
    static ETY_TYPE_OBJECT = 2;
    private _etyType = UIExchange.ETY_TYPE_TELPHONE;
    private _selGoodInfo: shop.shop.IShopExchangeInfo = null;

    private _recordCurPageNo: number = 1;
    private _recordPageSize: number = 20;
    private _recordPageSum: number = 0;

    initView () {
        this.nodeShow.active = true;
        this.nodeOrder.active = false;

        this.nodeRecordScroll.on(ScrollView.EventType.SCROLL_TO_BOTTOM, this.recordScrollCb, this);
    }

    onShow () {
        EventMgr.getInstance().addEventListener(EventName.SC_SHOP_EXCHANGELIST,this.onExchangeList,this);
        EventMgr.getInstance().addEventListener(EventName.SC_SHOP_EXCHANGERECORD,this.onRecordList,this);
        EventMgr.getInstance().addEventListener(EventName.SC_SHOP_EXCHANGE,this.onExchange,this);

        this.initView();
        this.doReqExchangeList();
    }

    onHide () {
        EventMgr.getInstance().removeByTarget(this);
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
            UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.duihuanwupinshibaiTxt"));
            return;
        }

        this._telphoneArr.length = 0;
        this._objectArr.length = 0;
        for (let i = 0; i < msg.Infos.length; i++) {
            let info = msg.Infos[i];
            if (info.Type == UIExchange.ETY_TYPE_TELPHONE) {
                this._telphoneArr.push(info);
            } else if (info.Type == UIExchange.ETY_TYPE_OBJECT) {    
                this._objectArr.push(info);
            }
        }

        this.initEtyScrollView(UIExchange.ETY_TYPE_TELPHONE);
    }

    //初始化兑换物品scrollview
    async initEtyScrollView (type: number) {
        let tempArr: shop.shop.IShopExchangeInfo[] = [];
        if (type == UIExchange.ETY_TYPE_TELPHONE) {
            tempArr = this._telphoneArr;
        } else if (type == UIExchange.ETY_TYPE_OBJECT) {
            tempArr = this._objectArr;
        }

        // test
        // for (let i = 0; i < 5; i++) {
        //     tempArr.push(tempArr[0]);
        // }
        
        let itemWidth = 330;
        let itemHeight = 400;
        let startPosX = 30;
        this.nodeEtyContent.destroyAllChildren();
        let count = tempArr.length;
        for (let i = 0; i < count; i++) {
            let info = tempArr[i];
            let row = Math.floor(i / 2);
            let column = i % 2;
            let posx = column * itemWidth + startPosX;
            let posy = row * itemHeight;
            let item = instantiate(this.nodeEtyItem);
            item.setPosition(posx, -posy);
            this.nodeEtyContent.addChild(item)
            item.active = true;
            let sprIcon = item.getChildByName("spr_icon").getComponent(Sprite);
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

            let labelDetial = item.getChildByName("label_detial").getComponent(Label);
            labelDetial.string = Utils.getLanguageString(info.Name);
            
            
            let labelNum = item.getChildByName("label_num").getComponent(Label);
            labelNum.string = info.NeedNum.toString();

            item.on(Button.EventType.CLICK, async () => {
                if (info.DayPlayLimit == info.DayMaxLimit) {
                    UIMgr.getInstance().AlertTxtWithConfirmClose(I18nMgr.getInstance().getStringByKey("lobby.mingtianzailaiTxt"))
                    return;
                }

                if (info.ShopLimit == 0) {
                    UIMgr.getInstance().AlertTxtWithConfirmClose(I18nMgr.getInstance().getStringByKey("lobby.duihuawangTxt"));
                    return;
                }

                this.nodeShow.active = false;
                this.nodeOrder.active = true;

                let sprIcon = this.nodeOrder.getChildByName("node_top").getChildByName("spr_icon").getComponent(Sprite);
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

                let labelDetial = this.nodeOrder.getChildByName("node_top").getChildByName("label_entityname").getComponent(Label);
                //labelDetial.string = info.Name;
                labelDetial.string = Utils.getLanguageString(info.Name);

                let labelNum1 = this.nodeOrder.getChildByName("node_top").getChildByName("label_entitycost").getComponent(Label);
                //labelNum1.string = info.NeedNum.toString() + "V卡";
                labelNum1.string = info.NeedNum.toString() + I18nMgr.getInstance().getStringByKey("lobby.vcard");
                let labelNum2 = this.nodeOrder.getChildByName("node_top").getChildByName("label_money").getComponent(Label);
                labelNum2.string = info.NeedNum.toString() + I18nMgr.getInstance().getStringByKey("lobby.vcard");
                let labelNum3 = this.nodeOrder.getChildByName("node_btm").getChildByName("label_shifu").getComponent(Label);
                labelNum3.string = info.NeedNum.toString() + I18nMgr.getInstance().getStringByKey("lobby.vcard");

                if (info.Type == UIExchange.ETY_TYPE_TELPHONE) {
                    this.editTelMobile.string = "";
                    this._etyType = UIExchange.ETY_TYPE_TELPHONE;
                    this.nodeOrderTel.active = true;
                    this.nodeOrderObj.active = false;

                    let content = this.nodeOrderTel.getChildByName("ScrollView").getChildByName("view").getChildByName("content");
                    content.setPosition(0, 230, 0);
                    let labelRule = content.getChildByName("label_rule").getComponent(Label);
                    //labelRule.string = info.Rule;
                    labelRule.string = Utils.getLanguageString(info.Rule);
    
                    this.scheduleOnce(() => {
                        let labelSize = labelRule.node.getComponent(UITransform).contentSize;
                        content.getComponent(UITransform).contentSize = new Size(labelSize.width, labelSize.height);
                    }, 0.1);
                } else if (info.Type == UIExchange.ETY_TYPE_OBJECT) {
                    this.editObjName.string = "";
                    this.editObjMobile.string = "";
                    this.editObjAddr.string = "";
                    this._etyType = UIExchange.ETY_TYPE_OBJECT;
                    this.nodeOrderTel.active = false;
                    this.nodeOrderObj.active = true;

                    let content = this.nodeOrderObj.getChildByName("ScrollView").getChildByName("view").getChildByName("content");
                    content.setPosition(0, 110, 0);
                    let labelRule = content.getChildByName("label_rule").getComponent(Label);
                    labelRule.string = Utils.getLanguageString(info.Rule);
    
                    this.scheduleOnce(() => {
                        let labelSize = labelRule.node.getComponent(UITransform).contentSize;
                        content.getComponent(UITransform).contentSize = new Size(labelSize.width, labelSize.height);
                    }, 0.1);
                }

                this._selGoodInfo = info;
                this.btnSureOrder.interactable = true;
                this.nodeSureOrderTip.active = false;
                //this.btnSureOrder.node.getComponent(Sprite).grayscale = false;
                this.btnSureOrder.node.getComponent(Sprite).setMaterial(ResMgr.getInstance().getMaterialByPath(Normail_Material_Name),0);
                this.btnSureOrder.node.getChildByName("txt").getComponent(Label).setMaterial(ResMgr.getInstance().getMaterialByPath(Normail_Material_Name),0);
                if (info.NeedNum > BagData.getInstance().getVCardCnt()) {
                    this.btnSureOrder.interactable = false;
                    this.nodeSureOrderTip.active = true;
                    //this.btnSureOrder.node.getComponent(Sprite).grayscale = true;
                    this.btnSureOrder.node.getComponent(Sprite).setMaterial(ResMgr.getInstance().getMaterialByPath(Gray_Material_Name),0);
                this.btnSureOrder.node.getChildByName("txt").getComponent(Label).setMaterial(ResMgr.getInstance().getMaterialByPath(Gray_Material_Name),0);
                }
            }, this);
        }

        let rowCnt = Math.floor(count / 2) + 1;
        this.nodeEtyContent.getComponent(UITransform).contentSize = new Size(720, itemHeight * rowCnt);
    }

    doReqRecordList (pageNo: number) {
        UIMgr.getInstance().showWaiting();
        console.log("send get record list");
        let pack = new shop.shop.CSShopExchangeRecord();
        pack.PageNo = pageNo;
        SocketMgr.send(shop.shop.SPacketID.PACKET_CS_SHOP_EXCHANGERECORD, pack);
    }
    
    onRecordList (msg: shop.shop.SCShopExchangeRecord) {
        UIMgr.getInstance().clearWaiting();
        console.log("recv record list msg:");
        if (this._recordCurPageNo == 1) {
            this.nodeRecordContent.setPosition(0,0,0);
            this.nodeRecordContent.removeAllChildren();
        }
        this._recordCurPageNo = msg.PageNo + 1;
        this._recordPageSize = msg.PageSize;
        this._recordPageSum = msg.PageSum;
        this.nodeEtyContent.active = false;
        this.nodeRecord.active = true;
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
                labelState1.string = I18nMgr.getInstance().getStringByKey("lobby.exchangeshenhezhong");
                labelState1.color = this.colorYellow;
            } else if (recordInfo.State == 2) {
                labelState1.node.active = false;
                labelState2.node.active = true;
                //labelState2.string = "已完成";
                labelState2.string = I18nMgr.getInstance().getStringByKey("lobby.exchangeyiwancheng");
                labelState2.color = this.colorGreen;
                labelState2.node.on(Button.EventType.CLICK, cb);
            } else if (recordInfo.State == 3) {
                labelState1.node.active = false;
                labelState2.node.active = true;
                //labelState2.string = "未通过";
                labelState2.string = I18nMgr.getInstance().getStringByKey("lobby.exchangeweitongguo")
                labelState2.color = this.colorRed;
                labelState2.node.on(Button.EventType.CLICK, cb);
            } else if (recordInfo.State == 4) {
                labelState1.node.active = false;
                labelState2.node.active = true;
                //labelState2.string = "撤单";
                labelState2.string = I18nMgr.getInstance().getStringByKey("lobby.exchangechedan");
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
            UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.duihuan_dengdaishenheTxt"));
        } else if (msg.RetCode == shop.shop.OpResultCode.OPRC_VCoinNotEnough) {
            UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.vcardbuzuTxt"));
        } else if (msg.RetCode == shop.shop.OpResultCode.OPRC_ExchangeLimit) {
            UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.mingtianzailaiTxt"));
        } else if (msg.RetCode == shop.shop.OpResultCode.OPRC_ExchangeNotEnough) {
            UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.duihuawangTxt"));
        } else if (msg.RetCode == shop.shop.OpResultCode.OPRC_ExchangeDataRtt) {
            UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.xinxiyouwuTxt"));
        } else if (msg.RetCode == shop.shop.OpResultCode.OPRC_ExchangeSoldOut) {
            UIMgr.getInstance().alertRichTxt(I18nMgr.getInstance().getStringByKey("lobby.shangpinxiajiaTxt"));
        }
        this.nodeShow.getChildByName("togglegroup").getChildByName("Toggle1").getComponent(Toggle).isChecked = true;
        this.btnOnBackNodeShow();
        this.doReqExchangeList();
    }

    //话费
    onToggleTelePhone () {
        this.nodeEtyContent.active = true;
        this.nodeRecord.active = false;
        this.initEtyScrollView(UIExchange.ETY_TYPE_TELPHONE);
    }

    //实物
    onToggleEntity () {
        this.nodeEtyContent.active = true;
        this.nodeRecord.active = false;
        this.initEtyScrollView(UIExchange.ETY_TYPE_OBJECT);
    }

    //兑换记录
    onToggleRecord () {
        this._recordCurPageNo = 1;
        this._recordPageSize = 20;
        this._recordPageSum = 0;
        this.doReqRecordList(this._recordCurPageNo);
    }

    btnOnBack() {
        this.closeSelf();
    }

    btnOnBackNodeShow () {
        this.nodeShow.active = true;
        this.nodeOrder.active = false;
    }

    btnOnSureOrder () {
        let pack = new shop.shop.CSShopExchange();
        if (this._etyType == UIExchange.ETY_TYPE_TELPHONE) {
            if (this.editTelMobile.string.length < 11) {
                UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.telnumwucuoTxt"));
                return;
            }

            pack.GoodsId = this._selGoodInfo.GoodsId;
            pack.Mobile = this.editTelMobile.string;
        } else if (this._etyType == UIExchange.ETY_TYPE_OBJECT) {
            if (this.editObjName.string.length == 0) {
                UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.xingmingbunengkongTxt"));
                return;
            }

            if (this.editObjMobile.string.length == 0) {
                UIMgr.getInstance().AlertTxtWithConfirmClose(I18nMgr.getInstance().getStringByKey("lobby.telnumbunengkongTxt"));
                return;
            }

            if (this.editObjMobile.string.length < 11) {
                UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.telnumwucuoTxt"));
                return;
            }

            if (this.editObjAddr.string.length === 0) {
                UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.dizhibunengkongTxt"));
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

