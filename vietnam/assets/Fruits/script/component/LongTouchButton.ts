/**
 * 2022/11/29
 * by lin
 */
import { _decorator, Button, EventHandler, EventTouch } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LongTouchButton')
export class LongTouchButton extends Button {
    @property({ displayName: '长按持续时间' })
    longTouchDuration: number = 0.3;

    @property({ type: [EventHandler] })
    longClickEvents: EventHandler[] = [];

    @property({ type: [EventHandler] })
    longTriggerEvents: EventHandler[] = [];

    private startPoint: number = 0;

    //运行过的时间
    private elapsed: number = 0;
    private touchFlag: boolean = false;
    onLoad() {

    }

    update(dt: number) {
        const call: any = this;
        if (!this.touchFlag || !call._pressed) {
            return
        }
        this.elapsed += dt;
        if (this.elapsed >= this.longTouchDuration ) {
            EventHandler.emitEvents(this.longTriggerEvents, this);
            this.touchFlag = false;
        }
    }

    protected _onTouchBegan(event?: EventTouch) {
        super._onTouchBegan();
        this.startPoint = Date.now();
        this.touchFlag = true;
        this.elapsed = 0;
    }

    protected _onTouchEnded(event?: EventTouch) {
        if (!this._interactable || !this.enabledInHierarchy) {
            return;
        }
        const call: any = this;
        this.touchFlag = false;

        if (call._pressed && this.interactable) {

            const endTime = Date.now();
            const delta = (endTime - this.startPoint) / 1000;
            if (delta >= this.longTouchDuration) {
                EventHandler.emitEvents(this.longClickEvents, this);
            } else {
                EventHandler.emitEvents(this.clickEvents, event);
                this.node.emit('click', this);
            }
        }
        call._pressed = false;
        this._updateState();
        if (event) {
            event.propagationStopped = true;
        }
        this.elapsed = 0;
    }

    protected _onTouchCancel (event?: EventTouch) {
        super._onTouchCancel();
        this.touchFlag = false;
        this.elapsed = 0;
    }

    onDestroy() {

    }

}

