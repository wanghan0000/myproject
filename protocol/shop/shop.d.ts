// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace shop. */
export namespace shop {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_VCoinNotEnough = 2,
        OPRC_ExchangeLimit = 3,
        OPRC_ExchangeNotEnough = 4,
        OPRC_ExchangeDataRtt = 5,
        OPRC_ExchangeSoldOut = 6
    }

    /** SPacketID enum. */
    enum SPacketID {
        PACKET_SHOP_ZERO = 0,
        PACKET_CS_SHOP_INFO = 2500,
        PACKET_SC_SHOP_INFO = 2501,
        PACKET_CS_SHOP_ADLOOKED = 2502,
        PACKET_SC_SHOP_ADLOOKED = 2503,
        PACKET_CS_SHOP_VCPAYSHOP = 2504,
        PACKET_SC_SHOP_VCPAYSHOP = 2505,
        PACKET_CS_SHOP_EXCHANGERECORD = 2506,
        PACKET_SC_SHOP_EXCHANGERECORD = 2507,
        PACKET_CS_SHOP_EXCHANGE = 2508,
        PACKET_SC_SHOP_EXCHANGE = 2509,
        PACKET_CS_SHOP_EXCHANGELIST = 2510,
        PACKET_SC_SHOP_EXCHANGELIST = 2511,
        SHOP_SC_GIVECOIN_INFO = 2514
    }

    /** Properties of a ShopInfo. */
    interface IShopInfo {

        /** ShopInfo Id */
        Id?: (number|null);

        /** ShopInfo AdLookedNum */
        AdLookedNum?: (number|null);

        /** ShopInfo AdReceiveNum */
        AdReceiveNum?: (number|null);

        /** ShopInfo LastLookTime */
        LastLookTime?: (number|null);

        /** ShopInfo RoleAdded */
        RoleAdded?: (number|null);

        /** ShopInfo PetAdded */
        PetAdded?: (number|null);

        /** ShopInfo ItemId */
        ItemId?: (number|null);

        /** ShopInfo Page */
        Page?: (number|null);

        /** ShopInfo Order */
        Order?: (number|null);

        /** ShopInfo Type */
        Type?: (number|null);

        /** ShopInfo Location */
        Location?: (number[]|null);

        /** ShopInfo Picture */
        Picture?: (string|null);

        /** ShopInfo Name */
        Name?: (string|null);

        /** ShopInfo Ad */
        Ad?: (number|null);

        /** ShopInfo AdTime */
        AdTime?: (number|null);

        /** ShopInfo RepeatTimes */
        RepeatTimes?: (number|null);

        /** ShopInfo CoolingTime */
        CoolingTime?: (number[]|null);

        /** ShopInfo Label */
        Label?: (number[]|null);

        /** ShopInfo Added */
        Added?: (number|null);

        /** ShopInfo Amount */
        Amount?: (number|null);

        /** ShopInfo Consume */
        Consume?: (number|null);

        /** ShopInfo ConsumptionAmount */
        ConsumptionAmount?: (number|null);
    }

    /** Represents a ShopInfo. */
    class ShopInfo implements IShopInfo {

        /**
         * Constructs a new ShopInfo.
         * @param [p] Properties to set
         */
        constructor(p?: shop.IShopInfo);

        /** ShopInfo Id. */
        public Id: number;

        /** ShopInfo AdLookedNum. */
        public AdLookedNum: number;

        /** ShopInfo AdReceiveNum. */
        public AdReceiveNum: number;

        /** ShopInfo LastLookTime. */
        public LastLookTime: number;

        /** ShopInfo RoleAdded. */
        public RoleAdded: number;

        /** ShopInfo PetAdded. */
        public PetAdded: number;

        /** ShopInfo ItemId. */
        public ItemId: number;

        /** ShopInfo Page. */
        public Page: number;

        /** ShopInfo Order. */
        public Order: number;

        /** ShopInfo Type. */
        public Type: number;

        /** ShopInfo Location. */
        public Location: number[];

        /** ShopInfo Picture. */
        public Picture: string;

        /** ShopInfo Name. */
        public Name: string;

        /** ShopInfo Ad. */
        public Ad: number;

        /** ShopInfo AdTime. */
        public AdTime: number;

        /** ShopInfo RepeatTimes. */
        public RepeatTimes: number;

        /** ShopInfo CoolingTime. */
        public CoolingTime: number[];

        /** ShopInfo Label. */
        public Label: number[];

        /** ShopInfo Added. */
        public Added: number;

        /** ShopInfo Amount. */
        public Amount: number;

        /** ShopInfo Consume. */
        public Consume: number;

        /** ShopInfo ConsumptionAmount. */
        public ConsumptionAmount: number;

        /**
         * Encodes the specified ShopInfo message. Does not implicitly {@link shop.ShopInfo.verify|verify} messages.
         * @param m ShopInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.IShopInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShopInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.ShopInfo;
    }

    /** Properties of a CSShopInfo. */
    interface ICSShopInfo {

        /** CSShopInfo NowLocation */
        NowLocation?: (number|null);
    }

    /** Represents a CSShopInfo. */
    class CSShopInfo implements ICSShopInfo {

        /**
         * Constructs a new CSShopInfo.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ICSShopInfo);

        /** CSShopInfo NowLocation. */
        public NowLocation: number;

        /**
         * Encodes the specified CSShopInfo message. Does not implicitly {@link shop.CSShopInfo.verify|verify} messages.
         * @param m CSShopInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ICSShopInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSShopInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.CSShopInfo;
    }

    /** Properties of a SCShopInfo. */
    interface ISCShopInfo {

        /** SCShopInfo Infos */
        Infos?: (shop.IShopInfo[]|null);
    }

    /** Represents a SCShopInfo. */
    class SCShopInfo implements ISCShopInfo {

        /**
         * Constructs a new SCShopInfo.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ISCShopInfo);

        /** SCShopInfo Infos. */
        public Infos: shop.IShopInfo[];

        /**
         * Encodes the specified SCShopInfo message. Does not implicitly {@link shop.SCShopInfo.verify|verify} messages.
         * @param m SCShopInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ISCShopInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCShopInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.SCShopInfo;
    }

    /** Properties of a CSAdLooked. */
    interface ICSAdLooked {

        /** CSAdLooked LookedResult */
        LookedResult?: (number|null);

        /** CSAdLooked ShopId */
        ShopId?: (number|null);
    }

    /** Represents a CSAdLooked. */
    class CSAdLooked implements ICSAdLooked {

        /**
         * Constructs a new CSAdLooked.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ICSAdLooked);

        /** CSAdLooked LookedResult. */
        public LookedResult: number;

        /** CSAdLooked ShopId. */
        public ShopId: number;

        /**
         * Encodes the specified CSAdLooked message. Does not implicitly {@link shop.CSAdLooked.verify|verify} messages.
         * @param m CSAdLooked message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ICSAdLooked, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSAdLooked message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSAdLooked
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.CSAdLooked;
    }

    /** Properties of a SCAdLooked. */
    interface ISCAdLooked {

        /** SCAdLooked RetCode */
        RetCode?: (shop.OpResultCode|null);

        /** SCAdLooked ShopInfo */
        ShopInfo?: (shop.IShopInfo|null);
    }

    /** Represents a SCAdLooked. */
    class SCAdLooked implements ISCAdLooked {

        /**
         * Constructs a new SCAdLooked.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ISCAdLooked);

        /** SCAdLooked RetCode. */
        public RetCode: shop.OpResultCode;

        /** SCAdLooked ShopInfo. */
        public ShopInfo?: (shop.IShopInfo|null);

        /**
         * Encodes the specified SCAdLooked message. Does not implicitly {@link shop.SCAdLooked.verify|verify} messages.
         * @param m SCAdLooked message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ISCAdLooked, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCAdLooked message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCAdLooked
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.SCAdLooked;
    }

    /** Properties of a CSVCPayShop. */
    interface ICSVCPayShop {

        /** CSVCPayShop ShopId */
        ShopId?: (number|null);
    }

    /** Represents a CSVCPayShop. */
    class CSVCPayShop implements ICSVCPayShop {

        /**
         * Constructs a new CSVCPayShop.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ICSVCPayShop);

        /** CSVCPayShop ShopId. */
        public ShopId: number;

        /**
         * Encodes the specified CSVCPayShop message. Does not implicitly {@link shop.CSVCPayShop.verify|verify} messages.
         * @param m CSVCPayShop message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ICSVCPayShop, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSVCPayShop message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSVCPayShop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.CSVCPayShop;
    }

    /** Properties of a SCVCPayShop. */
    interface ISCVCPayShop {

        /** SCVCPayShop RetCode */
        RetCode?: (shop.OpResultCode|null);

        /** SCVCPayShop ShopInfo */
        ShopInfo?: (shop.IShopInfo|null);
    }

    /** Represents a SCVCPayShop. */
    class SCVCPayShop implements ISCVCPayShop {

        /**
         * Constructs a new SCVCPayShop.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ISCVCPayShop);

        /** SCVCPayShop RetCode. */
        public RetCode: shop.OpResultCode;

        /** SCVCPayShop ShopInfo. */
        public ShopInfo?: (shop.IShopInfo|null);

        /**
         * Encodes the specified SCVCPayShop message. Does not implicitly {@link shop.SCVCPayShop.verify|verify} messages.
         * @param m SCVCPayShop message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ISCVCPayShop, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCVCPayShop message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCVCPayShop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.SCVCPayShop;
    }

    /** Properties of a SCNotifyGiveCoinInfo. */
    interface ISCNotifyGiveCoinInfo {

        /** SCNotifyGiveCoinInfo GiveCoin */
        GiveCoin?: (number|Long|null);

        /** SCNotifyGiveCoinInfo GiveTag */
        GiveTag?: (number|null);
    }

    /** Represents a SCNotifyGiveCoinInfo. */
    class SCNotifyGiveCoinInfo implements ISCNotifyGiveCoinInfo {

        /**
         * Constructs a new SCNotifyGiveCoinInfo.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ISCNotifyGiveCoinInfo);

        /** SCNotifyGiveCoinInfo GiveCoin. */
        public GiveCoin: (number|Long);

        /** SCNotifyGiveCoinInfo GiveTag. */
        public GiveTag: number;

        /**
         * Encodes the specified SCNotifyGiveCoinInfo message. Does not implicitly {@link shop.SCNotifyGiveCoinInfo.verify|verify} messages.
         * @param m SCNotifyGiveCoinInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ISCNotifyGiveCoinInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCNotifyGiveCoinInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCNotifyGiveCoinInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.SCNotifyGiveCoinInfo;
    }

    /** Properties of a CSShopExchangeRecord. */
    interface ICSShopExchangeRecord {

        /** CSShopExchangeRecord PageNo */
        PageNo?: (number|null);
    }

    /** Represents a CSShopExchangeRecord. */
    class CSShopExchangeRecord implements ICSShopExchangeRecord {

        /**
         * Constructs a new CSShopExchangeRecord.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ICSShopExchangeRecord);

        /** CSShopExchangeRecord PageNo. */
        public PageNo: number;

        /**
         * Encodes the specified CSShopExchangeRecord message. Does not implicitly {@link shop.CSShopExchangeRecord.verify|verify} messages.
         * @param m CSShopExchangeRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ICSShopExchangeRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSShopExchangeRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSShopExchangeRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.CSShopExchangeRecord;
    }

    /** Properties of a ShopExchangeRecord. */
    interface IShopExchangeRecord {

        /** ShopExchangeRecord CreateTs */
        CreateTs?: (number|Long|null);

        /** ShopExchangeRecord Name */
        Name?: (string|null);

        /** ShopExchangeRecord OrderId */
        OrderId?: (string|null);

        /** ShopExchangeRecord State */
        State?: (number|null);

        /** ShopExchangeRecord Remark */
        Remark?: (string|null);
    }

    /** Represents a ShopExchangeRecord. */
    class ShopExchangeRecord implements IShopExchangeRecord {

        /**
         * Constructs a new ShopExchangeRecord.
         * @param [p] Properties to set
         */
        constructor(p?: shop.IShopExchangeRecord);

        /** ShopExchangeRecord CreateTs. */
        public CreateTs: (number|Long);

        /** ShopExchangeRecord Name. */
        public Name: string;

        /** ShopExchangeRecord OrderId. */
        public OrderId: string;

        /** ShopExchangeRecord State. */
        public State: number;

        /** ShopExchangeRecord Remark. */
        public Remark: string;

        /**
         * Encodes the specified ShopExchangeRecord message. Does not implicitly {@link shop.ShopExchangeRecord.verify|verify} messages.
         * @param m ShopExchangeRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.IShopExchangeRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShopExchangeRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ShopExchangeRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.ShopExchangeRecord;
    }

    /** Properties of a SCShopExchangeRecord. */
    interface ISCShopExchangeRecord {

        /** SCShopExchangeRecord PageNo */
        PageNo?: (number|null);

        /** SCShopExchangeRecord PageSize */
        PageSize?: (number|null);

        /** SCShopExchangeRecord PageSum */
        PageSum?: (number|null);

        /** SCShopExchangeRecord Infos */
        Infos?: (shop.IShopExchangeRecord[]|null);
    }

    /** Represents a SCShopExchangeRecord. */
    class SCShopExchangeRecord implements ISCShopExchangeRecord {

        /**
         * Constructs a new SCShopExchangeRecord.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ISCShopExchangeRecord);

        /** SCShopExchangeRecord PageNo. */
        public PageNo: number;

        /** SCShopExchangeRecord PageSize. */
        public PageSize: number;

        /** SCShopExchangeRecord PageSum. */
        public PageSum: number;

        /** SCShopExchangeRecord Infos. */
        public Infos: shop.IShopExchangeRecord[];

        /**
         * Encodes the specified SCShopExchangeRecord message. Does not implicitly {@link shop.SCShopExchangeRecord.verify|verify} messages.
         * @param m SCShopExchangeRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ISCShopExchangeRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCShopExchangeRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCShopExchangeRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.SCShopExchangeRecord;
    }

    /** Properties of a CSShopExchange. */
    interface ICSShopExchange {

        /** CSShopExchange GoodsId */
        GoodsId?: (number|null);

        /** CSShopExchange UserName */
        UserName?: (string|null);

        /** CSShopExchange Mobile */
        Mobile?: (string|null);

        /** CSShopExchange Comment */
        Comment?: (string|null);
    }

    /** Represents a CSShopExchange. */
    class CSShopExchange implements ICSShopExchange {

        /**
         * Constructs a new CSShopExchange.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ICSShopExchange);

        /** CSShopExchange GoodsId. */
        public GoodsId: number;

        /** CSShopExchange UserName. */
        public UserName: string;

        /** CSShopExchange Mobile. */
        public Mobile: string;

        /** CSShopExchange Comment. */
        public Comment: string;

        /**
         * Encodes the specified CSShopExchange message. Does not implicitly {@link shop.CSShopExchange.verify|verify} messages.
         * @param m CSShopExchange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ICSShopExchange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSShopExchange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSShopExchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.CSShopExchange;
    }

    /** Properties of a SCShopExchange. */
    interface ISCShopExchange {

        /** SCShopExchange RetCode */
        RetCode?: (shop.OpResultCode|null);

        /** SCShopExchange CreateTs */
        CreateTs?: (number|Long|null);

        /** SCShopExchange OrderId */
        OrderId?: (string|null);
    }

    /** Represents a SCShopExchange. */
    class SCShopExchange implements ISCShopExchange {

        /**
         * Constructs a new SCShopExchange.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ISCShopExchange);

        /** SCShopExchange RetCode. */
        public RetCode: shop.OpResultCode;

        /** SCShopExchange CreateTs. */
        public CreateTs: (number|Long);

        /** SCShopExchange OrderId. */
        public OrderId: string;

        /**
         * Encodes the specified SCShopExchange message. Does not implicitly {@link shop.SCShopExchange.verify|verify} messages.
         * @param m SCShopExchange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ISCShopExchange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCShopExchange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCShopExchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.SCShopExchange;
    }

    /** Properties of a CSShopExchangeList. */
    interface ICSShopExchangeList {
    }

    /** Represents a CSShopExchangeList. */
    class CSShopExchangeList implements ICSShopExchangeList {

        /**
         * Constructs a new CSShopExchangeList.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ICSShopExchangeList);

        /**
         * Encodes the specified CSShopExchangeList message. Does not implicitly {@link shop.CSShopExchangeList.verify|verify} messages.
         * @param m CSShopExchangeList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ICSShopExchangeList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSShopExchangeList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSShopExchangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.CSShopExchangeList;
    }

    /** Properties of a ShopExchangeInfo. */
    interface IShopExchangeInfo {

        /** ShopExchangeInfo Type */
        Type?: (number|null);

        /** ShopExchangeInfo Picture */
        Picture?: (string|null);

        /** ShopExchangeInfo Name */
        Name?: (string|null);

        /** ShopExchangeInfo NeedNum */
        NeedNum?: (number|null);

        /** ShopExchangeInfo Rule */
        Rule?: (string|null);

        /** ShopExchangeInfo GoodsId */
        GoodsId?: (number|null);

        /** ShopExchangeInfo ShopLimit */
        ShopLimit?: (number|null);

        /** ShopExchangeInfo DayMaxLimit */
        DayMaxLimit?: (number|null);

        /** ShopExchangeInfo DayPlayLimit */
        DayPlayLimit?: (number|null);
    }

    /** Represents a ShopExchangeInfo. */
    class ShopExchangeInfo implements IShopExchangeInfo {

        /**
         * Constructs a new ShopExchangeInfo.
         * @param [p] Properties to set
         */
        constructor(p?: shop.IShopExchangeInfo);

        /** ShopExchangeInfo Type. */
        public Type: number;

        /** ShopExchangeInfo Picture. */
        public Picture: string;

        /** ShopExchangeInfo Name. */
        public Name: string;

        /** ShopExchangeInfo NeedNum. */
        public NeedNum: number;

        /** ShopExchangeInfo Rule. */
        public Rule: string;

        /** ShopExchangeInfo GoodsId. */
        public GoodsId: number;

        /** ShopExchangeInfo ShopLimit. */
        public ShopLimit: number;

        /** ShopExchangeInfo DayMaxLimit. */
        public DayMaxLimit: number;

        /** ShopExchangeInfo DayPlayLimit. */
        public DayPlayLimit: number;

        /**
         * Encodes the specified ShopExchangeInfo message. Does not implicitly {@link shop.ShopExchangeInfo.verify|verify} messages.
         * @param m ShopExchangeInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.IShopExchangeInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShopExchangeInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ShopExchangeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.ShopExchangeInfo;
    }

    /** Properties of a SCShopExchangeList. */
    interface ISCShopExchangeList {

        /** SCShopExchangeList RetCode */
        RetCode?: (shop.OpResultCode|null);

        /** SCShopExchangeList Infos */
        Infos?: (shop.IShopExchangeInfo[]|null);
    }

    /** Represents a SCShopExchangeList. */
    class SCShopExchangeList implements ISCShopExchangeList {

        /**
         * Constructs a new SCShopExchangeList.
         * @param [p] Properties to set
         */
        constructor(p?: shop.ISCShopExchangeList);

        /** SCShopExchangeList RetCode. */
        public RetCode: shop.OpResultCode;

        /** SCShopExchangeList Infos. */
        public Infos: shop.IShopExchangeInfo[];

        /**
         * Encodes the specified SCShopExchangeList message. Does not implicitly {@link shop.SCShopExchangeList.verify|verify} messages.
         * @param m SCShopExchangeList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: shop.ISCShopExchangeList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCShopExchangeList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCShopExchangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): shop.SCShopExchangeList;
    }
}
