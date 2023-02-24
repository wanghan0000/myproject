/*
 * @Description: 
 * @Author: Super_Javan
 * @Date: 2022-11-30 14:36:12
 * @LastEditTime: 2023-01-15 15:24:18
 * @LastEditors: super_javan 296652579@qq.com
 */

import { BaseRoomData } from '../../../ScriptCore/data/BaseRoomData';
import { UserData } from '../../../ScriptCore/data/UserData';
import richblessed from "../protocol/richblessed";

export enum RoomModel{
    /**
     * 正常
     */
    NormalGame = 0,
    /**
     * 免费模式
     */
    FreeGame = 1,
    /**
     * JackGame
     */
    JackGame = 2,
}
export class RichblessedRoomData extends BaseRoomData {
    private static _instance: RichblessedRoomData | null = null;

    private _sceneType: number = 0;


    //下注下标
    private _BetIdx: number = 0;
    private _BetMax:number = 4;
    public get BetIdx() : number {
        return this._BetIdx;
    }
    public set BetIdx(v : number) {
        if(v < 0){
            v = this._BetMax;
        }
        if(v > this._BetMax){
            v = 0;
        }
        this._BetIdx = v;
    }

    //下注金额
    private _BetMoney: number[] = [];
    public get BetMoney() : number[] {
        return this._BetMoney;
    }
    public getCurrentBetMoney() : number{
        return this.BetMoney[this.BetIdx] || 0;
    }

    //金额
    private _coin:number = 0;
    public get coin() : number {
        return this._coin;
    }
    public set coin(v : number) {
        this._coin = v;
    }

    //钻石
    public diamond:number = 0;
    //所有奖池
    allJackPot:number[] = [];

    //小游戏赢奖金额
    winJackpot:number = 0;

    //免费次数增加
    public getAddFreeNum(){
        // const { AddFreeNum } = this.billed;
        // console.log('有新增的免费次数 :' + this.billed.AddFreeNum);
        let AddFreeNum = this.billed.AddFreeNum ? this.billed.AddFreeNum : 0;
        return AddFreeNum;
    }

    /**
     * 获取当前界面模式
     */
    public getRoomModel(){
        const { NowGameState = 0 , FreeNum, JackpotEle } = this.billed;
        if(JackpotEle != -1){
            return RoomModel.JackGame
        }else if(FreeNum > 0){
            return RoomModel.FreeGame
        }else{
            return RoomModel.NormalGame
        }
    }

    //中奖结果
    billed:richblessed.richblessed.SCRBBilled = null;
    //中奖下标
    private _targetIndexs:number[] = [];
    public get targetIndexs() : number[] {
        return this._targetIndexs;
    }
    public set targetIndexs(v : number[]) {
        this._targetIndexs = v;
        if(v && v.length){
            if(!this.billed){
                return
            }
            this.billedIndex.clear();
            let startIndex = 0;
            const { Cards = [] } = this.billed;
            v.forEach((element,column)=>{
                const temps = [];
                for(let i = 0 ; i < 3 ; ++i){
                    const tag = Cards[startIndex + i * 5];
                    const index = element + 2 - i;
                    temps.push({index,tag}); 
                }
                startIndex += 1;
                this.billedIndex.set(column,temps);
            })
        }else{
            this.billedIndex.clear();
        }
    }
    private billedIndex: Map<number,{index:number,tag:number}[]> = new Map();
    
    

    /**
     * 匹配中奖结果
     * @param index 
     */
    public matchBilled(column:number, index:number): number{
        let retTag = -1;
        const datas = this.billedIndex.get(column);
        if(datas && datas.length){
            for(let i = 0 ; i < datas.length ; ++i){
                if(index == datas[i].index){
                    retTag = datas[i].tag;
                    break;
                }
            }
        }

        if(this.billed){
            const {FreeNum} = this.billed;
            if(FreeNum && retTag == -1)
                return Math.floor(Math.random() * 5 - 1) + 1;
        }

        if(retTag == -1){
            return Math.floor(Math.random() * (8 - 1)) + 1;
        }
        return retTag;
    }


 
    public cannonCosts: number[] | undefined;

    static get instance(): RichblessedRoomData {
        if (this._instance == null) {
            this._instance = new RichblessedRoomData();
        }
        return this._instance;
    }

    public static destoryInstance() {
        this._instance = null;
    }

    public getSceneType(): number {
        return this._sceneType;
    }

    public loadData (data: any) {
        super.loadData(data);
        this._sceneType = data.SceneType;
        this._BetIdx = data.BetIdx;
        
        const {ParamsEx = []} = data;
        for(let i = 0 ; i < 5 ; ++i){
            this.BetMoney[i] = ParamsEx[i];
        }

        this.allJackPot = [];
        this.allJackPot.push(data.GrandJackpot);
        this.allJackPot.push(data.BigJackpot);
        this.allJackPot.push(data.MiddleJackpot);
        this.allJackPot.push(data.SmallJackpot);

        const {Coin} = data.Player;
        this.coin = Coin;
        this.diamond = UserData.getInstance().getDiamond();
    }

    public slotsCardsInitialGenerator(){
        //随机第一列
        let Cards1 = [4,6,8,2];
        let Cards2 = [0,1,7,3];
        let Cards3 = [2,5,9,3];
        let Cards4 = [0,3,10,4,8,6];
        let Cards5 = [1,2,7,4,6,0];
        let Cards:Array<number[]> = [];
        Cards.push(Cards1);
        Cards.push(Cards2);
        Cards.push(Cards3);
        Cards.push(Cards4);
        Cards.push(Cards5);
        let retCards = [];
        for(let i = 0 ; i < 15 ; ++i){
            retCards[i] = Cards[i % 5][Math.floor(Math.random() * (Cards[i % 5].length - 1))]
        }
        return retCards
    }
}