
// Code generated by xlsx2proto.
// DO NOT EDIT!

import { ConfHolder } from "./ConfLoader";

export class DB_IceAgeCardLib implements ConfHolder {
    public datas:server.DB_IceAgeCardLibArray | null = null;
    public pool:Map<number,server.DB_IceAgeCardLib> = new Map<number,server.DB_IceAgeCardLib>();
    private static instacne:DB_IceAgeCardLib | null = null;

    public static getInstance():DB_IceAgeCardLib{
        if (this.instacne == null){
            this.instacne = new DB_IceAgeCardLib();
        }
        return this.instacne;
    }

    //反序列化
    decode(buff: Uint8Array): Error|null {
        this.datas = server.DB_IceAgeCardLibArray.decode(buff);
        this.arrangeData();
        return null;
    }

    //
    public clear():void{
        this.datas =null;
        this.pool.clear();
        DB_IceAgeCardLib.instacne = null;
    }

    //将数组转换成为字典
    private arrangeData(){
        if (this.datas != null){
            for (let k of this.datas.Arr.keys()){
                let id = this.datas.Arr[k].Id;
                this.pool.set(id!,this.datas.Arr[k] as server.DB_IceAgeCardLib)
            }
        }
    }
}
