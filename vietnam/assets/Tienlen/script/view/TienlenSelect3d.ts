import { _decorator, v3, tween, Prefab, Node, instantiate, SkeletalAnimation, randomRangeInt, geometry, input, Input, Camera, EventTouch, director, Quat, PhysicsSystem, BoxCollider, Vec3, bezier, v2, Vec2, math, sp, game } from 'cc';
import { AudioMgr } from '../../../ScriptCore/audio/AudioMgr';
import { UserData } from '../../../ScriptCore/data/UserData';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { LogicEvent, LogicEventData } from '../../../ScriptCore/games/LogicEvent';
import { GameState } from '../../../ScriptCore/gamestate/GameState';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { AdapterMgr, AdapterType } from '../../../ScriptCore/UIFrame/AdapterMgr';
import { UIScreen } from '../../../ScriptCore/UIFrame/UIForm';
import { UIManager } from '../../../ScriptCore/UIFrame/UIManager';
import { UIRoot } from '../../../ScriptCore/UIFrame/UIRoot';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
import { TienlenPet } from './TienlenPet';
import { TienlenRole } from './TienlenRole';
import { TienlenRoomList } from './TienlenRoomList';
import { TienlenSelect } from './TienlenSelect';
const { ccclass, property } = _decorator;

@ccclass('TienlenSelect3d')
export class TienlenSelect3d extends UIScreen {


    is3d = true;
    private static _instance: TienlenSelect3d;

    @property(Node)
    node_camera_3darr: Node[] = [];
    @property(Node)
    node_camera: Node = null;

    @property(Node)
    node_role: Node = null;
    @property(Node)
    node_pet: Node = null;

    @property(Prefab)
    pfb_roleArr: Prefab[] = [];
    @property(Prefab)
    pfb_petArr: Prefab[] = [];

    //任务动画的测试    
    @property(Prefab)
    lv_up_ani:Prefab = null;

    @property(Prefab)
    pfb_select: Prefab = null;
    @property(Prefab)
    pfb_role: Prefab = null;
    @property(Prefab)
    pfb_pet: Prefab = null;
    @property(Prefab)
    pfb_roomlist: Prefab = null;

    private _ray: geometry.Ray = new geometry.Ray();
    private _isTouchRoleModel: boolean = false;
    private _isMoveRoleModel: boolean = false;
    private _isRoleModelCanTouch: boolean = true;

    private _isTouchPetModel: boolean = false;
    private _isPetModelCanTouch: boolean = true;

    private _animRole: SkeletalAnimation = null;
    private _spineRole: sp.Skeleton = null;
    private _animPet: SkeletalAnimation = null;

    private _randomInterval: number = randomRangeInt(5, 10) * 60;
    private _timeElapsed: number = 0;

    private _roleOriPos: Vec3 = v3(-4, -1, 0);
    private _roleToRoleViewPos: Vec3 = v3(-1.2, -1, -8);
    private _petOriPos: Vec3 = v3(-2.5, -1, 0);
    private _petToPetViewPos: Vec3 = v3(-22.5, -1, -10);
    private _petMoveDotCtlArr1: Vec2[] = [v2(-2.5, 0), v2(-8, 2), v2(-14, 2), v2(-22.5, -10)];
    private _petMoveDotCtlArr2: Vec2[] = [v2(-22.5, -10), v2(-8, 2), v2(-14, 2), v2(-2.5, 0)];
    private _petMoveInterval: number = 0;
    private _petMoveDuration: number = 2;
    private _isPetMove: boolean = false;
    private _cameraMoveDotCtlArr1: Vec2[] = [v2(0, 0), v2(-8, 2), v2(-14, 2), v2(-21, -10)];
    private _cameraMoveDotCtlArr2: Vec2[] = [v2(-21, -10), v2(-8, 2), v2(-14, 2), v2(0, 0)];

    static PageIndex_sel = 0;
    static PageIndex_role = 1;
    static PageIndex_pet = 2;
    static PageIndex_roomsel = 3;
    public pageIndex = TienlenSelect3d.PageIndex_sel;

