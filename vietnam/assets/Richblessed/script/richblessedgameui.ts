
import {
    _decorator,
    Vec3, instantiate, PhysicsSystem2D, EPhysics2DDrawFlags,
    find, Layers, Vec2, game, Game, Node, Label, Button, Sprite, tween, v3, Tween, UIOpacity, Skeleton, sp
} from 'cc';

import { UIScreen } from '../../ScriptCore/UIFrame/UIForm';
import { EventMgr } from '../../ScriptCore/events/eventmgr';
import { EventName } from '../../ScriptCore/events/EventName';
import { FruitsGameEventName } from './configs/fruitsgameeventname';
import { SCRichblessed } from './net/scRichblessed';
import NBSlotsMachine, { SlotsMachineState } from './component/NBSlotsMachine';
import { RichblessedRoomData, RoomModel } from './richblesseddata/RichblessedRoomData';
import { UIMgr } from '../../ScriptCore/Lobby/Scripts/UIMgr';
import { RichblessedUIMgr } from '../RichblessedUIMgr';
import RichblessUserInfo from './RichblessUserInfo';
import { adapterLabelBg, fruitsNumFormat, palyFruitsLableAnim, stopFruitsLableAnim } from '../../Richblessed/script/FruitsUtils';
import { ResMgr, ResType } from '../../ScriptCore/UIFrame/ResMgr';
import { StopParams } from './component/NBSlotsScroll';
import { FruitConis, getFruitsConfigByRate, matchPlayAnimationItem, RICHBGMusic, ServerIndexToClinetIndex, SpecialWinConfig } from './RichblessedConfig';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { RichblessedEffectType } from './RichblessedEffectWin';
import { LongTouchButton } from './component/LongTouchButton';
import RichblessedItemAnimation from './RichblessedItemAnimation';
import { RichblessedEffectController } from './RichblessedEffectController';
import NBNumberLable from './component/NBNumberLable';
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import { UserData } from '../../ScriptCore/data/UserData';
import { I18nMgr } from '../../ScriptCore/i18n/I18nMgr';
import gamehall from '../../ScriptCore/protocol/gamehall.js';
import { RichToast } from './RichToast';
import { reslist } from '../reslist';

const { ccclass, property } = _decorator;

@ccclass('RichblessedGameUI')
export class RichblessedGameUI extends UIScreen {
    private static enterBackground: boolean = false;

    @property(Node)
    frameBg:Node = null;

    //滚动机器
    @property(NBSlotsMachine)
    private machine:NBSlotsMachine = null;

    @property(Node)
    deskLayer: Node = null;

    //下注金额
    @property(Label)
    betLabel: Label = null;
    //金币
    @property(NBNumberLable)
    goldLabel: NBNumberLable = null;
    //下注按钮
    @property({type:[Button]})
    betBtns: Button[] = [];

    //关闭按钮
    @property(Button)
    btnBack:Button = null;

    //钻石
    @property(Label)
    diamondLabel:Label = null;
    //中奖win
    @property(NBNumberLable)
    winLabel: NBNumberLable = null;

    @property(Node)
    winIcon:Node = null;

    @property(Node)
    freeEffect: Node = null;

    @property(Button)
    btnSpinNode: Button = null;
    @property(Node)
    enterJackSp: Node = null;

    @property(Node)
    autoBg:Node = null;

    @property(Sprite)
    head:Sprite = null;

    @property(RichblessedItemAnimation)
    richblessedItemAnimation: RichblessedItemAnimation = null;

    @property(RichblessedEffectController)
    efCtrl: RichblessedEffectController = null;

    @property(Label)
    autoTimesLabel: Label = null;

    //是否可以启动状态
    private launchFlag: boolean = true;
    private firstEnterFree = false;

    private animationItemFlag: boolean = true;
    private animationFlag: boolean = true;

    startTime: number;

