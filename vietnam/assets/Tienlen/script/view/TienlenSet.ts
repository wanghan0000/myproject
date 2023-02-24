
import { _decorator, Node, tween, v3, EditBox, Label, Toggle } from 'cc';
import { AudioMgr } from '../../../ScriptCore/audio/AudioMgr';
import { LobbyAudioCfg } from '../../../ScriptCore/audio/LobbyAudioCfg';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import player from '../../../ScriptCore/protocol/player.js';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import TienlenHelper from '../TienlenHelper';
import { TienlenUIMgr } from '../TienlenUIMgr';

import * as i18n from 'db://i18n/LanguageData';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { ProjectConfig } from '../../../ScriptCore/ProjectConfig';



const { ccclass, property } = _decorator;

@ccclass('TienlenSet')
export class TienlenSet extends UIWindow {
    @property(Node)
    btnMusicClose: Node | null = null;

    @property(Node)
    btnAudioClose: Node | null = null;

    @property(Node)
    btnShakeClose: Node | null = null;

    @property(Node)
    btnMusicOpen: Node | null = null;

    @property(Node)
    btnAudioOpen: Node | null = null;

    @property(Node)
    btnShakeOpen: Node | null = null;

    @property(Label)
    editCode: Label | null = null;

    start() {
        this.btn_chinalg = this.node.getChildByName("layout").getChildByName("btn_chinalg");
        this.btn_yingyulg = this.node.getChildByName("layout").getChildByName("btn_yingyulg");
        this.btn_jianpuzailg = this.node.getChildByName("layout").getChildByName("btn_jianpuzailg");
        this.btn_yueNanlg = this.node.getChildByName("layout").getChildByName("btn_yuenan");

        this.btn_chinalg.active = ProjectConfig.pkgLng.indexOf("zh") != -1;
        this.btn_yingyulg.active = ProjectConfig.pkgLng.indexOf("en") != -1;
        this.btn_jianpuzailg.active = ProjectConfig.pkgLng.indexOf("kh") != -1;
        this.btn_yueNanlg.active = ProjectConfig.pkgLng.indexOf("vi") != -1;

        this.btn_chinalg.getChildByName("duisp").active = false;
        this.btn_yingyulg.getChildByName("duisp").active = false;
        this.btn_jianpuzailg.getChildByName("duisp").active = false;
        this.btn_yueNanlg.getChildByName("duisp").active = false;

        this.refreshLangState();

        this.node.scale = v3(0.1, 0.1, 0.1);
        tween(this.node).to(0.2, { scale: v3(1.0, 1.0, 1.0) }).start();
        this.refreshSoundAndMusic();
    }

    private btn_chinalg:Node = null;
    private btn_yingyulg:Node = null;
    private btn_jianpuzailg:Node = null;
    private btn_yueNanlg:Node = null;

    onShow() {
        EventMgr.getInstance().addEventListener(EventName.ALL_SETTING, this.onRewardGet, this);
    }

    onHide() {
        EventMgr.getInstance().remove(EventName.ALL_SETTING, this.onRewardGet, this);
    }

    btnOnClose() {
        this.closeSelf();
    }

    refreshSoundAndMusic() {
        let flag = AudioMgr.getInstance().chkIsMusic();
        this.refreshMusicUI(flag);

        flag = AudioMgr.getInstance().chkIsSound();
        this.refreshSoundUI(flag);
    }

    refreshMusicUI(flag: boolean) {
        this.btnMusicOpen!.active = flag;
        this.btnMusicClose!.active = !flag;
    }

    refreshSoundUI(flag: boolean) {
        this.btnAudioOpen!.active = flag;
        this.btnAudioClose!.active = !flag;
    }

    onBtnMusic() {
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        let flag = AudioMgr.getInstance().chkIsMusic();
        AudioMgr.getInstance().switchMusic(!flag);
        TienlenHelper.switchMusic(!flag);
        this.refreshSoundAndMusic();
    }

    onBtnSound() {
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        let flag = AudioMgr.getInstance().chkIsSound();
        AudioMgr.getInstance().switchSound(!flag);
        this.refreshSoundAndMusic();
    }

    btnOnShakeOpen() {
        this.btnShakeClose!.active = false;
        this.btnShakeOpen!.active = true;
    }

    btnOnShakeClose() {
        this.btnShakeClose!.active = true;
        this.btnShakeOpen!.active = false;
    }

