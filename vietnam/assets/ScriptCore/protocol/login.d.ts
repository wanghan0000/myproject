// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace login. */
export namespace login {

    /** GatePacketID enum. */
    enum GatePacketID {
        PACKET_Gate_ZERO = 0,
        PACKET_CS_AUTH = -1004,
        PACKET_SC_AUTH = -1006,
        PACKET_SS_DICONNECT = 2001,
        PACKET_CS_PING = 2002,
        PACKET_SC_PONG = 2003,
        PACKET_CS_BINDBUNDLE = 2004,
        PACKET_SC_BINDBUNDLE = 2005,
        PACKET_CS_LOGICACK = 2006
    }

    /** Properties of a CSPing. */
    interface ICSPing {

        /** CSPing TimeStamp */
        TimeStamp?: (number|Long|null);
    }

    /** Represents a CSPing. */
    class CSPing implements ICSPing {

        /**
         * Constructs a new CSPing.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSPing);

        /** CSPing TimeStamp. */
        public TimeStamp: (number|Long);

        /**
         * Encodes the specified CSPing message. Does not implicitly {@link login.CSPing.verify|verify} messages.
         * @param m CSPing message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSPing, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPing message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSPing;
    }

    /** Properties of a SCPong. */
    interface ISCPong {

        /** SCPong TimeStamp */
        TimeStamp?: (number|Long|null);
    }

    /** Represents a SCPong. */
    class SCPong implements ISCPong {

        /**
         * Constructs a new SCPong.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCPong);

        /** SCPong TimeStamp. */
        public TimeStamp: (number|Long);

        /**
         * Encodes the specified SCPong message. Does not implicitly {@link login.SCPong.verify|verify} messages.
         * @param m SCPong message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCPong, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPong message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCPong;
    }

    /** Properties of a CSBindBundle. */
    interface ICSBindBundle {

        /** CSBindBundle BundleKey */
        BundleKey?: (string|null);
    }

    /** Represents a CSBindBundle. */
    class CSBindBundle implements ICSBindBundle {

        /**
         * Constructs a new CSBindBundle.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSBindBundle);

        /** CSBindBundle BundleKey. */
        public BundleKey: string;

        /**
         * Encodes the specified CSBindBundle message. Does not implicitly {@link login.CSBindBundle.verify|verify} messages.
         * @param m CSBindBundle message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSBindBundle, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSBindBundle message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSBindBundle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSBindBundle;
    }

    /** Properties of a SCBindBundle. */
    interface ISCBindBundle {

        /** SCBindBundle BundleId */
        BundleId?: (number|null);

        /** SCBindBundle Sid */
        Sid?: (string|null);

        /** SCBindBundle SrvId */
        SrvId?: (number|null);
    }

    /** Represents a SCBindBundle. */
    class SCBindBundle implements ISCBindBundle {

        /**
         * Constructs a new SCBindBundle.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCBindBundle);

        /** SCBindBundle BundleId. */
        public BundleId: number;

        /** SCBindBundle Sid. */
        public Sid: string;

        /** SCBindBundle SrvId. */
        public SrvId: number;

        /**
         * Encodes the specified SCBindBundle message. Does not implicitly {@link login.SCBindBundle.verify|verify} messages.
         * @param m SCBindBundle message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCBindBundle, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCBindBundle message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCBindBundle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCBindBundle;
    }

    /** Properties of a CSLogicAck. */
    interface ICSLogicAck {

        /** CSLogicAck LogicNo */
        LogicNo?: (number|null);
    }

    /** Represents a CSLogicAck. */
    class CSLogicAck implements ICSLogicAck {

        /**
         * Constructs a new CSLogicAck.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSLogicAck);

        /** CSLogicAck LogicNo. */
        public LogicNo: number;

        /**
         * Encodes the specified CSLogicAck message. Does not implicitly {@link login.CSLogicAck.verify|verify} messages.
         * @param m CSLogicAck message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSLogicAck, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSLogicAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSLogicAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSLogicAck;
    }

    /** Properties of a SSPacketAuth. */
    interface ISSPacketAuth {

        /** SSPacketAuth AuthKey */
        AuthKey?: (string|null);

        /** SSPacketAuth Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a SSPacketAuth. */
    class SSPacketAuth implements ISSPacketAuth {

        /**
         * Constructs a new SSPacketAuth.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISSPacketAuth);

        /** SSPacketAuth AuthKey. */
        public AuthKey: string;

        /** SSPacketAuth Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Encodes the specified SSPacketAuth message. Does not implicitly {@link login.SSPacketAuth.verify|verify} messages.
         * @param m SSPacketAuth message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISSPacketAuth, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SSPacketAuth message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SSPacketAuth
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SSPacketAuth;
    }

    /** Properties of a SSPacketAuthAck. */
    interface ISSPacketAuthAck {

        /** SSPacketAuthAck Msg */
        Msg?: (string|null);
    }

    /** Represents a SSPacketAuthAck. */
    class SSPacketAuthAck implements ISSPacketAuthAck {

        /**
         * Constructs a new SSPacketAuthAck.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISSPacketAuthAck);

        /** SSPacketAuthAck Msg. */
        public Msg: string;

