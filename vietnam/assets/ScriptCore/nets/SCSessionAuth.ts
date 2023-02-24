/**
 * sessionauth.proto
 */

import { SocketPackTool }               from "../panda/net/SocketPackTool";

import { EventName } from "../events/EventName";
import { EventMgr } from "../events/eventmgr";
import  login  from "../protocol/login.js";





/**
 * 客户端和登录上服务器之后
 * 客户端发送SSPAcketAuth  -1004
 * 服务器回消息SSPacketAuthAck  -1006
 */

//解包
SocketPackTool.register(function(msg: any): void {
    //服务验证通过，可以发送登录消息
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_Auth_Ack,msg);
    
}, login.login.GatePacketID.PACKET_SC_AUTH, login.login.SSPacketAuthAck);

//注册封包消息
SocketPackTool.registerPackFunc(login.login.GatePacketID.PACKET_CS_AUTH,login.login.SSPacketAuth);






