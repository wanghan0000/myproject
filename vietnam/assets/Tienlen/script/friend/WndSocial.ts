import { _decorator, Component, Node, ToggleContainer, PageView, Toggle, UITransform, Sprite, sp, EditBox, Button, game, SpriteAtlas, Tween, v3, EventTouch, LabelOutline, Label } from 'cc';
import { roots } from 'protobufjs';
import { UserData } from '../../../ScriptCore/data/UserData';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import chat from '../../../ScriptCore/protocol/chat.js';
import { ModalOpacity } from '../../../ScriptCore/UIFrame/config/SysDefine';
import { ModalType } from '../../../ScriptCore/UIFrame/Struct';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { UIRoot } from '../../../ScriptCore/UIFrame/UIRoot';
import { CancelationToken } from '../common/async/CancelationToken';
import { ButtonPlus } from '../common/component/ButtonPlus';
import EventSystem from '../common/EventSystem';
import { Evt_UnreadChange } from '../handlers/EventHandlers';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { BasePage, PageChat } from './PageChat';
import { PageFriend } from './PageFriend';
import { WndEmotion } from './WndEmotion';
const { ccclass, property } = _decorator;

@ccclass('WndSocial')
export class WndSocial extends UIWindow {
    public static ChatInterval: number = 5000;
    private _toggleContainer: ToggleContainer;
    private _pageView: PageView;
    @property(Sprite)
    private spMarkFriend: Sprite;
    @property(Sprite)
    private spMarkRequest: Sprite;
    @property(ButtonPlus)
    private btnEmo: ButtonPlus;
    @property(ButtonPlus)
    private btnSend: ButtonPlus;
    @property(EditBox)
    private editChat0: EditBox;
    @property(EditBox)
    private editChat1: EditBox;
    @property(Node)
    private maskEmotion: Node;
    @property(ButtonPlus)
    private btnShrink: ButtonPlus;
    @property(Sprite)
    private testSpSend: Sprite;
    @property(Label)
    private testlabelSend: Label;
    private _toggleIndex: number = -1;
    private _emotion: WndEmotion;
    private _cancelToken: CancelationToken = new CancelationToken();
    modalType = new ModalType(ModalOpacity.OpacityHigh, true);
    private static _instance: WndSocial;

    public static get instance(): WndSocial {
        return this._instance;
    }

    onLoad() {
        WndSocial._instance = this;
        this._toggleContainer = this.getComponentInChildren(ToggleContainer);
        this._pageView = this.getComponentInChildren(PageView);
        this._emotion = this.getComponentInChildren(WndEmotion);
        // this._pageView.node.on(PageView.EventType.PAGE_TURNING, (target: PageView) => {
        //     this.toggleIndex = this._pageView.curPageIdx;
        // }, this);
        this.btnSend.setClickHandler(async () => {
            let editChat = this.activeEditbox;
            if (!editChat.string) {
                //TienlenHelper.showFloatTips('发送内容不能为空');
                TienlenHelper.showFloatTips(I18nMgr.getInstance().getStringByKey("tienlen.fasongneirongbunengkongTxt"))
                return;
            }
            let index = this.toggleIndex;
            if (index == 0) {
                TienlenRuntime.chatTime = game.totalTime;
                this.startChatCountDown(WndSocial.ChatInterval / 1000);
                let ret = await TienlenHelper.callChatMsg(0, editChat.string);
                editChat.string = '';
            } else if (index == 1) {
                let pageFriend = this._pageView.getPages()[index].getComponent(PageFriend);
                let ret = await TienlenHelper.callChatMsg(pageFriend.selectFriend.SnId, editChat.string);
                this.clearEditbox();
            }
        }, this);
        this.btnEmo.setClickHandler(async () => {
            if (this._emotion.node.active) {
                this.showEmotion(false);
            } else {
                this.showEmotion(true);
            }
        }, this);
        this.btnShrink.setClickHandler(() => {
            this.closeSelf();
        }, this);
        this.maskEmotion.on(Node.EventType.TOUCH_END, (evt: EventTouch) => {
            this.showEmotion(false, false);
        })
        this.spMarkFriend.node.active = false;
        this.spMarkRequest.node.active = false;
    }

