import { Canvas, Component, director, Game, game, macro, Mask, native, Rect, ResolutionPolicy, Scene, screen, Size, sys, UITransform, Vec3, View, view, _decorator } from "cc";
import { AdapterMgr, AdapterType } from "./AdapterMgr";
import { UIManager } from "../UIFrame/UIManager";
import { UIMgr } from "../Lobby/Scripts/UIMgr";
import { ResMgr } from "./ResMgr";
import { SysDefine } from "./config/SysDefine";
import { ConfMgr } from "../config/ConfMgr";
import { ProjectConfig } from "../ProjectConfig";
import { freemem } from "os";
import { SocketMgr } from "../panda/net/SocketMgr";
import gamehall from "../protocol/gamehall.js";
import { UIBlock } from "../Lobby/Scripts/UI/UIBlock";

const { ccclass, property } = _decorator


/**
 * 应用从这里开始启动
 */
@ccclass("UIRoot")
export class UIRoot extends Component {
    private static instance: UIRoot;

    public static getInstance(): UIRoot {
        return this.instance;
    }

    public async start() {
        view.setResizeCallback(() => {
            console.log("大小发生了改变=====");

            if (this.rotationCallBack != null) {
                this.rotationCallBack();
                this.rotationCallBack = null;
            }
            this.doAdapter();
        });
        UIRoot.instance = this;
        this.doAdapter();
        this.onGameInit();
    }


    private minWidth = 1280;
    private minHeight = 720;
    private maxWidth = 1600;
    private maxHeight = 720;



    //初始的屏幕朝向
    private targetDiction: number = macro.ORIENTATION_PORTRAIT;

    //获取当前屏幕的朝向
    public getCurScreenDirection():number{
        return this.targetDiction
    }


    //转动结束的回调方法
    private rotationCallBack: Function = null;

    //将屏幕旋转为横版
    public RotationLandscape(cb: Function = null): void {
        if (this.targetDiction == macro.ORIENTATION_LANDSCAPE) {
            console.log("当前已经是横屏了。不需要处理了 旋转到横屏了");
            if (cb != null) {
                cb();
            }
            return;
        }
        this.targetDiction = macro.ORIENTATION_LANDSCAPE;
        this.rotationCallBack = cb;
        if (sys.isBrowser && sys.isMobile) {
            //手机浏览器
        } else if (sys.isBrowser && !sys.isMobile) {
            //pC 浏览器
            let frameSize = screen.windowSize;
            view.setOrientation(macro.ORIENTATION_PORTRAIT)
            if (frameSize.height > frameSize.width) {
                screen.windowSize = new Size(frameSize.height, frameSize.width)
            }

        } else {
            //移动端  真正执行一次旋转
            if (sys.os == sys.OS.ANDROID) {
                //android 端
                native.reflection.callStaticMethod("com/cocos/game/AppActivity", "ChangeOrientation", "(I)V", 1);
            } else if (sys.os == sys.OS.IOS) {
                //ios 端
            }
        }


        //view.setDesignResolutionSize(ProjectConfig.DesignScreenHeight, ProjectConfig.DesignScreenWidth, ResolutionPolicy.FIXED_HEIGHT);
    }

    //将屏幕专项 转为 竖版
    public RotationPortrait(cb: Function = null): void {
        if (this.targetDiction == macro.ORIENTATION_PORTRAIT) {
            console.log("当前已经是竖屏了。不需要处理了");
            if (cb != null) {
                cb();
            }
            return;
        }
        this.targetDiction = macro.ORIENTATION_PORTRAIT;
        this.rotationCallBack = cb;

        if (sys.isBrowser && sys.isMobile) {
            //手机浏览器
        } else if (sys.isBrowser && !sys.isMobile) {
            //pc 浏览器
            let frameSize = screen.windowSize;
            view.setOrientation(macro.ORIENTATION_PORTRAIT)
            if (frameSize.width > frameSize.height) {
                screen.windowSize = new Size(frameSize.height, frameSize.width);
            }
        } else {
            //移动端 native 真正执行一次旋转
            if (sys.os == sys.OS.ANDROID) {
                native.reflection.callStaticMethod("com/cocos/game/AppActivity", "ChangeOrientation", "(I)V", 0);
            } else if (sys.os == sys.OS.IOS) {
                //ios端
            }
        }

        //view.setDesignResolutionSize(ProjectConfig.DesignScreenWidth, ProjectConfig.DesignScreenHeight, ResolutionPolicy.FIXED_WIDTH);
    }


