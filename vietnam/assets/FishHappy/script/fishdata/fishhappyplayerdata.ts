import { BasePlayerData } from "../../../ScriptCore/data/BasePlayerData";
import { FishHappyConstants } from "../configs/fishhappyconstants";
import { FishGameEventName } from "../configs/fishgameeventname";
import { FishHappyRoomData } from "./fishhappyroomdata";

export class FishHappyPlayerData extends BasePlayerData {
    private _clientPos = 0;
    private _costLv = 0;

    private _selVip: number = 0;				// 选择的vip炮等级
    private _srvPos: number = 0;				// 服务端位置
    private _isUseAutoFire: boolean = false;    // 是否使用自动发炮
    private _isUseAim: boolean = false;		    // 是否使用瞄准
    private _power: number = 0;				    // 当前每炮消耗
    private _isRobot: boolean = false;		    // 当前玩家是否是机器人 0正常玩家 1机器人
    private _agentParam: number = 0;			// isRobot=0时，代理的机器人id；isRobot=1时，代理发炮的真人id
    private _robotSnIds: Map<number, number> = new Map();

    public loadData (data: any) {
        super.loadData(data);
        this._selVip = data.SelVip;
        this._srvPos = data.Pos;
        this._isUseAutoFire = data.AutoFishing > 0 && true || false; 
        this._isUseAim = data.TargetSel > 0 && true || false;
        this._power = data.Power;
        this._isRobot = data.IsRobot;
        this._agentParam = data.AgentParam || 0;

        if (data.RobotSnIds != null && data.RobotSnIds.length > 0) {
            for (let robotSnId of data.RobotSnIds) {
                this._robotSnIds.set(robotSnId, robotSnId);
            }
        }

        if (FishHappyRoomData.instance.cannonCosts != null) {
            this._costLv = FishHappyRoomData.instance.cannonCosts.indexOf(this._power);
        }
    }

    public get costLv () {
        return this._costLv;
    }

    public set costLv (costLv: number) {
        this._costLv = costLv;
        if (FishHappyRoomData.instance.cannonCosts != null) {
            if (this._costLv == FishHappyRoomData.instance.cannonCosts.length) {
                this._costLv = 0;
            } else if (this._costLv < 0) {
                this._costLv = FishHappyRoomData.instance.cannonCosts.length - 1;
            }
        }
    }

    public get srvPos () {
        return this._srvPos;
    }

    public set srvPos (srvPos: number) {
        this._srvPos = srvPos;
    }

    public get clientPos () {
        return this._clientPos;
    }

    public set clientPos (clientPos: number) {
        this._clientPos = clientPos;
    }

    public get selVip () {
        return this._selVip;
    }

    public set selVip (vipNum: number) {
        this._selVip = vipNum
        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_CANNON_CHANGE, this.clientPos, vipNum);
    }

    public get isUseAim () {
        return this._isUseAim;
    }

    public set isUseAim (flag: boolean) {
        this._isUseAim = flag;
    }

    public get isUseAutoFire () {
        return this._isUseAutoFire;
    }

    public set isUseAutoFire (flag: boolean) {
        this._isUseAutoFire = flag;
    }

    public get agentParam () {
        return this._agentParam;
    }

    public set agentParam (id: number) {
        this._agentParam = id;
    }

    public get isRobot () {
        return this._isRobot;
    }

    public set isRobot (flag: boolean) {
        this._isRobot = flag;
    }

    public setCoin (coin: number) {
        super.setCoin(coin);
        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_PLAYER_SETCOIN, this._clientPos, this.coin);
    }

    public addCoin (coin:number) {
        this.coin += coin;
        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_PLAYER_SETCOIN, this._clientPos, this.coin);
    }

    public isMe () {
        return this.clientPos == FishHappyRoomData.instance.myClientPos;
    }

    public getCostPerBullet (): number {
        if (FishHappyRoomData.instance.cannonCosts != null && this._costLv < FishHappyRoomData.instance.cannonCosts.length) {
            return FishHappyRoomData.instance.cannonCosts[this._costLv];
        }
        return 0;
    }

    public getRobotSnIds(): Map<number, number>{
	    return this._robotSnIds;
    }

    public addAgentRobot(robotSnId: number) {
        this._robotSnIds.set(robotSnId, robotSnId);
    }

    public delAgentRobot(robotSnId: number) {
        this._robotSnIds.delete(robotSnId);
    }

    public isMyAgentRobot(robotSnId: number): boolean {
        return this._robotSnIds.has(robotSnId);
    }
}