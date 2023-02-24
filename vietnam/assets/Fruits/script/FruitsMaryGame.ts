import { _decorator, Node, Label, tween, v3, director, UITransform, Widget, UIOpacity, Sprite } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { EventMgr } from '../../ScriptCore/events/eventmgr';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { UIScreen, UIWindow } from '../../ScriptCore/UIFrame/UIForm';
import { FruitsUIMgr } from '../FruitsUIMgr';
import NBSlotsMachine, { SlotsMachineState } from './component/NBSlotsMachine';
import { StopParams } from './component/NBSlotsScroll';
import NBSlotsTurntableMachine from './component/NBSlotsTurntableMachine';
import { FruitsGameEventName } from './configs/fruitsgameeventname';
import { FruitsBGMusic, FruitsItemConfig } from './FruitsConfig';
import { FruitsRoomData } from './fruitsdata/FruitsRoomData';
import { FruitsEffectType } from './FruitsEffectWin';
import { palyFruitsLableAnim } from './FruitsUtils';
import { SCFruits } from './net/scFruits';

const MaryMachineIndexs: any = {
    0: 'zhadan',
    1: 'xiangjiao',
    2: 'yingtao',
    3: 'xigua',
    4: 'putao',
    5: 'boluo',
    6: 'zhadan',
    7: 'xigua',
    8: 'xiangjiao',
    9: 'juzi',
    10: 'yingtao',
    11: 'ningmeng',
    12: 'zhadan',
    13: 'boluo',
    14: 'putao',
    15: 'xigua',
    16: 'yingtao',
    17: 'xiangjiao',
    18: 'zhadan',
    19: 'putao',
    20: 'xigua',
    21: 'yingtao',
    22: 'ningmeng',
    23: 'juzi'
}

const MaryPosY = [
    -9.5,
    77.3,
    146.1,
    224.1,
    301.9,
    379.9,
    458.8
]

const { ccclass, property } = _decorator;

@ccclass('FruitsMaryGame')
export class FruitsMaryGame extends UIWindow {

    //滚动机器
    @property(NBSlotsMachine)
    machine: NBSlotsMachine = null;

    //玛丽机
    @property(NBSlotsTurntableMachine)
    maryMachine: NBSlotsTurntableMachine = null;

    @property(Node)
    rollItem: Node = null;

    //免费次数
    @property(Label)
    freeLable: Label = null;
    //中奖累计金额
    @property(Label)
    totalCoin: Label = null;
    //当前押注金额
    @property(Label)
    betLabel: Label = null;

    onLoad() {
        this.node.position = v3(0, 720, 0)
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_MARY_BILLED, this.onMaryBilled, this);
        const billed = FruitsRoomData.instance.maryBilled;
        if (billed) {
            FruitsRoomData.instance.maryTargetIndexs = [1, 1, 1, 1];
            let { MaryFreeTimes = 0 } = billed;
            if (!MaryFreeTimes && FruitsRoomData.instance.billed) {
                MaryFreeTimes = FruitsRoomData.instance.billed.MaryFreeTimes;
            }
            this.freeLable.string = MaryFreeTimes + '';
        } else {
            const { MaryFreeTimes = 0 } = FruitsRoomData.instance.billed as any;
            this.freeLable.string = MaryFreeTimes + '';
        }

