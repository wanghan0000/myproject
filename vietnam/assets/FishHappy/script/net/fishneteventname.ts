/**
 * 欢乐捕鱼网络事件名定义
 */
export enum FishNetEventName {
    FISHING_SC_ROOMINFO = "FISHING_SC_ROOMINFO", 		    // 房间信息
    FISHING_SC_FIRE = "FISHING_SC_FIRE",                // 其他玩家开火
    FISHING_SC_FIREHIT = "FISHING_SC_FIREHIT",             // 命中鱼
    FISHING_SC_FIREPOWER = "FISHING_SC_FIREPOWER",           // 调整倍率
    FISHING_SC_ROOMSTATE = "FISHING_SC_ROOMSTATE",		    // 玩家操作
    FISHING_SC_FLUSHFISH = "FISHING_SC_FLUSHFISH",		    // 鱼潮刷新
    FISHING_SC_SYNCFISH = "FISHING_SC_SYNCFISH",			// 刷鱼
    FISHING_SC_FISHERENTER = "FISHING_SC_FISHERENTER",         // (自己进入渔场后)同步屏幕上的鱼
    FISHING_SC_FISHVIEW = "FISHING_SC_FISHVIEW",            // 同步屏幕上的同类鱼
    FISHING_SC_FISHTARGET = "FISHING_SC_FISHTARGET",          // 瞄准
    FISHING_SC_SELVIP = "FISHING_SC_SELVIP",              // 玩家换炮
    FISHING_SC_OP = "FISHING_SC_OP",		            // 玩家操作
    FISHING_SC_ENTER = "FISHING_SC_ENTER",               // 玩家进入
    FISHING_SC_LEAVE = "FISHING_SC_LEAVE",               // 玩家离开
    FISHING_SC_FISHDEL = "FISHING_SC_FISHDEL",             // 玩家错失的金币补偿
    FISHING_SC_REBINDAGENT = "FISHING_SC_REBINDAGENT",         // 绑定机器人到新的玩家身上
    FISHING_SC_FIREMISS = "FISHING_SC_FIREMISS",            // 击杀概率
    FISHING_SC_SCSYNCFISHCOIN = "FISHING_SC_SCSYNCFISHCOIN",      // 同步鱼的奖金
    FISHING_SC_SCROBOTBEHAVIOR = "FISHING_SC_SCROBOTBEHAVIOR",     // 同步机器人行为
}

//玩家操作
//开炮 OpCode:0 Params:{炮火的X方向,炮火的Y方向,子弹编号,子弹倍率}
//命中 OpCode:1 params:{子弹编号,鱼ID,鱼ID,鱼ID,鱼ID,鱼ID,鱼ID,鱼ID}
//切换倍率 OpCode:2 Params:{每一击金币数量}
//切换VIP鱼炮 OpCode:3 Params:{VIP}
//机器人开炮 OpCode:4 Params:{机器人ID,炮火的X方向,炮火的Y方向,子弹编号,子弹倍率}
//机器人命中 OpCode:5 params:{机器人ID,子弹编号,鱼ID,鱼ID,鱼ID,鱼ID,鱼ID,鱼ID,鱼ID}
//切后台 OpCode:6
//切前台 OpCode:7
//自动 OpCode:8 params:{自动}
//瞄准 OpCode:9 params:{瞄准}
//倍速 OpCode:10 params:{倍速}
//机器人瞄准 OpCode:11 params:{机器人ID,瞄准}
export enum FishPlayerOpCode {
    OpCodeFire = 0,
    OpCodeHit = 1,
    OpCodeChPower = 2,
    OpCodeChCannon = 3,
    OpCodeRobotFire = 4,
    OpCodeRobotHit = 5,
    OpCodeAutoFire = 8,
    OpCodeAim = 9,
    OpCodeFireSpeed = 10,
    OpCodeRobotAim = 11,
    OpCodeRobotChPower = 12,
    OpCodeRobotLeave = 14,
}