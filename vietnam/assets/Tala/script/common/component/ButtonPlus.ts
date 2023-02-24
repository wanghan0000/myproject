import { _decorator, Component, Node, Button, game, Sprite, AudioClip } from 'cc';
import { BUILD } from 'cc/env';
import { AudioMgr } from '../../../../ScriptCore/audio/AudioMgr';
import TalaDefine from '../../TalaDefine';
import ResourceHelper from '../helper/ResourceHelper';

const { ccclass, property, requireComponent } = _decorator;

@ccclass('ButtonPlus')
@requireComponent(Button)
export class ButtonPlus extends Component {
    @property
    public clickInterval: number = 1000;
    private _clickTime: number = 0;
    private _clickCallback: Function;
    private _clickTarget: any;

    onEnable() {
        this.node.on(Button.EventType.CLICK, this._onClick, this);
    }

    onDisable() {
        this.node.off(Button.EventType.CLICK, this._onClick, this);
    }


    setClickHandler(callback: Function, target?: any) {
        this._clickCallback = callback;
        this._clickTarget = target || this;
    }

    _onClick() {
        let curTime = game.totalTime;
        if (curTime - this._clickTime >= this.clickInterval) {
            this._clickTime = curTime;
            // TienlenHelper.playSound(TienlenDefine.SoundClick);
            this.playClickAudio();
            if (!this._clickCallback || !this._clickTarget) return;
            this._clickCallback.apply(this._clickTarget);
        }
    }

    async playClickAudio() {
        if (!AudioMgr.getInstance().chkIsSound()) {
            return;
        }
        let clip = await ResourceHelper.loadResInAB(TalaDefine.ABName, `rawRes/audio/${TalaDefine.SoundClick}`, AudioClip);
        let as = AudioMgr.getInstance().getAudioSource();;
        as.playOneShot(clip, 1);
    }

    onDestroy() {
        this._clickCallback = null;
        this._clickTarget = null;
    }

    public set interactable(value: boolean) {
        this.getComponent(Button).interactable = value;
        let sp = this.getComponent(Sprite);
        sp && (sp.grayscale = !value);
    }
    public get interactable(): boolean {
        return this.getComponent(Button).interactable;
    }

}

