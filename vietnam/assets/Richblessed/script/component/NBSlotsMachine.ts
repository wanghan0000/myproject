import { _decorator, Component, Node } from 'cc';
import NBSlotsScroll, { StopParams } from './NBSlotsScroll';
/**
 * 2022/11/17 by lin
 * 拉霸专用滚动容器
 */
const { ccclass, property } = _decorator;

export enum SlotsMachineRollLevel {
    /**
     * 低速
     */
    LowSpeed,
    /**
     * 正常速度
     */
    NormalSpeed,
    /**
     * 快速
     */
    FastSpeed
}

export enum SlotsMachineState {
    /**
     * 停止状态
     */
    Motionless,
    /**
     * 滚动中
     */
    Rolling,
}

export interface NBSlotsMachineIF {
    /**
     * 滚动条
     */
    slotsSlots: NBSlotsScroll[];
    /**
     * 机器状态
     */
    machineState: SlotsMachineState;
    /**
     * 速度等级
     */
    speedLevel: SlotsMachineRollLevel;
    /**
     * 启动机器
     */
    launchMachine(): void;

    /**
     * 停止机器
     */
    stopMachine(params: StopParams[]): number[];

    /**
     * 钩子
     */
    slotsMachineHook: {
        /**
         * 滚动完成
         */
        machineRollComplete: () => void;
        /**
         * 单例滚动
         */
        rollEnd?: (column: number,nodes:Node[]) => void;
        /**
         * 刷新节点
         */
        refreshItem?: (column: number, node: Node, index: number) => void;
        /**
        * 滚动开始
        */
        rollStart?: (colum: number) => void;
        /**
         * 快速滚动开始
         */
        fastRollStart?: (column: number) => void;
        /**
         * 回弹开始
         */
        springbackStart?: (column: number) => void;
    }
}


@ccclass('NBSlotsMachine')
export default class NBSlotsMachine extends Component implements NBSlotsMachineIF {

    slotsMachineHook: {
        machineRollComplete: () => void,
        rollEnd: (column: number,nodes:Node[]) => void;
        refreshItem: (column: number, node: Node, index: number) => void;
        rollStart: (colum: number) => void;
        fastRollStart: (column: number) => void;
        springbackStart: (column: number) => void;
    } = null;

    @property({ displayName: '滚动节点', type: NBSlotsScroll })
    slotsSlots: NBSlotsScroll[] = [];

    @property({ displayName: '低速（相对于正常速度的百分比 0-1）', range: [0.1, 1.0, 0.8] })
    lowRate: number = 0.8;

    @property({ displayName: '高速（相对于正常速度的百分比 0-1）', range: [0.1, 1.0, 0.2] })
    fastRate: number = 0.2;

    @property({ displayName: '启动时间间隔, 时间单位s' })
    delayInterval: number = 0;

    machineState: SlotsMachineState = SlotsMachineState.Motionless;

    private endTimes: number = 0;

    //速度等级
    _speedLevel: SlotsMachineRollLevel = SlotsMachineRollLevel.NormalSpeed;
    public set speedLevel(v: SlotsMachineRollLevel) {
        if (this._speedLevel == v) {
            return
        }
        this._speedLevel = v;

    }
    public get speedLevel(): SlotsMachineRollLevel {
        return this._speedLevel;
    }

    private durationList: any[] = [];
    private fastRollDurationList: any[] = [];


    onLoad() {
        this.slotsSlots.forEach((v) => {
            this.durationList.push(v.duration);
            this.fastRollDurationList.push(v.fastRollDuration);
        })


        this.slotsSlots.forEach((v, column) => {
            v.rollHook = {
                rollEnd: (nodes:Node[]) => {
                    this.machineRollEnd();
                    this.slotsMachineHook?.rollEnd?.(column,nodes);
                },
                refreshItem: (node, index) => {
                    this.slotsMachineHook?.refreshItem?.(column, node, index);
                },
                rollStart: () => {
                    this.slotsMachineHook?.rollStart?.(column);
                },
                fastRollStart: () => {
                    this.slotsMachineHook?.fastRollStart?.(column);
                },
                springbackStart: () => {
                    this.slotsMachineHook?.springbackStart?.(column);
                },
            }
        })
    }

    update(dt: number) {
        this.slotsSlots.forEach((v) => {
            v.step(dt);
        })
    }

    //滚动完成
    private machineRollEnd() {
        if (this.machineState === SlotsMachineState.Rolling) {
            this.endTimes += 1;
            if (this.endTimes >= this.slotsSlots.length) {
                this.endTimes = 0;
                this.machineState = SlotsMachineState.Motionless;
                this.slotsMachineHook.machineRollComplete?.();
            }
        }
    }

    /**
     * 启动机器
     */
    public async launchMachine() {
        //let rate = 1.0;
        // if (this._speedLevel === SlotsMachineRollLevel.LowSpeed) {
        //     rate = 1 + this.lowRate;
        // } else if (this._speedLevel === SlotsMachineRollLevel.FastSpeed) {
        //     rate = this.fastRate;
        // }
        // this.durationList.forEach((v, index) => {
        //     this.slotsSlots[index].duration = v * rate;
        // })
        // this.fastRollDurationList.forEach((v, index) => {
        //     this.slotsSlots[index].fastRollDuration = v * rate;
        // })

        this.machineState = SlotsMachineState.Rolling;
        for (let i = 0; i < this.slotsSlots.length; ++i) {
            let time = i * this.delayInterval * 1000;
            if (this.delayInterval > 0.001) {
                await this.promiseWait(time);
            }
            this.slotsSlots[i].startScroll();
        }
    }

    /**
     * 刷新节点
     */
    public nonotifyItemChanged() {
        this.slotsSlots.forEach(element => {
            element.refresh();
        });
    }

    private promiseWait(time: number) {
        return new Promise((r) => {
            setTimeout(() => {
                r(true)
            }, time);
        })
    }

    public getWindowChildrens(): Node[] {
        let ret: Node[] = [];
        this.slotsSlots.forEach((v, index) => {
            let effective = 0;
            v.childrens.forEach((n:any, i) => {
                if(n['itemIndex'] >= this.results[index] && effective < v.rows){
                    effective += 1;
                    ret.push(n);
                }
            })
        })
        return ret;
    }

    private results: number [] = [];
    stopMachine(params: StopParams[]): number[] {
        const retPoint:any = [];
        this.slotsSlots.forEach((v, index) => {
            if (params[index]) {
                retPoint.push(v.stopScroll(params[index]));
            }
        })
        this.results = retPoint;
        return retPoint
    }
}