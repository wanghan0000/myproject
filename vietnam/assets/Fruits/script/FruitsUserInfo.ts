import { Component ,Label,_decorator} from "cc";
import { UserData } from "../../ScriptCore/data/UserData";
import { EventMgr } from "../../ScriptCore/events/eventmgr";
import { FruitsGameEventName } from "./configs/fruitsgameeventname";

const { ccclass, property } = _decorator;

@ccclass('FruitsUserInfo')
export default class FruitsUserInfo extends Component {
    
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
