import { EventComponent } from '../../../ScriptCore/events/eventcomponent';
import { FishGameControl } from '../fishgamecontrol';

export class FishHappyConstants {
    static gameCtrl: FishGameControl;
    static eventMgr: EventComponent;
    static GameId_FishingHappy = 23;
    static TOTAL_MAP_COUNTS = 3;
    static PLAYERCOUNT = 4;
    static PER_UPDATE_DEALL_EVENT = 5;
    static FIRE_AUTO_INTERVAL = 0.2;
    static BULLET_LIMIT_NUM = 30;
    static FISH_SPEED_PERCENT = 1.2;
    static FISHING_EVENT_NET = 1;		 // 一网打尽
    static FISHING_EVENT_BOMB = 10001;   // 炸弹鱼
    static FISHING_EVENT_CHAIN = 10004;  // 闪电鱼
    static BOMB_RADIUS = 720;	// 核弹 炸弹鱼效果范围
    static CHAIN_RADIUS = 640;  // 闪电鱼效果范围
    static PLAYER_CLIENT_POS0 = 0;
    static PLAYER_CLIENT_POS1 = 1;
    static PLAYER_CLIENT_POS2 = 2;
    static PLAYER_CLIENT_POS3 = 3;
    static FISHLAYER_COUNT = 6;
}