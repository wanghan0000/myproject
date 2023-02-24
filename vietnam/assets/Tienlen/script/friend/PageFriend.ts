import { _decorator, Component, Node, Prefab, Layout, Label, ScrollView, instantiate, Toggle, Button, game, Vec3, Sprite, EventTouch } from 'cc';
import { UserData } from '../../../ScriptCore/data/UserData';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import chat from '../../../ScriptCore/protocol/chat.js';
import friend from '../../../ScriptCore/protocol/friend';
import { ButtonPlus } from '../common/component/ButtonPlus';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { ItemFriend } from './ItemFriend';
import { BasePage, PageChat } from './PageChat';
const { ccclass, property } = _decorator;

@ccclass('PageFriend')
export class PageFriend extends BasePage {
    @property(Prefab)
    public pfbFriendItem: Prefab;
    @property(Node)
    public pageChatTemplate: Node;
    @property(ScrollView)
    public listFriend: ScrollView;
    @property(Label)
    public labelName: Label;
    @property(ButtonPlus)
    public btnInfo: ButtonPlus;
    @property(Sprite)
    public spHead: Sprite;
    @property(ButtonPlus)
    public btnAdd: ButtonPlus;
    @property(ButtonPlus)
    public btnRecommend: ButtonPlus;
    @property(ButtonPlus)
    public btnFriendGroup0: ButtonPlus;
    @property(ButtonPlus)
    public btnFriendGroup1: ButtonPlus;
    @property(Node)
    public friendGroup0: Node;
    @property(Node)
    public friendGroup1: Node;
    private _pageChat: PageChat;
    private _selectItem: ItemFriend;
    private _toggleIndex: number = -1;
    private _friendList: friend.friend.SCFriendList;
    private _unmaskFriendList: friend.friend.IFriendInfo[];
    private _maskFriendList: friend.friend.IFriendInfo[];
    private _toggleList: ItemFriend[] = [];
    private _mapPageChat: Map<number, PageChat> = new Map<number, PageChat>();
    private _unreadFlag: boolean;

    onLoad() {
        this._pageChat = this.getComponentInChildren(PageChat);
        this.btnAdd.setClickHandler(() => {
            TienlenHelper.showRecommendList();
        }, this);
        this.btnInfo.setClickHandler(async () => {
            let ret = await TienlenHelper.callQueryPlayer(this._selectItem.data.SnId)
            TienlenHelper.showUserInfo(ret);
        }, this);
        this.btnRecommend.setClickHandler(() => {
            TienlenHelper.showRecommendList();
        }, this);
        this.btnFriendGroup0.setClickHandler(() => {
            this.setGroupFold(0, !this.getGroupFold(0));
        });
        this.btnFriendGroup1.setClickHandler(() => {
            this.setGroupFold(1, !this.getGroupFold(1));
        })
        this.friendGroup0.on("select", (item: ItemFriend) => {
            this.toggleIndex = this.getToggleIndex(item);
        });
        this.friendGroup1.on("select", (item: ItemFriend) => {
            this.toggleIndex = this.getToggleIndex(item);
        });
        this.node.on('unread', (flag: boolean) => {
            this._unreadFlag = flag;
        }, this);
        this.initShow();
    }

    public getPageChat(snid: number): PageChat {
        if (snid) {
            let chat = this._mapPageChat.get(snid);
            if (!chat) {
                let node = instantiate(this.pageChatTemplate);
                this.node.addChild(node);
                node.setSiblingIndex(0);
                chat = node.getComponent(PageChat);
                this._mapPageChat.set(snid, chat);
            }
            return chat;
        }
    }

    public clearPageChat(snid: number) {
        let chat = this._mapPageChat.get(snid);
        if (chat) {
            this._mapPageChat.delete(snid);
            chat.node.destroy();
        }
    }

    addNewMsg(msg: chat.chat.IChatLog) {
        // this._pageChat?.addNewMsg(msg);
        let selfSnid = UserData.getInstance().getSnId();
        let snid = msg.SrcSnId == selfSnid ? msg.ToSnId : msg.SrcSnId;
        this.getPageChat(snid)?.addNewMsg(msg);
        let friend = this.getFriend(snid);
        if (friend /*&& friend.Online*/) {
            friend.LastChatTs = msg.Ts;
            this._unmaskFriendList = this._friendList.FriendArr.filter((v) => !v.IsShield);
            this._unmaskFriendList.sort(this._sortFriendListFunc);
            this._maskFriendList = this._friendList.FriendArr.filter((v) => v.IsShield);
            this._maskFriendList.sort(this._sortFriendListFunc);
            this.updateList(false);
            if (msg.SrcSnId != selfSnid) {
                let item = this.getToggleBySnid(msg.SrcSnId);
                item && item.setOnline(true);//好友列表数据现在缓存，在线状态没有刷新，当收到消息认为对方已在线
            }
        }
    }

