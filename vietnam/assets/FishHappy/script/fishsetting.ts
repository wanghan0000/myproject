
import { _decorator, Node, tween, v3 } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { LobbyAudioCfg } from '../../ScriptCore/audio/LobbyAudioCfg';
import { UIPopup } from '../../ScriptCore/UIFrame/UIForm';
const { ccclass, property } = _decorator;

@ccclass('Fishsetting')
export class Fishsetting extends UIPopup {
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

    start () {
        this.node.scale = v3(0.1, 0.1, 0.1);
        tween(this.node).to(0.2, {scale: v3(1.0, 1.0, 1.0)}).start();
        this.refreshSoundAndMusic();
    }

    btnOnClose () {
        this.closeSelf();
    }

    refreshSoundAndMusic () {
        let flag = AudioMgr.getInstance().chkIsMusic();
        this.refreshMusicUI(flag);

        flag = AudioMgr.getInstance().chkIsSound();
        this.refreshSoundUI(flag);
    }

    refreshMusicUI (flag: boolean) {
        this.btnMusicOpen!.active = flag;
        this.btnMusicClose!.active = !flag;
    }

    refreshSoundUI (flag: boolean) {
        this.btnAudioOpen!.active = flag;
        this.btnAudioClose!.active = !flag;
    }

    onBtnMusic () {
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        let flag = AudioMgr.getInstance().chkIsMusic();
        AudioMgr.getInstance().switchMusic(!flag);
        this.refreshSoundAndMusic();
    }

    onBtnSound () {
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
        let flag = AudioMgr.getInstance().chkIsSound();
        AudioMgr.getInstance().switchSound(!flag);
        this.refreshSoundAndMusic();
    }

    btnOnShakeOpen () {
        this.btnShakeClose!.active = false;
        this.btnShakeOpen!.active = true;
    }

    btnOnShakeClose () {
        this.btnShakeClose!.active = true;
        this.btnShakeOpen!.active = false;
    }
}
