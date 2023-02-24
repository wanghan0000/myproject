import { _decorator, Component, ProgressBar, Label, director, game, sp, AudioSource, macro, Asset, sys, Node, v3, Tween, tween, Vec3 } from 'cc';
import { ResMgr, ResType } from '../ScriptCore/UIFrame/ResMgr';
import { reslist } from '../ScriptCore/reslist';
import { HotUpdate, HotUpdateEventName } from '../ScriptCore/hotupdate/HotUpdate';
import { ProjectConfig } from '../ScriptCore/ProjectConfig';


import {HTTPUtils} from "../ScriptCore/panda/http/HTTPUtils"
import { I18nMgr } from '../ScriptCore/i18n/I18nMgr';
import * as i18n from 'db://i18n/LanguageData';
import { EventMgr } from '../ScriptCore/events/eventmgr';
import { EventName } from '../ScriptCore/events/EventName';
import { Utils } from '../ScriptCore/panda/utils/Utils';
const { ccclass, property } = _decorator;



@ccclass('Launch')
export class Launch extends Component {

    update(deltaTime: number) {

    }

    //加载进度条
    @property(ProgressBar)
    public progressBar: ProgressBar | null = null;


    //加载的资源描述
    @property(Label)
    public lblTxt: Label | null = null;

    @property(sp.Skeleton)
    public spinAni:sp.Skeleton = null;



    //热更新对应的节点引用

    @property(Asset)
    manifestUrl:Asset | null = null;

    //byte的进度
    @property(ProgressBar)
    byteProgress: ProgressBar = null!;

    @property(Label)
    info:Label = null;


    //更新提示的弹框内容
    private udpateTips:Node = null;

    start() {
        //禁止多点触摸
        macro.ENABLE_MULTI_TOUCH = false;
        this.progressBar!.progress = 0;
        //热更新的进度也不执行
        this.byteProgress.progress = 0;
        this.lblTxt!.string = `加载中...0/100`;
        this.info.string = `更新中...0/100`;
        this.node.getChildByName("spalsh").active = true;
        this.node.getChildByName("spalsh").getChildByName("ani").active = false;

        
        this.node.getChildByName("conteng").active = false;
        this.node.getChildByName("hotupdate").active = false;

        this.udpateTips = this.node.getChildByName("updatetips");

        //这里本来该是 false 的 当前仅仅做测试用
        this.udpateTips.active = false;

        //this.getUpdateTips("1.0.0");
        

        this.startAni();
        this.initLng();
    }

    private initLng(){
        let lngKey = Utils.getLocalStorageLng();
        i18n.init(lngKey);
        i18n.updateSceneRenderers();
        EventMgr.getInstance().dispatchEvent(EventName.I18N_CHANGED_NOTIFY);
    }


    private curAnimation = "";
    ontestSpine():void{
        let spine = this.node.getChildByName("testspine").getComponent(sp.Skeleton);
        spine.setCompleteListener(null);
        spine.setCompleteListener(()=>{
            console.log("播放完成了");
        })
        console.log(this.curAnimation,"xxxx");
        if (this.curAnimation == "rc1"){
            spine.setAnimation(0,"rc2",false);
            console.log("rc22222222-----------");
            this.curAnimation = "rc2";
        }else if(this.curAnimation == "rc2"){
            spine.setAnimation(0,"idle",false);
            this.curAnimation = "idle";
            console.log("idleidle-----------");
        }else if(this.curAnimation == "idle"){
            spine.setAnimation(0,"cc",false);
            this.curAnimation = "cc";
            console.log("ccc-----------");
        }else if(this.curAnimation == "cc"){
            spine.setAnimation(0,"rc1",false);
            this.curAnimation = "rc1";
            console.log("rc1111-----------");
        }else {
            spine.setAnimation(0,"rc1",false);
            this.curAnimation = "rc1";
            console.log("rc1111111-----------");
        }
    }



    private startAni(){
        this.scheduleOnce(()=>{
            this.node.getChildByName("spalsh").getChildByName("ani").active = true;
            this.spinAni.setAnimation(0,"logo",true);
            this.spinAni.setCompleteListener(()=>{
                this.node.getChildByName("spalsh").active = false;

                //检查热更新操作
                this.startCheckUpdate();

            });
        },0.3);
        
        

        // this.spinAni.node.getComponent(AudioSource).loop = false;
        // this.spinAni.node.getComponent(AudioSource).play();
    }