    async showEmotion(flag: boolean, tweenFlag: boolean = true) {
        if (flag) {
            this._emotion.node.active = true;
            this._emotion.onShow();
            tweenFlag && this._emotion.showEffect();
            this.maskEmotion.active = true;
        } else {
            tweenFlag && await this._emotion.hideEffect();
            this._emotion.onHide();
            this._emotion.node.active = false;
            this.maskEmotion.active = false;
        }
    }

    async clearEditbox() {
        let editChat = this.activeEditbox;
        editChat.string = '';
        editChat.enabled = false;
        await TienlenHelper.nodeWait(0, this.node);
        editChat.enabled = true;
        editChat.placeholder = `Enter text here...`
    }

    get activeEditbox(): EditBox {
        return this.toggleIndex == 0 ? this.editChat0 : this.editChat1;
    }

    async startChatCountDown(leftTime: number) {
        this.editChat0.enabled = false;
        //this.editChat0.placeholder = `发言CD:${leftTime}s`
        this.editChat0.placeholder = `${I18nMgr.getInstance().getStringByKey("tienlen.fayancdTxt")}${leftTime}s`;
        while (leftTime > 0) {
            let flag = await TienlenHelper.nodeWait(1, this.node, this._cancelToken);
            if (!flag) break;
            --leftTime;
            //this.editChat0.placeholder = `发言CD:${leftTime}s`
            this.editChat0.placeholder = `${I18nMgr.getInstance().getStringByKey("tienlen.fayancdTxt")}${leftTime}s`;
        }
        if (leftTime == 0) {
            this.editChat0.placeholder = `Enter text here...`
            this.editChat0.enabled = true;
        }
    }

    checkCanChat() {
        let delta = game.totalTime - TienlenRuntime.chatTime;
        if (this.toggleIndex == 0) {
            if (TienlenRuntime.chatTime == 0 || delta >= WndSocial.ChatInterval) {
                this.editChat0.enabled = true;
                // this.editChat0.string = '';
            } else {
                this.startChatCountDown(Math.floor((WndSocial.ChatInterval - delta) / 1000));
            }
        }
    }

    set toggleIndex(value: number) {
        if (this.toggleIndex == value) return;
        this.getCurPage(this.toggleIndex)?.hide();
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

    getCurPage(index: number): BasePage {
        let pages = this._pageView.getPages();
        return pages[index] && pages[index].getComponent(BasePage);
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
        this.getCurPage(index)?.show();
        if (index == 2) {
            this.setRequestRead();
            this.setChatEnable(false);
            this.editChat0.enabled = false;
            this.editChat1.enabled = false;
        } else if (index == 1) {
            this.setChatEnable(true);
            this.checkChatUnRead();
            this.setFrendChangeRead();
            this.editChat1.node.active = true;
            this.editChat1.enabled = true;
            this.editChat0.node.active = false;
        } else {
            this.setChatEnable(true);
            this.editChat1.node.active = false;
            this.editChat0.node.active = true;
            this.checkCanChat();
        }
    }

    setPageIndex(pageIdx: number) {
        // this._pageView.setCurrentPageIndex(index);
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

    setChatEnable(flag: boolean) {
        this.btnSend.interactable = flag;
        this.btnSend.getComponentInChildren(Sprite).grayscale = !flag;
        this.testSpSend.grayscale = !flag;
        this.testlabelSend.getComponent(LabelOutline).enabled = flag;
        this.btnEmo.interactable = flag;
    }

    setRequestRead() {
        //请求列表红点，只要打开请求标签就会消失
        TienlenRuntime.unreadRequestList = null;
        this.setRequestMark(false);
        EventSystem.instance.publish(Evt_UnreadChange, this.spMarkFriend.node.active || this.spMarkRequest.node.active);
    }
    //好友添加或者删除设置已读
    setFrendChangeRead() {
        let list = TienlenRuntime.unreadRequestList.FriendApplys;
        TienlenRuntime.unreadRequestList.FriendApplys = list.filter((v: any) => v.OpCode == 0 || v.OpCode == undefined);
    }

    checkChatUnRead() {
        this.setFriendChatMark(TienlenRuntime.totalUnreadNum > 0);
        EventSystem.instance.publish(Evt_UnreadChange, this.spMarkFriend.node.active || this.spMarkRequest.node.active);
    }

    setRequestMark(flag: boolean) {
        this.spMarkRequest.node.active = flag;
    }

    setFriendChatMark(flag: boolean) {
        this.spMarkFriend.node.active = flag;
        this.getCurPage(1).node.emit("unread", flag);
    }

    refreshPage(index: number) {
        let pages = this._pageView.getPages();
        pages.length > 0 && pages[index].getComponent(BasePage).refresh();
    }

    checkUnread() {
        let reqList = TienlenRuntime.unreadRequestList;
        this.setRequestMark(false);
        this.setFriendChatMark(false);
        let curIdx = this.toggleIndex;
        if (reqList && reqList.FriendApplys.length > 0) {
            for (let index = 0; index < reqList.FriendApplys.length; index++) {
                const apply = reqList.FriendApplys[index];
                let opcode = (<any>apply).OpCode as number;
                if (opcode == 0 || opcode == undefined) {
                    if (curIdx == 2) {
                        this.refreshPage(curIdx);
                        this.setRequestRead();
                    } else {
                        this.setRequestMark(true);
                    }
                } else if (opcode == 1 || opcode == 3) {
                    if (curIdx == 1) {
                        this.refreshPage(curIdx);
                        this.checkChatUnRead();
                        this.setFrendChangeRead();
                    }
                    else {
                        this.setFriendChatMark(true);
                    }
                }
            }
        }
        if (TienlenRuntime.totalUnreadNum > 0) {
            if (curIdx == 1) {
                this.checkChatUnRead();
            } else {
                this.setFriendChatMark(true);
            }
        }
        EventSystem.instance.publish(Evt_UnreadChange, this.spMarkFriend.node.active || this.spMarkRequest.node.active);
    }

    onShow(...args: any) {
        super.onShow(...args);
        // this.layoutLeft();
        this.toggleIndex = 0;
        this.checkUnread();
    }

    onEmotion(data: string) {
        let editbox = this.activeEditbox;
        editbox.string = `${editbox.string}${data}`;
    }

    get checkindex() {
        let list = this._toggleContainer.toggleItems;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element.isChecked) return index;
        }
    }

