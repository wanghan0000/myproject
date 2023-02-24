import { _decorator, Node, instantiate, UITransform, SpriteFrame, Label, Sprite, Button, sp, tween, v3 } from 'cc';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import pets from '../../../ScriptCore/protocol/pets.js';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import TienlenDefine from '../TienlenDefine';
import { TienlenSelect3d } from './TienlenSelect3d';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UserData } from '../../../ScriptCore/data/UserData';
import { TienlenUIMgr } from '../TienlenUIMgr';
import { RedDotData } from '../../../ScriptCore/data/RedDotData';
import { FuncExtend } from '../../../ScriptCore/panda/utils/FuncExtend';
import TienlenHelper from '../TienlenHelper';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
const { ccclass, property } = _decorator;

@ccclass('TienlenPet')
export class TienlenPet extends UIScreen {
    @property(Node)
    nodeItem: Node = null;
    @property(Node)
    nodeScrollContent: Node = null;
    @property(Node)
    nodePetSkill: Node = null;
    @property(Node)
    nodeShow: Node = null;
    @property(Node)
    nodePetDetial: Node = null;
    @property(Node)
    nodeBtnFllow: Node = null;
    @property(Node)
    nodeBtnRecall: Node = null;
    @property(Node)
    nodeBtnHowGet: Node = null;
    @property(SpriteFrame)
    sprFrmPet: SpriteFrame[] = [];
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
    labelPetName: Label = null;

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

    private _petItemArr: Node[] = [];
    private _petSelIndex: number = 0;
    private _petsInfoArr: pets.pets.IPetInfo[] = null;
    // private _petSeledData: pets.pets.IPetInfo = null;

    private static _instance: TienlenPet;
    public static get instance(): TienlenPet {
        return this._instance;
    }

    start () {
        TienlenPet._instance = this;
        this.initView();
    }

