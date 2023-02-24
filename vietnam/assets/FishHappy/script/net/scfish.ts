import { EventMgr } from "../../../ScriptCore/events/eventmgr";
import { UIMgr } from "../../../ScriptCore/Lobby/Scripts/UIMgr";
import { SocketPackTool } from "../../../ScriptCore/panda/net/SocketPackTool";
import { FishHappyUIMgr } from "../../FishHappyUIMgr";
import { FishGameEventName } from "../configs/fishgameeventname";
import { EventQuene } from "../event/eventquene";
import { FishHappyRoomData } from "../fishdata/fishhappyroomdata";
import fishing from "../protocol/fishing.js";
import { FishNetEventName } from "./fishneteventname";

export class SCFish {
    private static instance: SCFish | null = null;
    public static getInstance() {
        if (this.instance == null) {
            this.instance = new SCFish();
        }
        return this.instance;
    }

    public static destory() {
        if (this.instance != null) {
            this.instance.unregister();
        }

        this.instance = null;
    }

    public register() {
        /*==房间信息===*/
        SocketPackTool.register((msg: any) => {
            this.onRoomInfo(msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_ROOMINFO, fishing.fishing.SCFishingRoomInfo);

        /*===玩家换炮===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_SELVIP, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_SELVIP, fishing.fishing.SCSelVip);

        /*===其他玩家开火===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_FIRE, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_FIRE, fishing.fishing.SCFire);

        /*===命中鱼===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_FIREHIT, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_FIREHIT, fishing.fishing.SCFireHit);

        /*===炮倍率发生变化===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_FIREPOWER, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_FIREPOWER, fishing.fishing.SCFirePower);

        /*===状态变化===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_ROOMSTATE, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_ROOMSTATE, fishing.fishing.SCFishingRoomState);

        /*===刷鱼===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_SYNCFISH, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_SYNCFISH, fishing.fishing.SCSyncRefreshFish);

        /*===玩家进入===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_FISHERENTER, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_FISHERENTER, fishing.fishing.SCFishesEnter);

        /*===屏幕同类鱼===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_FISHVIEW, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_FISHVIEW, fishing.fishing.SCFishView);
        SocketPackTool.registerPackFunc(fishing.fishing.FIPacketID.FISHING_CS_FISHVIEW, fishing.fishing.CSFishView);

        /*===瞄准===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_FISHTARGET, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_FISHTARGET, fishing.fishing.SCFishTarget);
        SocketPackTool.registerPackFunc(fishing.fishing.FIPacketID.FISHING_CS_FISHTARGET, fishing.fishing.CSFishTarget);

        /*===玩家操作===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_OP, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_OP, fishing.fishing.SCFishingOp);
        SocketPackTool.registerPackFunc(fishing.fishing.FIPacketID.FISHING_CS_OP, fishing.fishing.CSFishingOp);

        /*===玩家进入===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_ENTER, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_ENTER, fishing.fishing.SCfishingEnter);

        /*===玩家离开===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_LEAVE, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_LEAVE, fishing.fishing.SCfishingLeave);

        /*===玩家增加错失的金币===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_FISHDEL, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_FISHDEL, fishing.fishing.SCFishDel);

        /*===绑定机器人到新的玩家身上===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_REBINDAGENT, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_REBINDAGENT, fishing.fishing.SCReBindAgent);

        /*===击杀概率===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_FIREMISS, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_FIREMISS, fishing.fishing.SCFireMiss);

        /*===同步鱼奖金===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_SCSYNCFISHCOIN, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_SCSYNCFISHCOIN, fishing.fishing.SCSyncFishCoin);

        /*===机器人状态===*/
        SocketPackTool.register((msg: any) => {
            EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_SCROBOTBEHAVIOR, msg);
        }, fishing.fishing.FIPacketID.FISHING_SC_SCROBOTBEHAVIOR, fishing.fishing.SCRobotBehavior);
    }

    //取消注册
    private unregister() {
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_ROOMINFO);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_SELVIP);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_FIRE);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_FIREHIT);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_FIREPOWER);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_ROOMSTATE);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_SEATS);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_SYNCFISH);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_FISHERENTER);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_FISHVIEW);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_FISHTARGET);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_OP);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_ENTER);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_LEAVE);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_FISHDEL);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_REBINDAGENT);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_FIREMISS);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_SCSYNCFISHCOIN);
        SocketPackTool.unregister(fishing.fishing.FIPacketID.FISHING_SC_SCROBOTBEHAVIOR);
    }

    public async onRoomInfo(msg: any): Promise<void> {
        console.log("fish room Info:", msg);
        FishHappyRoomData.instance.loadData(msg);
        EventQuene.instance.resetQuene();
        await UIMgr.getInstance().showWaiting();
        FishHappyUIMgr.getInstance().showFish();
        await UIMgr.getInstance().clearWaiting();
        ///await UIManager.getInstance().openWin("FishHappy/prefab/pfb_fishgame");
        EventQuene.instance.pushQuene(FishNetEventName.FISHING_SC_ROOMINFO, msg);
        EventMgr.getInstance().dispatchEvent(FishGameEventName.GAME_LOAD_COMPLETE); // 关闭loading界面
    }
}