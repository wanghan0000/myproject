import { BlockInputEvents, Component, Node, Tween, tween, UIOpacity, _decorator } from "cc";
import { FormType, ModalOpacity } from "./config/SysDefine";
import { UIBase } from "./UIBase";
import { UIPopup, UIWindow } from "./UIForm";
import { UIManager } from "./UIManager";

const { ccclass, property } = _decorator;

@ccclass("ModalMgr")
export class ModalMgr extends Component {

    //private uiModal!:UIModalScript;
    private maskNode!: Node;
    private nPopUp!: Node
    //public static popUpRoot = SysDefine.SYS_UIROOT_NAME + '/' + SysDefine.SYS_POPUP_NODE;
    public static instance: ModalMgr;
    public static getInstance() {
        if (this.instance == null) {
            this.instance = new ModalMgr();
        }
        return this.instance;
    }




    public initMaskNode(maskNode: Node) {
        // this.maskNode = maskNode;
        // this.nPopUp = maskNode.parent!;
        //this.maskNode.active = false;
        //this.maskNode.getComponent(UIOpacity)!.opacity = 0;
    }

    /** 为mask添加颜色 */
    // private async showModal(maskType: ModalType) {
    //     await this.uiModal.showModal(maskType.opacity, maskType.easingTime, maskType.isEasing);
    // }

    /**
     * coms 是窗体
     * maskArr 是屏蔽层的数据
     * @param coms 
     * @param maskArr 
     * @param isOpen 
     */
    public checkModalWinAndPopUp(coms: UIBase[], maskArr: { [key: string]: Node }, isOpen: boolean = true) {
        //保证永远只显示一个遮罩 显示
        let hasShow: boolean = false;
        console.log("检查屏蔽层的这招显示");
        console.log(coms);
        console.log(maskArr);
        console.log("检查屏蔽层的这招显示");
        for (let idx = coms.length - 1; idx >= 0; idx--) {
            let com = coms[idx];
            let tcom: UIPopup | UIWindow | null = null;
            if (com.formType == FormType.FormType_Popup) {
                tcom = com as UIPopup;
            } else if (com.formType == FormType.FormType_Win) {
                tcom = com as UIWindow;
            }
            if (tcom != null) {
                let maskKey = tcom.fid;
                if (maskArr[maskKey]) {
                    if (tcom.modalType.opacity >= ModalOpacity.OpacityZero && !hasShow) {
                        maskArr[maskKey].active = true;
                        if (isOpen) {
                            maskArr[maskKey].getComponent(UIOpacity)!.opacity = 0;
                            let opac = this.getOpacityByMask(tcom.modalType.opacity);
                            Tween.stopAllByTarget(maskArr[maskKey]);
                            let t = tcom.getShowEffectTime();
                            if (t >0){
                                tween<UIOpacity>(maskArr[maskKey].getComponent(UIOpacity)!).to(t, { opacity: opac }, { easing: "linear" }).call(() => {
                                    //如果点击可以关闭，则注册事件，执行关闭操作
                                    if (tcom != null && tcom.modalType != null && tcom!.modalType.clickMaskClose) {
                                        maskArr[maskKey].off(Node.EventType.TOUCH_START);
                                        maskArr[maskKey].on(Node.EventType.TOUCH_START, () => {
                                            UIManager.getInstance().closeForm(tcom!.fid);
                                        });
                                        
                                        if(tcom.getComponent(BlockInputEvents) == null){
                                            tcom.addComponent(BlockInputEvents);
                                        }
                                    }
                                }).union().start();
                            }else{
                                if (tcom != null && tcom.modalType != null && tcom!.modalType.clickMaskClose) {
                                    maskArr[maskKey].off(Node.EventType.TOUCH_START);
                                    maskArr[maskKey].on(Node.EventType.TOUCH_START, () => {
                                        UIManager.getInstance().closeForm(tcom!.fid);
                                    });
                                    maskArr[maskKey].getComponent(UIOpacity).opacity = opac;
                                    
                                    if(tcom.getComponent(BlockInputEvents) == null){
                                        tcom.addComponent(BlockInputEvents);
                                    }
                                }
                            }
                            
                        } else {
                            let opac = this.getOpacityByMask(tcom.modalType.opacity);
                            maskArr[maskKey].getComponent(UIOpacity)!.opacity = opac;
                        }
                        hasShow = true;
                    } else {
                        let t = com.getHideEffectTime();
                        tween<UIOpacity>(maskArr[maskKey].getComponent(UIOpacity)!).to(t, { opacity: 0 }, { easing: 'linear' }).call(() => {

                        }).start();
                    }

                }
            }
        }
    }



