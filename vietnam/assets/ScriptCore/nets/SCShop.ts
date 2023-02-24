import { _decorator, Component, Node } from 'cc';
import { ShopData } from '../data/ShopData';
import { EventMgr } from '../events/eventmgr';
import { EventName } from '../events/EventName';
import { SocketPackTool } from '../panda/net/SocketPackTool';
import shop from '../protocol/shop.js';
const { ccclass, property } = _decorator;






//获取商城消息列表
SocketPackTool.register(function (msg: any) {
    console.log("获取到的数据列表");
    console.log(msg);
    console.log("获取到的数据列表");
    ShopData.getInstance().onShopData(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_SHOPINFO, msg);
}, shop.shop.SPacketID.PACKET_SC_SHOP_INFO, shop.shop.SCShopInfo);
SocketPackTool.registerPackFunc(shop.shop.SPacketID.PACKET_CS_SHOP_INFO, shop.shop.CSShopInfo);

//商城的商品兑换 的消息发送 和接收
SocketPackTool.register(function (msg: any) {
    console.log("商城兑换");
    console.log(msg);
    console.log("商城兑换");
    ShopData.getInstance().onShopExchange(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_SHOP_VCPAYSHOP, msg);
}, shop.shop.SPacketID.PACKET_SC_SHOP_VCPAYSHOP, shop.shop.SCVCPayShop);
SocketPackTool.registerPackFunc(shop.shop.SPacketID.PACKET_CS_SHOP_VCPAYSHOP, shop.shop.CSVCPayShop);

//商城观看广告的数据
SocketPackTool.register(function(msg:any){
    console.log("观看广告的消息回调");
    console.log(msg);
    console.log("观看广告的消息回调");
    ShopData.getInstance().onAdLooked(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_SHOP_ADLOOKED,msg);
},shop.shop.SPacketID.PACKET_SC_SHOP_ADLOOKED,shop.shop.SCAdLooked);
SocketPackTool.registerPackFunc(shop.shop.SPacketID.PACKET_CS_SHOP_ADLOOKED,shop.shop.CSAdLooked);

//兑换物品列表
SocketPackTool.register(function(msg:any){
    console.log("兑换物品列表的消息回调");
    console.log(msg);
    console.log("兑换物品列表的消息回调");
    EventMgr.getInstance().dispatchEvent(EventName.SC_SHOP_EXCHANGELIST,msg);
},shop.shop.SPacketID.PACKET_SC_SHOP_EXCHANGELIST, shop.shop.SCShopExchangeList);
SocketPackTool.registerPackFunc(shop.shop.SPacketID.PACKET_CS_SHOP_EXCHANGELIST, shop.shop.CSShopExchangeList);

//兑换物品记录
SocketPackTool.register(function(msg:any){
    console.log("兑换物品记录的消息回调");
    console.log(msg);
    console.log("兑换物品记录的消息回调");
    EventMgr.getInstance().dispatchEvent(EventName.SC_SHOP_EXCHANGERECORD,msg);
},shop.shop.SPacketID.PACKET_SC_SHOP_EXCHANGERECORD, shop.shop.SCShopExchangeRecord);
SocketPackTool.registerPackFunc(shop.shop.SPacketID.PACKET_CS_SHOP_EXCHANGERECORD, shop.shop.CSShopExchangeRecord);

//兑换物品
SocketPackTool.register(function(msg:any){
    console.log("兑换物品的消息回调");
    console.log(msg);
    console.log("兑换物品的消息回调");
    EventMgr.getInstance().dispatchEvent(EventName.SC_SHOP_EXCHANGE,msg);
},shop.shop.SPacketID.PACKET_SC_SHOP_EXCHANGE, shop.shop.SCShopExchange);
SocketPackTool.registerPackFunc(shop.shop.SPacketID.PACKET_CS_SHOP_EXCHANGE, shop.shop.CSShopExchange);