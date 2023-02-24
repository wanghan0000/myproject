import { _decorator, Component, Node, instantiate, UITransform, Size, EventHandler, Label, Button, Tween, tween, Sprite, Skeleton, SkeletalAnimation, sp, Toggle, EAxisDirection } from 'cc';
import { AudioMgr } from '../../../audio/AudioMgr';
import { LobbyAudioCfg } from '../../../audio/LobbyAudioCfg';
import { DB_Shop1 } from '../../../config/db_shop1';
import { RedDotData } from '../../../data/RedDotData';
import { ShopData } from '../../../data/ShopData';
import { UserData } from '../../../data/UserData';
import { EventMgr } from '../../../events/eventmgr';
import { EventName } from '../../../events/EventName';
import { I18nMgr } from '../../../i18n/I18nMgr';
import { SocketMgr } from '../../../panda/net/SocketMgr';
import { FuncExtend } from '../../../panda/utils/FuncExtend';
import { Utils } from '../../../panda/utils/Utils';
import  shop  from '../../../protocol/shop.js';
import { ResMgr } from '../../../UIFrame/ResMgr';
import { UIScreen } from '../../../UIFrame/UIForm';
import { ShopNowLocation } from '../gameconfig/GameConst';
import { UIMgr } from '../UIMgr';
const { ccclass, property } = _decorator;

@ccclass('UIShop')
export class UIShop extends UIScreen {
    start() {

    }

    //更新道具上的剩余时间
    update(deltaTime: number) {
        // if(this.shopInfoList != null && this.shopInfoList.Infos.length >0){
        //     for(let i = 0;i<this.shopInfoList.Infos.length;i++){
        //         if (this.shopInfoList.Infos[i].Ad ==1 && this.shopInfoList.Infos[i].RemainingTime >0 && 
        //             this.shopInfoList.Infos[i].AdReceiveNum <  this.shopInfoList.Infos[i].RepeatTimes){
        //             this.shopInfoList.Infos[i].RemainingTime = this.shopInfoList.Infos[i].RemainingTime - deltaTime;
        //         }
        //     }
        // }
    }



    onShow(){
        this.doAdapter();
        this.initBarBtnState();
        this.initTabBtn();
        EventMgr.getInstance().addEventListener(EventName.SC_SHOPINFO, this.onShopInfoList, this);
        EventMgr.getInstance().addEventListener(EventName.SC_SHOP_VCPAYSHOP, this.onVcPlayShop, this);
        EventMgr.getInstance().addEventListener(EventName.SC_SHOP_ADLOOKED,this.onAdLooked,this);
        //this.onShopInfoList();
        this.doReqShopInfo();



    }



    private doAdapter(){
        let topBar = this.node.getChildByName("UITopbar");
        FuncExtend.adapterSafeAreRect(topBar);

        let allitemndoe = this.node.getChildByName("allitemndoe");
        FuncExtend.adapterSafeAreRect(allitemndoe);

        let scrollView = allitemndoe.getChildByName("ScrollView");
        FuncExtend.adapterSafeAreRect(scrollView);
    }

    onHide(){
        EventMgr.getInstance().removeByTarget(this);
    }

