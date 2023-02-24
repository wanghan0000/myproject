
/**
 * 事件名定义
 */

export namespace EventName {

    //客户端收到服务器回复的权限认证成功
    export const SC_Auth_Ack = "SC_Auth_Ack";

    export const SC_Login = "SC_Login";

    export const SC_Register = "SC_Register";

    export const SC_Logout = "SC_Logout";
    export const SC_Disconnect = "SC_Disconnect";
    export const SC_PlayerData = "SC_PlayerData";
    export const SC_PlayerFlagUpdate = "SC_PlayerFlagUpdate";
    export const SC_PlayerQuery = "SC_PlayerQuery";

    export const SC_EnterGame = "SC_EnterGame";

    export const SC_EnterRoom = "SC_EnterRoom";

    export const SC_ReturnRoom = "SC_ReturnRoom";

    //创建房间
    export const SC_CREATEROOM = "SC_CREATEROOM";
    //查询房间
    export const SC_QUERYROOM = "SC_QUERYROOM";

    //旁观入桌
    export const SC_AUDIENCE_SIT = "SC_AUDIENCE_SIT";

    //这个是游戏内的金币发生变化的数据更新
    export const SC_Player_Coin_Change = "SC_Player_Coin_Change";


    export const SC_Game_JackPot_Change = "SC_Game_JackPot_Change";

    export const SC_QUIT_GAME = "SC_QUIT_GAME";

    export const SC_HUNDRED_PLAYER_HISTORY = "SC_HUNDRED_PLAYER_HISTORY";

    export const SC_HUNDRED_BIGWIN_HISTORY = "SC_HUNDRED_BIGWIN_HISTORY";

    //小游戏奖池数据变化
    export const SC_Mini_Jackpot_Change = "SC_Mini_Jackpot_Change";

    //获取到游戏gameId对应的游戏配置的时候发送的通知
    export const SC_GET_GAME_CONFIG = "SC_GET_GAME_CONFIG";

    //小游戏进入
    export const SC_MNGAME_ENTER = "SC_MNGAME_ENTER";

    //离开小游戏
    export const SC_MNGAME_EXIT = "SC_MNGAME_EXIT";

    //全局金币变化都要发送这个消息 一般用于大厅的金币或者钻石发生变化的时候更新数据
    export const SC_USER_GOLD_CHANGE = "SC_USER_GOLD_CHANGE";

    //选场
    export const SC_GAMESUBLIST = "SC_GAMESUBLIST";
    export const SC_GAMESTATE = "SC_GAMESTATE";

    //网络连接成功
    export const Socket_connect_open = "Socket_connect_open";
    //连接发生错误
    export const Socket_connect_Error = "Socket_connect_Error";
    //连接关闭
    export const Socket_Connect_close = "Socket_Connect_close";

    //完全连接成功
    export const Reconnect_complete = "Reconnect_complete";

    //万人场获取人数
    export const SC_BRMODE_PLAYERNUM = "SC_BRMODE_PLAYERNUM";

    //获取场次人数
    export const SC_FREEMODE_PLAYERNUM = "SC_FREEMODE_PLAYERNUM";

    //更新选场中入场限制
    export const SC_SYNCGAMEFREE = "SC_SYNCGAMEFREE";

    //游戏开关
    export const SC_CHANGE_GAMESTATUS = "SC_CHANGE_GAMESTATUS";

    //loading出场动画播放完成
    export const ON_LOADING_ANI_COMPLETED = "ON_LOADING_ANI_COMPLETED";

    //从房间离开游戏
    export const SC_LeaveRoom = "SC_LeaveRoom";


    //收到商城数据的消息广播
    export const SC_SHOPINFO = "SC_SHOPINFO";
    //商城兑换的消息
    export const SC_SHOP_VCPAYSHOP = "SC_SHOP_VCPAYSHOP";

    //观看广告的消息回调
    export const SC_SHOP_ADLOOKED = "SC_SHOP_ADLOOKED";

    //背包的消息
    export const SC_ALL_BAG_INFO = "SC_ALL_BAG_INFO";
    //背包的使用
    export const SC_ALL_BAG_USE = "SC_ALL_BAG_USE";

    //宠物和角色的消息
    //共用
    export const SC_ROLEPETUSEOP = "SC_ROLEPETUSEOP";
    export const SC_ROLEPETUNLOCK = "SC_ROLEPETUNLOCK";
    //宠物
    export const SC_PET_INFO = "SC_PET_INFO";
    export const SC_PET_RISINGSTAR = "SC_PET_RISINGSTAR";
    //角色
    export const SC_ROLE_INFO = "SC_ROLE_INFO";
    export const SC_ROLE_RISINGSTAR = "SC_ROLE_RISINGSTAR";

    //设置兑换
    export const ALL_SETTING = "ALL_SETTING";

    //消息列表
    export const SC_MESSAGELIST = "SC_MESSAGELIST";
    //读取邮件
    export const SC_MESSAGEREAD = "SC_MESSAGEREAD";
    //领取附件
    export const SC_GETMESSAGEATTACH = "SC_GETMESSAGEATTACH";
    //删除附件
    export const SC_MESSAGEDEL = "CS_MESSAGEDEL";

