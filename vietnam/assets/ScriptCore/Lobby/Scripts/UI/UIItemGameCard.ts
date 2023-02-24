import { _decorator, Component, Label, Node, Button, EventHandler, sys, Sprite, Asset } from 'cc';
import { LogicEventData } from '../../../games/LogicEvent';
import { EventMgr } from '../../../events/eventmgr';
import { GameConst, GameItemCatogry, GameItemConf } from '../gameconfig/GameConst';
import { ResMgr } from '../../../UIFrame/ResMgr';
import { UIMgr } from '../UIMgr';
import { EventName } from '../../../events/EventName';
import { ProjectConfig } from '../../../ProjectConfig';
import { SocketMgr } from '../../../panda/net/SocketMgr';
import { GameState } from '../../../gamestate/GameState';
import { DB_GameFree } from '../../../config/db_gamefree';
import { HotUpdate, HotUpdateEventName } from '../../../hotupdate/HotUpdate';
import gamehall from '../../../protocol/gamehall.js';
import { PlayerState, PlayerStateMgr } from '../../../gamestate/PlayerState';
import { FuncExtend } from '../../../panda/utils/FuncExtend';


const { ccclass, property } = _decorator;

enum GameVersionState {
    UnKnow = "UnKnow",
    NeedDownLoad = "NeedDownLoad",
    NeedUpdate = "NeedUpdate",
    AlreadyNew = "AlreadyNew",
}


@ccclass('UIItemGameCard')
export class UIItemGameCard extends Component {
    public gameID: number = 0;

    //icon
    public nodeIcon: Node | null = null;
    //下载节点
    public labelDownload: Label | null = null;

    public itemConfig: GameItemConf | null = null;

    private hotUpdate: HotUpdate | null = null;

    //下载的图标标识
    private downloadicon: Node = null;
    //下载的进度
    private downloadprogress: Node = null;

    start() {

    }



    public init(conf: GameItemConf) {
        this.itemConfig = conf;

        this.downloadicon = this.node.getChildByName("downloadicon");
        this.downloadprogress = this.node.getChildByName("downloadprogress");
        this.downloadicon.active = false;
        this.downloadprogress.active = false;

        //动态绑定按钮事件
        let button = this.node.addComponent(Button);
        button.interactable = true;
        button.transition = Button.Transition.SCALE;
        button.zoomScale = 0.9;

        let clickEvent = new EventHandler();
        clickEvent.target = this.node;
        clickEvent.component = "UIItemGameCard";
        clickEvent.handler = "onBtnClick";
        button.clickEvents.push(clickEvent);

        if (!ProjectConfig.isJumpCheckUpdate) {
            if (sys.platform.toLowerCase() == sys.OS.ANDROID.toLowerCase() || sys.platform.toLowerCase() == sys.OS.IOS.toLowerCase()) {
                if (PlayerStateMgr.getInstance().getPlayerState() != PlayerState.Init) {
                    console.log("只有本地平台才进行版本差异的比对而且当前已经登录的情况下才去执行下载" + this.itemConfig.BundleName);
                    //游戏在初始化创建 UIItemGameCard 的时候都要进行一次检查，去检查包里边是否有 对应的bundle
                    this.chkUpdate();
                } else {
                    console.log("当前是平台，但是当前还没有登录，所以不需要执行 更新检查");
                }
            }
        }

    }



    //当前游戏的状态
    private curVersionState: GameVersionState = GameVersionState.UnKnow;
    private isUpdateing: boolean = false;
    public chkUpdate() {
        if (this.isUpdateing) {
            console.log("当前正在执行hotupdate的检查更新或者更新。返回了");
            return;
        }
        if (this.hotUpdate != null) {
            this.hotUpdate = null;
        }
        let bundleName = this.itemConfig!.BundleName;
        //获取对应的bundle上对应的manifest asset。如果没有则去
        let manifest: Asset = null;
        try {
            //去 子游戏的bundle中更新
            ResMgr.getInstance().getManifestByBundleName(bundleName).then((asset) => {
                manifest = asset;
            }).catch(() => {
                manifest = null;
            }).finally(() => {
                if (manifest == null) {
                    console.log("当前版本 没有下载，需要去下载" + this.itemConfig!.BundleName);
                    this.curVersionState = GameVersionState.NeedDownLoad;
                    this.updateGameVersionState();
                    return;
                }
                console.log("chkupdate()中初始化hotupdate=======");
                this.hotUpdate = new HotUpdate(manifest, this.onUpdateListener.bind(this), bundleName);
                //初始化
                console.log("chkupdate中初始化=======");
                this.hotUpdate.doInit();
                //检查版本更新
                console.log("检查是否有新版本需要更新========");
                this.hotUpdate.checkUpdate();
            });
        } catch (err) {
            console.log("chkupdate中的catch方法被捕捉到了");
            manifest = null;
            console.log(err);
            this.isUpdateing = false;
        }
    }