    async onLoad() {
        this.initMachine();
        this.addEvent();
        this.updateBetLable();
        this.updateCoin(RichblessedRoomData.instance.coin)
        this.updateDiamond(RichblessedRoomData.instance.diamond)
        this.updateBetBtn();
        this.updateBtnState();
        this.head.spriteFrame = await Utils.getHeadSpriteFrame(UserData.getInstance().getHead());

        this.efCtrl.hook = {
            end: ()=>{
                this.animationFlag = true;
                this.touchFlag = true;
                this.checkCompleteRestart();
            },
            spineFastEnd: () => {
                //强制停止
                this.updateWinLabel(false, true)
            },
            spineStart: () => {
                //开始滚动win 
                this.updateWinLabel();
            },
            spineJackpotStart: () => {
                this.updateWinLabel(true)
            }
        }

        this.richblessedItemAnimation.hook = {
            end: ()=>{
                this.animationItemFlag = true;
                this.checkCompleteRestart();
            }
        }
        this.betBtns.forEach((v)=>{
            v.interactable = this.launchFlag;
        })

        AudioMgr.getInstance().playMusic(RICHBGMusic.game, true);
    }

    reShow(){
        AudioMgr.getInstance().playMusic(RICHBGMusic.game, true);
    }

    async start(){
        this.reconnectionRestore();
    }

    private async reconnectionRestore(){
        if (RichblessedRoomData.instance.billed) {
            const { WinFreeTimes , FreeNum , JackpotEle,NowGameState} = RichblessedRoomData.instance.billed; 
            if(this.machine.machineState == SlotsMachineState.Rolling){
                this.onBilled(null);
            }
            if(NowGameState == 0){
                //正常
            }else if(NowGameState == 1){
                //免费
                if(WinFreeTimes && FreeNum){
                    this.freeFlag = true;
                    this.updateWinLabel();
                    this.updateBtnState();
                    this.efCtrl.setBean(RichblessedRoomData.instance.billed)
                    this.efCtrl.play();
                }
            }
            else if(NowGameState == 2){
                //小游戏
                if(JackpotEle != -1 && this.machine.machineState == SlotsMachineState.Motionless){
                    this.efCtrl.setBean(RichblessedRoomData.instance.billed)
                    this.efCtrl.play()

                    this.touchFlag = false;
                    this.updateBtnState()
                }else if(FreeNum && this.machine.machineState == SlotsMachineState.Motionless){
                    this.checkCompleteRestart();
                }
            }
        }
    }

    //自动滚动次数
    private _autoTimes:number = 0;
    public get autoTimes() : number {
        return this._autoTimes;
    }
    public set autoTimes(v : number) {
        if(v < 0){
            v = 0;
        }
        this._autoTimes = v;
        this.autoTimesLabel.string = v + '';
        this.updateBtnState();
        if(v){
            this.updateBtnSpine('auto')
        }else {
            this.updateBtnSpine('normal')
        }
    }

    //免费游戏标识
    private _freeFlag: boolean = false;
    public get freeFlag() : boolean {
        return this._freeFlag;
    }
    public set freeFlag(v : boolean) {
        this._freeFlag = v;
        this.updateBtnState();
    }
    
    //是否可以点击按钮标识
    private _touchFlag: boolean = true;
    public set touchFlag(v : boolean) {
        this._touchFlag = v;
        this.updateBtnState()
    }
    public get touchFlag() : boolean {
        return this._touchFlag;
    }

