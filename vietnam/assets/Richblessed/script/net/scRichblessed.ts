/*
 * @Description: 多彩网络模块
 * @Author: Super_Javan
 * @Date: 2022-11-30 14:36:12
 * @LastEditTime: 2023-01-15 15:23:53
 * @LastEditors: super_javan 296652579@qq.com
 */
import { EventMgr } from "../../../ScriptCore/events/eventmgr";
import { UIMgr } from "../../../ScriptCore/Lobby/Scripts/UIMgr";
import { SocketMgr } from "../../../ScriptCore/panda/net/SocketMgr";
import { SocketPackTool } from "../../../ScriptCore/panda/net/SocketPackTool";
import gamehall from "../../../ScriptCore/protocol/gamehall.js";
import { RichblessedUIMgr } from "../../RichblessedUIMgr";
import { FruitsGameEventName } from "../configs/fruitsgameeventname";
import { RichblessedRoomData } from "../richblesseddata/RichblessedRoomData";
import richblessed from "../protocol/richblessed.js";
import { testData } from "../RichblessedConfig";
import { message } from "../../../ScriptCore/protocol/message";
import { UserData } from "../../../ScriptCore/data/UserData";

export class SCRichblessed {
    private testIndex = 0;
    private static instance: SCRichblessed | null = null;
    private static TAG: string = 'SCRichblessed多彩网络事件 :'

    public static getInstance() {
        if (this.instance == null) {
            this.instance = new SCRichblessed();
        }
        return this.instance;
    }

    public static destory() {
        if (this.instance != null) {
            this.instance.unregister();
        }
        this.instance = null;
    }

    private static FreeNum = 10; //当前剩余次数
    private static AddFreeNum = 10; //新增次数
    private static FreeTotalWin = 1;
    private static WinFreeTimes = 10;
    private static JackpotEle = -1;

    public register() {
        /*==房间信息===*/
        SocketPackTool.register((msg: any) => {
            console.log(SCRichblessed.TAG+'房间信息========')
            console.log(msg)
            console.log(SCRichblessed.TAG+'房间信息========')

            RichblessedRoomData.instance.billed = msg;
            RichblessedRoomData.instance.loadData(msg);
            EventMgr.getInstance().dispatchEvent(FruitsGameEventName.GAME_SC_ROOM_INFO);
        }, richblessed.richblessed.RBPID.PACKET_RICHBLESSED_SCRBRoomInfo, richblessed.richblessed.SCRBRoomInfo);

        /**==房间状态=== */
        SocketPackTool.register((msg: any)=>{
            // console.log(SCRichblessed.TAG + '房间状态==========')
            // console.log(msg)
            // console.log(SCRichblessed.TAG + '房间状态==========')
            EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_ROOM_STATE,msg)
        },richblessed.richblessed.RBPID.PACKET_RICHBLESSED_SCRBRoomState, richblessed.richblessed.SCRBRoomState)

