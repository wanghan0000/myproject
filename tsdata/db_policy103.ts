
// Code generated by xlsx2proto.
// DO NOT EDIT!

import { ConfHolder } from "./ConfLoader";

export class DB_Policy103 implements ConfHolder {
    public datas:server.DB_Policy103Array | null = null;
    public pool:Map<number,server.DB_Policy103> = new Map<number,server.DB_Policy103>();
    private static instacne:DB_Policy103 | null = null;

    public static getInstance():DB_Policy103{
        if (this.instacne == null){
            this.instacne = new DB_Policy103();
        }
        return this.instacne;
    }

    //反序列化
    decode(buff: Uint8Array): Error|null {
        this.datas = server.DB_Policy103Array.decode(buff);
        this.arrangeData();
        return null;
    }

    //
    public clear():void{
        this.datas =null;
        this.pool.clear();
        DB_Policy103.instacne = null;
    }

    //将数组转换成为字典
    private arrangeData(){
        if (this.datas != null){
            for (let k of this.datas.Arr.keys()){
                let id = this.datas.Arr[k].Id;
                this.pool.set(id!,this.datas.Arr[k] as server.DB_Policy103)
            }
        }
    }
}