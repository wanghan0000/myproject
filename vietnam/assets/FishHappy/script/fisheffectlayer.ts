
import { _decorator, Component, Node, Vec3, instantiate, Animation, Label, v3, math, randomRange, randomRangeInt, tween, utils, sp, View } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { PoolManager } from '../../ScriptCore/panda/utils/poolmgr';
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishGameEventName } from './configs/fishgameeventname';
import { FishHappyAudioConfig } from './configs/fishhappyaudiocfg';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
import { FishUserInfo } from './fishuserinfo';
import { FishWeapon } from './fishweapon';
const { ccclass } = _decorator;

let GOLD_SPEED = 500;     //掉落的金币飞行速度
let GOLD_X_CAP = 50;
let GOLD_Y_CAP = 50;
let FLASH_WIDTH = 400;
let tempposv3a = new Vec3(0,0,0);

@ccclass('FishEffectLayer')
export class FishEffectLayer extends Component {
    nodeBossComing: Node | null = null;
    spineBossComing: sp.Skeleton | null = null;
    
    start () {
        this.addGameEvent();
    }

    addGameEvent () {
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_SHOW_FISHDIECOINNUM, this.showGainCoinNum, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_SHOW_FISHDIEADDCOIN, this.addJumpCoin, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_SHOW_FIRE_EFFECT, this.showFireEffect, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_SHOW_SIMILARLIGHT, this.showSimilarLightning, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_SHOW_LIGHT_EFFECT, this.showLightningEffect, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_SHOW_BAOFU, this.showBaofu, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_SHOW_JIANGLI, this.showJiangli, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_SHOW_BOSS_DIEEFFECT, this.showBossDieEffect, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_BOSS_COMING, this.showBossComing, this);
    }

    showGainCoinNum (clientPos: number, position: Vec3, coinnum: number) {
        let nodeCoinNum = null;
        if (clientPos == FishHappyRoomData.instance.myClientPos) {
            let pfbGoldAddCoin = ResMgr.getInstance().getPrefabByPath('FishHappy/prefab/pfb_goldaddcoin');
            if (pfbGoldAddCoin != null) {
                nodeCoinNum = PoolManager.instance.getNode(pfbGoldAddCoin, this.node);
            }
        } else {
            let pfbGrayAddCoin = ResMgr.getInstance().getPrefabByPath('FishHappy/prefab/pfb_grayaddcoin');
            if (pfbGrayAddCoin != null) {
                nodeCoinNum = PoolManager.instance.getNode(pfbGrayAddCoin, this.node);
            }
        }

        if (nodeCoinNum != null) {
            nodeCoinNum.position = position;
            let anim = nodeCoinNum.getComponent(Animation);
            if (anim != null) {
                anim.play('anim_addcoin1');
                anim.on(Animation.EventType.FINISHED, () => {
                    PoolManager.instance.putNode(anim!.node);
                })
            }
            let label = nodeCoinNum.getComponent(Label);
            if (label != null) {
                label.string = "+" + Utils.convertMoney(coinnum);
            }
        }
    }

    // 局部炸弹死亡后旋转火焰特效
    showFireEffect () {
        // cocosstudio 的骨骼动画不能使用

        AudioMgr.getInstance().playSound(FishHappyAudioConfig.ZHADANYU);
    }

    // 闪电鱼死亡后释放的闪电
    showSimilarLightning (sPos: Vec3, fishIds: number[]) {
        let pfbFlash = ResMgr.getInstance().getPrefabByPath('FishHappy/prefab/pfb_flashing');
        if (pfbFlash == null) {
            return;
        }
        for (let fishId of fishIds) {
            let fishNode = FishHappyRoomData.instance.fishNodeMap.get(fishId);
            if (fishNode != null) {
                let tpos = fishNode.getPosition();
                let radians = Utils.radians4point(sPos.x, sPos.y, tpos.x, tpos.y);
                let degrees = Utils.radians2degrees(radians);
                let dis = Utils.dist(sPos.x, sPos.y, tpos.x, tpos.y);
                let sc = dis / FLASH_WIDTH;
                let nodeFlash = instantiate(pfbFlash);
                if (nodeFlash != null) {
                    nodeFlash.parent = this.node;
                    nodeFlash.position = sPos;
                    nodeFlash.scale = v3(0.1, 1, 1);
                    nodeFlash.angle = -degrees;
                    tween(nodeFlash).to(0.1, {scale: new Vec3(sc, 1, 1)})
                                    .delay(1.0)
                                    .removeSelf()
                                    .start();
                }
            }
        }
    }

    // 覆盖在鱼身上的闪电效果
    showLightningEffect (pos: Vec3, isSource: boolean) {
        let pfbFlashBomb = ResMgr.getInstance().getPrefabByPath('FishHappy/prefab/pfb_flashingbomb');
        if (pfbFlashBomb == null) {
            return;
        }

        if (isSource) {
            AudioMgr.getInstance().playSound(FishHappyAudioConfig.LIGHTNING);
        }

        let nodeFlashBomb = instantiate(pfbFlashBomb);
        if (nodeFlashBomb != null) {
            nodeFlashBomb.parent = this.node;
            nodeFlashBomb.position = pos;
            if (!isSource) {
                nodeFlashBomb.scale = v3(0.5, 0.5, 1);
            }
            tween(nodeFlashBomb).delay(1.5)
                                .removeSelf()
                                .start();
        }
    }

    showBaofu (clientPos: number, gold: number, name: string) {
        // 不是自己的效果，播放个转盘即可
        if (clientPos !== FishHappyRoomData.instance.getMyClientPos()) {
            this.showJiangli(clientPos, gold, name);
            return;
        }

        let pfb = ResMgr.getInstance().getPrefabByPath("FishHappy/prefab/pfb_baofu");
        if (pfb !== null) {
            let node = instantiate(pfb);
            node.parent = this.node;
            node.position = v3(640, 360, 0);
            let goldFnt = node.getChildByName("spr_di")!.getChildByName("fnt_gold")!.getComponent(Label);
            goldFnt!.string = gold.toString();
            tween(node).delay(3.0)
                       .to(0.2, {scale: tempposv3a.set(0.1, 0.1, 1)})
                       .removeSelf()
                       .start()
        }
    }

    showJiangli (clientPos: number, gold: number, name: string) {
        let pfb1 = ResMgr.getInstance().getPrefabByPath("FishHappy/prefab/pfb_jiangli1");
        let pfb2 = ResMgr.getInstance().getPrefabByPath("FishHappy/prefab/pfb_jiangli2");
        if (pfb1 !== null && pfb2 !== null) {
            let node1 = instantiate(pfb1);
            let node2 = instantiate(pfb2);
            node1.parent = this.node;
            // node1.getComponent(Animation)!.play("anim_jiangli1");
            node2.parent = this.node;

            let pos;
            let weaponNode = FishHappyConstants.gameCtrl.weaponArr[clientPos];
            if (weaponNode != null) {
                let script = weaponNode.getComponent(FishWeapon);
                if (script != null) {
                    pos = script.getCannonPos();
                }
            }

            if (clientPos == FishHappyConstants.PLAYER_CLIENT_POS2 || clientPos == FishHappyConstants.PLAYER_CLIENT_POS3) {
                node1.position = v3(pos.x, pos.y - 150, 0);
                node2.position = v3(pos.x, pos.y - 150, 0);
            } else {
                node1.position = v3(pos.x, pos.y + 150, 0);
                node2.position = v3(pos.x, pos.y + 150, 0);
            }

            let fishNameFnt = node2.getChildByName("bu")!.getChildByName("fnt_fish")!.getComponent(Label);
            fishNameFnt!.string = name;
            let goldFnt = node2.getChildByName("fnt_gold")!.getComponent(Label);
            goldFnt!.string = gold.toString();

            tween(node1).delay(3.0)
                        .to(0.2, {scale: tempposv3a.set(0.1, 0.1, 1)})
                        .removeSelf()
                        .start()

            tween(node2).delay(3.0)
                        .to(0.2, {scale: tempposv3a.set(0.1, 0.1, 1)})
                        .removeSelf()
                        .start()
        }
    }

    addJumpCoin (clientPos: number, srcPos: Vec3, coin: number) {
        let srcpoints: Vec3[] = [];
        let coincount = 0;
        let interv = 0;
        let count = Math.ceil(coin / 5);
        if (count < 1) {
            count = 1;
        } else if (count > 20) {
            count = 20;
        }
        if (count <= 10) {
            let row = count > 5 && 2 || 1;
            let col = Math.ceil(count / row);
            let sx = srcPos.x - GOLD_X_CAP * col / 2;
            let sy = srcPos.y - GOLD_Y_CAP * row / 2;
            coincount = row * col;
            for (let i = 1; i <= row; i++) {
                for(let j = 1; j <= col; j++) {
                    let x = sx + j * GOLD_X_CAP;
                    let y = sy + i * GOLD_Y_CAP;
                    srcpoints.push(v3(x,y,0));
                }
            }
            interv = 0.05;
        } else {
            coincount = count;
            let cnt = count / 2;
            let predegree = 360 / cnt;
            for (let i = 1; i <= cnt; i++) {
                let radians = predegree * i / 180 * Math.PI;
                let radio = randomRange(90, 110);
                let x = radio * Math.cos(radians);
                let y = radio * Math.sin(radians);
                srcpoints.push(v3(srcPos.x + x, srcPos.y + y,0));
            }
            cnt = count - cnt;
            for (let i = 1; i <= cnt; i++) {
                let radians = predegree * i / 180 * Math.PI;
                let radio = randomRange(20, 80);
                let x = radio * Math.cos(radians);
                let y = radio * Math.sin(radians);
                srcpoints.push(v3(srcPos.x + x, srcPos.y + y,0));
            }
            count = srcpoints.length;
            for (let i = 0; i < count; i++) {
                let idx = randomRangeInt(0, count);
                let temp = srcpoints[0];
                srcpoints[0] = srcpoints[idx];
                srcpoints[idx] = temp;
            }
            interv = 0.05
        }

        for (let pos of srcpoints) {
            let nodeCoin: Node | null = null;
            if (clientPos == FishHappyRoomData.instance.myClientPos) {
                let pfbGoldCoin = ResMgr.getInstance().getPrefabByPath('FishHappy/prefab/pfb_goldcoin');
                if (pfbGoldCoin != null) {
                    nodeCoin = PoolManager.instance.getNode(pfbGoldCoin, this.node);
                }
            } else {
                let pfbGrayCoin = ResMgr.getInstance().getPrefabByPath('FishHappy/prefab/pfb_graycoin');
                if (pfbGrayCoin != null) {
                    nodeCoin = PoolManager.instance.getNode(pfbGrayCoin, this.node);
                }
            }
            let dstPos = new Vec3(0,0,0);
            // let userInfoNode = FishHappyConstants.gameCtrl.userInfoArr[clientPos];
            // if (userInfoNode != null) {
            //     let script = userInfoNode.getComponent(FishUserInfo);
            //     if (script != null) {
            //         dstPos = script.getCoinLabelPos();
            //     }
            // }
            let weaponNode = FishHappyConstants.gameCtrl.weaponArr[clientPos];
            if (weaponNode != null) {
                let script = weaponNode.getComponent(FishWeapon);
                if (script != null) {
                    dstPos = script.getCannonPos();
                }
            }

            // if (clientPos == FishHappyRoomData.instance.mySrvPos) {
            //     AudioMgr.getInstance().playSound(FishHappyAudioConfig.GETCOIN);
            // }

            let flyDt = math.Vec3.distance(dstPos, pos) / GOLD_SPEED;
            if (nodeCoin != null) {
                nodeCoin.position = pos;
                let cb = function () {
                    if (nodeCoin != null) {
                        PoolManager.instance.putNode(nodeCoin);
                    }
                }

                tween(nodeCoin).to(0.2, {position: new Vec3(pos.x, pos.y + 50, pos.z)})
                            .to(0.2, {position: new Vec3(pos.x, pos.y, pos.z)})
                            .delay(0.5)
                            .to(flyDt, {position: dstPos})
                            .call(cb)
                            .start();
            }
        }
    }

    showBossDieEffect (pos: &Vec3, effectName: string) {
        let path = "FishHappy/prefab/" + effectName;
        let pfb = ResMgr.getInstance().getPrefabByPath(path);
        if (pfb !== null) {
            let node = instantiate(pfb);
            node.parent = this.node;
            node.position = pos;
            tween(node).delay(1.5)
                       .removeSelf()
                       .start()
        }
    }

    showBossComing () {
        if (this.nodeBossComing === null) {
            this.nodeBossComing = this.node.getChildByName("node_bosscoming");
        }

        if (this.spineBossComing === null) {
            this.spineBossComing = this.nodeBossComing!.getComponent(sp.Skeleton);
        }

        this.nodeBossComing!.active = true;
        this.spineBossComing!.setAnimation(0, "animation", false);
        this.spineBossComing!.setCompleteListener(() => {
            this.nodeBossComing!.active = false;
        });

        AudioMgr.getInstance().playSound(FishHappyAudioConfig.BOSSWARN);
    }
}
