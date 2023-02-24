

//标识大小图标
export enum GameItemType {
    Small = 0,
    Big = 1,
}


export enum GameItemCatogry {
    unKnow = 0,
    SlotsGame = 1,
    MiniGame = 2,
    GameBai = 3,
    Fight = 4,
}
export class GameItemConf {
    //游戏Id
    public GameId: number = 0;
    //游戏图标对应的prefab
    public Icon_Path: string = "";
    //游戏图标的类型
    public ItemType: GameItemType = GameItemType.Small;
    //游戏分类
    public ItemCatogry: GameItemCatogry = GameItemCatogry.unKnow;


    public BundleName: string = "";

    //最近参与的游戏的prefab
    public LastestPrefab: string = "";

    //广告图的path
    public AdImgPath: string = "";

    //Spine对应的路径
    public SpineImgPath: string = "";

    //游戏排序
    public Order: number = 0;

    public SubGameIdsArr: number[] = [];


    constructor(bundleName: string,
        gameId: number,
        path: string,
        lastestPath: string,
        adImgPath: string,
        itemType?: GameItemType,
        catogry?: GameItemCatogry,
        order?: number,
        subGameIdsArr?: number[], spinePath?: string) {
        this.BundleName = bundleName;
        this.GameId = gameId;
        this.Icon_Path = path;
        this.LastestPrefab = lastestPath;
        this.AdImgPath = adImgPath;
        this.SpineImgPath = spinePath;
        if (itemType != undefined && itemType != null) {
            this.ItemType = itemType;
        }
        if (catogry != undefined) {
            this.ItemCatogry = catogry;
        }
        if (order != undefined) {
            this.Order = order;
        }
        if (subGameIdsArr != undefined) {
            this.SubGameIdsArr = subGameIdsArr;
        } else {
            this.SubGameIdsArr = [gameId];
        }
    }
}

/**
 * 新增游戏的时候按照顺序插入
 */
export namespace GameConst {

    //捕鱼游戏 欢乐捕鱼
    export const GameId_FishHappy = 401;

    //tienlen 
    export const GameId_TienLen = 207;
    //tienlen娱乐版
    export const GameId_TienLenYL = 208;
    //经典打到底
    export const GameId_TienLenEx = 209;
    //娱乐打到底
    export const GameId_TienLenYLEx = 210;
    //tala
    export const GameId_Tala = 220;
    //经典比赛场
    export const GameId_TienlenMatch = 807;
    //打到底比赛场
    export const GameId_TienlenExMatch = 808;

    //德州扑克
    export const GameId_Dezhoupoker = 201;
    //水果机
    export const GameId_Fruits = 306;
    //多彩
    export const GameId_Richblessed = 307;

    //小火箭
    export const GameId_SmallRocket = 901;

    export const Game_All_Config: Map<number, GameItemConf> = new Map<number, GameItemConf>([

        [GameId_TienLen, new GameItemConf(
            "Tienlen",
            GameId_TienLen,
            "Lobby/Prefabs/gamecard/gamecard_tienlen",
            "Lobby/Prefabs/lastest/lastest_tienlen",
            "Lobby/Textures/lobby_img/lobby_banner_tienlen",
            //GameItemType.Big,   //该参数暂时没有用
            //GameItemCatogry.GameBai,   //该参数暂时没有用
            9,
            undefined,
            0,
            [GameId_TienLen, GameId_TienLenEx, GameId_TienLenYL, GameId_TienLenYLEx, GameId_TienlenMatch, GameId_TienlenExMatch],
            "Lobby/ani/banner/tienlen_banner"
        )],
        [GameId_Tala, new GameItemConf(
            "Tala",
            GameId_Tala,
            "Lobby/Prefabs/gamecard/gamecard_tala",
            "Lobby/Prefabs/lastest/lastest_tala",
            "Lobby/Textures/lobby_img/lobby_banner_tienlen",
            //GameItemType.Big,   //该参数暂时没有用
            //GameItemCatogry.GameBai,   //该参数暂时没有用
            10,
            undefined,
            0,
            [GameId_Tala],
            "Lobby/ani/banner/tienlen_banner"
        )],

        [GameId_FishHappy, new GameItemConf(
            "FishHappy",
            GameId_FishHappy,
            "Lobby/Prefabs/gamecard/gamecard_happyfish",
            "Lobby/Prefabs/lastest/lastest_fishhappy",
            "Lobby/Textures/lobby_img/lobby_banner_fishhappy",
            GameItemType.Big,           //该参数暂时没有用
            GameItemCatogry.GameBai,    //该参数暂时没有用
            11,
            [GameId_FishHappy],
            "Lobby/ani/banner/buyu_banner",
        )],

        [GameId_SmallRocket, new GameItemConf(
            "SmallRocket",
            GameId_SmallRocket,
            "Lobby/Prefabs/gamecard/gamecard_smallrocket",
            "Lobby/Prefabs/lastest/lastest_smallrocket",
            "Lobby/Textures/lobby_img/lobby_banner_fishhappy",
            GameItemType.Big,           //该参数暂时没有用
            GameItemCatogry.GameBai,    //该参数暂时没有用
            12,
            [GameId_SmallRocket],
            "Lobby/ani/banner/rocketescape_banner",
        )],

        [GameId_Fruits, new GameItemConf(
            "Fruits",
            GameId_Fruits,
            "Lobby/Prefabs/gamecard/gamecard_fruit",
            "Lobby/Prefabs/lastest/lastest_fruit",
            "Lobby/Textures/temp/lobby_shuiguo_banner",
            //GameItemType.Big,           //该参数暂时没有用
            //GameItemCatogry.GameBai,    //该参数暂时没有用
        )],
        [GameId_Richblessed, new GameItemConf(
            "Richblessed",
            GameId_Richblessed,
            "Lobby/Prefabs/gamecard/gamecard_richblessed",
            "Lobby/Prefabs/lastest/lastest_richblessed",
            "Lobby/Textures/temp/lobby_shuiguo_banner",
            //GameItemType.Big,           //该参数暂时没有用
            //GameItemCatogry.GameBai,    //该参数暂时没有用
        )]
    ]);