        /**
         * Encodes the specified SSPacketAuthAck message. Does not implicitly {@link login.SSPacketAuthAck.verify|verify} messages.
         * @param m SSPacketAuthAck message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISSPacketAuthAck, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SSPacketAuthAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SSPacketAuthAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SSPacketAuthAck;
    }

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_LoginFailed = 1000,
        OPRC_LoginSignErr = 1001,
        OPRC_LoginOtherPlace = 1002,
        OPRC_LoginPassError = 1003,
        OPRC_Login_CreateAccSuccess = 1004,
        OPRC_Login_CreateAccError = 1005,
        OPRC_Login_NameLang = 1006,
        OPRC_Login_NameSame = 1007,
        OPRC_Login_NameError = 1008,
        OPRC_Login_CreateFailed = 1009,
        OPRC_AccountBeFreeze = 1010,
        OPRC_YourResVerIsLow = 1044,
        OPRC_YourAppVerIsLow = 1045,
        OPRC_SceneServerMaintain = 1054,
        OPRC_TelError = 1065
    }

    /** LoginPacketID enum. */
    enum LoginPacketID {
        PACKET_Login_ZERO = 0,
        PACKET_CS_LOGIN = 2051,
        PACKET_SC_LOGIN = 2052,
        PACKET_CS_LOGOUT = 2053,
        PACKET_SC_LOGOUT = 2054,
        PACKET_SC_GAMECONFIG = 2055,
        PACKET_SC_BULLETIONINFO = 2056,
        PACKET_CS_BULLETIONINFO = 2057,
        PACKET_CS_CUSTOMERINFOLIST = 2058,
        PACKET_SC_CUSTOMERINFOLIST = 2059,
        PACKET_CS_CUSTOMSERVICE = 2060,
        PACKET_SC_CUSTOMSERVICE = 2061,
        PACKET_CS_PLATFORMCFG = 2062,
        PACKET_SC_PLATFORMCFG = 2063,
        PACKET_SC_ACTIVITYCHECK = 2064,
        PACKET_CS_VERIFYTYPE = 2065,
        PACKET_SC_VERIFYTYPE = 2066,
        PACKET_CS_REGISTERVERIFYTYPE = 2067,
        PACKET_SC_REGISTERVERIFYTYPE = 2068,
        PACKET_SC_SYNCGAMEFREE = 2069,
        PACKET_SC_ACTSWITCHCFG = 2070,
        PACKET_CS_GETTHRGAMECFG = 2071,
        PACKET_SC_GETTHRGAMECFG = 2072,
        PACKET_CS_ACCOUNTINVALID = 2073
    }

    /** Properties of a CSLogin. */
    interface ICSLogin {

        /** CSLogin Username */
        Username?: (string|null);

        /** CSLogin Password */
        Password?: (string|null);

        /** CSLogin TimeStamp */
        TimeStamp?: (number|Long|null);

        /** CSLogin Params */
        Params?: (string|null);

        /** CSLogin Sign */
        Sign?: (string|null);

        /** CSLogin Platform */
        Platform?: (string|null);

        /** CSLogin Channel */
        Channel?: (string|null);

        /** CSLogin InviterId */
        InviterId?: (number|null);

        /** CSLogin ApkVer */
        ApkVer?: (number|null);

        /** CSLogin ResVer */
        ResVer?: (number|null);

        /** CSLogin LoginType */
        LoginType?: (number|null);

        /** CSLogin PlatformTag */
        PlatformTag?: (string|null);

        /** CSLogin DeviceOs */
        DeviceOs?: (string|null);

        /** CSLogin Promoter */
        Promoter?: (string|null);

        /** CSLogin Package */
        Package?: (string|null);

        /** CSLogin PromoterTree */
        PromoterTree?: (number|null);

        /** CSLogin DeviceInfo */
        DeviceInfo?: (string|null);

        /** CSLogin DeviceId */
        DeviceId?: (string|null);

        /** CSLogin Token */
        Token?: (string|null);

        /** CSLogin Name */
        Name?: (string|null);

        /** CSLogin HeadUrl */
        HeadUrl?: (string|null);
    }

    /** Represents a CSLogin. */
    class CSLogin implements ICSLogin {

        /**
         * Constructs a new CSLogin.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSLogin);

        /** CSLogin Username. */
        public Username: string;

        /** CSLogin Password. */
        public Password: string;

        /** CSLogin TimeStamp. */
        public TimeStamp: (number|Long);

        /** CSLogin Params. */
        public Params: string;

        /** CSLogin Sign. */
        public Sign: string;

        /** CSLogin Platform. */
        public Platform: string;

        /** CSLogin Channel. */
        public Channel: string;

        /** CSLogin InviterId. */
        public InviterId: number;

        /** CSLogin ApkVer. */
        public ApkVer: number;

        /** CSLogin ResVer. */
        public ResVer: number;

        /** CSLogin LoginType. */
        public LoginType: number;

        /** CSLogin PlatformTag. */
        public PlatformTag: string;

        /** CSLogin DeviceOs. */
        public DeviceOs: string;

        /** CSLogin Promoter. */
        public Promoter: string;

        /** CSLogin Package. */
        public Package: string;

        /** CSLogin PromoterTree. */
        public PromoterTree: number;

        /** CSLogin DeviceInfo. */
        public DeviceInfo: string;

        /** CSLogin DeviceId. */
        public DeviceId: string;

        /** CSLogin Token. */
        public Token: string;

        /** CSLogin Name. */
        public Name: string;

        /** CSLogin HeadUrl. */
        public HeadUrl: string;

        /**
         * Encodes the specified CSLogin message. Does not implicitly {@link login.CSLogin.verify|verify} messages.
         * @param m CSLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSLogin;
    }

    /** Properties of a GameVer. */
    interface IGameVer {

        /** GameVer GameId */
        GameId?: (number|null);

        /** GameVer MinApkVer */
        MinApkVer?: (number|null);

        /** GameVer LatestApkVer */
        LatestApkVer?: (number|null);

        /** GameVer MinResVer */
        MinResVer?: (number|null);

        /** GameVer LatestResVer */
        LatestResVer?: (number|null);
    }

    /** Represents a GameVer. */
    class GameVer implements IGameVer {

        /**
         * Constructs a new GameVer.
         * @param [p] Properties to set
         */
        constructor(p?: login.IGameVer);

        /** GameVer GameId. */
        public GameId: number;

        /** GameVer MinApkVer. */
        public MinApkVer: number;

        /** GameVer LatestApkVer. */
        public LatestApkVer: number;

