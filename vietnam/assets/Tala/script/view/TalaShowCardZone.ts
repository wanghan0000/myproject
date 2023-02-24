import { _decorator, Component, Node, UITransform, Vec3, v3 } from 'cc';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { BaseComponent } from '../common/component/BaseComponent';
import { Card } from '../common/component/Card';
import { PlayerOp } from '../TalaDefine';
import TalaHelper from '../TalaHelper';
import { TalaPlayer } from './TalaPlayer';
import { TalaShowCardList } from './TalaShowCardList';
const { ccclass, property } = _decorator;

@ccclass('TalaShowCardZone')
export class TalaShowCardZone extends BaseComponent {
    @property(Node)
    public dispatchNode: Node;
    private _showCardList: TalaShowCardList[];
    onLoad() {
        this._showCardList = this.getComponentsInChildren(TalaShowCardList);
        this._showCardList[3].enableClick(true);
        this._showCardList[2].enableClick(true);
        this._showCardList[1].enableClick(true);
        this.node.on("clickCard", async (card: Card) => {
            let flag = await TalaHelper.callOpCard(PlayerOp.EAT, [card.cardId]);
            if (flag) {
                let showCard = card.node.parent.getComponent(TalaShowCardList);
                showCard.removeTip();
            }
        }, this);
    }

    removeTips() {
        this._showCardList[1].removeTip();
        this._showCardList[2].removeTip();
        this._showCardList[3].removeTip();
    }

    public show(...args: any) {
        super.show();
        for (let index = 0; index < this._showCardList.length; index++) {
            const element = this._showCardList[index];
            element.show(args[index] || []);
        }
    }

    public hide() {
        super.hide();
        this.isGray = false;
    }

    public showIndex(index: number, data: number[]) {
        this._showCardList[index].show(data || []);
    }

    public showTip(index: number) {
        let showCard = this._showCardList[index];
        showCard.showTip(showCard.count - 1);
    }

    async flyCard(player: TalaPlayer, cardId: number) {
        if (player.isSelf) {
            this.flySelfCards(player, cardId);
            let flag = await TalaHelper.nodeWait(0.1, this.node);
            if (!flag) return;
            player.removeOpCard([cardId]);
        } else {
            this.flyOtherCards(player, cardId);
        }
    }

    public async moveCard(srcIdx: number, dstidx: number, cardId: number) {
        let showlist0 = this._showCardList[srcIdx];
        let showlist1 = this._showCardList[dstidx];
        let cardNode = showlist0.getCard(cardId);
        if (!cardNode) {
            TalaHelper.log("move card is null ", srcIdx, dstidx, showlist0.dataList, cardId);
        }
        let card = await TalaHelper.getCard(this.dispatchNode);
        let cardSize = card.getComponent(UITransform).width;
        card.cardId = cardId;
        card.node.setScale(cardNode.worldScale);
        let pos = TalaHelper.convertSrcToDst(cardNode, this.dispatchNode);
        card.node.setPosition(pos);
        let cardOffset = TalaHelper.getCardOffset(showlist1.count + 1, showlist1.gap, showlist1.count, cardSize / 2, 0);
        pos = TalaHelper.convertSrcToDst(showlist1.node, this.dispatchNode, v3(cardOffset, 0));
        showlist0.removeCard(cardId);
        await TalaHelper.tweenTo(card.node, 0.2, { position: pos });
        showlist1.addCard(cardId);
        TalaHelper.putCard(card.node);
    }

    async flyCardToPlayer(index: number, cardId: number, player: TalaPlayer) {
        if (player.isSelf) {
            await this.flyToSelfCards(index, cardId, player);
        } else {
            await this.flyToOtherCards(index, cardId, player);
        }
    }

    async flySelfCards(player: TalaPlayer, cardId: number) {
        let list = [cardId];
        let cardlist = player.getCardList(list);
        for (let index = 0; index < cardlist.length; index++) {
            let cardNode = cardlist[index].node;
            let pos = TalaHelper.convertSrcToDst(cardNode, this.dispatchNode);
            let card = await TalaHelper.getCard(this.dispatchNode);
            card.cardId = cardId;
            card.node.setScale(cardNode.worldScale);
            card.node.position = pos;
            let cardSize = card.getComponent(UITransform).width;
            let showlist = this._showCardList[player.index];
            let cardOffset = TalaHelper.getCardOffset(showlist.count + 1, showlist.gap, showlist.count, cardSize / 2, 0);
            pos = TalaHelper.convertSrcToDst(showlist.node, this.dispatchNode, v3(cardOffset, 0));
            await TalaHelper.tweenTo(card.node, 0.2, { position: pos, scale: showlist.node.worldScale });
            showlist.addCard(cardId);
            TalaHelper.putCard(card.node);
        }
    }

    async flyOtherCards(player: TalaPlayer, cardId: number) {
        super.show();
        let node = player.cardNode;
        let pos = TalaHelper.convertSrcToDst(node, this.dispatchNode);
        let card = await TalaHelper.getCard(this.dispatchNode);
        card.cardId = cardId;
        card.node.setScale(node.scale);
        card.node.position = pos;
        let cardSize = card.getComponent(UITransform).width;
        let showlist = this._showCardList[player.index];
        let cardOffset = TalaHelper.getCardOffset(showlist.count + 1, showlist.gap, showlist.count, cardSize / 2, 0);
        pos = TalaHelper.convertSrcToDst(showlist.node, this.dispatchNode, v3(cardOffset, 0));
        await TalaHelper.tweenTo(card.node, 0.2, { position: pos, scale: showlist.node.worldScale });
        showlist.addCard(cardId);
        TalaHelper.putCard(card.node);
    }

    async flyToSelfCards(index: number, cardId: number, player: TalaPlayer) {
        let showlist = this._showCardList[index];
        let cardNode = showlist.getCard(cardId);
        let card = await TalaHelper.getCard(this.dispatchNode);
        card.cardId = cardId;
        card.node.setScale(cardNode.worldScale);
        let pos = TalaHelper.convertSrcToDst(cardNode, this.dispatchNode);
        card.node.setPosition(pos);
        let offset = TalaHelper.getCardOffset(10, player.opCardList.gap, 9);
        let dstPos = TalaHelper.convertSrcToDst(player.opCardList.node, this.dispatchNode, v3(offset, 0));
        showlist.removeCard(cardId);
        await TalaHelper.tweenTo(card.node, 0.2, { position: dstPos, scale: Vec3.ONE });
        player.opCardList.addCard(cardId, true);
        TalaHelper.putCard(card.node);
    }

    async flyToOtherCards(index: number, cardId: number, player: TalaPlayer) {
        let showlist = this._showCardList[index];
        let cardNode = showlist.getCard(cardId);
        if (!cardNode) {
            TalaHelper.log("cardnode is null: ", index, showlist.dataList, cardId);
        }
        let card = await TalaHelper.getCard(this.dispatchNode);
        card.cardId = cardId;
        card.node.setScale(cardNode.worldScale);
        let pos = TalaHelper.convertSrcToDst(cardNode, this.dispatchNode);
        card.node.setPosition(pos);
        let dstPos = TalaHelper.convertSrcToDst(player.cardNode, this.dispatchNode);
        showlist.removeCard(cardId);
        await TalaHelper.tweenTo(card.node, 0.2, { position: dstPos, scale: player.cardNode.worldScale });
        player.addSpecialCard(card);
    }

    set isGray(flag: boolean) {
        for (let index = 0; index < this._showCardList.length; index++) {
            const element = this._showCardList[index];
            element.isGray = flag;
        }
    }
}

