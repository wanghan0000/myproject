import { Asset, assetManager, AssetManager, director, Game, game, Prefab, RenderTexture, Scheduler } from "cc";
import { EventMgr } from "../ScriptCore/events/eventmgr";
import { BaseLogic } from "../ScriptCore/games/BaseLogic";
import { LogicEvent, LogicEventData } from "../ScriptCore/games/LogicEvent";
import { LogicManager } from "../ScriptCore/games/LogicManager";
import { GameConst } from "../ScriptCore/Lobby/Scripts/gameconfig/GameConst";
import { ResMgr } from "../ScriptCore/UIFrame/ResMgr";
import { UserData } from "../ScriptCore/data/UserData";
import { UIMgr } from "../ScriptCore/Lobby/Scripts/UIMgr";
import { PoolManager } from "../ScriptCore/panda/utils/poolmgr";
import TalaHelper from "./script/TalaHelper";
import TalaRuntime from "./script/TalaRuntime";
import TalaDefine from "./script/TalaDefine";
import TalaProtocol from "./script/TalaProtocol";
import ResourceHelper from "./script/common/helper/ResourceHelper";

export class TalaLogic extends BaseLogic {
    public init() {
        EventMgr.getInstance().addEventListener(GameConst.GameId_Tala.toString(), this.onStartEnter.bind(this), this);
        //使用一个消息，可以从logicData中区分 是怎么返回回去的
        EventMgr.getInstance().addEventListener(LogicEvent.ENTER_HALL_FROM_GAMES, this.onBackHall.bind(this), this);
    }


    //从子游戏返回到大厅,
    public async onBackHall(data: LogicEventData) {
        super.onBackHall(data);
        if (this.gameItemConfig != null && this.gameItemConfig!.GameId == data.itemConfig!.GameId) {
            setTimeout(() => {
                // TienlenGameData.instance.clear();
                TalaProtocol.unRegister();
                game.targetOff(this);
                //清理UI加载缓存
                ResMgr.getInstance().clearBundle(TalaDefine.ABName);
                //清理对象池
                PoolManager.instance.clearAll();
                ResourceHelper.releaseAB(TalaDefine.ABName);
            });
        }
    }

    /**
     * 开始加载
     * @param data 
     */
    public async onStartEnter(data: LogicEventData) {
        super.onStartEnter(data);
        TalaProtocol.register();
        this.startLoadGame();
        game.on(Game.EVENT_SHOW, () => {
            TalaRuntime.instance.isBackground = false;
        }, this)
        game.on(Game.EVENT_HIDE, () => {
            TalaRuntime.instance.isBackground = true;
        }, this);
        this.initRuntimeData();
    }

    initRuntimeData() {
        // TienlenRuntime.unreadRequestList = UserData.getInstance().unreadRequestList;
        // TienlenRuntime.unreadFriendChatList = UserData.getInstance().unreadChatList;
        // TienlenRuntime.addUnreadOpList(UserData.getInstance().unreadFriendOpList);
        // TienlenRuntime.addUnreadChatMsgList(UserData.getInstance().unreadChatMsgList);
        // UserData.getInstance().unreadFriendOpList = null;
        // UserData.getInstance().unreadChatMsgList = null;
    }

    //开始加载资源
    public async startLoadGame() {
        UIMgr.getInstance().clearWaiting();
        TalaHelper.showLoading();
    }
}

LogicManager.getInstance().registerLogicTypes(TalaLogic);