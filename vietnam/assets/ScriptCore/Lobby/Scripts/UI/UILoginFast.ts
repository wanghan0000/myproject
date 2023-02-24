import { _decorator, Component, Node, native, sys, EditBox, Toggle } from 'cc';
import { ComNetMgr } from '../../../gamestate/ComNetMgr';
import Facebook from '../../../panda/sdk/Facebook';
import Google from '../../../panda/sdk/Google';
import { Utils } from '../../../panda/utils/Utils';
import { ProjectConfig } from '../../../ProjectConfig';
import { ModalOpacity } from '../../../UIFrame/config/SysDefine';
import { ModalType } from '../../../UIFrame/Struct';
import { UIWindow } from '../../../UIFrame/UIForm';
import { UIMgr } from '../UIMgr';
const { ccclass, property } = _decorator;

@ccclass('UILoginFast')
export class UILoginFast extends UIWindow {

    //点击屏蔽点关闭
    modalType = new ModalType(ModalOpacity.OpacityHigh,true);

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


    //login节点
    private loginNode: Node | null = null;
    //register节点
    private registerNode: Node | null = null;
    //topTx 节点
    private topTXNode: Node | null = null;

    private spriteNode1: Node | null = null;

    private spriteNode2: Node | null = null;


    start() {

    }

    update(deltaTime: number) {
        
    }


    onShow(){
        this.loginNode = this.node.getChildByName("login");
        this.registerNode = this.node.getChildByName("register");
        this.topTXNode = this.node.getChildByName("TopTX");

        this.spriteNode1 = this.node.getChildByName("Sprite");
        this.spriteNode2 = this.node.getChildByName("sprite2");

        this.node.getChildByName("login").active = ProjectConfig.isDebug;


        if(ProjectConfig.isDebug){
            let hostMsg = localStorage.getItem("test_login_host");
            if (hostMsg != null && !Utils.stringIsEmpty(hostMsg)) {
                this.connectHost!.getComponent(EditBox)!.string = hostMsg;
            } else {
                this.connectHost!.getComponent(EditBox)!.string = ProjectConfig.HOST;
            }

            let userName = localStorage.getItem("accound_id");
            let pwd = localStorage.getItem("accound_pwd");
            // if(userName != null && userName != undefined || userName != ""){
            //     userName = "test001";
            // }
            // if(pwd != null || pwd != undefined || pwd != ""){
            //     pwd = "123456";
            // }
            this.loginUserName.string = userName;
            this.loginUserPwd.string = pwd;
    }

    }


    //使用google账号登录
    onBtnLoginGoogle(){
        // if(!this.chkVPN()){
        //     UIMgr.getInstance().AlertTxt("请检查网络连接");
        //     this.closeSelf();
        //     return;
        // }
        // console.log(this.chkVPN(),"====google=====");
        // console.log("走到这里了");
        Google.login();
        UIMgr.getInstance().showWaiting();
        this.scheduleOnce(()=>{
            this.closeSelf();
        })
    }

    //使用facebook账号进行登录
    onBtnFaceBook(){
        
        // if(!this.chkVPN()){
        //     UIMgr.getInstance().AlertTxt("请检查网络连接");
        //     this.closeSelf();
        //     return;
        // }
        // console.log(this.chkVPN(),"=====facebook====");
        // console.log("走到这里了");
        Facebook.login();
        UIMgr.getInstance().showWaiting();
        this.scheduleOnce(()=>{
            
            this.closeSelf();
        })
    }





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

        if(ProjectConfig.isDebug){
            let enterHost = this.connectHost!.getComponent(EditBox)!.string;
            localStorage.setItem("test_login_host",enterHost);
            ComNetMgr.getInstance().setConnectHost(enterHost);
            if (this.loginRember?.isChecked){
                let loginData:any={};
                loginData.uName = uName;
                loginData.uPwd = uPwd;
                localStorage.setItem("loginMsg", JSON.stringify(loginData));
            }    
        }
        
        //UIMgr.getInstance().AlertTxtWithConfirmClose("你好");
        UIMgr.getInstance().showWaiting();
        ComNetMgr.getInstance().setLoginMsg(uName, uPwd);
        //显示loading框，屏蔽玩家操作，执行socket连接。当socket连接成功后。执行登录
        ComNetMgr.getInstance().doSocketConnect();
        this.scheduleOnce(()=>{
            this.closeSelf();
        });
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
        if(ProjectConfig.isDebug){
            let enterHost = this.connectHost!.getComponent(EditBox)!.string;
            localStorage.setItem("test_login_host",enterHost);
            ComNetMgr.getInstance().setConnectHost(enterHost);

            if (this.loginRember?.isChecked){
                let loginData:any={};
                loginData.uName = userName;
                loginData.uPwd = pwd1;
                localStorage.setItem("loginMsg", JSON.stringify(loginData));
            }    
        }

        await UIMgr.getInstance().showWaiting();
        ComNetMgr.getInstance().setRegisterMsg(userName, pwd1);
        ComNetMgr.getInstance().doSocketConnect();
        this.scheduleOnce(()=>{
            this.closeSelf();
        });
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
    

    public chkVPN():boolean{
        let xhr:XMLHttpRequest = new XMLHttpRequest();
        //xhr.setRequestHeader("Content-type", "application/json");
        //xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        //xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
        //xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        //xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
       try{
            //let url = "https://www.google.com/";
            let url = "https://www.baidu.com/";
            xhr.open("GET",url);
            xhr.send();

            if (xhr.readyState == 4 && xhr.status >=200 && xhr.status <400){
                return true;
            }else{
                return false;
            }
       }
       catch{
        return false;
       }
        
    }
}

