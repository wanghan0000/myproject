import { _decorator, Component, Node, Label } from 'cc';
import { ModalOpacity } from '../../../ScriptCore/UIFrame/config/SysDefine';
import { ModalType } from '../../../ScriptCore/UIFrame/Struct';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
const { ccclass, property } = _decorator;

@ccclass('WndSocialTips3')
export class WndSocialTips3 extends UIWindow {
    private _label: Label;
    modalType = new ModalType(ModalOpacity.OpacityHigh, true);
    onLoad() {
        this._label = this.getComponentInChildren(Label);
    }

    onShow(...args: any) {
        this._label.string = args[0];
    }

    onHide() {

    }
}

