
import { _decorator, v3, tween, Button, Node } from 'cc';
import { SocketMgr } from '../../ScriptCore/panda/net/SocketMgr';
import { UIPopup } from '../../ScriptCore/UIFrame/UIForm';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishGameEventName } from './configs/fishgameeventname';
import { FishHappyPlayerData } from './fishdata/fishhappyplayerdata';
const { ccclass, property } = _decorator;

import {FishHappyRoomData} from './fishdata/fishhappyroomdata';
import { FishPlayerOpCode } from './net/fishneteventname';
import  fishing  from './protocol/fishing.js';

@ccclass('FishChangeCannon')
export class FishChangeCannon extends UIPopup {
    @property({type: Node})
    nodeContent: Node | null = null;
    myPlayerData: FishHappyPlayerData | undefined;
    itemCount = 7;
    isInit = false;

    onEnable () {
        this.refreshUI();
    }

    start () {
        this.node.scale = v3(0.1, 0.1, 0.1);
        tween(this.node).to(0.2, {scale: v3(1.0, 1.0, 1.0)}).start();

        FishHappyConstants.eventMgr.addEventListener(FishGameEventName.GAME_CANNON_CHANGE, this.cannonChange, this);
    }

    onDestroy () {
        FishHappyConstants.eventMgr.remove(FishGameEventName.GAME_CANNON_CHANGE, this.cannonChange, this);
    }

    refreshUI () {
        this.myPlayerData = FishHappyRoomData.instance.getPlayerDataByClientPos(FishHappyRoomData.instance.myClientPos);
        // this.myPlayerData!.setVIP(6); //test
        let selVip = this.myPlayerData!.selVip;
        let vipLv = this.myPlayerData!.getVIP();
        for (let i = 0; i < this.itemCount; i++) {
            let nodeItem = this.nodeContent!.getChildByName('node_item' + i);
            let btnEquip = nodeItem!.getChildByName('btn_equip');
            let sprEquip = nodeItem!.getChildByName('spr_equiped');
            let nodeNotGet = nodeItem!.getChildByName('node_not');
            if (selVip == i) {
                btnEquip!.active = false;
                sprEquip!.active = true;
            } else {
                btnEquip!.active = true;
                sprEquip!.active = false;
                if (vipLv < i) {
                    btnEquip!.active = false;
                    nodeNotGet!.active = true;
                }
            }
            if (!this.isInit) {
                btnEquip!.on(Button.EventType.CLICK, () => {
                    let vip = i;
                    let fishingOp = new fishing.fishing.CSFishingOp();
                    fishingOp.OpCode = FishPlayerOpCode.OpCodeChCannon;
                    fishingOp.Params = [vip];
                    SocketMgr.send(fishing.fishing.FIPacketID.FISHING_CS_OP, fishingOp);

                    // test!!!!!
                    // if (this.myPlayerData != null) {
                    //     this.myPlayerData.selVip = i;
                    // }
                }, this);
            }
        }
        this.isInit = true;
    }

    btnCloseChangeCannon () {
        this.closeSelf();
    }

    cannonChange (clientPos: number) {
        if (clientPos == FishHappyRoomData.instance.myClientPos) {
            this.refreshUI();
        }
    }
}
