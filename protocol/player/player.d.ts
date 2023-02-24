// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace player. */
export namespace player {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1,
        OPRC_LoginFailed = 1000,
        OPRC_Login_NameSame = 1007,
        OPRC_Login_CreateFailed = 1009,
        OPRC_NotLogin = 1013,
        OPRC_YourResVerIsLow = 1044,
        OPRC_YourAppVerIsLow = 1045,
        OPRC_CoinNotEnough = 1056,
        OPRC_NickIsNull = 1060,
        OPRC_NickIsExist = 1061,
        OPRC_Frequently = 1062,
        OPRC_IconError = 1063,
        OPRC_SexError = 1064,
        OPRC_TelError = 1065,
        OPRC_UserNameError = 1066,
        OPRC_VerificationCodeError = 1067,
        OPRC_TelIsExist = 1068,
        OPRC_SafeBoxPasswordError = 1070,
        OPRC_TelIsRegister = 1071,
        OPRC_InBlackList = 1072,
        OPRC_NickIsTooLen = 1073,
        OPRC_PasswordEqual = 1074,
        OPRC_NickIsIllegal = 1083,
        OPRC_HadSpreadInviterId = 1090,
        OPRC_InviterIdNotExist = 1091,
        OPRC_SpreadBindFailed = 1092,
        OPRC_InviterNoBind = 1093,
        OPRC_SpreadBindClosedLoop = 1094,
        OPRC_ImageVerifyCodeFailed = 1095,
        OPRC_NickIsCantRename = 1104,
        OPRC_NoPromotor = 1108,
        OPRC_NoPlatform = 1109,
        OPRC_CantUserBind = 1110,
        OPRC_PromoterHasBind = 1111,
        OPRC_PlatformNoPromoter = 1112,
        OPRC_UpgradeAccount_PasswordIllegal = 2003,
        OPRC_BindAlipay_AccountEmpty = 2005,
        OPRC_BindAlipay_AccNameEmpty = 2006,
        OPRC_Safebox_PasswordIllegal = 2007,
        OPRC_BindBank_NameEmpty = 2008,
        OPRC_BindBank_AccountEmpty = 2009,
        OPRC_BindBank_AccNameEmpty = 2010,
        OPRC_BindBank_NameIllegal = 2011,
        OPRC_BindBank_AccountIllegal = 2012,
        OPRC_BindBank_AccNameIllegal = 2013,
        OPRC_BindAlipay_AccountIllegal = 2014,
        OPRC_BindAlipay_AccNameIllegal = 2015,
        OPRC_BindAlipay_PlatformError = 2016,
        OPRC_BindBank_PlatformError = 2017,
        OPRC_Account_IP_TooManyReg = 2018,
        OPRC_BindBank_CountLimit = 2019,
        OPRC_BindAlipay_CountLimit = 2020,
        OPRC_BankAndAli_NotSame = 2021,
        OPRC_BindBankAlipay_NameCountLimit = 2022,
        OPRC_Jyb_Receive = 2100,
        OPRC_Jyb_CodeExist = 2101,
        OPRC_Jyb_TimeErr = 2102,
        OPRC_Jyb_CodeErr = 2103,
        OPRC_Hundred_YouHadBetCannotLeave = 7001,
        OPRC_Hundred_YouHadBankerCannotLeave = 7002
    }

    /** PlayerPacketID enum. */
    enum PlayerPacketID {
        PACKET_PLAYERPACKET_ZERO = 0,
        PACKET_CS_PLAYERDATA = 2100,
        PACKET_SC_PLAYERDATA = 2101,
        PACKET_SC_DAYCHANGE = 2102,
        PACKET_CS_THIRDPLAYERDATA = 2103,
        PACKET_SC_THIRDPLAYERDATA = 2104,
        PACKET_SC_PLAYERDATAUPDATE = 2105,
        PACKET_SC_PLAYERDATAEX = 2106,
        PACKET_CS_PMCMD = 2107,
        PACKET_CS_ROBOTCHGDATA = 2108,
        PACKET_SC_CHANGEWECHATNUMBER = 2109,
        PACKET_CS_CHANGEWECHATNUMBER = 2110,
        PACKET_CS_AUTHENID = 2111,
        PACKET_SC_AUTHENID = 2112,
        PACKET_CS_JOINGAME = 2113,
        PACKET_SC_JOINGAME = 2114,
        PACKET_CS_SPREADBIND = 2115,
        PACKET_SC_SPREADBIND = 2116,
        PACKET_CS_GENCUSTOMTOKEN = 2119,
        PACKET_SC_GENCUSTOMTOKEN = 2120,
        PACKET_SC_CUSTOMNEWMSG = 2121,
        PACKET_CS_CUSTOMNEWMSGACK = 2122,
        PACKET_SC_SRVMSG = 2123,
        PACKET_CS_FISHJACKPOTCOIN = 2124,
        PACKET_SC_FISHJACKPOTCOIN = 2125,
        PACKET_CS_FISHJACKPOTDATA = 2126,
        PACKET_SC_FISHJACKPOTDATA = 2127,
        PACKET_SC_NICEIDREBIND = 2128,
        PACKET_CS_BINDPROMOTER = 2129,
        PACKET_SC_BINDPROMOTER = 2130,
        PACKET_SC_BINDPROMOTERSTATE = 2131,
        PACKET_CS_GetSpreadLWIsOpen = 2132,
        PACKET_SC_GetSpreadLWIsOpen = 2133,
        PACKET_SC_PayAct_State = 2134,
        PACKET_CS_CHANGENICK = 2140,
        PACKET_SC_CHANGENICK = 2141,
        PACKET_CS_CHANGEICON = 2142,
        PACKET_SC_CHANGEICON = 2143,
        PACKET_CS_CHANGESEX = 2144,
        PACKET_SC_CHANGESEX = 2145,
        PACKET_CS_UPGRADEACCOUNT = 2146,
        PACKET_SC_UPGRADEACCOUNT = 2147,
        PACKET_CS_BINDALIPAY = 2148,
        PACKET_SC_BINDALIPAY = 2149,
        PACKET_CS_BINDBANK = 2150,
        PACKET_SC_BINDBANK = 2151,
        PACKET_CS_PLAYEROPCOIN = 2152,
        PACKET_SC_PLAYEROPCOIN = 2153,
        PACKET_CS_CHANGEPASSWORD = 2154,
        PACKET_SC_CHANGEPASSWORD = 2155,
        PACKET_CS_VERIFICATIONCODE = 2156,
        PACKET_SC_VERIFICATIONCODE = 2157,
        PACKET_CS_GETGAMECOINLOG = 2158,
        PACKET_SC_GETGAMECOINLOG = 2159,
        PACKET_CS_GETSAFEBOXCOINLOG = 2160,
        PACKET_SC_GETSAFEBOXCOINLOG = 2161,
        PACKET_CS_REGISTER = 2162,
        PACKET_SC_REGISTER = 2163,
        PACKET_CS_HEADOUTLINE = 2164,
        PACKET_SC_HEADOUTLINE = 2165,
        PACKET_CS_INVITECODE = 2166,
        PACKET_SC_INVITECODE = 2167,
        PACKET_CS_WEBAPI_PLAYERPASS = 2168,
        PACKET_SC_WEBAPI_PLAYERPASS = 2169,
        PACKET_CS_WEBAPI_SYSTEMPASS = 2170,
        PACKET_SC_WEBAPI_SYSTEMPASS = 2171,
        PACKET_CS_GETIMAGEVERIFYCODE = 2172,
        PACKET_SC_GETIMAGEVERIFYCODE = 2173,
        PACKET_CS_GETSLIDERVERIFYCODE = 2174,
        PACKET_SC_GETSLIDERVERIFYCODE = 2175,
        PACKET_CS_IOSINSTALLSTABLE = 2176,
        PACKET_SC_IOSINSTALLSTABLE = 2177,
        PACKET_CS_QUERYPLAYER = 2178,
        PACKET_SC_QUERYPLAYER = 2179,
        PACKET_CS_GETDATALOG = 2180,
        PACKET_SC_GETDATALOG = 2181,
        PACKET_SC_PLAYERRECHARGEANSWER = 2182,
        PACKET_SC_PLAYERFLAG = 2183,
        PACKET_SC_PLAYERCOINCHANGE = 2184,
        PACKET_SC_TRUSTEESHIPTIPS = 2185,
        PACKET_ALL_SETTING = 2186,
        PACKET_SCGAMEEXDROPITEMS = 2187,
        PACKET_CS_VIPBUY = 2188,
        PACKET_SC_VIPBUY = 2189,
        PACKET_CS_DRAWVIPGIFT = 2190,
        PACKET_SC_DRAWVIPGIFT = 2191,
        PACKET_CS_VIPINFO = 2192,
        PACKET_SC_VIPINFO = 2193
    }

    /** Properties of a CSPlayerData. */
    interface ICSPlayerData {

        /** CSPlayerData AccId */
        AccId?: (string|null);

        /** CSPlayerData Params */
        Params?: (string|null);

        /** CSPlayerData TimeStamp */
        TimeStamp?: (number|null);

        /** CSPlayerData DeviceInfo */
        DeviceInfo?: (string|null);

        /** CSPlayerData PlatformTag */
        PlatformTag?: (string|null);

        /** CSPlayerData DeviceId */
        DeviceId?: (string|null);
    }

    /** Represents a CSPlayerData. */
    class CSPlayerData implements ICSPlayerData {

        /**
         * Constructs a new CSPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSPlayerData);

        /** CSPlayerData AccId. */
        public AccId: string;

        /** CSPlayerData Params. */
        public Params: string;

        /** CSPlayerData TimeStamp. */
        public TimeStamp: number;

        /** CSPlayerData DeviceInfo. */
        public DeviceInfo: string;

        /** CSPlayerData PlatformTag. */
        public PlatformTag: string;

        /** CSPlayerData DeviceId. */
        public DeviceId: string;

        /**
         * Encodes the specified CSPlayerData message. Does not implicitly {@link player.CSPlayerData.verify|verify} messages.
         * @param m CSPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSPlayerData;
    }

    /** Properties of a PlayerData. */
    interface IPlayerData {

        /** PlayerData AccId */
        AccId?: (string|null);

        /** PlayerData Platform */
        Platform?: (string|null);

        /** PlayerData Channel */
        Channel?: (string|null);

        /** PlayerData Name */
        Name?: (string|null);

        /** PlayerData SnId */
        SnId?: (number|null);

        /** PlayerData Head */
        Head?: (number|null);

        /** PlayerData Sex */
        Sex?: (number|null);

        /** PlayerData Coin */
        Coin?: (number|Long|null);

        /** PlayerData SafeBoxCoin */
        SafeBoxCoin?: (number|Long|null);

        /** PlayerData Tel */
        Tel?: (string|null);

        /** PlayerData InviterId */
        InviterId?: (number|null);

        /** PlayerData AlipayAccount */
        AlipayAccount?: (string|null);

        /** PlayerData AlipayAccName */
        AlipayAccName?: (string|null);

        /** PlayerData Bank */
        Bank?: (string|null);

        /** PlayerData BankAccount */
        BankAccount?: (string|null);

        /** PlayerData BankAccName */
        BankAccName?: (string|null);

        /** PlayerData GMLevel */
        GMLevel?: (number|null);

        /** PlayerData SpecailFlag */
        SpecailFlag?: (number|null);

        /** PlayerData VIP */
        VIP?: (number|null);

        /** PlayerData SafeBoxIsExist */
        SafeBoxIsExist?: (number|null);

        /** PlayerData HeadOutLine */
        HeadOutLine?: (number|null);

        /** PlayerData CoinPayTotal */
        CoinPayTotal?: (number|Long|null);

        /** PlayerData CreateTs */
        CreateTs?: (number|Long|null);

        /** PlayerData Promoter */
        Promoter?: (string|null);

        /** PlayerData TotalConvertibleFlow */
        TotalConvertibleFlow?: (number|Long|null);

        /** PlayerData CanExchangeCoin */
        CanExchangeCoin?: (number|Long|null);

        /** PlayerData LackExchangeCoin */
        LackExchangeCoin?: (number|Long|null);

        /** PlayerData ExchangeType */
        ExchangeType?: (number|Long|null);

        /** PlayerData ClubCoin */
        ClubCoin?: (number|Long|null);

        /** PlayerData Ticket */
        Ticket?: (number|Long|null);

        /** PlayerData Grade */
        Grade?: (number|Long|null);

        /** PlayerData Diamond */
        Diamond?: (number|Long|null);

        /** PlayerData UseRoleId */
        UseRoleId?: (number|null);

        /** PlayerData UsePetId */
        UsePetId?: (number|null);

        /** PlayerData VCoin */
        VCoin?: (number|Long|null);

        /** PlayerData ReliefFundTimes */
        ReliefFundTimes?: (number|null);

        /** PlayerData HeadUrl */
        HeadUrl?: (string|null);

        /** PlayerData VipExp */
        VipExp?: (number|Long|null);
    }

    /** Represents a PlayerData. */
    class PlayerData implements IPlayerData {

        /**
         * Constructs a new PlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: player.IPlayerData);

        /** PlayerData AccId. */
        public AccId: string;

        /** PlayerData Platform. */
        public Platform: string;

        /** PlayerData Channel. */
        public Channel: string;

        /** PlayerData Name. */
        public Name: string;

        /** PlayerData SnId. */
        public SnId: number;

        /** PlayerData Head. */
        public Head: number;

        /** PlayerData Sex. */
        public Sex: number;

        /** PlayerData Coin. */
        public Coin: (number|Long);

        /** PlayerData SafeBoxCoin. */
        public SafeBoxCoin: (number|Long);

        /** PlayerData Tel. */
        public Tel: string;

        /** PlayerData InviterId. */
        public InviterId: number;

        /** PlayerData AlipayAccount. */
        public AlipayAccount: string;

        /** PlayerData AlipayAccName. */
        public AlipayAccName: string;

        /** PlayerData Bank. */
        public Bank: string;

        /** PlayerData BankAccount. */
        public BankAccount: string;

        /** PlayerData BankAccName. */
        public BankAccName: string;

        /** PlayerData GMLevel. */
        public GMLevel: number;

        /** PlayerData SpecailFlag. */
        public SpecailFlag: number;

        /** PlayerData VIP. */
        public VIP: number;

        /** PlayerData SafeBoxIsExist. */
        public SafeBoxIsExist: number;

        /** PlayerData HeadOutLine. */
        public HeadOutLine: number;

        /** PlayerData CoinPayTotal. */
        public CoinPayTotal: (number|Long);

        /** PlayerData CreateTs. */
        public CreateTs: (number|Long);

        /** PlayerData Promoter. */
        public Promoter: string;

        /** PlayerData TotalConvertibleFlow. */
        public TotalConvertibleFlow: (number|Long);

        /** PlayerData CanExchangeCoin. */
        public CanExchangeCoin: (number|Long);

        /** PlayerData LackExchangeCoin. */
        public LackExchangeCoin: (number|Long);

        /** PlayerData ExchangeType. */
        public ExchangeType: (number|Long);

        /** PlayerData ClubCoin. */
        public ClubCoin: (number|Long);

        /** PlayerData Ticket. */
        public Ticket: (number|Long);

        /** PlayerData Grade. */
        public Grade: (number|Long);

        /** PlayerData Diamond. */
        public Diamond: (number|Long);

        /** PlayerData UseRoleId. */
        public UseRoleId: number;

        /** PlayerData UsePetId. */
        public UsePetId: number;

        /** PlayerData VCoin. */
        public VCoin: (number|Long);

        /** PlayerData ReliefFundTimes. */
        public ReliefFundTimes: number;

        /** PlayerData HeadUrl. */
        public HeadUrl: string;

        /** PlayerData VipExp. */
        public VipExp: (number|Long);

        /**
         * Encodes the specified PlayerData message. Does not implicitly {@link player.PlayerData.verify|verify} messages.
         * @param m PlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.IPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.PlayerData;
    }

    /** Properties of a MiniGameInfo. */
    interface IMiniGameInfo {

        /** MiniGameInfo RoomId */
        RoomId?: (number|null);

        /** MiniGameInfo GameId */
        GameId?: (number|null);

        /** MiniGameInfo LogicId */
        LogicId?: (number|null);
    }

    /** Represents a MiniGameInfo. */
    class MiniGameInfo implements IMiniGameInfo {

        /**
         * Constructs a new MiniGameInfo.
         * @param [p] Properties to set
         */
        constructor(p?: player.IMiniGameInfo);

        /** MiniGameInfo RoomId. */
        public RoomId: number;

        /** MiniGameInfo GameId. */
        public GameId: number;

        /** MiniGameInfo LogicId. */
        public LogicId: number;

        /**
         * Encodes the specified MiniGameInfo message. Does not implicitly {@link player.MiniGameInfo.verify|verify} messages.
         * @param m MiniGameInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.IMiniGameInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MiniGameInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MiniGameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.MiniGameInfo;
    }

    /** Properties of a SCPlayerData. */
    interface ISCPlayerData {

        /** SCPlayerData OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCPlayerData Data */
        Data?: (player.IPlayerData|null);

        /** SCPlayerData RoomId */
        RoomId?: (number|null);

        /** SCPlayerData GameId */
        GameId?: (number|null);

        /** SCPlayerData LogicId */
        LogicId?: (number|null);

        /** SCPlayerData BindOption */
        BindOption?: (number|null);

        /** SCPlayerData MiniGameArr */
        MiniGameArr?: (player.IMiniGameInfo[]|null);
    }

    /** Represents a SCPlayerData. */
    class SCPlayerData implements ISCPlayerData {

        /**
         * Constructs a new SCPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPlayerData);

        /** SCPlayerData OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCPlayerData Data. */
        public Data?: (player.IPlayerData|null);

        /** SCPlayerData RoomId. */
        public RoomId: number;

        /** SCPlayerData GameId. */
        public GameId: number;

        /** SCPlayerData LogicId. */
        public LogicId: number;

        /** SCPlayerData BindOption. */
        public BindOption: number;

        /** SCPlayerData MiniGameArr. */
        public MiniGameArr: player.IMiniGameInfo[];

        /**
         * Encodes the specified SCPlayerData message. Does not implicitly {@link player.SCPlayerData.verify|verify} messages.
         * @param m SCPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPlayerData;
    }

    /** Properties of a SCPlayerDataUpdate. */
    interface ISCPlayerDataUpdate {

        /** SCPlayerDataUpdate UpdateField */
        UpdateField?: (number|Long|null);

        /** SCPlayerDataUpdate Coin */
        Coin?: (number|Long|null);

        /** SCPlayerDataUpdate SafeBoxCoin */
        SafeBoxCoin?: (number|Long|null);

        /** SCPlayerDataUpdate Vip */
        Vip?: (number|null);

        /** SCPlayerDataUpdate CoinPayTotal */
        CoinPayTotal?: (number|Long|null);

        /** SCPlayerDataUpdate TotalConvertibleFlow */
        TotalConvertibleFlow?: (number|Long|null);

        /** SCPlayerDataUpdate Ticket */
        Ticket?: (number|Long|null);

        /** SCPlayerDataUpdate Grade */
        Grade?: (number|Long|null);

        /** SCPlayerDataUpdate Diamond */
        Diamond?: (number|Long|null);

        /** SCPlayerDataUpdate VCoin */
        VCoin?: (number|Long|null);
    }

    /** Represents a SCPlayerDataUpdate. */
    class SCPlayerDataUpdate implements ISCPlayerDataUpdate {

        /**
         * Constructs a new SCPlayerDataUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPlayerDataUpdate);

        /** SCPlayerDataUpdate UpdateField. */
        public UpdateField: (number|Long);

        /** SCPlayerDataUpdate Coin. */
        public Coin: (number|Long);

        /** SCPlayerDataUpdate SafeBoxCoin. */
        public SafeBoxCoin: (number|Long);

        /** SCPlayerDataUpdate Vip. */
        public Vip: number;

        /** SCPlayerDataUpdate CoinPayTotal. */
        public CoinPayTotal: (number|Long);

        /** SCPlayerDataUpdate TotalConvertibleFlow. */
        public TotalConvertibleFlow: (number|Long);

        /** SCPlayerDataUpdate Ticket. */
        public Ticket: (number|Long);

        /** SCPlayerDataUpdate Grade. */
        public Grade: (number|Long);

        /** SCPlayerDataUpdate Diamond. */
        public Diamond: (number|Long);

        /** SCPlayerDataUpdate VCoin. */
        public VCoin: (number|Long);

        /**
         * Encodes the specified SCPlayerDataUpdate message. Does not implicitly {@link player.SCPlayerDataUpdate.verify|verify} messages.
         * @param m SCPlayerDataUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPlayerDataUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerDataUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerDataUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPlayerDataUpdate;
    }

    /** Properties of a CSThirdPlayerData. */
    interface ICSThirdPlayerData {

        /** CSThirdPlayerData Id */
        Id?: (number|null);
    }

    /** Represents a CSThirdPlayerData. */
    class CSThirdPlayerData implements ICSThirdPlayerData {

        /**
         * Constructs a new CSThirdPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSThirdPlayerData);

        /** CSThirdPlayerData Id. */
        public Id: number;

        /**
         * Encodes the specified CSThirdPlayerData message. Does not implicitly {@link player.CSThirdPlayerData.verify|verify} messages.
         * @param m CSThirdPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSThirdPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSThirdPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSThirdPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSThirdPlayerData;
    }

    /** Properties of a SCThirdPlayerData. */
    interface ISCThirdPlayerData {

        /** SCThirdPlayerData Data */
        Data?: (player.IPlayerData|null);
    }

    /** Represents a SCThirdPlayerData. */
    class SCThirdPlayerData implements ISCThirdPlayerData {

        /**
         * Constructs a new SCThirdPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCThirdPlayerData);

        /** SCThirdPlayerData Data. */
        public Data?: (player.IPlayerData|null);

        /**
         * Encodes the specified SCThirdPlayerData message. Does not implicitly {@link player.SCThirdPlayerData.verify|verify} messages.
         * @param m SCThirdPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCThirdPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCThirdPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCThirdPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCThirdPlayerData;
    }

    /** Properties of a CSChangeNick. */
    interface ICSChangeNick {

        /** CSChangeNick Nick */
        Nick?: (string|null);
    }

    /** Represents a CSChangeNick. */
    class CSChangeNick implements ICSChangeNick {

        /**
         * Constructs a new CSChangeNick.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSChangeNick);

        /** CSChangeNick Nick. */
        public Nick: string;

        /**
         * Encodes the specified CSChangeNick message. Does not implicitly {@link player.CSChangeNick.verify|verify} messages.
         * @param m CSChangeNick message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSChangeNick, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSChangeNick message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSChangeNick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSChangeNick;
    }

    /** Properties of a SCChangeNick. */
    interface ISCChangeNick {

        /** SCChangeNick OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCChangeNick Nick */
        Nick?: (string|null);
    }

    /** Represents a SCChangeNick. */
    class SCChangeNick implements ISCChangeNick {

        /**
         * Constructs a new SCChangeNick.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCChangeNick);

        /** SCChangeNick OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCChangeNick Nick. */
        public Nick: string;

        /**
         * Encodes the specified SCChangeNick message. Does not implicitly {@link player.SCChangeNick.verify|verify} messages.
         * @param m SCChangeNick message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCChangeNick, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCChangeNick message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCChangeNick
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCChangeNick;
    }

    /** Properties of a CSChangePassword. */
    interface ICSChangePassword {

        /** CSChangePassword ChangeType */
        ChangeType?: (number|null);

        /** CSChangePassword OldPassword */
        OldPassword?: (string|null);

        /** CSChangePassword NewPassword */
        NewPassword?: (string|null);

        /** CSChangePassword TimeStamp */
        TimeStamp?: (number|Long|null);
    }

    /** Represents a CSChangePassword. */
    class CSChangePassword implements ICSChangePassword {

        /**
         * Constructs a new CSChangePassword.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSChangePassword);

        /** CSChangePassword ChangeType. */
        public ChangeType: number;

        /** CSChangePassword OldPassword. */
        public OldPassword: string;

        /** CSChangePassword NewPassword. */
        public NewPassword: string;

        /** CSChangePassword TimeStamp. */
        public TimeStamp: (number|Long);

        /**
         * Encodes the specified CSChangePassword message. Does not implicitly {@link player.CSChangePassword.verify|verify} messages.
         * @param m CSChangePassword message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSChangePassword, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSChangePassword message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSChangePassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSChangePassword;
    }

    /** Properties of a SCChangePassword. */
    interface ISCChangePassword {

        /** SCChangePassword OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCChangePassword ChangeType */
        ChangeType?: (number|null);
    }

    /** Represents a SCChangePassword. */
    class SCChangePassword implements ISCChangePassword {

        /**
         * Constructs a new SCChangePassword.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCChangePassword);

        /** SCChangePassword OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCChangePassword ChangeType. */
        public ChangeType: number;

        /**
         * Encodes the specified SCChangePassword message. Does not implicitly {@link player.SCChangePassword.verify|verify} messages.
         * @param m SCChangePassword message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCChangePassword, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCChangePassword message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCChangePassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCChangePassword;
    }

    /** Properties of a CSPlayerChangeIcon. */
    interface ICSPlayerChangeIcon {

        /** CSPlayerChangeIcon Icon */
        Icon?: (number|null);
    }

    /** Represents a CSPlayerChangeIcon. */
    class CSPlayerChangeIcon implements ICSPlayerChangeIcon {

        /**
         * Constructs a new CSPlayerChangeIcon.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSPlayerChangeIcon);

        /** CSPlayerChangeIcon Icon. */
        public Icon: number;

        /**
         * Encodes the specified CSPlayerChangeIcon message. Does not implicitly {@link player.CSPlayerChangeIcon.verify|verify} messages.
         * @param m CSPlayerChangeIcon message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSPlayerChangeIcon, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPlayerChangeIcon message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPlayerChangeIcon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSPlayerChangeIcon;
    }

    /** Properties of a SCPlayerChangeIcon. */
    interface ISCPlayerChangeIcon {

        /** SCPlayerChangeIcon OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCPlayerChangeIcon Icon */
        Icon?: (number|null);
    }

    /** Represents a SCPlayerChangeIcon. */
    class SCPlayerChangeIcon implements ISCPlayerChangeIcon {

        /**
         * Constructs a new SCPlayerChangeIcon.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPlayerChangeIcon);

        /** SCPlayerChangeIcon OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCPlayerChangeIcon Icon. */
        public Icon: number;

        /**
         * Encodes the specified SCPlayerChangeIcon message. Does not implicitly {@link player.SCPlayerChangeIcon.verify|verify} messages.
         * @param m SCPlayerChangeIcon message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPlayerChangeIcon, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerChangeIcon message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerChangeIcon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPlayerChangeIcon;
    }

    /** Properties of a CSPlayerChangeHeadOutLine. */
    interface ICSPlayerChangeHeadOutLine {

        /** CSPlayerChangeHeadOutLine HeadOutLine */
        HeadOutLine?: (number|null);
    }

    /** Represents a CSPlayerChangeHeadOutLine. */
    class CSPlayerChangeHeadOutLine implements ICSPlayerChangeHeadOutLine {

        /**
         * Constructs a new CSPlayerChangeHeadOutLine.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSPlayerChangeHeadOutLine);

        /** CSPlayerChangeHeadOutLine HeadOutLine. */
        public HeadOutLine: number;

        /**
         * Encodes the specified CSPlayerChangeHeadOutLine message. Does not implicitly {@link player.CSPlayerChangeHeadOutLine.verify|verify} messages.
         * @param m CSPlayerChangeHeadOutLine message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSPlayerChangeHeadOutLine, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPlayerChangeHeadOutLine message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPlayerChangeHeadOutLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSPlayerChangeHeadOutLine;
    }

    /** Properties of a SCPlayerChangeHeadOutLine. */
    interface ISCPlayerChangeHeadOutLine {

        /** SCPlayerChangeHeadOutLine OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCPlayerChangeHeadOutLine HeadOutLine */
        HeadOutLine?: (number|null);
    }

    /** Represents a SCPlayerChangeHeadOutLine. */
    class SCPlayerChangeHeadOutLine implements ISCPlayerChangeHeadOutLine {

        /**
         * Constructs a new SCPlayerChangeHeadOutLine.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPlayerChangeHeadOutLine);

        /** SCPlayerChangeHeadOutLine OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCPlayerChangeHeadOutLine HeadOutLine. */
        public HeadOutLine: number;

        /**
         * Encodes the specified SCPlayerChangeHeadOutLine message. Does not implicitly {@link player.SCPlayerChangeHeadOutLine.verify|verify} messages.
         * @param m SCPlayerChangeHeadOutLine message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPlayerChangeHeadOutLine, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerChangeHeadOutLine message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerChangeHeadOutLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPlayerChangeHeadOutLine;
    }

    /** Properties of a CSPlayerChangeSex. */
    interface ICSPlayerChangeSex {

        /** CSPlayerChangeSex Sex */
        Sex?: (number|null);
    }

    /** Represents a CSPlayerChangeSex. */
    class CSPlayerChangeSex implements ICSPlayerChangeSex {

        /**
         * Constructs a new CSPlayerChangeSex.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSPlayerChangeSex);

        /** CSPlayerChangeSex Sex. */
        public Sex: number;

        /**
         * Encodes the specified CSPlayerChangeSex message. Does not implicitly {@link player.CSPlayerChangeSex.verify|verify} messages.
         * @param m CSPlayerChangeSex message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSPlayerChangeSex, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPlayerChangeSex message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPlayerChangeSex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSPlayerChangeSex;
    }

    /** Properties of a SCPlayerChangeSex. */
    interface ISCPlayerChangeSex {

        /** SCPlayerChangeSex OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCPlayerChangeSex Sex */
        Sex?: (number|null);
    }

    /** Represents a SCPlayerChangeSex. */
    class SCPlayerChangeSex implements ISCPlayerChangeSex {

        /**
         * Constructs a new SCPlayerChangeSex.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPlayerChangeSex);

        /** SCPlayerChangeSex OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCPlayerChangeSex Sex. */
        public Sex: number;

        /**
         * Encodes the specified SCPlayerChangeSex message. Does not implicitly {@link player.SCPlayerChangeSex.verify|verify} messages.
         * @param m SCPlayerChangeSex message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPlayerChangeSex, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerChangeSex message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerChangeSex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPlayerChangeSex;
    }

    /** Properties of a CSPlayerVerificationCode. */
    interface ICSPlayerVerificationCode {

        /** CSPlayerVerificationCode Tel */
        Tel?: (string|null);

        /** CSPlayerVerificationCode OpCode */
        OpCode?: (number|null);

        /** CSPlayerVerificationCode PlatformTag */
        PlatformTag?: (string|null);

        /** CSPlayerVerificationCode Env */
        Env?: (number|null);

        /** CSPlayerVerificationCode ImgCode */
        ImgCode?: (string|null);

        /** CSPlayerVerificationCode Ts */
        Ts?: (number|null);

        /** CSPlayerVerificationCode DeviceInfo */
        DeviceInfo?: (string|null);
    }

    /** Represents a CSPlayerVerificationCode. */
    class CSPlayerVerificationCode implements ICSPlayerVerificationCode {

        /**
         * Constructs a new CSPlayerVerificationCode.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSPlayerVerificationCode);

        /** CSPlayerVerificationCode Tel. */
        public Tel: string;

        /** CSPlayerVerificationCode OpCode. */
        public OpCode: number;

        /** CSPlayerVerificationCode PlatformTag. */
        public PlatformTag: string;

        /** CSPlayerVerificationCode Env. */
        public Env: number;

        /** CSPlayerVerificationCode ImgCode. */
        public ImgCode: string;

        /** CSPlayerVerificationCode Ts. */
        public Ts: number;

        /** CSPlayerVerificationCode DeviceInfo. */
        public DeviceInfo: string;

        /**
         * Encodes the specified CSPlayerVerificationCode message. Does not implicitly {@link player.CSPlayerVerificationCode.verify|verify} messages.
         * @param m CSPlayerVerificationCode message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSPlayerVerificationCode, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPlayerVerificationCode message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPlayerVerificationCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSPlayerVerificationCode;
    }

    /** Properties of a SCPlayerVerificationCode. */
    interface ISCPlayerVerificationCode {

        /** SCPlayerVerificationCode OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCPlayerVerificationCode VerificationCode */
        VerificationCode?: (number|null);
    }

    /** Represents a SCPlayerVerificationCode. */
    class SCPlayerVerificationCode implements ISCPlayerVerificationCode {

        /**
         * Constructs a new SCPlayerVerificationCode.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPlayerVerificationCode);

        /** SCPlayerVerificationCode OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCPlayerVerificationCode VerificationCode. */
        public VerificationCode: number;

        /**
         * Encodes the specified SCPlayerVerificationCode message. Does not implicitly {@link player.SCPlayerVerificationCode.verify|verify} messages.
         * @param m SCPlayerVerificationCode message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPlayerVerificationCode, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerVerificationCode message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerVerificationCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPlayerVerificationCode;
    }

    /** Properties of a CSRegister. */
    interface ICSRegister {

        /** CSRegister Username */
        Username?: (string|null);

        /** CSRegister Password */
        Password?: (string|null);

        /** CSRegister TimeStamp */
        TimeStamp?: (number|Long|null);

        /** CSRegister Params */
        Params?: (string|null);

        /** CSRegister Sign */
        Sign?: (string|null);

        /** CSRegister Platform */
        Platform?: (string|null);

        /** CSRegister Channel */
        Channel?: (string|null);

        /** CSRegister InviterId */
        InviterId?: (number|null);

        /** CSRegister ApkVer */
        ApkVer?: (number|null);

        /** CSRegister ResVer */
        ResVer?: (number|null);

        /** CSRegister Tel */
        Tel?: (string|null);

        /** CSRegister TelPassword */
        TelPassword?: (string|null);

        /** CSRegister VerificationCode */
        VerificationCode?: (string|null);

        /** CSRegister PlatformTag */
        PlatformTag?: (string|null);

        /** CSRegister Promoter */
        Promoter?: (string|null);

        /** CSRegister Package */
        Package?: (string|null);

        /** CSRegister PromoterTree */
        PromoterTree?: (number|null);

        /** CSRegister DeviceInfo */
        DeviceInfo?: (string|null);

        /** CSRegister RegistType */
        RegistType?: (number|null);
    }

    /** Represents a CSRegister. */
    class CSRegister implements ICSRegister {

        /**
         * Constructs a new CSRegister.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSRegister);

        /** CSRegister Username. */
        public Username: string;

        /** CSRegister Password. */
        public Password: string;

        /** CSRegister TimeStamp. */
        public TimeStamp: (number|Long);

        /** CSRegister Params. */
        public Params: string;

        /** CSRegister Sign. */
        public Sign: string;

        /** CSRegister Platform. */
        public Platform: string;

        /** CSRegister Channel. */
        public Channel: string;

        /** CSRegister InviterId. */
        public InviterId: number;

        /** CSRegister ApkVer. */
        public ApkVer: number;

        /** CSRegister ResVer. */
        public ResVer: number;

        /** CSRegister Tel. */
        public Tel: string;

        /** CSRegister TelPassword. */
        public TelPassword: string;

        /** CSRegister VerificationCode. */
        public VerificationCode: string;

        /** CSRegister PlatformTag. */
        public PlatformTag: string;

        /** CSRegister Promoter. */
        public Promoter: string;

        /** CSRegister Package. */
        public Package: string;

        /** CSRegister PromoterTree. */
        public PromoterTree: number;

        /** CSRegister DeviceInfo. */
        public DeviceInfo: string;

        /** CSRegister RegistType. */
        public RegistType: number;

        /**
         * Encodes the specified CSRegister message. Does not implicitly {@link player.CSRegister.verify|verify} messages.
         * @param m CSRegister message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSRegister, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSRegister message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSRegister;
    }

    /** Properties of a SCRegister. */
    interface ISCRegister {

        /** SCRegister OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCRegister AccId */
        AccId?: (string|null);

        /** SCRegister SrvTs */
        SrvTs?: (number|Long|null);
    }

    /** Represents a SCRegister. */
    class SCRegister implements ISCRegister {

        /**
         * Constructs a new SCRegister.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCRegister);

        /** SCRegister OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCRegister AccId. */
        public AccId: string;

        /** SCRegister SrvTs. */
        public SrvTs: (number|Long);

        /**
         * Encodes the specified SCRegister message. Does not implicitly {@link player.SCRegister.verify|verify} messages.
         * @param m SCRegister message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCRegister, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRegister message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRegister
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCRegister;
    }

    /** Properties of a CSUpgradeAccount. */
    interface ICSUpgradeAccount {

        /** CSUpgradeAccount ChangeType */
        ChangeType?: (number|null);

        /** CSUpgradeAccount Tel */
        Tel?: (string|null);

        /** CSUpgradeAccount VerificationCode */
        VerificationCode?: (string|null);

        /** CSUpgradeAccount Password */
        Password?: (string|null);

        /** CSUpgradeAccount TimeStamp */
        TimeStamp?: (number|Long|null);

        /** CSUpgradeAccount PlatformTag */
        PlatformTag?: (string|null);
    }

    /** Represents a CSUpgradeAccount. */
    class CSUpgradeAccount implements ICSUpgradeAccount {

        /**
         * Constructs a new CSUpgradeAccount.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSUpgradeAccount);

        /** CSUpgradeAccount ChangeType. */
        public ChangeType: number;

        /** CSUpgradeAccount Tel. */
        public Tel: string;

        /** CSUpgradeAccount VerificationCode. */
        public VerificationCode: string;

        /** CSUpgradeAccount Password. */
        public Password: string;

        /** CSUpgradeAccount TimeStamp. */
        public TimeStamp: (number|Long);

        /** CSUpgradeAccount PlatformTag. */
        public PlatformTag: string;

        /**
         * Encodes the specified CSUpgradeAccount message. Does not implicitly {@link player.CSUpgradeAccount.verify|verify} messages.
         * @param m CSUpgradeAccount message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSUpgradeAccount, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSUpgradeAccount message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSUpgradeAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSUpgradeAccount;
    }

    /** Properties of a SCUpgradeAccount. */
    interface ISCUpgradeAccount {

        /** SCUpgradeAccount OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCUpgradeAccount Tel */
        Tel?: (string|null);

        /** SCUpgradeAccount ChangeType */
        ChangeType?: (number|null);
    }

    /** Represents a SCUpgradeAccount. */
    class SCUpgradeAccount implements ISCUpgradeAccount {

        /**
         * Constructs a new SCUpgradeAccount.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCUpgradeAccount);

        /** SCUpgradeAccount OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCUpgradeAccount Tel. */
        public Tel: string;

        /** SCUpgradeAccount ChangeType. */
        public ChangeType: number;

        /**
         * Encodes the specified SCUpgradeAccount message. Does not implicitly {@link player.SCUpgradeAccount.verify|verify} messages.
         * @param m SCUpgradeAccount message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCUpgradeAccount, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCUpgradeAccount message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCUpgradeAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCUpgradeAccount;
    }

    /** Properties of a CSBindAlipay. */
    interface ICSBindAlipay {

        /** CSBindAlipay AlipayAccount */
        AlipayAccount?: (string|null);

        /** CSBindAlipay AlipayAccName */
        AlipayAccName?: (string|null);

        /** CSBindAlipay TimeStamp */
        TimeStamp?: (number|Long|null);

        /** CSBindAlipay Password */
        Password?: (string|null);
    }

    /** Represents a CSBindAlipay. */
    class CSBindAlipay implements ICSBindAlipay {

        /**
         * Constructs a new CSBindAlipay.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSBindAlipay);

        /** CSBindAlipay AlipayAccount. */
        public AlipayAccount: string;

        /** CSBindAlipay AlipayAccName. */
        public AlipayAccName: string;

        /** CSBindAlipay TimeStamp. */
        public TimeStamp: (number|Long);

        /** CSBindAlipay Password. */
        public Password: string;

        /**
         * Encodes the specified CSBindAlipay message. Does not implicitly {@link player.CSBindAlipay.verify|verify} messages.
         * @param m CSBindAlipay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSBindAlipay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSBindAlipay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSBindAlipay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSBindAlipay;
    }

    /** Properties of a SCBindAlipay. */
    interface ISCBindAlipay {

        /** SCBindAlipay OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCBindAlipay AlipayAccount */
        AlipayAccount?: (string|null);

        /** SCBindAlipay AlipayAccName */
        AlipayAccName?: (string|null);
    }

    /** Represents a SCBindAlipay. */
    class SCBindAlipay implements ISCBindAlipay {

        /**
         * Constructs a new SCBindAlipay.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCBindAlipay);

        /** SCBindAlipay OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCBindAlipay AlipayAccount. */
        public AlipayAccount: string;

        /** SCBindAlipay AlipayAccName. */
        public AlipayAccName: string;

        /**
         * Encodes the specified SCBindAlipay message. Does not implicitly {@link player.SCBindAlipay.verify|verify} messages.
         * @param m SCBindAlipay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCBindAlipay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCBindAlipay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCBindAlipay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCBindAlipay;
    }

    /** Properties of a CSBindBank. */
    interface ICSBindBank {

        /** CSBindBank Bank */
        Bank?: (string|null);

        /** CSBindBank BankAccount */
        BankAccount?: (string|null);

        /** CSBindBank BankAccName */
        BankAccName?: (string|null);

        /** CSBindBank TimeStamp */
        TimeStamp?: (number|Long|null);

        /** CSBindBank Password */
        Password?: (string|null);
    }

    /** Represents a CSBindBank. */
    class CSBindBank implements ICSBindBank {

        /**
         * Constructs a new CSBindBank.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSBindBank);

        /** CSBindBank Bank. */
        public Bank: string;

        /** CSBindBank BankAccount. */
        public BankAccount: string;

        /** CSBindBank BankAccName. */
        public BankAccName: string;

        /** CSBindBank TimeStamp. */
        public TimeStamp: (number|Long);

        /** CSBindBank Password. */
        public Password: string;

        /**
         * Encodes the specified CSBindBank message. Does not implicitly {@link player.CSBindBank.verify|verify} messages.
         * @param m CSBindBank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSBindBank, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSBindBank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSBindBank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSBindBank;
    }

    /** Properties of a SCBindBank. */
    interface ISCBindBank {

        /** SCBindBank OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCBindBank Bank */
        Bank?: (string|null);

        /** SCBindBank BankAccount */
        BankAccount?: (string|null);

        /** SCBindBank BankAccName */
        BankAccName?: (string|null);
    }

    /** Represents a SCBindBank. */
    class SCBindBank implements ISCBindBank {

        /**
         * Constructs a new SCBindBank.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCBindBank);

        /** SCBindBank OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCBindBank Bank. */
        public Bank: string;

        /** SCBindBank BankAccount. */
        public BankAccount: string;

        /** SCBindBank BankAccName. */
        public BankAccName: string;

        /**
         * Encodes the specified SCBindBank message. Does not implicitly {@link player.SCBindBank.verify|verify} messages.
         * @param m SCBindBank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCBindBank, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCBindBank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCBindBank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCBindBank;
    }

    /** Properties of a SCPlayerFlag. */
    interface ISCPlayerFlag {

        /** SCPlayerFlag PlayerId */
        PlayerId?: (number|null);

        /** SCPlayerFlag Flag */
        Flag?: (number|null);
    }

    /** Represents a SCPlayerFlag. */
    class SCPlayerFlag implements ISCPlayerFlag {

        /**
         * Constructs a new SCPlayerFlag.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPlayerFlag);

        /** SCPlayerFlag PlayerId. */
        public PlayerId: number;

        /** SCPlayerFlag Flag. */
        public Flag: number;

        /**
         * Encodes the specified SCPlayerFlag message. Does not implicitly {@link player.SCPlayerFlag.verify|verify} messages.
         * @param m SCPlayerFlag message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPlayerFlag, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerFlag message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerFlag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPlayerFlag;
    }

    /** Properties of a SCPlayerCoinChange. */
    interface ISCPlayerCoinChange {

        /** SCPlayerCoinChange SnId */
        SnId?: (number|null);

        /** SCPlayerCoinChange AddCoin */
        AddCoin?: (number|Long|null);

        /** SCPlayerCoinChange RestCoin */
        RestCoin?: (number|Long|null);
    }

    /** Represents a SCPlayerCoinChange. */
    class SCPlayerCoinChange implements ISCPlayerCoinChange {

        /**
         * Constructs a new SCPlayerCoinChange.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPlayerCoinChange);

        /** SCPlayerCoinChange SnId. */
        public SnId: number;

        /** SCPlayerCoinChange AddCoin. */
        public AddCoin: (number|Long);

        /** SCPlayerCoinChange RestCoin. */
        public RestCoin: (number|Long);

        /**
         * Encodes the specified SCPlayerCoinChange message. Does not implicitly {@link player.SCPlayerCoinChange.verify|verify} messages.
         * @param m SCPlayerCoinChange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPlayerCoinChange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerCoinChange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerCoinChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPlayerCoinChange;
    }

    /** Properties of a SCPlayerRechargeAnswer. */
    interface ISCPlayerRechargeAnswer {

        /** SCPlayerRechargeAnswer OpParam */
        OpParam?: (number|Long|null);

        /** SCPlayerRechargeAnswer AddCoin */
        AddCoin?: (number|Long|null);

        /** SCPlayerRechargeAnswer Coin */
        Coin?: (number|Long|null);

        /** SCPlayerRechargeAnswer SafeBoxCoin */
        SafeBoxCoin?: (number|Long|null);
    }

    /** Represents a SCPlayerRechargeAnswer. */
    class SCPlayerRechargeAnswer implements ISCPlayerRechargeAnswer {

        /**
         * Constructs a new SCPlayerRechargeAnswer.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPlayerRechargeAnswer);

        /** SCPlayerRechargeAnswer OpParam. */
        public OpParam: (number|Long);

        /** SCPlayerRechargeAnswer AddCoin. */
        public AddCoin: (number|Long);

        /** SCPlayerRechargeAnswer Coin. */
        public Coin: (number|Long);

        /** SCPlayerRechargeAnswer SafeBoxCoin. */
        public SafeBoxCoin: (number|Long);

        /**
         * Encodes the specified SCPlayerRechargeAnswer message. Does not implicitly {@link player.SCPlayerRechargeAnswer.verify|verify} messages.
         * @param m SCPlayerRechargeAnswer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPlayerRechargeAnswer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerRechargeAnswer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerRechargeAnswer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPlayerRechargeAnswer;
    }

    /** Properties of a DataLog. */
    interface IDataLog {

        /** DataLog LogType */
        LogType?: (number|null);

        /** DataLog ChangeCount */
        ChangeCount?: (number|Long|null);

        /** DataLog RestCount */
        RestCount?: (number|Long|null);

        /** DataLog Ts */
        Ts?: (number|null);

        /** DataLog Remark */
        Remark?: (string|null);
    }

    /** Represents a DataLog. */
    class DataLog implements IDataLog {

        /**
         * Constructs a new DataLog.
         * @param [p] Properties to set
         */
        constructor(p?: player.IDataLog);

        /** DataLog LogType. */
        public LogType: number;

        /** DataLog ChangeCount. */
        public ChangeCount: (number|Long);

        /** DataLog RestCount. */
        public RestCount: (number|Long);

        /** DataLog Ts. */
        public Ts: number;

        /** DataLog Remark. */
        public Remark: string;

        /**
         * Encodes the specified DataLog message. Does not implicitly {@link player.DataLog.verify|verify} messages.
         * @param m DataLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.IDataLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DataLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DataLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.DataLog;
    }

    /** Properties of a CSGetDataLog. */
    interface ICSGetDataLog {

        /** CSGetDataLog DataType */
        DataType?: (number|null);

        /** CSGetDataLog Ver */
        Ver?: (number|null);
    }

    /** Represents a CSGetDataLog. */
    class CSGetDataLog implements ICSGetDataLog {

        /**
         * Constructs a new CSGetDataLog.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSGetDataLog);

        /** CSGetDataLog DataType. */
        public DataType: number;

        /** CSGetDataLog Ver. */
        public Ver: number;

        /**
         * Encodes the specified CSGetDataLog message. Does not implicitly {@link player.CSGetDataLog.verify|verify} messages.
         * @param m CSGetDataLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSGetDataLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetDataLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetDataLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSGetDataLog;
    }

    /** Properties of a SCGetDataLog. */
    interface ISCGetDataLog {

        /** SCGetDataLog DataType */
        DataType?: (number|null);

        /** SCGetDataLog Ver */
        Ver?: (number|null);

        /** SCGetDataLog Datas */
        Datas?: (player.IDataLog[]|null);
    }

    /** Represents a SCGetDataLog. */
    class SCGetDataLog implements ISCGetDataLog {

        /**
         * Constructs a new SCGetDataLog.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCGetDataLog);

        /** SCGetDataLog DataType. */
        public DataType: number;

        /** SCGetDataLog Ver. */
        public Ver: number;

        /** SCGetDataLog Datas. */
        public Datas: player.IDataLog[];

        /**
         * Encodes the specified SCGetDataLog message. Does not implicitly {@link player.SCGetDataLog.verify|verify} messages.
         * @param m SCGetDataLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCGetDataLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetDataLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetDataLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCGetDataLog;
    }

    /** Properties of a GameCoinLog. */
    interface IGameCoinLog {

        /** GameCoinLog GameId */
        GameId?: (number|null);

        /** GameCoinLog EnterCount */
        EnterCount?: (number|Long|null);

        /** GameCoinLog LeaveCount */
        LeaveCount?: (number|Long|null);

        /** GameCoinLog EnterTs */
        EnterTs?: (number|Long|null);

        /** GameCoinLog LeaveTs */
        LeaveTs?: (number|Long|null);
    }

    /** Represents a GameCoinLog. */
    class GameCoinLog implements IGameCoinLog {

        /**
         * Constructs a new GameCoinLog.
         * @param [p] Properties to set
         */
        constructor(p?: player.IGameCoinLog);

        /** GameCoinLog GameId. */
        public GameId: number;

        /** GameCoinLog EnterCount. */
        public EnterCount: (number|Long);

        /** GameCoinLog LeaveCount. */
        public LeaveCount: (number|Long);

        /** GameCoinLog EnterTs. */
        public EnterTs: (number|Long);

        /** GameCoinLog LeaveTs. */
        public LeaveTs: (number|Long);

        /**
         * Encodes the specified GameCoinLog message. Does not implicitly {@link player.GameCoinLog.verify|verify} messages.
         * @param m GameCoinLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.IGameCoinLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCoinLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameCoinLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.GameCoinLog;
    }

    /** Properties of a CSGetGameCoinLog. */
    interface ICSGetGameCoinLog {

        /** CSGetGameCoinLog Ts */
        Ts?: (number|Long|null);
    }

    /** Represents a CSGetGameCoinLog. */
    class CSGetGameCoinLog implements ICSGetGameCoinLog {

        /**
         * Constructs a new CSGetGameCoinLog.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSGetGameCoinLog);

        /** CSGetGameCoinLog Ts. */
        public Ts: (number|Long);

        /**
         * Encodes the specified CSGetGameCoinLog message. Does not implicitly {@link player.CSGetGameCoinLog.verify|verify} messages.
         * @param m CSGetGameCoinLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSGetGameCoinLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetGameCoinLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetGameCoinLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSGetGameCoinLog;
    }

    /** Properties of a SCGetGameCoinLog. */
    interface ISCGetGameCoinLog {

        /** SCGetGameCoinLog OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCGetGameCoinLog Logs */
        Logs?: (player.IGameCoinLog[]|null);
    }

    /** Represents a SCGetGameCoinLog. */
    class SCGetGameCoinLog implements ISCGetGameCoinLog {

        /**
         * Constructs a new SCGetGameCoinLog.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCGetGameCoinLog);

        /** SCGetGameCoinLog OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCGetGameCoinLog Logs. */
        public Logs: player.IGameCoinLog[];

        /**
         * Encodes the specified SCGetGameCoinLog message. Does not implicitly {@link player.SCGetGameCoinLog.verify|verify} messages.
         * @param m SCGetGameCoinLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCGetGameCoinLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetGameCoinLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetGameCoinLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCGetGameCoinLog;
    }

    /** Properties of a CSPlayerOpCoin. */
    interface ICSPlayerOpCoin {

        /** CSPlayerOpCoin Op */
        Op?: (number|null);

        /** CSPlayerOpCoin Coin */
        Coin?: (number|Long|null);

        /** CSPlayerOpCoin Password */
        Password?: (string|null);

        /** CSPlayerOpCoin TimeStamp */
        TimeStamp?: (number|Long|null);
    }

    /** Represents a CSPlayerOpCoin. */
    class CSPlayerOpCoin implements ICSPlayerOpCoin {

        /**
         * Constructs a new CSPlayerOpCoin.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSPlayerOpCoin);

        /** CSPlayerOpCoin Op. */
        public Op: number;

        /** CSPlayerOpCoin Coin. */
        public Coin: (number|Long);

        /** CSPlayerOpCoin Password. */
        public Password: string;

        /** CSPlayerOpCoin TimeStamp. */
        public TimeStamp: (number|Long);

        /**
         * Encodes the specified CSPlayerOpCoin message. Does not implicitly {@link player.CSPlayerOpCoin.verify|verify} messages.
         * @param m CSPlayerOpCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSPlayerOpCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPlayerOpCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPlayerOpCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSPlayerOpCoin;
    }

    /** Properties of a SCPlayerOpCoin. */
    interface ISCPlayerOpCoin {

        /** SCPlayerOpCoin OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCPlayerOpCoin Op */
        Op?: (number|null);

        /** SCPlayerOpCoin Coin */
        Coin?: (number|Long|null);

        /** SCPlayerOpCoin SafeBoxCoin */
        SafeBoxCoin?: (number|Long|null);
    }

    /** Represents a SCPlayerOpCoin. */
    class SCPlayerOpCoin implements ISCPlayerOpCoin {

        /**
         * Constructs a new SCPlayerOpCoin.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPlayerOpCoin);

        /** SCPlayerOpCoin OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCPlayerOpCoin Op. */
        public Op: number;

        /** SCPlayerOpCoin Coin. */
        public Coin: (number|Long);

        /** SCPlayerOpCoin SafeBoxCoin. */
        public SafeBoxCoin: (number|Long);

        /**
         * Encodes the specified SCPlayerOpCoin message. Does not implicitly {@link player.SCPlayerOpCoin.verify|verify} messages.
         * @param m SCPlayerOpCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPlayerOpCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerOpCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerOpCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPlayerOpCoin;
    }

    /** Properties of a SafeBoxCoinLog. */
    interface ISafeBoxCoinLog {

        /** SafeBoxCoinLog LogType */
        LogType?: (number|null);

        /** SafeBoxCoinLog OPCoin */
        OPCoin?: (number|Long|null);

        /** SafeBoxCoinLog OPCoinFront */
        OPCoinFront?: (number|Long|null);

        /** SafeBoxCoinLog OPCoinLast */
        OPCoinLast?: (number|Long|null);

        /** SafeBoxCoinLog Ts */
        Ts?: (number|Long|null);
    }

    /** Represents a SafeBoxCoinLog. */
    class SafeBoxCoinLog implements ISafeBoxCoinLog {

        /**
         * Constructs a new SafeBoxCoinLog.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISafeBoxCoinLog);

        /** SafeBoxCoinLog LogType. */
        public LogType: number;

        /** SafeBoxCoinLog OPCoin. */
        public OPCoin: (number|Long);

        /** SafeBoxCoinLog OPCoinFront. */
        public OPCoinFront: (number|Long);

        /** SafeBoxCoinLog OPCoinLast. */
        public OPCoinLast: (number|Long);

        /** SafeBoxCoinLog Ts. */
        public Ts: (number|Long);

        /**
         * Encodes the specified SafeBoxCoinLog message. Does not implicitly {@link player.SafeBoxCoinLog.verify|verify} messages.
         * @param m SafeBoxCoinLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISafeBoxCoinLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SafeBoxCoinLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SafeBoxCoinLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SafeBoxCoinLog;
    }

    /** Properties of a CSGetSafeBoxCoinLog. */
    interface ICSGetSafeBoxCoinLog {

        /** CSGetSafeBoxCoinLog Ts */
        Ts?: (number|Long|null);
    }

    /** Represents a CSGetSafeBoxCoinLog. */
    class CSGetSafeBoxCoinLog implements ICSGetSafeBoxCoinLog {

        /**
         * Constructs a new CSGetSafeBoxCoinLog.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSGetSafeBoxCoinLog);

        /** CSGetSafeBoxCoinLog Ts. */
        public Ts: (number|Long);

        /**
         * Encodes the specified CSGetSafeBoxCoinLog message. Does not implicitly {@link player.CSGetSafeBoxCoinLog.verify|verify} messages.
         * @param m CSGetSafeBoxCoinLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSGetSafeBoxCoinLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetSafeBoxCoinLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetSafeBoxCoinLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSGetSafeBoxCoinLog;
    }

    /** Properties of a SCGetSafeBoxCoinLog. */
    interface ISCGetSafeBoxCoinLog {

        /** SCGetSafeBoxCoinLog OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCGetSafeBoxCoinLog Logs */
        Logs?: (player.ISafeBoxCoinLog[]|null);
    }

    /** Represents a SCGetSafeBoxCoinLog. */
    class SCGetSafeBoxCoinLog implements ISCGetSafeBoxCoinLog {

        /**
         * Constructs a new SCGetSafeBoxCoinLog.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCGetSafeBoxCoinLog);

        /** SCGetSafeBoxCoinLog OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCGetSafeBoxCoinLog Logs. */
        public Logs: player.ISafeBoxCoinLog[];

        /**
         * Encodes the specified SCGetSafeBoxCoinLog message. Does not implicitly {@link player.SCGetSafeBoxCoinLog.verify|verify} messages.
         * @param m SCGetSafeBoxCoinLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCGetSafeBoxCoinLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetSafeBoxCoinLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetSafeBoxCoinLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCGetSafeBoxCoinLog;
    }

    /** Properties of a CSPlayerInviteCode. */
    interface ICSPlayerInviteCode {

        /** CSPlayerInviteCode Code */
        Code?: (string|null);
    }

    /** Represents a CSPlayerInviteCode. */
    class CSPlayerInviteCode implements ICSPlayerInviteCode {

        /**
         * Constructs a new CSPlayerInviteCode.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSPlayerInviteCode);

        /** CSPlayerInviteCode Code. */
        public Code: string;

        /**
         * Encodes the specified CSPlayerInviteCode message. Does not implicitly {@link player.CSPlayerInviteCode.verify|verify} messages.
         * @param m CSPlayerInviteCode message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSPlayerInviteCode, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPlayerInviteCode message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPlayerInviteCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSPlayerInviteCode;
    }

    /** Properties of a SCPlayerInviteCode. */
    interface ISCPlayerInviteCode {

        /** SCPlayerInviteCode OpRetCode */
        OpRetCode?: (player.OpResultCode|null);
    }

    /** Represents a SCPlayerInviteCode. */
    class SCPlayerInviteCode implements ISCPlayerInviteCode {

        /**
         * Constructs a new SCPlayerInviteCode.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPlayerInviteCode);

        /** SCPlayerInviteCode OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /**
         * Encodes the specified SCPlayerInviteCode message. Does not implicitly {@link player.SCPlayerInviteCode.verify|verify} messages.
         * @param m SCPlayerInviteCode message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPlayerInviteCode, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerInviteCode message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerInviteCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPlayerInviteCode;
    }

    /** Properties of a CSWebAPIPlayerPass. */
    interface ICSWebAPIPlayerPass {

        /** CSWebAPIPlayerPass ApiName */
        ApiName?: (string|null);

        /** CSWebAPIPlayerPass Params */
        Params?: (string|null);

        /** CSWebAPIPlayerPass CBData */
        CBData?: (string|null);
    }

    /** Represents a CSWebAPIPlayerPass. */
    class CSWebAPIPlayerPass implements ICSWebAPIPlayerPass {

        /**
         * Constructs a new CSWebAPIPlayerPass.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSWebAPIPlayerPass);

        /** CSWebAPIPlayerPass ApiName. */
        public ApiName: string;

        /** CSWebAPIPlayerPass Params. */
        public Params: string;

        /** CSWebAPIPlayerPass CBData. */
        public CBData: string;

        /**
         * Encodes the specified CSWebAPIPlayerPass message. Does not implicitly {@link player.CSWebAPIPlayerPass.verify|verify} messages.
         * @param m CSWebAPIPlayerPass message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSWebAPIPlayerPass, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSWebAPIPlayerPass message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSWebAPIPlayerPass
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSWebAPIPlayerPass;
    }

    /** Properties of a SCWebAPIPlayerPass. */
    interface ISCWebAPIPlayerPass {

        /** SCWebAPIPlayerPass OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCWebAPIPlayerPass ApiName */
        ApiName?: (string|null);

        /** SCWebAPIPlayerPass CBData */
        CBData?: (string|null);

        /** SCWebAPIPlayerPass Response */
        Response?: (string|null);
    }

    /** Represents a SCWebAPIPlayerPass. */
    class SCWebAPIPlayerPass implements ISCWebAPIPlayerPass {

        /**
         * Constructs a new SCWebAPIPlayerPass.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCWebAPIPlayerPass);

        /** SCWebAPIPlayerPass OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCWebAPIPlayerPass ApiName. */
        public ApiName: string;

        /** SCWebAPIPlayerPass CBData. */
        public CBData: string;

        /** SCWebAPIPlayerPass Response. */
        public Response: string;

        /**
         * Encodes the specified SCWebAPIPlayerPass message. Does not implicitly {@link player.SCWebAPIPlayerPass.verify|verify} messages.
         * @param m SCWebAPIPlayerPass message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCWebAPIPlayerPass, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCWebAPIPlayerPass message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCWebAPIPlayerPass
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCWebAPIPlayerPass;
    }

    /** Properties of a CSWebAPISystemPass. */
    interface ICSWebAPISystemPass {

        /** CSWebAPISystemPass ApiName */
        ApiName?: (string|null);

        /** CSWebAPISystemPass Params */
        Params?: (string|null);

        /** CSWebAPISystemPass CBData */
        CBData?: (string|null);
    }

    /** Represents a CSWebAPISystemPass. */
    class CSWebAPISystemPass implements ICSWebAPISystemPass {

        /**
         * Constructs a new CSWebAPISystemPass.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSWebAPISystemPass);

        /** CSWebAPISystemPass ApiName. */
        public ApiName: string;

        /** CSWebAPISystemPass Params. */
        public Params: string;

        /** CSWebAPISystemPass CBData. */
        public CBData: string;

        /**
         * Encodes the specified CSWebAPISystemPass message. Does not implicitly {@link player.CSWebAPISystemPass.verify|verify} messages.
         * @param m CSWebAPISystemPass message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSWebAPISystemPass, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSWebAPISystemPass message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSWebAPISystemPass
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSWebAPISystemPass;
    }

    /** Properties of a SCWebAPISystemPass. */
    interface ISCWebAPISystemPass {

        /** SCWebAPISystemPass OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCWebAPISystemPass ApiName */
        ApiName?: (string|null);

        /** SCWebAPISystemPass CBData */
        CBData?: (string|null);

        /** SCWebAPISystemPass Response */
        Response?: (string|null);
    }

    /** Represents a SCWebAPISystemPass. */
    class SCWebAPISystemPass implements ISCWebAPISystemPass {

        /**
         * Constructs a new SCWebAPISystemPass.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCWebAPISystemPass);

        /** SCWebAPISystemPass OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCWebAPISystemPass ApiName. */
        public ApiName: string;

        /** SCWebAPISystemPass CBData. */
        public CBData: string;

        /** SCWebAPISystemPass Response. */
        public Response: string;

        /**
         * Encodes the specified SCWebAPISystemPass message. Does not implicitly {@link player.SCWebAPISystemPass.verify|verify} messages.
         * @param m SCWebAPISystemPass message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCWebAPISystemPass, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCWebAPISystemPass message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCWebAPISystemPass
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCWebAPISystemPass;
    }

    /** Properties of a CSSpreadBind. */
    interface ICSSpreadBind {

        /** CSSpreadBind ParentId */
        ParentId?: (number|null);
    }

    /** Represents a CSSpreadBind. */
    class CSSpreadBind implements ICSSpreadBind {

        /**
         * Constructs a new CSSpreadBind.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSSpreadBind);

        /** CSSpreadBind ParentId. */
        public ParentId: number;

        /**
         * Encodes the specified CSSpreadBind message. Does not implicitly {@link player.CSSpreadBind.verify|verify} messages.
         * @param m CSSpreadBind message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSSpreadBind, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSSpreadBind message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSSpreadBind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSSpreadBind;
    }

    /** Properties of a SCSpreadBind. */
    interface ISCSpreadBind {

        /** SCSpreadBind OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCSpreadBind ParentId */
        ParentId?: (number|null);
    }

    /** Represents a SCSpreadBind. */
    class SCSpreadBind implements ISCSpreadBind {

        /**
         * Constructs a new SCSpreadBind.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCSpreadBind);

        /** SCSpreadBind OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCSpreadBind ParentId. */
        public ParentId: number;

        /**
         * Encodes the specified SCSpreadBind message. Does not implicitly {@link player.SCSpreadBind.verify|verify} messages.
         * @param m SCSpreadBind message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCSpreadBind, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSpreadBind message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSpreadBind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCSpreadBind;
    }

    /** Properties of a CSBindPromoter. */
    interface ICSBindPromoter {

        /** CSBindPromoter Promoter */
        Promoter?: (string|null);
    }

    /** Represents a CSBindPromoter. */
    class CSBindPromoter implements ICSBindPromoter {

        /**
         * Constructs a new CSBindPromoter.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSBindPromoter);

        /** CSBindPromoter Promoter. */
        public Promoter: string;

        /**
         * Encodes the specified CSBindPromoter message. Does not implicitly {@link player.CSBindPromoter.verify|verify} messages.
         * @param m CSBindPromoter message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSBindPromoter, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSBindPromoter message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSBindPromoter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSBindPromoter;
    }

    /** Properties of a SCBindPromoter. */
    interface ISCBindPromoter {

        /** SCBindPromoter OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCBindPromoter Promoter */
        Promoter?: (string|null);
    }

    /** Represents a SCBindPromoter. */
    class SCBindPromoter implements ISCBindPromoter {

        /**
         * Constructs a new SCBindPromoter.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCBindPromoter);

        /** SCBindPromoter OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCBindPromoter Promoter. */
        public Promoter: string;

        /**
         * Encodes the specified SCBindPromoter message. Does not implicitly {@link player.SCBindPromoter.verify|verify} messages.
         * @param m SCBindPromoter message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCBindPromoter, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCBindPromoter message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCBindPromoter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCBindPromoter;
    }

    /** Properties of a SCBindPromoterState. */
    interface ISCBindPromoterState {

        /** SCBindPromoterState BindState */
        BindState?: (number|null);
    }

    /** Represents a SCBindPromoterState. */
    class SCBindPromoterState implements ISCBindPromoterState {

        /**
         * Constructs a new SCBindPromoterState.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCBindPromoterState);

        /** SCBindPromoterState BindState. */
        public BindState: number;

        /**
         * Encodes the specified SCBindPromoterState message. Does not implicitly {@link player.SCBindPromoterState.verify|verify} messages.
         * @param m SCBindPromoterState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCBindPromoterState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCBindPromoterState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCBindPromoterState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCBindPromoterState;
    }

    /** Properties of a CSGenCustomerToken. */
    interface ICSGenCustomerToken {
    }

    /** Represents a CSGenCustomerToken. */
    class CSGenCustomerToken implements ICSGenCustomerToken {

        /**
         * Constructs a new CSGenCustomerToken.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSGenCustomerToken);

        /**
         * Encodes the specified CSGenCustomerToken message. Does not implicitly {@link player.CSGenCustomerToken.verify|verify} messages.
         * @param m CSGenCustomerToken message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSGenCustomerToken, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGenCustomerToken message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGenCustomerToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSGenCustomerToken;
    }

    /** Properties of a SCGenCustomerToken. */
    interface ISCGenCustomerToken {

        /** SCGenCustomerToken Token */
        Token?: (string|null);
    }

    /** Represents a SCGenCustomerToken. */
    class SCGenCustomerToken implements ISCGenCustomerToken {

        /**
         * Constructs a new SCGenCustomerToken.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCGenCustomerToken);

        /** SCGenCustomerToken Token. */
        public Token: string;

        /**
         * Encodes the specified SCGenCustomerToken message. Does not implicitly {@link player.SCGenCustomerToken.verify|verify} messages.
         * @param m SCGenCustomerToken message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCGenCustomerToken, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGenCustomerToken message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGenCustomerToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCGenCustomerToken;
    }

    /** Properties of a CustomerMsg. */
    interface ICustomerMsg {

        /** CustomerMsg MsgId */
        MsgId?: (string|null);

        /** CustomerMsg Data */
        Data?: (string|null);
    }

    /** Represents a CustomerMsg. */
    class CustomerMsg implements ICustomerMsg {

        /**
         * Constructs a new CustomerMsg.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICustomerMsg);

        /** CustomerMsg MsgId. */
        public MsgId: string;

        /** CustomerMsg Data. */
        public Data: string;

        /**
         * Encodes the specified CustomerMsg message. Does not implicitly {@link player.CustomerMsg.verify|verify} messages.
         * @param m CustomerMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICustomerMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomerMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CustomerMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CustomerMsg;
    }

    /** Properties of a SCCustomerNewMsg. */
    interface ISCCustomerNewMsg {

        /** SCCustomerNewMsg Data */
        Data?: (player.ICustomerMsg[]|null);
    }

    /** Represents a SCCustomerNewMsg. */
    class SCCustomerNewMsg implements ISCCustomerNewMsg {

        /**
         * Constructs a new SCCustomerNewMsg.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCCustomerNewMsg);

        /** SCCustomerNewMsg Data. */
        public Data: player.ICustomerMsg[];

        /**
         * Encodes the specified SCCustomerNewMsg message. Does not implicitly {@link player.SCCustomerNewMsg.verify|verify} messages.
         * @param m SCCustomerNewMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCCustomerNewMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCCustomerNewMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCCustomerNewMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCCustomerNewMsg;
    }

    /** Properties of a CSCustomerNewMsgAck. */
    interface ICSCustomerNewMsgAck {

        /** CSCustomerNewMsgAck MsgIds */
        MsgIds?: (string[]|null);
    }

    /** Represents a CSCustomerNewMsgAck. */
    class CSCustomerNewMsgAck implements ICSCustomerNewMsgAck {

        /**
         * Constructs a new CSCustomerNewMsgAck.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSCustomerNewMsgAck);

        /** CSCustomerNewMsgAck MsgIds. */
        public MsgIds: string[];

        /**
         * Encodes the specified CSCustomerNewMsgAck message. Does not implicitly {@link player.CSCustomerNewMsgAck.verify|verify} messages.
         * @param m CSCustomerNewMsgAck message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSCustomerNewMsgAck, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSCustomerNewMsgAck message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSCustomerNewMsgAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSCustomerNewMsgAck;
    }

    /** Properties of a CSGetImgageVerifyCode. */
    interface ICSGetImgageVerifyCode {

        /** CSGetImgageVerifyCode Tel */
        Tel?: (string|null);

        /** CSGetImgageVerifyCode PlatformTag */
        PlatformTag?: (string|null);
    }

    /** Represents a CSGetImgageVerifyCode. */
    class CSGetImgageVerifyCode implements ICSGetImgageVerifyCode {

        /**
         * Constructs a new CSGetImgageVerifyCode.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSGetImgageVerifyCode);

        /** CSGetImgageVerifyCode Tel. */
        public Tel: string;

        /** CSGetImgageVerifyCode PlatformTag. */
        public PlatformTag: string;

        /**
         * Encodes the specified CSGetImgageVerifyCode message. Does not implicitly {@link player.CSGetImgageVerifyCode.verify|verify} messages.
         * @param m CSGetImgageVerifyCode message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSGetImgageVerifyCode, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetImgageVerifyCode message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetImgageVerifyCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSGetImgageVerifyCode;
    }

    /** Properties of a SCGetImgageVerifyCode. */
    interface ISCGetImgageVerifyCode {

        /** SCGetImgageVerifyCode OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCGetImgageVerifyCode ImageData */
        ImageData?: (string|null);
    }

    /** Represents a SCGetImgageVerifyCode. */
    class SCGetImgageVerifyCode implements ISCGetImgageVerifyCode {

        /**
         * Constructs a new SCGetImgageVerifyCode.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCGetImgageVerifyCode);

        /** SCGetImgageVerifyCode OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCGetImgageVerifyCode ImageData. */
        public ImageData: string;

        /**
         * Encodes the specified SCGetImgageVerifyCode message. Does not implicitly {@link player.SCGetImgageVerifyCode.verify|verify} messages.
         * @param m SCGetImgageVerifyCode message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCGetImgageVerifyCode, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetImgageVerifyCode message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetImgageVerifyCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCGetImgageVerifyCode;
    }

    /** Properties of a SCTrusteeshipTips. */
    interface ISCTrusteeshipTips {

        /** SCTrusteeshipTips Trusteeship */
        Trusteeship?: (number|null);

        /** SCTrusteeshipTips TotalNum */
        TotalNum?: (number|null);

        /** SCTrusteeshipTips GameFreeId */
        GameFreeId?: (number|null);

        /** SCTrusteeshipTips OpParams */
        OpParams?: (number[]|null);
    }

    /** Represents a SCTrusteeshipTips. */
    class SCTrusteeshipTips implements ISCTrusteeshipTips {

        /**
         * Constructs a new SCTrusteeshipTips.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCTrusteeshipTips);

        /** SCTrusteeshipTips Trusteeship. */
        public Trusteeship: number;

        /** SCTrusteeshipTips TotalNum. */
        public TotalNum: number;

        /** SCTrusteeshipTips GameFreeId. */
        public GameFreeId: number;

        /** SCTrusteeshipTips OpParams. */
        public OpParams: number[];

        /**
         * Encodes the specified SCTrusteeshipTips message. Does not implicitly {@link player.SCTrusteeshipTips.verify|verify} messages.
         * @param m SCTrusteeshipTips message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCTrusteeshipTips, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTrusteeshipTips message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTrusteeshipTips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCTrusteeshipTips;
    }

    /** Properties of a CSGetSliderVerifyCode. */
    interface ICSGetSliderVerifyCode {

        /** CSGetSliderVerifyCode Tel */
        Tel?: (string|null);
    }

    /** Represents a CSGetSliderVerifyCode. */
    class CSGetSliderVerifyCode implements ICSGetSliderVerifyCode {

        /**
         * Constructs a new CSGetSliderVerifyCode.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSGetSliderVerifyCode);

        /** CSGetSliderVerifyCode Tel. */
        public Tel: string;

        /**
         * Encodes the specified CSGetSliderVerifyCode message. Does not implicitly {@link player.CSGetSliderVerifyCode.verify|verify} messages.
         * @param m CSGetSliderVerifyCode message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSGetSliderVerifyCode, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetSliderVerifyCode message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetSliderVerifyCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSGetSliderVerifyCode;
    }

    /** Properties of a SCGetSliderVerifyCode. */
    interface ISCGetSliderVerifyCode {

        /** SCGetSliderVerifyCode OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCGetSliderVerifyCode Pos */
        Pos?: (number|null);
    }

    /** Represents a SCGetSliderVerifyCode. */
    class SCGetSliderVerifyCode implements ISCGetSliderVerifyCode {

        /**
         * Constructs a new SCGetSliderVerifyCode.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCGetSliderVerifyCode);

        /** SCGetSliderVerifyCode OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCGetSliderVerifyCode Pos. */
        public Pos: number;

        /**
         * Encodes the specified SCGetSliderVerifyCode message. Does not implicitly {@link player.SCGetSliderVerifyCode.verify|verify} messages.
         * @param m SCGetSliderVerifyCode message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCGetSliderVerifyCode, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetSliderVerifyCode message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetSliderVerifyCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCGetSliderVerifyCode;
    }

    /** Properties of a CSIosInstallStable. */
    interface ICSIosInstallStable {

        /** CSIosInstallStable SnId */
        SnId?: (number|null);

        /** CSIosInstallStable Tel */
        Tel?: (string|null);
    }

    /** Represents a CSIosInstallStable. */
    class CSIosInstallStable implements ICSIosInstallStable {

        /**
         * Constructs a new CSIosInstallStable.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSIosInstallStable);

        /** CSIosInstallStable SnId. */
        public SnId: number;

        /** CSIosInstallStable Tel. */
        public Tel: string;

        /**
         * Encodes the specified CSIosInstallStable message. Does not implicitly {@link player.CSIosInstallStable.verify|verify} messages.
         * @param m CSIosInstallStable message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSIosInstallStable, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSIosInstallStable message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSIosInstallStable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSIosInstallStable;
    }

    /** Properties of a SCIosInstallStable. */
    interface ISCIosInstallStable {

        /** SCIosInstallStable OpRetCode */
        OpRetCode?: (player.OpResultCode|null);
    }

    /** Represents a SCIosInstallStable. */
    class SCIosInstallStable implements ISCIosInstallStable {

        /**
         * Constructs a new SCIosInstallStable.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCIosInstallStable);

        /** SCIosInstallStable OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /**
         * Encodes the specified SCIosInstallStable message. Does not implicitly {@link player.SCIosInstallStable.verify|verify} messages.
         * @param m SCIosInstallStable message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCIosInstallStable, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCIosInstallStable message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCIosInstallStable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCIosInstallStable;
    }

    /** Properties of a SrvMsgParam. */
    interface ISrvMsgParam {

        /** SrvMsgParam IntParam */
        IntParam?: (number|null);

        /** SrvMsgParam StrParam */
        StrParam?: (string|null);
    }

    /** Represents a SrvMsgParam. */
    class SrvMsgParam implements ISrvMsgParam {

        /**
         * Constructs a new SrvMsgParam.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISrvMsgParam);

        /** SrvMsgParam IntParam. */
        public IntParam: number;

        /** SrvMsgParam StrParam. */
        public StrParam: string;

        /**
         * Encodes the specified SrvMsgParam message. Does not implicitly {@link player.SrvMsgParam.verify|verify} messages.
         * @param m SrvMsgParam message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISrvMsgParam, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SrvMsgParam message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SrvMsgParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SrvMsgParam;
    }

    /** Properties of a SCSrvMsg. */
    interface ISCSrvMsg {

        /** SCSrvMsg MsgId */
        MsgId?: (number|null);

        /** SCSrvMsg Params */
        Params?: (player.ISrvMsgParam[]|null);
    }

    /** Represents a SCSrvMsg. */
    class SCSrvMsg implements ISCSrvMsg {

        /**
         * Constructs a new SCSrvMsg.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCSrvMsg);

        /** SCSrvMsg MsgId. */
        public MsgId: number;

        /** SCSrvMsg Params. */
        public Params: player.ISrvMsgParam[];

        /**
         * Encodes the specified SCSrvMsg message. Does not implicitly {@link player.SCSrvMsg.verify|verify} messages.
         * @param m SCSrvMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCSrvMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSrvMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSrvMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCSrvMsg;
    }

    /** Properties of a CSJackpotList. */
    interface ICSJackpotList {

        /** CSJackpotList SnId */
        SnId?: (number|null);
    }

    /** Represents a CSJackpotList. */
    class CSJackpotList implements ICSJackpotList {

        /**
         * Constructs a new CSJackpotList.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSJackpotList);

        /** CSJackpotList SnId. */
        public SnId: number;

        /**
         * Encodes the specified CSJackpotList message. Does not implicitly {@link player.CSJackpotList.verify|verify} messages.
         * @param m CSJackpotList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSJackpotList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSJackpotList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSJackpotList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSJackpotList;
    }

    /** Properties of a FishJackpotInfo. */
    interface IFishJackpotInfo {

        /** FishJackpotInfo Name */
        Name?: (string|null);

        /** FishJackpotInfo Type */
        Type?: (number|null);

        /** FishJackpotInfo Coin */
        Coin?: (number|Long|null);

        /** FishJackpotInfo Ts */
        Ts?: (number|Long|null);
    }

    /** Represents a FishJackpotInfo. */
    class FishJackpotInfo implements IFishJackpotInfo {

        /**
         * Constructs a new FishJackpotInfo.
         * @param [p] Properties to set
         */
        constructor(p?: player.IFishJackpotInfo);

        /** FishJackpotInfo Name. */
        public Name: string;

        /** FishJackpotInfo Type. */
        public Type: number;

        /** FishJackpotInfo Coin. */
        public Coin: (number|Long);

        /** FishJackpotInfo Ts. */
        public Ts: (number|Long);

        /**
         * Encodes the specified FishJackpotInfo message. Does not implicitly {@link player.FishJackpotInfo.verify|verify} messages.
         * @param m FishJackpotInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.IFishJackpotInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FishJackpotInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FishJackpotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.FishJackpotInfo;
    }

    /** Properties of a SCJackpotList. */
    interface ISCJackpotList {

        /** SCJackpotList JackpotList */
        JackpotList?: (player.IFishJackpotInfo[]|null);
    }

    /** Represents a SCJackpotList. */
    class SCJackpotList implements ISCJackpotList {

        /**
         * Constructs a new SCJackpotList.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCJackpotList);

        /** SCJackpotList JackpotList. */
        public JackpotList: player.IFishJackpotInfo[];

        /**
         * Encodes the specified SCJackpotList message. Does not implicitly {@link player.SCJackpotList.verify|verify} messages.
         * @param m SCJackpotList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCJackpotList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCJackpotList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCJackpotList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCJackpotList;
    }

    /** Properties of a CSFishJackpotCoin. */
    interface ICSFishJackpotCoin {
    }

    /** Represents a CSFishJackpotCoin. */
    class CSFishJackpotCoin implements ICSFishJackpotCoin {

        /**
         * Constructs a new CSFishJackpotCoin.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSFishJackpotCoin);

        /**
         * Encodes the specified CSFishJackpotCoin message. Does not implicitly {@link player.CSFishJackpotCoin.verify|verify} messages.
         * @param m CSFishJackpotCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSFishJackpotCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSFishJackpotCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSFishJackpotCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSFishJackpotCoin;
    }

    /** Properties of a SCFishJackpotCoin. */
    interface ISCFishJackpotCoin {

        /** SCFishJackpotCoin Coin */
        Coin?: (number|Long|null);
    }

    /** Represents a SCFishJackpotCoin. */
    class SCFishJackpotCoin implements ISCFishJackpotCoin {

        /**
         * Constructs a new SCFishJackpotCoin.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCFishJackpotCoin);

        /** SCFishJackpotCoin Coin. */
        public Coin: (number|Long);

        /**
         * Encodes the specified SCFishJackpotCoin message. Does not implicitly {@link player.SCFishJackpotCoin.verify|verify} messages.
         * @param m SCFishJackpotCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCFishJackpotCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCFishJackpotCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCFishJackpotCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCFishJackpotCoin;
    }

    /** Properties of a SCNiceIdRebind. */
    interface ISCNiceIdRebind {

        /** SCNiceIdRebind SnidId */
        SnidId?: (number|null);

        /** SCNiceIdRebind NiceId */
        NiceId?: (number|null);
    }

    /** Represents a SCNiceIdRebind. */
    class SCNiceIdRebind implements ISCNiceIdRebind {

        /**
         * Constructs a new SCNiceIdRebind.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCNiceIdRebind);

        /** SCNiceIdRebind SnidId. */
        public SnidId: number;

        /** SCNiceIdRebind NiceId. */
        public NiceId: number;

        /**
         * Encodes the specified SCNiceIdRebind message. Does not implicitly {@link player.SCNiceIdRebind.verify|verify} messages.
         * @param m SCNiceIdRebind message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCNiceIdRebind, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCNiceIdRebind message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCNiceIdRebind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCNiceIdRebind;
    }

    /** Properties of a CSGetSpreadLWIsOpen. */
    interface ICSGetSpreadLWIsOpen {
    }

    /** Represents a CSGetSpreadLWIsOpen. */
    class CSGetSpreadLWIsOpen implements ICSGetSpreadLWIsOpen {

        /**
         * Constructs a new CSGetSpreadLWIsOpen.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSGetSpreadLWIsOpen);

        /**
         * Encodes the specified CSGetSpreadLWIsOpen message. Does not implicitly {@link player.CSGetSpreadLWIsOpen.verify|verify} messages.
         * @param m CSGetSpreadLWIsOpen message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSGetSpreadLWIsOpen, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSGetSpreadLWIsOpen message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSGetSpreadLWIsOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSGetSpreadLWIsOpen;
    }

    /** Properties of a SCGetSpreadLWIsOpen. */
    interface ISCGetSpreadLWIsOpen {

        /** SCGetSpreadLWIsOpen IsOpen */
        IsOpen?: (number|null);
    }

    /** Represents a SCGetSpreadLWIsOpen. */
    class SCGetSpreadLWIsOpen implements ISCGetSpreadLWIsOpen {

        /**
         * Constructs a new SCGetSpreadLWIsOpen.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCGetSpreadLWIsOpen);

        /** SCGetSpreadLWIsOpen IsOpen. */
        public IsOpen: number;

        /**
         * Encodes the specified SCGetSpreadLWIsOpen message. Does not implicitly {@link player.SCGetSpreadLWIsOpen.verify|verify} messages.
         * @param m SCGetSpreadLWIsOpen message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCGetSpreadLWIsOpen, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGetSpreadLWIsOpen message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGetSpreadLWIsOpen
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCGetSpreadLWIsOpen;
    }

    /** Properties of a PayActInfo. */
    interface IPayActInfo {

        /** PayActInfo Id */
        Id?: (number|null);

        /** PayActInfo GiveNum */
        GiveNum?: (number|null);

        /** PayActInfo GiveType */
        GiveType?: (number|null);

        /** PayActInfo StartTime */
        StartTime?: (number|null);

        /** PayActInfo EndTime */
        EndTime?: (number|null);

        /** PayActInfo State */
        State?: (number|null);
    }

    /** Represents a PayActInfo. */
    class PayActInfo implements IPayActInfo {

        /**
         * Constructs a new PayActInfo.
         * @param [p] Properties to set
         */
        constructor(p?: player.IPayActInfo);

        /** PayActInfo Id. */
        public Id: number;

        /** PayActInfo GiveNum. */
        public GiveNum: number;

        /** PayActInfo GiveType. */
        public GiveType: number;

        /** PayActInfo StartTime. */
        public StartTime: number;

        /** PayActInfo EndTime. */
        public EndTime: number;

        /** PayActInfo State. */
        public State: number;

        /**
         * Encodes the specified PayActInfo message. Does not implicitly {@link player.PayActInfo.verify|verify} messages.
         * @param m PayActInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.IPayActInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PayActInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PayActInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.PayActInfo;
    }

    /** Properties of a SCPayActState. */
    interface ISCPayActState {

        /** SCPayActState PayState */
        PayState?: (player.IPayActInfo[]|null);
    }

    /** Represents a SCPayActState. */
    class SCPayActState implements ISCPayActState {

        /**
         * Constructs a new SCPayActState.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPayActState);

        /** SCPayActState PayState. */
        public PayState: player.IPayActInfo[];

        /**
         * Encodes the specified SCPayActState message. Does not implicitly {@link player.SCPayActState.verify|verify} messages.
         * @param m SCPayActState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPayActState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPayActState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPayActState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPayActState;
    }

    /** Properties of a CSQueryPlayer. */
    interface ICSQueryPlayer {

        /** CSQueryPlayer SnId */
        SnId?: (number|null);
    }

    /** Represents a CSQueryPlayer. */
    class CSQueryPlayer implements ICSQueryPlayer {

        /**
         * Constructs a new CSQueryPlayer.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSQueryPlayer);

        /** CSQueryPlayer SnId. */
        public SnId: number;

        /**
         * Encodes the specified CSQueryPlayer message. Does not implicitly {@link player.CSQueryPlayer.verify|verify} messages.
         * @param m CSQueryPlayer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSQueryPlayer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSQueryPlayer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSQueryPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSQueryPlayer;
    }

    /** Properties of a RoleOrPet. */
    interface IRoleOrPet {

        /** RoleOrPet Id */
        Id?: (number|null);

        /** RoleOrPet Level */
        Level?: (number|null);

        /** RoleOrPet Name */
        Name?: (string|null);
    }

    /** Represents a RoleOrPet. */
    class RoleOrPet implements IRoleOrPet {

        /**
         * Constructs a new RoleOrPet.
         * @param [p] Properties to set
         */
        constructor(p?: player.IRoleOrPet);

        /** RoleOrPet Id. */
        public Id: number;

        /** RoleOrPet Level. */
        public Level: number;

        /** RoleOrPet Name. */
        public Name: string;

        /**
         * Encodes the specified RoleOrPet message. Does not implicitly {@link player.RoleOrPet.verify|verify} messages.
         * @param m RoleOrPet message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.IRoleOrPet, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleOrPet message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RoleOrPet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.RoleOrPet;
    }

    /** Properties of a SCQueryPlayer. */
    interface ISCQueryPlayer {

        /** SCQueryPlayer SnId */
        SnId?: (number|null);

        /** SCQueryPlayer Name */
        Name?: (string|null);

        /** SCQueryPlayer Head */
        Head?: (number|null);

        /** SCQueryPlayer Sex */
        Sex?: (number|null);

        /** SCQueryPlayer Coin */
        Coin?: (number|Long|null);

        /** SCQueryPlayer Diamond */
        Diamond?: (number|Long|null);

        /** SCQueryPlayer VCard */
        VCard?: (number|Long|null);

        /** SCQueryPlayer IsFriend */
        IsFriend?: (boolean|null);

        /** SCQueryPlayer CurRoleId */
        CurRoleId?: (number|null);

        /** SCQueryPlayer CurPetId */
        CurPetId?: (number|null);

        /** SCQueryPlayer Roles */
        Roles?: (player.IRoleOrPet[]|null);

        /** SCQueryPlayer Pets */
        Pets?: (player.IRoleOrPet[]|null);

        /** SCQueryPlayer IsShield */
        IsShield?: (boolean|null);
    }

    /** Represents a SCQueryPlayer. */
    class SCQueryPlayer implements ISCQueryPlayer {

        /**
         * Constructs a new SCQueryPlayer.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCQueryPlayer);

        /** SCQueryPlayer SnId. */
        public SnId: number;

        /** SCQueryPlayer Name. */
        public Name: string;

        /** SCQueryPlayer Head. */
        public Head: number;

        /** SCQueryPlayer Sex. */
        public Sex: number;

        /** SCQueryPlayer Coin. */
        public Coin: (number|Long);

        /** SCQueryPlayer Diamond. */
        public Diamond: (number|Long);

        /** SCQueryPlayer VCard. */
        public VCard: (number|Long);

        /** SCQueryPlayer IsFriend. */
        public IsFriend: boolean;

        /** SCQueryPlayer CurRoleId. */
        public CurRoleId: number;

        /** SCQueryPlayer CurPetId. */
        public CurPetId: number;

        /** SCQueryPlayer Roles. */
        public Roles: player.IRoleOrPet[];

        /** SCQueryPlayer Pets. */
        public Pets: player.IRoleOrPet[];

        /** SCQueryPlayer IsShield. */
        public IsShield: boolean;

        /**
         * Encodes the specified SCQueryPlayer message. Does not implicitly {@link player.SCQueryPlayer.verify|verify} messages.
         * @param m SCQueryPlayer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCQueryPlayer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCQueryPlayer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCQueryPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCQueryPlayer;
    }

    /** Properties of a CSPMCmd. */
    interface ICSPMCmd {

        /** CSPMCmd Cmd */
        Cmd?: (string|null);
    }

    /** Represents a CSPMCmd. */
    class CSPMCmd implements ICSPMCmd {

        /**
         * Constructs a new CSPMCmd.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSPMCmd);

        /** CSPMCmd Cmd. */
        public Cmd: string;

        /**
         * Encodes the specified CSPMCmd message. Does not implicitly {@link player.CSPMCmd.verify|verify} messages.
         * @param m CSPMCmd message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSPMCmd, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPMCmd message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPMCmd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSPMCmd;
    }

    /** Properties of a CSRobotChgData. */
    interface ICSRobotChgData {

        /** CSRobotChgData Params */
        Params?: (string[]|null);
    }

    /** Represents a CSRobotChgData. */
    class CSRobotChgData implements ICSRobotChgData {

        /**
         * Constructs a new CSRobotChgData.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSRobotChgData);

        /** CSRobotChgData Params. */
        public Params: string[];

        /**
         * Encodes the specified CSRobotChgData message. Does not implicitly {@link player.CSRobotChgData.verify|verify} messages.
         * @param m CSRobotChgData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSRobotChgData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSRobotChgData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSRobotChgData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSRobotChgData;
    }

    /** Properties of an ItemInfo. */
    interface IItemInfo {

        /** ItemInfo ItemId */
        ItemId?: (number|null);

        /** ItemInfo ItemNum */
        ItemNum?: (number|null);

        /** ItemInfo Name */
        Name?: (string|null);

        /** ItemInfo Classify */
        Classify?: (number|null);

        /** ItemInfo Type */
        Type?: (number|null);

        /** ItemInfo Function */
        Function?: (number[]|null);

        /** ItemInfo SaleGold */
        SaleGold?: (number|null);

        /** ItemInfo Composition */
        Composition?: (number|null);

        /** ItemInfo CompositionMax */
        CompositionMax?: (number|null);

        /** ItemInfo Time */
        Time?: (number|null);

        /** ItemInfo Location */
        Location?: (string|null);

        /** ItemInfo Describe */
        Describe?: (string|null);

        /** ItemInfo CType */
        CType?: (number|null);
    }

    /** Represents an ItemInfo. */
    class ItemInfo implements IItemInfo {

        /**
         * Constructs a new ItemInfo.
         * @param [p] Properties to set
         */
        constructor(p?: player.IItemInfo);

        /** ItemInfo ItemId. */
        public ItemId: number;

        /** ItemInfo ItemNum. */
        public ItemNum: number;

        /** ItemInfo Name. */
        public Name: string;

        /** ItemInfo Classify. */
        public Classify: number;

        /** ItemInfo Type. */
        public Type: number;

        /** ItemInfo Function. */
        public Function: number[];

        /** ItemInfo SaleGold. */
        public SaleGold: number;

        /** ItemInfo Composition. */
        public Composition: number;

        /** ItemInfo CompositionMax. */
        public CompositionMax: number;

        /** ItemInfo Time. */
        public Time: number;

        /** ItemInfo Location. */
        public Location: string;

        /** ItemInfo Describe. */
        public Describe: string;

        /** ItemInfo CType. */
        public CType: number;

        /**
         * Encodes the specified ItemInfo message. Does not implicitly {@link player.ItemInfo.verify|verify} messages.
         * @param m ItemInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.IItemInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.ItemInfo;
    }

    /** Properties of a JybInfoAward. */
    interface IJybInfoAward {

        /** JybInfoAward ItemId */
        ItemId?: (player.IItemInfo[]|null);

        /** JybInfoAward Coin */
        Coin?: (number|Long|null);

        /** JybInfoAward Diamond */
        Diamond?: (number|Long|null);
    }

    /** Represents a JybInfoAward. */
    class JybInfoAward implements IJybInfoAward {

        /**
         * Constructs a new JybInfoAward.
         * @param [p] Properties to set
         */
        constructor(p?: player.IJybInfoAward);

        /** JybInfoAward ItemId. */
        public ItemId: player.IItemInfo[];

        /** JybInfoAward Coin. */
        public Coin: (number|Long);

        /** JybInfoAward Diamond. */
        public Diamond: (number|Long);

        /**
         * Encodes the specified JybInfoAward message. Does not implicitly {@link player.JybInfoAward.verify|verify} messages.
         * @param m JybInfoAward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.IJybInfoAward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JybInfoAward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns JybInfoAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.JybInfoAward;
    }

    /** Properties of a CSPlayerSetting. */
    interface ICSPlayerSetting {

        /** CSPlayerSetting Optype */
        Optype?: (number|null);

        /** CSPlayerSetting PackageCode */
        PackageCode?: (string|null);
    }

    /** Represents a CSPlayerSetting. */
    class CSPlayerSetting implements ICSPlayerSetting {

        /**
         * Constructs a new CSPlayerSetting.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSPlayerSetting);

        /** CSPlayerSetting Optype. */
        public Optype: number;

        /** CSPlayerSetting PackageCode. */
        public PackageCode: string;

        /**
         * Encodes the specified CSPlayerSetting message. Does not implicitly {@link player.CSPlayerSetting.verify|verify} messages.
         * @param m CSPlayerSetting message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSPlayerSetting, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPlayerSetting message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPlayerSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSPlayerSetting;
    }

    /** Properties of a SCPlayerSetting. */
    interface ISCPlayerSetting {

        /** SCPlayerSetting OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCPlayerSetting GainItem */
        GainItem?: (player.IJybInfoAward|null);
    }

    /** Represents a SCPlayerSetting. */
    class SCPlayerSetting implements ISCPlayerSetting {

        /**
         * Constructs a new SCPlayerSetting.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCPlayerSetting);

        /** SCPlayerSetting OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCPlayerSetting GainItem. */
        public GainItem?: (player.IJybInfoAward|null);

        /**
         * Encodes the specified SCPlayerSetting message. Does not implicitly {@link player.SCPlayerSetting.verify|verify} messages.
         * @param m SCPlayerSetting message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCPlayerSetting, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPlayerSetting message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPlayerSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCPlayerSetting;
    }

    /** Properties of a SCGameExDropItems. */
    interface ISCGameExDropItems {

        /** SCGameExDropItems Items */
        Items?: ({ [k: string]: number }|null);
    }

    /** Represents a SCGameExDropItems. */
    class SCGameExDropItems implements ISCGameExDropItems {

        /**
         * Constructs a new SCGameExDropItems.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCGameExDropItems);

        /** SCGameExDropItems Items. */
        public Items: { [k: string]: number };

        /**
         * Encodes the specified SCGameExDropItems message. Does not implicitly {@link player.SCGameExDropItems.verify|verify} messages.
         * @param m SCGameExDropItems message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCGameExDropItems, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCGameExDropItems message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCGameExDropItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCGameExDropItems;
    }

    /** Properties of a CSVIPBuy. */
    interface ICSVIPBuy {

        /** CSVIPBuy Money */
        Money?: (number|null);
    }

    /** Represents a CSVIPBuy. */
    class CSVIPBuy implements ICSVIPBuy {

        /**
         * Constructs a new CSVIPBuy.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSVIPBuy);

        /** CSVIPBuy Money. */
        public Money: number;

        /**
         * Encodes the specified CSVIPBuy message. Does not implicitly {@link player.CSVIPBuy.verify|verify} messages.
         * @param m CSVIPBuy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSVIPBuy, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSVIPBuy message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSVIPBuy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSVIPBuy;
    }

    /** Properties of a SCVIPBuy. */
    interface ISCVIPBuy {

        /** SCVIPBuy OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCVIPBuy Money */
        Money?: (number|Long|null);

        /** SCVIPBuy Vip */
        Vip?: (number|null);

        /** SCVIPBuy TolVipExp */
        TolVipExp?: (number|Long|null);
    }

    /** Represents a SCVIPBuy. */
    class SCVIPBuy implements ISCVIPBuy {

        /**
         * Constructs a new SCVIPBuy.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCVIPBuy);

        /** SCVIPBuy OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCVIPBuy Money. */
        public Money: (number|Long);

        /** SCVIPBuy Vip. */
        public Vip: number;

        /** SCVIPBuy TolVipExp. */
        public TolVipExp: (number|Long);

        /**
         * Encodes the specified SCVIPBuy message. Does not implicitly {@link player.SCVIPBuy.verify|verify} messages.
         * @param m SCVIPBuy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCVIPBuy, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCVIPBuy message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCVIPBuy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCVIPBuy;
    }

    /** Properties of a CSVIPDraw. */
    interface ICSVIPDraw {

        /** CSVIPDraw Id */
        Id?: (number|null);
    }

    /** Represents a CSVIPDraw. */
    class CSVIPDraw implements ICSVIPDraw {

        /**
         * Constructs a new CSVIPDraw.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSVIPDraw);

        /** CSVIPDraw Id. */
        public Id: number;

        /**
         * Encodes the specified CSVIPDraw message. Does not implicitly {@link player.CSVIPDraw.verify|verify} messages.
         * @param m CSVIPDraw message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSVIPDraw, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSVIPDraw message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSVIPDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSVIPDraw;
    }

    /** Properties of a SCVIPDraw. */
    interface ISCVIPDraw {

        /** SCVIPDraw OpRetCode */
        OpRetCode?: (player.OpResultCode|null);
    }

    /** Represents a SCVIPDraw. */
    class SCVIPDraw implements ISCVIPDraw {

        /**
         * Constructs a new SCVIPDraw.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCVIPDraw);

        /** SCVIPDraw OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /**
         * Encodes the specified SCVIPDraw message. Does not implicitly {@link player.SCVIPDraw.verify|verify} messages.
         * @param m SCVIPDraw message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCVIPDraw, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCVIPDraw message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCVIPDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCVIPDraw;
    }

    /** Properties of a CSVIPInfo. */
    interface ICSVIPInfo {
    }

    /** Represents a CSVIPInfo. */
    class CSVIPInfo implements ICSVIPInfo {

        /**
         * Constructs a new CSVIPInfo.
         * @param [p] Properties to set
         */
        constructor(p?: player.ICSVIPInfo);

        /**
         * Encodes the specified CSVIPInfo message. Does not implicitly {@link player.CSVIPInfo.verify|verify} messages.
         * @param m CSVIPInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ICSVIPInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSVIPInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSVIPInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.CSVIPInfo;
    }

    /** Properties of a VIPcfg. */
    interface IVIPcfg {

        /** VIPcfg VIPId */
        VIPId?: (number|null);

        /** VIPcfg Item */
        Item?: (player.IItemInfo[]|null);

        /** VIPcfg VIPEX */
        VIPEX?: (number|null);

        /** VIPcfg Price */
        Price?: (number|Long|null);
    }

    /** Represents a VIPcfg. */
    class VIPcfg implements IVIPcfg {

        /**
         * Constructs a new VIPcfg.
         * @param [p] Properties to set
         */
        constructor(p?: player.IVIPcfg);

        /** VIPcfg VIPId. */
        public VIPId: number;

        /** VIPcfg Item. */
        public Item: player.IItemInfo[];

        /** VIPcfg VIPEX. */
        public VIPEX: number;

        /** VIPcfg Price. */
        public Price: (number|Long);

        /**
         * Encodes the specified VIPcfg message. Does not implicitly {@link player.VIPcfg.verify|verify} messages.
         * @param m VIPcfg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.IVIPcfg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VIPcfg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns VIPcfg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.VIPcfg;
    }

    /** Properties of a SCVIPInfo. */
    interface ISCVIPInfo {

        /** SCVIPInfo OpRetCode */
        OpRetCode?: (player.OpResultCode|null);

        /** SCVIPInfo List */
        List?: (player.IVIPcfg[]|null);

        /** SCVIPInfo TolVipExp */
        TolVipExp?: (number|Long|null);

        /** SCVIPInfo Vip */
        Vip?: (number|null);

        /** SCVIPInfo VipId */
        VipId?: (number[]|null);

        /** SCVIPInfo Money */
        Money?: (number|Long|null);
    }

    /** Represents a SCVIPInfo. */
    class SCVIPInfo implements ISCVIPInfo {

        /**
         * Constructs a new SCVIPInfo.
         * @param [p] Properties to set
         */
        constructor(p?: player.ISCVIPInfo);

        /** SCVIPInfo OpRetCode. */
        public OpRetCode: player.OpResultCode;

        /** SCVIPInfo List. */
        public List: player.IVIPcfg[];

        /** SCVIPInfo TolVipExp. */
        public TolVipExp: (number|Long);

        /** SCVIPInfo Vip. */
        public Vip: number;

        /** SCVIPInfo VipId. */
        public VipId: number[];

        /** SCVIPInfo Money. */
        public Money: (number|Long);

        /**
         * Encodes the specified SCVIPInfo message. Does not implicitly {@link player.SCVIPInfo.verify|verify} messages.
         * @param m SCVIPInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: player.ISCVIPInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCVIPInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCVIPInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): player.SCVIPInfo;
    }
}
