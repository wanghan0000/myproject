import { _decorator, Node, UITransform, instantiate, Sprite, sys, Button, PageView, Tween, tween, Size, EventHandler, Toggle, native, Rect, Skeleton, sp, v3, WebView, view, screen } from 'cc';
import { UserData } from '../../../data/UserData';
import { EventMgr } from '../../../events/eventmgr';
import { EventName } from '../../../events/EventName';
import { LogicEvent, LogicEventData } from '../../../games/LogicEvent';
import { ComNetMgr } from '../../../gamestate/ComNetMgr';
import { GameState } from '../../../gamestate/GameState';
import { PlayerState, PlayerStateMgr } from '../../../gamestate/PlayerState';
import { SocketMgr } from '../../../panda/net/SocketMgr';
import Facebook from '../../../panda/sdk/Facebook';
import Google from '../../../panda/sdk/Google';
import { FuncExtend } from '../../../panda/utils/FuncExtend';
import { Utils } from '../../../panda/utils/Utils';
import { ProjectConfig } from '../../../ProjectConfig';
import bag from '../../../protocol/bag.js';
import gamehall from '../../../protocol/gamehall.js';
import { ResMgr } from '../../../UIFrame/ResMgr';
import { UIScreen } from '../../../UIFrame/UIForm';
import { UIRoot } from '../../../UIFrame/UIRoot';
import { GameConst, GameItemConf } from '../gameconfig/GameConst';
import { GameData } from '../gameconfig/GameData';
import { UIMgr } from '../UIMgr';
import { UIItemGameCard } from './UIItemGameCard';
const { ccclass, property } = _decorator;



/**
 * 以下为整个大厅的处理逻辑
 * 内容可能比较多
 */

@ccclass('UILobby')
export class UILobby extends UIScreen {
    isEngross = true;

    private nodeWebView: Node | null = null;
    start() {
        //UIRoot.getInstance().RotationLandscape();
        console.log("UILobby.start()");
    }

