/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tamquoc = (function() {

    var tamquoc = {};

    tamquoc.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[1056] = "OPRC_CoinNotEnough"] = 1056;
        return values;
    })();

    tamquoc.TamQuocPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_TAMQUOC_ZERO"] = 0;
        values[valuesById[5520] = "PACKET_SC_TAMQUOC_ROOMINFO"] = 5520;
        values[valuesById[5521] = "PACKET_CS_TAMQUOC_PLAYEROP"] = 5521;
        values[valuesById[5522] = "PACKET_SC_TAMQUOC_PLAYEROP"] = 5522;
        values[valuesById[5523] = "PACKET_SC_TAMQUOC_ROOMSTATE"] = 5523;
        values[valuesById[5524] = "PACKET_SC_TAMQUOC_GAMEBILLED"] = 5524;
        values[valuesById[5525] = "PACKET_SC_TAMQUOC_PLAYERHISTORY"] = 5525;
        values[valuesById[5526] = "PACKET_SC_TAMQUOC_BIGWINHISTORY"] = 5526;
        values[valuesById[5527] = "PACKET_SC_TAMQUOC_GAMEJACKPOT"] = 5527;
        return values;
    })();

    tamquoc.TamQuocPlayerData = (function() {

        function TamQuocPlayerData(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TamQuocPlayerData.prototype.Name = "";
        TamQuocPlayerData.prototype.SnId = 0;
        TamQuocPlayerData.prototype.Head = 0;
        TamQuocPlayerData.prototype.Sex = 0;
        TamQuocPlayerData.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TamQuocPlayerData.prototype.HeadOutLine = 0;
        TamQuocPlayerData.prototype.VIP = 0;
        TamQuocPlayerData.prototype.Params = $util.emptyArray;

        TamQuocPlayerData.encode = function encode(m, w) {
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

        TamQuocPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.TamQuocPlayerData();
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

        return TamQuocPlayerData;
    })();

    tamquoc.TamQuocBonusGameInfo = (function() {

        function TamQuocBonusGameInfo(p) {
            this.BonusData = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TamQuocBonusGameInfo.prototype.BonusData = $util.emptyArray;
        TamQuocBonusGameInfo.prototype.TotalPrizeValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TamQuocBonusGameInfo.prototype.Mutiplier = 0;
        TamQuocBonusGameInfo.prototype.DataMultiplier = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        TamQuocBonusGameInfo.encode = function encode(m, w) {
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

        TamQuocBonusGameInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.TamQuocBonusGameInfo();
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

        return TamQuocBonusGameInfo;
    })();

    tamquoc.SCTamQuocRoomInfo = (function() {

        function SCTamQuocRoomInfo(p) {
            this.Params = [];
            this.BetLines = [];
            this.Players = [];
            this.ParamsEx = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTamQuocRoomInfo.prototype.RoomId = 0;
        SCTamQuocRoomInfo.prototype.Creator = 0;
        SCTamQuocRoomInfo.prototype.GameId = 0;
        SCTamQuocRoomInfo.prototype.RoomMode = 0;
        SCTamQuocRoomInfo.prototype.Params = $util.emptyArray;
        SCTamQuocRoomInfo.prototype.State = 0;
        SCTamQuocRoomInfo.prototype.BetLines = $util.emptyArray;
        SCTamQuocRoomInfo.prototype.Chip = 0;
        SCTamQuocRoomInfo.prototype.Players = $util.emptyArray;
        SCTamQuocRoomInfo.prototype.FreeTimes = 0;
        SCTamQuocRoomInfo.prototype.Jackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCTamQuocRoomInfo.prototype.TotalPriceBonus = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCTamQuocRoomInfo.prototype.SpinID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCTamQuocRoomInfo.prototype.ParamsEx = $util.emptyArray;
        SCTamQuocRoomInfo.prototype.BonusGame = null;
        SCTamQuocRoomInfo.prototype.GameFreeId = 0;
        SCTamQuocRoomInfo.prototype.BilledData = null;

        SCTamQuocRoomInfo.encode = function encode(m, w) {
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
                    $root.tamquoc.TamQuocPlayerData.encode(m.Players[i], w.uint32(74).fork()).ldelim();
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
                $root.tamquoc.TamQuocBonusGameInfo.encode(m.BonusGame, w.uint32(122).fork()).ldelim();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(128).int32(m.GameFreeId);
            if (m.BilledData != null && Object.hasOwnProperty.call(m, "BilledData"))
                $root.tamquoc.GameBilledData.encode(m.BilledData, w.uint32(138).fork()).ldelim();
            return w;
        };

        SCTamQuocRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.SCTamQuocRoomInfo();
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
                    m.Players.push($root.tamquoc.TamQuocPlayerData.decode(r, r.uint32()));
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
                    m.BonusGame = $root.tamquoc.TamQuocBonusGameInfo.decode(r, r.uint32());
                    break;
                case 16:
                    m.GameFreeId = r.int32();
                    break;
                case 17:
                    m.BilledData = $root.tamquoc.GameBilledData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTamQuocRoomInfo;
    })();

    tamquoc.CSTamQuocOp = (function() {

        function CSTamQuocOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSTamQuocOp.prototype.OpCode = 0;
        CSTamQuocOp.prototype.Params = $util.emptyArray;

        CSTamQuocOp.encode = function encode(m, w) {
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

        CSTamQuocOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.CSTamQuocOp();
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

        return CSTamQuocOp;
    })();

    tamquoc.SCTamQuocOp = (function() {

        function SCTamQuocOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTamQuocOp.prototype.SnId = 0;
        SCTamQuocOp.prototype.OpCode = 0;
        SCTamQuocOp.prototype.Params = $util.emptyArray;
        SCTamQuocOp.prototype.OpRetCode = 0;

        SCTamQuocOp.encode = function encode(m, w) {
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

        SCTamQuocOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.SCTamQuocOp();
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

        return SCTamQuocOp;
    })();

    tamquoc.TamQuocLinesInfo = (function() {

        function TamQuocLinesInfo(p) {
            this.Position = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TamQuocLinesInfo.prototype.LineId = 0;
        TamQuocLinesInfo.prototype.PrizeId = 0;
        TamQuocLinesInfo.prototype.Position = $util.emptyArray;
        TamQuocLinesInfo.prototype.PrizeValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        TamQuocLinesInfo.encode = function encode(m, w) {
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

        TamQuocLinesInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.TamQuocLinesInfo();
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

        return TamQuocLinesInfo;
    })();

    tamquoc.GameBilledData = (function() {

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
                    $root.tamquoc.TamQuocLinesInfo.encode(m.PrizeLines[i], w.uint32(42).fork()).ldelim();
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
                $root.tamquoc.TamQuocBonusGameInfo.encode(m.BonusGame, w.uint32(106).fork()).ldelim();
            if (m.ResponseStatus != null && Object.hasOwnProperty.call(m, "ResponseStatus"))
                w.uint32(112).int64(m.ResponseStatus);
            return w;
        };

        GameBilledData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.GameBilledData();
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
                    m.PrizeLines.push($root.tamquoc.TamQuocLinesInfo.decode(r, r.uint32()));
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
                    m.BonusGame = $root.tamquoc.TamQuocBonusGameInfo.decode(r, r.uint32());
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

    tamquoc.SCTamQuocGameBilled = (function() {

        function SCTamQuocGameBilled(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTamQuocGameBilled.prototype.BilledData = null;

        SCTamQuocGameBilled.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BilledData != null && Object.hasOwnProperty.call(m, "BilledData"))
                $root.tamquoc.GameBilledData.encode(m.BilledData, w.uint32(10).fork()).ldelim();
            return w;
        };

        SCTamQuocGameBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.SCTamQuocGameBilled();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.BilledData = $root.tamquoc.GameBilledData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTamQuocGameBilled;
    })();

    tamquoc.TamQuocPlayerHistoryInfo = (function() {

        function TamQuocPlayerHistoryInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TamQuocPlayerHistoryInfo.prototype.SpinID = "";
        TamQuocPlayerHistoryInfo.prototype.CreatedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TamQuocPlayerHistoryInfo.prototype.TotalBetValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TamQuocPlayerHistoryInfo.prototype.TotalPriceValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TamQuocPlayerHistoryInfo.prototype.IsFree = false;
        TamQuocPlayerHistoryInfo.prototype.TotalBonusValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        TamQuocPlayerHistoryInfo.encode = function encode(m, w) {
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

        TamQuocPlayerHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.TamQuocPlayerHistoryInfo();
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

        return TamQuocPlayerHistoryInfo;
    })();

    tamquoc.SCTamQuocPlayerHistory = (function() {

        function SCTamQuocPlayerHistory(p) {
            this.PlayerHistory = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTamQuocPlayerHistory.prototype.PlayerHistory = $util.emptyArray;

        SCTamQuocPlayerHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlayerHistory != null && m.PlayerHistory.length) {
                for (var i = 0; i < m.PlayerHistory.length; ++i)
                    $root.tamquoc.TamQuocPlayerHistoryInfo.encode(m.PlayerHistory[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCTamQuocPlayerHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.SCTamQuocPlayerHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.PlayerHistory && m.PlayerHistory.length))
                        m.PlayerHistory = [];
                    m.PlayerHistory.push($root.tamquoc.TamQuocPlayerHistoryInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTamQuocPlayerHistory;
    })();

    tamquoc.TamQuocBigWinHistoryInfo = (function() {

        function TamQuocBigWinHistoryInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TamQuocBigWinHistoryInfo.prototype.SpinID = "";
        TamQuocBigWinHistoryInfo.prototype.CreatedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TamQuocBigWinHistoryInfo.prototype.RoomID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TamQuocBigWinHistoryInfo.prototype.PriceValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TamQuocBigWinHistoryInfo.prototype.UserName = "";

        TamQuocBigWinHistoryInfo.encode = function encode(m, w) {
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

        TamQuocBigWinHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.TamQuocBigWinHistoryInfo();
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

        return TamQuocBigWinHistoryInfo;
    })();

    tamquoc.SCTamQuocBigWinHistory = (function() {

        function SCTamQuocBigWinHistory(p) {
            this.BigWinHistory = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTamQuocBigWinHistory.prototype.BigWinHistory = $util.emptyArray;

        SCTamQuocBigWinHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BigWinHistory != null && m.BigWinHistory.length) {
                for (var i = 0; i < m.BigWinHistory.length; ++i)
                    $root.tamquoc.TamQuocBigWinHistoryInfo.encode(m.BigWinHistory[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCTamQuocBigWinHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.SCTamQuocBigWinHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.BigWinHistory && m.BigWinHistory.length))
                        m.BigWinHistory = [];
                    m.BigWinHistory.push($root.tamquoc.TamQuocBigWinHistoryInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTamQuocBigWinHistory;
    })();

    tamquoc.SCTamQuocRoomState = (function() {

        function SCTamQuocRoomState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTamQuocRoomState.prototype.State = 0;

        SCTamQuocRoomState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(8).int32(m.State);
            return w;
        };

        SCTamQuocRoomState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tamquoc.SCTamQuocRoomState();
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

        return SCTamQuocRoomState;
    })();

    return tamquoc;
})();

module.exports = $root;
