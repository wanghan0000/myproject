import { _decorator, Component, Node, instantiate, SkeletalAnimation, Sprite, Label, SpriteFrame } from 'cc';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { Model2D } from '../common/component/Model2D';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('ModelCard')
export class ModelCard extends Component {
    @property(Label)
    public labelName: Label;
    @property(Label)
    public labelLv: Label;
    public async show(id: number, level: number, name: string) {
        this.node.active = true;
        if (this.node.children[0].children.length > 0) return;
        let pfb = await TienlenHelper.getModel2DPfb(id);
        let node = instantiate(pfb);
        this.node.children[0].addChild(node);
        node.getComponent(Model2D).playIdleAnim();
        //this.labelName.string = name;
        //这里不再走name 应该走多语言中的name对应的多语言翻译
        this.labelName.string = I18nMgr.getInstance().getStringFromIntroductionConfig(id,"name");
        this.labelLv.string = `${level}`;
    }
    public hide() {
        this.node.active = false;
    }
}

