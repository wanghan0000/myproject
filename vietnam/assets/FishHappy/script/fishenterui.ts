import { Label, Node, randomRangeInt, Sprite, tween, v3, Vec2, Vec3, _decorator } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { DB_GameFree } from '../../ScriptCore/config/db_gamefree';
import { UserData } from '../../ScriptCore/data/UserData';
import { EventMgr } from '../../ScriptCore/events/eventmgr';
import { EventName } from '../../ScriptCore/events/EventName';
import { LogicEvent, LogicEventData } from '../../ScriptCore/games/LogicEvent';
import { GameState } from '../../ScriptCore/gamestate/GameState';
import { UIMgr } from '../../ScriptCore/Lobby/Scripts/UIMgr';
import { SocketMgr } from '../../ScriptCore/panda/net/SocketMgr';
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import { ProjectConfig } from '../../ScriptCore/ProjectConfig';
import gamehall from '../../ScriptCore/protocol/gamehall.js';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { UIScreen } from '../../ScriptCore/UIFrame/UIForm';
import { UIManager } from '../../ScriptCore/UIFrame/UIManager';
import { UIRoot } from '../../ScriptCore/UIFrame/UIRoot';
import { FishGameEventName } from './configs/fishgameeventname';
import { FishHappyAudioConfig } from './configs/fishhappyaudiocfg';
import { PathMgr } from './fishpathmgr';
const { ccclass, property } = _decorator;

const selItemPosArr1 = [v3(0, 0, 0)];
const selItemPosArr2 = [v3(-310, 0, 0), v3(310, 0, 0)];
const selItemPosArr3 = [v3(-400, 0, 0), v3(0, 0, 0), v3(400, 0, 0)];
const selItemPosArr4 = [v3(-467, -6, 0), v3(-155, 114, 0), v3(153, -16, 0), v3(456, 77, 0)];

@ccclass('FishEnterGameUI')
export class FishEnterGameUI extends UIScreen {
    isEngross = false;
    @property(Node)
    nodeItems: Node[] = [];
    @property(Label)
    labelLimit: Label[] = [];
    @property(Label)
    labelBaseScore: Label[] = [];
    @property(Label)
    labelPerson: Label[] = [];
    @property(Label)
    labelName: Label | null = null;
    @property(Label)
    labelId: Label | null = null;
    @property(Label)
    labelMoney: Label | null = null;
    @property(Sprite)
    sprHead: Sprite | null = null;

    start() {
        this.initUI();
        this.bindEvent();
        PathMgr.instance.loadPath('');
        this.returnRoom();
    }

    bindEvent() {
        //大厅消息，游戏配置发生变换
        EventMgr.getInstance().addEventListener(EventName.SC_SYNCGAMEFREE, this.onGameConfUpdate, this);
        EventMgr.getInstance().addEventListener(EventName.SC_CHANGE_GAMESTATUS, this.onGameConfUpdate, this);
    }

    onEnable() {
        AudioMgr.getInstance().playMusic(FishHappyAudioConfig.BGM2);
        this.refreshUI();
        this.initData();
    }

    onDestroy() {
        AudioMgr.getInstance().stopAudio();
        EventMgr.getInstance().removeByTarget(this);
    }

    initUI() {
        this.addItemAction();
    }

    addItemAction() {
        for (let i = 0; i < this.nodeItems.length; i++) {
            let node = this.nodeItems[i].getChildByName("item");
            tween(node).delay(i * 0.2)
                .call(() => {
                    tween(node).repeatForever(tween(node).to(1.0, { position: new Vec3(node.position.x, node.position.y + 10, 0) })
                        .to(1.0, { position: new Vec3(node.position.x, node.position.y - 10, 0) }))
                        .start()
                })
                .start();
        }
    }

    async refreshUI() {
        let userData = UserData.getInstance();
        this.labelName!.string = userData.getName();
        this.labelId!.string = "ID:" + userData.getSnId();
        this.labelMoney!.string = Utils.cvtToKMB(userData.getGold());
        //暂时不加载头像
        // let headPath = "Lobby/Textures/New/GateResCode/Avatar/" + UserData.getInstance().getHead();
        // this.sprHead!.getComponent(Sprite)!.spriteFrame = await ResMgr.getInstance().lazyLoadSpriteFrame(headPath)!;
        this.sprHead.getComponent(Sprite).spriteFrame = await Utils.getHeadSpriteFrame(UserData.getInstance().getHead());
    }

