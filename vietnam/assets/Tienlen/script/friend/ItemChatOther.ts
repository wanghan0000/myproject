import { _decorator, Component, Node, Sprite, Label, UITransform, Overflow, Prefab, Layout, earcut, RichText, SpriteAtlas } from 'cc';
import { parse } from 'protobufjs';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import chat from '../../../ScriptCore/protocol/chat.js';
import ResourceHelper from '../common/helper/ResourceHelper';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { ItemEmotion } from './ItemEmotion';
const { ccclass, property } = _decorator;

@ccclass('ItemChatOther')
export class ItemChatOther extends Component {
    @property(Sprite)
    public spHead: Sprite;
    @property(RichText)
    public labelContent: RichText;
    @property(Sprite)
    public spChatBg: Sprite;
    @property(Prefab)
    public pfbItemEmotion: Prefab;
    @property(Label)
    private labelName: Label;
    @property
    private minheight: number = 78;
    private _maxWidth: number = 0;
    private _data: chat.chat.IChatLog;
    private _defItemHeight: number = 0;
    private _waitInitFlag: boolean = false;
    onLoad() {
        this._maxWidth = this.spChatBg.getComponent(UITransform).width - 40;
        this.spHead.node.parent.on(Node.EventType.TOUCH_END, null);
        this._defItemHeight = this.getComponent(UITransform).height;
    }

    public get data(): chat.chat.IChatLog {
        return this._data;
    }

    async updateHead(head: number) {
        this.spHead.spriteFrame = await Utils.getHeadSpriteFrame(head);
    }

    onEnable() {
        if (this._data && this._waitInitFlag) {
            this._waitInitFlag = false;
            this.init(this._data);
        }
    }

    public async init(data: chat.chat.IChatLog) {
        this._data = data;
        if (!this.node.activeInHierarchy) {
            this._waitInitFlag = true;
            return;
        }
        let labelTrans = this.labelContent.getComponent(UITransform);
        let bgTrans = this.spChatBg.getComponent(UITransform);
        let itemTrans = this.getComponent(UITransform);
        this.updateHead(data.SrcHead);
        this.labelName.string = data.SrcName;
        this.labelContent.string = this.parseEmotion(data.Content);
        this.spChatBg.enabled = false;
        await TienlenHelper.nodeWait(0, this.node);
        if (labelTrans.width > this._maxWidth) {
            labelTrans.width = this._maxWidth;
            this.labelContent.maxWidth = this._maxWidth;
        }
        await TienlenHelper.nodeWait(0, this.node);
        this.spChatBg.enabled = true;
        let targetHeight = Math.max(this.minheight, labelTrans.height + 20);
        bgTrans.setContentSize(labelTrans.width + 45, targetHeight);
        if (bgTrans.height > this._defItemHeight) {
            itemTrans.height = bgTrans.height + 15;
        } else {
            itemTrans.height = this._defItemHeight;
        }
    }

    public parseEmotion(content: string) {
        let dest = "<color=#ea7054>";
        let imgTag = "<img src='emotion_%d_01'/>";
        let list = content.split('#');
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element) {
                let idx = element.indexOf("$");
                if (idx != -1) {
                    let value = parseInt(element.substring(0, idx));
                    if (value >= 0 && value < TienlenDefine.EmotionNum) {
                        let imgStr = imgTag.replace("%d", value.toString());
                        dest += imgStr;
                        dest += element.substring(idx + 1);
                    } else {
                        dest += element;
                    }
                } else {
                    dest += element;
                }
            }
        }
        dest += "</color>"
        return dest;
    }

}

