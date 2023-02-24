
import {
    _decorator,
    game, Game, Node, Label, Button, SpriteFrame, Sprite, tween, Animation, v3, Vec3, Tween, sp, UIOpacity, Prefab, instantiate
} from 'cc';

import { UIScreen, UIWindow } from '../../ScriptCore/UIFrame/UIForm';
import { EventMgr } from '../../ScriptCore/events/eventmgr';
import { EventName } from '../../ScriptCore/events/EventName';
import { FruitsGameEventName } from './configs/fruitsgameeventname';
import { SCFruits } from './net/scFruits';
import NBSlotsMachine, { SlotsMachineState } from './component/NBSlotsMachine';
import { FruitsRoomData } from './fruitsdata/FruitsRoomData';
import { FruitsUIMgr } from '../FruitsUIMgr';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { fruitsNumFormat } from './FruitsUtils';
import { StopParams } from './component/NBSlotsScroll';
import { FruitsBGMusic, FruitsItemConfig, FruitsWinConfig, getFruitsConfigByRate, LineEffectPoint, matchFast, matchPlayAnimationItem, ServerIndexToClinetIndex, SpecialWinConfig } from './FruitsConfig';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import FruitsItemAnimation from './FruitsItemAnimation';
import { FruitsEffectController } from './FruitsEffectController';
import NBNumberLable from './component/NBNumberLable';
import gamehall from '../../ScriptCore/protocol/gamehall.js';
import { I18nMgr } from '../../ScriptCore/i18n/I18nMgr';
import { UIMgr } from '../../ScriptCore/Lobby/Scripts/UIMgr';
import { FruitsTopUI } from './FruitsTopUI';
import { PoolManager } from '../../ScriptCore/panda/utils/poolmgr';
import { FruitsBottomUI } from './FruitsBottomUI';
import { FruitsToast } from './component/FruitsToast';
import { UserData } from '../../ScriptCore/data/UserData';

const { ccclass, property } = _decorator;

@ccclass('FruitsGameUI')
export class FruitsGameUI extends UIScreen {
    private static enterBackground: boolean = false;
    //滚动机器
    @property(NBSlotsMachine)
    machine: NBSlotsMachine = null;
    //奖池
    @property(NBNumberLable)
    prize: NBNumberLable = null;

    @property(FruitsItemAnimation)
    fruitsItemAnimation: FruitsItemAnimation = null;

    @property(FruitsEffectController)
    efCtrl: FruitsEffectController = null;

    @property(Sprite)
    tableBg: Sprite = null;

    @property(Node)
    freeAnimation: Node = null;

    @property({ type: [Node] })
    fastNodes: Node[] = [];

    private topUI: FruitsTopUI = null;
    private bottomUI: FruitsBottomUI = null;

    //自动滚动次数
    private _autoTimes: number = 0;
    public get autoTimes(): number {
        return this._autoTimes;
    }
    public set autoTimes(v: number) {
        if (v < 0) {
            v = 0;
        }
        this._autoTimes = v;
        this.bottomUI.autoTimesLabel.string = v + '';
        this.updateBtnState();
        if (v) {
            this.updateBtnSpine('auto')
        } else {
            this.updateBtnSpine('normal')
        }
    }

    //是否可以启动状态
    private launchFlag: boolean = true;

    //免费游戏标识
    private _freeFlag: boolean = false;
    public get freeFlag(): boolean {
        return this._freeFlag;
    }
    public set freeFlag(v: boolean) {
        this._freeFlag = v;
        this.updateBtnState();
    }

    //是否可以点击按钮标识
    private _touchFlag: boolean = true;
    public set touchFlag(v: boolean) {
        this._touchFlag = v;
        this.updateBtnState()
    }
    public get touchFlag(): boolean {
        return this._touchFlag;
    }

    private animationItemFlag: boolean = true;
    private animationFlag: boolean = true;

    private _initFlag: number = 0;

    public get initFlag(): number {
        return this._initFlag;
    }
    public set initFlag(v: number) {
        this._initFlag = v;
        if (this._initFlag >= 2) {
            this.updateBetLable();
            this.topUI?.updateCoin(FruitsRoomData.instance.coin)
            this.topUI?.updateDiamond(FruitsRoomData.instance.diamond)
            this.reconnectionRestore();
        }
    }

