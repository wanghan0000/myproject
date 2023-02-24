import { _decorator, Node, Animation, Button, tween, v3, Sprite, sp, sys } from 'cc';
import { RedDotData } from '../../../ScriptCore/data/RedDotData';
import { UserData } from '../../../ScriptCore/data/UserData';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { GameConst, MailNowLocation, ShopNowLocation } from '../../../ScriptCore/Lobby/Scripts/gameconfig/GameConst';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { FuncExtend } from '../../../ScriptCore/panda/utils/FuncExtend';
import bag from '../../../ScriptCore/protocol/bag.js';
import gamehall from '../../../ScriptCore/protocol/gamehall.js';
import player from '../../../ScriptCore/protocol/player.js';
import welfare from '../../../ScriptCore/protocol/welfare.js';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import { UIManager } from '../../../ScriptCore/UIFrame/UIManager';
import { UIRoot } from '../../../ScriptCore/UIFrame/UIRoot';
import { ButtonPlus } from '../common/component/ButtonPlus';
import { WndSocialTips2 } from '../friend/WndSocialTips2';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { TienlenUIMgr } from '../TienlenUIMgr';
import { TienlenSelect3d } from './TienlenSelect3d';
const { ccclass, property } = _decorator;

@ccclass('TienlenSelect')
export class TienlenSelect extends UIScreen {
    private _rBtmBtnIsOut: boolean = true;
    private _btnChat: ButtonPlus;
    private static _instance: TienlenSelect;
    @property(Node)
    itemList: Node[] = [];
    @property(Node)
    node_rightbtm: Node = null;
    @property(Animation)
    anim_rightBtmInOut: Animation = null;
    @property(Button)
    btn_rightBtmInOut: Button = null;
    @property(sp.Skeleton)
    spine_activitynew: sp.Skeleton = null;
    @property(Node)
    node_activitytip: Node = null;
    @property(sp.Skeleton)
    spine_activityarr: sp.Skeleton[] = [];
    @property(Node)
    node_activitylabel: Node[] = [];

    private isOpenActivityNew: boolean = false;
    private iscanclickactivity: boolean = true;

    public static get instance(): TienlenSelect {
        return this._instance;
    }


    //商城按钮
    // private btnshop: Node = null;
    //缩放按钮
    // private btnSuofang: Node = null;
    //邮件的按钮
    private btnMail: Node = null;
    //角色按钮
    private btnRole: Node = null;
    //宠物按钮
    private btnPet: Node = null;
    //活动
    // private btnActivity: Node = null;

    private btn_classroom_spine:Node = null;
    private btn_yuleroom_spine:Node = null;
    private btn_freedomroom_spine:Node = null;
    private btn_matchroom_spine:Node = null;

