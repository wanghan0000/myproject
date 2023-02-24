
import { _decorator, Component, Node, director, sys, warn, Canvas, Scene, find, js, instantiate, Prefab, UITransform, tween, Tween, UIOpacity, easing, size, Widget, Size, view, Button, Sprite, Texture2D, SpriteFrame, Color, ImageAsset, logID, NodePool, screen } from 'cc';
import { PriorityStake } from '../panda/utils/PriorityStack';
import { Utils } from '../panda/utils/Utils';
import { ProjectConfig } from '../ProjectConfig';
import { AdapterMgr, AdapterType } from './AdapterMgr';
import { FormType, ModalOpacity, SysDefine } from './config/SysDefine';
import { ModalMgr } from './ModalMgr';
import { ResMgr } from './ResMgr';
import { UIBase } from './UIBase';
import { UIBubble, UIFixed, UIFloat, UILoading, UIPopup, UIScreen, UIWindow } from './UIForm';
// export class PopupGroup{
//     public prioity:number = 0;
//     //这个使用BundleName
//     public groupName:string = "";
//     public popupForms:UIPopup[] = [];
// }

export class UIManager {
    //全屏显示的ui挂载节点
    private ndScreen: Node = null;
    //固定ui的挂载节点
    private ndFixed: Node = null;
    //弹出窗体的挂载节点
    private ndPopUp: Node = null;
    //浮动窗体
    private ndFloat: Node = null;
    //能够拦截float的win
    private ndWin: Node = null;
    //loading窗体
    private ndLoading: Node = null;

    private ndNode3d: Node = null;
    public ndUI2dOn3d: Node = null;
    //气泡
    private ndBubble: Node = null;
    //全局屏蔽层
    private ndBlock: Node = null;


    //所有显示的窗体
    private allForms: { [key: string]: UIBase } = js.createMap();

    //正在加载的窗体
    //private loadingForms: { [key: string]: ((val: UIBase) => void)[] } = js.createMap();
    private loadingForms: { [key: string]: boolean } = js.createMap();

    //存储screen
    private screensStack: PriorityStake<UIScreen> = new PriorityStake<UIScreen>();
    //能够排序的一个popup array
    private popupsArr: UIPopup[] = [];

    private floatArr: UIFloat[] = [];

    private winArr: UIWindow[] = [];
    //win类型的masks
    private winMasks: { [key: string]: Node } = js.createMap();

    //screen类型的masks
    private screenMasks: { [key: string]: Node } = js.createMap();

    private loading: UILoading | null = null;

    //气泡的数据 delete bubbleMap[fid];
    //气泡需要是按照 数组形式来的 string:prefabName UIBubble[] 是组件本身
    private bubbleMap: Map<string, UIBubble[]> = new Map<string, UIBubble[]>;
    //pb 没有加载出来处理方式  key为prefab的路径  p:为打开这个prefab的参数
    private loadBubbles: Map<string, ({ p: any }[])> = new Map<string, { p: any }[]>;
    private waitNodePool: NodePool = new NodePool();
    private maskNodePool: NodePool = new NodePool();

    private getMaskNode(): Node | null {
        if (this.maskNodePool.size() > 0) {
            let maskNode = this.maskNodePool.get();
            return maskNode;
        }
        return null;
    }

    private reBackMaskNode(node: Node): boolean {
        if (this.maskNodePool.size() >= 10) {
            return false;
        }
        this.maskNodePool.put(node);
        return true;
    }

    private getWaitNode(): Node | null {
        if (this.waitNodePool.size() > 0) {
            return this.waitNodePool.get();
        }
        return null;
    }

    private reBackWaitNode(node: Node) {
        this.waitNodePool.put(node);
    }


    private static instance: UIManager;
    public static getInstance(): UIManager {
        if (this.instance == null) {
            this.instance = new UIManager();
            director.on("winsizechanged", this.instance.onWinSizeChged, this.instance);
        }
        return this.instance;
    }

    onWinSizeChged() {

        let uiscreens = this.screensStack.getElements();
        for (let k = 0; k < uiscreens.length; k++) {
            console.log("窗口变化，要重新刷新一下======");
            uiscreens[k].node.getComponent(Widget)!.setDirty();
        }
    }

    public static destory() {
        this.instance = null!;
        director.off("winsizechanged")
    }

    //初始化
    public init(ndScreen: Node,
        ndFixed: Node,
        ndPopUp: Node,
        ndFloat: Node,
        ndWin: Node,
        ndLoading: Node,
        ndNode3d: Node,
        nd2dOn3d: Node,
        ndBubble: Node,
        ndBlock: Node): void {
        this.ndScreen = ndScreen;
        this.ndFixed = ndFixed;
        this.ndPopUp = ndPopUp;
        this.ndFloat = ndFloat;
        this.ndWin = ndWin;
        this.ndLoading = ndLoading;
        this.ndNode3d = ndNode3d;
        this.ndUI2dOn3d = nd2dOn3d;
        this.ndBubble = ndBubble;
        this.ndBlock = ndBlock;
    }


