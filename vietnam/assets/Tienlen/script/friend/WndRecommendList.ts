import { _decorator, Component, Node, game, Label, ToggleContainer, PageView, EditBox, Layout, Prefab, instantiate } from 'cc';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import friend from '../../../ScriptCore/protocol/friend.js';
import { ModalOpacity } from '../../../ScriptCore/UIFrame/config/SysDefine';
import { ModalType } from '../../../ScriptCore/UIFrame/Struct';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { CancelationToken } from '../common/async/CancelationToken';
import { ButtonPlus } from '../common/component/ButtonPlus';
import { tienlen } from '../protocol/tienlen';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { ItemFriend2 } from './ItemFriend2';
const { ccclass, property } = _decorator;

@ccclass('WndRecommendList')
export class WndRecommendList extends UIWindow {
    public static RefreshInterval: number = 20000;
    private _friendList: ItemFriend2[];
    private _cancelToken: CancelationToken = new CancelationToken();
    private _toggleContainer: ToggleContainer;
    private _pageView: PageView;
    @property(Prefab)
    private pfbItemFriend: Prefab;
    @property(ButtonPlus)
    private btnRefresh: ButtonPlus;
    @property(ButtonPlus)
    private btnSearch: ButtonPlus;
    @property(ButtonPlus)
    private btnHelp: ButtonPlus;
    @property(EditBox)
    private editSearch: EditBox;
    @property(Layout)
    private list0: Layout;
    @property(Layout)
    private list1: Layout;
    @property(Label)
    private labelCD: Label;
    @property(Label)
    private labelTip0: Label;
    @property(Label)
    private labelTip1: Label;
    @property(ButtonPlus)
    private btnClose: ButtonPlus;
    private _toggleIndex: number = -1;
    private _refreshFlag: boolean = true;

    // modalType = new ModalType(ModalOpacity.OpacityHalf, true);
    onLoad() {
        this._toggleContainer = this.getComponentInChildren(ToggleContainer);
        this._pageView = this.getComponentInChildren(PageView);
        this._friendList = this.list1.getComponentsInChildren(ItemFriend2);
        this.btnRefresh.setClickHandler(() => {
            this.onRefresh();
        }, this);
        this.btnSearch.setClickHandler(async () => {
            let content = this.editSearch.string;
            if (content.length >= 3) {
                let msg = await TienlenHelper.callSearchFriend(content);
                this.initSearchList(msg.Players);
                //this.labelTip0.string = msg.Players.length > 0 ? '' : '无法搜索出对应玩家';
                this.labelTip0.string = msg.Players.length >0 ? "" : I18nMgr.getInstance().getStringByKey("tienlen.meiyouzhaodaoTxt");
            }
            else {
                //this.labelTip0.string = '最少输入3个字符';
                this.labelTip0.string = I18nMgr.getInstance().getStringByKey("tienlen.sousuoshurucuowuTxt");
            }
        }, this);
        this.btnHelp.setClickHandler(() => {
            this.editSearch.blur();
            TienlenHelper.showSocialTips3(I18nMgr.getInstance().getStringByKey(TienlenDefine.StrSearchHelp));
        }, this);
        // this._pageView.node.on(PageView.EventType.PAGE_TURNING, () => {
        //     this.toggleIndex = this._pageView.curPageIdx;
        // }, this);
        this.btnClose.setClickHandler(() => {
            this.closeSelf();
        }, this);
        this.labelTip0.string = '';
        this.labelTip1.string = '';
    }

    set toggleIndex(value: number) {
        if (this.toggleIndex == value) return;
        this._toggleIndex = value;
        let list = this._toggleContainer.toggleItems;
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
        this.toggleIndex = this.checkindex;
    }

    get checkindex(): number {
        let list = this._toggleContainer.toggleItems;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element.isChecked) return index;
        }
        return -1;
    }

    onToggleChange() {
        let index = this.toggleIndex;
        // this._pageView.setCurrentPageIndex(index);
        this.setPageIndex(index);
        if (index == 1 && this._refreshFlag) {
            this.onRefresh();
            this._refreshFlag = false;
        }
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


    async initRecommendList(list: friend.friend.IFriendInfo[]) {
        TienlenRuntime.recommendList = list;
        for (let index = 0; index < this._friendList.length; index++) {
            const element = this._friendList[index];
            if (index < list.length) {
                element.node.active = true;
                element.data = list[index];
            } else {
                element.node.active = false;
            }
        }
        this.labelTip1.string = list.length > 0 ? '' : '当前无推荐好友';
    }

    async initSearchList(list: friend.friend.IPlayerInfo[]) {
        let itemList = this.list0.getComponentsInChildren(ItemFriend2)
        for (let index = 0; index < list.length; index++) {
            if (index < itemList.length) {
                const element = itemList[index];
                element.node.active = true;
                element.data = list[index];
            } else {
                const element = instantiate(this.pfbItemFriend).getComponent(ItemFriend2);
                element.node.active = true;
                element.data = list[index];
                this.list0.node.addChild(element.node);
            }
        }
        for (let index = list.length; index < itemList.length; index++) {
            const element = itemList[index];
            element.node.active = false;
        }
    }

    async onRefresh() {
        this.enableRefresh(false);
        let totalTime = game.totalTime;
        if (totalTime - TienlenRuntime.recommendRefreshTime >= WndRecommendList.RefreshInterval || TienlenRuntime.recommendRefreshTime == 0) {
            TienlenRuntime.recommendRefreshTime = totalTime;
            let list = await TienlenHelper.callFriendList(2);
            this.initRecommendList(list.FriendArr);
            this.startCountDown(20);
        } else {
            let leftTime = WndRecommendList.RefreshInterval - totalTime + TienlenRuntime.recommendRefreshTime;
            this.initRecommendList(TienlenRuntime.recommendList);
            this.startCountDown(Math.floor(leftTime / 1000))
        }
    }

    async startCountDown(time: number) {
        this.labelCD.string = I18nMgr.getInstance().getFormatStringByKey("tienlen.shuaxinCDTxt",time);
        while (time > 0) {
            let flag = await TienlenHelper.nodeWait(1, this.node, this._cancelToken);
            if (!flag) break;
            --time;
            this.labelCD.string =  I18nMgr.getInstance().getFormatStringByKey("tienlen.shuaxinCDTxt",time);
        }
        time == 0 && this.enableRefresh(true);
    }

    enableRefresh(flag: boolean) {
        if (flag) {
            this.labelCD.node.active = false;
            this.btnRefresh.node.active = true;
        } else {
            this.labelCD.node.active = true;
            this.btnRefresh.node.active = false;
        }
    }

    onShow() {
        this.toggleIndex = 0;
    }

    onHide() {
        this.toggleIndex = -1;
        this._cancelToken && this._cancelToken.invoke();
        this._cancelToken = null;
    }

}

