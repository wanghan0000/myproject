import { Label, Node, randomRangeInt, Sprite, tween, v3, Vec2, Vec3, _decorator } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { DB_GameFree } from '../../ScriptCore/config/db_gamefree';
import { UserData } from '../../ScriptCore/data/UserData';
import { EventMgr } from '../../ScriptCore/events/eventmgr';
import { EventName } from '../../ScriptCore/events/EventName';
import { LogicEvent, LogicEventData } from '../../ScriptCore/games/LogicEvent';
import { GameState } from '../../ScriptCore/gamestate/GameState';
import { I18nMgr } from '../../ScriptCore/i18n/I18nMgr';
import { GameConst } from '../../ScriptCore/Lobby/Scripts/gameconfig/GameConst';
import { UIMgr } from '../../ScriptCore/Lobby/Scripts/UIMgr';
import { SocketMgr } from '../../ScriptCore/panda/net/SocketMgr';
import { PoolManager } from '../../ScriptCore/panda/utils/poolmgr';
import { ProjectConfig } from '../../ScriptCore/ProjectConfig';
import gamehall from '../../ScriptCore/protocol/gamehall.js';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { UIScreen } from '../../ScriptCore/UIFrame/UIForm';
import { FruitsUIMgr } from '../FruitsUIMgr';
import { FruitsToast } from './component/FruitsToast';
import { FruitsGameEventName } from './configs/fruitsgameeventname';
import { FruitsBGMusic, RoomPoint } from './FruitsConfig';
import { FruitsRoomData } from './fruitsdata/FruitsRoomData';
import { FruitsTopUI } from './FruitsTopUI';
import { fruitsNumFormat } from './FruitsUtils';
const { ccclass, property } = _decorator;

@ccclass('FruitsRoomUI')
export class FruitsRoomUI extends UIScreen {

    @property(Node)
    roomItems: Node[] = [];

    private topUI: FruitsTopUI = null;

    async onLoad() {
        this.bindEvent()
    }

    reShow() {
        this.topUI.showEffect();
        AudioMgr.getInstance().playMusic(FruitsBGMusic.room, true);
        if (FruitsRoomData.instance.coin) {
            this.topUI?.updateCoin(FruitsRoomData.instance.coin)
        }

    }

    start() {
        setTimeout(() => {
            try {
                let pb = ResMgr.getInstance().getPrefabByPath('Fruits/prefab/pfb_fruits_top_ui');
                const node = PoolManager.instance.getNode(pb, this.node);
                this.topUI = node.getComponent(FruitsTopUI);
                this.topUI.showEffect();
                this.topUI.clickBackCallBack = this.onBack.bind(this)
                this.topUI.updateCoin(FruitsRoomData.instance.coin)
                this.topUI.updateDiamond(FruitsRoomData.instance.diamond)
                this.topUI.btnBack.node.active = false;
            } catch (error) {
            }
        }, 100);
        this.returnRoom();
    }

    bindEvent() {
        //大厅消息，游戏配置发生变换
        EventMgr.getInstance().addEventListener(EventName.SC_SYNCGAMEFREE, this.onGameConfUpdate, this);
        EventMgr.getInstance().addEventListener(EventName.SC_CHANGE_GAMESTATUS, this.onGameConfUpdate, this);
        EventMgr.getInstance().addEventListener(FruitsGameEventName.FRUITS_SC_ROOM_INFO, this.onRoomInfo, this);
        EventMgr.getInstance().addEventListener(EventName.SC_USER_GOLD_CHANGE, this.updateGoldDiamond.bind(this), this);
        EventMgr.getInstance().addEventListener(EventName.SC_EnterGame, this.enterGame.bind(this), this);
    }

    public onShow(...params: any): void {
        super.onShow(...params);
        console.log('界面被激活了')
    }

    onEnable() {
        this.initData(null);
    }

    onDestroy() {
        EventMgr.getInstance().removeByTarget(this);
        AudioMgr.getInstance().stopMusic(FruitsBGMusic.room);
    }


    private gameConfigRomote: gamehall.gamehall.IGameConfig1[] = [];

