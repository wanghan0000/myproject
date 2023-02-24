
import { _decorator, Component, Node, Button, EventHandler, Label, RichText } from 'cc';

import { AudioMgr } from '../../../audio/AudioMgr';
import { LobbyAudioCfg } from '../../../audio/LobbyAudioCfg';
import { UIWindow } from '../../../UIFrame/UIForm';


import { LocalizedLabel } from 'db://i18n/LocalizedLabel';

const { ccclass, property } = _decorator;

@ccclass('UIPopupAlert')
export class UIPopupAlert extends UIWindow {


    //确定按钮
    private btnConfirm: Node | null = null;
    //取消按钮
    private btnCancel: Node | null = null;

    //要显示的内容
    private txtLbl: Node | null = null;
    //富文本
    private richText:Node | null = null;
    start() {
    }


    private initView() {

        this.btnConfirm = this.node!.getChildByName("btnconfirm");
        this.btnCancel = this.node!.getChildByName("btncancel");
        this.txtLbl = this.node!.getChildByName("lbl");
        this.richText = this.node.getChildByName("richtxt");
        if(this.isRichTxt){
            this.txtLbl.active = false;
            this.richText.active = true;
            this.richText.getComponent(RichText).string = this.txt;
        }else{
            this.txtLbl.active = true;
            this.richText.active = false;
            this.txtLbl.getComponent(Label).string = this.txt;
        }
        
    }




    public onCancelClick() {
        if (this.cancelCb != null) {
            this.cancelCb();
        }
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.closeSelf();
    }

    public onConformClick() {
        if (this.confirmCb != null) {
            this.confirmCb();
        }
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.closeSelf();
    }

    //确定的回调
    private confirmCb: Function | null = null;
    //取消回调
    private cancelCb: Function | null = null;

    private isRichTxt:boolean = false;

    //弹框上显示的内容
    private txt: string = "";
    //按钮的线上情况
    private btnState: string[] = [];
    /**
     * 希望的参数
     * str:string,btnState:string[],confirm?:Function,cancel?:Function
     * 
     * @param params 
     */
    public onShow(params: any): void {
        if(params.isRichTxt){
            this.isRichTxt = params.isRichTxt;
        }
        let str = params.str as string;
        if (params.confirm !== null) {
            this.confirmCb = params.confirm as Function;
        }
        if (params.cancel !== null) {
            this.cancelCb = params.cancel as Function;
        }
        if (params.str != null) {
            this.txt = params.str;
        }
        this.initView();
        this.updateView();
    }


    //更新view内容
    private updateView() {
        // this.btnConfirm!.active = false;
        // this.btnCancel!.active = false;
        // this.btnClose!.active = false;
        // if (this.btnState == null || this.btnState == undefined || this.btnState.length == 0) {
        //     this.btnConfirm!.active = true;
        //     this.btnCancel!.active = true;
        //     this.btnClose!.active = true;
        // } else {
        //     if (this.btnState.indexOf("confirm") != -1) {
        //         this.btnConfirm!.active = true;
        //     }
        //     if (this.btnState.indexOf("cancel") != -1) {
        //         this.btnCancel!.active = true;
        //     }
        //     if (this.btnState.indexOf("close") != -1) {
        //         this.btnClose!.active = true;
        //     }
        // }
        // this.txtLbl!.getComponent(Label)!.string = this.txt;
    }

}