    onLoad() {
        TienlenSelect._instance = this;
        this._btnChat = this.node.getChildByName("btnChat").getComponent(ButtonPlus);
        this._btnChat.setClickHandler(() => {
            TienlenHelper.showSocial();
        }, this)
        let btnChatBg = this.node.getChildByName("msg_bg").getComponent(ButtonPlus);
        btnChatBg.setClickHandler(() => {
            TienlenHelper.showSocial();
        }, this)
        for (let index = 0; index < this.itemList.length; index++) {
            const element = this.itemList[index];
            element.getComponent(ButtonPlus).setClickHandler(async () => {
                if (index == 3) {
                    this.node.active = false;
                    TienlenHelper.showMatch();
                    return;
                } else if (index == 2) {
                    this.node.destroy();
                    TienlenSelect3d.instance.jumpSelToRoomList();
                } else {
                    UIMgr.getInstance().showWaiting();
                    let gameid = index == 0 ? GameConst.GameId_TienLen : GameConst.GameId_TienLenYL;
                    let code = await TienlenHelper.checkEnterGame(gameid);
                    if (code == gamehall.gamehall.OpResultCode.OPRC_CoinNotEnough) {
                        TienlenHelper.showFloatTips('金币不足', this.node)
                    } else if (code == gamehall.gamehall.OpResultCode.OPRC_RoomHadClosed) {
                        TienlenHelper.showFloatTips('房间已关闭', this.node)
                    } else if (code == gamehall.gamehall.OpResultCode.OPRC_SceneServerMaintain) {
                        TienlenHelper.showFloatTips('服务器在维护', this.node)
                    } else if (code) {
                        TienlenHelper.showFloatTips(gamehall.gamehall.OpResultCode[code], this.node)
                    } else if (code == 0) {
                        this.node.destroy();
                    }
                    UIMgr.getInstance().clearWaiting();
                }
            }, this);
        }
        // this.btnshop = this.node.getChildByName("node_rightbtm").getChildByName("btnshop");
        // this.btnSuofang = this.node.getChildByName("node_rightbtm").getChildByName("btn_suofang");
        this.btnMail = this.node.getChildByName("node_rightbtm").getChildByName("Layout").getChildByName("btnmail");
        this.btnRole = this.node.getChildByName("node_rightbtm").getChildByName("Layout").getChildByName("btnrole");
        this.btnPet = this.node.getChildByName("node_rightbtm").getChildByName("Layout").getChildByName("btnpet");
        // this.btnActivity = this.node.getChildByName("node_rightbtm").getChildByName("btnactivity");

        this.btn_classroom_spine = this.node.getChildByName("node_roomsel").getChildByName("btn_classroom").getChildByName("spine");
        this.btn_yuleroom_spine = this.node.getChildByName("node_roomsel").getChildByName("btn_yuleroom").getChildByName("spine");
        this.btn_freedomroom_spine = this.node.getChildByName("node_roomsel").getChildByName("btn_freedomroom").getChildByName("spine");
        this.btn_matchroom_spine = this.node.getChildByName("node_roomsel").getChildByName("btn_matchroom").getChildByName("spine");

        FuncExtend.adapterSafeAreRect(this._btnChat.node);

        //玩家的个人信息的适配
        let userNode = this.node.getChildByName("User");
        FuncExtend.adapterSafeAreRect(userNode);

        //返回按钮
        let btnBack = this.node.getChildByName("btnreturn");
        FuncExtend.adapterSafeAreRect(btnBack);

        this.loadEnterySpineByI18n();
    }


