import { _decorator, Component, Node, Label } from 'cc';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { TienlenGameData } from '../model/TienlenGameData';
import tienlen from '../protocol/tienlen.js';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('GameInfo')
export class GameInfo extends Component {
    @property(Label)
    public label0: Label;
    @property(Label)
    public label1: Label;
    @property(Label)
    public label2: Label;

    public show(roomInfo: tienlen.tienlen.ISCTienLenRoomInfo) {
        this.node.active = true;
        let selfData = TienlenGameData.instance.selfPlayerData;
        if (roomInfo.IsMatch) {
            this.label0.string = `第${roomInfo.Round}轮`;
            this.label2.string = `${selfData.MatchRankId}/${roomInfo.CurPlayerNum}`;
        } else {
            this.label0.string = Utils.cvtToKMB(roomInfo.BaseScore, 0);
            this.label1.string = TienlenHelper.getGameModeStr();
            this.label2.string = TienlenHelper.getRoomModeStr();
        }
    }

    public hide() {
        this.node.active = false;
    }
}

