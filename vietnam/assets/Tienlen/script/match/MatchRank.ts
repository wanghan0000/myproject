import { _decorator, Component, Node, ProgressBar, Label, sp, SpriteFrame, Sprite, tween, Vec3 } from 'cc';
import { TaskFactory } from '../common/async/TaskFactory';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
const { ccclass, property } = _decorator;

@ccclass('MatchRank')
export class MatchRank extends Component {
    private _rankSpine: sp.Skeleton;
    private _starSpineList: sp.Skeleton[];
    private rankAniList = ["", "xuantie", "qingtong", "baiyin", "huangjin", "bojin", "zuanshi", "doushen"];
    private labelMainRank: Label;
    private spRankNO: Sprite;
    private starNode2: Node;
    onLoad() {
        this._rankSpine = this.node.children[0].getComponent(sp.Skeleton);
        this._starSpineList = this.node.children[1].getComponentsInChildren(sp.Skeleton);
        this.labelMainRank = this.node.getChildByName("mainRank").getComponent(Label);
        this.spRankNO = this.node.getChildByName("rankNO").getComponent(Sprite);
        this.starNode2 = this.node.getChildByName("starNode2");
    }

    public show(rank: number, lastRank: number = 0) {
        this.node.active = true;
        let mainRank = TienlenHelper.getMainRank(rank);
        let subRank = TienlenHelper.getSubRank(rank);
        let starRank = TienlenHelper.getStarRank(rank);
        let lastMainRank = TienlenHelper.getMainRank(lastRank);
        let lastSubRank = TienlenHelper.getSubRank(lastRank);
        let lastStarRank = TienlenHelper.getStarRank(lastRank);
        if (lastRank == 0) {
            this.playIdleAnim(mainRank, subRank, starRank);
        } else if (mainRank != lastMainRank) {
            this.playMainRankAnim(mainRank, lastMainRank, starRank);
        } else if (subRank != lastSubRank) {
            this.playSubRankAnim(mainRank, subRank, lastSubRank, starRank);
        } else if (starRank != lastStarRank) {
            this.playStarAnim(starRank, lastStarRank, mainRank);
        } else {
            this.playEnterAnim(mainRank, subRank, starRank);
        }
    }

    public hide() {
        this.node.active = false;
    }

    adjustStartNodePos(mainRank: number) {
        // let y = mainRank == 7 ? this._originStarPosY + 10 : this._originStarPosY;
        // let node = this.node.getChildByName("starNode");
        // node.setPosition(node.position.x, y);
    }

    async playEnterAnim(mainRank: number, subRank: number, starRank: number) {
        this.adjustStartNodePos(mainRank);
        this.playShengjiAnim(mainRank);
        let flag = await TienlenHelper.nodeWait(0.5, this.node);
        if (!flag) return;
        if (mainRank == 7) {
            this.showMainRank7Star(starRank);
        } else {
            this.node.getChildByName("starNode").active = true;
            for (let index = 1; index <= 5; index++) {
                if (index <= starRank) {
                    this.playOneStarAnim(index - 1, 0);
                } else {
                    this._starSpineList[index - 1].node.active = false;
                }
            }
        }
        this.showRankText(mainRank, subRank);
    }

    async playIdleAnim(mainRank: number, subRank: number, starRank: number) {
        this.adjustStartNodePos(mainRank);
        this._rankSpine.setAnimation(0, `daiji_${this.rankAniList[mainRank]}`, true);
        if (mainRank == 7) {
            this.showMainRank7Star(starRank);
        } else {
            this.node.getChildByName("starNode").active = true;
            for (let index = 1; index <= 5; index++) {
                if (index <= starRank) {
                    this.playOneStarAnim(index - 1, 0);
                } else {
                    this._starSpineList[index - 1].node.active = false;
                }
            }
        }
        this.showRankText(mainRank, subRank);
    }

    async showRankText(mainRank: number, subRank: number) {
        this.labelMainRank.node.active = true;
        this.labelMainRank.string = TienlenHelper.getRankStr2(mainRank, subRank, false);
        this.spRankNO.node.active = mainRank != 7;
        this.spRankNO.spriteFrame = await TienlenHelper.getRankNoSF(mainRank, subRank);
    }

    async showRankTextAnim(mainRank: number, subRank: number) {
        this.spRankNO.node.active = mainRank != 7;
        this.spRankNO.spriteFrame = await TienlenHelper.getRankNoSF(mainRank, subRank);
        this.spRankNO.node.setScale(2, 2, 2);
        tween(this.spRankNO.node).to(0.3, { scale: Vec3.ONE }).start();
        let flag = await TienlenHelper.nodeWait(0.3, this.node);
        if (!flag) return false;
        this.labelMainRank.node.active = true;
        this.labelMainRank.node.setScale(2, 2, 2);
        tween(this.labelMainRank.node).to(0.3, { scale: Vec3.ONE }).start();
        this.labelMainRank.string = TienlenHelper.getRankStr2(mainRank, subRank, false);
        flag = await TienlenHelper.nodeWait(0.3, this.node);
        return flag;
    }

    hideRankText() {
        this.spRankNO.node.active = false;
        this.labelMainRank.node.active = false;
        this.starNode2.active = false;
    }

