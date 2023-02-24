// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace telegramapi. */
export namespace telegramapi {

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

        /** ASLogin TelegramId */
        TelegramId?: (string|null);

        /** ASLogin PlatformTag */
        PlatformTag?: (string|null);

        /** ASLogin Username */
        Username?: (string|null);

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
        constructor(p?: telegramapi.IASLogin);

        /** ASLogin TelegramId. */
        public TelegramId: string;

        /** ASLogin PlatformTag. */
        public PlatformTag: string;

        /** ASLogin Username. */
        public Username: string;

        /** ASLogin Ts. */
        public Ts: (number|Long);

        /** ASLogin Sign. */
        public Sign: string;

        /**
         * Encodes the specified ASLogin message. Does not implicitly {@link telegramapi.ASLogin.verify|verify} messages.
         * @param m ASLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.IASLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ASLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ASLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.ASLogin;
    }

    /** Properties of a SALogin. */
    interface ISALogin {

        /** SALogin Tag */
        Tag?: (telegramapi.TagCode|null);

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
        constructor(p?: telegramapi.ISALogin);

        /** SALogin Tag. */
        public Tag: telegramapi.TagCode;

        /** SALogin Msg. */
        public Msg: string;

        /** SALogin Token. */
        public Token: string;

        /** SALogin Snid. */
        public Snid: number;

        /**
         * Encodes the specified SALogin message. Does not implicitly {@link telegramapi.SALogin.verify|verify} messages.
         * @param m SALogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.ISALogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SALogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SALogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.SALogin;
    }

    /** Properties of a ASAddCoinById. */
    interface IASAddCoinById {

        /** ASAddCoinById ID */
        ID?: (number|null);

        /** ASAddCoinById Gold */
        Gold?: (number|Long|null);

        /** ASAddCoinById GoldEx */
        GoldEx?: (number|Long|null);

        /** ASAddCoinById Oper */
        Oper?: (string|null);

        /** ASAddCoinById Desc */
        Desc?: (string|null);

        /** ASAddCoinById BillNo */
        BillNo?: (number|null);

        /** ASAddCoinById Platform */
        Platform?: (string|null);

        /** ASAddCoinById LogType */
        LogType?: (number|null);

        /** ASAddCoinById IsAccTodayRecharge */
        IsAccTodayRecharge?: (boolean|null);

        /** ASAddCoinById NeedFlowRate */
        NeedFlowRate?: (number|null);

        /** ASAddCoinById NeedGiveFlowRate */
        NeedGiveFlowRate?: (number|null);
    }

    /** Represents a ASAddCoinById. */
    class ASAddCoinById implements IASAddCoinById {

        /**
         * Constructs a new ASAddCoinById.
         * @param [p] Properties to set
         */
        constructor(p?: telegramapi.IASAddCoinById);

        /** ASAddCoinById ID. */
        public ID: number;

        /** ASAddCoinById Gold. */
        public Gold: (number|Long);

        /** ASAddCoinById GoldEx. */
        public GoldEx: (number|Long);

        /** ASAddCoinById Oper. */
        public Oper: string;

        /** ASAddCoinById Desc. */
        public Desc: string;

        /** ASAddCoinById BillNo. */
        public BillNo: number;

        /** ASAddCoinById Platform. */
        public Platform: string;

        /** ASAddCoinById LogType. */
        public LogType: number;

        /** ASAddCoinById IsAccTodayRecharge. */
        public IsAccTodayRecharge: boolean;

        /** ASAddCoinById NeedFlowRate. */
        public NeedFlowRate: number;

        /** ASAddCoinById NeedGiveFlowRate. */
        public NeedGiveFlowRate: number;

        /**
         * Encodes the specified ASAddCoinById message. Does not implicitly {@link telegramapi.ASAddCoinById.verify|verify} messages.
         * @param m ASAddCoinById message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.IASAddCoinById, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ASAddCoinById message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ASAddCoinById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.ASAddCoinById;
    }

    /** Properties of a SAAddCoinById. */
    interface ISAAddCoinById {

        /** SAAddCoinById Tag */
        Tag?: (telegramapi.TagCode|null);

        /** SAAddCoinById Msg */
        Msg?: (string|null);
    }

    /** Represents a SAAddCoinById. */
    class SAAddCoinById implements ISAAddCoinById {

        /**
         * Constructs a new SAAddCoinById.
         * @param [p] Properties to set
         */
        constructor(p?: telegramapi.ISAAddCoinById);

