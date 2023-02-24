/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.fruits = (function() {

    var fruits = {};

    fruits.FruitsPID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_FRUITS_ZERO"] = 0;
        values[valuesById[5490] = "PACKET_FRUITS_SCFruitsRoomInfo"] = 5490;
        values[valuesById[5491] = "PACKET_FRUITS_CSFruitsOp"] = 5491;
        values[valuesById[5492] = "PACKET_FRUITS_SCFruitsOp"] = 5492;
        values[valuesById[5493] = "PACKET_FRUITS_SCFruitsRoomState"] = 5493;
        values[valuesById[5494] = "PACKET_FRUITS_SCFruitsBilled"] = 5494;
        values[valuesById[5495] = "PACKET_FRUITS_SCFruitsMaryBilled"] = 5495;
        values[valuesById[5496] = "PACKET_FRUITS_SCFruitsPrize"] = 5496;
        return values;
    })();

    fruits.FruitsPlayerData = (function() {

        function FruitsPlayerData(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FruitsPlayerData.prototype.Name = "";
        FruitsPlayerData.prototype.SnId = 0;
        FruitsPlayerData.prototype.Head = 0;
        FruitsPlayerData.prototype.Sex = 0;
        FruitsPlayerData.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        FruitsPlayerData.prototype.Pos = 0;
        FruitsPlayerData.prototype.Flag = 0;
        FruitsPlayerData.prototype.Params = $util.emptyArray;
        FruitsPlayerData.prototype.City = "";
        FruitsPlayerData.prototype.HeadOutLine = 0;
        FruitsPlayerData.prototype.VIP = 0;

        FruitsPlayerData.encode = function encode(m, w) {
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
            if (m.Params != null && m.Params.length) {
                for (var i = 0; i < m.Params.length; ++i)
                    w.uint32(66).string(m.Params[i]);
            }
            if (m.City != null && Object.hasOwnProperty.call(m, "City"))
                w.uint32(74).string(m.City);
            if (m.HeadOutLine != null && Object.hasOwnProperty.call(m, "HeadOutLine"))
                w.uint32(80).int32(m.HeadOutLine);
            if (m.VIP != null && Object.hasOwnProperty.call(m, "VIP"))
                w.uint32(88).int32(m.VIP);
            return w;
        };

        FruitsPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fruits.FruitsPlayerData();
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
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    m.Params.push(r.string());
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
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FruitsPlayerData;
    })();

    fruits.FruitsWinLine = (function() {

        function FruitsWinLine(p) {
            this.Poss = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FruitsWinLine.prototype.Poss = $util.emptyArray;
        FruitsWinLine.prototype.WinScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        FruitsWinLine.prototype.LineId = 0;

        FruitsWinLine.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Poss != null && m.Poss.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.Poss.length; ++i)
                    w.int32(m.Poss[i]);
                w.ldelim();
            }
            if (m.WinScore != null && Object.hasOwnProperty.call(m, "WinScore"))
                w.uint32(16).int64(m.WinScore);
            if (m.LineId != null && Object.hasOwnProperty.call(m, "LineId"))
                w.uint32(24).int32(m.LineId);
            return w;
        };

        FruitsWinLine.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fruits.FruitsWinLine();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Poss && m.Poss.length))
                        m.Poss = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Poss.push(r.int32());
                    } else
                        m.Poss.push(r.int32());
                    break;
                case 2:
                    m.WinScore = r.int64();
                    break;
                case 3:
                    m.LineId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FruitsWinLine;
    })();

    fruits.SCFruitsRoomInfo = (function() {

        function SCFruitsRoomInfo(p) {
            this.Params = [];
            this.ParamsEx = [];
            this.Cards = [];
            this.MaryCards = [];
            this.WinLines = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFruitsRoomInfo.prototype.RoomId = 0;
        SCFruitsRoomInfo.prototype.GameFreeId = 0;
        SCFruitsRoomInfo.prototype.GameId = 0;
        SCFruitsRoomInfo.prototype.RoomMode = 0;
        SCFruitsRoomInfo.prototype.Params = $util.emptyArray;
        SCFruitsRoomInfo.prototype.NumOfGames = 0;
        SCFruitsRoomInfo.prototype.State = 0;
        SCFruitsRoomInfo.prototype.ParamsEx = $util.emptyArray;
        SCFruitsRoomInfo.prototype.SceneType = 0;
        SCFruitsRoomInfo.prototype.Player = null;
        SCFruitsRoomInfo.prototype.NowGameState = 0;
        SCFruitsRoomInfo.prototype.BetIdx = 0;
        SCFruitsRoomInfo.prototype.FreeTimes = 0;
        SCFruitsRoomInfo.prototype.MaryFreeTimes = 0;
        SCFruitsRoomInfo.prototype.MaryTotalWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsRoomInfo.prototype.Cards = $util.emptyArray;
        SCFruitsRoomInfo.prototype.MaryWinId = 0;
        SCFruitsRoomInfo.prototype.MaryCards = $util.emptyArray;
        SCFruitsRoomInfo.prototype.WinLineCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsRoomInfo.prototype.WinJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsRoomInfo.prototype.WinEle777Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsRoomInfo.prototype.FreeTotalWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsRoomInfo.prototype.WinRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsRoomInfo.prototype.WinFreeTimes = 0;
        SCFruitsRoomInfo.prototype.WinLines = $util.emptyArray;

        SCFruitsRoomInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(16).int32(m.GameFreeId);
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
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(56).int32(m.State);
            if (m.ParamsEx != null && m.ParamsEx.length) {
                w.uint32(66).fork();
                for (var i = 0; i < m.ParamsEx.length; ++i)
                    w.int32(m.ParamsEx[i]);
                w.ldelim();
            }
            if (m.SceneType != null && Object.hasOwnProperty.call(m, "SceneType"))
                w.uint32(72).int32(m.SceneType);
            if (m.Player != null && Object.hasOwnProperty.call(m, "Player"))
                $root.fruits.FruitsPlayerData.encode(m.Player, w.uint32(82).fork()).ldelim();
            if (m.NowGameState != null && Object.hasOwnProperty.call(m, "NowGameState"))
                w.uint32(88).int32(m.NowGameState);
            if (m.BetIdx != null && Object.hasOwnProperty.call(m, "BetIdx"))
                w.uint32(96).int32(m.BetIdx);
            if (m.FreeTimes != null && Object.hasOwnProperty.call(m, "FreeTimes"))
                w.uint32(104).int32(m.FreeTimes);
            if (m.MaryFreeTimes != null && Object.hasOwnProperty.call(m, "MaryFreeTimes"))
                w.uint32(112).int32(m.MaryFreeTimes);
            if (m.MaryTotalWin != null && Object.hasOwnProperty.call(m, "MaryTotalWin"))
                w.uint32(120).int64(m.MaryTotalWin);
            if (m.Cards != null && m.Cards.length) {
                w.uint32(130).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            if (m.MaryWinId != null && Object.hasOwnProperty.call(m, "MaryWinId"))
                w.uint32(136).int32(m.MaryWinId);
            if (m.MaryCards != null && m.MaryCards.length) {
                w.uint32(146).fork();
                for (var i = 0; i < m.MaryCards.length; ++i)
                    w.int32(m.MaryCards[i]);
                w.ldelim();
            }
            if (m.WinLineCoin != null && Object.hasOwnProperty.call(m, "WinLineCoin"))
                w.uint32(152).int64(m.WinLineCoin);
            if (m.WinJackpot != null && Object.hasOwnProperty.call(m, "WinJackpot"))
                w.uint32(160).int64(m.WinJackpot);
            if (m.WinEle777Coin != null && Object.hasOwnProperty.call(m, "WinEle777Coin"))
                w.uint32(168).int64(m.WinEle777Coin);
            if (m.FreeTotalWin != null && Object.hasOwnProperty.call(m, "FreeTotalWin"))
                w.uint32(176).int64(m.FreeTotalWin);
            if (m.WinRate != null && Object.hasOwnProperty.call(m, "WinRate"))
                w.uint32(184).int64(m.WinRate);
            if (m.WinFreeTimes != null && Object.hasOwnProperty.call(m, "WinFreeTimes"))
                w.uint32(192).int32(m.WinFreeTimes);
            if (m.WinLines != null && m.WinLines.length) {
                for (var i = 0; i < m.WinLines.length; ++i)
                    $root.fruits.FruitsWinLine.encode(m.WinLines[i], w.uint32(202).fork()).ldelim();
            }
            return w;
        };

        SCFruitsRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fruits.SCFruitsRoomInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.GameFreeId = r.int32();
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
                    m.State = r.int32();
                    break;
                case 8:
                    if (!(m.ParamsEx && m.ParamsEx.length))
                        m.ParamsEx = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ParamsEx.push(r.int32());
                    } else
                        m.ParamsEx.push(r.int32());
                    break;
                case 9:
                    m.SceneType = r.int32();
                    break;
                case 10:
                    m.Player = $root.fruits.FruitsPlayerData.decode(r, r.uint32());
                    break;
                case 11:
                    m.NowGameState = r.int32();
                    break;
                case 12:
                    m.BetIdx = r.int32();
                    break;
                case 13:
                    m.FreeTimes = r.int32();
                    break;
                case 14:
                    m.MaryFreeTimes = r.int32();
                    break;
                case 15:
                    m.MaryTotalWin = r.int64();
                    break;
                case 16:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                case 17:
                    m.MaryWinId = r.int32();
                    break;
                case 18:
                    if (!(m.MaryCards && m.MaryCards.length))
                        m.MaryCards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MaryCards.push(r.int32());
                    } else
                        m.MaryCards.push(r.int32());
                    break;
                case 19:
                    m.WinLineCoin = r.int64();
                    break;
                case 20:
                    m.WinJackpot = r.int64();
                    break;
                case 21:
                    m.WinEle777Coin = r.int64();
                    break;
                case 22:
                    m.FreeTotalWin = r.int64();
                    break;
                case 23:
                    m.WinRate = r.int64();
                    break;
                case 24:
                    m.WinFreeTimes = r.int32();
                    break;
                case 25:
                    if (!(m.WinLines && m.WinLines.length))
                        m.WinLines = [];
                    m.WinLines.push($root.fruits.FruitsWinLine.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFruitsRoomInfo;
    })();

    fruits.CSFruitsOp = (function() {

        function CSFruitsOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSFruitsOp.prototype.OpCode = 0;
        CSFruitsOp.prototype.Params = $util.emptyArray;

        CSFruitsOp.encode = function encode(m, w) {
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

        CSFruitsOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fruits.CSFruitsOp();
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

        return CSFruitsOp;
    })();

    fruits.SCFruitsOp = (function() {

        function SCFruitsOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFruitsOp.prototype.OpCode = 0;
        SCFruitsOp.prototype.OpRetCode = 0;
        SCFruitsOp.prototype.Params = $util.emptyArray;

        SCFruitsOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(16).int32(m.OpRetCode);
            if (m.Params != null && m.Params.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int64(m.Params[i]);
                w.ldelim();
            }
            return w;
        };

        SCFruitsOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fruits.SCFruitsOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    m.OpRetCode = r.int32();
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
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFruitsOp;
    })();

    fruits.SCFruitsRoomState = (function() {

        function SCFruitsRoomState(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFruitsRoomState.prototype.State = 0;
        SCFruitsRoomState.prototype.SubState = 0;
        SCFruitsRoomState.prototype.Params = $util.emptyArray;

        SCFruitsRoomState.encode = function encode(m, w) {
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

        SCFruitsRoomState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fruits.SCFruitsRoomState();
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

        return SCFruitsRoomState;
    })();

    fruits.SCFruitsPrize = (function() {

        function SCFruitsPrize(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFruitsPrize.prototype.PrizePool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCFruitsPrize.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PrizePool != null && Object.hasOwnProperty.call(m, "PrizePool"))
                w.uint32(8).int64(m.PrizePool);
            return w;
        };

        SCFruitsPrize.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fruits.SCFruitsPrize();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PrizePool = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFruitsPrize;
    })();

    fruits.SCFruitsBilled = (function() {

        function SCFruitsBilled(p) {
            this.Cards = [];
            this.WinLines = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFruitsBilled.prototype.NowGameState = 0;
        SCFruitsBilled.prototype.BetIdx = 0;
        SCFruitsBilled.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsBilled.prototype.FreeTotalWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsBilled.prototype.Jackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsBilled.prototype.WinJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsBilled.prototype.WinEle777Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsBilled.prototype.WinRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsBilled.prototype.Cards = $util.emptyArray;
        SCFruitsBilled.prototype.WinLines = $util.emptyArray;
        SCFruitsBilled.prototype.FreeTimes = 0;
        SCFruitsBilled.prototype.MaryFreeTimes = 0;
        SCFruitsBilled.prototype.WinFreeTimes = 0;
        SCFruitsBilled.prototype.WinLineCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCFruitsBilled.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.NowGameState != null && Object.hasOwnProperty.call(m, "NowGameState"))
                w.uint32(8).int32(m.NowGameState);
            if (m.BetIdx != null && Object.hasOwnProperty.call(m, "BetIdx"))
                w.uint32(16).int32(m.BetIdx);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(24).int64(m.Coin);
            if (m.FreeTotalWin != null && Object.hasOwnProperty.call(m, "FreeTotalWin"))
                w.uint32(32).int64(m.FreeTotalWin);
            if (m.Jackpot != null && Object.hasOwnProperty.call(m, "Jackpot"))
                w.uint32(40).int64(m.Jackpot);
            if (m.WinJackpot != null && Object.hasOwnProperty.call(m, "WinJackpot"))
                w.uint32(48).int64(m.WinJackpot);
            if (m.WinEle777Coin != null && Object.hasOwnProperty.call(m, "WinEle777Coin"))
                w.uint32(56).int64(m.WinEle777Coin);
            if (m.WinRate != null && Object.hasOwnProperty.call(m, "WinRate"))
                w.uint32(64).int64(m.WinRate);
            if (m.Cards != null && m.Cards.length) {
                w.uint32(74).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            if (m.WinLines != null && m.WinLines.length) {
                for (var i = 0; i < m.WinLines.length; ++i)
                    $root.fruits.FruitsWinLine.encode(m.WinLines[i], w.uint32(82).fork()).ldelim();
            }
            if (m.FreeTimes != null && Object.hasOwnProperty.call(m, "FreeTimes"))
                w.uint32(88).int32(m.FreeTimes);
            if (m.MaryFreeTimes != null && Object.hasOwnProperty.call(m, "MaryFreeTimes"))
                w.uint32(96).int32(m.MaryFreeTimes);
            if (m.WinFreeTimes != null && Object.hasOwnProperty.call(m, "WinFreeTimes"))
                w.uint32(104).int32(m.WinFreeTimes);
            if (m.WinLineCoin != null && Object.hasOwnProperty.call(m, "WinLineCoin"))
                w.uint32(112).int64(m.WinLineCoin);
            return w;
        };

        SCFruitsBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fruits.SCFruitsBilled();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.NowGameState = r.int32();
                    break;
                case 2:
                    m.BetIdx = r.int32();
                    break;
                case 3:
                    m.Coin = r.int64();
                    break;
                case 4:
                    m.FreeTotalWin = r.int64();
                    break;
                case 5:
                    m.Jackpot = r.int64();
                    break;
                case 6:
                    m.WinJackpot = r.int64();
                    break;
                case 7:
                    m.WinEle777Coin = r.int64();
                    break;
                case 8:
                    m.WinRate = r.int64();
                    break;
                case 9:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                case 10:
                    if (!(m.WinLines && m.WinLines.length))
                        m.WinLines = [];
                    m.WinLines.push($root.fruits.FruitsWinLine.decode(r, r.uint32()));
                    break;
                case 11:
                    m.FreeTimes = r.int32();
                    break;
                case 12:
                    m.MaryFreeTimes = r.int32();
                    break;
                case 13:
                    m.WinFreeTimes = r.int32();
                    break;
                case 14:
                    m.WinLineCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFruitsBilled;
    })();

    fruits.SCFruitsMaryBilled = (function() {

        function SCFruitsMaryBilled(p) {
            this.MaryCards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFruitsMaryBilled.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsMaryBilled.prototype.FreeTotalWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsMaryBilled.prototype.MaryOutTotalWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsMaryBilled.prototype.MaryMidTotalWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsMaryBilled.prototype.MaryWinCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCFruitsMaryBilled.prototype.MaryWinId = 0;
        SCFruitsMaryBilled.prototype.MaryCards = $util.emptyArray;
        SCFruitsMaryBilled.prototype.MaryFreeTimes = 0;

        SCFruitsMaryBilled.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(8).int64(m.Coin);
            if (m.FreeTotalWin != null && Object.hasOwnProperty.call(m, "FreeTotalWin"))
                w.uint32(16).int64(m.FreeTotalWin);
            if (m.MaryOutTotalWin != null && Object.hasOwnProperty.call(m, "MaryOutTotalWin"))
                w.uint32(24).int64(m.MaryOutTotalWin);
            if (m.MaryMidTotalWin != null && Object.hasOwnProperty.call(m, "MaryMidTotalWin"))
                w.uint32(32).int64(m.MaryMidTotalWin);
            if (m.MaryWinCoin != null && Object.hasOwnProperty.call(m, "MaryWinCoin"))
                w.uint32(40).int64(m.MaryWinCoin);
            if (m.MaryWinId != null && Object.hasOwnProperty.call(m, "MaryWinId"))
                w.uint32(48).int32(m.MaryWinId);
            if (m.MaryCards != null && m.MaryCards.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.MaryCards.length; ++i)
                    w.int32(m.MaryCards[i]);
                w.ldelim();
            }
            if (m.MaryFreeTimes != null && Object.hasOwnProperty.call(m, "MaryFreeTimes"))
                w.uint32(64).int32(m.MaryFreeTimes);
            return w;
        };

        SCFruitsMaryBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.fruits.SCFruitsMaryBilled();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Coin = r.int64();
                    break;
                case 2:
                    m.FreeTotalWin = r.int64();
                    break;
                case 3:
                    m.MaryOutTotalWin = r.int64();
                    break;
                case 4:
                    m.MaryMidTotalWin = r.int64();
                    break;
                case 5:
                    m.MaryWinCoin = r.int64();
                    break;
                case 6:
                    m.MaryWinId = r.int32();
                    break;
                case 7:
                    if (!(m.MaryCards && m.MaryCards.length))
                        m.MaryCards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MaryCards.push(r.int32());
                    } else
                        m.MaryCards.push(r.int32());
                    break;
                case 8:
                    m.MaryFreeTimes = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFruitsMaryBilled;
    })();

    return fruits;
})();

module.exports = $root;
