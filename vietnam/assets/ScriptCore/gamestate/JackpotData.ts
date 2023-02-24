import  gamehall  from "../protocol/gamehall.js";



export class JackpotData {
    private static instance:JackpotData | null = null;
    public static getInstance(){
        if (this.instance == null){
            this.instance = new JackpotData();
        }
        return this.instance;
    }

    private jackpotDatas:Map<number,number> = new Map<number,number>();

    public onJackPotDataChange(msg:gamehall.gamehall.SCHundredSceneGetGameJackpot){
        if (msg.GameJackpotFund && msg.GameJackpotFund.length>0){
            for (let k = 0;k<msg.GameJackpotFund.length;k++){
                this.jackpotDatas.set(msg.GameJackpotFund[k].GameFreeId!,msg.GameJackpotFund[k].JackPotFund!);
            }
        }
    }

    /**
     * 获取gameFreeId对应的奖池
     * @param gameFreeId 
     * @returns 
     */
    public getJackPotByGameFreeId(gameFreeId:number):number{
        if(this.jackpotDatas.has(gameFreeId)){
            return this.jackpotDatas.get(gameFreeId)!;
        }
        return 0;
    }

/**
 * 小游戏的奖池数据
 * 数据结构为：
 * gamefreeId :{
 *      [betIdx 0] = val(number),
 *      [betIdx 1] = val(number),
 *      [betIdx 2] = val(number)
 *  }
 */
    private miniJackPotDatas:Map<number,number[]> = new Map<number,number[]>();
    public onMiniJackpotDataChange(msg:gamehall.gamehall.BroadcastGameJackpot){
        this.miniJackPotDatas.set(msg.GameFreeId,msg.JackpotFund);
    }
    //更新奖池数据
    public updateMiniJackpot(gameFreeId:number,betIdx:number,jackpotVal:number){
        console.log("updateMiniJackpot",gameFreeId,betIdx,jackpotVal);
        if(!this.miniJackPotDatas.has(gameFreeId)){
            this.miniJackPotDatas.set(gameFreeId,[]);
        }
        for(let i = 0;i<=betIdx;i++){
            if(this.miniJackPotDatas.get(gameFreeId)!.length<=i){
                this.miniJackPotDatas.get(gameFreeId)!.push(0);
            }
        }
        this.miniJackPotDatas.get(gameFreeId)![betIdx] = jackpotVal;
    }

    //获取miniGame对应的jackpot数据
    public getMiniJackPot(gameFreeId:number,betIdx:number):number{
        if(!this.miniJackPotDatas.has(gameFreeId)){
            return 0;
        }
        if(this.miniJackPotDatas.get(gameFreeId)!.length > betIdx){
            return this.miniJackPotDatas.get(gameFreeId)![betIdx];
        }
        return 0;
    }

    public static destory(){

    }
}