    /**
     * 根据多语言加载不同的语言节点
     * var socket = new sp.SpineSocket("root/hip/tail1/tail2/tail3/tail4/tail5/tail6/tail7/tail8/tail9/tail10", this.attachNode); // 第一个参数传入的是挂点的目标骨骼。第二个参数传入的是挂点的节点
         this.skeleton!.sockets.push(socket);
         this.skeleton!.sockets = this.skeleton!.sockets;
     */
    loadEnterySpineByI18n(){
        let lng = I18nMgr.getInstance().getCurLngKey();
        console.log("当前的语言为:",lng,"============");
        let atlas = ResMgr.getInstance().getSpriteAtlasByPath(`Tienlen/texture-${lng}/${lng}_tienlen`);
        
        console.log(atlas);
        //经典场
        let jingdianNode = new Node();
        jingdianNode.addComponent(Sprite);
        jingdianNode.getComponent(Sprite).spriteFrame = atlas.getSpriteFrame(`${lng}_tienlen_anim_jingdianchang`);
        console.log("静电场");
        console.log(atlas.getSpriteFrame(`${lng}_tienlen_anim_jingdianchang`));

        this.btn_classroom_spine.removeAllChildren();
        this.btn_classroom_spine.addChild(jingdianNode);
        jingdianNode.setPosition(v3(-40,50,0))
        //jingdianNode.setRotationFromEuler(v3(0,0,90));
        let jingdiansocket = new sp.SpineSocket("root/icon/ziti",jingdianNode);
        this.btn_classroom_spine.getComponent(sp.Skeleton).sockets.length = 0;
        this.btn_classroom_spine.getComponent(sp.Skeleton).sockets.push(jingdiansocket);
        //this.btn_classroom_spine.getComponent(sp.Skeleton).sockets = this.btn_classroom_spine.getComponent(sp.Skeleton).sockets;
        
        //娱乐场
        let yuleNode = new Node();
        yuleNode.addComponent(Sprite);
        yuleNode.getComponent(Sprite).spriteFrame = atlas.getSpriteFrame(`${lng}_tienlen_anim_yulechang`);

        this.btn_yuleroom_spine.removeAllChildren();
        this.btn_yuleroom_spine.addChild(yuleNode);
        yuleNode.setPosition(v3(-50,50,0))
        //yuleNode.setRotationFromEuler(v3(0,0,90));
        let yuleNodeSocket = new sp.SpineSocket("root/icon/ziti",yuleNode);
        this.btn_yuleroom_spine.getComponent(sp.Skeleton).sockets.push(yuleNodeSocket);
        //自由场
        let ziyouNode = new Node();
        ziyouNode.addComponent(Sprite);
        ziyouNode.getComponent(Sprite).spriteFrame = atlas.getSpriteFrame(`${lng}_tienlen_anim_ziyouzhuo`);
        this.btn_freedomroom_spine.removeAllChildren();
        this.btn_freedomroom_spine.addChild(ziyouNode);
        ziyouNode.setPosition(v3(-40,50,0))
        //ziyouNode.setRotationFromEuler(v3(0,0,90));
        let ziyousocket = new sp.SpineSocket("root/icon/ziti",ziyouNode);
        this.btn_freedomroom_spine.getComponent(sp.Skeleton).sockets.length = 0;
        this.btn_freedomroom_spine.getComponent(sp.Skeleton).sockets.push(ziyousocket);

        //比赛场
        let bisaiNode = new Node();
        bisaiNode.addComponent(Sprite);
        bisaiNode.getComponent(Sprite).spriteFrame = atlas.getSpriteFrame(`${lng}_tienlen_anim_bisaichang`);

        this.btn_matchroom_spine.removeAllChildren();
        this.btn_matchroom_spine.addChild(bisaiNode);
        bisaiNode.setPosition(v3(-40,50,0))
        //bisaiNode.setRotationFromEuler(v3(0,0,90));
        let bisaiSocket = new sp.SpineSocket("root/icon/ziti",bisaiNode);
        this.btn_matchroom_spine.getComponent(sp.Skeleton).sockets.length = 0;
        this.btn_matchroom_spine.getComponent(sp.Skeleton).sockets.push(bisaiSocket);
    }




    async onEnable() {
        for (let index = 0; index < this.itemList.length; index++) {
            const element = this.itemList[index];
            element.active = true;
            const y = element.position.y;
            element.setPosition(element.position.x, y + 30);
            tween(element).to(0.3 + 0.1 * index, { position: v3(element.position.x, y) }).start();
        }
    }

    async onBtnClose() {
        await UIManager.getInstance().closeAllWin();
        await WndSocialTips2.hideAll();
        TienlenSelect3d.instance.onBtnClose();
    }

    async onShow(...params: any[]) {
        // let gameConfRomote = GameState.getInstance().getGameConfRomote();
        // gameConfRomote.GameCfg.sort((l, r) => l.BaseScore - r.BaseScore);
        // for (let index = 0; index < this._itemList.length; index++) {
        //     const element = gameConfRomote.GameCfg[index];
        //     this._itemList[index].labelLimit.string = `BaseScore:${element.BaseScore} Limit:${element.LimitCoin}`;
        //     this._itemList[index].labelTitle.string = element.LogicId.toString();
        // }

        EventMgr.getInstance().addEventListener(EventName.RED_DOT_NOTIFY, this.chkRedDot, this);
        let pack = new bag.bag.CSBagInfo();
        SocketMgr.send(bag.bag.SPacketID.PACKET_ALL_BAG_INFO, pack);
        //检测是否有未读信息
        this.checkUnread();
        this.checkShowInvite();
        this.chkRedDot();
        EventMgr.getInstance().addEventListener(EventName.I18N_CHANGED_NOTIFY,this.loadEnterySpineByI18n,this);

        EventMgr.getInstance().addEventListener(EventName.SC_WELF_FIRSTPAYINFO, this.onFirCharge, this);
        EventMgr.getInstance().addEventListener(EventName.SC_VIPINFO, this.onVipInfo, this);
        EventMgr.getInstance().addEventListener(EventName.SC_WELF_CONTINPAYINFO, this.onContinueCharge, this);
    }

