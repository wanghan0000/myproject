
/**
 * Socket 包数据处理工具.
 * 
 * 数据组成: [数据长度: UShort] [包数量自增Id: UShort] [Socket链接Id: Uint32] [验证码: Short] [协议Id: Short] [数据: 数据长度]
 * 包总大小: 2 + 2 + 4 + 2 + 2 + DataBufferLength = 12 + DataBufferLength
 */

import { SocketPackTool }                   from "./SocketPackTool";

export const PackNumMin                            = 0;
export const PackNumMax                            = 65535;
export const SendPackBufferLengthMax               = 1024 * 64;        // 64k
export const RecvPackBufferLengthMax               = 1024 * 64 * 100;  // 64K * 100
export const PackCheckCode                         = 1;
export const DataBufferLengthSkew                  = 4;

export namespace PackDataByteOffset {
    export const DataLength                 = 0;    // 数据长度: UShort
    export const PackNumId                  = 2;    // 包数量自增Id: UShort
    export const LogicID                    = 4;    // 发送包的逻辑ID
    export const CheckCode                  = 8;    // 验证码: Short
    export const ProtobufId                 = 10;   // 协议Id: Short
    export const Data                       = 12;   // 数据
}

export class UnpackData {
    public protobufId: number;
    public logicId: number;
    public pack: any;

    constructor(_protobufId: number, _logicId: number, _pack: any) {
        this.protobufId = _protobufId;
        this.logicId = _logicId;
        this.pack = _pack;
    }
}


export class SocketDataTool {

    private sendNum: number;
    private recvNum: number;

    private sendBuffer: ArrayBuffer;
    private recvBuffer: ArrayBuffer;

    private sendDataView: DataView;
    private recvDataView: DataView;

    private recvBufferLength: number;

    constructor() {
        this.sendNum = PackNumMin;
        this.recvNum = PackNumMin;

        this.sendBuffer = new ArrayBuffer(SendPackBufferLengthMax);
        this.recvBuffer = new ArrayBuffer(RecvPackBufferLengthMax);

        this.sendDataView = new DataView(this.sendBuffer);
        this.recvDataView = new DataView(this.recvBuffer);

        this.recvBufferLength = 0;
    }


    /**
     * 小游戏的封包
     * @param packetId 
     * @param logicId 
     * @param dataBuf 
     * @returns 
     */
    public miniGamePack(packetId:number,logicId:number,dataBuf:Uint8Array):ArrayBuffer{
        let sendBuffer = new ArrayBuffer(SendPackBufferLengthMax);
        let dataView = new DataView(sendBuffer);
        
        let dataByteLength = dataBuf.byteLength;

        dataView.setInt16(0, 1, true);
        dataView.setInt16(2, packetId, true);

        // 数据最低1个字符
        for (let i = 0; i < dataByteLength; i++) {
            dataView.setUint8(4 + i, dataBuf[i]);
        }
        return dataView.buffer.slice(0,dataByteLength + 4);
    }

    /**
     * 数据封包
     * 
     * @param packetId 
     * @param logicId 
     * @param dataBuf 
     */
    public pack(packetId: number, logicId: number, dataBuf: Uint8Array): ArrayBuffer {
        this.sendNum++;
        if (this.sendNum >= PackNumMax) {
            this.sendNum = PackNumMin;
        }

        let dataByteLength = dataBuf.byteLength;
        let packByteLength = PackDataByteOffset.Data + dataBuf.byteLength;

        // 头部  获取数据长度
        this.sendDataView.setUint16(PackDataByteOffset.DataLength, dataByteLength + DataBufferLengthSkew, true);
        //服务器自增的NumId
        this.sendDataView.setUint16(PackDataByteOffset.PackNumId, this.sendNum, true);
        this.sendDataView.setUint32(PackDataByteOffset.LogicID, logicId, true);

        this.sendDataView.setInt16(PackDataByteOffset.CheckCode, 1, true);
        this.sendDataView.setInt16(PackDataByteOffset.ProtobufId, packetId, true);

        // 数据最低1个字符
        for (let i = 0; i < dataByteLength; i++) {
            this.sendDataView.setUint8(PackDataByteOffset.Data + i, dataBuf[i]);
        }

        return this.sendDataView.buffer.slice(0, packByteLength);
    }

