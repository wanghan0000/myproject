
import { _decorator, Component, instantiate } from 'cc';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { DB_Fish } from '../data/db_fish';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
import { FishFish } from './fishfish';
const { ccclass } = _decorator;

@ccclass('FishScatterControl')
export class FishScatterControl extends Component {
    private _policyIdx = -1;
    private _policyData: any;
    private _path: any;
    private _genedCnt = 0;

    private _startAngle = 0;
    private _offsetAngle = 0;

    init (policyIdx: number, policyData: any, path: any) {
        this._policyIdx = policyIdx;
        this._policyData = policyData;
        this._path = path;
        this.genFish();
    }

    genFish () {
        if (this._path.s_obj && this._path.c_obj && this._path.s_obj.custom == 1) {
            this._startAngle = this._path.c_obj.start || 0;
            this._offsetAngle = this._path.c_obj.offset || 360 / this._policyData.Count;
        } else {
            this._startAngle = 0;
            this._offsetAngle = 360 / this._policyData.Count;
        }

        let helix = (this._path.s_obj && this._path.s_obj.helix) && this._path.s_obj.helix || 0;
        if (helix == 1) { //螺旋扩散
            console.log("helix scatter");
            let interv = (this._path.s_obj && this._path.s_obj.h_obj) && this._path.s_obj.h_obj.offset || 15;
            this.schedule(this.onCycleGen, interv / 100);
        } else { //圆形扩散
            console.log("circle scatter");
            for (let i = 1; i <= this._policyData.Count; i++) {
                this._genedCnt += 1;
                this.genOneFish(i);
                if (i == this._policyData.Count) {
                    this.node.destroy();
                }
            }
        }
    }

    genOneFish (index: number) {
        let degress = this._startAngle + this._offsetAngle * index;
        let radians = degress / 180 * Math.PI;
        let fishId = FishHappyRoomData.instance.genFishId(this._policyIdx, this._policyData.Id, this._genedCnt);
        let fishData = DB_Fish.getInstance().pool!.get(this._policyData.FishId);
        let pfbPath = "FishHappy/prefab/fishpfb/prefab_fish_" + fishData!.ResId; 
        let pfbFish = ResMgr.getInstance().getPrefabByPath(pfbPath);
        if (pfbFish == null) {
            console.log("genOneFish can not find prefab:", fishData, fishData!.ResId);
            return;
        }
        // console.log("genOneFish:", this._policyIdx, this._policyData);
        // console.log("genOneFish:", fishData, fishData!.ResId);
        // console.log("genOneFish:", pfbFish);
        let fishNode = instantiate(pfbFish);
        if (fishNode != null) {
            FishHappyRoomData.instance.fishNodeMap.set(fishId, fishNode);                
            let fishScript = fishNode!.addComponent(FishFish);
            if (this._path.points.length == 1) {
                let args = {x: Math.sin(radians), y: Math.cos(radians)};
                fishScript!.init(this._path, fishId, fishData, this._policyData);
                fishScript!.startMove(args);
            } else {
                let args = {x: degress, y: 0};
                fishScript!.init(this._path, fishId, fishData, this._policyData);
                fishScript!.startMove(args);
            }
        }
    }

    onCycleGen () {
        this._genedCnt += 1;
        this.genOneFish(this._genedCnt);
        if (this._genedCnt >= this._policyData.Count) {
            // console.log('onCycleGen remove PolicyNode')
            this.unschedule(this.onCycleGen);
            this.node.destroy();
        }
    }
}
