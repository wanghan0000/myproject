/**
 * player.proto
 */

// let packetid_pb                         = require("../protocols/packetid_pb.js");
// let gate_pb                             = require("../protocols/gate_pb.js");

// import * as packetid_pb from "../../protocol/packetid";
// import * as gate_pb from "../../protocol/gate";

import { SocketPackTool } from "../panda/net/SocketPackTool";
import { SocketMgr } from "../panda/net/SocketMgr";
import login from "../protocol/login.js";





// SocketPackTool.register(function(msg: any): void {


// }, protocol.MmoPacketID.PACKET_SC_PONG, protocol.SCPong);

// // test
// SocketPackTool.register(function(msg: any): void {

//     SocketMgr.sendPing();

// }, protocol.MmoPacketID.PACKET_CS_PING, protocol.CSPing);


/**
 * bingBundle消息
 */
SocketPackTool.register(function (msg: any): void {
    console.log("SCBindBundle消息");
    console.log(msg);
    console.log("SCBindBundle消息");
}, login.login.GatePacketID.PACKET_SC_BINDBUNDLE, login.login.SCBindBundle);



SocketPackTool.registerPackFunc(login.login.GatePacketID.PACKET_CS_BINDBUNDLE, login.login.CSBindBundle);

/**
 * ping pong消息
 */
SocketPackTool.register(function (msg: any): void {
    console.log(new Date().toLocaleString() + " SCPong消息");
    console.log(msg);
}, login.login.GatePacketID.PACKET_SC_PONG, login.login.SCPong);

SocketPackTool.registerPackFunc(login.login.GatePacketID.PACKET_CS_PING, login.login.CSPing);

//客户端发送给服务器的LogincAck
SocketPackTool.registerPackFunc(login.login.GatePacketID.PACKET_CS_LOGICACK, login.login.CSLogicAck);



