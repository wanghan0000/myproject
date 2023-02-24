
import { _decorator, Component, EventTouch, Node, v2, Vec2, UITransform, macro, Vec3 } from 'cc';
import { FishGameEventName } from '../configs/fishgameeventname';
import { FishHappyRoomData } from '../fishdata/fishhappyroomdata';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { FishPlayerOpCode } from '../net/fishneteventname';
import { FishFish } from '../fishfish';
import { FishHappyConstants } from '../configs/fishhappyconstants';
import { FishWeapon } from '../fishweapon';
import  fishing  from '../protocol/fishing.js';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
const { ccclass } = _decorator;

@ccclass('StateNormal')
export class StateNormal extends Component {
    protected stateName = 'StateNormal';
    protected touchPos: Vec2 | null = new Vec2(0,0);
    protected fireInterval = FishHappyConstants.FIRE_AUTO_INTERVAL;
    protected bulletId = 0;
    protected hookAimInterval = 0.2;

    getStateName (): string {
        return this.stateName;
    }

    initState () {
        this.closeAutoFire();
    }

    clearState () {
        this.closeAutoFire();
    }

    handleInput (event: EventTouch) {
        if (Node.EventType.TOUCH_START == event.type) {
            this.touchPos = event.getUILocation();
            console.log("touchPos:", this.touchPos);
            this.fire(this.touchPos);
            this.openAutoFire();
        } else if (Node.EventType.TOUCH_MOVE == event.type) {
            this.touchPos = event.getUILocation();
        } else if (Node.EventType.TOUCH_END == event.type) {
            this.closeAutoFire();
        }
    }

    fire (position: Vec2 | null) {
        if (position == null) {
            return;
        }

        let cost = 0;
        let myPlayerData = FishHappyRoomData.instance.getPlayerDataByClientPos(FishHappyRoomData.instance.myClientPos);
        if (myPlayerData != null) {
            cost = myPlayerData.getCostPerBullet();
            let myCoin = myPlayerData.getCoin();
            if (myCoin <= 0 || myCoin < cost) {
                // 这里有个弹出提示
                // console.log("coin is not enough! clientPos:", FishHappyRoomData.instance.myClientPos);
                UIMgr.getInstance().AlertTxtWithConfirmClose("金币不足!");
                if (myPlayerData.isUseAutoFire) {
                    this.sendAutoFire();
                }
                if (myPlayerData.isUseAim) {
                    this.sendAim();
                }
                this.clearState();
                return;
            }
        }

        if (FishHappyRoomData.instance.bulletArr.length >= FishHappyConstants.BULLET_LIMIT_NUM) {
            UIMgr.getInstance().AlertTxtWithConfirmClose("您的炮管正烫，请稍候……");
            return;
        }

        this.bulletId += 1;
        let fishingOp = new fishing.fishing.CSFishingOp();
        fishingOp.OpCode = FishPlayerOpCode.OpCodeFire;
        fishingOp.Params = [position.x, position.y, this.bulletId, cost];
        SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_OP, fishingOp);

        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_CANNON_FIREONCE, this.bulletId, position, FishHappyRoomData.instance.myClientPos);
    }

    onAutoFire () {
        let curAimedFish = FishHappyRoomData.instance.getAimedFish(FishHappyRoomData.instance.myClientPos)
        if (curAimedFish != null && curAimedFish.isValid) {
            let aimFishPos = curAimedFish.position;
            let uitransform = FishHappyConstants.gameCtrl.layerFish!.getComponent(UITransform);
            aimFishPos = uitransform!.convertToWorldSpaceAR(aimFishPos);
            this.touchPos = v2(aimFishPos.x, aimFishPos.y);
        }
        if (this.touchPos == null) {
            let weaponNode = FishHappyConstants.gameCtrl.weaponArr[FishHappyRoomData.instance.myClientPos];
            if (weaponNode != null) {
                let script = weaponNode.getComponent(FishWeapon);
                if (script != null) {
                    let pos = script.getAutoFirePos();
                    this.touchPos = v2(pos.x, pos.y);
                }
            }
        }

        this.fire(this.touchPos);
    }

    openAutoFire () {
        this.fireInterval = FishHappyConstants.FIRE_AUTO_INTERVAL;
        this.schedule(this.onAutoFire, this.fireInterval);
    }

    closeAutoFire () {
        this.unschedule(this.onAutoFire);
    }

    onHookAutoAim () {
        let curAimedFish = FishHappyRoomData.instance.getAimedFish(FishHappyRoomData.instance.myClientPos)
        if (curAimedFish != null) {
            return;
        }
        this.reAimedFish();
    }

    openAutoAim () {
        this.schedule(this.onHookAutoAim, this.hookAimInterval);
    }

    closeAutoAim () {
        this.unschedule(this.onHookAutoAim);
    }

    onAimedAt (aimedFishNode: Node) {
        // 取消挂机后，可能出现状态已经切换到普通状态，在普通状态中收到了瞄准鱼返回消息，导致瞄准线不消失，在鱼游出屏幕后才消失
        this.clearAimView();
    }

    reAimedFish () {
        
    }

    clearAimView () {
        if (FishHappyRoomData.instance.isAimedFish(FishHappyRoomData.instance.myClientPos)) {
            FishHappyRoomData.instance.removeAimedFish(FishHappyRoomData.instance.myClientPos);
        }
    }

    sendTargetFish (fishNode: Node) {
        let fishId = fishNode.getComponent(FishFish)!.fishId;
        let fishingOp = new fishing.fishing.CSFishTarget();
        fishingOp.FishId = fishId;
        let myPlayerData = FishHappyRoomData.instance.getPlayerDataByClientPos(FishHappyRoomData.instance.myClientPos);
        if (myPlayerData != null) {
            fishingOp.RobotId = myPlayerData.getSnId();
        }
        console.log("sendTargetFish:", fishId, myPlayerData!.getSnId());
        SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_FISHTARGET, fishingOp);
    }

    sendCancelTargetFish () {
        let fishingOp = new fishing.fishing.CSFishTarget();
        fishingOp.FishId = 0;
        let myPlayerData = FishHappyRoomData.instance.getPlayerDataByClientPos(FishHappyRoomData.instance.myClientPos);
        if (myPlayerData != null) {
            fishingOp.RobotId = myPlayerData.getSnId();
        }
        SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_FISHTARGET, fishingOp);
    }

    sendAutoFire () {
        let myPlayerData = FishHappyRoomData.instance.getPlayerDataByClientPos(FishHappyRoomData.instance.myClientPos);
        if (myPlayerData == null) {
            return;
        }

        let autoFireFlag = 1;
        if (myPlayerData.isUseAutoFire) {
            autoFireFlag = 0;
        }
        let fishingOp = new fishing.fishing.CSFishingOp();
        fishingOp.OpCode = FishPlayerOpCode.OpCodeAutoFire;
        fishingOp.Params = [autoFireFlag];
        SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_OP, fishingOp);
    }

    sendAim () {
        let myPlayerData = FishHappyRoomData.instance.getPlayerDataByClientPos(FishHappyRoomData.instance.myClientPos);
        if (myPlayerData == null) {
            return;
        }

        let aimFlag = 1;
        if (myPlayerData.isUseAim) {
            aimFlag = 0;
        }
        let fishingOp = new fishing.fishing.CSFishingOp();
        fishingOp.OpCode = FishPlayerOpCode.OpCodeAim;
        fishingOp.Params = [aimFlag];
        SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_OP, fishingOp);
    }

    pause() {
        this.clearState();
    }

    restart() {
        this.initState();
    }
}
