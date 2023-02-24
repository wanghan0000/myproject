import { _decorator, Component, Label, tween, Tween } from "cc";


const { ccclass, property } = _decorator;

@ccclass('NBNumberLable')
export default class NBNumberLable extends Label{

    private tween: Tween<any> = null;
    private params: any = null;

    play(params:{target:number, time: number , format:boolean}){
        const { target, format = true , time = 0.5} = params;
        this.params = params;
        const obj = { num: parseInt(this.string.replace(/,/g,'')) };
        this.tween = tween(obj).to(time, { num: target }, {
            onUpdate: () => {
                const text = Math.floor(obj.num) + '';
                this.string = text;
                format && (this.string = this.fruitsNumFormat(text));
            },
            onComplete: () => {
                const text = target + '';
                this.string = text;
                format && (this.string = this.fruitsNumFormat(text));
            }
        }).start();
    }

    stop(){
        this.tween && this.tween.stop();
        if(this.params){
            const { target, format = true } = this.params;
            this.string = target;
            format && (this.string = this.fruitsNumFormat(target));
            this.params = null;
        }
    }   

    private fruitsNumFormat (num: string) {
        num = num + '';
        const arr = num.split("").reverse();  // 转换成字符数组并且倒序排列
        let res: any = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            if (i % 3 === 0 && i !== 0) {
                res.push(",");   // 添加分隔符
            }
            res.push(arr[i]);
        }
        res.reverse(); // 再次倒序成为正确的顺序
        res = res.join("");
        return res;
    }

    onDestroy(){
        this.tween && this.tween.stop();
    }
}