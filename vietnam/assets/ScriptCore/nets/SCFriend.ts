import { UserData } from "../data/UserData";
import { EventMgr } from "../events/eventmgr";
import { EventName } from "../events/EventName";
import { SocketPackTool } from "../panda/net/SocketPackTool";
import friend from "../protocol/friend.js";

SocketPackTool.register(function (msg: friend.friend.SCFriendApplyData) {
    UserData.getInstance().unreadRequestList = msg;
}, friend.friend.FriendPacketID.PACKET_SCFriendApplyData, friend.friend.SCFriendApplyData);


SocketPackTool.register(function (msg: friend.friend.SCFriendUnreadData) {
    UserData.getInstance().unreadChatList = msg;
}, friend.friend.FriendPacketID.PACKET_SCFriendUnreadData, friend.friend.SCFriendUnreadData);


SocketPackTool.register(function (msg: friend.friend.SCFriendOp) {
    UserData.getInstance().addUnreadFriendOp(msg);
}, friend.friend.FriendPacketID.PACKET_SCFriendOp, friend.friend.SCFriendOp);

SocketPackTool.register(function (msg: friend.friend.SCInviteFriend) {
    if (UserData.getInstance().getSnId() != msg.SrcSnId) {
        UserData.getInstance().inviteFriend = msg;
    }
}, friend.friend.FriendPacketID.PACKET_SCInviteFriend, friend.friend.SCInviteFriend);


//好友列表的数据
SocketPackTool.register(function (msg: friend.friend.SCFriendList) {
    console.log("获取好友列表的数据========");
    console.log(msg);
    console.log("获取好友列表的数据========");
    EventMgr.getInstance().dispatchEvent(EventName.SCFriendList, msg);
}, friend.friend.FriendPacketID.PACKET_SCFriendList, friend.friend.SCFriendList);

SocketPackTool.registerPackFunc(friend.friend.FriendPacketID.PACKET_CSFriendList, friend.friend.CSFriendList);