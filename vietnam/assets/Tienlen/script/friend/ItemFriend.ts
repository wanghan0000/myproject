import { _decorator, Component, Node, Sprite, Label, sp, EventTouch, Toggle } from 'cc';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import friend from '../../../ScriptCore/protocol/friend.js';
import { Color_Gray, Color_Green } from '../common/define';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('ItemFriend')
export class ItemFriend extends Component {
    @property(Sprite)
    public headSp: Sprite;
    @property(Label)
    public labelName: Label;
    @property(Label)
    public labelState: Label;
    @property(Sprite)
    public spMark: Sprite;
    @property(Sprite)
    public spCheck: Sprite;
    private _data: friend.friend.IFriendInfo;

    onLoad() {
        this.headSp.node.on(Node.EventType.TOUCH_END, async (evt: EventTouch) => {
            evt.bubbles = false;
            let ret = await TienlenHelper.callQueryPlayer(this._data.SnId)
            TienlenHelper.showUserInfo(ret);
        }, this);
        this.node.on(Node.EventType.TOUCH_END, () => {
            if (!this.check) {
                this.node.parent.emit("select", this.node.getComponent(ItemFriend));
            }
        }, this);
    }

    public set check(value: boolean) {
        this.spCheck.node.active = value;
    }

    public get check(): boolean {
        return this.spCheck.node.active;
    }

    public set data(value: any) {
        this._data = value;
        this.labelName.string = `${this._data.Name}`;
        this.labelState.string = this._data.Online ? 'online' : 'offline';
        this.labelState.color = this._data.Online ? Color_Green : Color_Gray;
        this.updateHead(this._data.Head);
    }

    public get data(): friend.friend.IFriendInfo {
        return this._data;
    }

    public setOnline(flag: boolean) {
        this._data && (this._data.Online = flag);
        this.labelState.string = flag ? 'online' : 'offline';
        this.labelState.color = flag ? Color_Green : Color_Gray;
    }

    async updateHead(head: number) {
        this.headSp.spriteFrame = await Utils.getHeadSpriteFrame(head);
    }

    public showMark(flag: boolean) {
        this.spMark.node.active = flag;
    }

    public get isUnread(): boolean {
        return this.spMark.node.active;
    }

}

