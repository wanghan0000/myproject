
import { _decorator, Node, EventTouch } from 'cc';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { FishHappyConstants } from '../configs/fishhappyconstants';
import { FishGameEventName } from '../configs/fishgameeventname';
import { FishHappyRoomData } from '../fishdata/fishhappyroomdata';
import { StateNormal } from './statenormal';
const { ccclass } = _decorator;

@ccclass('StateHook')
export class StateHook extends StateNormal {
    start () {
        this.stateName = 'StateHook';
    }

    initState () {
        this.openAutoAim();
        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_SET_AUTO_LOCK_BTN_VIEW, false);
    }

    clearState () {
        this.closeAutoFire();
        this.closeAutoAim();
        this.clearAimView();
    }

    handleInput (event: EventTouch) {
        if (Node.EventType.TOUCH_START == event.type) {
            UIMgr.getInstance().AlertTxtWithConfirmClose("挂机中，请先取消挂机再操作");
        }
    }

    reAimedFish () {
        let fishNode = FishHappyRoomData.instance.autoAimedSelFish();
        if (fishNode != null) {
            this.sendTargetFish(fishNode);
        } else {
            this.closeAutoFire();
            this.clearAimView();
        }
    }

    onAimedAt () {
        this.openAutoFire();
    }
}
