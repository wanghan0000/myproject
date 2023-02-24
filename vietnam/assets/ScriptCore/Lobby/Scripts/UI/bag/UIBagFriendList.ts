import { _decorator, Component, Node, Sprite, EventHandler, Toggle, Label, Color, instantiate, UITransform, Size, SpriteFrame } from 'cc';
import { AudioMgr } from '../../../../audio/AudioMgr';
import { LobbyAudioCfg } from '../../../../audio/LobbyAudioCfg';
import { EventMgr } from '../../../../events/eventmgr';
import { EventName } from '../../../../events/EventName';
import { SocketMgr } from '../../../../panda/net/SocketMgr';
import { Utils } from '../../../../panda/utils/Utils';
import friend from '../../../../protocol/friend.js';
import { ResMgr } from '../../../../UIFrame/ResMgr';
import { UIWindow } from '../../../../UIFrame/UIForm';
import { UIMgr } from '../../UIMgr';


import { LocalizedLabel } from 'db://i18n/LocalizedLabel';
import { I18nMgr } from '../../../../i18n/I18nMgr';


const { ccclass, property } = _decorator;

@ccclass('UIBagFriendList')
export class UIBagFriendList extends UIWindow {
    start() {

    }

    update(deltaTime: number) {
        
    }


     //获取好友列表的数据
     async onShow(){
        EventMgr.getInstance().addEventListener(EventName.SCFriendList,this.onFriendList,this);
        this.doReqList();
        //this.doInitList();

    }

    //请求好友列表
    doReqList(){
        console.log("发送好友的列表数据请求");
        let pack = new  friend.friend.CSFriendList();
        //请求好友列表  0 来表示
        pack.ListType = 0;
        console.log(pack)
        console.log("发送好友的列表数据请求");
        SocketMgr.send(friend.friend.FriendPacketID.PACKET_CSFriendList,pack);
    }

    onHide(){
        EventMgr.getInstance().removeByTarget(this);
    }





    friendNodeList:Node[] = [];
    
    friendListData:friend.friend.SCFriendList = null;

    //获取好好友列表
    onFriendList(list:friend.friend.SCFriendList){
        console.log("获取好友列表的数据");
        console.log(list);
        console.log("获取好友列表的数据");
        list.FriendArr.sort((l: friend.friend.IFriendInfo, r: friend.friend.IFriendInfo)=>{
            if (l.Online && r.Online) {
                return r.LastChatTs - l.LastChatTs;
            } else if (!l.Online && !r.Online) {
                return r.LogoutTs - l.LogoutTs;
            } else if (l.Online) {
                return -1;
            } else {
                return 1;
            }
        });
        this.friendListData  = list;
        this.friendNodeList = [];
        let content = this.node.getChildByName("ScrollView").getChildByName("view").getChildByName("content");
        content.destroyAllChildren();
        if(list.FriendArr.length == 0){
            this.node.getChildByName("empty").active = true;
            this.node.getChildByName("ScrollView").active = false;
        }else{
            this.node.getChildByName("empty").active = false;
            this.node.getChildByName("ScrollView").active = true;
            for(let i = 0;i<list.FriendArr.length;i++){
                /**
                 * {"FriendArr":[{"SnId":44778000,"Name":"贵宾","Sex":1,"Head":4,"Online":true}]}
                 */
                let pb = ResMgr.getInstance().getPrefabByPath("Lobby/Prefabs/bag/frienditem");
                let item = instantiate(pb);
                this.initItemView(list.FriendArr[i] as friend.friend.FriendInfo,item,i);
                let y = (i) * 120 + 120/2;
                item.setPosition(590/2,-y);
                content.addChild(item);
                this.friendNodeList.push(item);
            }
            content.getComponent(UITransform).contentSize = new Size(480,120 * list.FriendArr.length);
        }
    }

    //初始化itemView
    private async initItemView(data:friend.friend.FriendInfo,item:Node,idx:number){
        //头像
        //let headPath = "Lobby/head/" + data.Head;
        //item.getChildByName("head").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteFrameByPath(headPath);
        item.getChildByName("head").getChildByName("sp").getComponent(Sprite).spriteFrame = await Utils.getHeadSpriteFrame(data.Head);

        //昵称
        item.getChildByName("name").getComponent(Label).string = data.Name;
        //在线状态
        let onLineTxt = item.getChildByName("online");
        if(data.Online){
            //onLineTxt.string = "在线";
            onLineTxt.getComponent(LocalizedLabel).key = "lobby.onlinetxt";
            onLineTxt.getComponent(Label).color = new Color(108,255,50);
        }else{
            //onLineTxt.string = "离线";
            onLineTxt.getComponent(LocalizedLabel).key = "lobby.offlinetxt";
            onLineTxt.getComponent(Label).color = new Color(255,50,50);
        }
        let toggle = item.getChildByName("Toggle").getComponent(Toggle);
        toggle.isChecked = false;
        let evtHandler = new EventHandler();
        evtHandler.target = this.node;
        evtHandler.component = "UIBagFriendList"
        evtHandler.handler = "onItemCheck";
        evtHandler.customEventData = idx.toString();
        toggle.checkEvents.push(evtHandler);
    }


    //snId
    onItemCheck(evt:Event,customData:string){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        let idx = parseInt(customData);
        let node = this.friendNodeList[idx];
        let toggle = node.getChildByName("Toggle").getComponent(Toggle);
        if(toggle.isChecked){
            for(let i = 0;i<this.friendNodeList.length;i++){
                if(i != idx){
                    this.friendNodeList[i].getChildByName("Toggle").getComponent(Toggle).isChecked = false;
                }
            }
        }
    }

    //确定了
    onBtnOK(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        let idx = -1;
        for(let i = 0;i<this.friendNodeList.length;i++){
            if (this.friendNodeList[i].getChildByName("Toggle").getComponent(Toggle).isChecked ){
                idx = i;
                break;
            }
        }
        if(idx == -1 ){
            if(this.friendNodeList.length == 0){
                //如果当前本来就没有好友则不用处理了
                this.closeSelf();
            }else{
                UIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.xuanzezengsonhaoyouTxt"));
            }
            
        }else{
            EventMgr.getInstance().dispatchEvent(EventName.BAG_SEND_FRIEND_LIST,this.friendListData.FriendArr[idx].SnId);
            this.closeSelf();
        }
        
    }

    //关闭界面
    onBtnClose(){
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.closeSelf();
    }

}

