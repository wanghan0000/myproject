/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.message = (function() {

    var message = {};

    message.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        return values;
    })();

    message.MSGPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_MSGPACKET_ZERO"] = 0;
        values[valuesById[2430] = "PACKET_SC_MESSAGELIST"] = 2430;
        values[valuesById[2431] = "PACKET_SC_MESSAGEADD"] = 2431;
        values[valuesById[2432] = "PACKET_SC_MESSAGEDEL"] = 2432;
        values[valuesById[2433] = "PACKET_CS_MESSAGEREAD"] = 2433;
        values[valuesById[2434] = "PACKET_SC_MESSAGEREAD"] = 2434;
        values[valuesById[2435] = "PACKET_CS_MESSAGEDEL"] = 2435;
        values[valuesById[2436] = "PACKET_CS_GETMESSAGEATTACH"] = 2436;
        values[valuesById[2437] = "PACKET_SC_GETMESSAGEATTACH"] = 2437;
        values[valuesById[2438] = "PACKET_SC_NOTICE"] = 2438;
        values[valuesById[2439] = "PACKET_CS_MESSAGELIST"] = 2439;
        return values;
    })();

    message.NoticeParam = (function() {

        function NoticeParam(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        NoticeParam.prototype.IntParam = 0;
        NoticeParam.prototype.StrParam = "";

        NoticeParam.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.IntParam != null && Object.hasOwnProperty.call(m, "IntParam"))
                w.uint32(8).int32(m.IntParam);
            if (m.StrParam != null && Object.hasOwnProperty.call(m, "StrParam"))
                w.uint32(18).string(m.StrParam);
            return w;
        };

        NoticeParam.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.NoticeParam();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.IntParam = r.int32();
                    break;
                case 2:
                    m.StrParam = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return NoticeParam;
    })();

    message.SCNotice = (function() {

        function SCNotice(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCNotice.prototype.Count = 0;
        SCNotice.prototype.MsgType = 0;
        SCNotice.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCNotice.prototype.ChannelId = "";
        SCNotice.prototype.Params = $util.emptyArray;
        SCNotice.prototype.Platform = "";
        SCNotice.prototype.StandSec = 0;

        SCNotice.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(8).int32(m.Count);
            if (m.MsgType != null && Object.hasOwnProperty.call(m, "MsgType"))
                w.uint32(16).int32(m.MsgType);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(24).int64(m.Ts);
            if (m.ChannelId != null && Object.hasOwnProperty.call(m, "ChannelId"))
                w.uint32(34).string(m.ChannelId);
            if (m.Params != null && m.Params.length) {
                for (var i = 0; i < m.Params.length; ++i)
                    $root.message.NoticeParam.encode(m.Params[i], w.uint32(42).fork()).ldelim();
            }
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(50).string(m.Platform);
            if (m.StandSec != null && Object.hasOwnProperty.call(m, "StandSec"))
                w.uint32(56).int32(m.StandSec);
            return w;
        };

        SCNotice.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.SCNotice();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Count = r.int32();
                    break;
                case 2:
                    m.MsgType = r.int32();
                    break;
                case 3:
                    m.Ts = r.int64();
                    break;
                case 4:
                    m.ChannelId = r.string();
                    break;
                case 5:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    m.Params.push($root.message.NoticeParam.decode(r, r.uint32()));
                    break;
                case 6:
                    m.Platform = r.string();
                    break;
                case 7:
                    m.StandSec = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCNotice;
    })();

    message.MessageData = (function() {

        function MessageData(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        MessageData.prototype.Id = "";
        MessageData.prototype.Title = "";
        MessageData.prototype.Content = "";
        MessageData.prototype.MType = 0;
        MessageData.prototype.SrcId = 0;
        MessageData.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessageData.prototype.State = 0;
        MessageData.prototype.Ts = 0;
        MessageData.prototype.Params = $util.emptyArray;
        MessageData.prototype.AttachState = 0;
        MessageData.prototype.GiftId = "";
        MessageData.prototype.GiftState = 0;
        MessageData.prototype.Ticket = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessageData.prototype.Grade = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessageData.prototype.Diamond = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        MessageData.prototype.SrcName = "";

        MessageData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(10).string(m.Id);
            if (m.Title != null && Object.hasOwnProperty.call(m, "Title"))
                w.uint32(18).string(m.Title);
            if (m.Content != null && Object.hasOwnProperty.call(m, "Content"))
                w.uint32(26).string(m.Content);
            if (m.MType != null && Object.hasOwnProperty.call(m, "MType"))
                w.uint32(32).int32(m.MType);
            if (m.SrcId != null && Object.hasOwnProperty.call(m, "SrcId"))
                w.uint32(40).int32(m.SrcId);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(48).int64(m.Coin);
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(56).int32(m.State);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(64).int32(m.Ts);
            if (m.Params != null && m.Params.length) {
                w.uint32(74).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            if (m.AttachState != null && Object.hasOwnProperty.call(m, "AttachState"))
                w.uint32(80).int32(m.AttachState);
            if (m.GiftId != null && Object.hasOwnProperty.call(m, "GiftId"))
                w.uint32(90).string(m.GiftId);
            if (m.GiftState != null && Object.hasOwnProperty.call(m, "GiftState"))
                w.uint32(96).int32(m.GiftState);
            if (m.Ticket != null && Object.hasOwnProperty.call(m, "Ticket"))
                w.uint32(104).int64(m.Ticket);
            if (m.Grade != null && Object.hasOwnProperty.call(m, "Grade"))
                w.uint32(112).int64(m.Grade);
            if (m.Diamond != null && Object.hasOwnProperty.call(m, "Diamond"))
                w.uint32(120).int64(m.Diamond);
            if (m.SrcName != null && Object.hasOwnProperty.call(m, "SrcName"))
                w.uint32(130).string(m.SrcName);
            return w;
        };

        MessageData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.MessageData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.string();
                    break;
                case 2:
                    m.Title = r.string();
                    break;
                case 3:
                    m.Content = r.string();
                    break;
                case 4:
                    m.MType = r.int32();
                    break;
                case 5:
                    m.SrcId = r.int32();
                    break;
                case 6:
                    m.Coin = r.int64();
                    break;
                case 7:
                    m.State = r.int32();
                    break;
                case 8:
                    m.Ts = r.int32();
                    break;
                case 9:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                case 10:
                    m.AttachState = r.int32();
                    break;
                case 11:
                    m.GiftId = r.string();
                    break;
                case 12:
                    m.GiftState = r.int32();
                    break;
                case 13:
                    m.Ticket = r.int64();
                    break;
                case 14:
                    m.Grade = r.int64();
                    break;
                case 15:
                    m.Diamond = r.int64();
                    break;
                case 16:
                    m.SrcName = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return MessageData;
    })();

    message.SCMessageList = (function() {

        function SCMessageList(p) {
            this.Msgs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCMessageList.prototype.Msgs = $util.emptyArray;

        SCMessageList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Msgs != null && m.Msgs.length) {
                for (var i = 0; i < m.Msgs.length; ++i)
                    $root.message.MessageData.encode(m.Msgs[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCMessageList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.SCMessageList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Msgs && m.Msgs.length))
                        m.Msgs = [];
                    m.Msgs.push($root.message.MessageData.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCMessageList;
    })();

    message.SCMessageAdd = (function() {

        function SCMessageAdd(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCMessageAdd.prototype.Msg = null;

        SCMessageAdd.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                $root.message.MessageData.encode(m.Msg, w.uint32(10).fork()).ldelim();
            return w;
        };

        SCMessageAdd.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.SCMessageAdd();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Msg = $root.message.MessageData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCMessageAdd;
    })();

    message.CSMessageRead = (function() {

        function CSMessageRead(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSMessageRead.prototype.Id = "";

        CSMessageRead.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(10).string(m.Id);
            return w;
        };

        CSMessageRead.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.CSMessageRead();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSMessageRead;
    })();

    message.SCMessageRead = (function() {

        function SCMessageRead(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCMessageRead.prototype.Id = "";

        SCMessageRead.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(10).string(m.Id);
            return w;
        };

        SCMessageRead.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.SCMessageRead();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCMessageRead;
    })();

    message.CSMessageDel = (function() {

        function CSMessageDel(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSMessageDel.prototype.Id = "";

        CSMessageDel.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(10).string(m.Id);
            return w;
        };

        CSMessageDel.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.CSMessageDel();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSMessageDel;
    })();

    message.SCMessageDel = (function() {

        function SCMessageDel(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCMessageDel.prototype.Id = "";

        SCMessageDel.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(10).string(m.Id);
            return w;
        };

        SCMessageDel.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.SCMessageDel();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCMessageDel;
    })();

    message.CSGetMessageAttach = (function() {

        function CSGetMessageAttach(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetMessageAttach.prototype.Id = "";

        CSGetMessageAttach.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(10).string(m.Id);
            return w;
        };

        CSGetMessageAttach.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.CSGetMessageAttach();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetMessageAttach;
    })();

    message.SCGetMessageAttach = (function() {

        function SCGetMessageAttach(p) {
            this.Ids = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetMessageAttach.prototype.Id = "";
        SCGetMessageAttach.prototype.Ids = $util.emptyArray;

        SCGetMessageAttach.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(10).string(m.Id);
            if (m.Ids != null && m.Ids.length) {
                for (var i = 0; i < m.Ids.length; ++i)
                    w.uint32(18).string(m.Ids[i]);
            }
            return w;
        };

        SCGetMessageAttach.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.SCGetMessageAttach();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.string();
                    break;
                case 2:
                    if (!(m.Ids && m.Ids.length))
                        m.Ids = [];
                    m.Ids.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetMessageAttach;
    })();

    message.ClubMessage = (function() {

        function ClubMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ClubMessage.prototype.MsgType = 0;
        ClubMessage.prototype.Content = "";
        ClubMessage.prototype.SnId = 0;
        ClubMessage.prototype.NickName = "";
        ClubMessage.prototype.HeadPic = "";
        ClubMessage.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ClubMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MsgType != null && Object.hasOwnProperty.call(m, "MsgType"))
                w.uint32(8).int32(m.MsgType);
            if (m.Content != null && Object.hasOwnProperty.call(m, "Content"))
                w.uint32(18).string(m.Content);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(24).int32(m.SnId);
            if (m.NickName != null && Object.hasOwnProperty.call(m, "NickName"))
                w.uint32(34).string(m.NickName);
            if (m.HeadPic != null && Object.hasOwnProperty.call(m, "HeadPic"))
                w.uint32(42).string(m.HeadPic);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(48).int64(m.Ts);
            return w;
        };

        ClubMessage.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.ClubMessage();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.MsgType = r.int32();
                    break;
                case 2:
                    m.Content = r.string();
                    break;
                case 3:
                    m.SnId = r.int32();
                    break;
                case 4:
                    m.NickName = r.string();
                    break;
                case 5:
                    m.HeadPic = r.string();
                    break;
                case 6:
                    m.Ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ClubMessage;
    })();

    message.CSClubMsg = (function() {

        function CSClubMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSClubMsg.prototype.ClubId = 0;
        CSClubMsg.prototype.MsgType = 0;
        CSClubMsg.prototype.Content = "";

        CSClubMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ClubId != null && Object.hasOwnProperty.call(m, "ClubId"))
                w.uint32(8).int32(m.ClubId);
            if (m.MsgType != null && Object.hasOwnProperty.call(m, "MsgType"))
                w.uint32(16).int32(m.MsgType);
            if (m.Content != null && Object.hasOwnProperty.call(m, "Content"))
                w.uint32(26).string(m.Content);
            return w;
        };

        CSClubMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.CSClubMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ClubId = r.int32();
                    break;
                case 2:
                    m.MsgType = r.int32();
                    break;
                case 3:
                    m.Content = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSClubMsg;
    })();

    message.SCClubMsg = (function() {

        function SCClubMsg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCClubMsg.prototype.OpRetCode = 0;
        SCClubMsg.prototype.ClubId = 0;
        SCClubMsg.prototype.MsgType = 0;
        SCClubMsg.prototype.ClubMsg = null;

        SCClubMsg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.ClubId != null && Object.hasOwnProperty.call(m, "ClubId"))
                w.uint32(16).int32(m.ClubId);
            if (m.MsgType != null && Object.hasOwnProperty.call(m, "MsgType"))
                w.uint32(24).int32(m.MsgType);
            if (m.ClubMsg != null && Object.hasOwnProperty.call(m, "ClubMsg"))
                $root.message.ClubMessage.encode(m.ClubMsg, w.uint32(34).fork()).ldelim();
            return w;
        };

        SCClubMsg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.SCClubMsg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.ClubId = r.int32();
                    break;
                case 3:
                    m.MsgType = r.int32();
                    break;
                case 4:
                    m.ClubMsg = $root.message.ClubMessage.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCClubMsg;
    })();

    message.CSClubMsgState = (function() {

        function CSClubMsgState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSClubMsgState.prototype.ClubId = 0;
        CSClubMsgState.prototype.Disable = false;

        CSClubMsgState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ClubId != null && Object.hasOwnProperty.call(m, "ClubId"))
                w.uint32(8).int32(m.ClubId);
            if (m.Disable != null && Object.hasOwnProperty.call(m, "Disable"))
                w.uint32(16).bool(m.Disable);
            return w;
        };

        CSClubMsgState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.CSClubMsgState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ClubId = r.int32();
                    break;
                case 2:
                    m.Disable = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSClubMsgState;
    })();

    message.SCClubMsgState = (function() {

        function SCClubMsgState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCClubMsgState.prototype.Disable = false;
        SCClubMsgState.prototype.OpRetCode = 0;

        SCClubMsgState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Disable != null && Object.hasOwnProperty.call(m, "Disable"))
                w.uint32(8).bool(m.Disable);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(16).int32(m.OpRetCode);
            return w;
        };

        SCClubMsgState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.SCClubMsgState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Disable = r.bool();
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

        return SCClubMsgState;
    })();

    message.CSClubMsgHistory = (function() {

        function CSClubMsgHistory(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSClubMsgHistory.prototype.ClubId = 0;

        CSClubMsgHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ClubId != null && Object.hasOwnProperty.call(m, "ClubId"))
                w.uint32(8).int32(m.ClubId);
            return w;
        };

        CSClubMsgHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.CSClubMsgHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ClubId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSClubMsgHistory;
    })();

    message.SCClubMsgHistory = (function() {

        function SCClubMsgHistory(p) {
            this.ClubMsg = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCClubMsgHistory.prototype.OpRetCode = 0;
        SCClubMsgHistory.prototype.ClubMsg = $util.emptyArray;

        SCClubMsgHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.ClubMsg != null && m.ClubMsg.length) {
                for (var i = 0; i < m.ClubMsg.length; ++i)
                    $root.message.ClubMessage.encode(m.ClubMsg[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCClubMsgHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.SCClubMsgHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    if (!(m.ClubMsg && m.ClubMsg.length))
                        m.ClubMsg = [];
                    m.ClubMsg.push($root.message.ClubMessage.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCClubMsgHistory;
    })();

    message.CSMessageList = (function() {

        function CSMessageList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSMessageList.prototype.ShowId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CSMessageList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShowId != null && Object.hasOwnProperty.call(m, "ShowId"))
                w.uint32(8).int64(m.ShowId);
            return w;
        };

        CSMessageList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.message.CSMessageList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShowId = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSMessageList;
    })();

    return message;
})();

module.exports = $root;
