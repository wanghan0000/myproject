
import { _decorator, v3, tween, Label } from 'cc';
import { I18nMgr } from '../../ScriptCore/i18n/I18nMgr';

import  gamehall  from '../../ScriptCore/protocol/gamehall.js';
import { UIWindow } from '../../ScriptCore/UIFrame/UIForm';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
const { ccclass, property } = _decorator;

@ccclass('Fishmessagebox')
export class Fishmessagebox extends UIWindow {
    @property(Label)
    lebelCancel: Label | null = null;

    @property(Label)
    lebelTip: Label | null = null;

    start () {
        this.node.scale = v3(0.1, 0.1, 0.1);
        tween(this.node).to(0.2, {scale: v3(1.0, 1.0, 1.0)})
                        .call(() => {
                            let time = 5;
                            this.schedule(() => {
                                if (time == -1) {
                                    this.btnOnSure();
                                } else {
                                    //this.lebelCancel!.string = "取消(" + time + ")";
                                    this.lebelCancel.string = I18nMgr.getInstance().getStringByKey("quxiaoTxt") + "(" + time + ")";
                                }
                                time -= 1;
                            }, 1, 6, 1);
                        })
                        .start();

       // this.lebelTip!.string = "客官,确定要离开吗...";
       this.lebelTip.string = I18nMgr.getInstance().getStringByKey("fishhappy.quedinglikaiTxt");
    }

    btnOnCancel () {
        this.closeSelf();
    }


    private confitmCb:Function | null = null;
    onShow(params:any){
        if (params.confirmCb !== null && params.confirmCb !== undefined){
            this.confitmCb = params.confirmCb;
        }
    }

    async btnOnSure () {
        let quitGame =  new gamehall.gamehall.CSQuitGame();
        quitGame.Id = FishHappyRoomData.instance.getFreeModeId();
        if(quitGame.Id != 0)
        {
            // UserData.getInstance().reSetRoomId();
            // quitGame.IsAudience = false;
            // console.log(quitGame);
            // SocketMgr.send(gamehall.GameHallPacketID.PACKET_CS_QUITGAME,quitGame);
        }

        // await UIMgr.getInstance().showScreenLobby();
        // FishHappyConstants.eventMgr.dispatchEvent(LogicEvent.ENTER_HALL_FROM_GAMES,null)
        // FishHappyConstants.gameCtrl.node.destroy();
        
        if (this.confitmCb){
            this.confitmCb();
        }
        await this.closeSelf();
    }
}
