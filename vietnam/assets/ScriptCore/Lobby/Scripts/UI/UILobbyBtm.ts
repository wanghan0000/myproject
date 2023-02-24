import { _decorator, Component, Node, Toggle } from 'cc';
import { RedDotData } from '../../../data/RedDotData';
import { EventMgr } from '../../../events/eventmgr';
import { EventName } from '../../../events/EventName';
import { PlayerState, PlayerStateMgr } from '../../../gamestate/PlayerState';
import { FuncExtend } from '../../../panda/utils/FuncExtend';
import { MailNowLocation, ShopNowLocation } from '../gameconfig/GameConst';
import { UIMgr } from '../UIMgr';
const { ccclass } = _decorator;

@ccclass('UILobbyBtm')
export class UILobbyBtm extends Component {


        private gameNode:Node = null;
        private bagNode:Node = null;
        private shopNode:Node = null;
        private meNode:Node = null;

        //节点加载的时候
        onLoad(){
            this.gameNode = this.node.getChildByName("ToggleGroup").getChildByName("Toggle1");
            this.bagNode = this.node.getChildByName("ToggleGroup").getChildByName("Toggle2");
            this.shopNode = this.node.getChildByName("ToggleGroup").getChildByName("Toggle3");
            this.meNode = this.node.getChildByName("ToggleGroup").getChildByName("Toggle4");

            EventMgr.getInstance().addEventListener(EventName.RED_DOT_NOTIFY,this.onChkRedNotify,this);
            this.onChkRedNotify();
        }

        //节点被销毁的时候触发
        onDestroy(){
            EventMgr.getInstance().removeByTarget(this);
        }


        //判定红点逻辑
        onChkRedNotify(){
            
            let shopDot = RedDotData.getInstance().chkIsRedDotByShop(ShopNowLocation.Lobby_Location);
            console.log("判定红点的逻辑  在 竖版大厅的底部");
            console.log(shopDot);
            console.log("判定红点的逻辑  在 竖版大厅的底部");
            if(shopDot){
                console.log("有红点");
                FuncExtend.warn(this.shopNode,74/2,94/2);
            }else{
                console.log("没有红点，清除红点");
                FuncExtend.clearnWarn(this.shopNode);
            }

            let myDot = RedDotData.getInstance().chkIsRedDotByMail(MailNowLocation.Lobby_Location);
            if(myDot){
                FuncExtend.warn(this.meNode,74/2,94/2);
            }else{
                FuncExtend.clearnWarn(this.meNode);
            }
            
        }

        

        //游戏界面
        public onBtnGame(){
            UIMgr.getInstance().showScreenLobby();
        }
    
        private resetBtnState():void{
            this.bagNode.getComponent(Toggle).isChecked = false;
            this.shopNode.getComponent(Toggle).isChecked = false;
            this.meNode.getComponent(Toggle).isChecked = false;
            console.log("当前只有game checked !被选中了dxxxxxx");
            this.gameNode.getComponent(Toggle).isChecked = true;
        }

        //背包
        public async onBtnBag(){
            if(PlayerStateMgr.getInstance().chkNeedLogin()){
                console.log();
                this.scheduleOnce(()=>{
                    this.resetBtnState();
                });
                await UIMgr.getInstance().showLoginFast();
                return;
            }
            UIMgr.getInstance().showLobbyBag();
        }
    
        //商城
        public async onBtnShop(){
            if(PlayerStateMgr.getInstance().chkNeedLogin()){
                this.scheduleOnce(()=>{
                    this.resetBtnState();
                });
                await UIMgr.getInstance().showLoginFast();
                return;
            }
            UIMgr.getInstance().showLobbyShop();
        }

        //我的
        public async onBtnMe(){
            if(PlayerStateMgr.getInstance().chkNeedLogin()){
                this.scheduleOnce(()=>{
                    this.resetBtnState();
                });
                await UIMgr.getInstance().showLoginFast();
                return;
            }
            UIMgr.getInstance().showLobbyMy();
        }
}

