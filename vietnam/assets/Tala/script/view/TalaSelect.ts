import { _decorator, Component, Node } from 'cc';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { LogicEvent, LogicEventData } from '../../../ScriptCore/games/LogicEvent';
import { GameState } from '../../../ScriptCore/gamestate/GameState';
import { GameConst } from '../../../ScriptCore/Lobby/Scripts/gameconfig/GameConst';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import { ButtonPlus } from '../common/component/ButtonPlus';
import TalaHelper from '../TalaHelper';
const { ccclass, property } = _decorator;

@ccclass('TalaSelect')
export class TalaSelect extends UIScreen {
    @property(ButtonPlus)
    public btnReturn: ButtonPlus;

    onLoad() {
        let listNode = this.node.getChildByName("node_roomsel");
        let btns = listNode.getComponentsInChildren(ButtonPlus);
        for (let index = 0; index < btns.length; index++) {
            const element = btns[index];
            element.setClickHandler(async () => {
                UIMgr.getInstance().showWaiting();
                let code = await TalaHelper.checkEnterGame(GameConst.GameId_Tala);
                UIMgr.getInstance().clearWaiting();
            }, this);
        }
        this.btnReturn.setClickHandler(async () => {
            let gameConfig = GameState.getInstance().getGameItemConf();
            let logicData = new LogicEventData(gameConfig!);
            EventMgr.getInstance().dispatchEvent(LogicEvent.ENTER_HALL_FROM_GAMES, logicData);
            this.closeSelf();
        }, this);
    }
}