        //更新winLabel
    private updateWinLabel(jackport?: boolean, stopFlag?: boolean) {
        if (stopFlag) {
            this.winLabel.stop();
            return
        }
        const billed = RichblessedRoomData.instance.billed;
        if (!billed) {
            if (!this.freeFlag) {
                this.winLabel.stop();
                this.winLabel.string = '';
                this.winIcon.active = false;
            }
            return
        }
        const { WinEleCoin, WinJackpot, FreeAllWin, WinRate } = billed;
        const { textTime } = getFruitsConfigByRate(WinRate);
        if (FreeAllWin) {
            this.winLabel.play({ target: FreeAllWin, time: textTime, format: true })
            this.winIcon.active = true;
        } else if (jackport && WinJackpot) {
            this.winLabel.stop();
            this.winLabel.string = '0';
            this.winIcon.active = true;
            this.winLabel.play({ target: WinJackpot, time: textTime, format: true })
        } else if (WinEleCoin) {
            this.winLabel.stop();
            this.winLabel.string = '0';
            this.winIcon.active = true;
            this.winLabel.play({ target: WinEleCoin, time: textTime, format: true })
        } else {
            this.winLabel.stop();
            this.winLabel.string = '';
            this.winIcon.active = false;
        }
    }

    //更新按钮状态
    private updateBtnState(){
        // const flag = this.touchFlag && !this.freeFlag;
        // this.betBtns.forEach(v=>{
        //     v.interactable = flag && !this.autoTimes;
        // })
        // this.btnSpinNode.interactable = flag || Boolean(this.autoTimes);
        const flag = this.touchFlag && !this.freeFlag;
        this.betBtns.forEach(v=>{
            v.interactable = flag && !this.autoTimes;
        })
        this.btnSpinNode.interactable = flag || Boolean(this.autoTimes);

        // this.btnBack.interactable = flag && !this.autoTimes;

        if(RichblessedRoomData.instance.BetIdx == 0){
            this.betBtns[0].interactable = false;
        }
        if(RichblessedRoomData.instance.BetIdx >= RichblessedRoomData.instance.BetMoney.length - 1){
            this.betBtns[1].interactable = this.betBtns[2].interactable = false;
        }
    }

    private updateBetBtn(){
        const BetIdx = RichblessedRoomData.instance.BetIdx;
        this.betBtns.forEach((v) => {
            v.interactable = true;
        })
        let btn: Button;
        let maxbtn: Button = this.betBtns[2];
        if (BetIdx == 0) {
            btn = this.betBtns[0];

        }
        if (BetIdx == 4) {
            btn = this.betBtns[1];
            maxbtn.interactable = false;
        }
        btn && (btn.interactable = false);
    }

    public async closeSelf(): Promise<boolean> {
        this.unscheduleAllCallbacks();
        return await super.closeSelf();
    }

    private initMachine(){
        const duration = [0.8,1.1,1.3,1.6,1.8]
            this.machine.slotsSlots.forEach((v,i)=>{
            v.duration = duration[i];
        })  

        const {Cards} = RichblessedRoomData.instance.billed;
        if(Cards){
            RichblessedRoomData.instance.billed.Cards = RichblessedRoomData.instance.slotsCardsInitialGenerator();
            RichblessedRoomData.instance.targetIndexs = [1,1,1,1,1];
        }


        this.machine.slotsMachineHook = {
            //滚动完成
            machineRollComplete:this.machineRollComplete.bind(this),
            rollEnd:this.rollEnd.bind(this),
            refreshItem:this.refreshItem.bind(this),
            rollStart:this.rollStart.bind(this),
            fastRollStart:this.fastRollStart.bind(this),
            springbackStart:this.springbackStart.bind(this),
        }
    }

    /**
     * 滚动完成
     */
    private async machineRollComplete(): Promise<void>{
        try {
            const billed = RichblessedRoomData.instance.billed;
            const {WinLines } = billed;
            this.refreshLbPrize();
            this.updateWinLabel();
            this.updateCoin(RichblessedRoomData.instance.coin,true);
            this.richblessedItemAnimation.play(WinLines,Boolean(this.autoTimes) || this.freeFlag);
            this.efCtrl.play();
            this.touchFlag = true;
        } catch (ignore) { }
    }

