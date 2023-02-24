
import { _decorator } from 'cc';
import { EventMgr } from '../../ScriptCore/events/eventmgr';
import { BaseGameLoading } from '../../ScriptCore/games/basegameloading';
import { FishGameEventName } from './configs/fishgameeventname';
const { ccclass } = _decorator;

@ccclass('FishHappyLoading')
export class FishHappyLoading extends BaseGameLoading {
    onShow(...params: any) {
        super.onShow(...params);
        EventMgr.getInstance().addEventListener(FishGameEventName.GAME_LOAD_COMPLETE, this.onLoadCompeted, this);
        EventMgr.getInstance().addEventListener(FishGameEventName.GAME_LOAD_PROGRESS, this.onLoadProgress, this);
    }

    onHide() {
        super.onHide();
        EventMgr.getInstance().removeByTarget(this);
    }

    onLoadProgress(val: number) {

        this.updateProgress(val)
    }

    onLoadCompeted() {
        this.setLoadinEndCallBack();
    }
}
