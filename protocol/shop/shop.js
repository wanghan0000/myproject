/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.shop = (function() {

    var shop = {};

    shop.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[2] = "OPRC_VCoinNotEnough"] = 2;
        values[valuesById[3] = "OPRC_ExchangeLimit"] = 3;
        values[valuesById[4] = "OPRC_ExchangeNotEnough"] = 4;
        values[valuesById[5] = "OPRC_ExchangeDataRtt"] = 5;
        values[valuesById[6] = "OPRC_ExchangeSoldOut"] = 6;
        return values;
    })();

    shop.SPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_SHOP_ZERO"] = 0;
        values[valuesById[2500] = "PACKET_CS_SHOP_INFO"] = 2500;
        values[valuesById[2501] = "PACKET_SC_SHOP_INFO"] = 2501;
        values[valuesById[2502] = "PACKET_CS_SHOP_ADLOOKED"] = 2502;
        values[valuesById[2503] = "PACKET_SC_SHOP_ADLOOKED"] = 2503;
        values[valuesById[2504] = "PACKET_CS_SHOP_VCPAYSHOP"] = 2504;
        values[valuesById[2505] = "PACKET_SC_SHOP_VCPAYSHOP"] = 2505;
        values[valuesById[2506] = "PACKET_CS_SHOP_EXCHANGERECORD"] = 2506;
        values[valuesById[2507] = "PACKET_SC_SHOP_EXCHANGERECORD"] = 2507;
        values[valuesById[2508] = "PACKET_CS_SHOP_EXCHANGE"] = 2508;
        values[valuesById[2509] = "PACKET_SC_SHOP_EXCHANGE"] = 2509;
        values[valuesById[2510] = "PACKET_CS_SHOP_EXCHANGELIST"] = 2510;
        values[valuesById[2511] = "PACKET_SC_SHOP_EXCHANGELIST"] = 2511;
        values[valuesById[2514] = "SHOP_SC_GIVECOIN_INFO"] = 2514;
        return values;
    })();

    shop.ShopInfo = (function() {

        function ShopInfo(p) {
            this.Location = [];
            this.CoolingTime = [];
            this.Label = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ShopInfo.prototype.Id = 0;
        ShopInfo.prototype.AdLookedNum = 0;
        ShopInfo.prototype.AdReceiveNum = 0;
        ShopInfo.prototype.LastLookTime = 0;
        ShopInfo.prototype.RoleAdded = 0;
        ShopInfo.prototype.PetAdded = 0;
        ShopInfo.prototype.ItemId = 0;
        ShopInfo.prototype.Page = 0;
        ShopInfo.prototype.Order = 0;
        ShopInfo.prototype.Type = 0;
        ShopInfo.prototype.Location = $util.emptyArray;
        ShopInfo.prototype.Picture = "";
        ShopInfo.prototype.Name = "";
        ShopInfo.prototype.Ad = 0;
        ShopInfo.prototype.AdTime = 0;
        ShopInfo.prototype.RepeatTimes = 0;
        ShopInfo.prototype.CoolingTime = $util.emptyArray;
        ShopInfo.prototype.Label = $util.emptyArray;
        ShopInfo.prototype.Added = 0;
        ShopInfo.prototype.Amount = 0;
        ShopInfo.prototype.Consume = 0;
        ShopInfo.prototype.ConsumptionAmount = 0;

        ShopInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.AdLookedNum != null && Object.hasOwnProperty.call(m, "AdLookedNum"))
                w.uint32(16).int32(m.AdLookedNum);
            if (m.AdReceiveNum != null && Object.hasOwnProperty.call(m, "AdReceiveNum"))
                w.uint32(24).int32(m.AdReceiveNum);
            if (m.LastLookTime != null && Object.hasOwnProperty.call(m, "LastLookTime"))
                w.uint32(32).int32(m.LastLookTime);
            if (m.RoleAdded != null && Object.hasOwnProperty.call(m, "RoleAdded"))
                w.uint32(40).int32(m.RoleAdded);
            if (m.PetAdded != null && Object.hasOwnProperty.call(m, "PetAdded"))
                w.uint32(48).int32(m.PetAdded);
            if (m.ItemId != null && Object.hasOwnProperty.call(m, "ItemId"))
                w.uint32(56).int32(m.ItemId);
            if (m.Page != null && Object.hasOwnProperty.call(m, "Page"))
                w.uint32(64).int32(m.Page);
            if (m.Order != null && Object.hasOwnProperty.call(m, "Order"))
                w.uint32(72).int32(m.Order);
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(80).int32(m.Type);
            if (m.Location != null && m.Location.length) {
                w.uint32(90).fork();
                for (var i = 0; i < m.Location.length; ++i)
                    w.int32(m.Location[i]);
                w.ldelim();
            }
            if (m.Picture != null && Object.hasOwnProperty.call(m, "Picture"))
                w.uint32(98).string(m.Picture);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(106).string(m.Name);
            if (m.Ad != null && Object.hasOwnProperty.call(m, "Ad"))
                w.uint32(112).int32(m.Ad);
            if (m.AdTime != null && Object.hasOwnProperty.call(m, "AdTime"))
                w.uint32(120).int32(m.AdTime);
            if (m.RepeatTimes != null && Object.hasOwnProperty.call(m, "RepeatTimes"))
                w.uint32(128).int32(m.RepeatTimes);
            if (m.CoolingTime != null && m.CoolingTime.length) {
                w.uint32(138).fork();
                for (var i = 0; i < m.CoolingTime.length; ++i)
                    w.int32(m.CoolingTime[i]);
                w.ldelim();
            }
            if (m.Label != null && m.Label.length) {
                w.uint32(146).fork();
                for (var i = 0; i < m.Label.length; ++i)
                    w.int32(m.Label[i]);
                w.ldelim();
            }
            if (m.Added != null && Object.hasOwnProperty.call(m, "Added"))
                w.uint32(152).int32(m.Added);
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(160).int32(m.Amount);
            if (m.Consume != null && Object.hasOwnProperty.call(m, "Consume"))
                w.uint32(168).int32(m.Consume);
            if (m.ConsumptionAmount != null && Object.hasOwnProperty.call(m, "ConsumptionAmount"))
                w.uint32(176).int32(m.ConsumptionAmount);
            return w;
        };

        ShopInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.ShopInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.AdLookedNum = r.int32();
                    break;
                case 3:
                    m.AdReceiveNum = r.int32();
                    break;
                case 4:
                    m.LastLookTime = r.int32();
                    break;
                case 5:
                    m.RoleAdded = r.int32();
                    break;
                case 6:
                    m.PetAdded = r.int32();
                    break;
                case 7:
                    m.ItemId = r.int32();
                    break;
                case 8:
                    m.Page = r.int32();
                    break;
                case 9:
                    m.Order = r.int32();
                    break;
                case 10:
                    m.Type = r.int32();
                    break;
                case 11:
                    if (!(m.Location && m.Location.length))
                        m.Location = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Location.push(r.int32());
                    } else
                        m.Location.push(r.int32());
                    break;
                case 12:
                    m.Picture = r.string();
                    break;
                case 13:
                    m.Name = r.string();
                    break;
                case 14:
                    m.Ad = r.int32();
                    break;
                case 15:
                    m.AdTime = r.int32();
                    break;
                case 16:
                    m.RepeatTimes = r.int32();
                    break;
                case 17:
                    if (!(m.CoolingTime && m.CoolingTime.length))
                        m.CoolingTime = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.CoolingTime.push(r.int32());
                    } else
                        m.CoolingTime.push(r.int32());
                    break;
                case 18:
                    if (!(m.Label && m.Label.length))
                        m.Label = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Label.push(r.int32());
                    } else
                        m.Label.push(r.int32());
                    break;
                case 19:
                    m.Added = r.int32();
                    break;
                case 20:
                    m.Amount = r.int32();
                    break;
                case 21:
                    m.Consume = r.int32();
                    break;
                case 22:
                    m.ConsumptionAmount = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ShopInfo;
    })();

    shop.CSShopInfo = (function() {

        function CSShopInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSShopInfo.prototype.NowLocation = 0;

        CSShopInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.NowLocation != null && Object.hasOwnProperty.call(m, "NowLocation"))
                w.uint32(8).int32(m.NowLocation);
            return w;
        };

        CSShopInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.CSShopInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.NowLocation = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSShopInfo;
    })();

    shop.SCShopInfo = (function() {

        function SCShopInfo(p) {
            this.Infos = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCShopInfo.prototype.Infos = $util.emptyArray;

        SCShopInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Infos != null && m.Infos.length) {
                for (var i = 0; i < m.Infos.length; ++i)
                    $root.shop.ShopInfo.encode(m.Infos[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCShopInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.SCShopInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Infos && m.Infos.length))
                        m.Infos = [];
                    m.Infos.push($root.shop.ShopInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCShopInfo;
    })();

    shop.CSAdLooked = (function() {

        function CSAdLooked(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSAdLooked.prototype.LookedResult = 0;
        CSAdLooked.prototype.ShopId = 0;

        CSAdLooked.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LookedResult != null && Object.hasOwnProperty.call(m, "LookedResult"))
                w.uint32(8).int32(m.LookedResult);
            if (m.ShopId != null && Object.hasOwnProperty.call(m, "ShopId"))
                w.uint32(16).int32(m.ShopId);
            return w;
        };

        CSAdLooked.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.CSAdLooked();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LookedResult = r.int32();
                    break;
                case 2:
                    m.ShopId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSAdLooked;
    })();

    shop.SCAdLooked = (function() {

        function SCAdLooked(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCAdLooked.prototype.RetCode = 0;
        SCAdLooked.prototype.ShopInfo = null;

        SCAdLooked.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RetCode != null && Object.hasOwnProperty.call(m, "RetCode"))
                w.uint32(8).int32(m.RetCode);
            if (m.ShopInfo != null && Object.hasOwnProperty.call(m, "ShopInfo"))
                $root.shop.ShopInfo.encode(m.ShopInfo, w.uint32(18).fork()).ldelim();
            return w;
        };

        SCAdLooked.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.SCAdLooked();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RetCode = r.int32();
                    break;
                case 2:
                    m.ShopInfo = $root.shop.ShopInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCAdLooked;
    })();

    shop.CSVCPayShop = (function() {

        function CSVCPayShop(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSVCPayShop.prototype.ShopId = 0;

        CSVCPayShop.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShopId != null && Object.hasOwnProperty.call(m, "ShopId"))
                w.uint32(8).int32(m.ShopId);
            return w;
        };

        CSVCPayShop.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.CSVCPayShop();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShopId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSVCPayShop;
    })();

    shop.SCVCPayShop = (function() {

        function SCVCPayShop(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCVCPayShop.prototype.RetCode = 0;
        SCVCPayShop.prototype.ShopInfo = null;

        SCVCPayShop.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RetCode != null && Object.hasOwnProperty.call(m, "RetCode"))
                w.uint32(8).int32(m.RetCode);
            if (m.ShopInfo != null && Object.hasOwnProperty.call(m, "ShopInfo"))
                $root.shop.ShopInfo.encode(m.ShopInfo, w.uint32(18).fork()).ldelim();
            return w;
        };

        SCVCPayShop.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.SCVCPayShop();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RetCode = r.int32();
                    break;
                case 2:
                    m.ShopInfo = $root.shop.ShopInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCVCPayShop;
    })();

    shop.SCNotifyGiveCoinInfo = (function() {

        function SCNotifyGiveCoinInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCNotifyGiveCoinInfo.prototype.GiveCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCNotifyGiveCoinInfo.prototype.GiveTag = 0;

        SCNotifyGiveCoinInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GiveCoin != null && Object.hasOwnProperty.call(m, "GiveCoin"))
                w.uint32(8).int64(m.GiveCoin);
            if (m.GiveTag != null && Object.hasOwnProperty.call(m, "GiveTag"))
                w.uint32(16).int32(m.GiveTag);
            return w;
        };

        SCNotifyGiveCoinInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.SCNotifyGiveCoinInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GiveCoin = r.int64();
                    break;
                case 2:
                    m.GiveTag = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCNotifyGiveCoinInfo;
    })();

    shop.CSShopExchangeRecord = (function() {

        function CSShopExchangeRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSShopExchangeRecord.prototype.PageNo = 0;

        CSShopExchangeRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(8).int32(m.PageNo);
            return w;
        };

        CSShopExchangeRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.CSShopExchangeRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PageNo = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSShopExchangeRecord;
    })();

    shop.ShopExchangeRecord = (function() {

        function ShopExchangeRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ShopExchangeRecord.prototype.CreateTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ShopExchangeRecord.prototype.Name = "";
        ShopExchangeRecord.prototype.OrderId = "";
        ShopExchangeRecord.prototype.State = 0;
        ShopExchangeRecord.prototype.Remark = "";

        ShopExchangeRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.CreateTs != null && Object.hasOwnProperty.call(m, "CreateTs"))
                w.uint32(8).int64(m.CreateTs);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.OrderId != null && Object.hasOwnProperty.call(m, "OrderId"))
                w.uint32(26).string(m.OrderId);
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(32).int32(m.State);
            if (m.Remark != null && Object.hasOwnProperty.call(m, "Remark"))
                w.uint32(42).string(m.Remark);
            return w;
        };

        ShopExchangeRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.ShopExchangeRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.CreateTs = r.int64();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.OrderId = r.string();
                    break;
                case 4:
                    m.State = r.int32();
                    break;
                case 5:
                    m.Remark = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ShopExchangeRecord;
    })();

    shop.SCShopExchangeRecord = (function() {

        function SCShopExchangeRecord(p) {
            this.Infos = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCShopExchangeRecord.prototype.PageNo = 0;
        SCShopExchangeRecord.prototype.PageSize = 0;
        SCShopExchangeRecord.prototype.PageSum = 0;
        SCShopExchangeRecord.prototype.Infos = $util.emptyArray;

        SCShopExchangeRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(8).int32(m.PageNo);
            if (m.PageSize != null && Object.hasOwnProperty.call(m, "PageSize"))
                w.uint32(16).int32(m.PageSize);
            if (m.PageSum != null && Object.hasOwnProperty.call(m, "PageSum"))
                w.uint32(24).int32(m.PageSum);
            if (m.Infos != null && m.Infos.length) {
                for (var i = 0; i < m.Infos.length; ++i)
                    $root.shop.ShopExchangeRecord.encode(m.Infos[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        SCShopExchangeRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.SCShopExchangeRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PageNo = r.int32();
                    break;
                case 2:
                    m.PageSize = r.int32();
                    break;
                case 3:
                    m.PageSum = r.int32();
                    break;
                case 4:
                    if (!(m.Infos && m.Infos.length))
                        m.Infos = [];
                    m.Infos.push($root.shop.ShopExchangeRecord.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCShopExchangeRecord;
    })();

    shop.CSShopExchange = (function() {

        function CSShopExchange(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSShopExchange.prototype.GoodsId = 0;
        CSShopExchange.prototype.UserName = "";
        CSShopExchange.prototype.Mobile = "";
        CSShopExchange.prototype.Comment = "";

        CSShopExchange.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GoodsId != null && Object.hasOwnProperty.call(m, "GoodsId"))
                w.uint32(8).int32(m.GoodsId);
            if (m.UserName != null && Object.hasOwnProperty.call(m, "UserName"))
                w.uint32(18).string(m.UserName);
            if (m.Mobile != null && Object.hasOwnProperty.call(m, "Mobile"))
                w.uint32(26).string(m.Mobile);
            if (m.Comment != null && Object.hasOwnProperty.call(m, "Comment"))
                w.uint32(34).string(m.Comment);
            return w;
        };

        CSShopExchange.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.CSShopExchange();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GoodsId = r.int32();
                    break;
                case 2:
                    m.UserName = r.string();
                    break;
                case 3:
                    m.Mobile = r.string();
                    break;
                case 4:
                    m.Comment = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSShopExchange;
    })();

    shop.SCShopExchange = (function() {

        function SCShopExchange(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCShopExchange.prototype.RetCode = 0;
        SCShopExchange.prototype.CreateTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCShopExchange.prototype.OrderId = "";

        SCShopExchange.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RetCode != null && Object.hasOwnProperty.call(m, "RetCode"))
                w.uint32(8).int32(m.RetCode);
            if (m.CreateTs != null && Object.hasOwnProperty.call(m, "CreateTs"))
                w.uint32(16).int64(m.CreateTs);
            if (m.OrderId != null && Object.hasOwnProperty.call(m, "OrderId"))
                w.uint32(26).string(m.OrderId);
            return w;
        };

        SCShopExchange.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.SCShopExchange();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RetCode = r.int32();
                    break;
                case 2:
                    m.CreateTs = r.int64();
                    break;
                case 3:
                    m.OrderId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCShopExchange;
    })();

    shop.CSShopExchangeList = (function() {

        function CSShopExchangeList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSShopExchangeList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSShopExchangeList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.CSShopExchangeList();
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

        return CSShopExchangeList;
    })();

    shop.ShopExchangeInfo = (function() {

        function ShopExchangeInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ShopExchangeInfo.prototype.Type = 0;
        ShopExchangeInfo.prototype.Picture = "";
        ShopExchangeInfo.prototype.Name = "";
        ShopExchangeInfo.prototype.NeedNum = 0;
        ShopExchangeInfo.prototype.Rule = "";
        ShopExchangeInfo.prototype.GoodsId = 0;
        ShopExchangeInfo.prototype.ShopLimit = 0;
        ShopExchangeInfo.prototype.DayMaxLimit = 0;
        ShopExchangeInfo.prototype.DayPlayLimit = 0;

        ShopExchangeInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(8).int32(m.Type);
            if (m.Picture != null && Object.hasOwnProperty.call(m, "Picture"))
                w.uint32(18).string(m.Picture);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.NeedNum != null && Object.hasOwnProperty.call(m, "NeedNum"))
                w.uint32(32).int32(m.NeedNum);
            if (m.Rule != null && Object.hasOwnProperty.call(m, "Rule"))
                w.uint32(42).string(m.Rule);
            if (m.GoodsId != null && Object.hasOwnProperty.call(m, "GoodsId"))
                w.uint32(48).int32(m.GoodsId);
            if (m.ShopLimit != null && Object.hasOwnProperty.call(m, "ShopLimit"))
                w.uint32(56).int32(m.ShopLimit);
            if (m.DayMaxLimit != null && Object.hasOwnProperty.call(m, "DayMaxLimit"))
                w.uint32(64).int32(m.DayMaxLimit);
            if (m.DayPlayLimit != null && Object.hasOwnProperty.call(m, "DayPlayLimit"))
                w.uint32(72).int32(m.DayPlayLimit);
            return w;
        };

        ShopExchangeInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.ShopExchangeInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Type = r.int32();
                    break;
                case 2:
                    m.Picture = r.string();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.NeedNum = r.int32();
                    break;
                case 5:
                    m.Rule = r.string();
                    break;
                case 6:
                    m.GoodsId = r.int32();
                    break;
                case 7:
                    m.ShopLimit = r.int32();
                    break;
                case 8:
                    m.DayMaxLimit = r.int32();
                    break;
                case 9:
                    m.DayPlayLimit = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ShopExchangeInfo;
    })();

    shop.SCShopExchangeList = (function() {

        function SCShopExchangeList(p) {
            this.Infos = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCShopExchangeList.prototype.RetCode = 0;
        SCShopExchangeList.prototype.Infos = $util.emptyArray;

        SCShopExchangeList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RetCode != null && Object.hasOwnProperty.call(m, "RetCode"))
                w.uint32(8).int32(m.RetCode);
            if (m.Infos != null && m.Infos.length) {
                for (var i = 0; i < m.Infos.length; ++i)
                    $root.shop.ShopExchangeInfo.encode(m.Infos[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCShopExchangeList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.shop.SCShopExchangeList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RetCode = r.int32();
                    break;
                case 2:
                    if (!(m.Infos && m.Infos.length))
                        m.Infos = [];
                    m.Infos.push($root.shop.ShopExchangeInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCShopExchangeList;
    })();

    return shop;
})();

module.exports = $root;