    start() {

    }

    //打开一个loading界面
    public async openLoading(prefabPath: string, ...params: any): Promise<UILoading | null> {
        console.log(`打开loading${prefabPath}`);
        if (prefabPath == null || prefabPath == undefined || prefabPath.length == 0) {
            console.error(`${prefabPath}参数错误`);
            return null;
        }
        if (this.checkFormShowing(prefabPath)) {
            console.warn(`${prefabPath}窗体正在显示中`);
            return null;
        }
        if (this.checkFormLoading(prefabPath)) {
            warn(`${prefabPath}窗体正在加载中...`);
            return null;
        }
        this.loadingForms[prefabPath] = true;
        let pb = await ResMgr.getInstance().loadForm(prefabPath);
        if (pb == null) {
            console.error(`${prefabPath}窗体加载错误`);
            delete this.loadingForms[prefabPath];
            return null;
        }
        let node = instantiate(pb!);
        let com = node.getComponent(UILoading);
        if (com == null) {
            console.warn(`${prefabPath}没有绑定UILoading组件`);
            delete this.loadingForms[prefabPath];
            return null;
        }
        if (this.loading != null) {
            await this.loading.closeSelf();
        }
        this.allForms[prefabPath] = com;
        com.fid = prefabPath;
        this.ndLoading!.addChild(node);
        AdapterMgr.getInstance().adapterByType(AdapterType.FullScreen, com);
        com.onShow(...params);
        await com.showEffect();
        this.ndLoading = node;
        delete this.loadingForms[prefabPath];
        return com
    }

    //下层节点显示出来
    public async showActiveLowNode() {
        let all = this.screensStack.getElements();
        for (let k = all.length - 1; k >= 0; k--) {
            if (k == all.length - 2) {
                if (all[k].isValid && all[k].node.isValid) {
                    all[k].node.active = true
                }
            }
        }
    }

