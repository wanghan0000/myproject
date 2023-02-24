import { _decorator, Component, Node, Prefab, instantiate, Label, EventHandler, Button, UITransform, size, Size, Sprite, SpriteAtlas, Vec3 } from 'cc';
import { AudioMgr } from '../../../ScriptCore/audio/AudioMgr';
import { LobbyAudioCfg } from '../../../ScriptCore/audio/LobbyAudioCfg';
import { RedDotData } from '../../../ScriptCore/data/RedDotData';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { MailNowLocation } from '../../../ScriptCore/Lobby/Scripts/gameconfig/GameConst';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import  message  from '../../../ScriptCore/protocol/message.js';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import ResourceHelper from '../common/helper/ResourceHelper';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenUIMgr } from '../TienlenUIMgr';
import { mailitem } from './mailitem';
const { ccclass, property } = _decorator;

@ccclass('UITienlenMail')
export class UITienlenMail extends UIWindow {
    @property(Node)
    nodeGetReward: Node = null;
    @property(Node)
    nodeDelReward: Node = null;
    @property(Node)
    nodeHasGetFlag:Node = null;

    start() {

    }

    update(deltaTime: number) {

    }


    //关闭界面
    onBtnClose() {
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.closeSelf();
    }


    //界面打开
    onShow(){
        EventMgr.getInstance().addEventListener(EventName.SC_MESSAGELIST,this.onGetMessageList,this);
        EventMgr.getInstance().addEventListener(EventName.SC_MESSAGEREAD,this.onMessageRead,this);
        EventMgr.getInstance().addEventListener(EventName.SC_MESSAGEDEL,this.onMessageDelete,this);
        EventMgr.getInstance().addEventListener(EventName.SC_GETMESSAGEATTACH,this.onGetMessageAttach,this);
        this.clearView();
        this.doReqMailList();
    }

    //清空节点
    private clearView():void{
        this.node.getChildByName("empty").active = false;
        this.node.getChildByName("full").active = false;
    }

    //请求邮件列表的消息
    private doReqMailList(){
        let pack = new message.message.CSMessageList();
        pack.ShowId = MailNowLocation.TienLen_location;
        console.log("发送邮件的消息请求");
        console.log(pack);
        SocketMgr.send(message.message.MSGPacketID.PACKET_CS_MESSAGELIST,pack);
    }
    //界面关闭
    onHide(){
        EventMgr.getInstance().removeByTarget(this);
    }

    //获取到邮件的列表
    onGetMessageList(data:message.message.SCMessageList){
        console.log("所有的邮件数据");
        console.log(data);
        console.log("所有的邮件数据");
        if(data.Msgs.length <=0){
            this.node.getChildByName("empty").active = true;
            this.node.getChildByName("full").active = false;
        }else{
            
            this.msgList = data.Msgs as message.message.MessageData[];
            this.msgList.sort((a:message.message.MessageData,b:message.message.MessageData)=>{
                if (a.State < b.State){
                    return -1;
                }else if(a.State>b.State){
                    return 1;
                }else{
                    if(a.AttachState > b.AttachState){
                        return 1;
                    }else if(a.AttachState < b.AttachState){
                        return -1;
                    }else{
                        return a.Ts < b.Ts ? 1 : -1;
                    }
                }
            });
            this.scheduleOnce(()=>{
                this.initMailList();
            },0.016);
        }
    }

    private msgList:message.message.MessageData[] = [];

    //读取某一封邮件
    onMessageRead(data:message.message.SCMessageRead){
        let hasUnRead = false;
        for(let i = 0;i<this.mailListNode.length;i++){
            let item = this.mailListNode[i];
            if(item.getComponent(mailitem).getData().State ==0){
                hasUnRead = true;
            }
            if(item.getComponent(mailitem).getId() == data.Id){
                //当前邮件设置为已读
                item.getComponent(mailitem).getData().State = 1;
                item.getComponent(mailitem).setReadState(1);
            }
        }
        if( !hasUnRead){
            RedDotData.getInstance().resetRedDotByMail(MailNowLocation.TienLen_location);
        }

        this.chkRedDotForAnyItem();
    }



