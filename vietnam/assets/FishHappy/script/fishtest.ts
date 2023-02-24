import { Component, _decorator } from 'cc';

export class FishTest extends Component {
    private static _instance: FishTest;

    static get instance () : FishTest {
        if (this._instance == null) {
            this._instance = new FishTest();
        }
        return this._instance;
    }
}

