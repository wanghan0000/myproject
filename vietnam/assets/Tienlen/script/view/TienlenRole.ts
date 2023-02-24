import { _decorator, Node, instantiate, UITransform, Button, Sprite, SpriteFrame, Label, tween, v3, sp } from 'cc';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import TienlenDefine from '../TienlenDefine';
import pets from '../../../ScriptCore/protocol/pets.js';
import { EventName } from '../../../ScriptCore/events/EventName';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { TienlenSelect3d } from './TienlenSelect3d';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UserData } from '../../../ScriptCore/data/UserData';
import { TienlenUIMgr } from '../TienlenUIMgr';
import { RedDotData } from '../../../ScriptCore/data/RedDotData';
import { FuncExtend } from '../../../ScriptCore/panda/utils/FuncExtend';
import TienlenHelper from '../TienlenHelper';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
const { ccclass, property } = _decorator;

@ccclass('TienlenRole')
export class TienlenRole extends UIScreen {
    @property(Node)
    nodeItem: Node = null;
    @property(Node)
    nodeScrollContent: Node = null;
    @property(Node)
    nodeShow: Node = null;
    @property(Node)
    nodeRoleSkill: Node = null;
    @property(Node)
    nodeRoleDetial: Node = null;
    @property(Node)
    nodeBtnUse: Node = null;
    @property(Node)
    nodeBtnHowGet: Node = null;
    @property(Node)
    nodeLabelUsed: Node = null;
    @property(SpriteFrame)
    sprFrmRole: SpriteFrame[] = [];
    @property(SpriteFrame)
    sprFrmGrade: SpriteFrame[] = [];
    @property(SpriteFrame)
    sprItemBgs: SpriteFrame[] = [];
    @property(Label)
    labelTitle: Label = null;
    @property(Label)
    labelCurAdd: Label = null;
    @property(Label)
    labelNextAdd: Label = null;
    @property(Label)
    labelStroy: Label = null;

    @property(Sprite)
    sprGradeShow: Sprite = null;
    @property(Label)
    labelRoleName: Label = null;

    @property(Sprite)
    sprFragment: Sprite = null;
    @property(Label)
    labelFragment: Label = null;
    @property(Label)
    labelCurStar: Label = null;
    @property(Label)
    labelToStar: Label = null;
    @property(Button)
    btnUnlock: Button = null;
    @property(Node)
    nodeUnlockRed: Node = null;
    @property(Button)
    btnUp: Button = null;
    @property(Node)
    nodeUpRed: Node = null;

    @property(Node)
    nodeFullLevel: Node = null;
    @property(Node)
    spineUp: Node = null;

    private _roleItemArr: Node[] = [];
    private _roleSelIndex: number = 0;
    private _rolesInfoArr: pets.pets.IRoleInfo[] = null;
    // private _roleSeledData: pets.pets.IRoleInfo = null;

    private static _instance: TienlenRole;
    public static get instance(): TienlenRole {
        return this._instance;
    }

    start () {
        TienlenRole._instance = this;
        this.initView();
    }

    onShow() {
        EventMgr.getInstance().addEventListener(EventName.SC_ROLE_INFO, this.onRolesInfoList, this);
        EventMgr.getInstance().addEventListener(EventName.SC_ROLE_RISINGSTAR, this.onRoleUpStar, this);
        EventMgr.getInstance().addEventListener(EventName.SC_ROLEPETUNLOCK, this.onRoleUnlock, this);
        EventMgr.getInstance().addEventListener(EventName.SC_ROLEPETUSEOP, this.onRoleOpRet, this);
        this.doGetRoleInfoList();
    }

    // onHide() {
    //     EventMgr.getInstance().removeByTarget(this);
    // }

    onDestroy () {
        EventMgr.getInstance().removeByTarget(this);
    }

    btnOnClose () {
        // this.hideAllUiAnim(0.1);

        this.scheduleOnce(() => {
            this.node.destroy();

            let roleData = this._rolesInfoArr[this._roleSelIndex];
            if (!roleData.IsUsing) {
                for (let i = 0; i < this._rolesInfoArr.length; i++) {
                    let roleData = this._rolesInfoArr[i];
                    if (roleData.IsUsing) {
                        TienlenSelect3d.instance.switchRole(roleData.RoleId-2000001);
                    }
                }
            }

            TienlenSelect3d.instance.jumpRoleToSel();
        }, 0.2);
    }