    //判定红点逻辑
    onChkRedNotify(){
        let goldRedDot = false;
        let diamondRedDot = false;
        //判定金币哪里是否应该有红点逻辑
        //判断钻石哪里是否应该有红点逻辑
        for(let i = 0;i<this.shopInfoList.length;i++){
            let data = this.shopInfoList[i];
            let config = DB_Shop1.getInstance().pool.get(data.Id);
            if(config.Ad == 1 && config.Type == 1){
                //金币
                let lastLookTime = data.LastLookTime;
                let curTime = Utils.getTimeStamp();
                if(data.AdReceiveNum < config.RepeatTimes && curTime >= lastLookTime  + config.CoolingTime[data.AdReceiveNum]){
                    goldRedDot = true;
                }
            }else if(config.Ad == 1 && config.Type == 2){
                //钻石
                let lastLookTime = data.LastLookTime;
                let curTime = Utils.getTimeStamp();
                if(data.AdReceiveNum < config.RepeatTimes && curTime >= lastLookTime + config.CoolingTime[data.AdLookedNum]){
                    diamondRedDot = true;
                }
            }
        }

        if(goldRedDot){
            FuncExtend.warn(this.btnGold,180/2 -10,54/2-10);
        }else{
            FuncExtend.clearnWarn(this.btnGold);
        }

        if(diamondRedDot){
            FuncExtend.warn(this.btnDiamond,180/2-10,54/2-10);
        }else{
            FuncExtend.clearnWarn(this.btnDiamond);
        }

        if(goldRedDot || diamondRedDot){
            //RedDotData.getInstance()
        }else{
            RedDotData.getInstance().resetRedDotByShop(ShopNowLocation.Lobby_Location);
        }

    }

    //发送请求 获取商城列表数据
    doReqShopInfo(){
        let pack = new shop.shop.CSShopInfo();
        //pack.NowLocation = ShopNowLocation.Lobby_Location;
        SocketMgr.send(shop.shop.SPacketID.PACKET_CS_SHOP_INFO, pack);
    }


    private shopInfoList: shop.shop.ShopInfo[] = null;
    //商城的列表数据
    onShopInfoList() {
        this.shopInfoList = ShopData.getInstance().getShopListByLocation(ShopNowLocation.Lobby_Location);
        if(this.shopInfoList == null){
            this.doReqShopInfo();
        }else{
            this.onTabBtnClick("gold",true);
            this.initContent(1);
        }
    }

    //兑换成功或者失败的回调
    private onVcPlayShop(data: shop.shop.SCVCPayShop) {
        console.log("回调关闭掉 等待框xxxx");
        UIMgr.getInstance().clearWaiting();
        console.log("兑换成功的消息回调");
        console.log(data);
        console.log("兑换成功的消息回调");
        if(data.RetCode == shop.shop.OpResultCode.OPRC_Sucess){
            let list: { id: number, cnt: number }[] = [];
            //list.push({ id: data.ShopInfo.Type, cnt: data.ShopInfo.Amount });
            let config = DB_Shop1.getInstance().pool.get(data.ShopInfo.Id);
            if(config.Type == 1){
                let addital = config.Added + data.ShopInfo.RoleAdded + data.ShopInfo.PetAdded;
                //let allmoney = Math.floor( config.Amount * (1 + addital/100) );
                let allmoney = Math.floor( config.Amount + config.Amount /100 * addital );
                list.push({ id: 1, cnt: allmoney });
            }else if(config.Type == 2 ){
                let addital = config.Added + data.ShopInfo.RoleAdded + data.ShopInfo.PetAdded;
                //let allmoney = Math.floor( config.Amount * (1 + addital/100) );
                let allmoney = Math.floor( config.Amount + config.Amount /100 * addital );
                list.push({ id: 2, cnt: allmoney });
                //UserData.getInstance().addDiamond(dropDiamond);
            }else if(config.Type == 3){
                let addital = config.Added + data.ShopInfo.RoleAdded + data.ShopInfo.PetAdded;
                //let allmoney = Math.floor( config.Amount * (1 + addital/100) );
                let allmoney = Math.floor( config.Amount + config.Amount /100 * addital );
                list.push({ id: config.ItemId, cnt: allmoney });
            }
            //this.updateGoldAndDiamond();
            //EventMgr.getInstance().dispatchEvent(EventName.SC_Player_Coin_Change);
            //通用的奖励掉落
            UIMgr.getInstance().showLobbyAwardGet(list);
            for (let idx = 0; idx < this.shopInfoList.length; idx++) {
                if (this.shopInfoList[idx].Id == data.ShopInfo.Id) {
                    this.shopInfoList[idx] = data.ShopInfo as shop.shop.ShopInfo;
                    break;
                }
            }
            for (let idx = 0; idx < this.allItems.length; idx++) {
                if (this.allItems[idx].id == data.ShopInfo.Id) {
                    this.updateItemCollingTime(this.allItems[idx].item, data.ShopInfo as shop.shop.ShopInfo);
                    break;
                }
            }
        }else{
            //UIMgr.getInstance().AlertTxt("兑换失败");
            UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.duihuanshbai"))
        }
        
    }

