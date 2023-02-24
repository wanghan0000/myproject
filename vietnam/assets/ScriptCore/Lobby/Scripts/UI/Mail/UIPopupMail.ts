import { _decorator, Component, Node } from 'cc';

import { UIWindow } from '../../../../UIFrame/UIForm';
const { ccclass, property } = _decorator;

@ccclass('UIPopupMail')
export class UIPopupMail extends UIWindow {
    @property(Node)
    public nodeBox: Node | null = null;
    @property(Node)
    public prefabItem: Node | null = null;
    @property(Node)
    public content: Node | null = null;

    show () {
        //var self =_this= this;
        //this.content.removeAllChildren();
        //TweenAnimation.showPopup(self.nodeBox,self.node);
        //UIPopupManager.Instance.showLoading();
    }

    hide () {
        
    }


    public onBtnExit(event:Event,customData:any){
        this.closeSelf();
    }

    responseGetAll (data: any) {
        //UIPopupManager.Instance.hideLoading();
        //cc.log("responseGetAll:"+JSON.stringify(data));
        //for(var i=0;i<data.length;i++){
        //    var nodeItem = cc.instantiate(_this.prefabItem);
        //    nodeItem.parent = _this.content;
        //    nodeItem.getComponent("UIItemMail").init(i,data[i]);
        //}
    }

    onBtnDeleteAll () {
        //this.content.removeAllChildren();
    }

}