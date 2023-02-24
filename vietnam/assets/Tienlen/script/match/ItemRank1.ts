import { _decorator, Component, Node, Sprite, Label, SpriteFrame } from 'cc';
import tournament from '../protocol/tournament.js';
const { ccclass, property } = _decorator;

@ccclass('ItemRank1')
export class ItemRank1 extends Component {
    @property({ type: [SpriteFrame] })
    public sfList: SpriteFrame[] = [];
    @property(Sprite)
    public sp0: Sprite;
    @property(Label)
    public label0: Label;
    @property(Label)
    public label1: Label;
    @property(Label)
    public label2: Label;

    public init(data: tournament.tournament.ITMRank) {
        if (data.RankId <= 3) {
            this.sp0.node.parent.active = true;
            this.sp0.spriteFrame = this.sfList[data.RankId - 1];
            this.label0.node.active = false;
        } else {
            this.sp0.node.parent.active = false;
            this.label0.node.active = true;
            this.label0.string = data.RankId.toString();
        }
        this.label1.string = data.RankName;
        this.label2.string = data.WinnerNum.toString();
    }
}

