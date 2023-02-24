/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.bag = (function() {

    var bag = {};

    bag.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[2] = "OPRC_UseUp"] = 2;
        values[valuesById[3] = "OPRC_IdErr"] = 3;
        values[valuesById[4] = "OPRC_DbErr"] = 4;
        values[valuesById[5] = "OPRC_BagFull"] = 5;
        values[valuesById[6] = "OPRC_NotPlayer"] = 6;
        return values;
    })();

    bag.SPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_BAG_ZERO"] = 0;
        values[valuesById[2530] = "PACKET_ALL_BAG_INFO"] = 2530;
        values[valuesById[2531] = "PACKET_ALL_BAG_USE"] = 2531;
        values[valuesById[2532] = "PACKET_SC_SYNCBAGDATA"] = 2532;
        values[valuesById[2549] = "PACKET_ALL_BAG_END"] = 2549;
        return values;
    })();

    bag.ItemInfo = (function() {

        function ItemInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ItemInfo.prototype.ItemId = 0;
        ItemInfo.prototype.ItemNum = 0;
        ItemInfo.prototype.ObtainTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ItemInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ItemId != null && Object.hasOwnProperty.call(m, "ItemId"))
                w.uint32(8).int32(m.ItemId);
            if (m.ItemNum != null && Object.hasOwnProperty.call(m, "ItemNum"))
                w.uint32(16).int32(m.ItemNum);
            if (m.ObtainTime != null && Object.hasOwnProperty.call(m, "ObtainTime"))
                w.uint32(24).int64(m.ObtainTime);
            return w;
        };

        ItemInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.bag.ItemInfo();
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
                    m.ObtainTime = r.int64();
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

    bag.CSBagInfo = (function() {

        function CSBagInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSBagInfo.prototype.NowLocation = 0;

        CSBagInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.NowLocation != null && Object.hasOwnProperty.call(m, "NowLocation"))
                w.uint32(8).int32(m.NowLocation);
            return w;
        };

        CSBagInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.bag.CSBagInfo();
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

        return CSBagInfo;
    })();

    bag.SCBagInfo = (function() {

        function SCBagInfo(p) {
            this.Infos = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCBagInfo.prototype.RetCode = 0;
        SCBagInfo.prototype.Infos = $util.emptyArray;
        SCBagInfo.prototype.BagNumMax = 0;

        SCBagInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RetCode != null && Object.hasOwnProperty.call(m, "RetCode"))
                w.uint32(8).int32(m.RetCode);
            if (m.Infos != null && m.Infos.length) {
                for (var i = 0; i < m.Infos.length; ++i)
                    $root.bag.ItemInfo.encode(m.Infos[i], w.uint32(18).fork()).ldelim();
            }
            if (m.BagNumMax != null && Object.hasOwnProperty.call(m, "BagNumMax"))
                w.uint32(24).int32(m.BagNumMax);
            return w;
        };

        SCBagInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.bag.SCBagInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RetCode = r.int32();
                    break;
                case 2:
                    if (!(m.Infos && m.Infos.length))
                        m.Infos = [];
                    m.Infos.push($root.bag.ItemInfo.decode(r, r.uint32()));
                    break;
                case 3:
                    m.BagNumMax = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCBagInfo;
    })();

    bag.CSUpBagInfo = (function() {

        function CSUpBagInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSUpBagInfo.prototype.ItemId = 0;
        CSUpBagInfo.prototype.ItemNum = 0;
        CSUpBagInfo.prototype.Opt = 0;
        CSUpBagInfo.prototype.AcceptSnId = 0;
        CSUpBagInfo.prototype.NowEffect = 0;
        CSUpBagInfo.prototype.ShowId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CSUpBagInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ItemId != null && Object.hasOwnProperty.call(m, "ItemId"))
                w.uint32(8).int32(m.ItemId);
            if (m.ItemNum != null && Object.hasOwnProperty.call(m, "ItemNum"))
                w.uint32(16).int32(m.ItemNum);
            if (m.Opt != null && Object.hasOwnProperty.call(m, "Opt"))
                w.uint32(24).int32(m.Opt);
            if (m.AcceptSnId != null && Object.hasOwnProperty.call(m, "AcceptSnId"))
                w.uint32(32).int32(m.AcceptSnId);
            if (m.NowEffect != null && Object.hasOwnProperty.call(m, "NowEffect"))
                w.uint32(40).int32(m.NowEffect);
            if (m.ShowId != null && Object.hasOwnProperty.call(m, "ShowId"))
                w.uint32(48).int64(m.ShowId);
            return w;
        };

        CSUpBagInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.bag.CSUpBagInfo();
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
                    m.Opt = r.int32();
                    break;
                case 4:
                    m.AcceptSnId = r.int32();
                    break;
                case 5:
                    m.NowEffect = r.int32();
                    break;
                case 6:
                    m.ShowId = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSUpBagInfo;
    })();

    bag.SCUpBagInfo = (function() {

        function SCUpBagInfo(p) {
            this.Infos = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCUpBagInfo.prototype.RetCode = 0;
        SCUpBagInfo.prototype.NowItemId = 0;
        SCUpBagInfo.prototype.NowItemNum = 0;
        SCUpBagInfo.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCUpBagInfo.prototype.Diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCUpBagInfo.prototype.Infos = $util.emptyArray;

        SCUpBagInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RetCode != null && Object.hasOwnProperty.call(m, "RetCode"))
                w.uint32(8).int32(m.RetCode);
            if (m.NowItemId != null && Object.hasOwnProperty.call(m, "NowItemId"))
                w.uint32(16).int32(m.NowItemId);
            if (m.NowItemNum != null && Object.hasOwnProperty.call(m, "NowItemNum"))
                w.uint32(24).int32(m.NowItemNum);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(32).int64(m.Coin);
            if (m.Diamond != null && Object.hasOwnProperty.call(m, "Diamond"))
                w.uint32(40).int64(m.Diamond);
            if (m.Infos != null && m.Infos.length) {
                for (var i = 0; i < m.Infos.length; ++i)
                    $root.bag.ItemInfo.encode(m.Infos[i], w.uint32(50).fork()).ldelim();
            }
            return w;
        };

        SCUpBagInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.bag.SCUpBagInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RetCode = r.int32();
                    break;
                case 2:
                    m.NowItemId = r.int32();
                    break;
                case 3:
                    m.NowItemNum = r.int32();
                    break;
                case 4:
                    m.Coin = r.int64();
                    break;
                case 5:
                    m.Diamond = r.int64();
                    break;
                case 6:
                    if (!(m.Infos && m.Infos.length))
                        m.Infos = [];
                    m.Infos.push($root.bag.ItemInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCUpBagInfo;
    })();

    bag.SCSyncBagData = (function() {

        function SCSyncBagData(p) {
            this.Infos = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCSyncBagData.prototype.Infos = $util.emptyArray;

        SCSyncBagData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Infos != null && m.Infos.length) {
                for (var i = 0; i < m.Infos.length; ++i)
                    $root.bag.ItemInfo.encode(m.Infos[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCSyncBagData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.bag.SCSyncBagData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Infos && m.Infos.length))
                        m.Infos = [];
                    m.Infos.push($root.bag.ItemInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCSyncBagData;
    })();

    return bag;
})();

module.exports = $root;