    onHide() {
        EventMgr.getInstance().removeByTarget(this);
    }

    //判定是否有红点
    private async chkRedDot() {
        // let isShowBtnSuoFangRed = false;
        //判断商城是否有红点，如果商城上有红点 btnSuoFang 上也有红点
        // let shopRedtDot = RedDotData.getInstance().chkIsRedDotByShop(ShopNowLocation.TienLen_location);
        // if (shopRedtDot) {
        //     FuncExtend.warn(this.btnshop, 64 / 2 - 4, 72 / 2 - 4);
        //     // if (this._rBtmBtnIsOut) {
        //     //     isShowBtnSuoFangRed = true;
        //     // }
        // } else {
        //     FuncExtend.clearnWarn(this.btnshop);
        // }
        //判断邮件是否有红点
        let mailRedDot = RedDotData.getInstance().chkIsRedDotByMail(MailNowLocation.TienLen_location);
        if (mailRedDot) {
            if(this.btnMail != null){
                FuncExtend.warn(this.btnMail, 70 / 2 - 10, 80 / 2 - 10);
            }
        } else {
            if(this.btnMail != null){
                FuncExtend.clearnWarn(this.btnMail);
            }
        }

        let roleRedDot = RedDotData.getInstance().chkIsRedDotByRole();
        if (roleRedDot) {
            FuncExtend.warn(this.btnRole, 64 / 2 - 4, 72 / 2 - 4);
            // if (this._rBtmBtnIsOut) {
            //     isShowBtnSuoFangRed = true;
            // }
        }

        let petRedDot = RedDotData.getInstance().chkIsRedDotByPet();
        if (petRedDot) {
            FuncExtend.warn(this.btnPet, 64 / 2 - 4, 72 / 2 - 4);
            // if (this._rBtmBtnIsOut) {
            //     isShowBtnSuoFangRed = true;
            // }
        }

        // let roomId = UserData.getInstance().getRoomId();
        // let gameFreeId = UserData.getInstance().getGameFreeId();
        // if (roomId != null && roomId != 0 && gameFreeId != null && gameFreeId != 0) {
        // } else {
        //     let ret = await TienlenHelper.callSignData();
        //     TienlenRuntime.signData = ret;
        //     if (ret.SignCount < 14 && ret.TodaySign == 0) {
        //         FuncExtend.warn(this.btnActivity, 64 / 2 - 4, 72 / 2 - 4);
        //         // if (this._rBtmBtnIsOut) {
        //         //     isShowBtnSuoFangRed = true;
        //         // }
        //     } else {
        //         FuncExtend.clearnWarn(this.btnActivity);
        //     }
        // }

        // if (isShowBtnSuoFangRed) {
        //     FuncExtend.warn(this.btnSuofang, -64 / 2 + 4, -72 / 2 + 4);
        // } else {
        //     FuncExtend.clearnWarn(this.btnSuofang);
        // }
    }

    private checkShowInvite() {
        let invite = UserData.getInstance().inviteFriend;
        if (invite) {
            // TienlenHelper.showInvite(invite);
            WndSocialTips2.show(invite);
        }
        UserData.getInstance().inviteFriend = null;
    }

    public checkUnread() {
        if (TienlenRuntime.unreadRequestList.FriendApplys.length > 0 || (TienlenRuntime.totalUnreadNum > 0)) {
            this._btnChat.node.children[0].active = true;
        } else {
            this._btnChat.node.children[0].active = false;
        }
    }

