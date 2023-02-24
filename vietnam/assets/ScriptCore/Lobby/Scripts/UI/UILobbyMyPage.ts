import { _decorator, Node, Vec3, instantiate, Label, Button, tween, v3, ScrollView, UITransform, size, Size, RichText } from 'cc';
import { DB_GameFree } from '../../../config/db_gamefree';
import { RedDotData } from '../../../data/RedDotData';
import { EventMgr } from '../../../events/eventmgr';
import { EventName } from '../../../events/EventName';
import { I18nMgr } from '../../../i18n/I18nMgr';
import { SocketMgr } from '../../../panda/net/SocketMgr';
import { FuncExtend } from '../../../panda/utils/FuncExtend';
import { Utils } from '../../../panda/utils/Utils';
import gamehall from '../../../protocol/gamehall.js';
import message from '../../../protocol/message.js';
import { UIScreen } from '../../../UIFrame/UIForm';
import { MailNowLocation } from '../gameconfig/GameConst';
import { UIMgr } from '../UIMgr';

const { ccclass, property } = _decorator;

@ccclass('UILobbyMyPage')
export class UILobbyMyPage extends UIScreen {
    @property(Node)
    nodeTopPos: Node = null;
    @property(Node)
    nodeBtmPos: Node = null;
    @property(Label)
    labelPageName: Label = null;

    @property(Node)
    nodeDrawer: Node = null;
    @property(Node)
    nodeTitleBar: Node = null;

    @property(Node)
    nodeScrollContent: Node = null;
    @property(RichText)
    labelContent: RichText = null;

    @property(ScrollView)
    scrollViewBattle: ScrollView = null;
    @property(Node)
    battleContent: Node = null;
    @property(Node)
    battleItem: Node = null;

    private topPos: Vec3 = null;
    private endPos: Vec3 = null;
    private titleBarInterval: number = 20;
    private titleBarHeight: number = 80;
    private titleBarNodeArr: Node[] = [];
    private openIndex: number = -1;

    private _contentScrollWeight = 680;
    private _contentScrollHeightMin = 200;
    private _contentScrollHeightMax = 0;

    static UILobbyMyPageType_BATTLE = 0;
    static UILobbyMyPageType_CONTENT = 1;
    static UILobbyMyPageType_MAIL = 2;

    onShow(...params: any) {
        EventMgr.getInstance().addEventListener(EventName.SC_MYINFO_COMNOTICE, this.recvBattleInfo, this);
        this.topPos = this.nodeTopPos.getPosition();
        this.endPos = this.nodeBtmPos.getPosition();

        EventMgr.getInstance().addEventListener(EventName.SC_MESSAGEREAD,this.readCallBack,this);


        if (params[1] == UILobbyMyPage.UILobbyMyPageType_BATTLE) {
            this.initBattleTitles(params[0]);
        } else if (params[1] == UILobbyMyPage.UILobbyMyPageType_CONTENT) {
            this.initContent(params[0]);
        } else if (params[1] == UILobbyMyPage.UILobbyMyPageType_MAIL) {
            this.initMail(params[0]);
        }
    }

    onHide() {
        
    }

    btnOnClose() {
        EventMgr.getInstance().removeByTarget(this);
        this.closeSelf();
    }

