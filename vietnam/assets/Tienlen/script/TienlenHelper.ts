import { Animation, AssetManager, AudioClip, AudioSource, BitmapFont, BlockInputEvents, Component, director, find, ITweenOption, Node, Prefab, Scheduler, SpriteFrame, sys, Tween, tween, TweenAction, TweenSystem, UIOpacity, UITransform, Vec3 } from "cc";
import { UserData } from "../../ScriptCore/data/UserData";
import { EventMgr } from "../../ScriptCore/events/eventmgr";
import { EventName } from "../../ScriptCore/events/EventName";
import { GameState } from "../../ScriptCore/gamestate/GameState";
import { UIMgr } from "../../ScriptCore/Lobby/Scripts/UIMgr";
import { SocketMgr } from "../../ScriptCore/panda/net/SocketMgr";
import { PoolManager } from "../../ScriptCore/panda/utils/poolmgr";
import { ProjectConfig } from "../../ScriptCore/ProjectConfig";
import gamehall from "../../ScriptCore/protocol/gamehall.js";
import { UIManager } from "../../ScriptCore/UIFrame/UIManager";
import { UIRoot } from "../../ScriptCore/UIFrame/UIRoot";
import { CancelationToken } from "./common/async/CancelationToken";
import { TaskFactory } from "./common/async/TaskFactory";
import { Card } from "./common/component/Card";
import { PlayerStateFlag, TienlenCardColor, TienlenCardPoint, TienlenCardType } from "./common/define";
import EventSystem from "./common/EventSystem";
import CardHelper from "./common/helper/CardHelper";
import ResourceHelper from "./common/helper/ResourceHelper";
import TienlenDefine, { ItemIconType } from "./TienlenDefine";
import { TienlenGameData } from "./model/TienlenGameData";
import tienlen from "./protocol/tienlen.js";
import { SpineEffect } from "./view/SpineEffect";
import { TienlenTips } from "./view/TienlenTips";
import { TienlenGame } from "./view/TienlenGame";
import ObjectWait from "./common/async/ObjectWait";
import { TienlenRuntime } from "./TienlenRuntime";
import { GameConst } from "../../ScriptCore/Lobby/Scripts/gameconfig/GameConst";
import { DB_Createroom } from "../config/db_createroom";
import OpcodeTypeHelper from "./common/helper/OpcodeTypeHelper";
import player from "../../ScriptCore/protocol/player.js";
import friend from "../../ScriptCore/protocol/friend.js";
import chat from "../../ScriptCore/protocol/chat.js";
import activity from "../../ScriptCore/protocol/activity.js";
import { WndSocialTips2 } from "./friend/WndSocialTips2";
import { AudioMgr } from "../../ScriptCore/audio/AudioMgr";
import { SceneEffect } from "./view/SceneEffect";
import tournament from "./protocol/tournament.js";
import { MatchPromotion } from "./match/MatchPromotion";
import { I18nMgr } from "../../ScriptCore/i18n/I18nMgr";
import { Utils } from "../../ScriptCore/panda/utils/Utils";
import { DB_GamMatchLV } from "../config/db_gammatchlv";
import * as i18n from 'db://i18n/LanguageData';
import welfare from "../../ScriptCore/protocol/welfare.js";
import { TienlenUIMgr } from "./TienlenUIMgr";

export default class TienlenHelper {
    private static _sNode: Node = new Node();
    private static _curMusic: string = "";
    public static async hideLobbyWaiting() {
        await UIMgr.getInstance().clearWaiting()
    }














