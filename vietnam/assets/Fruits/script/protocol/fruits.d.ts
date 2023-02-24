// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace fruits. */
export namespace fruits {

    /** FruitsPID enum. */
    enum FruitsPID {
        PACKET_FRUITS_ZERO = 0,
        PACKET_FRUITS_SCFruitsRoomInfo = 5490,
        PACKET_FRUITS_CSFruitsOp = 5491,
        PACKET_FRUITS_SCFruitsOp = 5492,
        PACKET_FRUITS_SCFruitsRoomState = 5493,
        PACKET_FRUITS_SCFruitsBilled = 5494,
        PACKET_FRUITS_SCFruitsMaryBilled = 5495,
        PACKET_FRUITS_SCFruitsPrize = 5496
    }

    /** Properties of a FruitsPlayerData. */
    interface IFruitsPlayerData {

        /** FruitsPlayerData Name */
        Name?: (string|null);

        /** FruitsPlayerData SnId */
        SnId?: (number|null);

        /** FruitsPlayerData Head */
        Head?: (number|null);

        /** FruitsPlayerData Sex */
        Sex?: (number|null);

        /** FruitsPlayerData Coin */
        Coin?: (number|Long|null);

        /** FruitsPlayerData Pos */
        Pos?: (number|null);

        /** FruitsPlayerData Flag */
        Flag?: (number|null);

        /** FruitsPlayerData Params */
        Params?: (string[]|null);

        /** FruitsPlayerData City */
        City?: (string|null);

        /** FruitsPlayerData HeadOutLine */
        HeadOutLine?: (number|null);

        /** FruitsPlayerData VIP */
        VIP?: (number|null);
    }

    /** Represents a FruitsPlayerData. */
    class FruitsPlayerData implements IFruitsPlayerData {

        /**
         * Constructs a new FruitsPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: fruits.IFruitsPlayerData);

        /** FruitsPlayerData Name. */
        public Name: string;

        /** FruitsPlayerData SnId. */
        public SnId: number;

        /** FruitsPlayerData Head. */
        public Head: number;

        /** FruitsPlayerData Sex. */
        public Sex: number;

        /** FruitsPlayerData Coin. */
        public Coin: (number|Long);

        /** FruitsPlayerData Pos. */
        public Pos: number;

        /** FruitsPlayerData Flag. */
        public Flag: number;

        /** FruitsPlayerData Params. */
        public Params: string[];

        /** FruitsPlayerData City. */
        public City: string;

        /** FruitsPlayerData HeadOutLine. */
        public HeadOutLine: number;

        /** FruitsPlayerData VIP. */
        public VIP: number;

        /**
         * Encodes the specified FruitsPlayerData message. Does not implicitly {@link fruits.FruitsPlayerData.verify|verify} messages.
         * @param m FruitsPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fruits.IFruitsPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FruitsPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FruitsPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fruits.FruitsPlayerData;
    }

    /** Properties of a FruitsWinLine. */
    interface IFruitsWinLine {

        /** FruitsWinLine Poss */
        Poss?: (number[]|null);

        /** FruitsWinLine WinScore */
        WinScore?: (number|Long|null);

        /** FruitsWinLine LineId */
        LineId?: (number|null);
    }

    /** Represents a FruitsWinLine. */
    class FruitsWinLine implements IFruitsWinLine {

        /**
         * Constructs a new FruitsWinLine.
         * @param [p] Properties to set
         */
        constructor(p?: fruits.IFruitsWinLine);

        /** FruitsWinLine Poss. */
        public Poss: number[];

        /** FruitsWinLine WinScore. */
        public WinScore: (number|Long);

        /** FruitsWinLine LineId. */
        public LineId: number;

        /**
         * Encodes the specified FruitsWinLine message. Does not implicitly {@link fruits.FruitsWinLine.verify|verify} messages.
         * @param m FruitsWinLine message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fruits.IFruitsWinLine, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FruitsWinLine message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FruitsWinLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fruits.FruitsWinLine;
    }

    /** Properties of a SCFruitsRoomInfo. */
    interface ISCFruitsRoomInfo {

        /** SCFruitsRoomInfo RoomId */
        RoomId?: (number|null);

        /** SCFruitsRoomInfo GameFreeId */
        GameFreeId?: (number|null);

        /** SCFruitsRoomInfo GameId */
        GameId?: (number|null);

        /** SCFruitsRoomInfo RoomMode */
        RoomMode?: (number|null);

        /** SCFruitsRoomInfo Params */
        Params?: (number[]|null);

        /** SCFruitsRoomInfo NumOfGames */
        NumOfGames?: (number|null);

        /** SCFruitsRoomInfo State */
        State?: (number|null);

        /** SCFruitsRoomInfo ParamsEx */
        ParamsEx?: (number[]|null);

