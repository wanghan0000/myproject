import { _decorator, Node, instantiate, Prefab, Sprite,  Label, Button, EventHandler, Tween, tween, UITransform, Size, sp,  v3, Skeleton } from 'cc';
import { AudioMgr } from '../../../ScriptCore/audio/AudioMgr';
import { LobbyAudioCfg } from '../../../ScriptCore/audio/LobbyAudioCfg';
import { DB_Shop1 } from '../../../ScriptCore/config/db_shop1';
import { BagData } from '../../../ScriptCore/data/BagData';
import { RedDotData } from '../../../ScriptCore/data/RedDotData';
import { ShopData } from '../../../ScriptCore/data/ShopData';
import { UserData } from '../../../ScriptCore/data/UserData';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { ShopNowLocation } from '../../../ScriptCore/Lobby/Scripts/gameconfig/GameConst';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { FuncExtend } from '../../../ScriptCore/panda/utils/FuncExtend';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import shop from '../../../ScriptCore/protocol/shop.js';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import ResourceHelper from '../common/helper/ResourceHelper';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenUIMgr } from '../TienlenUIMgr';
const { ccclass, property } = _decorator;

@ccclass('UITienlenShop')
export class UITienlenShop extends UIScreen {
    start() {

    }




    private initTag:string = "";
    onShow(tag:string) {
        this.initTag = tag;
        EventMgr.getInstance().addEventListener(EventName.SC_SHOPINFO, this.onShopInfoList, this);
        EventMgr.getInstance().addEventListener(EventName.SC_SHOP_VCPAYSHOP, this.onVcPlayShop, this);
        EventMgr.getInstance().addEventListener(EventName.SC_SHOP_ADLOOKED,this.onAdLooked,this);

        //后台增加金币的时候界面上的金币要发生改变
        EventMgr.getInstance().addEventListener(EventName.SC_USER_GOLD_CHANGE,this.updateGoldAndDiamond,this);
        console.log("发送获取消息-------商城的消息");
        this.doGetShopInfoList();
        this.updateGoldAndDiamond();

        //this.onShopInfoList();
    }

    //更新金币数和钻石数量
    updateGoldAndDiamond(){
        this.node.getChildByName("topbar").getChildByName("goldicon").getChildByName("val").getComponent(Label).string = Utils.cvtToKMB(UserData.getInstance().getCoin())
        this.node.getChildByName("topbar").getChildByName("diamondicon").getChildByName("val").getComponent(Label).string = Utils.cvtToKMB(UserData.getInstance().getDiamond());
        //vcard的数量更新  getVCardCnt
        this.node.getChildByName("topbar").getChildByName("vcardicon").getChildByName("val").getComponent(Label).string = Utils.cvtToKMB(BagData.getInstance().getVCardCnt());
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
                FuncExtend.warn(this.btnGold,180/2 -30,54/2-10);
            }else{
                FuncExtend.clearnWarn(this.btnGold);
            }
    
            if(diamondRedDot){
                FuncExtend.warn(this.btnDiamond,180/2-30,54/2-10);
            }else{
                FuncExtend.clearnWarn(this.btnDiamond);
            }
    
