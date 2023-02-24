import { _decorator, Component, Node, UITransform, v3, Vec3 } from 'cc';
import { BaseComponent } from '../common/component/BaseComponent';
import { Card } from '../common/component/Card';
import tala from '../protocol/tala.js';
import { PlayerOp } from '../TalaDefine';
import TalaHelper from '../TalaHelper';
import { TalaPlayer } from './TalaPlayer';
import { TalaShowCardList } from './TalaShowCardList';
const { ccclass, property } = _decorator;

@ccclass('PhomCardZone')
export class PhomCardZone extends BaseComponent {
    @property(Node)
    public dispatchNode: Node;
    private _data: tala.tala.IPhoms[];
    public show(...args: any) {
        super.show();
        this.data = args[0];
        let showCardList = this.cardList;
        for (let index = 0; index < showCardList.length; index++) {
            const element = showCardList[index];
            element.show(this.data[index]?.Phom || []);
        }
    }

    public set data(value: tala.tala.IPhoms[]) {
        this._data = value || [];
    }

    public get data(): tala.tala.IPhoms[] {
        return this._data;
    }

    public get cardList(): TalaShowCardList[] {
        return this.getComponentsInChildren(TalaShowCardList);
    }

    public getCardList(index: number) {
        let showCardList = this.cardList;
        return showCardList[index];
    }

    public async flyCards(player: TalaPlayer, cardList: number[], index: number) {
        if (player.isSelf) {
            this._flySelfCards(player, cardList, index);
            let flag = await TalaHelper.nodeWait(0.1, this.node);
            if (!flag) return;
            player.removeOpCard(cardList);
        } else {
            this._flyOtherCard(player, cardList, index);
        }
    }

    async _flySelfCards(player: TalaPlayer, list: number[], layer: number) {
        let cardlist = player.getCardList(list);
        for (let index = 0; index < cardlist.length; index++) {
            let cardId = list[index];
            let cardNode = cardlist[index].node;
            let pos = TalaHelper.convertSrcToDst(cardNode, this.dispatchNode, Vec3.ZERO, true);
            let card = await TalaHelper.getCard(this.dispatchNode);
            card.cardId = cardId;
            card.node.setScale(cardNode.worldScale);
            card.node.position = pos;
            let cardSize = card.getComponent(UITransform).width;
            let showlist = this.getCardList(layer)
            let cardOffset = TalaHelper.getCardOffset(0, showlist.gap, showlist.count + index, cardSize / 2, 0);
            pos = TalaHelper.convertSrcToDst(showlist.node, this.dispatchNode, v3(cardOffset, 0), true);
            this.tweenMoveCard(card.node, cardId, showlist, pos, player.data.ChiCards);
        }
    }

    async tweenMoveCard(cardNode: Node, cardId: number, showList: TalaShowCardList, dstPos: Vec3, eatCards: number[]) {
        await TalaHelper.tweenTo(cardNode, 0.2, { position: dstPos, scale: showList.node.worldScale });
        let card = await showList.addCard(cardId);
        if (eatCards.indexOf(card.cardId) != -1) card.mark = true;
        TalaHelper.putCard(cardNode);
    }

    async _flyOtherCard(player: TalaPlayer, list: number[], layer: number) {
        for (let index = 0; index < list.length; index++) {
            const cardId = list[index];
            let node = player.cardNode;
            let pos = TalaHelper.convertSrcToDst(node, this.dispatchNode, Vec3.ZERO, true);
            let card = await TalaHelper.getCard(this.dispatchNode);
            card.cardId = cardId;
            card.node.setScale(node.scale);
            card.node.position = pos;
            let cardSize = card.getComponent(UITransform).width;
            let showlist = this.getCardList(layer)
            let cardOffset = TalaHelper.getCardOffset(0, showlist.gap, showlist.count + index, cardSize / 2, 0);
            pos = TalaHelper.convertSrcToDst(showlist.node, this.dispatchNode, v3(cardOffset, 0), true);
            this.tweenMoveCard(card.node, cardId, showlist, pos, player.data.ChiCards);
        }
    }

    showTips(index: number) {
        let showlist = this.getCardList(index);
        showlist?.showTip(showlist.count - 1);
    }

    removeTips() {
        let showCardList = this.cardList;
        for (let index = 0; index < showCardList.length; index++) {
            const element = showCardList[index];
            element.removeTip();
        }
    }

}

