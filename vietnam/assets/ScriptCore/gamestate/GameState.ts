import { DB_GameFree } from "../config/db_gamefree";
import { EventMgr } from "../events/eventmgr";
import { LogicEvent, LogicEventData } from "../games/LogicEvent";
import { GameConst, GameItemCatogry, GameItemConf } from "../Lobby/Scripts/gameconfig/GameConst";
import gamehall from "../protocol/gamehall.js";
import login from "../protocol/login.js";


export class GameState {
    private static instance: GameState | null = null;

    public static getInstance(): GameState {
        if (this.instance == null) {
            this.instance = new GameState();
        }
        return this.instance;
    }


    public static destory() {
        if (this.instance) {
            this.instance.game = null;
            this.instance.gameConfRomote = null;
            this.instance.miniGameConfArr.clear();
            this.instance.miniGameConfRomoteArr.clear();
        }
        this.instance = null;
    }


    /**
     * let gameItemConfig = GameConst.getGameConfigByGameId(GameConst.GameId_Candy);
       let logicData = new LogicEventData(gameItemConfig!);
       EventMgr.getInstance().dispatchEvent(LogicEvent.EXIT_MINI_GAME,logicData);

       let itemGameConfig = GameConst.getGameConfigByGameId(GameConst.GameId_SlotIce);
        let data = new LogicEventData(itemGameConfig!);
        EventMgr.getInstance().dispatchEvent(LogicEvent.ENTER_HALL_FROM_GAMES,data)
     * 
     */
    public clearAllGameState() {
        //普通游戏
        if (this.gameConfRomote && this.gameConfRomote.GameCfg && this.gameConfRomote.GameCfg.length > 0) {
            let logicId = this.gameConfRomote.GameCfg[0].LogicId;
            let gameId = DB_GameFree.getInstance().pool.get(logicId!)!.GameId;
            let itemGameConfig = GameConst.getGameConfigByGameId(gameId);
            let data = new LogicEventData(itemGameConfig!);
            EventMgr.getInstance().dispatchEvent(LogicEvent.ENTER_HALL_FROM_GAMES, data)
        }

        //小游戏
        //this.miniGameConfRomoteArr.get(key) && this.miniGameConfRomoteArr.get(key)!.GameCfg && this.miniGameConfRomoteArr.get(key)!.GameCfg.length>0
        if (this.miniGameConfRomoteArr.size > 0) {
            for (let gameId of this.miniGameConfRomoteArr.keys()) {
                let gameItemConfig = GameConst.getGameConfigByGameId(gameId);
                let logicData = new LogicEventData(gameItemConfig!);
                EventMgr.getInstance().dispatchEvent(LogicEvent.EXIT_MINI_GAME, logicData);
            }
        }
    }


    //游戏的开关状态发生了变化
    public onGameStatusChg(msg: gamehall.gamehall.SCChangeGameStatus) {
        let list = msg.GameCfg;
        if (list && list.length > 0) {
            for (let k = 0; k < list.length; k++) {
                let itemConf = new login.login.GameConfig();
                itemConf.BaseScore = list[k].BaseScore!;
                itemConf.BetScore = list[k].BetScore!;
                itemConf.GameId = DB_GameFree.getInstance().pool.get(list[k].LogicId!)!.GameId;
                itemConf.LimitCoin = list[k].LimitCoin!;
                itemConf.LogicId = list[k].LogicId!;
                itemConf.LotteryCfg = list[k].LotteryCfg!;
                itemConf.LotteryCoin = list[k].LotteryCoin!;
                itemConf.MatchMode = list[k].MatchMode!;
                itemConf.MaxBetCoin = list[k].MaxBetCoin!;
                itemConf.MaxCoinLimit = list[k].MaxCoinLimit!;
                itemConf.OtherIntParams = list[k].OtherIntParams!;
                itemConf.State = list[k].Status!;
                if (this.gameConfRomote && this.gameConfRomote.GameCfg.length > 0) {
                    this.updateGameConfRometeByLogicId(itemConf.LogicId!, itemConf);
                    this.updateMiniGameRomoteConfByLogic(itemConf.LogicId!, itemConf);
                }
            }
        }
    }



