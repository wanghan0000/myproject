import { _decorator, Component, Node, instantiate, UITransform, Size, Label, Toggle, Event } from 'cc';
import { AudioMgr } from '../../../audio/AudioMgr';
import { LobbyAudioCfg } from '../../../audio/LobbyAudioCfg';
import { DB_GameItem } from '../../../config/db_gameitem';
import { BagData } from '../../../data/BagData';
import { UserData } from '../../../data/UserData';
import { EventMgr } from '../../../events/eventmgr';
import { EventName } from '../../../events/EventName';
import { SocketMgr } from '../../../panda/net/SocketMgr';
import { FuncExtend } from '../../../panda/utils/FuncExtend';
import  bag  from '../../../protocol/bag.js';
import { ResMgr } from '../../../UIFrame/ResMgr';
import { UIScreen } from '../../../UIFrame/UIForm';
import { BagNowLocation } from '../gameconfig/GameConst';
import { UIMgr } from '../UIMgr';
import { LobbyBagItem } from './bag/LobbyBagItem';
const { ccclass, property } = _decorator;

@ccclass('UIBag')
export class UIBag extends UIScreen {
    //采用独占模式。
    isEngross = true;


    private btnAll:Node = null;
    private btnItem:Node = null;
    private btnExchange:Node = null;

    private isLoadFinished:boolean = false;
    //界面打开
    onShow(){


        this.doAdapter();
        //
        this.initBarBtnState();
        EventMgr.getInstance().addEventListener(EventName.SC_ALL_BAG_INFO,this.onBagList,this);
        EventMgr.getInstance().addEventListener(EventName.SC_ALL_BAG_USE,this.onBagUseCallBack,this);

        let top = this.node.getChildByName("allitemndoe").getChildByName("top");
        this.btnAll = top.getChildByName("btnall");
        this.btnItem = top.getChildByName("btnitem");
        this.btnExchange = top.getChildByName("btnexchange");

        //this.onBtnAllClick();


        //打开所有道具
        this.onBtnCllick("all");
        if(this.isLoadFinished){
            this.curTypeDataList = [];
            for(let i = 0;i<this.dataList.length;i++){
                if(DB_GameItem.getInstance().pool.get(this.dataList[i].ItemId).Classify[0] == 1){
                    let arr = this.splitItemToArr(this.dataList[i]);
                    for(let idx = 0;idx<arr.length;idx++){
                        this.curTypeDataList.push(arr[idx]);
                    }
                }
            }
            this.initScrollView();
        }


        //this.doReqBagList();
        this.onBagList();
    }


    //背包界面做适配
    private doAdapter():void{
        
        let topBar = this.node.getChildByName("UITopbar");
        FuncExtend.adapterSafeAreRect(topBar);

        let activitynode = this.node.getChildByName("activitynode");
        FuncExtend.adapterSafeAreRect(activitynode);

        let allitemndoe = this.node.getChildByName("allitemndoe");
        FuncExtend.adapterSafeAreRect(allitemndoe);

        let scrollView = allitemndoe.getChildByName("ScrollView");
        FuncExtend.adapterSafeAreRect(scrollView);

    }



    onHide(){
        EventMgr.getInstance().removeByTarget(this);
    }


    //请求背包列表
    doReqBagList(){
        let pack = new bag.bag.CSBagInfo();
        pack.NowLocation = BagNowLocation.Lobby_Location;
        SocketMgr.send(bag.bag.SPacketID.PACKET_ALL_BAG_INFO,pack);
    }


    onBtnGame(){
        UIMgr.getInstance().showScreenLobby();
    }

    //自己背包 不处理
    onBtnBag(){
        //UIMgr.getInstance().showLobbyBag();
    }


    //商城
    onBtnShop(){
        UIMgr.getInstance().showLobbyShop();
    }

    //我的
    onBtnMe(){

    }

    private curTabStr:string = "all";
    onBtnCllick(tag:string){
        this.curTabStr = tag;
        this.btnAll.getChildByName("select").active = tag == "all";
        this.btnAll.getChildByName("normail").active = tag != "all";

        this.btnItem.getChildByName("select").active= tag == "item";
        this.btnItem.getChildByName("normail").active = tag != "item";

        this.btnExchange.getChildByName("select").active = tag == "exchange";
        this.btnExchange.getChildByName("normail").active = tag != "exchange";
    }

    
    //全部显示
    onBtnAllClick(evt:Event,customData:string,ignoreSound:boolean = false){
        if(!ignoreSound){
            AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        }
        
        this.onBtnCllick("all");
        if(this.isLoadFinished){
            this.curTypeDataList = [];
            for(let i = 0;i<this.dataList.length;i++){
                if(DB_GameItem.getInstance().pool.get(this.dataList[i].ItemId).Classify[0] == 1){
                    let arr = this.splitItemToArr(this.dataList[i]);
                    for(let idx = 0;idx<arr.length;idx++){
                        this.curTypeDataList.push(arr[idx]);
                    }
                }
            }
            this.initScrollView();
        }
    }

    //道具
    onBtnItemClick(evt:Event,customData:string,ignoreSound:boolean = false){
        if(!ignoreSound){
            AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        }
        this.onBtnCllick("item");
        if(this.isLoadFinished){
            this.curTypeDataList = [];
            for(let i = 0;i<this.dataList.length;i++){
                if(DB_GameItem.getInstance().pool.get(this.dataList[i].ItemId).Classify[1] == 1){
                    let arr = this.splitItemToArr(this.dataList[i]);
                    for(let idx = 0;idx<arr.length;idx++){
                        this.curTypeDataList.push(arr[idx]);
                    }
                }
            }
            this.initScrollView();
        }
        
    }

