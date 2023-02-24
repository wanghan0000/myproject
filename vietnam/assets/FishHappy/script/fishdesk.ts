
import { _decorator, Component, Node, Animation, SpriteFrame, Sprite, instantiate, randomRangeInt } from 'cc';
import { StateAutoFire } from './cannonstate/stateautofire';
import { StateNormal } from './cannonstate/statenormal';
import { StateAim } from './cannonstate/stateaim';
import { StateAutoAim } from './cannonstate/stateautoaim';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { EventMgr } from '../../ScriptCore/events/eventmgr';
import { FishGameEventName } from './configs/fishgameeventname';
import { FishHappyPlayerData } from './fishdata/fishhappyplayerdata';
import { FishGameControl } from './fishgamecontrol';
import { FishHappyUIMgr } from '../FishHappyUIMgr';
import { SocketMgr } from '../../ScriptCore/panda/net/SocketMgr';
import { EventName } from '../../ScriptCore/events/EventName';
import  gamehall  from '../../ScriptCore/protocol/gamehall.js';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { UIManager } from '../../ScriptCore/UIFrame/UIManager';
import { UIMgr } from '../../ScriptCore/Lobby/Scripts/UIMgr';
const { ccclass, property } = _decorator;

@ccclass('FishDesk')
export class FishDesk extends Component {
    animBtnLeft: Animation | null = null;

    @property(Node)
    nodeShow: Node | null = null;

    @property(Node)
    nodeLeft: Node | null = null;

    @property(Node)
    nodeAutoSpine: Node | null = null;

    @property(Node)
    nodeLockSpine: Node | null = null;

    @property(Node)
    nodeSpeed: Node | null = null;

    @property(Node)
    nodeGuaji: Node | null = null;

    @property(SpriteFrame)
    sprFrmSpeeds: SpriteFrame[] = [];

    @property(FishGameControl)
    gameControl:FishGameControl|null = null;

    sprSpeed: Sprite | null = null;

    fireSpeed = 1;

    nodeBack: Node | null = null;
    nodeHelp: Node | null = null;
    nodeChangeCannon: Node | null = null;
    nodeSetting: Node | null = null;
    nodeAutoFish: Node | null = null;

    myPlayerData: FishHappyPlayerData | undefined;

    start () {
        this.myPlayerData = FishHappyRoomData.instance.getPlayerDataByClientPos(FishHappyRoomData.instance.myClientPos);
        this.animBtnLeft = this.nodeLeft!.getComponent(Animation);
        this.sprSpeed = this.nodeSpeed!.getComponent(Sprite);
        this.addGameEvent();
    }

