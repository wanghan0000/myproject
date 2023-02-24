
import { _decorator, Component, Node, EditBox, Toggle, director, sys, RichText, Label, Sprite, js, native, WebView } from 'cc';

import { EventMgr } from '../../../events/eventmgr';
import { EventName } from '../../../events/EventName';
import { ComNetMgr } from '../../../gamestate/ComNetMgr';
import Facebook from '../../../panda/sdk/Facebook';
import Google from '../../../panda/sdk/Google';
import { Utils } from '../../../panda/utils/Utils';
import testproto from '../../../protocol/testproto.js';

import { UIScreen } from '../../../UIFrame/UIForm';
import { UIRoot } from '../../../UIFrame/UIRoot';
import { UIMgr } from '../UIMgr';
const { ccclass, property } = _decorator;

@ccclass('UILogin')
export class UILogin extends UIScreen {


    isOnleyEngross = true;
    //登录的用户名输入框
    @property(EditBox)
    public loginUserName: EditBox | null = null;

    @property(EditBox)
    public loginUserPwd: EditBox | null = null;

    @property(Toggle)
    public loginRember: Toggle | null = null;

    @property(EditBox)
    public registerUserName: EditBox | null = null;

    @property(EditBox)
    public registerUserPwd: EditBox | null = null;

    @property(EditBox)
    public registerRepectPwd: EditBox | null = null;

    @property(EditBox)
    public connectHost: EditBox | null = null;

    @property(EditBox)
    public validCode: EditBox | null = null;

    isEngross = true;
    //login节点
    private loginNode: Node | null = null;
    //register节点
    private registerNode: Node | null = null;
    //topTx 节点
    private topTXNode: Node | null = null;

    private spriteNode1: Node | null = null;

    private spriteNode2: Node | null = null;

    start() {
        if (sys.isNative) {
            //注册java回调js 监听
            this.registerAllScriptEvent()
        }
    }

    onLoad() {
        this.loginNode = this.node.getChildByName("login");
        this.registerNode = this.node.getChildByName("register");
        this.topTXNode = this.node.getChildByName("TopTX");

        this.spriteNode1 = this.node.getChildByName("Sprite");
        this.spriteNode2 = this.node.getChildByName("sprite2");

        //播放背景音乐
        //AudioMgr.getInstance().playMusic(LobbyAudioCfg.bg);
    }

    public async onShow(params: any) {
        UIRoot.getInstance().RotationPortrait();
        this.addEventListeners();
        this.initLoginData();

        let str = Utils.cvtDateTimeToYYYMMDD(new Date(Date.now()));
        console.log("当前的时间---------");
        console.log(str);
        console.log("当前的时间---------");

        // let richTxt = this.node.getChildByName("richbox").getComponent(RichText);
        // richTxt.string = `<color=#00ff00>Rich</color><color=#0fffff>Text</color>\n<color=#00ff00>Rich</color><color=#0fffff>Text</color>`;

        // let lbl = this.node.getChildByName("lbl").getComponent(Label);
        // lbl.string = "aaaaaaaaaa\nbbbbbbbb";

        // let aa:number = 325000000;
        // let result = Utils.cvtNumberToThousand(aa);
        // console.log(result);

        // let aa:number = 149.099;
        // console.log("toFixed=-=-========");
        // console.log((Math.floor(aa*100)/100).toFixed(2));
        // console.log("toFixed=-=-========");

        // let testSp = this.node.getChildByName("testsp").getComponent(Sprite);
        // let spFrame = await Utils.loadRemoteSpriteFrameWithExt("http://download.weijian21.top/img/4d2a0c57c4c40f356886e24997a78ccf.jpeg");
        // console.log("========");
        // console.log(spFrame);
        // console.log("========");
        // testSp.spriteFrame = spFrame;
    }

    public registerAllScriptEvent() {
        // google登录成功回调
        native.jsbBridgeWrapper.addNativeEventListener("loginGoogleCall", (datas: string) => {
            this.loginGoogleCall(datas);
        });
        // google登出成功回调
        native.jsbBridgeWrapper.addNativeEventListener("logoutGoogleCall", (datas: string) => {
            this.logoutGoogleCall(datas);
        });

        // facebook登录成功回调
        native.jsbBridgeWrapper.addNativeEventListener("loginFaceBookCall", (datas: string) => {
            this.loginFaceBookCall(datas);
        });
        // facebook登出成功回调
        native.jsbBridgeWrapper.addNativeEventListener("logoutFaceBookCall", (datas: string) => {
            this.logoutFaceBookCall(datas);
        });
    }