    onRewardGet(msg: player.player.SCPlayerSetting) {
        console.log("recv reward get");
        UIMgr.getInstance().clearWaiting();
        if (msg.OpRetCode != 0) {
            console.log("recv reward get errcode:", msg.OpRetCode);
            if (msg.OpRetCode == player.player.OpResultCode.OPRC_Jyb_Receive) {
                TienlenUIMgr.getInstance().AlertTxt("该兑换码已被使用!");
            } else if (msg.OpRetCode == player.player.OpResultCode.OPRC_Jyb_CodeExist) {
                TienlenUIMgr.getInstance().AlertTxt("已经兑换过该礼包!");
            } else if (msg.OpRetCode == player.player.OpResultCode.OPRC_Jyb_TimeErr) {
                TienlenUIMgr.getInstance().AlertTxt("该兑换码已过期!");
            } else if (msg.OpRetCode == player.player.OpResultCode.OPRC_Jyb_CodeErr) {
                TienlenUIMgr.getInstance().AlertTxt("请输入正确的兑换码!");
            }
            return;
        }

        let list: { id: number, cnt: number }[] = [];
        if (msg.GainItem.ItemId.length > 0) {
            for (let i = 0; i < msg.GainItem.ItemId.length; i++) {
                let itemData = msg.GainItem.ItemId[i];
                list.push({ id: itemData.ItemId, cnt: itemData.ItemNum });
            }
        }

        if (msg.GainItem.Coin > 0) {
            list.push({ id: 1, cnt: msg.GainItem.Coin });
        }
        if (msg.GainItem.Diamond > 0) {
            list.push({ id: 2, cnt: msg.GainItem.Diamond });
        }
        TienlenUIMgr.getInstance().showAwardGet(list);
    }

    btnOnGetReward() {
        console.log("send reward get");
        UIMgr.getInstance().showWaiting();
        let pack = new player.player.CSPlayerSetting();
        pack.Optype = 1;
        pack.PackageCode = this.editCode.string;
        SocketMgr.send(player.player.PlayerPacketID.PACKET_ALL_SETTING, pack);
    }

    onToggleSet() {

    }

    onToggleOther() {
        TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.zanweikaifangTxt"));
    }



    //刷新当前语言的选中状态
    private refreshLangState(){
        this.btn_chinalg.getChildByName("duisp").active = false;
        this.btn_yingyulg.getChildByName("duisp").active = false;
        this.btn_jianpuzailg.getChildByName("duisp").active = false;
        this.btn_yueNanlg.getChildByName("duisp").active = false;
        if(i18n._language == "zh"){
            this.btn_chinalg.getChildByName("duisp").active = true;
        }else if(i18n._language == "en"){
            this.btn_yingyulg.getChildByName("duisp").active = true;
        }else if(i18n._language == "kh"){
            this.btn_jianpuzailg.getChildByName("duisp").active = true;
        }else if (i18n._language == "vi"){
            this.btn_yueNanlg.getChildByName("duisp").active = true;
        }
    }

    // //中文
    onbtnZhCnLanguage(){
        if(i18n._language != "zh"){
            i18n.init('zh');
            i18n.updateSceneRenderers();
            EventMgr.getInstance().dispatchEvent(EventName.I18N_CHANGED_NOTIFY);
            Utils.setLocalStorageLng("zh");
        }
        this.refreshLangState();
    }

    //其他语言 暂时定义为英文
    onBtnEnEsLanguage(){
         if(i18n._language != "en"){
             i18n.init('en');
             i18n.updateSceneRenderers();
             EventMgr.getInstance().dispatchEvent(EventName.I18N_CHANGED_NOTIFY);
             Utils.setLocalStorageLng("en");
         }
         this.refreshLangState();
    }

    //高棉语切换
    onBtnKHLanguage(){
        if(i18n._language != "kh"){
            i18n.init("kh");
            i18n.updateSceneRenderers();
            EventMgr.getInstance().dispatchEvent(EventName.I18N_CHANGED_NOTIFY);
            Utils.setLocalStorageLng("kh");
        }
        this.refreshLangState();
    }

    //越南语
    onBtnViLanguage(){
        if(i18n._language  != "vi"){
            i18n.init("vi");
            i18n.updateSceneRenderers();
            EventMgr.getInstance().dispatchEvent(EventName.I18N_CHANGED_NOTIFY);
            Utils.setLocalStorageLng("vi");
        }
        this.refreshLangState();
    }

}
