import { _decorator, Component, Node, math, View } from 'cc';
import { SocketMgr } from '../../ScriptCore/panda/net/SocketMgr';
import { DB_Fish } from '../data/db_fish';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishHappyPlayerData } from './fishdata/fishhappyplayerdata';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
import { FishFish } from './fishfish';
import { FishNetEventName, FishPlayerOpCode } from './net/fishneteventname';
import fishing from './protocol/fishing.js';
const { ccclass } = _decorator;

enum ROBOT_ATACK_STATE {
    FIRE_MODE_RAND = 0,	        //随便打打
    FIRE_MODE_AUTOAIMED = 1,	//瞄准挂机
    FIRE_MODE_HANGUP = 2,	    //挂机状态
    FIRE_MODE_MANU = 3,         //模拟手动模式
}
const ROBOT_PRINT_LOG = true;

enum ROBOT_STATE {
    ROBOT_STATE_NONE = 0,
    ROBOT_STATE_LEAVEIDLE,
    ROBOT_STATE_LEAVEATTACK,
    ROBOT_STATE_IDLE,
    ROBOT_STATE_ATTACK,
}

@ccclass('fishrobotctrl')
export class fishrobotctrl extends Component {
    //debug
    private _logCount: number = 0;
    //最后开火时间
	private _lastFireTs: number = 0;
	//最后切换位置时间
	private _nextChgFireXYTs: number = 0;
	//期望开火次数
	private _expectFireTimes: number = 0;
	//已经开火次数
	private _firedTimes: number = 0;
	//开火间隔
	private _fireInterval: number = 0.2;
	//开火的位置
	private _fireX: number = 0;
	private _fireY: number = 0;
	//子弹自增长id
	private _bulletId: number = 800000000;
    //idle状态持续的时间
    private _idleSec: number = 0;
    //开火方式
	private _fireMode: ROBOT_ATACK_STATE = ROBOT_ATACK_STATE.FIRE_MODE_RAND;
	//炮倍调整
	private _rateLevel: number = -1;
	//挂机选的鱼
	private _hangupFishFilter: number[] = [];
	//上次攻击瞄准的鱼
	private _lastAimedFish: Node = null;
	//持续攻击同一条鱼
	private _fireSameAimedTimes: number = 0;
	//攻击几轮后开始换炮倍
	private _attackTimesChangePower: number = 0;
	//第几轮攻击
	private _attackTimes: number = 0;
    //机器人状态
    private _robotState: ROBOT_STATE = ROBOT_STATE.ROBOT_STATE_NONE;
    //是否在update中切换状态
    private _isSwitchRobotGameState: boolean = false;
    //等待退出
    private _waitQuit: boolean = false;
    //机器人玩家数据
    private _robotData: FishHappyPlayerData = null;
    //机器人snid
    private _robotSnId: number = 0;
    //开火回调函数
    private _fireFunc: any = null;
    //客户端位置
    private _clientPos: number = -1;

    init (clientPos: number, idleSec?: number) {
        this._clientPos = clientPos;
        this._robotData = FishHappyRoomData.instance.getPlayerDataByClientPos(clientPos);
        if (this._robotData != null) {
            this._robotSnId = this._robotData.getSnId();
        }
        this._idleSec = idleSec || math.randomRangeInt(2,5);

        this.randAttckTimesChangePower();

        this.setRobotState(ROBOT_STATE.ROBOT_STATE_IDLE);
        FishHappyConstants.eventMgr.addEventListener(FishNetEventName.FISHING_SC_SCROBOTBEHAVIOR, this.onRobotBehavior, this);
    }

    start () {
    }

    update (deltaTime: number) {
        if (this._isSwitchRobotGameState) {
            this._isSwitchRobotGameState = false;
            this.switchRobotState();
        }
    }

    onDestroy () {
        this.log(`RobotController:onExit() ${this._robotSnId, this._robotData.getName()}`);
        this.stopFire();
    }

    stopFire () {
        if (this._fireFunc != null) {
            this.unschedule(this._fireFunc);
            this._fireFunc = null;
        }
    }

