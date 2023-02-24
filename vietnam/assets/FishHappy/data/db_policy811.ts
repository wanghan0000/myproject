
// Code generated by xlsx2proto.
// DO NOT EDIT!

import { ConfHolder } from "../../ScriptCore/config/ConfLoader";
import  server  from "../../ScriptCore/protocol/server.js";

export class DB_Policy811 implements ConfHolder {
    public datas:server.server.DB_Policy811Array | null = null;
    public pool:Map<number,server.server.DB_Policy811> = new Map<number,server.server.DB_Policy811>();
    private static instacne:DB_Policy811 | null = null;

    public static getInstance():DB_Policy811{
        if (this.instacne == null){
            this.instacne = new DB_Policy811();
        }
        return this.instacne;
    }

    //反序列化
    decode(buff: Uint8Array): Error|null {
        this.datas = server.server.DB_Policy811Array.decode(buff);
        this.arrangeData();
        return null;
    }

    //
    public clear():void{
        this.datas =null;
        this.pool.clear();
        DB_Policy811.instacne = null;
    }

    //将数组转换成为字典
    private arrangeData(){
        if (this.datas != null){
            for (let k of this.datas.Arr.keys()){
                let id = this.datas.Arr[k].Id;
                this.pool.set(id!,this.datas.Arr[k] as server.server.DB_Policy811)
            }
        }
    }
}