    //打开一个screen
    public async openScreen(prefabPath: string, ...params: any): Promise<UIScreen | null> {
        console.log(`打开openScene--${prefabPath}`);
        if (prefabPath == null || prefabPath == undefined || prefabPath.length <= 0) {
            warn(`${prefabPath}，参数错误`);
            return null;
        }
        //当前窗体正在显示
        if (this.checkFormShowing(prefabPath)) {
            warn(`${prefabPath}窗体正在显示中`);
            return null;
        }
        if (this.checkFormLoading(prefabPath)) {
            warn(`${prefabPath}正在加载中`);
            return null;
        }
        this.loadingForms[prefabPath] = true;
        let pb = ResMgr.getInstance().getPrefabByPath(prefabPath);
        //暂时这么写。捕鱼的需要调整结构
        if (pb == null) {
            pb = await ResMgr.getInstance().loadForm(prefabPath)!;
        }

        if (pb == null) {
            warn(`${prefabPath}窗体加载错误!`);
            delete this.loadingForms[prefabPath];
            return null;
        }
        let node = instantiate(pb!);
        let com = node.getComponent(UIScreen);
        if (com == null) {
            warn(`${prefabPath}没有绑定UIScreen组件`);
            delete this.loadingForms[prefabPath];
            return null;
        }

        if (com.isOnleyEngross) {
            //完全独占，清楚掉所有的界面。

            //清楚掉所有的winArr
            // for (let k = 0;k<this.winArr.length;k++){
            // }
            //关闭所有的win
            while (this.winArr.length > 0) {
                console.log("关闭所有的差UNGit", this.winArr.length, "=====");
                await this.winArr[this.winArr.length - 1].closeSelf();
            }
            //关闭所有的浮动窗体
            while (this.floatArr.length > 0) {
                console.log("关闭所有的floatArr", this.floatArr.length);
                await this.floatArr[this.floatArr.length - 1].closeSelf();
            }
            //关闭所有的popup
            while (this.popupsArr.length > 0 &&
                this.popupsArr[this.popupsArr.length - 1] != undefined) {
                await this.popupsArr[this.popupsArr.length - 1].closeSelf();
            }

            //关闭掉所有的screen
            console.log("关闭所有的screeen", this.screensStack.getSize(), "==========");
            while (this.screensStack.getSize() > 0) {
                await this.screensStack.getTopElement()!.closeSelf();
            }
        } else if (com.isEngross) {
            while (this.screensStack.getSize() > 0) {
                await this.screensStack.getTopElement()!.closeSelf();
            }
        }

        //给screen增加屏蔽层
        if (!com.is3d) {
            console.log("需要加屏蔽层========");
            let maskNode = this.getMaskNode();
            if (maskNode == null) {
                let mask = ResMgr.getInstance().getPrefabByPath("Lobby/Prefabs/UIMask");
                if (mask != null) {
                    maskNode = instantiate(mask!);
                }
            }
            if (maskNode != null) {
                //在首次加载的时候会有问题。这个地方需要优化一下
                this.ndScreen!.addChild(maskNode!);
                //maskNode!.getComponent(UITransform)!.contentSize = new Size(view.getFrameSize().width, view.getFrameSize().height);
                maskNode!.getComponent(UITransform)!.contentSize = new Size(screen.windowSize.width, screen.windowSize.height);
                this.screenMasks[prefabPath] = maskNode!;
            }
        } else {
            console.log("当前为3D场景不需要加屏蔽层");
            for (let key in this.screenMasks) {
                this.screenMasks[key].active = false;
            }
        }

        this.allForms[prefabPath] = com;
        com.fid = prefabPath;
        if (com.is3d) {
            this.ndNode3d!.addChild(node);
        } else {
            this.ndScreen!.addChild(node);
        }
        AdapterMgr.getInstance().adapterByType(AdapterType.FullScreen, com);
        com.onShow(...params);
        if (com.getShowEffectTime() > 0) {
            await com.showEffect();
        }

        if (!com.isEngross) {
            //不独占 将其他screen active 设置为false
            if (!com.standOnWithOutDisactive) {
                let all = this.screensStack.getElements();
                for (let k = 0; k < all.length; k++) {
                    all[k].node.active = false;
                }
            }

        }
        //将对象保存到stack中
        this.screensStack.push(com);
        delete this.loadingForms[prefabPath]
        return com
    }
    //打开一个fixed
    public async opnFixed(prefabPath: string, ...params: any): Promise<UIFixed | null> {
        console.log(`[打开openfixed--${prefabPath}]`);
        if (prefabPath == null || prefabPath == undefined || prefabPath.length <= 0) {
            warn(`${prefabPath}fixed节点不存在`);
            return null;
        }
        if (this.checkFormShowing(prefabPath)) {
            warn(`${prefabPath}fixed节点正在显示中`);
            return null;
        }
        if (this.checkFormLoading(prefabPath)) {
            warn(`${prefabPath}正在加载中...`);
            return;
        }
        this.loadingForms[prefabPath] = true;
        let pb = ResMgr.getInstance().getPrefabByPath(prefabPath);
        if (pb == null) {
            warn(`${prefabPath}fixed加载失败`);
            pb = await ResMgr.getInstance().loadForm(prefabPath);
        }
        if (pb == null) {
            warn(`${prefabPath}加载失败...`);
            delete this.loadingForms[prefabPath];
            return null;
        }
        let node = instantiate(pb);
        let com = node.getComponent(UIFixed);
        if (com == null) {
            warn(`${prefabPath}fixed节点没有绑定UIFixed组件`);
            delete this.loadingForms[prefabPath];
            return null;
        }
        this.ndFixed!.addChild(node);
        com.fid = prefabPath;
        this.allForms[prefabPath] = com;
        com.onShow(...params);
        await com.showEffect();
        delete this.loadingForms[prefabPath];
        return com;
    }
    //获取popup中的最高层级
    private getMaxPriorityFromPopupGroup(): number {
        let max = 0;
        if (this.popupsArr.length > 0) {
            for (let k = 0; k < this.popupsArr.length; k++) {
                if (max < k) {
                    max = k;
                }
            }
        }
        return max;
    }
    //打开popup
    public async openPopup(prefabPath: string, params?: any): Promise<UIPopup | null> {
        console.log(`[打开openPopup--${prefabPath}]`);
        if (prefabPath == null || prefabPath == undefined || prefabPath.length <= 0) {
            warn(`${prefabPath}popup节点不存在`);
            return null;
        }
        if (this.checkFormShowing(prefabPath)) {
            warn(`${prefabPath}popup节点正在显示中`);
            return null;
        }

        if (this.checkFormLoading(prefabPath)) {
            warn(`${prefabPath}popup节点正在加载中...`);
            return null;
        }
        this.loadingForms[prefabPath] = true;

        let pb = ResMgr.getInstance().getPrefabByPath(prefabPath);
        if (pb == null) {
            warn(`${prefabPath}popup节点加载失败`);
            pb = await ResMgr.getInstance().loadForm(prefabPath);
        }
        if (pb == null) {
            console.error(`${prefabPath}popup节点加载失败`);
            delete this.loadingForms[prefabPath];
            return null;
        }
        let node = instantiate(pb);
        let com = node.getComponent(UIPopup);
        if (com == null) {
            warn(`${prefabPath}popup节点没有绑定到UIPopup组件`);
            delete this.loadingForms[prefabPath];
            return null;
        }

        //设置层级为popup中的最高层级
        let curMax = this.getMaxPriorityFromPopupGroup();
        if (com.modalType.opacity >= ModalOpacity.OpacityZero) {
            let maskNode = this.getMaskNode();
            if (maskNode == null) {
                let maskpb = ResMgr.getInstance().getPrefabByPath("Lobby/Prefabs/UIMask");
                maskNode = instantiate(maskpb!);
                // let widge = maskNode.addComponent(Widget);
                // widge!.target = this.ndWin;
                // widge.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
                // widge.top = 0;
                // widge.left = 0;
                // widge.right = 0;
                // widge.bottom = 0;
            }

            maskNode.setSiblingIndex(curMax + 1);
            this.ndPopUp!.addChild(maskNode);
            this.winMasks[prefabPath] = maskNode;
        }

        this.ndPopUp!.addChild(node);
        com.fid = prefabPath;

        node.setSiblingIndex(curMax + 2);
        this.allForms[prefabPath] = com;

        // let data = ResMgr.getInstance().splitFormName(prefabPath);
        // let group = this.getPopupGroup(data.bundle);
        // if (group == null){
        //     group = new PopupGroup();
        //     group.prioity = curMax + 2;
        //     group.groupName = data.bundle;
        //     this.popupsArr.push(group);
        // }
        // group.popupForms.push(com);
        this.popupsArr.push(com);
        com.onShow(params);
        let arr: UIBase[] = this.getModelTypeComs();
        ModalMgr.getInstance().checkModalWinAndPopUp(arr, this.winMasks, true);
        await com.showEffect();
        delete this.loadingForms[prefabPath];
        return com;
    }

