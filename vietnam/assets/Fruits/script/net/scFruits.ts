import { EventMgr } from "../../../ScriptCore/events/eventmgr";
import { UIMgr } from "../../../ScriptCore/Lobby/Scripts/UIMgr";
import { SocketMgr } from "../../../ScriptCore/panda/net/SocketMgr";
import { SocketPackTool } from "../../../ScriptCore/panda/net/SocketPackTool";
import gamehall from "../../../ScriptCore/protocol/gamehall.js";
import { FruitsUIMgr } from "../../FruitsUIMgr";
import { FruitsGameEventName } from "../configs/fruitsgameeventname";
import { FruitsRoomData } from "../fruitsdata/FruitsRoomData";
import fruits from "../protocol/fruits.js";

export class SCFruits {
    private static instance: SCFruits | null = null;
    private static TAG: string = 'SCFruits水果机网络事件 :'

    public static getInstance() {
        if (this.instance == null) {
            this.instance = new SCFruits();
        }
        return this.instance;
    }

    public static destory() {
        if (this.instance != null) {
            this.instance.unregister();
        }
        this.instance = null;
    }

    private static FreeTimes = 10;
    private static WinFreeTimes = 10;
    private static FreeTotalWin = 0;
    private static MaryFlag = false;
    private static MaryTimes = 1;

