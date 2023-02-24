import { _decorator, Component, Node, Prefab, instantiate, EventHandler, Button, Label, Sprite,  UITransform, Size, Toggle, v3 } from 'cc';
import { AudioMgr } from '../../../ScriptCore/audio/AudioMgr';
import { LobbyAudioCfg } from '../../../ScriptCore/audio/LobbyAudioCfg';
import { DB_GameItem } from '../../../ScriptCore/config/db_gameitem';
import { BagData } from '../../../ScriptCore/data/BagData';
import { UserData } from '../../../ScriptCore/data/UserData';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { BagNowLocation, ShopNowLocation } from '../../../ScriptCore/Lobby/Scripts/gameconfig/GameConst';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import  bag  from '../../../ScriptCore/protocol/bag.js';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import ResourceHelper from '../common/helper/ResourceHelper';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenUIMgr } from '../TienlenUIMgr';
const { ccclass, property } = _decorator;

@ccclass('UITienlenBag')
export class UITienlenBag extends UIScreen {
    start() {

    }

    //绑定背包的消息
    onShow() {
        EventMgr.getInstance().addEventListener(EventName.SC_ALL_BAG_INFO,this.onBagList,this);
        EventMgr.getInstance().addEventListener(EventName.SC_ALL_BAG_USE,this.onBagUseCallBack,this);

        //后台增加金币的时候界面上的金币要发生改变
        EventMgr.getInstance().addEventListener(EventName.SC_USER_GOLD_CHANGE,this.updateGoldAndDiamond,this);


        this.updateGoldAndDiamond();
        this.clearView();
        
        this.onBagList();
        //this.doReqBagDataList();
        
    }

    //

    onHide() {
        EventMgr.getInstance().removeByTarget(this);
    }

    //更新金币数和钻石数量
    updateGoldAndDiamond(){
        this.node.getChildByName("goldicon").getChildByName("val").getComponent(Label).string = Utils.cvtToKMB(UserData.getInstance().getCoin())
        this.node.getChildByName("diamondicon").getChildByName("val").getComponent(Label).string = Utils.cvtToKMB(UserData.getInstance().getDiamond());
    }

    //清楚view上的数据
    private clearView(){
        let itemInfo = this.node.getChildByName("content").getChildByName("right");
        //物品描述
        itemInfo.getChildByName("desc").getChildByName("ScrollView").getChildByName("view").getChildByName("txt").getComponent(Label).string = "";
        //icon
        itemInfo.getChildByName("icon").getChildByName("iconsp").getComponent(Sprite).spriteFrame = null;
        itemInfo.getChildByName("icon").getChildByName("itemname").getComponent(Label).string = "";
    }


    private isFinishLoading:boolean = false;
    doReqBagDataList(){
        this.isFinishLoading = true;
        let pack = new bag.bag.CSBagInfo();
        pack.NowLocation = ShopNowLocation.TienLen_location;
        SocketMgr.send(bag.bag.SPacketID.PACKET_ALL_BAG_INFO,pack);
    }

    //背包信息获取到了
    async onBagList(){
        let dataList = BagData.getInstance().getBagListByLocation(1);
        if(dataList == null){
            this.doReqBagDataList();
        }else{
            this.isFinishLoading = true;
            this.bagListItem = [];
            if(this.curSelectIdx < dataList.length){
    
            }else{
                this.curSelectIdx = 0;
            }
    
            this.bagList = dataList
            this.onBtnAll(null,null,true);   
        }
        
    }

    private bagListItem:Node[] = [];
    private bagList:bag.bag.ItemInfo[] = [];
    private curSelectIdx = 0;

    //初始化 背包中的数据
    private initItemView(item:Node,data:bag.bag.ItemInfo,idx:number){
        //绑定按钮事件
        let clickEvent = new EventHandler();
        clickEvent.target = this.node;
        clickEvent.component = "UITienlenBag";
        clickEvent.handler = "onItemClick";
        clickEvent.customEventData = idx.toString();
        item.getComponent(Button).clickEvents.push(clickEvent);

        //初始化view
        item.getChildByName("cnt").getComponent(Label).string = data.ItemNum.toString();
        item.getChildByName("select").active = false;
        //
        item.getChildByName("icon").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_"+data.ItemId);
    }


