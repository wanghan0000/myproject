
import { _decorator, v3, tween, Node, sp, UIOpacity, Label } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { ModalOpacity } from '../../ScriptCore/UIFrame/config/SysDefine';
import { ModalType } from '../../ScriptCore/UIFrame/Struct';
import { UIPopup, UIWindow } from '../../ScriptCore/UIFrame/UIForm';
import { getFruitsConfigByRate, SpecialWinConfig } from './FruitsConfig';
import { FruitsRoomData } from './fruitsdata/FruitsRoomData';
import { fruitsNumFormat, palyFruitsLableAnim, stopFruitsLableAnim } from './FruitsUtils';

export enum FruitsEffectType {
    Small = 0,
    Middle,
    Big,
    Mega,
    Super,
    Free,
    Jackpot,
    Mary,
}

const { ccclass, property } = _decorator;

@ccclass('FruitsEffectWin')
export class FruitsEffectWin extends UIWindow {

    @property({ type: [sp.Skeleton] })
    spines: sp.Skeleton[] = [];

    private isClickFast = false;

    private bean: any = null;

    modalType = new ModalType(ModalOpacity.None, false);

    public async onShow(...params: any): Promise<void> {
        super.onShow(...params);

        try {
            const { type ,freeShow , bean} = this.params[0];
            this.bean = bean;
            let { WinRate = 0, WinLineCoin = 0, WinJackpot, WinFreeTimes , FreeTimes , MaryOutTotalWin = 0, MaryMidTotalWin = 0 } = this.bean;
            const winCoin = MaryOutTotalWin + MaryMidTotalWin
            let config
            if (type <= FruitsEffectType.Super) {
                //动画1 快速停止
                config = getFruitsConfigByRate(WinRate);
            } else if (type == FruitsEffectType.Jackpot) {
                //jackpot 快速停止
                config = SpecialWinConfig.jockPot;
            } else if (type == FruitsEffectType.Free) {
                config = SpecialWinConfig.freeGame;
            } else if (type == FruitsEffectType.Mary) {
                config = SpecialWinConfig.maryGame;
            }
            const { textTime, actionEndTime, animation1, animation2, animation3, spineIndex ,sound} = config
            if(type > FruitsEffectType.Super){
                AudioMgr.getInstance().playLongSound(sound);
            }
            const spine = this.spines[spineIndex];
            if (spine) {
                if ((WinFreeTimes && type == FruitsEffectType.Free) || freeShow) {
                    if(freeShow){
                        WinFreeTimes = FreeTimes;
                    }
                    spine.node.active = true;
                    if (WinFreeTimes > 0 && WinFreeTimes <= 5) {
                        spine.setAnimation(0, animation1, false);
                    } else if (WinFreeTimes > 5 && WinFreeTimes <= 10) {
                        spine.setAnimation(0, animation2, false);
                    } else {
                        spine.setAnimation(0, animation3, false);
                    }
                    spine.setCompleteListener(async () => {
                        this.onExit();
                    })
                    return;
                }
                const lb = spine.node.getChildByName('Label').getComponent(Label);
                spine.node.active =
                    lb.node.active = true;
                spine.setAnimation(0, animation1, false);
                lb.string = '0';
                const targetCoin = type == FruitsEffectType.Mary ? winCoin : WinLineCoin;
                palyFruitsLableAnim({
                    target: targetCoin,
                    lable: lb,
                    format: true,
                    time: textTime
                });
                spine.setCompleteListener(async () => {
                    spine.setAnimation(0, animation2, true);
                })
            }
            await this.delayTime(actionEndTime)
            if (this.isClickFast) {
                return;
            }
            this.onExit();
        } catch (error) {
            this.onExit();
        }
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
        try {
            if (this.isClickFast) {
                return
            }
    
            const { type, coustomCallBack } = this.params[0];
            if (type == FruitsEffectType.Free || type == FruitsEffectType.Mary) {
                return
            }
            this.isClickFast = true;
            coustomCallBack && coustomCallBack(type, 'fast');
            const { WinRate = 0, WinLineCoin = 0, WinJackpot } = this.bean;
            let config
            if (type <= FruitsEffectType.Super) {
                //动画1 快速停止
                config = getFruitsConfigByRate(WinRate);
            } else if (type == FruitsEffectType.Jackpot) {
                //jackpot 快速停止
                config = SpecialWinConfig.jockPot;
            }        
            if (config) {
                const { animation2, spineIndex, fastActionEndTime } = config;
                const spine = this.spines[spineIndex];
                const label = spine.node.getChildByName('Label').getComponent(Label);
                spine.node.active =
                    label.node.active = true;
                spine.setAnimation(0, animation2, false);
                stopFruitsLableAnim(label);
                if (WinLineCoin && type <= FruitsEffectType.Super) {
                    label.string = fruitsNumFormat(WinLineCoin)
                } else if (WinJackpot && type == FruitsEffectType.Jackpot) {
                    label.string = fruitsNumFormat(WinJackpot)
                }
                await this.delayTime(fastActionEndTime)
                this.onExit();
            }
        } catch (error) {
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
            const { coustomCallBack, type } = this.params[0];
            AudioMgr.getInstance().stopLongSound();
            await this.closeSelf();
            coustomCallBack && coustomCallBack(type, 'exit');
        } catch (error) {
            this.closeSelf();
        }
       
    }

    onDestroy(){
        this.clearAllTime();
    }

}