    doGetRoleInfoList () {
        console.log("send get role info msg!");
        SocketMgr.send(pets.pets.PetsPacketID.PACKET_CS_ROLE_INFO, {});
    }

    onRolesInfoList (list: pets.pets.SCRoleInfo) {
        console.log("recv roles list msg:", list);
        this.nodeShow.active = true;
        this._rolesInfoArr = list.Infos;
        this._rolesInfoArr = this._rolesInfoArr.sort((a, b) => a.Id - b.Id);
        let count = 0;
        let itemH = 153;
        for (let i = 0; i < this._rolesInfoArr.length; i++) {
            let roleData = this._rolesInfoArr[i];
            if (roleData.IsUsing) {
                this._roleSelIndex = i;
            }
            let item = instantiate(this.nodeItem);
            this._roleItemArr.push(item);
            item.active = true;
            item.parent = this.nodeScrollContent;
            item.setPosition(0, -i * itemH, 1);
            let roleSpr = item.getChildByName("spr_role").getComponent(Sprite);
            roleSpr.spriteFrame =  this.sprFrmRole[roleData.RoleId-2000001];
            let gradeSpr = item.getChildByName("spr_rank").getComponent(Sprite);
            gradeSpr.spriteFrame =  this.sprFrmGrade[roleData.Grade-1];
            item.getComponent(Sprite).spriteFrame = this.sprItemBgs[roleData.Grade-1];
            let labelName = item.getChildByName("label_rolename").getComponent(Label);

            //labelName.string = roleData.Name;
            labelName.string = I18nMgr.getInstance().getStringFromIntroductionConfig(roleData.RoleId,"name");

            let nodeLock = item.getChildByName("node_lock");
            if (roleData.IsUnlock) {
                nodeLock.active = false;
            }

            if (roleData.Level != roleData.MaxLevel && roleData.HaveAmount >= roleData.Amount) {
                FuncExtend.warn(item, 50, -10);
            }

            item!.on(Button.EventType.CLICK, () => {
                if (this._roleSelIndex == i) {
                    return;
                }
                this.refreshSelView(i);
                this._roleSelIndex = i;
                this.refreshSkillUI();
                this.refreshRoleUI(true);
            }, this);

            count++;
        }
        let transform = this.nodeScrollContent.getComponent(UITransform);
        let size = transform.contentSize;
        transform.setContentSize(size.width, itemH * count);
        this.refreshSelView(this._roleSelIndex);
        this.refreshSkillUI();
        this.refreshRoleUI(false);
    }

    refreshSelView (index: number) {
        let item = this._roleItemArr[this._roleSelIndex];
        item.getChildByName("spr_sel").active = false;
        item = this._roleItemArr[index];
        item.getChildByName("spr_sel").active = true;
    }

    refreshSkillUI () {
        let roleData = this._rolesInfoArr[this._roleSelIndex];
        //this.labelTitle.string = roleData.AwardTitle;
        this.labelTitle.string = I18nMgr.getInstance().getStringFromIntroductionConfig(roleData.RoleId,"AwardTitle");
        this.labelCurAdd.string = "+" + roleData.Award + "%";
        this.labelNextAdd.string = "+" + roleData.NextAward + "%";
        //this.labelStroy.string = roleData.Story;
        this.labelStroy.string = I18nMgr.getInstance().getStringFromIntroductionConfig(roleData.RoleId,"story")

        this.sprFragment.spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_"+roleData.Fragment);
        this.labelFragment.string = roleData.HaveAmount + "/" + roleData.Amount;
        this.labelCurStar.string = roleData.Level.toString();

        this.nodeFullLevel.active = false;
        if (roleData.Level == 0) {
            this.btnUnlock.node.getComponent(Sprite).grayscale = true;
            this.btnUnlock.node.active = true;
            this.btnUp.node.active = false;
        } else {
            this.btnUnlock.node.active = false;
            this.btnUp.node.active = true;
            this.btnUp.node.getComponent(Sprite).grayscale = true;
        }

        let toLv = roleData.Level + 1;
        if (toLv > roleData.MaxLevel) {
            toLv = roleData.MaxLevel;
            this.btnUnlock.node.active = false;
            this.btnUp.node.active = false;
            this.nodeFullLevel.active = true;
        }
        this.labelToStar.string = toLv.toString();

        this.btnUp.interactable = false;
        this.nodeUpRed.active = false;
        this.btnUnlock.interactable = false;
        this.nodeUnlockRed.active = false;
        if (roleData.HaveAmount >= roleData.Amount) {
            this.btnUp.interactable = true;
            this.btnUp.node.getComponent(Sprite).grayscale = false;
            this.nodeUpRed.active = true;
            this.btnUnlock.interactable = true;
            this.btnUnlock.node.getComponent(Sprite).grayscale = false;
            this.nodeUnlockRed.active = true;
        }

        if (!this.nodeUpRed.active && !this.nodeUnlockRed.active) {
            RedDotData.getInstance().resetRedDotByRole();
        }

        if (this.nodeFullLevel.active) {
            RedDotData.getInstance().resetRedDotByRole();
        }

        if (roleData.Level != roleData.MaxLevel && roleData.HaveAmount >= roleData.Amount) {
            FuncExtend.warn(this._roleItemArr[this._roleSelIndex], 50, -10);
        } else {
            FuncExtend.clearnWarn(this._roleItemArr[this._roleSelIndex]);
        }
    }

