// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace welfare. */
export namespace welfare {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_NoTimes = 2,
        OPRC_CoinTooMore = 3,
        OPRC_ErrCoin = 4
    }

    /** SPacketID enum. */
    enum SPacketID {
        PACKET_SHOP_ZERO = 0,
        PACKET_CS_WELF_GETRELIEFFUND = 2580,
        PACKET_SC_WELF_GETRELIEFFUND = 2581,
        PACKET_CS_WELF_GETTURNPLATE = 2582,
        PACKET_SC_WELF_GETTURNPLATE = 2583,
        PACKET_CS_WELF_GETADDUPSIGN = 2584,
        PACKET_SC_WELF_GETADDUPSIGN = 2585,
        PACKET_CS_WELF_WELFAREINFO = 2586,
        PACKET_SC_WELF_WELFAREINFO = 2587,
        PACKET_CS_WELF_BLINBOXINFO = 2588,
        PACKET_SC_WELF_BLINBOXINFO = 2589,
        PACKET_CS_WELF_GETBLINBOX = 2590,
        PACKET_SC_WELF_GETBLINBOX = 2591,
        PACKET_CS_WELF_FIRSTPAYINFO = 2592,
        PACKET_SC_WELF_FIRSTPAYINFO = 2593,
        PACKET_CS_WELF_FIRSTPAY = 2594,
        PACKET_SC_WELF_FIRSTPAY = 2595,
        PACKET_CS_WELF_CONTINPAYINFO = 2596,
        PACKET_SC_WELF_CONTINPAYINFO = 2597,
        PACKET_CS_WELF_CONTINPAY = 2598,
        PACKET_SC_WELF_CONTINPAY = 2599
    }

    /** Properties of a CSGetReliefFund. */
    interface ICSGetReliefFund {
    }

    /** Represents a CSGetReliefFund. */
    class CSGetReliefFund implements ICSGetReliefFund {

        /**
         * Constructs a new CSGetReliefFund.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ICSGetReliefFund);

        /**
         * Encodes the specified CSGetReliefFund message. Does not implicitly {@link welfare.CSGetReliefFund.verify|verify} messages.
         * @param m CSGetReliefFund message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ICSGetReliefFund, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetReliefFund message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetReliefFund
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.CSGetReliefFund;
    }

    /** Properties of a SCGetReliefFund. */
    interface ISCGetReliefFund {

        /** SCGetReliefFund OpRetCode */
        OpRetCode?: (welfare.OpResultCode|null);

        /** SCGetReliefFund Times */
        Times?: (number|null);

        /** SCGetReliefFund Coin */
        Coin?: (number|Long|null);
    }

    /** Represents a SCGetReliefFund. */
    class SCGetReliefFund implements ISCGetReliefFund {

        /**
         * Constructs a new SCGetReliefFund.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ISCGetReliefFund);

        /** SCGetReliefFund OpRetCode. */
        public OpRetCode: welfare.OpResultCode;

        /** SCGetReliefFund Times. */
        public Times: number;

        /** SCGetReliefFund Coin. */
        public Coin: (number|Long);

        /**
         * Encodes the specified SCGetReliefFund message. Does not implicitly {@link welfare.SCGetReliefFund.verify|verify} messages.
         * @param m SCGetReliefFund message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ISCGetReliefFund, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetReliefFund message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetReliefFund
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.SCGetReliefFund;
    }

    /** Properties of a WelfareDate. */
    interface IWelfareDate {

        /** WelfareDate Grade */
        Grade?: (number|null);

        /** WelfareDate Type */
        Type?: (number|null);

        /** WelfareDate Name */
        Name?: (string|null);

        /** WelfareDate Item_Id */
        Item_Id?: (number|null);
    }

    /** Represents a WelfareDate. */
    class WelfareDate implements IWelfareDate {

        /**
         * Constructs a new WelfareDate.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.IWelfareDate);

        /** WelfareDate Grade. */
        public Grade: number;

        /** WelfareDate Type. */
        public Type: number;

        /** WelfareDate Name. */
        public Name: string;

        /** WelfareDate Item_Id. */
        public Item_Id: number;

        /**
         * Encodes the specified WelfareDate message. Does not implicitly {@link welfare.WelfareDate.verify|verify} messages.
         * @param m WelfareDate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.IWelfareDate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WelfareDate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WelfareDate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.WelfareDate;
    }

    /** Properties of a CSGetTurnplate. */
    interface ICSGetTurnplate {
    }

    /** Represents a CSGetTurnplate. */
    class CSGetTurnplate implements ICSGetTurnplate {

        /**
         * Constructs a new CSGetTurnplate.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ICSGetTurnplate);

        /**
         * Encodes the specified CSGetTurnplate message. Does not implicitly {@link welfare.CSGetTurnplate.verify|verify} messages.
         * @param m CSGetTurnplate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ICSGetTurnplate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetTurnplate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetTurnplate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.CSGetTurnplate;
    }

    /** Properties of a SCGetTurnplate. */
    interface ISCGetTurnplate {

        /** SCGetTurnplate OpRetCode */
        OpRetCode?: (welfare.OpResultCode|null);

        /** SCGetTurnplate Date */
        Date?: (welfare.IWelfareDate[]|null);

        /** SCGetTurnplate Idx */
        Idx?: (number|null);

        /** SCGetTurnplate SignDay */
        SignDay?: (number|null);
    }

    /** Represents a SCGetTurnplate. */
    class SCGetTurnplate implements ISCGetTurnplate {

        /**
         * Constructs a new SCGetTurnplate.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ISCGetTurnplate);

        /** SCGetTurnplate OpRetCode. */
        public OpRetCode: welfare.OpResultCode;

        /** SCGetTurnplate Date. */
        public Date: welfare.IWelfareDate[];

        /** SCGetTurnplate Idx. */
        public Idx: number;

        /** SCGetTurnplate SignDay. */
        public SignDay: number;

        /**
         * Encodes the specified SCGetTurnplate message. Does not implicitly {@link welfare.SCGetTurnplate.verify|verify} messages.
         * @param m SCGetTurnplate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ISCGetTurnplate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetTurnplate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetTurnplate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.SCGetTurnplate;
    }

    /** Properties of an AddUpWelfareDate. */
    interface IAddUpWelfareDate {

        /** AddUpWelfareDate AddUpDay */
        AddUpDay?: (number|null);

        /** AddUpWelfareDate AddUpDate */
        AddUpDate?: (welfare.IWelfareDate[]|null);
    }

    /** Represents an AddUpWelfareDate. */
    class AddUpWelfareDate implements IAddUpWelfareDate {

        /**
         * Constructs a new AddUpWelfareDate.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.IAddUpWelfareDate);

        /** AddUpWelfareDate AddUpDay. */
        public AddUpDay: number;

        /** AddUpWelfareDate AddUpDate. */
        public AddUpDate: welfare.IWelfareDate[];

        /**
         * Encodes the specified AddUpWelfareDate message. Does not implicitly {@link welfare.AddUpWelfareDate.verify|verify} messages.
         * @param m AddUpWelfareDate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.IAddUpWelfareDate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddUpWelfareDate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AddUpWelfareDate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.AddUpWelfareDate;
    }

    /** Properties of a CSGetAddupSign. */
    interface ICSGetAddupSign {

        /** CSGetAddupSign AddUpDay */
        AddUpDay?: (number|null);
    }

    /** Represents a CSGetAddupSign. */
    class CSGetAddupSign implements ICSGetAddupSign {

        /**
         * Constructs a new CSGetAddupSign.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ICSGetAddupSign);

        /** CSGetAddupSign AddUpDay. */
        public AddUpDay: number;

        /**
         * Encodes the specified CSGetAddupSign message. Does not implicitly {@link welfare.CSGetAddupSign.verify|verify} messages.
         * @param m CSGetAddupSign message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ICSGetAddupSign, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetAddupSign message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetAddupSign
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.CSGetAddupSign;
    }

    /** Properties of a SCGetAddupSign. */
    interface ISCGetAddupSign {

        /** SCGetAddupSign OpRetCode */
        OpRetCode?: (welfare.OpResultCode|null);

        /** SCGetAddupSign Date */
        Date?: (welfare.IAddUpWelfareDate[]|null);

        /** SCGetAddupSign AddUpSignDay */
        AddUpSignDay?: (number[]|null);
    }

    /** Represents a SCGetAddupSign. */
    class SCGetAddupSign implements ISCGetAddupSign {

        /**
         * Constructs a new SCGetAddupSign.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ISCGetAddupSign);

        /** SCGetAddupSign OpRetCode. */
        public OpRetCode: welfare.OpResultCode;

        /** SCGetAddupSign Date. */
        public Date: welfare.IAddUpWelfareDate[];

        /** SCGetAddupSign AddUpSignDay. */
        public AddUpSignDay: number[];

        /**
         * Encodes the specified SCGetAddupSign message. Does not implicitly {@link welfare.SCGetAddupSign.verify|verify} messages.
         * @param m SCGetAddupSign message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ISCGetAddupSign, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetAddupSign message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetAddupSign
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.SCGetAddupSign;
    }

    /** Properties of a CSWelfaredInfo. */
    interface ICSWelfaredInfo {
    }

    /** Represents a CSWelfaredInfo. */
    class CSWelfaredInfo implements ICSWelfaredInfo {

        /**
         * Constructs a new CSWelfaredInfo.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ICSWelfaredInfo);

        /**
         * Encodes the specified CSWelfaredInfo message. Does not implicitly {@link welfare.CSWelfaredInfo.verify|verify} messages.
         * @param m CSWelfaredInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ICSWelfaredInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSWelfaredInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSWelfaredInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.CSWelfaredInfo;
    }

    /** Properties of a WelfareTurnplateDate. */
    interface IWelfareTurnplateDate {

        /** WelfareTurnplateDate Id */
        Id?: (number|null);

        /** WelfareTurnplateDate Date */
        Date?: (welfare.IWelfareDate[]|null);
    }

    /** Represents a WelfareTurnplateDate. */
    class WelfareTurnplateDate implements IWelfareTurnplateDate {

        /**
         * Constructs a new WelfareTurnplateDate.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.IWelfareTurnplateDate);

        /** WelfareTurnplateDate Id. */
        public Id: number;

        /** WelfareTurnplateDate Date. */
        public Date: welfare.IWelfareDate[];

        /**
         * Encodes the specified WelfareTurnplateDate message. Does not implicitly {@link welfare.WelfareTurnplateDate.verify|verify} messages.
         * @param m WelfareTurnplateDate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.IWelfareTurnplateDate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WelfareTurnplateDate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WelfareTurnplateDate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.WelfareTurnplateDate;
    }

    /** Properties of a Welfare7SignDate. */
    interface IWelfare7SignDate {

        /** Welfare7SignDate Day */
        Day?: (number|null);

        /** Welfare7SignDate Date */
        Date?: (welfare.IWelfareDate[]|null);

        /** Welfare7SignDate AddUpDate */
        AddUpDate?: (welfare.IAddUpWelfareDate[]|null);
    }

    /** Represents a Welfare7SignDate. */
    class Welfare7SignDate implements IWelfare7SignDate {

        /**
         * Constructs a new Welfare7SignDate.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.IWelfare7SignDate);

        /** Welfare7SignDate Day. */
        public Day: number;

        /** Welfare7SignDate Date. */
        public Date: welfare.IWelfareDate[];

        /** Welfare7SignDate AddUpDate. */
        public AddUpDate: welfare.IAddUpWelfareDate[];

        /**
         * Encodes the specified Welfare7SignDate message. Does not implicitly {@link welfare.Welfare7SignDate.verify|verify} messages.
         * @param m Welfare7SignDate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.IWelfare7SignDate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Welfare7SignDate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Welfare7SignDate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.Welfare7SignDate;
    }

    /** Properties of a SCWelfaredInfo. */
    interface ISCWelfaredInfo {

        /** SCWelfaredInfo Tlist */
        Tlist?: (welfare.IWelfareTurnplateDate[]|null);

        /** SCWelfaredInfo Slist */
        Slist?: (welfare.IWelfare7SignDate[]|null);

        /** SCWelfaredInfo DrawTurnplate */
        DrawTurnplate?: (number|null);

        /** SCWelfaredInfo SignDay */
        SignDay?: (number|null);

        /** SCWelfaredInfo AddUpSignDay */
        AddUpSignDay?: (number[]|null);

        /** SCWelfaredInfo TurnplateIdx */
        TurnplateIdx?: (number[]|null);

        /** SCWelfaredInfo Switch */
        Switch?: (number|null);
    }

    /** Represents a SCWelfaredInfo. */
    class SCWelfaredInfo implements ISCWelfaredInfo {

        /**
         * Constructs a new SCWelfaredInfo.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ISCWelfaredInfo);

        /** SCWelfaredInfo Tlist. */
        public Tlist: welfare.IWelfareTurnplateDate[];

        /** SCWelfaredInfo Slist. */
        public Slist: welfare.IWelfare7SignDate[];

        /** SCWelfaredInfo DrawTurnplate. */
        public DrawTurnplate: number;

        /** SCWelfaredInfo SignDay. */
        public SignDay: number;

        /** SCWelfaredInfo AddUpSignDay. */
        public AddUpSignDay: number[];

        /** SCWelfaredInfo TurnplateIdx. */
        public TurnplateIdx: number[];

        /** SCWelfaredInfo Switch. */
        public Switch: number;

        /**
         * Encodes the specified SCWelfaredInfo message. Does not implicitly {@link welfare.SCWelfaredInfo.verify|verify} messages.
         * @param m SCWelfaredInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ISCWelfaredInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCWelfaredInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCWelfaredInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.SCWelfaredInfo;
    }

    /** Properties of a BlindBoxData. */
    interface IBlindBoxData {

        /** BlindBoxData Id */
        Id?: (number|null);

        /** BlindBoxData Type */
        Type?: (number|null);

        /** BlindBoxData Name */
        Name?: (string|null);

        /** BlindBoxData Grade */
        Grade?: (number|null);

        /** BlindBoxData Consume */
        Consume?: (number|null);

        /** BlindBoxData price1 */
        price1?: (number|Long|null);

        /** BlindBoxData price2 */
        price2?: (number|Long|null);

        /** BlindBoxData Discount */
        Discount?: (number|null);

        /** BlindBoxData Item_Id */
        Item_Id?: (number|null);
    }

    /** Represents a BlindBoxData. */
    class BlindBoxData implements IBlindBoxData {

        /**
         * Constructs a new BlindBoxData.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.IBlindBoxData);

        /** BlindBoxData Id. */
        public Id: number;

        /** BlindBoxData Type. */
        public Type: number;

        /** BlindBoxData Name. */
        public Name: string;

        /** BlindBoxData Grade. */
        public Grade: number;

        /** BlindBoxData Consume. */
        public Consume: number;

        /** BlindBoxData price1. */
        public price1: (number|Long);

        /** BlindBoxData price2. */
        public price2: (number|Long);

        /** BlindBoxData Discount. */
        public Discount: number;

        /** BlindBoxData Item_Id. */
        public Item_Id: number;

        /**
         * Encodes the specified BlindBoxData message. Does not implicitly {@link welfare.BlindBoxData.verify|verify} messages.
         * @param m BlindBoxData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.IBlindBoxData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlindBoxData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BlindBoxData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.BlindBoxData;
    }

    /** Properties of a CSBlindBoxInfo. */
    interface ICSBlindBoxInfo {

        /** CSBlindBoxInfo Id */
        Id?: (number|null);
    }

    /** Represents a CSBlindBoxInfo. */
    class CSBlindBoxInfo implements ICSBlindBoxInfo {

        /**
         * Constructs a new CSBlindBoxInfo.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ICSBlindBoxInfo);

        /** CSBlindBoxInfo Id. */
        public Id: number;

        /**
         * Encodes the specified CSBlindBoxInfo message. Does not implicitly {@link welfare.CSBlindBoxInfo.verify|verify} messages.
         * @param m CSBlindBoxInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ICSBlindBoxInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSBlindBoxInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSBlindBoxInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.CSBlindBoxInfo;
    }

    /** Properties of a SCBlindBoxInfo. */
    interface ISCBlindBoxInfo {

        /** SCBlindBoxInfo OpRetCode */
        OpRetCode?: (welfare.OpResultCode|null);

        /** SCBlindBoxInfo Date */
        Date?: (welfare.IBlindBoxData|null);

        /** SCBlindBoxInfo MinId */
        MinId?: (number|null);

        /** SCBlindBoxInfo Draw */
        Draw?: (number|null);
    }

    /** Represents a SCBlindBoxInfo. */
    class SCBlindBoxInfo implements ISCBlindBoxInfo {

        /**
         * Constructs a new SCBlindBoxInfo.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ISCBlindBoxInfo);

        /** SCBlindBoxInfo OpRetCode. */
        public OpRetCode: welfare.OpResultCode;

        /** SCBlindBoxInfo Date. */
        public Date?: (welfare.IBlindBoxData|null);

        /** SCBlindBoxInfo MinId. */
        public MinId: number;

        /** SCBlindBoxInfo Draw. */
        public Draw: number;

        /**
         * Encodes the specified SCBlindBoxInfo message. Does not implicitly {@link welfare.SCBlindBoxInfo.verify|verify} messages.
         * @param m SCBlindBoxInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ISCBlindBoxInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCBlindBoxInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCBlindBoxInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.SCBlindBoxInfo;
    }

    /** Properties of a CSGetBlindBox. */
    interface ICSGetBlindBox {

        /** CSGetBlindBox Id */
        Id?: (number|null);
    }

    /** Represents a CSGetBlindBox. */
    class CSGetBlindBox implements ICSGetBlindBox {

        /**
         * Constructs a new CSGetBlindBox.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ICSGetBlindBox);

        /** CSGetBlindBox Id. */
        public Id: number;

        /**
         * Encodes the specified CSGetBlindBox message. Does not implicitly {@link welfare.CSGetBlindBox.verify|verify} messages.
         * @param m CSGetBlindBox message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ICSGetBlindBox, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetBlindBox message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetBlindBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.CSGetBlindBox;
    }

    /** Properties of a SCGetBlindBox. */
    interface ISCGetBlindBox {

        /** SCGetBlindBox OpRetCode */
        OpRetCode?: (welfare.OpResultCode|null);
    }

    /** Represents a SCGetBlindBox. */
    class SCGetBlindBox implements ISCGetBlindBox {

        /**
         * Constructs a new SCGetBlindBox.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ISCGetBlindBox);

        /** SCGetBlindBox OpRetCode. */
        public OpRetCode: welfare.OpResultCode;

        /**
         * Encodes the specified SCGetBlindBox message. Does not implicitly {@link welfare.SCGetBlindBox.verify|verify} messages.
         * @param m SCGetBlindBox message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ISCGetBlindBox, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetBlindBox message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetBlindBox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.SCGetBlindBox;
    }

    /** Properties of a WelfareSpree. */
    interface IWelfareSpree {

        /** WelfareSpree Day */
        Day?: (number|null);

        /** WelfareSpree Item */
        Item?: (welfare.IWelfareDate[]|null);

        /** WelfareSpree VIPEX */
        VIPEX?: (number|null);

        /** WelfareSpree Consume */
        Consume?: (number|null);

        /** WelfareSpree price1 */
        price1?: (number|Long|null);

        /** WelfareSpree price2 */
        price2?: (number|Long|null);

        /** WelfareSpree Discount */
        Discount?: (number|null);
    }

    /** Represents a WelfareSpree. */
    class WelfareSpree implements IWelfareSpree {

        /**
         * Constructs a new WelfareSpree.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.IWelfareSpree);

        /** WelfareSpree Day. */
        public Day: number;

        /** WelfareSpree Item. */
        public Item: welfare.IWelfareDate[];

        /** WelfareSpree VIPEX. */
        public VIPEX: number;

        /** WelfareSpree Consume. */
        public Consume: number;

        /** WelfareSpree price1. */
        public price1: (number|Long);

        /** WelfareSpree price2. */
        public price2: (number|Long);

        /** WelfareSpree Discount. */
        public Discount: number;

        /**
         * Encodes the specified WelfareSpree message. Does not implicitly {@link welfare.WelfareSpree.verify|verify} messages.
         * @param m WelfareSpree message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.IWelfareSpree, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WelfareSpree message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WelfareSpree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.WelfareSpree;
    }

    /** Properties of a CSWelfareFirstPayData. */
    interface ICSWelfareFirstPayData {
    }

    /** Represents a CSWelfareFirstPayData. */
    class CSWelfareFirstPayData implements ICSWelfareFirstPayData {

        /**
         * Constructs a new CSWelfareFirstPayData.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ICSWelfareFirstPayData);

        /**
         * Encodes the specified CSWelfareFirstPayData message. Does not implicitly {@link welfare.CSWelfareFirstPayData.verify|verify} messages.
         * @param m CSWelfareFirstPayData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ICSWelfareFirstPayData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSWelfareFirstPayData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSWelfareFirstPayData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.CSWelfareFirstPayData;
    }

    /** Properties of a SCWelfareFirstPayData. */
    interface ISCWelfareFirstPayData {

        /** SCWelfareFirstPayData OpRetCode */
        OpRetCode?: (welfare.OpResultCode|null);

        /** SCWelfareFirstPayData List */
        List?: (welfare.IWelfareSpree|null);

        /** SCWelfareFirstPayData Switch */
        Switch?: (number|null);

        /** SCWelfareFirstPayData Cycle */
        Cycle?: (number|null);

        /** SCWelfareFirstPayData Draw */
        Draw?: (number|null);
    }

    /** Represents a SCWelfareFirstPayData. */
    class SCWelfareFirstPayData implements ISCWelfareFirstPayData {

        /**
         * Constructs a new SCWelfareFirstPayData.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ISCWelfareFirstPayData);

        /** SCWelfareFirstPayData OpRetCode. */
        public OpRetCode: welfare.OpResultCode;

        /** SCWelfareFirstPayData List. */
        public List?: (welfare.IWelfareSpree|null);

        /** SCWelfareFirstPayData Switch. */
        public Switch: number;

        /** SCWelfareFirstPayData Cycle. */
        public Cycle: number;

        /** SCWelfareFirstPayData Draw. */
        public Draw: number;

        /**
         * Encodes the specified SCWelfareFirstPayData message. Does not implicitly {@link welfare.SCWelfareFirstPayData.verify|verify} messages.
         * @param m SCWelfareFirstPayData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ISCWelfareFirstPayData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCWelfareFirstPayData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCWelfareFirstPayData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.SCWelfareFirstPayData;
    }

    /** Properties of a CSWelfareFirstPay. */
    interface ICSWelfareFirstPay {
    }

    /** Represents a CSWelfareFirstPay. */
    class CSWelfareFirstPay implements ICSWelfareFirstPay {

        /**
         * Constructs a new CSWelfareFirstPay.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ICSWelfareFirstPay);

        /**
         * Encodes the specified CSWelfareFirstPay message. Does not implicitly {@link welfare.CSWelfareFirstPay.verify|verify} messages.
         * @param m CSWelfareFirstPay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ICSWelfareFirstPay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSWelfareFirstPay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSWelfareFirstPay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.CSWelfareFirstPay;
    }

    /** Properties of a SCWelfareFirstPay. */
    interface ISCWelfareFirstPay {

        /** SCWelfareFirstPay OpRetCode */
        OpRetCode?: (welfare.OpResultCode|null);
    }

    /** Represents a SCWelfareFirstPay. */
    class SCWelfareFirstPay implements ISCWelfareFirstPay {

        /**
         * Constructs a new SCWelfareFirstPay.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ISCWelfareFirstPay);

        /** SCWelfareFirstPay OpRetCode. */
        public OpRetCode: welfare.OpResultCode;

        /**
         * Encodes the specified SCWelfareFirstPay message. Does not implicitly {@link welfare.SCWelfareFirstPay.verify|verify} messages.
         * @param m SCWelfareFirstPay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ISCWelfareFirstPay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCWelfareFirstPay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCWelfareFirstPay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.SCWelfareFirstPay;
    }

    /** Properties of a CSWelfareContinuousPayData. */
    interface ICSWelfareContinuousPayData {
    }

    /** Represents a CSWelfareContinuousPayData. */
    class CSWelfareContinuousPayData implements ICSWelfareContinuousPayData {

        /**
         * Constructs a new CSWelfareContinuousPayData.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ICSWelfareContinuousPayData);

        /**
         * Encodes the specified CSWelfareContinuousPayData message. Does not implicitly {@link welfare.CSWelfareContinuousPayData.verify|verify} messages.
         * @param m CSWelfareContinuousPayData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ICSWelfareContinuousPayData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSWelfareContinuousPayData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSWelfareContinuousPayData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.CSWelfareContinuousPayData;
    }

    /** Properties of a SCWelfareContinuousPayData. */
    interface ISCWelfareContinuousPayData {

        /** SCWelfareContinuousPayData OpRetCode */
        OpRetCode?: (welfare.OpResultCode|null);

        /** SCWelfareContinuousPayData List */
        List?: (welfare.IWelfareSpree[]|null);

        /** SCWelfareContinuousPayData Switch */
        Switch?: (number|null);

        /** SCWelfareContinuousPayData Cycle */
        Cycle?: (number|null);

        /** SCWelfareContinuousPayData Draw */
        Draw?: (number|null);

        /** SCWelfareContinuousPayData Day */
        Day?: (number|null);
    }

    /** Represents a SCWelfareContinuousPayData. */
    class SCWelfareContinuousPayData implements ISCWelfareContinuousPayData {

        /**
         * Constructs a new SCWelfareContinuousPayData.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ISCWelfareContinuousPayData);

        /** SCWelfareContinuousPayData OpRetCode. */
        public OpRetCode: welfare.OpResultCode;

        /** SCWelfareContinuousPayData List. */
        public List: welfare.IWelfareSpree[];

        /** SCWelfareContinuousPayData Switch. */
        public Switch: number;

        /** SCWelfareContinuousPayData Cycle. */
        public Cycle: number;

        /** SCWelfareContinuousPayData Draw. */
        public Draw: number;

        /** SCWelfareContinuousPayData Day. */
        public Day: number;

        /**
         * Encodes the specified SCWelfareContinuousPayData message. Does not implicitly {@link welfare.SCWelfareContinuousPayData.verify|verify} messages.
         * @param m SCWelfareContinuousPayData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ISCWelfareContinuousPayData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCWelfareContinuousPayData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCWelfareContinuousPayData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.SCWelfareContinuousPayData;
    }

    /** Properties of a CSWelfareContinuousPay. */
    interface ICSWelfareContinuousPay {
    }

    /** Represents a CSWelfareContinuousPay. */
    class CSWelfareContinuousPay implements ICSWelfareContinuousPay {

        /**
         * Constructs a new CSWelfareContinuousPay.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ICSWelfareContinuousPay);

        /**
         * Encodes the specified CSWelfareContinuousPay message. Does not implicitly {@link welfare.CSWelfareContinuousPay.verify|verify} messages.
         * @param m CSWelfareContinuousPay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ICSWelfareContinuousPay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSWelfareContinuousPay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSWelfareContinuousPay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.CSWelfareContinuousPay;
    }

    /** Properties of a SCWelfareContinuousPay. */
    interface ISCWelfareContinuousPay {

        /** SCWelfareContinuousPay OpRetCode */
        OpRetCode?: (welfare.OpResultCode|null);
    }

    /** Represents a SCWelfareContinuousPay. */
    class SCWelfareContinuousPay implements ISCWelfareContinuousPay {

        /**
         * Constructs a new SCWelfareContinuousPay.
         * @param [p] Properties to set
         */
        constructor(p?: welfare.ISCWelfareContinuousPay);

        /** SCWelfareContinuousPay OpRetCode. */
        public OpRetCode: welfare.OpResultCode;

        /**
         * Encodes the specified SCWelfareContinuousPay message. Does not implicitly {@link welfare.SCWelfareContinuousPay.verify|verify} messages.
         * @param m SCWelfareContinuousPay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: welfare.ISCWelfareContinuousPay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCWelfareContinuousPay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCWelfareContinuousPay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): welfare.SCWelfareContinuousPay;
    }
}