    //观看广告的消息回调
    private onAdLooked(data:shop.shop.SCAdLooked){
        console.log("看广告领取的消息回调");
        console.log(data);
        console.log("看广告领取的消息回调");
        
        UIMgr.getInstance().clearWaiting();
        if(data.RetCode ==0 ){
            let list: { id: number, cnt: number }[] = [];
            //list.push({ id: data.ShopInfo.Type, cnt: data.ShopInfo.Amount });
            let config = DB_Shop1.getInstance().pool.get(data.ShopInfo.Id);
            if(config.Type == 1){
                let addital = config.Added + data.ShopInfo.RoleAdded + data.ShopInfo.PetAdded;
                //let allmoney = Math.floor( config.Amount * (1 + addital/100) );
                let allmoney = Math.floor( config.Amount + config.Amount /100 * addital );
                //UserData.getInstance().addCoin(dropCoin);
                list.push({ id: 1, cnt: allmoney });
            }else if(config.Type == 2 ){
                let addital = config.Added + data.ShopInfo.RoleAdded + data.ShopInfo.PetAdded;
                //let allmoney = Math.floor( config.Amount * (1 + addital/100) );
                let allmoney = Math.floor( config.Amount + config.Amount / 100 * addital );
                list.push({ id: 2, cnt: allmoney });
                //UserData.getInstance().addDiamond(dropDiamond);
            }else if(config.Type == 3){

                let addital = config.Added + data.ShopInfo.RoleAdded + data.ShopInfo.PetAdded;
                //let allmoney = Math.floor( config.Amount * (1 + addital/100) );
                let allmoney = Math.floor( config.Amount + config.Amount /100 * addital );
                list.push({ id: config.ItemId, cnt: allmoney });
            }
            //this.updateGoldAndDiamond();
            EventMgr.getInstance().dispatchEvent(EventName.SC_Player_Coin_Change);

            console.log(list);

            //通用的奖励获得界面
            //TienlenHelper.showAwardGet(list);
            UIMgr.getInstance().showLobbyAwardGet(list);
            for (let idx = 0; idx < this.shopInfoList.length; idx++) {
                if (this.shopInfoList[idx].Id == data.ShopInfo.Id) {
                    this.shopInfoList[idx] = data.ShopInfo as shop.shop.ShopInfo;
                    break;
                }
            }
            for (let idx = 0; idx < this.allItems.length; idx++) {
                if (this.allItems[idx].id == data.ShopInfo.Id) {
                    this.updateItemCollingTime(this.allItems[idx].item, data.ShopInfo as shop.shop.ShopInfo);
                    let ty = 1;
                    if(this.curTabBtnTag == "diamond"){
                        ty = 2;
                    }
                    this.initItemView(this.allItems[idx].item, data.ShopInfo as shop.shop.ShopInfo, 0, ty);
                    break;
                }
            }
        }else{
            UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.lingqushibaiTxt"));
        }
        //判断是否有红点
        this.onChkRedNotify();
    }


