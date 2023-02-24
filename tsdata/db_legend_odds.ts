
// Code generated by xlsx2proto.
// DO NOT EDIT!

import { ConfHolder } from "./ConfLoader";

export class DB_Legend_Odds implements ConfHolder {
    public datas:server.DB_Legend_OddsArray | null = null;
    public pool:Map<number,server.DB_Legend_Odds> = new Map<number,server.DB_Legend_Odds>();
    private static instacne:DB_Legend_Odds | null = null;

    public static getInstance():DB_Legend_Odds{
        if (this.instacne == null){
            this.instacne = new DB_Legend_Odds();
        }
        return this.instacne;
    }

    //反序列化
    decode(buff: Uint8Array): Error|null {
        this.datas = server.DB_Legend_OddsArray.decode(buff);
        this.arrangeData();
        return null;
    }

    //
    public clear():void{
        this.datas =null;
        this.pool.clear();
        DB_Legend_Odds.instacne = null;
    }

    //将数组转换成为字典
    private arrangeData(){
        if (this.datas != null){
            for (let k of this.datas.Arr.keys()){
                let id = this.datas.Arr[k].Id;
                this.pool.set(id!,this.datas.Arr[k] as server.DB_Legend_Odds)
            }
        }
    }
}