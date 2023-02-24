import { _decorator, Component, Node, BlockInputEvents, input, EventMouse, EventTouch, Vec2, UITransform, Graphics, director, Camera, find, v3, Vec3, Layout } from 'cc';
import { BaseComponent } from '../common/component/BaseComponent';
import { Card } from '../common/component/Card';
import { TienlenCardPoint } from '../common/define';
import CardHelper from '../common/helper/CardHelper';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('TienlenOpCardList')
export class TienlenOpCardList extends BaseComponent {
    @property
    public gap: number = 0;
    private _cardList: Card[];
    private _showCardList: Card[] = [];
    private _dataList: number[];
    private _downNode: Node;
    private _selectCardList: Card[] = [];
    private _cacheVec2: Vec2 = new Vec2();
    private _cacheVec3: Vec3 = new Vec3();
    private _tmpVec3: Vec3 = new Vec3();
    private _sortMode: number = 0; //0从小到大排 1 按牌型规则排
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

    public get sortMode(): number {
        return this._sortMode;
    }

    public set sortMode(value: number) {
        if (this.sortMode == value) return;
        this._sortMode = value;
        this.sort();
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
            TienlenHelper.playSound(TienlenDefine.SoundSelCard);
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
        CardHelper.sortBigger(this._dataList);
        for (let index = 0; index < this._cardList.length; index++) {
            if (index < data.length) {
                const element = data[index];
                this._cardList[index].show(element);
            } else {
                this._cardList[index].hide();
            }
        }
    }

    public hide() {
        this.resetCards();
        this.hideCardList();
        this._sortMode = 0;
        super.hide();
    }

    public changeSortMode() {
        this.sortMode = this.sortMode == 0 ? 1 : 0;
    }

    public async sort() {
        this.enableClick(false);
        let data = this._dataList;
        this._cardList.forEach((v) => {
            v.flip();
        })
        let flag = await TienlenHelper.nodeWait(0.3, this.node);
        if (!flag) return;
        if (this.sortMode == 0) {
            CardHelper.sortBigger(data);
        } else {
            CardHelper.sortCards(data);
        }
        for (let index = 0; index < this._cardList.length; index++) {
            if (index < data.length) {
                const element = data[index];
                this._cardList[index].show(element);
            } else {
                this._cardList[index].hide();
            }
        }
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

    public showIndex(index: number, id: number) {
        if (this._cardList[index] == null) {
            console.warn('opcardlist showindex ', index, id);
        }
        this._cardList[index]?.show(id);
    }

    public setPosX(index: number, x: number, y: number = 0) {
        this._cardList[index].node.setPosition(x, y);
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
            // if (element.isPopup && element.cardId == -1) TienlenHelper.warn('popupcardlist cardid is -1!!!');
            // if (element.isPopup && element.cardId == null) TienlenHelper.warn('popupcardlist cardid is null !!!');
            // if (element.isPopup && !element.node.activeInHierarchy) TienlenHelper.warn('popupcardlist activeInHierarchy false');
            // if (element.isPopup && element.node.position.y == 0) TienlenHelper.warn('popupcardlist position.y ==0');
        }
        return list;
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
        if (this._tmpCardList.length != list.length) TienlenHelper.warn('getCardList len error');
        return this._tmpCardList;
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
                this._showCardList.push(card);
            } else {
                TienlenHelper.warn(`removeCards error id:${id} idx:${idx}`)
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



    public resetCards() {
        for (let index = 0; index < this._showCardList.length; index++) {
            const element = this._showCardList[index];
            element.reset();
            this._cardList.push(element);
            this.node.addChild(element.node);
        }
        this._showCardList.length = 0;
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
            let point = CardHelper.getTienlenCardPoint(element.cardId);
            let color = CardHelper.getTienlenCardColor(element.cardId);
            // str += `${map[color]}${TienlenCardPoint[point]} popup:${element.isPopup} cardId:${element.cardId} activeInHierarchy:${element.node.activeInHierarchy} positionY:${element.node.position.y}\n`;
            str += `${map[color]}${TienlenCardPoint[point]}`;
        }
        str += `当前出牌数量: ${this._showCardList.length}`
        return str;
    }

}