    //单个背包的图标被点击了
    async onItemClick(evt:Event,customData:string,ignoreSound:boolean){
        //这里要刷新左侧的道具详细信息
        if(!ignoreSound){
            AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        }
        let idx = parseInt(customData);
        this.curSelectIdx  = idx;
        for(let i = 0;i<this.bagListItem.length;i++){
            this.bagListItem[i].getChildByName("select").active = i == idx;
        }

        let right = this.node.getChildByName("content").getChildByName("right");
        right.active = false;
        let config = DB_GameItem.getInstance().pool.get(this.curbagList[idx].ItemId);
        let desc = right.getChildByName("desc");
        if( idx < this.curbagList.length){
            right.active = true;
            let icon = right.getChildByName("icon");
            //icon.getChildByName("itemname").getComponent(Label).string = config.Name;
            icon.getChildByName("itemname").getComponent(Label).string  = I18nMgr.getInstance().getStringFromItemConfig(config.Id,"name");
            
            //desc.getChildByName("ScrollView").getChildByName("view").getChildByName("txt").getComponent(Label).string = config.Describe;
            desc.getChildByName("ScrollView").getChildByName("view").getChildByName("txt").getComponent(Label).string = I18nMgr.getInstance().getStringFromItemConfig(config.Id,"describe");
            //更换图标
            icon.getChildByName("iconsp").getComponent(Sprite).spriteFrame =ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_"+this.curbagList[idx].ItemId);
        }else{
            right.active = false;
        }
        
        //这里要处理两个按钮的事件
        // 1，使用
        // 2，赠送
        // 3，出售

        //-130 0 130  -246
        //每个Effect0   使用 赠送 出售
        let layout = this.node.getChildByName("content").getChildByName("oplayout");
        let btnUse = layout.getChildByName("btnuse");
        let btnSend = layout.getChildByName("btnsend");
        let btnSale = layout.getChildByName("btnsale");
        btnUse.active = false;
        btnSend.active =false;
        btnSale.active = false;
        if(idx < this.curbagList.length){
            let itemData = this.curbagList[idx];
            btnUse.active = config.Effect[0] == 1;
            btnSend.active = config.Effect[1] == 1;
            btnSale.active = config.Effect[2] == 1;
        }

    }

    onBtnClose() {
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.closeSelf();
    }


    //赠送按钮事件
    onBtnSendClick(){
        console.log("赠送按钮事件");
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        //TienlenUIMgr.getInstance().showBagSale(this.curbagList[this.curSelectIdx]);
        TienlenUIMgr.getInstance().showBagSend(this.curbagList[this.curSelectIdx]);
    }

    onBagUseCallBack(msg:bag.bag.SCUpBagInfo){
        console.log("背包使用使用的消息回调");        
        console.log(msg);
        console.log("背包使用使用的消息回调");
        if(msg.RetCode == bag.bag.OpResultCode.OPRC_Sucess){
            for(let i = 0;i<this.bagList.length;i++){
                if(this.bagList[i].ItemId == msg.NowItemId){
                    this.bagList[i].ItemNum = msg.NowItemNum;
                }
            }
        }

        if(this.curTabStr == "all"){
            this.onBtnAll(null,null,true);
        }else if(this.curTabStr == "daoju"){
            this.onBtnDaoJu(null,null,true);
        }else if(this.curTabStr == "ziyuan"){
            this.onBtnZiYuan(null,null,true);
        }else if(this.curTabStr == "duihuan"){
            this.onBtnDuiHuan(null,null,true);
        }
    }



    //出售按钮事件
    onBtnSellClick(){
        console.log("出售按钮事件");
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        TienlenUIMgr.getInstance().showBagSale(this.curbagList[this.curSelectIdx]);
    }


