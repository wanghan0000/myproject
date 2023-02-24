// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace qpapi. */
export namespace qpapi {

    /** TagCode enum. */
    enum TagCode {
        UNKNOWN = 0,
        SUCCESS = 1,
        FAILED = 2,
        SIGN_ERROR = 3,
        PROTO_DATA_ERROR = 4
    }

    /** Properties of a ASLogin. */
    interface IASLogin {

        /** ASLogin MerchantTag */
        MerchantTag?: (string|null);

        /** ASLogin UserName */
        UserName?: (string|null);

        /** ASLogin Ts */
        Ts?: (number|Long|null);

        /** ASLogin Sign */
        Sign?: (string|null);
    }

    /** Represents a ASLogin. */
    class ASLogin implements IASLogin {

        /**
         * Constructs a new ASLogin.
         * @param [p] Properties to set
         */
        constructor(p?: qpapi.IASLogin);

        /** ASLogin MerchantTag. */
        public MerchantTag: string;

        /** ASLogin UserName. */
        public UserName: string;

        /** ASLogin Ts. */
        public Ts: (number|Long);

        /** ASLogin Sign. */
        public Sign: string;

        /**
         * Encodes the specified ASLogin message. Does not implicitly {@link qpapi.ASLogin.verify|verify} messages.
         * @param m ASLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: qpapi.IASLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ASLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ASLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): qpapi.ASLogin;
    }

    /** Properties of a SALogin. */
    interface ISALogin {

        /** SALogin Tag */
        Tag?: (qpapi.TagCode|null);

        /** SALogin Msg */
        Msg?: (string|null);

        /** SALogin Token */
        Token?: (string|null);

        /** SALogin Snid */
        Snid?: (number|null);
    }

    /** Represents a SALogin. */
    class SALogin implements ISALogin {

        /**
         * Constructs a new SALogin.
         * @param [p] Properties to set
         */
        constructor(p?: qpapi.ISALogin);

        /** SALogin Tag. */
        public Tag: qpapi.TagCode;

        /** SALogin Msg. */
        public Msg: string;

        /** SALogin Token. */
        public Token: string;

        /** SALogin Snid. */
        public Snid: number;

        /**
         * Encodes the specified SALogin message. Does not implicitly {@link qpapi.SALogin.verify|verify} messages.
         * @param m SALogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: qpapi.ISALogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SALogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SALogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): qpapi.SALogin;
    }

    /** Properties of a ASAddCoinById. */
    interface IASAddCoinById {

        /** ASAddCoinById Username */
        Username?: (string|null);

        /** ASAddCoinById Gold */
        Gold?: (number|Long|null);

        /** ASAddCoinById BillNo */
        BillNo?: (number|Long|null);

        /** ASAddCoinById MerchantTag */
        MerchantTag?: (string|null);

        /** ASAddCoinById Ts */
        Ts?: (number|Long|null);

        /** ASAddCoinById Sign */
        Sign?: (string|null);
    }

    /** Represents a ASAddCoinById. */
    class ASAddCoinById implements IASAddCoinById {

        /**
         * Constructs a new ASAddCoinById.
         * @param [p] Properties to set
         */
        constructor(p?: qpapi.IASAddCoinById);

        /** ASAddCoinById Username. */
        public Username: string;

        /** ASAddCoinById Gold. */
        public Gold: (number|Long);

        /** ASAddCoinById BillNo. */
        public BillNo: (number|Long);

        /** ASAddCoinById MerchantTag. */
        public MerchantTag: string;

        /** ASAddCoinById Ts. */
        public Ts: (number|Long);

        /** ASAddCoinById Sign. */
        public Sign: string;

        /**
         * Encodes the specified ASAddCoinById message. Does not implicitly {@link qpapi.ASAddCoinById.verify|verify} messages.
         * @param m ASAddCoinById message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: qpapi.IASAddCoinById, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ASAddCoinById message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ASAddCoinById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): qpapi.ASAddCoinById;
    }

    /** Properties of a SAAddCoinById. */
    interface ISAAddCoinById {

