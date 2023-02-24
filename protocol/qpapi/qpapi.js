/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.qpapi = (function() {

    var qpapi = {};

    qpapi.TagCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "SUCCESS"] = 1;
        values[valuesById[2] = "FAILED"] = 2;
        values[valuesById[3] = "SIGN_ERROR"] = 3;
        values[valuesById[4] = "PROTO_DATA_ERROR"] = 4;
        return values;
    })();

    qpapi.ASLogin = (function() {

        function ASLogin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ASLogin.prototype.MerchantTag = "";
        ASLogin.prototype.UserName = "";
        ASLogin.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ASLogin.prototype.Sign = "";

        ASLogin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MerchantTag != null && Object.hasOwnProperty.call(m, "MerchantTag"))
                w.uint32(10).string(m.MerchantTag);
            if (m.UserName != null && Object.hasOwnProperty.call(m, "UserName"))
                w.uint32(18).string(m.UserName);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(24).int64(m.Ts);
            if (m.Sign != null && Object.hasOwnProperty.call(m, "Sign"))
                w.uint32(34).string(m.Sign);
            return w;
        };

        ASLogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.qpapi.ASLogin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.MerchantTag = r.string();
                    break;
                case 2:
                    m.UserName = r.string();
                    break;
                case 3:
                    m.Ts = r.int64();
                    break;
                case 4:
                    m.Sign = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ASLogin;
    })();

    qpapi.SALogin = (function() {

        function SALogin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SALogin.prototype.Tag = 0;
        SALogin.prototype.Msg = "";
        SALogin.prototype.Token = "";
        SALogin.prototype.Snid = 0;

        SALogin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tag != null && Object.hasOwnProperty.call(m, "Tag"))
                w.uint32(8).int32(m.Tag);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            if (m.Token != null && Object.hasOwnProperty.call(m, "Token"))
                w.uint32(26).string(m.Token);
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(32).int32(m.Snid);
            return w;
        };

        SALogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.qpapi.SALogin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Tag = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                case 3:
                    m.Token = r.string();
                    break;
                case 4:
                    m.Snid = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SALogin;
    })();

    qpapi.ASAddCoinById = (function() {

        function ASAddCoinById(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ASAddCoinById.prototype.Username = "";
        ASAddCoinById.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ASAddCoinById.prototype.BillNo = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ASAddCoinById.prototype.MerchantTag = "";
        ASAddCoinById.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ASAddCoinById.prototype.Sign = "";

        ASAddCoinById.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Username != null && Object.hasOwnProperty.call(m, "Username"))
                w.uint32(10).string(m.Username);
            if (m.Gold != null && Object.hasOwnProperty.call(m, "Gold"))
                w.uint32(16).int64(m.Gold);
            if (m.BillNo != null && Object.hasOwnProperty.call(m, "BillNo"))
                w.uint32(24).int64(m.BillNo);
            if (m.MerchantTag != null && Object.hasOwnProperty.call(m, "MerchantTag"))
                w.uint32(34).string(m.MerchantTag);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(40).int64(m.Ts);
            if (m.Sign != null && Object.hasOwnProperty.call(m, "Sign"))
                w.uint32(50).string(m.Sign);
            return w;
        };

        ASAddCoinById.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.qpapi.ASAddCoinById();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Username = r.string();
                    break;
                case 2:
                    m.Gold = r.int64();
                    break;
                case 3:
                    m.BillNo = r.int64();
                    break;
                case 4:
                    m.MerchantTag = r.string();
                    break;
                case 5:
                    m.Ts = r.int64();
                    break;
                case 6:
                    m.Sign = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ASAddCoinById;
    })();

    qpapi.SAAddCoinById = (function() {

        function SAAddCoinById(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SAAddCoinById.prototype.Tag = 0;
        SAAddCoinById.prototype.Msg = "";

        SAAddCoinById.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tag != null && Object.hasOwnProperty.call(m, "Tag"))
                w.uint32(8).int32(m.Tag);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            return w;
        };

        SAAddCoinById.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.qpapi.SAAddCoinById();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Tag = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SAAddCoinById;
    })();

    qpapi.PlayerCoinData = (function() {

        function PlayerCoinData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerCoinData.prototype.Username = "";
        PlayerCoinData.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerCoinData.prototype.Bank = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        PlayerCoinData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Username != null && Object.hasOwnProperty.call(m, "Username"))
                w.uint32(10).string(m.Username);
            if (m.Gold != null && Object.hasOwnProperty.call(m, "Gold"))
                w.uint32(16).int64(m.Gold);
            if (m.Bank != null && Object.hasOwnProperty.call(m, "Bank"))
                w.uint32(24).int64(m.Bank);
            return w;
        };

        PlayerCoinData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.qpapi.PlayerCoinData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Username = r.string();
                    break;
                case 2:
                    m.Gold = r.int64();
                    break;
                case 3:
                    m.Bank = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerCoinData;
    })();

    qpapi.ASMemberGold = (function() {

        function ASMemberGold(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ASMemberGold.prototype.Username = "";
        ASMemberGold.prototype.MerchantTag = "";
        ASMemberGold.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ASMemberGold.prototype.Sign = "";

        ASMemberGold.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Username != null && Object.hasOwnProperty.call(m, "Username"))
                w.uint32(10).string(m.Username);
            if (m.MerchantTag != null && Object.hasOwnProperty.call(m, "MerchantTag"))
                w.uint32(18).string(m.MerchantTag);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(24).int64(m.Ts);
            if (m.Sign != null && Object.hasOwnProperty.call(m, "Sign"))
                w.uint32(34).string(m.Sign);
            return w;
        };

        ASMemberGold.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.qpapi.ASMemberGold();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Username = r.string();
                    break;
                case 2:
                    m.MerchantTag = r.string();
                    break;
                case 3:
                    m.Ts = r.int64();
                    break;
                case 4:
                    m.Sign = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ASMemberGold;
    })();

    qpapi.SAMemberGold = (function() {

        function SAMemberGold(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SAMemberGold.prototype.Tag = 0;
        SAMemberGold.prototype.Msg = "";
        SAMemberGold.prototype.Data = null;

        SAMemberGold.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tag != null && Object.hasOwnProperty.call(m, "Tag"))
                w.uint32(8).int32(m.Tag);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
                $root.qpapi.PlayerCoinData.encode(m.Data, w.uint32(26).fork()).ldelim();
            return w;
        };

        SAMemberGold.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.qpapi.SAMemberGold();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Tag = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                case 3:
                    m.Data = $root.qpapi.PlayerCoinData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SAMemberGold;
    })();

    qpapi.GameHistoryInfo = (function() {

        function GameHistoryInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameHistoryInfo.prototype.GameNumber = "";
        GameHistoryInfo.prototype.CreatedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameHistoryInfo.prototype.Multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameHistoryInfo.prototype.Hash = "";

        GameHistoryInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameNumber != null && Object.hasOwnProperty.call(m, "GameNumber"))
                w.uint32(10).string(m.GameNumber);
            if (m.CreatedTime != null && Object.hasOwnProperty.call(m, "CreatedTime"))
                w.uint32(16).int64(m.CreatedTime);
            if (m.Multiple != null && Object.hasOwnProperty.call(m, "Multiple"))
                w.uint32(24).int64(m.Multiple);
            if (m.Hash != null && Object.hasOwnProperty.call(m, "Hash"))
                w.uint32(34).string(m.Hash);
            return w;
        };

        GameHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.qpapi.GameHistoryInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameNumber = r.string();
                    break;
                case 2:
                    m.CreatedTime = r.int64();
                    break;
                case 3:
                    m.Multiple = r.int64();
                    break;
                case 4:
                    m.Hash = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameHistoryInfo;
    })();

    qpapi.PlayerHistoryInfo = (function() {

        function PlayerHistoryInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerHistoryInfo.prototype.SpinID = "";
        PlayerHistoryInfo.prototype.CreatedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerHistoryInfo.prototype.TotalBetValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerHistoryInfo.prototype.TotalPriceValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerHistoryInfo.prototype.IsFree = false;
        PlayerHistoryInfo.prototype.TotalBonusValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerHistoryInfo.prototype.Multiple = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerHistoryInfo.prototype.Logid = "";
        PlayerHistoryInfo.prototype.Gameid = 0;
        PlayerHistoryInfo.prototype.UserName = "";

        PlayerHistoryInfo.encode = function encode(m, w) {
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
            if (m.Multiple != null && Object.hasOwnProperty.call(m, "Multiple"))
                w.uint32(56).int64(m.Multiple);
            if (m.Logid != null && Object.hasOwnProperty.call(m, "Logid"))
                w.uint32(66).string(m.Logid);
            if (m.Gameid != null && Object.hasOwnProperty.call(m, "Gameid"))
                w.uint32(72).int32(m.Gameid);
            if (m.UserName != null && Object.hasOwnProperty.call(m, "UserName"))
                w.uint32(82).string(m.UserName);
            return w;
        };

        PlayerHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.qpapi.PlayerHistoryInfo();
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
                case 7:
                    m.Multiple = r.int64();
                    break;
                case 8:
                    m.Logid = r.string();
                    break;
                case 9:
                    m.Gameid = r.int32();
                    break;
                case 10:
                    m.UserName = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerHistoryInfo;
    })();

    qpapi.SAPlayerHistory = (function() {

        function SAPlayerHistory(p) {
            this.PlayerHistory = [];
            this.GameHistory = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SAPlayerHistory.prototype.Tag = 0;
        SAPlayerHistory.prototype.Msg = "";
        SAPlayerHistory.prototype.PageNo = 0;
        SAPlayerHistory.prototype.PageSize = 0;
        SAPlayerHistory.prototype.PageSum = 0;
        SAPlayerHistory.prototype.PlayerHistory = $util.emptyArray;
        SAPlayerHistory.prototype.GameHistory = $util.emptyArray;

        SAPlayerHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tag != null && Object.hasOwnProperty.call(m, "Tag"))
                w.uint32(8).int32(m.Tag);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(24).int32(m.PageNo);
            if (m.PageSize != null && Object.hasOwnProperty.call(m, "PageSize"))
                w.uint32(32).int32(m.PageSize);
            if (m.PageSum != null && Object.hasOwnProperty.call(m, "PageSum"))
                w.uint32(40).int32(m.PageSum);
            if (m.PlayerHistory != null && m.PlayerHistory.length) {
                for (var i = 0; i < m.PlayerHistory.length; ++i)
                    $root.qpapi.PlayerHistoryInfo.encode(m.PlayerHistory[i], w.uint32(50).fork()).ldelim();
            }
            if (m.GameHistory != null && m.GameHistory.length) {
                for (var i = 0; i < m.GameHistory.length; ++i)
                    $root.qpapi.GameHistoryInfo.encode(m.GameHistory[i], w.uint32(58).fork()).ldelim();
            }
            return w;
        };

        SAPlayerHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.qpapi.SAPlayerHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Tag = r.int32();
                    break;
                case 2:
                    m.Msg = r.string();
                    break;
                case 3:
                    m.PageNo = r.int32();
                    break;
                case 4:
                    m.PageSize = r.int32();
                    break;
                case 5:
                    m.PageSum = r.int32();
                    break;
                case 6:
                    if (!(m.PlayerHistory && m.PlayerHistory.length))
                        m.PlayerHistory = [];
                    m.PlayerHistory.push($root.qpapi.PlayerHistoryInfo.decode(r, r.uint32()));
                    break;
                case 7:
                    if (!(m.GameHistory && m.GameHistory.length))
                        m.GameHistory = [];
                    m.GameHistory.push($root.qpapi.GameHistoryInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SAPlayerHistory;
    })();

    qpapi.ASPlayerHistory = (function() {

        function ASPlayerHistory(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ASPlayerHistory.prototype.Username = "";
        ASPlayerHistory.prototype.MerchantTag = "";
        ASPlayerHistory.prototype.GameHistoryModel = 0;
        ASPlayerHistory.prototype.StartTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ASPlayerHistory.prototype.EndTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ASPlayerHistory.prototype.PageNo = 0;
        ASPlayerHistory.prototype.PageSize = 0;
        ASPlayerHistory.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ASPlayerHistory.prototype.Sign = "";

        ASPlayerHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Username != null && Object.hasOwnProperty.call(m, "Username"))
                w.uint32(10).string(m.Username);
            if (m.MerchantTag != null && Object.hasOwnProperty.call(m, "MerchantTag"))
                w.uint32(18).string(m.MerchantTag);
            if (m.GameHistoryModel != null && Object.hasOwnProperty.call(m, "GameHistoryModel"))
                w.uint32(24).int32(m.GameHistoryModel);
            if (m.StartTime != null && Object.hasOwnProperty.call(m, "StartTime"))
                w.uint32(32).int64(m.StartTime);
            if (m.EndTime != null && Object.hasOwnProperty.call(m, "EndTime"))
                w.uint32(40).int64(m.EndTime);
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(48).int32(m.PageNo);
            if (m.PageSize != null && Object.hasOwnProperty.call(m, "PageSize"))
                w.uint32(56).int32(m.PageSize);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(64).int64(m.Ts);
            if (m.Sign != null && Object.hasOwnProperty.call(m, "Sign"))
                w.uint32(74).string(m.Sign);
            return w;
        };

        ASPlayerHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.qpapi.ASPlayerHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Username = r.string();
                    break;
                case 2:
                    m.MerchantTag = r.string();
                    break;
                case 3:
                    m.GameHistoryModel = r.int32();
                    break;
                case 4:
                    m.StartTime = r.int64();
                    break;
                case 5:
                    m.EndTime = r.int64();
                    break;
                case 6:
                    m.PageNo = r.int32();
                    break;
                case 7:
                    m.PageSize = r.int32();
                    break;
                case 8:
                    m.Ts = r.int64();
                    break;
                case 9:
                    m.Sign = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ASPlayerHistory;
    })();

    return qpapi;
})();

