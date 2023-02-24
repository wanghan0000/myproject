import { GameConst } from "../../../ScriptCore/Lobby/Scripts/gameconfig/GameConst";
import gamehall from "../../../ScriptCore/protocol/gamehall.js";
import tienlen from "../protocol/tienlen.js";
import TienlenHelper from "../TienlenHelper";
import { TienlenRuntime } from "../TienlenRuntime";

export class TienlenGameData {
    private static _instance: TienlenGameData;
    public static get instance(): TienlenGameData {
        this._instance = this._instance || new TienlenGameData();
        return this._instance;
    }
    public roomInfo: tienlen.tienlen.ISCTienLenRoomInfo;
    public selfPlayerData: tienlen.tienlen.ITienLenPlayerData;
    public roomCfg: gamehall.gamehall.IGameConfig1;
    public isNewRound: boolean = true;
    public gainItems: { [k: string]: number };
    public lastCards: number[];
    public get isTraditonal(): boolean {
        if (!this.roomInfo) return true;
        return GameConst.isTraditonal(this.roomInfo.GameId);
    }

    public get isFightToEnd(): boolean {
        if (!this.roomInfo) return false;
        return this.roomInfo.GameId == GameConst.GameId_TienLenEx || this.roomInfo.GameId == GameConst.GameId_TienLenYLEx;
    }

    public get isMatch(): boolean {
        return this.roomInfo && this.roomInfo.IsMatch > 0;
    }

    public get matchType(): number {
        let type = TienlenRuntime.matchType;
        if (type == -1) {
            return this.roomInfo && this.roomInfo.IsMatch;
        } else {
            return type;
        }
    }

    public defaultCards: number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

    public get isAudience(): boolean {
        return TienlenHelper.isAudience(this.selfPlayerData.Flag);
    }

    clear() {
        this.roomInfo = null;
        this.selfPlayerData = null;
        this.roomCfg = null;
    }

}

