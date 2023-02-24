// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace task. */
export namespace task {

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1
    }

    /** TaskPacketID enum. */
    enum TaskPacketID {
        PACKET_Task_ZERO = 0,
        PACKET_CS_TASKLIST = 2400,
        PACKET_SC_TASKLIST = 2401,
        PACKET_SC_TASKCHG = 2402,
        PACKET_SC_TACKCOMPLETE = 2403,
        PACKET_SC_TASKDEL = 2404,
        PACKET_CS_TACKDRAWPRIZE = 2405,
        PACKET_SC_TACKDRAWPRIZE = 2406
    }

    /** Properties of a TaskData. */
    interface ITaskData {

        /** TaskData Id */
        Id?: (number|null);

        /** TaskData Desc */
        Desc?: (string|null);

        /** TaskData Count */
        Count?: (number|Long|null);

        /** TaskData GoalCount */
        GoalCount?: (number|Long|null);

        /** TaskData CompletedTimes */
        CompletedTimes?: (number|null);

        /** TaskData LimitTimes */
        LimitTimes?: (number|null);

        /** TaskData Status */
        Status?: (number|null);

        /** TaskData Prizes */
        Prizes?: (number|null);

        /** TaskData GameFreeId */
        GameFreeId?: (number[]|null);
    }

    /** Represents a TaskData. */
    class TaskData implements ITaskData {

        /**
         * Constructs a new TaskData.
         * @param [p] Properties to set
         */
        constructor(p?: task.ITaskData);

        /** TaskData Id. */
        public Id: number;

        /** TaskData Desc. */
        public Desc: string;

        /** TaskData Count. */
        public Count: (number|Long);

        /** TaskData GoalCount. */
        public GoalCount: (number|Long);

        /** TaskData CompletedTimes. */
        public CompletedTimes: number;

        /** TaskData LimitTimes. */
        public LimitTimes: number;

        /** TaskData Status. */
        public Status: number;

        /** TaskData Prizes. */
        public Prizes: number;

        /** TaskData GameFreeId. */
        public GameFreeId: number[];

        /**
         * Encodes the specified TaskData message. Does not implicitly {@link task.TaskData.verify|verify} messages.
         * @param m TaskData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: task.ITaskData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TaskData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): task.TaskData;
    }

    /** Properties of a CSTaskList. */
    interface ICSTaskList {
    }

    /** Represents a CSTaskList. */
    class CSTaskList implements ICSTaskList {

        /**
         * Constructs a new CSTaskList.
         * @param [p] Properties to set
         */
        constructor(p?: task.ICSTaskList);

        /**
         * Encodes the specified CSTaskList message. Does not implicitly {@link task.CSTaskList.verify|verify} messages.
         * @param m CSTaskList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: task.ICSTaskList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSTaskList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSTaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): task.CSTaskList;
    }

    /** Properties of a SCTaskList. */
    interface ISCTaskList {

        /** SCTaskList Tasks */
        Tasks?: (task.ITaskData[]|null);
    }

    /** Represents a SCTaskList. */
    class SCTaskList implements ISCTaskList {

        /**
         * Constructs a new SCTaskList.
         * @param [p] Properties to set
         */
        constructor(p?: task.ISCTaskList);

        /** SCTaskList Tasks. */
        public Tasks: task.ITaskData[];

        /**
         * Encodes the specified SCTaskList message. Does not implicitly {@link task.SCTaskList.verify|verify} messages.
         * @param m SCTaskList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: task.ISCTaskList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaskList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaskList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): task.SCTaskList;
    }

    /** Properties of a SCTaskChg. */
    interface ISCTaskChg {

        /** SCTaskChg Tasks */
        Tasks?: (task.ITaskData[]|null);
    }

    /** Represents a SCTaskChg. */
    class SCTaskChg implements ISCTaskChg {

        /**
         * Constructs a new SCTaskChg.
         * @param [p] Properties to set
         */
        constructor(p?: task.ISCTaskChg);

        /** SCTaskChg Tasks. */
        public Tasks: task.ITaskData[];

        /**
         * Encodes the specified SCTaskChg message. Does not implicitly {@link task.SCTaskChg.verify|verify} messages.
         * @param m SCTaskChg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: task.ISCTaskChg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaskChg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaskChg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): task.SCTaskChg;
    }

    /** Properties of a SCTaskComplete. */
    interface ISCTaskComplete {

        /** SCTaskComplete TaskId */
        TaskId?: (number|null);
    }

    /** Represents a SCTaskComplete. */
    class SCTaskComplete implements ISCTaskComplete {

        /**
         * Constructs a new SCTaskComplete.
         * @param [p] Properties to set
         */
        constructor(p?: task.ISCTaskComplete);

        /** SCTaskComplete TaskId. */
        public TaskId: number;

        /**
         * Encodes the specified SCTaskComplete message. Does not implicitly {@link task.SCTaskComplete.verify|verify} messages.
         * @param m SCTaskComplete message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: task.ISCTaskComplete, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaskComplete message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaskComplete
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): task.SCTaskComplete;
    }

    /** Properties of a SCTaskDel. */
    interface ISCTaskDel {

        /** SCTaskDel TaskIds */
        TaskIds?: (number[]|null);
    }

    /** Represents a SCTaskDel. */
    class SCTaskDel implements ISCTaskDel {

        /**
         * Constructs a new SCTaskDel.
         * @param [p] Properties to set
         */
        constructor(p?: task.ISCTaskDel);

        /** SCTaskDel TaskIds. */
        public TaskIds: number[];

        /**
         * Encodes the specified SCTaskDel message. Does not implicitly {@link task.SCTaskDel.verify|verify} messages.
         * @param m SCTaskDel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: task.ISCTaskDel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaskDel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaskDel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): task.SCTaskDel;
    }

    /** Properties of a CSTaskDrawPrize. */
    interface ICSTaskDrawPrize {

        /** CSTaskDrawPrize TaskId */
        TaskId?: (number|null);
    }

    /** Represents a CSTaskDrawPrize. */
    class CSTaskDrawPrize implements ICSTaskDrawPrize {

        /**
         * Constructs a new CSTaskDrawPrize.
         * @param [p] Properties to set
         */
        constructor(p?: task.ICSTaskDrawPrize);

        /** CSTaskDrawPrize TaskId. */
        public TaskId: number;

        /**
         * Encodes the specified CSTaskDrawPrize message. Does not implicitly {@link task.CSTaskDrawPrize.verify|verify} messages.
         * @param m CSTaskDrawPrize message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: task.ICSTaskDrawPrize, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSTaskDrawPrize message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSTaskDrawPrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): task.CSTaskDrawPrize;
    }

    /** Properties of a SCTaskDrawPrize. */
    interface ISCTaskDrawPrize {

        /** SCTaskDrawPrize TaskId */
        TaskId?: (number|null);

        /** SCTaskDrawPrize OpCode */
        OpCode?: (task.OpResultCode|null);

        /** SCTaskDrawPrize Prize */
        Prize?: (number|null);

        /** SCTaskDrawPrize Data */
        Data?: (task.ITaskData|null);
    }

    /** Represents a SCTaskDrawPrize. */
    class SCTaskDrawPrize implements ISCTaskDrawPrize {

        /**
         * Constructs a new SCTaskDrawPrize.
         * @param [p] Properties to set
         */
        constructor(p?: task.ISCTaskDrawPrize);

        /** SCTaskDrawPrize TaskId. */
        public TaskId: number;

        /** SCTaskDrawPrize OpCode. */
        public OpCode: task.OpResultCode;

        /** SCTaskDrawPrize Prize. */
        public Prize: number;

        /** SCTaskDrawPrize Data. */
        public Data?: (task.ITaskData|null);

        /**
         * Encodes the specified SCTaskDrawPrize message. Does not implicitly {@link task.SCTaskDrawPrize.verify|verify} messages.
         * @param m SCTaskDrawPrize message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: task.ISCTaskDrawPrize, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTaskDrawPrize message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTaskDrawPrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): task.SCTaskDrawPrize;
    }
}
