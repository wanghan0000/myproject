
import { SocketDataTool, UnpackData } from "./SocketDataTool";
import { SocketPackTool } from "./SocketPackTool";
import { Utils } from "../utils/Utils";
import { CryptoTool } from "../libs/cryptos/CryptoTool";
import { ProjectConfig } from "../../ProjectConfig";
import login from "../../protocol/login.js";






let SocketBindBundleProtoId = login.login.GatePacketID.PACKET_SC_BINDBUNDLE;


let HeartbeatInterval = 5;                // socket 心跳间隔时间
let HeartbeatTimeout = 20;               // socket 心跳超时时间
let HeartbeatCheckInterval = 1 * 1000;         // socket 心跳验证间隔时间


export class SocketMgr {



    private static instance: SocketMgr | undefined;

    private socket: WebSocket | undefined = undefined;
    private dataTool: SocketDataTool | undefined = undefined;

    // 外部处理回调
    public onOpenCallback: Function | undefined = undefined;
    public onCloseCallback: Function | undefined = undefined;
    public onErrorCallback: Function | undefined = undefined;
    public onMessageCallback: Function | undefined = undefined;

    // socket心跳配置
    private heartbeatLastTS: number | undefined = undefined;                // socket 最后一次心跳时间
    private enterBackgroundTS: number | undefined = undefined;              // 切入后台时的时间
    private enterForegroundTS: number | undefined = undefined;              // 切回前景时的时间
    private heartbeatTimerHandle: number | undefined = undefined;           // 心跳计时器句柄





    // 
    private socketBundleKey: string = "";
    // 包的逻辑ID
    private logicID: number = 0;

    /**
     * 连接Socket: ws://127.0.0.1:11002
     * 
     * @param ip 
     * @param port 
     */
    public static connect(ip: string, port?: number,
        openCall?: Function, closeCall?: Function, errorCall?: Function, messageCall?: Function): boolean {

        if (SocketMgr.instance !== undefined) {
            console.log("Warn: SocketMgr.connect socket in connect !!!");
            return false;
        }

        let host = "ws://" + ip;
        if (port !== undefined) {
            host = host + ":" + port;
        }

        let instance = new SocketMgr();
        let socket = instance.connectWebSocket(host);
        if (undefined === socket) {
            return false;
        }

        SocketMgr.instance = instance;

        instance.socket = socket;
        // 增加回调
        instance.onOpenCallback = openCall;
        instance.onCloseCallback = closeCall;
        instance.onErrorCallback = errorCall;
        instance.onMessageCallback = messageCall;
        // 增加数据包工具
        instance.dataTool = new SocketDataTool();

        instance.socketBundleKey = CryptoTool.Md5(Utils.getAccurateTimeStampString());
        instance.logicID = 0;

        return true;
    }

    /**
     * 关闭 socket
     */
    public static close(): void {
        let instance = SocketMgr.instance;
        if (undefined === instance) {
            return;
        }

        let onCloseCallback = instance.onCloseCallback;

        // 先清理回调
        instance.onOpenCallback = undefined;
        instance.onCloseCallback = undefined;
        instance.onErrorCallback = undefined;
        instance.onMessageCallback = undefined;

        instance.enterBackgroundTS = undefined;
        instance.enterForegroundTS = undefined;

        if (instance.heartbeatTimerHandle !== undefined) {
            clearInterval(instance.heartbeatTimerHandle);
        }
        instance.heartbeatTimerHandle = undefined;
        if (instance !== undefined && instance.socket !== undefined) {
            instance.socket.close(1000, "Client active close !");
        }

        instance = undefined;

        if (onCloseCallback !== undefined) {
            onCloseCallback();
        }
    }

    /**
     * socket 发送消息
     * 
     * @param id 
     * @param pack 
     * @param bIsCheck 
     */
    public static send(packetId: number, pack: any, bIsCheck: boolean = false): void {
        console.log(new Date().toLocaleString() + " Info: SocketMgr.send: packetId=", packetId);
        let instance = SocketMgr.instance;
        if (undefined === instance) {
            console.log("Warn: SocketMgr.send: socket not connect, send failed !!!");
            return;
        }
        instance.sendPack(packetId, pack);
    }

    /**
     * 发送Ping
     */
    public static sendPing(): void {
        let pack = new login.login.CSPing();
        pack.TimeStamp = Utils.getAccurateTimeStamp();
        //pack.setTimestamp(Utils.getAccurateTimeStamp());
        SocketMgr.send(login.login.GatePacketID.PACKET_CS_PING, pack);
    }

    private connectWebSocket(host: string): WebSocket | undefined {
        // 创建 Socket
        try {
            let socket = new WebSocket(host);
            socket.binaryType = "arraybuffer"
            socket.onopen = this.onOpen.bind(this);
            socket.onclose = this.onClose.bind(this);
            socket.onerror = this.onError.bind(this);
            socket.onmessage = this.onMessage.bind(this);
            return socket;
        } catch (error: any) {
            console.log("Error: SocketMgr.connect socket create failed !!!");
            return undefined;
        }
    }

    private onOpen(event: Event): void {
        console.log("Info: SocketMgr socket onOpen !!!", event);

        // 发送验证
        this.sendAuth();
        //this.sendBindBundle();

        this.startHeartCheck();

        if (this.onOpenCallback !== undefined) {
            this.onOpenCallback();
        }
    }

    private onClose(event: CloseEvent): void {
        console.log("Warn: SocketMgr socket onClose !!!", event);

        SocketMgr.instance = undefined;

        if (this.heartbeatTimerHandle !== undefined) {
            clearInterval(this.heartbeatTimerHandle);
        }

        if (this.onCloseCallback !== undefined) {
            this.onCloseCallback();
        }
    }

