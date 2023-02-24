import { warn, _decorator } from "cc";



const {ccclass,property} = _decorator

@ccclass("TipsMgr")
export class TipsMgr{
    private static instance:TipsMgr;

    public static getInstance(){
        if (this.instance == null){
            this.instance = new TipsMgr();
        }
        return this.instance ;
    }

    private loadingFormName:string = "";

    public setLoadingForm(loadingName:string){
        this.loadingFormName = loadingName
    }

    public async showLoadingForm(){
        if(!this.loadingFormName || this.loadingFormName.length <=0){
            warn("请先设置loading form");
        }
    }

    public async hideLoadingForm(){

    }


    private tipsFormName:string = "";

    public setTipsForm(tipsFormName:string){
        this.tipsFormName = tipsFormName;
    }

    public async showToast(){
        
    }

}