    /**
     * 开始更新对应的游戏
     */
    public doUpdate() {
        console.log("开始执行更新  doUpdate() 操作");
        if (this.isUpdateing) {
            console.log("正在更新不用处理");
            return;
        }
        this.hotUpdate = null;
        let manifest: Asset = null;
        let bundleName = this.itemConfig!.BundleName;
        if (this.hotUpdate == null) {
            try {
                ResMgr.getInstance().getManifestByBundleName(bundleName).then((asset) => {
                    manifest = asset;
                }).catch(() => {
                    manifest = null;
                }).finally(() => {
                    this.hotUpdate = new HotUpdate(manifest, this.onUpdateListener.bind(this), bundleName);
                    console.log("初始化hotupdatexxxx");
                    this.hotUpdate.doInit();
                    //开始更新
                    this.isUpdateing = true;
                    this.hotUpdate.doHotUpdate();
                })
            } catch (err) {
                manifest = null;
                console.log("获取manifest失败出现了错误");
                this.isUpdateing = false;
            }

        }
    }

    /**
     * 这里边的回到仅仅监听关心的方法就行
     * 
     */
    public onUpdateListener(eventName: string, event: any) {
        console.log("更新回调event事件=====");
        console.log(eventName);
        console.log(event);
        console.log("更新回调event事件=====");
        if (eventName == HotUpdateEventName.ALREADY_UP_TO_DATE) {
            //检查更新的事件
            this.curVersionState = GameVersionState.AlreadyNew;
            this.updateGameVersionState();
            this.onFinished();
        } else if (eventName == HotUpdateEventName.NEW_VERSION_FOUND) {
            //检查更新的事件
            this.curVersionState = GameVersionState.NeedUpdate;
            this.updateGameVersionState();
            this.onFinished();
        } else if (eventName == HotUpdateEventName.UPDATE_PROGRESSION) {
            //执行更新的事件
            this.updateProgres(event);
        } else if (eventName == HotUpdateEventName.DELAY_TO_RESTART) {
            console.log("更新完成,删除bundle，重新加载即可进入游戏");
            UIMgr.getInstance().tipTxt(`${this.itemConfig?.BundleName}更新完成`);
            this.curVersionState = GameVersionState.AlreadyNew;
            this.updateGameVersionState();
            this.onFinished();
        } else if (eventName == HotUpdateEventName.ERROR_DOWNLOAD_MANIFEST ||
            eventName == HotUpdateEventName.ERROR_PARSE_MANIFEST ||
            eventName == HotUpdateEventName.UPDATE_FAILED ||
            eventName == HotUpdateEventName.ERROR_UPDATING ||
            eventName == HotUpdateEventName.ERROR_DECOMPRESS
        ) {
            console.log("更新失败");
            UIMgr.getInstance().tipTxt(`${this.itemConfig!.BundleName}更新失败`);
            this.onFinished();
        }
    }

    public onFinished() {
        //清空对应的bundle
        console.log("清空对应的bundle。在进入游戏的时候重新加载");
        ResMgr.getInstance().destoryBundle(this.itemConfig!.BundleName);
        setTimeout(() => {
            this.hotUpdate = null;
            this.isUpdateing = false;
        });
    }

    //更新 进度
    public updateProgres(event: any) {
        console.log(event);
        this.downloadprogress.active = true;
        this.downloadprogress.getChildByName("bar").getComponent(Sprite).fillRange = event.getPercent();
    }

    public updateGameVersionState() {
        if (this.curVersionState == GameVersionState.NeedDownLoad) {
            this.downloadicon.active = true;
        } else if (this.curVersionState == GameVersionState.NeedUpdate) {
            this.downloadicon.active = true;
        } else if (this.curVersionState == GameVersionState.AlreadyNew) {
            this.downloadicon.active = false;
            this.downloadprogress.active = false;
        }
    }


