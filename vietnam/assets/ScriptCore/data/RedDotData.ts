import { EventMgr } from "../events/eventmgr";
import { EventName } from "../events/EventName";
import  gamehall  from "../protocol/gamehall.js";

export class RedDotData  {
    private static instance:RedDotData = null;
    public static getInstance():RedDotData{
        if(this.instance == null){
            this.instance = new RedDotData();
        }
        return this.instance;
    }



    public clearData(){
        this.list = [];
    }

    private list:gamehall.gamehall.ShowRed[] = [];

    //保存红点的数据
    public onMessage(data:gamehall.gamehall.SCShowRed){
        console.log("红点的逻辑  服务器的推送");
        console.log(data);
        console.log("红点的逻辑  服务器的推送");

        console.log("原始的数据");
        console.log(this.list);
        console.log("原始的数据");

        let isExist:boolean = false;
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i].ShowType == data.ShowRed.ShowType && this.list[i].ShowChild == data.ShowRed.ShowChild){
                this.list[i].IsShow = data.ShowRed.IsShow;
                isExist = true;
            }
        }
        if(!isExist){
            this.list.push(data.ShowRed as gamehall.gamehall.ShowRed);
        }


        //当有红点变化的时候发送通知
        console.log("数据进行合并后的数据");
        console.log(this.list);
        console.log("数据进行合并后的数据");
        EventMgr.getInstance().dispatchEvent(EventName.RED_DOT_NOTIFY);
    }


    //message ShowRed{
    //   int32 ShowType = 1;    //0.邮件(1,2,3,4)  1.商城   
    //   int32 ShowChild = 2;    
    //  int32 IsShow = 3;
    //}

    //商城时候有红点
    public chkIsRedDotByShop(location:number):boolean{
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i].ShowType == 1 && this.list[i].ShowChild == location){
                if(this.list[i].IsShow == 1){
                    return true;
                }
            }
        }
        return false;
    }

    //充值商城的红点
    public resetRedDotByShop(location:number):void{
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i].ShowType == 1 && this.list[i].ShowChild == location){
                this.list[i].IsShow = 0;
            }
        }
        //商城的红点发生变化的时候执行通知
        EventMgr.getInstance().dispatchEvent(EventName.RED_DOT_NOTIFY);
    }

    //邮件的相应操作是按照 位来操作的。但是

    //判定 邮件是否有红点
    public chkIsRedDotByMail(location:number):boolean{
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i].ShowType == 0 && this.list[i].ShowChild == location){
                if(this.list[i].IsShow == 1){
                    return true;
                }
            }
        }
        return false;
    }

    //充值邮件上的红点
    public resetRedDotByMail(location:number):void{
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i].ShowType == 0 && this.list[i].ShowChild == location){
                this.list[i].IsShow = 0;
            }
        }
        //商城的红点发生变化的时候执行通知
        EventMgr.getInstance().dispatchEvent(EventName.RED_DOT_NOTIFY);
    }

    public chkIsRedDotByRole():boolean{
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i].ShowType == 2){
                if(this.list[i].IsShow == 1){
                    return true;
                }
            }
        }
        return false;
    }

    public resetRedDotByRole(){
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i].ShowType == 2){
                this.list[i].IsShow = 0;
            }
        }
    }

    public chkIsRedDotByPet():boolean{
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i].ShowType == 3){
                if(this.list[i].IsShow == 1){
                    return true;
                }
            }
        }
        return false;
    }

    public resetRedDotByPet(){
        for(let i = 0;i<this.list.length;i++){
            if(this.list[i].ShowType == 3){
                this.list[i].IsShow = 0;
            }
        }
    }
}

