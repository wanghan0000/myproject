import { _decorator, Component, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Model2DInit')
export class Model2DInit extends Component {
    @property({ type: [Prefab] })
    public pfbList: Prefab[] = [];
}