    //开始加载资源
    private async startLoad() {
        this.node.getChildByName("hotupdate").active = false;
        this.node.getChildByName("conteng").active = true;
        let list = reslist
        await ResMgr.getInstance().preloadBundleOnly("Lobby");
        let map: Map<ResType, boolean> = new Map<ResType, boolean>(
            [
                [ResType.ResType_Prefab, true],
                [ResType.ResType_Material, true],
                [ResType.ResType_AudioClip, true],
                [ResType.ResType_SpriteAtlas, true],
                [ResType.ResType_SpriteFrame, true],
            ]
        );
        return await ResMgr.getInstance().preLoad(list, this.updateProgress.bind(this), this.onResLoadComplete.bind(this), map);
    }


    public updateProgress(progress: number) {
        this.progressBar!.progress = progress;
        let progressVal = Math.round(progress * 100);
        if (this.lblTxt != null) {
            //this.lblTxt.string = `加载中...${progressVal}/100`;
            this.lblTxt.string = I18nMgr.getInstance().getFormatStringByKey("main.jiazaizhongtxt",progressVal);
        }
    }

    //加载完成回调
    public onResLoadComplete() {
        director.loadScene("Main", (err, scene) => {
            if (err != null) {
                console.log(err);
            }
        });
    }


    /**
     * 分割线  ===== 热更新的相应操作 =======
     */




    private hotUpdate:HotUpdate | null = null;
    //检查更新
    public startCheckUpdate(){
        if(ProjectConfig.isJumpCheckUpdate || (sys.os != sys.OS.ANDROID && sys.os != sys.OS.IOS ) ){
            this.startLoad();
        }else{
            this.node.getChildByName("hotupdate").active = true;
            this.node.getChildByName("hotupdate").getChildByName("btnretry").active = false;

            this.node.getChildByName("conteng").active = false;
            //更新内容的节点也是不可见的
            this.udpateTips.active = false;

            console.log("开始检查更新");
            if (this.hotUpdate == null){
                this.hotUpdate = new HotUpdate(this.manifestUrl!,this.onUpdateLister.bind(this));
                console.log("hotupdate执行了init");
                this.hotUpdate.doInit();
            }
            this.hotUpdate.checkUpdate();
        }
    }

    //开始更新
    public startUpdate(){
        console.log("开始更新 startUpdate()")
        if (this.hotUpdate == null){
            this.hotUpdate = new HotUpdate(this.manifestUrl!,this.onUpdateLister.bind(this));
            this.hotUpdate.doInit();
        }
        this.hotUpdate.doHotUpdate();
    }


    //重新尝试
    public doRetry(){
        console.log("重新尝试");
        this.retryCnt = 0;
        this.node.getChildByName("hotupdate").getChildByName("btnretry").active = false;
        if (this.hotUpdate == null){
            this.hotUpdate = new HotUpdate(this.manifestUrl!,this.onUpdateLister.bind(this));
            this.hotUpdate.doInit();
        }
        this.hotUpdate.doRetry();
    }


    public onBtnRestrt(){
        console.log("执行重新启动");

        //UIRoot.getInstance().clearAllNodes();

        console.log("使用schedule=========");
        this.scheduleOnce(()=>{
            game.restart();
        })
    }

    //重新尝试的次数
    private retryCnt:number = 0;

