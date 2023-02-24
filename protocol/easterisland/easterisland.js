/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.easterisland = (function() {

    var easterisland = {};

    easterisland.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[1056] = "OPRC_CoinNotEnough"] = 1056;
        return values;
    })();

    easterisland.EasterIslandPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_EasterIsland_ZERO"] = 0;
        values[valuesById[5200] = "PACKET_SC_EASTERISLAND_ROOMINFO"] = 5200;
        values[valuesById[5201] = "PACKET_CS_EASTERISLAND_PLAYEROP"] = 5201;
        values[valuesById[5202] = "PACKET_SC_EASTERISLAND_PLAYEROP"] = 5202;
        values[valuesById[5203] = "PACKET_SC_EASTERISLAND_ROOMSTATE"] = 5203;
        values[valuesById[5204] = "PACKET_SC_EASTERISLAND_GAMEBILLED"] = 5204;
        values[valuesById[5205] = "PACKET_SC_EASTERISLAND_PLAYERHISTORY"] = 5205;
        values[valuesById[5206] = "PACKET_SC_EASTERISLAND_BIGWINHISTORY"] = 5206;
        return values;
    })();

    easterisland.EasterIslandPlayerData = (function() {

        function EasterIslandPlayerData(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        EasterIslandPlayerData.prototype.Name = "";
        EasterIslandPlayerData.prototype.SnId = 0;
        EasterIslandPlayerData.prototype.Head = 0;
        EasterIslandPlayerData.prototype.Sex = 0;
        EasterIslandPlayerData.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        EasterIslandPlayerData.prototype.HeadOutLine = 0;
        EasterIslandPlayerData.prototype.VIP = 0;
        EasterIslandPlayerData.prototype.Params = $util.emptyArray;

        EasterIslandPlayerData.encode = function encode(m, w) {
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
            if (m.HeadOutLine != null && Object.hasOwnProperty.call(m, "HeadOutLine"))
                w.uint32(48).int32(m.HeadOutLine);
            if (m.VIP != null && Object.hasOwnProperty.call(m, "VIP"))
                w.uint32(56).int32(m.VIP);
            if (m.Params != null && m.Params.length) {
                for (var i = 0; i < m.Params.length; ++i)
                    w.uint32(66).string(m.Params[i]);
            }
            return w;
        };

        EasterIslandPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.EasterIslandPlayerData();
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
                    m.HeadOutLine = r.int32();
                    break;
                case 7:
                    m.VIP = r.int32();
                    break;
                case 8:
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

        return EasterIslandPlayerData;
    })();

    easterisland.EasterIslandBonusGameInfo = (function() {

        function EasterIslandBonusGameInfo(p) {
            this.BonusData = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        EasterIslandBonusGameInfo.prototype.BonusData = $util.emptyArray;
        EasterIslandBonusGameInfo.prototype.TotalPrizeValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        EasterIslandBonusGameInfo.prototype.Mutiplier = 0;
        EasterIslandBonusGameInfo.prototype.DataMultiplier = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        EasterIslandBonusGameInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BonusData != null && m.BonusData.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.BonusData.length; ++i)
                    w.int64(m.BonusData[i]);
                w.ldelim();
            }
            if (m.TotalPrizeValue != null && Object.hasOwnProperty.call(m, "TotalPrizeValue"))
                w.uint32(16).int64(m.TotalPrizeValue);
            if (m.Mutiplier != null && Object.hasOwnProperty.call(m, "Mutiplier"))
                w.uint32(24).int32(m.Mutiplier);
            if (m.DataMultiplier != null && Object.hasOwnProperty.call(m, "DataMultiplier"))
                w.uint32(32).int64(m.DataMultiplier);
            return w;
        };

        EasterIslandBonusGameInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.EasterIslandBonusGameInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.BonusData && m.BonusData.length))
                        m.BonusData = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.BonusData.push(r.int64());
                    } else
                        m.BonusData.push(r.int64());
                    break;
                case 2:
                    m.TotalPrizeValue = r.int64();
                    break;
                case 3:
                    m.Mutiplier = r.int32();
                    break;
                case 4:
                    m.DataMultiplier = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return EasterIslandBonusGameInfo;
    })();

    easterisland.SCEasterIslandRoomInfo = (function() {

        function SCEasterIslandRoomInfo(p) {
            this.Params = [];
            this.BetLines = [];
            this.Players = [];
            this.ParamsEx = [];
            this.BonusX = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCEasterIslandRoomInfo.prototype.RoomId = 0;
        SCEasterIslandRoomInfo.prototype.Creator = 0;
        SCEasterIslandRoomInfo.prototype.GameId = 0;
        SCEasterIslandRoomInfo.prototype.RoomMode = 0;
        SCEasterIslandRoomInfo.prototype.Params = $util.emptyArray;
        SCEasterIslandRoomInfo.prototype.State = 0;
        SCEasterIslandRoomInfo.prototype.BetLines = $util.emptyArray;
        SCEasterIslandRoomInfo.prototype.Chip = 0;
        SCEasterIslandRoomInfo.prototype.Players = $util.emptyArray;
        SCEasterIslandRoomInfo.prototype.FreeTimes = 0;
        SCEasterIslandRoomInfo.prototype.Jackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCEasterIslandRoomInfo.prototype.TotalPriceBonus = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCEasterIslandRoomInfo.prototype.SpinID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCEasterIslandRoomInfo.prototype.ParamsEx = $util.emptyArray;
        SCEasterIslandRoomInfo.prototype.BonusGame = null;
        SCEasterIslandRoomInfo.prototype.BonusX = $util.emptyArray;
        SCEasterIslandRoomInfo.prototype.SceneType = 0;
        SCEasterIslandRoomInfo.prototype.GameFreeId = 0;
        SCEasterIslandRoomInfo.prototype.BilledData = null;

        SCEasterIslandRoomInfo.encode = function encode(m, w) {
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
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(48).int32(m.State);
            if (m.BetLines != null && m.BetLines.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.BetLines.length; ++i)
                    w.int64(m.BetLines[i]);
                w.ldelim();
            }
            if (m.Chip != null && Object.hasOwnProperty.call(m, "Chip"))
                w.uint32(64).int32(m.Chip);
            if (m.Players != null && m.Players.length) {
                for (var i = 0; i < m.Players.length; ++i)
                    $root.easterisland.EasterIslandPlayerData.encode(m.Players[i], w.uint32(74).fork()).ldelim();
            }
            if (m.FreeTimes != null && Object.hasOwnProperty.call(m, "FreeTimes"))
                w.uint32(80).int32(m.FreeTimes);
            if (m.Jackpot != null && Object.hasOwnProperty.call(m, "Jackpot"))
                w.uint32(88).int64(m.Jackpot);
            if (m.TotalPriceBonus != null && Object.hasOwnProperty.call(m, "TotalPriceBonus"))
                w.uint32(96).int64(m.TotalPriceBonus);
            if (m.SpinID != null && Object.hasOwnProperty.call(m, "SpinID"))
                w.uint32(104).int64(m.SpinID);
            if (m.ParamsEx != null && m.ParamsEx.length) {
                w.uint32(114).fork();
                for (var i = 0; i < m.ParamsEx.length; ++i)
                    w.int32(m.ParamsEx[i]);
                w.ldelim();
            }
            if (m.BonusGame != null && Object.hasOwnProperty.call(m, "BonusGame"))
                $root.easterisland.EasterIslandBonusGameInfo.encode(m.BonusGame, w.uint32(122).fork()).ldelim();
            if (m.BonusX != null && m.BonusX.length) {
                w.uint32(130).fork();
                for (var i = 0; i < m.BonusX.length; ++i)
                    w.int32(m.BonusX[i]);
                w.ldelim();
            }
            if (m.SceneType != null && Object.hasOwnProperty.call(m, "SceneType"))
                w.uint32(136).int32(m.SceneType);
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(144).int32(m.GameFreeId);
            if (m.BilledData != null && Object.hasOwnProperty.call(m, "BilledData"))
                $root.easterisland.GameBilledData.encode(m.BilledData, w.uint32(154).fork()).ldelim();
            return w;
        };

        SCEasterIslandRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.SCEasterIslandRoomInfo();
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
                    m.State = r.int32();
                    break;
                case 7:
                    if (!(m.BetLines && m.BetLines.length))
                        m.BetLines = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.BetLines.push(r.int64());
                    } else
                        m.BetLines.push(r.int64());
                    break;
                case 8:
                    m.Chip = r.int32();
                    break;
                case 9:
                    if (!(m.Players && m.Players.length))
                        m.Players = [];
                    m.Players.push($root.easterisland.EasterIslandPlayerData.decode(r, r.uint32()));
                    break;
                case 10:
                    m.FreeTimes = r.int32();
                    break;
                case 11:
                    m.Jackpot = r.int64();
                    break;
                case 12:
                    m.TotalPriceBonus = r.int64();
                    break;
                case 13:
                    m.SpinID = r.int64();
                    break;
                case 14:
                    if (!(m.ParamsEx && m.ParamsEx.length))
                        m.ParamsEx = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ParamsEx.push(r.int32());
                    } else
                        m.ParamsEx.push(r.int32());
                    break;
                case 15:
                    m.BonusGame = $root.easterisland.EasterIslandBonusGameInfo.decode(r, r.uint32());
                    break;
                case 16:
                    if (!(m.BonusX && m.BonusX.length))
                        m.BonusX = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.BonusX.push(r.int32());
                    } else
                        m.BonusX.push(r.int32());
                    break;
                case 17:
                    m.SceneType = r.int32();
                    break;
                case 18:
                    m.GameFreeId = r.int32();
                    break;
                case 19:
                    m.BilledData = $root.easterisland.GameBilledData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCEasterIslandRoomInfo;
    })();

    easterisland.CSEasterIslandOp = (function() {

        function CSEasterIslandOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSEasterIslandOp.prototype.OpCode = 0;
        CSEasterIslandOp.prototype.Params = $util.emptyArray;

        CSEasterIslandOp.encode = function encode(m, w) {
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

        CSEasterIslandOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.CSEasterIslandOp();
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

        return CSEasterIslandOp;
    })();

    easterisland.SCEasterIslandOp = (function() {

        function SCEasterIslandOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCEasterIslandOp.prototype.SnId = 0;
        SCEasterIslandOp.prototype.OpCode = 0;
        SCEasterIslandOp.prototype.Params = $util.emptyArray;
        SCEasterIslandOp.prototype.OpRetCode = 0;

        SCEasterIslandOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(16).int32(m.OpCode);
            if (m.Params != null && m.Params.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int64(m.Params[i]);
                w.ldelim();
            }
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(32).int32(m.OpRetCode);
            return w;
        };

        SCEasterIslandOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.SCEasterIslandOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.OpCode = r.int32();
                    break;
                case 3:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int64());
                    } else
                        m.Params.push(r.int64());
                    break;
                case 4:
                    m.OpRetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCEasterIslandOp;
    })();

    easterisland.EasterIslandLinesInfo = (function() {

        function EasterIslandLinesInfo(p) {
            this.Position = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        EasterIslandLinesInfo.prototype.LineId = 0;
        EasterIslandLinesInfo.prototype.PrizeId = 0;
        EasterIslandLinesInfo.prototype.Position = $util.emptyArray;
        EasterIslandLinesInfo.prototype.PrizeValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        EasterIslandLinesInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LineId != null && Object.hasOwnProperty.call(m, "LineId"))
                w.uint32(8).int32(m.LineId);
            if (m.PrizeId != null && Object.hasOwnProperty.call(m, "PrizeId"))
                w.uint32(16).int32(m.PrizeId);
            if (m.Position != null && m.Position.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Position.length; ++i)
                    w.int32(m.Position[i]);
                w.ldelim();
            }
            if (m.PrizeValue != null && Object.hasOwnProperty.call(m, "PrizeValue"))
                w.uint32(32).int64(m.PrizeValue);
            return w;
        };

        EasterIslandLinesInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.EasterIslandLinesInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LineId = r.int32();
                    break;
                case 2:
                    m.PrizeId = r.int32();
                    break;
                case 3:
                    if (!(m.Position && m.Position.length))
                        m.Position = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Position.push(r.int32());
                    } else
                        m.Position.push(r.int32());
                    break;
                case 4:
                    m.PrizeValue = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return EasterIslandLinesInfo;
    })();

    easterisland.GameBilledData = (function() {

        function GameBilledData(p) {
            this.SlotsData = [];
            this.PrizeLines = [];
            this.BonusX = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameBilledData.prototype.SpinID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.SlotsData = $util.emptyArray;
        GameBilledData.prototype.AddFreeSpin = 0;
        GameBilledData.prototype.IsJackpot = false;
        GameBilledData.prototype.PrizeLines = $util.emptyArray;
        GameBilledData.prototype.TotalPrizeValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.TotalPaylinePrizeValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.TotalJackpotValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.Balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.FreeSpins = 0;
        GameBilledData.prototype.Jackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.BonusX = $util.emptyArray;
        GameBilledData.prototype.BonusGame = null;
        GameBilledData.prototype.ResponseStatus = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameBilledData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SpinID != null && Object.hasOwnProperty.call(m, "SpinID"))
                w.uint32(8).int64(m.SpinID);
            if (m.SlotsData != null && m.SlotsData.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.SlotsData.length; ++i)
                    w.int32(m.SlotsData[i]);
                w.ldelim();
            }
            if (m.AddFreeSpin != null && Object.hasOwnProperty.call(m, "AddFreeSpin"))
                w.uint32(24).int32(m.AddFreeSpin);
            if (m.IsJackpot != null && Object.hasOwnProperty.call(m, "IsJackpot"))
                w.uint32(32).bool(m.IsJackpot);
            if (m.PrizeLines != null && m.PrizeLines.length) {
                for (var i = 0; i < m.PrizeLines.length; ++i)
                    $root.easterisland.EasterIslandLinesInfo.encode(m.PrizeLines[i], w.uint32(42).fork()).ldelim();
            }
            if (m.TotalPrizeValue != null && Object.hasOwnProperty.call(m, "TotalPrizeValue"))
                w.uint32(48).int64(m.TotalPrizeValue);
            if (m.TotalPaylinePrizeValue != null && Object.hasOwnProperty.call(m, "TotalPaylinePrizeValue"))
                w.uint32(56).int64(m.TotalPaylinePrizeValue);
            if (m.TotalJackpotValue != null && Object.hasOwnProperty.call(m, "TotalJackpotValue"))
                w.uint32(64).int64(m.TotalJackpotValue);
            if (m.Balance != null && Object.hasOwnProperty.call(m, "Balance"))
                w.uint32(72).int64(m.Balance);
            if (m.FreeSpins != null && Object.hasOwnProperty.call(m, "FreeSpins"))
                w.uint32(80).int32(m.FreeSpins);
            if (m.Jackpot != null && Object.hasOwnProperty.call(m, "Jackpot"))
                w.uint32(88).int64(m.Jackpot);
            if (m.BonusX != null && m.BonusX.length) {
                w.uint32(98).fork();
                for (var i = 0; i < m.BonusX.length; ++i)
                    w.int32(m.BonusX[i]);
                w.ldelim();
            }
            if (m.BonusGame != null && Object.hasOwnProperty.call(m, "BonusGame"))
                $root.easterisland.EasterIslandBonusGameInfo.encode(m.BonusGame, w.uint32(106).fork()).ldelim();
            if (m.ResponseStatus != null && Object.hasOwnProperty.call(m, "ResponseStatus"))
                w.uint32(112).int64(m.ResponseStatus);
            return w;
        };

        GameBilledData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.GameBilledData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SpinID = r.int64();
                    break;
                case 2:
                    if (!(m.SlotsData && m.SlotsData.length))
                        m.SlotsData = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.SlotsData.push(r.int32());
                    } else
                        m.SlotsData.push(r.int32());
                    break;
                case 3:
                    m.AddFreeSpin = r.int32();
                    break;
                case 4:
                    m.IsJackpot = r.bool();
                    break;
                case 5:
                    if (!(m.PrizeLines && m.PrizeLines.length))
                        m.PrizeLines = [];
                    m.PrizeLines.push($root.easterisland.EasterIslandLinesInfo.decode(r, r.uint32()));
                    break;
                case 6:
                    m.TotalPrizeValue = r.int64();
                    break;
                case 7:
                    m.TotalPaylinePrizeValue = r.int64();
                    break;
                case 8:
                    m.TotalJackpotValue = r.int64();
                    break;
                case 9:
                    m.Balance = r.int64();
                    break;
                case 10:
                    m.FreeSpins = r.int32();
                    break;
                case 11:
                    m.Jackpot = r.int64();
                    break;
                case 12:
                    if (!(m.BonusX && m.BonusX.length))
                        m.BonusX = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.BonusX.push(r.int32());
                    } else
                        m.BonusX.push(r.int32());
                    break;
                case 13:
                    m.BonusGame = $root.easterisland.EasterIslandBonusGameInfo.decode(r, r.uint32());
                    break;
                case 14:
                    m.ResponseStatus = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameBilledData;
    })();

    easterisland.SCEasterIslandGameBilled = (function() {

        function SCEasterIslandGameBilled(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCEasterIslandGameBilled.prototype.BilledData = null;

        SCEasterIslandGameBilled.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BilledData != null && Object.hasOwnProperty.call(m, "BilledData"))
                $root.easterisland.GameBilledData.encode(m.BilledData, w.uint32(10).fork()).ldelim();
            return w;
        };

        SCEasterIslandGameBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.SCEasterIslandGameBilled();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.BilledData = $root.easterisland.GameBilledData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCEasterIslandGameBilled;
    })();

    easterisland.EasterIslandPlayerHistoryInfo = (function() {

        function EasterIslandPlayerHistoryInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        EasterIslandPlayerHistoryInfo.prototype.SpinID = "";
        EasterIslandPlayerHistoryInfo.prototype.CreatedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        EasterIslandPlayerHistoryInfo.prototype.TotalBetValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        EasterIslandPlayerHistoryInfo.prototype.TotalPriceValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        EasterIslandPlayerHistoryInfo.prototype.IsFree = false;
        EasterIslandPlayerHistoryInfo.prototype.TotalBonusValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        EasterIslandPlayerHistoryInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SpinID != null && Object.hasOwnProperty.call(m, "SpinID"))
                w.uint32(10).string(m.SpinID);
            if (m.CreatedTime != null && Object.hasOwnProperty.call(m, "CreatedTime"))
                w.uint32(16).int64(m.CreatedTime);
            if (m.TotalBetValue != null && Object.hasOwnProperty.call(m, "TotalBetValue"))
                w.uint32(24).int64(m.TotalBetValue);
            if (m.TotalPriceValue != null && Object.hasOwnProperty.call(m, "TotalPriceValue"))
                w.uint32(32).int64(m.TotalPriceValue);
            if (m.IsFree != null && Object.hasOwnProperty.call(m, "IsFree"))
                w.uint32(40).bool(m.IsFree);
            if (m.TotalBonusValue != null && Object.hasOwnProperty.call(m, "TotalBonusValue"))
                w.uint32(48).int64(m.TotalBonusValue);
            return w;
        };

        EasterIslandPlayerHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.EasterIslandPlayerHistoryInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SpinID = r.string();
                    break;
                case 2:
                    m.CreatedTime = r.int64();
                    break;
                case 3:
                    m.TotalBetValue = r.int64();
                    break;
                case 4:
                    m.TotalPriceValue = r.int64();
                    break;
                case 5:
                    m.IsFree = r.bool();
                    break;
                case 6:
                    m.TotalBonusValue = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return EasterIslandPlayerHistoryInfo;
    })();

    easterisland.SCEasterIslandPlayerHistory = (function() {

        function SCEasterIslandPlayerHistory(p) {
            this.PlayerHistory = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCEasterIslandPlayerHistory.prototype.PlayerHistory = $util.emptyArray;

        SCEasterIslandPlayerHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlayerHistory != null && m.PlayerHistory.length) {
                for (var i = 0; i < m.PlayerHistory.length; ++i)
                    $root.easterisland.EasterIslandPlayerHistoryInfo.encode(m.PlayerHistory[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCEasterIslandPlayerHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.SCEasterIslandPlayerHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.PlayerHistory && m.PlayerHistory.length))
                        m.PlayerHistory = [];
                    m.PlayerHistory.push($root.easterisland.EasterIslandPlayerHistoryInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCEasterIslandPlayerHistory;
    })();

    easterisland.EasterIslandBigWinHistoryInfo = (function() {

        function EasterIslandBigWinHistoryInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        EasterIslandBigWinHistoryInfo.prototype.SpinID = "";
        EasterIslandBigWinHistoryInfo.prototype.CreatedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        EasterIslandBigWinHistoryInfo.prototype.RoomID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        EasterIslandBigWinHistoryInfo.prototype.PriceValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        EasterIslandBigWinHistoryInfo.prototype.UserName = "";

        EasterIslandBigWinHistoryInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SpinID != null && Object.hasOwnProperty.call(m, "SpinID"))
                w.uint32(10).string(m.SpinID);
            if (m.CreatedTime != null && Object.hasOwnProperty.call(m, "CreatedTime"))
                w.uint32(16).int64(m.CreatedTime);
            if (m.RoomID != null && Object.hasOwnProperty.call(m, "RoomID"))
                w.uint32(24).int64(m.RoomID);
            if (m.PriceValue != null && Object.hasOwnProperty.call(m, "PriceValue"))
                w.uint32(32).int64(m.PriceValue);
            if (m.UserName != null && Object.hasOwnProperty.call(m, "UserName"))
                w.uint32(42).string(m.UserName);
            return w;
        };

        EasterIslandBigWinHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.EasterIslandBigWinHistoryInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SpinID = r.string();
                    break;
                case 2:
                    m.CreatedTime = r.int64();
                    break;
                case 3:
                    m.RoomID = r.int64();
                    break;
                case 4:
                    m.PriceValue = r.int64();
                    break;
                case 5:
                    m.UserName = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return EasterIslandBigWinHistoryInfo;
    })();

    easterisland.SCEasterIslandBigWinHistory = (function() {

        function SCEasterIslandBigWinHistory(p) {
            this.BigWinHistory = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCEasterIslandBigWinHistory.prototype.BigWinHistory = $util.emptyArray;

        SCEasterIslandBigWinHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BigWinHistory != null && m.BigWinHistory.length) {
                for (var i = 0; i < m.BigWinHistory.length; ++i)
                    $root.easterisland.EasterIslandBigWinHistoryInfo.encode(m.BigWinHistory[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCEasterIslandBigWinHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.SCEasterIslandBigWinHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.BigWinHistory && m.BigWinHistory.length))
                        m.BigWinHistory = [];
                    m.BigWinHistory.push($root.easterisland.EasterIslandBigWinHistoryInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCEasterIslandBigWinHistory;
    })();

    easterisland.SCEasterIslandRoomState = (function() {

        function SCEasterIslandRoomState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCEasterIslandRoomState.prototype.State = 0;

        SCEasterIslandRoomState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(8).int32(m.State);
            return w;
        };

        SCEasterIslandRoomState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.easterisland.SCEasterIslandRoomState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.State = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCEasterIslandRoomState;
    })();

    return easterisland;
})();

module.exports = $root;