        /** GameVer MinResVer. */
        public MinResVer: number;

        /** GameVer LatestResVer. */
        public LatestResVer: number;

        /**
         * Encodes the specified GameVer message. Does not implicitly {@link login.GameVer.verify|verify} messages.
         * @param m GameVer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.IGameVer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameVer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameVer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.GameVer;
    }

    /** Properties of a GameConfig. */
    interface IGameConfig {

        /** GameConfig GameId */
        GameId?: (number|null);

        /** GameConfig LogicId */
        LogicId?: (number|null);

        /** GameConfig GameMode */
        GameMode?: (number|null);

        /** GameConfig State */
        State?: (boolean|null);

        /** GameConfig LimitCoin */
        LimitCoin?: (number|null);

        /** GameConfig MaxCoinLimit */
        MaxCoinLimit?: (number|null);

        /** GameConfig BaseScore */
        BaseScore?: (number|null);

        /** GameConfig OtherIntParams */
        OtherIntParams?: (number[]|null);

        /** GameConfig BetScore */
        BetScore?: (number|null);

        /** GameConfig MaxBetCoin */
        MaxBetCoin?: (number[]|null);

        /** GameConfig MatchMode */
        MatchMode?: (number|null);

        /** GameConfig LotteryCfg */
        LotteryCfg?: (string|null);

        /** GameConfig LotteryCoin */
        LotteryCoin?: (number|Long|null);
    }

    /** Represents a GameConfig. */
    class GameConfig implements IGameConfig {

        /**
         * Constructs a new GameConfig.
         * @param [p] Properties to set
         */
        constructor(p?: login.IGameConfig);

        /** GameConfig GameId. */
        public GameId: number;

        /** GameConfig LogicId. */
        public LogicId: number;

        /** GameConfig GameMode. */
        public GameMode: number;

        /** GameConfig State. */
        public State: boolean;

        /** GameConfig LimitCoin. */
        public LimitCoin: number;

        /** GameConfig MaxCoinLimit. */
        public MaxCoinLimit: number;

        /** GameConfig BaseScore. */
        public BaseScore: number;

        /** GameConfig OtherIntParams. */
        public OtherIntParams: number[];

        /** GameConfig BetScore. */
        public BetScore: number;

        /** GameConfig MaxBetCoin. */
        public MaxBetCoin: number[];

        /** GameConfig MatchMode. */
        public MatchMode: number;

        /** GameConfig LotteryCfg. */
        public LotteryCfg: string;

        /** GameConfig LotteryCoin. */
        public LotteryCoin: (number|Long);

        /**
         * Encodes the specified GameConfig message. Does not implicitly {@link login.GameConfig.verify|verify} messages.
         * @param m GameConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.IGameConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.GameConfig;
    }

    /** Properties of a LoginGameConfig. */
    interface ILoginGameConfig {

        /** LoginGameConfig LogicId */
        LogicId?: (number|null);

        /** LoginGameConfig LimitCoin */
        LimitCoin?: (number|null);

        /** LoginGameConfig MaxCoinLimit */
        MaxCoinLimit?: (number|null);

        /** LoginGameConfig BaseScore */
        BaseScore?: (number|null);

        /** LoginGameConfig OtherIntParams */
        OtherIntParams?: (number[]|null);

        /** LoginGameConfig BetScore */
        BetScore?: (number|null);

        /** LoginGameConfig MaxBetCoin */
        MaxBetCoin?: (number[]|null);

        /** LoginGameConfig MatchMode */
        MatchMode?: (number|null);

        /** LoginGameConfig LotteryCoin */
        LotteryCoin?: (number|Long|null);

        /** LoginGameConfig LotteryCfg */
        LotteryCfg?: (string|null);
    }

    /** Represents a LoginGameConfig. */
    class LoginGameConfig implements ILoginGameConfig {

        /**
         * Constructs a new LoginGameConfig.
         * @param [p] Properties to set
         */
        constructor(p?: login.ILoginGameConfig);

        /** LoginGameConfig LogicId. */
        public LogicId: number;

        /** LoginGameConfig LimitCoin. */
        public LimitCoin: number;

        /** LoginGameConfig MaxCoinLimit. */
        public MaxCoinLimit: number;

        /** LoginGameConfig BaseScore. */
        public BaseScore: number;

        /** LoginGameConfig OtherIntParams. */
        public OtherIntParams: number[];

        /** LoginGameConfig BetScore. */
        public BetScore: number;

        /** LoginGameConfig MaxBetCoin. */
        public MaxBetCoin: number[];

        /** LoginGameConfig MatchMode. */
        public MatchMode: number;

        /** LoginGameConfig LotteryCoin. */
        public LotteryCoin: (number|Long);

        /** LoginGameConfig LotteryCfg. */
        public LotteryCfg: string;

        /**
         * Encodes the specified LoginGameConfig message. Does not implicitly {@link login.LoginGameConfig.verify|verify} messages.
         * @param m LoginGameConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ILoginGameConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginGameConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LoginGameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.LoginGameConfig;
    }

    /** Properties of a LoginGameInfo. */
    interface ILoginGameInfo {

        /** LoginGameInfo GameId */
        GameId?: (number|null);

        /** LoginGameInfo LogicId */
        LogicId?: (number|null);

        /** LoginGameInfo LotteryCoin */
        LotteryCoin?: (number|Long|null);
    }

    /** Represents a LoginGameInfo. */
    class LoginGameInfo implements ILoginGameInfo {

        /**
         * Constructs a new LoginGameInfo.
         * @param [p] Properties to set
         */
        constructor(p?: login.ILoginGameInfo);

        /** LoginGameInfo GameId. */
        public GameId: number;

        /** LoginGameInfo LogicId. */
        public LogicId: number;

        /** LoginGameInfo LotteryCoin. */
        public LotteryCoin: (number|Long);

