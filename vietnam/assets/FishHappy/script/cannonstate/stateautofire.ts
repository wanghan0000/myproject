
import { _decorator, Node, EventTouch } from 'cc';
import { StateNormal } from './statenormal';
const { ccclass, property } = _decorator;

@ccclass('StateAutoFire')
export class StateAutoFire extends StateNormal {
    // constructor () {
    //     super();
    // }

    initState () {
        this.touchPos = null;
        this.openAutoFire();
    }

    clearState () {
        this.closeAutoFire();
    }

    handleInput (event: EventTouch) {
        if (Node.EventType.TOUCH_START == event.type || Node.EventType.TOUCH_MOVE == event.type) {
            this.touchPos = event.getUILocation();
        }
    }

    start () {
        this.stateName = 'StateAutoFire';
    }

    // update (deltaTime: number) {
        // [4]
    // }
}
