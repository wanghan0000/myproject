import { _decorator, Label } from "cc";
import { FormType } from "./config/SysDefine";
import { UIBase } from "./UIBase";

const{property} = _decorator

export class TipsForm extends UIBase{
    
    @property(Label)
    tips!:Label

    formType = FormType.Tips;


    public static async popUp(url:string,params:any){

    }

    start(){

    }

    async exitAnim(){
        
    }
}