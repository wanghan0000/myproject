// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace iceage. */
export namespace iceage {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_CoinNotEnough = 1056
    }

    /** IceAgePacketID enum. */
    enum IceAgePacketID {
        PACKET_IceAge_ZERO = 0,
        PACKET_SC_ICEAGE_ROOMINFO = 5510,
        PACKET_CS_ICEAGE_PLAYEROP = 5511,
        PACKET_SC_ICEAGE_PLAYEROP = 5512,
        PACKET_SC_ICEAGE_ROOMSTATE = 5513,
        PACKET_SC_ICEAGE_GAMEBILLED = 5514,
        PACKET_SC_ICEAGE_PLAYERHISTORY = 5515,
        PACKET_SC_ICEAGE_BIGWINHISTORY = 5516
    }

    /** Properties of an IceAgePlayerData. */
    interface IIceAgePlayerData {

        /** IceAgePlayerData Name */
        Name?: (string|null);

        /** IceAgePlayerData SnId */
        SnId?: (number|null);

        /** IceAgePlayerData Head */
        Head?: (number|null);

        /** IceAgePlayerData Sex */
        Sex?: (number|null);

        /** IceAgePlayerData Coin */
        Coin?: (number|Long|null);

        /** IceAgePlayerData HeadOutLine */
        HeadOutLine?: (number|null);

        /** IceAgePlayerData VIP */
        VIP?: (number|null);

        /** IceAgePlayerData Params */
        Params?: (string[]|null);
    }

    /** Represents an IceAgePlayerData. */
    class IceAgePlayerData implements IIceAgePlayerData {

        /**
         * Constructs a new IceAgePlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.IIceAgePlayerData);

        /** IceAgePlayerData Name. */
        public Name: string;

        /** IceAgePlayerData SnId. */
        public SnId: number;

        /** IceAgePlayerData Head. */
        public Head: number;

        /** IceAgePlayerData Sex. */
        public Sex: number;

        /** IceAgePlayerData Coin. */
        public Coin: (number|Long);

        /** IceAgePlayerData HeadOutLine. */
        public HeadOutLine: number;

        /** IceAgePlayerData VIP. */
        public VIP: number;

        /** IceAgePlayerData Params. */
        public Params: string[];

        /**
         * Encodes the specified IceAgePlayerData message. Does not implicitly {@link iceage.IceAgePlayerData.verify|verify} messages.
         * @param m IceAgePlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.IIceAgePlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IceAgePlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns IceAgePlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.IceAgePlayerData;
    }

    /** Properties of a SCIceAgeRoomInfo. */
    interface ISCIceAgeRoomInfo {

        /** SCIceAgeRoomInfo RoomId */
        RoomId?: (number|null);

        /** SCIceAgeRoomInfo Creator */
        Creator?: (number|null);

        /** SCIceAgeRoomInfo GameId */
        GameId?: (number|null);

        /** SCIceAgeRoomInfo RoomMode */
        RoomMode?: (number|null);

        /** SCIceAgeRoomInfo Params */
        Params?: (number[]|null);

        /** SCIceAgeRoomInfo State */
        State?: (number|null);

        /** SCIceAgeRoomInfo BetLines */
        BetLines?: ((number|Long)[]|null);

        /** SCIceAgeRoomInfo Chip */
        Chip?: (number|null);

        /** SCIceAgeRoomInfo Players */
        Players?: (iceage.IIceAgePlayerData[]|null);

        /** SCIceAgeRoomInfo FreeTimes */
        FreeTimes?: (number|null);

        /** SCIceAgeRoomInfo Jackpot */
        Jackpot?: (number|Long|null);

        /** SCIceAgeRoomInfo TotalPriceBonus */
        TotalPriceBonus?: (number|Long|null);

        /** SCIceAgeRoomInfo SpinID */
        SpinID?: (number|Long|null);

        /** SCIceAgeRoomInfo ParamsEx */
        ParamsEx?: (number[]|null);

        /** SCIceAgeRoomInfo GameFreeId */
        GameFreeId?: (number|null);

        /** SCIceAgeRoomInfo BilledData */
        BilledData?: (iceage.IGameBilledData|null);
    }

    /** Represents a SCIceAgeRoomInfo. */
    class SCIceAgeRoomInfo implements ISCIceAgeRoomInfo {

        /**
         * Constructs a new SCIceAgeRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.ISCIceAgeRoomInfo);

        /** SCIceAgeRoomInfo RoomId. */
        public RoomId: number;

        /** SCIceAgeRoomInfo Creator. */
        public Creator: number;

        /** SCIceAgeRoomInfo GameId. */
        public GameId: number;

        /** SCIceAgeRoomInfo RoomMode. */
        public RoomMode: number;

        /** SCIceAgeRoomInfo Params. */
        public Params: number[];

        /** SCIceAgeRoomInfo State. */
        public State: number;

        /** SCIceAgeRoomInfo BetLines. */
        public BetLines: (number|Long)[];

        /** SCIceAgeRoomInfo Chip. */
        public Chip: number;

        /** SCIceAgeRoomInfo Players. */
        public Players: iceage.IIceAgePlayerData[];

        /** SCIceAgeRoomInfo FreeTimes. */
        public FreeTimes: number;

        /** SCIceAgeRoomInfo Jackpot. */
        public Jackpot: (number|Long);

        /** SCIceAgeRoomInfo TotalPriceBonus. */
        public TotalPriceBonus: (number|Long);

        /** SCIceAgeRoomInfo SpinID. */
        public SpinID: (number|Long);

        /** SCIceAgeRoomInfo ParamsEx. */
        public ParamsEx: number[];

        /** SCIceAgeRoomInfo GameFreeId. */
        public GameFreeId: number;

        /** SCIceAgeRoomInfo BilledData. */
        public BilledData?: (iceage.IGameBilledData|null);

        /**
         * Encodes the specified SCIceAgeRoomInfo message. Does not implicitly {@link iceage.SCIceAgeRoomInfo.verify|verify} messages.
         * @param m SCIceAgeRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.ISCIceAgeRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCIceAgeRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCIceAgeRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.SCIceAgeRoomInfo;
    }

    /** Properties of a CSIceAgeOp. */
    interface ICSIceAgeOp {

        /** CSIceAgeOp OpCode */
        OpCode?: (number|null);

        /** CSIceAgeOp Params */
        Params?: ((number|Long)[]|null);
    }

    /** Represents a CSIceAgeOp. */
    class CSIceAgeOp implements ICSIceAgeOp {

        /**
         * Constructs a new CSIceAgeOp.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.ICSIceAgeOp);

        /** CSIceAgeOp OpCode. */
        public OpCode: number;

        /** CSIceAgeOp Params. */
        public Params: (number|Long)[];

        /**
         * Encodes the specified CSIceAgeOp message. Does not implicitly {@link iceage.CSIceAgeOp.verify|verify} messages.
         * @param m CSIceAgeOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.ICSIceAgeOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSIceAgeOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSIceAgeOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.CSIceAgeOp;
    }

    /** Properties of a SCIceAgeOp. */
    interface ISCIceAgeOp {

        /** SCIceAgeOp SnId */
        SnId?: (number|null);

        /** SCIceAgeOp OpCode */
        OpCode?: (number|null);

        /** SCIceAgeOp Params */
        Params?: ((number|Long)[]|null);

        /** SCIceAgeOp OpRetCode */
        OpRetCode?: (iceage.OpResultCode|null);
    }

    /** Represents a SCIceAgeOp. */
    class SCIceAgeOp implements ISCIceAgeOp {

        /**
         * Constructs a new SCIceAgeOp.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.ISCIceAgeOp);

        /** SCIceAgeOp SnId. */
        public SnId: number;

        /** SCIceAgeOp OpCode. */
        public OpCode: number;

        /** SCIceAgeOp Params. */
        public Params: (number|Long)[];

        /** SCIceAgeOp OpRetCode. */
        public OpRetCode: iceage.OpResultCode;

        /**
         * Encodes the specified SCIceAgeOp message. Does not implicitly {@link iceage.SCIceAgeOp.verify|verify} messages.
         * @param m SCIceAgeOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.ISCIceAgeOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCIceAgeOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCIceAgeOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.SCIceAgeOp;
    }

    /** Properties of an IceAgeLinesInfo. */
    interface IIceAgeLinesInfo {

        /** IceAgeLinesInfo LineID */
        LineID?: (number|null);

        /** IceAgeLinesInfo PrizeID */
        PrizeID?: (number|Long|null);

        /** IceAgeLinesInfo PrizeValue */
        PrizeValue?: (number|Long|null);

        /** IceAgeLinesInfo Turn */
        Turn?: (number|null);

        /** IceAgeLinesInfo PrizesFreespin */
        PrizesFreespin?: (number|Long|null);

        /** IceAgeLinesInfo PrizesJackport */
        PrizesJackport?: (number|Long|null);

        /** IceAgeLinesInfo PrizesBonus */
        PrizesBonus?: ((number|Long)[]|null);

        /** IceAgeLinesInfo Items */
        Items?: (number[]|null);

        /** IceAgeLinesInfo RoleID */
        RoleID?: (number|null);
    }

    /** Represents an IceAgeLinesInfo. */
    class IceAgeLinesInfo implements IIceAgeLinesInfo {

        /**
         * Constructs a new IceAgeLinesInfo.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.IIceAgeLinesInfo);

        /** IceAgeLinesInfo LineID. */
        public LineID: number;

        /** IceAgeLinesInfo PrizeID. */
        public PrizeID: (number|Long);

        /** IceAgeLinesInfo PrizeValue. */
        public PrizeValue: (number|Long);

        /** IceAgeLinesInfo Turn. */
        public Turn: number;

        /** IceAgeLinesInfo PrizesFreespin. */
        public PrizesFreespin: (number|Long);

        /** IceAgeLinesInfo PrizesJackport. */
        public PrizesJackport: (number|Long);

        /** IceAgeLinesInfo PrizesBonus. */
        public PrizesBonus: (number|Long)[];

        /** IceAgeLinesInfo Items. */
        public Items: number[];

        /** IceAgeLinesInfo RoleID. */
        public RoleID: number;

        /**
         * Encodes the specified IceAgeLinesInfo message. Does not implicitly {@link iceage.IceAgeLinesInfo.verify|verify} messages.
         * @param m IceAgeLinesInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.IIceAgeLinesInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IceAgeLinesInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns IceAgeLinesInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.IceAgeLinesInfo;
    }

    /** Properties of an IceAgeCards. */
    interface IIceAgeCards {

        /** IceAgeCards Card */
        Card?: (number[]|null);
    }

    /** Represents an IceAgeCards. */
    class IceAgeCards implements IIceAgeCards {

        /**
         * Constructs a new IceAgeCards.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.IIceAgeCards);

        /** IceAgeCards Card. */
        public Card: number[];

        /**
         * Encodes the specified IceAgeCards message. Does not implicitly {@link iceage.IceAgeCards.verify|verify} messages.
         * @param m IceAgeCards message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.IIceAgeCards, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IceAgeCards message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns IceAgeCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.IceAgeCards;
    }

    /** Properties of a GameBilledData. */
    interface IGameBilledData {

        /** GameBilledData SpinID */
        SpinID?: (number|Long|null);

        /** GameBilledData SlotsData */
        SlotsData?: (iceage.IIceAgeCards[]|null);

        /** GameBilledData PrizesData */
        PrizesData?: (iceage.IIceAgeLinesInfo[]|null);

        /** GameBilledData TotalBetValue */
        TotalBetValue?: (number|Long|null);

        /** GameBilledData TotalPriceValue */
        TotalPriceValue?: (number|Long|null);

        /** GameBilledData IsJackpot */
        IsJackpot?: (boolean|null);

        /** GameBilledData Jackpot */
        Jackpot?: (number|Long|null);

        /** GameBilledData Balance */
        Balance?: (number|Long|null);

        /** GameBilledData TotalFreeSpin */
        TotalFreeSpin?: (number|null);

        /** GameBilledData TotalPriceBonus */
        TotalPriceBonus?: (number|Long|null);

        /** GameBilledData TotalJackpot */
        TotalJackpot?: (number|Long|null);

        /** GameBilledData ResponseStatus */
        ResponseStatus?: (number|Long|null);
    }

    /** Represents a GameBilledData. */
    class GameBilledData implements IGameBilledData {

        /**
         * Constructs a new GameBilledData.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.IGameBilledData);

        /** GameBilledData SpinID. */
        public SpinID: (number|Long);

        /** GameBilledData SlotsData. */
        public SlotsData: iceage.IIceAgeCards[];

        /** GameBilledData PrizesData. */
        public PrizesData: iceage.IIceAgeLinesInfo[];

        /** GameBilledData TotalBetValue. */
        public TotalBetValue: (number|Long);

        /** GameBilledData TotalPriceValue. */
        public TotalPriceValue: (number|Long);

        /** GameBilledData IsJackpot. */
        public IsJackpot: boolean;

        /** GameBilledData Jackpot. */
        public Jackpot: (number|Long);

        /** GameBilledData Balance. */
        public Balance: (number|Long);

        /** GameBilledData TotalFreeSpin. */
        public TotalFreeSpin: number;

        /** GameBilledData TotalPriceBonus. */
        public TotalPriceBonus: (number|Long);

        /** GameBilledData TotalJackpot. */
        public TotalJackpot: (number|Long);

        /** GameBilledData ResponseStatus. */
        public ResponseStatus: (number|Long);

        /**
         * Encodes the specified GameBilledData message. Does not implicitly {@link iceage.GameBilledData.verify|verify} messages.
         * @param m GameBilledData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.IGameBilledData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameBilledData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameBilledData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.GameBilledData;
    }

    /** Properties of a SCIceAgeGameBilled. */
    interface ISCIceAgeGameBilled {

        /** SCIceAgeGameBilled BilledData */
        BilledData?: (iceage.IGameBilledData|null);
    }

    /** Represents a SCIceAgeGameBilled. */
    class SCIceAgeGameBilled implements ISCIceAgeGameBilled {

        /**
         * Constructs a new SCIceAgeGameBilled.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.ISCIceAgeGameBilled);

        /** SCIceAgeGameBilled BilledData. */
        public BilledData?: (iceage.IGameBilledData|null);

        /**
         * Encodes the specified SCIceAgeGameBilled message. Does not implicitly {@link iceage.SCIceAgeGameBilled.verify|verify} messages.
         * @param m SCIceAgeGameBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.ISCIceAgeGameBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCIceAgeGameBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCIceAgeGameBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.SCIceAgeGameBilled;
    }

    /** Properties of an IceAgePlayerHistoryInfo. */
    interface IIceAgePlayerHistoryInfo {

        /** IceAgePlayerHistoryInfo SpinID */
        SpinID?: (string|null);

        /** IceAgePlayerHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** IceAgePlayerHistoryInfo TotalBetValue */
        TotalBetValue?: (number|Long|null);

        /** IceAgePlayerHistoryInfo TotalPriceValue */
        TotalPriceValue?: (number|Long|null);

        /** IceAgePlayerHistoryInfo IsFree */
        IsFree?: (boolean|null);

        /** IceAgePlayerHistoryInfo TotalBonusValue */
        TotalBonusValue?: (number|Long|null);
    }

    /** Represents an IceAgePlayerHistoryInfo. */
    class IceAgePlayerHistoryInfo implements IIceAgePlayerHistoryInfo {

        /**
         * Constructs a new IceAgePlayerHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.IIceAgePlayerHistoryInfo);

        /** IceAgePlayerHistoryInfo SpinID. */
        public SpinID: string;

        /** IceAgePlayerHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** IceAgePlayerHistoryInfo TotalBetValue. */
        public TotalBetValue: (number|Long);

        /** IceAgePlayerHistoryInfo TotalPriceValue. */
        public TotalPriceValue: (number|Long);

        /** IceAgePlayerHistoryInfo IsFree. */
        public IsFree: boolean;

        /** IceAgePlayerHistoryInfo TotalBonusValue. */
        public TotalBonusValue: (number|Long);

        /**
         * Encodes the specified IceAgePlayerHistoryInfo message. Does not implicitly {@link iceage.IceAgePlayerHistoryInfo.verify|verify} messages.
         * @param m IceAgePlayerHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.IIceAgePlayerHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IceAgePlayerHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns IceAgePlayerHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.IceAgePlayerHistoryInfo;
    }

    /** Properties of a SCIceAgePlayerHistory. */
    interface ISCIceAgePlayerHistory {

        /** SCIceAgePlayerHistory PlayerHistory */
        PlayerHistory?: (iceage.IIceAgePlayerHistoryInfo[]|null);
    }

    /** Represents a SCIceAgePlayerHistory. */
    class SCIceAgePlayerHistory implements ISCIceAgePlayerHistory {

        /**
         * Constructs a new SCIceAgePlayerHistory.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.ISCIceAgePlayerHistory);

        /** SCIceAgePlayerHistory PlayerHistory. */
        public PlayerHistory: iceage.IIceAgePlayerHistoryInfo[];

        /**
         * Encodes the specified SCIceAgePlayerHistory message. Does not implicitly {@link iceage.SCIceAgePlayerHistory.verify|verify} messages.
         * @param m SCIceAgePlayerHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.ISCIceAgePlayerHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCIceAgePlayerHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCIceAgePlayerHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.SCIceAgePlayerHistory;
    }

    /** Properties of an IceAgeBigWinHistoryInfo. */
    interface IIceAgeBigWinHistoryInfo {

        /** IceAgeBigWinHistoryInfo SpinID */
        SpinID?: (string|null);

        /** IceAgeBigWinHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** IceAgeBigWinHistoryInfo RoomID */
        RoomID?: (number|Long|null);

        /** IceAgeBigWinHistoryInfo PriceValue */
        PriceValue?: (number|Long|null);

        /** IceAgeBigWinHistoryInfo UserName */
        UserName?: (string|null);
    }

    /** Represents an IceAgeBigWinHistoryInfo. */
    class IceAgeBigWinHistoryInfo implements IIceAgeBigWinHistoryInfo {

        /**
         * Constructs a new IceAgeBigWinHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.IIceAgeBigWinHistoryInfo);

        /** IceAgeBigWinHistoryInfo SpinID. */
        public SpinID: string;

        /** IceAgeBigWinHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** IceAgeBigWinHistoryInfo RoomID. */
        public RoomID: (number|Long);

        /** IceAgeBigWinHistoryInfo PriceValue. */
        public PriceValue: (number|Long);

        /** IceAgeBigWinHistoryInfo UserName. */
        public UserName: string;

        /**
         * Encodes the specified IceAgeBigWinHistoryInfo message. Does not implicitly {@link iceage.IceAgeBigWinHistoryInfo.verify|verify} messages.
         * @param m IceAgeBigWinHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.IIceAgeBigWinHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IceAgeBigWinHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns IceAgeBigWinHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.IceAgeBigWinHistoryInfo;
    }

    /** Properties of a SCIceAgeBigWinHistory. */
    interface ISCIceAgeBigWinHistory {

        /** SCIceAgeBigWinHistory BigWinHistory */
        BigWinHistory?: (iceage.IIceAgeBigWinHistoryInfo[]|null);
    }

    /** Represents a SCIceAgeBigWinHistory. */
    class SCIceAgeBigWinHistory implements ISCIceAgeBigWinHistory {

        /**
         * Constructs a new SCIceAgeBigWinHistory.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.ISCIceAgeBigWinHistory);

        /** SCIceAgeBigWinHistory BigWinHistory. */
        public BigWinHistory: iceage.IIceAgeBigWinHistoryInfo[];

        /**
         * Encodes the specified SCIceAgeBigWinHistory message. Does not implicitly {@link iceage.SCIceAgeBigWinHistory.verify|verify} messages.
         * @param m SCIceAgeBigWinHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.ISCIceAgeBigWinHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCIceAgeBigWinHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCIceAgeBigWinHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.SCIceAgeBigWinHistory;
    }

    /** Properties of a SCIceAgeRoomState. */
    interface ISCIceAgeRoomState {

        /** SCIceAgeRoomState State */
        State?: (number|null);
    }

    /** Represents a SCIceAgeRoomState. */
    class SCIceAgeRoomState implements ISCIceAgeRoomState {

        /**
         * Constructs a new SCIceAgeRoomState.
         * @param [p] Properties to set
         */
        constructor(p?: iceage.ISCIceAgeRoomState);

        /** SCIceAgeRoomState State. */
        public State: number;

        /**
         * Encodes the specified SCIceAgeRoomState message. Does not implicitly {@link iceage.SCIceAgeRoomState.verify|verify} messages.
         * @param m SCIceAgeRoomState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: iceage.ISCIceAgeRoomState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCIceAgeRoomState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCIceAgeRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): iceage.SCIceAgeRoomState;
    }
}
