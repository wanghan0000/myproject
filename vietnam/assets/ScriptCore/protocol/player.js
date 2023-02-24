/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.player = (function() {

    var player = {};

    player.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[1000] = "OPRC_LoginFailed"] = 1000;
        values[valuesById[1007] = "OPRC_Login_NameSame"] = 1007;
        values[valuesById[1009] = "OPRC_Login_CreateFailed"] = 1009;
        values[valuesById[1013] = "OPRC_NotLogin"] = 1013;
        values[valuesById[1044] = "OPRC_YourResVerIsLow"] = 1044;
        values[valuesById[1045] = "OPRC_YourAppVerIsLow"] = 1045;
        values[valuesById[1056] = "OPRC_CoinNotEnough"] = 1056;
        values[valuesById[1060] = "OPRC_NickIsNull"] = 1060;
        values[valuesById[1061] = "OPRC_NickIsExist"] = 1061;
        values[valuesById[1062] = "OPRC_Frequently"] = 1062;
        values[valuesById[1063] = "OPRC_IconError"] = 1063;
        values[valuesById[1064] = "OPRC_SexError"] = 1064;
        values[valuesById[1065] = "OPRC_TelError"] = 1065;
        values[valuesById[1066] = "OPRC_UserNameError"] = 1066;
        values[valuesById[1067] = "OPRC_VerificationCodeError"] = 1067;
        values[valuesById[1068] = "OPRC_TelIsExist"] = 1068;
        values[valuesById[1070] = "OPRC_SafeBoxPasswordError"] = 1070;
        values[valuesById[1071] = "OPRC_TelIsRegister"] = 1071;
        values[valuesById[1072] = "OPRC_InBlackList"] = 1072;
        values[valuesById[1073] = "OPRC_NickIsTooLen"] = 1073;
        values[valuesById[1074] = "OPRC_PasswordEqual"] = 1074;
        values[valuesById[1083] = "OPRC_NickIsIllegal"] = 1083;
        values[valuesById[1090] = "OPRC_HadSpreadInviterId"] = 1090;
        values[valuesById[1091] = "OPRC_InviterIdNotExist"] = 1091;
        values[valuesById[1092] = "OPRC_SpreadBindFailed"] = 1092;
        values[valuesById[1093] = "OPRC_InviterNoBind"] = 1093;
        values[valuesById[1094] = "OPRC_SpreadBindClosedLoop"] = 1094;
        values[valuesById[1095] = "OPRC_ImageVerifyCodeFailed"] = 1095;
        values[valuesById[1104] = "OPRC_NickIsCantRename"] = 1104;
        values[valuesById[1108] = "OPRC_NoPromotor"] = 1108;
        values[valuesById[1109] = "OPRC_NoPlatform"] = 1109;
        values[valuesById[1110] = "OPRC_CantUserBind"] = 1110;
        values[valuesById[1111] = "OPRC_PromoterHasBind"] = 1111;
        values[valuesById[1112] = "OPRC_PlatformNoPromoter"] = 1112;
        values[valuesById[2003] = "OPRC_UpgradeAccount_PasswordIllegal"] = 2003;
        values[valuesById[2005] = "OPRC_BindAlipay_AccountEmpty"] = 2005;
        values[valuesById[2006] = "OPRC_BindAlipay_AccNameEmpty"] = 2006;
        values[valuesById[2007] = "OPRC_Safebox_PasswordIllegal"] = 2007;
        values[valuesById[2008] = "OPRC_BindBank_NameEmpty"] = 2008;
        values[valuesById[2009] = "OPRC_BindBank_AccountEmpty"] = 2009;
        values[valuesById[2010] = "OPRC_BindBank_AccNameEmpty"] = 2010;
        values[valuesById[2011] = "OPRC_BindBank_NameIllegal"] = 2011;
        values[valuesById[2012] = "OPRC_BindBank_AccountIllegal"] = 2012;
        values[valuesById[2013] = "OPRC_BindBank_AccNameIllegal"] = 2013;
        values[valuesById[2014] = "OPRC_BindAlipay_AccountIllegal"] = 2014;
        values[valuesById[2015] = "OPRC_BindAlipay_AccNameIllegal"] = 2015;
        values[valuesById[2016] = "OPRC_BindAlipay_PlatformError"] = 2016;
        values[valuesById[2017] = "OPRC_BindBank_PlatformError"] = 2017;
        values[valuesById[2018] = "OPRC_Account_IP_TooManyReg"] = 2018;
        values[valuesById[2019] = "OPRC_BindBank_CountLimit"] = 2019;
        values[valuesById[2020] = "OPRC_BindAlipay_CountLimit"] = 2020;
        values[valuesById[2021] = "OPRC_BankAndAli_NotSame"] = 2021;
        values[valuesById[2022] = "OPRC_BindBankAlipay_NameCountLimit"] = 2022;
        values[valuesById[2100] = "OPRC_Jyb_Receive"] = 2100;
        values[valuesById[2101] = "OPRC_Jyb_CodeExist"] = 2101;
        values[valuesById[2102] = "OPRC_Jyb_TimeErr"] = 2102;
        values[valuesById[2103] = "OPRC_Jyb_CodeErr"] = 2103;
        values[valuesById[7001] = "OPRC_Hundred_YouHadBetCannotLeave"] = 7001;
        values[valuesById[7002] = "OPRC_Hundred_YouHadBankerCannotLeave"] = 7002;
        return values;
    })();

    player.PlayerPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_PLAYERPACKET_ZERO"] = 0;
        values[valuesById[2100] = "PACKET_CS_PLAYERDATA"] = 2100;
        values[valuesById[2101] = "PACKET_SC_PLAYERDATA"] = 2101;
        values[valuesById[2102] = "PACKET_SC_DAYCHANGE"] = 2102;
        values[valuesById[2103] = "PACKET_CS_THIRDPLAYERDATA"] = 2103;
        values[valuesById[2104] = "PACKET_SC_THIRDPLAYERDATA"] = 2104;
        values[valuesById[2105] = "PACKET_SC_PLAYERDATAUPDATE"] = 2105;
        values[valuesById[2106] = "PACKET_SC_PLAYERDATAEX"] = 2106;
        values[valuesById[2107] = "PACKET_CS_PMCMD"] = 2107;
        values[valuesById[2108] = "PACKET_CS_ROBOTCHGDATA"] = 2108;
        values[valuesById[2109] = "PACKET_SC_CHANGEWECHATNUMBER"] = 2109;
        values[valuesById[2110] = "PACKET_CS_CHANGEWECHATNUMBER"] = 2110;
        values[valuesById[2111] = "PACKET_CS_AUTHENID"] = 2111;
        values[valuesById[2112] = "PACKET_SC_AUTHENID"] = 2112;
        values[valuesById[2113] = "PACKET_CS_JOINGAME"] = 2113;
        values[valuesById[2114] = "PACKET_SC_JOINGAME"] = 2114;
        values[valuesById[2115] = "PACKET_CS_SPREADBIND"] = 2115;
        values[valuesById[2116] = "PACKET_SC_SPREADBIND"] = 2116;
        values[valuesById[2119] = "PACKET_CS_GENCUSTOMTOKEN"] = 2119;
        values[valuesById[2120] = "PACKET_SC_GENCUSTOMTOKEN"] = 2120;
        values[valuesById[2121] = "PACKET_SC_CUSTOMNEWMSG"] = 2121;
        values[valuesById[2122] = "PACKET_CS_CUSTOMNEWMSGACK"] = 2122;
        values[valuesById[2123] = "PACKET_SC_SRVMSG"] = 2123;
        values[valuesById[2124] = "PACKET_CS_FISHJACKPOTCOIN"] = 2124;
        values[valuesById[2125] = "PACKET_SC_FISHJACKPOTCOIN"] = 2125;
        values[valuesById[2126] = "PACKET_CS_FISHJACKPOTDATA"] = 2126;
        values[valuesById[2127] = "PACKET_SC_FISHJACKPOTDATA"] = 2127;
        values[valuesById[2128] = "PACKET_SC_NICEIDREBIND"] = 2128;
        values[valuesById[2129] = "PACKET_CS_BINDPROMOTER"] = 2129;
        values[valuesById[2130] = "PACKET_SC_BINDPROMOTER"] = 2130;
        values[valuesById[2131] = "PACKET_SC_BINDPROMOTERSTATE"] = 2131;
        values[valuesById[2132] = "PACKET_CS_GetSpreadLWIsOpen"] = 2132;
        values[valuesById[2133] = "PACKET_SC_GetSpreadLWIsOpen"] = 2133;
        values[valuesById[2134] = "PACKET_SC_PayAct_State"] = 2134;
        values[valuesById[2140] = "PACKET_CS_CHANGENICK"] = 2140;
        values[valuesById[2141] = "PACKET_SC_CHANGENICK"] = 2141;
        values[valuesById[2142] = "PACKET_CS_CHANGEICON"] = 2142;
        values[valuesById[2143] = "PACKET_SC_CHANGEICON"] = 2143;
        values[valuesById[2144] = "PACKET_CS_CHANGESEX"] = 2144;
        values[valuesById[2145] = "PACKET_SC_CHANGESEX"] = 2145;
        values[valuesById[2146] = "PACKET_CS_UPGRADEACCOUNT"] = 2146;
        values[valuesById[2147] = "PACKET_SC_UPGRADEACCOUNT"] = 2147;
        values[valuesById[2148] = "PACKET_CS_BINDALIPAY"] = 2148;
        values[valuesById[2149] = "PACKET_SC_BINDALIPAY"] = 2149;
        values[valuesById[2150] = "PACKET_CS_BINDBANK"] = 2150;
        values[valuesById[2151] = "PACKET_SC_BINDBANK"] = 2151;
        values[valuesById[2152] = "PACKET_CS_PLAYEROPCOIN"] = 2152;
        values[valuesById[2153] = "PACKET_SC_PLAYEROPCOIN"] = 2153;
        values[valuesById[2154] = "PACKET_CS_CHANGEPASSWORD"] = 2154;
        values[valuesById[2155] = "PACKET_SC_CHANGEPASSWORD"] = 2155;
        values[valuesById[2156] = "PACKET_CS_VERIFICATIONCODE"] = 2156;
        values[valuesById[2157] = "PACKET_SC_VERIFICATIONCODE"] = 2157;
        values[valuesById[2158] = "PACKET_CS_GETGAMECOINLOG"] = 2158;
        values[valuesById[2159] = "PACKET_SC_GETGAMECOINLOG"] = 2159;
        values[valuesById[2160] = "PACKET_CS_GETSAFEBOXCOINLOG"] = 2160;
        values[valuesById[2161] = "PACKET_SC_GETSAFEBOXCOINLOG"] = 2161;
        values[valuesById[2162] = "PACKET_CS_REGISTER"] = 2162;
        values[valuesById[2163] = "PACKET_SC_REGISTER"] = 2163;
        values[valuesById[2164] = "PACKET_CS_HEADOUTLINE"] = 2164;
        values[valuesById[2165] = "PACKET_SC_HEADOUTLINE"] = 2165;
        values[valuesById[2166] = "PACKET_CS_INVITECODE"] = 2166;
        values[valuesById[2167] = "PACKET_SC_INVITECODE"] = 2167;
        values[valuesById[2168] = "PACKET_CS_WEBAPI_PLAYERPASS"] = 2168;
        values[valuesById[2169] = "PACKET_SC_WEBAPI_PLAYERPASS"] = 2169;
        values[valuesById[2170] = "PACKET_CS_WEBAPI_SYSTEMPASS"] = 2170;
        values[valuesById[2171] = "PACKET_SC_WEBAPI_SYSTEMPASS"] = 2171;
        values[valuesById[2172] = "PACKET_CS_GETIMAGEVERIFYCODE"] = 2172;
        values[valuesById[2173] = "PACKET_SC_GETIMAGEVERIFYCODE"] = 2173;
        values[valuesById[2174] = "PACKET_CS_GETSLIDERVERIFYCODE"] = 2174;
        values[valuesById[2175] = "PACKET_SC_GETSLIDERVERIFYCODE"] = 2175;
        values[valuesById[2176] = "PACKET_CS_IOSINSTALLSTABLE"] = 2176;
        values[valuesById[2177] = "PACKET_SC_IOSINSTALLSTABLE"] = 2177;
        values[valuesById[2178] = "PACKET_CS_QUERYPLAYER"] = 2178;
        values[valuesById[2179] = "PACKET_SC_QUERYPLAYER"] = 2179;
        values[valuesById[2180] = "PACKET_CS_GETDATALOG"] = 2180;
        values[valuesById[2181] = "PACKET_SC_GETDATALOG"] = 2181;
        values[valuesById[2182] = "PACKET_SC_PLAYERRECHARGEANSWER"] = 2182;
        values[valuesById[2183] = "PACKET_SC_PLAYERFLAG"] = 2183;
        values[valuesById[2184] = "PACKET_SC_PLAYERCOINCHANGE"] = 2184;
        values[valuesById[2185] = "PACKET_SC_TRUSTEESHIPTIPS"] = 2185;
        values[valuesById[2186] = "PACKET_ALL_SETTING"] = 2186;
        values[valuesById[2187] = "PACKET_SCGAMEEXDROPITEMS"] = 2187;
        values[valuesById[2188] = "PACKET_CS_VIPBUY"] = 2188;
        values[valuesById[2189] = "PACKET_SC_VIPBUY"] = 2189;
        values[valuesById[2190] = "PACKET_CS_DRAWVIPGIFT"] = 2190;
        values[valuesById[2191] = "PACKET_SC_DRAWVIPGIFT"] = 2191;
        values[valuesById[2192] = "PACKET_CS_VIPINFO"] = 2192;
        values[valuesById[2193] = "PACKET_SC_VIPINFO"] = 2193;
        return values;
    })();

    player.CSPlayerData = (function() {

        function CSPlayerData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPlayerData.prototype.AccId = "";
        CSPlayerData.prototype.Params = "";
        CSPlayerData.prototype.TimeStamp = 0;
        CSPlayerData.prototype.DeviceInfo = "";
        CSPlayerData.prototype.PlatformTag = "";
        CSPlayerData.prototype.DeviceId = "";

        CSPlayerData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.AccId != null && Object.hasOwnProperty.call(m, "AccId"))
                w.uint32(10).string(m.AccId);
            if (m.Params != null && Object.hasOwnProperty.call(m, "Params"))
                w.uint32(18).string(m.Params);
            if (m.TimeStamp != null && Object.hasOwnProperty.call(m, "TimeStamp"))
                w.uint32(24).int32(m.TimeStamp);
            if (m.DeviceInfo != null && Object.hasOwnProperty.call(m, "DeviceInfo"))
                w.uint32(34).string(m.DeviceInfo);
            if (m.PlatformTag != null && Object.hasOwnProperty.call(m, "PlatformTag"))
                w.uint32(42).string(m.PlatformTag);
            if (m.DeviceId != null && Object.hasOwnProperty.call(m, "DeviceId"))
                w.uint32(50).string(m.DeviceId);
            return w;
        };

        CSPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSPlayerData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.AccId = r.string();
                    break;
                case 2:
                    m.Params = r.string();
                    break;
                case 3:
                    m.TimeStamp = r.int32();
                    break;
                case 4:
                    m.DeviceInfo = r.string();
                    break;
                case 5:
                    m.PlatformTag = r.string();
                    break;
                case 6:
                    m.DeviceId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPlayerData;
    })();

    player.PlayerData = (function() {

        function PlayerData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerData.prototype.AccId = "";
        PlayerData.prototype.Platform = "";
        PlayerData.prototype.Channel = "";
        PlayerData.prototype.Name = "";
        PlayerData.prototype.SnId = 0;
        PlayerData.prototype.Head = 0;
        PlayerData.prototype.Sex = 0;
        PlayerData.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.SafeBoxCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.Tel = "";
        PlayerData.prototype.InviterId = 0;
        PlayerData.prototype.AlipayAccount = "";
        PlayerData.prototype.AlipayAccName = "";
        PlayerData.prototype.Bank = "";
        PlayerData.prototype.BankAccount = "";
        PlayerData.prototype.BankAccName = "";
        PlayerData.prototype.GMLevel = 0;
        PlayerData.prototype.SpecailFlag = 0;
        PlayerData.prototype.VIP = 0;
        PlayerData.prototype.SafeBoxIsExist = 0;
        PlayerData.prototype.HeadOutLine = 0;
        PlayerData.prototype.CoinPayTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.CreateTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.Promoter = "";
        PlayerData.prototype.TotalConvertibleFlow = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.CanExchangeCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.LackExchangeCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.ExchangeType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.ClubCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.Ticket = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.Grade = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.Diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.UseRoleId = 0;
        PlayerData.prototype.UsePetId = 0;
        PlayerData.prototype.VCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerData.prototype.ReliefFundTimes = 0;
        PlayerData.prototype.HeadUrl = "";
        PlayerData.prototype.VipExp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        PlayerData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.AccId != null && Object.hasOwnProperty.call(m, "AccId"))
                w.uint32(10).string(m.AccId);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(18).string(m.Platform);
            if (m.Channel != null && Object.hasOwnProperty.call(m, "Channel"))
                w.uint32(26).string(m.Channel);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(34).string(m.Name);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(40).int32(m.SnId);
            if (m.Head != null && Object.hasOwnProperty.call(m, "Head"))
                w.uint32(48).int32(m.Head);
            if (m.Sex != null && Object.hasOwnProperty.call(m, "Sex"))
                w.uint32(56).int32(m.Sex);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(64).int64(m.Coin);
            if (m.SafeBoxCoin != null && Object.hasOwnProperty.call(m, "SafeBoxCoin"))
                w.uint32(72).int64(m.SafeBoxCoin);
            if (m.Tel != null && Object.hasOwnProperty.call(m, "Tel"))
                w.uint32(82).string(m.Tel);
            if (m.InviterId != null && Object.hasOwnProperty.call(m, "InviterId"))
                w.uint32(88).int32(m.InviterId);
            if (m.AlipayAccount != null && Object.hasOwnProperty.call(m, "AlipayAccount"))
                w.uint32(98).string(m.AlipayAccount);
            if (m.AlipayAccName != null && Object.hasOwnProperty.call(m, "AlipayAccName"))
                w.uint32(106).string(m.AlipayAccName);
            if (m.Bank != null && Object.hasOwnProperty.call(m, "Bank"))
                w.uint32(114).string(m.Bank);
            if (m.BankAccount != null && Object.hasOwnProperty.call(m, "BankAccount"))
                w.uint32(122).string(m.BankAccount);
            if (m.BankAccName != null && Object.hasOwnProperty.call(m, "BankAccName"))
                w.uint32(130).string(m.BankAccName);
            if (m.GMLevel != null && Object.hasOwnProperty.call(m, "GMLevel"))
                w.uint32(136).int32(m.GMLevel);
            if (m.SpecailFlag != null && Object.hasOwnProperty.call(m, "SpecailFlag"))
                w.uint32(144).int32(m.SpecailFlag);
            if (m.VIP != null && Object.hasOwnProperty.call(m, "VIP"))
                w.uint32(152).int32(m.VIP);
            if (m.SafeBoxIsExist != null && Object.hasOwnProperty.call(m, "SafeBoxIsExist"))
                w.uint32(160).int32(m.SafeBoxIsExist);
            if (m.HeadOutLine != null && Object.hasOwnProperty.call(m, "HeadOutLine"))
                w.uint32(168).int32(m.HeadOutLine);
            if (m.CoinPayTotal != null && Object.hasOwnProperty.call(m, "CoinPayTotal"))
                w.uint32(176).int64(m.CoinPayTotal);
            if (m.CreateTs != null && Object.hasOwnProperty.call(m, "CreateTs"))
                w.uint32(184).int64(m.CreateTs);
            if (m.Promoter != null && Object.hasOwnProperty.call(m, "Promoter"))
                w.uint32(194).string(m.Promoter);
            if (m.TotalConvertibleFlow != null && Object.hasOwnProperty.call(m, "TotalConvertibleFlow"))
                w.uint32(200).int64(m.TotalConvertibleFlow);
            if (m.CanExchangeCoin != null && Object.hasOwnProperty.call(m, "CanExchangeCoin"))
                w.uint32(208).int64(m.CanExchangeCoin);
            if (m.LackExchangeCoin != null && Object.hasOwnProperty.call(m, "LackExchangeCoin"))
                w.uint32(216).int64(m.LackExchangeCoin);
            if (m.ExchangeType != null && Object.hasOwnProperty.call(m, "ExchangeType"))
                w.uint32(224).int64(m.ExchangeType);
            if (m.ClubCoin != null && Object.hasOwnProperty.call(m, "ClubCoin"))
                w.uint32(232).int64(m.ClubCoin);
            if (m.Ticket != null && Object.hasOwnProperty.call(m, "Ticket"))
                w.uint32(240).int64(m.Ticket);
            if (m.Grade != null && Object.hasOwnProperty.call(m, "Grade"))
                w.uint32(248).int64(m.Grade);
            if (m.Diamond != null && Object.hasOwnProperty.call(m, "Diamond"))
                w.uint32(256).int64(m.Diamond);
            if (m.UseRoleId != null && Object.hasOwnProperty.call(m, "UseRoleId"))
                w.uint32(264).int32(m.UseRoleId);
            if (m.UsePetId != null && Object.hasOwnProperty.call(m, "UsePetId"))
                w.uint32(272).int32(m.UsePetId);
            if (m.VCoin != null && Object.hasOwnProperty.call(m, "VCoin"))
                w.uint32(280).int64(m.VCoin);
            if (m.ReliefFundTimes != null && Object.hasOwnProperty.call(m, "ReliefFundTimes"))
                w.uint32(288).int32(m.ReliefFundTimes);
            if (m.HeadUrl != null && Object.hasOwnProperty.call(m, "HeadUrl"))
                w.uint32(298).string(m.HeadUrl);
            if (m.VipExp != null && Object.hasOwnProperty.call(m, "VipExp"))
                w.uint32(304).int64(m.VipExp);
            return w;
        };

        PlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.PlayerData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.AccId = r.string();
                    break;
                case 2:
                    m.Platform = r.string();
                    break;
                case 3:
                    m.Channel = r.string();
                    break;
                case 4:
                    m.Name = r.string();
                    break;
                case 5:
                    m.SnId = r.int32();
                    break;
                case 6:
                    m.Head = r.int32();
                    break;
                case 7:
                    m.Sex = r.int32();
                    break;
                case 8:
                    m.Coin = r.int64();
                    break;
                case 9:
                    m.SafeBoxCoin = r.int64();
                    break;
                case 10:
                    m.Tel = r.string();
                    break;
                case 11:
                    m.InviterId = r.int32();
                    break;
                case 12:
                    m.AlipayAccount = r.string();
                    break;
                case 13:
                    m.AlipayAccName = r.string();
                    break;
                case 14:
                    m.Bank = r.string();
                    break;
                case 15:
                    m.BankAccount = r.string();
                    break;
                case 16:
                    m.BankAccName = r.string();
                    break;
                case 17:
                    m.GMLevel = r.int32();
                    break;
                case 18:
                    m.SpecailFlag = r.int32();
                    break;
                case 19:
                    m.VIP = r.int32();
                    break;
                case 20:
                    m.SafeBoxIsExist = r.int32();
                    break;
                case 21:
                    m.HeadOutLine = r.int32();
                    break;
                case 22:
                    m.CoinPayTotal = r.int64();
                    break;
                case 23:
                    m.CreateTs = r.int64();
                    break;
                case 24:
                    m.Promoter = r.string();
                    break;
                case 25:
                    m.TotalConvertibleFlow = r.int64();
                    break;
                case 26:
                    m.CanExchangeCoin = r.int64();
                    break;
                case 27:
                    m.LackExchangeCoin = r.int64();
                    break;
                case 28:
                    m.ExchangeType = r.int64();
                    break;
                case 29:
                    m.ClubCoin = r.int64();
                    break;
                case 30:
                    m.Ticket = r.int64();
                    break;
                case 31:
                    m.Grade = r.int64();
                    break;
                case 32:
                    m.Diamond = r.int64();
                    break;
                case 33:
                    m.UseRoleId = r.int32();
                    break;
                case 34:
                    m.UsePetId = r.int32();
                    break;
                case 35:
                    m.VCoin = r.int64();
                    break;
                case 36:
                    m.ReliefFundTimes = r.int32();
                    break;
                case 37:
                    m.HeadUrl = r.string();
                    break;
                case 38:
                    m.VipExp = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerData;
    })();

    player.MiniGameInfo = (function() {

        function MiniGameInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MiniGameInfo.prototype.RoomId = 0;
        MiniGameInfo.prototype.GameId = 0;
        MiniGameInfo.prototype.LogicId = 0;

        MiniGameInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(16).int32(m.GameId);
            if (m.LogicId != null && Object.hasOwnProperty.call(m, "LogicId"))
                w.uint32(24).int32(m.LogicId);
            return w;
        };

        MiniGameInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.MiniGameInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.GameId = r.int32();
                    break;
                case 3:
                    m.LogicId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MiniGameInfo;
    })();

    player.SCPlayerData = (function() {

        function SCPlayerData(p) {
            this.MiniGameArr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerData.prototype.OpRetCode = 0;
        SCPlayerData.prototype.Data = null;
        SCPlayerData.prototype.RoomId = 0;
        SCPlayerData.prototype.GameId = 0;
        SCPlayerData.prototype.LogicId = 0;
        SCPlayerData.prototype.BindOption = 0;
        SCPlayerData.prototype.MiniGameArr = $util.emptyArray;

        SCPlayerData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
                $root.player.PlayerData.encode(m.Data, w.uint32(18).fork()).ldelim();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(24).int32(m.RoomId);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(32).int32(m.GameId);
            if (m.LogicId != null && Object.hasOwnProperty.call(m, "LogicId"))
                w.uint32(40).int32(m.LogicId);
            if (m.BindOption != null && Object.hasOwnProperty.call(m, "BindOption"))
                w.uint32(48).int32(m.BindOption);
            if (m.MiniGameArr != null && m.MiniGameArr.length) {
                for (var i = 0; i < m.MiniGameArr.length; ++i)
                    $root.player.MiniGameInfo.encode(m.MiniGameArr[i], w.uint32(58).fork()).ldelim();
            }
            return w;
        };

        SCPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPlayerData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Data = $root.player.PlayerData.decode(r, r.uint32());
                    break;
                case 3:
                    m.RoomId = r.int32();
                    break;
                case 4:
                    m.GameId = r.int32();
                    break;
                case 5:
                    m.LogicId = r.int32();
                    break;
                case 6:
                    m.BindOption = r.int32();
                    break;
                case 7:
                    if (!(m.MiniGameArr && m.MiniGameArr.length))
                        m.MiniGameArr = [];
                    m.MiniGameArr.push($root.player.MiniGameInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerData;
    })();

    player.SCPlayerDataUpdate = (function() {

        function SCPlayerDataUpdate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerDataUpdate.prototype.UpdateField = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerDataUpdate.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerDataUpdate.prototype.SafeBoxCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerDataUpdate.prototype.Vip = 0;
        SCPlayerDataUpdate.prototype.CoinPayTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerDataUpdate.prototype.TotalConvertibleFlow = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerDataUpdate.prototype.Ticket = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerDataUpdate.prototype.Grade = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerDataUpdate.prototype.Diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerDataUpdate.prototype.VCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCPlayerDataUpdate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UpdateField != null && Object.hasOwnProperty.call(m, "UpdateField"))
                w.uint32(8).int64(m.UpdateField);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int64(m.Coin);
            if (m.SafeBoxCoin != null && Object.hasOwnProperty.call(m, "SafeBoxCoin"))
                w.uint32(24).int64(m.SafeBoxCoin);
            if (m.Vip != null && Object.hasOwnProperty.call(m, "Vip"))
                w.uint32(32).int32(m.Vip);
            if (m.CoinPayTotal != null && Object.hasOwnProperty.call(m, "CoinPayTotal"))
                w.uint32(40).int64(m.CoinPayTotal);
            if (m.TotalConvertibleFlow != null && Object.hasOwnProperty.call(m, "TotalConvertibleFlow"))
                w.uint32(48).int64(m.TotalConvertibleFlow);
            if (m.Ticket != null && Object.hasOwnProperty.call(m, "Ticket"))
                w.uint32(56).int64(m.Ticket);
            if (m.Grade != null && Object.hasOwnProperty.call(m, "Grade"))
                w.uint32(64).int64(m.Grade);
            if (m.Diamond != null && Object.hasOwnProperty.call(m, "Diamond"))
                w.uint32(72).int64(m.Diamond);
            if (m.VCoin != null && Object.hasOwnProperty.call(m, "VCoin"))
                w.uint32(80).int64(m.VCoin);
            return w;
        };

        SCPlayerDataUpdate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPlayerDataUpdate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UpdateField = r.int64();
                    break;
                case 2:
                    m.Coin = r.int64();
                    break;
                case 3:
                    m.SafeBoxCoin = r.int64();
                    break;
                case 4:
                    m.Vip = r.int32();
                    break;
                case 5:
                    m.CoinPayTotal = r.int64();
                    break;
                case 6:
                    m.TotalConvertibleFlow = r.int64();
                    break;
                case 7:
                    m.Ticket = r.int64();
                    break;
                case 8:
                    m.Grade = r.int64();
                    break;
                case 9:
                    m.Diamond = r.int64();
                    break;
                case 10:
                    m.VCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerDataUpdate;
    })();

    player.CSThirdPlayerData = (function() {

        function CSThirdPlayerData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSThirdPlayerData.prototype.Id = 0;

        CSThirdPlayerData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            return w;
        };

        CSThirdPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSThirdPlayerData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSThirdPlayerData;
    })();

    player.SCThirdPlayerData = (function() {

        function SCThirdPlayerData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCThirdPlayerData.prototype.Data = null;

        SCThirdPlayerData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
                $root.player.PlayerData.encode(m.Data, w.uint32(10).fork()).ldelim();
            return w;
        };

        SCThirdPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCThirdPlayerData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Data = $root.player.PlayerData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCThirdPlayerData;
    })();

    player.CSChangeNick = (function() {

        function CSChangeNick(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSChangeNick.prototype.Nick = "";

        CSChangeNick.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Nick != null && Object.hasOwnProperty.call(m, "Nick"))
                w.uint32(10).string(m.Nick);
            return w;
        };

        CSChangeNick.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSChangeNick();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Nick = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSChangeNick;
    })();

    player.SCChangeNick = (function() {

        function SCChangeNick(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCChangeNick.prototype.OpRetCode = 0;
        SCChangeNick.prototype.Nick = "";

        SCChangeNick.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Nick != null && Object.hasOwnProperty.call(m, "Nick"))
                w.uint32(18).string(m.Nick);
            return w;
        };

        SCChangeNick.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCChangeNick();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Nick = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCChangeNick;
    })();

    player.CSChangePassword = (function() {

        function CSChangePassword(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSChangePassword.prototype.ChangeType = 0;
        CSChangePassword.prototype.OldPassword = "";
        CSChangePassword.prototype.NewPassword = "";
        CSChangePassword.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CSChangePassword.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ChangeType != null && Object.hasOwnProperty.call(m, "ChangeType"))
                w.uint32(8).int32(m.ChangeType);
            if (m.OldPassword != null && Object.hasOwnProperty.call(m, "OldPassword"))
                w.uint32(18).string(m.OldPassword);
            if (m.NewPassword != null && Object.hasOwnProperty.call(m, "NewPassword"))
                w.uint32(26).string(m.NewPassword);
            if (m.TimeStamp != null && Object.hasOwnProperty.call(m, "TimeStamp"))
                w.uint32(32).int64(m.TimeStamp);
            return w;
        };

        CSChangePassword.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSChangePassword();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ChangeType = r.int32();
                    break;
                case 2:
                    m.OldPassword = r.string();
                    break;
                case 3:
                    m.NewPassword = r.string();
                    break;
                case 4:
                    m.TimeStamp = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSChangePassword;
    })();

    player.SCChangePassword = (function() {

        function SCChangePassword(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCChangePassword.prototype.OpRetCode = 0;
        SCChangePassword.prototype.ChangeType = 0;

        SCChangePassword.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.ChangeType != null && Object.hasOwnProperty.call(m, "ChangeType"))
                w.uint32(16).int32(m.ChangeType);
            return w;
        };

        SCChangePassword.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCChangePassword();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.ChangeType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCChangePassword;
    })();

    player.CSPlayerChangeIcon = (function() {

        function CSPlayerChangeIcon(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPlayerChangeIcon.prototype.Icon = 0;

        CSPlayerChangeIcon.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Icon != null && Object.hasOwnProperty.call(m, "Icon"))
                w.uint32(8).int32(m.Icon);
            return w;
        };

        CSPlayerChangeIcon.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSPlayerChangeIcon();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Icon = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPlayerChangeIcon;
    })();

    player.SCPlayerChangeIcon = (function() {

        function SCPlayerChangeIcon(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerChangeIcon.prototype.OpRetCode = 0;
        SCPlayerChangeIcon.prototype.Icon = 0;

        SCPlayerChangeIcon.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Icon != null && Object.hasOwnProperty.call(m, "Icon"))
                w.uint32(16).int32(m.Icon);
            return w;
        };

        SCPlayerChangeIcon.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPlayerChangeIcon();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Icon = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerChangeIcon;
    })();

    player.CSPlayerChangeHeadOutLine = (function() {

        function CSPlayerChangeHeadOutLine(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPlayerChangeHeadOutLine.prototype.HeadOutLine = 0;

        CSPlayerChangeHeadOutLine.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.HeadOutLine != null && Object.hasOwnProperty.call(m, "HeadOutLine"))
                w.uint32(8).int32(m.HeadOutLine);
            return w;
        };

        CSPlayerChangeHeadOutLine.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSPlayerChangeHeadOutLine();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.HeadOutLine = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPlayerChangeHeadOutLine;
    })();

    player.SCPlayerChangeHeadOutLine = (function() {

        function SCPlayerChangeHeadOutLine(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerChangeHeadOutLine.prototype.OpRetCode = 0;
        SCPlayerChangeHeadOutLine.prototype.HeadOutLine = 0;

        SCPlayerChangeHeadOutLine.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.HeadOutLine != null && Object.hasOwnProperty.call(m, "HeadOutLine"))
                w.uint32(16).int32(m.HeadOutLine);
            return w;
        };

        SCPlayerChangeHeadOutLine.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPlayerChangeHeadOutLine();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.HeadOutLine = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerChangeHeadOutLine;
    })();

    player.CSPlayerChangeSex = (function() {

        function CSPlayerChangeSex(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPlayerChangeSex.prototype.Sex = 0;

        CSPlayerChangeSex.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Sex != null && Object.hasOwnProperty.call(m, "Sex"))
                w.uint32(8).int32(m.Sex);
            return w;
        };

        CSPlayerChangeSex.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSPlayerChangeSex();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Sex = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPlayerChangeSex;
    })();

    player.SCPlayerChangeSex = (function() {

        function SCPlayerChangeSex(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerChangeSex.prototype.OpRetCode = 0;
        SCPlayerChangeSex.prototype.Sex = 0;

        SCPlayerChangeSex.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Sex != null && Object.hasOwnProperty.call(m, "Sex"))
                w.uint32(16).int32(m.Sex);
            return w;
        };

        SCPlayerChangeSex.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPlayerChangeSex();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Sex = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerChangeSex;
    })();

    player.CSPlayerVerificationCode = (function() {

        function CSPlayerVerificationCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPlayerVerificationCode.prototype.Tel = "";
        CSPlayerVerificationCode.prototype.OpCode = 0;
        CSPlayerVerificationCode.prototype.PlatformTag = "";
        CSPlayerVerificationCode.prototype.Env = 0;
        CSPlayerVerificationCode.prototype.ImgCode = "";
        CSPlayerVerificationCode.prototype.Ts = 0;
        CSPlayerVerificationCode.prototype.DeviceInfo = "";

        CSPlayerVerificationCode.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tel != null && Object.hasOwnProperty.call(m, "Tel"))
                w.uint32(10).string(m.Tel);
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(16).int32(m.OpCode);
            if (m.PlatformTag != null && Object.hasOwnProperty.call(m, "PlatformTag"))
                w.uint32(26).string(m.PlatformTag);
            if (m.Env != null && Object.hasOwnProperty.call(m, "Env"))
                w.uint32(32).int32(m.Env);
            if (m.ImgCode != null && Object.hasOwnProperty.call(m, "ImgCode"))
                w.uint32(42).string(m.ImgCode);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(48).int32(m.Ts);
            if (m.DeviceInfo != null && Object.hasOwnProperty.call(m, "DeviceInfo"))
                w.uint32(58).string(m.DeviceInfo);
            return w;
        };

        CSPlayerVerificationCode.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSPlayerVerificationCode();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Tel = r.string();
                    break;
                case 2:
                    m.OpCode = r.int32();
                    break;
                case 3:
                    m.PlatformTag = r.string();
                    break;
                case 4:
                    m.Env = r.int32();
                    break;
                case 5:
                    m.ImgCode = r.string();
                    break;
                case 6:
                    m.Ts = r.int32();
                    break;
                case 7:
                    m.DeviceInfo = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPlayerVerificationCode;
    })();

    player.SCPlayerVerificationCode = (function() {

        function SCPlayerVerificationCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerVerificationCode.prototype.OpRetCode = 0;
        SCPlayerVerificationCode.prototype.VerificationCode = 0;

        SCPlayerVerificationCode.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.VerificationCode != null && Object.hasOwnProperty.call(m, "VerificationCode"))
                w.uint32(16).int32(m.VerificationCode);
            return w;
        };

        SCPlayerVerificationCode.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPlayerVerificationCode();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.VerificationCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerVerificationCode;
    })();

    player.CSRegister = (function() {

        function CSRegister(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSRegister.prototype.Username = "";
        CSRegister.prototype.Password = "";
        CSRegister.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CSRegister.prototype.Params = "";
        CSRegister.prototype.Sign = "";
        CSRegister.prototype.Platform = "";
        CSRegister.prototype.Channel = "";
        CSRegister.prototype.InviterId = 0;
        CSRegister.prototype.ApkVer = 0;
        CSRegister.prototype.ResVer = 0;
        CSRegister.prototype.Tel = "";
        CSRegister.prototype.TelPassword = "";
        CSRegister.prototype.VerificationCode = "";
        CSRegister.prototype.PlatformTag = "";
        CSRegister.prototype.Promoter = "";
        CSRegister.prototype.Package = "";
        CSRegister.prototype.PromoterTree = 0;
        CSRegister.prototype.DeviceInfo = "";
        CSRegister.prototype.RegistType = 0;

        CSRegister.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Username != null && Object.hasOwnProperty.call(m, "Username"))
                w.uint32(10).string(m.Username);
            if (m.Password != null && Object.hasOwnProperty.call(m, "Password"))
                w.uint32(18).string(m.Password);
            if (m.TimeStamp != null && Object.hasOwnProperty.call(m, "TimeStamp"))
                w.uint32(24).int64(m.TimeStamp);
            if (m.Params != null && Object.hasOwnProperty.call(m, "Params"))
                w.uint32(34).string(m.Params);
            if (m.Sign != null && Object.hasOwnProperty.call(m, "Sign"))
                w.uint32(42).string(m.Sign);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(50).string(m.Platform);
            if (m.Channel != null && Object.hasOwnProperty.call(m, "Channel"))
                w.uint32(58).string(m.Channel);
            if (m.InviterId != null && Object.hasOwnProperty.call(m, "InviterId"))
                w.uint32(64).int32(m.InviterId);
            if (m.ApkVer != null && Object.hasOwnProperty.call(m, "ApkVer"))
                w.uint32(72).int32(m.ApkVer);
            if (m.ResVer != null && Object.hasOwnProperty.call(m, "ResVer"))
                w.uint32(80).int32(m.ResVer);
            if (m.Tel != null && Object.hasOwnProperty.call(m, "Tel"))
                w.uint32(90).string(m.Tel);
            if (m.TelPassword != null && Object.hasOwnProperty.call(m, "TelPassword"))
                w.uint32(98).string(m.TelPassword);
            if (m.VerificationCode != null && Object.hasOwnProperty.call(m, "VerificationCode"))
                w.uint32(106).string(m.VerificationCode);
            if (m.PlatformTag != null && Object.hasOwnProperty.call(m, "PlatformTag"))
                w.uint32(114).string(m.PlatformTag);
            if (m.Promoter != null && Object.hasOwnProperty.call(m, "Promoter"))
                w.uint32(122).string(m.Promoter);
            if (m.Package != null && Object.hasOwnProperty.call(m, "Package"))
                w.uint32(130).string(m.Package);
            if (m.PromoterTree != null && Object.hasOwnProperty.call(m, "PromoterTree"))
                w.uint32(136).int32(m.PromoterTree);
            if (m.DeviceInfo != null && Object.hasOwnProperty.call(m, "DeviceInfo"))
                w.uint32(146).string(m.DeviceInfo);
            if (m.RegistType != null && Object.hasOwnProperty.call(m, "RegistType"))
                w.uint32(152).int32(m.RegistType);
            return w;
        };

        CSRegister.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSRegister();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Username = r.string();
                    break;
                case 2:
                    m.Password = r.string();
                    break;
                case 3:
                    m.TimeStamp = r.int64();
                    break;
                case 4:
                    m.Params = r.string();
                    break;
                case 5:
                    m.Sign = r.string();
                    break;
                case 6:
                    m.Platform = r.string();
                    break;
                case 7:
                    m.Channel = r.string();
                    break;
                case 8:
                    m.InviterId = r.int32();
                    break;
                case 9:
                    m.ApkVer = r.int32();
                    break;
                case 10:
                    m.ResVer = r.int32();
                    break;
                case 11:
                    m.Tel = r.string();
                    break;
                case 12:
                    m.TelPassword = r.string();
                    break;
                case 13:
                    m.VerificationCode = r.string();
                    break;
                case 14:
                    m.PlatformTag = r.string();
                    break;
                case 15:
                    m.Promoter = r.string();
                    break;
                case 16:
                    m.Package = r.string();
                    break;
                case 17:
                    m.PromoterTree = r.int32();
                    break;
                case 18:
                    m.DeviceInfo = r.string();
                    break;
                case 19:
                    m.RegistType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSRegister;
    })();

    player.SCRegister = (function() {

        function SCRegister(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRegister.prototype.OpRetCode = 0;
        SCRegister.prototype.AccId = "";
        SCRegister.prototype.SrvTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCRegister.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.AccId != null && Object.hasOwnProperty.call(m, "AccId"))
                w.uint32(18).string(m.AccId);
            if (m.SrvTs != null && Object.hasOwnProperty.call(m, "SrvTs"))
                w.uint32(24).int64(m.SrvTs);
            return w;
        };

        SCRegister.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCRegister();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.AccId = r.string();
                    break;
                case 3:
                    m.SrvTs = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRegister;
    })();

    player.CSUpgradeAccount = (function() {

        function CSUpgradeAccount(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSUpgradeAccount.prototype.ChangeType = 0;
        CSUpgradeAccount.prototype.Tel = "";
        CSUpgradeAccount.prototype.VerificationCode = "";
        CSUpgradeAccount.prototype.Password = "";
        CSUpgradeAccount.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CSUpgradeAccount.prototype.PlatformTag = "";

        CSUpgradeAccount.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ChangeType != null && Object.hasOwnProperty.call(m, "ChangeType"))
                w.uint32(8).int32(m.ChangeType);
            if (m.Tel != null && Object.hasOwnProperty.call(m, "Tel"))
                w.uint32(18).string(m.Tel);
            if (m.VerificationCode != null && Object.hasOwnProperty.call(m, "VerificationCode"))
                w.uint32(26).string(m.VerificationCode);
            if (m.Password != null && Object.hasOwnProperty.call(m, "Password"))
                w.uint32(34).string(m.Password);
            if (m.TimeStamp != null && Object.hasOwnProperty.call(m, "TimeStamp"))
                w.uint32(40).int64(m.TimeStamp);
            if (m.PlatformTag != null && Object.hasOwnProperty.call(m, "PlatformTag"))
                w.uint32(50).string(m.PlatformTag);
            return w;
        };

        CSUpgradeAccount.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSUpgradeAccount();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ChangeType = r.int32();
                    break;
                case 2:
                    m.Tel = r.string();
                    break;
                case 3:
                    m.VerificationCode = r.string();
                    break;
                case 4:
                    m.Password = r.string();
                    break;
                case 5:
                    m.TimeStamp = r.int64();
                    break;
                case 6:
                    m.PlatformTag = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSUpgradeAccount;
    })();

    player.SCUpgradeAccount = (function() {

        function SCUpgradeAccount(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCUpgradeAccount.prototype.OpRetCode = 0;
        SCUpgradeAccount.prototype.Tel = "";
        SCUpgradeAccount.prototype.ChangeType = 0;

        SCUpgradeAccount.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Tel != null && Object.hasOwnProperty.call(m, "Tel"))
                w.uint32(18).string(m.Tel);
            if (m.ChangeType != null && Object.hasOwnProperty.call(m, "ChangeType"))
                w.uint32(24).int32(m.ChangeType);
            return w;
        };

        SCUpgradeAccount.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCUpgradeAccount();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Tel = r.string();
                    break;
                case 3:
                    m.ChangeType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCUpgradeAccount;
    })();

    player.CSBindAlipay = (function() {

        function CSBindAlipay(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSBindAlipay.prototype.AlipayAccount = "";
        CSBindAlipay.prototype.AlipayAccName = "";
        CSBindAlipay.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CSBindAlipay.prototype.Password = "";

        CSBindAlipay.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.AlipayAccount != null && Object.hasOwnProperty.call(m, "AlipayAccount"))
                w.uint32(10).string(m.AlipayAccount);
            if (m.AlipayAccName != null && Object.hasOwnProperty.call(m, "AlipayAccName"))
                w.uint32(18).string(m.AlipayAccName);
            if (m.TimeStamp != null && Object.hasOwnProperty.call(m, "TimeStamp"))
                w.uint32(24).int64(m.TimeStamp);
            if (m.Password != null && Object.hasOwnProperty.call(m, "Password"))
                w.uint32(34).string(m.Password);
            return w;
        };

        CSBindAlipay.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSBindAlipay();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.AlipayAccount = r.string();
                    break;
                case 2:
                    m.AlipayAccName = r.string();
                    break;
                case 3:
                    m.TimeStamp = r.int64();
                    break;
                case 4:
                    m.Password = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSBindAlipay;
    })();

    player.SCBindAlipay = (function() {

        function SCBindAlipay(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCBindAlipay.prototype.OpRetCode = 0;
        SCBindAlipay.prototype.AlipayAccount = "";
        SCBindAlipay.prototype.AlipayAccName = "";

        SCBindAlipay.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.AlipayAccount != null && Object.hasOwnProperty.call(m, "AlipayAccount"))
                w.uint32(18).string(m.AlipayAccount);
            if (m.AlipayAccName != null && Object.hasOwnProperty.call(m, "AlipayAccName"))
                w.uint32(26).string(m.AlipayAccName);
            return w;
        };

        SCBindAlipay.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCBindAlipay();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.AlipayAccount = r.string();
                    break;
                case 3:
                    m.AlipayAccName = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCBindAlipay;
    })();

    player.CSBindBank = (function() {

        function CSBindBank(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSBindBank.prototype.Bank = "";
        CSBindBank.prototype.BankAccount = "";
        CSBindBank.prototype.BankAccName = "";
        CSBindBank.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CSBindBank.prototype.Password = "";

        CSBindBank.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Bank != null && Object.hasOwnProperty.call(m, "Bank"))
                w.uint32(10).string(m.Bank);
            if (m.BankAccount != null && Object.hasOwnProperty.call(m, "BankAccount"))
                w.uint32(18).string(m.BankAccount);
            if (m.BankAccName != null && Object.hasOwnProperty.call(m, "BankAccName"))
                w.uint32(26).string(m.BankAccName);
            if (m.TimeStamp != null && Object.hasOwnProperty.call(m, "TimeStamp"))
                w.uint32(32).int64(m.TimeStamp);
            if (m.Password != null && Object.hasOwnProperty.call(m, "Password"))
                w.uint32(42).string(m.Password);
            return w;
        };

        CSBindBank.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSBindBank();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Bank = r.string();
                    break;
                case 2:
                    m.BankAccount = r.string();
                    break;
                case 3:
                    m.BankAccName = r.string();
                    break;
                case 4:
                    m.TimeStamp = r.int64();
                    break;
                case 5:
                    m.Password = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSBindBank;
    })();

    player.SCBindBank = (function() {

        function SCBindBank(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCBindBank.prototype.OpRetCode = 0;
        SCBindBank.prototype.Bank = "";
        SCBindBank.prototype.BankAccount = "";
        SCBindBank.prototype.BankAccName = "";

        SCBindBank.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Bank != null && Object.hasOwnProperty.call(m, "Bank"))
                w.uint32(18).string(m.Bank);
            if (m.BankAccount != null && Object.hasOwnProperty.call(m, "BankAccount"))
                w.uint32(26).string(m.BankAccount);
            if (m.BankAccName != null && Object.hasOwnProperty.call(m, "BankAccName"))
                w.uint32(34).string(m.BankAccName);
            return w;
        };

        SCBindBank.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCBindBank();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Bank = r.string();
                    break;
                case 3:
                    m.BankAccount = r.string();
                    break;
                case 4:
                    m.BankAccName = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCBindBank;
    })();

    player.SCPlayerFlag = (function() {

        function SCPlayerFlag(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerFlag.prototype.PlayerId = 0;
        SCPlayerFlag.prototype.Flag = 0;

        SCPlayerFlag.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlayerId != null && Object.hasOwnProperty.call(m, "PlayerId"))
                w.uint32(8).int32(m.PlayerId);
            if (m.Flag != null && Object.hasOwnProperty.call(m, "Flag"))
                w.uint32(16).int32(m.Flag);
            return w;
        };

        SCPlayerFlag.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPlayerFlag();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PlayerId = r.int32();
                    break;
                case 2:
                    m.Flag = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerFlag;
    })();

    player.SCPlayerCoinChange = (function() {

        function SCPlayerCoinChange(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerCoinChange.prototype.SnId = 0;
        SCPlayerCoinChange.prototype.AddCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerCoinChange.prototype.RestCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCPlayerCoinChange.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.AddCoin != null && Object.hasOwnProperty.call(m, "AddCoin"))
                w.uint32(16).int64(m.AddCoin);
            if (m.RestCoin != null && Object.hasOwnProperty.call(m, "RestCoin"))
                w.uint32(24).int64(m.RestCoin);
            return w;
        };

        SCPlayerCoinChange.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPlayerCoinChange();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.AddCoin = r.int64();
                    break;
                case 3:
                    m.RestCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerCoinChange;
    })();

    player.SCPlayerRechargeAnswer = (function() {

        function SCPlayerRechargeAnswer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerRechargeAnswer.prototype.OpParam = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerRechargeAnswer.prototype.AddCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerRechargeAnswer.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerRechargeAnswer.prototype.SafeBoxCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCPlayerRechargeAnswer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpParam != null && Object.hasOwnProperty.call(m, "OpParam"))
                w.uint32(8).int64(m.OpParam);
            if (m.AddCoin != null && Object.hasOwnProperty.call(m, "AddCoin"))
                w.uint32(16).int64(m.AddCoin);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(24).int64(m.Coin);
            if (m.SafeBoxCoin != null && Object.hasOwnProperty.call(m, "SafeBoxCoin"))
                w.uint32(32).int64(m.SafeBoxCoin);
            return w;
        };

        SCPlayerRechargeAnswer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPlayerRechargeAnswer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpParam = r.int64();
                    break;
                case 2:
                    m.AddCoin = r.int64();
                    break;
                case 3:
                    m.Coin = r.int64();
                    break;
                case 4:
                    m.SafeBoxCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerRechargeAnswer;
    })();

    player.DataLog = (function() {

        function DataLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DataLog.prototype.LogType = 0;
        DataLog.prototype.ChangeCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        DataLog.prototype.RestCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        DataLog.prototype.Ts = 0;
        DataLog.prototype.Remark = "";

        DataLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LogType != null && Object.hasOwnProperty.call(m, "LogType"))
                w.uint32(8).int32(m.LogType);
            if (m.ChangeCount != null && Object.hasOwnProperty.call(m, "ChangeCount"))
                w.uint32(16).int64(m.ChangeCount);
            if (m.RestCount != null && Object.hasOwnProperty.call(m, "RestCount"))
                w.uint32(24).int64(m.RestCount);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(32).int32(m.Ts);
            if (m.Remark != null && Object.hasOwnProperty.call(m, "Remark"))
                w.uint32(42).string(m.Remark);
            return w;
        };

        DataLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.DataLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LogType = r.int32();
                    break;
                case 2:
                    m.ChangeCount = r.int64();
                    break;
                case 3:
                    m.RestCount = r.int64();
                    break;
                case 4:
                    m.Ts = r.int32();
                    break;
                case 5:
                    m.Remark = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DataLog;
    })();

    player.CSGetDataLog = (function() {

        function CSGetDataLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetDataLog.prototype.DataType = 0;
        CSGetDataLog.prototype.Ver = 0;

        CSGetDataLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.DataType != null && Object.hasOwnProperty.call(m, "DataType"))
                w.uint32(8).int32(m.DataType);
            if (m.Ver != null && Object.hasOwnProperty.call(m, "Ver"))
                w.uint32(16).int32(m.Ver);
            return w;
        };

        CSGetDataLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSGetDataLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.DataType = r.int32();
                    break;
                case 2:
                    m.Ver = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetDataLog;
    })();

    player.SCGetDataLog = (function() {

        function SCGetDataLog(p) {
            this.Datas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetDataLog.prototype.DataType = 0;
        SCGetDataLog.prototype.Ver = 0;
        SCGetDataLog.prototype.Datas = $util.emptyArray;

        SCGetDataLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.DataType != null && Object.hasOwnProperty.call(m, "DataType"))
                w.uint32(8).int32(m.DataType);
            if (m.Ver != null && Object.hasOwnProperty.call(m, "Ver"))
                w.uint32(16).int32(m.Ver);
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.player.DataLog.encode(m.Datas[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        SCGetDataLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCGetDataLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.DataType = r.int32();
                    break;
                case 2:
                    m.Ver = r.int32();
                    break;
                case 3:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.player.DataLog.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetDataLog;
    })();

    player.GameCoinLog = (function() {

        function GameCoinLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameCoinLog.prototype.GameId = 0;
        GameCoinLog.prototype.EnterCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameCoinLog.prototype.LeaveCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameCoinLog.prototype.EnterTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameCoinLog.prototype.LeaveTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameCoinLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.EnterCount != null && Object.hasOwnProperty.call(m, "EnterCount"))
                w.uint32(16).int64(m.EnterCount);
            if (m.LeaveCount != null && Object.hasOwnProperty.call(m, "LeaveCount"))
                w.uint32(24).int64(m.LeaveCount);
            if (m.EnterTs != null && Object.hasOwnProperty.call(m, "EnterTs"))
                w.uint32(32).int64(m.EnterTs);
            if (m.LeaveTs != null && Object.hasOwnProperty.call(m, "LeaveTs"))
                w.uint32(40).int64(m.LeaveTs);
            return w;
        };

        GameCoinLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.GameCoinLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.EnterCount = r.int64();
                    break;
                case 3:
                    m.LeaveCount = r.int64();
                    break;
                case 4:
                    m.EnterTs = r.int64();
                    break;
                case 5:
                    m.LeaveTs = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameCoinLog;
    })();

    player.CSGetGameCoinLog = (function() {

        function CSGetGameCoinLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetGameCoinLog.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CSGetGameCoinLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(8).int64(m.Ts);
            return w;
        };

        CSGetGameCoinLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSGetGameCoinLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetGameCoinLog;
    })();

    player.SCGetGameCoinLog = (function() {

        function SCGetGameCoinLog(p) {
            this.Logs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetGameCoinLog.prototype.OpRetCode = 0;
        SCGetGameCoinLog.prototype.Logs = $util.emptyArray;

        SCGetGameCoinLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Logs != null && m.Logs.length) {
                for (var i = 0; i < m.Logs.length; ++i)
                    $root.player.GameCoinLog.encode(m.Logs[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCGetGameCoinLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCGetGameCoinLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    if (!(m.Logs && m.Logs.length))
                        m.Logs = [];
                    m.Logs.push($root.player.GameCoinLog.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetGameCoinLog;
    })();

    player.CSPlayerOpCoin = (function() {

        function CSPlayerOpCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPlayerOpCoin.prototype.Op = 0;
        CSPlayerOpCoin.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CSPlayerOpCoin.prototype.Password = "";
        CSPlayerOpCoin.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CSPlayerOpCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Op != null && Object.hasOwnProperty.call(m, "Op"))
                w.uint32(8).int32(m.Op);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int64(m.Coin);
            if (m.Password != null && Object.hasOwnProperty.call(m, "Password"))
                w.uint32(26).string(m.Password);
            if (m.TimeStamp != null && Object.hasOwnProperty.call(m, "TimeStamp"))
                w.uint32(32).int64(m.TimeStamp);
            return w;
        };

        CSPlayerOpCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSPlayerOpCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Op = r.int32();
                    break;
                case 2:
                    m.Coin = r.int64();
                    break;
                case 3:
                    m.Password = r.string();
                    break;
                case 4:
                    m.TimeStamp = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPlayerOpCoin;
    })();

    player.SCPlayerOpCoin = (function() {

        function SCPlayerOpCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerOpCoin.prototype.OpRetCode = 0;
        SCPlayerOpCoin.prototype.Op = 0;
        SCPlayerOpCoin.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCPlayerOpCoin.prototype.SafeBoxCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCPlayerOpCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Op != null && Object.hasOwnProperty.call(m, "Op"))
                w.uint32(16).int32(m.Op);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(24).int64(m.Coin);
            if (m.SafeBoxCoin != null && Object.hasOwnProperty.call(m, "SafeBoxCoin"))
                w.uint32(32).int64(m.SafeBoxCoin);
            return w;
        };

        SCPlayerOpCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPlayerOpCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Op = r.int32();
                    break;
                case 3:
                    m.Coin = r.int64();
                    break;
                case 4:
                    m.SafeBoxCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerOpCoin;
    })();

    player.SafeBoxCoinLog = (function() {

        function SafeBoxCoinLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SafeBoxCoinLog.prototype.LogType = 0;
        SafeBoxCoinLog.prototype.OPCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SafeBoxCoinLog.prototype.OPCoinFront = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SafeBoxCoinLog.prototype.OPCoinLast = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SafeBoxCoinLog.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SafeBoxCoinLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LogType != null && Object.hasOwnProperty.call(m, "LogType"))
                w.uint32(8).int32(m.LogType);
            if (m.OPCoin != null && Object.hasOwnProperty.call(m, "OPCoin"))
                w.uint32(16).int64(m.OPCoin);
            if (m.OPCoinFront != null && Object.hasOwnProperty.call(m, "OPCoinFront"))
                w.uint32(24).int64(m.OPCoinFront);
            if (m.OPCoinLast != null && Object.hasOwnProperty.call(m, "OPCoinLast"))
                w.uint32(32).int64(m.OPCoinLast);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(40).int64(m.Ts);
            return w;
        };

        SafeBoxCoinLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SafeBoxCoinLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LogType = r.int32();
                    break;
                case 2:
                    m.OPCoin = r.int64();
                    break;
                case 3:
                    m.OPCoinFront = r.int64();
                    break;
                case 4:
                    m.OPCoinLast = r.int64();
                    break;
                case 5:
                    m.Ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SafeBoxCoinLog;
    })();

    player.CSGetSafeBoxCoinLog = (function() {

        function CSGetSafeBoxCoinLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetSafeBoxCoinLog.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CSGetSafeBoxCoinLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(8).int64(m.Ts);
            return w;
        };

        CSGetSafeBoxCoinLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSGetSafeBoxCoinLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetSafeBoxCoinLog;
    })();

    player.SCGetSafeBoxCoinLog = (function() {

        function SCGetSafeBoxCoinLog(p) {
            this.Logs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetSafeBoxCoinLog.prototype.OpRetCode = 0;
        SCGetSafeBoxCoinLog.prototype.Logs = $util.emptyArray;

        SCGetSafeBoxCoinLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Logs != null && m.Logs.length) {
                for (var i = 0; i < m.Logs.length; ++i)
                    $root.player.SafeBoxCoinLog.encode(m.Logs[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCGetSafeBoxCoinLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCGetSafeBoxCoinLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    if (!(m.Logs && m.Logs.length))
                        m.Logs = [];
                    m.Logs.push($root.player.SafeBoxCoinLog.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetSafeBoxCoinLog;
    })();

    player.CSPlayerInviteCode = (function() {

        function CSPlayerInviteCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPlayerInviteCode.prototype.Code = "";

        CSPlayerInviteCode.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(10).string(m.Code);
            return w;
        };

        CSPlayerInviteCode.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSPlayerInviteCode();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPlayerInviteCode;
    })();

    player.SCPlayerInviteCode = (function() {

        function SCPlayerInviteCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerInviteCode.prototype.OpRetCode = 0;

        SCPlayerInviteCode.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCPlayerInviteCode.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPlayerInviteCode();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerInviteCode;
    })();

    player.CSWebAPIPlayerPass = (function() {

        function CSWebAPIPlayerPass(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSWebAPIPlayerPass.prototype.ApiName = "";
        CSWebAPIPlayerPass.prototype.Params = "";
        CSWebAPIPlayerPass.prototype.CBData = "";

        CSWebAPIPlayerPass.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ApiName != null && Object.hasOwnProperty.call(m, "ApiName"))
                w.uint32(10).string(m.ApiName);
            if (m.Params != null && Object.hasOwnProperty.call(m, "Params"))
                w.uint32(18).string(m.Params);
            if (m.CBData != null && Object.hasOwnProperty.call(m, "CBData"))
                w.uint32(26).string(m.CBData);
            return w;
        };

        CSWebAPIPlayerPass.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSWebAPIPlayerPass();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ApiName = r.string();
                    break;
                case 2:
                    m.Params = r.string();
                    break;
                case 3:
                    m.CBData = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSWebAPIPlayerPass;
    })();

    player.SCWebAPIPlayerPass = (function() {

        function SCWebAPIPlayerPass(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCWebAPIPlayerPass.prototype.OpRetCode = 0;
        SCWebAPIPlayerPass.prototype.ApiName = "";
        SCWebAPIPlayerPass.prototype.CBData = "";
        SCWebAPIPlayerPass.prototype.Response = "";

        SCWebAPIPlayerPass.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.ApiName != null && Object.hasOwnProperty.call(m, "ApiName"))
                w.uint32(18).string(m.ApiName);
            if (m.CBData != null && Object.hasOwnProperty.call(m, "CBData"))
                w.uint32(26).string(m.CBData);
            if (m.Response != null && Object.hasOwnProperty.call(m, "Response"))
                w.uint32(34).string(m.Response);
            return w;
        };

        SCWebAPIPlayerPass.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCWebAPIPlayerPass();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.ApiName = r.string();
                    break;
                case 3:
                    m.CBData = r.string();
                    break;
                case 4:
                    m.Response = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCWebAPIPlayerPass;
    })();

    player.CSWebAPISystemPass = (function() {

        function CSWebAPISystemPass(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSWebAPISystemPass.prototype.ApiName = "";
        CSWebAPISystemPass.prototype.Params = "";
        CSWebAPISystemPass.prototype.CBData = "";

        CSWebAPISystemPass.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ApiName != null && Object.hasOwnProperty.call(m, "ApiName"))
                w.uint32(10).string(m.ApiName);
            if (m.Params != null && Object.hasOwnProperty.call(m, "Params"))
                w.uint32(18).string(m.Params);
            if (m.CBData != null && Object.hasOwnProperty.call(m, "CBData"))
                w.uint32(26).string(m.CBData);
            return w;
        };

        CSWebAPISystemPass.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSWebAPISystemPass();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ApiName = r.string();
                    break;
                case 2:
                    m.Params = r.string();
                    break;
                case 3:
                    m.CBData = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSWebAPISystemPass;
    })();

    player.SCWebAPISystemPass = (function() {

        function SCWebAPISystemPass(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCWebAPISystemPass.prototype.OpRetCode = 0;
        SCWebAPISystemPass.prototype.ApiName = "";
        SCWebAPISystemPass.prototype.CBData = "";
        SCWebAPISystemPass.prototype.Response = "";

        SCWebAPISystemPass.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.ApiName != null && Object.hasOwnProperty.call(m, "ApiName"))
                w.uint32(18).string(m.ApiName);
            if (m.CBData != null && Object.hasOwnProperty.call(m, "CBData"))
                w.uint32(26).string(m.CBData);
            if (m.Response != null && Object.hasOwnProperty.call(m, "Response"))
                w.uint32(34).string(m.Response);
            return w;
        };

        SCWebAPISystemPass.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCWebAPISystemPass();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.ApiName = r.string();
                    break;
                case 3:
                    m.CBData = r.string();
                    break;
                case 4:
                    m.Response = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCWebAPISystemPass;
    })();

    player.CSSpreadBind = (function() {

        function CSSpreadBind(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSSpreadBind.prototype.ParentId = 0;

        CSSpreadBind.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ParentId != null && Object.hasOwnProperty.call(m, "ParentId"))
                w.uint32(8).int32(m.ParentId);
            return w;
        };

        CSSpreadBind.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSSpreadBind();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ParentId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSSpreadBind;
    })();

    player.SCSpreadBind = (function() {

        function SCSpreadBind(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSpreadBind.prototype.OpRetCode = 0;
        SCSpreadBind.prototype.ParentId = 0;

        SCSpreadBind.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.ParentId != null && Object.hasOwnProperty.call(m, "ParentId"))
                w.uint32(16).int32(m.ParentId);
            return w;
        };

        SCSpreadBind.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCSpreadBind();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.ParentId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCSpreadBind;
    })();

    player.CSBindPromoter = (function() {

        function CSBindPromoter(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSBindPromoter.prototype.Promoter = "";

        CSBindPromoter.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Promoter != null && Object.hasOwnProperty.call(m, "Promoter"))
                w.uint32(10).string(m.Promoter);
            return w;
        };

        CSBindPromoter.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSBindPromoter();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Promoter = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSBindPromoter;
    })();

    player.SCBindPromoter = (function() {

        function SCBindPromoter(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCBindPromoter.prototype.OpRetCode = 0;
        SCBindPromoter.prototype.Promoter = "";

        SCBindPromoter.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Promoter != null && Object.hasOwnProperty.call(m, "Promoter"))
                w.uint32(18).string(m.Promoter);
            return w;
        };

        SCBindPromoter.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCBindPromoter();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Promoter = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCBindPromoter;
    })();

    player.SCBindPromoterState = (function() {

        function SCBindPromoterState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCBindPromoterState.prototype.BindState = 0;

        SCBindPromoterState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BindState != null && Object.hasOwnProperty.call(m, "BindState"))
                w.uint32(8).int32(m.BindState);
            return w;
        };

        SCBindPromoterState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCBindPromoterState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.BindState = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCBindPromoterState;
    })();

    player.CSGenCustomerToken = (function() {

        function CSGenCustomerToken(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGenCustomerToken.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSGenCustomerToken.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSGenCustomerToken();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGenCustomerToken;
    })();

    player.SCGenCustomerToken = (function() {

        function SCGenCustomerToken(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGenCustomerToken.prototype.Token = "";

        SCGenCustomerToken.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Token != null && Object.hasOwnProperty.call(m, "Token"))
                w.uint32(10).string(m.Token);
            return w;
        };

        SCGenCustomerToken.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCGenCustomerToken();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Token = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGenCustomerToken;
    })();

    player.CustomerMsg = (function() {

        function CustomerMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CustomerMsg.prototype.MsgId = "";
        CustomerMsg.prototype.Data = "";

        CustomerMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MsgId != null && Object.hasOwnProperty.call(m, "MsgId"))
                w.uint32(10).string(m.MsgId);
            if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
                w.uint32(18).string(m.Data);
            return w;
        };

        CustomerMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CustomerMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.MsgId = r.string();
                    break;
                case 2:
                    m.Data = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CustomerMsg;
    })();

    player.SCCustomerNewMsg = (function() {

        function SCCustomerNewMsg(p) {
            this.Data = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCustomerNewMsg.prototype.Data = $util.emptyArray;

        SCCustomerNewMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Data != null && m.Data.length) {
                for (var i = 0; i < m.Data.length; ++i)
                    $root.player.CustomerMsg.encode(m.Data[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCCustomerNewMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCCustomerNewMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Data && m.Data.length))
                        m.Data = [];
                    m.Data.push($root.player.CustomerMsg.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCustomerNewMsg;
    })();

    player.CSCustomerNewMsgAck = (function() {

        function CSCustomerNewMsgAck(p) {
            this.MsgIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCustomerNewMsgAck.prototype.MsgIds = $util.emptyArray;

        CSCustomerNewMsgAck.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MsgIds != null && m.MsgIds.length) {
                for (var i = 0; i < m.MsgIds.length; ++i)
                    w.uint32(10).string(m.MsgIds[i]);
            }
            return w;
        };

        CSCustomerNewMsgAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSCustomerNewMsgAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.MsgIds && m.MsgIds.length))
                        m.MsgIds = [];
                    m.MsgIds.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSCustomerNewMsgAck;
    })();

    player.CSGetImgageVerifyCode = (function() {

        function CSGetImgageVerifyCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetImgageVerifyCode.prototype.Tel = "";
        CSGetImgageVerifyCode.prototype.PlatformTag = "";

        CSGetImgageVerifyCode.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tel != null && Object.hasOwnProperty.call(m, "Tel"))
                w.uint32(10).string(m.Tel);
            if (m.PlatformTag != null && Object.hasOwnProperty.call(m, "PlatformTag"))
                w.uint32(18).string(m.PlatformTag);
            return w;
        };

        CSGetImgageVerifyCode.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSGetImgageVerifyCode();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Tel = r.string();
                    break;
                case 2:
                    m.PlatformTag = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetImgageVerifyCode;
    })();

    player.SCGetImgageVerifyCode = (function() {

        function SCGetImgageVerifyCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetImgageVerifyCode.prototype.OpRetCode = 0;
        SCGetImgageVerifyCode.prototype.ImageData = "";

        SCGetImgageVerifyCode.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.ImageData != null && Object.hasOwnProperty.call(m, "ImageData"))
                w.uint32(18).string(m.ImageData);
            return w;
        };

        SCGetImgageVerifyCode.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCGetImgageVerifyCode();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.ImageData = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetImgageVerifyCode;
    })();

    player.SCTrusteeshipTips = (function() {

        function SCTrusteeshipTips(p) {
            this.OpParams = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTrusteeshipTips.prototype.Trusteeship = 0;
        SCTrusteeshipTips.prototype.TotalNum = 0;
        SCTrusteeshipTips.prototype.GameFreeId = 0;
        SCTrusteeshipTips.prototype.OpParams = $util.emptyArray;

        SCTrusteeshipTips.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Trusteeship != null && Object.hasOwnProperty.call(m, "Trusteeship"))
                w.uint32(8).int32(m.Trusteeship);
            if (m.TotalNum != null && Object.hasOwnProperty.call(m, "TotalNum"))
                w.uint32(16).int32(m.TotalNum);
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(24).int32(m.GameFreeId);
            if (m.OpParams != null && m.OpParams.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.OpParams.length; ++i)
                    w.int32(m.OpParams[i]);
                w.ldelim();
            }
            return w;
        };

        SCTrusteeshipTips.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCTrusteeshipTips();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Trusteeship = r.int32();
                    break;
                case 2:
                    m.TotalNum = r.int32();
                    break;
                case 3:
                    m.GameFreeId = r.int32();
                    break;
                case 4:
                    if (!(m.OpParams && m.OpParams.length))
                        m.OpParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OpParams.push(r.int32());
                    } else
                        m.OpParams.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTrusteeshipTips;
    })();

    player.CSGetSliderVerifyCode = (function() {

        function CSGetSliderVerifyCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetSliderVerifyCode.prototype.Tel = "";

        CSGetSliderVerifyCode.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tel != null && Object.hasOwnProperty.call(m, "Tel"))
                w.uint32(10).string(m.Tel);
            return w;
        };

        CSGetSliderVerifyCode.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSGetSliderVerifyCode();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Tel = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetSliderVerifyCode;
    })();

    player.SCGetSliderVerifyCode = (function() {

        function SCGetSliderVerifyCode(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetSliderVerifyCode.prototype.OpRetCode = 0;
        SCGetSliderVerifyCode.prototype.Pos = 0;

        SCGetSliderVerifyCode.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(16).int32(m.Pos);
            return w;
        };

        SCGetSliderVerifyCode.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCGetSliderVerifyCode();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Pos = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetSliderVerifyCode;
    })();

    player.CSIosInstallStable = (function() {

        function CSIosInstallStable(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSIosInstallStable.prototype.SnId = 0;
        CSIosInstallStable.prototype.Tel = "";

        CSIosInstallStable.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Tel != null && Object.hasOwnProperty.call(m, "Tel"))
                w.uint32(18).string(m.Tel);
            return w;
        };

        CSIosInstallStable.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSIosInstallStable();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Tel = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSIosInstallStable;
    })();

    player.SCIosInstallStable = (function() {

        function SCIosInstallStable(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCIosInstallStable.prototype.OpRetCode = 0;

        SCIosInstallStable.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCIosInstallStable.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCIosInstallStable();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCIosInstallStable;
    })();

    player.SrvMsgParam = (function() {

        function SrvMsgParam(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SrvMsgParam.prototype.IntParam = 0;
        SrvMsgParam.prototype.StrParam = "";

        SrvMsgParam.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.IntParam != null && Object.hasOwnProperty.call(m, "IntParam"))
                w.uint32(8).int32(m.IntParam);
            if (m.StrParam != null && Object.hasOwnProperty.call(m, "StrParam"))
                w.uint32(18).string(m.StrParam);
            return w;
        };

        SrvMsgParam.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SrvMsgParam();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.IntParam = r.int32();
                    break;
                case 2:
                    m.StrParam = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SrvMsgParam;
    })();

    player.SCSrvMsg = (function() {

        function SCSrvMsg(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSrvMsg.prototype.MsgId = 0;
        SCSrvMsg.prototype.Params = $util.emptyArray;

        SCSrvMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MsgId != null && Object.hasOwnProperty.call(m, "MsgId"))
                w.uint32(8).int32(m.MsgId);
            if (m.Params != null && m.Params.length) {
                for (var i = 0; i < m.Params.length; ++i)
                    $root.player.SrvMsgParam.encode(m.Params[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCSrvMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCSrvMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.MsgId = r.int32();
                    break;
                case 2:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    m.Params.push($root.player.SrvMsgParam.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCSrvMsg;
    })();

    player.CSJackpotList = (function() {

        function CSJackpotList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSJackpotList.prototype.SnId = 0;

        CSJackpotList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            return w;
        };

        CSJackpotList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSJackpotList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSJackpotList;
    })();

    player.FishJackpotInfo = (function() {

        function FishJackpotInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FishJackpotInfo.prototype.Name = "";
        FishJackpotInfo.prototype.Type = 0;
        FishJackpotInfo.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        FishJackpotInfo.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        FishJackpotInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(10).string(m.Name);
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(16).int32(m.Type);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(24).int64(m.Coin);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(32).int64(m.Ts);
            return w;
        };

        FishJackpotInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.FishJackpotInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Name = r.string();
                    break;
                case 2:
                    m.Type = r.int32();
                    break;
                case 3:
                    m.Coin = r.int64();
                    break;
                case 4:
                    m.Ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FishJackpotInfo;
    })();

    player.SCJackpotList = (function() {

        function SCJackpotList(p) {
            this.JackpotList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCJackpotList.prototype.JackpotList = $util.emptyArray;

        SCJackpotList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.JackpotList != null && m.JackpotList.length) {
                for (var i = 0; i < m.JackpotList.length; ++i)
                    $root.player.FishJackpotInfo.encode(m.JackpotList[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCJackpotList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCJackpotList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.JackpotList && m.JackpotList.length))
                        m.JackpotList = [];
                    m.JackpotList.push($root.player.FishJackpotInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCJackpotList;
    })();

    player.CSFishJackpotCoin = (function() {

        function CSFishJackpotCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSFishJackpotCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSFishJackpotCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSFishJackpotCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSFishJackpotCoin;
    })();

    player.SCFishJackpotCoin = (function() {

        function SCFishJackpotCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFishJackpotCoin.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCFishJackpotCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(8).int64(m.Coin);
            return w;
        };

        SCFishJackpotCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCFishJackpotCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Coin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFishJackpotCoin;
    })();

    player.SCNiceIdRebind = (function() {

        function SCNiceIdRebind(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCNiceIdRebind.prototype.SnidId = 0;
        SCNiceIdRebind.prototype.NiceId = 0;

        SCNiceIdRebind.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnidId != null && Object.hasOwnProperty.call(m, "SnidId"))
                w.uint32(8).int32(m.SnidId);
            if (m.NiceId != null && Object.hasOwnProperty.call(m, "NiceId"))
                w.uint32(16).int32(m.NiceId);
            return w;
        };

        SCNiceIdRebind.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCNiceIdRebind();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnidId = r.int32();
                    break;
                case 2:
                    m.NiceId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCNiceIdRebind;
    })();

    player.CSGetSpreadLWIsOpen = (function() {

        function CSGetSpreadLWIsOpen(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetSpreadLWIsOpen.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSGetSpreadLWIsOpen.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSGetSpreadLWIsOpen();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetSpreadLWIsOpen;
    })();

    player.SCGetSpreadLWIsOpen = (function() {

        function SCGetSpreadLWIsOpen(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetSpreadLWIsOpen.prototype.IsOpen = 0;

        SCGetSpreadLWIsOpen.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.IsOpen != null && Object.hasOwnProperty.call(m, "IsOpen"))
                w.uint32(8).int32(m.IsOpen);
            return w;
        };

        SCGetSpreadLWIsOpen.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCGetSpreadLWIsOpen();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.IsOpen = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetSpreadLWIsOpen;
    })();

    player.PayActInfo = (function() {

        function PayActInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PayActInfo.prototype.Id = 0;
        PayActInfo.prototype.GiveNum = 0;
        PayActInfo.prototype.GiveType = 0;
        PayActInfo.prototype.StartTime = 0;
        PayActInfo.prototype.EndTime = 0;
        PayActInfo.prototype.State = 0;

        PayActInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.GiveNum != null && Object.hasOwnProperty.call(m, "GiveNum"))
                w.uint32(16).int32(m.GiveNum);
            if (m.GiveType != null && Object.hasOwnProperty.call(m, "GiveType"))
                w.uint32(24).int32(m.GiveType);
            if (m.StartTime != null && Object.hasOwnProperty.call(m, "StartTime"))
                w.uint32(32).int32(m.StartTime);
            if (m.EndTime != null && Object.hasOwnProperty.call(m, "EndTime"))
                w.uint32(40).int32(m.EndTime);
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(48).int32(m.State);
            return w;
        };

        PayActInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.PayActInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.GiveNum = r.int32();
                    break;
                case 3:
                    m.GiveType = r.int32();
                    break;
                case 4:
                    m.StartTime = r.int32();
                    break;
                case 5:
                    m.EndTime = r.int32();
                    break;
                case 6:
                    m.State = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PayActInfo;
    })();

    player.SCPayActState = (function() {

        function SCPayActState(p) {
            this.PayState = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPayActState.prototype.PayState = $util.emptyArray;

        SCPayActState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PayState != null && m.PayState.length) {
                for (var i = 0; i < m.PayState.length; ++i)
                    $root.player.PayActInfo.encode(m.PayState[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCPayActState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPayActState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.PayState && m.PayState.length))
                        m.PayState = [];
                    m.PayState.push($root.player.PayActInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPayActState;
    })();

    player.CSQueryPlayer = (function() {

        function CSQueryPlayer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSQueryPlayer.prototype.SnId = 0;

        CSQueryPlayer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            return w;
        };

        CSQueryPlayer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSQueryPlayer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSQueryPlayer;
    })();

    player.RoleOrPet = (function() {

        function RoleOrPet(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RoleOrPet.prototype.Id = 0;
        RoleOrPet.prototype.Level = 0;
        RoleOrPet.prototype.Name = "";

        RoleOrPet.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Level != null && Object.hasOwnProperty.call(m, "Level"))
                w.uint32(16).int32(m.Level);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            return w;
        };

        RoleOrPet.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.RoleOrPet();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Level = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoleOrPet;
    })();

    player.SCQueryPlayer = (function() {

        function SCQueryPlayer(p) {
            this.Roles = [];
            this.Pets = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCQueryPlayer.prototype.SnId = 0;
        SCQueryPlayer.prototype.Name = "";
        SCQueryPlayer.prototype.Head = 0;
        SCQueryPlayer.prototype.Sex = 0;
        SCQueryPlayer.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCQueryPlayer.prototype.Diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCQueryPlayer.prototype.VCard = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCQueryPlayer.prototype.IsFriend = false;
        SCQueryPlayer.prototype.CurRoleId = 0;
        SCQueryPlayer.prototype.CurPetId = 0;
        SCQueryPlayer.prototype.Roles = $util.emptyArray;
        SCQueryPlayer.prototype.Pets = $util.emptyArray;
        SCQueryPlayer.prototype.IsShield = false;

        SCQueryPlayer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Head != null && Object.hasOwnProperty.call(m, "Head"))
                w.uint32(24).int32(m.Head);
            if (m.Sex != null && Object.hasOwnProperty.call(m, "Sex"))
                w.uint32(32).int32(m.Sex);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(40).int64(m.Coin);
            if (m.Diamond != null && Object.hasOwnProperty.call(m, "Diamond"))
                w.uint32(48).int64(m.Diamond);
            if (m.VCard != null && Object.hasOwnProperty.call(m, "VCard"))
                w.uint32(56).int64(m.VCard);
            if (m.IsFriend != null && Object.hasOwnProperty.call(m, "IsFriend"))
                w.uint32(64).bool(m.IsFriend);
            if (m.CurRoleId != null && Object.hasOwnProperty.call(m, "CurRoleId"))
                w.uint32(72).int32(m.CurRoleId);
            if (m.CurPetId != null && Object.hasOwnProperty.call(m, "CurPetId"))
                w.uint32(80).int32(m.CurPetId);
            if (m.Roles != null && m.Roles.length) {
                for (var i = 0; i < m.Roles.length; ++i)
                    $root.player.RoleOrPet.encode(m.Roles[i], w.uint32(90).fork()).ldelim();
            }
            if (m.Pets != null && m.Pets.length) {
                for (var i = 0; i < m.Pets.length; ++i)
                    $root.player.RoleOrPet.encode(m.Pets[i], w.uint32(98).fork()).ldelim();
            }
            if (m.IsShield != null && Object.hasOwnProperty.call(m, "IsShield"))
                w.uint32(104).bool(m.IsShield);
            return w;
        };

        SCQueryPlayer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCQueryPlayer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Head = r.int32();
                    break;
                case 4:
                    m.Sex = r.int32();
                    break;
                case 5:
                    m.Coin = r.int64();
                    break;
                case 6:
                    m.Diamond = r.int64();
                    break;
                case 7:
                    m.VCard = r.int64();
                    break;
                case 8:
                    m.IsFriend = r.bool();
                    break;
                case 9:
                    m.CurRoleId = r.int32();
                    break;
                case 10:
                    m.CurPetId = r.int32();
                    break;
                case 11:
                    if (!(m.Roles && m.Roles.length))
                        m.Roles = [];
                    m.Roles.push($root.player.RoleOrPet.decode(r, r.uint32()));
                    break;
                case 12:
                    if (!(m.Pets && m.Pets.length))
                        m.Pets = [];
                    m.Pets.push($root.player.RoleOrPet.decode(r, r.uint32()));
                    break;
                case 13:
                    m.IsShield = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCQueryPlayer;
    })();

    player.CSPMCmd = (function() {

        function CSPMCmd(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPMCmd.prototype.Cmd = "";

        CSPMCmd.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Cmd != null && Object.hasOwnProperty.call(m, "Cmd"))
                w.uint32(10).string(m.Cmd);
            return w;
        };

        CSPMCmd.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSPMCmd();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Cmd = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPMCmd;
    })();

    player.CSRobotChgData = (function() {

        function CSRobotChgData(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSRobotChgData.prototype.Params = $util.emptyArray;

        CSRobotChgData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Params != null && m.Params.length) {
                for (var i = 0; i < m.Params.length; ++i)
                    w.uint32(10).string(m.Params[i]);
            }
            return w;
        };

        CSRobotChgData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSRobotChgData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    m.Params.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSRobotChgData;
    })();

    player.ItemInfo = (function() {

        function ItemInfo(p) {
            this.Function = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ItemInfo.prototype.ItemId = 0;
        ItemInfo.prototype.ItemNum = 0;
        ItemInfo.prototype.Name = "";
        ItemInfo.prototype.Classify = 0;
        ItemInfo.prototype.Type = 0;
        ItemInfo.prototype.Function = $util.emptyArray;
        ItemInfo.prototype.SaleGold = 0;
        ItemInfo.prototype.Composition = 0;
        ItemInfo.prototype.CompositionMax = 0;
        ItemInfo.prototype.Time = 0;
        ItemInfo.prototype.Location = "";
        ItemInfo.prototype.Describe = "";
        ItemInfo.prototype.CType = 0;

        ItemInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ItemId != null && Object.hasOwnProperty.call(m, "ItemId"))
                w.uint32(8).int32(m.ItemId);
            if (m.ItemNum != null && Object.hasOwnProperty.call(m, "ItemNum"))
                w.uint32(16).int32(m.ItemNum);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Classify != null && Object.hasOwnProperty.call(m, "Classify"))
                w.uint32(32).int32(m.Classify);
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(40).int32(m.Type);
            if (m.Function != null && m.Function.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.Function.length; ++i)
                    w.int32(m.Function[i]);
                w.ldelim();
            }
            if (m.SaleGold != null && Object.hasOwnProperty.call(m, "SaleGold"))
                w.uint32(56).int32(m.SaleGold);
            if (m.Composition != null && Object.hasOwnProperty.call(m, "Composition"))
                w.uint32(64).int32(m.Composition);
            if (m.CompositionMax != null && Object.hasOwnProperty.call(m, "CompositionMax"))
                w.uint32(72).int32(m.CompositionMax);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(80).int32(m.Time);
            if (m.Location != null && Object.hasOwnProperty.call(m, "Location"))
                w.uint32(90).string(m.Location);
            if (m.Describe != null && Object.hasOwnProperty.call(m, "Describe"))
                w.uint32(98).string(m.Describe);
            if (m.CType != null && Object.hasOwnProperty.call(m, "CType"))
                w.uint32(104).int32(m.CType);
            return w;
        };

        ItemInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.ItemInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ItemId = r.int32();
                    break;
                case 2:
                    m.ItemNum = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.Classify = r.int32();
                    break;
                case 5:
                    m.Type = r.int32();
                    break;
                case 6:
                    if (!(m.Function && m.Function.length))
                        m.Function = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Function.push(r.int32());
                    } else
                        m.Function.push(r.int32());
                    break;
                case 7:
                    m.SaleGold = r.int32();
                    break;
                case 8:
                    m.Composition = r.int32();
                    break;
                case 9:
                    m.CompositionMax = r.int32();
                    break;
                case 10:
                    m.Time = r.int32();
                    break;
                case 11:
                    m.Location = r.string();
                    break;
                case 12:
                    m.Describe = r.string();
                    break;
                case 13:
                    m.CType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ItemInfo;
    })();

    player.JybInfoAward = (function() {

        function JybInfoAward(p) {
            this.ItemId = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        JybInfoAward.prototype.ItemId = $util.emptyArray;
        JybInfoAward.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        JybInfoAward.prototype.Diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        JybInfoAward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ItemId != null && m.ItemId.length) {
                for (var i = 0; i < m.ItemId.length; ++i)
                    $root.player.ItemInfo.encode(m.ItemId[i], w.uint32(10).fork()).ldelim();
            }
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int64(m.Coin);
            if (m.Diamond != null && Object.hasOwnProperty.call(m, "Diamond"))
                w.uint32(24).int64(m.Diamond);
            return w;
        };

        JybInfoAward.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.JybInfoAward();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.ItemId && m.ItemId.length))
                        m.ItemId = [];
                    m.ItemId.push($root.player.ItemInfo.decode(r, r.uint32()));
                    break;
                case 2:
                    m.Coin = r.int64();
                    break;
                case 3:
                    m.Diamond = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return JybInfoAward;
    })();

    player.CSPlayerSetting = (function() {

        function CSPlayerSetting(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPlayerSetting.prototype.Optype = 0;
        CSPlayerSetting.prototype.PackageCode = "";

        CSPlayerSetting.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Optype != null && Object.hasOwnProperty.call(m, "Optype"))
                w.uint32(8).int32(m.Optype);
            if (m.PackageCode != null && Object.hasOwnProperty.call(m, "PackageCode"))
                w.uint32(18).string(m.PackageCode);
            return w;
        };

        CSPlayerSetting.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSPlayerSetting();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Optype = r.int32();
                    break;
                case 2:
                    m.PackageCode = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPlayerSetting;
    })();

    player.SCPlayerSetting = (function() {

        function SCPlayerSetting(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerSetting.prototype.OpRetCode = 0;
        SCPlayerSetting.prototype.GainItem = null;

        SCPlayerSetting.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.GainItem != null && Object.hasOwnProperty.call(m, "GainItem"))
                $root.player.JybInfoAward.encode(m.GainItem, w.uint32(18).fork()).ldelim();
            return w;
        };

        SCPlayerSetting.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCPlayerSetting();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.GainItem = $root.player.JybInfoAward.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerSetting;
    })();

    player.SCGameExDropItems = (function() {

        function SCGameExDropItems(p) {
            this.Items = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGameExDropItems.prototype.Items = $util.emptyObject;

        SCGameExDropItems.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Items != null && Object.hasOwnProperty.call(m, "Items")) {
                for (var ks = Object.keys(m.Items), i = 0; i < ks.length; ++i) {
                    w.uint32(10).fork().uint32(8).int32(ks[i]).uint32(16).int32(m.Items[ks[i]]).ldelim();
                }
            }
            return w;
        };

        SCGameExDropItems.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCGameExDropItems(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    r.skip().pos++;
                    if (m.Items === $util.emptyObject)
                        m.Items = {};
                    k = r.int32();
                    r.pos++;
                    m.Items[k] = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGameExDropItems;
    })();

    player.CSVIPBuy = (function() {

        function CSVIPBuy(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSVIPBuy.prototype.Money = 0;

        CSVIPBuy.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Money != null && Object.hasOwnProperty.call(m, "Money"))
                w.uint32(8).int32(m.Money);
            return w;
        };

        CSVIPBuy.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSVIPBuy();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Money = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSVIPBuy;
    })();

    player.SCVIPBuy = (function() {

        function SCVIPBuy(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCVIPBuy.prototype.OpRetCode = 0;
        SCVIPBuy.prototype.VipExp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCVIPBuy.prototype.Vip = 0;
        SCVIPBuy.prototype.TolVipExp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCVIPBuy.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.VipExp != null && Object.hasOwnProperty.call(m, "VipExp"))
                w.uint32(16).int64(m.VipExp);
            if (m.Vip != null && Object.hasOwnProperty.call(m, "Vip"))
                w.uint32(24).int32(m.Vip);
            if (m.TolVipExp != null && Object.hasOwnProperty.call(m, "TolVipExp"))
                w.uint32(32).int64(m.TolVipExp);
            return w;
        };

        SCVIPBuy.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCVIPBuy();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.VipExp = r.int64();
                    break;
                case 3:
                    m.Vip = r.int32();
                    break;
                case 4:
                    m.TolVipExp = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCVIPBuy;
    })();

    player.CSVIPDraw = (function() {

        function CSVIPDraw(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSVIPDraw.prototype.Id = 0;

        CSVIPDraw.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            return w;
        };

        CSVIPDraw.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSVIPDraw();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSVIPDraw;
    })();

    player.SCVIPDraw = (function() {

        function SCVIPDraw(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCVIPDraw.prototype.OpRetCode = 0;

        SCVIPDraw.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCVIPDraw.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCVIPDraw();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCVIPDraw;
    })();

    player.CSVIPInfo = (function() {

        function CSVIPInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSVIPInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSVIPInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.CSVIPInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSVIPInfo;
    })();

    player.VIPcfg = (function() {

        function VIPcfg(p) {
            this.Item = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        VIPcfg.prototype.VIPId = 0;
        VIPcfg.prototype.Item = $util.emptyArray;
        VIPcfg.prototype.VIPEX = 0;
        VIPcfg.prototype.price = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        VIPcfg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.VIPId != null && Object.hasOwnProperty.call(m, "VIPId"))
                w.uint32(8).int32(m.VIPId);
            if (m.Item != null && m.Item.length) {
                for (var i = 0; i < m.Item.length; ++i)
                    $root.player.ItemInfo.encode(m.Item[i], w.uint32(18).fork()).ldelim();
            }
            if (m.VIPEX != null && Object.hasOwnProperty.call(m, "VIPEX"))
                w.uint32(24).int32(m.VIPEX);
            if (m.price != null && Object.hasOwnProperty.call(m, "price"))
                w.uint32(32).int64(m.price);
            return w;
        };

        VIPcfg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.VIPcfg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.VIPId = r.int32();
                    break;
                case 2:
                    if (!(m.Item && m.Item.length))
                        m.Item = [];
                    m.Item.push($root.player.ItemInfo.decode(r, r.uint32()));
                    break;
                case 3:
                    m.VIPEX = r.int32();
                    break;
                case 4:
                    m.price = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return VIPcfg;
    })();

    player.SCVIPInfo = (function() {

        function SCVIPInfo(p) {
            this.List = [];
            this.VipId = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCVIPInfo.prototype.OpRetCode = 0;
        SCVIPInfo.prototype.List = $util.emptyArray;
        SCVIPInfo.prototype.TolVipExp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCVIPInfo.prototype.Vip = 0;
        SCVIPInfo.prototype.VipId = $util.emptyArray;
        SCVIPInfo.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCVIPInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.List != null && m.List.length) {
                for (var i = 0; i < m.List.length; ++i)
                    $root.player.VIPcfg.encode(m.List[i], w.uint32(18).fork()).ldelim();
            }
            if (m.TolVipExp != null && Object.hasOwnProperty.call(m, "TolVipExp"))
                w.uint32(24).int64(m.TolVipExp);
            if (m.Vip != null && Object.hasOwnProperty.call(m, "Vip"))
                w.uint32(32).int32(m.Vip);
            if (m.VipId != null && m.VipId.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.VipId.length; ++i)
                    w.int32(m.VipId[i]);
                w.ldelim();
            }
            if (m.Money != null && Object.hasOwnProperty.call(m, "Money"))
                w.uint32(48).int64(m.Money);
            return w;
        };

        SCVIPInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.player.SCVIPInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    if (!(m.List && m.List.length))
                        m.List = [];
                    m.List.push($root.player.VIPcfg.decode(r, r.uint32()));
                    break;
                case 3:
                    m.TolVipExp = r.int64();
                    break;
                case 4:
                    m.Vip = r.int32();
                    break;
                case 5:
                    if (!(m.VipId && m.VipId.length))
                        m.VipId = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.VipId.push(r.int32());
                    } else
                        m.VipId.push(r.int32());
                    break;
                case 6:
                    m.Money = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCVIPInfo;
    })();

    return player;
})();

module.exports = $root;
