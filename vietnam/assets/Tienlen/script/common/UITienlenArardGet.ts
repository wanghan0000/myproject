import { _decorator, Component, Node, Sprite, Label, instantiate, sp, Tween, tween, v3 } from 'cc';
import { AudioMgr } from '../../../ScriptCore/audio/AudioMgr';
import { LobbyAudioCfg } from '../../../ScriptCore/audio/LobbyAudioCfg';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { ModalOpacity } from '../../../ScriptCore/UIFrame/config/SysDefine';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { ModalType } from '../../../ScriptCore/UIFrame/Struct';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
const { ccclass, property } = _decorator;

@ccclass('UITienlenArardGet')
export class UITienlenArardGet extends UIWindow {

    modalType = new ModalType(ModalOpacity.OpacityHigh);
    start() {

    }

    update(deltaTime: number) {

    }
    private curItems:{ id: number, cnt: number }[] = [];
    //物品道具的掉落
    onShow(items: { id: number, cnt: number }[]) {
        //播放获得的音效
        this.curItems = items;
        // items.push({id:0,cnt:1000000});
        // items.push({id:1,cnt:1000000});
        // items.push({id:10001,cnt:1000000});
        // items.push({id:20001,cnt:1000000});
        // items.push({id:20002,cnt:1000000});
        // items.push({id:40001,cnt:1000000});
        AudioMgr.getInstance().playLongSound(LobbyAudioCfg.award_get);
        this.initSpineAni();
        this.scheduleOnce(()=>{
            this.initAllItems(items);
        },0.22);
    }

    public async showEffect(): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.scheduleOnce(()=>{
                resolve(true);
            },0.016);
        });
    }

    public getShowEffectTime():number{
        return 0.016;
    }

    //spine动画开始播放
    async initSpineAni() {
        //下层节点的spine动画
        let xiacengNode = this.node.getChildByName("xiaceng");
        let xiaceng = xiacengNode.getComponent(sp.Skeleton);
        let xiacengData = await ResMgr.getInstance().lazyLoadySpine("Lobby/ani/landscapeawardget/gongxihuode_hengban");
        xiaceng.skeletonData = xiacengData;

        xiaceng.setAnimation(0, "tanchu", false);
        xiaceng.animation = "tanchu";
        xiaceng.setCompleteListener(() => {
            console.log("播放完成了,切换tanchu");
            if (xiaceng.animation == "tanchu") {
                xiaceng.animation = "daiji";
                xiaceng.setAnimation(0, "daiji", true);
            }
        });

        //上层节点的spine动画
        // let shngcengNode = this.node.getChildByName("shangceng");
        // let shangceng = shngcengNode.getComponent(sp.Skeleton);
        
        // shangceng.animation = "1";
        // Tween.stopAllByTarget(shngcengNode);
        // tween(shngcengNode).delay(1.5).call(() => {
        //     shngcengNode.active = false;
        // }).union().start();
    }

    async initAllItems(items: { id: number, cnt: number }[]) {
        let node = new Node();
        for (let i = 0; i < items.length; i++) {

            //let pb = await ResourceHelper.loadResInAB(TienlenDefine.ABName, "prefab/shop/lobbydropitem", Prefab);
            let pb = ResMgr.getInstance().getPrefabByPath("Lobby/Prefabs/landscapedropitem");
            let item = instantiate(pb);
            let x = i * 150;
            let y = 0;
            item.setPosition(x, y);
            node.addChild(item);

            let id = items[i].id;
            if (items[i].id == 1) {
                id = 0;
            } else if (items[i].id == 2) {
                id = 1;
            }
            //更换item的底框
            item.getChildByName("bg").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/lobby_common_plist").getSpriteFrame("lobby_award_item_bg_tienlen");
            item.getChildByName("icon").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("drop_icon_" + id);

            //爆炸的白光效果
            let spine = await ResMgr.getInstance().lazyLoadySpine("Lobby/ani/landscapeawardget/huode_baozha_lizi");
            item.getChildByName("baozha").getComponent(sp.Skeleton).skeletonData = spine;
            item.getChildByName("baozha").getComponent(sp.Skeleton).premultipliedAlpha = false;

            item.getChildByName("cnt").getComponent(Label).string = Utils.cvtToKMB(items[i].cnt);

            item.setScale(v3(3,3,1));
            Tween.stopAllByTarget(item);
            item.active = false;
            tween(item).delay(0.06*i).call(()=>{
                item.active = true;
                item.getChildByName("baozha").getComponent(sp.Skeleton).setAnimation(0,"tanchu",false);
            }).to(0.08,{scale:v3(0.8,0.8,1)},{easing:"linear"}).to(0.02,{scale:v3(1,1,1)},{easing:"linear"}).union().start();
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

