export default class TalaDefine {
    public static ABName = "Tala";
    public static PfbLoading = "prefab/Loading";
    public static PfbSelect = "prefab/Select";
    public static PfbGame = "prefab/Game";
    public static PfbCard = "prefab/Card";

    public static MusicHall = 'pdk_bgm_hall';
    public static MusicGame = 'pdk_bgm_game';
    public static MusicWin = 'pdk_bgm_win';
    public static MusicLose = 'pdk_bgm_lose';
    public static SoundSelCard = 'select_card';
    public static SoundClick = 'click';
    public static SoundCoin = 'collect_coin';
    public static SoundCountdown = 'time_countdown';
    public static SoundYourTurn = 'yourturn';
    public static SoundTimeOut = 'daojishi';
    public static SoundDispatch = 'fapai';
    public static SoundDispatch2 = 'deal_card2';
    //加载界面最低时间,单位ms
    public static MinLoadingTime = 1500;
    //游戏开始倒计时，单位s
    public static DelayStartTime = 5;
    //游戏发牌时长，单位s
    public static DispatchCardTime = 3;
    //游戏出牌时长，单位s
    public static PlayCardTime = 30;
    //游戏结算倒计时，单位s
    public static GameBillTime = 3;
    //提示框显示时间
    public static TipTime = 1;
    //提示框渐变时间
    public static TipFadeTime = 0.3;
    //发牌等动画是否播放
    public static ShowAnimFlag = true;
}

export enum PlayerOp {
    NONE,
    EAT,
    DRAW,
    PLAY,
    COMBINE,
    SHOW,
    START
}