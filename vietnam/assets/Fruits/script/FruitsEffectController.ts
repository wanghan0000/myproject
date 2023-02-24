import { _decorator, Component } from "cc";
import { AudioMgr } from "../../ScriptCore/audio/AudioMgr";
import { FruitsUIMgr } from "../FruitsUIMgr";
import { FruitsBGMusic, getFruitsConfigByRate } from "./FruitsConfig";
import { FruitsEffectType } from "./FruitsEffectWin";
import FruitsItemAnimation from "./FruitsItemAnimation";
import { fruits } from "./protocol/fruits";


const { ccclass, property } = _decorator;

@ccclass('FruitsEffectController')
export class FruitsEffectController extends Component {

    private bean: fruits.ISCFruitsBilled = null;

    public spineFlag: boolean = false;

    @property(FruitsItemAnimation)
    fruitsItemAnimation: FruitsItemAnimation = null;

    hook: {
        end: () => void,
        spineFastEnd: () => void,
        spineStart: () => void,
        spineJackpotStart: () => void
    }

    setBean(bean:fruits.ISCFruitsBilled){
        this.bean = bean;
        this.spineFlag = false;
        if(bean){
            const { WinRate = 0 } = this.bean;
            const { type } = getFruitsConfigByRate(WinRate);
            this.spineFlag = type != -1 ? true : false;
        }
    }

    play() {
        if(this.bean){
            const { WinRate = 0 } = this.bean;
            const { type } = getFruitsConfigByRate(WinRate);
            this.spineFlag = type != -1 ? true : false;
            console.log('是否有spineFlag'+this.spineFlag)
            this.bean && this.playWin()
        }
    }

    async stop(){
        this.clearAllTime();
        if(this.bean){
            const { WinRate = 0 } = this.bean;
            const { fastActionEndTime, spineIndex } = getFruitsConfigByRate(WinRate);
            if (spineIndex != -1) {
                return;
            }
            //await this.delayTime(fastActionEndTime)
            this.spineFlag = false;
            this.bean = null;
            AudioMgr.getInstance().stopLongSound();
        }
    }

    //特效退出回调
    private async effectCallBack(type: FruitsEffectType, mode: string) {
        if (type <= FruitsEffectType.Super && mode == 'exit') {
            this.playJackpot();
        } else if (type == FruitsEffectType.Jackpot && mode == 'exit') {
            this.playMary();
        } else if (type == FruitsEffectType.Free) {
            this.end();
        }

        if(type <= FruitsEffectType.Super && mode == 'fast'){
            this.hook.spineFastEnd();
        }else if(type <= FruitsEffectType.Jackpot && mode == 'fast'){
            this.hook.spineFastEnd();
        }
    }

    //退出玛丽游戏
    private async exitMaryGame() {
        this.fruitsItemAnimation.pause = false;
        const { FreeTimes = 0 } = this.bean;
        if (FreeTimes) {
            this.playFree(true)
        } else {
            this.end();
        }
    }

    //播放win
    private async playWin() {
        const { WinRate = 0 , WinLineCoin = 0} = this.bean;
        const { actionWaitTime, type  ,sound} = getFruitsConfigByRate(WinRate);
        if(sound){
            AudioMgr.getInstance().playLongSound(sound);
        }
        await this.delayTime(actionWaitTime)
        this.hook.spineStart()
        if (type != -1 && WinLineCoin > 0 ) {
            await FruitsUIMgr.getInstance().showEffectUI(
                { coustomCallBack: this.effectCallBack.bind(this), type , bean: this.bean}
            );
          
        } else {
            this.playJackpot()
        }
    }

    //播放jackpot
    private async playJackpot() {
        const { WinJackpot } = this.bean;
        if (WinJackpot) {
            this.hook.spineJackpotStart();
            await FruitsUIMgr.getInstance().showEffectUI(
                { coustomCallBack: this.effectCallBack.bind(this), type: FruitsEffectType.Jackpot , bean:this.bean}
            );
        } else {
            this.playMary()
        }
    }

    //播放玛丽
    private async playMary() {
        const { MaryFreeTimes } = this.bean;
        if (MaryFreeTimes) {
            this.fruitsItemAnimation.pause = true;
            await FruitsUIMgr.getInstance().showMaryUI({ exitCallBack: this.exitMaryGame.bind(this) });
        } else {
            this.playFree(false);

        }
    }

    //播放免费
    private async playFree(freeShow: boolean) {
        const { WinFreeTimes } = this.bean;
        if (WinFreeTimes) {
            await FruitsUIMgr.getInstance().showEffectUI(
                { coustomCallBack: this.effectCallBack.bind(this), type: FruitsEffectType.Free, freeShow , bean: this.bean}
            );
        }else {
            this.end();
        }
    }

    private async end() {
        const { WinRate = 0 } = this.bean;
        const { actionWaitTime } = getFruitsConfigByRate(WinRate);
        this.spineFlag = false;
        await this.delayTime(actionWaitTime);
        this.hook.end();
        this.bean = null;
        this.clearAllTime();
    }

    onDestroy(){
        this.clearAllTime();
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
}