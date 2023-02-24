/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.telegramapi = (function() {

    var telegramapi = {};

    telegramapi.TagCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "UNKNOWN"] = 0;
        values[valuesById[1] = "SUCCESS"] = 1;
        values[valuesById[2] = "FAILED"] = 2;
        values[valuesById[3] = "SIGN_ERROR"] = 3;
        values[valuesById[4] = "PROTO_DATA_ERROR"] = 4;
        return values;
    })();

    telegramapi.ASLogin = (function() {

        function ASLogin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ASLogin.prototype.TelegramId = "";
        ASLogin.prototype.PlatformTag = "";
        ASLogin.prototype.Username = "";
        ASLogin.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ASLogin.prototype.Sign = "";

        ASLogin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TelegramId != null && Object.hasOwnProperty.call(m, "TelegramId"))
                w.uint32(10).string(m.TelegramId);
            if (m.PlatformTag != null && Object.hasOwnProperty.call(m, "PlatformTag"))
                w.uint32(18).string(m.PlatformTag);
            if (m.Username != null && Object.hasOwnProperty.call(m, "Username"))
                w.uint32(26).string(m.Username);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(32).int64(m.Ts);
            if (m.Sign != null && Object.hasOwnProperty.call(m, "Sign"))
                w.uint32(42).string(m.Sign);
            return w;
        };

        ASLogin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.ASLogin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TelegramId = r.string();
                    break;
                case 2:
                    m.PlatformTag = r.string();
                    break;
                case 3:
                    m.Username = r.string();
                    break;
                case 4:
                    m.Ts = r.int64();
                    break;
                case 5:
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

    telegramapi.SALogin = (function() {

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
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.SALogin();
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

    telegramapi.ASAddCoinById = (function() {

        function ASAddCoinById(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ASAddCoinById.prototype.ID = 0;
        ASAddCoinById.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ASAddCoinById.prototype.GoldEx = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ASAddCoinById.prototype.Oper = "";
        ASAddCoinById.prototype.Desc = "";
        ASAddCoinById.prototype.BillNo = 0;
        ASAddCoinById.prototype.Platform = "";
        ASAddCoinById.prototype.LogType = 0;
        ASAddCoinById.prototype.IsAccTodayRecharge = false;
        ASAddCoinById.prototype.NeedFlowRate = 0;
        ASAddCoinById.prototype.NeedGiveFlowRate = 0;

        ASAddCoinById.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ID != null && Object.hasOwnProperty.call(m, "ID"))
                w.uint32(8).int32(m.ID);
            if (m.Gold != null && Object.hasOwnProperty.call(m, "Gold"))
                w.uint32(16).int64(m.Gold);
            if (m.GoldEx != null && Object.hasOwnProperty.call(m, "GoldEx"))
                w.uint32(24).int64(m.GoldEx);
            if (m.Oper != null && Object.hasOwnProperty.call(m, "Oper"))
                w.uint32(34).string(m.Oper);
            if (m.Desc != null && Object.hasOwnProperty.call(m, "Desc"))
                w.uint32(42).string(m.Desc);
            if (m.BillNo != null && Object.hasOwnProperty.call(m, "BillNo"))
                w.uint32(48).int32(m.BillNo);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(58).string(m.Platform);
            if (m.LogType != null && Object.hasOwnProperty.call(m, "LogType"))
                w.uint32(64).int32(m.LogType);
            if (m.IsAccTodayRecharge != null && Object.hasOwnProperty.call(m, "IsAccTodayRecharge"))
                w.uint32(72).bool(m.IsAccTodayRecharge);
            if (m.NeedFlowRate != null && Object.hasOwnProperty.call(m, "NeedFlowRate"))
                w.uint32(80).int32(m.NeedFlowRate);
            if (m.NeedGiveFlowRate != null && Object.hasOwnProperty.call(m, "NeedGiveFlowRate"))
                w.uint32(88).int32(m.NeedGiveFlowRate);
            return w;
        };

        ASAddCoinById.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.ASAddCoinById();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ID = r.int32();
                    break;
                case 2:
                    m.Gold = r.int64();
                    break;
                case 3:
                    m.GoldEx = r.int64();
                    break;
                case 4:
                    m.Oper = r.string();
                    break;
                case 5:
                    m.Desc = r.string();
                    break;
                case 6:
                    m.BillNo = r.int32();
                    break;
                case 7:
                    m.Platform = r.string();
                    break;
                case 8:
                    m.LogType = r.int32();
                    break;
                case 9:
                    m.IsAccTodayRecharge = r.bool();
                    break;
                case 10:
                    m.NeedFlowRate = r.int32();
                    break;
                case 11:
                    m.NeedGiveFlowRate = r.int32();
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

    telegramapi.SAAddCoinById = (function() {

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
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.SAAddCoinById();
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

    telegramapi.PlayerCoinData = (function() {

        function PlayerCoinData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerCoinData.prototype.Id = 0;
        PlayerCoinData.prototype.Gold = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerCoinData.prototype.Bank = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        PlayerCoinData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Gold != null && Object.hasOwnProperty.call(m, "Gold"))
                w.uint32(16).int64(m.Gold);
            if (m.Bank != null && Object.hasOwnProperty.call(m, "Bank"))
                w.uint32(24).int64(m.Bank);
            return w;
        };

        PlayerCoinData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.PlayerCoinData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
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

    telegramapi.ASMemberGold = (function() {

        function ASMemberGold(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ASMemberGold.prototype.Snid = 0;
        ASMemberGold.prototype.Platform = "";

        ASMemberGold.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(18).string(m.Platform);
            return w;
        };

        ASMemberGold.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.ASMemberGold();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    m.Platform = r.string();
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

    telegramapi.SAMemberGold = (function() {

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
                $root.telegramapi.PlayerCoinData.encode(m.Data, w.uint32(26).fork()).ldelim();
            return w;
        };

        SAMemberGold.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.SAMemberGold();
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
                    m.Data = $root.telegramapi.PlayerCoinData.decode(r, r.uint32());
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

    telegramapi.ASCrachHash = (function() {

        function ASCrachHash(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ASCrachHash.prototype.Hash = "";
        ASCrachHash.prototype.Wheel = 0;

        ASCrachHash.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Hash != null && Object.hasOwnProperty.call(m, "Hash"))
                w.uint32(10).string(m.Hash);
            if (m.Wheel != null && Object.hasOwnProperty.call(m, "Wheel"))
                w.uint32(16).int32(m.Wheel);
            return w;
        };

        ASCrachHash.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.ASCrachHash();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Hash = r.string();
                    break;
                case 2:
                    m.Wheel = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ASCrachHash;
    })();

    telegramapi.SACrachHash = (function() {

        function SACrachHash(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SACrachHash.prototype.Tag = 0;
        SACrachHash.prototype.Msg = "";
        SACrachHash.prototype.Multiple = 0;

        SACrachHash.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tag != null && Object.hasOwnProperty.call(m, "Tag"))
                w.uint32(8).int32(m.Tag);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            if (m.Multiple != null && Object.hasOwnProperty.call(m, "Multiple"))
                w.uint32(24).int32(m.Multiple);
            return w;
        };

        SACrachHash.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.SACrachHash();
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
                    m.Multiple = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SACrachHash;
    })();

    telegramapi.GameHistoryInfo = (function() {

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
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.GameHistoryInfo();
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

    telegramapi.PlayerHistoryInfo = (function() {

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
            return w;
        };

        PlayerHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.PlayerHistoryInfo();
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
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerHistoryInfo;
    })();

    telegramapi.SAPlayerHistory = (function() {

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
        SAPlayerHistory.prototype.PlayerHistory = $util.emptyArray;
        SAPlayerHistory.prototype.GameHistory = $util.emptyArray;

        SAPlayerHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tag != null && Object.hasOwnProperty.call(m, "Tag"))
                w.uint32(8).int32(m.Tag);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(18).string(m.Msg);
            if (m.PlayerHistory != null && m.PlayerHistory.length) {
                for (var i = 0; i < m.PlayerHistory.length; ++i)
                    $root.telegramapi.PlayerHistoryInfo.encode(m.PlayerHistory[i], w.uint32(26).fork()).ldelim();
            }
            if (m.GameHistory != null && m.GameHistory.length) {
                for (var i = 0; i < m.GameHistory.length; ++i)
                    $root.telegramapi.GameHistoryInfo.encode(m.GameHistory[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        SAPlayerHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.SAPlayerHistory();
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
                    if (!(m.PlayerHistory && m.PlayerHistory.length))
                        m.PlayerHistory = [];
                    m.PlayerHistory.push($root.telegramapi.PlayerHistoryInfo.decode(r, r.uint32()));
                    break;
                case 4:
                    if (!(m.GameHistory && m.GameHistory.length))
                        m.GameHistory = [];
                    m.GameHistory.push($root.telegramapi.GameHistoryInfo.decode(r, r.uint32()));
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

    telegramapi.ASPlayerHistory = (function() {

        function ASPlayerHistory(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ASPlayerHistory.prototype.Snid = 0;
        ASPlayerHistory.prototype.Platform = "";
        ASPlayerHistory.prototype.GameId = 0;
        ASPlayerHistory.prototype.GameHistoryModel = 0;

        ASPlayerHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(18).string(m.Platform);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(24).int32(m.GameId);
            if (m.GameHistoryModel != null && Object.hasOwnProperty.call(m, "GameHistoryModel"))
                w.uint32(32).int32(m.GameHistoryModel);
            return w;
        };

        ASPlayerHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.telegramapi.ASPlayerHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    m.Platform = r.string();
                    break;
                case 3:
                    m.GameId = r.int32();
                    break;
                case 4:
                    m.GameHistoryModel = r.int32();
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

    return telegramapi;
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
