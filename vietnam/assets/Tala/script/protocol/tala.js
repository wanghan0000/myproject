/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tala = (function() {

    var tala = {};

    tala.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        return values;
    })();

    tala.TaLaPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_TaLaZERO"] = 0;
        values[valuesById[5530] = "PACKET_SCTaLaRoomInfo"] = 5530;
        values[valuesById[5531] = "PACKET_SCTaLaRoomState"] = 5531;
        values[valuesById[5532] = "PACKET_CSTaLaPlayerOp"] = 5532;
        values[valuesById[5533] = "PACKET_SCTaLaPlayerOp"] = 5533;
        values[valuesById[5534] = "PACKET_SCTaLaPlayerEnter"] = 5534;
        values[valuesById[5535] = "PACKET_SCTaLaPlayerLeave"] = 5535;
        values[valuesById[5536] = "PACKET_SCTaLaHandCard"] = 5536;
        values[valuesById[5537] = "PACKET_SCTaLaShowPhom"] = 5537;
        values[valuesById[5538] = "PACKET_SCTaLaOpPhom"] = 5538;
        values[valuesById[5539] = "PACKET_SCTaLaGameBilled"] = 5539;
        values[valuesById[5540] = "PACKET_SCTaLaCurOpPos"] = 5540;
        values[valuesById[5541] = "PACKET_SCTaLaSmallGameBilled"] = 5541;
        values[valuesById[5542] = "PACKET_SCTaLaUpdateMasterSnid"] = 5542;
        values[valuesById[5543] = "PACKET_SCTaLaUpdateCardsNum"] = 5543;
        values[valuesById[5544] = "PACKET_SCTaLaMoveCard"] = 5544;
        values[valuesById[5545] = "PACKET_SCTaLaRecommendPhom"] = 5545;
        return values;
    })();

    tala.TaLaPlayerData = (function() {

        function TaLaPlayerData(p) {
            this.Params = [];
            this.Items = {};
            this.Cards = [];
            this.ChiCards = [];
            this.DelCards = [];
            this.Phoms = [];
            this.Chi2Phom = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TaLaPlayerData.prototype.Name = "";
        TaLaPlayerData.prototype.SnId = 0;
        TaLaPlayerData.prototype.Head = 0;
        TaLaPlayerData.prototype.Sex = 0;
        TaLaPlayerData.prototype.Params = $util.emptyArray;
        TaLaPlayerData.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TaLaPlayerData.prototype.Pos = 0;
        TaLaPlayerData.prototype.Flag = 0;
        TaLaPlayerData.prototype.Longitude = 0;
        TaLaPlayerData.prototype.Latitude = 0;
        TaLaPlayerData.prototype.City = "";
        TaLaPlayerData.prototype.LastOp = 0;
        TaLaPlayerData.prototype.VIP = 0;
        TaLaPlayerData.prototype.HeadOutLine = 0;
        TaLaPlayerData.prototype.NiceId = 0;
        TaLaPlayerData.prototype.GameCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TaLaPlayerData.prototype.RoleId = 0;
        TaLaPlayerData.prototype.Items = $util.emptyObject;
        TaLaPlayerData.prototype.Cards = $util.emptyArray;
        TaLaPlayerData.prototype.ChiCards = $util.emptyArray;
        TaLaPlayerData.prototype.DelCards = $util.emptyArray;
        TaLaPlayerData.prototype.Phoms = $util.emptyArray;
        TaLaPlayerData.prototype.Chi2Phom = $util.emptyArray;

        TaLaPlayerData.encode = function encode(m, w) {
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
            if (m.GameCoin != null && Object.hasOwnProperty.call(m, "GameCoin"))
                w.uint32(128).int64(m.GameCoin);
            if (m.RoleId != null && Object.hasOwnProperty.call(m, "RoleId"))
                w.uint32(136).int32(m.RoleId);
            if (m.Items != null && Object.hasOwnProperty.call(m, "Items")) {
                for (var ks = Object.keys(m.Items), i = 0; i < ks.length; ++i) {
                    w.uint32(146).fork().uint32(8).int32(ks[i]).uint32(16).int32(m.Items[ks[i]]).ldelim();
                }
            }
            if (m.Cards != null && m.Cards.length) {
                w.uint32(154).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            if (m.ChiCards != null && m.ChiCards.length) {
                w.uint32(162).fork();
                for (var i = 0; i < m.ChiCards.length; ++i)
                    w.int32(m.ChiCards[i]);
                w.ldelim();
            }
            if (m.DelCards != null && m.DelCards.length) {
                w.uint32(170).fork();
                for (var i = 0; i < m.DelCards.length; ++i)
                    w.int32(m.DelCards[i]);
                w.ldelim();
            }
            if (m.Phoms != null && m.Phoms.length) {
                for (var i = 0; i < m.Phoms.length; ++i)
                    $root.tala.Phoms.encode(m.Phoms[i], w.uint32(178).fork()).ldelim();
            }
            if (m.Chi2Phom != null && m.Chi2Phom.length) {
                w.uint32(186).fork();
                for (var i = 0; i < m.Chi2Phom.length; ++i)
                    w.int32(m.Chi2Phom[i]);
                w.ldelim();
            }
            return w;
        };

        TaLaPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.TaLaPlayerData(), k;
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
                    m.GameCoin = r.int64();
                    break;
                case 17:
                    m.RoleId = r.int32();
                    break;
                case 18:
                    r.skip().pos++;
                    if (m.Items === $util.emptyObject)
                        m.Items = {};
                    k = r.int32();
                    r.pos++;
                    m.Items[k] = r.int32();
                    break;
                case 19:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                case 20:
                    if (!(m.ChiCards && m.ChiCards.length))
                        m.ChiCards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ChiCards.push(r.int32());
                    } else
                        m.ChiCards.push(r.int32());
                    break;
                case 21:
                    if (!(m.DelCards && m.DelCards.length))
                        m.DelCards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.DelCards.push(r.int32());
                    } else
                        m.DelCards.push(r.int32());
                    break;
                case 22:
                    if (!(m.Phoms && m.Phoms.length))
                        m.Phoms = [];
                    m.Phoms.push($root.tala.Phoms.decode(r, r.uint32()));
                    break;
                case 23:
                    if (!(m.Chi2Phom && m.Chi2Phom.length))
                        m.Chi2Phom = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Chi2Phom.push(r.int32());
                    } else
                        m.Chi2Phom.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TaLaPlayerData;
    })();

    tala.LastDelCard = (function() {

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
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.LastDelCard();
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

    tala.SCTaLaRoomInfo = (function() {

        function SCTaLaRoomInfo(p) {
            this.Params = [];
            this.Players = [];
            this.LastDelCards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaRoomInfo.prototype.RoomId = 0;
        SCTaLaRoomInfo.prototype.Creator = 0;
        SCTaLaRoomInfo.prototype.GameId = 0;
        SCTaLaRoomInfo.prototype.RoomMode = 0;
        SCTaLaRoomInfo.prototype.Params = $util.emptyArray;
        SCTaLaRoomInfo.prototype.BankerPos = 0;
        SCTaLaRoomInfo.prototype.State = 0;
        SCTaLaRoomInfo.prototype.TimeOut = 0;
        SCTaLaRoomInfo.prototype.Players = $util.emptyArray;
        SCTaLaRoomInfo.prototype.AudienceNum = 0;
        SCTaLaRoomInfo.prototype.CurOpIdx = 0;
        SCTaLaRoomInfo.prototype.LastDelCards = $util.emptyArray;
        SCTaLaRoomInfo.prototype.NumOfGames = 0;
        SCTaLaRoomInfo.prototype.TotalOfGames = 0;
        SCTaLaRoomInfo.prototype.MasterSnid = 0;
        SCTaLaRoomInfo.prototype.BaseScore = 0;
        SCTaLaRoomInfo.prototype.MaxPlayerNum = 0;
        SCTaLaRoomInfo.prototype.CardsNum = 0;
        SCTaLaRoomInfo.prototype.IsLast = false;

        SCTaLaRoomInfo.encode = function encode(m, w) {
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
                    $root.tala.TaLaPlayerData.encode(m.Players[i], w.uint32(74).fork()).ldelim();
            }
            if (m.AudienceNum != null && Object.hasOwnProperty.call(m, "AudienceNum"))
                w.uint32(80).int32(m.AudienceNum);
            if (m.CurOpIdx != null && Object.hasOwnProperty.call(m, "CurOpIdx"))
                w.uint32(88).int32(m.CurOpIdx);
            if (m.LastDelCards != null && m.LastDelCards.length) {
                for (var i = 0; i < m.LastDelCards.length; ++i)
                    $root.tala.LastDelCard.encode(m.LastDelCards[i], w.uint32(98).fork()).ldelim();
            }
            if (m.NumOfGames != null && Object.hasOwnProperty.call(m, "NumOfGames"))
                w.uint32(104).int32(m.NumOfGames);
            if (m.TotalOfGames != null && Object.hasOwnProperty.call(m, "TotalOfGames"))
                w.uint32(112).int32(m.TotalOfGames);
            if (m.MasterSnid != null && Object.hasOwnProperty.call(m, "MasterSnid"))
                w.uint32(120).int32(m.MasterSnid);
            if (m.BaseScore != null && Object.hasOwnProperty.call(m, "BaseScore"))
                w.uint32(128).int32(m.BaseScore);
            if (m.MaxPlayerNum != null && Object.hasOwnProperty.call(m, "MaxPlayerNum"))
                w.uint32(136).int32(m.MaxPlayerNum);
            if (m.CardsNum != null && Object.hasOwnProperty.call(m, "CardsNum"))
                w.uint32(144).int32(m.CardsNum);
            if (m.IsLast != null && Object.hasOwnProperty.call(m, "IsLast"))
                w.uint32(152).bool(m.IsLast);
            return w;
        };

        SCTaLaRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaRoomInfo();
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
                    m.Players.push($root.tala.TaLaPlayerData.decode(r, r.uint32()));
                    break;
                case 10:
                    m.AudienceNum = r.int32();
                    break;
                case 11:
                    m.CurOpIdx = r.int32();
                    break;
                case 12:
                    if (!(m.LastDelCards && m.LastDelCards.length))
                        m.LastDelCards = [];
                    m.LastDelCards.push($root.tala.LastDelCard.decode(r, r.uint32()));
                    break;
                case 13:
                    m.NumOfGames = r.int32();
                    break;
                case 14:
                    m.TotalOfGames = r.int32();
                    break;
                case 15:
                    m.MasterSnid = r.int32();
                    break;
                case 16:
                    m.BaseScore = r.int32();
                    break;
                case 17:
                    m.MaxPlayerNum = r.int32();
                    break;
                case 18:
                    m.CardsNum = r.int32();
                    break;
                case 19:
                    m.IsLast = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaLaRoomInfo;
    })();

    tala.SCTaLaRoomState = (function() {

        function SCTaLaRoomState(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaRoomState.prototype.State = 0;
        SCTaLaRoomState.prototype.Params = $util.emptyArray;

        SCTaLaRoomState.encode = function encode(m, w) {
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

        SCTaLaRoomState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaRoomState();
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

        return SCTaLaRoomState;
    })();

    tala.CSTaLaPlayerOp = (function() {

        function CSTaLaPlayerOp(p) {
            this.OpParam = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSTaLaPlayerOp.prototype.OpCode = 0;
        CSTaLaPlayerOp.prototype.OpParam = $util.emptyArray;

        CSTaLaPlayerOp.encode = function encode(m, w) {
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

        CSTaLaPlayerOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.CSTaLaPlayerOp();
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

        return CSTaLaPlayerOp;
    })();

    tala.SCTaLaPlayerOp = (function() {

        function SCTaLaPlayerOp(p) {
            this.OpParam = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaPlayerOp.prototype.OpCode = 0;
        SCTaLaPlayerOp.prototype.OpParam = $util.emptyArray;
        SCTaLaPlayerOp.prototype.SnId = 0;
        SCTaLaPlayerOp.prototype.OpRetCode = 0;

        SCTaLaPlayerOp.encode = function encode(m, w) {
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

        SCTaLaPlayerOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaPlayerOp();
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

        return SCTaLaPlayerOp;
    })();

    tala.SCTaLaPlayerEnter = (function() {

        function SCTaLaPlayerEnter(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaPlayerEnter.prototype.Data = null;

        SCTaLaPlayerEnter.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
                $root.tala.TaLaPlayerData.encode(m.Data, w.uint32(10).fork()).ldelim();
            return w;
        };

        SCTaLaPlayerEnter.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaPlayerEnter();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Data = $root.tala.TaLaPlayerData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaLaPlayerEnter;
    })();

    tala.SCTaLaPlayerLeave = (function() {

        function SCTaLaPlayerLeave(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaPlayerLeave.prototype.Pos = 0;

        SCTaLaPlayerLeave.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(8).int32(m.Pos);
            return w;
        };

        SCTaLaPlayerLeave.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaPlayerLeave();
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

        return SCTaLaPlayerLeave;
    })();

    tala.TaLaPlayerGameBilled = (function() {

        function TaLaPlayerGameBilled(p) {
            this.Cards = [];
            this.Phoms = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TaLaPlayerGameBilled.prototype.SnId = 0;
        TaLaPlayerGameBilled.prototype.Cards = $util.emptyArray;
        TaLaPlayerGameBilled.prototype.WinCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TaLaPlayerGameBilled.prototype.GameCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TaLaPlayerGameBilled.prototype.IsWin = 0;
        TaLaPlayerGameBilled.prototype.Rank = 0;
        TaLaPlayerGameBilled.prototype.Phoms = $util.emptyArray;

        TaLaPlayerGameBilled.encode = function encode(m, w) {
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
            if (m.Rank != null && Object.hasOwnProperty.call(m, "Rank"))
                w.uint32(48).int32(m.Rank);
            if (m.Phoms != null && m.Phoms.length) {
                for (var i = 0; i < m.Phoms.length; ++i)
                    $root.tala.Phoms.encode(m.Phoms[i], w.uint32(58).fork()).ldelim();
            }
            return w;
        };

        TaLaPlayerGameBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.TaLaPlayerGameBilled();
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
                case 6:
                    m.Rank = r.int32();
                    break;
                case 7:
                    if (!(m.Phoms && m.Phoms.length))
                        m.Phoms = [];
                    m.Phoms.push($root.tala.Phoms.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TaLaPlayerGameBilled;
    })();

    tala.SCTaLaGameBilled = (function() {

        function SCTaLaGameBilled(p) {
            this.Datas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaGameBilled.prototype.Datas = $util.emptyArray;

        SCTaLaGameBilled.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.tala.TaLaPlayerGameBilled.encode(m.Datas[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCTaLaGameBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaGameBilled();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.tala.TaLaPlayerGameBilled.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaLaGameBilled;
    })();

    tala.SCTaLaSmallGameBilled = (function() {

        function SCTaLaSmallGameBilled(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaSmallGameBilled.prototype.WinPos = 0;
        SCTaLaSmallGameBilled.prototype.WinPosCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCTaLaSmallGameBilled.prototype.LosePos = 0;
        SCTaLaSmallGameBilled.prototype.LosePosCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCTaLaSmallGameBilled.prototype.WinCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCTaLaSmallGameBilled.prototype.LoseCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCTaLaSmallGameBilled.encode = function encode(m, w) {
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

        SCTaLaSmallGameBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaSmallGameBilled();
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

        return SCTaLaSmallGameBilled;
    })();

    tala.SCTaLaHandCard = (function() {

        function SCTaLaHandCard(p) {
            this.Cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaHandCard.prototype.Cards = $util.emptyArray;

        SCTaLaHandCard.encode = function encode(m, w) {
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

        SCTaLaHandCard.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaHandCard();
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

        return SCTaLaHandCard;
    })();

    tala.Phoms = (function() {

        function Phoms(p) {
            this.Phom = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Phoms.prototype.Phom = $util.emptyArray;

        Phoms.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Phom != null && m.Phom.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.Phom.length; ++i)
                    w.int32(m.Phom[i]);
                w.ldelim();
            }
            return w;
        };

        Phoms.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.Phoms();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Phom && m.Phom.length))
                        m.Phom = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Phom.push(r.int32());
                    } else
                        m.Phom.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Phoms;
    })();

    tala.SCTaLaShowPhom = (function() {

        function SCTaLaShowPhom(p) {
            this.Cards = [];
            this.Phoms = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaShowPhom.prototype.Snid = 0;
        SCTaLaShowPhom.prototype.Cards = $util.emptyArray;
        SCTaLaShowPhom.prototype.Phoms = $util.emptyArray;
        SCTaLaShowPhom.prototype.OpRetCode = 0;

        SCTaLaShowPhom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.Cards != null && m.Cards.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            if (m.Phoms != null && m.Phoms.length) {
                for (var i = 0; i < m.Phoms.length; ++i)
                    $root.tala.Phoms.encode(m.Phoms[i], w.uint32(26).fork()).ldelim();
            }
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(32).int32(m.OpRetCode);
            return w;
        };

        SCTaLaShowPhom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaShowPhom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
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
                    if (!(m.Phoms && m.Phoms.length))
                        m.Phoms = [];
                    m.Phoms.push($root.tala.Phoms.decode(r, r.uint32()));
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

        return SCTaLaShowPhom;
    })();

    tala.MapSnidCards = (function() {

        function MapSnidCards(p) {
            this.SnidCard = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MapSnidCards.prototype.SnidCard = $util.emptyObject;

        MapSnidCards.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnidCard != null && Object.hasOwnProperty.call(m, "SnidCard")) {
                for (var ks = Object.keys(m.SnidCard), i = 0; i < ks.length; ++i) {
                    w.uint32(10).fork().uint32(8).int32(ks[i]).uint32(16).int32(m.SnidCard[ks[i]]).ldelim();
                }
            }
            return w;
        };

        MapSnidCards.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.MapSnidCards(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    r.skip().pos++;
                    if (m.SnidCard === $util.emptyObject)
                        m.SnidCard = {};
                    k = r.int32();
                    r.pos++;
                    m.SnidCard[k] = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MapSnidCards;
    })();

    tala.SCTaLaOpPhom = (function() {

        function SCTaLaOpPhom(p) {
            this.MapSnidCard = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaOpPhom.prototype.Snid = 0;
        SCTaLaOpPhom.prototype.MapSnidCard = $util.emptyArray;
        SCTaLaOpPhom.prototype.OpRetCode = 0;

        SCTaLaOpPhom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.MapSnidCard != null && m.MapSnidCard.length) {
                for (var i = 0; i < m.MapSnidCard.length; ++i)
                    $root.tala.MapSnidCards.encode(m.MapSnidCard[i], w.uint32(18).fork()).ldelim();
            }
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(24).int32(m.OpRetCode);
            return w;
        };

        SCTaLaOpPhom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaOpPhom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    if (!(m.MapSnidCard && m.MapSnidCard.length))
                        m.MapSnidCard = [];
                    m.MapSnidCard.push($root.tala.MapSnidCards.decode(r, r.uint32()));
                    break;
                case 3:
                    m.OpRetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaLaOpPhom;
    })();

    tala.SCTaLaCurOpPos = (function() {

        function SCTaLaCurOpPos(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaCurOpPos.prototype.Pos = 0;
        SCTaLaCurOpPos.prototype.Card = 0;

        SCTaLaCurOpPos.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(8).int32(m.Pos);
            if (m.Card != null && Object.hasOwnProperty.call(m, "Card"))
                w.uint32(16).int32(m.Card);
            return w;
        };

        SCTaLaCurOpPos.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaCurOpPos();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Pos = r.int32();
                    break;
                case 2:
                    m.Card = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaLaCurOpPos;
    })();

    tala.SCTaLaUpdateMasterSnid = (function() {

        function SCTaLaUpdateMasterSnid(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaUpdateMasterSnid.prototype.MasterSnid = 0;

        SCTaLaUpdateMasterSnid.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MasterSnid != null && Object.hasOwnProperty.call(m, "MasterSnid"))
                w.uint32(8).int32(m.MasterSnid);
            return w;
        };

        SCTaLaUpdateMasterSnid.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaUpdateMasterSnid();
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

        return SCTaLaUpdateMasterSnid;
    })();

    tala.SCTaLaUpdateCardsNum = (function() {

        function SCTaLaUpdateCardsNum(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaUpdateCardsNum.prototype.CardsNum = 0;
        SCTaLaUpdateCardsNum.prototype.IsLast = false;

        SCTaLaUpdateCardsNum.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.CardsNum != null && Object.hasOwnProperty.call(m, "CardsNum"))
                w.uint32(8).int32(m.CardsNum);
            if (m.IsLast != null && Object.hasOwnProperty.call(m, "IsLast"))
                w.uint32(16).bool(m.IsLast);
            return w;
        };

        SCTaLaUpdateCardsNum.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaUpdateCardsNum();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.CardsNum = r.int32();
                    break;
                case 2:
                    m.IsLast = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaLaUpdateCardsNum;
    })();

    tala.SCTaLaMoveCard = (function() {

        function SCTaLaMoveCard(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaMoveCard.prototype.Snid = 0;
        SCTaLaMoveCard.prototype.DstSnid = 0;
        SCTaLaMoveCard.prototype.Card = 0;

        SCTaLaMoveCard.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.DstSnid != null && Object.hasOwnProperty.call(m, "DstSnid"))
                w.uint32(16).int32(m.DstSnid);
            if (m.Card != null && Object.hasOwnProperty.call(m, "Card"))
                w.uint32(24).int32(m.Card);
            return w;
        };

        SCTaLaMoveCard.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaMoveCard();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    m.DstSnid = r.int32();
                    break;
                case 3:
                    m.Card = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaLaMoveCard;
    })();

    tala.SCTaLaRecommendPhom = (function() {

        function SCTaLaRecommendPhom(p) {
            this.cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaLaRecommendPhom.prototype.Snid = 0;
        SCTaLaRecommendPhom.prototype.cards = $util.emptyArray;

        SCTaLaRecommendPhom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.cards != null && m.cards.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.cards.length; ++i)
                    w.int32(m.cards[i]);
                w.ldelim();
            }
            return w;
        };

        SCTaLaRecommendPhom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tala.SCTaLaRecommendPhom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    if (!(m.cards && m.cards.length))
                        m.cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.cards.push(r.int32());
                    } else
                        m.cards.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaLaRecommendPhom;
    })();

    return tala;
})();

module.exports = $root;
