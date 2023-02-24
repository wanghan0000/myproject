
import { _decorator, Component, Sprite, Vec3, v3, Contact2DType, Collider2D, IPhysics2DContact, UITransform } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { SocketMgr } from '../../ScriptCore/panda/net/SocketMgr';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishHappyAudioConfig } from './configs/fishhappyaudiocfg';
import { FishHappyPlayerData } from './fishdata/fishhappyplayerdata';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
import { FishFish } from './fishfish';
import { FishPlayerOpCode } from './net/fishneteventname';
import fishing  from './protocol/fishing.js';
const { ccclass } = _decorator;

let temp_bullet_pos = new Vec3(0,0,0);
let tempYdir = new Vec3(0, 1, 0);
enum ContactGroupType {
    DEFAULT,
    BULLET = 2, // 子弹身上加的碰撞分组打印出来的是2 迷惑行为
    BORDER = 4, // 边界身上加的碰撞分组打印出来的是4
    FISH = 8    // 鱼身上加的碰撞分组打印出来的是8
}

enum BoardTag {
    LEFT,
    TOP,
    RIGHT,
    BOTTOM
}

@ccclass('FishBullet')
export class FishBullet extends Component {
    sprBullet: Sprite | null = null;

    aimInterval = 0.5;
    aimTime = 0;
    speed: number = 1000;
    angle: number = 0;

    clientPos = -1;
    bulletId = 0;
    selVip = 0;
    playerData: FishHappyPlayerData | undefined;

    initUI () {
        this.sprBullet = this.getComponent(Sprite);
        this.playerData = FishHappyRoomData.instance.getPlayerDataByClientPos(this.clientPos);
        if (this.playerData != null) {
            this.selVip = this.playerData.selVip;
        }
        let costLv = this.playerData!.costLv;
        let bulletType = 0;
        if (costLv >=0 && costLv <= 2) {
            bulletType = 0;
        } else if (costLv >= 3 && costLv <= 5) {
            bulletType = 1;
        } else {
            bulletType = 2;
        }
        let sprFrm = this.getSprFrmByName(this.selVip, bulletType);
        this.sprBullet!.spriteFrame = sprFrm;
    }

    update (deltaTime: number) {
        let pos = this.node.getPosition();

        this.aimTime += deltaTime;
        if (this.aimTime > this.aimInterval) {
            this.aimTime = 0;
            let curAimedFish = FishHappyRoomData.instance.getAimedFish(this.clientPos);
            if (curAimedFish != null) {
                let fishPos = curAimedFish.getPosition();
                let uitransform = FishHappyConstants.gameCtrl.layerFish!.getComponent(UITransform);
                fishPos = uitransform!.convertToWorldSpaceAR(fishPos);
                uitransform = FishHappyConstants.gameCtrl.layerBullet!.getComponent(UITransform);
                fishPos = uitransform!.convertToNodeSpaceAR(fishPos);
                let dir = fishPos.subtract(pos);
                let angle = Vec3.angle(dir, tempYdir);
                let degree = angle / Math.PI * 180;
                let finalDegree = 0
                if(dir.x >= 0) {
                    finalDegree = -degree;
                } else {
                    finalDegree = degree;
                }
                this.node.angle = finalDegree;
            }
        }

        let bx = pos.x - deltaTime * this.speed * Math.sin(this.node.angle / 180 * Math.PI);
        let by = pos.y + deltaTime * this.speed * Math.cos(this.node.angle / 180 * Math.PI);
        this.node.setPosition(temp_bullet_pos.set(bx, by, 0));
    }

    init (clientPos: number, bulletId: number, position: Vec3, angle: number) {
        this.node.angle = angle;
        this.node.setPosition(position);
        this.clientPos = clientPos;
        this.bulletId = bulletId;
        this.initUI();
        this.addContactCallBack()

        if (clientPos == FishHappyRoomData.instance.myClientPos) {
            AudioMgr.getInstance().playSound(FishHappyAudioConfig.HIT);
        }
    }

    addContactCallBack () {
        // if (PhysicsSystem2D.instance) {
        //     PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        // }

        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.group == ContactGroupType.BORDER) {
            switch (otherCollider.tag) {
                case BoardTag.LEFT:
                    this.node.angle *= -1;
                    break;
                case BoardTag.TOP:
                    this.node.angle = 180 - this.node.angle;
                    break;
                case BoardTag.RIGHT:
                    this.node.angle *= -1;
                    break;
                case BoardTag.BOTTOM:
                    this.node.angle = 180 - this.node.angle;
                    break;
                default:
                    break;
            }
        } else if (otherCollider.group == ContactGroupType.FISH) {
            let fishfish = otherCollider.node.getComponent(FishFish);
            let fishid = -1;
            let params: number[] = [];
            if (fishfish != null) {
                if (FishHappyRoomData.instance.isAimedFish(this.clientPos) && !fishfish.aimedClientPos[this.clientPos]) {
                    return;
                }
                fishid = fishfish.fishId;

                let evtid = fishfish.policyData.Event;
                if (evtid == FishHappyConstants.FISHING_EVENT_NET) {
                    params = FishHappyRoomData.instance.getEventFishIds(evtid, fishfish.fishId);
                } else if (evtid == FishHappyConstants.FISHING_EVENT_BOMB) {
                    params = FishHappyRoomData.instance.getBombKillFishIds(otherCollider.node);
                } else if (evtid == FishHappyConstants.FISHING_EVENT_CHAIN) {
                    params = FishHappyRoomData.instance.getChainKillFishIds(otherCollider.node);
                }

                fishfish.onHitRed();

                if (FishHappyRoomData.instance.isAimedFish(this.clientPos)) {
                    let pos = fishfish.node.getPosition();
                    FishHappyConstants.gameCtrl.createNet(pos, this.clientPos);
                } else {
                    let pos = this.node.getPosition();
                    FishHappyConstants.gameCtrl.createNet(pos, this.clientPos);
                }
            }

            let myPlayerData = FishHappyRoomData.instance.getPlayerDataByClientPos(FishHappyRoomData.instance.myClientPos);
            let playerData = FishHappyRoomData.instance.getPlayerDataByClientPos(this.clientPos); 
            let isMyRobot = myPlayerData.isMyAgentRobot(playerData.getSnId());

            if (isMyRobot) {
                let fishingOp = new fishing.fishing.CSFishingOp();
                fishingOp.OpCode = FishPlayerOpCode.OpCodeRobotHit;
                fishingOp.Params = [playerData.getSnId(), this.bulletId, fishid];
                for (let i = 0; i < params.length; i++) {
                    fishingOp.Params.push(params[i]);
                }
                // console.log("send hit:", fishingOp.Params);
                SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_OP, fishingOp);
            } else {
                let fishingOp = new fishing.fishing.CSFishingOp();
                fishingOp.OpCode = FishPlayerOpCode.OpCodeHit;
                fishingOp.Params = [this.bulletId, fishid];
                for (let i = 0; i < params.length; i++) {
                    fishingOp.Params.push(params[i]);
                }
                // console.log("send hit:", fishingOp.Params);
                SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_OP, fishingOp);
            }

            FishHappyConstants.gameCtrl.despawnBullet(this.node);
        }
    }

    getSprFrmByName (index1: number, index2: number) {
        let atlasPath = "FishHappy/texture/bulletAtlas";
        let sprFrmName = "fishbullet_" + index1 + "_" + index2;
        let atlas = ResMgr.getInstance().getSpriteAtlasByPath(atlasPath);
        let sprFrm = atlas!.getSpriteFrame(sprFrmName);
        return sprFrm;
    }
}