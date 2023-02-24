/*
 * @Author: super_javan 296652579@qq.com
 * @Date: 2022-12-23 11:12:29
 * @LastEditors: super_javan 296652579@qq.com
 * @LastEditTime: 2023-01-11 17:38:07
 * @FilePath: \vietnam\assets\Richblessed\script\RichblessedRulesUI.ts
 * @Description: 多财规则
 */

import { _decorator, v3, tween, Button,Node } from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { UIPopup, UIScreen } from '../../ScriptCore/UIFrame/UIForm';
import { RICHBGMusic } from './RichblessedConfig';
const { ccclass, property } = _decorator;

@ccclass('RichblessedRulesUI')
export class RichblessedRulesUI extends UIScreen {
    pageIndex = 0;

    @property({type:[Button]})
    btns:Button[] = [];

    @property({type:[Node]})
    nodes:Node[]= [];
    start () {
        // this.node.scale = v3(0.1, 0.1, 0.1);
        // tween(this.node).to(0.2, {scale: v3(1.0, 1.0, 1.0)}).start();

        for (let index = 0; index < this.nodes.length; index++) {
            const element = this.nodes[index];
            element.active = false;
            if(index == 0)
                 element.active = true;
        }
    }

    btnOnClose () {
        AudioMgr.getInstance().playSound(RICHBGMusic.click);
        this.closeSelf();
    }


    clickChangeRule(ev:any,index:any){
        // this.btns.forEach((v)=>{
        //     v.node.active = true;
        // })

        // ev.target.active = false;
        // this.nodes.forEach((v)=>{
        //     v.active = false;
        // })
        // this.nodes[index].active = true;
    }

    clickLast(){
        AudioMgr.getInstance().playSound(RICHBGMusic.click);
       this.pageIndex--; 
       if(this.pageIndex < 0){
            this.pageIndex = 3;
       }

        this.nodes.forEach((v)=>{
            v.active = false;
        })
        let index = this.pageIndex;
        this.nodes[index].active = true;

        this.btns[0].node.active = false;
        this.btns[1].node.active = true;
    }

    clickNext(){
        AudioMgr.getInstance().playSound(RICHBGMusic.click);
       this.pageIndex++; 
       if(this.pageIndex > 3){
            this.pageIndex = 0;
       }

        this.nodes.forEach((v)=>{
            v.active = false;
        })
        let index = this.pageIndex;
        this.nodes[index].active = true;

        this.btns[0].node.active = true;
        this.btns[1].node.active = false;
    }
}
