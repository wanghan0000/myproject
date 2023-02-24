// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace fishing. */
export namespace fishing {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_CoinNotEnough = 1056
    }

    /** FIPacketID enum. */
    enum FIPacketID {
        FISHING_ZERO = 0,
        FISHING_SC_ROOMINFO = 5000,
        FISHING_CS_OP = 5001,
        FISHING_SC_OP = 5002,
        FISHING_SC_ROOMSTATE = 5003,
        FISHING_SC_SEATS = 5004,
        FISHING_SC_SYNCFISH = 5006,
        FISHING_SC_FISHERENTER = 5007,
        FISHING_CS_LOADCOMPLETE = 5008,
        FISHING_SC_FIRE = 5009,
        FISHING_SC_FIREHIT = 5010,
        FISHING_SC_FIREPOWER = 5011,
        FISHING_CS_FREEZE = 5012,
        FISHING_SC_FREEZE = 5013,
        FISHING_CS_FISHVIEW = 5014,
        FISHING_SC_FISHVIEW = 5015,
        FISHING_CS_FISHTARGET = 5016,
        FISHING_SC_FISHTARGET = 5017,
        FISHING_SC_SELVIP = 5018,
        FISHING_SC_ENTER = 5019,
        FISHING_SC_LEAVE = 5020,
        FISHING_SC_FISHDEL = 5022,
        FISHING_SC_JACKPOTFISHDEL = 5023,
        FISHING_CS_LOOKLOCKFISH = 5024,
        FISHING_SC_LOOKLOCKFISH = 5025,
        FISHING_SC_PRANACHANGE = 5026,
        FISHING_CS_REALYPRANA = 5027,
        FISHING_SC_REALYPRANA = 5028,
        FISHING_CS_FIREPRANA = 5029,
        FISHING_SC_FIREPRANA = 5030,
        FISHING_SC_JACKPOTPOOLCHANGE = 5031,
        FISHING_SC_JACKPOTCOIN = 5032,
        FISHING_SC_RETPRANACOIN = 5033,
        FISHING_SC_REBINDAGENT = 5034,
        FISHING_SC_FIREMISS = 5035,
        FISHING_SC_SCROBOTBEHAVIOR = 5036,
        FISHING_SC_SCSYNCFISHCOIN = 5037,
        FISHING_SC_NEWSYNCFISH = 5038,
        FISHING_SC_TREASURECHESTEVENT = 5039,
        FISHING_SC_SYNCFISHHP = 5040,
        FISHING_SC_POWERSTATE = 5041
    }

    /** Properties of a FishingPlayerData. */
    interface IFishingPlayerData {

        /** FishingPlayerData Name */
        Name?: (string|null);

        /** FishingPlayerData SnId */
        SnId?: (number|null);

        /** FishingPlayerData Head */
        Head?: (number|null);

        /** FishingPlayerData Sex */
        Sex?: (number|null);

        /** FishingPlayerData Coin */
        Coin?: (number|Long|null);

        /** FishingPlayerData Pos */
        Pos?: (number|null);

        /** FishingPlayerData Flag */
        Flag?: (number|null);

        /** FishingPlayerData Params */
        Params?: (string|null);

        /** FishingPlayerData City */
        City?: (string|null);

        /** FishingPlayerData HeadOutLine */
        HeadOutLine?: (number|null);

        /** FishingPlayerData VIP */
        VIP?: (number|null);

        /** FishingPlayerData SelVip */
        SelVip?: (number|null);

        /** FishingPlayerData Power */
        Power?: (number|null);

        /** FishingPlayerData IsRobot */
        IsRobot?: (boolean|null);

        /** FishingPlayerData AgentParam */
        AgentParam?: (number|null);

        /** FishingPlayerData TargetSel */
        TargetSel?: (number|null);

        /** FishingPlayerData AutoFishing */
        AutoFishing?: (number|null);

        /** FishingPlayerData FireRate */
        FireRate?: (number|null);

        /** FishingPlayerData PranaPercent */
        PranaPercent?: (number|null);

        /** FishingPlayerData NiceId */
        NiceId?: (number|null);

        /** FishingPlayerData RobotSnIds */
        RobotSnIds?: (number[]|null);
    }

    /** Represents a FishingPlayerData. */
    class FishingPlayerData implements IFishingPlayerData {

        /**
         * Constructs a new FishingPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.IFishingPlayerData);

        /** FishingPlayerData Name. */
        public Name: string;

        /** FishingPlayerData SnId. */
        public SnId: number;

        /** FishingPlayerData Head. */
        public Head: number;

        /** FishingPlayerData Sex. */
        public Sex: number;

        /** FishingPlayerData Coin. */
        public Coin: (number|Long);

        /** FishingPlayerData Pos. */
        public Pos: number;

        /** FishingPlayerData Flag. */
        public Flag: number;

        /** FishingPlayerData Params. */
        public Params: string;

        /** FishingPlayerData City. */
        public City: string;

        /** FishingPlayerData HeadOutLine. */
        public HeadOutLine: number;

        /** FishingPlayerData VIP. */
        public VIP: number;

        /** FishingPlayerData SelVip. */
        public SelVip: number;

        /** FishingPlayerData Power. */
        public Power: number;

        /** FishingPlayerData IsRobot. */
        public IsRobot: boolean;

        /** FishingPlayerData AgentParam. */
        public AgentParam: number;

        /** FishingPlayerData TargetSel. */
        public TargetSel: number;

        /** FishingPlayerData AutoFishing. */
        public AutoFishing: number;

        /** FishingPlayerData FireRate. */
        public FireRate: number;

        /** FishingPlayerData PranaPercent. */
        public PranaPercent: number;

        /** FishingPlayerData NiceId. */
        public NiceId: number;

        /** FishingPlayerData RobotSnIds. */
        public RobotSnIds: number[];

        /**
         * Encodes the specified FishingPlayerData message. Does not implicitly {@link fishing.FishingPlayerData.verify|verify} messages.
         * @param m FishingPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.IFishingPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FishingPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FishingPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.FishingPlayerData;
    }

    /** Properties of a SCFishingRoomInfo. */
    interface ISCFishingRoomInfo {

        /** SCFishingRoomInfo RoomId */
        RoomId?: (number|null);

        /** SCFishingRoomInfo Creator */
        Creator?: (number|null);

        /** SCFishingRoomInfo GameId */
        GameId?: (number|null);

        /** SCFishingRoomInfo RoomMode */
        RoomMode?: (number|null);

        /** SCFishingRoomInfo Params */
        Params?: (number[]|null);

        /** SCFishingRoomInfo NumOfGames */
        NumOfGames?: (number|null);

        /** SCFishingRoomInfo Cards */
        Cards?: (number[]|null);

        /** SCFishingRoomInfo State */
        State?: (number|null);

        /** SCFishingRoomInfo TimeOut */
        TimeOut?: (number|null);

        /** SCFishingRoomInfo DisbandGen */
        DisbandGen?: (number|null);

        /** SCFishingRoomInfo AgentId */
        AgentId?: (number|null);

        /** SCFishingRoomInfo MatchParams */
        MatchParams?: (number[]|null);

        /** SCFishingRoomInfo SceneType */
        SceneType?: (number|null);

        /** SCFishingRoomInfo Players */
        Players?: (fishing.IFishingPlayerData[]|null);

        /** SCFishingRoomInfo GameFreeId */
        GameFreeId?: (number|null);

        /** SCFishingRoomInfo FrozenTick */
        FrozenTick?: (number|null);

        /** SCFishingRoomInfo JackpotPool */
        JackpotPool?: (number|Long|null);
    }

    /** Represents a SCFishingRoomInfo. */
    class SCFishingRoomInfo implements ISCFishingRoomInfo {

        /**
         * Constructs a new SCFishingRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFishingRoomInfo);

        /** SCFishingRoomInfo RoomId. */
        public RoomId: number;

        /** SCFishingRoomInfo Creator. */
        public Creator: number;

        /** SCFishingRoomInfo GameId. */
        public GameId: number;

        /** SCFishingRoomInfo RoomMode. */
        public RoomMode: number;

        /** SCFishingRoomInfo Params. */
        public Params: number[];

        /** SCFishingRoomInfo NumOfGames. */
        public NumOfGames: number;

        /** SCFishingRoomInfo Cards. */
        public Cards: number[];

        /** SCFishingRoomInfo State. */
        public State: number;

        /** SCFishingRoomInfo TimeOut. */
        public TimeOut: number;

        /** SCFishingRoomInfo DisbandGen. */
        public DisbandGen: number;

        /** SCFishingRoomInfo AgentId. */
        public AgentId: number;

        /** SCFishingRoomInfo MatchParams. */
        public MatchParams: number[];

        /** SCFishingRoomInfo SceneType. */
        public SceneType: number;

        /** SCFishingRoomInfo Players. */
        public Players: fishing.IFishingPlayerData[];

        /** SCFishingRoomInfo GameFreeId. */
        public GameFreeId: number;

        /** SCFishingRoomInfo FrozenTick. */
        public FrozenTick: number;

        /** SCFishingRoomInfo JackpotPool. */
        public JackpotPool: (number|Long);

        /**
         * Encodes the specified SCFishingRoomInfo message. Does not implicitly {@link fishing.SCFishingRoomInfo.verify|verify} messages.
         * @param m SCFishingRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFishingRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFishingRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFishingRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFishingRoomInfo;
    }

    /** Properties of a CSFishingOp. */
    interface ICSFishingOp {

        /** CSFishingOp OpCode */
        OpCode?: (number|null);

        /** CSFishingOp Params */
        Params?: ((number|Long)[]|null);
    }

    /** Represents a CSFishingOp. */
    class CSFishingOp implements ICSFishingOp {

        /**
         * Constructs a new CSFishingOp.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ICSFishingOp);

        /** CSFishingOp OpCode. */
        public OpCode: number;

        /** CSFishingOp Params. */
        public Params: (number|Long)[];

        /**
         * Encodes the specified CSFishingOp message. Does not implicitly {@link fishing.CSFishingOp.verify|verify} messages.
         * @param m CSFishingOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ICSFishingOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSFishingOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSFishingOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.CSFishingOp;
    }

    /** Properties of a SCFishingOp. */
    interface ISCFishingOp {

        /** SCFishingOp OpCode */
        OpCode?: (number|null);

        /** SCFishingOp Params */
        Params?: ((number|Long)[]|null);

        /** SCFishingOp OpRetCode */
        OpRetCode?: (fishing.OpResultCode|null);

        /** SCFishingOp SnId */
        SnId?: (number|null);
    }

    /** Represents a SCFishingOp. */
    class SCFishingOp implements ISCFishingOp {

        /**
         * Constructs a new SCFishingOp.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFishingOp);

        /** SCFishingOp OpCode. */
        public OpCode: number;

        /** SCFishingOp Params. */
        public Params: (number|Long)[];

        /** SCFishingOp OpRetCode. */
        public OpRetCode: fishing.OpResultCode;

        /** SCFishingOp SnId. */
        public SnId: number;

        /**
         * Encodes the specified SCFishingOp message. Does not implicitly {@link fishing.SCFishingOp.verify|verify} messages.
         * @param m SCFishingOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFishingOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFishingOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFishingOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFishingOp;
    }

    /** Properties of a SCFire. */
    interface ISCFire {

        /** SCFire Snid */
        Snid?: (number|null);

        /** SCFire X */
        X?: (number|null);

        /** SCFire Y */
        Y?: (number|null);

        /** SCFire Bulletid */
        Bulletid?: (number|null);

        /** SCFire Power */
        Power?: (number|null);

        /** SCFire CurrentPlayerCoin */
        CurrentPlayerCoin?: (number|Long|null);
    }

    /** Represents a SCFire. */
    class SCFire implements ISCFire {

        /**
         * Constructs a new SCFire.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFire);

        /** SCFire Snid. */
        public Snid: number;

        /** SCFire X. */
        public X: number;

        /** SCFire Y. */
        public Y: number;

        /** SCFire Bulletid. */
        public Bulletid: number;

        /** SCFire Power. */
        public Power: number;

        /** SCFire CurrentPlayerCoin. */
        public CurrentPlayerCoin: (number|Long);

        /**
         * Encodes the specified SCFire message. Does not implicitly {@link fishing.SCFire.verify|verify} messages.
         * @param m SCFire message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFire, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFire message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFire
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFire;
    }

    /** Properties of a SCFireHit. */
    interface ISCFireHit {

        /** SCFireHit Snid */
        Snid?: (number|null);

        /** SCFireHit FishId */
        FishId?: (number[]|null);

        /** SCFireHit Coin */
        Coin?: (number[]|null);

        /** SCFireHit Item */
        Item?: (number[]|null);

        /** SCFireHit Money */
        Money?: (number|null);

        /** SCFireHit Ts */
        Ts?: (number|Long|null);

        /** SCFireHit Event */
        Event?: (number|null);

        /** SCFireHit EventFish */
        EventFish?: (number|null);

        /** SCFireHit CurrentPlayerCoin */
        CurrentPlayerCoin?: (number|Long|null);

        /** SCFireHit EventCoin */
        EventCoin?: (number|null);

        /** SCFireHit Power */
        Power?: (number|null);
    }

    /** Represents a SCFireHit. */
    class SCFireHit implements ISCFireHit {

        /**
         * Constructs a new SCFireHit.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFireHit);

        /** SCFireHit Snid. */
        public Snid: number;

        /** SCFireHit FishId. */
        public FishId: number[];

        /** SCFireHit Coin. */
        public Coin: number[];

        /** SCFireHit Item. */
        public Item: number[];

        /** SCFireHit Money. */
        public Money: number;

        /** SCFireHit Ts. */
        public Ts: (number|Long);

        /** SCFireHit Event. */
        public Event: number;

        /** SCFireHit EventFish. */
        public EventFish: number;

        /** SCFireHit CurrentPlayerCoin. */
        public CurrentPlayerCoin: (number|Long);

        /** SCFireHit EventCoin. */
        public EventCoin: number;

        /** SCFireHit Power. */
        public Power: number;

        /**
         * Encodes the specified SCFireHit message. Does not implicitly {@link fishing.SCFireHit.verify|verify} messages.
         * @param m SCFireHit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFireHit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFireHit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFireHit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFireHit;
    }

    /** Properties of a SCTreasureChestEvent. */
    interface ISCTreasureChestEvent {

        /** SCTreasureChestEvent Snid */
        Snid?: (number|null);

        /** SCTreasureChestEvent Reward */
        Reward?: (number[]|null);

        /** SCTreasureChestEvent CurrentPlayerCoin */
        CurrentPlayerCoin?: (number|Long|null);
    }

    /** Represents a SCTreasureChestEvent. */
    class SCTreasureChestEvent implements ISCTreasureChestEvent {

        /**
         * Constructs a new SCTreasureChestEvent.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCTreasureChestEvent);

        /** SCTreasureChestEvent Snid. */
        public Snid: number;

        /** SCTreasureChestEvent Reward. */
        public Reward: number[];

        /** SCTreasureChestEvent CurrentPlayerCoin. */
        public CurrentPlayerCoin: (number|Long);

        /**
         * Encodes the specified SCTreasureChestEvent message. Does not implicitly {@link fishing.SCTreasureChestEvent.verify|verify} messages.
         * @param m SCTreasureChestEvent message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCTreasureChestEvent, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTreasureChestEvent message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTreasureChestEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCTreasureChestEvent;
    }

    /** Properties of a SCFireMiss. */
    interface ISCFireMiss {

        /** SCFireMiss FishId */
        FishId?: (number|null);

        /** SCFireMiss Rate */
        Rate?: (number|null);
    }

    /** Represents a SCFireMiss. */
    class SCFireMiss implements ISCFireMiss {

        /**
         * Constructs a new SCFireMiss.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFireMiss);

        /** SCFireMiss FishId. */
        public FishId: number;

        /** SCFireMiss Rate. */
        public Rate: number;

        /**
         * Encodes the specified SCFireMiss message. Does not implicitly {@link fishing.SCFireMiss.verify|verify} messages.
         * @param m SCFireMiss message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFireMiss, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFireMiss message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFireMiss
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFireMiss;
    }

    /** Properties of a SCFirePower. */
    interface ISCFirePower {

        /** SCFirePower Snid */
        Snid?: (number|null);

        /** SCFirePower Power */
        Power?: (number|null);

        /** SCFirePower RobitFire */
        RobitFire?: (boolean|null);

        /** SCFirePower TargetPower */
        TargetPower?: (number|null);
    }

    /** Represents a SCFirePower. */
    class SCFirePower implements ISCFirePower {

        /**
         * Constructs a new SCFirePower.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFirePower);

        /** SCFirePower Snid. */
        public Snid: number;

        /** SCFirePower Power. */
        public Power: number;

        /** SCFirePower RobitFire. */
        public RobitFire: boolean;

        /** SCFirePower TargetPower. */
        public TargetPower: number;

        /**
         * Encodes the specified SCFirePower message. Does not implicitly {@link fishing.SCFirePower.verify|verify} messages.
         * @param m SCFirePower message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFirePower, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFirePower message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFirePower
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFirePower;
    }

    /** Properties of a SCSelVip. */
    interface ISCSelVip {

        /** SCSelVip Snid */
        Snid?: (number|null);

        /** SCSelVip Vip */
        Vip?: (number|null);
    }

    /** Represents a SCSelVip. */
    class SCSelVip implements ISCSelVip {

        /**
         * Constructs a new SCSelVip.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCSelVip);

        /** SCSelVip Snid. */
        public Snid: number;

        /** SCSelVip Vip. */
        public Vip: number;

        /**
         * Encodes the specified SCSelVip message. Does not implicitly {@link fishing.SCSelVip.verify|verify} messages.
         * @param m SCSelVip message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCSelVip, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSelVip message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSelVip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCSelVip;
    }

    /** Properties of a SCFishingRoomState. */
    interface ISCFishingRoomState {

        /** SCFishingRoomState State */
        State?: (number|null);

        /** SCFishingRoomState SubState */
        SubState?: (number|null);

        /** SCFishingRoomState Params */
        Params?: (number[]|null);
    }

    /** Represents a SCFishingRoomState. */
    class SCFishingRoomState implements ISCFishingRoomState {

        /**
         * Constructs a new SCFishingRoomState.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFishingRoomState);

        /** SCFishingRoomState State. */
        public State: number;

        /** SCFishingRoomState SubState. */
        public SubState: number;

        /** SCFishingRoomState Params. */
        public Params: number[];

        /**
         * Encodes the specified SCFishingRoomState message. Does not implicitly {@link fishing.SCFishingRoomState.verify|verify} messages.
         * @param m SCFishingRoomState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFishingRoomState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFishingRoomState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFishingRoomState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFishingRoomState;
    }

    /** Properties of a SCFishingSeats. */
    interface ISCFishingSeats {

        /** SCFishingSeats Data */
        Data?: (fishing.IFishingPlayerData[]|null);
    }

    /** Represents a SCFishingSeats. */
    class SCFishingSeats implements ISCFishingSeats {

        /**
         * Constructs a new SCFishingSeats.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFishingSeats);

        /** SCFishingSeats Data. */
        public Data: fishing.IFishingPlayerData[];

        /**
         * Encodes the specified SCFishingSeats message. Does not implicitly {@link fishing.SCFishingSeats.verify|verify} messages.
         * @param m SCFishingSeats message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFishingSeats, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFishingSeats message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFishingSeats
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFishingSeats;
    }

    /** Properties of a SCfishingEnter. */
    interface ISCfishingEnter {

        /** SCfishingEnter Data */
        Data?: (fishing.IFishingPlayerData|null);
    }

    /** Represents a SCfishingEnter. */
    class SCfishingEnter implements ISCfishingEnter {

        /**
         * Constructs a new SCfishingEnter.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCfishingEnter);

        /** SCfishingEnter Data. */
        public Data?: (fishing.IFishingPlayerData|null);

        /**
         * Encodes the specified SCfishingEnter message. Does not implicitly {@link fishing.SCfishingEnter.verify|verify} messages.
         * @param m SCfishingEnter message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCfishingEnter, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCfishingEnter message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCfishingEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCfishingEnter;
    }

    /** Properties of a SCfishingLeave. */
    interface ISCfishingLeave {

        /** SCfishingLeave SnId */
        SnId?: (number|null);
    }

    /** Represents a SCfishingLeave. */
    class SCfishingLeave implements ISCfishingLeave {

        /**
         * Constructs a new SCfishingLeave.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCfishingLeave);

        /** SCfishingLeave SnId. */
        public SnId: number;

        /**
         * Encodes the specified SCfishingLeave message. Does not implicitly {@link fishing.SCfishingLeave.verify|verify} messages.
         * @param m SCfishingLeave message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCfishingLeave, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCfishingLeave message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCfishingLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCfishingLeave;
    }

    /** Properties of a SCSyncRefreshFish. */
    interface ISCSyncRefreshFish {

        /** SCSyncRefreshFish PolicyId */
        PolicyId?: (number|null);

        /** SCSyncRefreshFish TimePoint */
        TimePoint?: (number|null);

        /** SCSyncRefreshFish RandomSeed */
        RandomSeed?: (number|null);
    }

    /** Represents a SCSyncRefreshFish. */
    class SCSyncRefreshFish implements ISCSyncRefreshFish {

        /**
         * Constructs a new SCSyncRefreshFish.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCSyncRefreshFish);

        /** SCSyncRefreshFish PolicyId. */
        public PolicyId: number;

        /** SCSyncRefreshFish TimePoint. */
        public TimePoint: number;

        /** SCSyncRefreshFish RandomSeed. */
        public RandomSeed: number;

        /**
         * Encodes the specified SCSyncRefreshFish message. Does not implicitly {@link fishing.SCSyncRefreshFish.verify|verify} messages.
         * @param m SCSyncRefreshFish message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCSyncRefreshFish, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSyncRefreshFish message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSyncRefreshFish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCSyncRefreshFish;
    }

    /** Properties of a SyncRefreshFishInfo. */
    interface ISyncRefreshFishInfo {

        /** SyncRefreshFishInfo TemplateId */
        TemplateId?: (number|null);

        /** SyncRefreshFishInfo Num */
        Num?: (number|null);
    }

    /** Represents a SyncRefreshFishInfo. */
    class SyncRefreshFishInfo implements ISyncRefreshFishInfo {

        /**
         * Constructs a new SyncRefreshFishInfo.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISyncRefreshFishInfo);

        /** SyncRefreshFishInfo TemplateId. */
        public TemplateId: number;

        /** SyncRefreshFishInfo Num. */
        public Num: number;

        /**
         * Encodes the specified SyncRefreshFishInfo message. Does not implicitly {@link fishing.SyncRefreshFishInfo.verify|verify} messages.
         * @param m SyncRefreshFishInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISyncRefreshFishInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SyncRefreshFishInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SyncRefreshFishInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SyncRefreshFishInfo;
    }

    /** Properties of a SCNewSyncRefreshFish. */
    interface ISCNewSyncRefreshFish {

        /** SCNewSyncRefreshFish PolicyId */
        PolicyId?: (number|null);

        /** SCNewSyncRefreshFish info */
        info?: (fishing.ISyncRefreshFishInfo[]|null);

        /** SCNewSyncRefreshFish LatestID */
        LatestID?: (number|null);

        /** SCNewSyncRefreshFish RandomSeed */
        RandomSeed?: (number|null);
    }

    /** Represents a SCNewSyncRefreshFish. */
    class SCNewSyncRefreshFish implements ISCNewSyncRefreshFish {

        /**
         * Constructs a new SCNewSyncRefreshFish.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCNewSyncRefreshFish);

        /** SCNewSyncRefreshFish PolicyId. */
        public PolicyId: number;

        /** SCNewSyncRefreshFish info. */
        public info: fishing.ISyncRefreshFishInfo[];

        /** SCNewSyncRefreshFish LatestID. */
        public LatestID: number;

        /** SCNewSyncRefreshFish RandomSeed. */
        public RandomSeed: number;

        /**
         * Encodes the specified SCNewSyncRefreshFish message. Does not implicitly {@link fishing.SCNewSyncRefreshFish.verify|verify} messages.
         * @param m SCNewSyncRefreshFish message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCNewSyncRefreshFish, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCNewSyncRefreshFish message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCNewSyncRefreshFish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCNewSyncRefreshFish;
    }

    /** Properties of a FishInfo. */
    interface IFishInfo {

        /** FishInfo FishID */
        FishID?: (number|null);

        /** FishInfo Path */
        Path?: (number|null);

        /** FishInfo PolicyId */
        PolicyId?: (number|null);

        /** FishInfo BirthTime */
        BirthTime?: (number|null);

        /** FishInfo HpRatio */
        HpRatio?: (number|null);
    }

    /** Represents a FishInfo. */
    class FishInfo implements IFishInfo {

        /**
         * Constructs a new FishInfo.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.IFishInfo);

        /** FishInfo FishID. */
        public FishID: number;

        /** FishInfo Path. */
        public Path: number;

        /** FishInfo PolicyId. */
        public PolicyId: number;

        /** FishInfo BirthTime. */
        public BirthTime: number;

        /** FishInfo HpRatio. */
        public HpRatio: number;

        /**
         * Encodes the specified FishInfo message. Does not implicitly {@link fishing.FishInfo.verify|verify} messages.
         * @param m FishInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.IFishInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FishInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FishInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.FishInfo;
    }

    /** Properties of a CSLoadComplete. */
    interface ICSLoadComplete {
    }

    /** Represents a CSLoadComplete. */
    class CSLoadComplete implements ICSLoadComplete {

        /**
         * Constructs a new CSLoadComplete.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ICSLoadComplete);

        /**
         * Encodes the specified CSLoadComplete message. Does not implicitly {@link fishing.CSLoadComplete.verify|verify} messages.
         * @param m CSLoadComplete message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ICSLoadComplete, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSLoadComplete message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSLoadComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.CSLoadComplete;
    }

    /** Properties of a SCFishesEnter. */
    interface ISCFishesEnter {

        /** SCFishesEnter PolicyId */
        PolicyId?: (number|null);

        /** SCFishesEnter Fishes */
        Fishes?: (fishing.IFishInfo[]|null);

        /** SCFishesEnter IceSec */
        IceSec?: (number|null);

        /** SCFishesEnter TimeTick */
        TimeTick?: (number|null);
    }

    /** Represents a SCFishesEnter. */
    class SCFishesEnter implements ISCFishesEnter {

        /**
         * Constructs a new SCFishesEnter.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFishesEnter);

        /** SCFishesEnter PolicyId. */
        public PolicyId: number;

        /** SCFishesEnter Fishes. */
        public Fishes: fishing.IFishInfo[];

        /** SCFishesEnter IceSec. */
        public IceSec: number;

        /** SCFishesEnter TimeTick. */
        public TimeTick: number;

        /**
         * Encodes the specified SCFishesEnter message. Does not implicitly {@link fishing.SCFishesEnter.verify|verify} messages.
         * @param m SCFishesEnter message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFishesEnter, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFishesEnter message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFishesEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFishesEnter;
    }

    /** Properties of a CSFreeze. */
    interface ICSFreeze {
    }

    /** Represents a CSFreeze. */
    class CSFreeze implements ICSFreeze {

        /**
         * Constructs a new CSFreeze.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ICSFreeze);

        /**
         * Encodes the specified CSFreeze message. Does not implicitly {@link fishing.CSFreeze.verify|verify} messages.
         * @param m CSFreeze message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ICSFreeze, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSFreeze message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSFreeze
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.CSFreeze;
    }

    /** Properties of a SCFreeze. */
    interface ISCFreeze {

        /** SCFreeze SnId */
        SnId?: (number|null);

        /** SCFreeze FishId */
        FishId?: (number|null);
    }

    /** Represents a SCFreeze. */
    class SCFreeze implements ISCFreeze {

        /**
         * Constructs a new SCFreeze.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFreeze);

        /** SCFreeze SnId. */
        public SnId: number;

        /** SCFreeze FishId. */
        public FishId: number;

        /**
         * Encodes the specified SCFreeze message. Does not implicitly {@link fishing.SCFreeze.verify|verify} messages.
         * @param m SCFreeze message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFreeze, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFreeze message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFreeze
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFreeze;
    }

    /** Properties of a CSFishView. */
    interface ICSFishView {

        /** CSFishView Fishs */
        Fishs?: (number[]|null);

        /** CSFishView Sign */
        Sign?: (string|null);

        /** CSFishView EventFish */
        EventFish?: (number|null);

        /** CSFishView SnId */
        SnId?: (number|null);
    }

    /** Represents a CSFishView. */
    class CSFishView implements ICSFishView {

        /**
         * Constructs a new CSFishView.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ICSFishView);

        /** CSFishView Fishs. */
        public Fishs: number[];

        /** CSFishView Sign. */
        public Sign: string;

        /** CSFishView EventFish. */
        public EventFish: number;

        /** CSFishView SnId. */
        public SnId: number;

        /**
         * Encodes the specified CSFishView message. Does not implicitly {@link fishing.CSFishView.verify|verify} messages.
         * @param m CSFishView message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ICSFishView, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSFishView message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSFishView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.CSFishView;
    }

    /** Properties of a SCFishView. */
    interface ISCFishView {

        /** SCFishView FishID */
        FishID?: (number|null);

        /** SCFishView Sign */
        Sign?: (number|null);
    }

    /** Represents a SCFishView. */
    class SCFishView implements ISCFishView {

        /**
         * Constructs a new SCFishView.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFishView);

        /** SCFishView FishID. */
        public FishID: number;

        /** SCFishView Sign. */
        public Sign: number;

        /**
         * Encodes the specified SCFishView message. Does not implicitly {@link fishing.SCFishView.verify|verify} messages.
         * @param m SCFishView message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFishView, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFishView message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFishView
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFishView;
    }

    /** Properties of a CSFishTarget. */
    interface ICSFishTarget {

        /** CSFishTarget FishId */
        FishId?: (number|null);

        /** CSFishTarget RobotId */
        RobotId?: (number|null);
    }

    /** Represents a CSFishTarget. */
    class CSFishTarget implements ICSFishTarget {

        /**
         * Constructs a new CSFishTarget.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ICSFishTarget);

        /** CSFishTarget FishId. */
        public FishId: number;

        /** CSFishTarget RobotId. */
        public RobotId: number;

        /**
         * Encodes the specified CSFishTarget message. Does not implicitly {@link fishing.CSFishTarget.verify|verify} messages.
         * @param m CSFishTarget message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ICSFishTarget, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSFishTarget message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSFishTarget
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.CSFishTarget;
    }

    /** Properties of a SCFishTarget. */
    interface ISCFishTarget {

        /** SCFishTarget SnId */
        SnId?: (number|null);

        /** SCFishTarget FishId */
        FishId?: (number|null);
    }

    /** Represents a SCFishTarget. */
    class SCFishTarget implements ISCFishTarget {

        /**
         * Constructs a new SCFishTarget.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFishTarget);

        /** SCFishTarget SnId. */
        public SnId: number;

        /** SCFishTarget FishId. */
        public FishId: number;

        /**
         * Encodes the specified SCFishTarget message. Does not implicitly {@link fishing.SCFishTarget.verify|verify} messages.
         * @param m SCFishTarget message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFishTarget, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFishTarget message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFishTarget
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFishTarget;
    }

    /** Properties of a PlayerPowerState. */
    interface IPlayerPowerState {

        /** PlayerPowerState Snid */
        Snid?: (number|null);

        /** PlayerPowerState State */
        State?: (number|null);

        /** PlayerPowerState Num */
        Num?: (number|null);
    }

    /** Represents a PlayerPowerState. */
    class PlayerPowerState implements IPlayerPowerState {

        /**
         * Constructs a new PlayerPowerState.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.IPlayerPowerState);

        /** PlayerPowerState Snid. */
        public Snid: number;

        /** PlayerPowerState State. */
        public State: number;

        /** PlayerPowerState Num. */
        public Num: number;

        /**
         * Encodes the specified PlayerPowerState message. Does not implicitly {@link fishing.PlayerPowerState.verify|verify} messages.
         * @param m PlayerPowerState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.IPlayerPowerState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerPowerState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerPowerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.PlayerPowerState;
    }

    /** Properties of a SCPowerState. */
    interface ISCPowerState {

        /** SCPowerState PowerState */
        PowerState?: (fishing.IPlayerPowerState[]|null);
    }

    /** Represents a SCPowerState. */
    class SCPowerState implements ISCPowerState {

        /**
         * Constructs a new SCPowerState.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCPowerState);

        /** SCPowerState PowerState. */
        public PowerState: fishing.IPlayerPowerState[];

        /**
         * Encodes the specified SCPowerState message. Does not implicitly {@link fishing.SCPowerState.verify|verify} messages.
         * @param m SCPowerState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCPowerState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPowerState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPowerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCPowerState;
    }

    /** Properties of a SCFishDel. */
    interface ISCFishDel {

        /** SCFishDel FishId */
        FishId?: (number|null);

        /** SCFishDel Coin */
        Coin?: (number|null);

        /** SCFishDel CurrentPlayerCoin */
        CurrentPlayerCoin?: (number|Long|null);

        /** SCFishDel Snid */
        Snid?: (number|null);
    }

    /** Represents a SCFishDel. */
    class SCFishDel implements ISCFishDel {

        /**
         * Constructs a new SCFishDel.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFishDel);

        /** SCFishDel FishId. */
        public FishId: number;

        /** SCFishDel Coin. */
        public Coin: number;

        /** SCFishDel CurrentPlayerCoin. */
        public CurrentPlayerCoin: (number|Long);

        /** SCFishDel Snid. */
        public Snid: number;

        /**
         * Encodes the specified SCFishDel message. Does not implicitly {@link fishing.SCFishDel.verify|verify} messages.
         * @param m SCFishDel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFishDel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFishDel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFishDel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFishDel;
    }

    /** Properties of a SCJackpotFish. */
    interface ISCJackpotFish {

        /** SCJackpotFish FishIds */
        FishIds?: (number[]|null);
    }

    /** Represents a SCJackpotFish. */
    class SCJackpotFish implements ISCJackpotFish {

        /**
         * Constructs a new SCJackpotFish.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCJackpotFish);

        /** SCJackpotFish FishIds. */
        public FishIds: number[];

        /**
         * Encodes the specified SCJackpotFish message. Does not implicitly {@link fishing.SCJackpotFish.verify|verify} messages.
         * @param m SCJackpotFish message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCJackpotFish, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCJackpotFish message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCJackpotFish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCJackpotFish;
    }

    /** Properties of a CSLookLockFish. */
    interface ICSLookLockFish {
    }

    /** Represents a CSLookLockFish. */
    class CSLookLockFish implements ICSLookLockFish {

        /**
         * Constructs a new CSLookLockFish.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ICSLookLockFish);

        /**
         * Encodes the specified CSLookLockFish message. Does not implicitly {@link fishing.CSLookLockFish.verify|verify} messages.
         * @param m CSLookLockFish message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ICSLookLockFish, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSLookLockFish message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSLookLockFish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.CSLookLockFish;
    }

    /** Properties of a SCLookLockFish. */
    interface ISCLookLockFish {

        /** SCLookLockFish FishId */
        FishId?: (number[]|null);

        /** SCLookLockFish FishIdNum */
        FishIdNum?: (number[]|null);
    }

    /** Represents a SCLookLockFish. */
    class SCLookLockFish implements ISCLookLockFish {

        /**
         * Constructs a new SCLookLockFish.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCLookLockFish);

        /** SCLookLockFish FishId. */
        public FishId: number[];

        /** SCLookLockFish FishIdNum. */
        public FishIdNum: number[];

        /**
         * Encodes the specified SCLookLockFish message. Does not implicitly {@link fishing.SCLookLockFish.verify|verify} messages.
         * @param m SCLookLockFish message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCLookLockFish, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLookLockFish message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLookLockFish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCLookLockFish;
    }

    /** Properties of a SCSendReadyPrana. */
    interface ISCSendReadyPrana {

        /** SCSendReadyPrana SnId */
        SnId?: (number|null);

        /** SCSendReadyPrana Percent */
        Percent?: (number|null);
    }

    /** Represents a SCSendReadyPrana. */
    class SCSendReadyPrana implements ISCSendReadyPrana {

        /**
         * Constructs a new SCSendReadyPrana.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCSendReadyPrana);

        /** SCSendReadyPrana SnId. */
        public SnId: number;

        /** SCSendReadyPrana Percent. */
        public Percent: number;

        /**
         * Encodes the specified SCSendReadyPrana message. Does not implicitly {@link fishing.SCSendReadyPrana.verify|verify} messages.
         * @param m SCSendReadyPrana message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCSendReadyPrana, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSendReadyPrana message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSendReadyPrana
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCSendReadyPrana;
    }

    /** Properties of a CSReadyPrana. */
    interface ICSReadyPrana {

        /** CSReadyPrana SnId */
        SnId?: (number|null);

        /** CSReadyPrana X */
        X?: (number|null);

        /** CSReadyPrana Y */
        Y?: (number|null);
    }

    /** Represents a CSReadyPrana. */
    class CSReadyPrana implements ICSReadyPrana {

        /**
         * Constructs a new CSReadyPrana.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ICSReadyPrana);

        /** CSReadyPrana SnId. */
        public SnId: number;

        /** CSReadyPrana X. */
        public X: number;

        /** CSReadyPrana Y. */
        public Y: number;

        /**
         * Encodes the specified CSReadyPrana message. Does not implicitly {@link fishing.CSReadyPrana.verify|verify} messages.
         * @param m CSReadyPrana message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ICSReadyPrana, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSReadyPrana message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSReadyPrana
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.CSReadyPrana;
    }

    /** Properties of a SCReadyPrana. */
    interface ISCReadyPrana {

        /** SCReadyPrana SnId */
        SnId?: (number|null);

        /** SCReadyPrana OpRetCode */
        OpRetCode?: (fishing.OpResultCode|null);

        /** SCReadyPrana X */
        X?: (number|null);

        /** SCReadyPrana Y */
        Y?: (number|null);
    }

    /** Represents a SCReadyPrana. */
    class SCReadyPrana implements ISCReadyPrana {

        /**
         * Constructs a new SCReadyPrana.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCReadyPrana);

        /** SCReadyPrana SnId. */
        public SnId: number;

        /** SCReadyPrana OpRetCode. */
        public OpRetCode: fishing.OpResultCode;

        /** SCReadyPrana X. */
        public X: number;

        /** SCReadyPrana Y. */
        public Y: number;

        /**
         * Encodes the specified SCReadyPrana message. Does not implicitly {@link fishing.SCReadyPrana.verify|verify} messages.
         * @param m SCReadyPrana message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCReadyPrana, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCReadyPrana message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCReadyPrana
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCReadyPrana;
    }

    /** Properties of a CSFirePrana. */
    interface ICSFirePrana {

        /** CSFirePrana SnId */
        SnId?: (number|null);

        /** CSFirePrana FishIds */
        FishIds?: (number[]|null);

        /** CSFirePrana X */
        X?: (number|null);

        /** CSFirePrana Y */
        Y?: (number|null);
    }

    /** Represents a CSFirePrana. */
    class CSFirePrana implements ICSFirePrana {

        /**
         * Constructs a new CSFirePrana.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ICSFirePrana);

        /** CSFirePrana SnId. */
        public SnId: number;

        /** CSFirePrana FishIds. */
        public FishIds: number[];

        /** CSFirePrana X. */
        public X: number;

        /** CSFirePrana Y. */
        public Y: number;

        /**
         * Encodes the specified CSFirePrana message. Does not implicitly {@link fishing.CSFirePrana.verify|verify} messages.
         * @param m CSFirePrana message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ICSFirePrana, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSFirePrana message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSFirePrana
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.CSFirePrana;
    }

    /** Properties of a SCFirePrana. */
    interface ISCFirePrana {

        /** SCFirePrana SnId */
        SnId?: (number|null);

        /** SCFirePrana OpRetCode */
        OpRetCode?: (fishing.OpResultCode|null);

        /** SCFirePrana X */
        X?: (number|null);

        /** SCFirePrana Y */
        Y?: (number|null);
    }

    /** Represents a SCFirePrana. */
    class SCFirePrana implements ISCFirePrana {

        /**
         * Constructs a new SCFirePrana.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCFirePrana);

        /** SCFirePrana SnId. */
        public SnId: number;

        /** SCFirePrana OpRetCode. */
        public OpRetCode: fishing.OpResultCode;

        /** SCFirePrana X. */
        public X: number;

        /** SCFirePrana Y. */
        public Y: number;

        /**
         * Encodes the specified SCFirePrana message. Does not implicitly {@link fishing.SCFirePrana.verify|verify} messages.
         * @param m SCFirePrana message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCFirePrana, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFirePrana message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFirePrana
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCFirePrana;
    }

    /** Properties of a SCJackpotCoin. */
    interface ISCJackpotCoin {

        /** SCJackpotCoin SnId */
        SnId?: (number|null);

        /** SCJackpotCoin Coin */
        Coin?: (number|null);

        /** SCJackpotCoin JackpotLevel */
        JackpotLevel?: (number|null);

        /** SCJackpotCoin Name */
        Name?: (string|null);
    }

    /** Represents a SCJackpotCoin. */
    class SCJackpotCoin implements ISCJackpotCoin {

        /**
         * Constructs a new SCJackpotCoin.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCJackpotCoin);

        /** SCJackpotCoin SnId. */
        public SnId: number;

        /** SCJackpotCoin Coin. */
        public Coin: number;

        /** SCJackpotCoin JackpotLevel. */
        public JackpotLevel: number;

        /** SCJackpotCoin Name. */
        public Name: string;

        /**
         * Encodes the specified SCJackpotCoin message. Does not implicitly {@link fishing.SCJackpotCoin.verify|verify} messages.
         * @param m SCJackpotCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCJackpotCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCJackpotCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCJackpotCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCJackpotCoin;
    }

    /** Properties of a SCJackpotPool. */
    interface ISCJackpotPool {

        /** SCJackpotPool Coin */
        Coin?: (number|Long|null);
    }

    /** Represents a SCJackpotPool. */
    class SCJackpotPool implements ISCJackpotPool {

        /**
         * Constructs a new SCJackpotPool.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCJackpotPool);

        /** SCJackpotPool Coin. */
        public Coin: (number|Long);

        /**
         * Encodes the specified SCJackpotPool message. Does not implicitly {@link fishing.SCJackpotPool.verify|verify} messages.
         * @param m SCJackpotPool message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCJackpotPool, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCJackpotPool message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCJackpotPool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCJackpotPool;
    }

    /** Properties of a SCRetPranaCoin. */
    interface ISCRetPranaCoin {

        /** SCRetPranaCoin SnId */
        SnId?: (number|null);

        /** SCRetPranaCoin Coin */
        Coin?: (number|Long|null);
    }

    /** Represents a SCRetPranaCoin. */
    class SCRetPranaCoin implements ISCRetPranaCoin {

        /**
         * Constructs a new SCRetPranaCoin.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCRetPranaCoin);

        /** SCRetPranaCoin SnId. */
        public SnId: number;

        /** SCRetPranaCoin Coin. */
        public Coin: (number|Long);

        /**
         * Encodes the specified SCRetPranaCoin message. Does not implicitly {@link fishing.SCRetPranaCoin.verify|verify} messages.
         * @param m SCRetPranaCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCRetPranaCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRetPranaCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRetPranaCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCRetPranaCoin;
    }

    /** Properties of a SCReBindAgent. */
    interface ISCReBindAgent {

        /** SCReBindAgent PlayerSnid */
        PlayerSnid?: (number|null);

        /** SCReBindAgent RobSnid */
        RobSnid?: (number|null);
    }

    /** Represents a SCReBindAgent. */
    class SCReBindAgent implements ISCReBindAgent {

        /**
         * Constructs a new SCReBindAgent.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCReBindAgent);

        /** SCReBindAgent PlayerSnid. */
        public PlayerSnid: number;

        /** SCReBindAgent RobSnid. */
        public RobSnid: number;

        /**
         * Encodes the specified SCReBindAgent message. Does not implicitly {@link fishing.SCReBindAgent.verify|verify} messages.
         * @param m SCReBindAgent message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCReBindAgent, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCReBindAgent message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCReBindAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCReBindAgent;
    }

    /** Properties of a SCRobotBehavior. */
    interface ISCRobotBehavior {

        /** SCRobotBehavior Code */
        Code?: (number|null);

        /** SCRobotBehavior RobotId */
        RobotId?: (number|null);
    }

    /** Represents a SCRobotBehavior. */
    class SCRobotBehavior implements ISCRobotBehavior {

        /**
         * Constructs a new SCRobotBehavior.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCRobotBehavior);

        /** SCRobotBehavior Code. */
        public Code: number;

        /** SCRobotBehavior RobotId. */
        public RobotId: number;

        /**
         * Encodes the specified SCRobotBehavior message. Does not implicitly {@link fishing.SCRobotBehavior.verify|verify} messages.
         * @param m SCRobotBehavior message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCRobotBehavior, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRobotBehavior message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRobotBehavior
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCRobotBehavior;
    }

    /** Properties of a SCSyncFishCoin. */
    interface ISCSyncFishCoin {

        /** SCSyncFishCoin FishId */
        FishId?: (number|null);

        /** SCSyncFishCoin Coin */
        Coin?: (number|Long|null);
    }

    /** Represents a SCSyncFishCoin. */
    class SCSyncFishCoin implements ISCSyncFishCoin {

        /**
         * Constructs a new SCSyncFishCoin.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCSyncFishCoin);

        /** SCSyncFishCoin FishId. */
        public FishId: number;

        /** SCSyncFishCoin Coin. */
        public Coin: (number|Long);

        /**
         * Encodes the specified SCSyncFishCoin message. Does not implicitly {@link fishing.SCSyncFishCoin.verify|verify} messages.
         * @param m SCSyncFishCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCSyncFishCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSyncFishCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSyncFishCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCSyncFishCoin;
    }

    /** Properties of a FishHpInfo. */
    interface IFishHpInfo {

        /** FishHpInfo FishID */
        FishID?: (number|null);

        /** FishHpInfo HpRatio */
        HpRatio?: (number|null);
    }

    /** Represents a FishHpInfo. */
    class FishHpInfo implements IFishHpInfo {

        /**
         * Constructs a new FishHpInfo.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.IFishHpInfo);

        /** FishHpInfo FishID. */
        public FishID: number;

        /** FishHpInfo HpRatio. */
        public HpRatio: number;

        /**
         * Encodes the specified FishHpInfo message. Does not implicitly {@link fishing.FishHpInfo.verify|verify} messages.
         * @param m FishHpInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.IFishHpInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FishHpInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FishHpInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.FishHpInfo;
    }

    /** Properties of a SCSyncFishHp. */
    interface ISCSyncFishHp {

        /** SCSyncFishHp HpInfo */
        HpInfo?: (fishing.IFishHpInfo[]|null);
    }

    /** Represents a SCSyncFishHp. */
    class SCSyncFishHp implements ISCSyncFishHp {

        /**
         * Constructs a new SCSyncFishHp.
         * @param [p] Properties to set
         */
        constructor(p?: fishing.ISCSyncFishHp);

        /** SCSyncFishHp HpInfo. */
        public HpInfo: fishing.IFishHpInfo[];

        /**
         * Encodes the specified SCSyncFishHp message. Does not implicitly {@link fishing.SCSyncFishHp.verify|verify} messages.
         * @param m SCSyncFishHp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: fishing.ISCSyncFishHp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSyncFishHp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSyncFishHp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): fishing.SCSyncFishHp;
    }
}