    //游戏配置发生变化了
    public onGameConfigUpdate(msg: login.login.SCSyncGameFree) {
        let list = msg.Data;
        if (list && list.length > 0) {
            for (let k = 0; k < list.length; k++) {
                let itemConf = list[k];
                if (this.gameConfRomote && this.gameConfRomote.GameCfg.length > 0) {
                    this.updateGameConfRometeByLogicId(itemConf.LogicId!, itemConf);
                    this.updateMiniGameRomoteConfByLogic(itemConf.LogicId!, itemConf);
                }
            }
        }
    }



    private game: GameItemConf | null = null;
    private gameConfRomote: gamehall.gamehall.SCGetGameConfig | null = null;


    public getGameItemConf(): GameItemConf | null {
        return this.game;
    }

    public getGameConfRomote(): gamehall.gamehall.SCGetGameConfig | null {
        return this.gameConfRomote;
    }


    //更新游戏配置
    public updateGameConfRometeByLogicId(logicId: number, conf: login.login.IGameConfig) {
        //先判定开关，如果是开，则需要往数组中插入元素，如果是管，需要从数组中移除元素
        let idx = -1;
        let exist = false;
        for (let k = 0; k < this.gameConfRomote!.GameCfg.length; k++) {
            if (this.gameConfRomote!.GameCfg[k].LogicId! == logicId) {
                exist = true;
                if (!conf.State) {
                    //需要移除
                    idx = k;
                } else {
                    this.gameConfRomote!.GameCfg[k].BaseScore = conf.BaseScore;
                    this.gameConfRomote!.GameCfg[k].BetScore = conf.BetScore;
                    this.gameConfRomote!.GameCfg[k].LimitCoin = conf.LimitCoin;
                    this.gameConfRomote!.GameCfg[k].LotteryCfg = conf.LotteryCfg;
                    this.gameConfRomote!.GameCfg[k].LotteryCoin = conf.LotteryCoin;
                    this.gameConfRomote!.GameCfg[k].MatchMode = conf.MatchMode;
                    this.gameConfRomote!.GameCfg[k].MaxBetCoin = conf.MaxBetCoin;
                    this.gameConfRomote!.GameCfg[k].MaxCoinLimit = conf.MaxCoinLimit;
                    this.gameConfRomote!.GameCfg[k].OtherIntParams = conf.OtherIntParams;
                }
            }
        }
        if (idx != -1) {
            this.gameConfRomote?.GameCfg.splice(idx, 1);
        }
        if (exist == false && conf.State) {
            //重新开了一个场次 新场次打开
            let newConf = new gamehall.gamehall.GameConfig1();
            newConf.BaseScore = conf.BaseScore!;
            newConf.BetScore = conf.BetScore!;
            newConf.LimitCoin = conf.LimitCoin!;
            newConf.LogicId = conf.LogicId!;
            newConf.LotteryCfg = conf.LotteryCfg!;
            newConf.LotteryCoin = conf.LotteryCoin!;
            newConf.MatchMode = conf.MatchMode!;
            newConf.MaxBetCoin = conf.MaxBetCoin!;
            newConf.MaxCoinLimit = conf.MaxCoinLimit!;
            newConf.OtherIntParams = conf.OtherIntParams!;
            this.gameConfRomote!.GameCfg.push(newConf);
        }
    }

    //根据logicId获取对应的单条配置
    public getGameConfRomoteByLogicId(logicId: number): gamehall.gamehall.IGameConfig1 | null {
        if (this.gameConfRomote == null || this.gameConfRomote.GameCfg == null || this.gameConfRomote.GameCfg.length <= 0) {
            return null;
        }
        for (let k = 0; k < this.gameConfRomote.GameCfg.length; k++) {
            if (this.gameConfRomote.GameCfg[k].LogicId == logicId) {
                return this.gameConfRomote.GameCfg[k];
            }
        }
        return null;
    }


    /**
     * 
     * @param gic 当前要进入的游戏
     * @returns 
     */
    public enterNormalGame(gic: GameItemConf, gcr: gamehall.gamehall.SCGetGameConfig): boolean {
        if (this.game == null) {
            this.game = gic;
            this.gameConfRomote = gcr;
            return true;
        } else if (gic.GameId == this.game.GameId) {
            this.game = gic;
            this.gameConfRomote = gcr;
            console.warn(`已经在${gic.GameId}中,不需要重复进入`);
            return true;
        } else {
            this.game = gic;
            this.gameConfRomote = gcr;
            return true;
        }
        return false;
    }