    //获取popupGroup
    // private getPopupGroup(bundleName:string):PopupGroup | null{
    //     if (this.popupsArr.length >0){
    //         for (let k = 0;k<this.popupsArr.length;k++){
    //             if (this.popupsArr[k].groupName == bundleName){
    //                 return this.popupsArr[k];
    //             }
    //         }
    //     }
    //     return null;
    // }



    //动态计算需要遮罩的win和popups
    //对于popup来说，层级越高，越在上
    public getModelTypeComs(): UIBase[] {
        let arr: UIBase[] = [];
        for (let k = 0; k < this.popupsArr.length; k++) {
            arr.push(this.popupsArr[k]);
        }
        for (let k = 0; k < this.winArr.length; k++) {
            arr.push(this.winArr[k]);
        }
        return arr;
    }

    //打开一个浮动节点
    public async openFloat(prefabPath: string, ...params: any): Promise<UIFloat | null> {
        console.log(`[打开openFloat${prefabPath}]`);
        if (prefabPath == null || prefabPath == undefined || prefabPath.length <= 0) {
            warn(`${prefabPath}float节点不存在`);
            return null;
        }
        if (this.checkFormShowing(prefabPath)) {
            warn(`${prefabPath}float节点正在显示中`);
            return null;
        }
        if (this.checkFormLoading(prefabPath)) {
            warn(`${prefabPath}float节点正在加载中...`);
            return null;
        }
        this.loadingForms[prefabPath] = true;
        let pb = ResMgr.getInstance().getPrefabByPath(prefabPath);
        if (pb == null) {
            warn(`${prefabPath}float节点加载失败`);
            pb = await ResMgr.getInstance().loadForm(prefabPath);
        }
        if (pb == null) {
            console.error(`${prefabPath}float节点加载失败`);
            delete this.loadingForms[prefabPath];
            return null;
        }
        let node = instantiate(pb);
        let com = node.getComponent(UIFloat);
        if (com == null) {
            warn(`${prefabPath}float节点没有绑定到UIFloat节点上`);
            delete this.loadingForms[prefabPath];
            return null;
        }
        com.fid = prefabPath;
        this.ndFloat!.addChild(node);
        this.floatArr.push(com);
        this.allForms[prefabPath] = com;
        com.onShow(...params);
        await com.showEffect();
        delete this.loadingForms[prefabPath];
        return com;
    }