    //判断有多少个wins 是否需要屏蔽层
    public checkModalWindow(coms: UIWindow[] | UIPopup[]) {
        for (let i = coms.length - 1; i >= 0; i--) {
            if (coms[i].modalType.opacity > 0) {
                let uimask = coms[i].node.getChildByName("UIMask")!
                uimask.active = true;
                let opac = uimask.getComponent(UIOpacity)!.opacity;
                uimask.getComponent(UIOpacity)!.opacity = 0;
                tween(uimask.getComponent(UIOpacity)).to(0.5, { opacity: opac }, { easing: "linear" }).start();
            } else {
                let uimask = coms[i].node.getChildByName("UIMask")!
                if (uimask.active) {
                    tween(uimask.getComponent(UIOpacity)).to(0.5, { opacity: 0 }, { easing: "linear" }).call(() => {
                        uimask.active = false;
                    }).start();
                }
            }
        }

        // if(coms.length <= 0) {
        //     //this.maskNode.active = false;
        //     // if (this.maskNode.active){
        //     //     tween<UIOpacity>(this.maskNode.getComponent(UIOpacity)!).to(0.5,{opacity:0},{easing:"linear"}).call(()=>{
        //     //        // this.maskNode.active = false;
        //     //     }).start();
        //     // }
        //     this.maskNode.getComponent(UIOpacity)!.opacity = 0;
        //     return ;
        // }


        /**
         * 1:如果没有弹出层 不处理。
         * 2:如果有弹出层 看弹出层的效果要求  从最后往最前遍历
         * 3:获取当前mask的层级  计算出来目标位置的层级
         *      判定出来从下往上移动，则是打开新界面
         *      如果是从上往下移动，则是关闭上层界面
         */
        //this.maskNode.removeFromParent();
        // let curMaskIdx = this.maskNode.getSiblingIndex();
        // let tIdx = curMaskIdx;
        // let maskOpacity:ModalOpacity = ModalOpacity.OpacityZero;
        // for (let i = coms.length-1;i>=0;i--){
        //     if(coms[i].modalType.opacity >0){
        //         let idx = coms[i].node.getSiblingIndex()-1;
        //         tIdx = Math.max(idx,0)
        //         //this.nPopUp.insertChild(this.maskNode,tIdx);
        //         this.maskNode.setSiblingIndex(tIdx);
        //         maskOpacity = coms[i].modalType.opacity;
        //         break;
        //     }
        // }

        // for (let i = tIdx;i>=0;i--){
        //     coms[i].node.setSiblingIndex(i-2);
        // }

        // this.maskNode.active = true;

        //this.maskNode.setSiblingIndex(tIdx);
        // if (curMaskIdx == tIdx){
        //     //this.maskNode.setSiblingIndex(tIdx);
        //     if (coms.length == 1){
        //         //this.maskNode.setSiblingIndex(tIdx);
        //         this.maskNode.getComponent(UIOpacity)!.opacity = 0;
        //         let tOp = this.getOpacityByMask(maskOpacity);
        //         // tween<UIOpacity>(this.maskNode.getComponent(UIOpacity)!).to(0.3,{opacity:tOp},{easing:"linear"}).call(()=>{
        //         // }).start();
        //         this.maskNode.getComponent(UIOpacity)!.opacity = tOp;
        //     }else{

        //     }

        // }else if(curMaskIdx < tIdx){
        //     //需要做 渐显动画
        //     this.maskNode.setSiblingIndex(tIdx);
        //     this.maskNode.getComponent(UIOpacity)!.opacity = 0;
        //     let tOp = this.getOpacityByMask(maskOpacity);
        //     // tween<UIOpacity>(this.maskNode.getComponent(UIOpacity)!).to(0.3,{opacity:tOp},{easing:"linear"}).call(()=>{
        //     //     this.maskNode.setSiblingIndex(tIdx);
        //     // }).start();
        //     this.maskNode.getComponent(UIOpacity)!.opacity = tOp;
        // }else if (curMaskIdx > tIdx){
        //     //需要做 建隐藏动画。动画结束后直接放在对应点位置
        //     let tOp = this.getOpacityByMask(maskOpacity);
        //     // tween<UIOpacity>(this.maskNode.getComponent(UIOpacity)!).to(0.5,{opacity:tOp},{easing:"linear"}).call(()=>{
        //     //     this.maskNode.setSiblingIndex(tIdx);
        //     // }).start();
        //     this.maskNode.getComponent(UIOpacity)!.opacity = tOp;
        // }
    }


    private getOpacityByMask(maskOpacity: ModalOpacity) {
        let tOp = 0;
        if (maskOpacity == ModalOpacity.OpacityZero) {
            tOp = 1;
        } else if (maskOpacity == ModalOpacity.OpacityLow) {
            tOp = 60;
        } else if (maskOpacity == ModalOpacity.OpacityHalf) {
            tOp = 125;
        } else if (maskOpacity == ModalOpacity.OpacityHigh) {
            tOp = 200;
        } else if (maskOpacity == ModalOpacity.OpacityFull) {
            tOp = 255;
        }
        return tOp;
    }


}