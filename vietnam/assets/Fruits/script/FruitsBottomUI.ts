
import { _decorator, v3, tween, Button, Node, Component, Label, Sprite, UITransform, Layout } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { UserData } from '../../ScriptCore/data/UserData';
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import { FruitsUIMgr } from '../FruitsUIMgr';
import NBNumberLable from './component/NBNumberLable';
import { FruitsBGMusic } from './FruitsConfig';
const { ccclass, property } = _decorator;

@ccclass('FruitsBottomUI')
export class FruitsBottomUI extends Component {
    @property(Button)
    btnSpinNode: Button = null;
    //下注按钮
    @property({ type: [Button] })
    betBtns: Button[] = [];
    //下注金额
    @property(Label)
    betLabel: Label = null;
    //中奖win
    @property(NBNumberLable)
    winLabel: NBNumberLable = null;
    @property(Node)
    winNode: Node = null;
    @property(Node)
    autoBg: Node = null;
    @property(Label)
    autoTimesLabel: Label = null;

    clickAutoFunc: Function = null;

    clickChangeBetFunc:Function = null;

    clickLaunchFunc:Function = null;
    async onLoad() {
        this.node.position = v3(0, -100, 0)
    }

    public async showEffect(): Promise<boolean> {
        this.node.position = v3(0, -100, 0)
        return new Promise((reject) => {
            tween(this.node).to(0.3, { position: v3(0, 0, 0) }, {
                onComplete: () => {
                    reject(true)
                }
            }).start()
        })
    }


    //选择自动滚动次数
    private async clickAuto(ev: any, type: string) {
        AudioMgr.getInstance().playSound(FruitsBGMusic.click)
        this.clickAutoFunc && this.clickAutoFunc(ev, type);
    }

    longTrigger(ev: any) {
        this.autoBg.active = true;
    }

    /**
    * 点击帮助页面
    */
    async clickHelp() {
        AudioMgr.getInstance().playSound(FruitsBGMusic.click)
        await FruitsUIMgr.getInstance().showHelpUI();
    }

    /**
    * 下注切换
    * @param target 
    * @param tag 
    */
    clickChangeBet(target: any, tag: string) {
        AudioMgr.getInstance().playSound(FruitsBGMusic.click)
        this.clickChangeBetFunc && this.clickChangeBetFunc(target,tag);
    }

    private clickLaunch(){
        AudioMgr.getInstance().playSound(FruitsBGMusic.click)
        this.clickLaunchFunc && this.clickLaunchFunc();
    }
}