    public async openWait(prefabPath: string): Promise<UIWindow | null> {
        if (prefabPath == null || prefabPath == undefined || prefabPath.length <= 0) {
            warn(`${prefabPath}win节点不存在`);
            return null;
        }
        if (this.checkFormShowing(prefabPath)) {
            warn(`${prefabPath}Win节点正在显示中`);
            return null;
        }
        if (this.checkFormLoading(prefabPath)) {
            warn(`${prefabPath}win节点正在加载中...`);
            return null;
        }
        this.loadingForms[prefabPath] = true;

        let node = this.getWaitNode();
        if (node == null) {
            let pb = ResMgr.getInstance().getPrefabByPath(prefabPath);
            //兼容一下，暂时这么写。捕鱼的结构需要调整一下  这里要干掉否则 隐藏bug
            if (pb == null) {
                console.error(`${prefabPath}不存在使用了兼容模式`);
                pb = await ResMgr.getInstance().loadForm(prefabPath);
            }
            if (pb == null) {
                console.error(`${prefabPath}win节点加载失败`);
                delete this.loadingForms[prefabPath];
                return null;
            }
            node = instantiate(pb);
        }

        let com = node.getComponent(UIWindow);
        if (com == null) {
            warn(`${prefabPath}win加载没有绑定到UIWindow组件上`);
            delete this.loadingForms[prefabPath];
            return null;
        }
        if (com.modalType.opacity >= ModalOpacity.OpacityZero) {
            console.log("开始获取屏蔽层的东西");
            let maskNode = this.getMaskNode();
            if (maskNode == null) {
                //有屏蔽层
                let mask = ResMgr.getInstance().getPrefabByPath("Lobby/Prefabs/UIMask");
                maskNode = instantiate(mask!);
            }
            if (maskNode == null) {
                console.error(`maskNode为空了=====xxxx`);

            }
            this.ndWin!.addChild(maskNode);
            maskNode.getComponent(UITransform)!.contentSize = new Size(view.getFrameSize().width, view.getFrameSize().height);
            this.winMasks[prefabPath] = maskNode;
        }
        com.fid = prefabPath;
        this.ndWin!.addChild(node);
        this.winArr.push(com);
        this.allForms[prefabPath] = com;
        com.onShow();
        let arr: UIBase[] = this.getModelTypeComs();
        ModalMgr.getInstance().checkModalWinAndPopUp(arr, this.winMasks, true);
        delete this.loadingForms[prefabPath];
        await com.showEffect();
        return com;
    }

    //关闭waiting节点
    public async closeWaiting(prefabPath: string) {
        let com = this.allForms[prefabPath];
        if (!com) {
            console.log("closeForm中的com不存在");
            return false;
        }
        console.log("关闭waiting ==========");
        let tIdx: number = -1;
        if (this.winArr.length > 0) {
            for (let k = 0; k < this.winArr.length; k++) {
                if (this.winArr[k].fid == prefabPath) {
                    tIdx = k;
                    com = this.winArr[k];
                    break;
                }
            }
        }
        if (tIdx >= 0 && tIdx < this.winArr.length) {
            this.winArr.splice(tIdx, 1);
            com!.onHide();
            let maskPath = com!.fid;
            let maskNode = this.winMasks[maskPath];
            if (maskNode) {
                let t = com!.getHideEffectTime();
                //消失要有消失动画
                Tween.stopAllByTarget(maskNode);
                tween<UIOpacity>(maskNode.getComponent(UIOpacity)!).to(t, { opacity: 0 }, { easing: "linear" }).call(() => {
                    if (!this.reBackMaskNode(maskNode)) {
                        console.log("win关闭的时候reBackMaskNode没有成功 自己销毁");
                        maskNode.destroy();
                        ResMgr.getInstance().destoryForm("Lobby/Prefabs/UIMask");
                    } else {
                        console.log("win关闭maskNode回收成功");
                    }
                }).start();
            }
            delete this.winMasks[maskPath];
            let arr: UIBase[] = this.getModelTypeComs();
            ModalMgr.getInstance().checkModalWinAndPopUp(arr, this.winMasks, false);
            await com!.hideEffect();
            this.reBackWaitNode(com.node);
            ResMgr.getInstance().destoryForm(prefabPath);
        }
        delete this.allForms[prefabPath];
    }


