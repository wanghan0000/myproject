
import { _decorator, Node, Label,Prefab, UIOpacity, tween, director, v3, Tween} from 'cc';
import { PoolManager } from '../../../ScriptCore/panda/utils/poolmgr';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';

export class FruitsToast{

    private static _instance:FruitsToast = new FruitsToast();

    public static getInstance(): FruitsToast {
        return this._instance;
    }

    private constructor(){
    }

    static show(params:{prefabPath:string,content:Node, txt:string}) {
        FruitsToast.getInstance().make(params);
    }

    private async make(params:{prefabPath:string,content:Node, txt:string}){
        const {prefabPath ,content} = params;

        let pb = ResMgr.getInstance().getPrefabByPath(prefabPath);
        if(!pb){
            pb = await ResMgr.getInstance().loadForm(prefabPath);
        }
        const node = PoolManager.instance.getNode(pb,content);
        this.configure(node, params);
    }

    private configure(node:Node, params:{prefabPath:string,content:Node, txt:string}){
        const label :Label= node.getChildByName('txt').getComponent(Label);
        label.string = params.txt;
        this.run(node);
    }

    private run(node:Node){
        const uIOpacity = node.getComponent(UIOpacity);
        uIOpacity.opacity = 255;
        node.position = v3(0,0,1)
        Tween.stopAllByTarget(node)
        tween(uIOpacity)
        .delay(1)
        .to(0.5,{opacity:0},{easing:'backIn'})
        .call(()=>{
            PoolManager.instance.putNode(node)
        })
        .start();
        tween(node).delay(1).to(0.5,{position:v3(0,50)}).start()
    }

}