    static RoleModelIndex_female: number = 0;
    static RoleModelIndex_male: number = 1;
    private _roleModelIndex = -1;
    private _showTime: number = 0;

    public static get instance(): TienlenSelect3d {
        return this._instance;
    }

    onLoad() {
        TienlenSelect3d._instance = this;

        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        // input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        // input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        // input.on(Input.EventType.TOUCH_CANCEL, this.onTouchEnd, this);

        EventMgr.getInstance().addEventListener(TienlenDefine.UIEVENT_REFRESHROLE, this.refreshRole, this);
        EventMgr.getInstance().addEventListener(TienlenDefine.UIEVENT_REFRESHPET, this.refreshPet, this);

        if (UserData.getInstance().getUserPetId() != 0) {
            this.refreshPet(true);
        }

        if (UserData.getInstance().getUserRoleId() != 0) {
            this.refreshRole(UserData.getInstance().getUserRoleId() - 2000001);
        }

        // AudioMgr.getInstance().playMusic(TienlenDefine.SELECT_HAILANG);
        this.createSelect();
    }

    onTouchStart(touch: EventTouch) {
        this.node_camera_3darr[0].getComponent(Camera).screenPointToRay(touch.getLocationX(), touch.getLocationY(), this._ray);

        const mask = 0xffffffff;
        const maxDistance = 10000000;
        const queryTrigger = true;

        if (PhysicsSystem.instance.raycastClosest(this._ray, mask, maxDistance, queryTrigger)) {
            const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
            let collider = this._animRole.node.getComponent(BoxCollider);
            if (collider.uuid === raycastClosestResult.collider.uuid && this._isRoleModelCanTouch) {
                this._isRoleModelCanTouch = false;
                if (this.pageIndex == TienlenSelect3d.PageIndex_sel) {
                    TienlenSelect.instance.onBtnRole();
                } else if (this.pageIndex == TienlenSelect3d.PageIndex_role) {
                    TienlenRole.instance.btnOnClose();
                } else if (this.pageIndex == TienlenSelect3d.PageIndex_roomsel) {
                    TienlenRoomList.instance.btnOnBack();
                }
            }

            if (this._animPet != null && this._animPet.node.active) {
                collider = this._animPet.node.getComponent(BoxCollider);
                if (collider.uuid === raycastClosestResult.collider.uuid && this._isPetModelCanTouch) {
                    this._isPetModelCanTouch = false;
                    if (this.pageIndex == TienlenSelect3d.PageIndex_sel) {
                        TienlenSelect.instance.onBtnPet();
                    } else if (this.pageIndex == TienlenSelect3d.PageIndex_pet) {
                        TienlenPet.instance.btnOnClose();
                    }
                }
            }
        }
    }

    onTouchMove(touch: EventTouch) {
        if (!this._isRoleModelCanTouch) {
            return;
        }

        if (!this._isTouchRoleModel) {
            return;
        }

        let delta = touch.getDelta();
        if (delta.x !== 0) {
            this._isMoveRoleModel = true;
        }

        // 计算旋转轴
        let axis = v3(0, 1, 0).normalize();

        // 计算旋转速度
        let rad = delta.length() * 0.02;

        if (delta.x < 0) {
            rad *= -1;
        }

        // 将节点的旋转绕
        let quat = new Quat();
        Quat.rotateAround(quat, this._animRole.node.worldRotation, axis, rad);
        this._animRole.node.setWorldRotation(quat);
    }

