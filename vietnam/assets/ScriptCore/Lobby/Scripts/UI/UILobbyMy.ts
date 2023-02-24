import { _decorator, Toggle, Node, instantiate, UITransform, Size, Label, Button, Sprite } from 'cc';
import { RedDotData } from '../../../data/RedDotData';
import { UserData } from '../../../data/UserData';
import { EventMgr } from '../../../events/eventmgr';
import { EventName } from '../../../events/EventName';
import { PlayerState, PlayerStateMgr } from '../../../gamestate/PlayerState';
import { SocketMgr } from '../../../panda/net/SocketMgr';
import Facebook from '../../../panda/sdk/Facebook';
import Google from '../../../panda/sdk/Google';
import { ProjectConfig } from '../../../ProjectConfig';
import { FuncExtend } from '../../../panda/utils/FuncExtend';
import gamehall from '../../../protocol/gamehall.js';
import  login  from '../../../protocol/login.js';
import message from '../../../protocol/message.js';
import { UIScreen } from '../../../UIFrame/UIForm';
import { UIManager } from '../../../UIFrame/UIManager';
import { MailNowLocation } from '../gameconfig/GameConst';
import { UIMgr } from '../UIMgr';
import { UILobbyMyPage } from './UILobbyMyPage';
import { Utils } from '../../../panda/utils/Utils';
import { I18nMgr } from '../../../i18n/I18nMgr';
const { ccclass, property } = _decorator;

@ccclass('UILobbyMy')
export class UILobbyMy extends UIScreen {
    isEngross = true;

    @property(Node)
    scrollContent: Node = null;
    @property(Node)
    nodeItem: Node = null;
    @property(Node)
    btnMail: Node = null;

    private _dataMap: Map<number, gamehall.gamehall.ICommonNotice[]> = new Map();
    private _dataTypeArr: number[] = [];

    private static REQTYPE_BATTLEINFO = 0;
    private static REQTYPE_NOTICE = 1;
    private _reqType = UILobbyMy.REQTYPE_BATTLEINFO;

    onShow(...params: any) {
        this.initView();
        this.reqMyInfo();

        this.initUInfo();

        EventMgr.getInstance().addEventListener(EventName.RED_DOT_NOTIFY,this.chkNotify,this);

        this.chkNotify();
    }

    onHide(){
        EventMgr.getInstance().removeByTarget(this);
    }


    reShow(){
        EventMgr.getInstance().addEventListener(EventName.RED_DOT_NOTIFY,this.chkNotify,this);
        this.chkNotify();
    }


    private chkNotify(){
        let mailRedDot = RedDotData.getInstance().chkIsRedDotByMail(MailNowLocation.Lobby_Location);
        if(mailRedDot){
            FuncExtend.warn(this.btnMail, 24, 21);
        }else{
            FuncExtend.clearnWarn(this.btnMail);
        }
    }


    private async  initUInfo(){
        //头像
        this.node.getChildByName("node_userinfo").getChildByName("spr_headbg").getChildByName("sp").getComponent(Sprite).spriteFrame = await Utils.getHeadSpriteFrame(UserData.getInstance().getHead());
        //玩家昵称
        this.node.getChildByName("node_userinfo").getChildByName("label_name").getComponent(Label).string = UserData.getInstance().getName();
        //snId
        this.node.getChildByName("node_userinfo").getChildByName("label_acount").getComponent(Label).string = UserData.getInstance().getSnId().toString();
    }


    initView(){
        this.initBarBtnState();
    }

    onEnable() {
        EventMgr.getInstance().addEventListener(EventName.SC_MYINFO_COMNOTICE, this.recvMyInfo, this);
        EventMgr.getInstance().addEventListener(EventName.SC_MESSAGELIST, this.onGetMessageList, this);
    }

    onDisable() {
        EventMgr.getInstance().removeByTarget(this);
    }




    onBtnLoginOut() {
        console.log("退出登录");
        let pack = new login.login.CSLogout();
        pack.Sid = UserData.getInstance().getSnId();
        SocketMgr.send(login.login.LoginPacketID.PACKET_CS_LOGOUT,pack);
        PlayerStateMgr.getInstance().setPlayerState(PlayerState.LoginOut);
        if(ProjectConfig.IsJumpLogin){
            //如果当前 需要跳过 登录直接进入  大厅，则退出登录同样 需要 返回大厅，否则返回到登录界面
            let loginType = localStorage.getItem("lastlogintype");
            if(loginType == "google"){
                Google.logout();
                localStorage.setItem("lastlogintype","");
            }else if(loginType == "facebook"){
                Facebook.logout();
                localStorage.setItem("lastlogintype","");
            }
            RedDotData.getInstance().clearData();
            UIMgr.getInstance().showScreenLobby();
        }else{
            RedDotData.getInstance().clearData();
            UIMgr.getInstance().showScreenLogin();
        }
        
        
        
    }

