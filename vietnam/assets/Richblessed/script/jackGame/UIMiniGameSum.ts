/*UIMiniGameSum
 * @Description: 小游戏结果界面
 * @Author: Super_Javan
 * @Date: 2022-12-02 14:41:49
 * @LastEditTime: 2022-12-20 14:42:53
 * @LastEditors: super_javan 296652579@qq.com
 */
import { _decorator, Component, Node, Prefab, instantiate, Label, EventHandler, Button, UITransform, size, Size, Sprite, SpriteAtlas, Vec3, find, Event, Game, tween, Vec2, sp } from 'cc';
import { init } from '../../../../extensions/i18n/assets/LanguageData';
import * as i18n from 'db://i18n/LanguageData';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { Card } from '../../../Tienlen/script/common/component/Card';
import { FruitsGameEventName } from '../configs/fruitsgameeventname';
import { fruitsNumFormat } from '../FruitsUtils';
import { SCRichblessed } from '../net/scRichblessed';
import { RichblessedRoomData } from '../richblesseddata/RichblessedRoomData';
import TweenUtil from '../utils/TweenUtil';
import EndGameDTO from './dto/EndGameDTO';
import OpenResultDTO from './dto/OpenResultDTO';
import StartGameDTO from './dto/StartGameDTO';
import GameEvent from './event/GameEvent';
import JackGameConfig from './JackGameConfig';
import JackGameEngine from './JackGameEngine';
const { ccclass, property } = _decorator;

const spriteConfig = {
    [0] :{
        bgPath:'Richblessed/texture/images/sum_red',
        potPath:'grandjackpot'
    },
    [1] :{
        bgPath:'Richblessed/texture/images/sum_blue',
        potPath:'miniorjackpot'
    },
    [2] :{
        bgPath:'Richblessed/texture/images/sum_green',
        potPath:'minijackpot'
    },
    [3] :{
        bgPath:'Richblessed/texture/images/sum_pop',
        potPath:'majorjackpot'
    }
}

@ccclass('UIMiniGameSum')
export class UIMiniGameSum extends UIWindow {
    @property(Sprite)
    iconBg: Sprite = null;

    @property(Node)
    spineJack: Node = null;

    @property(Label)
    lbJackWin: Label = null;

    @property(Sprite)
    iconPot: Sprite = null;

    private winJackpot = 0;
    onShow(...params:any){
        super.onShow(...params);
        this.init();
        this.registerEvent();
        this.updateSummary();

        this.scheduleOnce(() => {
            let endDto = new EndGameDTO();
            EventMgr.getInstance().dispatchEvent(GameEvent.JACKGAME_END_GAME,endDto);
            this.onBtnClose();
        },2)

        let {localIndex} = this.params[0];
        this.winJackpot= this.params[1];
        // console.log('中奖位置:' + localIndex)
        SCRichblessed.getInstance().launchRichblessed(2,localIndex);
    }

    /**
     * 初始化
     */
    protected init() {

    }
    /**
     * 注册事件
    */
    protected registerEvent() {
       EventMgr.getInstance().addEventListener(FruitsGameEventName.JACKGAME_WIN_REFRESH,this.refreshWinJackpot,this);
    }

    async updateSummary(){
        let {JackpotEle} = RichblessedRoomData.instance.billed;
        let config;
        switch (JackpotEle) {
            case 0:
                config = spriteConfig[0]
                break;
            case 1:
                config = spriteConfig[1]
                break;
            case 2:
                config = spriteConfig[2]
                break;
            case 3:
                config = spriteConfig[3]
                break;
        
            default:
                break;
        }
        if(!config)return;

        let spBg = await ResMgr.getInstance().getSpriteFrameByPath(config.bgPath);
        this.iconBg.spriteFrame = spBg;

        //Richblessed/texture/images/
        let potPath;
        if(i18n._language == 'zh'){
            potPath = `Richblessed/texture-zh/${config.potPath}`;
        }else if(i18n._language == 'en'){
            potPath = `Richblessed/texture-en/${config.potPath}`;
        }else if(i18n._language == 'kh'){
            potPath = `Richblessed/texture-kh/${config.potPath}`;
        }else{
            potPath = `Richblessed/texture-vi/${config.potPath}`;
        }
        let spPot = await ResMgr.getInstance().getSpriteFrameByPath(potPath);
        console.log(spPot);
        this.iconPot.spriteFrame = spPot; 
        this.spineJack.getComponent(sp.Skeleton).animation = JackGameConfig._spineMapping[JackpotEle][1];

        // let winJackpot = String(this.winJackpot);
        // this.lbJackWin.string = fruitsNumFormat(winJackpot);
    }

    private refreshWinJackpot(){
        let winJackpot = RichblessedRoomData.instance.winJackpot;
        if(winJackpot){
            console.log('刷新winjack 事件 winJackpot ----' + winJackpot);
            this.lbJackWin.string = fruitsNumFormat(String(winJackpot));
        }
    }
    

    //关闭界面
    onBtnClose() {
        this.closeSelf();
        this.unregisterEvent();
    }

    /**
     * 反注册事件
     */
    protected unregisterEvent() {
        EventMgr.getInstance().removeByEvent(FruitsGameEventName.JACKGAME_WIN_REFRESH);
    }
}

