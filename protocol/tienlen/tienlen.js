/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tienlen = (function() {

    var tienlen = {};

    tienlen.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        return values;
    })();

    tienlen.TienLenPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_TienLenZERO"] = 0;
        values[valuesById[5370] = "PACKET_SCTienLenRoomInfo"] = 5370;
        values[valuesById[5371] = "PACKET_SCTienLenRoomState"] = 5371;
        values[valuesById[5372] = "PACKET_CSTienLenPlayerOp"] = 5372;
        values[valuesById[5373] = "PACKET_SCTienLenPlayerOp"] = 5373;
        values[valuesById[5374] = "PACKET_SCTienLenPlayerEnter"] = 5374;
        values[valuesById[5375] = "PACKET_SCTienLenPlayerLeave"] = 5375;
        values[valuesById[5376] = "PACKET_SCTienLenCard"] = 5376;
        values[valuesById[5377] = "PACKET_SCTienLenGameBilled"] = 5377;
        values[valuesById[5378] = "PACKET_SCTienLenCurOpPos"] = 5378;
        values[valuesById[5379] = "PACKET_SCTienLenSmallGameBilled"] = 5379;
        values[valuesById[5380] = "PACKET_SCTienLenUpdateMasterSnid"] = 5380;
        values[valuesById[5381] = "PACKET_SCTienLenUpdateAudienceNum"] = 5381;
        values[valuesById[5382] = "PACKET_SCTienLenAI"] = 5382;
        values[valuesById[5383] = "PACKET_SCTienLenFirstOpPos"] = 5383;
        return values;
    })();

    tienlen.TienLenPlayerData = (function() {

        function TienLenPlayerData(p) {
            this.Params = [];
            this.Cards = [];
            this.Items = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TienLenPlayerData.prototype.Name = "";
        TienLenPlayerData.prototype.SnId = 0;
        TienLenPlayerData.prototype.Head = 0;
        TienLenPlayerData.prototype.Sex = 0;
        TienLenPlayerData.prototype.Params = $util.emptyArray;
        TienLenPlayerData.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TienLenPlayerData.prototype.Pos = 0;
        TienLenPlayerData.prototype.Flag = 0;
        TienLenPlayerData.prototype.Longitude = 0;
        TienLenPlayerData.prototype.Latitude = 0;
        TienLenPlayerData.prototype.City = "";
        TienLenPlayerData.prototype.LastOp = 0;
        TienLenPlayerData.prototype.VIP = 0;
        TienLenPlayerData.prototype.HeadOutLine = 0;
        TienLenPlayerData.prototype.NiceId = 0;
        TienLenPlayerData.prototype.Cards = $util.emptyArray;
        TienLenPlayerData.prototype.CurRoundTotalBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TienLenPlayerData.prototype.GameCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TienLenPlayerData.prototype.RoleId = 0;
        TienLenPlayerData.prototype.Items = $util.emptyObject;
        TienLenPlayerData.prototype.MatchRankId = 0;
        TienLenPlayerData.prototype.Lv = 0;

        TienLenPlayerData.encode = function encode(m, w) {
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
            if (m.Params != null && m.Params.length) {
                for (var i = 0; i < m.Params.length; ++i)
                    w.uint32(42).string(m.Params[i]);
            }
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(48).int64(m.Coin);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(56).int32(m.Pos);
            if (m.Flag != null && Object.hasOwnProperty.call(m, "Flag"))
                w.uint32(64).int32(m.Flag);
            if (m.Longitude != null && Object.hasOwnProperty.call(m, "Longitude"))
                w.uint32(72).int32(m.Longitude);
            if (m.Latitude != null && Object.hasOwnProperty.call(m, "Latitude"))
                w.uint32(80).int32(m.Latitude);
            if (m.City != null && Object.hasOwnProperty.call(m, "City"))
                w.uint32(90).string(m.City);
            if (m.LastOp != null && Object.hasOwnProperty.call(m, "LastOp"))
                w.uint32(96).int32(m.LastOp);
            if (m.VIP != null && Object.hasOwnProperty.call(m, "VIP"))
                w.uint32(104).int32(m.VIP);
            if (m.HeadOutLine != null && Object.hasOwnProperty.call(m, "HeadOutLine"))
                w.uint32(112).int32(m.HeadOutLine);
            if (m.NiceId != null && Object.hasOwnProperty.call(m, "NiceId"))
                w.uint32(120).int32(m.NiceId);
            if (m.Cards != null && m.Cards.length) {
                w.uint32(130).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            if (m.CurRoundTotalBet != null && Object.hasOwnProperty.call(m, "CurRoundTotalBet"))
                w.uint32(136).int64(m.CurRoundTotalBet);
            if (m.GameCoin != null && Object.hasOwnProperty.call(m, "GameCoin"))
                w.uint32(144).int64(m.GameCoin);
            if (m.RoleId != null && Object.hasOwnProperty.call(m, "RoleId"))
                w.uint32(152).int32(m.RoleId);
            if (m.Items != null && Object.hasOwnProperty.call(m, "Items")) {
                for (var ks = Object.keys(m.Items), i = 0; i < ks.length; ++i) {
                    w.uint32(162).fork().uint32(8).int32(ks[i]).uint32(16).int32(m.Items[ks[i]]).ldelim();
                }
            }
            if (m.MatchRankId != null && Object.hasOwnProperty.call(m, "MatchRankId"))
                w.uint32(168).int32(m.MatchRankId);
            if (m.Lv != null && Object.hasOwnProperty.call(m, "Lv"))
                w.uint32(176).int32(m.Lv);
            return w;
        };

        TienLenPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.TienLenPlayerData(), k;
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
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    m.Params.push(r.string());
                    break;
                case 6:
                    m.Coin = r.int64();
                    break;
                case 7:
                    m.Pos = r.int32();
                    break;
                case 8:
                    m.Flag = r.int32();
                    break;
                case 9:
                    m.Longitude = r.int32();
                    break;
                case 10:
                    m.Latitude = r.int32();
                    break;
                case 11:
                    m.City = r.string();
                    break;
                case 12:
                    m.LastOp = r.int32();
                    break;
                case 13:
                    m.VIP = r.int32();
                    break;
                case 14:
                    m.HeadOutLine = r.int32();
                    break;
                case 15:
                    m.NiceId = r.int32();
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
                    m.CurRoundTotalBet = r.int64();
                    break;
                case 18:
                    m.GameCoin = r.int64();
                    break;
                case 19:
                    m.RoleId = r.int32();
                    break;
                case 20:
                    r.skip().pos++;
                    if (m.Items === $util.emptyObject)
                        m.Items = {};
                    k = r.int32();
                    r.pos++;
                    m.Items[k] = r.int32();
                    break;
                case 21:
                    m.MatchRankId = r.int32();
                    break;
                case 22:
                    m.Lv = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TienLenPlayerData;
    })();

    tienlen.LastDelCard = (function() {

        function LastDelCard(p) {
            this.Cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        LastDelCard.prototype.Cards = $util.emptyArray;

        LastDelCard.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Cards != null && m.Cards.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            return w;
        };

        LastDelCard.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.LastDelCard();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LastDelCard;
    })();

    tienlen.SCTienLenRoomInfo = (function() {

        function SCTienLenRoomInfo(p) {
            this.Params = [];
            this.Players = [];
            this.LastDelCards = [];
            this.WinSnids = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenRoomInfo.prototype.RoomId = 0;
        SCTienLenRoomInfo.prototype.Creator = 0;
        SCTienLenRoomInfo.prototype.GameId = 0;
        SCTienLenRoomInfo.prototype.RoomMode = 0;
        SCTienLenRoomInfo.prototype.Params = $util.emptyArray;
        SCTienLenRoomInfo.prototype.BankerPos = 0;
        SCTienLenRoomInfo.prototype.State = 0;
        SCTienLenRoomInfo.prototype.TimeOut = 0;
        SCTienLenRoomInfo.prototype.Players = $util.emptyArray;
        SCTienLenRoomInfo.prototype.AudienceNum = 0;
        SCTienLenRoomInfo.prototype.CurOpIdx = 0;
        SCTienLenRoomInfo.prototype.LastDelCards = $util.emptyArray;
        SCTienLenRoomInfo.prototype.NumOfGames = 0;
        SCTienLenRoomInfo.prototype.TotalOfGames = 0;
        SCTienLenRoomInfo.prototype.MasterSnid = 0;
        SCTienLenRoomInfo.prototype.BaseScore = 0;
        SCTienLenRoomInfo.prototype.MaxPlayerNum = 0;
        SCTienLenRoomInfo.prototype.WinSnids = $util.emptyArray;
        SCTienLenRoomInfo.prototype.IsMatch = 0;
        SCTienLenRoomInfo.prototype.Round = 0;
        SCTienLenRoomInfo.prototype.CurPlayerNum = 0;
        SCTienLenRoomInfo.prototype.NextNeed = 0;
        SCTienLenRoomInfo.prototype.MatchFinals = 0;

        SCTienLenRoomInfo.encode = function encode(m, w) {
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
            if (m.BankerPos != null && Object.hasOwnProperty.call(m, "BankerPos"))
                w.uint32(48).int32(m.BankerPos);
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(56).int32(m.State);
            if (m.TimeOut != null && Object.hasOwnProperty.call(m, "TimeOut"))
                w.uint32(64).int32(m.TimeOut);
            if (m.Players != null && m.Players.length) {
                for (var i = 0; i < m.Players.length; ++i)
                    $root.tienlen.TienLenPlayerData.encode(m.Players[i], w.uint32(74).fork()).ldelim();
            }
            if (m.AudienceNum != null && Object.hasOwnProperty.call(m, "AudienceNum"))
                w.uint32(88).int32(m.AudienceNum);
            if (m.CurOpIdx != null && Object.hasOwnProperty.call(m, "CurOpIdx"))
                w.uint32(96).int32(m.CurOpIdx);
            if (m.LastDelCards != null && m.LastDelCards.length) {
                for (var i = 0; i < m.LastDelCards.length; ++i)
                    $root.tienlen.LastDelCard.encode(m.LastDelCards[i], w.uint32(106).fork()).ldelim();
            }
            if (m.NumOfGames != null && Object.hasOwnProperty.call(m, "NumOfGames"))
                w.uint32(112).int32(m.NumOfGames);
            if (m.TotalOfGames != null && Object.hasOwnProperty.call(m, "TotalOfGames"))
                w.uint32(120).int32(m.TotalOfGames);
            if (m.MasterSnid != null && Object.hasOwnProperty.call(m, "MasterSnid"))
                w.uint32(128).int32(m.MasterSnid);
            if (m.BaseScore != null && Object.hasOwnProperty.call(m, "BaseScore"))
                w.uint32(136).int32(m.BaseScore);
            if (m.MaxPlayerNum != null && Object.hasOwnProperty.call(m, "MaxPlayerNum"))
                w.uint32(144).int32(m.MaxPlayerNum);
            if (m.WinSnids != null && m.WinSnids.length) {
                w.uint32(154).fork();
                for (var i = 0; i < m.WinSnids.length; ++i)
                    w.int32(m.WinSnids[i]);
                w.ldelim();
            }
            if (m.IsMatch != null && Object.hasOwnProperty.call(m, "IsMatch"))
                w.uint32(160).int32(m.IsMatch);
            if (m.Round != null && Object.hasOwnProperty.call(m, "Round"))
                w.uint32(176).int32(m.Round);
            if (m.CurPlayerNum != null && Object.hasOwnProperty.call(m, "CurPlayerNum"))
                w.uint32(192).int32(m.CurPlayerNum);
            if (m.NextNeed != null && Object.hasOwnProperty.call(m, "NextNeed"))
                w.uint32(200).int32(m.NextNeed);
            if (m.MatchFinals != null && Object.hasOwnProperty.call(m, "MatchFinals"))
                w.uint32(208).int32(m.MatchFinals);
            return w;
        };

        SCTienLenRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenRoomInfo();
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
                    m.BankerPos = r.int32();
                    break;
                case 7:
                    m.State = r.int32();
                    break;
                case 8:
                    m.TimeOut = r.int32();
                    break;
                case 9:
                    if (!(m.Players && m.Players.length))
                        m.Players = [];
                    m.Players.push($root.tienlen.TienLenPlayerData.decode(r, r.uint32()));
                    break;
                case 11:
                    m.AudienceNum = r.int32();
                    break;
                case 12:
                    m.CurOpIdx = r.int32();
                    break;
                case 13:
                    if (!(m.LastDelCards && m.LastDelCards.length))
                        m.LastDelCards = [];
                    m.LastDelCards.push($root.tienlen.LastDelCard.decode(r, r.uint32()));
                    break;
                case 14:
                    m.NumOfGames = r.int32();
                    break;
                case 15:
                    m.TotalOfGames = r.int32();
                    break;
                case 16:
                    m.MasterSnid = r.int32();
                    break;
                case 17:
                    m.BaseScore = r.int32();
                    break;
                case 18:
                    m.MaxPlayerNum = r.int32();
                    break;
                case 19:
                    if (!(m.WinSnids && m.WinSnids.length))
                        m.WinSnids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.WinSnids.push(r.int32());
                    } else
                        m.WinSnids.push(r.int32());
                    break;
                case 20:
                    m.IsMatch = r.int32();
                    break;
                case 22:
                    m.Round = r.int32();
                    break;
                case 24:
                    m.CurPlayerNum = r.int32();
                    break;
                case 25:
                    m.NextNeed = r.int32();
                    break;
                case 26:
                    m.MatchFinals = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTienLenRoomInfo;
    })();

    tienlen.SCTienLenRoomState = (function() {

        function SCTienLenRoomState(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenRoomState.prototype.State = 0;
        SCTienLenRoomState.prototype.Params = $util.emptyArray;

        SCTienLenRoomState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(8).int32(m.State);
            if (m.Params != null && m.Params.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int64(m.Params[i]);
                w.ldelim();
            }
            return w;
        };

        SCTienLenRoomState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenRoomState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.State = r.int32();
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

        return SCTienLenRoomState;
    })();

    tienlen.CSTienLenPlayerOp = (function() {

        function CSTienLenPlayerOp(p) {
            this.OpParam = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSTienLenPlayerOp.prototype.OpCode = 0;
        CSTienLenPlayerOp.prototype.OpParam = $util.emptyArray;

        CSTienLenPlayerOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.OpParam != null && m.OpParam.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.OpParam.length; ++i)
                    w.int64(m.OpParam[i]);
                w.ldelim();
            }
            return w;
        };

        CSTienLenPlayerOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.CSTienLenPlayerOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    if (!(m.OpParam && m.OpParam.length))
                        m.OpParam = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OpParam.push(r.int64());
                    } else
                        m.OpParam.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSTienLenPlayerOp;
    })();

    tienlen.SCTienLenPlayerOp = (function() {

        function SCTienLenPlayerOp(p) {
            this.OpParam = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenPlayerOp.prototype.OpCode = 0;
        SCTienLenPlayerOp.prototype.OpParam = $util.emptyArray;
        SCTienLenPlayerOp.prototype.SnId = 0;
        SCTienLenPlayerOp.prototype.OpRetCode = 0;

        SCTienLenPlayerOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.OpParam != null && m.OpParam.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.OpParam.length; ++i)
                    w.int64(m.OpParam[i]);
                w.ldelim();
            }
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(24).int32(m.SnId);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(32).int32(m.OpRetCode);
            return w;
        };

        SCTienLenPlayerOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenPlayerOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    if (!(m.OpParam && m.OpParam.length))
                        m.OpParam = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OpParam.push(r.int64());
                    } else
                        m.OpParam.push(r.int64());
                    break;
                case 3:
                    m.SnId = r.int32();
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

        return SCTienLenPlayerOp;
    })();

    tienlen.SCTienLenPlayerEnter = (function() {

        function SCTienLenPlayerEnter(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenPlayerEnter.prototype.Data = null;

        SCTienLenPlayerEnter.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
                $root.tienlen.TienLenPlayerData.encode(m.Data, w.uint32(10).fork()).ldelim();
            return w;
        };

        SCTienLenPlayerEnter.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenPlayerEnter();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Data = $root.tienlen.TienLenPlayerData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTienLenPlayerEnter;
    })();

    tienlen.SCTienLenPlayerLeave = (function() {

        function SCTienLenPlayerLeave(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenPlayerLeave.prototype.Pos = 0;

        SCTienLenPlayerLeave.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(8).int32(m.Pos);
            return w;
        };

        SCTienLenPlayerLeave.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenPlayerLeave();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Pos = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTienLenPlayerLeave;
    })();

    tienlen.TienLenPlayerGameBilled = (function() {

        function TienLenPlayerGameBilled(p) {
            this.Cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TienLenPlayerGameBilled.prototype.SnId = 0;
        TienLenPlayerGameBilled.prototype.Cards = $util.emptyArray;
        TienLenPlayerGameBilled.prototype.WinCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TienLenPlayerGameBilled.prototype.GameCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TienLenPlayerGameBilled.prototype.IsWin = 0;

        TienLenPlayerGameBilled.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Cards != null && m.Cards.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            if (m.WinCoin != null && Object.hasOwnProperty.call(m, "WinCoin"))
                w.uint32(24).int64(m.WinCoin);
            if (m.GameCoin != null && Object.hasOwnProperty.call(m, "GameCoin"))
                w.uint32(32).int64(m.GameCoin);
            if (m.IsWin != null && Object.hasOwnProperty.call(m, "IsWin"))
                w.uint32(40).int32(m.IsWin);
            return w;
        };

        TienLenPlayerGameBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.TienLenPlayerGameBilled();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                case 3:
                    m.WinCoin = r.int64();
                    break;
                case 4:
                    m.GameCoin = r.int64();
                    break;
                case 5:
                    m.IsWin = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TienLenPlayerGameBilled;
    })();

    tienlen.SCTienLenGameBilled = (function() {

        function SCTienLenGameBilled(p) {
            this.Datas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenGameBilled.prototype.Datas = $util.emptyArray;

        SCTienLenGameBilled.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.tienlen.TienLenPlayerGameBilled.encode(m.Datas[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCTienLenGameBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenGameBilled();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.tienlen.TienLenPlayerGameBilled.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTienLenGameBilled;
    })();

    tienlen.SCTienLenSmallGameBilled = (function() {

        function SCTienLenSmallGameBilled(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenSmallGameBilled.prototype.WinPos = 0;
        SCTienLenSmallGameBilled.prototype.WinPosCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCTienLenSmallGameBilled.prototype.LosePos = 0;
        SCTienLenSmallGameBilled.prototype.LosePosCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCTienLenSmallGameBilled.prototype.WinCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCTienLenSmallGameBilled.prototype.LoseCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCTienLenSmallGameBilled.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.WinPos != null && Object.hasOwnProperty.call(m, "WinPos"))
                w.uint32(8).int32(m.WinPos);
            if (m.WinPosCoin != null && Object.hasOwnProperty.call(m, "WinPosCoin"))
                w.uint32(16).int64(m.WinPosCoin);
            if (m.LosePos != null && Object.hasOwnProperty.call(m, "LosePos"))
                w.uint32(24).int32(m.LosePos);
            if (m.LosePosCoin != null && Object.hasOwnProperty.call(m, "LosePosCoin"))
                w.uint32(32).int64(m.LosePosCoin);
            if (m.WinCoin != null && Object.hasOwnProperty.call(m, "WinCoin"))
                w.uint32(40).int64(m.WinCoin);
            if (m.LoseCoin != null && Object.hasOwnProperty.call(m, "LoseCoin"))
                w.uint32(48).int64(m.LoseCoin);
            return w;
        };

        SCTienLenSmallGameBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenSmallGameBilled();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.WinPos = r.int32();
                    break;
                case 2:
                    m.WinPosCoin = r.int64();
                    break;
                case 3:
                    m.LosePos = r.int32();
                    break;
                case 4:
                    m.LosePosCoin = r.int64();
                    break;
                case 5:
                    m.WinCoin = r.int64();
                    break;
                case 6:
                    m.LoseCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTienLenSmallGameBilled;
    })();

    tienlen.SCTienLenCard = (function() {

        function SCTienLenCard(p) {
            this.Cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenCard.prototype.Cards = $util.emptyArray;

        SCTienLenCard.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Cards != null && m.Cards.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            return w;
        };

        SCTienLenCard.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenCard();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTienLenCard;
    })();

    tienlen.SCTienLenCurOpPos = (function() {

        function SCTienLenCurOpPos(p) {
            this.Cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenCurOpPos.prototype.Pos = 0;
        SCTienLenCurOpPos.prototype.IsNew = false;
        SCTienLenCurOpPos.prototype.Cards = $util.emptyArray;
        SCTienLenCurOpPos.prototype.ExDelay = 0;

        SCTienLenCurOpPos.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(8).int32(m.Pos);
            if (m.IsNew != null && Object.hasOwnProperty.call(m, "IsNew"))
                w.uint32(16).bool(m.IsNew);
            if (m.Cards != null && m.Cards.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            if (m.ExDelay != null && Object.hasOwnProperty.call(m, "ExDelay"))
                w.uint32(32).int32(m.ExDelay);
            return w;
        };

        SCTienLenCurOpPos.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenCurOpPos();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Pos = r.int32();
                    break;
                case 2:
                    m.IsNew = r.bool();
                    break;
                case 3:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                case 4:
                    m.ExDelay = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTienLenCurOpPos;
    })();

    tienlen.SCTienLenUpdateMasterSnid = (function() {

        function SCTienLenUpdateMasterSnid(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenUpdateMasterSnid.prototype.MasterSnid = 0;

        SCTienLenUpdateMasterSnid.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MasterSnid != null && Object.hasOwnProperty.call(m, "MasterSnid"))
                w.uint32(8).int32(m.MasterSnid);
            return w;
        };

        SCTienLenUpdateMasterSnid.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenUpdateMasterSnid();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.MasterSnid = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTienLenUpdateMasterSnid;
    })();

    tienlen.SCTienLenUpdateAudienceNum = (function() {

        function SCTienLenUpdateAudienceNum(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenUpdateAudienceNum.prototype.AudienceNum = 0;

        SCTienLenUpdateAudienceNum.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.AudienceNum != null && Object.hasOwnProperty.call(m, "AudienceNum"))
                w.uint32(8).int32(m.AudienceNum);
            return w;
        };

        SCTienLenUpdateAudienceNum.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenUpdateAudienceNum();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.AudienceNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTienLenUpdateAudienceNum;
    })();

    tienlen.SCTienLenAIData = (function() {

        function SCTienLenAIData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenAIData.prototype.BombNum = 0;
        SCTienLenAIData.prototype.CardPlayActionSeq = "";
        SCTienLenAIData.prototype.LastMove_0 = "";
        SCTienLenAIData.prototype.LastMove_1 = "";
        SCTienLenAIData.prototype.LastMove_2 = "";
        SCTienLenAIData.prototype.LastMove_3 = "";
        SCTienLenAIData.prototype.NumCardsLeft_0 = 0;
        SCTienLenAIData.prototype.NumCardsLeft_1 = 0;
        SCTienLenAIData.prototype.NumCardsLeft_2 = 0;
        SCTienLenAIData.prototype.NumCardsLeft_3 = 0;
        SCTienLenAIData.prototype.OtherHandCards = "";
        SCTienLenAIData.prototype.PlayedCards_0 = "";
        SCTienLenAIData.prototype.PlayedCards_1 = "";
        SCTienLenAIData.prototype.PlayedCards_2 = "";
        SCTienLenAIData.prototype.PlayedCards_3 = "";
        SCTienLenAIData.prototype.PlayerHandCards = "";
        SCTienLenAIData.prototype.PlayerPosition = 0;

        SCTienLenAIData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BombNum != null && Object.hasOwnProperty.call(m, "BombNum"))
                w.uint32(8).int32(m.BombNum);
            if (m.CardPlayActionSeq != null && Object.hasOwnProperty.call(m, "CardPlayActionSeq"))
                w.uint32(18).string(m.CardPlayActionSeq);
            if (m.LastMove_0 != null && Object.hasOwnProperty.call(m, "LastMove_0"))
                w.uint32(26).string(m.LastMove_0);
            if (m.LastMove_1 != null && Object.hasOwnProperty.call(m, "LastMove_1"))
                w.uint32(34).string(m.LastMove_1);
            if (m.LastMove_2 != null && Object.hasOwnProperty.call(m, "LastMove_2"))
                w.uint32(42).string(m.LastMove_2);
            if (m.LastMove_3 != null && Object.hasOwnProperty.call(m, "LastMove_3"))
                w.uint32(50).string(m.LastMove_3);
            if (m.NumCardsLeft_0 != null && Object.hasOwnProperty.call(m, "NumCardsLeft_0"))
                w.uint32(56).int32(m.NumCardsLeft_0);
            if (m.NumCardsLeft_1 != null && Object.hasOwnProperty.call(m, "NumCardsLeft_1"))
                w.uint32(64).int32(m.NumCardsLeft_1);
            if (m.NumCardsLeft_2 != null && Object.hasOwnProperty.call(m, "NumCardsLeft_2"))
                w.uint32(72).int32(m.NumCardsLeft_2);
            if (m.NumCardsLeft_3 != null && Object.hasOwnProperty.call(m, "NumCardsLeft_3"))
                w.uint32(80).int32(m.NumCardsLeft_3);
            if (m.OtherHandCards != null && Object.hasOwnProperty.call(m, "OtherHandCards"))
                w.uint32(90).string(m.OtherHandCards);
            if (m.PlayedCards_0 != null && Object.hasOwnProperty.call(m, "PlayedCards_0"))
                w.uint32(98).string(m.PlayedCards_0);
            if (m.PlayedCards_1 != null && Object.hasOwnProperty.call(m, "PlayedCards_1"))
                w.uint32(106).string(m.PlayedCards_1);
            if (m.PlayedCards_2 != null && Object.hasOwnProperty.call(m, "PlayedCards_2"))
                w.uint32(114).string(m.PlayedCards_2);
            if (m.PlayedCards_3 != null && Object.hasOwnProperty.call(m, "PlayedCards_3"))
                w.uint32(122).string(m.PlayedCards_3);
            if (m.PlayerHandCards != null && Object.hasOwnProperty.call(m, "PlayerHandCards"))
                w.uint32(130).string(m.PlayerHandCards);
            if (m.PlayerPosition != null && Object.hasOwnProperty.call(m, "PlayerPosition"))
                w.uint32(136).int32(m.PlayerPosition);
            return w;
        };

        SCTienLenAIData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenAIData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.BombNum = r.int32();
                    break;
                case 2:
                    m.CardPlayActionSeq = r.string();
                    break;
                case 3:
                    m.LastMove_0 = r.string();
                    break;
                case 4:
                    m.LastMove_1 = r.string();
                    break;
                case 5:
                    m.LastMove_2 = r.string();
                    break;
                case 6:
                    m.LastMove_3 = r.string();
                    break;
                case 7:
                    m.NumCardsLeft_0 = r.int32();
                    break;
                case 8:
                    m.NumCardsLeft_1 = r.int32();
                    break;
                case 9:
                    m.NumCardsLeft_2 = r.int32();
                    break;
                case 10:
                    m.NumCardsLeft_3 = r.int32();
                    break;
                case 11:
                    m.OtherHandCards = r.string();
                    break;
                case 12:
                    m.PlayedCards_0 = r.string();
                    break;
                case 13:
                    m.PlayedCards_1 = r.string();
                    break;
                case 14:
                    m.PlayedCards_2 = r.string();
                    break;
                case 15:
                    m.PlayedCards_3 = r.string();
                    break;
                case 16:
                    m.PlayerHandCards = r.string();
                    break;
                case 17:
                    m.PlayerPosition = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTienLenAIData;
    })();

    tienlen.SCTienLenFirstOpPos = (function() {

        function SCTienLenFirstOpPos(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTienLenFirstOpPos.prototype.Pos = 0;

        SCTienLenFirstOpPos.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(8).int32(m.Pos);
            return w;
        };

        SCTienLenFirstOpPos.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tienlen.SCTienLenFirstOpPos();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Pos = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTienLenFirstOpPos;
    })();

    return tienlen;
})();

module.exports = $root;
