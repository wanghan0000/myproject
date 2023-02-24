// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace richblessed. */
export namespace richblessed {

    /** RBPID enum. */
    enum RBPID {
        PACKET_RICHBLESSED_ZERO = 0,
        PACKET_RICHBLESSED_SCRBRoomInfo = 5500,
        PACKET_RICHBLESSED_CSRichBlessedOp = 5501,
        PACKET_RICHBLESSED_SCRichBlessedOp = 5502,
        PACKET_RICHBLESSED_SCRBRoomState = 5503,
        PACKET_RICHBLESSED_SCRBBilled = 5504,
        PACKET_RICHBLESSED_SCRBPrize = 5505,
        PACKET_RICHBLESSED_SCRBJACKBilled = 5506
    }

    /** Properties of a RBPlayerData. */
    interface IRBPlayerData {

        /** RBPlayerData Name */
        Name?: (string|null);

        /** RBPlayerData SnId */
        SnId?: (number|null);

        /** RBPlayerData Head */
        Head?: (number|null);

        /** RBPlayerData Sex */
        Sex?: (number|null);

        /** RBPlayerData Coin */
        Coin?: (number|Long|null);

        /** RBPlayerData Pos */
        Pos?: (number|null);

        /** RBPlayerData Flag */
        Flag?: (number|null);

        /** RBPlayerData Params */
        Params?: (string[]|null);

        /** RBPlayerData City */
        City?: (string|null);

        /** RBPlayerData HeadOutLine */
        HeadOutLine?: (number|null);

        /** RBPlayerData VIP */
        VIP?: (number|null);
    }

    /** Represents a RBPlayerData. */
    class RBPlayerData implements IRBPlayerData {

        /**
         * Constructs a new RBPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: richblessed.IRBPlayerData);

        /** RBPlayerData Name. */
        public Name: string;

        /** RBPlayerData SnId. */
        public SnId: number;

        /** RBPlayerData Head. */
        public Head: number;

        /** RBPlayerData Sex. */
        public Sex: number;

        /** RBPlayerData Coin. */
        public Coin: (number|Long);

        /** RBPlayerData Pos. */
        public Pos: number;

        /** RBPlayerData Flag. */
        public Flag: number;

        /** RBPlayerData Params. */
        public Params: string[];

        /** RBPlayerData City. */
        public City: string;

        /** RBPlayerData HeadOutLine. */
        public HeadOutLine: number;

        /** RBPlayerData VIP. */
        public VIP: number;

        /**
         * Encodes the specified RBPlayerData message. Does not implicitly {@link richblessed.RBPlayerData.verify|verify} messages.
         * @param m RBPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: richblessed.IRBPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RBPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RBPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): richblessed.RBPlayerData;
    }

    /** Properties of a RichWinLine. */
    interface IRichWinLine {

        /** RichWinLine Poss */
        Poss?: (number[]|null);

        /** RichWinLine WinScore */
        WinScore?: (number|Long|null);
    }

    /** Represents a RichWinLine. */
    class RichWinLine implements IRichWinLine {

        /**
         * Constructs a new RichWinLine.
         * @param [p] Properties to set
         */
        constructor(p?: richblessed.IRichWinLine);

        /** RichWinLine Poss. */
        public Poss: number[];

        /** RichWinLine WinScore. */
        public WinScore: (number|Long);

        /**
         * Encodes the specified RichWinLine message. Does not implicitly {@link richblessed.RichWinLine.verify|verify} messages.
         * @param m RichWinLine message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: richblessed.IRichWinLine, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RichWinLine message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RichWinLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): richblessed.RichWinLine;
    }

    /** Properties of a SCRBRoomInfo. */
    interface ISCRBRoomInfo {

        /** SCRBRoomInfo RoomId */
        RoomId?: (number|null);

        /** SCRBRoomInfo GameFreeId */
        GameFreeId?: (number|null);

        /** SCRBRoomInfo GameId */
        GameId?: (number|null);

        /** SCRBRoomInfo RoomMode */
        RoomMode?: (number|null);

        /** SCRBRoomInfo Params */
        Params?: (number[]|null);

