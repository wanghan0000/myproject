import friend from "../../../ScriptCore/protocol/friend.js";
import chat from "../../../ScriptCore/protocol/chat.js";
import { UIManager } from "../../../ScriptCore/UIFrame/UIManager";
import { IMessageHandler, MessageHandler } from "../common/Type";
import { WndSocial } from "../friend/WndSocial";
import { TienlenRuntime } from "../TienlenRuntime";
import { UserData } from "../../../ScriptCore/data/UserData";
import { gamehall } from "../../../ScriptCore/protocol/gamehall.js";
import TienlenHelper from "../TienlenHelper";
import { WndUserInfo } from "../friend/WndUserInfo";
import EventSystem from "../common/EventSystem";
import { Evt_NoFriend, Evt_UnreadChange } from "./EventHandlers";
import { WndSocialTips2 } from "../friend/WndSocialTips2";
import { PageFriend } from "../friend/PageFriend.js";
import { I18nMgr } from "../../../ScriptCore/i18n/I18nMgr";

@MessageHandler(friend.friend.FriendPacketID.PACKET_SCFriendList)
export class SCFriendListHandler implements IMessageHandler {
    async run(msg: friend.friend.SCFriendList) {
        if (msg.ListType == 0)
            EventSystem.instance.publish(Evt_NoFriend, msg.FriendArr.length == 0);
    }
}

@MessageHandler(friend.friend.FriendPacketID.PACKET_SCFriendOp)
export class SCFriendOpHandler implements IMessageHandler {
    async run(msg: friend.friend.SCFriendOp) {
        TienlenRuntime.addUnreadOpList([msg]);
        if (msg.OpRetCode == 0) {
            let wnd = WndSocial.instance;
            if (msg.OpCode == 3) {
                if (msg.Friend) {//别人删除
                    TienlenRuntime.clearChat(msg.Friend.SnId);
                    (wnd.getCurPage(1) as PageFriend)?.clearPageChat(msg.Friend.SnId);
                } else {
                    TienlenRuntime.clearChat(msg.SnId);
                    (wnd.getCurPage(1) as PageFriend)?.clearPageChat(msg.SnId);
                }
            }
            if (wnd) {
                wnd.checkUnread();
            } else {
                if (msg.OpRetCode == 0 && msg.Friend && (msg.OpCode == 0 || msg.OpCode == 1 || msg.OpCode == 3))
                    EventSystem.instance.publish(Evt_UnreadChange, true);
            }
        }
        let wndInfo = WndUserInfo.instance;
        wndInfo && wndInfo.refresh(msg);
        if (msg.OpRetCode == friend.friend.OpResultCode.OPRC_Friend_AlreadyAdd) {
            TienlenHelper.showFloatTips('已经是好友');
        } else if (msg.OpRetCode == friend.friend.OpResultCode.OPRC_Friend_AlreadyApply) {
            TienlenHelper.showFloatTips('已经申请过');
        } else if (msg.OpRetCode == friend.friend.OpResultCode.OPRC_Friend_NotOpMyself) {
            TienlenHelper.showFloatTips('不能操作自己');
        } else if (msg.OpRetCode) {
            TienlenHelper.showFloatTips(I18nMgr.getInstance().getStringByKey("lobby.caozuoshibaiTxt"));
        }
    }
}

@MessageHandler(friend.friend.FriendPacketID.PACKET_SCQueryPlayerGameLog)
export class SCQueryGameLogListHandler implements IMessageHandler {
    async run(msg: friend.friend.SCQueryPlayerGameLog) {

    }
}

@MessageHandler(friend.friend.FriendPacketID.PACKET_SCInviteFriend)
export class SCInviteFriendHandler implements IMessageHandler {
    async run(msg: friend.friend.SCInviteFriend) {
        if (msg.OpRetCode == 0) {
            if (UserData.getInstance().getSnId() != msg.SrcSnId) {
                // TienlenHelper.showInvite(msg);
                WndSocialTips2.show(msg);
            }
        } else if (msg.OpRetCode == friend.friend.OpResultCode.OPRC_InviteFriend_Gaming) {
            TienlenHelper.showFloatTips('该好友正在牌桌内，无法邀请');
        } else if (msg.OpRetCode == friend.friend.OpResultCode.OPRC_InviteFriend_NoOnline) {
            TienlenHelper.showFloatTips('好友已离线');
        } else if (msg.OpRetCode == friend.friend.OpResultCode.OPRC_InviteFriend_NotFriend) {
            TienlenHelper.showFloatTips('好友不存在');
        } else {
            TienlenHelper.showFloatTips(I18nMgr.getInstance().getStringByKey("lobby.caozuoshibaiTxt"));
        }
    }
}