    initContent(dataArr: gamehall.gamehall.ICommonNotice[]) {
        let count = dataArr.length;
        let contentH = 500;
        for (let i = 0; i < count; i++) {
            let data = dataArr[i];
            if (i == 0) {
                this.labelPageName.string = data.TypeName;
            }

            let nodeTitleBar = instantiate(this.nodeTitleBar);
            this.titleBarNodeArr.push(nodeTitleBar);
            nodeTitleBar.active = true;
            nodeTitleBar.parent = this.nodeDrawer;
            nodeTitleBar.setPosition(this.topPos.x, this.topPos.y - this.titleBarHeight * i - this.titleBarInterval * i, this.topPos.z);
            let labelTitle = nodeTitleBar.getChildByName("lable_titlename").getComponent(Label);
            labelTitle.string = Utils.getLanguageString(data.Title);

            let btnPull = nodeTitleBar.getChildByName("btn_pull");
            btnPull.on(Button.EventType.CLICK, () => {
                let sprArrow = this.titleBarNodeArr[i].getChildByName("btn_pull").getChildByName("spr_jiantou");
                if (sprArrow.eulerAngles.z === 0) { // 收起来
                    sprArrow.setRotationFromEuler(0, 0, 180);

                    for (let j = i+1; j < count; j++) {
                        let nodeTitleBar = this.titleBarNodeArr[j];
                        let toPosY =  this.topPos.y - this.titleBarHeight * j - this.titleBarInterval * j;
                        
                        tween(nodeTitleBar).to(0.1, {position: v3(nodeTitleBar.position.x, toPosY, nodeTitleBar.position.z)})
                                            .start();
                    }

                    this.openIndex = -1;
                    this.nodeScrollContent.active = false;
                } else if (sprArrow.eulerAngles.z === 180) { // 下拉
                    sprArrow.setRotationFromEuler(0, 0, 0);
                    if (this.openIndex != -1) { //有已经打开的内容
                        this.titleBarNodeArr[this.openIndex].getChildByName("btn_pull").getChildByName("spr_jiantou").setRotationFromEuler(0, 0, 180);
                        for (let j = 0; j < count; j++) {
                            let nodeTitleBar = this.titleBarNodeArr[j];
                            let toPosY = 0;
                            if (j <= i) {
                                toPosY =  this.topPos.y - this.titleBarHeight * j - this.titleBarInterval * j;
                            } else {
                                toPosY =  this.topPos.y - this.titleBarHeight * j - this.titleBarInterval * j - contentH;
                            }
                            
                            tween(nodeTitleBar).to(0.1, {position: v3(nodeTitleBar.position.x, toPosY, nodeTitleBar.position.z)})
                                                .start();
                        }
                    } else { // 还没有打开的内容
                        for (let j = i+1; j < count; j++) {
                            let nodeTitleBar = this.titleBarNodeArr[j];
                            tween(nodeTitleBar).to(0.1, {position: v3(nodeTitleBar.position.x, nodeTitleBar.position.y - contentH, nodeTitleBar.position.z)})
                                                .start();
                        }
                    }

                    this.openIndex = i;
                    this.scheduleOnce(()=>{
                        this.nodeScrollContent.active = true;
                    }, 0.1);
                    let posY =  this.topPos.y - this.titleBarHeight * (this.openIndex + 1) - this.titleBarInterval * (this.openIndex  + 1);
                    this.nodeScrollContent.setPosition(this.topPos.x, posY, this.topPos.z);

                    this.labelContent.string = Utils.getLanguageString(data.Content);
                    
                    // console.log("label size:", this.labelContent.node.getComponent(UITransform).contentSize);
                    // let labelSize = this.labelContent.node.getComponent(UITransform).contentSize;
                    // if (labelSize.height < this._contentScrollHeightMin) {
                    //     this.nodeScrollContent.getComponent(UITransform).contentSize = new Size(this._contentScrollWeight, this._contentScrollHeightMin);
                    //     this.nodeScrollContent.getChildByName("view").getComponent(UITransform).contentSize = new Size(this._contentScrollWeight, this._contentScrollHeightMin);
                    //     this.nodeScrollContent.getChildByName("view").getChildByName("content").getComponent(UITransform).contentSize = new Size(this._contentScrollWeight, this._contentScrollHeightMin);
                    // }
                }
            })
        }
    }

    // initBattleList(dataArr: gamehall.gamehall.IPlayerRecord[]) {

