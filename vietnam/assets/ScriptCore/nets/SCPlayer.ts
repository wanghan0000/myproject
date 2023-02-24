/**
 * player.proto
 */

import { RedDotData } from "../data/RedDotData";
import { UserData } from "../data/UserData";
import { EventMgr } from "../events/eventmgr";
import { EventName } from "../events/EventName";
import { SocketPackTool } from "../panda/net/SocketPackTool";
import { Utils } from "../panda/utils/Utils";
import player from "../protocol/player.js";

// let packetid_pb                             = require("../protocols/packetid_pb.js");
// let player_pb                               = require("../protocols/player_pb.js");





SocketPackTool.register(function (msg: player.player.SCPlayerData) {

    console.log("获取到玩家数据");
    console.log(msg);
    console.log("获取到玩家数据");

    //应该是获取到playerData后用户才能登录
    UserData.getInstance().onPlayerData(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_PlayerData);
    EventMgr.getInstance().dispatchEvent(EventName.SC_USER_GOLD_CHANGE);
}, player.player.PlayerPacketID.PACKET_SC_PLAYERDATA, player.player.SCPlayerData);

SocketPackTool.registerPackFunc(player.player.PlayerPacketID.PACKET_CS_PLAYERDATA, player.player.CSPlayerData)


SocketPackTool.register(function (msg: player.player.SCQueryPlayer) {
    EventMgr.getInstance().dispatchEvent(EventName.SC_PlayerQuery, msg);
}, player.player.PlayerPacketID.PACKET_SC_QUERYPLAYER, player.player.SCQueryPlayer);

SocketPackTool.registerPackFunc(player.player.PlayerPacketID.PACKET_CS_QUERYPLAYER, player.player.CSQueryPlayer)

/* 
message SCPlayerCoinChange {
  int32 Pos = 1;
  int64 AddCoin = 2;
  int64 RestCoin = 3;
}
*/
SocketPackTool.register((msg: any) => {
    console.log(msg);
    UserData.getInstance().setCoin(msg.RestCoin);
    EventMgr.getInstance().dispatchEvent(EventName.SC_Player_Coin_Change, msg);
}, player.player.PlayerPacketID.PACKET_SC_PLAYERCOINCHANGE, player.player.SCPlayerCoinChange);

/**
 * 玩家的注册消息
 */
SocketPackTool.register((msg: any) => {
    console.log("玩家注册返回的消息");
    console.log(msg);
    console.log("玩家注册返回的消息");
    EventMgr.getInstance().dispatchEvent(EventName.SC_Register, msg);
}, player.player.PlayerPacketID.PACKET_SC_REGISTER, player.player.SCRegister);
SocketPackTool.registerPackFunc(player.player.PlayerPacketID.PACKET_CS_REGISTER, player.player.CSRegister);

/*
* 玩家状态更新
 */
SocketPackTool.register((msg: any) => {
    console.log("玩家状态更新");
    console.log(msg);
    console.log("玩家状态更新");
    EventMgr.getInstance().dispatchEvent(EventName.SC_PlayerFlagUpdate, msg);
}, player.player.PlayerPacketID.PACKET_SC_PLAYERFLAG, player.player.SCPlayerFlag);


/**
 * 服务器推送钱的变化
 *  UpdateField_Coin int64 = 1 << iota
    UpdateField_SafeBoxCoin
    UpdateField_VIP
    UpdateField_CoinPayTotal
    UpdateField_TotalConvertibleFlow
    UpdateField_Ticket
    UpdateField_Grade
    UpdateField_Diamond
 */
SocketPackTool.register((msg: player.player.SCPlayerDataUpdate) => {
    console.log("玩家的金币数和钻石数发生变化，实时更新到界面上");
    console.log(msg);
    console.log("玩家的金币数和钻石数发生变化，实时更新到界面上");
    if ((msg.UpdateField & Utils.UpdateField_Coin) == Utils.UpdateField_Coin) {
        //金币
        UserData.getInstance().setCoin(msg.Coin);
    }
    if ((msg.UpdateField & Utils.UpdateField_Diamond) == Utils.UpdateField_Diamond) {
        UserData.getInstance().setDiamond(msg.Diamond);
    }
    if ((msg.UpdateField & Utils.UpdateField_VCoin) == Utils.UpdateField_VCoin) {
        UserData.getInstance().setVCoin(msg.VCoin);
    }

    EventMgr.getInstance().dispatchEvent(EventName.SC_USER_GOLD_CHANGE, msg);
}, player.player.PlayerPacketID.PACKET_SC_PLAYERDATAUPDATE, player.player.SCPlayerDataUpdate)

// VIP信息
SocketPackTool.register(function(msg:any){
    console.log("VIP信息");
    console.log(msg);
    console.log("VIP信息");
    EventMgr.getInstance().dispatchEvent(EventName.SC_VIPINFO, msg);
}, player.player.PlayerPacketID.PACKET_SC_VIPINFO, player.player.SCVIPInfo);
SocketPackTool.registerPackFunc(player.player.PlayerPacketID.PACKET_CS_VIPINFO, player.player.CSVIPInfo);

//vip充值
SocketPackTool.register(function(msg:any){
    console.log("vip充值");
    console.log(msg);
    console.log("vip充值");
    EventMgr.getInstance().dispatchEvent(EventName.SC_VIPBUY, msg);
}, player.player.PlayerPacketID.PACKET_SC_VIPBUY, player.player.SCVIPBuy);
SocketPackTool.registerPackFunc(player.player.PlayerPacketID.PACKET_CS_VIPBUY, player.player.CSVIPBuy);

//vip领取
SocketPackTool.register(function(msg:any){
    console.log("vip领取");
    console.log(msg);
    console.log("vip领取");
    EventMgr.getInstance().dispatchEvent(EventName.SC_DRAWVIPGIFT, msg);
}, player.player.PlayerPacketID.PACKET_SC_DRAWVIPGIFT, player.player.SCVIPDraw);
SocketPackTool.registerPackFunc(player.player.PlayerPacketID.PACKET_CS_DRAWVIPGIFT, player.player.CSVIPDraw);