    onRobotBehavior (msg: any) {
        let code = msg.Code;
        let robotId = msg.RobotId;
        if (robotId == this._robotSnId) {
            if (code == 0) { //停止攻击
                if (this._robotState == ROBOT_STATE.ROBOT_STATE_ATTACK) {
                    this._waitQuit = true;
                    this.setRobotState(ROBOT_STATE.ROBOT_STATE_IDLE);
                }
            }
        }
    }

    setRobotState (robotState: ROBOT_STATE) {
        this._robotState = robotState;
        this._isSwitchRobotGameState = true;
    }

    log (msg: string, separate?: boolean) {
	    if (ROBOT_PRINT_LOG) {
		    if (separate) {
                this._logCount = this._logCount + 1;
                console.log(``);
            }
		    console.log(this._logCount, this._robotSnId, msg);
        }
    }

    switchRobotState () {
        switch(this._robotState) {
            case ROBOT_STATE.ROBOT_STATE_LEAVEIDLE: {
                this.log(`[FSM] LEAVE   STATE: idle`);
                this.log(`rateLevel_=%${this._rateLevel}`);
                // 随机一种攻击方式
                this.randFireMode();
                // 选一个炮倍区间
                if (this._rateLevel == -1 && this._attackTimes == this._attackTimesChangePower) {
                    this.randFireRateLevel();
                    let dir = 1; // 正向加倍
                    if (math.random() > 0.7) {
                        dir = -1; // 反向加倍
                    }
                    let changePower = () => {
                        let cb = () => {
                            let lvl = this._robotData.costLv;
                            if (lvl != this._rateLevel) {
                                lvl += dir;
                                if (lvl == FishHappyRoomData.instance.cannonCosts.length) {
                                    lvl = 0;
                                } else if (lvl < 0) {
                                    lvl = FishHappyRoomData.instance.cannonCosts.length - 1;
                                }

                                let score = FishHappyRoomData.instance.cannonCosts[lvl];
                                let fishingOp = new fishing.fishing.CSFishingOp();
                                fishingOp.OpCode = FishPlayerOpCode.OpCodeRobotChPower;
                                fishingOp.Params = [this._robotSnId, score];
                                SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_OP, fishingOp);
                                this.log(`[FSM] STATE: idle change power(${lvl})`);
                                changePower();
                            } else {
                                this.setRobotState(ROBOT_STATE.ROBOT_STATE_ATTACK);
                            }
                        }
                        this.scheduleOnce(cb.bind(this), math.randomRangeInt(5,10) * 0.1);
                    }
                    // 开始修改炮倍
                    changePower();
                } else {
                    this.setRobotState(ROBOT_STATE.ROBOT_STATE_ATTACK);
                }
                break;
            }
            case ROBOT_STATE.ROBOT_STATE_LEAVEATTACK: {
                this.log(`[FSM] LEAVE   STATE: attack`);
                this._firedTimes = 0;
                this._expectFireTimes = 0;
                this._attackTimes = this._attackTimes + 1;
                // 停止攻击
                this.stopFire();
                // 玩时间久了，离开一会儿
                if (this._attackTimes >= math.randomRangeInt(3, 10)) {
                    let fishingOp = new fishing.fishing.CSFishingOp();
                    fishingOp.OpCode = FishPlayerOpCode.OpCodeRobotLeave;
                    fishingOp.Params = [this._robotSnId];
                    SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_OP, fishingOp);
                    this._waitQuit = true;
                    this.log(`[FSM] LEAVE   STATE: attack wantQuit(${this._robotSnId})`);
                }
                if (this._waitQuit) {
                    this._idleSec = 120;
                } else {
                    this._idleSec = math.randomRangeInt(5, 20);
                }
                this.setRobotState(ROBOT_STATE.ROBOT_STATE_IDLE);
                break;
            }
            case ROBOT_STATE.ROBOT_STATE_IDLE: {
                this.log(`[FSM] ENTER   STATE: idle(sec:${this._idleSec})`);
                this.clearAimed();
                //开火间隔
                this.randFireInterval();
                // 延迟个几秒钟再开火
                let callback = () => {
                    this.setRobotState(ROBOT_STATE.ROBOT_STATE_LEAVEIDLE);
                }
                this.scheduleOnce(callback.bind(this), this._idleSec);
                break;
            }
            case ROBOT_STATE.ROBOT_STATE_ATTACK: {
                let durable = this.getFireDurable();
                this._expectFireTimes = Math.floor(math.randomRangeInt(durable[0], durable[1]) / this._fireInterval);
                this.log(`[FSM] ENTER   STATE: attack(times:${this._expectFireTimes})`);
                this._firedTimes = 0;

                this._fireFunc = () => {
                    let ts = new Date().getTime();
                    // console.log(`ROBOT_STATE_ATTACK time: ${ts}, ${this._lastFireTs}`);
                    //开火太频繁,防止帧跳跃
                    if (ts - this._lastFireTs < this._fireInterval * 1000) {
                        return;
                    }

                    //切换下开火位置
                    if (this._nextChgFireXYTs < ts) {
                        this._fireX = math.randomRangeInt(50, View.instance.getVisibleSize().width-50);
                        this._fireY = math.randomRangeInt(100, View.instance.getVisibleSize().height-50);
                        this._nextChgFireXYTs = ts + math.randomRangeInt(5,15) * 1000;
                    }

                    if (this._robotState != ROBOT_STATE.ROBOT_STATE_ATTACK) {
                        this.log(`[FSM] robotid=${this._robotSnId} currstate=${this._robotState} cannot attack`);
                        return;
                    }

                    let cost = FishHappyRoomData.instance.cannonCosts[this._robotData.costLv];

                    //钱不够,直接停止吧
                    let coin = this._robotData.getCoin();
                    if (coin < cost) {
                        this.log(`[FSM] robotid=${this._robotSnId} coin(${coin})<cost(${cost}) cannot attack`);
                        return;
                    }

                    //看不到鱼，先不打
                    if (!this.seenFish()) {
                        this.log(`[FSM] robotid=${this._robotSnId} not seenFish cannot attack`);
                        return;
                    }

                    //瞄准状态下检查下有没有瞄准的鱼
                    if (this._fireMode != ROBOT_ATACK_STATE.FIRE_MODE_RAND) {
                        let ret = this.checkAimedFish();
                        let aimedFish = ret.aimedFish;
                        let isNew = ret.flag;
                        if (aimedFish == null) {
                            if (this._fireMode != ROBOT_ATACK_STATE.FIRE_MODE_MANU) { //自动模式快速切换鱼
                                aimedFish = this.reselectFish();
                            } else {
                                //停1~3秒继续
                                if (ts - this._lastFireTs > math.randomRangeInt(1, 3) * 1000) {
                                    aimedFish = this.reselectFish();
                                }
                            }
                            //挂机模式,10s选不到鱼,重新切换一种模式
                            if (aimedFish == null && this._fireMode == ROBOT_ATACK_STATE.FIRE_MODE_HANGUP) {
                                if (ts - this._lastFireTs > 10000) {
                                    this.randFireMode();
                                }
                            }

                            this.log(`[FSM] robotid=${this._robotSnId} aimedFish lost cannot attack currts=${ts}, lastFireTs_=${this._lastFireTs}, fireMode_=${this._fireMode}`);
                            return
                        }

                        if (isNew) {
                            if (this._fireMode == ROBOT_ATACK_STATE.FIRE_MODE_MANU) { //手动模式没这么快切换,下一帧再开炮
                                this.log(`[FSM] robotid=${this._robotSnId} FIRE_MODE_MANU next to attack`);
                                return;
                            }
                        }

                        //出界了
                        if (aimedFish.getComponent(FishFish).centerOutOfScreen()) {
                            if (this._fireMode != ROBOT_ATACK_STATE.FIRE_MODE_MANU) { //自动模式快速切换鱼
                                aimedFish = this.reselectFish();
                            } else {
                                //停1~3秒继续
                                if (ts - this._lastFireTs > math.randomRangeInt(1, 3) * 1000) {
                                    aimedFish = this.reselectFish();
                                }
                            }
                            //挂机模式,10s选不到鱼,重新切换一种模式
                            if (aimedFish == null && this._fireMode == ROBOT_ATACK_STATE.FIRE_MODE_HANGUP) {
                                if (ts - this._lastFireTs > 10000) {
                                    this.randFireMode();
                                }
                            }

                            this.log(`[FSM] robotid=${this._robotSnId} aimedFish lost cannot attack currts=${ts}, lastFireTs_=${this._lastFireTs}, fireMode_=${this._fireMode}`);
                            return
                        } else {
                            if (this._fireMode == ROBOT_ATACK_STATE.FIRE_MODE_MANU) { //手动模式
                                let gold = aimedFish.getComponent(FishFish).fishData.Gold;
                                if (gold > 10 && this._fireSameAimedTimes > math.randomRangeInt(10, gold)) {
                                    aimedFish = this.reselectFish();
                                }
                            }
                        }

                        //瞄准的鱼切换了，重新计数连续攻击次数
                        if (aimedFish != this._lastAimedFish) {
                            this._fireSameAimedTimes = 0;
                        }
                        this._fireSameAimedTimes += 1;
                        this._lastAimedFish = aimedFish;
                        //如果是瞄准,时刻更新下自己炮口的朝向位置
                        let tpos = aimedFish!.getPosition();
                        if (FishHappyRoomData.instance.isMySameSide(this._clientPos)) {
                            this._fireX = tpos.x;
                            this._fireY = tpos.y;
                        } else {
                            this._fireX = View.instance.getVisibleSize().width - tpos.x;
                            this._fireY = View.instance.getVisibleSize().height - tpos.y;
                        }
                    }

                    //开火
                    let fishingOp = new fishing.fishing.CSFishingOp();
                    fishingOp.OpCode = FishPlayerOpCode.OpCodeRobotFire;
                    fishingOp.Params = [this._robotSnId, this._fireX, this._fireY, this._bulletId, cost];
                    SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_OP, fishingOp);
                    this._bulletId += 1;
                    this._firedTimes += 1;
                    this._lastFireTs = ts;

                    if (this._firedTimes >= this._expectFireTimes) {
                        this.log(`[FSM] robotid=${this._robotSnId} this._firedTimes(${this._firedTimes})>=this._expectFireTimes(${this._expectFireTimes}) change attack state`);
                        this.setRobotState(ROBOT_STATE.ROBOT_STATE_LEAVEATTACK);
                    }
                }
                this.schedule(this._fireFunc.bind(this), 0.033);

