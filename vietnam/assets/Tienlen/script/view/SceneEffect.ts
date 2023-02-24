import { _decorator, Component, Node, Vec3, Tween, v3, Scene } from 'cc';
import TienlenHelper from '../TienlenHelper';
import { SpineEffect } from './SpineEffect';
const { ccclass, property } = _decorator;

@ccclass('SceneEffect')
export class SceneEffect extends Component {
    @property(SpineEffect)
    public effectSheep0: SpineEffect;
    @property(SpineEffect)
    public effectSheep1: SpineEffect;
    @property(SpineEffect)
    public effectSheep2: SpineEffect;
    @property(SpineEffect)
    public effectFish: SpineEffect;
    private _initPos: Vec3;
    private _isBack: boolean = false;
    private _isPlaying: boolean = false;
    private static _instance: SceneEffect;

    onLoad() {
        this._initPos = this.effectSheep0.node.position.clone();
        SceneEffect._instance = this;
    }

    onDestroy() {
        SceneEffect._instance = null;
    }

    public static get instance(): SceneEffect {
        return this._instance;
    }

    public playScare() {
        this._playStayScare(this.effectSheep1);
        this._playStayScare(this.effectSheep2);
        this._playRunScare(this.effectSheep0);
    }

    async _playStayScare(effect: SpineEffect) {
        await effect.play('jingxia');
        effect.play('chicao', true);
    }

    async _playRunScare(effect: SpineEffect) {
        if (this._isPlaying && !this._isBack) return;
        if (this._isPlaying && this._isBack) {
            Tween.stopAllByTarget(effect.node);
            this._isBack = false;
            this._isPlaying = false;
            this._playRunScare(effect);
        } else {
            this._isPlaying = true;
            let scale = effect.node.scale;
            let pos = effect.node.position;
            effect.node.setScale(Math.abs(scale.x), scale.y, scale.z);
            this._isBack = false;
            await effect.play('jingxia');
            effect.node.setScale(-Math.abs(scale.x), scale.y, scale.z);
            effect.play('pao', true);
            await TienlenHelper.tweenTo(effect.node, 2, { position: v3(-1000, pos.y, pos.z) });
            this._isBack = true;
            effect.node.setScale(Math.abs(scale.x), scale.y, scale.z);
            await TienlenHelper.tweenTo(effect.node, 3, { position: this._initPos });
            effect.play('chicao', true);
            this._isPlaying = false;
        }
    }

    async playFishJump() {
        this.effectFish.node.active = true;
        await this.effectFish.play("yu");
    }
    private _playFishFlag: boolean = true;
    update() {
        if (this._playFishFlag) {
            this._playFishFlag = false;
            let delay = 3 + Math.random() * 5;
            this.delayPlayFishJump(delay)
        }
    }

    async delayPlayFishJump(delay: number) {
        let flag = await TienlenHelper.nodeWait(delay, this.node);
        if (!flag) return;
        if (!this.effectFish || !this.effectFish.node) return;
        let x = 100 + Math.random() * 300;
        let scaleX = Math.random() < 0.7 ? 1 : -1;
        this.effectFish.node.setPosition(x, this.effectFish.node.position.y);
        this.effectFish.node.setScale(scaleX, 1);
        await this.playFishJump();
        this._playFishFlag = true;
    }

}

