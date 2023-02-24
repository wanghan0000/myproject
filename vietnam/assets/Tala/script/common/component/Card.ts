import { _decorator, Component, Node, Sprite, sp, tween, Tween, v3, Button, Vec3, director, EventTouch, AnimationComponent, Animation } from 'cc';
import TalaHelper from '../../TalaHelper';
import { TalaCardColor, TalaCardPoint } from '../define';
import CardHelper from '../helper/CardHelper';
const { ccclass, property } = _decorator;

@ccclass('Card')
export class Card extends Component {
    public static ANI_FLIP = 'cardFlip';
    public static ANI_BACKFLIP = 'cardBackFlip';
    @property(Sprite)
    public spBack!: Sprite;
    @property(Sprite)
    public spPopup!: Sprite;
    @property(Sprite)
    public spPoint!: Sprite;
    @property(Sprite)
    public spColor!: Sprite;
    @property(Sprite)
    public spColor2!: Sprite;
    @property(Sprite)
    public spColor3: Sprite;
    @property(Sprite)
    public spKing!: Sprite;
    @property(Sprite)
    public spSelect!: Sprite;
    private _cardId: number = -1;
    private _isBack: boolean = false;
    private _isJoker: boolean = false;
    private _isSelected: boolean = false;
    private _isPopup: boolean = false;
    private _anim: Animation;
    private _tmpVec3: Vec3 = new Vec3();


    onLoad() {
        this._anim = this.getComponent(Animation);
        this.node.on(Node.EventType.TOUCH_START, null)
        this.node.on(Node.EventType.TOUCH_END, null)
    }

    public reset() {
        this.isSelected = false;
        this._isPopup = false;
        this.mark = false;
        this.node.setPosition(this.node.position.x, 0);
        Tween.stopAllByTarget(this.node);
    }

    public set mark(value: boolean) {
        // this.spPopup.node.active = value;
        let sk = this.getComponentInChildren(sp.Skeleton);
        sk.node.active = value;
    }

    public async flip(id?: number) {
        await TalaHelper.playAnim(this._anim, Card.ANI_FLIP);
        if (id != undefined)
            this.cardId = id;
    }

    public async backFlip(id?: number) {
        await TalaHelper.playAnim(this._anim, Card.ANI_BACKFLIP);
        if (id != undefined)
            this.cardId = id;
    }

    public set isPopup(value: boolean) {
        if (this._isPopup == value) return;
        this._isPopup = value;
        // this.spPopup.node.active = false;
        Tween.stopAllByTarget(this._tmpVec3);
        if (value) {
            tween(this._tmpVec3).to(0.1, { y: 40 }, { onUpdate: this._updateFunc.bind(this) }).start();
        } else {
            tween(this._tmpVec3).to(0.1, { y: 0 }, { onUpdate: this._updateFunc2.bind(this) }).start();
        }

    }

    _updateFunc(target: object, ratio: number): void {
        let t = target as Vec3;
        if (!this.node) return;
        this.node.setPosition(this.node.position.x, t.y);
        // if (ratio == 1) {
        //     this.spPopup.node.active = true;
        // }
    }

    _updateFunc2(target: object, ratio: number): void {
        let t = target as Vec3;
        if (!this.node) return;
        this.node.setPosition(this.node.position.x, t.y);
    }


    public get isPopup(): boolean {
        return this._isPopup;
    }

    public get isSelected(): boolean {
        return this._isSelected;
    }

    public set isSelected(value: boolean) {
        if (this._isSelected == value) return;
        this._isSelected = value;
        this.spSelect.node.active = value;
    }


    public set isBack(value: boolean) {
        this._isBack = value;
        this.spBack.node.active = value;
    }

    public get isBack(): boolean {
        return this._isBack;
    }

    public set isJoker(value: boolean) {
        this._isJoker = value;
        this.spColor.node.parent!.active = !value;
        this.spKing.node.parent!.active = value;
    }
    public get isJoker(): boolean {
        return this._isJoker;
    }

    public get cardId(): number {
        return this._cardId;
    }

    /**
      * 设置卡牌唯一id(0-53)
      * @param id -1表示牌背面
      */
    public set cardId(id: number) {
        this._cardId = id;
        this.isBack = id == -1;
        if (this.isBack) return;
        this.isJoker = false; //CardHelper.isJoker(id);
        let color = CardHelper.getTalaCardColor(id);
        if (this.isJoker) {
            this.updateSpKing(color);
        } else {
            let point = CardHelper.getTalaCardPoint(id);
            this.updateSpPoint(point, color);
            this.updateSpColor(color);
        }
    }

    public async show(id: number) {
        this.node.active = true;
        this.mark = false;
        this.cardId = id;
    }

    public hide() {
        this.node.active = false;
    }

    async updateSpKing(color: TalaCardColor) {
        let sf = await CardHelper.getCardColorRes(color);
        if (!this.spKing) return;
        this.spKing.spriteFrame = sf;
    }

    async updateSpPoint(point: TalaCardPoint, color: TalaCardColor) {
        let sf = await CardHelper.getCardPointRes(point, color);
        if (!this.spPoint) return;
        this.spPoint.spriteFrame = sf;
    }

    async updateSpColor(color: TalaCardColor) {
        let sf = await CardHelper.getCardColorRes(color);
        if (!this.spColor) return;
        this.spColor.spriteFrame = sf;
        this.spColor2.spriteFrame = sf;
        this.spColor3.spriteFrame = sf;
    }

}

