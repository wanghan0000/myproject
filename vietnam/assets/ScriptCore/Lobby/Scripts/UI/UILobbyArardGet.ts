import { _decorator, Component, Node, Sprite, Label, instantiate, sp, Tween, tween } from 'cc';
import { AudioMgr } from '../../../audio/AudioMgr';
import { LobbyAudioCfg } from '../../../audio/LobbyAudioCfg';
import { Utils } from '../../../panda/utils/Utils';
import { ModalOpacity } from '../../../UIFrame/config/SysDefine';
import { ResMgr } from '../../../UIFrame/ResMgr';
import { ModalType } from '../../../UIFrame/Struct';
import { UIWindow } from '../../../UIFrame/UIForm';
const { ccclass, property } = _decorator;

@ccclass('UILobbyArardGet')
export class UILobbyArardGet extends UIWindow {

    modalType = new ModalType(ModalOpacity.OpacityHigh);
    start() {

    }

    update(deltaTime: number) {

    }

    //物品道具的掉落
    onShow(items: { id: number, cnt: number }[]) {
        console.log("===========");
        console.log(items);
        console.log("===========");
        this.initSpineAni();
        this.initAllItems(items);
    }

    //spine动画开始播放
    async initSpineAni(){
        //下层节点的spine动画
        let xiacengNode = this.node.getChildByName("xiaceng");
        let xiaceng = xiacengNode.getComponent(sp.Skeleton);
        let xiacengData = await ResMgr.getInstance().lazyLoadySpine("Lobby/ani/awardget/gongxihuode_xiaceng");
        xiaceng.skeletonData = xiacengData;
        xiaceng.animation = "tanchu";
        
        Tween.stopAllByTarget(xiacengNode);
        tween(xiacengNode).delay(80/60 * 0.016).call(()=>{
            xiaceng.animation = "daiji";
        }).union().start();

        //上层节点的spine动画
        let shngcengNode = this.node.getChildByName("shangceng");
        let shangceng = shngcengNode.getComponent(sp.Skeleton);
        let shangData = await ResMgr.getInstance().lazyLoadySpine("Lobby/ani/awardget/gongxihuode_shangceng");
        shangceng.skeletonData = shangData
        shangceng.animation = "tanchu";
        Tween.stopAllByTarget(shngcengNode);
        tween(shngcengNode).delay(1.5).call(()=>{
            shngcengNode.active = false;
        }).union().start();
    }

    async initAllItems(items: { id: number, cnt: number }[]) {
        let node = new Node();
        for (let i = 0; i < items.length; i++) {

            let pb =ResMgr.getInstance().getPrefabByPath("Lobby/Prefabs/lobbydropitem");
            let item = instantiate(pb);
            let x = i * 150;
            let y = 0;
            item.setPosition(x, y);
            node.addChild(item);

            let id = items[i].id;
            if(items[i].id == 1){
                id = 0;
            }else if(items[i].id == 2){
                id = 1;
            }
            item.getChildByName("icon").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_"+id);

            //这里应该还有一个图标放大缩小的问题。

            item.getChildByName("cnt").getComponent(Label).string =  Utils.cvtToKMB(items[i].cnt);
        }
        node.setPosition(items.length / 2 * (-150) + 150 / 2, 0);
        this.node.getChildByName("content").addChild(node);
    }

    //确定，关闭界面
    onBtnOk() {
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        this.closeSelf();
    }

    onHide() {

    }
}

