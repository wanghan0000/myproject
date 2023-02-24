import { _decorator, Component, Node, EventTouch, sp, view, UITransform, v3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIClickEffect')
export class UIClickEffect extends Component {

    @property(sp.SkeletonData)
    spineData:sp.SkeletonData = null;

    start() {

    }

    update(deltaTime: number) {
        
    }

    //
    onLoad(){
        this.registerEvent();
    }


    registerEvent(){
        this.node.on(Node.EventType.TOUCH_START,this.onTouchStart,this);
        this.node.on(Node.EventType.TOUCH_MOVE,this.onMoved,this);
        this.node.on(Node.EventType.TOUCH_END,this.onTouchEnd,this);
        this.node.on(Node.EventType.TOUCH_CANCEL,this.onTouchCancel,this);
    }


    onTouchStart(evt:EventTouch){
        let visibleSize = view.getVisibleSize();
        console.log(visibleSize);
        

        this.playAni(evt.getUILocation().x - visibleSize.width/2,evt.getUILocation().y - visibleSize.height/2);
        evt.preventSwallow = true;
        return true;
    }

    onMoved(evt:EventTouch){
        evt.preventSwallow = true;
    }
    onTouchEnd(evt:EventTouch){
        evt.preventSwallow = true;
    }
    onTouchCancel(evt:EventTouch){
        evt.preventSwallow = true;
    }

    private aniNode:Node = null;

    playAni(touchx:number,touchy:number){
        if(this.aniNode == null){
            this.aniNode = new Node();
            this.node.addChild(this.aniNode);
            this.aniNode.setPosition(-3000,-3000);
            this.aniNode.addComponent(sp.Skeleton);
            this.aniNode.getComponent(sp.Skeleton).skeletonData = this.spineData;
            this.aniNode.getComponent(sp.Skeleton).premultipliedAlpha = false;
            this.aniNode.getComponent(sp.Skeleton).setCompleteListener(()=>{
                this.aniNode.setPosition(-3000,-3000);
            });
            this.aniNode.setScale(v3(0.5,0.5,1));
        }
        this.aniNode.setPosition(touchx,touchy);
        let arr:string[] = ["fangpian","heitao","hongtao","meihua"];
        let aniIdx = Math.floor(Math.random() * 4);
        
        let aniName = arr[aniIdx];
        this.aniNode.getComponent(sp.Skeleton).setAnimation(0,aniName,false);
    }
}

