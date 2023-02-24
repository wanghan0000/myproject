
// Code generated by xlsx2proto.
// DO NOT EDIT!

import { ConfHolder } from "../../ScriptCore/config/ConfLoader";
import  server  from "../../ScriptCore/protocol/server.js";





export class DB_FishHP2 implements ConfHolder {
    public datas:server.server.DB_FishHP2Array | null = null;
    public pool:Map<number,server.server.DB_FishHP2> = new Map<number,server.server.DB_FishHP2>();
    private static instacne:DB_FishHP2 | null = null;

    public static getInstance():DB_FishHP2{
        if (this.instacne == null){
            this.instacne = new DB_FishHP2();
        }
        return this.instacne;
    }

    //反序列化
    decode(buff: Uint8Array): Error|null {
        this.datas = server.server.DB_FishHP2Array.decode(buff);
        this.arrangeData();
        return null;
    }

    //
    public clear():void{
        this.datas =null;
        this.pool.clear();
        DB_FishHP2.instacne = null;
    }

    //将数组转换成为字典
    private arrangeData(){
        if (this.datas != null){
            for (let k of this.datas.Arr.keys()){
                let id = this.datas.Arr[k].Id;
                this.pool.set(id!,this.datas.Arr[k] as server.server.DB_FishHP2)
            }
        }
    }
}

//ConfMgr.getInstance().registerLoader("DB_FishHP2",new ProtoDataLoader(DB_FishHP2.getInstance(),"fishhappy/config/data/DB_FishHP2.dat"));
