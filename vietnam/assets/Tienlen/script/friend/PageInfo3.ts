import { _decorator, Component, Node, Label } from 'cc';
import { UserData } from '../../../ScriptCore/data/UserData';
import { ModelCard } from './ModelCard';
import { BasePage } from './PageChat';
import { WndUserInfo } from './WndUserInfo';
const { ccclass, property } = _decorator;

@ccclass('PageInfo3')
export class PageInfo3 extends BasePage {
    @property(Label)
    public labelTip: Label;
    public async show(...args: any) {
        let list = this.getComponentsInChildren(ModelCard);
        let data = WndUserInfo.instance.data;
        if (data.Pets.length > 0) {
            list[0].node.active = true;
            this.labelTip.node.active = false;
            for (let index = 0; index < list.length; index++) {
                const element = list[index];
                if (index < data.Pets.length) {
                    element.show(data.Pets[index].Id, data.Pets[index].Level, data.Pets[index].Name);
                } else {
                    element.hide();
                }
            }
        } else {
            list[0].node.active = false;
            this.labelTip.node.active = true;
            if (WndUserInfo.instance.data.SnId == UserData.getInstance().getSnId()) {
                this.labelTip.string = '您还没有宠物';
            } else {
                this.labelTip.string = '该好友还没有激活宠物';
            }
        }
    }
}

