// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace message. */
export namespace message {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1
    }

    /** MSGPacketID enum. */
    enum MSGPacketID {
        PACKET_MSGPACKET_ZERO = 0,
        PACKET_SC_MESSAGELIST = 2430,
        PACKET_SC_MESSAGEADD = 2431,
        PACKET_SC_MESSAGEDEL = 2432,
        PACKET_CS_MESSAGEREAD = 2433,
        PACKET_SC_MESSAGEREAD = 2434,
        PACKET_CS_MESSAGEDEL = 2435,
        PACKET_CS_GETMESSAGEATTACH = 2436,
        PACKET_SC_GETMESSAGEATTACH = 2437,
        PACKET_SC_NOTICE = 2438,
        PACKET_CS_MESSAGELIST = 2439,
        PACKET_CS_CHATMSG = 3005,
        PACKET_SC_CHATMSG = 3006
    }

    /** Properties of a NoticeParam. */
    interface INoticeParam {

        /** NoticeParam IntParam */
        IntParam?: (number|null);

        /** NoticeParam StrParam */
        StrParam?: (string|null);
    }

    /** Represents a NoticeParam. */
    class NoticeParam implements INoticeParam {

        /**
         * Constructs a new NoticeParam.
         * @param [p] Properties to set
         */
        constructor(p?: message.INoticeParam);

        /** NoticeParam IntParam. */
        public IntParam: number;

        /** NoticeParam StrParam. */
        public StrParam: string;

        /**
         * Encodes the specified NoticeParam message. Does not implicitly {@link message.NoticeParam.verify|verify} messages.
         * @param m NoticeParam message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.INoticeParam, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NoticeParam message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns NoticeParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.NoticeParam;
    }

    /** Properties of a SCNotice. */
    interface ISCNotice {

        /** SCNotice Count */
        Count?: (number|null);

        /** SCNotice MsgType */
        MsgType?: (number|null);

        /** SCNotice Ts */
        Ts?: (number|Long|null);

        /** SCNotice ChannelId */
        ChannelId?: (string|null);

        /** SCNotice Params */
        Params?: (message.INoticeParam[]|null);

        /** SCNotice Platform */
        Platform?: (string|null);

        /** SCNotice StandSec */
        StandSec?: (number|null);
    }

    /** Represents a SCNotice. */
    class SCNotice implements ISCNotice {

        /**
         * Constructs a new SCNotice.
         * @param [p] Properties to set
         */
        constructor(p?: message.ISCNotice);

        /** SCNotice Count. */
        public Count: number;

        /** SCNotice MsgType. */
        public MsgType: number;

        /** SCNotice Ts. */
        public Ts: (number|Long);

        /** SCNotice ChannelId. */
        public ChannelId: string;

        /** SCNotice Params. */
        public Params: message.INoticeParam[];

        /** SCNotice Platform. */
        public Platform: string;

        /** SCNotice StandSec. */
        public StandSec: number;

        /**
         * Encodes the specified SCNotice message. Does not implicitly {@link message.SCNotice.verify|verify} messages.
         * @param m SCNotice message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ISCNotice, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCNotice message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.SCNotice;
    }

    /** Properties of a CSChatMsg. */
    interface ICSChatMsg {

        /** CSChatMsg Content */
        Content?: (string|null);

        /** CSChatMsg MsgType */
        MsgType?: (number|null);
    }

    /** Represents a CSChatMsg. */
    class CSChatMsg implements ICSChatMsg {

        /**
         * Constructs a new CSChatMsg.
         * @param [p] Properties to set
         */
        constructor(p?: message.ICSChatMsg);

        /** CSChatMsg Content. */
        public Content: string;

        /** CSChatMsg MsgType. */
        public MsgType: number;

        /**
         * Encodes the specified CSChatMsg message. Does not implicitly {@link message.CSChatMsg.verify|verify} messages.
         * @param m CSChatMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ICSChatMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSChatMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.CSChatMsg;
    }

    /** Properties of a SCChatMsg. */
    interface ISCChatMsg {

        /** SCChatMsg Pos */
        Pos?: (number|null);

        /** SCChatMsg Content */
        Content?: (string|null);

        /** SCChatMsg MsgType */
        MsgType?: (number|null);

        /** SCChatMsg Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a SCChatMsg. */
    class SCChatMsg implements ISCChatMsg {

        /**
         * Constructs a new SCChatMsg.
         * @param [p] Properties to set
         */
        constructor(p?: message.ISCChatMsg);

        /** SCChatMsg Pos. */
        public Pos: number;

        /** SCChatMsg Content. */
        public Content: string;

        /** SCChatMsg MsgType. */
        public MsgType: number;

        /** SCChatMsg Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Encodes the specified SCChatMsg message. Does not implicitly {@link message.SCChatMsg.verify|verify} messages.
         * @param m SCChatMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ISCChatMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCChatMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCChatMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.SCChatMsg;
    }

    /** Properties of a MessageData. */
    interface IMessageData {

        /** MessageData Id */
        Id?: (string|null);

        /** MessageData Title */
        Title?: (string|null);

        /** MessageData Content */
        Content?: (string|null);

        /** MessageData MType */
        MType?: (number|null);

        /** MessageData SrcId */
        SrcId?: (number|null);

        /** MessageData Coin */
        Coin?: (number|Long|null);

        /** MessageData State */
        State?: (number|null);

        /** MessageData Ts */
        Ts?: (number|null);

        /** MessageData Params */
        Params?: (number[]|null);

        /** MessageData AttachState */
        AttachState?: (number|null);

        /** MessageData GiftId */
        GiftId?: (string|null);

        /** MessageData GiftState */
        GiftState?: (number|null);

        /** MessageData Ticket */
        Ticket?: (number|Long|null);

        /** MessageData Grade */
        Grade?: (number|Long|null);

        /** MessageData Diamond */
        Diamond?: (number|Long|null);

        /** MessageData SrcName */
        SrcName?: (string|null);
    }

    /** Represents a MessageData. */
    class MessageData implements IMessageData {

        /**
         * Constructs a new MessageData.
         * @param [p] Properties to set
         */
        constructor(p?: message.IMessageData);

        /** MessageData Id. */
        public Id: string;

        /** MessageData Title. */
        public Title: string;

        /** MessageData Content. */
        public Content: string;

        /** MessageData MType. */
        public MType: number;

        /** MessageData SrcId. */
        public SrcId: number;

        /** MessageData Coin. */
        public Coin: (number|Long);

        /** MessageData State. */
        public State: number;

        /** MessageData Ts. */
        public Ts: number;

        /** MessageData Params. */
        public Params: number[];

        /** MessageData AttachState. */
        public AttachState: number;

        /** MessageData GiftId. */
        public GiftId: string;

        /** MessageData GiftState. */
        public GiftState: number;

        /** MessageData Ticket. */
        public Ticket: (number|Long);

        /** MessageData Grade. */
        public Grade: (number|Long);

        /** MessageData Diamond. */
        public Diamond: (number|Long);

        /** MessageData SrcName. */
        public SrcName: string;

        /**
         * Encodes the specified MessageData message. Does not implicitly {@link message.MessageData.verify|verify} messages.
         * @param m MessageData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.IMessageData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MessageData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MessageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.MessageData;
    }

    /** Properties of a SCMessageList. */
    interface ISCMessageList {

        /** SCMessageList Msgs */
        Msgs?: (message.IMessageData[]|null);
    }

    /** Represents a SCMessageList. */
    class SCMessageList implements ISCMessageList {

        /**
         * Constructs a new SCMessageList.
         * @param [p] Properties to set
         */
        constructor(p?: message.ISCMessageList);

        /** SCMessageList Msgs. */
        public Msgs: message.IMessageData[];

        /**
         * Encodes the specified SCMessageList message. Does not implicitly {@link message.SCMessageList.verify|verify} messages.
         * @param m SCMessageList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ISCMessageList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCMessageList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCMessageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.SCMessageList;
    }

    /** Properties of a SCMessageAdd. */
    interface ISCMessageAdd {

        /** SCMessageAdd Msg */
        Msg?: (message.IMessageData|null);
    }

    /** Represents a SCMessageAdd. */
    class SCMessageAdd implements ISCMessageAdd {

        /**
         * Constructs a new SCMessageAdd.
         * @param [p] Properties to set
         */
        constructor(p?: message.ISCMessageAdd);

        /** SCMessageAdd Msg. */
        public Msg?: (message.IMessageData|null);

        /**
         * Encodes the specified SCMessageAdd message. Does not implicitly {@link message.SCMessageAdd.verify|verify} messages.
         * @param m SCMessageAdd message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ISCMessageAdd, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCMessageAdd message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCMessageAdd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.SCMessageAdd;
    }

    /** Properties of a CSMessageRead. */
    interface ICSMessageRead {

        /** CSMessageRead Id */
        Id?: (string|null);
    }

    /** Represents a CSMessageRead. */
    class CSMessageRead implements ICSMessageRead {

        /**
         * Constructs a new CSMessageRead.
         * @param [p] Properties to set
         */
        constructor(p?: message.ICSMessageRead);

        /** CSMessageRead Id. */
        public Id: string;

        /**
         * Encodes the specified CSMessageRead message. Does not implicitly {@link message.CSMessageRead.verify|verify} messages.
         * @param m CSMessageRead message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ICSMessageRead, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSMessageRead message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSMessageRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.CSMessageRead;
    }

    /** Properties of a SCMessageRead. */
    interface ISCMessageRead {

        /** SCMessageRead Id */
        Id?: (string|null);
    }

    /** Represents a SCMessageRead. */
    class SCMessageRead implements ISCMessageRead {

        /**
         * Constructs a new SCMessageRead.
         * @param [p] Properties to set
         */
        constructor(p?: message.ISCMessageRead);

        /** SCMessageRead Id. */
        public Id: string;

        /**
         * Encodes the specified SCMessageRead message. Does not implicitly {@link message.SCMessageRead.verify|verify} messages.
         * @param m SCMessageRead message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ISCMessageRead, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCMessageRead message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCMessageRead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.SCMessageRead;
    }

    /** Properties of a CSMessageDel. */
    interface ICSMessageDel {

        /** CSMessageDel Id */
        Id?: (string|null);
    }

    /** Represents a CSMessageDel. */
    class CSMessageDel implements ICSMessageDel {

        /**
         * Constructs a new CSMessageDel.
         * @param [p] Properties to set
         */
        constructor(p?: message.ICSMessageDel);

        /** CSMessageDel Id. */
        public Id: string;

        /**
         * Encodes the specified CSMessageDel message. Does not implicitly {@link message.CSMessageDel.verify|verify} messages.
         * @param m CSMessageDel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ICSMessageDel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSMessageDel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSMessageDel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.CSMessageDel;
    }

    /** Properties of a SCMessageDel. */
    interface ISCMessageDel {

        /** SCMessageDel Id */
        Id?: (string|null);
    }

    /** Represents a SCMessageDel. */
    class SCMessageDel implements ISCMessageDel {

        /**
         * Constructs a new SCMessageDel.
         * @param [p] Properties to set
         */
        constructor(p?: message.ISCMessageDel);

        /** SCMessageDel Id. */
        public Id: string;

        /**
         * Encodes the specified SCMessageDel message. Does not implicitly {@link message.SCMessageDel.verify|verify} messages.
         * @param m SCMessageDel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ISCMessageDel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCMessageDel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCMessageDel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.SCMessageDel;
    }

    /** Properties of a CSGetMessageAttach. */
    interface ICSGetMessageAttach {

        /** CSGetMessageAttach Id */
        Id?: (string|null);
    }

    /** Represents a CSGetMessageAttach. */
    class CSGetMessageAttach implements ICSGetMessageAttach {

        /**
         * Constructs a new CSGetMessageAttach.
         * @param [p] Properties to set
         */
        constructor(p?: message.ICSGetMessageAttach);

        /** CSGetMessageAttach Id. */
        public Id: string;

        /**
         * Encodes the specified CSGetMessageAttach message. Does not implicitly {@link message.CSGetMessageAttach.verify|verify} messages.
         * @param m CSGetMessageAttach message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ICSGetMessageAttach, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetMessageAttach message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetMessageAttach
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.CSGetMessageAttach;
    }

    /** Properties of a SCGetMessageAttach. */
    interface ISCGetMessageAttach {

        /** SCGetMessageAttach Id */
        Id?: (string|null);
    }

    /** Represents a SCGetMessageAttach. */
    class SCGetMessageAttach implements ISCGetMessageAttach {

        /**
         * Constructs a new SCGetMessageAttach.
         * @param [p] Properties to set
         */
        constructor(p?: message.ISCGetMessageAttach);

        /** SCGetMessageAttach Id. */
        public Id: string;

        /**
         * Encodes the specified SCGetMessageAttach message. Does not implicitly {@link message.SCGetMessageAttach.verify|verify} messages.
         * @param m SCGetMessageAttach message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ISCGetMessageAttach, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetMessageAttach message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetMessageAttach
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.SCGetMessageAttach;
    }

    /** Properties of a ClubMessage. */
    interface IClubMessage {

        /** ClubMessage MsgType */
        MsgType?: (number|null);

        /** ClubMessage Content */
        Content?: (string|null);

        /** ClubMessage SnId */
        SnId?: (number|null);

        /** ClubMessage NickName */
        NickName?: (string|null);

        /** ClubMessage HeadPic */
        HeadPic?: (string|null);

        /** ClubMessage Ts */
        Ts?: (number|Long|null);
    }

    /** Represents a ClubMessage. */
    class ClubMessage implements IClubMessage {

        /**
         * Constructs a new ClubMessage.
         * @param [p] Properties to set
         */
        constructor(p?: message.IClubMessage);

        /** ClubMessage MsgType. */
        public MsgType: number;

        /** ClubMessage Content. */
        public Content: string;

        /** ClubMessage SnId. */
        public SnId: number;

        /** ClubMessage NickName. */
        public NickName: string;

        /** ClubMessage HeadPic. */
        public HeadPic: string;

        /** ClubMessage Ts. */
        public Ts: (number|Long);

        /**
         * Encodes the specified ClubMessage message. Does not implicitly {@link message.ClubMessage.verify|verify} messages.
         * @param m ClubMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.IClubMessage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClubMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ClubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.ClubMessage;
    }

    /** Properties of a CSClubMsg. */
    interface ICSClubMsg {

        /** CSClubMsg ClubId */
        ClubId?: (number|null);

        /** CSClubMsg MsgType */
        MsgType?: (number|null);

        /** CSClubMsg Content */
        Content?: (string|null);
    }

    /** Represents a CSClubMsg. */
    class CSClubMsg implements ICSClubMsg {

        /**
         * Constructs a new CSClubMsg.
         * @param [p] Properties to set
         */
        constructor(p?: message.ICSClubMsg);

        /** CSClubMsg ClubId. */
        public ClubId: number;

        /** CSClubMsg MsgType. */
        public MsgType: number;

        /** CSClubMsg Content. */
        public Content: string;

        /**
         * Encodes the specified CSClubMsg message. Does not implicitly {@link message.CSClubMsg.verify|verify} messages.
         * @param m CSClubMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ICSClubMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSClubMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSClubMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.CSClubMsg;
    }

    /** Properties of a SCClubMsg. */
    interface ISCClubMsg {

        /** SCClubMsg OpRetCode */
        OpRetCode?: (message.OpResultCode|null);

        /** SCClubMsg ClubId */
        ClubId?: (number|null);

        /** SCClubMsg MsgType */
        MsgType?: (number|null);

        /** SCClubMsg ClubMsg */
        ClubMsg?: (message.IClubMessage|null);
    }

    /** Represents a SCClubMsg. */
    class SCClubMsg implements ISCClubMsg {

        /**
         * Constructs a new SCClubMsg.
         * @param [p] Properties to set
         */
        constructor(p?: message.ISCClubMsg);

        /** SCClubMsg OpRetCode. */
        public OpRetCode: message.OpResultCode;

        /** SCClubMsg ClubId. */
        public ClubId: number;

        /** SCClubMsg MsgType. */
        public MsgType: number;

        /** SCClubMsg ClubMsg. */
        public ClubMsg?: (message.IClubMessage|null);

        /**
         * Encodes the specified SCClubMsg message. Does not implicitly {@link message.SCClubMsg.verify|verify} messages.
         * @param m SCClubMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ISCClubMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCClubMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCClubMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.SCClubMsg;
    }

    /** Properties of a CSClubMsgState. */
    interface ICSClubMsgState {

        /** CSClubMsgState ClubId */
        ClubId?: (number|null);

        /** CSClubMsgState Disable */
        Disable?: (boolean|null);
    }

    /** Represents a CSClubMsgState. */
    class CSClubMsgState implements ICSClubMsgState {

        /**
         * Constructs a new CSClubMsgState.
         * @param [p] Properties to set
         */
        constructor(p?: message.ICSClubMsgState);

        /** CSClubMsgState ClubId. */
        public ClubId: number;

        /** CSClubMsgState Disable. */
        public Disable: boolean;

        /**
         * Encodes the specified CSClubMsgState message. Does not implicitly {@link message.CSClubMsgState.verify|verify} messages.
         * @param m CSClubMsgState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ICSClubMsgState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSClubMsgState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSClubMsgState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.CSClubMsgState;
    }

    /** Properties of a SCClubMsgState. */
    interface ISCClubMsgState {

        /** SCClubMsgState Disable */
        Disable?: (boolean|null);

        /** SCClubMsgState OpRetCode */
        OpRetCode?: (message.OpResultCode|null);
    }

    /** Represents a SCClubMsgState. */
    class SCClubMsgState implements ISCClubMsgState {

        /**
         * Constructs a new SCClubMsgState.
         * @param [p] Properties to set
         */
        constructor(p?: message.ISCClubMsgState);

        /** SCClubMsgState Disable. */
        public Disable: boolean;

        /** SCClubMsgState OpRetCode. */
        public OpRetCode: message.OpResultCode;

        /**
         * Encodes the specified SCClubMsgState message. Does not implicitly {@link message.SCClubMsgState.verify|verify} messages.
         * @param m SCClubMsgState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ISCClubMsgState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCClubMsgState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCClubMsgState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.SCClubMsgState;
    }

    /** Properties of a CSClubMsgHistory. */
    interface ICSClubMsgHistory {

        /** CSClubMsgHistory ClubId */
        ClubId?: (number|null);
    }

    /** Represents a CSClubMsgHistory. */
    class CSClubMsgHistory implements ICSClubMsgHistory {

        /**
         * Constructs a new CSClubMsgHistory.
         * @param [p] Properties to set
         */
        constructor(p?: message.ICSClubMsgHistory);

        /** CSClubMsgHistory ClubId. */
        public ClubId: number;

        /**
         * Encodes the specified CSClubMsgHistory message. Does not implicitly {@link message.CSClubMsgHistory.verify|verify} messages.
         * @param m CSClubMsgHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ICSClubMsgHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSClubMsgHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSClubMsgHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.CSClubMsgHistory;
    }

    /** Properties of a SCClubMsgHistory. */
    interface ISCClubMsgHistory {

        /** SCClubMsgHistory OpRetCode */
        OpRetCode?: (message.OpResultCode|null);

        /** SCClubMsgHistory ClubMsg */
        ClubMsg?: (message.IClubMessage[]|null);
    }

    /** Represents a SCClubMsgHistory. */
    class SCClubMsgHistory implements ISCClubMsgHistory {

        /**
         * Constructs a new SCClubMsgHistory.
         * @param [p] Properties to set
         */
        constructor(p?: message.ISCClubMsgHistory);

        /** SCClubMsgHistory OpRetCode. */
        public OpRetCode: message.OpResultCode;

        /** SCClubMsgHistory ClubMsg. */
        public ClubMsg: message.IClubMessage[];

        /**
         * Encodes the specified SCClubMsgHistory message. Does not implicitly {@link message.SCClubMsgHistory.verify|verify} messages.
         * @param m SCClubMsgHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ISCClubMsgHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCClubMsgHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCClubMsgHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.SCClubMsgHistory;
    }

    /** Properties of a CSMessageList. */
    interface ICSMessageList {

        /** CSMessageList ShowId */
        ShowId?: (number|Long|null);
    }

    /** Represents a CSMessageList. */
    class CSMessageList implements ICSMessageList {

        /**
         * Constructs a new CSMessageList.
         * @param [p] Properties to set
         */
        constructor(p?: message.ICSMessageList);

        /** CSMessageList ShowId. */
        public ShowId: (number|Long);

        /**
         * Encodes the specified CSMessageList message. Does not implicitly {@link message.CSMessageList.verify|verify} messages.
         * @param m CSMessageList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: message.ICSMessageList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSMessageList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSMessageList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): message.CSMessageList;
    }
}
