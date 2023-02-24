

import { ConfLoader, ProtoDataLoader } from "./ConfLoader";
import { DB_GameItem } from "./db_gameitem";
import { DB_Shop1 } from "./db_shop1";


export class ConfMgr{
    private static instance = new ConfMgr();
    public static getInstance(){
        return this.instance;
    }
    

    private loaders:Map<string,ConfLoader> = new Map<string,ConfLoader>();

    public registerLoader(name:string,loader:ConfLoader){
        this.loaders.set(name,loader);
    }

    public getLoader(name:string):ConfLoader|null{
        if (this.loaders.get(name) !== undefined){
            return this.loaders.get(name)!;
        }
        return null;
    }



    /**
     * 这里需要优化，需要根据不同的子游戏来加载不同的配置
     * 暂时全部加载
     */
    public loadAllConf(){
        console.log(this.loaders);
        // for (let key of this.loaders.keys()){
        //     let loader = this.loaders.get(key);
        //     if (loader !== undefined && loader !== null){
        //         loader.load();
        //     }
        // }
    
        //加载背包的配置文件 
        let db_gameitem = new ProtoDataLoader(DB_GameItem.getInstance(),"Lobby/config/data/DB_GameItem");
        db_gameitem.load();

        //加载商城的数据
        let db_shop1 = new ProtoDataLoader(DB_Shop1.getInstance(),"Lobby/config/data/DB_Shop1");
        db_shop1.load();
        
    }

    //加载道具的配置表
    


    

    //当退出登录的时候 要清空有配置
    public clearAllConfData(){
        //this.loaders.get("aa")!.unload();
    }

}