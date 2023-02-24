// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace chat. */
export namespace chat {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_Chat_NotFriend = 1001,
        OPRC_Chat_IsShield = 1002,
        OPRC_Chat_ReShield = 1003,
        OPRC_Chat_ReUnShield = 1004,
        OPRC_Chat_Shield = 1005
    }

    /** ChatPacketID enum. */
    enum ChatPacketID {
        PACKET_CHATPACKET_ZERO = 0,
        PACKET_CSChatMsg = 2720,
        PACKET_SCChatMsg = 2721,
        PACKET_CSGetChatLog = 2722,
        PACKET_SCGetChatLog = 2723,
        PACKET_CSReadChatMsg = 2724,
        PACKET_CSShieldMsg = 2725,
        PACKET_SCShieldMsg = 2726
    }

    /** Properties of a CSChatMsg. */
    interface ICSChatMsg {

        /** CSChatMsg Msg2Snid */
        Msg2Snid?: (number|null);

        /** CSChatMsg Name */
        Name?: (string|null);

        /** CSChatMsg Head */
        Head?: (number|null);

        /** CSChatMsg Content */
        Content?: (string|null);
    }

    /** Represents a CSChatMsg. */
    class CSChatMsg implements ICSChatMsg {

        /**
         * Constructs a new CSChatMsg.
         * @param [p] Properties to set
         */
        constructor(p?: chat.ICSChatMsg);

        /** CSChatMsg Msg2Snid. */
        public Msg2Snid: number;

        /** CSChatMsg Name. */
        public Name: string;

        /** CSChatMsg Head. */
        public Head: number;

        /** CSChatMsg Content. */
        public Content: string;

        /**
         * Encodes the specified CSChatMsg message. Does not implicitly {@link chat.CSChatMsg.verify|verify} messages.
         * @param m CSChatMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: chat.ICSChatMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSChatMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): chat.CSChatMsg;
    }

    /** Properties of a SCChatMsg. */
    interface ISCChatMsg {

        /** SCChatMsg Msg2Snid */
        Msg2Snid?: (number|null);

        /** SCChatMsg Snid */
        Snid?: (number|null);

        /** SCChatMsg Name */
        Name?: (string|null);

        /** SCChatMsg Head */
        Head?: (number|null);

        /** SCChatMsg Content */
        Content?: (string|null);

        /** SCChatMsg Ts */
        Ts?: (number|Long|null);

        /** SCChatMsg OpRetCode */
        OpRetCode?: (chat.OpResultCode|null);
    }

    /** Represents a SCChatMsg. */
    class SCChatMsg implements ISCChatMsg {

        /**
         * Constructs a new SCChatMsg.
         * @param [p] Properties to set
         */
        constructor(p?: chat.ISCChatMsg);

        /** SCChatMsg Msg2Snid. */
        public Msg2Snid: number;

        /** SCChatMsg Snid. */
        public Snid: number;

        /** SCChatMsg Name. */
        public Name: string;

        /** SCChatMsg Head. */
        public Head: number;

        /** SCChatMsg Content. */
        public Content: string;

        /** SCChatMsg Ts. */
        public Ts: (number|Long);

        /** SCChatMsg OpRetCode. */
        public OpRetCode: chat.OpResultCode;

        /**
         * Encodes the specified SCChatMsg message. Does not implicitly {@link chat.SCChatMsg.verify|verify} messages.
         * @param m SCChatMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: chat.ISCChatMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCChatMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): chat.SCChatMsg;
    }

    /** Properties of a CSGetChatLog. */
    interface ICSGetChatLog {

        /** CSGetChatLog Snid */
        Snid?: (number|null);
    }

    /** Represents a CSGetChatLog. */
    class CSGetChatLog implements ICSGetChatLog {

        /**
         * Constructs a new CSGetChatLog.
         * @param [p] Properties to set
         */
        constructor(p?: chat.ICSGetChatLog);

        /** CSGetChatLog Snid. */
        public Snid: number;

        /**
         * Encodes the specified CSGetChatLog message. Does not implicitly {@link chat.CSGetChatLog.verify|verify} messages.
         * @param m CSGetChatLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: chat.ICSGetChatLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetChatLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): chat.CSGetChatLog;
    }

    /** Properties of a ChatLog. */
    interface IChatLog {

        /** ChatLog SrcSnId */
        SrcSnId?: (number|null);

        /** ChatLog SrcName */
        SrcName?: (string|null);

        /** ChatLog SrcHead */
        SrcHead?: (number|null);

        /** ChatLog ToSnId */
        ToSnId?: (number|null);

        /** ChatLog ToName */
        ToName?: (string|null);

        /** ChatLog ToHead */
        ToHead?: (number|null);

        /** ChatLog Content */
        Content?: (string|null);

        /** ChatLog Ts */
        Ts?: (number|Long|null);
    }

    /** Represents a ChatLog. */
    class ChatLog implements IChatLog {

        /**
         * Constructs a new ChatLog.
         * @param [p] Properties to set
         */
        constructor(p?: chat.IChatLog);

        /** ChatLog SrcSnId. */
        public SrcSnId: number;

        /** ChatLog SrcName. */
        public SrcName: string;

        /** ChatLog SrcHead. */
        public SrcHead: number;

        /** ChatLog ToSnId. */
        public ToSnId: number;

        /** ChatLog ToName. */
        public ToName: string;

        /** ChatLog ToHead. */
        public ToHead: number;

        /** ChatLog Content. */
        public Content: string;

        /** ChatLog Ts. */
        public Ts: (number|Long);

        /**
         * Encodes the specified ChatLog message. Does not implicitly {@link chat.ChatLog.verify|verify} messages.
         * @param m ChatLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: chat.IChatLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): chat.ChatLog;
    }

    /** Properties of a SCGetChatLog. */
    interface ISCGetChatLog {

        /** SCGetChatLog Snid */
        Snid?: (number|null);

        /** SCGetChatLog ChatLogs */
        ChatLogs?: (chat.IChatLog[]|null);
    }

    /** Represents a SCGetChatLog. */
    class SCGetChatLog implements ISCGetChatLog {

        /**
         * Constructs a new SCGetChatLog.
         * @param [p] Properties to set
         */
        constructor(p?: chat.ISCGetChatLog);

        /** SCGetChatLog Snid. */
        public Snid: number;

        /** SCGetChatLog ChatLogs. */
        public ChatLogs: chat.IChatLog[];

        /**
         * Encodes the specified SCGetChatLog message. Does not implicitly {@link chat.SCGetChatLog.verify|verify} messages.
         * @param m SCGetChatLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: chat.ISCGetChatLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetChatLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): chat.SCGetChatLog;
    }

    /** Properties of a CSReadChatMsg. */
    interface ICSReadChatMsg {

        /** CSReadChatMsg Snid */
        Snid?: (number|null);
    }

    /** Represents a CSReadChatMsg. */
    class CSReadChatMsg implements ICSReadChatMsg {

        /**
         * Constructs a new CSReadChatMsg.
         * @param [p] Properties to set
         */
        constructor(p?: chat.ICSReadChatMsg);

        /** CSReadChatMsg Snid. */
        public Snid: number;

        /**
         * Encodes the specified CSReadChatMsg message. Does not implicitly {@link chat.CSReadChatMsg.verify|verify} messages.
         * @param m CSReadChatMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: chat.ICSReadChatMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSReadChatMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSReadChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): chat.CSReadChatMsg;
    }

    /** Properties of a CSShieldMsg. */
    interface ICSShieldMsg {

        /** CSShieldMsg ShieldSnid */
        ShieldSnid?: (number|null);

        /** CSShieldMsg ShieldHead */
        ShieldHead?: (number|null);

        /** CSShieldMsg ShieldName */
        ShieldName?: (string|null);

        /** CSShieldMsg Shield */
        Shield?: (boolean|null);
    }

    /** Represents a CSShieldMsg. */
    class CSShieldMsg implements ICSShieldMsg {

        /**
         * Constructs a new CSShieldMsg.
         * @param [p] Properties to set
         */
        constructor(p?: chat.ICSShieldMsg);

        /** CSShieldMsg ShieldSnid. */
        public ShieldSnid: number;

        /** CSShieldMsg ShieldHead. */
        public ShieldHead: number;

        /** CSShieldMsg ShieldName. */
        public ShieldName: string;

        /** CSShieldMsg Shield. */
        public Shield: boolean;

        /**
         * Encodes the specified CSShieldMsg message. Does not implicitly {@link chat.CSShieldMsg.verify|verify} messages.
         * @param m CSShieldMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: chat.ICSShieldMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSShieldMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSShieldMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): chat.CSShieldMsg;
    }

    /** Properties of a SCShieldMsg. */
    interface ISCShieldMsg {

        /** SCShieldMsg Snid */
        Snid?: (number|null);

        /** SCShieldMsg ShieldSnid */
        ShieldSnid?: (number|null);

        /** SCShieldMsg Shield */
        Shield?: (boolean|null);

        /** SCShieldMsg Ts */
        Ts?: (number|Long|null);

        /** SCShieldMsg OpRetCode */
        OpRetCode?: (chat.OpResultCode|null);
    }

    /** Represents a SCShieldMsg. */
    class SCShieldMsg implements ISCShieldMsg {

        /**
         * Constructs a new SCShieldMsg.
         * @param [p] Properties to set
         */
        constructor(p?: chat.ISCShieldMsg);

        /** SCShieldMsg Snid. */
        public Snid: number;

        /** SCShieldMsg ShieldSnid. */
        public ShieldSnid: number;

        /** SCShieldMsg Shield. */
        public Shield: boolean;

        /** SCShieldMsg Ts. */
        public Ts: (number|Long);

        /** SCShieldMsg OpRetCode. */
        public OpRetCode: chat.OpResultCode;

        /**
         * Encodes the specified SCShieldMsg message. Does not implicitly {@link chat.SCShieldMsg.verify|verify} messages.
         * @param m SCShieldMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: chat.ISCShieldMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCShieldMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCShieldMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): chat.SCShieldMsg;
    }
}
