import { _decorator, Component, Node, Sprite, Label } from 'cc';
import { BagData } from '../../../ScriptCore/data/BagData';
import { UserData } from '../../../ScriptCore/data/UserData';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import TienlenHelper from '../TienlenHelper';
import { TienlenUIMgr } from '../TienlenUIMgr';
const { ccclass, property } = _decorator;

@ccclass('TienlenUser')
export class TienlenUser extends Component {
    @property(Sprite)
    public spHead: Sprite;
    @property(Label)
    public labelName: Label;
    @property(Label)
    public labelGold: Label;
    @property(Label)
    public labelDiamond: Label;
    @property(Label)
    public labelExchange: Label;

    onLoad() {
        this.initView();
        this.updateGoldAndDiamond();
        EventMgr.getInstance().addEventListener(EventName.SC_USER_GOLD_CHANGE, this.updateGoldAndDiamond, this);
        EventMgr.getInstance().addEventListener(EventName.SC_Player_Coin_Change, this.updateGoldAndDiamond, this);
        EventMgr.getInstance().addEventListener(EventName.BAG_DATA_ASYNC_NOTIFY, this.updateGoldAndDiamond, this);
        this.spHead.node.on(Node.EventType.TOUCH_END, async () => {
            let ret = await TienlenHelper.callQueryPlayer(UserData.getInstance().getSnId());
            TienlenHelper.showUserInfo(ret);
        }, this);
    }

    onDestroy() {
        EventMgr.getInstance().removeByTarget(this);
    }

    async initView() {
        this.spHead.spriteFrame = await Utils.getHeadSpriteFrame(UserData.getInstance().getHead());
    }

    updateGoldAndDiamond() {
        this.labelGold.string = Utils.cvtToKMB(UserData.getInstance().getGold());
        this.labelDiamond.string = Utils.cvtToKMB(UserData.getInstance().getDiamond());
        this.labelExchange.string = Utils.cvtToKMB(BagData.getInstance().getVCardCnt()).toString();
    }

    onBtnAdd(evt: any, customData: string) {
        TienlenUIMgr.getInstance().showTienLenShop(customData);
    }

    onBtnExchange() {
        TienlenUIMgr.getInstance().showTienLenExcShop();
    }
}


