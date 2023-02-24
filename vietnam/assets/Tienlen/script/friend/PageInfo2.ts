import { _decorator, Component, Node } from 'cc';
import { ModelCard } from './ModelCard';
import { BasePage } from './PageChat';
import { WndUserInfo } from './WndUserInfo';
const { ccclass, property } = _decorator;

@ccclass('PageInfo2')
export class PageInfo2 extends BasePage {
    public async show(...args: any) {
        let data = WndUserInfo.instance.data;
        let list = this.getComponentsInChildren(ModelCard);
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (index < data.Roles.length) {
                element.show(data.Roles[index].Id, data.Roles[index].Level, data.Roles[index].Name);
            } else {
                element.hide();
            }
        }
    }
}

