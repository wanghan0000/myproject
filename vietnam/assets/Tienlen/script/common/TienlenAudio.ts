
import { _decorator, Component } from 'cc';
import { AudioMgr } from '../../../ScriptCore/audio/AudioMgr';
import { LobbyAudioCfg } from '../../../ScriptCore/audio/LobbyAudioCfg';
const { ccclass } = _decorator;

@ccclass('TienlenAudio')
export class TienlenAudio extends Component {
    onBtnClickAudio () {
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
    }
}
