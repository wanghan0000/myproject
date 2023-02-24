
import { _decorator, Component, SpriteFrame, Sprite, Animation, Vec2, UITransform, Vec3, Button, Label, Node, tween, instantiate, math, v3 } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { SocketMgr } from '../../ScriptCore/panda/net/SocketMgr';
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishGameEventName } from './configs/fishgameeventname';
import { FishHappyAudioConfig } from './configs/fishhappyaudiocfg';
import { FishHappyPlayerData } from './fishdata/fishhappyplayerdata';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
import { FishPlayerOpCode } from './net/fishneteventname';
import  fishing  from './protocol/fishing.js';
import { fishrobotctrl } from './fishrobotctrl';
import { FishGameControl } from './fishgamecontrol';
const { ccclass, property } = _decorator;

const bulletPosH = 100;
let tempV3a = new Vec3(0,0,0);
let tempV3b = new Vec3(0,0,0);
let tempYdir = new Vec3(0,1,0);
let tempTurnV3 = new Vec3(0,0,0);
let tempAutoFirePos = new Vec3(0,0,0)

@ccclass('FishWeapon')
export class FishWeapon extends Component {
    private _robotControl: fishrobotctrl = null;
    private _gameControl: FishGameControl = null;
    
    @property(SpriteFrame)
    sprFrames: SpriteFrame[] = [];

    nodeCannon: Node | null = null;
    sprCannon: Sprite | null = null;
    animCannon: Animation | null = null;
    sprFire: Node | null = null;
    nodeIamHere: Node | null = null;
    cannonPos: Vec3 | null = null;

    playerData: FishHappyPlayerData | undefined;

    clientPos = 0;
    selVip = 0;
    score = 1;

    init (clientPos: number, gameControl: FishGameControl) {
        this.clientPos = clientPos;
        this._gameControl = gameControl;
        this.playerData = FishHappyRoomData.instance.getPlayerDataByClientPos(this.clientPos);
        if (this.playerData != null) {
            this.selVip = this.playerData.selVip;
        }

        this.nodeCannon = this.node.getChildByName('node_cannon');
        this.sprCannon = this.nodeCannon!.getChildByName('spr_cannon')!.getComponent(Sprite);
        let animNode = this.nodeCannon!.getChildByName('anim_cannon');
        this.animCannon = animNode!.getComponent(Animation);
        this.sprFire = animNode!.getChildByName("spr_fire");
        let labelScore = this.node.getChildByName('label_score')!.getComponent(Label);
        if (this.playerData != null) {
            labelScore!.string = Utils.convertMoney(this.playerData.getCostPerBullet());
        }
        let btnAdd = this.node.getChildByName('btn_add');
        btnAdd!.active = false;
        btnAdd!.on(Button.EventType.CLICK, () => {
            if (this.playerData != null) {
                this.playerData.costLv += 1;
                let cost = this.playerData.getCostPerBullet();
                this.sendCostPerBullet(cost);
                labelScore!.string = Utils.convertMoney(cost);
                this.playChCannonAni();
            }
        }, this);

        let btnReduce = this.node.getChildByName('btn_reduce');
        btnReduce!.active = false;
        btnReduce!.on(Button.EventType.CLICK, () => {
            if (this.playerData != null) {
                this.playerData.costLv -= 1;
                let cost = this.playerData.getCostPerBullet();
                this.sendCostPerBullet(cost);
                labelScore!.string = Utils.convertMoney(cost);
                this.playChCannonAni();
            }
        }, this);

        this.setCannonSprFrm(this.selVip);
        this.addGameEvent();
    }

