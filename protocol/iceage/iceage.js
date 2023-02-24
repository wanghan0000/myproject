/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.iceage = (function() {

    var iceage = {};

    iceage.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[1056] = "OPRC_CoinNotEnough"] = 1056;
        return values;
    })();

    iceage.IceAgePacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_IceAge_ZERO"] = 0;
        values[valuesById[5510] = "PACKET_SC_ICEAGE_ROOMINFO"] = 5510;
        values[valuesById[5511] = "PACKET_CS_ICEAGE_PLAYEROP"] = 5511;
        values[valuesById[5512] = "PACKET_SC_ICEAGE_PLAYEROP"] = 5512;
        values[valuesById[5513] = "PACKET_SC_ICEAGE_ROOMSTATE"] = 5513;
        values[valuesById[5514] = "PACKET_SC_ICEAGE_GAMEBILLED"] = 5514;
        values[valuesById[5515] = "PACKET_SC_ICEAGE_PLAYERHISTORY"] = 5515;
        values[valuesById[5516] = "PACKET_SC_ICEAGE_BIGWINHISTORY"] = 5516;
        return values;
    })();

    iceage.IceAgePlayerData = (function() {

        function IceAgePlayerData(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        IceAgePlayerData.prototype.Name = "";
        IceAgePlayerData.prototype.SnId = 0;
        IceAgePlayerData.prototype.Head = 0;
        IceAgePlayerData.prototype.Sex = 0;
        IceAgePlayerData.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        IceAgePlayerData.prototype.HeadOutLine = 0;
        IceAgePlayerData.prototype.VIP = 0;
        IceAgePlayerData.prototype.Params = $util.emptyArray;

        IceAgePlayerData.encode = function encode(m, w) {
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

        IceAgePlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.IceAgePlayerData();
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

        return IceAgePlayerData;
    })();

    iceage.SCIceAgeRoomInfo = (function() {

        function SCIceAgeRoomInfo(p) {
            this.Params = [];
            this.BetLines = [];
            this.Players = [];
            this.ParamsEx = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCIceAgeRoomInfo.prototype.RoomId = 0;
        SCIceAgeRoomInfo.prototype.Creator = 0;
        SCIceAgeRoomInfo.prototype.GameId = 0;
        SCIceAgeRoomInfo.prototype.RoomMode = 0;
        SCIceAgeRoomInfo.prototype.Params = $util.emptyArray;
        SCIceAgeRoomInfo.prototype.State = 0;
        SCIceAgeRoomInfo.prototype.BetLines = $util.emptyArray;
        SCIceAgeRoomInfo.prototype.Chip = 0;
        SCIceAgeRoomInfo.prototype.Players = $util.emptyArray;
        SCIceAgeRoomInfo.prototype.FreeTimes = 0;
        SCIceAgeRoomInfo.prototype.Jackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCIceAgeRoomInfo.prototype.TotalPriceBonus = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCIceAgeRoomInfo.prototype.SpinID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCIceAgeRoomInfo.prototype.ParamsEx = $util.emptyArray;
        SCIceAgeRoomInfo.prototype.GameFreeId = 0;
        SCIceAgeRoomInfo.prototype.BilledData = null;

        SCIceAgeRoomInfo.encode = function encode(m, w) {
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
                    $root.iceage.IceAgePlayerData.encode(m.Players[i], w.uint32(74).fork()).ldelim();
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
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(120).int32(m.GameFreeId);
            if (m.BilledData != null && Object.hasOwnProperty.call(m, "BilledData"))
                $root.iceage.GameBilledData.encode(m.BilledData, w.uint32(130).fork()).ldelim();
            return w;
        };

        SCIceAgeRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.SCIceAgeRoomInfo();
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
                    m.Players.push($root.iceage.IceAgePlayerData.decode(r, r.uint32()));
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
                    m.GameFreeId = r.int32();
                    break;
                case 16:
                    m.BilledData = $root.iceage.GameBilledData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCIceAgeRoomInfo;
    })();

    iceage.CSIceAgeOp = (function() {

        function CSIceAgeOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSIceAgeOp.prototype.OpCode = 0;
        CSIceAgeOp.prototype.Params = $util.emptyArray;

        CSIceAgeOp.encode = function encode(m, w) {
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

        CSIceAgeOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.CSIceAgeOp();
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

        return CSIceAgeOp;
    })();

    iceage.SCIceAgeOp = (function() {

        function SCIceAgeOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCIceAgeOp.prototype.SnId = 0;
        SCIceAgeOp.prototype.OpCode = 0;
        SCIceAgeOp.prototype.Params = $util.emptyArray;
        SCIceAgeOp.prototype.OpRetCode = 0;

        SCIceAgeOp.encode = function encode(m, w) {
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

        SCIceAgeOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.SCIceAgeOp();
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

        return SCIceAgeOp;
    })();

    iceage.IceAgeLinesInfo = (function() {

        function IceAgeLinesInfo(p) {
            this.PrizesBonus = [];
            this.Items = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        IceAgeLinesInfo.prototype.LineID = 0;
        IceAgeLinesInfo.prototype.PrizeID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        IceAgeLinesInfo.prototype.PrizeValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        IceAgeLinesInfo.prototype.Turn = 0;
        IceAgeLinesInfo.prototype.PrizesFreespin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        IceAgeLinesInfo.prototype.PrizesJackport = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        IceAgeLinesInfo.prototype.PrizesBonus = $util.emptyArray;
        IceAgeLinesInfo.prototype.Items = $util.emptyArray;
        IceAgeLinesInfo.prototype.RoleID = 0;

        IceAgeLinesInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LineID != null && Object.hasOwnProperty.call(m, "LineID"))
                w.uint32(8).int32(m.LineID);
            if (m.PrizeID != null && Object.hasOwnProperty.call(m, "PrizeID"))
                w.uint32(16).int64(m.PrizeID);
            if (m.PrizeValue != null && Object.hasOwnProperty.call(m, "PrizeValue"))
                w.uint32(24).int64(m.PrizeValue);
            if (m.Turn != null && Object.hasOwnProperty.call(m, "Turn"))
                w.uint32(32).int32(m.Turn);
            if (m.PrizesFreespin != null && Object.hasOwnProperty.call(m, "PrizesFreespin"))
                w.uint32(40).int64(m.PrizesFreespin);
            if (m.PrizesJackport != null && Object.hasOwnProperty.call(m, "PrizesJackport"))
                w.uint32(48).int64(m.PrizesJackport);
            if (m.PrizesBonus != null && m.PrizesBonus.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.PrizesBonus.length; ++i)
                    w.int64(m.PrizesBonus[i]);
                w.ldelim();
            }
            if (m.Items != null && m.Items.length) {
                w.uint32(66).fork();
                for (var i = 0; i < m.Items.length; ++i)
                    w.int32(m.Items[i]);
                w.ldelim();
            }
            if (m.RoleID != null && Object.hasOwnProperty.call(m, "RoleID"))
                w.uint32(72).int32(m.RoleID);
            return w;
        };

        IceAgeLinesInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.IceAgeLinesInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LineID = r.int32();
                    break;
                case 2:
                    m.PrizeID = r.int64();
                    break;
                case 3:
                    m.PrizeValue = r.int64();
                    break;
                case 4:
                    m.Turn = r.int32();
                    break;
                case 5:
                    m.PrizesFreespin = r.int64();
                    break;
                case 6:
                    m.PrizesJackport = r.int64();
                    break;
                case 7:
                    if (!(m.PrizesBonus && m.PrizesBonus.length))
                        m.PrizesBonus = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.PrizesBonus.push(r.int64());
                    } else
                        m.PrizesBonus.push(r.int64());
                    break;
                case 8:
                    if (!(m.Items && m.Items.length))
                        m.Items = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Items.push(r.int32());
                    } else
                        m.Items.push(r.int32());
                    break;
                case 9:
                    m.RoleID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return IceAgeLinesInfo;
    })();

    iceage.IceAgeCards = (function() {

        function IceAgeCards(p) {
            this.Card = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        IceAgeCards.prototype.Card = $util.emptyArray;

        IceAgeCards.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Card != null && m.Card.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.Card.length; ++i)
                    w.int32(m.Card[i]);
                w.ldelim();
            }
            return w;
        };

        IceAgeCards.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.IceAgeCards();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Card && m.Card.length))
                        m.Card = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Card.push(r.int32());
                    } else
                        m.Card.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return IceAgeCards;
    })();

    iceage.GameBilledData = (function() {

        function GameBilledData(p) {
            this.SlotsData = [];
            this.PrizesData = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameBilledData.prototype.SpinID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.SlotsData = $util.emptyArray;
        GameBilledData.prototype.PrizesData = $util.emptyArray;
        GameBilledData.prototype.TotalBetValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.TotalPriceValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.IsJackpot = false;
        GameBilledData.prototype.Jackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.Balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.TotalFreeSpin = 0;
        GameBilledData.prototype.TotalPriceBonus = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.TotalJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameBilledData.prototype.ResponseStatus = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameBilledData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SpinID != null && Object.hasOwnProperty.call(m, "SpinID"))
                w.uint32(8).int64(m.SpinID);
            if (m.SlotsData != null && m.SlotsData.length) {
                for (var i = 0; i < m.SlotsData.length; ++i)
                    $root.iceage.IceAgeCards.encode(m.SlotsData[i], w.uint32(18).fork()).ldelim();
            }
            if (m.PrizesData != null && m.PrizesData.length) {
                for (var i = 0; i < m.PrizesData.length; ++i)
                    $root.iceage.IceAgeLinesInfo.encode(m.PrizesData[i], w.uint32(26).fork()).ldelim();
            }
            if (m.TotalBetValue != null && Object.hasOwnProperty.call(m, "TotalBetValue"))
                w.uint32(32).int64(m.TotalBetValue);
            if (m.TotalPriceValue != null && Object.hasOwnProperty.call(m, "TotalPriceValue"))
                w.uint32(40).int64(m.TotalPriceValue);
            if (m.IsJackpot != null && Object.hasOwnProperty.call(m, "IsJackpot"))
                w.uint32(48).bool(m.IsJackpot);
            if (m.Jackpot != null && Object.hasOwnProperty.call(m, "Jackpot"))
                w.uint32(56).int64(m.Jackpot);
            if (m.Balance != null && Object.hasOwnProperty.call(m, "Balance"))
                w.uint32(64).int64(m.Balance);
            if (m.TotalFreeSpin != null && Object.hasOwnProperty.call(m, "TotalFreeSpin"))
                w.uint32(72).int32(m.TotalFreeSpin);
            if (m.TotalPriceBonus != null && Object.hasOwnProperty.call(m, "TotalPriceBonus"))
                w.uint32(80).int64(m.TotalPriceBonus);
            if (m.TotalJackpot != null && Object.hasOwnProperty.call(m, "TotalJackpot"))
                w.uint32(88).int64(m.TotalJackpot);
            if (m.ResponseStatus != null && Object.hasOwnProperty.call(m, "ResponseStatus"))
                w.uint32(96).int64(m.ResponseStatus);
            return w;
        };

        GameBilledData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.GameBilledData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SpinID = r.int64();
                    break;
                case 2:
                    if (!(m.SlotsData && m.SlotsData.length))
                        m.SlotsData = [];
                    m.SlotsData.push($root.iceage.IceAgeCards.decode(r, r.uint32()));
                    break;
                case 3:
                    if (!(m.PrizesData && m.PrizesData.length))
                        m.PrizesData = [];
                    m.PrizesData.push($root.iceage.IceAgeLinesInfo.decode(r, r.uint32()));
                    break;
                case 4:
                    m.TotalBetValue = r.int64();
                    break;
                case 5:
                    m.TotalPriceValue = r.int64();
                    break;
                case 6:
                    m.IsJackpot = r.bool();
                    break;
                case 7:
                    m.Jackpot = r.int64();
                    break;
                case 8:
                    m.Balance = r.int64();
                    break;
                case 9:
                    m.TotalFreeSpin = r.int32();
                    break;
                case 10:
                    m.TotalPriceBonus = r.int64();
                    break;
                case 11:
                    m.TotalJackpot = r.int64();
                    break;
                case 12:
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

    iceage.SCIceAgeGameBilled = (function() {

        function SCIceAgeGameBilled(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCIceAgeGameBilled.prototype.BilledData = null;

        SCIceAgeGameBilled.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BilledData != null && Object.hasOwnProperty.call(m, "BilledData"))
                $root.iceage.GameBilledData.encode(m.BilledData, w.uint32(10).fork()).ldelim();
            return w;
        };

        SCIceAgeGameBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.SCIceAgeGameBilled();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.BilledData = $root.iceage.GameBilledData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCIceAgeGameBilled;
    })();

    iceage.IceAgePlayerHistoryInfo = (function() {

        function IceAgePlayerHistoryInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        IceAgePlayerHistoryInfo.prototype.SpinID = "";
        IceAgePlayerHistoryInfo.prototype.CreatedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        IceAgePlayerHistoryInfo.prototype.TotalBetValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        IceAgePlayerHistoryInfo.prototype.TotalPriceValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        IceAgePlayerHistoryInfo.prototype.IsFree = false;
        IceAgePlayerHistoryInfo.prototype.TotalBonusValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        IceAgePlayerHistoryInfo.encode = function encode(m, w) {
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

        IceAgePlayerHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.IceAgePlayerHistoryInfo();
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

        return IceAgePlayerHistoryInfo;
    })();

    iceage.SCIceAgePlayerHistory = (function() {

        function SCIceAgePlayerHistory(p) {
            this.PlayerHistory = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCIceAgePlayerHistory.prototype.PlayerHistory = $util.emptyArray;

        SCIceAgePlayerHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlayerHistory != null && m.PlayerHistory.length) {
                for (var i = 0; i < m.PlayerHistory.length; ++i)
                    $root.iceage.IceAgePlayerHistoryInfo.encode(m.PlayerHistory[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCIceAgePlayerHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.SCIceAgePlayerHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.PlayerHistory && m.PlayerHistory.length))
                        m.PlayerHistory = [];
                    m.PlayerHistory.push($root.iceage.IceAgePlayerHistoryInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCIceAgePlayerHistory;
    })();

    iceage.IceAgeBigWinHistoryInfo = (function() {

        function IceAgeBigWinHistoryInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        IceAgeBigWinHistoryInfo.prototype.SpinID = "";
        IceAgeBigWinHistoryInfo.prototype.CreatedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        IceAgeBigWinHistoryInfo.prototype.RoomID = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        IceAgeBigWinHistoryInfo.prototype.PriceValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        IceAgeBigWinHistoryInfo.prototype.UserName = "";

        IceAgeBigWinHistoryInfo.encode = function encode(m, w) {
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

        IceAgeBigWinHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.IceAgeBigWinHistoryInfo();
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

        return IceAgeBigWinHistoryInfo;
    })();

    iceage.SCIceAgeBigWinHistory = (function() {

        function SCIceAgeBigWinHistory(p) {
            this.BigWinHistory = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCIceAgeBigWinHistory.prototype.BigWinHistory = $util.emptyArray;

        SCIceAgeBigWinHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BigWinHistory != null && m.BigWinHistory.length) {
                for (var i = 0; i < m.BigWinHistory.length; ++i)
                    $root.iceage.IceAgeBigWinHistoryInfo.encode(m.BigWinHistory[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCIceAgeBigWinHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.SCIceAgeBigWinHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.BigWinHistory && m.BigWinHistory.length))
                        m.BigWinHistory = [];
                    m.BigWinHistory.push($root.iceage.IceAgeBigWinHistoryInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCIceAgeBigWinHistory;
    })();

    iceage.SCIceAgeRoomState = (function() {

        function SCIceAgeRoomState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCIceAgeRoomState.prototype.State = 0;

        SCIceAgeRoomState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(8).int32(m.State);
            return w;
        };

        SCIceAgeRoomState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.iceage.SCIceAgeRoomState();
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

        return SCIceAgeRoomState;
    })();

    return iceage;
})();

module.exports = $root;
