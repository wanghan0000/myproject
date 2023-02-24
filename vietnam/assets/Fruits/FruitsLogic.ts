import { UserData } from "../ScriptCore/data/UserData";
import { EventMgr } from "../ScriptCore/events/eventmgr";
import { BaseLogic } from "../ScriptCore/games/BaseLogic"
import { LogicEvent, LogicEventData } from "../ScriptCore/games/LogicEvent";
import { LogicManager } from "../ScriptCore/games/LogicManager";
import { GameConst } from "../ScriptCore/Lobby/Scripts/gameconfig/GameConst";
import { UIMgr } from "../ScriptCore/Lobby/Scripts/UIMgr";
import { SocketMgr } from "../ScriptCore/panda/net/SocketMgr";
import { PoolManager } from "../ScriptCore/panda/utils/poolmgr";
import gamehall from "../ScriptCore/protocol/gamehall.js";
import { ResMgr, ResType } from "../ScriptCore/UIFrame/ResMgr";
import { FruitsUIMgr } from "./FruitsUIMgr";
import { reslist } from "./reslist";
import { FruitsRoomData } from "./script/fruitsdata/FruitsRoomData";
import { FruitsLoading } from "./script/fruitsloading";
import { SCFruits } from "./script/net/scFruits";

export class FruitsLogic extends BaseLogic {
    public init() {
        EventMgr.getInstance().addEventListener(GameConst.GameId_Fruits.toString(), this.onStartEnter.bind(this), this);
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
                SCFruits.destory();

                //释放对应bundle中的资源 如果是从
                ResMgr.getInstance().releaseAllResByList(reslist);

                const poolClearPaths = [
                    'pfb_fruits_line_item',
                    'pfb_fruits_item',
                    'pfb_fruits_top_ui',
                    'pfb_fruits_bottom_ui',
                    'pfb_fruits_toast_ui'
                ]
                poolClearPaths.forEach((path)=>{
                    PoolManager.instance.clearPool(path)
                })
            });
        }
        FruitsRoomData.instance.coin = 0;
    }

    /**
     * 水果拉霸开始加载
     * @param data 
     */
    public async onStartEnter(data: LogicEventData) {
        console.log("开始加载水果机的资源");
        await super.onStartEnter(data);
        SCFruits.getInstance().register();
        this.startLoadGame();
    }

    //开始加载资源
    public async startLoadGame() {
        console.log("开始加载");
        UIMgr.getInstance().clearWaiting();
        let loadinForm = await FruitsUIMgr.getInstance().showLoading();


        loadinForm.getComponent(FruitsLoading).startRuChangFake(() => {
        }, () => {
            //打开选场
            UIMgr.getInstance().clearWaiting();
            FruitsUIMgr.getInstance().showEnterUI();
        })
    }
}

LogicManager.getInstance().registerLogicTypes(FruitsLogic);