// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace gradeshop. */
export namespace gradeshop {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_GradeShop_ShopIsNil = 1120,
        OPRC_GradeShop_GradeNotEnough = 1121,
        OPRC_GradeShop_StockNotEnough = 1122,
        OPRC_GradeShop_MailIsFull = 1123,
        OPRC_ExchangeMultiple = 1124
    }

    /** GradeShopPacketID enum. */
    enum GradeShopPacketID {
        PACKET_GradeShop_ZERO = 0,
        PACKET_CS_GRADESHOP_INFO = 2500,
        PACKET_SC_GRADESHOP_INFO = 2501,
        PACKET_CS_GRADESHOP_ADDRINFO = 2502,
        PACKET_SC_GRADESHOP_ADDRINFO = 2503,
        PACKET_SC_GRADESHOP_CONFUPDATE = 2504,
        PACKET_CS_GRADESHOP_EXCHANGE = 2505,
        PACKET_SC_GRADESHOP_EXCHANGE = 2506,
        PACKET_CS_GRADESHOP_LIST = 2507,
        PACKET_SC_GRADESHOP_LIST = 2508,
        PACKET_CS_GRADESHOP_EXIT = 2509,
        PACKET_CS_GRADESHOP_DAYNUM = 2510,
        PACKET_SC_GRADESHOP_DAYNUM = 2511
    }

    /** Properties of a CSGradeShopInfo. */
    interface ICSGradeShopInfo {
    }

    /** Represents a CSGradeShopInfo. */
    class CSGradeShopInfo implements ICSGradeShopInfo {

        /**
         * Constructs a new CSGradeShopInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.ICSGradeShopInfo);

        /**
         * Encodes the specified CSGradeShopInfo message. Does not implicitly {@link gradeshop.CSGradeShopInfo.verify|verify} messages.
         * @param m CSGradeShopInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.ICSGradeShopInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGradeShopInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGradeShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.CSGradeShopInfo;
    }

    /** Properties of a GradeShopInfo. */
    interface IGradeShopInfo {

        /** GradeShopInfo ShopId */
        ShopId?: (number|null);

        /** GradeShopInfo ShopName */
        ShopName?: (string|null);

        /** GradeShopInfo ExchangeScore */
        ExchangeScore?: (number|null);

        /** GradeShopInfo ShopInfo */
        ShopInfo?: (string|null);

        /** GradeShopInfo ShopIcoUrl */
        ShopIcoUrl?: (string|null);

        /** GradeShopInfo ExchangedNum */
        ExchangedNum?: (number|null);

        /** GradeShopInfo DayLimit */
        DayLimit?: (number|null);

        /** GradeShopInfo ShopType */
        ShopType?: (number|null);

        /** GradeShopInfo DayNum */
        DayNum?: (number|null);
    }

    /** Represents a GradeShopInfo. */
    class GradeShopInfo implements IGradeShopInfo {

        /**
         * Constructs a new GradeShopInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.IGradeShopInfo);

        /** GradeShopInfo ShopId. */
        public ShopId: number;

        /** GradeShopInfo ShopName. */
        public ShopName: string;

        /** GradeShopInfo ExchangeScore. */
        public ExchangeScore: number;

        /** GradeShopInfo ShopInfo. */
        public ShopInfo: string;

        /** GradeShopInfo ShopIcoUrl. */
        public ShopIcoUrl: string;

        /** GradeShopInfo ExchangedNum. */
        public ExchangedNum: number;

        /** GradeShopInfo DayLimit. */
        public DayLimit: number;

        /** GradeShopInfo ShopType. */
        public ShopType: number;

        /** GradeShopInfo DayNum. */
        public DayNum: number;

        /**
         * Encodes the specified GradeShopInfo message. Does not implicitly {@link gradeshop.GradeShopInfo.verify|verify} messages.
         * @param m GradeShopInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.IGradeShopInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GradeShopInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GradeShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.GradeShopInfo;
    }

    /** Properties of a SCGradeShopInfo. */
    interface ISCGradeShopInfo {

        /** SCGradeShopInfo Name */
        Name?: (string|null);

        /** SCGradeShopInfo Tel */
        Tel?: (string|null);

        /** SCGradeShopInfo Addr */
        Addr?: (string|null);

        /** SCGradeShopInfo GradeShopInfo */
        GradeShopInfo?: (gradeshop.IGradeShopInfo[]|null);
    }

    /** Represents a SCGradeShopInfo. */
    class SCGradeShopInfo implements ISCGradeShopInfo {

        /**
         * Constructs a new SCGradeShopInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.ISCGradeShopInfo);

        /** SCGradeShopInfo Name. */
        public Name: string;

        /** SCGradeShopInfo Tel. */
        public Tel: string;

        /** SCGradeShopInfo Addr. */
        public Addr: string;

        /** SCGradeShopInfo GradeShopInfo. */
        public GradeShopInfo: gradeshop.IGradeShopInfo[];

        /**
         * Encodes the specified SCGradeShopInfo message. Does not implicitly {@link gradeshop.SCGradeShopInfo.verify|verify} messages.
         * @param m SCGradeShopInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.ISCGradeShopInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGradeShopInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGradeShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.SCGradeShopInfo;
    }

    /** Properties of a SCGradeShopConfUpdate. */
    interface ISCGradeShopConfUpdate {

        /** SCGradeShopConfUpdate GradeShopInfo */
        GradeShopInfo?: (gradeshop.IGradeShopInfo[]|null);
    }

    /** Represents a SCGradeShopConfUpdate. */
    class SCGradeShopConfUpdate implements ISCGradeShopConfUpdate {

        /**
         * Constructs a new SCGradeShopConfUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.ISCGradeShopConfUpdate);

        /** SCGradeShopConfUpdate GradeShopInfo. */
        public GradeShopInfo: gradeshop.IGradeShopInfo[];

        /**
         * Encodes the specified SCGradeShopConfUpdate message. Does not implicitly {@link gradeshop.SCGradeShopConfUpdate.verify|verify} messages.
         * @param m SCGradeShopConfUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.ISCGradeShopConfUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGradeShopConfUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGradeShopConfUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.SCGradeShopConfUpdate;
    }

    /** Properties of a CSGradeShopAddrInfo. */
    interface ICSGradeShopAddrInfo {

        /** CSGradeShopAddrInfo Name */
        Name?: (string|null);

        /** CSGradeShopAddrInfo Tel */
        Tel?: (string|null);

        /** CSGradeShopAddrInfo Addr */
        Addr?: (string|null);
    }

    /** Represents a CSGradeShopAddrInfo. */
    class CSGradeShopAddrInfo implements ICSGradeShopAddrInfo {

        /**
         * Constructs a new CSGradeShopAddrInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.ICSGradeShopAddrInfo);

        /** CSGradeShopAddrInfo Name. */
        public Name: string;

        /** CSGradeShopAddrInfo Tel. */
        public Tel: string;

        /** CSGradeShopAddrInfo Addr. */
        public Addr: string;

        /**
         * Encodes the specified CSGradeShopAddrInfo message. Does not implicitly {@link gradeshop.CSGradeShopAddrInfo.verify|verify} messages.
         * @param m CSGradeShopAddrInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.ICSGradeShopAddrInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGradeShopAddrInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGradeShopAddrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.CSGradeShopAddrInfo;
    }

    /** Properties of a SCGradeShopAddrInfo. */
    interface ISCGradeShopAddrInfo {

        /** SCGradeShopAddrInfo OpRetCode */
        OpRetCode?: (gradeshop.OpResultCode|null);
    }

    /** Represents a SCGradeShopAddrInfo. */
    class SCGradeShopAddrInfo implements ISCGradeShopAddrInfo {

        /**
         * Constructs a new SCGradeShopAddrInfo.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.ISCGradeShopAddrInfo);

        /** SCGradeShopAddrInfo OpRetCode. */
        public OpRetCode: gradeshop.OpResultCode;

        /**
         * Encodes the specified SCGradeShopAddrInfo message. Does not implicitly {@link gradeshop.SCGradeShopAddrInfo.verify|verify} messages.
         * @param m SCGradeShopAddrInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.ISCGradeShopAddrInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGradeShopAddrInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGradeShopAddrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.SCGradeShopAddrInfo;
    }

    /** Properties of a CSGradeShopExchange. */
    interface ICSGradeShopExchange {

        /** CSGradeShopExchange ShopId */
        ShopId?: (number|null);

        /** CSGradeShopExchange Name */
        Name?: (string|null);

        /** CSGradeShopExchange Tel */
        Tel?: (string|null);

        /** CSGradeShopExchange Addr */
        Addr?: (string|null);
    }

    /** Represents a CSGradeShopExchange. */
    class CSGradeShopExchange implements ICSGradeShopExchange {

        /**
         * Constructs a new CSGradeShopExchange.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.ICSGradeShopExchange);

        /** CSGradeShopExchange ShopId. */
        public ShopId: number;

        /** CSGradeShopExchange Name. */
        public Name: string;

        /** CSGradeShopExchange Tel. */
        public Tel: string;

        /** CSGradeShopExchange Addr. */
        public Addr: string;

        /**
         * Encodes the specified CSGradeShopExchange message. Does not implicitly {@link gradeshop.CSGradeShopExchange.verify|verify} messages.
         * @param m CSGradeShopExchange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.ICSGradeShopExchange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGradeShopExchange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGradeShopExchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.CSGradeShopExchange;
    }

    /** Properties of a SCGradeShopExchange. */
    interface ISCGradeShopExchange {

        /** SCGradeShopExchange OpRetCode */
        OpRetCode?: (gradeshop.OpResultCode|null);
    }

    /** Represents a SCGradeShopExchange. */
    class SCGradeShopExchange implements ISCGradeShopExchange {

        /**
         * Constructs a new SCGradeShopExchange.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.ISCGradeShopExchange);

        /** SCGradeShopExchange OpRetCode. */
        public OpRetCode: gradeshop.OpResultCode;

        /**
         * Encodes the specified SCGradeShopExchange message. Does not implicitly {@link gradeshop.SCGradeShopExchange.verify|verify} messages.
         * @param m SCGradeShopExchange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.ISCGradeShopExchange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGradeShopExchange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGradeShopExchange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.SCGradeShopExchange;
    }

    /** Properties of a CSGradeShopList. */
    interface ICSGradeShopList {

        /** CSGradeShopList LogType */
        LogType?: (number|null);

        /** CSGradeShopList PageNo */
        PageNo?: (number|null);
    }

    /** Represents a CSGradeShopList. */
    class CSGradeShopList implements ICSGradeShopList {

        /**
         * Constructs a new CSGradeShopList.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.ICSGradeShopList);

        /** CSGradeShopList LogType. */
        public LogType: number;

        /** CSGradeShopList PageNo. */
        public PageNo: number;

        /**
         * Encodes the specified CSGradeShopList message. Does not implicitly {@link gradeshop.CSGradeShopList.verify|verify} messages.
         * @param m CSGradeShopList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.ICSGradeShopList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGradeShopList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGradeShopList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.CSGradeShopList;
    }

    /** Properties of a GradeShopList. */
    interface IGradeShopList {

        /** GradeShopList RecordTime */
        RecordTime?: (number|Long|null);

        /** GradeShopList RecordId */
        RecordId?: (string|null);

        /** GradeShopList RecordName */
        RecordName?: (string|null);

        /** GradeShopList GradeNum */
        GradeNum?: (number|Long|null);

        /** GradeShopList State */
        State?: (number|null);
    }

    /** Represents a GradeShopList. */
    class GradeShopList implements IGradeShopList {

        /**
         * Constructs a new GradeShopList.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.IGradeShopList);

        /** GradeShopList RecordTime. */
        public RecordTime: (number|Long);

        /** GradeShopList RecordId. */
        public RecordId: string;

        /** GradeShopList RecordName. */
        public RecordName: string;

        /** GradeShopList GradeNum. */
        public GradeNum: (number|Long);

        /** GradeShopList State. */
        public State: number;

        /**
         * Encodes the specified GradeShopList message. Does not implicitly {@link gradeshop.GradeShopList.verify|verify} messages.
         * @param m GradeShopList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.IGradeShopList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GradeShopList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GradeShopList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.GradeShopList;
    }

    /** Properties of a SCGradeShopList. */
    interface ISCGradeShopList {

        /** SCGradeShopList LogType */
        LogType?: (number|null);

        /** SCGradeShopList GradeShopRecordList */
        GradeShopRecordList?: (gradeshop.IGradeShopList[]|null);

        /** SCGradeShopList PageNo */
        PageNo?: (number|null);

        /** SCGradeShopList PageSize */
        PageSize?: (number|null);

        /** SCGradeShopList PageNum */
        PageNum?: (number|null);
    }

    /** Represents a SCGradeShopList. */
    class SCGradeShopList implements ISCGradeShopList {

        /**
         * Constructs a new SCGradeShopList.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.ISCGradeShopList);

        /** SCGradeShopList LogType. */
        public LogType: number;

        /** SCGradeShopList GradeShopRecordList. */
        public GradeShopRecordList: gradeshop.IGradeShopList[];

        /** SCGradeShopList PageNo. */
        public PageNo: number;

        /** SCGradeShopList PageSize. */
        public PageSize: number;

        /** SCGradeShopList PageNum. */
        public PageNum: number;

        /**
         * Encodes the specified SCGradeShopList message. Does not implicitly {@link gradeshop.SCGradeShopList.verify|verify} messages.
         * @param m SCGradeShopList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.ISCGradeShopList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGradeShopList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGradeShopList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.SCGradeShopList;
    }

    /** Properties of a CSGradeShopExit. */
    interface ICSGradeShopExit {
    }

    /** Represents a CSGradeShopExit. */
    class CSGradeShopExit implements ICSGradeShopExit {

        /**
         * Constructs a new CSGradeShopExit.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.ICSGradeShopExit);

        /**
         * Encodes the specified CSGradeShopExit message. Does not implicitly {@link gradeshop.CSGradeShopExit.verify|verify} messages.
         * @param m CSGradeShopExit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.ICSGradeShopExit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGradeShopExit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGradeShopExit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.CSGradeShopExit;
    }

    /** Properties of a CSGradeShopDayNum. */
    interface ICSGradeShopDayNum {

        /** CSGradeShopDayNum ShopId */
        ShopId?: (number|null);
    }

    /** Represents a CSGradeShopDayNum. */
    class CSGradeShopDayNum implements ICSGradeShopDayNum {

        /**
         * Constructs a new CSGradeShopDayNum.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.ICSGradeShopDayNum);

        /** CSGradeShopDayNum ShopId. */
        public ShopId: number;

        /**
         * Encodes the specified CSGradeShopDayNum message. Does not implicitly {@link gradeshop.CSGradeShopDayNum.verify|verify} messages.
         * @param m CSGradeShopDayNum message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.ICSGradeShopDayNum, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGradeShopDayNum message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGradeShopDayNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.CSGradeShopDayNum;
    }

    /** Properties of a SCGradeShopDayNum. */
    interface ISCGradeShopDayNum {

        /** SCGradeShopDayNum ShopId */
        ShopId?: (number|null);

        /** SCGradeShopDayNum DayNum */
        DayNum?: (number|null);
    }

    /** Represents a SCGradeShopDayNum. */
    class SCGradeShopDayNum implements ISCGradeShopDayNum {

        /**
         * Constructs a new SCGradeShopDayNum.
         * @param [p] Properties to set
         */
        constructor(p?: gradeshop.ISCGradeShopDayNum);

        /** SCGradeShopDayNum ShopId. */
        public ShopId: number;

        /** SCGradeShopDayNum DayNum. */
        public DayNum: number;

        /**
         * Encodes the specified SCGradeShopDayNum message. Does not implicitly {@link gradeshop.SCGradeShopDayNum.verify|verify} messages.
         * @param m SCGradeShopDayNum message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: gradeshop.ISCGradeShopDayNum, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGradeShopDayNum message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGradeShopDayNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): gradeshop.SCGradeShopDayNum;
    }
}