    onTouchEnd(touch: EventTouch) {
        if (!this._isRoleModelCanTouch) {
            return;
        }

        if (!this._isMoveRoleModel) {
            this.node_camera_3darr[0].getComponent(Camera).screenPointToRay(touch.getLocationX(), touch.getLocationY(), this._ray);

            const mask = 0xffffffff;
            const maxDistance = 10000000;
            const queryTrigger = true;

            if (PhysicsSystem.instance.raycastClosest(this._ray, mask, maxDistance, queryTrigger)) {
                const raycastClosestResult = PhysicsSystem.instance.raycastClosestResult;
                let collider = this._animRole.node.getComponent(BoxCollider);
                if (collider.uuid === raycastClosestResult.collider.uuid) {
                    if (this.pageIndex == TienlenSelect3d.PageIndex_sel) {
                        TienlenSelect.instance.onBtnRole();
                    } else if (this.pageIndex == TienlenSelect3d.PageIndex_role) {
                        TienlenRole.instance.btnOnClose();
                    } else if (this.pageIndex == TienlenSelect3d.PageIndex_roomsel) {
                        TienlenRoomList.instance.btnOnBack();
                    }
                }
            }
        }

        this._isTouchRoleModel = false;
        this._isMoveRoleModel = false;
    }

    async onBtnClose() {
        TienlenHelper.playSound(TienlenDefine.SoundClick);
        if (game.totalTime - this._showTime <= TienlenDefine.CloseDelayTime) {
            return;
        }

        if (this.nodeSelectUI && this.nodeSelectUI.isValid) {
            console.log("当前阶段仍然有效。需要destory的");
            this.nodeSelectUI.destroy();
            this.nodeSelectUI = null;
        } else {
            console.log("当前节点不需要删除无效的");
        }
        console.log("宠物详情界面");
        console.log(this.curPetUI);
        console.log("宠物详情界面");
        if (this.curPetUI && this.curPetUI.isValid) {
            console.log("宠物详情界面需要执行清理");
            this.curPetUI.destroy();
        } else {
            console.log("当前宠物详情界面无效不需要清理");
        }
        console.log("当前角色模型是否有效。执行清除");
        console.log(this.curRole);
        console.log("当前角色模型是否有效。执行清除");
        if (this.curRole && this.curRole.isValid) {
            this.curRole.destroy();
            console.log("当前的角色模型有效 执行清楚");
        } else {
            console.log("当前模型无效不需要执行清理");
        }


        if (this.curPet && this.curPet.isValid) {
            console.log("当前宠物模型有效。需要删除");
            this.curPet.destroy();
        } else {
            console.log("当前宠物模型无效不需要删除");
        }


        this.node_role.destroyAllChildren();
        this.node_pet.destroyAllChildren();

        this.closeSelf();
        TienlenHelper.stopAudio();
        let gameConfig = GameState.getInstance().getGameItemConf();
        let logicData = new LogicEventData(gameConfig!);
        EventMgr.getInstance().dispatchEvent(LogicEvent.ENTER_HALL_FROM_GAMES, logicData);

    }

    onShow() {
        this._showTime = game.totalTime;
    }

    reShow() {
        this._showTime = game.totalTime;
        this.checkSelectValid();
    }

    checkSelectValid() {
        if (TienlenRoomList.instance) {
            TienlenRoomList.instance.refresh();
        } else {
            if (UIManager.getInstance().ndUI2dOn3d != null &&
                UIManager.getInstance().ndUI2dOn3d.isValid &&
                !UIManager.getInstance().ndUI2dOn3d.getComponentInChildren(TienlenSelect)) {
                this.createSelect();
            } else {
                UIManager.getInstance().ndUI2dOn3d.getComponentInChildren(TienlenSelect).node.active = true;
            }
        }
    }

    onHide() {
        EventMgr.getInstance().removeByTarget(this);
        UIManager.getInstance().ndUI2dOn3d.destroyAllChildren();
    }

    // update(deltaTime: number) {
    // let eulerAngles = this.node_modelmale.eulerAngles;
    // this.node_modelmale.setRotationFromEuler(eulerAngles.x, eulerAngles.y + deltaTime * 10, eulerAngles.z);

    // this._timeElapsed += deltaTime;
    // if (this._timeElapsed > this._randomInterval) {
    //     this._timeElapsed = 0;
    //     this._randomInterval = randomRangeInt(2, 10) * 60;

