/*
 * @Description: 
 * @Author: Super_Javan
 * @Date: 2022-12-02 14:41:49
 * @LastEditTime: 2023-01-15 11:26:39
 * @LastEditors: super_javan 296652579@qq.com
 */
import { _decorator, Component, Node, Prefab, instantiate, Label, EventHandler, Button, UITransform, size, Size, Sprite, SpriteAtlas, Vec3, find, Event, Game, tween, Vec2, sp } from 'cc';
import { init } from '../../../../extensions/i18n/assets/LanguageData';
import { AudioMgr } from '../../../ScriptCore/audio/AudioMgr';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { Card } from '../../../Tienlen/script/common/component/Card';
import { RichblessedUIMgr } from '../../RichblessedUIMgr';
import { FruitsGameEventName } from '../configs/fruitsgameeventname';
import { SCRichblessed } from '../net/scRichblessed';
import { RICHBGMusic } from '../RichblessedConfig';
import TweenUtil from '../utils/TweenUtil';
import OpenResultDTO from './dto/OpenResultDTO';
import StartGameDTO from './dto/StartGameDTO';
import GameEvent from './event/GameEvent';
import JackGameConfig from './JackGameConfig';
import JackGameEngine from './JackGameEngine';
const { ccclass, property } = _decorator;

@ccclass('UIMiniGame')
export class UIMiniGame extends UIWindow {
    @property(Node)
    layout: Node = null;

    isLock:boolean = null;

    /**
     * 引擎
     */
    private _engine: JackGameEngine;
    /**
     * 当前牌面的牌
     */
    private cards: number[] = null;

    @property({type:[Node]})
    btnCards:Node[] = [];

    onShow(){
        AudioMgr.getInstance().playMusic(RICHBGMusic.jack, true);
        this.init();
        this.registerEvent();

        this._engine.startGame();

    }

    /**
     * 初始化
     */
    protected init() {
        this.isLock = true;
        this.dealCardHandler();
        this._engine = new JackGameEngine();
    }
    /**
     * 注册事件
    */
    protected registerEvent() {
        EventMgr.getInstance().addEventListener(GameEvent.JACKGAME_START_GAME, this.startGameLogic, this);
        EventMgr.getInstance().addEventListener(GameEvent.JACKGAME_OPEN_RESULT, this.openResultLogic, this);
        EventMgr.getInstance().addEventListener(GameEvent.JACKGAME_OPEN_SUM, this.openSummaryLogic, this);
        EventMgr.getInstance().addEventListener(GameEvent.JACKGAME_END_GAME, this.endGameLogic, this);
    }

    async dealCardHandler(){
        for (let index = 0; index < 12; index++) {
            const bankCardSp = await ResMgr.getInstance().getSpriteFrameByPath(`Richblessed/texture/images/jackjinbi`);
            const delCardNode = new Node();
            const delCardSp = delCardNode.addComponent(Sprite);
            
            delCardSp.spriteFrame = bankCardSp;
            this.node.addChild(delCardNode);
            delCardNode.setPosition(new Vec3(0,300,0));

            const cardTemp = this.btnCards[index];
            const time = 0.4 + index * 0.02;
            // let cardWorldPos = cardTemp.parent.getComponent(UITransform).convertToWorldSpaceAR(cardTemp.position);
            cardTemp.active = false;
            tween(delCardNode)
                .parallel(
                    tween().to(time,{position: new Vec3(cardTemp.position.x, cardTemp.parent.position.y, 1)}),
                    tween().to(time, {scale: new Vec3(0, 1, 1)},{easing: 'quadIn'}),
                    tween().to(time, {scale: new Vec3(-1, 1, 1)}, {easing: 'quadOut'})
                )
                .call(() => {
                    delCardNode.removeFromParent();
                    cardTemp.active = true;
                    this.isLock = false;
                })
                .start()
        }
    }

    startGameLogic(startGameVO: StartGameDTO){
        this.cards = startGameVO.cards;
        let len = this.btnCards.length;
        for (let index = 0; index < len; index++) {
            let button = this.btnCards[index].addComponent(Button)
            let clickEvent = new Component.EventHandler();
            clickEvent.target = this.node;
            clickEvent.component = 'UIMiniGame'
            clickEvent.customEventData = String(index);
            clickEvent.handler = "onBtnClick";
            button.clickEvents.push(clickEvent);
        }
    }

    onBtnClick(event:Event,cardIndex:any){
        console.log('cardIndex : ' + cardIndex);
        if(this.isLock)return;
        let card = this.cards[Number(cardIndex)];
        if(card === JackGameEngine.DARK_CARD){
            this._engine.open(Number(cardIndex))
        }
    }

    /**
     *
     * @param openResultVO 收到开牌消息
     */
    openResultLogic = (openResultVO: OpenResultDTO) => {
        this.cards[openResultVO.index] = openResultVO.card;
        this.updateOpenCard(openResultVO);
    };

    updateOpenCard(openResultVO: OpenResultDTO){
        AudioMgr.getInstance().playSound(RICHBGMusic.opencard);
        let cardIndex = openResultVO.index;
        let card = openResultVO.card;
        let cardTemp = this.getCardItemTemp(cardIndex);
        
        // await TweenUtil.flip(cardTemp, 0.7, () => {
        //     let imgName = JackGameConfig._iconMapping[card]
        //     const path = `Richblessed/texture/images/${imgName}`;
        //     let sp = ResMgr.getInstance().getSpriteFrameByPath(path);
        //     cardTemp.getComponent(Sprite).spriteFrame = sp;
        //     this._engine.checkGameIsWin();
        //     this.isLock = false;
        // });

        this.isLock = true;
        let spineConfig = JackGameConfig._spineMapping[card];
        let spComp = cardTemp.getComponent(sp.Skeleton);
        spComp.animation = spineConfig[0];
        spComp.setCompleteListener(() =>{
            spComp.animation = spineConfig[1];
            spComp.loop = true;
            this._engine.checkGameIsWin();
            this.isLock = false;
        })
    }
    getCardItemTemp(index:any){
        for (let i = 0; i < this.btnCards.length; i++) {
            const element = this.btnCards[i];
            if(i == Number(index))
                return element;
        }
    }

    openSummaryLogic(params:number[]){
        this.isLock = true;
        this.scheduleOnce(() => {
            RichblessedUIMgr.getInstance().showMiniGameSummary(params);
        },1)
    }

    endGameLogic(){
        SCRichblessed.getInstance().launchRichblessed(2,null);
        EventMgr.getInstance().dispatchEvent(FruitsGameEventName.GAME_CLOSE_JACKGAME);
        this.onBtnClose();
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
        EventMgr.getInstance().removeByEvent(GameEvent.JACKGAME_START_GAME);
        EventMgr.getInstance().removeByEvent(GameEvent.JACKGAME_OPEN_RESULT);
        EventMgr.getInstance().removeByEvent(GameEvent.JACKGAME_OPEN_SUM);
        EventMgr.getInstance().removeByEvent(GameEvent.JACKGAME_END_GAME);
    }
}

