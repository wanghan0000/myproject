/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.welfare = (function() {

    var welfare = {};

    welfare.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[2] = "OPRC_NoTimes"] = 2;
        values[valuesById[3] = "OPRC_CoinTooMore"] = 3;
        values[valuesById[4] = "OPRC_ErrCoin"] = 4;
        return values;
    })();

    welfare.SPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_SHOP_ZERO"] = 0;
        values[valuesById[2580] = "PACKET_CS_WELF_GETRELIEFFUND"] = 2580;
        values[valuesById[2581] = "PACKET_SC_WELF_GETRELIEFFUND"] = 2581;
        values[valuesById[2582] = "PACKET_CS_WELF_GETTURNPLATE"] = 2582;
        values[valuesById[2583] = "PACKET_SC_WELF_GETTURNPLATE"] = 2583;
        values[valuesById[2584] = "PACKET_CS_WELF_GETADDUPSIGN"] = 2584;
        values[valuesById[2585] = "PACKET_SC_WELF_GETADDUPSIGN"] = 2585;
        values[valuesById[2586] = "PACKET_CS_WELF_WELFAREINFO"] = 2586;
        values[valuesById[2587] = "PACKET_SC_WELF_WELFAREINFO"] = 2587;
        values[valuesById[2588] = "PACKET_CS_WELF_BLINBOXINFO"] = 2588;
        values[valuesById[2589] = "PACKET_SC_WELF_BLINBOXINFO"] = 2589;
        values[valuesById[2590] = "PACKET_CS_WELF_GETBLINBOX"] = 2590;
        values[valuesById[2591] = "PACKET_SC_WELF_GETBLINBOX"] = 2591;
        values[valuesById[2592] = "PACKET_CS_WELF_FIRSTPAYINFO"] = 2592;
        values[valuesById[2593] = "PACKET_SC_WELF_FIRSTPAYINFO"] = 2593;
        values[valuesById[2594] = "PACKET_CS_WELF_FIRSTPAY"] = 2594;
        values[valuesById[2595] = "PACKET_SC_WELF_FIRSTPAY"] = 2595;
        values[valuesById[2596] = "PACKET_CS_WELF_CONTINPAYINFO"] = 2596;
        values[valuesById[2597] = "PACKET_SC_WELF_CONTINPAYINFO"] = 2597;
        values[valuesById[2598] = "PACKET_CS_WELF_CONTINPAY"] = 2598;
        values[valuesById[2599] = "PACKET_SC_WELF_CONTINPAY"] = 2599;
        return values;
    })();

    welfare.CSGetReliefFund = (function() {

        function CSGetReliefFund(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetReliefFund.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSGetReliefFund.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.CSGetReliefFund();
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

        return CSGetReliefFund;
    })();

    welfare.SCGetReliefFund = (function() {

        function SCGetReliefFund(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetReliefFund.prototype.OpRetCode = 0;
        SCGetReliefFund.prototype.Times = 0;
        SCGetReliefFund.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCGetReliefFund.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Times != null && Object.hasOwnProperty.call(m, "Times"))
                w.uint32(16).int32(m.Times);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(24).int64(m.Coin);
            return w;
        };

        SCGetReliefFund.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.SCGetReliefFund();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Times = r.int32();
                    break;
                case 3:
                    m.Coin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetReliefFund;
    })();

    welfare.WelfareDate = (function() {

        function WelfareDate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WelfareDate.prototype.Grade = 0;
        WelfareDate.prototype.Type = 0;
        WelfareDate.prototype.Name = "";
        WelfareDate.prototype.Item_Id = 0;

        WelfareDate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Grade != null && Object.hasOwnProperty.call(m, "Grade"))
                w.uint32(8).int32(m.Grade);
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(16).int32(m.Type);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Item_Id != null && Object.hasOwnProperty.call(m, "Item_Id"))
                w.uint32(32).int32(m.Item_Id);
            return w;
        };

        WelfareDate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.WelfareDate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Grade = r.int32();
                    break;
                case 2:
                    m.Type = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.Item_Id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WelfareDate;
    })();

    welfare.CSGetTurnplate = (function() {

        function CSGetTurnplate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetTurnplate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSGetTurnplate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.CSGetTurnplate();
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

        return CSGetTurnplate;
    })();

    welfare.SCGetTurnplate = (function() {

        function SCGetTurnplate(p) {
            this.Date = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetTurnplate.prototype.OpRetCode = 0;
        SCGetTurnplate.prototype.Date = $util.emptyArray;
        SCGetTurnplate.prototype.Idx = 0;
        SCGetTurnplate.prototype.SignDay = 0;

        SCGetTurnplate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Date != null && m.Date.length) {
                for (var i = 0; i < m.Date.length; ++i)
                    $root.welfare.WelfareDate.encode(m.Date[i], w.uint32(18).fork()).ldelim();
            }
            if (m.Idx != null && Object.hasOwnProperty.call(m, "Idx"))
                w.uint32(24).int32(m.Idx);
            if (m.SignDay != null && Object.hasOwnProperty.call(m, "SignDay"))
                w.uint32(32).int32(m.SignDay);
            return w;
        };

        SCGetTurnplate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.SCGetTurnplate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    if (!(m.Date && m.Date.length))
                        m.Date = [];
                    m.Date.push($root.welfare.WelfareDate.decode(r, r.uint32()));
                    break;
                case 3:
                    m.Idx = r.int32();
                    break;
                case 4:
                    m.SignDay = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetTurnplate;
    })();

    welfare.AddUpWelfareDate = (function() {

        function AddUpWelfareDate(p) {
            this.AddUpDate = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        AddUpWelfareDate.prototype.AddUpDay = 0;
        AddUpWelfareDate.prototype.AddUpDate = $util.emptyArray;

        AddUpWelfareDate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.AddUpDay != null && Object.hasOwnProperty.call(m, "AddUpDay"))
                w.uint32(8).int32(m.AddUpDay);
            if (m.AddUpDate != null && m.AddUpDate.length) {
                for (var i = 0; i < m.AddUpDate.length; ++i)
                    $root.welfare.WelfareDate.encode(m.AddUpDate[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        AddUpWelfareDate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.AddUpWelfareDate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.AddUpDay = r.int32();
                    break;
                case 2:
                    if (!(m.AddUpDate && m.AddUpDate.length))
                        m.AddUpDate = [];
                    m.AddUpDate.push($root.welfare.WelfareDate.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return AddUpWelfareDate;
    })();

    welfare.CSGetAddupSign = (function() {

        function CSGetAddupSign(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetAddupSign.prototype.AddUpDay = 0;

        CSGetAddupSign.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.AddUpDay != null && Object.hasOwnProperty.call(m, "AddUpDay"))
                w.uint32(8).int32(m.AddUpDay);
            return w;
        };

        CSGetAddupSign.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.CSGetAddupSign();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.AddUpDay = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetAddupSign;
    })();

    welfare.SCGetAddupSign = (function() {

        function SCGetAddupSign(p) {
            this.Date = [];
            this.AddUpSignDay = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetAddupSign.prototype.OpRetCode = 0;
        SCGetAddupSign.prototype.Date = $util.emptyArray;
        SCGetAddupSign.prototype.AddUpSignDay = $util.emptyArray;

        SCGetAddupSign.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Date != null && m.Date.length) {
                for (var i = 0; i < m.Date.length; ++i)
                    $root.welfare.AddUpWelfareDate.encode(m.Date[i], w.uint32(18).fork()).ldelim();
            }
            if (m.AddUpSignDay != null && m.AddUpSignDay.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.AddUpSignDay.length; ++i)
                    w.int32(m.AddUpSignDay[i]);
                w.ldelim();
            }
            return w;
        };

        SCGetAddupSign.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.SCGetAddupSign();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    if (!(m.Date && m.Date.length))
                        m.Date = [];
                    m.Date.push($root.welfare.AddUpWelfareDate.decode(r, r.uint32()));
                    break;
                case 3:
                    if (!(m.AddUpSignDay && m.AddUpSignDay.length))
                        m.AddUpSignDay = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.AddUpSignDay.push(r.int32());
                    } else
                        m.AddUpSignDay.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetAddupSign;
    })();

    welfare.CSWelfaredInfo = (function() {

        function CSWelfaredInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSWelfaredInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSWelfaredInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.CSWelfaredInfo();
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

        return CSWelfaredInfo;
    })();

    welfare.WelfareTurnplateDate = (function() {

        function WelfareTurnplateDate(p) {
            this.Date = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WelfareTurnplateDate.prototype.Id = 0;
        WelfareTurnplateDate.prototype.Date = $util.emptyArray;

        WelfareTurnplateDate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Date != null && m.Date.length) {
                for (var i = 0; i < m.Date.length; ++i)
                    $root.welfare.WelfareDate.encode(m.Date[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        WelfareTurnplateDate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.WelfareTurnplateDate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    if (!(m.Date && m.Date.length))
                        m.Date = [];
                    m.Date.push($root.welfare.WelfareDate.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WelfareTurnplateDate;
    })();

    welfare.Welfare7SignDate = (function() {

        function Welfare7SignDate(p) {
            this.Date = [];
            this.AddUpDate = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        Welfare7SignDate.prototype.Day = 0;
        Welfare7SignDate.prototype.Date = $util.emptyArray;
        Welfare7SignDate.prototype.AddUpDate = $util.emptyArray;

        Welfare7SignDate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Day != null && Object.hasOwnProperty.call(m, "Day"))
                w.uint32(8).int32(m.Day);
            if (m.Date != null && m.Date.length) {
                for (var i = 0; i < m.Date.length; ++i)
                    $root.welfare.WelfareDate.encode(m.Date[i], w.uint32(18).fork()).ldelim();
            }
            if (m.AddUpDate != null && m.AddUpDate.length) {
                for (var i = 0; i < m.AddUpDate.length; ++i)
                    $root.welfare.AddUpWelfareDate.encode(m.AddUpDate[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        Welfare7SignDate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.Welfare7SignDate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Day = r.int32();
                    break;
                case 2:
                    if (!(m.Date && m.Date.length))
                        m.Date = [];
                    m.Date.push($root.welfare.WelfareDate.decode(r, r.uint32()));
                    break;
                case 3:
                    if (!(m.AddUpDate && m.AddUpDate.length))
                        m.AddUpDate = [];
                    m.AddUpDate.push($root.welfare.AddUpWelfareDate.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return Welfare7SignDate;
    })();

    welfare.SCWelfaredInfo = (function() {

        function SCWelfaredInfo(p) {
            this.Tlist = [];
            this.Slist = [];
            this.AddUpSignDay = [];
            this.TurnplateIdx = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCWelfaredInfo.prototype.Tlist = $util.emptyArray;
        SCWelfaredInfo.prototype.Slist = $util.emptyArray;
        SCWelfaredInfo.prototype.DrawTurnplate = 0;
        SCWelfaredInfo.prototype.SignDay = 0;
        SCWelfaredInfo.prototype.AddUpSignDay = $util.emptyArray;
        SCWelfaredInfo.prototype.TurnplateIdx = $util.emptyArray;
        SCWelfaredInfo.prototype.Switch = 0;

        SCWelfaredInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tlist != null && m.Tlist.length) {
                for (var i = 0; i < m.Tlist.length; ++i)
                    $root.welfare.WelfareTurnplateDate.encode(m.Tlist[i], w.uint32(10).fork()).ldelim();
            }
            if (m.Slist != null && m.Slist.length) {
                for (var i = 0; i < m.Slist.length; ++i)
                    $root.welfare.Welfare7SignDate.encode(m.Slist[i], w.uint32(18).fork()).ldelim();
            }
            if (m.DrawTurnplate != null && Object.hasOwnProperty.call(m, "DrawTurnplate"))
                w.uint32(24).int32(m.DrawTurnplate);
            if (m.SignDay != null && Object.hasOwnProperty.call(m, "SignDay"))
                w.uint32(32).int32(m.SignDay);
            if (m.AddUpSignDay != null && m.AddUpSignDay.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.AddUpSignDay.length; ++i)
                    w.int32(m.AddUpSignDay[i]);
                w.ldelim();
            }
            if (m.TurnplateIdx != null && m.TurnplateIdx.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.TurnplateIdx.length; ++i)
                    w.int32(m.TurnplateIdx[i]);
                w.ldelim();
            }
            if (m.Switch != null && Object.hasOwnProperty.call(m, "Switch"))
                w.uint32(56).int32(m.Switch);
            return w;
        };

        SCWelfaredInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.SCWelfaredInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Tlist && m.Tlist.length))
                        m.Tlist = [];
                    m.Tlist.push($root.welfare.WelfareTurnplateDate.decode(r, r.uint32()));
                    break;
                case 2:
                    if (!(m.Slist && m.Slist.length))
                        m.Slist = [];
                    m.Slist.push($root.welfare.Welfare7SignDate.decode(r, r.uint32()));
                    break;
                case 3:
                    m.DrawTurnplate = r.int32();
                    break;
                case 4:
                    m.SignDay = r.int32();
                    break;
                case 5:
                    if (!(m.AddUpSignDay && m.AddUpSignDay.length))
                        m.AddUpSignDay = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.AddUpSignDay.push(r.int32());
                    } else
                        m.AddUpSignDay.push(r.int32());
                    break;
                case 6:
                    if (!(m.TurnplateIdx && m.TurnplateIdx.length))
                        m.TurnplateIdx = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.TurnplateIdx.push(r.int32());
                    } else
                        m.TurnplateIdx.push(r.int32());
                    break;
                case 7:
                    m.Switch = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCWelfaredInfo;
    })();

    welfare.BlindBoxData = (function() {

        function BlindBoxData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        BlindBoxData.prototype.Id = 0;
        BlindBoxData.prototype.Type = 0;
        BlindBoxData.prototype.Name = "";
        BlindBoxData.prototype.Grade = 0;
        BlindBoxData.prototype.Consume = 0;
        BlindBoxData.prototype.price1 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BlindBoxData.prototype.price2 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BlindBoxData.prototype.Discount = 0;
        BlindBoxData.prototype.Item_Id = 0;

        BlindBoxData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(16).int32(m.Type);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Grade != null && Object.hasOwnProperty.call(m, "Grade"))
                w.uint32(32).int32(m.Grade);
            if (m.Consume != null && Object.hasOwnProperty.call(m, "Consume"))
                w.uint32(40).int32(m.Consume);
            if (m.price1 != null && Object.hasOwnProperty.call(m, "price1"))
                w.uint32(48).int64(m.price1);
            if (m.price2 != null && Object.hasOwnProperty.call(m, "price2"))
                w.uint32(56).int64(m.price2);
            if (m.Discount != null && Object.hasOwnProperty.call(m, "Discount"))
                w.uint32(65).double(m.Discount);
            if (m.Item_Id != null && Object.hasOwnProperty.call(m, "Item_Id"))
                w.uint32(72).int32(m.Item_Id);
            return w;
        };

        BlindBoxData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.BlindBoxData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Type = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.Grade = r.int32();
                    break;
                case 5:
                    m.Consume = r.int32();
                    break;
                case 6:
                    m.price1 = r.int64();
                    break;
                case 7:
                    m.price2 = r.int64();
                    break;
                case 8:
                    m.Discount = r.double();
                    break;
                case 9:
                    m.Item_Id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return BlindBoxData;
    })();

    welfare.CSBlindBoxInfo = (function() {

        function CSBlindBoxInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSBlindBoxInfo.prototype.Id = 0;

        CSBlindBoxInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            return w;
        };

        CSBlindBoxInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.CSBlindBoxInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSBlindBoxInfo;
    })();

    welfare.SCBlindBoxInfo = (function() {

        function SCBlindBoxInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCBlindBoxInfo.prototype.OpRetCode = 0;
        SCBlindBoxInfo.prototype.Date = null;
        SCBlindBoxInfo.prototype.MinId = 0;
        SCBlindBoxInfo.prototype.Draw = 0;

        SCBlindBoxInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Date != null && Object.hasOwnProperty.call(m, "Date"))
                $root.welfare.BlindBoxData.encode(m.Date, w.uint32(18).fork()).ldelim();
            if (m.MinId != null && Object.hasOwnProperty.call(m, "MinId"))
                w.uint32(24).int32(m.MinId);
            if (m.Draw != null && Object.hasOwnProperty.call(m, "Draw"))
                w.uint32(32).int32(m.Draw);
            return w;
        };

        SCBlindBoxInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.SCBlindBoxInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Date = $root.welfare.BlindBoxData.decode(r, r.uint32());
                    break;
                case 3:
                    m.MinId = r.int32();
                    break;
                case 4:
                    m.Draw = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCBlindBoxInfo;
    })();

    welfare.CSGetBlindBox = (function() {

        function CSGetBlindBox(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetBlindBox.prototype.Id = 0;

        CSGetBlindBox.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            return w;
        };

        CSGetBlindBox.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.CSGetBlindBox();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetBlindBox;
    })();

    welfare.SCGetBlindBox = (function() {

        function SCGetBlindBox(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetBlindBox.prototype.OpRetCode = 0;

        SCGetBlindBox.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCGetBlindBox.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.SCGetBlindBox();
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

        return SCGetBlindBox;
    })();

    welfare.WelfareSpree = (function() {

        function WelfareSpree(p) {
            this.Item = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WelfareSpree.prototype.Day = 0;
        WelfareSpree.prototype.Item = $util.emptyArray;
        WelfareSpree.prototype.VIPEX = 0;
        WelfareSpree.prototype.Consume = 0;
        WelfareSpree.prototype.price1 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WelfareSpree.prototype.price2 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WelfareSpree.prototype.Discount = 0;

        WelfareSpree.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Day != null && Object.hasOwnProperty.call(m, "Day"))
                w.uint32(8).int32(m.Day);
            if (m.Item != null && m.Item.length) {
                for (var i = 0; i < m.Item.length; ++i)
                    $root.welfare.WelfareDate.encode(m.Item[i], w.uint32(18).fork()).ldelim();
            }
            if (m.VIPEX != null && Object.hasOwnProperty.call(m, "VIPEX"))
                w.uint32(24).int32(m.VIPEX);
            if (m.Consume != null && Object.hasOwnProperty.call(m, "Consume"))
                w.uint32(40).int32(m.Consume);
            if (m.price1 != null && Object.hasOwnProperty.call(m, "price1"))
                w.uint32(48).int64(m.price1);
            if (m.price2 != null && Object.hasOwnProperty.call(m, "price2"))
                w.uint32(56).int64(m.price2);
            if (m.Discount != null && Object.hasOwnProperty.call(m, "Discount"))
                w.uint32(65).double(m.Discount);
            return w;
        };

        WelfareSpree.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.WelfareSpree();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Day = r.int32();
                    break;
                case 2:
                    if (!(m.Item && m.Item.length))
                        m.Item = [];
                    m.Item.push($root.welfare.WelfareDate.decode(r, r.uint32()));
                    break;
                case 3:
                    m.VIPEX = r.int32();
                    break;
                case 5:
                    m.Consume = r.int32();
                    break;
                case 6:
                    m.price1 = r.int64();
                    break;
                case 7:
                    m.price2 = r.int64();
                    break;
                case 8:
                    m.Discount = r.double();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WelfareSpree;
    })();

    welfare.CSWelfareFirstPayData = (function() {

        function CSWelfareFirstPayData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSWelfareFirstPayData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSWelfareFirstPayData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.CSWelfareFirstPayData();
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

        return CSWelfareFirstPayData;
    })();

    welfare.SCWelfareFirstPayData = (function() {

        function SCWelfareFirstPayData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCWelfareFirstPayData.prototype.OpRetCode = 0;
        SCWelfareFirstPayData.prototype.List = null;
        SCWelfareFirstPayData.prototype.Switch = 0;
        SCWelfareFirstPayData.prototype.Cycle = 0;
        SCWelfareFirstPayData.prototype.Draw = 0;

        SCWelfareFirstPayData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.List != null && Object.hasOwnProperty.call(m, "List"))
                $root.welfare.WelfareSpree.encode(m.List, w.uint32(18).fork()).ldelim();
            if (m.Switch != null && Object.hasOwnProperty.call(m, "Switch"))
                w.uint32(24).int32(m.Switch);
            if (m.Cycle != null && Object.hasOwnProperty.call(m, "Cycle"))
                w.uint32(32).int32(m.Cycle);
            if (m.Draw != null && Object.hasOwnProperty.call(m, "Draw"))
                w.uint32(40).int32(m.Draw);
            return w;
        };

        SCWelfareFirstPayData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.SCWelfareFirstPayData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.List = $root.welfare.WelfareSpree.decode(r, r.uint32());
                    break;
                case 3:
                    m.Switch = r.int32();
                    break;
                case 4:
                    m.Cycle = r.int32();
                    break;
                case 5:
                    m.Draw = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCWelfareFirstPayData;
    })();

    welfare.CSWelfareFirstPay = (function() {

        function CSWelfareFirstPay(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSWelfareFirstPay.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSWelfareFirstPay.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.CSWelfareFirstPay();
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

        return CSWelfareFirstPay;
    })();

    welfare.SCWelfareFirstPay = (function() {

        function SCWelfareFirstPay(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCWelfareFirstPay.prototype.OpRetCode = 0;

        SCWelfareFirstPay.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCWelfareFirstPay.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.SCWelfareFirstPay();
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

        return SCWelfareFirstPay;
    })();

    welfare.CSWelfareContinuousPayData = (function() {

        function CSWelfareContinuousPayData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSWelfareContinuousPayData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSWelfareContinuousPayData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.CSWelfareContinuousPayData();
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

        return CSWelfareContinuousPayData;
    })();

    welfare.SCWelfareContinuousPayData = (function() {

        function SCWelfareContinuousPayData(p) {
            this.List = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCWelfareContinuousPayData.prototype.OpRetCode = 0;
        SCWelfareContinuousPayData.prototype.List = $util.emptyArray;
        SCWelfareContinuousPayData.prototype.Switch = 0;
        SCWelfareContinuousPayData.prototype.Cycle = 0;
        SCWelfareContinuousPayData.prototype.Draw = 0;
        SCWelfareContinuousPayData.prototype.Day = 0;

        SCWelfareContinuousPayData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.List != null && m.List.length) {
                for (var i = 0; i < m.List.length; ++i)
                    $root.welfare.WelfareSpree.encode(m.List[i], w.uint32(18).fork()).ldelim();
            }
            if (m.Switch != null && Object.hasOwnProperty.call(m, "Switch"))
                w.uint32(24).int32(m.Switch);
            if (m.Cycle != null && Object.hasOwnProperty.call(m, "Cycle"))
                w.uint32(32).int32(m.Cycle);
            if (m.Draw != null && Object.hasOwnProperty.call(m, "Draw"))
                w.uint32(40).int32(m.Draw);
            if (m.Day != null && Object.hasOwnProperty.call(m, "Day"))
                w.uint32(48).int32(m.Day);
            return w;
        };

        SCWelfareContinuousPayData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.SCWelfareContinuousPayData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    if (!(m.List && m.List.length))
                        m.List = [];
                    m.List.push($root.welfare.WelfareSpree.decode(r, r.uint32()));
                    break;
                case 3:
                    m.Switch = r.int32();
                    break;
                case 4:
                    m.Cycle = r.int32();
                    break;
                case 5:
                    m.Draw = r.int32();
                    break;
                case 6:
                    m.Day = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCWelfareContinuousPayData;
    })();

    welfare.CSWelfareContinuousPay = (function() {

        function CSWelfareContinuousPay(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSWelfareContinuousPay.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSWelfareContinuousPay.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.CSWelfareContinuousPay();
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

        return CSWelfareContinuousPay;
    })();

    welfare.SCWelfareContinuousPay = (function() {

        function SCWelfareContinuousPay(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCWelfareContinuousPay.prototype.OpRetCode = 0;

        SCWelfareContinuousPay.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCWelfareContinuousPay.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.welfare.SCWelfareContinuousPay();
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

        return SCWelfareContinuousPay;
    })();

    return welfare;
})();

module.exports = $root;
