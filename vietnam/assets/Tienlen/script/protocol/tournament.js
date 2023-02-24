/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.tournament = (function() {

    var tournament = {};

    tournament.TOURNAMENTID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_TM_ZERO"] = 0;
        values[valuesById[2740] = "PACKET_TM_CSTMInfo"] = 2740;
        values[valuesById[2741] = "PACKET_TM_SCTMInfos"] = 2741;
        values[valuesById[2742] = "PACKET_TM_CSTMRankList"] = 2742;
        values[valuesById[2743] = "PACKET_TM_SCTMRankList"] = 2743;
        values[valuesById[2744] = "PACKET_TM_CSSignRace"] = 2744;
        values[valuesById[2745] = "PACKET_TM_SCSignRace"] = 2745;
        values[valuesById[2746] = "PACKET_TM_SCSyncSignNum"] = 2746;
        values[valuesById[2747] = "PACKET_TM_SCPromotionInfo"] = 2747;
        values[valuesById[2748] = "PACKET_TM_SCTMStart"] = 2748;
        values[valuesById[2750] = "PACKET_TM_SCTMStop"] = 2750;
        values[valuesById[2751] = "PACKET_TM_CSTMSeasonInfo"] = 2751;
        values[valuesById[2752] = "PACKET_TM_SCTMSeasonInfo"] = 2752;
        values[valuesById[2753] = "PACKET_TM_CSTMSeasonRank"] = 2753;
        values[valuesById[2754] = "PACKET_TM_SCTMSeasonRank"] = 2754;
        values[valuesById[2755] = "PACKET_TM_CSTMSeasonAward"] = 2755;
        values[valuesById[2756] = "PACKET_TM_SCTMSeasonAward"] = 2756;
        return values;
    })();

    tournament.CSTMInfo = (function() {

        function CSTMInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSTMInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSTMInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.CSTMInfo();
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

        return CSTMInfo;
    })();

    tournament.ItemInfo = (function() {

        function ItemInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ItemInfo.prototype.ItemId = 0;
        ItemInfo.prototype.ItemNum = 0;
        ItemInfo.prototype.Name = "";

        ItemInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ItemId != null && Object.hasOwnProperty.call(m, "ItemId"))
                w.uint32(8).int32(m.ItemId);
            if (m.ItemNum != null && Object.hasOwnProperty.call(m, "ItemNum"))
                w.uint32(16).int32(m.ItemNum);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            return w;
        };

        ItemInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.ItemInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ItemId = r.int32();
                    break;
                case 2:
                    m.ItemNum = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ItemInfo;
    })();

    tournament.MatchInfoAward = (function() {

        function MatchInfoAward(p) {
            this.ItemInfo = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MatchInfoAward.prototype.ItemInfo = $util.emptyArray;
        MatchInfoAward.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MatchInfoAward.prototype.Diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MatchInfoAward.prototype.UpLimit = 0;
        MatchInfoAward.prototype.DownLimit = 0;

        MatchInfoAward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ItemInfo != null && m.ItemInfo.length) {
                for (var i = 0; i < m.ItemInfo.length; ++i)
                    $root.tournament.ItemInfo.encode(m.ItemInfo[i], w.uint32(10).fork()).ldelim();
            }
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int64(m.Coin);
            if (m.Diamond != null && Object.hasOwnProperty.call(m, "Diamond"))
                w.uint32(24).int64(m.Diamond);
            if (m.UpLimit != null && Object.hasOwnProperty.call(m, "UpLimit"))
                w.uint32(32).int32(m.UpLimit);
            if (m.DownLimit != null && Object.hasOwnProperty.call(m, "DownLimit"))
                w.uint32(40).int32(m.DownLimit);
            return w;
        };

        MatchInfoAward.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.MatchInfoAward();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.ItemInfo && m.ItemInfo.length))
                        m.ItemInfo = [];
                    m.ItemInfo.push($root.tournament.ItemInfo.decode(r, r.uint32()));
                    break;
                case 2:
                    m.Coin = r.int64();
                    break;
                case 3:
                    m.Diamond = r.int64();
                    break;
                case 4:
                    m.UpLimit = r.int32();
                    break;
                case 5:
                    m.DownLimit = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MatchInfoAward;
    })();

    tournament.TMInfo = (function() {

        function TMInfo(p) {
            this.MatchPromotion = [];
            this.Award = [];
            this.MatchTimeWeek = [];
            this.MatchTimeStamp = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TMInfo.prototype.Id = 0;
        TMInfo.prototype.GameFreeId = 0;
        TMInfo.prototype.MatchType = 0;
        TMInfo.prototype.MatchName = "";
        TMInfo.prototype.MatchNumebr = 0;
        TMInfo.prototype.MatchPromotion = $util.emptyArray;
        TMInfo.prototype.MatchSwitch = 0;
        TMInfo.prototype.Award = $util.emptyArray;
        TMInfo.prototype.SignupCostCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TMInfo.prototype.SignupCostDiamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TMInfo.prototype.SignupCostItem = null;
        TMInfo.prototype.MatchTimeType = 0;
        TMInfo.prototype.MatchTimeWeek = $util.emptyArray;
        TMInfo.prototype.MatchTimeStartHMS = 0;
        TMInfo.prototype.MatchTimeEndHMS = 0;
        TMInfo.prototype.MatchTimeStamp = $util.emptyArray;
        TMInfo.prototype.TitleURL = "";
        TMInfo.prototype.AwardShow = "";
        TMInfo.prototype.Rule = "";

        TMInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(16).int32(m.GameFreeId);
            if (m.MatchType != null && Object.hasOwnProperty.call(m, "MatchType"))
                w.uint32(24).int32(m.MatchType);
            if (m.MatchName != null && Object.hasOwnProperty.call(m, "MatchName"))
                w.uint32(34).string(m.MatchName);
            if (m.MatchNumebr != null && Object.hasOwnProperty.call(m, "MatchNumebr"))
                w.uint32(40).int32(m.MatchNumebr);
            if (m.MatchPromotion != null && m.MatchPromotion.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.MatchPromotion.length; ++i)
                    w.int32(m.MatchPromotion[i]);
                w.ldelim();
            }
            if (m.MatchSwitch != null && Object.hasOwnProperty.call(m, "MatchSwitch"))
                w.uint32(56).int32(m.MatchSwitch);
            if (m.Award != null && m.Award.length) {
                for (var i = 0; i < m.Award.length; ++i)
                    $root.tournament.MatchInfoAward.encode(m.Award[i], w.uint32(66).fork()).ldelim();
            }
            if (m.SignupCostCoin != null && Object.hasOwnProperty.call(m, "SignupCostCoin"))
                w.uint32(72).int64(m.SignupCostCoin);
            if (m.SignupCostDiamond != null && Object.hasOwnProperty.call(m, "SignupCostDiamond"))
                w.uint32(80).int64(m.SignupCostDiamond);
            if (m.SignupCostItem != null && Object.hasOwnProperty.call(m, "SignupCostItem"))
                $root.tournament.ItemInfo.encode(m.SignupCostItem, w.uint32(90).fork()).ldelim();
            if (m.MatchTimeType != null && Object.hasOwnProperty.call(m, "MatchTimeType"))
                w.uint32(96).int32(m.MatchTimeType);
            if (m.MatchTimeWeek != null && m.MatchTimeWeek.length) {
                w.uint32(106).fork();
                for (var i = 0; i < m.MatchTimeWeek.length; ++i)
                    w.int32(m.MatchTimeWeek[i]);
                w.ldelim();
            }
            if (m.MatchTimeStartHMS != null && Object.hasOwnProperty.call(m, "MatchTimeStartHMS"))
                w.uint32(112).int32(m.MatchTimeStartHMS);
            if (m.MatchTimeEndHMS != null && Object.hasOwnProperty.call(m, "MatchTimeEndHMS"))
                w.uint32(120).int32(m.MatchTimeEndHMS);
            if (m.MatchTimeStamp != null && m.MatchTimeStamp.length) {
                w.uint32(130).fork();
                for (var i = 0; i < m.MatchTimeStamp.length; ++i)
                    w.int64(m.MatchTimeStamp[i]);
                w.ldelim();
            }
            if (m.TitleURL != null && Object.hasOwnProperty.call(m, "TitleURL"))
                w.uint32(138).string(m.TitleURL);
            if (m.AwardShow != null && Object.hasOwnProperty.call(m, "AwardShow"))
                w.uint32(146).string(m.AwardShow);
            if (m.Rule != null && Object.hasOwnProperty.call(m, "Rule"))
                w.uint32(154).string(m.Rule);
            return w;
        };

        TMInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.TMInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.GameFreeId = r.int32();
                    break;
                case 3:
                    m.MatchType = r.int32();
                    break;
                case 4:
                    m.MatchName = r.string();
                    break;
                case 5:
                    m.MatchNumebr = r.int32();
                    break;
                case 6:
                    if (!(m.MatchPromotion && m.MatchPromotion.length))
                        m.MatchPromotion = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MatchPromotion.push(r.int32());
                    } else
                        m.MatchPromotion.push(r.int32());
                    break;
                case 7:
                    m.MatchSwitch = r.int32();
                    break;
                case 8:
                    if (!(m.Award && m.Award.length))
                        m.Award = [];
                    m.Award.push($root.tournament.MatchInfoAward.decode(r, r.uint32()));
                    break;
                case 9:
                    m.SignupCostCoin = r.int64();
                    break;
                case 10:
                    m.SignupCostDiamond = r.int64();
                    break;
                case 11:
                    m.SignupCostItem = $root.tournament.ItemInfo.decode(r, r.uint32());
                    break;
                case 12:
                    m.MatchTimeType = r.int32();
                    break;
                case 13:
                    if (!(m.MatchTimeWeek && m.MatchTimeWeek.length))
                        m.MatchTimeWeek = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MatchTimeWeek.push(r.int32());
                    } else
                        m.MatchTimeWeek.push(r.int32());
                    break;
                case 14:
                    m.MatchTimeStartHMS = r.int32();
                    break;
                case 15:
                    m.MatchTimeEndHMS = r.int32();
                    break;
                case 16:
                    if (!(m.MatchTimeStamp && m.MatchTimeStamp.length))
                        m.MatchTimeStamp = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MatchTimeStamp.push(r.int64());
                    } else
                        m.MatchTimeStamp.push(r.int64());
                    break;
                case 17:
                    m.TitleURL = r.string();
                    break;
                case 18:
                    m.AwardShow = r.string();
                    break;
                case 19:
                    m.Rule = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TMInfo;
    })();

    tournament.SCTMInfos = (function() {

        function SCTMInfos(p) {
            this.TMInfo = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTMInfos.prototype.TMInfo = $util.emptyArray;

        SCTMInfos.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TMInfo != null && m.TMInfo.length) {
                for (var i = 0; i < m.TMInfo.length; ++i)
                    $root.tournament.TMInfo.encode(m.TMInfo[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCTMInfos.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.SCTMInfos();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.TMInfo && m.TMInfo.length))
                        m.TMInfo = [];
                    m.TMInfo.push($root.tournament.TMInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTMInfos;
    })();

    tournament.CSTMRankList = (function() {

        function CSTMRankList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSTMRankList.prototype.TMId = 0;

        CSTMRankList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TMId != null && Object.hasOwnProperty.call(m, "TMId"))
                w.uint32(8).int32(m.TMId);
            return w;
        };

        CSTMRankList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.CSTMRankList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TMId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSTMRankList;
    })();

    tournament.TMRank = (function() {

        function TMRank(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TMRank.prototype.RankId = 0;
        TMRank.prototype.RankName = "";
        TMRank.prototype.WinnerNum = 0;

        TMRank.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RankId != null && Object.hasOwnProperty.call(m, "RankId"))
                w.uint32(8).int32(m.RankId);
            if (m.RankName != null && Object.hasOwnProperty.call(m, "RankName"))
                w.uint32(18).string(m.RankName);
            if (m.WinnerNum != null && Object.hasOwnProperty.call(m, "WinnerNum"))
                w.uint32(24).int32(m.WinnerNum);
            return w;
        };

        TMRank.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.TMRank();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RankId = r.int32();
                    break;
                case 2:
                    m.RankName = r.string();
                    break;
                case 3:
                    m.WinnerNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TMRank;
    })();

    tournament.SCTMRankList = (function() {

        function SCTMRankList(p) {
            this.TMRank = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTMRankList.prototype.TMId = 0;
        SCTMRankList.prototype.TimeRange = "";
        SCTMRankList.prototype.TMRank = $util.emptyArray;

        SCTMRankList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TMId != null && Object.hasOwnProperty.call(m, "TMId"))
                w.uint32(8).int32(m.TMId);
            if (m.TimeRange != null && Object.hasOwnProperty.call(m, "TimeRange"))
                w.uint32(18).string(m.TimeRange);
            if (m.TMRank != null && m.TMRank.length) {
                for (var i = 0; i < m.TMRank.length; ++i)
                    $root.tournament.TMRank.encode(m.TMRank[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        SCTMRankList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.SCTMRankList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TMId = r.int32();
                    break;
                case 2:
                    m.TimeRange = r.string();
                    break;
                case 3:
                    if (!(m.TMRank && m.TMRank.length))
                        m.TMRank = [];
                    m.TMRank.push($root.tournament.TMRank.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTMRankList;
    })();

    tournament.CSSignRace = (function() {

        function CSSignRace(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSSignRace.prototype.OpCode = 0;
        CSSignRace.prototype.TMId = 0;

        CSSignRace.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.TMId != null && Object.hasOwnProperty.call(m, "TMId"))
                w.uint32(16).int32(m.TMId);
            return w;
        };

        CSSignRace.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.CSSignRace();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    m.TMId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSSignRace;
    })();

    tournament.SCSignRace = (function() {

        function SCSignRace(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSignRace.prototype.OpCode = 0;
        SCSignRace.prototype.RetCode = 0;

        SCSignRace.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.RetCode != null && Object.hasOwnProperty.call(m, "RetCode"))
                w.uint32(16).int32(m.RetCode);
            return w;
        };

        SCSignRace.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.SCSignRace();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    m.RetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCSignRace;
    })();

    tournament.SCSyncSignNum = (function() {

        function SCSyncSignNum(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSyncSignNum.prototype.SignNum = 0;
        SCSyncSignNum.prototype.MaxSignNum = 0;

        SCSyncSignNum.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SignNum != null && Object.hasOwnProperty.call(m, "SignNum"))
                w.uint32(8).int32(m.SignNum);
            if (m.MaxSignNum != null && Object.hasOwnProperty.call(m, "MaxSignNum"))
                w.uint32(16).int32(m.MaxSignNum);
            return w;
        };

        SCSyncSignNum.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.SCSyncSignNum();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SignNum = r.int32();
                    break;
                case 2:
                    m.MaxSignNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCSyncSignNum;
    })();

    tournament.SCTMStart = (function() {

        function SCTMStart(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTMStart.prototype.MatchId = 0;

        SCTMStart.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MatchId != null && Object.hasOwnProperty.call(m, "MatchId"))
                w.uint32(8).int32(m.MatchId);
            return w;
        };

        SCTMStart.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.SCTMStart();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.MatchId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTMStart;
    })();

    tournament.SCTMStop = (function() {

        function SCTMStop(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTMStop.prototype.MatchId = 0;

        SCTMStop.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MatchId != null && Object.hasOwnProperty.call(m, "MatchId"))
                w.uint32(8).int32(m.MatchId);
            return w;
        };

        SCTMStop.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.SCTMStop();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.MatchId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTMStop;
    })();

    tournament.RankAward = (function() {

        function RankAward(p) {
            this.ItemInfo = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RankAward.prototype.ItemInfo = $util.emptyArray;
        RankAward.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RankAward.prototype.Diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        RankAward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ItemInfo != null && m.ItemInfo.length) {
                for (var i = 0; i < m.ItemInfo.length; ++i)
                    $root.tournament.ItemInfo.encode(m.ItemInfo[i], w.uint32(10).fork()).ldelim();
            }
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int64(m.Coin);
            if (m.Diamond != null && Object.hasOwnProperty.call(m, "Diamond"))
                w.uint32(24).int64(m.Diamond);
            return w;
        };

        RankAward.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.RankAward();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.ItemInfo && m.ItemInfo.length))
                        m.ItemInfo = [];
                    m.ItemInfo.push($root.tournament.ItemInfo.decode(r, r.uint32()));
                    break;
                case 2:
                    m.Coin = r.int64();
                    break;
                case 3:
                    m.Diamond = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RankAward;
    })();

    tournament.SCPromotionInfo = (function() {

        function SCPromotionInfo(p) {
            this.Record = {};
            this.MatchPromotion = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPromotionInfo.prototype.RetCode = 0;
        SCPromotionInfo.prototype.Round = 0;
        SCPromotionInfo.prototype.RoundCoin = 0;
        SCPromotionInfo.prototype.RankId = 0;
        SCPromotionInfo.prototype.Record = $util.emptyObject;
        SCPromotionInfo.prototype.MatchId = 0;
        SCPromotionInfo.prototype.MatchPromotion = $util.emptyArray;
        SCPromotionInfo.prototype.RankAward = null;

        SCPromotionInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RetCode != null && Object.hasOwnProperty.call(m, "RetCode"))
                w.uint32(8).int32(m.RetCode);
            if (m.Round != null && Object.hasOwnProperty.call(m, "Round"))
                w.uint32(16).int32(m.Round);
            if (m.RoundCoin != null && Object.hasOwnProperty.call(m, "RoundCoin"))
                w.uint32(24).int32(m.RoundCoin);
            if (m.RankId != null && Object.hasOwnProperty.call(m, "RankId"))
                w.uint32(32).int32(m.RankId);
            if (m.Record != null && Object.hasOwnProperty.call(m, "Record")) {
                for (var ks = Object.keys(m.Record), i = 0; i < ks.length; ++i) {
                    w.uint32(42).fork().uint32(8).int32(ks[i]).uint32(16).int32(m.Record[ks[i]]).ldelim();
                }
            }
            if (m.MatchId != null && Object.hasOwnProperty.call(m, "MatchId"))
                w.uint32(48).int32(m.MatchId);
            if (m.MatchPromotion != null && m.MatchPromotion.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.MatchPromotion.length; ++i)
                    w.int32(m.MatchPromotion[i]);
                w.ldelim();
            }
            if (m.RankAward != null && Object.hasOwnProperty.call(m, "RankAward"))
                $root.tournament.RankAward.encode(m.RankAward, w.uint32(66).fork()).ldelim();
            return w;
        };

        SCPromotionInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.SCPromotionInfo(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RetCode = r.int32();
                    break;
                case 2:
                    m.Round = r.int32();
                    break;
                case 3:
                    m.RoundCoin = r.int32();
                    break;
                case 4:
                    m.RankId = r.int32();
                    break;
                case 5:
                    r.skip().pos++;
                    if (m.Record === $util.emptyObject)
                        m.Record = {};
                    k = r.int32();
                    r.pos++;
                    m.Record[k] = r.int32();
                    break;
                case 6:
                    m.MatchId = r.int32();
                    break;
                case 7:
                    if (!(m.MatchPromotion && m.MatchPromotion.length))
                        m.MatchPromotion = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MatchPromotion.push(r.int32());
                    } else
                        m.MatchPromotion.push(r.int32());
                    break;
                case 8:
                    m.RankAward = $root.tournament.RankAward.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPromotionInfo;
    })();

    tournament.CSTMSeasonInfo = (function() {

        function CSTMSeasonInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSTMSeasonInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSTMSeasonInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.CSTMSeasonInfo();
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

        return CSTMSeasonInfo;
    })();

    tournament.SCTMSeasonInfo = (function() {

        function SCTMSeasonInfo(p) {
            this.SeasonTimeStamp = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTMSeasonInfo.prototype.Id = 0;
        SCTMSeasonInfo.prototype.SeasonTimeStamp = $util.emptyArray;
        SCTMSeasonInfo.prototype.Lv = 0;
        SCTMSeasonInfo.prototype.LastLv = 0;
        SCTMSeasonInfo.prototype.IsAward = false;

        SCTMSeasonInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.SeasonTimeStamp != null && m.SeasonTimeStamp.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.SeasonTimeStamp.length; ++i)
                    w.int64(m.SeasonTimeStamp[i]);
                w.ldelim();
            }
            if (m.Lv != null && Object.hasOwnProperty.call(m, "Lv"))
                w.uint32(24).int32(m.Lv);
            if (m.LastLv != null && Object.hasOwnProperty.call(m, "LastLv"))
                w.uint32(32).int32(m.LastLv);
            if (m.IsAward != null && Object.hasOwnProperty.call(m, "IsAward"))
                w.uint32(40).bool(m.IsAward);
            return w;
        };

        SCTMSeasonInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.SCTMSeasonInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    if (!(m.SeasonTimeStamp && m.SeasonTimeStamp.length))
                        m.SeasonTimeStamp = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.SeasonTimeStamp.push(r.int64());
                    } else
                        m.SeasonTimeStamp.push(r.int64());
                    break;
                case 3:
                    m.Lv = r.int32();
                    break;
                case 4:
                    m.LastLv = r.int32();
                    break;
                case 5:
                    m.IsAward = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTMSeasonInfo;
    })();

    tournament.SeasonRank = (function() {

        function SeasonRank(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SeasonRank.prototype.Snid = 0;
        SeasonRank.prototype.Name = "";
        SeasonRank.prototype.Lv = 0;
        SeasonRank.prototype.Rank = 0;

        SeasonRank.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Lv != null && Object.hasOwnProperty.call(m, "Lv"))
                w.uint32(24).int32(m.Lv);
            if (m.Rank != null && Object.hasOwnProperty.call(m, "Rank"))
                w.uint32(32).int32(m.Rank);
            return w;
        };

        SeasonRank.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.SeasonRank();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Lv = r.int32();
                    break;
                case 4:
                    m.Rank = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SeasonRank;
    })();

    tournament.CSTMSeasonRank = (function() {

        function CSTMSeasonRank(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSTMSeasonRank.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSTMSeasonRank.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.CSTMSeasonRank();
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

        return CSTMSeasonRank;
    })();

    tournament.SCTMSeasonRank = (function() {

        function SCTMSeasonRank(p) {
            this.ReasonRanks = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTMSeasonRank.prototype.ReasonRanks = $util.emptyArray;

        SCTMSeasonRank.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ReasonRanks != null && m.ReasonRanks.length) {
                for (var i = 0; i < m.ReasonRanks.length; ++i)
                    $root.tournament.SeasonRank.encode(m.ReasonRanks[i], w.uint32(50).fork()).ldelim();
            }
            return w;
        };

        SCTMSeasonRank.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.SCTMSeasonRank();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 6:
                    if (!(m.ReasonRanks && m.ReasonRanks.length))
                        m.ReasonRanks = [];
                    m.ReasonRanks.push($root.tournament.SeasonRank.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTMSeasonRank;
    })();

    tournament.CSTMSeasonAward = (function() {

        function CSTMSeasonAward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSTMSeasonAward.prototype.Lv = 0;

        CSTMSeasonAward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Lv != null && Object.hasOwnProperty.call(m, "Lv"))
                w.uint32(8).int32(m.Lv);
            return w;
        };

        CSTMSeasonAward.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.CSTMSeasonAward();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Lv = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSTMSeasonAward;
    })();

    tournament.SCTMSeasonAward = (function() {

        function SCTMSeasonAward(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTMSeasonAward.prototype.Lv = 0;
        SCTMSeasonAward.prototype.Code = 0;

        SCTMSeasonAward.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Lv != null && Object.hasOwnProperty.call(m, "Lv"))
                w.uint32(8).int32(m.Lv);
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(16).int32(m.Code);
            return w;
        };

        SCTMSeasonAward.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.tournament.SCTMSeasonAward();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Lv = r.int32();
                    break;
                case 2:
                    m.Code = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTMSeasonAward;
    })();

    return tournament;
})();

module.exports = $root;
