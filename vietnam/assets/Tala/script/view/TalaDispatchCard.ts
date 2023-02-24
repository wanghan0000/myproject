import { _decorator, Component, Node, Vec3, UITransform, v3, Label, Sprite } from 'cc';
import { BaseComponent } from '../common/component/BaseComponent';
import { Card } from '../common/component/Card';
import TalaDefine from '../TalaDefine';
import TalaHelper from '../TalaHelper';
import { TalaOpCardList } from './TalaOpCardList';
import { TalaPlayer } from './TalaPlayer';
const { ccclass, property } = _decorator;

@ccclass('TalaDispatchCard')
export class TalaDispatchCard extends BaseComponent {
    @property
    public cardScaleX: number = 0.9;
    @property
    public cardScaleY: number = 0.4;
    @property
    public flyDuration: number = 1;
    @property(Sprite)
    public spCardStack: Sprite;
    @property(Label)
    public labelNum: Label;
    private _tmpVec3: Vec3 = new Vec3();


    onLoad() {
        let list = this.getComponentsInChildren(Card);
        list.forEach((v) => v.cardId = -1);
    }

    public async show(...args: any[]) {
        super.show(args);
        this.labelNum.string = '';
        this.showCardStack();
        await this.play(args[0], args[1]);
        this.showCount(52 - args[0].length * 9 - 1);
    }

    public hide() {
        super.hide();
    }

    public hideCardStack() {
        this.spCardStack.node.parent.active = false;
    }

    public showCardStack() {
        this.spCardStack.node.parent.active = true;
    }

    public showCount(count: number) {
        super.show();
        this.showCardStack();
        this.labelNum.string = count.toString();
    }

    public async play(list: TalaPlayer[], cards: number[]) {
        for (let i = 0; i < cards.length; ++i) {
            for (let j = 0; j < list.length; ++j) {
                this._dispatch(list[j], i, cards[i]);
            }
            let flag = await TalaHelper.nodeWait(0.1, this.node);
            if (!flag) return;
            if (i % 2 == 0 || i == cards.length - 1) {
                TalaHelper.playSound(TalaDefine.SoundDispatch2);
            }
        }
        await TalaHelper.nodeWait(this.flyDuration, this.node);
    }
    async _dispatch(player: TalaPlayer, index: number, id: number) {
        if (!player) return;
        let list = player.isSelf && !player.isWaiting ? player.cardList : player.cardNode;
        if (list instanceof Node) {
            let card = await this._flyToOtherCard(list, this.flyDuration, -1);
            TalaHelper.putCard(card);
        } else {
            let opCardList = player.opCardList;
            let card = await this._flyToSelfCard(opCardList, index, this.flyDuration, id);
            if (opCardList.autoLayout) {
                player.showOpCardIndex(index, id);
            } else {
                let lpos = TalaHelper.convertSrcToDst(card, opCardList.node);
                player.showOpCardIndex(index, id, lpos);
            }
            TalaHelper.putCard(card);
        }
    }

    async dispatchCardToPlayer(player: TalaPlayer, id: number) {
        await this._dispatch(player, player.opCardList?.cardCount, id);
    }

    async _flyToOtherCard(node: Node, duration: number, id: number) {
        let srcNode = node;
        let src = srcNode.getComponent(UITransform);
        src.convertToWorldSpaceAR(Vec3.ZERO, this._tmpVec3);
        let dst = this.getComponent(UITransform);
        let dstPos = dst.convertToNodeSpaceAR(this._tmpVec3);
        let card = await TalaHelper.getCard(this.node);
        card.cardId = id;
        let scale = node.worldScale.x;
        card.node.setScale(this.cardScaleX, this.cardScaleY);
        let angles = v3(0, 0, 45);
        card.node.eulerAngles = angles;
        await TalaHelper.tweenTo(card.node, duration, { position: dstPos, eulerAngles: v3(angles.x, angles.y, 0), scale: v3(scale, scale) })
        return card.node;
    }

    async _flyToSelfCard(opCardList: TalaOpCardList, index: number, duration: number, id: number) {
        let srcNode = opCardList;
        let src = srcNode.getComponent(UITransform);
        let offset = opCardList.gap;
        let leftX = TalaHelper.getCardListLeftX(10, offset);
        src.convertToWorldSpaceAR(v3(leftX + index * offset, 0), this._tmpVec3);
        let dst = this.getComponent(UITransform);
        let dstPos = dst.convertToNodeSpaceAR(this._tmpVec3);
        let card = await TalaHelper.getCard(this.node);
        card.cardId = id;
        let scale = opCardList.node.worldScale.x;
        card.node.setScale(this.cardScaleX, this.cardScaleY);
        let angles = v3(0, 0, 45);
        card.node.eulerAngles = angles;
        await TalaHelper.tweenTo(card.node, duration, { position: dstPos, eulerAngles: v3(angles.x, angles.y, 0), scale: v3(scale, scale) })
        return card.node;
    }
}

