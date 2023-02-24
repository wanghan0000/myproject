
import { _decorator, Component, Node, Label, Tween, tween, Vec3, easing, TiledUserNodeData, UIOpacity } from 'cc';
import {  UIBubble } from '../../../UIFrame/UIForm';
const { ccclass, property } = _decorator;

@ccclass('UITxtTips')
export class UITxtTips extends UIBubble {

    //modalType = new ModalType(ModalOpacity.None);



    private onCallBackEndCallBack:Function | null = null;
    public onShow(params:any):void{
        super.onShow(params);
        let str = params.txt;
        //this.onCallBackEndCallBack = params.cb;
        let lbl = this.node.getChildByName("movenode").getChildByName("labeltxt");
        lbl!.getComponent(Label)!.string = str;
        //this.doAni();
    }
    // private doAni(){
        
        
    //     Tween.stopAllByTarget(this.node);
    //     this.node.position = new Vec3(0,50,0);
    //     tween(this.node).delay(0.5).to(0.5,{position:new Vec3(0,300,0)},{easing:"linear"}).union().start();

    //     Tween.stopAllByTarget(this.node.getComponent(UIOpacity)!);
    //     this.node.getComponent(UIOpacity)!.opacity = 255;
    //     tween<UIOpacity>(this.node.getComponent(UIOpacity)!).delay(0.5).to(0.5,{opacity:0},{easing:"linear"}).call(()=>{
    //         if (this.onCallBackEndCallBack != null){
    //             //消失的时候执行以下回调
    //             this.onCallBackEndCallBack();
    //         }
    //         this.closeSelf();
    //     }).union().start();
    // }

    // public async showEffect():Promise<boolean>{
    //     return new Promise<boolean>((resolve,reject)=>{
    //         resolve(true);
    //     })
    // }

    // public reset(params:any){
    //     let str = params.txt;
    //     let lbl = this.node.getChildByName("labeltxt");
    //     lbl!.getComponent(Label)!.string = str;
    //     this.doAni();
    // }

    //强制修复位置
    // public forceMotifyPostion(x:number,y:number):void{
    //     console.log(x,y,"foreMotifyPostion=======");
    //     this.node.position = new Vec3(x,y,0);
    // }

    // public onHide():void{
    //     super.onHide();
    // }
}


