
// Code generated by xlsx2proto.
// DO NOT EDIT!

import { ConfHolder } from "./ConfLoader";

export class DB_Legend_TurnRate implements ConfHolder {
    public datas:server.DB_Legend_TurnRateArray | null = null;
    public pool:Map<number,server.DB_Legend_TurnRate> = new Map<number,server.DB_Legend_TurnRate>();
    private static instacne:DB_Legend_TurnRate | null = null;

    public static getInstance():DB_Legend_TurnRate{
        if (this.instacne == null){
            this.instacne = new DB_Legend_TurnRate();
        }
        return this.instacne;
    }

    //反序列化
    decode(buff: Uint8Array): Error|null {
        this.datas = server.DB_Legend_TurnRateArray.decode(buff);
        this.arrangeData();
        return null;
    }

    //
    public clear():void{
        this.datas =null;
        this.pool.clear();
        DB_Legend_TurnRate.instacne = null;
    }

    //将数组转换成为字典
    private arrangeData(){
        if (this.datas != null){
            for (let k of this.datas.Arr.keys()){
                let id = this.datas.Arr[k].Id;
                this.pool.set(id!,this.datas.Arr[k] as server.DB_Legend_TurnRate)
            }
        }
    }
}
