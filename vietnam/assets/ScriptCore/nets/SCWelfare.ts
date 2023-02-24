import { _decorator, Component, Node, Socket } from 'cc';
import { EventMgr } from '../events/eventmgr';
import { EventName } from '../events/EventName';
import { SocketPackTool } from '../panda/net/SocketPackTool';
import  welfare  from '../protocol/welfare.js';
const { ccclass, property } = _decorator;



//救济金的消息接口
SocketPackTool.register(function(msg:any){
    console.log("获取救济金的数据");
    console.log(msg);
    console.log("获取救济金的数据");
    EventMgr.getInstance().dispatchEvent(EventName.SC_WELF_GETRELIEFFUND,msg);
},welfare.welfare.SPacketID.PACKET_SC_WELF_GETRELIEFFUND,welfare.welfare.SCGetReliefFund);
SocketPackTool.registerPackFunc(welfare.welfare.SPacketID.PACKET_CS_WELF_GETRELIEFFUND,welfare.welfare.CSGetReliefFund);


//转盘，7日签到数据
SocketPackTool.register(function(msg:any){
    console.log("获取转盘 7日签到的数据");
    console.log(msg);
    console.log("获取转盘 7日签到的数据");
    // EventMgr.getInstance().dispatchEvent(EventName.SC_WELF_WELFAREINFO,msg);
    EventMgr.getInstance().dispatchEvent(welfare.welfare.SPacketID[welfare.welfare.SPacketID.PACKET_SC_WELF_WELFAREINFO], msg);
},welfare.welfare.SPacketID.PACKET_SC_WELF_WELFAREINFO,welfare.welfare.SCWelfaredInfo);
SocketPackTool.registerPackFunc(welfare.welfare.SPacketID.PACKET_CS_WELF_WELFAREINFO, welfare.welfare.CSWelfaredInfo);

//转动转盘
SocketPackTool.register(function(msg:any){
    console.log("转动转盘");
    console.log(msg);
    console.log("转动转盘");
    EventMgr.getInstance().dispatchEvent(EventName.SC_WELF_GETTURNPLATE,msg);
},welfare.welfare.SPacketID.PACKET_SC_WELF_GETTURNPLATE, welfare.welfare.SCGetTurnplate);
SocketPackTool.registerPackFunc(welfare.welfare.SPacketID.PACKET_CS_WELF_GETTURNPLATE, welfare.welfare.CSGetTurnplate);

//累计签到奖励
SocketPackTool.register(function(msg:any){
    console.log("累计签到奖励");
    console.log(msg);
    console.log("累计签到奖励");
    EventMgr.getInstance().dispatchEvent(EventName.SC_WELF_GETADDUPSIGN, msg);
},welfare.welfare.SPacketID.PACKET_SC_WELF_GETADDUPSIGN, welfare.welfare.SCGetAddupSign);
SocketPackTool.registerPackFunc(welfare.welfare.SPacketID.PACKET_CS_WELF_GETADDUPSIGN, welfare.welfare.CSGetAddupSign);

//盲盒
SocketPackTool.register(function(msg:any){
    console.log("盲盒");
    console.log(msg);
    console.log("盲盒");
    EventMgr.getInstance().dispatchEvent(EventName.SC_WELF_BLINBOXINFO, msg);
},welfare.welfare.SPacketID.PACKET_SC_WELF_BLINBOXINFO, welfare.welfare.SCBlindBoxInfo);
SocketPackTool.registerPackFunc(welfare.welfare.SPacketID.PACKET_CS_WELF_BLINBOXINFO, welfare.welfare.CSBlindBoxInfo);

//领取盲盒
SocketPackTool.register(function(msg:any){
    console.log("领取盲盒");
    console.log(msg);
    console.log("领取盲盒");
    EventMgr.getInstance().dispatchEvent(EventName.SC_WELF_GETBLINBOX, msg);
},welfare.welfare.SPacketID.PACKET_SC_WELF_GETBLINBOX, welfare.welfare.SCGetBlindBox);
SocketPackTool.registerPackFunc(welfare.welfare.SPacketID.PACKET_CS_WELF_GETBLINBOX, welfare.welfare.CSGetBlindBox);

//超值首充数据
SocketPackTool.register(function(msg:any){
    console.log("超值首充数据");
    console.log(msg);
    console.log("超值首充数据");
    EventMgr.getInstance().dispatchEvent(EventName.SC_WELF_FIRSTPAYINFO, msg);
},welfare.welfare.SPacketID.PACKET_SC_WELF_FIRSTPAYINFO, welfare.welfare.SCWelfareFirstPayData);
SocketPackTool.registerPackFunc(welfare.welfare.SPacketID.PACKET_CS_WELF_FIRSTPAYINFO, welfare.welfare.CSWelfareFirstPayData);

//超值首充购买
SocketPackTool.register(function(msg:any){
    console.log("超值首充购买");
    console.log(msg);
    console.log("超值首充购买");
    EventMgr.getInstance().dispatchEvent(EventName.SC_WELF_FIRSTPAY, msg);
},welfare.welfare.SPacketID.PACKET_SC_WELF_FIRSTPAY, welfare.welfare.SCWelfareFirstPay);
SocketPackTool.registerPackFunc(welfare.welfare.SPacketID.PACKET_CS_WELF_FIRSTPAY, welfare.welfare.CSWelfareFirstPay);

//连充礼包信息
SocketPackTool.register(function(msg:any){
    console.log("连充礼包信息");
    console.log(msg);
    console.log("连充礼包信息");
    EventMgr.getInstance().dispatchEvent(EventName.SC_WELF_CONTINPAYINFO, msg);
},welfare.welfare.SPacketID.PACKET_SC_WELF_CONTINPAYINFO, welfare.welfare.SCWelfareContinuousPayData);
SocketPackTool.registerPackFunc(welfare.welfare.SPacketID.PACKET_CS_WELF_CONTINPAYINFO, welfare.welfare.CSWelfareContinuousPayData);

//连充礼包领取
SocketPackTool.register(function(msg:any){
    console.log("连充礼包领取");
    console.log(msg);
    console.log("连充礼包领取");
    EventMgr.getInstance().dispatchEvent(EventName.SC_WELF_CONTINPAY, msg);
},welfare.welfare.SPacketID.PACKET_SC_WELF_CONTINPAY, welfare.welfare.SCWelfareContinuousPay);
SocketPackTool.registerPackFunc(welfare.welfare.SPacketID.PACKET_CS_WELF_CONTINPAY, welfare.welfare.CSWelfareContinuousPay);