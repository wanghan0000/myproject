import { _decorator, Component, Node, Layout, Prefab, EventTouch } from 'cc';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { ModalOpacity } from '../../../ScriptCore/UIFrame/config/SysDefine';
import { ModalType } from '../../../ScriptCore/UIFrame/Struct';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import TienlenDefine from '../TienlenDefine';
import { ItemEmotion } from './ItemEmotion';
const { ccclass, property } = _decorator;

@ccclass('WndEmotion')
export class WndEmotion extends UIWindow {
    @property(Prefab)
    private pfbItemEmotion: Prefab;

    private layout: Layout;
    modalType = new ModalType(ModalOpacity.OpacityHalf, true);
    onLoad() {
        this.layout = this.getComponentInChildren(Layout);
    }

    onShow() {
        for (let index = 0; index < TienlenDefine.EmotionNum; index++) {
            let emo = PoolManager.instance.getNode(this.pfbItemEmotion, this.layout.node);
            let item = emo.getComponent(ItemEmotion);
            item.data = `${index}`;
            item.setClickAble(true);
            item.resize(1.5);
        }
    }

    recycle() {
        while (this.layout.node.children.length > 0) {
            PoolManager.instance.putNode(this.layout.node.children[0]);
        }
    }

    public async hideEffect(): Promise<boolean> {
        let flag = await super.hideEffect();
        return flag;
    }

    onHide() {
        this.recycle();
    }


}