    export function isTraditonal(gameId: number): boolean {
        return gameId == GameConst.GameId_TienLen || gameId == GameConst.GameId_TienLenEx || gameId == GameConst.GameId_TienlenMatch || gameId == GameConst.GameId_TienlenExMatch;
    }

    export function isFightToEnd(gameId: number): boolean {
        return gameId == GameConst.GameId_TienLenEx || gameId == GameConst.GameId_TienLenYLEx || gameId == GameConst.GameId_TienlenExMatch;
    }

    export function isMatch(gameId: number): boolean {
        return gameId == GameConst.GameId_TienlenMatch || gameId == GameConst.GameId_TienlenExMatch;
    }

    export function getGameConfigByGameId(gameId: number): GameItemConf | null {
        if (Game_All_Config.has(gameId)) {
            return Game_All_Config.get(gameId)!;
        }
        return null;
    }

    export function getGameCardIDByGameId(gameId: number) {
        for (const [key, value] of Game_All_Config) {
            if (value.SubGameIdsArr.indexOf(gameId) != -1)
                return key;
        }
    }

}

//用户标记
//照搬的lua的
export namespace PlayerFlag {
    export const PlayerState_Online = 0; //在线标记
    export const PlayerState_SceneOwner = 2; //房主标记
    export const PlayerState_Choke = 3; //呛标记
    export const PlayerState_Ready = 1; //准备标记
    export const PlayerState_Ting = 4; //听牌标记
    export const PlayerState_NoisyBanker = 5; //闹庄标记
    export const PlayerState_WaitOp = 6; //等待操作标记
    export const PlayerState_Auto = 7; //托管状态
    export const PlayerState_Check = 8; //已看牌状态
    export const PlayerState_Fold = 9; //弃牌状态
    export const PlayerState_Lose = 10; //输状态
    export const PlayerState_Win = 11; //赢状态
    export const PlayerState_WaitNext = 12; //等待下一局，中途入场使用
    export const PlayerState_GameBreak = 13; // 不能继续游戏
    export const PlayerState_Leave = 14; //暂离状态
    export const PlayerState_Bankruptcy = 23; //破产标记
    export const PlayerState_AllFollow = 25; //跟到底标记
}


//NowLocation = 0 标识所有   1：大厅  2：Tienlen 3：捕鱼
export namespace BagNowLocation {
    //通用位置 默认是 0

    export const All_Location = 0;
    export const FishHappy_Location = 3;
    //竖版大厅
    export const Lobby_Location = 1;
    //Tienlen 子游戏内
    export const TienLen_location = 2;
}

// 0：表示所有   1：大厅  2：Tienlen 3：捕鱼
export namespace ShopNowLocation {
    export const All_Location = 0;
    export const FishHappy_Location = 3;
    export const Lobby_Location = 1;
    export const TienLen_location = 2;
}

export namespace MailNowLocation {
    export const FishHappy_Location = 8;
    export const Lobby_Location = 2;
    export const TienLen_location = 4;
}










