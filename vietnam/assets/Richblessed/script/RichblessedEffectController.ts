import { _decorator, Component ,Node, sp} from "cc";
import { AudioMgr } from "../../ScriptCore/audio/AudioMgr";
import { RichblessedUIMgr } from "../RichblessedUIMgr";
import { getFruitsConfigByRate, SpecialWinConfig } from "./RichblessedConfig";
import { RichblessedEffectType } from "./RichblessedEffectWin";
import { richblessed } from "./protocol/richblessed";
import { EventMgr } from "../../ScriptCore/events/eventmgr";
import { FruitsGameEventName } from "./configs/fruitsgameeventname";
import { RichblessedRoomData } from "./richblesseddata/RichblessedRoomData";


const { ccclass, property } = _decorator;

@ccclass('RichblessedEffectController')
export class RichblessedEffectController extends Component {
    @property(Node)
    enterJackSp: Node = null;

    private bean: richblessed.ISCRBBilled = null;

    public spineFlag: boolean = false;

    onLoad(){
        EventMgr.getInstance().addEventListener(FruitsGameEventName.GAME_CLOSE_JACKGAME, this.exitJackGame, this);
    }

    hook: {
        end: () => void,
        spineFastEnd: () => void,
        spineStart: () => void,
        spineJackpotStart: () => void
    }

    setBean(bean:richblessed.ISCRBBilled){
        this.bean = bean;
        this.spineFlag = false;
        if(bean){
            // const { WinRate = 0 } = this.bean;
            const WinRate = this.getWinRate();
            const { type } = getFruitsConfigByRate(WinRate);
            this.spineFlag = type != -1 ? true : false;
        }
    }

    play() {
        if(this.bean){
            // const { WinRate = 0 } = this.bean;
            const WinRate = this.getWinRate();
            const { type } = getFruitsConfigByRate(WinRate);
            this.spineFlag = type != -1 ? true : false;
            // console.log('是否有spineFlag'+this.spineFlag)
            this.bean && this.playWin()
        }
    }

    async stop(){
        this.clearAllTime();
        if(this.bean){
            // const { WinRate = 0 } = this.bean;
            const WinRate = this.getWinRate();
            const { fastActionEndTime, spineIndex } = getFruitsConfigByRate(WinRate);
            if (spineIndex != -1) {
                return;
            }
            //await this.delayTime(fastActionEndTime)
            this.spineFlag = false;
            // this.bean = null;
            AudioMgr.getInstance().stopLongSound();
        }
    }

    //特效退出回调
    private async effectCallBack(type: RichblessedEffectType, mode: string) {
        if (type <= RichblessedEffectType.Super && mode == 'exit') {
            this.playJackpot();
        } else if (type == RichblessedEffectType.Jackpot && mode == 'exit') {
            this.playJackGame();
        } else if (type == RichblessedEffectType.Free) {
            this.end();
        }

        if(type <= RichblessedEffectType.Super && mode == 'fast'){
            this.hook.spineFastEnd();
        }else if(type <= RichblessedEffectType.Jackpot && mode == 'fast'){
            this.hook.spineFastEnd();
        }
    }

    //退出jack小游戏
    private async exitJackGame() {
        if(this.enterJackSp){
            let spine:sp.Skeleton = this.enterJackSp.getComponent(sp.Skeleton);
            if(spine){
                let spineCnf = SpecialWinConfig.jackGame;
                spine.setAnimation(0, spineCnf.animation1, true);
            }
        }

        if(!this.bean)return;
        const { AddFreeNum = 0 } = this.bean;
        if (AddFreeNum) {
            this.playFree(true)
        } else {
            this.end();
        }
    }

    private getWinRate(){
        let winRate = 0;
        const {BetIdx,WinEleCoin} = this.bean;
        const BetMoney = RichblessedRoomData.instance.BetMoney;
        winRate = Math.floor( WinEleCoin / BetMoney[BetIdx]);
        console.log('-----------------------------------------------赢的钱:' + WinEleCoin + ',下注金额:' + BetMoney[BetIdx],',winRate:' + winRate);
        return winRate;
    }

    //播放win
    private async playWin() {
        const { WinEleCoin = 0 } = this.bean;
        const WinRate = this.getWinRate();
        const { actionWaitTime, type  ,sound} = getFruitsConfigByRate(WinRate);
        if(sound){
            AudioMgr.getInstance().playLongSound(sound);
        }
        this.hook.spineStart()
        if (type != -1 && WinEleCoin > 0) {
            console.log('所以type : ' + type)
            await RichblessedUIMgr.getInstance().showEffectUI(
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
            await RichblessedUIMgr.getInstance().showEffectUI(
                { coustomCallBack: this.effectCallBack.bind(this), type: RichblessedEffectType.Jackpot , bean:this.bean}
            );
        } else {
            this.playJackGame()
        }
    }

    //播放小游戏jack
    private playJackGame() {
        const { JackpotEle } = this.bean;
        let cfg = SpecialWinConfig.jackGame;

        if (JackpotEle != -1) {
            let spine:sp.Skeleton = this.enterJackSp.getComponent(sp.Skeleton);
            spine.setAnimation(0,cfg.animation1,false);
            this.scheduleOnce(() => {
                spine.setAnimation(0, cfg.animation2, false);
            },1.5)

            this.scheduleOnce(() => {
                RichblessedUIMgr.getInstance().openMiniGame()
            },2.5)

        } else {
            this.playFree(false);
        }
    }

    //播放免费
    private async playFree(freeShow: boolean) {
        const { AddFreeNum } = this.bean;
        if (AddFreeNum) {
            await RichblessedUIMgr.getInstance().showEffectUI(
                { coustomCallBack: this.effectCallBack.bind(this), type: RichblessedEffectType.Free, freeShow , bean: this.bean}
            );
        }else {
            this.end();
        }
    }

    private async end() {
        // const { WinRate = 0 } = this.bean;
        const WinRate = this.getWinRate();
        const { actionWaitTime } = getFruitsConfigByRate(WinRate);
        this.spineFlag = false;
        await this.delayTime(actionWaitTime);
        this.hook.end();
        // this.bean = null;
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

function async() {
    throw new Error("Function not implemented.");
}
