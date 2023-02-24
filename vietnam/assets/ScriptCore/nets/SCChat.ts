import { UserData } from "../data/UserData";
import { EventMgr } from "../events/eventmgr";
import { EventName } from "../events/EventName";
import { SocketPackTool } from "../panda/net/SocketPackTool";
import chat from "../protocol/chat.js";

SocketPackTool.register(function (msg: chat.chat.SCChatMsg) {
    UserData.getInstance().addUnreadChatMsg(msg);
}, chat.chat.ChatPacketID.PACKET_SCChatMsg, chat.chat.SCChatMsg);

SocketPackTool.registerPackFunc(chat.chat.ChatPacketID.PACKET_CSChatMsg, chat.chat.CSChatMsg);

// SocketPackTool.register(function (msg: chat.chat.SCGetChatLog) {
// }, chat.chat.ChatPacketID.PACKET_SCGetChatLog, chat.chat.SCGetChatLog);

// SocketPackTool.registerPackFunc(chat.chat.ChatPacketID.PACKET_CSGetChatLog, chat.chat.CSGetChatLog);

// SocketPackTool.register(function (msg: chat.chat.SCShieldMsg) {

// }, chat.chat.ChatPacketID.PACKET_SCShieldMsg, chat.chat.SCShieldMsg);

// SocketPackTool.registerPackFunc(chat.chat.ChatPacketID.PACKET_CSShieldMsg, chat.chat.CSShieldMsg);


// SocketPackTool.registerPackFunc(chat.chat.ChatPacketID.PACKET_CSReadChatMsg, chat.chat.CSReadChatMsg);
