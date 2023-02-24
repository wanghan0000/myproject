import { _decorator, Component, Node, Prefab, Vec3, v3, Pool, tween, UITransform } from 'cc';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { BaseComponent } from '../common/component/BaseComponent';
import TienlenHelper from '../TienlenHelper';
import { TienlenPlayer } from './TienlenPlayer';
import { TienlenShowCardList } from './TienlenShowCardList';
const { ccclass, property } = _decorator;

@ccclass('TienlenShowCardZone')
export class TienlenShowCardZone extends BaseComponent {
    @property(Prefab)
    private pfbShowCardList: Prefab;
    @property
    private cardScale: number = 1;
    private _cardlistQueue: TienlenShowCardList[] = [];
    private _tmpV3: Vec3 = new Vec3();
    private _tmp2V3: Vec3 = new Vec3();

    public show(...args: any[]) {
        super.show(args);
        if (!args || args.length == 0) return;
        let node = PoolManager.instance.getNode(this.pfbShowCardList, this.node);
        node.position = Vec3.ZERO;
        let showlist = node.getComponent(TienlenShowCardList);
        showlist.node.setScale(this.cardScale, this.cardScale);
        showlist.show(args[0]);
        this._cardlistQueue.push(showlist);
        if (this._cardlistQueue.length == 2) {
            let last = this._cardlistQueue[0];
            last.node.setPosition(0, 40);
            last.setGray(true);
        }
        while (this._cardlistQueue.length > 2) {
            let showlist = this._cardlistQueue.shift();
            showlist.hide();
            PoolManager.instance.putNode(showlist.node);
        }
    }
    //Cannot change hierarchy while activating or deactivating the parent
    public hide() {
        this.clearCards();
        super.hide();
    }

    private async _showOtherCards(list: TienlenShowCardList) {
        this._cardlistQueue.push(list);
        while (this._cardlistQueue.length > 2) {
            let showlist = this._cardlistQueue.shift();
            showlist.hide();
            PoolManager.instance.putNode(showlist.node);
        }
    }

    private async _tweenUp() {
        if (this._cardlistQueue.length > 0) {
            let showlist = this._cardlistQueue[this._cardlistQueue.length - 1];
            showlist.setGray(true);
            await TienlenHelper.tweenBy(showlist.node, 0.3, { position: v3(0, 50) });
        }
    }

    private async _showSelfCards(list: number[]) {
        let node = PoolManager.instance.getNode(this.pfbShowCardList, this.node);
        node.position = Vec3.ZERO;
        let showlist = node.getComponent(TienlenShowCardList);
        showlist.node.setScale(this.cardScale, this.cardScale);
        showlist.show(list);
        this._cardlistQueue.push(showlist);
        while (this._cardlistQueue.length > 2) {
            let showlist = this._cardlistQueue.shift();
            showlist.hide();
            PoolManager.instance.putNode(showlist.node);
        }
    }

    public clearCards() {
        while (this._cardlistQueue.length > 0) {
            let showlist = this._cardlistQueue.shift();
            showlist.hide();
            PoolManager.instance.putNode(showlist.node);
        }
    }

    async flyOtherCards(player: TienlenPlayer, list: number[]) {
        super.show();
        let node = player.holdPoint;
        let src = node.getComponent(UITransform);
        src.convertToWorldSpaceAR(Vec3.ZERO, this._tmpV3);
        let dst = this.getComponent(UITransform);
        dst.convertToNodeSpaceAR(this._tmpV3, this._tmp2V3);
        let showlistNode = PoolManager.instance.getNode(this.pfbShowCardList, this.node);
        let showlist = showlistNode.getComponent(TienlenShowCardList);
        showlistNode.position = this._tmp2V3;
        showlist.node.setScale(this.cardScale, this.cardScale);
        showlist.show(list);
        this._tweenUp();
        await TienlenHelper.tweenTo(showlistNode, 0.2, { position: Vec3.ZERO });
        await this._showOtherCards(showlist);
    }

    async flySelfCards(player: TienlenPlayer, list: number[]) {
        super.show();
        let cardlist = player.getCardList(list);
        let offset = this.pfbShowCardList.data.getComponent(TienlenShowCardList).gap * this.cardScale;
        let leftX = TienlenHelper.getCardListLeftX(list.length, offset);
        let tmplist = []
        for (let index = 0; index < cardlist.length; index++) {
            let node = cardlist[index];
            let srcScale = node.node.parent.scale.x;
            let src = node.getComponent(UITransform);
            let wpos = src.convertToWorldSpaceAR(Vec3.ZERO);
            let card = await TienlenHelper.getCard(this.node);
            card.node.setScale(srcScale, srcScale);
            let dst = this.getComponent(UITransform);
            let lpos = dst.convertToNodeSpaceAR(wpos);
            card.node.position = lpos;
            card.cardId = list[index];
            tmplist.push(card);
            TienlenHelper.tweenTo(card.node, 0.2, { position: v3(leftX + index * offset, 0), scale: v3(this.cardScale, this.cardScale) });
        }
        this._tweenUp();
        let flag = await TienlenHelper.nodeWait(0.2, this.node);
        if (!flag) return;
        tmplist.forEach((v) => {
            TienlenHelper.putCard(v.node);
        })
        tmplist = null;
        this._showSelfCards(list);
    }

}

