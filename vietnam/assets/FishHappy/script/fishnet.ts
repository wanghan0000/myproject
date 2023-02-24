
import { _decorator, Component, Animation, Vec3 } from 'cc';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
const { ccclass, property } = _decorator;

@ccclass('FishNet')
export class FishNet extends Component {
    @property(Animation)
    animNet: Animation | null = null;
    selVip = 0;

    init (clientPos: number, position: Vec3) {
        let playerData = FishHappyRoomData.instance.getPlayerDataByClientPos(clientPos);
        if (playerData != null) {
            this.selVip = playerData.selVip;
        }
        this.node.parent = FishHappyConstants.gameCtrl.layerNet;
        this.node.setPosition(position);
        this.playAnim();
    }

    playAnim () {
        this.animNet!.play('anim_bomb_' + this.selVip);
        this.animNet!.on(Animation.EventType.FINISHED , () => { 
            FishHappyConstants.gameCtrl.despawnNet(this.node);
        }, this);
    }
}
