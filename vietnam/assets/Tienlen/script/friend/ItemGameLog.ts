import { _decorator, Component, Node, Sprite, Label, SpriteFrame } from 'cc';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { GameConst } from '../../../ScriptCore/Lobby/Scripts/gameconfig/GameConst';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import friend from '../../../ScriptCore/protocol/friend.js';
import player from '../../../ScriptCore/protocol/player.js';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('ItemGameLog')
export class ItemGameLog extends Component {
    @property(Sprite)
    private spWinFlag: Sprite;
    @property(Sprite)
    private spMode: Sprite;
    @property(Label)
    private labelBaseCoin: Label;
    @property(Label)
    private labelDate: Label;
    // @property(SpriteFrame)
    private sfWin: SpriteFrame;
    // @property(SpriteFrame)
    private sfFail: SpriteFrame;
    // @property(SpriteFrame)
    private sfMode0: SpriteFrame;
    // @property(SpriteFrame)
    private sfMode1: SpriteFrame;
    // @property(SpriteFrame)
    private sfMode2: SpriteFrame;
    private _data: friend.friend.IPlayerGameLog;



    public set data(value: friend.friend.IPlayerGameLog) {
        this._data = value;
        let ln = I18nMgr.getInstance().getCurLngKey();
        ResMgr.getInstance().lazyLoadSpriteAtlas(`Tienlen/texture-${ln}/${ln}_tienlen`).then((altlas)=>{
            this.sfWin = altlas.getSpriteFrame(`${ln}_tienlen_uinfo_shengli`);
            this.sfFail = altlas.getSpriteFrame(`${ln}_tienlen_uinfo_shibai`);
            this.sfMode0 = altlas.getSpriteFrame(`${ln}_tienlen_uinfo_jingdian`);
            this.sfMode1 = altlas.getSpriteFrame(`${ln}_tienlen_uinfo_yule`);
            //这个应该是比赛场
            this.sfMode2 = altlas.getSpriteFrame(`${ln}_tienlen_uinfo_bisaichang`);
            this.spWinFlag.spriteFrame = value.IsWin > -1 ? this.sfWin : this.sfFail;

            this.spMode.spriteFrame = this.getModeSF(value.GameId);
            
        }).catch(()=>{
            console.log("多语言加载失败");
        })
        this.labelBaseCoin.string = I18nMgr.getInstance().getStringByKey("tienlen.dizhuonlyTxt") + `:${Utils.cvtToKMB(value.BaseScore, 0)}`;
        this.labelDate.string = TienlenHelper.formatTimeStr(value.Ts * 1000);
    }

    public getModeSF(gameId: number) {
        if (GameConst.isMatch(gameId)) {
            return this.sfMode2;
        } else if (GameConst.isTraditonal(gameId)) {
            return this.sfMode0;
        } else {
            return this.sfMode1;
        }
    }

}