    public recvData(data: ArrayBuffer): void {
        // 新数据加入到缓存中
        let dataView = new DataView(data);
        for (let i = 0; i < data.byteLength; i++) {
            this.recvDataView.setUint8(this.recvBufferLength + i, dataView.getUint8(i));
        }
        this.recvBufferLength += data.byteLength;
    }

    public unpack(): UnpackData | undefined {
        // 数据包头数据是否完整
        if (this.recvBufferLength < PackDataByteOffset.Data) {
            return undefined;
        }

        // 数据包数据部分是否完整
        let dataBufferLength = this.recvDataView.getUint16(PackDataByteOffset.DataLength, true) - DataBufferLengthSkew;
        let packByteLength = dataBufferLength + PackDataByteOffset.Data;
        if (this.recvBufferLength < dataBufferLength + PackDataByteOffset.DataLength) {
            return undefined;
        }

        // 整个包数据
        let packDataBuffer = this.recvDataView.buffer.slice(0, packByteLength);

        // 剩余数据前移
        this.recvBufferLength -= packByteLength;
        if (this.recvBufferLength > 0) {
            for (let i = 0; i < this.recvBufferLength; i++) {
                this.recvDataView.setUint8(i, this.recvDataView.getUint8(packByteLength + i));
            }
        }

        // 解包数据
        return this.unpackData(packDataBuffer);
    }

    /**
     * 数据解包
     * 
     * @param packDataBuffer
     */
    private unpackData(packDataBuffer: ArrayBuffer): UnpackData | undefined {
        this.recvNum++;
        if (this.recvNum >= PackNumMax) {
            this.recvNum = PackNumMin;
        }

        let packDataView = new DataView(packDataBuffer);

        let dataExpectByteLength = packDataView.getUint16(PackDataByteOffset.DataLength, true) - DataBufferLengthSkew;
        let dataByteLength = packDataBuffer.byteLength - PackDataByteOffset.Data;
        if (dataExpectByteLength !== dataByteLength) {
            console.log("Error: SocketPackUtils.unpack: expect data length error !");
            return undefined;
        }
        //对应服务器端的seqnum 
        let num = packDataView.getUint16(PackDataByteOffset.PackNumId, true);
        if (num !== this.recvNum) {
            console.log("Error: SocketPackUtils.unpack: pack num error !");
            return undefined;
        }
        //服务器的logicId
        let logicId = packDataView.getUint32(PackDataByteOffset.LogicID, true);

        //对应服务器的编码格式。 1
        let checkCode = packDataView.getInt16(PackDataByteOffset.CheckCode, true);
        if (checkCode !== PackCheckCode) {
            console.log("Error: SocketPackUtils.unpack: check code error !");
            return undefined;
        }
        //
        let protobufId = packDataView.getInt16(PackDataByteOffset.ProtobufId, true);
        console.log("Info: SocketMgr.recv: packetId=", protobufId);
        // 数据最低1个字符8字节
        let dataView = new DataView(new ArrayBuffer(dataByteLength));
        for (let i = 0; i < dataByteLength; i++) {
            dataView.setUint8(i, packDataView.getUint8(PackDataByteOffset.Data + i))
        }
        let unpackFunc = SocketPackTool.getUnpackFunc(protobufId);
        let data: any = undefined;
        let uInt8Arr = new Uint8Array(dataView.buffer);
        if (unpackFunc !== undefined) {
            data = unpackFunc.decode(uInt8Arr);
        }
        return new UnpackData(protobufId, logicId, data);
    }
}