        /** SCFruitsRoomInfo SceneType */
        SceneType?: (number|null);

        /** SCFruitsRoomInfo Player */
        Player?: (fruits.IFruitsPlayerData|null);

        /** SCFruitsRoomInfo NowGameState */
        NowGameState?: (number|null);

        /** SCFruitsRoomInfo BetIdx */
        BetIdx?: (number|null);

        /** SCFruitsRoomInfo FreeTimes */
        FreeTimes?: (number|null);

        /** SCFruitsRoomInfo MaryFreeTimes */
        MaryFreeTimes?: (number|null);

        /** SCFruitsRoomInfo MaryTotalWin */
        MaryTotalWin?: (number|Long|null);

        /** SCFruitsRoomInfo Cards */
        Cards?: (number[]|null);

        /** SCFruitsRoomInfo MaryWinId */
        MaryWinId?: (number|null);

        /** SCFruitsRoomInfo MaryCards */
        MaryCards?: (number[]|null);

        /** SCFruitsRoomInfo WinLineCoin */
        WinLineCoin?: (number|Long|null);

        /** SCFruitsRoomInfo WinJackpot */
        WinJackpot?: (number|Long|null);

        /** SCFruitsRoomInfo WinEle777Coin */
        WinEle777Coin?: (number|Long|null);

        /** SCFruitsRoomInfo FreeTotalWin */
        FreeTotalWin?: (number|Long|null);

        /** SCFruitsRoomInfo WinRate */
        WinRate?: (number|Long|null);

        /** SCFruitsRoomInfo WinFreeTimes */
        WinFreeTimes?: (number|null);

        /** SCFruitsRoomInfo WinLines */
        WinLines?: (fruits.IFruitsWinLine[]|null);
    }

    /** Represents a SCFruitsRoomInfo. */
    class SCFruitsRoomInfo implements ISCFruitsRoomInfo {

        /**
         * Constructs a new SCFruitsRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: fruits.ISCFruitsRoomInfo);

        /** SCFruitsRoomInfo RoomId. */
        public RoomId: number;

        /** SCFruitsRoomInfo GameFreeId. */
        public GameFreeId: number;

        /** SCFruitsRoomInfo GameId. */
        public GameId: number;

        /** SCFruitsRoomInfo RoomMode. */
        public RoomMode: number;

        /** SCFruitsRoomInfo Params. */
        public Params: number[];

        /** SCFruitsRoomInfo NumOfGames. */
        public NumOfGames: number;

        /** SCFruitsRoomInfo State. */
        public State: number;

        /** SCFruitsRoomInfo ParamsEx. */
        public ParamsEx: number[];

        /** SCFruitsRoomInfo SceneType. */
        public SceneType: number;

        /** SCFruitsRoomInfo Player. */
        public Player?: (fruits.IFruitsPlayerData|null);

        /** SCFruitsRoomInfo NowGameState. */
        public NowGameState: number;

        /** SCFruitsRoomInfo BetIdx. */
        public BetIdx: number;

        /** SCFruitsRoomInfo FreeTimes. */
        public FreeTimes: number;

        /** SCFruitsRoomInfo MaryFreeTimes. */
        public MaryFreeTimes: number;

        /** SCFruitsRoomInfo MaryTotalWin. */
        public MaryTotalWin: (number|Long);

        /** SCFruitsRoomInfo Cards. */
        public Cards: number[];

        /** SCFruitsRoomInfo MaryWinId. */
        public MaryWinId: number;

        /** SCFruitsRoomInfo MaryCards. */
        public MaryCards: number[];

        /** SCFruitsRoomInfo WinLineCoin. */
        public WinLineCoin: (number|Long);

        /** SCFruitsRoomInfo WinJackpot. */
        public WinJackpot: (number|Long);

        /** SCFruitsRoomInfo WinEle777Coin. */
        public WinEle777Coin: (number|Long);

        /** SCFruitsRoomInfo FreeTotalWin. */
        public FreeTotalWin: (number|Long);

        /** SCFruitsRoomInfo WinRate. */
        public WinRate: (number|Long);

        /** SCFruitsRoomInfo WinFreeTimes. */
        public WinFreeTimes: number;

        /** SCFruitsRoomInfo WinLines. */
        public WinLines: fruits.IFruitsWinLine[];

        /**
         * Encodes the specified SCFruitsRoomInfo message. Does not implicitly {@link fruits.SCFruitsRoomInfo.verify|verify} messages.
         * @param m SCFruitsRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fruits.ISCFruitsRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFruitsRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFruitsRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fruits.SCFruitsRoomInfo;
    }

    /** Properties of a CSFruitsOp. */
    interface ICSFruitsOp {

        /** CSFruitsOp OpCode */
        OpCode?: (number|null);

