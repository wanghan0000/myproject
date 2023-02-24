import { _decorator, Component, Node, Label } from 'cc';
import { BagData } from '../../../data/BagData';
import { UserData } from '../../../data/UserData';
import { EventMgr } from '../../../events/eventmgr';
import { EventName } from '../../../events/EventName';
import { PlayerState, PlayerStateMgr } from '../../../gamestate/PlayerState';
import { Utils } from '../../../panda/utils/Utils';
const { ccclass, property } = _decorator;

@ccclass('UITopbar')
export class UITopbar extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }

    private moneyTxt:Label = null;
    private diamondTxt:Label = null;
    private exchangeTxt:Label = null;

    //控件加载的时候就执行货币数据更新
    onLoad(){
        this.moneyTxt = this.node.getChildByName("gold").getChildByName("valtxt").getComponent(Label);
        this.diamondTxt = this.node.getChildByName("diamond").getChildByName("valtxt").getComponent(Label);
        this.exchangeTxt = this.node.getChildByName("exchange").getChildByName("valtxt").getComponent(Label);

        this.updateGoldDiamond();
        EventMgr.getInstance().addEventListener(EventName.SC_USER_GOLD_CHANGE, this.updateGoldDiamond.bind(this), this);
        EventMgr.getInstance().addEventListener(EventName.SC_Player_Coin_Change, this.updateGoldDiamond.bind(this), this);
        EventMgr.getInstance().addEventListener(EventName.BAG_DATA_ASYNC_NOTIFY,this.updateGoldDiamond,this);
    }

    //控件销毁取消事件的注册
    onDestroy(){
        EventMgr.getInstance().removeByTarget(this);
    }

    //更新金币和钻石
    updateGoldDiamond():void{
        this.moneyTxt.string = Utils.cvtToKMB(UserData.getInstance().getCoin()).toString();
        if(PlayerStateMgr.getInstance().chkNeedLogin()){
            this.moneyTxt.string = Utils.cvtToKMB(100000).toString();
            this.diamondTxt.string = Utils.cvtToKMB(0).toString();
            this.exchangeTxt.string = Utils.cvtToKMB(0).toString();
        }else{
            this.diamondTxt.string = Utils.cvtToKMB(UserData.getInstance().getDiamond()).toString();
            this.exchangeTxt.string = Utils.cvtToKMB(BagData.getInstance().getVCardCnt()).toString();
        }
    }
}

