import { _decorator, Component, Node, EditBox, EventTarget, Tween, tween, Label, Sprite, EventTouch } from 'cc';
import { AudioMgr } from '../../../ScriptCore/audio/AudioMgr';
import { LobbyAudioCfg } from '../../../ScriptCore/audio/LobbyAudioCfg';
import { DB_GameItem } from '../../../ScriptCore/config/db_gameitem';
import { BagData } from '../../../ScriptCore/data/BagData';
import { UserData } from '../../../ScriptCore/data/UserData';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import  bag  from '../../../ScriptCore/protocol/bag.js';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import TienlenHelper from '../TienlenHelper';
import { TienlenUIMgr } from '../TienlenUIMgr';
const { ccclass, property } = _decorator;

@ccclass('UITienlenBagSale')
export class UITienlenBagSale extends UIWindow {
    


    //当前的道具的数量
    private curData:bag.bag.ItemInfo = null;
    //默认当前数量为1 暂时不考虑 0 的情况
    private curCnt:number = 1;

    private editBox:EditBox;
    private btnDec:Node = null;
    private btnAdd:Node = null;
    onShow(data:bag.bag.ItemInfo){

        this.editBox = this.node.getChildByName("EditBox").getComponent(EditBox);
        this.editBox.string = this.curCnt.toString();
        this.curData = BagData.getInstance().getBagItemById(data.ItemId);
        EventMgr.getInstance().addEventListener(EventName.SC_ALL_BAG_USE,this.onSaleCallBack,this);

        this.initView();

        let btnDec = this.node.getChildByName("btndec");
        this.btnDec = btnDec;
        btnDec.on(Node.EventType.TOUCH_START,this.onDecTouchBegin,this);
        btnDec.on(Node.EventType.TOUCH_CANCEL,this.onDecTouchEnd,this);
        btnDec.on(Node.EventType.TOUCH_END,this.onDecTouchEnd,this);
        let btnAdd = this.node.getChildByName("btnadd");
        this.btnAdd = btnAdd;
        btnAdd.on(Node.EventType.TOUCH_START,this.onAddTouchBegin,this);
        btnAdd.on(Node.EventType.TOUCH_CANCEL,this.onAddTouchEnd,this);
        btnAdd.on(Node.EventType.TOUCH_END,this.onAddTouchEnd,this);
    }

    ///初始化对应的view
    private initView(){
        let config = DB_GameItem.getInstance().pool.get(this.curData.ItemId);
        this.node.getChildByName("icon").getChildByName("itemcnt").getComponent(Label).string = this.curData.ItemNum.toString();
        //this.node.getChildByName("itemdesc").getComponent(Label).string = config.Describe;
        this.node.getChildByName("itemdesc").getComponent(Label).string = I18nMgr.getInstance().getStringFromItemConfig(config.Id,"describe");

        //显示的图标
        this.node.getChildByName("icon").getChildByName("itemsp").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_"+this.curData.ItemId);

        //道具名字
        //this.node.getChildByName("itemname").getComponent(Label).string = config.Name;
        this.node.getChildByName("itemname").getComponent(Label).string = I18nMgr.getInstance().getStringFromItemConfig(config.Id,"name");


        //能够获得多少东西 获取什么东西
        let typeInt = config.SaleType;
        if(typeInt == 1){
            typeInt = 0;
        }else if(typeInt == 2){
            typeInt = 1;
        }
        this.node.getChildByName("goldicon").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_"+typeInt);
        this.node.getChildByName("awardgolcnt").getComponent(Label).string = config.SaleGold.toString();
    }



    onHide(){
        EventMgr.getInstance().removeByTarget(this);
    }






    //输入框中的内容发生改变
    onEditBoxTextChanged(){
        let txt = this.editBox.string;
        if(Utils.chkStrIsInt(txt)){
            let cnt = parseInt(this.editBox.string);
            if(cnt <=1){
                cnt  = 1;
            }
            if(cnt >= this.curData.ItemNum){
                cnt = this.curData.ItemNum;
            }
            this.curCnt = cnt;
            this.editBox.string = this.curCnt.toString();
        }else{
            this.editBox.string = this.curCnt.toString();
            //this.curCnt = parseInt(this.editBox.string);
        }
        let config = DB_GameItem.getInstance().pool.get(this.curData.ItemId);
        this.node.getChildByName("awardgolcnt").getComponent(Label).string = (this.curCnt * config.SaleGold).toString();
    }