    //退出游戏
    public exitNormalGame(gic: GameItemConf): boolean {
        if (this.game == null) {
            console.warn(`退出${gic.GameId}有问题,客户端判定当前就不在对应的游戏内`);
            return false;
        } else if (this.game.GameId != gic.GameId) {
            console.warn(`退出${gic.GameId}有问题,客户端判定,当前所在的游戏${this.game.GameId}不是要退出的游戏`);
            return false;
        } else {
            this.game = null;
            this.gameConfRomote = null;
            return true;
        }
    }

    private miniGameConfArr: Map<number, GameItemConf> = new Map<number, GameItemConf>();
    private miniGameConfRomoteArr: Map<number, gamehall.gamehall.SCGetGameConfig> = new Map<number, gamehall.gamehall.SCGetGameConfig>();


    public getAllMiniGameConfArr(): Map<number, GameItemConf> {
        return this.miniGameConfArr;
    }

    /**
     * 进入小游戏
     * @param gic 
     * @returns 
     */
    public enterMiniGame(gic: GameItemConf, grc: gamehall.gamehall.SCGetGameConfig): boolean {
        if (this.miniGameConfArr.has(gic.GameId)) {
            console.warn(`已经在${gic.GameId}中,重复进入了`);
            this.miniGameConfArr.set(gic.GameId, gic);
            this.miniGameConfRomoteArr.set(gic.GameId, grc);
            return true;
        } else {
            this.miniGameConfArr.set(gic.GameId, gic);
            this.miniGameConfRomoteArr.set(gic.GameId, grc);
            return true;
        }
    }


    /**
     * 退出小游戏,小游戏是同时在多个小游戏内的
     * @param gic 
     * @returns 
     */
    public exitMiniGame(gic: GameItemConf): boolean {
        if (!this.miniGameConfArr.has(gic.GameId)) {
            console.warn(`当前不在${gic.GameId}中`);
            this.miniGameConfRomoteArr.delete(gic.GameId);
            return true;
        } else {
            this.miniGameConfArr.delete(gic.GameId);
            this.miniGameConfRomoteArr.delete(gic.GameId);
            return true;
        }
    }

    //更新小游戏的配置 远程配置
    public updateMiniGameRomoteConfByLogic(logicId: number, conf: login.login.IGameConfig) {

        let key = conf.GameId!;
        if (this.miniGameConfRomoteArr.has(key)) {
            if (this.miniGameConfRomoteArr.get(key) && this.miniGameConfRomoteArr.get(key)!.GameCfg && this.miniGameConfRomoteArr.get(key)!.GameCfg.length > 0) {
                let idx = -1;
                for (let k = 0; k < this.miniGameConfRomoteArr.get(key)!.GameCfg.length; k++) {
                    if (this.miniGameConfRomoteArr.get(key)!.GameCfg[k].LogicId == logicId) {
                        if (!conf.State) {
                            idx = k;
                        } else {
                            this.miniGameConfRomoteArr.get(key)!.GameCfg[k].BaseScore = conf.BaseScore;
                            this.miniGameConfRomoteArr.get(key)!.GameCfg[k].BetScore = conf.BetScore;
                            this.miniGameConfRomoteArr.get(key)!.GameCfg[k].LimitCoin = conf.LimitCoin;
                            this.miniGameConfRomoteArr.get(key)!.GameCfg[k].LotteryCfg = conf.LotteryCfg;
                            this.miniGameConfRomoteArr.get(key)!.GameCfg[k].LotteryCoin = conf.LotteryCoin;
                            this.miniGameConfRomoteArr.get(key)!.GameCfg[k].MatchMode = conf.MatchMode;
                            this.miniGameConfRomoteArr.get(key)!.GameCfg[k].MaxBetCoin = conf.MaxBetCoin;
                            this.miniGameConfRomoteArr.get(key)!.GameCfg[k].MaxCoinLimit = conf.MaxCoinLimit;
                            this.miniGameConfRomoteArr.get(key)!.GameCfg[k].OtherIntParams = conf.OtherIntParams;
                        }

                    }
                }
                if (idx != -1) {
                    this.miniGameConfRomoteArr.get(key)!.GameCfg.slice(idx, 1);
                    //如果里边没有对应的数据 则直接移除掉key
                    if (this.miniGameConfRomoteArr.get(key)!.GameCfg.length <= 0) {
                        this.miniGameConfRomoteArr.delete(key);
                    }
                }
            }
        } else {
            let newConf = new gamehall.gamehall.GameConfig1();
            newConf.BaseScore = conf.BaseScore!;
            newConf.BetScore = conf.BetScore!;
            newConf.LimitCoin = conf.LimitCoin!;
            newConf.LogicId = conf.LogicId!;
            newConf.LotteryCfg = conf.LotteryCfg!;
            newConf.LotteryCoin = conf.LotteryCoin!;
            newConf.MatchMode = conf.MatchMode!;
            newConf.MaxBetCoin = conf.MaxBetCoin!;
            newConf.MaxCoinLimit = conf.MaxCoinLimit!;
            newConf.OtherIntParams = conf.OtherIntParams!;
            let item: gamehall.gamehall.SCGetGameConfig = new gamehall.gamehall.SCGetGameConfig();
            item.GameCfg.push(newConf);
            this.miniGameConfRomoteArr.set(key, item);
        }

    }

