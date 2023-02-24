import { _decorator, Node, Toggle } from 'cc';
import { AudioMgr } from '../../../audio/AudioMgr';
import { UIScreen } from '../../../UIFrame/UIForm';

import * as i18n from 'db://i18n/LanguageData';
import { EventMgr } from '../../../events/eventmgr';
import { EventName } from '../../../events/EventName';
import { Utils } from '../../../panda/utils/Utils';
import { ProjectConfig } from '../../../ProjectConfig';

const { ccclass, property } = _decorator;

@ccclass('UILobbySet')
export class UILobbySet extends UIScreen {
    @property(Node)
    btnMusicClose: Node | null = null;

    @property(Node)
    btnAudioClose: Node | null = null;

    @property(Node)
    btnMusicOpen: Node | null = null;

    @property(Node)
    btnAudioOpen: Node | null = null;


    private btnZh:Node = null;
    private btnEn:Node = null;
    private btnKh:Node = null;
    private btnVi:Node = null

    onShow() {
        this.btnZh = this.node.getChildByName("node_lange").getChildByName("ToggleGroup").getChildByName("Toggle_chinalg");
        this.btnEn = this.node.getChildByName("node_lange").getChildByName("ToggleGroup").getChildByName("Toggle_yingyulg");
        this.btnKh = this.node.getChildByName("node_lange").getChildByName("ToggleGroup").getChildByName("Toggle_jianpuzailg");
        this.btnVi = this.node.getChildByName("node_lange").getChildByName("ToggleGroup").getChildByName("Toggle_yuenan");
        this.btnZh.active = ProjectConfig.pkgLng.indexOf("zh") != -1;
        this.btnEn.active = ProjectConfig.pkgLng.indexOf("en") != -1;
        this.btnKh.active = ProjectConfig.pkgLng.indexOf("kh") != -1;
        this.btnVi.active = ProjectConfig.pkgLng.indexOf("vi") != -1;
        this.refreshSoundAndMusic(); 
        this.refreshLanguage();
    }

    onHide() {
        
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
        let flag = AudioMgr.getInstance().chkIsMusic();
        AudioMgr.getInstance().switchMusic(!flag);
        this.refreshSoundAndMusic();
    }

    onBtnSound() {
        let flag = AudioMgr.getInstance().chkIsSound();
        AudioMgr.getInstance().switchSound(!flag);
        this.refreshSoundAndMusic();
    }


    //获取当前是什么语言
    private refreshLanguage(){
        if(i18n._language == "zh"){
            this.btnZh.getComponent(Toggle).isChecked = true;
        }else if(i18n._language == "kh"){
            this.btnKh.getComponent(Toggle).isChecked = true;
        }else if(i18n._language == "en"){
            this.btnEn.getComponent(Toggle).isChecked = true;
        }else if (i18n._language == "vi"){
            this.btnVi.getComponent(Toggle).isChecked = true;
        }
    }


    //执行多语言的切换
    public onBtnLanguageChg(evt:Event,customData:string){
        if(i18n._language != customData){
            i18n.init(customData);
            i18n.updateSceneRenderers();
            EventMgr.getInstance().dispatchEvent(EventName.I18N_CHANGED_NOTIFY);
            Utils.setLocalStorageLng(customData);
        }
    }
}
