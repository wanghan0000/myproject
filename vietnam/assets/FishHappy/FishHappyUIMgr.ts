import { UIManager } from "../ScriptCore/UIFrame/UIManager";
import { UIRoot } from "../ScriptCore/UIFrame/UIRoot";

export class FishHappyUIMgr {
    private static intstance: FishHappyUIMgr = new FishHappyUIMgr();

    public static getInstance(): FishHappyUIMgr {
        return this.intstance
    }

    //打开捕鱼的选场
    public async showEnterUI() {
        return await UIManager.getInstance().openScreen("FishHappy/pfb_enterui");
    }

    //进入渔场，战斗场景
    public async showFish() {
        return await UIManager.getInstance().openScreen("FishHappy/prefab/pfb_fishgame");
    }

    //确认框是否退出
    public async showExitConfirm(cf: Function) {
        let params: any = {};
        params.confirmCb = cf;
        return await UIManager.getInstance().openWin("FishHappy/prefab/pfb_messagebox", params);
    }

    //打开loading界面
    public async showLoading() {
        UIRoot.getInstance().RotationLandscape();
        return await UIManager.getInstance().openWin("FishHappy/prefab/pfb_gameloadinglayer");
    }
}