@MessageHandler(friend.friend.FriendPacketID.PACKET_SCInviteFriendOp)
export class SCInviteFriendOpHandler implements IMessageHandler {
    async run(msg: friend.friend.SCInviteFriendOp) {
        if (msg.OpRetCode == friend.friend.OpResultCode.OPRC_InviteFriend_RoomFull) {
            TienlenHelper.showFloatTips('您要进入的房间人数已满');
        } else if (msg.OpRetCode == friend.friend.OpResultCode.OPRC_InviteFriend_CoinLimit) {
            TienlenHelper.showFloatTips('您的金钱不足，无法进入房间');
        } else if (msg.OpRetCode == friend.friend.OpResultCode.OPRC_InviteFriend_RoomNotExist || msg.OpRetCode == friend.friend.OpResultCode.OPRC_InviteFriend_SceneNotExist) {
            TienlenHelper.showFloatTips('房间不存在');
        } else if (msg.OpRetCode) {
            TienlenHelper.showFloatTips(I18nMgr.getInstance().getStringByKey("lobby.caozuoshibaiTxt"));
        }
    }
}

@MessageHandler(friend.friend.FriendPacketID.PACKET_SCFriendApplyData)
export class SCFriendApplyHandler implements IMessageHandler {
    async run(msg: friend.friend.SCFriendApplyData) {

    }
}

@MessageHandler(friend.friend.FriendPacketID.PACKET_SCFriendUnreadData)
export class SCFriendUnreadHandler implements IMessageHandler {
    async run(msg: friend.friend.SCFriendUnreadData) {

    }
}

@MessageHandler(friend.friend.FriendPacketID.PACKET_SCFuzzyQueryPlayer)
export class SCFuzzyQueryPlayerHandler implements IMessageHandler {
    async run(msg: friend.friend.SCFuzzyQueryPlayer) {

    }
}

@MessageHandler(chat.chat.ChatPacketID.PACKET_SCChatMsg)
export class SCChatMsgListHandler implements IMessageHandler {
    async run(msg: chat.chat.SCChatMsg) {
        if (msg.OpRetCode == chat.chat.OpResultCode.OPRC_Chat_IsShield) {
            TienlenHelper.showFloatTips("已被对方屏蔽");
            return;
        } else if (msg.OpRetCode == chat.chat.OpResultCode.OPRC_Chat_Shield) {
            TienlenHelper.showFloatTips("已屏蔽对方");
            return;
        }
        let log = new chat.chat.ChatLog();
        log.SrcSnId = msg.Snid;
        log.SrcHead = msg.Head;
        log.ToSnId = msg.Msg2Snid
        log.Content = msg.Content;
        log.SrcName = msg.Name;
        log.Ts = msg.Ts;
        if (msg.Msg2Snid == 0) {
            TienlenRuntime.addChat(msg.Msg2Snid, log);
            let wnd = WndSocial.instance;
            wnd && wnd.addNewMsg(log);
        } else {
            let targetSnid = msg.Snid == UserData.getInstance().getSnId() ? msg.Msg2Snid : msg.Snid;
            if (!TienlenRuntime.hasChatLog(targetSnid)) {//第一次加好友成功，获取不到聊天记录回包，这里修正一下
                TienlenRuntime.setChatLog(targetSnid, []);
            }
            TienlenRuntime.addChat(targetSnid, log);
            let wnd = WndSocial.instance;
            wnd && wnd.addNewMsg(log);
            if (msg.Msg2Snid == UserData.getInstance().getSnId()) {
                TienlenRuntime.addUnreadChat(msg.Snid);
            }
        }
    }
}

@MessageHandler(chat.chat.ChatPacketID.PACKET_SCGetChatLog)
export class SCChatMsgLogListHandler implements IMessageHandler {
    async run(msg: chat.chat.SCGetChatLog) {
        TienlenRuntime.setChatLog(msg.Snid, msg.ChatLogs);
    }
}

@MessageHandler(chat.chat.ChatPacketID.PACKET_SCShieldMsg)
export class SCShieldMsgLogListHandler implements IMessageHandler {
    async run(msg: chat.chat.SCShieldMsg) {

    }
}