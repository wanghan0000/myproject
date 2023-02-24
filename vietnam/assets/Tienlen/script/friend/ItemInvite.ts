import { _decorator, Component, Node, Sprite, Label, game } from 'cc';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import friend from '../../../ScriptCore/protocol/friend.js';
import { CancelationToken } from '../common/async/CancelationToken';
import { ButtonPlus } from '../common/component/ButtonPlus';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
const { ccclass, property } = _decorator;

@ccclass('ItemInvite')
export class ItemInvite extends Component {
    @property(Sprite)
    private spHead: Sprite;
    @property(Label)
    private labelName: Label;
    @property(ButtonPlus)
    private btnInvite: ButtonPlus;
    @property(Label)
    private labelInvite: Label;
    @property(Label)
    private labelCD: Label;
    private _data: friend.friend.IFriendInfo;
    private _cancelToken: CancelationToken = new CancelationToken();
    onLoad() {
        this.btnInvite.setClickHandler(() => {
            this.node.parent.emit('click', this);
            TienlenRuntime.inviteRefreshTime.set(this.data.SnId, game.totalTime);
            this.startCountDown(30);
        }, this);
    }

    public init(data: any) {
        this._data = data;
        this.labelName.string = `${this._data.Name}(${this._data.SnId})`;
        this.updateHead(this._data.Head);
        let time = TienlenRuntime.inviteRefreshTime.get(this.data.SnId) || 0;
        let curTime = game.totalTime;
        if (time == 0 || curTime - time >= 30000) {
            this.enableInvite(true);
        } else {
            let leftTime = 30000 - curTime + time;
            this.startCountDown(Math.floor(leftTime / 1000));
        }
    }

    async updateHead(head: number) {
        this.spHead.spriteFrame = await Utils.getHeadSpriteFrame(head);
    }
    public get data(): friend.friend.IFriendInfo {
        return this._data;
    }

    private async startCountDown(time: number) {
        this.enableInvite(false);
        this.labelCD.string = `(${time}s)`;
        while (time > 0) {
            let flag = await TienlenHelper.nodeWait(1, this.node, this._cancelToken);
            if (!flag) break;
            --time;
            this.labelCD.string = `(${time}s)`;
        }
        time == 0 && this.enableInvite(true);
    }

    enableInvite(flag: boolean) {
        this.btnInvite.node.active = flag;
        this.labelCD.node.active = !flag;
        this.labelInvite.node.active = !flag;
    }

    onDisable() {
        this._cancelToken && this._cancelToken.invoke();
        this._cancelToken = null;
    }

}