    public updateUnreadFlag(value: boolean) {
        this._btnChat.node.children[0].active = value;
    }

    onDestroy() {
        EventMgr.getInstance().removeByTarget(this);
    }

    //打开商城的界面
    onBtnShop() {
        TienlenUIMgr.getInstance().showTienLenShop();
    }

    //打开活动界面
    onBtnActivity() {
        TienlenUIMgr.getInstance().showTienLenActivity();
    }

    //打开背包
    onBtnBag() {
        TienlenUIMgr.getInstance().showBag();
    }

    //打开邮件
    onBtnMail() {
        TienlenUIMgr.getInstance().showMail();
    }

    //打开设置
    onBtnSet() {
        TienlenUIMgr.getInstance().showTienLenSet();
    }

    //打开宠物
    onBtnPet() {
        // TienlenHelper.showTienLenPet();
        this.node.removeFromParent();
        TienlenSelect3d.instance.jumpSelToPet();
    }

    //打开角色
    onBtnRole() {
        // TienlenHelper.showTienLenRole();
        this.node.removeFromParent();
        TienlenSelect3d.instance.jumpSelToRole();
    }

    onBtnRightBtmInOut() {
        if (this._rBtmBtnIsOut) {
            this._rBtmBtnIsOut = false;
            this.anim_rightBtmInOut.play("anim_sel_rightbtm_btn_in");
            this.btn_rightBtmInOut.interactable = false;
            // FuncExtend.clearnWarn(this.btnSuofang);
            this.anim_rightBtmInOut.once(Animation.EventType.FINISHED, () => {
                this.btn_rightBtmInOut.interactable = true;
            }, this);
        } else {
            this._rBtmBtnIsOut = true;
            this.anim_rightBtmInOut.play("anim_sel_rightbtm_btn_out");
            this.btn_rightBtmInOut.interactable = false;
            this.anim_rightBtmInOut.once(Animation.EventType.FINISHED, () => {
                this.btn_rightBtmInOut.interactable = true;
                this.chkRedDot();
            }, this);
        }
    }

    onBtnActivityNew() {
        if (!this.iscanclickactivity) {
            return;
        }
        this.iscanclickactivity = false;
        this.scheduleOnce(() => {
            this.iscanclickactivity = true;
        }, 0.6);

        if (this.isOpenActivityNew) {
            this.isOpenActivityNew = false;
            
            this.spine_activitynew.setAnimation(0, "guanbi", false);

            for(let spine of this.spine_activityarr) {
                spine.setAnimation(0, "guanbi", false);
                spine.setCompleteListener(() => {
                    spine.node.parent.active = false;
                    spine.setCompleteListener(null);
                });
            }
            // for(let nodeLabel of this.node_activitylabel) {
            //     nodeLabel.active = false;
            // }

            this.spine_activitynew.setCompleteListener(() => {
                this.spine_activitynew.setAnimation(0, "guanbi_idle", false);
                this.spine_activitynew.setCompleteListener(null);
            });

            this.scheduleOnce(() => {
                this.node_activitytip.active = true;
            }, 0.5);

        } else {
            this.isOpenActivityNew = true;
            this.node_activitytip.active = false;
            this.spine_activitynew.setAnimation(0, "dakai", false);

            for(let spine of this.spine_activityarr) {
                spine.node.parent.active = true;
                spine.setAnimation(0, "dakai", false);
                spine.setCompleteListener(() => {
                    spine.setAnimation(0, "dakai_idle", true);
                    spine.setCompleteListener(null);
                });
            }
            // for(let nodeLabel of this.node_activitylabel) {
            //     nodeLabel.active = true;
            // }

            this.spine_activitynew.setCompleteListener(() => {
                this.spine_activitynew.setAnimation(0, "dakai_idle", true);
                this.spine_activitynew.setCompleteListener(null);
            });
        }
    }

