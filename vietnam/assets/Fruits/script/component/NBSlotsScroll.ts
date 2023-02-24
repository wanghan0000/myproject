/**
 * 2022/11/17 by lin
 * 拉霸专用滚动容器
 */
import { _decorator, Component, Node, Prefab, instantiate, UITransform, Vec3, tween, Pool } from 'cc';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
const { ccclass, property } = _decorator;

export enum NBSlotsScrollState {
    /**
     * 静止
     */
    Motionless,
    /**
     * 匀速运动
     */
    Constant,
    /**
     * 快速运动
     */
    Fast,
    /**
     * 回弹
     */
    Springback,
}

export interface StopParams {
    /**
     * 是否立即停止
     */
    stopImmediately: boolean,
    /**
     * 是否快速滚动
     */
    fastRoll: boolean,
    /**
     * 滚动延时
     */
    fastRollDelay: number,

    timeInterval: number,
}

export interface NBSlotsScrollIF {
    /**
     * 滚动速度 (每帧滚动距离单位像素)
     * default 30px/fps
     */
    constantSpeed: number
    /**
     * 滚动持续总时间 单位秒
     * default 0.5s
     */
    duration: number
    /**
     * 回弹距离 单位像素
     * default 50px
     */
    inertanceDistance: number
    /**
     * 回弹时间 单位秒
     * default 0.3s
     */
    inertanceDuration: number
    /**
     * 回弹开关
     * default true
     */
    inertanceSwitch: boolean
    /**
     * 快速滚动开关
     */
    fastRollSwitch: boolean
    /**
     * 快速滚动速度
     */
    fastRollSpeed: number
    /**
     * 快速滚动持续时长
     */
    fastRollDuration: number
    /**
     * 启动滚动
     */
    startScroll: () => void;
    /**
     * 停止滚动
     */
    stopScroll: (params: StopParams) => number;
    /**
     * 运行状态
     */
    runState(): NBSlotsScrollState;

    /**
     * 滚动钩子
     */
    rollHook: {
        /**
         * 刷新节点
         */
        refreshItem?: (node: Node, index: number) => void;
        /**
         * 滚动开始
         */
        rollStart?: () => void;
        /**
         * 快速滚动开始
        */
        fastRollStart?: () => void,
        /**
         * 回弹开始
         */
        springbackStart?: () => void,
        /**
         * 滚动结束
         */
        rollEnd?: (nodes: Node[]) => void;
        /**
         * 初始化结束
         */
        initEnd?:()=>void
    }
}

@ccclass('NBSlotsScroll')
export default class NBSlotsScroll extends Component implements NBSlotsScrollIF {


    //节点预制体
    @property({ type: Prefab })
    templateNode: Prefab = null;
    @property(Node)
    contentNode: Node = null;
    //几行
    @property({ displayName: '一列多少行' })
    rows: number = 0;
    @property({ displayName: '滚动速度(每帧滚动距离单位像素)' })
    constantSpeed = 30;
    @property({ displayName: '滚动持续总时间 单位秒', min: 0.5 })
    duration: number = 0.5;


    @property({ displayName: '回弹开关' })
    inertanceSwitch: boolean = true;
    @property({
        displayName: '回弹距离 单位像素', visible() {
            const call: any = this;
            return call.inertanceSwitch
        }
    })
    inertanceDistance: number = 50;
    @property({
        displayName: '回弹时间 单位秒', visible() {
            const call: any = this;
            return call.inertanceSwitch
        }
    })
    inertanceDuration: number = 0.3;

    @property({ displayName: '快速滚动开关' })
    fastRollSwitch: boolean = false;
    @property({
        displayName: '快速滚动速度（每帧滚动距离单位像素）'
    })
    fastRollSpeed: number = 60;
    @property({
        displayName: '快速滚动速度 持续时间 单位秒'
    })
    fastRollDuration: number = 0.5;

    rollHook: {
        refreshItem?: (node: Node, index: number) => void;
        rollStart?: () => void;
        fastRollStart?: () => void,
        springbackStart?: () => void,
        rollEnd?: (nodes: Node[]) => void;
        initEnd?:()=>void
    } = {}

    //节点高度
    private itemHeight: number = 0;
    //显示节点
    public childrens: Node[] = [];
    //节点池
    //private nodePool: Node[] = [];
    //运行状态
    private runFlag: NBSlotsScrollState = NBSlotsScrollState.Motionless;
    //运行过的时间
    public elapsed: number = 0;
    //c容器上一次滚动位置
    private lastContentPosY = 0;
    //总节点个数
    private numItems = Number.MAX_SAFE_INTEGER;
    //普通滚动位置
    private targetY: number;
    //快速滚动位置
    private fastTargetY: number;


