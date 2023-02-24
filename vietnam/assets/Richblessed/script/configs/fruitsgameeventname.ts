/*
 * @Author: super_javan 296652579@qq.com
 * @Date: 2022-12-08 13:44:32
 * @LastEditors: super_javan 296652579@qq.com
 * @LastEditTime: 2023-01-15 15:18:54
 * @FilePath: \vietnam\assets\Richblessed\script\configs\fruitsgameeventname.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export enum FruitsGameEventName {
    GAME_LOAD_COMPLETE = "GAME_LOAD_COMPLETE",                      // 加载完成
    GAME_LOAD_PROGRESS = "GAME_LOAD_PROGRESS",                      // 加载进度
    FRUITS_SC_ROOMINFO = "FISHING_SC_ROOMINFO", 		            // 房间信息
    FRUITS_SC_FRUITSOP = "FRUITS_SC_SCFRUITSOP",                    // 玩家操作数据返回
    FRUITS_SC_ROOM_STATE = "FRUITS_SC_ROOM_STATE",                  // 房间状态
    FRUITS_SC_PRIZE = "FRUITS_SC_PRIZE",                            // 奖池
    FRUITS_SC_BILLED = "FRUITS_SC_BILLED",                          // 
    GAME_CLOSE_JACKGAME = "GAME_CLOSE_JACKGAME",                    // 关闭jack游戏
    JACKGAME_WIN_REFRESH = "JACKGAME_WIN_REFRESH",                    // 刷新jackwin显示

    GAME_SC_ROOM_INFO = "GAME_SC_ROOM_INFO"
}