    /**
     * 更新过程中的事件
     * @param eventName 事件名字
     * @param event     事件
     */
    public onUpdateLister(eventName:string,event:any){
        console.log(eventName);
        console.log(event);
        if (eventName == HotUpdateEventName.ALREADY_UP_TO_DATE){
            this.info.string = "当前已经是最新版本...";
            console.log("当前已经是是最新版本了");
            //如果当前是最新版本则进入游戏
            this.startLoad();
        }else if(eventName == HotUpdateEventName.ERROR_DECOMPRESS){
            this.info.string = "解压缩错误...";
            console.log("解压缩错误...");
        }else if (eventName == HotUpdateEventName.ERROR_DOWNLOAD_MANIFEST){
            this.info.string = "下载manifest文件失败";
            console.log("下载manifest文件失败");
        }else if (eventName == HotUpdateEventName.ERROR_NO_LOCAL_MANIFEST){
            this.info.string = "获取本地manifest失败";
            console.log("获取本地manifest失败");
        }else if (eventName == HotUpdateEventName.ERROR_PARSE_MANIFEST){
            this.info.string = "本地manifest格式错误，转换失败";
            console.log("本地manifest格式错误，转换失败");
        }else if (eventName == HotUpdateEventName.ERROR_UPDATING){
            this.info.string = "更新失败";
            console.log("更新失败");
        }else if (eventName == HotUpdateEventName.JUSTCHECKINGSTART){
            this.info.string = "开始检查更新...";
            console.log("开始检查更新...");
        }else if (eventName == HotUpdateEventName.NEW_VERSION_FOUND){
            this.info.string = "有新版本，需要更新";
            console.log("有新版本，需要更新");
            this.scheduleOnce(()=>{
                this.startUpdate();
            });
        }else if (eventName == HotUpdateEventName.Retry){
            this.info.string = "重新尝试";
            console.log("重新尝试");
            if(this.retryCnt <3){
                this.retryCnt ++;
                this.scheduleOnce(()=>{
                    this.doRetry();
                });
            }else{
                this.info.string = "更新失败,请重新尝试";
                console.log("更新失败,请重新尝试");
                this.node.getChildByName("hotupdate").getChildByName("btnretry").active = true;
            }
        }else if (eventName == HotUpdateEventName.STARTUPDATE){
            this.info.string = "开始更新";
            console.log("开始更新");
        }else if (eventName == HotUpdateEventName.UPDATEREADY){
            this.info.string = "初始化完成...";
            console.log("初始化完成...");
        }else if (eventName == HotUpdateEventName.UPDATE_FAILED){
            this.info.string = "更新失败";
            console.log("更新失败");
        }else if (eventName == HotUpdateEventName.UPDATE_FINISHED){
            this.info.string = "更新完成";
            console.log("更新完成");
        }else if (eventName == HotUpdateEventName.UPDATE_PROGRESSION){
            console.log("更新进度消息");
            //获取byte的进度更新
            this.byteProgress.progress = event.getPercent();
            
            this.info.string = `更新中..${Math.round(event.getPercent() * 100)}/100`
        }else if (eventName == HotUpdateEventName.DELAY_TO_RESTART){
            //UIRoot.getInstance().clearAllNodes();
            setTimeout(()=>{
                game.restart();
            },10);
        }
    }



    //#region 当有更新的时候，弹出更新提示的框

    ///显示更新提示的界面
    private  showAlertTips():void{
        this.udpateTips.scale = v3(0,0,1);
        this.udpateTips.active = true;
        Tween.stopAllByTarget(this.udpateTips);
        tween(this.node).to(0.5, { scale: new Vec3(1, 1, 1) }, { easing: "backOut" }).call(() => {
            
        }).start();
    }


    
    //获取 热更新的提示
    private  getUpdateTips(version:string){
        console.log("执行热更新的更新说明请求");
        console.log(ProjectConfig.HotUpdateUrl);
        console.log("执行热更新的更新说明请求");
        HTTPUtils.CallGet(ProjectConfig.HotUpdateUrl,null).then((txt)=>{
            //正常获取到对应的数据
            console.log("正常获取到了数据");
            console.log(txt);

            let tipTxt = this.udpateTips.getChildByName("ScrollView").getChildByName("view").getChildByName("txt");
            tipTxt.getComponent(Label).string = txt;

        }).catch((err)=>{
            console.log("请求发生了异常");
            console.log(err);
        }).finally(()=>{
            console.log("最终走到了这里");
        })
    }



    ///隐藏更新提示的弹框
    private hideAlertTips():void{
        Tween.stopAllByTarget(this.udpateTips);
        tween(this.node).to(0.3,{scale:v3(0,0,1)},{easing:"backIn"}).call(()=>{

        }).start();
    }


    //马上执行更新
    private onBtnUpDateSoon(){
        console.log("执行马上更新");
    }


    //#endregion
}

