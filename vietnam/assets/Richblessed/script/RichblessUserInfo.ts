/*
 * @Author: super_javan0104 296652579@qq.com
 * @Date: 2022-12-06 11:54:30
 * @LastEditors: super_javan 296652579@qq.com
 * @LastEditTime: 2022-12-06 11:58:10
 * @FilePath: \vietnam\assets\Richblessed\script\RichblessUserInfo.ts
 * @Description:多彩个人信息脚本
 */
import { Component ,Label,_decorator} from "cc";
import { UserData } from "../../ScriptCore/data/UserData";
import { EventMgr } from "../../ScriptCore/events/eventmgr";
import { FruitsGameEventName } from "./configs/fruitsgameeventname";

const { ccclass, property } = _decorator;

@ccclass('RichblessUserInfo')
export default class RichblessUserInfo extends Component {
    
    @property(Label)
    userName:Label = null;
    @property(Label)
    userId:Label = null;
    @property(Label)
    coin:Label = null;

    onLoad(){
        this.userName.string = UserData.getInstance().getUserName();
        this.userId.string = `ID：${UserData.getInstance().getUserPetId()}`;
        this.coin.string = `金币数量：${UserData.getInstance().getCoin()}`;
    }

    updateCoin(msg:any){
        const { Coin = 0 } = msg;
        this.coin.string = `金币数量：${Coin}`
    }
}