    //根据logicId获取对应游戏的单行配置
    public getMiniGameRomoteConfByLogicId(logicId: number): gamehall.gamehall.IGameConfig1 | null {
        for (let key of this.miniGameConfRomoteArr.keys()) {
            let configItem = this.miniGameConfRomoteArr.get(key);
            if (configItem && configItem.GameCfg != null && configItem.GameCfg.length > 0) {
                for (let k = 0; k < configItem.GameCfg.length; k++) {
                    if (configItem.GameCfg[k].LogicId == logicId) {
                        return configItem.GameCfg[k];
                    }
                }
            }
        }
        return null;
    }

    //根据游戏ID获取对应游戏的logicId
    public getMiniGameRomoteConfByGameId(gameId: number): gamehall.gamehall.IGameConfig1 | null {
        for (let key of this.miniGameConfRomoteArr.keys()) {
            let configItem = this.miniGameConfRomoteArr.get(key);
            if (configItem && configItem.GameCfg != null && configItem.GameCfg.length > 0) {
                for (let k = 0; k < configItem!.GameCfg.length; k++) {
                    let logicId = configItem.GameCfg[k].LogicId
                    let gId = DB_GameFree.getInstance().pool.get(logicId!)!.GameId;
                    if (gameId == gId) {
                        return configItem.GameCfg[k];
                    }
                }
            }
        }
        return null;
    }


    /**
     * 进入游戏
     * @param gic 
     * @param grc 
     * @returns 
     */
    public enterGame(gic: GameItemConf, grc: gamehall.gamehall.SCGetGameConfig): boolean {
        console.log("进入游戏==========");
        console.log(gic);
        console.log(grc);
        console.log("进入游戏==========");
        if (gic.ItemCatogry == GameItemCatogry.MiniGame) {
            return this.enterMiniGame(gic, grc);
        } else {
            return this.enterNormalGame(gic, grc);
        }


    }

    public exitGame(gic: GameItemConf): boolean {
        console.log("退出游戏xxxxxxxx");
        if (gic.ItemCatogry == GameItemCatogry.MiniGame) {
            return this.exitMiniGame(gic);
        } else {
            return this.exitNormalGame(gic);
        }
    }

    /**
     * 缓存断线重连的数据
     */
    private cacheReconnectRomoteConf: gamehall.gamehall.SCGetGameConfig | null = null;
    public doCacheReconnectRomoteConf(config: gamehall.gamehall.SCGetGameConfig) {
        this.cacheReconnectRomoteConf = config;
    }
    public getCacheReconnectRomoteConf(): gamehall.gamehall.SCGetGameConfig | null {
        return this.cacheReconnectRomoteConf;
    }
    //
    public clearCacheReconnectRemoteConf() {
        this.cacheReconnectRomoteConf = null;
    }


}