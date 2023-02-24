import { _decorator, Component, Node, RichText, Sprite, Label, SpriteFrame, Color, Button, utils } from 'cc';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import activity from '../../../ScriptCore/protocol/activity.js';
import server from '../../../ScriptCore/protocol/server.js';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { ButtonPlus } from '../common/component/ButtonPlus';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('ItemSign')
export class ItemSign extends Component {
    public static formatStr = '<color=#fefdec><size=18>第</color><color=#fefdec><size=22>%d</color><color=#fefdec><size=18>天</color>';
    public static formatStr2 = '<color=#fefdec><size=24>第</color><color=#fefdec><size=28>%d</color><color=#fefdec><size=24>天</color>';
    public static Color0 = new Color('#ffffff');
    public static Color1 = new Color('#c8c8c8');
    @property(Sprite)
    private spBg: Sprite;
    @property(RichText)
    private richText: RichText;
    @property(Sprite)
    private spAward: Sprite;
    @property(Sprite)
    private spGot: Sprite;
    @property(Sprite)
    private spSelect: Sprite;
    @property(Label)
    private labelNum: Label;
    @property(SpriteFrame)
    private sfBg0: SpriteFrame;
    @property(SpriteFrame)
    private sfBg1: SpriteFrame;
    private _data: server.server.IDB_ActSign;

    onLoad() {
      
    }

    public get data(): server.server.IDB_ActSign {
        return this._data;
    }

    public init(data: server.server.IDB_ActSign) {
        this._data = data;
        if (data.Id == 7 || data.Id == 14) {
            let title = ItemSign.formatStr2.replace("%d", data.Id.toString());
            this.richText.string = title;
        } else {
            let title = ItemSign.formatStr.replace("%d", data.Id.toString());
            this.richText.string = title;
        }
        if (data.Type == 3) {
            this.spAward.spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_" + data.Item_Id);
        } else {
            let id = data.Type - 1;
            this.spAward.spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_" + id);
        }
        this.labelNum.string = data.Type == 1 ? Utils.cvtToKMB(data.Grade, 0) : data.Grade.toString();
        this.setState(1);
    }
    /**
     * state: 0 可领取 1 未领取 2已领取
     */
    public setState(state: number) {
        if (this._data.Id != 7 && this._data.Id != 14)
            this.spBg.spriteFrame = state == 0 ? this.sfBg1 : this.sfBg0;
        this.spGot.node.active = state == 2;
        if (state == 2) {
            this.spBg.color = ItemSign.Color1;
        } else {
            this.spBg.color = ItemSign.Color0;
        }
        this.spSelect && (this.spSelect.node.active = state == 0);
    }





}

