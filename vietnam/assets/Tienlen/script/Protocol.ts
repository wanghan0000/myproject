import { EventMgr } from '../../ScriptCore/events/eventmgr';
import { SocketPackTool } from '../../ScriptCore/panda/net/SocketPackTool';
import friend from '../../ScriptCore/protocol/friend.js';
import chat from '../../ScriptCore/protocol/chat.js';
import EventSystem from './common/EventSystem';
import OpcodeTypeHelper from './common/helper/OpcodeTypeHelper';
import { IMessageHandler } from './common/Type';
import _ from './protocol/tienlen.js';
import TienlenHelper from './TienlenHelper';
import { EventName } from '../../ScriptCore/events/EventName';
import player from '../../ScriptCore/protocol/player.js';
import tournament from './protocol/tournament.js';
export default class Protocol {
    public static register() {
        OpcodeTypeHelper.register(_.tienlen);
        OpcodeTypeHelper.register(friend.friend);
        OpcodeTypeHelper.register(chat.chat);
        OpcodeTypeHelper.register(tournament.tournament)
        let packetId = OpcodeTypeHelper.getPacketId(_.tienlen);
        this._register(packetId);
        packetId = OpcodeTypeHelper.getPacketId(friend.friend);
        this._register(packetId)
        packetId = OpcodeTypeHelper.getPacketId(chat.chat);
        this._register(packetId)
        packetId = OpcodeTypeHelper.getPacketId(tournament.tournament);
        this._register(packetId);
        SocketPackTool.register((msg: any) => {
            let pkgId = player.player.PlayerPacketID.PACKET_SCGAMEEXDROPITEMS;
            let handler: IMessageHandler = EventSystem.instance.messageHandlers.get(pkgId)[0];
            EventMgr.getInstance().dispatchEvent(player.player.PlayerPacketID[pkgId], msg);
            TienlenHelper.log(msg)
            handler.run(msg)
        }, player.player.PlayerPacketID.PACKET_SCGAMEEXDROPITEMS, player.player.SCGameExDropItems);
    }

    private static _register(packetId: any) {
        for (const key in packetId) {
            if (Object.prototype.hasOwnProperty.call(packetId, key)) {
                let isClient = key.indexOf("_CS") != -1;
                const element = packetId[key];
                if (!isClient && !EventSystem.instance.messageHandlers.has(element) && element != 0) {
                    console.warn(`消息:${key} id:${element} 没有注册处理函数!`)
                    continue;
                }
                let msgCls = OpcodeTypeHelper.getType(element);
                if (isClient) {
                    SocketPackTool.registerPackFunc(element, msgCls);
                } else if (key.indexOf("_SC") != -1) {
                    let handler: IMessageHandler = EventSystem.instance.messageHandlers.get(element)[0];
                    SocketPackTool.register((msg: any) => {
                        EventMgr.getInstance().dispatchEvent(OpcodeTypeHelper.getPacketIDStr(element), msg);
                        TienlenHelper.log(msg)
                        handler.run(msg)
                    }, element, msgCls);
                } else {
                    console.warn("regiter packetid error")
                }
            }
        }
    }


    public static unRegister() {
        let packetId = OpcodeTypeHelper.getPacketId(_.tienlen);
        for (const key in packetId) {
            if (Object.prototype.hasOwnProperty.call(packetId, key)) {
                const element = packetId[key];
                SocketPackTool.unregister(element);
            }
        }
        //退出游戏到大厅,重新注册大厅相关协议
        SocketPackTool.register(function (msg: friend.friend.SCFriendList) {
            EventMgr.getInstance().dispatchEvent(EventName.SCFriendList, msg);
        }, friend.friend.FriendPacketID.PACKET_SCFriendList, friend.friend.SCFriendList);
    }



}