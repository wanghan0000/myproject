
import { _decorator, Component, Node, Tween, Vec3, tween, Label } from 'cc';
import { EventMgr } from '../../../events/eventmgr';
import { EventName } from '../../../events/EventName';
import { ComNetMgr } from '../../../gamestate/ComNetMgr';
import { PlayerState, PlayerStateMgr } from '../../../gamestate/PlayerState';
import { UIWindow } from '../../../UIFrame/UIForm';

const { ccclass, property } = _decorator;

@ccclass('UIReconnect')
export class UIReconnect extends UIWindow {


    private lblTips: Label | null = null;
    private cnt: number = 0;
    public onShow(params: any): void {
        // this.lblTips = this.node.getChildByName("Label")!.getComponent(Label);
        // tween(this.lblTips).sequence(
        //     tween().delay(0.5).call(()=>{
        //         let str = "";
        //         for (let k = 0;k<this.cnt;k++){
        //             str = str + ".";
        //         }
        //         this.lblTips!.string = "网络连接断开,正在连接中" + str;
        //         this.cnt ++;
        //         if (this.cnt >=3){
        //             this.cnt = 0;
        //         }
        //     })
        // ).repeatForever().start();


        //2秒后重新执行连接
        
        EventMgr.getInstance().addEventListener(EventName.Socket_connect_open, this.onSocketOpen.bind(this), this);
        EventMgr.getInstance().addEventListener(EventName.Socket_Connect_close, this.onSocketConnectClose.bind(this), this);
        EventMgr.getInstance().addEventListener(EventName.Socket_connect_Error,this.onSocketError.bind(this),this);
        EventMgr.getInstance().addEventListener(EventName.Reconnect_complete, this.onReconenctComplete.bind(this), this);
        this.onSocketConnectClose();
    }

    public onSocketOpen() {
        //this.closeSelf();
    }

    public onReconenctComplete() {
        this.closeSelf();
    }

    public onSocketError(){
        console.log("在断线重连界面，连接失败。重新连接");
        this.scheduleOnce(()=>{
            //如果当前的状态不是正在重新连接
            console.log(PlayerStateMgr.getInstance().getPlayerState(),"xxxxxxyyyy");
            if(PlayerStateMgr.getInstance().getPlayerState() != PlayerState.Reconnecting){
                console.log("去执行连接yyyyyyyy");
                ComNetMgr.getInstance().doReconnect();
            }
        },2);
    }


    public onSocketConnectClose() {
        //2秒 后重新连接
        this.scheduleOnce(() => {
            console.log(PlayerStateMgr.getInstance().getPlayerState(),"xxxxxx");
            if(PlayerStateMgr.getInstance().getPlayerState() != PlayerState.Reconnecting){
                //如果当前的状态不是正在重新连接
                console.log("去执行连接xxxxx");
                ComNetMgr.getInstance().doReconnect();
            }
        }, 2)
    }


    public onHide(): void {
        Tween.stopAllByTarget(this.lblTips!);
        // EventMgr.getInstance().removeByEvent(EventName.Socket_connect_open);
        // EventMgr.getInstance().removeByEvent(EventName.Socket_Connect_close);
        // EventMgr.getInstance().removeByEvent(EventName.Reconnect_complete);
        EventMgr.getInstance().removeByTarget(this);
    }


    public async showEffect(): Promise<boolean> {
        Tween.stopAllByTarget(this.node);
        this.node.setScale(new Vec3(0, 0, 1));
        return new Promise<boolean>((resolve, reject) => {
            tween(this.node).to(0.5, { "scale": new Vec3(1, 1, 1) }, { easing: "backOut" }).call(() => {
                resolve(true);
            }).start();
        });
    }

    public getShowEffectTime(): number {
        return 0.5;
    }

    public getHideEffectTime(): number {
        return 0.5;
    }

    public async hideEffect(): Promise<boolean> {
        Tween.stopAllByTarget(this.node);
        this.node.setScale(new Vec3(1, 1, 1));
        return new Promise<boolean>((resolve, reject) => {
            tween(this.node).to(0.5, { "scale": new Vec3(0, 0, 1) }, { easing: "backIn" }).call(() => {
                resolve(true);
            }).start();
        });
    };

}

