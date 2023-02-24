
import { _decorator, Component, Node, Vec3, RichText, UITransform, Tween, tween } from 'cc';
import { NotifycationData } from '../../../data/NotifycationData';
import { UIFloat } from '../../../UIFrame/UIForm';
const { ccclass, property } = _decorator;

@ccclass('UIFloatNotifycation')
export class UIFloatNotifycation extends UIFloat {

    isDragable = false;
    isAutoAlign = false;

    start () {
        
    }
    /**
     * mode:
     * 0:模式 一条一条的跑。
     * 1:连续不停的跑
     */
    private mode:number = 0;
    private richTxt:Node|null = null;
    //跑马灯节点放置的位置坐标x,y
    private posx:number = 0;
    private posy:number = 0; 
    public onShow(px:number,py:number,m:number){
        if (m != null && m != undefined){
            this.mode = m;
        }
        if(px != null && px != undefined){
            this.posx = px;
        }
        if(py != null && py != undefined){
            this.posy = py;
        }
        this.node.position = new Vec3(this.posx,this.posy,0);
        this.richTxt = this.node.getChildByName("richtext");

        this.chkMsg();
    }

    public async showEffect():Promise<boolean>{
        return new Promise<boolean>((resolve,reject)=>{
            resolve(true);
        });
    }


    
    /**
     * 更新跑马灯中文字的位置
     * 从最右侧出来是 350
     * 到最右侧是   -350  -250 + txt的contentSize 就是出去了。这个时候要播放吓一跳跑马灯
     * 
     * 
     * 可以做成两种模式，但是现在仅仅只做一种就可以了
     * 使用tween去移动，会更好一点，然后在 收到新的消息的时候接受广播通知
     */
    private speed:number = 60;
    private chkMsg(){
        let txt = NotifycationData.getInstance().getNextTxt();
        if (txt != null && txt.length >0){
            this.richTxt!.getComponent(RichText)!.string = txt;
            this.richTxt!.position = new Vec3(350,0,0);
            let width = this.richTxt?.getComponent(UITransform)!.contentSize.width!;
            let time = (700 + width)/this.speed;
            Tween.stopAllByTarget(this.richTxt!);
            tween(this.richTxt!).to(time,{position:new Vec3( 350- 700 - width ,0,0) },{easing:"linear"}).delay(1).call(()=>{
                this.chkMsg();
            }).union().start();
        }
    }



    public async hideEffect():Promise<boolean>{
        return new Promise<boolean>((resolve,reject)=>{
            resolve(true);
        });
    }
}

