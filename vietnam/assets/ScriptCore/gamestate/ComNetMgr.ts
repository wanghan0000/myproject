/**
 * 通用的网络状态管理类
 * 1：Socket连接成功。
 * 2：Socket断开连接。
 * 3：
 */

import { Socket, sys, utils } from "cc";
import { EventMgr } from "../events/eventmgr";
import { EventName, OPRC_ERROR_CODE } from "../events/EventName";
import { MD5 } from "../Lobby/Scripts/General/MD5";
import { UIMgr } from "../Lobby/Scripts/UIMgr";
import { SocketMgr } from "../panda/net/SocketMgr";
import { Utils } from "../panda/utils/Utils";
import { ProjectConfig } from "../ProjectConfig";
import login from "../protocol/login.js";
import player from "../protocol/player.js";
import { GameState } from "./GameState";
import { PlayerState, PlayerStateMgr } from "./PlayerState";




export class ComNetMgr {
    private static instance: ComNetMgr | null = null;


    public static getInstance(): ComNetMgr {
        if (this.instance == null) {
            this.instance = new ComNetMgr();
            this.instance.registerEvents();
        }
        return this.instance;
    }


    private uName: string = "";
    private uPwd: string = "";
    //登录类型
    private loginType:string = "";


    //服务器连接的ip和端口
    private connectHost: string = ProjectConfig.HOST;
    private connectPort: number = ProjectConfig.PORT;
    
    private connectForLogin: boolean = true;

    public setConnectHost(host: string) {
        this.connectHost = host;
    }

    public getConnectHost(): string {
        return this.connectHost;
    }

    public setLoginMsg(uName: string, uPwd: string,loginType:string = ""): void {
        console.log("在ComNetMgr.setLoginMsg中设置了登录用户名和密码");
        this.uName = uName;
        this.uPwd = uPwd;
        this.connectForLogin = true;
        this.loginType = "accountpwd";
        
    }

    private googleId:string;
    private googleNickName:string;
    private googleHeadUrl:string;

    //设置google账号的登录信息
    public setGoogleMsg(uName:string,nickName:string,headUrl:string){
        this.googleId = uName;
        this.googleNickName = nickName;
        this.googleHeadUrl = headUrl;
        this.loginType = "google";
    }

    private facebookId:string;
    private facebookNickName:string;
    private facebookHeadUrl:string;
    //设置faceBook的登录信息
    public setFaceBookmsg(uName:string,nickName:string,headUrl:string){
        this.facebookId = uName;
        this.facebookNickName = nickName;
        this.facebookHeadUrl = headUrl;
        this.loginType = "facebook";
    }



    private uRegisterName: string = "";
    private uRegisterPwd: string = "";

    //设置注册的用户名和密码
    public setRegisterMsg(uName: string, uPwd: string): void {
        this.uRegisterName = uName;
        this.uRegisterPwd = uPwd;
        this.connectForLogin = false;
    }

    /**
     * 当调用切换账号。或者玩家自己返回到登录界面的时候要情况这个值
     */
    public clearLoginMsg() {
        this.uName = "";
        this.uPwd = "";
    }



    //注册事件
    public registerEvents(): void {
        EventMgr.getInstance().addEventListener(EventName.SC_Auth_Ack, this.onAuthAckBack, this);
        EventMgr.getInstance().addEventListener(EventName.SC_Login, this.onLoginBack, this);
        EventMgr.getInstance().addEventListener(EventName.SC_Register, this.onRegisterBack, this);

        //获取玩家数据完成，则表示玩家真正登录成功
        EventMgr.getInstance().addEventListener(EventName.SC_PlayerData, this.onGetPlayerData.bind(this), this);

        //收到服务器踢人的消息
        EventMgr.getInstance().addEventListener(EventName.SC_Disconnect, this.onDisconnect.bind(this), this);

        //客户端断开连接
        EventMgr.getInstance().addEventListener(EventName.SC_Logout,this.onLoginOut,this);
    }


    public onLoginOut():void{
        this.doDisConnect();
    }



    public async onDisconnect(msg: login.login.SSDisconnect) {
        console.log("服务器踢人操作  连接断开");
        console.log(msg);
        //这里需要清理数据
        await UIMgr.getInstance().AlertTxtWithConfirmClose("用户被踢下线", async () => {
            //await UIMgr.getInstance().showScreenLogin();
            await UIMgr.getInstance().showScreenLobby(false);
            setTimeout(() => {
                GameState.getInstance().clearAllGameState();
            }, 500);
        }, async () => {
            await UIMgr.getInstance().showScreenLogin();
            setTimeout(() => {
                GameState.getInstance().clearAllGameState();
            }, 500);
        });

        this.doDisConnect();
    }