    private updateItemCollingTime(item: Node, data: shop.shop.ShopInfo): void {
        let config = DB_Shop1.getInstance().pool.get(data.Id);
        if (config.Ad == 1) {
            
            let index = data.AdReceiveNum;
            let currentTime = Utils.getTimeStamp();
            let coolingTime = config.CoolingTime[index];
            if (currentTime >= data.LastLookTime + coolingTime) {
                //item.getChildByName("cost").getChildByName("costtxt").getComponent(Label).string = "免费领取";
                item.getChildByName("cost").getChildByName("costtxt").getComponent(Label).string = I18nMgr.getInstance().getStringByKey("lobby.freegettxt");
            } else {
                let lbl = item.getChildByName("cost").getChildByName("costtxt")
                lbl.getComponent(Label).string = this.getCollingTimeStr( data.LastLookTime + coolingTime - currentTime   );
                Tween.stopAllByTarget(lbl);
                tween(lbl).delay(1).call(() => {
                    let cTime = Utils.getTimeStamp();
                    
                    if (cTime >= data.LastLookTime + coolingTime) {
                        //lbl.getComponent(Label).string = "免费领取";
                        lbl.getComponent(Label).string = I18nMgr.getInstance().getStringByKey("lobby.freegettxt");
                        Tween.stopAllByTarget(lbl);
                    } else {
                        lbl.getComponent(Label).string = this.getCollingTimeStr(data.LastLookTime + coolingTime - currentTime);
                    }

                }).union().repeatForever().start();
            }
        }
    }




    private btnGold:Node = null;
    private btnDiamond:Node = null;
    private btnItem:Node = null;
    private curTabBtnTag = "gold";
    //初始化 标签
    private initTabBtn(): void {
        this.btnGold = this.node.getChildByName("allitemndoe").getChildByName("top").getChildByName("btngold");
        this.btnDiamond = this.node.getChildByName("allitemndoe").getChildByName("top").getChildByName("btndiamond");
        //大厅中现在暂时不考虑道具
        this.btnItem = this.node.getChildByName("allitemndoe").getChildByName("top").getChildByName("btnitem");
    }

    //点击金币标签页
    onBtnGoldClick(){
        this.onTabBtnClick("gold");
        this.initContent(1);
    }
    //点击钻石标签页
    onBtnDiamondClick(){
        this.onTabBtnClick("diamond");
        this.initContent(2);
    }
    //点击道具标签页
    onBtnItemClick(){
        this.onTabBtnClick("item");
        this.initContent(3);
    }
    private allItems: { id: number, item: Node }[] = [];
    async initContent(ty: number) {
        this.allItems = [];
        let dataList: shop.shop.ShopInfo[] = [];
        if (ty == 1) {
            for (let i = 0; i < this.shopInfoList.length; i++) {
                let config = DB_Shop1.getInstance().pool.get(this.shopInfoList[i].Id);
                if (config.Page == 1) {
                    dataList.push(this.shopInfoList[i] as shop.shop.ShopInfo);
                }
            }
        } else if (ty == 2) {
            for (let i = 0; i < this.shopInfoList.length; i++) {
                let config = DB_Shop1.getInstance().pool.get(this.shopInfoList[i].Id);
                if (config.Page == 2) {
                    dataList.push(this.shopInfoList[i] as shop.shop.ShopInfo);
                }
            }
        }else if(ty == 3){
            for (let i = 0; i < this.shopInfoList.length; i++) {
                let config = DB_Shop1.getInstance().pool.get(this.shopInfoList[i].Id);
                if (config.Page == 3) {
                    dataList.push(this.shopInfoList[i] as shop.shop.ShopInfo);
                }
            }
        }
        let itemWidth = 360;
        let itemHeight = 400;
        //不用排序 服务器已经排序好了
        
        let content = this.node.getChildByName("allitemndoe").getChildByName("ScrollView").getChildByName("view").getChildByName("content");
        content.destroyAllChildren();
        for (let i = 0; i < dataList.length; i++) {
            let pb =  ResMgr.getInstance().getPrefabByPath("Lobby/Prefabs/shop/shopitem");
            
            let item = instantiate(pb);
            let rowIdx = Math.floor(i / 2);
            let columnIdx = Math.floor(i % 2);
            let posx = columnIdx * itemWidth + itemWidth / 2;
            let posy = rowIdx * itemHeight + itemHeight / 2;
            item.setPosition(posx, -posy);
            this.allItems.push({ id: dataList[i].Id, item: item });
            content.addChild(item);
            
            this.initItemView(item, dataList[i], i, ty);
        }
        let allRows = Math.floor((dataList.length-1)/2) + 1;
        content.getComponent(UITransform).contentSize = new Size(780,allRows * itemHeight);

        //判断是否有红点没有
        this.onChkRedNotify();
    }


