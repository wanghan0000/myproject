/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.task = (function() {

    var task = {};

    task.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        return values;
    })();

    task.TaskPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_Task_ZERO"] = 0;
        values[valuesById[2400] = "PACKET_CS_TASKLIST"] = 2400;
        values[valuesById[2401] = "PACKET_SC_TASKLIST"] = 2401;
        values[valuesById[2402] = "PACKET_SC_TASKCHG"] = 2402;
        values[valuesById[2403] = "PACKET_SC_TACKCOMPLETE"] = 2403;
        values[valuesById[2404] = "PACKET_SC_TASKDEL"] = 2404;
        values[valuesById[2405] = "PACKET_CS_TACKDRAWPRIZE"] = 2405;
        values[valuesById[2406] = "PACKET_SC_TACKDRAWPRIZE"] = 2406;
        return values;
    })();

    task.TaskData = (function() {

        function TaskData(p) {
            this.GameFreeId = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        TaskData.prototype.Id = 0;
        TaskData.prototype.Desc = "";
        TaskData.prototype.Count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TaskData.prototype.GoalCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        TaskData.prototype.CompletedTimes = 0;
        TaskData.prototype.LimitTimes = 0;
        TaskData.prototype.Status = 0;
        TaskData.prototype.Prizes = 0;
        TaskData.prototype.GameFreeId = $util.emptyArray;

        TaskData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Desc != null && Object.hasOwnProperty.call(m, "Desc"))
                w.uint32(18).string(m.Desc);
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(24).int64(m.Count);
            if (m.GoalCount != null && Object.hasOwnProperty.call(m, "GoalCount"))
                w.uint32(32).int64(m.GoalCount);
            if (m.CompletedTimes != null && Object.hasOwnProperty.call(m, "CompletedTimes"))
                w.uint32(40).int32(m.CompletedTimes);
            if (m.LimitTimes != null && Object.hasOwnProperty.call(m, "LimitTimes"))
                w.uint32(48).int32(m.LimitTimes);
            if (m.Status != null && Object.hasOwnProperty.call(m, "Status"))
                w.uint32(56).int32(m.Status);
            if (m.Prizes != null && Object.hasOwnProperty.call(m, "Prizes"))
                w.uint32(64).int32(m.Prizes);
            if (m.GameFreeId != null && m.GameFreeId.length) {
                w.uint32(74).fork();
                for (var i = 0; i < m.GameFreeId.length; ++i)
                    w.int32(m.GameFreeId[i]);
                w.ldelim();
            }
            return w;
        };

        TaskData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.task.TaskData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Desc = r.string();
                    break;
                case 3:
                    m.Count = r.int64();
                    break;
                case 4:
                    m.GoalCount = r.int64();
                    break;
                case 5:
                    m.CompletedTimes = r.int32();
                    break;
                case 6:
                    m.LimitTimes = r.int32();
                    break;
                case 7:
                    m.Status = r.int32();
                    break;
                case 8:
                    m.Prizes = r.int32();
                    break;
                case 9:
                    if (!(m.GameFreeId && m.GameFreeId.length))
                        m.GameFreeId = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.GameFreeId.push(r.int32());
                    } else
                        m.GameFreeId.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return TaskData;
    })();

    task.CSTaskList = (function() {

        function CSTaskList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSTaskList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSTaskList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.task.CSTaskList();
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

        return CSTaskList;
    })();

    task.SCTaskList = (function() {

        function SCTaskList(p) {
            this.Tasks = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaskList.prototype.Tasks = $util.emptyArray;

        SCTaskList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tasks != null && m.Tasks.length) {
                for (var i = 0; i < m.Tasks.length; ++i)
                    $root.task.TaskData.encode(m.Tasks[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCTaskList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.task.SCTaskList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Tasks && m.Tasks.length))
                        m.Tasks = [];
                    m.Tasks.push($root.task.TaskData.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaskList;
    })();

    task.SCTaskChg = (function() {

        function SCTaskChg(p) {
            this.Tasks = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaskChg.prototype.Tasks = $util.emptyArray;

        SCTaskChg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tasks != null && m.Tasks.length) {
                for (var i = 0; i < m.Tasks.length; ++i)
                    $root.task.TaskData.encode(m.Tasks[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCTaskChg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.task.SCTaskChg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Tasks && m.Tasks.length))
                        m.Tasks = [];
                    m.Tasks.push($root.task.TaskData.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaskChg;
    })();

    task.SCTaskComplete = (function() {

        function SCTaskComplete(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaskComplete.prototype.TaskId = 0;

        SCTaskComplete.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TaskId != null && Object.hasOwnProperty.call(m, "TaskId"))
                w.uint32(8).int32(m.TaskId);
            return w;
        };

        SCTaskComplete.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.task.SCTaskComplete();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TaskId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaskComplete;
    })();

    task.SCTaskDel = (function() {

        function SCTaskDel(p) {
            this.TaskIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaskDel.prototype.TaskIds = $util.emptyArray;

        SCTaskDel.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TaskIds != null && m.TaskIds.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.TaskIds.length; ++i)
                    w.int32(m.TaskIds[i]);
                w.ldelim();
            }
            return w;
        };

        SCTaskDel.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.task.SCTaskDel();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.TaskIds && m.TaskIds.length))
                        m.TaskIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.TaskIds.push(r.int32());
                    } else
                        m.TaskIds.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaskDel;
    })();

    task.CSTaskDrawPrize = (function() {

        function CSTaskDrawPrize(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSTaskDrawPrize.prototype.TaskId = 0;

        CSTaskDrawPrize.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TaskId != null && Object.hasOwnProperty.call(m, "TaskId"))
                w.uint32(8).int32(m.TaskId);
            return w;
        };

        CSTaskDrawPrize.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.task.CSTaskDrawPrize();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TaskId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSTaskDrawPrize;
    })();

    task.SCTaskDrawPrize = (function() {

        function SCTaskDrawPrize(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCTaskDrawPrize.prototype.TaskId = 0;
        SCTaskDrawPrize.prototype.OpCode = 0;
        SCTaskDrawPrize.prototype.Prize = 0;
        SCTaskDrawPrize.prototype.Data = null;

        SCTaskDrawPrize.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TaskId != null && Object.hasOwnProperty.call(m, "TaskId"))
                w.uint32(8).int32(m.TaskId);
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(16).int32(m.OpCode);
            if (m.Prize != null && Object.hasOwnProperty.call(m, "Prize"))
                w.uint32(24).int32(m.Prize);
            if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
                $root.task.TaskData.encode(m.Data, w.uint32(34).fork()).ldelim();
            return w;
        };

        SCTaskDrawPrize.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.task.SCTaskDrawPrize();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TaskId = r.int32();
                    break;
                case 2:
                    m.OpCode = r.int32();
                    break;
                case 3:
                    m.Prize = r.int32();
                    break;
                case 4:
                    m.Data = $root.task.TaskData.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCTaskDrawPrize;
    })();

    return task;
})();

module.exports = $root;
