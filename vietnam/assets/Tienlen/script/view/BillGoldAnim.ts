import { _decorator, Component, Node, Vec3, Sprite, tween, UITransform, Tween, v3, bezier } from 'cc';
import { UIRoot } from '../../../ScriptCore/UIFrame/UIRoot';
import { BaseComponent } from '../common/component/BaseComponent';
import TienlenHelper from '../TienlenHelper';
import { SpineEffect } from './SpineEffect';
import { TienlenGame } from './TienlenGame';
const { ccclass, property } = _decorator;

@ccclass('BillGoldAnim')
export class BillGoldAnim extends BaseComponent {
    @property(Node)
    public target: Node;
    @property
    public rollDuration: number = 1;
    @property
    public flyDuration: number = 1;
    private _initPosList: Vec3[];
    private _spineList: SpineEffect[];

    onLoad() {
        this._initPosList = this.node.children.map((v) => v.position.clone());
        this._spineList = this.getComponentsInChildren(SpineEffect);
    }

    public show(...args: any[]) {
        super.show(args);
        this.play(args[0]);
    }

    async play(target: Node) {
        let list = this._spineList;
        for (let index = 0; index < list.length; index++) {
            let delay = Math.random() * 0.5;
            this.doPlayOne(index, target, delay);
        }
    }

    async doPlayOne(index: number, target: Node, delay: number = 0) {
        let uiroot = TienlenGame.instance.node;
        let flag = await TienlenHelper.nodeWait(delay, this.node);
        if (!flag) return;
        let spine = this._spineList[index].getComponent(SpineEffect);
        spine.node.active = true;
        spine.node.setPosition(this._initPosList[index]);
        let dstPos = TienlenHelper.localToLocal(spine.node, uiroot);
        uiroot.addChild(spine.node);
        spine.node.position = dstPos;
        spine.node.setScale(0.15, 0.15);
        await spine.play('tiao');
        await spine.play('zhuan', true, this.rollDuration);
        dstPos = TienlenHelper.localToLocal(target, uiroot);
        let delta = Math.random() * 0.7;
        await TienlenHelper.tweenTo(spine.node, this.flyDuration + delta, { position: dstPos }, { easing: 'quadIn' });
        spine.node.setScale(0.5, 0.5);
        await spine.play('guang');
        spine.node.active = false;
        this.node.addChild(spine.node);
    }

    onDisable() {
        this.stop();
    }

    stop() {
        let list = this._spineList;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            Tween.stopAllByTarget(element.node);
        }
    }

}

