

/**
 * 每个动画上带的属性
 */
export class AnimationItem{
    public aniKey:string = "";
    public goldVal:number = 0;
    public timeOut:number = 0;
    constructor(aniKey?:string,goldVal?:number,timeOut?:number){
        if(aniKey){
            this.aniKey = aniKey;
        }
        if(goldVal){
            this.goldVal = goldVal;
        }
        if(timeOut){
            this.timeOut = 10;
        }
    }

    public timeOutHandler = -1;
}

export class UserGoldAniPool{
    private static instance:UserGoldAniPool = new UserGoldAniPool();

    public static getInstance():UserGoldAniPool{
        return this.instance;
    }

    /**
     * 重置清楚里边的数据
     */
    public  clear(){

    }

    private aniMap:Map<number,Map<string,AnimationItem>> = new Map<number,Map<string,AnimationItem>>();

    //获取动画池子中的所有的金币数
    public get getAllAniGold():number{
        let val = 0;
        if (this.aniMap.size >0){
            for(let key of this.aniMap.keys()){
                let aniArr = this.aniMap.get(key);
                if(aniArr!.size >0){
                    for(let aniKey of aniArr!.keys()){
                        val = val + aniArr!.get(aniKey)!.goldVal;
                    }
                }
            }
        }
        return val;
    }

    //确认新增一个动画
    public addAni(gameFreeId:number,item:AnimationItem){
        let gameArr = this.aniMap.get(gameFreeId);
        if(gameArr == null || gameArr == undefined){
            this.aniMap.set(gameFreeId,new Map<string,AnimationItem>());
        }
        this.aniMap.get(gameFreeId)!.set(item.aniKey!,item);

        //如果有过期时间 则 时间到了之后 需要定期清理动画默认情况下不用
        if(item.timeOut && item.timeOut >0){
            item.timeOutHandler = setTimeout(() => {
                this.onAniEnd(gameFreeId,item.aniKey);
            }, item.timeOut);
        }
    }

    //动画播放完成
    public onAniEnd(gameFreeId:number,aniKey:string){
        if(this.aniMap.has(gameFreeId) && this.aniMap.get(gameFreeId)!.has(aniKey)){
            let item = this.aniMap.get(gameFreeId)!.get(aniKey);
            if(item!.timeOutHandler != -1){
                clearTimeout(item!.timeOutHandler);
            }
            this.aniMap.get(gameFreeId)!.delete(aniKey);
        }
    }


    /**
     * 游戏退出 将该游戏中的对话全部清除掉
     * @param gameFreeId 
     */
    public onExiGameByGameFreeId(gameFreeId:number){
        this.aniMap.delete(gameFreeId);
    }
}