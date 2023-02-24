// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace tala. */
export namespace tala {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1
    }

    /** TaLaPacketID enum. */
    enum TaLaPacketID {
        PACKET_TaLaZERO = 0,
        PACKET_SCTaLaRoomInfo = 5530,
        PACKET_SCTaLaRoomState = 5531,
        PACKET_CSTaLaPlayerOp = 5532,
        PACKET_SCTaLaPlayerOp = 5533,
        PACKET_SCTaLaPlayerEnter = 5534,
        PACKET_SCTaLaPlayerLeave = 5535,
        PACKET_SCTaLaHandCard = 5536,
        PACKET_SCTaLaShowPhom = 5537,
        PACKET_SCTaLaOpPhom = 5538,
        PACKET_SCTaLaGameBilled = 5539,
        PACKET_SCTaLaCurOpPos = 5540,
        PACKET_SCTaLaSmallGameBilled = 5541,
        PACKET_SCTaLaUpdateMasterSnid = 5542,
        PACKET_SCTaLaUpdateCardsNum = 5543,
        PACKET_SCTaLaMoveCard = 5544,
        PACKET_SCTaLaRecommendPhom = 5545
    }

    /** Properties of a TaLaPlayerData. */
    interface ITaLaPlayerData {

        /** TaLaPlayerData Name */
        Name?: (string|null);

        /** TaLaPlayerData SnId */
        SnId?: (number|null);

        /** TaLaPlayerData Head */
        Head?: (number|null);

        /** TaLaPlayerData Sex */
        Sex?: (number|null);

        /** TaLaPlayerData Params */
        Params?: (string[]|null);

        /** TaLaPlayerData Coin */
        Coin?: (number|Long|null);

        /** TaLaPlayerData Pos */
        Pos?: (number|null);

        /** TaLaPlayerData Flag */
        Flag?: (number|null);

        /** TaLaPlayerData Longitude */
        Longitude?: (number|null);

        /** TaLaPlayerData Latitude */
        Latitude?: (number|null);

        /** TaLaPlayerData City */
        City?: (string|null);

        /** TaLaPlayerData LastOp */
        LastOp?: (number|null);

        /** TaLaPlayerData VIP */
        VIP?: (number|null);

        /** TaLaPlayerData HeadOutLine */
        HeadOutLine?: (number|null);

        /** TaLaPlayerData NiceId */
        NiceId?: (number|null);

        /** TaLaPlayerData GameCoin */
        GameCoin?: (number|Long|null);

        /** TaLaPlayerData RoleId */
        RoleId?: (number|null);

        /** TaLaPlayerData Items */
        Items?: ({ [k: string]: number }|null);

        /** TaLaPlayerData Cards */
        Cards?: (number[]|null);

        /** TaLaPlayerData ChiCards */
        ChiCards?: (number[]|null);

        /** TaLaPlayerData DelCards */
        DelCards?: (number[]|null);

        /** TaLaPlayerData Phoms */
        Phoms?: (tala.IPhoms[]|null);

        /** TaLaPlayerData Chi2Phom */
        Chi2Phom?: (number[]|null);
    }

    /** Represents a TaLaPlayerData. */
    class TaLaPlayerData implements ITaLaPlayerData {

        /**
         * Constructs a new TaLaPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ITaLaPlayerData);

        /** TaLaPlayerData Name. */
        public Name: string;

        /** TaLaPlayerData SnId. */
        public SnId: number;

        /** TaLaPlayerData Head. */
        public Head: number;

        /** TaLaPlayerData Sex. */
        public Sex: number;

        /** TaLaPlayerData Params. */
        public Params: string[];

        /** TaLaPlayerData Coin. */
        public Coin: (number|Long);

        /** TaLaPlayerData Pos. */
        public Pos: number;

        /** TaLaPlayerData Flag. */
        public Flag: number;

        /** TaLaPlayerData Longitude. */
        public Longitude: number;

        /** TaLaPlayerData Latitude. */
        public Latitude: number;

        /** TaLaPlayerData City. */
        public City: string;

        /** TaLaPlayerData LastOp. */
        public LastOp: number;

        /** TaLaPlayerData VIP. */
        public VIP: number;

        /** TaLaPlayerData HeadOutLine. */
        public HeadOutLine: number;

        /** TaLaPlayerData NiceId. */
        public NiceId: number;

        /** TaLaPlayerData GameCoin. */
        public GameCoin: (number|Long);

        /** TaLaPlayerData RoleId. */
        public RoleId: number;

        /** TaLaPlayerData Items. */
        public Items: { [k: string]: number };

        /** TaLaPlayerData Cards. */
        public Cards: number[];

        /** TaLaPlayerData ChiCards. */
        public ChiCards: number[];

        /** TaLaPlayerData DelCards. */
        public DelCards: number[];

        /** TaLaPlayerData Phoms. */
        public Phoms: tala.IPhoms[];

        /** TaLaPlayerData Chi2Phom. */
        public Chi2Phom: number[];

        /**
         * Encodes the specified TaLaPlayerData message. Does not implicitly {@link tala.TaLaPlayerData.verify|verify} messages.
         * @param m TaLaPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ITaLaPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaLaPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TaLaPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.TaLaPlayerData;
    }

    /** Properties of a LastDelCard. */
    interface ILastDelCard {

        /** LastDelCard Cards */
        Cards?: (number[]|null);
    }

    /** Represents a LastDelCard. */
    class LastDelCard implements ILastDelCard {

        /**
         * Constructs a new LastDelCard.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ILastDelCard);

        /** LastDelCard Cards. */
        public Cards: number[];

        /**
         * Encodes the specified LastDelCard message. Does not implicitly {@link tala.LastDelCard.verify|verify} messages.
         * @param m LastDelCard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ILastDelCard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LastDelCard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LastDelCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.LastDelCard;
    }

    /** Properties of a SCTaLaRoomInfo. */
    interface ISCTaLaRoomInfo {

        /** SCTaLaRoomInfo RoomId */
        RoomId?: (number|null);

        /** SCTaLaRoomInfo Creator */
        Creator?: (number|null);

        /** SCTaLaRoomInfo GameId */
        GameId?: (number|null);

        /** SCTaLaRoomInfo RoomMode */
        RoomMode?: (number|null);

        /** SCTaLaRoomInfo Params */
        Params?: (number[]|null);

        /** SCTaLaRoomInfo BankerPos */
        BankerPos?: (number|null);

        /** SCTaLaRoomInfo State */
        State?: (number|null);

        /** SCTaLaRoomInfo TimeOut */
        TimeOut?: (number|null);

        /** SCTaLaRoomInfo Players */
        Players?: (tala.ITaLaPlayerData[]|null);

        /** SCTaLaRoomInfo AudienceNum */
        AudienceNum?: (number|null);

        /** SCTaLaRoomInfo CurOpIdx */
        CurOpIdx?: (number|null);

        /** SCTaLaRoomInfo LastDelCards */
        LastDelCards?: (tala.ILastDelCard[]|null);

        /** SCTaLaRoomInfo NumOfGames */
        NumOfGames?: (number|null);

        /** SCTaLaRoomInfo TotalOfGames */
        TotalOfGames?: (number|null);

        /** SCTaLaRoomInfo MasterSnid */
        MasterSnid?: (number|null);

        /** SCTaLaRoomInfo BaseScore */
        BaseScore?: (number|null);

        /** SCTaLaRoomInfo MaxPlayerNum */
        MaxPlayerNum?: (number|null);

        /** SCTaLaRoomInfo CardsNum */
        CardsNum?: (number|null);

        /** SCTaLaRoomInfo IsLast */
        IsLast?: (boolean|null);
    }

    /** Represents a SCTaLaRoomInfo. */
    class SCTaLaRoomInfo implements ISCTaLaRoomInfo {

        /**
         * Constructs a new SCTaLaRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaRoomInfo);

        /** SCTaLaRoomInfo RoomId. */
        public RoomId: number;

        /** SCTaLaRoomInfo Creator. */
        public Creator: number;

        /** SCTaLaRoomInfo GameId. */
        public GameId: number;

        /** SCTaLaRoomInfo RoomMode. */
        public RoomMode: number;

        /** SCTaLaRoomInfo Params. */
        public Params: number[];

        /** SCTaLaRoomInfo BankerPos. */
        public BankerPos: number;

        /** SCTaLaRoomInfo State. */
        public State: number;

        /** SCTaLaRoomInfo TimeOut. */
        public TimeOut: number;

        /** SCTaLaRoomInfo Players. */
        public Players: tala.ITaLaPlayerData[];

        /** SCTaLaRoomInfo AudienceNum. */
        public AudienceNum: number;

        /** SCTaLaRoomInfo CurOpIdx. */
        public CurOpIdx: number;

        /** SCTaLaRoomInfo LastDelCards. */
        public LastDelCards: tala.ILastDelCard[];

        /** SCTaLaRoomInfo NumOfGames. */
        public NumOfGames: number;

        /** SCTaLaRoomInfo TotalOfGames. */
        public TotalOfGames: number;

        /** SCTaLaRoomInfo MasterSnid. */
        public MasterSnid: number;

        /** SCTaLaRoomInfo BaseScore. */
        public BaseScore: number;

        /** SCTaLaRoomInfo MaxPlayerNum. */
        public MaxPlayerNum: number;

        /** SCTaLaRoomInfo CardsNum. */
        public CardsNum: number;

        /** SCTaLaRoomInfo IsLast. */
        public IsLast: boolean;

        /**
         * Encodes the specified SCTaLaRoomInfo message. Does not implicitly {@link tala.SCTaLaRoomInfo.verify|verify} messages.
         * @param m SCTaLaRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaRoomInfo;
    }

    /** Properties of a SCTaLaRoomState. */
    interface ISCTaLaRoomState {

        /** SCTaLaRoomState State */
        State?: (number|null);

        /** SCTaLaRoomState Params */
        Params?: ((number|Long)[]|null);
    }

    /** Represents a SCTaLaRoomState. */
    class SCTaLaRoomState implements ISCTaLaRoomState {

        /**
         * Constructs a new SCTaLaRoomState.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaRoomState);

        /** SCTaLaRoomState State. */
        public State: number;

        /** SCTaLaRoomState Params. */
        public Params: (number|Long)[];

        /**
         * Encodes the specified SCTaLaRoomState message. Does not implicitly {@link tala.SCTaLaRoomState.verify|verify} messages.
         * @param m SCTaLaRoomState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaRoomState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaRoomState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaRoomState;
    }

    /** Properties of a CSTaLaPlayerOp. */
    interface ICSTaLaPlayerOp {

        /** CSTaLaPlayerOp OpCode */
        OpCode?: (number|null);

        /** CSTaLaPlayerOp OpParam */
        OpParam?: ((number|Long)[]|null);
    }

    /** Represents a CSTaLaPlayerOp. */
    class CSTaLaPlayerOp implements ICSTaLaPlayerOp {

        /**
         * Constructs a new CSTaLaPlayerOp.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ICSTaLaPlayerOp);

        /** CSTaLaPlayerOp OpCode. */
        public OpCode: number;

        /** CSTaLaPlayerOp OpParam. */
        public OpParam: (number|Long)[];

        /**
         * Encodes the specified CSTaLaPlayerOp message. Does not implicitly {@link tala.CSTaLaPlayerOp.verify|verify} messages.
         * @param m CSTaLaPlayerOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ICSTaLaPlayerOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSTaLaPlayerOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSTaLaPlayerOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.CSTaLaPlayerOp;
    }

    /** Properties of a SCTaLaPlayerOp. */
    interface ISCTaLaPlayerOp {

        /** SCTaLaPlayerOp OpCode */
        OpCode?: (number|null);

        /** SCTaLaPlayerOp OpParam */
        OpParam?: ((number|Long)[]|null);

        /** SCTaLaPlayerOp SnId */
        SnId?: (number|null);

        /** SCTaLaPlayerOp OpRetCode */
        OpRetCode?: (tala.OpResultCode|null);
    }

    /** Represents a SCTaLaPlayerOp. */
    class SCTaLaPlayerOp implements ISCTaLaPlayerOp {

        /**
         * Constructs a new SCTaLaPlayerOp.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaPlayerOp);

        /** SCTaLaPlayerOp OpCode. */
        public OpCode: number;

        /** SCTaLaPlayerOp OpParam. */
        public OpParam: (number|Long)[];

        /** SCTaLaPlayerOp SnId. */
        public SnId: number;

        /** SCTaLaPlayerOp OpRetCode. */
        public OpRetCode: tala.OpResultCode;

        /**
         * Encodes the specified SCTaLaPlayerOp message. Does not implicitly {@link tala.SCTaLaPlayerOp.verify|verify} messages.
         * @param m SCTaLaPlayerOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaPlayerOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaPlayerOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaPlayerOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaPlayerOp;
    }

    /** Properties of a SCTaLaPlayerEnter. */
    interface ISCTaLaPlayerEnter {

        /** SCTaLaPlayerEnter Data */
        Data?: (tala.ITaLaPlayerData|null);
    }

    /** Represents a SCTaLaPlayerEnter. */
    class SCTaLaPlayerEnter implements ISCTaLaPlayerEnter {

        /**
         * Constructs a new SCTaLaPlayerEnter.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaPlayerEnter);

        /** SCTaLaPlayerEnter Data. */
        public Data?: (tala.ITaLaPlayerData|null);

        /**
         * Encodes the specified SCTaLaPlayerEnter message. Does not implicitly {@link tala.SCTaLaPlayerEnter.verify|verify} messages.
         * @param m SCTaLaPlayerEnter message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaPlayerEnter, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaPlayerEnter message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaPlayerEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaPlayerEnter;
    }

    /** Properties of a SCTaLaPlayerLeave. */
    interface ISCTaLaPlayerLeave {

        /** SCTaLaPlayerLeave Pos */
        Pos?: (number|null);
    }

    /** Represents a SCTaLaPlayerLeave. */
    class SCTaLaPlayerLeave implements ISCTaLaPlayerLeave {

        /**
         * Constructs a new SCTaLaPlayerLeave.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaPlayerLeave);

        /** SCTaLaPlayerLeave Pos. */
        public Pos: number;

        /**
         * Encodes the specified SCTaLaPlayerLeave message. Does not implicitly {@link tala.SCTaLaPlayerLeave.verify|verify} messages.
         * @param m SCTaLaPlayerLeave message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaPlayerLeave, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaPlayerLeave message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaPlayerLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaPlayerLeave;
    }

    /** Properties of a TaLaPlayerGameBilled. */
    interface ITaLaPlayerGameBilled {

        /** TaLaPlayerGameBilled SnId */
        SnId?: (number|null);

        /** TaLaPlayerGameBilled Cards */
        Cards?: (number[]|null);

        /** TaLaPlayerGameBilled WinCoin */
        WinCoin?: (number|Long|null);

        /** TaLaPlayerGameBilled GameCoin */
        GameCoin?: (number|Long|null);

        /** TaLaPlayerGameBilled IsWin */
        IsWin?: (number|null);

        /** TaLaPlayerGameBilled Rank */
        Rank?: (number|null);

        /** TaLaPlayerGameBilled Phoms */
        Phoms?: (tala.IPhoms[]|null);
    }

    /** Represents a TaLaPlayerGameBilled. */
    class TaLaPlayerGameBilled implements ITaLaPlayerGameBilled {

        /**
         * Constructs a new TaLaPlayerGameBilled.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ITaLaPlayerGameBilled);

        /** TaLaPlayerGameBilled SnId. */
        public SnId: number;

        /** TaLaPlayerGameBilled Cards. */
        public Cards: number[];

        /** TaLaPlayerGameBilled WinCoin. */
        public WinCoin: (number|Long);

        /** TaLaPlayerGameBilled GameCoin. */
        public GameCoin: (number|Long);

        /** TaLaPlayerGameBilled IsWin. */
        public IsWin: number;

        /** TaLaPlayerGameBilled Rank. */
        public Rank: number;

        /** TaLaPlayerGameBilled Phoms. */
        public Phoms: tala.IPhoms[];

        /**
         * Encodes the specified TaLaPlayerGameBilled message. Does not implicitly {@link tala.TaLaPlayerGameBilled.verify|verify} messages.
         * @param m TaLaPlayerGameBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ITaLaPlayerGameBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaLaPlayerGameBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TaLaPlayerGameBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.TaLaPlayerGameBilled;
    }

    /** Properties of a SCTaLaGameBilled. */
    interface ISCTaLaGameBilled {

        /** SCTaLaGameBilled Datas */
        Datas?: (tala.ITaLaPlayerGameBilled[]|null);
    }

    /** Represents a SCTaLaGameBilled. */
    class SCTaLaGameBilled implements ISCTaLaGameBilled {

        /**
         * Constructs a new SCTaLaGameBilled.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaGameBilled);

        /** SCTaLaGameBilled Datas. */
        public Datas: tala.ITaLaPlayerGameBilled[];

        /**
         * Encodes the specified SCTaLaGameBilled message. Does not implicitly {@link tala.SCTaLaGameBilled.verify|verify} messages.
         * @param m SCTaLaGameBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaGameBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaGameBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaGameBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaGameBilled;
    }

    /** Properties of a SCTaLaSmallGameBilled. */
    interface ISCTaLaSmallGameBilled {

        /** SCTaLaSmallGameBilled WinPos */
        WinPos?: (number|null);

        /** SCTaLaSmallGameBilled WinPosCoin */
        WinPosCoin?: (number|Long|null);

        /** SCTaLaSmallGameBilled LosePos */
        LosePos?: (number|null);

        /** SCTaLaSmallGameBilled LosePosCoin */
        LosePosCoin?: (number|Long|null);

        /** SCTaLaSmallGameBilled WinCoin */
        WinCoin?: (number|Long|null);

        /** SCTaLaSmallGameBilled LoseCoin */
        LoseCoin?: (number|Long|null);
    }

    /** Represents a SCTaLaSmallGameBilled. */
    class SCTaLaSmallGameBilled implements ISCTaLaSmallGameBilled {

        /**
         * Constructs a new SCTaLaSmallGameBilled.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaSmallGameBilled);

        /** SCTaLaSmallGameBilled WinPos. */
        public WinPos: number;

        /** SCTaLaSmallGameBilled WinPosCoin. */
        public WinPosCoin: (number|Long);

        /** SCTaLaSmallGameBilled LosePos. */
        public LosePos: number;

        /** SCTaLaSmallGameBilled LosePosCoin. */
        public LosePosCoin: (number|Long);

        /** SCTaLaSmallGameBilled WinCoin. */
        public WinCoin: (number|Long);

        /** SCTaLaSmallGameBilled LoseCoin. */
        public LoseCoin: (number|Long);

        /**
         * Encodes the specified SCTaLaSmallGameBilled message. Does not implicitly {@link tala.SCTaLaSmallGameBilled.verify|verify} messages.
         * @param m SCTaLaSmallGameBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaSmallGameBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaSmallGameBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaSmallGameBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaSmallGameBilled;
    }

    /** Properties of a SCTaLaHandCard. */
    interface ISCTaLaHandCard {

        /** SCTaLaHandCard Cards */
        Cards?: (number[]|null);
    }

    /** Represents a SCTaLaHandCard. */
    class SCTaLaHandCard implements ISCTaLaHandCard {

        /**
         * Constructs a new SCTaLaHandCard.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaHandCard);

        /** SCTaLaHandCard Cards. */
        public Cards: number[];

        /**
         * Encodes the specified SCTaLaHandCard message. Does not implicitly {@link tala.SCTaLaHandCard.verify|verify} messages.
         * @param m SCTaLaHandCard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaHandCard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaHandCard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaHandCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaHandCard;
    }

    /** Properties of a Phoms. */
    interface IPhoms {

        /** Phoms Phom */
        Phom?: (number[]|null);
    }

    /** Represents a Phoms. */
    class Phoms implements IPhoms {

        /**
         * Constructs a new Phoms.
         * @param [p] Properties to set
         */
        constructor(p?: tala.IPhoms);

        /** Phoms Phom. */
        public Phom: number[];

        /**
         * Encodes the specified Phoms message. Does not implicitly {@link tala.Phoms.verify|verify} messages.
         * @param m Phoms message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.IPhoms, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Phoms message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Phoms
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.Phoms;
    }

    /** Properties of a SCTaLaShowPhom. */
    interface ISCTaLaShowPhom {

        /** SCTaLaShowPhom Snid */
        Snid?: (number|null);

        /** SCTaLaShowPhom Cards */
        Cards?: (number[]|null);

        /** SCTaLaShowPhom Phoms */
        Phoms?: (tala.IPhoms[]|null);

        /** SCTaLaShowPhom OpRetCode */
        OpRetCode?: (tala.OpResultCode|null);
    }

    /** Represents a SCTaLaShowPhom. */
    class SCTaLaShowPhom implements ISCTaLaShowPhom {

        /**
         * Constructs a new SCTaLaShowPhom.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaShowPhom);

        /** SCTaLaShowPhom Snid. */
        public Snid: number;

        /** SCTaLaShowPhom Cards. */
        public Cards: number[];

        /** SCTaLaShowPhom Phoms. */
        public Phoms: tala.IPhoms[];

        /** SCTaLaShowPhom OpRetCode. */
        public OpRetCode: tala.OpResultCode;

        /**
         * Encodes the specified SCTaLaShowPhom message. Does not implicitly {@link tala.SCTaLaShowPhom.verify|verify} messages.
         * @param m SCTaLaShowPhom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaShowPhom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaShowPhom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaShowPhom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaShowPhom;
    }

    /** Properties of a MapSnidCards. */
    interface IMapSnidCards {

        /** MapSnidCards SnidCard */
        SnidCard?: ({ [k: string]: number }|null);
    }

    /** Represents a MapSnidCards. */
    class MapSnidCards implements IMapSnidCards {

        /**
         * Constructs a new MapSnidCards.
         * @param [p] Properties to set
         */
        constructor(p?: tala.IMapSnidCards);

        /** MapSnidCards SnidCard. */
        public SnidCard: { [k: string]: number };

        /**
         * Encodes the specified MapSnidCards message. Does not implicitly {@link tala.MapSnidCards.verify|verify} messages.
         * @param m MapSnidCards message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.IMapSnidCards, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MapSnidCards message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MapSnidCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.MapSnidCards;
    }

    /** Properties of a SCTaLaOpPhom. */
    interface ISCTaLaOpPhom {

        /** SCTaLaOpPhom Snid */
        Snid?: (number|null);

        /** SCTaLaOpPhom MapSnidCard */
        MapSnidCard?: (tala.IMapSnidCards[]|null);

        /** SCTaLaOpPhom OpRetCode */
        OpRetCode?: (tala.OpResultCode|null);
    }

    /** Represents a SCTaLaOpPhom. */
    class SCTaLaOpPhom implements ISCTaLaOpPhom {

        /**
         * Constructs a new SCTaLaOpPhom.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaOpPhom);

        /** SCTaLaOpPhom Snid. */
        public Snid: number;

        /** SCTaLaOpPhom MapSnidCard. */
        public MapSnidCard: tala.IMapSnidCards[];

        /** SCTaLaOpPhom OpRetCode. */
        public OpRetCode: tala.OpResultCode;

        /**
         * Encodes the specified SCTaLaOpPhom message. Does not implicitly {@link tala.SCTaLaOpPhom.verify|verify} messages.
         * @param m SCTaLaOpPhom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaOpPhom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaOpPhom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaOpPhom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaOpPhom;
    }

    /** Properties of a SCTaLaCurOpPos. */
    interface ISCTaLaCurOpPos {

        /** SCTaLaCurOpPos Pos */
        Pos?: (number|null);

        /** SCTaLaCurOpPos Card */
        Card?: (number|null);
    }

    /** Represents a SCTaLaCurOpPos. */
    class SCTaLaCurOpPos implements ISCTaLaCurOpPos {

        /**
         * Constructs a new SCTaLaCurOpPos.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaCurOpPos);

        /** SCTaLaCurOpPos Pos. */
        public Pos: number;

        /** SCTaLaCurOpPos Card. */
        public Card: number;

        /**
         * Encodes the specified SCTaLaCurOpPos message. Does not implicitly {@link tala.SCTaLaCurOpPos.verify|verify} messages.
         * @param m SCTaLaCurOpPos message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaCurOpPos, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaCurOpPos message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaCurOpPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaCurOpPos;
    }

    /** Properties of a SCTaLaUpdateMasterSnid. */
    interface ISCTaLaUpdateMasterSnid {

        /** SCTaLaUpdateMasterSnid MasterSnid */
        MasterSnid?: (number|null);
    }

    /** Represents a SCTaLaUpdateMasterSnid. */
    class SCTaLaUpdateMasterSnid implements ISCTaLaUpdateMasterSnid {

        /**
         * Constructs a new SCTaLaUpdateMasterSnid.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaUpdateMasterSnid);

        /** SCTaLaUpdateMasterSnid MasterSnid. */
        public MasterSnid: number;

        /**
         * Encodes the specified SCTaLaUpdateMasterSnid message. Does not implicitly {@link tala.SCTaLaUpdateMasterSnid.verify|verify} messages.
         * @param m SCTaLaUpdateMasterSnid message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaUpdateMasterSnid, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaUpdateMasterSnid message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaUpdateMasterSnid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaUpdateMasterSnid;
    }

    /** Properties of a SCTaLaUpdateCardsNum. */
    interface ISCTaLaUpdateCardsNum {

        /** SCTaLaUpdateCardsNum CardsNum */
        CardsNum?: (number|null);

        /** SCTaLaUpdateCardsNum IsLast */
        IsLast?: (boolean|null);
    }

    /** Represents a SCTaLaUpdateCardsNum. */
    class SCTaLaUpdateCardsNum implements ISCTaLaUpdateCardsNum {

        /**
         * Constructs a new SCTaLaUpdateCardsNum.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaUpdateCardsNum);

        /** SCTaLaUpdateCardsNum CardsNum. */
        public CardsNum: number;

        /** SCTaLaUpdateCardsNum IsLast. */
        public IsLast: boolean;

        /**
         * Encodes the specified SCTaLaUpdateCardsNum message. Does not implicitly {@link tala.SCTaLaUpdateCardsNum.verify|verify} messages.
         * @param m SCTaLaUpdateCardsNum message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaUpdateCardsNum, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaUpdateCardsNum message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaUpdateCardsNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaUpdateCardsNum;
    }

    /** Properties of a SCTaLaMoveCard. */
    interface ISCTaLaMoveCard {

        /** SCTaLaMoveCard Snid */
        Snid?: (number|null);

        /** SCTaLaMoveCard DstSnid */
        DstSnid?: (number|null);

        /** SCTaLaMoveCard Card */
        Card?: (number|null);
    }

    /** Represents a SCTaLaMoveCard. */
    class SCTaLaMoveCard implements ISCTaLaMoveCard {

        /**
         * Constructs a new SCTaLaMoveCard.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaMoveCard);

        /** SCTaLaMoveCard Snid. */
        public Snid: number;

        /** SCTaLaMoveCard DstSnid. */
        public DstSnid: number;

        /** SCTaLaMoveCard Card. */
        public Card: number;

        /**
         * Encodes the specified SCTaLaMoveCard message. Does not implicitly {@link tala.SCTaLaMoveCard.verify|verify} messages.
         * @param m SCTaLaMoveCard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaMoveCard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaMoveCard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaMoveCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaMoveCard;
    }

    /** Properties of a SCTaLaRecommendPhom. */
    interface ISCTaLaRecommendPhom {

        /** SCTaLaRecommendPhom Snid */
        Snid?: (number|null);

        /** SCTaLaRecommendPhom cards */
        cards?: (number[]|null);
    }

    /** Represents a SCTaLaRecommendPhom. */
    class SCTaLaRecommendPhom implements ISCTaLaRecommendPhom {

        /**
         * Constructs a new SCTaLaRecommendPhom.
         * @param [p] Properties to set
         */
        constructor(p?: tala.ISCTaLaRecommendPhom);

        /** SCTaLaRecommendPhom Snid. */
        public Snid: number;

        /** SCTaLaRecommendPhom cards. */
        public cards: number[];

        /**
         * Encodes the specified SCTaLaRecommendPhom message. Does not implicitly {@link tala.SCTaLaRecommendPhom.verify|verify} messages.
         * @param m SCTaLaRecommendPhom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tala.ISCTaLaRecommendPhom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaLaRecommendPhom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaLaRecommendPhom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tala.SCTaLaRecommendPhom;
    }
}
