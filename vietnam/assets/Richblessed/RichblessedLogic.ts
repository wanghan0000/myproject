/*
 * @Description: 
 * @Author: Super_Javan
 * @Date: 2022-11-30 14:36:12
 * @LastEditTime: 2023-01-13 19:40:20
 * @LastEditors: super_javan 296652579@qq.com
 */
import { EventMgr } from "../ScriptCore/events/eventmgr";
import { BaseLogic } from "../ScriptCore/games/BaseLogic"
import { LogicEvent, LogicEventData } from "../ScriptCore/games/LogicEvent";
import { LogicManager } from "../ScriptCore/games/LogicManager";
import { GameConst } from "../ScriptCore/Lobby/Scripts/gameconfig/GameConst";
import { UIMgr } from "../ScriptCore/Lobby/Scripts/UIMgr";
import { ResMgr, ResType } from "../ScriptCore/UIFrame/ResMgr";
import { RichblessedUIMgr } from "./RichblessedUIMgr";
import { reslist } from "./reslist";
import { FruitsGameEventName } from "./script/configs/fruitsgameeventname";
import { SCRichblessed } from "./script/net/scRichblessed";
import { RichblessedLoading } from "./script/richblessedloading";
import { PoolManager } from "../ScriptCore/panda/utils/poolmgr";

export class RichblessedLogic extends BaseLogic {
    public init() {
        EventMgr.getInstance().addEventListener(GameConst.GameId_Richblessed.toString(), this.onStartEnter.bind(this), this);
        //使用一个消息，可以从logicData中区分 是怎么返回回去的
        EventMgr.getInstance().addEventListener(LogicEvent.ENTER_HALL_FROM_GAMES, this.onBackHall.bind(this), this);
    }


    //从子游戏返回到大厅了
    public onBackHall(data: LogicEventData) {
        super.onBackHall(data);
        console.log("返回大厅，需要释放资源");
        if (this.gameItemConfig != null && this.gameItemConfig!.GameId == data.itemConfig!.GameId) {
            setTimeout(() => {
                //清除消息注册
                SCRichblessed.destory();

                const poolClearPaths = [
                    'pfb_richblessed_toast_ui',
                    'pfb_richblessed_item',
                ]
                poolClearPaths.forEach((path)=>{
                    PoolManager.instance.clearPool(path)
                })
                //释放对应bundle中的资源 如果是从
                ResMgr.getInstance().releaseAllResByList(reslist);
            });
        }
    }

    /**
     * 多彩开始加载
     * @param data 
     */
    public async onStartEnter(data: LogicEventData) {
        console.log("开始加载多彩的资源");
        await super.onStartEnter(data);
        SCRichblessed.getInstance().register();
        this.startLoadGame();
    }

    //开始加载资源
    public async startLoadGame() {
        UIMgr.getInstance().clearWaiting();
        let loadingForm = await RichblessedUIMgr.getInstance().showLoading();
        loadingForm.getComponent(RichblessedLoading).startRuChangFake(() => {
        }, () => {
            //打开选场
            UIMgr.getInstance().clearWaiting();
            RichblessedUIMgr.getInstance().showEnterUI();
        })
     
    }

    //加载资源完成
    protected onLoadResourceComplete(err: any) {
        console.log("打开多彩的选场界面");
        UIMgr.getInstance().clearWaiting();
        RichblessedUIMgr.getInstance().showEnterUI();
    }
}

LogicManager.getInstance().registerLogicTypes(RichblessedLogic);