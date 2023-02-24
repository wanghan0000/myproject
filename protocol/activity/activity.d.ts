// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace activity. */
export namespace activity {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1
    }

    /** VipBonusPacketID enum. */
    enum VipBonusPacketID {
        PACKET_VipBonus_ZERO = 0,
        PACKET_CS_VipBonus_Info = 2600,
        PACKET_SC_VipBonus_Info = 2601,
        PACKET_CS_VipBonus_Get = 2602,
        PACKET_SC_VipBonus_Get = 2603,
        PACKET_SC_Notify_ActVipBonus_State = 2604,
        PACKET_SC_Notify_VipGetBonus_State = 2605
    }

    /** Properties of a VipBonusInfo. */
    interface IVipBonusInfo {

        /** VipBonusInfo LevelCoin */
        LevelCoin?: (number|null);

        /** VipBonusInfo DayCoin */
        DayCoin?: (number|null);

        /** VipBonusInfo WeekCoin */
        WeekCoin?: (number|null);

        /** VipBonusInfo MonthCoin */
        MonthCoin?: (number|null);
    }

    /** Represents a VipBonusInfo. */
    class VipBonusInfo implements IVipBonusInfo {

        /**
         * Constructs a new VipBonusInfo.
         * @param [p] Properties to set
         */
        constructor(p?: activity.IVipBonusInfo);

        /** VipBonusInfo LevelCoin. */
        public LevelCoin: number;

        /** VipBonusInfo DayCoin. */
        public DayCoin: number;

        /** VipBonusInfo WeekCoin. */
        public WeekCoin: number;

        /** VipBonusInfo MonthCoin. */
        public MonthCoin: number;

        /**
         * Encodes the specified VipBonusInfo message. Does not implicitly {@link activity.VipBonusInfo.verify|verify} messages.
         * @param m VipBonusInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.IVipBonusInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VipBonusInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns VipBonusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.VipBonusInfo;
    }

    /** Properties of a VipBonusGetInfo. */
    interface IVipBonusGetInfo {

        /** VipBonusGetInfo Level */
        Level?: (number|null);

        /** VipBonusGetInfo Day */
        Day?: (number|null);

        /** VipBonusGetInfo Week */
        Week?: (number|null);

        /** VipBonusGetInfo Month */
        Month?: (number|null);
    }

    /** Represents a VipBonusGetInfo. */
    class VipBonusGetInfo implements IVipBonusGetInfo {

        /**
         * Constructs a new VipBonusGetInfo.
         * @param [p] Properties to set
         */
        constructor(p?: activity.IVipBonusGetInfo);

        /** VipBonusGetInfo Level. */
        public Level: number;

        /** VipBonusGetInfo Day. */
        public Day: number;

        /** VipBonusGetInfo Week. */
        public Week: number;

        /** VipBonusGetInfo Month. */
        public Month: number;

        /**
         * Encodes the specified VipBonusGetInfo message. Does not implicitly {@link activity.VipBonusGetInfo.verify|verify} messages.
         * @param m VipBonusGetInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.IVipBonusGetInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VipBonusGetInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns VipBonusGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.VipBonusGetInfo;
    }

    /** Properties of a SCVipBonusInfo. */
    interface ISCVipBonusInfo {

        /** SCVipBonusInfo Infos */
        Infos?: (activity.IVipBonusInfo[]|null);

        /** SCVipBonusInfo GetInfo */
        GetInfo?: (activity.IVipBonusGetInfo|null);
    }

    /** Represents a SCVipBonusInfo. */
    class SCVipBonusInfo implements ISCVipBonusInfo {

        /**
         * Constructs a new SCVipBonusInfo.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCVipBonusInfo);

        /** SCVipBonusInfo Infos. */
        public Infos: activity.IVipBonusInfo[];

        /** SCVipBonusInfo GetInfo. */
        public GetInfo?: (activity.IVipBonusGetInfo|null);

        /**
         * Encodes the specified SCVipBonusInfo message. Does not implicitly {@link activity.SCVipBonusInfo.verify|verify} messages.
         * @param m SCVipBonusInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCVipBonusInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCVipBonusInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCVipBonusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCVipBonusInfo;
    }

    /** Properties of a CSVipBonusInfo. */
    interface ICSVipBonusInfo {
    }

    /** Represents a CSVipBonusInfo. */
    class CSVipBonusInfo implements ICSVipBonusInfo {

        /**
         * Constructs a new CSVipBonusInfo.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSVipBonusInfo);

        /**
         * Encodes the specified CSVipBonusInfo message. Does not implicitly {@link activity.CSVipBonusInfo.verify|verify} messages.
         * @param m CSVipBonusInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSVipBonusInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSVipBonusInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSVipBonusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSVipBonusInfo;
    }

    /** Properties of a SCVipBonus. */
    interface ISCVipBonus {

        /** SCVipBonus OpRetCode */
        OpRetCode?: (activity.OpResultCode|null);

        /** SCVipBonus GetInfo */
        GetInfo?: (activity.IVipBonusGetInfo|null);
    }

    /** Represents a SCVipBonus. */
    class SCVipBonus implements ISCVipBonus {

        /**
         * Constructs a new SCVipBonus.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCVipBonus);

        /** SCVipBonus OpRetCode. */
        public OpRetCode: activity.OpResultCode;

        /** SCVipBonus GetInfo. */
        public GetInfo?: (activity.IVipBonusGetInfo|null);

        /**
         * Encodes the specified SCVipBonus message. Does not implicitly {@link activity.SCVipBonus.verify|verify} messages.
         * @param m SCVipBonus message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCVipBonus, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCVipBonus message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCVipBonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCVipBonus;
    }

    /** Properties of a CSVipBonus. */
    interface ICSVipBonus {

        /** CSVipBonus SelectBonus */
        SelectBonus?: (number|null);

        /** CSVipBonus SelectVip */
        SelectVip?: (number|null);
    }

    /** Represents a CSVipBonus. */
    class CSVipBonus implements ICSVipBonus {

        /**
         * Constructs a new CSVipBonus.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSVipBonus);

        /** CSVipBonus SelectBonus. */
        public SelectBonus: number;

        /** CSVipBonus SelectVip. */
        public SelectVip: number;

        /**
         * Encodes the specified CSVipBonus message. Does not implicitly {@link activity.CSVipBonus.verify|verify} messages.
         * @param m CSVipBonus message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSVipBonus, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSVipBonus message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSVipBonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSVipBonus;
    }

    /** Properties of a SCNotifyVipBonusState. */
    interface ISCNotifyVipBonusState {

        /** SCNotifyVipBonusState State */
        State?: (number|null);
    }

    /** Represents a SCNotifyVipBonusState. */
    class SCNotifyVipBonusState implements ISCNotifyVipBonusState {

        /**
         * Constructs a new SCNotifyVipBonusState.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCNotifyVipBonusState);

        /** SCNotifyVipBonusState State. */
        public State: number;

        /**
         * Encodes the specified SCNotifyVipBonusState message. Does not implicitly {@link activity.SCNotifyVipBonusState.verify|verify} messages.
         * @param m SCNotifyVipBonusState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCNotifyVipBonusState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCNotifyVipBonusState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCNotifyVipBonusState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCNotifyVipBonusState;
    }

    /** Properties of a SCNotifyVipGetBonusState. */
    interface ISCNotifyVipGetBonusState {

        /** SCNotifyVipGetBonusState GetInfo */
        GetInfo?: (activity.IVipBonusGetInfo|null);
    }

    /** Represents a SCNotifyVipGetBonusState. */
    class SCNotifyVipGetBonusState implements ISCNotifyVipGetBonusState {

        /**
         * Constructs a new SCNotifyVipGetBonusState.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCNotifyVipGetBonusState);

        /** SCNotifyVipGetBonusState GetInfo. */
        public GetInfo?: (activity.IVipBonusGetInfo|null);

        /**
         * Encodes the specified SCNotifyVipGetBonusState message. Does not implicitly {@link activity.SCNotifyVipGetBonusState.verify|verify} messages.
         * @param m SCNotifyVipGetBonusState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCNotifyVipGetBonusState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCNotifyVipGetBonusState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCNotifyVipGetBonusState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCNotifyVipGetBonusState;
    }

    /** OpResultCode_ActCard enum. */
    enum OpResultCode_ActCard {
        OPRC_Sucess_ActCard = 0,
        OPRC_Error_ActCard = 1,
        OPRC_CoinNotEnough = 1056,
        OPRC_Card_Receive_MustBuyCardFirst = 10024,
        OPRC_Card_Receive_HasReceived = 10025
    }

    /** CardPacketID enum. */
    enum CardPacketID {
        PACKET_Card_ZERO = 0,
        PACKET_CS_CARD_INFO = 2610,
        PACKET_SC_CARD_INFO = 2611,
        PACKET_SC_CARD_BUYOK = 2612,
        PACKET_CS_CARD_RECEIVE = 2613,
        PACKET_SC_CARD_RECEIVE = 2614,
        PACKET_SC_CARD_MODIFYCONFIG = 2615,
        PACKET_CS_CARD_BUY_ONLINE = 2616,
        PACKET_SC_CARD_BUY_ONLINE = 2617
    }

    /** Properties of a Card. */
    interface ICard {

        /** Card Type */
        Type?: (number|null);

        /** Card Prize */
        Prize?: (number|Long|null);

        /** Card ReceiveFirst */
        ReceiveFirst?: (number|Long|null);

        /** Card ReceiveEveryday */
        ReceiveEveryday?: (number|Long|null);

        /** Card ValidTime */
        ValidTime?: (number|null);

        /** Card BuyTs */
        BuyTs?: (number|Long|null);

        /** Card ReceiveTs */
        ReceiveTs?: (number|Long|null);

        /** Card SystemTs */
        SystemTs?: (number|Long|null);
    }

    /** Represents a Card. */
    class Card implements ICard {

        /**
         * Constructs a new Card.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICard);

        /** Card Type. */
        public Type: number;

        /** Card Prize. */
        public Prize: (number|Long);

        /** Card ReceiveFirst. */
        public ReceiveFirst: (number|Long);

        /** Card ReceiveEveryday. */
        public ReceiveEveryday: (number|Long);

        /** Card ValidTime. */
        public ValidTime: number;

        /** Card BuyTs. */
        public BuyTs: (number|Long);

        /** Card ReceiveTs. */
        public ReceiveTs: (number|Long);

        /** Card SystemTs. */
        public SystemTs: (number|Long);

        /**
         * Encodes the specified Card message. Does not implicitly {@link activity.Card.verify|verify} messages.
         * @param m Card message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Card message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Card
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.Card;
    }

    /** Properties of a ModifyCard. */
    interface IModifyCard {

        /** ModifyCard Type */
        Type?: (number|null);

        /** ModifyCard Prize */
        Prize?: (number|Long|null);

        /** ModifyCard ReceiveFirst */
        ReceiveFirst?: (number|Long|null);

        /** ModifyCard ReceiveEveryday */
        ReceiveEveryday?: (number|Long|null);

        /** ModifyCard ValidTime */
        ValidTime?: (number|null);
    }

    /** Represents a ModifyCard. */
    class ModifyCard implements IModifyCard {

        /**
         * Constructs a new ModifyCard.
         * @param [p] Properties to set
         */
        constructor(p?: activity.IModifyCard);

        /** ModifyCard Type. */
        public Type: number;

        /** ModifyCard Prize. */
        public Prize: (number|Long);

        /** ModifyCard ReceiveFirst. */
        public ReceiveFirst: (number|Long);

        /** ModifyCard ReceiveEveryday. */
        public ReceiveEveryday: (number|Long);

        /** ModifyCard ValidTime. */
        public ValidTime: number;

        /**
         * Encodes the specified ModifyCard message. Does not implicitly {@link activity.ModifyCard.verify|verify} messages.
         * @param m ModifyCard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.IModifyCard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifyCard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ModifyCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.ModifyCard;
    }

    /** Properties of a CSCardInfo. */
    interface ICSCardInfo {
    }

    /** Represents a CSCardInfo. */
    class CSCardInfo implements ICSCardInfo {

        /**
         * Constructs a new CSCardInfo.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSCardInfo);

        /**
         * Encodes the specified CSCardInfo message. Does not implicitly {@link activity.CSCardInfo.verify|verify} messages.
         * @param m CSCardInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCardInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSCardInfo;
    }

    /** Properties of a SCCardInfo. */
    interface ISCCardInfo {

        /** SCCardInfo StartAct */
        StartAct?: (number|null);

        /** SCCardInfo StartTickets */
        StartTickets?: (number|Long|null);

        /** SCCardInfo Version */
        Version?: (number|null);

        /** SCCardInfo Cards */
        Cards?: (activity.ICard[]|null);

        /** SCCardInfo OpRetCode */
        OpRetCode?: (activity.OpResultCode_ActCard|null);
    }

    /** Represents a SCCardInfo. */
    class SCCardInfo implements ISCCardInfo {

        /**
         * Constructs a new SCCardInfo.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCCardInfo);

        /** SCCardInfo StartAct. */
        public StartAct: number;

        /** SCCardInfo StartTickets. */
        public StartTickets: (number|Long);

        /** SCCardInfo Version. */
        public Version: number;

        /** SCCardInfo Cards. */
        public Cards: activity.ICard[];

        /** SCCardInfo OpRetCode. */
        public OpRetCode: activity.OpResultCode_ActCard;

        /**
         * Encodes the specified SCCardInfo message. Does not implicitly {@link activity.SCCardInfo.verify|verify} messages.
         * @param m SCCardInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCardInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCCardInfo;
    }

    /** Properties of a SCCardModifyConfig. */
    interface ISCCardModifyConfig {

        /** SCCardModifyConfig StartAct */
        StartAct?: (number|null);

        /** SCCardModifyConfig StartTickets */
        StartTickets?: (number|Long|null);

        /** SCCardModifyConfig Version */
        Version?: (number|null);

        /** SCCardModifyConfig Cards */
        Cards?: (activity.IModifyCard[]|null);
    }

    /** Represents a SCCardModifyConfig. */
    class SCCardModifyConfig implements ISCCardModifyConfig {

        /**
         * Constructs a new SCCardModifyConfig.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCCardModifyConfig);

        /** SCCardModifyConfig StartAct. */
        public StartAct: number;

        /** SCCardModifyConfig StartTickets. */
        public StartTickets: (number|Long);

        /** SCCardModifyConfig Version. */
        public Version: number;

        /** SCCardModifyConfig Cards. */
        public Cards: activity.IModifyCard[];

        /**
         * Encodes the specified SCCardModifyConfig message. Does not implicitly {@link activity.SCCardModifyConfig.verify|verify} messages.
         * @param m SCCardModifyConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCCardModifyConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCardModifyConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCardModifyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCCardModifyConfig;
    }

    /** Properties of a SCCardBuyOK. */
    interface ISCCardBuyOK {

        /** SCCardBuyOK Type */
        Type?: (number|null);
    }

    /** Represents a SCCardBuyOK. */
    class SCCardBuyOK implements ISCCardBuyOK {

        /**
         * Constructs a new SCCardBuyOK.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCCardBuyOK);

        /** SCCardBuyOK Type. */
        public Type: number;

        /**
         * Encodes the specified SCCardBuyOK message. Does not implicitly {@link activity.SCCardBuyOK.verify|verify} messages.
         * @param m SCCardBuyOK message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCCardBuyOK, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCardBuyOK message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCardBuyOK
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCCardBuyOK;
    }

    /** Properties of a CSCardReceive. */
    interface ICSCardReceive {

        /** CSCardReceive Type */
        Type?: (number|null);
    }

    /** Represents a CSCardReceive. */
    class CSCardReceive implements ICSCardReceive {

        /**
         * Constructs a new CSCardReceive.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSCardReceive);

        /** CSCardReceive Type. */
        public Type: number;

        /**
         * Encodes the specified CSCardReceive message. Does not implicitly {@link activity.CSCardReceive.verify|verify} messages.
         * @param m CSCardReceive message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSCardReceive, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCardReceive message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCardReceive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSCardReceive;
    }

    /** Properties of a SCCardReceive. */
    interface ISCCardReceive {

        /** SCCardReceive Type */
        Type?: (number|null);

        /** SCCardReceive IncludeFirst */
        IncludeFirst?: (number|null);

        /** SCCardReceive OpRetCode */
        OpRetCode?: (activity.OpResultCode_ActCard|null);
    }

    /** Represents a SCCardReceive. */
    class SCCardReceive implements ISCCardReceive {

        /**
         * Constructs a new SCCardReceive.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCCardReceive);

        /** SCCardReceive Type. */
        public Type: number;

        /** SCCardReceive IncludeFirst. */
        public IncludeFirst: number;

        /** SCCardReceive OpRetCode. */
        public OpRetCode: activity.OpResultCode_ActCard;

        /**
         * Encodes the specified SCCardReceive message. Does not implicitly {@link activity.SCCardReceive.verify|verify} messages.
         * @param m SCCardReceive message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCCardReceive, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCardReceive message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCardReceive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCCardReceive;
    }

    /** Properties of a CSCardBuyOnline. */
    interface ICSCardBuyOnline {

        /** CSCardBuyOnline Type */
        Type?: (number|null);
    }

    /** Represents a CSCardBuyOnline. */
    class CSCardBuyOnline implements ICSCardBuyOnline {

        /**
         * Constructs a new CSCardBuyOnline.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSCardBuyOnline);

        /** CSCardBuyOnline Type. */
        public Type: number;

        /**
         * Encodes the specified CSCardBuyOnline message. Does not implicitly {@link activity.CSCardBuyOnline.verify|verify} messages.
         * @param m CSCardBuyOnline message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSCardBuyOnline, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCardBuyOnline message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCardBuyOnline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSCardBuyOnline;
    }

    /** Properties of a SCCardBuyOnline. */
    interface ISCCardBuyOnline {

        /** SCCardBuyOnline Type */
        Type?: (number|null);

        /** SCCardBuyOnline OpRetCode */
        OpRetCode?: (activity.OpResultCode_ActCard|null);
    }

    /** Represents a SCCardBuyOnline. */
    class SCCardBuyOnline implements ISCCardBuyOnline {

        /**
         * Constructs a new SCCardBuyOnline.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCCardBuyOnline);

        /** SCCardBuyOnline Type. */
        public Type: number;

        /** SCCardBuyOnline OpRetCode. */
        public OpRetCode: activity.OpResultCode_ActCard;

        /**
         * Encodes the specified SCCardBuyOnline message. Does not implicitly {@link activity.SCCardBuyOnline.verify|verify} messages.
         * @param m SCCardBuyOnline message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCCardBuyOnline, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCardBuyOnline message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCardBuyOnline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCCardBuyOnline;
    }

    /** OpResultCode_ActFPay enum. */
    enum OpResultCode_ActFPay {
        OPRC_Sucess_ActFPay = 0,
        OPRC_Error_ActFPay = 1,
        OPRC_Activity_FPAY_NoStart = 6301,
        OPRC_Activity_FPAY_IsBusy = 6302,
        OPRC_Activity_FPAY_PAY_NoEnough = 6303,
        OPRC_Activity_FPAY_Has_Sign = 6304,
        OPRC_Activity_FPAY_Has_Get = 6305,
        OPRC_Activity_FPAY_Cant_Get = 6306,
        OPRC_Activity_FPAY_Lock = 6307
    }

    /** FPayPacketID enum. */
    enum FPayPacketID {
        PACKET_FPay_ZERO = 0,
        PACKET_CS_FPay_Info = 2620,
        PACKET_SC_FPay_Info = 2621,
        PACKET_CS_FPay_Get = 2622,
        PACKET_SC_FPay_Get = 2623,
        PACKET_SC_Notify_ActFPay_State = 2624,
        PACKET_SC_Notify_ActFPayGet_State = 2625,
        PACKET_CS_FPay_Sign = 2626,
        PACKET_SC_FPay_Sign = 2627
    }

    /** Properties of an ActFPayWinConfig. */
    interface IActFPayWinConfig {

        /** ActFPayWinConfig WinType */
        WinType?: (number|null);

        /** ActFPayWinConfig WinRate */
        WinRate?: (number|null);
    }

    /** Represents an ActFPayWinConfig. */
    class ActFPayWinConfig implements IActFPayWinConfig {

        /**
         * Constructs a new ActFPayWinConfig.
         * @param [p] Properties to set
         */
        constructor(p?: activity.IActFPayWinConfig);

        /** ActFPayWinConfig WinType. */
        public WinType: number;

        /** ActFPayWinConfig WinRate. */
        public WinRate: number;

        /**
         * Encodes the specified ActFPayWinConfig message. Does not implicitly {@link activity.ActFPayWinConfig.verify|verify} messages.
         * @param m ActFPayWinConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.IActFPayWinConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActFPayWinConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ActFPayWinConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.ActFPayWinConfig;
    }

    /** Properties of a FPayInfo. */
    interface IFPayInfo {

        /** FPayInfo FPayCoin */
        FPayCoin?: (number|null);

        /** FPayInfo PlayerNum */
        PlayerNum?: (number|null);

        /** FPayInfo FPayGiveCoin */
        FPayGiveCoin?: (number|null);

        /** FPayInfo FPayGiveType */
        FPayGiveType?: (number|null);

        /** FPayInfo NeedWinCoin */
        NeedWinCoin?: (number|null);

        /** FPayInfo StartTime */
        StartTime?: (number|null);

        /** FPayInfo EndTime */
        EndTime?: (number|null);

        /** FPayInfo WinConfig */
        WinConfig?: (activity.IActFPayWinConfig[]|null);
    }

    /** Represents a FPayInfo. */
    class FPayInfo implements IFPayInfo {

        /**
         * Constructs a new FPayInfo.
         * @param [p] Properties to set
         */
        constructor(p?: activity.IFPayInfo);

        /** FPayInfo FPayCoin. */
        public FPayCoin: number;

        /** FPayInfo PlayerNum. */
        public PlayerNum: number;

        /** FPayInfo FPayGiveCoin. */
        public FPayGiveCoin: number;

        /** FPayInfo FPayGiveType. */
        public FPayGiveType: number;

        /** FPayInfo NeedWinCoin. */
        public NeedWinCoin: number;

        /** FPayInfo StartTime. */
        public StartTime: number;

        /** FPayInfo EndTime. */
        public EndTime: number;

        /** FPayInfo WinConfig. */
        public WinConfig: activity.IActFPayWinConfig[];

        /**
         * Encodes the specified FPayInfo message. Does not implicitly {@link activity.FPayInfo.verify|verify} messages.
         * @param m FPayInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.IFPayInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FPayInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FPayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.FPayInfo;
    }

    /** Properties of a FPayGetInfo. */
    interface IFPayGetInfo {

        /** FPayGetInfo WinCoin */
        WinCoin?: (number|null);

        /** FPayGetInfo State */
        State?: (number|null);
    }

    /** Represents a FPayGetInfo. */
    class FPayGetInfo implements IFPayGetInfo {

        /**
         * Constructs a new FPayGetInfo.
         * @param [p] Properties to set
         */
        constructor(p?: activity.IFPayGetInfo);

        /** FPayGetInfo WinCoin. */
        public WinCoin: number;

        /** FPayGetInfo State. */
        public State: number;

        /**
         * Encodes the specified FPayGetInfo message. Does not implicitly {@link activity.FPayGetInfo.verify|verify} messages.
         * @param m FPayGetInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.IFPayGetInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FPayGetInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FPayGetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.FPayGetInfo;
    }

    /** Properties of a SCFPayInfo. */
    interface ISCFPayInfo {

        /** SCFPayInfo Info */
        Info?: (activity.IFPayInfo|null);
    }

    /** Represents a SCFPayInfo. */
    class SCFPayInfo implements ISCFPayInfo {

        /**
         * Constructs a new SCFPayInfo.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCFPayInfo);

        /** SCFPayInfo Info. */
        public Info?: (activity.IFPayInfo|null);

        /**
         * Encodes the specified SCFPayInfo message. Does not implicitly {@link activity.SCFPayInfo.verify|verify} messages.
         * @param m SCFPayInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCFPayInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFPayInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFPayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCFPayInfo;
    }

    /** Properties of a CSFPayInfo. */
    interface ICSFPayInfo {
    }

    /** Represents a CSFPayInfo. */
    class CSFPayInfo implements ICSFPayInfo {

        /**
         * Constructs a new CSFPayInfo.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSFPayInfo);

        /**
         * Encodes the specified CSFPayInfo message. Does not implicitly {@link activity.CSFPayInfo.verify|verify} messages.
         * @param m CSFPayInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSFPayInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSFPayInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSFPayInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSFPayInfo;
    }

    /** Properties of a SCGetFPay. */
    interface ISCGetFPay {

        /** SCGetFPay OpRetCode */
        OpRetCode?: (activity.OpResultCode_ActFPay|null);
    }

    /** Represents a SCGetFPay. */
    class SCGetFPay implements ISCGetFPay {

        /**
         * Constructs a new SCGetFPay.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCGetFPay);

        /** SCGetFPay OpRetCode. */
        public OpRetCode: activity.OpResultCode_ActFPay;

        /**
         * Encodes the specified SCGetFPay message. Does not implicitly {@link activity.SCGetFPay.verify|verify} messages.
         * @param m SCGetFPay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCGetFPay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetFPay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetFPay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCGetFPay;
    }

    /** Properties of a CSGetFPay. */
    interface ICSGetFPay {
    }

    /** Represents a CSGetFPay. */
    class CSGetFPay implements ICSGetFPay {

        /**
         * Constructs a new CSGetFPay.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSGetFPay);

        /**
         * Encodes the specified CSGetFPay message. Does not implicitly {@link activity.CSGetFPay.verify|verify} messages.
         * @param m CSGetFPay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSGetFPay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetFPay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetFPay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSGetFPay;
    }

    /** Properties of a SCNotifyFPayState. */
    interface ISCNotifyFPayState {

        /** SCNotifyFPayState State */
        State?: (number|null);
    }

    /** Represents a SCNotifyFPayState. */
    class SCNotifyFPayState implements ISCNotifyFPayState {

        /**
         * Constructs a new SCNotifyFPayState.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCNotifyFPayState);

        /** SCNotifyFPayState State. */
        public State: number;

        /**
         * Encodes the specified SCNotifyFPayState message. Does not implicitly {@link activity.SCNotifyFPayState.verify|verify} messages.
         * @param m SCNotifyFPayState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCNotifyFPayState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCNotifyFPayState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCNotifyFPayState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCNotifyFPayState;
    }

    /** Properties of a SCNotifyFPayGetState. */
    interface ISCNotifyFPayGetState {

        /** SCNotifyFPayGetState GetInfo */
        GetInfo?: (activity.IFPayGetInfo|null);
    }

    /** Represents a SCNotifyFPayGetState. */
    class SCNotifyFPayGetState implements ISCNotifyFPayGetState {

        /**
         * Constructs a new SCNotifyFPayGetState.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCNotifyFPayGetState);

        /** SCNotifyFPayGetState GetInfo. */
        public GetInfo?: (activity.IFPayGetInfo|null);

        /**
         * Encodes the specified SCNotifyFPayGetState message. Does not implicitly {@link activity.SCNotifyFPayGetState.verify|verify} messages.
         * @param m SCNotifyFPayGetState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCNotifyFPayGetState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCNotifyFPayGetState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCNotifyFPayGetState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCNotifyFPayGetState;
    }

    /** Properties of a SCFPaySign. */
    interface ISCFPaySign {

        /** SCFPaySign OpRetCode */
        OpRetCode?: (activity.OpResultCode_ActFPay|null);
    }

    /** Represents a SCFPaySign. */
    class SCFPaySign implements ISCFPaySign {

        /**
         * Constructs a new SCFPaySign.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCFPaySign);

        /** SCFPaySign OpRetCode. */
        public OpRetCode: activity.OpResultCode_ActFPay;

        /**
         * Encodes the specified SCFPaySign message. Does not implicitly {@link activity.SCFPaySign.verify|verify} messages.
         * @param m SCFPaySign message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCFPaySign, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFPaySign message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFPaySign
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCFPaySign;
    }

    /** Properties of a CSFPaySign. */
    interface ICSFPaySign {
    }

    /** Represents a CSFPaySign. */
    class CSFPaySign implements ICSFPaySign {

        /**
         * Constructs a new CSFPaySign.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSFPaySign);

        /**
         * Encodes the specified CSFPaySign message. Does not implicitly {@link activity.CSFPaySign.verify|verify} messages.
         * @param m CSFPaySign message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSFPaySign, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSFPaySign message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSFPaySign
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSFPaySign;
    }

    /** OpResultCode_ActGold enum. */
    enum OpResultCode_ActGold {
        OPRC_Sucess_ActGold = 0,
        OPRC_Error_ActGold = 1,
        OPRC_Activity_GoldTask_TaskIdError = 6200,
        OPRC_Activity_GoldTask_NotReach = 6201,
        OPRC_Activity_GoldTask_TodayLimit = 6202
    }

    /** GoldPacketID enum. */
    enum GoldPacketID {
        PACKET_Gold_ZERO = 0,
        PACKET_CS_GOLDTASK_DATA = 2630,
        PACKET_SC_GOLDTASK_DATA = 2631,
        PACKET_CS_GOLDTASK_GET = 2632,
        PACKET_SC_GOLDTASK_GET = 2633,
        PACKET_SC_GOLDTASK_CHG = 2634,
        PACKET_SC_GOLDTASK_DEL = 2635,
        PACKET_CS_GOLDCOME_DATA = 2636,
        PACKET_SC_GOLDCOME_DATA = 2637,
        PACKET_CS_GOLDCOME_RANK = 2638,
        PACKET_SC_GOLDCOME_RANK = 2639
    }

    /** Properties of a CSGoldTaskData. */
    interface ICSGoldTaskData {
    }

    /** Represents a CSGoldTaskData. */
    class CSGoldTaskData implements ICSGoldTaskData {

        /**
         * Constructs a new CSGoldTaskData.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSGoldTaskData);

        /**
         * Encodes the specified CSGoldTaskData message. Does not implicitly {@link activity.CSGoldTaskData.verify|verify} messages.
         * @param m CSGoldTaskData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSGoldTaskData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGoldTaskData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGoldTaskData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSGoldTaskData;
    }

    /** Properties of a GoldTaskData. */
    interface IGoldTaskData {

        /** GoldTaskData TaskId */
        TaskId?: (number|null);

        /** GoldTaskData Data */
        Data?: (number|Long|null);

        /** GoldTaskData CompletedTimes */
        CompletedTimes?: (number|null);

        /** GoldTaskData Status */
        Status?: (number|null);
    }

    /** Represents a GoldTaskData. */
    class GoldTaskData implements IGoldTaskData {

        /**
         * Constructs a new GoldTaskData.
         * @param [p] Properties to set
         */
        constructor(p?: activity.IGoldTaskData);

        /** GoldTaskData TaskId. */
        public TaskId: number;

        /** GoldTaskData Data. */
        public Data: (number|Long);

        /** GoldTaskData CompletedTimes. */
        public CompletedTimes: number;

        /** GoldTaskData Status. */
        public Status: number;

        /**
         * Encodes the specified GoldTaskData message. Does not implicitly {@link activity.GoldTaskData.verify|verify} messages.
         * @param m GoldTaskData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.IGoldTaskData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoldTaskData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GoldTaskData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.GoldTaskData;
    }

    /** Properties of a SCGoldTaskData. */
    interface ISCGoldTaskData {

        /** SCGoldTaskData Datas */
        Datas?: (activity.IGoldTaskData[]|null);

        /** SCGoldTaskData Config */
        Config?: (string|null);
    }

    /** Represents a SCGoldTaskData. */
    class SCGoldTaskData implements ISCGoldTaskData {

        /**
         * Constructs a new SCGoldTaskData.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCGoldTaskData);

        /** SCGoldTaskData Datas. */
        public Datas: activity.IGoldTaskData[];

        /** SCGoldTaskData Config. */
        public Config: string;

        /**
         * Encodes the specified SCGoldTaskData message. Does not implicitly {@link activity.SCGoldTaskData.verify|verify} messages.
         * @param m SCGoldTaskData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCGoldTaskData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGoldTaskData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGoldTaskData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCGoldTaskData;
    }

    /** Properties of a CSGoldTaskGet. */
    interface ICSGoldTaskGet {

        /** CSGoldTaskGet TaskId */
        TaskId?: (number|null);
    }

    /** Represents a CSGoldTaskGet. */
    class CSGoldTaskGet implements ICSGoldTaskGet {

        /**
         * Constructs a new CSGoldTaskGet.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSGoldTaskGet);

        /** CSGoldTaskGet TaskId. */
        public TaskId: number;

        /**
         * Encodes the specified CSGoldTaskGet message. Does not implicitly {@link activity.CSGoldTaskGet.verify|verify} messages.
         * @param m CSGoldTaskGet message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSGoldTaskGet, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGoldTaskGet message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGoldTaskGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSGoldTaskGet;
    }

    /** Properties of a SCGoldTaskGet. */
    interface ISCGoldTaskGet {

        /** SCGoldTaskGet TaskId */
        TaskId?: (number|null);

        /** SCGoldTaskGet Data */
        Data?: (activity.IGoldTaskData|null);

        /** SCGoldTaskGet Score */
        Score?: (number|Long|null);

        /** SCGoldTaskGet OpRetCode */
        OpRetCode?: (activity.OpResultCode_ActGold|null);
    }

    /** Represents a SCGoldTaskGet. */
    class SCGoldTaskGet implements ISCGoldTaskGet {

        /**
         * Constructs a new SCGoldTaskGet.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCGoldTaskGet);

        /** SCGoldTaskGet TaskId. */
        public TaskId: number;

        /** SCGoldTaskGet Data. */
        public Data?: (activity.IGoldTaskData|null);

        /** SCGoldTaskGet Score. */
        public Score: (number|Long);

        /** SCGoldTaskGet OpRetCode. */
        public OpRetCode: activity.OpResultCode_ActGold;

        /**
         * Encodes the specified SCGoldTaskGet message. Does not implicitly {@link activity.SCGoldTaskGet.verify|verify} messages.
         * @param m SCGoldTaskGet message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCGoldTaskGet, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGoldTaskGet message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGoldTaskGet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCGoldTaskGet;
    }

    /** Properties of a SCGoldTaskChg. */
    interface ISCGoldTaskChg {

        /** SCGoldTaskChg Tasks */
        Tasks?: (activity.IGoldTaskData[]|null);
    }

    /** Represents a SCGoldTaskChg. */
    class SCGoldTaskChg implements ISCGoldTaskChg {

        /**
         * Constructs a new SCGoldTaskChg.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCGoldTaskChg);

        /** SCGoldTaskChg Tasks. */
        public Tasks: activity.IGoldTaskData[];

        /**
         * Encodes the specified SCGoldTaskChg message. Does not implicitly {@link activity.SCGoldTaskChg.verify|verify} messages.
         * @param m SCGoldTaskChg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCGoldTaskChg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGoldTaskChg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGoldTaskChg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCGoldTaskChg;
    }

    /** Properties of a SCGoldTaskDel. */
    interface ISCGoldTaskDel {

        /** SCGoldTaskDel TaskIds */
        TaskIds?: (number[]|null);
    }

    /** Represents a SCGoldTaskDel. */
    class SCGoldTaskDel implements ISCGoldTaskDel {

        /**
         * Constructs a new SCGoldTaskDel.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCGoldTaskDel);

        /** SCGoldTaskDel TaskIds. */
        public TaskIds: number[];

        /**
         * Encodes the specified SCGoldTaskDel message. Does not implicitly {@link activity.SCGoldTaskDel.verify|verify} messages.
         * @param m SCGoldTaskDel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCGoldTaskDel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGoldTaskDel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGoldTaskDel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCGoldTaskDel;
    }

    /** Properties of a CSGoldComeData. */
    interface ICSGoldComeData {

        /** CSGoldComeData NeedCfg */
        NeedCfg?: (boolean|null);
    }

    /** Represents a CSGoldComeData. */
    class CSGoldComeData implements ICSGoldComeData {

        /**
         * Constructs a new CSGoldComeData.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSGoldComeData);

        /** CSGoldComeData NeedCfg. */
        public NeedCfg: boolean;

        /**
         * Encodes the specified CSGoldComeData message. Does not implicitly {@link activity.CSGoldComeData.verify|verify} messages.
         * @param m CSGoldComeData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSGoldComeData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGoldComeData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGoldComeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSGoldComeData;
    }

    /** Properties of a GoldComeData. */
    interface IGoldComeData {

        /** GoldComeData TaskId */
        TaskId?: (number|null);

        /** GoldComeData Score */
        Score?: (number|Long|null);

        /** GoldComeData GameTimes */
        GameTimes?: (number|Long|null);
    }

    /** Represents a GoldComeData. */
    class GoldComeData implements IGoldComeData {

        /**
         * Constructs a new GoldComeData.
         * @param [p] Properties to set
         */
        constructor(p?: activity.IGoldComeData);

        /** GoldComeData TaskId. */
        public TaskId: number;

        /** GoldComeData Score. */
        public Score: (number|Long);

        /** GoldComeData GameTimes. */
        public GameTimes: (number|Long);

        /**
         * Encodes the specified GoldComeData message. Does not implicitly {@link activity.GoldComeData.verify|verify} messages.
         * @param m GoldComeData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.IGoldComeData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoldComeData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GoldComeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.GoldComeData;
    }

    /** Properties of a SCGoldComeData. */
    interface ISCGoldComeData {

        /** SCGoldComeData Datas */
        Datas?: (activity.IGoldComeData[]|null);

        /** SCGoldComeData Config */
        Config?: (string|null);
    }

    /** Represents a SCGoldComeData. */
    class SCGoldComeData implements ISCGoldComeData {

        /**
         * Constructs a new SCGoldComeData.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCGoldComeData);

        /** SCGoldComeData Datas. */
        public Datas: activity.IGoldComeData[];

        /** SCGoldComeData Config. */
        public Config: string;

        /**
         * Encodes the specified SCGoldComeData message. Does not implicitly {@link activity.SCGoldComeData.verify|verify} messages.
         * @param m SCGoldComeData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCGoldComeData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGoldComeData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGoldComeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCGoldComeData;
    }

    /** Properties of a CSGoldComeRank. */
    interface ICSGoldComeRank {

        /** CSGoldComeRank TaskId */
        TaskId?: (number|null);
    }

    /** Represents a CSGoldComeRank. */
    class CSGoldComeRank implements ICSGoldComeRank {

        /**
         * Constructs a new CSGoldComeRank.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSGoldComeRank);

        /** CSGoldComeRank TaskId. */
        public TaskId: number;

        /**
         * Encodes the specified CSGoldComeRank message. Does not implicitly {@link activity.CSGoldComeRank.verify|verify} messages.
         * @param m CSGoldComeRank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSGoldComeRank, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGoldComeRank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGoldComeRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSGoldComeRank;
    }

    /** Properties of a GoldComePlayerData. */
    interface IGoldComePlayerData {

        /** GoldComePlayerData Rank */
        Rank?: (number|null);

        /** GoldComePlayerData SnId */
        SnId?: (number|null);

        /** GoldComePlayerData HeadIcon */
        HeadIcon?: (number|null);

        /** GoldComePlayerData NickName */
        NickName?: (string|null);

        /** GoldComePlayerData Score */
        Score?: (number|Long|null);

        /** GoldComePlayerData GameTimes */
        GameTimes?: (number|Long|null);

        /** GoldComePlayerData Reward */
        Reward?: (number|Long|null);
    }

    /** Represents a GoldComePlayerData. */
    class GoldComePlayerData implements IGoldComePlayerData {

        /**
         * Constructs a new GoldComePlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: activity.IGoldComePlayerData);

        /** GoldComePlayerData Rank. */
        public Rank: number;

        /** GoldComePlayerData SnId. */
        public SnId: number;

        /** GoldComePlayerData HeadIcon. */
        public HeadIcon: number;

        /** GoldComePlayerData NickName. */
        public NickName: string;

        /** GoldComePlayerData Score. */
        public Score: (number|Long);

        /** GoldComePlayerData GameTimes. */
        public GameTimes: (number|Long);

        /** GoldComePlayerData Reward. */
        public Reward: (number|Long);

        /**
         * Encodes the specified GoldComePlayerData message. Does not implicitly {@link activity.GoldComePlayerData.verify|verify} messages.
         * @param m GoldComePlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.IGoldComePlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoldComePlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GoldComePlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.GoldComePlayerData;
    }

    /** Properties of a GoldComeDailyTaskRank. */
    interface IGoldComeDailyTaskRank {

        /** GoldComeDailyTaskRank RankData */
        RankData?: (activity.IGoldComePlayerData[]|null);

        /** GoldComeDailyTaskRank ActTime */
        ActTime?: (number[]|null);

        /** GoldComeDailyTaskRank ActState */
        ActState?: (number|null);
    }

    /** Represents a GoldComeDailyTaskRank. */
    class GoldComeDailyTaskRank implements IGoldComeDailyTaskRank {

        /**
         * Constructs a new GoldComeDailyTaskRank.
         * @param [p] Properties to set
         */
        constructor(p?: activity.IGoldComeDailyTaskRank);

        /** GoldComeDailyTaskRank RankData. */
        public RankData: activity.IGoldComePlayerData[];

        /** GoldComeDailyTaskRank ActTime. */
        public ActTime: number[];

        /** GoldComeDailyTaskRank ActState. */
        public ActState: number;

        /**
         * Encodes the specified GoldComeDailyTaskRank message. Does not implicitly {@link activity.GoldComeDailyTaskRank.verify|verify} messages.
         * @param m GoldComeDailyTaskRank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.IGoldComeDailyTaskRank, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoldComeDailyTaskRank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GoldComeDailyTaskRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.GoldComeDailyTaskRank;
    }

    /** Properties of a SCGoldComeRank. */
    interface ISCGoldComeRank {

        /** SCGoldComeRank TaskId */
        TaskId?: (number|null);

        /** SCGoldComeRank RankList */
        RankList?: (activity.IGoldComeDailyTaskRank[]|null);

        /** SCGoldComeRank NextActTime */
        NextActTime?: (number[]|null);
    }

    /** Represents a SCGoldComeRank. */
    class SCGoldComeRank implements ISCGoldComeRank {

        /**
         * Constructs a new SCGoldComeRank.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCGoldComeRank);

        /** SCGoldComeRank TaskId. */
        public TaskId: number;

        /** SCGoldComeRank RankList. */
        public RankList: activity.IGoldComeDailyTaskRank[];

        /** SCGoldComeRank NextActTime. */
        public NextActTime: number[];

        /**
         * Encodes the specified SCGoldComeRank message. Does not implicitly {@link activity.SCGoldComeRank.verify|verify} messages.
         * @param m SCGoldComeRank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCGoldComeRank, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGoldComeRank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGoldComeRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCGoldComeRank;
    }

    /** OpResultCode_ActLuckTurn enum. */
    enum OpResultCode_ActLuckTurn {
        OPRC_Sucess_ActLuckTurn = 0,
        OPRC_Error_ActLuckTurn = 1,
        OPRC_LuckyTurntable_Info_FindPlatform_Fail = 10014,
        OPRC_LuckyTurntable_Draw_DataTrans_Fail = 10015,
        OPRC_LuckyTurntable_Draw_DataTrans_Nil = 10016,
        OPRC_LuckyTurntable_Draw_TurntableType_Nil = 10017,
        OPRC_LuckyTurntable_Draw_Draw_Fail = 10018
    }

    /** LuckyTurntablePacketID enum. */
    enum LuckyTurntablePacketID {
        PACKET_LuckyTurntable_ZERO = 0,
        PACKET_CS_LUCKYTURNTABLE_INFO = 2650,
        PACKET_SC_LUCKYTURNTABLE_INFO = 2651,
        PACKET_CS_LUCKYTURNTABLE_DRAW = 2652,
        PACKET_SC_LUCKYTURNTABLE_DRAW = 2653,
        PACKET_SC_LUCKYTURNTABLE_PRIZE = 2654,
        PACKET_SC_LUCKYTURNTABLE_GRANDPRIZE = 2655,
        PACKET_SC_LUCKYTURNTABLE_MODIFYCONFIG = 2656
    }

    /** Properties of a LuckyTurntableConfig. */
    interface ILuckyTurntableConfig {

        /** LuckyTurntableConfig TurntableType */
        TurntableType?: (number|null);

        /** LuckyTurntableConfig ScoreCost */
        ScoreCost?: (number|Long|null);

        /** LuckyTurntableConfig Reward */
        Reward?: ((number|Long)[]|null);
    }

    /** Represents a LuckyTurntableConfig. */
    class LuckyTurntableConfig implements ILuckyTurntableConfig {

        /**
         * Constructs a new LuckyTurntableConfig.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ILuckyTurntableConfig);

        /** LuckyTurntableConfig TurntableType. */
        public TurntableType: number;

        /** LuckyTurntableConfig ScoreCost. */
        public ScoreCost: (number|Long);

        /** LuckyTurntableConfig Reward. */
        public Reward: (number|Long)[];

        /**
         * Encodes the specified LuckyTurntableConfig message. Does not implicitly {@link activity.LuckyTurntableConfig.verify|verify} messages.
         * @param m LuckyTurntableConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ILuckyTurntableConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LuckyTurntableConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LuckyTurntableConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.LuckyTurntableConfig;
    }

    /** Properties of a SCLuckyTurntablePersonalPrize. */
    interface ISCLuckyTurntablePersonalPrize {

        /** SCLuckyTurntablePersonalPrize Ts */
        Ts?: (number|Long|null);

        /** SCLuckyTurntablePersonalPrize TurntableType */
        TurntableType?: (number|null);

        /** SCLuckyTurntablePersonalPrize RewardAmount */
        RewardAmount?: (number|Long|null);

        /** SCLuckyTurntablePersonalPrize SnId */
        SnId?: (number|null);
    }

    /** Represents a SCLuckyTurntablePersonalPrize. */
    class SCLuckyTurntablePersonalPrize implements ISCLuckyTurntablePersonalPrize {

        /**
         * Constructs a new SCLuckyTurntablePersonalPrize.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCLuckyTurntablePersonalPrize);

        /** SCLuckyTurntablePersonalPrize Ts. */
        public Ts: (number|Long);

        /** SCLuckyTurntablePersonalPrize TurntableType. */
        public TurntableType: number;

        /** SCLuckyTurntablePersonalPrize RewardAmount. */
        public RewardAmount: (number|Long);

        /** SCLuckyTurntablePersonalPrize SnId. */
        public SnId: number;

        /**
         * Encodes the specified SCLuckyTurntablePersonalPrize message. Does not implicitly {@link activity.SCLuckyTurntablePersonalPrize.verify|verify} messages.
         * @param m SCLuckyTurntablePersonalPrize message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCLuckyTurntablePersonalPrize, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLuckyTurntablePersonalPrize message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLuckyTurntablePersonalPrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCLuckyTurntablePersonalPrize;
    }

    /** Properties of a SCLuckyTurntablePrize. */
    interface ISCLuckyTurntablePrize {

        /** SCLuckyTurntablePrize Name */
        Name?: (string|null);

        /** SCLuckyTurntablePrize TurntableType */
        TurntableType?: (number|null);

        /** SCLuckyTurntablePrize RewardAmount */
        RewardAmount?: (number|Long|null);

        /** SCLuckyTurntablePrize Ts */
        Ts?: (number|Long|null);

        /** SCLuckyTurntablePrize SnId */
        SnId?: (number|null);
    }

    /** Represents a SCLuckyTurntablePrize. */
    class SCLuckyTurntablePrize implements ISCLuckyTurntablePrize {

        /**
         * Constructs a new SCLuckyTurntablePrize.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCLuckyTurntablePrize);

        /** SCLuckyTurntablePrize Name. */
        public Name: string;

        /** SCLuckyTurntablePrize TurntableType. */
        public TurntableType: number;

        /** SCLuckyTurntablePrize RewardAmount. */
        public RewardAmount: (number|Long);

        /** SCLuckyTurntablePrize Ts. */
        public Ts: (number|Long);

        /** SCLuckyTurntablePrize SnId. */
        public SnId: number;

        /**
         * Encodes the specified SCLuckyTurntablePrize message. Does not implicitly {@link activity.SCLuckyTurntablePrize.verify|verify} messages.
         * @param m SCLuckyTurntablePrize message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCLuckyTurntablePrize, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLuckyTurntablePrize message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLuckyTurntablePrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCLuckyTurntablePrize;
    }

    /** Properties of a SCLuckyTurntableGrandPrize. */
    interface ISCLuckyTurntableGrandPrize {

        /** SCLuckyTurntableGrandPrize Ts */
        Ts?: (number|Long|null);

        /** SCLuckyTurntableGrandPrize TurntableType */
        TurntableType?: (number|null);

        /** SCLuckyTurntableGrandPrize RewardAmount */
        RewardAmount?: (number|Long|null);

        /** SCLuckyTurntableGrandPrize SnId */
        SnId?: (number|null);

        /** SCLuckyTurntableGrandPrize Name */
        Name?: (string|null);
    }

    /** Represents a SCLuckyTurntableGrandPrize. */
    class SCLuckyTurntableGrandPrize implements ISCLuckyTurntableGrandPrize {

        /**
         * Constructs a new SCLuckyTurntableGrandPrize.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCLuckyTurntableGrandPrize);

        /** SCLuckyTurntableGrandPrize Ts. */
        public Ts: (number|Long);

        /** SCLuckyTurntableGrandPrize TurntableType. */
        public TurntableType: number;

        /** SCLuckyTurntableGrandPrize RewardAmount. */
        public RewardAmount: (number|Long);

        /** SCLuckyTurntableGrandPrize SnId. */
        public SnId: number;

        /** SCLuckyTurntableGrandPrize Name. */
        public Name: string;

        /**
         * Encodes the specified SCLuckyTurntableGrandPrize message. Does not implicitly {@link activity.SCLuckyTurntableGrandPrize.verify|verify} messages.
         * @param m SCLuckyTurntableGrandPrize message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCLuckyTurntableGrandPrize, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLuckyTurntableGrandPrize message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLuckyTurntableGrandPrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCLuckyTurntableGrandPrize;
    }

    /** Properties of a CSLuckyTurntableInfo. */
    interface ICSLuckyTurntableInfo {
    }

    /** Represents a CSLuckyTurntableInfo. */
    class CSLuckyTurntableInfo implements ICSLuckyTurntableInfo {

        /**
         * Constructs a new CSLuckyTurntableInfo.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSLuckyTurntableInfo);

        /**
         * Encodes the specified CSLuckyTurntableInfo message. Does not implicitly {@link activity.CSLuckyTurntableInfo.verify|verify} messages.
         * @param m CSLuckyTurntableInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSLuckyTurntableInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSLuckyTurntableInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSLuckyTurntableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSLuckyTurntableInfo;
    }

    /** Properties of a SCLuckyTurntableInfo. */
    interface ISCLuckyTurntableInfo {

        /** SCLuckyTurntableInfo StartAct */
        StartAct?: (number|null);

        /** SCLuckyTurntableInfo StartTickets */
        StartTickets?: (number|Long|null);

        /** SCLuckyTurntableInfo Version */
        Version?: (number|null);

        /** SCLuckyTurntableInfo Score */
        Score?: (number|Long|null);

        /** SCLuckyTurntableInfo TomorrowScore */
        TomorrowScore?: (number|Long|null);

        /** SCLuckyTurntableInfo TurntablesConfigs */
        TurntablesConfigs?: (activity.ILuckyTurntableConfig[]|null);

        /** SCLuckyTurntableInfo Prize */
        Prize?: (activity.ISCLuckyTurntablePrize[]|null);

        /** SCLuckyTurntableInfo GrandPrize */
        GrandPrize?: (activity.ISCLuckyTurntableGrandPrize[]|null);

        /** SCLuckyTurntableInfo PersonalPrize */
        PersonalPrize?: (activity.ISCLuckyTurntablePersonalPrize[]|null);

        /** SCLuckyTurntableInfo OpRetCode */
        OpRetCode?: (activity.OpResultCode_ActLuckTurn|null);
    }

    /** Represents a SCLuckyTurntableInfo. */
    class SCLuckyTurntableInfo implements ISCLuckyTurntableInfo {

        /**
         * Constructs a new SCLuckyTurntableInfo.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCLuckyTurntableInfo);

        /** SCLuckyTurntableInfo StartAct. */
        public StartAct: number;

        /** SCLuckyTurntableInfo StartTickets. */
        public StartTickets: (number|Long);

        /** SCLuckyTurntableInfo Version. */
        public Version: number;

        /** SCLuckyTurntableInfo Score. */
        public Score: (number|Long);

        /** SCLuckyTurntableInfo TomorrowScore. */
        public TomorrowScore: (number|Long);

        /** SCLuckyTurntableInfo TurntablesConfigs. */
        public TurntablesConfigs: activity.ILuckyTurntableConfig[];

        /** SCLuckyTurntableInfo Prize. */
        public Prize: activity.ISCLuckyTurntablePrize[];

        /** SCLuckyTurntableInfo GrandPrize. */
        public GrandPrize: activity.ISCLuckyTurntableGrandPrize[];

        /** SCLuckyTurntableInfo PersonalPrize. */
        public PersonalPrize: activity.ISCLuckyTurntablePersonalPrize[];

        /** SCLuckyTurntableInfo OpRetCode. */
        public OpRetCode: activity.OpResultCode_ActLuckTurn;

        /**
         * Encodes the specified SCLuckyTurntableInfo message. Does not implicitly {@link activity.SCLuckyTurntableInfo.verify|verify} messages.
         * @param m SCLuckyTurntableInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCLuckyTurntableInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLuckyTurntableInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLuckyTurntableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCLuckyTurntableInfo;
    }

    /** Properties of a SCLuckyTurntableModifyConfig. */
    interface ISCLuckyTurntableModifyConfig {

        /** SCLuckyTurntableModifyConfig StartAct */
        StartAct?: (number|null);

        /** SCLuckyTurntableModifyConfig StartTickets */
        StartTickets?: (number|Long|null);

        /** SCLuckyTurntableModifyConfig Version */
        Version?: (number|null);

        /** SCLuckyTurntableModifyConfig TurntablesConfigs */
        TurntablesConfigs?: (activity.ILuckyTurntableConfig[]|null);
    }

    /** Represents a SCLuckyTurntableModifyConfig. */
    class SCLuckyTurntableModifyConfig implements ISCLuckyTurntableModifyConfig {

        /**
         * Constructs a new SCLuckyTurntableModifyConfig.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCLuckyTurntableModifyConfig);

        /** SCLuckyTurntableModifyConfig StartAct. */
        public StartAct: number;

        /** SCLuckyTurntableModifyConfig StartTickets. */
        public StartTickets: (number|Long);

        /** SCLuckyTurntableModifyConfig Version. */
        public Version: number;

        /** SCLuckyTurntableModifyConfig TurntablesConfigs. */
        public TurntablesConfigs: activity.ILuckyTurntableConfig[];

        /**
         * Encodes the specified SCLuckyTurntableModifyConfig message. Does not implicitly {@link activity.SCLuckyTurntableModifyConfig.verify|verify} messages.
         * @param m SCLuckyTurntableModifyConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCLuckyTurntableModifyConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLuckyTurntableModifyConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLuckyTurntableModifyConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCLuckyTurntableModifyConfig;
    }

    /** Properties of a CSLuckyTurntableDraw. */
    interface ICSLuckyTurntableDraw {

        /** CSLuckyTurntableDraw TurntableType */
        TurntableType?: (number|null);
    }

    /** Represents a CSLuckyTurntableDraw. */
    class CSLuckyTurntableDraw implements ICSLuckyTurntableDraw {

        /**
         * Constructs a new CSLuckyTurntableDraw.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSLuckyTurntableDraw);

        /** CSLuckyTurntableDraw TurntableType. */
        public TurntableType: number;

        /**
         * Encodes the specified CSLuckyTurntableDraw message. Does not implicitly {@link activity.CSLuckyTurntableDraw.verify|verify} messages.
         * @param m CSLuckyTurntableDraw message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSLuckyTurntableDraw, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSLuckyTurntableDraw message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSLuckyTurntableDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSLuckyTurntableDraw;
    }

    /** Properties of a SCLuckyTurntableDraw. */
    interface ISCLuckyTurntableDraw {

        /** SCLuckyTurntableDraw Ts */
        Ts?: (number|Long|null);

        /** SCLuckyTurntableDraw RewardAmount */
        RewardAmount?: (number|Long|null);

        /** SCLuckyTurntableDraw RewardType */
        RewardType?: (number|null);

        /** SCLuckyTurntableDraw TurntableType */
        TurntableType?: (number|null);

        /** SCLuckyTurntableDraw SnId */
        SnId?: (number|null);

        /** SCLuckyTurntableDraw OpRetCode */
        OpRetCode?: (activity.OpResultCode_ActLuckTurn|null);
    }

    /** Represents a SCLuckyTurntableDraw. */
    class SCLuckyTurntableDraw implements ISCLuckyTurntableDraw {

        /**
         * Constructs a new SCLuckyTurntableDraw.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCLuckyTurntableDraw);

        /** SCLuckyTurntableDraw Ts. */
        public Ts: (number|Long);

        /** SCLuckyTurntableDraw RewardAmount. */
        public RewardAmount: (number|Long);

        /** SCLuckyTurntableDraw RewardType. */
        public RewardType: number;

        /** SCLuckyTurntableDraw TurntableType. */
        public TurntableType: number;

        /** SCLuckyTurntableDraw SnId. */
        public SnId: number;

        /** SCLuckyTurntableDraw OpRetCode. */
        public OpRetCode: activity.OpResultCode_ActLuckTurn;

        /**
         * Encodes the specified SCLuckyTurntableDraw message. Does not implicitly {@link activity.SCLuckyTurntableDraw.verify|verify} messages.
         * @param m SCLuckyTurntableDraw message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCLuckyTurntableDraw, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLuckyTurntableDraw message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLuckyTurntableDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCLuckyTurntableDraw;
    }

    /** OpResultCode_ActSign enum. */
    enum OpResultCode_ActSign {
        OPRC_Activity_Sign_Sucess = 0,
        OPRC_Activity_Sign_Error = 1,
        OPRC_Activity_Sign_Close = 1001,
        OPRC_Activity_Sign_PayNum_Low = 1002,
        OPRC_Activity_Sign_Config_Vip_Error = 1003,
        OPRC_Activity_Sign_Config_Day_Error = 1004,
        OPRC_Activity_Sign_Repeat = 1005
    }

    /** ActSignPacketID enum. */
    enum ActSignPacketID {
        PACKET_SignZero = 0,
        PACKET_CSSign = 2662,
        PACKET_SCSign = 2663,
        PACKET_CSSignData = 2664,
        PACKET_SCSignData = 2665
    }

    /** Properties of a CSSign. */
    interface ICSSign {

        /** CSSign SignIndex */
        SignIndex?: (number|null);

        /** CSSign SignType */
        SignType?: (number|null);
    }

    /** Represents a CSSign. */
    class CSSign implements ICSSign {

        /**
         * Constructs a new CSSign.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSSign);

        /** CSSign SignIndex. */
        public SignIndex: number;

        /** CSSign SignType. */
        public SignType: number;

        /**
         * Encodes the specified CSSign message. Does not implicitly {@link activity.CSSign.verify|verify} messages.
         * @param m CSSign message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSSign, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSSign message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSSign
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSSign;
    }

    /** Properties of a SCSign. */
    interface ISCSign {

        /** SCSign SignIndex */
        SignIndex?: (number|null);

        /** SCSign SignType */
        SignType?: (number|null);

        /** SCSign OpRetCode */
        OpRetCode?: (activity.OpResultCode_ActSign|null);
    }

    /** Represents a SCSign. */
    class SCSign implements ISCSign {

        /**
         * Constructs a new SCSign.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCSign);

        /** SCSign SignIndex. */
        public SignIndex: number;

        /** SCSign SignType. */
        public SignType: number;

        /** SCSign OpRetCode. */
        public OpRetCode: activity.OpResultCode_ActSign;

        /**
         * Encodes the specified SCSign message. Does not implicitly {@link activity.SCSign.verify|verify} messages.
         * @param m SCSign message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCSign, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSign message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSign
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCSign;
    }

    /** Properties of a CSSignData. */
    interface ICSSignData {
    }

    /** Represents a CSSignData. */
    class CSSignData implements ICSSignData {

        /**
         * Constructs a new CSSignData.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ICSSignData);

        /**
         * Encodes the specified CSSignData message. Does not implicitly {@link activity.CSSignData.verify|verify} messages.
         * @param m CSSignData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ICSSignData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSSignData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSSignData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.CSSignData;
    }

    /** Properties of a SCSignData. */
    interface ISCSignData {

        /** SCSignData SignCount */
        SignCount?: (number|null);

        /** SCSignData TodaySign */
        TodaySign?: (number|null);
    }

    /** Represents a SCSignData. */
    class SCSignData implements ISCSignData {

        /**
         * Constructs a new SCSignData.
         * @param [p] Properties to set
         */
        constructor(p?: activity.ISCSignData);

        /** SCSignData SignCount. */
        public SignCount: number;

        /** SCSignData TodaySign. */
        public TodaySign: number;

        /**
         * Encodes the specified SCSignData message. Does not implicitly {@link activity.SCSignData.verify|verify} messages.
         * @param m SCSignData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: activity.ISCSignData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSignData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSignData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): activity.SCSignData;
    }
}
