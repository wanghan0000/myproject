import chat from "../protocol/chat.js";
import friend from "../protocol/friend.js";
import player from "../protocol/player.js";


export class UserData {

    private levelPoint: number = 0;
    private vipPoint: number = 0;
    private nextVipPoint: number = 0;
    private accountId: string = "";
    private userName: string = "";
    private displayName: string = "";
    private head: number = 0;
    private gold: number = 0;

    //金币
    private coin: number = 0;
    //钻石
    private diamond: number = 0;
    //性别
    private sex: number = 0;

    //private IsUpdateAccountName:boolean = false;
    private tel: string = "";
    private IsOTP: boolean = false;
    private IsGetOtpFree: boolean = false;
    private createdTime: string = "";
    private UserType: number = 0;
    private OTPToken: string = "";
    private accessToken: string = "";
    private PigMoney: string = "";
    public Safe: string = "";

    private snId: number = 0;
    private roomId: number = 0;
    private gameId = 0;
    private roomIndex = 0;

    private userRoleId: number = 0;
    private userPetId: number = 0;
    private reliefFundTimes: number = 0;

    private _unreadRequestList: friend.friend.SCFriendApplyData;
    private _unreadChatList: friend.friend.SCFriendUnreadData;
    private _unreadFriendOpList: friend.friend.SCFriendOp[];
    private _unreadChatMsgList: chat.chat.SCChatMsg[];
    private _inviteFriend: friend.friend.SCInviteFriend;

    private static instance: UserData = new UserData();

    public static getInstance(): UserData {
        return this.instance;
    }

    public getLevelPoint(): number {
        return this.levelPoint;
    }
    public setLevelPoint(lvPoint: number) {
        this.levelPoint = lvPoint;
    }

    public getVipPoint(): number {
        return this.vipPoint;
    }

    public setVipPoint(vipPoint: number): void {
        this.vipPoint = vipPoint;
    }

    public getNextVipPoint(): number {
        return this.nextVipPoint;
    }

    public setNextVipPoint(nextVipPoint: number) {
        this.nextVipPoint = nextVipPoint;
    }

    public getAccountID(): string {
        return this.accountId;
    }

    public setAccountID(accId: string) {
        this.accountId = accId;
    }

    public getUserName(): string {
        return this.userName;
    }

    public setUserName(uName: string) {
        this.userName = uName;
    }

    public getName() {
        return this.userName;
    }
    public getDisplayName(): string {
        return this.displayName;
    }

    public setDisplayName(displayName: string) {
        this.displayName = displayName;
    }

    public getHead(): number {
        return this.head;
    }

    public setHead(headId: number) {
        this.head = headId;
    }
    public getGold(): number {
        return this.getCoin();
    }
    public setGold(gold: number) {
        this.setCoin(gold);
    }

    //定义coin 为 金币
    public getCoin(): number {
        return this.coin;
    }
    //调用增量方法
    public addCoin(coin: number) {
        this.coin = this.coin + coin;
    }
    public setCoin(coin: number) {
        this.coin = coin;
    }

    public getDiamond(): number {
        return this.diamond;
    }
    public addDiamond(diamond: number) {
        this.diamond = this.diamond + diamond;
    }

    public setDiamond(diamond: number) {
        this.diamond = diamond;
    }

    private vCoin: number = 0;

    public getVCoin(): number {
        return this.vCoin;
    }

    public setVCoin(vCoin: number) {
        this.vCoin = vCoin;
    }

    public addVCoin(vcoin: number) {
        this.vCoin = this.vCoin + vcoin;
    }


    public setTel(tel: string) {
        this.tel = tel;
    }
    public getTel(): string {
        return this.tel;
    }

    public getCreatedTime(): string {
        return this.createdTime;
    }
    public setCreateTime(createTime: string): void {
        this.createdTime = createTime;
    }
    //reayonly
    public getSnId(): number {
        return this.snId;
    }

    public getSex(): number {
        return this.sex;
    }

    // 0 :女  1：男
    public getRoleSex(): number {
        return this.getUserRoleId() - 2000001;
    }

    private miniGameInfo: player.player.IMiniGameInfo[] = [];

