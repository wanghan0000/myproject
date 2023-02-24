import { macro, Node, Sprite, SpriteFrame, sys, Widget } from "cc";
import { ResMgr } from "../../UIFrame/ResMgr";
import { UIRoot } from "../../UIFrame/UIRoot";

export namespace FuncExtend{

    const EXTEND_CHILD_NAME = "EXTEND_CHILD_NAME";

    //绑定红点到节点上
    export function warn(node:Node,offx:number,offy:number){
        let child = node.getChildByName(EXTEND_CHILD_NAME);
        if(child == null || child == undefined || !child.isValid){
            let n = new Node();
            n.name = EXTEND_CHILD_NAME;
            n.setPosition(offx,offy);
            let sprite = n.addComponent(Sprite);
            sprite.spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/lobby_common_plist").getSpriteFrame("reddot");
            //console.log(sprite.spriteFrame);
            node.addChild(n);
        }
    }

    //清除节点上的红点
    export function clearnWarn(node:Node){
        if( node != null && node != undefined && node.isValid){
            let n = node.getChildByName(EXTEND_CHILD_NAME);
            if(n != null && n != undefined && n.isValid){
                n.destroy();
            }
        }
    }

    /*
    保存最新玩过的游戏
    以数组的像是保存
    */
    const  Last_Player_Gaming = "Last_Player_Gaming_Array";
    export function getLastestGameIdArr():number[]{
        let val = localStorage.getItem(Last_Player_Gaming)
        if (val == "" || val == undefined || val == null){
            return []
        }else{
            //此种情况val肯定是json的形式存储的
            let jsonArr = JSON.parse(val);
            return jsonArr
        }
    }

    //设置最后一个操作的游戏的数据
    export function setLastestGameId(gameId:number):void{
        let arr = getLastestGameIdArr();
        let idx = -1;
        for(let i = 0;i<arr.length;i++){
            if(arr[i] == gameId){
                idx = i;
                break;
            }
        }
        if(idx != -1){
            arr.splice(idx,1);
        }
        arr.unshift(gameId);
        localStorage.setItem(Last_Player_Gaming,JSON.stringify(arr));
    }

    export function getSafeAreRect(){
        let rect = sys.getSafeAreaRect();
        console.log("当前屏幕的安全区域为xxxxx");
        console.log(rect.x,rect.y,rect.width,rect.height);
        console.log("当前屏幕的圈圈区域为xxxxx");
    }

    /*
    适配刘海屏
    假定：我们定义屏幕只能竖着 竖屏是不能旋转的
          横屏支持旋转 左侧旋转和右侧旋转
    思路:在横屏的情况下，将竖屏的元素往下移动 一个安全距离 
    在横屏的情况下 如果是 像左侧旋转，则左侧的按钮统一往右移动。如果是右侧的则整体想左移动

    当前做测试：仅仅考虑两种情况
    1：顶部
    2：左侧的按钮适配
    */
    export function adapterSafeAreRect(node:Node){
        let rect = sys.getSafeAreaRect();
        let offy = rect.y;
        // console.log("裁剪区域xxxx");
        // console.log(rect);
        // console.log("裁剪区域xxxx");
        // offy = 54;
        let direction = UIRoot.getInstance().getCurScreenDirection();
        if(direction == macro.ORIENTATION_PORTRAIT){
            //竖屏
            let com = node.getComponent(Widget);
            if(com != null && com.isAlignTop){
                com.top = com.top + offy;
            }
        }else if(direction == macro.ORIENTATION_LANDSCAPE){
            //横屏
            let com = node.getComponent(Widget);
            if(com != null && com.isAlignLeft){
                com.left = com.left + offy
            }
        }
    }
    //获取因为适配所做的偏移量
    export function getSafeAreaRectHeight():number{
        let rect = sys.getSafeAreaRect();
        //rect.y = 54;
        return rect.y;
    }

}