    getFriend(snid: number) {
        let list = this._friendList;
        for (let index = 0; index < list.FriendArr.length; index++) {
            const element = list.FriendArr[index];
            if (element.SnId == snid) return element;
        }
    }

    async show(refresh: boolean = false) {
        let list = this._friendList;
        if (!list || this._unreadFlag || refresh) {
            list = this._friendList = await TienlenHelper.callFriendList(0);
        }
        if (list.FriendArr.length == 0) {
            this.showOnNoFriend();
        } else {
            this._unmaskFriendList = this._friendList.FriendArr.filter((v) => !v.IsShield);
            this._unmaskFriendList.sort(this._sortFriendListFunc);
            this._maskFriendList = this._friendList.FriendArr.filter((v) => v.IsShield);
            this._maskFriendList.sort(this._sortFriendListFunc);
            this.updateList(true);
            this.showOnFriend();
        }
        this.setGroupFold(0, false);
        this.setGroupFold(1, false);
    }

    async refresh() {
        // this.toggleIndex = -1;
        this.show(true);
    }

    updateList(flag: boolean) {
        this._updateList(0, this.friendGroup0, this._unmaskFriendList, flag);
        this._updateList(1, this.friendGroup1, this._maskFriendList, flag);
        //根据当前索引选中
        if (!flag) return;
        let count = this.getToggleCount();
        if (this.toggleIndex < count) {
            let toggle = this.getToggle(this.toggleIndex);
            if (toggle && toggle.data.SnId != this.selectFriend.SnId) {
                toggle.check = true;
                this.onToggleChange();
            }
        } else {
            this.toggleIndex = count - 1;
        }
    }

