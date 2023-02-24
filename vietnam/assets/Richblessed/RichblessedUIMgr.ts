/*
 * @Description: 多彩UI管理器
 * @Author: Super_Javan
 * @Date: 2022-11-30 14:36:12
 * @LastEditTime: 2023-01-07 18:31:35
 * @LastEditors: super_javan 296652579@qq.com
 */
import { UIManager } from "../ScriptCore/UIFrame/UIManager";
import { UIRoot } from "../ScriptCore/UIFrame/UIRoot";
import { RichblessedEffectType } from "./script/RichblessedEffectWin";

export class RichblessedUIMgr {
    private static intstance: RichblessedUIMgr = new RichblessedUIMgr();

    public static getInstance(): RichblessedUIMgr {
        return this.intstance
    }

    //打开多彩的选场
    public async showEnterUI() {
        return await UIManager.getInstance().openScreen("Richblessed/pfb_room_ui");
    }

    //进入多彩
    public async showRichblessed() {
        return await UIManager.getInstance().openScreen("Richblessed/prefab/pfb_richblessed_game_ui");
    }

    //打开小游戏界面
    public async openMiniGame() {
        return await UIManager.getInstance().openWin("Richblessed/prefab/pfb_minigame");
    }

    //确认框是否退出
    public async showExitConfirm(cf: Function) {
        // let params: any = {};
        // params.confirmCb = cf;
        // return await UIManager.getInstance().openWin("FishHappy/prefab/pfb_messagebox", params);
    }

    //打开小游戏结算界面
    public async showMiniGameSummary(params:number[]) {
        return await UIManager.getInstance().openWin("Richblessed/prefab/pfb_minigame_summary",params);
    }   

    //打开loading界面
    public async showLoading() {
        UIRoot.getInstance().RotationLandscape();
        return await UIManager.getInstance().openWin("Richblessed/prefab/pfb_gameloadinglayer");
    }

    //打开设置页面
    public async showSettingUI() {
        return await UIManager.getInstance().openPopup("Richblessed/prefab/pfb_richblessed_set_ui");
    }

    //打开规则界面
    public async showHelpUI() {
        return await UIManager.getInstance().openScreen("Richblessed/prefab/pfb_richblessed_help_ui");
    }

    //打开动画效果
    public async showEffectUI(params:{coustomCallBack:(type:RichblessedEffectType, mode: string)=> void , type: RichblessedEffectType ,bean:any, freeShow?: boolean}){
        return await UIManager.getInstance().openWin("Richblessed/prefab/pfb_richblessed_effect_ui",params);
    }

    //打开免费结算页面
    public async showFreeSumUI(params:{exitCallBack:()=> void , freeWin: number , freeTimes: number}){
        return await UIManager.getInstance().openWin("Richblessed/prefab/pfb_richblessed_freesum_ui",params);
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