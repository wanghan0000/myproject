
import { _decorator, Node, EventTouch, Vec2 } from 'cc';
import { FishHappyRoomData } from '../fishdata/fishhappyroomdata';
import { StateNormal } from './statenormal';
const { ccclass } = _decorator;

@ccclass('StateAim')
export class StateAim extends StateNormal {
    start () {
        this.stateName = 'StateAim'
    }
    
    clearState () {
        this.closeAutoFire();
        this.clearAimView();
    }

    handleInput (event: EventTouch) {
        if (Node.EventType.TOUCH_START == event.type) {
            this.touchPos = event.getUILocation();
            this.aimedAt(event.getLocation());
        } else if (Node.EventType.TOUCH_MOVE == event.type) {
            this.touchPos = event.getUILocation();
        } else if (Node.EventType.TOUCH_END == event.type) {
            if (!FishHappyRoomData.instance.isAimedFish(FishHappyRoomData.instance.myClientPos)) {
                this.clearState();
            }
        }
    }

    aimedAt (position: Vec2) {
        let aimedFish = FishHappyRoomData.instance.aimedAtPoint(position);
        if (aimedFish == null) {
            if (FishHappyRoomData.instance.isAimedFish(FishHappyRoomData.instance.myClientPos)) {
                this.sendCancelTargetFish();
            }
            this.fire(this.touchPos);
            this.openAutoFire();
            this.clearAimView();
        } else if (aimedFish != FishHappyRoomData.instance.getAimedFish(FishHappyRoomData.instance.myClientPos)) {
            this.sendTargetFish(aimedFish);
        }
    }

    onAimedAt () {
        this.openAutoFire();
    }
}
