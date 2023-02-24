import { GameItemConf } from "../Lobby/Scripts/gameconfig/GameConst";

export enum LogicType{
    //未知
    LOGICTYPE_UNKNOWN = "LOGICTYPE_UNKNOWN",
    //大厅
    LOGICTYPE_HALL = "LOGICTYPE_HALL",
    //冰河世纪
    LOGICTYPE_ICE_AGE = "LOGICTYPE_ICE_AGE",
    //复活节岛
    LOGICTYPE_EASTER_ISLAND = "LOGICTYPE_EASTER_ISLAND",
    //财运之神
    LOGICTYPE_AI_CAP = "LOGICTYPE_AI_CAP",
}








export enum LogicEvent {
    //进入指定场景完成
    ENTER_COMPLETE = "LOGIC_EVENT_ENTER_COMPLETE",
    //进入大厅
    ENTER_HALL = "LOGIC_EVENT_ENTER_HALL",

    //从子游戏返回大厅
    ENTER_HALL_FROM_GAMES = "ENTER_HALL_FROM_GAMES",


    ENTER_MINI_GAME = "ENTER_MINI_GAME",
    //小游戏退出
    EXIT_MINI_GAME = "EXIT_MINI_GAME",
    ENTER_AI_CAP = "ENTER_AI_CAP",
    ENTER_HALL_FROM_AI_CAP = "ENTER_HALL_FROM_AI_CAP"
}

//
export class LogicEventData{
    //标识使用哪个子游戏资源
    //public bundleName:string = "";
    //游戏Id
    //public gameId:number = 0;

    public itemConfig:GameItemConf | null = null;

    //扩展参数
    public data?:any

    constructor(ic:GameItemConf,data?:any){
        this.itemConfig = ic;
        this.data = data;
    }
}