        /**
         * Encodes the specified LoginGameInfo message. Does not implicitly {@link login.LoginGameInfo.verify|verify} messages.
         * @param m LoginGameInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ILoginGameInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginGameInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LoginGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.LoginGameInfo;
    }

    /** Properties of a LoginThrGameConfig. */
    interface ILoginThrGameConfig {

        /** LoginThrGameConfig LogicId */
        LogicId?: (number|null);

        /** LoginThrGameConfig LimitCoin */
        LimitCoin?: (number|null);
    }

    /** Represents a LoginThrGameConfig. */
    class LoginThrGameConfig implements ILoginThrGameConfig {

        /**
         * Constructs a new LoginThrGameConfig.
         * @param [p] Properties to set
         */
        constructor(p?: login.ILoginThrGameConfig);

        /** LoginThrGameConfig LogicId. */
        public LogicId: number;

        /** LoginThrGameConfig LimitCoin. */
        public LimitCoin: number;

        /**
         * Encodes the specified LoginThrGameConfig message. Does not implicitly {@link login.LoginThrGameConfig.verify|verify} messages.
         * @param m LoginThrGameConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ILoginThrGameConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginThrGameConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns LoginThrGameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.LoginThrGameConfig;
    }

    /** Properties of a SCGameConfig. */
    interface ISCGameConfig {

        /** SCGameConfig GameCfg */
        GameCfg?: (login.IGameConfig[]|null);
    }

    /** Represents a SCGameConfig. */
    class SCGameConfig implements ISCGameConfig {

        /**
         * Constructs a new SCGameConfig.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCGameConfig);

        /** SCGameConfig GameCfg. */
        public GameCfg: login.IGameConfig[];

        /**
         * Encodes the specified SCGameConfig message. Does not implicitly {@link login.SCGameConfig.verify|verify} messages.
         * @param m SCGameConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCGameConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGameConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGameConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCGameConfig;
    }

    /** Properties of a SCLogin. */
    interface ISCLogin {

        /** SCLogin OpRetCode */
        OpRetCode?: (login.OpResultCode|null);

        /** SCLogin AccId */
        AccId?: (string|null);

        /** SCLogin SrvTs */
        SrvTs?: (number|Long|null);

        /** SCLogin MinApkVer */
        MinApkVer?: (number|null);

        /** SCLogin LatestApkVer */
        LatestApkVer?: (number|null);

        /** SCLogin MinResVer */
        MinResVer?: (number|null);

        /** SCLogin LatestResVer */
        LatestResVer?: (number|null);

        /** SCLogin SubGameVer */
        SubGameVer?: (login.IGameVer[]|null);

        /** SCLogin GameInfo */
        GameInfo?: (login.ILoginGameInfo[]|null);

        /** SCLogin ThrGameId */
        ThrGameId?: (number[]|null);
    }

    /** Represents a SCLogin. */
    class SCLogin implements ISCLogin {

        /**
         * Constructs a new SCLogin.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCLogin);

        /** SCLogin OpRetCode. */
        public OpRetCode: login.OpResultCode;

        /** SCLogin AccId. */
        public AccId: string;

        /** SCLogin SrvTs. */
        public SrvTs: (number|Long);

        /** SCLogin MinApkVer. */
        public MinApkVer: number;

        /** SCLogin LatestApkVer. */
        public LatestApkVer: number;

        /** SCLogin MinResVer. */
        public MinResVer: number;

        /** SCLogin LatestResVer. */
        public LatestResVer: number;

        /** SCLogin SubGameVer. */
        public SubGameVer: login.IGameVer[];

        /** SCLogin GameInfo. */
        public GameInfo: login.ILoginGameInfo[];

        /** SCLogin ThrGameId. */
        public ThrGameId: number[];

        /**
         * Encodes the specified SCLogin message. Does not implicitly {@link login.SCLogin.verify|verify} messages.
         * @param m SCLogin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCLogin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLogin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCLogin;
    }

    /** Properties of a Bulletion. */
    interface IBulletion {

        /** Bulletion Id */
        Id?: (number|null);

        /** Bulletion NoticeTitle */
        NoticeTitle?: (string|null);

        /** Bulletion NoticeContent */
        NoticeContent?: (string|null);

        /** Bulletion UpdateTime */
        UpdateTime?: (string|null);

        /** Bulletion Sort */
        Sort?: (number|null);
    }

    /** Represents a Bulletion. */
    class Bulletion implements IBulletion {

        /**
         * Constructs a new Bulletion.
         * @param [p] Properties to set
         */
        constructor(p?: login.IBulletion);

        /** Bulletion Id. */
        public Id: number;

        /** Bulletion NoticeTitle. */
        public NoticeTitle: string;

        /** Bulletion NoticeContent. */
        public NoticeContent: string;

        /** Bulletion UpdateTime. */
        public UpdateTime: string;

        /** Bulletion Sort. */
        public Sort: number;

        /**
         * Encodes the specified Bulletion message. Does not implicitly {@link login.Bulletion.verify|verify} messages.
         * @param m Bulletion message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.IBulletion, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bulletion message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Bulletion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.Bulletion;
    }

    /** Properties of a SCBulletionInfo. */
    interface ISCBulletionInfo {

        /** SCBulletionInfo id */
        id?: (number|null);

        /** SCBulletionInfo bulletionList */
        bulletionList?: (login.IBulletion[]|null);
    }

    /** Represents a SCBulletionInfo. */
    class SCBulletionInfo implements ISCBulletionInfo {

        /**
         * Constructs a new SCBulletionInfo.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCBulletionInfo);

        /** SCBulletionInfo id. */
        public id: number;

        /** SCBulletionInfo bulletionList. */
        public bulletionList: login.IBulletion[];

