import { EventMgr } from '../events/eventmgr';
import { EventName } from '../events/EventName';
import { SocketPackTool } from '../panda/net/SocketPackTool';
import pets from '../protocol/pets.js';
import player from "../protocol/player.js";

//宠物的消息列表
SocketPackTool.register(function(msg:any){
    console.log("宠物的数据列表");
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_PET_INFO, msg);
}, pets.pets.PetsPacketID.PACKET_SC_PET_INFO, pets.pets.SCPetInfo);
SocketPackTool.registerPackFunc(pets.pets.PetsPacketID.PACKET_CS_PET_INFO, pets.pets.CSPetInfo);

//宠物升星
SocketPackTool.register(function(msg:any){
    console.log("宠物升星");
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_PET_RISINGSTAR, msg);
}, pets.pets.PetsPacketID.PACKET_SC_PET_RISINGSTAR, pets.pets.SCPetRisingStar);

//角色升星
SocketPackTool.register(function(msg:any){
    console.log("角色升星");
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_ROLE_RISINGSTAR, msg);
}, pets.pets.PetsPacketID.PACKET_SC_ROLE_RISINGSTAR, pets.pets.SCRoleRisingStar);

SocketPackTool.registerPackFunc(pets.pets.PetsPacketID.PACKET_CS_PET_RISINGSTAR, pets.pets.CSRisingStar);

//角色的消息列表
SocketPackTool.register(function(msg:any){
    console.log("角色的数据列表");
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_ROLE_INFO,msg);
}, pets.pets.PetsPacketID.PACKET_SC_ROLE_INFO, pets.pets.SCRoleInfo);
SocketPackTool.registerPackFunc(pets.pets.PetsPacketID.PACKET_CS_ROLE_INFO, pets.pets.CSRoleInfo);

//宠物和角色的操作返回
SocketPackTool.register(function(msg:any){
    console.log("宠物和角色的操作返回");
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_ROLEPETUSEOP, msg);
}, pets.pets.PetsPacketID.PACKET_SC_ROLEPETUSEOP, pets.pets.SCRolePetUseOp);
SocketPackTool.registerPackFunc(pets.pets.PetsPacketID.PACKET_CS_ROLEPETUSEOP, pets.pets.CSRolePetUseOp);

//宠物和角色的解锁返回
SocketPackTool.register(function(msg:any){
    console.log("宠物和角色的解锁返回");
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.SC_ROLEPETUNLOCK, msg);
}, pets.pets.PetsPacketID.PACKET_SC_ROLEPETUNLOCK, pets.pets.SCRolePetUnlock);
SocketPackTool.registerPackFunc(pets.pets.PetsPacketID.PACKET_CS_ROLEPETUNLOCK, pets.pets.CSRolePetUnlock);

//设置里面兑换功能
SocketPackTool.register(function(msg:any){
    console.log("设置里面兑换功能返回");
    console.log(msg);
    EventMgr.getInstance().dispatchEvent(EventName.ALL_SETTING, msg);
}, player.player.PlayerPacketID.PACKET_ALL_SETTING, player.player.SCPlayerSetting);
SocketPackTool.registerPackFunc(player.player.PlayerPacketID.PACKET_ALL_SETTING, player.player.CSPlayerSetting);