    async onLoad() {
        if (FruitsRoomData.instance.billed) {
            FruitsRoomData.instance.billed.Cards = FruitsRoomData.instance.slotsCardsInitialGenerator();
            FruitsRoomData.instance.targetIndexs = [1, 1, 1, 1, 1];
        }
        this.initMachine();
        this.addEvent();
        this.updateJackPotLable(0);

        this.efCtrl.hook = {
            end: () => {
                this.animationFlag = true;
                this.checkCompleteRestart();
            },
            spineFastEnd: () => {
                //强制停止
                this.updateWinLabel(false, true)
            },
            spineStart: () => {
            },
            spineJackpotStart: () => {
                this.updateWinLabel(true)
            }
        }
        AudioMgr.getInstance().playMusic(FruitsBGMusic.game, true);

        this.fruitsItemAnimation.hook = {
            end: () => {
                this.animationItemFlag = true;
                this.checkCompleteRestart();
            }
        }
    }

    async start() {
        setTimeout(async () => {
            try {
                await this.framingLoad();
                this.initFlag += 1;
            } catch (error) {
            }
        }, 100);
    }

    onDestroy() {
        PoolManager.instance.putNode(this.topUI.node);
        PoolManager.instance.putNode(this.bottomUI.node);
    }

    //断线重连
    private async reconnectionRestore() {
        if (FruitsRoomData.instance.billed) {
            const { WinFreeTimes, FreeTimes, MaryFreeTimes } = FruitsRoomData.instance.billed;
            if (this.machine.machineState == SlotsMachineState.Rolling) {
                this.onBilled(null);
            } else if (WinFreeTimes && FreeTimes && MaryFreeTimes) {
                this.efCtrl.setBean(FruitsRoomData.instance.billed)
                this.efCtrl.play()
            } else if (MaryFreeTimes && this.machine.machineState == SlotsMachineState.Motionless) {
                this.efCtrl.setBean(FruitsRoomData.instance.billed)
                this.efCtrl.play()
            } else if (FreeTimes && this.machine.machineState == SlotsMachineState.Motionless) {
                this.checkCompleteRestart();
            }
        }
    }


    public async closeSelf(): Promise<boolean> {
        this.unscheduleAllCallbacks();
        return await super.closeSelf();
    }

    private initMachine() {
        this.machine.slotsMachineHook = {
            //滚动完成
            machineRollComplete: this.machineRollComplete.bind(this),
            rollEnd: this.rollEnd.bind(this),
            refreshItem: this.refreshItem.bind(this),
            rollStart: this.rollStart.bind(this),
            fastRollStart: this.fastRollStart.bind(this),
            springbackStart: this.springbackStart.bind(this),
            initEnd: async () => {
                this.initFlag += 1;
            }
        }
    }



    //退出免费游戏结算
    private async exitFreeSettlement() {
        console.log('退出免费结算')
        const key = this.autoTimes ? 'auto' : 'normal'
        this.updateBtnSpine(key)
        if (this.autoTimes) {
            AudioMgr.getInstance().playMusic(FruitsBGMusic.game, true);
            this.launch();
        }
    }

    /**
     * 滚动完成
     */
    private machineRollComplete(): void {
        console.log('滚动结束了....')
        const billed = FruitsRoomData.instance.billed;
        const { Jackpot = 0, WinLines, Cards } = billed;
        //刷新奖池
        this.updateJackPotLable(Jackpot)
        this.topUI.updateCoin(FruitsRoomData.instance.coin, true)
        this.fruitsItemAnimation.play(WinLines, Boolean(this.autoTimes) || this.freeFlag, Cards);
        this.efCtrl.play();
        this.touchFlag = true;
        const duration = [0.8, 1.1, 1.4, 1.7, 2.0]
        this.machine.slotsSlots.forEach((v, i) => {
            v.duration = duration[i];
        })
        //开始滚动win 
        this.updateWinLabel();
    }

