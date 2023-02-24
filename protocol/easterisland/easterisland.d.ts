// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace easterisland. */
export namespace easterisland {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_CoinNotEnough = 1056
    }

    /** EasterIslandPacketID enum. */
    enum EasterIslandPacketID {
        PACKET_EasterIsland_ZERO = 0,
        PACKET_SC_EASTERISLAND_ROOMINFO = 5200,
        PACKET_CS_EASTERISLAND_PLAYEROP = 5201,
        PACKET_SC_EASTERISLAND_PLAYEROP = 5202,
        PACKET_SC_EASTERISLAND_ROOMSTATE = 5203,
        PACKET_SC_EASTERISLAND_GAMEBILLED = 5204,
        PACKET_SC_EASTERISLAND_PLAYERHISTORY = 5205,
        PACKET_SC_EASTERISLAND_BIGWINHISTORY = 5206
    }

    /** Properties of an EasterIslandPlayerData. */
    interface IEasterIslandPlayerData {

        /** EasterIslandPlayerData Name */
        Name?: (string|null);

        /** EasterIslandPlayerData SnId */
        SnId?: (number|null);

        /** EasterIslandPlayerData Head */
        Head?: (number|null);

        /** EasterIslandPlayerData Sex */
        Sex?: (number|null);

        /** EasterIslandPlayerData Coin */
        Coin?: (number|Long|null);

        /** EasterIslandPlayerData HeadOutLine */
        HeadOutLine?: (number|null);

        /** EasterIslandPlayerData VIP */
        VIP?: (number|null);

        /** EasterIslandPlayerData Params */
        Params?: (string[]|null);
    }

    /** Represents an EasterIslandPlayerData. */
    class EasterIslandPlayerData implements IEasterIslandPlayerData {

        /**
         * Constructs a new EasterIslandPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.IEasterIslandPlayerData);

        /** EasterIslandPlayerData Name. */
        public Name: string;

        /** EasterIslandPlayerData SnId. */
        public SnId: number;

        /** EasterIslandPlayerData Head. */
        public Head: number;

        /** EasterIslandPlayerData Sex. */
        public Sex: number;

        /** EasterIslandPlayerData Coin. */
        public Coin: (number|Long);

        /** EasterIslandPlayerData HeadOutLine. */
        public HeadOutLine: number;

        /** EasterIslandPlayerData VIP. */
        public VIP: number;

        /** EasterIslandPlayerData Params. */
        public Params: string[];

        /**
         * Encodes the specified EasterIslandPlayerData message. Does not implicitly {@link easterisland.EasterIslandPlayerData.verify|verify} messages.
         * @param m EasterIslandPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.IEasterIslandPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EasterIslandPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EasterIslandPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.EasterIslandPlayerData;
    }

    /** Properties of an EasterIslandBonusGameInfo. */
    interface IEasterIslandBonusGameInfo {

        /** EasterIslandBonusGameInfo BonusData */
        BonusData?: ((number|Long)[]|null);

        /** EasterIslandBonusGameInfo TotalPrizeValue */
        TotalPrizeValue?: (number|Long|null);

        /** EasterIslandBonusGameInfo Mutiplier */
        Mutiplier?: (number|null);

        /** EasterIslandBonusGameInfo DataMultiplier */
        DataMultiplier?: (number|Long|null);
    }

    /** Represents an EasterIslandBonusGameInfo. */
    class EasterIslandBonusGameInfo implements IEasterIslandBonusGameInfo {

        /**
         * Constructs a new EasterIslandBonusGameInfo.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.IEasterIslandBonusGameInfo);

        /** EasterIslandBonusGameInfo BonusData. */
        public BonusData: (number|Long)[];

        /** EasterIslandBonusGameInfo TotalPrizeValue. */
        public TotalPrizeValue: (number|Long);

        /** EasterIslandBonusGameInfo Mutiplier. */
        public Mutiplier: number;

        /** EasterIslandBonusGameInfo DataMultiplier. */
        public DataMultiplier: (number|Long);

        /**
         * Encodes the specified EasterIslandBonusGameInfo message. Does not implicitly {@link easterisland.EasterIslandBonusGameInfo.verify|verify} messages.
         * @param m EasterIslandBonusGameInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.IEasterIslandBonusGameInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EasterIslandBonusGameInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EasterIslandBonusGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.EasterIslandBonusGameInfo;
    }

    /** Properties of a SCEasterIslandRoomInfo. */
    interface ISCEasterIslandRoomInfo {

        /** SCEasterIslandRoomInfo RoomId */
        RoomId?: (number|null);

        /** SCEasterIslandRoomInfo Creator */
        Creator?: (number|null);

        /** SCEasterIslandRoomInfo GameId */
        GameId?: (number|null);

        /** SCEasterIslandRoomInfo RoomMode */
        RoomMode?: (number|null);

        /** SCEasterIslandRoomInfo Params */
        Params?: (number[]|null);

        /** SCEasterIslandRoomInfo State */
        State?: (number|null);

        /** SCEasterIslandRoomInfo BetLines */
        BetLines?: ((number|Long)[]|null);

        /** SCEasterIslandRoomInfo Chip */
        Chip?: (number|null);

        /** SCEasterIslandRoomInfo Players */
        Players?: (easterisland.IEasterIslandPlayerData[]|null);

        /** SCEasterIslandRoomInfo FreeTimes */
        FreeTimes?: (number|null);

        /** SCEasterIslandRoomInfo Jackpot */
        Jackpot?: (number|Long|null);

        /** SCEasterIslandRoomInfo TotalPriceBonus */
        TotalPriceBonus?: (number|Long|null);

        /** SCEasterIslandRoomInfo SpinID */
        SpinID?: (number|Long|null);

        /** SCEasterIslandRoomInfo ParamsEx */
        ParamsEx?: (number[]|null);

        /** SCEasterIslandRoomInfo BonusGame */
        BonusGame?: (easterisland.IEasterIslandBonusGameInfo|null);

        /** SCEasterIslandRoomInfo BonusX */
        BonusX?: (number[]|null);

        /** SCEasterIslandRoomInfo SceneType */
        SceneType?: (number|null);

        /** SCEasterIslandRoomInfo GameFreeId */
        GameFreeId?: (number|null);

        /** SCEasterIslandRoomInfo BilledData */
        BilledData?: (easterisland.IGameBilledData|null);
    }

    /** Represents a SCEasterIslandRoomInfo. */
    class SCEasterIslandRoomInfo implements ISCEasterIslandRoomInfo {

        /**
         * Constructs a new SCEasterIslandRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.ISCEasterIslandRoomInfo);

        /** SCEasterIslandRoomInfo RoomId. */
        public RoomId: number;

        /** SCEasterIslandRoomInfo Creator. */
        public Creator: number;

        /** SCEasterIslandRoomInfo GameId. */
        public GameId: number;

        /** SCEasterIslandRoomInfo RoomMode. */
        public RoomMode: number;

        /** SCEasterIslandRoomInfo Params. */
        public Params: number[];

        /** SCEasterIslandRoomInfo State. */
        public State: number;

        /** SCEasterIslandRoomInfo BetLines. */
        public BetLines: (number|Long)[];

        /** SCEasterIslandRoomInfo Chip. */
        public Chip: number;

        /** SCEasterIslandRoomInfo Players. */
        public Players: easterisland.IEasterIslandPlayerData[];

        /** SCEasterIslandRoomInfo FreeTimes. */
        public FreeTimes: number;

        /** SCEasterIslandRoomInfo Jackpot. */
        public Jackpot: (number|Long);

        /** SCEasterIslandRoomInfo TotalPriceBonus. */
        public TotalPriceBonus: (number|Long);

        /** SCEasterIslandRoomInfo SpinID. */
        public SpinID: (number|Long);

        /** SCEasterIslandRoomInfo ParamsEx. */
        public ParamsEx: number[];

        /** SCEasterIslandRoomInfo BonusGame. */
        public BonusGame?: (easterisland.IEasterIslandBonusGameInfo|null);

        /** SCEasterIslandRoomInfo BonusX. */
        public BonusX: number[];

        /** SCEasterIslandRoomInfo SceneType. */
        public SceneType: number;

        /** SCEasterIslandRoomInfo GameFreeId. */
        public GameFreeId: number;

        /** SCEasterIslandRoomInfo BilledData. */
        public BilledData?: (easterisland.IGameBilledData|null);

        /**
         * Encodes the specified SCEasterIslandRoomInfo message. Does not implicitly {@link easterisland.SCEasterIslandRoomInfo.verify|verify} messages.
         * @param m SCEasterIslandRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.ISCEasterIslandRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCEasterIslandRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCEasterIslandRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.SCEasterIslandRoomInfo;
    }

    /** Properties of a CSEasterIslandOp. */
    interface ICSEasterIslandOp {

        /** CSEasterIslandOp OpCode */
        OpCode?: (number|null);

        /** CSEasterIslandOp Params */
        Params?: ((number|Long)[]|null);
    }

    /** Represents a CSEasterIslandOp. */
    class CSEasterIslandOp implements ICSEasterIslandOp {

        /**
         * Constructs a new CSEasterIslandOp.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.ICSEasterIslandOp);

        /** CSEasterIslandOp OpCode. */
        public OpCode: number;

        /** CSEasterIslandOp Params. */
        public Params: (number|Long)[];

        /**
         * Encodes the specified CSEasterIslandOp message. Does not implicitly {@link easterisland.CSEasterIslandOp.verify|verify} messages.
         * @param m CSEasterIslandOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.ICSEasterIslandOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSEasterIslandOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSEasterIslandOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.CSEasterIslandOp;
    }

    /** Properties of a SCEasterIslandOp. */
    interface ISCEasterIslandOp {

        /** SCEasterIslandOp SnId */
        SnId?: (number|null);

        /** SCEasterIslandOp OpCode */
        OpCode?: (number|null);

        /** SCEasterIslandOp Params */
        Params?: ((number|Long)[]|null);

        /** SCEasterIslandOp OpRetCode */
        OpRetCode?: (easterisland.OpResultCode|null);
    }

    /** Represents a SCEasterIslandOp. */
    class SCEasterIslandOp implements ISCEasterIslandOp {

        /**
         * Constructs a new SCEasterIslandOp.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.ISCEasterIslandOp);

        /** SCEasterIslandOp SnId. */
        public SnId: number;

        /** SCEasterIslandOp OpCode. */
        public OpCode: number;

        /** SCEasterIslandOp Params. */
        public Params: (number|Long)[];

        /** SCEasterIslandOp OpRetCode. */
        public OpRetCode: easterisland.OpResultCode;

        /**
         * Encodes the specified SCEasterIslandOp message. Does not implicitly {@link easterisland.SCEasterIslandOp.verify|verify} messages.
         * @param m SCEasterIslandOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.ISCEasterIslandOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCEasterIslandOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCEasterIslandOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.SCEasterIslandOp;
    }

    /** Properties of an EasterIslandLinesInfo. */
    interface IEasterIslandLinesInfo {

        /** EasterIslandLinesInfo LineId */
        LineId?: (number|null);

        /** EasterIslandLinesInfo PrizeId */
        PrizeId?: (number|null);

        /** EasterIslandLinesInfo Position */
        Position?: (number[]|null);

        /** EasterIslandLinesInfo PrizeValue */
        PrizeValue?: (number|Long|null);
    }

    /** Represents an EasterIslandLinesInfo. */
    class EasterIslandLinesInfo implements IEasterIslandLinesInfo {

        /**
         * Constructs a new EasterIslandLinesInfo.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.IEasterIslandLinesInfo);

        /** EasterIslandLinesInfo LineId. */
        public LineId: number;

        /** EasterIslandLinesInfo PrizeId. */
        public PrizeId: number;

        /** EasterIslandLinesInfo Position. */
        public Position: number[];

        /** EasterIslandLinesInfo PrizeValue. */
        public PrizeValue: (number|Long);

        /**
         * Encodes the specified EasterIslandLinesInfo message. Does not implicitly {@link easterisland.EasterIslandLinesInfo.verify|verify} messages.
         * @param m EasterIslandLinesInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.IEasterIslandLinesInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EasterIslandLinesInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EasterIslandLinesInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.EasterIslandLinesInfo;
    }

    /** Properties of a GameBilledData. */
    interface IGameBilledData {

        /** GameBilledData SpinID */
        SpinID?: (number|Long|null);

        /** GameBilledData SlotsData */
        SlotsData?: (number[]|null);

        /** GameBilledData AddFreeSpin */
        AddFreeSpin?: (number|null);

        /** GameBilledData IsJackpot */
        IsJackpot?: (boolean|null);

        /** GameBilledData PrizeLines */
        PrizeLines?: (easterisland.IEasterIslandLinesInfo[]|null);

        /** GameBilledData TotalPrizeValue */
        TotalPrizeValue?: (number|Long|null);

        /** GameBilledData TotalPaylinePrizeValue */
        TotalPaylinePrizeValue?: (number|Long|null);

        /** GameBilledData TotalJackpotValue */
        TotalJackpotValue?: (number|Long|null);

        /** GameBilledData Balance */
        Balance?: (number|Long|null);

        /** GameBilledData FreeSpins */
        FreeSpins?: (number|null);

        /** GameBilledData Jackpot */
        Jackpot?: (number|Long|null);

        /** GameBilledData BonusX */
        BonusX?: (number[]|null);

        /** GameBilledData BonusGame */
        BonusGame?: (easterisland.IEasterIslandBonusGameInfo|null);

        /** GameBilledData ResponseStatus */
        ResponseStatus?: (number|Long|null);
    }

    /** Represents a GameBilledData. */
    class GameBilledData implements IGameBilledData {

        /**
         * Constructs a new GameBilledData.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.IGameBilledData);

        /** GameBilledData SpinID. */
        public SpinID: (number|Long);

        /** GameBilledData SlotsData. */
        public SlotsData: number[];

        /** GameBilledData AddFreeSpin. */
        public AddFreeSpin: number;

        /** GameBilledData IsJackpot. */
        public IsJackpot: boolean;

        /** GameBilledData PrizeLines. */
        public PrizeLines: easterisland.IEasterIslandLinesInfo[];

        /** GameBilledData TotalPrizeValue. */
        public TotalPrizeValue: (number|Long);

        /** GameBilledData TotalPaylinePrizeValue. */
        public TotalPaylinePrizeValue: (number|Long);

        /** GameBilledData TotalJackpotValue. */
        public TotalJackpotValue: (number|Long);

        /** GameBilledData Balance. */
        public Balance: (number|Long);

        /** GameBilledData FreeSpins. */
        public FreeSpins: number;

        /** GameBilledData Jackpot. */
        public Jackpot: (number|Long);

        /** GameBilledData BonusX. */
        public BonusX: number[];

        /** GameBilledData BonusGame. */
        public BonusGame?: (easterisland.IEasterIslandBonusGameInfo|null);

        /** GameBilledData ResponseStatus. */
        public ResponseStatus: (number|Long);

        /**
         * Encodes the specified GameBilledData message. Does not implicitly {@link easterisland.GameBilledData.verify|verify} messages.
         * @param m GameBilledData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.IGameBilledData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBilledData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameBilledData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.GameBilledData;
    }

    /** Properties of a SCEasterIslandGameBilled. */
    interface ISCEasterIslandGameBilled {

        /** SCEasterIslandGameBilled BilledData */
        BilledData?: (easterisland.IGameBilledData|null);
    }

    /** Represents a SCEasterIslandGameBilled. */
    class SCEasterIslandGameBilled implements ISCEasterIslandGameBilled {

        /**
         * Constructs a new SCEasterIslandGameBilled.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.ISCEasterIslandGameBilled);

        /** SCEasterIslandGameBilled BilledData. */
        public BilledData?: (easterisland.IGameBilledData|null);

        /**
         * Encodes the specified SCEasterIslandGameBilled message. Does not implicitly {@link easterisland.SCEasterIslandGameBilled.verify|verify} messages.
         * @param m SCEasterIslandGameBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.ISCEasterIslandGameBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCEasterIslandGameBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCEasterIslandGameBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.SCEasterIslandGameBilled;
    }

    /** Properties of an EasterIslandPlayerHistoryInfo. */
    interface IEasterIslandPlayerHistoryInfo {

        /** EasterIslandPlayerHistoryInfo SpinID */
        SpinID?: (string|null);

        /** EasterIslandPlayerHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** EasterIslandPlayerHistoryInfo TotalBetValue */
        TotalBetValue?: (number|Long|null);

        /** EasterIslandPlayerHistoryInfo TotalPriceValue */
        TotalPriceValue?: (number|Long|null);

        /** EasterIslandPlayerHistoryInfo IsFree */
        IsFree?: (boolean|null);

        /** EasterIslandPlayerHistoryInfo TotalBonusValue */
        TotalBonusValue?: (number|Long|null);
    }

    /** Represents an EasterIslandPlayerHistoryInfo. */
    class EasterIslandPlayerHistoryInfo implements IEasterIslandPlayerHistoryInfo {

        /**
         * Constructs a new EasterIslandPlayerHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.IEasterIslandPlayerHistoryInfo);

        /** EasterIslandPlayerHistoryInfo SpinID. */
        public SpinID: string;

        /** EasterIslandPlayerHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** EasterIslandPlayerHistoryInfo TotalBetValue. */
        public TotalBetValue: (number|Long);

        /** EasterIslandPlayerHistoryInfo TotalPriceValue. */
        public TotalPriceValue: (number|Long);

        /** EasterIslandPlayerHistoryInfo IsFree. */
        public IsFree: boolean;

        /** EasterIslandPlayerHistoryInfo TotalBonusValue. */
        public TotalBonusValue: (number|Long);

        /**
         * Encodes the specified EasterIslandPlayerHistoryInfo message. Does not implicitly {@link easterisland.EasterIslandPlayerHistoryInfo.verify|verify} messages.
         * @param m EasterIslandPlayerHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.IEasterIslandPlayerHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EasterIslandPlayerHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EasterIslandPlayerHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.EasterIslandPlayerHistoryInfo;
    }

    /** Properties of a SCEasterIslandPlayerHistory. */
    interface ISCEasterIslandPlayerHistory {

        /** SCEasterIslandPlayerHistory PlayerHistory */
        PlayerHistory?: (easterisland.IEasterIslandPlayerHistoryInfo[]|null);
    }

    /** Represents a SCEasterIslandPlayerHistory. */
    class SCEasterIslandPlayerHistory implements ISCEasterIslandPlayerHistory {

        /**
         * Constructs a new SCEasterIslandPlayerHistory.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.ISCEasterIslandPlayerHistory);

        /** SCEasterIslandPlayerHistory PlayerHistory. */
        public PlayerHistory: easterisland.IEasterIslandPlayerHistoryInfo[];

        /**
         * Encodes the specified SCEasterIslandPlayerHistory message. Does not implicitly {@link easterisland.SCEasterIslandPlayerHistory.verify|verify} messages.
         * @param m SCEasterIslandPlayerHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.ISCEasterIslandPlayerHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCEasterIslandPlayerHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCEasterIslandPlayerHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.SCEasterIslandPlayerHistory;
    }

    /** Properties of an EasterIslandBigWinHistoryInfo. */
    interface IEasterIslandBigWinHistoryInfo {

        /** EasterIslandBigWinHistoryInfo SpinID */
        SpinID?: (string|null);

        /** EasterIslandBigWinHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** EasterIslandBigWinHistoryInfo RoomID */
        RoomID?: (number|Long|null);

        /** EasterIslandBigWinHistoryInfo PriceValue */
        PriceValue?: (number|Long|null);

        /** EasterIslandBigWinHistoryInfo UserName */
        UserName?: (string|null);
    }

    /** Represents an EasterIslandBigWinHistoryInfo. */
    class EasterIslandBigWinHistoryInfo implements IEasterIslandBigWinHistoryInfo {

        /**
         * Constructs a new EasterIslandBigWinHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.IEasterIslandBigWinHistoryInfo);

        /** EasterIslandBigWinHistoryInfo SpinID. */
        public SpinID: string;

        /** EasterIslandBigWinHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** EasterIslandBigWinHistoryInfo RoomID. */
        public RoomID: (number|Long);

        /** EasterIslandBigWinHistoryInfo PriceValue. */
        public PriceValue: (number|Long);

        /** EasterIslandBigWinHistoryInfo UserName. */
        public UserName: string;

        /**
         * Encodes the specified EasterIslandBigWinHistoryInfo message. Does not implicitly {@link easterisland.EasterIslandBigWinHistoryInfo.verify|verify} messages.
         * @param m EasterIslandBigWinHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.IEasterIslandBigWinHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EasterIslandBigWinHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EasterIslandBigWinHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.EasterIslandBigWinHistoryInfo;
    }

    /** Properties of a SCEasterIslandBigWinHistory. */
    interface ISCEasterIslandBigWinHistory {

        /** SCEasterIslandBigWinHistory BigWinHistory */
        BigWinHistory?: (easterisland.IEasterIslandBigWinHistoryInfo[]|null);
    }

    /** Represents a SCEasterIslandBigWinHistory. */
    class SCEasterIslandBigWinHistory implements ISCEasterIslandBigWinHistory {

        /**
         * Constructs a new SCEasterIslandBigWinHistory.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.ISCEasterIslandBigWinHistory);

        /** SCEasterIslandBigWinHistory BigWinHistory. */
        public BigWinHistory: easterisland.IEasterIslandBigWinHistoryInfo[];

        /**
         * Encodes the specified SCEasterIslandBigWinHistory message. Does not implicitly {@link easterisland.SCEasterIslandBigWinHistory.verify|verify} messages.
         * @param m SCEasterIslandBigWinHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.ISCEasterIslandBigWinHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCEasterIslandBigWinHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCEasterIslandBigWinHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.SCEasterIslandBigWinHistory;
    }

    /** Properties of a SCEasterIslandRoomState. */
    interface ISCEasterIslandRoomState {

        /** SCEasterIslandRoomState State */
        State?: (number|null);
    }

    /** Represents a SCEasterIslandRoomState. */
    class SCEasterIslandRoomState implements ISCEasterIslandRoomState {

        /**
         * Constructs a new SCEasterIslandRoomState.
         * @param [p] Properties to set
         */
        constructor(p?: easterisland.ISCEasterIslandRoomState);

        /** SCEasterIslandRoomState State. */
        public State: number;

        /**
         * Encodes the specified SCEasterIslandRoomState message. Does not implicitly {@link easterisland.SCEasterIslandRoomState.verify|verify} messages.
         * @param m SCEasterIslandRoomState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: easterisland.ISCEasterIslandRoomState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCEasterIslandRoomState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCEasterIslandRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): easterisland.SCEasterIslandRoomState;
    }
}