        /**
         * Encodes the specified SCBulletionInfo message. Does not implicitly {@link login.SCBulletionInfo.verify|verify} messages.
         * @param m SCBulletionInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCBulletionInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCBulletionInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCBulletionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCBulletionInfo;
    }

    /** Properties of a CSBulletionInfo. */
    interface ICSBulletionInfo {

        /** CSBulletionInfo PlatformTag */
        PlatformTag?: (string|null);
    }

    /** Represents a CSBulletionInfo. */
    class CSBulletionInfo implements ICSBulletionInfo {

        /**
         * Constructs a new CSBulletionInfo.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSBulletionInfo);

        /** CSBulletionInfo PlatformTag. */
        public PlatformTag: string;

        /**
         * Encodes the specified CSBulletionInfo message. Does not implicitly {@link login.CSBulletionInfo.verify|verify} messages.
         * @param m CSBulletionInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSBulletionInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSBulletionInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSBulletionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSBulletionInfo;
    }

    /** Properties of a Customer. */
    interface ICustomer {

        /** Customer id */
        id?: (number|null);

        /** Customer weixinAccount */
        weixinAccount?: (string|null);

        /** Customer headurl */
        headurl?: (string|null);

        /** Customer nickname */
        nickname?: (string|null);

        /** Customer ext */
        ext?: (string|null);

        /** Customer qqAccount */
        qqAccount?: (string|null);
    }

    /** Represents a Customer. */
    class Customer implements ICustomer {

        /**
         * Constructs a new Customer.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICustomer);

        /** Customer id. */
        public id: number;

        /** Customer weixinAccount. */
        public weixinAccount: string;

        /** Customer headurl. */
        public headurl: string;

        /** Customer nickname. */
        public nickname: string;

        /** Customer ext. */
        public ext: string;

        /** Customer qqAccount. */
        public qqAccount: string;

        /**
         * Encodes the specified Customer message. Does not implicitly {@link login.Customer.verify|verify} messages.
         * @param m Customer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICustomer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Customer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Customer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.Customer;
    }

    /** Properties of a SCCustomerInfoList. */
    interface ISCCustomerInfoList {

        /** SCCustomerInfoList customerList */
        customerList?: (login.ICustomer[]|null);
    }

    /** Represents a SCCustomerInfoList. */
    class SCCustomerInfoList implements ISCCustomerInfoList {

        /**
         * Constructs a new SCCustomerInfoList.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCCustomerInfoList);

        /** SCCustomerInfoList customerList. */
        public customerList: login.ICustomer[];

        /**
         * Encodes the specified SCCustomerInfoList message. Does not implicitly {@link login.SCCustomerInfoList.verify|verify} messages.
         * @param m SCCustomerInfoList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCCustomerInfoList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCustomerInfoList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCustomerInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCCustomerInfoList;
    }

    /** Properties of a CSCustomerInfoList. */
    interface ICSCustomerInfoList {
    }

    /** Represents a CSCustomerInfoList. */
    class CSCustomerInfoList implements ICSCustomerInfoList {

        /**
         * Constructs a new CSCustomerInfoList.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSCustomerInfoList);

        /**
         * Encodes the specified CSCustomerInfoList message. Does not implicitly {@link login.CSCustomerInfoList.verify|verify} messages.
         * @param m CSCustomerInfoList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSCustomerInfoList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCustomerInfoList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCustomerInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSCustomerInfoList;
    }

    /** Properties of a CSLogout. */
    interface ICSLogout {

        /** CSLogout Type */
        Type?: (number|null);

        /** CSLogout Sid */
        Sid?: (number|Long|null);
    }

    /** Represents a CSLogout. */
    class CSLogout implements ICSLogout {

        /**
         * Constructs a new CSLogout.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSLogout);

        /** CSLogout Type. */
        public Type: number;

        /** CSLogout Sid. */
        public Sid: (number|Long);

        /**
         * Encodes the specified CSLogout message. Does not implicitly {@link login.CSLogout.verify|verify} messages.
         * @param m CSLogout message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSLogout, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSLogout message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSLogout;
    }

    /** Properties of a SCLogout. */
    interface ISCLogout {

        /** SCLogout OpRetCode */
        OpRetCode?: (login.OpResultCode|null);

        /** SCLogout Type */
        Type?: (number|null);
    }

    /** Represents a SCLogout. */
    class SCLogout implements ISCLogout {

        /**
         * Constructs a new SCLogout.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCLogout);

        /** SCLogout OpRetCode. */
        public OpRetCode: login.OpResultCode;

        /** SCLogout Type. */
        public Type: number;

        /**
         * Encodes the specified SCLogout message. Does not implicitly {@link login.SCLogout.verify|verify} messages.
         * @param m SCLogout message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCLogout, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCLogout message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCLogout;
    }

    /** Properties of a CSCustomService. */
    interface ICSCustomService {
    }

    /** Represents a CSCustomService. */
    class CSCustomService implements ICSCustomService {

        /**
         * Constructs a new CSCustomService.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSCustomService);

        /**
         * Encodes the specified CSCustomService message. Does not implicitly {@link login.CSCustomService.verify|verify} messages.
         * @param m CSCustomService message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSCustomService, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCustomService message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCustomService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSCustomService;
    }

    /** Properties of a SCCustomService. */
    interface ISCCustomService {

        /** SCCustomService Url */
        Url?: (string|null);

        /** SCCustomService OpenFlag */
        OpenFlag?: (number|null);

        /** SCCustomService CustomType */
        CustomType?: (number|null);
    }

    /** Represents a SCCustomService. */
    class SCCustomService implements ISCCustomService {

        /**
         * Constructs a new SCCustomService.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCCustomService);

        /** SCCustomService Url. */
        public Url: string;

        /** SCCustomService OpenFlag. */
        public OpenFlag: number;

        /** SCCustomService CustomType. */
        public CustomType: number;