    //使用
    onBtnUseClick(){
        console.log("使用按钮");
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        //TienlenUIMgr.getInstance().AlertTxt("功能暂未开启");
        TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.gongnengweikaiqiTxt"));
        // this.closeSelf();
        // //判定当前是宠物还是角色
        // if(this.curbagList[this.curSelectIdx].Location == "10001"){
        //     TienlenHelper.showTienLenPet();
        // }else if(this.curbagList[this.curSelectIdx].Location == "20001" || this.curbagList[this.curSelectIdx].Location == "20002"){
        //     TienlenHelper.showTienLenRole();
        // }
        
    }


    private curbagList:bag.bag.ItemInfo[] = [];
    private async initScrollView(){
        let itemWidth = 105;
        let itemHeight = 105;
        this.unscheduleAllCallbacks();
        let scrollView = this.node.getChildByName("content").getChildByName("middle").getChildByName("ScrollView");
        let emptyNode = this.node.getChildByName("content").getChildByName("middle").getChildByName("empty");
        let content = scrollView.getChildByName("view").getChildByName("content");
        content.destroyAllChildren();
        if(this.curbagList.length ==0 ){
            emptyNode.active = true;
            scrollView.active = false;
            //右侧的不显示
            this.node.getChildByName("content").getChildByName("right").active = false;
            this.node.getChildByName("content").getChildByName("oplayout").active = false;
        }else{
            this.node.getChildByName("content").getChildByName("right").active = true;
            this.node.getChildByName("content").getChildByName("oplayout").active = true;
            emptyNode.active = false;
            scrollView.active = true;
            this.bagListItem = [];
            console.log(this.curbagList);
            for(let i = 0;i<this.curbagList.length;i++){
                console.log(i,"==========");
                if(i <=25){
                    let pb = await ResourceHelper.loadResInAB(TienlenDefine.ABName, "prefab/bag/bagitem", Prefab);
                    let item = instantiate(pb);
                    let rowIdx = Math.floor(i / 4);
                    let columnIdx = Math.floor(i % 4);
                    let posx = columnIdx * itemWidth + itemWidth / 2;
                    let posy = rowIdx * itemHeight + itemHeight / 2;
                    item.setPosition(posx,-posy);
                    this.bagListItem.push(item);
                    content.addChild(item);
                    this.initItemView(item,this.curbagList[i] as bag.bag.ItemInfo,i);
                }else{
                    this.scheduleOnce(async ()=>{
                        let pb = await ResourceHelper.loadResInAB(TienlenDefine.ABName, "prefab/bag/bagitem", Prefab);
                        let item = instantiate(pb);
                        let rowIdx = Math.floor(i / 4);
                        let columnIdx = Math.floor(i % 4);
                        let posx = columnIdx * itemWidth + itemWidth / 2;
                        let posy = rowIdx * itemHeight + itemHeight / 2;
                        item.setPosition(posx,-posy);
                        this.bagListItem.push(item);
                        content.addChild(item);
                        this.initItemView(item,this.curbagList[i] as bag.bag.ItemInfo,i);
                    },0.016 * i);
                }
                
            }
            let rowCnt = 1;
            if(this.curbagList.length >1){
                rowCnt = Math.floor( (this.curbagList.length-1) /4 ) + 1;
            }
            content.getComponent(UITransform).contentSize = new Size(420,itemHeight * rowCnt);
            this.onItemClick(null,this.curSelectIdx.toString(),true);
        }
    }



    private delaTabBtns(tag:string){
        this.curTabStr = tag;
        let btnAll:Node = this.node.getChildByName("content").getChildByName("left").getChildByName("ToggleGroup").getChildByName("toggleall");
        let btnDaoJu:Node = this.node.getChildByName("content").getChildByName("left").getChildByName("ToggleGroup").getChildByName("toggleitem");
        let btnDuiHuan:Node = this.node.getChildByName("content").getChildByName("left").getChildByName("ToggleGroup").getChildByName("toggleexchange");
        btnAll.getComponent(Toggle).isChecked = tag == "all";
        btnDaoJu.getComponent(Toggle).isChecked = tag == "daoju";
        btnDuiHuan.getComponent(Toggle).isChecked = tag == "duihuan";
        
    }

