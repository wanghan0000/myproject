import { _decorator, Component, Node, Sprite, Label, EventHandler, Button } from 'cc';
import { AudioMgr } from '../../../../audio/AudioMgr';
import { LobbyAudioCfg } from '../../../../audio/LobbyAudioCfg';
import { DB_GameItem } from '../../../../config/db_gameitem';
import { BagData } from '../../../../data/BagData';
import { I18nMgr } from '../../../../i18n/I18nMgr';
import  bag  from '../../../../protocol/bag.js';
import { ResMgr } from '../../../../UIFrame/ResMgr';
import { UIMgr } from '../../UIMgr';
const { ccclass, property } = _decorator;

@ccclass('LobbyBagItem')
export class LobbyBagItem extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    private curData:bag.bag.ItemInfo = null;
    public getData():bag.bag.ItemInfo{
        return this.curData;
    }


    //加载数据
    public loadData(data:bag.bag.ItemInfo):void{
        this.curData = data;
        let config = DB_GameItem.getInstance().pool.get(data.ItemId);
        //道具Icon
        this.node.getChildByName("icon").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_"+data.ItemId);
        this.node.getChildByName("icon").active = true;
        //名字
        //this.node.getChildByName("lblname").getComponent(Label).string = config.Name;
        this.node.getChildByName("lblname").getComponent(Label).string = I18nMgr.getInstance().getStringFromItemConfig(config.Id,"name");
        this.node.getChildByName("lblname").active = true;

        //数量
        this.node.getChildByName("lblcnt").getComponent(Label).string = data.ItemNum.toString();
        this.node.getChildByName("lblcnt").active = true;

        let evtHandler = new EventHandler();
        evtHandler.target = this.node;
        evtHandler.component = "LobbyBagItem";
        evtHandler.handler = "onItemClick";
        this.node.getComponent(Button).clickEvents.push(evtHandler);
    }

    
    onItemClick(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        let data:bag.bag.ItemInfo = BagData.getInstance().getBagItemById(this.curData.ItemId);
        UIMgr.getInstance().showLobbyBagDetail(data);
    }


    
}