    //领取救济金的数据
    export const SC_WELF_GETRELIEFFUND = "SC_WELF_GETRELIEFFUND";
    //每日签到数据更新
    export const SC_SIGN_UPDATE = "SC_SIGN_UPDATE";

    export const SC_SHOP_EXCHANGERECORD = "SC_SHOP_EXCHANGERECORD"; //兑换记录
    export const SC_SHOP_EXCHANGE = "SC_SHOP_EXCHANGE"; //兑换
    export const SC_SHOP_EXCHANGELIST = "SC_SHOP_EXCHANGELIST"; //兑换物品列表

    //个人信息
    export const SC_MYINFO_COMNOTICE = "SC_MYINFO_COMNOTICE";


    //还有列表的数据
    export const SCFriendList = "SCFriendList";

    //好友列表的数据
    export const BAG_SEND_FRIEND_LIST = "BAG_SEND_FRIEND_LIST";

    //红点的数据变化
    export const RED_DOT_NOTIFY = "RED_DOT_NOTIFY";

    //背包数据发生变化发送的通知
    export const BAG_DATA_ASYNC_NOTIFY = "BAG_DATA_ASYNC_NOTIFY";


    //登录界面关闭 login界面关闭
    export const LOGINFAST_CLOSE = "LOGINFAST_CLOSE";

    //第三方游戏
    export const ENTER_THIRD_PARTY_GAME = "ENTER_THIRD_PARTY_GAME";
    export const LEAVE_THIRD_PARTY_GAME = "LEAVE_THIRD_PARTY_GAME";


    //多语言发生变化的时候
    export const I18N_CHANGED_NOTIFY = "I18N_CHANGED_NOTIFY";

    //转盘 7日签到数据
    export const SC_WELF_WELFAREINFO = "SC_WELF_WELFAREINFO";
    //转动转盘
    export const SC_WELF_GETTURNPLATE = "SC_WELF_GETTURNPLATE";
    //累计签到
    export const SC_WELF_GETADDUPSIGN = "SC_WELF_GETADDUPSIGN";
    //盲盒
    export const SC_WELF_BLINBOXINFO = "SC_WELF_BLINBOXINFO";
    //领取盲盒
    export const SC_WELF_GETBLINBOX = "SC_WELF_GETBLINBOX";
    //超值首充
    export const SC_WELF_FIRSTPAYINFO = "SC_WELF_FIRSTPAYINFO";
    //超值首充购买
    export const SC_WELF_FIRSTPAY = "SC_WELF_FIRSTPAY";

    //vip信息
    export const SC_VIPINFO = "SC_VIPINFO";
    //vip充值
    export const SC_VIPBUY = "SC_VIPBUY";
    //vip领取
    export const SC_DRAWVIPGIFT = "SC_DRAWVIPGIFT";

    //连充礼包信息
    export const SC_WELF_CONTINPAYINFO = "SC_WELF_CONTINPAYINFO";
    //连充礼包领取
    export const SC_WELF_CONTINPAY = "SC_WELF_CONTINPAY";
}
/**
 * 小游戏被踢出的原因
 */
export namespace GameLevelReason {
    //玩家主动退出离开
    export const PlayerLeaveReason_Normal = 0;
    //玩家 钱不够，被踢出
    export const PlayerLeaveReason_Bekickout = 1;
    //房间销毁，强制踢出
    export const PlayerLeaveReason_OnDestroy = 2;
    //玩家暂离金豆自由场
    export const PlayerLeaveReason_CoinScene = 3;
    //玩家换桌
    export const PlayerLeaveReason_ChangeCoinScene = 4;
    //结算完毕
    export const PlayerLeaveReason_OnBilled = 5;
    //掉线离开
    export const PlayerLeaveReason_DropLine = 6;
    //长时间未操作
    export const PlayerLeaveReason_LongTimeNoOp = 7;

    //超过游戏次数被强制离开
    export const PlayerLeaveReason_GameTimes = 8;
    //房间已经达到上限
    export const PlayerLeaveReason_RoomFull = 9;
}

export namespace OPRC_ERROR_CODE {
    export const OPRC_Sucess = 0; //成功
    export const OPRC_Error = 1; //失败
    export const OPRC_LoginFailed = 1000; //登录失败
    export const OPRC_LoginSignErr = 1001; //签名错误
    export const OPRC_LoginOtherPlace = 1002; //在其他地方登录
    export const OPRC_LoginPassError = 1003; //密码错误
    export const OPRC_Login_CreateAccSuccess = 1004;
    export const OPRC_Login_CreateAccError = 1005;
    export const OPRC_Login_NameLang = 1006; //名字太长
    export const OPRC_Login_NameSame = 1007; //名字已被使用
    export const OPRC_Login_NameError = 1008; //名字中有非法字符
    export const OPRC_Login_CreateFailed = 1009; //创建角色失败
    export const OPRC_AccountBeFreeze = 1010; //账号被冻结
    export const OPRC_YourResVerIsLow = 1044; //资源版本过低
    export const OPRC_YourAppVerIsLow = 1045; //APK版本过低
    export const OPRC_SceneServerMaintain = 1054; //服务器维护中,请稍后创建
    export const OPRC_TelError = 1065; //手机号不正确
}