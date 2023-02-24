import { randomRangeInt } from "cc";

export class FishHappyAudioConfig {
    static BGM2          =      "FishHappy/sound/BGM2";                 // 选场音效
    static HIT           =      "FishHappy/sound/fishing_hit";			// 开炮
    static BIGWIN        =      "FishHappy/sound/fishing_bigwin";		// 暴富
    static DROPCOIN	     =      "FishHappy/sound/fishing_drop_coin";	// 掉金币
    static GETCOIN       =      "FishHappy/sound/fishing_get_coin";		// 获取金币
    static BOSSWARN	     =      "FishHappy/sound/fishing_boss_warn";	// boss出场警报
    static SHAKE         =      "FishHappy/sound/fishing_shake";		// 震屏
    static ZHADANYU 	 =      "FishHappy/sound/jubuzhadan";           // 炸弹鱼
    static LIGHTNING     =      "FishHappy/sound/fish-shandian";		// 同类鱼闪电
    static LOCKING       =      "FishHappy/sound/locking";				// 第一次锁定音效
    static LOCKING_CH    =      "FishHappy/sound/locking_ch";			// 锁定切换音效
    static CANNONRATE_CN =      "FishHappy/sound/qiehuanpaobei";	    // 炮台，炮倍切换音效

    //场景背景音乐
    static BGM = [				
        "FishHappy/sound/fishing_bgm_scene1", 		
        "FishHappy/sound/fishing_bgm_scene2", 		
        "FishHappy/sound/fishing_bgm_scene3", 		
        "FishHappy/sound/fishing_bgm_scene4", 		
        "FishHappy/sound/fishing_bgm_scene5", 		
        "FishHappy/sound/fishing_bgm_scene6", 		
        "FishHappy/sound/fishing_bgm_scene7", 		
        "FishHappy/sound/fishing_bgm_scene8", 		
        "FishHappy/sound/fishing_bgm_scene9", 		
    ]

    static getSceneBgm (): string | null {
        let num = FishHappyAudioConfig.BGM.length;
        if (num > 0) {
            let idx = randomRangeInt(0, num);
            return FishHappyAudioConfig.BGM[idx];
        }
        return null;
    }
}