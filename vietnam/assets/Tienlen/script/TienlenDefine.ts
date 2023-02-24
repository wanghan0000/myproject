import { Color } from "cc";
import { I18nMgr } from "../../ScriptCore/i18n/I18nMgr";

export default class TienlenDefine {
    public static ABName = "Tienlen";
    public static PrefabLoadingName = "prefab/Loading";
    public static PrefabSelectName = "scenesel3d/prefab/prefab_scenesel3d";
    public static PrefabMatchName = "prefab/match/MatchSelect";
    public static PrefabEnrollName = "prefab/match/MatchEnroll";
    public static PrefabMatchWaitName = "prefab/match/MatchWaiting";
    public static PrefabMatchPromotionName = "prefab/match/MatchPromotion";
    public static PrefabGameName = "prefab/Game";
    public static PrefabMatchGameName = "prefab/MatchGame";
    public static PrefabGameTips = "prefab/TienlenTips";
    public static PrefabCard = "prefab/Card";
    public static PrefabBomb = "prefab/spine/SpineBomb";
    public static PrefabFirst = "prefab/spine/SpineFirst";
    public static PrefabPair = "prefab/spine/SpineStraightPair";
    public static PrefabPlane = "prefab/spine/SpinePlane";
    public static PrefabEnter = "prefab/spine/SpineEnter";
    public static PrefabRecommendList = "prefab/friend/WndRecommendList";
    public static PrefabSocial = "prefab/friend/WndSocial";
    public static PrefabUserInfo = "prefab/friend/WndUserInfo";
    public static PrefabSocialTips = "prefab/friend/WndSocialTips";
    public static PrefabSocialTips3 = "prefab/friend/WndSocialTips3";
    public static PrefabEmotion = "prefab/friend/WndEmotion";
    public static PrefabInviteList = "prefab/friend/WndInviteList";
    public static PrefabInvite = "prefab/friend/WndSocialTips2";
    public static PrefabSign = "prefab/sign/WndSign";
    public static PrefabGetCoin = "prefab/common/WndGotCoin";
    public static PrefabWndGrade = "prefab/common/WndGotCoin";
    public static MusicHall = 'pdk_bgm_hall';
    public static MusicGame = 'pdk_bgm_game';
    public static MusicWin = 'pdk_bgm_win';
    public static MusicLose = 'pdk_bgm_lose';
    public static SoundBomb = 'pdk_bomb';
    public static SoundClick = 'click';
    public static SoundCoin = 'collect_coin';
    public static SoundDispatch = 'fapai';
    public static SoundDispatch2 = 'deal_card2';
    public static SoundPlayCard = 'chupai';
    public static SoundPass = 'pass';
    public static SoundSelCard = 'select_card';
    public static SoundCountdown = 'time_countdown';
    public static SoundYourTurn = 'yourturn';
    public static SoundTimeOut = 'daojishi';
    public static SoundCardType1 = "danzhang"
    public static SoundCardType2 = "dui"
    public static SoundCardType3 = "shunzi"
    public static SoundCardType4 = "shunzi"
    public static SoundCardType5 = "liandui"
    public static SoundCardType6 = "sanzhang"
    public static SoundCardType8 = "shunzi" //3顺没有对应音效，暂用顺子音效
    public static SoundCardType7 = "pdk_bomb"
    public static SoundCardType9 = "3and1"
    public static SoundCardType10 = "3and2"
    public static SoundCardType11 = "feiji"
    public static SoundYapai = "yapai"

    public static SoundMatchEnter = "match/jinru"
    public static SoundMatchReturnList = "match/fanhuiliebiao"
    public static SoundMatchWaiting = "match/pipei"
    public static SoundMatchEnterGame = "begin"
    public static SoundMatchPromotion = "jinji"
    public static SoundMatchNO1 = "banjiang1"
    public static SoundMatchNO23 = "banjiang23"
    public static SoundMatchNO0 = "banjiang0"
    public static SoundMatchDrop = "match/boxdiaoluo"
    public static MusicMatchBGM = "match/bgm"

    //加载界面最低时间,单位ms
    public static MinLoadingTime = 1500;
    //游戏开始倒计时，单位s
    public static DelayStartTime = 10;
    //游戏发牌时长，单位s
    public static DispatchCardTime = 3;
    //游戏出牌时长，单位s
    public static PlayCardTime = 15;
    //游戏结算倒计时，单位s
    public static GameBillTime = 3;
    //提示框显示时间
    public static TipTime = 1;
    //提示框渐变时间
    public static TipFadeTime = 0.3;
    //发牌等动画是否播放
    public static ShowAnimFlag = true;
    //表情数量
    public static EmotionNum = 21;
    //关闭按钮点击延迟时间
    public static CloseDelayTime: number = 1000;

    //public static StrSearchHelp = '1. 输入玩家昵称/ID,可精确搜索到玩家\n2. 可输入部分信息,模糊搜索玩家,输入字符必须≥3'
    public static StrSearchHelp = "tienlen.tienlen_StrSearchHelp"

    //public static GameModeStrList = ['经典玩法', '娱乐玩法', '经典打到底', '娱乐打到底'];
    public static GameModeStr0List = ['tienlen.jingdianwanfaTxt', 'tienlen.jindiandadaodiTxt'];
    public static GameModeStr1List = ['tienlen.yulewanfaTxt', 'tienlen.yuledaodiTxt'];

    public static RoomModeStrList = ['公共房', '私人房', "", "比赛场"];

    //public static MainRankStrList = ["", "玄铁", "青铜", "白银", "黄金", "铂金", "钻石", "斗神"];
    public static MainRankStrList = ["", 
                                     "tienlen.xuantieTxt", 
                                     "tienlen.qingtongTxt", 
                                     "tienlen.baiyinTxt", 
                                     "tienlen.huangjinTxt", 
                                     "tienlen.bojinTxt", 
                                     "tienlen.zuanshiTxt", 
                                     "tienlen.doushenTxt"
                                    ];

    public static SubRankStrList = ["", "I", "II", "III", "IV", "V"];
    public static WinColor = new Color('#F5E20D');
    public static FailColor = new Color('#075CF5');

    public static UIEVENT_REFRESHROLE = "UIEVENT_REFRESHROLE";
    public static UIEVENT_REFRESHPET = "UIEVENT_REFRESHPET";

    public static SELECT_ROLE_SOUND = "role";
    public static SELECT_HAILANG = "hailang";
    public static ROLEUPLEVEL = "uplv";

    public static TIENLEN_VIP_TURN = "zhuandong";
    public static TIENLEN_FIRSTCHARGE_SHOUCHONG = "shouchong";
    public static TIENLEN_BLINDBOX_SHUAXIN = "blindbox_shuaxin";
    public static TIENLEN_BLINDBOX_YAOHUANG = "blindbox_yaohuang";
}

enum SignAwardType {
    Gold = 1,
    Diamond,
    Item
}

export enum ItemIconType {
    GOLD,
    DIAMOND,
    VCARD,
    CHICKEN,
    BOY,
    GIRL,
    TICKET
}