        /** CSFruitsOp Params */
        Params?: ((number|Long)[]|null);
    }

    /** Represents a CSFruitsOp. */
    class CSFruitsOp implements ICSFruitsOp {

        /**
         * Constructs a new CSFruitsOp.
         * @param [p] Properties to set
         */
        constructor(p?: fruits.ICSFruitsOp);

        /** CSFruitsOp OpCode. */
        public OpCode: number;

        /** CSFruitsOp Params. */
        public Params: (number|Long)[];

        /**
         * Encodes the specified CSFruitsOp message. Does not implicitly {@link fruits.CSFruitsOp.verify|verify} messages.
         * @param m CSFruitsOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fruits.ICSFruitsOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSFruitsOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSFruitsOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fruits.CSFruitsOp;
    }

    /** Properties of a SCFruitsOp. */
    interface ISCFruitsOp {

        /** SCFruitsOp OpCode */
        OpCode?: (number|null);

        /** SCFruitsOp OpRetCode */
        OpRetCode?: (number|null);

        /** SCFruitsOp Params */
        Params?: ((number|Long)[]|null);
    }

    /** Represents a SCFruitsOp. */
    class SCFruitsOp implements ISCFruitsOp {

        /**
         * Constructs a new SCFruitsOp.
         * @param [p] Properties to set
         */
        constructor(p?: fruits.ISCFruitsOp);

        /** SCFruitsOp OpCode. */
        public OpCode: number;

        /** SCFruitsOp OpRetCode. */
        public OpRetCode: number;

        /** SCFruitsOp Params. */
        public Params: (number|Long)[];

        /**
         * Encodes the specified SCFruitsOp message. Does not implicitly {@link fruits.SCFruitsOp.verify|verify} messages.
         * @param m SCFruitsOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fruits.ISCFruitsOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFruitsOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFruitsOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fruits.SCFruitsOp;
    }

    /** Properties of a SCFruitsRoomState. */
    interface ISCFruitsRoomState {

        /** SCFruitsRoomState State */
        State?: (number|null);

        /** SCFruitsRoomState SubState */
        SubState?: (number|null);

        /** SCFruitsRoomState Params */
        Params?: (number[]|null);
    }

    /** Represents a SCFruitsRoomState. */
    class SCFruitsRoomState implements ISCFruitsRoomState {

        /**
         * Constructs a new SCFruitsRoomState.
         * @param [p] Properties to set
         */
        constructor(p?: fruits.ISCFruitsRoomState);

        /** SCFruitsRoomState State. */
        public State: number;

        /** SCFruitsRoomState SubState. */
        public SubState: number;

        /** SCFruitsRoomState Params. */
        public Params: number[];

        /**
         * Encodes the specified SCFruitsRoomState message. Does not implicitly {@link fruits.SCFruitsRoomState.verify|verify} messages.
         * @param m SCFruitsRoomState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fruits.ISCFruitsRoomState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFruitsRoomState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFruitsRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fruits.SCFruitsRoomState;
    }

    /** Properties of a SCFruitsPrize. */
    interface ISCFruitsPrize {

        /** SCFruitsPrize PrizePool */
        PrizePool?: (number|Long|null);
    }

    /** Represents a SCFruitsPrize. */
    class SCFruitsPrize implements ISCFruitsPrize {

        /**
         * Constructs a new SCFruitsPrize.
         * @param [p] Properties to set
         */
        constructor(p?: fruits.ISCFruitsPrize);

        /** SCFruitsPrize PrizePool. */
        public PrizePool: (number|Long);

        /**
         * Encodes the specified SCFruitsPrize message. Does not implicitly {@link fruits.SCFruitsPrize.verify|verify} messages.
         * @param m SCFruitsPrize message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fruits.ISCFruitsPrize, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFruitsPrize message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFruitsPrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fruits.SCFruitsPrize;
    }

    /** Properties of a SCFruitsBilled. */
    interface ISCFruitsBilled {

        /** SCFruitsBilled NowGameState */
        NowGameState?: (number|null);

        /** SCFruitsBilled BetIdx */
        BetIdx?: (number|null);

        /** SCFruitsBilled Coin */
        Coin?: (number|Long|null);

        /** SCFruitsBilled FreeTotalWin */
        FreeTotalWin?: (number|Long|null);

        /** SCFruitsBilled Jackpot */
        Jackpot?: (number|Long|null);

        /** SCFruitsBilled WinJackpot */
        WinJackpot?: (number|Long|null);

        /** SCFruitsBilled WinEle777Coin */
        WinEle777Coin?: (number|Long|null);

        /** SCFruitsBilled WinRate */
        WinRate?: (number|Long|null);

        /** SCFruitsBilled Cards */
        Cards?: (number[]|null);

