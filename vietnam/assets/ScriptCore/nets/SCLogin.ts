/**
 * login.proto
 */

import { EventMgr } from "../events/eventmgr";
import { EventName } from "../events/EventName";
import { GameState } from "../gamestate/GameState";
import { GameData } from "../Lobby/Scripts/gameconfig/GameData";
import { SocketPackTool } from "../panda/net/SocketPackTool";
import login from "../protocol/login.js";




/**
 * 登录
 */
SocketPackTool.register(function (msg: any): void {

    console.log("收到登录回调的消息");
    let pack = msg as login.login.SCLogin;
    GameData.getInstance().initShowData(pack.GameInfo);
    EventMgr.getInstance().dispatchEvent(EventName.SC_Login, msg);
    console.log("收到登录回调的消息");
    console.log(pack);
}, login.login.LoginPacketID.PACKET_SC_LOGIN, login.login.SCLogin);
//注册登录的封包方法
SocketPackTool.registerPackFunc(login.login.LoginPacketID.PACKET_CS_LOGIN, login.login.CSLogin);


/**
 * 登出
 */
SocketPackTool.register(function (msg: any): void {

    EventMgr.getInstance().dispatchEvent(EventName.SC_Logout, msg);

}, login.login.LoginPacketID.PACKET_SC_LOGOUT, login.login.SCLogout);
//注册退出登录的封包方法
SocketPackTool.registerPackFunc(login.login.LoginPacketID.PACKET_CS_LOGOUT, login.login.CSLogout);


/**
 * 断开连接
 */
SocketPackTool.register(function (msg: any): void {

    console.log("客户端被服务器断开连接");
    console.log(msg);
    console.log("客户端被服务器断开连接");
    EventMgr.getInstance().dispatchEvent(EventName.SC_Disconnect, msg);

}, login.login.GatePacketID.PACKET_SS_DICONNECT, login.login.SSDisconnect);

/**
 * 更新选场中入场限制
 */
SocketPackTool.register(function (msg: any): void {
    console.log("游戏配置发生变化");
    console.log(msg);
    console.log("游戏配置发生变化");
    GameData.getInstance().updateShowDataByConfChg(msg);
    GameState.getInstance().onGameConfigUpdate(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_SYNCGAMEFREE, msg);

}, login.login.LoginPacketID.PACKET_SC_SYNCGAMEFREE, login.login.SCSyncGameFree);




