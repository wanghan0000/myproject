import { Animation, AudioClip, AudioSource, Component, ITweenOption, Node, Prefab, tween, Tween, UITransform, Vec3 } from "cc"
import { AudioMgr } from "../../ScriptCore/audio/AudioMgr"
import { UserData } from "../../ScriptCore/data/UserData"
import { EventMgr } from "../../ScriptCore/events/eventmgr"
import { EventName } from "../../ScriptCore/events/EventName"
import { GameState } from "../../ScriptCore/gamestate/GameState"
import { UIMgr } from "../../ScriptCore/Lobby/Scripts/UIMgr"
import { SocketMgr } from "../../ScriptCore/panda/net/SocketMgr"
import { PoolManager } from "../../ScriptCore/panda/utils/poolmgr"
import { ProjectConfig } from "../../ScriptCore/ProjectConfig"
import gamehall from "../../ScriptCore/protocol/gamehall.js"
import { UIManager } from "../../ScriptCore/UIFrame/UIManager"
import { TienlenRuntime } from "../../Tienlen/script/TienlenRuntime"
import { CancelationToken } from "./common/async/CancelationToken"
import ObjectWait from "./common/async/ObjectWait"
import { TaskFactory } from "./common/async/TaskFactory"
import { Card } from "./common/component/Card"
import { PlayerStateFlag } from "./common/define"
import CardHelper from "./common/helper/CardHelper"
import OpcodeTypeHelper from "./common/helper/OpcodeTypeHelper"
import ResourceHelper from "./common/helper/ResourceHelper"
import tala from "./protocol/tala.js"
import TalaDefine from "./TalaDefine"
import TalaRuntime from "./TalaRuntime"
import { TalaGame } from "./view/TalaGame"

export default class TalaHelper {
    private static _sNode: Node = new Node();
    private static _curMusic: string = "";
    public static log(content?: any, ...optionalParams: any[]) {
        let timeStamp = new Date().toLocaleString();
        if (typeof content == 'string')
            console.log(`${timeStamp}【Tala】[log]:${content} `, ...optionalParams);
        else {
            console.log(`${timeStamp}【Tala】[log]: `)
            console.log(content)
            console.log(JSON.stringify(content));
        }
    }

    static get audioSource(): AudioSource {
        return AudioMgr.getInstance().getAudioSource();
    }

