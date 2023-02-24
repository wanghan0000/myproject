
import { _decorator, Component, Node, v3, Vec3, bezier, tween,
     math, Tween, Vec2, v2, View, UITransform, Label, instantiate, Sprite, Color, find, Camera, geometry, PhysicsSystem, BoxCollider2D} from 'cc';
import { AudioMgr } from '../../ScriptCore/audio/AudioMgr';
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { DB_FishRate } from '../data/db_fishrate';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishGameEventName } from './configs/fishgameeventname';
import { FishHappyAudioConfig } from './configs/fishhappyaudiocfg';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
const { ccclass } = _decorator;

@ccclass('FishFish')
export class FishFish extends Component {
    public path: any;
    public fishId = -1;
    public fishData: any;
    public policyData: any;
    public fishResId = 0;
    public scaleRate = 1;
    public aimedClientPos: boolean[] = [false, false, false, false];
    public isDie = false;

    private prePos = v3(1,0,0);
    private predegress: number | null = null;
    private isQuickLeave = false;
    private fishRateNode: Node | null = null;
    private fishRateLabel: Label | null = null;

    private static COLOR_RED = new Color(255, 0, 0);
    private static COLOR_WHITE = new Color(255, 255, 255);
    private isColorRed: boolean = false;

    // Scatter(中心发散)
    private scatterSpeedX = 0;
    private scatterSpeedY = 0;
    private speed = 100;
    private isScatter = false;

    // 贝塞尔曲线
    private bezierAllPos: {x:number, y:number}[] = [];
    private bezierInterval = 0;
    private bezierDuration = 0;
    private isBezier = false;

    // CardinalSpline 曲线
    private cardinalInterval = 0;
    private cardinalDuration = 0;
    private isCardinalSpline = false;
    private cardinalDeltaT = 0;
    private cardinalTension = 0;

    init (path: any, fishId: number, fishdata: any, policydata: any) {
        this.path = path;
        this.fishId = fishId;  // 标识场景里面鱼的唯一ID
        this.fishData = fishdata;
        this.policyData = policydata;
        this.fishResId = fishdata!.ResId!;

        this.scaleRate = fishdata.ShowScale / 100;
        if (this.fishResId >= 135) { // 组合鱼不按表里缩放
            this.scaleRate = 1;
        }
        // this.node.scale.set(this.scaleRate, this.scaleRate, 1); set 在原生平台不生效,游戏里面相关的set用法都要改一下
        this.node.scale = v3(this.scaleRate, this.scaleRate, this.scaleRate);
        // this.node.setSiblingIndex(fishdata.Zorder);

        let layerName = "node_layer" + fishdata.Zorder;
        let layer = FishHappyConstants.gameCtrl.layerFish!.getChildByName(layerName);
        if (layer == null) return;
        this.node.parent = layer;
        // let animation = this.getComponent(Animation);
        // animation!.play('anim_fish_' + this.fishResId + '_run');

        // let evt = this.policyData.Event;
        // if (evt >=1 && evt <= 9999) {
            
        // }

        if (this.fishData.Id == 11601) {
            this.refreshFishRate();
        }

        this.speed = policydata.Speed != 0 && policydata.Speed || fishdata.Speed;
        this.speed = this.speed * FishHappyConstants.FISH_SPEED_PERCENT;

        // 把路径适配一下长屏幕，最好是重新画一下鱼的路径，按最长的屏幕来画
        // 现在的路径在长屏幕下，还没有走出屏幕就会路径结束被回收
        // let points = this.path!.points;
        // let posStart = points[0];
        // let posEnd = points[points.length-1];
        // if (posStart.x > posEnd.x) { // 防止长屏幕鱼从右侧闪现
        //     posStart.x = View.instance.getVisibleSize().width + 100;
        // }
        // if ((posStart.x < posEnd.x && posEnd.x < View.instance.getVisibleSize().width)) {
        //     posEnd.x = View.instance.getVisibleSize().width + 100;
        // }

        // this.showTestInfo();
    }
    
