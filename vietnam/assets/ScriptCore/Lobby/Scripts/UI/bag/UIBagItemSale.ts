import { _decorator, Component, Node, Sprite, Label, Tween, EditBox, tween } from 'cc';
import { AudioMgr } from '../../../../audio/AudioMgr';
import { LobbyAudioCfg } from '../../../../audio/LobbyAudioCfg';
import { DB_GameItem } from '../../../../config/db_gameitem';
import { BagData } from '../../../../data/BagData';
import { UserData } from '../../../../data/UserData';
import { EventMgr } from '../../../../events/eventmgr';
import { EventName } from '../../../../events/EventName';
import { I18nMgr } from '../../../../i18n/I18nMgr';
import { SocketMgr } from '../../../../panda/net/SocketMgr';
import { Utils } from '../../../../panda/utils/Utils';
import bag from '../../../../protocol/bag.js';
import { ResMgr } from '../../../../UIFrame/ResMgr';
import { UIScreen } from '../../../../UIFrame/UIForm';
import { UIMgr } from '../../UIMgr';
const { ccclass, property } = _decorator;

@ccclass('UIBagItemSale')
export class UIBagItemSale extends UIScreen {
    start() {

    }

    update(deltaTime: number) {
        
    }

    private data:bag.bag.ItemInfo =  null;
    onShow(itemData:bag.bag.ItemInfo){
        this.data = itemData;
        EventMgr.getInstance().addEventListener(EventName.SC_ALL_BAG_USE,this.onSendCallBack,this);
        this.initView();
    }

    onHide(){
        EventMgr.getInstance().removeByTarget(this);
    }


    private awardMoneyCnt:Label = null;
    private btndec:Node = null;
    private btnAdd:Node = null;
    private editBox:EditBox = null;
    //初始化UI
    private initView(){

        //初始化多少金币
        let sendnode = this.node.getChildByName("sendnode");

        //初始化按钮的触摸事件
        let btndec = sendnode.getChildByName("btndec");
        this.btndec = btndec;
        btndec.on(Node.EventType.TOUCH_START,this.onDscStart,this);
        btndec.on(Node.EventType.TOUCH_END,this.onDscEnd,this);
        btndec.on(Node.EventType.TOUCH_CANCEL,this.onDscEnd,this);

        let btnAdd = sendnode.getChildByName("btnadd");
        this.btnAdd = btnAdd;
        btnAdd.on(Node.EventType.TOUCH_START,this.onAddStart,this);
        btnAdd.on(Node.EventType.TOUCH_END,this.onAddEnd,this);
        btnAdd.on(Node.EventType.TOUCH_CANCEL,this.onAddEnd,this);

        this.editBox = sendnode.getChildByName("EditBox").getComponent(EditBox);
        this.editBox.string = this.curCnt.toString();

        this.updateItemInfo();
    }

    //更新道具的数据
    private updateItemInfo(){
        
        let tempData = BagData.getInstance().getBagItemById(this.data.ItemId);
        if(tempData == null){
            tempData = this.data;
            tempData.ItemNum = 0;
        }
        this.data = tempData;
        let config = DB_GameItem.getInstance().pool.get(this.data.ItemId);
        let contentnode = this.node.getChildByName("contentnode");
        //icon
        let item = contentnode.getChildByName("item");
        //icon信息的加载
        item.getChildByName("icon").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_"+tempData.ItemId);
        //名字
        //contentnode.getChildByName("itemname").getComponent(Label).string = config.Name;
        contentnode.getChildByName("itemname").getComponent(Label).string = I18nMgr.getInstance().getStringFromItemConfig(config.Id,"name");
        //数量
        contentnode.getChildByName("cntnode").getChildByName("cnttxt").getComponent(Label).string = tempData.ItemNum.toString();

        if(this.curCnt <=0){
            this.curCnt = 0;
        }

        if(this.curCnt>=tempData.ItemNum){
            this.curCnt = tempData.ItemNum;
        }
        
        this.editBox.string = this.curCnt.toString();
        //初始化多少金币
        let sendnode = this.node.getChildByName("sendnode");
        this.awardMoneyCnt = sendnode.getChildByName("awardnode").getChildByName("moneycnt").getComponent(Label);
        this.awardMoneyCnt.string = (this.curCnt * config.SaleGold).toString();
    }



    private curCnt = 1;
    private isDecStart:boolean = false;
    private isDecNeedClick:boolean = true;
    //按下 减少的按钮
    private onDscStart(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.isDecStart = true;
        this.isDecNeedClick = true;
        let config = DB_GameItem.getInstance().pool.get(this.data.ItemId);
        Tween.stopAllByTarget(this.btndec);
        tween(this.btndec).delay(0.5).call(()=>{
            this.curCnt = this.curCnt - 1;
            this.isDecNeedClick = false;
            if(this.curCnt <= 1){
                this.curCnt = 1;
            }
            this.editBox.string = this.curCnt.toString();
            this.awardMoneyCnt.string = (this.curCnt * config.SaleGold).toString();
        }).union().repeatForever().start();
    }