        /** SCRBRoomInfo NumOfGames */
        NumOfGames?: (number|null);

        /** SCRBRoomInfo State */
        State?: (number|null);

        /** SCRBRoomInfo ParamsEx */
        ParamsEx?: (number[]|null);

        /** SCRBRoomInfo SceneType */
        SceneType?: (number|null);

        /** SCRBRoomInfo Player */
        Player?: (richblessed.IRBPlayerData|null);

        /** SCRBRoomInfo Cards */
        Cards?: (number[]|null);

        /** SCRBRoomInfo NowGameState */
        NowGameState?: (number|null);

        /** SCRBRoomInfo BetIdx */
        BetIdx?: (number|null);

        /** SCRBRoomInfo FreeAllWin */
        FreeAllWin?: (number|Long|null);

        /** SCRBRoomInfo SmallJackpot */
        SmallJackpot?: (number|Long|null);

        /** SCRBRoomInfo WinJackpot */
        WinJackpot?: (number|Long|null);

        /** SCRBRoomInfo WinEleCoin */
        WinEleCoin?: (number|Long|null);

        /** SCRBRoomInfo WinRate */
        WinRate?: (number|Long|null);

        /** SCRBRoomInfo FreeNum */
        FreeNum?: (number|Long|null);

        /** SCRBRoomInfo AddFreeNum */
        AddFreeNum?: (number|Long|null);

        /** SCRBRoomInfo JackpotEle */
        JackpotEle?: (number|null);

        /** SCRBRoomInfo WinLines */
        WinLines?: (richblessed.IRichWinLine[]|null);

        /** SCRBRoomInfo MiddleJackpot */
        MiddleJackpot?: (number|Long|null);

        /** SCRBRoomInfo BigJackpot */
        BigJackpot?: (number|Long|null);

        /** SCRBRoomInfo GrandJackpot */
        GrandJackpot?: (number|Long|null);

        /** SCRBRoomInfo WinFreeTimes */
        WinFreeTimes?: (number|null);
    }

    /** Represents a SCRBRoomInfo. */
    class SCRBRoomInfo implements ISCRBRoomInfo {

        /**
         * Constructs a new SCRBRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: richblessed.ISCRBRoomInfo);

        /** SCRBRoomInfo RoomId. */
        public RoomId: number;

        /** SCRBRoomInfo GameFreeId. */
        public GameFreeId: number;

        /** SCRBRoomInfo GameId. */
        public GameId: number;

        /** SCRBRoomInfo RoomMode. */
        public RoomMode: number;

        /** SCRBRoomInfo Params. */
        public Params: number[];

        /** SCRBRoomInfo NumOfGames. */
        public NumOfGames: number;

        /** SCRBRoomInfo State. */
        public State: number;

        /** SCRBRoomInfo ParamsEx. */
        public ParamsEx: number[];

        /** SCRBRoomInfo SceneType. */
        public SceneType: number;

        /** SCRBRoomInfo Player. */
        public Player?: (richblessed.IRBPlayerData|null);

        /** SCRBRoomInfo Cards. */
        public Cards: number[];

        /** SCRBRoomInfo NowGameState. */
        public NowGameState: number;

        /** SCRBRoomInfo BetIdx. */
        public BetIdx: number;

        /** SCRBRoomInfo FreeAllWin. */
        public FreeAllWin: (number|Long);

        /** SCRBRoomInfo SmallJackpot. */
        public SmallJackpot: (number|Long);

        /** SCRBRoomInfo WinJackpot. */
        public WinJackpot: (number|Long);

        /** SCRBRoomInfo WinEleCoin. */
        public WinEleCoin: (number|Long);

        /** SCRBRoomInfo WinRate. */
        public WinRate: (number|Long);

        /** SCRBRoomInfo FreeNum. */
        public FreeNum: (number|Long);

        /** SCRBRoomInfo AddFreeNum. */
        public AddFreeNum: (number|Long);

        /** SCRBRoomInfo JackpotEle. */
        public JackpotEle: number;

        /** SCRBRoomInfo WinLines. */
        public WinLines: richblessed.IRichWinLine[];

        /** SCRBRoomInfo MiddleJackpot. */
        public MiddleJackpot: (number|Long);

