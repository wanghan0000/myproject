import { Node, random, randomRangeInt, UITransform, v2, v3, Vec2, Vec3 } from 'cc';
import { BaseRoomData } from '../../../ScriptCore/data/BaseRoomData';
import { UserData } from '../../../ScriptCore/data/UserData';
import { FishFish } from '../fishfish';
import { FishHappyPlayerData } from './fishhappyplayerdata';
import { FishGameEventName } from '../configs/fishgameeventname';
import { FishHappyConstants } from '../configs/fishhappyconstants';
import { DB_GameFree } from '../../../ScriptCore/config/db_gamefree';
import { DB_FishRate } from '../../data/db_fishrate';

export class FishHappyRoomData extends BaseRoomData {
    private static _instance: FishHappyRoomData | null = null;

    private _sceneType: number = 0;
    private _gameFreeId: number = 0;

    private _mapId: number = 1;                     // 地图编号
    private _scoreRate: number = 1;                 // 场景底分倍率
    private _unfoundfishs: Node[] = [];             // 场景中没有找到的鱼             
    private _isBomb: boolean = false;               // 是否为炸弹鱼、核弹
    private _isFishNet: boolean = false;            // 是否为鱼潮
    private _fishNum: number = 0;                   // 被炸死的鱼数量 包括炸弹鱼
    private _bombCoin: number = 0;                  // 爆炸获得的总金币
    private _isRobotCanFire: boolean = true;        // 机器人是否能开炮

    private _mySrvPos = 0;                           // 自己的服务器位置
    private _myClientPos = 0;                        // 自己的客户端位置
    private _playerMap: Map<number, FishHappyPlayerData> = new Map();

    public fishNodeMap: Map<number, Node> = new Map();  // 场景中的鱼
    public bulletArr: Node[] = [];                      // 场景中的子弹
    public fishAimedMap: Map<number, Node> = new Map();
    public fishIdAimedMap: Map<number, number> = new Map();
    public similarPos: Vec3 | null = null;
    public cannonCosts: number[] | undefined;

    public fishSortIdOfSelected: number[] = [];

    static get instance(): FishHappyRoomData {
        if (this._instance == null) {
            this._instance = new FishHappyRoomData();
        }
        return this._instance;
    }

    public static destoryInstance() {
        this._instance = null;
    }

    public getSceneType(): number {
        return this._sceneType;
    }

    public loadData (data: any) {
        super.loadData(data);
        this._sceneType = data.SceneType;
        this._gameFreeId = data.GameFreeId;
        this.getPowerCosts();
        let mySnId = UserData.getInstance().getSnId();
        if (data.Players && data.Players.length > 0) {
            for (let k = 0; k < data.Players.length; k++) {
                let playerData = new FishHappyPlayerData();
                playerData.loadData(data.Players[k]);
                this.addPlayer(playerData);
            }
        }

        this._playerMap.forEach((playerData: FishHappyPlayerData, srvPos) => {
            if (playerData != null) {
                if (playerData.getSnId() == mySnId) {
                    this._mySrvPos = srvPos;
                    this._myClientPos = this.getClientPosBySrvPos(this._mySrvPos);
                }
                playerData.clientPos = this.getClientPosBySrvPos(srvPos);
            }
        });
    }

    public get mySrvPos() {
        return this._mySrvPos;
    }

    public set mySrvPos(srvPos: number) {
        this._mySrvPos = srvPos;
    }

    public get myClientPos() {
        return this._myClientPos;
    }

    public set myClientPos(clientPos: number) {
        this._myClientPos = clientPos;
    }

    public getMyClientPos() {
        return this.getClientPosBySrvPos(this._mySrvPos);
    }

    public addPlayer(playerData: FishHappyPlayerData) {
        this._playerMap.set(playerData.srvPos, playerData);
    }

    public removePlayer(srvPos: number) {
        this._playerMap.delete(srvPos);
    }

    public get playerMap() {
        return this._playerMap;
    }

