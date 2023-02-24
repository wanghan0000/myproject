/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gradeshop = (function() {

    var gradeshop = {};

    gradeshop.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[1120] = "OPRC_GradeShop_ShopIsNil"] = 1120;
        values[valuesById[1121] = "OPRC_GradeShop_GradeNotEnough"] = 1121;
        values[valuesById[1122] = "OPRC_GradeShop_StockNotEnough"] = 1122;
        values[valuesById[1123] = "OPRC_GradeShop_MailIsFull"] = 1123;
        values[valuesById[1124] = "OPRC_ExchangeMultiple"] = 1124;
        return values;
    })();

    gradeshop.GradeShopPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_GradeShop_ZERO"] = 0;
        values[valuesById[2500] = "PACKET_CS_GRADESHOP_INFO"] = 2500;
        values[valuesById[2501] = "PACKET_SC_GRADESHOP_INFO"] = 2501;
        values[valuesById[2502] = "PACKET_CS_GRADESHOP_ADDRINFO"] = 2502;
        values[valuesById[2503] = "PACKET_SC_GRADESHOP_ADDRINFO"] = 2503;
        values[valuesById[2504] = "PACKET_SC_GRADESHOP_CONFUPDATE"] = 2504;
        values[valuesById[2505] = "PACKET_CS_GRADESHOP_EXCHANGE"] = 2505;
        values[valuesById[2506] = "PACKET_SC_GRADESHOP_EXCHANGE"] = 2506;
        values[valuesById[2507] = "PACKET_CS_GRADESHOP_LIST"] = 2507;
        values[valuesById[2508] = "PACKET_SC_GRADESHOP_LIST"] = 2508;
        values[valuesById[2509] = "PACKET_CS_GRADESHOP_EXIT"] = 2509;
        values[valuesById[2510] = "PACKET_CS_GRADESHOP_DAYNUM"] = 2510;
        values[valuesById[2511] = "PACKET_SC_GRADESHOP_DAYNUM"] = 2511;
        return values;
    })();

    gradeshop.CSGradeShopInfo = (function() {

        function CSGradeShopInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGradeShopInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSGradeShopInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.CSGradeShopInfo();
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

        return CSGradeShopInfo;
    })();

    gradeshop.GradeShopInfo = (function() {

        function GradeShopInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GradeShopInfo.prototype.ShopId = 0;
        GradeShopInfo.prototype.ShopName = "";
        GradeShopInfo.prototype.ExchangeScore = 0;
        GradeShopInfo.prototype.ShopInfo = "";
        GradeShopInfo.prototype.ShopIcoUrl = "";
        GradeShopInfo.prototype.ExchangedNum = 0;
        GradeShopInfo.prototype.DayLimit = 0;
        GradeShopInfo.prototype.ShopType = 0;
        GradeShopInfo.prototype.DayNum = 0;

        GradeShopInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShopId != null && Object.hasOwnProperty.call(m, "ShopId"))
                w.uint32(8).int32(m.ShopId);
            if (m.ShopName != null && Object.hasOwnProperty.call(m, "ShopName"))
                w.uint32(18).string(m.ShopName);
            if (m.ExchangeScore != null && Object.hasOwnProperty.call(m, "ExchangeScore"))
                w.uint32(24).int32(m.ExchangeScore);
            if (m.ShopInfo != null && Object.hasOwnProperty.call(m, "ShopInfo"))
                w.uint32(34).string(m.ShopInfo);
            if (m.ShopIcoUrl != null && Object.hasOwnProperty.call(m, "ShopIcoUrl"))
                w.uint32(42).string(m.ShopIcoUrl);
            if (m.ExchangedNum != null && Object.hasOwnProperty.call(m, "ExchangedNum"))
                w.uint32(48).int32(m.ExchangedNum);
            if (m.DayLimit != null && Object.hasOwnProperty.call(m, "DayLimit"))
                w.uint32(56).int32(m.DayLimit);
            if (m.ShopType != null && Object.hasOwnProperty.call(m, "ShopType"))
                w.uint32(64).int32(m.ShopType);
            if (m.DayNum != null && Object.hasOwnProperty.call(m, "DayNum"))
                w.uint32(72).int32(m.DayNum);
            return w;
        };

        GradeShopInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.GradeShopInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShopId = r.int32();
                    break;
                case 2:
                    m.ShopName = r.string();
                    break;
                case 3:
                    m.ExchangeScore = r.int32();
                    break;
                case 4:
                    m.ShopInfo = r.string();
                    break;
                case 5:
                    m.ShopIcoUrl = r.string();
                    break;
                case 6:
                    m.ExchangedNum = r.int32();
                    break;
                case 7:
                    m.DayLimit = r.int32();
                    break;
                case 8:
                    m.ShopType = r.int32();
                    break;
                case 9:
                    m.DayNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GradeShopInfo;
    })();

    gradeshop.SCGradeShopInfo = (function() {

        function SCGradeShopInfo(p) {
            this.GradeShopInfo = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGradeShopInfo.prototype.Name = "";
        SCGradeShopInfo.prototype.Tel = "";
        SCGradeShopInfo.prototype.Addr = "";
        SCGradeShopInfo.prototype.GradeShopInfo = $util.emptyArray;

        SCGradeShopInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(10).string(m.Name);
            if (m.Tel != null && Object.hasOwnProperty.call(m, "Tel"))
                w.uint32(18).string(m.Tel);
            if (m.Addr != null && Object.hasOwnProperty.call(m, "Addr"))
                w.uint32(26).string(m.Addr);
            if (m.GradeShopInfo != null && m.GradeShopInfo.length) {
                for (var i = 0; i < m.GradeShopInfo.length; ++i)
                    $root.gradeshop.GradeShopInfo.encode(m.GradeShopInfo[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        SCGradeShopInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.SCGradeShopInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Name = r.string();
                    break;
                case 2:
                    m.Tel = r.string();
                    break;
                case 3:
                    m.Addr = r.string();
                    break;
                case 4:
                    if (!(m.GradeShopInfo && m.GradeShopInfo.length))
                        m.GradeShopInfo = [];
                    m.GradeShopInfo.push($root.gradeshop.GradeShopInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGradeShopInfo;
    })();

    gradeshop.SCGradeShopConfUpdate = (function() {

        function SCGradeShopConfUpdate(p) {
            this.GradeShopInfo = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGradeShopConfUpdate.prototype.GradeShopInfo = $util.emptyArray;

        SCGradeShopConfUpdate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GradeShopInfo != null && m.GradeShopInfo.length) {
                for (var i = 0; i < m.GradeShopInfo.length; ++i)
                    $root.gradeshop.GradeShopInfo.encode(m.GradeShopInfo[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCGradeShopConfUpdate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.SCGradeShopConfUpdate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.GradeShopInfo && m.GradeShopInfo.length))
                        m.GradeShopInfo = [];
                    m.GradeShopInfo.push($root.gradeshop.GradeShopInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGradeShopConfUpdate;
    })();

    gradeshop.CSGradeShopAddrInfo = (function() {

        function CSGradeShopAddrInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGradeShopAddrInfo.prototype.Name = "";
        CSGradeShopAddrInfo.prototype.Tel = "";
        CSGradeShopAddrInfo.prototype.Addr = "";

        CSGradeShopAddrInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(10).string(m.Name);
            if (m.Tel != null && Object.hasOwnProperty.call(m, "Tel"))
                w.uint32(18).string(m.Tel);
            if (m.Addr != null && Object.hasOwnProperty.call(m, "Addr"))
                w.uint32(26).string(m.Addr);
            return w;
        };

        CSGradeShopAddrInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.CSGradeShopAddrInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Name = r.string();
                    break;
                case 2:
                    m.Tel = r.string();
                    break;
                case 3:
                    m.Addr = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGradeShopAddrInfo;
    })();

    gradeshop.SCGradeShopAddrInfo = (function() {

        function SCGradeShopAddrInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGradeShopAddrInfo.prototype.OpRetCode = 0;

        SCGradeShopAddrInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCGradeShopAddrInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.SCGradeShopAddrInfo();
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

        return SCGradeShopAddrInfo;
    })();

    gradeshop.CSGradeShopExchange = (function() {

        function CSGradeShopExchange(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGradeShopExchange.prototype.ShopId = 0;
        CSGradeShopExchange.prototype.Name = "";
        CSGradeShopExchange.prototype.Tel = "";
        CSGradeShopExchange.prototype.Addr = "";

        CSGradeShopExchange.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShopId != null && Object.hasOwnProperty.call(m, "ShopId"))
                w.uint32(8).int32(m.ShopId);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Tel != null && Object.hasOwnProperty.call(m, "Tel"))
                w.uint32(26).string(m.Tel);
            if (m.Addr != null && Object.hasOwnProperty.call(m, "Addr"))
                w.uint32(34).string(m.Addr);
            return w;
        };

        CSGradeShopExchange.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.CSGradeShopExchange();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShopId = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Tel = r.string();
                    break;
                case 4:
                    m.Addr = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGradeShopExchange;
    })();

    gradeshop.SCGradeShopExchange = (function() {

        function SCGradeShopExchange(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGradeShopExchange.prototype.OpRetCode = 0;

        SCGradeShopExchange.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCGradeShopExchange.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.SCGradeShopExchange();
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

        return SCGradeShopExchange;
    })();

    gradeshop.CSGradeShopList = (function() {

        function CSGradeShopList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGradeShopList.prototype.LogType = 0;
        CSGradeShopList.prototype.PageNo = 0;

        CSGradeShopList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LogType != null && Object.hasOwnProperty.call(m, "LogType"))
                w.uint32(8).int32(m.LogType);
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(16).int32(m.PageNo);
            return w;
        };

        CSGradeShopList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.CSGradeShopList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LogType = r.int32();
                    break;
                case 2:
                    m.PageNo = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGradeShopList;
    })();

    gradeshop.GradeShopList = (function() {

        function GradeShopList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GradeShopList.prototype.RecordTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GradeShopList.prototype.RecordId = "";
        GradeShopList.prototype.RecordName = "";
        GradeShopList.prototype.GradeNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GradeShopList.prototype.State = 0;

        GradeShopList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RecordTime != null && Object.hasOwnProperty.call(m, "RecordTime"))
                w.uint32(8).int64(m.RecordTime);
            if (m.RecordId != null && Object.hasOwnProperty.call(m, "RecordId"))
                w.uint32(18).string(m.RecordId);
            if (m.RecordName != null && Object.hasOwnProperty.call(m, "RecordName"))
                w.uint32(26).string(m.RecordName);
            if (m.GradeNum != null && Object.hasOwnProperty.call(m, "GradeNum"))
                w.uint32(32).int64(m.GradeNum);
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(40).int32(m.State);
            return w;
        };

        GradeShopList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.GradeShopList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RecordTime = r.int64();
                    break;
                case 2:
                    m.RecordId = r.string();
                    break;
                case 3:
                    m.RecordName = r.string();
                    break;
                case 4:
                    m.GradeNum = r.int64();
                    break;
                case 5:
                    m.State = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GradeShopList;
    })();

    gradeshop.SCGradeShopList = (function() {

        function SCGradeShopList(p) {
            this.GradeShopRecordList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGradeShopList.prototype.LogType = 0;
        SCGradeShopList.prototype.GradeShopRecordList = $util.emptyArray;
        SCGradeShopList.prototype.PageNo = 0;
        SCGradeShopList.prototype.PageSize = 0;
        SCGradeShopList.prototype.PageNum = 0;

        SCGradeShopList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LogType != null && Object.hasOwnProperty.call(m, "LogType"))
                w.uint32(8).int32(m.LogType);
            if (m.GradeShopRecordList != null && m.GradeShopRecordList.length) {
                for (var i = 0; i < m.GradeShopRecordList.length; ++i)
                    $root.gradeshop.GradeShopList.encode(m.GradeShopRecordList[i], w.uint32(18).fork()).ldelim();
            }
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(24).int32(m.PageNo);
            if (m.PageSize != null && Object.hasOwnProperty.call(m, "PageSize"))
                w.uint32(32).int32(m.PageSize);
            if (m.PageNum != null && Object.hasOwnProperty.call(m, "PageNum"))
                w.uint32(40).int32(m.PageNum);
            return w;
        };

        SCGradeShopList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.SCGradeShopList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LogType = r.int32();
                    break;
                case 2:
                    if (!(m.GradeShopRecordList && m.GradeShopRecordList.length))
                        m.GradeShopRecordList = [];
                    m.GradeShopRecordList.push($root.gradeshop.GradeShopList.decode(r, r.uint32()));
                    break;
                case 3:
                    m.PageNo = r.int32();
                    break;
                case 4:
                    m.PageSize = r.int32();
                    break;
                case 5:
                    m.PageNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGradeShopList;
    })();

    gradeshop.CSGradeShopExit = (function() {

        function CSGradeShopExit(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGradeShopExit.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSGradeShopExit.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.CSGradeShopExit();
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

        return CSGradeShopExit;
    })();

    gradeshop.CSGradeShopDayNum = (function() {

        function CSGradeShopDayNum(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGradeShopDayNum.prototype.ShopId = 0;

        CSGradeShopDayNum.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShopId != null && Object.hasOwnProperty.call(m, "ShopId"))
                w.uint32(8).int32(m.ShopId);
            return w;
        };

        CSGradeShopDayNum.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.CSGradeShopDayNum();
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

        return CSGradeShopDayNum;
    })();

    gradeshop.SCGradeShopDayNum = (function() {

        function SCGradeShopDayNum(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGradeShopDayNum.prototype.ShopId = 0;
        SCGradeShopDayNum.prototype.DayNum = 0;

        SCGradeShopDayNum.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShopId != null && Object.hasOwnProperty.call(m, "ShopId"))
                w.uint32(8).int32(m.ShopId);
            if (m.DayNum != null && Object.hasOwnProperty.call(m, "DayNum"))
                w.uint32(16).int32(m.DayNum);
            return w;
        };

        SCGradeShopDayNum.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gradeshop.SCGradeShopDayNum();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShopId = r.int32();
                    break;
                case 2:
                    m.DayNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGradeShopDayNum;
    })();

    return gradeshop;
})();

module.exports = $root;
