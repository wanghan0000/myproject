import { UIMgr } from "../Lobby/Scripts/UIMgr";
import { LogicEventData } from "./LogicEvent";
import { EventName } from '../../ScriptCore/events/EventName';
import { EventMgr } from "../../ScriptCore/events/eventmgr";
import { GameItemConf } from "../Lobby/Scripts/gameconfig/GameConst";
import { GameState } from "../gamestate/GameState";
import { UserData } from "../data/UserData";
import { UIRoot } from "../UIFrame/UIRoot";

/**
 * 子游戏加载的主逻辑
 */
export class BaseLogic {


    public gameItemConfig: GameItemConf | null = null;

    public init() {
    }



    /*
    子游戏返回大厅的回调通知
    */
    public onBackHall(data: LogicEventData) {
        //退出游戏的逻辑
        if (this.gameItemConfig != null && this.gameItemConfig!.GameId == data.itemConfig!.GameId) {
            GameState.getInstance().exitGame(this.gameItemConfig!);
        }
    }

    /**
     * 开始进入子游戏。玩家点击了游戏按钮
     * @param data 
     */
    public async onStartEnter(data: LogicEventData) {
        this.gameItemConfig = data.itemConfig;
    }

    //打开Prefab
    public openForm(gameCfgData: any) {

    }


    //开始加载对应游戏的资源
    /**
     * 获取reslit然后开始加载
     */
    public startLoadGame() {

    }

    //资源加载完成
    protected onLoadResourceComplete(err: any) {

    }

    //加载进度
    protected onLoadResourceProgress(process: number) {

    }
}