    private gameConfigRomote: gamehall.gamehall.IGameConfig1[] = [];

    returnRoom() {
        let roomId = UserData.getInstance().getRoomId();
        let gameFreeId = UserData.getInstance().getGameFreeId();
        if (roomId != null && roomId != 0 && gameFreeId != null && gameFreeId != 0) {
            let packet = new gamehall.gamehall.CSReturnRoom();
            packet.RoomId = roomId;
            packet.IsLoaded = true;
            console.log("欢乐捕鱼发送返回房间的消息");
            console.log(packet)
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_RETURNROOM, packet);
        } else {
            EventMgr.getInstance().dispatchEvent(FishGameEventName.GAME_LOAD_COMPLETE);
        }
    }

    onGameConfUpdate() {
        this.initData();
    }

    initData() {
        let gameConfRomote = GameState.getInstance().getGameConfRomote();
        let confiArr: gamehall.gamehall.IGameConfig1[] = [];
        if (gameConfRomote && gameConfRomote.GameCfg && gameConfRomote.GameCfg.length > 0) {
            for (let k = 0; k < gameConfRomote.GameCfg.length; k++) {
                confiArr.push(gameConfRomote.GameCfg[k]);
            }
        }
        confiArr.sort((a: gamehall.gamehall.IGameConfig1, b: gamehall.gamehall.IGameConfig1) => {
            let asceneType = DB_GameFree.getInstance().pool.get(a.LogicId!)!.SceneType;
            let bsceneType = DB_GameFree.getInstance().pool.get(b.LogicId!)!.SceneType;
            if (asceneType > bsceneType) {
                return 1;
            } else {
                return -1;
            }
        });
        this.gameConfigRomote = confiArr;

        for (let item of this.nodeItems) {
            tween(item).stop();
            item.active = false;
        }

        let len = this.gameConfigRomote.length;
        let posArr: Vec3[] = [];
        if (len == 4) {
            posArr = selItemPosArr4;
        } else if (len == 3) {
            posArr = selItemPosArr3;
        } else if (len == 2) {
            posArr = selItemPosArr2;
        } else if (len == 1) {
            posArr = selItemPosArr1;
        }

        let posIdx = 0;
        for (let i = 0; i < len; i++) {
            let data = this.gameConfigRomote[i];
            let index = data.LogicId % 10 - 1;
            let item = this.nodeItems[index];
            item.active = true;
            item.position = posArr[posIdx];
            posIdx++;
            this.labelLimit[index].string = data.LimitCoin!.toString();
            this.labelBaseScore[index].string = data.BaseScore!.toString();
            this.labelPerson[index].string = randomRangeInt(1, 100).toString();
        }
    }

    /**
     * 根据initData出来的数据，初始化选场中的初始化
     * 
     */
    initView() {

    }

    async onBack() {
        await this.closeSelf();
        //UIRoot.getInstance().RotationPortrait(async () => {
            let gameConfig = GameState.getInstance().getGameItemConf();
            let logicData = new LogicEventData(gameConfig!);
            EventMgr.getInstance().dispatchEvent(LogicEvent.ENTER_HALL_FROM_GAMES, logicData);
        //});

    }

    btnOnEnterGame(event: Event, customEventData: string) {
        let enterGame = new gamehall.gamehall.CSEnterGame();
        let needCoin = 0;
        if (customEventData == 'btn1') {
            enterGame.Id = this.gameConfigRomote[0].LogicId!;
            needCoin = this.gameConfigRomote[0].LimitCoin;
        } else if (customEventData == 'btn2') {
            enterGame.Id = this.gameConfigRomote[1].LogicId!;
            needCoin = this.gameConfigRomote[1].LimitCoin;
        } else if (customEventData == 'btn3') {
            enterGame.Id = this.gameConfigRomote[2].LogicId!;
            needCoin = this.gameConfigRomote[2].LimitCoin;
        } else if (customEventData == 'btn4') {
            enterGame.Id = this.gameConfigRomote[3].LogicId!;
            needCoin = this.gameConfigRomote[3].LimitCoin;
        }
        if (UserData.getInstance().getGold() < needCoin) {
            UIMgr.getInstance().AlertTxtWithConfirmClose("金币不足!");
            return;
        }
        enterGame.Platform = ProjectConfig.Platform_ID;
        console.log(enterGame);
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_ENTERGAME, enterGame);
    }

    async onSet() {
        return await UIManager.getInstance().openPopup("FishHappy/prefab/pfb_set");
    }
}
