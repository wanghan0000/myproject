import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BaseComponent')
export class BaseComponent extends Component {
    public show(...args: any[]) {
        this.node.active = true;
    }

    public hide() {
        this.node.active = false;
    }

}

