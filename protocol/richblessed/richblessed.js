/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.richblessed = (function() {

    var richblessed = {};

    richblessed.RBPID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_RICHBLESSED_ZERO"] = 0;
        values[valuesById[5500] = "PACKET_RICHBLESSED_SCRBRoomInfo"] = 5500;
        values[valuesById[5501] = "PACKET_RICHBLESSED_CSRichBlessedOp"] = 5501;
        values[valuesById[5502] = "PACKET_RICHBLESSED_SCRichBlessedOp"] = 5502;
        values[valuesById[5503] = "PACKET_RICHBLESSED_SCRBRoomState"] = 5503;
        values[valuesById[5504] = "PACKET_RICHBLESSED_SCRBBilled"] = 5504;
        values[valuesById[5505] = "PACKET_RICHBLESSED_SCRBPrize"] = 5505;
        values[valuesById[5506] = "PACKET_RICHBLESSED_SCRBJACKBilled"] = 5506;
        return values;
    })();

    richblessed.RBPlayerData = (function() {

        function RBPlayerData(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RBPlayerData.prototype.Name = "";
        RBPlayerData.prototype.SnId = 0;
        RBPlayerData.prototype.Head = 0;
        RBPlayerData.prototype.Sex = 0;
        RBPlayerData.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RBPlayerData.prototype.Pos = 0;
        RBPlayerData.prototype.Flag = 0;
        RBPlayerData.prototype.Params = $util.emptyArray;
        RBPlayerData.prototype.City = "";
        RBPlayerData.prototype.HeadOutLine = 0;
        RBPlayerData.prototype.VIP = 0;

        RBPlayerData.encode = function encode(m, w) {
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

        RBPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.richblessed.RBPlayerData();
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

        return RBPlayerData;
    })();

    richblessed.RichWinLine = (function() {

        function RichWinLine(p) {
            this.Poss = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RichWinLine.prototype.Poss = $util.emptyArray;
        RichWinLine.prototype.WinScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        RichWinLine.encode = function encode(m, w) {
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
            return w;
        };

        RichWinLine.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.richblessed.RichWinLine();
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
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RichWinLine;
    })();

    richblessed.SCRBRoomInfo = (function() {

        function SCRBRoomInfo(p) {
            this.Params = [];
            this.ParamsEx = [];
            this.Cards = [];
            this.WinLines = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRBRoomInfo.prototype.RoomId = 0;
        SCRBRoomInfo.prototype.GameFreeId = 0;
        SCRBRoomInfo.prototype.GameId = 0;
        SCRBRoomInfo.prototype.RoomMode = 0;
        SCRBRoomInfo.prototype.Params = $util.emptyArray;
        SCRBRoomInfo.prototype.NumOfGames = 0;
        SCRBRoomInfo.prototype.State = 0;
        SCRBRoomInfo.prototype.ParamsEx = $util.emptyArray;
        SCRBRoomInfo.prototype.SceneType = 0;
        SCRBRoomInfo.prototype.Player = null;
        SCRBRoomInfo.prototype.Cards = $util.emptyArray;
        SCRBRoomInfo.prototype.NowGameState = 0;
        SCRBRoomInfo.prototype.BetIdx = 0;
        SCRBRoomInfo.prototype.FreeAllWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBRoomInfo.prototype.SmallJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBRoomInfo.prototype.WinJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBRoomInfo.prototype.WinEleCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBRoomInfo.prototype.WinRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBRoomInfo.prototype.FreeNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBRoomInfo.prototype.AddFreeNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBRoomInfo.prototype.JackpotEle = 0;
        SCRBRoomInfo.prototype.WinLines = $util.emptyArray;
        SCRBRoomInfo.prototype.MiddleJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBRoomInfo.prototype.BigJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBRoomInfo.prototype.GrandJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBRoomInfo.prototype.WinFreeTimes = 0;

        SCRBRoomInfo.encode = function encode(m, w) {
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
                $root.richblessed.RBPlayerData.encode(m.Player, w.uint32(82).fork()).ldelim();
            if (m.Cards != null && m.Cards.length) {
                w.uint32(90).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            if (m.NowGameState != null && Object.hasOwnProperty.call(m, "NowGameState"))
                w.uint32(96).int32(m.NowGameState);
            if (m.BetIdx != null && Object.hasOwnProperty.call(m, "BetIdx"))
                w.uint32(104).int32(m.BetIdx);
            if (m.FreeAllWin != null && Object.hasOwnProperty.call(m, "FreeAllWin"))
                w.uint32(112).int64(m.FreeAllWin);
            if (m.SmallJackpot != null && Object.hasOwnProperty.call(m, "SmallJackpot"))
                w.uint32(120).int64(m.SmallJackpot);
            if (m.WinJackpot != null && Object.hasOwnProperty.call(m, "WinJackpot"))
                w.uint32(128).int64(m.WinJackpot);
            if (m.WinEleCoin != null && Object.hasOwnProperty.call(m, "WinEleCoin"))
                w.uint32(136).int64(m.WinEleCoin);
            if (m.WinRate != null && Object.hasOwnProperty.call(m, "WinRate"))
                w.uint32(144).int64(m.WinRate);
            if (m.FreeNum != null && Object.hasOwnProperty.call(m, "FreeNum"))
                w.uint32(152).int64(m.FreeNum);
            if (m.AddFreeNum != null && Object.hasOwnProperty.call(m, "AddFreeNum"))
                w.uint32(160).int64(m.AddFreeNum);
            if (m.JackpotEle != null && Object.hasOwnProperty.call(m, "JackpotEle"))
                w.uint32(168).int32(m.JackpotEle);
            if (m.WinLines != null && m.WinLines.length) {
                for (var i = 0; i < m.WinLines.length; ++i)
                    $root.richblessed.RichWinLine.encode(m.WinLines[i], w.uint32(178).fork()).ldelim();
            }
            if (m.MiddleJackpot != null && Object.hasOwnProperty.call(m, "MiddleJackpot"))
                w.uint32(184).int64(m.MiddleJackpot);
            if (m.BigJackpot != null && Object.hasOwnProperty.call(m, "BigJackpot"))
                w.uint32(192).int64(m.BigJackpot);
            if (m.GrandJackpot != null && Object.hasOwnProperty.call(m, "GrandJackpot"))
                w.uint32(200).int64(m.GrandJackpot);
            if (m.WinFreeTimes != null && Object.hasOwnProperty.call(m, "WinFreeTimes"))
                w.uint32(208).int32(m.WinFreeTimes);
            return w;
        };

        SCRBRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.richblessed.SCRBRoomInfo();
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
                    m.Player = $root.richblessed.RBPlayerData.decode(r, r.uint32());
                    break;
                case 11:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                case 12:
                    m.NowGameState = r.int32();
                    break;
                case 13:
                    m.BetIdx = r.int32();
                    break;
                case 14:
                    m.FreeAllWin = r.int64();
                    break;
                case 15:
                    m.SmallJackpot = r.int64();
                    break;
                case 16:
                    m.WinJackpot = r.int64();
                    break;
                case 17:
                    m.WinEleCoin = r.int64();
                    break;
                case 18:
                    m.WinRate = r.int64();
                    break;
                case 19:
                    m.FreeNum = r.int64();
                    break;
                case 20:
                    m.AddFreeNum = r.int64();
                    break;
                case 21:
                    m.JackpotEle = r.int32();
                    break;
                case 22:
                    if (!(m.WinLines && m.WinLines.length))
                        m.WinLines = [];
                    m.WinLines.push($root.richblessed.RichWinLine.decode(r, r.uint32()));
                    break;
                case 23:
                    m.MiddleJackpot = r.int64();
                    break;
                case 24:
                    m.BigJackpot = r.int64();
                    break;
                case 25:
                    m.GrandJackpot = r.int64();
                    break;
                case 26:
                    m.WinFreeTimes = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRBRoomInfo;
    })();

    richblessed.CSRichBlessedOp = (function() {

        function CSRichBlessedOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSRichBlessedOp.prototype.OpCode = 0;
        CSRichBlessedOp.prototype.Params = $util.emptyArray;

        CSRichBlessedOp.encode = function encode(m, w) {
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

        CSRichBlessedOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.richblessed.CSRichBlessedOp();
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

        return CSRichBlessedOp;
    })();

    richblessed.SCRichBlessedOp = (function() {

        function SCRichBlessedOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRichBlessedOp.prototype.OpCode = 0;
        SCRichBlessedOp.prototype.OpRetCode = 0;
        SCRichBlessedOp.prototype.Params = $util.emptyArray;

        SCRichBlessedOp.encode = function encode(m, w) {
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

        SCRichBlessedOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.richblessed.SCRichBlessedOp();
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

        return SCRichBlessedOp;
    })();

    richblessed.SCRBRoomState = (function() {

        function SCRBRoomState(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRBRoomState.prototype.State = 0;
        SCRBRoomState.prototype.SubState = 0;
        SCRBRoomState.prototype.Params = $util.emptyArray;

        SCRBRoomState.encode = function encode(m, w) {
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

        SCRBRoomState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.richblessed.SCRBRoomState();
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

        return SCRBRoomState;
    })();

    richblessed.SCRBPrize = (function() {

        function SCRBPrize(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRBPrize.prototype.PrizePool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCRBPrize.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PrizePool != null && Object.hasOwnProperty.call(m, "PrizePool"))
                w.uint32(8).int64(m.PrizePool);
            return w;
        };

        SCRBPrize.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.richblessed.SCRBPrize();
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

        return SCRBPrize;
    })();

    richblessed.SCRBBilled = (function() {

        function SCRBBilled(p) {
            this.Cards = [];
            this.WinLines = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRBBilled.prototype.NowGameState = 0;
        SCRBBilled.prototype.BetIdx = 0;
        SCRBBilled.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBBilled.prototype.Cards = $util.emptyArray;
        SCRBBilled.prototype.FreeAllWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBBilled.prototype.SmallJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBBilled.prototype.WinJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBBilled.prototype.WinEleCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBBilled.prototype.WinRate = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBBilled.prototype.FreeNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBBilled.prototype.AddFreeNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBBilled.prototype.JackpotEle = 0;
        SCRBBilled.prototype.WinLines = $util.emptyArray;
        SCRBBilled.prototype.MiddleJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBBilled.prototype.BigJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBBilled.prototype.GrandJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRBBilled.prototype.WinFreeTimes = 0;

        SCRBBilled.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.NowGameState != null && Object.hasOwnProperty.call(m, "NowGameState"))
                w.uint32(8).int32(m.NowGameState);
            if (m.BetIdx != null && Object.hasOwnProperty.call(m, "BetIdx"))
                w.uint32(16).int32(m.BetIdx);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(24).int64(m.Coin);
            if (m.Cards != null && m.Cards.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            if (m.FreeAllWin != null && Object.hasOwnProperty.call(m, "FreeAllWin"))
                w.uint32(40).int64(m.FreeAllWin);
            if (m.SmallJackpot != null && Object.hasOwnProperty.call(m, "SmallJackpot"))
                w.uint32(48).int64(m.SmallJackpot);
            if (m.WinJackpot != null && Object.hasOwnProperty.call(m, "WinJackpot"))
                w.uint32(56).int64(m.WinJackpot);
            if (m.WinEleCoin != null && Object.hasOwnProperty.call(m, "WinEleCoin"))
                w.uint32(64).int64(m.WinEleCoin);
            if (m.WinRate != null && Object.hasOwnProperty.call(m, "WinRate"))
                w.uint32(72).int64(m.WinRate);
            if (m.FreeNum != null && Object.hasOwnProperty.call(m, "FreeNum"))
                w.uint32(80).int64(m.FreeNum);
            if (m.AddFreeNum != null && Object.hasOwnProperty.call(m, "AddFreeNum"))
                w.uint32(88).int64(m.AddFreeNum);
            if (m.JackpotEle != null && Object.hasOwnProperty.call(m, "JackpotEle"))
                w.uint32(96).int32(m.JackpotEle);
            if (m.WinLines != null && m.WinLines.length) {
                for (var i = 0; i < m.WinLines.length; ++i)
                    $root.richblessed.RichWinLine.encode(m.WinLines[i], w.uint32(106).fork()).ldelim();
            }
            if (m.MiddleJackpot != null && Object.hasOwnProperty.call(m, "MiddleJackpot"))
                w.uint32(112).int64(m.MiddleJackpot);
            if (m.BigJackpot != null && Object.hasOwnProperty.call(m, "BigJackpot"))
                w.uint32(120).int64(m.BigJackpot);
            if (m.GrandJackpot != null && Object.hasOwnProperty.call(m, "GrandJackpot"))
                w.uint32(128).int64(m.GrandJackpot);
            if (m.WinFreeTimes != null && Object.hasOwnProperty.call(m, "WinFreeTimes"))
                w.uint32(136).int32(m.WinFreeTimes);
            return w;
        };

        SCRBBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.richblessed.SCRBBilled();
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
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                case 5:
                    m.FreeAllWin = r.int64();
                    break;
                case 6:
                    m.SmallJackpot = r.int64();
                    break;
                case 7:
                    m.WinJackpot = r.int64();
                    break;
                case 8:
                    m.WinEleCoin = r.int64();
                    break;
                case 9:
                    m.WinRate = r.int64();
                    break;
                case 10:
                    m.FreeNum = r.int64();
                    break;
                case 11:
                    m.AddFreeNum = r.int64();
                    break;
                case 12:
                    m.JackpotEle = r.int32();
                    break;
                case 13:
                    if (!(m.WinLines && m.WinLines.length))
                        m.WinLines = [];
                    m.WinLines.push($root.richblessed.RichWinLine.decode(r, r.uint32()));
                    break;
                case 14:
                    m.MiddleJackpot = r.int64();
                    break;
                case 15:
                    m.BigJackpot = r.int64();
                    break;
                case 16:
                    m.GrandJackpot = r.int64();
                    break;
                case 17:
                    m.WinFreeTimes = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRBBilled;
    })();

    return richblessed;
})();

module.exports = $root;
