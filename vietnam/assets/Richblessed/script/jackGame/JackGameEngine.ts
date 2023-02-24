/*
 * @Author: super_javan 296652579@qq.com
 * @Date: 2022-12-08 10:32:50
 * @LastEditors: super_javan 296652579@qq.com
 * @LastEditTime: 2023-01-15 15:39:09
 * @FilePath: \vietnam\assets\Richblessed\script\jackGame\JackGameEngine.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { EventMgr } from "../../../ScriptCore/events/eventmgr";
import { RichblessedRoomData } from "../richblesseddata/RichblessedRoomData";
import EndGameDTO from "./dto/EndGameDTO";
import OpenResultDTO from "./dto/OpenResultDTO";
import StartGameDTO from "./dto/StartGameDTO";
import SumGameDTO from "./dto/SumGameDTO";
import GameEvent from "./event/GameEvent";

export default class JackGameEngine{
    /**
     * 最多牌数量
     */
    static MAX_CARD: number = 12;
             /**
     * 无效的牌
     */
    static NONE_CARD: number = 0xF0;
        /**
     * 未知的牌，未翻牌
     */
    static DARK_CARD: number = 0xE0;

    /**
     * 男女孩所有牌
     */
    // private cards: number[] = [
    //     // 金色男孩 金色女孩 蓝色男孩 蓝色女孩
    //     0x00, 0x01, 0x02, 0x03,0x00, 0x01, 0x02, 0x03,0x00, 0x01, 0x02, 0x03
    // ];
    private cards:number[] = [];

    /**
     * 当前桌面的牌
     */
     private currCards: number[] = [
        JackGameEngine.DARK_CARD, JackGameEngine.DARK_CARD, JackGameEngine.DARK_CARD,JackGameEngine.DARK_CARD,
        JackGameEngine.DARK_CARD, JackGameEngine.DARK_CARD, JackGameEngine.DARK_CARD,JackGameEngine.DARK_CARD, 
        JackGameEngine.DARK_CARD, JackGameEngine.DARK_CARD, JackGameEngine.DARK_CARD,JackGameEngine.DARK_CARD];

    /**中奖的牌所在位置 */
    private locationIndex:number[] = null;

    constructor(){

    }

    startGame(){
        this.locationIndex = [];
        this.assembleCards();
        this.cards = this.shuffle();
        this.sendStartGame();
    }

    /**
     *  洗牌，随机数组
     */
    private shuffle(): number[] {
        this.cards.sort(function(){
            return Math.random() - 0.5
        })
        console.log('随机排序后的数组 :' + this.cards);
        return this.cards;
    }
    /**删除多余的牌留三个中奖的牌*/
    private assembleCards(){
        let {JackpotEle} = RichblessedRoomData.instance.billed;
        console.log('需要找的牌是:' + JackpotEle);

        let tempCard = [0,1,2,3];
        tempCard.splice(JackpotEle,1);
        for (let index = 0; index < 3; index++) {
            this.cards.push(JackpotEle);
        }

        for (let index = 0; index < 2; index++) {
            for (const card of tempCard) {
                this.cards.push(card);
            }
        }
    }

    /**
     * 发送开始游戏
     */
    private sendStartGame() {
        let startDto = new StartGameDTO(this.currCards);
        //发送游戏开始事件
        EventMgr.getInstance().dispatchEvent(GameEvent.JACKGAME_START_GAME,startDto);
    }

    /**开牌*/
    open(cardIndex:number){
        if(cardIndex != null){   
            if(this.currCards[cardIndex] == JackGameEngine.DARK_CARD){
                let card = this.cards[0]; //依次取出
                this.cards.splice(0,1);
                this.currCards[cardIndex] = card;
                console.log('开牌的位置->:' + cardIndex + '以及开的牌是 : ' + card);
                if((card == null || card == undefined) || (cardIndex == null && cardIndex == undefined))return;
                this.sendOpenResult(cardIndex,card);
                this.saveLocalIndex(cardIndex,card);
            }
        }
    }

    /**是中的牌保存起来*/
    private saveLocalIndex(cardIndex:number,card:number){
        let {JackpotEle} = RichblessedRoomData.instance.billed;
        if(card == JackpotEle)
            this.locationIndex.push(cardIndex);
    }

    /**
     * 发送显示牌
     * @param index 棋盘上索引位置
     * @param card
     */
    private sendOpenResult(index: number, card: number) {
        let openResult = new OpenResultDTO(index,card);
        //发送开牌事件
        EventMgr.getInstance().dispatchEvent(GameEvent.JACKGAME_OPEN_RESULT,openResult);
    }

    /**
     * 校验游戏是否结束
     */
    checkGameIsWin(){
        let {JackpotEle} = RichblessedRoomData.instance.billed
        let times = 0;
        this.currCards.forEach((v) => {
            if(v == JackpotEle)
                times++;
        });
        // console.log('获取RichblessedRoomData.instance.winJackpot : ' + RichblessedRoomData.instance.winJackpot);
        if(times >= 3){ //找到了三个
            let sumDto = new SumGameDTO(this.locationIndex);
            EventMgr.getInstance().dispatchEvent(GameEvent.JACKGAME_OPEN_SUM,sumDto);
            return   
        }
    }
}