    public static async showLoading() {

        return await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabLoadingName}`);
    }

    public static async hideLoading() {
        await UIManager.getInstance().closeForm(`${TienlenDefine.ABName}/${TienlenDefine.PrefabLoadingName}`);
    }

    public static async showSelect() {
        await UIManager.getInstance().openScreen(`${TienlenDefine.ABName}/${TienlenDefine.PrefabSelectName}`);
        //检测是否断线重连
        this.checkReconnect();
        //检测是否显示签到
        this.checkShowSign();
    }

    public static checkSelectIsShow(): boolean {
        return UIManager.getInstance().checkFormShowing(`${TienlenDefine.ABName}/${TienlenDefine.PrefabSelectName}`);
    }

    public static checkGameIsShow(): boolean {
        let flag1 = UIManager.getInstance().checkFormShowing(`${TienlenDefine.ABName}/${TienlenDefine.PrefabGameName}`);
        let flag2 = UIManager.getInstance().checkFormShowing(`${TienlenDefine.ABName}/${TienlenDefine.PrefabMatchGameName}`)
        return flag1 || flag2;
    }

    public static checkGameIsLoading(): boolean {
        let flag1 = UIManager.getInstance().checkFormLoading(`${TienlenDefine.ABName}/${TienlenDefine.PrefabGameName}`);
        let flag2 = UIManager.getInstance().checkFormLoading(`${TienlenDefine.ABName}/${TienlenDefine.PrefabMatchGameName}`);
        return flag1 || flag2;
    }

    public static checkLoadingIsShowOrLoad(): boolean {
        return UIManager.getInstance().checkFormShowing(`${TienlenDefine.ABName}/${TienlenDefine.PrefabLoadingName}`) ||
            UIManager.getInstance().checkFormLoading(`${TienlenDefine.ABName}/${TienlenDefine.PrefabLoadingName}`);
    }

    public static checkMatchWaitingIsShow(): boolean {
        return UIManager.getInstance().checkFormShowing(`${TienlenDefine.ABName}/${TienlenDefine.PrefabMatchWaitName}`);
    }

    public static checkMatchPromotionIsLoading(): boolean {
        return UIManager.getInstance().checkFormLoading(`${TienlenDefine.ABName}/${TienlenDefine.PrefabMatchPromotionName}`);
    }

    // private static async checkShowSign() {
    //     let roomId = UserData.getInstance().getRoomId();
    //     let gameFreeId = UserData.getInstance().getGameFreeId();
    //     if (roomId != null && roomId != 0 && gameFreeId != null && gameFreeId != 0) {
    //     } else {
    //         let ret = await TienlenHelper.callSignData();
    //         TienlenRuntime.signData = ret;
    //         if (ret.SignCount < 14 && ret.TodaySign == 0) {
    //             // await TienlenHelper.wait(1);
    //             TienlenHelper.showSign(ret);
    //         }
    //     }
    // }

    private static async checkShowSign() {
        let roomId = UserData.getInstance().getRoomId();
        let gameFreeId = UserData.getInstance().getGameFreeId();
        if (roomId != null && roomId != 0 && gameFreeId != null && gameFreeId != 0) {
        } else {
            let ret = await TienlenHelper.callSignData();
            console.log("seven sign DrawTurnplate:", ret.DrawTurnplate);
            if (ret.DrawTurnplate == 2) {
                // await TienlenHelper.wait(1);
                TienlenUIMgr.getInstance().showTienLenSevenSign(ret);
            }
        }
    }

    public static checkReconnect() {
        let roomId = UserData.getInstance().getRoomId();
        let gameFreeId = UserData.getInstance().getGameFreeId();
        if (roomId != null && roomId != 0 && gameFreeId != null && gameFreeId != 0) {
            UserData.getInstance().setRoomId(0);
            UserData.getInstance().setGameFreeId(0);
            let gameConfRomote = GameState.getInstance().getGameConfRomote();
            TienlenGameData.instance.roomCfg = gameConfRomote.GameCfg.find((value) => {
                if (value.LogicId == gameFreeId) return value;
            })
            let packet = new gamehall.gamehall.CSReturnRoom();
            packet.RoomId = roomId;
            packet.IsLoaded = true;
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_RETURNROOM, packet);
        } else if (TienlenHelper.checkGameIsShow()) { //不在游戏中直接退出game
            this.hideGame();
        }
    }

    public static async getTienlenGame(): Promise<TienlenGame> {
        let view = TienlenGame.instance;
        if (!view) {
            view = await ObjectWait.instance.wait(TienlenGame);
        }
        return view;
    }

    public static async showGame(...args: any[]) {
        UIRoot.getInstance().startBlock();
        SpineEffect.playEnter();
        await TienlenHelper.wait(1);
        TienlenHelper.stopLongSound();
        TienlenHelper.playMusic(TienlenDefine.MusicGame);
        await UIManager.getInstance().closeAllWin();
        await WndSocialTips2.hideAll();
        await UIManager.getInstance().openScreen(`${TienlenDefine.ABName}/${TienlenDefine.PrefabGameName}`, ...args)
        UIRoot.getInstance().stopBlock();
    }

    public static async hideGame(...args: any[]) {
        TienlenHelper.playMusic(TienlenDefine.MusicHall);
        await UIManager.getInstance().closeForm(`${TienlenDefine.ABName}/${TienlenDefine.PrefabGameName}`)
    }


    public static async showMatchGame(...args: any[]) {
        UIRoot.getInstance().startBlock();
        TienlenHelper.stopLongSound();
        TienlenHelper.playMusic(TienlenDefine.MusicGame);
        await UIManager.getInstance().openScreen(`${TienlenDefine.ABName}/${TienlenDefine.PrefabMatchGameName}`, ...args)
        UIRoot.getInstance().stopBlock();
    }

    public static async hideMatchGame(...args: any[]) {
        TienlenHelper.playMusic(TienlenDefine.MusicMatchBGM);
        await UIManager.getInstance().closeForm(`${TienlenDefine.ABName}/${TienlenDefine.PrefabMatchGameName}`)
    }


    public static async showMatch(...args: any[]) {
        UIMgr.getInstance().showWaiting();
        await UIManager.getInstance().openScreen(`${TienlenDefine.ABName}/${TienlenDefine.PrefabMatchName}`, ...args)
        UIMgr.getInstance().clearWaiting();
        await TienlenHelper.wait(0.2);
        TienlenHelper.playSound(TienlenDefine.SoundMatchEnter);
        TienlenHelper.playMusic(TienlenDefine.MusicMatchBGM);
    }

    public static async showMatchWaiting(...args: any[]) {
        // UIMgr.getInstance().showWaiting();
        await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabMatchWaitName}`, ...args)
        TienlenHelper.playSound(TienlenDefine.SoundMatchWaiting);
        // UIMgr.getInstance().clearWaiting();
    }

    public static async showMatchPromotion(...args: any[]) {
        // UIMgr.getInstance().showWaiting();
        await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabMatchPromotionName}`, ...args)
        // UIMgr.getInstance().clearWaiting();
    }

    public static checkMatchPromotionLoading() {
        return UIManager.getInstance().checkFormLoading(`${TienlenDefine.ABName}/${TienlenDefine.PrefabMatchPromotionName}`);
    }

    public static async showSocial(...args: any[]) {
        await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabSocial}`, ...args)
    }

    public static async showRecommendList(...args: any[]) {
        await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabRecommendList}`, ...args)
    }

    public static async showUserInfo(...args: any[]) {
        await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabUserInfo}`, ...args)
    }

    public static async showSocialTips(...args: any[]) {
        await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabSocialTips}`, ...args)
    }

    public static async showSocialTips3(...args: any[]) {
        await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabSocialTips3}`, ...args)
    }

    public static async showEmotion(...args: any[]) {
        await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabEmotion}`, ...args)
    }


    public static async showInviteList(...args: any[]) {
        await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabInviteList}`, ...args)
    }


    public static async showInvite(...args: any[]) {
        await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabInvite}`, ...args)
    }


    public static async showSign(...args: any[]) {
        await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabSign}`, ...args)
    }

    public static async showGetCoin(...args: any[]) {
        await UIManager.getInstance().openWin(`${TienlenDefine.ABName}/${TienlenDefine.PrefabGetCoin}`, ...args)
    }

    public static getItemIconType(itemID: number) {
        if (itemID == 1) return ItemIconType.GOLD;
        else if (itemID == 2) return ItemIconType.DIAMOND;
        else if (itemID == 10001) return ItemIconType.CHICKEN;
        else if (itemID == 20001) return ItemIconType.BOY;
        else if (itemID == 20002) return ItemIconType.GIRL;
        else if (itemID == 40001) return ItemIconType.TICKET;
        else return ItemIconType.VCARD;
    }

    public static async getItemSF(itemID: number) {
        let type = this.getItemIconType(itemID);
        let path = '';
        if (type == ItemIconType.CHICKEN) {
            path = 'rawRes/common/icon_cw1/spriteFrame';
        } else if (type == ItemIconType.VCARD) {
            path = 'rawRes/common/vcardBig/spriteFrame';
        } else if (type == ItemIconType.GIRL) {
            path = 'rawRes/common/icon_nv1/spriteFrame';
        } else if (type == ItemIconType.BOY) {
            path = 'rawRes/common/icon_nan1/spriteFrame';
        } else if (type == ItemIconType.TICKET) {
            path = 'rawRes/common/ticketBig/spriteFrame';
        }
        if (!path) return null;
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, path, SpriteFrame);
        return sf;
    }

    public static async getRankNoSF(mainRank: number, subRank: number) {
        let str = "";
        if (mainRank == 3 || mainRank == 5 || mainRank == 6) {
            str = "mainRank_blue";
        } else if (mainRank == 4 || mainRank == 7) {
            str = "mainRank_yellow";
        } else if (mainRank == 1) {
            str = "mainRank_xuantie";
        } else {
            str = "mainRank_qingtong";
        }
        let path = `rawRes/match/duanwei/${str}/${subRank}/spriteFrame`;
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, path, SpriteFrame);
        return sf;
    }

    /**
     * 根据角色id或者宠物id获得对应预制件
     * @param id  宠物:(100w,200w) 角色:200w+
     */
    public static async getModelPfb(id: number) {
        if (id >= 1000000 && id < 2000000) {
            return await ResourceHelper.loadResInAB(TienlenDefine.ABName, "scenesel3d/prefab/chicken", Prefab);
        } else {
            let idx = id - 2000001;
            if (idx == 0) {
                return await ResourceHelper.loadResInAB(TienlenDefine.ABName, "scenesel3d/prefab/famale", Prefab);
            } else if (id == 1) {
                return await ResourceHelper.loadResInAB(TienlenDefine.ABName, "scenesel3d/prefab/male", Prefab);
            }
        }
    }

    public static async getModel2DPfb(id: number) {
        if (id >= 1000000 && id < 2000000) {
            return await ResourceHelper.loadResInAB(TienlenDefine.ABName, "prefab/model2D/chicken2D", Prefab);
        } else {
            let idx = id - 2000001;
            if (idx == 0) {
                return await ResourceHelper.loadResInAB(TienlenDefine.ABName, "prefab/model2D/famale2D", Prefab);
            } else if (idx == 1) {
                return await ResourceHelper.loadResInAB(TienlenDefine.ABName, "prefab/model2D/male2D", Prefab);
            }
        }
    }

    public static async checkEnterGame(gameId: number) {
        let cfg = await this.callGameCfg(gameId);
        TienlenRuntime.gameCfg = cfg;
        let roomId = this.getRoomId(gameId);
        return await TienlenHelper.callEnterGame(roomId);
    }

    public static getRoomId(gameId: number): number {
        let cfg = TienlenRuntime.gameCfg;
        return cfg.GameCfg[0].LogicId;
    }

    //playMode 0 经典 1 娱乐
    public static async callQueryAllRoom(playMode: number, level: number) {
        if (playMode == 0) {
            let msg = await this.callQueryRoom([GameConst.GameId_TienLen, GameConst.GameId_TienLenEx], level);
            return msg.RoomInfo;
        } else {
            let msg = await this.callQueryRoom([GameConst.GameId_TienLenYL, GameConst.GameId_TienLenYLEx], level);
            return msg.RoomInfo;
        }
    }

    /**
       * 
       * @param gameId 
       * @param level 1 初级 2 中级 3 高级
       */
    public static async callQueryRoom(gameIds: number[], level: number) {
        let response = await new Promise<gamehall.gamehall.SCQueryRoomInfo>((r) => {
            let pack = new gamehall.gamehall.CSQueryRoomInfo();
            pack.GameIds = gameIds;
            pack.GameSite = level;
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_QUERYROOMINFO, pack);
            EventMgr.getInstance().once(EventName.SC_QUERYROOM, (msg: gamehall.gamehall.SCQueryRoomInfo) => {
                r(msg);
            }, this);
        });
        return response;
    }
    /**
     * 
     * @param gameId 207经典 208娱乐
     * @param baseCoin 
     * @param sceneMode 0 公共 2 私人
     * @param maxPlayerNum  4/2
     */
    public static async callCreateRoom(gameId: number, baseCoin: number, sceneMode: number, maxPlayerNum: number) {
        let response = await new Promise<gamehall.gamehall.SCCreateRoom>((r) => {
            let pack = new gamehall.gamehall.CSCreateRoom();
            pack.GameId = gameId;
            pack.BaseCoin = baseCoin;
            pack.SceneMode = sceneMode;
            pack.MaxPlayerNum = maxPlayerNum;
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_CREATEROOM, pack);
            EventMgr.getInstance().once(EventName.SC_CREATEROOM, (msg: gamehall.gamehall.SCCreateRoom) => {
                r(msg);
            }, this);
        });
        return response;
    }


    public static async callEnterRoom(gameId: number, roomId: number) {
        let response = await new Promise<gamehall.gamehall.SCEnterRoom>((r) => {
            let pack = new gamehall.gamehall.CSEnterRoom();
            pack.GameId = gameId;
            pack.RoomId = roomId;
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_ENTERROOM, pack);
            EventMgr.getInstance().once(EventName.SC_EnterRoom, (msg: gamehall.gamehall.SCEnterRoom) => {
                r(msg);
            }, this);
        });
        return response;
    }

    public static async callAudienceEnterRoom(gameId: number, roomId: number) {
        let response = await new Promise<gamehall.gamehall.SCEnterRoom>((r) => {
            let pack = new gamehall.gamehall.CSEnterRoom();
            pack.GameId = gameId;
            pack.RoomId = roomId;
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_AUDIENCE_ENTERROOM, pack);
            EventMgr.getInstance().once(EventName.SC_EnterRoom, (msg: gamehall.gamehall.SCEnterRoom) => {
                r(msg);
            }, this);
        });
        return response;
    }

    public static async callGameCfg(gameId: number) {
        let response = await new Promise<gamehall.gamehall.SCGetGameConfig>((r) => {
            let pack = new gamehall.gamehall.CSGetGameConfig();
            pack.GameId = gameId;
            pack.Channel = ProjectConfig.Channel_ID;
            pack.Platform = ProjectConfig.Platform_ID;
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_GETGAMECONFIG, pack);
            EventMgr.getInstance().once(EventName.SC_GET_GAME_CONFIG, (msg: gamehall.gamehall.SCGetGameConfig) => {
                r(msg);
            }, this);
        });
        return response;
    }

    public static async callEnterGame(roomId: number) {
        let ret = await new Promise<number>((r) => {
            let enterGame = new gamehall.gamehall.CSEnterGame();
            enterGame.Id = roomId;
            enterGame.Platform = ProjectConfig.Platform_ID;
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_ENTERGAME, enterGame);
            EventMgr.getInstance().once(EventName.SC_EnterGame, (msg: gamehall.gamehall.SCEnterGame) => {
                r(msg.OpCode);
            }, this);
        })
        // if (ret != 0) {//服务器没开放,这里走测试消息
        //     let msg = new tienlen.tienlen.SCTienLenRoomInfo();
        //     for (let i = 0; i < 4; ++i) {
        //         let player = new tienlen.tienlen.TienLenPlayerData();
        //         player.Cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        //         player.SnId = 40693100 + i;
        //         player.Pos = i;
        //         player.GameCoin = 10000;
        //         player.Head = Math.floor(Math.random() * 10);
        //         player.Name = '路人' + i;
        //         msg.Players.push(player);
        //     }
        //     msg.RoomId = 10000 + index;
        //     let handler = EventSystem.instance.messageHandlers.get(tienlen.tienlen.TienLenPacketID.PACKET_SCTienLenRoomInfo)[0];
        //     handler.run(msg);
        // }
        return ret;
    }

    public static async callLeaveRoom() {
        let ret = await new Promise<number>((r) => {
            let msg = new gamehall.gamehall.CSLeaveRoom();
            msg.Mode = 0; //0 退出 1 暂离
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_LEAVEROOM, msg);
            //非旁观者成功不会发送sc_leaveroom,失败才会发送
            //旁观者成功会发送sc_leaveroom,不会发送sc_quit_game
            // EventMgr.getInstance().once(EventName.SC_QUIT_GAME, (msg: gamehall.gamehall.SCQuitGame) => {
            //     r(msg.OpCode);
            // }, this);
            EventMgr.getInstance().once(EventName.SC_LeaveRoom, (msg: gamehall.gamehall.SCLeaveRoom) => {
                r(msg.OpRetCode);
            }, this);
        })
        return ret;
    }

    public static async callTMInfo() {
        let ret = await new Promise<tournament.tournament.SCTMInfos>((r) => {
            let op = new tournament.tournament.CSTMInfo();
            let pkgId = tournament.tournament.TOURNAMENTID.PACKET_TM_CSTMInfo;
            SocketMgr.send(pkgId, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(tournament.tournament.TOURNAMENTID.PACKET_TM_SCTMInfos), (msg: tournament.tournament.SCTMInfos) => {
                r(msg);
            }, this);
        })
        return ret;
    }
    //0 报名 1 取消
    public static async callSignRace(opcode: number, raceId: number) {
        let ret = await new Promise<number>((r) => {
            let op = new tournament.tournament.CSSignRace();
            op.OpCode = opcode;
            op.TMId = raceId;
            let pkgId = tournament.tournament.TOURNAMENTID.PACKET_TM_CSSignRace;
            SocketMgr.send(pkgId, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(tournament.tournament.TOURNAMENTID.PACKET_TM_SCSignRace), (msg: tournament.tournament.SCSignRace) => {
                r(msg.RetCode);
                if (opcode == 0) {
                    if (msg.RetCode == 1) {
                        TienlenHelper.showFloatTips('重复报名');
                    } else if (msg.RetCode == 2) {
                        TienlenHelper.showFloatTips('比赛场次没有开');
                    } else if (msg.RetCode == 3) {
                        TienlenHelper.showFloatTips('道具不足,请去锦标赛获取');
                    } else if (msg.RetCode == 4) {
                        TienlenHelper.showFloatTips('不在报名时间内');
                    } else if (msg.RetCode == 5) {
                        TienlenHelper.showFloatTips('金币不足');
                    } else if (msg.RetCode == 6) {
                        TienlenHelper.showFloatTips('钻石不足');
                    } else if (msg.RetCode != 0) {
                        TienlenHelper.showFloatTips(`报名失败:${msg.RetCode}`);
                    }
                } else {
                    if (msg.RetCode != 0)
                        TienlenHelper.showFloatTips(`取消报名失败:${msg.RetCode}`);
                }
            }, this);
        })
        return ret;
    }

    public static async callRankList(raceId: number) {
        let ret = await new Promise<tournament.tournament.SCTMRankList>((r) => {
            let op = new tournament.tournament.CSTMRankList();
            op.TMId = raceId;
            let pkgId = tournament.tournament.TOURNAMENTID.PACKET_TM_CSTMRankList;
            SocketMgr.send(pkgId, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(tournament.tournament.TOURNAMENTID.PACKET_TM_SCTMRankList), (msg: tournament.tournament.SCTMRankList) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    public static async callSeasonInfo() {
        let ret = await new Promise<tournament.tournament.SCTMSeasonInfo>((r) => {
            let op = new tournament.tournament.CSTMSeasonInfo();
            let pkgId = tournament.tournament.TOURNAMENTID.PACKET_TM_CSTMSeasonInfo;
            SocketMgr.send(pkgId, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(tournament.tournament.TOURNAMENTID.PACKET_TM_SCTMSeasonInfo), (msg: tournament.tournament.SCTMSeasonInfo) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    public static async callSeasonRank() {
        let ret = await new Promise<tournament.tournament.SCTMSeasonRank>((r) => {
            let op = new tournament.tournament.CSTMSeasonRank();
            let pkgId = tournament.tournament.TOURNAMENTID.PACKET_TM_CSTMSeasonRank;
            SocketMgr.send(pkgId, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(tournament.tournament.TOURNAMENTID.PACKET_TM_SCTMSeasonRank), (msg: tournament.tournament.SCTMSeasonRank) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    public static async callSeasonAward() {
        let ret = await new Promise<tournament.tournament.SCTMSeasonAward>((r) => {
            let op = new tournament.tournament.CSTMSeasonAward();
            let pkgId = tournament.tournament.TOURNAMENTID.PACKET_TM_CSTMSeasonAward;
            op.Lv = TienlenRuntime.matchSeasonInfo?.LastLv;
            SocketMgr.send(pkgId, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(tournament.tournament.TOURNAMENTID.PACKET_TM_SCTMSeasonAward), (msg: tournament.tournament.SCTMSeasonAward) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    /**
     * 
     * @param opCode 1 出牌 2 过牌
     * @param cards 
     * @returns 
     */
    public static async callOpCard(opCode: number, cards: number[] = null) {
        let ret = await new Promise<boolean>((r) => {
            let op = new tienlen.tienlen.CSTienLenPlayerOp();
            op.OpCode = opCode;
            op.OpParam = cards;
            let pkgId = tienlen.tienlen.TienLenPacketID.PACKET_CSTienLenPlayerOp;
            SocketMgr.send(pkgId, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(tienlen.tienlen.TienLenPacketID.PACKET_SCTienLenPlayerOp), (msg: tienlen.tienlen.SCTienLenPlayerOp) => {
                r(msg.OpRetCode == 0);
            }, this);
        })
        return ret;
    }

    public static async callJoin(roomId: number) {
        let ret = await new Promise<number>((r) => {
            let msg = new gamehall.gamehall.CSAudienceSit();
            msg.RoomId = roomId;
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_AUDIENCESIT, msg);
            EventMgr.getInstance().once(EventName.SC_AUDIENCE_SIT, (msg: gamehall.gamehall.SCAudienceSit) => {
                r(msg.OpCode);
            }, this);
        })
        return ret;
    }
    /**
     * 
     * @param type 0 好友列表 1 申请列表 2 推荐列表
     */
    public static async callFriendList(type: number) {
        let ret = await new Promise<friend.friend.SCFriendList>((r) => {
            let op = new friend.friend.CSFriendList();
            op.ListType = type;
            let pkgId = friend.friend.FriendPacketID.PACKET_CSFriendList;
            SocketMgr.send(pkgId, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(friend.friend.FriendPacketID.PACKET_SCFriendList), (msg: friend.friend.SCFriendList) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    public static async callFriendMask(player: player.player.SCQueryPlayer, flag: boolean) {
        let ret = await new Promise<chat.chat.SCShieldMsg>((r) => {
            let op = new chat.chat.CSShieldMsg();
            op.Shield = flag;
            op.ShieldHead = player.Head;
            op.ShieldName = player.Name;
            op.ShieldSnid = player.SnId;
            SocketMgr.send(chat.chat.ChatPacketID.PACKET_CSShieldMsg, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(chat.chat.ChatPacketID.PACKET_SCShieldMsg), (msg: chat.chat.SCShieldMsg) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    /**
     * 
     * @param type //0.申请 1.同意 2.拒绝 3.删除
     */
    public static async callFriendOp(type: number, snId: number) {
        let ret = await new Promise<friend.friend.SCFriendOp>((r) => {
            let op = new friend.friend.CSFriendOp();
            op.OpCode = type;
            op.SnId = snId;
            SocketMgr.send(friend.friend.FriendPacketID.PACKET_CSFriendOp, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(friend.friend.FriendPacketID.PACKET_SCFriendOp), (msg: friend.friend.SCFriendOp) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    public static async callFriendInvite(snId: number, pos: number) {
        let ret = await new Promise<friend.friend.SCInviteFriend>((r) => {
            let op = new friend.friend.CSInviteFriend();
            op.ToSnId = snId;
            op.Pos = pos;
            SocketMgr.send(friend.friend.FriendPacketID.PACKET_CSInviteFriend, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(friend.friend.FriendPacketID.PACKET_SCInviteFriend), (msg: friend.friend.SCInviteFriend) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    /**
     * 
     * @param snId 
     * @param opcode 0 同意 1 拒绝 
     */
    public static async sendFriendInviteOp(snId: number, opcode: number, pos: number) {
        let op = new friend.friend.CSInviteFriendOp();
        op.SnId = snId;
        op.OpCode = opcode;
        op.Pos = pos;
        SocketMgr.send(friend.friend.FriendPacketID.PACKET_CSInviteFriendOp, op);
    }

    public static async callQueryPlayer(snId: number) {
        let ret = await new Promise<player.player.SCQueryPlayer>((r) => {
            let op = new player.player.CSQueryPlayer();
            op.SnId = snId;
            SocketMgr.send(player.player.PlayerPacketID.PACKET_CS_QUERYPLAYER, op);
            EventMgr.getInstance().once(EventName.SC_PlayerQuery, (msg: player.player.SCQueryPlayer) => {
                TienlenHelper.log(msg);
                r(msg);
            }, this);
        })
        return ret;
    }

    public static async callQueryGameLog(snId: number, gameId: number = 0, size: number = 20) {
        let ret = await new Promise<friend.friend.SCQueryPlayerGameLog>((r) => {
            let op = new friend.friend.CSQueryPlayerGameLog();
            op.Snid = snId;
            op.GameId = gameId;
            op.Size = size;
            SocketMgr.send(friend.friend.FriendPacketID.PACKET_CSQueryPlayerGameLog, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(friend.friend.FriendPacketID.PACKET_SCQueryPlayerGameLog), (msg: friend.friend.SCQueryPlayerGameLog) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    public static async callChatMsg(snId: number, conent: string) {
        let ret = await new Promise<chat.chat.SCChatMsg>((r) => {
            let name = UserData.getInstance().getName();
            let head = UserData.getInstance().getHead();
            let op = new chat.chat.CSChatMsg();
            op.Msg2Snid = snId;
            op.Content = conent;
            op.Name = name;
            op.Head = head;
            SocketMgr.send(chat.chat.ChatPacketID.PACKET_CSChatMsg, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(chat.chat.ChatPacketID.PACKET_SCChatMsg), (msg: chat.chat.SCChatMsg) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    public static async callChatMsgLog(snId: number) {
        let ret = await new Promise<chat.chat.SCGetChatLog>((r) => {
            let op = new chat.chat.CSGetChatLog();
            op.Snid = snId;
            SocketMgr.send(chat.chat.ChatPacketID.PACKET_CSGetChatLog, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(chat.chat.ChatPacketID.PACKET_SCGetChatLog), (msg: chat.chat.SCGetChatLog) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    public static sendChatRead(snId: number) {
        let op = new chat.chat.CSReadChatMsg();
        op.Snid = snId;
        SocketMgr.send(chat.chat.ChatPacketID.PACKET_CSReadChatMsg, op);
    }

    public static async callSearchFriend(content: string) {
        let ret = await new Promise<friend.friend.SCFuzzyQueryPlayer>((r) => {
            let op = new friend.friend.CSFuzzyQueryPlayer();
            op.QueryContent = content;
            SocketMgr.send(friend.friend.FriendPacketID.PACKET_CSFuzzyQueryPlayer, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(friend.friend.FriendPacketID.PACKET_SCFuzzyQueryPlayer), (msg: friend.friend.SCFuzzyQueryPlayer) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    // public static async callSignData() {
    //     let ret = await new Promise<activity.activity.SCSignData>((r) => {
    //         let op = new activity.activity.CSSignData();
    //         SocketMgr.send(activity.activity.ActSignPacketID.PACKET_CSSignData, op);
    //         EventMgr.getInstance().once(activity.activity.ActSignPacketID[activity.activity.ActSignPacketID.PACKET_SCSignData], (msg: activity.activity.SCSignData) => {
    //             r(msg);
    //         }, this);
    //     })
    //     return ret;
    // }

    public static async callSignData() {
        let ret = await new Promise<welfare.welfare.SCWelfaredInfo>((r) => {
            let pack = new welfare.welfare.CSWelfaredInfo();
            SocketMgr.send(welfare.welfare.SPacketID.PACKET_CS_WELF_WELFAREINFO, pack);

            EventMgr.getInstance().once(welfare.welfare.SPacketID[welfare.welfare.SPacketID.PACKET_SC_WELF_WELFAREINFO], (msg: welfare.welfare.SCWelfaredInfo) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    public static async callSign(index: number, type: number) {
        let ret = await new Promise<activity.activity.SCSign>((r) => {
            let op = new activity.activity.CSSign();
            op.SignIndex = index;
            op.SignType = type;
            SocketMgr.send(activity.activity.ActSignPacketID.PACKET_CSSign, op);
            EventMgr.getInstance().once(activity.activity.ActSignPacketID[activity.activity.ActSignPacketID.PACKET_SCSign], (msg: activity.activity.SCSign) => {
                r(msg);
            }, this);
        })
        return ret;
    }

    public static getGameModeStr() {
        let gameid = TienlenGameData.instance.roomInfo.GameId;
        return this.getGameModeStrById(gameid);
    }

    public static getGameModeStrById(gameid: number) {
        if (gameid == GameConst.GameId_TienlenMatch || gameid == GameConst.GameId_TienLen) return I18nMgr.getInstance().getStringByKey(TienlenDefine.GameModeStr0List[0]);
        if (gameid == GameConst.GameId_TienlenExMatch || gameid == GameConst.GameId_TienLenEx) return I18nMgr.getInstance().getStringByKey(TienlenDefine.GameModeStr0List[1]);
        if (gameid == GameConst.GameId_TienLenYL) return I18nMgr.getInstance().getStringByKey(TienlenDefine.GameModeStr1List[0]);
        return I18nMgr.getInstance().getStringByKey(TienlenDefine.GameModeStr1List[1]);
    }

    public static getRoomModeStr() {
        let mode = TienlenGameData.instance.roomInfo.RoomMode;
        return TienlenDefine.RoomModeStrList[mode];
    }

    public static getMatchLvCfg(lv: number) {
        let datas = DB_GamMatchLV.getInstance().datas.Arr;
        for (let index = 0; index < datas.length; index++) {
            const element = datas[index];
            if (lv >= element.Star[0] && lv <= element.Star[1]) return element;
            if (index == datas.length - 1) {
                return element;
            }
        }
    }

    public static async tweenTo(target: any, duration: number, props: { [key in keyof Node]?: any }, options: ITweenOption = null) {
        return new Promise<void>((r) => {
            options = options || {};
            options.onComplete = (t) => {
                r();
            }
            tween(target).to(duration, props, options).start();
        });
    }

    public static async tweenBy(target: any, duration: number, props: { [key in keyof Node]?: any }, options: ITweenOption = null) {
        return new Promise<void>((r) => {
            options = options || {};
            options.onComplete = (t) => {
                r();
            }
            tween(target).by(duration, props, options).start();
        });
    }

    public static async fadeIn(target: Node, time: number = 0.3) {
        let opacity = target.getComponent(UIOpacity);
        return new Promise<void>((r) => {
            let options: any = {};
            options.onComplete = (t: any) => {
                r();
            }
            tween(opacity).to(time, { opacity: 255 }, options).start();
        });
    }

    public static async fadeOut(target: Node, time: number = 0.3) {
        let opacity = target.getComponent(UIOpacity) || target.addComponent(UIOpacity);
        return new Promise<void>((r) => {
            let options: any = {};
            options.onComplete = (t: any) => {
                r();
            }
            tween(opacity).to(time, { opacity: 0 }, options).start();
        });
    }
    private static _tips: TienlenTips;
    public static async showTips(content: string, view: Node): Promise<void> {
        let prefab = await ResourceHelper.loadResInAB(TienlenDefine.ABName, TienlenDefine.PrefabGameTips, Prefab);
        let node = PoolManager.instance.getNode(prefab, view)
        this._tips = node.getComponent(TienlenTips);
        this._tips.show(content, -1);
    }

    public static hideTips() {
        this._tips && PoolManager.instance.putNode(this._tips.node);
        this._tips = null;
    }


    public static async showFloatTips(content: string, view?: Node, duration: number = TienlenDefine.TipTime) {
        let prefab = await ResourceHelper.loadResInAB(TienlenDefine.ABName, TienlenDefine.PrefabGameTips, Prefab);
        view = view || this.getUIRoot();
        let node = PoolManager.instance.getNode(prefab, view)
        let tips = node.getComponent(TienlenTips);
        await tips.show(content, duration);
        PoolManager.instance.putNode(tips.node);
    }


    public static async showCountdownTips(content: string, view: Node, countdown: number) {
        let prefab = await ResourceHelper.loadResInAB(TienlenDefine.ABName, TienlenDefine.PrefabGameTips, Prefab);
        let node = PoolManager.instance.getNode(prefab, view)
        let tips = node.getComponent(TienlenTips);
        await tips.showCountdown(content, countdown);
        PoolManager.instance.putNode(tips.node);
    }

    public static async getCard(parent: Node): Promise<Card> {
        let prefab = await ResourceHelper.loadResInAB(TienlenDefine.ABName, TienlenDefine.PrefabCard, Prefab);
        let node = PoolManager.instance.getNode(prefab, parent);
        return node.getComponent(Card);
    }

    public static async putCard(card: Node) {
        if (card) {
            card.scale = Vec3.ONE;
            card.eulerAngles = Vec3.ZERO;
            card.position = Vec3.ZERO;
            Tween.stopAllByTarget(card);
            PoolManager.instance.putNode(card);
        }
    }

    public static async playAnim(anim: Animation, animName: string) {
        return new Promise<boolean>((r) => {
            anim.once(Animation.EventType.STOP, () => {
                r(true);
            })
            anim.play(animName);
        })
    }
    /**
     * 节点相关异步逻辑，必须根据返回值来做处理,true表示可以继续执行,false表示中途取消或者node无效应该return取消后面的执行
     * @param time 单位s
     * @param node 
     * @param cancelToken 
     * @returns 
     */
    public static async nodeWait(time: number, node: Node, cancelToken: CancelationToken = null) {
        return this.wait(time, cancelToken, node);
    }

    /**
     * 
     * @param time 单位s
     * @param cancelToken 
     * @param node 
     * @returns 
     */
    public static async wait(time: number, cancelToken: CancelationToken = null, node: Node = null): Promise<boolean> {
        let task = TaskFactory.create<boolean>();
        let _node = node || this._sNode;
        let flag2 = node != null;
        try {
            let completeAction = () => {
                task.setResult(true);
            }
            if (time == 0) {
                let comp: Component = _node.getComponent(Component) || _node.addComponent(Component);
                comp.scheduleOnce(completeAction, time);
                let cancelAction = () => {
                    comp.unschedule(completeAction);
                    task.setResult(false);
                }
                cancelToken?.add(cancelAction);
                let flag = await task.promise;
                // TaskFactory.recycle(task);
                return flag;
            } else {
                let id = setTimeout(completeAction, time * 1000);
                let cancelAction = () => {
                    clearTimeout(id);
                    task.setResult(false);
                }
                cancelToken?.add(cancelAction);
                let flag = await task.promise;
                if (flag2 && (!node || !node.isValid)) {
                    flag = false;
                }
                //定时器取消可能会影响到其他task,暂时屏蔽
                // TaskFactory.recycle(task);
                return flag;

            }
        } catch (error) {
            this.error('wait error: ' + error)
        }
    }

    /**
      * 把服务器的座位索引转换为客户端显示的索引
      * 客户端显示索引顺序:
      *      2
      *   3     1
      *      0  
      * 默认0号位是玩家自己的位置，其他位置要按逆时针平移
      * 
      * @param index 
      */
    public static PosToIndex(seat: number, baseSeat: number, maxPlayer: number = 4): number {
        let newIndex = -1;
        if (maxPlayer == 4) {
            let index = seat - baseSeat;
            if (index > 0)
                newIndex = index % maxPlayer;
            else
                newIndex = (maxPlayer + index) % maxPlayer;
        } else {
            newIndex = seat == baseSeat ? 0 : 2;
        }
        return newIndex;
    }

    public static IndexToPos(index: number, baseSeat: number, maxPlayer: number = 4): number {
        if (maxPlayer == 4) {
            return (baseSeat + index) % maxPlayer
        } else {
            if (index == 2) {
                return baseSeat == 0 ? 1 : 0;
            } else {
                return baseSeat;
            }
        }
    }

    public static SnIdToPos(snid: number) {
        let players = TienlenGameData.instance.roomInfo.Players;
        for (let index = 0; index < players.length; index++) {
            const element = players[index];
            if (element.SnId == snid) return element.Pos;
        }
        return -1;
    }

    public static SnIdToIndex(snid: number) {
        let pos = this.SnIdToPos(snid);
        let index = this.PosToIndex(pos, this.getBaseSeat(), TienlenGameData.instance.roomInfo.MaxPlayerNum);
        return index;
    }

    public static getBaseSeat(): number {
        let self = TienlenGameData.instance.selfPlayerData;
        if (this.isAudience(self.Flag)) {//如果旁观者,参考位置就是0
            return 0;
        } else {
            return self.Pos;
        }
    }

    public static getSelfData(list: tienlen.tienlen.ITienLenPlayerData[]) {
        let snId = UserData.getInstance().getSnId();
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element.SnId == snId) return element;
        }
    }

    public static getPlayerData(snid: number) {
        let players = TienlenGameData.instance.roomInfo.Players;
        for (let index = 0; index < players.length; index++) {
            const element = players[index];
            if (element.SnId == snid) return element;
        }
        return null;
    }
    /**
     * 把srcNode的本地坐标转换到targetNode下的坐标
     * @param srcNode 
     * @param targetNode 
     * @returns 
     */
    public static localToLocal(srcNode: Node, targetNode: Node) {
        let worldPos = srcNode.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO)
        return targetNode.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
    }

    public static removeList(srcList: number[], dellist: number[], isSelf: boolean) {
        if (isSelf) {
            for (let index = 0; index < dellist.length; index++) {
                const element = dellist[index];
                let del = srcList.indexOf(element);
                del != -1 && srcList.splice(del, 1);
            }
        } else {
            srcList.splice(0, dellist.length);
        }
    }

    public static getCardListLeftX(count: number, offset: number): number {
        let left = 0;
        if (count % 2 == 0) {
            left = -offset / 2 - (count / 2 - 1) * offset;
        } else if (count != 1) {
            left = -offset * (count - 1) / 2
        }
        return left;
    }

    private static _tmpVec3: Vec3 = new Vec3();
    private static _tmp2Vec3: Vec3 = new Vec3();
    public static convertSrcToDst(src: Node, dst: Node) {
        src.getComponent(UITransform).convertToWorldSpaceAR(Vec3.ZERO, this._tmpVec3);
        dst.getComponent(UITransform).convertToNodeSpaceAR(this._tmpVec3, this._tmp2Vec3);
        return this._tmp2Vec3;
    }


    public static getSafeNumber(value: any): number {
        if (typeof value == 'number') return value;
        else return value.toNumber();
    }


    static async getPassRes(): Promise<SpriteFrame | null> {
        let path = `rawRes/new/PASS/spriteFrame`
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, path, SpriteFrame);
        return sf;
    }

    static async getWaitingRes(): Promise<SpriteFrame | null> {
        let path = `rawRes/game/WAITING/spriteFrame`
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, path, SpriteFrame);
        return sf;
    }

    static async getWinBgRes(): Promise<SpriteFrame | null> {
        let path = `rawRes/game/FIRST-bg/spriteFrame`
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, path, SpriteFrame);
        return sf;
    }

    static async getWinRes(): Promise<SpriteFrame | null> {
        let path = `rawRes/game/FIRST/spriteFrame`
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, path, SpriteFrame);
        return sf;
    }

    static async getLoseBgRes(): Promise<SpriteFrame | null> {
        let path = `rawRes/game/bgLast/spriteFrame`
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, path, SpriteFrame);
        return sf;
    }

    static async getLoseRes(): Promise<SpriteFrame | null> {
        let path = `rawRes/game/LAST/spriteFrame`
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, path, SpriteFrame);
        return sf;
    }

    static async getGameBgRes(isMatch: boolean) {
        let path = isMatch ? "rawRes/match/matchGameBg/spriteFrame" : "rawRes/game/bg/spriteFrame";
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, path, SpriteFrame);
        return sf;
    }

    static async getGameReturnRes(isMatch: boolean) {
        let path = isMatch ? "rawRes/match/return/spriteFrame" : "rawRes/common/back/spriteFrame";
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, path, SpriteFrame);
        return sf;
    }

    static async getGameJifenRes(isMatch: boolean) {
        let path = isMatch ? "rawRes/match/jifen/spriteFrame" : "rawRes/common/gold/spriteFrame";
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, path, SpriteFrame);
        return sf;
    }

    static async getMatchTitleSF(title: string, matchType: number = 1) {
        let sf = null;
        if (title.startsWith("http")) {
            sf = await Utils.loadRemoteSpriteFrameWithExt(title);
        } else if (title) {
            let index = title.lastIndexOf('.');
            if (index != -1) {
                title = title.slice(0, index);
            }
            sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, `rawRes/match/${title}/spriteFrame`, SpriteFrame);
        }
        if (!sf) {
            let title = matchType == 1 ? "jinbiao" : "guanjun";
            sf = await ResourceHelper.loadResInAB<SpriteFrame>(TienlenDefine.ABName, `rawRes/match/${title}/spriteFrame`, SpriteFrame);
        }
        return sf;
    }


    static get audioSource(): AudioSource {
        return AudioMgr.getInstance().getAudioSource();
        // return UIRoot.getInstance()?.getComponent(AudioSource) || director.getScene().getComponentInChildren(AudioSource);
    }

    static async playMusic(name: string, loop: boolean = true) {
        if (name == this._curMusic) {
            console.warn(`当前正在播放${name}`);
            return;
        }
        if (this._curMusic != "") {
            this.audioSource.stop();
        }
        this._curMusic = name;
        if (!AudioMgr.getInstance().chkIsMusic()) {
            return;
        }

        this.forcePlayMusic(this._curMusic, loop);
    }

    //开始播放音乐
    static async forcePlayMusic(name: string, isLoop: boolean = true) {
        let clip = await ResourceHelper.loadResInAB(TienlenDefine.ABName, `rawRes/audio/${name}`, AudioClip);
        if (clip == null) {
            console.error(`不存在或者没有加载${name}对应的背景音乐资源`);
            return;
        }
        let as = this.audioSource;
        as.stop();
        as.clip = clip;
        as.loop = isLoop;
        as.play();
    }

    //打开关闭背景音乐
    static switchMusic(isOn: boolean) {
        if (isOn) {
            this.forcePlayMusic(this._curMusic);
        } else {
            this.audioSource!.stop();
        }
    }

    static async playCardEffect(list: number[], srcNode: Node, isNewRound: boolean, lastCards: number[], roleSex: number) {
        let type = CardHelper.getTienlenCardType(list, TienlenGameData.instance.isTraditonal);
        if (type == TienlenCardType.NONE) return;
        let prefix = (<any>TienlenDefine)['SoundCardType' + type];
        let flag = true;
        let samePoint = CardHelper.isSamePoint(list, lastCards);
        if (!isNewRound) {
            if (Math.random() * 100 >= 80 || samePoint) {
                flag = false;
            }
        }
        let path = prefix;
        if (flag) {
            if (type == 1 || type == 2) {
                let value = CardHelper.getTienlenCardValue(list[0]);
                path = `${prefix}${value}`
            }
        } else if (type != 7 && type != 11) {
            path = TienlenDefine.SoundYapai;
        }
        if (type == 7) {
            this.playSound(path);
        } else {
            this.playVoice(path, roleSex);
        }
        if (type == TienlenCardType.Straight_Twin) {
            let pariCount = list.length / 2;
            if (pariCount > 2) {
                SpineEffect.playStraightPair(pariCount, TienlenGame.instance?.node);
                SceneEffect.instance?.playScare();
            }
        } else if (type == TienlenCardType.Plane) {
            SpineEffect.playPlane(TienlenGame.instance?.node);
        } else if (type == TienlenCardType.Four_Bomb) {
            SpineEffect.playBomb(srcNode, Vec3.ZERO, TienlenGame.instance?.node);
            SceneEffect.instance?.playScare();
        }
    }

    static isAudience(flag: number) {
        let _flag = 1 << PlayerStateFlag.PlayerState_Audience;
        if ((flag & _flag) > 0) {//表明旁观
            return true;
        }
        return false;
    }

    static isWaiting(flag: number) {
        let _flag = 1 << PlayerStateFlag.PlayerState_WaitNext;
        if ((flag & _flag) > 0) {//等待下一局
            return true;
        }
        return false;
    }

    static async playSound(name: string, volumeScale?: number) {
        if (!AudioMgr.getInstance().chkIsSound()) {
            return;
        }
        let clip = await ResourceHelper.loadResInAB(TienlenDefine.ABName, `rawRes/audio/${name}`, AudioClip);
        let as = this.audioSource;
        as.playOneShot(clip, volumeScale);
    }

    /**
     * 根据多语言设置播放人声
     * @param name 
     * @param sex 
     */
    static async playVoice(name: string, sex: number, subPath: string = "") {
        let _lang = i18n._language;
        let _sex = sex == 0 ? 'female' : 'male';
        //当前语音只有中文和高棉，其他都默认中文
        if (_lang != "zh" && _lang != "kh") _lang = "zh";
        if (_lang == "zh") _sex = 'female';
        let path = subPath ? `rawRes/audio/${subPath}/voice/${_lang}/${_sex}/${name}` : `rawRes/audio/voice/${_lang}/${_sex}/${name}`;
        if (!AudioMgr.getInstance().chkIsSound()) {
            return;
        }
        let clip = await ResourceHelper.loadResInAB(TienlenDefine.ABName, path, AudioClip);
        let as = this.audioSource;
        as.playOneShot(clip);
    }

    static async playLongSound(name: string) {
        if (!AudioMgr.getInstance().chkIsSound()) {
            return;
        }
        let clip = await ResourceHelper.loadResInAB(TienlenDefine.ABName, `rawRes/audio/${name}`, AudioClip);
        let as = AudioMgr.getInstance().getAsForLongSound();
        as.clip = clip;
        as.loop = false;
        as.play();
    }

    static stopLongSound() {
        let as = AudioMgr.getInstance().getAsForLongSound();
        as.stop();
    }

    static async playLongVoice(name: string, sex: number) {
        if (!AudioMgr.getInstance().chkIsSound()) {
            return;
        }
        let _lang = i18n._language;
        let _sex = sex == 0 ? "female" : "male";
        //当前语音只有中文和高棉，其他都默认中文
        if (_lang != "zh" && _lang != "kh") _lang = "zh";
        let path = `rawRes/audio/voice/${_lang}/${_sex}/${name}`;
        let clip = await ResourceHelper.loadResInAB(TienlenDefine.ABName, path, AudioClip);
        let as = AudioMgr.getInstance().getAsForLongSound();
        as.clip = clip;
        as.loop = false;
        as.play();
    }

    static async setMusicVolume(value: number) {
        let as = this.audioSource;
        as.volume = value;
    }

    static stopAudio() {
        if (this.audioSource != null && this.audioSource.playing) {
            this.audioSource.stop();
        }
        this._curMusic = "";
        AudioMgr.getInstance().stopLongSound();
    }

    static pauseAudio() {
        this.audioSource.pause();
        let as = AudioMgr.getInstance().getAsForLongSound();
        as.pause();
    }

    static resumeAudio() {
        if (!this.audioSource.playing) {
            this.audioSource.play();
        }

        let as = AudioMgr.getInstance().getAsForLongSound();
        if (as.playing) {
            as.play();
        }
    }

    static getBaseCoinList(gameId: number) {
        let coin = UserData.getInstance().getCoin();
        let list = DB_Createroom.getInstance().datas.Arr;
        for (let index = list.length - 1; index >= 0; index--) {
            const element = list[index];
            if (element.GameId == gameId) {
                if (coin >= element.GoldRange[0]) {
                    return element.BetRange;
                }
            }
        }
    }

    static getMainRank(rank: number): number {
        let result = Math.ceil(rank / 25);
        result = Math.min(7, result);
        return result;
    }

    static getSubRank(rank: number): number {
        let mainRank = this.getMainRank(rank);
        if (mainRank == 7) {
            return 5;
        } else {
            let subRank = rank % 25 == 0 ? 25 : rank % 25;
            return Math.ceil(subRank / 5);
        }
    }

    static getStarRank(rank: number): number {
        let mainRank = this.getMainRank(rank);
        if (mainRank == 7) {
            return rank - 150;
        } else {
            return rank % 5 == 0 ? 5 : rank % 5;
        }
    }

    static getRankStr(rank: number, blank: boolean = false) {
        let mainRank = TienlenHelper.getMainRank(rank);
        let subRank = TienlenHelper.getSubRank(rank);
        let str = I18nMgr.getInstance().getStringByKey(TienlenDefine.MainRankStrList[mainRank]);
        let str2 = mainRank == 7 ? "" : " " + TienlenDefine.SubRankStrList[subRank];
        if (blank) return `${str[0]} ${str[1]}${str2}`;
        else return `${str}${str2}`;
    }

    static getRankStr2(mainRank: number, subRank: number, blank: boolean = false) {
        let str = I18nMgr.getInstance().getStringByKey(TienlenDefine.MainRankStrList[mainRank]);
        let str2 = mainRank == 7 ? "" : " " + TienlenDefine.SubRankStrList[subRank];
        if (blank) return `${str[0]} ${str[1]}${str2}`;
        else return `${str}${str2}`
    }



    private static _uiRootNode: Node;
    static getUIRoot(): Node {
        this._uiRootNode = this._uiRootNode || find('Canvas/Root/UIROOT');
        return this._uiRootNode;
    }

    static formatTimeStr(timeStamp: number) {
        let date = new Date(timeStamp);
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let minStr = min > 9 ? `${min}` : `0${min}`;
        let secStr = sec > 9 ? `${sec}` : `0${sec}`;
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${minStr}:${secStr}`;
    }

    static formatTimeStr2(timeStamp: number) {
        let date = new Date(timeStamp);
        let min = date.getMinutes();
        let sec = date.getSeconds();
        let minStr = min > 9 ? `${min}` : `0${min}`;
        let secStr = sec > 9 ? `${sec}` : `0${sec}`;
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }



    static formatMatchTimeStr(data: tournament.tournament.ITMInfo) {
        let list = ['日', '一', '二', '三', '四', '五', '六'];
        let getFormatTimeSr2 = function (value: number) {
            let hour = Math.floor(value / 10000);
            let min = Math.floor((value % 10000) / 100);
            let sec = value % 100;
            let hourstr = hour > 9 ? hour.toString() : `0${hour}`
            let minstr = min > 9 ? min.toString() : `0${min}`
            let secstr = sec > 9 ? sec.toString() : `0${sec}`
            return `${hourstr}:${minstr}:${secstr}`;
        }
        if (data.MatchTimeType == 1) {
            let str = "每周";
            let str2 = data.MatchTimeWeek.map((v) => {
                return list[v];
            }).join("、");
            let startStr = getFormatTimeSr2(data.MatchTimeStartHMS);
            let endStr = getFormatTimeSr2(data.MatchTimeEndHMS);
            return `${str}${str2}\n${startStr}-${endStr}`;
        } else if (data.MatchTimeType == 2) {
            let str1 = new Date(data.MatchTimeStamp[0] * 1000).toLocaleString();
            let str2 = new Date(data.MatchTimeStamp[1] * 1000).toLocaleString();
            return `${str1}-\n${str2}`
        } else {
            //return "即时开赛";
            return I18nMgr.getInstance().getStringByKey("tienlen.jishikaisaiTxt")
        }
    }


    static logOpCards(list: Card[]) {
        if (!list) return;
        let str = '当前手牌数据列表：'
        let str2 = "";
        let map = { 0: '黑桃', 1: '梅花', 2: '方块', 3: '红桃' }
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            str += element.cardId + " ";
            let point = CardHelper.getTienlenCardPoint(element.cardId);
            let color = CardHelper.getTienlenCardColor(element.cardId);
            str2 += `${map[color]}${TienlenCardPoint[point]} `;
        }
        TienlenHelper.log(`${str}`)
        TienlenHelper.log(`显示列表 ${str2}`)
    }

    static logCards(list: number[]) {
        if (!list) return;
        let str = '数据列表：'
        let str2 = "";
        let map = { 0: '黑桃', 1: '梅花', 2: '方块', 3: '红桃' }
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            str += element + " ";
            let point = CardHelper.getTienlenCardPoint(element);
            let color = CardHelper.getTienlenCardColor(element);
            str2 += `${map[color]}${TienlenCardPoint[point]} `;
        }
        TienlenHelper.log(`${str}`)
        TienlenHelper.log(`显示列表 ${str2}`);
    }


    static log(content?: any, ...optionalParams: any[]) {
        let timeStamp = new Date().toLocaleString();
        if (typeof content == 'string')
            console.log(`${timeStamp}【Tienlen】[log]:${content} `, ...optionalParams);
        else {
            console.log(`${timeStamp}【Tienlen】[log]: `)
            console.log(content)
            console.log(JSON.stringify(content));
        }
    }

    static info(content?: any, ...optionalParams: any[]) {
        let timeStamp = new Date().toLocaleString();
        if (typeof content == 'string')
            console.info(`${timeStamp}【Tienlen】[info]:${content} `, ...optionalParams);
        else {
            console.info(`${timeStamp}【Tienlen】[info]: `)
            console.info(content)
            console.info(JSON.stringify(content));
        }
    }

    static warn(content?: any, ...optionalParams: any[]) {
        let timeStamp = new Date().toLocaleString();
        if (typeof content == 'string')
            console.warn(`${timeStamp}【Tienlen】[warn]:${content} `, ...optionalParams);
        else {
            console.warn(`${timeStamp}【Tienlen】[warn]: `);
            console.warn(content);
            console.warn(JSON.stringify(content));
        }
    }

    static error(content?: any, ...optionalParams: any[]) {
        let timeStamp = new Date().toLocaleString();
        if (typeof content == 'string')
            console.error(`${timeStamp}【Tienlen】[error]:${content} `, ...optionalParams);
        else {
            console.error(`${timeStamp}【Tienlen】[error]: `)
            console.error(content)
            console.error(JSON.stringify(content));
        }
    }

}