    refreshRoleUI (isRefRole: boolean) {
        let roleData = this._rolesInfoArr[this._roleSelIndex];
        if (isRefRole) {
            EventMgr.getInstance().dispatchEvent(TienlenDefine.UIEVENT_REFRESHROLE, this._roleSelIndex);
        }
        this.sprGradeShow.node.parent.active = true;
        this.sprGradeShow.spriteFrame = this.sprFrmGrade[roleData.Grade-1];
        //this.labelRoleName.string = roleData.Name;
        this.labelRoleName.string = I18nMgr.getInstance().getStringFromIntroductionConfig(roleData.RoleId,"name");

        if (roleData.Level == 0) {
            this.nodeBtnUse.active = false;
            this.nodeLabelUsed.active = false;
            this.nodeBtnHowGet.active = true;
        } else {
            this.nodeBtnHowGet.active = false;
            if (roleData.IsUsing) {
                this.nodeBtnUse.active = false;
                this.nodeLabelUsed.active = true;
            } else {
                this.nodeBtnUse.active = true;
                this.nodeLabelUsed.active = false;
            }
        }

    }

    btnOnUpStar () {
        console.log("send up role star");
        UIMgr.getInstance().showWaiting();
        let pack = new pets.pets.CSRisingStar();
        pack.RisingType = 0;
        let roleData = this._rolesInfoArr[this._roleSelIndex];
        pack.RisingModId = roleData.RoleId;
        SocketMgr.send(pets.pets.PetsPacketID.PACKET_CS_PET_RISINGSTAR, pack);
    }

