
import { _decorator, Node, tween, v3, EditBox, Label, ToggleContainer, Sprite, Button } from 'cc';
import { UserData } from '../../../ScriptCore/data/UserData';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { FuncExtend } from '../../../ScriptCore/panda/utils/FuncExtend';
import welfare from '../../../ScriptCore/protocol/welfare.js';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import { DB_GameSubsidy } from '../../config/db_gamesubsidy';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { TienlenUIMgr } from '../TienlenUIMgr';
const { ccclass, property } = _decorator;

@ccclass('TienlenActivity')
export class TienlenActivity extends UIScreen {
    @property(Node)
    node_reward: Node | null = null;
    @property(Node)
    node_assistance: Node | null = null;
    @property(Label)
    label_asiscoin: Label | null = null;
    @property(Label)
    label_asiscount: Label | null = null;

    // start() {
    //     this.node.scale = v3(0.1, 0.1, 0.1);
    //     tween(this.node).to(0.2, { scale: v3(1.0, 1.0, 1.0) }).start();
    // }

    onShow(...args: any) {
        EventMgr.getInstance().addEventListener(EventName.SC_WELF_GETRELIEFFUND, this.onAssistanceGet, this);
        // EventMgr.getInstance().addEventListener(EventName.SC_SIGN_UPDATE, this.checkSignCompelte, this);
        this.initView();
        // this.setToggleGroupIndex(args[0] || 0);
        // this.checkSignCompelte();
    }

    onHide() {
        EventMgr.getInstance().remove(EventName.SC_WELF_GETRELIEFFUND, this.onAssistanceGet, this);
        // EventMgr.getInstance().remove(EventName.SC_SIGN_UPDATE, this.checkSignCompelte, this);
    }

    initView() {
        let data = DB_GameSubsidy.getInstance().datas.Arr[0];
        this.label_asiscoin.string = data.LimitNum.toString();
        let lastTime = data.Times - UserData.getInstance().getReliefFundTimes();
        this.label_asiscount.string = lastTime.toString();
        if (lastTime == 0) {
            this.node_assistance.getChildByName("btn_getbuzhu").getComponent(Sprite).grayscale = true;
            this.node_assistance.getChildByName("btn_getbuzhu").getComponent(Button).interactable = false;
        }

        // this.node_reward.active = true;
        // this.node_assistance.active = false;
    }

    async checkSignCompelte() {
        let sign = TienlenRuntime.signData;
        if (sign.SignCount >= 14) {
            let group = this.node.getChildByName('ToggleGroup').getComponent(ToggleContainer);
            if (group) {
                group.toggleItems[0].node.active = false;
                group.toggleItems[1].isChecked = true;
                this.node_reward.active = false;
                this.node_assistance.active = true;
            }
        }

        let node = this.node.getChildByName('ToggleGroup').getChildByName("Toggle1");
        if (node.active) {
            let roomId = UserData.getInstance().getRoomId();
            let gameFreeId = UserData.getInstance().getGameFreeId();
            if (roomId != null && roomId != 0 && gameFreeId != null && gameFreeId != 0) {
            } else {
                // let ret = await TienlenHelper.callSignData();
                // TienlenRuntime.signData = ret;
                // if (ret.SignCount < 14 && ret.TodaySign == 0) {
                //     FuncExtend.warn(node, 90, 25);
                // } else {
                //     FuncExtend.clearnWarn(node);
                // }
            }
        }
    }

    setToggleGroupIndex(index: number) {
        let group = this.node.getChildByName('ToggleGroup').getComponent(ToggleContainer);
        group.toggleItems[index].isChecked = true;
        this.node_reward.active = index == 0;
        this.node_assistance.active = index == 1;
    }


    btnOnClose() {
        this.closeSelf();
    }

    btnOnWelfare() {

    }

    btnOnActivity() {
        TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.zanweikaifangTxt"));
    }

    btnOnNotice() {
        TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.zanweikaifangTxt"));
    }

    btnOnNoOpen() {
        TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.zanweikaifangTxt"));
    }

    toggleOnReward() {
        this.node_reward.active = true;
        this.node_assistance.active = false;
    }

    toggleOnAssistance() {
        // this.node_reward.active = false;
        // this.node_assistance.active = true;
    }

    async btnOnGetReward() {
        // let ret = TienlenRuntime.signData || await TienlenHelper.callSignData();
        // TienlenRuntime.signData = ret;
        // TienlenHelper.showSign(ret);
    }

    onRewardGet() {

    }

    btnOnGetAssistance() {
        console.log("send Assistance get");
        UIMgr.getInstance().showWaiting();
        let pack = new welfare.welfare.CSGetReliefFund();
        SocketMgr.send(welfare.welfare.SPacketID.PACKET_CS_WELF_GETRELIEFFUND, pack);
    }

    onAssistanceGet(msg: welfare.welfare.SCGetReliefFund) {
        console.log("recv Assistance get");
        UIMgr.getInstance().clearWaiting();
        if (msg.OpRetCode != 0) {
            console.log("recv Assistance get errcode:", msg.OpRetCode);
            if (msg.OpRetCode == welfare.welfare.OpResultCode.OPRC_NoTimes) {
                TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("tienlen.pochanjiangliyilingwanTxt"));
            } else if (msg.OpRetCode == welfare.welfare.OpResultCode.OPRC_CoinTooMore) {
                TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("tienlen.weidadaolingqutiaojianTxt"));
            } else if (msg.OpRetCode == welfare.welfare.OpResultCode.OPRC_Error) {
                TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.lingqushibaiTxt"));
            }
            return;
        }

        let list: { id: number, cnt: number }[] = [];

        if (msg.Coin > 0) {
            list.push({ id: 0, cnt: msg.Coin });
        }

        TienlenUIMgr.getInstance().showAwardGet(list);
        let data = DB_GameSubsidy.getInstance().datas.Arr[0];
        let lastTime = data.Times - msg.Times;
        this.label_asiscount.string = lastTime.toString();
        UserData.getInstance().setReliefFundTimes(msg.Times);
        if (lastTime == 0) {
            this.node_assistance.getChildByName("btn_getbuzhu").getComponent(Sprite).grayscale = true;
            this.node_assistance.getChildByName("btn_getbuzhu").getComponent(Button).interactable = false;
        }
    }
}
