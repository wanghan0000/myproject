
import { _decorator, Component } from 'cc';
import { AudioMgr } from './AudioMgr';
import { LobbyAudioCfg } from './LobbyAudioCfg';
const { ccclass } = _decorator;

@ccclass('LobbyAudio')
export class LobbyAudio extends Component {
    onBtnClickAudio () {
        AudioMgr.getInstance().playSound(LobbyAudioCfg.click);
    }
}
