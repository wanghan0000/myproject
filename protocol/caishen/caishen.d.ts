// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace caishen. */
export namespace caishen {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_CoinNotEnough = 1056
    }

    /** CaiShenPacketID enum. */
    enum CaiShenPacketID {
        PACKET_CaiShen_ZERO = 0,
        PACKET_SC_CAISHEN_ROOMINFO = 5220,
        PACKET_CS_CAISHEN_PLAYEROP = 5221,
        PACKET_SC_CAISHEN_PLAYEROP = 5222,
        PACKET_SC_CAISHEN_ROOMSTATE = 5223,
        PACKET_SC_CAISHEN_GAMEBILLED = 5224,
        PACKET_SC_CAISHEN_PLAYERHISTORY = 5225,
        PACKET_SC_CAISHEN_BIGWINHISTORY = 5226,
        PACKET_SC_CAISHEN_GAMEJACKPOT = 5227
    }

    /** Properties of a CaiShenPlayerData. */
    interface ICaiShenPlayerData {

        /** CaiShenPlayerData Name */
        Name?: (string|null);

        /** CaiShenPlayerData SnId */
        SnId?: (number|null);

        /** CaiShenPlayerData Head */
        Head?: (number|null);

        /** CaiShenPlayerData Sex */
        Sex?: (number|null);

        /** CaiShenPlayerData Coin */
        Coin?: (number|Long|null);

        /** CaiShenPlayerData HeadOutLine */
        HeadOutLine?: (number|null);

        /** CaiShenPlayerData VIP */
        VIP?: (number|null);

        /** CaiShenPlayerData Params */
        Params?: (string[]|null);
    }

    /** Represents a CaiShenPlayerData. */
    class CaiShenPlayerData implements ICaiShenPlayerData {

        /**
         * Constructs a new CaiShenPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.ICaiShenPlayerData);

        /** CaiShenPlayerData Name. */
        public Name: string;

        /** CaiShenPlayerData SnId. */
        public SnId: number;

        /** CaiShenPlayerData Head. */
        public Head: number;

        /** CaiShenPlayerData Sex. */
        public Sex: number;

        /** CaiShenPlayerData Coin. */
        public Coin: (number|Long);

        /** CaiShenPlayerData HeadOutLine. */
        public HeadOutLine: number;

        /** CaiShenPlayerData VIP. */
        public VIP: number;

        /** CaiShenPlayerData Params. */
        public Params: string[];

        /**
         * Encodes the specified CaiShenPlayerData message. Does not implicitly {@link caishen.CaiShenPlayerData.verify|verify} messages.
         * @param m CaiShenPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.ICaiShenPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CaiShenPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CaiShenPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.CaiShenPlayerData;
    }

    /** Properties of a CaiShenBonusGameInfo. */
    interface ICaiShenBonusGameInfo {

        /** CaiShenBonusGameInfo BonusData */
        BonusData?: ((number|Long)[]|null);

        /** CaiShenBonusGameInfo TotalPrizeValue */
        TotalPrizeValue?: (number|Long|null);

        /** CaiShenBonusGameInfo Mutiplier */
        Mutiplier?: (number|null);

        /** CaiShenBonusGameInfo DataMultiplier */
        DataMultiplier?: (number|Long|null);
    }

    /** Represents a CaiShenBonusGameInfo. */
    class CaiShenBonusGameInfo implements ICaiShenBonusGameInfo {

        /**
         * Constructs a new CaiShenBonusGameInfo.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.ICaiShenBonusGameInfo);

        /** CaiShenBonusGameInfo BonusData. */
        public BonusData: (number|Long)[];

        /** CaiShenBonusGameInfo TotalPrizeValue. */
        public TotalPrizeValue: (number|Long);

        /** CaiShenBonusGameInfo Mutiplier. */
        public Mutiplier: number;

        /** CaiShenBonusGameInfo DataMultiplier. */
        public DataMultiplier: (number|Long);

        /**
         * Encodes the specified CaiShenBonusGameInfo message. Does not implicitly {@link caishen.CaiShenBonusGameInfo.verify|verify} messages.
         * @param m CaiShenBonusGameInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.ICaiShenBonusGameInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CaiShenBonusGameInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CaiShenBonusGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.CaiShenBonusGameInfo;
    }

    /** Properties of a SCCaiShenRoomInfo. */
    interface ISCCaiShenRoomInfo {

        /** SCCaiShenRoomInfo RoomId */
        RoomId?: (number|null);

        /** SCCaiShenRoomInfo Creator */
        Creator?: (number|null);

        /** SCCaiShenRoomInfo GameId */
        GameId?: (number|null);

        /** SCCaiShenRoomInfo RoomMode */
        RoomMode?: (number|null);

        /** SCCaiShenRoomInfo Params */
        Params?: (number[]|null);

        /** SCCaiShenRoomInfo State */
        State?: (number|null);

        /** SCCaiShenRoomInfo BetLines */
        BetLines?: ((number|Long)[]|null);

        /** SCCaiShenRoomInfo Chip */
        Chip?: (number|null);

        /** SCCaiShenRoomInfo Players */
        Players?: (caishen.ICaiShenPlayerData[]|null);

        /** SCCaiShenRoomInfo FreeTimes */
        FreeTimes?: (number|null);

        /** SCCaiShenRoomInfo Jackpot */
        Jackpot?: (number|Long|null);

        /** SCCaiShenRoomInfo TotalPriceBonus */
        TotalPriceBonus?: (number|Long|null);

        /** SCCaiShenRoomInfo SpinID */
        SpinID?: (number|Long|null);

        /** SCCaiShenRoomInfo ParamsEx */
        ParamsEx?: (number[]|null);

        /** SCCaiShenRoomInfo BonusGame */
        BonusGame?: (caishen.ICaiShenBonusGameInfo|null);

        /** SCCaiShenRoomInfo BonusX */
        BonusX?: (number[]|null);

        /** SCCaiShenRoomInfo GameFreeId */
        GameFreeId?: (number|null);

        /** SCCaiShenRoomInfo BilledData */
        BilledData?: (caishen.IGameBilledData|null);
    }

    /** Represents a SCCaiShenRoomInfo. */
    class SCCaiShenRoomInfo implements ISCCaiShenRoomInfo {

        /**
         * Constructs a new SCCaiShenRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.ISCCaiShenRoomInfo);

        /** SCCaiShenRoomInfo RoomId. */
        public RoomId: number;

        /** SCCaiShenRoomInfo Creator. */
        public Creator: number;

        /** SCCaiShenRoomInfo GameId. */
        public GameId: number;

        /** SCCaiShenRoomInfo RoomMode. */
        public RoomMode: number;

        /** SCCaiShenRoomInfo Params. */
        public Params: number[];

        /** SCCaiShenRoomInfo State. */
        public State: number;

        /** SCCaiShenRoomInfo BetLines. */
        public BetLines: (number|Long)[];

        /** SCCaiShenRoomInfo Chip. */
        public Chip: number;

        /** SCCaiShenRoomInfo Players. */
        public Players: caishen.ICaiShenPlayerData[];

        /** SCCaiShenRoomInfo FreeTimes. */
        public FreeTimes: number;

        /** SCCaiShenRoomInfo Jackpot. */
        public Jackpot: (number|Long);

        /** SCCaiShenRoomInfo TotalPriceBonus. */
        public TotalPriceBonus: (number|Long);

        /** SCCaiShenRoomInfo SpinID. */
        public SpinID: (number|Long);

        /** SCCaiShenRoomInfo ParamsEx. */
        public ParamsEx: number[];

        /** SCCaiShenRoomInfo BonusGame. */
        public BonusGame?: (caishen.ICaiShenBonusGameInfo|null);

        /** SCCaiShenRoomInfo BonusX. */
        public BonusX: number[];

        /** SCCaiShenRoomInfo GameFreeId. */
        public GameFreeId: number;

        /** SCCaiShenRoomInfo BilledData. */
        public BilledData?: (caishen.IGameBilledData|null);

        /**
         * Encodes the specified SCCaiShenRoomInfo message. Does not implicitly {@link caishen.SCCaiShenRoomInfo.verify|verify} messages.
         * @param m SCCaiShenRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.ISCCaiShenRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCaiShenRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCaiShenRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.SCCaiShenRoomInfo;
    }

    /** Properties of a CSCaiShenOp. */
    interface ICSCaiShenOp {

        /** CSCaiShenOp OpCode */
        OpCode?: (number|null);

        /** CSCaiShenOp Params */
        Params?: ((number|Long)[]|null);
    }

    /** Represents a CSCaiShenOp. */
    class CSCaiShenOp implements ICSCaiShenOp {

        /**
         * Constructs a new CSCaiShenOp.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.ICSCaiShenOp);

        /** CSCaiShenOp OpCode. */
        public OpCode: number;

        /** CSCaiShenOp Params. */
        public Params: (number|Long)[];

        /**
         * Encodes the specified CSCaiShenOp message. Does not implicitly {@link caishen.CSCaiShenOp.verify|verify} messages.
         * @param m CSCaiShenOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.ICSCaiShenOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCaiShenOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCaiShenOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.CSCaiShenOp;
    }

    /** Properties of a SCCaiShenOp. */
    interface ISCCaiShenOp {

        /** SCCaiShenOp SnId */
        SnId?: (number|null);

        /** SCCaiShenOp OpCode */
        OpCode?: (number|null);

        /** SCCaiShenOp Params */
        Params?: ((number|Long)[]|null);

        /** SCCaiShenOp OpRetCode */
        OpRetCode?: (caishen.OpResultCode|null);
    }

    /** Represents a SCCaiShenOp. */
    class SCCaiShenOp implements ISCCaiShenOp {

        /**
         * Constructs a new SCCaiShenOp.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.ISCCaiShenOp);

        /** SCCaiShenOp SnId. */
        public SnId: number;

        /** SCCaiShenOp OpCode. */
        public OpCode: number;

        /** SCCaiShenOp Params. */
        public Params: (number|Long)[];

        /** SCCaiShenOp OpRetCode. */
        public OpRetCode: caishen.OpResultCode;

        /**
         * Encodes the specified SCCaiShenOp message. Does not implicitly {@link caishen.SCCaiShenOp.verify|verify} messages.
         * @param m SCCaiShenOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.ISCCaiShenOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCaiShenOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCaiShenOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.SCCaiShenOp;
    }

    /** Properties of a CaiShenLinesInfo. */
    interface ICaiShenLinesInfo {

        /** CaiShenLinesInfo LineId */
        LineId?: (number|null);

        /** CaiShenLinesInfo PrizeId */
        PrizeId?: (number|null);

        /** CaiShenLinesInfo Position */
        Position?: (number[]|null);

        /** CaiShenLinesInfo PrizeValue */
        PrizeValue?: (number|Long|null);
    }

    /** Represents a CaiShenLinesInfo. */
    class CaiShenLinesInfo implements ICaiShenLinesInfo {

        /**
         * Constructs a new CaiShenLinesInfo.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.ICaiShenLinesInfo);

        /** CaiShenLinesInfo LineId. */
        public LineId: number;

        /** CaiShenLinesInfo PrizeId. */
        public PrizeId: number;

        /** CaiShenLinesInfo Position. */
        public Position: number[];

        /** CaiShenLinesInfo PrizeValue. */
        public PrizeValue: (number|Long);

        /**
         * Encodes the specified CaiShenLinesInfo message. Does not implicitly {@link caishen.CaiShenLinesInfo.verify|verify} messages.
         * @param m CaiShenLinesInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.ICaiShenLinesInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CaiShenLinesInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CaiShenLinesInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.CaiShenLinesInfo;
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
        PrizeLines?: (caishen.ICaiShenLinesInfo[]|null);

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
        BonusGame?: (caishen.ICaiShenBonusGameInfo|null);

        /** GameBilledData ResponseStatus */
        ResponseStatus?: (number|Long|null);
    }

    /** Represents a GameBilledData. */
    class GameBilledData implements IGameBilledData {

        /**
         * Constructs a new GameBilledData.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.IGameBilledData);

        /** GameBilledData SpinID. */
        public SpinID: (number|Long);

        /** GameBilledData SlotsData. */
        public SlotsData: number[];

        /** GameBilledData AddFreeSpin. */
        public AddFreeSpin: number;

        /** GameBilledData IsJackpot. */
        public IsJackpot: boolean;

        /** GameBilledData PrizeLines. */
        public PrizeLines: caishen.ICaiShenLinesInfo[];

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
        public BonusGame?: (caishen.ICaiShenBonusGameInfo|null);

        /** GameBilledData ResponseStatus. */
        public ResponseStatus: (number|Long);

        /**
         * Encodes the specified GameBilledData message. Does not implicitly {@link caishen.GameBilledData.verify|verify} messages.
         * @param m GameBilledData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.IGameBilledData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBilledData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameBilledData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.GameBilledData;
    }

    /** Properties of a SCCaiShenGameBilled. */
    interface ISCCaiShenGameBilled {

        /** SCCaiShenGameBilled BilledData */
        BilledData?: (caishen.IGameBilledData|null);
    }

    /** Represents a SCCaiShenGameBilled. */
    class SCCaiShenGameBilled implements ISCCaiShenGameBilled {

        /**
         * Constructs a new SCCaiShenGameBilled.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.ISCCaiShenGameBilled);

        /** SCCaiShenGameBilled BilledData. */
        public BilledData?: (caishen.IGameBilledData|null);

        /**
         * Encodes the specified SCCaiShenGameBilled message. Does not implicitly {@link caishen.SCCaiShenGameBilled.verify|verify} messages.
         * @param m SCCaiShenGameBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.ISCCaiShenGameBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCaiShenGameBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCaiShenGameBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.SCCaiShenGameBilled;
    }

    /** Properties of a CaiShenPlayerHistoryInfo. */
    interface ICaiShenPlayerHistoryInfo {

        /** CaiShenPlayerHistoryInfo SpinID */
        SpinID?: (string|null);

        /** CaiShenPlayerHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** CaiShenPlayerHistoryInfo TotalBetValue */
        TotalBetValue?: (number|Long|null);

        /** CaiShenPlayerHistoryInfo TotalPriceValue */
        TotalPriceValue?: (number|Long|null);

        /** CaiShenPlayerHistoryInfo IsFree */
        IsFree?: (boolean|null);

        /** CaiShenPlayerHistoryInfo TotalBonusValue */
        TotalBonusValue?: (number|Long|null);
    }

    /** Represents a CaiShenPlayerHistoryInfo. */
    class CaiShenPlayerHistoryInfo implements ICaiShenPlayerHistoryInfo {

        /**
         * Constructs a new CaiShenPlayerHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.ICaiShenPlayerHistoryInfo);

        /** CaiShenPlayerHistoryInfo SpinID. */
        public SpinID: string;

        /** CaiShenPlayerHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** CaiShenPlayerHistoryInfo TotalBetValue. */
        public TotalBetValue: (number|Long);

        /** CaiShenPlayerHistoryInfo TotalPriceValue. */
        public TotalPriceValue: (number|Long);

        /** CaiShenPlayerHistoryInfo IsFree. */
        public IsFree: boolean;

        /** CaiShenPlayerHistoryInfo TotalBonusValue. */
        public TotalBonusValue: (number|Long);

        /**
         * Encodes the specified CaiShenPlayerHistoryInfo message. Does not implicitly {@link caishen.CaiShenPlayerHistoryInfo.verify|verify} messages.
         * @param m CaiShenPlayerHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.ICaiShenPlayerHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CaiShenPlayerHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CaiShenPlayerHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.CaiShenPlayerHistoryInfo;
    }

    /** Properties of a SCCaiShenPlayerHistory. */
    interface ISCCaiShenPlayerHistory {

        /** SCCaiShenPlayerHistory PlayerHistory */
        PlayerHistory?: (caishen.ICaiShenPlayerHistoryInfo[]|null);
    }

    /** Represents a SCCaiShenPlayerHistory. */
    class SCCaiShenPlayerHistory implements ISCCaiShenPlayerHistory {

        /**
         * Constructs a new SCCaiShenPlayerHistory.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.ISCCaiShenPlayerHistory);

        /** SCCaiShenPlayerHistory PlayerHistory. */
        public PlayerHistory: caishen.ICaiShenPlayerHistoryInfo[];

        /**
         * Encodes the specified SCCaiShenPlayerHistory message. Does not implicitly {@link caishen.SCCaiShenPlayerHistory.verify|verify} messages.
         * @param m SCCaiShenPlayerHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.ISCCaiShenPlayerHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCaiShenPlayerHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCaiShenPlayerHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.SCCaiShenPlayerHistory;
    }

    /** Properties of a CaiShenBigWinHistoryInfo. */
    interface ICaiShenBigWinHistoryInfo {

        /** CaiShenBigWinHistoryInfo SpinID */
        SpinID?: (string|null);

        /** CaiShenBigWinHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** CaiShenBigWinHistoryInfo RoomID */
        RoomID?: (number|Long|null);

        /** CaiShenBigWinHistoryInfo PriceValue */
        PriceValue?: (number|Long|null);

        /** CaiShenBigWinHistoryInfo UserName */
        UserName?: (string|null);
    }

    /** Represents a CaiShenBigWinHistoryInfo. */
    class CaiShenBigWinHistoryInfo implements ICaiShenBigWinHistoryInfo {

        /**
         * Constructs a new CaiShenBigWinHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.ICaiShenBigWinHistoryInfo);

        /** CaiShenBigWinHistoryInfo SpinID. */
        public SpinID: string;

        /** CaiShenBigWinHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** CaiShenBigWinHistoryInfo RoomID. */
        public RoomID: (number|Long);

        /** CaiShenBigWinHistoryInfo PriceValue. */
        public PriceValue: (number|Long);

        /** CaiShenBigWinHistoryInfo UserName. */
        public UserName: string;

        /**
         * Encodes the specified CaiShenBigWinHistoryInfo message. Does not implicitly {@link caishen.CaiShenBigWinHistoryInfo.verify|verify} messages.
         * @param m CaiShenBigWinHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.ICaiShenBigWinHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CaiShenBigWinHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CaiShenBigWinHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.CaiShenBigWinHistoryInfo;
    }

    /** Properties of a SCCaiShenBigWinHistory. */
    interface ISCCaiShenBigWinHistory {

        /** SCCaiShenBigWinHistory BigWinHistory */
        BigWinHistory?: (caishen.ICaiShenBigWinHistoryInfo[]|null);
    }

    /** Represents a SCCaiShenBigWinHistory. */
    class SCCaiShenBigWinHistory implements ISCCaiShenBigWinHistory {

        /**
         * Constructs a new SCCaiShenBigWinHistory.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.ISCCaiShenBigWinHistory);

        /** SCCaiShenBigWinHistory BigWinHistory. */
        public BigWinHistory: caishen.ICaiShenBigWinHistoryInfo[];

        /**
         * Encodes the specified SCCaiShenBigWinHistory message. Does not implicitly {@link caishen.SCCaiShenBigWinHistory.verify|verify} messages.
         * @param m SCCaiShenBigWinHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.ISCCaiShenBigWinHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCaiShenBigWinHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCaiShenBigWinHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.SCCaiShenBigWinHistory;
    }

    /** Properties of a SCCaiShenRoomState. */
    interface ISCCaiShenRoomState {

        /** SCCaiShenRoomState State */
        State?: (number|null);
    }

    /** Represents a SCCaiShenRoomState. */
    class SCCaiShenRoomState implements ISCCaiShenRoomState {

        /**
         * Constructs a new SCCaiShenRoomState.
         * @param [p] Properties to set
         */
        constructor(p?: caishen.ISCCaiShenRoomState);

        /** SCCaiShenRoomState State. */
        public State: number;

        /**
         * Encodes the specified SCCaiShenRoomState message. Does not implicitly {@link caishen.SCCaiShenRoomState.verify|verify} messages.
         * @param m SCCaiShenRoomState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: caishen.ISCCaiShenRoomState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCaiShenRoomState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCaiShenRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): caishen.SCCaiShenRoomState;
    }
}
