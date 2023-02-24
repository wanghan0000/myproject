
import { _decorator, v3, tween, Button,Node, Component, Label, Sprite, UITransform, Layout } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { UserData } from '../../ScriptCore/data/UserData';
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import NBNumberLable from './component/NBNumberLable';
import { FruitsBGMusic } from './FruitsConfig';
import { adapterLabelBg, fruitsNumFormat } from './FruitsUtils';
const { ccclass, property } = _decorator;

@ccclass('FruitsTopUI')
export class FruitsTopUI extends Component {

    //金币
    @property(NBNumberLable)
    goldLabel: NBNumberLable = null;

    //钻石
    @property(Label)
     diamondLabel: Label = null;

    @property(Sprite)
    head: Sprite = null;

    @property(Button)
    btnBack: Button = null;

    @property(Button)
    roomBtnBack: Button = null;

    @property(Node)
    diamondBgNode:Node = null;

    clickBackCallBack:Function = null;

    async onLoad(){
        this.node.position = v3(0, 410, 0)
        this.head.spriteFrame = await Utils.getHeadSpriteFrame(UserData.getInstance().getHead());
    }


    public async showEffect(): Promise<boolean> {
        this.node.position = v3(0, 410, 0)
        return new Promise((reject) => {
            tween(this.node).to(0.3, { position: v3(0, 310, 0) }, {
                onComplete: () => {
                    reject(true)
                }
            }).start()
        })
    }


    public updateCoin(coin: number, play?: boolean) {
        const text = coin + '';
        let old = this.goldLabel.string;
        this.goldLabel.string = fruitsNumFormat(text);
        // adapterLabelBg({
        //     fatherNode: this.goldLabel.node.parent,
        //     lb: this.goldLabel,
        //     w: 13,
        //     leftInterval: 40,
        //     rightInterval: 13
        // })

        if (play) {
            this.goldLabel.string = old;
            this.goldLabel.play({ target: coin, time: 0.5, format: true })
        }
    }

    public updateDiamond(diamond: number) {
        const text = diamond + '';
        this.diamondLabel.string = fruitsNumFormat(text);


        const width = 13 * text.length + 20 + 20;
        
        this.diamondBgNode.getComponent(UITransform).width = width + 60;
        //this.diamondBgNode.getComponent(UITransform).width = 
        // adapterLabelBg({
        //     fatherNode: this.diamondLabel.node.parent,
        //     lb: this.diamondLabel,
        //     w: 13,
        //     leftInterval: 0,
        //     rightInterval: 0
        // })
    }

    public clickBack(){
        AudioMgr.getInstance().playSound(FruitsBGMusic.click)
        this.clickBackCallBack && this.clickBackCallBack();
    }
}