    //滚动完成检测重新启动
    private async checkCompleteRestart() {
        if (!this.animationItemFlag || !this.animationFlag) {
            return
        }
        this.launchFlag = true;
        const { WinFreeTimes, FreeNum, FreeAllWin,AddFreeNum} = RichblessedRoomData.instance.billed;
        if (FreeNum) {
            this.changeFrameBg();
            this.firstEnterFree = true;
            this.freeFlag = true;
            if (AddFreeNum) {
                if (!FreeAllWin) this.winLabel.string = '0';
            }
            this.updateBtnState();
            this.updateBtnSpine('free', FreeNum);
            this.launch();
            AudioMgr.getInstance().playMusic(RICHBGMusic.free, true);
        } else {
            AudioMgr.getInstance().playMusic(RICHBGMusic.game, true);
            this.changeFrameBg();
            this.firstEnterFree = false;
            if (this.freeFlag) {
                this.freeFlag = false;
                //播放结算页面
                await RichblessedUIMgr.getInstance().showFreeSumUI({ exitCallBack: this.exitFreeSettlement.bind(this), freeWin: FreeAllWin, freeTimes: WinFreeTimes });
            } else {
                if (this.autoTimes) {
                    this.launch();
                }
            }
        }
    }

    //退出免费游戏结算
    private async exitFreeSettlement() {
        const key = this.autoTimes ? 'auto' : 'normal'
        this.updateBtnSpine(key)
        if (this.autoTimes) {
            AudioMgr.getInstance().playMusic(RICHBGMusic.game, true);
            this.launch();
        }
    }

    exitJackGame(){
        const {FreeNum} = RichblessedRoomData.instance.billed;
        if (FreeNum) {
            this.changeFrameBg();
            this.firstEnterFree = true;
            AudioMgr.getInstance().playMusic(RICHBGMusic.free, true);
        }
    }

    //更新旋转按钮状态
    private updateBtnSpine(mode: string, freeTimes: number = 0) {
        freeTimes = freeTimes - 1;
        let node = this.btnSpinNode.node.getChildByName('spine0')
        let fast = this.btnSpinNode.node.getChildByName('spine1')
        let free = this.btnSpinNode.node.getChildByName('free')
        node.active = fast.active = free.active = false;
        if (mode === 'auto') {
            fast.active = true;
        } else if (mode === 'normal') {
            node.active = true;
        } else if (mode === 'free') {
            free.getChildByName('Label').getComponent(Label).string = freeTimes + '';
            free.active = true;
        }
    }

    private changeFrameBg(){
        const roomModel = RichblessedRoomData.instance.getRoomModel();

        let self = this;
        const fadeHandler = function(path:string){
            let sp = ResMgr.getInstance().getSpriteFrameByPath(path);
            self.frameBg.getComponent(Sprite).spriteFrame = sp;

            const opacityComp = self.frameBg.getComponent(UIOpacity);
            opacityComp.opacity = 0;
            tween(opacityComp)
                .to(1,{opacity:255},{easing:'fade'})
                .start()
        }

        if(roomModel == RoomModel.FreeGame){
            if(!this.firstEnterFree){
                const path = `Richblessed/texture/images/mianfeibg`;
                fadeHandler(path)
            }
        }

        if(roomModel == RoomModel.NormalGame){
            if(this.firstEnterFree){
                const path = `Richblessed/texture/images/bg`;
                fadeHandler(path);
            }
        }
    }

