import { _decorator, Component, Node, Sprite, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ItemRankIcon')
export class ItemRankIcon extends Component {
    @property(Sprite)
    public spIcon: Sprite;
    @property(Label)
    public labelCoin: Label;
}

