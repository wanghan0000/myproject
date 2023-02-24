import { _decorator, Component, Node, Button, Sprite, Label, Color, LabelShadow, LabelOutline, SkeletalAnimation, Animation } from 'cc';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import activity from '../../../ScriptCore/protocol/activity.js';
import { ModalOpacity } from '../../../ScriptCore/UIFrame/config/SysDefine';
import { ModalType } from '../../../ScriptCore/UIFrame/Struct';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { DB_ActSign } from '../../config/db_actsign';
import { ButtonPlus } from '../common/component/ButtonPlus';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { TienlenUIMgr } from '../TienlenUIMgr';
import { ItemSign } from './ItemSign';
const { ccclass, property } = _decorator;

@ccclass('WndSign')
export class WndSign extends UIWindow {
    public static Color0 = new Color('#ffffff');
    public static Color1 = new Color('#808080');
    @property(ButtonPlus)
    private btnClose: ButtonPlus;
    @property(ButtonPlus)
    private btnGot: ButtonPlus;
    @property(ButtonPlus)
    private btnGotDouble: ButtonPlus;
    private _signItemList: ItemSign[];
    private _signData: activity.activity.SCSignData;
    private _signCurItem: ItemSign;
    private _skelAnim: SkeletalAnimation;
    modalType = new ModalType(ModalOpacity.OpacityHigh, false);
    onLoad() {
        this.btnClose.setClickHandler(() => {
            this.closeSelf();
        }, this);
        this._signItemList = this.getComponentsInChildren(ItemSign);
        this._signItemList.sort((l, r) => {
            return parseInt(l.node.name) - parseInt(r.node.name);
        })
        let cfg = DB_ActSign.getInstance().datas.Arr;
        for (let index = 0; index < this._signItemList.length; index++) {
            const element = this._signItemList[index];
            element.init(cfg[index]);
        }
        this.btnGot.setClickHandler(async () => {
            let ret = await TienlenHelper.callSign(this._signData.SignCount + 1, 0);
            if (ret.OpRetCode == 0) {
                let list: { id: number, cnt: number }[] = [];
                let data = this._signCurItem.data;
                let itemId = data.Type == 3 ? data.Item_Id : data.Type;
                list.push({ id: itemId, cnt: data.Grade });
                TienlenUIMgr.getInstance().showAwardGet(list);
                this._signCurItem.setState(2);
                this.setBtnEnable(this.btnGot, false);
                this.setBtnEnable(this.btnGotDouble, false);
                TienlenRuntime.sign();
                EventMgr.getInstance().dispatchEvent(EventName.RED_DOT_NOTIFY);
            } else {
                TienlenHelper.showFloatTips(I18nMgr.getInstance().getStringByKey("lobby.caozuoshibaiTxt"));
            }
        })
        this.btnGotDouble.setClickHandler(async () => {
            let ret = await TienlenHelper.callSign(this._signData.SignCount + 1, 1);
            if (ret.OpRetCode == 0) {
                let list: { id: number, cnt: number }[] = [];
                let data = this._signCurItem.data;
                let itemId = data.Type == 3 ? data.Item_Id : data.Type;
                list.push({ id: itemId, cnt: data.Grade * 2 });
                TienlenUIMgr.getInstance().showAwardGet(list);
                this._signCurItem.setState(2);
                this.setBtnEnable(this.btnGot, false);
                this.setBtnEnable(this.btnGotDouble, false);
                TienlenRuntime.sign();
                EventMgr.getInstance().dispatchEvent(EventName.RED_DOT_NOTIFY);
            } else {
                TienlenHelper.showFloatTips(I18nMgr.getInstance().getStringByKey("lobby.caozuoshibaiTxt"));
            }
        })
        this._skelAnim = this.getComponentInChildren(SkeletalAnimation);
    }
    //先播放出场动画，再播放待机
    playAnim() {
        this._skelAnim.play('chuchang');
        this._skelAnim.once(Animation.EventType.LASTFRAME, () => {
            this._skelAnim.crossFade('daiji');
        }, this);
    }

    onShow(...args: any) {
        let signData: activity.activity.SCSignData = this._signData = args[0];
        for (let index = 0; index < this._signItemList.length; index++) {
            const element = this._signItemList[index];
            if (index < signData.SignCount) {
                element.setState(2);
            } else if (index > signData.SignCount) {
                element.setState(1);
            } else {
                element.setState(signData.TodaySign ? 1 : 0);
                !signData.TodaySign && (this._signCurItem = element);
            }
        }
        this.setBtnEnable(this.btnGot, this._signCurItem != null);
        this.setBtnEnable(this.btnGotDouble, this._signCurItem != null);
        this.playAnim();
    }

    setBtnEnable(btn: ButtonPlus, flag: boolean) {
        btn.interactable = flag;
        btn.getComponentInChildren(Label).color = flag ? WndSign.Color0 : WndSign.Color1;
        btn.getComponentInChildren(LabelOutline).enabled = flag;
        let btnSp = btn.getComponentInChildren(Sprite);
        btnSp && (btnSp.grayscale = !flag);
    }

    onHide() {
        this._signCurItem = null;
    }
}