    //初始化 每一项的数据
    private async initItemView(item: Node, data: shop.shop.ShopInfo, idx: number = 0, ty: number = 1) {
        //图片显示
        let icon = item.getChildByName("item");
        
        // let name = data.Picture;
        // icon.getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteFrameByPath("Lobby/Textures/shop/lobby_shop_img/" + name);
        
        


        let config = DB_Shop1.getInstance().pool.get(data.Id);
        let titleLbl = item.getChildByName("moneytxt");
        let addital = config.Added + data.RoleAdded;
        //let allmoney = Math.floor( config.Amount * (1 + addital/100) );
        let allmoney = Math.floor( config.Amount + config.Amount/100 * addital );
        
        titleLbl.getComponent(Label).string = `${Utils.cvtNumberToThousand(allmoney)}`;
        
        //额外加成的暂时不计算在内
        if(addital >0){
            item.getChildByName("moneyoldtxt").active = true;
            item.getChildByName("moneyoldtxt").getComponent(Label).string = `${Utils.cvtNumberToThousand(config.Amount)}`;
        }else{
            item.getChildByName("moneyoldtxt").active = false;
        }

        //按钮上的消耗
        // 1，金币
        // 2，钻石
        // 3，美金
        // 3，柬埔寨币

        let freeTagNode = item.getChildByName("Layout").getChildByName("freetag")
        let addtagNode = item.getChildByName("Layout").getChildByName("addtag");
        let roleaddtag = item.getChildByName("Layout").getChildByName("roleaddtag");
        freeTagNode.active = false;
        addtagNode.active = false;
        roleaddtag.active = false;

        //系统加成要计算在内
        if(config.Added >0){
            addtagNode.active = true;
            addtagNode.getChildByName("valtxt").getComponent(Label).string = `+${config.Added}%`;
        }
        //判断角色加成有没有
        if(data.RoleAdded >0){
            roleaddtag.active = true;
            roleaddtag.getChildByName("valtxt").getComponent(Label).string = `+${data.RoleAdded}%`;
        }

        //宠物加成

        if (config.Ad == 1) {
            //可以通过看广告获取 对应的奖励
            // item.getChildByName("btn").active = false;
            // item.getChildByName("btnplay").active = true;
            freeTagNode.active = true;
            let smalltag = item.getChildByName("cost").getChildByName("smalltag");
            smalltag.active = true;
            smalltag.getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/shop/lobby_shop_plist").getSpriteFrame("lobby_shop_item_play");
            
            console.log("===初始化initView===");
            console.log(config);
            console.log("===初始化initView===");

            console.log(data);

            let lbl = item.getChildByName("cost").getChildByName("costtxt");
            Tween.stopAllByTarget(lbl);
            
            if(data.AdReceiveNum < config.RepeatTimes){

                let lastLookTime = data.LastLookTime;
                let curTime = Utils.getTimeStamp();
                console.log("curTime",curTime);
                console.log("lastLookTime",lastLookTime);
                console.log("config.CoolingTime[data.AdReceiveNum]",config.CoolingTime[data.AdReceiveNum]);
                console.log(curTime >= lastLookTime  + config.CoolingTime[data.AdReceiveNum]);
                if (curTime >= lastLookTime  + config.CoolingTime[data.AdReceiveNum]) {
                    //item.getChildByName("cost").getChildByName("costtxt").getComponent(Label).string = "免费领取";
                    item.getChildByName("cost").getChildByName("costtxt").getComponent(Label).string = I18nMgr.getInstance().getStringByKey("lobby.freegettxt");
                } else {
                    let lbl = item.getChildByName("cost").getChildByName("costtxt");
                    lbl.getComponent(Label).string = this.getCollingTimeStr(lastLookTime + config.CoolingTime[data.AdReceiveNum] - curTime);
                    Tween.stopAllByTarget(lbl);
                    tween(lbl).delay(1).call(() => {
                        let cTime = Utils.getTimeStamp();
                        if (cTime >= config.CoolingTime[data.AdReceiveNum] + lastLookTime ) {
                             //= "免费领取";
                             lbl.getComponent(Label).string = I18nMgr.getInstance().getStringByKey("lobby.freegettxt");
                            Tween.stopAllByTarget(lbl);
                        } else {
                            lbl.getComponent(Label).string = this.getCollingTimeStr(lastLookTime + config.CoolingTime[data.AdReceiveNum] - cTime);
                        }
    
                    }).union().repeatForever().start();
                }
            }else{
                item.getChildByName("cost").getChildByName("costtxt").getComponent(Label).string = I18nMgr.getInstance().getStringByKey("lobby.cishuyongwangTxt");
            }
            

        } else {
            let smalltag = item.getChildByName("cost").getChildByName("smalltag");
            
            let atlas = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/lobby_plist");
            if (config.Consume == 2) {
                //钻石
                smalltag.active = true;
                smalltag.getComponent(Sprite).spriteFrame = atlas.getSpriteFrame("lobby_money_diamond");

                let consumeLabel = `${config.ConsumptionAmount}`;
                item.getChildByName("cost").getChildByName("costtxt").getComponent(Label).string = consumeLabel;

            }else if(config.Consume == 1){
                smalltag.active = true;
                smalltag.getComponent(Sprite).spriteFrame = atlas.getSpriteFrame("lobby_money_diamond");
                let consumeLabel = `${config.ConsumptionAmount}`;
                item.getChildByName("cost").getChildByName("costtxt").getComponent(Label).string = consumeLabel;
            } else {
                //美金
                smalltag.active = false;
                //smalltag.getComponent(Sprite).spriteFrame = atlas.getSpriteFrame("lobby_money_diamond");
                let consumeLabel = `$ ${config.ConsumptionAmount}`;
                item.getChildByName("cost").getChildByName("costtxt").getComponent(Label).string = consumeLabel;
            }
            
        }


        //从这里开始就有 可能 是异步的了。
        if(ty == 1){
            //金币
            let spine = await ResMgr.getInstance().lazyLoadySpine("Lobby/ani/shop/lobby_shop_gold_ani");
            let skeletion = icon.getComponent(sp.Skeleton);
            skeletion.skeletonData = spine;
            skeletion.animation = (idx+1).toString();
            icon.active = true;

        }else if(ty == 2){
            //钻石
            let spine = await ResMgr.getInstance().lazyLoadySpine("Lobby/ani/shop/lobby_shop_diamond_ani");
            let skeletion = icon.getComponent(sp.Skeleton);
            skeletion.skeletonData = spine;
            skeletion.animation = `shanguang${idx+1}`;
            icon.active = true;
        }



        let clickEvent = new EventHandler();
        clickEvent.target = this.node;
        clickEvent.component = "UIShop";
        clickEvent.handler = "onItemClick";
        clickEvent.customEventData = data.Id.toString();
        item.getComponent(Button).clickEvents.push(clickEvent);
    }