    //将所有节点的大小重新定义一下
    private doReSizeAllNode() {
        let rootNode = this.node.parent;
        if (this.targetDiction == macro.ORIENTATION_LANDSCAPE) {
            //横屏
            //Root节点
            rootNode.getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenHeight, ProjectConfig.DesignScreenWidth);
            //UIRoot节点
            //rootNode.getChildByName("UIROOT").getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenHeight, ProjectConfig.DesignScreenWidth);
            //UIScreen节点
            //rootNode.getChildByName("UIROOT").getChildByName("UIScreen").getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenHeight, ProjectConfig.DesignScreenWidth);
            //UIFixed 节点
            this.node.getChildByName(SysDefine.SYS_FIXED_NODE).getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenHeight, ProjectConfig.DesignScreenWidth);
            //UIPopup节点
            this.node.getChildByName(SysDefine.SYS_POPUP_NODE).getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenHeight, ProjectConfig.DesignScreenWidth);
            //UIFloat节点
            this.node.getChildByName(SysDefine.SYS_FLOAT_NODE).getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenHeight, ProjectConfig.DesignScreenWidth);
            //UIWin节点
            this.node.getChildByName(SysDefine.SYS_WIN_NODE).getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenHeight, ProjectConfig.DesignScreenWidth);
            //UILoading节点
            this.node.getChildByName(SysDefine.SYS_LOADING_NODE).getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenHeight, ProjectConfig.DesignScreenWidth);

            //UIBubble节点

            //全局屏蔽层节点


        } else {
            //Root节点
            rootNode.getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenWidth, ProjectConfig.DesignScreenHeight);
            //UIRoot节点
            //rootNode.getChildByName("UIROOT").getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenWidth, ProjectConfig.DesignScreenHeight);
            //UIScreen节点
            //rootNode.getChildByName("UIROOT").getChildByName("UIScreen").getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenWidth, ProjectConfig.DesignScreenHeight);
            //UIFixed 节点
            this.node.getChildByName(SysDefine.SYS_FIXED_NODE).getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenWidth, ProjectConfig.DesignScreenHeight);
            //UIPopup节点
            this.node.getChildByName(SysDefine.SYS_POPUP_NODE).getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenWidth, ProjectConfig.DesignScreenHeight);
            //UIFloat节点
            this.node.getChildByName(SysDefine.SYS_FLOAT_NODE).getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenWidth, ProjectConfig.DesignScreenHeight);
            //UIWin节点
            this.node.getChildByName(SysDefine.SYS_WIN_NODE).getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenWidth, ProjectConfig.DesignScreenHeight);
            //UILoading节点
            this.node.getChildByName(SysDefine.SYS_LOADING_NODE).getComponent(UITransform).setContentSize(ProjectConfig.DesignScreenWidth, ProjectConfig.DesignScreenHeight);

            //UIBubble节点

            //全局屏蔽层节点
        }
    }


    /**
     * 获取 气泡 父容器 的大小
     */
    public getBubbleContentSize():Size{
        return this.node.getChildByName(SysDefine.SYS_BUBBLE_NODE).getComponent(UITransform).contentSize;
    }

    /**
     * 
     * 当前的适配策略
     * 1：默认启动使用 竖屏 设计分辨率为 720 x 1280 
     * 2：当进行屏幕旋转的时候执行 1280 X 720 的设计分辨率
     * 
     * 暂时不测试 适配 的问题。
     */
    public doAdapter() {

        let isLandscape = this.targetDiction == macro.ORIENTATION_LANDSCAPE;
        if (isLandscape) {
            console.log("当前为横屏xxx  固定高度");
            view.setDesignResolutionSize(ProjectConfig.DesignScreenHeight, ProjectConfig.DesignScreenWidth, ResolutionPolicy.FIXED_HEIGHT);
        } else {
            console.log("当前为竖屏 固定宽度");
            view.setDesignResolutionSize(ProjectConfig.DesignScreenWidth, ProjectConfig.DesignScreenHeight, ResolutionPolicy.FIXED_WIDTH);
        }
        //this.doReSizeAllNode();
    }





    clearAllNodes() {
        this.node.getChildByName(SysDefine.SYS_SCREEN_NODE)!.destroyAllChildren();
        this.node.getChildByName(SysDefine.SYS_FIXED_NODE)!.destroyAllChildren();
        this.node.getChildByName(SysDefine.SYS_POPUP_NODE)!.destroyAllChildren();
        this.node.getChildByName(SysDefine.SYS_FLOAT_NODE)!.destroyAllChildren();
        this.node.getChildByName(SysDefine.SYS_WIN_NODE)!.destroyAllChildren();
        this.node.getChildByName(SysDefine.SYS_BUBBLE_NODE).destroyAllChildren();
        this.node.getChildByName(SysDefine.SYS_LOADING_NODE).destroyAllChildren();
        this.node.getChildByName(SysDefine.SYS_BLOCK_NODE).destroyAllChildren();
    }


    //开始屏蔽
    public startBlock(cb:Function = null){
        let block = this.node.getChildByName(SysDefine.SYS_BLOCK_NODE);
        if(block != null && block != undefined && block.isValid){
            block.active = true;
            block.getComponent(UIBlock).setClickCallBack(cb);
        }
    }
    // 结束屏蔽
    public stopBlock(){
        let block = this.node.getChildByName(SysDefine.SYS_BLOCK_NODE);
        if(block != null && block != undefined && block.isValid){
            block.active = false;
            block.getComponent(UIBlock).setClickCallBack(null);
        }
    }

    public async onGameInit() {



        //初始化UIManager中的Node。所有节点都在 UIManager中操作
        this.clearAllNodes();
        //先清空
        UIManager.destory();
        UIManager.getInstance().init(this.node.getChildByName(SysDefine.SYS_SCREEN_NODE),
            this.node.getChildByName(SysDefine.SYS_FIXED_NODE),
            this.node.getChildByName(SysDefine.SYS_POPUP_NODE),
            this.node.getChildByName(SysDefine.SYS_FLOAT_NODE),
            this.node.getChildByName(SysDefine.SYS_WIN_NODE),
            this.node.getChildByName(SysDefine.SYS_LOADING_NODE),
            this.node.parent.parent.parent.getChildByName("node_3d"),
            this.node.getChildByName("UI2dOn3D"),
            this.node.getChildByName(SysDefine.SYS_BUBBLE_NODE),
            this.node.getChildByName(SysDefine.SYS_BLOCK_NODE)
        );

        ConfMgr.getInstance().loadAllConf();
        this.stopBlock();

        //进去登录界面  判定是否要跳过登录界面
        if(ProjectConfig.IsJumpLogin){
            UIMgr.getInstance().showScreenLobby();
        }else{
            UIMgr.getInstance().showScreenLogin();
        }
        

        // let updateRes = await ResMgr.getInstance().preloadLoading("Core/hotupdate/UIUpdate");
        // let result = await ResMgr.getInstance().preloadLoading("Core/UILoading");
        // if (result && updateRes){
        //     UIMgr.getInstance().showUILoading();
        // }else{
        //     console.error("loading节点初始化失败");
        // }


        //初版 直接显示登陆界面 测试UIFrame是否正常工作
        //UIManager.getInstance().openForm("Lobby/Prefabs/UILogin");
        //UIMgr.getInstance().showScreenLogin()
        //await UIMgr.getInstance().showPopUpProfile();
        //await UIMgr.getInstance().showWaiting();       


        //UIMgr.getInstance().showLoading()\
        //第一步 展示 loading页面 当然有些默认就是loading页面

        //第二步 初始化游戏（Manager config sdks）

        //第三步 构建场景(加载必要的prefab 音频 texture)

        //第四步 加载主界面ui 关掉loading 正式进入游戏
    }

    //注册底层事件
    private async registerEvent() {
    }
}