    onLoad() {
    }

    onDestroy() {

    }

    startLoadingGame() {

    }

    endLoadingGame() {

    }

    loadingGame(perfect: any) {

    }

    onEnable() {
        console.log("事件注册");
        EventMgr.getInstance().addEventListener(EventName.SC_GET_GAME_CONFIG, this.onGetGameConfig.bind(this), this);
    }
    onDisable() {
        console.log("事件取消注册UIGameItgemCard取消消息注册");
        EventMgr.getInstance().removeByTarget(this);
    }


    showGameJackpot(data: any) {
    }

    UpdateIconGameEvent(gameId: any) {

    }






    //获取到单个游戏的游戏配置的时候处理逻辑
    public async onGetGameConfig(msg: any) {
        let conf = msg as gamehall.gamehall.SCGetGameConfig;
        let gameConf = conf.GameCfg;
        if (gameConf && gameConf.length > 0) {
            let logicId = gameConf[0].LogicId;
            let gameId = DB_GameFree.getInstance().pool.get(logicId!)?.GameId;
            //后台无tielen数据,特殊处理
            gameId = gameId ? gameId : parseInt(logicId.toString().substring(0, 3));
            console.log(gameId, this.itemConfig!.GameId);
            let gameIdArr = GameConst.getGameConfigByGameId(this.itemConfig.GameId).SubGameIdsArr;
            let exist = gameIdArr.findIndex((v) => v == gameId) != -1;
            if (exist) {
                GameState.getInstance()!.enterGame(this.itemConfig!, conf);
                let data = new LogicEventData(this.itemConfig!);
                console.log("断线重连后 服务器主动发送断线重连的逻辑，这里直接进入游戏");
                console.log(this.itemConfig.BundleName,"==========================");
                await ResMgr.getInstance().preloadBundleOnly(this.itemConfig!.BundleName);
                console.log("测试一下，开始发送广播 进入游戏=-=======");
                EventMgr.getInstance().dispatchEvent(this.itemConfig!.GameId.toString(), data);
            }
        }
    }

    public async onBtnClick() {
        console.log("xxxx");
        FuncExtend.setLastestGameId(this.itemConfig.GameId);
        console.log(this.itemConfig.GameId);
        console.log("xxxx");

        console.log("进入游戏的按钮被点击了xxxxxxxx");

        if (PlayerStateMgr.getInstance().chkNeedLogin()) {
            //还没有登录
            await UIMgr.getInstance().showLoginFast();
            return;
        }

        if (this.itemConfig.GameId == GameConst.GameId_SmallRocket) {
            let pack = new gamehall.gamehall.CSEnterThridGame;
            pack.ThridGameId = this.itemConfig.GameId * 10000 + 1;
            SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_ENTERTHRIDGAME, pack);
            UIMgr.getInstance().showWaiting();
            return;
        }

        //这里会有bug  需要重新调整一下，并且做更加充足的条件判定 todo dev

        if (!ProjectConfig.isJumpCheckUpdate) {
            //如果当前需要需要进行版本检查则进行热更新检查
            if (sys.platform.toLowerCase() == sys.OS.ANDROID.toLowerCase() || sys.platform.toLowerCase() == sys.OS.IOS.toLowerCase()) {
                if (this.curVersionState != GameVersionState.AlreadyNew) {
                    this.doUpdate();
                    return
                }
            }
        }
        console.log("点击开始游戏 发送消息给服务器获取游戏配置");
        console.info(this.itemConfig?.GameId);
        if (this.itemConfig!.BundleName == null || this.itemConfig!.BundleName == undefined || this.itemConfig!.BundleName.length <= 0) {
            return;
        }
        /**
         * 发送获取子游戏的动态配置
         */
        await UIMgr.getInstance().showWaiting();
        let pack = new gamehall.gamehall.CSGetGameConfig();
        pack.GameId = this.itemConfig!.GameId;
        pack.Channel = ProjectConfig.Channel_ID;
        pack.Platform = ProjectConfig.Platform_ID;
        console.log("发送了获取子游戏配置的消息");
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_GETGAMECONFIG, pack);

    }

}