    //     this._animRoleCh.node.active = true;
    //     this._animRoleDj.node.active = false;
    //     this._animRoleCh.play("Take 001");
    //     this._animRoleCh.on(SkeletalAnimation.EventType.LASTFRAME, () => {
    //         this._animRoleCh.node.active = false;
    //         this._animRoleDj.node.active = true;
    //         this._animRoleDj.play("Take 001");
    //     }, this);
    // }
    // }

    moveCamear(axis: string, addValue: number, callback: Function, time: number) {
        for (let i = 0; i < this.node_camera_3darr.length; i++) {
            let node_camera = this.node_camera_3darr[i];
            let pos = node_camera.position;
            let toPos = v3(pos.x, pos.y, pos.z);
            if (axis === "x") {
                toPos.x += addValue;
            } else if (axis === "y") {
                toPos.y += addValue;
            } else if (axis === "z") {
                toPos.z += addValue;
            }

            if (i === 0) {
                tween(node_camera).to(time, { position: toPos })
                    .call(callback)
                    .start();
            } else {
                tween(node_camera).to(time, { position: toPos })
                    .start();
            }
        }
    }

    jumpSelToRoomList() {
        this.pageIndex = TienlenSelect3d.PageIndex_roomsel;
        this.playRoleZhuanChangAnim();

        if (this._animPet != null && this._animPet.node.active) {
            this._animPet.node.active = false;
        }

        let cb = () => {
            let nodeRoolList = instantiate(this.pfb_roomlist);
            nodeRoolList.parent = UIManager.getInstance().ndUI2dOn3d;
            let script = nodeRoolList.getComponent(TienlenRoomList);
            script.onShow(TienlenRuntime.roomListLevel);
        }

        this.scheduleOnce(() => {
            tween(this.node_role).to(1.0, { position: v3(this.node_role.position.x + 18, this.node_role.position.y, this.node_role.position.z) }, { easing: "quartOut" })
                .start();
            // this.moveCamear("x", 20, cb, 1.3);
            for (let i = 0; i < this.node_camera_3darr.length; i++) {
                let node_camera = this.node_camera_3darr[i];
                let pos = node_camera.position;
                let toPos = v3(pos.x + 20, pos.y, pos.z);

                if (i === 0) {
                    tween(node_camera).to(1.3, { position: toPos }, { easing: "quartOut" })
                        .call(cb)
                        .start();
                } else {
                    tween(node_camera).to(1.3, { position: toPos }, { easing: "quartOut" })
                        .start();
                }
            }
        }, 1.0);
    }

    jumpRoomListToSel() {
        this._showTime = game.totalTime;
        this.pageIndex = TienlenSelect3d.PageIndex_sel;
        if (this._roleModelIndex == TienlenSelect3d.RoleModelIndex_male) {
            this.playRoleChuChangAnim();
        } else if (this._roleModelIndex == TienlenSelect3d.RoleModelIndex_female) {
            this.playRoleZhuanChangAnim();
        }

        tween(this.node_role).to(0.5, { position: v3(this.node_role.position.x - 18, this.node_role.position.y, this.node_role.position.z) })
            .start();

        let cb = () => {
            this.createSelect();
        }
        this.moveCamear("x", -20, cb, 0.5);
    }

    jumpSelToRole() {
        if (this._animPet != null && this._animPet.node.active) {
            this._animPet.node.active = false;
        }
        this.pageIndex = TienlenSelect3d.PageIndex_role;

        let cb = () => {
            let nodeRole = instantiate(this.pfb_role);
            nodeRole.parent = UIManager.getInstance().ndUI2dOn3d;
            let script = nodeRole.getComponent(TienlenRole);
            script.onShow();
            AdapterMgr.getInstance().adapterByType(AdapterType.FullScreen, script);
        }
        this.playRoleChuChangAnim();
        tween(this.node_role).to(0.5, { position: this._roleToRoleViewPos })
            .start();

        this.moveCamear("z", -8, cb, 0.5);
    }

