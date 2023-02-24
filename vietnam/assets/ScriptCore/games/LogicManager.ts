import { js } from "cc";
import { BaseLogic } from "./BaseLogic";


export class LogicManager{

    private static instance:LogicManager|null = null;

    public static getInstance():LogicManager{
        if (this.instance == null){
            this.instance = new LogicManager();
        }
        return this.instance!;
    }



    private logics:BaseLogic[] = [];

    private logicTypes:any = [];


    /**
     * 主要子游戏存在就这里边就应该有
     * @param logicType 
     * @returns 
     */
    public registerLogicTypes(logicType:any){
        for (let i = 0;i<this.logicTypes.length;i++){
            if(this.logicTypes[i] == logicType){
                console.error(`重复添加${js.getClassName(logicType)}`);
                return;
            }
        }
        this.logicTypes.push(logicType)
        let logic:BaseLogic = new logicType();
        this.logics.push(logic);
        logic.init();
    }




}