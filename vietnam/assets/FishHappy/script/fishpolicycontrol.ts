
import { _decorator, Component, Node, instantiate } from 'cc';
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { DB_Fish } from '../data/db_fish';
import { FishHappyConstants } from './configs/fishhappyconstants';
import { FishHappyRoomData } from './fishdata/fishhappyroomdata';
import { FishFish } from './fishfish';
import { PathMgr } from './fishpathmgr';
import { FishScatterControl } from './fishscattercontrol';
const { ccclass } = _decorator;

@ccclass('FishPolicyControl')
export class FishPolicyControl extends Component {
    private _policyIdx = -1;
    private _policyData: any;
    private _genedCnt = 1;
    private _timer = 1;
    private _pathId = -1;

    init (policyIdx: number, policyData: any) {
        this._policyIdx = policyIdx;
        this._policyData = policyData;
        this.genFish();
    }

    genFish (cnt?: number, time?: number) {
        this._genedCnt = cnt || 1;
        this._timer = time || 1;
        this._pathId = this.randomPathId();
        this.genOneFish();
        // console.log("genFish:", this._genedCnt, this._policyData.Count)
        if (this._genedCnt < this._policyData.Count) {
            this.schedule(this.onCycleGen, 0.1);
        } else {
            // console.log('genFish remove PolicyNode')
            this.node.destroy();
        }
    }

    genOneFish () {
        let path = PathMgr.instance.getPath(this._pathId.toString(), FishHappyRoomData.instance.isNeedFlip());
        if (path == null) {
            return;
        }

        if (path.scatter==1) {
            console.log("scatter path!");
            let policyCtrl = this.node.addComponent(FishScatterControl);
            if (policyCtrl != null) {
                policyCtrl.init(this._policyIdx, this._policyData, path);
            }
            return;
        }

        // 先过滤掉这种路径
        if (path.type == 0) {
            console.log("path.type == 0");
            return;
        }

        let fishId = FishHappyRoomData.instance.genFishId(this._policyIdx, this._policyData.Id, this._genedCnt);
        let fishData = DB_Fish.getInstance().pool!.get(this._policyData.FishId);
        if (fishData == null) {
            console.log("genOneFish get fishData failed!");
            return;
        }

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
            fishScript!.init(path, fishId, fishData, this._policyData);
            fishScript!.startMove();
        }
    }

    onCycleGen () {
        this._timer += 1;
        if (this._timer % this._policyData.RefreshInterval == 0) {
            this._genedCnt += 1;
            this.genOneFish();
            if (this._genedCnt >= this._policyData.Count) {
                // console.log('onCycleGen remove PolicyNode')
                this.unschedule(this.onCycleGen);
                this.node.destroy();
            }
        }
    }

    randomPathId (): number {
        let cnt = 0;
        if (this._policyData != null) {
            cnt = this._policyData.Paths.length;
            if (cnt > 1) {
                return this._policyData.Paths[Utils.rand(cnt)]
            }
            return this._policyData.Paths[0];
        }
        return -1;
    }
}
