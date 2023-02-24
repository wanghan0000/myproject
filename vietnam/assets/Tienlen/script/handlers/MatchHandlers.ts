import { UIManager } from "../../../ScriptCore/UIFrame/UIManager";
import ObjectWait from "../common/async/ObjectWait";
import { IMessageHandler, MessageHandler } from "../common/Type";
import { MatchPromotion } from "../match/MatchPromotion";
import { MatchSelect } from "../match/MatchSelect";
import { MatchWaiting } from "../match/MatchWaiting";
import { TienlenGameData } from "../model/TienlenGameData";
import tournament from "../protocol/tournament.js";
import TienlenHelper from "../TienlenHelper";
import { TienlenRuntime } from "../TienlenRuntime";

@MessageHandler(tournament.tournament.TOURNAMENTID.PACKET_TM_SCPromotionInfo)
export class PromotionInfoHandler implements IMessageHandler {
    async run(msg: tournament.tournament.SCPromotionInfo) {
        let view = MatchPromotion.instance;
        if (view) {
            view.updateShow(msg);
        } else {
            if (TienlenHelper.checkMatchPromotionLoading()) {
                view = await ObjectWait.instance.wait(MatchPromotion);
                //等待晋级到晋级结果出来加个延迟表现
                if (msg.RetCode != 2) {
                    let flag = await TienlenHelper.nodeWait(1, view.node);
                    if (!flag) return;
                }
                view.updateShow(msg);
            } else {
                TienlenHelper.showMatchPromotion(msg);
            }
        }
    }
}

@MessageHandler(tournament.tournament.TOURNAMENTID.PACKET_TM_SCTMRankList)
export class TMRankListHandler implements IMessageHandler {
    async run(msg: tournament.tournament.SCTMRankList) {

    }
}

@MessageHandler(tournament.tournament.TOURNAMENTID.PACKET_TM_SCSignRace)
export class SignRaceHandler implements IMessageHandler {
    async run(msg: tournament.tournament.SCSignRace) {
        if (msg.OpCode == 1 && msg.RetCode == 0) {
            if (TienlenHelper.checkMatchWaitingIsShow()) {
                UIManager.getInstance().closeAllWin();
            }
        }
    }
}

@MessageHandler(tournament.tournament.TOURNAMENTID.PACKET_TM_SCSyncSignNum)
export class SyncSignNumHandler implements IMessageHandler {
    async run(msg: tournament.tournament.SCSyncSignNum) {
        TienlenRuntime.matchSignNum = msg;
        let wnd = MatchWaiting.instance;
        if (!wnd) return;
        wnd.updateSignNum(msg);
    }
}

@MessageHandler(tournament.tournament.TOURNAMENTID.PACKET_TM_SCTMInfos)
export class TMInfosHandler implements IMessageHandler {
    async run(msg: tournament.tournament.SCTMInfos) {
        TienlenRuntime.matchInfos = msg;
        let view = MatchSelect.instance;
        view && view.updateTMInfos(msg);
    }
}

@MessageHandler(tournament.tournament.TOURNAMENTID.PACKET_TM_SCTMStart)
export class TMStartHandler implements IMessageHandler {
    async run(msg: tournament.tournament.SCTMStart) {
        TienlenRuntime.matchStartFlag = true;
        TienlenHelper.showMatchGame();
    }
}

@MessageHandler(tournament.tournament.TOURNAMENTID.PACKET_TM_SCTMSeasonInfo)
export class TMSeasonInfoHandler implements IMessageHandler {
    async run(msg: tournament.tournament.SCTMSeasonInfo) {
        let last = TienlenRuntime.matchSeasonInfo;
        TienlenRuntime.matchSeasonInfo = msg;
        //同步更新玩家身上段位数据
        TienlenGameData.instance.selfPlayerData && (TienlenGameData.instance.selfPlayerData.Lv = msg.Lv);
        let view = MatchPromotion.instance;
        if (!view && TienlenHelper.checkMatchPromotionIsLoading()) {
            view = await ObjectWait.instance.wait(MatchPromotion);
        } else if (!view) return;
        //等到人物跳到台子上再播放
        let flag = TienlenHelper.nodeWait(7, view.node);
        if (!flag) return;
        if (last) {
            TienlenHelper.log("updateGrade222 ", msg.Lv, last.Lv);
            view.updateGrade(msg.Lv, last.Lv);
        } else {
            TienlenHelper.log("updateGrade333 ", msg.Lv, msg.Lv);
            view.updateGrade(msg.Lv, msg.Lv);
        }
    }
}


@MessageHandler(tournament.tournament.TOURNAMENTID.PACKET_TM_SCTMSeasonRank)
export class TMSeasonRankHandler implements IMessageHandler {
    async run(msg: tournament.tournament.SCTMSeasonRank) {

    }
}


@MessageHandler(tournament.tournament.TOURNAMENTID.PACKET_TM_SCTMSeasonAward)
export class TMSeasonAwardHandler implements IMessageHandler {
    async run(msg: tournament.tournament.SCTMSeasonAward) {

    }
}