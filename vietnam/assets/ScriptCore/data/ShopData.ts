import { DB_Shop1 } from "../config/db_shop1";
import  shop  from "../protocol/shop.js";




export class ShopData  {

    private static instance:ShopData = null;
    public static getInstance():ShopData{
        if(this.instance == null){
            this.instance = new ShopData();
        }
        return this.instance;
    }    


    private list:shop.shop.ShopInfo[] = null;
    public onShopData(data:shop.shop.SCShopInfo){
        this.list = [];
        for(let i = 0;i<data.Infos.length;i++){
            this.list.push(data.Infos[i] as shop.shop.ShopInfo);
        }
    }

    //根据不同的位置获取商城的列表数据
    public getShopListByLocation(location:number):shop.shop.ShopInfo[]{
        if(this.list == null){
            return null;
        }
        // console.log("商城中的数据表===========");
        // console.log(DB_Shop1.getInstance().pool);
        // console.log("商城中的数据表===========");

        // console.log("商城请求过来的数据");
        // console.log(this.list);
        // console.log("商城请求过来的数据");


        let dataList : shop.shop.ShopInfo[] = [];
        for(let i = 0;i<this.list.length;i++){
            let config = DB_Shop1.getInstance().pool.get(this.list[i].Id);
            if(config.Location[location-1] == 1 ){
                dataList.push(this.list[i]);
            }
        }
        dataList.sort((a:shop.shop.ShopInfo,b:shop.shop.ShopInfo)=>{
            return a.Id > b.Id ? 1 : -1;
        })
        return dataList;
    }


    //商品的兑换操作
    public onShopExchange(data:shop.shop.SCVCPayShop){
        if(data.RetCode == shop.shop.OpResultCode.OPRC_Sucess){
            for(let i = 0;i<this.list.length;i++){
                if(this.list[i].Id == data.ShopInfo.Id){

                    this.list[i].AdLookedNum = data.ShopInfo.AdLookedNum;
                    this.list[i].AdReceiveNum = data.ShopInfo.AdReceiveNum;
                    this.list[i].LastLookTime = data.ShopInfo.LastLookTime;
                    this.list[i].PetAdded = data.ShopInfo.PetAdded;
                    this.list[i].RoleAdded = data.ShopInfo.RoleAdded;

                }
            }
        }
    }

    //看广告的相应操作
    public onAdLooked(data:shop.shop.SCAdLooked){
        if(data.RetCode == shop.shop.OpResultCode.OPRC_Sucess){
            for(let i = 0;i<this.list.length;i++){
                if(this.list[i].Id == data.ShopInfo.Id){
                    this.list[i].AdLookedNum = data.ShopInfo.AdLookedNum;
                    this.list[i].AdReceiveNum = data.ShopInfo.AdReceiveNum;
                    this.list[i].LastLookTime = data.ShopInfo.LastLookTime;
                    this.list[i].PetAdded = data.ShopInfo.PetAdded;
                    this.list[i].RoleAdded = data.ShopInfo.RoleAdded;
                }
            }
        }
    }




}

