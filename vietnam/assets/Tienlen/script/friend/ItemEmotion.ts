import { _decorator, Component, Node, Sprite, Size, UITransform, Widget, SpriteFrame, Button, SpriteAtlas } from 'cc';
import EventSystem from '../common/EventSystem';
import ResourceHelper from '../common/helper/ResourceHelper';
import { Evt_EmotionSel } from '../handlers/EventHandlers';
import TienlenDefine from '../TienlenDefine';
import { TienlenRuntime } from '../TienlenRuntime';
const { ccclass, property } = _decorator;

@ccclass('ItemEmotion')
export class ItemEmotion extends Component {
    @property
    private scale: number = 1;
    @property
    private sameSize: boolean = true;
    @property
    private designWidth: number = 75;
    @property
    private designHeight: number = 75;
    @property
    private clickable: boolean = false;
    @property(SpriteAtlas)
    private atlas: SpriteAtlas;
    private _spEmotion: Sprite;
    private _data: string;


    onLoad() {
        this._spEmotion = this.getComponentInChildren(Sprite);
        this.setClickAble(this.clickable);
    }

    setClickAble(flag: boolean) {
        this.clickable = flag;
        if (this.clickable) {
            this.node.on(Button.EventType.CLICK, this._onClick, this);
            this.getComponent(Button).interactable = true;
        } else {
            this.node.targetOff(this);
            this.getComponent(Button).interactable = false;
        }
    }

    _onClick() {
        EventSystem.instance.publish(Evt_EmotionSel, `#${this.data}$`);
    }

    resize(scale: number) {
        this.scale = scale;
        let spTrans = this._spEmotion.getComponent(UITransform);
        let width = this.sameSize ? this.designWidth * this.scale : spTrans.width * this.scale;
        let height = this.sameSize ? this.designHeight * this.scale : spTrans.height * this.scale;
        this.getComponent(UITransform).setContentSize(width, height);
        this._spEmotion.getComponent(Widget).updateAlignment();
    }

    public set data(value: string) {
        this._data = value;
        this.updateSkin(value);
    }
    public get data(): string {
        return this._data;
    }
    public async updateSkin(value: string) {
        this._spEmotion.spriteFrame = this.atlas.getSpriteFrame(`emotion_${value}_01`);
    }



}

