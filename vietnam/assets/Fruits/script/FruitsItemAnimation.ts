import { _decorator, Component, instantiate, Node, Tween, v3, Prefab, tween, easing, sp } from "cc";
import { AudioMgr } from "../../ScriptCore/audio/AudioMgr";
import { PoolManager } from "../../ScriptCore/panda/utils/poolmgr";
import NBSlotsMachine from "./component/NBSlotsMachine";
import { FruitsBGMusic, LineEffectPoint, ServerIndexToClinetIndex } from "./FruitsConfig";
import { fruits } from "./protocol/fruits.js";


const { ccclass, property } = _decorator;

@ccclass('FruitsItemAnimation')
export default class FruitsItemAnimation extends Component {

    //滚动机器
    @property(NBSlotsMachine)
    machine: NBSlotsMachine = null;

    @property(Prefab)
    lineItem: Prefab = null;

    @property(Node)
    lineContent: Node = null;

    private children: Node[] = [];

    private datas: fruits.IFruitsWinLine[] = null;

    private curIndex = 0;

    private fastFlag: boolean = false;

    private triggerFlag: boolean = false;

    private Cards:number [] = [];

    private _pause:boolean = false;
    public get pause() : boolean {
        return this._pause
    }
    public set pause(v : boolean) {
        this._pause = v;
        if(!v){
            this.step();
        }
    }

    private playWild:boolean = false;
    private playBonus:boolean = false;
    private playscatter:boolean = false;

    private isplay: boolean = false;
    hook:{
        end:() => void,
    }

    play(lines: fruits.IFruitsWinLine[],fastFlag:boolean,Cards:number[]) {
        this.isplay = true;
        this.resetItem();
        Cards.forEach((v)=>{
            this.Cards.push(v);
        })
        this.Cards = Cards;
        this.fastFlag = fastFlag;
        this.children = this.machine.getWindowChildrens();;
        this.children.forEach((v)=>{
            if(v && v.isValid){
                v.active = true;
            }
        })
        this.datas = lines;
        this.curIndex = 0;
        this.triggerFlag = false;
        this.datas = [];
        lines.forEach((v)=>{
            this.datas.push(v);
        })
        this.playBonus = this.playWild = this.playscatter = false;
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
        this.Cards.length = 0;
        this.clearAllTime();
        this.resetItem();
        this.children.forEach((v)=>{
            if(v && v.isValid){
                v.active = true;
            }
        })
        this.children.length = 0;
        this.datas = null;
        this.playBonus = this.playWild = this.playscatter = false;
        // if(!this.triggerFlag){
        //     this.hook.end();
        // }
        // this.triggerFlag = true;
    }

    

    private resetItem() {
        this.lineContent.children.forEach((v) => {
            if(v && v.isValid){
                this.removeItem(v);
                v.getChildByName('line').active = false;
                v.getChildByName('bonus').active = false;
                v.getChildByName('scatter').active = false;
                v.getChildByName('wild').active = false;
            }
        })
        this.lineContent.removeAllChildren();
        this.children.forEach((v, idnex) => {
            if(v && v.isValid){
                Tween.stopAllByTarget(v);
                v.scale = v3(1, 1, 1);
            }
        })
    }

    

    private async step() {
        if(!this.datas || !this.datas.length || this.pause){
            return;
        }
        //清空上一轮特效
        this.resetItem();
        const serverPos = this.datas[this.curIndex].Poss;
        const clientPos: number[] = [];
   
        serverPos.forEach(element => {
            clientPos.push(ServerIndexToClinetIndex[element])
            const node = this.getItem();
            if(node && node.isValid){
                node.position = v3(LineEffectPoint[element].x, LineEffectPoint[element].y, 1);
                let spineNode;
                if(this.Cards[element] == 0){
                    spineNode = node.getChildByName('wild')
                }else if(this.Cards[element] == 1){
                    spineNode = node.getChildByName('bonus')
                }else if(this.Cards[element] == 2){
                    spineNode = node.getChildByName('scatter')
                }else {
                    node.getChildByName('line').active = true;
                }
                if(spineNode){
                    spineNode.active = true;
                    spineNode.getComponent(sp.Skeleton).setAnimation(0,'animation',true);
                }
            }
        });


        this.children.forEach((v)=>{
            if(v && v.isValid){
                v.active = true;
            }
        })
        clientPos.forEach((element,index) => {
            const node = this.children[element]
            if(!node || !node.isValid){
                return;
            }
            if(this.Cards[serverPos[index]] == 0 ||this.Cards[serverPos[index]] == 1 || this.Cards[serverPos[index]] == 2){
                this.children[element].active = false;
                return
            }
            tween(node)
            .to(0.2, { scale: v3(1.15, 1.15, 1) } )
            .to(0.2, { scale: v3(0.9, 0.9, 1) } )
            .to(0.1, { scale: v3(1, 1, 1) })
            .delay(0.3)
            .union()
            .repeat(this.fastFlag ? 1 : 2)
            .start()
        })
        await this.delayTime(this.fastFlag ? 1 : 1.8);

        this.curIndex += 1;

        if (this.curIndex >= this.datas.length) {
            this.curIndex = 0;
            //this.playBonus = this.playWild = this.playscatter = false;
            if(!this.triggerFlag){
                this.hook.end();
            }
            this.triggerFlag = true;
        }
        this.step();
    }


    /**获取一个列表项 优先从内存池获取*/
    private getItem(): Node {
        return PoolManager.instance.getNode(this.lineItem,this.lineContent);
    }
    //将节点放入内存池并删除
    private removeItem(item: Node) {
        PoolManager.instance.putNode(item);
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
        this.stop();
    }

    public playSpecialItem(index:number,animstr:string,child:Node){
        const node = this.getItem();
        if(node && node.isValid){
            node.position = v3(LineEffectPoint[index].x, LineEffectPoint[index].y, 1);
            const spinenode = node.getChildByName(animstr)
            spinenode.active = true;
            spinenode.getComponent(sp.Skeleton).setAnimation(0,'animation',false);
            spinenode.getComponent(sp.Skeleton).setCompleteListener(()=>{
                if(!this.isplay){
                    if(node && node.isValid){
                        node.getChildByName('line').active = false;
                        node.getChildByName('bonus').active = false;
                        node.getChildByName('scatter').active = false;
                        node.getChildByName('wild').active = false;
                        this.removeItem(node);
                    }
                    if(child && child.isValid){
                        child && (child.active = true); 
                    }
                }
            })
        }
    }
}