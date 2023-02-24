
import { BaseRoomData } from '../../../ScriptCore/data/BaseRoomData';
import { UserData } from '../../../ScriptCore/data/UserData';
import fruits from "../protocol/fruits.js";

export class FruitsRoomData extends BaseRoomData {
    private static _instance: FruitsRoomData | null = null;

    private _sceneType: number = 0;

    //下注下标
    private _BetIdx: number = 0;
    public get BetIdx() : number {
        return this._BetIdx;
    }
    public set BetIdx(v : number) {
        if(v < 0){
            v = this._BetMoney.length - 1;
        }
        if(v > this._BetMoney.length){
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

    //上次玛丽滚动的结果
    public lastMaryId: number =17;
    
    


    //中奖结果
    billed:fruits.fruits.SCFruitsBilled = null;
    private billedIndex: Map<number,{index:number,tag:number}[]> = new Map();
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
            //Cards = [10, 6, 6, 6, 6, 5, 6, 6, 5, 3, 5, 0, 4, 10, 8];
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
  
    
    //玛丽中奖结果
    maryBilled: any = null;//fruits.fruits.SCFruitsMaryBilled = null;
    private maryBilledIndex: Map<number,{index:number,tag:number}[]> = new Map();
    //玛丽中奖下标
    private _maryTargetIndexs: number[] = [];
    public get maryTargetIndexs() : number[] {
        return this._maryTargetIndexs
    }
    public set maryTargetIndexs(v : number[]) {
        this._maryTargetIndexs = v;
        if(v && v.length){
            if(!this.maryBilled){
                return
            }
            this.maryBilledIndex.clear();
            const { MaryCards = [] } = this.maryBilled;
            v.forEach((element,column)=>{
                this.maryBilledIndex.set(column,[{index:element,tag:MaryCards[column]}]);
            })
        }else{
            this.maryBilledIndex.clear();
        }
    }

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
        if(retTag == -1){
            return Math.floor(Math.random() * (11 - 1));
        }
        return retTag;
    }

    public matchMaryBilled(column: number, index: number): number{
        let retTag = -1;
        const datas = this.maryBilledIndex.get(column);
        if(datas && datas.length){
            for(let i = 0 ; i < datas.length ; ++i){
                if(index == datas[i].index){
                    retTag = datas[i].tag;
                    break;
                }
            }
        }
        if(retTag == -1){
            const arr = [4,6,7,8,9,10,11]
            return arr[Math.floor(Math.random() * (arr.length - 1))];
        }
        return retTag;
    }

 
    public cannonCosts: number[] | undefined;

    static get instance(): FruitsRoomData {
        if (this._instance == null) {
            this._instance = new FruitsRoomData();
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
        if(!this.coin){
            this.coin = UserData.getInstance().getCoin();
        }
        this.diamond = UserData.getInstance().getDiamond();

        console.log('金币数量'+this.coin);
        console.log('钻石数量'+this.coin);
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