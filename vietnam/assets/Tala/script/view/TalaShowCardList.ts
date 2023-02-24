import { _decorator, Component, Node, UITransform, EventTouch, Animation, Prefab, instantiate } from 'cc';
import { BaseComponent } from '../common/component/BaseComponent';
import { Card } from '../common/component/Card';
import CardHelper from '../common/helper/CardHelper';
import ResourceHelper from '../common/helper/ResourceHelper';
import TalaDefine, { PlayerOp } from '../TalaDefine';
import TalaHelper from '../TalaHelper';
const { ccclass, property } = _decorator;

@ccclass('TalaShowCardList')
export class TalaShowCardList extends BaseComponent {
    @property
    public gap: number = 0;
    private _isGray: boolean = false;

    public init() {
        let count = this.node.children.length;
        for (let index = 0; index < count; index++) {
            const element = this.node.children[index];
            element.active = false;
        }
    }

    public enableClick(flag: boolean) {
        if (flag) {
            this.node.on(Node.EventType.TOUCH_END, async (evt: EventTouch) => {
                let node = evt.target as Node;
                if (this.lastCard == node) {
                    let card = node.getComponent(Card);
                    this.node.parent.emit("clickCard", card);
                }
            }, this);
        } else {
            this.node.targetOff(this);
        }
    }

    public get lastCard(): Node {
        for (let index = this.node.children.length - 1; index >= 0; index--) {
            const element = this.node.children[index];
            if (element.active) return element
        }
    }

    public get count(): number {
        let count = 0;
        for (let index = 0; index < this.node.children.length; index++) {
            const element = this.node.children[index];
            if (element.active) {
                ++count;
            }
        }
        return count;
    }

    public get dataList(): number[] {
        let list = [];
        for (let index = 0; index < this.node.children.length; index++) {
            const element = this.node.children[index];
            if (element.active) {
                list.push(element.getComponent(Card).cardId);
            }
        }
        return list;
    }

    public set isGray(flag: boolean) {
        this._isGray = flag;
        let list = this.getComponentsInChildren(Card);
        list.forEach((v) => {
            v.isSelected = flag;
        })
    }

    public get isGray(): boolean {
        return this._isGray;
    }

    public async show(...args: any) {
        super.show(...args);
        this.init();
        let list = args[0] as number[];
        let childCount = this.node.children.length;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            let card = index < childCount ? this.node.children[index].getComponent(Card) : await TalaHelper.getCard(this.node);
            card.node.active = true;
            card.cardId = element;
            card.isSelected = this.isGray;
        }
    }

    public sort(isBigger: boolean) {
        let list = [];
        let childCount = this.node.children.length;
        for (let index = 0; index < childCount; index++) {
            const element = this.node.children[index];
            if (element.active) {
                let id = element.getComponent(Card).cardId;
                list.push(id);
            }
        }
        if (isBigger) {
            CardHelper.sortBigger(list);
        } else {
            CardHelper.sortSmaller(list);
        }
    }

    public async addCard(id: number) {
        let childCount = this.node.children.length;
        for (let index = 0; index < childCount; index++) {
            const element = this.node.children[index];
            if (!element.active) {
                element.active = true;
                let card = element.getComponent(Card);
                card.cardId = id;
                card.isSelected = this.isGray;
                return card;
            }
        }
        let card = await TalaHelper.getCard(this.node);
        card.node.active = true;
        card.cardId = id;
        card.isSelected = this.isGray;
        return card;
    }

    public async removeCard(id: number) {
        let childCount = this.node.children.length;
        for (let index = 0; index < childCount; index++) {
            let card = this.node.children[index].getComponent(Card);
            if (card.cardId == id) {
                card.node.active = false;
                card.node.removeFromParent();
                this.node.addChild(card.node);
                break;
            }
        }
    }

    public getCard(id: number) {
        let childCount = this.node.children.length;
        for (let index = 0; index < childCount; index++) {
            let card = this.node.children[index].getComponent(Card);
            if (card.node.active && card.cardId == id) {
                return card.node;
            }
        }
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
                anim.node.parent.setPosition(0, 150);
                anim.play();
                card.getComponent(Card).mark = true;
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

    public hide() {
        super.hide();
        this.isGray = false;
        this.removeTip();
    }
}