    private loadingComplete: boolean = false;

    //滚动高度
    private scrollHeight:number = 0;

    onLoad() {
        const node: Node = this._getItem(this.contentNode) //instantiate(this.templateNode);
        this.itemHeight = node.getComponent(UITransform).height;
        this.contentNode.getComponent(UITransform).height = Number.MAX_SAFE_INTEGER;
        //this.nodePool.push(node);
        this._removeItem(node);

        const height = this.itemHeight * this.rows;
        this.node.getComponent(UITransform).height = height;
        this.scrollHeight = height;
    }

    start() {
        this._startCreateItems();
    }

    /**
     * 刷新
     */
    refresh() {
        this.childrens.forEach((v, index) => {
            this.rollHook.refreshItem?.(v, index);
        })
    }

    //创建节点
    private async _startCreateItems() {
        await this.framingLoad()
        this.loadingComplete = true;
        tween(this.contentNode)
        .to(this.inertanceDuration, { position: new Vec3(0, -this.scrollHeight, 1) }, {
            easing: 'quadOut',
            onComplete:()=>{
                this.rollHook.initEnd?.();
            }
        })
        .start();
    }

    /**获取一个列表项 优先从内存池获取*/
    private _getItem(parent: Node): Node {
        return PoolManager.instance.getNode(this.templateNode, parent)
    }
    //将节点放入内存池并删除
    private _removeItem(item: Node) {
        PoolManager.instance.putNode(item)
    }


    //节点在窗口的位置
    private _getPositionInView(item: Node): Vec3 {
        let worldPos = this.contentNode.getComponent(UITransform).convertToWorldSpaceAR(item.position);
        let viewPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        return viewPos;
    }

    //创建下一个
    private _createNextItem() {
        const firstItem: any = this.childrens[0];
        if (firstItem) {
            const index = firstItem['itemIndex'] - 1;
            if (index < 0) {
                return;
            }
            const item: any = this._getItem(this.contentNode);
            item['itemIndex'] = index;
            item.position = new Vec3(firstItem.position.x, firstItem.position.y - this.itemHeight, firstItem.position.z)
            if (this._inScreenByItem(item)) {
                //this.contentNode.addChild(item);
                this.childrens.unshift(item);
                this.rollHook.refreshItem?.(item, index);
                this._createNextItem();
            } else {
                this._removeItem(item)
            }
        } else {
            //定位重新创建
            //根据pos 计算下标
            const index = Math.abs(Math.floor((this.contentNode.position.y + this.contentNode.parent.getComponent(UITransform).height) / this.itemHeight));
            const item: any = this._getItem(this.contentNode);
            item['itemIndex'] = index;
            item.position = new Vec3(item.position.x, this.itemHeight / 2 + (index - 1) * this.itemHeight, item.position.z)
            if (this._inScreenByItem(item)) {
                //this.contentNode.addChild(item);
                this.childrens.unshift(item);
                this.rollHook.refreshItem?.(item, index);
                this._createNextItem();
            } else {
                this._removeItem(item);
            }
        }
    }

    //创建上一个
    private _createPreviousItem() {
        const lastItem: any = this.childrens[this.childrens.length - 1];
        if (lastItem) {
            const index = lastItem['itemIndex'] + 1;
            if (index >= this.numItems) {
                return;
            }
            const item: any = this._getItem(this.contentNode);
            item['itemIndex'] = index;
            item.position = new Vec3(lastItem.position.x, lastItem.position.y + this.itemHeight, lastItem.position.z)
            if (this._inScreenByItem(item)) {
                //this.contentNode.addChild(item);
                this.childrens.push(item);
                this.rollHook.refreshItem?.(item, index);
                this._createPreviousItem();
            } else {
                this._removeItem(item)
            }
        } else {
            const index = Math.abs(Math.floor(this.contentNode.position.y / this.itemHeight));
            const item: any = this._getItem(this.contentNode);
            item['itemIndex'] = index;
            item.position = new Vec3(item.position.x, this.itemHeight / 2 + (index - 1) * this.itemHeight, item.position.z)
            if (this._inScreenByItem(item)) {
                //this.contentNode.addChild(item);
                this.childrens.push(item);
                this.rollHook.refreshItem?.(item, index);
                this._createPreviousItem();
            } else {
                this._removeItem(item)
            }
        }
    }

