
import { instantiate, _decorator } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { EventMgr } from '../../ScriptCore/events/eventmgr';
import { BaseGameLoading } from '../../ScriptCore/games/basegameloading';
import { PoolManager } from '../../ScriptCore/panda/utils/poolmgr';
import { ResMgr, ResType } from '../../ScriptCore/UIFrame/ResMgr';
const { ccclass } = _decorator;

@ccclass('FruitsLoading')
export class FruitsLoading extends BaseGameLoading {

    private completedCb: Function = null;

    onLoad() {
    }

    onShow(...params: any) {
        super.onShow(...params);


    }

    onHide() {
        super.onHide();
        EventMgr.getInstance().removeByTarget(this);
    }

    onLoadProgress(val: number) {
        let valn = val * 0.95;
        this.updateProgress(valn)
    }

    ///模拟入场动画
    startRuChangFake(cb: Function, completedCb: Function) {
        this.scheduleOnce(() => {
            if (cb != null) {
                cb();
            }
            this.loadRes();
            this.completedCb = completedCb;
        }, 1);
    }


    async loadRes() {
        let reslist: Map<string, number> = new Map<string, number>([
            ["Fruits/pfb_room_ui", 4],
            ["Fruits/prefab/pfb_fruits_effect_ui", 4],
            ["Fruits/prefab/pfb_fruits_free_settlement_ui", 4],
            ["Fruits/prefab/pfb_fruits_game_ui", 4],
            ["Fruits/prefab/pfb_fruits_help_ui", 4],
            ["Fruits/prefab/pfb_fruits_item", 4],
            ["Fruits/prefab/pfb_fruits_line_item", 4],
            ["Fruits/prefab/pfb_fruits_mary_item", 4],
            ["Fruits/prefab/pfb_fruits_mary_ui", 4],
            ["Fruits/prefab/pfb_fruits_top_ui", 4],
            ["Fruits/prefab/pfb_fruits_bottom_ui", 4],
            ["Fruits/prefab/pfb_fruits_toast_ui", 4],
            ["Fruits/res/common", 2],
            ["Fruits/res/game", 2],
            // ["Fruits/res-en/en_fruits_game", 2],
            // ["Fruits/res-kh/kh_fruits_game", 2],
            // ["Fruits/res-vi/vi_fruits_game", 2],
            // ["Fruits/res-zh/zh_fruits_game", 2],
            //["Fruits/sound/BGM01", 3],
            ["Fruits/sound/BGM02", 3],
            ["Fruits/sound/BGM03", 3],
            ["Fruits/sound/BGM04", 3],
            ["Fruits/sound/big", 3],
            ["Fruits/sound/bonus", 3],
            ["Fruits/sound/fastroll", 3],
            ["Fruits/sound/freePrize", 3],
            ["Fruits/sound/huge", 3],
            ["Fruits/sound/Jackpor", 3],
            ["Fruits/sound/line", 3],
            ["Fruits/sound/marysound", 3],
            ["Fruits/sound/ordinary", 3],
            ["Fruits/sound/scatter", 3],
            ["Fruits/sound/spineClick", 3],
            ["Fruits/sound/stop", 3],
            ["Fruits/sound/WILD", 3],
        ]);


        let resType = new Map<ResType, boolean>();
        resType.set(ResType.ResType_Prefab, true);
        resType.set(ResType.ResType_AudioClip, true);
        resType.set(ResType.ResType_SpriteAtlas, true);
        ResMgr.getInstance().preLoad(reslist, this.onLoadProgress.bind(this), this.onLoadResourceComplete.bind(this), resType);
    }


    //加载完成
    async onLoadResourceComplete() {
        //预创建prefab
        const time = Date.now();
        await this.framingLoad()
        console.log('预创建经历时间========' + (Date.now() - time))
        if (this.completedCb != null) {
            this.completedCb();
        }
        this.closeSelf();
    }



    /**
 * 实现分帧加载
 */
    async framingLoad() {
        const precreateDatas = [
            { path: 'Fruits/prefab/pfb_fruits_item', length: 20 },
            { path: 'Fruits/prefab/pfb_fruits_line_item', length: 15 },
            { path: 'Fruits/prefab/pfb_fruits_top_ui' , length : 2},
            { path: 'Fruits/prefab/pfb_fruits_bottom_ui' , length : 1}
        ]

        await this.executePreFrame(this._getItemGenerator(precreateDatas[0].length, precreateDatas[0].path),1);
        this.updateProgress(0.96)
        await this.executePreFrame(this._getItemGenerator(precreateDatas[1].length, precreateDatas[1].path),1);
        this.updateProgress(0.97)
        await this.executePreFrame(this._getItemGenerator(precreateDatas[2].length, precreateDatas[2].path),1);
        this.updateProgress(0.98)
        await this.executePreFrame(this._getItemGenerator(precreateDatas[3].length, precreateDatas[3].path),1);
        this.updateProgress(1)
        // const promises: Promise<boolean>[] = [];
        // precreateDatas.forEach((data) => {
        //     promises.push(this.executePreFrame(this._getItemGenerator(data.length, data.path), 1));
        // })
        // await Promise.all(promises)
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
                        },0.1);
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
    private *_getItemGenerator(length: number, path: string) {
        for (let i = 0; i < length; i++) {
            yield this._initItem(path);
        }
    }

    /**
    * （和拆分前的代码一致）
    */
    private async _initItem(path: string) {
        let pb = ResMgr.getInstance().getPrefabByPath(path);
        if(!pb){
            pb = await ResMgr.getInstance().loadForm(path); 
        }
        let node = instantiate(pb);
        PoolManager.instance.putNode(node);
    }

}
