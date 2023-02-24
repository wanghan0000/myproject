import { _decorator, Component, Node, Prefab, instantiate, Sprite, SpriteAtlas, labelAssembler, Label, Vec3, sp, Tween, tween } from 'cc';
import { AudioMgr } from '../../../ScriptCore/audio/AudioMgr';
import { LobbyAudioCfg } from '../../../ScriptCore/audio/LobbyAudioCfg';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import ResourceHelper from '../common/helper/ResourceHelper';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('UIAwardGet')
export class UIAwardGet extends UIWindow {
    start() {

    }

    update(deltaTime: number) {

    }

    //物品道具的掉落
    onShow(items: { id: number, cnt: number }[]) {
        
        AudioMgr.getInstance().playLongSound(LobbyAudioCfg.award_get);
        this.initAllItems(items);
    }


    


    async initAllItems(items: { id: number, cnt: number }[]) {
        let node = new Node();
        for (let i = 0; i < items.length; i++) {

            let pb = await ResourceHelper.loadResInAB(TienlenDefine.ABName, "prefab/shop/dropitem", Prefab);
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


            item.getChildByName("cnt").getComponent(Label).string = "X" + items[i].cnt;

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

