import { _decorator, Component, Node, Skeleton, SkeletalAnimation, sp, Prefab, Vec3, game, v3, BlockInputEvents } from 'cc';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { TaskFactory } from '../common/async/TaskFactory';
import ResourceHelper from '../common/helper/ResourceHelper';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('SpineEffect')
export class SpineEffect extends Component {
    private _spine: sp.Skeleton;
    onLoad() {
        this._spine = this.getComponent(sp.Skeleton);
    }

    public set speed(value: number) {
        this._spine.timeScale = value;
    }

    async play(name: string, loop: boolean = false, duration: number = 0) {
        this._spine.paused = false;
        if (loop) {
            this._spine.setAnimation(0, name, loop);
            await TienlenHelper.nodeWait(duration, this.node);
        } else {
            let task = TaskFactory.create<boolean>();
            this._spine.setCompleteListener(() => {
                task.setResult(true);
            });
            //loop:true endListen执行一次,complete每执行完一个循环就回调一次 
            //loop:false endlister执行一次，complete再执行一次
            this._spine.setAnimation(0, name, loop);
            await task.promise;
            // TaskFactory.recycle(task);
        }
    }

    onDisable() {
        this._spine.paused = true;
    }

    static async playBomb(srcNode: Node, dstPos: Vec3, target: Node) {
        target = target || TienlenHelper.getUIRoot();
        let prefab = await ResourceHelper.loadResInAB(TienlenDefine.ABName, TienlenDefine.PrefabBomb, Prefab);
        let node = PoolManager.instance.getNode(prefab, target)
        let srcPos = TienlenHelper.localToLocal(srcNode, target);
        node.position = srcPos;
        TienlenHelper.tweenTo(node, 0.5, { position: dstPos });
        await node.getComponent(SpineEffect).play('reng');
        await node.getComponent(SpineEffect).play('boom');
        PoolManager.instance.putNode(node);
    }

    static async playPlane(target: Node) {
        target = target || TienlenHelper.getUIRoot();
        let prefab = await ResourceHelper.loadResInAB(TienlenDefine.ABName, TienlenDefine.PrefabPlane, Prefab);
        let node = PoolManager.instance.getNode(prefab, target)
        node.position = Vec3.ZERO;
        await node.getComponent(SpineEffect).play('animation');
        PoolManager.instance.putNode(node);
    }

    static async playStraightPair(count: number, target: Node) {
        target = target || TienlenHelper.getUIRoot();
        if (count < 3 || count > 6) return;
        let prefab = await ResourceHelper.loadResInAB(TienlenDefine.ABName, TienlenDefine.PrefabPair, Prefab);
        let node = PoolManager.instance.getNode(prefab, target)
        node.position = Vec3.ZERO;
        let strlist = ['three', 'four', 'five', 'six']
        let aniName = strlist[count - 3];
        await node.getComponent(SpineEffect).play(aniName);
        PoolManager.instance.putNode(node);
    }

    static async playFirstPlayer(target: Node, pos: Vec3 = Vec3.ZERO) {
        let prefab = await ResourceHelper.loadResInAB(TienlenDefine.ABName, TienlenDefine.PrefabFirst, Prefab);
        let node = PoolManager.instance.getNode(prefab, target)
        node.position = pos;
        node.setScale(0.6, 0.6);
        await node.getComponent(SpineEffect).play('shouchu');
        PoolManager.instance.putNode(node);
    }

    static async playEnter(target?: Node) {
        target = target || TienlenHelper.getUIRoot();
        let prefab = await ResourceHelper.loadResInAB(TienlenDefine.ABName, TienlenDefine.PrefabEnter, Prefab);
        let node = PoolManager.instance.getNode(prefab, target)
        // node.position = v3(0, 13);
        await node.getComponent(SpineEffect).play('kaichang');
        PoolManager.instance.putNode(node);
    }
}

