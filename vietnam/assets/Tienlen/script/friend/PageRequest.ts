import { _decorator, Component, Node, Prefab, ScrollView, instantiate } from 'cc';
import friend from '../../../ScriptCore/protocol/friend.js';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime.js';
import { ItemFriendRequest } from './ItemFriendRequest';
import { BasePage } from './PageChat';
const { ccclass, property } = _decorator;

@ccclass('PageRequest')
export class PageRequest extends BasePage {
    @property(Prefab)
    public pfbItemRequest: Prefab;
    private _scrollView: ScrollView;
    private _dataList: friend.friend.SCFriendList;
    onLoad() {
        this._scrollView = this.getComponent(ScrollView);
        this._scrollView.content.on(ItemFriendRequest.Evt_Complete, (data: any) => {
            this.hideItem(data);
        }, this);
    }

    hideItem(data: any) {
        for (let index = 0; index < this._dataList.FriendArr.length; index++) {
            const element = this._dataList.FriendArr[index];
            if (element == data) {
                // this._scrollView.content.children[index].active = false;
                this._dataList.FriendArr.splice(index, 1);
                break;
            }
        }
    }

    async show() {
        let list = await TienlenHelper.callFriendList(1);
        this._dataList = list
        let count = this._scrollView.content.children.length;
        for (let index = 0; index < list.FriendArr.length; index++) {
            const element = list.FriendArr[index];
            let item: ItemFriendRequest;
            if (index < count) {
                item = this._scrollView.content.children[index].getComponent(ItemFriendRequest);
                item.node.active = true;
            } else {
                item = instantiate(this.pfbItemRequest).getComponent(ItemFriendRequest);
                this._scrollView.content.addChild(item.node);
            }
            item.data = list.FriendArr[index];
        }
        for (let index = list.FriendArr.length; index < count; index++) {
            const element = this._scrollView.content.children[index];
            element.active = false;
        }
    }
    hide() {

    }
}