    //节点是否在窗口内
    private _inScreenByItem(item: any) {
        if (!item) {
            return;
        }
        let index = item['itemIndex'];
        if (index < 0 || index >= this.numItems) {
            return false;
        }
        const point = this._getPositionInView(item);
        const halfScrollView = this.node.getComponent(UITransform).height / 2;
        if (
            point.y - this.itemHeight / 2 > halfScrollView ||
            point.y + this.itemHeight / 2 < -halfScrollView
        ) {
            return false;
        }
        return true
    }

    /**
     * @param item 
     * @param percentage 
     * @returns 
     */
    //节点在窗口百分比
    public blurInScreenByItem(item: any, percentage: number) {
        if (!item) {
            return;
        }
        const point = this._getPositionInView(item);
        const halfScrollView = this.node.getComponent(UITransform).height / 2;
        if (
            point.y - this.itemHeight / 2 > halfScrollView * percentage ||
            point.y + this.itemHeight / 2 < -halfScrollView * percentage
        ) {
            return false;
        }
        return true;
    }

    step(dt: number) {
        if (this.runFlag === NBSlotsScrollState.Motionless) {
            return
        }
        this.elapsed += dt;
        if (this.runFlag === NBSlotsScrollState.Constant) {
            //this.constantUpdate(t);
            let currentY = this.contentNode.position.y - this.constantSpeed;
            if (currentY < this.targetY && !this.fastRollSwitch) {
                //停止
                this.contentNode.position = new Vec3(this.contentNode.position.x, this.targetY, this.contentNode.position.z);
            } else {
                this.contentNode.position = new Vec3(this.contentNode.position.x, currentY, this.contentNode.position.z);
            }
            this.updateItem()
            if (currentY < this.targetY) {
                if (this.fastRollSwitch) {
                    this.runFlag = NBSlotsScrollState.Fast;
                    this.rollHook.fastRollStart?.()
                } else {
                    if (this.inertanceSwitch) {
                        this.runFlag = NBSlotsScrollState.Springback;
                        this.startBounce();
                    } else {
                        this.runFlag = NBSlotsScrollState.Motionless;
                        this.onComplete();
                    }
                }
            }
        } else if (this.runFlag === NBSlotsScrollState.Fast) {
            let currentY = this.contentNode.position.y - this.fastRollSpeed;
            if (currentY < this.fastTargetY) {
                this.contentNode.position = new Vec3(this.contentNode.position.x, this.fastTargetY, this.contentNode.position.z);
            } else {
                this.contentNode.position = new Vec3(this.contentNode.position.x, currentY, this.contentNode.position.z);
            }
            this.updateItem()
            if (currentY < this.fastTargetY) {
                if (this.inertanceSwitch) {
                    this.runFlag = NBSlotsScrollState.Springback;
                    this.startBounce();
                } else {
                    this.runFlag = NBSlotsScrollState.Motionless;
                    this.onComplete();
                }
            }
        } else {
            this.updateItem();
        }
    }

    //开始回弹
    private startBounce() {
        const selftween = tween(this.contentNode)
            .by(this.inertanceDuration * 1 / 3, { position: new Vec3(0, -this.inertanceDistance, 0) }, {
                easing: 'quadOut'
            })
            .by(this.inertanceDuration * 2 / 3, { position: new Vec3(0, this.inertanceDistance, 0) }, {
                easing: 'quadOut', onComplete: () => {
                    this.onComplete();
                }
            })
            .start();
        const call: any = this;
        call['selftween'] = selftween;
        this.rollHook.springbackStart?.()
    }

    //滚动完成
    private onComplete() {
        this.runFlag = NBSlotsScrollState.Motionless;
        this.fastRollSwitch = false;

        const nodes: Node[] = []
        this.childrens.forEach((n: any, i) => {
            if (this.blurInScreenByItem(n, 0.95)) {
                nodes.push(n);
            }
        })
        this.rollHook.rollEnd?.(nodes);
    }

