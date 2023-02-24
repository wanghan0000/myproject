import { _decorator, Component, Node, Sprite, Label, Toggle, Color, LabelOutline } from 'cc';
import { UserData } from '../../../ScriptCore/data/UserData';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import friend from '../../../ScriptCore/protocol/friend.js';
import player from '../../../ScriptCore/protocol/player.js';
import { ButtonPlus } from '../common/component/ButtonPlus';
import EventSystem from '../common/EventSystem';
import { Evt_Shield } from '../handlers/EventHandlers';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { BasePage } from './PageChat';
const { ccclass, property } = _decorator;

@ccclass('PageInfo0')
export class PageInfo0 extends BasePage {
    @property(Sprite)
    private spHead: Sprite;
    @property(Label)
    private labelName: Label;
    @property(Label)
    private labelID: Label;
    @property(ButtonPlus)
    private btnCopy: ButtonPlus;
    @property(ButtonPlus)
    private btnRemove: ButtonPlus;
    @property(Toggle)
    private toggleAdd: Toggle;
    @property(Toggle)
    private toggleMask: Toggle;
    @property([Label])
    private labelList: Label[] = [];
    private _data: player.player.SCQueryPlayer;


    onLoad() {
        this.toggleAdd.node.on(Toggle.EventType.CLICK, async () => {
            if (!this.toggleAdd.isChecked) {
                TienlenHelper.playSound(TienlenDefine.SoundClick);
                let ret = await TienlenHelper.callFriendOp(0, this._data.SnId);
                this.toggleAdd.interactable = false;
                if (ret.OpRetCode != 0) {
                    TienlenHelper.showFloatTips("你已经申请过好友！");
                }
            }
        }, this)
        this.toggleMask.node.on(Toggle.EventType.CLICK, async () => {
            TienlenHelper.playSound(TienlenDefine.SoundClick);
            let msg = await TienlenHelper.callFriendMask(this._data, !this.toggleMask.isChecked);
            if (msg.OpRetCode == 0) {
                EventSystem.instance.publish(Evt_Shield);
            }
        }, this)
        this.btnRemove.setClickHandler(async () => {
            TienlenHelper.showSocialTips(this._data);
        }, this);
        this.btnCopy.setClickHandler(async () => {
            //let ret = await TienlenHelper.copyContentH5(this._data.SnId.toString());
            let ret = await Utils.copyToClip(this._data.SnId.toString());
            TienlenHelper.showFloatTips(ret ? I18nMgr.getInstance().getStringByKey("tienlen.fuzhichenggongTxt") : I18nMgr.getInstance().getStringByKey("tienlen.fuzhishibaiTxt"));
        })
    }

    public async show(...args: any) {
        this._data = args[0];
        let isSelf = this._data.SnId == UserData.getInstance().getSnId();
        this.labelName.string = `${this._data.Name}`;
        this.labelID.string = `${this._data.SnId}`
        this.labelList[0].string = Utils.cvtToKMB(this._data.Coin);
        this.labelList[1].string = Utils.cvtToKMB(this._data.Diamond);
        this.labelList[2].string = Utils.cvtToKMB(this._data.VCard);
        this.spHead.spriteFrame = await Utils.getHeadSpriteFrame(this._data.Head);
        if (isSelf) {
            this.toggleAdd.node.active = false;
            this.toggleMask.node.active = false;
            this.btnRemove.node.active = false;
        } else {
            this.toggleAdd.node.active = true;
            this.toggleMask.node.active = true;
            this.btnRemove.node.active = true;
            this._setToggleAddEnable(!this._data.IsFriend);
            this.toggleMask.isChecked = this._data.IsShield;
            this._setBtnRemoveEnable(this._data.IsFriend);
        }

    }

    _setBtnRemoveEnable(flag: boolean) {
        this.btnRemove.interactable = flag;
        this.btnRemove.getComponentInChildren(LabelOutline).enabled = flag;
    }

    refreshOp(op: friend.friend.SCFriendOp) {
        if (op.SnId == this._data.SnId) {
            if (op.OpCode == 1) {//同意
                this._setBtnRemoveEnable(true);
                this._setToggleAddEnable(false);
            } else if (op.OpCode == 3) {//删除
                this._setBtnRemoveEnable(false);
                this._setToggleAddEnable(true);
            }
        }

    }

    _setToggleAddEnable(flag: boolean) {
        this.toggleAdd.interactable = flag;
        this.toggleAdd.isChecked = !flag;
    }

}