    jumpRoleToSel() {
        this.pageIndex = TienlenSelect3d.PageIndex_sel;
        let cb = () => {
            if (this._animPet != null && UserData.getInstance().getUserPetId() != 0) {
                this._animPet.node.active = true;
            }
            this.createSelect();
        }
        this._roleModelIndex = UserData.getInstance().getUserRoleId() - 2000001;
        this.playRoleChuChangAnim();
        tween(this.node_role).to(0.5, { position: this._roleOriPos })
            .start();
        this.moveCamear("z", 8, cb, 0.5);
    }
    private curPetUI: Node = null;
    jumpSelToPet() {
        this.pageIndex = TienlenSelect3d.PageIndex_pet;
        this.playPetZhuanChangAnim();

        if (this._animRole != null && this._animRole.node.active) {
            this._animRole.node.active = false;
        }

        let cb = () => {
            if (this.curPetUI != null && this.curPetUI.isValid) {
                this.curPetUI.destroy();
            }
            let nodePet = instantiate(this.pfb_pet);
            this.curPetUI = nodePet;
            nodePet.parent = UIManager.getInstance().ndUI2dOn3d;
            let script = nodePet.getComponent(TienlenPet);
            script.onShow();
            AdapterMgr.getInstance().adapterByType(AdapterType.FullScreen, script);

            if (UserData.getInstance().getUserPetId() == 0) {
                this.refreshPet(true);
            }
        }

        tween(this.node_pet).to(0.5, { eulerAngles: new Vec3(0, -116, 0) })
            .call(() => {
                for (let i = 0; i < this.node_camera_3darr.length; i++) {
                    let node_camera = this.node_camera_3darr[i];
                    let pos = node_camera.position;
                    let toPos = v3(pos.x - 21, pos.y, pos.z - 10);

                    tween(node_camera).to(1.0, { position: toPos })
                        .start();
                }
            })
            .parallel(tween(this.node_pet).to(1.0, { position: this._petToPetViewPos }),
                tween(this.node_pet).to(1.0, { scale: new Vec3(1.5, 1.5, 1.5) }))
            .call(() => {
                tween(this.node_pet).to(0.5, { eulerAngles: new Vec3(0, 0, 0) })
                    .call(cb)
                    .start();
            })
            .start();
        // this.moveCamear("x", -20, cb, 1.0);
    }

    jumpPetToSel() {
        this.pageIndex = TienlenSelect3d.PageIndex_sel;
        this.playPetZhuanChangAnim();

        if (this._animPet != null) {
            if (UserData.getInstance().getUserPetId() == 0) {
                this._animPet.node.active = false;
            }
        }

        let cb = () => {
            this.createSelect();
        }

        tween(this.node_pet).to(0.5, { eulerAngles: new Vec3(0, 26, 0) })
            .call(() => {
                for (let i = 0; i < this.node_camera_3darr.length; i++) {
                    let node_camera = this.node_camera_3darr[i];
                    let pos = node_camera.position;
                    let toPos = v3(pos.x + 21, pos.y, pos.z + 10);

                    tween(node_camera).to(1.0, { position: toPos })
                        .start();
                }
            })
            .parallel(tween(this.node_pet).to(1.0, { position: this._petOriPos }),
                tween(this.node_pet).to(1.0, { scale: new Vec3(1, 1, 1) }))
            .call(() => {
                tween(this.node_pet).to(0.5, { eulerAngles: new Vec3(0, 0, 0) })
                    .call(cb)
                    .start();
            })
            .start();

        // this.moveCamear("x", 20, cb, 1.0);
    }

    private nodeSelectUI: Node = null;
    createSelect() {
        if (this.nodeSelectUI && this.nodeSelectUI.isValid) {
            this.nodeSelectUI.destroy();
        }
        let nodeSel = instantiate(this.pfb_select);
        this.nodeSelectUI = nodeSel;
        nodeSel.parent = UIManager.getInstance().ndUI2dOn3d;
        let script = nodeSel.getComponent(TienlenSelect);
        script.onShow();
        AdapterMgr.getInstance().adapterByType(AdapterType.FullScreen, script);

        if (this._animRole != null && !this._animRole.node.active) {
            this._animRole.node.active = true;
        }

        if (this._animPet != null && !this._animPet.node.active) {
            if (UserData.getInstance().getUserPetId() != 0) {
                this._animPet.node.active = true;
            }
        }
    }

