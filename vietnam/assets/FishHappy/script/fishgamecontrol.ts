
import {
    _decorator, Node, Prefab, EventTouch,
    Vec3, instantiate, PhysicsSystem2D, EPhysics2DDrawFlags,
    find, Layers, NodePool, Vec2, randomRangeInt, Sprite, tween, View, game, Game, UITransform, v3
} from 'cc';

import { FishAimedView } from './fishaimedview';
import { FishBullet } from './fishbullet';
import { FishNet } from './fishnet';
import { StateNormal } from './cannonstate/statenormal';
import { StateAutoFire } from './cannonstate/stateautofire';
import { StateAim } from './cannonstate/stateaim';
import { StateAutoAim } from './cannonstate/stateautoaim';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
import { FishWeapon } from './fishweapon';
import { UIScreen } from '../../ScriptCore/UIFrame/UIForm';
import { EventMgr } from '../../ScriptCore/events/eventmgr';
import { FishNetEventName, FishPlayerOpCode } from './net/fishneteventname';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishGameEventName } from './configs/fishgameeventname';
import { FishUserInfo } from './fishuserinfo';
import { EventQuene } from "./event/eventquene";
import { FishPolicyMgr } from "./configs/fishpolicymgr";
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import { FishFish } from './fishfish';
import { FishPolicyControl } from './fishpolicycontrol';
import { StateHook } from './cannonstate/statehook';
import { SocketMgr } from '../../ScriptCore/panda/net/SocketMgr';
import { EventComponent } from '../../ScriptCore/events/eventcomponent';
import { PoolManager } from '../../ScriptCore/panda/utils/poolmgr';
import { EventName } from '../../ScriptCore/events/EventName';
import { PathMgr } from './fishpathmgr';
import { DB_Fish } from '../data/db_fish';
import fishing from './protocol/fishing.js';
import gamehall from '../../ScriptCore/protocol/gamehall.js';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { FishHappyAudioConfig } from './configs/fishhappyaudiocfg';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { MD5 } from '../../ScriptCore/Lobby/Scripts/General/MD5';
import { UIMgr } from '../../ScriptCore/Lobby/Scripts/UIMgr';

const { ccclass, property } = _decorator;

let temp_vec2_a = new Vec2(0, 0);
let temp_vec3_a = new Vec3(0, 0, 0);

@ccclass('FishGameControl')
export class FishGameControl extends UIScreen {
    isEngross = false;

    @property(Prefab)
    pfbBullet: Prefab | null = null;

    @property(Prefab)
    pfbNet: Prefab | null = null;

    @property(Prefab)
    pfbTest: Prefab | null = null;

    sprBg: Sprite | null = null;
    nodeReplace: Node | null = null;
    sprReplaceBg: Sprite | null = null;
    sprFlushTip: Node | null = null;

    layerWeapon: Node | null = null;
    layerBullet: Node | null = null;
    layerNet: Node | null = null;
    layerFish: Node | null = null;
    nodeAimedPos: Node | null = null;
    nodeAimedDot: Node | null = null;
    weaponArr: Node[] = [];
    userInfoArr: FishUserInfo[] = [];

    mapId: number = randomRangeInt(1, 3);
    aimedViewArr: FishAimedView[] = [];
    cannonState: StateNormal | null = null;

    private _prePolicyIdx: number = -1;
    private _preTimePoint: number = -1;
    static FISHLAYER_COUNT: number = 6;
    public static enterBackground: boolean = false;
    public isFirstEnterGame: boolean = true;

    onLoad() {
        FishHappyConstants.gameCtrl = this;
        FishHappyConstants.eventMgr = this.node.addComponent(EventComponent);
        this.bindUI();
        this.playBgm();
        this.addTouchEvent();
        this.addEvent();
        // this.drawPhysicsDebugInfo();

        this.cannonState = this.addComponent(StateNormal);
        this.addComponent(StateAutoFire);
        this.addComponent(StateAim);
        this.addComponent(StateAutoAim);
        this.addComponent(StateHook);

        FishPolicyMgr.instance.convertData();
    }

    public async closeSelf(): Promise<boolean> {
        this.unscheduleAllCallbacks();
        console.log("fishgamecontrol 退出游戏======");
        return await super.closeSelf();
    }

