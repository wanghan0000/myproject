import { DB_GameItem } from "../config/db_gameitem";
import  bag  from "../protocol/bag.js";


//背包数据
//全部请求
export class BagData {
    private static instance:BagData = null;
    
    public static getInstance(){
        if(this.instance == null){
            this.instance = new BagData();
        }
        return this.instance;
    }

    private list : bag.bag.ItemInfo[] = null;
    private hasOwnBagData:boolean = false;
    public initBagData(d:bag.bag.SCBagInfo){
        //判定背包是否请求成功
        if(d.RetCode == bag.bag.OpResultCode.OPRC_Sucess){
            this.hasOwnBagData = true;
        }
        this.list = d.Infos as bag.bag.ItemInfo[];
    }

    //出售 兑换 消息回调。背包数据发送变化的消息
    public onUseBagData(data:bag.bag.SCUpBagInfo){
        console.log("背包兑换或者出售的消息回调更新本地的背包数据");
        console.log(data);
        console.log("背包兑换或者出售的消息回调更新本地的背包数据");
        console.log(this.list);
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i].ItemId == data.NowItemId){
                this.list[i].ItemNum = data.NowItemNum;
            }
        }
        let tempData:bag.bag.ItemInfo[] = [];
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i].ItemNum >0){
                tempData.push(this.list[i]);
            }
        }
        this.list = tempData;
        console.log("更新完的数据");
        console.log(this.list);
        console.log("更新完的数据");
    }


    //背包的数据同步
    public onAsyncBagData(data:bag.bag.SCSyncBagData){
        for(let i = 0;i<data.Infos.length;i++){
            let isExist = false;
            for(let j = 0;j<this.list.length;j++){
                if(this.list[j].ItemId == data.Infos[i].ItemId){
                    isExist = true;
                    this.list[j].ItemNum = data.Infos[i].ItemNum;
                    this.list[j].ObtainTime = data.Infos[i].ObtainTime;
                }
            }
            if (!isExist){
                this.list.push(data.Infos[i] as bag.bag.ItemInfo);
                //进行一个排序 
                this.list.sort((a:bag.bag.ItemInfo,b:bag.bag.ItemInfo)=>{
                    return a.ItemId > b.ItemId ? 1 : -1;
                });
            }
        }

    }
    
    //获取背包中的全部去数据列表 如果已经请求成功了获取数据，如果没有则返回null
    public getBagList():bag.bag.ItemInfo[]{
        if(this.hasOwnBagData){
            return this.list;
        }else{
            return null;
        }
    }

    ///获取vcard的数量
    public getVCardCnt():number{
        let cnt = 0;
        if(this.list != null && this.list.length >0){
            for(let i = 0;i<this.list.length;i++){
                if(this.list[i].ItemId == 30001){
                    cnt = this.list[i].ItemNum;
                    break;
                }
            }
        }
        return cnt;
    }


    //根据不同的位置来后去
    public getBagListByLocation(location:number):bag.bag.ItemInfo[]{
        if(this.hasOwnBagData){
            let list:bag.bag.ItemInfo[] = [];
            for(let i = 0;i<this.list.length;i++){
                if (DB_GameItem.getInstance().pool.get(this.list[i].ItemId).ShowLocation[location] == 1 ){
                    list.push(this.list[i]);
                }
            }
            return list;    
        }else{
            return null;
        }
        
    }

    //清空背包中的数据
    public clear():void{
        this.list = [];
    }

    //根据背包id获取背包数据
    public getBagItemById(id:number):bag.bag.ItemInfo{
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i].ItemId == id && this.list[i].ItemNum >0){
                return this.list[i];
            }
        }
        return null;
    }

}

