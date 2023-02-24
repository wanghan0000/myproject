import { _decorator, Component, Node, getLoadOpOfClearFlag, sys } from 'cc';
import { GameState } from '../../ScriptCore/gamestate/GameState';
import friend from '../../ScriptCore/protocol/friend.js';
import chat from '../../ScriptCore/protocol/chat.js';
import gamehall from '../../ScriptCore/protocol/gamehall';
import { DB_Createroom } from '../config/db_createroom';
import TienlenDefine from './TienlenDefine';
import TienlenHelper from './TienlenHelper';
import EventSystem from './common/EventSystem';
import { Evt_ChatChange } from './handlers/EventHandlers';
import { UserData } from '../../ScriptCore/data/UserData';
import activity from '../../ScriptCore/protocol/activity.js';
import { EventMgr } from '../../ScriptCore/events/eventmgr';
import { EventName } from '../../ScriptCore/events/EventName';
import { GameConst } from '../../ScriptCore/Lobby/Scripts/gameconfig/GameConst';
import tournament from './protocol/tournament.js';
const { ccclass, property } = _decorator;


export class TienlenRuntime {
    public static _isBackground: boolean = false;
    private static _gameCfg: gamehall.gamehall.SCGetGameConfig;
    private static _createCfg: { baseCoin?: number, roomMode?: number, gameMode?: number, playerNum?: number };
    private static _roomListLevel: number = 1;
    public static billTime: number = 0;
    public static chatTime: number = 0;
    public static recommendRefreshTime: number = 0;
    public static inviteRefreshTime: Map<number, number> = new Map<number, number>();
    public static recommendList: friend.friend.IFriendInfo[];
    public static signData: activity.activity.SCSignData;
    public static matchSignNum: tournament.tournament.SCSyncSignNum;
    public static matchStartFlag: boolean = false;
    public static matchInfos: tournament.tournament.SCTMInfos;
    public static matchSeasonInfo: tournament.tournament.SCTMSeasonInfo;
    private static _unreadRequestList: friend.friend.SCFriendApplyData;
    private static _unreadFriendChatList: friend.friend.SCFriendUnreadData;
    private static _chatLogMap: Map<number, chat.chat.IChatLog[]> = new Map<number, chat.chat.IChatLog[]>();

    public static set isBackground(value: boolean) {
        this._isBackground = value;
        if (value) {
            TienlenHelper.setMusicVolume(0);
        } else {
            TienlenHelper.setMusicVolume(1);
        }
    }
    public static get isBackground(): boolean {
        return this._isBackground;
    }

    public static get showAnimFlag(): boolean {
        if (this.isBackground) return false;
        return !this.isBackground && TienlenDefine.ShowAnimFlag;
    }

    public static get gameCfg(): gamehall.gamehall.SCGetGameConfig {
        this._gameCfg = this._gameCfg || GameState.getInstance().getGameConfRomote();
        return this._gameCfg;
    }

    public static set gameCfg(value: gamehall.gamehall.SCGetGameConfig) {
        this._gameCfg = value;
    }

    public static set createCfg(value: { roomMode?: number, gameMode?: number, playerNum?: number, playMode?: number }) {
        Object.assign(this.createCfg, value);
    }

    public static get createCfg(): { roomMode?: number, gameMode?: number, playerNum?: number } {
        if (!this._createCfg) {
            this._createCfg = { gameMode: 0, playerNum: 4, roomMode: 0 };
        }
        return this._createCfg;
    }

    public static get roomListLevel(): number {
        return this._roomListLevel;
    }

    public static set roomListLevel(value: number) {
        this._roomListLevel = value;
    }

    public static getChatLog(snId: number): chat.chat.IChatLog[] {
        if (this._chatLogMap.has(snId)) {
            return this._chatLogMap.get(snId);
        } else if (snId == 0) {
            let list: any = [];
            this._chatLogMap.set(snId, list);
            return list;
        }
    }

    public static setChatLog(snId: number, logs: chat.chat.IChatLog[]) {
        this._chatLogMap.set(snId, logs);
        logs.sort(this._sortChatLog);
    }

    public static hasChatLog(snId: number) {
        return this._chatLogMap.has(snId);
    }

    public static addChat(snId: number, chat: chat.chat.IChatLog) {
        this.getChatLog(snId)?.push(chat);
    }

    public static clearChat(snId: number) {
        let list = this.getChatLog(snId);
        list && (list.length = 0);
    }

    private static _sortChatLog(l: chat.chat.IChatLog, r: chat.chat.IChatLog) {
        return l.Ts - r.Ts;
    }

    public static set unreadFriendChatList(value: friend.friend.SCFriendUnreadData) {
        this._unreadFriendChatList = value;
    }

    public static get unreadFriendChatList() {
        this._unreadFriendChatList = this._unreadFriendChatList || new friend.friend.SCFriendUnreadData();
        this._unreadFriendChatList.FriendUnreads = this._unreadFriendChatList.FriendUnreads || [];
        return this._unreadFriendChatList;
    }

