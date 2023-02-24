// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace tamquoc. */
export namespace tamquoc {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_CoinNotEnough = 1056
    }

    /** TamQuocPacketID enum. */
    enum TamQuocPacketID {
        PACKET_TAMQUOC_ZERO = 0,
        PACKET_SC_TAMQUOC_ROOMINFO = 5520,
        PACKET_CS_TAMQUOC_PLAYEROP = 5521,
        PACKET_SC_TAMQUOC_PLAYEROP = 5522,
        PACKET_SC_TAMQUOC_ROOMSTATE = 5523,
        PACKET_SC_TAMQUOC_GAMEBILLED = 5524,
        PACKET_SC_TAMQUOC_PLAYERHISTORY = 5525,
        PACKET_SC_TAMQUOC_BIGWINHISTORY = 5526,
        PACKET_SC_TAMQUOC_GAMEJACKPOT = 5527
    }

    /** Properties of a TamQuocPlayerData. */
    interface ITamQuocPlayerData {

        /** TamQuocPlayerData Name */
        Name?: (string|null);

        /** TamQuocPlayerData SnId */
        SnId?: (number|null);

        /** TamQuocPlayerData Head */
        Head?: (number|null);

        /** TamQuocPlayerData Sex */
        Sex?: (number|null);

        /** TamQuocPlayerData Coin */
        Coin?: (number|Long|null);

        /** TamQuocPlayerData HeadOutLine */
        HeadOutLine?: (number|null);

        /** TamQuocPlayerData VIP */
        VIP?: (number|null);

        /** TamQuocPlayerData Params */
        Params?: (string[]|null);
    }

    /** Represents a TamQuocPlayerData. */
    class TamQuocPlayerData implements ITamQuocPlayerData {

        /**
         * Constructs a new TamQuocPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.ITamQuocPlayerData);

        /** TamQuocPlayerData Name. */
        public Name: string;

        /** TamQuocPlayerData SnId. */
        public SnId: number;

        /** TamQuocPlayerData Head. */
        public Head: number;

        /** TamQuocPlayerData Sex. */
        public Sex: number;

        /** TamQuocPlayerData Coin. */
        public Coin: (number|Long);

        /** TamQuocPlayerData HeadOutLine. */
        public HeadOutLine: number;

        /** TamQuocPlayerData VIP. */
        public VIP: number;

        /** TamQuocPlayerData Params. */
        public Params: string[];

        /**
         * Encodes the specified TamQuocPlayerData message. Does not implicitly {@link tamquoc.TamQuocPlayerData.verify|verify} messages.
         * @param m TamQuocPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.ITamQuocPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TamQuocPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TamQuocPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.TamQuocPlayerData;
    }

    /** Properties of a TamQuocBonusGameInfo. */
    interface ITamQuocBonusGameInfo {

        /** TamQuocBonusGameInfo BonusData */
        BonusData?: ((number|Long)[]|null);

        /** TamQuocBonusGameInfo TotalPrizeValue */
        TotalPrizeValue?: (number|Long|null);

        /** TamQuocBonusGameInfo Mutiplier */
        Mutiplier?: (number|null);

        /** TamQuocBonusGameInfo DataMultiplier */
        DataMultiplier?: (number|Long|null);
    }

    /** Represents a TamQuocBonusGameInfo. */
    class TamQuocBonusGameInfo implements ITamQuocBonusGameInfo {

        /**
         * Constructs a new TamQuocBonusGameInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.ITamQuocBonusGameInfo);

        /** TamQuocBonusGameInfo BonusData. */
        public BonusData: (number|Long)[];

        /** TamQuocBonusGameInfo TotalPrizeValue. */
        public TotalPrizeValue: (number|Long);

        /** TamQuocBonusGameInfo Mutiplier. */
        public Mutiplier: number;

        /** TamQuocBonusGameInfo DataMultiplier. */
        public DataMultiplier: (number|Long);

        /**
         * Encodes the specified TamQuocBonusGameInfo message. Does not implicitly {@link tamquoc.TamQuocBonusGameInfo.verify|verify} messages.
         * @param m TamQuocBonusGameInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.ITamQuocBonusGameInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TamQuocBonusGameInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TamQuocBonusGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.TamQuocBonusGameInfo;
    }

    /** Properties of a SCTamQuocRoomInfo. */
    interface ISCTamQuocRoomInfo {

        /** SCTamQuocRoomInfo RoomId */
        RoomId?: (number|null);

        /** SCTamQuocRoomInfo Creator */
        Creator?: (number|null);

        /** SCTamQuocRoomInfo GameId */
        GameId?: (number|null);

        /** SCTamQuocRoomInfo RoomMode */
        RoomMode?: (number|null);

        /** SCTamQuocRoomInfo Params */
        Params?: (number[]|null);

        /** SCTamQuocRoomInfo State */
        State?: (number|null);

        /** SCTamQuocRoomInfo BetLines */
        BetLines?: ((number|Long)[]|null);

        /** SCTamQuocRoomInfo Chip */
        Chip?: (number|null);

        /** SCTamQuocRoomInfo Players */
        Players?: (tamquoc.ITamQuocPlayerData[]|null);

        /** SCTamQuocRoomInfo FreeTimes */
        FreeTimes?: (number|null);

        /** SCTamQuocRoomInfo Jackpot */
        Jackpot?: (number|Long|null);

        /** SCTamQuocRoomInfo TotalPriceBonus */
        TotalPriceBonus?: (number|Long|null);

        /** SCTamQuocRoomInfo SpinID */
        SpinID?: (number|Long|null);

        /** SCTamQuocRoomInfo ParamsEx */
        ParamsEx?: (number[]|null);

        /** SCTamQuocRoomInfo BonusGame */
        BonusGame?: (tamquoc.ITamQuocBonusGameInfo|null);

        /** SCTamQuocRoomInfo GameFreeId */
        GameFreeId?: (number|null);

        /** SCTamQuocRoomInfo BilledData */
        BilledData?: (tamquoc.IGameBilledData|null);
    }

    /** Represents a SCTamQuocRoomInfo. */
    class SCTamQuocRoomInfo implements ISCTamQuocRoomInfo {

        /**
         * Constructs a new SCTamQuocRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.ISCTamQuocRoomInfo);

        /** SCTamQuocRoomInfo RoomId. */
        public RoomId: number;

        /** SCTamQuocRoomInfo Creator. */
        public Creator: number;

        /** SCTamQuocRoomInfo GameId. */
        public GameId: number;

        /** SCTamQuocRoomInfo RoomMode. */
        public RoomMode: number;

        /** SCTamQuocRoomInfo Params. */
        public Params: number[];

        /** SCTamQuocRoomInfo State. */
        public State: number;

        /** SCTamQuocRoomInfo BetLines. */
        public BetLines: (number|Long)[];

        /** SCTamQuocRoomInfo Chip. */
        public Chip: number;

        /** SCTamQuocRoomInfo Players. */
        public Players: tamquoc.ITamQuocPlayerData[];

        /** SCTamQuocRoomInfo FreeTimes. */
        public FreeTimes: number;

        /** SCTamQuocRoomInfo Jackpot. */
        public Jackpot: (number|Long);

        /** SCTamQuocRoomInfo TotalPriceBonus. */
        public TotalPriceBonus: (number|Long);

        /** SCTamQuocRoomInfo SpinID. */
        public SpinID: (number|Long);

        /** SCTamQuocRoomInfo ParamsEx. */
        public ParamsEx: number[];

        /** SCTamQuocRoomInfo BonusGame. */
        public BonusGame?: (tamquoc.ITamQuocBonusGameInfo|null);

        /** SCTamQuocRoomInfo GameFreeId. */
        public GameFreeId: number;

        /** SCTamQuocRoomInfo BilledData. */
        public BilledData?: (tamquoc.IGameBilledData|null);

        /**
         * Encodes the specified SCTamQuocRoomInfo message. Does not implicitly {@link tamquoc.SCTamQuocRoomInfo.verify|verify} messages.
         * @param m SCTamQuocRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.ISCTamQuocRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTamQuocRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTamQuocRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.SCTamQuocRoomInfo;
    }

    /** Properties of a CSTamQuocOp. */
    interface ICSTamQuocOp {

        /** CSTamQuocOp OpCode */
        OpCode?: (number|null);

        /** CSTamQuocOp Params */
        Params?: ((number|Long)[]|null);
    }

    /** Represents a CSTamQuocOp. */
    class CSTamQuocOp implements ICSTamQuocOp {

        /**
         * Constructs a new CSTamQuocOp.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.ICSTamQuocOp);

        /** CSTamQuocOp OpCode. */
        public OpCode: number;

        /** CSTamQuocOp Params. */
        public Params: (number|Long)[];

        /**
         * Encodes the specified CSTamQuocOp message. Does not implicitly {@link tamquoc.CSTamQuocOp.verify|verify} messages.
         * @param m CSTamQuocOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.ICSTamQuocOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSTamQuocOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSTamQuocOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.CSTamQuocOp;
    }

    /** Properties of a SCTamQuocOp. */
    interface ISCTamQuocOp {

        /** SCTamQuocOp SnId */
        SnId?: (number|null);

        /** SCTamQuocOp OpCode */
        OpCode?: (number|null);

        /** SCTamQuocOp Params */
        Params?: ((number|Long)[]|null);

        /** SCTamQuocOp OpRetCode */
        OpRetCode?: (tamquoc.OpResultCode|null);
    }

    /** Represents a SCTamQuocOp. */
    class SCTamQuocOp implements ISCTamQuocOp {

        /**
         * Constructs a new SCTamQuocOp.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.ISCTamQuocOp);

        /** SCTamQuocOp SnId. */
        public SnId: number;

        /** SCTamQuocOp OpCode. */
        public OpCode: number;

        /** SCTamQuocOp Params. */
        public Params: (number|Long)[];

        /** SCTamQuocOp OpRetCode. */
        public OpRetCode: tamquoc.OpResultCode;

        /**
         * Encodes the specified SCTamQuocOp message. Does not implicitly {@link tamquoc.SCTamQuocOp.verify|verify} messages.
         * @param m SCTamQuocOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.ISCTamQuocOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTamQuocOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTamQuocOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.SCTamQuocOp;
    }

    /** Properties of a TamQuocLinesInfo. */
    interface ITamQuocLinesInfo {

        /** TamQuocLinesInfo LineId */
        LineId?: (number|null);

        /** TamQuocLinesInfo PrizeId */
        PrizeId?: (number|null);

        /** TamQuocLinesInfo Position */
        Position?: (number[]|null);

        /** TamQuocLinesInfo PrizeValue */
        PrizeValue?: (number|Long|null);
    }

    /** Represents a TamQuocLinesInfo. */
    class TamQuocLinesInfo implements ITamQuocLinesInfo {

        /**
         * Constructs a new TamQuocLinesInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.ITamQuocLinesInfo);

        /** TamQuocLinesInfo LineId. */
        public LineId: number;

        /** TamQuocLinesInfo PrizeId. */
        public PrizeId: number;

        /** TamQuocLinesInfo Position. */
        public Position: number[];

        /** TamQuocLinesInfo PrizeValue. */
        public PrizeValue: (number|Long);

        /**
         * Encodes the specified TamQuocLinesInfo message. Does not implicitly {@link tamquoc.TamQuocLinesInfo.verify|verify} messages.
         * @param m TamQuocLinesInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.ITamQuocLinesInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TamQuocLinesInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TamQuocLinesInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.TamQuocLinesInfo;
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
        PrizeLines?: (tamquoc.ITamQuocLinesInfo[]|null);

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
        BonusGame?: (tamquoc.ITamQuocBonusGameInfo|null);

        /** GameBilledData ResponseStatus */
        ResponseStatus?: (number|Long|null);
    }

    /** Represents a GameBilledData. */
    class GameBilledData implements IGameBilledData {

        /**
         * Constructs a new GameBilledData.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.IGameBilledData);

        /** GameBilledData SpinID. */
        public SpinID: (number|Long);

        /** GameBilledData SlotsData. */
        public SlotsData: number[];

        /** GameBilledData AddFreeSpin. */
        public AddFreeSpin: number;

        /** GameBilledData IsJackpot. */
        public IsJackpot: boolean;

        /** GameBilledData PrizeLines. */
        public PrizeLines: tamquoc.ITamQuocLinesInfo[];

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
        public BonusGame?: (tamquoc.ITamQuocBonusGameInfo|null);

        /** GameBilledData ResponseStatus. */
        public ResponseStatus: (number|Long);

        /**
         * Encodes the specified GameBilledData message. Does not implicitly {@link tamquoc.GameBilledData.verify|verify} messages.
         * @param m GameBilledData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.IGameBilledData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBilledData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameBilledData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.GameBilledData;
    }

    /** Properties of a SCTamQuocGameBilled. */
    interface ISCTamQuocGameBilled {

        /** SCTamQuocGameBilled BilledData */
        BilledData?: (tamquoc.IGameBilledData|null);
    }

    /** Represents a SCTamQuocGameBilled. */
    class SCTamQuocGameBilled implements ISCTamQuocGameBilled {

        /**
         * Constructs a new SCTamQuocGameBilled.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.ISCTamQuocGameBilled);

        /** SCTamQuocGameBilled BilledData. */
        public BilledData?: (tamquoc.IGameBilledData|null);

        /**
         * Encodes the specified SCTamQuocGameBilled message. Does not implicitly {@link tamquoc.SCTamQuocGameBilled.verify|verify} messages.
         * @param m SCTamQuocGameBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.ISCTamQuocGameBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTamQuocGameBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTamQuocGameBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.SCTamQuocGameBilled;
    }

    /** Properties of a TamQuocPlayerHistoryInfo. */
    interface ITamQuocPlayerHistoryInfo {

        /** TamQuocPlayerHistoryInfo SpinID */
        SpinID?: (string|null);

        /** TamQuocPlayerHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** TamQuocPlayerHistoryInfo TotalBetValue */
        TotalBetValue?: (number|Long|null);

        /** TamQuocPlayerHistoryInfo TotalPriceValue */
        TotalPriceValue?: (number|Long|null);

        /** TamQuocPlayerHistoryInfo IsFree */
        IsFree?: (boolean|null);

        /** TamQuocPlayerHistoryInfo TotalBonusValue */
        TotalBonusValue?: (number|Long|null);
    }

    /** Represents a TamQuocPlayerHistoryInfo. */
    class TamQuocPlayerHistoryInfo implements ITamQuocPlayerHistoryInfo {

        /**
         * Constructs a new TamQuocPlayerHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.ITamQuocPlayerHistoryInfo);

        /** TamQuocPlayerHistoryInfo SpinID. */
        public SpinID: string;

        /** TamQuocPlayerHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** TamQuocPlayerHistoryInfo TotalBetValue. */
        public TotalBetValue: (number|Long);

        /** TamQuocPlayerHistoryInfo TotalPriceValue. */
        public TotalPriceValue: (number|Long);

        /** TamQuocPlayerHistoryInfo IsFree. */
        public IsFree: boolean;

        /** TamQuocPlayerHistoryInfo TotalBonusValue. */
        public TotalBonusValue: (number|Long);

        /**
         * Encodes the specified TamQuocPlayerHistoryInfo message. Does not implicitly {@link tamquoc.TamQuocPlayerHistoryInfo.verify|verify} messages.
         * @param m TamQuocPlayerHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.ITamQuocPlayerHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TamQuocPlayerHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TamQuocPlayerHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.TamQuocPlayerHistoryInfo;
    }

    /** Properties of a SCTamQuocPlayerHistory. */
    interface ISCTamQuocPlayerHistory {

        /** SCTamQuocPlayerHistory PlayerHistory */
        PlayerHistory?: (tamquoc.ITamQuocPlayerHistoryInfo[]|null);
    }

    /** Represents a SCTamQuocPlayerHistory. */
    class SCTamQuocPlayerHistory implements ISCTamQuocPlayerHistory {

        /**
         * Constructs a new SCTamQuocPlayerHistory.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.ISCTamQuocPlayerHistory);

        /** SCTamQuocPlayerHistory PlayerHistory. */
        public PlayerHistory: tamquoc.ITamQuocPlayerHistoryInfo[];

        /**
         * Encodes the specified SCTamQuocPlayerHistory message. Does not implicitly {@link tamquoc.SCTamQuocPlayerHistory.verify|verify} messages.
         * @param m SCTamQuocPlayerHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.ISCTamQuocPlayerHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTamQuocPlayerHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTamQuocPlayerHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.SCTamQuocPlayerHistory;
    }

    /** Properties of a TamQuocBigWinHistoryInfo. */
    interface ITamQuocBigWinHistoryInfo {

        /** TamQuocBigWinHistoryInfo SpinID */
        SpinID?: (string|null);

        /** TamQuocBigWinHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** TamQuocBigWinHistoryInfo RoomID */
        RoomID?: (number|Long|null);

        /** TamQuocBigWinHistoryInfo PriceValue */
        PriceValue?: (number|Long|null);

        /** TamQuocBigWinHistoryInfo UserName */
        UserName?: (string|null);
    }

    /** Represents a TamQuocBigWinHistoryInfo. */
    class TamQuocBigWinHistoryInfo implements ITamQuocBigWinHistoryInfo {

        /**
         * Constructs a new TamQuocBigWinHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.ITamQuocBigWinHistoryInfo);

        /** TamQuocBigWinHistoryInfo SpinID. */
        public SpinID: string;

        /** TamQuocBigWinHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** TamQuocBigWinHistoryInfo RoomID. */
        public RoomID: (number|Long);

        /** TamQuocBigWinHistoryInfo PriceValue. */
        public PriceValue: (number|Long);

        /** TamQuocBigWinHistoryInfo UserName. */
        public UserName: string;

        /**
         * Encodes the specified TamQuocBigWinHistoryInfo message. Does not implicitly {@link tamquoc.TamQuocBigWinHistoryInfo.verify|verify} messages.
         * @param m TamQuocBigWinHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.ITamQuocBigWinHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TamQuocBigWinHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TamQuocBigWinHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.TamQuocBigWinHistoryInfo;
    }

    /** Properties of a SCTamQuocBigWinHistory. */
    interface ISCTamQuocBigWinHistory {

        /** SCTamQuocBigWinHistory BigWinHistory */
        BigWinHistory?: (tamquoc.ITamQuocBigWinHistoryInfo[]|null);
    }

    /** Represents a SCTamQuocBigWinHistory. */
    class SCTamQuocBigWinHistory implements ISCTamQuocBigWinHistory {

        /**
         * Constructs a new SCTamQuocBigWinHistory.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.ISCTamQuocBigWinHistory);

        /** SCTamQuocBigWinHistory BigWinHistory. */
        public BigWinHistory: tamquoc.ITamQuocBigWinHistoryInfo[];

        /**
         * Encodes the specified SCTamQuocBigWinHistory message. Does not implicitly {@link tamquoc.SCTamQuocBigWinHistory.verify|verify} messages.
         * @param m SCTamQuocBigWinHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.ISCTamQuocBigWinHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTamQuocBigWinHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTamQuocBigWinHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.SCTamQuocBigWinHistory;
    }

    /** Properties of a SCTamQuocRoomState. */
    interface ISCTamQuocRoomState {

        /** SCTamQuocRoomState State */
        State?: (number|null);
    }

    /** Represents a SCTamQuocRoomState. */
    class SCTamQuocRoomState implements ISCTamQuocRoomState {

        /**
         * Constructs a new SCTamQuocRoomState.
         * @param [p] Properties to set
         */
        constructor(p?: tamquoc.ISCTamQuocRoomState);

        /** SCTamQuocRoomState State. */
        public State: number;

        /**
         * Encodes the specified SCTamQuocRoomState message. Does not implicitly {@link tamquoc.SCTamQuocRoomState.verify|verify} messages.
         * @param m SCTamQuocRoomState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tamquoc.ISCTamQuocRoomState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTamQuocRoomState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTamQuocRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tamquoc.SCTamQuocRoomState;
    }
}