    //判定一封邮件是否有红点
    chkRedDotForAnyItem(){
        let hasRed = false;
        for(let i = 0;i<this.mailListNode.length;i++){
            let itemData = this.mailListNode[i].getComponent(mailitem).getData();
            let red:boolean = false;
            if(itemData.State == 0){
                red = true;
                hasRed = true;
            }else{
                 //itemData.AttachState != 0 && itemData.AttachState != 1)
                 if( (itemData.Coin >0 || itemData.Diamond >0 || itemData.Params.length >0) && itemData.AttachState == 0  ){
                    red = true;
                    hasRed = true;
                 }
            }
            this.mailListNode[i].getComponent(mailitem).setRedDot(red);
        }
        if(!hasRed){
            RedDotData.getInstance().resetRedDotByMail(MailNowLocation.TienLen_location);
        }
    }


    //领取附件
    onGetMessageAttach(data:message.message.SCGetMessageAttach){
        let msgId = data.Id;
        console.log("领取附件的消息回调");
        console.log(data);
        console.log("领取附件的消息回调");

        //这里要根据msgId来获取 里边是什么道具

        let itemData:message.message.MessageData = null;
        for(let i = 0;i<this.mailListNode.length;i++){
            if(this.mailListNode[i].getComponent(mailitem).getId() == msgId){
                itemData = this.mailListNode[i].getComponent(mailitem).getData();
                break;
            }
        }
        if(itemData != null){
            //已领取
            itemData.AttachState = 1;
            let dropData:{id:number,cnt:number}[] = [];
            if(itemData.Coin >0){
                dropData.push({id:1,cnt:itemData.Coin});
            }
            if(itemData.Diamond >0){
                dropData.push({id:2,cnt:itemData.Diamond});
            }
            if(itemData.Params.length >0 && itemData.Params.length %2 ==0 ){
                for(let i = 0;i<itemData.Params.length;i=i+2){
                    let one = {id:itemData.Params[i],cnt:itemData.Params[i+1]};
                    dropData.push(one);
                }
            }
            console.log("领取需要掉落的道具");
            console.log(dropData);
            console.log("领取需要掉落的道具");
            TienlenUIMgr.getInstance().showAwardGet(dropData);
        }

        //更新数据，刷新view 该邮件就执行完成了
        this.nodeGetReward.active = false;
        this.nodeDelReward.active = true;
        this.nodeHasGetFlag.active = true;
        

        this.chkRedDotForAnyItem();
        // if(allCnt >0 && itemData.AttachState != 0){
        //     attachment.getChildByName("hasgetsp").active = true;
        // }
    }

    //删除某一封邮件
    onMessageDelete(data:message.message.SCMessageDel){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        let idx = -1;
        let newMsgList:message.message.MessageData[] = [];
        for(let i = 0;i<this.msgList.length;i++){
            if(this.msgList[i].Id != data.Id){
                newMsgList.push(this.msgList[i]);
            }
        }
        this.msgList = newMsgList;
        this.msgList.sort((a:message.message.MessageData,b:message.message.MessageData)=>{
            if (a.State < b.State){
                return -1;
            }else if(a.State>b.State){
                return 1;
            }else{
                return a.Ts < b.Ts ? 1 : -1;
            }
        });
        // console.log("执行删除后的数据");
        // console.log(this.msgList);
        // console.log("执行删除后的数据");
        if(this.msgList.length >0){
            this.initMailList();
        }else{
            this.node.getChildByName("empty").active = true;
            this.node.getChildByName("full").active = false;
        }
    }

