import { _decorator, Component, Node, Label, Animation, Quat } from 'cc';
import { CancelationToken } from '../common/async/CancelationToken';
import { BaseComponent } from '../common/component/BaseComponent';
import TalaDefine from '../TalaDefine';
import TalaHelper from '../TalaHelper';
const { ccclass, property } = _decorator;

@ccclass('TalaClock')
export class TalaClock extends BaseComponent {
    private _label: Label;
    private _cancelToken: CancelationToken;
    private _anim: Animation;
    onLoad() {
    }

    public get anim(): Animation {
        this._anim = this._anim || this.getComponent(Animation);
        return this._anim;
    }

    public get label(): Label {
        this._label = this._label || this.getComponentInChildren(Label);
        return this._label;
    }

    public async show(...args: any[]) {
        super.show(args);
        this.stop();
        this.play(args[0], args[1]);
    }
    /**
     * 
     * @param time 单位s
     */
    private async play(time: number, warnFlag: boolean) {
        this.setNum(time);
        this._cancelToken = new CancelationToken();
        let audioFlag = true;
        while (time > 0 && this.node.activeInHierarchy) {
            let flag = await TalaHelper.nodeWait(1, this.node, this._cancelToken);
            if (!flag) {
                // TienlenHelper.log('定时器中间取消');
                return;
            }
            --time;
            if (time <= 5 && warnFlag && audioFlag) {
                audioFlag = false;
                this.anim.play();
            }
            if (time <= 5 && warnFlag) {
                TalaHelper.playSound(TalaDefine.SoundTimeOut);
            }
            if (!this.label) return;
            this.setNum(time);
            if (time <= 0) {
                this.hide();
                return;
            }
        }
    }

    setNum(value: number) {
        this.label.string = value.toString();
        let offset = value < 10 ? 0 : -2;
        this.label.node.setPosition(offset, this.label.node.position.y);
    }

    public hide() {
        super.hide();
        this.stop();
    }

    private stop() {
        if (this._cancelToken) {
            this._cancelToken.invoke();
            this._cancelToken = null;
        }
        this.anim.stop();
        this.node.rotation = Quat.IDENTITY;
    }

}

