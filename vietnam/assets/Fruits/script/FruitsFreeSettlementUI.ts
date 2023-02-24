
import { Label, _decorator } from 'cc';
import { UIWindow } from '../../ScriptCore/UIFrame/UIForm';
import { fruitsNumFormat } from './FruitsUtils';

/**
 * 免费结算页面
 */

const { ccclass, property } = _decorator;

@ccclass('FruitsFreeSettlementUI')
export class FruitsFreeSettlementUI extends UIWindow {

    @property(Label)
    coin: Label = null;


    //343 344 278 285
    public async onShow(...params: any): Promise<void> {
        super.onShow(...params);

        const { coin  } = this.params[0];

        this.coin.string = fruitsNumFormat(coin);

        await this.delayTime(15);
        this.onExit();
    }

    onDestroy(){
        this.clearAllTime();
    }

    private delayTimes: any[] = [];

    private delayTime(time: number) {
        return new Promise((reject) => {
            const id = setTimeout(() => {
                reject(true)
            }, time * 1000);
            this.delayTimes.push(id);
        })
    }

    private clearAllTime() {
        this.delayTimes.forEach((v) => {
            clearTimeout(v);
        })
        this.delayTimes.length = 0;
    }

    private async onExit() {
        const { exitCallBack } = this.params[0];
        await this.closeSelf();
        exitCallBack && exitCallBack();
    }

}