        this.initMachine();
        this.betLabel.string = FruitsRoomData.instance.getCurrentBetMoney() + '';
        AudioMgr.getInstance().playMusic(FruitsBGMusic.mary, true);
    }


    onHide() {
        EventMgr.getInstance().removeByTarget(this);
    }

    //覆盖父类方法全屏不展示出现效果
    public async showEffect(): Promise<boolean> {
        return new Promise((reject) => {
            tween(this.node).to(0.5, { position: v3(0, 0, 0) }, {
                onComplete: () => {
                    reject(true)
                }
            }).start()
        })

    }

    public async hideEffect(): Promise<boolean> {
        return new Promise((reject) => {
            tween(this.node).to(0.5, { position: v3(0, 720, 0) }, {
                onComplete: () => {
                    reject(true)
                }
            }).start()
        })
    }


    async start() {
        this.maryMachine.temp = FruitsRoomData.instance.lastMaryId;
        this.rollItemEvents(this.maryMachine.temp);
        await this.delayTime(1)
        this.clickLaunch();
    }

    private initMachine() {
        this.machine.slotsMachineHook = {
            //滚动完成
            machineRollComplete: () => { },
            rollEnd: this.rollEnd.bind(this),
            refreshItem: this.refreshItem.bind(this),
            rollStart: this.rollStart.bind(this),
            fastRollStart: this.fastRollStart.bind(this),
            springbackStart: this.springbackStart.bind(this),
            initEnd:()=>{

            }
        }
    }

  


    //特效退出回调
    private async effectCallBack(type: FruitsEffectType, mode: string) {
        await this.delayTime(2)
        this.onBtnExit();
    }

    /**
     * 滚动完成
     */
    private async machineRollComplete() {
        const { MaryFreeTimes = 0 ,MaryOutTotalWin = 0 ,MaryMidTotalWin = 0} = FruitsRoomData.instance.maryBilled;
        const winCoin = MaryOutTotalWin + MaryMidTotalWin
        this.updateWinLable(winCoin);
        this.freeLable.string = MaryFreeTimes + '';
        if (MaryFreeTimes > 0) {
            //动画播放完成滚动下一个
            await this.delayTime(3)
            this.clickLaunch();
        } else {
            await this.delayTime(3)

            if(winCoin){
                await FruitsUIMgr.getInstance().showEffectUI(
                    { coustomCallBack: this.effectCallBack.bind(this), type:FruitsEffectType.Mary, bean: FruitsRoomData.instance.maryBilled }
                );
            }else {
                this.onBtnExit();
            }
        }
    }

    /**
     * 某一列滚动完成
     * @param column 列
     */
    private rollEnd(column: number): void {
    }
    /**
     * 节点刷新
     * @param column 
     * @param node 
     * @param index 
     */
    private refreshItem(column: number, node: Node, index: number): void {
        const tag = FruitsRoomData.instance.matchMaryBilled(column, index);
        const img = node.getChildByName('bg');
        const { icon } = FruitsItemConfig[tag];
        img.getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Fruits/res/game").getSpriteFrame(icon);
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
    }
    /**
     * 开始回弹
     */
    private springbackStart(column: number) {
        console.log('开始回弹' + column);
        if (column == 0) {
            const { MaryWinId } = FruitsRoomData.instance.maryBilled;
            const indexs = FruitsItemConfig[MaryWinId].indexs;
            if (indexs) {
                const index = indexs[Math.floor(Math.random() * (indexs.length - 1) + 1)];
                this.maryMachine.stop(index);
                FruitsRoomData.instance.lastMaryId = index;
            }

        }
    }
    rollItemEvents(index: number) {
        const startx = -9.5;
        let row;
        let column;
        if (index <= 6) {
            //top
            row = 0;
            column = index % 7;
        } else if (index > 6 && index <= 11) {
            //right
            row = index - 6;
            column = 6;
        } else if (index > 11 && index <= 18) {
            //bottom
            row = 6;
            column = 7 - (index - 11) % 8;
        } else {
            //left
            row = 6 - (index - 18);
            column = 0;
        }

        const endx = startx + column * 104;
        const endy = MaryPosY[row] //starty + row * 77.3;
        const widget = this.rollItem.getComponent(Widget);
        widget.left = endx;
        widget.top = endy;
        widget.node.children.forEach((v, i) => {
            v.active = false;
        });
        widget.node.getChildByName(MaryMachineIndexs[index]).active = true;
    }

    /**
    * 点击启动
    */
    clickLaunch() {
        if (this.machine.machineState == SlotsMachineState.Motionless) {
            FruitsRoomData.instance.maryBilled = null;
            FruitsRoomData.instance.maryTargetIndexs = [];
            this.machine.launchMachine();
            this.maryMachine.play();
            SCFruits.getInstance().launchFruits()
        }
    }

    /**
    * 小玛利游戏
    * Coin: 1159210
    * MaryCards: (4) [10, 6, 8, 11]
    * MaryWinId: 5
    * */
    onMaryBilled(msg: any) {
        const params: StopParams[] = [];
        for (let i = 0; i < 4; ++i) {
            params.push({
                stopImmediately: false,
                fastRoll: false,
                fastRollDelay: 0,
                timeInterval: 0.3,
            })
        }
        FruitsRoomData.instance.maryTargetIndexs = this.machine.stopMachine(params)
    }




    public async onBtnExit() {
        const { exitCallBack } = this.params[0];
        await this.closeSelf();
        exitCallBack && exitCallBack();
    }


    private updateWinLable(coin: number) {
        palyFruitsLableAnim({
            target: coin,
            lable: this.totalCoin,
            format: true,
            time: 0.5,
            cb: null
        })
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

    onDestroy() {
        this.clearAllTime();
    }
}
/**
 * 0
 * 2
 * 
 * 2
 */