    //更新winLabel
    private updateWinLabel(jackport?: boolean, stopFlag?: boolean) {
        if (stopFlag) {
            this.bottomUI.winLabel.stop();
            return
        }
        const billed = FruitsRoomData.instance.billed;
        if (!billed) {
            if (!this.freeFlag) {
                this.bottomUI.winLabel.stop();
                this.bottomUI.winLabel.string = '';
                this.bottomUI.winNode.active = false;
            }
            return
        }
        const { WinLineCoin, WinJackpot, FreeTotalWin, WinRate } = billed;
        const { textTime } = getFruitsConfigByRate(WinRate);
        if (FreeTotalWin) {
            this.bottomUI.winLabel.play({ target: FreeTotalWin, time: textTime, format: true })
            this.bottomUI.winNode.active = true;
        } else if (jackport && WinJackpot) {
            this.bottomUI.winLabel.stop();
            this.bottomUI.winLabel.string = '0';
            this.bottomUI.winLabel.play({ target: WinJackpot, time: textTime, format: true })
            this.bottomUI.winNode.active = true;
        } else if (WinLineCoin) {
            this.bottomUI.winLabel.stop();
            this.bottomUI.winLabel.string = '0';
            this.bottomUI.winLabel.play({ target: WinLineCoin, time: textTime, format: true })
            this.bottomUI.winNode.active = true;
        } else {
            this.bottomUI.winLabel.stop();
            this.bottomUI.winLabel.string = '';
            this.bottomUI.winNode.active = false;
        }
    }

    //滚动完成检测重新启动
    private async checkCompleteRestart() {
        if (!this.animationItemFlag || !this.animationFlag) {
            return
        }
        this.launchFlag = true;
        const { WinFreeTimes, FreeTimes, FreeTotalWin } = FruitsRoomData.instance.billed;
        if (FreeTimes) {
            this.freeFlag = true;
            this.tableBg.node.active = true;
            this.freeAnimation.active = true;
            if (WinFreeTimes) {
                if (!FreeTotalWin) this.bottomUI.winLabel.string = '0';
            }
            this.updateBtnSpine('free', FreeTimes);
            this.launch();
            AudioMgr.getInstance().playMusic(FruitsBGMusic.free, true);
        } else {
            AudioMgr.getInstance().playMusic(FruitsBGMusic.game, true);
            if (this.freeFlag) {
                this.tableBg.node.active = false;
                this.freeAnimation.active = false;
                this.freeFlag = false;
                //播放结算页面
                await FruitsUIMgr.getInstance().showFreeSettlementUI({ exitCallBack: this.exitFreeSettlement.bind(this), coin: FreeTotalWin, freeTimes: 0 });
            } else {
                if (this.autoTimes) {
                    this.launch();
                }
            }
        }
    }

    /**
     * 某一列滚动完成
     * @param column 列
     */
    private rollEnd(column: number, nodes: Node[]): void {
        let playWilds: any = [];
        let playBonus: any = [];
        let playscatter: any = [];
        if (column < 3) {
            let data = this.getPlayItem(column, nodes);
            playWilds = data.playWilds;
            playBonus = data.playBonus;
            playscatter = data.playscatter;
        } else {
            const { Cards = [] } = FruitsRoomData.instance.billed;
            let wildIndexs = matchPlayAnimationItem(column, Cards, 0);
            let bonusIndexs = matchPlayAnimationItem(column, Cards, 1);
            let scatterIndexs = matchPlayAnimationItem(column, Cards, 2);

            wildIndexs.forEach((v, i) => {
                const index = column + (2 - v) * 5;
                playWilds.push({ index, node: nodes[v] });
            })
            bonusIndexs.forEach((v) => {
                const index = column + (2 - v) * 5;
                playBonus.push({ index, node: nodes[v] });
            })
            scatterIndexs.forEach((v) => {
                const index = column + (2 - v) * 5;
                playscatter.push({ index, node: nodes[v] });
            })
        }
        if (playWilds.length) {
            AudioMgr.getInstance().playSound(FruitsBGMusic.wild);
            playWilds.forEach((v: any) => {
                const { index, node } = v;
                node.active = false;
                this.fruitsItemAnimation.playSpecialItem(index, 'wild', node)
            })
        }
        if (playBonus.length) {
            AudioMgr.getInstance().playSound(FruitsBGMusic.bonus);
            playBonus.forEach((v: any) => {
                const { index, node } = v;
                node.active = false;
                this.fruitsItemAnimation.playSpecialItem(index, 'bonus', node)
            })
        }
        if (playscatter.length) {
            AudioMgr.getInstance().playSound(FruitsBGMusic.scatter);
            playscatter.forEach((v: any) => {
                const { index, node } = v;
                node.active = false;
                this.fruitsItemAnimation.playSpecialItem(index, 'scatter', node)
            })
        }


    }