    initBattleTitles(timeArr: number[]) {
        //this.labelPageName.string = "战绩列表";
        this.labelPageName.string = I18nMgr.getInstance().getStringByKey("lobby.zhanjiliebiao");
        let count = timeArr.length;
        let contentH = 500;
        for (let i = 0; i < count; i++) {
            let time = timeArr[i];

            let nodeTitleBar = instantiate(this.nodeTitleBar);
            this.titleBarNodeArr.push(nodeTitleBar);
            nodeTitleBar.active = true;
            nodeTitleBar.parent = this.nodeDrawer;
            nodeTitleBar.setPosition(this.topPos.x, this.topPos.y - this.titleBarHeight * i - this.titleBarInterval * i, this.topPos.z);
            let labelTitle = nodeTitleBar.getChildByName("lable_titlename").getComponent(Label);
            let date = new Date(time*1000);
            labelTitle.string = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate();
            let btnPull = nodeTitleBar.getChildByName("btn_pull");
            btnPull.on(Button.EventType.CLICK, () => {
                let sprArrow = this.titleBarNodeArr[i].getChildByName("btn_pull").getChildByName("spr_jiantou");
                if (sprArrow.eulerAngles.z === 0) { // 收起来
                    sprArrow.setRotationFromEuler(0, 0, 180);

                    for (let j = i+1; j < count; j++) {
                        let nodeTitleBar = this.titleBarNodeArr[j];
                        let toPosY =  this.topPos.y - this.titleBarHeight * j - this.titleBarInterval * j;
                        
                        tween(nodeTitleBar).to(0.1, {position: v3(nodeTitleBar.position.x, toPosY, nodeTitleBar.position.z)})
                                            .start();
                    }

                    this.openIndex = -1;
                    this.scrollViewBattle.node.active = false;
                } else if (sprArrow.eulerAngles.z === 180) { // 下拉
                    this.sendBattleInfo(time);
                    sprArrow.setRotationFromEuler(0, 0, 0);
                    if (this.openIndex != -1) { //有已经打开的内容
                        this.titleBarNodeArr[this.openIndex].getChildByName("btn_pull").getChildByName("spr_jiantou").setRotationFromEuler(0, 0, 180);
                        for (let j = 0; j < count; j++) {
                            let nodeTitleBar = this.titleBarNodeArr[j];
                            let toPosY = 0;
                            if (j <= i) {
                                toPosY =  this.topPos.y - this.titleBarHeight * j - this.titleBarInterval * j;
                            } else {
                                toPosY =  this.topPos.y - this.titleBarHeight * j - this.titleBarInterval * j - contentH;
                            }
                            
                            tween(nodeTitleBar).to(0.1, {position: v3(nodeTitleBar.position.x, toPosY, nodeTitleBar.position.z)})
                                                .start();
                        }
                    } else { // 还没有打开的内容
                        for (let j = i+1; j < count; j++) {
                            let nodeTitleBar = this.titleBarNodeArr[j];
                            tween(nodeTitleBar).to(0.1, {position: v3(nodeTitleBar.position.x, nodeTitleBar.position.y - contentH, nodeTitleBar.position.z)})
                                                .start();
                        }
                    }

                    this.openIndex = i;
                    let posY =  this.topPos.y - this.titleBarHeight * (this.openIndex + 1) - this.titleBarInterval * (this.openIndex  + 1);
                    this.scrollViewBattle.node.setPosition(this.topPos.x, posY, this.topPos.z);
                    
                    // console.log("label size:", this.labelContent.node.getComponent(UITransform).contentSize);
                    // let labelSize = this.labelContent.node.getComponent(UITransform).contentSize;
                    // if (labelSize.height < this._contentScrollHeightMin) {
                    //     this.nodeScrollContent.getComponent(UITransform).contentSize = new Size(this._contentScrollWeight, this._contentScrollHeightMin);
                    //     this.nodeScrollContent.getChildByName("view").getComponent(UITransform).contentSize = new Size(this._contentScrollWeight, this._contentScrollHeightMin);
                    //     this.nodeScrollContent.getChildByName("view").getChildByName("content").getComponent(UITransform).contentSize = new Size(this._contentScrollWeight, this._contentScrollHeightMin);
                    // }
                }
            })
        }
    }

