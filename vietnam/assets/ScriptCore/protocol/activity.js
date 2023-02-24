/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.activity = (function() {

    var activity = {};

    activity.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        return values;
    })();

    activity.VipBonusPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_VipBonus_ZERO"] = 0;
        values[valuesById[2600] = "PACKET_CS_VipBonus_Info"] = 2600;
        values[valuesById[2601] = "PACKET_SC_VipBonus_Info"] = 2601;
        values[valuesById[2602] = "PACKET_CS_VipBonus_Get"] = 2602;
        values[valuesById[2603] = "PACKET_SC_VipBonus_Get"] = 2603;
        values[valuesById[2604] = "PACKET_SC_Notify_ActVipBonus_State"] = 2604;
        values[valuesById[2605] = "PACKET_SC_Notify_VipGetBonus_State"] = 2605;
        return values;
    })();

    activity.VipBonusInfo = (function() {

        function VipBonusInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        VipBonusInfo.prototype.LevelCoin = 0;
        VipBonusInfo.prototype.DayCoin = 0;
        VipBonusInfo.prototype.WeekCoin = 0;
        VipBonusInfo.prototype.MonthCoin = 0;

        VipBonusInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LevelCoin != null && Object.hasOwnProperty.call(m, "LevelCoin"))
                w.uint32(8).int32(m.LevelCoin);
            if (m.DayCoin != null && Object.hasOwnProperty.call(m, "DayCoin"))
                w.uint32(16).int32(m.DayCoin);
            if (m.WeekCoin != null && Object.hasOwnProperty.call(m, "WeekCoin"))
                w.uint32(24).int32(m.WeekCoin);
            if (m.MonthCoin != null && Object.hasOwnProperty.call(m, "MonthCoin"))
                w.uint32(32).int32(m.MonthCoin);
            return w;
        };

        VipBonusInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.VipBonusInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LevelCoin = r.int32();
                    break;
                case 2:
                    m.DayCoin = r.int32();
                    break;
                case 3:
                    m.WeekCoin = r.int32();
                    break;
                case 4:
                    m.MonthCoin = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return VipBonusInfo;
    })();

    activity.VipBonusGetInfo = (function() {

        function VipBonusGetInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        VipBonusGetInfo.prototype.Level = 0;
        VipBonusGetInfo.prototype.Day = 0;
        VipBonusGetInfo.prototype.Week = 0;
        VipBonusGetInfo.prototype.Month = 0;

        VipBonusGetInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Level != null && Object.hasOwnProperty.call(m, "Level"))
                w.uint32(8).int32(m.Level);
            if (m.Day != null && Object.hasOwnProperty.call(m, "Day"))
                w.uint32(16).int32(m.Day);
            if (m.Week != null && Object.hasOwnProperty.call(m, "Week"))
                w.uint32(24).int32(m.Week);
            if (m.Month != null && Object.hasOwnProperty.call(m, "Month"))
                w.uint32(32).int32(m.Month);
            return w;
        };

        VipBonusGetInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.VipBonusGetInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Level = r.int32();
                    break;
                case 2:
                    m.Day = r.int32();
                    break;
                case 3:
                    m.Week = r.int32();
                    break;
                case 4:
                    m.Month = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return VipBonusGetInfo;
    })();

    activity.SCVipBonusInfo = (function() {

        function SCVipBonusInfo(p) {
            this.Infos = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCVipBonusInfo.prototype.Infos = $util.emptyArray;
        SCVipBonusInfo.prototype.GetInfo = null;

        SCVipBonusInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Infos != null && m.Infos.length) {
                for (var i = 0; i < m.Infos.length; ++i)
                    $root.activity.VipBonusInfo.encode(m.Infos[i], w.uint32(10).fork()).ldelim();
            }
            if (m.GetInfo != null && Object.hasOwnProperty.call(m, "GetInfo"))
                $root.activity.VipBonusGetInfo.encode(m.GetInfo, w.uint32(18).fork()).ldelim();
            return w;
        };

        SCVipBonusInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCVipBonusInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Infos && m.Infos.length))
                        m.Infos = [];
                    m.Infos.push($root.activity.VipBonusInfo.decode(r, r.uint32()));
                    break;
                case 2:
                    m.GetInfo = $root.activity.VipBonusGetInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCVipBonusInfo;
    })();

    activity.CSVipBonusInfo = (function() {

        function CSVipBonusInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSVipBonusInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSVipBonusInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSVipBonusInfo();
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

        return CSVipBonusInfo;
    })();

    activity.SCVipBonus = (function() {

        function SCVipBonus(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCVipBonus.prototype.OpRetCode = 0;
        SCVipBonus.prototype.GetInfo = null;

        SCVipBonus.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.GetInfo != null && Object.hasOwnProperty.call(m, "GetInfo"))
                $root.activity.VipBonusGetInfo.encode(m.GetInfo, w.uint32(18).fork()).ldelim();
            return w;
        };

        SCVipBonus.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCVipBonus();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.GetInfo = $root.activity.VipBonusGetInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCVipBonus;
    })();

    activity.CSVipBonus = (function() {

        function CSVipBonus(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSVipBonus.prototype.SelectBonus = 0;
        CSVipBonus.prototype.SelectVip = 0;

        CSVipBonus.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SelectBonus != null && Object.hasOwnProperty.call(m, "SelectBonus"))
                w.uint32(8).int32(m.SelectBonus);
            if (m.SelectVip != null && Object.hasOwnProperty.call(m, "SelectVip"))
                w.uint32(16).int32(m.SelectVip);
            return w;
        };

        CSVipBonus.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSVipBonus();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SelectBonus = r.int32();
                    break;
                case 2:
                    m.SelectVip = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSVipBonus;
    })();

    activity.SCNotifyVipBonusState = (function() {

        function SCNotifyVipBonusState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCNotifyVipBonusState.prototype.State = 0;

        SCNotifyVipBonusState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(8).int32(m.State);
            return w;
        };

        SCNotifyVipBonusState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCNotifyVipBonusState();
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

        return SCNotifyVipBonusState;
    })();

    activity.SCNotifyVipGetBonusState = (function() {

        function SCNotifyVipGetBonusState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCNotifyVipGetBonusState.prototype.GetInfo = null;

        SCNotifyVipGetBonusState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GetInfo != null && Object.hasOwnProperty.call(m, "GetInfo"))
                $root.activity.VipBonusGetInfo.encode(m.GetInfo, w.uint32(10).fork()).ldelim();
            return w;
        };

        SCNotifyVipGetBonusState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCNotifyVipGetBonusState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GetInfo = $root.activity.VipBonusGetInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCNotifyVipGetBonusState;
    })();

    activity.OpResultCode_ActCard = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess_ActCard"] = 0;
        values[valuesById[1] = "OPRC_Error_ActCard"] = 1;
        values[valuesById[1056] = "OPRC_CoinNotEnough"] = 1056;
        values[valuesById[10024] = "OPRC_Card_Receive_MustBuyCardFirst"] = 10024;
        values[valuesById[10025] = "OPRC_Card_Receive_HasReceived"] = 10025;
        return values;
    })();

    activity.CardPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_Card_ZERO"] = 0;
        values[valuesById[2610] = "PACKET_CS_CARD_INFO"] = 2610;
        values[valuesById[2611] = "PACKET_SC_CARD_INFO"] = 2611;
        values[valuesById[2612] = "PACKET_SC_CARD_BUYOK"] = 2612;
        values[valuesById[2613] = "PACKET_CS_CARD_RECEIVE"] = 2613;
        values[valuesById[2614] = "PACKET_SC_CARD_RECEIVE"] = 2614;
        values[valuesById[2615] = "PACKET_SC_CARD_MODIFYCONFIG"] = 2615;
        values[valuesById[2616] = "PACKET_CS_CARD_BUY_ONLINE"] = 2616;
        values[valuesById[2617] = "PACKET_SC_CARD_BUY_ONLINE"] = 2617;
        return values;
    })();

    activity.Card = (function() {

        function Card(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Card.prototype.Type = 0;
        Card.prototype.Prize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Card.prototype.ReceiveFirst = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Card.prototype.ReceiveEveryday = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Card.prototype.ValidTime = 0;
        Card.prototype.BuyTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Card.prototype.ReceiveTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        Card.prototype.SystemTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        Card.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(8).int32(m.Type);
            if (m.Prize != null && Object.hasOwnProperty.call(m, "Prize"))
                w.uint32(16).int64(m.Prize);
            if (m.ReceiveFirst != null && Object.hasOwnProperty.call(m, "ReceiveFirst"))
                w.uint32(24).int64(m.ReceiveFirst);
            if (m.ReceiveEveryday != null && Object.hasOwnProperty.call(m, "ReceiveEveryday"))
                w.uint32(32).int64(m.ReceiveEveryday);
            if (m.ValidTime != null && Object.hasOwnProperty.call(m, "ValidTime"))
                w.uint32(40).int32(m.ValidTime);
            if (m.BuyTs != null && Object.hasOwnProperty.call(m, "BuyTs"))
                w.uint32(48).int64(m.BuyTs);
            if (m.ReceiveTs != null && Object.hasOwnProperty.call(m, "ReceiveTs"))
                w.uint32(56).int64(m.ReceiveTs);
            if (m.SystemTs != null && Object.hasOwnProperty.call(m, "SystemTs"))
                w.uint32(64).int64(m.SystemTs);
            return w;
        };

        Card.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.Card();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Type = r.int32();
                    break;
                case 2:
                    m.Prize = r.int64();
                    break;
                case 3:
                    m.ReceiveFirst = r.int64();
                    break;
                case 4:
                    m.ReceiveEveryday = r.int64();
                    break;
                case 5:
                    m.ValidTime = r.int32();
                    break;
                case 6:
                    m.BuyTs = r.int64();
                    break;
                case 7:
                    m.ReceiveTs = r.int64();
                    break;
                case 8:
                    m.SystemTs = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Card;
    })();

    activity.ModifyCard = (function() {

        function ModifyCard(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ModifyCard.prototype.Type = 0;
        ModifyCard.prototype.Prize = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ModifyCard.prototype.ReceiveFirst = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ModifyCard.prototype.ReceiveEveryday = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ModifyCard.prototype.ValidTime = 0;

        ModifyCard.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(8).int32(m.Type);
            if (m.Prize != null && Object.hasOwnProperty.call(m, "Prize"))
                w.uint32(16).int64(m.Prize);
            if (m.ReceiveFirst != null && Object.hasOwnProperty.call(m, "ReceiveFirst"))
                w.uint32(24).int64(m.ReceiveFirst);
            if (m.ReceiveEveryday != null && Object.hasOwnProperty.call(m, "ReceiveEveryday"))
                w.uint32(32).int64(m.ReceiveEveryday);
            if (m.ValidTime != null && Object.hasOwnProperty.call(m, "ValidTime"))
                w.uint32(40).int32(m.ValidTime);
            return w;
        };

        ModifyCard.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.ModifyCard();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Type = r.int32();
                    break;
                case 2:
                    m.Prize = r.int64();
                    break;
                case 3:
                    m.ReceiveFirst = r.int64();
                    break;
                case 4:
                    m.ReceiveEveryday = r.int64();
                    break;
                case 5:
                    m.ValidTime = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ModifyCard;
    })();

    activity.CSCardInfo = (function() {

        function CSCardInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCardInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSCardInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSCardInfo();
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

        return CSCardInfo;
    })();

    activity.SCCardInfo = (function() {

        function SCCardInfo(p) {
            this.Cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCardInfo.prototype.StartAct = 0;
        SCCardInfo.prototype.StartTickets = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCCardInfo.prototype.Version = 0;
        SCCardInfo.prototype.Cards = $util.emptyArray;
        SCCardInfo.prototype.OpRetCode = 0;

        SCCardInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.StartAct != null && Object.hasOwnProperty.call(m, "StartAct"))
                w.uint32(8).int32(m.StartAct);
            if (m.StartTickets != null && Object.hasOwnProperty.call(m, "StartTickets"))
                w.uint32(16).int64(m.StartTickets);
            if (m.Version != null && Object.hasOwnProperty.call(m, "Version"))
                w.uint32(24).int32(m.Version);
            if (m.Cards != null && m.Cards.length) {
                for (var i = 0; i < m.Cards.length; ++i)
                    $root.activity.Card.encode(m.Cards[i], w.uint32(34).fork()).ldelim();
            }
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(40).int32(m.OpRetCode);
            return w;
        };

        SCCardInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCCardInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.StartAct = r.int32();
                    break;
                case 2:
                    m.StartTickets = r.int64();
                    break;
                case 3:
                    m.Version = r.int32();
                    break;
                case 4:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    m.Cards.push($root.activity.Card.decode(r, r.uint32()));
                    break;
                case 5:
                    m.OpRetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCardInfo;
    })();

    activity.SCCardModifyConfig = (function() {

        function SCCardModifyConfig(p) {
            this.Cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCardModifyConfig.prototype.StartAct = 0;
        SCCardModifyConfig.prototype.StartTickets = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCCardModifyConfig.prototype.Version = 0;
        SCCardModifyConfig.prototype.Cards = $util.emptyArray;

        SCCardModifyConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.StartAct != null && Object.hasOwnProperty.call(m, "StartAct"))
                w.uint32(8).int32(m.StartAct);
            if (m.StartTickets != null && Object.hasOwnProperty.call(m, "StartTickets"))
                w.uint32(16).int64(m.StartTickets);
            if (m.Version != null && Object.hasOwnProperty.call(m, "Version"))
                w.uint32(24).int32(m.Version);
            if (m.Cards != null && m.Cards.length) {
                for (var i = 0; i < m.Cards.length; ++i)
                    $root.activity.ModifyCard.encode(m.Cards[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        SCCardModifyConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCCardModifyConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.StartAct = r.int32();
                    break;
                case 2:
                    m.StartTickets = r.int64();
                    break;
                case 3:
                    m.Version = r.int32();
                    break;
                case 4:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    m.Cards.push($root.activity.ModifyCard.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCardModifyConfig;
    })();

    activity.SCCardBuyOK = (function() {

        function SCCardBuyOK(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCardBuyOK.prototype.Type = 0;

        SCCardBuyOK.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(8).int32(m.Type);
            return w;
        };

        SCCardBuyOK.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCCardBuyOK();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCardBuyOK;
    })();

    activity.CSCardReceive = (function() {

        function CSCardReceive(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCardReceive.prototype.Type = 0;

        CSCardReceive.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(8).int32(m.Type);
            return w;
        };

        CSCardReceive.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSCardReceive();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSCardReceive;
    })();

    activity.SCCardReceive = (function() {

        function SCCardReceive(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCardReceive.prototype.Type = 0;
        SCCardReceive.prototype.IncludeFirst = 0;
        SCCardReceive.prototype.OpRetCode = 0;

        SCCardReceive.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(8).int32(m.Type);
            if (m.IncludeFirst != null && Object.hasOwnProperty.call(m, "IncludeFirst"))
                w.uint32(16).int32(m.IncludeFirst);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(24).int32(m.OpRetCode);
            return w;
        };

        SCCardReceive.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCCardReceive();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Type = r.int32();
                    break;
                case 2:
                    m.IncludeFirst = r.int32();
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

        return SCCardReceive;
    })();

    activity.CSCardBuyOnline = (function() {

        function CSCardBuyOnline(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCardBuyOnline.prototype.Type = 0;

        CSCardBuyOnline.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(8).int32(m.Type);
            return w;
        };

        CSCardBuyOnline.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSCardBuyOnline();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Type = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSCardBuyOnline;
    })();

    activity.SCCardBuyOnline = (function() {

        function SCCardBuyOnline(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCardBuyOnline.prototype.Type = 0;
        SCCardBuyOnline.prototype.OpRetCode = 0;

        SCCardBuyOnline.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(8).int32(m.Type);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(16).int32(m.OpRetCode);
            return w;
        };

        SCCardBuyOnline.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCCardBuyOnline();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Type = r.int32();
                    break;
                case 2:
                    m.OpRetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCardBuyOnline;
    })();

    activity.OpResultCode_ActFPay = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess_ActFPay"] = 0;
        values[valuesById[1] = "OPRC_Error_ActFPay"] = 1;
        values[valuesById[6301] = "OPRC_Activity_FPAY_NoStart"] = 6301;
        values[valuesById[6302] = "OPRC_Activity_FPAY_IsBusy"] = 6302;
        values[valuesById[6303] = "OPRC_Activity_FPAY_PAY_NoEnough"] = 6303;
        values[valuesById[6304] = "OPRC_Activity_FPAY_Has_Sign"] = 6304;
        values[valuesById[6305] = "OPRC_Activity_FPAY_Has_Get"] = 6305;
        values[valuesById[6306] = "OPRC_Activity_FPAY_Cant_Get"] = 6306;
        values[valuesById[6307] = "OPRC_Activity_FPAY_Lock"] = 6307;
        return values;
    })();

    activity.FPayPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_FPay_ZERO"] = 0;
        values[valuesById[2620] = "PACKET_CS_FPay_Info"] = 2620;
        values[valuesById[2621] = "PACKET_SC_FPay_Info"] = 2621;
        values[valuesById[2622] = "PACKET_CS_FPay_Get"] = 2622;
        values[valuesById[2623] = "PACKET_SC_FPay_Get"] = 2623;
        values[valuesById[2624] = "PACKET_SC_Notify_ActFPay_State"] = 2624;
        values[valuesById[2625] = "PACKET_SC_Notify_ActFPayGet_State"] = 2625;
        values[valuesById[2626] = "PACKET_CS_FPay_Sign"] = 2626;
        values[valuesById[2627] = "PACKET_SC_FPay_Sign"] = 2627;
        return values;
    })();

    activity.ActFPayWinConfig = (function() {

        function ActFPayWinConfig(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ActFPayWinConfig.prototype.WinType = 0;
        ActFPayWinConfig.prototype.WinRate = 0;

        ActFPayWinConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.WinType != null && Object.hasOwnProperty.call(m, "WinType"))
                w.uint32(8).int32(m.WinType);
            if (m.WinRate != null && Object.hasOwnProperty.call(m, "WinRate"))
                w.uint32(16).int32(m.WinRate);
            return w;
        };

        ActFPayWinConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.ActFPayWinConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.WinType = r.int32();
                    break;
                case 2:
                    m.WinRate = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ActFPayWinConfig;
    })();

    activity.FPayInfo = (function() {

        function FPayInfo(p) {
            this.WinConfig = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FPayInfo.prototype.FPayCoin = 0;
        FPayInfo.prototype.PlayerNum = 0;
        FPayInfo.prototype.FPayGiveCoin = 0;
        FPayInfo.prototype.FPayGiveType = 0;
        FPayInfo.prototype.NeedWinCoin = 0;
        FPayInfo.prototype.StartTime = 0;
        FPayInfo.prototype.EndTime = 0;
        FPayInfo.prototype.WinConfig = $util.emptyArray;

        FPayInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FPayCoin != null && Object.hasOwnProperty.call(m, "FPayCoin"))
                w.uint32(8).int32(m.FPayCoin);
            if (m.PlayerNum != null && Object.hasOwnProperty.call(m, "PlayerNum"))
                w.uint32(16).int32(m.PlayerNum);
            if (m.FPayGiveCoin != null && Object.hasOwnProperty.call(m, "FPayGiveCoin"))
                w.uint32(24).int32(m.FPayGiveCoin);
            if (m.FPayGiveType != null && Object.hasOwnProperty.call(m, "FPayGiveType"))
                w.uint32(32).int32(m.FPayGiveType);
            if (m.NeedWinCoin != null && Object.hasOwnProperty.call(m, "NeedWinCoin"))
                w.uint32(40).int32(m.NeedWinCoin);
            if (m.StartTime != null && Object.hasOwnProperty.call(m, "StartTime"))
                w.uint32(48).int32(m.StartTime);
            if (m.EndTime != null && Object.hasOwnProperty.call(m, "EndTime"))
                w.uint32(56).int32(m.EndTime);
            if (m.WinConfig != null && m.WinConfig.length) {
                for (var i = 0; i < m.WinConfig.length; ++i)
                    $root.activity.ActFPayWinConfig.encode(m.WinConfig[i], w.uint32(66).fork()).ldelim();
            }
            return w;
        };

        FPayInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.FPayInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.FPayCoin = r.int32();
                    break;
                case 2:
                    m.PlayerNum = r.int32();
                    break;
                case 3:
                    m.FPayGiveCoin = r.int32();
                    break;
                case 4:
                    m.FPayGiveType = r.int32();
                    break;
                case 5:
                    m.NeedWinCoin = r.int32();
                    break;
                case 6:
                    m.StartTime = r.int32();
                    break;
                case 7:
                    m.EndTime = r.int32();
                    break;
                case 8:
                    if (!(m.WinConfig && m.WinConfig.length))
                        m.WinConfig = [];
                    m.WinConfig.push($root.activity.ActFPayWinConfig.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FPayInfo;
    })();

    activity.FPayGetInfo = (function() {

        function FPayGetInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FPayGetInfo.prototype.WinCoin = 0;
        FPayGetInfo.prototype.State = 0;

        FPayGetInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.WinCoin != null && Object.hasOwnProperty.call(m, "WinCoin"))
                w.uint32(8).int32(m.WinCoin);
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(16).int32(m.State);
            return w;
        };

        FPayGetInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.FPayGetInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.WinCoin = r.int32();
                    break;
                case 2:
                    m.State = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FPayGetInfo;
    })();

    activity.SCFPayInfo = (function() {

        function SCFPayInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFPayInfo.prototype.Info = null;

        SCFPayInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Info != null && Object.hasOwnProperty.call(m, "Info"))
                $root.activity.FPayInfo.encode(m.Info, w.uint32(10).fork()).ldelim();
            return w;
        };

        SCFPayInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCFPayInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Info = $root.activity.FPayInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFPayInfo;
    })();

    activity.CSFPayInfo = (function() {

        function CSFPayInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSFPayInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSFPayInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSFPayInfo();
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

        return CSFPayInfo;
    })();

    activity.SCGetFPay = (function() {

        function SCGetFPay(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetFPay.prototype.OpRetCode = 0;

        SCGetFPay.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCGetFPay.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCGetFPay();
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

        return SCGetFPay;
    })();

    activity.CSGetFPay = (function() {

        function CSGetFPay(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetFPay.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSGetFPay.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSGetFPay();
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

        return CSGetFPay;
    })();

    activity.SCNotifyFPayState = (function() {

        function SCNotifyFPayState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCNotifyFPayState.prototype.State = 0;

        SCNotifyFPayState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(8).int32(m.State);
            return w;
        };

        SCNotifyFPayState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCNotifyFPayState();
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

        return SCNotifyFPayState;
    })();

    activity.SCNotifyFPayGetState = (function() {

        function SCNotifyFPayGetState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCNotifyFPayGetState.prototype.GetInfo = null;

        SCNotifyFPayGetState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GetInfo != null && Object.hasOwnProperty.call(m, "GetInfo"))
                $root.activity.FPayGetInfo.encode(m.GetInfo, w.uint32(10).fork()).ldelim();
            return w;
        };

        SCNotifyFPayGetState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCNotifyFPayGetState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GetInfo = $root.activity.FPayGetInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCNotifyFPayGetState;
    })();

    activity.SCFPaySign = (function() {

        function SCFPaySign(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFPaySign.prototype.OpRetCode = 0;

        SCFPaySign.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCFPaySign.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCFPaySign();
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

        return SCFPaySign;
    })();

    activity.CSFPaySign = (function() {

        function CSFPaySign(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSFPaySign.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSFPaySign.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSFPaySign();
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

        return CSFPaySign;
    })();

    activity.OpResultCode_ActGold = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess_ActGold"] = 0;
        values[valuesById[1] = "OPRC_Error_ActGold"] = 1;
        values[valuesById[6200] = "OPRC_Activity_GoldTask_TaskIdError"] = 6200;
        values[valuesById[6201] = "OPRC_Activity_GoldTask_NotReach"] = 6201;
        values[valuesById[6202] = "OPRC_Activity_GoldTask_TodayLimit"] = 6202;
        return values;
    })();

    activity.GoldPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_Gold_ZERO"] = 0;
        values[valuesById[2630] = "PACKET_CS_GOLDTASK_DATA"] = 2630;
        values[valuesById[2631] = "PACKET_SC_GOLDTASK_DATA"] = 2631;
        values[valuesById[2632] = "PACKET_CS_GOLDTASK_GET"] = 2632;
        values[valuesById[2633] = "PACKET_SC_GOLDTASK_GET"] = 2633;
        values[valuesById[2634] = "PACKET_SC_GOLDTASK_CHG"] = 2634;
        values[valuesById[2635] = "PACKET_SC_GOLDTASK_DEL"] = 2635;
        values[valuesById[2636] = "PACKET_CS_GOLDCOME_DATA"] = 2636;
        values[valuesById[2637] = "PACKET_SC_GOLDCOME_DATA"] = 2637;
        values[valuesById[2638] = "PACKET_CS_GOLDCOME_RANK"] = 2638;
        values[valuesById[2639] = "PACKET_SC_GOLDCOME_RANK"] = 2639;
        return values;
    })();

    activity.CSGoldTaskData = (function() {

        function CSGoldTaskData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGoldTaskData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSGoldTaskData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSGoldTaskData();
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

        return CSGoldTaskData;
    })();

    activity.GoldTaskData = (function() {

        function GoldTaskData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GoldTaskData.prototype.TaskId = 0;
        GoldTaskData.prototype.Data = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GoldTaskData.prototype.CompletedTimes = 0;
        GoldTaskData.prototype.Status = 0;

        GoldTaskData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TaskId != null && Object.hasOwnProperty.call(m, "TaskId"))
                w.uint32(8).int32(m.TaskId);
            if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
                w.uint32(16).int64(m.Data);
            if (m.CompletedTimes != null && Object.hasOwnProperty.call(m, "CompletedTimes"))
                w.uint32(24).int32(m.CompletedTimes);
            if (m.Status != null && Object.hasOwnProperty.call(m, "Status"))
                w.uint32(32).int32(m.Status);
            return w;
        };

        GoldTaskData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.GoldTaskData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TaskId = r.int32();
                    break;
                case 2:
                    m.Data = r.int64();
                    break;
                case 3:
                    m.CompletedTimes = r.int32();
                    break;
                case 4:
                    m.Status = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GoldTaskData;
    })();

    activity.SCGoldTaskData = (function() {

        function SCGoldTaskData(p) {
            this.Datas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGoldTaskData.prototype.Datas = $util.emptyArray;
        SCGoldTaskData.prototype.Config = "";

        SCGoldTaskData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.activity.GoldTaskData.encode(m.Datas[i], w.uint32(10).fork()).ldelim();
            }
            if (m.Config != null && Object.hasOwnProperty.call(m, "Config"))
                w.uint32(18).string(m.Config);
            return w;
        };

        SCGoldTaskData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCGoldTaskData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.activity.GoldTaskData.decode(r, r.uint32()));
                    break;
                case 2:
                    m.Config = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGoldTaskData;
    })();

    activity.CSGoldTaskGet = (function() {

        function CSGoldTaskGet(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGoldTaskGet.prototype.TaskId = 0;

        CSGoldTaskGet.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TaskId != null && Object.hasOwnProperty.call(m, "TaskId"))
                w.uint32(8).int32(m.TaskId);
            return w;
        };

        CSGoldTaskGet.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSGoldTaskGet();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TaskId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGoldTaskGet;
    })();

    activity.SCGoldTaskGet = (function() {

        function SCGoldTaskGet(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGoldTaskGet.prototype.TaskId = 0;
        SCGoldTaskGet.prototype.Data = null;
        SCGoldTaskGet.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCGoldTaskGet.prototype.OpRetCode = 0;

        SCGoldTaskGet.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TaskId != null && Object.hasOwnProperty.call(m, "TaskId"))
                w.uint32(8).int32(m.TaskId);
            if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
                $root.activity.GoldTaskData.encode(m.Data, w.uint32(18).fork()).ldelim();
            if (m.Score != null && Object.hasOwnProperty.call(m, "Score"))
                w.uint32(24).int64(m.Score);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(32).int32(m.OpRetCode);
            return w;
        };

        SCGoldTaskGet.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCGoldTaskGet();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TaskId = r.int32();
                    break;
                case 2:
                    m.Data = $root.activity.GoldTaskData.decode(r, r.uint32());
                    break;
                case 3:
                    m.Score = r.int64();
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

        return SCGoldTaskGet;
    })();

    activity.SCGoldTaskChg = (function() {

        function SCGoldTaskChg(p) {
            this.Tasks = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGoldTaskChg.prototype.Tasks = $util.emptyArray;

        SCGoldTaskChg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tasks != null && m.Tasks.length) {
                for (var i = 0; i < m.Tasks.length; ++i)
                    $root.activity.GoldTaskData.encode(m.Tasks[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCGoldTaskChg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCGoldTaskChg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Tasks && m.Tasks.length))
                        m.Tasks = [];
                    m.Tasks.push($root.activity.GoldTaskData.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGoldTaskChg;
    })();

    activity.SCGoldTaskDel = (function() {

        function SCGoldTaskDel(p) {
            this.TaskIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGoldTaskDel.prototype.TaskIds = $util.emptyArray;

        SCGoldTaskDel.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TaskIds != null && m.TaskIds.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.TaskIds.length; ++i)
                    w.int32(m.TaskIds[i]);
                w.ldelim();
            }
            return w;
        };

        SCGoldTaskDel.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCGoldTaskDel();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.TaskIds && m.TaskIds.length))
                        m.TaskIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.TaskIds.push(r.int32());
                    } else
                        m.TaskIds.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGoldTaskDel;
    })();

    activity.CSGoldComeData = (function() {

        function CSGoldComeData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGoldComeData.prototype.NeedCfg = false;

        CSGoldComeData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.NeedCfg != null && Object.hasOwnProperty.call(m, "NeedCfg"))
                w.uint32(8).bool(m.NeedCfg);
            return w;
        };

        CSGoldComeData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSGoldComeData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.NeedCfg = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGoldComeData;
    })();

    activity.GoldComeData = (function() {

        function GoldComeData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GoldComeData.prototype.TaskId = 0;
        GoldComeData.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GoldComeData.prototype.GameTimes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GoldComeData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TaskId != null && Object.hasOwnProperty.call(m, "TaskId"))
                w.uint32(8).int32(m.TaskId);
            if (m.Score != null && Object.hasOwnProperty.call(m, "Score"))
                w.uint32(16).int64(m.Score);
            if (m.GameTimes != null && Object.hasOwnProperty.call(m, "GameTimes"))
                w.uint32(24).int64(m.GameTimes);
            return w;
        };

        GoldComeData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.GoldComeData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TaskId = r.int32();
                    break;
                case 2:
                    m.Score = r.int64();
                    break;
                case 3:
                    m.GameTimes = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GoldComeData;
    })();

    activity.SCGoldComeData = (function() {

        function SCGoldComeData(p) {
            this.Datas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGoldComeData.prototype.Datas = $util.emptyArray;
        SCGoldComeData.prototype.Config = "";

        SCGoldComeData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.activity.GoldComeData.encode(m.Datas[i], w.uint32(10).fork()).ldelim();
            }
            if (m.Config != null && Object.hasOwnProperty.call(m, "Config"))
                w.uint32(18).string(m.Config);
            return w;
        };

        SCGoldComeData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCGoldComeData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.activity.GoldComeData.decode(r, r.uint32()));
                    break;
                case 2:
                    m.Config = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGoldComeData;
    })();

    activity.CSGoldComeRank = (function() {

        function CSGoldComeRank(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGoldComeRank.prototype.TaskId = 0;

        CSGoldComeRank.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TaskId != null && Object.hasOwnProperty.call(m, "TaskId"))
                w.uint32(8).int32(m.TaskId);
            return w;
        };

        CSGoldComeRank.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSGoldComeRank();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TaskId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGoldComeRank;
    })();

    activity.GoldComePlayerData = (function() {

        function GoldComePlayerData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GoldComePlayerData.prototype.Rank = 0;
        GoldComePlayerData.prototype.SnId = 0;
        GoldComePlayerData.prototype.HeadIcon = 0;
        GoldComePlayerData.prototype.NickName = "";
        GoldComePlayerData.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GoldComePlayerData.prototype.GameTimes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GoldComePlayerData.prototype.Reward = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GoldComePlayerData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Rank != null && Object.hasOwnProperty.call(m, "Rank"))
                w.uint32(8).int32(m.Rank);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(16).int32(m.SnId);
            if (m.HeadIcon != null && Object.hasOwnProperty.call(m, "HeadIcon"))
                w.uint32(24).int32(m.HeadIcon);
            if (m.NickName != null && Object.hasOwnProperty.call(m, "NickName"))
                w.uint32(34).string(m.NickName);
            if (m.Score != null && Object.hasOwnProperty.call(m, "Score"))
                w.uint32(40).int64(m.Score);
            if (m.GameTimes != null && Object.hasOwnProperty.call(m, "GameTimes"))
                w.uint32(48).int64(m.GameTimes);
            if (m.Reward != null && Object.hasOwnProperty.call(m, "Reward"))
                w.uint32(56).int64(m.Reward);
            return w;
        };

        GoldComePlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.GoldComePlayerData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Rank = r.int32();
                    break;
                case 2:
                    m.SnId = r.int32();
                    break;
                case 3:
                    m.HeadIcon = r.int32();
                    break;
                case 4:
                    m.NickName = r.string();
                    break;
                case 5:
                    m.Score = r.int64();
                    break;
                case 6:
                    m.GameTimes = r.int64();
                    break;
                case 7:
                    m.Reward = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GoldComePlayerData;
    })();

    activity.GoldComeDailyTaskRank = (function() {

        function GoldComeDailyTaskRank(p) {
            this.RankData = [];
            this.ActTime = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GoldComeDailyTaskRank.prototype.RankData = $util.emptyArray;
        GoldComeDailyTaskRank.prototype.ActTime = $util.emptyArray;
        GoldComeDailyTaskRank.prototype.ActState = 0;

        GoldComeDailyTaskRank.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RankData != null && m.RankData.length) {
                for (var i = 0; i < m.RankData.length; ++i)
                    $root.activity.GoldComePlayerData.encode(m.RankData[i], w.uint32(10).fork()).ldelim();
            }
            if (m.ActTime != null && m.ActTime.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.ActTime.length; ++i)
                    w.int32(m.ActTime[i]);
                w.ldelim();
            }
            if (m.ActState != null && Object.hasOwnProperty.call(m, "ActState"))
                w.uint32(24).int32(m.ActState);
            return w;
        };

        GoldComeDailyTaskRank.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.GoldComeDailyTaskRank();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.RankData && m.RankData.length))
                        m.RankData = [];
                    m.RankData.push($root.activity.GoldComePlayerData.decode(r, r.uint32()));
                    break;
                case 2:
                    if (!(m.ActTime && m.ActTime.length))
                        m.ActTime = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ActTime.push(r.int32());
                    } else
                        m.ActTime.push(r.int32());
                    break;
                case 3:
                    m.ActState = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GoldComeDailyTaskRank;
    })();

    activity.SCGoldComeRank = (function() {

        function SCGoldComeRank(p) {
            this.RankList = [];
            this.NextActTime = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGoldComeRank.prototype.TaskId = 0;
        SCGoldComeRank.prototype.RankList = $util.emptyArray;
        SCGoldComeRank.prototype.NextActTime = $util.emptyArray;

        SCGoldComeRank.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TaskId != null && Object.hasOwnProperty.call(m, "TaskId"))
                w.uint32(8).int32(m.TaskId);
            if (m.RankList != null && m.RankList.length) {
                for (var i = 0; i < m.RankList.length; ++i)
                    $root.activity.GoldComeDailyTaskRank.encode(m.RankList[i], w.uint32(18).fork()).ldelim();
            }
            if (m.NextActTime != null && m.NextActTime.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.NextActTime.length; ++i)
                    w.int32(m.NextActTime[i]);
                w.ldelim();
            }
            return w;
        };

        SCGoldComeRank.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCGoldComeRank();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TaskId = r.int32();
                    break;
                case 2:
                    if (!(m.RankList && m.RankList.length))
                        m.RankList = [];
                    m.RankList.push($root.activity.GoldComeDailyTaskRank.decode(r, r.uint32()));
                    break;
                case 3:
                    if (!(m.NextActTime && m.NextActTime.length))
                        m.NextActTime = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.NextActTime.push(r.int32());
                    } else
                        m.NextActTime.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGoldComeRank;
    })();

    activity.OpResultCode_ActLuckTurn = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess_ActLuckTurn"] = 0;
        values[valuesById[1] = "OPRC_Error_ActLuckTurn"] = 1;
        values[valuesById[10014] = "OPRC_LuckyTurntable_Info_FindPlatform_Fail"] = 10014;
        values[valuesById[10015] = "OPRC_LuckyTurntable_Draw_DataTrans_Fail"] = 10015;
        values[valuesById[10016] = "OPRC_LuckyTurntable_Draw_DataTrans_Nil"] = 10016;
        values[valuesById[10017] = "OPRC_LuckyTurntable_Draw_TurntableType_Nil"] = 10017;
        values[valuesById[10018] = "OPRC_LuckyTurntable_Draw_Draw_Fail"] = 10018;
        return values;
    })();

    activity.LuckyTurntablePacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_LuckyTurntable_ZERO"] = 0;
        values[valuesById[2650] = "PACKET_CS_LUCKYTURNTABLE_INFO"] = 2650;
        values[valuesById[2651] = "PACKET_SC_LUCKYTURNTABLE_INFO"] = 2651;
        values[valuesById[2652] = "PACKET_CS_LUCKYTURNTABLE_DRAW"] = 2652;
        values[valuesById[2653] = "PACKET_SC_LUCKYTURNTABLE_DRAW"] = 2653;
        values[valuesById[2654] = "PACKET_SC_LUCKYTURNTABLE_PRIZE"] = 2654;
        values[valuesById[2655] = "PACKET_SC_LUCKYTURNTABLE_GRANDPRIZE"] = 2655;
        values[valuesById[2656] = "PACKET_SC_LUCKYTURNTABLE_MODIFYCONFIG"] = 2656;
        return values;
    })();

    activity.LuckyTurntableConfig = (function() {

        function LuckyTurntableConfig(p) {
            this.Reward = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        LuckyTurntableConfig.prototype.TurntableType = 0;
        LuckyTurntableConfig.prototype.ScoreCost = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        LuckyTurntableConfig.prototype.Reward = $util.emptyArray;

        LuckyTurntableConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TurntableType != null && Object.hasOwnProperty.call(m, "TurntableType"))
                w.uint32(8).int32(m.TurntableType);
            if (m.ScoreCost != null && Object.hasOwnProperty.call(m, "ScoreCost"))
                w.uint32(16).int64(m.ScoreCost);
            if (m.Reward != null && m.Reward.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Reward.length; ++i)
                    w.int64(m.Reward[i]);
                w.ldelim();
            }
            return w;
        };

        LuckyTurntableConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.LuckyTurntableConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TurntableType = r.int32();
                    break;
                case 2:
                    m.ScoreCost = r.int64();
                    break;
                case 3:
                    if (!(m.Reward && m.Reward.length))
                        m.Reward = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Reward.push(r.int64());
                    } else
                        m.Reward.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LuckyTurntableConfig;
    })();

    activity.SCLuckyTurntablePersonalPrize = (function() {

        function SCLuckyTurntablePersonalPrize(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLuckyTurntablePersonalPrize.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLuckyTurntablePersonalPrize.prototype.TurntableType = 0;
        SCLuckyTurntablePersonalPrize.prototype.RewardAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLuckyTurntablePersonalPrize.prototype.SnId = 0;

        SCLuckyTurntablePersonalPrize.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(8).int64(m.Ts);
            if (m.TurntableType != null && Object.hasOwnProperty.call(m, "TurntableType"))
                w.uint32(16).int32(m.TurntableType);
            if (m.RewardAmount != null && Object.hasOwnProperty.call(m, "RewardAmount"))
                w.uint32(24).int64(m.RewardAmount);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(32).int32(m.SnId);
            return w;
        };

        SCLuckyTurntablePersonalPrize.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCLuckyTurntablePersonalPrize();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Ts = r.int64();
                    break;
                case 2:
                    m.TurntableType = r.int32();
                    break;
                case 3:
                    m.RewardAmount = r.int64();
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

        return SCLuckyTurntablePersonalPrize;
    })();

    activity.SCLuckyTurntablePrize = (function() {

        function SCLuckyTurntablePrize(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLuckyTurntablePrize.prototype.Name = "";
        SCLuckyTurntablePrize.prototype.TurntableType = 0;
        SCLuckyTurntablePrize.prototype.RewardAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLuckyTurntablePrize.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLuckyTurntablePrize.prototype.SnId = 0;

        SCLuckyTurntablePrize.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(10).string(m.Name);
            if (m.TurntableType != null && Object.hasOwnProperty.call(m, "TurntableType"))
                w.uint32(16).int32(m.TurntableType);
            if (m.RewardAmount != null && Object.hasOwnProperty.call(m, "RewardAmount"))
                w.uint32(24).int64(m.RewardAmount);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(32).int64(m.Ts);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(40).int32(m.SnId);
            return w;
        };

        SCLuckyTurntablePrize.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCLuckyTurntablePrize();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Name = r.string();
                    break;
                case 2:
                    m.TurntableType = r.int32();
                    break;
                case 3:
                    m.RewardAmount = r.int64();
                    break;
                case 4:
                    m.Ts = r.int64();
                    break;
                case 5:
                    m.SnId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLuckyTurntablePrize;
    })();

    activity.SCLuckyTurntableGrandPrize = (function() {

        function SCLuckyTurntableGrandPrize(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLuckyTurntableGrandPrize.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLuckyTurntableGrandPrize.prototype.TurntableType = 0;
        SCLuckyTurntableGrandPrize.prototype.RewardAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLuckyTurntableGrandPrize.prototype.SnId = 0;
        SCLuckyTurntableGrandPrize.prototype.Name = "";

        SCLuckyTurntableGrandPrize.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(8).int64(m.Ts);
            if (m.TurntableType != null && Object.hasOwnProperty.call(m, "TurntableType"))
                w.uint32(16).int32(m.TurntableType);
            if (m.RewardAmount != null && Object.hasOwnProperty.call(m, "RewardAmount"))
                w.uint32(24).int64(m.RewardAmount);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(32).int32(m.SnId);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(42).string(m.Name);
            return w;
        };

        SCLuckyTurntableGrandPrize.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCLuckyTurntableGrandPrize();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Ts = r.int64();
                    break;
                case 2:
                    m.TurntableType = r.int32();
                    break;
                case 3:
                    m.RewardAmount = r.int64();
                    break;
                case 4:
                    m.SnId = r.int32();
                    break;
                case 5:
                    m.Name = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLuckyTurntableGrandPrize;
    })();

    activity.CSLuckyTurntableInfo = (function() {

        function CSLuckyTurntableInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSLuckyTurntableInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSLuckyTurntableInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSLuckyTurntableInfo();
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

        return CSLuckyTurntableInfo;
    })();

    activity.SCLuckyTurntableInfo = (function() {

        function SCLuckyTurntableInfo(p) {
            this.TurntablesConfigs = [];
            this.Prize = [];
            this.GrandPrize = [];
            this.PersonalPrize = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLuckyTurntableInfo.prototype.StartAct = 0;
        SCLuckyTurntableInfo.prototype.StartTickets = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLuckyTurntableInfo.prototype.Version = 0;
        SCLuckyTurntableInfo.prototype.Score = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLuckyTurntableInfo.prototype.TomorrowScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLuckyTurntableInfo.prototype.TurntablesConfigs = $util.emptyArray;
        SCLuckyTurntableInfo.prototype.Prize = $util.emptyArray;
        SCLuckyTurntableInfo.prototype.GrandPrize = $util.emptyArray;
        SCLuckyTurntableInfo.prototype.PersonalPrize = $util.emptyArray;
        SCLuckyTurntableInfo.prototype.OpRetCode = 0;

        SCLuckyTurntableInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.StartAct != null && Object.hasOwnProperty.call(m, "StartAct"))
                w.uint32(8).int32(m.StartAct);
            if (m.StartTickets != null && Object.hasOwnProperty.call(m, "StartTickets"))
                w.uint32(16).int64(m.StartTickets);
            if (m.Version != null && Object.hasOwnProperty.call(m, "Version"))
                w.uint32(24).int32(m.Version);
            if (m.Score != null && Object.hasOwnProperty.call(m, "Score"))
                w.uint32(32).int64(m.Score);
            if (m.TomorrowScore != null && Object.hasOwnProperty.call(m, "TomorrowScore"))
                w.uint32(40).int64(m.TomorrowScore);
            if (m.TurntablesConfigs != null && m.TurntablesConfigs.length) {
                for (var i = 0; i < m.TurntablesConfigs.length; ++i)
                    $root.activity.LuckyTurntableConfig.encode(m.TurntablesConfigs[i], w.uint32(50).fork()).ldelim();
            }
            if (m.Prize != null && m.Prize.length) {
                for (var i = 0; i < m.Prize.length; ++i)
                    $root.activity.SCLuckyTurntablePrize.encode(m.Prize[i], w.uint32(58).fork()).ldelim();
            }
            if (m.GrandPrize != null && m.GrandPrize.length) {
                for (var i = 0; i < m.GrandPrize.length; ++i)
                    $root.activity.SCLuckyTurntableGrandPrize.encode(m.GrandPrize[i], w.uint32(66).fork()).ldelim();
            }
            if (m.PersonalPrize != null && m.PersonalPrize.length) {
                for (var i = 0; i < m.PersonalPrize.length; ++i)
                    $root.activity.SCLuckyTurntablePersonalPrize.encode(m.PersonalPrize[i], w.uint32(74).fork()).ldelim();
            }
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(80).int32(m.OpRetCode);
            return w;
        };

        SCLuckyTurntableInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCLuckyTurntableInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.StartAct = r.int32();
                    break;
                case 2:
                    m.StartTickets = r.int64();
                    break;
                case 3:
                    m.Version = r.int32();
                    break;
                case 4:
                    m.Score = r.int64();
                    break;
                case 5:
                    m.TomorrowScore = r.int64();
                    break;
                case 6:
                    if (!(m.TurntablesConfigs && m.TurntablesConfigs.length))
                        m.TurntablesConfigs = [];
                    m.TurntablesConfigs.push($root.activity.LuckyTurntableConfig.decode(r, r.uint32()));
                    break;
                case 7:
                    if (!(m.Prize && m.Prize.length))
                        m.Prize = [];
                    m.Prize.push($root.activity.SCLuckyTurntablePrize.decode(r, r.uint32()));
                    break;
                case 8:
                    if (!(m.GrandPrize && m.GrandPrize.length))
                        m.GrandPrize = [];
                    m.GrandPrize.push($root.activity.SCLuckyTurntableGrandPrize.decode(r, r.uint32()));
                    break;
                case 9:
                    if (!(m.PersonalPrize && m.PersonalPrize.length))
                        m.PersonalPrize = [];
                    m.PersonalPrize.push($root.activity.SCLuckyTurntablePersonalPrize.decode(r, r.uint32()));
                    break;
                case 10:
                    m.OpRetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLuckyTurntableInfo;
    })();

    activity.SCLuckyTurntableModifyConfig = (function() {

        function SCLuckyTurntableModifyConfig(p) {
            this.TurntablesConfigs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLuckyTurntableModifyConfig.prototype.StartAct = 0;
        SCLuckyTurntableModifyConfig.prototype.StartTickets = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLuckyTurntableModifyConfig.prototype.Version = 0;
        SCLuckyTurntableModifyConfig.prototype.TurntablesConfigs = $util.emptyArray;

        SCLuckyTurntableModifyConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.StartAct != null && Object.hasOwnProperty.call(m, "StartAct"))
                w.uint32(8).int32(m.StartAct);
            if (m.StartTickets != null && Object.hasOwnProperty.call(m, "StartTickets"))
                w.uint32(16).int64(m.StartTickets);
            if (m.Version != null && Object.hasOwnProperty.call(m, "Version"))
                w.uint32(24).int32(m.Version);
            if (m.TurntablesConfigs != null && m.TurntablesConfigs.length) {
                for (var i = 0; i < m.TurntablesConfigs.length; ++i)
                    $root.activity.LuckyTurntableConfig.encode(m.TurntablesConfigs[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        SCLuckyTurntableModifyConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCLuckyTurntableModifyConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.StartAct = r.int32();
                    break;
                case 2:
                    m.StartTickets = r.int64();
                    break;
                case 3:
                    m.Version = r.int32();
                    break;
                case 4:
                    if (!(m.TurntablesConfigs && m.TurntablesConfigs.length))
                        m.TurntablesConfigs = [];
                    m.TurntablesConfigs.push($root.activity.LuckyTurntableConfig.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLuckyTurntableModifyConfig;
    })();

    activity.CSLuckyTurntableDraw = (function() {

        function CSLuckyTurntableDraw(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSLuckyTurntableDraw.prototype.TurntableType = 0;

        CSLuckyTurntableDraw.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TurntableType != null && Object.hasOwnProperty.call(m, "TurntableType"))
                w.uint32(8).int32(m.TurntableType);
            return w;
        };

        CSLuckyTurntableDraw.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSLuckyTurntableDraw();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TurntableType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSLuckyTurntableDraw;
    })();

    activity.SCLuckyTurntableDraw = (function() {

        function SCLuckyTurntableDraw(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLuckyTurntableDraw.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLuckyTurntableDraw.prototype.RewardAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCLuckyTurntableDraw.prototype.RewardType = 0;
        SCLuckyTurntableDraw.prototype.TurntableType = 0;
        SCLuckyTurntableDraw.prototype.SnId = 0;
        SCLuckyTurntableDraw.prototype.OpRetCode = 0;

        SCLuckyTurntableDraw.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(8).int64(m.Ts);
            if (m.RewardAmount != null && Object.hasOwnProperty.call(m, "RewardAmount"))
                w.uint32(16).int64(m.RewardAmount);
            if (m.RewardType != null && Object.hasOwnProperty.call(m, "RewardType"))
                w.uint32(24).int32(m.RewardType);
            if (m.TurntableType != null && Object.hasOwnProperty.call(m, "TurntableType"))
                w.uint32(32).int32(m.TurntableType);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(40).int32(m.SnId);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(48).int32(m.OpRetCode);
            return w;
        };

        SCLuckyTurntableDraw.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCLuckyTurntableDraw();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Ts = r.int64();
                    break;
                case 2:
                    m.RewardAmount = r.int64();
                    break;
                case 3:
                    m.RewardType = r.int32();
                    break;
                case 4:
                    m.TurntableType = r.int32();
                    break;
                case 5:
                    m.SnId = r.int32();
                    break;
                case 6:
                    m.OpRetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLuckyTurntableDraw;
    })();

    activity.OpResultCode_ActSign = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Activity_Sign_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Activity_Sign_Error"] = 1;
        values[valuesById[1001] = "OPRC_Activity_Sign_Close"] = 1001;
        values[valuesById[1002] = "OPRC_Activity_Sign_PayNum_Low"] = 1002;
        values[valuesById[1003] = "OPRC_Activity_Sign_Config_Vip_Error"] = 1003;
        values[valuesById[1004] = "OPRC_Activity_Sign_Config_Day_Error"] = 1004;
        values[valuesById[1005] = "OPRC_Activity_Sign_Repeat"] = 1005;
        return values;
    })();

    activity.ActSignPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_SignZero"] = 0;
        values[valuesById[2662] = "PACKET_CSSign"] = 2662;
        values[valuesById[2663] = "PACKET_SCSign"] = 2663;
        values[valuesById[2664] = "PACKET_CSSignData"] = 2664;
        values[valuesById[2665] = "PACKET_SCSignData"] = 2665;
        return values;
    })();

    activity.CSSign = (function() {

        function CSSign(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSSign.prototype.SignIndex = 0;
        CSSign.prototype.SignType = 0;

        CSSign.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SignIndex != null && Object.hasOwnProperty.call(m, "SignIndex"))
                w.uint32(8).int32(m.SignIndex);
            if (m.SignType != null && Object.hasOwnProperty.call(m, "SignType"))
                w.uint32(16).int32(m.SignType);
            return w;
        };

        CSSign.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSSign();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SignIndex = r.int32();
                    break;
                case 2:
                    m.SignType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSSign;
    })();

    activity.SCSign = (function() {

        function SCSign(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSign.prototype.SignIndex = 0;
        SCSign.prototype.SignType = 0;
        SCSign.prototype.OpRetCode = 0;

        SCSign.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SignIndex != null && Object.hasOwnProperty.call(m, "SignIndex"))
                w.uint32(8).int32(m.SignIndex);
            if (m.SignType != null && Object.hasOwnProperty.call(m, "SignType"))
                w.uint32(16).int32(m.SignType);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(24).int32(m.OpRetCode);
            return w;
        };

        SCSign.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCSign();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SignIndex = r.int32();
                    break;
                case 2:
                    m.SignType = r.int32();
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

        return SCSign;
    })();

    activity.CSSignData = (function() {

        function CSSignData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSSignData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSSignData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.CSSignData();
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

        return CSSignData;
    })();

    activity.SCSignData = (function() {

        function SCSignData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSignData.prototype.SignCount = 0;
        SCSignData.prototype.TodaySign = 0;

        SCSignData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SignCount != null && Object.hasOwnProperty.call(m, "SignCount"))
                w.uint32(8).int32(m.SignCount);
            if (m.TodaySign != null && Object.hasOwnProperty.call(m, "TodaySign"))
                w.uint32(16).int32(m.TodaySign);
            return w;
        };

        SCSignData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.activity.SCSignData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SignCount = r.int32();
                    break;
                case 2:
                    m.TodaySign = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCSignData;
    })();

    return activity;
})();

module.exports = $root;