        /**
         * Encodes the specified SCCustomService message. Does not implicitly {@link login.SCCustomService.verify|verify} messages.
         * @param m SCCustomService message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCCustomService, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCustomService message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCustomService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCCustomService;
    }

    /** SSDisconnectTypeCode enum. */
    enum SSDisconnectTypeCode {
        SSDTC_ZERO = 0,
        SSDTC_Repeate = 1,
        SSDTC_Freeze = 2,
        SSDTC_ServerError = 3,
        SSDTC_ServerMaintenance = 4,
        SSDTC_ResVerLow = 5,
        SSDTC_GameVerLow = 6,
        SSDTC_BlackList = 7
    }

    /** Properties of a SSDisconnect. */
    interface ISSDisconnect {

        /** SSDisconnect SessionId */
        SessionId?: (number|Long|null);

        /** SSDisconnect Type */
        Type?: (number|null);
    }

    /** Represents a SSDisconnect. */
    class SSDisconnect implements ISSDisconnect {

        /**
         * Constructs a new SSDisconnect.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISSDisconnect);

        /** SSDisconnect SessionId. */
        public SessionId: (number|Long);

        /** SSDisconnect Type. */
        public Type: number;

        /**
         * Encodes the specified SSDisconnect message. Does not implicitly {@link login.SSDisconnect.verify|verify} messages.
         * @param m SSDisconnect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISSDisconnect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SSDisconnect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SSDisconnect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SSDisconnect;
    }

    /** Properties of a CSPlatFormConfig. */
    interface ICSPlatFormConfig {

        /** CSPlatFormConfig PlatformTag */
        PlatformTag?: (string|null);
    }

    /** Represents a CSPlatFormConfig. */
    class CSPlatFormConfig implements ICSPlatFormConfig {

        /**
         * Constructs a new CSPlatFormConfig.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSPlatFormConfig);

        /** CSPlatFormConfig PlatformTag. */
        public PlatformTag: string;

        /**
         * Encodes the specified CSPlatFormConfig message. Does not implicitly {@link login.CSPlatFormConfig.verify|verify} messages.
         * @param m CSPlatFormConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSPlatFormConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPlatFormConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPlatFormConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSPlatFormConfig;
    }

    /** Properties of a RebateCfg. */
    interface IRebateCfg {

        /** RebateCfg RebateSwitch */
        RebateSwitch?: (boolean|null);

        /** RebateCfg ReceiveMode */
        ReceiveMode?: (number|null);

        /** RebateCfg NotGiveOverdue */
        NotGiveOverdue?: (number|null);
    }

    /** Represents a RebateCfg. */
    class RebateCfg implements IRebateCfg {

        /**
         * Constructs a new RebateCfg.
         * @param [p] Properties to set
         */
        constructor(p?: login.IRebateCfg);

        /** RebateCfg RebateSwitch. */
        public RebateSwitch: boolean;

        /** RebateCfg ReceiveMode. */
        public ReceiveMode: number;

        /** RebateCfg NotGiveOverdue. */
        public NotGiveOverdue: number;

        /**
         * Encodes the specified RebateCfg message. Does not implicitly {@link login.RebateCfg.verify|verify} messages.
         * @param m RebateCfg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.IRebateCfg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RebateCfg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RebateCfg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.RebateCfg;
    }

    /** Properties of a ClubCfg. */
    interface IClubCfg {

        /** ClubCfg IsOpenClub */
        IsOpenClub?: (boolean|null);

        /** ClubCfg CreationCoin */
        CreationCoin?: (number|Long|null);

        /** ClubCfg IncreaseCoin */
        IncreaseCoin?: (number|Long|null);

        /** ClubCfg ClubInitPlayerNum */
        ClubInitPlayerNum?: (number|null);

        /** ClubCfg IncreasePlayerNum */
        IncreasePlayerNum?: (number|null);

        /** ClubCfg CreateClubCheckByManual */
        CreateClubCheckByManual?: (boolean|null);

        /** ClubCfg EditClubNoticeByManual */
        EditClubNoticeByManual?: (boolean|null);

        /** ClubCfg CreateRoomAmount */
        CreateRoomAmount?: (number|Long|null);

        /** ClubCfg GiveCoinRate */
        GiveCoinRate?: ((number|Long)[]|null);
    }

    /** Represents a ClubCfg. */
    class ClubCfg implements IClubCfg {

        /**
         * Constructs a new ClubCfg.
         * @param [p] Properties to set
         */
        constructor(p?: login.IClubCfg);

        /** ClubCfg IsOpenClub. */
        public IsOpenClub: boolean;

        /** ClubCfg CreationCoin. */
        public CreationCoin: (number|Long);

        /** ClubCfg IncreaseCoin. */
        public IncreaseCoin: (number|Long);

        /** ClubCfg ClubInitPlayerNum. */
        public ClubInitPlayerNum: number;

        /** ClubCfg IncreasePlayerNum. */
        public IncreasePlayerNum: number;

        /** ClubCfg CreateClubCheckByManual. */
        public CreateClubCheckByManual: boolean;

        /** ClubCfg EditClubNoticeByManual. */
        public EditClubNoticeByManual: boolean;

        /** ClubCfg CreateRoomAmount. */
        public CreateRoomAmount: (number|Long);

        /** ClubCfg GiveCoinRate. */
        public GiveCoinRate: (number|Long)[];

        /**
         * Encodes the specified ClubCfg message. Does not implicitly {@link login.ClubCfg.verify|verify} messages.
         * @param m ClubCfg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.IClubCfg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClubCfg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ClubCfg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.ClubCfg;
    }

    /** Properties of a SCPlatFormConfig. */
    interface ISCPlatFormConfig {

        /** SCPlatFormConfig Platform */
        Platform?: (string|null);

        /** SCPlatFormConfig OpRetCode */
        OpRetCode?: (login.OpResultCode|null);

        /** SCPlatFormConfig UpgradeAccountGiveCoin */
        UpgradeAccountGiveCoin?: (number|null);

