/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.avengers = (function() {

    var avengers = {};

    avengers.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[1056] = "OPRC_CoinNotEnough"] = 1056;
        return values;
    })();

    avengers.AvengersPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_Avengers_ZERO"] = 0;
        values[valuesById[5180] = "PACKET_SC_AVENGERS_ROOMINFO"] = 5180;
        values[valuesById[5181] = "PACKET_CS_AVENGERS_PLAYEROP"] = 5181;
        values[valuesById[5182] = "PACKET_SC_AVENGERS_PLAYEROP"] = 5182;
        values[valuesById[5183] = "PACKET_SC_AVENGERS_ROOMSTATE"] = 5183;
        values[valuesById[5184] = "PACKET_SC_AVENGERS_GAMEBILLED"] = 5184;
        values[valuesById[5185] = "PACKET_SC_AVENGERS_PLAYERHISTORY"] = 5185;
        values[valuesById[5186] = "PACKET_SC_AVENGERS_BIGWINHISTORY"] = 5186;
        values[valuesById[5187] = "PACKET_SC_AVENGERS_GAMEJACKPOT"] = 5187;
        return values;
    })();

    avengers.AvengersPlayerData = (function() {

        function AvengersPlayerData(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        AvengersPlayerData.prototype.Name = "";
        AvengersPlayerData.prototype.SnId = 0;
        AvengersPlayerData.prototype.Head = 0;
        AvengersPlayerData.prototype.Sex = 0;
        AvengersPlayerData.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        AvengersPlayerData.prototype.HeadOutLine = 0;
        AvengersPlayerData.prototype.VIP = 0;
        AvengersPlayerData.prototype.Params = $util.emptyArray;

        AvengersPlayerData.encode = function encode(m, w) {
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

        AvengersPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.AvengersPlayerData();
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

        return AvengersPlayerData;
    })();

    avengers.AvengersBonusGameInfo = (function() {

        function AvengersBonusGameInfo(p) {
            this.BonusData = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        AvengersBonusGameInfo.prototype.BonusData = $util.emptyArray;
        AvengersBonusGameInfo.prototype.TotalPrizeValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        AvengersBonusGameInfo.prototype.Mutiplier = 0;
        AvengersBonusGameInfo.prototype.DataMultiplier = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        AvengersBonusGameInfo.encode = function encode(m, w) {
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

        AvengersBonusGameInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.AvengersBonusGameInfo();
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

        return AvengersBonusGameInfo;
    })();

    avengers.SCAvengersRoomInfo = (function() {

        function SCAvengersRoomInfo(p) {
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

        SCAvengersRoomInfo.prototype.RoomId = 0;
        SCAvengersRoomInfo.prototype.Creator = 0;
        SCAvengersRoomInfo.prototype.GameId = 0;
        SCAvengersRoomInfo.prototype.RoomMode = 0;
        SCAvengersRoomInfo.prototype.Params = $util.emptyArray;
        SCAvengersRoomInfo.prototype.State = 0;
        SCAvengersRoomInfo.prototype.BetLines = $util.emptyArray;
        SCAvengersRoomInfo.prototype.Chip = 0;
        SCAvengersRoomInfo.prototype.Players = $util.emptyArray;
        SCAvengersRoomInfo.prototype.FreeTimes = 0;
        SCAvengersRoomInfo.prototype.Jackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCAvengersRoomInfo.prototype.TotalPriceBonus = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCAvengersRoomInfo.prototype.SpinID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCAvengersRoomInfo.prototype.ParamsEx = $util.emptyArray;
        SCAvengersRoomInfo.prototype.BonusGame = null;
        SCAvengersRoomInfo.prototype.BonusX = $util.emptyArray;
        SCAvengersRoomInfo.prototype.GameFreeId = 0;
        SCAvengersRoomInfo.prototype.BilledData = null;

        SCAvengersRoomInfo.encode = function encode(m, w) {
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
                    $root.avengers.AvengersPlayerData.encode(m.Players[i], w.uint32(74).fork()).ldelim();
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
                $root.avengers.AvengersBonusGameInfo.encode(m.BonusGame, w.uint32(122).fork()).ldelim();
            if (m.BonusX != null && m.BonusX.length) {
                w.uint32(130).fork();
                for (var i = 0; i < m.BonusX.length; ++i)
                    w.int32(m.BonusX[i]);
                w.ldelim();
            }
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(136).int32(m.GameFreeId);
            if (m.BilledData != null && Object.hasOwnProperty.call(m, "BilledData"))
                $root.avengers.GameBilledData.encode(m.BilledData, w.uint32(146).fork()).ldelim();
            return w;
        };

        SCAvengersRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.SCAvengersRoomInfo();
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
                    m.Players.push($root.avengers.AvengersPlayerData.decode(r, r.uint32()));
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
                    m.BonusGame = $root.avengers.AvengersBonusGameInfo.decode(r, r.uint32());
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
                    m.GameFreeId = r.int32();
                    break;
                case 18:
                    m.BilledData = $root.avengers.GameBilledData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCAvengersRoomInfo;
    })();

    avengers.CSAvengersOp = (function() {

        function CSAvengersOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSAvengersOp.prototype.OpCode = 0;
        CSAvengersOp.prototype.Params = $util.emptyArray;

        CSAvengersOp.encode = function encode(m, w) {
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

        CSAvengersOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.CSAvengersOp();
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

        return CSAvengersOp;
    })();

    avengers.SCAvengersOp = (function() {

        function SCAvengersOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCAvengersOp.prototype.SnId = 0;
        SCAvengersOp.prototype.OpCode = 0;
        SCAvengersOp.prototype.Params = $util.emptyArray;
        SCAvengersOp.prototype.OpRetCode = 0;

        SCAvengersOp.encode = function encode(m, w) {
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

        SCAvengersOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.SCAvengersOp();
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

        return SCAvengersOp;
    })();

    avengers.AvengersLinesInfo = (function() {

        function AvengersLinesInfo(p) {
            this.Position = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        AvengersLinesInfo.prototype.LineId = 0;
        AvengersLinesInfo.prototype.PrizeId = 0;
        AvengersLinesInfo.prototype.Position = $util.emptyArray;
        AvengersLinesInfo.prototype.PrizeValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        AvengersLinesInfo.encode = function encode(m, w) {
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

        AvengersLinesInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.AvengersLinesInfo();
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

        return AvengersLinesInfo;
    })();

    avengers.GameBilledData = (function() {

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
                    $root.avengers.AvengersLinesInfo.encode(m.PrizeLines[i], w.uint32(42).fork()).ldelim();
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
                $root.avengers.AvengersBonusGameInfo.encode(m.BonusGame, w.uint32(106).fork()).ldelim();
            if (m.ResponseStatus != null && Object.hasOwnProperty.call(m, "ResponseStatus"))
                w.uint32(112).int64(m.ResponseStatus);
            return w;
        };

        GameBilledData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.GameBilledData();
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
                    m.PrizeLines.push($root.avengers.AvengersLinesInfo.decode(r, r.uint32()));
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
                    m.BonusGame = $root.avengers.AvengersBonusGameInfo.decode(r, r.uint32());
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

    avengers.SCAvengersGameBilled = (function() {

        function SCAvengersGameBilled(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCAvengersGameBilled.prototype.BilledData = null;

        SCAvengersGameBilled.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BilledData != null && Object.hasOwnProperty.call(m, "BilledData"))
                $root.avengers.GameBilledData.encode(m.BilledData, w.uint32(18).fork()).ldelim();
            return w;
        };

        SCAvengersGameBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.SCAvengersGameBilled();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 2:
                    m.BilledData = $root.avengers.GameBilledData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCAvengersGameBilled;
    })();

    avengers.AvengersPlayerHistoryInfo = (function() {

        function AvengersPlayerHistoryInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        AvengersPlayerHistoryInfo.prototype.SpinID = "";
        AvengersPlayerHistoryInfo.prototype.CreatedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        AvengersPlayerHistoryInfo.prototype.TotalBetValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        AvengersPlayerHistoryInfo.prototype.TotalPriceValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        AvengersPlayerHistoryInfo.prototype.IsFree = false;
        AvengersPlayerHistoryInfo.prototype.TotalBonusValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        AvengersPlayerHistoryInfo.encode = function encode(m, w) {
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

        AvengersPlayerHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.AvengersPlayerHistoryInfo();
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

        return AvengersPlayerHistoryInfo;
    })();

    avengers.SCAvengersPlayerHistory = (function() {

        function SCAvengersPlayerHistory(p) {
            this.PlayerHistory = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCAvengersPlayerHistory.prototype.PlayerHistory = $util.emptyArray;

        SCAvengersPlayerHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlayerHistory != null && m.PlayerHistory.length) {
                for (var i = 0; i < m.PlayerHistory.length; ++i)
                    $root.avengers.AvengersPlayerHistoryInfo.encode(m.PlayerHistory[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCAvengersPlayerHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.SCAvengersPlayerHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.PlayerHistory && m.PlayerHistory.length))
                        m.PlayerHistory = [];
                    m.PlayerHistory.push($root.avengers.AvengersPlayerHistoryInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCAvengersPlayerHistory;
    })();

    avengers.AvengersBigWinHistoryInfo = (function() {

        function AvengersBigWinHistoryInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        AvengersBigWinHistoryInfo.prototype.SpinID = "";
        AvengersBigWinHistoryInfo.prototype.CreatedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        AvengersBigWinHistoryInfo.prototype.RoomID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        AvengersBigWinHistoryInfo.prototype.PriceValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        AvengersBigWinHistoryInfo.prototype.UserName = "";

        AvengersBigWinHistoryInfo.encode = function encode(m, w) {
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

        AvengersBigWinHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.AvengersBigWinHistoryInfo();
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

        return AvengersBigWinHistoryInfo;
    })();

    avengers.SCAvengersBigWinHistory = (function() {

        function SCAvengersBigWinHistory(p) {
            this.BigWinHistory = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCAvengersBigWinHistory.prototype.BigWinHistory = $util.emptyArray;

        SCAvengersBigWinHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BigWinHistory != null && m.BigWinHistory.length) {
                for (var i = 0; i < m.BigWinHistory.length; ++i)
                    $root.avengers.AvengersBigWinHistoryInfo.encode(m.BigWinHistory[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCAvengersBigWinHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.SCAvengersBigWinHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.BigWinHistory && m.BigWinHistory.length))
                        m.BigWinHistory = [];
                    m.BigWinHistory.push($root.avengers.AvengersBigWinHistoryInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCAvengersBigWinHistory;
    })();

    avengers.SCAvengersRoomState = (function() {

        function SCAvengersRoomState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCAvengersRoomState.prototype.State = 0;

        SCAvengersRoomState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(8).int32(m.State);
            return w;
        };

        SCAvengersRoomState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.avengers.SCAvengersRoomState();
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

        return SCAvengersRoomState;
    })();

    return avengers;
})();

module.exports = $root;
