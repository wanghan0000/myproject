import { _decorator, Component, Node } from 'cc';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
const { ccclass, property } = _decorator;

@ccclass('UITienlenShopLog')
export class UITienlenShopLog extends UIWindow {
    start() {

    }

    update(deltaTime: number) {
        
    }


    //界面打开
    onShow(){
        //增加 商城中的 购买日志记录
    }

    //界面关闭
    onHide(){
        EventMgr.getInstance().removeByTarget(this);
    }



    onBtnClose(){
        this.closeSelf();
    }

}