    //使用proto中的对象提示的更好  等待初始化。
    public onPlayerData(player: player.player.SCPlayerData) {
        //暂时先处理这几个字段
        this.accountId = player.Data!.AccId!.toString();
        //废弃这个字段
        //this.gold = player.Data!.Coin!;

        //玩家身上的金币
        this.coin = player.Data!.Coin!;
        //钻石
        this.diamond = player.Data!.Diamond!;
        this.vCoin = player.Data.VCoin;
        this.userName = player.Data!.Name!;
        this.snId = player.Data!.SnId!;
        this.head = player.Data!.Head!;
        this.sex = player.Data.Sex;
        //小游戏的逻辑暂时不处理。只处理 原来的通用游戏 
        /**
         * 有一下三个值就可以将玩家拉回到房间中
         */
        this.gameFreeId = player.LogicId;
        this.gameId = player.GameId;
        this.roomId = player.RoomId;
        //小游戏中的数据
        this.miniGameInfo = player.MiniGameArr;

        this.userPetId = player.Data.UsePetId;
        this.userRoleId = player.Data.UseRoleId;
        this.reliefFundTimes = player.Data.ReliefFundTimes;
    }


    public getRoomId(): number {
        return this.roomId;
    }

    public setRoomId(roomId: number) {
        this.roomId = roomId;
    }

    /**
     * 获取miniGame对应的房间信息等等
     * 这个信息其实在 本地是可以读取到的。但是如果是要拉回到游戏房间则需要继续读取这个值。
     * @param logicId 
     * @returns 
     */
    public getMiniGameInfo(logicId: number): player.player.IMiniGameInfo | null {
        if (this.miniGameInfo && this.miniGameInfo.length > 0) {
            for (let idx = 0; idx < this.miniGameInfo.length; idx++) {
                if (this.miniGameInfo[idx].LogicId == logicId) {
                    return this.miniGameInfo[idx];
                }
            }
        }
        return null;
    }


    public setGameId(gameid: number) {
        this.gameId = gameid;
    }

    public getGameId() {
        return this.gameId;
    }

    // public setRoomIndex(index:any){
    //     this.roomIndex = index;
    //     this.setGameFreeId()
    // }

    private gameFreeId = 0;
    public getGameFreeId() {
        return this.gameFreeId;
    }

    public setGameFreeId(gfId: number = 0) {
        this.gameFreeId = gfId;
    }

    public getRoomIndex() {
        return this.roomIndex;
    }

    public getUserRoleId() {
        return this.userRoleId;
    }

    public setUserRoleId(roleId: number) {
        this.userRoleId = roleId;
    }

    public getUserPetId() {
        return this.userPetId;
    }

    public setUserPetId(petId: number) {
        this.userPetId = petId;
    }

    public getReliefFundTimes() {
        return this.reliefFundTimes;
    }

    public setReliefFundTimes(times: number) {
        this.reliefFundTimes = times;
    }

    public get unreadRequestList(): friend.friend.SCFriendApplyData {
        return this._unreadRequestList;
    }

    public set unreadRequestList(value: any) {
        this._unreadRequestList = value;
    }

    public get unreadChatList(): friend.friend.SCFriendUnreadData {
        return this._unreadChatList;
    }

    public set unreadChatList(value: any) {
        this._unreadChatList = value;
    }

    public get unreadFriendOpList(): friend.friend.SCFriendOp[] {
        return this._unreadFriendOpList;
    }

    public set unreadFriendOpList(value: friend.friend.SCFriendOp[]) {
        this._unreadFriendOpList = value;
    }

    public addUnreadFriendOp(value: friend.friend.SCFriendOp) {
        this._unreadFriendOpList = this._unreadFriendOpList || [];
        this._unreadFriendOpList.push(value);
    }

    public get unreadChatMsgList(): chat.chat.SCChatMsg[] {
        return this._unreadChatMsgList;
    }

    public set unreadChatMsgList(value: chat.chat.SCChatMsg[]) {
        this._unreadChatMsgList = null;
    }

    public addUnreadChatMsg(value: chat.chat.SCChatMsg) {
        this._unreadChatMsgList = this._unreadChatMsgList || [];
        this._unreadChatMsgList.push(value);
    }

    public get inviteFriend(): friend.friend.SCInviteFriend {
        return this._inviteFriend;
    }

    public set inviteFriend(value: friend.friend.SCInviteFriend) {
        this._inviteFriend = value;
    }


}