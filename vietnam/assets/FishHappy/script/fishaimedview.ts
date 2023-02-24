import {  instantiate, Node, NodePool,UITransform,v3, Vec3 } from 'cc';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishGameControl } from './fishgamecontrol';
import { FishWeapon } from './fishweapon';

let POINT_CAP = 35;
let tempXdir = new Vec3(1, 0, 0);

export class FishAimedView {
    private gameControl: FishGameControl | null = null;
    private aimedFishNode: Node | null = null;
    private weaponNode: Node | null = null;
    private fishWeaponScript: FishWeapon | null = null;
    private aimedDotPool: NodePool | null = null;
    private aimedDotSaveArr: Node[] = [];
    private aimedPosNode: Node | null = null;
    private active = false;
    private clientPos = 0;

    constructor (gameControl: FishGameControl, clientPos: number) {
        this.gameControl = gameControl;
        this.clientPos = clientPos;
    }

    init (aimedFishNode: Node | null, weaponNode: Node | null) {
        this.aimedFishNode = aimedFishNode;
        this.weaponNode = weaponNode;
        this.fishWeaponScript = this.weaponNode!.getComponent(FishWeapon);
        this.active = true;

        if (this.aimedPosNode != null) {
            this.aimedPosNode.destroy();
        }
        this.aimedPosNode = instantiate(this.gameControl!.nodeAimedPos);
        this.aimedPosNode!.parent = this.gameControl!.layerFish;
        this.aimedPosNode!.position = this.aimedFishNode!.getPosition();
        this.aimedPosNode!.active = true;

        if (this.aimedDotPool == null) {
            this.aimedDotPool = new NodePool();
            for (let i = 0; i < 20; i++) {
                let nodeDot = instantiate(this.gameControl!.nodeAimedDot);
                nodeDot!.active = true;
                this.aimedDotPool.put(nodeDot!);
            }
        }
    }

    getDotNode (): Node | null {
        if (this.aimedDotPool!.size() > 0) {
            return this.aimedDotPool!.get();
        } else {
            let nodeDot = instantiate(this.gameControl!.nodeAimedDot);
            nodeDot!.active = true;
            return nodeDot;
        }
    }

    despawnAllDotNode () {
        for (let dotNode of this.aimedDotSaveArr) {
            this.aimedDotPool!.put(dotNode);
        }
        this.aimedDotSaveArr.length = 0;
    }

    clear () {
        this.active = false;
        if (this.aimedPosNode != null) {
            this.aimedPosNode.removeFromParent();
        }
        this.despawnAllDotNode();
    }

    update () {
        if (!this.active) {
            return;
        }

        if (!this.aimedFishNode.isValid) {
            this.clear()
        }

        let spos = this.fishWeaponScript!.getCannonPos();
        let tpos = this.aimedFishNode!.getPosition();
        this.aimedPosNode!.position = tpos;
        // let uitransform = FishHappyConstants.gameCtrl.layerFish!.getComponent(UITransform);
        // let tpos2 = uitransform!.convertToWorldSpaceAR(tpos);
        // this.fishWeaponScript!.turnTo(tpos2);
        // this.fishWeaponScript!.turnTo(tpos);
        let len = Math.floor(Vec3.distance(spos, tpos));
        if (len <= POINT_CAP) {
            return;
        }
        let cnt = Math.floor(len / POINT_CAP);

        let dir = tpos.subtract(spos);  // 该操作tpos和dir是相等的
        let angle = Vec3.angle(dir, tempXdir);
        // console.log("direction:", dir.x, dir.y, dir.z)
        // console.log("angle:", angle);
        // let degree = angle / Math.PI * 180;
        // console.log("degree:", degree);

        let addX, addY = 0;
        if (this.clientPos == FishHappyConstants.PLAYER_CLIENT_POS2 || this.clientPos == FishHappyConstants.PLAYER_CLIENT_POS3) {
            angle = Math.PI - angle;
            addX = -Math.cos(angle);
            addY = -Math.sin(angle);
        } else {
            addX = Math.cos(angle);
            addY = Math.sin(angle);
        }

        this.despawnAllDotNode();
        for (let i = 0; i < cnt; i++) {
            let nodeDot = this.getDotNode();
            this.aimedDotSaveArr[i] = nodeDot!;
            nodeDot!.parent = this.gameControl!.layerFish;
            let len = i * POINT_CAP
            let x = len * addX + spos.x;
            let y = len * addY + spos.y;
            nodeDot!.position = v3(x, y, 0); 
        }
    }

    isActive (): boolean {
        return this.active;
    }
}