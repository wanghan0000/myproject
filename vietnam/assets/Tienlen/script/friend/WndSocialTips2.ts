import { _decorator, Component, Node, Sprite, Label, UITransform, Prefab, v3, Tween, tween } from 'cc';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import friend from '../../../ScriptCore/protocol/friend.js';
import { ModalOpacity } from '../../../ScriptCore/UIFrame/config/SysDefine';
import { ModalType } from '../../../ScriptCore/UIFrame/Struct';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { UIRoot } from '../../../ScriptCore/UIFrame/UIRoot';
import { CancelationToken } from '../common/async/CancelationToken';
import { ButtonPlus } from '../common/component/ButtonPlus';
import ResourceHelper from '../common/helper/ResourceHelper';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('WndSocialTips2')
export class WndSocialTips2 extends UIWindow {
    @property(Sprite)
    private spHead: Sprite;
    @property(ButtonPlus)
    private btnYes: ButtonPlus;
    @property(ButtonPlus)
    private btnNo: ButtonPlus;
    @property(Label)
    private labelContent: Label;
    @property(Label)
    private labelCD: Label;
    private _data: friend.friend.SCInviteFriend;
    private _cancelToken: CancelationToken = new CancelationToken();
    modalType = new ModalType(ModalOpacity.None, false);
    public static tipList: WndSocialTips2[] = [];
    onLoad() {
        this.btnYes.setClickHandler(() => {
            TienlenHelper.sendFriendInviteOp(this._data.SrcSnId, 0, this._data.Pos);
            WndSocialTips2.hide(this);

        }, this);
        this.btnNo.setClickHandler(() => {
            TienlenHelper.sendFriendInviteOp(this._data.SrcSnId, 1, this._data.Pos);
            WndSocialTips2.hide(this);
        }, this);
    }

    onShow(...args: any) {
        this._data = args[0];
        this.layoutRightBottom();
        this.updateHead(this._data.SrcHead);
        this.labelContent.string = `${this._data.SrcName}(${this._data.SrcSnId})邀请您加入他的私人牌桌，是否同意？`;
        this.startCountDown(20);
    }

    layoutRightBottom() {
        let rooTW = UIRoot.getInstance().getComponent(UITransform).width;
        let rooTH = UIRoot.getInstance().getComponent(UITransform).height;
        let selfW = this.getComponent(UITransform).width;
        let selfH = this.getComponent(UITransform).height;
        this.node.setPosition(rooTW / 2 - selfW / 2, selfH / 2 - rooTH / 2);
    }

    async updateHead(head: number) {
        this.spHead.spriteFrame = await Utils.getHeadSpriteFrame(head);
    }

    async startCountDown(time: number) {
        this.labelCD.string = `(${time}s)`;
        while (time > 0) {
            let flag = await TienlenHelper.nodeWait(1, this.node, this._cancelToken);
            if (!flag) break;
            --time;
            this.labelCD.string = `(${time}s)`;
        }
        time == 0 && WndSocialTips2.hide(this);
    }


    onHide() {
        this._cancelToken && this._cancelToken.invoke();
        this._cancelToken = null;
    }

    public static async show(...args: any) {
        let pfb = await ResourceHelper.loadResInAB(TienlenDefine.ABName, `${TienlenDefine.PrefabInvite}`, Prefab);
        let wnd = PoolManager.instance.getNode(pfb, UIRoot.getInstance().node).getComponent(WndSocialTips2);
        wnd.onShow(...args);
        this.tipList.push(wnd);
        wnd.showEffect();
        if (this.tipList.length > 1 && this.tipList.length < 5) {//最多排列4个,后面弹框就叠加显示最下面一行
            for (let index = 0; index < this.tipList.length - 1; index++) {
                const element = this.tipList[index];
                Tween.stopAllByTarget(element);
                tween(element.node).to(1, { position: v3(element.node.position.x, (this.tipList.length - 1 - index) * 160 + element.node.position.y) }).start();
            }
        }
    }

    public static async hide(wnd: WndSocialTips2) {
        wnd.onHide();
        let idx = this.tipList.indexOf(wnd);
        idx != -1 && this.tipList.splice(idx, 1);
        await wnd.hideEffect();
        Tween.stopAllByTarget(wnd.node);
        PoolManager.instance.putNode(wnd.node);
    }

    public static async hideAll() {
        for (let index = 0; index < this.tipList.length; index++) {
            const wnd = this.tipList[index];
            wnd.onHide();
            await wnd.hideEffect();
            Tween.stopAllByTarget(wnd.node);
            PoolManager.instance.putNode(wnd.node);
        }
        this.tipList.length = 0;
    }

}

