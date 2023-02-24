/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.fishing = (function() {

    var fishing = {};

    fishing.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[1056] = "OPRC_CoinNotEnough"] = 1056;
        return values;
    })();

    fishing.FIPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "FISHING_ZERO"] = 0;
        values[valuesById[5000] = "FISHING_SC_ROOMINFO"] = 5000;
        values[valuesById[5001] = "FISHING_CS_OP"] = 5001;
        values[valuesById[5002] = "FISHING_SC_OP"] = 5002;
        values[valuesById[5003] = "FISHING_SC_ROOMSTATE"] = 5003;
        values[valuesById[5004] = "FISHING_SC_SEATS"] = 5004;
        values[valuesById[5006] = "FISHING_SC_SYNCFISH"] = 5006;
        values[valuesById[5007] = "FISHING_SC_FISHERENTER"] = 5007;
        values[valuesById[5008] = "FISHING_CS_LOADCOMPLETE"] = 5008;
        values[valuesById[5009] = "FISHING_SC_FIRE"] = 5009;
        values[valuesById[5010] = "FISHING_SC_FIREHIT"] = 5010;
        values[valuesById[5011] = "FISHING_SC_FIREPOWER"] = 5011;
        values[valuesById[5012] = "FISHING_CS_FREEZE"] = 5012;
        values[valuesById[5013] = "FISHING_SC_FREEZE"] = 5013;
        values[valuesById[5014] = "FISHING_CS_FISHVIEW"] = 5014;
        values[valuesById[5015] = "FISHING_SC_FISHVIEW"] = 5015;
        values[valuesById[5016] = "FISHING_CS_FISHTARGET"] = 5016;
        values[valuesById[5017] = "FISHING_SC_FISHTARGET"] = 5017;
        values[valuesById[5018] = "FISHING_SC_SELVIP"] = 5018;
        values[valuesById[5019] = "FISHING_SC_ENTER"] = 5019;
        values[valuesById[5020] = "FISHING_SC_LEAVE"] = 5020;
        values[valuesById[5022] = "FISHING_SC_FISHDEL"] = 5022;
        values[valuesById[5023] = "FISHING_SC_JACKPOTFISHDEL"] = 5023;
        values[valuesById[5024] = "FISHING_CS_LOOKLOCKFISH"] = 5024;
        values[valuesById[5025] = "FISHING_SC_LOOKLOCKFISH"] = 5025;
        values[valuesById[5026] = "FISHING_SC_PRANACHANGE"] = 5026;
        values[valuesById[5027] = "FISHING_CS_REALYPRANA"] = 5027;
        values[valuesById[5028] = "FISHING_SC_REALYPRANA"] = 5028;
        values[valuesById[5029] = "FISHING_CS_FIREPRANA"] = 5029;
        values[valuesById[5030] = "FISHING_SC_FIREPRANA"] = 5030;
        values[valuesById[5031] = "FISHING_SC_JACKPOTPOOLCHANGE"] = 5031;
        values[valuesById[5032] = "FISHING_SC_JACKPOTCOIN"] = 5032;
        values[valuesById[5033] = "FISHING_SC_RETPRANACOIN"] = 5033;
        values[valuesById[5034] = "FISHING_SC_REBINDAGENT"] = 5034;
        values[valuesById[5035] = "FISHING_SC_FIREMISS"] = 5035;
        values[valuesById[5036] = "FISHING_SC_SCROBOTBEHAVIOR"] = 5036;
        values[valuesById[5037] = "FISHING_SC_SCSYNCFISHCOIN"] = 5037;
        values[valuesById[5038] = "FISHING_SC_NEWSYNCFISH"] = 5038;
        values[valuesById[5039] = "FISHING_SC_TREASURECHESTEVENT"] = 5039;
        values[valuesById[5040] = "FISHING_SC_SYNCFISHHP"] = 5040;
        values[valuesById[5041] = "FISHING_SC_POWERSTATE"] = 5041;
        return values;
    })();

    fishing.FishingPlayerData = (function() {

        function FishingPlayerData(p) {
            this.RobotSnIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FishingPlayerData.prototype.Name = "";
        FishingPlayerData.prototype.SnId = 0;
        FishingPlayerData.prototype.Head = 0;
        FishingPlayerData.prototype.Sex = 0;
        FishingPlayerData.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        FishingPlayerData.prototype.Pos = 0;
        FishingPlayerData.prototype.Flag = 0;
        FishingPlayerData.prototype.Params = "";
        FishingPlayerData.prototype.City = "";
        FishingPlayerData.prototype.HeadOutLine = 0;
        FishingPlayerData.prototype.VIP = 0;
        FishingPlayerData.prototype.SelVip = 0;
        FishingPlayerData.prototype.Power = 0;
        FishingPlayerData.prototype.IsRobot = false;
        FishingPlayerData.prototype.AgentParam = 0;
        FishingPlayerData.prototype.TargetSel = 0;
        FishingPlayerData.prototype.AutoFishing = 0;
        FishingPlayerData.prototype.FireRate = 0;
        FishingPlayerData.prototype.PranaPercent = 0;
        FishingPlayerData.prototype.NiceId = 0;
        FishingPlayerData.prototype.RobotSnIds = $util.emptyArray;

        FishingPlayerData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(10).string(m.Name);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(16).int32(m.SnId);
            if (m.Head != null && Object.hasOwnProperty.call(m, "Head"))
                w.uint32(24).int32(m.Head);
            if (m.Sex != null && Object.hasOwnProperty.call(m, "Sex"))
                w.uint32(32).int32(m.Sex);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(40).int64(m.Coin);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(48).int32(m.Pos);
            if (m.Flag != null && Object.hasOwnProperty.call(m, "Flag"))
                w.uint32(56).int32(m.Flag);
            if (m.Params != null && Object.hasOwnProperty.call(m, "Params"))
                w.uint32(66).string(m.Params);
            if (m.City != null && Object.hasOwnProperty.call(m, "City"))
                w.uint32(74).string(m.City);
            if (m.HeadOutLine != null && Object.hasOwnProperty.call(m, "HeadOutLine"))
                w.uint32(80).int32(m.HeadOutLine);
            if (m.VIP != null && Object.hasOwnProperty.call(m, "VIP"))
                w.uint32(88).int32(m.VIP);
            if (m.SelVip != null && Object.hasOwnProperty.call(m, "SelVip"))
                w.uint32(96).int32(m.SelVip);
            if (m.Power != null && Object.hasOwnProperty.call(m, "Power"))
                w.uint32(104).int32(m.Power);
            if (m.IsRobot != null && Object.hasOwnProperty.call(m, "IsRobot"))
                w.uint32(112).bool(m.IsRobot);
            if (m.AgentParam != null && Object.hasOwnProperty.call(m, "AgentParam"))
                w.uint32(120).int32(m.AgentParam);
            if (m.TargetSel != null && Object.hasOwnProperty.call(m, "TargetSel"))
                w.uint32(128).int32(m.TargetSel);
            if (m.AutoFishing != null && Object.hasOwnProperty.call(m, "AutoFishing"))
                w.uint32(136).int32(m.AutoFishing);
            if (m.FireRate != null && Object.hasOwnProperty.call(m, "FireRate"))
                w.uint32(144).int32(m.FireRate);
            if (m.PranaPercent != null && Object.hasOwnProperty.call(m, "PranaPercent"))
                w.uint32(152).int32(m.PranaPercent);
            if (m.NiceId != null && Object.hasOwnProperty.call(m, "NiceId"))
                w.uint32(160).int32(m.NiceId);
            if (m.RobotSnIds != null && m.RobotSnIds.length) {
                w.uint32(170).fork();
                for (var i = 0; i < m.RobotSnIds.length; ++i)
                    w.int32(m.RobotSnIds[i]);
                w.ldelim();
            }
            return w;
        };

        FishingPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.FishingPlayerData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Name = r.string();
                    break;
                case 2:
                    m.SnId = r.int32();
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
                    m.Pos = r.int32();
                    break;
                case 7:
                    m.Flag = r.int32();
                    break;
                case 8:
                    m.Params = r.string();
                    break;
                case 9:
                    m.City = r.string();
                    break;
                case 10:
                    m.HeadOutLine = r.int32();
                    break;
                case 11:
                    m.VIP = r.int32();
                    break;
                case 12:
                    m.SelVip = r.int32();
                    break;
                case 13:
                    m.Power = r.int32();
                    break;
                case 14:
                    m.IsRobot = r.bool();
                    break;
                case 15:
                    m.AgentParam = r.int32();
                    break;
                case 16:
                    m.TargetSel = r.int32();
                    break;
                case 17:
                    m.AutoFishing = r.int32();
                    break;
                case 18:
                    m.FireRate = r.int32();
                    break;
                case 19:
                    m.PranaPercent = r.int32();
                    break;
                case 20:
                    m.NiceId = r.int32();
                    break;
                case 21:
                    if (!(m.RobotSnIds && m.RobotSnIds.length))
                        m.RobotSnIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.RobotSnIds.push(r.int32());
                    } else
                        m.RobotSnIds.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FishingPlayerData;
    })();

    fishing.SCFishingRoomInfo = (function() {

        function SCFishingRoomInfo(p) {
            this.Params = [];
            this.Cards = [];
            this.MatchParams = [];
            this.Players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFishingRoomInfo.prototype.RoomId = 0;
        SCFishingRoomInfo.prototype.Creator = 0;
        SCFishingRoomInfo.prototype.GameId = 0;
        SCFishingRoomInfo.prototype.RoomMode = 0;
        SCFishingRoomInfo.prototype.Params = $util.emptyArray;
        SCFishingRoomInfo.prototype.NumOfGames = 0;
        SCFishingRoomInfo.prototype.Cards = $util.emptyArray;
        SCFishingRoomInfo.prototype.State = 0;
        SCFishingRoomInfo.prototype.TimeOut = 0;
        SCFishingRoomInfo.prototype.DisbandGen = 0;
        SCFishingRoomInfo.prototype.AgentId = 0;
        SCFishingRoomInfo.prototype.MatchParams = $util.emptyArray;
        SCFishingRoomInfo.prototype.SceneType = 0;
        SCFishingRoomInfo.prototype.Players = $util.emptyArray;
        SCFishingRoomInfo.prototype.GameFreeId = 0;
        SCFishingRoomInfo.prototype.FrozenTick = 0;
        SCFishingRoomInfo.prototype.JackpotPool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCFishingRoomInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.Creator != null && Object.hasOwnProperty.call(m, "Creator"))
                w.uint32(16).int32(m.Creator);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(24).int32(m.GameId);
            if (m.RoomMode != null && Object.hasOwnProperty.call(m, "RoomMode"))
                w.uint32(32).int32(m.RoomMode);
            if (m.Params != null && m.Params.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            if (m.NumOfGames != null && Object.hasOwnProperty.call(m, "NumOfGames"))
                w.uint32(48).int32(m.NumOfGames);
            if (m.Cards != null && m.Cards.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(64).int32(m.State);
            if (m.TimeOut != null && Object.hasOwnProperty.call(m, "TimeOut"))
                w.uint32(72).int32(m.TimeOut);
            if (m.DisbandGen != null && Object.hasOwnProperty.call(m, "DisbandGen"))
                w.uint32(80).int32(m.DisbandGen);
            if (m.AgentId != null && Object.hasOwnProperty.call(m, "AgentId"))
                w.uint32(88).int32(m.AgentId);
            if (m.MatchParams != null && m.MatchParams.length) {
                w.uint32(98).fork();
                for (var i = 0; i < m.MatchParams.length; ++i)
                    w.int32(m.MatchParams[i]);
                w.ldelim();
            }
            if (m.SceneType != null && Object.hasOwnProperty.call(m, "SceneType"))
                w.uint32(104).int32(m.SceneType);
            if (m.Players != null && m.Players.length) {
                for (var i = 0; i < m.Players.length; ++i)
                    $root.fishing.FishingPlayerData.encode(m.Players[i], w.uint32(114).fork()).ldelim();
            }
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(120).int32(m.GameFreeId);
            if (m.FrozenTick != null && Object.hasOwnProperty.call(m, "FrozenTick"))
                w.uint32(128).int32(m.FrozenTick);
            if (m.JackpotPool != null && Object.hasOwnProperty.call(m, "JackpotPool"))
                w.uint32(136).int64(m.JackpotPool);
            return w;
        };

        SCFishingRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFishingRoomInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.Creator = r.int32();
                    break;
                case 3:
                    m.GameId = r.int32();
                    break;
                case 4:
                    m.RoomMode = r.int32();
                    break;
                case 5:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                case 6:
                    m.NumOfGames = r.int32();
                    break;
                case 7:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                case 8:
                    m.State = r.int32();
                    break;
                case 9:
                    m.TimeOut = r.int32();
                    break;
                case 10:
                    m.DisbandGen = r.int32();
                    break;
                case 11:
                    m.AgentId = r.int32();
                    break;
                case 12:
                    if (!(m.MatchParams && m.MatchParams.length))
                        m.MatchParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MatchParams.push(r.int32());
                    } else
                        m.MatchParams.push(r.int32());
                    break;
                case 13:
                    m.SceneType = r.int32();
                    break;
                case 14:
                    if (!(m.Players && m.Players.length))
                        m.Players = [];
                    m.Players.push($root.fishing.FishingPlayerData.decode(r, r.uint32()));
                    break;
                case 15:
                    m.GameFreeId = r.int32();
                    break;
                case 16:
                    m.FrozenTick = r.int32();
                    break;
                case 17:
                    m.JackpotPool = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFishingRoomInfo;
    })();

    fishing.CSFishingOp = (function() {

        function CSFishingOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSFishingOp.prototype.OpCode = 0;
        CSFishingOp.prototype.Params = $util.emptyArray;

        CSFishingOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.Params != null && m.Params.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int64(m.Params[i]);
                w.ldelim();
            }
            return w;
        };

        CSFishingOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.CSFishingOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int64());
                    } else
                        m.Params.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSFishingOp;
    })();

    fishing.SCFishingOp = (function() {

        function SCFishingOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFishingOp.prototype.OpCode = 0;
        SCFishingOp.prototype.Params = $util.emptyArray;
        SCFishingOp.prototype.OpRetCode = 0;
        SCFishingOp.prototype.SnId = 0;

        SCFishingOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.Params != null && m.Params.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int64(m.Params[i]);
                w.ldelim();
            }
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(24).int32(m.OpRetCode);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(32).int32(m.SnId);
            return w;
        };

        SCFishingOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFishingOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int64());
                    } else
                        m.Params.push(r.int64());
                    break;
                case 3:
                    m.OpRetCode = r.int32();
                    break;
                case 4:
                    m.SnId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFishingOp;
    })();

    fishing.SCFire = (function() {

        function SCFire(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFire.prototype.Snid = 0;
        SCFire.prototype.X = 0;
        SCFire.prototype.Y = 0;
        SCFire.prototype.Bulletid = 0;
        SCFire.prototype.Power = 0;
        SCFire.prototype.CurrentPlayerCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCFire.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.X != null && Object.hasOwnProperty.call(m, "X"))
                w.uint32(16).int32(m.X);
            if (m.Y != null && Object.hasOwnProperty.call(m, "Y"))
                w.uint32(24).int32(m.Y);
            if (m.Bulletid != null && Object.hasOwnProperty.call(m, "Bulletid"))
                w.uint32(32).int32(m.Bulletid);
            if (m.Power != null && Object.hasOwnProperty.call(m, "Power"))
                w.uint32(40).int32(m.Power);
            if (m.CurrentPlayerCoin != null && Object.hasOwnProperty.call(m, "CurrentPlayerCoin"))
                w.uint32(48).int64(m.CurrentPlayerCoin);
            return w;
        };

        SCFire.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFire();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    m.X = r.int32();
                    break;
                case 3:
                    m.Y = r.int32();
                    break;
                case 4:
                    m.Bulletid = r.int32();
                    break;
                case 5:
                    m.Power = r.int32();
                    break;
                case 6:
                    m.CurrentPlayerCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFire;
    })();

    fishing.SCFireHit = (function() {

        function SCFireHit(p) {
            this.FishId = [];
            this.Coin = [];
            this.Item = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFireHit.prototype.Snid = 0;
        SCFireHit.prototype.FishId = $util.emptyArray;
        SCFireHit.prototype.Coin = $util.emptyArray;
        SCFireHit.prototype.Item = $util.emptyArray;
        SCFireHit.prototype.Money = 0;
        SCFireHit.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFireHit.prototype.Event = 0;
        SCFireHit.prototype.EventFish = 0;
        SCFireHit.prototype.CurrentPlayerCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFireHit.prototype.EventCoin = 0;
        SCFireHit.prototype.Power = 0;

        SCFireHit.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.FishId != null && m.FishId.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.FishId.length; ++i)
                    w.int32(m.FishId[i]);
                w.ldelim();
            }
            if (m.Coin != null && m.Coin.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Coin.length; ++i)
                    w.int32(m.Coin[i]);
                w.ldelim();
            }
            if (m.Item != null && m.Item.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Item.length; ++i)
                    w.int32(m.Item[i]);
                w.ldelim();
            }
            if (m.Money != null && Object.hasOwnProperty.call(m, "Money"))
                w.uint32(40).int32(m.Money);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(48).int64(m.Ts);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.EventFish != null && Object.hasOwnProperty.call(m, "EventFish"))
                w.uint32(64).int32(m.EventFish);
            if (m.CurrentPlayerCoin != null && Object.hasOwnProperty.call(m, "CurrentPlayerCoin"))
                w.uint32(72).int64(m.CurrentPlayerCoin);
            if (m.EventCoin != null && Object.hasOwnProperty.call(m, "EventCoin"))
                w.uint32(80).int32(m.EventCoin);
            if (m.Power != null && Object.hasOwnProperty.call(m, "Power"))
                w.uint32(88).int32(m.Power);
            return w;
        };

        SCFireHit.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFireHit();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    if (!(m.FishId && m.FishId.length))
                        m.FishId = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.FishId.push(r.int32());
                    } else
                        m.FishId.push(r.int32());
                    break;
                case 3:
                    if (!(m.Coin && m.Coin.length))
                        m.Coin = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Coin.push(r.int32());
                    } else
                        m.Coin.push(r.int32());
                    break;
                case 4:
                    if (!(m.Item && m.Item.length))
                        m.Item = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Item.push(r.int32());
                    } else
                        m.Item.push(r.int32());
                    break;
                case 5:
                    m.Money = r.int32();
                    break;
                case 6:
                    m.Ts = r.int64();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.EventFish = r.int32();
                    break;
                case 9:
                    m.CurrentPlayerCoin = r.int64();
                    break;
                case 10:
                    m.EventCoin = r.int32();
                    break;
                case 11:
                    m.Power = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFireHit;
    })();

    fishing.SCTreasureChestEvent = (function() {

        function SCTreasureChestEvent(p) {
            this.Reward = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTreasureChestEvent.prototype.Snid = 0;
        SCTreasureChestEvent.prototype.Reward = $util.emptyArray;
        SCTreasureChestEvent.prototype.CurrentPlayerCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCTreasureChestEvent.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.Reward != null && m.Reward.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.Reward.length; ++i)
                    w.int32(m.Reward[i]);
                w.ldelim();
            }
            if (m.CurrentPlayerCoin != null && Object.hasOwnProperty.call(m, "CurrentPlayerCoin"))
                w.uint32(24).int64(m.CurrentPlayerCoin);
            return w;
        };

        SCTreasureChestEvent.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCTreasureChestEvent();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    if (!(m.Reward && m.Reward.length))
                        m.Reward = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Reward.push(r.int32());
                    } else
                        m.Reward.push(r.int32());
                    break;
                case 3:
                    m.CurrentPlayerCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTreasureChestEvent;
    })();

    fishing.SCFireMiss = (function() {

        function SCFireMiss(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFireMiss.prototype.FishId = 0;
        SCFireMiss.prototype.Rate = 0;

        SCFireMiss.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(8).int32(m.FishId);
            if (m.Rate != null && Object.hasOwnProperty.call(m, "Rate"))
                w.uint32(16).int32(m.Rate);
            return w;
        };

        SCFireMiss.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFireMiss();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.FishId = r.int32();
                    break;
                case 2:
                    m.Rate = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFireMiss;
    })();

    fishing.SCFirePower = (function() {

        function SCFirePower(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFirePower.prototype.Snid = 0;
        SCFirePower.prototype.Power = 0;
        SCFirePower.prototype.RobitFire = false;
        SCFirePower.prototype.TargetPower = 0;

        SCFirePower.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.Power != null && Object.hasOwnProperty.call(m, "Power"))
                w.uint32(16).int32(m.Power);
            if (m.RobitFire != null && Object.hasOwnProperty.call(m, "RobitFire"))
                w.uint32(24).bool(m.RobitFire);
            if (m.TargetPower != null && Object.hasOwnProperty.call(m, "TargetPower"))
                w.uint32(32).int32(m.TargetPower);
            return w;
        };

        SCFirePower.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFirePower();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    m.Power = r.int32();
                    break;
                case 3:
                    m.RobitFire = r.bool();
                    break;
                case 4:
                    m.TargetPower = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFirePower;
    })();

    fishing.SCSelVip = (function() {

        function SCSelVip(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSelVip.prototype.Snid = 0;
        SCSelVip.prototype.Vip = 0;

        SCSelVip.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.Vip != null && Object.hasOwnProperty.call(m, "Vip"))
                w.uint32(16).int32(m.Vip);
            return w;
        };

        SCSelVip.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCSelVip();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    m.Vip = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCSelVip;
    })();

    fishing.SCFishingRoomState = (function() {

        function SCFishingRoomState(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFishingRoomState.prototype.State = 0;
        SCFishingRoomState.prototype.SubState = 0;
        SCFishingRoomState.prototype.Params = $util.emptyArray;

        SCFishingRoomState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(8).int32(m.State);
            if (m.SubState != null && Object.hasOwnProperty.call(m, "SubState"))
                w.uint32(16).int32(m.SubState);
            if (m.Params != null && m.Params.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            return w;
        };

        SCFishingRoomState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFishingRoomState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.State = r.int32();
                    break;
                case 2:
                    m.SubState = r.int32();
                    break;
                case 3:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFishingRoomState;
    })();

    fishing.SCFishingSeats = (function() {

        function SCFishingSeats(p) {
            this.Data = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFishingSeats.prototype.Data = $util.emptyArray;

        SCFishingSeats.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Data != null && m.Data.length) {
                for (var i = 0; i < m.Data.length; ++i)
                    $root.fishing.FishingPlayerData.encode(m.Data[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCFishingSeats.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFishingSeats();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Data && m.Data.length))
                        m.Data = [];
                    m.Data.push($root.fishing.FishingPlayerData.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFishingSeats;
    })();

    fishing.SCfishingEnter = (function() {

        function SCfishingEnter(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCfishingEnter.prototype.Data = null;

        SCfishingEnter.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
                $root.fishing.FishingPlayerData.encode(m.Data, w.uint32(10).fork()).ldelim();
            return w;
        };

        SCfishingEnter.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCfishingEnter();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Data = $root.fishing.FishingPlayerData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCfishingEnter;
    })();

    fishing.SCfishingLeave = (function() {

        function SCfishingLeave(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCfishingLeave.prototype.SnId = 0;

        SCfishingLeave.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            return w;
        };

        SCfishingLeave.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCfishingLeave();
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

        return SCfishingLeave;
    })();

    fishing.SCSyncRefreshFish = (function() {

        function SCSyncRefreshFish(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSyncRefreshFish.prototype.PolicyId = 0;
        SCSyncRefreshFish.prototype.TimePoint = 0;
        SCSyncRefreshFish.prototype.RandomSeed = 0;

        SCSyncRefreshFish.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PolicyId != null && Object.hasOwnProperty.call(m, "PolicyId"))
                w.uint32(8).int32(m.PolicyId);
            if (m.TimePoint != null && Object.hasOwnProperty.call(m, "TimePoint"))
                w.uint32(16).int32(m.TimePoint);
            if (m.RandomSeed != null && Object.hasOwnProperty.call(m, "RandomSeed"))
                w.uint32(24).int32(m.RandomSeed);
            return w;
        };

        SCSyncRefreshFish.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCSyncRefreshFish();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PolicyId = r.int32();
                    break;
                case 2:
                    m.TimePoint = r.int32();
                    break;
                case 3:
                    m.RandomSeed = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCSyncRefreshFish;
    })();

    fishing.SyncRefreshFishInfo = (function() {

        function SyncRefreshFishInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SyncRefreshFishInfo.prototype.TemplateId = 0;
        SyncRefreshFishInfo.prototype.Num = 0;

        SyncRefreshFishInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TemplateId != null && Object.hasOwnProperty.call(m, "TemplateId"))
                w.uint32(8).int32(m.TemplateId);
            if (m.Num != null && Object.hasOwnProperty.call(m, "Num"))
                w.uint32(16).int32(m.Num);
            return w;
        };

        SyncRefreshFishInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SyncRefreshFishInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TemplateId = r.int32();
                    break;
                case 2:
                    m.Num = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SyncRefreshFishInfo;
    })();

    fishing.SCNewSyncRefreshFish = (function() {

        function SCNewSyncRefreshFish(p) {
            this.info = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCNewSyncRefreshFish.prototype.PolicyId = 0;
        SCNewSyncRefreshFish.prototype.info = $util.emptyArray;
        SCNewSyncRefreshFish.prototype.LatestID = 0;
        SCNewSyncRefreshFish.prototype.RandomSeed = 0;

        SCNewSyncRefreshFish.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PolicyId != null && Object.hasOwnProperty.call(m, "PolicyId"))
                w.uint32(8).int32(m.PolicyId);
            if (m.info != null && m.info.length) {
                for (var i = 0; i < m.info.length; ++i)
                    $root.fishing.SyncRefreshFishInfo.encode(m.info[i], w.uint32(18).fork()).ldelim();
            }
            if (m.LatestID != null && Object.hasOwnProperty.call(m, "LatestID"))
                w.uint32(24).int32(m.LatestID);
            if (m.RandomSeed != null && Object.hasOwnProperty.call(m, "RandomSeed"))
                w.uint32(32).int32(m.RandomSeed);
            return w;
        };

        SCNewSyncRefreshFish.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCNewSyncRefreshFish();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PolicyId = r.int32();
                    break;
                case 2:
                    if (!(m.info && m.info.length))
                        m.info = [];
                    m.info.push($root.fishing.SyncRefreshFishInfo.decode(r, r.uint32()));
                    break;
                case 3:
                    m.LatestID = r.int32();
                    break;
                case 4:
                    m.RandomSeed = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCNewSyncRefreshFish;
    })();

    fishing.FishInfo = (function() {

        function FishInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FishInfo.prototype.FishID = 0;
        FishInfo.prototype.Path = 0;
        FishInfo.prototype.PolicyId = 0;
        FishInfo.prototype.BirthTime = 0;
        FishInfo.prototype.HpRatio = 0;

        FishInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FishID != null && Object.hasOwnProperty.call(m, "FishID"))
                w.uint32(8).int32(m.FishID);
            if (m.Path != null && Object.hasOwnProperty.call(m, "Path"))
                w.uint32(16).int32(m.Path);
            if (m.PolicyId != null && Object.hasOwnProperty.call(m, "PolicyId"))
                w.uint32(24).int32(m.PolicyId);
            if (m.BirthTime != null && Object.hasOwnProperty.call(m, "BirthTime"))
                w.uint32(32).int32(m.BirthTime);
            if (m.HpRatio != null && Object.hasOwnProperty.call(m, "HpRatio"))
                w.uint32(40).int32(m.HpRatio);
            return w;
        };

        FishInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.FishInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.FishID = r.int32();
                    break;
                case 2:
                    m.Path = r.int32();
                    break;
                case 3:
                    m.PolicyId = r.int32();
                    break;
                case 4:
                    m.BirthTime = r.int32();
                    break;
                case 5:
                    m.HpRatio = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FishInfo;
    })();

    fishing.CSLoadComplete = (function() {

        function CSLoadComplete(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSLoadComplete.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSLoadComplete.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.CSLoadComplete();
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

        return CSLoadComplete;
    })();

    fishing.SCFishesEnter = (function() {

        function SCFishesEnter(p) {
            this.Fishes = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFishesEnter.prototype.PolicyId = 0;
        SCFishesEnter.prototype.Fishes = $util.emptyArray;
        SCFishesEnter.prototype.IceSec = 0;
        SCFishesEnter.prototype.TimeTick = 0;

        SCFishesEnter.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PolicyId != null && Object.hasOwnProperty.call(m, "PolicyId"))
                w.uint32(8).int32(m.PolicyId);
            if (m.Fishes != null && m.Fishes.length) {
                for (var i = 0; i < m.Fishes.length; ++i)
                    $root.fishing.FishInfo.encode(m.Fishes[i], w.uint32(18).fork()).ldelim();
            }
            if (m.IceSec != null && Object.hasOwnProperty.call(m, "IceSec"))
                w.uint32(24).int32(m.IceSec);
            if (m.TimeTick != null && Object.hasOwnProperty.call(m, "TimeTick"))
                w.uint32(32).int32(m.TimeTick);
            return w;
        };

        SCFishesEnter.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFishesEnter();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PolicyId = r.int32();
                    break;
                case 2:
                    if (!(m.Fishes && m.Fishes.length))
                        m.Fishes = [];
                    m.Fishes.push($root.fishing.FishInfo.decode(r, r.uint32()));
                    break;
                case 3:
                    m.IceSec = r.int32();
                    break;
                case 4:
                    m.TimeTick = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFishesEnter;
    })();

    fishing.CSFreeze = (function() {

        function CSFreeze(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSFreeze.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSFreeze.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.CSFreeze();
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

        return CSFreeze;
    })();

    fishing.SCFreeze = (function() {

        function SCFreeze(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFreeze.prototype.SnId = 0;
        SCFreeze.prototype.FishId = 0;

        SCFreeze.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(16).int32(m.FishId);
            return w;
        };

        SCFreeze.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFreeze();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.FishId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFreeze;
    })();

    fishing.CSFishView = (function() {

        function CSFishView(p) {
            this.Fishs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSFishView.prototype.Fishs = $util.emptyArray;
        CSFishView.prototype.Sign = "";
        CSFishView.prototype.EventFish = 0;
        CSFishView.prototype.SnId = 0;

        CSFishView.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Fishs != null && m.Fishs.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.Fishs.length; ++i)
                    w.int32(m.Fishs[i]);
                w.ldelim();
            }
            if (m.Sign != null && Object.hasOwnProperty.call(m, "Sign"))
                w.uint32(18).string(m.Sign);
            if (m.EventFish != null && Object.hasOwnProperty.call(m, "EventFish"))
                w.uint32(24).int32(m.EventFish);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(32).int32(m.SnId);
            return w;
        };

        CSFishView.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.CSFishView();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Fishs && m.Fishs.length))
                        m.Fishs = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Fishs.push(r.int32());
                    } else
                        m.Fishs.push(r.int32());
                    break;
                case 2:
                    m.Sign = r.string();
                    break;
                case 3:
                    m.EventFish = r.int32();
                    break;
                case 4:
                    m.SnId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSFishView;
    })();

    fishing.SCFishView = (function() {

        function SCFishView(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFishView.prototype.FishID = 0;
        SCFishView.prototype.Sign = 0;

        SCFishView.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FishID != null && Object.hasOwnProperty.call(m, "FishID"))
                w.uint32(8).int32(m.FishID);
            if (m.Sign != null && Object.hasOwnProperty.call(m, "Sign"))
                w.uint32(16).int32(m.Sign);
            return w;
        };

        SCFishView.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFishView();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.FishID = r.int32();
                    break;
                case 2:
                    m.Sign = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFishView;
    })();

    fishing.CSFishTarget = (function() {

        function CSFishTarget(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSFishTarget.prototype.FishId = 0;
        CSFishTarget.prototype.RobotId = 0;

        CSFishTarget.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(8).int32(m.FishId);
            if (m.RobotId != null && Object.hasOwnProperty.call(m, "RobotId"))
                w.uint32(16).int32(m.RobotId);
            return w;
        };

        CSFishTarget.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.CSFishTarget();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.FishId = r.int32();
                    break;
                case 2:
                    m.RobotId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSFishTarget;
    })();

    fishing.SCFishTarget = (function() {

        function SCFishTarget(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFishTarget.prototype.SnId = 0;
        SCFishTarget.prototype.FishId = 0;

        SCFishTarget.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(16).int32(m.FishId);
            return w;
        };

        SCFishTarget.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFishTarget();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.FishId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFishTarget;
    })();

    fishing.PlayerPowerState = (function() {

        function PlayerPowerState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerPowerState.prototype.Snid = 0;
        PlayerPowerState.prototype.State = 0;
        PlayerPowerState.prototype.Num = 0;

        PlayerPowerState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(16).int32(m.State);
            if (m.Num != null && Object.hasOwnProperty.call(m, "Num"))
                w.uint32(24).int32(m.Num);
            return w;
        };

        PlayerPowerState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.PlayerPowerState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    m.State = r.int32();
                    break;
                case 3:
                    m.Num = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerPowerState;
    })();

    fishing.SCPowerState = (function() {

        function SCPowerState(p) {
            this.PowerState = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPowerState.prototype.PowerState = $util.emptyArray;

        SCPowerState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PowerState != null && m.PowerState.length) {
                for (var i = 0; i < m.PowerState.length; ++i)
                    $root.fishing.PlayerPowerState.encode(m.PowerState[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCPowerState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCPowerState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.PowerState && m.PowerState.length))
                        m.PowerState = [];
                    m.PowerState.push($root.fishing.PlayerPowerState.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPowerState;
    })();

    fishing.SCFishDel = (function() {

        function SCFishDel(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFishDel.prototype.FishId = 0;
        SCFishDel.prototype.Coin = 0;
        SCFishDel.prototype.CurrentPlayerCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFishDel.prototype.Snid = 0;

        SCFishDel.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(8).int32(m.FishId);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int32(m.Coin);
            if (m.CurrentPlayerCoin != null && Object.hasOwnProperty.call(m, "CurrentPlayerCoin"))
                w.uint32(24).int64(m.CurrentPlayerCoin);
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(32).int32(m.Snid);
            return w;
        };

        SCFishDel.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFishDel();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.FishId = r.int32();
                    break;
                case 2:
                    m.Coin = r.int32();
                    break;
                case 3:
                    m.CurrentPlayerCoin = r.int64();
                    break;
                case 4:
                    m.Snid = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFishDel;
    })();

    fishing.SCJackpotFish = (function() {

        function SCJackpotFish(p) {
            this.FishIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCJackpotFish.prototype.FishIds = $util.emptyArray;

        SCJackpotFish.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FishIds != null && m.FishIds.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.FishIds.length; ++i)
                    w.int32(m.FishIds[i]);
                w.ldelim();
            }
            return w;
        };

        SCJackpotFish.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCJackpotFish();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.FishIds && m.FishIds.length))
                        m.FishIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.FishIds.push(r.int32());
                    } else
                        m.FishIds.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCJackpotFish;
    })();

    fishing.CSLookLockFish = (function() {

        function CSLookLockFish(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSLookLockFish.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSLookLockFish.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.CSLookLockFish();
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

        return CSLookLockFish;
    })();

    fishing.SCLookLockFish = (function() {

        function SCLookLockFish(p) {
            this.FishId = [];
            this.FishIdNum = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLookLockFish.prototype.FishId = $util.emptyArray;
        SCLookLockFish.prototype.FishIdNum = $util.emptyArray;

        SCLookLockFish.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FishId != null && m.FishId.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.FishId.length; ++i)
                    w.int32(m.FishId[i]);
                w.ldelim();
            }
            if (m.FishIdNum != null && m.FishIdNum.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.FishIdNum.length; ++i)
                    w.int32(m.FishIdNum[i]);
                w.ldelim();
            }
            return w;
        };

        SCLookLockFish.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCLookLockFish();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.FishId && m.FishId.length))
                        m.FishId = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.FishId.push(r.int32());
                    } else
                        m.FishId.push(r.int32());
                    break;
                case 2:
                    if (!(m.FishIdNum && m.FishIdNum.length))
                        m.FishIdNum = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.FishIdNum.push(r.int32());
                    } else
                        m.FishIdNum.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLookLockFish;
    })();

    fishing.SCSendReadyPrana = (function() {

        function SCSendReadyPrana(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSendReadyPrana.prototype.SnId = 0;
        SCSendReadyPrana.prototype.Percent = 0;

        SCSendReadyPrana.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Percent != null && Object.hasOwnProperty.call(m, "Percent"))
                w.uint32(16).int32(m.Percent);
            return w;
        };

        SCSendReadyPrana.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCSendReadyPrana();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Percent = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCSendReadyPrana;
    })();

    fishing.CSReadyPrana = (function() {

        function CSReadyPrana(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSReadyPrana.prototype.SnId = 0;
        CSReadyPrana.prototype.X = 0;
        CSReadyPrana.prototype.Y = 0;

        CSReadyPrana.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.X != null && Object.hasOwnProperty.call(m, "X"))
                w.uint32(16).int32(m.X);
            if (m.Y != null && Object.hasOwnProperty.call(m, "Y"))
                w.uint32(24).int32(m.Y);
            return w;
        };

        CSReadyPrana.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.CSReadyPrana();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.X = r.int32();
                    break;
                case 3:
                    m.Y = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSReadyPrana;
    })();

    fishing.SCReadyPrana = (function() {

        function SCReadyPrana(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCReadyPrana.prototype.SnId = 0;
        SCReadyPrana.prototype.OpRetCode = 0;
        SCReadyPrana.prototype.X = 0;
        SCReadyPrana.prototype.Y = 0;

        SCReadyPrana.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(16).int32(m.OpRetCode);
            if (m.X != null && Object.hasOwnProperty.call(m, "X"))
                w.uint32(24).int32(m.X);
            if (m.Y != null && Object.hasOwnProperty.call(m, "Y"))
                w.uint32(32).int32(m.Y);
            return w;
        };

        SCReadyPrana.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCReadyPrana();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.OpRetCode = r.int32();
                    break;
                case 3:
                    m.X = r.int32();
                    break;
                case 4:
                    m.Y = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCReadyPrana;
    })();

    fishing.CSFirePrana = (function() {

        function CSFirePrana(p) {
            this.FishIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSFirePrana.prototype.SnId = 0;
        CSFirePrana.prototype.FishIds = $util.emptyArray;
        CSFirePrana.prototype.X = 0;
        CSFirePrana.prototype.Y = 0;

        CSFirePrana.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.FishIds != null && m.FishIds.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.FishIds.length; ++i)
                    w.int32(m.FishIds[i]);
                w.ldelim();
            }
            if (m.X != null && Object.hasOwnProperty.call(m, "X"))
                w.uint32(24).int32(m.X);
            if (m.Y != null && Object.hasOwnProperty.call(m, "Y"))
                w.uint32(32).int32(m.Y);
            return w;
        };

        CSFirePrana.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.CSFirePrana();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    if (!(m.FishIds && m.FishIds.length))
                        m.FishIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.FishIds.push(r.int32());
                    } else
                        m.FishIds.push(r.int32());
                    break;
                case 3:
                    m.X = r.int32();
                    break;
                case 4:
                    m.Y = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSFirePrana;
    })();

    fishing.SCFirePrana = (function() {

        function SCFirePrana(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFirePrana.prototype.SnId = 0;
        SCFirePrana.prototype.OpRetCode = 0;
        SCFirePrana.prototype.X = 0;
        SCFirePrana.prototype.Y = 0;

        SCFirePrana.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(16).int32(m.OpRetCode);
            if (m.X != null && Object.hasOwnProperty.call(m, "X"))
                w.uint32(24).int32(m.X);
            if (m.Y != null && Object.hasOwnProperty.call(m, "Y"))
                w.uint32(32).int32(m.Y);
            return w;
        };

        SCFirePrana.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCFirePrana();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.OpRetCode = r.int32();
                    break;
                case 3:
                    m.X = r.int32();
                    break;
                case 4:
                    m.Y = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFirePrana;
    })();

    fishing.SCJackpotCoin = (function() {

        function SCJackpotCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCJackpotCoin.prototype.SnId = 0;
        SCJackpotCoin.prototype.Coin = 0;
        SCJackpotCoin.prototype.JackpotLevel = 0;
        SCJackpotCoin.prototype.Name = "";

        SCJackpotCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int32(m.Coin);
            if (m.JackpotLevel != null && Object.hasOwnProperty.call(m, "JackpotLevel"))
                w.uint32(24).int32(m.JackpotLevel);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(34).string(m.Name);
            return w;
        };

        SCJackpotCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCJackpotCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Coin = r.int32();
                    break;
                case 3:
                    m.JackpotLevel = r.int32();
                    break;
                case 4:
                    m.Name = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCJackpotCoin;
    })();

    fishing.SCJackpotPool = (function() {

        function SCJackpotPool(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCJackpotPool.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCJackpotPool.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(8).int64(m.Coin);
            return w;
        };

        SCJackpotPool.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCJackpotPool();
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

        return SCJackpotPool;
    })();

    fishing.SCRetPranaCoin = (function() {

        function SCRetPranaCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRetPranaCoin.prototype.SnId = 0;
        SCRetPranaCoin.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCRetPranaCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int64(m.Coin);
            return w;
        };

        SCRetPranaCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCRetPranaCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Coin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRetPranaCoin;
    })();

    fishing.SCReBindAgent = (function() {

        function SCReBindAgent(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCReBindAgent.prototype.PlayerSnid = 0;
        SCReBindAgent.prototype.RobSnid = 0;

        SCReBindAgent.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlayerSnid != null && Object.hasOwnProperty.call(m, "PlayerSnid"))
                w.uint32(8).int32(m.PlayerSnid);
            if (m.RobSnid != null && Object.hasOwnProperty.call(m, "RobSnid"))
                w.uint32(16).int32(m.RobSnid);
            return w;
        };

        SCReBindAgent.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCReBindAgent();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PlayerSnid = r.int32();
                    break;
                case 2:
                    m.RobSnid = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCReBindAgent;
    })();

    fishing.SCRobotBehavior = (function() {

        function SCRobotBehavior(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRobotBehavior.prototype.Code = 0;
        SCRobotBehavior.prototype.RobotId = 0;

        SCRobotBehavior.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(8).int32(m.Code);
            if (m.RobotId != null && Object.hasOwnProperty.call(m, "RobotId"))
                w.uint32(16).int32(m.RobotId);
            return w;
        };

        SCRobotBehavior.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCRobotBehavior();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Code = r.int32();
                    break;
                case 2:
                    m.RobotId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRobotBehavior;
    })();

    fishing.SCSyncFishCoin = (function() {

        function SCSyncFishCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSyncFishCoin.prototype.FishId = 0;
        SCSyncFishCoin.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCSyncFishCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(8).int32(m.FishId);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int64(m.Coin);
            return w;
        };

        SCSyncFishCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCSyncFishCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.FishId = r.int32();
                    break;
                case 2:
                    m.Coin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCSyncFishCoin;
    })();

    fishing.FishHpInfo = (function() {

        function FishHpInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FishHpInfo.prototype.FishID = 0;
        FishHpInfo.prototype.HpRatio = 0;

        FishHpInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FishID != null && Object.hasOwnProperty.call(m, "FishID"))
                w.uint32(8).int32(m.FishID);
            if (m.HpRatio != null && Object.hasOwnProperty.call(m, "HpRatio"))
                w.uint32(16).int32(m.HpRatio);
            return w;
        };

        FishHpInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.FishHpInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.FishID = r.int32();
                    break;
                case 2:
                    m.HpRatio = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FishHpInfo;
    })();

    fishing.SCSyncFishHp = (function() {

        function SCSyncFishHp(p) {
            this.HpInfo = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSyncFishHp.prototype.HpInfo = $util.emptyArray;

        SCSyncFishHp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.HpInfo != null && m.HpInfo.length) {
                for (var i = 0; i < m.HpInfo.length; ++i)
                    $root.fishing.FishHpInfo.encode(m.HpInfo[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCSyncFishHp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fishing.SCSyncFishHp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.HpInfo && m.HpInfo.length))
                        m.HpInfo = [];
                    m.HpInfo.push($root.fishing.FishHpInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCSyncFishHp;
    })();

    return fishing;
})();

module.exports = $root;