    onShow() {
        EventMgr.getInstance().addEventListener(EventName.SC_PET_INFO, this.onPetsInfoList, this);
        EventMgr.getInstance().addEventListener(EventName.SC_PET_RISINGSTAR, this.onPetUpStar, this);
        EventMgr.getInstance().addEventListener(EventName.SC_ROLEPETUNLOCK, this.onPetUnlock, this);
        EventMgr.getInstance().addEventListener(EventName.SC_ROLEPETUSEOP, this.onPetOpRet, this);
        this.doGetPetInfoList();
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
            TienlenSelect3d.instance.jumpPetToSel();
        }, 0.2);
    }

    doGetPetInfoList () {
        console.log("send get pets info msg!");
        SocketMgr.send(pets.pets.PetsPacketID.PACKET_CS_PET_INFO, {});
    }

    onPetsInfoList (list: pets.pets.SCPetInfo) {
        console.log("recv pets list msg:", list);
        this.nodeShow.active = true;
        this._petsInfoArr = list.Infos;
        this._petsInfoArr = this._petsInfoArr.sort((a, b) => a.Id - b.Id);
        let count = 0;
        let itemH = 190;
        for (let i = 0; i < this._petsInfoArr.length; i++) {
            let petData = this._petsInfoArr[i];
            if (petData.IsUsing) {
                this._petSelIndex = i;
            }
            let item = instantiate(this.nodeItem);
            this._petItemArr.push(item);
            item.active = true;
            item.parent = this.nodeScrollContent;
            item.setPosition(0, -i * itemH, 1);
            let petSpr = item.getChildByName("spr_pet").getComponent(Sprite);
            petSpr.spriteFrame =  this.sprFrmPet[petData.PetId-1000001];
            let gradeSpr = item.getChildByName("spr_rank").getComponent(Sprite);
            gradeSpr.spriteFrame =  this.sprFrmGrade[petData.Grade-1];
            item.getComponent(Sprite).spriteFrame = this.sprItemBgs[petData.Grade-1];
            let labelName = item.getChildByName("label_petname").getComponent(Label);
            //labelName.string = petData.Name;
            labelName.string = I18nMgr.getInstance().getStringFromIntroductionConfig(petData.PetId,"name");
            let nodeLock = item.getChildByName("node_lock");
            if (petData.IsUnlock) {
                nodeLock.active = false;
            }

            if (petData.Level != petData.MaxLevel && petData.HaveAmount >= petData.Amount) {
                FuncExtend.warn(item, 50, -10);
            }

            item!.on(Button.EventType.CLICK, () => {
                if (this._petSelIndex == i) {
                    return;
                }
                this.refreshSelView(i);
                this._petSelIndex = i;
                this.refreshSkillUI();
                this.refreshPetUI();
            }, this);

            count++;
        }
        let transform = this.nodeScrollContent.getComponent(UITransform);
        let size = transform.contentSize;
        transform.setContentSize(size.width, itemH * count);
        this.refreshSelView(this._petSelIndex);
        this.refreshSkillUI();
        this.refreshPetUI();
    }

    refreshSelView (index: number) {
        let item = this._petItemArr[this._petSelIndex];
        item.getChildByName("spr_sel").active = false;
        item = this._petItemArr[index];
        item.getChildByName("spr_sel").active = true;
    }

    refreshSkillUI () {
        let petData = this._petsInfoArr[this._petSelIndex];
        //this.labelTitle.string = petData.AwardTitle;
        this.labelTitle.string = I18nMgr.getInstance().getStringFromIntroductionConfig(petData.PetId,"AwardTitle");
        this.labelCurAdd.string = "+" + petData.Award + "%";
        this.labelNextAdd.string = "+" + petData.NextAward + "%";
        //this.labelStroy.string = petData.Story;
        this.labelStroy.string = I18nMgr.getInstance().getStringFromIntroductionConfig(petData.PetId,"story");

        this.sprFragment.spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_"+petData.Fragment);
        this.labelFragment.string = petData.HaveAmount + "/" + petData.Amount;
        this.labelCurStar.string = petData.Level.toString();

        this.nodeFullLevel.active = false;
        if (petData.Level == 0) {
            this.btnUnlock.node.getComponent(Sprite).grayscale = true;
            this.btnUnlock.node.active = true;
            this.btnUp.node.active = false;
        } else {
            this.btnUnlock.node.active = false;
            this.btnUp.node.active = true;
            this.btnUp.node.getComponent(Sprite).grayscale = true;
        }

        let toLv = petData.Level + 1;
        if (toLv > petData.MaxLevel) {
            toLv = petData.MaxLevel;
            this.btnUnlock.node.active = false;
            this.btnUp.node.active = false;
            this.nodeFullLevel.active = true;
        }
        this.labelToStar.string = toLv.toString();

        this.btnUp.interactable = false;
        this.nodeUpRed.active = false;
        this.btnUnlock.interactable = false;
        this.nodeUnlockRed.active = false;
        if (petData.HaveAmount >= petData.Amount) {
            this.btnUp.interactable = true;
            this.btnUp.node.getComponent(Sprite).grayscale = false;
            this.nodeUpRed.active = true;
            this.btnUnlock.interactable = true;
            this.nodeUnlockRed.active = true;
            this.btnUnlock.node.getComponent(Sprite).grayscale = false;
        }

        if (!this.nodeUpRed.active && !this.nodeUnlockRed.active) {
            RedDotData.getInstance().resetRedDotByPet();
        }

        if (this.nodeFullLevel.active) {
            RedDotData.getInstance().resetRedDotByPet();
        }

        if (petData.Level != petData.MaxLevel && petData.HaveAmount >= petData.Amount) {
            FuncExtend.warn(this._petItemArr[this._petSelIndex], 50, -10);
        } else {
            FuncExtend.clearnWarn(this._petItemArr[this._petSelIndex]);
        }
    }

    refreshPetUI () {
        let petData = this._petsInfoArr[this._petSelIndex];
        this.sprGradeShow.node.parent.active = true;
        this.sprGradeShow.spriteFrame = this.sprFrmGrade[petData.Grade-1];
        //this.labelPetName.string = petData.Name;
        this.labelPetName.string = I18nMgr.getInstance().getStringFromIntroductionConfig(petData.PetId,"name");

        if (petData.Level == 0) {
            this.nodeBtnFllow.active = false;
            this.nodeBtnRecall.active = false;
            this.nodeBtnHowGet.active = true;
        } else {
            this.nodeBtnHowGet.active = false;
            if (petData.IsUsing) {
                this.nodeBtnFllow.active = false;
                this.nodeBtnRecall.active = true;
            } else {
                this.nodeBtnFllow.active = true;
                this.nodeBtnRecall.active = false;
            }
        }
    }

    btnOnUpStar () {
        console.log("send up pet star");
        UIMgr.getInstance().showWaiting();
        let pack = new pets.pets.CSRisingStar();
        pack.RisingType = 1;
        let petData = this._petsInfoArr[this._petSelIndex];
        pack.RisingModId = petData.PetId;
        SocketMgr.send(pets.pets.PetsPacketID.PACKET_CS_PET_RISINGSTAR, pack);
    }

    btnOnUnlock () {
        console.log("send unlock pet");
        UIMgr.getInstance().showWaiting();
        let pack = new pets.pets.CSRolePetUnlock();
        pack.UseModType = 1;
        let petData = this._petsInfoArr[this._petSelIndex];
        pack.UseModId = petData.PetId;
        SocketMgr.send(pets.pets.PetsPacketID.PACKET_CS_ROLEPETUNLOCK, pack);
    }

    onPetUpStar (msg: pets.pets.SCPetRisingStar) {
        console.log("recv pet up star");
        UIMgr.getInstance().clearWaiting();
        if (msg.RetCode == 0) {
            for (let i = 0; i < this._petsInfoArr.length; i++) {
                let petData = this._petsInfoArr[i];
                if (petData.PetId == msg.PetInfo.PetId) {
                    this._petsInfoArr[i] = msg.PetInfo;
                }
            }
            this.refreshSkillUI();
            this.showUpSuccessTip();
            TienlenHelper.playSound(TienlenDefine.ROLEUPLEVEL);
        } else {
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("tienlen.shengxingshibaiTxt"));
        }
    }

    onPetUnlock (msg: pets.pets.SCRolePetUnlock) {
        console.log("recv pet unlock");
        UIMgr.getInstance().clearWaiting();
        if (msg.RetCode == 0) {
            this._petsInfoArr[this._petSelIndex] = msg.PetInfo;
            let item = this._petItemArr[this._petSelIndex];
            let nodeLock = item.getChildByName("node_lock");
            nodeLock.active = false;
            this.refreshSkillUI();
            this.refreshPetUI();
            this.showUnlockTip();
            TienlenHelper.playSound(TienlenDefine.ROLEUPLEVEL);
        } else {
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("tienlen.jiesuoshibaiTxt"));
        }
    }

    onPetOpRet (msg: pets.pets.SCRolePetUseOp) {
        console.log("recv pet op ret");
        UIMgr.getInstance().clearWaiting();
        let isUsing = this._petsInfoArr[this._petSelIndex].IsUsing;
        if (msg.RetCode == 0) { //succeed
            if (isUsing) {
                this.nodeBtnFllow.active = true;
                this.nodeBtnRecall.active = false;
                this._petsInfoArr[this._petSelIndex].IsUsing = false;

                // 跟随中宠物取消
                for (let i = 0; i < this._petsInfoArr.length; i++) {
                    let petData = this._petsInfoArr[i];
                    if (this._petSelIndex != i) {
                        petData.IsUsing = false;
                    }
                }
                UserData.getInstance().setUserPetId(0);
                // EventMgr.getInstance().dispatchEvent(TienlenDefine.UIEVENT_REFRESHPET, false);
            } else {
                this.nodeBtnFllow.active = false;
                this.nodeBtnRecall.active = true;
                this._petsInfoArr[this._petSelIndex].IsUsing = true;
                UserData.getInstance().setUserPetId(this._petsInfoArr[this._petSelIndex].PetId);
                // EventMgr.getInstance().dispatchEvent(TienlenDefine.UIEVENT_REFRESHPET, true);
            }
        } else if (msg.RetCode == 1) { //failed
            TienlenUIMgr.getInstance().AlertTxt(I18nMgr.getInstance().getStringByKey("lobby.caozuoshibaiTxt"));
        }
    }

    btnPetSkillCheck () {
        this.refreshToggleShow(true);
    }

    btnPetDetialCheck () {
        this.refreshToggleShow(false);
    }

    btnFllow () {
        console.log("send use pet");
        UIMgr.getInstance().showWaiting();
        let pack = new pets.pets.CSRolePetUseOp();
        pack.UseModType = 1;
        let petData = this._petsInfoArr[this._petSelIndex];
        pack.UseModId = petData.PetId;
        SocketMgr.send(pets.pets.PetsPacketID.PACKET_CS_ROLEPETUSEOP, pack);
    }

    btnRecall () {
        console.log("send recall pet");
        UIMgr.getInstance().showWaiting();
        let pack = new pets.pets.CSRolePetUseOp();
        pack.UseModType = 1;
        let petData = this._petsInfoArr[this._petSelIndex];
        pack.UseModId = petData.PetId;
        SocketMgr.send(pets.pets.PetsPacketID.PACKET_CS_ROLEPETUSEOP, pack);
    }

    initView() {
        this.refreshToggleShow(true);
        this.showAllUIAnim();
    }

    refreshToggleShow (flag: boolean) {
        this.nodePetSkill.active = flag;
        this.nodePetDetial.active = !flag;
    }

    showAllUIAnim () {

    }

    hideAllUiAnim (time: number) {
        let nodeTop = this.node.getChildByName("node_top");
        let nodeBtm = this.node.getChildByName("node_petnamebg");
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

    checkPetIsFollow (): boolean {
        return this._petsInfoArr[this._petSelIndex].IsUsing;
    }

    onBtnHowGet () {
        TienlenUIMgr.getInstance().alertRichTxt("<color=#b76846>参与TienLen玩法，有概率掉落碎片</color>\n<color=#00ff00ff><size=22>(底注越高，掉落概率和数量越高)</size></color>");
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
