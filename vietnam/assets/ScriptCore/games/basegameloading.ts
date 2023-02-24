
import { _decorator, Component, Node, sp, Label, ProgressBar } from 'cc';
import { UserData } from '../data/UserData';
import { EventMgr } from '../events/eventmgr';
import { EventName } from '../events/EventName';
import { UIWindow } from '../UIFrame/UIForm';
import { UIRoot } from '../UIFrame/UIRoot';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = Basegameloading
 * DateTime = Tue Sep 07 2021 10:50:14 GMT+0800 (中国标准时间)
 * Author = shawngao
 * FileBasename = basegameloading.ts
 * FileBasenameNoExtension = basegameloading
 * URL = db://assets/ScriptCore/games/basegameloading.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
 *
 */

@ccclass('BaseGameLoading')
export class BaseGameLoading extends UIWindow {

    protected bg: Node | null = null;
    protected logo: Node | null = null;
    protected progress: Node | null = null;
    protected lblProTxt: Node | null = null;
    protected curAniName = "";
    protected chuchangAniName = "chuchang";
    protected daijiAniName = "daiji";
    protected ruchangAniName = "ruchang";



    //0:还没有开始loading
    //1:正在loading
    //2:loading结束
    protected loadState: number = 0;

    public onShow(...params: any) {
        this.bg = this.node.getChildByName("bg");
        this.logo = this.node.getChildByName("logo");
        this.progress = this.node.getChildByName("ProgressBar");
        this.lblProTxt = this.node.getChildByName("lblpro");
        this.logo!.getComponent(sp.Skeleton)?.setCompleteListener(this.onAnimationCallBack.bind(this));
        this.updateProgress(0);
        // this.scheduleOnce(() => {
        //     this.startRuChang();
        // }, 0)
    }

    //入场动画播放的回调，开始加载资源
    private startRuChangCallBack: Function = null;
    //开始入场
    public startRuChang(cb: Function = null) {
        this.curAniName = this.ruchangAniName;
        this.startRuChangCallBack = cb;
        this.logo!.getComponent(sp.Skeleton)?.setAnimation(0, this.curAniName, false);
        this.lblProTxt!.getComponent(Label)!.string = "0/100";
        this.progress!.getComponent(ProgressBar)!.progress = 0;
        this.loadState = 0;
    }

    //更新进度变换
    updateProgress(val: number) {
        this.loadState = 1;
        this.lblProTxt!.getComponent(Label)!.string = `${Math.round(val * 100)}/100`;
        this.progress!.getComponent(ProgressBar)!.progress = val;
    }

    //加载完成
    setLoadinEndCallBack() {
        console.log("开始播放出场动画===");
        this.loadState = 2;
        this.curAniName = this.chuchangAniName;
        this.logo!.getComponent(sp.Skeleton)?.setAnimation(0, this.curAniName, false);
    }

    onAnimationCallBack() {
        if (this.curAniName == this.ruchangAniName) {
            //开始播放待机动画
            this.curAniName = this.daijiAniName;
            if (this.startRuChangCallBack != null) {
                this.startRuChangCallBack();
                this.startRuChangCallBack = null;
            }
            this.logo!.getComponent(sp.Skeleton)?.setAnimation(0, this.curAniName, true);
        } else if (this.curAniName == this.chuchangAniName) {
            //出场动画播放完成，则退出界面
            console.log("待机动画播放完成");
            this.scheduleOnce(() => {
                this.closeSelf();
            }, 0);
            EventMgr.getInstance().dispatchEvent(EventName.ON_LOADING_ANI_COMPLETED);
            UserData.getInstance().setGameFreeId(0);
            UserData.getInstance().setGameId(0);
        } else if (this.curAniName == this.daijiAniName && this.loadState == 2) {
            //待机动画播放完成并且加载完成了 就播放出场动画
            //console.log("开始播放出场动画");
            // this.curAniName = this.chuchangAniName;
            // this.logo!.getComponent(sp.Skeleton)!.setAnimation(0,this.curAniName,false);
        }
    }


    public onHide() {

    }

    public showEffect(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        })
    }
    public hideEffect(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        })
    }

    public getShowEffectTime(): number {
        return 0;
    }

    public getHideEffectTime(): number {
        return 0;
    }

}
