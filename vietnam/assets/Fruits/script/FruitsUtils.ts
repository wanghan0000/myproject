import { Label, Node, tween, UITransform } from "cc";


/**
 * 适配文本节点内容框大小
 * @param params 
 */
export const adapterLabelBg = (params: {
    fatherNode: Node,
    lb: Label,
    w: number,
    leftInterval: number,
    rightInterval: number
}) => {
    const { fatherNode, lb, w, rightInterval, leftInterval } = params;
    const call: any = fatherNode;
    let transForm = call['original'];
    const t = fatherNode.getComponent(UITransform);
    if (!transForm) {
        transForm = { width: t.width, height: t.height };
        call['original'] = transForm;
    }
    const text: string = lb.string;
    const width = w * text.length + rightInterval + leftInterval;
    if (width > transForm.width) {
        t.width = width;
    } else {
        t.width = transForm.width;
    }
}

export const fruitsNumFormat = function (num: string) {
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


export const palyFruitsLableAnim = function (params: {
    target: number, 
    lable: Label, 
    cb?: Function, 
    time?:number,
    format?: boolean
}
) {
    const { target, lable, cb = null, format = true , time = 0.5} = params;
    const obj = { num: parseInt(lable.string.replace(/,/g,'')) };
    const call: any = lable;
    if (call['aniTween']) {
        call['aniTween'].stop();
        //call.string = call['targetNum'];
    }
    const t = tween(obj).to(time, { num: target }, {
        onUpdate: () => {
            const text = Math.floor(obj.num) + '';
            call.string = text;
            format && (call.string = fruitsNumFormat(text));
        },
        onComplete: () => {
            const text = target + '';
            call.string = text;
            format && (call.string = fruitsNumFormat(text));
            call['aniTween'] = null;
            call['targetNum'] = undefined;
            cb && cb();
        }
    }).start();
    call['targetNum'] = target;
    call['aniTween'] = t;
}

export const stopFruitsLableAnim = function(lb:Label){
    const call: any = lb;
    if (call['aniTween']) {
        if(call['targetNum']){
            call.string = call['targetNum'];
        }
        call['aniTween'].stop();
        //call.string = call['targetNum'];
    }
}