    sendBattleInfo (time: number) {
        UIMgr.getInstance().showWaiting();
        console.log("UILobbyMyPage send get my battle info");
        let pack = new gamehall.gamehall.CSRecordAndNotice();
        pack.Opt = 2;
        pack.StartTime = time;
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_COMNOTICE, pack);
    }

    recvBattleInfo (msg: gamehall.gamehall.SCRecordAndNotice) {
        UIMgr.getInstance().clearWaiting();
        console.log("UILobbyMyPage recv battle info:", msg);

        if (msg.Glist.length > 0) {
            this.refreshBattleInfoScroll(msg.Glist);
        }
    }

    refreshBattleInfoScroll (dataArr: gamehall.gamehall.IPlayerRecord[]) {
        this.battleContent.setPosition(0,0,0);
        this.battleContent.destroyAllChildren();
        this.scrollViewBattle.stopAutoScroll();
        this.scrollViewBattle.node.active = true;
        let itemHeight = 200;
        let count = dataArr.length;
        for (let i = 0; i < count; i++) {
            let data = dataArr[i];
            let posy = i * itemHeight;
            let item = instantiate(this.battleItem);
            item.setPosition(0, -posy);
            this.battleContent.addChild(item)
            item.active = true;

            item.getChildByName("label_gamename").getComponent(Label).string = DB_GameFree.getInstance().pool.get(data.GameFreeid).Name;
            item.getChildByName("label_num").getComponent(Label).string = data.GameDetailedLogId;
            item.getChildByName("label_bombscore").getComponent(Label).string = data.TotalIn;
            item.getChildByName("label_handscore").getComponent(Label).string = data.TotalOut;
            let date = new Date(data.Ts*1000);
            item.getChildByName("label_time").getComponent(Label).string = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
        }
        this.battleContent.getComponent(UITransform).contentSize = new Size(680, itemHeight * count);
    }


    private readCallBack(msg:message.message.SCMessageRead){

        let red = false;
        for(let i = 0;i<this.allMsg.length;i++){
            if (this.allMsg[i].Id == msg.Id){
                this.allMsg[i].State = 1;
            }
            if(this.allMsg[i].State == 0){
                //有未读的  
                red = true;
            }
        }
        if(!red){
            RedDotData.getInstance().resetRedDotByMail(MailNowLocation.Lobby_Location);
        }
    }


    private chkNotify(){

    }

    //保存所有的邮件
    private allMsg:message.message.MessageData[] = [];
    initMail(dataArr: message.message.MessageData[]) {
        this.allMsg = dataArr;
        //this.labelPageName.string = "站内信";
        this.labelPageName.string = I18nMgr.getInstance().getStringByKey("lobby.zhanneixin");
        let count = dataArr.length;
        let contentH = 500;
        for (let i = 0; i < count; i++) {
            let data = dataArr[i];

            let nodeTitleBar = instantiate(this.nodeTitleBar);
            this.titleBarNodeArr.push(nodeTitleBar);
            nodeTitleBar.active = true;
            nodeTitleBar.parent = this.nodeDrawer;
            nodeTitleBar.setPosition(this.topPos.x, this.topPos.y - this.titleBarHeight * i - this.titleBarInterval * i, this.topPos.z);
            let labelTitle = nodeTitleBar.getChildByName("lable_titlename").getComponent(Label);
            labelTitle.string = Utils.getLanguageString(data.Title);
            

            if (data.State == 0) {
                FuncExtend.warn(nodeTitleBar, 320, -20);
            }

            let btnPull = nodeTitleBar.getChildByName("btn_pull");
            btnPull.on(Button.EventType.CLICK, () => {
                let sprArrow = this.titleBarNodeArr[i].getChildByName("btn_pull").getChildByName("spr_jiantou");
                if (sprArrow.eulerAngles.z === 0) { // 收起来
                    sprArrow.setRotationFromEuler(0, 0, 180);

                    for (let j = i+1; j < count; j++) {
                        let nodeTitleBar = this.titleBarNodeArr[j];
                        let toPosY =  this.topPos.y - this.titleBarHeight * j - this.titleBarInterval * j;
                        
                        tween(nodeTitleBar).to(0.1, {position: v3(nodeTitleBar.position.x, toPosY, nodeTitleBar.position.z)})
                                            .start();
                    }

                    this.openIndex = -1;
                    this.nodeScrollContent.active = false;
                } else if (sprArrow.eulerAngles.z === 180) { // 下拉
                    sprArrow.setRotationFromEuler(0, 0, 0);
                    if (this.openIndex != -1) { //有已经打开的内容
                        this.titleBarNodeArr[this.openIndex].getChildByName("btn_pull").getChildByName("spr_jiantou").setRotationFromEuler(0, 0, 180);
                        for (let j = 0; j < count; j++) {
                            let nodeTitleBar = this.titleBarNodeArr[j];
                            let toPosY = 0;
                            if (j <= i) {
                                toPosY =  this.topPos.y - this.titleBarHeight * j - this.titleBarInterval * j;
                            } else {
                                toPosY =  this.topPos.y - this.titleBarHeight * j - this.titleBarInterval * j - contentH;
                            }
                            
                            tween(nodeTitleBar).to(0.1, {position: v3(nodeTitleBar.position.x, toPosY, nodeTitleBar.position.z)})
                                                .start();
                        }
                    } else { // 还没有打开的内容
                        for (let j = i+1; j < count; j++) {
                            let nodeTitleBar = this.titleBarNodeArr[j];
                            tween(nodeTitleBar).to(0.1, {position: v3(nodeTitleBar.position.x, nodeTitleBar.position.y - contentH, nodeTitleBar.position.z)})
                                                .start();
                        }
                    }

                    FuncExtend.clearnWarn(nodeTitleBar);

                    let pack = new message.message.CSMessageRead();
                    pack.Id = data.Id;
                    SocketMgr.send(message.message.MSGPacketID.PACKET_CS_MESSAGEREAD, pack);

                    this.openIndex = i;
                    this.scheduleOnce(()=>{
                        this.nodeScrollContent.active = true;
                    }, 0.1);
                    let posY =  this.topPos.y - this.titleBarHeight * (this.openIndex + 1) - this.titleBarInterval * (this.openIndex  + 1);
                    this.nodeScrollContent.setPosition(this.topPos.x, posY, this.topPos.z);
                    console.log("xxxxxxxxxx");
                    console.log(data);
                    console.log("xxxxxxxxxx");
                    this.labelContent.string = Utils.getLanguageString(data.Content);
                    
                    // console.log("label size:", this.labelContent.node.getComponent(UITransform).contentSize);
                    // let labelSize = this.labelContent.node.getComponent(UITransform).contentSize;
                    // if (labelSize.height < this._contentScrollHeightMin) {
                    //     this.nodeScrollContent.getComponent(UITransform).contentSize = new Size(this._contentScrollWeight, this._contentScrollHeightMin);
                    //     this.nodeScrollContent.getChildByName("view").getComponent(UITransform).contentSize = new Size(this._contentScrollWeight, this._contentScrollHeightMin);
                    //     this.nodeScrollContent.getChildByName("view").getChildByName("content").getComponent(UITransform).contentSize = new Size(this._contentScrollWeight, this._contentScrollHeightMin);
                    // }
                }
            })
        }
    }
}
