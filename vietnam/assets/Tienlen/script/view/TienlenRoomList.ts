import { _decorator, Component, Node, ToggleContainer, Button, Toggle, Camera, tween, v3, Vec3, sp } from 'cc';
import gamehall from '../../../ScriptCore/protocol/gamehall.js';
import { AdapterMgr, AdapterType } from '../../../ScriptCore/UIFrame/AdapterMgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { ButtonPlus } from '../common/component/ButtonPlus';
import { ListCtrl } from '../common/component/ListCtrl';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { TienlenUIMgr } from '../TienlenUIMgr';
import { ItemRoom } from './ItemRoom';
import { TienlenSelect3d } from './TienlenSelect3d';
const { ccclass, property } = _decorator;

@ccclass('TienlenRoomList')
export class TienlenRoomList extends UIWindow {
    @property(ToggleContainer)
    public toggleLevel: ToggleContainer;
    @property(ListCtrl)
    public listRoom: ListCtrl;
    @property(ButtonPlus)
    public btnCreate: ButtonPlus;
    @property(ButtonPlus)
    public btnRefresh: ButtonPlus;
    @property(ButtonPlus)
    public btnReturn: ButtonPlus;
    @property(ButtonPlus)
    public btnGameMode: ButtonPlus;
    @property(ButtonPlus)
    public btnBaseCoin: ButtonPlus;
    @property(ButtonPlus)
    public btnPlayerNum: ButtonPlus;
    @property(ButtonPlus)
    public btnPlayMode0: ButtonPlus;
    @property(ButtonPlus)
    public btnPlayMode1: ButtonPlus;
    private _selectLevel: number = 1;
    private _sortGameMode: number = 0;  //0 从207到208
    private _sortBaseCoin: number = 0; //0 从大到小 1 从小到大
    private _sortPlayerNum: number = 0;//0 从多到少 1 从少到多
    private _playMode: number = -1;
    private _cacheData: Map<number, gamehall.gamehall.IQRoomInfo[]> = new Map<number, gamehall.gamehall.IQRoomInfo[]>();
    onLoad() {
        this.btnCreate.setClickHandler(() => {
            TienlenUIMgr.getInstance().showCreateRoom(TienlenRuntime.createCfg, this._playMode);
        }, this)
        this.btnRefresh.setClickHandler(this.refresh, this)
        this.btnReturn.setClickHandler(() => {
            this.btnOnBack();
        }, this)
        this.btnGameMode.setClickHandler(() => {
            this.sortGameMode = this._sortGameMode == 0 ? 1 : 0;
        }, this)
        this.btnBaseCoin.setClickHandler(() => {
            this.sortBaseCoin = this._sortBaseCoin == 0 ? 1 : 0;
        }, this)
        this.btnPlayerNum.setClickHandler(() => {
            this.sortPlayerNum = this._sortPlayerNum == 0 ? 1 : 0;
        })
        this.listRoom.itemRenderFunction = (t, ci, di) => {
            let key = this.getCachekey(this._playMode, this._selectLevel);
            t.getComponent(ItemRoom).data = this._cacheData.get(key)[di];
        }
        this.btnPlayMode0.setClickHandler(() => {
            this.playMode = 0;
        }, this);
        this.btnPlayMode1.setClickHandler(() => {
            this.playMode = 1;
        }, this);

        TienlenRoomList._instance = this;
    }

    onDestroy() {
        TienlenRoomList._instance = null;
    }

    public set playMode(value: number) {
        if (this.playMode == value) return;
        this._playMode = value;
        if (value == -1) {
            this.showPlayModeAnim();
        } else {
            this.node.getChildByName("playNode").active = false;
            this.setLevel(TienlenRuntime.roomListLevel);
            this.setToggleLevel(TienlenRuntime.roomListLevel);
            this.tweenShowList();
        }
    }

    public get playMode(): number {
        return this._playMode;
    }

    public async setLevel(value: number) {
        this._selectLevel = value
        let key = this.getCachekey(this._playMode, this._selectLevel);
        if (!this._cacheData.has(key)) {
            let dataList = await TienlenHelper.callQueryAllRoom(this._playMode, value);
            this._cacheData.set(key, dataList);
        }
        this.sortBaseCoin = 0;
        TienlenRuntime.roomListLevel = this._selectLevel;
    }

    getCachekey(playMode: number, level: number): number {
        return playMode * 100 + level;
    }

    onShow(...args: any[]) {
        AdapterMgr.getInstance().adapterByType(AdapterType.FullScreen, this);
        this.showPlayModeAnim();
    }

