/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.chat = (function() {

    var chat = {};

    chat.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[1001] = "OPRC_Chat_NotFriend"] = 1001;
        values[valuesById[1002] = "OPRC_Chat_IsShield"] = 1002;
        values[valuesById[1003] = "OPRC_Chat_ReShield"] = 1003;
        values[valuesById[1004] = "OPRC_Chat_ReUnShield"] = 1004;
        values[valuesById[1005] = "OPRC_Chat_Shield"] = 1005;
        return values;
    })();

    chat.ChatPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_CHATPACKET_ZERO"] = 0;
        values[valuesById[2720] = "PACKET_CSChatMsg"] = 2720;
        values[valuesById[2721] = "PACKET_SCChatMsg"] = 2721;
        values[valuesById[2722] = "PACKET_CSGetChatLog"] = 2722;
        values[valuesById[2723] = "PACKET_SCGetChatLog"] = 2723;
        values[valuesById[2724] = "PACKET_CSReadChatMsg"] = 2724;
        values[valuesById[2725] = "PACKET_CSShieldMsg"] = 2725;
        values[valuesById[2726] = "PACKET_SCShieldMsg"] = 2726;
        return values;
    })();

    chat.CSChatMsg = (function() {

        function CSChatMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSChatMsg.prototype.Msg2Snid = 0;
        CSChatMsg.prototype.Name = "";
        CSChatMsg.prototype.Head = 0;
        CSChatMsg.prototype.Content = "";

        CSChatMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Msg2Snid != null && Object.hasOwnProperty.call(m, "Msg2Snid"))
                w.uint32(8).int32(m.Msg2Snid);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Head != null && Object.hasOwnProperty.call(m, "Head"))
                w.uint32(24).int32(m.Head);
            if (m.Content != null && Object.hasOwnProperty.call(m, "Content"))
                w.uint32(34).string(m.Content);
            return w;
        };

        CSChatMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.chat.CSChatMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Msg2Snid = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Head = r.int32();
                    break;
                case 4:
                    m.Content = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSChatMsg;
    })();

    chat.SCChatMsg = (function() {

        function SCChatMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCChatMsg.prototype.Msg2Snid = 0;
        SCChatMsg.prototype.Snid = 0;
        SCChatMsg.prototype.Name = "";
        SCChatMsg.prototype.Head = 0;
        SCChatMsg.prototype.Content = "";
        SCChatMsg.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCChatMsg.prototype.OpRetCode = 0;

        SCChatMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Msg2Snid != null && Object.hasOwnProperty.call(m, "Msg2Snid"))
                w.uint32(8).int32(m.Msg2Snid);
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(16).int32(m.Snid);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Head != null && Object.hasOwnProperty.call(m, "Head"))
                w.uint32(32).int32(m.Head);
            if (m.Content != null && Object.hasOwnProperty.call(m, "Content"))
                w.uint32(42).string(m.Content);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(48).int64(m.Ts);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(56).int32(m.OpRetCode);
            return w;
        };

        SCChatMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.chat.SCChatMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Msg2Snid = r.int32();
                    break;
                case 2:
                    m.Snid = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.Head = r.int32();
                    break;
                case 5:
                    m.Content = r.string();
                    break;
                case 6:
                    m.Ts = r.int64();
                    break;
                case 7:
                    m.OpRetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCChatMsg;
    })();

    chat.CSGetChatLog = (function() {

        function CSGetChatLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetChatLog.prototype.Snid = 0;

        CSGetChatLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            return w;
        };

        CSGetChatLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.chat.CSGetChatLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetChatLog;
    })();

    chat.ChatLog = (function() {

        function ChatLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ChatLog.prototype.SrcSnId = 0;
        ChatLog.prototype.SrcName = "";
        ChatLog.prototype.SrcHead = 0;
        ChatLog.prototype.ToSnId = 0;
        ChatLog.prototype.ToName = "";
        ChatLog.prototype.ToHead = 0;
        ChatLog.prototype.Content = "";
        ChatLog.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ChatLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SrcSnId != null && Object.hasOwnProperty.call(m, "SrcSnId"))
                w.uint32(8).int32(m.SrcSnId);
            if (m.SrcName != null && Object.hasOwnProperty.call(m, "SrcName"))
                w.uint32(18).string(m.SrcName);
            if (m.SrcHead != null && Object.hasOwnProperty.call(m, "SrcHead"))
                w.uint32(24).int32(m.SrcHead);
            if (m.ToSnId != null && Object.hasOwnProperty.call(m, "ToSnId"))
                w.uint32(32).int32(m.ToSnId);
            if (m.ToName != null && Object.hasOwnProperty.call(m, "ToName"))
                w.uint32(42).string(m.ToName);
            if (m.ToHead != null && Object.hasOwnProperty.call(m, "ToHead"))
                w.uint32(48).int32(m.ToHead);
            if (m.Content != null && Object.hasOwnProperty.call(m, "Content"))
                w.uint32(58).string(m.Content);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(64).int64(m.Ts);
            return w;
        };

        ChatLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.chat.ChatLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SrcSnId = r.int32();
                    break;
                case 2:
                    m.SrcName = r.string();
                    break;
                case 3:
                    m.SrcHead = r.int32();
                    break;
                case 4:
                    m.ToSnId = r.int32();
                    break;
                case 5:
                    m.ToName = r.string();
                    break;
                case 6:
                    m.ToHead = r.int32();
                    break;
                case 7:
                    m.Content = r.string();
                    break;
                case 8:
                    m.Ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ChatLog;
    })();

    chat.SCGetChatLog = (function() {

        function SCGetChatLog(p) {
            this.ChatLogs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetChatLog.prototype.Snid = 0;
        SCGetChatLog.prototype.ChatLogs = $util.emptyArray;

        SCGetChatLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.ChatLogs != null && m.ChatLogs.length) {
                for (var i = 0; i < m.ChatLogs.length; ++i)
                    $root.chat.ChatLog.encode(m.ChatLogs[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCGetChatLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.chat.SCGetChatLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    if (!(m.ChatLogs && m.ChatLogs.length))
                        m.ChatLogs = [];
                    m.ChatLogs.push($root.chat.ChatLog.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetChatLog;
    })();

    chat.CSReadChatMsg = (function() {

        function CSReadChatMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSReadChatMsg.prototype.Snid = 0;

        CSReadChatMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            return w;
        };

        CSReadChatMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.chat.CSReadChatMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSReadChatMsg;
    })();

    chat.CSShieldMsg = (function() {

        function CSShieldMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSShieldMsg.prototype.ShieldSnid = 0;
        CSShieldMsg.prototype.ShieldHead = 0;
        CSShieldMsg.prototype.ShieldName = "";
        CSShieldMsg.prototype.Shield = false;

        CSShieldMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShieldSnid != null && Object.hasOwnProperty.call(m, "ShieldSnid"))
                w.uint32(8).int32(m.ShieldSnid);
            if (m.ShieldHead != null && Object.hasOwnProperty.call(m, "ShieldHead"))
                w.uint32(16).int32(m.ShieldHead);
            if (m.ShieldName != null && Object.hasOwnProperty.call(m, "ShieldName"))
                w.uint32(26).string(m.ShieldName);
            if (m.Shield != null && Object.hasOwnProperty.call(m, "Shield"))
                w.uint32(32).bool(m.Shield);
            return w;
        };

        CSShieldMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.chat.CSShieldMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShieldSnid = r.int32();
                    break;
                case 2:
                    m.ShieldHead = r.int32();
                    break;
                case 3:
                    m.ShieldName = r.string();
                    break;
                case 4:
                    m.Shield = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSShieldMsg;
    })();

    chat.SCShieldMsg = (function() {

        function SCShieldMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCShieldMsg.prototype.Snid = 0;
        SCShieldMsg.prototype.ShieldSnid = 0;
        SCShieldMsg.prototype.Shield = false;
        SCShieldMsg.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCShieldMsg.prototype.OpRetCode = 0;

        SCShieldMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.ShieldSnid != null && Object.hasOwnProperty.call(m, "ShieldSnid"))
                w.uint32(16).int32(m.ShieldSnid);
            if (m.Shield != null && Object.hasOwnProperty.call(m, "Shield"))
                w.uint32(24).bool(m.Shield);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(32).int64(m.Ts);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(40).int32(m.OpRetCode);
            return w;
        };

        SCShieldMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.chat.SCShieldMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    m.ShieldSnid = r.int32();
                    break;
                case 3:
                    m.Shield = r.bool();
                    break;
                case 4:
                    m.Ts = r.int64();
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

        return SCShieldMsg;
    })();

    return chat;
})();

module.exports = $root;