         /**==返回玩家操作=== */
         SocketPackTool.register((msg: any)=>{
            console.log(SCRichblessed.TAG+'返回玩家操作========')
            console.log(msg)
            console.log(SCRichblessed.TAG+'返回玩家操作========')
            RichblessedRoomData.instance.allJackPot = msg.Params;
            EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_FRUITSOP,msg)
        },richblessed.richblessed.RBPID.PACKET_RICHBLESSED_SCRichBlessedOp,richblessed.richblessed.SCRichBlessedOp);
        SocketPackTool.registerPackFunc(richblessed.richblessed.RBPID.PACKET_RICHBLESSED_CSRichBlessedOp, richblessed.richblessed.CSRichBlessedOp);
        /**==奖池==== */
        SocketPackTool.register((msg: any)=>{
            // console.log(SCRichblessed.TAG + '奖池=====')
            // console.log(msg)
            // console.log(SCRichblessed.TAG + '奖池=====')
            EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_PRIZE,msg)
        },richblessed.richblessed.RBPID.PACKET_RICHBLESSED_SCRBPrize, richblessed.richblessed.SCRBPrize)
        /**==转动结果==== */
        SocketPackTool.register((msg:any)=>{
            console.log(SCRichblessed.TAG + 'PACKET_FRUITS_SCFruitsBilled=====')
            console.log(msg);
            console.log(SCRichblessed.TAG + 'PACKET_FRUITS_SCFruitsBilled=====')
            //test data 
            // if(!msg.FreeNum){
            //     let cfg = testData[this.testIndex];
            //     if(cfg.AddFreeNum){
            //         msg.AddFreeNum = cfg.AddFreeNum;
            //     }
            //     if(cfg.FreeNum){
            //         msg.FreeNum = cfg.FreeNum
            //     }
            //     if(cfg.JackpotEle){
            //         msg.JackpotEle = cfg.JackpotEle
            //     }
            //     if(cfg.WinFreeTimes){
            //         msg.WinFreeTimes = cfg.WinFreeTimes;
            //     }
            //     this.testIndex++;
            //     if(this.testIndex > testData.length - 1)
            //         this.testIndex = 0;
            // }
            // msg.AddFreeNum = SCRichblessed.AddFreeNum;
            // msg.FreeNum = SCRichblessed.FreeNum;
            // msg.FreeTotalWin = SCRichblessed.FreeTotalWin;
            // msg.WinFreeTimes = SCRichblessed.WinFreeTimes;
            // msg.WinEleCoin = 27400;
            // msg.Cards = [10, 10, 7, 7, 7, 11, 0, 8, 3, 1, 8, 12, 11, 11, 8]
            // let WinLines = [{Poss:[5, 6, 12, 13]},{Poss:[10, 6, 7]},{Poss:[10, 11, 7]}]
            // msg.WinLines = WinLines;
            // msg.WinEleCoin = 150;
            // msg.WinRate = 15;
            // msg.JackpotEle = 1;
            /**----------------------------------------------------------------------------------------------------------------------------------------------------*/
            RichblessedRoomData.instance.billed = msg;
            RichblessedRoomData.instance.coin = msg.Coin;
            EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_BILLED,msg)
        },richblessed.richblessed.RBPID.PACKET_RICHBLESSED_SCRBBilled, richblessed.richblessed.SCRBBilled)
        /**==jack游戏结果==== */
        SocketPackTool.register((msg:any)=>{
            console.log(SCRichblessed.TAG + 'PACKET_RICHBLESSED_SCRBJACKBilled=====')
            console.log(msg)
            console.log(SCRichblessed.TAG + 'PACKET_RICHBLESSED_SCRBJACKBilled=====')
            // RichblessedRoomData.instance.billed = msg;
            if(RichblessedRoomData.instance.billed){
                let WinJackpot = msg['WinJackpot']
                if(WinJackpot){
                    RichblessedRoomData.instance.billed.JackpotEle = -1;
                    RichblessedRoomData.instance.winJackpot = WinJackpot;
                    // console.log('winjacpot赋值:' + RichblessedRoomData.instance.winJackpot);
                    EventMgr.getInstance().dispatchEvent(FruitsGameEventName.JACKGAME_WIN_REFRESH);
                }
            }
        },richblessed.richblessed.RBPID.PACKET_RICHBLESSED_SCRBJACKBilled, richblessed.richblessed.SCRBBilled)
    }

    public launchRichblessed(opCode:number,jack:null){
        const packet = new richblessed.richblessed.CSRichBlessedOp();
        packet.OpCode = opCode;
        packet.Params = jack == null ? [RichblessedRoomData.instance.BetIdx] : jack;
        console.log(SCRichblessed.TAG + '启动机器=========')
        console.log(packet)
        console.log(SCRichblessed.TAG + '启动机器=========')
        SocketMgr.send(richblessed.richblessed.RBPID.PACKET_RICHBLESSED_CSRichBlessedOp, packet);
    }

    public changeBet(params: any) {
        const { OpCode , Params} = params;
        const packet = new richblessed.richblessed.CSRichBlessedOp();
        packet.OpCode = OpCode;
        packet.Params = Params;
        // console.log(SCRichblessed.TAG + '切换=========')
        // console.log(packet)
        // console.log(SCRichblessed.TAG + '切换=========')
        SocketMgr.send(richblessed.richblessed.RBPID.PACKET_RICHBLESSED_CSRichBlessedOp, packet);
    }

    public reconnect(){
        const roomId = RichblessedRoomData.instance.getRoomId();
        if (roomId != null && roomId != 0) {
            const packet = new gamehall.gamehall.CSReturnRoom();
            packet.RoomId = roomId;
            packet.IsLoaded = true;
            // console.log(SCRichblessed.TAG + '返回房间=========')
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_RETURNROOM, packet);
        }
    }

    public backGame(){
        const packet = new gamehall.gamehall.CSQuitGame();
        packet.Id = RichblessedRoomData.instance.getGameFreeId(); //3070001
        packet.IsAudience = false;
        // console.log(SCRichblessed.TAG + '退出游戏=========')
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_QUITGAME, packet);
    }

    public enterForegroundCb(){
        const pack = new gamehall.gamehall.CSPlayerSwithFlag();
        pack.Flag = 1 << 14;
        pack.Mark = 0;
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_PLAYER_SWITCHFLAG, pack);
    }

    public enterBackgroundCb() {
        const pack = new gamehall.gamehall.CSPlayerSwithFlag();
        pack.Flag = 1 << 14;
        pack.Mark = 1;
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_PLAYER_SWITCHFLAG, pack);
    }

    //取消注册
    private unregister() {
        // SocketPackTool.unregister(fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsRoomInfo);
        SocketPackTool.unregister(richblessed.richblessed.RBPID.PACKET_RICHBLESSED_SCRBRoomInfo);
        SocketPackTool.unregister(richblessed.richblessed.RBPID.PACKET_RICHBLESSED_SCRichBlessedOp);
        SocketPackTool.unregister(richblessed.richblessed.RBPID.PACKET_RICHBLESSED_SCRBBilled);
    }

    //下注下标
    private _BetIdx: number = 0;
    public get BetIdx() : number {
        return this._BetIdx;
    }
    public set BetIdx(v : number) {
        if(v < 0){
            v = 4;
        }
        if(v > 4){
            v = 0;
        }
        this._BetIdx = v;
    }
    //下注金额
    private _BetMoney: number[] = [];
    public get BetMoney() : number[] {
        return this._BetMoney;
    }
    public getCurrentBetMoney() : number{
        return this.BetMoney[this.BetIdx] || 0;
    }
    //金额
    private _coin:number = 0;
    public get coin() : number {
        return this._coin;
    }
    public set coin(v : number) {
        this._coin = v;
    }
}