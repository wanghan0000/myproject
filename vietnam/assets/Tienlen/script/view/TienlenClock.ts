import { _decorator, Component, Node, Label, Animation, Quat } from 'cc';
import { CancelationToken } from '../common/async/CancelationToken';
import { BaseComponent } from '../common/component/BaseComponent';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('TienlenClock')
export class TienlenClock extends BaseComponent {
    private _label: Label;
    private _cancelToken: CancelationToken;
    private _anim: Animation;
    onLoad() {
        this._label = this.getComponentInChildren(Label);
        this._anim = this.getComponent(Animation);
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
            let flag = await TienlenHelper.nodeWait(1, this.node, this._cancelToken);
            if (!flag) {
                // TienlenHelper.log('定时器中间取消');
                return;
            }
            --time;
            if (time <= 5 && warnFlag && audioFlag) {
                audioFlag = false;
                this._anim.play();
            }
            if (time <= 5 && warnFlag) {
                TienlenHelper.playSound(TienlenDefine.SoundTimeOut);
            }
            if (!this._label) return;
            this.setNum(time);
            if (time <= 0) {
                this.hide();
                return;
            }
        }
    }

    setNum(value: number) {
        this._label.string = value.toString();
        let offset = value < 10 ? 0 : -2;
        this._label.node.setPosition(offset, this._label.node.position.y);
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
        this._anim.stop();
        this.node.rotation = Quat.IDENTITY;
    }

}

