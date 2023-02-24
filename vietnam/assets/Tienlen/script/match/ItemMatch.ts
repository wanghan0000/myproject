import { _decorator, Component, Node, Label, Sprite, SpriteFrame, Tween, tween, v3, Vec3, Event, sp } from 'cc';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { ButtonPlus } from '../common/component/ButtonPlus';
import ResourceHelper from '../common/helper/ResourceHelper';
import tournament from '../protocol/tournament.js';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
const { ccclass, property, type } = _decorator;

export class MatchEvent extends Event {
    public data: any;
    constructor(type: string, data?: any, bubble?: boolean) {
        super(type, bubble);
        this.data = data;
    }
}

@ccclass('ItemMatfch')
export class ItemMatch extends Component {
    @property(Sprite)
    public sp0: Sprite;
    @property(Label)
    public label0: Label;
    @property(Label)
    public label1: Label;
    @property(sp.Skeleton)
    public spineBg: sp.Skeleton;
    private _data: tournament.tournament.ITMInfo;

    onLoad() {
        this.getComponent(ButtonPlus).setClickHandler(() => {
            TienlenRuntime.matchName = this._data.MatchName;
            TienlenRuntime.matchType = this._data.MatchType;
            TienlenRuntime.matchTitle = this._data.TitleURL;
            this.node.dispatchEvent(new MatchEvent("enterEnroll", this._data));
        }, this)
    }

    onEnable() {
        this.playEnterAnim();
    }

    async playEnterAnim() {
        this.label0.node.parent.active = false;
        this.spineBg.setAnimation(0, "ch", false);
        let flag = await TienlenHelper.nodeWait(0.5, this.node);
        if (!flag) return;
        this.spineBg.setAnimation(0, "idle", true);
        this.label0.node.parent.active = true;
    }

    public async init(data: tournament.tournament.ITMInfo, index: number) {
        this._data = data;
        this.label1.string = data.MatchNumebr.toString();
        if (data.MatchType == 1) {
            this.label0.string = Utils.getLanguageString(data.AwardShow);
        } else {
            this.label0.string = TienlenHelper.formatMatchTimeStr(data);
        }
        let sf = await TienlenHelper.getMatchTitleSF(data.TitleURL, this._data.MatchType);
        if (!sf || !this.sp0) return;
        this.sp0.spriteFrame = sf;
    }


}

