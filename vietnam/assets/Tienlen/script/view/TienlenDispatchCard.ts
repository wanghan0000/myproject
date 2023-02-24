import { _decorator, Component, Node, UITransform, Vec3, v3 } from 'cc';
import { BaseComponent } from '../common/component/BaseComponent';
import { Card } from '../common/component/Card';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenOpCardList } from './TienlenOpCardList';
import { TienlenPlayer } from './TienlenPlayer';
const { ccclass, property } = _decorator;

@ccclass('TienlenDispatchCard')
export class TienlenDispatchCard extends BaseComponent {
    @property
    public cardScale: number = 0.5;
    @property
    public flyDuration: number = 1;
    private _cacheList: Node[] = [];
    private _tmpVec3: Vec3 = new Vec3();


    onLoad() {
        let list = this.getComponentsInChildren(Card);
        list.forEach((v) => v.cardId = -1);
    }

    public async show(...args: any[]) {
        super.show(args);
        await this.play(args[0], args[1]);
    }

    public hide() {
        super.hide();
        for (let index = 0; index < this._cacheList.length; index++) {
            const element = this._cacheList[index];
            TienlenHelper.putCard(element)
        }
        this._cacheList.length = 0;
    }

    public async play(list: TienlenPlayer[], cards: number[]) {
        for (let i = 0; i < cards.length; ++i) {
            for (let j = 0; j < list.length; ++j) {
                this._dispatch(list[j], i, cards[i]);
            }
            let flag = await TienlenHelper.nodeWait(0.1, this.node);
            if (!flag) return;
            if (i % 2 == 0 || i == cards.length - 1) {
                TienlenHelper.playSound(TienlenDefine.SoundDispatch2);
            }
        }
        await TienlenHelper.nodeWait(this.flyDuration, this.node);
    }
    async _dispatch(player: TienlenPlayer, index: number, id: number) {
        if (!player) return;
        let list = player.isSelf && !player.isWaiting ? player.cardList : player.cardNode;
        if (list instanceof Node) {
            let card = await this._flyToOtherCard(list, this.flyDuration, -1);
            this._cacheList.push(card);
        } else {
            let card = await this._flyToSelfCard(player.opCardList, index, this.flyDuration, id);
            let lpos = TienlenHelper.convertSrcToDst(card, player.opCardList.node);
            player.showOpCardIndex(index, id, lpos);
            TienlenHelper.putCard(card);
        }
    }

    async _flyToOtherCard(node: Node, duration: number, id: number) {
        let srcNode = node;
        let src = srcNode.getComponent(UITransform);
        src.convertToWorldSpaceAR(Vec3.ZERO, this._tmpVec3);
        let dst = this.getComponent(UITransform);
        let dstPos = dst.convertToNodeSpaceAR(this._tmpVec3);
        let card = await TienlenHelper.getCard(this.node);
        card.cardId = id;
        let scale = node.worldScale.x;
        card.node.setScale(this.cardScale, this.cardScale);
        let angles = this.node.eulerAngles;
        await TienlenHelper.tweenTo(card.node, duration, { position: dstPos, eulerAngles: v3(angles.x, angles.y, -angles.z), scale: v3(scale, scale) })
        return card.node;
    }

    async _flyToSelfCard(opCardList: TienlenOpCardList, index: number, duration: number, id: number) {
        let srcNode = opCardList;
        let src = srcNode.getComponent(UITransform);
        let offset = opCardList.gap;
        let leftX = TienlenHelper.getCardListLeftX(13, offset);
        src.convertToWorldSpaceAR(v3(leftX + index * offset, 0), this._tmpVec3);
        let dst = this.getComponent(UITransform);
        let dstPos = dst.convertToNodeSpaceAR(this._tmpVec3);
        let card = await TienlenHelper.getCard(this.node);
        card.cardId = id;
        let scale = opCardList.node.worldScale.x;
        card.node.setScale(this.cardScale, this.cardScale);
        let angles = this.node.eulerAngles;
        await TienlenHelper.tweenTo(card.node, duration, { position: dstPos, eulerAngles: v3(angles.x, angles.y, -angles.z), scale: v3(scale, scale) })
        return card.node;
    }

}