            if(goldRedDot || diamondRedDot){
                //RedDotData.getInstance()
            }else{
                RedDotData.getInstance().resetRedDotByShop(ShopNowLocation.TienLen_location);
            }
    
        }


    doGetShopInfoList() {
        console.log("===发送消息=====");
        let pack = new shop.shop.CSShopInfo();
        pack.NowLocation = ShopNowLocation.TienLen_location;
        SocketMgr.send(shop.shop.SPacketID.PACKET_CS_SHOP_INFO, {});
    }


    //1:标识金币 标签页下的数据  2:标识 钻石下的标签页数据 
    private curSelectedPage: number = 1;

    private shopInfoList: shop.shop.ShopInfo[] = [];
    //商城的列表数据
    onShopInfoList() {
        this.shopInfoList = ShopData.getInstance().getShopListByLocation(ShopNowLocation.TienLen_location);
        if(this.shopInfoList == null){
            this.doGetShopInfoList();
        }else{
            this.initTabBtn();
            if(this.initTag == "2"){
                this.onBtnDiamond(null,null,true);
            }else{
                this.onBtnGoldClick(null,null,true);
            }
            
        }
    }

    private btnGold: Node = null;
    private btnDiamond: Node = null;
    private btnItem:Node = null;
    //初始化 标签
    private initTabBtn(): void {
        this.btnGold = this.node.getChildByName("left").getChildByName("btngold");
        this.btnDiamond = this.node.getChildByName("left").getChildByName("btndiamond");
        this.btnItem = this.node.getChildByName("left").getChildByName("btnitem");
    }
    private curTabStr:string = "";
    //金币选项卡的选中
    onBtnGoldClick(evt:Event,customData:string,ignoreSodun:boolean = false) {
        if(!ignoreSodun){
            AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        }
        
        this.curTabStr = "gold";
        this.btnGold.getChildByName("selected").active = true;
        this.btnGold.getChildByName("noselected").active = false;
        this.btnGold.getComponent(Button).interactable = false;

        this.btnDiamond.getChildByName("selected").active = false;
        this.btnDiamond.getChildByName("noselected").active = true;
        this.btnDiamond.getComponent(Button).interactable = false;

        this.btnItem.getChildByName("selected").active = false;
        this.btnItem.getChildByName("noselected").active = true;
        this.btnItem.getComponent(Button).interactable = false;

        this.btnGold.getChildByName("selected").getComponent(sp.Skeleton).setAnimation(0,"dakai",false);
        
        this.btnGold.getChildByName("selected").getComponent(sp.Skeleton).setCompleteListener(()=>{
            this.btnGold.getChildByName("selected").getComponent(sp.Skeleton).setAnimation(0,"idle",true);
            this.btnGold.getChildByName("selected").getComponent(sp.Skeleton).setCompleteListener(null);
            this.btnDiamond.getComponent(Button).interactable = true;
            this.btnItem.getComponent(Button).interactable = true;
        });
        
        this.initContent(1);
    }

    onBtnDiamond(evt:Event,customData:string,ignoreSodun:boolean = false) {
        if(!ignoreSodun){
            AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        }
        
        this.curTabStr = "diamond";
        this.btnGold.getChildByName("selected").active = false;
        this.btnGold.getChildByName("noselected").active = true;
        this.btnGold.getComponent(Button).interactable = false;

        this.btnDiamond.getChildByName("selected").active = true;
        this.btnDiamond.getChildByName("noselected").active = false;
        this.btnDiamond.getComponent(Button).interactable = false;

        this.btnItem.getChildByName("selected").active = false;
        this.btnItem.getChildByName("noselected").active = true;
        this.btnItem.getComponent(Button).interactable = false;

        this.btnDiamond.getChildByName("selected").getComponent(sp.Skeleton).setAnimation(0,"dakai",false);

        this.btnDiamond.getComponent(Button).interactable = false;
        this.btnDiamond.getChildByName("selected").getComponent(sp.Skeleton).setCompleteListener(()=>{
            this.btnDiamond.getChildByName("selected").getComponent(sp.Skeleton).setAnimation(0,"idle",true);
            this.btnDiamond.getChildByName("selected").getComponent(sp.Skeleton).setCompleteListener (null);

            this.btnGold.getComponent(Button).interactable = true;
            this.btnItem.getComponent(Button).interactable = true;
        });

        this.initContent(2);
    }

    onBtnSuipian(evt:Event,customData:string,ignoreSodun:boolean = false){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.curTabStr = "suipian";
        this.btnGold.getChildByName("selected").active = false;
        this.btnGold.getChildByName("noselected").active = true;
        this.btnGold.getComponent(Button).interactable = false;

        this.btnDiamond.getChildByName("selected").active = false;
        this.btnDiamond.getChildByName("noselected").active = true;
        this.btnDiamond.getComponent(Button).interactable = false;

        this.btnItem.getChildByName("selected").active = true;
        this.btnItem.getChildByName("noselected").active = false;
        this.btnItem.getComponent(Button).interactable = false;

        this.btnItem.getChildByName("selected").getComponent(sp.Skeleton).setAnimation(0,"dakai",false);
        this.btnItem.getComponent(Button).interactable = false;
        this.btnItem.getChildByName("selected").getComponent(sp.Skeleton).setCompleteListener(()=>{
            this.btnItem.getChildByName("selected").getComponent(sp.Skeleton).setAnimation(0,"idle",true);
            this.btnItem.getChildByName("selected").getComponent(sp.Skeleton).setCompleteListener(null);

            this.btnGold.getComponent(Button).interactable = true;
            this.btnDiamond.getComponent(Button).interactable = true;
        });

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
                    dataList.push(this.shopInfoList[i]);
                }
            }
        } else if (ty == 2) {
            for (let i = 0; i < this.shopInfoList.length; i++) {
                let config = DB_Shop1.getInstance().pool.get(this.shopInfoList[i].Id);
                if (config.Page == 2) {
                    dataList.push(this.shopInfoList[i]);
                }
            }
        }else if(ty == 3){
            console.log("============================");
            console.log(this.shopInfoList);
            console.log("============================");
            for (let i = 0; i < this.shopInfoList.length; i++) {
                let config = DB_Shop1.getInstance().pool.get(this.shopInfoList[i].Id);
                if (config.Page == 3) {
                    dataList.push(this.shopInfoList[i] as shop.shop.ShopInfo);
                }
            }
        }
        let itemWidth = 280;
        let itemHeight = 530;
        //不用排序 服务器已经排序好了
        let content = this.node.getChildByName("ScrollView").getChildByName("view").getChildByName("content");
        content.destroyAllChildren();
        for (let i = 0; i < dataList.length; i++) {
            let pb = await ResourceHelper.loadResInAB(TienlenDefine.ABName, "prefab/shop/ShopItemGold", Prefab);
            let item = instantiate(pb);

            let posx = i * itemWidth + itemWidth / 2;
            let posy = -280;
            item.setPosition(posx, posy);
            this.allItems.push({ id: dataList[i].Id, item: item });
            content.addChild(item);
            
            this.initItemView(item, dataList[i], i, ty);
        }
        content.getComponent(UITransform).contentSize = new Size(dataList.length * itemWidth,580);

        //判断是否有红点没有
        this.onChkRedNotify();
    }


    //更新道具上的剩余时间
    update(deltaTime: number) {
        // if(this.shopInfoList != null && this.shopInfoList.length >0){
        //     for(let i = 0;i<this.shopInfoList.length;i++){
        //         let config = DB_Shop1.getInstance().pool.get(this.shopInfoList[i].Id);
        //         if (config.Ad ==1 && this.shopInfoList[i].RemainingTime >0 && 
        //             this.shopInfoList[i].AdReceiveNum <  config.RepeatTimes){
        //             this.shopInfoList[i].RemainingTime = this.shopInfoList[i].RemainingTime - deltaTime;
        //         }
        //     }
        // }
    }

    //初始化 每一项的数据
    private async initItemView(item: Node, data: shop.shop.ShopInfo, idx: number = 0, ty: number = 1) {
        let initItemContent = async function(){
            //图片显示
            let icon = item.getChildByName("icon");
            let itemSp = item.getChildByName("iconsp");
            icon.active = false;
            itemSp.active = false;
            //标题   这里现在要计算 老的数值和加成后的数据

            let config = DB_Shop1.getInstance().pool.get(data.Id);
            let addital = config.Added + data.RoleAdded + data.PetAdded;

            let allmoney = Math.floor( config.Amount/100 * addital + config.Amount );
            //原始的价格
            let yuanTxt = item.getChildByName("title").getChildByName("yuan").getChildByName("yuanprice");
            yuanTxt.getComponent(Label).string = Utils.cvtNumberToThousand(config.Amount).toString();

            //新的价格
            let allMoneyTxt = item.getChildByName("title").getChildByName("money");
            allMoneyTxt.getComponent(Label).string = Utils.cvtNumberToThousand(allmoney).toString();
            allMoneyTxt.scale = v3(1,1,1);


            let freeTagNode = item.getChildByName("freetag");
            let addtagNode = item.getChildByName("layout").getChildByName("addtag");
            let roleaddtag = item.getChildByName("layout").getChildByName("roleaddtag");
            freeTagNode.active = false;
            addtagNode.active = false;
            roleaddtag.active = false;

            if(config.Added >0){
                addtagNode.active = true;
                addtagNode.getChildByName("valtxt").getComponent(Label).string = `+${config.Added}%`;
            }
            //判断角色加成有没有
            if(data.RoleAdded >0){
                roleaddtag.active = true;
                roleaddtag.getChildByName("valtxt").getComponent(Label).string = `+${data.RoleAdded}%`;
                //这里还要判定当前角色是男还是女的
                if (UserData.getInstance().getRoleSex() ==  0){
                    roleaddtag.getChildByName("headmale").active = false;
                    roleaddtag.getChildByName("headfemale").active = true;
                }else if(UserData.getInstance().getRoleSex() == 1){
                    roleaddtag.getChildByName("headmale").active = true;
                    roleaddtag.getChildByName("headfemale").active = false;
                }
            }


            //按钮上的消耗
            // 1，金币
            // 2，钻石
            // 3，美金
            // 3，柬埔寨币

            if (config.Ad == 1) {
                //可以通过看广告获取 对应的奖励
                freeTagNode.active = true;
                //免费的标签
                let mflbl = item.getChildByName("btn").getChildByName("Layout").getChildByName("lbl");
                mflbl.active = false;
                //多少钱的标签
                let txtcnt = item.getChildByName("btn").getChildByName("Layout").getChildByName("txtcnt");
                txtcnt.active = false;
                let cishu = item.getChildByName("btn").getChildByName("Layout").getChildByName("cishu");
                cishu.active = false;
                // let layout = item.getChildByName("btn").getChildByName("Layout");
                // Tween.stopAllByTarget(layout);
                Tween.stopAllByTarget(txtcnt);
                if(data.AdReceiveNum < config.RepeatTimes){
                    let currentTime = Utils.getTimeStamp();
                    let coolingTime = config.CoolingTime[data.AdReceiveNum];
                    if (currentTime >= data.LastLookTime + coolingTime) {
                        mflbl.active = true;
                    } else {
                        //item.getChildByName("btn").getChildByName("Layout").getChildByName("lbl").getComponent(Label).string = Utils.cvtSecondToTimeFormat(data.LastLookTime + coolingTime - currentTime);
                        txtcnt.getComponent(Label).string = Utils.cvtSecondToTimeFormat(data.LastLookTime + coolingTime - currentTime);
                        txtcnt.active = true;
                        Tween.stopAllByTarget(txtcnt);
                        tween(txtcnt).delay(1).call(() => {
                            let cTime = Utils.getTimeStamp();
                            if (cTime >= data.LastLookTime + coolingTime) {
                                mflbl.active = true;
                                txtcnt.active = false;
                                Tween.stopAllByTarget(txtcnt);
                            } else {
                                console.log("倒计时计算时间 ==========");
                                mflbl.active = false;
                                txtcnt.active = true;
                                txtcnt.getComponent(Label).string = Utils.cvtSecondToTimeFormat(data.LastLookTime + coolingTime - cTime);
                            }

                        }).union().repeatForever().start();
                    }
                }else{
                    cishu.active = true;
                }
                

            } else {
                let atlas = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/lobby_plist");
                let mflbl = item.getChildByName("btn").getChildByName("Layout").getChildByName("lbl");
                mflbl.active = false;
                //多少钱的标签
                let txtcnt = item.getChildByName("btn").getChildByName("Layout").getChildByName("txtcnt");
                txtcnt.active = false;
                let cishu = item.getChildByName("btn").getChildByName("Layout").getChildByName("cishu");
                cishu.active = false;

                if (config.Consume == 2) {
                    //钻石
                    txtcnt.active = true;
                    item.getChildByName("btn").getChildByName("Layout").getChildByName("icon").getComponent(Sprite).spriteFrame = atlas.getSpriteFrame("lobby_money_diamond");
                    txtcnt.getComponent(Label).string = Utils.cvtNumberToThousand(config.ConsumptionAmount);

                }else if(config.Consume == 1) {
                    txtcnt.active = true;
                    item.getChildByName("btn").getChildByName("Layout").getChildByName("icon").getComponent(Sprite).spriteFrame = atlas.getSpriteFrame("lobby_money_gold");
                    txtcnt.getComponent(Label).string = Utils.cvtNumberToThousand(config.ConsumptionAmount);
                }
                else {
                    //真实的钱
                    txtcnt.active = true;
                    item.getChildByName("btn").getChildByName("Layout").getChildByName("icon").getComponent(Sprite).spriteFrame = I18nMgr.getInstance().getTienlenSpriteFrameByLanKey("tienlen_shop_left_money");
                    let consumeLabel = `$${config.ConsumptionAmount}`;
                    txtcnt.getComponent(Label).string = consumeLabel;
                }
            }


            if(ty == 1){
            // let spine = await ResMgr.getInstance().lazyLoadySpine("Lobby/ani/shop/lobby_shop_gold_ani");
            // let skeletion = icon.getComponent(sp.Skeleton);
            // skeletion.skeletonData = spine;
            // skeletion.animation = (idx+1).toString();
            // icon.active = true;
            // icon.scale = v3(0.9,0.9,1);
            let icon = item.getChildByName("iconsp");
            icon.active = true;
            let iconSp = await ResMgr.getInstance().lazyLoadSpriteFrame("Tienlen/rawRes/shop/tienlen_shop_jinbi_"+idx);
            icon.getComponent(Sprite).spriteFrame = iconSp;
            allMoneyTxt.scale = v3(0.7,0.7,1);
        
            }else if(ty ==2){
                // let spine = await ResMgr.getInstance().lazyLoadySpine("Lobby/ani/shop/lobby_shop_diamond_ani");
                // let skeletion = icon.getComponent(sp.Skeleton);
                // skeletion.skeletonData = spine;
                // skeletion.animation = `shanguang${idx+1}`;
                // icon.active = true;
                // icon.scale = v3(0.9,0.9,1);
                let icon = item.getChildByName("iconsp");
                icon.active = true;
                let iconSp = await ResMgr.getInstance().lazyLoadSpriteFrame("Tienlen/rawRes/shop/tienlen_shop_zuanshi_"+idx);
                icon.getComponent(Sprite).spriteFrame = iconSp;
            }else if(ty == 3){

                let icon = item.getChildByName("iconsp");
                icon.active = true;
                let iconSp = await ResMgr.getInstance().lazyLoadSpriteFrame("Tienlen/rawRes/shop/tienlen_shop_"+config.ItemId);
                icon.getComponent(Sprite).spriteFrame = iconSp;
            }
        }

        item.getChildByName("icon").active = false;
        item.getChildByName("iconsp").active = false;
        item.getChildByName("iconspbg").active = false;
        item.getChildByName("title").active = false;
        item.getChildByName("btn").active = false;
        item.getChildByName("freetag").active = false;
        item.getChildByName("layout").active = false;
        //开始播放背景的入场动画
        let bgSpine = item.getChildByName("bgspine");
        bgSpine.getComponent(sp.Skeleton).setAnimation(0,"dakai",false);
        bgSpine.getComponent(sp.Skeleton).setCompleteListener(()=>{
            bgSpine.getComponent(sp.Skeleton).setAnimation(0,"idle",true);
        });
        this.scheduleOnce(()=>{
            initItemContent();
            item.getChildByName("icon").active = true;
            item.getChildByName("iconsp").active = true;
            item.getChildByName("iconspbg").active = true;
            item.getChildByName("title").active = true;
            item.getChildByName("btn").active = true;
            //item.getChildByName("freetag").active = true;
            item.getChildByName("layout").active = true;
            let clickEvent = new EventHandler();
            clickEvent.target = this.node;
            clickEvent.component = "UITienlenShop";
            clickEvent.handler = "onItemClick";
            clickEvent.customEventData = data.Id.toString();
            item.getComponent(Button).clickEvents.push(clickEvent);
        },10*0.016);      
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
        let config = DB_Shop1.getInstance().pool.get(data.Id);
        //发送兑换数据
        if (data != null) {
            if (config.Ad == 1) {
                let currentTime = Utils.getTimeStamp();
                let coolingTime = config.CoolingTime[data.AdReceiveNum];
                if ( data.AdReceiveNum < config.RepeatTimes && currentTime <= data.LastLookTime + coolingTime) {
                    //TienlenUIMgr.getInstance().AlertTxt("冷却时间未到");
                    TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("tienlen.coolingtimeTxt"));
                } else {
                    await UIMgr.getInstance().showWaiting();
                    let pack = new shop.shop.CSAdLooked();
                    pack.ShopId = data.Id;
                    console.log("请求兑换的消息");
                    SocketMgr.send(shop.shop.SPacketID.PACKET_CS_SHOP_ADLOOKED, pack);
                }
            } else {
                if(config.Consume == 2){
                    if (UserData.getInstance().getDiamond() < config.ConsumptionAmount){
                        //TienlenUIMgr.getInstance().AlertTxt("您的钻石不足,无法购买");
                        TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.zuanshibuzuTxt"));
                        return;
                    }
                }
                let pack = new shop.shop.CSVCPayShop();
                pack.ShopId = data.Id;
                await UIMgr.getInstance().showWaiting();
                SocketMgr.send(shop.shop.SPacketID.PACKET_CS_SHOP_VCPAYSHOP, pack);
            }

        }
    }

    //观看广告的消息回调
    private onAdLooked(data:shop.shop.SCAdLooked){
        UIMgr.getInstance().clearWaiting();
        if(data.RetCode ==0 ){
            let list: { id: number, cnt: number }[] = [];
            //list.push({ id: data.ShopInfo.Type, cnt: data.ShopInfo.Amount });
            let config = DB_Shop1.getInstance().pool.get(data.ShopInfo.Id);
            if(config.Type == 1){
                let dropCoin = config.Amount;
                let add = config.Added + data.ShopInfo.PetAdded + data.ShopInfo.RoleAdded;
                if(add >0){
                    dropCoin = Math.floor( config.Amount/100 * add + config.Amount );
                }
                list.push({ id: 1, cnt: dropCoin });
            }else if(config.Type == 2 ){
                let dropDiamond = config.Amount;
                let add = config.Added + data.ShopInfo.PetAdded + data.ShopInfo.RoleAdded;
                if(add >0){
                    dropDiamond = Math.floor( config.Amount/100 * add + config.Amount );
                }
                list.push({ id: 2, cnt: dropDiamond });
            }else if(config.Type == 3){
                let dropItem = config.Amount;
                let add = config.Added + data.ShopInfo.PetAdded + data.ShopInfo.RoleAdded;
                if(add >0){
                    dropItem = Math.floor( config.Amount/100 * add + config.Amount );
                }
                list.push({ id:  config.ItemId, cnt: dropItem });
            }
            this.updateGoldAndDiamond();
            EventMgr.getInstance().dispatchEvent(EventName.SC_Player_Coin_Change);

            console.log(list);
            TienlenUIMgr.getInstance().showAwardGet(list)
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
                    if(this.curTabStr == "diamond"){
                        ty = 2;
                    }
                    this.initItemView(this.allItems[idx].item, data.ShopInfo as shop.shop.ShopInfo, 0, ty);

                    break;
                }
            }
        }else{
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.lingqushibaiTxt"));
        }
        //判断是否有红点
        this.onChkRedNotify();
    }




    //兑换成功或者失败的回调
    private onVcPlayShop(data: shop.shop.SCVCPayShop) {
        console.log("兑换成功的消息回调");
        console.log(data);
        console.log("兑换成功的消息回调");
        UIMgr.getInstance().clearWaiting();
        if(data.RetCode == 0){
            let list: { id: number, cnt: number }[] = [];
            //list.push({ id: data.ShopInfo.Type, cnt: data.ShopInfo.Amount });
            let config = DB_Shop1.getInstance().pool.get(data.ShopInfo.Id);
            if(config.Type == 1){
                let dropCoin = config.Amount;
                let add = config.Added + data.ShopInfo.PetAdded + data.ShopInfo.RoleAdded;
                if(add >0){
                    dropCoin = Math.floor( config.Amount /100 * add + config.Amount );
                }
                //UserData.getInstance().addCoin(dropCoin);

                //UserData.getInstance().addDiamond(-data.ShopInfo.ConsumptionAmount);
                console.log(UserData.getInstance().getCoin());
                list.push({ id: 1, cnt: dropCoin });
            }else if(config.Type == 2 ){
                let dropDiamond = config.Amount;
                let add = config.Added + data.ShopInfo.PetAdded + data.ShopInfo.RoleAdded;
                if(add >0){
                    dropDiamond = Math.floor( config.Amount /100 * add + config.Amount );
                }
                list.push({ id: 2, cnt: dropDiamond });
                //UserData.getInstance().addDiamond(dropDiamond);
            }else if(config.Type == 3){
                let dropItem = config.Amount;
                let add = config.Added + data.ShopInfo.PetAdded + data.ShopInfo.RoleAdded;
                if(add >0){
                    dropItem = Math.floor( config.Amount /100 * add + config.Amount );
                }
                list.push({ id: config.ItemId, cnt: dropItem });
            }
            this.updateGoldAndDiamond();
            EventMgr.getInstance().dispatchEvent(EventName.SC_Player_Coin_Change);

            TienlenUIMgr.getInstance().showAwardGet(list);
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
            TienlenUIMgr.getInstance().AlertTxt("兑换失败");
        }
        
    }

    private updateItemCollingTime(item: Node, data: shop.shop.ShopInfo): void {
        let config = DB_Shop1.getInstance().pool.get(data.Id);
        if (config.Ad == 1) {
            let mflbl = item.getChildByName("btn").getChildByName("Layout").getChildByName("lbl");
            mflbl.active = false;
            //多少钱的标签
            let txtcnt = item.getChildByName("btn").getChildByName("Layout").getChildByName("txtcnt");
            txtcnt.active = false;
            let cishu = item.getChildByName("btn").getChildByName("Layout").getChildByName("cishu");
            cishu.active = false;
            Tween.stopAllByTarget(txtcnt);

            let currentTime = Utils.getTimeStamp();
            let coolingTime = config.CoolingTime[data.AdReceiveNum];

            if (data.AdReceiveNum < config.RepeatTimes){
                if (currentTime >= data.LastLookTime + coolingTime) {
                    //免费领取
                    mflbl.active = true;
                } else {
    
                    txtcnt.getComponent(Label).string = Utils.cvtSecondToTimeFormat(data.LastLookTime + coolingTime - currentTime);
                    txtcnt.active = true;
                    Tween.stopAllByTarget(txtcnt);
                    tween(txtcnt).delay(1).call(() => {
                        let cTime = Utils.getTimeStamp();
                        if (cTime >= data.LastLookTime + coolingTime) {
                            mflbl.active = true;
                            txtcnt.active = false;
                            Tween.stopAllByTarget(txtcnt);
                            console.log("免费了");
                        } else {
                            mflbl.active = false;
                            console.log("倒计时---");
                            txtcnt.active = true;
                            txtcnt.getComponent(Label).string = Utils.cvtSecondToTimeFormat(data.LastLookTime + coolingTime - cTime);
                        }
    
                    }).union().repeatForever().start();
                }
            }else{
                cishu.active = true;
            }
            
        }
    }


    onHide() {
        EventMgr.getInstance().removeByTarget(this);
    }


    onBtnBackClick() {
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.closeSelf();
    }


    //打开商城的购买记录界面
    onBtnShopLog(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        TienlenUIMgr.getInstance().showTienLenShopLog();
    }


}

