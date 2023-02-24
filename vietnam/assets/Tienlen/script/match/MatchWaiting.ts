import { _decorator, Component, Node, Label, sp } from 'cc';
import { UserData } from '../../../ScriptCore/data/UserData';
import { AdapterMgr, AdapterType } from '../../../ScriptCore/UIFrame/AdapterMgr';
import { UIScreen, UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import { TaskFactory } from '../common/async/TaskFactory';
import { ButtonPlus } from '../common/component/ButtonPlus';
import { Model2D } from '../common/component/Model2D';
import tournament from '../protocol/tournament.js';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenRuntime } from '../TienlenRuntime';
const { ccclass, property } = _decorator;

@ccclass('MatchWaiting')
export class MatchWaiting extends UIWindow {
    @property(Label)
    public labelCount: Label;
    @property(ButtonPlus)
    public btnCancel: ButtonPlus;
    private _spineList: sp.Skeleton[];
    private _matchId: number;
    private _mode2DList: Model2D[];
    private static _instance: MatchWaiting;

    public static get instance(): MatchWaiting {
        return this._instance;
    }

    onLoad() {
        MatchWaiting._instance = this;
        this.btnCancel.setClickHandler(async () => {
            let code = await TienlenHelper.callSignRace(1, this._matchId);
            if (code == 0) {
                this.closeSelf();
            }
        }, this);
        this._spineList = this.getComponentsInChildren(sp.Skeleton);
        this._mode2DList = this.getComponentsInChildren(Model2D);
    }

    onShow(...args: any) {
        this._matchId = args[0];
        AdapterMgr.getInstance().adapterByType(AdapterType.FullScreen, this);
        if (this._matchId) {
            this.updateSignNum(TienlenRuntime.matchSignNum);
            this.btnCancel.node.active = true;
        } else {
            this.labelCount.string = "";
            this.btnCancel.node.active = false;
        }
        this.randSwitchAnim();
    }

    async randSwitchAnim() {
        while (true) {
            let rand = Math.random() * 100;
            if (rand >= 50) {
                this._mode2DList[0] && this._mode2DList[0].playEnterAnim();
            }
            if (rand >= 70) {
                this._mode2DList[1] && this._mode2DList[1].playEnterAnim();
            }
            let flag = await TienlenHelper.nodeWait(3, this.node);
            if (!flag) return;
        }
    }

    async playEnterAnim() {
        for (let index = 0; index < this._spineList.length; index++) {
            const element = this._spineList[index];
            element.setAnimation(0, "kc", false);
            element.setCompleteListener(() => {
                if (element.animation == "kc") {
                    element.setAnimation(0, "idle", true);
                }
            })
        }
    }

    async playLeaveAnim() {
        let task = TaskFactory.create<boolean>();
        this.node.children.forEach((v) => v.active = false);
        let node = this.node.getChildByName("baoming");
        node.active = true;
        const element = node.getComponent(sp.Skeleton);
        element.setAnimation(0, "cc", false);
        element.setCompleteListener(() => {
            if (element.animation == "cc") {
                task.setResult(true);
            }
        })
        return await task.promise;
    }


    public updateSignNum(sign: tournament.tournament.SCSyncSignNum) {
        if (!sign) {
            this.labelCount.string = "";
            return;
        }
        this.labelCount.string = `报名人数: ${sign.SignNum}/${sign.MaxSignNum}`;
        this.btnCancel.node.active = sign.SignNum != sign.MaxSignNum;
        if (sign.SignNum == sign.MaxSignNum) {
            TienlenHelper.playVoice(TienlenDefine.SoundMatchEnterGame, UserData.getInstance().getRoleSex(), "match");
        }
    }

    onDestroy() {
        MatchWaiting._instance = null;
    }

    public getShowEffectTime(): number {
        return 0.1;
    }

    public getHideEffectTime(): number {
        return 0.1;
    }

    async showEffect() {
        await this.playEnterAnim();
        return true;
    }

    async hideEffect() {
        return true;
    }

}

