/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.login = (function() {

    var login = {};

    login.GatePacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_Gate_ZERO"] = 0;
        values[valuesById[-1004] = "PACKET_CS_AUTH"] = -1004;
        values[valuesById[-1006] = "PACKET_SC_AUTH"] = -1006;
        values[valuesById[2001] = "PACKET_SS_DICONNECT"] = 2001;
        values[valuesById[2002] = "PACKET_CS_PING"] = 2002;
        values[valuesById[2003] = "PACKET_SC_PONG"] = 2003;
        values[valuesById[2004] = "PACKET_CS_BINDBUNDLE"] = 2004;
        values[valuesById[2005] = "PACKET_SC_BINDBUNDLE"] = 2005;
        values[valuesById[2006] = "PACKET_CS_LOGICACK"] = 2006;
        return values;
    })();

    login.CSPing = (function() {

        function CSPing(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPing.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CSPing.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TimeStamp != null && Object.hasOwnProperty.call(m, "TimeStamp"))
                w.uint32(8).int64(m.TimeStamp);
            return w;
        };

        CSPing.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSPing();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TimeStamp = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPing;
    })();

    login.SCPong = (function() {

        function SCPong(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPong.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCPong.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TimeStamp != null && Object.hasOwnProperty.call(m, "TimeStamp"))
                w.uint32(8).int64(m.TimeStamp);
            return w;
        };

        SCPong.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCPong();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TimeStamp = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPong;
    })();

    login.CSBindBundle = (function() {

        function CSBindBundle(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSBindBundle.prototype.BundleKey = "";

        CSBindBundle.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BundleKey != null && Object.hasOwnProperty.call(m, "BundleKey"))
                w.uint32(10).string(m.BundleKey);
            return w;
        };

        CSBindBundle.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSBindBundle();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.BundleKey = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSBindBundle;
    })();

    login.SCBindBundle = (function() {

        function SCBindBundle(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCBindBundle.prototype.BundleId = 0;
        SCBindBundle.prototype.Sid = "";
        SCBindBundle.prototype.SrvId = 0;

        SCBindBundle.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BundleId != null && Object.hasOwnProperty.call(m, "BundleId"))
                w.uint32(8).int32(m.BundleId);
            if (m.Sid != null && Object.hasOwnProperty.call(m, "Sid"))
                w.uint32(18).string(m.Sid);
            if (m.SrvId != null && Object.hasOwnProperty.call(m, "SrvId"))
                w.uint32(24).int32(m.SrvId);
            return w;
        };

        SCBindBundle.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCBindBundle();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.BundleId = r.int32();
                    break;
                case 2:
                    m.Sid = r.string();
                    break;
                case 3:
                    m.SrvId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCBindBundle;
    })();

    login.CSLogicAck = (function() {

        function CSLogicAck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSLogicAck.prototype.LogicNo = 0;

        CSLogicAck.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LogicNo != null && Object.hasOwnProperty.call(m, "LogicNo"))
                w.uint32(8).uint32(m.LogicNo);
            return w;
        };

        CSLogicAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSLogicAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LogicNo = r.uint32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSLogicAck;
    })();

    login.SSPacketAuth = (function() {

        function SSPacketAuth(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SSPacketAuth.prototype.AuthKey = "";
        SSPacketAuth.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SSPacketAuth.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.AuthKey != null && Object.hasOwnProperty.call(m, "AuthKey"))
                w.uint32(10).string(m.AuthKey);
            if (m.Timestamp != null && Object.hasOwnProperty.call(m, "Timestamp"))
                w.uint32(16).int64(m.Timestamp);
            return w;
        };

        SSPacketAuth.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SSPacketAuth();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.AuthKey = r.string();
                    break;
                case 2:
                    m.Timestamp = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SSPacketAuth;
    })();

    login.SSPacketAuthAck = (function() {

        function SSPacketAuthAck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SSPacketAuthAck.prototype.Msg = "";

        SSPacketAuthAck.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(10).string(m.Msg);
            return w;
        };

        SSPacketAuthAck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SSPacketAuthAck();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SSPacketAuthAck;
    })();

    login.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[1000] = "OPRC_LoginFailed"] = 1000;
        values[valuesById[1001] = "OPRC_LoginSignErr"] = 1001;
        values[valuesById[1002] = "OPRC_LoginOtherPlace"] = 1002;
        values[valuesById[1003] = "OPRC_LoginPassError"] = 1003;
        values[valuesById[1004] = "OPRC_Login_CreateAccSuccess"] = 1004;
        values[valuesById[1005] = "OPRC_Login_CreateAccError"] = 1005;
        values[valuesById[1006] = "OPRC_Login_NameLang"] = 1006;
        values[valuesById[1007] = "OPRC_Login_NameSame"] = 1007;
        values[valuesById[1008] = "OPRC_Login_NameError"] = 1008;
        values[valuesById[1009] = "OPRC_Login_CreateFailed"] = 1009;
        values[valuesById[1010] = "OPRC_AccountBeFreeze"] = 1010;
        values[valuesById[1044] = "OPRC_YourResVerIsLow"] = 1044;
        values[valuesById[1045] = "OPRC_YourAppVerIsLow"] = 1045;
        values[valuesById[1054] = "OPRC_SceneServerMaintain"] = 1054;
        values[valuesById[1065] = "OPRC_TelError"] = 1065;
        return values;
    })();

    login.LoginPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_Login_ZERO"] = 0;
        values[valuesById[2051] = "PACKET_CS_LOGIN"] = 2051;
        values[valuesById[2052] = "PACKET_SC_LOGIN"] = 2052;
        values[valuesById[2053] = "PACKET_CS_LOGOUT"] = 2053;
        values[valuesById[2054] = "PACKET_SC_LOGOUT"] = 2054;
        values[valuesById[2055] = "PACKET_SC_GAMECONFIG"] = 2055;
        values[valuesById[2056] = "PACKET_SC_BULLETIONINFO"] = 2056;
        values[valuesById[2057] = "PACKET_CS_BULLETIONINFO"] = 2057;
        values[valuesById[2058] = "PACKET_CS_CUSTOMERINFOLIST"] = 2058;
        values[valuesById[2059] = "PACKET_SC_CUSTOMERINFOLIST"] = 2059;
        values[valuesById[2060] = "PACKET_CS_CUSTOMSERVICE"] = 2060;
        values[valuesById[2061] = "PACKET_SC_CUSTOMSERVICE"] = 2061;
        values[valuesById[2062] = "PACKET_CS_PLATFORMCFG"] = 2062;
        values[valuesById[2063] = "PACKET_SC_PLATFORMCFG"] = 2063;
        values[valuesById[2064] = "PACKET_SC_ACTIVITYCHECK"] = 2064;
        values[valuesById[2065] = "PACKET_CS_VERIFYTYPE"] = 2065;
        values[valuesById[2066] = "PACKET_SC_VERIFYTYPE"] = 2066;
        values[valuesById[2067] = "PACKET_CS_REGISTERVERIFYTYPE"] = 2067;
        values[valuesById[2068] = "PACKET_SC_REGISTERVERIFYTYPE"] = 2068;
        values[valuesById[2069] = "PACKET_SC_SYNCGAMEFREE"] = 2069;
        values[valuesById[2070] = "PACKET_SC_ACTSWITCHCFG"] = 2070;
        values[valuesById[2071] = "PACKET_CS_GETTHRGAMECFG"] = 2071;
        values[valuesById[2072] = "PACKET_SC_GETTHRGAMECFG"] = 2072;
        values[valuesById[2073] = "PACKET_CS_ACCOUNTINVALID"] = 2073;
        return values;
    })();

    login.CSLogin = (function() {

        function CSLogin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSLogin.prototype.Username = "";
        CSLogin.prototype.Password = "";
        CSLogin.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CSLogin.prototype.Params = "";
        CSLogin.prototype.Sign = "";
        CSLogin.prototype.Platform = "";
        CSLogin.prototype.Channel = "";
        CSLogin.prototype.InviterId = 0;
        CSLogin.prototype.ApkVer = 0;
        CSLogin.prototype.ResVer = 0;
        CSLogin.prototype.LoginType = 0;
        CSLogin.prototype.PlatformTag = "";
        CSLogin.prototype.DeviceOs = "";
        CSLogin.prototype.Promoter = "";
        CSLogin.prototype.Package = "";
        CSLogin.prototype.PromoterTree = 0;
        CSLogin.prototype.DeviceInfo = "";
        CSLogin.prototype.DeviceId = "";
        CSLogin.prototype.Token = "";
        CSLogin.prototype.Name = "";
        CSLogin.prototype.HeadUrl = "";

        CSLogin.encode = function encode(m, w) {
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
            if (m.LoginType != null && Object.hasOwnProperty.call(m, "LoginType"))
                w.uint32(88).int32(m.LoginType);
            if (m.PlatformTag != null && Object.hasOwnProperty.call(m, "PlatformTag"))
                w.uint32(98).string(m.PlatformTag);
            if (m.DeviceOs != null && Object.hasOwnProperty.call(m, "DeviceOs"))
                w.uint32(106).string(m.DeviceOs);
            if (m.Promoter != null && Object.hasOwnProperty.call(m, "Promoter"))
                w.uint32(114).string(m.Promoter);
            if (m.Package != null && Object.hasOwnProperty.call(m, "Package"))
                w.uint32(122).string(m.Package);
            if (m.PromoterTree != null && Object.hasOwnProperty.call(m, "PromoterTree"))
                w.uint32(128).int32(m.PromoterTree);
            if (m.DeviceInfo != null && Object.hasOwnProperty.call(m, "DeviceInfo"))
                w.uint32(138).string(m.DeviceInfo);
            if (m.DeviceId != null && Object.hasOwnProperty.call(m, "DeviceId"))
                w.uint32(146).string(m.DeviceId);
            if (m.Token != null && Object.hasOwnProperty.call(m, "Token"))
                w.uint32(154).string(m.Token);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(162).string(m.Name);
            if (m.HeadUrl != null && Object.hasOwnProperty.call(m, "HeadUrl"))
                w.uint32(170).string(m.HeadUrl);
            return w;
        };

        CSLogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSLogin();
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
                    m.LoginType = r.int32();
                    break;
                case 12:
                    m.PlatformTag = r.string();
                    break;
                case 13:
                    m.DeviceOs = r.string();
                    break;
                case 14:
                    m.Promoter = r.string();
                    break;
                case 15:
                    m.Package = r.string();
                    break;
                case 16:
                    m.PromoterTree = r.int32();
                    break;
                case 17:
                    m.DeviceInfo = r.string();
                    break;
                case 18:
                    m.DeviceId = r.string();
                    break;
                case 19:
                    m.Token = r.string();
                    break;
                case 20:
                    m.Name = r.string();
                    break;
                case 21:
                    m.HeadUrl = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSLogin;
    })();

    login.GameVer = (function() {

        function GameVer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameVer.prototype.GameId = 0;
        GameVer.prototype.MinApkVer = 0;
        GameVer.prototype.LatestApkVer = 0;
        GameVer.prototype.MinResVer = 0;
        GameVer.prototype.LatestResVer = 0;

        GameVer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.MinApkVer != null && Object.hasOwnProperty.call(m, "MinApkVer"))
                w.uint32(16).int32(m.MinApkVer);
            if (m.LatestApkVer != null && Object.hasOwnProperty.call(m, "LatestApkVer"))
                w.uint32(24).int32(m.LatestApkVer);
            if (m.MinResVer != null && Object.hasOwnProperty.call(m, "MinResVer"))
                w.uint32(32).int32(m.MinResVer);
            if (m.LatestResVer != null && Object.hasOwnProperty.call(m, "LatestResVer"))
                w.uint32(40).int32(m.LatestResVer);
            return w;
        };

        GameVer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.GameVer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.MinApkVer = r.int32();
                    break;
                case 3:
                    m.LatestApkVer = r.int32();
                    break;
                case 4:
                    m.MinResVer = r.int32();
                    break;
                case 5:
                    m.LatestResVer = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameVer;
    })();

    login.GameConfig = (function() {

        function GameConfig(p) {
            this.OtherIntParams = [];
            this.MaxBetCoin = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameConfig.prototype.GameId = 0;
        GameConfig.prototype.LogicId = 0;
        GameConfig.prototype.GameMode = 0;
        GameConfig.prototype.State = false;
        GameConfig.prototype.LimitCoin = 0;
        GameConfig.prototype.MaxCoinLimit = 0;
        GameConfig.prototype.BaseScore = 0;
        GameConfig.prototype.OtherIntParams = $util.emptyArray;
        GameConfig.prototype.BetScore = 0;
        GameConfig.prototype.MaxBetCoin = $util.emptyArray;
        GameConfig.prototype.MatchMode = 0;
        GameConfig.prototype.LotteryCfg = "";
        GameConfig.prototype.LotteryCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.LogicId != null && Object.hasOwnProperty.call(m, "LogicId"))
                w.uint32(16).int32(m.LogicId);
            if (m.GameMode != null && Object.hasOwnProperty.call(m, "GameMode"))
                w.uint32(24).int32(m.GameMode);
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(32).bool(m.State);
            if (m.LimitCoin != null && Object.hasOwnProperty.call(m, "LimitCoin"))
                w.uint32(40).int32(m.LimitCoin);
            if (m.MaxCoinLimit != null && Object.hasOwnProperty.call(m, "MaxCoinLimit"))
                w.uint32(48).int32(m.MaxCoinLimit);
            if (m.BaseScore != null && Object.hasOwnProperty.call(m, "BaseScore"))
                w.uint32(56).int32(m.BaseScore);
            if (m.OtherIntParams != null && m.OtherIntParams.length) {
                w.uint32(66).fork();
                for (var i = 0; i < m.OtherIntParams.length; ++i)
                    w.int32(m.OtherIntParams[i]);
                w.ldelim();
            }
            if (m.BetScore != null && Object.hasOwnProperty.call(m, "BetScore"))
                w.uint32(72).int32(m.BetScore);
            if (m.MaxBetCoin != null && m.MaxBetCoin.length) {
                w.uint32(82).fork();
                for (var i = 0; i < m.MaxBetCoin.length; ++i)
                    w.int32(m.MaxBetCoin[i]);
                w.ldelim();
            }
            if (m.MatchMode != null && Object.hasOwnProperty.call(m, "MatchMode"))
                w.uint32(88).int32(m.MatchMode);
            if (m.LotteryCfg != null && Object.hasOwnProperty.call(m, "LotteryCfg"))
                w.uint32(98).string(m.LotteryCfg);
            if (m.LotteryCoin != null && Object.hasOwnProperty.call(m, "LotteryCoin"))
                w.uint32(104).int64(m.LotteryCoin);
            return w;
        };

        GameConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.GameConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.LogicId = r.int32();
                    break;
                case 3:
                    m.GameMode = r.int32();
                    break;
                case 4:
                    m.State = r.bool();
                    break;
                case 5:
                    m.LimitCoin = r.int32();
                    break;
                case 6:
                    m.MaxCoinLimit = r.int32();
                    break;
                case 7:
                    m.BaseScore = r.int32();
                    break;
                case 8:
                    if (!(m.OtherIntParams && m.OtherIntParams.length))
                        m.OtherIntParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OtherIntParams.push(r.int32());
                    } else
                        m.OtherIntParams.push(r.int32());
                    break;
                case 9:
                    m.BetScore = r.int32();
                    break;
                case 10:
                    if (!(m.MaxBetCoin && m.MaxBetCoin.length))
                        m.MaxBetCoin = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MaxBetCoin.push(r.int32());
                    } else
                        m.MaxBetCoin.push(r.int32());
                    break;
                case 11:
                    m.MatchMode = r.int32();
                    break;
                case 12:
                    m.LotteryCfg = r.string();
                    break;
                case 13:
                    m.LotteryCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameConfig;
    })();

    login.LoginGameConfig = (function() {

        function LoginGameConfig(p) {
            this.OtherIntParams = [];
            this.MaxBetCoin = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        LoginGameConfig.prototype.LogicId = 0;
        LoginGameConfig.prototype.LimitCoin = 0;
        LoginGameConfig.prototype.MaxCoinLimit = 0;
        LoginGameConfig.prototype.BaseScore = 0;
        LoginGameConfig.prototype.OtherIntParams = $util.emptyArray;
        LoginGameConfig.prototype.BetScore = 0;
        LoginGameConfig.prototype.MaxBetCoin = $util.emptyArray;
        LoginGameConfig.prototype.MatchMode = 0;
        LoginGameConfig.prototype.LotteryCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        LoginGameConfig.prototype.LotteryCfg = "";

        LoginGameConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LogicId != null && Object.hasOwnProperty.call(m, "LogicId"))
                w.uint32(8).int32(m.LogicId);
            if (m.LimitCoin != null && Object.hasOwnProperty.call(m, "LimitCoin"))
                w.uint32(16).int32(m.LimitCoin);
            if (m.MaxCoinLimit != null && Object.hasOwnProperty.call(m, "MaxCoinLimit"))
                w.uint32(24).int32(m.MaxCoinLimit);
            if (m.BaseScore != null && Object.hasOwnProperty.call(m, "BaseScore"))
                w.uint32(32).int32(m.BaseScore);
            if (m.OtherIntParams != null && m.OtherIntParams.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.OtherIntParams.length; ++i)
                    w.int32(m.OtherIntParams[i]);
                w.ldelim();
            }
            if (m.BetScore != null && Object.hasOwnProperty.call(m, "BetScore"))
                w.uint32(48).int32(m.BetScore);
            if (m.MaxBetCoin != null && m.MaxBetCoin.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.MaxBetCoin.length; ++i)
                    w.int32(m.MaxBetCoin[i]);
                w.ldelim();
            }
            if (m.MatchMode != null && Object.hasOwnProperty.call(m, "MatchMode"))
                w.uint32(64).int32(m.MatchMode);
            if (m.LotteryCoin != null && Object.hasOwnProperty.call(m, "LotteryCoin"))
                w.uint32(72).int64(m.LotteryCoin);
            if (m.LotteryCfg != null && Object.hasOwnProperty.call(m, "LotteryCfg"))
                w.uint32(82).string(m.LotteryCfg);
            return w;
        };

        LoginGameConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.LoginGameConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LogicId = r.int32();
                    break;
                case 2:
                    m.LimitCoin = r.int32();
                    break;
                case 3:
                    m.MaxCoinLimit = r.int32();
                    break;
                case 4:
                    m.BaseScore = r.int32();
                    break;
                case 5:
                    if (!(m.OtherIntParams && m.OtherIntParams.length))
                        m.OtherIntParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OtherIntParams.push(r.int32());
                    } else
                        m.OtherIntParams.push(r.int32());
                    break;
                case 6:
                    m.BetScore = r.int32();
                    break;
                case 7:
                    if (!(m.MaxBetCoin && m.MaxBetCoin.length))
                        m.MaxBetCoin = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MaxBetCoin.push(r.int32());
                    } else
                        m.MaxBetCoin.push(r.int32());
                    break;
                case 8:
                    m.MatchMode = r.int32();
                    break;
                case 9:
                    m.LotteryCoin = r.int64();
                    break;
                case 10:
                    m.LotteryCfg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LoginGameConfig;
    })();

    login.LoginGameInfo = (function() {

        function LoginGameInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        LoginGameInfo.prototype.GameId = 0;
        LoginGameInfo.prototype.LogicId = 0;
        LoginGameInfo.prototype.LotteryCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        LoginGameInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.LogicId != null && Object.hasOwnProperty.call(m, "LogicId"))
                w.uint32(16).int32(m.LogicId);
            if (m.LotteryCoin != null && Object.hasOwnProperty.call(m, "LotteryCoin"))
                w.uint32(24).int64(m.LotteryCoin);
            return w;
        };

        LoginGameInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.LoginGameInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.LogicId = r.int32();
                    break;
                case 3:
                    m.LotteryCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LoginGameInfo;
    })();

    login.LoginThrGameConfig = (function() {

        function LoginThrGameConfig(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        LoginThrGameConfig.prototype.LogicId = 0;
        LoginThrGameConfig.prototype.LimitCoin = 0;

        LoginThrGameConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LogicId != null && Object.hasOwnProperty.call(m, "LogicId"))
                w.uint32(8).int32(m.LogicId);
            if (m.LimitCoin != null && Object.hasOwnProperty.call(m, "LimitCoin"))
                w.uint32(16).int32(m.LimitCoin);
            return w;
        };

        LoginThrGameConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.LoginThrGameConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LogicId = r.int32();
                    break;
                case 2:
                    m.LimitCoin = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LoginThrGameConfig;
    })();

    login.SCGameConfig = (function() {

        function SCGameConfig(p) {
            this.GameCfg = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGameConfig.prototype.GameCfg = $util.emptyArray;

        SCGameConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameCfg != null && m.GameCfg.length) {
                for (var i = 0; i < m.GameCfg.length; ++i)
                    $root.login.GameConfig.encode(m.GameCfg[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCGameConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCGameConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.GameCfg && m.GameCfg.length))
                        m.GameCfg = [];
                    m.GameCfg.push($root.login.GameConfig.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGameConfig;
    })();

    login.SCLogin = (function() {

        function SCLogin(p) {
            this.SubGameVer = [];
            this.GameInfo = [];
            this.ThrGameId = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLogin.prototype.OpRetCode = 0;
        SCLogin.prototype.AccId = "";
        SCLogin.prototype.SrvTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLogin.prototype.MinApkVer = 0;
        SCLogin.prototype.LatestApkVer = 0;
        SCLogin.prototype.MinResVer = 0;
        SCLogin.prototype.LatestResVer = 0;
        SCLogin.prototype.SubGameVer = $util.emptyArray;
        SCLogin.prototype.GameInfo = $util.emptyArray;
        SCLogin.prototype.ThrGameId = $util.emptyArray;

        SCLogin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.AccId != null && Object.hasOwnProperty.call(m, "AccId"))
                w.uint32(18).string(m.AccId);
            if (m.SrvTs != null && Object.hasOwnProperty.call(m, "SrvTs"))
                w.uint32(24).int64(m.SrvTs);
            if (m.MinApkVer != null && Object.hasOwnProperty.call(m, "MinApkVer"))
                w.uint32(32).int32(m.MinApkVer);
            if (m.LatestApkVer != null && Object.hasOwnProperty.call(m, "LatestApkVer"))
                w.uint32(40).int32(m.LatestApkVer);
            if (m.MinResVer != null && Object.hasOwnProperty.call(m, "MinResVer"))
                w.uint32(48).int32(m.MinResVer);
            if (m.LatestResVer != null && Object.hasOwnProperty.call(m, "LatestResVer"))
                w.uint32(56).int32(m.LatestResVer);
            if (m.SubGameVer != null && m.SubGameVer.length) {
                for (var i = 0; i < m.SubGameVer.length; ++i)
                    $root.login.GameVer.encode(m.SubGameVer[i], w.uint32(66).fork()).ldelim();
            }
            if (m.GameInfo != null && m.GameInfo.length) {
                for (var i = 0; i < m.GameInfo.length; ++i)
                    $root.login.LoginGameInfo.encode(m.GameInfo[i], w.uint32(74).fork()).ldelim();
            }
            if (m.ThrGameId != null && m.ThrGameId.length) {
                w.uint32(82).fork();
                for (var i = 0; i < m.ThrGameId.length; ++i)
                    w.int32(m.ThrGameId[i]);
                w.ldelim();
            }
            return w;
        };

        SCLogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCLogin();
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
                case 4:
                    m.MinApkVer = r.int32();
                    break;
                case 5:
                    m.LatestApkVer = r.int32();
                    break;
                case 6:
                    m.MinResVer = r.int32();
                    break;
                case 7:
                    m.LatestResVer = r.int32();
                    break;
                case 8:
                    if (!(m.SubGameVer && m.SubGameVer.length))
                        m.SubGameVer = [];
                    m.SubGameVer.push($root.login.GameVer.decode(r, r.uint32()));
                    break;
                case 9:
                    if (!(m.GameInfo && m.GameInfo.length))
                        m.GameInfo = [];
                    m.GameInfo.push($root.login.LoginGameInfo.decode(r, r.uint32()));
                    break;
                case 10:
                    if (!(m.ThrGameId && m.ThrGameId.length))
                        m.ThrGameId = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ThrGameId.push(r.int32());
                    } else
                        m.ThrGameId.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLogin;
    })();

    login.Bulletion = (function() {

        function Bulletion(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Bulletion.prototype.Id = 0;
        Bulletion.prototype.NoticeTitle = "";
        Bulletion.prototype.NoticeContent = "";
        Bulletion.prototype.UpdateTime = "";
        Bulletion.prototype.Sort = 0;

        Bulletion.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.NoticeTitle != null && Object.hasOwnProperty.call(m, "NoticeTitle"))
                w.uint32(26).string(m.NoticeTitle);
            if (m.NoticeContent != null && Object.hasOwnProperty.call(m, "NoticeContent"))
                w.uint32(34).string(m.NoticeContent);
            if (m.UpdateTime != null && Object.hasOwnProperty.call(m, "UpdateTime"))
                w.uint32(42).string(m.UpdateTime);
            if (m.Sort != null && Object.hasOwnProperty.call(m, "Sort"))
                w.uint32(48).int32(m.Sort);
            return w;
        };

        Bulletion.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.Bulletion();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 3:
                    m.NoticeTitle = r.string();
                    break;
                case 4:
                    m.NoticeContent = r.string();
                    break;
                case 5:
                    m.UpdateTime = r.string();
                    break;
                case 6:
                    m.Sort = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Bulletion;
    })();

    login.SCBulletionInfo = (function() {

        function SCBulletionInfo(p) {
            this.bulletionList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCBulletionInfo.prototype.id = 0;
        SCBulletionInfo.prototype.bulletionList = $util.emptyArray;

        SCBulletionInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.bulletionList != null && m.bulletionList.length) {
                for (var i = 0; i < m.bulletionList.length; ++i)
                    $root.login.Bulletion.encode(m.bulletionList[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCBulletionInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCBulletionInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    if (!(m.bulletionList && m.bulletionList.length))
                        m.bulletionList = [];
                    m.bulletionList.push($root.login.Bulletion.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCBulletionInfo;
    })();

    login.CSBulletionInfo = (function() {

        function CSBulletionInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSBulletionInfo.prototype.PlatformTag = "";

        CSBulletionInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlatformTag != null && Object.hasOwnProperty.call(m, "PlatformTag"))
                w.uint32(10).string(m.PlatformTag);
            return w;
        };

        CSBulletionInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSBulletionInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PlatformTag = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSBulletionInfo;
    })();

    login.Customer = (function() {

        function Customer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Customer.prototype.id = 0;
        Customer.prototype.weixinAccount = "";
        Customer.prototype.headurl = "";
        Customer.prototype.nickname = "";
        Customer.prototype.ext = "";
        Customer.prototype.qqAccount = "";

        Customer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.id != null && Object.hasOwnProperty.call(m, "id"))
                w.uint32(8).int32(m.id);
            if (m.weixinAccount != null && Object.hasOwnProperty.call(m, "weixinAccount"))
                w.uint32(18).string(m.weixinAccount);
            if (m.headurl != null && Object.hasOwnProperty.call(m, "headurl"))
                w.uint32(26).string(m.headurl);
            if (m.nickname != null && Object.hasOwnProperty.call(m, "nickname"))
                w.uint32(34).string(m.nickname);
            if (m.ext != null && Object.hasOwnProperty.call(m, "ext"))
                w.uint32(42).string(m.ext);
            if (m.qqAccount != null && Object.hasOwnProperty.call(m, "qqAccount"))
                w.uint32(50).string(m.qqAccount);
            return w;
        };

        Customer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.Customer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.id = r.int32();
                    break;
                case 2:
                    m.weixinAccount = r.string();
                    break;
                case 3:
                    m.headurl = r.string();
                    break;
                case 4:
                    m.nickname = r.string();
                    break;
                case 5:
                    m.ext = r.string();
                    break;
                case 6:
                    m.qqAccount = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Customer;
    })();

    login.SCCustomerInfoList = (function() {

        function SCCustomerInfoList(p) {
            this.customerList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCustomerInfoList.prototype.customerList = $util.emptyArray;

        SCCustomerInfoList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.customerList != null && m.customerList.length) {
                for (var i = 0; i < m.customerList.length; ++i)
                    $root.login.Customer.encode(m.customerList[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCCustomerInfoList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCCustomerInfoList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.customerList && m.customerList.length))
                        m.customerList = [];
                    m.customerList.push($root.login.Customer.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCustomerInfoList;
    })();

    login.CSCustomerInfoList = (function() {

        function CSCustomerInfoList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCustomerInfoList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSCustomerInfoList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSCustomerInfoList();
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

        return CSCustomerInfoList;
    })();

    login.CSLogout = (function() {

        function CSLogout(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSLogout.prototype.Type = 0;
        CSLogout.prototype.Sid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CSLogout.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(8).int32(m.Type);
            if (m.Sid != null && Object.hasOwnProperty.call(m, "Sid"))
                w.uint32(16).int64(m.Sid);
            return w;
        };

        CSLogout.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSLogout();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Type = r.int32();
                    break;
                case 2:
                    m.Sid = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSLogout;
    })();

    login.SCLogout = (function() {

        function SCLogout(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLogout.prototype.OpRetCode = 0;
        SCLogout.prototype.Type = 0;

        SCLogout.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(16).int32(m.Type);
            return w;
        };

        SCLogout.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCLogout();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLogout;
    })();

    login.CSCustomService = (function() {

        function CSCustomService(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCustomService.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSCustomService.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSCustomService();
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

        return CSCustomService;
    })();

    login.SCCustomService = (function() {

        function SCCustomService(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCustomService.prototype.Url = "";
        SCCustomService.prototype.OpenFlag = 0;
        SCCustomService.prototype.CustomType = 0;

        SCCustomService.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Url != null && Object.hasOwnProperty.call(m, "Url"))
                w.uint32(10).string(m.Url);
            if (m.OpenFlag != null && Object.hasOwnProperty.call(m, "OpenFlag"))
                w.uint32(16).int32(m.OpenFlag);
            if (m.CustomType != null && Object.hasOwnProperty.call(m, "CustomType"))
                w.uint32(24).int32(m.CustomType);
            return w;
        };

        SCCustomService.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCCustomService();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Url = r.string();
                    break;
                case 2:
                    m.OpenFlag = r.int32();
                    break;
                case 3:
                    m.CustomType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCustomService;
    })();

    login.SSDisconnectTypeCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "SSDTC_ZERO"] = 0;
        values[valuesById[1] = "SSDTC_Repeate"] = 1;
        values[valuesById[2] = "SSDTC_Freeze"] = 2;
        values[valuesById[3] = "SSDTC_ServerError"] = 3;
        values[valuesById[4] = "SSDTC_ServerMaintenance"] = 4;
        values[valuesById[5] = "SSDTC_ResVerLow"] = 5;
        values[valuesById[6] = "SSDTC_GameVerLow"] = 6;
        values[valuesById[7] = "SSDTC_BlackList"] = 7;
        return values;
    })();

    login.SSDisconnect = (function() {

        function SSDisconnect(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SSDisconnect.prototype.SessionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SSDisconnect.prototype.Type = 0;

        SSDisconnect.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SessionId != null && Object.hasOwnProperty.call(m, "SessionId"))
                w.uint32(8).int64(m.SessionId);
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(16).int32(m.Type);
            return w;
        };

        SSDisconnect.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SSDisconnect();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SessionId = r.int64();
                    break;
                case 2:
                    m.Type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SSDisconnect;
    })();

    login.CSPlatFormConfig = (function() {

        function CSPlatFormConfig(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPlatFormConfig.prototype.PlatformTag = "";

        CSPlatFormConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlatformTag != null && Object.hasOwnProperty.call(m, "PlatformTag"))
                w.uint32(10).string(m.PlatformTag);
            return w;
        };

        CSPlatFormConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSPlatFormConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PlatformTag = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPlatFormConfig;
    })();

    login.RebateCfg = (function() {

        function RebateCfg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RebateCfg.prototype.RebateSwitch = false;
        RebateCfg.prototype.ReceiveMode = 0;
        RebateCfg.prototype.NotGiveOverdue = 0;

        RebateCfg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RebateSwitch != null && Object.hasOwnProperty.call(m, "RebateSwitch"))
                w.uint32(8).bool(m.RebateSwitch);
            if (m.ReceiveMode != null && Object.hasOwnProperty.call(m, "ReceiveMode"))
                w.uint32(16).int32(m.ReceiveMode);
            if (m.NotGiveOverdue != null && Object.hasOwnProperty.call(m, "NotGiveOverdue"))
                w.uint32(24).int32(m.NotGiveOverdue);
            return w;
        };

        RebateCfg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.RebateCfg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RebateSwitch = r.bool();
                    break;
                case 2:
                    m.ReceiveMode = r.int32();
                    break;
                case 3:
                    m.NotGiveOverdue = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RebateCfg;
    })();

    login.ClubCfg = (function() {

        function ClubCfg(p) {
            this.GiveCoinRate = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ClubCfg.prototype.IsOpenClub = false;
        ClubCfg.prototype.CreationCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ClubCfg.prototype.IncreaseCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ClubCfg.prototype.ClubInitPlayerNum = 0;
        ClubCfg.prototype.IncreasePlayerNum = 0;
        ClubCfg.prototype.CreateClubCheckByManual = false;
        ClubCfg.prototype.EditClubNoticeByManual = false;
        ClubCfg.prototype.CreateRoomAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ClubCfg.prototype.GiveCoinRate = $util.emptyArray;

        ClubCfg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.IsOpenClub != null && Object.hasOwnProperty.call(m, "IsOpenClub"))
                w.uint32(8).bool(m.IsOpenClub);
            if (m.CreationCoin != null && Object.hasOwnProperty.call(m, "CreationCoin"))
                w.uint32(16).int64(m.CreationCoin);
            if (m.IncreaseCoin != null && Object.hasOwnProperty.call(m, "IncreaseCoin"))
                w.uint32(24).int64(m.IncreaseCoin);
            if (m.ClubInitPlayerNum != null && Object.hasOwnProperty.call(m, "ClubInitPlayerNum"))
                w.uint32(32).int32(m.ClubInitPlayerNum);
            if (m.IncreasePlayerNum != null && Object.hasOwnProperty.call(m, "IncreasePlayerNum"))
                w.uint32(40).int32(m.IncreasePlayerNum);
            if (m.CreateClubCheckByManual != null && Object.hasOwnProperty.call(m, "CreateClubCheckByManual"))
                w.uint32(48).bool(m.CreateClubCheckByManual);
            if (m.EditClubNoticeByManual != null && Object.hasOwnProperty.call(m, "EditClubNoticeByManual"))
                w.uint32(56).bool(m.EditClubNoticeByManual);
            if (m.CreateRoomAmount != null && Object.hasOwnProperty.call(m, "CreateRoomAmount"))
                w.uint32(64).int64(m.CreateRoomAmount);
            if (m.GiveCoinRate != null && m.GiveCoinRate.length) {
                w.uint32(74).fork();
                for (var i = 0; i < m.GiveCoinRate.length; ++i)
                    w.int64(m.GiveCoinRate[i]);
                w.ldelim();
            }
            return w;
        };

        ClubCfg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.ClubCfg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.IsOpenClub = r.bool();
                    break;
                case 2:
                    m.CreationCoin = r.int64();
                    break;
                case 3:
                    m.IncreaseCoin = r.int64();
                    break;
                case 4:
                    m.ClubInitPlayerNum = r.int32();
                    break;
                case 5:
                    m.IncreasePlayerNum = r.int32();
                    break;
                case 6:
                    m.CreateClubCheckByManual = r.bool();
                    break;
                case 7:
                    m.EditClubNoticeByManual = r.bool();
                    break;
                case 8:
                    m.CreateRoomAmount = r.int64();
                    break;
                case 9:
                    if (!(m.GiveCoinRate && m.GiveCoinRate.length))
                        m.GiveCoinRate = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.GiveCoinRate.push(r.int64());
                    } else
                        m.GiveCoinRate.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ClubCfg;
    })();

    login.SCPlatFormConfig = (function() {

        function SCPlatFormConfig(p) {
            this.VipRange = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlatFormConfig.prototype.Platform = "";
        SCPlatFormConfig.prototype.OpRetCode = 0;
        SCPlatFormConfig.prototype.UpgradeAccountGiveCoin = 0;
        SCPlatFormConfig.prototype.ExchangeMin = 0;
        SCPlatFormConfig.prototype.ExchangeLimit = 0;
        SCPlatFormConfig.prototype.ExchangeTax = 0;
        SCPlatFormConfig.prototype.VipRange = $util.emptyArray;
        SCPlatFormConfig.prototype.OtherParams = "";
        SCPlatFormConfig.prototype.ExchangeFlow = 0;
        SCPlatFormConfig.prototype.SpreadConfig = 0;
        SCPlatFormConfig.prototype.CustomService = "";
        SCPlatFormConfig.prototype.Rebate = null;
        SCPlatFormConfig.prototype.Club = null;
        SCPlatFormConfig.prototype.ExchangeBankMax = 0;
        SCPlatFormConfig.prototype.ExchangeAlipayMax = 0;
        SCPlatFormConfig.prototype.ExchangeMultiple = 0;

        SCPlatFormConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(10).string(m.Platform);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(16).int32(m.OpRetCode);
            if (m.UpgradeAccountGiveCoin != null && Object.hasOwnProperty.call(m, "UpgradeAccountGiveCoin"))
                w.uint32(24).int32(m.UpgradeAccountGiveCoin);
            if (m.ExchangeMin != null && Object.hasOwnProperty.call(m, "ExchangeMin"))
                w.uint32(32).int32(m.ExchangeMin);
            if (m.ExchangeLimit != null && Object.hasOwnProperty.call(m, "ExchangeLimit"))
                w.uint32(40).int32(m.ExchangeLimit);
            if (m.ExchangeTax != null && Object.hasOwnProperty.call(m, "ExchangeTax"))
                w.uint32(48).int32(m.ExchangeTax);
            if (m.VipRange != null && m.VipRange.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.VipRange.length; ++i)
                    w.int32(m.VipRange[i]);
                w.ldelim();
            }
            if (m.OtherParams != null && Object.hasOwnProperty.call(m, "OtherParams"))
                w.uint32(66).string(m.OtherParams);
            if (m.ExchangeFlow != null && Object.hasOwnProperty.call(m, "ExchangeFlow"))
                w.uint32(72).int32(m.ExchangeFlow);
            if (m.SpreadConfig != null && Object.hasOwnProperty.call(m, "SpreadConfig"))
                w.uint32(80).int32(m.SpreadConfig);
            if (m.CustomService != null && Object.hasOwnProperty.call(m, "CustomService"))
                w.uint32(90).string(m.CustomService);
            if (m.Rebate != null && Object.hasOwnProperty.call(m, "Rebate"))
                $root.login.RebateCfg.encode(m.Rebate, w.uint32(98).fork()).ldelim();
            if (m.Club != null && Object.hasOwnProperty.call(m, "Club"))
                $root.login.ClubCfg.encode(m.Club, w.uint32(106).fork()).ldelim();
            if (m.ExchangeBankMax != null && Object.hasOwnProperty.call(m, "ExchangeBankMax"))
                w.uint32(112).int32(m.ExchangeBankMax);
            if (m.ExchangeAlipayMax != null && Object.hasOwnProperty.call(m, "ExchangeAlipayMax"))
                w.uint32(120).int32(m.ExchangeAlipayMax);
            if (m.ExchangeMultiple != null && Object.hasOwnProperty.call(m, "ExchangeMultiple"))
                w.uint32(128).int32(m.ExchangeMultiple);
            return w;
        };

        SCPlatFormConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCPlatFormConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Platform = r.string();
                    break;
                case 2:
                    m.OpRetCode = r.int32();
                    break;
                case 3:
                    m.UpgradeAccountGiveCoin = r.int32();
                    break;
                case 4:
                    m.ExchangeMin = r.int32();
                    break;
                case 5:
                    m.ExchangeLimit = r.int32();
                    break;
                case 6:
                    m.ExchangeTax = r.int32();
                    break;
                case 7:
                    if (!(m.VipRange && m.VipRange.length))
                        m.VipRange = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.VipRange.push(r.int32());
                    } else
                        m.VipRange.push(r.int32());
                    break;
                case 8:
                    m.OtherParams = r.string();
                    break;
                case 9:
                    m.ExchangeFlow = r.int32();
                    break;
                case 10:
                    m.SpreadConfig = r.int32();
                    break;
                case 11:
                    m.CustomService = r.string();
                    break;
                case 12:
                    m.Rebate = $root.login.RebateCfg.decode(r, r.uint32());
                    break;
                case 13:
                    m.Club = $root.login.ClubCfg.decode(r, r.uint32());
                    break;
                case 14:
                    m.ExchangeBankMax = r.int32();
                    break;
                case 15:
                    m.ExchangeAlipayMax = r.int32();
                    break;
                case 16:
                    m.ExchangeMultiple = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlatFormConfig;
    })();

    login.SCActivityCheck = (function() {

        function SCActivityCheck(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCActivityCheck.prototype.OpRetCode = 0;

        SCActivityCheck.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCActivityCheck.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCActivityCheck();
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

        return SCActivityCheck;
    })();

    login.CSVerifyType = (function() {

        function CSVerifyType(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSVerifyType.prototype.PlatformTag = "";
        CSVerifyType.prototype.Tel = "";

        CSVerifyType.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlatformTag != null && Object.hasOwnProperty.call(m, "PlatformTag"))
                w.uint32(10).string(m.PlatformTag);
            if (m.Tel != null && Object.hasOwnProperty.call(m, "Tel"))
                w.uint32(18).string(m.Tel);
            return w;
        };

        CSVerifyType.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSVerifyType();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PlatformTag = r.string();
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

        return CSVerifyType;
    })();

    login.SCVerifyType = (function() {

        function SCVerifyType(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCVerifyType.prototype.OpRetCode = 0;
        SCVerifyType.prototype.VerifyType = 0;

        SCVerifyType.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.VerifyType != null && Object.hasOwnProperty.call(m, "VerifyType"))
                w.uint32(16).int32(m.VerifyType);
            return w;
        };

        SCVerifyType.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCVerifyType();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.VerifyType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCVerifyType;
    })();

    login.CSRegisterVerifyType = (function() {

        function CSRegisterVerifyType(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSRegisterVerifyType.prototype.PlatformTag = "";

        CSRegisterVerifyType.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlatformTag != null && Object.hasOwnProperty.call(m, "PlatformTag"))
                w.uint32(10).string(m.PlatformTag);
            return w;
        };

        CSRegisterVerifyType.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSRegisterVerifyType();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PlatformTag = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSRegisterVerifyType;
    })();

    login.SCRegisterVerifyType = (function() {

        function SCRegisterVerifyType(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRegisterVerifyType.prototype.OpRetCode = 0;
        SCRegisterVerifyType.prototype.VerifyType = 0;

        SCRegisterVerifyType.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.VerifyType != null && Object.hasOwnProperty.call(m, "VerifyType"))
                w.uint32(16).int32(m.VerifyType);
            return w;
        };

        SCRegisterVerifyType.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCRegisterVerifyType();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.VerifyType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRegisterVerifyType;
    })();

    login.SCSyncGameFree = (function() {

        function SCSyncGameFree(p) {
            this.Data = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSyncGameFree.prototype.Data = $util.emptyArray;

        SCSyncGameFree.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Data != null && m.Data.length) {
                for (var i = 0; i < m.Data.length; ++i)
                    $root.login.GameConfig.encode(m.Data[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCSyncGameFree.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCSyncGameFree();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Data && m.Data.length))
                        m.Data = [];
                    m.Data.push($root.login.GameConfig.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCSyncGameFree;
    })();

    login.SCActSwitchCfg = (function() {

        function SCActSwitchCfg(p) {
            this.ActSwitchCfg = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCActSwitchCfg.prototype.ActSwitchCfg = $util.emptyArray;

        SCActSwitchCfg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ActSwitchCfg != null && m.ActSwitchCfg.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.ActSwitchCfg.length; ++i)
                    w.int32(m.ActSwitchCfg[i]);
                w.ldelim();
            }
            return w;
        };

        SCActSwitchCfg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCActSwitchCfg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.ActSwitchCfg && m.ActSwitchCfg.length))
                        m.ActSwitchCfg = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ActSwitchCfg.push(r.int32());
                    } else
                        m.ActSwitchCfg.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCActSwitchCfg;
    })();

    login.CSGetThrGameCfg = (function() {

        function CSGetThrGameCfg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetThrGameCfg.prototype.Platform = "";
        CSGetThrGameCfg.prototype.Channel = "";

        CSGetThrGameCfg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(10).string(m.Platform);
            if (m.Channel != null && Object.hasOwnProperty.call(m, "Channel"))
                w.uint32(18).string(m.Channel);
            return w;
        };

        CSGetThrGameCfg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSGetThrGameCfg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Platform = r.string();
                    break;
                case 2:
                    m.Channel = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetThrGameCfg;
    })();

    login.SCGetThrGameCfg = (function() {

        function SCGetThrGameCfg(p) {
            this.ThrGameCfg = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetThrGameCfg.prototype.ThrGameCfg = $util.emptyArray;

        SCGetThrGameCfg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ThrGameCfg != null && m.ThrGameCfg.length) {
                for (var i = 0; i < m.ThrGameCfg.length; ++i)
                    $root.login.LoginThrGameConfig.encode(m.ThrGameCfg[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCGetThrGameCfg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.SCGetThrGameCfg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.ThrGameCfg && m.ThrGameCfg.length))
                        m.ThrGameCfg = [];
                    m.ThrGameCfg.push($root.login.LoginThrGameConfig.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetThrGameCfg;
    })();

    login.CSAccountInvalid = (function() {

        function CSAccountInvalid(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSAccountInvalid.prototype.Acc = "";

        CSAccountInvalid.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Acc != null && Object.hasOwnProperty.call(m, "Acc"))
                w.uint32(10).string(m.Acc);
            return w;
        };

        CSAccountInvalid.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.login.CSAccountInvalid();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Acc = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSAccountInvalid;
    })();

    return login;
})();

module.exports = $root;