        /** SCFruitsBilled WinLines */
        WinLines?: (fruits.IFruitsWinLine[]|null);

        /** SCFruitsBilled FreeTimes */
        FreeTimes?: (number|null);

        /** SCFruitsBilled MaryFreeTimes */
        MaryFreeTimes?: (number|null);

        /** SCFruitsBilled WinFreeTimes */
        WinFreeTimes?: (number|null);

        /** SCFruitsBilled WinLineCoin */
        WinLineCoin?: (number|Long|null);
    }

    /** Represents a SCFruitsBilled. */
    class SCFruitsBilled implements ISCFruitsBilled {

        /**
         * Constructs a new SCFruitsBilled.
         * @param [p] Properties to set
         */
        constructor(p?: fruits.ISCFruitsBilled);

        /** SCFruitsBilled NowGameState. */
        public NowGameState: number;

        /** SCFruitsBilled BetIdx. */
        public BetIdx: number;

        /** SCFruitsBilled Coin. */
        public Coin: (number|Long);

        /** SCFruitsBilled FreeTotalWin. */
        public FreeTotalWin: (number|Long);

        /** SCFruitsBilled Jackpot. */
        public Jackpot: (number|Long);

        /** SCFruitsBilled WinJackpot. */
        public WinJackpot: (number|Long);

        /** SCFruitsBilled WinEle777Coin. */
        public WinEle777Coin: (number|Long);

        /** SCFruitsBilled WinRate. */
        public WinRate: (number|Long);

        /** SCFruitsBilled Cards. */
        public Cards: number[];

        /** SCFruitsBilled WinLines. */
        public WinLines: fruits.IFruitsWinLine[];

        /** SCFruitsBilled FreeTimes. */
        public FreeTimes: number;

        /** SCFruitsBilled MaryFreeTimes. */
        public MaryFreeTimes: number;

        /** SCFruitsBilled WinFreeTimes. */
        public WinFreeTimes: number;

        /** SCFruitsBilled WinLineCoin. */
        public WinLineCoin: (number|Long);

        /**
         * Encodes the specified SCFruitsBilled message. Does not implicitly {@link fruits.SCFruitsBilled.verify|verify} messages.
         * @param m SCFruitsBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fruits.ISCFruitsBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFruitsBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFruitsBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fruits.SCFruitsBilled;
    }

    /** Properties of a SCFruitsMaryBilled. */
    interface ISCFruitsMaryBilled {

        /** SCFruitsMaryBilled Coin */
        Coin?: (number|Long|null);

        /** SCFruitsMaryBilled FreeTotalWin */
        FreeTotalWin?: (number|Long|null);

        /** SCFruitsMaryBilled MaryOutTotalWin */
        MaryOutTotalWin?: (number|Long|null);

        /** SCFruitsMaryBilled MaryMidTotalWin */
        MaryMidTotalWin?: (number|Long|null);

        /** SCFruitsMaryBilled MaryWinCoin */
        MaryWinCoin?: (number|Long|null);

        /** SCFruitsMaryBilled MaryWinId */
        MaryWinId?: (number|null);

        /** SCFruitsMaryBilled MaryCards */
        MaryCards?: (number[]|null);

        /** SCFruitsMaryBilled MaryFreeTimes */
        MaryFreeTimes?: (number|null);
    }

    /** Represents a SCFruitsMaryBilled. */
    class SCFruitsMaryBilled implements ISCFruitsMaryBilled {

        /**
         * Constructs a new SCFruitsMaryBilled.
         * @param [p] Properties to set
         */
        constructor(p?: fruits.ISCFruitsMaryBilled);

        /** SCFruitsMaryBilled Coin. */
        public Coin: (number|Long);

        /** SCFruitsMaryBilled FreeTotalWin. */
        public FreeTotalWin: (number|Long);

        /** SCFruitsMaryBilled MaryOutTotalWin. */
        public MaryOutTotalWin: (number|Long);

        /** SCFruitsMaryBilled MaryMidTotalWin. */
        public MaryMidTotalWin: (number|Long);

        /** SCFruitsMaryBilled MaryWinCoin. */
        public MaryWinCoin: (number|Long);

        /** SCFruitsMaryBilled MaryWinId. */
        public MaryWinId: number;

        /** SCFruitsMaryBilled MaryCards. */
        public MaryCards: number[];

        /** SCFruitsMaryBilled MaryFreeTimes. */
        public MaryFreeTimes: number;

        /**
         * Encodes the specified SCFruitsMaryBilled message. Does not implicitly {@link fruits.SCFruitsMaryBilled.verify|verify} messages.
         * @param m SCFruitsMaryBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fruits.ISCFruitsMaryBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFruitsMaryBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFruitsMaryBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fruits.SCFruitsMaryBilled;
    }
}
