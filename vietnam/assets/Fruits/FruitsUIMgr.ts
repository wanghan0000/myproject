import { PoolManager } from "../ScriptCore/panda/utils/poolmgr";
import { UIManager } from "../ScriptCore/UIFrame/UIManager";
import { UIRoot } from "../ScriptCore/UIFrame/UIRoot";
import { FruitsEffectType } from "./script/FruitsEffectWin";
import { Node } from 'cc';
export class FruitsUIMgr {
    private static intstance: FruitsUIMgr = new FruitsUIMgr();

    public static getInstance(): FruitsUIMgr {
        return this.intstance
    }

    //打开水果机的选场
    public async showEnterUI() {
        return await UIManager.getInstance().openScreen("Fruits/pfb_room_ui");
    }

    //进入水果机
    public async showFruits() {
        return await UIManager.getInstance().openScreen("Fruits/prefab/pfb_fruits_game_ui");
    }

    //确认框是否退出
    public async showExitConfirm(cf: Function) {
        // let params: any = {};
        // params.confirmCb = cf;
        // return await UIManager.getInstance().openWin("FishHappy/prefab/pfb_messagebox", params);
    }

    //打开loading界面
    public async showLoading() {
        UIRoot.getInstance().RotationLandscape();
        return await UIManager.getInstance().openWin("Fruits/prefab/pfb_gameloadinglayer");
    }

    //打开水果玛丽界面
    public async showMaryUI(params:{exitCallBack:()=> void}) {
        return await UIManager.getInstance().openWin("Fruits/prefab/pfb_fruits_mary_ui",params);
    }

    //打开设置页面
    public async showHelpUI() {
        return await UIManager.getInstance().openScreen("Fruits/prefab/pfb_fruits_help_ui");
    }

    //打开动画效果
    public async showEffectUI(params:{coustomCallBack:(type:FruitsEffectType, mode: string)=> void , type: FruitsEffectType ,  bean:any ,freeShow?: boolean }){
        return await UIManager.getInstance().openWin("Fruits/prefab/pfb_fruits_effect_ui",params);
    }

    //打开玛丽结算页面
    public async showMarySettlementUI(params:{exitCallBack:()=> void , coinIn: number , coinOut: number}){
        return await UIManager.getInstance().openWin("Fruits/prefab/pfb_fruits_mary_settlement_ui",params);
    }

    //打开免费结算页面
    public async showFreeSettlementUI(params:{exitCallBack:()=> void , coin: number , freeTimes: number}){
        return await UIManager.getInstance().openWin("Fruits/prefab/pfb_fruits_free_settlement_ui",params);
    }

    //提示框
    public async AlertTxt(content: string, confirmCb?: Function, cancelCb?: Function) {
        let params: any = {};
        params.str = content;
        params.btnState = ["confirm"];
        params.confirm = confirmCb;
        params.cancel = cancelCb
        return await UIManager.getInstance().openWin("Lobby/Prefabs/UIPopupAlert", params);
    }
}