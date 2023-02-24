import { EventTouch, Node, Primitive, Size, tween, Tween, UIOpacity, UITransform, v2, v3, Vec3, view } from "cc";
import { TweenAnimation } from "../Lobby/Scripts/General/TweenAnimation";
import { Utils } from "../panda/utils/Utils";
import { ProjectConfig } from "../ProjectConfig";
import { BubbleAppearType, BubbleDisAppearType, FormType, ModalOpacity } from "./config/SysDefine";
import { ModalType } from "./Struct";
import { UIBase } from "./UIBase";
import { UIManager } from "./UIManager";
import { UIRoot } from "./UIRoot";



export class UILoading extends UIBase {
    formType = FormType.FormType_Loading;

    public async showEffect(): Promise<boolean> {
        return true;
    }

    public async hideEffect(): Promise<boolean> {
        return true;
    }

    public onShow(...params: any): void {
        super.onShow(...params);
    }

    public onHide(): void {
        super.onHide();
    }
}

export class UIScreen extends UIBase {

    public standOnWithOutDisactive :boolean = false


    formType = FormType.FormType_Screen;
    willDestory = true;
    //是否独占。如果UIScreen设置该属性，则打开该窗体，其他screen都会被关闭，否则不关闭
    public isEngross: boolean = false;
    public is3d: boolean = false;
    public params: any;

    public isOnleyEngross: boolean = false;


    //覆盖父类方法全屏不展示出现效果
    public async showEffect(): Promise<boolean> {
        return true;
    }

    public async hideEffect(): Promise<boolean> {
        return true;
    }

    public getShowEffectTime():number{
        return 0;
    }

    public getHideEffectTime():number{
        return 0;
    }

    public onShow(...params: any): void {
        super.onShow(...params);
    }



    public reShow() {
        super.reShow();
    }

    public onHide(): void {
        super.onHide();
    }
}

export class UIFixed extends UIBase {
    formType = FormType.FormType_Fixed;

    //是否可以被拖动
    protected isDragable: boolean = true;
    //是否需要自动靠边  如果是屏幕正中间 [屏幕中间 左右200个像素 则 保持不动，拖动到哪里就是哪里]
    protected isAutoAlign: boolean = true;

    protected startX: number = 0;
    protected startY: number = 0;

    private touchSX: number | null = null;
    private touchSY: number | null = null;


    protected isDraged: boolean = false;
    /*
    定义第一个参数为fixed的坐标x的位置 第二个参数为坐标y的位置
    */
    public onShow(...params: any): void {
        if (this.isDragable) {
            this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
            this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMoved.bind(this));
            this.node.on(Node.EventType.TOUCH_END, this.onTouchEnded.bind(this));
            this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancelled.bind(this));
        }
        if (params[0] != null) {
            this.startX = params[0] as number;
        }
        if (params[1] != null) {
            this.startY = params[1] as number;
        }
        this.node.position = new Vec3(this.startX, this.startY, 0);
    }


    onDisable() {
        if (this.isDragable) {
            this.node.off(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
            this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMoved.bind(this));
            this.node.off(Node.EventType.TOUCH_END, this.onTouchEnded.bind(this));
            this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancelled.bind(this));
        }
    }

    //按下
    onTouchStart(event: EventTouch) {
        this.touchSX = event.getUILocation().x;
        this.touchSY = event.getUILocation().y;
        this.isDraged = false;
    }
    //移动
    onTouchMoved(event: EventTouch) {
        if (this.touchSX != null && this.touchSY != null) {
            let offx = event.getUILocation().x - this.touchSX;
            let offy = event.getUILocation().y - this.touchSY;
            this.node.position = new Vec3(this.startX + offx, this.startY + offy, 0);
            if (Math.sqrt(offx * offx + offy * offy) >= 20) {
                this.isDraged = true;
            }
        }
    }
    //松开
    onTouchEnded() {
        this.touchSX = null;
        this.touchSY = null;
        this.startX = this.node.position.x;
        this.startY = this.node.position.y;
        if (this.isDraged) {
            this.chkAlign();
        }

    }
    //取消
    onTouchCancelled() {
        this.touchSX = null;
        this.touchSY = null;
        this.startX = this.node.position.x;
        this.startY = this.node.position.y;
        if (this.isDraged) {
            this.chkAlign();
        }

    }

    //判定是否需要自动对其到边界或者中间坐标
    protected chkAlign() {
        if (this.isAutoAlign) {

            let width = view.getVisibleSize().x;
            Tween.stopAllByTarget(this.node);
            let tgx = this.startX;
            if (tgx > 0) {
                tgx = width / 2 - 100;
            } else {
                tgx = -width / 2 + 100;
            }
            tween(this.node).to(0.5, { position: new Vec3(tgx, this.startY, 0) }, { easing: "backOut" }).call(() => {
                this.startX = tgx;
            }).start();

        }
    }


    public async showEffect(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }

    public async hideEffect(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }

}