    private async waitFormsecond(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            setTimeout(() => {
                resolve(true);
            }, (3000));
        })
    }



    public async openWin(prefabPath: string, ...params: any): Promise<UIWindow | null> {
        console.log(`打开openWin--${prefabPath}`);
        if (prefabPath == null || prefabPath == undefined || prefabPath.length <= 0) {
            warn(`${prefabPath}Win节点不存在`);
            return null;
        }
        if (this.checkFormShowing(prefabPath)) {
            warn(`${prefabPath}win节点正在显示中`);
            return null;
        }
        if (this.checkFormLoading(prefabPath)) {
            warn(`${prefabPath}win节点正在打开...`)
            return null;
        }
        this.loadingForms[prefabPath] = true;
        let pb = ResMgr.getInstance().getPrefabByPath(prefabPath);
        //await this.waitFormsecond();
        //兼容一下，暂时这么写。捕鱼的结构需要调整一下  这里要干掉否则 隐藏bug
        if (pb == null) {
            console.error(`${prefabPath}不存在使用了兼容模式`);
            pb = await ResMgr.getInstance().loadForm(prefabPath);
        }
        if (pb == null) {
            console.error(`${prefabPath}win节点加载失败`);
            //如果加载失败了，则需要将节点从
            delete this.loadingForms[prefabPath];
            return null;
        }
        let node = instantiate(pb);
        let com = node.getComponent(UIWindow);
        if (com == null) {
            warn(`${prefabPath}win加载没有绑定到UIWindow组件上`);
            delete this.loadingForms[prefabPath];
            return null;
        }
        if (com.modalType.opacity >= ModalOpacity.OpacityZero) {
            console.log("开始获取屏蔽层的东西");
            let maskNode = this.getMaskNode();
            if (maskNode == null) {
                //有屏蔽层
                let mask = ResMgr.getInstance().getPrefabByPath("Lobby/Prefabs/UIMask");
                maskNode = instantiate(mask!);
            }
            this.ndWin!.addChild(maskNode);
            maskNode.getComponent(UITransform)!.contentSize = new Size(view.getFrameSize().width, view.getFrameSize().height);
            this.winMasks[prefabPath] = maskNode;
        }
        com.fid = prefabPath;
        this.ndWin!.addChild(node);
        this.winArr.push(com);
        this.allForms[prefabPath] = com;
        com.onShow(...params);
        if (com.modalType.opacity >= ModalOpacity.OpacityZero) {
            let arr: UIBase[] = this.getModelTypeComs();
            ModalMgr.getInstance().checkModalWinAndPopUp(arr, this.winMasks, true);
        }
        delete this.loadingForms[prefabPath];
        com.showEffect();

        return com;
    }


    //关闭一个窗体
    public async exitToBubble(fid: string) {
        let prefabpath = fid.split("_")[0];
        let bubble: UIBubble = null;
        if (this.bubbleMap.has(prefabpath)) {
            for (let idx = 0; idx < this.bubbleMap.get(prefabpath).length; idx++) {
                if (this.bubbleMap.get(prefabpath)[idx].fid == fid) {
                    bubble = this.bubbleMap.get(prefabpath)[idx];
                    //删除数组中的元素
                    this.bubbleMap.get(prefabpath).splice(idx, 1);
                    break;
                }
            }
        }
        if (bubble != null) {
            await bubble.hideEffect();
            bubble.onHide();
            bubble.node.destroy();
            ResMgr.getInstance().destoryForm(prefabpath);
        }
    }

    //打开一个气泡
    public openBubble(prefabPath: string, ...params: any): UIBubble {
        console.log(`打开一个气泡界面${prefabPath}`);
        if (prefabPath == null || prefabPath == undefined || prefabPath.length == 0) {
            console.error(`打开气泡发生错误,prefabpath 不存在`);
            return null;
        }
        let pb = ResMgr.getInstance().getPrefabByPath(prefabPath);
        if (pb == null) {
            console.error(`${prefabPath}加载prefab失败`);

            // if(!this.loadBubbles.has(prefabPath)){
            //     this.loadBubbles.set(prefabPath,[]);
            // }
            // this.loadBubbles.get(prefabPath).push(...params)
            // ResMgr.getInstance().loadForm(prefabPath).then((ppb:Prefab)=>{
            //     for (let idx = 0;idx <this.loadBubbles.get(prefabPath).length;idx ++){
            //         this.onLoadBubbleCallBack(prefabPath,ppb,this.loadBubbles.get(prefabPath)[idx]);
            //     }
            //     this.loadBubbles.delete(prefabPath);
            // }).catch(()=>{
            //     console.error(`prefab ${prefabPath}加载失败...`);
            //     this.loadBubbles.delete(prefabPath);
            // });
        } else {
            return this.onLoadBubbleCallBack(prefabPath, pb, ...params);
        }
    }
    //兼容如果气泡没有被加载的情况
    public onLoadBubbleCallBack(prefabPath: string, pb: Prefab, ...params: any): UIBubble {
        let pbNode = instantiate(pb);
        let com = pbNode.getComponent(UIBubble);
        if (com == null) {
            console.error(`气泡没有绑定UIBubble组件`);
            return;
        } else {
            com.fid = `${prefabPath}_${Utils.getAccurateTimeStamp() + "_" + Math.fround(Math.random() * 10000)}`;
        }
        console.log(com.fid);
        this.ndBubble.addChild(com.node);
        if (!this.bubbleMap.has(prefabPath)) {
            this.bubbleMap.set(prefabPath, []);
        }
        this.bubbleMap.get(prefabPath).push(com);
        com.onShow(...params);
        com.showEffect();
        let arr = this.bubbleMap.get(prefabPath);
        for (let idx = 0; idx < arr.length; idx++) {
            arr[idx].resortBubble(idx, arr.length);
        }
    }

    /**
     * 关闭一个UIForm
     * @prefabPath
     */
    public async closeForm(prefabPath: string): Promise<boolean> {
        console.log("closeForm关闭", prefabPath);
        if (!prefabPath || prefabPath.length <= 0) {
            warn(`${prefabPath}`, "参数错误");
            return false;
        }
        let path = prefabPath.split("_")[0];
        let com = this.allForms[prefabPath];
        if (!com && path.length == prefabPath.length) {
            console.log("closeForm中的com不存在");
            return false;
        }
        if (com == null && path.length != prefabPath.length) {
            for (let i = 0; i < this.bubbleMap.get(path).length; i++) {
                if (this.bubbleMap.get(path)[i].fid == prefabPath) {
                    com = this.bubbleMap.get(path)[i];
                    break;
                }
            }
        }
        if (!com) {
            console.log("closeForm中的com不存在");
            return false;
        }
        switch (com.formType) {
            case FormType.FormType_Screen:
                await this.exitToScreen(prefabPath);
                break;
            case FormType.FormType_Fixed:
                await this.exitToFixed(prefabPath);
                break;
            case FormType.FormType_Popup:
                await this.exitToPopup(prefabPath);
                break;
            case FormType.FormType_Float:
                await this.exitToFloat(prefabPath);
                break;
            case FormType.FormType_Win:
                await this.exitToWin(prefabPath);
                break;
            case FormType.FormType_Loading:
                await this.exitToLoading(prefabPath);
                break;
            case FormType.FormType_Bubble:
                await this.exitToBubble(prefabPath);
                break;
        }
        return true;
    }

    /**
     * 退出loading
     * @param prefabPath 
     * @returns 
     */
    private async exitToLoading(prefabPath: string) {
        console.log(`${prefabPath}exitToLoading`);
        let com = this.allForms[prefabPath];
        if (!com) {
            return false;
        }
        com.onHide();
        await com.hideEffect();
        //com.node.removeFromParent();
        com.node.destroy();
        ResMgr.getInstance().destoryForm(prefabPath);
        this.loading = null;
        delete this.allForms[prefabPath];
    }

    /**
     * screen退出
     * @param prefabPath 
     * @returns 
     */
    private async exitToScreen(prefabPath: string) {
        console.log(`${prefabPath}exitToScreen`);
        let com = this.allForms[prefabPath];
        if (!com) {
            return false;
        }
        //screen的退出必须是按照栈退出
        let tcom = this.screensStack.pop();
        if (tcom != com) {
            warn(`${prefabPath}screen没有按顺序退出`);
            return;
        }
        let nextCom = this.screensStack.getTopElement();
        if (nextCom != null) {
            nextCom.node.active = true;
            //界面重新被激活
            nextCom.reShow();
        }
        com.onHide();
        //如果不是独占 （这里其实不用判断是否是独占，只要判定还有screen就显示出来就可以了）
        if (com.getHideEffectTime() > 0) {
            await com.hideEffect();
        }
        //节点需要从父节点移除
        com.node.destroy();
        //com.node.removeFromParent();
        ResMgr.getInstance().destoryForm(prefabPath);
        delete this.allForms[prefabPath];
        console.log(prefabPath, "exittoscreen 成功");
        let maskNode = this.screenMasks[prefabPath];
        if (maskNode != null && maskNode != undefined) {
            if (!this.reBackMaskNode(maskNode)) {
                maskNode.destroy();
                ResMgr.getInstance().destoryForm("Lobby/Prefabs/UIMask");
            }
            delete this.screenMasks[prefabPath];
        }
    }

    //附着节点退出
    private async exitToFixed(prefabPath: string) {
        let com = this.allForms[prefabPath];
        if (!com) {
            return;
        }
        com.onHide();
        await com.hideEffect();
        //com.node.removeFromParent();
        com.node.destroy();
        delete this.allForms[prefabPath];
    }

    //popup节点退出
    private async exitToPopup(prefabPath: string) {

        if (this.popupsArr.length <= 0) {
            return;
        }
        //let data = ResMgr.getInstance().splitFormName(prefabPath);

        if (this.popupsArr.length > 0) {
            let com: UIPopup | null = null;
            let arr: UIPopup[] = [];
            for (let k = 0; k < this.popupsArr.length; k++) {
                if (this.popupsArr[k].getComponent(UIPopup)!.fid == prefabPath) {
                    com = this.popupsArr[k].getComponent(UIPopup)!;
                } else {
                    arr.push(this.popupsArr[k].getComponent(UIPopup)!);
                }
            }
            this.popupsArr = arr;

            if (com) {
                com.onHide();
                let maskNode = this.winMasks[com.fid];
                if (maskNode) {
                    let t = com.getHideEffectTime();
                    Tween.stopAllByTarget(maskNode);
                    tween<UIOpacity>(maskNode.getComponent(UIOpacity)!).to(t, { opacity: 0 }, { easing: "linear" }).call(() => {
                        if (!this.reBackMaskNode(maskNode)) {
                            maskNode.destroy();
                            ResMgr.getInstance().destoryForm("Lobby/Prefabs/UIMask");
                        }
                    }).start();
                }
                delete this.winMasks[com.fid];
                let arr: UIBase[] = this.getModelTypeComs();
                ModalMgr.getInstance().checkModalWinAndPopUp(arr, this.winMasks, false);
                await com.hideEffect();
                //com.node.removeFromParent();
                com.node.destroy();
                ResMgr.getInstance().destoryForm(com.fid);
            }
        }

        delete this.allForms[prefabPath];
    }

    /**
     * 对弹出来的popup进行重新排序
     * @param popup 
     */
    public reSortPopup(popup: UIPopup) {
        if (this.popupsArr.length > 0) {
            let tIdx = popup.node.getSiblingIndex();
            let maxIdx = this.popupsArr[this.popupsArr.length - 1].node!.getSiblingIndex();
            let bigger: boolean = false;
            for (let k = 0; k < this.popupsArr.length; k++) {
                if (this.popupsArr[k].fid == popup.fid) {
                    bigger = true;
                    continue;
                }
                if (bigger == false) {
                    this.popupsArr[k].node.setSiblingIndex(k);
                }
                if (bigger) {
                    this.popupsArr[k].node.setSiblingIndex(k - 1);
                }
            }
            popup.node.setSiblingIndex(this.popupsArr.length - 1);
        }
    }


    //float节点退出
    private async exitToFloat(prefabPath: string) {
        let com: UIFloat | null = null;
        let tIdx: number = -1;
        if (this.floatArr.length > 0) {
            for (let k = 0; k < this.floatArr.length; k++) {
                if (this.floatArr[k].fid == prefabPath) {
                    tIdx = k;
                    com = this.floatArr[k];
                    break;
                }
            }
        }
        if (tIdx >= 0 && tIdx < this.floatArr.length) {
            com!.onHide();
            await com!.hideEffect();
            //com!.node.removeFromParent();
            com!.node.destroy();
            ResMgr.getInstance().destoryForm(prefabPath);
            this.floatArr.splice(tIdx, 1);
        }
        delete this.allForms[prefabPath];
    }

    //退出
    private async exitToWin(prefabPath: string) {
        let com: UIWindow | null = null;
        let tIdx: number = -1;
        if (this.winArr.length > 0) {
            for (let k = 0; k < this.winArr.length; k++) {
                if (this.winArr[k].fid == prefabPath) {
                    tIdx = k;
                    com = this.winArr[k];
                    break;
                }
            }
        }
        if (tIdx >= 0 && tIdx < this.winArr.length) {
            this.winArr.splice(tIdx, 1);
            com!.onHide();
            let maskPath = com!.fid;
            let maskNode = this.winMasks[maskPath];
            if (maskNode) {
                let t = com!.getHideEffectTime();
                //消失要有消失动画
                Tween.stopAllByTarget(maskNode);
                if (t > 0) {
                    tween<UIOpacity>(maskNode.getComponent(UIOpacity)!).to(t, { opacity: 0 }, { easing: "linear" }).call(() => {
                        //maskNode.removeFromParent();
                        if (!this.reBackMaskNode(maskNode)) {
                            maskNode.destroy();
                            ResMgr.getInstance().destoryForm("Lobby/Prefabs/UIMask");
                        }
                    }).start();
                } else {
                    if (!this.reBackMaskNode(maskNode)) {
                        maskNode.destroy();
                        ResMgr.getInstance().destoryForm("Lobby/Prefabs/UIMask");
                    }
                }
            }
            delete this.winMasks[maskPath];
            let arr: UIBase[] = this.getModelTypeComs();
            ModalMgr.getInstance().checkModalWinAndPopUp(arr, this.winMasks, false);
            //只有需要动画的时候才执行对应点额缓存
            let hideTime = com.getHideEffectTime();
            if (hideTime > 0) {
                await com!.hideEffect();
            }
            com!.node.destroy();
            ResMgr.getInstance().destoryForm(prefabPath);
        }
        delete this.allForms[prefabPath];
    }

    //判断一个界面是否正在显示
    public checkFormShowing(prefabPath: string): boolean {
        let com = this.allForms[prefabPath];
        if (!com) {
            return false;
        }
        return com.node.active;
    }
    public checkFormLoading(prefabPath: string) {
        let com = this.loadingForms[prefabPath];
        return !!com;
    }
    public async clearWindows() {

    }





    public getComponentByFid(fid: string) {

    }


    public clearAllForRestart() {

    }

    public async closeAllWin() {
        while (this.winArr.length > 0) {
            await this.winArr[this.winArr.length - 1].closeSelf();
        }
    }
}