    //更新子节点
    private updateItem() {
        const isUp = this.contentNode.position.y > this.lastContentPosY;
        const childs = this.childrens;
        const halfScrollView = this.node.getComponent(UITransform).height / 2;
        for (let i = 0; i < childs.length; ++i) {
            const item = childs[i];
            const viewPos = this._getPositionInView(item);
            if (isUp) {
                //如果item超过上边界 那么就移除
                if (viewPos.y - item.getComponent(UITransform).height / 2 > halfScrollView) {
                    this._removeItem(item);
                    childs.splice(i, 1);
                    i--;
                }
            } else {
                if (viewPos.y + item.getComponent(UITransform).height / 2 < -halfScrollView) {
                    this._removeItem(item);
                    childs.splice(i, 1);
                    i--;
                }
            }
        }

        if (isUp) {
            //创建下一个
            //console.log('创建下一个')
            this._createNextItem();
        } else {
            //创建上一个
            //console.log('创建上一个')
            this._createPreviousItem();
        }
        this.lastContentPosY = this.contentNode.position.y;
    }


    //开始滚动
    startScroll() {
        if(!this.loadingComplete){
            return
        }
        this.contentNode.position = new Vec3(this.contentNode.position.x, 0, this.contentNode.position.z);
        //处理所有子节点位置
        this.childrens.forEach((v, index) => {
            const pos = new Vec3(v.position);
            pos.y = this.itemHeight / 2 + (index) * this.itemHeight;
            v.setPosition(pos)
        })
        const count = this.rows + 1;
        for (let i = 0; i < count; ++i) {
            const node: any = this.childrens[i];
            node && (node['itemIndex'] = i)
        }
        this.elapsed = 0;
        const call: any = this;
        if (call['selftween']) {
            call['selftween'].stop();
            call['selftween'] = null;
        }
        this.runFlag = NBSlotsScrollState.Constant;
        this.targetY = -Number.MAX_SAFE_INTEGER;
        this.fastRollSwitch = false;
        this.rollHook.rollStart?.();
    }
    //停止
    stopScroll(params: StopParams): number {
        const { stopImmediately, fastRoll } = params;

        const item: any = this.childrens[this.childrens.length - 1];
        let retPoint;


        let immediatelyStopFlag;
        if (stopImmediately) {
            immediatelyStopFlag = true;
        } else {
            if (this.elapsed > this.duration) {
                immediatelyStopFlag = true;
            } else {
                const delta = (this.duration - this.elapsed)
                const y = delta * this.constantSpeed * 60;
                const deltaIndex = Math.floor(y / this.itemHeight);
                if (deltaIndex > (this.rows + 1)) {
                    const targetIndex = deltaIndex + item['itemIndex'];
                    this.targetY = this.rows * this.itemHeight - (targetIndex + 1) * this.itemHeight;
                    retPoint = targetIndex - (this.rows - 1);
                } else {
                    immediatelyStopFlag = true;
                }
            }
        }

        if (immediatelyStopFlag) {
            const targetIndex = item['itemIndex'] + this.rows + 1;
            this.targetY = this.rows * this.itemHeight - (targetIndex + 1) * this.itemHeight;
            retPoint = targetIndex - (this.rows - 1);
        }

        if (fastRoll) {
            const distance = this.fastRollDuration * this.fastRollSpeed * 60;
            const deltaIndex = Math.floor(distance / this.itemHeight);
            const targetIndex = deltaIndex + retPoint + (this.rows - 1)
            this.fastTargetY = this.rows * this.itemHeight - (targetIndex + 1) * this.itemHeight;

            retPoint = targetIndex - (this.rows - 1);
            this.fastRollSwitch = true;
        }


        console.log('停止下标' + retPoint);
        return retPoint;
    }

    runState(): NBSlotsScrollState {
        return this.runFlag
    }

    onDestroy() {
        const call: any = this;
        if (call['selftween']) {
            call['selftween'].stop();
            call['selftween'] = null;
        }
        this.childrens.length = 0;
    }



    /**
* 实现分帧加载
*/
    async framingLoad() {
        const count = this.rows;
        this.executePreFrame(this._getItemGenerator(count), 1)
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
                        },0.2);
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
    private *_getItemGenerator(length: number) {
        for (let i = 0; i < length; i++) {
            yield this._initItem(i);
        }
    }

    /**
    * （和拆分前的代码一致）
    */
    private _initItem(index: number) {
        const node: any = this._getItem(this.contentNode);
        node['itemIndex'] = index;
        this.childrens.push(node);
        const pos = new Vec3(node.position);
        pos.y = this.itemHeight / 2 + (index) * this.itemHeight + this.scrollHeight;
        node.setPosition(pos)
        this.rollHook.refreshItem?.(node, index);
    }

}