    public register() {
        /*==房间信息===*/
        SocketPackTool.register((msg: any) => {
            console.log(SCFruits.TAG+'房间信息========')
            console.log(msg)
            console.log(SCFruits.TAG+'房间信息========')
            FruitsRoomData.instance.loadData(msg);
            FruitsRoomData.instance.billed = msg;
            EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_ROOM_INFO,msg)
        }, fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsRoomInfo, fruits.fruits.SCFruitsRoomInfo);
        /**==返回玩家操作=== */
        SocketPackTool.register((msg: any)=>{
            console.log(SCFruits.TAG+'返回玩家操作========')
            console.log(msg)
            console.log(SCFruits.TAG+'返回玩家操作========')
            EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_FRUITSOP,msg)
        },fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsOp,fruits.fruits.SCFruitsOp);
        SocketPackTool.registerPackFunc(fruits.fruits.FruitsPID.PACKET_FRUITS_CSFruitsOp, fruits.fruits.CSFruitsOp);

        /**==房间状态=== */
        SocketPackTool.register((msg: any)=>{
            console.log(SCFruits.TAG + '房间状态==========')
            console.log(msg)
            console.log(SCFruits.TAG + '房间状态==========')
            EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_ROOM_STATE,msg)
        },fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsRoomState, fruits.fruits.SCFruitsRoomState)
        /**==奖池==== */
        SocketPackTool.register((msg: any)=>{
            EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_PRIZE,msg)
        },fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsPrize, fruits.fruits.SCFruitsPrize)
        /**==转动结果==== */
        SocketPackTool.register((msg:any)=>{
            console.log(SCFruits.TAG + 'PACKET_FRUITS_SCFruitsBilled=====')
            console.log(msg)
            console.log(SCFruits.TAG + 'PACKET_FRUITS_SCFruitsBilled=====')
            //msg.Cards =  [1, 2, 8, 5, 1, 2, 9, 10, 2, 5, 10, 10, 7, 1, 2];
            // msg.Cards[0] = 0;
            // msg.Cards[1] = 0;
            // msg.Cards[2] = 0;
            // msg.Cards[3] = 0;
            // msg.Cards[4] = 0;
            // msg.WinJackpot = 8168
            // msg.WinLineCoin = 10000
            // msg.WinRate = 200;
            // msg.WinFreeTimes = SCFruits.WinFreeTimes;
            // SCFruits.WinFreeTimes = 0;
            // msg.FreeTimes = SCFruits.FreeTimes;
            // SCFruits.FreeTimes -= 1;
            // if(  SCFruits.FreeTimes < 0){
            //     SCFruits.FreeTimes = 0;
            // }
            // msg.FreeTotalWin = SCFruits.FreeTotalWin;
            // SCFruits.FreeTotalWin += 2000;
            // if(!SCFruits.MaryFlag){
            //     SCFruits.MaryFlag = true;
            //     msg.MaryFreeTimes = SCFruits.MaryTimes;
            //     SCFruits.MaryTimes = 0;
            //     FruitsRoomData.instance.billed = msg;
            //     FruitsRoomData.instance.coin = msg.Coin;
            //     EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_BILLED,msg)
            // }else {
            //     msg.MaryCards = [10, 6, 8, 11]
            //     msg.MaryWinId = 4
            //     msg.MaryOutTotalWin = (SCFruits.FreeTotalWin += 2000);
            //     FruitsRoomData.instance.maryBilled = msg;
            //     SCFruits.MaryFlag = false;
            //     if(!SCFruits.MaryTimes){
            //         FruitsRoomData.instance.billed = msg;
            //         FruitsRoomData.instance.coin = msg.Coin;
            //         EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_BILLED,msg)
            //     }
            //     EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_MARY_BILLED,msg)
            // }
            FruitsRoomData.instance.billed = msg;
            FruitsRoomData.instance.coin = msg.Coin;
            EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_BILLED,msg)
          
        },fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsBilled, fruits.fruits.SCFruitsBilled)
        /**小玛利游戏 */
        SocketPackTool.register((msg: any)=>{
            console.log(SCFruits.TAG + '小玛利游戏=====')
            console.log(msg)
            console.log(SCFruits.TAG + '小玛利游戏=====')
            FruitsRoomData.instance.maryBilled = msg;
            EventMgr.getInstance().dispatchEvent(FruitsGameEventName.FRUITS_SC_MARY_BILLED,msg)
        },fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsMaryBilled,fruits.fruits.SCFruitsMaryBilled)
    }

    public launchFruits(){
        const packet = new fruits.fruits.CSFruitsOp();
        packet.OpCode = 0;
        packet.Params = [FruitsRoomData.instance.BetIdx];
        console.log(SCFruits.TAG + '启动机器=========')
        console.log(packet)
        console.log(SCFruits.TAG + '启动机器=========')
        SocketMgr.send(fruits.fruits.FruitsPID.PACKET_FRUITS_CSFruitsOp, packet);
    }

    public changeBet(params: any) {
        const { OpCode , Params} = params;
        const packet = new fruits.fruits.CSFruitsOp();
        packet.OpCode = OpCode;
        packet.Params = Params;
        console.log(SCFruits.TAG + '切换=========')
        console.log(packet)
        console.log(SCFruits.TAG + '切换=========')
        SocketMgr.send(fruits.fruits.FruitsPID.PACKET_FRUITS_CSFruitsOp, packet);
    }

    public reconnect(){
        const roomId = FruitsRoomData.instance.getRoomId();
        if (roomId != null && roomId != 0) {
            const packet = new gamehall.gamehall.CSReturnRoom();
            packet.RoomId = roomId;
            packet.IsLoaded = true;
            console.log(SCFruits.TAG + '返回房间=========')
            console.log(packet)
            console.log(SCFruits.TAG + '返回房间=========')
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_RETURNROOM, packet);
        }
    }

    public backGame(){
        const packet = new gamehall.gamehall.CSQuitGame();
        packet.Id = FruitsRoomData.instance.getGameFreeId();
        packet.IsAudience = false;
        console.log(SCFruits.TAG + '退出游戏=========')
        console.log(packet)
        console.log(SCFruits.TAG + '退出游戏=========')
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
        SocketPackTool.unregister(fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsRoomInfo);
        SocketPackTool.unregister(fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsOp);
        SocketPackTool.unregister(fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsRoomState);
        SocketPackTool.unregister(fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsPrize);
        SocketPackTool.unregister(fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsBilled);
        SocketPackTool.unregister(fruits.fruits.FruitsPID.PACKET_FRUITS_SCFruitsMaryBilled);
    }
}