    addGameEvent () {
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_AUTOFIRE_FLAG, this.onAutoFireChange, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_AIM_FLAG, this.onAimChange, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_GUAJIVIE_VISIBLEW, this.onGuajiViewVisible, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_SET_AUTO_LOCK_BTN_VIEW, this.onSetBtnView, this);
        EventMgr.getInstance().addEventListener(EventName.SC_QUIT_GAME,this.onGameQuitCallBack, this);
    }

    onDestroy () {
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_AUTOFIRE_FLAG, this.onAutoFireChange, this);
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_AIM_FLAG, this.onAimChange, this);
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_GUAJIVIE_VISIBLEW, this.onGuajiViewVisible, this);
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_SET_AUTO_LOCK_BTN_VIEW, this.onSetBtnView, this);
        EventMgr.getInstance().remove(EventName.SC_QUIT_GAME,this.onGameQuitCallBack, this);
    }

    btnOnShow () {
        let rotation = this.nodeShow!.getRotation();
        if (rotation.z == 0) {
            this.animBtnLeft!.play('anim_desk_leftbtn_show');
        } else if (rotation.z == 1) {
            this.animBtnLeft!.play('anim_desk_leftbtn_hide');
        }
    }

    createUiByPfb (pfbFilePath: string) {
        let pfb = ResMgr.getInstance().getPrefabByPath(pfbFilePath);
        if (pfb != null) {
            let node = instantiate(pfb);
            node.parent = this.node;
        }
    }

    btnOnBack () {
        FishHappyUIMgr.getInstance().showExitConfirm(()=>{
            //这里发送退出消息
            let quitGame =  new gamehall.gamehall.CSQuitGame();
            quitGame.Id = FishHappyRoomData.instance.getGameFreeId();
            quitGame.IsAudience = false;
            console.log(quitGame);
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_QUITGAME,quitGame);
            console.log("发送退出游戏");
        });
    }

    //退出游戏的回调
    onGameQuitCallBack(params:any){
        if (params.Id == FishHappyRoomData.instance.getGameFreeId() ){
            this.gameControl!.closeSelf();
        }
    }

    async btnOnHelp () {
        // this.createUiByPfb('FishHappy/prefab/pfb_help');
        return await UIManager.getInstance().openPopup("FishHappy/prefab/pfb_help");
    }

    async btnOnChangeCannon () {
        // this.createUiByPfb('FishHappy/prefab/pfb_changecannon');
        return await UIManager.getInstance().openPopup("FishHappy/prefab/pfb_changecannon");
    }

    async btnOnSetting () {
        // this.createUiByPfb('FishHappy/prefab/pfb_set');
        return await UIManager.getInstance().openPopup("FishHappy/prefab/pfb_set");
    }

    async btnOnAutoFish () {
        // this.createUiByPfb('FishHappy/prefab/pfb_autofish');
        return await UIManager.getInstance().openPopup("FishHappy/prefab/pfb_autofish");
    }

    btnOnAuto () {
        if (FishHappyConstants.gameCtrl.cannonState != null) {
            let stateName = FishHappyConstants.gameCtrl.cannonState.getStateName();
            if (stateName == "StateHook") {
                UIMgr.getInstance().AlertTxtWithConfirmClose("挂机中，请先取消挂机再操作");
                return;
            }
            FishHappyConstants.gameCtrl.cannonState.sendAutoFire();
        }
    }

    btnOnLock () {
        if (FishHappyConstants.gameCtrl.cannonState != null) {
            let stateName = FishHappyConstants.gameCtrl.cannonState.getStateName();
            if (stateName == "StateHook") {
                UIMgr.getInstance().AlertTxtWithConfirmClose("挂机中，请先取消挂机再操作");
                return;
            }
            FishHappyConstants.gameCtrl.cannonState.sendAim();
        }
    }

    btnOnSpeed () {
        this.fireSpeed = this.fireSpeed + 1;
        if (this.fireSpeed > 3) {
            this.fireSpeed = 1;
        }
        if (this.fireSpeed == 1) {
            FishHappyConstants.FIRE_AUTO_INTERVAL = 0.2;
        } else if (this.fireSpeed == 2) {
            FishHappyConstants.FIRE_AUTO_INTERVAL = 0.15;
        } else if (this.fireSpeed == 3) {
            FishHappyConstants.FIRE_AUTO_INTERVAL = 0.1;
        }
        this.sprSpeed!.spriteFrame = this.sprFrmSpeeds[this.fireSpeed-1];

        if (FishHappyConstants.gameCtrl.cannonState != null) {
            let stateName = FishHappyConstants.gameCtrl.cannonState.getStateName();
            if (stateName == 'StateAutoFire' || stateName == 'StateAutoAim') {
                FishHappyConstants.gameCtrl.cannonState.closeAutoFire();
                FishHappyConstants.gameCtrl.cannonState.openAutoFire();
            } else if (stateName == 'StateAim' || stateName == 'StateAutoHook') {
                if (FishHappyRoomData.instance.isAimedFish(FishHappyRoomData.instance.myClientPos)) {
                    FishHappyConstants.gameCtrl.cannonState.closeAutoFire();
                    FishHappyConstants.gameCtrl.cannonState.openAutoFire();
                }
            }
        }
    }

    onGuajiViewVisible (flag: boolean) {
        this.nodeGuaji!.active = flag;
    }

    btnOnCancelGuaJi () {
        FishHappyRoomData.instance.fishSortIdOfSelected.length = 0;
        this.onGuajiViewVisible(false);
        let state = FishHappyConstants.gameCtrl.getComponent(StateNormal);
        FishHappyConstants.gameCtrl.switchCannonState(state);
    }

    onAutoFireChange () {
        if (this.myPlayerData == null) {
            return;
        }
        if (this.nodeAutoSpine!.active) {
            this.nodeAutoSpine!.active = false;
            this.myPlayerData.isUseAutoFire = false;

            if (this.myPlayerData.isUseAim) {
                let state = FishHappyConstants.gameCtrl.getComponent(StateAim);
                FishHappyConstants.gameCtrl.switchCannonState(state);
            } else {
                let state = FishHappyConstants.gameCtrl.getComponent(StateNormal);
                FishHappyConstants.gameCtrl.switchCannonState(state);
            }
        } else {
            this.nodeAutoSpine!.active = true;
            this.myPlayerData.isUseAutoFire = true;

            if (this.myPlayerData.isUseAim) {
                let state = FishHappyConstants.gameCtrl.getComponent(StateAutoAim);
                FishHappyConstants.gameCtrl.switchCannonState(state);
            } else {
                let state = FishHappyConstants.gameCtrl.getComponent(StateAutoFire);
                FishHappyConstants.gameCtrl.switchCannonState(state);
            }
        }
    }

    onAimChange () {
        if (this.myPlayerData == null) {
            return;
        }
        if (this.nodeLockSpine!.active) {
            this.nodeLockSpine!.active = false;
            this.myPlayerData.isUseAim = false;

            if (this.myPlayerData.isUseAutoFire) {
                let state = FishHappyConstants.gameCtrl.getComponent(StateAutoFire);
                FishHappyConstants.gameCtrl.switchCannonState(state);
            } else {
                let state = FishHappyConstants.gameCtrl.getComponent(StateNormal);
                FishHappyConstants.gameCtrl.switchCannonState(state);
            }
        } else {
            this.nodeLockSpine!.active = true;
            this.myPlayerData.isUseAim = true;

            if (this.myPlayerData.isUseAutoFire) {
                let state = FishHappyConstants.gameCtrl.getComponent(StateAutoAim);
                FishHappyConstants.gameCtrl.switchCannonState(state);
            } else {
                let state = FishHappyConstants.gameCtrl.getComponent(StateAim);
                FishHappyConstants.gameCtrl.switchCannonState(state);
            }
        }
    }

    onSetBtnView (flag: boolean) {
        this.nodeAutoSpine!.active = flag;
        this.nodeLockSpine!.active = flag;
        if (!flag) {
            this.myPlayerData.isUseAim = false;
            this.myPlayerData.isUseAutoFire = false;
        }
    }
}