    startMove(args?: {x: number, y:number} | null, pos?: Vec3 | null) {
        let points = this.path!.points;
        let pathPointCnt = points.length;
        let posStart = points[0];
        let pathType = this.path!.type;
        // console.log("pathType:", pathType);
        // console.log("pathpoints:", points);

        if (pos != null) {
            this.node.setPosition(pos);
        } else {
            if (pathType != 0) {  // 当不是发散鱼群的时候
                this.prePos = v3(posStart.x, posStart.y, 0);
                this.node.setPosition(posStart.x, posStart.y, 0);
            } else {
                this.node.setPosition(posStart.x, posStart.y, 0);
            }
        }

        console.log("pathType:", pathType);
        if (pathType == 0) {   // Scatter(中心发散)
            this.setScatterParam(args!.x, args!.y);
        } else if (pathType == 1) {  // Circle(圆形)
            // 圆形暂时没用，先不写
        } else if (pathType == 2) {  // Bezier(曲线)
            this.bezierAllPos = points;
            let len = this.pathsTotalLen(this.bezierAllPos);
            if (pathPointCnt == 4) {  // 贝塞尔曲线
                this.bezierDuration = len / this.speed;
                this.isBezier = true;
            } else if (pathPointCnt >= 3) { // CardinalSpline 曲线
                this.cardinalDuration = len / this.speed;
                this.cardinalDeltaT = 1 / (pathPointCnt - 1);
                this.isCardinalSpline = true;
            }
        } else if (pathType == 3) {  // PolyLine(折线)
            console.log("pathType == 3");
            let tweens: Tween<Node>[] = [];
            let action = tween(this.node);
            let index = 0;
            let pos = v2(this.node.position.x, this.node.position.y);
            for (let i = 0; i < pathPointCnt; i++) {
                let point = points[i]
                let dx = point.x - pos.x;
                let dy = point.y - pos.y;
                let duration = Math.sqrt(dx*dx + dy*dy) / this.speed;
                tweens[index] = tween(this.node).to(duration, {position:new Vec3(point.x, point.y, 0)});
                action = action.then(tweens[index]);
                if (point.p != null && point.p != 0) {
                    index ++;
                    tweens[index] = tween(this.node).delay(point.p);
                    action = action.then(tweens[index]);
                }
                index++;
                pos = point;
            }
            action.then(tween(this.node).call(() => {
                FishHappyConstants.gameCtrl.despawnFish(this.node);
            }));
            action.start();
        }

        if (this.fishData.IsBoss != 0) {
            FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_BOSS_COMING);
        }
    }

    syncPolyLineMove (time: number) {
        console.log("FishFish syncPolyLineMove");
        let points = this.path!.points;
        let pathPointCnt = points.length;
        let interval = 0;
        let posIndex = 0;
        let posStart = v2(0, 0);
        for (let i = 1; i < pathPointCnt; i++) {
            let point1 = points[i-1];
            let point2 = points[i];
            let dx = point2.x - point1.x;
            let dy = point2.y - point1.y;
            let duration = Math.sqrt(dx*dx + dy*dy) / this.speed;
            interval += duration;
            if (interval > time) {
                posIndex = i;
                let len = (interval - time) * this.speed;
                let pos1 = v3(point1.x, point1.y, 0);
                let pos2 = v3(point2.x, point2.y, 0);
                if (point1.x < point2.x) {
                    let dir = pos1.subtract(pos2);
                    let angle = Vec3.angle(dir, v3(-1, 0, 0));
                    if (point1.y < point2.y) {
                        posStart.set(point2.x - Math.cos(angle) * len, point2.y - Math.sin(angle) * len);
                    } else {
                        posStart.set(point2.x - Math.cos(angle) * len, point2.y + Math.sin(angle) * len);
                    }
                } else {
                    let dir = pos1.subtract(pos2);
                    let angle = Vec3.angle(dir, v3(1, 0, 0));
                    if (point1.y > point2.y) {
                        posStart.set(point2.x + Math.cos(angle) * len, point2.y + Math.sin(angle) * len);
                    } else {
                        posStart.set(point2.x + Math.cos(angle) * len, point2.y - Math.sin(angle) * len);
                    }
                }
                break;
            }
        }

        this.node.setPosition(posStart.x, posStart.y, 0);
        let tweens: Tween<Node>[] = [];
        let action = tween(this.node);
        let index = 0;
        let pos = posStart;
        for (let i = posIndex; i < pathPointCnt; i++) {
            let point = points[i]
            let dx = point.x - pos.x;
            let dy = point.y - pos.y;
            let duration = Math.sqrt(dx*dx + dy*dy) / this.speed;
            tweens[index] = tween(this.node).to(duration, {position:new Vec3(point.x, point.y, 0)});
            action = action.then(tweens[index]);
            if (point.p != null && point.p != 0) {
                index ++;
                tweens[index] = tween(this.node).delay(point.p);
                action = action.then(tweens[index]);
            }
            index++;
            pos = point;
        }
        action.then(tween(this.node).call(() => {
            FishHappyConstants.gameCtrl.despawnFish(this.node);
        }));
        action.start();
    }

    setScatterParam (x: number, y: number) {
        this.scatterSpeedX = x * this.speed;
        this.scatterSpeedY = y * this.speed;
        this.isScatter = true;
    }

    setDirection(nowPoint: Vec3, lastPoint: Vec3) {
        let degress = this.calcDegress(nowPoint, lastPoint);
        this.node.angle = degress + 90;
        this.predegress = degress;
    }

    update (deltaTime: number) {
        if (this.isQuickLeave) {
            return;
        }

        if (this.centerOutOfScreen()) {
            this.dealFishDieAimedShow();
        }

        if (this.outofScreen()) {
            if (this.isScatter) {
                FishHappyConstants.gameCtrl.despawnFish(this.node);
            }
        }

        let curpos = this.node.getPosition();
        if (this.isScatter) {
            this.node.setPosition(curpos.x + this.scatterSpeedX * deltaTime, curpos.y + this.scatterSpeedY * deltaTime, 0);
        }

        if (this.isBezier) {
            this.updateBezier(deltaTime);
        }

        if (this.isCardinalSpline) {
            this.updateCardinalSpline(deltaTime);
        }

        // 更新角度
        if (math.Vec3.distance(this.prePos, curpos) < 1) {
            return;
        }

        if (this.fishResId == 114 || //珍珠贝壳 
            this.fishResId == 116 || //黄色海马 
            this.fishResId == 132 || //蓝色海马
            this.fishResId == 134) { //财富鱼 只改变方向
            if (curpos.x > this.prePos.x) {
                // this.node.scale.set(this.scaleRate, this.scaleRate, 1); 直接这么写不生效  why?
                this.node.scale = new Vec3(this.scaleRate, this.scaleRate, 1);
                if (this.fishResId == 134 && this.fishRateNode != null) {
                    this.fishRateNode.setScale(1, 1, 1);
                }
            } else {
                // this.node.scale.set(this.scaleRate, this.scaleRate * -1, 1);  直接这么写不生效  why?
                this.node.scale = new Vec3(this.scaleRate, this.scaleRate * -1, 1);
                if (this.fishResId == 134 && this.fishRateNode != null) {
                    this.fishRateNode.setScale(-1, 1, 1);
                }
            }
            this.prePos = curpos;
            return
        }

        if (this.fishResId == 133 || this.fishResId == 115) { //两种紫色大乌贼不改变角度
            return;
        }

        let angle = Math.atan((curpos.y - this.prePos.y) / (curpos.x - this.prePos.x));
        let degress = angle * 180 / Math.PI;
        if (curpos.x >= this.prePos.x) {
            this.node.angle = degress - 90;
            if (this.fishResId == 123 ||  //金鲤鱼
                this.fishResId == 126 ||  //银龙
                this.fishResId == 131) {  //银鲤鱼
                this.node.scale = v3(this.scaleRate, this.scaleRate, 1);
            }
        } else {
            this.node.angle = degress + 90;
            if (this.fishResId == 123 ||  //金鲤鱼
                this.fishResId == 126 ||  //银龙
                this.fishResId == 131) {  //银鲤鱼
                this.node.scale = v3(this.scaleRate * -1, this.scaleRate, 1);
            }
        }
        this.prePos = curpos;
    }

    setBezierInterval (time: number) {
        this.bezierInterval = time;
        // console.log("bezier:", this.fishId, this.bezierInterval, this.bezierDuration, this.bezierInterval / this.bezierDuration);
    }

    updateBezier (deltaTime: number) {
        this.bezierInterval = this.bezierInterval + deltaTime;
        let t = this.bezierInterval / this.bezierDuration;
        if (t >= 1) {
            this.isBezier = false;
            FishHappyConstants.gameCtrl.despawnFish(this.node);
        }

        let xa = this.bezierAllPos[0].x;
        let xb = this.bezierAllPos[1].x;
        let xc = this.bezierAllPos[2].x;
        let xd = this.bezierAllPos[3].x;

        let ya = this.bezierAllPos[0].y;
        let yb = this.bezierAllPos[1].y;
        let yc = this.bezierAllPos[2].y;
        let yd = this.bezierAllPos[3].y;

        let x = bezier(xa, xb, xc, xd, t);
        let y = bezier(ya, yb, yc, yd, t);
        // console.log("pos1:", x, y);

        this.node.setPosition(x,y,0);
    }

    setCardinalSpline (time: number) {
        this.cardinalInterval = time;
        // console.log("CardinalSpline:", this.fishId, this.cardinalInterval, this.cardinalDuration, this.cardinalInterval / this.cardinalDuration);
    }

    updateCardinalSpline (deltaTime: number) {
        this.cardinalInterval = this.cardinalInterval + deltaTime;
        let t = this.cardinalInterval / this.cardinalDuration;
        if (t >= 1) {
            this.isCardinalSpline = false;
            FishHappyConstants.gameCtrl.despawnFish(this.node);
        }

        let p,lt;

        // eg.
	    // p..p..p..p..p..p..p
	    // 1..2..3..4..5..6..7
	    // want p to be 1, 2, 3, 4, 5, 6
        if (t == 1)
        {
            p = this.bezierAllPos.length - 1;
            lt = 1;
        }
        else 
        {
            p = Math.floor(t / this.cardinalDeltaT);
            lt = (t - this.cardinalDeltaT * p) / this.cardinalDeltaT;
        }

        let pp0 = this.getControlPointAtIndex(p-1);
        let pp1 = this.getControlPointAtIndex(p+0);
        let pp2 = this.getControlPointAtIndex(p+1);
        let pp3 = this.getControlPointAtIndex(p+2);

        // console.log("params:", pp0, pp1, pp2, pp3, lt)
        let newPos = this.cardinalSplineAt(pp0, pp1, pp2, pp3, this.cardinalTension, lt);
        // console.log("newPos:", newPos);
        this.node.position = v3(newPos.x, newPos.y, 0);
    }

    cardinalSplineAt (p0: Vec2, p1: Vec2, p2: Vec2, p3: Vec2, tension: number, t: number): Vec2 {
        let t2 = t * t;
        let t3 = t2 * t;
        
        /*
         * Formula: s(-ttt + 2tt - t)P1 + s(-ttt + tt)P2 + (2ttt - 3tt + 1)P2 + s(ttt - 2tt + t)P3 + (-2ttt + 3tt)P3 + s(ttt - tt)P4
         */
        let s = (1 - tension) / 2;
        
        let b1 = s * ((-t3 + (2 * t2)) - t);                      // s(-t3 + 2 t2 - t)P1
        let b2 = s * (-t3 + t2) + (2 * t3 - 3 * t2 + 1);          // s(-t3 + t2)P2 + (2 t3 - 3 t2 + 1)P2
        let b3 = s * (t3 - 2 * t2 + t) + (-2 * t3 + 3 * t2);      // s(t3 - 2 t2 + t)P3 + (-2 t3 + 3 t2)P3
        let b4 = s * (t3 - t2);                                   // s(t3 - t2)P4
        
        let x = (p0.x*b1 + p1.x*b2 + p2.x*b3 + p3.x*b4);
        let y = (p0.y*b1 + p1.y*b2 + p2.y*b3 + p3.y*b4);
        
        return v2(x,y);
    }

    getControlPointAtIndex (index: number): Vec2 {
        index = Math.floor(Math.min(this.bezierAllPos.length - 1, Math.max(index, 0)));
        // console.log("index:", index);
        return v2(this.bezierAllPos[index].x, this.bezierAllPos[index].y);
    }

    pathsTotalLen (paths: {x:number, y:number}[]): number {
        let len = paths.length;
        if (len <= 1) {
            return 0;
        }
        let ret = 0;
        let x = paths[0].x
        let y = paths[0].y;
        for (let i = 1; i < len; i++) {
            let tx = paths[i].x;
            let ty = paths[i].y;
            let dx = tx - x;
            let dy = ty - y;
            ret = ret + Math.sqrt(dx*dx + dy*dy);
            x = tx;
            y = ty;
        }
        return ret;
    }

    calcDegress (point1: Vec3, point2: Vec3): number {
        let angle = Vec3.angle(point1, point2);
        let degress = angle / Math.PI * 180;
        return degress;
    }

    centerOutOfScreen (indent?: number): boolean {
        if (indent == null) {
            indent = 10;
        }
        let pos = this.node.getPosition();
        pos = this.node.parent.getComponent(UITransform).convertToWorldSpaceAR(pos);
        let rect = math.rect(indent, indent, View.instance.getVisibleSize().width, View.instance.getVisibleSize().height);
        if (rect.contains(v2(pos.x, pos.y))) {
            return false;
        }
        return true;
    }

    outofScreen (): boolean {
        let pos = this.node.getPosition();
        let uitransform = this.getComponent(UITransform);
        pos = this.node.parent.getComponent(UITransform).convertToWorldSpaceAR(pos);;
        let width1 = uitransform!.contentSize.width;
        let height1 = uitransform!.contentSize.height;
        let rect1 = math.rect(pos.x - width1/2, pos.y - height1/2, width1, height1);
        let width2 = View.instance.getVisibleSize().width;
        let height2 = View.instance.getVisibleSize().height;
        let rect2 = math.rect(0, 0, width2, height2);
        if (rect2.intersects(rect1)) {
            return false;
        }
        return true;
    }

    hitTestSimple (position: Vec2): boolean {
        let uitransform = this.getComponent(UITransform);
        // getLocation hitTest
        // getUILocation isHit 该函数在当前版本废弃了
        if (uitransform!.hitTest(position)) {
            return true;
        }

        // if (uitransform.getBoundingBox().contains(v2(pos.x, pos.y))) {
        //     return true;
        // }

        return false;
    }

    checkAimedData (): boolean {
        for (let pos = 0; pos < this.aimedClientPos.length; pos++) {
            if (this.aimedClientPos[pos]) {
                return true;
            }
        }
        return false;
    }

    setAimedData (aimedClientPos: number) {
        this.aimedClientPos[aimedClientPos] = true;
    }

    clearAimedData (clientPos: number) {
        this.aimedClientPos[clientPos] = false;
    }

    clearAllAimedData () {
        for (let pos = 0; pos < this.aimedClientPos.length; pos++) {
            this.aimedClientPos[pos] = false;
        }
    }

    dealFishDieAimedShow () {
        if (this.checkAimedData()) {
            if (this.aimedClientPos[FishHappyRoomData.instance.myClientPos]) {
                FishHappyConstants.gameCtrl.fishDieDealCannonState();
            }
            for (let pos = 0; pos < this.aimedClientPos.length; pos++) {
                if (this.aimedClientPos[pos]) {
                    FishHappyRoomData.instance.removeAimedFish(pos);       
                }
            }
        }
    }

    onKill(clientPos: number, coin: number, causeEvtId: number) {
        if (this.fishData.DieSound != '') {
            let sound = "FishHappy/" + this.fishData.DieSound;
            sound = sound.replace('.mp3', "");
            AudioMgr.getInstance().playSound(sound);
        }
        
        if (this.fishData.DieParticle != '0') {
            FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_SHOW_BOSS_DIEEFFECT, this.node.position, this.fishData.DieParticle);
        }

        if (this.fishData.DieEffect === 1) {
            FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_SHOW_JIANGLI, clientPos, coin, this.fishData.Name);
        } else if (this.fishData.DieEffect === 2) {
            FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_SHOW_BAOFU, clientPos, coin, this.fishData.Name);
        }

        if (causeEvtId === FishHappyConstants.FISHING_EVENT_CHAIN) {
            FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_SHOW_LIGHT_EFFECT, this.node.position, false);
        }

        FishHappyConstants.gameCtrl.despawnFish(this.node);

        this.dealFishDieAimedShow();

        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_SHOW_FISHDIECOINNUM, clientPos, this.node.getPosition(), coin);
        FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_SHOW_FISHDIEADDCOIN, clientPos, this.node.getPosition(), coin);
        AudioMgr.getInstance().playSound(FishHappyAudioConfig.DROPCOIN);
    }

    quickLeaveCb() {
        FishHappyConstants.gameCtrl.despawnFish(this.node);
    }

    quickLeave () {
        this.isQuickLeave = true;
        let destPos = this.path.points[this.path.points.length-1];
        if (destPos != null) {
            let pos = this.node.getPosition();
            let len = Utils.dist(pos.x, pos.y, destPos.x, destPos.y);
            let t = len / this.speed;
            if (t > 1) {
                t = 1;
            }
            let quickLeaveCb = () => {
                FishHappyConstants.gameCtrl.despawnFish(this.node);
            }
            tween(this.node).to(t, {position: new Vec3(destPos.x, destPos.y, 0)})
                            .call(quickLeaveCb.bind(this))
                            .start();
        }
    }

    refreshFishRate (rate?: number) {
        if (this.fishData.Id != 11601) {
            return;
        }

        if (this.fishRateLabel == null) {
            let pfb = ResMgr.getInstance().getPrefabByPath('FishHappy/prefab/pfb_caisenrate');
            if (pfb == null) {
                return;
            }
            this.fishRateNode = <Node|null>instantiate(pfb);
            if (this.fishRateNode != null) {
                this.fishRateNode.parent = this.node;
                this.fishRateNode.setPosition(65, 0, 0);
                this.fishRateNode.angle = 90;
                this.fishRateLabel = this.fishRateNode.getChildByName('label_rate')!.getComponent(Label);
                let fishRateData = DB_FishRate.getInstance().pool!.get(this.fishData.Id);
                if (this.fishRateLabel != null && fishRateData != null) {
                    this.fishRateLabel.string = 'X' + fishRateData.Gold[0].toString();
                }
            }
        } else {
            if (rate != null) {
                this.fishRateLabel.string = 'X' + rate.toString();
            }
        }
    }

    onHitRed () {
        if (this.isColorRed) {
            return;
        }
        this.isColorRed = true;
        if (this.fishResId > 134) {
            for (let child of this.node.children) {
                child.getComponent(Sprite).color = FishFish.COLOR_RED;
            }

            this.scheduleOnce(() => {
                this.isColorRed = false;
                for (let child of this.node.children) {
                    child.getComponent(Sprite).color = FishFish.COLOR_WHITE;
                }
            }, 0.1);
        } else {
            this.node.getComponent(Sprite).color = FishFish.COLOR_RED;
            this.scheduleOnce(() => {
                this.isColorRed = false;
                this.node.getComponent(Sprite).color = FishFish.COLOR_WHITE;
            }, 0.1);
        }
    }

    showTestInfo () {
        let nodeTest = instantiate(FishHappyConstants.gameCtrl.pfbTest);
        nodeTest.parent = this.node;
        let label = nodeTest.getChildByName("Label").getComponent(Label);

        // 显示路径相关信息
        // let pathType = this.path!.type;
        // if (pathType == 2) {
        //     let pathPointCnt = this.path!.points.length;
        //     if (pathPointCnt == 4) {  // 贝塞尔曲线
        //         pathType = 21;
        //     } else if (pathPointCnt >= 3) { // CardinalSpline 曲线
        //         pathType = 22;
        //     }
        // }
        // label.string = "" + pathType + "=" + this.fishId;

        label.string = this.fishData.Name;
    }
}


// // test!!!!!!!!!!!!!!!!!!!!!!!!!
// let fishids = [];
// let iter = FishHappyRoomData.instance.fishNodeMap.values();
// let r: IteratorResult<Node>;
// while (r = iter.next(), !r.done) {
//     let fishNode = r.value;
//     let fishScript = fishNode.getComponent(FishFish);
//     fishids.push(fishScript!.fishId);
// }
// FishHappyConstants.eventMgr.dispatchEvent(FishGameEventName.GAME_SHOW_SIMILARLIGHT, this.node.getPosition(), fishids);

    // !!!!!test
    // static testClientPos = 0;
    // !!!!!test

    // !!!!!test
    // this.fishData.DieEffect = 2;
    // FishFish.testClientPos += 1;
    // if (FishFish.testClientPos == 4) {
    //     FishFish.testClientPos = 0;
    // }
    // clientPos = FishFish.testClientPos;
    // !!!!!test