        /** SCPlatFormConfig ExchangeMin */
        ExchangeMin?: (number|null);

        /** SCPlatFormConfig ExchangeLimit */
        ExchangeLimit?: (number|null);

        /** SCPlatFormConfig ExchangeTax */
        ExchangeTax?: (number|null);

        /** SCPlatFormConfig VipRange */
        VipRange?: (number[]|null);

        /** SCPlatFormConfig OtherParams */
        OtherParams?: (string|null);

        /** SCPlatFormConfig ExchangeFlow */
        ExchangeFlow?: (number|null);

        /** SCPlatFormConfig SpreadConfig */
        SpreadConfig?: (number|null);

        /** SCPlatFormConfig CustomService */
        CustomService?: (string|null);

        /** SCPlatFormConfig Rebate */
        Rebate?: (login.IRebateCfg|null);

        /** SCPlatFormConfig Club */
        Club?: (login.IClubCfg|null);

        /** SCPlatFormConfig ExchangeBankMax */
        ExchangeBankMax?: (number|null);

        /** SCPlatFormConfig ExchangeAlipayMax */
        ExchangeAlipayMax?: (number|null);

        /** SCPlatFormConfig ExchangeMultiple */
        ExchangeMultiple?: (number|null);
    }

    /** Represents a SCPlatFormConfig. */
    class SCPlatFormConfig implements ISCPlatFormConfig {

        /**
         * Constructs a new SCPlatFormConfig.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCPlatFormConfig);

        /** SCPlatFormConfig Platform. */
        public Platform: string;

        /** SCPlatFormConfig OpRetCode. */
        public OpRetCode: login.OpResultCode;

        /** SCPlatFormConfig UpgradeAccountGiveCoin. */
        public UpgradeAccountGiveCoin: number;

        /** SCPlatFormConfig ExchangeMin. */
        public ExchangeMin: number;

        /** SCPlatFormConfig ExchangeLimit. */
        public ExchangeLimit: number;

        /** SCPlatFormConfig ExchangeTax. */
        public ExchangeTax: number;

        /** SCPlatFormConfig VipRange. */
        public VipRange: number[];

        /** SCPlatFormConfig OtherParams. */
        public OtherParams: string;

        /** SCPlatFormConfig ExchangeFlow. */
        public ExchangeFlow: number;

        /** SCPlatFormConfig SpreadConfig. */
        public SpreadConfig: number;

        /** SCPlatFormConfig CustomService. */
        public CustomService: string;

        /** SCPlatFormConfig Rebate. */
        public Rebate?: (login.IRebateCfg|null);

        /** SCPlatFormConfig Club. */
        public Club?: (login.IClubCfg|null);

        /** SCPlatFormConfig ExchangeBankMax. */
        public ExchangeBankMax: number;

        /** SCPlatFormConfig ExchangeAlipayMax. */
        public ExchangeAlipayMax: number;

        /** SCPlatFormConfig ExchangeMultiple. */
        public ExchangeMultiple: number;

        /**
         * Encodes the specified SCPlatFormConfig message. Does not implicitly {@link login.SCPlatFormConfig.verify|verify} messages.
         * @param m SCPlatFormConfig message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCPlatFormConfig, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlatFormConfig message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlatFormConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCPlatFormConfig;
    }

    /** Properties of a SCActivityCheck. */
    interface ISCActivityCheck {

        /** SCActivityCheck OpRetCode */
        OpRetCode?: (login.OpResultCode|null);
    }

    /** Represents a SCActivityCheck. */
    class SCActivityCheck implements ISCActivityCheck {

        /**
         * Constructs a new SCActivityCheck.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCActivityCheck);

        /** SCActivityCheck OpRetCode. */
        public OpRetCode: login.OpResultCode;

        /**
         * Encodes the specified SCActivityCheck message. Does not implicitly {@link login.SCActivityCheck.verify|verify} messages.
         * @param m SCActivityCheck message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCActivityCheck, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCActivityCheck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCActivityCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCActivityCheck;
    }

    /** Properties of a CSVerifyType. */
    interface ICSVerifyType {

        /** CSVerifyType PlatformTag */
        PlatformTag?: (string|null);

        /** CSVerifyType Tel */
        Tel?: (string|null);
    }

    /** Represents a CSVerifyType. */
    class CSVerifyType implements ICSVerifyType {

        /**
         * Constructs a new CSVerifyType.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSVerifyType);

        /** CSVerifyType PlatformTag. */
        public PlatformTag: string;

        /** CSVerifyType Tel. */
        public Tel: string;

        /**
         * Encodes the specified CSVerifyType message. Does not implicitly {@link login.CSVerifyType.verify|verify} messages.
         * @param m CSVerifyType message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSVerifyType, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSVerifyType message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSVerifyType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSVerifyType;
    }

    /** Properties of a SCVerifyType. */
    interface ISCVerifyType {

        /** SCVerifyType OpRetCode */
        OpRetCode?: (login.OpResultCode|null);

        /** SCVerifyType VerifyType */
        VerifyType?: (number|null);
    }

    /** Represents a SCVerifyType. */
    class SCVerifyType implements ISCVerifyType {

        /**
         * Constructs a new SCVerifyType.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCVerifyType);

        /** SCVerifyType OpRetCode. */
        public OpRetCode: login.OpResultCode;

        /** SCVerifyType VerifyType. */
        public VerifyType: number;

        /**
         * Encodes the specified SCVerifyType message. Does not implicitly {@link login.SCVerifyType.verify|verify} messages.
         * @param m SCVerifyType message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCVerifyType, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCVerifyType message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCVerifyType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCVerifyType;
    }

    /** Properties of a CSRegisterVerifyType. */
    interface ICSRegisterVerifyType {

        /** CSRegisterVerifyType PlatformTag */
        PlatformTag?: (string|null);
    }

