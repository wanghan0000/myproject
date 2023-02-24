/*
 * @Author: super_javan 296652579@qq.com
 * @Date: 2023-01-13 19:00:10
 * @LastEditors: super_javan 296652579@qq.com
 * @LastEditTime: 2023-01-13 19:00:14
 * @FilePath: \vietnam\assets\Richblessed\script\RichToast.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { _decorator, Node, Label,Prefab, UIOpacity, tween, director, v3, Tween} from 'cc';
import { PoolManager } from '../../ScriptCore/panda/utils/poolmgr';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';

export class RichToast{

    private static _instance:RichToast = new RichToast();

    public static getInstance(): RichToast {
        return this._instance;
    }

    private constructor(){
    }

    static show(params:{prefabPath:string,content:Node, txt:string}) {
        RichToast.getInstance().make(params);
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