    async tweenShowList() {
        let list = this.getComponentsInChildren(sp.Skeleton);
        list[0].node.active = false;
        list[1].node.active = false;
        this.node.getChildByName("playNode").active = false;
        let bg = this.node.getChildByName("bg");
        bg.active = true;
        bg.setPosition(bg.position.x, 720);
        tween(bg).to(0.3, { position: v3(bg.position.x, 0) }).start();
        let flag = await TienlenHelper.nodeWait(0.3, this.node);
        if (!flag) return;
        list[0].node.active = true;
        list[1].node.active = true;
        list[0].setAnimation(0, "shaizi", false);
        list[1].setAnimation(0, "shaizi", false);
    }

    showPlayModeAnim() {
        this.node.getChildByName("bg").active = false;
        let bg = this.node.getChildByName("playNode");
        bg.active = true;
        for (let index = 0; index < 2; index++) {
            const element = bg.children[index]
            element.active = true;
            const y = element.position.y;
            element.setPosition(element.position.x, y + 30);
            tween(element).to(0.3 + 0.1 * index, { position: v3(element.position.x, y) }).start();
        }
    }

    async refresh() {
        TienlenHelper.log("roomlist refresh")
        let level = this.getRoomLevel();
        let dataList = await TienlenHelper.callQueryAllRoom(this._playMode, level);
        let key = this.getCachekey(this._playMode, level);
        this._cacheData.set(key, dataList);
        this.sortBaseCoin = 0;
    }


    onToggleChange() {
        let level = this.getRoomLevel();
        this.setLevel(level);
    }

    public set sortGameMode(value: number) {
        this._sortGameMode = value;
        this.sort(0);
    }

    public set sortBaseCoin(value: number) {
        this._sortBaseCoin = value;
        this.sort(1);
    }

    public set sortPlayerNum(value: number) {
        this._sortPlayerNum = value;
        this.sort(2);
    }

    /**
     * 
     * @param mode 0 游戏模式排序 1 底注排序 2 玩家数量排序
     */
    public sort(mode: number) {
        let key = this.getCachekey(this._playMode, this._selectLevel);
        if (mode == 0) {
            this._cacheData.get(key)?.sort(this._sortByGameMode.bind(this));
        } else if (mode == 1) {
            this._cacheData.get(key)?.sort(this._sortByBaseCoin.bind(this));
        } else if (mode == 2) {
            this._cacheData.get(key)?.sort(this._sortByPlayerNum.bind(this));
        }
        this.listRoom.dataList = this._cacheData.get(key);
    }

    private _sortByGameMode(l: gamehall.gamehall.IQRoomInfo, r: gamehall.gamehall.IQRoomInfo) {
        if (l.GameId != r.GameId) {
            if (this._sortGameMode == 0)
                return l.GameId - r.GameId
            else
                return r.GameId - l.GameId;
        } else {
            return r.BaseCoin - l.BaseCoin;
        }
    }

    private _sortByBaseCoin(l: gamehall.gamehall.IQRoomInfo, r: gamehall.gamehall.IQRoomInfo) {
        if (l.BaseCoin != r.BaseCoin) {
            if (this._sortBaseCoin == 0) {
                return r.BaseCoin - l.BaseCoin
            } else {
                return l.BaseCoin - r.BaseCoin
            }
        } else {
            if (this._sortPlayerNum == 0) {
                return r.CurrNum - l.CurrNum;
            } else {
                return l.CurrNum - r.CurrNum;
            }
        }
    }

    private _sortByPlayerNum(l: gamehall.gamehall.IQRoomInfo, r: gamehall.gamehall.IQRoomInfo) {
        if (l.CurrNum != r.CurrNum) {
            if (this._sortPlayerNum == 0)
                return r.CurrNum - l.CurrNum;
            else
                return l.CurrNum - r.CurrNum;
        } else {
            return r.BaseCoin - l.BaseCoin;
        }
    }

    getRoomLevel() {
        let list = this.toggleLevel.getComponentsInChildren(Toggle);
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (element.isChecked) return index + 1;
        }
    }

    setToggleLevel(value: number) {
        let list = this.toggleLevel.getComponentsInChildren(Toggle);
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            if (value == index + 1) {
                element.isChecked = true;
                break;
            }
        }
    }

    btnOnBack() {
        if (this.playMode == -1) {
            this.node.destroy();
            TienlenSelect3d.instance.jumpRoomListToSel();
        } else {
            this.playMode = -1;
        }
    }

    private static _instance: TienlenRoomList;
    public static get instance(): TienlenRoomList {
        return this._instance;
    }
}

