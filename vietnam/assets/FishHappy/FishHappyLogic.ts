import { ProtoDataLoader } from "../ScriptCore/config/ConfLoader";
import { EventMgr } from "../ScriptCore/events/eventmgr";
import { BaseLogic } from "../ScriptCore/games/BaseLogic"
import { LogicEvent, LogicEventData } from "../ScriptCore/games/LogicEvent";
import { LogicManager } from "../ScriptCore/games/LogicManager";
import { GameConst } from "../ScriptCore/Lobby/Scripts/gameconfig/GameConst";
import { UIMgr } from "../ScriptCore/Lobby/Scripts/UIMgr";
import { ResMgr, ResType } from "../ScriptCore/UIFrame/ResMgr";
import { FishHappyUIMgr } from "./FishHappyUIMgr";
import { DB_Fish } from "./data/db_fish";
import { DB_FishRate } from "./data/db_fishrate";
import { reslist } from "./reslist";
import { FishPolicyMgr } from "./script/configs/fishpolicymgr";
import { SCFish } from "./script/net/scfish";
import { FishGameEventName } from "./script/configs/fishgameeventname";
import { FishHappyLoading } from "./script/fishhappyloading";

export class FishHappyLogic extends BaseLogic {
    public init() {
        EventMgr.getInstance().addEventListener(GameConst.GameId_FishHappy.toString(), this.onStartEnter.bind(this), this);
        //使用一个消息，可以从logicData中区分 是怎么返回回去的
        EventMgr.getInstance().addEventListener(LogicEvent.ENTER_HALL_FROM_GAMES, this.onBackHall.bind(this), this);
    }


    //从子游戏返回到大厅了
    public onBackHall(data: LogicEventData) {
        super.onBackHall(data);
        console.log("返回大厅，需要释放资源");
        if (this.gameItemConfig != null && this.gameItemConfig!.GameId == data.itemConfig!.GameId) {
            setTimeout(() => {
                //清除消息注册
                SCFish.destory();
                FishPolicyMgr.clear();
                DB_Fish.getInstance().clear();
                DB_FishRate.getInstance().clear();
                //释放对应bundle中的资源 如果是从
                ResMgr.getInstance().releaseAllResByList(reslist);
            });
        }
    }

    /**
     * 捕鱼游戏开始加载
     * @param data 
     */
    public async onStartEnter(data: LogicEventData) {
        console.log("开始加载捕鱼的资源");
        await super.onStartEnter(data);
        SCFish.getInstance().register();
        this.startLoadGame();
        FishPolicyMgr.instance.loadPolicyData();
        let db_fish = new ProtoDataLoader(DB_Fish.getInstance(), "FishHappy/data/DB_Fish");
        db_fish.load();
        let db_fishrate = new ProtoDataLoader(DB_FishRate.getInstance(), "FishHappy/data/DB_FishRate");
        db_fishrate.load();

    }

    //开始加载资源
    public async startLoadGame() {
        let list = reslist;
        console.log("开始加载");
        //UIRoot.getInstance().RotationLandscape(async () => {
            UIMgr.getInstance().clearWaiting();
            let loadingForm = await FishHappyUIMgr.getInstance().showLoading();
            loadingForm.getComponent(FishHappyLoading).startRuChang(() => {
                let resType: Map<ResType, boolean> = new Map();
                resType.set(ResType.ResType_Prefab, true);
                resType.set(ResType.ResType_SpriteAtlas, true);
                resType.set(ResType.ResType_AudioClip, true);
                ResMgr.getInstance().preLoad(list, this.onLoadResourceProgress.bind(this), this.onLoadResourceComplete.bind(this), resType);
            });
        //});
    }

    //加载资源完成
    protected onLoadResourceComplete(err: any) {
        console.log("打开捕鱼的选场界面");
        UIMgr.getInstance().clearWaiting();
        FishHappyUIMgr.getInstance().showEnterUI();
    }

    //加载资源进度
    protected onLoadResourceProgress(process: number) {
        //console.log("加载捕鱼资源进度", process, "=====");
        EventMgr.getInstance().dispatchEvent(FishGameEventName.GAME_LOAD_PROGRESS, process);
    }
}

LogicManager.getInstance().registerLogicTypes(FishHappyLogic);