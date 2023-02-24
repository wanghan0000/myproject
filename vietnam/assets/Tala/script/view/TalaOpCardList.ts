import { _decorator, Component, Node, Vec2, Vec3, EventTouch, UITransform, Layout, BlockInputEvents, Animation, Prefab, instantiate } from 'cc';
import { BaseComponent } from '../common/component/BaseComponent';
import { Card } from '../common/component/Card';
import { TalaCardPoint } from '../common/define';
import CardHelper from '../common/helper/CardHelper';
import ResourceHelper from '../common/helper/ResourceHelper';
import TalaDefine from '../TalaDefine';
import TalaHelper from '../TalaHelper';
const { ccclass, property } = _decorator;

@ccclass('TalaOpCardList')
export class TalaOpCardList extends BaseComponent {
    @property
    public gap: number = 0;
    private _cardList: Card[];
    private _showCardList: Card[] = [];
    private _dataList: number[];
    private _eatList: number[];
    private _downNode: Node;
    private _selectCardList: Card[] = [];
    private _cacheVec2: Vec2 = new Vec2();
    private _cacheVec3: Vec3 = new Vec3();
    private _tmpVec3: Vec3 = new Vec3();
    onLoad() {
        this._cardList = this.getComponentsInChildren(Card);
        this.node.on(Node.EventType.TOUCH_START, (evt: EventTouch) => {
            let target = <Node><unknown>(evt.target);
            this._downNode = target;
            this._addSelectCard(target);
        }, this);
        this.node.on(Node.EventType.TOUCH_END, (evt: EventTouch) => {
            let target = <Node><unknown>(evt.target);
            if (!this._downNode) return;
            this._addSelectCard(target);
            this._processSelectCard();
        }, this);
        this.node.on(Node.EventType.TOUCH_CANCEL, (evt: EventTouch) => {
            if (!this._downNode) return;
            this._processSelectCard();
        }, this);
        //mouse_move:鼠标悬浮滑动在节点上都会触发,只在pc端有效，如果父子节点都有监听,currentTarget和target不是一个对象
        //touch_move:需要点击按下不松滑动才会触发， pc和移动端都有效,和mouse_move不一样的是，点击的target和滑动中的target始终是一个
        this.node.on(Node.EventType.TOUCH_MOVE, (evt: EventTouch) => {
            let uiPos = evt.getUILocation(this._cacheVec2);
            let card = this.getCardByUIPos(uiPos.x, uiPos.y);
            if (card) {
                this._downNode && this._addSelectCard(card.node);
                this._checkSelectCard();
            }
        }, this);
    }

    public get cardCount(): number {
        let count = 0;
        for (let index = 0; index < this._cardList.length; index++) {
            let card = this._cardList[index];
            if (card.node.active) ++count;
        }
        return count;
    }

    getCardByUIPos(x: number, y: number): Card {
        for (let i = this._cardList.length - 1; i >= 0; --i) {
            //getBoundingBoxToWorld有bug，获取不到真正世界坐标系尺寸
            // let rect = this._cardList[i].node.getComponent(UITransform).getBoundingBoxToWorld();
            // if (rect.contains(this._tmpVec2.set(x, y))) {
            //     return this._cardList[i];
            // }
            let trans = this._cardList[i].node.getComponent(UITransform)
            let localPT = trans.convertToNodeSpaceAR(this._cacheVec3.set(x, y), this._tmpVec3);
            if (Math.abs(localPT.x) <= trans.contentSize.width / 2 && Math.abs(localPT.y) <= trans.contentSize.height / 2) return this._cardList[i];
        }
        return null;
    }

    _addSelectCard(node: Node) {
        let card = node.getComponent(Card);
        let idx = this._selectCardList.indexOf(card);
        if (idx == -1 && card) {
            this._selectCardList.push(card);
            card.isSelected = true;
            TalaHelper.playSound(TalaDefine.SoundSelCard);
        }
    }
    //滑动太快导致有些牌没有触发move消息,这里补漏
    _checkSelectCard() {
        if (this._selectCardList.length <= 2) return;
        let startIdx = this._selectCardList[0].node.getSiblingIndex();
        let endIdx = this._selectCardList[this._selectCardList.length - 1].node.getSiblingIndex();
        let start = startIdx < endIdx ? startIdx : endIdx;
        let end = startIdx >= endIdx ? startIdx : endIdx;
        for (let idx = start; idx <= end; ++idx) {
            this._addSelectCard(this._cardList[idx].node);
        }
    }

