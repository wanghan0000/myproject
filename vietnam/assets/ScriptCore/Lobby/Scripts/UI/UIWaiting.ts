
import { _decorator, Component, Node } from 'cc';
import { FormType } from '../../../UIFrame/config/SysDefine';
import { UIBase } from '../../../UIFrame/UIBase';
import { UIWindow } from '../../../UIFrame/UIForm';
const { ccclass, property } = _decorator;

@ccclass('UIWaiting')
export class UIWaiting extends UIWindow {

    start () {
        
    }

    onLoad(){

    }


    public onShow(params:any){
        
    }

    public onHide(){

    }

    // public async showEffect():Promise<boolean>{
    //     console.log("UIWaiting.showEffect");
    //     return new Promise<boolean>((resolve,reject)=>{
    //         resolve(true);
    //     });
    // }

    // public async hideEffect():Promise<boolean>{
    //     console.log("UIWaiting.hideEffect");
    //     return new Promise<boolean>((resolve,reject)=>{
    //         resolve(true);
    //     });
    // }

}

