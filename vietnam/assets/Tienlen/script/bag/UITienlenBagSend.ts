import { _decorator, Node, EditBox, EventTarget, Tween, tween, Label, Sprite } from 'cc';
import { AudioMgr } from '../../../ScriptCore/audio/AudioMgr';
import { LobbyAudioCfg } from '../../../ScriptCore/audio/LobbyAudioCfg';
import { DB_GameItem } from '../../../ScriptCore/config/db_gameitem';
import { UserData } from '../../../ScriptCore/data/UserData';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { MailNowLocation } from '../../../ScriptCore/Lobby/Scripts/gameconfig/GameConst';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import  bag  from '../../../ScriptCore/protocol/bag.js';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { TienlenUIMgr } from '../TienlenUIMgr';
const { ccclass, property } = _decorator;

@ccclass('UITienlenBagSend')
export class UITienlenBagSend extends UIWindow {
    


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
        this.curData = data;
        EventMgr.getInstance().addEventListener(EventName.SC_ALL_BAG_USE,this.onSendCallBack,this);

        EventMgr.getInstance().addEventListener(EventName.BAG_SEND_FRIEND_LIST,this.onGetTargetFriend,this);

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
        
        this.node.getChildByName("itemexpire").active = false;

        //道具名字
        //this.node.getChildByName("itemname").getComponent(Label).string = config.Name;
        this.node.getChildByName("itemname").getComponent(Label).string = I18nMgr.getInstance().getStringFromItemConfig(config.Id,"name");

        this.node.getChildByName("icon").getChildByName("itemsp").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_"+this.curData.ItemId);
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
            //this.curCnt = parseInt(this.editBox.string);
            this.editBox.string = this.curCnt.toString();
        }
        console.log(this.curCnt,"当前的道具数量========");
    }


    private isDecStart:boolean = false;
    private isDecNeedClick:boolean = true;
    private onDecTouchBegin(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.isDecStart = true;
        this.isDecNeedClick = true;
        Tween.stopAllByTarget(this.btnDec);
        tween(this.btnDec).delay(0.5).call(()=>{
            this.curCnt = this.curCnt - 1;
            this.isDecNeedClick = false;
            if(this.curCnt <= 1){
                this.curCnt = 1;
            }
            this.editBox.string = this.curCnt.toString();
        }).union().repeatForever().start();
    }

    //松开
    private onDecTouchEnd(){
        this.isDecStart  = false;
        if(this.isDecNeedClick){
            this.curCnt = this.curCnt - 1;
            if(this.curCnt <= 1){
                this.curCnt = 1;
            }
            this.editBox.string = this.curCnt.toString();
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
        tween(this.btnAdd).delay(0.5).call(()=>{
            this.curCnt = this.curCnt + 1;
            console.log("执行+ 1",this.curCnt);
            this.isAddNeedClick = false;
            if(this.curCnt>=this.curData.ItemNum){
                this.curCnt = this.curData.ItemNum;
            }
            this.editBox.string = this.curCnt.toString();
        }).union().repeatForever().start();
    }

    private onAddTouchEnd(){
        this.isDecStart = false;
        Tween.stopAllByTarget(this.btnAdd);
        if(this.isAddNeedClick){
            this.curCnt = this.curCnt + 1;
            if(this.curCnt >= this.curData.ItemNum){
                this.curCnt = this.curData.ItemNum;
            }
            this.editBox.string = this.curCnt.toString();
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
        let sendEdit = this.node.getChildByName("sendeditbox");
        let sendSnId = sendEdit.getComponent(EditBox).string ;
        
        if(this.curCnt <=0){
            TienlenUIMgr.getInstance().AlertTxt("lobby.xuanzezhegnqueshuliangTxt");
        }

        if(parseInt(sendSnId) == UserData.getInstance().getSnId()){
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.bunengzengsongSelfTxt"));
        }

        if(!Utils.chkStrIsInt(sendSnId) ){
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.enterrightsnid"));
            return;
        }

        let pack = new bag.bag.CSUpBagInfo();
        pack.ItemId = this.curData.ItemId;
        pack.ItemNum = this.curCnt; 
        pack.ShowId = MailNowLocation.TienLen_location;
        //执行出售  0：使用 1：赠送 2：出售
        pack.Opt = 1;
        pack.AcceptSnId = parseInt(sendSnId);
        console.log(pack);
        SocketMgr.send(bag.bag.SPacketID.PACKET_ALL_BAG_USE,pack);
    }


    //赠送消息回调 这里应该弹出来掉落框
    async onSendCallBack(result:bag.bag.SCUpBagInfo){
        console.log("赠送的回调消息");
        if(result.RetCode == bag.bag.OpResultCode.OPRC_Sucess){
            //执行成功
            this.closeSelf();
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.zengsongchenggongTxt"));
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_DbErr){
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.zengsongshibaiTxt"));
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_UseUp){
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.daojubuzuTxt"));
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_IdErr){
            TienlenUIMgr.getInstance().AlertTxt("赠送不存在");
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_Error){
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.zengsongshibaiTxt"));
        }else if(result.RetCode == bag.bag.OpResultCode.OPRC_NotPlayer){
            TienlenUIMgr.getInstance().AlertTxt("被赠送的玩家不存在");
        }
    }


    //获取好友列表
    onBtnFriendClick(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        TienlenUIMgr.getInstance().showBagFriendList();
    }


    //获取到一个还有回调
    onGetTargetFriend(snId:number){
        this.node.getChildByName("sendeditbox").getComponent(EditBox).string = snId.toString();

    }

    //取消
    onBtnCancel(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.closeSelf();
    }
}

