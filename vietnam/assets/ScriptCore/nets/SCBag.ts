import { _decorator, Component, Node } from 'cc';
import { BagData } from '../data/BagData';
import { EventMgr } from '../events/eventmgr';
import { EventName } from '../events/EventName';
import { SocketDataTool } from '../panda/net/SocketDataTool';
import { SocketPackTool } from '../panda/net/SocketPackTool';
import  bag  from '../protocol/bag.js';
const { ccclass, property } = _decorator;


// SocketPackTool.register(function (msg: any) {
//     console.log("获取到的数据列表");
//     console.log(msg);
//     console.log("获取到的数据列表");
//     EventMgr.getInstance().dispatchEvent(EventName.SC_SHOPINFO, msg);
// }, shop.shop.SPacketID.PACKET_SC_SHOP_INFO, shop.shop.SCShopInfo);
// SocketPackTool.registerPackFunc(shop.shop.SPacketID.PACKET_CS_SHOP_INFO, shop.shop.CSShopInfo);


//背包的消息列表
SocketPackTool.register(function(msg:any){
    console.log("背包的数据列表");
    console.log(msg);
    console.log("背包的数据列表");
    BagData.getInstance().initBagData(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_ALL_BAG_INFO,msg);
    EventMgr.getInstance().dispatchEvent(EventName.BAG_DATA_ASYNC_NOTIFY);
},bag.bag.SPacketID.PACKET_ALL_BAG_INFO,bag.bag.SCBagInfo);
SocketPackTool.registerPackFunc(bag.bag.SPacketID.PACKET_ALL_BAG_INFO,bag.bag.CSBagInfo);

//背包中道具的使用
SocketPackTool.register(function(msg:any){
    console.log("背包消息的使用");
    console.log(msg);
    console.log("背包消息的使用");
    BagData.getInstance().onUseBagData(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_ALL_BAG_USE,msg);
},bag.bag.SPacketID.PACKET_ALL_BAG_USE,bag.bag.SCUpBagInfo);
SocketPackTool.registerPackFunc(bag.bag.SPacketID.PACKET_ALL_BAG_USE,bag.bag.CSUpBagInfo);

//背包的数据发生变化
SocketPackTool.register(function(msg:any){
    console.log("背包数据发生了变化");
    console.log(msg);
    console.log("背包数据发生了变化");
    BagData.getInstance().onAsyncBagData(msg);
    EventMgr.getInstance().dispatchEvent(EventName.BAG_DATA_ASYNC_NOTIFY);
    
},bag.bag.SPacketID.PACKET_SC_SYNCBAGDATA,bag.bag.SCSyncBagData);