    private isDecStart:boolean = false;
    private isDecNeedClick:boolean = true;
    private onDecTouchBegin(evt:EventTouch){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.isDecStart = true;
        this.isDecNeedClick = true;
        Tween.stopAllByTarget(this.btnDec);
        let config = DB_GameItem.getInstance().pool.get(this.curData.ItemId);
        tween(this.btnDec).delay(0.5).call(()=>{
            this.curCnt = this.curCnt - 1;
            this.isDecNeedClick = false;
            if(this.curCnt <= 1){
                this.curCnt = 1;
            }
            this.editBox.string = this.curCnt.toString();
            this.node.getChildByName("awardgolcnt").getComponent(Label).string = (this.curCnt * config.SaleGold).toString();
        }).union().repeatForever().start();
    }

    //松开
    private onDecTouchEnd(){
        this.isDecStart  = false;
        if(this.isDecNeedClick){
            let config = DB_GameItem.getInstance().pool.get(this.curData.ItemId);
            this.curCnt = this.curCnt - 1;
            if(this.curCnt <= 1){
                this.curCnt = 1;
            }
            this.editBox.string = this.curCnt.toString();
            this.node.getChildByName("awardgolcnt").getComponent(Label).string = (this.curCnt * config.SaleGold).toString();
        }
        this.isDecNeedClick = true;
        Tween.stopAllByTarget(this.btnDec);
    }

    private isAddStart:boolean = false;
    private isAddNeedClick:boolean = true;
    private onAddTouchBegin(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.isAddStart = true;
        this.isAddNeedClick = true;
        Tween.stopAllByTarget(this.btnAdd);
        let config = DB_GameItem.getInstance().pool.get(this.curData.ItemId);
        tween(this.btnAdd).delay(0.5).call(()=>{
            this.curCnt = this.curCnt + 1;
            console.log("执行+ 1",this.curCnt);
            this.isAddNeedClick = false;
            if(this.curCnt>=this.curData.ItemNum){
                this.curCnt = this.curData.ItemNum;
            }
            this.editBox.string = this.curCnt.toString();
            this.node.getChildByName("awardgolcnt").getComponent(Label).string = (this.curCnt * config.SaleGold).toString();
        }).union().repeatForever().start();
    }

    private onAddTouchEnd(){
        this.isDecStart = false;
        Tween.stopAllByTarget(this.btnAdd);
        if(this.isAddNeedClick){
            let config = DB_GameItem.getInstance().pool.get(this.curData.ItemId);
            this.curCnt = this.curCnt + 1;
            if(this.curCnt >= this.curData.ItemNum){
                this.curCnt = this.curData.ItemNum;
            }
            this.editBox.string = this.curCnt.toString();
            this.node.getChildByName("awardgolcnt").getComponent(Label).string = (this.curCnt * config.SaleGold).toString();
        }
        this.isAddNeedClick = false;
    }


    //道具数量 -1
    onBtnDec():void{

    }

    //道具数量 + 1
    onBtnAdd():void{

    }

    //确定按钮
    onBtnOK(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        if(this.curCnt <=0 ){
            TienlenUIMgr.getInstance().AlertTxt("请选择正确的出售数量");
        }
        console.log("确定按钮");
        let pack = new bag.bag.CSUpBagInfo();
        pack.ItemId = this.curData.ItemId;
        pack.ItemNum = this.curCnt; 
        //执行出售  0：使用 1：赠送 2：出售
        pack.Opt = 2;
        console.log("出售的操作数据");
        console.log(pack);
        console.log("出售的操作数据");
        SocketMgr.send(bag.bag.SPacketID.PACKET_ALL_BAG_USE,pack);
    }


    //购买的消息回调 这里应该弹出来掉落框
    async onSaleCallBack(result:bag.bag.SCUpBagInfo){
        if(result.RetCode == bag.bag.OpResultCode.OPRC_Sucess){
            //执行成功
            let dropItems:{id:number,cnt:number}[] = [];
            if(result.Coin >0){
                dropItems.push({id:1,cnt:result.Coin});
            }
            if(result.Diamond >0){
                dropItems.push({id:2,cnt:result.Diamond});
            }

            for(let i = 0;i<result.Infos.length;i++){
                dropItems.push({id:result.Infos[i].ItemId,cnt:result.Infos[i].ItemNum});
            }   
            await this.closeSelf();
            TienlenUIMgr.getInstance().showAwardGet(dropItems);
            //这里要刷新界面。更新当前的道具数量
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_DbErr){
            TienlenUIMgr.getInstance().AlertTxt("出售失败");
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_UseUp){
            TienlenUIMgr.getInstance().AlertTxt("");
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_IdErr){
            TienlenUIMgr.getInstance().AlertTxt("道具不存在");
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_Error){
            TienlenUIMgr.getInstance().AlertTxt("出售失败");
        }
    }

    //取消
    onBtnCancel(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.closeSelf();
    }
}