    private mailListNode:Node[] = [];
    //初始化左侧的邮件列表
    //488 103 
    private async initMailList(){
        let itemWidth = 220;
        let itemHeight = 94;   
        this.mailListNode = [];
        let content = this.node.getChildByName("full").getChildByName("ScrollView").getChildByName("view").getChildByName("content");
        content.destroyAllChildren();
        for(let i = 0;i<this.msgList.length;i++){
            if(i<=6){
                let pb = await ResourceHelper.loadResInAB(TienlenDefine.ABName, "prefab/mail/mailitem", Prefab);   
                let item = instantiate(pb);
                this.mailListNode.push(item);
                let x = itemWidth/2;
                let y = -itemHeight/2 -(i * itemHeight);
                item.setPosition(x,y);
                content.addChild(item);
                this.initItemView(item,this.msgList[i]);
            }else{
                this.scheduleOnce(async ()=>{
                    let pb = await ResourceHelper.loadResInAB(TienlenDefine.ABName, "prefab/mail/mailitem", Prefab);   
                    let item = instantiate(pb);
                    this.mailListNode.push(item);
                    let x = itemWidth/2;
                    let y = -itemHeight/2 -(i * itemHeight);
                    item.setPosition(x,y);
                    content.addChild(item);
                    this.initItemView(item,this.msgList[i]);
                },0.016*i);
            }
            
            
        }
        content.getComponent(UITransform).contentSize =  new Size(488,itemHeight * this.msgList.length);
        if(this.msgList.length >0){
            this.onLeftMailClick(null,this.msgList[0].Id,true);
        }
        //延时检测 道具上的红点
        this.scheduleOnce(()=>{
            this.chkRedDotForAnyItem();
        },this.msgList.length * 0.016);
    }


    //初始化itemView
    private initItemView(item:Node,data:message.message.MessageData){
        item.getComponent(mailitem).refreshView(data);
        let evtHandler = new EventHandler();
        evtHandler.target = this.node;
        evtHandler.component = "UITienlenMail";
        evtHandler.handler = "onLeftMailClick";
        evtHandler.customEventData = data.Id;
        item.getComponent(Button).clickEvents.push(evtHandler);
    }

    //邮件被点击。选择
    private onLeftMailClick(evt:Event,customData:string,ignoreSound:boolean = false){
        if(!ignoreSound){
            AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        }
        this.node.getChildByName("empty").active = false;
        this.node.getChildByName("full").active = true;
        //当前的邮件Id
        let id = customData;
        let pack = new message.message.CSMessageRead();
        pack.Id = id;
        SocketMgr.send(message.message.MSGPacketID.PACKET_CS_MESSAGEREAD,pack);
        let item:Node = null;
        for(let i = 0;i<this.mailListNode.length;i++){
            if(this.mailListNode[i].getComponent(mailitem).getId() == id){
                this.mailListNode[i].getComponent(mailitem).setIsSelect( true );
                item = this.mailListNode[i];
            }
            else{
                this.mailListNode[i].getComponent(mailitem).setIsSelect( false );
            }
        }
        //初始化右侧的数据
        let itemData = item.getComponent(mailitem).getData();
        this.refreshRightView(itemData);
        this.chkRedDotForAnyItem();
    }