$root.google = (function() {

    var google = {};

    google.protobuf = (function() {

        var protobuf = {};

        protobuf.Timestamp = (function() {

            function Timestamp(p) {
                if (p)
                    for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                        if (p[ks[i]] != null)
                            this[ks[i]] = p[ks[i]];
            }

            Timestamp.prototype.seconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
            Timestamp.prototype.nanos = 0;

            Timestamp.encode = function encode(m, w) {
                if (!w)
                    w = $Writer.create();
                if (m.seconds != null && Object.hasOwnProperty.call(m, "seconds"))
                    w.uint32(8).int64(m.seconds);
                if (m.nanos != null && Object.hasOwnProperty.call(m, "nanos"))
                    w.uint32(16).int32(m.nanos);
                return w;
            };

            Timestamp.decode = function decode(r, l) {
                if (!(r instanceof $Reader))
                    r = $Reader.create(r);
                var c = l === undefined ? r.len : r.pos + l, m = new $root.google.protobuf.Timestamp();
                while (r.pos < c) {
                    var t = r.uint32();
                    switch (t >>> 3) {
                    case 1:
                        m.seconds = r.int64();
                        break;
                    case 2:
                        m.nanos = r.int32();
                        break;
                    default:
                        r.skipType(t & 7);
                        break;
                    }
                }
                return m;
            };

            return Timestamp;
        })();

        return protobuf;
    })();

    return google;
})();

module.exports = $root;
