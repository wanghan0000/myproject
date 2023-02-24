import { _decorator, Component, Node, Layout, Prefab, NodePool, instantiate } from 'cc';
import { BaseComponent } from '../common/component/BaseComponent';
import { Card } from '../common/component/Card';
import CardHelper from '../common/helper/CardHelper';
import { TienlenGameData } from '../model/TienlenGameData';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('TienlenShowCardList')
export class TienlenShowCardList extends BaseComponent {
    @property
    public gap: number = 0;
    private _isGray: boolean = false;
    private _showRecordList: any[][] = [];

    onLoad() {
    }


    public async show(...args: any[]) {
        super.show(...args);
        this.clear();
        let list = args[0] as any[];
        CardHelper.sortShowCard(list, TienlenGameData.instance.isTraditonal);
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            let card = await TienlenHelper.getCard(this.node);
            card.cardId = element;
            card.isSelected = this._isGray;
            this.node.addChild(card.node);
        }
    }

    public hide() {
        this.setGray(false);
        this.clear();
        super.hide();
    }

    public setGray(flag: boolean) {
        this._isGray = flag;
        let list = this.getComponentsInChildren(Card);
        list.forEach((v) => {
            v.isSelected = flag;
        })
    }

    //Cannot change hierarchy while activating or deactivating the parent
    // onDisable() {
    // this.clear();
    // }

    clear() {
        let list = this.node.children;
        while (list.length > 0) {
            TienlenHelper.putCard(list[0])
        }
    }


}

