import { _decorator, Component, Node, ScrollView, Prefab, instantiate, Label } from 'cc';
import { UserData } from '../../../ScriptCore/data/UserData';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import player from '../../../ScriptCore/protocol/player.js';
import { TienlenGameData } from '../model/TienlenGameData.js';
import TienlenHelper from '../TienlenHelper';
import { ItemGameLog } from './ItemGameLog';
import { BasePage } from './PageChat';
const { ccclass, property } = _decorator;

@ccclass('PageInfo1')
export class PageInfo1 extends BasePage {
    @property(Prefab)
    public pfbItemLog: Prefab;
    @property(Label)
    public labelTip: Label;
    @property(Node)
    private list: Node;
    private _data: player.player.SCQueryPlayer;
    onLoad() {
    }

    public async show(...args: any) {
        this._data = args[0];
        if (this._data.SnId == UserData.getInstance().getSnId()) {
            //this.labelTip.string = '您还没有对战记录';
            this.labelTip.string = I18nMgr.getInstance().getStringByKey("tienlen.nihaimeiyouduizhanjiluTxt");
        } else {
            //this.labelTip.string = "该好友无战绩";
            this.labelTip.string = I18nMgr.getInstance().getStringByKey("tienlen.haoyouwuzhanjiTxt");
        }
        let list = await TienlenHelper.callQueryGameLog(this._data.SnId);
        this.initList(list.GameLogs);
    }

    initList(data: any[]) {
        let count = this.list.children.length;
        this.labelTip.node.active = data.length == 0;
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let item: ItemGameLog;
            if (index < count) {
                item = this.list.children[index].getComponent(ItemGameLog);
                item.node.active = true;
            } else {
                item = instantiate(this.pfbItemLog).getComponent(ItemGameLog);
                this.list.addChild(item.node);
            }
            item.data = element;
        }
        for (let index = data.length; index < count; index++) {
            const element = this.list.children[index];
            element.active = false;
        }
    }


}

