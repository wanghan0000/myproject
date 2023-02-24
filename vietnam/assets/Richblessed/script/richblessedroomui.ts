import { Label, Node, randomRangeInt, Sprite, tween, v3, Vec2, Vec3, _decorator } from 'cc';
import { adapterLabelBg, fruitsNumFormat } from '../../Richblessed/script/FruitsUtils';
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
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import { ProjectConfig } from '../../ScriptCore/ProjectConfig';
import gamehall from '../../ScriptCore/protocol/gamehall.js';
import { ResMgr, ResType } from '../../ScriptCore/UIFrame/ResMgr';
import { UIScreen } from '../../ScriptCore/UIFrame/UIForm';
import { reslist } from '../reslist';
import { RichblessedUIMgr } from '../RichblessedUIMgr';
import { FruitsGameEventName } from './configs/fruitsgameeventname';
import { RICHBGMusic, RoomPoint } from './RichblessedConfig';
import { RichblessedRoomData } from './richblesseddata/RichblessedRoomData';
import { RichToast } from './RichToast';
const { ccclass, property } = _decorator;

@ccclass('RichblessedRoomUI')
export class RichblessedRoomUI extends UIScreen {
    
    @property(Node)
    roomItems: Node[] = [];

    @property(Label)
    goldLabel:Label = null;

    @property(Label)
    diamondLabel:Label = null;

     @property(Sprite)
    head:Sprite = null;

    async onLoad(){
        this.bindEvent();
        this.head.spriteFrame = await Utils.getHeadSpriteFrame(UserData.getInstance().getHead());
    }

    reShow() {
        AudioMgr.getInstance().playMusic(RICHBGMusic.room,true);
        if(RichblessedRoomData.instance.coin){
            this.goldLabel.string = fruitsNumFormat(RichblessedRoomData.instance.coin + '');
        }
    }

    start() {
        //预加载所有资源
        this.preLoadAllReslist();
        this.returnRoom();
    }

    async preLoadAllReslist(){
        this.scheduleOnce(() =>{
            try {
                let list = reslist;
                let resType: Map<ResType, boolean> = new Map();
                resType.set(ResType.ResType_Prefab, true);
                resType.set(ResType.ResType_SpriteAtlas, true);
                resType.set(ResType.ResType_AudioClip, true);
                resType.set(ResType.ResType_SpriteFrame, true);
                ResMgr.getInstance().preLoad(list, this.onLoadProgress.bind(this), this.onLoadResourceComplete.bind(this), resType);
            } catch (error) {
                console.log('预加载所有多财所有资源错误:' + error)
            }
        },0.1)
    }

    onLoadProgress(val: number){
        // console.log('progress:' + val)
    }
    onLoadResourceComplete(){
        console.log('多财资源全部加载完成+++++++++')
    }

    public onShow(...params: any): void {
        super.onShow(...params);
        console.log('多财房间界面被激活了')
    }

    bindEvent() {
        //大厅消息，游戏配置发生变换
        EventMgr.getInstance().addEventListener(EventName.SC_SYNCGAMEFREE, this.onGameConfUpdate, this);
        EventMgr.getInstance().addEventListener(EventName.SC_CHANGE_GAMESTATUS, this.onGameConfUpdate, this);
        EventMgr.getInstance().addEventListener(FruitsGameEventName.GAME_SC_ROOM_INFO,this.onRoomInfo,this); //房间信息
        EventMgr.getInstance().addEventListener(EventName.SC_USER_GOLD_CHANGE, this.updateGoldDiamond.bind(this), this);
        EventMgr.getInstance().addEventListener(EventName.SC_EnterGame, this.enterGameHandler.bind(this), this);
    }

    onEnable() {
        this.initData(null);
    }

    onDestroy() {
        EventMgr.getInstance().removeByTarget(this);
        AudioMgr.getInstance().stopMusic(RICHBGMusic.room);
    }
  

    private gameConfigRomote: gamehall.gamehall.IGameConfig1[] = [];

    returnRoom() {
        const roomId = UserData.getInstance().getRoomId();
        const gameFreeId = UserData.getInstance().getGameFreeId();
        if (roomId != null && roomId != 0 && gameFreeId != null && gameFreeId != 0) {
            const packet = new gamehall.gamehall.CSReturnRoom();
            packet.RoomId = roomId;
            packet.IsLoaded = true;
            console.log("多财发送返回房间的消息");
            console.log(packet)
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_RETURNROOM, packet);
            this.onRoomInfo();
            //EventMgr.getInstance().dispatchEvent(FruitsGameEventName.GAME_LOAD_COMPLETE);
        } else {
            AudioMgr.getInstance().playMusic(RICHBGMusic.room, true);
        }