    private splitItemToArr(data:bag.bag.ItemInfo):bag.bag.ItemInfo[]{
        let bagList:bag.bag.ItemInfo[] = [];
        let cofing = DB_GameItem.getInstance().pool.get(data.ItemId);
        if(data.ItemNum <= cofing.CompositionMax){
            bagList.push(data);
        }else{
            let allCnt = Math.floor( data.ItemNum / cofing.CompositionMax )+1;
            for(let j = 0;j<allCnt;j++){
                let itemData = new bag.bag.ItemInfo();
                itemData.ItemId = data.ItemId;
                itemData.ObtainTime = data.ObtainTime;
                if(j<allCnt-1){
                    itemData.ItemNum = cofing.CompositionMax;
                }else{
                    itemData.ItemNum = data.ItemNum % cofing.CompositionMax;
                }
                bagList.push(itemData);
            }
        }
        return bagList;
    }


    private curTabStr = "all";    
    //全部分类
    async onBtnAll(evt:Event,customData:string,ignoreSound:boolean = false){
        if(!ignoreSound){
            AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        }
        this.delaTabBtns("all");
        this.curSelectIdx = 0;
        this.curbagList =[];
        for(let i = 0;i<this.bagList.length;i++){
            let config = DB_GameItem.getInstance().pool.get(this.bagList[i].ItemId);
            if(config.Classify[0] == 1){
                let bagList = this.splitItemToArr(this.bagList[i]);
                for(let j = 0;j<bagList.length;j++){
                    if(bagList[j].ItemNum >0){
                        this.curbagList.push(bagList[j]);
                    }
                }
            }
        }
        this.initScrollView();
    }



   //道具类
   onBtnDaoJu(evt:Event,customData:string,ignoreSound:boolean = false){
    if(!ignoreSound){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
    }
    this.delaTabBtns("daoju");
    this.curbagList = [];
    this.curSelectIdx = 0;
    for(let i = 0;i<this.bagList.length;i++){
        let config = DB_GameItem.getInstance().pool.get(this.bagList[i].ItemId);
        if(config.Classify[1] == 1){

            let bagList = this.splitItemToArr(this.bagList[i]);
            for(let j = 0;j<bagList.length;j++){
                if(bagList[j].ItemNum >0){
                    this.curbagList.push(bagList[j]);
                }
            }    

        }
    }
    this.initScrollView();
   }

   //资源类
   onBtnZiYuan(evt:Event,customData:string,ignoreSound:boolean = false){
    if(!ignoreSound){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
    }
    console.log("资源类");
    this.curSelectIdx = 0;
    this.delaTabBtns("ziyuan");
    this.curbagList  =[];
    for(let i = 0;i<this.bagList.length;i++){
        let config = DB_GameItem.getInstance().pool.get(this.bagList[i].ItemId);
        if(config.Classify.indexOf(3) != -1){
            let bagList = this.splitItemToArr(this.bagList[i]);
            for(let j = 0;j<bagList.length;j++){
                if(bagList[j].ItemNum >0){
                    this.curbagList.push(bagList[j]);
                }
            }    
        }
    }
    this.initScrollView();
   }

   //兑换类
   onBtnDuiHuan(evt:Event,customData:string,ignoreSound:boolean = false){
    if(!ignoreSound){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
    }
    console.log("兑换类");
    this.curSelectIdx = 0;
    this.curbagList  =[];
    this.delaTabBtns("duihuan");
    for(let i = 0;i<this.bagList.length;i++){
        let config = DB_GameItem.getInstance().pool.get(this.bagList[i].ItemId);
        if(config.Classify[2] == 1){
            let bagList = this.splitItemToArr(this.bagList[i]);
            for(let j = 0;j<bagList.length;j++){
                if(bagList[j].ItemNum >0){
                    this.curbagList.push(bagList[j]);
                }
            }    
        }
    }
    this.initScrollView();
   }

}

