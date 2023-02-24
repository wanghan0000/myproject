
/**
 * 定义当前游戏的事件
 */

 export default class GameEvent {

    /**
     * 开始游戏
     */
    static JACKGAME_START_GAME: string = "__START_GAME__";
    /**
     * 显示
     */
    static JACKGAME_OPEN_RESULT: string = "__SHOW_RESULT__";
    /**
     * 结算展示
     */
    static JACKGAME_OPEN_SUM: string = "__SHOW_SUMMARY__";
    /**
     * 结束游戏
     */
    static JACKGAME_END_GAME: string = "__END_GAME__";

}