    private initLoginData() {
        let loginMsg = localStorage.getItem("loginMsg");
        if (!Utils.stringIsEmpty(loginMsg!)) {
            let loginData = JSON.parse(loginMsg!);
            this.loginUserName!.string = loginData.uName;
            this.loginUserPwd!.string = loginData.uPwd;
        }

        let hostMsg = localStorage.getItem("test_login_host");
        if (hostMsg != null && !Utils.stringIsEmpty(hostMsg)) {
            this.connectHost!.getComponent(EditBox)!.string = hostMsg;
        } else {
            this.connectHost!.getComponent(EditBox)!.string = ComNetMgr.getInstance().getConnectHost();
        }
    }


    public onHide() {
        this.removeEventListeners();
    }





    public addEventListeners(): void {
        EventMgr.getInstance().addEventListener(EventName.SC_Login, this.onLoginSucess.bind(this), this);
        EventMgr.getInstance().addEventListener(EventName.SC_PlayerData, this.onGetUserData.bind(this), this);
    }




    public removeEventListeners(): void {
        EventMgr.getInstance().removeByTarget(this);
    }


    //点击注册登录标签
    public onLoginTabClick(event: Event, customEventData: string) {
        this.loginNode!.active = true;
        this.registerNode!.active = false;
    }

    //点击注册标签页
    public onRegisterTabClick(event: Event, customEventData: string) {
        this.loginNode!.active = false;
        this.registerNode!.active = true;
    }


    //点击开始登录
    public onBtnLogin(event: Event, customData: string) {


        //UIMgr.getInstance().tipTxt("你好测试你好" + Math.random() * 100);
        // UIMgr.getInstance().startBlockAllInput(()=>{
        //     console.log("屏蔽了哥们 现在去取消");
        //     UIMgr.getInstance().stopBlockAllInput();
        // });

        // return;


        let uName: string = this.loginUserName!.string;
        let uPwd: string = this.loginUserPwd!.string;
        if (Utils.stringIsEmpty(uName)) {
            console.log("用户名不能为空");
            return;
        }
        if (Utils.stringIsEmpty(uPwd)) {
            console.log("密码不能为空");
            return;
        }

        let enterHost = this.connectHost!.getComponent(EditBox)!.string;
        localStorage.setItem("test_login_host",enterHost);
        ComNetMgr.getInstance().setConnectHost(enterHost);
        if (this.loginRember?.isChecked){
            let loginData:any={};
            loginData.uName = uName;
            loginData.uPwd = uPwd;
            localStorage.setItem("loginMsg", JSON.stringify(loginData));
        }
        //UIMgr.getInstance().AlertTxtWithConfirmClose("你好");
        UIMgr.getInstance().showWaiting();
        ComNetMgr.getInstance().setLoginMsg(uName, uPwd);
        //显示loading框，屏蔽玩家操作，执行socket连接。当socket连接成功后。执行登录
        ComNetMgr.getInstance().doSocketConnect();
    }


    //登录成功消息
    public async onLoginSucess(msg: any) {
        console.log(msg);
    }

    //获取到用户数据
    public async onGetUserData(msg: any) {
        console.log("获取到用户数据，玩家可以进入大厅了");
        await UIMgr.getInstance().clearWaiting();
        await UIMgr.getInstance().showScreenLobby();
    }



    //点击facebook开始登录
    public onBtnFaceBook(event: Event, customEventData: string) {
        console.log("点击facebook开始登录");
        Facebook.login()
    }

    /*
    *退出facebook 暂时写在这后面移植到退出账号处
    */
    public gotoFaceBookLogout() {
        console.log("facebook登出")
        Facebook.login()
    }

    //点击google开始登录
    public onBtnGoogle(event: Event, customEventData: string) {
        console.log("点击google开始登录");
        Google.login()
    }

    /*
    *退出google 暂时写在这后面移植到退出账号处
    */
    public logoutClick() {
        console.log("google登出")
        Google.logout()
    }

    //点击注册
    public async onBtnRegister(event: Event, customEventData: string) {
        console.log("点击注册");
        let userName = this.registerUserName!.string;
        let pwd1 = this.registerUserPwd!.string;
        let pwd2 = this.registerRepectPwd!.string;
        //这里优先判定两个密码是否一致  todo dev
        if (pwd1 !== pwd2) {
            await UIMgr.getInstance().AlertTxt("两次输入密码不一致");
            return;
        }
        let enterHost = this.connectHost!.getComponent(EditBox)!.string;
        localStorage.setItem("test_login_host",enterHost);
        ComNetMgr.getInstance().setConnectHost(enterHost);
        await UIMgr.getInstance().showWaiting();
        ComNetMgr.getInstance().setRegisterMsg(userName, pwd1);
        ComNetMgr.getInstance().doSocketConnect();
    }