                break;
            }
            default:
                break;
        }
    }

    randFireInterval () {
        let idx = math.randomRangeInt(1, 3);
        if (idx == 1) {
            this._fireInterval = 0.2;
        } else if(idx == 2) {
            this._fireInterval = 0.15;
        } else if(idx == 3) {
            this._fireInterval = 0.1;
        }
    }

    randFireRateLevel () {
        let sceneType = FishHappyRoomData.instance.getSceneType();
        if (sceneType == 1) {//初级场
            let rate = math.randomRangeInt(1, 100);
            if (rate < 30) {
                this._rateLevel = 9;
            } else if (rate < 80) {
                this._rateLevel = 1;
            } else {
                this._rateLevel = math.randomRangeInt(2, 7);
            }
        } else if (sceneType == 2) {//中级场
            let rate = math.randomRangeInt(1, 100);
            if (rate < 10) {
                this._rateLevel = 9;
            } else if (rate < 80) {
                this._rateLevel = 1;
            } else {
                this._rateLevel = math.randomRangeInt(3, 7);
            }
        } else if (sceneType == 3) {//高级场
            let rate = math.randomRangeInt(1, 100);
            if (rate < 2) {
                this._rateLevel = 9;
            } else if (rate < 90) {
                this._rateLevel = 1;
            } else {
                this._rateLevel = math.randomRangeInt(2, 3);
            }
        } else if (sceneType == 4) {//试玩场
            let rate = math.randomRangeInt(1, 100);
            if (rate < 90) {
                this._rateLevel = 1;
            } else {
                this._rateLevel = 9;
            }
        }
    }

    randAttckTimesChangePower () {
        let sceneType = FishHappyRoomData.instance.getSceneType();
        if (sceneType == 1) { //初级场
		    this._attackTimesChangePower = math.randomRangeInt(1,2);
        } else if (sceneType == 2){ //中级场
		    this._attackTimesChangePower = math.randomRangeInt(1,3);
        } else if (sceneType == 3){ //高级场
		    this._attackTimesChangePower = math.randomRangeInt(1,5);
        } else if (sceneType == 4){ //试玩场
		    this._attackTimesChangePower = math.randomRangeInt(1,2);
        }
    }

    randFireMode () {
	    // this._fireMode = math.randomRangeInt(0, 3);
        // test
        this._fireMode = ROBOT_ATACK_STATE.FIRE_MODE_RAND;
	    // if (this._fireMode == ROBOT_ATACK_STATE.FIRE_MODE_HANGUP) {
		//     this.genHangupFilter();
        // }
    }

    getFireDurable (): [number, number] {
        let cfg = [
            [30,60],
            [45,120],
            [60,150],
            [90,180],
            [120,300]
        ];

        let cnt = cfg.length;
	
        if (this._attackTimes < 0) {
            return [15, 45];
        } else if (this._attackTimes >= cnt) {
            return [cfg[cnt-1][0], cfg[cnt-1][1]];
        } else {
            return [cfg[this._attackTimes][0], cfg[this._attackTimes][1]];
        }
    }

    seenFish (): boolean {
        let iter = FishHappyRoomData.instance.fishNodeMap.values();
        let r: IteratorResult<Node>;
        while (r = iter.next(), !r.done) {
            let fishNode = r.value;
            let fishScript = fishNode.getComponent(FishFish);
            if (fishScript != null && !fishScript.isDie && !fishScript.centerOutOfScreen()) {
                return true;
            }
        }

        return true;
    }

    //瞄准时应该走的逻辑
    checkAimedFish (): {aimedFish: Node | null, flag: boolean} {
        if (this._robotData != null) {
            this._robotData.isUseAim = true;
        }
        let fishNode = FishHappyRoomData.instance.getAimedFish(this._clientPos);
        if (fishNode == null) {
            return {aimedFish: this.reselectFish(), flag: true};
        }
        return {aimedFish: fishNode, flag: false};
    }

    //监听刷新鱼潮事件
    onFlushFish () {
	    this._idleSec = math.randomRangeInt(5, 10);
	    this.setRobotState(ROBOT_STATE.ROBOT_STATE_IDLE);
    }

    clearAimed () {
        let fishNode = FishHappyRoomData.instance.getAimedFish(this._clientPos);
        if (fishNode != null) {
            this.sendAimed(0);
            this._robotData.isUseAim = false;
        }
    }

    sendAimed (fishId: number) {
        let fishingOp = new fishing.fishing.CSFishTarget();
        fishingOp.FishId = fishId;
        fishingOp.RobotId = this._robotSnId;
        SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_FISHTARGET, fishingOp);
        this.log(`RobotController:sendAimed robotSnId = ${this._robotSnId} fireMode = ${this._fireMode} fishId = ${fishId}`);
    }

    onAimedFishLost () {
	    if (this._fireMode != ROBOT_ATACK_STATE.FIRE_MODE_RAND) {
		    this.reselectFish();
        }
    }

    //挂机选鱼
    genHangupFilter () {
        let allFish: any[] = [];
        if (DB_Fish.getInstance().pool != null) {
            DB_Fish.getInstance().pool.forEach((fishData, fishId) => {
                if (fishData.GameId == FishHappyConstants.GameId_FishingHappy) {
                    allFish.push(fishData);
                }
            })
        }
        allFish = allFish.sort((a, b) => a.Sort - b.Sort);

        let total = allFish.length;
        let cnt = Math.floor(math.randomRangeInt(3, total/4));
        let start = Math.floor(math.randomRangeInt(total/3, total));
        let limit = start + cnt;
        if (limit > total) {
            limit = total;
        }
        for (let i = start - 1; i <= limit - 1; i++) {
            this._hangupFishFilter.push(allFish[i].Id);
        }
    }

    reselectFish (): Node | null {
        let fish: Node = null;
        if (this._fireMode == ROBOT_ATACK_STATE.FIRE_MODE_AUTOAIMED) {
            fish = this.selectFishByAimed()
        } else if (this._fireMode == ROBOT_ATACK_STATE.FIRE_MODE_HANGUP) {
            fish = this.selectFishByHangup(this._hangupFishFilter)
        } else if (this._fireMode == ROBOT_ATACK_STATE.FIRE_MODE_MANU) {
            fish = this.selectFishByManu();
        }

        if (fish != null) {
            this.sendAimed(fish.getComponent(FishFish).fishId);
        } else {
            let aimedFish = FishHappyRoomData.instance.getAimedFish(this._clientPos);
            if (aimedFish != null) {
                this.sendAimed(0);
            }
        }

        return fish;
    }

    //模拟自动瞄准选鱼
    selectFishByAimed (): Node | null {
        let retFishNode: Node | null = null;
        let iter = FishHappyRoomData.instance.fishNodeMap.values();
        let r: IteratorResult<Node>;
        while (r = iter.next(), !r.done) {
            let fishNode = r.value;
            let fishScript = fishNode.getComponent(FishFish);
            if (fishScript != null && !fishScript.centerOutOfScreen() && !fishScript.isDie) {
                if (fishScript.fishData.IsBoss != 0) {
                    return fishNode;
                }

                if (retFishNode == null) {
                    retFishNode = fishNode;
                    let gold = fishNode.getComponent(FishFish)!.fishData.Gold;
                    if (gold >= 50) {
                        return fishNode;
                    }
                } else {
                    let gold1 = retFishNode.getComponent(FishFish)!.fishData.Gold;
                    let gold2 = fishNode.getComponent(FishFish)!.fishData.Gold;
                    if (gold2 >= 50) {
                        return fishNode;
                    }
                    if (gold1 < gold2) {
                        retFishNode = fishNode;
                    }
                }
            }
        }

        return retFishNode;
    }

    //模拟挂机选鱼
    selectFishByHangup (expectFishIds: number[]): Node | null {
        if (expectFishIds.length == 0) {
            return null;
        }

        let retFishNode: Node | null = null;
        let iter = FishHappyRoomData.instance.fishNodeMap.values();
        let r: IteratorResult<Node>;
        while (r = iter.next(), !r.done) {
            let fishNode = r.value;
            let fishScript = fishNode.getComponent(FishFish);
            if (fishScript != null && !fishScript.centerOutOfScreen() && !fishScript.isDie && expectFishIds.indexOf(fishScript.fishData.Id) != -1) {
                return fishNode;
            }
        }

        return null;
    }

    //模拟手动选鱼,只挑选事件鱼和高倍率鱼
    selectFishByManu (): Node | null {
        let retFishNode: Node | null = null;
        let tempFish: Node[] = [];
        FishHappyRoomData.instance.fishNodeMap.forEach((fishNode: Node, fishId: number) => {
            if (fishNode != null && fishNode.isValid) {
                let fishScript = fishNode.getComponent(FishFish);
                if (fishScript != null && !fishScript.isDie && !fishScript.centerOutOfScreen()) {
                    if (fishScript.fishData.Gold >= 50) {
                        tempFish.push(fishNode);
                    } else {
                        if (fishScript.policyData.Event > 0) {
                            tempFish.push(fishNode);
                        } else {
                            if (retFishNode == null) {
                                retFishNode = fishNode;
                            } else {
                                let gold1 = retFishNode.getComponent(FishFish)!.fishData.Gold;
                                let gold2 = fishNode.getComponent(FishFish)!.fishData.Gold;
                                if (gold1 < gold2) {
                                    retFishNode = fishNode;
                                }
                            }
                        }
                    }
                }
            }
        });

        if (tempFish.length > 0) {
            let idx = math.randomRangeInt(0, tempFish.length);
            retFishNode = tempFish[idx];
        }

        return retFishNode;
    }
}

