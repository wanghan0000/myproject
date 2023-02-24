/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.friend = (function() {

    var friend = {};

    friend.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[1001] = "OPRC_Friend_NoPlayer"] = 1001;
        values[valuesById[1002] = "OPRC_Friend_AlreadyAdd"] = 1002;
        values[valuesById[1003] = "OPRC_Friend_AlreadyApply"] = 1003;
        values[valuesById[1004] = "OPRC_Friend_FriendMax"] = 1004;
        values[valuesById[1005] = "OPRC_Friend_DestFriendMax"] = 1005;
        values[valuesById[1006] = "OPRC_Friend_DestApplyFriendMax"] = 1006;
        values[valuesById[1007] = "OPRC_InviteFriend_NoOnline"] = 1007;
        values[valuesById[1008] = "OPRC_InviteFriend_NotFriend"] = 1008;
        values[valuesById[1009] = "OPRC_InviteFriend_SceneNotExist"] = 1009;
        values[valuesById[1010] = "OPRC_InviteFriend_RoomLimit"] = 1010;
        values[valuesById[1011] = "OPRC_InviteFriend_RoomNotExist"] = 1011;
        values[valuesById[1012] = "OPRC_InviteFriend_SceneDeleting"] = 1012;
        values[valuesById[1013] = "OPRC_InviteFriend_SceneClosed"] = 1013;
        values[valuesById[1014] = "OPRC_InviteFriend_CoinLimit"] = 1014;
        values[valuesById[1015] = "OPRC_InviteFriend_GameNotExist"] = 1015;
        values[valuesById[1016] = "OPRC_InviteFriend_GameNotCanEnter"] = 1016;
        values[valuesById[1017] = "OPRC_InviteFriend_RoomFull"] = 1017;
        values[valuesById[1018] = "OPRC_InviteFriend_Gaming"] = 1018;
        values[valuesById[1019] = "OPRC_InviteFriend_PosIsError"] = 1019;
        values[valuesById[1020] = "OPRC_InviteFriend_HadInRoom"] = 1020;
        values[valuesById[1021] = "OPRC_Friend_NotOpMyself"] = 1021;
        return values;
    })();

    friend.FriendPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_FriendPACKET_ZERO"] = 0;
        values[valuesById[2700] = "PACKET_CSFriendList"] = 2700;
        values[valuesById[2701] = "PACKET_SCFriendList"] = 2701;
        values[valuesById[2702] = "PACKET_CSFriendOp"] = 2702;
        values[valuesById[2703] = "PACKET_SCFriendOp"] = 2703;
        values[valuesById[2704] = "PACKET_CSQueryPlayerGameLog"] = 2704;
        values[valuesById[2705] = "PACKET_SCQueryPlayerGameLog"] = 2705;
        values[valuesById[2706] = "PACKET_CSInviteFriend"] = 2706;
        values[valuesById[2707] = "PACKET_SCInviteFriend"] = 2707;
        values[valuesById[2708] = "PACKET_CSInviteFriendOp"] = 2708;
        values[valuesById[2709] = "PACKET_SCInviteFriendOp"] = 2709;
        values[valuesById[2710] = "PACKET_SCFriendApplyData"] = 2710;
        values[valuesById[2711] = "PACKET_SCFriendUnreadData"] = 2711;
        values[valuesById[2712] = "PACKET_CSFuzzyQueryPlayer"] = 2712;
        values[valuesById[2713] = "PACKET_SCFuzzyQueryPlayer"] = 2713;
        return values;
    })();

    friend.CSFriendList = (function() {

        function CSFriendList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSFriendList.prototype.ListType = 0;

        CSFriendList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ListType != null && Object.hasOwnProperty.call(m, "ListType"))
                w.uint32(8).int32(m.ListType);
            return w;
        };

        CSFriendList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.CSFriendList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ListType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSFriendList;
    })();

    friend.FriendInfo = (function() {

        function FriendInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FriendInfo.prototype.SnId = 0;
        FriendInfo.prototype.Name = "";
        FriendInfo.prototype.Sex = 0;
        FriendInfo.prototype.Head = 0;
        FriendInfo.prototype.Online = false;
        FriendInfo.prototype.CreateTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        FriendInfo.prototype.LogoutTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        FriendInfo.prototype.LastChatTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        FriendInfo.prototype.IsShield = false;

        FriendInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Sex != null && Object.hasOwnProperty.call(m, "Sex"))
                w.uint32(24).int32(m.Sex);
            if (m.Head != null && Object.hasOwnProperty.call(m, "Head"))
                w.uint32(32).int32(m.Head);
            if (m.Online != null && Object.hasOwnProperty.call(m, "Online"))
                w.uint32(56).bool(m.Online);
            if (m.CreateTs != null && Object.hasOwnProperty.call(m, "CreateTs"))
                w.uint32(72).int64(m.CreateTs);
            if (m.LogoutTs != null && Object.hasOwnProperty.call(m, "LogoutTs"))
                w.uint32(80).int64(m.LogoutTs);
            if (m.LastChatTs != null && Object.hasOwnProperty.call(m, "LastChatTs"))
                w.uint32(88).int64(m.LastChatTs);
            if (m.IsShield != null && Object.hasOwnProperty.call(m, "IsShield"))
                w.uint32(96).bool(m.IsShield);
            return w;
        };

        FriendInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.FriendInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Sex = r.int32();
                    break;
                case 4:
                    m.Head = r.int32();
                    break;
                case 7:
                    m.Online = r.bool();
                    break;
                case 9:
                    m.CreateTs = r.int64();
                    break;
                case 10:
                    m.LogoutTs = r.int64();
                    break;
                case 11:
                    m.LastChatTs = r.int64();
                    break;
                case 12:
                    m.IsShield = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FriendInfo;
    })();

    friend.SCFriendList = (function() {

        function SCFriendList(p) {
            this.FriendArr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFriendList.prototype.ListType = 0;
        SCFriendList.prototype.FriendArr = $util.emptyArray;
        SCFriendList.prototype.OpRetCode = 0;

        SCFriendList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ListType != null && Object.hasOwnProperty.call(m, "ListType"))
                w.uint32(8).int32(m.ListType);
            if (m.FriendArr != null && m.FriendArr.length) {
                for (var i = 0; i < m.FriendArr.length; ++i)
                    $root.friend.FriendInfo.encode(m.FriendArr[i], w.uint32(18).fork()).ldelim();
            }
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(24).int32(m.OpRetCode);
            return w;
        };

        SCFriendList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.SCFriendList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ListType = r.int32();
                    break;
                case 2:
                    if (!(m.FriendArr && m.FriendArr.length))
                        m.FriendArr = [];
                    m.FriendArr.push($root.friend.FriendInfo.decode(r, r.uint32()));
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

        return SCFriendList;
    })();

    friend.CSFriendOp = (function() {

        function CSFriendOp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSFriendOp.prototype.OpCode = 0;
        CSFriendOp.prototype.SnId = 0;

        CSFriendOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(16).int32(m.SnId);
            return w;
        };

        CSFriendOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.CSFriendOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    m.SnId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSFriendOp;
    })();

    friend.SCFriendOp = (function() {

        function SCFriendOp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFriendOp.prototype.OpCode = 0;
        SCFriendOp.prototype.SnId = 0;
        SCFriendOp.prototype.Friend = null;
        SCFriendOp.prototype.OpRetCode = 0;

        SCFriendOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(16).int32(m.SnId);
            if (m.Friend != null && Object.hasOwnProperty.call(m, "Friend"))
                $root.friend.FriendInfo.encode(m.Friend, w.uint32(26).fork()).ldelim();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(32).int32(m.OpRetCode);
            return w;
        };

        SCFriendOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.SCFriendOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    m.SnId = r.int32();
                    break;
                case 3:
                    m.Friend = $root.friend.FriendInfo.decode(r, r.uint32());
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

        return SCFriendOp;
    })();

    friend.CSQueryPlayerGameLog = (function() {

        function CSQueryPlayerGameLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSQueryPlayerGameLog.prototype.Snid = 0;
        CSQueryPlayerGameLog.prototype.GameId = 0;
        CSQueryPlayerGameLog.prototype.Size = 0;

        CSQueryPlayerGameLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(16).int32(m.GameId);
            if (m.Size != null && Object.hasOwnProperty.call(m, "Size"))
                w.uint32(24).int32(m.Size);
            return w;
        };

        CSQueryPlayerGameLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.CSQueryPlayerGameLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    m.GameId = r.int32();
                    break;
                case 3:
                    m.Size = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSQueryPlayerGameLog;
    })();

    friend.PlayerGameLog = (function() {

        function PlayerGameLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerGameLog.prototype.GameId = 0;
        PlayerGameLog.prototype.BaseScore = 0;
        PlayerGameLog.prototype.IsWin = 0;
        PlayerGameLog.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        PlayerGameLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.BaseScore != null && Object.hasOwnProperty.call(m, "BaseScore"))
                w.uint32(16).int32(m.BaseScore);
            if (m.IsWin != null && Object.hasOwnProperty.call(m, "IsWin"))
                w.uint32(24).int32(m.IsWin);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(32).int64(m.Ts);
            return w;
        };

        PlayerGameLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.PlayerGameLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.BaseScore = r.int32();
                    break;
                case 3:
                    m.IsWin = r.int32();
                    break;
                case 4:
                    m.Ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerGameLog;
    })();

    friend.SCQueryPlayerGameLog = (function() {

        function SCQueryPlayerGameLog(p) {
            this.GameLogs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCQueryPlayerGameLog.prototype.Snid = 0;
        SCQueryPlayerGameLog.prototype.GameId = 0;
        SCQueryPlayerGameLog.prototype.Size = 0;
        SCQueryPlayerGameLog.prototype.GameLogs = $util.emptyArray;

        SCQueryPlayerGameLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(16).int32(m.GameId);
            if (m.Size != null && Object.hasOwnProperty.call(m, "Size"))
                w.uint32(24).int32(m.Size);
            if (m.GameLogs != null && m.GameLogs.length) {
                for (var i = 0; i < m.GameLogs.length; ++i)
                    $root.friend.PlayerGameLog.encode(m.GameLogs[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        SCQueryPlayerGameLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.SCQueryPlayerGameLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    m.GameId = r.int32();
                    break;
                case 3:
                    m.Size = r.int32();
                    break;
                case 4:
                    if (!(m.GameLogs && m.GameLogs.length))
                        m.GameLogs = [];
                    m.GameLogs.push($root.friend.PlayerGameLog.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCQueryPlayerGameLog;
    })();

    friend.CSInviteFriend = (function() {

        function CSInviteFriend(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSInviteFriend.prototype.ToSnId = 0;
        CSInviteFriend.prototype.Pos = 0;

        CSInviteFriend.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ToSnId != null && Object.hasOwnProperty.call(m, "ToSnId"))
                w.uint32(8).int32(m.ToSnId);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(16).int32(m.Pos);
            return w;
        };

        CSInviteFriend.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.CSInviteFriend();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ToSnId = r.int32();
                    break;
                case 2:
                    m.Pos = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSInviteFriend;
    })();

    friend.SCInviteFriend = (function() {

        function SCInviteFriend(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCInviteFriend.prototype.SrcSnId = 0;
        SCInviteFriend.prototype.SrcName = "";
        SCInviteFriend.prototype.SrcHead = 0;
        SCInviteFriend.prototype.GameId = 0;
        SCInviteFriend.prototype.RoomId = 0;
        SCInviteFriend.prototype.Pos = 0;
        SCInviteFriend.prototype.OpRetCode = 0;

        SCInviteFriend.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SrcSnId != null && Object.hasOwnProperty.call(m, "SrcSnId"))
                w.uint32(8).int32(m.SrcSnId);
            if (m.SrcName != null && Object.hasOwnProperty.call(m, "SrcName"))
                w.uint32(18).string(m.SrcName);
            if (m.SrcHead != null && Object.hasOwnProperty.call(m, "SrcHead"))
                w.uint32(24).int32(m.SrcHead);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(32).int32(m.GameId);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(40).int32(m.RoomId);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(48).int32(m.Pos);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(56).int32(m.OpRetCode);
            return w;
        };

        SCInviteFriend.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.SCInviteFriend();
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
                    m.GameId = r.int32();
                    break;
                case 5:
                    m.RoomId = r.int32();
                    break;
                case 6:
                    m.Pos = r.int32();
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

        return SCInviteFriend;
    })();

    friend.CSInviteFriendOp = (function() {

        function CSInviteFriendOp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSInviteFriendOp.prototype.OpCode = 0;
        CSInviteFriendOp.prototype.SnId = 0;
        CSInviteFriendOp.prototype.Pos = 0;

        CSInviteFriendOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(16).int32(m.SnId);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(24).int32(m.Pos);
            return w;
        };

        CSInviteFriendOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.CSInviteFriendOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    m.SnId = r.int32();
                    break;
                case 3:
                    m.Pos = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSInviteFriendOp;
    })();

    friend.SCInviteFriendOp = (function() {

        function SCInviteFriendOp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCInviteFriendOp.prototype.SnId = 0;
        SCInviteFriendOp.prototype.Name = "";
        SCInviteFriendOp.prototype.OpCode = 0;
        SCInviteFriendOp.prototype.Pos = 0;
        SCInviteFriendOp.prototype.OpRetCode = 0;

        SCInviteFriendOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(24).int32(m.OpCode);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(32).int32(m.Pos);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(40).int32(m.OpRetCode);
            return w;
        };

        SCInviteFriendOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.SCInviteFriendOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.OpCode = r.int32();
                    break;
                case 4:
                    m.Pos = r.int32();
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

        return SCInviteFriendOp;
    })();

    friend.FriendApply = (function() {

        function FriendApply(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FriendApply.prototype.Snid = 0;
        FriendApply.prototype.Name = "";
        FriendApply.prototype.CreateTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        FriendApply.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.CreateTs != null && Object.hasOwnProperty.call(m, "CreateTs"))
                w.uint32(24).int64(m.CreateTs);
            return w;
        };

        FriendApply.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.FriendApply();
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
                    m.CreateTs = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FriendApply;
    })();

    friend.SCFriendApplyData = (function() {

        function SCFriendApplyData(p) {
            this.FriendApplys = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFriendApplyData.prototype.FriendApplys = $util.emptyArray;

        SCFriendApplyData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FriendApplys != null && m.FriendApplys.length) {
                for (var i = 0; i < m.FriendApplys.length; ++i)
                    $root.friend.FriendApply.encode(m.FriendApplys[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCFriendApplyData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.SCFriendApplyData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.FriendApplys && m.FriendApplys.length))
                        m.FriendApplys = [];
                    m.FriendApplys.push($root.friend.FriendApply.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFriendApplyData;
    })();

    friend.FriendUnread = (function() {

        function FriendUnread(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FriendUnread.prototype.Snid = 0;
        FriendUnread.prototype.UnreadNum = 0;

        FriendUnread.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.UnreadNum != null && Object.hasOwnProperty.call(m, "UnreadNum"))
                w.uint32(16).int32(m.UnreadNum);
            return w;
        };

        FriendUnread.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.FriendUnread();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Snid = r.int32();
                    break;
                case 2:
                    m.UnreadNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FriendUnread;
    })();

    friend.SCFriendUnreadData = (function() {

        function SCFriendUnreadData(p) {
            this.FriendUnreads = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFriendUnreadData.prototype.FriendUnreads = $util.emptyArray;

        SCFriendUnreadData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FriendUnreads != null && m.FriendUnreads.length) {
                for (var i = 0; i < m.FriendUnreads.length; ++i)
                    $root.friend.FriendUnread.encode(m.FriendUnreads[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCFriendUnreadData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.SCFriendUnreadData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.FriendUnreads && m.FriendUnreads.length))
                        m.FriendUnreads = [];
                    m.FriendUnreads.push($root.friend.FriendUnread.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFriendUnreadData;
    })();

    friend.CSFuzzyQueryPlayer = (function() {

        function CSFuzzyQueryPlayer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSFuzzyQueryPlayer.prototype.QueryContent = "";

        CSFuzzyQueryPlayer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.QueryContent != null && Object.hasOwnProperty.call(m, "QueryContent"))
                w.uint32(10).string(m.QueryContent);
            return w;
        };

        CSFuzzyQueryPlayer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.CSFuzzyQueryPlayer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.QueryContent = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSFuzzyQueryPlayer;
    })();

    friend.PlayerInfo = (function() {

        function PlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerInfo.prototype.SnId = 0;
        PlayerInfo.prototype.Name = "";
        PlayerInfo.prototype.Sex = 0;
        PlayerInfo.prototype.Head = 0;

        PlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Sex != null && Object.hasOwnProperty.call(m, "Sex"))
                w.uint32(24).int32(m.Sex);
            if (m.Head != null && Object.hasOwnProperty.call(m, "Head"))
                w.uint32(32).int32(m.Head);
            return w;
        };

        PlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.PlayerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Sex = r.int32();
                    break;
                case 4:
                    m.Head = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerInfo;
    })();

    friend.SCFuzzyQueryPlayer = (function() {

        function SCFuzzyQueryPlayer(p) {
            this.Players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCFuzzyQueryPlayer.prototype.QueryContent = "";
        SCFuzzyQueryPlayer.prototype.Players = $util.emptyArray;

        SCFuzzyQueryPlayer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.QueryContent != null && Object.hasOwnProperty.call(m, "QueryContent"))
                w.uint32(10).string(m.QueryContent);
            if (m.Players != null && m.Players.length) {
                for (var i = 0; i < m.Players.length; ++i)
                    $root.friend.PlayerInfo.encode(m.Players[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCFuzzyQueryPlayer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.friend.SCFuzzyQueryPlayer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.QueryContent = r.string();
                    break;
                case 2:
                    if (!(m.Players && m.Players.length))
                        m.Players = [];
                    m.Players.push($root.friend.PlayerInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCFuzzyQueryPlayer;
    })();

    return friend;
})();

module.exports = $root;