    /** Represents a CSRegisterVerifyType. */
    class CSRegisterVerifyType implements ICSRegisterVerifyType {

        /**
         * Constructs a new CSRegisterVerifyType.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSRegisterVerifyType);

        /** CSRegisterVerifyType PlatformTag. */
        public PlatformTag: string;

        /**
         * Encodes the specified CSRegisterVerifyType message. Does not implicitly {@link login.CSRegisterVerifyType.verify|verify} messages.
         * @param m CSRegisterVerifyType message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSRegisterVerifyType, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSRegisterVerifyType message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSRegisterVerifyType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSRegisterVerifyType;
    }

    /** Properties of a SCRegisterVerifyType. */
    interface ISCRegisterVerifyType {

        /** SCRegisterVerifyType OpRetCode */
        OpRetCode?: (login.OpResultCode|null);

        /** SCRegisterVerifyType VerifyType */
        VerifyType?: (number|null);
    }

    /** Represents a SCRegisterVerifyType. */
    class SCRegisterVerifyType implements ISCRegisterVerifyType {

        /**
         * Constructs a new SCRegisterVerifyType.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCRegisterVerifyType);

        /** SCRegisterVerifyType OpRetCode. */
        public OpRetCode: login.OpResultCode;

        /** SCRegisterVerifyType VerifyType. */
        public VerifyType: number;

        /**
         * Encodes the specified SCRegisterVerifyType message. Does not implicitly {@link login.SCRegisterVerifyType.verify|verify} messages.
         * @param m SCRegisterVerifyType message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCRegisterVerifyType, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRegisterVerifyType message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRegisterVerifyType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCRegisterVerifyType;
    }

    /** Properties of a SCSyncGameFree. */
    interface ISCSyncGameFree {

        /** SCSyncGameFree Data */
        Data?: (login.IGameConfig[]|null);
    }

    /** Represents a SCSyncGameFree. */
    class SCSyncGameFree implements ISCSyncGameFree {

        /**
         * Constructs a new SCSyncGameFree.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCSyncGameFree);

        /** SCSyncGameFree Data. */
        public Data: login.IGameConfig[];

        /**
         * Encodes the specified SCSyncGameFree message. Does not implicitly {@link login.SCSyncGameFree.verify|verify} messages.
         * @param m SCSyncGameFree message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCSyncGameFree, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSyncGameFree message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSyncGameFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCSyncGameFree;
    }

    /** Properties of a SCActSwitchCfg. */
    interface ISCActSwitchCfg {

        /** SCActSwitchCfg ActSwitchCfg */
        ActSwitchCfg?: (number[]|null);
    }

    /** Represents a SCActSwitchCfg. */
    class SCActSwitchCfg implements ISCActSwitchCfg {

        /**
         * Constructs a new SCActSwitchCfg.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCActSwitchCfg);

        /** SCActSwitchCfg ActSwitchCfg. */
        public ActSwitchCfg: number[];

        /**
         * Encodes the specified SCActSwitchCfg message. Does not implicitly {@link login.SCActSwitchCfg.verify|verify} messages.
         * @param m SCActSwitchCfg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCActSwitchCfg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCActSwitchCfg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCActSwitchCfg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCActSwitchCfg;
    }

    /** Properties of a CSGetThrGameCfg. */
    interface ICSGetThrGameCfg {

        /** CSGetThrGameCfg Platform */
        Platform?: (string|null);

        /** CSGetThrGameCfg Channel */
        Channel?: (string|null);
    }

    /** Represents a CSGetThrGameCfg. */
    class CSGetThrGameCfg implements ICSGetThrGameCfg {

        /**
         * Constructs a new CSGetThrGameCfg.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSGetThrGameCfg);

        /** CSGetThrGameCfg Platform. */
        public Platform: string;

        /** CSGetThrGameCfg Channel. */
        public Channel: string;

        /**
         * Encodes the specified CSGetThrGameCfg message. Does not implicitly {@link login.CSGetThrGameCfg.verify|verify} messages.
         * @param m CSGetThrGameCfg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSGetThrGameCfg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetThrGameCfg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetThrGameCfg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSGetThrGameCfg;
    }

    /** Properties of a SCGetThrGameCfg. */
    interface ISCGetThrGameCfg {

        /** SCGetThrGameCfg ThrGameCfg */
        ThrGameCfg?: (login.ILoginThrGameConfig[]|null);
    }

    /** Represents a SCGetThrGameCfg. */
    class SCGetThrGameCfg implements ISCGetThrGameCfg {

        /**
         * Constructs a new SCGetThrGameCfg.
         * @param [p] Properties to set
         */
        constructor(p?: login.ISCGetThrGameCfg);

        /** SCGetThrGameCfg ThrGameCfg. */
        public ThrGameCfg: login.ILoginThrGameConfig[];

        /**
         * Encodes the specified SCGetThrGameCfg message. Does not implicitly {@link login.SCGetThrGameCfg.verify|verify} messages.
         * @param m SCGetThrGameCfg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ISCGetThrGameCfg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetThrGameCfg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetThrGameCfg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.SCGetThrGameCfg;
    }

    /** Properties of a CSAccountInvalid. */
    interface ICSAccountInvalid {

        /** CSAccountInvalid Acc */
        Acc?: (string|null);
    }

    /** Represents a CSAccountInvalid. */
    class CSAccountInvalid implements ICSAccountInvalid {

        /**
         * Constructs a new CSAccountInvalid.
         * @param [p] Properties to set
         */
        constructor(p?: login.ICSAccountInvalid);

        /** CSAccountInvalid Acc. */
        public Acc: string;

        /**
         * Encodes the specified CSAccountInvalid message. Does not implicitly {@link login.CSAccountInvalid.verify|verify} messages.
         * @param m CSAccountInvalid message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: login.ICSAccountInvalid, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSAccountInvalid message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSAccountInvalid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): login.CSAccountInvalid;
    }
}