    //刷新右侧的数据
    private async refreshRightView(itemData:message.message.MessageData){
        //标题
        let right = this.node.getChildByName("full").getChildByName("rightbg");
        
        //标题
        let title = right.getChildByName("line").getChildByName("titile");
        let titleStr = Utils.getLanguageString(itemData.Title);
        
        title.getComponent(Label).string = Utils.replaceStringWithStr(titleStr,15,"...");

        //时间
        right.getChildByName("layout2").getChildByName("timertxt").getComponent(Label).string = Utils.cvtDateTimeToYYYMMDDHHmmss(new Date(itemData.Ts * 1000));

        //发件人
        right.getChildByName("layout1").getChildByName("sendertxt").getComponent(Label).string  = itemData.SrcName.toString();


        //内容
        let content = right.getChildByName("ScrollView").getChildByName("view").getChildByName("content");
        let contentStr = Utils.getLanguageString(itemData.Content);
        
        content.getComponent(Label).string = contentStr;
        content.getComponent(UITransform).contentSize = new Size(600,);

        //判断是否有附件，如果有附件则显  暂时假定没有附件
        //if(itemData.a)
        let attachment = right.getChildByName("attach");
        //附件中的道具没有，但是有删除按钮
        let attachList:{id:number,cnt:number}[] = [];


        //金币的id定义为 0 钻石的id 定义 为 1
        if(itemData.Coin >0){
            let coinItem = {id:0,cnt:itemData.Coin};
            attachList.push(coinItem);
        }
        //钻石
        if(itemData.Diamond >0){
            let diamondItem = {id:1,cnt:itemData.Diamond};
            attachList.push(diamondItem);
        }


        if(itemData.Params.length >0 && itemData.Params.length %2 ==0 ){
            for(let i = 0;i<itemData.Params.length;i=i+2){
                let one = {id:itemData.Params[i],cnt:itemData.Params[i+1]};
                attachList.push(one);
            }
        }
        let allCnt = attachList.length;
        let icnt = allCnt >=5?5:allCnt;
        // console.log("当前附件的id");
        // console.log(attachList);
        // console.log("当前附件的id");
        for(let i = 0;i<5;i++){
            if(i<icnt){
                attachment.getChildByName("item"+i).active = true;
                attachment.getChildByName("item" + i).getChildByName("icon").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_" +attachList[i].id);
                attachment.getChildByName("item" + i).getChildByName("itemcnt").getComponent(Label).string = `${attachList[i].cnt}`;
                if(attachList[i].id == 1 || attachList[i].id ==0){
                    attachment.getChildByName("item" + i).getChildByName("icon").getComponent(UITransform).contentSize = new Size(60,60);
                }else{
                    attachment.getChildByName("item" + i).getChildByName("icon").getComponent(UITransform).contentSize = new Size(78,78);
                }
            }else{
                attachment.getChildByName("item"+i).active = false;
            }
        }

        let offx = (110/2) * (5-icnt);

        for(let i = 0;i<icnt;i++){
            let ox = offx + 110 * i;    
            attachment.getChildByName("item" + i).setPosition(ox,0);
        }

        attachment.getChildByName("hasgetsp").active = false;
        if(allCnt >0 && itemData.AttachState != 0){
            attachment.getChildByName("hasgetsp").active = true;
        }
        if(allCnt >0 && itemData.AttachState ==0){
            attachment.getChildByName("btnget").active = true;
            attachment.getChildByName("btndel").active = false;
        }else{
            attachment.getChildByName("btnget").active = false;
            attachment.getChildByName("btndel").active = true;
        }

    }



    //附件的地方执行一次删除
    public doDeleteById(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        let data:message.message.MessageData = null;
        for(let i = 0;i<this.mailListNode.length;i++){
            if(this.mailListNode[i].getComponent(mailitem).getIsSelected()){
                data = this.mailListNode[i].getComponent(mailitem).getData();
                break;
            }
        }
        if(data != null){
            console.log("发送删除消息");
            let pack = new message.message.CSMessageDel();
            pack.Id = data.Id;
            console.log(pack);
            console.log("执行删除操作=-========");
            SocketMgr.send(message.message.MSGPacketID.PACKET_CS_MESSAGEDEL,pack);
        }
    }


    //执行领取操作
    public doGetById(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        let data:message.message.MessageData = null;
        for(let i = 0;i<this.mailListNode.length;i++){
            if(this.mailListNode[i].getComponent(mailitem).getIsSelected()){
                data = this.mailListNode[i].getComponent(mailitem).getData();
                break;
            }
        }
        if(data != null){
            console.log("发送领取附件的相应操作");
            let pack = new message.message.CSGetMessageAttach();
            pack.Id = data.Id;
            console.log(pack);
            SocketMgr.send(message.message.MSGPacketID.PACKET_CS_GETMESSAGEATTACH,pack);
        }
    }



    //设置 当前是否为选中状态
    private doSelectState(item:Node,isSelected:boolean){

    }



    //一键删除
    public doDelete(){
        console.log("一键删除");
    }

    //一键领取
    public doGetAll(){
        console.log("一键领取");
    }
    



}

