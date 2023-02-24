import { _decorator, Component, Node, Label, Sprite, SpriteFrame } from 'cc';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { ItemIconType } from '../TienlenDefine';
const { ccclass, property } = _decorator;



@ccclass('ItemAwardIcon')
export class ItemAwardIcon extends Component {
    @property([SpriteFrame])
    public sfList: SpriteFrame[] = [];
    @property(Sprite)
    public sp: Sprite;
    @property(Label)
    public label: Label;

    public init(type: ItemIconType, num: number) {
        this.sp.spriteFrame = this.sfList[type];
        this.label.string = Utils.cvtToKMB(num, 0);
    }
}

