import { _decorator, Component, Node, ToggleContainer, Sprite, Label, Toggle, PageView } from 'cc';
import player from '../../../ScriptCore/protocol/player.js';
import { ModalOpacity } from '../../../ScriptCore/UIFrame/config/SysDefine';
import { ModalType } from '../../../ScriptCore/UIFrame/Struct';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { ButtonPlus } from '../common/component/ButtonPlus';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { BasePage } from './PageChat';
import { PageInfo0 } from './PageInfo0';
const { ccclass, property } = _decorator;

@ccclass('WndUserInfo')
export class WndUserInfo extends UIWindow {
    @property(ToggleContainer)
    private toggleContainer: ToggleContainer;
    @property(ButtonPlus)
    private btnClose: ButtonPlus;
    private _pageView: PageView;
    private _data: player.player.SCQueryPlayer;
    private _toggleIndex: number = -1;
    private static _instance: WndUserInfo;
    // modalType = new ModalType(ModalOpacity.OpacityHalf, true);
    onLoad() {
        WndUserInfo._instance = this;
        this._pageView = this.getComponentInChildren(PageView);
        // this._pageView.node.on(PageView.EventType.PAGE_TURNING, () => {
        //     this.toggleIndex = this._pageView.curPageIdx;
        // }, this);
        this.btnClose.setClickHandler(() => {
            this.closeSelf();
        }, this);
    }

    public static get instance(): WndUserInfo {
        return this._instance;
    }

    set toggleIndex(value: number) {
        if (this.toggleIndex == value) return;
        this._toggleIndex = value;
        let list = this.toggleContainer.toggleItems;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (index == value) {
                element.isChecked = true;
                this.onToggleChange();
                break;
            }
        }
    }

    get toggleIndex(): number {
        return this._toggleIndex;
    }

    onToggleClick() {
        TienlenHelper.playSound(TienlenDefine.SoundClick);
        this.toggleIndex = this.checkindex;
    }

    onToggleChange() {
        let index = this.toggleIndex;
        this.setPageIndex(index);
        this.getCurPage(index)?.show(this._data);
    }

    getCurPage(index: number): BasePage {
        let pages = this._pageView.getPages();
        return pages[index] && pages[index].getComponent(BasePage);
    }

    setPageIndex(pageIdx: number) {
        let pages = this._pageView.getPages();
        for (let index = 0; index < pages.length; index++) {
            const element = pages[index];
            if (pageIdx != index) {
                element.active = false;
            } else {
                element.active = true;
            }
        }
    }

    get checkindex(): number {
        let list = this.toggleContainer.toggleItems;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element.isChecked) return index;
        }
        return -1;
    }

    refresh(op: any) {
        if (this.toggleIndex == 0) {
            this.getCurPage(this.toggleIndex)?.getComponent(PageInfo0)?.refreshOp(op);
        }
    }

    onShow(...args: any) {
        super.onShow(...args);
        this._data = args[0];
        this.toggleIndex = 0;
    }

    public get data(): player.player.SCQueryPlayer {
        return this._data;
    }

    onHide() {
        this.toggleIndex = -1;
        WndUserInfo._instance = null;
    }

}

