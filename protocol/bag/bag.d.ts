// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace bag. */
export namespace bag {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_UseUp = 2,
        OPRC_IdErr = 3,
        OPRC_DbErr = 4,
        OPRC_BagFull = 5,
        OPRC_NotPlayer = 6
    }

    /** SPacketID enum. */
    enum SPacketID {
        PACKET_BAG_ZERO = 0,
        PACKET_ALL_BAG_INFO = 2530,
        PACKET_ALL_BAG_USE = 2531,
        PACKET_SC_SYNCBAGDATA = 2532,
        PACKET_ALL_BAG_END = 2549
    }

    /** Properties of an ItemInfo. */
    interface IItemInfo {

        /** ItemInfo ItemId */
        ItemId?: (number|null);

        /** ItemInfo ItemNum */
        ItemNum?: (number|null);

        /** ItemInfo ObtainTime */
        ObtainTime?: (number|Long|null);
    }

    /** Represents an ItemInfo. */
    class ItemInfo implements IItemInfo {

        /**
         * Constructs a new ItemInfo.
         * @param [p] Properties to set
         */
        constructor(p?: bag.IItemInfo);

        /** ItemInfo ItemId. */
        public ItemId: number;

        /** ItemInfo ItemNum. */
        public ItemNum: number;

        /** ItemInfo ObtainTime. */
        public ObtainTime: (number|Long);

        /**
         * Encodes the specified ItemInfo message. Does not implicitly {@link bag.ItemInfo.verify|verify} messages.
         * @param m ItemInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: bag.IItemInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): bag.ItemInfo;
    }

    /** Properties of a CSBagInfo. */
    interface ICSBagInfo {

        /** CSBagInfo NowLocation */
        NowLocation?: (number|null);
    }

    /** Represents a CSBagInfo. */
    class CSBagInfo implements ICSBagInfo {

        /**
         * Constructs a new CSBagInfo.
         * @param [p] Properties to set
         */
        constructor(p?: bag.ICSBagInfo);

        /** CSBagInfo NowLocation. */
        public NowLocation: number;

        /**
         * Encodes the specified CSBagInfo message. Does not implicitly {@link bag.CSBagInfo.verify|verify} messages.
         * @param m CSBagInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: bag.ICSBagInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSBagInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): bag.CSBagInfo;
    }

    /** Properties of a SCBagInfo. */
    interface ISCBagInfo {

        /** SCBagInfo RetCode */
        RetCode?: (bag.OpResultCode|null);

        /** SCBagInfo Infos */
        Infos?: (bag.IItemInfo[]|null);

        /** SCBagInfo BagNumMax */
        BagNumMax?: (number|null);
    }

    /** Represents a SCBagInfo. */
    class SCBagInfo implements ISCBagInfo {

        /**
         * Constructs a new SCBagInfo.
         * @param [p] Properties to set
         */
        constructor(p?: bag.ISCBagInfo);

        /** SCBagInfo RetCode. */
        public RetCode: bag.OpResultCode;

        /** SCBagInfo Infos. */
        public Infos: bag.IItemInfo[];

        /** SCBagInfo BagNumMax. */
        public BagNumMax: number;

        /**
         * Encodes the specified SCBagInfo message. Does not implicitly {@link bag.SCBagInfo.verify|verify} messages.
         * @param m SCBagInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: bag.ISCBagInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCBagInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): bag.SCBagInfo;
    }

    /** Properties of a CSUpBagInfo. */
    interface ICSUpBagInfo {

        /** CSUpBagInfo ItemId */
        ItemId?: (number|null);

        /** CSUpBagInfo ItemNum */
        ItemNum?: (number|null);

        /** CSUpBagInfo Opt */
        Opt?: (number|null);

        /** CSUpBagInfo AcceptSnId */
        AcceptSnId?: (number|null);

        /** CSUpBagInfo NowEffect */
        NowEffect?: (number|null);

        /** CSUpBagInfo ShowId */
        ShowId?: (number|Long|null);
    }

    /** Represents a CSUpBagInfo. */
    class CSUpBagInfo implements ICSUpBagInfo {

        /**
         * Constructs a new CSUpBagInfo.
         * @param [p] Properties to set
         */
        constructor(p?: bag.ICSUpBagInfo);

        /** CSUpBagInfo ItemId. */
        public ItemId: number;

        /** CSUpBagInfo ItemNum. */
        public ItemNum: number;

        /** CSUpBagInfo Opt. */
        public Opt: number;

        /** CSUpBagInfo AcceptSnId. */
        public AcceptSnId: number;

        /** CSUpBagInfo NowEffect. */
        public NowEffect: number;

        /** CSUpBagInfo ShowId. */
        public ShowId: (number|Long);

        /**
         * Encodes the specified CSUpBagInfo message. Does not implicitly {@link bag.CSUpBagInfo.verify|verify} messages.
         * @param m CSUpBagInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: bag.ICSUpBagInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSUpBagInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSUpBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): bag.CSUpBagInfo;
    }

    /** Properties of a SCUpBagInfo. */
    interface ISCUpBagInfo {

        /** SCUpBagInfo RetCode */
        RetCode?: (bag.OpResultCode|null);

        /** SCUpBagInfo NowItemId */
        NowItemId?: (number|null);

        /** SCUpBagInfo NowItemNum */
        NowItemNum?: (number|null);

        /** SCUpBagInfo Coin */
        Coin?: (number|Long|null);

        /** SCUpBagInfo Diamond */
        Diamond?: (number|Long|null);

        /** SCUpBagInfo Infos */
        Infos?: (bag.IItemInfo[]|null);
    }

    /** Represents a SCUpBagInfo. */
    class SCUpBagInfo implements ISCUpBagInfo {

        /**
         * Constructs a new SCUpBagInfo.
         * @param [p] Properties to set
         */
        constructor(p?: bag.ISCUpBagInfo);

        /** SCUpBagInfo RetCode. */
        public RetCode: bag.OpResultCode;

        /** SCUpBagInfo NowItemId. */
        public NowItemId: number;

        /** SCUpBagInfo NowItemNum. */
        public NowItemNum: number;

        /** SCUpBagInfo Coin. */
        public Coin: (number|Long);

        /** SCUpBagInfo Diamond. */
        public Diamond: (number|Long);

        /** SCUpBagInfo Infos. */
        public Infos: bag.IItemInfo[];

        /**
         * Encodes the specified SCUpBagInfo message. Does not implicitly {@link bag.SCUpBagInfo.verify|verify} messages.
         * @param m SCUpBagInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: bag.ISCUpBagInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCUpBagInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCUpBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): bag.SCUpBagInfo;
    }

    /** Properties of a SCSyncBagData. */
    interface ISCSyncBagData {

        /** SCSyncBagData Infos */
        Infos?: (bag.IItemInfo[]|null);
    }

    /** Represents a SCSyncBagData. */
    class SCSyncBagData implements ISCSyncBagData {

        /**
         * Constructs a new SCSyncBagData.
         * @param [p] Properties to set
         */
        constructor(p?: bag.ISCSyncBagData);

        /** SCSyncBagData Infos. */
        public Infos: bag.IItemInfo[];

        /**
         * Encodes the specified SCSyncBagData message. Does not implicitly {@link bag.SCSyncBagData.verify|verify} messages.
         * @param m SCSyncBagData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: bag.ISCSyncBagData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSyncBagData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSyncBagData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): bag.SCSyncBagData;
    }
}
