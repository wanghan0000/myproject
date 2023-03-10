
// Code generated by xlsx2proto.
// DO NOT EDIT!

import { ConfHolder } from "../../ScriptCore/config/ConfLoader";
import  server  from "../../ScriptCore/protocol/server.js";

export class DB_Fish implements ConfHolder {
    public datas:server.server.DB_FishArray | null = null;
    public pool:Map<number,server.server.DB_Fish> = new Map<number,server.server.DB_Fish>();
    private static instacne:DB_Fish | null = null;

    public static getInstance():DB_Fish{
        if (this.instacne == null){
            this.instacne = new DB_Fish();
        }
        return this.instacne;
    }

    //反序列化
    decode(buff: Uint8Array): Error|null {
        this.datas = server.server.DB_FishArray.decode(buff);
        this.arrangeData();
        return null;
    }

    //
    public clear():void{
        this.datas =null;
        this.pool.clear();
        DB_Fish.instacne = null;
    }

    //将数组转换成为字典
    private arrangeData(){
        if (this.datas != null){
            for (let k of this.datas.Arr.keys()){
                let id = this.datas.Arr[k].Id;
                this.pool.set(id!,this.datas.Arr[k] as server.server.DB_Fish)
            }
        }
    }
}

//注册loader方法
//ConfMgr.getInstance().registerLoader("DB_Fish",new ProtoDataLoader(DB_Fish.getInstance(),"fishhappy/config/data/DB_Fish.dat"));