        /** SAAddCoinById Tag */
        Tag?: (qpapi.TagCode|null);

        /** SAAddCoinById Msg */
        Msg?: (string|null);
    }

    /** Represents a SAAddCoinById. */
    class SAAddCoinById implements ISAAddCoinById {

        /**
         * Constructs a new SAAddCoinById.
         * @param [p] Properties to set
         */
        constructor(p?: qpapi.ISAAddCoinById);

        /** SAAddCoinById Tag. */
        public Tag: qpapi.TagCode;

        /** SAAddCoinById Msg. */
        public Msg: string;

        /**
         * Encodes the specified SAAddCoinById message. Does not implicitly {@link qpapi.SAAddCoinById.verify|verify} messages.
         * @param m SAAddCoinById message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: qpapi.ISAAddCoinById, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SAAddCoinById message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SAAddCoinById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): qpapi.SAAddCoinById;
    }

    /** Properties of a PlayerCoinData. */
    interface IPlayerCoinData {

        /** PlayerCoinData Username */
        Username?: (string|null);

        /** PlayerCoinData Gold */
        Gold?: (number|Long|null);

        /** PlayerCoinData Bank */
        Bank?: (number|Long|null);
    }

    /** Represents a PlayerCoinData. */
    class PlayerCoinData implements IPlayerCoinData {

        /**
         * Constructs a new PlayerCoinData.
         * @param [p] Properties to set
         */
        constructor(p?: qpapi.IPlayerCoinData);

        /** PlayerCoinData Username. */
        public Username: string;

        /** PlayerCoinData Gold. */
        public Gold: (number|Long);

        /** PlayerCoinData Bank. */
        public Bank: (number|Long);

        /**
         * Encodes the specified PlayerCoinData message. Does not implicitly {@link qpapi.PlayerCoinData.verify|verify} messages.
         * @param m PlayerCoinData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: qpapi.IPlayerCoinData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerCoinData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerCoinData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): qpapi.PlayerCoinData;
    }

    /** Properties of a ASMemberGold. */
    interface IASMemberGold {

        /** ASMemberGold Username */
        Username?: (string|null);

        /** ASMemberGold MerchantTag */
        MerchantTag?: (string|null);

        /** ASMemberGold Ts */
        Ts?: (number|Long|null);

        /** ASMemberGold Sign */
        Sign?: (string|null);
    }

    /** Represents a ASMemberGold. */
    class ASMemberGold implements IASMemberGold {

        /**
         * Constructs a new ASMemberGold.
         * @param [p] Properties to set
         */
        constructor(p?: qpapi.IASMemberGold);

        /** ASMemberGold Username. */
        public Username: string;

        /** ASMemberGold MerchantTag. */
        public MerchantTag: string;

        /** ASMemberGold Ts. */
        public Ts: (number|Long);

        /** ASMemberGold Sign. */
        public Sign: string;

        /**
         * Encodes the specified ASMemberGold message. Does not implicitly {@link qpapi.ASMemberGold.verify|verify} messages.
         * @param m ASMemberGold message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: qpapi.IASMemberGold, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ASMemberGold message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ASMemberGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): qpapi.ASMemberGold;
    }

    /** Properties of a SAMemberGold. */
    interface ISAMemberGold {

        /** SAMemberGold Tag */
        Tag?: (qpapi.TagCode|null);

        /** SAMemberGold Msg */
        Msg?: (string|null);

        /** SAMemberGold Data */
        Data?: (qpapi.IPlayerCoinData|null);
    }

    /** Represents a SAMemberGold. */
    class SAMemberGold implements ISAMemberGold {

        /**
         * Constructs a new SAMemberGold.
         * @param [p] Properties to set
         */
        constructor(p?: qpapi.ISAMemberGold);

        /** SAMemberGold Tag. */
        public Tag: qpapi.TagCode;

        /** SAMemberGold Msg. */
        public Msg: string;

