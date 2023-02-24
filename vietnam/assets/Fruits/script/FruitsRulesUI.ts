
import { _decorator, v3, tween, Button,Node } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { UIPopup, UIScreen } from '../../ScriptCore/UIFrame/UIForm';
import { FruitsBGMusic } from './FruitsConfig';
const { ccclass, property } = _decorator;

@ccclass('FruitsRulesUI')
export class FruitsRulesUI extends UIScreen {

    @property({type:[Button]})
    btns:Button[] = [];

    @property({type:[Node]})
    nodes:Node[]= [];

    private curentIndex = 0;
    start () {
        // this.node.scale = v3(0.1, 0.1, 0.1);
        // tween(this.node).to(0.2, {scale: v3(1.0, 1.0, 1.0)}).start();
    }

    btnOnClose () {
        AudioMgr.getInstance().playSound(FruitsBGMusic.click)
        this.closeSelf();
    }

    clickUp(){
        AudioMgr.getInstance().playSound(FruitsBGMusic.click)
        this.nodes[this.curentIndex].active = false;
        this.curentIndex += 1;
        if(this.curentIndex >= this.nodes.length){
            this.curentIndex = 0;
        }
        this.nodes[this.curentIndex].active = true;
    }

    clickDown(){
        AudioMgr.getInstance().playSound(FruitsBGMusic.click)
        this.nodes[this.curentIndex].active = false;
        this.curentIndex -= 1;
        if(this.curentIndex < 0){
            this.curentIndex = this.nodes.length - 1;
        }
        this.nodes[this.curentIndex].active = true;
    }
}
