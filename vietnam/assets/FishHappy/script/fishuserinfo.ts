
import { _decorator, Component, Node, Sprite, Label, Vec3, Animation, instantiate, UITransform, tween, UIOpacity } from 'cc';
import { UserData } from '../../ScriptCore/data/UserData';
import { PoolManager } from '../../ScriptCore/panda/utils/poolmgr';
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishGameEventName } from './configs/fishgameeventname';
import { FishHappyPlayerData } from './fishdata/fishhappyplayerdata';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
const { ccclass } = _decorator;

@ccclass('Fishuserinfo')
export class FishUserInfo extends Component {
    private _clientPos = 0;
    sprWait: Sprite | null = null;
    nodeInfo: Node | null = null;
    labelName: Label | null = null;
    labelCoin: Label | null = null;
    nodeCoinIcon: Node | null = null;
    sprHead: Sprite | null = null;
    playerData: FishHappyPlayerData | undefined;
    nodeAddCoinPos: Node | null = null;
    coinLabelPos: Vec3 | null = null;

    init (clientPos: number) {
        this._clientPos = clientPos;

        this.bindUI();
        this.refreshUI();
        this.addGameEvent();
    }

    bindUI () {
        this.nodeInfo = this.node.getChildByName('node_info');
        this.sprWait = this.node.getChildByName('spr_wait')!.getComponent(Sprite);
        let uiopacity = this.sprWait!.node.getComponent(UIOpacity);
        tween(uiopacity).repeatForever(tween(uiopacity).to(1.0, {opacity: 100}) 
                                                        .to(1.0, {opacity: 255}))
                        .start();
        this.labelName = this.nodeInfo!.getChildByName('label_name')!.getComponent(Label);
        this.labelCoin = this.nodeInfo!.getChildByName('label_coin')!.getComponent(Label);
        this.nodeCoinIcon = this.nodeInfo!.getChildByName('spr_coin');
        this.nodeAddCoinPos = this.nodeInfo!.getChildByName('node_addcoinpos');
        this.sprHead = this.nodeInfo!.getChildByName("node_head").getChildByName("Node").getChildByName("spr_head").getComponent(Sprite);
    }

    async refreshUI () {
        this.playerData = FishHappyRoomData.instance.getPlayerDataByClientPos(this._clientPos);
        if (this.playerData != undefined) {
            this.labelName!.string = this.playerData.getName().toString();
            this.labelCoin!.string = Utils.cvtToKMB(this.playerData.getCoin());
            this.sprHead.spriteFrame = await Utils.getHeadSpriteFrame(this.playerData.getHead());
        }
    }

    addGameEvent () {
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_PLAYER_ENTER, this.onPlayerEnter, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_PLAYER_LEAVE, this.onPlayerLeave, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_PLAYER_SETCOIN, this.onCoinChange, this);
        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_SHOW_FISHDIECOINNUM, this.showGainCoinNum, this);
    }

    onDestroy () {
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_PLAYER_ENTER, this.onPlayerEnter, this);
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_PLAYER_LEAVE, this.onPlayerLeave, this);
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_PLAYER_SETCOIN, this.onCoinChange, this);
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_SHOW_FISHDIECOINNUM, this.showGainCoinNum, this);
    }

    onPlayerEnter (clientPos: number) {
        if (this._clientPos == clientPos) {
            this.nodeInfo!.active = true;
            this.sprWait!.node.active = false;
            this.refreshUI()
        }
    }

    onPlayerLeave (clientPos: number) {
        if (this._clientPos == clientPos) {
            this.nodeInfo!.active = false;
            this.sprWait!.node.active = true;
        }
    }

    onCoinChange (clientPos: number, coin: number) {
        if (this._clientPos == clientPos) {
            if (this.playerData != null) {
                this.labelCoin!.string = Utils.cvtToKMB(this.playerData.getCoin());
            }
        }
    }

    getCoinLabelPos (): Vec3 {
        if (this.coinLabelPos === null) {
            let pos = this.nodeCoinIcon!.getPosition();
            let uitransform = this.node!.getComponent(UITransform);
            pos = uitransform!.convertToWorldSpaceAR(pos);
            uitransform = FishHappyConstants.gameCtrl.layerFish!.getComponent(UITransform);
            this.coinLabelPos = uitransform!.convertToNodeSpaceAR(pos);
        }
        return this.coinLabelPos;
    }

    showGainCoinNum (clientPos: number, position: Vec3, coinnum: number) {
        if (this._clientPos == clientPos) {
            let nodeCoinNum = null;
            if (clientPos == FishHappyRoomData.instance.myClientPos) {
                let pfbGoldAddCoin = ResMgr.getInstance().getPrefabByPath('FishHappy/prefab/pfb_goldaddcoin');
                if (pfbGoldAddCoin != null) {
                    nodeCoinNum = PoolManager.instance.getNode(pfbGoldAddCoin, this.nodeAddCoinPos!);
                }
            } else {
                let pfbGrayAddCoin = ResMgr.getInstance().getPrefabByPath('FishHappy/prefab/pfb_grayaddcoin');
                if (pfbGrayAddCoin != null) {
                    nodeCoinNum = PoolManager.instance.getNode(pfbGrayAddCoin, this.nodeAddCoinPos!);
                }
            }

            if (nodeCoinNum != null) {
                nodeCoinNum.parent = this.nodeAddCoinPos;
                let anim = nodeCoinNum.getComponent(Animation);
                if (anim != null) {
                    anim.play('anim_addcoin2');
                    anim.on(Animation.EventType.FINISHED, () => {
                        PoolManager.instance.putNode(anim!.node);
                    })
                }
                let label = nodeCoinNum.getComponent(Label);
                if (label != null) {
                    label.string = "+" + Utils.convertMoney(coinnum);
                }
            }
        }
    }
}