    public onPlayerEnter(data: any) {
        let playerData = new FishHappyPlayerData();
        playerData.loadData(data);

        if (data.IsRobot) {
            console.log("robot enter:", data.SnId);
            let playerData1 = this.getPlayerDataBySnId(data.AgentParam)
            if (playerData1 != null) {
                if (playerData1.agentParam == 0) {
                    playerData1.agentParam = data.SnId;
                }
                playerData1.addAgentRobot(data.SnId); //给现存的玩家bind一个机器人
            }
        } else { //进入的是真人
            //删除其他玩家身上重复绑定的机器人(rebalance机制)
            let robotSnids = playerData.getRobotSnIds();
            this._playerMap.forEach((otherPlyData: FishHappyPlayerData, srvPos) => {
                if (otherPlyData != null && !otherPlyData.isRobot) {
                    robotSnids.forEach((robotSnid: number, key: number) => {
                        otherPlyData.delAgentRobot(key);
                    });
                }
            });
        }

        playerData.clientPos = this.getClientPosBySrvPos(playerData.srvPos);
        this._playerMap.set(playerData.srvPos, playerData);
        // let clientPos = this.getClientPosBySrvPos(playerData.srvPos);
        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_PLAYER_ENTER, playerData.clientPos);
    }

    // 玩家离开后，瞄准清理好像还没做，改完测试一下
    public onPlayerLeave (snId: number) {
        let srvPos = this.getSrvPosBySnId(snId);

        //机器人离场，清除玩家身上绑定的id
        let playerData = this._playerMap.get(srvPos);
        let isRobot = playerData.isRobot;

        this._playerMap.delete(srvPos);
        let clientPos = this.getClientPosBySrvPos(srvPos);
        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_PLAYER_LEAVE, clientPos);

        if (isRobot) {
            this._playerMap.forEach((otherPlyData: FishHappyPlayerData, srvPos) => {
                if (otherPlyData != null && !otherPlyData.isRobot) {
                    otherPlyData.delAgentRobot(snId);
                }
            });
        }
    }

    public getClientPosBySrvPos(srvPos: number): number {
        let posArr;
        if (this.mySrvPos <= 1) {
            posArr = [0, 1, 2, 3];
        } else {
            posArr = [2, 3, 0, 1];
        }

        if (posArr != null) {
            return posArr[srvPos];
        }

        return -1;
    }

    public getSrvPosByClientPos(clientPos: number): number {
        let posArr;
        if (this.mySrvPos <= 1) {
            posArr = [0, 1, 2, 3];
        } else {
            posArr = [2, 3, 0, 1];
        }

        if (posArr != null) {
            for (let i = 0; i < posArr.length; i++) {
                if (posArr[i] == clientPos) {
                    return i;
                }
            }
        }

        return -1;
    }

    public getSrvPosBySnId(snId: number): number {
        let iter = this._playerMap.values();
        let r: IteratorResult<FishHappyPlayerData>;
        while (r = iter.next(), !r.done) {
            let playerData = r.value;
            if (playerData != null && playerData.getSnId() == snId) {
                return playerData.srvPos;
            }
        }

        return -1;
    }

    public getClientPosBySnId(snId: number): number {
        let srvPos = this.getSrvPosBySnId(snId);
        let clientPos = this.getClientPosBySrvPos(srvPos);
        return clientPos;
    }

    public getPlayerDataBySnId(snId: number): FishHappyPlayerData | undefined {
        let srvPos = this.getSrvPosBySnId(snId);
        return this.getPlayerDataBySrvPos(srvPos);
    }

    public getPlayerDataBySrvPos(srvPos: number): FishHappyPlayerData | undefined {
        let playerData = undefined;
        playerData = this._playerMap.get(srvPos);
        return playerData;
    }

    public getPlayerDataByClientPos(clientPos: number): FishHappyPlayerData | undefined {
        let srvPos = this.getSrvPosByClientPos(clientPos);
        return this.getPlayerDataBySrvPos(srvPos);
    }

    public isMySameSide (clientPos: number): boolean {
        // let clientPos = this.getClientPosBySrvPos(srvPos);
        return clientPos <= 2;
    }

    public isNeedFlip(): boolean {
        return this._mySrvPos > 1;
    }

    public getFreeModeId(): number {
        if (this._gameFreeId != 0) {
            return this._gameFreeId
        }
        return this.getGameId() * 10000000 + this.getRoomMode() * 10000 + this._sceneType
    }

    genFishId(policyIdx: number, id: any, idx: number) {
        return policyIdx * 1000000 + id * 100 + idx
    }

    public getPowerCosts() {
        let gameId = this.getFreeModeId();
        let DB_data = DB_GameFree.getInstance().pool.get(gameId);
        if (DB_data != null) {
            this.cannonCosts = DB_data.OtherIntParams;
        }
    }

    public saveAimedFish(clientPos: number, aimedFishNode: Node) {
        if (clientPos != null && aimedFishNode != null) {
            let curAimedFish = this.fishAimedMap.get(clientPos);
            if (curAimedFish != null) {
                let fishScript = curAimedFish.getComponent(FishFish);
                if (fishScript != null) {
                    fishScript.clearAimedData(clientPos);
                }
            }
            this.fishAimedMap.set(clientPos, aimedFishNode);
            let fishScript = aimedFishNode.getComponent(FishFish);
            if (fishScript != null) {
                fishScript.setAimedData(clientPos);
                FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_CREATE_AIMEDVIEW, aimedFishNode, clientPos);
            }
        }
    }

    public removeAimedFish(clientPos: number) {
        let aimedFishNode = this.fishAimedMap.get(clientPos);
        if (aimedFishNode != null) {
            let fishScript = aimedFishNode.getComponent(FishFish);
            if (fishScript != null) {
                fishScript.clearAimedData(clientPos);
                this.fishAimedMap.delete(clientPos);
                this.fishIdAimedMap.delete(clientPos);
                FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_CLEAR_AIMEDVIEW, clientPos);
            }
        }
    }

    public saveAimedFishId() {
        this.fishAimedMap.forEach((aimedFishNode: Node, clientPos) => {
            let fishScript = aimedFishNode.getComponent(FishFish);
            if (fishScript != null) {
                this.fishIdAimedMap.set(clientPos, fishScript.fishId);
            }
        });
    }

    public isAimedFish(clientPos: number): boolean {
        let aimedFishNode = this.fishAimedMap.get(clientPos);
        if (aimedFishNode != null) {
            return true;
        }
        return false;
    }

    public getAimedFish(clientPos: number): Node | undefined {
        let fishAimedNode = this.fishAimedMap.get(clientPos);
        if (fishAimedNode == null || !fishAimedNode.isValid) {
            let fishIdAimed = this.fishIdAimedMap.get(clientPos);
            if (fishIdAimed != null) {
                fishAimedNode = this.getFishNodeById(fishIdAimed);
            }
        }
        return fishAimedNode;
    }

    public clearAimedFishMap() {
        FishHappyRoomData.instance.fishAimedMap.clear();
    }

    public aimedAtPoint(position: Vec2): Node | null {
        let iter = this.fishNodeMap.values();
        let r: IteratorResult<Node>;
        while (r = iter.next(), !r.done) {
            let fishNode = r.value;
            let fishScript = fishNode.getComponent(FishFish);
            if (fishScript != null && !fishScript.centerOutOfScreen()) {
                if (fishScript.hitTestSimple(position)) {
                    return fishNode;
                }
            }
        }

        return null;
    }

    public autoAimedFish(): Node | null {
        let retFishNode = null;
        let iter = this.fishNodeMap.values();
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

    public autoAimedSelFish(): Node | null {
        let retFishNode = null;
        let iter = this.fishNodeMap.values();
        let r: IteratorResult<Node>;
        while (r = iter.next(), !r.done) {
            let fishNode = r.value;
            let fishScript = fishNode.getComponent(FishFish);
            if (fishScript != null && !fishScript.centerOutOfScreen() && !fishScript.isDie && this.isSelectedFishOfMyAim(fishScript)) {
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

        return retFishNode;
    }

    public isHaveSelectFishOfAutoFire (): boolean {
        if (this.fishSortIdOfSelected.length != 0) {
            return true;
        }
        return false
    }

    public isFishSelect (fishSortId: number): boolean {
        for (let id of this.fishSortIdOfSelected) {
            if (fishSortId == id) {
                return true;
            }
        }
        return false;
    }

    public isSelectedFishOfMyAim(fishScript: FishFish) {
        return this.isFishSelect(fishScript.fishData.Id);
    }

    //当打死一条事件鱼时，查找当前屏幕中剩余的同类事件鱼，因此这一类事件鱼的数量需要加1
    public getEventFishIds(eventid: number, excludeFishId: number): number[] {
        let fishids: number[] = [];

        let iter = this.fishNodeMap.values();
        let r: IteratorResult<Node>;
        while (r = iter.next(), !r.done) {
            let fishNode = r.value;
            let fishScript = fishNode.getComponent(FishFish);
            if (fishScript != null &&
                fishScript.policyData.Event != eventid &&
                !fishScript.outofScreen() &&
                !fishScript.isDie &&
                fishScript.fishId != excludeFishId) {
                fishids.push(fishScript.fishId);
            }
        }

        return fishids;
    }

    public filterFish(fishes: & any[], totalGold: number): any[] {
        fishes.sort((a: any, b: any) => {
            if (a.Gold < b.Gold) {
                return -1;
            } else if (a.Gold == b.Gold) {
                if (a.Dist < b.Dist) {
                    return -1;
                }
            }
            return 0;
        })

        let result: any[] = [];
        let n = 0;
        for (let i = 0; i < fishes.length; i++) {
            if (n < totalGold) {
                let data = fishes[i];
                result.push(data.FishId);
                n += data.Gold;
            }
        }
        return result;
    }

    public getBombKillFishIds(bombFishNode: Node): number[] {
        let fitFishes: any[] = [];
        if (bombFishNode == null) {
            return [];
        }
        let bombFishPos = bombFishNode.getPosition();
        let iter = this.fishNodeMap.values();
        let r: IteratorResult<Node>;
        while (r = iter.next(), !r.done) {
            let fishNode = r.value;
            let fishScript = fishNode.getComponent(FishFish);
            if (fishScript != null &&
                !fishScript.centerOutOfScreen() &&
                !fishScript.isDie) {
                let fishRate = DB_FishRate.getInstance().pool.get(fishScript.fishData.Id);
                if (fishRate != null) {
                    let score = fishRate.Gold;
                    if (score[0] <= 30) {
                        let pos = fishNode.getPosition();
                        let dis = Math.sqrt(Math.pow((pos.x - bombFishPos.x), 2) + Math.pow((pos.y - bombFishPos.y), 2));
                        if (dis <= FishHappyConstants.BOMB_RADIUS) {
                            fitFishes.push({ FishId: fishScript.fishId, Dist: dis, Gold: score[0] });
                        }
                    }
                }
            }
        }

        // 总价值100~120倍区间
        let temp = this.filterFish(fitFishes, randomRangeInt(0, 20) + 100);
        return temp;
    }

    public getChainKillFishIds(bombFishNode: Node): number[] {
        let fitFishes: any[] = [];
        if (bombFishNode == null) {
            return [];
        }
        let bombFishPos = bombFishNode.getPosition();
        let iter = this.fishNodeMap.values();
        let r: IteratorResult<Node>;
        while (r = iter.next(), !r.done) {
            let fishNode = r.value;
            let fishScript = fishNode.getComponent(FishFish);
            if (fishScript != null &&
                !fishScript.centerOutOfScreen() &&
                !fishScript.isDie) {
                let fishRate = DB_FishRate.getInstance().pool.get(fishScript.fishData.Id);
                if (fishRate != null) {
                    let score = fishRate.Gold;
                    if (score[0] <= 30) {
                        let pos = fishNode.getPosition();
                        let dis = Math.sqrt(Math.pow((pos.x - bombFishPos.x), 2) + Math.pow((pos.y - bombFishPos.y), 2));
                        if (dis <= FishHappyConstants.CHAIN_RADIUS) {
                            fitFishes.push({ FishId: fishScript.fishId, Dist: dis, Gold: score[0] });
                        }
                    }
                }
            }
        }

        // 总价值60~80倍区间
        let temp = this.filterFish(fitFishes, randomRangeInt(0, 20) + 60);
        return temp;
    }

    public getFishNodeById(fishId: number): Node | null {
        let iter = this.fishNodeMap.values();
        let r: IteratorResult<Node>;
        while (r = iter.next(), !r.done) {
            let fishNode = r.value;
            let fishScript = fishNode.getComponent(FishFish);
            if (fishScript != null && !fishScript.centerOutOfScreen() && !fishScript.isDie) {
                if (fishScript.fishId == fishId) {
                    return fishNode;
                }
            }
        }

        return null;
    }

    seeFish(): boolean {
        let iter = this.fishNodeMap.values();
        let r: IteratorResult<Node>;
        while (r = iter.next(), !r.done) {
            let fishNode = r.value;
            if (fishNode.isValid) {
                let fishScript = fishNode.getComponent(FishFish);
                if (fishScript != null && !fishScript.centerOutOfScreen() && !fishScript.isDie) {
                    return true;
                }
            }
        }
        return false;
    }
}