    //单价执行购买或者兑换事件
    private async onItemClick(evt: Event, customData: string) {
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        let data: shop.shop.ShopInfo = null;
        for (let i = 0; i < this.shopInfoList.length; i++) {
            if (this.shopInfoList[i].Id.toString() == customData) {
                data = this.shopInfoList[i] as shop.shop.ShopInfo;
                break;
            }
        }
        
        //发送兑换数据
        if (data != null) {
            let config = DB_Shop1.getInstance().pool.get(data.Id);
            if (config.Ad == 1) {
                let coolingTime = config.CoolingTime[data.AdReceiveNum];
                console.log("点击领取免费的========");
                console.log(config);
                console.log(data);
                console.log("点击领取免费的========");
                let curTime = Utils.getTimeStamp();
                if (data.AdReceiveNum < config.RepeatTimes && curTime <= data.LastLookTime + coolingTime) {
                     UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.coolingtime"));
                }else if(data.AdReceiveNum >= config.RepeatTimes) {
                    UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.cishuyongwangTxt"))
                }else {
                    let pack = new shop.shop.CSAdLooked();
                    pack.ShopId = data.Id;
                    console.log("请求兑换的消息");
                    console.log(pack);
                    console.log("请求兑换的消息");
                    await UIMgr.getInstance().showWaiting();
                    SocketMgr.send(shop.shop.SPacketID.PACKET_CS_SHOP_ADLOOKED, pack);
                }
            } else {
                console.log("config=========");
                console.log(config);
                console.log(UserData.getInstance().getDiamond(),"xxxxx");
                console.log("config=========");
                if(config.Consume == 2){
                    if (UserData.getInstance().getDiamond() < config.ConsumptionAmount){
                        //UIMgr.getInstance().AlertTxt("您的钻石不足,无法购买");
                        UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.zuanshibuzuTxt"));
                        return;
                    }
                }
                await UIMgr.getInstance().showWaiting();
                let pack = new shop.shop.CSVCPayShop();
                pack.ShopId = data.Id;
                console.log("请求兑换的消息");
                SocketMgr.send(shop.shop.SPacketID.PACKET_CS_SHOP_VCPAYSHOP, pack);
            }

        }
    }

