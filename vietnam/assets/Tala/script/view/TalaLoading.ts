import { _decorator, Component, Node, ProgressBar, Label, sp } from 'cc';
import { ProtoDataLoader } from '../../../ScriptCore/config/ConfLoader';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { AdapterMgr, AdapterType } from '../../../ScriptCore/UIFrame/AdapterMgr';
import { UIScreen, UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { UIManager } from '../../../ScriptCore/UIFrame/UIManager';
import { UIRoot } from '../../../ScriptCore/UIFrame/UIRoot';
import { DB_ActSign } from '../../config/db_actsign';
import { DB_Createroom } from '../../config/db_createroom';
import { DB_GameSubsidy } from '../../config/db_gamesubsidy';
import { DB_GamMatchLV } from '../../config/db_gammatchlv';
import ResourceHelper from '../common/helper/ResourceHelper';
import TalaHelper from '../TalaHelper';
const { ccclass, property } = _decorator;

@ccclass('TalaLoading')
export class TalaLoading extends UIWindow {
    private _progressBar: ProgressBar;
    private _progressLabel: Label;
    private _iconNode: Node;
    private _progress: number = 0;

    onLoad() {
        this._progressBar = this.getComponentInChildren(ProgressBar);
        this._progressLabel = this.node.getChildByName("lbl").getComponent(Label);
        this._iconNode = this.node.getChildByName("tutuche");
        this._iconNode.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
    }

    async onShow(...params: any) {
        // TienlenHelper.playMusic(TienlenDefine.MusicHall);
        AdapterMgr.getInstance().adapterByType(AdapterType.FullScreen, this);
        UIRoot.getInstance().RotationLandscape();
        this.progress = 0;
        await TalaHelper.wait(0.01);
        this.loadRes();
    }

    public loadRes() {
        let resList = [
            ["prefab/Select"],
            ["prefab/Game"],
            ["rawRes/poker", "spriteframe_dir"],
            ["config/DB_Createroom", "buffer"],
            ["config/DB_ActSign", "buffer"],
            ["config/DB_GameSubsidy", "buffer"],
            ["config/DB_GamMatchLV", "buffer"]
        ];
        ResourceHelper.loadResListInAB("Tala", resList, (f, t, i) => {
            this.progress = f;
        }, async () => {
            //加载完成,初始化配置
            let db_createRoom = new ProtoDataLoader(DB_Createroom.getInstance(), "Tala/config/DB_Createroom");
            await db_createRoom.load();
            let db_sign = new ProtoDataLoader(DB_ActSign.getInstance(), "Tala/config/DB_ActSign");
            await db_sign.load();
            let db_subsidy = new ProtoDataLoader(DB_GameSubsidy.getInstance(), "Tala/config/DB_GameSubsidy");
            await db_subsidy.load();
            let db_gameMatchLV = new ProtoDataLoader(DB_GamMatchLV.getInstance(), "Tala/config/DB_GamMatchLV");
            await db_gameMatchLV.load();
            await TalaHelper.showSelect();
            this.closeSelf();
        })
    }



    public set progress(value: number) {
        this._progress = value;
        this._progressBar.progress = value;
        this._progressLabel.string = I18nMgr.getInstance().getFormatStringByKey("lobby.jiazaizhongtxt", Math.floor(value * 100));
        this.calDuDuChePos();
    }

    private calDuDuChePos() {
        let len = 578;
        let x = len * this._progress - len / 2;
        this._iconNode.setPosition(x, -280);
    }

    public async showEffect(): Promise<boolean> {
        return true;
    }

    public async hideEffect(): Promise<boolean> {
        return true;
    }

}

