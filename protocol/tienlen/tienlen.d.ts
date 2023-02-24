// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace tienlen. */
export namespace tienlen {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1
    }

    /** TienLenPacketID enum. */
    enum TienLenPacketID {
        PACKET_TienLenZERO = 0,
        PACKET_SCTienLenRoomInfo = 5370,
        PACKET_SCTienLenRoomState = 5371,
        PACKET_CSTienLenPlayerOp = 5372,
        PACKET_SCTienLenPlayerOp = 5373,
        PACKET_SCTienLenPlayerEnter = 5374,
        PACKET_SCTienLenPlayerLeave = 5375,
        PACKET_SCTienLenCard = 5376,
        PACKET_SCTienLenGameBilled = 5377,
        PACKET_SCTienLenCurOpPos = 5378,
        PACKET_SCTienLenSmallGameBilled = 5379,
        PACKET_SCTienLenUpdateMasterSnid = 5380,
        PACKET_SCTienLenUpdateAudienceNum = 5381,
        PACKET_SCTienLenAI = 5382,
        PACKET_SCTienLenFirstOpPos = 5383
    }

    /** Properties of a TienLenPlayerData. */
    interface ITienLenPlayerData {

        /** TienLenPlayerData Name */
        Name?: (string|null);

        /** TienLenPlayerData SnId */
        SnId?: (number|null);

        /** TienLenPlayerData Head */
        Head?: (number|null);

        /** TienLenPlayerData Sex */
        Sex?: (number|null);

        /** TienLenPlayerData Params */
        Params?: (string[]|null);

        /** TienLenPlayerData Coin */
        Coin?: (number|Long|null);

        /** TienLenPlayerData Pos */
        Pos?: (number|null);

        /** TienLenPlayerData Flag */
        Flag?: (number|null);

        /** TienLenPlayerData Longitude */
        Longitude?: (number|null);

        /** TienLenPlayerData Latitude */
        Latitude?: (number|null);

        /** TienLenPlayerData City */
        City?: (string|null);

        /** TienLenPlayerData LastOp */
        LastOp?: (number|null);

        /** TienLenPlayerData VIP */
        VIP?: (number|null);

        /** TienLenPlayerData HeadOutLine */
        HeadOutLine?: (number|null);

        /** TienLenPlayerData NiceId */
        NiceId?: (number|null);

        /** TienLenPlayerData Cards */
        Cards?: (number[]|null);

        /** TienLenPlayerData CurRoundTotalBet */
        CurRoundTotalBet?: (number|Long|null);

        /** TienLenPlayerData GameCoin */
        GameCoin?: (number|Long|null);

        /** TienLenPlayerData RoleId */
        RoleId?: (number|null);

        /** TienLenPlayerData Items */
        Items?: ({ [k: string]: number }|null);

        /** TienLenPlayerData MatchRankId */
        MatchRankId?: (number|null);

        /** TienLenPlayerData Lv */
        Lv?: (number|null);
    }

    /** Represents a TienLenPlayerData. */
    class TienLenPlayerData implements ITienLenPlayerData {

        /**
         * Constructs a new TienLenPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ITienLenPlayerData);

        /** TienLenPlayerData Name. */
        public Name: string;

        /** TienLenPlayerData SnId. */
        public SnId: number;

        /** TienLenPlayerData Head. */
        public Head: number;

        /** TienLenPlayerData Sex. */
        public Sex: number;

        /** TienLenPlayerData Params. */
        public Params: string[];

        /** TienLenPlayerData Coin. */
        public Coin: (number|Long);

        /** TienLenPlayerData Pos. */
        public Pos: number;

        /** TienLenPlayerData Flag. */
        public Flag: number;

        /** TienLenPlayerData Longitude. */
        public Longitude: number;

        /** TienLenPlayerData Latitude. */
        public Latitude: number;

        /** TienLenPlayerData City. */
        public City: string;

        /** TienLenPlayerData LastOp. */
        public LastOp: number;

        /** TienLenPlayerData VIP. */
        public VIP: number;

        /** TienLenPlayerData HeadOutLine. */
        public HeadOutLine: number;

        /** TienLenPlayerData NiceId. */
        public NiceId: number;

        /** TienLenPlayerData Cards. */
        public Cards: number[];

        /** TienLenPlayerData CurRoundTotalBet. */
        public CurRoundTotalBet: (number|Long);

        /** TienLenPlayerData GameCoin. */
        public GameCoin: (number|Long);

        /** TienLenPlayerData RoleId. */
        public RoleId: number;

        /** TienLenPlayerData Items. */
        public Items: { [k: string]: number };

        /** TienLenPlayerData MatchRankId. */
        public MatchRankId: number;

        /** TienLenPlayerData Lv. */
        public Lv: number;

        /**
         * Encodes the specified TienLenPlayerData message. Does not implicitly {@link tienlen.TienLenPlayerData.verify|verify} messages.
         * @param m TienLenPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ITienLenPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TienLenPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TienLenPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.TienLenPlayerData;
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
        constructor(p?: tienlen.ILastDelCard);

        /** LastDelCard Cards. */
        public Cards: number[];

        /**
         * Encodes the specified LastDelCard message. Does not implicitly {@link tienlen.LastDelCard.verify|verify} messages.
         * @param m LastDelCard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ILastDelCard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LastDelCard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LastDelCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.LastDelCard;
    }

    /** Properties of a SCTienLenRoomInfo. */
    interface ISCTienLenRoomInfo {

        /** SCTienLenRoomInfo RoomId */
        RoomId?: (number|null);

        /** SCTienLenRoomInfo Creator */
        Creator?: (number|null);

        /** SCTienLenRoomInfo GameId */
        GameId?: (number|null);

        /** SCTienLenRoomInfo RoomMode */
        RoomMode?: (number|null);

        /** SCTienLenRoomInfo Params */
        Params?: (number[]|null);

        /** SCTienLenRoomInfo BankerPos */
        BankerPos?: (number|null);

        /** SCTienLenRoomInfo State */
        State?: (number|null);

        /** SCTienLenRoomInfo TimeOut */
        TimeOut?: (number|null);

        /** SCTienLenRoomInfo Players */
        Players?: (tienlen.ITienLenPlayerData[]|null);

        /** SCTienLenRoomInfo AudienceNum */
        AudienceNum?: (number|null);

        /** SCTienLenRoomInfo CurOpIdx */
        CurOpIdx?: (number|null);

        /** SCTienLenRoomInfo LastDelCards */
        LastDelCards?: (tienlen.ILastDelCard[]|null);

        /** SCTienLenRoomInfo NumOfGames */
        NumOfGames?: (number|null);

        /** SCTienLenRoomInfo TotalOfGames */
        TotalOfGames?: (number|null);

        /** SCTienLenRoomInfo MasterSnid */
        MasterSnid?: (number|null);

        /** SCTienLenRoomInfo BaseScore */
        BaseScore?: (number|null);

        /** SCTienLenRoomInfo MaxPlayerNum */
        MaxPlayerNum?: (number|null);

        /** SCTienLenRoomInfo WinSnids */
        WinSnids?: (number[]|null);

        /** SCTienLenRoomInfo IsMatch */
        IsMatch?: (number|null);

        /** SCTienLenRoomInfo Round */
        Round?: (number|null);

        /** SCTienLenRoomInfo CurPlayerNum */
        CurPlayerNum?: (number|null);

        /** SCTienLenRoomInfo NextNeed */
        NextNeed?: (number|null);

        /** SCTienLenRoomInfo MatchFinals */
        MatchFinals?: (number|null);
    }

    /** Represents a SCTienLenRoomInfo. */
    class SCTienLenRoomInfo implements ISCTienLenRoomInfo {

        /**
         * Constructs a new SCTienLenRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenRoomInfo);

        /** SCTienLenRoomInfo RoomId. */
        public RoomId: number;

        /** SCTienLenRoomInfo Creator. */
        public Creator: number;

        /** SCTienLenRoomInfo GameId. */
        public GameId: number;

        /** SCTienLenRoomInfo RoomMode. */
        public RoomMode: number;

        /** SCTienLenRoomInfo Params. */
        public Params: number[];

        /** SCTienLenRoomInfo BankerPos. */
        public BankerPos: number;

        /** SCTienLenRoomInfo State. */
        public State: number;

        /** SCTienLenRoomInfo TimeOut. */
        public TimeOut: number;

        /** SCTienLenRoomInfo Players. */
        public Players: tienlen.ITienLenPlayerData[];

        /** SCTienLenRoomInfo AudienceNum. */
        public AudienceNum: number;

        /** SCTienLenRoomInfo CurOpIdx. */
        public CurOpIdx: number;

        /** SCTienLenRoomInfo LastDelCards. */
        public LastDelCards: tienlen.ILastDelCard[];

        /** SCTienLenRoomInfo NumOfGames. */
        public NumOfGames: number;

        /** SCTienLenRoomInfo TotalOfGames. */
        public TotalOfGames: number;

        /** SCTienLenRoomInfo MasterSnid. */
        public MasterSnid: number;

        /** SCTienLenRoomInfo BaseScore. */
        public BaseScore: number;

        /** SCTienLenRoomInfo MaxPlayerNum. */
        public MaxPlayerNum: number;

        /** SCTienLenRoomInfo WinSnids. */
        public WinSnids: number[];

        /** SCTienLenRoomInfo IsMatch. */
        public IsMatch: number;

        /** SCTienLenRoomInfo Round. */
        public Round: number;

        /** SCTienLenRoomInfo CurPlayerNum. */
        public CurPlayerNum: number;

        /** SCTienLenRoomInfo NextNeed. */
        public NextNeed: number;

        /** SCTienLenRoomInfo MatchFinals. */
        public MatchFinals: number;

        /**
         * Encodes the specified SCTienLenRoomInfo message. Does not implicitly {@link tienlen.SCTienLenRoomInfo.verify|verify} messages.
         * @param m SCTienLenRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenRoomInfo;
    }

    /** Properties of a SCTienLenRoomState. */
    interface ISCTienLenRoomState {

        /** SCTienLenRoomState State */
        State?: (number|null);

        /** SCTienLenRoomState Params */
        Params?: ((number|Long)[]|null);
    }

    /** Represents a SCTienLenRoomState. */
    class SCTienLenRoomState implements ISCTienLenRoomState {

        /**
         * Constructs a new SCTienLenRoomState.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenRoomState);

        /** SCTienLenRoomState State. */
        public State: number;

        /** SCTienLenRoomState Params. */
        public Params: (number|Long)[];

        /**
         * Encodes the specified SCTienLenRoomState message. Does not implicitly {@link tienlen.SCTienLenRoomState.verify|verify} messages.
         * @param m SCTienLenRoomState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenRoomState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenRoomState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenRoomState;
    }

    /** Properties of a CSTienLenPlayerOp. */
    interface ICSTienLenPlayerOp {

        /** CSTienLenPlayerOp OpCode */
        OpCode?: (number|null);

        /** CSTienLenPlayerOp OpParam */
        OpParam?: ((number|Long)[]|null);
    }

    /** Represents a CSTienLenPlayerOp. */
    class CSTienLenPlayerOp implements ICSTienLenPlayerOp {

        /**
         * Constructs a new CSTienLenPlayerOp.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ICSTienLenPlayerOp);

        /** CSTienLenPlayerOp OpCode. */
        public OpCode: number;

        /** CSTienLenPlayerOp OpParam. */
        public OpParam: (number|Long)[];

        /**
         * Encodes the specified CSTienLenPlayerOp message. Does not implicitly {@link tienlen.CSTienLenPlayerOp.verify|verify} messages.
         * @param m CSTienLenPlayerOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ICSTienLenPlayerOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSTienLenPlayerOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSTienLenPlayerOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.CSTienLenPlayerOp;
    }

    /** Properties of a SCTienLenPlayerOp. */
    interface ISCTienLenPlayerOp {

        /** SCTienLenPlayerOp OpCode */
        OpCode?: (number|null);

        /** SCTienLenPlayerOp OpParam */
        OpParam?: ((number|Long)[]|null);

        /** SCTienLenPlayerOp SnId */
        SnId?: (number|null);

        /** SCTienLenPlayerOp OpRetCode */
        OpRetCode?: (tienlen.OpResultCode|null);
    }

    /** Represents a SCTienLenPlayerOp. */
    class SCTienLenPlayerOp implements ISCTienLenPlayerOp {

        /**
         * Constructs a new SCTienLenPlayerOp.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenPlayerOp);

        /** SCTienLenPlayerOp OpCode. */
        public OpCode: number;

        /** SCTienLenPlayerOp OpParam. */
        public OpParam: (number|Long)[];

        /** SCTienLenPlayerOp SnId. */
        public SnId: number;

        /** SCTienLenPlayerOp OpRetCode. */
        public OpRetCode: tienlen.OpResultCode;

        /**
         * Encodes the specified SCTienLenPlayerOp message. Does not implicitly {@link tienlen.SCTienLenPlayerOp.verify|verify} messages.
         * @param m SCTienLenPlayerOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenPlayerOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenPlayerOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenPlayerOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenPlayerOp;
    }

    /** Properties of a SCTienLenPlayerEnter. */
    interface ISCTienLenPlayerEnter {

        /** SCTienLenPlayerEnter Data */
        Data?: (tienlen.ITienLenPlayerData|null);
    }

    /** Represents a SCTienLenPlayerEnter. */
    class SCTienLenPlayerEnter implements ISCTienLenPlayerEnter {

        /**
         * Constructs a new SCTienLenPlayerEnter.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenPlayerEnter);

        /** SCTienLenPlayerEnter Data. */
        public Data?: (tienlen.ITienLenPlayerData|null);

        /**
         * Encodes the specified SCTienLenPlayerEnter message. Does not implicitly {@link tienlen.SCTienLenPlayerEnter.verify|verify} messages.
         * @param m SCTienLenPlayerEnter message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenPlayerEnter, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenPlayerEnter message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenPlayerEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenPlayerEnter;
    }

    /** Properties of a SCTienLenPlayerLeave. */
    interface ISCTienLenPlayerLeave {

        /** SCTienLenPlayerLeave Pos */
        Pos?: (number|null);
    }

    /** Represents a SCTienLenPlayerLeave. */
    class SCTienLenPlayerLeave implements ISCTienLenPlayerLeave {

        /**
         * Constructs a new SCTienLenPlayerLeave.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenPlayerLeave);

        /** SCTienLenPlayerLeave Pos. */
        public Pos: number;

        /**
         * Encodes the specified SCTienLenPlayerLeave message. Does not implicitly {@link tienlen.SCTienLenPlayerLeave.verify|verify} messages.
         * @param m SCTienLenPlayerLeave message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenPlayerLeave, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenPlayerLeave message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenPlayerLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenPlayerLeave;
    }

    /** Properties of a TienLenPlayerGameBilled. */
    interface ITienLenPlayerGameBilled {

        /** TienLenPlayerGameBilled SnId */
        SnId?: (number|null);

        /** TienLenPlayerGameBilled Cards */
        Cards?: (number[]|null);

        /** TienLenPlayerGameBilled WinCoin */
        WinCoin?: (number|Long|null);

        /** TienLenPlayerGameBilled GameCoin */
        GameCoin?: (number|Long|null);

        /** TienLenPlayerGameBilled IsWin */
        IsWin?: (number|null);
    }

    /** Represents a TienLenPlayerGameBilled. */
    class TienLenPlayerGameBilled implements ITienLenPlayerGameBilled {

        /**
         * Constructs a new TienLenPlayerGameBilled.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ITienLenPlayerGameBilled);

        /** TienLenPlayerGameBilled SnId. */
        public SnId: number;

        /** TienLenPlayerGameBilled Cards. */
        public Cards: number[];

        /** TienLenPlayerGameBilled WinCoin. */
        public WinCoin: (number|Long);

        /** TienLenPlayerGameBilled GameCoin. */
        public GameCoin: (number|Long);

        /** TienLenPlayerGameBilled IsWin. */
        public IsWin: number;

        /**
         * Encodes the specified TienLenPlayerGameBilled message. Does not implicitly {@link tienlen.TienLenPlayerGameBilled.verify|verify} messages.
         * @param m TienLenPlayerGameBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ITienLenPlayerGameBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TienLenPlayerGameBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TienLenPlayerGameBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.TienLenPlayerGameBilled;
    }

    /** Properties of a SCTienLenGameBilled. */
    interface ISCTienLenGameBilled {

        /** SCTienLenGameBilled Datas */
        Datas?: (tienlen.ITienLenPlayerGameBilled[]|null);
    }

    /** Represents a SCTienLenGameBilled. */
    class SCTienLenGameBilled implements ISCTienLenGameBilled {

        /**
         * Constructs a new SCTienLenGameBilled.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenGameBilled);

        /** SCTienLenGameBilled Datas. */
        public Datas: tienlen.ITienLenPlayerGameBilled[];

        /**
         * Encodes the specified SCTienLenGameBilled message. Does not implicitly {@link tienlen.SCTienLenGameBilled.verify|verify} messages.
         * @param m SCTienLenGameBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenGameBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenGameBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenGameBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenGameBilled;
    }

    /** Properties of a SCTienLenSmallGameBilled. */
    interface ISCTienLenSmallGameBilled {

        /** SCTienLenSmallGameBilled WinPos */
        WinPos?: (number|null);

        /** SCTienLenSmallGameBilled WinPosCoin */
        WinPosCoin?: (number|Long|null);

        /** SCTienLenSmallGameBilled LosePos */
        LosePos?: (number|null);

        /** SCTienLenSmallGameBilled LosePosCoin */
        LosePosCoin?: (number|Long|null);

        /** SCTienLenSmallGameBilled WinCoin */
        WinCoin?: (number|Long|null);

        /** SCTienLenSmallGameBilled LoseCoin */
        LoseCoin?: (number|Long|null);
    }

    /** Represents a SCTienLenSmallGameBilled. */
    class SCTienLenSmallGameBilled implements ISCTienLenSmallGameBilled {

        /**
         * Constructs a new SCTienLenSmallGameBilled.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenSmallGameBilled);

        /** SCTienLenSmallGameBilled WinPos. */
        public WinPos: number;

        /** SCTienLenSmallGameBilled WinPosCoin. */
        public WinPosCoin: (number|Long);

        /** SCTienLenSmallGameBilled LosePos. */
        public LosePos: number;

        /** SCTienLenSmallGameBilled LosePosCoin. */
        public LosePosCoin: (number|Long);

        /** SCTienLenSmallGameBilled WinCoin. */
        public WinCoin: (number|Long);

        /** SCTienLenSmallGameBilled LoseCoin. */
        public LoseCoin: (number|Long);

        /**
         * Encodes the specified SCTienLenSmallGameBilled message. Does not implicitly {@link tienlen.SCTienLenSmallGameBilled.verify|verify} messages.
         * @param m SCTienLenSmallGameBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenSmallGameBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenSmallGameBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenSmallGameBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenSmallGameBilled;
    }

    /** Properties of a SCTienLenCard. */
    interface ISCTienLenCard {

        /** SCTienLenCard Cards */
        Cards?: (number[]|null);
    }

    /** Represents a SCTienLenCard. */
    class SCTienLenCard implements ISCTienLenCard {

        /**
         * Constructs a new SCTienLenCard.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenCard);

        /** SCTienLenCard Cards. */
        public Cards: number[];

        /**
         * Encodes the specified SCTienLenCard message. Does not implicitly {@link tienlen.SCTienLenCard.verify|verify} messages.
         * @param m SCTienLenCard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenCard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenCard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenCard;
    }

    /** Properties of a SCTienLenCurOpPos. */
    interface ISCTienLenCurOpPos {

        /** SCTienLenCurOpPos Pos */
        Pos?: (number|null);

        /** SCTienLenCurOpPos IsNew */
        IsNew?: (boolean|null);

        /** SCTienLenCurOpPos Cards */
        Cards?: (number[]|null);

        /** SCTienLenCurOpPos ExDelay */
        ExDelay?: (number|null);
    }

    /** Represents a SCTienLenCurOpPos. */
    class SCTienLenCurOpPos implements ISCTienLenCurOpPos {

        /**
         * Constructs a new SCTienLenCurOpPos.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenCurOpPos);

        /** SCTienLenCurOpPos Pos. */
        public Pos: number;

        /** SCTienLenCurOpPos IsNew. */
        public IsNew: boolean;

        /** SCTienLenCurOpPos Cards. */
        public Cards: number[];

        /** SCTienLenCurOpPos ExDelay. */
        public ExDelay: number;

        /**
         * Encodes the specified SCTienLenCurOpPos message. Does not implicitly {@link tienlen.SCTienLenCurOpPos.verify|verify} messages.
         * @param m SCTienLenCurOpPos message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenCurOpPos, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenCurOpPos message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenCurOpPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenCurOpPos;
    }

    /** Properties of a SCTienLenUpdateMasterSnid. */
    interface ISCTienLenUpdateMasterSnid {

        /** SCTienLenUpdateMasterSnid MasterSnid */
        MasterSnid?: (number|null);
    }

    /** Represents a SCTienLenUpdateMasterSnid. */
    class SCTienLenUpdateMasterSnid implements ISCTienLenUpdateMasterSnid {

        /**
         * Constructs a new SCTienLenUpdateMasterSnid.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenUpdateMasterSnid);

        /** SCTienLenUpdateMasterSnid MasterSnid. */
        public MasterSnid: number;

        /**
         * Encodes the specified SCTienLenUpdateMasterSnid message. Does not implicitly {@link tienlen.SCTienLenUpdateMasterSnid.verify|verify} messages.
         * @param m SCTienLenUpdateMasterSnid message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenUpdateMasterSnid, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenUpdateMasterSnid message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenUpdateMasterSnid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenUpdateMasterSnid;
    }

    /** Properties of a SCTienLenUpdateAudienceNum. */
    interface ISCTienLenUpdateAudienceNum {

        /** SCTienLenUpdateAudienceNum AudienceNum */
        AudienceNum?: (number|null);
    }

    /** Represents a SCTienLenUpdateAudienceNum. */
    class SCTienLenUpdateAudienceNum implements ISCTienLenUpdateAudienceNum {

        /**
         * Constructs a new SCTienLenUpdateAudienceNum.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenUpdateAudienceNum);

        /** SCTienLenUpdateAudienceNum AudienceNum. */
        public AudienceNum: number;

        /**
         * Encodes the specified SCTienLenUpdateAudienceNum message. Does not implicitly {@link tienlen.SCTienLenUpdateAudienceNum.verify|verify} messages.
         * @param m SCTienLenUpdateAudienceNum message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenUpdateAudienceNum, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenUpdateAudienceNum message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenUpdateAudienceNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenUpdateAudienceNum;
    }

    /** Properties of a SCTienLenAIData. */
    interface ISCTienLenAIData {

        /** SCTienLenAIData BombNum */
        BombNum?: (number|null);

        /** SCTienLenAIData CardPlayActionSeq */
        CardPlayActionSeq?: (string|null);

        /** SCTienLenAIData LastMove_0 */
        LastMove_0?: (string|null);

        /** SCTienLenAIData LastMove_1 */
        LastMove_1?: (string|null);

        /** SCTienLenAIData LastMove_2 */
        LastMove_2?: (string|null);

        /** SCTienLenAIData LastMove_3 */
        LastMove_3?: (string|null);

        /** SCTienLenAIData NumCardsLeft_0 */
        NumCardsLeft_0?: (number|null);

        /** SCTienLenAIData NumCardsLeft_1 */
        NumCardsLeft_1?: (number|null);

        /** SCTienLenAIData NumCardsLeft_2 */
        NumCardsLeft_2?: (number|null);

        /** SCTienLenAIData NumCardsLeft_3 */
        NumCardsLeft_3?: (number|null);

        /** SCTienLenAIData OtherHandCards */
        OtherHandCards?: (string|null);

        /** SCTienLenAIData PlayedCards_0 */
        PlayedCards_0?: (string|null);

        /** SCTienLenAIData PlayedCards_1 */
        PlayedCards_1?: (string|null);

        /** SCTienLenAIData PlayedCards_2 */
        PlayedCards_2?: (string|null);

        /** SCTienLenAIData PlayedCards_3 */
        PlayedCards_3?: (string|null);

        /** SCTienLenAIData PlayerHandCards */
        PlayerHandCards?: (string|null);

        /** SCTienLenAIData PlayerPosition */
        PlayerPosition?: (number|null);
    }

    /** Represents a SCTienLenAIData. */
    class SCTienLenAIData implements ISCTienLenAIData {

        /**
         * Constructs a new SCTienLenAIData.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenAIData);

        /** SCTienLenAIData BombNum. */
        public BombNum: number;

        /** SCTienLenAIData CardPlayActionSeq. */
        public CardPlayActionSeq: string;

        /** SCTienLenAIData LastMove_0. */
        public LastMove_0: string;

        /** SCTienLenAIData LastMove_1. */
        public LastMove_1: string;

        /** SCTienLenAIData LastMove_2. */
        public LastMove_2: string;

        /** SCTienLenAIData LastMove_3. */
        public LastMove_3: string;

        /** SCTienLenAIData NumCardsLeft_0. */
        public NumCardsLeft_0: number;

        /** SCTienLenAIData NumCardsLeft_1. */
        public NumCardsLeft_1: number;

        /** SCTienLenAIData NumCardsLeft_2. */
        public NumCardsLeft_2: number;

        /** SCTienLenAIData NumCardsLeft_3. */
        public NumCardsLeft_3: number;

        /** SCTienLenAIData OtherHandCards. */
        public OtherHandCards: string;

        /** SCTienLenAIData PlayedCards_0. */
        public PlayedCards_0: string;

        /** SCTienLenAIData PlayedCards_1. */
        public PlayedCards_1: string;

        /** SCTienLenAIData PlayedCards_2. */
        public PlayedCards_2: string;

        /** SCTienLenAIData PlayedCards_3. */
        public PlayedCards_3: string;

        /** SCTienLenAIData PlayerHandCards. */
        public PlayerHandCards: string;

        /** SCTienLenAIData PlayerPosition. */
        public PlayerPosition: number;

        /**
         * Encodes the specified SCTienLenAIData message. Does not implicitly {@link tienlen.SCTienLenAIData.verify|verify} messages.
         * @param m SCTienLenAIData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenAIData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenAIData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenAIData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenAIData;
    }

    /** Properties of a SCTienLenFirstOpPos. */
    interface ISCTienLenFirstOpPos {

        /** SCTienLenFirstOpPos Pos */
        Pos?: (number|null);
    }

    /** Represents a SCTienLenFirstOpPos. */
    class SCTienLenFirstOpPos implements ISCTienLenFirstOpPos {

        /**
         * Constructs a new SCTienLenFirstOpPos.
         * @param [p] Properties to set
         */
        constructor(p?: tienlen.ISCTienLenFirstOpPos);

        /** SCTienLenFirstOpPos Pos. */
        public Pos: number;

        /**
         * Encodes the specified SCTienLenFirstOpPos message. Does not implicitly {@link tienlen.SCTienLenFirstOpPos.verify|verify} messages.
         * @param m SCTienLenFirstOpPos message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tienlen.ISCTienLenFirstOpPos, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTienLenFirstOpPos message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTienLenFirstOpPos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tienlen.SCTienLenFirstOpPos;
    }
}