    //获取剩余时间的处理
    private getCollingTimeStr(second: number): string {

        second = parseInt(second.toString());
        let min =  Math.floor(second / 60);

        let minStr = "00";
        if (min < 10) {
            minStr = "0" + min;
        } else {
            minStr = min.toString();
        }
        let sec = Math.floor( (second - Math.floor(second / 60) * 60) );
        let secStr = "00";
        if (sec < 10) {
            secStr = "0" + sec;
        } else {
            secStr = sec.toString();
        }
        return `${minStr}:${secStr}`
    }

    //消费记录
    onBtnLogs(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        //UIMgr.getInstance().AlertTxt("消费记录暂未开启");
        UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.consulelognotopen"));
    }


    onTabBtnClick(tag:string,noAudio = false){
        if(!noAudio){
            AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        }
        if(this.curTabBtnTag == tag){
            return;
        }
        this.btnGold.getChildByName("select").active = tag == "gold";
        this.btnGold.getChildByName("normail").active = tag != "gold";

        this.btnDiamond.getChildByName("select").active = tag == "diamond";
        this.btnDiamond.getChildByName("normail").active = tag != "diamond";

        this.btnItem.getChildByName("select").active = tag == "item";
        this.btnItem.getChildByName("normail").active = tag != "item";

        this.curTabBtnTag = tag;
    }




    onBtnGame(){
        UIMgr.getInstance().showScreenLobby();
    }

    //自己背包 不处理
    onBtnBag(){
        UIMgr.getInstance().showLobbyBag();
    }


    //商城
    onBtnShop(){
        //UIMgr.getInstance().showLobbyShop();
    }

    //我的
    onBtnMe(){

    }


    //初始化按钮的状态
    private initBarBtnState(){
        let bottomBar = this.node.getChildByName("UILobbyBtm");
        bottomBar.getChildByName("ToggleGroup").getChildByName("Toggle3").getComponent(Toggle).isChecked = true;
        bottomBar.getChildByName("ToggleGroup").getChildByName("Toggle3").getComponent(Toggle).interactable = false;
    }
}

