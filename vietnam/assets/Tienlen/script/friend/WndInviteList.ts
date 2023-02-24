import { _decorator, Component, Node, Layout, Prefab, Primitive, instantiate, Label, UITransform } from 'cc';
import { roots } from 'protobufjs';
import { UserData } from '../../../ScriptCore/data/UserData';
import { ModalOpacity } from '../../../ScriptCore/UIFrame/config/SysDefine';
import { ModalType } from '../../../ScriptCore/UIFrame/Struct';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { UIRoot } from '../../../ScriptCore/UIFrame/UIRoot';
import TienlenHelper from '../TienlenHelper';
import { ItemInvite } from './ItemInvite';
const { ccclass, property } = _decorator;

@ccclass('WndInviteList')
export class WndInviteList extends UIWindow {
    @property(Prefab)
    private pfbItemInvite: Prefab;
    @property(Label)
    private labelTip: Label;
    private _layout: Layout;
    private _targetPos: number;
    modalType = new ModalType(ModalOpacity.OpacityZero, true);
    onLoad() {
        this._layout = this.getComponentInChildren(Layout);
        this._layout.node.on('click', async (target: ItemInvite) => {
            let ret = await TienlenHelper.callFriendInvite(target.data.SnId, this._targetPos);
            if (ret.OpRetCode == 0 && ret.SrcSnId == UserData.getInstance().getSnId())
                TienlenHelper.showFloatTips('邀请已发送');
        }, this);
    }

    async onShow(...args: any) {
        this._targetPos = args[0];
        this.layoutRight();
        this.labelTip.node.active = false;
        let list = await TienlenHelper.callFriendList(0);
        let flag = false;
        for (let index = 0; index < list.FriendArr.length; index++) {
            const element = list.FriendArr[index];
            if (element.Online) {
                let item = instantiate(this.pfbItemInvite).getComponent(ItemInvite);
                this._layout.node.addChild(item.node);
                item.init(element);
                flag = true;
            }
        }
        this.labelTip.node.active = !flag;
    }

    layoutRight() {
        let rooTW = UIRoot.getInstance().getComponent(UITransform).width;
        let selfW = this.getComponent(UITransform).width;
        this.node.setPosition(rooTW / 2 - selfW / 2, 0);
    }

    onHide() {

    }

}

