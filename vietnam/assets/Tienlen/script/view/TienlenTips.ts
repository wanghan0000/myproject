import { _decorator, Component, Node, Label, Color, tween, UIOpacity, v3, Vec3 } from 'cc';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property, requireComponent } = _decorator;

@ccclass('TienlenTips')
@requireComponent(UIOpacity)
export class TienlenTips extends Component {
    private _label: Label;

    onLoad() {
        this._label = this.getComponentInChildren(Label);
    }

    async show(tips: string, time: number = TienlenDefine.TipTime) {
        this.node.active = true;
        this._label.string = tips;
        this.node.position = Vec3.ZERO;
        this.getComponent(UIOpacity).opacity = 255;
        if (time == -1) return;
        let flag = await TienlenHelper.nodeWait(time, this.node);
        if (!flag) return;
        await TienlenHelper.tweenTo(this.node, 0.5, { position: v3(0, 50) })
        await TienlenHelper.fadeOut(this.node);
    }

    /**
     *  显示格式: tips countdown
     * @param tips 
     * @param countdown 单位s
     */
    async showCountdown(tips: string, countdown: number) {
        this.node.active = true;
        this._label.string = `${tips} ${countdown}`;
        this.getComponent(UIOpacity).opacity = 255;
        while (countdown > 0 && this.node.active) {
            let flag = await TienlenHelper.nodeWait(1, this.node);
            if (!flag) break;
            --countdown;
            if (countdown == 0) break;
            this._label.string = `${tips} ${countdown}`;
        }
        countdown == 0 && (this.node.active = false);
    }

    hide() {
        this.node.active = false;
    }

}

