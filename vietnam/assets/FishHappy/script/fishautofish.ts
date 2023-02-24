
import { _decorator, v3, tween, Node, instantiate, UITransform, Size, Button, Toggle, Sprite, Label } from 'cc';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { UIPopup } from '../../ScriptCore/UIFrame/UIForm';
import { DB_Fish } from '../data/db_fish';
import { DB_FishRate } from '../data/db_fishrate';
import { StateHook } from './cannonstate/statehook';
import { StateNormal } from './cannonstate/statenormal';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishGameEventName } from './configs/fishgameeventname';
import { FishHappyPlayerData } from './fishdata/fishhappyplayerdata';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
import { UIMgr } from '../../ScriptCore/Lobby/Scripts/UIMgr';
const { ccclass, property } = _decorator;

@ccclass('FishAutoFish')
export class FishAutoFish extends UIPopup {
    @property(Node)
    nodeScrollContent: Node | null = null;

    @property(Node)
    nodeItem: Node | null = null;

    itemStartPos = v3(-366, -75, 0);
    itemDisX = 244;
    itemDisY = 160;
    itemLineCount = 4;

    itemNodes: Node[] = [];
    fishIdRemove = [10502, 10503, 10504, 10505, 12004];
    fishDatas: any[] = [];

    myPlayerData: FishHappyPlayerData | undefined;

    start () {
        this.node.scale = v3(0.1, 0.1, 0.1);
        tween(this.node).to(0.2, {scale: v3(1.0, 1.0, 1.0)}).start();
        this.init();
    }

    init () {
        this.myPlayerData = FishHappyRoomData.instance.getPlayerDataByClientPos(FishHappyRoomData.instance.myClientPos);
        if (DB_Fish.getInstance().pool != null) {
            DB_Fish.getInstance().pool.forEach((fishData, fishId) => {
                if (fishData.GameId == FishHappyConstants.GameId_FishingHappy && !this.findFishIdRemove(fishId)) {
                    this.fishDatas.push(fishData);
                }
            })
        }
        this.fishDatas = this.fishDatas.sort((a, b) => a.Sort - b.Sort);
        this.initView();
    }

    findFishIdRemove (fishId: number): boolean {
        for (let id of this.fishIdRemove) {
            if (id == fishId) {
                return true;
            }
        }
        return false;
    }

    btnOnClose () {
        if (FishHappyConstants.gameCtrl.cannonState != null) {
            let stateName = FishHappyConstants.gameCtrl.cannonState.getStateName();
            if (stateName != 'StateHook') {
                FishHappyRoomData.instance.fishSortIdOfSelected.length = 0;
            }
        }
        this.closeSelf();
    }

    btnOnStartAutoFish () {
        if (FishHappyRoomData.instance.fishSortIdOfSelected.length <= 0) {
            UIMgr.getInstance().AlertTxtWithConfirmClose("请选鱼!")
            return;
        }
        let state = FishHappyConstants.gameCtrl.getComponent(StateHook);
        FishHappyConstants.gameCtrl.switchCannonState(state);
        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_GUAJIVIE_VISIBLEW, true);
        this.closeSelf();
    }

    btnOnCancelAutoFish () {
        this.reSelectFish();
        
        if (FishHappyConstants.gameCtrl.cannonState != null) {
            let stateName = FishHappyConstants.gameCtrl.cannonState.getStateName();
            if (stateName == 'StateHook') {
                let state = FishHappyConstants.gameCtrl.getComponent(StateNormal);
                FishHappyConstants.gameCtrl.switchCannonState(state);
            }
        }
        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_GUAJIVIE_VISIBLEW, false);
        this.closeSelf();
    }

    initView () {
        let indexX, indexY = 0;
        for (let i = 0; i < this.fishDatas.length; i++) {
            let fishData = this.fishDatas[i];
            if (fishData != null) {
                let item = instantiate(this.nodeItem);
                item!.active = true;
                item!.parent = this.nodeScrollContent;
                if (item != null) {
                    this.itemNodes.push(item);
                }
                let spr = item!.getChildByName('spr_fish')!.getComponent(Sprite);
                let sprFrm = this.getIconSprFrmByName(fishData.Id)
                if (sprFrm != null) {
                    spr!.spriteFrame = sprFrm;
                }
                let labelScore = item!.getChildByName('label_score')!.getComponent(Label);
                let fishRateData = DB_FishRate.getInstance().pool!.get(fishData.Id);
                if (fishRateData != null) {
                    let golds = fishRateData.Gold;
                    if (golds[0] == golds[1]) {
                        labelScore!.string = golds[0] + '倍';
                    } else {
                        labelScore!.string = golds[0] + '倍 ~ ' + golds[1] + '倍';
                    }
                }

                if (fishData.Id == 11021) {
                    labelScore!.string = '???';
                } else if (fishData.Id == 13001) {
                    labelScore!.string = '???';
                }

                let toggle = item!.getChildByName('toggle_sel')!.getComponent(Toggle);

                if (FishHappyRoomData.instance.isFishSelect(fishData.Id)) {
                    toggle!.isChecked = true;
                }

                // toggle!.node.on(Toggle.EventType.TOGGLE, () => {
                //     if (toggle!.isChecked) {
                //         // toggle!.isChecked = false;  //这个设置还是触发回调，会导致栈溢出
                //         let index = FishHappyRoomData.instance.fishSortIdOfSelected.indexOf(fishData.Id);
                //         if (index > -1) {
                //             FishHappyRoomData.instance.fishSortIdOfSelected.splice(index, 1);
                //         }
                //     } else {
                //         // toggle!.isChecked = true;
                //         FishHappyRoomData.instance.fishSortIdOfSelected.push(fishData.Id);
                //     }
                // }, this);

                item!.on(Button.EventType.CLICK, () => {
                    if (toggle!.isChecked) {
                        toggle!.isChecked = false;
                        let index = FishHappyRoomData.instance.fishSortIdOfSelected.indexOf(fishData.Id);
                        if (index > -1) {
                            FishHappyRoomData.instance.fishSortIdOfSelected.splice(index, 1);
                        }
                    } else {
                        toggle!.isChecked = true;
                        FishHappyRoomData.instance.fishSortIdOfSelected.push(fishData.Id);
                    }
                }, this);
                indexX = i % this.itemLineCount;
                indexY = Math.floor(i / this.itemLineCount);
                item!.position = v3(this.itemStartPos.x + indexX * this.itemDisX, this.itemStartPos.y - indexY * this.itemDisY, 0);
            }
        }
        let transform = this.nodeScrollContent!.getComponent(UITransform);
        let size = transform!.contentSize;
        transform!.contentSize = new Size(size.width, this.itemDisY * (indexY + 1));
    }

    reSelectFish () {
        FishHappyRoomData.instance.fishSortIdOfSelected.length = 0;
        for (let itemNode of this.itemNodes) {
            if (itemNode != null) {
                let toggle = itemNode.getChildByName('toggle_sel')!.getComponent(Toggle);
                toggle!.isChecked = false;
            }
        }
    }

    getIconSprFrmByName (Id: number) {
        let atlasPath = "FishHappy/texture/fishhappy_fish";
        let sprFrmName = "fishhappy_fish_" + Id;
        let atlas = ResMgr.getInstance().getSpriteAtlasByPath(atlasPath);
        let sprFrm = atlas!.getSpriteFrame(sprFrmName);
        return sprFrm;
    }
}
