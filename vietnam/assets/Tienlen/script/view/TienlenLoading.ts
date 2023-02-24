import { _decorator, Component, Node, ProgressBar, Prefab, AssetManager, director, game, size, Label, sp } from 'cc';
import { ProtoDataLoader } from '../../../ScriptCore/config/ConfLoader';
import { BaseGameLoading } from '../../../ScriptCore/games/basegameloading';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { ResMgr, ResType } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIScreen, UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { UIRoot } from '../../../ScriptCore/UIFrame/UIRoot';
import { DB_ActSign } from '../../config/db_actsign';
import { DB_Createroom } from '../../config/db_createroom';
import { DB_GameSubsidy } from '../../config/db_gamesubsidy';
import { DB_GamMatchLV } from '../../config/db_gammatchlv';
import CardHelper from '../common/helper/CardHelper';
import ResourceHelper from '../common/helper/ResourceHelper';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('TienlenLoading')
export class TienlenLoading extends BaseGameLoading {
    private _progressBar: ProgressBar;
    private _progress1: number = 0;
    private _progress2: number = 0;
    private _progress: number = 0;

    //小车的动画
    private duduChe: Node = null;

    private progressTxt: Label = null;
    onLoad() {

        //暂时这么修改
        TienlenHelper.playMusic(TienlenDefine.MusicHall);
        UIRoot.getInstance().RotationLandscape();

        this._progressBar = this.getComponentInChildren(ProgressBar);
        this.progressTxt = this.node.getChildByName("lbl").getComponent(Label);
        //this.progressTxt.string = `加载中...${0}/100`
        this.progressTxt.string = I18nMgr.getInstance().getFormatStringByKey("lobby.jiazaizhongtxt", 0);
        this._progressBar.progress = 0;
        this.duduChe = this.node.getChildByName("tutuche");
        this.duduChe.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
        this.calDuDuChePos();
    }


    //计算小车的位置
    private calDuDuChePos() {
        let progress = this._progressBar.progress;
        let len = 578;
        let x = len * progress - len / 2;
        this.duduChe.setPosition(x, -280);
    }

    async loadRes() {
        let startTime = game.totalTime;

        let reslist: Map<string, number> = new Map<string, number>([
            ["Tienlen/scenesel3d/prefab/prefab_scenesel3d", 4],
            ["Tienlen/prefab/Game", 4],
            ["Tienlen/prefab/Select", 4],
            ["Tienlen/prefab/match/MatchSelect", 4],
            ["Tienlen/texture-en/en_tienlen", 2],
            ["Tienlen/texture-kh/kh_tienlen", 2],
            ["Tienlen/texture-zh/zh_tienlen", 2],
            ["Tienlen/texture-vi/vi_tienlen", 2],
        ]);


        // let resList = [

        // ];

        // let task1 = ResourceHelper.loadResInAB(TienlenDefine.ABName, TienlenDefine.PrefabSelectName, Prefab, this.onLoadSelectProgress.bind(this));
        // let task2 = ResourceHelper.loadResInAB(TienlenDefine.ABName, TienlenDefine.PrefabGameName, Prefab, this.onLoadGameProgress.bind(this));

        let resType = new Map<ResType, boolean>();
        resType!.set(ResType.ResType_Prefab, true);
        resType!.set(ResType.ResType_AudioClip, true);
        resType.set(ResType.ResType_SpriteAtlas, true);
        ResMgr.getInstance().preLoad(reslist, this.onLoadProgress.bind(this), this.onLoadResourceComplete.bind(this), resType);

        // CardHelper.preloadAllCardRes()
        // //await Promise.all([task1, task2]);
        // let time = game.totalTime - startTime;
        // let waitTime = time < TienlenDefine.MinLoadingTime ? TienlenDefine.MinLoadingTime - time : 0;
        // // await TienlenHelper.wait(waitTime / 1000);
        // // await TienlenHelper.showSelect();
        // //加载配置
        // let db_createRoom = new ProtoDataLoader(DB_Createroom.getInstance(), "Tienlen/config/DB_Createroom");
        // await db_createRoom.load();
        // let db_sign = new ProtoDataLoader(DB_ActSign.getInstance(), "Tienlen/config/DB_ActSign");
        // await db_sign.load();
        // let db_subsidy = new ProtoDataLoader(DB_GameSubsidy.getInstance(), "Tienlen/config/DB_GameSubsidy");
        // await db_subsidy.load();



        // if (this.completedCb != null) {
        //     this.completedCb();
        // }

        // this.closeSelf();
    }

    // public set progress(value: number) {
    //     this._progress = value;
    //     this._progressBar.progress = value * 0.5;
    // }

    // public get progress(): number {
    //     return this._progress;
    // }

    //更新进度
    public updateProgress(val: number) {
        if (val > this._progress) {
            this._progress = val;
            this._progressBar.progress = val;
            this.progressTxt.string = I18nMgr.getInstance().getFormatStringByKey("lobby.jiazaizhongtxt", Math.floor(val * 100));
            this.calDuDuChePos();
        }
    }


    private completedCb: Function = null;
    ///模拟入场动画
    startRuChangFake(cb: Function, completedCb: Function) {
        this.scheduleOnce(() => {
            if (cb != null) {
                cb();
            }
            this.loadRes();
            this.completedCb = completedCb;
        }, 1);
    }


    onShow(...params: any[]) {

    }

    onHide() {
    }

    onLoadSelectProgress(finished: number, total: number, item: AssetManager.RequestItem) {
        this._progress1 = finished / total;
        //this.progress = this._progress1 + this._progress2;
        this.updateProgress(this._progress1 + this._progress2);
    }


    //加载进度
    onLoadProgress(process: number) {
        this.updateProgress(process);
    }


    //加载完成
    async onLoadResourceComplete() {
        CardHelper.preloadAllCardRes()
        //await Promise.all([task1, task2]);
        //let time = game.totalTime - startTime;
        //let waitTime = time < TienlenDefine.MinLoadingTime ? TienlenDefine.MinLoadingTime - time : 0;
        // await TienlenHelper.wait(waitTime / 1000);
        // await TienlenHelper.showSelect();
        //加载配置
        let db_createRoom = new ProtoDataLoader(DB_Createroom.getInstance(), "Tienlen/config/DB_Createroom");
        await db_createRoom.load();
        let db_sign = new ProtoDataLoader(DB_ActSign.getInstance(), "Tienlen/config/DB_ActSign");
        await db_sign.load();
        let db_subsidy = new ProtoDataLoader(DB_GameSubsidy.getInstance(), "Tienlen/config/DB_GameSubsidy");
        await db_subsidy.load();
        let db_gameMatchLV = new ProtoDataLoader(DB_GamMatchLV.getInstance(), "Tienlen/config/DB_GamMatchLV");
        await db_gameMatchLV.load();

        if (this.completedCb != null) {
            this.completedCb();
        }

        this.closeSelf();
    }

    onLoadGameProgress(finished: number, total: number, item: AssetManager.RequestItem) {
        this._progress2 = finished / total;
        //this.progress = this._progress1 + this._progress2;
        this.updateProgress(this._progress1 + this._progress2);
    }



    public async showEffect(): Promise<boolean> {
        return true;
    }

    public async hideEffect(): Promise<boolean> {
        return true;
    }

    public getShowEffectTime(): number {
        return 0;
    }

    public getHideEffectTime(): number {
        return 0;
    }

}

