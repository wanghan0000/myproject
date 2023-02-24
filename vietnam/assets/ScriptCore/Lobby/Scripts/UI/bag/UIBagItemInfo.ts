import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { AudioMgr } from '../../../../audio/AudioMgr';
import { LobbyAudioCfg } from '../../../../audio/LobbyAudioCfg';
import { DB_GameItem } from '../../../../config/db_gameitem';
import { BagData } from '../../../../data/BagData';
import { EventMgr } from '../../../../events/eventmgr';
import { EventName } from '../../../../events/EventName';
import { I18nMgr } from '../../../../i18n/I18nMgr';
import bag  from '../../../../protocol/bag.js';
import {ResMgr}  from '../../../../UIFrame/ResMgr';
import { UIScreen } from '../../../../UIFrame/UIForm';
import  {UIMgr}  from '../../UIMgr';

const { ccclass, property } = _decorator;

@ccclass('UIBagItemInfo')
export class UIBagItemInfo extends UIScreen {
    start() {

    }

    update(deltaTime: number) {
        
    }

    private data:bag.bag.ItemInfo =  null;
    onShow(itemData:bag.bag.ItemInfo){
        EventMgr.getInstance().addEventListener(EventName.SC_ALL_BAG_USE,this.onUpCallBack,this);
        this.data = itemData;
        this.initView();
    }

    onHide(){
        EventMgr.getInstance().removeByTarget(this);
    }

    private posy:number[] = [-520,-640,-760];

    //使用
    private btnuse:Node = null;
    private btnsend:Node = null;
    private btnsale:Node = null;

    //初始化UI
    private initView(){

        let contentnode = this.node.getChildByName("contentnode");
        this.btnuse= contentnode.getChildByName("layout").getChildByName("btnuse");
        this.btnsend = contentnode.getChildByName("layout").getChildByName("btnsend");
        this.btnsale = contentnode.getChildByName("layout").getChildByName("btnsale");

        this.btnuse.active = false;
        this.btnsend.active = false;
        this.btnsale.active = false;

        this.updateItemInfo();

        //这里要判定按钮的逻辑 Effect  使用 赠送  出售 
        let allCnt = 0;
        let config = DB_GameItem.getInstance().pool.get(this.data.ItemId);
        if(config.Effect0[0] == 1){
            this.btnuse.active = true;
            //this.btnuse.setPosition(0,this.posy[allCnt]);
            //allCnt ++;
        }
        if(config.Effect0[1] == 1){
            this.btnsend.active = true;
            //this.btnsend.setPosition(0,this.posy[allCnt]);
            //allCnt ++;
        }
        if(config.Effect0[2] == 1){
            this.btnsale.active = true;
            //this.btnsale.setPosition(0,this.posy[allCnt]);
            //allCnt ++;
        }
    }

    private updateItemInfo(){
        let config = DB_GameItem.getInstance().pool.get(this.data.ItemId);
        let contentnode = this.node.getChildByName("contentnode");
        //icon
        let item = contentnode.getChildByName("item");
        //icon信息的加载
        item.getChildByName("icon").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_"+this.data.ItemId);
        //名字
        //contentnode.getChildByName("itemname").getComponent(Label).string = config.Name;
        contentnode.getChildByName("itemname").getComponent(Label).string = I18nMgr.getInstance().getStringFromItemConfig(config.Id,"name");
        //数量
        
        contentnode.getChildByName("cntnode").getChildByName("cnttxt").getComponent(Label).string = this.data.ItemNum.toString();
        //描述
        console.log("道具描述的问题 换行的问题");
        console.log(config.Describe);
        console.log("道具描述的问题 换行的问题");
        //contentnode.getChildByName("desclbl").getComponent(Label).string = config.Describe;
        contentnode.getChildByName("desclbl").getComponent(Label).string = I18nMgr.getInstance().getStringFromItemConfig(config.Id,"describe");
    }


    //道具的出售 赠送  回调
    onUpCallBack(data:bag.bag.SCUpBagInfo){
        //成功了才更新，否则是不更新的。
        if(data.RetCode == bag.bag.OpResultCode.OPRC_Sucess){
            let itemData = BagData.getInstance().getBagItemById(data.NowItemId);   
            if(itemData == null){
                this.data.ItemNum = 0;
            }else{
                this.data = itemData;
            }
            
            this.updateItemInfo();
        }
    }

    

    onBtnBack(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.closeSelf();
    }

    //使用
    onBtnUse(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        UIMgr.getInstance().AlertTxt("使用");
        
    }

    //出售
    onBtnSale(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        //UIMgr.getInstance().AlertTxt("出售");
        UIMgr.getInstance().showLobbyBagSale(this.data);
    }

    //赠送
    onBtnSend(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        //UIMgr.getInstance().AlertTxt("赠送");
        UIMgr.getInstance().showLobbyBagSend(this.data);
    }

}

