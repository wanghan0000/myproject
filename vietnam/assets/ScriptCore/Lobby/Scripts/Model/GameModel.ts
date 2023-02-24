
export class GameModel  {
    private static instance:GameModel|null = null;
    public static getInstance():GameModel{
        if (this.instance == null){
            this.instance = new GameModel();
        }
        return this.instance;
    }
    public static destoryInstance():void{
        this.instance = null;
    }

    private JackpotAll:any = null;
    private isGetDataEventJackpot=false;

    public getJackpotByGameId(gameId: any,roomId: any){
        if(this.JackpotAll){
            for(var i=0;i<this.JackpotAll.length;i++){
                if(this.JackpotAll[i].GameID == gameId && this.JackpotAll[i].RoomID == roomId)
                    {
                        return this.JackpotAll[i].JackpotFund;
                    }
            }
        }
        return 0;
    }

    public getNameGameById(gameId:number){
        return dataNameGame.get(gameId);
    }

    public GetEventJackpotByKey(gameId: any)
    {
        // if (this.dictEventJackpot != null && this.dictEventJackpot.has(gameId))
        // {
        //     return this.dictEventJackpot.get(gameId);
        // }
        // else
        // {
            return {
                IsEvent: false,
                list: new Array()
            }
        // }
    // return null;
    }
 }
// 

let dataNameGame = new Map<number, string>(
    [
        [3, "Thần Tài"],
        [10, "Bầu Cua"],
        [40,"Thánh Thần"],
        [2, "God Father"],
        [1, "Audition"],
        [42,"Avenger"],
        [39, "La Mã"],
        [44,"Sấm Truyền"],
        [41,"Zeus"],
        [43,"IsLand"],
        [16,"Ice"],
        [45,"Gái Nhảy"],
        [6,"Boom Online"],
        [46,"Candy"],
        [4,"Minipoker"]
    ]
)

// var dataNameGame: Map<number, string> = {
//     3: "Thần Tài",
//     10: "Bầu Cua",
//     40:"Thánh Thần",
//     2: "God Father",
//     1: "Audition",
//     42:"Avenger",
//     39: "La Mã",
//     44:"Sấm Truyền",
//     41:"Zeus",
//     43:"IsLand",
//     16:"Ice",
//     45:"Gái Nhảy",
//     6:"Boom Online",
//     46:"Candy",
//     4:"Minipoker"

// }

// module.exports = GameModel;
