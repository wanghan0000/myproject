

import { ProtoDataLoader } from "../../../config/ConfLoader";
import { DB_GameFree } from "../../../config/db_gamefree";
import gamehall from "../../../protocol/gamehall.js";
import login from "../../../protocol/login.js";
import server from "../../../protocol/server.js";
import { GameConst, GameItemConf } from "./GameConst";

/**
 * 服务器发送数据和本地的db_gamefree表进行合并，生成新的表
 * 配合本地GameConst中的配置。动态加载大厅入口数据
 */
export class GameData {
    private static instance: GameData | null = null;

    public static getInstance(): GameData {
        if (this.instance == null) {
            this.instance = new GameData();
            //加载db_gameFree表
            this.instance.loadDBGameFree();
        }
        return this.instance;
    }


    //游戏中需要显示的 数据
    private gameShowData: Map<number, GameItemConf> = new Map<number, GameItemConf>();

    private allGameInfo: Map<number, login.login.ILoginGameInfo> = new Map<number, login.login.ILoginGameInfo>();
    /**
     * 
     * @param gameInfo 服务器发送过来的gameInfo
     */
    public initShowData(gameInfo: login.login.ILoginGameInfo[]) {
        this.gameShowData.clear();
        this.allGameInfo.clear();
        for (let k = 0; k < gameInfo.length; k++) {
            this.allGameInfo.set(gameInfo[k].LogicId!, gameInfo[k]);
        }
        this.arrgeData();
    }

    //重新整理数据
    private arrgeData() {
        this.gameShowData.clear();
        for (let key of this.allGameInfo.keys()) {
            let gameId = this.allGameInfo.get(key)!.GameId;
            if (!this.gameShowData.has(gameId!)) {
                let gameItemConfig = GameConst.Game_All_Config.get(gameId!);
                if (gameItemConfig != null) {
                    this.gameShowData.set(gameId!, gameItemConfig);
                }
            }
        }
    }

    //判断当前gameId对应的游戏是否开启了
    public chkIsOpenByGameId(gameId: number): boolean {
        return this.gameShowData.has(gameId);
    }

    /**
     * 游戏开关发生变化，更新游戏变化
     * @param gameInfo 
     */
    public updateShowData(gameInfo: gamehall.gamehall.SCChangeGameStatus) {
        //处理打开的游戏
        console.log("打开关闭游戏");
        console.log(gameInfo);
        console.log(this.allGameInfo);

        let list = gameInfo.GameCfg;
        if (list && list.length > 0) {
            for (let k = 0; k < list.length; k++) {
                if (list[k].Status) {
                    //开游戏
                    if (!this.allGameInfo.has(list[k].LogicId!)) {
                        let gameFreeId = list[k].LogicId!;
                        let gameId = DB_GameFree.getInstance().pool.get(gameFreeId)!.GameId;
                        let gameInfo = new login.login.LoginGameInfo();
                        gameInfo.GameId = gameId;
                        gameInfo.LogicId = gameFreeId;
                        this.allGameInfo.set(gameFreeId, gameInfo);
                    }
                } else {
                    //关游戏
                    if (this.allGameInfo.has(list[k].LogicId!)) {
                        this.allGameInfo.delete(list[k].LogicId!);
                    }
                }
            }
        }
        this.arrgeData();
    }

    /**
     * 游戏配置更新的时候需要监听状态是否发生变化了
     * @returns 
     */
    public updateShowDataByConfChg(msg: login.login.SCSyncGameFree) {
        let list = msg.Data;
        if (list && list.length > 0) {
            for (let k = 0; k < list.length; k++) {
                if (list[k].State) {
                    //开游戏
                    if (!this.allGameInfo.has(list[k].LogicId!)) {
                        let gameFreeId = list[k].LogicId!;
                        let gameId = list[k].GameId!;
                        let gameInfo = new login.login.LoginGameInfo();
                        gameInfo.GameId = gameId;
                        gameInfo.LogicId = gameFreeId;
                        this.allGameInfo.set(gameFreeId, gameInfo);
                    }
                } else {
                    //关游戏
                    if (this.allGameInfo.has(list[k].LogicId!)) {
                        this.allGameInfo.delete(list[k].LogicId!);
                    }
                }
            }
        }
        this.arrgeData();
    }


    //获取大厅显示的游戏
    public getGameShowData(): Map<number, GameItemConf> {
        return this.gameShowData;
    }

    /**
     * 该方法不够用，还是需要放在大厅中进行排序
     * @returns 返回排序的内容
     */
    public getGameShowDataArrWithSort(): GameItemConf[] {
        let arr: GameItemConf[] = Array.from(this.gameShowData.values());
        arr.sort((a: GameItemConf, b: GameItemConf) => {
            if (a.Order < b.Order) {
                return -1;
            } else {
                return 1;
            }
        });
        return arr;
    }

    //加载dbGameFree表
    private loadDBGameFree() {
        let db_gamefree = new ProtoDataLoader(DB_GameFree.getInstance(), "Lobby/config/data/DB_GameFree");
        db_gamefree.load();
    }

    /**
     * 获取dbGameFree表中的单行数据
     */
    public getGameConfigByLogicId(logicId: number): server.server.IDB_GameFree | null {
        let data = DB_GameFree.getInstance().pool;
        let item = data.get(logicId);
        if (item != undefined) {
            return item;
        }
        return null;
    }

    //根据gameId来获取dbGameFree中的一条或者多条数据
    public getGameConfigByGameId(gameId: number): server.server.IDB_GameFree[] | null {
        let datas = DB_GameFree.getInstance().datas;
        let arr: server.server.IDB_GameFree[] = [];
        if (datas !== null && datas.Arr.length > 0) {
            for (let k = 0; k < datas.Arr.length; k++) {
                if (datas.Arr[k].GameId == gameId) {
                    arr.push(datas.Arr[k]);
                }
            }
        }
        if (arr.length == 0) {
            return null;
        }
        return arr;
    }


    public static destory() {
        this.instance!.gameShowData.clear();
        this.instance = null;
    }
}