    addGameEvent () {
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_PLAYER_ENTER, this.onPlayerEnter, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_PLAYER_LEAVE, this.onPlayerLeave, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_CANNON_FIREONCE, this.fireOnce, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_CANNON_CHANGE, this.cannonChange, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_COST_CHANGE, this.costChange, this);
    }

    onDestroy () {
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_PLAYER_ENTER, this.onPlayerEnter, this);
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_PLAYER_LEAVE, this.onPlayerLeave, this);
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_CANNON_FIREONCE, this.fireOnce, this);
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_CANNON_CHANGE, this.cannonChange, this);
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_COST_CHANGE, this.costChange, this);
    }

    onPlayerEnter (clientPos: number) {
        if (this.clientPos === clientPos) {
            this.node.active = true;
            this.playerData = FishHappyRoomData.instance.getPlayerDataByClientPos(this.clientPos);
            if (this.playerData != null) {
                let labelScore = this.node.getChildByName('label_score')!.getComponent(Label);
                labelScore!.string = Utils.convertMoney(this.playerData.getCostPerBullet());
                this.selVip = this.playerData.selVip;
                this.setCannonSprFrm(this.selVip);
            }
            if (clientPos === FishHappyRoomData.instance.myClientPos) {
                let btnAdd = this.node.getChildByName('btn_add');
                btnAdd!.active = true;
                let btnReduce = this.node.getChildByName('btn_reduce');
                btnReduce!.active = true;
                if (this._gameControl.isFirstEnterGame) {
                    this.showIamHere();   
                }
            }

            // 给机器人绑定控制器
            if (this.playerData.isRobot) {
                this.rebindRobot();
            }
        }
    }

    rebindRobot () {
        let myPlayerData = FishHappyRoomData.instance.getPlayerDataByClientPos(FishHappyRoomData.instance.myClientPos);
        if (myPlayerData != null) {
            let robotSnId = this.playerData.getSnId();
            if (myPlayerData.isMyAgentRobot(robotSnId)) {
                console.log("fishweapon:rebindRobot", myPlayerData.getSnId(), robotSnId, "old robotControl=", this.robotControl);
                if (this.robotControl == null) {
                    let idleSec = math.randomRangeInt(3, 10);
                    this.bindRobotController();
                    this._robotControl.init(this.clientPos, idleSec);
                }
            } else {
                this.unbindRobotController();
            }
        }
    }

    onPlayerLeave (clientPos: number) {
        if (this.clientPos == clientPos) {
            this.node.active = false;
        }
    }

    bindRobotController () {
        this._robotControl = this.addComponent(fishrobotctrl);
    }

    unbindRobotController () {
        if (this._robotControl != null) {
            this._robotControl.destroy();
            this._robotControl = null;
        }
    }

    public get robotControl () {
        return this._robotControl;
    }

    setCannonSprFrm (index: number) {
        this.sprCannon!.spriteFrame = this.sprFrames[index];
        if (this.selVip === 0 || this.selVip === 1 || this.selVip === 5) {
            this.sprFire!.active = true;
        } else {
            this.sprFire!.active = false;
        }
    }

    playFireAnim (index: number) {
        if (this.animCannon != null && this.sprCannon != null) {
            this.animCannon.node.active = true;
            this.sprCannon.node.active = false;
            this.animCannon.play('anim_cannon_fire_' + index);
            this.animCannon.on(Animation.EventType.FINISHED, () => {
                this.animCannon!.node.active = false;
                this.sprCannon!.node.active = true;
            }, this);
        }

        if (this.clientPos === FishHappyRoomData.instance.myClientPos) {
            this.clearIamHere();
        }
    }

    fireOnce (bulletId: number, position: Vec2, clientPos: number | null) {
        clientPos == null ? this.clientPos : clientPos;
        if (this.clientPos != clientPos) {
            return;
        }
        let finalDegree = this.turnTo(tempTurnV3.set(position.x, position.y, 0));
        this.playFireAnim(this.selVip);

        let weaponPos = this.nodeCannon!.getPosition();
        let uiTransform = this.node!.getComponent(UITransform);
        let pos = uiTransform!.convertToWorldSpaceAR(weaponPos);
        let weaponLayerTrans = FishHappyConstants.gameCtrl.layerWeapon!.getComponent(UITransform);
        let bulletPos = weaponLayerTrans!.convertToNodeSpaceAR(pos);
        // let bulletPos = uiTransform!.convertToWorldSpaceAR(weaponPos);
        // let bulletPos = this.getCannonPos();
        if (this.clientPos == FishHappyConstants.PLAYER_CLIENT_POS2 || this.clientPos == FishHappyConstants.PLAYER_CLIENT_POS3) {
            finalDegree = finalDegree + 180;
        }

        let radian = finalDegree / 180 * Math.PI;
        bulletPos.set(bulletPos.x - Math.sin(radian) * bulletPosH, bulletPos.y + Math.cos(radian) * bulletPosH);
        FishHappyConstants.gameCtrl.createBullet(this.clientPos, bulletId, bulletPos, finalDegree);
    }

    turnTo (position: Vec3): number {
        let uiTransform = this.node!.getComponent(UITransform);
        let touchPos = uiTransform!.convertToNodeSpaceAR(position);
        let weaponPos = this.nodeCannon!.getPosition();
        let dir = touchPos.subtract(weaponPos);
        let angle = Vec3.angle(dir, tempYdir);
        let degree = angle / Math.PI * 180;
        let finalDegree = 0
        if(dir.x >= 0) {
            finalDegree = -degree;
        } else {
            finalDegree = degree;
        }
        this.nodeCannon!.angle = finalDegree;

        return finalDegree;
    }

    getCannonPos (): Vec3 {
        if (this.cannonPos === null) {
            let pos = this.nodeCannon!.getPosition();
            let uitransform = this.node.getComponent(UITransform);
            pos = uitransform!.convertToWorldSpaceAR(pos);
            uitransform = FishHappyConstants.gameCtrl.layerFish!.getComponent(UITransform);
            this.cannonPos = uitransform!.convertToNodeSpaceAR(pos);
        }
        return this.cannonPos;
    }

    getAutoFirePos (): Vec3 {
        let cannonPos = this.getCannonPos();
        let angle = this.nodeCannon!.angle;
        let radian = angle / 180 * Math.PI;
        tempAutoFirePos.set(cannonPos.x - Math.sin(radian) * bulletPosH, cannonPos.y + Math.cos(radian) * bulletPosH);
        return tempAutoFirePos;
    }

    cannonChange (clientPos: number, vipNum: number) {
        if (this.clientPos == clientPos) {
            this.selVip = vipNum;
            this.setCannonSprFrm(this.selVip);
        }

        // if (this.clientPos == FishHappyRoomData.instance.myClientPos) {
        //     UIMgr.getInstance().AlertTxtWithConfirmClose("换炮成功");
        // }
    }

    costChange (clientPos: number, cost: number) {
        if (this.clientPos == clientPos) {
            let labelScore = this.node.getChildByName('label_score')!.getComponent(Label);
            labelScore!.string = Utils.convertMoney(cost);
        }
    }

    sendCostPerBullet (cost: number) {
        let fishingOp = new fishing.fishing.CSFishingOp();
        fishingOp.OpCode = FishPlayerOpCode.OpCodeChPower;
        fishingOp.Params = [cost];
        SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_OP, fishingOp);
    }

    playChCannonAni () {
        tween(this.nodeCannon)
            .to(0.1, {scale: tempV3a.set(0.2, 0.2, 1)})
            .to(0.1, {scale: tempV3b.set(1.0, 1.0, 1)})
            .start();
        
        let prefab = ResMgr.getInstance().getPrefabByPath("FishHappy/prefab/pfb_chrateplist");
        if (prefab !== null) {
            let nodeChRatePlist = instantiate(prefab);
            nodeChRatePlist.parent = this.node;
            nodeChRatePlist.position = v3(0, 40, 0);
        }

        if (this.clientPos == FishHappyRoomData.instance.myClientPos) {
            AudioMgr.getInstance().playSound(FishHappyAudioConfig.CANNONRATE_CN);
        }
    }

    showIamHere () {
        let prefab = ResMgr.getInstance().getPrefabByPath("FishHappy/prefab/pfb_mycannontip");
        if (prefab !== null) {
            this.nodeIamHere = instantiate(prefab);
            this.nodeIamHere.parent = this.node;
            this.nodeIamHere.position = v3(0, 80, 0);
        }
    }

    clearIamHere () {
        if (this.nodeIamHere !== null && this.nodeIamHere.isValid) {
            this.nodeIamHere.removeFromParent();
            this.nodeIamHere = null;
        }
    }
}