    /**
     * 某一列滚动完成
     * @param column 列
     */
    private rollEnd(column:number,nodes: Node[]):void{
        // AudioMgr.getInstance().playSound(RICHBGMusic.stop);

        let playFu: any = [];
        let playLuo: any = [];
        let playscatter: any = [];
        if (column < 5) {
            let data = this.getPlayItem(column, nodes);
            if(!data)return;
            playFu = data.playFu;
            playLuo = data.playLuo;
        } else {
            // const { Cards = [] } = RichblessedRoomData.instance.billed;
            // let fuIndexs = matchPlayAnimationItem(column, Cards, 0);
            // let luoIndexs = matchPlayAnimationItem(column, Cards, 1);

            // fuIndexs.forEach((v, i) => {
            //     const index = column + (2 - v) * 5;
            //     playFu.push({ index, node: nodes[v] });
            // })
            // luoIndexs.forEach((v) => {
            //     const index = column + (2 - v) * 5;
            //     playLuo.push({ index, node: nodes[v] });
            // })
        }
        // console.log(`第${column}行播放节点动画`)
        // console.log(playFu);
        // console.log(playLuo);
        // console.log(playscatter);
        // console.log(`第${column}行播放节点动画`)
        if (playFu.length) {
            AudioMgr.getInstance().playSound(RICHBGMusic.fu);
            playFu.forEach((v: any) => {
                const { index, node } = v;
                this.richblessedItemAnimation.playSpecialItem(index, 'fu', node)
            })
        }
        if (playLuo.length) {
            AudioMgr.getInstance().playSound(RICHBGMusic.luo);
            playLuo.forEach((v: any) => {
                const { index, node } = v;
                this.richblessedItemAnimation.playSpecialItem(index, 'luo', node)
            })
        }
    }

    private getPlayItem(column: number, nodes: Node[]) {
        let playFu = [];
        let playLuo = [];
        if(!RichblessedRoomData.instance.billed)return;
        const { Cards = [] } = RichblessedRoomData.instance.billed;
        let firstIndex = column;
        let scondIndex = column + 5;
        let thirdIndex = column + 10;
        if (Cards[firstIndex] == 0) {
            playFu.push({ index: firstIndex, node: nodes[2] })
        }
        if (Cards[scondIndex] == 0) {
            playFu.push({ index: scondIndex, node: nodes[1] })
        }
        if (Cards[thirdIndex] == 0) {
            playFu.push({ index: thirdIndex, node: nodes[0] })
        }

        if (Cards[firstIndex] == 1) {
            playLuo.push({ index: firstIndex, node: nodes[2] })
        }
        if (Cards[scondIndex] == 1) {
            playLuo.push({ index: scondIndex, node: nodes[1] })
        }
        if (Cards[thirdIndex] == 1) {
            playLuo.push({ index: thirdIndex, node: nodes[0] })
        }
        return { playFu, playLuo };
    }

    /**
     * 节点刷新
     * @param column 
     * @param node 
     * @param index 
     */
    private refreshItem(column: number, node:Node, index: number): void{
        const tag = RichblessedRoomData.instance.matchBilled(column,index);
        const img = node.getChildByName('bg');
        img.active = true;
        // console.log(ResMgr.getInstance().getSpriteAtlasByPath("Richblessed/texture/images/fruitConis"));
        img.getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Richblessed/texture/images/fruitConis").getSpriteFrame(FruitConis[tag]);
    }
    /**
     * 某一列开始启动
     * @param column 
     */
    private rollStart(column: number){
    }
    /**
     * 开始快速滚动
     */
    private fastRollStart(column: number){
    }
    /**
     * 开始回弹
     */
    private springbackStart(column: number){
        AudioMgr.getInstance().playSound(RICHBGMusic.stop);
    }

