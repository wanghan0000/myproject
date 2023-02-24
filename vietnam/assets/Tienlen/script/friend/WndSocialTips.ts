import { _decorator, Component, Node, Label } from 'cc';
import player from '../../../ScriptCore/protocol/player.js';
import { ModalOpacity } from '../../../ScriptCore/UIFrame/config/SysDefine';
import { ModalType } from '../../../ScriptCore/UIFrame/Struct';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { UIManager } from '../../../ScriptCore/UIFrame/UIManager';
import { ButtonPlus } from '../common/component/ButtonPlus';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('WndSocialTips')
export class WndSocialTips extends UIWindow {
    @property(ButtonPlus)
    private btnYes: ButtonPlus;
    @property(ButtonPlus)
    private btnClose: ButtonPlus;
    @property(Label)
    private labelContent: Label;
    private _data: player.player.SCQueryPlayer;
    onLoad() {
        this.btnYes.setClickHandler(async () => {
            let ret = await TienlenHelper.callFriendOp(3, this._data.SnId);
            if (ret.OpRetCode == 0) {
                UIManager.getInstance().closeForm(`${TienlenDefine.ABName}/${TienlenDefine.PrefabUserInfo}`);
            }
            this.closeSelf();
        }, this);
        this.btnClose.setClickHandler(() => {
            this.closeSelf();
        }, this);
    }

    onShow(...args: any) {
        this._data = args[0];
        this.labelContent.string = `是否与${this._data.Name}解除好友关系?`
    }

    onHide() {

    }
}