    public onAuthAckBack(msg: any): void {
        let mData = msg as login.login.SSPacketAuthAck;
        if (mData.Msg == "ok") {
            if (this.connectForLogin) {
                // if (!Utils.stringIsEmpty(this.uName) && !Utils.stringIsEmpty(this.uPwd)) {
                //     console.log("发送登录消息");
                    
                // }
                this.doLogin(this.uName, this.uPwd);
            }
            else {
                if (!Utils.stringIsEmpty(this.uRegisterName) && !Utils.stringIsEmpty(this.uRegisterPwd)) {
                    console.log("发送注册消息");
                    this.doRegister(this.uRegisterName, this.uRegisterPwd);
                }
            }
        }
        else {
            console.log("权限认证发生错误login.SSPackAuthAck");
        }
    }

    //登录成功。主要用于断线重连，重连完全成功 不但连接上了。而且接收到了玩家数据
    public onGetPlayerData() {
        PlayerStateMgr.getInstance().setPlayerState(PlayerState.LoginSuccess);
        //这个地方需要优化一下。需要判定是否是断线重连登录上的。
        EventMgr.getInstance().dispatchEvent(EventName.Reconnect_complete);
    }

    //登录成功，发送获取用户数据成功
    public async onLoginBack(msg: login.login.SCLogin) {
        console.log("登录成功------");
        console.log(msg);
        console.log("登录成功------");
        //这里使用errorCode进行判定
        if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_Sucess) {
            let csPlayerData = new player.player.CSPlayerData();
            csPlayerData.AccId = msg.AccId;
            csPlayerData.TimeStamp = Utils.getTimeStamp();
            csPlayerData.PlatformTag = "0";
            console.log("玩家信息 --- 请求");
            console.log(csPlayerData);
            console.log("玩家信息 --- 请求");
            SocketMgr.send(player.player.PlayerPacketID.PACKET_CS_PLAYERDATA, csPlayerData);
            return;
        }
        this.doDisConnect();
        await UIMgr.getInstance().clearWaiting();
        let str = "密码错误"
        if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_Error) {
            str = "登录失败";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_LoginFailed) {
            str = "登录失败";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_LoginSignErr) {
            str = "签名错误";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_LoginOtherPlace) {
            str = "账号在其他地方登录";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_LoginPassError) {
            str = "密码错误"
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_Login_CreateAccSuccess) {

        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_Login_CreateAccError) {
            str = "创建账号失败";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_Login_NameLang) {
            str = "名字太长";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_Login_NameSame) {
            str = "名字已经被使用";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_Login_NameError) {
            str = "名字中有非法字符";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_Login_CreateFailed) {
            str = "创建角色失败";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_AccountBeFreeze) {
            str = "账号被冻结";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_YourResVerIsLow) {
            str = "版本过低";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_YourAppVerIsLow) {
            str = "版本过低";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_SceneServerMaintain) {
            str = "服务器维护中";
        } else if (msg.OpRetCode == OPRC_ERROR_CODE.OPRC_TelError) {
            str = "手机号错误";
        }
        await UIMgr.getInstance().AlertTxt(str);
    }



    /**
     * 确定：
     * 当前是不是客户端主动断开连接。如果是，则断开后不处理，如果不是则执行 重新连接
     * 当前是不是正在断线重连，如果是断线重连，则不处理错误，发生错误后
     * 
     */

    public doSocketConnect(): void {
        PlayerStateMgr.getInstance().setPlayerState(PlayerState.Connecting);
        console.log("执行连接的端口---", this.connectHost, "=======");
        SocketMgr.connect(this.connectHost,
            this.connectPort,
            this.onSocketOpen.bind(this),
            this.onSocketClose.bind(this),
            this.onSocketError.bind(this),
            this.onSocketMsg.bind(this)
        )
    }
    public doReconnect(): void {
        PlayerStateMgr.getInstance().setPlayerState(PlayerState.Reconnecting);
        SocketMgr.connect(this.connectHost,
            this.connectPort,
            this.onSocketOpen.bind(this),
            this.onSocketClose.bind(this),
            this.onSocketError.bind(this),
            this.onSocketMsg.bind(this));
    }

    //断开连接  主动断开
    public doDisConnect(): void {
        PlayerStateMgr.getInstance().setPlayerState(PlayerState.Disconnect);
        SocketMgr.close();
        //这里要清除所以后的游戏列表，并且要清空所有的bundle
    }

    /*
    socket连接打开
    根据当前的游戏状态，判定是否是断线重连。如果是登录连接则不用处理
    */
    public onSocketOpen(): void {
        PlayerStateMgr.getInstance().setPlayerState(PlayerState.Connected);
        EventMgr.getInstance().dispatchEvent(EventName.Socket_connect_open);
        console.log("ComNetMgr onScoket Open");
    }
    
    //网络连接断开。返回到登录界面
    private async dealSocketClose() {
        await UIMgr.getInstance().clearWaiting();
        await UIMgr.getInstance().showScreenLogin();
        await UIMgr.getInstance().clearWaiting();
    }
    //Socket连接断开   根据游戏状态判定是否需要处理
    public onSocketClose(): void {
        console.log("ComNetMgr onSocket Close");
        if (PlayerStateMgr.getInstance().getPlayerState() == PlayerState.Disconnect) {
            //客户端主动断开连接 不处理
            PlayerStateMgr.getInstance().setPlayerState(PlayerState.Init);
        } else if (PlayerStateMgr.getInstance().getPlayerState() == PlayerState.Connecting) {
            //如果上个状态是在登录界面连接socket 不处理 让error处理
        } else if (PlayerStateMgr.getInstance().getPlayerState() == PlayerState.Reconnecting) {
            //重新连接状态  也不处理。客户端会自动再次连接
            PlayerStateMgr.getInstance().setPlayerState(PlayerState.ReconnectFailed);
        } else if (PlayerStateMgr.getInstance().getPlayerState() == PlayerState.LoginSuccess) {
            //当前已经登录成功状态
            UIMgr.getInstance().showUIReconnect();
        } else if (PlayerStateMgr.getInstance().getPlayerState() == PlayerState.Logining) {
            //正在登录的时候 socket连接断开了 则弹出 网络发生错误，请重试
            UIMgr.getInstance().AlertTxtWithConfirmClose("网络连接发生错误,请重试", () => {
                UIMgr.getInstance().clearWaiting();
                PlayerStateMgr.getInstance().setPlayerState(PlayerState.Init);
            }, () => {
                UIMgr.getInstance().clearWaiting();
                PlayerStateMgr.getInstance().setPlayerState(PlayerState.Init);
            });
        }
        EventMgr.getInstance().dispatchEvent(EventName.Socket_Connect_close);
    }


    /**
     * Socket连接的消息 先Error 后Close消息
     */


    //socket连接发生错误  对于网络连接发生错误来说。不管是确定还是取消都要
    public onSocketError(): void {
        console.log("ComNetMgr onSocket Error");

        if (PlayerStateMgr.getInstance().getPlayerState() == PlayerState.Connecting) {
            PlayerStateMgr.getInstance().setPlayerState(PlayerState.ConnectFailed);
            UIMgr.getInstance().AlertTxtWithConfirmClose("网络连接发生错误,请重试", () => {
                UIMgr.getInstance().clearWaiting();
            }, () => {
                UIMgr.getInstance().clearWaiting();
            });
        } else if (PlayerStateMgr.getInstance().getPlayerState() == PlayerState.Reconnecting) {
            //断线重连连接失败了。不处理 客户端3s后会继续连接
            EventMgr.getInstance().dispatchEvent(EventName.Socket_connect_Error);
        } else if (PlayerStateMgr.getInstance().getPlayerState() == PlayerState.LoginSuccess) {
            //已经连接成功的情况下发现网络连接断开了。
            UIMgr.getInstance().showUIReconnect();
        }
        //else if(PlayerStateMgr.getInstance().getPlayerState() == )

        //EventMgr.getInstance().dispatchEvent(EventName.Socket_connect_Error);
    }
    //这里处理Socket连接中的通用命令  看业务需求。具体的业务各自处理，这里处理通用特殊情况。
    public onSocketMsg(msgID: number, msg: any): void {

    }

    /**
     * 发送登录消息
     * todo dev
     */
    public doLogin(userName: string, pwd: string, params?: string): void {
        PlayerStateMgr.getInstance().setPlayerState(PlayerState.Logining);
        if(this.loginType == "google"){
            let loginData = new login.login.CSLogin();
            let ts = Utils.getTimeStamp()


            loginData.LoginType = 6;

            loginData.PlatformTag = "test.win88.yy_android";
            loginData.Package = "test.win88.yy";
            loginData.Platform = "";
            loginData.Channel = "";
            loginData.Promoter = "";

            loginData.Username = this.googleId;
            loginData.Name = this.googleNickName;
            loginData.HeadUrl = this.googleHeadUrl;
    
            //登录需要二次加密
            let pwd1 = MD5.MD5(this.googleId + ProjectConfig.AppId);
            loginData.Password = MD5.MD5(pwd1 + ProjectConfig.AppId + ts);
    
            loginData.TimeStamp = ts;
            loginData.Params = params || "1";
            loginData.Sign = MD5.MD5(loginData.Username + loginData.Password + loginData.TimeStamp + loginData.Params + ProjectConfig.AppId);
    

            localStorage.setItem("lastlogintype","google");


            let platform = "1";
            if (sys.os == sys.OS.ANDROID) {
    
            } else if (sys.os == sys.OS.IOS) {
    
            }
            loginData.Platform = platform;
            console.log("发送给服务器的登录消息====google登录");
            console.log(loginData);
            console.log("发送给服务器的登录消息====google登录");
            //其他字段暂时不处理
            SocketMgr.send(login.login.LoginPacketID.PACKET_CS_LOGIN, loginData);

        }else if(this.loginType == "facebook"){
            let loginData = new login.login.CSLogin();
            let ts = Utils.getTimeStamp()
            loginData.LoginType = 6;

            localStorage.setItem("lastlogintype","facebook");

            loginData.PlatformTag = "test.win88.yy_android";
            loginData.Package = "test.win88.yy";
            loginData.Platform = "";
            loginData.Channel = "";
            loginData.Promoter = "";

            loginData.Username = this.facebookId;
            loginData.Name = this.facebookNickName;
            loginData.HeadUrl = this.facebookHeadUrl;
    
            //登录需要二次加密
            let pwd1 = MD5.MD5(this.facebookId + ProjectConfig.AppId);
            loginData.Password = MD5.MD5(pwd1 + ProjectConfig.AppId + ts);
    
            loginData.TimeStamp = ts;
            loginData.Params = params || "1";
            loginData.Sign = MD5.MD5(loginData.Username + loginData.Password + loginData.TimeStamp + loginData.Params + ProjectConfig.AppId);
    


            let platform = "1";
            if (sys.os == sys.OS.ANDROID) {
    
            } else if (sys.os == sys.OS.IOS) {
    
            }
            loginData.Platform = platform;
            console.log("发送给服务器的登录消息====facebook登录");
            console.log(loginData);
            console.log("发送给服务器的登录消息====facebook登录");
            //其他字段暂时不处理
            SocketMgr.send(login.login.LoginPacketID.PACKET_CS_LOGIN, loginData);
        }else{
            let loginData = new login.login.CSLogin();
            let ts = Utils.getTimeStamp();
            loginData.Username = userName;
    
            //登录需要二次加密
            let pwd1 = MD5.MD5(pwd + ProjectConfig.AppId);
            loginData.Password = MD5.MD5(pwd1 + ProjectConfig.AppId + ts);
    
            
            localStorage.setItem("lastlogintype","accountpwd");
            localStorage.setItem("accound_id",userName);
            localStorage.setItem("accound_pwd",pwd);
            loginData.TimeStamp = ts;
            loginData.Params = params || "1";
            loginData.Sign = MD5.MD5(loginData.Username + loginData.Password + loginData.TimeStamp + loginData.Params + ProjectConfig.AppId);
    
    
            loginData.LoginType = 1;
    
            loginData.PlatformTag = "test.win88.yy_android";
            loginData.Package = "test.win88.yy";
            loginData.Platform = "";
    
            loginData.Channel = "";
            loginData.Promoter = "";
    
            let platform = "1";
            if (sys.os == sys.OS.ANDROID) {
    
            } else if (sys.os == sys.OS.IOS) {
    
            }
            loginData.Platform = platform;
            console.log("发送给服务器的登录消息");
            console.log(loginData);
            console.log("发送给服务器的登录消息");
            //其他字段暂时不处理
            SocketMgr.send(login.login.LoginPacketID.PACKET_CS_LOGIN, loginData);
        }
        
    }


    /*
    注册回调
     */
    public async onRegisterBack(msg: player.player.SCRegister) {
        if (msg.OpRetCode == 0) {
            //这里只处理成功的情况不成功按照通用错误进行处理
            // let loginData:any={};
            // loginData.uName = this.registerUserName!.string;
            // loginData.uPwd = this.registerUserPwd!.string;
            //alocalStorge.setItem("loginMsg",JSON.stringify(loginData));
            this.connectForLogin = true;
            this.setLoginMsg(this.uRegisterName, this.uRegisterPwd);
            this.doLogin(this.uRegisterName, this.uRegisterPwd);
        } else {
            await UIMgr.getInstance().clearWaiting();
            await UIMgr.getInstance().AlertTxt("注册失败");
            this.doDisConnect();
        }
    }

    /**
     * 发送注册消息
     */
    public doRegister(userName: string, pwd: string): void {
        let pack = new player.player.CSRegister();
        pack.Username = userName;
        //注册消息进行一次md5
        pack.TelPassword = MD5.MD5(`${pwd}${ProjectConfig.AppId}`);
        //plat platform package 应该从Android底层开始获取 这里暂时这么写。
        pack.Package = "test.win88.yy";
        pack.Platform = "1";
        pack.PlatformTag = "test.win88.yy_android";
        //标识 用户名和密码注册
        pack.RegistType = 1;
        console.log("注册的消息发送=======");
        console.log(pack);
        console.log("注册的消息发送=======");
        SocketMgr.send(player.player.PlayerPacketID.PACKET_CS_REGISTER, pack);
    }


}