    _updateList(group: number, node: Node, data: friend.friend.IFriendInfo[], flag: boolean) {
        let count = node.children.length;
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let item: ItemFriend = null;
            if (index < count) {
                item = node.children[index].getComponent(ItemFriend);
                item.node.active = true;
                if (flag)
                    item.check = false;
            } else {
                item = instantiate(this.pfbFriendItem).getComponent(ItemFriend);
                node.addChild(item.node);
            }
            item.data = element;
            let log = TienlenRuntime.getUnreadFriend(element.SnId);
            item.showMark(log && log.UnreadNum > 0);
        }
        for (let index = data.length; index < count; index++) {
            const element = node.children[index];
            element.active = false;
        }
        let online = this.getOnlineCount(data);
        if (group == 0) {
            //this.btnFriendGroup0.getComponentInChildren(Label).string = `好友(${online}/${data.length})`;
            this.btnFriendGroup0.getComponentInChildren(Label).string = I18nMgr.getInstance().getFormatStringByKey("tienlen.haoyouTxt2",online,data.length);
        } else if (group == 1) {
            //this.btnFriendGroup1.getComponentInChildren(Label).string = `屏蔽名单(${online}/${data.length})`;
            this.btnFriendGroup1.getComponentInChildren(Label).string = I18nMgr.getInstance().getFormatStringByKey("tienlen.pingbimingdanTxt",online,data.length);

        }
    }

    setGroupFold(group: number, flag: boolean) {
        let node = group == 0 ? this.btnFriendGroup0 : this.btnFriendGroup1;
        if (flag) {
            node.getComponentInChildren(Sprite).node.setRotationFromEuler(0, 0, 180);
        } else {
            node.getComponentInChildren(Sprite).node.setRotationFromEuler(0, 0, 0);
        }
        if (group == 0) {
            this.friendGroup0.active = !flag;
        } else {
            this.friendGroup1.active = !flag;
        }
    }

    getGroupFold(group: number) {
        let node = group == 0 ? this.friendGroup0 : this.friendGroup1;
        return !node.active;
    }

    getOnlineCount(data: friend.friend.IFriendInfo[]) {
        let count = 0;
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if (element.Online) {
                ++count;
            }
        }
        return count;
    }


    hide() {
        // this.toggleIndex = -1;
    }

    _sortFriendListFunc(l: friend.friend.IFriendInfo, r: friend.friend.IFriendInfo) {
        if (l.Online && r.Online) {
            return r.LastChatTs - l.LastChatTs;
        } else if (!l.Online && !r.Online) {
            return r.LogoutTs - l.LogoutTs;
        } else if (l.Online) {
            return -1;
        } else {
            return 1;
        }
    }

    checkChatRead() {
        let count = this.friendGroup0.children.length;
        for (let index = 0; index < count; index++) {
            const element = this.friendGroup0.children[index];
            if (element.activeInHierarchy) {
                let item = element.getComponent(ItemFriend);
                let log = TienlenRuntime.getUnreadFriend(item.data.SnId);
                item.showMark(log && log.UnreadNum > 0);
            }
        }
        TienlenRuntime.clearUnreadChat(this.selectFriend.SnId);
    }

    initShow() {
        this.btnAdd.node.parent.active = false;
        this.listFriend.node.active = false;
        this.labelName.node.parent.active = false;
        // this._pageChat.node.active = false;
        this.hidePageChat();
        this.btnRecommend.node.active = false;
    }

    showOnNoFriend() {
        this.btnAdd.node.parent.active = true;
        this.btnRecommend.node.active = false;
        this.listFriend.node.active = false;
        this.labelName.node.parent.active = false;
        // this._pageChat.node.active = false;
        this.hidePageChat();
        this.toggleIndex = -1;
    }

    showOnFriend() {
        this.btnAdd.node.parent.active = false;
        this.btnRecommend.node.active = true;
        this.listFriend.node.active = true;
        this.labelName.node.parent.active = true;
        this.toggleIndex = this.toggleIndex == -1 ? 0 : this.toggleIndex;
    }

    hidePageChat() {
        this._mapPageChat.forEach((chat) => {
            chat.node.active = false;
        })
    }

    set toggleIndex(value: number) {
        if (value == -1) {
            this._toggleIndex = value;
            let list = this.friendGroup0.getComponentsInChildren(ItemFriend);
            for (let index = 0; index < list.length; index++) {
                const element = list[index];
                element.check = false;
            }
            let list2 = this.friendGroup1.getComponentsInChildren(ItemFriend);
            for (let index = 0; index < list2.length; index++) {
                const element = list2[index];
                element.check = false;
            }
        } else {
            let lastToggle = this.getToggle(this.toggleIndex);
            if (lastToggle) {
                lastToggle.check = false;
                this.getPageChat(lastToggle.data.SnId).hide();
            }
            this._toggleIndex = value;
            let toggle = this.getToggle(this.toggleIndex);
            if (toggle) {
                toggle.check = true;
                this.onToggleChange();
            }
        }
    }

    getToggleList() {
        this._toggleList.length = 0;
        let list = this.friendGroup0.getComponentsInChildren(ItemFriend);
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element.node.active) {
                this._toggleList.push(element);
            }
        }
        list = this.friendGroup1.getComponentsInChildren(ItemFriend);
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element.node.active) {
                this._toggleList.push(element);
            }
        }
        return this._toggleList;
    }

    getToggle(toggleIndex: number) {
        let list = this.getToggleList();
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (index == toggleIndex) {
                return element;
            }

        }
    }

    getToggleBySnid(snid: number) {
        let list = this.getToggleList();
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element.data.SnId == snid) {
                return element;
            }
        }
    }

    getToggleCount() {
        let list = this.getToggleList();
        return list.length;
    }

    getToggleIndex(toggle: ItemFriend) {
        let list = this.getToggleList();
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element == toggle) {
                return index;
            }
        }
        return -1;
    }

    get toggleIndex(): number {
        return this._toggleIndex;
    }

    async onToggleChange() {
        let item = this.getToggle(this.toggleIndex)?.getComponent(ItemFriend);
        this._selectItem = item;
        this.labelName.string = `${item.data.Name}(${item.data.SnId})`;
        this.updateHead(item.data.Head);
        // this._pageChat.show(item.data.SnId);
        let pageChat = this.getPageChat(item.data.SnId);
        pageChat.show(item.data.SnId);
        if (item.isUnread) {
            let flag = await TienlenHelper.nodeWait(0.5, this.node);//隐藏的pagechat显示新消息需要计算布局，延迟滚动到底部
            if (!flag) return;
            pageChat.scrollToBottom();
        }
        item.showMark(false);
        TienlenRuntime.clearUnreadChat(item.data.SnId);
    }

    async updateHead(head: number) {
        this.spHead.spriteFrame = await Utils.getHeadSpriteFrame(head);
    }

    public get selectFriend(): friend.friend.IFriendInfo {
        return this._selectItem && this._selectItem.data;
    }

}

