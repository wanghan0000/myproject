import { EventMgr } from "../events/eventmgr";
import { SocketPackTool } from "../panda/net/SocketPackTool";
import activity from "../protocol/activity.js";

SocketPackTool.register(function (msg: activity.activity.SCSign) {
    EventMgr.getInstance().dispatchEvent(activity.activity.ActSignPacketID[activity.activity.ActSignPacketID.PACKET_SCSign], msg);
}, activity.activity.ActSignPacketID.PACKET_SCSign, activity.activity.SCSign);

SocketPackTool.registerPackFunc(activity.activity.ActSignPacketID.PACKET_CSSign, activity.activity.CSSign);

SocketPackTool.register(function (msg: activity.activity.SCSignData) {
    EventMgr.getInstance().dispatchEvent(activity.activity.ActSignPacketID[activity.activity.ActSignPacketID.PACKET_SCSignData], msg);
}, activity.activity.ActSignPacketID.PACKET_SCSignData, activity.activity.SCSignData);

SocketPackTool.registerPackFunc(activity.activity.ActSignPacketID.PACKET_CSSignData, activity.activity.CSSignData);

