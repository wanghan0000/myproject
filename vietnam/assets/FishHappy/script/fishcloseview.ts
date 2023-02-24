
import { _decorator, v3, tween } from 'cc';
import { UIPopup } from '../../ScriptCore/UIFrame/UIForm';
const { ccclass, property } = _decorator;

@ccclass('Fishcloseview')
export class Fishcloseview extends UIPopup {

    start () {
        this.node.scale = v3(0.1, 0.1, 0.1);
        tween(this.node).to(0.2, {scale: v3(1.0, 1.0, 1.0)}).start();
    }

    btnCloseView () {
        this.closeSelf();
    }
}