        /** SAAddCoinById Tag. */
        public Tag: telegramapi.TagCode;

        /** SAAddCoinById Msg. */
        public Msg: string;

        /**
         * Encodes the specified SAAddCoinById message. Does not implicitly {@link telegramapi.SAAddCoinById.verify|verify} messages.
         * @param m SAAddCoinById message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.ISAAddCoinById, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SAAddCoinById message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SAAddCoinById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.SAAddCoinById;
    }

    /** Properties of a PlayerCoinData. */
    interface IPlayerCoinData {

        /** PlayerCoinData Id */
        Id?: (number|null);

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
        constructor(p?: telegramapi.IPlayerCoinData);

        /** PlayerCoinData Id. */
        public Id: number;

        /** PlayerCoinData Gold. */
        public Gold: (number|Long);

        /** PlayerCoinData Bank. */
        public Bank: (number|Long);

        /**
         * Encodes the specified PlayerCoinData message. Does not implicitly {@link telegramapi.PlayerCoinData.verify|verify} messages.
         * @param m PlayerCoinData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.IPlayerCoinData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerCoinData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerCoinData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.PlayerCoinData;
    }

    /** Properties of a ASMemberGold. */
    interface IASMemberGold {

        /** ASMemberGold Snid */
        Snid?: (number|null);

        /** ASMemberGold Platform */
        Platform?: (string|null);
    }

    /** Represents a ASMemberGold. */
    class ASMemberGold implements IASMemberGold {

        /**
         * Constructs a new ASMemberGold.
         * @param [p] Properties to set
         */
        constructor(p?: telegramapi.IASMemberGold);

        /** ASMemberGold Snid. */
        public Snid: number;

        /** ASMemberGold Platform. */
        public Platform: string;

        /**
         * Encodes the specified ASMemberGold message. Does not implicitly {@link telegramapi.ASMemberGold.verify|verify} messages.
         * @param m ASMemberGold message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.IASMemberGold, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ASMemberGold message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ASMemberGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.ASMemberGold;
    }

    /** Properties of a SAMemberGold. */
    interface ISAMemberGold {

        /** SAMemberGold Tag */
        Tag?: (telegramapi.TagCode|null);

        /** SAMemberGold Msg */
        Msg?: (string|null);

        /** SAMemberGold Data */
        Data?: (telegramapi.IPlayerCoinData|null);
    }

    /** Represents a SAMemberGold. */
    class SAMemberGold implements ISAMemberGold {

        /**
         * Constructs a new SAMemberGold.
         * @param [p] Properties to set
         */
        constructor(p?: telegramapi.ISAMemberGold);

        /** SAMemberGold Tag. */
        public Tag: telegramapi.TagCode;

        /** SAMemberGold Msg. */
        public Msg: string;

        /** SAMemberGold Data. */
        public Data?: (telegramapi.IPlayerCoinData|null);

        /**
         * Encodes the specified SAMemberGold message. Does not implicitly {@link telegramapi.SAMemberGold.verify|verify} messages.
         * @param m SAMemberGold message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.ISAMemberGold, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SAMemberGold message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SAMemberGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.SAMemberGold;
    }

    /** Properties of a ASCrachHash. */
    interface IASCrachHash {

        /** ASCrachHash Hash */
        Hash?: (string|null);

        /** ASCrachHash Wheel */
        Wheel?: (number|null);
    }

    /** Represents a ASCrachHash. */
    class ASCrachHash implements IASCrachHash {

        /**
         * Constructs a new ASCrachHash.
         * @param [p] Properties to set
         */
        constructor(p?: telegramapi.IASCrachHash);

        /** ASCrachHash Hash. */
        public Hash: string;

        /** ASCrachHash Wheel. */
        public Wheel: number;

        /**
         * Encodes the specified ASCrachHash message. Does not implicitly {@link telegramapi.ASCrachHash.verify|verify} messages.
         * @param m ASCrachHash message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.IASCrachHash, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ASCrachHash message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ASCrachHash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.ASCrachHash;
    }

    /** Properties of a SACrachHash. */
    interface ISACrachHash {

        /** SACrachHash Tag */
        Tag?: (telegramapi.TagCode|null);

        /** SACrachHash Msg */
        Msg?: (string|null);

        /** SACrachHash Multiple */
        Multiple?: (number|null);
    }

    /** Represents a SACrachHash. */
    class SACrachHash implements ISACrachHash {