    refreshRole(roleIndex: number) {
        this._roleModelIndex = roleIndex;
        this.switchRole(roleIndex);
        this.playRoleChuChangAnim();
    }
    //当前展示的角色模型
    private curRole: Node = null;

    switchRole(roleIndex: number) {
        if (this.curRole != null && this.curRole.isValid) {
            this.curRole.destroy();
        }
        this.node_role.destroyAllChildren();


        this._spineRole = null;
        let nodeModel = instantiate(this.pfb_roleArr[roleIndex]);
        this.curRole = nodeModel;
        nodeModel.parent = this.node_role;
        this._animRole = nodeModel.getComponent(SkeletalAnimation);

        this._spineRole = nodeModel.getChildByName("node_render2d").getChildByName("spine").getComponent(sp.Skeleton);
        this._spineRole.node.active = false;
    }

    playRoleChuChangAnim() {
        this._isRoleModelCanTouch = false;

        if (this._animRole == null) {
            return;
        }

        if (this._roleModelIndex == TienlenSelect3d.RoleModelIndex_female) {
            AudioMgr.getInstance().stopLongSound();
            TienlenHelper.playLongVoice(TienlenDefine.SELECT_ROLE_SOUND, 0);
        } else if (this._roleModelIndex == TienlenSelect3d.RoleModelIndex_male) {
            AudioMgr.getInstance().stopLongSound();
            TienlenHelper.playLongVoice(TienlenDefine.SELECT_ROLE_SOUND, 1);
        }

        this._animRole.play("chuchang");
        this._animRole.once(SkeletalAnimation.EventType.LASTFRAME, () => {
            this._animRole.play("daiji");
            this._isRoleModelCanTouch = true;
        }, this);

        if (this._spineRole != null) {
            this._spineRole.node.active = true;
            this._spineRole.setAnimation(0, "zhuanquan", false);
            this._spineRole.setCompleteListener(() => {
                this._spineRole.node.active = false;
            });
        }
    }

    playRoleZhuanChangAnim() {
        this._isRoleModelCanTouch = false;

        if (this._animRole == null) {
            return;
        }

        if (this._roleModelIndex == TienlenSelect3d.RoleModelIndex_female) {
            TienlenHelper.playLongVoice(TienlenDefine.SELECT_ROLE_SOUND, 0);
        } else if (this._roleModelIndex == TienlenSelect3d.RoleModelIndex_male) {
            TienlenHelper.playLongVoice(TienlenDefine.SELECT_ROLE_SOUND, 1);
        }

        this._animRole.play("zhuanchang");
        this._animRole.once(SkeletalAnimation.EventType.LASTFRAME, () => {
            this._animRole.play("daiji");
            this._isRoleModelCanTouch = true;
        }, this);

        if (this._spineRole != null) {
            this._spineRole.node.active = true;
            this._spineRole.setAnimation(0, "huanxing", false);
            this._spineRole.setCompleteListener(() => {
                this._spineRole.node.active = false;
            });
        }
    }

    private curPet: Node = null;
    refreshPet(isShow: boolean) {
        if (this._animPet == null) {
            if (this.curPet && this.curPet.isValid) {
                this.curPet.destroy();
            }
            let nodeModel = instantiate(this.pfb_petArr[0]);
            this.curPet = nodeModel;
            nodeModel.parent = this.node_pet;
            this._animPet = nodeModel.getComponent(SkeletalAnimation);
        }

        this._animPet.node.active = isShow;
        this.playPetChuChangAnim();
    }