        UserData.getInstance().setRoomId(0);
        UserData.getInstance().setGameFreeId(0);
    }

    onGameConfUpdate(msg:any) {
        this.initData(msg);
    }

    initData(msg:any) {
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
                    if(gameid == GameConst.GameId_Richblessed)
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

        for (let i = 0; i < len; i++) {
            const data = this.gameConfigRomote[i];
            //const index = data.LogicId % 10 - 1;
            let asceneType = DB_GameFree.getInstance().pool.get(data.LogicId!)!.SceneType - 1;
            const item:any = this.roomItems[asceneType];
            if(!item){
                continue;
            }
            item.position = v3(RoomPoint[i].x, RoomPoint[i].y,1);
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
        await this.closeSelf();
        //UIRoot.getInstance().RotationPortrait(async () => {
            const gameConfig = GameState.getInstance().getGameItemConf();
            const logicData = new LogicEventData(gameConfig!);
            EventMgr.getInstance().dispatchEvent(LogicEvent.ENTER_HALL_FROM_GAMES, logicData);
        //});

    }

    async btnOnEnterGame(event: Event, customEventData: string) {
        const enterGame = new gamehall.gamehall.CSEnterGame();
        const item:any = event.target;
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
        RichblessedRoomData.instance.setGameFreeId(enterGame.Id);
        console.log('进入游戏')
        console.log(enterGame);
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_ENTERGAME, enterGame);
        await UIMgr.getInstance().showWaiting();
    }

    async onRoomInfo(){
        await UIMgr.getInstance().showWaiting();
        RichblessedUIMgr.getInstance().showRichblessed();
        await UIMgr.getInstance().clearWaiting();
        EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_ROOMINFO); //房间信息
        EventMgr.getInstance().dispatchEvent(FruitsGameEventName.GAME_LOAD_COMPLETE); // 关闭loading界面
    }

    //更新金币和钻石
    updateGoldDiamond(): void {
        this.goldLabel.string = fruitsNumFormat(UserData.getInstance().getCoin() + '');
        adapterLabelBg({
            fatherNode: this.goldLabel.node.parent,
            lb: this.goldLabel,
            w: 13,
            leftInterval: 40,
            rightInterval: 13
        })
        this.diamondLabel.string = fruitsNumFormat(UserData.getInstance().getDiamond() + '');
        adapterLabelBg({
            fatherNode: this.diamondLabel.node.parent,
            lb: this.diamondLabel,
            w: 13,
            leftInterval: 40,
            rightInterval: 13
        })
    }

    enterGameHandler(msg:any){
        let {OpCode} = msg
        if (OpCode == gamehall.gamehall.OpResultCode.OPRC_CoinNotEnough) {
            // UIMgr.getInstance().AlertTxtWithConfirmClose(I18nMgr.getInstance().getStringByKey("richblessed.goldCoinShortage"));
            RichToast.show({prefabPath:'Richblessed/prefab/pfb_richblessed_toast_ui',content: this.node,txt:I18nMgr.getInstance().getStringByKey("richblessed.goldCoinShortage")})
        } else if (OpCode == gamehall.gamehall.OpResultCode.OPRC_RoomHadClosed) {
            // UIMgr.getInstance().AlertTxtWithConfirmClose("richblessed.roomclosed");
            RichToast.show({prefabPath:'Richblessed/prefab/pfb_richblessed_toast_ui',content: this.node,txt:I18nMgr.getInstance().getStringByKey("richblessed.roomclosed")})
        } else if (OpCode == gamehall.gamehall.OpResultCode.OPRC_SceneServerMaintain) {
            // UIMgr.getInstance().AlertTxtWithConfirmClose("richblessed.serverMaintenance");
            RichToast.show({prefabPath:'Richblessed/prefab/pfb_richblessed_toast_ui',content: this.node,txt:I18nMgr.getInstance().getStringByKey("richblessed.serverMaintenance")})
        } else if (OpCode) {
            // UIMgr.getInstance().AlertTxtWithConfirmClose(`${gamehall.gamehall.OpResultCode[OpCode]}`);
            RichToast.show({prefabPath:'Richblessed/prefab/pfb_richblessed_toast_ui',content: this.node,txt:`${gamehall.gamehall.OpResultCode[OpCode]}`})
        }
        UIMgr.getInstance().clearWaiting();
    }
}
