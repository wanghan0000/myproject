import { _decorator, Component, Node } from 'cc';
import player from '../../ScriptCore/protocol/player.js';
import welfare from '../../ScriptCore/protocol/welfare.js';
import { UIManager } from '../../ScriptCore/UIFrame/UIManager';
const { ccclass, property } = _decorator;




/**
 * 该对象只做界面管理器，不做其他功能
 */
export class TienlenUIMgr {
    private static instance: TienlenUIMgr = null;
    public static getInstance(): TienlenUIMgr {
        if (this.instance == null) {
            this.instance = new TienlenUIMgr();
        }
        return this.instance;
    }


    //打开Tienlen中的掉落
    public async showAwardGet(...params: any) {
        return await UIManager.getInstance().openWin("Tienlen/prefab/common/UITienlenAwardGet", ...params);
    }

    //打开Tienlen中的确认弹框
    //弹出提示框，内部为RichText富文本结构
    public async alertRichTxt(content: string, confirmCb?: Function, cancelCb?: Function) {
        let params: any = {};
        params.str = content;
        params.isRichTxt = true;
        params.btnState = ["confirm"];
        params.confirm = confirmCb;
        params.cancel = cancelCb;
        return await UIManager.getInstance().openWin("Tienlen/prefab/common/UITienlenAlert", params);
    }


    //显示提示弹框
    //str:string,btnState:string[],confirm?:Function,cancel?:Function
    public async AlertTxt(content: string, confirmCb?: Function, cancelCb?: Function) {
        let params: any = {};
        params.str = content;
        params.btnState = ["confirm"];
        params.confirm = confirmCb;
        params.cancel = cancelCb
        return await UIManager.getInstance().openWin("Tienlen/prefab/common/UITienlenAlert", params);
    }


    //打开商城界面
    public async showTienLenShop(tag: string = "") {
        return await UIManager.getInstance().openScreen(`Tienlen/prefab/shop/UITienlenShop`, tag);
    }


    //打开活动界面
    public async showTienLenActivity(...params: any) {
        return await UIManager.getInstance().openScreen(`Tienlen/prefab/ActivityHall`, ...params);
    }

    //打开商城的购买记录界面
    public async showTienLenShopLog() {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/shop/UITienlenShopLog`);
    }

    //打开背包界面
    public async showBag(...params: any) {
        return await UIManager.getInstance().openScreen(`Tienlen/prefab/bag/UITienlenBag`, ...params);
    }


    //打开背包的出售界面
    public async showBagSale(...params: any) {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/bag/UITienlenBagSale`, ...params);
    }


    //打开背包的赠送界面
    public async showBagSend(...params: any) {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/bag/UITienlenBagSend`, ...params);
    }


    //打包选择好友的列表
    public async showBagFriendList() {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/bag/UITienlenBagFriendList`);
    }

    //打开邮件界面
    public async showMail(...params: any) {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/mail/UITienlenMail`, ...params);
    }

    //打开设置界面
    public async showTienLenSet() {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/UITienlenSet`);
    }

    //打开宠物界面
    public async showTienLenPet() {
        return await UIManager.getInstance().openScreen(`Tienlen/prefab/Pet`);
    }

    //打开角色界面
    public async showTienLenRole() {
        return await UIManager.getInstance().openScreen(`Tienlen/prefab/Role`);
    }
    //打开创建房间窗口
    public async showCreateRoom(...params: any) {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/room/TienlenCreateRoom`, ...params);
    }

    //房间隐藏
    public async hideCreateRoom() {
        await UIManager.getInstance().closeForm(`Tienlen/prefab/room/TienlenCreateRoom`);
    }

    //打开房间列表窗口
    public async showRoomList(params: any) {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/room/TienlenRoomList`, params);
    }

    //
    public async hideRoomList() {
        await UIManager.getInstance().closeForm(`Tienlen/prefab/room/TienlenRoomList`);
    }

    //打开兑换界面
    public async showTienLenExcShop() {
        return await UIManager.getInstance().openScreen(`Tienlen/prefab/TienlenExcShop`);
    }

    //打开VIP
    public async showTienLenVip(params: player.player.SCVIPInfo) {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/UITienlenVip`, params);
    }

    //打开七日签到
    public async showTienLenSevenSign(params: welfare.welfare.SCWelfaredInfo) {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/UITienlenSevenSign`, params);
    }

    //打开盲盒
    public async showBlindBox(params: welfare.welfare.SCBlindBoxInfo) {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/UITienlenBlindBox`, params);
    }

    //打开超值首充
    public async showFirCharge(params: welfare.welfare.SCWelfareFirstPayData) {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/UITienlenFirCharge`, params);
    }

    //打开连续充值
    public async showCoutinueCharge(params: welfare.welfare.SCWelfareContinuousPayData) {
        return await UIManager.getInstance().openWin(`Tienlen/prefab/UITienlenContinueCharge`, params);
    }
}

