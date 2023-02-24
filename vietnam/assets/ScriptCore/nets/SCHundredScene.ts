import { EventMgr } from "../events/eventmgr";
import { EventName } from "../events/EventName";
import { JackpotData } from "../gamestate/JackpotData";
import { SocketPackTool } from "../panda/net/SocketPackTool";
import  gamehall  from "../protocol/gamehall.js";

//服务器广播的奖池信息
SocketPackTool.register((msg:any)=>{
    console.log("奖池的数据广播");
    console.log(msg);
    console.log("奖池的数据广播");
    JackpotData.getInstance().onJackPotDataChange(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_Game_JackPot_Change,msg);
},gamehall.gamehall.HundredScenePacketID.PACKET_SC_GAMEJACKPOT,gamehall.gamehall.SCHundredSceneGetGameJackpot);

//客户端请求奖池信息
SocketPackTool.registerPackFunc(gamehall.gamehall.HundredScenePacketID.PACKET_CS_GAMEJACKPOT,gamehall.gamehall.CSHundredSceneGetGameJackpot);

//万人场获取人数
SocketPackTool.register((msg:any)=>{

    EventMgr.getInstance().dispatchEvent(EventName.SC_BRMODE_PLAYERNUM,msg);
},gamehall.gamehall.HundredScenePacketID.PACKET_SC_HUNDREDSCENE_GETPLAYERNUM,gamehall.gamehall.SCHundredSceneGetPlayerNum);
SocketPackTool.registerPackFunc(gamehall.gamehall.HundredScenePacketID.PACKET_CS_HUNDREDSCENE_GETPLAYERNUM,gamehall.gamehall.CSHundredSceneGetPlayerNum);

//获取场次人数
SocketPackTool.register((msg:any)=>{

    EventMgr.getInstance().dispatchEvent(EventName.SC_FREEMODE_PLAYERNUM,msg);
},gamehall.gamehall.CoinSceneGamePacketID.PACKET_SC_COINSCENE_GETPLAYERNUM,gamehall.gamehall.SCCoinSceneGetPlayerNum);
SocketPackTool.registerPackFunc(gamehall.gamehall.HundredScenePacketID.PACKET_CS_HUNDREDSCENE_GETPLAYERNUM,gamehall.gamehall.CSCoinSceneGetPlayerNum);




//玩家下注历史
//废弃，每个游戏独立，不要再使用
SocketPackTool.register((msg:any)=>{
    console.log("玩家下注历史数据广播");
    console.log(msg);
    console.log("玩家下注历史数据广播");
    EventMgr.getInstance().dispatchEvent(EventName.SC_HUNDRED_PLAYER_HISTORY,msg);
},gamehall.gamehall.HundredScenePacketID.PACKET_SC_GAMEPLAYERHISTORY,gamehall.gamehall.SCPlayerHistory);


//大奖历史
SocketPackTool.register((msg:any)=>{
    console.log("大奖历史数据广播");
    console.log(msg);
    console.log("大奖历史数据广播");
    EventMgr.getInstance().dispatchEvent(EventName.SC_HUNDRED_BIGWIN_HISTORY,msg);
},gamehall.gamehall.HundredScenePacketID.PACKET_SC_GAMEBIGWINHISTORY,gamehall.gamehall.SCBigWinHistory);

//客户端请求爆奖池的列表
//GameHistoryModel:2 爆奖池记录  
//1 历史记录  --废弃
SocketPackTool.registerPackFunc(gamehall.gamehall.HundredScenePacketID.PACKET_CS_GAMEHISTORYINFO,gamehall.gamehall.CSHundredSceneGetHistoryInfo);


//小游戏奖池数据变化
// SocketPackTool.register((msg:any)=>{
//     console.log("小游戏奖池数据变化");
//     console.log(msg);
//     EventMgr.getInstance().dispatchEvent(EventName.SC_Mini_Jackpot_Change,msg);
// },gamehall.gamehall.HundredScenePacketID.PACKET_BD_GAMEJACKPOT,gamehall.gamehall.BroadcastGameJackpot);