    private addEvent() {
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_ROOMINFO, this.onRoomInfo, this);
        EventMgr.getInstance().addEventListener(FruitsGameEventName.GAME_SC_ROOM_INFO,this.onRoomInfo,this); //房间信息
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_FRUITSOP, this.onPlayerOp, this);
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_ROOM_STATE, this.onRoomState, this);
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_PRIZE, this.onPrize, this);
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_BILLED, this.onBilled, this);
        EventMgr.getInstance().addEventListener(EventName.SC_EnterGame, this.enterGameHandler.bind(this), this);

        EventMgr.getInstance().addEventListener(EventName.Reconnect_complete, this.onReconnect, this);
        EventMgr.getInstance().addEventListener(EventName.SC_ReturnRoom, this.onReturnRoom, this);
        EventMgr.getInstance().addEventListener(EventName.SC_QUIT_GAME, this.onGameQuitCallBack, this);
        EventMgr.getInstance().addEventListener(FruitsGameEventName.GAME_CLOSE_JACKGAME, this.exitJackGame, this);

        game.on(Game.EVENT_SHOW, this.enterForegroundCb, this);
        game.on(Game.EVENT_HIDE, this.enterBackgroundCb, this);

        //按钮长按 点击

    }

    onHide() {
        EventMgr.getInstance().removeByTarget(this);
        game.off(Game.EVENT_SHOW, this.enterForegroundCb, this)
        game.off(Game.EVENT_HIDE, this.enterBackgroundCb, this);
    }

    /**点击事件=============================================== */
    /**
     * 点击退出
     */
    clickBack(target: any, close: any) {
        AudioMgr.getInstance().playSound(RICHBGMusic.click);

        let JackpotEle;
        if (RichblessedRoomData.instance.billed) {
            const { FreeNum} = RichblessedRoomData.instance.billed;
            JackpotEle = RichblessedRoomData.instance.billed.JackpotEle;
            if (FreeNum) {
                this.freeFlag = true;
            }
        }
        
        const flag = (this.touchFlag && !this.freeFlag) && !this.autoTimes && !this.efCtrl.spineFlag && JackpotEle == -1
        if(flag){
            SCRichblessed.getInstance().backGame();
            this.closeSelf();
        }else {
            RichToast.show({prefabPath:'Richblessed/prefab/pfb_richblessed_toast_ui',content: this.node,txt:I18nMgr.getInstance().getStringByKey("richblessed.forbidBack")})
        }

    }
    /**
     * 点击启动
     */
    clickLaunch(ev:any) {
        AudioMgr.getInstance().playSound(RICHBGMusic.click);
        this.autoTimes = 0;
        this.autoBg.active = false;
        if (!this.freeFlag) {
            this.updateBtnSpine('normal')
        }

        const {JackpotEle} = RichblessedRoomData.instance.billed;
        if(this.touchFlag && !this.freeFlag && JackpotEle == -1){
            if (!this.efCtrl.spineFlag && !this.freeFlag) {
                this.efCtrl.stop();
                this.launchFlag = true;
                this.launch();
            }
        }
    }

    longTrigger(ev:any){
        this.autoBg.active = true;
    }

    private launch(){
        if (this.machine.machineState == SlotsMachineState.Motionless && this.launchFlag) {
            this.animationFlag = false;
            this.animationItemFlag = false;
            this.launchFlag = false;
            this.richblessedItemAnimation.stop();
            this.startTime = Date.now();
            const deltaCoin = RichblessedRoomData.instance.coin - RichblessedRoomData.instance.getCurrentBetMoney();
            let FreeNum = 0;
            if (deltaCoin >= 0) {
                if (RichblessedRoomData.instance.billed) {
                    FreeNum = RichblessedRoomData.instance.billed.FreeNum;
                    FreeNum == 0 && this.updateCoin(deltaCoin, true);
                }
                RichblessedRoomData.instance.billed = null
                RichblessedRoomData.instance.targetIndexs = [];
                this.touchFlag = false;
                this.machine.launchMachine();
                SCRichblessed.getInstance().launchRichblessed(0,null)
                if(this.autoTimes && !FreeNum){
                    this.autoTimes = this.autoTimes - 1;
                }
            } else {
                if (RichblessedRoomData.instance.billed) {
                    FreeNum = RichblessedRoomData.instance.billed.FreeNum;
                    if (!FreeNum) {
                        RichToast.show({prefabPath:'Richblessed/prefab/pfb_richblessed_toast_ui',content: this.node,txt:I18nMgr.getInstance().getStringByKey("richblessed.goldCoinShortage")})
                        this.autoTimes = 0;
                    }
                } else {
                    RichToast.show({prefabPath:'Richblessed/prefab/pfb_richblessed_toast_ui',content: this.node,txt:I18nMgr.getInstance().getStringByKey("richblessed.goldCoinShortage")})
                    this.autoTimes = 0;
                }
            }

            this.updateWinLabel()
        }
    }

    private updateCoin(coin: number, play?: boolean) {
        const text = coin + '';
        let old = this.goldLabel.string;
        this.goldLabel.string = fruitsNumFormat(text);
        adapterLabelBg({
            fatherNode: this.goldLabel.node.parent,
            lb: this.goldLabel,
            w: 13,
            leftInterval: 40,
            rightInterval: 13
        })

        if (play) {
            this.goldLabel.string = old;
            this.goldLabel.play({ target: coin, time: 0.5, format: true })
        }
    }

    /**
     * 下注切换
     * @param target 
     * @param tag 
     */
    clickChangeBet(target:any,tag:string){
        AudioMgr.getInstance().playSound(RICHBGMusic.click);
        // if(!this.launchFlag){
        //     return
        // }
        const length = RichblessedRoomData.instance.BetMoney.length - 1;
        if (tag === 'add') {
            if (RichblessedRoomData.instance.BetIdx >= length) {
                return
            }
            RichblessedRoomData.instance.BetIdx += 1;
        } else if (tag === 'reduce') {
            if (RichblessedRoomData.instance.BetIdx <= 0) {
                return
            }
            RichblessedRoomData.instance.BetIdx -= 1;
        } else {
            if (RichblessedRoomData.instance.BetIdx == length) {
                return
            }
            RichblessedRoomData.instance.BetIdx = length;
        }
        const BetIdx = RichblessedRoomData.instance.BetIdx;
        const params = {
            OpCode: 1,
            Params: [BetIdx]
        }
        SCRichblessed.getInstance().changeBet(params)
        this.updateBetLable();
        this.updateBetBtn();
    }

    /**
     * 收到退出游戏事件
     */
    onGameQuitCallBack() {
        this.closeSelf();
    }
    /**
    * 水果拉霸收到玩家断线重连的消息
    * @param msg 
    */
    onReconnect(msg: any): void {
        SCRichblessed.getInstance().reconnect();
    }
    /**
    * 收到返回房间消息
    * @param msg 
    */
    onReturnRoom(msg: any) {
        // console.log(msg);
        UserData.getInstance().setRoomId(0);
        UserData.getInstance().setGameFreeId(0);
        console.log("多财收到返回房间的消息");
        console.log(msg);
        const { GameId, HallId, RoomId } = msg;
        if (!GameId || !RoomId) {
            this.clickBack(null, true);
        }
    }
    /**
     * 收到房间信息
     * @param msg 
     */
    onRoomInfo(msg: any) {
        UIMgr.getInstance().clearWaiting();
        // console.log('多彩多福房间信息')
        this.updateBetLable();
        this.updateCoin(RichblessedRoomData.instance.coin)
        this.updateDiamond(RichblessedRoomData.instance.diamond)
        this.updateBetBtn();
        this.refreshLbPrize();
        this.reconnectionRestore();
    }
    /**
     * 玩家操作
     */
    onPlayerOp(msg:any){
        this.refreshLbPrize();
    }
    /**
     * 房间状态
     */
    onRoomState(msg: any){

    }
    /**
     * 奖池
     */
    onPrize(msg:any){
        const { PrizePool = 0 } = msg;
        // this.updateJackPotLable(PrizePool)
    }
    /**
    * BetIdx: 2
    * Cards: (15) [13, 7, 11, 10, 9, 1, 2, 1, 11, 13, 10, 5, 0, 10, 9]
    * Coin: 1199357
    * Jackpot: 9
    * WinLines: []
    * FreeNum 当前剩余免费次数
    */
    onBilled(msg:any){
        if (this.machine.machineState == SlotsMachineState.Rolling && RichblessedRoomData.instance.billed) {
            const params: StopParams[] = [];
            for (let i = 0; i < 5; ++i) {
                params.push({
                    stopImmediately: false,
                    fastRoll: false
                })
            }
            this.efCtrl.setBean(RichblessedRoomData.instance.billed)
            RichblessedRoomData.instance.targetIndexs = this.machine.stopMachine(params)
        }
    }
    //刷新四个奖池
    private refreshLbPrize(){
        let allJackPot = RichblessedRoomData.instance.allJackPot;
        if(!allJackPot)return;
        for (let index = 0; index < allJackPot.length; index++) {
            const prize = allJackPot[index];
            let lbPrize = this.deskLayer.getChildByName(`lb-prize${index}`);
            // lbPrize.getComponent(Label).string = fruitsNumFormat(String(prize))
            lbPrize.getComponent(NBNumberLable).play({ target: prize, time: 0.5, format: true })
        }
    }

    private updateBetLable(){
       const text = RichblessedRoomData.instance.getCurrentBetMoney() + '';
       this.betLabel.string = fruitsNumFormat(text);
    }

    private updateDiamond(diamond:number){
        const text = diamond + '';
        this.diamondLabel.string  = fruitsNumFormat(text);
        adapterLabelBg({
            fatherNode:this.diamondLabel.node.parent,
            lb:this.diamondLabel,
            w:13,
            leftInterval:40,
            rightInterval:13
        })
    }

    //选择自动滚动次数
    private async clickAuto(ev:any,type:string){
        if(type == '1'){
            this.autoTimes = 20;
        }else if(type == '2'){
            this.autoTimes = 50;
        }else if(type == '3'){
            this.autoTimes = 100;
        }else if(type == '4'){
            this.autoTimes = 500;
        }
        this.autoBg.active = false;
        console.log('-------------------------------------------this.touchFlag:' + this.touchFlag + ',this.freeFlag:' + this.freeFlag + ',this.efCtrl.spineFlag:' + this.efCtrl.spineFlag + '.this.freeFlag:' + this.freeFlag)
        if(this.touchFlag && !this.freeFlag){
            if (!this.efCtrl.spineFlag && !this.freeFlag) {
                this.efCtrl.stop();
                this.launchFlag = true;
                this.launch();
            }
        }
    }

    /**
     * 打开设置面板
    */
    async onOpenSetUI(){
        await RichblessedUIMgr.getInstance().showSettingUI();
    }
    async clickHelp() {
        AudioMgr.getInstance().playSound(RICHBGMusic.click);
        await RichblessedUIMgr.getInstance().showHelpUI();
    }
    /**
     * 进入前台
     */
    enterForegroundCb() {
        RichblessedGameUI.enterBackground = false;
        SCRichblessed.getInstance().enterForegroundCb();
    }

    /**
     * 进入后台
     */
    enterBackgroundCb() {
        RichblessedGameUI.enterBackground = true;
        SCRichblessed.getInstance().enterBackgroundCb();
    }

     enterGameHandler(msg:any){
        let {OpCode} = msg
        if (OpCode == gamehall.gamehall.OpResultCode.OPRC_CoinNotEnough) {
            UIMgr.getInstance().AlertTxtWithConfirmClose(I18nMgr.getInstance().getStringByKey("richblessed.goldCoinShortage"));
        } else if (OpCode == gamehall.gamehall.OpResultCode.OPRC_RoomHadClosed) {
            UIMgr.getInstance().AlertTxtWithConfirmClose("richblessed.roomclosed");
        } else if (OpCode == gamehall.gamehall.OpResultCode.OPRC_SceneServerMaintain) {
            UIMgr.getInstance().AlertTxtWithConfirmClose("richblessed.serverMaintenance");
        } else if (OpCode) {
            UIMgr.getInstance().AlertTxtWithConfirmClose(`${gamehall.gamehall.OpResultCode[OpCode]}`);
        }
        UIMgr.getInstance().clearWaiting();
    }
}