    //按下结束的事件
    private onDscEnd(){
        this.isDecStart  = false;
        let config = DB_GameItem.getInstance().pool.get(this.data.ItemId);
        if(this.isDecNeedClick){
            this.curCnt = this.curCnt - 1;
            if(this.curCnt <= 1){
                this.curCnt = 1;
            }
            this.editBox.string = this.curCnt.toString();
            this.awardMoneyCnt.string = (this.curCnt * config.SaleGold).toString();
        }
        this.isDecNeedClick = true;
        Tween.stopAllByTarget(this.btndec);
    }


    private isAddStart:boolean = false;
    private isAddNeedClick:boolean = true;
    //增加按钮的按下事件
    private onAddStart(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.isAddStart = true;
        this.isAddNeedClick = true;
        let config = DB_GameItem.getInstance().pool.get(this.data.ItemId);
        Tween.stopAllByTarget(this.btnAdd);
        tween(this.btnAdd).delay(0.5).call(()=>{
            this.curCnt = this.curCnt + 1;
            console.log("执行+ 1",this.curCnt);
            this.isAddNeedClick = false;
            if(this.curCnt>=this.data.ItemNum){
                this.curCnt = this.data.ItemNum;
            }
            this.editBox.string = this.curCnt.toString();
            this.awardMoneyCnt.getComponent(Label).string = (this.curCnt * config.SaleGold).toString();
        }).union().repeatForever().start();
    }

    //增加按钮的结束事件
    private onAddEnd(){
        this.isDecStart = false;
        let config = DB_GameItem.getInstance().pool.get(this.data.ItemId);
        Tween.stopAllByTarget(this.btnAdd);
        if(this.isAddNeedClick){
            this.curCnt = this.curCnt + 1;
            if(this.curCnt >= this.data.ItemNum){
                this.curCnt = this.data.ItemNum;
            }
            this.editBox.string = this.curCnt.toString();
            this.awardMoneyCnt.getComponent(Label).string = (this.curCnt * config.SaleGold).toString();
        }
        this.isAddNeedClick = false;
    }

    //输入框中的内容发生改变
    onEditBoxTextChanged(){
        let txt = this.editBox.string;
        let config = DB_GameItem.getInstance().pool.get(this.data.ItemId);
        if(Utils.chkStrIsInt(txt)){
            let cnt = parseInt(this.editBox.string);
            if(cnt <=1){
                cnt  = 1;
            }
            if(cnt >= this.data.ItemNum){
                cnt = this.data.ItemNum;
            }
            this.curCnt = cnt;
            this.editBox.string = this.curCnt.toString();
        }else{
            this.editBox.string = this.curCnt.toString();
        }

        this.awardMoneyCnt.string = (this.curCnt * config.SaleGold).toString();
    }


    //确认按钮
    onBtnOk(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        console.log("确定按钮");
        if(this.curCnt<=0){
            UIMgr.getInstance().AlertTxt("请选择正确的出售数量");
            return;
        }
        let pack = new bag.bag.CSUpBagInfo();
        pack.ItemId = this.data.ItemId;
        pack.ItemNum = this.curCnt; 
        //执行出售  0：使用 1：赠送 2：出售
        pack.Opt = 2;
        SocketMgr.send(bag.bag.SPacketID.PACKET_ALL_BAG_USE,pack);
    }


    async onSendCallBack(result:bag.bag.SCUpBagInfo){
        console.log("出售的回调来到这里了");
        console.log(result);
        console.log("出售的回调来到这里了");
        if(result.RetCode == bag.bag.OpResultCode.OPRC_Sucess){
            //执行成功  金币不需要在这里进行更新了。因为 客户端会受到 金币变化的通知
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
            this.updateItemInfo();
            //增加一个竖版掉落  这个等掉落的窗口出来的时候再加
            console.log("要自行弹框的掉落了");
            UIMgr.getInstance().showLobbyAwardGet(dropItems);
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_DbErr){
            UIMgr.getInstance().AlertTxt("出售失败");
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_UseUp){
            UIMgr.getInstance().AlertTxt("道具不足");
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_IdErr){
            UIMgr.getInstance().AlertTxt("道具不存在");
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_Error){
            UIMgr.getInstance().AlertTxt("出售失败");
        }
    }


    onBtnBack(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.closeSelf();        
    }
}

