import { Asset, assetManager, AssetManager, director, Game, game, Prefab, RenderTexture, Scheduler } from "cc";
import { EventMgr } from "../ScriptCore/events/eventmgr";
import { BaseLogic } from "../ScriptCore/games/BaseLogic";
import { LogicEvent, LogicEventData } from "../ScriptCore/games/LogicEvent";
import { LogicManager } from "../ScriptCore/games/LogicManager";
import { GameConst } from "../ScriptCore/Lobby/Scripts/gameconfig/GameConst";
import { ResMgr } from "../ScriptCore/UIFrame/ResMgr";
import Protocol from "./script/Protocol";
import ResourceHelper from "./script/common/helper/ResourceHelper";
import TienlenHelper from "./script/TienlenHelper";
import TienlenDefine from "./script/TienlenDefine";
import { TienlenGameData } from "./script/model/TienlenGameData";
import { TienlenLoading } from "./script/view/TienlenLoading";
import { TienlenRuntime } from "./script/TienlenRuntime";
import { UserData } from "../ScriptCore/data/UserData";
import { UIMgr } from "../ScriptCore/Lobby/Scripts/UIMgr";
import { PoolManager } from "../ScriptCore/panda/utils/poolmgr";

export class TienlenLogic extends BaseLogic {
    public init() {
        EventMgr.getInstance().addEventListener(GameConst.GameId_TienLen.toString(), this.onStartEnter.bind(this), this);
        //使用一个消息，可以从logicData中区分 是怎么返回回去的
        EventMgr.getInstance().addEventListener(LogicEvent.ENTER_HALL_FROM_GAMES, this.onBackHall.bind(this), this);
    }


    //从子游戏返回到大厅,
    public async onBackHall(data: LogicEventData) {
        super.onBackHall(data);
        if (this.gameItemConfig != null && this.gameItemConfig!.GameId == data.itemConfig!.GameId) {
            setTimeout(() => {
                console.log("tienlen清理资源开始");
                TienlenGameData.instance.clear();
                Protocol.unRegister();
                game.targetOff(this);
                //清理UI加载缓存
                ResMgr.getInstance().clearBundle(TienlenDefine.ABName);
                //清理对象池
                PoolManager.instance.clearAll();
                ResourceHelper.releaseAB(TienlenDefine.ABName);


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

                ResMgr.getInstance().releaseAllResByList(reslist);
                console.log("tienlen清理资源结束");
            });
        }
    }

    /**
     * 开始加载
     * @param data 
     */
    public async onStartEnter(data: LogicEventData) {
        super.onStartEnter(data);
        Protocol.register();
        this.startLoadGame();
        game.on(Game.EVENT_SHOW, () => {
            TienlenRuntime.isBackground = false;
        }, this)
        game.on(Game.EVENT_HIDE, () => {
            TienlenRuntime.isBackground = true;
        }, this);
        this.initRuntimeData();
    }

    initRuntimeData() {
        TienlenRuntime.unreadRequestList = UserData.getInstance().unreadRequestList;
        TienlenRuntime.unreadFriendChatList = UserData.getInstance().unreadChatList;
        TienlenRuntime.addUnreadOpList(UserData.getInstance().unreadFriendOpList);
        TienlenRuntime.addUnreadChatMsgList(UserData.getInstance().unreadChatMsgList);
        UserData.getInstance().unreadFriendOpList = null;
        UserData.getInstance().unreadChatMsgList = null;
    }

    //开始加载资源
    public async startLoadGame() {
        //UIRoot.getInstance().RotationLandscape(async () => {
        UIMgr.getInstance().clearWaiting()
        let loadinForm = await TienlenHelper.showLoading();
        loadinForm.getComponent(TienlenLoading).startRuChangFake(() => {
        }, () => {
            //打开选场
            TienlenHelper.showSelect();
        })
        //});
    }
}

LogicManager.getInstance().registerLogicTypes(TienlenLogic);