export class UIPopup extends UIBase {
    formType = FormType.FormType_Popup;

    modalType = new ModalType();


    //是否可拖动
    protected isDragable: boolean = false;
    //是否拖拽过
    protected isDraged: boolean = false;
    protected startX: number = 0;
    protected startY: number = 0;

    private touchSX: number | null = null;
    private touchSY: number | null = null;

    public onShow(...params: any): void {
        super.onShow(...params);
        //这里可能需要修改哪里可以拖拽 todo dev
        if (this.isDragable) {
            this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
            this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMoved.bind(this));
            this.node.on(Node.EventType.TOUCH_END, this.onTouchEnded.bind(this));
            this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancelled.bind(this));
        }
    }


    public onDisable() {
        if (this.isDragable) {
            this.node.off(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
            this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMoved.bind(this));
            this.node.off(Node.EventType.TOUCH_END, this.onTouchEnded.bind(this));
            this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancelled.bind(this));
        }
    }

    //按下
    onTouchStart(event: EventTouch) {
        this.touchSX = event.getUILocation().x;
        this.touchSY = event.getUILocation().y;
        this.isDraged = false;
    }
    //移动
    onTouchMoved(event: EventTouch) {
        if (this.touchSX != null && this.touchSY != null) {
            let offx = event.getUILocation().x - this.touchSX;
            let offy = event.getUILocation().y - this.touchSY;
            this.node.position = new Vec3(this.startX + offx, this.startY + offy, 0);
            if (Math.sqrt(offx * offx + offy * offy) >= 20) {
                this.isDraged = true;
            }
        }
    }
    //松开
    onTouchEnded() {
        this.touchSX = null;
        this.touchSY = null;
        this.startX = this.node.position.x;
        this.startY = this.node.position.y;
        UIManager.getInstance().reSortPopup(this);
    }
    //取消
    onTouchCancelled() {
        this.touchSX = null;
        this.touchSY = null;
        this.startX = this.node.position.x;
        this.startY = this.node.position.y;
    }


    public onHide(): void {
        super.onHide();
    }


    public getShowEffectTime(): number {
        return 0.5;
    }

    public getHideEffectTime(): number {
        return 0.3;
    }

    public async showEffect(): Promise<boolean> {
        this.node.setScale(new Vec3(0, 0, 1));
        Tween.stopAllByTarget(this.node);
        return new Promise<boolean>((resolve, reject) => {
            tween(this.node).to(0.5, { scale: new Vec3(1, 1, 1) }, { easing: "backOut" }).call(() => {
                resolve(true);
            }).start();
        });
    }

    public async hideEffect(): Promise<boolean> {
        this.node.setScale(new Vec3(1, 1, 1));
        Tween.stopAllByTarget(this.node);
        return new Promise<boolean>((resolve, reject) => {
            tween(this.node).to(0.3, { scale: new Vec3(0, 0, 1) }, { easing: "backIn" }).call(() => {
                resolve(false);
            }).start();
        });
    }

}


export class UIFloat extends UIBase {
    formType = FormType.FormType_Float;

    //是否可以被拖动
    protected isDragable: boolean = true;
    //是否需要自动靠边  如果是屏幕正中间 [屏幕中间 左右200个像素 则 保持不动，拖动到哪里就是哪里]
    protected isAutoAlign: boolean = true;

    protected startX: number = 0;
    protected startY: number = 0;

    private touchSX: number | null = null;
    private touchSY: number | null = null;