    async playXiaoshiAnim(mainRank: number) {
        this.adjustStartNodePos(mainRank);
        let anim = `xiaosan_${this.rankAniList[mainRank]}`;
        this._rankSpine.setAnimation(0, anim, false);
        let task = TaskFactory.create<boolean>();
        this._rankSpine.setCompleteListener(() => {
            if (this._rankSpine.animation == anim) {
                task.setResult(true);
            }
        })
        for (let index = 0; index < 5; index++) {
            let spine = this._starSpineList[index];
            spine.setAnimation(0, "xiaoshi_xing", false);
        }
        this.hideRankText();
        return await task.promise;
    }

    async playShengjiAnim(mainRank: number) {
        this.adjustStartNodePos(mainRank);
        let anim = `shengji_${this.rankAniList[mainRank]}`;
        this._rankSpine.setAnimation(0, anim, false);
        let task = TaskFactory.create<boolean>();
        this._rankSpine.setCompleteListener(() => {
            if (this._rankSpine.animation == anim) {
                task.setResult(true);
                this._rankSpine.setAnimation(0, `daiji_${this.rankAniList[mainRank]}`, true)
            }
        })
        for (let index = 0; index < 5; index++) {
            let spine = this._starSpineList[index];
            spine.node.active = false;
        }
        this.hideRankText();
        return await task.promise;
    }

    async playJiangjiAnim(mainRank: number) {
        this.adjustStartNodePos(mainRank);
        let anim = `jiangji_${this.rankAniList[mainRank]}`;
        this._rankSpine.setAnimation(0, anim, false);
        let task = TaskFactory.create<boolean>();
        this._rankSpine.setCompleteListener(() => {
            if (this._rankSpine.animation == anim) {
                task.setResult(true);
                this._rankSpine.setAnimation(0, `daiji_${this.rankAniList[mainRank]}`, true)
            }
        })
        for (let index = 0; index < 5; index++) {
            let spine = this._starSpineList[index];
            spine.node.active = false;
        }
        this.hideRankText();
        return await task.promise;
    }

    /**
     * 
     * @param index 
     * @param mode 0 待机 1升级 2降级
     */
    playOneStarAnim(index: number, mode: number = 0) {
        let spine = this._starSpineList[index];
        spine.node.active = true;
        let anim = "daiji_xing";
        if (mode == 1)
            anim = "shengji_xing";
        else if (mode == 2)
            anim = "jiangji_xing";

        let loop = mode == 0;
        spine.setAnimation(0, anim, loop);
        spine.setCompleteListener(() => {
            if (spine.animation == anim && mode == 1) {
                spine.setAnimation(0, "daiji_xing", true);
            } else if (spine.animation == anim && mode == 2) {
                spine.node.active = false;
            }
        })
    }

    async playMainRankAnim(mainRank: number, lastMainRank: number, starRank: number) {
        if (mainRank > lastMainRank) {
            await this.playXiaoshiAnim(lastMainRank);
            await this.playShengjiAnim(mainRank);
            let flag = await this.showRankTextAnim(mainRank, 1);
            if (!flag) return;
            if (mainRank == 7) {
                this.showMainRank7Star(starRank);
            } else {
                this.node.getChildByName("starNode").active = true;
                for (let index = 0; index < starRank; index++) {
                    this.playOneStarAnim(index, 1);
                }
            }
        } else {
            await this.playXiaoshiAnim(lastMainRank);
            await this.playJiangjiAnim(mainRank);
            let flag = await this.showRankTextAnim(mainRank, 5);
            if (!flag) return;
            if (mainRank == 7) {
                this.showMainRank7Star(starRank);
            } else {
                this.node.getChildByName("starNode").active = true;
                for (let index = 0; index < starRank; index++) {
                    this.playOneStarAnim(index, 0);
                }
            }
        }
    }

    async playSubRankAnim(mainRank: number, subRank: number, lastSubRank: number, starRank: number) {
        if (subRank > lastSubRank) {
            await this.playShengjiAnim(mainRank);
            let flag = await this.showRankTextAnim(mainRank, subRank);
            if (!flag) return;
            if (mainRank == 7) {
                this.showMainRank7Star(starRank);
            } else {
                this.node.getChildByName("starNode").active = true;
                for (let index = 0; index < starRank; index++) {
                    this.playOneStarAnim(index, 1);
                }
            }
        } else {
            await this.playJiangjiAnim(mainRank);
            let flag = await this.showRankTextAnim(mainRank, subRank);
            if (!flag) return;
            if (mainRank == 7) {
                this.showMainRank7Star(starRank);
            } else {
                this.node.getChildByName("starNode").active = true;
                for (let index = 0; index < starRank; index++) {
                    this.playOneStarAnim(index, 0);
                }
            }
        }
    }


    async playStarAnim(star: number, lastStar: number, mainRank: number) {
        if (mainRank == 7) {
            this.showMainRank7Star(star);
        } else {
            this.node.getChildByName("starNode").active = true;
            if (star > lastStar) {
                for (let index = lastStar; index < star; index++) {
                    this.playOneStarAnim(index, 1);
                }
            } else {
                for (let index = star; index < lastStar; index++) {
                    this.playOneStarAnim(index, 2);
                }
            }
        }
    }

    showMainRank7Star(star: number) {
        this.node.getChildByName("starNode").active = false;
        this.starNode2.active = true;
        this.starNode2.getComponentInChildren(Label).string = `${star}`;
    }






}

