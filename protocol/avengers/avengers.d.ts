// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace avengers. */
export namespace avengers {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_CoinNotEnough = 1056
    }

    /** AvengersPacketID enum. */
    enum AvengersPacketID {
        PACKET_Avengers_ZERO = 0,
        PACKET_SC_AVENGERS_ROOMINFO = 5180,
        PACKET_CS_AVENGERS_PLAYEROP = 5181,
        PACKET_SC_AVENGERS_PLAYEROP = 5182,
        PACKET_SC_AVENGERS_ROOMSTATE = 5183,
        PACKET_SC_AVENGERS_GAMEBILLED = 5184,
        PACKET_SC_AVENGERS_PLAYERHISTORY = 5185,
        PACKET_SC_AVENGERS_BIGWINHISTORY = 5186,
        PACKET_SC_AVENGERS_GAMEJACKPOT = 5187
    }

    /** Properties of an AvengersPlayerData. */
    interface IAvengersPlayerData {

        /** AvengersPlayerData Name */
        Name?: (string|null);

        /** AvengersPlayerData SnId */
        SnId?: (number|null);

        /** AvengersPlayerData Head */
        Head?: (number|null);

        /** AvengersPlayerData Sex */
        Sex?: (number|null);

        /** AvengersPlayerData Coin */
        Coin?: (number|Long|null);

        /** AvengersPlayerData HeadOutLine */
        HeadOutLine?: (number|null);

        /** AvengersPlayerData VIP */
        VIP?: (number|null);

        /** AvengersPlayerData Params */
        Params?: (string[]|null);
    }

    /** Represents an AvengersPlayerData. */
    class AvengersPlayerData implements IAvengersPlayerData {

        /**
         * Constructs a new AvengersPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.IAvengersPlayerData);

        /** AvengersPlayerData Name. */
        public Name: string;

        /** AvengersPlayerData SnId. */
        public SnId: number;

        /** AvengersPlayerData Head. */
        public Head: number;

        /** AvengersPlayerData Sex. */
        public Sex: number;

        /** AvengersPlayerData Coin. */
        public Coin: (number|Long);

        /** AvengersPlayerData HeadOutLine. */
        public HeadOutLine: number;

        /** AvengersPlayerData VIP. */
        public VIP: number;

        /** AvengersPlayerData Params. */
        public Params: string[];

        /**
         * Encodes the specified AvengersPlayerData message. Does not implicitly {@link avengers.AvengersPlayerData.verify|verify} messages.
         * @param m AvengersPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.IAvengersPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AvengersPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AvengersPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.AvengersPlayerData;
    }

    /** Properties of an AvengersBonusGameInfo. */
    interface IAvengersBonusGameInfo {

        /** AvengersBonusGameInfo BonusData */
        BonusData?: ((number|Long)[]|null);

        /** AvengersBonusGameInfo TotalPrizeValue */
        TotalPrizeValue?: (number|Long|null);

        /** AvengersBonusGameInfo Mutiplier */
        Mutiplier?: (number|null);

        /** AvengersBonusGameInfo DataMultiplier */
        DataMultiplier?: (number|Long|null);
    }

    /** Represents an AvengersBonusGameInfo. */
    class AvengersBonusGameInfo implements IAvengersBonusGameInfo {

        /**
         * Constructs a new AvengersBonusGameInfo.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.IAvengersBonusGameInfo);

        /** AvengersBonusGameInfo BonusData. */
        public BonusData: (number|Long)[];

        /** AvengersBonusGameInfo TotalPrizeValue. */
        public TotalPrizeValue: (number|Long);

        /** AvengersBonusGameInfo Mutiplier. */
        public Mutiplier: number;

        /** AvengersBonusGameInfo DataMultiplier. */
        public DataMultiplier: (number|Long);

        /**
         * Encodes the specified AvengersBonusGameInfo message. Does not implicitly {@link avengers.AvengersBonusGameInfo.verify|verify} messages.
         * @param m AvengersBonusGameInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.IAvengersBonusGameInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AvengersBonusGameInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AvengersBonusGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.AvengersBonusGameInfo;
    }

    /** Properties of a SCAvengersRoomInfo. */
    interface ISCAvengersRoomInfo {

        /** SCAvengersRoomInfo RoomId */
        RoomId?: (number|null);

        /** SCAvengersRoomInfo Creator */
        Creator?: (number|null);

        /** SCAvengersRoomInfo GameId */
        GameId?: (number|null);

        /** SCAvengersRoomInfo RoomMode */
        RoomMode?: (number|null);

        /** SCAvengersRoomInfo Params */
        Params?: (number[]|null);

        /** SCAvengersRoomInfo State */
        State?: (number|null);

        /** SCAvengersRoomInfo BetLines */
        BetLines?: ((number|Long)[]|null);

        /** SCAvengersRoomInfo Chip */
        Chip?: (number|null);

        /** SCAvengersRoomInfo Players */
        Players?: (avengers.IAvengersPlayerData[]|null);

        /** SCAvengersRoomInfo FreeTimes */
        FreeTimes?: (number|null);

        /** SCAvengersRoomInfo Jackpot */
        Jackpot?: (number|Long|null);

        /** SCAvengersRoomInfo TotalPriceBonus */
        TotalPriceBonus?: (number|Long|null);

        /** SCAvengersRoomInfo SpinID */
        SpinID?: (number|Long|null);

        /** SCAvengersRoomInfo ParamsEx */
        ParamsEx?: (number[]|null);

        /** SCAvengersRoomInfo BonusGame */
        BonusGame?: (avengers.IAvengersBonusGameInfo|null);

        /** SCAvengersRoomInfo BonusX */
        BonusX?: (number[]|null);

        /** SCAvengersRoomInfo GameFreeId */
        GameFreeId?: (number|null);

        /** SCAvengersRoomInfo BilledData */
        BilledData?: (avengers.IGameBilledData|null);
    }

    /** Represents a SCAvengersRoomInfo. */
    class SCAvengersRoomInfo implements ISCAvengersRoomInfo {

        /**
         * Constructs a new SCAvengersRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.ISCAvengersRoomInfo);

        /** SCAvengersRoomInfo RoomId. */
        public RoomId: number;

        /** SCAvengersRoomInfo Creator. */
        public Creator: number;

        /** SCAvengersRoomInfo GameId. */
        public GameId: number;

        /** SCAvengersRoomInfo RoomMode. */
        public RoomMode: number;

        /** SCAvengersRoomInfo Params. */
        public Params: number[];

        /** SCAvengersRoomInfo State. */
        public State: number;

        /** SCAvengersRoomInfo BetLines. */
        public BetLines: (number|Long)[];

        /** SCAvengersRoomInfo Chip. */
        public Chip: number;

        /** SCAvengersRoomInfo Players. */
        public Players: avengers.IAvengersPlayerData[];

        /** SCAvengersRoomInfo FreeTimes. */
        public FreeTimes: number;

        /** SCAvengersRoomInfo Jackpot. */
        public Jackpot: (number|Long);

        /** SCAvengersRoomInfo TotalPriceBonus. */
        public TotalPriceBonus: (number|Long);

        /** SCAvengersRoomInfo SpinID. */
        public SpinID: (number|Long);

        /** SCAvengersRoomInfo ParamsEx. */
        public ParamsEx: number[];

        /** SCAvengersRoomInfo BonusGame. */
        public BonusGame?: (avengers.IAvengersBonusGameInfo|null);

        /** SCAvengersRoomInfo BonusX. */
        public BonusX: number[];

        /** SCAvengersRoomInfo GameFreeId. */
        public GameFreeId: number;

        /** SCAvengersRoomInfo BilledData. */
        public BilledData?: (avengers.IGameBilledData|null);

        /**
         * Encodes the specified SCAvengersRoomInfo message. Does not implicitly {@link avengers.SCAvengersRoomInfo.verify|verify} messages.
         * @param m SCAvengersRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.ISCAvengersRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCAvengersRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCAvengersRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.SCAvengersRoomInfo;
    }

    /** Properties of a CSAvengersOp. */
    interface ICSAvengersOp {

        /** CSAvengersOp OpCode */
        OpCode?: (number|null);

        /** CSAvengersOp Params */
        Params?: ((number|Long)[]|null);
    }

    /** Represents a CSAvengersOp. */
    class CSAvengersOp implements ICSAvengersOp {

        /**
         * Constructs a new CSAvengersOp.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.ICSAvengersOp);

        /** CSAvengersOp OpCode. */
        public OpCode: number;

        /** CSAvengersOp Params. */
        public Params: (number|Long)[];

        /**
         * Encodes the specified CSAvengersOp message. Does not implicitly {@link avengers.CSAvengersOp.verify|verify} messages.
         * @param m CSAvengersOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.ICSAvengersOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSAvengersOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSAvengersOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.CSAvengersOp;
    }

    /** Properties of a SCAvengersOp. */
    interface ISCAvengersOp {

        /** SCAvengersOp SnId */
        SnId?: (number|null);

        /** SCAvengersOp OpCode */
        OpCode?: (number|null);

        /** SCAvengersOp Params */
        Params?: ((number|Long)[]|null);

        /** SCAvengersOp OpRetCode */
        OpRetCode?: (avengers.OpResultCode|null);
    }

    /** Represents a SCAvengersOp. */
    class SCAvengersOp implements ISCAvengersOp {

        /**
         * Constructs a new SCAvengersOp.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.ISCAvengersOp);

        /** SCAvengersOp SnId. */
        public SnId: number;

        /** SCAvengersOp OpCode. */
        public OpCode: number;

        /** SCAvengersOp Params. */
        public Params: (number|Long)[];

        /** SCAvengersOp OpRetCode. */
        public OpRetCode: avengers.OpResultCode;

        /**
         * Encodes the specified SCAvengersOp message. Does not implicitly {@link avengers.SCAvengersOp.verify|verify} messages.
         * @param m SCAvengersOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.ISCAvengersOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCAvengersOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCAvengersOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.SCAvengersOp;
    }

    /** Properties of an AvengersLinesInfo. */
    interface IAvengersLinesInfo {

        /** AvengersLinesInfo LineId */
        LineId?: (number|null);

        /** AvengersLinesInfo PrizeId */
        PrizeId?: (number|null);

        /** AvengersLinesInfo Position */
        Position?: (number[]|null);

        /** AvengersLinesInfo PrizeValue */
        PrizeValue?: (number|Long|null);
    }

    /** Represents an AvengersLinesInfo. */
    class AvengersLinesInfo implements IAvengersLinesInfo {

        /**
         * Constructs a new AvengersLinesInfo.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.IAvengersLinesInfo);

        /** AvengersLinesInfo LineId. */
        public LineId: number;

        /** AvengersLinesInfo PrizeId. */
        public PrizeId: number;

        /** AvengersLinesInfo Position. */
        public Position: number[];

        /** AvengersLinesInfo PrizeValue. */
        public PrizeValue: (number|Long);

        /**
         * Encodes the specified AvengersLinesInfo message. Does not implicitly {@link avengers.AvengersLinesInfo.verify|verify} messages.
         * @param m AvengersLinesInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.IAvengersLinesInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AvengersLinesInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AvengersLinesInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.AvengersLinesInfo;
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
        PrizeLines?: (avengers.IAvengersLinesInfo[]|null);

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
        BonusGame?: (avengers.IAvengersBonusGameInfo|null);

        /** GameBilledData ResponseStatus */
        ResponseStatus?: (number|Long|null);
    }

    /** Represents a GameBilledData. */
    class GameBilledData implements IGameBilledData {

        /**
         * Constructs a new GameBilledData.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.IGameBilledData);

        /** GameBilledData SpinID. */
        public SpinID: (number|Long);

        /** GameBilledData SlotsData. */
        public SlotsData: number[];

        /** GameBilledData AddFreeSpin. */
        public AddFreeSpin: number;

        /** GameBilledData IsJackpot. */
        public IsJackpot: boolean;

        /** GameBilledData PrizeLines. */
        public PrizeLines: avengers.IAvengersLinesInfo[];

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
        public BonusGame?: (avengers.IAvengersBonusGameInfo|null);

        /** GameBilledData ResponseStatus. */
        public ResponseStatus: (number|Long);

        /**
         * Encodes the specified GameBilledData message. Does not implicitly {@link avengers.GameBilledData.verify|verify} messages.
         * @param m GameBilledData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.IGameBilledData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBilledData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameBilledData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.GameBilledData;
    }

    /** Properties of a SCAvengersGameBilled. */
    interface ISCAvengersGameBilled {

        /** SCAvengersGameBilled BilledData */
        BilledData?: (avengers.IGameBilledData|null);
    }

    /** Represents a SCAvengersGameBilled. */
    class SCAvengersGameBilled implements ISCAvengersGameBilled {

        /**
         * Constructs a new SCAvengersGameBilled.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.ISCAvengersGameBilled);

        /** SCAvengersGameBilled BilledData. */
        public BilledData?: (avengers.IGameBilledData|null);

        /**
         * Encodes the specified SCAvengersGameBilled message. Does not implicitly {@link avengers.SCAvengersGameBilled.verify|verify} messages.
         * @param m SCAvengersGameBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.ISCAvengersGameBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCAvengersGameBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCAvengersGameBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.SCAvengersGameBilled;
    }

    /** Properties of an AvengersPlayerHistoryInfo. */
    interface IAvengersPlayerHistoryInfo {

        /** AvengersPlayerHistoryInfo SpinID */
        SpinID?: (string|null);

        /** AvengersPlayerHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** AvengersPlayerHistoryInfo TotalBetValue */
        TotalBetValue?: (number|Long|null);

        /** AvengersPlayerHistoryInfo TotalPriceValue */
        TotalPriceValue?: (number|Long|null);

        /** AvengersPlayerHistoryInfo IsFree */
        IsFree?: (boolean|null);

        /** AvengersPlayerHistoryInfo TotalBonusValue */
        TotalBonusValue?: (number|Long|null);
    }

    /** Represents an AvengersPlayerHistoryInfo. */
    class AvengersPlayerHistoryInfo implements IAvengersPlayerHistoryInfo {

        /**
         * Constructs a new AvengersPlayerHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.IAvengersPlayerHistoryInfo);

        /** AvengersPlayerHistoryInfo SpinID. */
        public SpinID: string;

        /** AvengersPlayerHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** AvengersPlayerHistoryInfo TotalBetValue. */
        public TotalBetValue: (number|Long);

        /** AvengersPlayerHistoryInfo TotalPriceValue. */
        public TotalPriceValue: (number|Long);

        /** AvengersPlayerHistoryInfo IsFree. */
        public IsFree: boolean;

        /** AvengersPlayerHistoryInfo TotalBonusValue. */
        public TotalBonusValue: (number|Long);

        /**
         * Encodes the specified AvengersPlayerHistoryInfo message. Does not implicitly {@link avengers.AvengersPlayerHistoryInfo.verify|verify} messages.
         * @param m AvengersPlayerHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.IAvengersPlayerHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AvengersPlayerHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AvengersPlayerHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.AvengersPlayerHistoryInfo;
    }

    /** Properties of a SCAvengersPlayerHistory. */
    interface ISCAvengersPlayerHistory {

        /** SCAvengersPlayerHistory PlayerHistory */
        PlayerHistory?: (avengers.IAvengersPlayerHistoryInfo[]|null);
    }

    /** Represents a SCAvengersPlayerHistory. */
    class SCAvengersPlayerHistory implements ISCAvengersPlayerHistory {

        /**
         * Constructs a new SCAvengersPlayerHistory.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.ISCAvengersPlayerHistory);

        /** SCAvengersPlayerHistory PlayerHistory. */
        public PlayerHistory: avengers.IAvengersPlayerHistoryInfo[];

        /**
         * Encodes the specified SCAvengersPlayerHistory message. Does not implicitly {@link avengers.SCAvengersPlayerHistory.verify|verify} messages.
         * @param m SCAvengersPlayerHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.ISCAvengersPlayerHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCAvengersPlayerHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCAvengersPlayerHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.SCAvengersPlayerHistory;
    }

    /** Properties of an AvengersBigWinHistoryInfo. */
    interface IAvengersBigWinHistoryInfo {

        /** AvengersBigWinHistoryInfo SpinID */
        SpinID?: (string|null);

        /** AvengersBigWinHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** AvengersBigWinHistoryInfo RoomID */
        RoomID?: (number|Long|null);

        /** AvengersBigWinHistoryInfo PriceValue */
        PriceValue?: (number|Long|null);

        /** AvengersBigWinHistoryInfo UserName */
        UserName?: (string|null);
    }

    /** Represents an AvengersBigWinHistoryInfo. */
    class AvengersBigWinHistoryInfo implements IAvengersBigWinHistoryInfo {

        /**
         * Constructs a new AvengersBigWinHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.IAvengersBigWinHistoryInfo);

        /** AvengersBigWinHistoryInfo SpinID. */
        public SpinID: string;

        /** AvengersBigWinHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** AvengersBigWinHistoryInfo RoomID. */
        public RoomID: (number|Long);

        /** AvengersBigWinHistoryInfo PriceValue. */
        public PriceValue: (number|Long);

        /** AvengersBigWinHistoryInfo UserName. */
        public UserName: string;

        /**
         * Encodes the specified AvengersBigWinHistoryInfo message. Does not implicitly {@link avengers.AvengersBigWinHistoryInfo.verify|verify} messages.
         * @param m AvengersBigWinHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.IAvengersBigWinHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AvengersBigWinHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AvengersBigWinHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.AvengersBigWinHistoryInfo;
    }

    /** Properties of a SCAvengersBigWinHistory. */
    interface ISCAvengersBigWinHistory {

        /** SCAvengersBigWinHistory BigWinHistory */
        BigWinHistory?: (avengers.IAvengersBigWinHistoryInfo[]|null);
    }

    /** Represents a SCAvengersBigWinHistory. */
    class SCAvengersBigWinHistory implements ISCAvengersBigWinHistory {

        /**
         * Constructs a new SCAvengersBigWinHistory.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.ISCAvengersBigWinHistory);

        /** SCAvengersBigWinHistory BigWinHistory. */
        public BigWinHistory: avengers.IAvengersBigWinHistoryInfo[];

        /**
         * Encodes the specified SCAvengersBigWinHistory message. Does not implicitly {@link avengers.SCAvengersBigWinHistory.verify|verify} messages.
         * @param m SCAvengersBigWinHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.ISCAvengersBigWinHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCAvengersBigWinHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCAvengersBigWinHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.SCAvengersBigWinHistory;
    }

    /** Properties of a SCAvengersRoomState. */
    interface ISCAvengersRoomState {

        /** SCAvengersRoomState State */
        State?: (number|null);
    }

    /** Represents a SCAvengersRoomState. */
    class SCAvengersRoomState implements ISCAvengersRoomState {

        /**
         * Constructs a new SCAvengersRoomState.
         * @param [p] Properties to set
         */
        constructor(p?: avengers.ISCAvengersRoomState);

        /** SCAvengersRoomState State. */
        public State: number;

        /**
         * Encodes the specified SCAvengersRoomState message. Does not implicitly {@link avengers.SCAvengersRoomState.verify|verify} messages.
         * @param m SCAvengersRoomState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: avengers.ISCAvengersRoomState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCAvengersRoomState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCAvengersRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): avengers.SCAvengersRoomState;
    }
}