    public static set unreadRequestList(value: friend.friend.SCFriendApplyData) {
        this._unreadRequestList = value;
    }

    public static get unreadRequestList() {
        this._unreadRequestList = this._unreadRequestList || new friend.friend.SCFriendApplyData();
        this._unreadRequestList.FriendApplys = this._unreadRequestList.FriendApplys || [];
        return this._unreadRequestList;
    }


    public static addUnreadChat(snId: number) {
        let list = this.unreadFriendChatList;
        let target = this.getUnreadFriend(snId);
        if (target) {
            target.UnreadNum += 1;
        } else {
            target = new friend.friend.FriendUnread;
            target.Snid = snId;
            target.UnreadNum = 1;
            list.FriendUnreads.push(target);
        }
        EventSystem.instance.publish(Evt_ChatChange);
    }

    public static getUnreadFriend(snId: number) {
        let list = this.unreadFriendChatList;
        for (let index = 0; index < list.FriendUnreads.length; index++) {
            const element = list.FriendUnreads[index];
            if (element.Snid == snId) return element;
        }
    }

    public static clearUnreadChat(snId: number) {
        let target = this.getUnreadFriend(snId);
        if (target && target.UnreadNum > 0) {
            target.UnreadNum = 0;
            EventSystem.instance.publish(Evt_ChatChange);
        }
    }

    public static get totalUnreadNum(): number {
        let list = this.unreadFriendChatList;
        let total = 0;
        for (let index = 0; index < list.FriendUnreads.length; index++) {
            const element = list.FriendUnreads[index];
            total += element.UnreadNum;
        }
        return total;
    }

    public static addUnreadOpList(opList: friend.friend.SCFriendOp[]) {
        if (!opList || opList.length == 0) return;
        let selfSnid = UserData.getInstance().getSnId();
        this.unreadRequestList = this.unreadRequestList || new friend.friend.SCFriendApplyData();
        this.unreadRequestList.FriendApplys = this.unreadRequestList.FriendApplys || [];
        for (let index = 0; index < opList.length; index++) {
            const element = opList[index];
            if ((element.SnId == selfSnid && element.OpCode == 0) || element.OpCode == 1 || element.OpCode == 3) {//只收集别人对自己的申请操作和双向的同意和删除操作
                let apply = new friend.friend.FriendApply();
                // apply.Name = element.Friend.Name;
                // apply.Snid = element.Friend.SnId;
                // apply.CreateTs = element.Friend.CreateTs;
                (<any>apply)['OpCode'] = element.OpCode;
                this.unreadRequestList.FriendApplys.push(apply);
            }
        }
    }

    public static addUnreadChatMsgList(msgList: chat.chat.SCChatMsg[]) {
        if (!msgList || msgList.length == 0) return;
        let selfSnid = UserData.getInstance().getSnId();
        let list = this.unreadFriendChatList;
        for (let index = 0; index < msgList.length; index++) {
            const element = msgList[index];
            if (element.Msg2Snid == selfSnid) {
                let target = this.getUnreadFriend(element.Snid);
                if (target) {
                    target.UnreadNum += 1;
                } else {
                    let msg = new friend.friend.FriendUnread();
                    msg.Snid = element.Snid;
                    msg.UnreadNum = 1;
                    list.FriendUnreads.push(msg);
                }
            }
        }
    }

    public static sign() {
        this.signData.SignCount += 1;
        EventMgr.getInstance().dispatchEvent(EventName.SC_SIGN_UPDATE);
    }

    public static get getCoinCheck(): boolean {
        let flag = sys.localStorage.getItem("getCoinCheck");
        let nowDayStr = new Date().getDate().toString();
        let saveDayStr = sys.localStorage.getItem("getCoinCheckDate");
        if (flag == '1' && saveDayStr && nowDayStr != saveDayStr) {
            return false;
        }
        return flag == '1';
    }

    public static set getCoinCheck(value: boolean) {
        sys.localStorage.setItem("getCoinCheck", value ? '1' : '0');
    }

    public static saveCoinCheckDate() {
        let nowDay = new Date().getDate();
        sys.localStorage.setItem("getCoinCheckDate", nowDay.toString());
    }

    public static set matchName(value: string) {
        sys.localStorage.setItem("matchName", value);
    }

    public static get matchName(): string {
        return sys.localStorage.getItem("matchName");
    }

    public static set matchTitle(value: string) {
        sys.localStorage.setItem("matchTitle", value);
    }

    public static get matchTitle(): string {
        return sys.localStorage.getItem("matchTitle");
    }

    public static set matchType(value: number) {
        sys.localStorage.setItem("matchType", value.toString());
    }

    public static get matchType(): number {
        return parseInt(sys.localStorage.getItem("matchType"));
    }

    public static set cardTip(value: boolean) {
        sys.localStorage.setItem("cardTip", value ? "1" : "0");
    }

    public static get cardTip(): boolean {
        let value = sys.localStorage.getItem("cardTip");
        return value == "1" || value == null;//默认提示勾选
    }


}

