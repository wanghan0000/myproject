import { UserData } from "../data/UserData";
import { EventMgr } from "../events/eventmgr";
import { EventName } from "../events/EventName";
import { GameState } from "../gamestate/GameState";
import { GameData } from "../Lobby/Scripts/gameconfig/GameData";
import { SocketPackTool } from "../panda/net/SocketPackTool";
import gamehall from "../protocol/gamehall.js";




/**
 * 该文件中注册的协议为 game.proto中对应的。不是game.proto中的协议不要放在这里
 */

SocketPackTool.register(function (msg: any) {
    console.log("enter game 的消息");
    console.log(msg);
    console.log("enter game 的消息");
    EventMgr.getInstance().dispatchEvent(EventName.SC_EnterGame, msg);
}, gamehall.gamehall.GameHallPacketID.PACKET_SC_ENTERGAME, gamehall.gamehall.SCEnterGame);
SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_ENTERGAME, gamehall.gamehall.CSEnterGame);

SocketPackTool.register(function (msg: any) {
    console.log("leave game 的消息");
    console.log(msg);
    console.log("leave game 的消息");
    EventMgr.getInstance().dispatchEvent(EventName.SC_LeaveRoom, msg);
}, gamehall.gamehall.GameHallPacketID.PACKET_SC_LEAVEROOM, gamehall.gamehall.SCLeaveRoom);
SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_LEAVEROOM, gamehall.gamehall.CSLeaveRoom);

/**
 * 退出游戏
 */
SocketPackTool.register(function (msg: any) {
    console.log(gamehall.gamehall.GameHallPacketID.PACKET_SC_QUITGAME);
    console.log("退出游戏的返回====测试次数=====");
    console.log(msg);
    //这个咋能发这个消息
    //EventMgr.getInstance().dispatchEvent(EventName.SC_Logout, msg);
    //直接广播退出消息
    EventMgr.getInstance().dispatchEvent(EventName.SC_QUIT_GAME, msg);

    EventMgr.getInstance().dispatchEvent(EventName.SC_LeaveRoom, msg);

}, gamehall.gamehall.GameHallPacketID.PACKET_SC_QUITGAME, gamehall.gamehall.SCQuitGame);

SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_QUITGAME, gamehall.gamehall.CSQuitGame);



/**
 * 点击游戏图标获取游戏的动态配置
 * 也可能是断线重连进入游戏
 * 判断当前UserData中是否有对应的游戏，如果有，则进行缓存，没有不缓存
 */
SocketPackTool.register(function (msg: any) {

    console.log("获取到游戏配置数据=======");
    console.log(msg);

    let roomId = UserData.getInstance().getRoomId();
    let gameId = UserData.getInstance().getGameId();
    let gameFreeId = UserData.getInstance().getGameFreeId();
    if (gameFreeId != null && gameFreeId != 0 && gameId != null && gameId != 0 && roomId != null && roomId != 0) {
        GameState.getInstance().doCacheReconnectRomoteConf(msg);
    }
    EventMgr.getInstance().dispatchEvent(EventName.SC_GET_GAME_CONFIG, msg);

}, gamehall.gamehall.GameHallPacketID.PACKET_SC_GETGAMECONFIG, gamehall.gamehall.SCGetGameConfig);

SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_GETGAMECONFIG, gamehall.gamehall.CSGetGameConfig);


/**
 * csreturnroom
*/
SocketPackTool.register(function (msg: any) {
    console.log("客户端收到返回房间的消息");
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_ReturnRoom, msg);
}, gamehall.gamehall.GameHallPacketID.PACKET_SC_RETURNROOM, gamehall.gamehall.SCReturnRoom);

SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_RETURNROOM, gamehall.gamehall.CSReturnRoom)

/**
 * SCGameState
 * 请求选场信息
*/
SocketPackTool.register(function (msg: any) {
    console.log("客户端收到返回选场的消息");
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_GAMESTATE, msg);
}, gamehall.gamehall.GameHallPacketID.PACKET_SC_GAMESTATE, gamehall.gamehall.SCGameState);

/**
 * SCGameSubList
 * 请求选场信息
*/
SocketPackTool.register(function (msg: any) {
    console.log("客户端收到返回更新游戏内状态的消息");
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_GAMESUBLIST, msg);
}, gamehall.gamehall.GameHallPacketID.PACKET_SC_GAMESUBLIST, gamehall.gamehall.SCGameSubList);
//请求选场数据
SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_GAMEOBSERVE, gamehall.gamehall.CSGameObserve);

//游戏的常规开启和关闭的操作
SocketPackTool.register(function (msg: any) {
    console.log("游戏的开关发生变化");
    console.log(msg);
    console.log("游戏的开关发生变化");
    GameData.getInstance().updateShowData(msg);
    GameState.getInstance().onGameStatusChg(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_CHANGE_GAMESTATUS);
}, gamehall.gamehall.GameHallPacketID.PACKET_SC_CHANGEGAMESTATUS, gamehall.gamehall.SCChangeGameStatus);

//查询房间
SocketPackTool.register(function (msg: any) {
    EventMgr.getInstance().dispatchEvent(EventName.SC_QUERYROOM, msg);
}, gamehall.gamehall.GameHallPacketID.PACKET_SC_QUERYROOMINFO, gamehall.gamehall.SCQueryRoomInfo);

SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_QUERYROOMINFO, gamehall.gamehall.CSQueryRoomInfo)
//创建房间
SocketPackTool.register(function (msg: any) {
    EventMgr.getInstance().dispatchEvent(EventName.SC_CREATEROOM, msg);
}, gamehall.gamehall.GameHallPacketID.PACKET_SC_CREATEROOM, gamehall.gamehall.SCCreateRoom);

SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_CREATEROOM, gamehall.gamehall.CSCreateRoom)
//进入房间
SocketPackTool.register(function (msg: any) {
    EventMgr.getInstance().dispatchEvent(EventName.SC_EnterRoom, msg);
}, gamehall.gamehall.GameHallPacketID.PACKET_SC_ENTERROOM, gamehall.gamehall.SCEnterRoom);

SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_ENTERROOM, gamehall.gamehall.CSEnterRoom)
SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_AUDIENCE_ENTERROOM, gamehall.gamehall.CSEnterRoom)

SocketPackTool.register(function (msg: any) {
    EventMgr.getInstance().dispatchEvent(EventName.SC_AUDIENCE_SIT, msg);
}, gamehall.gamehall.GameHallPacketID.PACKET_SC_AUDIENCESIT, gamehall.gamehall.SCAudienceSit);

SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_AUDIENCESIT, gamehall.gamehall.CSAudienceSit)

// 个人信息界面
SocketPackTool.register(function (msg: any) {
    EventMgr.getInstance().dispatchEvent(EventName.SC_MYINFO_COMNOTICE, msg);
}, gamehall.gamehall.GameHallPacketID.PACKET_SC_COMNOTICE, gamehall.gamehall.SCRecordAndNotice);

SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_COMNOTICE, gamehall.gamehall.CSRecordAndNotice)

// 告诉服务器设置玩家暂离
SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_PLAYER_SWITCHFLAG, gamehall.gamehall.CSPlayerSwithFlag);