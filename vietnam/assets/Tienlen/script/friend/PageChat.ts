import { _decorator, Component, Node, ScrollView, Prefab, EventTouch, UITransform } from 'cc';
import { UserData } from '../../../ScriptCore/data/UserData';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import chat from '../../../ScriptCore/protocol/chat.js';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { ItemChatOther } from './ItemChatOther';
import { ItemChatSelf } from './ItemChatSelf';
const { ccclass, property } = _decorator;

export class BasePage extends Component {
    show(...args: any) {

    }
    hide() {

    }

    refresh() {
        this.show();
    }
}

@ccclass('PageChat')
export class PageChat extends BasePage {
    @property(Prefab)
    private pfbOtherChat: Prefab;
    @property(Prefab)
    private pfbSelfChat: Prefab;
    @property
    private chatScale: number = 1;
    @property(ScrollView)
    private list: ScrollView;
    @property
    private isPublic: boolean = false;
    private _targetSnid: number;
    private _showFlag: boolean = true;
    onLoad() {
        this.node.on(Node.EventType.TOUCH_END, async (evt: EventTouch) => {
            if (this._targetSnid == 0 && evt.target != this.node) {
                let item = (<Node>evt.target).parent.getComponent(ItemChatOther);
                let ret = await TienlenHelper.callQueryPlayer(item.data.SrcSnId)
                TienlenHelper.showUserInfo(ret);
            }
        }, this)
    }
    show(...args: any) {
        this.node.active = true;
        this._showLog(args[0] || 0);
    }
    hide() {
        this.node.active = false;
    }

    private async _showLog(snId: number) {
        this._targetSnid = snId;
        let log = TienlenRuntime.getChatLog(snId);
        if (!log) {
            let ret = await TienlenHelper.callChatMsgLog(snId);
            log = ret.ChatLogs;
        }
        let selfSnid = UserData.getInstance().getSnId();
        if (this._showFlag || this.isPublic) {
            this._showFlag = false;
            this.isPublic && this.clearLog();
            for (let index = 0; index < log.length; index++) {
                let msg = log[index];
                let pfb = msg.SrcSnId == selfSnid ? this.pfbSelfChat : this.pfbOtherChat;
                let item = PoolManager.instance.getNode(pfb, this.list.content);
                item.setScale(this.chatScale, this.chatScale);
                let comp = msg.SrcSnId == selfSnid ? item.getComponent(ItemChatSelf) : item.getComponent(ItemChatOther);
                await comp.init(msg);
                if (index + 1 % 50 == 0) await TienlenHelper.nodeWait(0, this.node);
            }
            snId && TienlenHelper.sendChatRead(snId);
            await TienlenHelper.nodeWait(0, this.node);
            if (this.list.content.getComponent(UITransform).height <= this.list.getComponent(UITransform).height) {
                this.list.scrollToTop(0);
            } else {
                this.list.scrollToBottom(0);
            }
        } else {
            // for (let index = 0; index < log.length; index++) {
            //     let msg = log[index];
            //     let item = this.list.content.children[index];
            //     if (!item) {
            //         TienlenHelper.error("pagechat showlog item is null: snid ", snId);
            //         continue;
            //     }
            //     let comp = msg.SrcSnId == selfSnid ? item.getComponent(ItemChatSelf) : item.getComponent(ItemChatOther);
            //     comp.init(msg, false);//富文本组件每次active都需要重新计算
            // }
        }
    }

    public scrollToTop() {
        this.list.scrollToTop(0);
    }

    public scrollToBottom() {
        this.list.scrollToBottom(0);
    }

    private clearLog() {
        while (this.list.content.children.length > 0) {
            let node = this.list.content.children[0];
            PoolManager.instance.putNode(node);
        }
    }

    async addNewMsg(msg: chat.chat.IChatLog) {
        let selfSnid = UserData.getInstance().getSnId();
        if (this._targetSnid == 0 && msg.ToSnId == 0) {//公共频道
            let pfb = msg.SrcSnId == selfSnid ? this.pfbSelfChat : this.pfbOtherChat;
            let item = PoolManager.instance.getNode(pfb, this.list.content);
            item.setScale(this.chatScale, this.chatScale);
            let comp = msg.SrcSnId == selfSnid ? item.getComponent(ItemChatSelf) : item.getComponent(ItemChatOther);
            await comp.init(msg);
        } else {
            // if ((msg.SrcSnId == this._targetSnid && msg.ToSnId == selfSnid) || msg.SrcSnId == selfSnid) {
            let selfSnid = UserData.getInstance().getSnId();
            let pfb = msg.SrcSnId == selfSnid ? this.pfbSelfChat : this.pfbOtherChat;
            let item = PoolManager.instance.getNode(pfb, this.list.content);
            item.setScale(this.chatScale, this.chatScale);
            TienlenHelper.sendChatRead(msg.ToSnId == selfSnid ? msg.SrcSnId : msg.ToSnId);
            let comp = msg.SrcSnId == selfSnid ? item.getComponent(ItemChatSelf) : item.getComponent(ItemChatOther);
            await comp.init(msg);
            // }
        }
        await TienlenHelper.nodeWait(0, this.node);
        if (this.list.content.getComponent(UITransform).height <= this.list.getComponent(UITransform).height) {
            this.list.scrollToTop(0);
        } else {
            this.list.scrollToBottom(0);
        }
    }

    onDisable() {
        // this.clearLog();
    }

}

