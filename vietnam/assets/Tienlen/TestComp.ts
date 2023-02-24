import { _decorator, Component, Node } from 'cc';
import TienlenHelper from './script/TienlenHelper';
const { ccclass, property } = _decorator;


@ccclass('TestComponent')
export class TestComponent extends Component {

    onLoad() {
        TienlenHelper.log("onload ", this.node.name);
    }

    start() {
        TienlenHelper.log("start ", this.node.name);
    }

    onEnable() {
        TienlenHelper.log("onenable ", this.node.name);
    }

    onDisable() {
        TienlenHelper.log("ondisable ", this.node.name);
    }

    onDestroy() {
        TienlenHelper.log("ondestroy ", this.node.name);
    }

}