    protected isDraged: boolean = false;
    /*
    默认第一个参数为 startx,starty标识坐标位置
    */
    public onShow(...params: any): void {
        super.onShow(...params)
        if (this.isDragable) {
            this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
            this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMoved.bind(this));
            this.node.on(Node.EventType.TOUCH_END, this.onTouchEnded.bind(this));
            this.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancelled.bind(this));
        }
        if (params[0] != null) {
            this.startX = params[0] as number;
        }
        if (params[1] != null) {
            this.startY = params[1] as number;
        }
        this.node.position = new Vec3(this.startX, this.startY, 0);
        //解决有spine动画后，节点 错位的bug。可能是引擎的问题，暂时这么处理一下。
        //这肯定是一个bug要么是引擎的，要么是哪里做的不合理。todo fix
        this.scheduleOnce(() => {
            this.node.position = new Vec3(this.startX, this.startY, 0);
        }, 0.01)
    }


    onDisable() {
        if (this.isDragable) {
            this.node.off(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
            this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMoved.bind(this));
            this.node.off(Node.EventType.TOUCH_END, this.onTouchEnded.bind(this));
            this.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancelled.bind(this));
        }
    }

    //按下
    onTouchStart(event: EventTouch) {
        this.touchSX = event.getUILocation().x;
        this.touchSY = event.getUILocation().y;
        this.isDraged = false;
    }
    //移动
    onTouchMoved(event: EventTouch) {
        if (this.touchSX != null && this.touchSY != null) {
            let offx = event.getUILocation().x - this.touchSX;
            let offy = event.getUILocation().y - this.touchSY;
            this.node.position = new Vec3(this.startX + offx, this.startY + offy, 0);
            if (Math.sqrt(offx * offx + offy * offy) >= 20) {
                this.isDraged = true;
            }
        }
    }
    //松开
    onTouchEnded() {
        this.touchSX = null;
        this.touchSY = null;
        this.startX = this.node.position.x;
        this.startY = this.node.position.y;
        if (this.isDraged) {
            this.chkAlign();
        }
    }
    //取消
    onTouchCancelled() {
        this.touchSX = null;
        this.touchSY = null;
        this.startX = this.node.position.x;
        this.startY = this.node.position.y;
        if (this.isDraged) {
            this.chkAlign();
        }
    }

    //判定是否需要自动对其到边界或者中间坐标
    protected chkAlign() {
        if (this.isAutoAlign) {

            let width = view.getVisibleSize().x;
            Tween.stopAllByTarget(this.node);
            let tgx = this.startX;
            if (tgx > 0) {
                tgx = width / 2 - 100;
            } else {
                tgx = -width / 2 + 100;
            }
            tween(this.node).to(0.5, { position: new Vec3(tgx, this.startY, 0) }, { easing: "backOut" }).call(() => {
                this.startX = tgx;
            }).start();

        }
    }


    public async showEffect(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }

    public async hideEffect(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }
}

export class UIWindow extends UIBase {
    formType = FormType.FormType_Win;
    modalType = new ModalType();
    priority = 0;


    public onShow(...params: any): void {
        super.onShow(...params);
    }

    public onHide(): void {
        super.onHide();
    }

    //打开界面的效果。这里做默认效果。如果个别页面有特殊需求，则各自实现
    public async showEffect(): Promise<boolean> {
        Tween.stopAllByTarget(this.node);
        this.node.setScale(new Vec3(0, 0, 1));
        return new Promise<boolean>((resolve, reject) => {
            tween(this.node).to(0.5, { scale: new Vec3(1, 1, 1) }, { easing: "backOut" }).call(() => {
                resolve(true);
            }).start();
        });

    }

    public getShowEffectTime():number{
        return 0.5;
    }

    public async hideEffect(): Promise<boolean> {
        Tween.stopAllByTarget(this.node);
        return new Promise<boolean>((resolve, reject) => {
            tween(this.node).to(0.3, { scale: new Vec3(0, 0, 1) }, { easing: "backIn" }).call(() => {
                console.log("动画执行完成了");
                resolve(true);
            }).start();
        });

    }

    public  getHideEffectTime():number{
        return 0.3;
    }

}


/**
 * 气泡的种类
 * 1、飘字
 * 2、消息通知
 */
export class UIBubble  extends UIBase{
    //气泡类型
    formType = FormType.FormType_Bubble;
    //不处理拦截事件
    modalType = new ModalType(ModalOpacity.None,false);

    //默认居中
    protected appearType = BubbleAppearType.AppearType_CenterCenter;
    //默认中间网上移动，消失
    protected disAppearType = BubbleDisAppearType.DisappearType_MoveUp_FadeOut;

    //等待多长时间自动消失 默认是 1.5秒
    protected stayTime:number = 1.2;
    //0: 标识未开始 1：标识停留阶段 2：标识开始消失阶段
    private curStep:number = 0;
    //开始的时间，根据当前开始的时间
    private startTime = 0;

    /*
    获取气泡的大小  方便计算气泡的位置。
    如果 想在上下左右 留白的话 可以重载这个方法。这样就
    */
    protected getCurrentContentSize():Size{
        return this.node.getComponent(UITransform).contentSize;
    }


