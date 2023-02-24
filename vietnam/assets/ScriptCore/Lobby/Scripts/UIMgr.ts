
import { _decorator } from 'cc';
import { UIBubble } from '../../UIFrame/UIForm';
import { UIManager } from '../../UIFrame/UIManager';
import { UIRoot } from '../../UIFrame/UIRoot';
import { UITxtTips } from './UI/UITxtTips';

export class UIMgr {
    private static instance: UIMgr = new UIMgr();

    public static getInstance(): UIMgr {
        return this.instance;
    }


    


    //打开热更新界面
    public async showHotUpdate(){
        return await UIManager.getInstance().openWin("Core/hotupdate/UIUpdate");
    }



    /**
     * 提示网络连接断开
     * @returns 
     */
    public async showUIReconnect() {
        return await UIManager.getInstance().openWin("Lobby/Prefabs/UIReconnect");
    }

    /**
     * 关闭网络连接断开
     * @returns 
     */
    public async closeUIReconnect() {
        return await UIManager.getInstance().closeForm("Lobby/Prefabs/UIReconnect");
    }

    public async showUILoading() {
        return await UIManager.getInstance().openScreen("Core/UILoading");
    }


    /**
     * 打开更新界面
     * @returns 
     */
    public async showUIUpdate() {
        return await UIManager.getInstance().openWin("Core/hotupdate/UIUpdate");
    }

    /**
     * 打开login界面 
     */
    public async showScreenLogin() {
        return await UIManager.getInstance().openScreen("Lobby/Prefabs/UILogin");
    }


    //打开第三方的快速登录界面
    public async showLoginFast(){
        return await UIManager.getInstance().openWin("Lobby/Prefabs/UILoginFast");
    }


    /**
     * 打开大厅界面
     */
    public async showScreenLobby(...params:any) {
        return await UIManager.getInstance().openScreen("Lobby/Prefabs/UILobby",...params);
    }

    public async showLobbyBag(){
        return await UIManager.getInstance().openScreen("Lobby/Prefabs/bag/UIBag");
    }
    //打开背包详情界面
    public async showLobbyBagDetail(...params:any){
        return await UIManager.getInstance().openScreen("Lobby/Prefabs/bag/UIBagItemInfo",...params)
    }
    //打开背包的 出售页面
    public async showLobbyBagSale(...params:any){
        return await UIManager.getInstance().openScreen("Lobby/Prefabs/bag/UIBagItemSale",...params);
    }
    //打开背包中的 赠送界面
    public async showLobbyBagSend(...params:any){
        return await UIManager.getInstance().openScreen("Lobby/Prefabs/bag/UIBagItemSend",...params);
    }

    //打开背包中的好友界面
    public async showLobbyBagFriend(...params:any){
        return await UIManager.getInstance().openWin("Lobby/Prefabs/bag/UIBagFriendList",...params)
    }


    //通用掉落框 获取奖励的 框  这个还没有做的逻辑。
    public async showAwardGet(...params:any){
        return await UIManager.getInstance().openWin("Lobby/Prefabs/bag/UIBagItemSend",...params);
    }

    //打开兑换界面
    public async showLobbyExchange(){
        return await UIManager.getInstance().openScreen("Lobby/Prefabs/UIExchange");
    }

    //打开我的
    public async showLobbyMy(){
        return await UIManager.getInstance().openScreen("Lobby/Prefabs/UILobbyMy");
    }

    //打开设置
    public async showLobbySet(){
        return await UIManager.getInstance().openScreen("Lobby/Prefabs/UILobbySet");
    }

    //打开商城界面
    public async showLobbyShop(...params:any){
        return await UIManager.getInstance().openScreen("Lobby/Prefabs/shop/UIShop",...params);
    }

    //打开Lobby的显示奖励获取逻辑
    public async showLobbyAwardGet(...params:any){
        return await UIManager.getInstance().openWin("Lobby/Prefabs/UILobbyAwardGet",...params);
    }

    //横版的通用掉落矿
    public async showLandScapeAwardGet(...params:any){
        return await UIManager.getInstance().openWin("Lobby/Prefabs/UILandscapeAwardGet",...params);
    }
    /**
     * 显示waiting
     */
    public async showWaiting() {
        return await UIManager.getInstance().openWait("Lobby/Prefabs/UIWaiting");
    }

    public async clearWaiting() {
        return await UIManager.getInstance().closeWaiting("Lobby/Prefabs/UIWaiting");
    }



