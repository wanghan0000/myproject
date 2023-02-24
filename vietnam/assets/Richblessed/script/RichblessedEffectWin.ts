
import { _decorator, v3, tween, Node, sp, UIOpacity, Label } from 'cc';
import { ModalOpacity } from '../../ScriptCore/UIFrame/config/SysDefine';
import { ModalType } from '../../ScriptCore/UIFrame/Struct';
import { UIPopup, UIWindow } from '../../ScriptCore/UIFrame/UIForm';
import { RichblessedRoomData, RoomModel } from './richblesseddata/RichblessedRoomData';
import { fruitsNumFormat, palyFruitsLableAnim, stopFruitsLableAnim } from './FruitsUtils';
import { getFruitsConfigByRate, SpecialWinConfig } from './RichblessedConfig';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';

export enum RichblessedEffectType {
    Small = 0,
    Middle,
    Big,
    Mega,
    Super,
    Free,
    Jackpot,
    JackGame
}

const { ccclass, property } = _decorator;

@ccclass('RichblessedEffectWin')
export class RichblessedEffectWin extends UIWindow {

    @property({ type: [sp.Skeleton] })
    spines: sp.Skeleton[] = [];

    private isClickFast = false;

    modalType = new ModalType(ModalOpacity.None, false);

    public async onShow(...params: any): Promise<void> {
        super.onShow(...params);

        const { type ,freeShow} = this.params[0];
        let { WinEleCoin = 0, WinJackpot, AddFreeNum , FreeNum,WinFreeTimes} = RichblessedRoomData.instance.billed;
        const WinRate = this.getWinRate();
        let config
        if (type <= RichblessedEffectType.Super) {
            //动画1 快速停止
            config = getFruitsConfigByRate(WinRate);
        } else if (type == RichblessedEffectType.Jackpot) {
            //jackpot 快速停止
            config = SpecialWinConfig.jockPot;
        } else if (type == RichblessedEffectType.Free) {
            config = SpecialWinConfig.freeGame;
        }else if(type == SpecialWinConfig.jackGame){
            config = SpecialWinConfig.jackGame;
        }
        const { textTime, actionEndTime, animation1, animation2, animation3, spineIndex ,sound} = config
        if(type > RichblessedEffectType.Super){
            // AudioMgr.getInstance().playLongSound(sound);
        }

        const spine = this.spines[spineIndex];
        if (spine) {
            if ((AddFreeNum && type == RichblessedEffectType.Free) || freeShow) {
                // if(freeShow){
                //     WinFreeTimes = FreeNum;
                // }
                spine.node.active = true;
                if (AddFreeNum > 0 && AddFreeNum <= 5) {
                    spine.setAnimation(0, animation1, false);
                } else if (AddFreeNum > 5 && AddFreeNum <= 10) {
                    spine.setAnimation(0, animation2, false);
                } else if (AddFreeNum >= 20) {
                    spine.setAnimation(0, animation3, false);
                }
                spine.setCompleteListener(async () => {
                    this.onExit();
                })
                return;
            }

            const lb = spine.node.getChildByName('Label').getComponent(Label);
            spine.node.active = lb.node.active = true;
            // lb.node.active = type != RichblessedEffectType.Super;
            spine.setAnimation(0, animation1, false);
            // console.log('文本滚动时长:' + textTime);
            if(type != RichblessedEffectType.Super){
                lb.string = '0';
                palyFruitsLableAnim({
                    target: WinEleCoin,
                    lable: lb,
                    format: true,
                    time: textTime
                });
            }else{
                lb.string = '';
            }

            spine.setCompleteListener(async () => {
                if(animation2){
                    spine.setAnimation(0, animation2, true);
                }
            })
        }
        await this.delayTime(actionEndTime)
        if (this.isClickFast) {
            return;
        }
        this.onExit();
    }

    private getWinRate(){
        let winRate = 0;
        const bean = RichblessedRoomData.instance.billed;
        const {BetIdx,WinEleCoin} = bean;
        const BetMoney = RichblessedRoomData.instance.BetMoney;
        winRate = Math.floor( WinEleCoin / BetMoney[BetIdx]);
        console.log('-----------------------------------------------赢的钱:' + WinEleCoin + ',下注金额:' + BetMoney[BetIdx],',winRate:' + winRate);
        return winRate;
    }

    public async showEffect(): Promise<boolean> {
        return null;
    }

    public async hideEffect(): Promise<boolean> {
        const opactiy = this.node.getComponent(UIOpacity);
        return new Promise<boolean>((resolve, reject) => {
            tween(opactiy)
                .to(0.5, { opacity: 0 })
                .call(() => {
                    resolve(true)
                })
                .start()
        })
    }

    async clickPage() {
        if (this.isClickFast) {
            return
        }

        const { type, coustomCallBack } = this.params[0];
        if (type == RichblessedEffectType.Free || type == RichblessedEffectType.JackGame) {
            return
        }
        this.isClickFast = true;
        coustomCallBack && coustomCallBack(type, 'fast');
        const {WinEleCoin = 0, WinJackpot } = RichblessedRoomData.instance.billed;
        const WinRate = this.getWinRate();
        let config
        if (type <= RichblessedEffectType.Super) {
            //动画1 快速停止
            config = getFruitsConfigByRate(WinRate);
        } else if (type == RichblessedEffectType.Jackpot) {
            //jackpot 快速停止
            config = SpecialWinConfig.jockPot;
        }
        if (config) {
            const { animation2, spineIndex, fastActionEndTime } = config;
            const spine = this.spines[spineIndex];
            if(!spine)return;
            const label = spine.node.getChildByName('Label').getComponent(Label);
            spine.node.active = label.node.active = true;
            spine.setAnimation(0, animation2, false);

            label.string = '';
            if(type != RichblessedEffectType.Super)
                stopFruitsLableAnim(label);

            if (WinEleCoin && type <= RichblessedEffectType.Super) {
                label.string = fruitsNumFormat(WinEleCoin)
                if(type == RichblessedEffectType.Super)
                    label.string = '';
            } else if (WinJackpot && type == RichblessedEffectType.Jackpot) {
                label.string = fruitsNumFormat(WinJackpot)
            }

            await this.delayTime(fastActionEndTime)
            this.onExit();
        }
    }

    private delayTimes: any[] = [];
    private delayTime(time: number) {
        return new Promise((reject) => {
            const id = setTimeout(() => {
                reject(true)
            }, time * 1000);
            this.delayTimes.push(id);
        })
    }

    private clearAllTime() {
        this.delayTimes.forEach((v) => {
            clearTimeout(v);
        })
        this.delayTimes.length = 0;
    }

    private async onExit() {
        try {
            this.clearAllTime();
            AudioMgr.getInstance().stopLongSound();
            const { coustomCallBack, type } = this.params[0];
            await this.closeSelf();
            coustomCallBack && coustomCallBack(type, 'exit');
        } catch (error) {
            this.closeSelf();
        }
    }


}