    public onShow(...params:any):void{
        let nodeSize = this.getCurrentContentSize();
        let bubbleSize = UIRoot.getInstance().getBubbleContentSize();
        if(this.appearType == BubbleAppearType.AppearType_CenterCenter){
            //中间出现
            this.node.setPosition(0,0);
        }else if(this.appearType == BubbleAppearType.AppearType_CenterTop){
            //中间 顶部出现
            this.node.setPosition(0,bubbleSize.height/2);
        }else if(this.appearType == BubbleAppearType.AppearType_RightBottom){
            //右侧 下角 出现
            this.node.setPosition(bubbleSize.width/2 - nodeSize.width/2,-bubbleSize.height/2 + nodeSize.height/2);
        }else if(this.appearType == BubbleAppearType.AppearType_RightTop){
            //右上角出现
            this.node.setPosition(bubbleSize.width/2 - nodeSize.width/2,bubbleSize.height/2-nodeSize.height/2);
        }
        this.curStep = 1;
    }


    //对气泡进行排序
    //idx 为 当前气泡的索引
    //allCnt 为当前总的气泡数
    //idx越大 ，越是最后出现的
    public resortBubble(idx:number,allCnt:number){
        let ri = allCnt - idx -1;
        let bubbleSize = this.getCurrentContentSize();
        
        if(this.appearType == BubbleAppearType.AppearType_CenterCenter){
            //出现在屏幕中间
            this.node.setPosition(0,0 + ri * bubbleSize.height);
        }else if(this.appearType == BubbleAppearType.AppearType_CenterTop){
            //屏幕的正上方
            this.node.setPosition(0,bubbleSize.height/2 - ri*bubbleSize.height);
        }else if(this.appearType == BubbleAppearType.AppearType_RightBottom){
            //屏幕的右下角
            this.node.setPosition(bubbleSize.width/2 - bubbleSize.width/2,-bubbleSize.height/2 + bubbleSize.height/2 + bubbleSize.height * ri);
        }else if(this.appearType == BubbleAppearType.AppearType_RightTop){
            //右上角出现
            this.node.setPosition(bubbleSize.width/2 - bubbleSize.width/2,bubbleSize.height/2-bubbleSize.height/2 - bubbleSize.height * ri);
        }



        if(this.disAppearType == BubbleDisAppearType.DisappearType_FadeOut){
            //渐隐消失
            let curTime = Utils.getAccurateTimeStamp();
            if(this.curStep == 1){
                //等待阶段
                let leftTime =  this.stayTime - (curTime - this.startTime)/1000;
                if(leftTime <=0){
                    leftTime = 0;
                }
                Tween.stopAllByTarget(this.node.getComponent(UIOpacity));
                tween<UIOpacity>(this.node.getComponent(UIOpacity)).delay(leftTime).call(()=>{
                    this.curStep = 2;
                }).to(0.3,{opacity:0},{easing:"backOut"}).call(()=>{
                    this.curStep = 3;
                    this.closeSelf();
                }).union().start();
            }else if(this.curStep == 2){
                Tween.stopAllByTarget(this.node.getComponent(UIOpacity));
                //开始消失阶段
                let leftTime = 0.3- ((curTime - this.startTime) - this.stayTime)/1000;
                if(leftTime <=0){
                    leftTime = 0;
                }
                tween<UIOpacity>(this.node.getComponent(UIOpacity)).to(leftTime,{opacity:0},{easing:"backOut"}).call(()=>{
                    this.curStep = 3;
                    this.closeSelf();
                }).union().start();
            }
        }else if(this.disAppearType == BubbleDisAppearType.DisappearType_MoveDown_FadeOut){
            //向下移动 消失
            let curTime = Utils.getAccurateTimeStamp();
            if(this.curStep == 1){
                Tween.stopAllByTarget(this.node.getComponent(UIOpacity));
                let leftTime =  this.stayTime - (curTime - this.startTime)/1000;
                if(leftTime <=0){
                    leftTime = 0;
                }
                tween<UIOpacity>(this.node.getComponent(UIOpacity)).delay(leftTime).call(()=>{
                    this.curStep = 2;
                }).to(0.3,{opacity:0},{easing:"backOut"}).call(()=>{
                    this.curStep = 3;
                    this.closeSelf();
                }).union().start();
            }else if(this.curStep == 2){
                //开始消失的阶段
                Tween.stopAllByTarget(this.node.getComponent(UIOpacity));
                //开始消失阶段
                let leftTime = 0.3- ((curTime - this.startTime) - this.stayTime)/1000;
                if(leftTime <=0){
                    leftTime = 0;
                }
                tween<UIOpacity>(this.node.getComponent(UIOpacity)).to(leftTime,{opacity:0},{easing:"backOut"}).call(()=>{
                    this.curStep = 3;
                    this.closeSelf();
                }).union().start();

            }
        }else if(this.disAppearType == BubbleDisAppearType.DisappearType_MoveUp_FadeOut){
            //向上移动消失
            let curTime = Utils.getAccurateTimeStamp();
            if(this.curStep == 1){
                Tween.stopAllByTarget(this.node.getComponent(UIOpacity));
                let leftTime =  this.stayTime - (curTime - this.startTime)/1000;
                if(leftTime<=0){
                    leftTime = 0;
                }
                tween<UIOpacity>(this.node.getComponent(UIOpacity)).delay(leftTime).call(()=>{
                    this.curStep = 2;
                }).to(0.3,{opacity:0},{easing:"backOut"})
                .call(()=>{
                    this.curStep = 3;
                    this.closeSelf();
                }).union().start();
            }else if(this.curStep == 2){
                //开始消失阶段
                Tween.stopAllByTarget(this.node.getComponent(UIOpacity));
                //开始消失阶段
                let leftTime = 0.3- ((curTime - this.startTime) - this.stayTime)/1000;
                if(leftTime <=0){
                    leftTime = 0;
                }
                tween<UIOpacity>(this.node.getComponent(UIOpacity)).to(leftTime,{opacity:0},{easing:"backOut"}).call(()=>{
                    this.curStep = 3;
                    this.closeSelf();
                }).union().start();
            }
        }
    }