    private getPlayItem(column: number, nodes: Node[]) {
        let playWilds = [];
        let playBonus = [];
        let playscatter = [];
        const { Cards = [] } = FruitsRoomData.instance.billed;
        let firstIndex = column;
        let scondIndex = column + 5;
        let thirdIndex = column + 10;
        if (Cards[firstIndex] == 0) {
            playWilds.push({ index: firstIndex, node: nodes[2] })
        }
        if (Cards[scondIndex] == 0) {
            playWilds.push({ index: scondIndex, node: nodes[1] })
        }
        if (Cards[thirdIndex] == 0) {
            playWilds.push({ index: thirdIndex, node: nodes[0] })
        }

        if (Cards[firstIndex] == 1) {
            playBonus.push({ index: firstIndex, node: nodes[2] })
        }
        if (Cards[scondIndex] == 1) {
            playBonus.push({ index: scondIndex, node: nodes[1] })
        }
        if (Cards[thirdIndex] == 1) {
            playBonus.push({ index: thirdIndex, node: nodes[0] })
        }

        if (Cards[firstIndex] == 2) {
            playscatter.push({ index: firstIndex, node: nodes[2] })
        }
        if (Cards[scondIndex] == 2) {
            playscatter.push({ index: scondIndex, node: nodes[1] })
        } if (Cards[thirdIndex] == 2) {
            playscatter.push({ index: thirdIndex, node: nodes[0] })
        }
        return { playWilds, playBonus, playscatter };
    }

    /**
     * 节点刷新
     * @param column 
     * @param node 
     * @param index 
     */
    private refreshItem(column: number, node: Node, index: number): void {
        const tag = FruitsRoomData.instance.matchBilled(column, index);
        const img = node.getChildByName('bg');
        img.getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Fruits/res/game").getSpriteFrame(FruitsItemConfig[tag].icon);
    }
    /**
     * 某一列开始启动
     * @param column 
     */
    private rollStart(column: number) {
    }
    /**
     * 开始快速滚动
     */
    private fastRollStart(column: number) {
        if (column == 2) {
            this.fastNodes[0].active = true;
        } else if (column == 3) {
            this.fastNodes[1].active = true;
        } else if (column == 4) {
            this.fastNodes[2].active = true;
        }
        AudioMgr.getInstance().playSound(FruitsBGMusic.fastroll);
    }
    /**
     * 开始回弹
     */
    private springbackStart(column: number) {
        if (column == 2) {
            this.fastNodes[0].active = false;
        } else if (column == 3) {
            this.fastNodes[1].active = false;
        } else if (column == 4) {
            this.fastNodes[2].active = false;
        }
        AudioMgr.getInstance().playSound(FruitsBGMusic.stop);
    }

