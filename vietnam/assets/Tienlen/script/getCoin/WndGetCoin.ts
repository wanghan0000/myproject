import { _decorator, Component, Node, Toggle } from 'cc';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { ButtonPlus } from '../common/component/ButtonPlus';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { TienlenUIMgr } from '../TienlenUIMgr';
const { ccclass, property } = _decorator;

@ccclass('WndGetCoin')
export class WndGetCoin extends UIWindow {
    @property(Toggle)
    public toggle: Toggle;
    @property(ButtonPlus)
    public btnClose: ButtonPlus;
    @property(ButtonPlus)
    public btnShop: ButtonPlus;
    @property(ButtonPlus)
    public btnBank: ButtonPlus;

    onLoad() {
        this.btnClose.setClickHandler(() => {
            this.closeSelf();
        }, this);
        this.btnShop.setClickHandler(() => {
            this.closeSelf();
            TienlenUIMgr.getInstance().showTienLenShop();
        }, this);
        this.btnBank.setClickHandler(() => {
            this.closeSelf();
            TienlenUIMgr.getInstance().showTienLenActivity(1);
        }, this);
        this.toggle.node.on(Toggle.EventType.TOGGLE, () => {
            TienlenRuntime.getCoinCheck = this.toggle.isChecked;
        }, this);
    }

    onShow(...args: any) {
        this.toggle.isChecked = args[0] || false;
    }

    onHide() {

    }

}