    //显示个人信息
    public async showPopUpProfile() {
        return await UIManager.getInstance().openWin("Lobby/Prefabs/UIPopupProfile");
    }
    




    ///开始屏蔽所有的时间
    public startBlockAllInput(cb:Function = null){
        UIRoot.getInstance().startBlock(cb);
    }

    public stopBlockAllInput(){
        UIRoot.getInstance().stopBlock();
    }





    private curTips: UITxtTips | null = null;
    //通用的飘字显示
    public async tipTxt(txtStr: string):Promise<UIBubble> {
        let params: any = {};
        params.txt = txtStr;
        params.cb = () => {
            this.curTips = null;
        };
        // if (this.curTips != null) {
        //     this.curTips.reset(params);
        // } else {
        //     let tip: UITxtTips = await UIManager.getInstance().openWin("Lobby/Prefabs/UITxtTips", params)! as UITxtTips;
        //     this.curTips = tip;
        // }
        return UIManager.getInstance().openBubble("Lobby/Prefabs/UITxtTips", params);
    }


    //弹出提示框，内部为RichText富文本结构
    public async alertRichTxt(content:string,confirmCb?:Function,cancelCb?:Function){
        let params:any = {};
        params.str = content;
        params.isRichTxt = true;
        params.btnState =["confirm"];
        params.confirm = confirmCb;
        params.cancel = cancelCb;
        return await UIManager.getInstance().openWin("Lobby/Prefabs/UIPopupAlert",params);
    }


    //显示提示弹框
    //str:string,btnState:string[],confirm?:Function,cancel?:Function
    public async AlertTxt(content: string, confirmCb?: Function, cancelCb?: Function) {
        let params: any = {};
        params.str = content;
        params.btnState = ["confirm"];
        params.confirm = confirmCb;
        params.cancel = cancelCb
        return await UIManager.getInstance().openWin("Lobby/Prefabs/UIPopupAlert", params);
    }

    /**
     * 只有确认按钮和关闭按钮的确认框
     */
    public async AlertTxtWithConfirmClose(content: string, confirmCb?: Function, cancelCb?: Function) {
        let params: any = {};
        params.str = content;
        params.btnState = ["confirm", "close"];
        params.confirm = confirmCb;
        params.cancel = cancelCb;
        return await UIManager.getInstance().openWin("Lobby/Prefabs/UIPopupAlert", params);
    }

    // public async AlertTxtWithLandscape(content: string, confirmCb?: Function, cancelCb?: Function) {
    //     let params: any = {};
    //     params.str = content;
    //     params.btnState = ["confirm", "cancel", "close"];
    //     params.confirm = confirmCb;
    //     params.cancel = cancelCb
    //     return await UIManager.getInstance().openWin("Lobby/Prefabs/UIPopupAlertlandscape", params);
    // }

    // public async AlertRichTxtWithLandscape(content: string, confirmCb?: Function, cancelCb?: Function) {
    //     let params: any = {};
    //     params.str = content;
    //     params.isRichTxt = true;
    //     params.btnState = ["confirm", "cancel", "close"];
    //     params.confirm = confirmCb;
    //     params.cancel = cancelCb
    //     return await UIManager.getInstance().openWin("Lobby/Prefabs/UIPopupAlertlandscape", params);
    // }

    /**
     * 只有确认按钮和关闭按钮的确认框
     */
    // public async AlertTxtWithConfirmCloseLandscape(content: string, confirmCb?: Function, cancelCb?: Function) {
    //     let params: any = {};
    //     params.str = content;
    //     params.btnState = ["confirm", "close"];
    //     params.confirm = confirmCb;
    //     params.cancel = cancelCb;
    //     return await UIManager.getInstance().openWin("Lobby/Prefabs/UIPopupAlertlandscape", params);
    // }
    /**
     *  if (params.dragable != null){
            this.isDragable = params.dragable as boolean;
        }
        if(params.autoAlign != null){
            this.isAutoAlign = params.autoAlign as boolean;
        }
        if(this.isDragable){
            this.node.on(Node.EventType.TOUCH_START,this.onTouchStart.bind(this));
            this.node.on(Node.EventType.TOUCH_MOVE,this.onTouchMoved.bind(this));
            this.node.on(Node.EventType.TOUCH_END,this.onTouchEnded.bind(this));
            this.node.on(Node.EventType.TOUCH_CANCEL,this.onTouchCancelled.bind(this));
        }
        if(params.startX != null){
            this.startX = params.startX as number;
        }
        if(params.startY != null){
            this.startY = params.startY as number;
        }
     */
    
    
}


