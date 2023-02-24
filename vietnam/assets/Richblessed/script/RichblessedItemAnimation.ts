import { _decorator, Component, instantiate, Node, Tween, v3, Prefab, tween, easing, UIOpacity ,sp, Sprite, Vec3, UITransform, Vec2} from "cc";
import { AudioMgr } from "../../ScriptCore/audio/AudioMgr";
import NBSlotsMachine from "./component/NBSlotsMachine";
import {fuLocalPos, fuWorldPos, RICHBGMusic, ServerIndexToClinetIndex } from "./RichblessedConfig";
import { richblessed } from "./protocol/richblessed";
import { RichblessedRoomData } from "./richblesseddata/RichblessedRoomData";
import { ResMgr } from "../../ScriptCore/UIFrame/ResMgr";


const { ccclass, property } = _decorator;

@ccclass('RichblessedItemAnimation')
export default class RichblessedItemAnimation extends Component {

    //滚动机器
    @property(NBSlotsMachine)
    machine: NBSlotsMachine = null;
    @property(Node)
    private yuanbaoNode:Node = null;

    @property(Node)
    private worldNode:Node = null;


    private children: Node[] = [];
    private datas: richblessed.IRichWinLine[] = null;

    private curIndex = 0;

    private nodePool: Node[] = [];
    private yuanbaoNodes:Node[] = [];

    private fastFlag: boolean = false;

    private triggerFlag: boolean = false;
    private isplay: boolean = false;

    hook:{
        end:() => void,
    }

    play(lines: richblessed.IRichWinLine[],fastFlag:boolean) {
        this.isplay = true;
        this.fastFlag = fastFlag;
        this.children = this.machine.getWindowChildrens();;
        this.datas = lines;
        this.curIndex = 0;
        this.triggerFlag = false;
        this.datas = [];
        this.playSoundFu = this.playSoundLuo = false;
        lines.forEach((v)=>{
            this.datas.push(v);
        })
        if(this.datas.length){
            this.step();
        } else {
            if(!this.triggerFlag){
                this.hook.end();
            }
            this.triggerFlag = true;
        }
    }

    stop() {
        this.isplay = false;
        this.clearAllTime();
        this.resetItem();
        this.children.forEach((v)=>{
            v.active = true;
            v = null;
        })
        this.children.length = 0;
        this.datas = null;
        this.playSoundFu = this.playSoundLuo = false;
        // if(!this.triggerFlag){
        //     this.hook.end();
        // }
        // this.triggerFlag = true;
    }

    private resetItem() {
        this.children.forEach((v, idnex) => {
            Tween.stopAllByTarget(v.getComponent(UIOpacity));
            v.getComponent(UIOpacity).opacity = 255;

            let spines = v.getChildByName('spines');
            const spineChildren = spines.children;
            spineChildren.forEach(element => {
                element.active = false;
            });
        })

        this.yuanbaoNodes.forEach(element => {
            element.removeFromParent();
        });
        this.yuanbaoNodes = [];
    }

    private async step() {
        if(!this.datas){
            return;
        }
        //清空上一轮特效
        this.resetItem();

        this.children.forEach((v)=>{
            v.getChildByName('bg').active = true;
        })

        const serverPos = this.datas[this.curIndex].Poss;
        if (serverPos.length) {
            const { Cards} = RichblessedRoomData.instance.billed;
            const childrens = this.machine.getWindowChildrens();
            serverPos.forEach((pos:any)=>{
                const value = Cards[pos];
                const clientPos = ServerIndexToClinetIndex[pos];
                const UICard = childrens[clientPos];
                if(!UICard || !UICard.getComponent(UIOpacity))return;
                const opacityComp = UICard.getComponent(UIOpacity);
                opacityComp.opacity = 255;
                UICard.getChildByName('bg').active = true;
                if(value != 0 && value != 1){
                    tween(opacityComp)
                        .to(0.3,{opacity:0},{easing:'fade'})
                        .delay(0.2)
                        .to(0.3,{opacity:255},{easing:'fade'})
                        .delay(0.2)
                        .union()
                        .repeatForever()
                        .start()
                }else{
                    this.addSpecialFuLuo(value,pos);
                }
            })  
        }
        await this.delayTime(this.fastFlag ? 1 : 1.8);

        this.curIndex += 1;

        if (this.curIndex >= this.datas.length) {
            this.curIndex = 0;
            if(!this.triggerFlag){
                this.hook.end();
            }
            this.triggerFlag = true;
        }
        this.step();
    }

    private playSoundFu = false;
    private playSoundLuo = false;
    async addSpecialFuLuo(value:number,pos:number){
        const childrens = this.machine.getWindowChildrens();
        const clientPos = ServerIndexToClinetIndex[pos];
        const spNodes = childrens[clientPos].getChildByName('spines')
        
        childrens[clientPos].getChildByName('bg').active = false;
        let spineName;
        spineName = value == 0 ? 'fu' : 'luo';
        const spine = spNodes.getChildByName(spineName);
        spine.getComponent(sp.Skeleton).setAnimation(0,'animation',true);
        spine.active = true;
    }

    private delayTimes: any[] = [];

    private delayTime(time: number) {
        return new Promise((reject) => {
            const id = setTimeout(() => {
                reject(true)
            }, time * 1000);
            this.delayTimes.push(id);
        })
    }

    private clearAllTime() {
        this.delayTimes.forEach((v) => {
            clearTimeout(v);
        })
        this.delayTimes.length = 0;
    }

    onDestroy(){
        // this.stop();
        this.clearAllTime();
    }

    public playSpecialItem(index:number,animstr:string,child:Node){
        let spine;
        let loopSpineFalse = function(){
            let spines = child.getChildByName('spines').children;
            spines.forEach(element => {
                element.getComponent(sp.Skeleton).setAnimation(0,'animation',false);
            });
        }
        loopSpineFalse()

        if(animstr == 'fu'){
            this.flyFu(child,index);
            spine = child.getChildByName('spines').getChildByName('fu');
        }
        else{
            child.getChildByName('bg').active = false;
            spine = child.getChildByName('spines').getChildByName('luo');  
        }


        spine.active = true;
    }

    async flyFu(child:Node,index:number){
        child.setSiblingIndex(999);
        const worldNode = this.worldNode;
        const yuanbaoW = worldNode.getComponent(UITransform).contentSize.width;
        const yuanbaoH = worldNode.getComponent(UITransform).contentSize.height;
        // let childWorldPos = child.parent.getComponent(UITransform).convertToWorldSpaceAR(child.getPosition());
        // console.log('childWorldPos :' + childWorldPos)
        const localWorldPos = fuWorldPos[index];
        console.log('需要特效的index ------ ' + index);
        let fuPos = fuLocalPos;
        for (let i = 0; i < fuPos.length; i++) {
            const pos = fuPos[index];
            const yuanbaoSp = await ResMgr.getInstance().getSpriteFrameByPath(`Richblessed/texture/images/yuanbao`);
            const delCardNode = new Node();
            this.yuanbaoNodes.push(delCardNode);
            const delCardSp = delCardNode.addComponent(Sprite);
            delCardSp.spriteFrame = yuanbaoSp;
            this.yuanbaoNode.addChild(delCardNode);
            const worldPos = localWorldPos[i]

            delCardNode.setPosition(worldPos[0],worldPos[1],1);
            // await this.delayTime(index * 0.2);
            
            let worldNodePos = worldNode.getPosition();
            tween(delCardNode)
                .to(0.6,{position:new Vec3(worldNodePos.x,worldNodePos.y,1)})
                .call(() => {
                    delCardNode.removeFromParent();
                })
                .start()
        }
    }
}