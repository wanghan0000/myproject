import { _decorator, Tween, Label, Node, Prefab, sys, CapsuleCollider, CCLoader, Asset, AssetManager, assetManager, v2, v3, tween, Vec3, UITransform, UIOpacity, math } from 'cc';
import {Currency} from "./Currency"

export class TweenAnimation{
  
  public static tweenLabelMoney(label:Label|null, moneyTarget:number, duration:number = 1) {
    if (label == null){
      return
    }

    //取消所有调度
    label.unscheduleAllCallbacks();

    let cur:number = 0;
    if (label.string != null && label.string != "" && label.string != undefined){
      cur  = Currency.ToInt(label.string);
    }
    let per = 0.032;
    let cnt = Math.ceil(duration/per);
    let idx = 0;
    if (cnt == 0){
      cnt = 1;
    }

    //修改，如果目标值比现在的少，直接设置为目标值，不做动画了
    if (cur > moneyTarget) {
      label.string =  Currency.ToVND(moneyTarget);
      return;
    }
    
    let perVal = (moneyTarget-cur)/cnt;
    label.schedule(()=>{
      let val = Math.round( cur + perVal * idx );
      label.string = Currency.ToVND(val);
      idx = idx + 1;
      if (idx >= cnt){
        label.string = Currency.ToVND(moneyTarget);
      }
    },per,cnt);
  }
 
public static  showPopup (box:Node, parent:Node, scaleX:number = 1, scaleY:number = 1) {
    parent.active = true;
    box.setScale(v3(0,0,1));
    parent.getComponent(UIOpacity)!.opacity = 0.1;
    Tween.stopAllByTarget(box);
    Tween.stopAllByTarget(parent);
    tween<Node>(box).to(0.5,{scale:v3(scaleX, scaleY, 1)},{easing:"backOut"}).start();
    tween<UIOpacity>(parent.getComponent(UIOpacity)!).to(0.3,{opacity:255},{easing:"linear"}).start();
}

public static  hidePopup(box:Node, parent:Node, cb:Function|null, scaleX:number = 1, scaleY:number = 1) {
    Tween.stopAllByTarget(box);
    Tween.stopAllByTarget(parent);
    box.setScale(v3(scaleX,scaleY,1));
    tween<Node>(box).to(0.5,{scale:v3(0,0,1)},{easing:"backIn"}).call(()=>{
      parent.active = false;
      if (cb!= null){
        cb();
      }
    }).start();
    tween<UIOpacity>(parent.getComponent(UIOpacity)!).to(0.5,{opacity:0.1},{easing:"linear"}).start();
}

}
