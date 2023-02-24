/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gamehall = (function() {

    var gamehall = {};

    gamehall.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        values[valuesById[1019] = "OPRC_RoomIsFull"] = 1019;
        values[valuesById[1053] = "OPRC_RoomHadClosed"] = 1053;
        values[valuesById[1054] = "OPRC_SceneServerMaintain"] = 1054;
        values[valuesById[1056] = "OPRC_CoinNotEnough"] = 1056;
        values[valuesById[1058] = "OPRC_CoinTooMore"] = 1058;
        values[valuesById[1059] = "OPRC_CoinSceneYouAreGaming"] = 1059;
        values[valuesById[1079] = "OPRC_NoFindDownTiceRoom"] = 1079;
        values[valuesById[1080] = "OPRC_ChangeRoomTooOften"] = 1080;
        values[valuesById[1081] = "OPRC_NoOtherDownTiceRoom"] = 1081;
        values[valuesById[1082] = "OPRC_OpYield"] = 1082;
        values[valuesById[1103] = "OPRC_RoomGameTimes"] = 1103;
        values[valuesById[1105] = "OPRC_CoinSceneEnterQueueSucc"] = 1105;
        values[valuesById[1106] = "OPRC_CoinSceneEnterQueueFail"] = 1106;
        values[valuesById[1107] = "OPRC_CoinSceneEnterQueueOverTime"] = 1107;
        values[valuesById[1113] = "OPRC_MustBindPromoter"] = 1113;
        values[valuesById[1078] = "OPRC_YourAreGamingCannotLeave"] = 1078;
        return values;
    })();

    gamehall.CoinSceneGamePacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_CoinSceneGame_ZERO"] = 0;
        values[valuesById[2320] = "PACKET_CS_COINSCENE_GETPLAYERNUM"] = 2320;
        values[valuesById[2321] = "PACKET_SC_COINSCENE_GETPLAYERNUM"] = 2321;
        values[valuesById[2322] = "PACKET_CS_COINSCENE_OP"] = 2322;
        values[valuesById[2323] = "PACKET_SC_COINSCENE_OP"] = 2323;
        values[valuesById[2324] = "PACKET_CS_COINSCENE_LISTROOM"] = 2324;
        values[valuesById[2325] = "PACKET_SC_COINSCENE_LISTROOM"] = 2325;
        values[valuesById[2326] = "PACKET_SC_COINSCENE_QUEUESTATE"] = 2326;
        return values;
    })();

    gamehall.CSCoinSceneGetPlayerNum = (function() {

        function CSCoinSceneGetPlayerNum(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCoinSceneGetPlayerNum.prototype.GameId = 0;
        CSCoinSceneGetPlayerNum.prototype.GameModel = 0;

        CSCoinSceneGetPlayerNum.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.GameModel != null && Object.hasOwnProperty.call(m, "GameModel"))
                w.uint32(16).int32(m.GameModel);
            return w;
        };

        CSCoinSceneGetPlayerNum.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSCoinSceneGetPlayerNum();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.GameModel = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSCoinSceneGetPlayerNum;
    })();

    gamehall.SCCoinSceneGetPlayerNum = (function() {

        function SCCoinSceneGetPlayerNum(p) {
            this.Nums = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCoinSceneGetPlayerNum.prototype.Nums = $util.emptyArray;

        SCCoinSceneGetPlayerNum.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Nums != null && m.Nums.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.Nums.length; ++i)
                    w.int32(m.Nums[i]);
                w.ldelim();
            }
            return w;
        };

        SCCoinSceneGetPlayerNum.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCCoinSceneGetPlayerNum();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Nums && m.Nums.length))
                        m.Nums = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Nums.push(r.int32());
                    } else
                        m.Nums.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCoinSceneGetPlayerNum;
    })();

    gamehall.CSCoinSceneOp = (function() {

        function CSCoinSceneOp(p) {
            this.OpParams = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCoinSceneOp.prototype.Id = 0;
        CSCoinSceneOp.prototype.OpType = 0;
        CSCoinSceneOp.prototype.OpParams = $util.emptyArray;
        CSCoinSceneOp.prototype.Platform = "";

        CSCoinSceneOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.OpType != null && Object.hasOwnProperty.call(m, "OpType"))
                w.uint32(16).int32(m.OpType);
            if (m.OpParams != null && m.OpParams.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.OpParams.length; ++i)
                    w.int32(m.OpParams[i]);
                w.ldelim();
            }
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(34).string(m.Platform);
            return w;
        };

        CSCoinSceneOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSCoinSceneOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.OpType = r.int32();
                    break;
                case 3:
                    if (!(m.OpParams && m.OpParams.length))
                        m.OpParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OpParams.push(r.int32());
                    } else
                        m.OpParams.push(r.int32());
                    break;
                case 4:
                    m.Platform = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSCoinSceneOp;
    })();

    gamehall.SCCoinSceneOp = (function() {

        function SCCoinSceneOp(p) {
            this.OpParams = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCoinSceneOp.prototype.OpCode = 0;
        SCCoinSceneOp.prototype.Id = 0;
        SCCoinSceneOp.prototype.OpType = 0;
        SCCoinSceneOp.prototype.OpParams = $util.emptyArray;

        SCCoinSceneOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(16).int32(m.Id);
            if (m.OpType != null && Object.hasOwnProperty.call(m, "OpType"))
                w.uint32(24).int32(m.OpType);
            if (m.OpParams != null && m.OpParams.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.OpParams.length; ++i)
                    w.int32(m.OpParams[i]);
                w.ldelim();
            }
            return w;
        };

        SCCoinSceneOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCCoinSceneOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    m.Id = r.int32();
                    break;
                case 3:
                    m.OpType = r.int32();
                    break;
                case 4:
                    if (!(m.OpParams && m.OpParams.length))
                        m.OpParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OpParams.push(r.int32());
                    } else
                        m.OpParams.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCoinSceneOp;
    })();

    gamehall.CSCoinSceneListRoom = (function() {

        function CSCoinSceneListRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCoinSceneListRoom.prototype.Id = 0;

        CSCoinSceneListRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            return w;
        };

        CSCoinSceneListRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSCoinSceneListRoom();
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

        return CSCoinSceneListRoom;
    })();

    gamehall.CoinSceneInfo = (function() {

        function CoinSceneInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CoinSceneInfo.prototype.SceneId = 0;
        CoinSceneInfo.prototype.PlayerNum = 0;

        CoinSceneInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.PlayerNum != null && Object.hasOwnProperty.call(m, "PlayerNum"))
                w.uint32(16).int32(m.PlayerNum);
            return w;
        };

        CoinSceneInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CoinSceneInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    m.PlayerNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CoinSceneInfo;
    })();

    gamehall.SCCoinSceneListRoom = (function() {

        function SCCoinSceneListRoom(p) {
            this.OtherIntParams = [];
            this.Datas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCoinSceneListRoom.prototype.Id = 0;
        SCCoinSceneListRoom.prototype.LimitCoin = 0;
        SCCoinSceneListRoom.prototype.MaxCoinLimit = 0;
        SCCoinSceneListRoom.prototype.BaseScore = 0;
        SCCoinSceneListRoom.prototype.MaxScore = 0;
        SCCoinSceneListRoom.prototype.MaxPlayerNum = 0;
        SCCoinSceneListRoom.prototype.OtherIntParams = $util.emptyArray;
        SCCoinSceneListRoom.prototype.Datas = $util.emptyArray;

        SCCoinSceneListRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.LimitCoin != null && Object.hasOwnProperty.call(m, "LimitCoin"))
                w.uint32(16).int32(m.LimitCoin);
            if (m.MaxCoinLimit != null && Object.hasOwnProperty.call(m, "MaxCoinLimit"))
                w.uint32(24).int32(m.MaxCoinLimit);
            if (m.BaseScore != null && Object.hasOwnProperty.call(m, "BaseScore"))
                w.uint32(32).int32(m.BaseScore);
            if (m.MaxScore != null && Object.hasOwnProperty.call(m, "MaxScore"))
                w.uint32(40).int32(m.MaxScore);
            if (m.MaxPlayerNum != null && Object.hasOwnProperty.call(m, "MaxPlayerNum"))
                w.uint32(48).int32(m.MaxPlayerNum);
            if (m.OtherIntParams != null && m.OtherIntParams.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.OtherIntParams.length; ++i)
                    w.int32(m.OtherIntParams[i]);
                w.ldelim();
            }
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.gamehall.CoinSceneInfo.encode(m.Datas[i], w.uint32(66).fork()).ldelim();
            }
            return w;
        };

        SCCoinSceneListRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCCoinSceneListRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.LimitCoin = r.int32();
                    break;
                case 3:
                    m.MaxCoinLimit = r.int32();
                    break;
                case 4:
                    m.BaseScore = r.int32();
                    break;
                case 5:
                    m.MaxScore = r.int32();
                    break;
                case 6:
                    m.MaxPlayerNum = r.int32();
                    break;
                case 7:
                    if (!(m.OtherIntParams && m.OtherIntParams.length))
                        m.OtherIntParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OtherIntParams.push(r.int32());
                    } else
                        m.OtherIntParams.push(r.int32());
                    break;
                case 8:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.gamehall.CoinSceneInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCoinSceneListRoom;
    })();

    gamehall.SCCoinSceneQueueState = (function() {

        function SCCoinSceneQueueState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCoinSceneQueueState.prototype.GameFreeId = 0;
        SCCoinSceneQueueState.prototype.Count = 0;
        SCCoinSceneQueueState.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCCoinSceneQueueState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(16).int32(m.Count);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(24).int64(m.Ts);
            return w;
        };

        SCCoinSceneQueueState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCCoinSceneQueueState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    m.Count = r.int32();
                    break;
                case 3:
                    m.Ts = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCoinSceneQueueState;
    })();

    gamehall.OpResultCode_Game = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess_Game"] = 0;
        values[valuesById[1] = "OPRC_Error_Game"] = 1;
        values[valuesById[1016] = "OPRC_RoomNotExist_Game"] = 1016;
        values[valuesById[1017] = "OPRC_GameNotExist_Game"] = 1017;
        values[valuesById[1019] = "OPRC_RoomIsFull_Game"] = 1019;
        values[valuesById[1020] = "OPRC_RoomHadExist_Game"] = 1020;
        values[valuesById[1022] = "OPRC_GameStarting_Game"] = 1022;
        values[valuesById[1024] = "OPRC_CannotWatchReasonInOther_Game"] = 1024;
        values[valuesById[1040] = "OPRC_MoneyNotEnough_Game"] = 1040;
        values[valuesById[1042] = "OPRC_CannotWatchReasonRoomNotStart_Game"] = 1042;
        values[valuesById[1043] = "OPRC_OnlyAllowClubMemberEnter_Game"] = 1043;
        values[valuesById[1044] = "OPRC_YourResVerIsLow_Game"] = 1044;
        values[valuesById[1045] = "OPRC_YourAppVerIsLow_Game"] = 1045;
        values[valuesById[1048] = "OPRC_ScenePosFull_Game"] = 1048;
        values[valuesById[1050] = "OPRC_SceneEnterForWatcher_Game"] = 1050;
        values[valuesById[1053] = "OPRC_RoomHadClosed_Game"] = 1053;
        values[valuesById[1054] = "OPRC_SceneServerMaintain_Game"] = 1054;
        values[valuesById[1055] = "OPRC_SameIpForbid_Game"] = 1055;
        values[valuesById[1056] = "OPRC_CoinNotEnough_Game"] = 1056;
        values[valuesById[1058] = "OPRC_CoinTooMore_Game"] = 1058;
        values[valuesById[1082] = "OPRC_OpYield_Game"] = 1082;
        values[valuesById[1097] = "OPRC_AllocRoomIdFailed_Game"] = 1097;
        values[valuesById[1098] = "OPRC_PrivateRoomCountLimit_Game"] = 1098;
        values[valuesById[1075] = "OPRC_LowerRice_ScenceMax_Game"] = 1075;
        values[valuesById[1076] = "OPRC_LowerRice_PlayerMax_Game"] = 1076;
        values[valuesById[1077] = "OPRC_LowerRice_PlayerDownMax_Game"] = 1077;
        values[valuesById[1078] = "OPRC_YourAreGamingCannotLeave_Game"] = 1078;
        values[valuesById[1096] = "OPRC_ThirdPltProcessing_Game"] = 1096;
        values[valuesById[1103] = "OPRC_RoomGameTimes_Game"] = 1103;
        values[valuesById[1113] = "OPRC_MustBindPromoter_Game"] = 1113;
        values[valuesById[5023] = "Oprc_Club_ClubIsClose_Game"] = 5023;
        values[valuesById[9000] = "OPRC_Dg_RegistErr_Game"] = 9000;
        values[valuesById[9001] = "OPRC_Dg_LoginErr_Game"] = 9001;
        values[valuesById[9002] = "OPRC_Dg_PlatErr_Game"] = 9002;
        values[valuesById[9003] = "OPRC_Dg_QuotaNotEnough_Game"] = 9003;
        values[valuesById[9010] = "OPRC_Thr_GameClose_Game"] = 9010;
        return values;
    })();

    gamehall.GameHallPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_GameHall_ZERO"] = 0;
        values[valuesById[2200] = "PACKET_CS_JOINGAME"] = 2200;
        values[valuesById[2201] = "PACKET_SC_JOINGAME"] = 2201;
        values[valuesById[2202] = "PACKET_CS_CREATEROOM"] = 2202;
        values[valuesById[2203] = "PACKET_SC_CREATEROOM"] = 2203;
        values[valuesById[2204] = "PACKET_CS_ENTERROOM"] = 2204;
        values[valuesById[2205] = "PACKET_SC_ENTERROOM"] = 2205;
        values[valuesById[2206] = "PACKET_CS_RETURNROOM"] = 2206;
        values[valuesById[2207] = "PACKET_SC_RETURNROOM"] = 2207;
        values[valuesById[2208] = "PACKET_CS_AUDIENCE_ENTERROOM"] = 2208;
        values[valuesById[2209] = "PACKET_CS_ENTERGAME"] = 2209;
        values[valuesById[2210] = "PACKET_SC_ENTERGAME"] = 2210;
        values[valuesById[2211] = "PACKET_CS_QUITGAME"] = 2211;
        values[valuesById[2212] = "PACKET_SC_QUITGAME"] = 2212;
        values[valuesById[2213] = "PACKET_SC_CARDGAINWAY"] = 2213;
        values[valuesById[2214] = "PACKET_CS_TASKLIST"] = 2214;
        values[valuesById[2215] = "PACKET_SC_TASKLIST"] = 2215;
        values[valuesById[2216] = "PACKET_SC_TASKCHG"] = 2216;
        values[valuesById[2217] = "PACKET_SC_TACKCOMPLETE"] = 2217;
        values[valuesById[2218] = "PACKET_SC_TASKDEL"] = 2218;
        values[valuesById[2219] = "PACKET_CS_TACKDRAWPRIZE"] = 2219;
        values[valuesById[2220] = "PACKET_SC_TACKDRAWPRIZE"] = 2220;
        values[valuesById[2223] = "PACKET_CS_GETAGENTGAMEREC"] = 2223;
        values[valuesById[2224] = "PACKET_SC_GETAGENTGAMEREC"] = 2224;
        values[valuesById[2225] = "PACKET_CS_DELAGENTGAMEREC"] = 2225;
        values[valuesById[2226] = "PACKET_CS_SHOPBUY"] = 2226;
        values[valuesById[2227] = "PACKET_SC_SHOPBUY"] = 2227;
        values[valuesById[2228] = "PACKET_SC_LIMITLIST"] = 2228;
        values[valuesById[2229] = "PACKET_CS_GETLATELYGAMEIDS"] = 2229;
        values[valuesById[2230] = "PACKET_SC_GETLATELYGAMEIDS"] = 2230;
        values[valuesById[2231] = "PACKET_CS_GETGAMECONFIG"] = 2231;
        values[valuesById[2232] = "PACKET_SC_GETGAMECONFIG"] = 2232;
        values[valuesById[2233] = "PACKET_SC_CHANGEGAMESTATUS"] = 2233;
        values[valuesById[2240] = "PACKET_CS_ENTERHALL"] = 2240;
        values[valuesById[2241] = "PACKET_SC_ENTERHALL"] = 2241;
        values[valuesById[2242] = "PACKET_CS_LEAVEHALL"] = 2242;
        values[valuesById[2243] = "PACKET_SC_LEAVEHALL"] = 2243;
        values[valuesById[2244] = "PACKET_CS_HALLROOMLIST"] = 2244;
        values[valuesById[2245] = "PACKET_SC_HALLROOMLIST"] = 2245;
        values[valuesById[2246] = "PACKET_SC_ROOMPLAYERENTER"] = 2246;
        values[valuesById[2247] = "PACKET_SC_ROOMPLAYERLEAVE"] = 2247;
        values[valuesById[2248] = "PACKET_SC_ROOMSTATECHANG"] = 2248;
        values[valuesById[2249] = "PACKET_SC_HALLPLAYERNUM"] = 2249;
        values[valuesById[2250] = "PACKET_SC_BULLETIONINFO"] = 2250;
        values[valuesById[2251] = "PACKET_CS_BULLETIONINFO"] = 2251;
        values[valuesById[2252] = "PACKET_CS_CUSTOMERINFOLIST"] = 2252;
        values[valuesById[2253] = "PACKET_SC_CUSTOMERINFOLIST"] = 2253;
        values[valuesById[2254] = "PACKET_CS_ENTERDGGAME"] = 2254;
        values[valuesById[2255] = "PACKET_SC_ENTERDGGAME"] = 2255;
        values[valuesById[2256] = "PACKET_CS_LEAVEDGGAME"] = 2256;
        values[valuesById[2257] = "PACKET_SC_LEAVEDGGAME"] = 2257;
        values[valuesById[2258] = "PACKET_SC_PLAYERRECHARGEANSWER"] = 2258;
        values[valuesById[2259] = "PACKET_CS_THRIDACCOUNTSTATICSTIC"] = 2259;
        values[valuesById[2260] = "PACKET_SC_THRIDACCOUNTSTATICSTIC"] = 2260;
        values[valuesById[2261] = "PACKET_CS_THRIDACCOUNTTRANSFER"] = 2261;
        values[valuesById[2262] = "PACKET_SC_THRIDACCOUNTTRANSFER"] = 2262;
        values[valuesById[2263] = "PACKET_CS_ENTERTHRIDGAME"] = 2263;
        values[valuesById[2264] = "PACKET_SC_ENTERTHRIDGAME"] = 2264;
        values[valuesById[2265] = "PACKET_CS_LEAVETHRIDGAME"] = 2265;
        values[valuesById[2266] = "PACKET_SC_LEAVETHRIDGAME"] = 2266;
        values[valuesById[2267] = "PACKET_CS_THRIDGAMELIST"] = 2267;
        values[valuesById[2268] = "PACKET_SC_THRIDGAMELIST"] = 2268;
        values[valuesById[2269] = "PACKET_CS_THRIDGAMEBALANCEUPDATE"] = 2269;
        values[valuesById[2270] = "PACKET_SC_THRIDGAMEBALANCEUPDATE"] = 2270;
        values[valuesById[2271] = "PACKET_SC_THRIDGAMEBALANCEUPDATESTATE"] = 2271;
        values[valuesById[2272] = "PACKET_CS_CREATEPRIVATEROOM"] = 2272;
        values[valuesById[2273] = "PACKET_SC_CREATEPRIVATEROOM"] = 2273;
        values[valuesById[2274] = "PACKET_CS_GETPRIVATEROOMLIST"] = 2274;
        values[valuesById[2275] = "PACKET_SC_GETPRIVATEROOMLIST"] = 2275;
        values[valuesById[2276] = "PACKET_CS_GETPRIVATEROOMHISTORY"] = 2276;
        values[valuesById[2277] = "PACKET_SC_GETPRIVATEROOMHISTORY"] = 2277;
        values[valuesById[2278] = "PACKET_CS_DESTROYPRIVATEROOM"] = 2278;
        values[valuesById[2279] = "PACKET_SC_DESTROYPRIVATEROOM"] = 2279;
        values[valuesById[2280] = "PACKET_CS_QUERYROOMINFO"] = 2280;
        values[valuesById[2281] = "PACKET_SC_QUERYROOMINFO"] = 2281;
        values[valuesById[2283] = "PACKET_SC_GAMESUBLIST"] = 2283;
        values[valuesById[2284] = "PACKET_CS_GAMEOBSERVE"] = 2284;
        values[valuesById[2285] = "PACKET_SC_GAMESTATE"] = 2285;
        values[valuesById[2286] = "PACKET_SC_SYNCGAMEFREE"] = 2286;
        values[valuesById[2287] = "PACKET_SC_LOTTERYSYNC"] = 2287;
        values[valuesById[2288] = "PACKET_CS_LOTTERYLOG"] = 2288;
        values[valuesById[2289] = "PACKET_SC_LOTTERYLOG"] = 2289;
        values[valuesById[2290] = "PACKET_SC_LOTTERYBILL"] = 2290;
        values[valuesById[2291] = "PACKET_CS_UPLOADLOC"] = 2291;
        values[valuesById[2292] = "PACKET_SC_UPLOADLOC"] = 2292;
        values[valuesById[2293] = "PACKET_CS_AUDIENCESIT"] = 2293;
        values[valuesById[2294] = "PACKET_SC_AUDIENCESIT"] = 2294;
        values[valuesById[2295] = "PACKET_CS_COMNOTICE"] = 2295;
        values[valuesById[2296] = "PACKET_SC_COMNOTICE"] = 2296;
        values[valuesById[8001] = "PACKET_CS_LEAVEROOM"] = 8001;
        values[valuesById[8002] = "PACKET_SC_LEAVEROOM"] = 8002;
        values[valuesById[8003] = "PACKET_CS_DESTROYROOM"] = 8003;
        values[valuesById[8004] = "PACKET_SC_DESTROYROOM"] = 8004;
        values[valuesById[8005] = "PACKET_CS_FORCESTART"] = 8005;
        values[valuesById[8006] = "PACKET_SC_FORCESTART"] = 8006;
        values[valuesById[8007] = "PACKET_CS_AUDIENCE_LEAVEROOM"] = 8007;
        values[valuesById[8008] = "PACKET_CS_PLAYER_SWITCHFLAG"] = 8008;
        return values;
    })();

    gamehall.CSEnterHall = (function() {

        function CSEnterHall(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSEnterHall.prototype.HallId = 0;

        CSEnterHall.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.HallId != null && Object.hasOwnProperty.call(m, "HallId"))
                w.uint32(8).int32(m.HallId);
            return w;
        };

        CSEnterHall.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSEnterHall();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.HallId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSEnterHall;
    })();

    gamehall.SCEnterHall = (function() {

        function SCEnterHall(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCEnterHall.prototype.HallId = 0;
        SCEnterHall.prototype.OpRetCode = 0;

        SCEnterHall.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.HallId != null && Object.hasOwnProperty.call(m, "HallId"))
                w.uint32(8).int32(m.HallId);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(16).int32(m.OpRetCode);
            return w;
        };

        SCEnterHall.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCEnterHall();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.HallId = r.int32();
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

        return SCEnterHall;
    })();

    gamehall.CSLeaveHall = (function() {

        function CSLeaveHall(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSLeaveHall.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSLeaveHall.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSLeaveHall();
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

        return CSLeaveHall;
    })();

    gamehall.SCLeaveHall = (function() {

        function SCLeaveHall(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLeaveHall.prototype.HallId = 0;

        SCLeaveHall.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.HallId != null && Object.hasOwnProperty.call(m, "HallId"))
                w.uint32(8).int32(m.HallId);
            return w;
        };

        SCLeaveHall.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCLeaveHall();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.HallId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLeaveHall;
    })();

    gamehall.RoomPlayerInfo = (function() {

        function RoomPlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RoomPlayerInfo.prototype.SnId = 0;
        RoomPlayerInfo.prototype.Head = 0;
        RoomPlayerInfo.prototype.Sex = 0;
        RoomPlayerInfo.prototype.Name = "";
        RoomPlayerInfo.prototype.Pos = 0;
        RoomPlayerInfo.prototype.Flag = 0;
        RoomPlayerInfo.prototype.HeadOutLine = 0;
        RoomPlayerInfo.prototype.VIP = 0;

        RoomPlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Head != null && Object.hasOwnProperty.call(m, "Head"))
                w.uint32(16).int32(m.Head);
            if (m.Sex != null && Object.hasOwnProperty.call(m, "Sex"))
                w.uint32(24).int32(m.Sex);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(34).string(m.Name);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(40).int32(m.Pos);
            if (m.Flag != null && Object.hasOwnProperty.call(m, "Flag"))
                w.uint32(48).int32(m.Flag);
            if (m.HeadOutLine != null && Object.hasOwnProperty.call(m, "HeadOutLine"))
                w.uint32(56).int32(m.HeadOutLine);
            if (m.VIP != null && Object.hasOwnProperty.call(m, "VIP"))
                w.uint32(64).int32(m.VIP);
            return w;
        };

        RoomPlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.RoomPlayerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Head = r.int32();
                    break;
                case 3:
                    m.Sex = r.int32();
                    break;
                case 4:
                    m.Name = r.string();
                    break;
                case 5:
                    m.Pos = r.int32();
                    break;
                case 6:
                    m.Flag = r.int32();
                    break;
                case 7:
                    m.HeadOutLine = r.int32();
                    break;
                case 8:
                    m.VIP = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomPlayerInfo;
    })();

    gamehall.RoomInfo = (function() {

        function RoomInfo(p) {
            this.Players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RoomInfo.prototype.RoomId = 0;
        RoomInfo.prototype.Starting = false;
        RoomInfo.prototype.Players = $util.emptyArray;

        RoomInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.Players != null && m.Players.length) {
                for (var i = 0; i < m.Players.length; ++i)
                    $root.gamehall.RoomPlayerInfo.encode(m.Players[i], w.uint32(42).fork()).ldelim();
            }
            if (m.Starting != null && Object.hasOwnProperty.call(m, "Starting"))
                w.uint32(56).bool(m.Starting);
            return w;
        };

        RoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.RoomInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 7:
                    m.Starting = r.bool();
                    break;
                case 5:
                    if (!(m.Players && m.Players.length))
                        m.Players = [];
                    m.Players.push($root.gamehall.RoomPlayerInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoomInfo;
    })();

    gamehall.CSHallRoomList = (function() {

        function CSHallRoomList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSHallRoomList.prototype.HallId = 0;

        CSHallRoomList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.HallId != null && Object.hasOwnProperty.call(m, "HallId"))
                w.uint32(8).int32(m.HallId);
            return w;
        };

        CSHallRoomList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSHallRoomList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.HallId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSHallRoomList;
    })();

    gamehall.HallInfo = (function() {

        function HallInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        HallInfo.prototype.SceneType = 0;
        HallInfo.prototype.PlayerNum = 0;

        HallInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneType != null && Object.hasOwnProperty.call(m, "SceneType"))
                w.uint32(8).int32(m.SceneType);
            if (m.PlayerNum != null && Object.hasOwnProperty.call(m, "PlayerNum"))
                w.uint32(16).int32(m.PlayerNum);
            return w;
        };

        HallInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.HallInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneType = r.int32();
                    break;
                case 2:
                    m.PlayerNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return HallInfo;
    })();

    gamehall.HallPlayerNum = (function() {

        function HallPlayerNum(p) {
            this.HallData = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        HallPlayerNum.prototype.HallData = $util.emptyArray;

        HallPlayerNum.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.HallData != null && m.HallData.length) {
                for (var i = 0; i < m.HallData.length; ++i)
                    $root.gamehall.HallInfo.encode(m.HallData[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        HallPlayerNum.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.HallPlayerNum();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.HallData && m.HallData.length))
                        m.HallData = [];
                    m.HallData.push($root.gamehall.HallInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return HallPlayerNum;
    })();

    gamehall.SCHallRoomList = (function() {

        function SCHallRoomList(p) {
            this.Params = [];
            this.Rooms = [];
            this.HallData = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCHallRoomList.prototype.HallId = 0;
        SCHallRoomList.prototype.GameId = 0;
        SCHallRoomList.prototype.GameMode = 0;
        SCHallRoomList.prototype.IsAdd = false;
        SCHallRoomList.prototype.Params = $util.emptyArray;
        SCHallRoomList.prototype.Rooms = $util.emptyArray;
        SCHallRoomList.prototype.HallData = $util.emptyArray;

        SCHallRoomList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.HallId != null && Object.hasOwnProperty.call(m, "HallId"))
                w.uint32(8).int32(m.HallId);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(16).int32(m.GameId);
            if (m.GameMode != null && Object.hasOwnProperty.call(m, "GameMode"))
                w.uint32(24).int32(m.GameMode);
            if (m.IsAdd != null && Object.hasOwnProperty.call(m, "IsAdd"))
                w.uint32(32).bool(m.IsAdd);
            if (m.Params != null && m.Params.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            if (m.Rooms != null && m.Rooms.length) {
                for (var i = 0; i < m.Rooms.length; ++i)
                    $root.gamehall.RoomInfo.encode(m.Rooms[i], w.uint32(50).fork()).ldelim();
            }
            if (m.HallData != null && m.HallData.length) {
                for (var i = 0; i < m.HallData.length; ++i)
                    $root.gamehall.HallInfo.encode(m.HallData[i], w.uint32(58).fork()).ldelim();
            }
            return w;
        };

        SCHallRoomList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCHallRoomList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.HallId = r.int32();
                    break;
                case 2:
                    m.GameId = r.int32();
                    break;
                case 3:
                    m.GameMode = r.int32();
                    break;
                case 4:
                    m.IsAdd = r.bool();
                    break;
                case 5:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                case 6:
                    if (!(m.Rooms && m.Rooms.length))
                        m.Rooms = [];
                    m.Rooms.push($root.gamehall.RoomInfo.decode(r, r.uint32()));
                    break;
                case 7:
                    if (!(m.HallData && m.HallData.length))
                        m.HallData = [];
                    m.HallData.push($root.gamehall.HallInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCHallRoomList;
    })();

    gamehall.SCRoomPlayerEnter = (function() {

        function SCRoomPlayerEnter(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRoomPlayerEnter.prototype.RoomId = 0;
        SCRoomPlayerEnter.prototype.Player = null;

        SCRoomPlayerEnter.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.Player != null && Object.hasOwnProperty.call(m, "Player"))
                $root.gamehall.RoomPlayerInfo.encode(m.Player, w.uint32(18).fork()).ldelim();
            return w;
        };

        SCRoomPlayerEnter.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCRoomPlayerEnter();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.Player = $root.gamehall.RoomPlayerInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRoomPlayerEnter;
    })();

    gamehall.SCRoomPlayerLeave = (function() {

        function SCRoomPlayerLeave(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRoomPlayerLeave.prototype.RoomId = 0;
        SCRoomPlayerLeave.prototype.Pos = 0;

        SCRoomPlayerLeave.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(16).int32(m.Pos);
            return w;
        };

        SCRoomPlayerLeave.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCRoomPlayerLeave();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
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

        return SCRoomPlayerLeave;
    })();

    gamehall.SCRoomStateChange = (function() {

        function SCRoomStateChange(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRoomStateChange.prototype.RoomId = 0;
        SCRoomStateChange.prototype.Starting = false;
        SCRoomStateChange.prototype.State = 0;

        SCRoomStateChange.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.Starting != null && Object.hasOwnProperty.call(m, "Starting"))
                w.uint32(16).bool(m.Starting);
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(24).int32(m.State);
            return w;
        };

        SCRoomStateChange.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCRoomStateChange();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.Starting = r.bool();
                    break;
                case 3:
                    m.State = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRoomStateChange;
    })();

    gamehall.CSCreateRoom = (function() {

        function CSCreateRoom(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCreateRoom.prototype.GameId = 0;
        CSCreateRoom.prototype.BaseCoin = 0;
        CSCreateRoom.prototype.SceneMode = 0;
        CSCreateRoom.prototype.MaxPlayerNum = 0;
        CSCreateRoom.prototype.Params = $util.emptyArray;

        CSCreateRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.BaseCoin != null && Object.hasOwnProperty.call(m, "BaseCoin"))
                w.uint32(16).int32(m.BaseCoin);
            if (m.SceneMode != null && Object.hasOwnProperty.call(m, "SceneMode"))
                w.uint32(24).int32(m.SceneMode);
            if (m.MaxPlayerNum != null && Object.hasOwnProperty.call(m, "MaxPlayerNum"))
                w.uint32(32).int32(m.MaxPlayerNum);
            if (m.Params != null && m.Params.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            return w;
        };

        CSCreateRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSCreateRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.BaseCoin = r.int32();
                    break;
                case 3:
                    m.SceneMode = r.int32();
                    break;
                case 4:
                    m.MaxPlayerNum = r.int32();
                    break;
                case 5:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSCreateRoom;
    })();

    gamehall.SCCreateRoom = (function() {

        function SCCreateRoom(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCreateRoom.prototype.GameId = 0;
        SCCreateRoom.prototype.BaseCoin = 0;
        SCCreateRoom.prototype.SceneMode = 0;
        SCCreateRoom.prototype.MaxPlayerNum = 0;
        SCCreateRoom.prototype.Params = $util.emptyArray;
        SCCreateRoom.prototype.OpRetCode = 0;

        SCCreateRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.BaseCoin != null && Object.hasOwnProperty.call(m, "BaseCoin"))
                w.uint32(16).int32(m.BaseCoin);
            if (m.SceneMode != null && Object.hasOwnProperty.call(m, "SceneMode"))
                w.uint32(24).int32(m.SceneMode);
            if (m.MaxPlayerNum != null && Object.hasOwnProperty.call(m, "MaxPlayerNum"))
                w.uint32(32).int32(m.MaxPlayerNum);
            if (m.Params != null && m.Params.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(48).int32(m.OpRetCode);
            return w;
        };

        SCCreateRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCCreateRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.BaseCoin = r.int32();
                    break;
                case 3:
                    m.SceneMode = r.int32();
                    break;
                case 4:
                    m.MaxPlayerNum = r.int32();
                    break;
                case 5:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                case 6:
                    m.OpRetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCreateRoom;
    })();

    gamehall.CSDestroyRoom = (function() {

        function CSDestroyRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSDestroyRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSDestroyRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSDestroyRoom();
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

        return CSDestroyRoom;
    })();

    gamehall.SCDestroyRoom = (function() {

        function SCDestroyRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCDestroyRoom.prototype.RoomId = 0;
        SCDestroyRoom.prototype.OpRetCode = 0;
        SCDestroyRoom.prototype.IsForce = 0;

        SCDestroyRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(16).int32(m.OpRetCode);
            if (m.IsForce != null && Object.hasOwnProperty.call(m, "IsForce"))
                w.uint32(24).int32(m.IsForce);
            return w;
        };

        SCDestroyRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCDestroyRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.OpRetCode = r.int32();
                    break;
                case 3:
                    m.IsForce = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCDestroyRoom;
    })();

    gamehall.CSEnterRoom = (function() {

        function CSEnterRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSEnterRoom.prototype.RoomId = 0;
        CSEnterRoom.prototype.GameId = 0;

        CSEnterRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(16).int32(m.GameId);
            return w;
        };

        CSEnterRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSEnterRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.GameId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSEnterRoom;
    })();

    gamehall.SCEnterRoom = (function() {

        function SCEnterRoom(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCEnterRoom.prototype.GameId = 0;
        SCEnterRoom.prototype.ModeType = 0;
        SCEnterRoom.prototype.Params = $util.emptyArray;
        SCEnterRoom.prototype.RoomId = 0;
        SCEnterRoom.prototype.HallId = 0;
        SCEnterRoom.prototype.OpRetCode = 0;
        SCEnterRoom.prototype.ClubId = 0;

        SCEnterRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.ModeType != null && Object.hasOwnProperty.call(m, "ModeType"))
                w.uint32(16).int32(m.ModeType);
            if (m.Params != null && m.Params.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(32).int32(m.RoomId);
            if (m.HallId != null && Object.hasOwnProperty.call(m, "HallId"))
                w.uint32(40).int32(m.HallId);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(48).int32(m.OpRetCode);
            if (m.ClubId != null && Object.hasOwnProperty.call(m, "ClubId"))
                w.uint32(56).int32(m.ClubId);
            return w;
        };

        SCEnterRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCEnterRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.ModeType = r.int32();
                    break;
                case 3:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                case 4:
                    m.RoomId = r.int32();
                    break;
                case 5:
                    m.HallId = r.int32();
                    break;
                case 6:
                    m.OpRetCode = r.int32();
                    break;
                case 7:
                    m.ClubId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCEnterRoom;
    })();

    gamehall.CSLeaveRoom = (function() {

        function CSLeaveRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSLeaveRoom.prototype.Mode = 0;

        CSLeaveRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Mode != null && Object.hasOwnProperty.call(m, "Mode"))
                w.uint32(8).int32(m.Mode);
            return w;
        };

        CSLeaveRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSLeaveRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Mode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSLeaveRoom;
    })();

    gamehall.SCLeaveRoom = (function() {

        function SCLeaveRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLeaveRoom.prototype.OpRetCode = 0;
        SCLeaveRoom.prototype.Reason = 0;
        SCLeaveRoom.prototype.RoomId = 0;
        SCLeaveRoom.prototype.Mode = 0;

        SCLeaveRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Reason != null && Object.hasOwnProperty.call(m, "Reason"))
                w.uint32(16).int32(m.Reason);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(24).int32(m.RoomId);
            if (m.Mode != null && Object.hasOwnProperty.call(m, "Mode"))
                w.uint32(32).int32(m.Mode);
            return w;
        };

        SCLeaveRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCLeaveRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Reason = r.int32();
                    break;
                case 3:
                    m.RoomId = r.int32();
                    break;
                case 4:
                    m.Mode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLeaveRoom;
    })();

    gamehall.CSReturnRoom = (function() {

        function CSReturnRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSReturnRoom.prototype.ApkVer = 0;
        CSReturnRoom.prototype.ResVer = 0;
        CSReturnRoom.prototype.IsLoaded = false;
        CSReturnRoom.prototype.RoomId = 0;

        CSReturnRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ApkVer != null && Object.hasOwnProperty.call(m, "ApkVer"))
                w.uint32(8).int32(m.ApkVer);
            if (m.ResVer != null && Object.hasOwnProperty.call(m, "ResVer"))
                w.uint32(16).int32(m.ResVer);
            if (m.IsLoaded != null && Object.hasOwnProperty.call(m, "IsLoaded"))
                w.uint32(24).bool(m.IsLoaded);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(32).int32(m.RoomId);
            return w;
        };

        CSReturnRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSReturnRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ApkVer = r.int32();
                    break;
                case 2:
                    m.ResVer = r.int32();
                    break;
                case 3:
                    m.IsLoaded = r.bool();
                    break;
                case 4:
                    m.RoomId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSReturnRoom;
    })();

    gamehall.SCReturnRoom = (function() {

        function SCReturnRoom(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCReturnRoom.prototype.OpRetCode = 0;
        SCReturnRoom.prototype.RoomId = 0;
        SCReturnRoom.prototype.GameId = 0;
        SCReturnRoom.prototype.ModeType = 0;
        SCReturnRoom.prototype.Params = $util.emptyArray;
        SCReturnRoom.prototype.HallId = 0;
        SCReturnRoom.prototype.MinApkVer = 0;
        SCReturnRoom.prototype.LatestApkVer = 0;
        SCReturnRoom.prototype.MinResVer = 0;
        SCReturnRoom.prototype.LatestResVer = 0;
        SCReturnRoom.prototype.IsLoaded = false;
        SCReturnRoom.prototype.ClubId = 0;

        SCReturnRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(16).int32(m.RoomId);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(24).int32(m.GameId);
            if (m.ModeType != null && Object.hasOwnProperty.call(m, "ModeType"))
                w.uint32(32).int32(m.ModeType);
            if (m.Params != null && m.Params.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            if (m.HallId != null && Object.hasOwnProperty.call(m, "HallId"))
                w.uint32(48).int32(m.HallId);
            if (m.MinApkVer != null && Object.hasOwnProperty.call(m, "MinApkVer"))
                w.uint32(56).int32(m.MinApkVer);
            if (m.LatestApkVer != null && Object.hasOwnProperty.call(m, "LatestApkVer"))
                w.uint32(64).int32(m.LatestApkVer);
            if (m.MinResVer != null && Object.hasOwnProperty.call(m, "MinResVer"))
                w.uint32(72).int32(m.MinResVer);
            if (m.LatestResVer != null && Object.hasOwnProperty.call(m, "LatestResVer"))
                w.uint32(80).int32(m.LatestResVer);
            if (m.IsLoaded != null && Object.hasOwnProperty.call(m, "IsLoaded"))
                w.uint32(88).bool(m.IsLoaded);
            if (m.ClubId != null && Object.hasOwnProperty.call(m, "ClubId"))
                w.uint32(96).int32(m.ClubId);
            return w;
        };

        SCReturnRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCReturnRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.RoomId = r.int32();
                    break;
                case 3:
                    m.GameId = r.int32();
                    break;
                case 4:
                    m.ModeType = r.int32();
                    break;
                case 5:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                case 6:
                    m.HallId = r.int32();
                    break;
                case 7:
                    m.MinApkVer = r.int32();
                    break;
                case 8:
                    m.LatestApkVer = r.int32();
                    break;
                case 9:
                    m.MinResVer = r.int32();
                    break;
                case 10:
                    m.LatestResVer = r.int32();
                    break;
                case 11:
                    m.IsLoaded = r.bool();
                    break;
                case 12:
                    m.ClubId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCReturnRoom;
    })();

    gamehall.CSGetGameRec = (function() {

        function CSGetGameRec(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetGameRec.prototype.Ver = 0;
        CSGetGameRec.prototype.GameId = 0;

        CSGetGameRec.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ver != null && Object.hasOwnProperty.call(m, "Ver"))
                w.uint32(8).int32(m.Ver);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(16).int32(m.GameId);
            return w;
        };

        CSGetGameRec.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSGetGameRec();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Ver = r.int32();
                    break;
                case 2:
                    m.GameId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetGameRec;
    })();

    gamehall.PlayerGameRec = (function() {

        function PlayerGameRec(p) {
            this.OtherParams = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerGameRec.prototype.Id = 0;
        PlayerGameRec.prototype.Name = "";
        PlayerGameRec.prototype.Head = 0;
        PlayerGameRec.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerGameRec.prototype.Pos = 0;
        PlayerGameRec.prototype.OtherParams = $util.emptyArray;

        PlayerGameRec.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Head != null && Object.hasOwnProperty.call(m, "Head"))
                w.uint32(24).int32(m.Head);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(32).int64(m.Coin);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(40).int32(m.Pos);
            if (m.OtherParams != null && m.OtherParams.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.OtherParams.length; ++i)
                    w.int32(m.OtherParams[i]);
                w.ldelim();
            }
            return w;
        };

        PlayerGameRec.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.PlayerGameRec();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Head = r.int32();
                    break;
                case 4:
                    m.Coin = r.int64();
                    break;
                case 5:
                    m.Pos = r.int32();
                    break;
                case 6:
                    if (!(m.OtherParams && m.OtherParams.length))
                        m.OtherParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OtherParams.push(r.int32());
                    } else
                        m.OtherParams.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerGameRec;
    })();

    gamehall.GameRec = (function() {

        function GameRec(p) {
            this.Datas = [];
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameRec.prototype.RecId = 0;
        GameRec.prototype.Datas = $util.emptyArray;
        GameRec.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameRec.prototype.RoomId = 0;
        GameRec.prototype.GameMode = 0;
        GameRec.prototype.SceneType = 0;
        GameRec.prototype.GameId = 0;
        GameRec.prototype.TotalOfGames = 0;
        GameRec.prototype.NumOfGames = 0;
        GameRec.prototype.RoomFeeMode = 0;
        GameRec.prototype.RoomCardCnt = 0;
        GameRec.prototype.Params = $util.emptyArray;
        GameRec.prototype.GameTime = 0;

        GameRec.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RecId != null && Object.hasOwnProperty.call(m, "RecId"))
                w.uint32(8).int32(m.RecId);
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.gamehall.PlayerGameRec.encode(m.Datas[i], w.uint32(18).fork()).ldelim();
            }
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(24).int64(m.Ts);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(32).int32(m.RoomId);
            if (m.GameMode != null && Object.hasOwnProperty.call(m, "GameMode"))
                w.uint32(40).int32(m.GameMode);
            if (m.SceneType != null && Object.hasOwnProperty.call(m, "SceneType"))
                w.uint32(48).int32(m.SceneType);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(56).int32(m.GameId);
            if (m.TotalOfGames != null && Object.hasOwnProperty.call(m, "TotalOfGames"))
                w.uint32(64).int32(m.TotalOfGames);
            if (m.NumOfGames != null && Object.hasOwnProperty.call(m, "NumOfGames"))
                w.uint32(72).int32(m.NumOfGames);
            if (m.RoomFeeMode != null && Object.hasOwnProperty.call(m, "RoomFeeMode"))
                w.uint32(80).int32(m.RoomFeeMode);
            if (m.RoomCardCnt != null && Object.hasOwnProperty.call(m, "RoomCardCnt"))
                w.uint32(88).int32(m.RoomCardCnt);
            if (m.Params != null && m.Params.length) {
                w.uint32(98).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            if (m.GameTime != null && Object.hasOwnProperty.call(m, "GameTime"))
                w.uint32(104).int32(m.GameTime);
            return w;
        };

        GameRec.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.GameRec();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RecId = r.int32();
                    break;
                case 2:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.gamehall.PlayerGameRec.decode(r, r.uint32()));
                    break;
                case 3:
                    m.Ts = r.int64();
                    break;
                case 4:
                    m.RoomId = r.int32();
                    break;
                case 5:
                    m.GameMode = r.int32();
                    break;
                case 6:
                    m.SceneType = r.int32();
                    break;
                case 7:
                    m.GameId = r.int32();
                    break;
                case 8:
                    m.TotalOfGames = r.int32();
                    break;
                case 9:
                    m.NumOfGames = r.int32();
                    break;
                case 10:
                    m.RoomFeeMode = r.int32();
                    break;
                case 11:
                    m.RoomCardCnt = r.int32();
                    break;
                case 12:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                case 13:
                    m.GameTime = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameRec;
    })();

    gamehall.SCGetGameRec = (function() {

        function SCGetGameRec(p) {
            this.Recs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetGameRec.prototype.Recs = $util.emptyArray;
        SCGetGameRec.prototype.Ver = 0;
        SCGetGameRec.prototype.GameId = 0;

        SCGetGameRec.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Recs != null && m.Recs.length) {
                for (var i = 0; i < m.Recs.length; ++i)
                    $root.gamehall.GameRec.encode(m.Recs[i], w.uint32(10).fork()).ldelim();
            }
            if (m.Ver != null && Object.hasOwnProperty.call(m, "Ver"))
                w.uint32(16).int32(m.Ver);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(24).int32(m.GameId);
            return w;
        };

        SCGetGameRec.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCGetGameRec();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Recs && m.Recs.length))
                        m.Recs = [];
                    m.Recs.push($root.gamehall.GameRec.decode(r, r.uint32()));
                    break;
                case 2:
                    m.Ver = r.int32();
                    break;
                case 3:
                    m.GameId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetGameRec;
    })();

    gamehall.CSShareSuc = (function() {

        function CSShareSuc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSShareSuc.prototype.ShareType = 0;

        CSShareSuc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShareType != null && Object.hasOwnProperty.call(m, "ShareType"))
                w.uint32(8).int32(m.ShareType);
            return w;
        };

        CSShareSuc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSShareSuc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShareType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSShareSuc;
    })();

    gamehall.SCShareSuc = (function() {

        function SCShareSuc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCShareSuc.prototype.OpRetCode = 0;

        SCShareSuc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCShareSuc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCShareSuc();
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

        return SCShareSuc;
    })();

    gamehall.CSForceStart = (function() {

        function CSForceStart(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSForceStart.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSForceStart.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSForceStart();
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

        return CSForceStart;
    })();

    gamehall.SCForceStart = (function() {

        function SCForceStart(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCForceStart.prototype.OpRetCode = 0;

        SCForceStart.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCForceStart.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCForceStart();
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

        return SCForceStart;
    })();

    gamehall.CSInviteRobot = (function() {

        function CSInviteRobot(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSInviteRobot.prototype.GameId = 0;
        CSInviteRobot.prototype.IsAgent = false;

        CSInviteRobot.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.IsAgent != null && Object.hasOwnProperty.call(m, "IsAgent"))
                w.uint32(16).bool(m.IsAgent);
            return w;
        };

        CSInviteRobot.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSInviteRobot();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.IsAgent = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSInviteRobot;
    })();

    gamehall.CSPlayerSwithFlag = (function() {

        function CSPlayerSwithFlag(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPlayerSwithFlag.prototype.Flag = 0;
        CSPlayerSwithFlag.prototype.Mark = 0;

        CSPlayerSwithFlag.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Flag != null && Object.hasOwnProperty.call(m, "Flag"))
                w.uint32(8).int32(m.Flag);
            if (m.Mark != null && Object.hasOwnProperty.call(m, "Mark"))
                w.uint32(16).int32(m.Mark);
            return w;
        };

        CSPlayerSwithFlag.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSPlayerSwithFlag();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Flag = r.int32();
                    break;
                case 2:
                    m.Mark = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPlayerSwithFlag;
    })();

    gamehall.CSShopBuy = (function() {

        function CSShopBuy(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSShopBuy.prototype.Id = 0;
        CSShopBuy.prototype.Count = 0;

        CSShopBuy.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(16).int32(m.Count);
            return w;
        };

        CSShopBuy.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSShopBuy();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Count = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSShopBuy;
    })();

    gamehall.SCShopBuy = (function() {

        function SCShopBuy(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCShopBuy.prototype.Id = 0;
        SCShopBuy.prototype.OpRetCode = 0;
        SCShopBuy.prototype.CostType = 0;
        SCShopBuy.prototype.CostNum = 0;
        SCShopBuy.prototype.GainType = 0;
        SCShopBuy.prototype.GainNum = 0;

        SCShopBuy.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(16).int32(m.OpRetCode);
            if (m.CostType != null && Object.hasOwnProperty.call(m, "CostType"))
                w.uint32(24).int32(m.CostType);
            if (m.CostNum != null && Object.hasOwnProperty.call(m, "CostNum"))
                w.uint32(32).int32(m.CostNum);
            if (m.GainType != null && Object.hasOwnProperty.call(m, "GainType"))
                w.uint32(40).int32(m.GainType);
            if (m.GainNum != null && Object.hasOwnProperty.call(m, "GainNum"))
                w.uint32(48).int32(m.GainNum);
            return w;
        };

        SCShopBuy.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCShopBuy();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.OpRetCode = r.int32();
                    break;
                case 3:
                    m.CostType = r.int32();
                    break;
                case 4:
                    m.CostNum = r.int32();
                    break;
                case 5:
                    m.GainType = r.int32();
                    break;
                case 6:
                    m.GainNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCShopBuy;
    })();

    gamehall.CSJoinGame = (function() {

        function CSJoinGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSJoinGame.prototype.MsgType = 0;
        CSJoinGame.prototype.SnId = 0;
        CSJoinGame.prototype.Pos = 0;
        CSJoinGame.prototype.Agree = false;

        CSJoinGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MsgType != null && Object.hasOwnProperty.call(m, "MsgType"))
                w.uint32(8).int32(m.MsgType);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(16).int32(m.SnId);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(24).int32(m.Pos);
            if (m.Agree != null && Object.hasOwnProperty.call(m, "Agree"))
                w.uint32(32).bool(m.Agree);
            return w;
        };

        CSJoinGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSJoinGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.MsgType = r.int32();
                    break;
                case 2:
                    m.SnId = r.int32();
                    break;
                case 3:
                    m.Pos = r.int32();
                    break;
                case 4:
                    m.Agree = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSJoinGame;
    })();

    gamehall.SCJoinGame = (function() {

        function SCJoinGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCJoinGame.prototype.MsgType = 0;
        SCJoinGame.prototype.Name = "";
        SCJoinGame.prototype.SnId = 0;
        SCJoinGame.prototype.OpRetCode = 0;

        SCJoinGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.MsgType != null && Object.hasOwnProperty.call(m, "MsgType"))
                w.uint32(8).int32(m.MsgType);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(24).int32(m.SnId);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(32).int32(m.OpRetCode);
            return w;
        };

        SCJoinGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCJoinGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.MsgType = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.SnId = r.int32();
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

        return SCJoinGame;
    })();

    gamehall.CSEnterDgGame = (function() {

        function CSEnterDgGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSEnterDgGame.prototype.LoginType = 0;
        CSEnterDgGame.prototype.DgGameId = 0;
        CSEnterDgGame.prototype.Domains = "";

        CSEnterDgGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LoginType != null && Object.hasOwnProperty.call(m, "LoginType"))
                w.uint32(8).int32(m.LoginType);
            if (m.DgGameId != null && Object.hasOwnProperty.call(m, "DgGameId"))
                w.uint32(16).int32(m.DgGameId);
            if (m.Domains != null && Object.hasOwnProperty.call(m, "Domains"))
                w.uint32(26).string(m.Domains);
            return w;
        };

        CSEnterDgGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSEnterDgGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LoginType = r.int32();
                    break;
                case 2:
                    m.DgGameId = r.int32();
                    break;
                case 3:
                    m.Domains = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSEnterDgGame;
    })();

    gamehall.SCEnterDgGame = (function() {

        function SCEnterDgGame(p) {
            this.List = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCEnterDgGame.prototype.OpRetCode = 0;
        SCEnterDgGame.prototype.LoginUrl = "";
        SCEnterDgGame.prototype.Token = "";
        SCEnterDgGame.prototype.DgGameId = 0;
        SCEnterDgGame.prototype.CodeId = 0;
        SCEnterDgGame.prototype.Domains = "";
        SCEnterDgGame.prototype.List = $util.emptyArray;

        SCEnterDgGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.LoginUrl != null && Object.hasOwnProperty.call(m, "LoginUrl"))
                w.uint32(18).string(m.LoginUrl);
            if (m.Token != null && Object.hasOwnProperty.call(m, "Token"))
                w.uint32(26).string(m.Token);
            if (m.DgGameId != null && Object.hasOwnProperty.call(m, "DgGameId"))
                w.uint32(32).int32(m.DgGameId);
            if (m.CodeId != null && Object.hasOwnProperty.call(m, "CodeId"))
                w.uint32(40).int32(m.CodeId);
            if (m.Domains != null && Object.hasOwnProperty.call(m, "Domains"))
                w.uint32(50).string(m.Domains);
            if (m.List != null && m.List.length) {
                for (var i = 0; i < m.List.length; ++i)
                    w.uint32(58).string(m.List[i]);
            }
            return w;
        };

        SCEnterDgGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCEnterDgGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.LoginUrl = r.string();
                    break;
                case 3:
                    m.Token = r.string();
                    break;
                case 4:
                    m.DgGameId = r.int32();
                    break;
                case 5:
                    m.CodeId = r.int32();
                    break;
                case 6:
                    m.Domains = r.string();
                    break;
                case 7:
                    if (!(m.List && m.List.length))
                        m.List = [];
                    m.List.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCEnterDgGame;
    })();

    gamehall.CSLeaveDgGame = (function() {

        function CSLeaveDgGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSLeaveDgGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSLeaveDgGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSLeaveDgGame();
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

        return CSLeaveDgGame;
    })();

    gamehall.SCLeaveDgGame = (function() {

        function SCLeaveDgGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLeaveDgGame.prototype.OpRetCode = 0;

        SCLeaveDgGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCLeaveDgGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCLeaveDgGame();
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

        return SCLeaveDgGame;
    })();

    gamehall.CSThridAccountStatistic = (function() {

        function CSThridAccountStatistic(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSThridAccountStatistic.prototype.ReqId = 0;

        CSThridAccountStatistic.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ReqId != null && Object.hasOwnProperty.call(m, "ReqId"))
                w.uint32(8).int32(m.ReqId);
            return w;
        };

        CSThridAccountStatistic.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSThridAccountStatistic();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ReqId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSThridAccountStatistic;
    })();

    gamehall.ThridAccount = (function() {

        function ThridAccount(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ThridAccount.prototype.ThridPlatformId = 0;
        ThridAccount.prototype.Name = "";
        ThridAccount.prototype.Status = 0;
        ThridAccount.prototype.Balance = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ThridAccount.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ThridPlatformId != null && Object.hasOwnProperty.call(m, "ThridPlatformId"))
                w.uint32(8).int32(m.ThridPlatformId);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Status != null && Object.hasOwnProperty.call(m, "Status"))
                w.uint32(24).int32(m.Status);
            if (m.Balance != null && Object.hasOwnProperty.call(m, "Balance"))
                w.uint32(32).int64(m.Balance);
            return w;
        };

        ThridAccount.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.ThridAccount();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ThridPlatformId = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Status = r.int32();
                    break;
                case 4:
                    m.Balance = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ThridAccount;
    })();

    gamehall.SCThridAccountStatistic = (function() {

        function SCThridAccountStatistic(p) {
            this.Accounts = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCThridAccountStatistic.prototype.ReqId = 0;
        SCThridAccountStatistic.prototype.Accounts = $util.emptyArray;

        SCThridAccountStatistic.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ReqId != null && Object.hasOwnProperty.call(m, "ReqId"))
                w.uint32(8).int32(m.ReqId);
            if (m.Accounts != null && m.Accounts.length) {
                for (var i = 0; i < m.Accounts.length; ++i)
                    $root.gamehall.ThridAccount.encode(m.Accounts[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCThridAccountStatistic.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCThridAccountStatistic();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ReqId = r.int32();
                    break;
                case 2:
                    if (!(m.Accounts && m.Accounts.length))
                        m.Accounts = [];
                    m.Accounts.push($root.gamehall.ThridAccount.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCThridAccountStatistic;
    })();

    gamehall.CSThridAccountTransfer = (function() {

        function CSThridAccountTransfer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSThridAccountTransfer.prototype.FromId = 0;
        CSThridAccountTransfer.prototype.ToId = 0;
        CSThridAccountTransfer.prototype.Amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CSThridAccountTransfer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FromId != null && Object.hasOwnProperty.call(m, "FromId"))
                w.uint32(8).int32(m.FromId);
            if (m.ToId != null && Object.hasOwnProperty.call(m, "ToId"))
                w.uint32(16).int32(m.ToId);
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(24).int64(m.Amount);
            return w;
        };

        CSThridAccountTransfer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSThridAccountTransfer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.FromId = r.int32();
                    break;
                case 2:
                    m.ToId = r.int32();
                    break;
                case 3:
                    m.Amount = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSThridAccountTransfer;
    })();

    gamehall.SCThridAccountTransfer = (function() {

        function SCThridAccountTransfer(p) {
            this.Accounts = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCThridAccountTransfer.prototype.OpRetCode = 0;
        SCThridAccountTransfer.prototype.Accounts = $util.emptyArray;

        SCThridAccountTransfer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Accounts != null && m.Accounts.length) {
                for (var i = 0; i < m.Accounts.length; ++i)
                    $root.gamehall.ThridAccount.encode(m.Accounts[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCThridAccountTransfer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCThridAccountTransfer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    if (!(m.Accounts && m.Accounts.length))
                        m.Accounts = [];
                    m.Accounts.push($root.gamehall.ThridAccount.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCThridAccountTransfer;
    })();

    gamehall.CSEnterThridGame = (function() {

        function CSEnterThridGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSEnterThridGame.prototype.ThridGameId = 0;

        CSEnterThridGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ThridGameId != null && Object.hasOwnProperty.call(m, "ThridGameId"))
                w.uint32(16).int32(m.ThridGameId);
            return w;
        };

        CSEnterThridGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSEnterThridGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 2:
                    m.ThridGameId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSEnterThridGame;
    })();

    gamehall.SCEnterThridGame = (function() {

        function SCEnterThridGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCEnterThridGame.prototype.OpRetCode = 0;
        SCEnterThridGame.prototype.EnterUrl = "";
        SCEnterThridGame.prototype.ScreenOrientationType = 0;
        SCEnterThridGame.prototype.ThridGameId = 0;

        SCEnterThridGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.EnterUrl != null && Object.hasOwnProperty.call(m, "EnterUrl"))
                w.uint32(18).string(m.EnterUrl);
            if (m.ScreenOrientationType != null && Object.hasOwnProperty.call(m, "ScreenOrientationType"))
                w.uint32(24).int32(m.ScreenOrientationType);
            if (m.ThridGameId != null && Object.hasOwnProperty.call(m, "ThridGameId"))
                w.uint32(32).int32(m.ThridGameId);
            return w;
        };

        SCEnterThridGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCEnterThridGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.EnterUrl = r.string();
                    break;
                case 3:
                    m.ScreenOrientationType = r.int32();
                    break;
                case 4:
                    m.ThridGameId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCEnterThridGame;
    })();

    gamehall.CSLeaveThridGame = (function() {

        function CSLeaveThridGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSLeaveThridGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSLeaveThridGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSLeaveThridGame();
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

        return CSLeaveThridGame;
    })();

    gamehall.SCLeaveThridGame = (function() {

        function SCLeaveThridGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLeaveThridGame.prototype.OpRetCode = 0;

        SCLeaveThridGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCLeaveThridGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCLeaveThridGame();
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

        return SCLeaveThridGame;
    })();

    gamehall.CSThridGameList = (function() {

        function CSThridGameList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSThridGameList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSThridGameList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSThridGameList();
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

        return CSThridGameList;
    })();

    gamehall.ThridGameDatas = (function() {

        function ThridGameDatas(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ThridGameDatas.prototype.ThridGameId = "";
        ThridGameDatas.prototype.ThridGameName = "";

        ThridGameDatas.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ThridGameId != null && Object.hasOwnProperty.call(m, "ThridGameId"))
                w.uint32(10).string(m.ThridGameId);
            if (m.ThridGameName != null && Object.hasOwnProperty.call(m, "ThridGameName"))
                w.uint32(18).string(m.ThridGameName);
            return w;
        };

        ThridGameDatas.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.ThridGameDatas();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ThridGameId = r.string();
                    break;
                case 2:
                    m.ThridGameName = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ThridGameDatas;
    })();

    gamehall.ThridGamePlatforms = (function() {

        function ThridGamePlatforms(p) {
            this.GameDatas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ThridGamePlatforms.prototype.ThridPlatformId = 0;
        ThridGamePlatforms.prototype.ThridPlatformName = "";
        ThridGamePlatforms.prototype.GameDatas = $util.emptyArray;

        ThridGamePlatforms.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ThridPlatformId != null && Object.hasOwnProperty.call(m, "ThridPlatformId"))
                w.uint32(8).int32(m.ThridPlatformId);
            if (m.ThridPlatformName != null && Object.hasOwnProperty.call(m, "ThridPlatformName"))
                w.uint32(18).string(m.ThridPlatformName);
            if (m.GameDatas != null && m.GameDatas.length) {
                for (var i = 0; i < m.GameDatas.length; ++i)
                    $root.gamehall.ThridGameDatas.encode(m.GameDatas[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        ThridGamePlatforms.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.ThridGamePlatforms();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ThridPlatformId = r.int32();
                    break;
                case 2:
                    m.ThridPlatformName = r.string();
                    break;
                case 3:
                    if (!(m.GameDatas && m.GameDatas.length))
                        m.GameDatas = [];
                    m.GameDatas.push($root.gamehall.ThridGameDatas.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ThridGamePlatforms;
    })();

    gamehall.SCThridGameList = (function() {

        function SCThridGameList(p) {
            this.GamePlatforms = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCThridGameList.prototype.OpRetCode = 0;
        SCThridGameList.prototype.GamePlatforms = $util.emptyArray;

        SCThridGameList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.GamePlatforms != null && m.GamePlatforms.length) {
                for (var i = 0; i < m.GamePlatforms.length; ++i)
                    $root.gamehall.ThridGamePlatforms.encode(m.GamePlatforms[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCThridGameList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCThridGameList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    if (!(m.GamePlatforms && m.GamePlatforms.length))
                        m.GamePlatforms = [];
                    m.GamePlatforms.push($root.gamehall.ThridGamePlatforms.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCThridGameList;
    })();

    gamehall.CSThridGameBalanceUpdate = (function() {

        function CSThridGameBalanceUpdate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSThridGameBalanceUpdate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSThridGameBalanceUpdate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSThridGameBalanceUpdate();
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

        return CSThridGameBalanceUpdate;
    })();

    gamehall.SCThridGameBalanceUpdate = (function() {

        function SCThridGameBalanceUpdate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCThridGameBalanceUpdate.prototype.OpRetCode = 0;
        SCThridGameBalanceUpdate.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCThridGameBalanceUpdate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int64(m.Coin);
            return w;
        };

        SCThridGameBalanceUpdate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCThridGameBalanceUpdate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Coin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCThridGameBalanceUpdate;
    })();

    gamehall.SCThridGameBalanceUpdateState = (function() {

        function SCThridGameBalanceUpdateState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCThridGameBalanceUpdateState.prototype.OpRetCode = 0;

        SCThridGameBalanceUpdateState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            return w;
        };

        SCThridGameBalanceUpdateState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCThridGameBalanceUpdateState();
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

        return SCThridGameBalanceUpdateState;
    })();

    gamehall.CSCreatePrivateRoom = (function() {

        function CSCreatePrivateRoom(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCreatePrivateRoom.prototype.GameFreeId = 0;
        CSCreatePrivateRoom.prototype.Params = $util.emptyArray;

        CSCreatePrivateRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.Params != null && m.Params.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            return w;
        };

        CSCreatePrivateRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSCreatePrivateRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSCreatePrivateRoom;
    })();

    gamehall.SCCreatePrivateRoom = (function() {

        function SCCreatePrivateRoom(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCreatePrivateRoom.prototype.GameFreeId = 0;
        SCCreatePrivateRoom.prototype.Params = $util.emptyArray;
        SCCreatePrivateRoom.prototype.RoomId = 0;
        SCCreatePrivateRoom.prototype.OpRetCode = 0;

        SCCreatePrivateRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.Params != null && m.Params.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(24).int32(m.RoomId);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(32).int32(m.OpRetCode);
            return w;
        };

        SCCreatePrivateRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCCreatePrivateRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                case 3:
                    m.RoomId = r.int32();
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

        return SCCreatePrivateRoom;
    })();

    gamehall.PrivateRoomInfo = (function() {

        function PrivateRoomInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PrivateRoomInfo.prototype.GameFreeId = 0;
        PrivateRoomInfo.prototype.RoomId = 0;
        PrivateRoomInfo.prototype.CurrRound = 0;
        PrivateRoomInfo.prototype.MaxRound = 0;
        PrivateRoomInfo.prototype.CurrNum = 0;
        PrivateRoomInfo.prototype.MaxPlayer = 0;
        PrivateRoomInfo.prototype.CreateTs = 0;

        PrivateRoomInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(16).int32(m.RoomId);
            if (m.CurrRound != null && Object.hasOwnProperty.call(m, "CurrRound"))
                w.uint32(24).int32(m.CurrRound);
            if (m.MaxRound != null && Object.hasOwnProperty.call(m, "MaxRound"))
                w.uint32(32).int32(m.MaxRound);
            if (m.CurrNum != null && Object.hasOwnProperty.call(m, "CurrNum"))
                w.uint32(40).int32(m.CurrNum);
            if (m.MaxPlayer != null && Object.hasOwnProperty.call(m, "MaxPlayer"))
                w.uint32(48).int32(m.MaxPlayer);
            if (m.CreateTs != null && Object.hasOwnProperty.call(m, "CreateTs"))
                w.uint32(56).int32(m.CreateTs);
            return w;
        };

        PrivateRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.PrivateRoomInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    m.RoomId = r.int32();
                    break;
                case 3:
                    m.CurrRound = r.int32();
                    break;
                case 4:
                    m.MaxRound = r.int32();
                    break;
                case 5:
                    m.CurrNum = r.int32();
                    break;
                case 6:
                    m.MaxPlayer = r.int32();
                    break;
                case 7:
                    m.CreateTs = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PrivateRoomInfo;
    })();

    gamehall.CSGetPrivateRoomList = (function() {

        function CSGetPrivateRoomList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetPrivateRoomList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSGetPrivateRoomList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSGetPrivateRoomList();
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

        return CSGetPrivateRoomList;
    })();

    gamehall.SCGetPrivateRoomList = (function() {

        function SCGetPrivateRoomList(p) {
            this.Datas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetPrivateRoomList.prototype.Datas = $util.emptyArray;

        SCGetPrivateRoomList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.gamehall.PrivateRoomInfo.encode(m.Datas[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCGetPrivateRoomList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCGetPrivateRoomList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.gamehall.PrivateRoomInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetPrivateRoomList;
    })();

    gamehall.CSGetPrivateRoomHistory = (function() {

        function CSGetPrivateRoomHistory(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetPrivateRoomHistory.prototype.QueryTime = 0;

        CSGetPrivateRoomHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.QueryTime != null && Object.hasOwnProperty.call(m, "QueryTime"))
                w.uint32(8).int32(m.QueryTime);
            return w;
        };

        CSGetPrivateRoomHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSGetPrivateRoomHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.QueryTime = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetPrivateRoomHistory;
    })();

    gamehall.PrivateRoomHistory = (function() {

        function PrivateRoomHistory(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PrivateRoomHistory.prototype.GameFreeId = 0;
        PrivateRoomHistory.prototype.RoomId = 0;
        PrivateRoomHistory.prototype.CreateTime = 0;
        PrivateRoomHistory.prototype.DestroyTime = 0;
        PrivateRoomHistory.prototype.CreateFee = 0;

        PrivateRoomHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(16).int32(m.RoomId);
            if (m.CreateTime != null && Object.hasOwnProperty.call(m, "CreateTime"))
                w.uint32(24).int32(m.CreateTime);
            if (m.DestroyTime != null && Object.hasOwnProperty.call(m, "DestroyTime"))
                w.uint32(32).int32(m.DestroyTime);
            if (m.CreateFee != null && Object.hasOwnProperty.call(m, "CreateFee"))
                w.uint32(40).int32(m.CreateFee);
            return w;
        };

        PrivateRoomHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.PrivateRoomHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    m.RoomId = r.int32();
                    break;
                case 3:
                    m.CreateTime = r.int32();
                    break;
                case 4:
                    m.DestroyTime = r.int32();
                    break;
                case 5:
                    m.CreateFee = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PrivateRoomHistory;
    })();

    gamehall.SCGetPrivateRoomHistory = (function() {

        function SCGetPrivateRoomHistory(p) {
            this.Datas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetPrivateRoomHistory.prototype.QueryTime = 0;
        SCGetPrivateRoomHistory.prototype.Datas = $util.emptyArray;

        SCGetPrivateRoomHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.QueryTime != null && Object.hasOwnProperty.call(m, "QueryTime"))
                w.uint32(8).int32(m.QueryTime);
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.gamehall.PrivateRoomHistory.encode(m.Datas[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCGetPrivateRoomHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCGetPrivateRoomHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.QueryTime = r.int32();
                    break;
                case 2:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.gamehall.PrivateRoomHistory.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetPrivateRoomHistory;
    })();

    gamehall.CSDestroyPrivateRoom = (function() {

        function CSDestroyPrivateRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSDestroyPrivateRoom.prototype.RoomId = 0;

        CSDestroyPrivateRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            return w;
        };

        CSDestroyPrivateRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSDestroyPrivateRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSDestroyPrivateRoom;
    })();

    gamehall.SCDestroyPrivateRoom = (function() {

        function SCDestroyPrivateRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCDestroyPrivateRoom.prototype.RoomId = 0;
        SCDestroyPrivateRoom.prototype.OpRetCode = 0;
        SCDestroyPrivateRoom.prototype.State = 0;

        SCDestroyPrivateRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(16).int32(m.OpRetCode);
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(24).int32(m.State);
            return w;
        };

        SCDestroyPrivateRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCDestroyPrivateRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.OpRetCode = r.int32();
                    break;
                case 3:
                    m.State = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCDestroyPrivateRoom;
    })();

    gamehall.CSQueryRoomInfo = (function() {

        function CSQueryRoomInfo(p) {
            this.GameIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSQueryRoomInfo.prototype.GameIds = $util.emptyArray;
        CSQueryRoomInfo.prototype.GameSite = 0;

        CSQueryRoomInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameIds != null && m.GameIds.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.GameIds.length; ++i)
                    w.int32(m.GameIds[i]);
                w.ldelim();
            }
            if (m.GameSite != null && Object.hasOwnProperty.call(m, "GameSite"))
                w.uint32(16).int32(m.GameSite);
            return w;
        };

        CSQueryRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSQueryRoomInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.GameIds && m.GameIds.length))
                        m.GameIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.GameIds.push(r.int32());
                    } else
                        m.GameIds.push(r.int32());
                    break;
                case 2:
                    m.GameSite = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSQueryRoomInfo;
    })();

    gamehall.QRoomInfo = (function() {

        function QRoomInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        QRoomInfo.prototype.GameFreeId = 0;
        QRoomInfo.prototype.GameId = 0;
        QRoomInfo.prototype.RoomId = 0;
        QRoomInfo.prototype.BaseCoin = 0;
        QRoomInfo.prototype.LimitCoin = 0;
        QRoomInfo.prototype.CurrNum = 0;
        QRoomInfo.prototype.MaxPlayer = 0;
        QRoomInfo.prototype.Creator = 0;
        QRoomInfo.prototype.CreateTs = 0;

        QRoomInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(16).int32(m.GameId);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(24).int32(m.RoomId);
            if (m.BaseCoin != null && Object.hasOwnProperty.call(m, "BaseCoin"))
                w.uint32(32).int32(m.BaseCoin);
            if (m.LimitCoin != null && Object.hasOwnProperty.call(m, "LimitCoin"))
                w.uint32(40).int32(m.LimitCoin);
            if (m.CurrNum != null && Object.hasOwnProperty.call(m, "CurrNum"))
                w.uint32(48).int32(m.CurrNum);
            if (m.MaxPlayer != null && Object.hasOwnProperty.call(m, "MaxPlayer"))
                w.uint32(56).int32(m.MaxPlayer);
            if (m.Creator != null && Object.hasOwnProperty.call(m, "Creator"))
                w.uint32(64).int32(m.Creator);
            if (m.CreateTs != null && Object.hasOwnProperty.call(m, "CreateTs"))
                w.uint32(72).int32(m.CreateTs);
            return w;
        };

        QRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.QRoomInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    m.GameId = r.int32();
                    break;
                case 3:
                    m.RoomId = r.int32();
                    break;
                case 4:
                    m.BaseCoin = r.int32();
                    break;
                case 5:
                    m.LimitCoin = r.int32();
                    break;
                case 6:
                    m.CurrNum = r.int32();
                    break;
                case 7:
                    m.MaxPlayer = r.int32();
                    break;
                case 8:
                    m.Creator = r.int32();
                    break;
                case 9:
                    m.CreateTs = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return QRoomInfo;
    })();

    gamehall.SCQueryRoomInfo = (function() {

        function SCQueryRoomInfo(p) {
            this.GameIds = [];
            this.RoomInfo = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCQueryRoomInfo.prototype.GameIds = $util.emptyArray;
        SCQueryRoomInfo.prototype.GameSite = 0;
        SCQueryRoomInfo.prototype.RoomInfo = $util.emptyArray;
        SCQueryRoomInfo.prototype.OpRetCode = 0;

        SCQueryRoomInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameIds != null && m.GameIds.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.GameIds.length; ++i)
                    w.int32(m.GameIds[i]);
                w.ldelim();
            }
            if (m.GameSite != null && Object.hasOwnProperty.call(m, "GameSite"))
                w.uint32(16).int32(m.GameSite);
            if (m.RoomInfo != null && m.RoomInfo.length) {
                for (var i = 0; i < m.RoomInfo.length; ++i)
                    $root.gamehall.QRoomInfo.encode(m.RoomInfo[i], w.uint32(26).fork()).ldelim();
            }
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(32).int32(m.OpRetCode);
            return w;
        };

        SCQueryRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCQueryRoomInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.GameIds && m.GameIds.length))
                        m.GameIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.GameIds.push(r.int32());
                    } else
                        m.GameIds.push(r.int32());
                    break;
                case 2:
                    m.GameSite = r.int32();
                    break;
                case 3:
                    if (!(m.RoomInfo && m.RoomInfo.length))
                        m.RoomInfo = [];
                    m.RoomInfo.push($root.gamehall.QRoomInfo.decode(r, r.uint32()));
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

        return SCQueryRoomInfo;
    })();

    gamehall.CSGameObserve = (function() {

        function CSGameObserve(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGameObserve.prototype.GameId = 0;
        CSGameObserve.prototype.StartOrEnd = false;

        CSGameObserve.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.StartOrEnd != null && Object.hasOwnProperty.call(m, "StartOrEnd"))
                w.uint32(16).bool(m.StartOrEnd);
            return w;
        };

        CSGameObserve.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSGameObserve();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.StartOrEnd = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGameObserve;
    })();

    gamehall.GameSubRecord = (function() {

        function GameSubRecord(p) {
            this.TotleLog = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameSubRecord.prototype.GameFreeId = 0;
        GameSubRecord.prototype.LogCnt = 0;
        GameSubRecord.prototype.NewLog = 0;
        GameSubRecord.prototype.TotleLog = $util.emptyArray;

        GameSubRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.LogCnt != null && Object.hasOwnProperty.call(m, "LogCnt"))
                w.uint32(16).int32(m.LogCnt);
            if (m.NewLog != null && Object.hasOwnProperty.call(m, "NewLog"))
                w.uint32(24).int32(m.NewLog);
            if (m.TotleLog != null && m.TotleLog.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.TotleLog.length; ++i)
                    w.int32(m.TotleLog[i]);
                w.ldelim();
            }
            return w;
        };

        GameSubRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.GameSubRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    m.LogCnt = r.int32();
                    break;
                case 3:
                    m.NewLog = r.int32();
                    break;
                case 4:
                    if (!(m.TotleLog && m.TotleLog.length))
                        m.TotleLog = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.TotleLog.push(r.int32());
                    } else
                        m.TotleLog.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameSubRecord;
    })();

    gamehall.SCGameSubList = (function() {

        function SCGameSubList(p) {
            this.List = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGameSubList.prototype.List = $util.emptyArray;

        SCGameSubList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.List != null && m.List.length) {
                for (var i = 0; i < m.List.length; ++i)
                    $root.gamehall.GameSubRecord.encode(m.List[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCGameSubList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCGameSubList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.List && m.List.length))
                        m.List = [];
                    m.List.push($root.gamehall.GameSubRecord.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGameSubList;
    })();

    gamehall.GameState = (function() {

        function GameState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameState.prototype.GameFreeId = 0;
        GameState.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameState.prototype.Sec = 0;

        GameState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(16).int64(m.Ts);
            if (m.Sec != null && Object.hasOwnProperty.call(m, "Sec"))
                w.uint32(24).int32(m.Sec);
            return w;
        };

        GameState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.GameState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    m.Ts = r.int64();
                    break;
                case 3:
                    m.Sec = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameState;
    })();

    gamehall.SCGameState = (function() {

        function SCGameState(p) {
            this.List = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGameState.prototype.List = $util.emptyArray;

        SCGameState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.List != null && m.List.length) {
                for (var i = 0; i < m.List.length; ++i)
                    $root.gamehall.GameState.encode(m.List[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCGameState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCGameState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.List && m.List.length))
                        m.List = [];
                    m.List.push($root.gamehall.GameState.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGameState;
    })();

    gamehall.LotteryData = (function() {

        function LotteryData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        LotteryData.prototype.GameFreeId = 0;
        LotteryData.prototype.Value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        LotteryData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.Value != null && Object.hasOwnProperty.call(m, "Value"))
                w.uint32(16).int64(m.Value);
            return w;
        };

        LotteryData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.LotteryData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    m.Value = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LotteryData;
    })();

    gamehall.SCLotterySync = (function() {

        function SCLotterySync(p) {
            this.Datas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLotterySync.prototype.Datas = $util.emptyArray;

        SCLotterySync.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.gamehall.LotteryData.encode(m.Datas[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCLotterySync.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCLotterySync();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.gamehall.LotteryData.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLotterySync;
    })();

    gamehall.CSLotteryLog = (function() {

        function CSLotteryLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSLotteryLog.prototype.GameFreeId = 0;

        CSLotteryLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            return w;
        };

        CSLotteryLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSLotteryLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSLotteryLog;
    })();

    gamehall.LotteryLog = (function() {

        function LotteryLog(p) {
            this.Card = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        LotteryLog.prototype.Time = 0;
        LotteryLog.prototype.NickName = "";
        LotteryLog.prototype.Card = $util.emptyArray;
        LotteryLog.prototype.Kind = 0;
        LotteryLog.prototype.Coin = 0;

        LotteryLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(8).int32(m.Time);
            if (m.NickName != null && Object.hasOwnProperty.call(m, "NickName"))
                w.uint32(18).string(m.NickName);
            if (m.Card != null && m.Card.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Card.length; ++i)
                    w.int32(m.Card[i]);
                w.ldelim();
            }
            if (m.Kind != null && Object.hasOwnProperty.call(m, "Kind"))
                w.uint32(32).int32(m.Kind);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(40).int32(m.Coin);
            return w;
        };

        LotteryLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.LotteryLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Time = r.int32();
                    break;
                case 2:
                    m.NickName = r.string();
                    break;
                case 3:
                    if (!(m.Card && m.Card.length))
                        m.Card = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Card.push(r.int32());
                    } else
                        m.Card.push(r.int32());
                    break;
                case 4:
                    m.Kind = r.int32();
                    break;
                case 5:
                    m.Coin = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return LotteryLog;
    })();

    gamehall.SCLotteryLog = (function() {

        function SCLotteryLog(p) {
            this.Logs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLotteryLog.prototype.GameFreeId = 0;
        SCLotteryLog.prototype.Logs = $util.emptyArray;

        SCLotteryLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.Logs != null && m.Logs.length) {
                for (var i = 0; i < m.Logs.length; ++i)
                    $root.gamehall.LotteryLog.encode(m.Logs[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCLotteryLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCLotteryLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    if (!(m.Logs && m.Logs.length))
                        m.Logs = [];
                    m.Logs.push($root.gamehall.LotteryLog.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLotteryLog;
    })();

    gamehall.SCLotteryBill = (function() {

        function SCLotteryBill(p) {
            this.Card = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCLotteryBill.prototype.GameFreeId = 0;
        SCLotteryBill.prototype.SnId = 0;
        SCLotteryBill.prototype.Name = "";
        SCLotteryBill.prototype.Kind = 0;
        SCLotteryBill.prototype.Card = $util.emptyArray;
        SCLotteryBill.prototype.Value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCLotteryBill.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(16).int32(m.SnId);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Kind != null && Object.hasOwnProperty.call(m, "Kind"))
                w.uint32(32).int32(m.Kind);
            if (m.Card != null && m.Card.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.Card.length; ++i)
                    w.int32(m.Card[i]);
                w.ldelim();
            }
            if (m.Value != null && Object.hasOwnProperty.call(m, "Value"))
                w.uint32(48).int64(m.Value);
            return w;
        };

        SCLotteryBill.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCLotteryBill();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    m.SnId = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.Kind = r.int32();
                    break;
                case 5:
                    if (!(m.Card && m.Card.length))
                        m.Card = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Card.push(r.int32());
                    } else
                        m.Card.push(r.int32());
                    break;
                case 6:
                    m.Value = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCLotteryBill;
    })();

    gamehall.GameConfig1 = (function() {

        function GameConfig1(p) {
            this.OtherIntParams = [];
            this.MaxBetCoin = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameConfig1.prototype.LogicId = 0;
        GameConfig1.prototype.LimitCoin = 0;
        GameConfig1.prototype.MaxCoinLimit = 0;
        GameConfig1.prototype.BaseScore = 0;
        GameConfig1.prototype.OtherIntParams = $util.emptyArray;
        GameConfig1.prototype.BetScore = 0;
        GameConfig1.prototype.MaxBetCoin = $util.emptyArray;
        GameConfig1.prototype.MatchMode = 0;
        GameConfig1.prototype.LotteryCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GameConfig1.prototype.LotteryCfg = "";
        GameConfig1.prototype.Status = false;

        GameConfig1.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.LogicId != null && Object.hasOwnProperty.call(m, "LogicId"))
                w.uint32(8).int32(m.LogicId);
            if (m.LimitCoin != null && Object.hasOwnProperty.call(m, "LimitCoin"))
                w.uint32(16).int32(m.LimitCoin);
            if (m.MaxCoinLimit != null && Object.hasOwnProperty.call(m, "MaxCoinLimit"))
                w.uint32(24).int32(m.MaxCoinLimit);
            if (m.BaseScore != null && Object.hasOwnProperty.call(m, "BaseScore"))
                w.uint32(32).int32(m.BaseScore);
            if (m.OtherIntParams != null && m.OtherIntParams.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.OtherIntParams.length; ++i)
                    w.int32(m.OtherIntParams[i]);
                w.ldelim();
            }
            if (m.BetScore != null && Object.hasOwnProperty.call(m, "BetScore"))
                w.uint32(48).int32(m.BetScore);
            if (m.MaxBetCoin != null && m.MaxBetCoin.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.MaxBetCoin.length; ++i)
                    w.int32(m.MaxBetCoin[i]);
                w.ldelim();
            }
            if (m.MatchMode != null && Object.hasOwnProperty.call(m, "MatchMode"))
                w.uint32(64).int32(m.MatchMode);
            if (m.LotteryCoin != null && Object.hasOwnProperty.call(m, "LotteryCoin"))
                w.uint32(72).int64(m.LotteryCoin);
            if (m.LotteryCfg != null && Object.hasOwnProperty.call(m, "LotteryCfg"))
                w.uint32(82).string(m.LotteryCfg);
            if (m.Status != null && Object.hasOwnProperty.call(m, "Status"))
                w.uint32(88).bool(m.Status);
            return w;
        };

        GameConfig1.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.GameConfig1();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.LogicId = r.int32();
                    break;
                case 2:
                    m.LimitCoin = r.int32();
                    break;
                case 3:
                    m.MaxCoinLimit = r.int32();
                    break;
                case 4:
                    m.BaseScore = r.int32();
                    break;
                case 5:
                    if (!(m.OtherIntParams && m.OtherIntParams.length))
                        m.OtherIntParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OtherIntParams.push(r.int32());
                    } else
                        m.OtherIntParams.push(r.int32());
                    break;
                case 6:
                    m.BetScore = r.int32();
                    break;
                case 7:
                    if (!(m.MaxBetCoin && m.MaxBetCoin.length))
                        m.MaxBetCoin = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MaxBetCoin.push(r.int32());
                    } else
                        m.MaxBetCoin.push(r.int32());
                    break;
                case 8:
                    m.MatchMode = r.int32();
                    break;
                case 9:
                    m.LotteryCoin = r.int64();
                    break;
                case 10:
                    m.LotteryCfg = r.string();
                    break;
                case 11:
                    m.Status = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameConfig1;
    })();

    gamehall.CSGetGameConfig = (function() {

        function CSGetGameConfig(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetGameConfig.prototype.Platform = "";
        CSGetGameConfig.prototype.Channel = "";
        CSGetGameConfig.prototype.GameId = 0;

        CSGetGameConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(10).string(m.Platform);
            if (m.Channel != null && Object.hasOwnProperty.call(m, "Channel"))
                w.uint32(18).string(m.Channel);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(24).int32(m.GameId);
            return w;
        };

        CSGetGameConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSGetGameConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Platform = r.string();
                    break;
                case 2:
                    m.Channel = r.string();
                    break;
                case 3:
                    m.GameId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetGameConfig;
    })();

    gamehall.SCGetGameConfig = (function() {

        function SCGetGameConfig(p) {
            this.GameCfg = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetGameConfig.prototype.GameCfg = $util.emptyArray;

        SCGetGameConfig.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameCfg != null && m.GameCfg.length) {
                for (var i = 0; i < m.GameCfg.length; ++i)
                    $root.gamehall.GameConfig1.encode(m.GameCfg[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCGetGameConfig.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCGetGameConfig();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.GameCfg && m.GameCfg.length))
                        m.GameCfg = [];
                    m.GameCfg.push($root.gamehall.GameConfig1.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetGameConfig;
    })();

    gamehall.SCChangeGameStatus = (function() {

        function SCChangeGameStatus(p) {
            this.GameCfg = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCChangeGameStatus.prototype.GameCfg = $util.emptyArray;

        SCChangeGameStatus.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameCfg != null && m.GameCfg.length) {
                for (var i = 0; i < m.GameCfg.length; ++i)
                    $root.gamehall.GameConfig1.encode(m.GameCfg[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCChangeGameStatus.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCChangeGameStatus();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.GameCfg && m.GameCfg.length))
                        m.GameCfg = [];
                    m.GameCfg.push($root.gamehall.GameConfig1.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCChangeGameStatus;
    })();

    gamehall.CSEnterGame = (function() {

        function CSEnterGame(p) {
            this.OpParams = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSEnterGame.prototype.Id = 0;
        CSEnterGame.prototype.OpParams = $util.emptyArray;
        CSEnterGame.prototype.Platform = "";
        CSEnterGame.prototype.ApkVer = 0;
        CSEnterGame.prototype.ResVer = 0;

        CSEnterGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.OpParams != null && m.OpParams.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.OpParams.length; ++i)
                    w.int32(m.OpParams[i]);
                w.ldelim();
            }
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(26).string(m.Platform);
            if (m.ApkVer != null && Object.hasOwnProperty.call(m, "ApkVer"))
                w.uint32(32).int32(m.ApkVer);
            if (m.ResVer != null && Object.hasOwnProperty.call(m, "ResVer"))
                w.uint32(40).int32(m.ResVer);
            return w;
        };

        CSEnterGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSEnterGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    if (!(m.OpParams && m.OpParams.length))
                        m.OpParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OpParams.push(r.int32());
                    } else
                        m.OpParams.push(r.int32());
                    break;
                case 3:
                    m.Platform = r.string();
                    break;
                case 4:
                    m.ApkVer = r.int32();
                    break;
                case 5:
                    m.ResVer = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSEnterGame;
    })();

    gamehall.SCEnterGame = (function() {

        function SCEnterGame(p) {
            this.OpParams = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCEnterGame.prototype.OpCode = 0;
        SCEnterGame.prototype.Id = 0;
        SCEnterGame.prototype.OpParams = $util.emptyArray;
        SCEnterGame.prototype.MinApkVer = 0;
        SCEnterGame.prototype.LatestApkVer = 0;
        SCEnterGame.prototype.MinResVer = 0;
        SCEnterGame.prototype.LatestResVer = 0;

        SCEnterGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(16).int32(m.Id);
            if (m.OpParams != null && m.OpParams.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.OpParams.length; ++i)
                    w.int32(m.OpParams[i]);
                w.ldelim();
            }
            if (m.MinApkVer != null && Object.hasOwnProperty.call(m, "MinApkVer"))
                w.uint32(32).int32(m.MinApkVer);
            if (m.LatestApkVer != null && Object.hasOwnProperty.call(m, "LatestApkVer"))
                w.uint32(40).int32(m.LatestApkVer);
            if (m.MinResVer != null && Object.hasOwnProperty.call(m, "MinResVer"))
                w.uint32(48).int32(m.MinResVer);
            if (m.LatestResVer != null && Object.hasOwnProperty.call(m, "LatestResVer"))
                w.uint32(56).int32(m.LatestResVer);
            return w;
        };

        SCEnterGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCEnterGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    m.Id = r.int32();
                    break;
                case 3:
                    if (!(m.OpParams && m.OpParams.length))
                        m.OpParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OpParams.push(r.int32());
                    } else
                        m.OpParams.push(r.int32());
                    break;
                case 4:
                    m.MinApkVer = r.int32();
                    break;
                case 5:
                    m.LatestApkVer = r.int32();
                    break;
                case 6:
                    m.MinResVer = r.int32();
                    break;
                case 7:
                    m.LatestResVer = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCEnterGame;
    })();

    gamehall.CSQuitGame = (function() {

        function CSQuitGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSQuitGame.prototype.Id = 0;
        CSQuitGame.prototype.IsAudience = false;

        CSQuitGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.IsAudience != null && Object.hasOwnProperty.call(m, "IsAudience"))
                w.uint32(16).bool(m.IsAudience);
            return w;
        };

        CSQuitGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSQuitGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.IsAudience = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSQuitGame;
    })();

    gamehall.SCQuitGame = (function() {

        function SCQuitGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCQuitGame.prototype.OpCode = 0;
        SCQuitGame.prototype.Id = 0;
        SCQuitGame.prototype.Reason = 0;

        SCQuitGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(16).int32(m.Id);
            if (m.Reason != null && Object.hasOwnProperty.call(m, "Reason"))
                w.uint32(24).int32(m.Reason);
            return w;
        };

        SCQuitGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCQuitGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    m.Id = r.int32();
                    break;
                case 3:
                    m.Reason = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCQuitGame;
    })();

    gamehall.CSUploadLoc = (function() {

        function CSUploadLoc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSUploadLoc.prototype.Longitude = 0;
        CSUploadLoc.prototype.Latitude = 0;
        CSUploadLoc.prototype.City = "";

        CSUploadLoc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Longitude != null && Object.hasOwnProperty.call(m, "Longitude"))
                w.uint32(8).int32(m.Longitude);
            if (m.Latitude != null && Object.hasOwnProperty.call(m, "Latitude"))
                w.uint32(16).int32(m.Latitude);
            if (m.City != null && Object.hasOwnProperty.call(m, "City"))
                w.uint32(26).string(m.City);
            return w;
        };

        CSUploadLoc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSUploadLoc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Longitude = r.int32();
                    break;
                case 2:
                    m.Latitude = r.int32();
                    break;
                case 3:
                    m.City = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSUploadLoc;
    })();

    gamehall.SCUploadLoc = (function() {

        function SCUploadLoc(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCUploadLoc.prototype.Pos = 0;
        SCUploadLoc.prototype.Longitude = 0;
        SCUploadLoc.prototype.Latitude = 0;
        SCUploadLoc.prototype.City = "";

        SCUploadLoc.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(8).int32(m.Pos);
            if (m.Longitude != null && Object.hasOwnProperty.call(m, "Longitude"))
                w.uint32(16).int32(m.Longitude);
            if (m.Latitude != null && Object.hasOwnProperty.call(m, "Latitude"))
                w.uint32(24).int32(m.Latitude);
            if (m.City != null && Object.hasOwnProperty.call(m, "City"))
                w.uint32(34).string(m.City);
            return w;
        };

        SCUploadLoc.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCUploadLoc();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Pos = r.int32();
                    break;
                case 2:
                    m.Longitude = r.int32();
                    break;
                case 3:
                    m.Latitude = r.int32();
                    break;
                case 4:
                    m.City = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCUploadLoc;
    })();

    gamehall.CSAudienceSit = (function() {

        function CSAudienceSit(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSAudienceSit.prototype.RoomId = 0;

        CSAudienceSit.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            return w;
        };

        CSAudienceSit.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSAudienceSit();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSAudienceSit;
    })();

    gamehall.SCAudienceSit = (function() {

        function SCAudienceSit(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCAudienceSit.prototype.RoomId = 0;
        SCAudienceSit.prototype.OpCode = 0;

        SCAudienceSit.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(16).int32(m.OpCode);
            return w;
        };

        SCAudienceSit.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCAudienceSit();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.OpCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCAudienceSit;
    })();

    gamehall.CSRecordAndNotice = (function() {

        function CSRecordAndNotice(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSRecordAndNotice.prototype.PageNo = 0;
        CSRecordAndNotice.prototype.PageSize = 0;
        CSRecordAndNotice.prototype.Opt = 0;
        CSRecordAndNotice.prototype.StartTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CSRecordAndNotice.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(8).int32(m.PageNo);
            if (m.PageSize != null && Object.hasOwnProperty.call(m, "PageSize"))
                w.uint32(16).int32(m.PageSize);
            if (m.Opt != null && Object.hasOwnProperty.call(m, "Opt"))
                w.uint32(24).int32(m.Opt);
            if (m.StartTime != null && Object.hasOwnProperty.call(m, "StartTime"))
                w.uint32(32).int64(m.StartTime);
            return w;
        };

        CSRecordAndNotice.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSRecordAndNotice();
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
                    m.Opt = r.int32();
                    break;
                case 4:
                    m.StartTime = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSRecordAndNotice;
    })();

    gamehall.CommonNotice = (function() {

        function CommonNotice(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CommonNotice.prototype.Sort = 0;
        CommonNotice.prototype.Title = "";
        CommonNotice.prototype.Content = "";
        CommonNotice.prototype.TypeName = "";
        CommonNotice.prototype.Type = 0;
        CommonNotice.prototype.StartTime = 0;
        CommonNotice.prototype.EndTime = 0;
        CommonNotice.prototype.Platform = "";

        CommonNotice.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Sort != null && Object.hasOwnProperty.call(m, "Sort"))
                w.uint32(8).int32(m.Sort);
            if (m.Title != null && Object.hasOwnProperty.call(m, "Title"))
                w.uint32(18).string(m.Title);
            if (m.Content != null && Object.hasOwnProperty.call(m, "Content"))
                w.uint32(26).string(m.Content);
            if (m.TypeName != null && Object.hasOwnProperty.call(m, "TypeName"))
                w.uint32(34).string(m.TypeName);
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(40).int32(m.Type);
            if (m.StartTime != null && Object.hasOwnProperty.call(m, "StartTime"))
                w.uint32(48).int32(m.StartTime);
            if (m.EndTime != null && Object.hasOwnProperty.call(m, "EndTime"))
                w.uint32(56).int32(m.EndTime);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(66).string(m.Platform);
            return w;
        };

        CommonNotice.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CommonNotice();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Sort = r.int32();
                    break;
                case 2:
                    m.Title = r.string();
                    break;
                case 3:
                    m.Content = r.string();
                    break;
                case 4:
                    m.TypeName = r.string();
                    break;
                case 5:
                    m.Type = r.int32();
                    break;
                case 6:
                    m.StartTime = r.int32();
                    break;
                case 7:
                    m.EndTime = r.int32();
                    break;
                case 8:
                    m.Platform = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CommonNotice;
    })();

    gamehall.PlayerRecord = (function() {

        function PlayerRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerRecord.prototype.GameFreeid = 0;
        PlayerRecord.prototype.GameDetailedLogId = "";
        PlayerRecord.prototype.TotalIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerRecord.prototype.TotalOut = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerRecord.prototype.Ts = 0;

        PlayerRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeid != null && Object.hasOwnProperty.call(m, "GameFreeid"))
                w.uint32(8).int32(m.GameFreeid);
            if (m.GameDetailedLogId != null && Object.hasOwnProperty.call(m, "GameDetailedLogId"))
                w.uint32(18).string(m.GameDetailedLogId);
            if (m.TotalIn != null && Object.hasOwnProperty.call(m, "TotalIn"))
                w.uint32(24).int64(m.TotalIn);
            if (m.TotalOut != null && Object.hasOwnProperty.call(m, "TotalOut"))
                w.uint32(32).int64(m.TotalOut);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(40).int32(m.Ts);
            return w;
        };

        PlayerRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.PlayerRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeid = r.int32();
                    break;
                case 2:
                    m.GameDetailedLogId = r.string();
                    break;
                case 3:
                    m.TotalIn = r.int64();
                    break;
                case 4:
                    m.TotalOut = r.int64();
                    break;
                case 5:
                    m.Ts = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerRecord;
    })();

    gamehall.SCRecordAndNotice = (function() {

        function SCRecordAndNotice(p) {
            this.List = [];
            this.Glist = [];
            this.GlistTs = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRecordAndNotice.prototype.OpCode = 0;
        SCRecordAndNotice.prototype.List = $util.emptyArray;
        SCRecordAndNotice.prototype.Glist = $util.emptyArray;
        SCRecordAndNotice.prototype.GlistTs = $util.emptyArray;

        SCRecordAndNotice.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.List != null && m.List.length) {
                for (var i = 0; i < m.List.length; ++i)
                    $root.gamehall.CommonNotice.encode(m.List[i], w.uint32(18).fork()).ldelim();
            }
            if (m.Glist != null && m.Glist.length) {
                for (var i = 0; i < m.Glist.length; ++i)
                    $root.gamehall.PlayerRecord.encode(m.Glist[i], w.uint32(26).fork()).ldelim();
            }
            if (m.GlistTs != null && m.GlistTs.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.GlistTs.length; ++i)
                    w.int64(m.GlistTs[i]);
                w.ldelim();
            }
            return w;
        };

        SCRecordAndNotice.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCRecordAndNotice();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    if (!(m.List && m.List.length))
                        m.List = [];
                    m.List.push($root.gamehall.CommonNotice.decode(r, r.uint32()));
                    break;
                case 3:
                    if (!(m.Glist && m.Glist.length))
                        m.Glist = [];
                    m.Glist.push($root.gamehall.PlayerRecord.decode(r, r.uint32()));
                    break;
                case 4:
                    if (!(m.GlistTs && m.GlistTs.length))
                        m.GlistTs = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.GlistTs.push(r.int64());
                    } else
                        m.GlistTs.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRecordAndNotice;
    })();

    gamehall.OpResultCode_Hall = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess_Hall"] = 0;
        values[valuesById[1] = "OPRC_Error_Hall"] = 1;
        values[valuesById[10008] = "OPRC_OnlineReward_Info_FindPlatform_Fail_Hall"] = 10008;
        return values;
    })();

    gamehall.HallPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_Hall_ZERO"] = 0;
        values[valuesById[2340] = "PACKET_CS_REBATE_LIST"] = 2340;
        values[valuesById[2341] = "PACKET_SC_REBATE_LIST"] = 2341;
        values[valuesById[2342] = "PACKET_CS_REBATE_RECEIVE"] = 2342;
        values[valuesById[2343] = "PACKET_SC_REBATE_RECEIVE"] = 2343;
        values[valuesById[2344] = "PACKET_SC_HALL_REDCTRL"] = 2344;
        values[valuesById[2345] = "PACKET_CS_NEWPLAYERINFO"] = 2345;
        values[valuesById[2346] = "PACKET_SC_NEWPLAYERINFO"] = 2346;
        values[valuesById[2347] = "PACKET_CS_CODETYPERECORD"] = 2347;
        values[valuesById[2348] = "PACKET_SC_CODETYPERECORD"] = 2348;
        values[valuesById[2349] = "PACKET_CS_BETCOINRECORD"] = 2349;
        values[valuesById[2350] = "PACKET_SC_BETCOINRECORD"] = 2350;
        values[valuesById[2351] = "PACKET_CS_COINDETAILED"] = 2351;
        values[valuesById[2352] = "PACKET_SC_COINDETAILEDTOTAL"] = 2352;
        values[valuesById[2353] = "PACKET_SC_COINTOTAL"] = 2353;
        values[valuesById[2354] = "PACKET_CS_REPORTFORM"] = 2354;
        values[valuesById[2355] = "PACKET_SC_REPORTFORM"] = 2355;
        values[valuesById[2356] = "PACKET_CS_HISTORYRECORD"] = 2356;
        values[valuesById[2357] = "PACKET_SC_HISTORYRECORD"] = 2357;
        values[valuesById[2358] = "PACKET_CS_RECEIVECODECOIN"] = 2358;
        values[valuesById[2359] = "PACKET_SC_RECEIVECODECOIN"] = 2359;
        values[valuesById[2360] = "PACKET_SC_REBATETOTALINFO"] = 2360;
        values[valuesById[2362] = "PACKET_CS_GETISCANREBATE"] = 2362;
        values[valuesById[2363] = "PACKET_SC_GETISCANREBATE"] = 2363;
        values[valuesById[2364] = "PACKET_CS_GETRANKINFO"] = 2364;
        values[valuesById[2365] = "PACKET_SC_GETRANKINFO"] = 2365;
        values[valuesById[2366] = "PACKET_SC_SHOWRED"] = 2366;
        return values;
    })();

    gamehall.RebateInfo = (function() {

        function RebateInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RebateInfo.prototype.Platform = "";
        RebateInfo.prototype.validBetTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        RebateInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(10).string(m.Platform);
            if (m.validBetTotal != null && Object.hasOwnProperty.call(m, "validBetTotal"))
                w.uint32(16).int64(m.validBetTotal);
            return w;
        };

        RebateInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.RebateInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Platform = r.string();
                    break;
                case 2:
                    m.validBetTotal = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RebateInfo;
    })();

    gamehall.CSRebateList = (function() {

        function CSRebateList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSRebateList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSRebateList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSRebateList();
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

        return CSRebateList;
    })();

    gamehall.SCRebateList = (function() {

        function SCRebateList(p) {
            this.RebateList = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRebateList.prototype.RebateList = $util.emptyArray;
        SCRebateList.prototype.RebateTotalCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCRebateList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RebateList != null && m.RebateList.length) {
                for (var i = 0; i < m.RebateList.length; ++i)
                    $root.gamehall.RebateInfo.encode(m.RebateList[i], w.uint32(10).fork()).ldelim();
            }
            if (m.RebateTotalCoin != null && Object.hasOwnProperty.call(m, "RebateTotalCoin"))
                w.uint32(16).int64(m.RebateTotalCoin);
            return w;
        };

        SCRebateList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCRebateList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.RebateList && m.RebateList.length))
                        m.RebateList = [];
                    m.RebateList.push($root.gamehall.RebateInfo.decode(r, r.uint32()));
                    break;
                case 2:
                    m.RebateTotalCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRebateList;
    })();

    gamehall.CSReceiveRebate = (function() {

        function CSReceiveRebate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSReceiveRebate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSReceiveRebate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSReceiveRebate();
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

        return CSReceiveRebate;
    })();

    gamehall.SCReceiveRebate = (function() {

        function SCReceiveRebate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCReceiveRebate.prototype.OpRetCode = 0;
        SCReceiveRebate.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCReceiveRebate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int64(m.Coin);
            return w;
        };

        SCReceiveRebate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCReceiveRebate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Coin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCReceiveRebate;
    })();

    gamehall.SCRedCtrl = (function() {

        function SCRedCtrl(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRedCtrl.prototype.OpCode = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRedCtrl.prototype.IsFShow = false;

        SCRedCtrl.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int64(m.OpCode);
            if (m.IsFShow != null && Object.hasOwnProperty.call(m, "IsFShow"))
                w.uint32(16).bool(m.IsFShow);
            return w;
        };

        SCRedCtrl.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCRedCtrl();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int64();
                    break;
                case 2:
                    m.IsFShow = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRedCtrl;
    })();

    gamehall.CSGetIsCanRebate = (function() {

        function CSGetIsCanRebate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetIsCanRebate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSGetIsCanRebate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSGetIsCanRebate();
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

        return CSGetIsCanRebate;
    })();

    gamehall.SCGetIsCanRebate = (function() {

        function SCGetIsCanRebate(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetIsCanRebate.prototype.OpRetCode = 0;
        SCGetIsCanRebate.prototype.IsCan = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCGetIsCanRebate.prototype.Url = "";
        SCGetIsCanRebate.prototype.WX = "";

        SCGetIsCanRebate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.IsCan != null && Object.hasOwnProperty.call(m, "IsCan"))
                w.uint32(16).int64(m.IsCan);
            if (m.Url != null && Object.hasOwnProperty.call(m, "Url"))
                w.uint32(26).string(m.Url);
            if (m.WX != null && Object.hasOwnProperty.call(m, "WX"))
                w.uint32(34).string(m.WX);
            return w;
        };

        SCGetIsCanRebate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCGetIsCanRebate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.IsCan = r.int64();
                    break;
                case 3:
                    m.Url = r.string();
                    break;
                case 4:
                    m.WX = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetIsCanRebate;
    })();

    gamehall.HallGameType = (function() {

        function HallGameType(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        HallGameType.prototype.GameId = 0;
        HallGameType.prototype.GameMode = 0;

        HallGameType.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.GameMode != null && Object.hasOwnProperty.call(m, "GameMode"))
                w.uint32(16).int32(m.GameMode);
            return w;
        };

        HallGameType.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.HallGameType();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.GameMode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return HallGameType;
    })();

    gamehall.HallOperaCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "HallOperaZero"] = 0;
        values[valuesById[1] = "HallChessGame"] = 1;
        values[valuesById[2] = "HallElectronicGame"] = 2;
        values[valuesById[3] = "HallFishingGame"] = 3;
        values[valuesById[4] = "HallLiveVideo"] = 4;
        values[valuesById[5] = "HallLotteryGame"] = 5;
        values[valuesById[6] = "HallSportsGame"] = 6;
        values[valuesById[7] = "HallPrivateRoom"] = 7;
        values[valuesById[8] = "HallClubRoom"] = 8;
        values[valuesById[101] = "HallThirdPlt"] = 101;
        return values;
    })();

    gamehall.CSNewPlayerInfo = (function() {

        function CSNewPlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSNewPlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSNewPlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSNewPlayerInfo();
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

        return CSNewPlayerInfo;
    })();

    gamehall.SCNewPlayerInfo = (function() {

        function SCNewPlayerInfo(p) {
            this.ClassType = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCNewPlayerInfo.prototype.GameTotalNum = 0;
        SCNewPlayerInfo.prototype.GameMostPartake = "";
        SCNewPlayerInfo.prototype.GameMostProfit = "";
        SCNewPlayerInfo.prototype.GameMostProfitNum = 0;
        SCNewPlayerInfo.prototype.CreateRoomNum = 0;
        SCNewPlayerInfo.prototype.CreateRoomMost = "";
        SCNewPlayerInfo.prototype.CreateClubNum = 0;
        SCNewPlayerInfo.prototype.CreateClubRoomMost = "";
        SCNewPlayerInfo.prototype.TeamNum = 0;
        SCNewPlayerInfo.prototype.AchievementTotal = 0;
        SCNewPlayerInfo.prototype.RewardTotal = 0;
        SCNewPlayerInfo.prototype.TotalCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCNewPlayerInfo.prototype.LastGetCoinTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCNewPlayerInfo.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCNewPlayerInfo.prototype.CodeType = 0;
        SCNewPlayerInfo.prototype.ClassType = $util.emptyArray;

        SCNewPlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameTotalNum != null && Object.hasOwnProperty.call(m, "GameTotalNum"))
                w.uint32(8).int32(m.GameTotalNum);
            if (m.GameMostPartake != null && Object.hasOwnProperty.call(m, "GameMostPartake"))
                w.uint32(18).string(m.GameMostPartake);
            if (m.GameMostProfit != null && Object.hasOwnProperty.call(m, "GameMostProfit"))
                w.uint32(26).string(m.GameMostProfit);
            if (m.GameMostProfitNum != null && Object.hasOwnProperty.call(m, "GameMostProfitNum"))
                w.uint32(32).int32(m.GameMostProfitNum);
            if (m.CreateRoomNum != null && Object.hasOwnProperty.call(m, "CreateRoomNum"))
                w.uint32(40).int32(m.CreateRoomNum);
            if (m.CreateRoomMost != null && Object.hasOwnProperty.call(m, "CreateRoomMost"))
                w.uint32(50).string(m.CreateRoomMost);
            if (m.CreateClubNum != null && Object.hasOwnProperty.call(m, "CreateClubNum"))
                w.uint32(56).int32(m.CreateClubNum);
            if (m.CreateClubRoomMost != null && Object.hasOwnProperty.call(m, "CreateClubRoomMost"))
                w.uint32(66).string(m.CreateClubRoomMost);
            if (m.TeamNum != null && Object.hasOwnProperty.call(m, "TeamNum"))
                w.uint32(72).int32(m.TeamNum);
            if (m.AchievementTotal != null && Object.hasOwnProperty.call(m, "AchievementTotal"))
                w.uint32(80).int32(m.AchievementTotal);
            if (m.RewardTotal != null && Object.hasOwnProperty.call(m, "RewardTotal"))
                w.uint32(88).int32(m.RewardTotal);
            if (m.TotalCoin != null && Object.hasOwnProperty.call(m, "TotalCoin"))
                w.uint32(96).int64(m.TotalCoin);
            if (m.LastGetCoinTime != null && Object.hasOwnProperty.call(m, "LastGetCoinTime"))
                w.uint32(104).int64(m.LastGetCoinTime);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(112).int64(m.Coin);
            if (m.CodeType != null && Object.hasOwnProperty.call(m, "CodeType"))
                w.uint32(120).int32(m.CodeType);
            if (m.ClassType != null && m.ClassType.length) {
                w.uint32(130).fork();
                for (var i = 0; i < m.ClassType.length; ++i)
                    w.int32(m.ClassType[i]);
                w.ldelim();
            }
            return w;
        };

        SCNewPlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCNewPlayerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameTotalNum = r.int32();
                    break;
                case 2:
                    m.GameMostPartake = r.string();
                    break;
                case 3:
                    m.GameMostProfit = r.string();
                    break;
                case 4:
                    m.GameMostProfitNum = r.int32();
                    break;
                case 5:
                    m.CreateRoomNum = r.int32();
                    break;
                case 6:
                    m.CreateRoomMost = r.string();
                    break;
                case 7:
                    m.CreateClubNum = r.int32();
                    break;
                case 8:
                    m.CreateClubRoomMost = r.string();
                    break;
                case 9:
                    m.TeamNum = r.int32();
                    break;
                case 10:
                    m.AchievementTotal = r.int32();
                    break;
                case 11:
                    m.RewardTotal = r.int32();
                    break;
                case 12:
                    m.TotalCoin = r.int64();
                    break;
                case 13:
                    m.LastGetCoinTime = r.int64();
                    break;
                case 14:
                    m.Coin = r.int64();
                    break;
                case 15:
                    m.CodeType = r.int32();
                    break;
                case 16:
                    if (!(m.ClassType && m.ClassType.length))
                        m.ClassType = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ClassType.push(r.int32());
                    } else
                        m.ClassType.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCNewPlayerInfo;
    })();

    gamehall.SCRebateTotalInfo = (function() {

        function SCRebateTotalInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRebateTotalInfo.prototype.TotalCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRebateTotalInfo.prototype.LastGetCoinTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRebateTotalInfo.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCRebateTotalInfo.prototype.CodeType = 0;

        SCRebateTotalInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TotalCoin != null && Object.hasOwnProperty.call(m, "TotalCoin"))
                w.uint32(8).int64(m.TotalCoin);
            if (m.LastGetCoinTime != null && Object.hasOwnProperty.call(m, "LastGetCoinTime"))
                w.uint32(16).int64(m.LastGetCoinTime);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(24).int64(m.Coin);
            if (m.CodeType != null && Object.hasOwnProperty.call(m, "CodeType"))
                w.uint32(32).int32(m.CodeType);
            return w;
        };

        SCRebateTotalInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCRebateTotalInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TotalCoin = r.int64();
                    break;
                case 2:
                    m.LastGetCoinTime = r.int64();
                    break;
                case 3:
                    m.Coin = r.int64();
                    break;
                case 4:
                    m.CodeType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRebateTotalInfo;
    })();

    gamehall.CSCodeTypeRecord = (function() {

        function CSCodeTypeRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCodeTypeRecord.prototype.ShowTypeId = 0;

        CSCodeTypeRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShowTypeId != null && Object.hasOwnProperty.call(m, "ShowTypeId"))
                w.uint32(8).int32(m.ShowTypeId);
            return w;
        };

        CSCodeTypeRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSCodeTypeRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShowTypeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSCodeTypeRecord;
    })();

    gamehall.CodeTypeRecord = (function() {

        function CodeTypeRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CodeTypeRecord.prototype.GameName = "";
        CodeTypeRecord.prototype.GameBetCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CodeTypeRecord.prototype.Rate = 0;
        CodeTypeRecord.prototype.Coin = 0;
        CodeTypeRecord.prototype.MinCoin = 0;
        CodeTypeRecord.prototype.MaxCoin = 0;

        CodeTypeRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameName != null && Object.hasOwnProperty.call(m, "GameName"))
                w.uint32(10).string(m.GameName);
            if (m.GameBetCoin != null && Object.hasOwnProperty.call(m, "GameBetCoin"))
                w.uint32(16).int64(m.GameBetCoin);
            if (m.Rate != null && Object.hasOwnProperty.call(m, "Rate"))
                w.uint32(24).int32(m.Rate);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(32).int32(m.Coin);
            if (m.MinCoin != null && Object.hasOwnProperty.call(m, "MinCoin"))
                w.uint32(40).int32(m.MinCoin);
            if (m.MaxCoin != null && Object.hasOwnProperty.call(m, "MaxCoin"))
                w.uint32(48).int32(m.MaxCoin);
            return w;
        };

        CodeTypeRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CodeTypeRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameName = r.string();
                    break;
                case 2:
                    m.GameBetCoin = r.int64();
                    break;
                case 3:
                    m.Rate = r.int32();
                    break;
                case 4:
                    m.Coin = r.int32();
                    break;
                case 5:
                    m.MinCoin = r.int32();
                    break;
                case 6:
                    m.MaxCoin = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CodeTypeRecord;
    })();

    gamehall.SCCodeTypeRecord = (function() {

        function SCCodeTypeRecord(p) {
            this.CodeTypeRecord = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCodeTypeRecord.prototype.ShowType = 0;
        SCCodeTypeRecord.prototype.CodeTypeRecord = $util.emptyArray;

        SCCodeTypeRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShowType != null && Object.hasOwnProperty.call(m, "ShowType"))
                w.uint32(8).int32(m.ShowType);
            if (m.CodeTypeRecord != null && m.CodeTypeRecord.length) {
                for (var i = 0; i < m.CodeTypeRecord.length; ++i)
                    $root.gamehall.CodeTypeRecord.encode(m.CodeTypeRecord[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCCodeTypeRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCCodeTypeRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShowType = r.int32();
                    break;
                case 2:
                    if (!(m.CodeTypeRecord && m.CodeTypeRecord.length))
                        m.CodeTypeRecord = [];
                    m.CodeTypeRecord.push($root.gamehall.CodeTypeRecord.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCodeTypeRecord;
    })();

    gamehall.CSBetCoinRecord = (function() {

        function CSBetCoinRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSBetCoinRecord.prototype.ShowTypeId = 0;
        CSBetCoinRecord.prototype.TimeIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CSBetCoinRecord.prototype.PageNo = 0;

        CSBetCoinRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShowTypeId != null && Object.hasOwnProperty.call(m, "ShowTypeId"))
                w.uint32(8).int32(m.ShowTypeId);
            if (m.TimeIndex != null && Object.hasOwnProperty.call(m, "TimeIndex"))
                w.uint32(16).int64(m.TimeIndex);
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(24).int32(m.PageNo);
            return w;
        };

        CSBetCoinRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSBetCoinRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShowTypeId = r.int32();
                    break;
                case 2:
                    m.TimeIndex = r.int64();
                    break;
                case 3:
                    m.PageNo = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSBetCoinRecord;
    })();

    gamehall.BetCoinRecord = (function() {

        function BetCoinRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        BetCoinRecord.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BetCoinRecord.prototype.GameName = "";
        BetCoinRecord.prototype.RecordId = "";
        BetCoinRecord.prototype.BetCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BetCoinRecord.prototype.ReceivedCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        BetCoinRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(8).int64(m.Ts);
            if (m.GameName != null && Object.hasOwnProperty.call(m, "GameName"))
                w.uint32(18).string(m.GameName);
            if (m.RecordId != null && Object.hasOwnProperty.call(m, "RecordId"))
                w.uint32(26).string(m.RecordId);
            if (m.BetCoin != null && Object.hasOwnProperty.call(m, "BetCoin"))
                w.uint32(32).int64(m.BetCoin);
            if (m.ReceivedCoin != null && Object.hasOwnProperty.call(m, "ReceivedCoin"))
                w.uint32(40).int64(m.ReceivedCoin);
            return w;
        };

        BetCoinRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.BetCoinRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Ts = r.int64();
                    break;
                case 2:
                    m.GameName = r.string();
                    break;
                case 3:
                    m.RecordId = r.string();
                    break;
                case 4:
                    m.BetCoin = r.int64();
                    break;
                case 5:
                    m.ReceivedCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return BetCoinRecord;
    })();

    gamehall.SCBetCoinRecord = (function() {

        function SCBetCoinRecord(p) {
            this.BetCoinRecord = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCBetCoinRecord.prototype.BetCoinRecord = $util.emptyArray;
        SCBetCoinRecord.prototype.PageNo = 0;
        SCBetCoinRecord.prototype.PageSize = 0;
        SCBetCoinRecord.prototype.PageNum = 0;

        SCBetCoinRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BetCoinRecord != null && m.BetCoinRecord.length) {
                for (var i = 0; i < m.BetCoinRecord.length; ++i)
                    $root.gamehall.BetCoinRecord.encode(m.BetCoinRecord[i], w.uint32(10).fork()).ldelim();
            }
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(16).int32(m.PageNo);
            if (m.PageSize != null && Object.hasOwnProperty.call(m, "PageSize"))
                w.uint32(24).int32(m.PageSize);
            if (m.PageNum != null && Object.hasOwnProperty.call(m, "PageNum"))
                w.uint32(32).int32(m.PageNum);
            return w;
        };

        SCBetCoinRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCBetCoinRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.BetCoinRecord && m.BetCoinRecord.length))
                        m.BetCoinRecord = [];
                    m.BetCoinRecord.push($root.gamehall.BetCoinRecord.decode(r, r.uint32()));
                    break;
                case 2:
                    m.PageNo = r.int32();
                    break;
                case 3:
                    m.PageSize = r.int32();
                    break;
                case 4:
                    m.PageNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCBetCoinRecord;
    })();

    gamehall.CSCoinDetailed = (function() {

        function CSCoinDetailed(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSCoinDetailed.prototype.TimeIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CSCoinDetailed.prototype.CoinType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CSCoinDetailed.prototype.PageNo = 0;

        CSCoinDetailed.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TimeIndex != null && Object.hasOwnProperty.call(m, "TimeIndex"))
                w.uint32(8).int64(m.TimeIndex);
            if (m.CoinType != null && Object.hasOwnProperty.call(m, "CoinType"))
                w.uint32(16).int64(m.CoinType);
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(24).int32(m.PageNo);
            return w;
        };

        CSCoinDetailed.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSCoinDetailed();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TimeIndex = r.int64();
                    break;
                case 2:
                    m.CoinType = r.int64();
                    break;
                case 3:
                    m.PageNo = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSCoinDetailed;
    })();

    gamehall.CoinDetailed = (function() {

        function CoinDetailed(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CoinDetailed.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CoinDetailed.prototype.CoinType = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CoinDetailed.prototype.Income = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CoinDetailed.prototype.Disburse = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        CoinDetailed.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CoinDetailed.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(8).int64(m.Ts);
            if (m.CoinType != null && Object.hasOwnProperty.call(m, "CoinType"))
                w.uint32(16).int64(m.CoinType);
            if (m.Income != null && Object.hasOwnProperty.call(m, "Income"))
                w.uint32(24).int64(m.Income);
            if (m.Disburse != null && Object.hasOwnProperty.call(m, "Disburse"))
                w.uint32(32).int64(m.Disburse);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(40).int64(m.Coin);
            return w;
        };

        CoinDetailed.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CoinDetailed();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Ts = r.int64();
                    break;
                case 2:
                    m.CoinType = r.int64();
                    break;
                case 3:
                    m.Income = r.int64();
                    break;
                case 4:
                    m.Disburse = r.int64();
                    break;
                case 5:
                    m.Coin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CoinDetailed;
    })();

    gamehall.SCCoinDetailedTotal = (function() {

        function SCCoinDetailedTotal(p) {
            this.CoinDetailed = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCoinDetailedTotal.prototype.CoinDetailed = $util.emptyArray;
        SCCoinDetailedTotal.prototype.PageNo = 0;
        SCCoinDetailedTotal.prototype.PageSize = 0;
        SCCoinDetailedTotal.prototype.PageNum = 0;

        SCCoinDetailedTotal.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.CoinDetailed != null && m.CoinDetailed.length) {
                for (var i = 0; i < m.CoinDetailed.length; ++i)
                    $root.gamehall.CoinDetailed.encode(m.CoinDetailed[i], w.uint32(10).fork()).ldelim();
            }
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(16).int32(m.PageNo);
            if (m.PageSize != null && Object.hasOwnProperty.call(m, "PageSize"))
                w.uint32(24).int32(m.PageSize);
            if (m.PageNum != null && Object.hasOwnProperty.call(m, "PageNum"))
                w.uint32(32).int32(m.PageNum);
            return w;
        };

        SCCoinDetailedTotal.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCCoinDetailedTotal();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.CoinDetailed && m.CoinDetailed.length))
                        m.CoinDetailed = [];
                    m.CoinDetailed.push($root.gamehall.CoinDetailed.decode(r, r.uint32()));
                    break;
                case 2:
                    m.PageNo = r.int32();
                    break;
                case 3:
                    m.PageSize = r.int32();
                    break;
                case 4:
                    m.PageNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCoinDetailedTotal;
    })();

    gamehall.SCCoinTotal = (function() {

        function SCCoinTotal(p) {
            this.TransactionType = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCCoinTotal.prototype.RechargeCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCCoinTotal.prototype.ExchangeCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCCoinTotal.prototype.ClubAddCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCCoinTotal.prototype.RebateCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCCoinTotal.prototype.Activity = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCCoinTotal.prototype.TransactionType = $util.emptyArray;

        SCCoinTotal.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RechargeCoin != null && Object.hasOwnProperty.call(m, "RechargeCoin"))
                w.uint32(8).int64(m.RechargeCoin);
            if (m.ExchangeCoin != null && Object.hasOwnProperty.call(m, "ExchangeCoin"))
                w.uint32(16).int64(m.ExchangeCoin);
            if (m.ClubAddCoin != null && Object.hasOwnProperty.call(m, "ClubAddCoin"))
                w.uint32(24).int64(m.ClubAddCoin);
            if (m.RebateCoin != null && Object.hasOwnProperty.call(m, "RebateCoin"))
                w.uint32(32).int64(m.RebateCoin);
            if (m.Activity != null && Object.hasOwnProperty.call(m, "Activity"))
                w.uint32(40).int64(m.Activity);
            if (m.TransactionType != null && m.TransactionType.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.TransactionType.length; ++i)
                    w.int32(m.TransactionType[i]);
                w.ldelim();
            }
            return w;
        };

        SCCoinTotal.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCCoinTotal();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RechargeCoin = r.int64();
                    break;
                case 2:
                    m.ExchangeCoin = r.int64();
                    break;
                case 3:
                    m.ClubAddCoin = r.int64();
                    break;
                case 4:
                    m.RebateCoin = r.int64();
                    break;
                case 5:
                    m.Activity = r.int64();
                    break;
                case 6:
                    if (!(m.TransactionType && m.TransactionType.length))
                        m.TransactionType = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.TransactionType.push(r.int32());
                    } else
                        m.TransactionType.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCCoinTotal;
    })();

    gamehall.CSReportForm = (function() {

        function CSReportForm(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSReportForm.prototype.ShowTypeId = 0;
        CSReportForm.prototype.TimeIndex = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        CSReportForm.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShowTypeId != null && Object.hasOwnProperty.call(m, "ShowTypeId"))
                w.uint32(8).int32(m.ShowTypeId);
            if (m.TimeIndex != null && Object.hasOwnProperty.call(m, "TimeIndex"))
                w.uint32(16).int64(m.TimeIndex);
            return w;
        };

        CSReportForm.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSReportForm();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShowTypeId = r.int32();
                    break;
                case 2:
                    m.TimeIndex = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSReportForm;
    })();

    gamehall.SCReportForm = (function() {

        function SCReportForm(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCReportForm.prototype.ShowType = 0;
        SCReportForm.prototype.ProfitCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCReportForm.prototype.BetCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SCReportForm.prototype.FlowCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCReportForm.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShowType != null && Object.hasOwnProperty.call(m, "ShowType"))
                w.uint32(8).int32(m.ShowType);
            if (m.ProfitCoin != null && Object.hasOwnProperty.call(m, "ProfitCoin"))
                w.uint32(16).int64(m.ProfitCoin);
            if (m.BetCoin != null && Object.hasOwnProperty.call(m, "BetCoin"))
                w.uint32(24).int64(m.BetCoin);
            if (m.FlowCoin != null && Object.hasOwnProperty.call(m, "FlowCoin"))
                w.uint32(32).int64(m.FlowCoin);
            return w;
        };

        SCReportForm.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCReportForm();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShowType = r.int32();
                    break;
                case 2:
                    m.ProfitCoin = r.int64();
                    break;
                case 3:
                    m.BetCoin = r.int64();
                    break;
                case 4:
                    m.FlowCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCReportForm;
    })();

    gamehall.CSHistoryRecord = (function() {

        function CSHistoryRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSHistoryRecord.prototype.PageNo = 0;

        CSHistoryRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(8).int32(m.PageNo);
            return w;
        };

        CSHistoryRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSHistoryRecord();
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

        return CSHistoryRecord;
    })();

    gamehall.HistoryRecord = (function() {

        function HistoryRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        HistoryRecord.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        HistoryRecord.prototype.CodeCoin = 0;
        HistoryRecord.prototype.Coin = 0;
        HistoryRecord.prototype.ReceiveType = 0;

        HistoryRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(8).int64(m.Ts);
            if (m.CodeCoin != null && Object.hasOwnProperty.call(m, "CodeCoin"))
                w.uint32(16).int32(m.CodeCoin);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(24).int32(m.Coin);
            if (m.ReceiveType != null && Object.hasOwnProperty.call(m, "ReceiveType"))
                w.uint32(32).int32(m.ReceiveType);
            return w;
        };

        HistoryRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.HistoryRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Ts = r.int64();
                    break;
                case 2:
                    m.CodeCoin = r.int32();
                    break;
                case 3:
                    m.Coin = r.int32();
                    break;
                case 4:
                    m.ReceiveType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return HistoryRecord;
    })();

    gamehall.SCHistoryRecord = (function() {

        function SCHistoryRecord(p) {
            this.HistoryRecord = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCHistoryRecord.prototype.HistoryRecord = $util.emptyArray;
        SCHistoryRecord.prototype.PageNo = 0;
        SCHistoryRecord.prototype.PageSize = 0;
        SCHistoryRecord.prototype.PageNum = 0;

        SCHistoryRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.HistoryRecord != null && m.HistoryRecord.length) {
                for (var i = 0; i < m.HistoryRecord.length; ++i)
                    $root.gamehall.HistoryRecord.encode(m.HistoryRecord[i], w.uint32(10).fork()).ldelim();
            }
            if (m.PageNo != null && Object.hasOwnProperty.call(m, "PageNo"))
                w.uint32(16).int32(m.PageNo);
            if (m.PageSize != null && Object.hasOwnProperty.call(m, "PageSize"))
                w.uint32(24).int32(m.PageSize);
            if (m.PageNum != null && Object.hasOwnProperty.call(m, "PageNum"))
                w.uint32(32).int32(m.PageNum);
            return w;
        };

        SCHistoryRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCHistoryRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.HistoryRecord && m.HistoryRecord.length))
                        m.HistoryRecord = [];
                    m.HistoryRecord.push($root.gamehall.HistoryRecord.decode(r, r.uint32()));
                    break;
                case 2:
                    m.PageNo = r.int32();
                    break;
                case 3:
                    m.PageSize = r.int32();
                    break;
                case 4:
                    m.PageNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCHistoryRecord;
    })();

    gamehall.CSReceiveCodeCoin = (function() {

        function CSReceiveCodeCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSReceiveCodeCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSReceiveCodeCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSReceiveCodeCoin();
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

        return CSReceiveCodeCoin;
    })();

    gamehall.SCReceiveCodeCoin = (function() {

        function SCReceiveCodeCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCReceiveCodeCoin.prototype.OpRetCode = 0;
        SCReceiveCodeCoin.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        SCReceiveCodeCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpRetCode != null && Object.hasOwnProperty.call(m, "OpRetCode"))
                w.uint32(8).int32(m.OpRetCode);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int64(m.Coin);
            return w;
        };

        SCReceiveCodeCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCReceiveCodeCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpRetCode = r.int32();
                    break;
                case 2:
                    m.Coin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCReceiveCodeCoin;
    })();

    gamehall.CSGetRankInfo = (function() {

        function CSGetRankInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSGetRankInfo.prototype.Plt = "";
        CSGetRankInfo.prototype.GameFreeId = 0;

        CSGetRankInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Plt != null && Object.hasOwnProperty.call(m, "Plt"))
                w.uint32(10).string(m.Plt);
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(16).int32(m.GameFreeId);
            return w;
        };

        CSGetRankInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSGetRankInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Plt = r.string();
                    break;
                case 2:
                    m.GameFreeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSGetRankInfo;
    })();

    gamehall.RankInfo = (function() {

        function RankInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RankInfo.prototype.Snid = 0;
        RankInfo.prototype.Name = "";
        RankInfo.prototype.TotalIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RankInfo.prototype.TotalOut = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        RankInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(8).int32(m.Snid);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.TotalIn != null && Object.hasOwnProperty.call(m, "TotalIn"))
                w.uint32(24).int64(m.TotalIn);
            if (m.TotalOut != null && Object.hasOwnProperty.call(m, "TotalOut"))
                w.uint32(32).int64(m.TotalOut);
            return w;
        };

        RankInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.RankInfo();
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
                    m.TotalIn = r.int64();
                    break;
                case 4:
                    m.TotalOut = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RankInfo;
    })();

    gamehall.SCGetRankInfo = (function() {

        function SCGetRankInfo(p) {
            this.Info = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCGetRankInfo.prototype.Info = $util.emptyArray;

        SCGetRankInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Info != null && m.Info.length) {
                for (var i = 0; i < m.Info.length; ++i)
                    $root.gamehall.RankInfo.encode(m.Info[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCGetRankInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCGetRankInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Info && m.Info.length))
                        m.Info = [];
                    m.Info.push($root.gamehall.RankInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCGetRankInfo;
    })();

    gamehall.ShowRedCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Mail"] = 0;
        values[valuesById[1] = "Shop"] = 1;
        values[valuesById[2] = "Role"] = 2;
        values[valuesById[3] = "Pet"] = 3;
        return values;
    })();

    gamehall.ShowRed = (function() {

        function ShowRed(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ShowRed.prototype.ShowType = 0;
        ShowRed.prototype.ShowChild = 0;
        ShowRed.prototype.IsShow = 0;

        ShowRed.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShowType != null && Object.hasOwnProperty.call(m, "ShowType"))
                w.uint32(8).int32(m.ShowType);
            if (m.ShowChild != null && Object.hasOwnProperty.call(m, "ShowChild"))
                w.uint32(16).int32(m.ShowChild);
            if (m.IsShow != null && Object.hasOwnProperty.call(m, "IsShow"))
                w.uint32(24).int32(m.IsShow);
            return w;
        };

        ShowRed.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.ShowRed();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShowType = r.int32();
                    break;
                case 2:
                    m.ShowChild = r.int32();
                    break;
                case 3:
                    m.IsShow = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ShowRed;
    })();

    gamehall.SCShowRed = (function() {

        function SCShowRed(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCShowRed.prototype.ShowRed = null;

        SCShowRed.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ShowRed != null && Object.hasOwnProperty.call(m, "ShowRed"))
                $root.gamehall.ShowRed.encode(m.ShowRed, w.uint32(10).fork()).ldelim();
            return w;
        };

        SCShowRed.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCShowRed();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ShowRed = $root.gamehall.ShowRed.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCShowRed;
    })();

    gamehall.OpResultCode_Hundred = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess_Hundred"] = 0;
        values[valuesById[1] = "OPRC_Error_Hundred"] = 1;
        values[valuesById[1044] = "OPRC_YourResVerIsLow_Hundred"] = 1044;
        values[valuesById[1045] = "OPRC_YourAppVerIsLow_Hundred"] = 1045;
        values[valuesById[1053] = "OPRC_RoomHadClosed_Hundred"] = 1053;
        values[valuesById[1054] = "OPRC_SceneServerMaintain_Hundred"] = 1054;
        values[valuesById[1056] = "OPRC_CoinNotEnough_Hundred"] = 1056;
        values[valuesById[1058] = "OPRC_CoinTooMore_Hundred"] = 1058;
        values[valuesById[1103] = "OPRC_RoomGameTimes_Hundred"] = 1103;
        values[valuesById[1113] = "OPRC_MustBindPromoter_Hundred"] = 1113;
        return values;
    })();

    gamehall.HundredScenePacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_HundredScene_ZERO"] = 0;
        values[valuesById[2380] = "PACKET_CS_HUNDREDSCENE_OP"] = 2380;
        values[valuesById[2381] = "PACKET_SC_HUNDREDSCENE_OP"] = 2381;
        values[valuesById[2382] = "PACKET_CS_HUNDREDSCENE_GETPLAYERNUM"] = 2382;
        values[valuesById[2383] = "PACKET_SC_HUNDREDSCENE_GETPLAYERNUM"] = 2383;
        values[valuesById[2384] = "PACKET_CS_GAMEJACKPOT"] = 2384;
        values[valuesById[2385] = "PACKET_SC_GAMEJACKPOT"] = 2385;
        values[valuesById[2386] = "PACKET_CS_GAMEHISTORYINFO"] = 2386;
        values[valuesById[2387] = "PACKET_SC_GAMEPLAYERHISTORY"] = 2387;
        values[valuesById[2388] = "PACKET_SC_GAMEBIGWINHISTORY"] = 2388;
        values[valuesById[2389] = "PACKET_BD_GAMEJACKPOT"] = 2389;
        return values;
    })();

    gamehall.CSHundredSceneOp = (function() {

        function CSHundredSceneOp(p) {
            this.OpParams = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSHundredSceneOp.prototype.Id = 0;
        CSHundredSceneOp.prototype.OpType = 0;
        CSHundredSceneOp.prototype.OpParams = $util.emptyArray;
        CSHundredSceneOp.prototype.ApkVer = 0;
        CSHundredSceneOp.prototype.ResVer = 0;

        CSHundredSceneOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.OpType != null && Object.hasOwnProperty.call(m, "OpType"))
                w.uint32(16).int32(m.OpType);
            if (m.OpParams != null && m.OpParams.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.OpParams.length; ++i)
                    w.int32(m.OpParams[i]);
                w.ldelim();
            }
            if (m.ApkVer != null && Object.hasOwnProperty.call(m, "ApkVer"))
                w.uint32(32).int32(m.ApkVer);
            if (m.ResVer != null && Object.hasOwnProperty.call(m, "ResVer"))
                w.uint32(40).int32(m.ResVer);
            return w;
        };

        CSHundredSceneOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSHundredSceneOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.OpType = r.int32();
                    break;
                case 3:
                    if (!(m.OpParams && m.OpParams.length))
                        m.OpParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OpParams.push(r.int32());
                    } else
                        m.OpParams.push(r.int32());
                    break;
                case 4:
                    m.ApkVer = r.int32();
                    break;
                case 5:
                    m.ResVer = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSHundredSceneOp;
    })();

    gamehall.SCHundredSceneOp = (function() {

        function SCHundredSceneOp(p) {
            this.OpParams = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCHundredSceneOp.prototype.OpCode = 0;
        SCHundredSceneOp.prototype.Id = 0;
        SCHundredSceneOp.prototype.OpType = 0;
        SCHundredSceneOp.prototype.OpParams = $util.emptyArray;
        SCHundredSceneOp.prototype.MinApkVer = 0;
        SCHundredSceneOp.prototype.LatestApkVer = 0;
        SCHundredSceneOp.prototype.MinResVer = 0;
        SCHundredSceneOp.prototype.LatestResVer = 0;

        SCHundredSceneOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(8).int32(m.OpCode);
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(16).int32(m.Id);
            if (m.OpType != null && Object.hasOwnProperty.call(m, "OpType"))
                w.uint32(24).int32(m.OpType);
            if (m.OpParams != null && m.OpParams.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.OpParams.length; ++i)
                    w.int32(m.OpParams[i]);
                w.ldelim();
            }
            if (m.MinApkVer != null && Object.hasOwnProperty.call(m, "MinApkVer"))
                w.uint32(40).int32(m.MinApkVer);
            if (m.LatestApkVer != null && Object.hasOwnProperty.call(m, "LatestApkVer"))
                w.uint32(48).int32(m.LatestApkVer);
            if (m.MinResVer != null && Object.hasOwnProperty.call(m, "MinResVer"))
                w.uint32(56).int32(m.MinResVer);
            if (m.LatestResVer != null && Object.hasOwnProperty.call(m, "LatestResVer"))
                w.uint32(64).int32(m.LatestResVer);
            return w;
        };

        SCHundredSceneOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCHundredSceneOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OpCode = r.int32();
                    break;
                case 2:
                    m.Id = r.int32();
                    break;
                case 3:
                    m.OpType = r.int32();
                    break;
                case 4:
                    if (!(m.OpParams && m.OpParams.length))
                        m.OpParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OpParams.push(r.int32());
                    } else
                        m.OpParams.push(r.int32());
                    break;
                case 5:
                    m.MinApkVer = r.int32();
                    break;
                case 6:
                    m.LatestApkVer = r.int32();
                    break;
                case 7:
                    m.MinResVer = r.int32();
                    break;
                case 8:
                    m.LatestResVer = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCHundredSceneOp;
    })();

    gamehall.CSHundredSceneGetPlayerNum = (function() {

        function CSHundredSceneGetPlayerNum(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSHundredSceneGetPlayerNum.prototype.GameId = 0;
        CSHundredSceneGetPlayerNum.prototype.GameModel = 0;

        CSHundredSceneGetPlayerNum.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.GameModel != null && Object.hasOwnProperty.call(m, "GameModel"))
                w.uint32(16).int32(m.GameModel);
            return w;
        };

        CSHundredSceneGetPlayerNum.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSHundredSceneGetPlayerNum();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.GameModel = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSHundredSceneGetPlayerNum;
    })();

    gamehall.SCHundredSceneGetPlayerNum = (function() {

        function SCHundredSceneGetPlayerNum(p) {
            this.Nums = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCHundredSceneGetPlayerNum.prototype.Nums = $util.emptyArray;

        SCHundredSceneGetPlayerNum.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Nums != null && m.Nums.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.Nums.length; ++i)
                    w.int32(m.Nums[i]);
                w.ldelim();
            }
            return w;
        };

        SCHundredSceneGetPlayerNum.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCHundredSceneGetPlayerNum();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Nums && m.Nums.length))
                        m.Nums = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Nums.push(r.int32());
                    } else
                        m.Nums.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCHundredSceneGetPlayerNum;
    })();

    gamehall.CSHundredSceneGetGameJackpot = (function() {

        function CSHundredSceneGetGameJackpot(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSHundredSceneGetGameJackpot.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSHundredSceneGetGameJackpot.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSHundredSceneGetGameJackpot();
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

        return CSHundredSceneGetGameJackpot;
    })();

    gamehall.GameJackpotFundInfo = (function() {

        function GameJackpotFundInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameJackpotFundInfo.prototype.GameFreeId = 0;
        GameJackpotFundInfo.prototype.JackPotFund = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GameJackpotFundInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.JackPotFund != null && Object.hasOwnProperty.call(m, "JackPotFund"))
                w.uint32(16).int64(m.JackPotFund);
            return w;
        };

        GameJackpotFundInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.GameJackpotFundInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    m.JackPotFund = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameJackpotFundInfo;
    })();

    gamehall.SCHundredSceneGetGameJackpot = (function() {

        function SCHundredSceneGetGameJackpot(p) {
            this.GameJackpotFund = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCHundredSceneGetGameJackpot.prototype.GameJackpotFund = $util.emptyArray;

        SCHundredSceneGetGameJackpot.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameJackpotFund != null && m.GameJackpotFund.length) {
                for (var i = 0; i < m.GameJackpotFund.length; ++i)
                    $root.gamehall.GameJackpotFundInfo.encode(m.GameJackpotFund[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCHundredSceneGetGameJackpot.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCHundredSceneGetGameJackpot();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.GameJackpotFund && m.GameJackpotFund.length))
                        m.GameJackpotFund = [];
                    m.GameJackpotFund.push($root.gamehall.GameJackpotFundInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCHundredSceneGetGameJackpot;
    })();

    gamehall.BroadcastGameJackpot = (function() {

        function BroadcastGameJackpot(p) {
            this.JackpotFund = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        BroadcastGameJackpot.prototype.JackpotFund = $util.emptyArray;
        BroadcastGameJackpot.prototype.GameFreeId = 0;

        BroadcastGameJackpot.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.JackpotFund != null && m.JackpotFund.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.JackpotFund.length; ++i)
                    w.int64(m.JackpotFund[i]);
                w.ldelim();
            }
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(16).int32(m.GameFreeId);
            return w;
        };

        BroadcastGameJackpot.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.BroadcastGameJackpot();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.JackpotFund && m.JackpotFund.length))
                        m.JackpotFund = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.JackpotFund.push(r.int64());
                    } else
                        m.JackpotFund.push(r.int64());
                    break;
                case 2:
                    m.GameFreeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return BroadcastGameJackpot;
    })();

    gamehall.CSHundredSceneGetHistoryInfo = (function() {

        function CSHundredSceneGetHistoryInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSHundredSceneGetHistoryInfo.prototype.GameId = 0;
        CSHundredSceneGetHistoryInfo.prototype.GameHistoryModel = 0;

        CSHundredSceneGetHistoryInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.GameHistoryModel != null && Object.hasOwnProperty.call(m, "GameHistoryModel"))
                w.uint32(16).int32(m.GameHistoryModel);
            return w;
        };

        CSHundredSceneGetHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.CSHundredSceneGetHistoryInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.GameHistoryModel = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSHundredSceneGetHistoryInfo;
    })();

    gamehall.GameHistoryInfo = (function() {

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
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.GameHistoryInfo();
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

    gamehall.PlayerHistoryInfo = (function() {

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
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.PlayerHistoryInfo();
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

    gamehall.SCPlayerHistory = (function() {

        function SCPlayerHistory(p) {
            this.PlayerHistory = [];
            this.GameHistory = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPlayerHistory.prototype.PlayerHistory = $util.emptyArray;
        SCPlayerHistory.prototype.GameHistory = $util.emptyArray;

        SCPlayerHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlayerHistory != null && m.PlayerHistory.length) {
                for (var i = 0; i < m.PlayerHistory.length; ++i)
                    $root.gamehall.PlayerHistoryInfo.encode(m.PlayerHistory[i], w.uint32(10).fork()).ldelim();
            }
            if (m.GameHistory != null && m.GameHistory.length) {
                for (var i = 0; i < m.GameHistory.length; ++i)
                    $root.gamehall.GameHistoryInfo.encode(m.GameHistory[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        SCPlayerHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCPlayerHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.PlayerHistory && m.PlayerHistory.length))
                        m.PlayerHistory = [];
                    m.PlayerHistory.push($root.gamehall.PlayerHistoryInfo.decode(r, r.uint32()));
                    break;
                case 2:
                    if (!(m.GameHistory && m.GameHistory.length))
                        m.GameHistory = [];
                    m.GameHistory.push($root.gamehall.GameHistoryInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPlayerHistory;
    })();

    gamehall.BigWinHistoryInfo = (function() {

        function BigWinHistoryInfo(p) {
            this.Cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        BigWinHistoryInfo.prototype.SpinID = "";
        BigWinHistoryInfo.prototype.CreatedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BigWinHistoryInfo.prototype.BaseBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BigWinHistoryInfo.prototype.PriceValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BigWinHistoryInfo.prototype.UserName = "";
        BigWinHistoryInfo.prototype.IsVirtualData = false;
        BigWinHistoryInfo.prototype.TotalBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BigWinHistoryInfo.prototype.Cards = $util.emptyArray;

        BigWinHistoryInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SpinID != null && Object.hasOwnProperty.call(m, "SpinID"))
                w.uint32(10).string(m.SpinID);
            if (m.CreatedTime != null && Object.hasOwnProperty.call(m, "CreatedTime"))
                w.uint32(16).int64(m.CreatedTime);
            if (m.BaseBet != null && Object.hasOwnProperty.call(m, "BaseBet"))
                w.uint32(24).int64(m.BaseBet);
            if (m.PriceValue != null && Object.hasOwnProperty.call(m, "PriceValue"))
                w.uint32(32).int64(m.PriceValue);
            if (m.UserName != null && Object.hasOwnProperty.call(m, "UserName"))
                w.uint32(42).string(m.UserName);
            if (m.IsVirtualData != null && Object.hasOwnProperty.call(m, "IsVirtualData"))
                w.uint32(48).bool(m.IsVirtualData);
            if (m.TotalBet != null && Object.hasOwnProperty.call(m, "TotalBet"))
                w.uint32(56).int64(m.TotalBet);
            if (m.Cards != null && m.Cards.length) {
                w.uint32(66).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            return w;
        };

        BigWinHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.BigWinHistoryInfo();
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
                    m.BaseBet = r.int64();
                    break;
                case 4:
                    m.PriceValue = r.int64();
                    break;
                case 5:
                    m.UserName = r.string();
                    break;
                case 6:
                    m.IsVirtualData = r.bool();
                    break;
                case 7:
                    m.TotalBet = r.int64();
                    break;
                case 8:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return BigWinHistoryInfo;
    })();

    gamehall.SCBigWinHistory = (function() {

        function SCBigWinHistory(p) {
            this.BigWinHistory = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCBigWinHistory.prototype.BigWinHistory = $util.emptyArray;
        SCBigWinHistory.prototype.GameId = 0;

        SCBigWinHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.BigWinHistory != null && m.BigWinHistory.length) {
                for (var i = 0; i < m.BigWinHistory.length; ++i)
                    $root.gamehall.BigWinHistoryInfo.encode(m.BigWinHistory[i], w.uint32(10).fork()).ldelim();
            }
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(16).int32(m.GameId);
            return w;
        };

        SCBigWinHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.gamehall.SCBigWinHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.BigWinHistory && m.BigWinHistory.length))
                        m.BigWinHistory = [];
                    m.BigWinHistory.push($root.gamehall.BigWinHistoryInfo.decode(r, r.uint32()));
                    break;
                case 2:
                    m.GameId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCBigWinHistory;
    })();

    return gamehall;
})();

module.exports = $root;
