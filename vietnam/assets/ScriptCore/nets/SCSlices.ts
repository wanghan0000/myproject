/**
 * slices.proto
 */

/**
 * 大数据分包合成
 * 
 * 数据组成: [未知: Short] [协议Id: Short] [数据: 数据长度]
 * 包总大小: 2 + 2 + DataBufferLength = 4 + DataBufferLength
 */




// let corepacketid_pb                         = require("../protocols/corepacketid_pb.js");
// let slices_pb                               = require("../protocols/slices_pb.js");

// import * as corepacketid_pb from "../../protocol/corepacketid";
// import * as slices_pb from "../../protocol/slices";

let PackBufferLengthMax                     = 1024 * 64 * 100;  // 64K * 100

let recvBufferLength: number                = 0;
let recvBuffer: ArrayBuffer                 = new ArrayBuffer(PackBufferLengthMax);
let recvDataView: DataView                  = new DataView(recvBuffer);

namespace PackDataByteOffset {
    export const Unknown                    = 0;    // 
    export const ProtobufId                 = 2;   // 协议Id: Short
    export const Data                       = 4;   // 数据
}


// SocketPackTool.register(function(msg: any): void {

//     let offset: number = msg.getOffset();
//     let data: Uint8Array = msg.getPacketdata();
//     let totalSize: number = msg.getTotalsize();
//     let totalBufferLength = offset + data.byteLength;

//     // 接收一个新的消息
//     if (0 === offset) {
//         recvBufferLength = 0;
//     }

//     if (offset >= 0 && offset <= PackBufferLengthMax) {
//         for (let i = 0; i < data.byteLength; i++) {
//             recvDataView.setUint8(recvBufferLength + i, data[i]);
//         }
//         recvBufferLength += data.byteLength;
//     }

//     // 接收完成
//     if (totalSize == totalBufferLength) {
//         let protobufId = recvDataView.getInt16(PackDataByteOffset.ProtobufId);
//         // 整个包数据
//         let packDataBuffer = recvDataView.buffer.slice(PackDataByteOffset.Data, totalBufferLength - 4);
//         let unpackFunc = SocketPackTool.getUnpackFunc(protobufId);
//         let handleFunc = SocketPackTool.getUnpackHandleFunc(protobufId);
//         if (unpackFunc !== undefined && handleFunc !== undefined) {
//             let data = unpackFunc.deserializeBinary(packDataBuffer);
//             handleFunc(data);
//         }
//     }

// }, protocol.CoreBuiltinPacketID.PACKET_SS_SLICES, protocol.SSPacketSlices);