    public onBtnRefreshValidCode(event: Event, customData: string) {
        console.log("点击刷新验证码");
    }


    public onBtnCheck() {
        UIMgr.getInstance().showUIUpdate();
    }


    //测试protobuf
    public doTestProto() {
        let test = new testproto.testproto.Test1();
        test.Id = 100;
        test.Count = 200;
        console.log("对象结构");
        console.log(test);
        console.log("对象结构");
        let databuff = testproto.testproto.Test1.encode(test).finish();
        console.log("序列化的buff");
        console.log(databuff);
        console.log("序列化的buff");
        let backTest = testproto.testproto.Test1.decode(databuff);
        console.log("重新反序列化回来");
        let typestr = typeof (backTest.Count);



        // backTest.Count =  backTest.Count.toNumber();
        console.log(backTest);
        backTest.Count = backTest.Count + backTest.Count;
        backTest.Count = backTest.Count + 1;
        backTest.Id = backTest.Id + 1;
        console.log("执行+1操作");
        console.log(backTest);
        console.log("执行+1操作");
    }

    /*
    *谷歌登录成功回调
    *参数： id, token, Email, userName ,firstName, lastName
    {
        "result":"22",
        "firstName":"hacks",
        "lastName":"Tom",
        "Email":"hackstom804@gmail.com",
        "id":"101768161262540511635",
        "userName":"hacks Tom",
        "info":"google info success",
        "token":"eyJhbGciOiJSUzI1NiIsImtpZCI6ImNhYWJmNjkwODE5MTYxNmE5MDhhMTM4OTIyMGE5NzViM2MwZmJjYTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxNzA1ODYzNTg2NDUtMjA0cG5wYTYwZHVxbmsyYmN1aGNhM3VwdXFucTg5cG8uYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIxNzA1ODYzNTg2NDUtc

    */
    public async loginGoogleCall(data: string) {
        let jsonData = JSON.parse(data);
        console.log("google的登录回调");
        console.log(data);
        console.log("google的登录回调");
        let result = jsonData["result"].toString();
        if (result == "22") {
            let headUrl = "";
            if (jsonData["avatar"] != null && jsonData["avatar"] != undefined) {
                headUrl = jsonData["avatar"];
            }
            ComNetMgr.getInstance().setGoogleMsg("google_" + jsonData["id"], jsonData["userName"], headUrl);
            await UIMgr.getInstance().showWaiting();
            ComNetMgr.getInstance().doSocketConnect();
        } else if (result == "21") {
            UIMgr.getInstance().AlertTxt("登录失败");
        }

    }

    /*
    *谷歌退出登录回调
    */
    public logoutGoogleCall(data: string) {
        let datas = JSON.stringify(data)
        console.log("谷歌退出登录回调", datas)
        UIMgr.getInstance().AlertTxt("退出登录成功");
    }

    /*
    *facebook退出登录回调
    {
        "result":"22",
        "Email":"bolest855@gmail.com",
        "gender":"",
        "id":"111094305039350",
        "avatar":"https:\/\/graph.facebook.com\/111094305039350\/picture?type=large",
        "userName":"Len",
        "picture":"https:\/\/platform-lookaside.fbsbx.com\/platform\/profilepic\/?asid=111094305039350&gaming_photo_type=unified_picture&ext=1665801367&hash=AeTRLQr4B9R0KQxmMBQ","info":"facebook info success"}
    */
    public async loginFaceBookCall(data: string) {
        let jsonData = JSON.parse(data)
        console.log("facebook的登录回调");
        console.log(data)
        console.log("facebook的登录回调");
        let result = jsonData["result"].toString();
        if (result == "22") {
            //22 标识授权成功 可以执行登录
            let headUrl = "";
            if (jsonData["avatar"] != null && jsonData["avatar"] != undefined) {
                headUrl = jsonData["avatar"];
            }
            ComNetMgr.getInstance().setFaceBookmsg("facebook_" + jsonData["id"], jsonData["userName"], headUrl)
            await UIMgr.getInstance().showWaiting();
            ComNetMgr.getInstance().doSocketConnect();
        } else if (result == "21") {
            UIMgr.getInstance().AlertTxt("授权失败");
        } else if (result == "23") {
            UIMgr.getInstance().AlertTxt("取消登录");
        }

    }
    /*
    *facebook退出登录回调
    */
    public logoutFaceBookCall(data: string) {
        let datas = JSON.stringify(data)
        console.log("facebook退出回调", datas)
        UIMgr.getInstance().AlertTxt("退出登录成功");
    }
}