    enterForegroundCb () {
        FishGameControl.enterBackground = false;
        let pack = new gamehall.gamehall.CSPlayerSwithFlag();
        pack.Flag = 1<<14;
        pack.Mark = 0;
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_PLAYER_SWITCHFLAG, pack);
        console.log("EnterForeground");
    }

    enterBackgroundCb () {
        FishGameControl.enterBackground = true;
        let pack = new gamehall.gamehall.CSPlayerSwithFlag();
        pack.Flag = 1<<14;
        pack.Mark = 1;
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_PLAYER_SWITCHFLAG, pack);
        console.log("EnterBackground, player step out!"); //暂离
        // this.logFishInfo();
    }

    update(deltaTime: number) {
        for (let aimedView of this.aimedViewArr) {
            if (aimedView != null && aimedView.isActive()) {
                aimedView.update();
            }
        }

        let eventCount = EventQuene.instance.getQueneLen();
        if (eventCount > FishHappyConstants.PER_UPDATE_DEALL_EVENT) {
            eventCount = FishHappyConstants.PER_UPDATE_DEALL_EVENT;
        }

        for (let i = 0; i < eventCount; i++) {
            let eventData = EventQuene.instance.popQuene();
            if (eventData != undefined) {
                FishHappyConstants.eventMgr.dispatchEvent(eventData.event, eventData.msg);
            }
        }
    }

    bindUI() {
        this.layerWeapon = this.node.getChildByName("node_weapon");
        let nodeUserInfo = this.node.getChildByName("node_userinfo");
        for (let i = 0; i < FishHappyConstants.PLAYERCOUNT; i++) {
            let nodeWeapon = this.layerWeapon!.getChildByName("pfb_weapon" + i);
            if (nodeWeapon != null) {
                let fishWeapon = nodeWeapon.getComponent(FishWeapon);
                if (fishWeapon != null) {
                    fishWeapon.init(i, this);
                }
                this.weaponArr[i] = nodeWeapon;
            }

            let nodeUser = nodeUserInfo!.getChildByName("node_user" + i);
            if (nodeUser != null) {
                let userInfoSript = nodeUser.addComponent(FishUserInfo);
                if (userInfoSript != null) {
                    userInfoSript.init(i);
                    this.userInfoArr[i] = userInfoSript;
                }
            }
        }

        this.layerBullet = this.node.getChildByName("node_bullet");
        this.layerNet = this.node.getChildByName("node_net");
        this.layerFish = this.node.getChildByName("node_fish");
        this.nodeAimedPos = this.node.getChildByName("node_aimedpos");
        this.nodeAimedDot = this.node.getChildByName("node_aimeddot");

        this.sprBg = this.node.getChildByName("spr_bg")!.getComponent(Sprite);
        let sprPath = "FishHappy/texture/images/fish_bg_fishing_" + this.mapId;
        let sprFrm = ResMgr.getInstance().getSpriteFrameByPath(sprPath);
        if (sprFrm != null) {
            this.sprBg!.spriteFrame = sprFrm;
        }
        this.nodeReplace = this.node.getChildByName("node_replace");
        this.nodeReplace!.active = false;
        this.sprReplaceBg = this.nodeReplace!.getChildByName("spr_bg")!.getComponent(Sprite);
        this.sprFlushTip = this.node.getChildByName("spr_flush");
    }

    addTouchEvent() {
        this.node.on(Node.EventType.TOUCH_START, (event: EventTouch) => {
            this.cannonState!.handleInput(event);
        }, this)

        this.node.on(Node.EventType.TOUCH_MOVE, (event: EventTouch) => {
            this.cannonState!.handleInput(event);
        }, this)

        this.node.on(Node.EventType.TOUCH_END, (event: EventTouch) => {
            this.cannonState!.handleInput(event);
        }, this)
    }

    addEvent() {
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_CREATE_AIMEDVIEW, this.createAimedView, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_CLEAR_AIMEDVIEW, this.clearAimedView, this);

        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_ROOMINFO, this.onRoomInfo, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_FIRE, this.onOtherfire, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_FIREHIT, this.onHitFish, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_FIREPOWER, this.onPowerChange, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_ROOMSTATE, this.onRoomState, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_ENTER, this.onFisherEnter, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_LEAVE, this.onFisherLeave, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_SYNCFISH, this.onRefreshFish, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_FISHERENTER, this.onSyncFish, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_FISHVIEW, this.onSyncEventFish, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_FISHTARGET, this.onAimedAt, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_SELVIP, this.onChangeCannon, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_OP, this.onOpCallback, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_FISHDEL, this.addMissCoin, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_REBINDAGENT, this.onRebindRobot, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_FIREMISS, this.onFireMiss, this);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_SCSYNCFISHCOIN, this.onSyncFishCoin, this);

        EventMgr.getInstance().addEventListener(EventName.Reconnect_complete, this.onReconnect, this);
        EventMgr.getInstance().addEventListener(EventName.SC_ReturnRoom, this.onReturnRoom, this);

        game.on(Game.EVENT_SHOW, this.enterForegroundCb, this)
        game.on(Game.EVENT_HIDE, this.enterBackgroundCb, this);
    }

    onHide() {
        this.clearNodePool();
        FishHappyRoomData.destoryInstance();
        EventMgr.getInstance().removeByTarget(this);
        game.off(Game.EVENT_SHOW, this.enterForegroundCb, this)
        game.off(Game.EVENT_HIDE, this.enterBackgroundCb, this);
    }

    clearNodePool() {
        PoolManager.instance.clearPool('pfb_bullet');
        PoolManager.instance.clearPool('pfb_net');
        PoolManager.instance.clearPool('pfb_goldaddcoin');
        PoolManager.instance.clearPool('pfb_grayaddcoin');
        PoolManager.instance.clearPool('pfb_goldcoin');
        PoolManager.instance.clearPool('pfb_graycoin');
    }

    onRoomInfo(msg: any) {
        FishHappyRoomData.instance.playerMap.forEach((playerData, srvPos) => {
            let clientPos = FishHappyRoomData.instance.getClientPosBySrvPos(srvPos);
            FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_PLAYER_ENTER, clientPos);
        });
        this.isFirstEnterGame = false;
    }

    onOtherfire(msg: any) {
        console.log("onOtherfire");
        let snId = msg.Snid
        let x = msg.X
        let y = msg.Y
        let bulletId = msg.Bulletid
        let power = msg.Power

        let clientPos = FishHappyRoomData.instance.getClientPosBySnId(snId);
        let playerData = FishHappyRoomData.instance.getPlayerDataBySnId(snId);
        if (playerData != null) {
            let coin = playerData.getCoin() - power;
            if (coin <= 0) {
                //如果扣钱扣成负的，用服务器同步过来的数据
                playerData.setCoin(msg.CurrentPlayerCoin)
            } else {
                playerData.setCoin(coin);
            }
        }

        if (clientPos == FishHappyRoomData.instance.myClientPos) {
            return;
        }

        if (clientPos == FishHappyConstants.PLAYER_CLIENT_POS2 || clientPos == FishHappyConstants.PLAYER_CLIENT_POS3) {
            if (FishHappyRoomData.instance.isAimedFish(clientPos)) {
                //瞄准鱼时，就根据鱼的位置发炮，防止鱼瞄准线和发炮位置有角度偏差
                //还要考虑不同屏幕尺寸的玩家在一个房间，瞄准，鱼路径可能出现的问题
                let aimedFish = FishHappyRoomData.instance.getAimedFish(clientPos);
                if (aimedFish != null && aimedFish.isValid) {
                    let uitransform = FishHappyConstants.gameCtrl.layerFish!.getComponent(UITransform);
                    let aimFishPos = aimedFish.position;
                    aimFishPos = uitransform!.convertToWorldSpaceAR(aimFishPos);
                    temp_vec2_a.set(aimFishPos.x, aimFishPos.y);
                }
            } else {
                temp_vec2_a.set(View.instance.getVisibleSize().width - x, View.instance.getVisibleSize().height - y);
            }
        } else {
            temp_vec2_a.set(x, y);
        }

        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_CANNON_FIREONCE, bulletId, temp_vec2_a, clientPos);
    }

    onHitFish(msg: any) {
        console.log("onHitFish");
        let snId = msg.Snid
        let dieFishIds = msg.FishId;
        let coins = msg.Coin;
        let items = msg.Item;
        let money = msg.Money;
        let evt = msg.Event;
        let eventFish = msg.EventFish; // 0 事件鱼死亡  非0 事件鱼造成的鱼死亡
        let ts = msg.Ts;
        let evtCoin = msg.EventCoin;
        let power = msg.Power;
        let clientPos = FishHappyRoomData.instance.getClientPosBySnId(snId);
        // console.log("onHitFish dieFishIds:", dieFishIds);

        let bigWin = false;
        let eventFishId = -1;
        if (evt !== 0) { // 事件鱼相关
            let isEvent = eventFish != 0; // 表示这些鱼是否因为事件鱼而死亡，如果是，则不再播放自己死亡的特效展示
            if (!isEvent) { // 事件鱼死亡 
                let flag = false;
                let fishid = dieFishIds[0];
                let fishNode = FishHappyRoomData.instance.fishNodeMap.get(fishid);
                if (fishNode != undefined) {
                    if (evt == FishHappyConstants.FISHING_EVENT_BOMB) {
                        FishHappyRoomData.instance.similarPos = fishNode.getPosition();
                        flag = true;
                    } else if (evt == FishHappyConstants.FISHING_EVENT_CHAIN) {
                        FishHappyRoomData.instance.similarPos = fishNode.getPosition();
                        flag = true;
                        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_SHOW_LIGHT_EFFECT, FishHappyRoomData.instance.similarPos, true);
                    } else if (evt > 0 && evt <= 9999) { // 一网打尽
                        bigWin = true;
                        eventFishId = 10501;
                    }

                    if (flag) {
                        let sign = evt.toString() + ";" + fishid.toString() + ";" + this._prePolicyIdx.toString() + ";" + ts.toString() + ";" + snId.toString() + ";";
                        sign = MD5.MD5(sign);
                        let csfishview = new fishing.fishing.CSFishView();
                        csfishview.Sign = sign;
                        csfishview.EventFish = fishid;
                        csfishview.SnId = snId;
                        SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_FISHVIEW, csfishview);
                    }
                }
            } else { //事件鱼引起的鱼死亡
                if (evt == FishHappyConstants.FISHING_EVENT_BOMB) {
                    bigWin = true;
                    eventFishId = 13001;
                    FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_SHOW_FIRE_EFFECT);
                } else if (evt == FishHappyConstants.FISHING_EVENT_CHAIN) {
                    bigWin = true;
                    eventFishId = 11021;
                    FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_SHOW_SIMILARLIGHT, FishHappyRoomData.instance.similarPos, dieFishIds);
                }
            }
        }

        let dieFishCount = dieFishIds.length;
        let totalGold = 0;
        for (let i = 0; i < dieFishCount; i++) {
            let dieFishId = dieFishIds[i];
            let coin = coins[i];
            let fishNode = FishHappyRoomData.instance.fishNodeMap.get(dieFishId);
            if (fishNode != null) {
                fishNode.getComponent(FishFish)!.onKill(clientPos, coin, evt);
            }
            totalGold += coin;
        }

        let playerData = FishHappyRoomData.instance.getPlayerDataByClientPos(clientPos);
        if (playerData != null) {
            playerData.addCoin(totalGold);
        }

        if (bigWin) {
            let fishdata = DB_Fish.getInstance().pool.get(eventFishId);
            FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_SHOW_BAOFU, clientPos, totalGold, fishdata!.Name);
        }
    }

    onPowerChange(msg: any) {
        let snId = msg.Snid
        let power = msg.Power
        let playerData = FishHappyRoomData.instance.getPlayerDataBySnId(snId);
        if (playerData != null) {
            if (playerData.isMe()) {
                return;
            }
            if (FishHappyRoomData.instance.cannonCosts != null) {
                playerData.costLv = FishHappyRoomData.instance.cannonCosts.indexOf(power);
                let clientPos = FishHappyRoomData.instance.getClientPosBySnId(snId);
                FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_COST_CHANGE, clientPos, power);
            }
        }
    }

    onRoomState(msg: any) {
        console.log("onRoomState:", msg.State);
        let state = msg.State;
        let params = msg.Params;
        if (state == 1) {
            this.onFlushFish(params[0]);
        }
    }

    onFisherEnter(msg: any) {
        let data = msg.Data;
        FishHappyRoomData.instance.onPlayerEnter(data);
    }

    onFisherLeave(msg: any) {
        let snId = msg.SnId;
        FishHappyRoomData.instance.onPlayerLeave(snId);
    }

    onRefreshFish(msg: any) {
        let policyIdx = msg.PolicyId;
        let timePoint = msg.TimePoint;
        let randomSeed = msg.RandomSeed;

        // 不知道现在服务器还有没有这个问题，会推过来同样的一条数据，先暂时做一个容错处理吧
        if (this._prePolicyIdx == policyIdx && this._preTimePoint == timePoint) {
            console.log("startRefreshFish found repeate sync policyidx(%d) timepoint(%d)", policyIdx, timePoint);
            return;
        }

        this._prePolicyIdx = policyIdx;
        this._preTimePoint = timePoint;
        Utils.randomseed(randomSeed);
        let policys = FishPolicyMgr.instance.getPolicy(policyIdx, timePoint);
        if (policys != null) {
            console.log("onRefreshFish:", policys.size)
            policys.forEach((policyData, key) => {
                this.createFishs(policyIdx, policyData);
            });
        }
    }

    createFishs(policyIdx: number, policyData: any) {
        let nodePolicy = new Node();
        if (nodePolicy != null) {
            nodePolicy.parent = this.layerFish.getChildByName("node_layer0");// 方便清理节点
            let policyCtrl = nodePolicy.addComponent(FishPolicyControl);
            if (policyCtrl != null) {
                policyCtrl.init(policyIdx, policyData);
            }
        }
    }

    onSyncFish(msg: any) {
        console.log("onSyncFish");
        this.clearRefreshFish();

        let policyIdx = msg.PolicyId;
        let fishes = msg.Fishes;
        let timeTick = msg.TimeTick;

        for (let fd of fishes) {
            let birthTime = fd.BirthTime * 0.1;
            let isNeedFlip = FishHappyRoomData.instance.isNeedFlip();
            let fishId = fd.FishID;

            let p = FishPolicyMgr.instance.getPolicyById(policyIdx, fd.PolicyId);
            if (p != null) {
                // if (!this.fishIds.find(fd.FishID)) {
                //     console.log("onSyncFish policyIdx, PolicyId, FishID, BirthTime =", policyIdx, fd.PolicyId, fd.FishID, fd.BirthTime);
                // }
                let path = PathMgr.instance.getPath(fd.Path.toString(), isNeedFlip);
                let fishData = DB_Fish.getInstance().pool!.get(p.FishId);
                if (path == null) {
                    console.log("path==nil !!!!");
                    console.log("policyIdx, fd.FishID, fd.Path, fd.PolicyId, fd.BirthTime =", policyIdx, fd.FishID, fd.Path, fd.PolicyId, fd.BirthTime);
                    return;
                }

                if (fishData == null) {
                    console.log("can not get fishData!");
                    return;
                }

                let pfbPath = "FishHappy/prefab/fishpfb/prefab_fish_" + fishData!.ResId;
                let pfbFish = ResMgr.getInstance().getPrefabByPath(pfbPath);
                if (pfbFish == null) {
                    console.log("onSyncFish genOneFish can not find prefab:", fishData, fishData!.ResId);
                    return;
                }
                let fishNode = instantiate(pfbFish);
                let fishScript = null;
                if (fishNode != null) {
                    FishHappyRoomData.instance.fishNodeMap.set(fishId, fishNode);
                    fishScript = fishNode!.addComponent(FishFish);
                }

                if (fishScript == null) {
                    return;
                }
                fishScript.init(path, fishId, fishData, p);

                if (path.scatter === 1) {
                    if (birthTime >= 0) {

                        let startAngle_;
                        let offsetAngle_;
                        if (path.s_obj && path.c_obj && path.s_obj.custom == 1) {
                            startAngle_ = path.c_obj.start || 0;
                            offsetAngle_ = path.c_obj.offset || 360 / p.Count;
                        } else {
                            startAngle_ = 0
                            offsetAngle_ = 360 / p.Count;
                        }

                        let idx = fishId % 100;
                        let degress = startAngle_ + offsetAngle_ * idx;
                        let radians = Utils.degrees2radians(degress);
                        let args;
                        if (path.points.length === 1) {
                            args = { x: Math.sin(radians), y: Math.cos(radians) };
                        } else {
                            args = { x: degress, y: 0 };
                        }

                        let speed = p.Speed != 0 && p.Speed || fishData.Speed;
                        speed = speed * FishHappyConstants.FISH_SPEED_PERCENT;
                        let scatterSpeedX = args.x * speed;
                        let scatterSpeedY = args.y * speed;
                        let posStart = new Vec2(0, 0);
                        if (path.points.length >= 1) {
                            posStart = path.points[1];
                        }

                        let nowX = posStart.x + scatterSpeedX * birthTime * 0.1;
                        let nowY = posStart.y + scatterSpeedY * birthTime * 0.1;

                        fishScript.startMove(args, temp_vec3_a.set(nowX, nowY, 0));
                    } else {
                        console.log("birthTime < 0 pos1")
                        this.despawnFish(fishScript.node);
                    }
                } else { // 非发散路径
                    if (birthTime < 0) {
                        console.log("birthTime < 0 pos2")
                        // this.despawnFish(fishScript.node);
                        fishScript.startMove();
                    } else {
                        let points = path.points;
                        let pathPointCnt = points.length;
                        let type = path.type;
                        if (type === 2) { // Bezier(曲线)
                            if (pathPointCnt == 4) {  // 贝塞尔曲线
                                fishScript.startMove();
                                fishScript.setBezierInterval(birthTime);
                            } else if (pathPointCnt >= 3) { // CardinalSpline 曲线
                                fishScript.startMove();
                                fishScript.setCardinalSpline(birthTime);
                            }
                        } else if (type === 3) {
                            fishScript.syncPolyLineMove(birthTime);
                        }
                    }
                }
            }
        }
    }

    onSyncEventFish(msg: any) {
        console.log("onSyncEventFish");
        let fishId = msg.FishID;
        let fishNode = FishHappyRoomData.instance.fishNodeMap.get(fishId);
        let params: number[] = [];
        if (fishNode != null) {
            let script = fishNode.getComponent(FishFish);
            if (script != null) {
                let evtid = script.policyData.Event;
                if (evtid == FishHappyConstants.FISHING_EVENT_NET) {
                    params = FishHappyRoomData.instance.getEventFishIds(evtid, script.fishId);
                } else if (evtid == FishHappyConstants.FISHING_EVENT_BOMB) {
                    params = FishHappyRoomData.instance.getBombKillFishIds(fishNode);
                } else if (evtid == FishHappyConstants.FISHING_EVENT_CHAIN) {
                    params = FishHappyRoomData.instance.getChainKillFishIds(fishNode);
                }
            }
        }

        if (params.length > 0) {
            let csfishview = new fishing.fishing.CSFishView();
            csfishview.Sign = msg.Sign;
            csfishview.Fishs = params;
            SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_FISHVIEW, csfishview);
        }
    }

    onAimedAt(msg: any) {
        console.log("onAimedAt");
        let snId = msg.SnId;
        let fishId = msg.FishId;
        let clientPos = FishHappyRoomData.instance.getClientPosBySnId(snId);
        let playerData = FishHappyRoomData.instance.getPlayerDataByClientPos(clientPos);

        if (fishId == 0) { // 瞄准状态下取消瞄准鱼UI
            if (FishHappyRoomData.instance.isAimedFish(clientPos)) {
                FishHappyRoomData.instance.removeAimedFish(clientPos);
            }
        } else {
            let fishNode = FishHappyRoomData.instance.fishNodeMap.get(fishId);
            if (playerData != null && fishNode != null && !fishNode.getComponent(FishFish)!.centerOutOfScreen()) {
                FishHappyRoomData.instance.saveAimedFish(clientPos, fishNode);
                if (playerData.isMe()) {
                    if (this.cannonState != null) {
                        this.cannonState.onAimedAt(fishNode);
                    }
                }
            }
        }
    }

    onChangeCannon(msg: any) {
        let snId = msg.Snid
        let selVip = msg.Vip
        let playerData = FishHappyRoomData.instance.getPlayerDataBySnId(snId);
        if (playerData != null) {
            playerData.selVip = selVip;
        }
    }

    onOpCallback(msg: any) {
        console.log("onOpCallback");
        let myPlayerData = FishHappyRoomData.instance.getPlayerDataByClientPos(FishHappyRoomData.instance.myClientPos);
        if (myPlayerData == null) {
            return;
        }
        if (msg.SnId != myPlayerData.getSnId()) {
            return;
        }
        let opCode = msg.OpCode;
        if (opCode == FishPlayerOpCode.OpCodeAutoFire) {
            let isUse = msg.Params[1] > 0 && true || false;
            myPlayerData.isUseAutoFire = isUse;
            FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_AUTOFIRE_FLAG);
        } else if (opCode == FishPlayerOpCode.OpCodeAim) {
            let isUse = msg.Params[1] > 0 && true || false;
            myPlayerData.isUseAim = isUse;
            FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_AIM_FLAG);
        }
    }

    addMissCoin(msg: any) {
        console.log("addMissCoin:");
        let myPlayerData = FishHappyRoomData.instance.getPlayerDataByClientPos(FishHappyRoomData.instance.myClientPos);
        if (myPlayerData == null) {
            return;
        }
        myPlayerData.setCoin(msg.CurrentPlayerCoin);

        if (msg.FishId == 0) {
            if (msg.Coin == 0) { return; };
            let str = Utils.convertMoney(msg.Coin);
            UIMgr.getInstance().AlertTxtWithConfirmClose("鱼潮来临，返还" + str + "金币消耗");
        }
    }

    onRebindRobot(msg: any) {

    }

    onFireMiss(msg: any) {

    }

    onSyncFishCoin(msg: any) {
        let fishNode = FishHappyRoomData.instance.fishNodeMap.get(msg.FishId);
        if (fishNode != null) {
            let script = fishNode.getComponent(FishFish);
            if (script != null) {
                script.refreshFishRate(msg.Coin);
            }
        }
    }

    createAimedView(aimedFish: Node, clientPos: number) {
        if (this.aimedViewArr[clientPos] == null) {
            this.aimedViewArr[clientPos] = new FishAimedView(this, clientPos);
        }
        let weaponNode = this.weaponArr[clientPos];
        this.aimedViewArr[clientPos].init(aimedFish, weaponNode);
    }

    clearAimedView(clientPos: number) {
        let aimedView = this.aimedViewArr[clientPos];
        if (aimedView != null) {
            aimedView.clear();
        }
    }

    despawnBullet(bulletNode: Node) {
        if (bulletNode == null) {
            console.log("bulletNode is null!");
            return;
        }
        PoolManager.instance.putNode(bulletNode);
        this.removeNodeFromArr(FishHappyRoomData.instance!.bulletArr, bulletNode);
    }

    despawnNet(netNode: Node) {
        if (netNode == null) {
            console.log("netNode is null!");
            return;
        }
        PoolManager.instance.putNode(netNode);
    }

    despawnFish(fishNode: Node) {
        // console.log('remove FishNode', FishHappyRoomData.instance.fishNodeMap.size);
        if (fishNode != null) {
            let fishScript = fishNode.getComponent(FishFish);
            if (fishScript != null) {
                FishHappyRoomData.instance.fishNodeMap.delete(fishScript.fishId);
                fishScript.dealFishDieAimedShow();//有些鱼在屏幕内消失了
            }
            fishNode.destroy();
            // console.log("before out screen despawn:", fishScript.centerOutOfScreen())
        }
    }

    removeNodeFromArr(nodeArr: Node[], node: Node) {
        let index = nodeArr.indexOf(node);
        if (index > -1) {
            nodeArr.splice(index, 1);
        }
    }

    createBullet(clientPos: number, bulletId: number, bulletPos: Vec3, angle: number) {
        if (this.pfbBullet == null || this.layerBullet == null) {
            console.log("error: pfbBullet is null or layerBullet is null!");
            return;
        }
        let bulletNode = PoolManager.instance.getNode(this.pfbBullet, this.layerBullet);
        if (bulletNode != null) {
            if (clientPos == FishHappyRoomData.instance.myClientPos) {
                FishHappyRoomData.instance!.bulletArr.push(bulletNode);
            }
            let bulletScript = bulletNode.getComponent(FishBullet);
            bulletScript!.init(clientPos, bulletId, bulletPos, angle);
        }
    }

    createNet(pos: Vec3, clientPos: number) {
        if (this.pfbNet == null || this.layerNet == null) {
            console.log("error: pfbNet is null or layerNet is null!");
            return;
        }
        let netNode = PoolManager.instance.getNode(this.pfbNet, this.layerNet);
        if (netNode != null) {
            netNode.getComponent(FishNet)!.init(clientPos, pos);
        }
    }

    switchCannonState(state: StateNormal | null) {
        if (this.cannonState == null) {
            console.log('failed! switchCannonState --- current cannonstate is null!');
            return;
        }
        this.cannonState.clearState();
        this.cannonState = state;
        if (this.cannonState == null) {
            console.log('failed! switchCannonState --- switch to cannonstate is null!');
            return;
        }
        this.cannonState.initState();
    }

    fishDieDealCannonState() {
        if (this.cannonState == null) {
            console.log('failed! switchCannonState --- current cannonstate is null!');
            return;
        }
        let stateName = this.cannonState.getStateName();
        if (stateName == 'StateAim') {
            this.cannonState.clearState();
        } else if (stateName == 'StateAutoAim' || stateName == 'StateHook') {
            this.cannonState.reAimedFish();
        }
    }

    playBgm() {
        let bgmName = FishHappyAudioConfig.getSceneBgm();
        if (bgmName != null) {
            AudioMgr.getInstance().playMusic(bgmName);
        }
    }

    onFlushFish(mapId: number) {
        this.sprFlushTip!.active = true;
        if (mapId < 0 || mapId > 3) {
            this.mapId = 1;
        } else {
            this.mapId = mapId;
        }
        FishHappyRoomData.instance.fishNodeMap.forEach((fishNode, fishId) => {
            if (fishNode != null) {
                let script = fishNode.getComponent(FishFish);
                if (script != null) {
                    script.quickLeave();
                }
            }
        })

        let stateName = this.cannonState.getStateName();
        if (stateName != 'StateNormal') {
            this.cannonState.pause()
        }

        // 移除其他玩家的瞄准鱼数据，防止发射的子弹无法和鱼发生碰撞
        FishHappyRoomData.instance.playerMap.forEach((playerData, srvPos) => {
            if (playerData.clientPos != FishHappyRoomData.instance.myClientPos) {
                FishHappyRoomData.instance.removeAimedFish(playerData.clientPos);
            }
        });

        let flushFishCb = () => {
            FishHappyRoomData.instance.fishNodeMap.clear();
            if (this.layerFish != null) {
                for (let i = 0; i < FishHappyConstants.FISHLAYER_COUNT; i++) {
                    let layerName = "node_layer" + i;
                    let layer = this.layerFish.getChildByName(layerName);
                    if (layer != null) {
                        layer.removeAllChildren()
                    }
                }
            }
            this.sprFlushTip!.active = false;
            this.pushMap();
        }

        this.scheduleOnce(flushFishCb.bind(this), 1.0);
    }

    pushMap() {
        this.nodeReplace!.active = true;
        this.nodeReplace!.position = v3(View.instance.getVisibleSize().width/2, 0, 0);
        let sprPath = "FishHappy/texture/images/fish_bg_fishing_" + this.mapId;
        let sprFrm = ResMgr.getInstance().getSpriteFrameByPath(sprPath);
        if (sprFrm != null) {
            this.sprReplaceBg!.spriteFrame = sprFrm;
        }
        let scale = View.instance.getVisibleSize().width / View.instance.getDesignResolutionSize().width;
        this.sprReplaceBg.node.scale = v3(scale, 1, 1);

        let mapMoveCallBack = () => {
            this.nodeReplace!.active = false;
            let sprPath = "FishHappy/texture/images/fish_bg_fishing_" + this.mapId;
            let sprFrm = ResMgr.getInstance().getSpriteFrameByPath(sprPath);
            if (sprFrm != null) {
                this.sprBg!.spriteFrame = sprFrm;
            }

            let stateName = this.cannonState.getStateName();
            if (stateName != 'StateNormal') {
                // 等到渔场里面有鱼了再重新开始状态
                this.cannonState.restart()
            }
        }

        tween(this.nodeReplace)
            .to(2.0, { position: new Vec3(-View.instance.getVisibleSize().width/2, 0, 0) })
            .call(mapMoveCallBack.bind(this))
            .start();
    }

    clearRefreshFish() {
        FishHappyRoomData.instance.fishNodeMap.clear();
        for (let i = 0; i < FishGameControl.FISHLAYER_COUNT; i++) {
            let layerName = "node_layer" + i;
            let layer = this.layerFish.getChildByName(layerName);
            if (layer != null) {
                layer.destroyAllChildren();
            }
        }

        FishHappyRoomData.instance.saveAimedFishId();
        FishHappyRoomData.instance.clearAimedFishMap();
        FishHappyRoomData.instance.bulletArr.length = 0;
        this.layerBullet.destroyAllChildren();
        this._prePolicyIdx = -1;
        this._preTimePoint = -1;
    }

    /**
     * 欢乐捕鱼收到玩家断线重连的消息
     * @param msg 
     */
    onReconnect(msg: any): void {
        let roomId = FishHappyRoomData.instance.getRoomId();
        if (roomId != null && roomId != 0) {
            let packet = new gamehall.gamehall.CSReturnRoom();
            packet.RoomId = roomId;
            packet.IsLoaded = true;
            console.log("欢乐捕鱼发送返回房间的消息");
            console.log(packet)
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_RETURNROOM, packet);
        }
    }

    onReturnRoom(msg: any) {
        console.log("欢乐捕鱼收到返回房间的消息");
        console.log(msg);
    }

    drawPhysicsDebugInfo() {
        // PhysicsSystem2D.instance.enable = true;
        PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.Aabb
        EPhysics2DDrawFlags.Pair |
            EPhysics2DDrawFlags.CenterOfMass |
            EPhysics2DDrawFlags.Joint |
            EPhysics2DDrawFlags.Shape;

        //https://forum.cocos.org/t/topic/106388  解决调试信息不显示BUG 参考该帖子                                          
        this.scheduleOnce(() => {
            let draw = find("Canvas/PHYSICS_2D_DEBUG_DRAW");
            draw!.layer = Layers.Enum.UI_2D;
        });
    }

    private fishIds:any[] = [];
    logFishInfo () {
        let iter = FishHappyRoomData.instance.fishNodeMap.values();
        let r: IteratorResult<Node>;
        while (r = iter.next(), !r.done) {
            let fishNode = r.value;
            let fishScript = fishNode.getComponent(FishFish);
            if (fishScript != null && !fishScript.centerOutOfScreen()) {
                console.log("EnterBack FishID", fishScript.fishId);
                this.fishIds.push(fishScript.fishId);
            }
        }
    }
}
