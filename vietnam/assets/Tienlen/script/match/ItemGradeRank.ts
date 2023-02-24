import { _decorator, Component, Node, Label, Sprite, SpriteFrame } from 'cc';
import tournament from '../protocol/tournament.js';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('ItemGradeRank')
export class ItemGradeRank extends Component {
    @property({ type: [SpriteFrame] })
    public sfList: SpriteFrame[] = [];
    @property(Sprite)
    public sp: Sprite;
    @property(Label)
    public label0: Label;
    @property(Label)
    public label1: Label;
    @property(Label)
    public label2: Label;
    @property(Label)
    public label3: Label;

    public init(data: tournament.tournament.ISeasonRank) {
        if (data.Rank <= 3) {
            this.label0.node.active = false;
            this.sp.spriteFrame = this.sfList[data.Rank - 1];
        } else {
            this.label0.node.active = true;
            this.sp.node.active = false;
        }
        this.label0.string = data.Rank.toString();
        this.label1.string = this.processSnid(data.Snid.toString());
        let starRank = TienlenHelper.getStarRank(data.Lv);
        this.label2.string = TienlenHelper.getRankStr(data.Lv);
        this.label3.string = `X${starRank}`;
    }

    processSnid(snid: string) {
        if (snid.length > 4) {
            snid = snid.slice(0, snid.length - 4);
            return `${snid}****`
        } else {
            return `${snid[0]}***`
        }
    }

}