    private onError(event: Event): void {
        console.log("Warn: SocketMgr socket onError !!!", event);
        SocketMgr.instance = undefined;

        if (this.heartbeatTimerHandle !== undefined) {
            clearInterval(this.heartbeatTimerHandle);
        }

        if (this.onErrorCallback !== undefined) {
            this.onErrorCallback();
        }
    }

    private onMessage(event: MessageEvent): void {
        // console.log("Info: SocketMgr socket onMessage !!!", event);

        this.heartbeatLastTS = Utils.getTimeStamp();
        if (this.dataTool !== undefined) {
            this.dataTool.recvData(event.data);
        }

        let unpackData: UnpackData | undefined;
        // 尝试解包
        for (let i = 0; i < 300; i++) {
            if (this.dataTool !== undefined) {
                unpackData = this.dataTool.unpack()
            }
            if (unpackData === undefined) {
                break;
            }
            this.onOneMessage(unpackData);
        }
    }

    private onOneMessage(unpackData: UnpackData): void {
        if (SocketBindBundleProtoId === unpackData.pack) {
            console.log("Info: socket bind bundle success.");

            // start heart check.
            this.startHeartCheck();

            // first force send once ping. update data.
            SocketMgr.sendPing();

            if (this.onOpenCallback !== undefined) {
                this.onOpenCallback();
            }

            return;
        }

        // send data ack.
        //if (unpackData.logicId === this.logicID + 1) {

        //服务器优化 不再需要判定logicId
        // let pack = new protocol.CSLogicAck();
        // pack.LogicNo = unpackData.logicId;
        // SocketMgr.send( protocol.MmoPacketID.PACKET_CS_LOGICACK,pack );
        //}

        if (undefined === unpackData.pack) {
            return;
        }

        let unpackHandleFunc = SocketPackTool.getUnpackHandleFunc(unpackData.protobufId);
        if (unpackHandleFunc !== undefined) {
            unpackHandleFunc(unpackData.pack);
        }
    }

    private sendPack(packetId: number, pack: any, bIsAuth: boolean = false): void {
        // if (!bIsAuth) {
        //     this.logicID++;
        // }
        let data: ArrayBuffer | undefined;
        if (this.dataTool !== undefined) {
            let packFunc = SocketPackTool.getPackFunc(packetId);
            if (packFunc !== null && packFunc !== undefined) {
                data = this.dataTool.pack(packetId, this.logicID, packFunc.encode(pack).finish());
            }
        }
        if (this.socket !== undefined && data !== undefined) {
            this.socket.send(data);
        }

    }

    /**
     * 发送连接验证
     */
    private sendAuth(): void {
        console.log("Info: SocketMgr.sendAuth.");

        // let pack = new sessionauth_pb.SSPacketAuth();
        // pack.setTimestamp(Utils.getTimeStamp());
        // let str = pack.getTimestamp() + ";" + ProjectConfig.AuthKey;
        // pack.setAuthkey(CryptoTool.Md5(str));
        // this.sendPack(corepacketid_pb.CoreBuiltinPacketID.PACKET_SS_AUTH, pack, true);
        let pack = new login.login.SSPacketAuth();
        pack.Timestamp = Utils.getTimeStamp();
        let str = pack.Timestamp + ";" + ProjectConfig.AuthKey;
        pack.AuthKey = CryptoTool.Md5(str);
        this.sendPack(login.login.GatePacketID.PACKET_CS_AUTH, pack, true);
    }

    /**
     * 发送绑定包
     * 不再发送。服务器优化掉了该消息
     */
    private sendBindBundle(): void {
        console.log("Info: SocketMgr.sendBindBundle.");
        // let pack = new gate_pb.CSBindBundle();
        // if (SocketMgr.instance !== undefined){
        //     pack.setBundlekey(SocketMgr.instance.socketBundleKey);
        // }
        // this.sendPack(packetid_pb.MmoPacketID.PACKET_CS_BINDBUNDLE, pack, true);

        let pack = new login.login.CSBindBundle();
        if (SocketMgr.instance !== undefined) {
            pack.BundleKey = SocketMgr.instance.socketBundleKey;
        }
        this.sendPack(login.login.GatePacketID.PACKET_CS_BINDBUNDLE, pack, true);
    }

    /**
     * socket 心跳验证
     */
    private startHeartCheck(): void {
        if (this.heartbeatTimerHandle !== undefined) {
            return;
        }

        this.enterBackgroundTS = undefined;
        this.enterForegroundTS = undefined;
        this.heartbeatLastTS = Utils.getTimeStamp();
        this.heartbeatTimerHandle = window.setInterval(this.heartCheck.bind(this), HeartbeatCheckInterval);
    }

    private heartCheck(): void {
        if (undefined === SocketMgr.instance) {
            return;
        }

        let ts = Utils.getTimeStamp();
        let delayTime: number = 0
        if (this.heartbeatLastTS !== undefined) {
            delayTime = ts - this.heartbeatLastTS;
        }

        // 如果从后台切为前台， 则丢弃切入后台时间
        if (this.enterBackgroundTS !== undefined && this.enterForegroundTS !== undefined) {
            delayTime -= this.enterForegroundTS - this.enterBackgroundTS;
        }

        // 如果距离上次心跳时间已经超时，则认为断网
        if (delayTime >= HeartbeatTimeout) {
            console.log("Warn: SocketMgr.heartCheck heartbeat timeout !!!");
            SocketMgr.close();
            return;
        }

        // 如果可以再次心跳
        if (delayTime >= HeartbeatInterval) {
            SocketMgr.sendPing();
            // 如果从后台切回，立即心跳
        } else if (this.enterBackgroundTS !== undefined && this.enterForegroundTS !== undefined) {
            SocketMgr.sendPing();
        }
    }

}
