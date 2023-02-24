import { EventMgr } from "../../ScriptCore/events/eventmgr";
import { SocketPackTool } from "../../ScriptCore/panda/net/SocketPackTool";
import EventSystem from "./common/EventSystem";
import OpcodeTypeHelper from "./common/helper/OpcodeTypeHelper";
import { IMessageHandler } from "./common/Type";
import tala from "./protocol/tala.js";
import TalaHelper from "./TalaHelper";

export default class TalaProtocol {
    public static register() {
        OpcodeTypeHelper.register(tala.tala);
        let packetId = OpcodeTypeHelper.getPacketId(tala.tala);
        this._register(packetId);
    }

    private static _register(packetId: any) {
        for (const key in packetId) {
            if (Object.prototype.hasOwnProperty.call(packetId, key)) {
                let isClient = key.indexOf("_CS") != -1;
                const element = packetId[key];
                if (element == 0) continue;
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
                        TalaHelper.log(msg);
                        EventMgr.getInstance().dispatchEvent(OpcodeTypeHelper.getPacketIDStr(element), msg);
                        handler.run(msg)
                    }, element, msgCls);
                } else {
                    console.warn("regiter packetid error")
                }
            }
        }
    }


    public static unRegister() {
        let packetId = OpcodeTypeHelper.getPacketId(tala.tala);
        for (const key in packetId) {
            if (Object.prototype.hasOwnProperty.call(packetId, key)) {
                const element = packetId[key];
                SocketPackTool.unregister(element);

            }
        }
        //退出游戏到大厅,重新注册大厅相关协议
        // SocketPackTool.register(function (msg: friend.friend.SCFriendList) {
        //     EventMgr.getInstance().dispatchEvent(EventName.SCFriendList, msg);
        // }, friend.friend.FriendPacketID.PACKET_SCFriendList, friend.friend.SCFriendList);
    }



} 