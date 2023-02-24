import { _decorator, Component, Node, EventHandler } from 'cc';
/**
 * 2022/11/28 by lin
 */
const { ccclass, property } = _decorator;


@ccclass('NBSlotsTurntableMachine')
export default class NBSlotsTurntableMachine extends Component {

    @property
    numItems: number = 8;

    @property({ type: [EventHandler] })
    rollItemEvents: EventHandler[] = [];

    @property({ type: [EventHandler] })
    completeEvents: EventHandler[] = [];

    private elapsed: number = 0;

    private runFlag: boolean = false;

    private _curIndex = 0;

    public get curIndex(): number {
        return this._curIndex
    }

    public set curIndex(v: number) {
        this._curIndex = v;
    }

    private curveFunc: any = null;

    public oldIndex: number = 0;
    public temp: number = 0;
    public play() {
        this.elapsed = 0;
        this.runFlag = true;
        this.oldIndex = this.temp;
        this.curveFunc = this.getCurve(0);

    }

    public stop(index: number) {
        let p = index - this.oldIndex;
        if (p < 0) {
            p = this.numItems + p;
        }

        this.curveFunc = this.getCurve(p);
        this.curveFunc.stop();
        this.temp = index;
    }


    update(dt: number) {
        if (!this.runFlag) {
            return
        }
        this.step(dt);
    }

    private step(dt: number) {
        this.elapsed += dt;
        const index = this.curveFunc(this.elapsed);
        let p = index + this.oldIndex;
        if (p >= this.numItems) {
            p = p - this.numItems;
        }
        //let index = this.curveFunc(this.elapsed)
        if (index == -1) {
            this.runFlag = false;
            EventHandler.emitEvents(this.completeEvents);
            // const delta = Date.now() - this.tsetTime;
            // console.log('时间间隔' + delta);
            return
        }
        EventHandler.emitEvents(this.rollItemEvents, p);
    }


    //获取运行曲线函数
    //@param {Number} period 循环周期
    //@param {Number} targetValue 目标值。假设周期是8，目标值可以值0到7任意一个数字
    //@param {Number} time 运行时间。-1表示手动停止
    //@return {Number} 当前位置，-1表示结束
    private getCurve(targetValue: number) {
        const period = this.numItems;
        //最大运行速度，如果循环周期长，可以调快点
        const maxSpeed = 30
        //停止状态
        let bStop = 0
        //调用停止命令的时候，之前运行的时间
        let decTime = 0
        //调用停止命令的时候，走的路程
        let distance = 0
        let acc = maxSpeed / 0.5
        const func: any = function (t: number) {
            let rs = 0
            if (t < 0.5) {
                //第一段 加速
                rs = acc * t * t / 2
            } else if (bStop == 0) {
                //第二段 匀速 ，没有停止命令前，一直保持
                rs = maxSpeed / 2 * 0.5 + (t - 0.5) * maxSpeed
            } else if (bStop == 1) {
                //开始减速，计算需要到达指定位置所需的加速度
                bStop = 2
                decTime = t
                distance = Math.round(maxSpeed / 2 * 0.5 + (t - 0.5) * maxSpeed)
                //减速的圈数，表示减速的快慢
                const easeCircle = 2
                const remain = targetValue - distance % period + easeCircle * period
                acc = maxSpeed * maxSpeed / (2 * remain)
            }
            if (bStop == 2) {
                //减速，到达指定位置
                const t1 = t - decTime
                const cur = maxSpeed - acc * t1
                rs = cur < 0 ? -1 : distance + (maxSpeed + cur) / 2 * t1
            }
            //输出规范化的值
            return Math.round(rs) % period
        }
        func.stop = function () {
            bStop = 1
        }
        return func
    }
}