    // update(deltaTime: number) {
    //     let eulerAngles = this.node_modelmale.eulerAngles;
    //     this.node_modelmale.setRotationFromEuler(eulerAngles.x, eulerAngles.y + deltaTime * 10, eulerAngles.z);
    // }

    onBtnVip() {
        console.log("send vipinfo get");
        UIMgr.getInstance().showWaiting();
        let pack = new player.player.CSVIPInfo();
        SocketMgr.send(player.player.PlayerPacketID.PACKET_CS_VIPINFO, pack);
    }

    onVipInfo(msg: player.player.SCVIPInfo) {
        console.log("recv vipinfo get");
        UIMgr.getInstance().clearWaiting();
        if (msg.OpRetCode == player.player.OpResultCode.OPRC_Sucess) {
            TienlenUIMgr.getInstance().showTienLenVip(msg);
        }
    }

    async onBtnSevenSign() {
        console.log("send rewardinfo get");
        UIMgr.getInstance().showWaiting();
        // let pack = new welfare.welfare.CSWelfaredInfo();
        // SocketMgr.send(welfare.welfare.SPacketID.PACKET_CS_WELF_WELFAREINFO, pack);
        let ret = await TienlenHelper.callSignData();
        UIMgr.getInstance().clearWaiting();
        TienlenUIMgr.getInstance().showTienLenSevenSign(ret);
    }

    onRewardInfo(msg: welfare.welfare.SCWelfaredInfo) {
        console.log("recv rewardinfo get");
        UIMgr.getInstance().clearWaiting();

        TienlenUIMgr.getInstance().showTienLenSevenSign(msg);
    }

    async onBtnBlindBox() {
        console.log("send blindboxinfo get");
        UIMgr.getInstance().showWaiting();
        let pack = new welfare.welfare.CSBlindBoxInfo();
        SocketMgr.send(welfare.welfare.SPacketID.PACKET_CS_WELF_BLINBOXINFO, pack);
        EventMgr.getInstance().addEventListener(EventName.SC_WELF_BLINBOXINFO, this.onBlindBox, this);
    }

    onBlindBox(msg: welfare.welfare.SCBlindBoxInfo) {
        console.log("recv blindboxinfo get");
        UIMgr.getInstance().clearWaiting();
        if (msg.OpRetCode == welfare.welfare.OpResultCode.OPRC_Sucess) {
            TienlenUIMgr.getInstance().showBlindBox(msg);
            EventMgr.getInstance().remove(EventName.SC_WELF_BLINBOXINFO, this.onBlindBox, this);
        }
    }

    btnOnFirCharge() {
        console.log("send fircharge get");
        UIMgr.getInstance().showWaiting();
        let pack = new welfare.welfare.CSWelfareFirstPayData();
        SocketMgr.send(welfare.welfare.SPacketID.PACKET_CS_WELF_FIRSTPAYINFO, pack);
    }

    onFirCharge(msg: welfare.welfare.SCWelfareFirstPayData) {
        console.log("recv fircharge get");
        UIMgr.getInstance().clearWaiting();
        if (msg.OpRetCode == welfare.welfare.OpResultCode.OPRC_Sucess) {
            TienlenUIMgr.getInstance().showFirCharge(msg);
        }
    }

    btnOnContinueCharge() {
        console.log("send continuecharge get");
        UIMgr.getInstance().showWaiting();
        let pack = new welfare.welfare.CSWelfareContinuousPayData();
        SocketMgr.send(welfare.welfare.SPacketID.PACKET_CS_WELF_CONTINPAYINFO, pack);
    }

    onContinueCharge(msg: welfare.welfare.SCWelfareContinuousPayData) {
        console.log("recv continuecharge get");
        UIMgr.getInstance().clearWaiting();
        if (msg.OpRetCode == welfare.welfare.OpResultCode.OPRC_Sucess) {
            TienlenUIMgr.getInstance().showCoutinueCharge(msg);
        }
    }
}