        /** SCRBRoomInfo BigJackpot. */
        public BigJackpot: (number|Long);

        /** SCRBRoomInfo GrandJackpot. */
        public GrandJackpot: (number|Long);

        /** SCRBRoomInfo WinFreeTimes. */
        public WinFreeTimes: number;

        /**
         * Encodes the specified SCRBRoomInfo message. Does not implicitly {@link richblessed.SCRBRoomInfo.verify|verify} messages.
         * @param m SCRBRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: richblessed.ISCRBRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRBRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRBRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): richblessed.SCRBRoomInfo;
    }

    /** Properties of a CSRichBlessedOp. */
    interface ICSRichBlessedOp {

        /** CSRichBlessedOp OpCode */
        OpCode?: (number|null);

        /** CSRichBlessedOp Params */
        Params?: ((number|Long)[]|null);
    }

    /** Represents a CSRichBlessedOp. */
    class CSRichBlessedOp implements ICSRichBlessedOp {

        /**
         * Constructs a new CSRichBlessedOp.
         * @param [p] Properties to set
         */
        constructor(p?: richblessed.ICSRichBlessedOp);

        /** CSRichBlessedOp OpCode. */
        public OpCode: number;

        /** CSRichBlessedOp Params. */
        public Params: (number|Long)[];

        /**
         * Encodes the specified CSRichBlessedOp message. Does not implicitly {@link richblessed.CSRichBlessedOp.verify|verify} messages.
         * @param m CSRichBlessedOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: richblessed.ICSRichBlessedOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSRichBlessedOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSRichBlessedOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): richblessed.CSRichBlessedOp;
    }

    /** Properties of a SCRichBlessedOp. */
    interface ISCRichBlessedOp {

        /** SCRichBlessedOp OpCode */
        OpCode?: (number|null);

        /** SCRichBlessedOp OpRetCode */
        OpRetCode?: (number|null);

        /** SCRichBlessedOp Params */
        Params?: ((number|Long)[]|null);
    }

    /** Represents a SCRichBlessedOp. */
    class SCRichBlessedOp implements ISCRichBlessedOp {

        /**
         * Constructs a new SCRichBlessedOp.
         * @param [p] Properties to set
         */
        constructor(p?: richblessed.ISCRichBlessedOp);

        /** SCRichBlessedOp OpCode. */
        public OpCode: number;

        /** SCRichBlessedOp OpRetCode. */
        public OpRetCode: number;

        /** SCRichBlessedOp Params. */
        public Params: (number|Long)[];

        /**
         * Encodes the specified SCRichBlessedOp message. Does not implicitly {@link richblessed.SCRichBlessedOp.verify|verify} messages.
         * @param m SCRichBlessedOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: richblessed.ISCRichBlessedOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRichBlessedOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRichBlessedOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): richblessed.SCRichBlessedOp;
    }

    /** Properties of a SCRBRoomState. */
    interface ISCRBRoomState {

        /** SCRBRoomState State */
        State?: (number|null);

        /** SCRBRoomState SubState */
        SubState?: (number|null);

        /** SCRBRoomState Params */
        Params?: (number[]|null);
    }

    /** Represents a SCRBRoomState. */
    class SCRBRoomState implements ISCRBRoomState {

        /**
         * Constructs a new SCRBRoomState.
         * @param [p] Properties to set
         */
        constructor(p?: richblessed.ISCRBRoomState);

        /** SCRBRoomState State. */
        public State: number;

        /** SCRBRoomState SubState. */
        public SubState: number;

        /** SCRBRoomState Params. */
        public Params: number[];

        /**
         * Encodes the specified SCRBRoomState message. Does not implicitly {@link richblessed.SCRBRoomState.verify|verify} messages.
         * @param m SCRBRoomState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: richblessed.ISCRBRoomState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRBRoomState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRBRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): richblessed.SCRBRoomState;
    }

    /** Properties of a SCRBPrize. */
    interface ISCRBPrize {

        /** SCRBPrize PrizePool */
        PrizePool?: (number|Long|null);
    }

    /** Represents a SCRBPrize. */
    class SCRBPrize implements ISCRBPrize {

