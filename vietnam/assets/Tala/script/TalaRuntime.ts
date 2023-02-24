import { UserData } from "../../ScriptCore/data/UserData";
import gamehall from "../../ScriptCore/protocol/gamehall.js";
import tala from "./protocol/tala.js";
import TalaDefine from "./TalaDefine";
import TalaHelper from "./TalaHelper";
import { TalaGame } from "./view/TalaGame";

export default class TalaRuntime {
    private static _instance: TalaRuntime;
    public static get instance(): TalaRuntime {
        if (this._instance == null) {
            this._instance = new TalaRuntime();
        }
        return this._instance;
    }

    public static clear() {
        this._instance = null;
    }

    private _isBackground: boolean;
    public get isBackground(): boolean {
        return this._isBackground;
    }
    public set isBackground(value: boolean) {
        this._isBackground = value;
    }

    public get showAnimFlag(): boolean {
        if (this.isBackground) return false;
        return !this.isBackground && TalaDefine.ShowAnimFlag;
    }

    private _roomInfo: tala.tala.SCTaLaRoomInfo;
    public set roomInfo(value: tala.tala.SCTaLaRoomInfo) {
        this._roomInfo = value;
        let snId = UserData.getInstance().getSnId();
        let list = value.Players;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element.SnId == snId) {
                this.selfPlayerData = element;
                break;
            }
        }
    }
    public get roomInfo(): tala.tala.SCTaLaRoomInfo {
        return this._roomInfo;
    }

    private _selfPlayerData: tala.tala.ITaLaPlayerData;
    public get selfPlayerData(): tala.tala.ITaLaPlayerData {
        return this._selfPlayerData;
    }
    public set selfPlayerData(value: tala.tala.ITaLaPlayerData) {
        this._selfPlayerData = value;
    }

    private _gameCfg: gamehall.gamehall.SCGetGameConfig;
    public set gameCfg(value: gamehall.gamehall.SCGetGameConfig) {
        this._gameCfg = value;
    }
    public get gameCfg(): gamehall.gamehall.SCGetGameConfig {
        return this._gameCfg;
    }

    public get isAudience(): boolean {
        return TalaHelper.isAudience(this.selfPlayerData?.Flag);
    }

    public getPlayerData(snid: number) {
        let players = this.roomInfo.Players;
        for (let index = 0; index < players.length; index++) {
            const element = players[index];
            if (element.SnId == snid) return element;
        }
        return null;
    }

    private _eatCardId: number;
    public get eatCardId(): number {
        return this._eatCardId;
    }
    public set eatCardId(value: number) {
        this._eatCardId = value;
    }

    private _lastPlaySnid: number = -1;
    public get lastPlaySnid(): number {
        return this._lastPlaySnid;
    }
    public set lastPlaySnid(value: number) {
        this._lastPlaySnid = value;
    }

    private _lastRoundOpIndex: number = 0;
    public get lastRoundOpIndex(): number {
        return this._lastRoundOpIndex;
    }
    public set lastRoundOpIndex(value: number) {
        if (this.lastRoundOpIndex == value) return;
        this._lastRoundOpIndex = value;
        TalaGame.instance?.setBtnPlayType(value);
    }

    private _showPhoms: tala.tala.ISCTaLaShowPhom[];

    public clearShowPhoms() {
        this._showPhoms = [];
    }

    public addShowPhoms(phoms: tala.tala.ISCTaLaShowPhom) {
        this._showPhoms = this._showPhoms || [];
        this._showPhoms.push(phoms);
    }

    public getShowPhoms(snId: number) {
        let phoms = TalaRuntime.instance.showPhoms;
        for (let index = 0; index < phoms.length; index++) {
            const element = phoms[index];
            if (element.Snid == snId) {
                return element;
            }
        }
    }

    public get showPhoms(): tala.tala.ISCTaLaShowPhom[] {
        return this._showPhoms;
    }

}