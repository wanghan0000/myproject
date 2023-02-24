import { _decorator, Component, Node, SkeletalAnimation, Animation, Prefab, Vec3, UITransform } from 'cc';
import { PoolManager } from '../../../../ScriptCore/panda/utils/poolmgr';
import TienlenHelper from '../../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('Model2D')
export class Model2D extends Component {
    @property(Node)
    public cardNode: Node;
    @property(Node)
    public boardNode: Node;
    private _skeAnimation: SkeletalAnimation;

    onLoad() {
        this._skeAnimation = this.getComponent(SkeletalAnimation);
    }

    playEnterAnim() {
        this.boardNode && (this.boardNode.active = true);
        this.cardNode && (this.cardNode.active = false);
        let value = Math.random() * 100;
        let name = value >= 50 ? 'zhuanchang' : 'chuchang';
        if (this.isPlaying(name)) return;
        this._skeAnimation?.play(name);
        this._skeAnimation?.once(Animation.EventType.LASTFRAME, () => {
            this.playIdleAnim();
        }, this);
    }

    playIdleAnim() {
        if (this.isPlaying('daiji')) return;
        this.boardNode && (this.boardNode.active = true);
        this.cardNode && (this.cardNode.active = false);
        this._skeAnimation?.crossFade('daiji');
    }

    playCardIdleAnim() {
        if (this.isPlaying('chipaidaiji')) return;
        this.boardNode && (this.boardNode.active = false);
        this.cardNode && (this.cardNode.active = true);
        this._skeAnimation?.crossFade("chipaidaiji");
    }

    playThinkAnim() {
        if (this.isPlaying('chipaisikao')) return;
        this.boardNode && (this.boardNode.active = false);
        this.cardNode && (this.cardNode.active = true);
        this._skeAnimation?.crossFade("chipaisikao");
    }

    playCardOutAnim(speed: number) {
        if (this.isPlaying('chupai') || !this._skeAnimation) return;
        this.boardNode && (this.boardNode.active = false);
        this.cardNode && (this.cardNode.active = true);
        this._skeAnimation.getState('chupai').speed = speed;
        this._skeAnimation.crossFade('chupai');
        this._skeAnimation.once(Animation.EventType.LASTFRAME, async () => {
            this.playThinkAnim();//出牌结束先播放思考，延迟再切换待机，不然动作不衔接
            let flag = await TienlenHelper.nodeWait(0.5, this.node);
            if (!flag) return;
            if (this.isPlaying("chipaisikao")) {
                this.playCardIdleAnim();
            }
        }, this);
    }

    playCardOutWinAnim(speed: number) {
        if (this.isPlaying('chupai') || !this._skeAnimation) return;
        this.boardNode && (this.boardNode.active = false);
        this.cardNode && (this.cardNode.active = true);
        this._skeAnimation.getState('chupai').speed = speed;
        this._skeAnimation.crossFade('chupai');
        this._skeAnimation.once(Animation.EventType.LASTFRAME, async () => {
            this.playIdleAnim();
            // this.playThinkAnim();//出牌结束先播放思考，延迟再切换待机，不然动作不衔接
            // let flag = await TienlenHelper.nodeWait(0.5, this.node);
            // if (!flag) return;
            // if (this.isPlaying("chipaisikao")) {
            //     this.playIdleAnim();
            // }
        }, this);
    }

    isPlaying(name: string) {
        if (this._skeAnimation) {
            return this._skeAnimation.getState(name).isPlaying;
        } else {
            return false;
        }
    }


}