    //兑换类
    onBtnExchange(evt:Event,customData:string,ignoreSound:boolean = false){
        if(!ignoreSound){
            AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        }
        this.onBtnCllick("exchange");
        if(this.isLoadFinished){
            this.curTypeDataList = [];
            for(let i = 0;i<this.dataList.length;i++){
                if(DB_GameItem.getInstance().pool.get(this.dataList[i].ItemId).Classify[2] == 1){
                    let arr = this.splitItemToArr(this.dataList[i]);
                    for(let idx = 0;idx<arr.length;idx++){
                        this.curTypeDataList.push(arr[idx]);
                    }
                }
            }
            this.initScrollView();
        }
        
    }



    //初始化scrollview
    private initScrollView(){
        let itemWidth = 240;
        let itemHeight = 300;
        let content = this.node.getChildByName("allitemndoe").getChildByName("ScrollView").getChildByName("view").getChildByName("content");
        content.destroyAllChildren();
        if(this.curTypeDataList.length  >0){
            this.node.getChildByName("allitemndoe").getChildByName("ScrollView").active = true;
            this.node.getChildByName("allitemndoe").getChildByName("empty").active = false;
            
            for(let i = 0;i<this.curTypeDataList.length;i++){
                let row = Math.floor( i/3 );
                let column = Math.floor( i%3 );
                let posx = column * itemWidth + itemWidth / 2;
                let posy = row * itemHeight + itemHeight / 2;
                let pb = ResMgr.getInstance().getPrefabByPath("Lobby/Prefabs/bag/LobbyBagItem");
                let item = instantiate(pb);
                item.setPosition(posx,-posy);
                item.getComponent(LobbyBagItem).loadData(this.curTypeDataList[i]);
                content.addChild(item)
            }
            let rowCnt = Math.floor ((this.curTypeDataList.length-1) /3) + 1;
            content.getComponent(UITransform).contentSize = new Size( 720, itemHeight * rowCnt );
        }
        else{
            this.node.getChildByName("allitemndoe").getChildByName("ScrollView").active = false;
            this.node.getChildByName("allitemndoe").getChildByName("empty").active = true;
        }
        
    }


    
    //初始化按钮的状态
    private initBarBtnState(){
        let bottomBar = this.node.getChildByName("UILobbyBtm");
        bottomBar.getChildByName("ToggleGroup").getChildByName("Toggle2").getComponent(Toggle).isChecked = true;
        bottomBar.getChildByName("ToggleGroup").getChildByName("Toggle2").getComponent(Toggle).interactable = false;
    }


    onEnable(){
        
    }

    onDisable(){
        
    }


    //所有的数据
    private dataList:bag.bag.ItemInfo[] = [];
    //当前选择类型的所有数据
    private curTypeDataList:bag.bag.ItemInfo[];
    //当前选择的索引
    private curSelectIdx = 0; 
    //获取到背包列表
    onBagList(){
        //this.dataList = BagData.getInstance().getBagList();
        this.dataList = BagData.getInstance().getBagListByLocation(0);
        console.log("当前背包中的数据");
        console.log(this.dataList);
        console.log("当前背包中的数据");
        console.log(this.dataList);
        if(this.dataList == null){
            this.doReqBagList();
        }else{
            this.curTypeDataList = [];
            this.isLoadFinished = true;
            this.onBtnAllClick(null,null,true);
        }
    }

    onBagUseCallBack(msg:bag.bag.SCUpBagInfo){
        console.log("背包使用使用的消息回调");        
        console.log(msg);
        console.log("背包使用使用的消息回调");
        this.dataList = BagData.getInstance().getBagList();
        console.log(this.dataList);
        if(this.curTabStr == "all"){
            this.onBtnAllClick(null,null,true);
        }else if(this.curTabStr == "item"){
            this.onBtnItemClick(null,null,true);
        }else if(this.curTabStr == "exchange"){
            this.onBtnExchange(null,null,true);
        }
    }



    //将背包中的数据分隔成为多个 格子
    private splitItemToArr(data:bag.bag.ItemInfo):bag.bag.ItemInfo[]{
        let bagList:bag.bag.ItemInfo[] = [];
        let config = DB_GameItem.getInstance().pool.get(data.ItemId);
        if(data.ItemNum <= config.CompositionMax){
            bagList.push(data);
        }else{
            let allCnt = Math.floor( data.ItemNum / config.CompositionMax )+1;
            for(let j = 0;j<allCnt;j++){
                let itemData = new bag.bag.ItemInfo();
                if(j<allCnt-1){
                    itemData.ItemNum = config.CompositionMax;
                    itemData.ItemId = data.ItemId;
                    itemData.ObtainTime = data.ObtainTime;
                }else{
                    itemData.ItemNum = data.ItemNum % config.CompositionMax;
                    itemData.ItemId = data.ItemId;
                    itemData.ObtainTime = data.ObtainTime;
                }
                bagList.push(itemData);
            }
        }
        return bagList;
    }

    //
    onBtnGoToExChange(){
        UIMgr.getInstance().showLobbyExchange();
    }

}

