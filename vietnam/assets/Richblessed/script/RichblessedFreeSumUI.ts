/*
 * @Author: super_javan 296652579@qq.com
 * @Date: 2023-01-04 16:09:50
 * @LastEditors: super_javan 296652579@qq.com
 * @LastEditTime: 2023-01-06 12:09:38
 * @FilePath: \vietnam\assets\Richblessed\script\RichblessedFreeSumUI.ts
 * @Description: 多财免费结算界面
 */

import { Label, _decorator } from 'cc';
import { UIWindow } from '../../ScriptCore/UIFrame/UIForm';
import { fruitsNumFormat } from './FruitsUtils';

const { ccclass, property } = _decorator;

@ccclass('RichblessedFreeSumUI')
export class RichblessedFreeSumUI extends UIWindow {

    @property(Label)
    lbWin: Label = null;

    @property(Label)
    lbFreeTimes:Label = null;

    private delayTimes: any[] = [];

    public async onShow(...params: any): Promise<void> {
        super.onShow(...params);

        const { freeWin , freeTimes } = this.params[0];

        this.lbWin.string = fruitsNumFormat(freeWin);
        this.lbFreeTimes.string = fruitsNumFormat(freeTimes);

        await this.delayTime(10);
        this.onExit();
    }

    onDestroy(){
        this.clearAllTime();
    }

    private clearAllTime() {
        this.delayTimes.forEach((v) => {
            clearTimeout(v);
        })
        this.delayTimes.length = 0;
    }

    private delayTime(time: number) {
        return new Promise((reject) => {
            const id = setTimeout(() => {
                reject(true)
            }, time * 1000);
            this.delayTimes.push(id);
        })
    }

    private async onExit() {
        const { exitCallBack } = this.params[0];
        await this.closeSelf();
        exitCallBack && exitCallBack();
    }

}
