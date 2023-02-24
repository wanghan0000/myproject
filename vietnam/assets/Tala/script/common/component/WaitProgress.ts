import { _decorator, Component, Node, RealCurve, Graphics, Mask, Enum, UITransform, Sprite, SpriteFrame } from 'cc';
import TalaDefine from '../../TalaDefine';
import TalaHelper from '../../TalaHelper';
import GraphicsHelper from '../helper/GraphicsHelper';
const { ccclass, property } = _decorator;

enum Shape {
    RoundRect,
    Rect,
    Circle,
    Sprite
}

@ccclass('WaitProgress')
export class WaitProgress extends Component {
    @property({ type: Enum(Shape) })
    private shape: Shape = Shape.RoundRect;
    @property(SpriteFrame)
    private spFrame: SpriteFrame;
    @property({ tooltip: "单位:角度", min: 0, max: 360 })
    private startAngle: number = 90;
    @property({ tooltip: "动画总时长,单位:s" })
    private totalTime: number = 5;
    @property({ tooltip: "动画方向,true表示顺时针" })
    private clockWise: boolean = true;
    @property({ tooltip: '圆角矩形半径' })
    private roundRectRadius: number = 5;
    private _waitFlag: boolean = false;
    private _warnFlag: boolean = false;
    private _maskGraphics: Graphics;
    private _shapeGraphics: Graphics;
    private _shapeSprite: Sprite;
    private _elapsedTime: number = 0;
    private _maxSize: number;
    private _spList: Sprite[];

    onLoad() {
        this._shapeGraphics = this.node.children[0].getComponent(Graphics);
        this._shapeSprite = this.getComponentInChildren(Sprite);
        let size = this.getComponent(UITransform).contentSize;
        this._maxSize = Math.max(size.width, size.height);
        this._spList = this.getComponentsInChildren(Sprite);
        // this._drawShape();
    }

    public get maskGraphics(): Graphics {
        this._maskGraphics = this._maskGraphics || (this.getComponent(Mask).subComp as Graphics);
        return this._maskGraphics;
    }

    _drawShape() {
        this._shapeGraphics.clear();
        if (this.shape == Shape.Sprite) {
            this._shapeSprite.enabled = true;
            this._shapeSprite.spriteFrame = this.spFrame;
        } else {
            this._shapeSprite.enabled = false;
            let rt = this._shapeGraphics.getComponent(UITransform).contentSize;
            if (this.shape == Shape.Rect) {
                this._shapeGraphics.rect(-rt.width / 2, -rt.height / 2, rt.width, rt.height);
            } else if (this.shape == Shape.RoundRect) {
                this._shapeGraphics.roundRect(-rt.width / 2, -rt.height / 2, rt.width, rt.height, this.roundRectRadius);
            }
            else if (this.shape == Shape.Circle) {
                let radius = Math.max(rt.width, rt.height) / 2;
                this._shapeGraphics.circle(0, 0, radius);
            }
            this._shapeGraphics.stroke();
        }
    }

    enabelAllSprites(flag: boolean) {
        for (let index = 0; index < this._spList.length; index++) {
            const element = this._spList[index];
            element.enabled = flag;
        }
    }

    public play(totalTime: number) {
        this.totalTime = totalTime;
        this._elapsedTime = 0;
        this._waitFlag = true;
        this._warnFlag = true;
        this.enabelAllSprites(true);
    }

    public stop() {
        this.maskGraphics?.clear();
        this._shapeSprite.enabled = false;
        this._waitFlag = false;
        if (this.getComponent(Mask).inverted)
            this.enabelAllSprites(false);
    }

    update(dt: number) {
        if (!this._waitFlag) return;
        let angle = Math.PI * 2 * this._elapsedTime / this.totalTime
        let radian = this.startAngle * Math.PI / 180;
        GraphicsHelper.drawPie(this.maskGraphics, 0, 0, this._maxSize, radian, angle, this.clockWise);
        this._elapsedTime += dt;
        if (angle >= Math.PI * 2) {
            this.stop();
        } else if (angle >= Math.PI * 1.5) {
            this._warnFlag && TalaHelper.playSound(TalaDefine.SoundCountdown);
            this._warnFlag = false;
        }
    }
}

