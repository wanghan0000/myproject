
import { RedDotData } from "../data/RedDotData";
import { EventMgr } from "../events/eventmgr";
import { EventName } from "../events/EventName";
import { SocketPackTool } from "../panda/net/SocketPackTool";
import  gamehall  from "../protocol/gamehall.js";
/**
 * 该文件中注册的协议为 hallpacket.proto中对应的协议 不是 hallpacket.proto中定义的不要放在这里
 * 
 * 红点的消息变化逻辑处理
 */


 SocketPackTool.register(function(msg:any){
    console.log("游戏内的红点通知");
    console.log(msg);
    console.log("游戏内的红点通知");
    RedDotData.getInstance().onMessage(msg);
},gamehall.gamehall.HallPacketID.PACKET_SC_SHOWRED,gamehall.gamehall.SCShowRed);

SocketPackTool.register(function(msg:any){
    console.log("enter third party game");
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.ENTER_THIRD_PARTY_GAME, msg);
},gamehall.gamehall.GameHallPacketID.PACKET_SC_ENTERTHRIDGAME,gamehall.gamehall.SCEnterThridGame);
SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_ENTERTHRIDGAME, gamehall.gamehall.CSEnterThridGame);

SocketPackTool.register(function(msg:any){
    console.log("leave third party game");
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.LEAVE_THIRD_PARTY_GAME, msg);
},gamehall.gamehall.GameHallPacketID.PACKET_SC_LEAVETHRIDGAME,gamehall.gamehall.SCLeaveThridGame);
SocketPackTool.registerPackFunc(gamehall.gamehall.GameHallPacketID.PACKET_CS_LEAVETHRIDGAME, gamehall.gamehall.CSLeaveThridGame);