    btnOnSet () {
        UIMgr.getInstance().showLobbySet();
    }

    initBarBtnState () {
        let bottomBar = this.node.getChildByName("UILobbyBtm");
        bottomBar.getChildByName("ToggleGroup").getChildByName("Toggle4").getComponent(Toggle).isChecked = true;
        bottomBar.getChildByName("ToggleGroup").getChildByName("Toggle4").getComponent(Toggle).interactable = false;
    }

    reqMyInfo () {
        UIMgr.getInstance().showWaiting();
        console.log("send get my info");
        let pack = new gamehall.gamehall.CSRecordAndNotice();
        pack.Opt = 0;
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_COMNOTICE, pack);
        this._reqType = UILobbyMy.REQTYPE_NOTICE;
    }

    reqMyBattleInfo () {
        UIMgr.getInstance().showWaiting();
        console.log("send get my battle info");
        let pack = new gamehall.gamehall.CSRecordAndNotice();
        pack.Opt = 1;
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_COMNOTICE, pack);
        this._reqType = UILobbyMy.REQTYPE_BATTLEINFO;
    }

    async recvMyInfo (msg: gamehall.gamehall.SCRecordAndNotice) {
        UIMgr.getInstance().clearWaiting();
        console.log("UILobbyMy recv my info:", msg);

        if (msg.OpCode != 0) {
            UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.reqDataShiBaiTxt"));
            return;
        }

        if (msg.List.length > 0) { // 后台配置显示数据
            for (let data of msg.List) {
                if (this._dataMap.get(data.Type) == null) {
                    let arr: gamehall.gamehall.ICommonNotice[] = [];
                    this._dataMap.set(data.Type, arr);
                    this._dataTypeArr.push(data.Type);
                }

                this._dataMap.get(data.Type).push(data);
            }
            this.refreshContentScroll();
        }

        if (this._reqType == UILobbyMy.REQTYPE_BATTLEINFO) {
            if (msg.GlistTs.length > 0) { // 战绩列表
                await UIManager.getInstance().openScreen("Lobby/Prefabs/UILobbyMyPage", msg.GlistTs, UILobbyMyPage.UILobbyMyPageType_BATTLE);
            } else if (msg.GlistTs.length == 0) {
                UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.zanwuzhanjiTxt"))
            }
        }
    }

    refreshContentScroll () {
        let itemHeight = 80;
        let count = this._dataTypeArr.length + 1; //战绩数据需要单独请求
        for (let i = 0; i < count; i++) {
            let posy = i * itemHeight;
            let item = instantiate(this.nodeItem);
            item.setPosition(0, -posy);
            this.scrollContent.addChild(item)
            item.active = true;

            if (i == 0) {
                //item.getChildByName("label").getComponent(Label).string = "战绩";
                item.getChildByName("label").getComponent(Label).string = I18nMgr.getInstance().getStringByKey("lobby.zhanji");
                item.on(Button.EventType.CLICK, () => {
                    this.reqMyBattleInfo();
                })
            } else {
                let data = this._dataMap.get(this._dataTypeArr[i-1])[0];
                item.getChildByName("label").getComponent(Label).string = data.TypeName;
                item.on(Button.EventType.CLICK, async () => {
                    let dataArr = this._dataMap.get(data.Type);
                    await UIManager.getInstance().openScreen("Lobby/Prefabs/UILobbyMyPage", dataArr, UILobbyMyPage.UILobbyMyPageType_CONTENT);
                })
            }
        }
        this.scrollContent.getComponent(UITransform).contentSize = new Size(680, itemHeight * count);
    }

    //请求邮件列表的消息
    doReqMailList () {
        UIMgr.getInstance().showWaiting();
        console.log("UILobbyMy send mail list");
        let pack = new message.message.CSMessageList();
        pack.ShowId = MailNowLocation.Lobby_Location;
        SocketMgr.send(message.message.MSGPacketID.PACKET_CS_MESSAGELIST, pack);
    }

    btnOnEmail () {
        this.doReqMailList();
    }

    async onGetMessageList (dataList: message.message.SCMessageList) {
        UIMgr.getInstance().clearWaiting();
        console.log("UILobbyMy recv mail list:", dataList);

        let msgList = dataList.Msgs as message.message.MessageData[];
        msgList.sort((a: message.message.MessageData, b: message.message.MessageData) => {
            if (a.State < b.State) {
                return -1;
            } else if (a.State > b.State) {
                return 1;
            } else {
                return a.Ts < b.Ts ? 1 : -1;
            }
        });

        await UIManager.getInstance().openScreen("Lobby/Prefabs/UILobbyMyPage", msgList, UILobbyMyPage.UILobbyMyPageType_MAIL);
    }
}