        /**
         * Constructs a new SACrachHash.
         * @param [p] Properties to set
         */
        constructor(p?: telegramapi.ISACrachHash);

        /** SACrachHash Tag. */
        public Tag: telegramapi.TagCode;

        /** SACrachHash Msg. */
        public Msg: string;

        /** SACrachHash Multiple. */
        public Multiple: number;

        /**
         * Encodes the specified SACrachHash message. Does not implicitly {@link telegramapi.SACrachHash.verify|verify} messages.
         * @param m SACrachHash message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.ISACrachHash, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SACrachHash message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SACrachHash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.SACrachHash;
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
        constructor(p?: telegramapi.IGameHistoryInfo);

        /** GameHistoryInfo GameNumber. */
        public GameNumber: string;

        /** GameHistoryInfo CreatedTime. */
        public CreatedTime: (number|Long);

        /** GameHistoryInfo Multiple. */
        public Multiple: (number|Long);

        /** GameHistoryInfo Hash. */
        public Hash: string;

        /**
         * Encodes the specified GameHistoryInfo message. Does not implicitly {@link telegramapi.GameHistoryInfo.verify|verify} messages.
         * @param m GameHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.IGameHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.GameHistoryInfo;
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
    }

    /** Represents a PlayerHistoryInfo. */
    class PlayerHistoryInfo implements IPlayerHistoryInfo {

        /**
         * Constructs a new PlayerHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: telegramapi.IPlayerHistoryInfo);

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

        /**
         * Encodes the specified PlayerHistoryInfo message. Does not implicitly {@link telegramapi.PlayerHistoryInfo.verify|verify} messages.
         * @param m PlayerHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.IPlayerHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.PlayerHistoryInfo;
    }

    /** Properties of a SAPlayerHistory. */
    interface ISAPlayerHistory {

        /** SAPlayerHistory Tag */
        Tag?: (telegramapi.TagCode|null);

        /** SAPlayerHistory Msg */
        Msg?: (string|null);

        /** SAPlayerHistory PlayerHistory */
        PlayerHistory?: (telegramapi.IPlayerHistoryInfo[]|null);

        /** SAPlayerHistory GameHistory */
        GameHistory?: (telegramapi.IGameHistoryInfo[]|null);
    }

    /** Represents a SAPlayerHistory. */
    class SAPlayerHistory implements ISAPlayerHistory {

        /**
         * Constructs a new SAPlayerHistory.
         * @param [p] Properties to set
         */
        constructor(p?: telegramapi.ISAPlayerHistory);

        /** SAPlayerHistory Tag. */
        public Tag: telegramapi.TagCode;

        /** SAPlayerHistory Msg. */
        public Msg: string;

        /** SAPlayerHistory PlayerHistory. */
        public PlayerHistory: telegramapi.IPlayerHistoryInfo[];

        /** SAPlayerHistory GameHistory. */
        public GameHistory: telegramapi.IGameHistoryInfo[];

        /**
         * Encodes the specified SAPlayerHistory message. Does not implicitly {@link telegramapi.SAPlayerHistory.verify|verify} messages.
         * @param m SAPlayerHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.ISAPlayerHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SAPlayerHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SAPlayerHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.SAPlayerHistory;
    }

    /** Properties of a ASPlayerHistory. */
    interface IASPlayerHistory {

        /** ASPlayerHistory Snid */
        Snid?: (number|null);

        /** ASPlayerHistory Platform */
        Platform?: (string|null);

        /** ASPlayerHistory GameId */
        GameId?: (number|null);

        /** ASPlayerHistory GameHistoryModel */
        GameHistoryModel?: (number|null);
    }

    /** Represents a ASPlayerHistory. */
    class ASPlayerHistory implements IASPlayerHistory {

        /**
         * Constructs a new ASPlayerHistory.
         * @param [p] Properties to set
         */
        constructor(p?: telegramapi.IASPlayerHistory);

        /** ASPlayerHistory Snid. */
        public Snid: number;

        /** ASPlayerHistory Platform. */
        public Platform: string;

        /** ASPlayerHistory GameId. */
        public GameId: number;

        /** ASPlayerHistory GameHistoryModel. */
        public GameHistoryModel: number;

        /**
         * Encodes the specified ASPlayerHistory message. Does not implicitly {@link telegramapi.ASPlayerHistory.verify|verify} messages.
         * @param m ASPlayerHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: telegramapi.IASPlayerHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ASPlayerHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ASPlayerHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): telegramapi.ASPlayerHistory;
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