        /** SAMemberGold Data. */
        public Data?: (qpapi.IPlayerCoinData|null);

        /**
         * Encodes the specified SAMemberGold message. Does not implicitly {@link qpapi.SAMemberGold.verify|verify} messages.
         * @param m SAMemberGold message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: qpapi.ISAMemberGold, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SAMemberGold message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SAMemberGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): qpapi.SAMemberGold;
    }

    /** Properties of a GameHistoryInfo. */
    interface IGameHistoryInfo {

        /** GameHistoryInfo GameNumber */
        GameNumber?: (string|null);

        /** GameHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** GameHistoryInfo Multiple */
        Multiple?: (number|Long|null);

        /** GameHistoryInfo Hash */
        Hash?: (string|null);
    }

    /** Represents a GameHistoryInfo. */
    class GameHistoryInfo implements IGameHistoryInfo {

        /**
         * Constructs a new GameHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: qpapi.IGameHistoryInfo);

        /** GameHistoryInfo GameNumber. */
        public GameNumber: string;

        /** GameHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** GameHistoryInfo Multiple. */
        public Multiple: (number|Long);

        /** GameHistoryInfo Hash. */
        public Hash: string;

        /**
         * Encodes the specified GameHistoryInfo message. Does not implicitly {@link qpapi.GameHistoryInfo.verify|verify} messages.
         * @param m GameHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: qpapi.IGameHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): qpapi.GameHistoryInfo;
    }

    /** Properties of a PlayerHistoryInfo. */
    interface IPlayerHistoryInfo {

        /** PlayerHistoryInfo SpinID */
        SpinID?: (string|null);

        /** PlayerHistoryInfo CreatedTime */
        CreatedTime?: (number|Long|null);

        /** PlayerHistoryInfo TotalBetValue */
        TotalBetValue?: (number|Long|null);

        /** PlayerHistoryInfo TotalPriceValue */
        TotalPriceValue?: (number|Long|null);

        /** PlayerHistoryInfo IsFree */
        IsFree?: (boolean|null);

        /** PlayerHistoryInfo TotalBonusValue */
        TotalBonusValue?: (number|Long|null);

        /** PlayerHistoryInfo Multiple */
        Multiple?: (number|Long|null);

        /** PlayerHistoryInfo Logid */
        Logid?: (string|null);

        /** PlayerHistoryInfo Gameid */
        Gameid?: (number|null);

        /** PlayerHistoryInfo UserName */
        UserName?: (string|null);
    }

    /** Represents a PlayerHistoryInfo. */
    class PlayerHistoryInfo implements IPlayerHistoryInfo {

        /**
         * Constructs a new PlayerHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: qpapi.IPlayerHistoryInfo);

        /** PlayerHistoryInfo SpinID. */
        public SpinID: string;

        /** PlayerHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** PlayerHistoryInfo TotalBetValue. */
        public TotalBetValue: (number|Long);

        /** PlayerHistoryInfo TotalPriceValue. */
        public TotalPriceValue: (number|Long);

        /** PlayerHistoryInfo IsFree. */
        public IsFree: boolean;

        /** PlayerHistoryInfo TotalBonusValue. */
        public TotalBonusValue: (number|Long);

        /** PlayerHistoryInfo Multiple. */
        public Multiple: (number|Long);

        /** PlayerHistoryInfo Logid. */
        public Logid: string;

        /** PlayerHistoryInfo Gameid. */
        public Gameid: number;

        /** PlayerHistoryInfo UserName. */
        public UserName: string;

        /**
         * Encodes the specified PlayerHistoryInfo message. Does not implicitly {@link qpapi.PlayerHistoryInfo.verify|verify} messages.
         * @param m PlayerHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: qpapi.IPlayerHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): qpapi.PlayerHistoryInfo;
    }

    /** Properties of a SAPlayerHistory. */
    interface ISAPlayerHistory {

        /** SAPlayerHistory Tag */
        Tag?: (qpapi.TagCode|null);

        /** SAPlayerHistory Msg */
        Msg?: (string|null);

