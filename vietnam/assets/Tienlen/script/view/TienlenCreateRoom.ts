import { _decorator, Component, Node, Slider, ToggleContainer, Toggle, Label, Button, Event, Sprite, UITransform } from 'cc';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import { gamehall } from '../../../ScriptCore/protocol/gamehall';
import { ModalOpacity } from '../../../ScriptCore/UIFrame/config/SysDefine';
import { ModalType } from '../../../ScriptCore/UIFrame/Struct';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { DB_Createroom } from '../../config/db_createroom';
import { ButtonPlus } from '../common/component/ButtonPlus';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
const { ccclass, property } = _decorator;

@ccclass('TienlenCreateRoom')
export class TienlenCreateRoom extends UIWindow {
    @property(Slider)
    public slider: Slider;
    @property(ToggleContainer)
    public toggleDesk: ToggleContainer;
    @property(ToggleContainer)
    public toggleNum: ToggleContainer;
    @property(Label)
    public labelDeskDesc: Label;
    @property(Label)
    public labelPlayDesc: Label;
    @property(Label)
    public labelRule: Label;
    @property(ButtonPlus)
    public btnCreate: ButtonPlus;
    @property(Label)
    public labelBaseScore: Label;
    @property(Button)
    public btnLeft: Button;
    @property(Button)
    public btnRight: Button;
    @property(Button)
    public btnClose: Button;
    @property(Sprite)
    public spSliderValue: Sprite;
    private _gameId: number = 207;
    private _roomMode: number = 0;
    private _maxNum: number = 4;
    private _baseCoin: number = 0;
    private _gameMode0List = [207, 209];
    private _gameMode1List = [208, 210];
    private _gameMode = 0;
    private _playMode = 0;
    modalType = new ModalType(ModalOpacity.OpacityHigh, false);
    onLoad() {
        this.slider.node.on('slide', () => {
            this.sliderProgress = this.slider.progress;
        }, this);
        this.btnLeft.node.on(Button.EventType.CLICK, () => {
            this.gameMode -= 1;
        }, this);
        this.btnRight.node.on(Button.EventType.CLICK, () => {
            this.gameMode += 1;
        }, this);
        this.btnCreate.setClickHandler(async () => {
            let msg = await TienlenHelper.callCreateRoom(this._gameId, this._baseCoin, this._roomMode, this._maxNum);
            if (msg && msg.OpRetCode == 0) {
                this.closeSelf();
            } else {
                TienlenHelper.showFloatTips(I18nMgr.getInstance().getStringByKey("tienlen.createRoomshibaiTxt"), this.node);
            }
        }, this);
        this.btnClose.node.on(Button.EventType.CLICK, () => {
            this.closeSelf();
        }, this);
    }

    public get gameModelList() {
        if (this._playMode == 0) return this._gameMode0List;
        else return this._gameMode1List;
    }

    public get gameModelStrList() {
        if (this._playMode == 0) return TienlenDefine.GameModeStr0List;
        else return TienlenDefine.GameModeStr1List;
    }

    public set gameMode(value: number) {
        let list = this.gameModelList;
        value = value < 0 ? list.length - 1 : value;
        value = value >= list.length ? 0 : value;
        this._gameMode = value;
        this.gameId = list[value];
    }

    public get gameMode(): number {
        return this._gameMode;
    }

    public set gameId(value: number) {
        this._gameId = value;
        this.labelRule.string = I18nMgr.getInstance().getStringByKey(this.gameModelStrList[this.gameMode]);
        let coins = TienlenHelper.getBaseCoinList(this._gameId);
        this.setBaseCoin(coins[0]);
    }

    public get gameId(): number {
        return this._gameId;
    }

    public gameIdToMode(id: number) {
        return this.gameModelList.indexOf(id);
    }

    public set sliderProgress(value: number) {
        let list = TienlenHelper.getBaseCoinList(this._gameId);
        let step = (1 / list.length);
        let index = Math.floor(value / step);
        index = Math.min(index, list.length - 1);
        this._baseCoin = list[index];
        this.labelBaseScore.string = Utils.cvtToKMB(list[index], 0);
        this.slider.progress = list.length <= 1 ? index : index / (list.length - 1);
        this.spSliderValue.getComponent(UITransform).width = this.slider.getComponent(UITransform).width * this.slider.progress;
    }

    onToggleDesk() {
        TienlenHelper.playSound(TienlenDefine.SoundClick);
        let list = this.toggleDesk.getComponentsInChildren(Toggle);
        if (list[0].isChecked) {
            //this.labelDeskDesc.string = '创建公共牌桌，您的牌桌信息会显示在牌桌列表内';
            this.labelDeskDesc.string = I18nMgr.getInstance().getStringByKey("tienlen.gonggongpaizhuoDescTxt");
            this._roomMode = 0;
        } else {
            //this.labelDeskDesc.string = '创建私人牌桌，您可以邀请您的好友来玩';
            this.labelDeskDesc.string = I18nMgr.getInstance().getStringByKey("tienlen.sirenpaizhuoDescTxt");
            this._roomMode = 2;
        }
    }

    onToggleNum() {
        TienlenHelper.playSound(TienlenDefine.SoundClick);
        let list = this.toggleNum.getComponentsInChildren(Toggle);
        if (list[0].isChecked) {
            this._maxNum = 4;
        } else {
            this._maxNum = 2;
        }
    }

    onShow(...args: any[]) {
        let cfg: { roomMode?: number, gameMode?: number, playerNum?: number } = args[0];
        this._playMode = args[1];
        this.gameMode = cfg.gameMode;
        let baseCoin = TienlenHelper.getBaseCoinList(this.gameId)[0];
        this.setDeskMode(cfg.roomMode);
        this.setPlayerNum(cfg.playerNum);
        this.setBaseCoin(baseCoin);
    }

    onHide() {
        let cfg = TienlenRuntime.createCfg;
        cfg.gameMode = this.gameMode;
        cfg.playerNum = this._maxNum;
        cfg.roomMode = this._roomMode
    }

    setDeskMode(value: number) {
        this._roomMode = value;
        let list = this.toggleDesk.getComponentsInChildren(Toggle);
        if (value == 0) {
            list[0].isChecked = true;
            //this.labelDeskDesc.string = '创建公共牌桌，您的牌桌信息会显示在牌桌列表内';
            this.labelDeskDesc.string = I18nMgr.getInstance().getStringByKey("tienlen.gonggongpaizhuoDescTxt");
        } else {
            list[1].isChecked = true;
            //this.labelDeskDesc.string = '创建私人牌桌，您可以邀请您的好友来玩';
            this.labelDeskDesc.string = I18nMgr.getInstance().getStringByKey("tienlen.sirenpaizhuoDescTxt");
        }
    }

    setPlayerNum(value: number) {
        this._maxNum = value;
        let list = this.toggleNum.getComponentsInChildren(Toggle);
        if (value == 4) {
            list[0].isChecked = true;
        } else {
            list[1].isChecked = true;
        }
    }

    setBaseCoin(value: number) {
        this._baseCoin = value;
        if (value == 0) {
            this.sliderProgress = 0;
        } else {
            let list = TienlenHelper.getBaseCoinList(this._gameId);
            for (let index = 0; index < list.length; index++) {
                const element = list[index];
                if (element == value) {
                    this.slider.progress = list.length == 1 ? 1 : index / (list.length - 1);
                    this.sliderProgress = this.slider.progress;
                    break;
                }
            }
        }
    }


}

