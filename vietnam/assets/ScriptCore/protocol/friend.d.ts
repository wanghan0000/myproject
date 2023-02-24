// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace friend. */
export namespace friend {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_Friend_NoPlayer = 1001,
        OPRC_Friend_AlreadyAdd = 1002,
        OPRC_Friend_AlreadyApply = 1003,
        OPRC_Friend_FriendMax = 1004,
        OPRC_Friend_DestFriendMax = 1005,
        OPRC_Friend_DestApplyFriendMax = 1006,
        OPRC_InviteFriend_NoOnline = 1007,
        OPRC_InviteFriend_NotFriend = 1008,
        OPRC_InviteFriend_SceneNotExist = 1009,
        OPRC_InviteFriend_RoomLimit = 1010,
        OPRC_InviteFriend_RoomNotExist = 1011,
        OPRC_InviteFriend_SceneDeleting = 1012,
        OPRC_InviteFriend_SceneClosed = 1013,
        OPRC_InviteFriend_CoinLimit = 1014,
        OPRC_InviteFriend_GameNotExist = 1015,
        OPRC_InviteFriend_GameNotCanEnter = 1016,
        OPRC_InviteFriend_RoomFull = 1017,
        OPRC_InviteFriend_Gaming = 1018,
        OPRC_InviteFriend_PosIsError = 1019,
        OPRC_InviteFriend_HadInRoom = 1020,
        OPRC_Friend_NotOpMyself = 1021
    }

    /** FriendPacketID enum. */
    enum FriendPacketID {
        PACKET_FriendPACKET_ZERO = 0,
        PACKET_CSFriendList = 2700,
        PACKET_SCFriendList = 2701,
        PACKET_CSFriendOp = 2702,
        PACKET_SCFriendOp = 2703,
        PACKET_CSQueryPlayerGameLog = 2704,
        PACKET_SCQueryPlayerGameLog = 2705,
        PACKET_CSInviteFriend = 2706,
        PACKET_SCInviteFriend = 2707,
        PACKET_CSInviteFriendOp = 2708,
        PACKET_SCInviteFriendOp = 2709,
        PACKET_SCFriendApplyData = 2710,
        PACKET_SCFriendUnreadData = 2711,
        PACKET_CSFuzzyQueryPlayer = 2712,
        PACKET_SCFuzzyQueryPlayer = 2713
    }

    /** Properties of a CSFriendList. */
    interface ICSFriendList {

        /** CSFriendList ListType */
        ListType?: (number|null);
    }

    /** Represents a CSFriendList. */
    class CSFriendList implements ICSFriendList {

        /**
         * Constructs a new CSFriendList.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ICSFriendList);

        /** CSFriendList ListType. */
        public ListType: number;

        /**
         * Encodes the specified CSFriendList message. Does not implicitly {@link friend.CSFriendList.verify|verify} messages.
         * @param m CSFriendList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ICSFriendList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSFriendList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSFriendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.CSFriendList;
    }

    /** Properties of a FriendInfo. */
    interface IFriendInfo {

        /** FriendInfo SnId */
        SnId?: (number|null);

        /** FriendInfo Name */
        Name?: (string|null);

        /** FriendInfo Sex */
        Sex?: (number|null);

        /** FriendInfo Head */
        Head?: (number|null);

        /** FriendInfo Online */
        Online?: (boolean|null);

        /** FriendInfo CreateTs */
        CreateTs?: (number|Long|null);

        /** FriendInfo LogoutTs */
        LogoutTs?: (number|Long|null);

        /** FriendInfo LastChatTs */
        LastChatTs?: (number|Long|null);

        /** FriendInfo IsShield */
        IsShield?: (boolean|null);
    }

    /** Represents a FriendInfo. */
    class FriendInfo implements IFriendInfo {

        /**
         * Constructs a new FriendInfo.
         * @param [p] Properties to set
         */
        constructor(p?: friend.IFriendInfo);

        /** FriendInfo SnId. */
        public SnId: number;

        /** FriendInfo Name. */
        public Name: string;

        /** FriendInfo Sex. */
        public Sex: number;

        /** FriendInfo Head. */
        public Head: number;

        /** FriendInfo Online. */
        public Online: boolean;

        /** FriendInfo CreateTs. */
        public CreateTs: (number|Long);

        /** FriendInfo LogoutTs. */
        public LogoutTs: (number|Long);

        /** FriendInfo LastChatTs. */
        public LastChatTs: (number|Long);

        /** FriendInfo IsShield. */
        public IsShield: boolean;

        /**
         * Encodes the specified FriendInfo message. Does not implicitly {@link friend.FriendInfo.verify|verify} messages.
         * @param m FriendInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.IFriendInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FriendInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.FriendInfo;
    }

    /** Properties of a SCFriendList. */
    interface ISCFriendList {

        /** SCFriendList ListType */
        ListType?: (number|null);

        /** SCFriendList FriendArr */
        FriendArr?: (friend.IFriendInfo[]|null);

        /** SCFriendList OpRetCode */
        OpRetCode?: (friend.OpResultCode|null);
    }

    /** Represents a SCFriendList. */
    class SCFriendList implements ISCFriendList {

        /**
         * Constructs a new SCFriendList.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ISCFriendList);

        /** SCFriendList ListType. */
        public ListType: number;

        /** SCFriendList FriendArr. */
        public FriendArr: friend.IFriendInfo[];

        /** SCFriendList OpRetCode. */
        public OpRetCode: friend.OpResultCode;

        /**
         * Encodes the specified SCFriendList message. Does not implicitly {@link friend.SCFriendList.verify|verify} messages.
         * @param m SCFriendList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ISCFriendList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFriendList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFriendList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.SCFriendList;
    }

    /** Properties of a CSFriendOp. */
    interface ICSFriendOp {

        /** CSFriendOp OpCode */
        OpCode?: (number|null);

        /** CSFriendOp SnId */
        SnId?: (number|null);
    }

    /** Represents a CSFriendOp. */
    class CSFriendOp implements ICSFriendOp {

        /**
         * Constructs a new CSFriendOp.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ICSFriendOp);

        /** CSFriendOp OpCode. */
        public OpCode: number;

        /** CSFriendOp SnId. */
        public SnId: number;

        /**
         * Encodes the specified CSFriendOp message. Does not implicitly {@link friend.CSFriendOp.verify|verify} messages.
         * @param m CSFriendOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ICSFriendOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSFriendOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSFriendOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.CSFriendOp;
    }

    /** Properties of a SCFriendOp. */
    interface ISCFriendOp {

        /** SCFriendOp OpCode */
        OpCode?: (number|null);

        /** SCFriendOp SnId */
        SnId?: (number|null);

        /** SCFriendOp Friend */
        Friend?: (friend.IFriendInfo|null);

        /** SCFriendOp OpRetCode */
        OpRetCode?: (friend.OpResultCode|null);
    }

    /** Represents a SCFriendOp. */
    class SCFriendOp implements ISCFriendOp {

        /**
         * Constructs a new SCFriendOp.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ISCFriendOp);

        /** SCFriendOp OpCode. */
        public OpCode: number;

        /** SCFriendOp SnId. */
        public SnId: number;

        /** SCFriendOp Friend. */
        public Friend?: (friend.IFriendInfo|null);

        /** SCFriendOp OpRetCode. */
        public OpRetCode: friend.OpResultCode;

        /**
         * Encodes the specified SCFriendOp message. Does not implicitly {@link friend.SCFriendOp.verify|verify} messages.
         * @param m SCFriendOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ISCFriendOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFriendOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFriendOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.SCFriendOp;
    }

    /** Properties of a CSQueryPlayerGameLog. */
    interface ICSQueryPlayerGameLog {

        /** CSQueryPlayerGameLog Snid */
        Snid?: (number|null);

        /** CSQueryPlayerGameLog GameId */
        GameId?: (number|null);

        /** CSQueryPlayerGameLog Size */
        Size?: (number|null);
    }

    /** Represents a CSQueryPlayerGameLog. */
    class CSQueryPlayerGameLog implements ICSQueryPlayerGameLog {

        /**
         * Constructs a new CSQueryPlayerGameLog.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ICSQueryPlayerGameLog);

        /** CSQueryPlayerGameLog Snid. */
        public Snid: number;

        /** CSQueryPlayerGameLog GameId. */
        public GameId: number;

        /** CSQueryPlayerGameLog Size. */
        public Size: number;

        /**
         * Encodes the specified CSQueryPlayerGameLog message. Does not implicitly {@link friend.CSQueryPlayerGameLog.verify|verify} messages.
         * @param m CSQueryPlayerGameLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ICSQueryPlayerGameLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSQueryPlayerGameLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSQueryPlayerGameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.CSQueryPlayerGameLog;
    }

    /** Properties of a PlayerGameLog. */
    interface IPlayerGameLog {

        /** PlayerGameLog GameId */
        GameId?: (number|null);

        /** PlayerGameLog BaseScore */
        BaseScore?: (number|null);

        /** PlayerGameLog IsWin */
        IsWin?: (number|null);

        /** PlayerGameLog Ts */
        Ts?: (number|Long|null);
    }

    /** Represents a PlayerGameLog. */
    class PlayerGameLog implements IPlayerGameLog {

        /**
         * Constructs a new PlayerGameLog.
         * @param [p] Properties to set
         */
        constructor(p?: friend.IPlayerGameLog);

        /** PlayerGameLog GameId. */
        public GameId: number;

        /** PlayerGameLog BaseScore. */
        public BaseScore: number;

        /** PlayerGameLog IsWin. */
        public IsWin: number;

        /** PlayerGameLog Ts. */
        public Ts: (number|Long);

        /**
         * Encodes the specified PlayerGameLog message. Does not implicitly {@link friend.PlayerGameLog.verify|verify} messages.
         * @param m PlayerGameLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.IPlayerGameLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerGameLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerGameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.PlayerGameLog;
    }

    /** Properties of a SCQueryPlayerGameLog. */
    interface ISCQueryPlayerGameLog {

        /** SCQueryPlayerGameLog Snid */
        Snid?: (number|null);

        /** SCQueryPlayerGameLog GameId */
        GameId?: (number|null);

        /** SCQueryPlayerGameLog Size */
        Size?: (number|null);

        /** SCQueryPlayerGameLog GameLogs */
        GameLogs?: (friend.IPlayerGameLog[]|null);
    }

    /** Represents a SCQueryPlayerGameLog. */
    class SCQueryPlayerGameLog implements ISCQueryPlayerGameLog {

        /**
         * Constructs a new SCQueryPlayerGameLog.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ISCQueryPlayerGameLog);

        /** SCQueryPlayerGameLog Snid. */
        public Snid: number;

        /** SCQueryPlayerGameLog GameId. */
        public GameId: number;

        /** SCQueryPlayerGameLog Size. */
        public Size: number;

        /** SCQueryPlayerGameLog GameLogs. */
        public GameLogs: friend.IPlayerGameLog[];

        /**
         * Encodes the specified SCQueryPlayerGameLog message. Does not implicitly {@link friend.SCQueryPlayerGameLog.verify|verify} messages.
         * @param m SCQueryPlayerGameLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ISCQueryPlayerGameLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCQueryPlayerGameLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCQueryPlayerGameLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.SCQueryPlayerGameLog;
    }

    /** Properties of a CSInviteFriend. */
    interface ICSInviteFriend {

        /** CSInviteFriend ToSnId */
        ToSnId?: (number|null);

        /** CSInviteFriend Pos */
        Pos?: (number|null);
    }

    /** Represents a CSInviteFriend. */
    class CSInviteFriend implements ICSInviteFriend {

        /**
         * Constructs a new CSInviteFriend.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ICSInviteFriend);

        /** CSInviteFriend ToSnId. */
        public ToSnId: number;

        /** CSInviteFriend Pos. */
        public Pos: number;

        /**
         * Encodes the specified CSInviteFriend message. Does not implicitly {@link friend.CSInviteFriend.verify|verify} messages.
         * @param m CSInviteFriend message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ICSInviteFriend, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSInviteFriend message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSInviteFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.CSInviteFriend;
    }

    /** Properties of a SCInviteFriend. */
    interface ISCInviteFriend {

        /** SCInviteFriend SrcSnId */
        SrcSnId?: (number|null);

        /** SCInviteFriend SrcName */
        SrcName?: (string|null);

        /** SCInviteFriend SrcHead */
        SrcHead?: (number|null);

        /** SCInviteFriend GameId */
        GameId?: (number|null);

        /** SCInviteFriend RoomId */
        RoomId?: (number|null);

        /** SCInviteFriend Pos */
        Pos?: (number|null);

        /** SCInviteFriend OpRetCode */
        OpRetCode?: (friend.OpResultCode|null);
    }

    /** Represents a SCInviteFriend. */
    class SCInviteFriend implements ISCInviteFriend {

        /**
         * Constructs a new SCInviteFriend.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ISCInviteFriend);

        /** SCInviteFriend SrcSnId. */
        public SrcSnId: number;

        /** SCInviteFriend SrcName. */
        public SrcName: string;

        /** SCInviteFriend SrcHead. */
        public SrcHead: number;

        /** SCInviteFriend GameId. */
        public GameId: number;

        /** SCInviteFriend RoomId. */
        public RoomId: number;

        /** SCInviteFriend Pos. */
        public Pos: number;

        /** SCInviteFriend OpRetCode. */
        public OpRetCode: friend.OpResultCode;

        /**
         * Encodes the specified SCInviteFriend message. Does not implicitly {@link friend.SCInviteFriend.verify|verify} messages.
         * @param m SCInviteFriend message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ISCInviteFriend, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCInviteFriend message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCInviteFriend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.SCInviteFriend;
    }

    /** Properties of a CSInviteFriendOp. */
    interface ICSInviteFriendOp {

        /** CSInviteFriendOp OpCode */
        OpCode?: (number|null);

        /** CSInviteFriendOp SnId */
        SnId?: (number|null);

        /** CSInviteFriendOp Pos */
        Pos?: (number|null);
    }

    /** Represents a CSInviteFriendOp. */
    class CSInviteFriendOp implements ICSInviteFriendOp {

        /**
         * Constructs a new CSInviteFriendOp.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ICSInviteFriendOp);

        /** CSInviteFriendOp OpCode. */
        public OpCode: number;

        /** CSInviteFriendOp SnId. */
        public SnId: number;

        /** CSInviteFriendOp Pos. */
        public Pos: number;

        /**
         * Encodes the specified CSInviteFriendOp message. Does not implicitly {@link friend.CSInviteFriendOp.verify|verify} messages.
         * @param m CSInviteFriendOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ICSInviteFriendOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSInviteFriendOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSInviteFriendOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.CSInviteFriendOp;
    }

    /** Properties of a SCInviteFriendOp. */
    interface ISCInviteFriendOp {

        /** SCInviteFriendOp SnId */
        SnId?: (number|null);

        /** SCInviteFriendOp Name */
        Name?: (string|null);

        /** SCInviteFriendOp OpCode */
        OpCode?: (number|null);

        /** SCInviteFriendOp Pos */
        Pos?: (number|null);

        /** SCInviteFriendOp OpRetCode */
        OpRetCode?: (friend.OpResultCode|null);
    }

    /** Represents a SCInviteFriendOp. */
    class SCInviteFriendOp implements ISCInviteFriendOp {

        /**
         * Constructs a new SCInviteFriendOp.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ISCInviteFriendOp);

        /** SCInviteFriendOp SnId. */
        public SnId: number;

        /** SCInviteFriendOp Name. */
        public Name: string;

        /** SCInviteFriendOp OpCode. */
        public OpCode: number;

        /** SCInviteFriendOp Pos. */
        public Pos: number;

        /** SCInviteFriendOp OpRetCode. */
        public OpRetCode: friend.OpResultCode;

        /**
         * Encodes the specified SCInviteFriendOp message. Does not implicitly {@link friend.SCInviteFriendOp.verify|verify} messages.
         * @param m SCInviteFriendOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ISCInviteFriendOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCInviteFriendOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCInviteFriendOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.SCInviteFriendOp;
    }

    /** Properties of a FriendApply. */
    interface IFriendApply {

        /** FriendApply Snid */
        Snid?: (number|null);

        /** FriendApply Name */
        Name?: (string|null);

        /** FriendApply CreateTs */
        CreateTs?: (number|Long|null);
    }

    /** Represents a FriendApply. */
    class FriendApply implements IFriendApply {

        /**
         * Constructs a new FriendApply.
         * @param [p] Properties to set
         */
        constructor(p?: friend.IFriendApply);

        /** FriendApply Snid. */
        public Snid: number;

        /** FriendApply Name. */
        public Name: string;

        /** FriendApply CreateTs. */
        public CreateTs: (number|Long);

        /**
         * Encodes the specified FriendApply message. Does not implicitly {@link friend.FriendApply.verify|verify} messages.
         * @param m FriendApply message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.IFriendApply, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendApply message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FriendApply
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.FriendApply;
    }

    /** Properties of a SCFriendApplyData. */
    interface ISCFriendApplyData {

        /** SCFriendApplyData FriendApplys */
        FriendApplys?: (friend.IFriendApply[]|null);
    }

    /** Represents a SCFriendApplyData. */
    class SCFriendApplyData implements ISCFriendApplyData {

        /**
         * Constructs a new SCFriendApplyData.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ISCFriendApplyData);

        /** SCFriendApplyData FriendApplys. */
        public FriendApplys: friend.IFriendApply[];

        /**
         * Encodes the specified SCFriendApplyData message. Does not implicitly {@link friend.SCFriendApplyData.verify|verify} messages.
         * @param m SCFriendApplyData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ISCFriendApplyData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFriendApplyData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFriendApplyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.SCFriendApplyData;
    }

    /** Properties of a FriendUnread. */
    interface IFriendUnread {

        /** FriendUnread Snid */
        Snid?: (number|null);

        /** FriendUnread UnreadNum */
        UnreadNum?: (number|null);
    }

    /** Represents a FriendUnread. */
    class FriendUnread implements IFriendUnread {

        /**
         * Constructs a new FriendUnread.
         * @param [p] Properties to set
         */
        constructor(p?: friend.IFriendUnread);

        /** FriendUnread Snid. */
        public Snid: number;

        /** FriendUnread UnreadNum. */
        public UnreadNum: number;

        /**
         * Encodes the specified FriendUnread message. Does not implicitly {@link friend.FriendUnread.verify|verify} messages.
         * @param m FriendUnread message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.IFriendUnread, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendUnread message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FriendUnread
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.FriendUnread;
    }

    /** Properties of a SCFriendUnreadData. */
    interface ISCFriendUnreadData {

        /** SCFriendUnreadData FriendUnreads */
        FriendUnreads?: (friend.IFriendUnread[]|null);
    }

    /** Represents a SCFriendUnreadData. */
    class SCFriendUnreadData implements ISCFriendUnreadData {

        /**
         * Constructs a new SCFriendUnreadData.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ISCFriendUnreadData);

        /** SCFriendUnreadData FriendUnreads. */
        public FriendUnreads: friend.IFriendUnread[];

        /**
         * Encodes the specified SCFriendUnreadData message. Does not implicitly {@link friend.SCFriendUnreadData.verify|verify} messages.
         * @param m SCFriendUnreadData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ISCFriendUnreadData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFriendUnreadData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFriendUnreadData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.SCFriendUnreadData;
    }

    /** Properties of a CSFuzzyQueryPlayer. */
    interface ICSFuzzyQueryPlayer {

        /** CSFuzzyQueryPlayer QueryContent */
        QueryContent?: (string|null);
    }

    /** Represents a CSFuzzyQueryPlayer. */
    class CSFuzzyQueryPlayer implements ICSFuzzyQueryPlayer {

        /**
         * Constructs a new CSFuzzyQueryPlayer.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ICSFuzzyQueryPlayer);

        /** CSFuzzyQueryPlayer QueryContent. */
        public QueryContent: string;

        /**
         * Encodes the specified CSFuzzyQueryPlayer message. Does not implicitly {@link friend.CSFuzzyQueryPlayer.verify|verify} messages.
         * @param m CSFuzzyQueryPlayer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ICSFuzzyQueryPlayer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSFuzzyQueryPlayer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSFuzzyQueryPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.CSFuzzyQueryPlayer;
    }

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo SnId */
        SnId?: (number|null);

        /** PlayerInfo Name */
        Name?: (string|null);

        /** PlayerInfo Sex */
        Sex?: (number|null);

        /** PlayerInfo Head */
        Head?: (number|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: friend.IPlayerInfo);

        /** PlayerInfo SnId. */
        public SnId: number;

        /** PlayerInfo Name. */
        public Name: string;

        /** PlayerInfo Sex. */
        public Sex: number;

        /** PlayerInfo Head. */
        public Head: number;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link friend.PlayerInfo.verify|verify} messages.
         * @param m PlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.IPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.PlayerInfo;
    }

    /** Properties of a SCFuzzyQueryPlayer. */
    interface ISCFuzzyQueryPlayer {

        /** SCFuzzyQueryPlayer QueryContent */
        QueryContent?: (string|null);

        /** SCFuzzyQueryPlayer Players */
        Players?: (friend.IPlayerInfo[]|null);
    }

    /** Represents a SCFuzzyQueryPlayer. */
    class SCFuzzyQueryPlayer implements ISCFuzzyQueryPlayer {

        /**
         * Constructs a new SCFuzzyQueryPlayer.
         * @param [p] Properties to set
         */
        constructor(p?: friend.ISCFuzzyQueryPlayer);

        /** SCFuzzyQueryPlayer QueryContent. */
        public QueryContent: string;

        /** SCFuzzyQueryPlayer Players. */
        public Players: friend.IPlayerInfo[];

        /**
         * Encodes the specified SCFuzzyQueryPlayer message. Does not implicitly {@link friend.SCFuzzyQueryPlayer.verify|verify} messages.
         * @param m SCFuzzyQueryPlayer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: friend.ISCFuzzyQueryPlayer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFuzzyQueryPlayer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFuzzyQueryPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): friend.SCFuzzyQueryPlayer;
    }
}
