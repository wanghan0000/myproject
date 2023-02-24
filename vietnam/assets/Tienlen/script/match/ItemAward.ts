import { _decorator, Component, Node, Sprite, Label, SpriteFrame, utils } from 'cc';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import tournament from '../protocol/tournament.js';
import { ItemIconType } from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { ItemAwardIcon } from './ItemAwardIcon';
const { ccclass, property } = _decorator;

@ccclass('ItemAward')
export class ItemAward extends Component {
    @property({ type: [SpriteFrame] })
    public sfList: SpriteFrame[] = [];
    @property(Sprite)
    public spRank: Sprite;
    @property(Label)
    public labelRank: Label;
    @property({ type: [Node] })
    public awardList: Node[] = [];

    public init(data: tournament.tournament.IMatchInfoAward) {
        if (data.UpLimit <= 3) {
            this.spRank.node.parent.active = true;
            this.spRank.spriteFrame = this.sfList[data.DownLimit - 1];
            this.labelRank.node.active = false;
        } else {
            this.spRank.node.parent.active = false;
            this.labelRank.node.active = true;
            this.labelRank.string = `${data.UpLimit}-${data.DownLimit}`;
        }
        let count = 0;
        this.awardList[0].active = data.Coin > 0;
        if (data.Coin > 0) {
            ++count;
            this.awardList[0].getComponent(ItemAwardIcon).init(ItemIconType.GOLD, data.Coin);
        }
        this.awardList[1].active = data.Diamond > 0;
        if (data.Diamond > 0) {
            ++count;
            this.awardList[1].getComponent(ItemAwardIcon).init(ItemIconType.DIAMOND, data.Diamond);
        }
        this.awardList[2].active = false;
        for (let index = count; index < count + data.ItemInfo.length; index++) {
            if (index >= this.awardList.length) return;
            const element = data.ItemInfo[index - count];
            if (element.ItemNum == 0) {
                this.awardList[index].active = false;
                continue;
            } else {
                this.awardList[index].active = true;
            }
            let type = TienlenHelper.getItemIconType(element.ItemId)
            this.awardList[index].getComponent(ItemAwardIcon).init(type, element.ItemNum);
        }
    }

}