    onLoad() {
        if (sys.platform.toLowerCase() == sys.OS.ANDROID.toLowerCase()) {
            native.bridge.onNative = (isCloseWebView: String | null): void => {
                if (isCloseWebView && isCloseWebView == "true") {
                    let pack = new gamehall.gamehall.CSLeaveThridGame;
                    SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_LEAVETHRIDGAME, pack);
                    return;
                }
                return;
            }
        }
    }

    public async chkReconnect() {
        let gameFreeId = UserData.getInstance().getGameFreeId();
        let gameId = UserData.getInstance().getGameId();
        let roomId = UserData.getInstance().getRoomId();
        console.log(gameFreeId, gameId, roomId, "-=-===============-=-=-断线重连的数据监测");
        if (gameFreeId != null && gameFreeId != 0 && gameId != null && gameId != 0 && roomId != null && roomId != 0) {
            //标识当前可以断线重连
            console.log("断线重连了xxxxxxxxxx要被拉到游戏内=========");
            let conf = GameState.getInstance().getCacheReconnectRomoteConf();
            console.log("游戏配置xxxxx");
            console.log(conf);
            console.log("游戏配置xxxxx");
            if (conf != null) {
                let gameConf = conf.GameCfg;
                if (gameConf && gameConf.length > 0) {
                    let gameCardId = GameConst.getGameCardIDByGameId(gameId);
                    let localGameConfig = GameConst.getGameConfigByGameId(gameCardId);
                    GameState.getInstance().enterGame(localGameConfig!, conf);
                    let data = new LogicEventData(localGameConfig!);
                    await UIMgr.getInstance().showWaiting();
                    await ResMgr.getInstance().preloadBundleOnly(localGameConfig!.BundleName);
                    EventMgr.getInstance().dispatchEvent(localGameConfig!.GameId.toString(), data);
                }
            }
        }
    }

    public getGameCardId(gameId: number) {
        if ((gameId >= GameConst.GameId_TienLen && gameId <= GameConst.GameId_TienLenYLEx)
            || gameId == GameConst.GameId_TienlenMatch
            || gameId == GameConst.GameId_TienlenExMatch)
            return GameConst.GameId_TienLen;
        else
            return gameId;
    }

    private allData: GameItemConf[] = [];



    //请求背包数据 但是不做监听处理
    private doReqBagData(): void {
        let pack = new bag.bag.CSBagInfo();
        SocketMgr.send(bag.bag.SPacketID.PACKET_ALL_BAG_INFO, pack);
    }


    //执行一下刘海屏的适配
    private doAdapter() {
        //顶部适配
        let topBar = this.node.getChildByName("UITopbar");
        FuncExtend.adapterSafeAreRect(topBar);

        //广告页码  PageView
        let pageView = this.node.getChildByName("PageView");
        FuncExtend.adapterSafeAreRect(pageView);

        //hotnode  最近参与的游戏
        let hotNode = this.node.getChildByName("hotnode");
        FuncExtend.adapterSafeAreRect(hotNode);

        //allgame 所有的游戏
        let allgame = this.node.getChildByName("allgame");
        FuncExtend.adapterSafeAreRect(allgame);

    }
    private needAutoConnect: boolean = true;
    async onShow(needConnect: boolean = true) {
        this.needAutoConnect = needConnect;
        UIRoot.getInstance().RotationPortrait();

        this.doAdapter();

        if (sys.isNative) {
            //注册java回调js 监听
            this.registerAllScriptEvent()
        }

        EventMgr.getInstance().addEventListener(EventName.SC_PlayerData, this.onGetPlayerData, this);
        EventMgr.getInstance().addEventListener(EventName.SC_SYNCGAMEFREE, this.onSyncGameFree, this);
        EventMgr.getInstance().addEventListener(EventName.ENTER_THIRD_PARTY_GAME, this.onEnterThirdPartyGame, this);
        EventMgr.getInstance().addEventListener(EventName.LEAVE_THIRD_PARTY_GAME, this.onLeaveThirdPartyGame, this);

        this.initData();
        this.initGameCardView();
        this.initAdPageView();
        this.initLastestView();

        if (PlayerStateMgr.getInstance().getPlayerState() == PlayerState.Init && this.needAutoConnect) {
            let lastLoginType = localStorage.getItem("lastlogintype");
            if (lastLoginType == "google") {
                Google.login();
            } else if (lastLoginType == "facebook") {
                Facebook.login();
            } else if (lastLoginType == "accountpwd") {
                let userName = localStorage.getItem("accound_id");
                let pwd = localStorage.getItem("accound_pwd");
                if (userName != null && userName.length > 0 && pwd != null && pwd.length > 0) {
                    UIMgr.getInstance().showWaiting();
                    ComNetMgr.getInstance().setLoginMsg(userName, pwd);

                    if (ProjectConfig.isDebug) {
                        let hostMsg = localStorage.getItem("test_login_host");

                        if (hostMsg != null && !Utils.stringIsEmpty(hostMsg)) {
                            ComNetMgr.getInstance().setConnectHost(hostMsg);
                        }
                    }

                    ComNetMgr.getInstance().doSocketConnect();
                }
            } else {
                console.log("当前没有登录信息");
            }
        } else {
            this.doReqBagData();
        }


        //这里请求一下背包数据 这样不用每次请求了
        this.initBarBtnState();
        if (!ProjectConfig.IsJumpLogin) {
            console.log("要检测断线重连-----");
            this.chkReconnect();
        }

    }

    //游戏配置发生了变化
    private onSyncGameFree(): void {
        console.log("大厅检测到游戏的配置发生变化");
        this.initData();
        this.initAdPageView();
        this.initGameCardView();
        this.initLastestView();
    }


    //获取到玩家的数据  后进行界面的初始化
    private onGetPlayerData(): void {

        console.log("登录成功获取到用户的数据 开始 请求背包初始化数据");
        this.doReqBagData();
        this.initData();
        this.initAdPageView();
        this.initGameCardView();
        this.initLastestView();

        UIMgr.getInstance().clearWaiting();
    }
    private banerSpineAni: Node[] = [];


    private gameItemMap: Map<string, Node> = new Map<string, Node>();
    //初始化一个假的界面
    private initGameCardView() {
        this.gameItemMap.clear();
        //初始化捕鱼和 Tienlen两个游戏卡 GameCard的显示
        let allGame = this.node.getChildByName("allgame");
        let content = allGame.getChildByName("ScrollView")!.getChildByName("view")!.getChildByName("content");
        //先请出去界面中的所有元素
        content.destroyAllChildren();

        let scrollView = allGame.getChildByName("ScrollView");
        let winWidth = view.getVisibleSize().width;
        let winHeight = view.getVisibleSize().height;
        console.log(winHeight, "屏幕的高度-=---------------");
        let actualHeight = winHeight - 896 - 120 - FuncExtend.getSafeAreaRectHeight();
        scrollView.getComponent(UITransform).setContentSize(new Size(680, actualHeight))
        scrollView.getChildByName("view").getComponent(UITransform).setContentSize(new Size(680, actualHeight));
        console.log(actualHeight, "当前真正的裁剪区域的高度");
        let itemWidth = 340;
        let itemHeight = 260;


        for (let i = 0; i < this.allData.length; i++) {
            let item = ResMgr.getInstance().getPrefabByPath(this.allData[i].Icon_Path);
            let nodeItem = instantiate(item);

            let rowIdx = Math.floor(i / 2);
            let columnIdx = (i % 2);
            //330 258 
            let x = columnIdx * (itemWidth) + itemWidth / 2;
            let y = rowIdx * (itemHeight) + itemHeight / 2;
            nodeItem.setPosition(x, -y);
            nodeItem.getComponent(UIItemGameCard).init(this.allData[i]);
            content.addChild(nodeItem);
            this.gameItemMap.set(this.allData[i].GameId.toString(), nodeItem);
        }
        let rowCnt = Math.floor((this.allData.length - 1) / 2) + 1;
        let allHeight = rowCnt * itemHeight;
        console.log(allHeight, "allHeightxxxxxxxxxx", rowCnt, "xxx");
        content.getComponent(UITransform).contentSize = new Size(660, allHeight);

    }

    //初始化一个假的pageview的广告图
    private async initAdPageView() {
        let pageView = this.node.getChildByName("PageView");
        this.banerSpineAni = [];
        Tween.stopAllByTarget(pageView);

        pageView.getComponent(PageView).removeAllPages();

        let itemWidth = 720;
        let itemHeight = 382;



        for (let i = 0; i < this.allData.length; i++) {
            let nodeItem = new Node();
            let nodeAni = new Node();
            if (this.allData[i].GameId == GameConst.GameId_Fruits || this.allData[i].GameId == GameConst.GameId_Richblessed) {
                nodeAni.addComponent(Sprite);
                let spine = await ResMgr.getInstance().lazyLoadSpriteFrame(this.allData[i].AdImgPath);
                nodeAni.getComponent(Sprite).spriteFrame = spine;
                nodeItem.addComponent(UITransform);
                nodeItem.getComponent(UITransform).contentSize = new Size(itemWidth, itemHeight);
                pageView.getComponent(PageView).addPage(nodeItem);
                nodeItem.addChild(nodeAni);
                nodeAni.setPosition(v3(0, 0, 0));
            } else {
                nodeAni.addComponent(sp.Skeleton);
                let spine = await ResMgr.getInstance().lazyLoadySpine(this.allData[i].SpineImgPath);
                nodeAni.getComponent(sp.Skeleton).skeletonData = spine;
                nodeAni.getComponent(sp.Skeleton).premultipliedAlpha = false;
                nodeAni.getComponent(sp.Skeleton).setAnimation(0, "idle", true);
                nodeItem.addComponent(UITransform);
                nodeItem.getComponent(UITransform).contentSize = new Size(itemWidth, itemHeight);
                pageView.getComponent(PageView).addPage(nodeItem);
                nodeAni.setPosition(v3(0, 0, 0));
                nodeItem.addChild(nodeAni);
                this.banerSpineAni.push(nodeAni);
            }


            let evtHandler = new EventHandler();
            evtHandler.handler = "onBtnGameItemClick";
            evtHandler.component = "UILobby";
            evtHandler.customEventData = this.allData[i].GameId.toString();
            evtHandler.target = this.node;
            nodeItem.addComponent(Button);
            nodeItem.getComponent(Button).clickEvents.push(evtHandler);
        }
        pageView.getChildByName("view").getChildByName("content").getComponent(UITransform).contentSize = new Size(itemWidth * this.allData.length, itemHeight);

        this.initPageViewAni();
    }

    //初始化一个假的最近游戏列表
    private initLastestView() {
        let hotnode = this.node.getChildByName("hotnode");
        let scrollView = hotnode.getChildByName("hotScrollView");
        let content = scrollView.getChildByName("view").getChildByName("content");
        content.destroyAllChildren();

        let arr = FuncExtend.getLastestGameIdArr();
        let allGames: number[] = [];
        for (let i = 0; i < this.allData.length; i++) {
            allGames.push(this.allData[i].GameId);
        }

        allGames.sort((a, b) => {
            let aIdx = arr.indexOf(a);
            let bIdx = arr.indexOf(b);
            if (aIdx != -1 && bIdx != -1) {
                if (aIdx > bIdx) {
                    return 1
                } else {
                    return -1
                }
            } else if (aIdx != -1 && bIdx == -1) {
                return -1;
            } else if (aIdx == -1 && bIdx != -1) {
                return 1;
            } else {
                return 1;
            }
        })

        let itemWidth = 220;
        let itemHeight = 240;
        let getConfig = (gameId: number): GameItemConf => {
            for (let i = 0; i < this.allData.length; i++) {
                if (this.allData[i].GameId == gameId) {
                    return this.allData[i];
                }
            }
            return null;
        }

        for (let i = 0; i < allGames.length; i++) {
            let config = getConfig(allGames[i]);
            let item = ResMgr.getInstance().getPrefabByPath(config.LastestPrefab);
            let nodeItem = instantiate(item);
            let x = (i) * itemWidth + itemWidth / 2;
            let y = -itemHeight / 2 - 20;
            nodeItem.setPosition(x, y);
            content.addChild(nodeItem);

            let evtHandler = new EventHandler();
            evtHandler.target = this.node;
            evtHandler.component = "UILobby";
            evtHandler.handler = "onBtnGameItemClick";
            evtHandler.customEventData = config.GameId.toString();

            nodeItem.addComponent(Button);
            nodeItem.getComponent(Button).clickEvents.push(evtHandler);
            nodeItem.getComponent(Button).transition = Button.Transition.SCALE;
            nodeItem.getComponent(Button).zoomScale = 0.9;
        }
        content.getComponent(UITransform).contentSize = new Size(itemWidth * this.allData.length, 260);


        // for(let i = 0;i<this.allData.length;i++){
        //     let item = ResMgr.getInstance().getPrefabByPath(this.allData[i].LastestPrefab);
        //     let nodeItem = instantiate(item);
        //     let x = (i)*itemWidth + itemWidth/2;
        //     let y = -itemHeight/2-20;
        //     nodeItem.setPosition(x,y);
        //     content.addChild(nodeItem);

        //     let evtHandler = new EventHandler();
        //     evtHandler.target = this.node;
        //     evtHandler.component = "UILobby";
        //     evtHandler.handler = "onBtnGameItemClick";
        //     evtHandler.customEventData = this.allData[i].GameId.toString();

        //     nodeItem.addComponent(Button);
        //     nodeItem.getComponent(Button).clickEvents.push(evtHandler);
        //     nodeItem.getComponent(Button).transition = Button.Transition.SCALE;
        // }
        // content.getComponent(UITransform).contentSize = new Size(itemWidth * this.allData.length,260);
    }


    //点击进入游戏
    private onBtnGameItemClick(evt: Event, customData: string) {
        console.log("被点击的gameid=", customData);
        if (this.gameItemMap.has(customData)) {
            let node = this.gameItemMap.get(customData);

            node.getComponent(UIItemGameCard).onBtnClick();
        }
    }




    public registerAllScriptEvent() {
        // google登录成功回调
        native.jsbBridgeWrapper.addNativeEventListener("loginGoogleCall", (datas: string) => {
            this.loginGoogleCall(datas);
        });
        // google登出成功回调
        native.jsbBridgeWrapper.addNativeEventListener("logoutGoogleCall", (datas: string) => {
            this.logoutGoogleCall(datas);
        });

        // facebook登录成功回调
        native.jsbBridgeWrapper.addNativeEventListener("loginFaceBookCall", (datas: string) => {
            this.loginFaceBookCall(datas);
        });
        // facebook登出成功回调
        native.jsbBridgeWrapper.addNativeEventListener("logoutFaceBookCall", (datas: string) => {
            this.logoutFaceBookCall(datas);
        });
    }


    public async loginGoogleCall(data: string) {
        let jsonData = JSON.parse(data);
        console.log("google的登录回调");
        console.log(data);
        console.log("google的登录回调");
        let result = jsonData["result"].toString();
        if (result == "22") {
            let headUrl = "";
            if (jsonData["avatar"] != null && jsonData["avatar"] != undefined) {
                headUrl = jsonData["avatar"];
            }
            ComNetMgr.getInstance().setGoogleMsg("google_" + jsonData["id"], jsonData["userName"], headUrl);
            await UIMgr.getInstance().showWaiting();
            ComNetMgr.getInstance().doSocketConnect();
        } else if (result == "21") {
            UIMgr.getInstance().clearWaiting();
            UIMgr.getInstance().AlertTxt("登录失败");
        }

    }


    /*
    *谷歌退出登录回调
    */
    public logoutGoogleCall(data: string) {
        let datas = JSON.stringify(data)
        console.log("谷歌退出登录回调", datas)
        //UIMgr.getInstance().AlertTxt("退出google登录成功");
    }
    public async loginFaceBookCall(data: string) {
        let jsonData = JSON.parse(data)
        console.log("facebook的登录回调");
        console.log(data)
        console.log("facebook的登录回调");
        let result = jsonData["result"].toString();
        if (result == "22") {
            //22 标识授权成功 可以执行登录
            let headUrl = "";
            if (jsonData["avatar"] != null && jsonData["avatar"] != undefined) {
                headUrl = jsonData["avatar"];
            }
            ComNetMgr.getInstance().setFaceBookmsg("facebook_" + jsonData["id"], jsonData["userName"], headUrl)
            await UIMgr.getInstance().showWaiting();
            ComNetMgr.getInstance().doSocketConnect();
        } else if (result == "21") {
            UIMgr.getInstance().clearWaiting();
            UIMgr.getInstance().AlertTxt("授权失败");
        } else if (result == "23") {
            UIMgr.getInstance().clearWaiting();
            UIMgr.getInstance().AlertTxt("取消登录");
        }

    }
    /*
    *facebook退出登录回调
    */
    public logoutFaceBookCall(data: string) {
        let datas = JSON.stringify(data)
        console.log("facebook退出回调", datas)
        //UIMgr.getInstance().AlertTxt("退出facebook登录成功");
    }

    private pageIdx: number = 0;
    //自动滚动轮播图
    private initPageViewAni() {
        let node = this.node.getChildByName("PageView");

        Tween.stopAllByTarget(node);
        //node.getComponent(PageView).scrollToPage(this.pageIdx, 0.3);
        // if (this.banerSpineAni.length > this.pageIdx){
        //     this.banerSpineAni[this.pageIdx].getComponent(sp.Skeleton).setAnimation(0,"idle",true);
        // }
        for (let i = 0; i < this.banerSpineAni.length; i++) {
            this.banerSpineAni[i].getComponent(sp.Skeleton).setAnimation(9, "idle", true);
        }
        tween(node).delay(8).call(() => {
            this.pageIdx = this.pageIdx + 1;
            if (this.pageIdx >= this.allData.length) {
                this.pageIdx = 0;
            }
            node.getComponent(PageView).scrollToPage(this.pageIdx, 0.3);
            // if (this.banerSpineAni.length > this.pageIdx){
            //     this.banerSpineAni[this.pageIdx].getComponent(sp.Skeleton).setAnimation(0,"idle",true);
            // }
        }).union().repeatForever().start();

    }



    //界面重新被激活
    reShow() {
        UIRoot.getInstance().RotationPortrait(() => {
            this.scheduleOnce(() => {
                this.initData();
                this.initAdPageView();
                this.initGameCardView();
                this.initLastestView();
            }, 0.016)
        });
    }



    //初始化游戏数据
    private initData(): void {
        this.allData.length = 0;
        if (PlayerStateMgr.getInstance().getPlayerState() == PlayerState.Init) {
            let fadeItem = GameConst.Game_All_Config.get(GameConst.GameId_TienLen);
            this.allData.push(fadeItem);
            fadeItem = GameConst.Game_All_Config.get(GameConst.GameId_Tala);
            this.allData.push(fadeItem);
            fadeItem = GameConst.Game_All_Config.get(GameConst.GameId_FishHappy);
            this.allData.push(fadeItem);
            fadeItem = GameConst.Game_All_Config.get(GameConst.GameId_SmallRocket);
            this.allData.push(fadeItem);
            fadeItem = GameConst.Game_All_Config.get(GameConst.GameId_Fruits);
            this.allData.push(fadeItem);
            fadeItem = GameConst.Game_All_Config.get(GameConst.GameId_Richblessed);
            this.allData.push(fadeItem);
        } else {
            let mapData = GameData.getInstance().getGameShowData();
            this.allData.length = 0;
            for (let key of mapData.keys()) {
                this.allData.push(mapData.get(key));
            }
            if (this.allData.length > 0) {
                this.allData.sort((a: GameItemConf, b: GameItemConf) => {
                    if (a.Order < b.Order) {
                        return -1;
                    } else {
                        return 1;
                    }
                });
            }
        }

    }


    ///加载当前有哪些游戏需要加载出来
    // private initGameCard() {
    //     if (this.allData.length > 0) {
    //         let allGame = this.node.getChildByName("allgame");
    //         let content = allGame.getChildByName("ScrollView")!.getChildByName("view")!.getChildByName("content");
    //         //先请出去界面中的所有元素
    //         content.destroyAllChildren();

    //         let data = [];
    //         for (let i = 0; i < this.allData.length; i++) {
    //             data.push(this.allData[i]);
    //         }

    //         this.allData = data;



    //         let itemWidth = 340;
    //         let itemHeight = 280;
    //         for (let i = 0; i < this.allData.length; i++) {
    //             let item = ResMgr.getInstance().getPrefabByPath(this.allData[i].Icon_Path);
    //             console.log(this.allData[i].Icon_Path);
    //             let nodeItem = instantiate(item);
    //             if (this.allData[i].GameId == GameConst.GameId_FishHappy) {
    //                 //存储捕鱼的itemcard
    //                 this.gameCardFish = nodeItem;
    //             }
    //             if (this.allData[i].GameId == GameConst.GameId_TienLen) {
    //                 this.gameCardTienlen = nodeItem;
    //             }
    //             let rowIdx = Math.floor(i / 2);
    //             let columnIdx = (i % 2);
    //             //330 258 
    //             let x = columnIdx * (itemWidth) + itemWidth / 2;
    //             let y = rowIdx * (itemHeight) + itemHeight / 2;
    //             nodeItem.setPosition(x, -y);
    //             nodeItem.getComponent(UIItemGameCard).itemConfig = this.allData[i];
    //             content.addChild(nodeItem);
    //         }
    //         let rowCnt = Math.floor((this.allData.length - 1) / 2) + 1;
    //         let allHeight = rowCnt * itemHeight;
    //         content.getComponent(UITransform).contentSize = new Size(660, allHeight);

    //     }
    // }


    onHide() {
        Tween.stopAllByTarget(this.node.getChildByName("PageView"));
        EventMgr.getInstance().removeByTarget(this);
    }

    onBackHall() {
        //AudioMgr.getInstance().playMusic(LobbyAudioCfg.bg);
    }






    //#region   大厅界面上面的菜单的按钮响应事件
    public onBtnLoginOut(event: Event, customData: any) {
        console.log("退出登录");
        //这个时候需要关闭所有的小游戏，如果是传统游戏是无法执行退出的。这里只关系小游戏即可
        //广播消息，让各个游戏退出房间 这里其实应该给服务器也发送消息，告知退出游戏了
        let allMiniGameArr = GameState.getInstance().getAllMiniGameConfArr();
        let allGameIds: number[] = [];
        for (let gid of allMiniGameArr.keys()) {
            allGameIds.push(gid);
        }
        for (let gameId of allGameIds) {
            let gameconfig = GameConst.getGameConfigByGameId(gameId);
            let logicData: LogicEventData = new LogicEventData(gameconfig!);
            EventMgr.getInstance().dispatchEvent(LogicEvent.EXIT_MINI_GAME, logicData);
        }
        ComNetMgr.getInstance().doDisConnect();
        UIMgr.getInstance().showScreenLogin();
    }



    ///游戏界面
    public onBtnGame() {
        //UIMgr.getInstance().AlertTxt("游戏");
        //this.onBtnClick("game");
    }

    public onBtnBag() {
        //UIMgr.getInstance().AlertTxt("背包");
        //this.onBtnClick("bag");
        UIMgr.getInstance().showLobbyBag();
    }

    public onBtnShop() {
        //this.onBtnClick("shop");
        UIMgr.getInstance().showLobbyShop();
    }
    public onBtnMe() {
        // UIMgr.getInstance().AlertTxt("我的");
        // this.onBtnClick("me");
        UIMgr.getInstance().showLobbyMy();
    }

    //初始化按钮的状态
    private initBarBtnState() {
        let bottomBar = this.node.getChildByName("UILobbyBtm");
        bottomBar.getChildByName("ToggleGroup").getChildByName("Toggle1").getComponent(Toggle).isChecked = true;
        bottomBar.getChildByName("ToggleGroup").getChildByName("Toggle1").getComponent(Toggle).interactable = false;
    }

    onEnterThirdPartyGame(msg: gamehall.gamehall.SCEnterThridGame) {
        if (msg.OpRetCode == gamehall.gamehall.OpResultCode_Game.OPRC_Sucess_Game) {
            UIMgr.getInstance().clearWaiting();
            let pfb = ResMgr.getInstance().getPrefabByPath("Lobby/Prefabs/UIWebView");
            if (pfb !== null) {
                this.nodeWebView = instantiate(pfb);
                this.nodeWebView.parent = this.node;
                this.nodeWebView.getComponent(WebView).url = msg.EnterUrl;
            }
        }
        else {
            UIMgr.getInstance().clearWaiting();
            UIMgr.getInstance().AlertTxt("游戏无法进入!" + msg.OpRetCode);
        }
    }

    onLeaveThirdPartyGame(msg: gamehall.gamehall.SCLeaveThridGame) {
        if (msg.OpRetCode == gamehall.gamehall.OpResultCode_Game.OPRC_Sucess_Game) {
            if (this.nodeWebView != null && this.nodeWebView.isValid) {
                this.nodeWebView.destroy();
                this.nodeWebView = null;
            }
        }
    }

    btnOnCloseWebView() {
        let pack = new gamehall.gamehall.CSLeaveThridGame;
        SocketMgr.send(gamehall.gamehall.GameHallPacketID.PACKET_CS_LEAVETHRIDGAME, pack);
        return;
    }
}


