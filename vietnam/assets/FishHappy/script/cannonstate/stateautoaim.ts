
import { _decorator, Node, EventTouch, Vec2, v2 } from 'cc';
import { FishHappyRoomData } from '../fishdata/fishhappyroomdata';
import { StateNormal } from './statenormal';
const { ccclass } = _decorator;

@ccclass('StateAutoAim')
export class StateAutoAim extends StateNormal {
    private _beforeFlushIsAimedFish: boolean = false;

    start () {
        this.stateName = 'StateAutoAim';
    }

    initState () {
        this.touchPos = null;
        this.openAutoFire();
    }

    clearState () {
        this.closeAutoFire();
        this.clearAimView();
    }

    clearAimView () {
        if (FishHappyRoomData.instance.isAimedFish(FishHappyRoomData.instance.myClientPos)) {
            this._beforeFlushIsAimedFish = true;
            FishHappyRoomData.instance.removeAimedFish(FishHappyRoomData.instance.myClientPos);
        }
    }

    handleInput (event: EventTouch) {
        if (Node.EventType.TOUCH_START == event.type) {
            this.touchPos = event.getUILocation();
            this.aimedAt(event.getLocation());
        } else if (Node.EventType.TOUCH_MOVE == event.type) {
            this.touchPos = event.getUILocation();
        }
    }

    aimedAt (position: Vec2) {
        let aimedFish = FishHappyRoomData.instance!.aimedAtPoint(position);
        if (aimedFish == null) {
            if (FishHappyRoomData.instance.isAimedFish(FishHappyRoomData.instance.myClientPos)) {
                this.sendCancelTargetFish();
            }
            this.clearAimView();
        } else if (aimedFish != FishHappyRoomData.instance.getAimedFish(FishHappyRoomData.instance.myClientPos)) {
            this.sendTargetFish(aimedFish);
        }
    }

    reAimedFish () {
        let aimedFish = FishHappyRoomData.instance.autoAimedFish();
        if (aimedFish != null) {
            this.sendTargetFish(aimedFish);
        }
    }

    checkFishAppear() {
        if (FishHappyRoomData.instance.seeFish()) {
            if (this._beforeFlushIsAimedFish) {
                this._beforeFlushIsAimedFish = false;
                this.reAimedFish();
            }
            this.initState();
            this.unschedule(this.checkFishAppear);
        }
    }

    restart() {
        this.schedule(this.checkFishAppear, 1.0);
    }

    onAimedAt (aimedFishNode: Node) {
        //啥也不做，防止调用到Normal状态里面的该函数
    }

    // update (deltaTime: number) {
    //     // [4]
    // }
}