    async returnRoom() {
        const roomId = UserData.getInstance().getRoomId();
        const gameFreeId = UserData.getInstance().getGameFreeId();
        if (roomId != null && roomId != 0 && gameFreeId != null && gameFreeId != 0) {
            const packet = new gamehall.gamehall.CSReturnRoom();
            packet.RoomId = roomId;
            packet.IsLoaded = true;
            console.log("水果拉霸发送返回房间的消息");
            console.log(packet)
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_RETURNROOM, packet);
            this.onRoomInfo();
        } else {
            AudioMgr.getInstance().playMusic(FruitsBGMusic.room, true);
        }
        UserData.getInstance().setRoomId(0);
        UserData.getInstance().setGameFreeId(0);
    }

    onGameConfUpdate(msg: any) {
        this.initData(msg);
    }

    initData(msg: any) {
        console.log(msg);
        const gameConfRomote = GameState.getInstance().getGameConfRomote();
        console.log('配置数据==================')
        console.log(gameConfRomote)
        console.log('配置数据==================')
        const confiArr: gamehall.gamehall.IGameConfig1[] = [];
        if (gameConfRomote && gameConfRomote.GameCfg && gameConfRomote.GameCfg.length > 0) {
            for (let k = 0; k < gameConfRomote.GameCfg.length; k++) {
                if (DB_GameFree.getInstance().pool.get(gameConfRomote.GameCfg[k].LogicId!)) {
                    const gameid = DB_GameFree.getInstance().pool.get(gameConfRomote.GameCfg[k].LogicId!).GameId;
                    if(gameid == GameConst.GameId_Fruits)
                        confiArr.push(gameConfRomote.GameCfg[k]);
                }
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

        if(!confiArr.length){
            this.onBack()
            UIMgr.getInstance().AlertTxtWithConfirmClose(I18nMgr.getInstance().getStringByKey("fruits.roomclosed"), () => {
            });
            return
        }

        for (let item of this.roomItems) {
            item.active = false;
        }

        const len = this.gameConfigRomote.length;

        let startIndex = 0;
        for (let i = 0; i < len; i++) {
            const data = this.gameConfigRomote[i];
            //const index = data.LogicId % 10 - 1;
            let asceneType = DB_GameFree.getInstance().pool.get(data.LogicId!)!.SceneType - 1;
            const item: any = this.roomItems[asceneType];
            if (!item || i >= 4) {
                continue;
            }
            item.position = v3(RoomPoint[startIndex].x, RoomPoint[startIndex].y, 1);
            startIndex += 1;
            item.active = true;
            item['customData'] = data

            const enterNode = item.getChildByName('enter-node');
            const betNode = item.getChildByName('bet-node');

            let title = enterNode.getChildByName('lb1');
            let coin = enterNode.getChildByName('lb2').getComponent(Label);
            coin.string = fruitsNumFormat(data.LimitCoin + '');

            coin = betNode.getChildByName('lb2').getComponent(Label);
            coin.string = fruitsNumFormat(data.BaseScore + '');
        }
        this.updateGoldDiamond();
    }

    /**
     * 根据initData出来的数据，初始化选场中的初始化
     * 
     */
    initView() {

    }

    async onBack() {
        const gameConfig = GameState.getInstance().getGameItemConf();
        const logicData = new LogicEventData(gameConfig!);
        EventMgr.getInstance().dispatchEvent(LogicEvent.ENTER_HALL_FROM_GAMES, logicData);
        await this.closeSelf();
        //UIRoot.getInstance().RotationPortrait(async () => {
        //});
    }

    async btnOnEnterGame(event: Event, customEventData: string) {
        AudioMgr.getInstance().playSound(FruitsBGMusic.click)
        const enterGame = new gamehall.gamehall.CSEnterGame();
        const item: any = event.target;
        const data = item['customData']
        let needCoin = 0;

        enterGame.Id = data.LogicId!;
        needCoin = data.LimitCoin;

        // if (customEventData == 'btn1') {
        //     enterGame.Id = this.gameConfigRomote[0].LogicId!;
        //     needCoin = this.gameConfigRomote[0].LimitCoin;
        // } else if (customEventData == 'btn2') {
        //     enterGame.Id = this.gameConfigRomote[1].LogicId!;
        //     needCoin = this.gameConfigRomote[1].LimitCoin;
        // } else if (customEventData == 'btn3') {
        //     enterGame.Id = this.gameConfigRomote[2].LogicId!;
        //     needCoin = this.gameConfigRomote[2].LimitCoin;
        // } else if (customEventData == 'btn4') {
        //     enterGame.Id = this.gameConfigRomote[3].LogicId!;
        //     needCoin = this.gameConfigRomote[3].LimitCoin;
        // }
        enterGame.Platform = ProjectConfig.Platform_ID;
        FruitsRoomData.instance.setGameFreeId(enterGame.Id);
        console.log('进入游戏')
        console.log(enterGame);
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_ENTERGAME, enterGame);
        await UIMgr.getInstance().showWaiting();
    }

    async onRoomInfo() {
        await UIMgr.getInstance().showWaiting();
        FruitsUIMgr.getInstance().showFruits();
        EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_ROOMINFO); //房间信息
    }

    //更新金币和钻石
    updateGoldDiamond(): void {
        this.topUI?.updateCoin(UserData.getInstance().getCoin());
        this.topUI?.updateDiamond(UserData.getInstance().getDiamond())
        FruitsRoomData.instance.coin = UserData.getInstance().getCoin();
    }

    enterGame(msg: any) {
        let { OpCode } = msg
        if (OpCode == gamehall.gamehall.OpResultCode.OPRC_CoinNotEnough) {
            FruitsToast.show({prefabPath:'Fruits/prefab/pfb_fruits_toast_ui',content: this.node,txt:I18nMgr.getInstance().getStringByKey("fruits.goldCoinShortage")})
        } else if (OpCode == gamehall.gamehall.OpResultCode.OPRC_RoomHadClosed) {
            FruitsToast.show({prefabPath:'Fruits/prefab/pfb_fruits_toast_ui',content: this.node,txt:I18nMgr.getInstance().getStringByKey("fruits.roomclosed")})
        } else if (OpCode == gamehall.gamehall.OpResultCode.OPRC_SceneServerMaintain) {
            FruitsToast.show({prefabPath:'Fruits/prefab/pfb_fruits_toast_ui',content: this.node,txt:I18nMgr.getInstance().getStringByKey("fruits.serverMaintenance")})
        } else if (OpCode) {
            FruitsToast.show({prefabPath:'Fruits/prefab/pfb_fruits_toast_ui',content: this.node,txt:`${gamehall.gamehall.OpResultCode[OpCode]}`})
        }
        UIMgr.getInstance().clearWaiting();
    }
}