        /** SAPlayerHistory PageNo */
        PageNo?: (number|null);

        /** SAPlayerHistory PageSize */
        PageSize?: (number|null);

        /** SAPlayerHistory PageSum */
        PageSum?: (number|null);

        /** SAPlayerHistory PlayerHistory */
        PlayerHistory?: (qpapi.IPlayerHistoryInfo[]|null);

        /** SAPlayerHistory GameHistory */
        GameHistory?: (qpapi.IGameHistoryInfo[]|null);
    }

    /** Represents a SAPlayerHistory. */
    class SAPlayerHistory implements ISAPlayerHistory {

        /**
         * Constructs a new SAPlayerHistory.
         * @param [p] Properties to set
         */
        constructor(p?: qpapi.ISAPlayerHistory);

        /** SAPlayerHistory Tag. */
        public Tag: qpapi.TagCode;

        /** SAPlayerHistory Msg. */
        public Msg: string;

        /** SAPlayerHistory PageNo. */
        public PageNo: number;

        /** SAPlayerHistory PageSize. */
        public PageSize: number;

        /** SAPlayerHistory PageSum. */
        public PageSum: number;

        /** SAPlayerHistory PlayerHistory. */
        public PlayerHistory: qpapi.IPlayerHistoryInfo[];

        /** SAPlayerHistory GameHistory. */
        public GameHistory: qpapi.IGameHistoryInfo[];

        /**
         * Encodes the specified SAPlayerHistory message. Does not implicitly {@link qpapi.SAPlayerHistory.verify|verify} messages.
         * @param m SAPlayerHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: qpapi.ISAPlayerHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SAPlayerHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SAPlayerHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): qpapi.SAPlayerHistory;
    }

    /** Properties of a ASPlayerHistory. */
    interface IASPlayerHistory {

        /** ASPlayerHistory Username */
        Username?: (string|null);

        /** ASPlayerHistory MerchantTag */
        MerchantTag?: (string|null);

        /** ASPlayerHistory GameHistoryModel */
        GameHistoryModel?: (number|null);

        /** ASPlayerHistory StartTime */
        StartTime?: (number|Long|null);

        /** ASPlayerHistory EndTime */
        EndTime?: (number|Long|null);

        /** ASPlayerHistory PageNo */
        PageNo?: (number|null);

        /** ASPlayerHistory PageSize */
        PageSize?: (number|null);

        /** ASPlayerHistory Ts */
        Ts?: (number|Long|null);

        /** ASPlayerHistory Sign */
        Sign?: (string|null);
    }

    /** Represents a ASPlayerHistory. */
    class ASPlayerHistory implements IASPlayerHistory {

        /**
         * Constructs a new ASPlayerHistory.
         * @param [p] Properties to set
         */
        constructor(p?: qpapi.IASPlayerHistory);

        /** ASPlayerHistory Username. */
        public Username: string;

        /** ASPlayerHistory MerchantTag. */
        public MerchantTag: string;

        /** ASPlayerHistory GameHistoryModel. */
        public GameHistoryModel: number;

        /** ASPlayerHistory StartTime. */
        public StartTime: (number|Long);

        /** ASPlayerHistory EndTime. */
        public EndTime: (number|Long);

        /** ASPlayerHistory PageNo. */
        public PageNo: number;

        /** ASPlayerHistory PageSize. */
        public PageSize: number;

        /** ASPlayerHistory Ts. */
        public Ts: (number|Long);

        /** ASPlayerHistory Sign. */
        public Sign: string;

        /**
         * Encodes the specified ASPlayerHistory message. Does not implicitly {@link qpapi.ASPlayerHistory.verify|verify} messages.
         * @param m ASPlayerHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: qpapi.IASPlayerHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ASPlayerHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ASPlayerHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): qpapi.ASPlayerHistory;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [p] Properties to set
             */
            constructor(p?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param m Timestamp message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: google.protobuf.ITimestamp, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): google.protobuf.Timestamp;
        }
    }
}
