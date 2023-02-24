
import { Utils } from "../panda/utils/Utils";


export class BaseRoomData {
    //dbgameFree中对应的游戏Id
    protected gameFreeId:number = 0;
    //房间Id
    protected roomId:number = 0;
    //创建者的snId
    protected creator:number = 0;
    //游戏id
    protected gameId:number = 0;
    //游戏模式
    protected roomMode:number = 0;
    //规则参数
    protected params:number[] = [];

    /*
        按照原lua的BaseRoomModel新加
    */
    public players_:any; //房间内玩家，被子类重载
    public myPos= 0; //我的位置
    numOfGames = 0;  //当前房间第几局
    state = 0;       //房间阶段
    gameMode: number = 0; //当前房间的游戏模式
    bankerPos: number = -1;
    timeOut: number = 0; //当前房间状态剩余时间
    disbandGen: number = 0; //当前解散申请代数
    lookLevel: number = 0;
    totalOfGames: number = 0;
    //2 MatchId, 3 ProcessId, 4 比赛模式类型, 5 底分, 6 总局数, 7 淘汰分数 8 总共剩余人数 9 本轮开赛人数 10 当前排名
    sceneType = 0; //房间类型， 0房卡，1钻石
    agentId = 0; //房间代开者snid

    
    constructor(){
        /*
            -- 房卡场模式
            self.isNormalMode_ = (self.roomId_ >= GAME_MODE_NORMAL.minId) and (self.roomId_ <= GAME_MODE_NORMAL.maxId)
            -- 是比赛模式
            self.isMatchMode_ = (self.roomId_ >= GAME_MODE_MATCH.minId) and (self.roomId_ <= GAME_MODE_MATCH.maxId)
            -- 是自由模式
            self.isFreeMode_ = (self.roomId_ >= GAME_MODE_FREE.minId) and (self.roomId_ <= GAME_MODE_FREE.maxId)
            -- 是万人场
            self.isHundredMode_ = (self.roomId_ >= GAME_MODE_HUNDRED.minId) and (self.roomId_ <= GAME_MODE_HUNDRED.maxId)
        */
    }

    public getPlayerByPos(pos:number){
        return this.players_[pos];
    }

    public setMyPos(pos:number){
        this.myPos = pos;
        let me = this.getPlayerByPos(pos);
        if(!!me){
            me.isMe_ = true;
        }
    }

    public getMyPos(){
        return this.myPos;
    }

    public getMe(){
        return this.getPlayerByPos(this.myPos);
    }  

    public getState(){
        return this.state;
    } 

    public setState(state:number){
        this.state = state;
    }

    public getGameFreeId():number{
        return this.gameFreeId;
    }

    public setGameFreeId(gfId:number):void{
        this.gameFreeId = gfId;
    }

    public getRoomId():number{
        return this.roomId;
    }

    public setRoomId(rId:number):void{
        this.roomId = rId;
    }

    public getCreator():number{
        return this.creator;
    }

    public setCreator(creator:number):void{
        this.creator = creator;
    }

    public getGameId():number{
        return this.gameId;
    }

    public setGameId(gId:number):void{
        this.gameId = gId;
    }

    public getRoomMode():number{
        return this.roomMode;
    }

    public setRoomMode(rm:number):void{
        this.roomMode = rm;
    }

    public getParams():number[]{
        return this.params;
    }

    public setParams(pms:number[]):void{
        this.params = pms;
    }

    public loadData(data:any):void{
        this.gameFreeId = Utils.getProtoNumber(data.GameFreeId);
        this.roomId = Utils.getProtoNumber(data.RoomId);
        this.creator = Utils.getProtoNumber(data.Creator);
        this.gameId = Utils.getProtoNumber(data.GameId);
        this.roomMode = Utils.getProtoNumber(data.RoomMode);
        this.params = data.Params;
        this.gameMode = Utils.getProtoNumber(data.RoomMode);
        this.numOfGames = Utils.getProtoNumber(data.NumOfGames);
        this.bankerPos = Utils.getProtoNumber(data.BankerPos);
        this.state = Utils.getProtoNumber(data.State);
        this.timeOut = Utils.getProtoNumber(data.TimeOut);
        this.disbandGen = Utils.getProtoNumber(data.DisbandGen);
        this.sceneType = Utils.getProtoNumber(data.SceneType);
        this.agentId = Utils.getProtoNumber(data.AgentId);
    }

    public setNumOfGames(num:number){
        this.numOfGames = num;
    }

    public getNumOfGames(){
        return this.numOfGames;
    }

    public getTimeout(){
        return this.timeOut;
    }

    public initLookLevel(){

    }

    public isLook(){
        //return 0 ~= self.lookLevel_
        return false;
    }

    public isMatchMode(){
        //return 0 ~= self.lookLevel_
        return false;
    }

    public isFreeMode(){
        //return self.isFreeMode_
        return true;
    }

    public isWatchReplaying(){
        //return self.isWatchReplaying_
        return false;
    }

    clear(){
        this.roomId = 0;
        this.gameId = 0;
        this.gameMode = 0;
        this.params = [];
        this.bankerPos = -1
        this.myPos = 0;
        this.state = 0;	
        this.numOfGames = 0;
        this.timeOut = 0;	
        this.disbandGen = 0;
        this.players_ = [];
        this.lookLevel = 0;
        this.totalOfGames = 0;
    }
}
