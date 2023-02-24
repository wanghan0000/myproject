import { Ctor } from "../Type";
import _ from '../../protocol/tienlen.js';
import friend from "../../../../ScriptCore/protocol/friend.js";
import chat from "../../../../ScriptCore/protocol/chat.js";
import  tournament  from "../../protocol/tournament.js";

export default class OpcodeTypeHelper {
    private static _opcodeTypeMap: Map<number, Ctor> = new Map<number, Ctor>();
    private static _typeOpcodeMap: Map<Ctor, number> = new Map<Ctor, number>();
    private static _pkgPacketIdMap: Map<any, any> = new Map<any, any>();

    public static register(pkg: any) {
        for (const key in pkg) {
            if (Object.prototype.hasOwnProperty.call(pkg, key)) {
                const element = pkg[key];
                if (key.indexOf("PacketID") != -1 || key.indexOf("TOURNAMENTID")!=-1) {
                    for (const key2 in element) {
                        if (Object.prototype.hasOwnProperty.call(element, key2)) {
                            const element2 = element[key2];
                            let offset = key.indexOf("PacketID") !=-1 ?7:10;
                            let msgName = key2.substring(offset); //PACKET_
                            this._opcodeTypeMap.set(element2, pkg[msgName]);
                            this._typeOpcodeMap.set(pkg[msgName], element2);
                        }
                    }
                    this._pkgPacketIdMap.set(pkg, element);
                }
            }
        }
    }

    public static getPacketId(pkg: any) {
        return this._pkgPacketIdMap.get(pkg);
    }

    public static getOpcode(type: Ctor) {
        return this._typeOpcodeMap.get(type);
    }

    public static getType(opcode: number) {
        return this._opcodeTypeMap.get(opcode);
    }

    public static getPacketIDStr(id: number) {
        return _.tienlen.TienLenPacketID[id] || friend.friend.FriendPacketID[id] || chat.chat.ChatPacketID[id] || tournament.tournament.TOURNAMENTID[id];
    }

}