    onRoleUpStar (msg: pets.pets.SCRoleRisingStar) {
        console.log("recv pet up star");
        UIMgr.getInstance().clearWaiting();
        if (msg.RetCode == 0) {
            for (let i = 0; i < this._rolesInfoArr.length; i++) {
                let roleData = this._rolesInfoArr[i];
                if (roleData.RoleId == msg.RoleInfo.RoleId) {
                    this._rolesInfoArr[i] = msg.RoleInfo;
                }
            }
            this.refreshSkillUI();
            this.showUpSuccessTip();
            TienlenHelper.playSound(TienlenDefine.ROLEUPLEVEL);
        } else {
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("tienlen.shengxingshibaiTxt"));
        }
    }

    btnOnUnlock () {
        console.log("send unlock role");
        UIMgr.getInstance().showWaiting();
        let pack = new pets.pets.CSRolePetUnlock();
        pack.UseModType = 0;
        let roleData = this._rolesInfoArr[this._roleSelIndex];
        pack.UseModId = roleData.RoleId;
        SocketMgr.send(pets.pets.PetsPacketID.PACKET_CS_ROLEPETUNLOCK, pack);
    }

    onRoleUnlock (msg: pets.pets.SCRolePetUnlock) {
        console.log("recv role unlock");
        UIMgr.getInstance().clearWaiting();
        if (msg.RetCode == 0) {
            this._rolesInfoArr[this._roleSelIndex] = msg.RoleInfo;
            let item = this._roleItemArr[this._roleSelIndex];
            let nodeLock = item.getChildByName("node_lock");
            nodeLock.active = false;
            this.refreshSkillUI();
            this.refreshRoleUI(false);
            this.showUnlockTip();
            TienlenHelper.playSound(TienlenDefine.ROLEUPLEVEL);
        } else {
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("tienlen.jiesuoshibaiTxt"));
        }
    }

    onRoleOpRet (msg: pets.pets.SCRolePetUseOp) {
        console.log("recv role op ret");
        UIMgr.getInstance().clearWaiting();
        if (msg.RetCode == 0) { //succeed
            this.nodeBtnUse.active = false;
            this.nodeLabelUsed.active = true;
            for (let i = 0; i < this._rolesInfoArr.length; i++) {
                let roleData = this._rolesInfoArr[i];
                if (this._roleSelIndex == i) {
                    roleData.IsUsing = true;
                    UserData.getInstance().setUserRoleId(roleData.RoleId);
                } else {
                    roleData.IsUsing = false;
                }
            }
        } else if (msg.RetCode == 1) { //failed
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.caozuoshibaiTxt"));
        }
    }

    btnRoleSkillCheck () {
        this.refreshToggleShow(true);
    }

    btnRoleDetialCheck () {
        this.refreshToggleShow(false);
    }

    initView () {
        this.refreshToggleShow(true);
        this.showAllUIAnim();
    }

    refreshToggleShow (flag: boolean) {
        this.nodeRoleSkill.active = flag;
        this.nodeRoleDetial.active = !flag;
    }

    onBtnUseRole () {
        console.log("send use role");
        UIMgr.getInstance().showWaiting();
        let pack = new pets.pets.CSRolePetUseOp();
        pack.UseModType = 0;
        let roleData = this._rolesInfoArr[this._roleSelIndex];
        pack.UseModId = roleData.RoleId;
        SocketMgr.send(pets.pets.PetsPacketID.PACKET_CS_ROLEPETUSEOP, pack);
    }

    onBtnHowGet () {
        TienlenUIMgr.getInstance().alertRichTxt("<color=#b76846>参与TienLen玩法，有概率掉落碎片</color>\n<color=#00ff00ff><size=22>(底注越高，掉落概率和数量越高)</size></color>");
    }

    showAllUIAnim () {

    }

    hideAllUiAnim (time: number) {
        let nodeTop = this.node.getChildByName("node_top");
        let nodeBtm = this.node.getChildByName("node_rolenamebg");
        let nodeLeft = this.node.getChildByName("spr_scrollbg");
        let nodeRight = this.node.getChildByName("node_show");
        tween(nodeTop).to(time, {position: v3(nodeTop.position.x, nodeTop.position.y + 100, nodeTop.position.z)})
                        .start();
        tween(nodeBtm).to(time, {position: v3(nodeBtm.position.x, nodeBtm.position.y - 100, nodeBtm.position.z)})
                        .start();
        tween(nodeLeft).to(time, {position: v3(nodeLeft.position.x - 300, nodeLeft.position.y, nodeLeft.position.z)})
                        .start();
        tween(nodeRight).to(time, {position: v3(nodeRight.position.x + 800, nodeRight.position.y, nodeRight.position.z)})
                        .start();
    }

    showUpSuccessTip () {
        this.spineUp.active = true;
        let houAni = this.spineUp.getChildByName("nodeup1");
        houAni.active = true;
        houAni.getComponent(sp.Skeleton).setAnimation(0,"levelup",false);
        houAni.getComponent(sp.Skeleton).premultipliedAlpha = false;
        houAni.getComponent(sp.Skeleton).setCompleteListener(()=>{
            houAni.active = false;
        });

        let qianAni = this.spineUp.getChildByName("nodeup2");
        qianAni.active = true;
        qianAni.getComponent(sp.Skeleton).setAnimation(0,"levelup",false);
        qianAni.getComponent(sp.Skeleton).premultipliedAlpha = false;
        qianAni.getComponent(sp.Skeleton).setCompleteListener(()=>{
            qianAni.active = false;
        })
    }

    showUnlockTip () {
        this.spineUp.active = true;

        let houAni = this.spineUp.getChildByName("nodeup1");
        houAni.active = true;
        houAni.getComponent(sp.Skeleton).setAnimation(0,"unlock",false);
        houAni.getComponent(sp.Skeleton).premultipliedAlpha = false;
        houAni.getComponent(sp.Skeleton).setCompleteListener(()=>{
            houAni.active = false;
        });

        let qianAni = this.spineUp.getChildByName("nodeup2");
        qianAni.active = true;
        qianAni.getComponent(sp.Skeleton).setAnimation(0,"unlock",false);
        qianAni.getComponent(sp.Skeleton).premultipliedAlpha = false;
        qianAni.getComponent(sp.Skeleton).setCompleteListener(()=>{
            qianAni.active = false;
        });
    }
}
