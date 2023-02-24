import { _decorator, Component, Node, Label, Sprite, RichText } from 'cc';
import { ButtonPlus } from '../common/component/ButtonPlus';
import friend from '../../../ScriptCore/protocol/friend.js';
import TienlenHelper from '../TienlenHelper';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
const { ccclass, property } = _decorator;

@ccclass('ItemFriendRequest')
export class ItemFriendRequest extends Component {
    public static Evt_Complete = "1";
    @property(Sprite)
    public headSp: Sprite;
    @property(RichText)
    public richlContent: RichText;
    @property(ButtonPlus)
    public btnYes: ButtonPlus;
    @property(ButtonPlus)
    public btnNo: ButtonPlus;
    private _data: friend.friend.IFriendInfo;

    onLoad() {
        this.btnYes.setClickHandler(async () => {
            this.node.parent.emit(ItemFriendRequest.Evt_Complete, this._data);
            this.node.active = false;
            let ret = await TienlenHelper.callFriendOp(1, this._data.SnId);
            if (ret.OpRetCode == 0) {
                TienlenHelper.showFloatTips(I18nMgr.getInstance().getFormatStringByKey("tienlen.gongxichegnweihaoyouTxt",`${ret.Friend.Name}(${ret.Friend.SnId}`));
            }
        }, this);
        this.btnNo.setClickHandler(async () => {
            this.node.parent.emit(ItemFriendRequest.Evt_Complete, this._data);
            this.node.active = false;
            let ret = await TienlenHelper.callFriendOp(2, this._data.SnId);
            if (ret.OpRetCode == 0) {
                TienlenHelper.showFloatTips(I18nMgr.getInstance().getFormatStringByKey("tienlen.jujuehaoyouTxt",`${this._data.Name}(${this._data.SnId})`))
            }
        }, this);
    }

    public set data(value: any) {
        this._data = value;
        //this.richlContent.string = `<color=#0da91d>${this._data.Name}(${this._data.SnId})</color><color=#c95c2c>请求加您好友，是否同意?</color>`;
        this.richlContent.string = `<color=#0da91d>${this._data.Name}(${this._data.SnId})</color><color=#c95c2c>${I18nMgr.getInstance().getStringByKey("tienlen.qingqiutianjiahaoyouTxt")}</color>`;
        this.updateHead(this._data.Head);

    }

    async updateHead(head: number) {
        this.headSp.spriteFrame = await Utils.getHeadSpriteFrame(head);
    }


}