        /**
         * Constructs a new SCRBPrize.
         * @param [p] Properties to set
         */
        constructor(p?: richblessed.ISCRBPrize);

        /** SCRBPrize PrizePool. */
        public PrizePool: (number|Long);

        /**
         * Encodes the specified SCRBPrize message. Does not implicitly {@link richblessed.SCRBPrize.verify|verify} messages.
         * @param m SCRBPrize message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: richblessed.ISCRBPrize, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRBPrize message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRBPrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): richblessed.SCRBPrize;
    }

    /** Properties of a SCRBBilled. */
    interface ISCRBBilled {

        /** SCRBBilled NowGameState */
        NowGameState?: (number|null);

        /** SCRBBilled BetIdx */
        BetIdx?: (number|null);

        /** SCRBBilled Coin */
        Coin?: (number|Long|null);

        /** SCRBBilled Cards */
        Cards?: (number[]|null);

        /** SCRBBilled FreeAllWin */
        FreeAllWin?: (number|Long|null);

        /** SCRBBilled SmallJackpot */
        SmallJackpot?: (number|Long|null);

        /** SCRBBilled WinJackpot */
        WinJackpot?: (number|Long|null);

        /** SCRBBilled WinEleCoin */
        WinEleCoin?: (number|Long|null);

        /** SCRBBilled WinRate */
        WinRate?: (number|Long|null);

        /** SCRBBilled FreeNum */
        FreeNum?: (number|Long|null);

        /** SCRBBilled AddFreeNum */
        AddFreeNum?: (number|Long|null);

        /** SCRBBilled JackpotEle */
        JackpotEle?: (number|null);

        /** SCRBBilled WinLines */
        WinLines?: (richblessed.IRichWinLine[]|null);

        /** SCRBBilled MiddleJackpot */
        MiddleJackpot?: (number|Long|null);

        /** SCRBBilled BigJackpot */
        BigJackpot?: (number|Long|null);

        /** SCRBBilled GrandJackpot */
        GrandJackpot?: (number|Long|null);

        /** SCRBBilled WinFreeTimes */
        WinFreeTimes?: (number|null);
    }

    /** Represents a SCRBBilled. */
    class SCRBBilled implements ISCRBBilled {

        /**
         * Constructs a new SCRBBilled.
         * @param [p] Properties to set
         */
        constructor(p?: richblessed.ISCRBBilled);

        /** SCRBBilled NowGameState. */
        public NowGameState: number;

        /** SCRBBilled BetIdx. */
        public BetIdx: number;

        /** SCRBBilled Coin. */
        public Coin: (number|Long);

        /** SCRBBilled Cards. */
        public Cards: number[];

        /** SCRBBilled FreeAllWin. */
        public FreeAllWin: (number|Long);

        /** SCRBBilled SmallJackpot. */
        public SmallJackpot: (number|Long);

        /** SCRBBilled WinJackpot. */
        public WinJackpot: (number|Long);

        /** SCRBBilled WinEleCoin. */
        public WinEleCoin: (number|Long);

        /** SCRBBilled WinRate. */
        public WinRate: (number|Long);

        /** SCRBBilled FreeNum. */
        public FreeNum: (number|Long);

        /** SCRBBilled AddFreeNum. */
        public AddFreeNum: (number|Long);

        /** SCRBBilled JackpotEle. */
        public JackpotEle: number;

        /** SCRBBilled WinLines. */
        public WinLines: richblessed.IRichWinLine[];

        /** SCRBBilled MiddleJackpot. */
        public MiddleJackpot: (number|Long);

        /** SCRBBilled BigJackpot. */
        public BigJackpot: (number|Long);

        /** SCRBBilled GrandJackpot. */
        public GrandJackpot: (number|Long);

        /** SCRBBilled WinFreeTimes. */
        public WinFreeTimes: number;

        /**
         * Encodes the specified SCRBBilled message. Does not implicitly {@link richblessed.SCRBBilled.verify|verify} messages.
         * @param m SCRBBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: richblessed.ISCRBBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRBBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRBBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): richblessed.SCRBBilled;
    }
}
