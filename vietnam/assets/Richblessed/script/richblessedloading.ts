/*
 * @Description: 
 * @Author: Super_Javan
 * @Date: 2022-11-30 14:36:12
 * @LastEditTime: 2023-01-13 20:19:46
 * @LastEditors: super_javan 296652579@qq.com
 */

import { _decorator } from 'cc';
import { EventMgr } from '../../ScriptCore/events/eventmgr';
import { BaseGameLoading } from '../../ScriptCore/games/basegameloading';
import { ResMgr, ResType } from '../../ScriptCore/UIFrame/ResMgr';
import { reslist } from '../reslist';
import { FruitsGameEventName } from './configs/fruitsgameeventname';
const { ccclass } = _decorator;

@ccclass('RichblessedLoading')
export class RichblessedLoading extends BaseGameLoading {
    private completedCb: Function = null;

    onShow(...params: any) {
        super.onShow(...params);
    }

    onHide() {
        super.onHide();
        EventMgr.getInstance().removeByTarget(this);
    }

    onLoadProgress(val: number) {
        let valn = val * 0.95;
        this.updateProgress(val)
    }

    startRuChangFake(cb: Function, completedCb: Function) {
        this.scheduleOnce(() => {
            if (cb != null) {
                cb();
            }
            this.loadRes();
            this.completedCb = completedCb;
        }, 1);
    }

    loadRes(){
        // let list = reslist;
        //先加载游戏需要使用的部分预设资源和音乐
        let reslist: Map<string, number> = new Map<string, number>([
            ["Richblessed/pfb_room_ui", 4],
            ["Richblessed/prefab/pfb_richblessed_game_ui",4],
            ["Richblessed/prefab/pfb_richblessed_effect_ui",4],
            ["Richblessed/prefab/pfb_richblessed_help_ui",4],
            ["Richblessed/prefab/pfb_richblessed_item",4],
            ["Richblessed/texture/images/fruitConis",2],
            ["Richblessed/texture/images/mianfeibg",1],
            ["Richblessed/texture/images/bg",1],
            ["Richblessed/texture/images/yuanbao",1],
            ["Richblessed/texture/images/jackjinbi",1],
            ["Richblessed/texture/images/sum_blue",1],
            ["Richblessed/texture/images/sum_green",1],
            ["Richblessed/texture/images/sum_pop",1],
            ["Richblessed/texture/images/sum_red",1],
            ["Richblessed/prefab/pfb_richblessed_toast_ui",4],

            ["Richblessed/texture-zh/miniorjackpot",1],
            ["Richblessed/texture-en/miniorjackpot",1],
            ["Richblessed/texture-kh/miniorjackpot",1],
            ["Richblessed/texture-vi/miniorjackpot",1],

            ["Richblessed/texture-zh/grandjackpot",1],
            ["Richblessed/texture-en/grandjackpot",1],
            ["Richblessed/texture-kh/grandjackpot",1],
            ["Richblessed/texture-vi/grandjackpot",1],

            ["Richblessed/texture-zh/minijackpot",1],
            ["Richblessed/texture-en/minijackpot",1],
            ["Richblessed/texture-kh/minijackpot",1],
            ["Richblessed/texture-vi/minijackpot",1],

            ["Richblessed/texture-zh/majorjackpot",1],
            ["Richblessed/texture-en/majorjackpot",1],
            ["Richblessed/texture-kh/majorjackpot",1],
            ["Richblessed/texture-vi/majorjackpot",1],

            ["Richblessed/sound/BGM01",3],
            ["Richblessed/sound/BGM02",3],
            ["Richblessed/sound/BGM03",3],
            ["Richblessed/sound/BGM04",3],
            ["Richblessed/sound/bigWin",3],
            ["Richblessed/sound/click",3],
            ["Richblessed/sound/freeSound",3],
            ["Richblessed/sound/freeSum",3],
            ["Richblessed/sound/fu",3],
            ["Richblessed/sound/jackPot",3],
            ["Richblessed/sound/line",3],
            ["Richblessed/sound/luo",3],
            ["Richblessed/sound/megaWin",3],
            ["Richblessed/sound/openCard",3],
            ["Richblessed/sound/ordinary",3],
            ["Richblessed/sound/stop",3],
            ["Richblessed/sound/super",3],
        ]);
        let resType: Map<ResType, boolean> = new Map();
        resType.set(ResType.ResType_Prefab, true);
        resType.set(ResType.ResType_SpriteAtlas, true);
        resType.set(ResType.ResType_AudioClip, true);
        resType.set(ResType.ResType_SpriteFrame, true);
        ResMgr.getInstance().preLoad(reslist, this.onLoadProgress.bind(this), this.onLoadResourceComplete.bind(this), resType);
    }

    async onLoadResourceComplete() {
        const time = Date.now();
        if (this.completedCb != null) {
            this.completedCb();
        }
        this.closeSelf();
    }
}