    //更新旋转按钮状态
    private updateBtnSpine(mode: string, freeTimes: number = 0) {
        freeTimes = freeTimes - 1;
        let node = this.bottomUI.btnSpinNode.node.getChildByName('spine0')
        let fast = this.bottomUI.btnSpinNode.node.getChildByName('spine1')
        let free = this.bottomUI.btnSpinNode.node.getChildByName('free')
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


    private addEvent() {
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_ROOMINFO, this.onRoomInfo, this);
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_ROOM_INFO, this.onRoomInfo, this);
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_ROOM_STATE, this.onRoomState, this);
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_PRIZE, this.onPrize, this);
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_BILLED, this.onBilled, this);
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_ROOMINFO, this.onBilled, this);
        EventMgr.getInstance().addEventListener(EventName.SC_EnterGame, this.enterGame.bind(this), this);
        EventMgr.getInstance().addEventListener(EventName.Reconnect_complete, this.onReconnect, this);
        EventMgr.getInstance().addEventListener(EventName.SC_ReturnRoom, this.onReturnRoom, this);
        EventMgr.getInstance().addEventListener(EventName.SC_QUIT_GAME, this.onGameQuitCallBack, this);
        game.on(Game.EVENT_SHOW, this.enterForegroundCb, this);
        game.on(Game.EVENT_HIDE, this.enterBackgroundCb, this);
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
        // let MaryFreeTimes = 0;
        if (FruitsRoomData.instance.billed) {
            const { FreeTimes } = FruitsRoomData.instance.billed;
            if (FreeTimes) {
                this.freeFlag = true;
            }
        }
        const flag = (this.touchFlag && !this.freeFlag) && !this.autoTimes && !this.efCtrl.spineFlag;
        if (flag) {
            SCFruits.getInstance().backGame()
            this.closeSelf();
        } else {
            FruitsToast.show({ prefabPath: 'Fruits/prefab/pfb_fruits_toast_ui', content: this.node, txt: I18nMgr.getInstance().getStringByKey("fruits.forbidBack") })
        }
    }

    /**
     * 点击启动
     */
    async clickLaunch(ev: any) {
        this.autoTimes = 0;
        this.bottomUI.autoBg.active = false;
        if (!this.freeFlag) {
            this.updateBtnSpine('normal')
        }

        if (this.touchFlag && !this.freeFlag) {
            if (!this.efCtrl.spineFlag && !this.freeFlag) {
                this.efCtrl.stop();
                this.launchFlag = true;
                this.launch();
            }
        }
    }

    private launch() {
        if (this.machine.machineState == SlotsMachineState.Motionless && this.launchFlag) {
            this.animationFlag = false;
            this.animationItemFlag = false;
            this.launchFlag = false;
            this.fruitsItemAnimation.stop();
            const deltaCoin = FruitsRoomData.instance.coin - FruitsRoomData.instance.getCurrentBetMoney();
            let FreeTimes = 0;
            if (deltaCoin >= 0) {
                if (FruitsRoomData.instance.billed) {
                    FreeTimes = FruitsRoomData.instance.billed.FreeTimes;
                    FreeTimes == 0 && this.topUI.updateCoin(deltaCoin, true);
                }
                FruitsRoomData.instance.billed = null
                FruitsRoomData.instance.targetIndexs = [];
                this.touchFlag = false;
                this.machine.launchMachine();
                SCFruits.getInstance().launchFruits()
                if (this.autoTimes && !FreeTimes) {
                    this.autoTimes = this.autoTimes - 1;
                }
            } else {
                if (FruitsRoomData.instance.billed) {
                    FreeTimes = FruitsRoomData.instance.billed.FreeTimes;
                    if (!FreeTimes) {
                        FruitsToast.show({ prefabPath: 'Fruits/prefab/pfb_fruits_toast_ui', content: this.node, txt: I18nMgr.getInstance().getStringByKey("fruits.goldCoinShortage") })
                        this.autoTimes = 0;
                    }
                } else {
                    FruitsToast.show({ prefabPath: 'Fruits/prefab/pfb_fruits_toast_ui', content: this.node, txt: I18nMgr.getInstance().getStringByKey("fruits.goldCoinShortage") })
                    this.autoTimes = 0;
                }
            }

            this.updateWinLabel()
        }
    }

    /**
     * 下注切换
     * @param target 
     * @param tag 
     */
    clickChangeBet(target: any, tag: string) {
        // if (!this.launchFlag) {
        //     return
        // }
        const length = FruitsRoomData.instance.BetMoney.length - 1;
        if (tag === 'add') {
            if (FruitsRoomData.instance.BetIdx >= length) {
                return
            }
            FruitsRoomData.instance.BetIdx += 1;
        } else if (tag === 'reduce') {
            if (FruitsRoomData.instance.BetIdx <= 0) {
                return
            }
            FruitsRoomData.instance.BetIdx -= 1;
        } else {
            if (FruitsRoomData.instance.BetIdx == length) {
                return
            }
            FruitsRoomData.instance.BetIdx = length;
        }
        const BetIdx = FruitsRoomData.instance.BetIdx;
        const params = {
            OpCode: 1,
            Params: [BetIdx]
        }
        SCFruits.getInstance().changeBet(params)
        this.updateBetLable();
        this.updateBtnState()
    }



    /**
     * 收到退出游戏事件
     */
    onGameQuitCallBack() {
        this.closeSelf()
    }
    /**
    * 水果拉霸收到玩家断线重连的消息
    * @param msg 
    */
    onReconnect(msg: any): void {
        SCFruits.getInstance().reconnect();
    }
    /**
    * 收到返回房间消息
    * @param msg 
    */
    onReturnRoom(msg: any) {
        UserData.getInstance().setRoomId(0);
        UserData.getInstance().setGameFreeId(0);
        console.log("水果拉霸收到返回房间的消息");
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
        console.log('水果拉霸房间信息')
        //console.log(msg);
        if (this.initFlag >= 2) {
            this.updateBetLable();
            this.topUI?.updateCoin(FruitsRoomData.instance.coin)
            this.topUI?.updateDiamond(FruitsRoomData.instance.diamond)
            this.reconnectionRestore();
        }
    }
    /**
     * 房间状态
     */
    onRoomState(msg: any) {

    }
    /**
     * 奖池
     */
    onPrize(msg: any) {
        const { PrizePool = 0 } = msg;
        this.updateJackPotLable(PrizePool)
    }
    /**
     * 中奖结果
    */
    onBilled(msg: any) {
        if (this.machine.machineState == SlotsMachineState.Rolling && FruitsRoomData.instance.billed) {
            const params: StopParams[] = [];
            //快速滚动 检测 2个bouns wild scatter
            //[0, 1, 2, 3, 4] 
            //[5, 6, 7, 8, 9]
            //[10,11,12,13,14]
            const { Cards } = FruitsRoomData.instance.billed;
            const params0 = { time: 0, fastRoll: false }
            const params1 = { time: 0, fastRoll: false }
            const params2 = matchFast(2, Cards);
            const params3 = matchFast(3, Cards);
            const params4 = matchFast(4, Cards);
            const arr = [params0, params1, params2, params3, params4];

            let delayTime = -2;
            let isadd = false;
            arr.forEach((v, index) => {
                if (v.fastRoll && !isadd) {
                    isadd = true;
                }
                if (isadd) {
                    delayTime += 2;
                }
                v.time = delayTime == -2 ? 0 : delayTime;
            })

            for (let i = 0; i < arr.length; ++i) {
                params.push({
                    stopImmediately: false,
                    fastRoll: arr[i].fastRoll,
                    fastRollDelay: arr[i].time,
                    timeInterval: 0.3,
                })
            }
            this.efCtrl.setBean(FruitsRoomData.instance.billed)
            FruitsRoomData.instance.targetIndexs = this.machine.stopMachine(params)
        }
    }

    /**
     * 进入前台
     */
    enterForegroundCb() {
        FruitsGameUI.enterBackground = false;
        SCFruits.getInstance().enterForegroundCb();
        this.machine.pause = false;
        this.fruitsItemAnimation.pause = false;
        console.log('暂停')
    }

    /**
     * 进入后台
     */
    enterBackgroundCb() {
        FruitsGameUI.enterBackground = true;
        SCFruits.getInstance().enterBackgroundCb();
        this.machine.pause = true;
        this.fruitsItemAnimation.pause = true;
        console.log('恢复')
    }

    private updateBetLable() {
        const text = FruitsRoomData.instance.getCurrentBetMoney() + '';
        if (this.bottomUI) {
            this.bottomUI.betLabel.string = fruitsNumFormat(text);
        }
    }

    private updateJackPotLable(num: any) {
        this.prize.play({ target: num, time: 0.5, format: true })
    }


    //选择自动滚动次数
    private async clickAuto(ev: any, type: string) {
        if (type == '1') {
            this.autoTimes = 20;
        } else if (type == '2') {
            this.autoTimes = 50;
        } else if (type == '3') {
            this.autoTimes = 100;
        } else if (type == '4') {
            this.autoTimes = 500;
        }
        this.bottomUI.autoBg.active = false;
        if (this.touchFlag && !this.freeFlag) {
            if (!this.efCtrl.spineFlag && !this.freeFlag) {
                this.efCtrl.stop();
                this.launchFlag = true;
                this.launch();
            }
        }
    }

    //更新按钮状态
    private updateBtnState() {
        const flag = this.touchFlag && !this.freeFlag;
        this.bottomUI?.betBtns.forEach(v => {
            v.interactable = flag && !this.autoTimes;
        })
        this.bottomUI.btnSpinNode.interactable = flag || Boolean(this.autoTimes);

        //this.topUI.btnBack.interactable = flag && !this.autoTimes;

        if (FruitsRoomData.instance.BetIdx == 0) {
            this.bottomUI.betBtns[0].interactable = false;
        }
        if (FruitsRoomData.instance.BetIdx >= FruitsRoomData.instance.BetMoney.length - 1) {
            this.bottomUI.betBtns[1].interactable = this.bottomUI.betBtns[2].interactable = false;
        }
    }

    private clickCloseAuto() {
        this.bottomUI.autoBg.active = false;
    }


    enterGame(msg: any) {
        let { OpCode } = msg
        if (OpCode == gamehall.gamehall.OpResultCode.OPRC_CoinNotEnough) {
            this.clickBack(null, true)
            UIMgr.getInstance().AlertTxtWithConfirmClose(I18nMgr.getInstance().getStringByKey("fruits.goldCoinShortage"), () => {
            });
        } else if (OpCode == gamehall.gamehall.OpResultCode.OPRC_RoomHadClosed) {
            this.clickBack(null, true)
            UIMgr.getInstance().AlertTxtWithConfirmClose("fruits.roomclosed", () => {
            });
        } else if (OpCode == gamehall.gamehall.OpResultCode.OPRC_SceneServerMaintain) {
            this.clickBack(null, true)
            UIMgr.getInstance().AlertTxtWithConfirmClose("fruits.serverMaintenance", () => {
            });
        } else if (OpCode) {
            this.clickBack(null, true)
            UIMgr.getInstance().AlertTxtWithConfirmClose(`${gamehall.gamehall.OpResultCode[OpCode]}`, () => {
            });
        }
    }



    /**
    * 实现分帧加载
    */
    async framingLoad() {
        const precreateDatas = [
            { path: 'Fruits/prefab/pfb_fruits_top_ui', type: 'top' },
            { path: 'Fruits/prefab/pfb_fruits_bottom_ui', type: 'bottom' },
        ]
        await this.executePreFrame(this._getItemGenerator(precreateDatas), 1)
    }

    /**
     * 分帧执行 Generator 逻辑
     *
     * @param generator 生成器
     * @param duration 持续时间（ms）
     *          每次执行 Generator 的操作时，最长可持续执行时长。
     *          假设值为8ms，那么表示1帧（总共16ms）下，分出8ms时间给此逻辑执行
     */
    private executePreFrame(generator: Generator, duration: number): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let gen = generator;
            // 创建执行函数
            let execute = () => {

                // 执行之前，先记录开始时间戳
                let startTime = new Date().getTime();

                // 然后一直从 Generator 中获取已经拆分好的代码段出来执行
                for (let iter = gen.next(); ; iter = gen.next()) {

                    // 判断是否已经执行完所有 Generator 的小代码段
                    // 如果是的话，那么就表示任务完成
                    if (iter == null || iter.done) {
                        resolve(true);
                        return;
                    }

                    // 每执行完一段小代码段，都检查一下是否
                    // 已经超过我们分配给本帧，这些小代码端的最大可执行时间
                    if (new Date().getTime() - startTime > duration) {

                        // 如果超过了，那么本帧就不在执行，开定时器，让下一帧再执行
                        this.scheduleOnce(() => {
                            execute();
                        }, 0.1);
                        return;
                    }
                }
            };

            // 运行执行函数
            execute();
        });
    }

    /**
    * （新增代码）获取生成子节点的Generator
    */
    private *_getItemGenerator(precreateDatas: any) {
        for (let i = 0; i < precreateDatas.length; i++) {
            yield this._initItem(precreateDatas[i]);
        }
    }

    /**
    * （和拆分前的代码一致）
    */
    private _initItem(data: any) {
        const { path, type } = data;
        let pb = ResMgr.getInstance().getPrefabByPath(path);
        const node = PoolManager.instance.getNode(pb, this.node);
        if (type == 'top') {
            this.topUI = node.getComponent(FruitsTopUI);
            this.topUI.showEffect();
            this.topUI.clickBackCallBack = this.clickBack.bind(this)
            this.topUI.updateCoin(FruitsRoomData.instance.coin)
            this.topUI.updateDiamond(FruitsRoomData.instance.diamond)
            this.topUI.roomBtnBack.node.active = false;
        } else if (type == 'bottom') {
            this.bottomUI = node.getComponent(FruitsBottomUI);
            this.bottomUI.showEffect();
            this.bottomUI.clickAutoFunc = this.clickAuto.bind(this);
            this.bottomUI.clickChangeBetFunc = this.clickChangeBet.bind(this);
            this.bottomUI.clickLaunchFunc = this.clickLaunch.bind(this);
            this.updateBetLable();
        }
    }

}