    layoutLeft() {
        let rooTW = UIRoot.getInstance().getComponent(UITransform).width;
        let selfW = this.getComponent(UITransform).width;
        this.node.setPosition(selfW / 2 - rooTW / 2, 0);
    }

    async expandLeft() {
        let rooTW = UIRoot.getInstance().getComponent(UITransform).width;
        let selfW = this.getComponent(UITransform).width;
        this.node.setPosition(-rooTW / 2 - selfW / 2 - 50, 0);
        Tween.stopAllByTarget(this.node);
        await TienlenHelper.tweenTo(this.node, 0.3, { position: v3(selfW / 2 - rooTW / 2, 0) });
    }

    async shrinkLeft() {
        let rooTW = UIRoot.getInstance().getComponent(UITransform).width;
        let selfW = this.getComponent(UITransform).width;
        Tween.stopAllByTarget(this.node);
        await TienlenHelper.tweenTo(this.node, 0.3, { position: v3(-rooTW / 2 - selfW / 2 - 50, 0) });
    }

    onHide() {
        this.toggleIndex = -1;
        this._cancelToken && this._cancelToken.invoke();
        this._cancelToken = null;
        WndSocial._instance = null;
    }

    public async showEffect(): Promise<boolean> {
        // return super.showEffect();
        await this.expandLeft();
        return true;
    }

    public async hideEffect(): Promise<boolean> {
        // return super.hideEffect();
        await this.shrinkLeft();
        return true;
    }

    public get pageChat(): PageChat {
        let index = this.toggleIndex;
        if (index == 0) {
            return this._pageView.getPages()[index].getComponent(PageChat);
        } else if (index == 1) {
            return this._pageView.getPages()[index].getComponentInChildren(PageChat)
        }
    }

    public get pageFrined(): PageFriend {
        let index = this.toggleIndex;
        if (index == 1) return this._pageView.getPages()[index].getComponent(PageFriend);
    }

    public addNewMsg(msg: chat.chat.ChatLog) {
        if (this.toggleIndex == 0) {
            this.pageChat?.addNewMsg(msg);
        } else if (this.toggleIndex == 1) {
            this.pageFrined?.addNewMsg(msg);
        }
    }

}

