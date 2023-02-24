import { _decorator, Component, Node, Socket } from 'cc';
import { EventMgr } from '../events/eventmgr';
import { EventName } from '../events/EventName';
import { SocketPackTool } from '../panda/net/SocketPackTool';
import  message  from '../protocol/message.js';
const { ccclass, property } = _decorator;


// SocketPackTool.register(function (msg: any) {
//     console.log("获取到的数据列表");
//     console.log(msg);
//     console.log("获取到的数据列表");
//     EventMgr.getInstance().dispatchEvent(EventName.SC_SHOPINFO, msg);
// }, shop.shop.SPacketID.PACKET_SC_SHOP_INFO, shop.shop.SCShopInfo);
// SocketPackTool.registerPackFunc(shop.shop.SPacketID.PACKET_CS_SHOP_INFO, shop.shop.CSShopInfo);

//邮件的消息
SocketPackTool.register(function(msg:any){
    console.log("获取邮件的列表数据");
    console.log(msg);
    console.log("获取邮件的列表数据");
    EventMgr.getInstance().dispatchEvent(EventName.SC_MESSAGELIST,msg);
},message.message.MSGPacketID.PACKET_SC_MESSAGELIST,message.message.SCMessageList);
SocketPackTool.registerPackFunc(message.message.MSGPacketID.PACKET_CS_MESSAGELIST,message.message.CSMessageList);

//读取邮件
SocketPackTool.register(function(msg:any){
    console.log("读取单个邮件");
    console.log(msg);
    console.log("读取单个邮件");
    EventMgr.getInstance().dispatchEvent(EventName.SC_MESSAGEREAD,msg);
},message.message.MSGPacketID.PACKET_SC_MESSAGEREAD,message.message.SCMessageRead);
SocketPackTool.registerPackFunc(message.message.MSGPacketID.PACKET_CS_MESSAGEREAD,message.message.CSMessageRead);

//领取附件
SocketPackTool.register(function(msg:any){
    console.log("领取附件");
    console.log(msg);
    console.log("领取附件");
    EventMgr.getInstance().dispatchEvent(EventName.SC_GETMESSAGEATTACH,msg);
},message.message.MSGPacketID.PACKET_SC_GETMESSAGEATTACH,message.message.SCGetMessageAttach);
SocketPackTool.registerPackFunc(message.message.MSGPacketID.PACKET_CS_GETMESSAGEATTACH,message.message.CSGetMessageAttach);

//删除邮件
SocketPackTool.register(function(msg:any){
    console.log("删除邮件");
    console.log(msg);
    console.log("删除邮件");
    EventMgr.getInstance().dispatchEvent(EventName.SC_MESSAGEDEL,msg);
},message.message.MSGPacketID.PACKET_SC_MESSAGEDEL,message.message.SCMessageDel);
SocketPackTool.registerPackFunc(message.message.MSGPacketID.PACKET_CS_MESSAGEDEL,message.message.CSMessageDel);

//
