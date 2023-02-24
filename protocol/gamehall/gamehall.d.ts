// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace gamehall. */
export namespace gamehall {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_RoomIsFull = 1019,
        OPRC_RoomHadClosed = 1053,
        OPRC_SceneServerMaintain = 1054,
        OPRC_CoinNotEnough = 1056,
        OPRC_CoinTooMore = 1058,
        OPRC_CoinSceneYouAreGaming = 1059,
        OPRC_NoFindDownTiceRoom = 1079,
        OPRC_ChangeRoomTooOften = 1080,
        OPRC_NoOtherDownTiceRoom = 1081,
        OPRC_OpYield = 1082,
        OPRC_RoomGameTimes = 1103,
        OPRC_CoinSceneEnterQueueSucc = 1105,
        OPRC_CoinSceneEnterQueueFail = 1106,
        OPRC_CoinSceneEnterQueueOverTime = 1107,
        OPRC_MustBindPromoter = 1113,
        OPRC_YourAreGamingCannotLeave = 1078
    }

    /** CoinSceneGamePacketID enum. */
    enum CoinSceneGamePacketID {
        PACKET_CoinSceneGame_ZERO = 0,
        PACKET_CS_COINSCENE_GETPLAYERNUM = 2320,
        PACKET_SC_COINSCENE_GETPLAYERNUM = 2321,
        PACKET_CS_COINSCENE_OP = 2322,
        PACKET_SC_COINSCENE_OP = 2323,
        PACKET_CS_COINSCENE_LISTROOM = 2324,
        PACKET_SC_COINSCENE_LISTROOM = 2325,
        PACKET_SC_COINSCENE_QUEUESTATE = 2326
    }

    /** Properties of a CSCoinSceneGetPlayerNum. */
    interface ICSCoinSceneGetPlayerNum {

        /** CSCoinSceneGetPlayerNum GameId */
        GameId?: (number|null);

        /** CSCoinSceneGetPlayerNum GameModel */
        GameModel?: (number|null);
    }

    /** Represents a CSCoinSceneGetPlayerNum. */
    class CSCoinSceneGetPlayerNum implements ICSCoinSceneGetPlayerNum {

        /**
         * Constructs a new CSCoinSceneGetPlayerNum.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSCoinSceneGetPlayerNum);

        /** CSCoinSceneGetPlayerNum GameId. */
        public GameId: number;

        /** CSCoinSceneGetPlayerNum GameModel. */
        public GameModel: number;

        /**
         * Encodes the specified CSCoinSceneGetPlayerNum message. Does not implicitly {@link gamehall.CSCoinSceneGetPlayerNum.verify|verify} messages.
         * @param m CSCoinSceneGetPlayerNum message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSCoinSceneGetPlayerNum, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCoinSceneGetPlayerNum message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCoinSceneGetPlayerNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSCoinSceneGetPlayerNum;
    }

    /** Properties of a SCCoinSceneGetPlayerNum. */
    interface ISCCoinSceneGetPlayerNum {

        /** SCCoinSceneGetPlayerNum Nums */
        Nums?: (number[]|null);
    }

    /** Represents a SCCoinSceneGetPlayerNum. */
    class SCCoinSceneGetPlayerNum implements ISCCoinSceneGetPlayerNum {

        /**
         * Constructs a new SCCoinSceneGetPlayerNum.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCCoinSceneGetPlayerNum);

        /** SCCoinSceneGetPlayerNum Nums. */
        public Nums: number[];

        /**
         * Encodes the specified SCCoinSceneGetPlayerNum message. Does not implicitly {@link gamehall.SCCoinSceneGetPlayerNum.verify|verify} messages.
         * @param m SCCoinSceneGetPlayerNum message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCCoinSceneGetPlayerNum, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCoinSceneGetPlayerNum message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCoinSceneGetPlayerNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCCoinSceneGetPlayerNum;
    }

    /** Properties of a CSCoinSceneOp. */
    interface ICSCoinSceneOp {

        /** CSCoinSceneOp Id */
        Id?: (number|null);

        /** CSCoinSceneOp OpType */
        OpType?: (number|null);

        /** CSCoinSceneOp OpParams */
        OpParams?: (number[]|null);

        /** CSCoinSceneOp Platform */
        Platform?: (string|null);
    }

    /** Represents a CSCoinSceneOp. */
    class CSCoinSceneOp implements ICSCoinSceneOp {

        /**
         * Constructs a new CSCoinSceneOp.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSCoinSceneOp);

        /** CSCoinSceneOp Id. */
        public Id: number;

        /** CSCoinSceneOp OpType. */
        public OpType: number;

        /** CSCoinSceneOp OpParams. */
        public OpParams: number[];

        /** CSCoinSceneOp Platform. */
        public Platform: string;

        /**
         * Encodes the specified CSCoinSceneOp message. Does not implicitly {@link gamehall.CSCoinSceneOp.verify|verify} messages.
         * @param m CSCoinSceneOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSCoinSceneOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCoinSceneOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCoinSceneOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSCoinSceneOp;
    }

    /** Properties of a SCCoinSceneOp. */
    interface ISCCoinSceneOp {

        /** SCCoinSceneOp OpCode */
        OpCode?: (gamehall.OpResultCode|null);

        /** SCCoinSceneOp Id */
        Id?: (number|null);

        /** SCCoinSceneOp OpType */
        OpType?: (number|null);

        /** SCCoinSceneOp OpParams */
        OpParams?: (number[]|null);
    }

    /** Represents a SCCoinSceneOp. */
    class SCCoinSceneOp implements ISCCoinSceneOp {

        /**
         * Constructs a new SCCoinSceneOp.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCCoinSceneOp);

        /** SCCoinSceneOp OpCode. */
        public OpCode: gamehall.OpResultCode;

        /** SCCoinSceneOp Id. */
        public Id: number;

        /** SCCoinSceneOp OpType. */
        public OpType: number;

        /** SCCoinSceneOp OpParams. */
        public OpParams: number[];

        /**
         * Encodes the specified SCCoinSceneOp message. Does not implicitly {@link gamehall.SCCoinSceneOp.verify|verify} messages.
         * @param m SCCoinSceneOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCCoinSceneOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCoinSceneOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCoinSceneOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCCoinSceneOp;
    }

    /** Properties of a CSCoinSceneListRoom. */
    interface ICSCoinSceneListRoom {

        /** CSCoinSceneListRoom Id */
        Id?: (number|null);
    }

    /** Represents a CSCoinSceneListRoom. */
    class CSCoinSceneListRoom implements ICSCoinSceneListRoom {

        /**
         * Constructs a new CSCoinSceneListRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSCoinSceneListRoom);

        /** CSCoinSceneListRoom Id. */
        public Id: number;

        /**
         * Encodes the specified CSCoinSceneListRoom message. Does not implicitly {@link gamehall.CSCoinSceneListRoom.verify|verify} messages.
         * @param m CSCoinSceneListRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSCoinSceneListRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCoinSceneListRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCoinSceneListRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSCoinSceneListRoom;
    }

    /** Properties of a CoinSceneInfo. */
    interface ICoinSceneInfo {

        /** CoinSceneInfo SceneId */
        SceneId?: (number|null);

        /** CoinSceneInfo PlayerNum */
        PlayerNum?: (number|null);
    }

    /** Represents a CoinSceneInfo. */
    class CoinSceneInfo implements ICoinSceneInfo {

        /**
         * Constructs a new CoinSceneInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICoinSceneInfo);

        /** CoinSceneInfo SceneId. */
        public SceneId: number;

        /** CoinSceneInfo PlayerNum. */
        public PlayerNum: number;

        /**
         * Encodes the specified CoinSceneInfo message. Does not implicitly {@link gamehall.CoinSceneInfo.verify|verify} messages.
         * @param m CoinSceneInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICoinSceneInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CoinSceneInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CoinSceneInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CoinSceneInfo;
    }

    /** Properties of a SCCoinSceneListRoom. */
    interface ISCCoinSceneListRoom {

        /** SCCoinSceneListRoom Id */
        Id?: (number|null);

        /** SCCoinSceneListRoom LimitCoin */
        LimitCoin?: (number|null);

        /** SCCoinSceneListRoom MaxCoinLimit */
        MaxCoinLimit?: (number|null);

        /** SCCoinSceneListRoom BaseScore */
        BaseScore?: (number|null);

        /** SCCoinSceneListRoom MaxScore */
        MaxScore?: (number|null);

        /** SCCoinSceneListRoom MaxPlayerNum */
        MaxPlayerNum?: (number|null);

        /** SCCoinSceneListRoom OtherIntParams */
        OtherIntParams?: (number[]|null);

        /** SCCoinSceneListRoom Datas */
        Datas?: (gamehall.ICoinSceneInfo[]|null);
    }

    /** Represents a SCCoinSceneListRoom. */
    class SCCoinSceneListRoom implements ISCCoinSceneListRoom {

        /**
         * Constructs a new SCCoinSceneListRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCCoinSceneListRoom);

        /** SCCoinSceneListRoom Id. */
        public Id: number;

        /** SCCoinSceneListRoom LimitCoin. */
        public LimitCoin: number;

        /** SCCoinSceneListRoom MaxCoinLimit. */
        public MaxCoinLimit: number;

        /** SCCoinSceneListRoom BaseScore. */
        public BaseScore: number;

        /** SCCoinSceneListRoom MaxScore. */
        public MaxScore: number;

        /** SCCoinSceneListRoom MaxPlayerNum. */
        public MaxPlayerNum: number;

        /** SCCoinSceneListRoom OtherIntParams. */
        public OtherIntParams: number[];

        /** SCCoinSceneListRoom Datas. */
        public Datas: gamehall.ICoinSceneInfo[];

        /**
         * Encodes the specified SCCoinSceneListRoom message. Does not implicitly {@link gamehall.SCCoinSceneListRoom.verify|verify} messages.
         * @param m SCCoinSceneListRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCCoinSceneListRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCoinSceneListRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCoinSceneListRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCCoinSceneListRoom;
    }

    /** Properties of a SCCoinSceneQueueState. */
    interface ISCCoinSceneQueueState {

        /** SCCoinSceneQueueState GameFreeId */
        GameFreeId?: (number|null);

        /** SCCoinSceneQueueState Count */
        Count?: (number|null);

        /** SCCoinSceneQueueState Ts */
        Ts?: (number|Long|null);
    }

    /** Represents a SCCoinSceneQueueState. */
    class SCCoinSceneQueueState implements ISCCoinSceneQueueState {

        /**
         * Constructs a new SCCoinSceneQueueState.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCCoinSceneQueueState);

        /** SCCoinSceneQueueState GameFreeId. */
        public GameFreeId: number;

        /** SCCoinSceneQueueState Count. */
        public Count: number;

        /** SCCoinSceneQueueState Ts. */
        public Ts: (number|Long);

        /**
         * Encodes the specified SCCoinSceneQueueState message. Does not implicitly {@link gamehall.SCCoinSceneQueueState.verify|verify} messages.
         * @param m SCCoinSceneQueueState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCCoinSceneQueueState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCoinSceneQueueState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCoinSceneQueueState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCCoinSceneQueueState;
    }

    /** OpResultCode_Game enum. */
    enum OpResultCode_Game {
        OPRC_Sucess_Game = 0,
        OPRC_Error_Game = 1,
        OPRC_RoomNotExist_Game = 1016,
        OPRC_GameNotExist_Game = 1017,
        OPRC_RoomIsFull_Game = 1019,
        OPRC_RoomHadExist_Game = 1020,
        OPRC_GameStarting_Game = 1022,
        OPRC_CannotWatchReasonInOther_Game = 1024,
        OPRC_MoneyNotEnough_Game = 1040,
        OPRC_CannotWatchReasonRoomNotStart_Game = 1042,
        OPRC_OnlyAllowClubMemberEnter_Game = 1043,
        OPRC_YourResVerIsLow_Game = 1044,
        OPRC_YourAppVerIsLow_Game = 1045,
        OPRC_ScenePosFull_Game = 1048,
        OPRC_SceneEnterForWatcher_Game = 1050,
        OPRC_RoomHadClosed_Game = 1053,
        OPRC_SceneServerMaintain_Game = 1054,
        OPRC_SameIpForbid_Game = 1055,
        OPRC_CoinNotEnough_Game = 1056,
        OPRC_CoinTooMore_Game = 1058,
        OPRC_OpYield_Game = 1082,
        OPRC_AllocRoomIdFailed_Game = 1097,
        OPRC_PrivateRoomCountLimit_Game = 1098,
        OPRC_LowerRice_ScenceMax_Game = 1075,
        OPRC_LowerRice_PlayerMax_Game = 1076,
        OPRC_LowerRice_PlayerDownMax_Game = 1077,
        OPRC_YourAreGamingCannotLeave_Game = 1078,
        OPRC_ThirdPltProcessing_Game = 1096,
        OPRC_RoomGameTimes_Game = 1103,
        OPRC_MustBindPromoter_Game = 1113,
        Oprc_Club_ClubIsClose_Game = 5023,
        OPRC_Dg_RegistErr_Game = 9000,
        OPRC_Dg_LoginErr_Game = 9001,
        OPRC_Dg_PlatErr_Game = 9002,
        OPRC_Dg_QuotaNotEnough_Game = 9003,
        OPRC_Thr_GameClose_Game = 9010
    }

    /** GameHallPacketID enum. */
    enum GameHallPacketID {
        PACKET_GameHall_ZERO = 0,
        PACKET_CS_JOINGAME = 2200,
        PACKET_SC_JOINGAME = 2201,
        PACKET_CS_CREATEROOM = 2202,
        PACKET_SC_CREATEROOM = 2203,
        PACKET_CS_ENTERROOM = 2204,
        PACKET_SC_ENTERROOM = 2205,
        PACKET_CS_RETURNROOM = 2206,
        PACKET_SC_RETURNROOM = 2207,
        PACKET_CS_AUDIENCE_ENTERROOM = 2208,
        PACKET_CS_ENTERGAME = 2209,
        PACKET_SC_ENTERGAME = 2210,
        PACKET_CS_QUITGAME = 2211,
        PACKET_SC_QUITGAME = 2212,
        PACKET_SC_CARDGAINWAY = 2213,
        PACKET_CS_TASKLIST = 2214,
        PACKET_SC_TASKLIST = 2215,
        PACKET_SC_TASKCHG = 2216,
        PACKET_SC_TACKCOMPLETE = 2217,
        PACKET_SC_TASKDEL = 2218,
        PACKET_CS_TACKDRAWPRIZE = 2219,
        PACKET_SC_TACKDRAWPRIZE = 2220,
        PACKET_CS_GETAGENTGAMEREC = 2223,
        PACKET_SC_GETAGENTGAMEREC = 2224,
        PACKET_CS_DELAGENTGAMEREC = 2225,
        PACKET_CS_SHOPBUY = 2226,
        PACKET_SC_SHOPBUY = 2227,
        PACKET_SC_LIMITLIST = 2228,
        PACKET_CS_GETLATELYGAMEIDS = 2229,
        PACKET_SC_GETLATELYGAMEIDS = 2230,
        PACKET_CS_GETGAMECONFIG = 2231,
        PACKET_SC_GETGAMECONFIG = 2232,
        PACKET_SC_CHANGEGAMESTATUS = 2233,
        PACKET_CS_ENTERHALL = 2240,
        PACKET_SC_ENTERHALL = 2241,
        PACKET_CS_LEAVEHALL = 2242,
        PACKET_SC_LEAVEHALL = 2243,
        PACKET_CS_HALLROOMLIST = 2244,
        PACKET_SC_HALLROOMLIST = 2245,
        PACKET_SC_ROOMPLAYERENTER = 2246,
        PACKET_SC_ROOMPLAYERLEAVE = 2247,
        PACKET_SC_ROOMSTATECHANG = 2248,
        PACKET_SC_HALLPLAYERNUM = 2249,
        PACKET_SC_BULLETIONINFO = 2250,
        PACKET_CS_BULLETIONINFO = 2251,
        PACKET_CS_CUSTOMERINFOLIST = 2252,
        PACKET_SC_CUSTOMERINFOLIST = 2253,
        PACKET_CS_ENTERDGGAME = 2254,
        PACKET_SC_ENTERDGGAME = 2255,
        PACKET_CS_LEAVEDGGAME = 2256,
        PACKET_SC_LEAVEDGGAME = 2257,
        PACKET_SC_PLAYERRECHARGEANSWER = 2258,
        PACKET_CS_THRIDACCOUNTSTATICSTIC = 2259,
        PACKET_SC_THRIDACCOUNTSTATICSTIC = 2260,
        PACKET_CS_THRIDACCOUNTTRANSFER = 2261,
        PACKET_SC_THRIDACCOUNTTRANSFER = 2262,
        PACKET_CS_ENTERTHRIDGAME = 2263,
        PACKET_SC_ENTERTHRIDGAME = 2264,
        PACKET_CS_LEAVETHRIDGAME = 2265,
        PACKET_SC_LEAVETHRIDGAME = 2266,
        PACKET_CS_THRIDGAMELIST = 2267,
        PACKET_SC_THRIDGAMELIST = 2268,
        PACKET_CS_THRIDGAMEBALANCEUPDATE = 2269,
        PACKET_SC_THRIDGAMEBALANCEUPDATE = 2270,
        PACKET_SC_THRIDGAMEBALANCEUPDATESTATE = 2271,
        PACKET_CS_CREATEPRIVATEROOM = 2272,
        PACKET_SC_CREATEPRIVATEROOM = 2273,
        PACKET_CS_GETPRIVATEROOMLIST = 2274,
        PACKET_SC_GETPRIVATEROOMLIST = 2275,
        PACKET_CS_GETPRIVATEROOMHISTORY = 2276,
        PACKET_SC_GETPRIVATEROOMHISTORY = 2277,
        PACKET_CS_DESTROYPRIVATEROOM = 2278,
        PACKET_SC_DESTROYPRIVATEROOM = 2279,
        PACKET_CS_QUERYROOMINFO = 2280,
        PACKET_SC_QUERYROOMINFO = 2281,
        PACKET_SC_GAMESUBLIST = 2283,
        PACKET_CS_GAMEOBSERVE = 2284,
        PACKET_SC_GAMESTATE = 2285,
        PACKET_SC_SYNCGAMEFREE = 2286,
        PACKET_SC_LOTTERYSYNC = 2287,
        PACKET_CS_LOTTERYLOG = 2288,
        PACKET_SC_LOTTERYLOG = 2289,
        PACKET_SC_LOTTERYBILL = 2290,
        PACKET_CS_UPLOADLOC = 2291,
        PACKET_SC_UPLOADLOC = 2292,
        PACKET_CS_AUDIENCESIT = 2293,
        PACKET_SC_AUDIENCESIT = 2294,
        PACKET_CS_COMNOTICE = 2295,
        PACKET_SC_COMNOTICE = 2296,
        PACKET_CS_LEAVEROOM = 8001,
        PACKET_SC_LEAVEROOM = 8002,
        PACKET_CS_DESTROYROOM = 8003,
        PACKET_SC_DESTROYROOM = 8004,
        PACKET_CS_FORCESTART = 8005,
        PACKET_SC_FORCESTART = 8006,
        PACKET_CS_AUDIENCE_LEAVEROOM = 8007,
        PACKET_CS_PLAYER_SWITCHFLAG = 8008
    }

    /** Properties of a CSEnterHall. */
    interface ICSEnterHall {

        /** CSEnterHall HallId */
        HallId?: (number|null);
    }

    /** Represents a CSEnterHall. */
    class CSEnterHall implements ICSEnterHall {

        /**
         * Constructs a new CSEnterHall.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSEnterHall);

        /** CSEnterHall HallId. */
        public HallId: number;

        /**
         * Encodes the specified CSEnterHall message. Does not implicitly {@link gamehall.CSEnterHall.verify|verify} messages.
         * @param m CSEnterHall message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSEnterHall, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSEnterHall message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSEnterHall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSEnterHall;
    }

    /** Properties of a SCEnterHall. */
    interface ISCEnterHall {

        /** SCEnterHall HallId */
        HallId?: (number|null);

        /** SCEnterHall OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);
    }

    /** Represents a SCEnterHall. */
    class SCEnterHall implements ISCEnterHall {

        /**
         * Constructs a new SCEnterHall.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCEnterHall);

        /** SCEnterHall HallId. */
        public HallId: number;

        /** SCEnterHall OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /**
         * Encodes the specified SCEnterHall message. Does not implicitly {@link gamehall.SCEnterHall.verify|verify} messages.
         * @param m SCEnterHall message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCEnterHall, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCEnterHall message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCEnterHall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCEnterHall;
    }

    /** Properties of a CSLeaveHall. */
    interface ICSLeaveHall {
    }

    /** Represents a CSLeaveHall. */
    class CSLeaveHall implements ICSLeaveHall {

        /**
         * Constructs a new CSLeaveHall.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSLeaveHall);

        /**
         * Encodes the specified CSLeaveHall message. Does not implicitly {@link gamehall.CSLeaveHall.verify|verify} messages.
         * @param m CSLeaveHall message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSLeaveHall, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSLeaveHall message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSLeaveHall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSLeaveHall;
    }

    /** Properties of a SCLeaveHall. */
    interface ISCLeaveHall {

        /** SCLeaveHall HallId */
        HallId?: (number|null);
    }

    /** Represents a SCLeaveHall. */
    class SCLeaveHall implements ISCLeaveHall {

        /**
         * Constructs a new SCLeaveHall.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCLeaveHall);

        /** SCLeaveHall HallId. */
        public HallId: number;

        /**
         * Encodes the specified SCLeaveHall message. Does not implicitly {@link gamehall.SCLeaveHall.verify|verify} messages.
         * @param m SCLeaveHall message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCLeaveHall, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLeaveHall message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLeaveHall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCLeaveHall;
    }

    /** Properties of a RoomPlayerInfo. */
    interface IRoomPlayerInfo {

        /** RoomPlayerInfo SnId */
        SnId?: (number|null);

        /** RoomPlayerInfo Head */
        Head?: (number|null);

        /** RoomPlayerInfo Sex */
        Sex?: (number|null);

        /** RoomPlayerInfo Name */
        Name?: (string|null);

        /** RoomPlayerInfo Pos */
        Pos?: (number|null);

        /** RoomPlayerInfo Flag */
        Flag?: (number|null);

        /** RoomPlayerInfo HeadOutLine */
        HeadOutLine?: (number|null);

        /** RoomPlayerInfo VIP */
        VIP?: (number|null);
    }

    /** Represents a RoomPlayerInfo. */
    class RoomPlayerInfo implements IRoomPlayerInfo {

        /**
         * Constructs a new RoomPlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IRoomPlayerInfo);

        /** RoomPlayerInfo SnId. */
        public SnId: number;

        /** RoomPlayerInfo Head. */
        public Head: number;

        /** RoomPlayerInfo Sex. */
        public Sex: number;

        /** RoomPlayerInfo Name. */
        public Name: string;

        /** RoomPlayerInfo Pos. */
        public Pos: number;

        /** RoomPlayerInfo Flag. */
        public Flag: number;

        /** RoomPlayerInfo HeadOutLine. */
        public HeadOutLine: number;

        /** RoomPlayerInfo VIP. */
        public VIP: number;

        /**
         * Encodes the specified RoomPlayerInfo message. Does not implicitly {@link gamehall.RoomPlayerInfo.verify|verify} messages.
         * @param m RoomPlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IRoomPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomPlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RoomPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.RoomPlayerInfo;
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo RoomId */
        RoomId?: (number|null);

        /** RoomInfo Starting */
        Starting?: (boolean|null);

        /** RoomInfo Players */
        Players?: (gamehall.IRoomPlayerInfo[]|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IRoomInfo);

        /** RoomInfo RoomId. */
        public RoomId: number;

        /** RoomInfo Starting. */
        public Starting: boolean;

        /** RoomInfo Players. */
        public Players: gamehall.IRoomPlayerInfo[];

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link gamehall.RoomInfo.verify|verify} messages.
         * @param m RoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.RoomInfo;
    }

    /** Properties of a CSHallRoomList. */
    interface ICSHallRoomList {

        /** CSHallRoomList HallId */
        HallId?: (number|null);
    }

    /** Represents a CSHallRoomList. */
    class CSHallRoomList implements ICSHallRoomList {

        /**
         * Constructs a new CSHallRoomList.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSHallRoomList);

        /** CSHallRoomList HallId. */
        public HallId: number;

        /**
         * Encodes the specified CSHallRoomList message. Does not implicitly {@link gamehall.CSHallRoomList.verify|verify} messages.
         * @param m CSHallRoomList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSHallRoomList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSHallRoomList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSHallRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSHallRoomList;
    }

    /** Properties of a HallInfo. */
    interface IHallInfo {

        /** HallInfo SceneType */
        SceneType?: (number|null);

        /** HallInfo PlayerNum */
        PlayerNum?: (number|null);
    }

    /** Represents a HallInfo. */
    class HallInfo implements IHallInfo {

        /**
         * Constructs a new HallInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IHallInfo);

        /** HallInfo SceneType. */
        public SceneType: number;

        /** HallInfo PlayerNum. */
        public PlayerNum: number;

        /**
         * Encodes the specified HallInfo message. Does not implicitly {@link gamehall.HallInfo.verify|verify} messages.
         * @param m HallInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IHallInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HallInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.HallInfo;
    }

    /** Properties of a HallPlayerNum. */
    interface IHallPlayerNum {

        /** HallPlayerNum HallData */
        HallData?: (gamehall.IHallInfo[]|null);
    }

    /** Represents a HallPlayerNum. */
    class HallPlayerNum implements IHallPlayerNum {

        /**
         * Constructs a new HallPlayerNum.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IHallPlayerNum);

        /** HallPlayerNum HallData. */
        public HallData: gamehall.IHallInfo[];

        /**
         * Encodes the specified HallPlayerNum message. Does not implicitly {@link gamehall.HallPlayerNum.verify|verify} messages.
         * @param m HallPlayerNum message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IHallPlayerNum, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HallPlayerNum message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HallPlayerNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.HallPlayerNum;
    }

    /** Properties of a SCHallRoomList. */
    interface ISCHallRoomList {

        /** SCHallRoomList HallId */
        HallId?: (number|null);

        /** SCHallRoomList GameId */
        GameId?: (number|null);

        /** SCHallRoomList GameMode */
        GameMode?: (number|null);

        /** SCHallRoomList IsAdd */
        IsAdd?: (boolean|null);

        /** SCHallRoomList Params */
        Params?: (number[]|null);

        /** SCHallRoomList Rooms */
        Rooms?: (gamehall.IRoomInfo[]|null);

        /** SCHallRoomList HallData */
        HallData?: (gamehall.IHallInfo[]|null);
    }

    /** Represents a SCHallRoomList. */
    class SCHallRoomList implements ISCHallRoomList {

        /**
         * Constructs a new SCHallRoomList.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCHallRoomList);

        /** SCHallRoomList HallId. */
        public HallId: number;

        /** SCHallRoomList GameId. */
        public GameId: number;

        /** SCHallRoomList GameMode. */
        public GameMode: number;

        /** SCHallRoomList IsAdd. */
        public IsAdd: boolean;

        /** SCHallRoomList Params. */
        public Params: number[];

        /** SCHallRoomList Rooms. */
        public Rooms: gamehall.IRoomInfo[];

        /** SCHallRoomList HallData. */
        public HallData: gamehall.IHallInfo[];

        /**
         * Encodes the specified SCHallRoomList message. Does not implicitly {@link gamehall.SCHallRoomList.verify|verify} messages.
         * @param m SCHallRoomList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCHallRoomList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCHallRoomList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCHallRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCHallRoomList;
    }

    /** Properties of a SCRoomPlayerEnter. */
    interface ISCRoomPlayerEnter {

        /** SCRoomPlayerEnter RoomId */
        RoomId?: (number|null);

        /** SCRoomPlayerEnter Player */
        Player?: (gamehall.IRoomPlayerInfo|null);
    }

    /** Represents a SCRoomPlayerEnter. */
    class SCRoomPlayerEnter implements ISCRoomPlayerEnter {

        /**
         * Constructs a new SCRoomPlayerEnter.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCRoomPlayerEnter);

        /** SCRoomPlayerEnter RoomId. */
        public RoomId: number;

        /** SCRoomPlayerEnter Player. */
        public Player?: (gamehall.IRoomPlayerInfo|null);

        /**
         * Encodes the specified SCRoomPlayerEnter message. Does not implicitly {@link gamehall.SCRoomPlayerEnter.verify|verify} messages.
         * @param m SCRoomPlayerEnter message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCRoomPlayerEnter, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRoomPlayerEnter message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRoomPlayerEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCRoomPlayerEnter;
    }

    /** Properties of a SCRoomPlayerLeave. */
    interface ISCRoomPlayerLeave {

        /** SCRoomPlayerLeave RoomId */
        RoomId?: (number|null);

        /** SCRoomPlayerLeave Pos */
        Pos?: (number|null);
    }

    /** Represents a SCRoomPlayerLeave. */
    class SCRoomPlayerLeave implements ISCRoomPlayerLeave {

        /**
         * Constructs a new SCRoomPlayerLeave.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCRoomPlayerLeave);

        /** SCRoomPlayerLeave RoomId. */
        public RoomId: number;

        /** SCRoomPlayerLeave Pos. */
        public Pos: number;

        /**
         * Encodes the specified SCRoomPlayerLeave message. Does not implicitly {@link gamehall.SCRoomPlayerLeave.verify|verify} messages.
         * @param m SCRoomPlayerLeave message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCRoomPlayerLeave, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRoomPlayerLeave message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRoomPlayerLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCRoomPlayerLeave;
    }

    /** Properties of a SCRoomStateChange. */
    interface ISCRoomStateChange {

        /** SCRoomStateChange RoomId */
        RoomId?: (number|null);

        /** SCRoomStateChange Starting */
        Starting?: (boolean|null);

        /** SCRoomStateChange State */
        State?: (number|null);
    }

    /** Represents a SCRoomStateChange. */
    class SCRoomStateChange implements ISCRoomStateChange {

        /**
         * Constructs a new SCRoomStateChange.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCRoomStateChange);

        /** SCRoomStateChange RoomId. */
        public RoomId: number;

        /** SCRoomStateChange Starting. */
        public Starting: boolean;

        /** SCRoomStateChange State. */
        public State: number;

        /**
         * Encodes the specified SCRoomStateChange message. Does not implicitly {@link gamehall.SCRoomStateChange.verify|verify} messages.
         * @param m SCRoomStateChange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCRoomStateChange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRoomStateChange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRoomStateChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCRoomStateChange;
    }

    /** Properties of a CSCreateRoom. */
    interface ICSCreateRoom {

        /** CSCreateRoom GameId */
        GameId?: (number|null);

        /** CSCreateRoom BaseCoin */
        BaseCoin?: (number|null);

        /** CSCreateRoom SceneMode */
        SceneMode?: (number|null);

        /** CSCreateRoom MaxPlayerNum */
        MaxPlayerNum?: (number|null);

        /** CSCreateRoom Params */
        Params?: (number[]|null);
    }

    /** Represents a CSCreateRoom. */
    class CSCreateRoom implements ICSCreateRoom {

        /**
         * Constructs a new CSCreateRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSCreateRoom);

        /** CSCreateRoom GameId. */
        public GameId: number;

        /** CSCreateRoom BaseCoin. */
        public BaseCoin: number;

        /** CSCreateRoom SceneMode. */
        public SceneMode: number;

        /** CSCreateRoom MaxPlayerNum. */
        public MaxPlayerNum: number;

        /** CSCreateRoom Params. */
        public Params: number[];

        /**
         * Encodes the specified CSCreateRoom message. Does not implicitly {@link gamehall.CSCreateRoom.verify|verify} messages.
         * @param m CSCreateRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSCreateRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCreateRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSCreateRoom;
    }

    /** Properties of a SCCreateRoom. */
    interface ISCCreateRoom {

        /** SCCreateRoom GameId */
        GameId?: (number|null);

        /** SCCreateRoom BaseCoin */
        BaseCoin?: (number|null);

        /** SCCreateRoom SceneMode */
        SceneMode?: (number|null);

        /** SCCreateRoom MaxPlayerNum */
        MaxPlayerNum?: (number|null);

        /** SCCreateRoom Params */
        Params?: (number[]|null);

        /** SCCreateRoom OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);
    }

    /** Represents a SCCreateRoom. */
    class SCCreateRoom implements ISCCreateRoom {

        /**
         * Constructs a new SCCreateRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCCreateRoom);

        /** SCCreateRoom GameId. */
        public GameId: number;

        /** SCCreateRoom BaseCoin. */
        public BaseCoin: number;

        /** SCCreateRoom SceneMode. */
        public SceneMode: number;

        /** SCCreateRoom MaxPlayerNum. */
        public MaxPlayerNum: number;

        /** SCCreateRoom Params. */
        public Params: number[];

        /** SCCreateRoom OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /**
         * Encodes the specified SCCreateRoom message. Does not implicitly {@link gamehall.SCCreateRoom.verify|verify} messages.
         * @param m SCCreateRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCCreateRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCreateRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCCreateRoom;
    }

    /** Properties of a CSDestroyRoom. */
    interface ICSDestroyRoom {
    }

    /** Represents a CSDestroyRoom. */
    class CSDestroyRoom implements ICSDestroyRoom {

        /**
         * Constructs a new CSDestroyRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSDestroyRoom);

        /**
         * Encodes the specified CSDestroyRoom message. Does not implicitly {@link gamehall.CSDestroyRoom.verify|verify} messages.
         * @param m CSDestroyRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSDestroyRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSDestroyRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSDestroyRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSDestroyRoom;
    }

    /** Properties of a SCDestroyRoom. */
    interface ISCDestroyRoom {

        /** SCDestroyRoom RoomId */
        RoomId?: (number|null);

        /** SCDestroyRoom OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);

        /** SCDestroyRoom IsForce */
        IsForce?: (number|null);
    }

    /** Represents a SCDestroyRoom. */
    class SCDestroyRoom implements ISCDestroyRoom {

        /**
         * Constructs a new SCDestroyRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCDestroyRoom);

        /** SCDestroyRoom RoomId. */
        public RoomId: number;

        /** SCDestroyRoom OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /** SCDestroyRoom IsForce. */
        public IsForce: number;

        /**
         * Encodes the specified SCDestroyRoom message. Does not implicitly {@link gamehall.SCDestroyRoom.verify|verify} messages.
         * @param m SCDestroyRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCDestroyRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCDestroyRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCDestroyRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCDestroyRoom;
    }

    /** Properties of a CSEnterRoom. */
    interface ICSEnterRoom {

        /** CSEnterRoom RoomId */
        RoomId?: (number|null);

        /** CSEnterRoom GameId */
        GameId?: (number|null);
    }

    /** Represents a CSEnterRoom. */
    class CSEnterRoom implements ICSEnterRoom {

        /**
         * Constructs a new CSEnterRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSEnterRoom);

        /** CSEnterRoom RoomId. */
        public RoomId: number;

        /** CSEnterRoom GameId. */
        public GameId: number;

        /**
         * Encodes the specified CSEnterRoom message. Does not implicitly {@link gamehall.CSEnterRoom.verify|verify} messages.
         * @param m CSEnterRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSEnterRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSEnterRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSEnterRoom;
    }

    /** Properties of a SCEnterRoom. */
    interface ISCEnterRoom {

        /** SCEnterRoom GameId */
        GameId?: (number|null);

        /** SCEnterRoom ModeType */
        ModeType?: (number|null);

        /** SCEnterRoom Params */
        Params?: (number[]|null);

        /** SCEnterRoom RoomId */
        RoomId?: (number|null);

        /** SCEnterRoom HallId */
        HallId?: (number|null);

        /** SCEnterRoom OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);

        /** SCEnterRoom ClubId */
        ClubId?: (number|null);
    }

    /** Represents a SCEnterRoom. */
    class SCEnterRoom implements ISCEnterRoom {

        /**
         * Constructs a new SCEnterRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCEnterRoom);

        /** SCEnterRoom GameId. */
        public GameId: number;

        /** SCEnterRoom ModeType. */
        public ModeType: number;

        /** SCEnterRoom Params. */
        public Params: number[];

        /** SCEnterRoom RoomId. */
        public RoomId: number;

        /** SCEnterRoom HallId. */
        public HallId: number;

        /** SCEnterRoom OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /** SCEnterRoom ClubId. */
        public ClubId: number;

        /**
         * Encodes the specified SCEnterRoom message. Does not implicitly {@link gamehall.SCEnterRoom.verify|verify} messages.
         * @param m SCEnterRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCEnterRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCEnterRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCEnterRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCEnterRoom;
    }

    /** Properties of a CSLeaveRoom. */
    interface ICSLeaveRoom {

        /** CSLeaveRoom Mode */
        Mode?: (number|null);
    }

    /** Represents a CSLeaveRoom. */
    class CSLeaveRoom implements ICSLeaveRoom {

        /**
         * Constructs a new CSLeaveRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSLeaveRoom);

        /** CSLeaveRoom Mode. */
        public Mode: number;

        /**
         * Encodes the specified CSLeaveRoom message. Does not implicitly {@link gamehall.CSLeaveRoom.verify|verify} messages.
         * @param m CSLeaveRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSLeaveRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSLeaveRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSLeaveRoom;
    }

    /** Properties of a SCLeaveRoom. */
    interface ISCLeaveRoom {

        /** SCLeaveRoom OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);

        /** SCLeaveRoom Reason */
        Reason?: (number|null);

        /** SCLeaveRoom RoomId */
        RoomId?: (number|null);

        /** SCLeaveRoom Mode */
        Mode?: (number|null);
    }

    /** Represents a SCLeaveRoom. */
    class SCLeaveRoom implements ISCLeaveRoom {

        /**
         * Constructs a new SCLeaveRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCLeaveRoom);

        /** SCLeaveRoom OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /** SCLeaveRoom Reason. */
        public Reason: number;

        /** SCLeaveRoom RoomId. */
        public RoomId: number;

        /** SCLeaveRoom Mode. */
        public Mode: number;

        /**
         * Encodes the specified SCLeaveRoom message. Does not implicitly {@link gamehall.SCLeaveRoom.verify|verify} messages.
         * @param m SCLeaveRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCLeaveRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLeaveRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLeaveRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCLeaveRoom;
    }

    /** Properties of a CSReturnRoom. */
    interface ICSReturnRoom {

        /** CSReturnRoom ApkVer */
        ApkVer?: (number|null);

        /** CSReturnRoom ResVer */
        ResVer?: (number|null);

        /** CSReturnRoom IsLoaded */
        IsLoaded?: (boolean|null);

        /** CSReturnRoom RoomId */
        RoomId?: (number|null);
    }

    /** Represents a CSReturnRoom. */
    class CSReturnRoom implements ICSReturnRoom {

        /**
         * Constructs a new CSReturnRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSReturnRoom);

        /** CSReturnRoom ApkVer. */
        public ApkVer: number;

        /** CSReturnRoom ResVer. */
        public ResVer: number;

        /** CSReturnRoom IsLoaded. */
        public IsLoaded: boolean;

        /** CSReturnRoom RoomId. */
        public RoomId: number;

        /**
         * Encodes the specified CSReturnRoom message. Does not implicitly {@link gamehall.CSReturnRoom.verify|verify} messages.
         * @param m CSReturnRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSReturnRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSReturnRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSReturnRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSReturnRoom;
    }

    /** Properties of a SCReturnRoom. */
    interface ISCReturnRoom {

        /** SCReturnRoom OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);

        /** SCReturnRoom RoomId */
        RoomId?: (number|null);

        /** SCReturnRoom GameId */
        GameId?: (number|null);

        /** SCReturnRoom ModeType */
        ModeType?: (number|null);

        /** SCReturnRoom Params */
        Params?: (number[]|null);

        /** SCReturnRoom HallId */
        HallId?: (number|null);

        /** SCReturnRoom MinApkVer */
        MinApkVer?: (number|null);

        /** SCReturnRoom LatestApkVer */
        LatestApkVer?: (number|null);

        /** SCReturnRoom MinResVer */
        MinResVer?: (number|null);

        /** SCReturnRoom LatestResVer */
        LatestResVer?: (number|null);

        /** SCReturnRoom IsLoaded */
        IsLoaded?: (boolean|null);

        /** SCReturnRoom ClubId */
        ClubId?: (number|null);
    }

    /** Represents a SCReturnRoom. */
    class SCReturnRoom implements ISCReturnRoom {

        /**
         * Constructs a new SCReturnRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCReturnRoom);

        /** SCReturnRoom OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /** SCReturnRoom RoomId. */
        public RoomId: number;

        /** SCReturnRoom GameId. */
        public GameId: number;

        /** SCReturnRoom ModeType. */
        public ModeType: number;

        /** SCReturnRoom Params. */
        public Params: number[];

        /** SCReturnRoom HallId. */
        public HallId: number;

        /** SCReturnRoom MinApkVer. */
        public MinApkVer: number;

        /** SCReturnRoom LatestApkVer. */
        public LatestApkVer: number;

        /** SCReturnRoom MinResVer. */
        public MinResVer: number;

        /** SCReturnRoom LatestResVer. */
        public LatestResVer: number;

        /** SCReturnRoom IsLoaded. */
        public IsLoaded: boolean;

        /** SCReturnRoom ClubId. */
        public ClubId: number;

        /**
         * Encodes the specified SCReturnRoom message. Does not implicitly {@link gamehall.SCReturnRoom.verify|verify} messages.
         * @param m SCReturnRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCReturnRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCReturnRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCReturnRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCReturnRoom;
    }

    /** Properties of a CSGetGameRec. */
    interface ICSGetGameRec {

        /** CSGetGameRec Ver */
        Ver?: (number|null);

        /** CSGetGameRec GameId */
        GameId?: (number|null);
    }

    /** Represents a CSGetGameRec. */
    class CSGetGameRec implements ICSGetGameRec {

        /**
         * Constructs a new CSGetGameRec.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSGetGameRec);

        /** CSGetGameRec Ver. */
        public Ver: number;

        /** CSGetGameRec GameId. */
        public GameId: number;

        /**
         * Encodes the specified CSGetGameRec message. Does not implicitly {@link gamehall.CSGetGameRec.verify|verify} messages.
         * @param m CSGetGameRec message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSGetGameRec, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetGameRec message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetGameRec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSGetGameRec;
    }

    /** Properties of a PlayerGameRec. */
    interface IPlayerGameRec {

        /** PlayerGameRec Id */
        Id?: (number|null);

        /** PlayerGameRec Name */
        Name?: (string|null);

        /** PlayerGameRec Head */
        Head?: (number|null);

        /** PlayerGameRec Coin */
        Coin?: (number|Long|null);

        /** PlayerGameRec Pos */
        Pos?: (number|null);

        /** PlayerGameRec OtherParams */
        OtherParams?: (number[]|null);
    }

    /** Represents a PlayerGameRec. */
    class PlayerGameRec implements IPlayerGameRec {

        /**
         * Constructs a new PlayerGameRec.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IPlayerGameRec);

        /** PlayerGameRec Id. */
        public Id: number;

        /** PlayerGameRec Name. */
        public Name: string;

        /** PlayerGameRec Head. */
        public Head: number;

        /** PlayerGameRec Coin. */
        public Coin: (number|Long);

        /** PlayerGameRec Pos. */
        public Pos: number;

        /** PlayerGameRec OtherParams. */
        public OtherParams: number[];

        /**
         * Encodes the specified PlayerGameRec message. Does not implicitly {@link gamehall.PlayerGameRec.verify|verify} messages.
         * @param m PlayerGameRec message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IPlayerGameRec, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerGameRec message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerGameRec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.PlayerGameRec;
    }

    /** Properties of a GameRec. */
    interface IGameRec {

        /** GameRec RecId */
        RecId?: (number|null);

        /** GameRec Datas */
        Datas?: (gamehall.IPlayerGameRec[]|null);

        /** GameRec Ts */
        Ts?: (number|Long|null);

        /** GameRec RoomId */
        RoomId?: (number|null);

        /** GameRec GameMode */
        GameMode?: (number|null);

        /** GameRec SceneType */
        SceneType?: (number|null);

        /** GameRec GameId */
        GameId?: (number|null);

        /** GameRec TotalOfGames */
        TotalOfGames?: (number|null);

        /** GameRec NumOfGames */
        NumOfGames?: (number|null);

        /** GameRec RoomFeeMode */
        RoomFeeMode?: (number|null);

        /** GameRec RoomCardCnt */
        RoomCardCnt?: (number|null);

        /** GameRec Params */
        Params?: (number[]|null);

        /** GameRec GameTime */
        GameTime?: (number|null);
    }

    /** Represents a GameRec. */
    class GameRec implements IGameRec {

        /**
         * Constructs a new GameRec.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IGameRec);

        /** GameRec RecId. */
        public RecId: number;

        /** GameRec Datas. */
        public Datas: gamehall.IPlayerGameRec[];

        /** GameRec Ts. */
        public Ts: (number|Long);

        /** GameRec RoomId. */
        public RoomId: number;

        /** GameRec GameMode. */
        public GameMode: number;

        /** GameRec SceneType. */
        public SceneType: number;

        /** GameRec GameId. */
        public GameId: number;

        /** GameRec TotalOfGames. */
        public TotalOfGames: number;

        /** GameRec NumOfGames. */
        public NumOfGames: number;

        /** GameRec RoomFeeMode. */
        public RoomFeeMode: number;

        /** GameRec RoomCardCnt. */
        public RoomCardCnt: number;

        /** GameRec Params. */
        public Params: number[];

        /** GameRec GameTime. */
        public GameTime: number;

        /**
         * Encodes the specified GameRec message. Does not implicitly {@link gamehall.GameRec.verify|verify} messages.
         * @param m GameRec message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IGameRec, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRec message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameRec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.GameRec;
    }

    /** Properties of a SCGetGameRec. */
    interface ISCGetGameRec {

        /** SCGetGameRec Recs */
        Recs?: (gamehall.IGameRec[]|null);

        /** SCGetGameRec Ver */
        Ver?: (number|null);

        /** SCGetGameRec GameId */
        GameId?: (number|null);
    }

    /** Represents a SCGetGameRec. */
    class SCGetGameRec implements ISCGetGameRec {

        /**
         * Constructs a new SCGetGameRec.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCGetGameRec);

        /** SCGetGameRec Recs. */
        public Recs: gamehall.IGameRec[];

        /** SCGetGameRec Ver. */
        public Ver: number;

        /** SCGetGameRec GameId. */
        public GameId: number;

        /**
         * Encodes the specified SCGetGameRec message. Does not implicitly {@link gamehall.SCGetGameRec.verify|verify} messages.
         * @param m SCGetGameRec message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCGetGameRec, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetGameRec message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetGameRec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCGetGameRec;
    }

    /** Properties of a CSShareSuc. */
    interface ICSShareSuc {

        /** CSShareSuc ShareType */
        ShareType?: (number|null);
    }

    /** Represents a CSShareSuc. */
    class CSShareSuc implements ICSShareSuc {

        /**
         * Constructs a new CSShareSuc.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSShareSuc);

        /** CSShareSuc ShareType. */
        public ShareType: number;

        /**
         * Encodes the specified CSShareSuc message. Does not implicitly {@link gamehall.CSShareSuc.verify|verify} messages.
         * @param m CSShareSuc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSShareSuc, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSShareSuc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSShareSuc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSShareSuc;
    }

    /** Properties of a SCShareSuc. */
    interface ISCShareSuc {

        /** SCShareSuc OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);
    }

    /** Represents a SCShareSuc. */
    class SCShareSuc implements ISCShareSuc {

        /**
         * Constructs a new SCShareSuc.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCShareSuc);

        /** SCShareSuc OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /**
         * Encodes the specified SCShareSuc message. Does not implicitly {@link gamehall.SCShareSuc.verify|verify} messages.
         * @param m SCShareSuc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCShareSuc, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCShareSuc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCShareSuc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCShareSuc;
    }

    /** Properties of a CSForceStart. */
    interface ICSForceStart {
    }

    /** Represents a CSForceStart. */
    class CSForceStart implements ICSForceStart {

        /**
         * Constructs a new CSForceStart.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSForceStart);

        /**
         * Encodes the specified CSForceStart message. Does not implicitly {@link gamehall.CSForceStart.verify|verify} messages.
         * @param m CSForceStart message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSForceStart, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSForceStart message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSForceStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSForceStart;
    }

    /** Properties of a SCForceStart. */
    interface ISCForceStart {

        /** SCForceStart OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);
    }

    /** Represents a SCForceStart. */
    class SCForceStart implements ISCForceStart {

        /**
         * Constructs a new SCForceStart.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCForceStart);

        /** SCForceStart OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /**
         * Encodes the specified SCForceStart message. Does not implicitly {@link gamehall.SCForceStart.verify|verify} messages.
         * @param m SCForceStart message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCForceStart, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCForceStart message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCForceStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCForceStart;
    }

    /** Properties of a CSInviteRobot. */
    interface ICSInviteRobot {

        /** CSInviteRobot GameId */
        GameId?: (number|null);

        /** CSInviteRobot IsAgent */
        IsAgent?: (boolean|null);
    }

    /** Represents a CSInviteRobot. */
    class CSInviteRobot implements ICSInviteRobot {

        /**
         * Constructs a new CSInviteRobot.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSInviteRobot);

        /** CSInviteRobot GameId. */
        public GameId: number;

        /** CSInviteRobot IsAgent. */
        public IsAgent: boolean;

        /**
         * Encodes the specified CSInviteRobot message. Does not implicitly {@link gamehall.CSInviteRobot.verify|verify} messages.
         * @param m CSInviteRobot message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSInviteRobot, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSInviteRobot message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSInviteRobot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSInviteRobot;
    }

    /** Properties of a CSPlayerSwithFlag. */
    interface ICSPlayerSwithFlag {

        /** CSPlayerSwithFlag Flag */
        Flag?: (number|null);

        /** CSPlayerSwithFlag Mark */
        Mark?: (number|null);
    }

    /** Represents a CSPlayerSwithFlag. */
    class CSPlayerSwithFlag implements ICSPlayerSwithFlag {

        /**
         * Constructs a new CSPlayerSwithFlag.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSPlayerSwithFlag);

        /** CSPlayerSwithFlag Flag. */
        public Flag: number;

        /** CSPlayerSwithFlag Mark. */
        public Mark: number;

        /**
         * Encodes the specified CSPlayerSwithFlag message. Does not implicitly {@link gamehall.CSPlayerSwithFlag.verify|verify} messages.
         * @param m CSPlayerSwithFlag message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSPlayerSwithFlag, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPlayerSwithFlag message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPlayerSwithFlag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSPlayerSwithFlag;
    }

    /** Properties of a CSShopBuy. */
    interface ICSShopBuy {

        /** CSShopBuy Id */
        Id?: (number|null);

        /** CSShopBuy Count */
        Count?: (number|null);
    }

    /** Represents a CSShopBuy. */
    class CSShopBuy implements ICSShopBuy {

        /**
         * Constructs a new CSShopBuy.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSShopBuy);

        /** CSShopBuy Id. */
        public Id: number;

        /** CSShopBuy Count. */
        public Count: number;

        /**
         * Encodes the specified CSShopBuy message. Does not implicitly {@link gamehall.CSShopBuy.verify|verify} messages.
         * @param m CSShopBuy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSShopBuy, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSShopBuy message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSShopBuy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSShopBuy;
    }

    /** Properties of a SCShopBuy. */
    interface ISCShopBuy {

        /** SCShopBuy Id */
        Id?: (number|null);

        /** SCShopBuy OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);

        /** SCShopBuy CostType */
        CostType?: (number|null);

        /** SCShopBuy CostNum */
        CostNum?: (number|null);

        /** SCShopBuy GainType */
        GainType?: (number|null);

        /** SCShopBuy GainNum */
        GainNum?: (number|null);
    }

    /** Represents a SCShopBuy. */
    class SCShopBuy implements ISCShopBuy {

        /**
         * Constructs a new SCShopBuy.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCShopBuy);

        /** SCShopBuy Id. */
        public Id: number;

        /** SCShopBuy OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /** SCShopBuy CostType. */
        public CostType: number;

        /** SCShopBuy CostNum. */
        public CostNum: number;

        /** SCShopBuy GainType. */
        public GainType: number;

        /** SCShopBuy GainNum. */
        public GainNum: number;

        /**
         * Encodes the specified SCShopBuy message. Does not implicitly {@link gamehall.SCShopBuy.verify|verify} messages.
         * @param m SCShopBuy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCShopBuy, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCShopBuy message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCShopBuy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCShopBuy;
    }

    /** Properties of a CSJoinGame. */
    interface ICSJoinGame {

        /** CSJoinGame MsgType */
        MsgType?: (number|null);

        /** CSJoinGame SnId */
        SnId?: (number|null);

        /** CSJoinGame Pos */
        Pos?: (number|null);

        /** CSJoinGame Agree */
        Agree?: (boolean|null);
    }

    /** Represents a CSJoinGame. */
    class CSJoinGame implements ICSJoinGame {

        /**
         * Constructs a new CSJoinGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSJoinGame);

        /** CSJoinGame MsgType. */
        public MsgType: number;

        /** CSJoinGame SnId. */
        public SnId: number;

        /** CSJoinGame Pos. */
        public Pos: number;

        /** CSJoinGame Agree. */
        public Agree: boolean;

        /**
         * Encodes the specified CSJoinGame message. Does not implicitly {@link gamehall.CSJoinGame.verify|verify} messages.
         * @param m CSJoinGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSJoinGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSJoinGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSJoinGame;
    }

    /** Properties of a SCJoinGame. */
    interface ISCJoinGame {

        /** SCJoinGame MsgType */
        MsgType?: (number|null);

        /** SCJoinGame Name */
        Name?: (string|null);

        /** SCJoinGame SnId */
        SnId?: (number|null);

        /** SCJoinGame OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);
    }

    /** Represents a SCJoinGame. */
    class SCJoinGame implements ISCJoinGame {

        /**
         * Constructs a new SCJoinGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCJoinGame);

        /** SCJoinGame MsgType. */
        public MsgType: number;

        /** SCJoinGame Name. */
        public Name: string;

        /** SCJoinGame SnId. */
        public SnId: number;

        /** SCJoinGame OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /**
         * Encodes the specified SCJoinGame message. Does not implicitly {@link gamehall.SCJoinGame.verify|verify} messages.
         * @param m SCJoinGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCJoinGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCJoinGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCJoinGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCJoinGame;
    }

    /** Properties of a CSEnterDgGame. */
    interface ICSEnterDgGame {

        /** CSEnterDgGame LoginType */
        LoginType?: (number|null);

        /** CSEnterDgGame DgGameId */
        DgGameId?: (number|null);

        /** CSEnterDgGame Domains */
        Domains?: (string|null);
    }

    /** Represents a CSEnterDgGame. */
    class CSEnterDgGame implements ICSEnterDgGame {

        /**
         * Constructs a new CSEnterDgGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSEnterDgGame);

        /** CSEnterDgGame LoginType. */
        public LoginType: number;

        /** CSEnterDgGame DgGameId. */
        public DgGameId: number;

        /** CSEnterDgGame Domains. */
        public Domains: string;

        /**
         * Encodes the specified CSEnterDgGame message. Does not implicitly {@link gamehall.CSEnterDgGame.verify|verify} messages.
         * @param m CSEnterDgGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSEnterDgGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSEnterDgGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSEnterDgGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSEnterDgGame;
    }

    /** Properties of a SCEnterDgGame. */
    interface ISCEnterDgGame {

        /** SCEnterDgGame OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);

        /** SCEnterDgGame LoginUrl */
        LoginUrl?: (string|null);

        /** SCEnterDgGame Token */
        Token?: (string|null);

        /** SCEnterDgGame DgGameId */
        DgGameId?: (number|null);

        /** SCEnterDgGame CodeId */
        CodeId?: (number|null);

        /** SCEnterDgGame Domains */
        Domains?: (string|null);

        /** SCEnterDgGame List */
        List?: (string[]|null);
    }

    /** Represents a SCEnterDgGame. */
    class SCEnterDgGame implements ISCEnterDgGame {

        /**
         * Constructs a new SCEnterDgGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCEnterDgGame);

        /** SCEnterDgGame OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /** SCEnterDgGame LoginUrl. */
        public LoginUrl: string;

        /** SCEnterDgGame Token. */
        public Token: string;

        /** SCEnterDgGame DgGameId. */
        public DgGameId: number;

        /** SCEnterDgGame CodeId. */
        public CodeId: number;

        /** SCEnterDgGame Domains. */
        public Domains: string;

        /** SCEnterDgGame List. */
        public List: string[];

        /**
         * Encodes the specified SCEnterDgGame message. Does not implicitly {@link gamehall.SCEnterDgGame.verify|verify} messages.
         * @param m SCEnterDgGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCEnterDgGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCEnterDgGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCEnterDgGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCEnterDgGame;
    }

    /** Properties of a CSLeaveDgGame. */
    interface ICSLeaveDgGame {
    }

    /** Represents a CSLeaveDgGame. */
    class CSLeaveDgGame implements ICSLeaveDgGame {

        /**
         * Constructs a new CSLeaveDgGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSLeaveDgGame);

        /**
         * Encodes the specified CSLeaveDgGame message. Does not implicitly {@link gamehall.CSLeaveDgGame.verify|verify} messages.
         * @param m CSLeaveDgGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSLeaveDgGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSLeaveDgGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSLeaveDgGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSLeaveDgGame;
    }

    /** Properties of a SCLeaveDgGame. */
    interface ISCLeaveDgGame {

        /** SCLeaveDgGame OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);
    }

    /** Represents a SCLeaveDgGame. */
    class SCLeaveDgGame implements ISCLeaveDgGame {

        /**
         * Constructs a new SCLeaveDgGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCLeaveDgGame);

        /** SCLeaveDgGame OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /**
         * Encodes the specified SCLeaveDgGame message. Does not implicitly {@link gamehall.SCLeaveDgGame.verify|verify} messages.
         * @param m SCLeaveDgGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCLeaveDgGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLeaveDgGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLeaveDgGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCLeaveDgGame;
    }

    /** Properties of a CSThridAccountStatistic. */
    interface ICSThridAccountStatistic {

        /** CSThridAccountStatistic ReqId */
        ReqId?: (number|null);
    }

    /** Represents a CSThridAccountStatistic. */
    class CSThridAccountStatistic implements ICSThridAccountStatistic {

        /**
         * Constructs a new CSThridAccountStatistic.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSThridAccountStatistic);

        /** CSThridAccountStatistic ReqId. */
        public ReqId: number;

        /**
         * Encodes the specified CSThridAccountStatistic message. Does not implicitly {@link gamehall.CSThridAccountStatistic.verify|verify} messages.
         * @param m CSThridAccountStatistic message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSThridAccountStatistic, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSThridAccountStatistic message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSThridAccountStatistic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSThridAccountStatistic;
    }

    /** Properties of a ThridAccount. */
    interface IThridAccount {

        /** ThridAccount ThridPlatformId */
        ThridPlatformId?: (number|null);

        /** ThridAccount Name */
        Name?: (string|null);

        /** ThridAccount Status */
        Status?: (number|null);

        /** ThridAccount Balance */
        Balance?: (number|Long|null);
    }

    /** Represents a ThridAccount. */
    class ThridAccount implements IThridAccount {

        /**
         * Constructs a new ThridAccount.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IThridAccount);

        /** ThridAccount ThridPlatformId. */
        public ThridPlatformId: number;

        /** ThridAccount Name. */
        public Name: string;

        /** ThridAccount Status. */
        public Status: number;

        /** ThridAccount Balance. */
        public Balance: (number|Long);

        /**
         * Encodes the specified ThridAccount message. Does not implicitly {@link gamehall.ThridAccount.verify|verify} messages.
         * @param m ThridAccount message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IThridAccount, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThridAccount message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ThridAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.ThridAccount;
    }

    /** Properties of a SCThridAccountStatistic. */
    interface ISCThridAccountStatistic {

        /** SCThridAccountStatistic ReqId */
        ReqId?: (number|null);

        /** SCThridAccountStatistic Accounts */
        Accounts?: (gamehall.IThridAccount[]|null);
    }

    /** Represents a SCThridAccountStatistic. */
    class SCThridAccountStatistic implements ISCThridAccountStatistic {

        /**
         * Constructs a new SCThridAccountStatistic.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCThridAccountStatistic);

        /** SCThridAccountStatistic ReqId. */
        public ReqId: number;

        /** SCThridAccountStatistic Accounts. */
        public Accounts: gamehall.IThridAccount[];

        /**
         * Encodes the specified SCThridAccountStatistic message. Does not implicitly {@link gamehall.SCThridAccountStatistic.verify|verify} messages.
         * @param m SCThridAccountStatistic message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCThridAccountStatistic, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCThridAccountStatistic message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCThridAccountStatistic
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCThridAccountStatistic;
    }

    /** Properties of a CSThridAccountTransfer. */
    interface ICSThridAccountTransfer {

        /** CSThridAccountTransfer FromId */
        FromId?: (number|null);

        /** CSThridAccountTransfer ToId */
        ToId?: (number|null);

        /** CSThridAccountTransfer Amount */
        Amount?: (number|Long|null);
    }

    /** Represents a CSThridAccountTransfer. */
    class CSThridAccountTransfer implements ICSThridAccountTransfer {

        /**
         * Constructs a new CSThridAccountTransfer.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSThridAccountTransfer);

        /** CSThridAccountTransfer FromId. */
        public FromId: number;

        /** CSThridAccountTransfer ToId. */
        public ToId: number;

        /** CSThridAccountTransfer Amount. */
        public Amount: (number|Long);

        /**
         * Encodes the specified CSThridAccountTransfer message. Does not implicitly {@link gamehall.CSThridAccountTransfer.verify|verify} messages.
         * @param m CSThridAccountTransfer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSThridAccountTransfer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSThridAccountTransfer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSThridAccountTransfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSThridAccountTransfer;
    }

    /** Properties of a SCThridAccountTransfer. */
    interface ISCThridAccountTransfer {

        /** SCThridAccountTransfer OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);

        /** SCThridAccountTransfer Accounts */
        Accounts?: (gamehall.IThridAccount[]|null);
    }

    /** Represents a SCThridAccountTransfer. */
    class SCThridAccountTransfer implements ISCThridAccountTransfer {

        /**
         * Constructs a new SCThridAccountTransfer.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCThridAccountTransfer);

        /** SCThridAccountTransfer OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /** SCThridAccountTransfer Accounts. */
        public Accounts: gamehall.IThridAccount[];

        /**
         * Encodes the specified SCThridAccountTransfer message. Does not implicitly {@link gamehall.SCThridAccountTransfer.verify|verify} messages.
         * @param m SCThridAccountTransfer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCThridAccountTransfer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCThridAccountTransfer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCThridAccountTransfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCThridAccountTransfer;
    }

    /** Properties of a CSEnterThridGame. */
    interface ICSEnterThridGame {

        /** CSEnterThridGame ThridGameId */
        ThridGameId?: (number|null);
    }

    /** Represents a CSEnterThridGame. */
    class CSEnterThridGame implements ICSEnterThridGame {

        /**
         * Constructs a new CSEnterThridGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSEnterThridGame);

        /** CSEnterThridGame ThridGameId. */
        public ThridGameId: number;

        /**
         * Encodes the specified CSEnterThridGame message. Does not implicitly {@link gamehall.CSEnterThridGame.verify|verify} messages.
         * @param m CSEnterThridGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSEnterThridGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSEnterThridGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSEnterThridGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSEnterThridGame;
    }

    /** Properties of a SCEnterThridGame. */
    interface ISCEnterThridGame {

        /** SCEnterThridGame OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);

        /** SCEnterThridGame EnterUrl */
        EnterUrl?: (string|null);

        /** SCEnterThridGame ScreenOrientationType */
        ScreenOrientationType?: (number|null);

        /** SCEnterThridGame ThridGameId */
        ThridGameId?: (number|null);
    }

    /** Represents a SCEnterThridGame. */
    class SCEnterThridGame implements ISCEnterThridGame {

        /**
         * Constructs a new SCEnterThridGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCEnterThridGame);

        /** SCEnterThridGame OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /** SCEnterThridGame EnterUrl. */
        public EnterUrl: string;

        /** SCEnterThridGame ScreenOrientationType. */
        public ScreenOrientationType: number;

        /** SCEnterThridGame ThridGameId. */
        public ThridGameId: number;

        /**
         * Encodes the specified SCEnterThridGame message. Does not implicitly {@link gamehall.SCEnterThridGame.verify|verify} messages.
         * @param m SCEnterThridGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCEnterThridGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCEnterThridGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCEnterThridGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCEnterThridGame;
    }

    /** Properties of a CSLeaveThridGame. */
    interface ICSLeaveThridGame {
    }

    /** Represents a CSLeaveThridGame. */
    class CSLeaveThridGame implements ICSLeaveThridGame {

        /**
         * Constructs a new CSLeaveThridGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSLeaveThridGame);

        /**
         * Encodes the specified CSLeaveThridGame message. Does not implicitly {@link gamehall.CSLeaveThridGame.verify|verify} messages.
         * @param m CSLeaveThridGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSLeaveThridGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSLeaveThridGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSLeaveThridGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSLeaveThridGame;
    }

    /** Properties of a SCLeaveThridGame. */
    interface ISCLeaveThridGame {

        /** SCLeaveThridGame OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);
    }

    /** Represents a SCLeaveThridGame. */
    class SCLeaveThridGame implements ISCLeaveThridGame {

        /**
         * Constructs a new SCLeaveThridGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCLeaveThridGame);

        /** SCLeaveThridGame OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /**
         * Encodes the specified SCLeaveThridGame message. Does not implicitly {@link gamehall.SCLeaveThridGame.verify|verify} messages.
         * @param m SCLeaveThridGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCLeaveThridGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLeaveThridGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLeaveThridGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCLeaveThridGame;
    }

    /** Properties of a CSThridGameList. */
    interface ICSThridGameList {
    }

    /** Represents a CSThridGameList. */
    class CSThridGameList implements ICSThridGameList {

        /**
         * Constructs a new CSThridGameList.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSThridGameList);

        /**
         * Encodes the specified CSThridGameList message. Does not implicitly {@link gamehall.CSThridGameList.verify|verify} messages.
         * @param m CSThridGameList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSThridGameList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSThridGameList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSThridGameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSThridGameList;
    }

    /** Properties of a ThridGameDatas. */
    interface IThridGameDatas {

        /** ThridGameDatas ThridGameId */
        ThridGameId?: (string|null);

        /** ThridGameDatas ThridGameName */
        ThridGameName?: (string|null);
    }

    /** Represents a ThridGameDatas. */
    class ThridGameDatas implements IThridGameDatas {

        /**
         * Constructs a new ThridGameDatas.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IThridGameDatas);

        /** ThridGameDatas ThridGameId. */
        public ThridGameId: string;

        /** ThridGameDatas ThridGameName. */
        public ThridGameName: string;

        /**
         * Encodes the specified ThridGameDatas message. Does not implicitly {@link gamehall.ThridGameDatas.verify|verify} messages.
         * @param m ThridGameDatas message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IThridGameDatas, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThridGameDatas message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ThridGameDatas
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.ThridGameDatas;
    }

    /** Properties of a ThridGamePlatforms. */
    interface IThridGamePlatforms {

        /** ThridGamePlatforms ThridPlatformId */
        ThridPlatformId?: (number|null);

        /** ThridGamePlatforms ThridPlatformName */
        ThridPlatformName?: (string|null);

        /** ThridGamePlatforms GameDatas */
        GameDatas?: (gamehall.IThridGameDatas[]|null);
    }

    /** Represents a ThridGamePlatforms. */
    class ThridGamePlatforms implements IThridGamePlatforms {

        /**
         * Constructs a new ThridGamePlatforms.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IThridGamePlatforms);

        /** ThridGamePlatforms ThridPlatformId. */
        public ThridPlatformId: number;

        /** ThridGamePlatforms ThridPlatformName. */
        public ThridPlatformName: string;

        /** ThridGamePlatforms GameDatas. */
        public GameDatas: gamehall.IThridGameDatas[];

        /**
         * Encodes the specified ThridGamePlatforms message. Does not implicitly {@link gamehall.ThridGamePlatforms.verify|verify} messages.
         * @param m ThridGamePlatforms message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IThridGamePlatforms, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThridGamePlatforms message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ThridGamePlatforms
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.ThridGamePlatforms;
    }

    /** Properties of a SCThridGameList. */
    interface ISCThridGameList {

        /** SCThridGameList OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);

        /** SCThridGameList GamePlatforms */
        GamePlatforms?: (gamehall.IThridGamePlatforms[]|null);
    }

    /** Represents a SCThridGameList. */
    class SCThridGameList implements ISCThridGameList {

        /**
         * Constructs a new SCThridGameList.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCThridGameList);

        /** SCThridGameList OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /** SCThridGameList GamePlatforms. */
        public GamePlatforms: gamehall.IThridGamePlatforms[];

        /**
         * Encodes the specified SCThridGameList message. Does not implicitly {@link gamehall.SCThridGameList.verify|verify} messages.
         * @param m SCThridGameList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCThridGameList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCThridGameList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCThridGameList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCThridGameList;
    }

    /** Properties of a CSThridGameBalanceUpdate. */
    interface ICSThridGameBalanceUpdate {
    }

    /** Represents a CSThridGameBalanceUpdate. */
    class CSThridGameBalanceUpdate implements ICSThridGameBalanceUpdate {

        /**
         * Constructs a new CSThridGameBalanceUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSThridGameBalanceUpdate);

        /**
         * Encodes the specified CSThridGameBalanceUpdate message. Does not implicitly {@link gamehall.CSThridGameBalanceUpdate.verify|verify} messages.
         * @param m CSThridGameBalanceUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSThridGameBalanceUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSThridGameBalanceUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSThridGameBalanceUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSThridGameBalanceUpdate;
    }

    /** Properties of a SCThridGameBalanceUpdate. */
    interface ISCThridGameBalanceUpdate {

        /** SCThridGameBalanceUpdate OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);

        /** SCThridGameBalanceUpdate Coin */
        Coin?: (number|Long|null);
    }

    /** Represents a SCThridGameBalanceUpdate. */
    class SCThridGameBalanceUpdate implements ISCThridGameBalanceUpdate {

        /**
         * Constructs a new SCThridGameBalanceUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCThridGameBalanceUpdate);

        /** SCThridGameBalanceUpdate OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /** SCThridGameBalanceUpdate Coin. */
        public Coin: (number|Long);

        /**
         * Encodes the specified SCThridGameBalanceUpdate message. Does not implicitly {@link gamehall.SCThridGameBalanceUpdate.verify|verify} messages.
         * @param m SCThridGameBalanceUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCThridGameBalanceUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCThridGameBalanceUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCThridGameBalanceUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCThridGameBalanceUpdate;
    }

    /** Properties of a SCThridGameBalanceUpdateState. */
    interface ISCThridGameBalanceUpdateState {

        /** SCThridGameBalanceUpdateState OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);
    }

    /** Represents a SCThridGameBalanceUpdateState. */
    class SCThridGameBalanceUpdateState implements ISCThridGameBalanceUpdateState {

        /**
         * Constructs a new SCThridGameBalanceUpdateState.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCThridGameBalanceUpdateState);

        /** SCThridGameBalanceUpdateState OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /**
         * Encodes the specified SCThridGameBalanceUpdateState message. Does not implicitly {@link gamehall.SCThridGameBalanceUpdateState.verify|verify} messages.
         * @param m SCThridGameBalanceUpdateState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCThridGameBalanceUpdateState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCThridGameBalanceUpdateState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCThridGameBalanceUpdateState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCThridGameBalanceUpdateState;
    }

    /** Properties of a CSCreatePrivateRoom. */
    interface ICSCreatePrivateRoom {

        /** CSCreatePrivateRoom GameFreeId */
        GameFreeId?: (number|null);

        /** CSCreatePrivateRoom Params */
        Params?: (number[]|null);
    }

    /** Represents a CSCreatePrivateRoom. */
    class CSCreatePrivateRoom implements ICSCreatePrivateRoom {

        /**
         * Constructs a new CSCreatePrivateRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSCreatePrivateRoom);

        /** CSCreatePrivateRoom GameFreeId. */
        public GameFreeId: number;

        /** CSCreatePrivateRoom Params. */
        public Params: number[];

        /**
         * Encodes the specified CSCreatePrivateRoom message. Does not implicitly {@link gamehall.CSCreatePrivateRoom.verify|verify} messages.
         * @param m CSCreatePrivateRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSCreatePrivateRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCreatePrivateRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCreatePrivateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSCreatePrivateRoom;
    }

    /** Properties of a SCCreatePrivateRoom. */
    interface ISCCreatePrivateRoom {

        /** SCCreatePrivateRoom GameFreeId */
        GameFreeId?: (number|null);

        /** SCCreatePrivateRoom Params */
        Params?: (number[]|null);

        /** SCCreatePrivateRoom RoomId */
        RoomId?: (number|null);

        /** SCCreatePrivateRoom OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);
    }

    /** Represents a SCCreatePrivateRoom. */
    class SCCreatePrivateRoom implements ISCCreatePrivateRoom {

        /**
         * Constructs a new SCCreatePrivateRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCCreatePrivateRoom);

        /** SCCreatePrivateRoom GameFreeId. */
        public GameFreeId: number;

        /** SCCreatePrivateRoom Params. */
        public Params: number[];

        /** SCCreatePrivateRoom RoomId. */
        public RoomId: number;

        /** SCCreatePrivateRoom OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /**
         * Encodes the specified SCCreatePrivateRoom message. Does not implicitly {@link gamehall.SCCreatePrivateRoom.verify|verify} messages.
         * @param m SCCreatePrivateRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCCreatePrivateRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCreatePrivateRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCreatePrivateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCCreatePrivateRoom;
    }

    /** Properties of a PrivateRoomInfo. */
    interface IPrivateRoomInfo {

        /** PrivateRoomInfo GameFreeId */
        GameFreeId?: (number|null);

        /** PrivateRoomInfo RoomId */
        RoomId?: (number|null);

        /** PrivateRoomInfo CurrRound */
        CurrRound?: (number|null);

        /** PrivateRoomInfo MaxRound */
        MaxRound?: (number|null);

        /** PrivateRoomInfo CurrNum */
        CurrNum?: (number|null);

        /** PrivateRoomInfo MaxPlayer */
        MaxPlayer?: (number|null);

        /** PrivateRoomInfo CreateTs */
        CreateTs?: (number|null);
    }

    /** Represents a PrivateRoomInfo. */
    class PrivateRoomInfo implements IPrivateRoomInfo {

        /**
         * Constructs a new PrivateRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IPrivateRoomInfo);

        /** PrivateRoomInfo GameFreeId. */
        public GameFreeId: number;

        /** PrivateRoomInfo RoomId. */
        public RoomId: number;

        /** PrivateRoomInfo CurrRound. */
        public CurrRound: number;

        /** PrivateRoomInfo MaxRound. */
        public MaxRound: number;

        /** PrivateRoomInfo CurrNum. */
        public CurrNum: number;

        /** PrivateRoomInfo MaxPlayer. */
        public MaxPlayer: number;

        /** PrivateRoomInfo CreateTs. */
        public CreateTs: number;

        /**
         * Encodes the specified PrivateRoomInfo message. Does not implicitly {@link gamehall.PrivateRoomInfo.verify|verify} messages.
         * @param m PrivateRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IPrivateRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PrivateRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.PrivateRoomInfo;
    }

    /** Properties of a CSGetPrivateRoomList. */
    interface ICSGetPrivateRoomList {
    }

    /** Represents a CSGetPrivateRoomList. */
    class CSGetPrivateRoomList implements ICSGetPrivateRoomList {

        /**
         * Constructs a new CSGetPrivateRoomList.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSGetPrivateRoomList);

        /**
         * Encodes the specified CSGetPrivateRoomList message. Does not implicitly {@link gamehall.CSGetPrivateRoomList.verify|verify} messages.
         * @param m CSGetPrivateRoomList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSGetPrivateRoomList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetPrivateRoomList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetPrivateRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSGetPrivateRoomList;
    }

    /** Properties of a SCGetPrivateRoomList. */
    interface ISCGetPrivateRoomList {

        /** SCGetPrivateRoomList Datas */
        Datas?: (gamehall.IPrivateRoomInfo[]|null);
    }

    /** Represents a SCGetPrivateRoomList. */
    class SCGetPrivateRoomList implements ISCGetPrivateRoomList {

        /**
         * Constructs a new SCGetPrivateRoomList.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCGetPrivateRoomList);

        /** SCGetPrivateRoomList Datas. */
        public Datas: gamehall.IPrivateRoomInfo[];

        /**
         * Encodes the specified SCGetPrivateRoomList message. Does not implicitly {@link gamehall.SCGetPrivateRoomList.verify|verify} messages.
         * @param m SCGetPrivateRoomList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCGetPrivateRoomList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetPrivateRoomList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetPrivateRoomList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCGetPrivateRoomList;
    }

    /** Properties of a CSGetPrivateRoomHistory. */
    interface ICSGetPrivateRoomHistory {

        /** CSGetPrivateRoomHistory QueryTime */
        QueryTime?: (number|null);
    }

    /** Represents a CSGetPrivateRoomHistory. */
    class CSGetPrivateRoomHistory implements ICSGetPrivateRoomHistory {

        /**
         * Constructs a new CSGetPrivateRoomHistory.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSGetPrivateRoomHistory);

        /** CSGetPrivateRoomHistory QueryTime. */
        public QueryTime: number;

        /**
         * Encodes the specified CSGetPrivateRoomHistory message. Does not implicitly {@link gamehall.CSGetPrivateRoomHistory.verify|verify} messages.
         * @param m CSGetPrivateRoomHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSGetPrivateRoomHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetPrivateRoomHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetPrivateRoomHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSGetPrivateRoomHistory;
    }

    /** Properties of a PrivateRoomHistory. */
    interface IPrivateRoomHistory {

        /** PrivateRoomHistory GameFreeId */
        GameFreeId?: (number|null);

        /** PrivateRoomHistory RoomId */
        RoomId?: (number|null);

        /** PrivateRoomHistory CreateTime */
        CreateTime?: (number|null);

        /** PrivateRoomHistory DestroyTime */
        DestroyTime?: (number|null);

        /** PrivateRoomHistory CreateFee */
        CreateFee?: (number|null);
    }

    /** Represents a PrivateRoomHistory. */
    class PrivateRoomHistory implements IPrivateRoomHistory {

        /**
         * Constructs a new PrivateRoomHistory.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IPrivateRoomHistory);

        /** PrivateRoomHistory GameFreeId. */
        public GameFreeId: number;

        /** PrivateRoomHistory RoomId. */
        public RoomId: number;

        /** PrivateRoomHistory CreateTime. */
        public CreateTime: number;

        /** PrivateRoomHistory DestroyTime. */
        public DestroyTime: number;

        /** PrivateRoomHistory CreateFee. */
        public CreateFee: number;

        /**
         * Encodes the specified PrivateRoomHistory message. Does not implicitly {@link gamehall.PrivateRoomHistory.verify|verify} messages.
         * @param m PrivateRoomHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IPrivateRoomHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateRoomHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PrivateRoomHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.PrivateRoomHistory;
    }

    /** Properties of a SCGetPrivateRoomHistory. */
    interface ISCGetPrivateRoomHistory {

        /** SCGetPrivateRoomHistory QueryTime */
        QueryTime?: (number|null);

        /** SCGetPrivateRoomHistory Datas */
        Datas?: (gamehall.IPrivateRoomHistory[]|null);
    }

    /** Represents a SCGetPrivateRoomHistory. */
    class SCGetPrivateRoomHistory implements ISCGetPrivateRoomHistory {

        /**
         * Constructs a new SCGetPrivateRoomHistory.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCGetPrivateRoomHistory);

        /** SCGetPrivateRoomHistory QueryTime. */
        public QueryTime: number;

        /** SCGetPrivateRoomHistory Datas. */
        public Datas: gamehall.IPrivateRoomHistory[];

        /**
         * Encodes the specified SCGetPrivateRoomHistory message. Does not implicitly {@link gamehall.SCGetPrivateRoomHistory.verify|verify} messages.
         * @param m SCGetPrivateRoomHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCGetPrivateRoomHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetPrivateRoomHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetPrivateRoomHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCGetPrivateRoomHistory;
    }

    /** Properties of a CSDestroyPrivateRoom. */
    interface ICSDestroyPrivateRoom {

        /** CSDestroyPrivateRoom RoomId */
        RoomId?: (number|null);
    }

    /** Represents a CSDestroyPrivateRoom. */
    class CSDestroyPrivateRoom implements ICSDestroyPrivateRoom {

        /**
         * Constructs a new CSDestroyPrivateRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSDestroyPrivateRoom);

        /** CSDestroyPrivateRoom RoomId. */
        public RoomId: number;

        /**
         * Encodes the specified CSDestroyPrivateRoom message. Does not implicitly {@link gamehall.CSDestroyPrivateRoom.verify|verify} messages.
         * @param m CSDestroyPrivateRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSDestroyPrivateRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSDestroyPrivateRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSDestroyPrivateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSDestroyPrivateRoom;
    }

    /** Properties of a SCDestroyPrivateRoom. */
    interface ISCDestroyPrivateRoom {

        /** SCDestroyPrivateRoom RoomId */
        RoomId?: (number|null);

        /** SCDestroyPrivateRoom OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);

        /** SCDestroyPrivateRoom State */
        State?: (number|null);
    }

    /** Represents a SCDestroyPrivateRoom. */
    class SCDestroyPrivateRoom implements ISCDestroyPrivateRoom {

        /**
         * Constructs a new SCDestroyPrivateRoom.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCDestroyPrivateRoom);

        /** SCDestroyPrivateRoom RoomId. */
        public RoomId: number;

        /** SCDestroyPrivateRoom OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /** SCDestroyPrivateRoom State. */
        public State: number;

        /**
         * Encodes the specified SCDestroyPrivateRoom message. Does not implicitly {@link gamehall.SCDestroyPrivateRoom.verify|verify} messages.
         * @param m SCDestroyPrivateRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCDestroyPrivateRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCDestroyPrivateRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCDestroyPrivateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCDestroyPrivateRoom;
    }

    /** Properties of a CSQueryRoomInfo. */
    interface ICSQueryRoomInfo {

        /** CSQueryRoomInfo GameIds */
        GameIds?: (number[]|null);

        /** CSQueryRoomInfo GameSite */
        GameSite?: (number|null);
    }

    /** Represents a CSQueryRoomInfo. */
    class CSQueryRoomInfo implements ICSQueryRoomInfo {

        /**
         * Constructs a new CSQueryRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSQueryRoomInfo);

        /** CSQueryRoomInfo GameIds. */
        public GameIds: number[];

        /** CSQueryRoomInfo GameSite. */
        public GameSite: number;

        /**
         * Encodes the specified CSQueryRoomInfo message. Does not implicitly {@link gamehall.CSQueryRoomInfo.verify|verify} messages.
         * @param m CSQueryRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSQueryRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSQueryRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSQueryRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSQueryRoomInfo;
    }

    /** Properties of a QRoomInfo. */
    interface IQRoomInfo {

        /** QRoomInfo GameFreeId */
        GameFreeId?: (number|null);

        /** QRoomInfo GameId */
        GameId?: (number|null);

        /** QRoomInfo RoomId */
        RoomId?: (number|null);

        /** QRoomInfo BaseCoin */
        BaseCoin?: (number|null);

        /** QRoomInfo LimitCoin */
        LimitCoin?: (number|null);

        /** QRoomInfo CurrNum */
        CurrNum?: (number|null);

        /** QRoomInfo MaxPlayer */
        MaxPlayer?: (number|null);

        /** QRoomInfo Creator */
        Creator?: (number|null);

        /** QRoomInfo CreateTs */
        CreateTs?: (number|null);
    }

    /** Represents a QRoomInfo. */
    class QRoomInfo implements IQRoomInfo {

        /**
         * Constructs a new QRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IQRoomInfo);

        /** QRoomInfo GameFreeId. */
        public GameFreeId: number;

        /** QRoomInfo GameId. */
        public GameId: number;

        /** QRoomInfo RoomId. */
        public RoomId: number;

        /** QRoomInfo BaseCoin. */
        public BaseCoin: number;

        /** QRoomInfo LimitCoin. */
        public LimitCoin: number;

        /** QRoomInfo CurrNum. */
        public CurrNum: number;

        /** QRoomInfo MaxPlayer. */
        public MaxPlayer: number;

        /** QRoomInfo Creator. */
        public Creator: number;

        /** QRoomInfo CreateTs. */
        public CreateTs: number;

        /**
         * Encodes the specified QRoomInfo message. Does not implicitly {@link gamehall.QRoomInfo.verify|verify} messages.
         * @param m QRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IQRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.QRoomInfo;
    }

    /** Properties of a SCQueryRoomInfo. */
    interface ISCQueryRoomInfo {

        /** SCQueryRoomInfo GameIds */
        GameIds?: (number[]|null);

        /** SCQueryRoomInfo GameSite */
        GameSite?: (number|null);

        /** SCQueryRoomInfo RoomInfo */
        RoomInfo?: (gamehall.IQRoomInfo[]|null);

        /** SCQueryRoomInfo OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Game|null);
    }

    /** Represents a SCQueryRoomInfo. */
    class SCQueryRoomInfo implements ISCQueryRoomInfo {

        /**
         * Constructs a new SCQueryRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCQueryRoomInfo);

        /** SCQueryRoomInfo GameIds. */
        public GameIds: number[];

        /** SCQueryRoomInfo GameSite. */
        public GameSite: number;

        /** SCQueryRoomInfo RoomInfo. */
        public RoomInfo: gamehall.IQRoomInfo[];

        /** SCQueryRoomInfo OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Game;

        /**
         * Encodes the specified SCQueryRoomInfo message. Does not implicitly {@link gamehall.SCQueryRoomInfo.verify|verify} messages.
         * @param m SCQueryRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCQueryRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCQueryRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCQueryRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCQueryRoomInfo;
    }

    /** Properties of a CSGameObserve. */
    interface ICSGameObserve {

        /** CSGameObserve GameId */
        GameId?: (number|null);

        /** CSGameObserve StartOrEnd */
        StartOrEnd?: (boolean|null);
    }

    /** Represents a CSGameObserve. */
    class CSGameObserve implements ICSGameObserve {

        /**
         * Constructs a new CSGameObserve.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSGameObserve);

        /** CSGameObserve GameId. */
        public GameId: number;

        /** CSGameObserve StartOrEnd. */
        public StartOrEnd: boolean;

        /**
         * Encodes the specified CSGameObserve message. Does not implicitly {@link gamehall.CSGameObserve.verify|verify} messages.
         * @param m CSGameObserve message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSGameObserve, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGameObserve message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGameObserve
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSGameObserve;
    }

    /** Properties of a GameSubRecord. */
    interface IGameSubRecord {

        /** GameSubRecord GameFreeId */
        GameFreeId?: (number|null);

        /** GameSubRecord LogCnt */
        LogCnt?: (number|null);

        /** GameSubRecord NewLog */
        NewLog?: (number|null);

        /** GameSubRecord TotleLog */
        TotleLog?: (number[]|null);
    }

    /** Represents a GameSubRecord. */
    class GameSubRecord implements IGameSubRecord {

        /**
         * Constructs a new GameSubRecord.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IGameSubRecord);

        /** GameSubRecord GameFreeId. */
        public GameFreeId: number;

        /** GameSubRecord LogCnt. */
        public LogCnt: number;

        /** GameSubRecord NewLog. */
        public NewLog: number;

        /** GameSubRecord TotleLog. */
        public TotleLog: number[];

        /**
         * Encodes the specified GameSubRecord message. Does not implicitly {@link gamehall.GameSubRecord.verify|verify} messages.
         * @param m GameSubRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IGameSubRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameSubRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameSubRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.GameSubRecord;
    }

    /** Properties of a SCGameSubList. */
    interface ISCGameSubList {

        /** SCGameSubList List */
        List?: (gamehall.IGameSubRecord[]|null);
    }

    /** Represents a SCGameSubList. */
    class SCGameSubList implements ISCGameSubList {

        /**
         * Constructs a new SCGameSubList.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCGameSubList);

        /** SCGameSubList List. */
        public List: gamehall.IGameSubRecord[];

        /**
         * Encodes the specified SCGameSubList message. Does not implicitly {@link gamehall.SCGameSubList.verify|verify} messages.
         * @param m SCGameSubList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCGameSubList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGameSubList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGameSubList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCGameSubList;
    }

    /** Properties of a GameState. */
    interface IGameState {

        /** GameState GameFreeId */
        GameFreeId?: (number|null);

        /** GameState Ts */
        Ts?: (number|Long|null);

        /** GameState Sec */
        Sec?: (number|null);
    }

    /** Represents a GameState. */
    class GameState implements IGameState {

        /**
         * Constructs a new GameState.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IGameState);

        /** GameState GameFreeId. */
        public GameFreeId: number;

        /** GameState Ts. */
        public Ts: (number|Long);

        /** GameState Sec. */
        public Sec: number;

        /**
         * Encodes the specified GameState message. Does not implicitly {@link gamehall.GameState.verify|verify} messages.
         * @param m GameState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IGameState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.GameState;
    }

    /** Properties of a SCGameState. */
    interface ISCGameState {

        /** SCGameState List */
        List?: (gamehall.IGameState[]|null);
    }

    /** Represents a SCGameState. */
    class SCGameState implements ISCGameState {

        /**
         * Constructs a new SCGameState.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCGameState);

        /** SCGameState List. */
        public List: gamehall.IGameState[];

        /**
         * Encodes the specified SCGameState message. Does not implicitly {@link gamehall.SCGameState.verify|verify} messages.
         * @param m SCGameState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCGameState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGameState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCGameState;
    }

    /** Properties of a LotteryData. */
    interface ILotteryData {

        /** LotteryData GameFreeId */
        GameFreeId?: (number|null);

        /** LotteryData Value */
        Value?: (number|Long|null);
    }

    /** Represents a LotteryData. */
    class LotteryData implements ILotteryData {

        /**
         * Constructs a new LotteryData.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ILotteryData);

        /** LotteryData GameFreeId. */
        public GameFreeId: number;

        /** LotteryData Value. */
        public Value: (number|Long);

        /**
         * Encodes the specified LotteryData message. Does not implicitly {@link gamehall.LotteryData.verify|verify} messages.
         * @param m LotteryData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ILotteryData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LotteryData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LotteryData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.LotteryData;
    }

    /** Properties of a SCLotterySync. */
    interface ISCLotterySync {

        /** SCLotterySync Datas */
        Datas?: (gamehall.ILotteryData[]|null);
    }

    /** Represents a SCLotterySync. */
    class SCLotterySync implements ISCLotterySync {

        /**
         * Constructs a new SCLotterySync.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCLotterySync);

        /** SCLotterySync Datas. */
        public Datas: gamehall.ILotteryData[];

        /**
         * Encodes the specified SCLotterySync message. Does not implicitly {@link gamehall.SCLotterySync.verify|verify} messages.
         * @param m SCLotterySync message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCLotterySync, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLotterySync message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLotterySync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCLotterySync;
    }

    /** Properties of a CSLotteryLog. */
    interface ICSLotteryLog {

        /** CSLotteryLog GameFreeId */
        GameFreeId?: (number|null);
    }

    /** Represents a CSLotteryLog. */
    class CSLotteryLog implements ICSLotteryLog {

        /**
         * Constructs a new CSLotteryLog.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSLotteryLog);

        /** CSLotteryLog GameFreeId. */
        public GameFreeId: number;

        /**
         * Encodes the specified CSLotteryLog message. Does not implicitly {@link gamehall.CSLotteryLog.verify|verify} messages.
         * @param m CSLotteryLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSLotteryLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSLotteryLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSLotteryLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSLotteryLog;
    }

    /** Properties of a LotteryLog. */
    interface ILotteryLog {

        /** LotteryLog Time */
        Time?: (number|null);

        /** LotteryLog NickName */
        NickName?: (string|null);

        /** LotteryLog Card */
        Card?: (number[]|null);

        /** LotteryLog Kind */
        Kind?: (number|null);

        /** LotteryLog Coin */
        Coin?: (number|null);
    }

    /** Represents a LotteryLog. */
    class LotteryLog implements ILotteryLog {

        /**
         * Constructs a new LotteryLog.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ILotteryLog);

        /** LotteryLog Time. */
        public Time: number;

        /** LotteryLog NickName. */
        public NickName: string;

        /** LotteryLog Card. */
        public Card: number[];

        /** LotteryLog Kind. */
        public Kind: number;

        /** LotteryLog Coin. */
        public Coin: number;

        /**
         * Encodes the specified LotteryLog message. Does not implicitly {@link gamehall.LotteryLog.verify|verify} messages.
         * @param m LotteryLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ILotteryLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LotteryLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LotteryLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.LotteryLog;
    }

    /** Properties of a SCLotteryLog. */
    interface ISCLotteryLog {

        /** SCLotteryLog GameFreeId */
        GameFreeId?: (number|null);

        /** SCLotteryLog Logs */
        Logs?: (gamehall.ILotteryLog[]|null);
    }

    /** Represents a SCLotteryLog. */
    class SCLotteryLog implements ISCLotteryLog {

        /**
         * Constructs a new SCLotteryLog.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCLotteryLog);

        /** SCLotteryLog GameFreeId. */
        public GameFreeId: number;

        /** SCLotteryLog Logs. */
        public Logs: gamehall.ILotteryLog[];

        /**
         * Encodes the specified SCLotteryLog message. Does not implicitly {@link gamehall.SCLotteryLog.verify|verify} messages.
         * @param m SCLotteryLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCLotteryLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLotteryLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLotteryLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCLotteryLog;
    }

    /** Properties of a SCLotteryBill. */
    interface ISCLotteryBill {

        /** SCLotteryBill GameFreeId */
        GameFreeId?: (number|null);

        /** SCLotteryBill SnId */
        SnId?: (number|null);

        /** SCLotteryBill Name */
        Name?: (string|null);

        /** SCLotteryBill Kind */
        Kind?: (number|null);

        /** SCLotteryBill Card */
        Card?: (number[]|null);

        /** SCLotteryBill Value */
        Value?: (number|Long|null);
    }

    /** Represents a SCLotteryBill. */
    class SCLotteryBill implements ISCLotteryBill {

        /**
         * Constructs a new SCLotteryBill.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCLotteryBill);

        /** SCLotteryBill GameFreeId. */
        public GameFreeId: number;

        /** SCLotteryBill SnId. */
        public SnId: number;

        /** SCLotteryBill Name. */
        public Name: string;

        /** SCLotteryBill Kind. */
        public Kind: number;

        /** SCLotteryBill Card. */
        public Card: number[];

        /** SCLotteryBill Value. */
        public Value: (number|Long);

        /**
         * Encodes the specified SCLotteryBill message. Does not implicitly {@link gamehall.SCLotteryBill.verify|verify} messages.
         * @param m SCLotteryBill message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCLotteryBill, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLotteryBill message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLotteryBill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCLotteryBill;
    }

    /** Properties of a GameConfig1. */
    interface IGameConfig1 {

        /** GameConfig1 LogicId */
        LogicId?: (number|null);

        /** GameConfig1 LimitCoin */
        LimitCoin?: (number|null);

        /** GameConfig1 MaxCoinLimit */
        MaxCoinLimit?: (number|null);

        /** GameConfig1 BaseScore */
        BaseScore?: (number|null);

        /** GameConfig1 OtherIntParams */
        OtherIntParams?: (number[]|null);

        /** GameConfig1 BetScore */
        BetScore?: (number|null);

        /** GameConfig1 MaxBetCoin */
        MaxBetCoin?: (number[]|null);

        /** GameConfig1 MatchMode */
        MatchMode?: (number|null);

        /** GameConfig1 LotteryCoin */
        LotteryCoin?: (number|Long|null);

        /** GameConfig1 LotteryCfg */
        LotteryCfg?: (string|null);

        /** GameConfig1 Status */
        Status?: (boolean|null);
    }

    /** Represents a GameConfig1. */
    class GameConfig1 implements IGameConfig1 {

        /**
         * Constructs a new GameConfig1.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IGameConfig1);

        /** GameConfig1 LogicId. */
        public LogicId: number;

        /** GameConfig1 LimitCoin. */
        public LimitCoin: number;

        /** GameConfig1 MaxCoinLimit. */
        public MaxCoinLimit: number;

        /** GameConfig1 BaseScore. */
        public BaseScore: number;

        /** GameConfig1 OtherIntParams. */
        public OtherIntParams: number[];

        /** GameConfig1 BetScore. */
        public BetScore: number;

        /** GameConfig1 MaxBetCoin. */
        public MaxBetCoin: number[];

        /** GameConfig1 MatchMode. */
        public MatchMode: number;

        /** GameConfig1 LotteryCoin. */
        public LotteryCoin: (number|Long);

        /** GameConfig1 LotteryCfg. */
        public LotteryCfg: string;

        /** GameConfig1 Status. */
        public Status: boolean;

        /**
         * Encodes the specified GameConfig1 message. Does not implicitly {@link gamehall.GameConfig1.verify|verify} messages.
         * @param m GameConfig1 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IGameConfig1, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameConfig1 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameConfig1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.GameConfig1;
    }

    /** Properties of a CSGetGameConfig. */
    interface ICSGetGameConfig {

        /** CSGetGameConfig Platform */
        Platform?: (string|null);

        /** CSGetGameConfig Channel */
        Channel?: (string|null);

        /** CSGetGameConfig GameId */
        GameId?: (number|null);
    }

    /** Represents a CSGetGameConfig. */
    class CSGetGameConfig implements ICSGetGameConfig {

        /**
         * Constructs a new CSGetGameConfig.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSGetGameConfig);

        /** CSGetGameConfig Platform. */
        public Platform: string;

        /** CSGetGameConfig Channel. */
        public Channel: string;

        /** CSGetGameConfig GameId. */
        public GameId: number;

        /**
         * Encodes the specified CSGetGameConfig message. Does not implicitly {@link gamehall.CSGetGameConfig.verify|verify} messages.
         * @param m CSGetGameConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSGetGameConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetGameConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetGameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSGetGameConfig;
    }

    /** Properties of a SCGetGameConfig. */
    interface ISCGetGameConfig {

        /** SCGetGameConfig GameCfg */
        GameCfg?: (gamehall.IGameConfig1[]|null);
    }

    /** Represents a SCGetGameConfig. */
    class SCGetGameConfig implements ISCGetGameConfig {

        /**
         * Constructs a new SCGetGameConfig.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCGetGameConfig);

        /** SCGetGameConfig GameCfg. */
        public GameCfg: gamehall.IGameConfig1[];

        /**
         * Encodes the specified SCGetGameConfig message. Does not implicitly {@link gamehall.SCGetGameConfig.verify|verify} messages.
         * @param m SCGetGameConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCGetGameConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetGameConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetGameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCGetGameConfig;
    }

    /** Properties of a SCChangeGameStatus. */
    interface ISCChangeGameStatus {

        /** SCChangeGameStatus GameCfg */
        GameCfg?: (gamehall.IGameConfig1[]|null);
    }

    /** Represents a SCChangeGameStatus. */
    class SCChangeGameStatus implements ISCChangeGameStatus {

        /**
         * Constructs a new SCChangeGameStatus.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCChangeGameStatus);

        /** SCChangeGameStatus GameCfg. */
        public GameCfg: gamehall.IGameConfig1[];

        /**
         * Encodes the specified SCChangeGameStatus message. Does not implicitly {@link gamehall.SCChangeGameStatus.verify|verify} messages.
         * @param m SCChangeGameStatus message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCChangeGameStatus, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCChangeGameStatus message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCChangeGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCChangeGameStatus;
    }

    /** Properties of a CSEnterGame. */
    interface ICSEnterGame {

        /** CSEnterGame Id */
        Id?: (number|null);

        /** CSEnterGame OpParams */
        OpParams?: (number[]|null);

        /** CSEnterGame Platform */
        Platform?: (string|null);

        /** CSEnterGame ApkVer */
        ApkVer?: (number|null);

        /** CSEnterGame ResVer */
        ResVer?: (number|null);
    }

    /** Represents a CSEnterGame. */
    class CSEnterGame implements ICSEnterGame {

        /**
         * Constructs a new CSEnterGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSEnterGame);

        /** CSEnterGame Id. */
        public Id: number;

        /** CSEnterGame OpParams. */
        public OpParams: number[];

        /** CSEnterGame Platform. */
        public Platform: string;

        /** CSEnterGame ApkVer. */
        public ApkVer: number;

        /** CSEnterGame ResVer. */
        public ResVer: number;

        /**
         * Encodes the specified CSEnterGame message. Does not implicitly {@link gamehall.CSEnterGame.verify|verify} messages.
         * @param m CSEnterGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSEnterGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSEnterGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSEnterGame;
    }

    /** Properties of a SCEnterGame. */
    interface ISCEnterGame {

        /** SCEnterGame OpCode */
        OpCode?: (gamehall.OpResultCode_Game|null);

        /** SCEnterGame Id */
        Id?: (number|null);

        /** SCEnterGame OpParams */
        OpParams?: (number[]|null);

        /** SCEnterGame MinApkVer */
        MinApkVer?: (number|null);

        /** SCEnterGame LatestApkVer */
        LatestApkVer?: (number|null);

        /** SCEnterGame MinResVer */
        MinResVer?: (number|null);

        /** SCEnterGame LatestResVer */
        LatestResVer?: (number|null);
    }

    /** Represents a SCEnterGame. */
    class SCEnterGame implements ISCEnterGame {

        /**
         * Constructs a new SCEnterGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCEnterGame);

        /** SCEnterGame OpCode. */
        public OpCode: gamehall.OpResultCode_Game;

        /** SCEnterGame Id. */
        public Id: number;

        /** SCEnterGame OpParams. */
        public OpParams: number[];

        /** SCEnterGame MinApkVer. */
        public MinApkVer: number;

        /** SCEnterGame LatestApkVer. */
        public LatestApkVer: number;

        /** SCEnterGame MinResVer. */
        public MinResVer: number;

        /** SCEnterGame LatestResVer. */
        public LatestResVer: number;

        /**
         * Encodes the specified SCEnterGame message. Does not implicitly {@link gamehall.SCEnterGame.verify|verify} messages.
         * @param m SCEnterGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCEnterGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCEnterGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCEnterGame;
    }

    /** Properties of a CSQuitGame. */
    interface ICSQuitGame {

        /** CSQuitGame Id */
        Id?: (number|null);

        /** CSQuitGame IsAudience */
        IsAudience?: (boolean|null);
    }

    /** Represents a CSQuitGame. */
    class CSQuitGame implements ICSQuitGame {

        /**
         * Constructs a new CSQuitGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSQuitGame);

        /** CSQuitGame Id. */
        public Id: number;

        /** CSQuitGame IsAudience. */
        public IsAudience: boolean;

        /**
         * Encodes the specified CSQuitGame message. Does not implicitly {@link gamehall.CSQuitGame.verify|verify} messages.
         * @param m CSQuitGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSQuitGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSQuitGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSQuitGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSQuitGame;
    }

    /** Properties of a SCQuitGame. */
    interface ISCQuitGame {

        /** SCQuitGame OpCode */
        OpCode?: (gamehall.OpResultCode_Game|null);

        /** SCQuitGame Id */
        Id?: (number|null);

        /** SCQuitGame Reason */
        Reason?: (number|null);
    }

    /** Represents a SCQuitGame. */
    class SCQuitGame implements ISCQuitGame {

        /**
         * Constructs a new SCQuitGame.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCQuitGame);

        /** SCQuitGame OpCode. */
        public OpCode: gamehall.OpResultCode_Game;

        /** SCQuitGame Id. */
        public Id: number;

        /** SCQuitGame Reason. */
        public Reason: number;

        /**
         * Encodes the specified SCQuitGame message. Does not implicitly {@link gamehall.SCQuitGame.verify|verify} messages.
         * @param m SCQuitGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCQuitGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCQuitGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCQuitGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCQuitGame;
    }

    /** Properties of a CSUploadLoc. */
    interface ICSUploadLoc {

        /** CSUploadLoc Longitude */
        Longitude?: (number|null);

        /** CSUploadLoc Latitude */
        Latitude?: (number|null);

        /** CSUploadLoc City */
        City?: (string|null);
    }

    /** Represents a CSUploadLoc. */
    class CSUploadLoc implements ICSUploadLoc {

        /**
         * Constructs a new CSUploadLoc.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSUploadLoc);

        /** CSUploadLoc Longitude. */
        public Longitude: number;

        /** CSUploadLoc Latitude. */
        public Latitude: number;

        /** CSUploadLoc City. */
        public City: string;

        /**
         * Encodes the specified CSUploadLoc message. Does not implicitly {@link gamehall.CSUploadLoc.verify|verify} messages.
         * @param m CSUploadLoc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSUploadLoc, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSUploadLoc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSUploadLoc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSUploadLoc;
    }

    /** Properties of a SCUploadLoc. */
    interface ISCUploadLoc {

        /** SCUploadLoc Pos */
        Pos?: (number|null);

        /** SCUploadLoc Longitude */
        Longitude?: (number|null);

        /** SCUploadLoc Latitude */
        Latitude?: (number|null);

        /** SCUploadLoc City */
        City?: (string|null);
    }

    /** Represents a SCUploadLoc. */
    class SCUploadLoc implements ISCUploadLoc {

        /**
         * Constructs a new SCUploadLoc.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCUploadLoc);

        /** SCUploadLoc Pos. */
        public Pos: number;

        /** SCUploadLoc Longitude. */
        public Longitude: number;

        /** SCUploadLoc Latitude. */
        public Latitude: number;

        /** SCUploadLoc City. */
        public City: string;

        /**
         * Encodes the specified SCUploadLoc message. Does not implicitly {@link gamehall.SCUploadLoc.verify|verify} messages.
         * @param m SCUploadLoc message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCUploadLoc, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCUploadLoc message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCUploadLoc
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCUploadLoc;
    }

    /** Properties of a CSAudienceSit. */
    interface ICSAudienceSit {

        /** CSAudienceSit RoomId */
        RoomId?: (number|null);
    }

    /** Represents a CSAudienceSit. */
    class CSAudienceSit implements ICSAudienceSit {

        /**
         * Constructs a new CSAudienceSit.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSAudienceSit);

        /** CSAudienceSit RoomId. */
        public RoomId: number;

        /**
         * Encodes the specified CSAudienceSit message. Does not implicitly {@link gamehall.CSAudienceSit.verify|verify} messages.
         * @param m CSAudienceSit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSAudienceSit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSAudienceSit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSAudienceSit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSAudienceSit;
    }

    /** Properties of a SCAudienceSit. */
    interface ISCAudienceSit {

        /** SCAudienceSit RoomId */
        RoomId?: (number|null);

        /** SCAudienceSit OpCode */
        OpCode?: (gamehall.OpResultCode_Game|null);
    }

    /** Represents a SCAudienceSit. */
    class SCAudienceSit implements ISCAudienceSit {

        /**
         * Constructs a new SCAudienceSit.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCAudienceSit);

        /** SCAudienceSit RoomId. */
        public RoomId: number;

        /** SCAudienceSit OpCode. */
        public OpCode: gamehall.OpResultCode_Game;

        /**
         * Encodes the specified SCAudienceSit message. Does not implicitly {@link gamehall.SCAudienceSit.verify|verify} messages.
         * @param m SCAudienceSit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCAudienceSit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCAudienceSit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCAudienceSit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCAudienceSit;
    }

    /** Properties of a CSRecordAndNotice. */
    interface ICSRecordAndNotice {

        /** CSRecordAndNotice PageNo */
        PageNo?: (number|null);

        /** CSRecordAndNotice PageSize */
        PageSize?: (number|null);

        /** CSRecordAndNotice Opt */
        Opt?: (number|null);

        /** CSRecordAndNotice StartTime */
        StartTime?: (number|Long|null);
    }

    /** Represents a CSRecordAndNotice. */
    class CSRecordAndNotice implements ICSRecordAndNotice {

        /**
         * Constructs a new CSRecordAndNotice.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSRecordAndNotice);

        /** CSRecordAndNotice PageNo. */
        public PageNo: number;

        /** CSRecordAndNotice PageSize. */
        public PageSize: number;

        /** CSRecordAndNotice Opt. */
        public Opt: number;

        /** CSRecordAndNotice StartTime. */
        public StartTime: (number|Long);

        /**
         * Encodes the specified CSRecordAndNotice message. Does not implicitly {@link gamehall.CSRecordAndNotice.verify|verify} messages.
         * @param m CSRecordAndNotice message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSRecordAndNotice, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSRecordAndNotice message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSRecordAndNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSRecordAndNotice;
    }

    /** Properties of a CommonNotice. */
    interface ICommonNotice {

        /** CommonNotice Sort */
        Sort?: (number|null);

        /** CommonNotice Title */
        Title?: (string|null);

        /** CommonNotice Content */
        Content?: (string|null);

        /** CommonNotice TypeName */
        TypeName?: (string|null);

        /** CommonNotice Type */
        Type?: (number|null);

        /** CommonNotice StartTime */
        StartTime?: (number|null);

        /** CommonNotice EndTime */
        EndTime?: (number|null);

        /** CommonNotice Platform */
        Platform?: (string|null);
    }

    /** Represents a CommonNotice. */
    class CommonNotice implements ICommonNotice {

        /**
         * Constructs a new CommonNotice.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICommonNotice);

        /** CommonNotice Sort. */
        public Sort: number;

        /** CommonNotice Title. */
        public Title: string;

        /** CommonNotice Content. */
        public Content: string;

        /** CommonNotice TypeName. */
        public TypeName: string;

        /** CommonNotice Type. */
        public Type: number;

        /** CommonNotice StartTime. */
        public StartTime: number;

        /** CommonNotice EndTime. */
        public EndTime: number;

        /** CommonNotice Platform. */
        public Platform: string;

        /**
         * Encodes the specified CommonNotice message. Does not implicitly {@link gamehall.CommonNotice.verify|verify} messages.
         * @param m CommonNotice message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICommonNotice, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonNotice message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CommonNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CommonNotice;
    }

    /** Properties of a PlayerRecord. */
    interface IPlayerRecord {

        /** PlayerRecord GameFreeid */
        GameFreeid?: (number|null);

        /** PlayerRecord GameDetailedLogId */
        GameDetailedLogId?: (string|null);

        /** PlayerRecord TotalIn */
        TotalIn?: (number|Long|null);

        /** PlayerRecord TotalOut */
        TotalOut?: (number|Long|null);

        /** PlayerRecord Ts */
        Ts?: (number|null);
    }

    /** Represents a PlayerRecord. */
    class PlayerRecord implements IPlayerRecord {

        /**
         * Constructs a new PlayerRecord.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IPlayerRecord);

        /** PlayerRecord GameFreeid. */
        public GameFreeid: number;

        /** PlayerRecord GameDetailedLogId. */
        public GameDetailedLogId: string;

        /** PlayerRecord TotalIn. */
        public TotalIn: (number|Long);

        /** PlayerRecord TotalOut. */
        public TotalOut: (number|Long);

        /** PlayerRecord Ts. */
        public Ts: number;

        /**
         * Encodes the specified PlayerRecord message. Does not implicitly {@link gamehall.PlayerRecord.verify|verify} messages.
         * @param m PlayerRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IPlayerRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.PlayerRecord;
    }

    /** Properties of a SCRecordAndNotice. */
    interface ISCRecordAndNotice {

        /** SCRecordAndNotice OpCode */
        OpCode?: (gamehall.OpResultCode_Game|null);

        /** SCRecordAndNotice List */
        List?: (gamehall.ICommonNotice[]|null);

        /** SCRecordAndNotice Glist */
        Glist?: (gamehall.IPlayerRecord[]|null);

        /** SCRecordAndNotice GlistTs */
        GlistTs?: ((number|Long)[]|null);
    }

    /** Represents a SCRecordAndNotice. */
    class SCRecordAndNotice implements ISCRecordAndNotice {

        /**
         * Constructs a new SCRecordAndNotice.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCRecordAndNotice);

        /** SCRecordAndNotice OpCode. */
        public OpCode: gamehall.OpResultCode_Game;

        /** SCRecordAndNotice List. */
        public List: gamehall.ICommonNotice[];

        /** SCRecordAndNotice Glist. */
        public Glist: gamehall.IPlayerRecord[];

        /** SCRecordAndNotice GlistTs. */
        public GlistTs: (number|Long)[];

        /**
         * Encodes the specified SCRecordAndNotice message. Does not implicitly {@link gamehall.SCRecordAndNotice.verify|verify} messages.
         * @param m SCRecordAndNotice message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCRecordAndNotice, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRecordAndNotice message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRecordAndNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCRecordAndNotice;
    }

    /** OpResultCode_Hall enum. */
    enum OpResultCode_Hall {
        OPRC_Sucess_Hall = 0,
        OPRC_Error_Hall = 1,
        OPRC_OnlineReward_Info_FindPlatform_Fail_Hall = 10008
    }

    /** 大厅协议 2340-2379 */
    enum HallPacketID {
        PACKET_Hall_ZERO = 0,
        PACKET_CS_REBATE_LIST = 2340,
        PACKET_SC_REBATE_LIST = 2341,
        PACKET_CS_REBATE_RECEIVE = 2342,
        PACKET_SC_REBATE_RECEIVE = 2343,
        PACKET_SC_HALL_REDCTRL = 2344,
        PACKET_CS_NEWPLAYERINFO = 2345,
        PACKET_SC_NEWPLAYERINFO = 2346,
        PACKET_CS_CODETYPERECORD = 2347,
        PACKET_SC_CODETYPERECORD = 2348,
        PACKET_CS_BETCOINRECORD = 2349,
        PACKET_SC_BETCOINRECORD = 2350,
        PACKET_CS_COINDETAILED = 2351,
        PACKET_SC_COINDETAILEDTOTAL = 2352,
        PACKET_SC_COINTOTAL = 2353,
        PACKET_CS_REPORTFORM = 2354,
        PACKET_SC_REPORTFORM = 2355,
        PACKET_CS_HISTORYRECORD = 2356,
        PACKET_SC_HISTORYRECORD = 2357,
        PACKET_CS_RECEIVECODECOIN = 2358,
        PACKET_SC_RECEIVECODECOIN = 2359,
        PACKET_SC_REBATETOTALINFO = 2360,
        PACKET_CS_GETISCANREBATE = 2362,
        PACKET_SC_GETISCANREBATE = 2363,
        PACKET_CS_GETRANKINFO = 2364,
        PACKET_SC_GETRANKINFO = 2365,
        PACKET_SC_SHOWRED = 2366
    }

    /** Properties of a RebateInfo. */
    interface IRebateInfo {

        /** RebateInfo Platform */
        Platform?: (string|null);

        /** RebateInfo validBetTotal */
        validBetTotal?: (number|Long|null);
    }

    /** rebatetask */
    class RebateInfo implements IRebateInfo {

        /**
         * Constructs a new RebateInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IRebateInfo);

        /** RebateInfo Platform. */
        public Platform: string;

        /** RebateInfo validBetTotal. */
        public validBetTotal: (number|Long);

        /**
         * Encodes the specified RebateInfo message. Does not implicitly {@link gamehall.RebateInfo.verify|verify} messages.
         * @param m RebateInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IRebateInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RebateInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RebateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.RebateInfo;
    }

    /** Properties of a CSRebateList. */
    interface ICSRebateList {
    }

    /** Represents a CSRebateList. */
    class CSRebateList implements ICSRebateList {

        /**
         * Constructs a new CSRebateList.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSRebateList);

        /**
         * Encodes the specified CSRebateList message. Does not implicitly {@link gamehall.CSRebateList.verify|verify} messages.
         * @param m CSRebateList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSRebateList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSRebateList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSRebateList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSRebateList;
    }

    /** Properties of a SCRebateList. */
    interface ISCRebateList {

        /** SCRebateList RebateList */
        RebateList?: (gamehall.IRebateInfo[]|null);

        /** SCRebateList RebateTotalCoin */
        RebateTotalCoin?: (number|Long|null);
    }

    /** Represents a SCRebateList. */
    class SCRebateList implements ISCRebateList {

        /**
         * Constructs a new SCRebateList.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCRebateList);

        /** SCRebateList RebateList. */
        public RebateList: gamehall.IRebateInfo[];

        /** SCRebateList RebateTotalCoin. */
        public RebateTotalCoin: (number|Long);

        /**
         * Encodes the specified SCRebateList message. Does not implicitly {@link gamehall.SCRebateList.verify|verify} messages.
         * @param m SCRebateList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCRebateList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRebateList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRebateList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCRebateList;
    }

    /** Properties of a CSReceiveRebate. */
    interface ICSReceiveRebate {
    }

    /** Represents a CSReceiveRebate. */
    class CSReceiveRebate implements ICSReceiveRebate {

        /**
         * Constructs a new CSReceiveRebate.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSReceiveRebate);

        /**
         * Encodes the specified CSReceiveRebate message. Does not implicitly {@link gamehall.CSReceiveRebate.verify|verify} messages.
         * @param m CSReceiveRebate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSReceiveRebate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSReceiveRebate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSReceiveRebate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSReceiveRebate;
    }

    /** Properties of a SCReceiveRebate. */
    interface ISCReceiveRebate {

        /** SCReceiveRebate OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Hall|null);

        /** SCReceiveRebate Coin */
        Coin?: (number|Long|null);
    }

    /** Represents a SCReceiveRebate. */
    class SCReceiveRebate implements ISCReceiveRebate {

        /**
         * Constructs a new SCReceiveRebate.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCReceiveRebate);

        /** SCReceiveRebate OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Hall;

        /** SCReceiveRebate Coin. */
        public Coin: (number|Long);

        /**
         * Encodes the specified SCReceiveRebate message. Does not implicitly {@link gamehall.SCReceiveRebate.verify|verify} messages.
         * @param m SCReceiveRebate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCReceiveRebate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCReceiveRebate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCReceiveRebate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCReceiveRebate;
    }

    /** Properties of a SCRedCtrl. */
    interface ISCRedCtrl {

        /** SCRedCtrl OpCode */
        OpCode?: (number|Long|null);

        /** SCRedCtrl IsFShow */
        IsFShow?: (boolean|null);
    }

    /** Represents a SCRedCtrl. */
    class SCRedCtrl implements ISCRedCtrl {

        /**
         * Constructs a new SCRedCtrl.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCRedCtrl);

        /** SCRedCtrl OpCode. */
        public OpCode: (number|Long);

        /** SCRedCtrl IsFShow. */
        public IsFShow: boolean;

        /**
         * Encodes the specified SCRedCtrl message. Does not implicitly {@link gamehall.SCRedCtrl.verify|verify} messages.
         * @param m SCRedCtrl message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCRedCtrl, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRedCtrl message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRedCtrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCRedCtrl;
    }

    /** Properties of a CSGetIsCanRebate. */
    interface ICSGetIsCanRebate {
    }

    /** Represents a CSGetIsCanRebate. */
    class CSGetIsCanRebate implements ICSGetIsCanRebate {

        /**
         * Constructs a new CSGetIsCanRebate.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSGetIsCanRebate);

        /**
         * Encodes the specified CSGetIsCanRebate message. Does not implicitly {@link gamehall.CSGetIsCanRebate.verify|verify} messages.
         * @param m CSGetIsCanRebate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSGetIsCanRebate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetIsCanRebate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetIsCanRebate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSGetIsCanRebate;
    }

    /** Properties of a SCGetIsCanRebate. */
    interface ISCGetIsCanRebate {

        /** SCGetIsCanRebate OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Hall|null);

        /** SCGetIsCanRebate IsCan */
        IsCan?: (number|Long|null);

        /** SCGetIsCanRebate Url */
        Url?: (string|null);

        /** SCGetIsCanRebate WX */
        WX?: (string|null);
    }

    /** Represents a SCGetIsCanRebate. */
    class SCGetIsCanRebate implements ISCGetIsCanRebate {

        /**
         * Constructs a new SCGetIsCanRebate.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCGetIsCanRebate);

        /** SCGetIsCanRebate OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Hall;

        /** SCGetIsCanRebate IsCan. */
        public IsCan: (number|Long);

        /** SCGetIsCanRebate Url. */
        public Url: string;

        /** SCGetIsCanRebate WX. */
        public WX: string;

        /**
         * Encodes the specified SCGetIsCanRebate message. Does not implicitly {@link gamehall.SCGetIsCanRebate.verify|verify} messages.
         * @param m SCGetIsCanRebate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCGetIsCanRebate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetIsCanRebate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetIsCanRebate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCGetIsCanRebate;
    }

    /** Properties of a HallGameType. */
    interface IHallGameType {

        /** HallGameType GameId */
        GameId?: (number|null);

        /** HallGameType GameMode */
        GameMode?: (number|null);
    }

    /** 个人信息////////////////////////////////////////////////////////////// */
    class HallGameType implements IHallGameType {

        /**
         * Constructs a new HallGameType.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IHallGameType);

        /** HallGameType GameId. */
        public GameId: number;

        /** HallGameType GameMode. */
        public GameMode: number;

        /**
         * Encodes the specified HallGameType message. Does not implicitly {@link gamehall.HallGameType.verify|verify} messages.
         * @param m HallGameType message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IHallGameType, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HallGameType message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HallGameType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.HallGameType;
    }

    /** HallOperaCode enum. */
    enum HallOperaCode {
        HallOperaZero = 0,
        HallChessGame = 1,
        HallElectronicGame = 2,
        HallFishingGame = 3,
        HallLiveVideo = 4,
        HallLotteryGame = 5,
        HallSportsGame = 6,
        HallPrivateRoom = 7,
        HallClubRoom = 8,
        HallThirdPlt = 101
    }

    /** Properties of a CSNewPlayerInfo. */
    interface ICSNewPlayerInfo {
    }

    /** Represents a CSNewPlayerInfo. */
    class CSNewPlayerInfo implements ICSNewPlayerInfo {

        /**
         * Constructs a new CSNewPlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSNewPlayerInfo);

        /**
         * Encodes the specified CSNewPlayerInfo message. Does not implicitly {@link gamehall.CSNewPlayerInfo.verify|verify} messages.
         * @param m CSNewPlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSNewPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSNewPlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSNewPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSNewPlayerInfo;
    }

    /** Properties of a SCNewPlayerInfo. */
    interface ISCNewPlayerInfo {

        /** SCNewPlayerInfo GameTotalNum */
        GameTotalNum?: (number|null);

        /** SCNewPlayerInfo GameMostPartake */
        GameMostPartake?: (string|null);

        /** SCNewPlayerInfo GameMostProfit */
        GameMostProfit?: (string|null);

        /** SCNewPlayerInfo GameMostProfitNum */
        GameMostProfitNum?: (number|null);

        /** SCNewPlayerInfo CreateRoomNum */
        CreateRoomNum?: (number|null);

        /** SCNewPlayerInfo CreateRoomMost */
        CreateRoomMost?: (string|null);

        /** SCNewPlayerInfo CreateClubNum */
        CreateClubNum?: (number|null);

        /** SCNewPlayerInfo CreateClubRoomMost */
        CreateClubRoomMost?: (string|null);

        /** SCNewPlayerInfo TeamNum */
        TeamNum?: (number|null);

        /** SCNewPlayerInfo AchievementTotal */
        AchievementTotal?: (number|null);

        /** SCNewPlayerInfo RewardTotal */
        RewardTotal?: (number|null);

        /** 以下为 投注记录、账户明细和个人报表用 */
        TotalCoin?: (number|Long|null);

        /** SCNewPlayerInfo LastGetCoinTime */
        LastGetCoinTime?: (number|Long|null);

        /** SCNewPlayerInfo Coin */
        Coin?: (number|Long|null);

        /** SCNewPlayerInfo CodeType */
        CodeType?: (number|null);

        /** SCNewPlayerInfo ClassType */
        ClassType?: (number[]|null);
    }

    /** Represents a SCNewPlayerInfo. */
    class SCNewPlayerInfo implements ISCNewPlayerInfo {

        /**
         * Constructs a new SCNewPlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCNewPlayerInfo);

        /** SCNewPlayerInfo GameTotalNum. */
        public GameTotalNum: number;

        /** SCNewPlayerInfo GameMostPartake. */
        public GameMostPartake: string;

        /** SCNewPlayerInfo GameMostProfit. */
        public GameMostProfit: string;

        /** SCNewPlayerInfo GameMostProfitNum. */
        public GameMostProfitNum: number;

        /** SCNewPlayerInfo CreateRoomNum. */
        public CreateRoomNum: number;

        /** SCNewPlayerInfo CreateRoomMost. */
        public CreateRoomMost: string;

        /** SCNewPlayerInfo CreateClubNum. */
        public CreateClubNum: number;

        /** SCNewPlayerInfo CreateClubRoomMost. */
        public CreateClubRoomMost: string;

        /** SCNewPlayerInfo TeamNum. */
        public TeamNum: number;

        /** SCNewPlayerInfo AchievementTotal. */
        public AchievementTotal: number;

        /** SCNewPlayerInfo RewardTotal. */
        public RewardTotal: number;

        /** 以下为 投注记录、账户明细和个人报表用 */
        public TotalCoin: (number|Long);

        /** SCNewPlayerInfo LastGetCoinTime. */
        public LastGetCoinTime: (number|Long);

        /** SCNewPlayerInfo Coin. */
        public Coin: (number|Long);

        /** SCNewPlayerInfo CodeType. */
        public CodeType: number;

        /** SCNewPlayerInfo ClassType. */
        public ClassType: number[];

        /**
         * Encodes the specified SCNewPlayerInfo message. Does not implicitly {@link gamehall.SCNewPlayerInfo.verify|verify} messages.
         * @param m SCNewPlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCNewPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCNewPlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCNewPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCNewPlayerInfo;
    }

    /** Properties of a SCRebateTotalInfo. */
    interface ISCRebateTotalInfo {

        /** SCRebateTotalInfo TotalCoin */
        TotalCoin?: (number|Long|null);

        /** SCRebateTotalInfo LastGetCoinTime */
        LastGetCoinTime?: (number|Long|null);

        /** SCRebateTotalInfo Coin */
        Coin?: (number|Long|null);

        /** SCRebateTotalInfo CodeType */
        CodeType?: (number|null);
    }

    /** Represents a SCRebateTotalInfo. */
    class SCRebateTotalInfo implements ISCRebateTotalInfo {

        /**
         * Constructs a new SCRebateTotalInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCRebateTotalInfo);

        /** SCRebateTotalInfo TotalCoin. */
        public TotalCoin: (number|Long);

        /** SCRebateTotalInfo LastGetCoinTime. */
        public LastGetCoinTime: (number|Long);

        /** SCRebateTotalInfo Coin. */
        public Coin: (number|Long);

        /** SCRebateTotalInfo CodeType. */
        public CodeType: number;

        /**
         * Encodes the specified SCRebateTotalInfo message. Does not implicitly {@link gamehall.SCRebateTotalInfo.verify|verify} messages.
         * @param m SCRebateTotalInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCRebateTotalInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRebateTotalInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRebateTotalInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCRebateTotalInfo;
    }

    /** Properties of a CSCodeTypeRecord. */
    interface ICSCodeTypeRecord {

        /** CSCodeTypeRecord ShowTypeId */
        ShowTypeId?: (gamehall.HallOperaCode|null);
    }

    /** Represents a CSCodeTypeRecord. */
    class CSCodeTypeRecord implements ICSCodeTypeRecord {

        /**
         * Constructs a new CSCodeTypeRecord.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSCodeTypeRecord);

        /** CSCodeTypeRecord ShowTypeId. */
        public ShowTypeId: gamehall.HallOperaCode;

        /**
         * Encodes the specified CSCodeTypeRecord message. Does not implicitly {@link gamehall.CSCodeTypeRecord.verify|verify} messages.
         * @param m CSCodeTypeRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSCodeTypeRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCodeTypeRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCodeTypeRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSCodeTypeRecord;
    }

    /** Properties of a CodeTypeRecord. */
    interface ICodeTypeRecord {

        /** CodeTypeRecord GameName */
        GameName?: (string|null);

        /** CodeTypeRecord GameBetCoin */
        GameBetCoin?: (number|Long|null);

        /** CodeTypeRecord Rate */
        Rate?: (number|null);

        /** CodeTypeRecord Coin */
        Coin?: (number|null);

        /** CodeTypeRecord MinCoin */
        MinCoin?: (number|null);

        /** CodeTypeRecord MaxCoin */
        MaxCoin?: (number|null);
    }

    /** 洗码列表 */
    class CodeTypeRecord implements ICodeTypeRecord {

        /**
         * Constructs a new CodeTypeRecord.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICodeTypeRecord);

        /** CodeTypeRecord GameName. */
        public GameName: string;

        /** CodeTypeRecord GameBetCoin. */
        public GameBetCoin: (number|Long);

        /** CodeTypeRecord Rate. */
        public Rate: number;

        /** CodeTypeRecord Coin. */
        public Coin: number;

        /** CodeTypeRecord MinCoin. */
        public MinCoin: number;

        /** CodeTypeRecord MaxCoin. */
        public MaxCoin: number;

        /**
         * Encodes the specified CodeTypeRecord message. Does not implicitly {@link gamehall.CodeTypeRecord.verify|verify} messages.
         * @param m CodeTypeRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICodeTypeRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CodeTypeRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CodeTypeRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CodeTypeRecord;
    }

    /** Properties of a SCCodeTypeRecord. */
    interface ISCCodeTypeRecord {

        /** SCCodeTypeRecord ShowType */
        ShowType?: (gamehall.HallOperaCode|null);

        /** SCCodeTypeRecord CodeTypeRecord */
        CodeTypeRecord?: (gamehall.ICodeTypeRecord[]|null);
    }

    /** Represents a SCCodeTypeRecord. */
    class SCCodeTypeRecord implements ISCCodeTypeRecord {

        /**
         * Constructs a new SCCodeTypeRecord.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCCodeTypeRecord);

        /** SCCodeTypeRecord ShowType. */
        public ShowType: gamehall.HallOperaCode;

        /** SCCodeTypeRecord CodeTypeRecord. */
        public CodeTypeRecord: gamehall.ICodeTypeRecord[];

        /**
         * Encodes the specified SCCodeTypeRecord message. Does not implicitly {@link gamehall.SCCodeTypeRecord.verify|verify} messages.
         * @param m SCCodeTypeRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCCodeTypeRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCodeTypeRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCodeTypeRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCCodeTypeRecord;
    }

    /** Properties of a CSBetCoinRecord. */
    interface ICSBetCoinRecord {

        /** CSBetCoinRecord ShowTypeId */
        ShowTypeId?: (gamehall.HallOperaCode|null);

        /** CSBetCoinRecord TimeIndex */
        TimeIndex?: (number|Long|null);

        /** CSBetCoinRecord PageNo */
        PageNo?: (number|null);
    }

    /** Represents a CSBetCoinRecord. */
    class CSBetCoinRecord implements ICSBetCoinRecord {

        /**
         * Constructs a new CSBetCoinRecord.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSBetCoinRecord);

        /** CSBetCoinRecord ShowTypeId. */
        public ShowTypeId: gamehall.HallOperaCode;

        /** CSBetCoinRecord TimeIndex. */
        public TimeIndex: (number|Long);

        /** CSBetCoinRecord PageNo. */
        public PageNo: number;

        /**
         * Encodes the specified CSBetCoinRecord message. Does not implicitly {@link gamehall.CSBetCoinRecord.verify|verify} messages.
         * @param m CSBetCoinRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSBetCoinRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSBetCoinRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSBetCoinRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSBetCoinRecord;
    }

    /** Properties of a BetCoinRecord. */
    interface IBetCoinRecord {

        /** BetCoinRecord Ts */
        Ts?: (number|Long|null);

        /** BetCoinRecord GameName */
        GameName?: (string|null);

        /** BetCoinRecord RecordId */
        RecordId?: (string|null);

        /** BetCoinRecord BetCoin */
        BetCoin?: (number|Long|null);

        /** BetCoinRecord ReceivedCoin */
        ReceivedCoin?: (number|Long|null);
    }

    /** 投注记录 */
    class BetCoinRecord implements IBetCoinRecord {

        /**
         * Constructs a new BetCoinRecord.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IBetCoinRecord);

        /** BetCoinRecord Ts. */
        public Ts: (number|Long);

        /** BetCoinRecord GameName. */
        public GameName: string;

        /** BetCoinRecord RecordId. */
        public RecordId: string;

        /** BetCoinRecord BetCoin. */
        public BetCoin: (number|Long);

        /** BetCoinRecord ReceivedCoin. */
        public ReceivedCoin: (number|Long);

        /**
         * Encodes the specified BetCoinRecord message. Does not implicitly {@link gamehall.BetCoinRecord.verify|verify} messages.
         * @param m BetCoinRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IBetCoinRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetCoinRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BetCoinRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.BetCoinRecord;
    }

    /** Properties of a SCBetCoinRecord. */
    interface ISCBetCoinRecord {

        /** SCBetCoinRecord BetCoinRecord */
        BetCoinRecord?: (gamehall.IBetCoinRecord[]|null);

        /** SCBetCoinRecord PageNo */
        PageNo?: (number|null);

        /** SCBetCoinRecord PageSize */
        PageSize?: (number|null);

        /** SCBetCoinRecord PageNum */
        PageNum?: (number|null);
    }

    /** Represents a SCBetCoinRecord. */
    class SCBetCoinRecord implements ISCBetCoinRecord {

        /**
         * Constructs a new SCBetCoinRecord.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCBetCoinRecord);

        /** SCBetCoinRecord BetCoinRecord. */
        public BetCoinRecord: gamehall.IBetCoinRecord[];

        /** SCBetCoinRecord PageNo. */
        public PageNo: number;

        /** SCBetCoinRecord PageSize. */
        public PageSize: number;

        /** SCBetCoinRecord PageNum. */
        public PageNum: number;

        /**
         * Encodes the specified SCBetCoinRecord message. Does not implicitly {@link gamehall.SCBetCoinRecord.verify|verify} messages.
         * @param m SCBetCoinRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCBetCoinRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCBetCoinRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCBetCoinRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCBetCoinRecord;
    }

    /** Properties of a CSCoinDetailed. */
    interface ICSCoinDetailed {

        /** CSCoinDetailed TimeIndex */
        TimeIndex?: (number|Long|null);

        /** CSCoinDetailed CoinType */
        CoinType?: (number|Long|null);

        /** CSCoinDetailed PageNo */
        PageNo?: (number|null);
    }

    /** Represents a CSCoinDetailed. */
    class CSCoinDetailed implements ICSCoinDetailed {

        /**
         * Constructs a new CSCoinDetailed.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSCoinDetailed);

        /** CSCoinDetailed TimeIndex. */
        public TimeIndex: (number|Long);

        /** CSCoinDetailed CoinType. */
        public CoinType: (number|Long);

        /** CSCoinDetailed PageNo. */
        public PageNo: number;

        /**
         * Encodes the specified CSCoinDetailed message. Does not implicitly {@link gamehall.CSCoinDetailed.verify|verify} messages.
         * @param m CSCoinDetailed message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSCoinDetailed, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCoinDetailed message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCoinDetailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSCoinDetailed;
    }

    /** Properties of a CoinDetailed. */
    interface ICoinDetailed {

        /** CoinDetailed Ts */
        Ts?: (number|Long|null);

        /** CoinDetailed CoinType */
        CoinType?: (number|Long|null);

        /** CoinDetailed Income */
        Income?: (number|Long|null);

        /** CoinDetailed Disburse */
        Disburse?: (number|Long|null);

        /** CoinDetailed Coin */
        Coin?: (number|Long|null);
    }

    /** 账户明细 */
    class CoinDetailed implements ICoinDetailed {

        /**
         * Constructs a new CoinDetailed.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICoinDetailed);

        /** CoinDetailed Ts. */
        public Ts: (number|Long);

        /** CoinDetailed CoinType. */
        public CoinType: (number|Long);

        /** CoinDetailed Income. */
        public Income: (number|Long);

        /** CoinDetailed Disburse. */
        public Disburse: (number|Long);

        /** CoinDetailed Coin. */
        public Coin: (number|Long);

        /**
         * Encodes the specified CoinDetailed message. Does not implicitly {@link gamehall.CoinDetailed.verify|verify} messages.
         * @param m CoinDetailed message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICoinDetailed, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CoinDetailed message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CoinDetailed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CoinDetailed;
    }

    /** Properties of a SCCoinDetailedTotal. */
    interface ISCCoinDetailedTotal {

        /** SCCoinDetailedTotal CoinDetailed */
        CoinDetailed?: (gamehall.ICoinDetailed[]|null);

        /** SCCoinDetailedTotal PageNo */
        PageNo?: (number|null);

        /** SCCoinDetailedTotal PageSize */
        PageSize?: (number|null);

        /** SCCoinDetailedTotal PageNum */
        PageNum?: (number|null);
    }

    /** Represents a SCCoinDetailedTotal. */
    class SCCoinDetailedTotal implements ISCCoinDetailedTotal {

        /**
         * Constructs a new SCCoinDetailedTotal.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCCoinDetailedTotal);

        /** SCCoinDetailedTotal CoinDetailed. */
        public CoinDetailed: gamehall.ICoinDetailed[];

        /** SCCoinDetailedTotal PageNo. */
        public PageNo: number;

        /** SCCoinDetailedTotal PageSize. */
        public PageSize: number;

        /** SCCoinDetailedTotal PageNum. */
        public PageNum: number;

        /**
         * Encodes the specified SCCoinDetailedTotal message. Does not implicitly {@link gamehall.SCCoinDetailedTotal.verify|verify} messages.
         * @param m SCCoinDetailedTotal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCCoinDetailedTotal, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCoinDetailedTotal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCoinDetailedTotal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCCoinDetailedTotal;
    }

    /** Properties of a SCCoinTotal. */
    interface ISCCoinTotal {

        /** SCCoinTotal RechargeCoin */
        RechargeCoin?: (number|Long|null);

        /** SCCoinTotal ExchangeCoin */
        ExchangeCoin?: (number|Long|null);

        /** SCCoinTotal ClubAddCoin */
        ClubAddCoin?: (number|Long|null);

        /** SCCoinTotal RebateCoin */
        RebateCoin?: (number|Long|null);

        /** SCCoinTotal Activity */
        Activity?: (number|Long|null);

        /** SCCoinTotal TransactionType */
        TransactionType?: (number[]|null);
    }

    /** Represents a SCCoinTotal. */
    class SCCoinTotal implements ISCCoinTotal {

        /**
         * Constructs a new SCCoinTotal.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCCoinTotal);

        /** SCCoinTotal RechargeCoin. */
        public RechargeCoin: (number|Long);

        /** SCCoinTotal ExchangeCoin. */
        public ExchangeCoin: (number|Long);

        /** SCCoinTotal ClubAddCoin. */
        public ClubAddCoin: (number|Long);

        /** SCCoinTotal RebateCoin. */
        public RebateCoin: (number|Long);

        /** SCCoinTotal Activity. */
        public Activity: (number|Long);

        /** SCCoinTotal TransactionType. */
        public TransactionType: number[];

        /**
         * Encodes the specified SCCoinTotal message. Does not implicitly {@link gamehall.SCCoinTotal.verify|verify} messages.
         * @param m SCCoinTotal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCCoinTotal, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCoinTotal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCoinTotal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCCoinTotal;
    }

    /** Properties of a CSReportForm. */
    interface ICSReportForm {

        /** CSReportForm ShowTypeId */
        ShowTypeId?: (gamehall.HallOperaCode|null);

        /** CSReportForm TimeIndex */
        TimeIndex?: (number|Long|null);
    }

    /** Represents a CSReportForm. */
    class CSReportForm implements ICSReportForm {

        /**
         * Constructs a new CSReportForm.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSReportForm);

        /** CSReportForm ShowTypeId. */
        public ShowTypeId: gamehall.HallOperaCode;

        /** CSReportForm TimeIndex. */
        public TimeIndex: (number|Long);

        /**
         * Encodes the specified CSReportForm message. Does not implicitly {@link gamehall.CSReportForm.verify|verify} messages.
         * @param m CSReportForm message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSReportForm, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSReportForm message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSReportForm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSReportForm;
    }

    /** Properties of a SCReportForm. */
    interface ISCReportForm {

        /** SCReportForm ShowType */
        ShowType?: (number|null);

        /** SCReportForm ProfitCoin */
        ProfitCoin?: (number|Long|null);

        /** SCReportForm BetCoin */
        BetCoin?: (number|Long|null);

        /** SCReportForm FlowCoin */
        FlowCoin?: (number|Long|null);
    }

    /** Represents a SCReportForm. */
    class SCReportForm implements ISCReportForm {

        /**
         * Constructs a new SCReportForm.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCReportForm);

        /** SCReportForm ShowType. */
        public ShowType: number;

        /** SCReportForm ProfitCoin. */
        public ProfitCoin: (number|Long);

        /** SCReportForm BetCoin. */
        public BetCoin: (number|Long);

        /** SCReportForm FlowCoin. */
        public FlowCoin: (number|Long);

        /**
         * Encodes the specified SCReportForm message. Does not implicitly {@link gamehall.SCReportForm.verify|verify} messages.
         * @param m SCReportForm message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCReportForm, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCReportForm message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCReportForm
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCReportForm;
    }

    /** Properties of a CSHistoryRecord. */
    interface ICSHistoryRecord {

        /** CSHistoryRecord PageNo */
        PageNo?: (number|null);
    }

    /** Represents a CSHistoryRecord. */
    class CSHistoryRecord implements ICSHistoryRecord {

        /**
         * Constructs a new CSHistoryRecord.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSHistoryRecord);

        /** CSHistoryRecord PageNo. */
        public PageNo: number;

        /**
         * Encodes the specified CSHistoryRecord message. Does not implicitly {@link gamehall.CSHistoryRecord.verify|verify} messages.
         * @param m CSHistoryRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSHistoryRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSHistoryRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSHistoryRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSHistoryRecord;
    }

    /** Properties of a HistoryRecord. */
    interface IHistoryRecord {

        /** HistoryRecord Ts */
        Ts?: (number|Long|null);

        /** HistoryRecord CodeCoin */
        CodeCoin?: (number|null);

        /** HistoryRecord Coin */
        Coin?: (number|null);

        /** HistoryRecord ReceiveType */
        ReceiveType?: (number|null);
    }

    /** Represents a HistoryRecord. */
    class HistoryRecord implements IHistoryRecord {

        /**
         * Constructs a new HistoryRecord.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IHistoryRecord);

        /** HistoryRecord Ts. */
        public Ts: (number|Long);

        /** HistoryRecord CodeCoin. */
        public CodeCoin: number;

        /** HistoryRecord Coin. */
        public Coin: number;

        /** HistoryRecord ReceiveType. */
        public ReceiveType: number;

        /**
         * Encodes the specified HistoryRecord message. Does not implicitly {@link gamehall.HistoryRecord.verify|verify} messages.
         * @param m HistoryRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IHistoryRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HistoryRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HistoryRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.HistoryRecord;
    }

    /** Properties of a SCHistoryRecord. */
    interface ISCHistoryRecord {

        /** SCHistoryRecord HistoryRecord */
        HistoryRecord?: (gamehall.IHistoryRecord[]|null);

        /** SCHistoryRecord PageNo */
        PageNo?: (number|null);

        /** SCHistoryRecord PageSize */
        PageSize?: (number|null);

        /** SCHistoryRecord PageNum */
        PageNum?: (number|null);
    }

    /** Represents a SCHistoryRecord. */
    class SCHistoryRecord implements ISCHistoryRecord {

        /**
         * Constructs a new SCHistoryRecord.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCHistoryRecord);

        /** SCHistoryRecord HistoryRecord. */
        public HistoryRecord: gamehall.IHistoryRecord[];

        /** SCHistoryRecord PageNo. */
        public PageNo: number;

        /** SCHistoryRecord PageSize. */
        public PageSize: number;

        /** SCHistoryRecord PageNum. */
        public PageNum: number;

        /**
         * Encodes the specified SCHistoryRecord message. Does not implicitly {@link gamehall.SCHistoryRecord.verify|verify} messages.
         * @param m SCHistoryRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCHistoryRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCHistoryRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCHistoryRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCHistoryRecord;
    }

    /** Properties of a CSReceiveCodeCoin. */
    interface ICSReceiveCodeCoin {
    }

    /** Represents a CSReceiveCodeCoin. */
    class CSReceiveCodeCoin implements ICSReceiveCodeCoin {

        /**
         * Constructs a new CSReceiveCodeCoin.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSReceiveCodeCoin);

        /**
         * Encodes the specified CSReceiveCodeCoin message. Does not implicitly {@link gamehall.CSReceiveCodeCoin.verify|verify} messages.
         * @param m CSReceiveCodeCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSReceiveCodeCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSReceiveCodeCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSReceiveCodeCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSReceiveCodeCoin;
    }

    /** Properties of a SCReceiveCodeCoin. */
    interface ISCReceiveCodeCoin {

        /** SCReceiveCodeCoin OpRetCode */
        OpRetCode?: (gamehall.OpResultCode_Hall|null);

        /** SCReceiveCodeCoin Coin */
        Coin?: (number|Long|null);
    }

    /** Represents a SCReceiveCodeCoin. */
    class SCReceiveCodeCoin implements ISCReceiveCodeCoin {

        /**
         * Constructs a new SCReceiveCodeCoin.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCReceiveCodeCoin);

        /** SCReceiveCodeCoin OpRetCode. */
        public OpRetCode: gamehall.OpResultCode_Hall;

        /** SCReceiveCodeCoin Coin. */
        public Coin: (number|Long);

        /**
         * Encodes the specified SCReceiveCodeCoin message. Does not implicitly {@link gamehall.SCReceiveCodeCoin.verify|verify} messages.
         * @param m SCReceiveCodeCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCReceiveCodeCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCReceiveCodeCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCReceiveCodeCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCReceiveCodeCoin;
    }

    /** Properties of a CSGetRankInfo. */
    interface ICSGetRankInfo {

        /** CSGetRankInfo Plt */
        Plt?: (string|null);

        /** CSGetRankInfo GameFreeId */
        GameFreeId?: (number|null);
    }

    /** Represents a CSGetRankInfo. */
    class CSGetRankInfo implements ICSGetRankInfo {

        /**
         * Constructs a new CSGetRankInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSGetRankInfo);

        /** CSGetRankInfo Plt. */
        public Plt: string;

        /** CSGetRankInfo GameFreeId. */
        public GameFreeId: number;

        /**
         * Encodes the specified CSGetRankInfo message. Does not implicitly {@link gamehall.CSGetRankInfo.verify|verify} messages.
         * @param m CSGetRankInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSGetRankInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetRankInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetRankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSGetRankInfo;
    }

    /** Properties of a RankInfo. */
    interface IRankInfo {

        /** RankInfo Snid */
        Snid?: (number|null);

        /** RankInfo Name */
        Name?: (string|null);

        /** RankInfo TotalIn */
        TotalIn?: (number|Long|null);

        /** RankInfo TotalOut */
        TotalOut?: (number|Long|null);
    }

    /** Represents a RankInfo. */
    class RankInfo implements IRankInfo {

        /**
         * Constructs a new RankInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IRankInfo);

        /** RankInfo Snid. */
        public Snid: number;

        /** RankInfo Name. */
        public Name: string;

        /** RankInfo TotalIn. */
        public TotalIn: (number|Long);

        /** RankInfo TotalOut. */
        public TotalOut: (number|Long);

        /**
         * Encodes the specified RankInfo message. Does not implicitly {@link gamehall.RankInfo.verify|verify} messages.
         * @param m RankInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IRankInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.RankInfo;
    }

    /** Properties of a SCGetRankInfo. */
    interface ISCGetRankInfo {

        /** SCGetRankInfo Info */
        Info?: (gamehall.IRankInfo[]|null);
    }

    /** Represents a SCGetRankInfo. */
    class SCGetRankInfo implements ISCGetRankInfo {

        /**
         * Constructs a new SCGetRankInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCGetRankInfo);

        /** SCGetRankInfo Info. */
        public Info: gamehall.IRankInfo[];

        /**
         * Encodes the specified SCGetRankInfo message. Does not implicitly {@link gamehall.SCGetRankInfo.verify|verify} messages.
         * @param m SCGetRankInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCGetRankInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetRankInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetRankInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCGetRankInfo;
    }

    /** ShowRedCode enum. */
    enum ShowRedCode {
        Mail = 0,
        Shop = 1,
        Role = 2,
        Pet = 3
    }

    /** Properties of a ShowRed. */
    interface IShowRed {

        /** ShowRed ShowType */
        ShowType?: (gamehall.ShowRedCode|null);

        /** ShowRed ShowChild */
        ShowChild?: (number|null);

        /** ShowRed IsShow */
        IsShow?: (number|null);
    }

    /** Represents a ShowRed. */
    class ShowRed implements IShowRed {

        /**
         * Constructs a new ShowRed.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IShowRed);

        /** ShowRed ShowType. */
        public ShowType: gamehall.ShowRedCode;

        /** ShowRed ShowChild. */
        public ShowChild: number;

        /** ShowRed IsShow. */
        public IsShow: number;

        /**
         * Encodes the specified ShowRed message. Does not implicitly {@link gamehall.ShowRed.verify|verify} messages.
         * @param m ShowRed message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IShowRed, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShowRed message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ShowRed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.ShowRed;
    }

    /** Properties of a SCShowRed. */
    interface ISCShowRed {

        /** SCShowRed ShowRed */
        ShowRed?: (gamehall.IShowRed|null);
    }

    /** Represents a SCShowRed. */
    class SCShowRed implements ISCShowRed {

        /**
         * Constructs a new SCShowRed.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCShowRed);

        /** SCShowRed ShowRed. */
        public ShowRed?: (gamehall.IShowRed|null);

        /**
         * Encodes the specified SCShowRed message. Does not implicitly {@link gamehall.SCShowRed.verify|verify} messages.
         * @param m SCShowRed message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCShowRed, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCShowRed message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCShowRed
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCShowRed;
    }

    /** OpResultCode_Hundred enum. */
    enum OpResultCode_Hundred {
        OPRC_Sucess_Hundred = 0,
        OPRC_Error_Hundred = 1,
        OPRC_YourResVerIsLow_Hundred = 1044,
        OPRC_YourAppVerIsLow_Hundred = 1045,
        OPRC_RoomHadClosed_Hundred = 1053,
        OPRC_SceneServerMaintain_Hundred = 1054,
        OPRC_CoinNotEnough_Hundred = 1056,
        OPRC_CoinTooMore_Hundred = 1058,
        OPRC_RoomGameTimes_Hundred = 1103,
        OPRC_MustBindPromoter_Hundred = 1113
    }

    /** HundredScenePacketID enum. */
    enum HundredScenePacketID {
        PACKET_HundredScene_ZERO = 0,
        PACKET_CS_HUNDREDSCENE_OP = 2380,
        PACKET_SC_HUNDREDSCENE_OP = 2381,
        PACKET_CS_HUNDREDSCENE_GETPLAYERNUM = 2382,
        PACKET_SC_HUNDREDSCENE_GETPLAYERNUM = 2383,
        PACKET_CS_GAMEJACKPOT = 2384,
        PACKET_SC_GAMEJACKPOT = 2385,
        PACKET_CS_GAMEHISTORYINFO = 2386,
        PACKET_SC_GAMEPLAYERHISTORY = 2387,
        PACKET_SC_GAMEBIGWINHISTORY = 2388,
        PACKET_BD_GAMEJACKPOT = 2389
    }

    /** Properties of a CSHundredSceneOp. */
    interface ICSHundredSceneOp {

        /** CSHundredSceneOp Id */
        Id?: (number|null);

        /** CSHundredSceneOp OpType */
        OpType?: (number|null);

        /** CSHundredSceneOp OpParams */
        OpParams?: (number[]|null);

        /** CSHundredSceneOp ApkVer */
        ApkVer?: (number|null);

        /** CSHundredSceneOp ResVer */
        ResVer?: (number|null);
    }

    /** Represents a CSHundredSceneOp. */
    class CSHundredSceneOp implements ICSHundredSceneOp {

        /**
         * Constructs a new CSHundredSceneOp.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSHundredSceneOp);

        /** CSHundredSceneOp Id. */
        public Id: number;

        /** CSHundredSceneOp OpType. */
        public OpType: number;

        /** CSHundredSceneOp OpParams. */
        public OpParams: number[];

        /** CSHundredSceneOp ApkVer. */
        public ApkVer: number;

        /** CSHundredSceneOp ResVer. */
        public ResVer: number;

        /**
         * Encodes the specified CSHundredSceneOp message. Does not implicitly {@link gamehall.CSHundredSceneOp.verify|verify} messages.
         * @param m CSHundredSceneOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSHundredSceneOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSHundredSceneOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSHundredSceneOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSHundredSceneOp;
    }

    /** Properties of a SCHundredSceneOp. */
    interface ISCHundredSceneOp {

        /** SCHundredSceneOp OpCode */
        OpCode?: (gamehall.OpResultCode_Hundred|null);

        /** SCHundredSceneOp Id */
        Id?: (number|null);

        /** SCHundredSceneOp OpType */
        OpType?: (number|null);

        /** SCHundredSceneOp OpParams */
        OpParams?: (number[]|null);

        /** SCHundredSceneOp MinApkVer */
        MinApkVer?: (number|null);

        /** SCHundredSceneOp LatestApkVer */
        LatestApkVer?: (number|null);

        /** SCHundredSceneOp MinResVer */
        MinResVer?: (number|null);

        /** SCHundredSceneOp LatestResVer */
        LatestResVer?: (number|null);
    }

    /** Represents a SCHundredSceneOp. */
    class SCHundredSceneOp implements ISCHundredSceneOp {

        /**
         * Constructs a new SCHundredSceneOp.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCHundredSceneOp);

        /** SCHundredSceneOp OpCode. */
        public OpCode: gamehall.OpResultCode_Hundred;

        /** SCHundredSceneOp Id. */
        public Id: number;

        /** SCHundredSceneOp OpType. */
        public OpType: number;

        /** SCHundredSceneOp OpParams. */
        public OpParams: number[];

        /** SCHundredSceneOp MinApkVer. */
        public MinApkVer: number;

        /** SCHundredSceneOp LatestApkVer. */
        public LatestApkVer: number;

        /** SCHundredSceneOp MinResVer. */
        public MinResVer: number;

        /** SCHundredSceneOp LatestResVer. */
        public LatestResVer: number;

        /**
         * Encodes the specified SCHundredSceneOp message. Does not implicitly {@link gamehall.SCHundredSceneOp.verify|verify} messages.
         * @param m SCHundredSceneOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCHundredSceneOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCHundredSceneOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCHundredSceneOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCHundredSceneOp;
    }

    /** Properties of a CSHundredSceneGetPlayerNum. */
    interface ICSHundredSceneGetPlayerNum {

        /** CSHundredSceneGetPlayerNum GameId */
        GameId?: (number|null);

        /** CSHundredSceneGetPlayerNum GameModel */
        GameModel?: (number|null);
    }

    /** Represents a CSHundredSceneGetPlayerNum. */
    class CSHundredSceneGetPlayerNum implements ICSHundredSceneGetPlayerNum {

        /**
         * Constructs a new CSHundredSceneGetPlayerNum.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSHundredSceneGetPlayerNum);

        /** CSHundredSceneGetPlayerNum GameId. */
        public GameId: number;

        /** CSHundredSceneGetPlayerNum GameModel. */
        public GameModel: number;

        /**
         * Encodes the specified CSHundredSceneGetPlayerNum message. Does not implicitly {@link gamehall.CSHundredSceneGetPlayerNum.verify|verify} messages.
         * @param m CSHundredSceneGetPlayerNum message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSHundredSceneGetPlayerNum, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSHundredSceneGetPlayerNum message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSHundredSceneGetPlayerNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSHundredSceneGetPlayerNum;
    }

    /** Properties of a SCHundredSceneGetPlayerNum. */
    interface ISCHundredSceneGetPlayerNum {

        /** SCHundredSceneGetPlayerNum Nums */
        Nums?: (number[]|null);
    }

    /** Represents a SCHundredSceneGetPlayerNum. */
    class SCHundredSceneGetPlayerNum implements ISCHundredSceneGetPlayerNum {

        /**
         * Constructs a new SCHundredSceneGetPlayerNum.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCHundredSceneGetPlayerNum);

        /** SCHundredSceneGetPlayerNum Nums. */
        public Nums: number[];

        /**
         * Encodes the specified SCHundredSceneGetPlayerNum message. Does not implicitly {@link gamehall.SCHundredSceneGetPlayerNum.verify|verify} messages.
         * @param m SCHundredSceneGetPlayerNum message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCHundredSceneGetPlayerNum, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCHundredSceneGetPlayerNum message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCHundredSceneGetPlayerNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCHundredSceneGetPlayerNum;
    }

    /** Properties of a CSHundredSceneGetGameJackpot. */
    interface ICSHundredSceneGetGameJackpot {
    }

    /** Represents a CSHundredSceneGetGameJackpot. */
    class CSHundredSceneGetGameJackpot implements ICSHundredSceneGetGameJackpot {

        /**
         * Constructs a new CSHundredSceneGetGameJackpot.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSHundredSceneGetGameJackpot);

        /**
         * Encodes the specified CSHundredSceneGetGameJackpot message. Does not implicitly {@link gamehall.CSHundredSceneGetGameJackpot.verify|verify} messages.
         * @param m CSHundredSceneGetGameJackpot message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSHundredSceneGetGameJackpot, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSHundredSceneGetGameJackpot message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSHundredSceneGetGameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSHundredSceneGetGameJackpot;
    }

    /** Properties of a GameJackpotFundInfo. */
    interface IGameJackpotFundInfo {

        /** GameJackpotFundInfo GameFreeId */
        GameFreeId?: (number|null);

        /** GameJackpotFundInfo JackPotFund */
        JackPotFund?: (number|Long|null);
    }

    /** Represents a GameJackpotFundInfo. */
    class GameJackpotFundInfo implements IGameJackpotFundInfo {

        /**
         * Constructs a new GameJackpotFundInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IGameJackpotFundInfo);

        /** GameJackpotFundInfo GameFreeId. */
        public GameFreeId: number;

        /** GameJackpotFundInfo JackPotFund. */
        public JackPotFund: (number|Long);

        /**
         * Encodes the specified GameJackpotFundInfo message. Does not implicitly {@link gamehall.GameJackpotFundInfo.verify|verify} messages.
         * @param m GameJackpotFundInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IGameJackpotFundInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameJackpotFundInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameJackpotFundInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.GameJackpotFundInfo;
    }

    /** Properties of a SCHundredSceneGetGameJackpot. */
    interface ISCHundredSceneGetGameJackpot {

        /** SCHundredSceneGetGameJackpot GameJackpotFund */
        GameJackpotFund?: (gamehall.IGameJackpotFundInfo[]|null);
    }

    /** Represents a SCHundredSceneGetGameJackpot. */
    class SCHundredSceneGetGameJackpot implements ISCHundredSceneGetGameJackpot {

        /**
         * Constructs a new SCHundredSceneGetGameJackpot.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCHundredSceneGetGameJackpot);

        /** SCHundredSceneGetGameJackpot GameJackpotFund. */
        public GameJackpotFund: gamehall.IGameJackpotFundInfo[];

        /**
         * Encodes the specified SCHundredSceneGetGameJackpot message. Does not implicitly {@link gamehall.SCHundredSceneGetGameJackpot.verify|verify} messages.
         * @param m SCHundredSceneGetGameJackpot message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCHundredSceneGetGameJackpot, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCHundredSceneGetGameJackpot message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCHundredSceneGetGameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCHundredSceneGetGameJackpot;
    }

    /** Properties of a BroadcastGameJackpot. */
    interface IBroadcastGameJackpot {

        /** BroadcastGameJackpot JackpotFund */
        JackpotFund?: ((number|Long)[]|null);

        /** BroadcastGameJackpot GameFreeId */
        GameFreeId?: (number|null);
    }

    /** Represents a BroadcastGameJackpot. */
    class BroadcastGameJackpot implements IBroadcastGameJackpot {

        /**
         * Constructs a new BroadcastGameJackpot.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IBroadcastGameJackpot);

        /** BroadcastGameJackpot JackpotFund. */
        public JackpotFund: (number|Long)[];

        /** BroadcastGameJackpot GameFreeId. */
        public GameFreeId: number;

        /**
         * Encodes the specified BroadcastGameJackpot message. Does not implicitly {@link gamehall.BroadcastGameJackpot.verify|verify} messages.
         * @param m BroadcastGameJackpot message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IBroadcastGameJackpot, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastGameJackpot message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BroadcastGameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.BroadcastGameJackpot;
    }

    /** Properties of a CSHundredSceneGetHistoryInfo. */
    interface ICSHundredSceneGetHistoryInfo {

        /** CSHundredSceneGetHistoryInfo GameId */
        GameId?: (number|null);

        /** CSHundredSceneGetHistoryInfo GameHistoryModel */
        GameHistoryModel?: (number|null);
    }

    /** Represents a CSHundredSceneGetHistoryInfo. */
    class CSHundredSceneGetHistoryInfo implements ICSHundredSceneGetHistoryInfo {

        /**
         * Constructs a new CSHundredSceneGetHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ICSHundredSceneGetHistoryInfo);

        /** CSHundredSceneGetHistoryInfo GameId. */
        public GameId: number;

        /** CSHundredSceneGetHistoryInfo GameHistoryModel. */
        public GameHistoryModel: number;

        /**
         * Encodes the specified CSHundredSceneGetHistoryInfo message. Does not implicitly {@link gamehall.CSHundredSceneGetHistoryInfo.verify|verify} messages.
         * @param m CSHundredSceneGetHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ICSHundredSceneGetHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSHundredSceneGetHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSHundredSceneGetHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.CSHundredSceneGetHistoryInfo;
    }

    /** Properties of a GameHistoryInfo. */
    interface IGameHistoryInfo {

        /** GameHistoryInfo GameNumber */
        GameNumber?: (string|null);

        /** GameHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** GameHistoryInfo Multiple */
        Multiple?: (number|Long|null);

        /** GameHistoryInfo Hash */
        Hash?: (string|null);
    }

    /** Represents a GameHistoryInfo. */
    class GameHistoryInfo implements IGameHistoryInfo {

        /**
         * Constructs a new GameHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IGameHistoryInfo);

        /** GameHistoryInfo GameNumber. */
        public GameNumber: string;

        /** GameHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** GameHistoryInfo Multiple. */
        public Multiple: (number|Long);

        /** GameHistoryInfo Hash. */
        public Hash: string;

        /**
         * Encodes the specified GameHistoryInfo message. Does not implicitly {@link gamehall.GameHistoryInfo.verify|verify} messages.
         * @param m GameHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IGameHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.GameHistoryInfo;
    }

    /** Properties of a PlayerHistoryInfo. */
    interface IPlayerHistoryInfo {

        /** PlayerHistoryInfo SpinID */
        SpinID?: (string|null);

        /** PlayerHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** PlayerHistoryInfo TotalBetValue */
        TotalBetValue?: (number|Long|null);

        /** PlayerHistoryInfo TotalPriceValue */
        TotalPriceValue?: (number|Long|null);

        /** PlayerHistoryInfo IsFree */
        IsFree?: (boolean|null);

        /** PlayerHistoryInfo TotalBonusValue */
        TotalBonusValue?: (number|Long|null);

        /** PlayerHistoryInfo Multiple */
        Multiple?: (number|Long|null);
    }

    /** Represents a PlayerHistoryInfo. */
    class PlayerHistoryInfo implements IPlayerHistoryInfo {

        /**
         * Constructs a new PlayerHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IPlayerHistoryInfo);

        /** PlayerHistoryInfo SpinID. */
        public SpinID: string;

        /** PlayerHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** PlayerHistoryInfo TotalBetValue. */
        public TotalBetValue: (number|Long);

        /** PlayerHistoryInfo TotalPriceValue. */
        public TotalPriceValue: (number|Long);

        /** PlayerHistoryInfo IsFree. */
        public IsFree: boolean;

        /** PlayerHistoryInfo TotalBonusValue. */
        public TotalBonusValue: (number|Long);

        /** PlayerHistoryInfo Multiple. */
        public Multiple: (number|Long);

        /**
         * Encodes the specified PlayerHistoryInfo message. Does not implicitly {@link gamehall.PlayerHistoryInfo.verify|verify} messages.
         * @param m PlayerHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IPlayerHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.PlayerHistoryInfo;
    }

    /** Properties of a SCPlayerHistory. */
    interface ISCPlayerHistory {

        /** SCPlayerHistory PlayerHistory */
        PlayerHistory?: (gamehall.IPlayerHistoryInfo[]|null);

        /** SCPlayerHistory GameHistory */
        GameHistory?: (gamehall.IGameHistoryInfo[]|null);
    }

    /** Represents a SCPlayerHistory. */
    class SCPlayerHistory implements ISCPlayerHistory {

        /**
         * Constructs a new SCPlayerHistory.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCPlayerHistory);

        /** SCPlayerHistory PlayerHistory. */
        public PlayerHistory: gamehall.IPlayerHistoryInfo[];

        /** SCPlayerHistory GameHistory. */
        public GameHistory: gamehall.IGameHistoryInfo[];

        /**
         * Encodes the specified SCPlayerHistory message. Does not implicitly {@link gamehall.SCPlayerHistory.verify|verify} messages.
         * @param m SCPlayerHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCPlayerHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCPlayerHistory;
    }

    /** Properties of a BigWinHistoryInfo. */
    interface IBigWinHistoryInfo {

        /** BigWinHistoryInfo SpinID */
        SpinID?: (string|null);

        /** BigWinHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** BigWinHistoryInfo BaseBet */
        BaseBet?: (number|Long|null);

        /** BigWinHistoryInfo PriceValue */
        PriceValue?: (number|Long|null);

        /** BigWinHistoryInfo UserName */
        UserName?: (string|null);

        /** BigWinHistoryInfo IsVirtualData */
        IsVirtualData?: (boolean|null);

        /** BigWinHistoryInfo TotalBet */
        TotalBet?: (number|Long|null);

        /** BigWinHistoryInfo Cards */
        Cards?: (number[]|null);
    }

    /** Represents a BigWinHistoryInfo. */
    class BigWinHistoryInfo implements IBigWinHistoryInfo {

        /**
         * Constructs a new BigWinHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.IBigWinHistoryInfo);

        /** BigWinHistoryInfo SpinID. */
        public SpinID: string;

        /** BigWinHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** BigWinHistoryInfo BaseBet. */
        public BaseBet: (number|Long);

        /** BigWinHistoryInfo PriceValue. */
        public PriceValue: (number|Long);

        /** BigWinHistoryInfo UserName. */
        public UserName: string;

        /** BigWinHistoryInfo IsVirtualData. */
        public IsVirtualData: boolean;

        /** BigWinHistoryInfo TotalBet. */
        public TotalBet: (number|Long);

        /** BigWinHistoryInfo Cards. */
        public Cards: number[];

        /**
         * Encodes the specified BigWinHistoryInfo message. Does not implicitly {@link gamehall.BigWinHistoryInfo.verify|verify} messages.
         * @param m BigWinHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.IBigWinHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BigWinHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BigWinHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.BigWinHistoryInfo;
    }

    /** Properties of a SCBigWinHistory. */
    interface ISCBigWinHistory {

        /** SCBigWinHistory BigWinHistory */
        BigWinHistory?: (gamehall.IBigWinHistoryInfo[]|null);

        /** SCBigWinHistory GameId */
        GameId?: (number|null);
    }

    /** Represents a SCBigWinHistory. */
    class SCBigWinHistory implements ISCBigWinHistory {

        /**
         * Constructs a new SCBigWinHistory.
         * @param [p] Properties to set
         */
        constructor(p?: gamehall.ISCBigWinHistory);

        /** SCBigWinHistory BigWinHistory. */
        public BigWinHistory: gamehall.IBigWinHistoryInfo[];

        /** SCBigWinHistory GameId. */
        public GameId: number;

        /**
         * Encodes the specified SCBigWinHistory message. Does not implicitly {@link gamehall.SCBigWinHistory.verify|verify} messages.
         * @param m SCBigWinHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gamehall.ISCBigWinHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCBigWinHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCBigWinHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gamehall.SCBigWinHistory;
    }
}