    _processSelectCard() {
        for (let index = 0; index < this._selectCardList.length; index++) {
            const element = this._selectCardList[index];
            element.isPopup = !element.isPopup;
            element.isSelected = false;
        }
        this._selectCardList.length = 0;
        this._downNode = null;
    }

    public show(...args: any[]) {
        super.show(...args);
        let data = this._dataList = args[0] as any[];
        this._eatList = args[1];
        CardHelper.sortBigger(this._dataList);
        for (let index = 0; index < this._cardList.length; index++) {
            let card = this._cardList[index];
            if (index < data.length) {
                const element = data[index];
                card.show(element);
            } else {
                card.hide();
            }
        }
        this.mark(this._eatList);
    }

    public mark(eatCards: number[]) {
        let list = this.getCardList(eatCards);
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            element.mark = true;
        }
    }

    public hide() {
        this.resetCards();
        this.hideCardList();
        super.hide();
    }

    public async sort() {
        this.enableClick(false);
        let data = this._dataList;
        let eat = this._eatList;
        this._cardList.forEach((v) => {
            v.flip();
        })
        let flag = await TalaHelper.nodeWait(0.3, this.node);
        if (!flag) return;
        CardHelper.sortCards(data);
        for (let index = 0; index < this._cardList.length; index++) {
            if (index < data.length) {
                const element = data[index];
                this._cardList[index].show(element);
            } else {
                this._cardList[index].hide();
            }
        }
        this.mark(this._eatList);
        this.resetPopup();
        this.enableClick(true);
    }

    public enableClick(flag: boolean) {
        this.autoLayout = flag;
        this.interactable = flag;
    }

    public fill(list: number[]) {
        super.show();
        this._dataList = list;
    }

    public async addCard(id: number, mark: boolean) {
        let childCount = this.node.children.length;
        for (let index = 0; index < childCount; index++) {
            let cardNode = this.node.children[index];
            if (!cardNode.active) {
                let card = cardNode.getComponent(Card);
                card.cardId = id;
                card.reset();
                card.mark = mark;
                card.node.active = true;
            }
        }
    }

    public showIndex(index: number, id: number) {
        if (index == 9) {
            TalaHelper.log("showIndex ", index, id, this._cardList.length);
        }
        // if (index >= this._cardList.length) {
        //     this.addCard(id, false);
        // }
        this._cardList[index]?.show(id);
    }

    async showTip(idx: number) {
        let childCount = this.node.children.length;
        for (let index = 0; index < childCount; index++) {
            let card = this.node.children[index];
            if (index == idx && card.active) {
                let anim = card.getComponentInChildren(Animation);
                if (!anim) {
                    let pfb = await ResourceHelper.loadResInAB(TalaDefine.ABName, "prefab/PassArrow", Prefab);
                    anim = instantiate(pfb).getComponentInChildren(Animation);
                    card.addChild(anim.node.parent);
                }
                anim.node.parent.setPosition(-23, 150);
                anim.play();
                card.getComponent(Card).mark = true;
                card.getComponent(Card).isPopup = true;
            }
        }
    }

    removeTip() {
        let childCount = this.node.children.length;
        for (let index = 0; index < childCount; index++) {
            let card = this.node.children[index];
            let anim = card.getComponentInChildren(Animation);
            anim && anim.node.parent.destroy();
            card.getComponent(Card).mark = false;
        }
    }

    public setPosX(index: number, x: number, y: number = 0) {
        this._cardList[index]?.node.setPosition(x, y);
    }

    private _popupCardDataList: number[] = [];
    public get popupCardDataList(): number[] {
        this._popupCardDataList.length = 0;
        let carlist = this.popupCardList;
        for (let index = 0; index < carlist.length; index++) {
            const element = carlist[index];
            this._popupCardDataList.push(element.cardId);
        }
        return this._popupCardDataList;
    }

    private _popupCardList: Card[] = [];
    public get popupCardList(): Card[] {
        let list = this._popupCardList;
        list.length = 0;
        for (let index = 0; index < this._cardList.length; index++) {
            const element = this._cardList[index];
            if (element.isPopup && element.cardId >= 0 && element.node.activeInHierarchy) list.push(element);
        }
        return list;
    }

    public markCardListPopup(cards: number[]) {
        for (let index = 0; index < this._cardList.length; index++) {
            let card = this._cardList[index];
            if (card.node.active && cards.indexOf(card.cardId) != -1) {
                card.isPopup = true;
            }
        }
    }


    public showCardTip(value: number[]) {
        if (!value || value.length == 0) return;
        for (let index = 0; index < this._cardList.length; index++) {
            const element = this._cardList[index];
            if (element.cardId >= 0 && element.node.activeInHierarchy) {
                if (value.indexOf(element.cardId) != -1) {
                    element.isPopup = true;
                }
            }
        }
    }


    private _tmpCardList: Card[] = [];
    public getCardList(list: number[]): Card[] {
        this._tmpCardList.length = 0;
        for (let index = 0; index < this._cardList.length; index++) {
            const element = this._cardList[index];
            let idx = list.indexOf(element.cardId);
            idx != -1 && this._tmpCardList.push(element);
        }
        if (this._tmpCardList.length != list.length) TalaHelper.log('getCardList len error');
        return this._tmpCardList;
    }

    public getCardIndex(cardId: number) {
        for (let index = 0; index < this._cardList.length; index++) {
            const element = this._cardList[index];
            if (element.cardId == cardId) return index;
        }
    }

    public async removeCards(list: any[]) {
        for (let index = 0; index < list.length; index++) {
            const id = list[index];
            let idx = this._cardList.findIndex((v) => v.cardId == id);
            if (idx != -1) {
                let card = this._cardList[idx];
                this._cardList.splice(idx, 1);
                card.node.removeFromParent();
                card.reset();
                card.hide();
                this.node.addChild(card.node);
                this._cardList.push(card);
                // this._showCardList.push(card);
            } else {
                TalaHelper.log(`removeCards error id:${id} idx:${idx}`)
            }
        }
        this.getComponent(Layout).updateLayout(true);
    }

    public resetPopup() {
        for (let index = 0; index < this._cardList.length; index++) {
            const element = this._cardList[index];
            element.isPopup = false;
        }
    }

    public set interactable(value: boolean) {
        for (let index = 0; index < this._cardList.length; index++) {
            const element = this._cardList[index];
            let block = element.getComponent(BlockInputEvents);
            block = block || element.addComponent(BlockInputEvents);
            block.enabled = !value;
        }

        let block = this.getComponent(BlockInputEvents);
        block = block || this.addComponent(BlockInputEvents);
        block.enabled = !value;
    }

    public set autoLayout(value: boolean) {
        this.getComponent(Layout).type = value ? Layout.Type.HORIZONTAL : Layout.Type.NONE;
    }

    public get autoLayout(): boolean {
        return this.getComponent(Layout).type == Layout.Type.HORIZONTAL;
    }



    public resetCards() {
        for (let index = 0; index < this._cardList.length; index++) {
            const element = this._cardList[index];
            element.reset();
        }
        // for (let index = 0; index < this._showCardList.length; index++) {
        //     const element = this._showCardList[index];
        //     element.reset();
        //     this._cardList.push(element);
        //     this.node.addChild(element.node);
        // }
        // this._showCardList.length = 0;
        this.removeTip();
    }

    public get cardList(): Card[] {
        return this._cardList;
    }

    public hideCardList() {
        for (let index = 0; index < this._cardList.length; index++) {
            this._cardList[index].hide();
        }
    }

    public toString(): string {
        let list = this._cardList;
        let map = { 0: '黑桃', 1: '梅花', 2: '方块', 3: '红桃' }
        let str = `当前手牌数量: ${list.length}\n`;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            let point = CardHelper.getTalaCardPoint(element.cardId);
            let color = CardHelper.getTalaCardColor(element.cardId);
            str += `${map[color]}${TalaCardPoint[point]}`;
        }
        // str += `当前出牌数量: ${this._showCardList.length}`
        return str;
    }
}