    //在声明周几即将关闭的时候要停止掉所有的缓动动画
    public onHide():void{
        Tween.stopAllByTarget(this.node);
        Tween.stopAllByTarget(this.node.getComponent(UIOpacity));
        let movenode:Node = null;
        movenode = this.node.getChildByName("movenode");
        if(movenode != null && movenode != undefined && movenode.isValid){
            Tween.stopAllByTarget(movenode);
        }
        super.onHide();
    }
    
    //打开气泡的显示效果
    //这里仅仅处理 气泡的渐隐  移动要放到各自的对象中处理
    public async showEffect():Promise<boolean>{
        if(this.disAppearType == BubbleDisAppearType.DisappearType_FadeOut){
            //渐隐消失
            //tween(this.node).delay(1.5).delay()
            tween<UIOpacity>(this.node.getComponent(UIOpacity)).delay(this.stayTime).call(()=>{
                this.curStep = 2;
            }).to(0.3,{opacity:0},{easing:"backOut"}).call(()=>{
                this.curStep = 3;
                this.closeSelf();
            }).union().start();
            //毫秒
            this.startTime = Utils.getAccurateTimeStamp();
        }else if(this.disAppearType == BubbleDisAppearType.DisappearType_MoveDown_FadeOut){
            //向下移动 渐隐消失  子节点移动
            let movenode = this.node.getChildByName("movenode");
            tween(movenode).delay(this.stayTime).by(0.3,{position:v3(0,-80,0)},{easing:"backOut"}).start();

            tween<UIOpacity>(this.node.getComponent(UIOpacity)).delay(this.stayTime).call(()=>{
                this.curStep = 2;
            }).to(0.3,{opacity:0},{easing:"backOut"}).call(()=>{
                this.curStep = 3;
                this.closeSelf();
            }).start();
            //毫秒
            this.startTime = Utils.getAccurateTimeStamp();
        }else if(this.disAppearType == BubbleDisAppearType.DisappearType_MoveUp_FadeOut){
            //向上移动，并且渐隐消失
            let movenode = this.node.getChildByName("movenode");
            tween(movenode).delay(this.stayTime).by(0.3,{position:v3(0,80,0)},{easing:"backOut"}).union().start();

            tween<UIOpacity>(this.node.getComponent(UIOpacity)).delay(this.stayTime).call(()=>{
                this.curStep = 2;
            }).to(0.3,{opacity:0},{easing:"backOut"}).call(()=>{
                this.curStep = 3;
                this.closeSelf();
            }).union().start();
            //毫秒
            this.startTime = Utils.getAccurateTimeStamp();
        }else{
            return new Promise<boolean>((resolve,reject)=>{
                this.curStep = 2;
                resolve(true);
            })
        }
    }

    //关闭气泡的效果
    public async hideEffect():Promise<boolean>{
        return new Promise<boolean>((resolve,reject)=>{
            resolve(true);
        })
    }

}