    static async playSound(name: string, volumeScale?: number) {
        if (!AudioMgr.getInstance().chkIsSound()) {
            return;
        }
        let clip = await ResourceHelper.loadResInAB(TalaDefine.ABName, `rawRes/audio/${name}`, AudioClip);
        let as = this.audioSource;
        as.playOneShot(clip, volumeScale);
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
        let clip = await ResourceHelper.loadResInAB(TalaDefine.ABName, `rawRes/audio/${name}`, AudioClip);
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

    /**
     * 根据角色id或者宠物id获得对应预制件
     * @param id  宠物:(100w,200w) 角色:200w+
     */
    public static async getModelPfb(id: number) {
        if (id >= 1000000 && id < 2000000) {
            return await ResourceHelper.loadResInAB(TalaDefine.ABName, "scenesel3d/prefab/chicken", Prefab);
        } else {
            let idx = id - 2000001;
            if (idx == 0) {
                return await ResourceHelper.loadResInAB(TalaDefine.ABName, "scenesel3d/prefab/famale", Prefab);
            } else if (id == 1) {
                return await ResourceHelper.loadResInAB(TalaDefine.ABName, "scenesel3d/prefab/male", Prefab);
            }
        }
    }

    public static async getModel2DPfb(id: number) {
        if (id >= 1000000 && id < 2000000) {
            return await ResourceHelper.loadResInAB(TalaDefine.ABName, "prefab/model2D/chicken2D", Prefab);
        } else {
            let idx = id - 2000001;
            if (idx == 0) {
                return await ResourceHelper.loadResInAB(TalaDefine.ABName, "prefab/model2D/famale2D", Prefab);
            } else if (idx == 1) {
                return await ResourceHelper.loadResInAB(TalaDefine.ABName, "prefab/model2D/male2D", Prefab);
            }
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

    /**
     * 
     * @param count anchorx不为0时，才用到此值
     * @param gap 
     * @param index 
     * @param cardSize anchorx为0时，才用到此值 
     * @param anchorX 
     * @returns 
     */
    public static getCardOffset(count: number, gap: number, index: number, cardSize: number = 0, anchorX: number = 0.5) {
        if (anchorX == 0) {
            return cardSize / 2 + index * gap;
        } else {
            let left = this.getCardListLeftX(count, gap);
            return left + index * gap;
        }
    }

    private static _tmpVec3: Vec3 = new Vec3();
    private static _tmp2Vec3: Vec3 = new Vec3();
    public static convertSrcToDst(src: Node, dst: Node, srcPos: Vec3 = Vec3.ZERO, newFlag: boolean = false) {
        srcPos = srcPos || Vec3.ZERO;
        if (newFlag) {
            this._tmpVec3 = new Vec3();
            this._tmp2Vec3 = new Vec3();
        }
        src.getComponent(UITransform).convertToWorldSpaceAR(srcPos, this._tmpVec3);
        dst.getComponent(UITransform).convertToNodeSpaceAR(this._tmpVec3, this._tmp2Vec3);
        return this._tmp2Vec3;
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

    public static getSafeNumber(value: any): number {
        if (typeof value == 'number') return value;
        else return value.toNumber();
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

    public static async getCard(parent: Node): Promise<Card> {
        let prefab = await ResourceHelper.loadResInAB(TalaDefine.ABName, TalaDefine.PfbCard, Prefab);
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

    public static markAllPhoms(ownCards: number[]) {
        TalaHelper.log("--------markAllPhoms-----")
        let view = TalaGame.instance;
        let phoms = TalaRuntime.instance.showPhoms;
        this._logShowPhoms(phoms);
        let selfPlayerData = TalaRuntime.instance.selfPlayerData;
        let index = TalaHelper.SnIdToIndex(selfPlayerData.SnId);
        let selfPlayer = view.getPlayer(index);
        let opCardList = selfPlayer.opCardList;
        let flag = false;
        for (let index = 0; index < phoms.length; index++) {
            const element = phoms[index];
            let otherIndex = TalaHelper.SnIdToIndex(element.Snid);
            let player = view.getPlayer(otherIndex);
            let list = element.Phoms;
            for (let index2 = 0; index2 < ownCards.length; index2++) {
                const element2 = ownCards[index2];
                let result = CardHelper.markPhoms(list, element2);
                if (result.length > 0) {
                    TalaHelper.log("markAllPhoms result ", result, element2);
                    opCardList.showTip(opCardList.getCardIndex(element2));
                    player.showPhomZoneTip(result);
                    flag = true;
                }
            }
        }
        return flag;
    }

    private static _logShowPhoms(list: tala.tala.ISCTaLaShowPhom[]) {
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            TalaHelper.log("Phom ", index, element);
        }
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
            this.log('wait error: ' + error)
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
        let players = TalaRuntime.instance.roomInfo.Players;
        for (let index = 0; index < players.length; index++) {
            const element = players[index];
            if (element.SnId == snid) return element.Pos;
        }
        return -1;
    }

    public static SnIdToIndex(snid: number) {
        let pos = this.SnIdToPos(snid);
        let index = this.PosToIndex(pos, this.getBaseSeat(), TalaRuntime.instance.roomInfo.MaxPlayerNum);
        return index;
    }

    public static getBaseSeat(): number {
        let self = TalaRuntime.instance.selfPlayerData;
        if (this.isAudience(self.Flag)) {//如果旁观者,参考位置就是0
            return 0;
        } else {
            return self.Pos;
        }
    }

    public static phomsToCardList(phoms: tala.tala.IPhoms[]) {
        let list: number[] = [];
        for (let index = 0; index < phoms.length; index++) {
            const element = phoms[index];
            list = list.concat(element.Phom);
        }
        return list;
    }

    public static async getTalaGame(): Promise<TalaGame> {
        let view = TalaGame.instance;
        if (!view) {
            view = await ObjectWait.instance.wait(TalaGame);
        }
        return view;
    }

    public static async showLoading(...args: any) {
        await UIManager.getInstance().openWin(`${TalaDefine.ABName}/${TalaDefine.PfbLoading}`, ...args)
    }

    public static async showSelect(...args: any) {
        await UIManager.getInstance().openScreen(`${TalaDefine.ABName}/${TalaDefine.PfbSelect}`, ...args)
        //检测是否断线重连
        this.checkReconnect();
    }

    public static checkReconnect() {
        let roomId = UserData.getInstance().getRoomId();
        let gameFreeId = UserData.getInstance().getGameFreeId();
        if (roomId != null && roomId != 0 && gameFreeId != null && gameFreeId != 0) {
            UserData.getInstance().setRoomId(0);
            UserData.getInstance().setGameFreeId(0);
            // let gameConfRomote = GameState.getInstance().getGameConfRomote();
            // TienlenGameData.instance.roomCfg = gameConfRomote.GameCfg.find((value) => {
            //     if (value.LogicId == gameFreeId) return value;
            // })
            let packet = new gamehall.gamehall.CSReturnRoom();
            packet.RoomId = roomId;
            packet.IsLoaded = true;
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_RETURNROOM, packet);
        } else if (TalaHelper.checkGameIsShow()) { //不在游戏中直接退出game
            this.hideGame();
        }
    }

    public static async showGame(...args: any) {
        await UIManager.getInstance().openScreen(`${TalaDefine.ABName}/${TalaDefine.PfbGame}`, ...args)
    }

    public static async hideGame(...args: any[]) {
        TalaHelper.playMusic(TalaDefine.MusicHall);
        await UIManager.getInstance().closeForm(`${TalaDefine.ABName}/${TalaDefine.PfbGame}`)
    }

    public static checkLoadingIsShowOrLoad(): boolean {
        return UIManager.getInstance().checkFormShowing(`${TalaDefine.ABName}/${TalaDefine.PfbLoading}`) ||
            UIManager.getInstance().checkFormLoading(`${TalaDefine.ABName}/${TalaDefine.PfbLoading}`);
    }

    public static checkGameIsShow(): boolean {
        let flag1 = UIManager.getInstance().checkFormShowing(`${TalaDefine.ABName}/${TalaDefine.PfbGame}`);
        return flag1;
    }

    public static checkGameIsLoading(): boolean {
        let flag1 = UIManager.getInstance().checkFormLoading(`${TalaDefine.ABName}/${TalaDefine.PfbGame}`);
        return flag1;
    }

    public static async checkEnterGame(gameId: number) {
        let cfg = await this.callGameCfg(gameId);
        TalaRuntime.instance.gameCfg = cfg;
        let roomId = this.getRoomId(gameId);
        let code = await this.callEnterGame(roomId);
        if (code == gamehall.gamehall.OpResultCode.OPRC_CoinNotEnough) {
            UIMgr.getInstance().tipTxt(`金币不足`);
        } else if (code == gamehall.gamehall.OpResultCode.OPRC_RoomHadClosed) {
            UIMgr.getInstance().tipTxt(`房间已关闭`);
        } else if (code == gamehall.gamehall.OpResultCode.OPRC_SceneServerMaintain) {
            UIMgr.getInstance().tipTxt(`服务器在维护`);
        } else if (code) {
            UIMgr.getInstance().tipTxt(gamehall.gamehall.OpResultCode[code]);
        }
        return code;
    }

    public static getRoomId(gameId: number): number {
        let cfg = TalaRuntime.instance.gameCfg;
        return cfg.GameCfg[0].LogicId;
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
            EventMgr.getInstance().once(EventName.SC_LeaveRoom, (msg: gamehall.gamehall.SCLeaveRoom) => {
                r(msg.OpRetCode);
                msg.OpRetCode && UIMgr.getInstance().tipTxt(`游戏中不能离开`);
            }, this);
        })
        return ret;
    }

    /**
 * 
 * @param opCode 1 吃牌 2 抽牌 3 出牌 4 组牌 5 亮牌 6 开始游戏
 * @param cards 
 * @returns 
 */
    public static async callOpCard(opCode: number, cards: number[] = null) {
        let ret = await new Promise<boolean>((r) => {
            let op = new tala.tala.CSTaLaPlayerOp();
            op.OpCode = opCode;
            op.OpParam = cards;
            let pkgId = tala.tala.TaLaPacketID.PACKET_CSTaLaPlayerOp;
            SocketMgr.send(pkgId, op);
            EventMgr.getInstance().once(OpcodeTypeHelper.getPacketIDStr(tala.tala.TaLaPacketID.PACKET_SCTaLaPlayerOp), (msg: tala.tala.SCTaLaPlayerOp) => {
                r(msg.OpRetCode == 0);
            }, this);
        })
        return ret;
    }

}