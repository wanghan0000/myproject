import { _decorator, Component, Node, Sprite, Label, Toggle } from 'cc';
import { UserData } from '../../../ScriptCore/data/UserData';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import friend from '../../../ScriptCore/protocol/friend.js';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('ItemFriend2')
export class ItemFriend2 extends Component {
    @property(Sprite)
    public headSp: Sprite;
    @property(Label)
    public labelName: Label;
    @property(Toggle)
    private toggleBtn: Toggle;
    private _data: friend.friend.IFriendInfo;

    onLoad() {
        // this._toggleBtn = this.getComponentInChildren(Toggle);
        this.toggleBtn.node.on(Toggle.EventType.TOGGLE, () => {
            if (this.toggleBtn.isChecked) {
                TienlenHelper.callFriendOp(0, this._data.SnId);
                this.toggleBtn.interactable = false;
            }
        }, this);
    }

    _setAddEnable(flag: boolean) {
        this.toggleBtn.interactable = flag;
        this.toggleBtn.isChecked = !flag;
    }

    public set data(value: any) {
        this._data = value;
        this.labelName.string = `${this._data.Name}`;
        this.updateHead(this._data.Head);
        this._setAddEnable(this._data.SnId != UserData.getInstance().getSnId());
    }

    async updateHead(head: number) {
        this.headSp.spriteFrame = await Utils.getHeadSpriteFrame(head);
    }

}

