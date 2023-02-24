import { _decorator, Component, Node, Label, Sprite, Button, SpriteFrame, EventTouch } from 'cc';
import { GameConst } from '../../../ScriptCore/Lobby/Scripts/gameconfig/GameConst';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import gamehall from '../../../ScriptCore/protocol/gamehall.js';
import { UIManager } from '../../../ScriptCore/UIFrame/UIManager';
import { ButtonPlus } from '../common/component/ButtonPlus';
import TienlenHelper from '../TienlenHelper';
import { TienlenUIMgr } from '../TienlenUIMgr';
import { TienlenSelect } from './TienlenSelect';
const { ccclass, property } = _decorator;

@ccclass('ItemRoom')
export class ItemRoom extends Component {
    @property(Label)
    public labelMode: Label;
    @property(Label)
    public labelCoin: Label;
    @property(Sprite)
    public sp0: Sprite;
    @property(Sprite)
    public sp1: Sprite;
    @property(Sprite)
    public sp2: Sprite;
    @property(Sprite)
    public sp3: Sprite;
    @property(ButtonPlus)
    public btnLook: ButtonPlus;
    @property(SpriteFrame)
    public icon0SF: SpriteFrame;
    @property(SpriteFrame)
    public icon1SF: SpriteFrame;

    private _data: gamehall.gamehall.IQRoomInfo;

    onLoad() {
        this.getComponent(ButtonPlus).setClickHandler(async () => {
            let data = this._data;
            if (data) {
                let msg = await TienlenHelper.callEnterRoom(data.GameId, data.RoomId);
                TienlenHelper.log(msg);
                if (msg.OpRetCode == 0) {
                    TienlenUIMgr.getInstance().hideCreateRoom();
                } else {
                    if (msg.OpRetCode == gamehall.gamehall.OpResultCode_Game.OPRC_CoinNotEnough_Game || msg.OpRetCode == gamehall.gamehall.OpResultCode_Game.OPRC_MoneyNotEnough_Game) {
                        TienlenHelper.showFloatTips(`金币不足`, TienlenHelper.getUIRoot());
                    } else if (msg.OpRetCode == gamehall.gamehall.OpResultCode_Game.OPRC_RoomIsFull_Game) {
                        TienlenHelper.showFloatTips(`人数已满`, TienlenHelper.getUIRoot());
                    } else if (msg.OpRetCode == gamehall.gamehall.OpResultCode_Game.OPRC_RoomNotExist_Game) {
                        TienlenHelper.showFloatTips(`房间不存在`, TienlenHelper.getUIRoot());
                    } else {
                        TienlenHelper.showFloatTips(`${gamehall.gamehall.OpResultCode[msg.OpRetCode]}`, TienlenHelper.getUIRoot());
                    }
                }
            }
        }, this);

        this.btnLook.setClickHandler(async () => {
            let data = this._data;
            if (data) {
                let msg = await TienlenHelper.callAudienceEnterRoom(data.GameId, data.RoomId);
                TienlenHelper.log(msg);
                if (msg.OpRetCode == 0) {
                    // TienlenHelper.hideRoomList();
                } else {
                    TienlenHelper.showFloatTips(`${gamehall.gamehall.OpResultCode[msg.OpRetCode]}`, TienlenHelper.getUIRoot());
                }
            }
        }, this);
    }

    public set data(value: gamehall.gamehall.IQRoomInfo) {
        this._data = value;
        this.labelMode.string = TienlenHelper.getGameModeStrById(value.GameId);
        this.labelCoin.string = Utils.cvtToKMB(value.BaseCoin, 0);
        if (value.MaxPlayer == 4) {
            this.sp0.node.active = true;
            this.sp3.node.active = true;
            this.sp1.node.active = true;
            this.sp2.node.active = true;
            for (let i = 0; i < value.MaxPlayer; ++i) {
                if (i < value.CurrNum) {
                    (this[("sp" + i) as keyof this] as any).spriteFrame = this.icon1SF;
                } else {
                    (this[("sp" + i) as keyof this] as any).spriteFrame = this.icon0SF;
                }

            }
        } else {
            this.sp0.node.active = false;
            this.sp3.node.active = false;
            this.sp1.node.active = true;
            this.sp2.node.active = true;
            for (let i = 1; i <= 2; ++i) {
                if (i <= value.CurrNum) {
                    (this[("sp" + i) as keyof this] as any).spriteFrame = this.icon1SF;
                } else {
                    (this[("sp" + i) as keyof this] as any).spriteFrame = this.icon0SF;
                }
            }
        }

    }


}