    playPetChuChangAnim() {
        if (this._animPet == null) {
            return;
        }

        this._isPetModelCanTouch = false;
        this._animPet.play("chuchang");
        this._animPet.once(SkeletalAnimation.EventType.LASTFRAME, () => {
            this._animPet.play("daiji");
            this._isPetModelCanTouch = true;
        }, this);
    }

    playPetZhuanChangAnim() {
        if (this._animPet == null) {
            return;
        }

        this._isPetModelCanTouch = false;
        this._animPet.play("zhuanchang");
        this._animPet.once(SkeletalAnimation.EventType.LASTFRAME, () => {
            this._animPet.play("daiji");
            this._isPetModelCanTouch = true;
        }, this);
    }

    // updatePetMoveBezier (deltaTime: number) {
    //     this._petMoveInterval = this._petMoveInterval + deltaTime;
    //     let t = this._petMoveInterval / this._petMoveDuration;
    //     if (t >= 1) {
    //         this._isPetMove = false;
    //         this.jumpSelToPetCb();
    //     }

    //     let xa = this._petMoveDotCtlArr1[0].x;
    //     let xb = this._petMoveDotCtlArr1[1].x;
    //     let xc = this._petMoveDotCtlArr1[2].x;
    //     let xd = this._petMoveDotCtlArr1[3].x;

    //     let ya = this._petMoveDotCtlArr1[0].y;
    //     let yb = this._petMoveDotCtlArr1[1].y;
    //     let yc = this._petMoveDotCtlArr1[2].y;
    //     let yd = this._petMoveDotCtlArr1[3].y;

    //     let x = bezier(xa, xb, xc, xd, t);
    //     let y = bezier(ya, yb, yc, yd, t);
    //     // console.log("pos1:", x, y);

    //     let pos = v3(this.node_pet.position.x, this.node_pet.position.y, this.node_pet.position.z);
    //     this.node_pet.setPosition(x, -1, y);
    //     let pos2 = v3(this.node_pet.position.x, this.node_pet.position.y, this.node_pet.position.z);
    //     let dir = pos2.subtract(pos);
    //     let radian = Vec3.angle(dir, v3(0, -1, 1));
    //     let angle = radian / Math.PI * 180 * -1;
    //     console.log("node pet angle:",dir, angle);
    //     this.node_pet.setRotationFromEuler(0, angle, 0);

    //     xa = this._cameraMoveDotCtlArr1[0].x;
    //     xb = this._cameraMoveDotCtlArr1[1].x;
    //     xc = this._cameraMoveDotCtlArr1[2].x;
    //     xd = this._cameraMoveDotCtlArr1[3].x;

    //     ya = this._cameraMoveDotCtlArr1[0].y;
    //     yb = this._cameraMoveDotCtlArr1[1].y;
    //     yc = this._cameraMoveDotCtlArr1[2].y;
    //     yd = this._cameraMoveDotCtlArr1[3].y;

    //     x = bezier(xa, xb, xc, xd, t);
    //     y = bezier(ya, yb, yc, yd, t);
    //     this.node_camera.setPosition(x, 0, y);
    // }

    // update (deltaTime: number) {
    //     // if (this._isPetMove) {
    //     //     this.updatePetMoveBezier(deltaTime);
    //     // }
    //     console.log("role pos:", this._animRole.node.getWorldPosition());
    // }

    // jumpSelToPetCb() {
    //     let nodePet = instantiate(this.pfb_pet);
    //     nodePet.parent = UIManager.getInstance().ndUI2dOn3d;
    //     let script = nodePet.getComponent(TienlenPet);
    //     script.onShow();
    //     AdapterMgr.getInstance().adapterByType(AdapterType.FullScreen, script);

    //     if (UserData.getInstance().getUserPetId() == 0) {
    //         this.refreshPet(true);
    //     }
    // }

    // jumpSelToPet() {
    //     this.pageIndex = TienlenSelect3d.PageIndex_pet;
    //     this.playPetZhuanChangAnim();

    //     if (this._animRole != null && this._animRole.node.active) {
    //         this._animRole.node.active = false;
    //     }

    //     this._isPetMove = true;
    // }
}

