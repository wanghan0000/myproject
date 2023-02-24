
import { _decorator, Component, Node } from 'cc';
import { FishPolicyControl } from './fishpolicycontrol';
const { ccclass, property } = _decorator;

@ccclass('FishSpawnControl')
export class FishSpawnControl extends Component {
    start () {
        // [3]
    }

    // update (deltaTime: number) {
    //     // [4]
    // }

    createFishs (policyIdx: number, policyData: any) {
        let nodePolicy = new Node();
        if (nodePolicy != null) {
            nodePolicy.parent = this.node;
            let policyCtrl = nodePolicy.addComponent(FishPolicyControl);
            if (policyCtrl != null) {
                policyCtrl.init(policyIdx, policyData);
            }
        }
    }

    genFishId (policyIdx: number, id: any, idx: number) {
	    return policyIdx*1000000 + id*100 + idx
    }
}