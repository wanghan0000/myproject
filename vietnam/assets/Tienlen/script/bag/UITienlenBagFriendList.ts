import { _decorator, Component, Node, Prefab, instantiate, Sprite, Label, Color, Toggle, EventHandler, UITransform, size, Size } from 'cc';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import friend from '../../../ScriptCore/protocol/friend.js';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import ResourceHelper from '../common/helper/ResourceHelper';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenUIMgr } from '../TienlenUIMgr';
const { ccclass, property } = _decorator;

@ccclass('UITienlenBagFriendList')
export class UITienlenBagFriendList extends UIWindow {
    start() {

    }

    update(deltaTime: number) {
        
    }


    //获取好友列表的数据
    async onShow(){
        this.doInitList();
    }


    friendNodeList:Node[] = [];
    
    friendListData:friend.friend.SCFriendList = null;
    async doInitList(){
        let list = await TienlenHelper.callFriendList(0);
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
        console.log(list);
        let content = this.node.getChildByName("ScrollView").getChildByName("view").getChildByName("content");
        content.destroyAllChildren();
        if(list.FriendArr.length == 0){
            this.node.getChildByName("ScrollView").active = false;
            this.node.getChildByName("empty").active = true;
        }else{
            this.node.getChildByName("ScrollView").active = true;
            this.node.getChildByName("empty").active = false;
            for(let i = 0;i<list.FriendArr.length;i++){
                /**
                 * {"FriendArr":[{"SnId":44778000,"Name":"贵宾","Sex":1,"Head":4,"Online":true}]}
                 */
                let pb = await ResourceHelper.loadResInAB(TienlenDefine.ABName, "prefab/bag/frienditem", Prefab);
                let item = instantiate(pb);
                this.initItemView(list.FriendArr[i] as friend.friend.FriendInfo,item,i);
                let y = (i) * 120 + 120/2;
                item.setPosition(240,-y);
                content.addChild(item);
                this.friendNodeList.push(item);
            }
            content.getComponent(UITransform).contentSize = new Size(480,120 * list.FriendArr.length);
        }
        
    }

    //初始化itemView
    private async initItemView(data:friend.friend.FriendInfo,item:Node,idx:number){
        //头像
        //let headPath = "Tienlen/rawRes/common/head/" + data.Head;
        //item.getChildByName("head").getComponent(Sprite).spriteFrame = await ResMgr.getInstance().lazyLoadSpriteFrame(headPath);
        item.getChildByName("head").getChildByName("sp").getComponent(Sprite).spriteFrame = await Utils.getHeadSpriteFrame(data.Head);
        //昵称
        item.getChildByName("name").getComponent(Label).string = data.Name;
        //在线状态
        let onLineTxt = item.getChildByName("online").getComponent(Label);
        if(data.Online){
            //onLineTxt.string = "在线";
            onLineTxt.string = I18nMgr.getInstance().getStringByKey("tienlen.onlineTxt");
            onLineTxt.color = new Color(14,161,37);
        }else{
            //onLineTxt.string = "离线";
            onLineTxt.string = I18nMgr.getInstance().getStringByKey("tienlen.offlineTxt");
            onLineTxt.color = new Color(118,120,118);
        }
        let toggle = item.getChildByName("Toggle").getComponent(Toggle);
        toggle.isChecked = false;
        let evtHandler = new EventHandler();
        evtHandler.target = this.node;
        evtHandler.component = "UITienlenBagFriendList"
        evtHandler.handler = "onItemCheck";
        evtHandler.customEventData = idx.toString();
        toggle.checkEvents.push(evtHandler);
    }


    //snId
    onItemCheck(evt:Event,customData:string){
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
        let idx = -1;
        for(let i = 0;i<this.friendNodeList.length;i++){
            if (this.friendNodeList[i].getChildByName("Toggle").getComponent(Toggle).isChecked ){
                idx = i;
                break;
            }
        }
        if(idx == -1){
            if(this.friendNodeList.length == 0){
                this.closeSelf();
            }else{
                TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.xuanzezengsonhaoyouTxt"));
            }
        }else{
            EventMgr.getInstance().dispatchEvent(EventName.BAG_SEND_FRIEND_LIST,this.friendListData.FriendArr[idx].SnId);
            this.closeSelf();
        }
        
    }

    //关闭界面
    onBtnClose(){
        this.closeSelf();
    }

}

