import { FruitsEffectType } from "./FruitsEffectWin";


/**
 * room 房间选场背景音乐
 * game 游戏背景音乐
 * free 免费游戏背景音乐
 * mary 玛丽游戏背景音乐
 * stop 滚轴滚动结束音效
 */
 export const FruitsBGMusic = {
    room: 'Fruits/sound/BGM02',
    game: 'Fruits/sound/BGM02',
    free: 'Fruits/sound/BGM03',
    mary: 'Fruits/sound/BGM04',
    stop: 'Fruits/sound/stop',
    ordinary: 'Fruits/sound/ordinary',
    marysound: 'Fruits/sound/huge',
    big: 'Fruits/sound/big',
    huge: 'Fruits/sound/huge',
    Jackpor: 'Fruits/sound/Jackpor',
    freePrize: 'Fruits/sound/freePrize',
    line: 'Fruits/sound/line',
    click: 'Fruits/sound/spineClick',
    wild: 'Fruits/sound/WILD',
    scatter:'Fruits/sound/scatter',
    bonus:'Fruits/sound/bonus',
    fastroll:'Fruits/sound/fastroll',
}

// export const FruitsBGMusic = {
//     room: 'Fruits/sound/BGM02',
//     game: 'Fruits/sound/BGM02',
//     free: 'Fruits/sound/BGM02',
//     mary: 'Fruits/sound/BGM02',
//     stop: 'Fruits/sound/line',
//     ordinary: 'Fruits/sound/line',
//     marysound: 'Fruits/sound/line',
//     big: 'Fruits/sound/line',
//     huge: 'Fruits/sound/line',
//     Jackpor: 'Fruits/sound/line',
//     freePrize: 'Fruits/sound/line',
//     line: 'Fruits/sound/line',
//     click: 'Fruits/sound/line',
//     wild: 'Fruits/sound/line',
//     scatter:'Fruits/sound/line',
//     bonus:'Fruits/sound/line',
//     fastroll:'Fruits/sound/line',
// }



/**
 * winMinRate 最小倍率
 * winMaxRate 最大倍率
 * textTime 文本动画时长
 * actionEndTime 整个动画播放结束时长
 * actionWaitTime 播放动画时等待时间
 * animation1 spine动画名字
 * animation2 spine动画名字
 * spineIndex 动效下标
 */
export const FruitsWinConfig =  [
    {
        //未中奖
        winMinRate: 0,
        winMaxRate: 1,
        actionEndTime: 0.5,
        actionWaitTime: 0.5,
        spineIndex: -1,
        fastActionEndTime: 0,
        type:-1,
        sound: ''
    },
    {
        //小奖
        winMinRate: 1,
        winMaxRate:5,
        textTime: 0.5,
        actionEndTime: 1.5,
        actionWaitTime: 1.0,
        spineIndex: -1,
        fastActionEndTime: 0.5,
        type:-1,
        sound: FruitsBGMusic.line
    },
    {
        //中奖
        winMinRate: 5,
        winMaxRate:10,
        textTime: 2.5,
        actionEndTime: 5,
        actionWaitTime: 1.0,
        animation1: 'animation',
        animation2: 'animation2',
        spineIndex: 2,
        fastActionEndTime: 0.5,
        type:FruitsEffectType.Middle,
        sound: FruitsBGMusic.ordinary
    },
    {
        //大奖
        winMinRate: 10,
        winMaxRate:20,
        textTime: 4.5,
        actionEndTime: 7,
        actionWaitTime: 1.0,
        animation1: 'animation1',
        animation2: 'animation2',
        spineIndex: 1,
        fastActionEndTime: 0.5,
        type:FruitsEffectType.Big,
        sound: FruitsBGMusic.big
    },
    {
        //超大奖
        winMinRate: 20,
        winMaxRate:30,
        textTime: 6.5,
        actionEndTime: 7,
        actionWaitTime: 1.0,
        animation1: 'animation',
        animation2: 'animation2',
        spineIndex: 0,
        fastActionEndTime: 0.5,
        type:FruitsEffectType.Mega,
        sound: FruitsBGMusic.huge
    },
    {
        //巨奖
        winMinRate: 30,
        winMaxRate:Number.MAX_SAFE_INTEGER,
        textTime: 6.5,
        actionEndTime: 7,
        actionWaitTime: 1.0,
        animation1: 'animation',
        animation2: 'animation2',
        spineIndex: 3,
        fastActionEndTime: 0.5,
        type:FruitsEffectType.Super,
        sound: FruitsBGMusic.huge
    },
]

export const getFruitsConfigByRate = function(winRate:number){
    let config;
    const rate = Math.ceil(winRate / 9);
    for (let i = 0; i < FruitsWinConfig.length; ++i) {
        if (rate >= FruitsWinConfig[i].winMinRate && rate < FruitsWinConfig[i].winMaxRate) {
            config = FruitsWinConfig[i];
            break;
        }
    }
    return config;
}

export const SpecialWinConfig:any = {
    'jockPot':{
        textTime: 17,
        actionEndTime: 17,
        animation1: 'animation',
        animation2: 'animation2',
        spineIndex: 4,
        fastActionEndTime: 1.0,
        type:FruitsEffectType.Jackpot,
        sound: FruitsBGMusic.Jackpor
    },
    'freeGame':{
        animation1: 'animation',
        animation2: 'animation2',
        animation3: 'animation3',
        spineIndex: 5,
        type:FruitsEffectType.Free,
        sound: FruitsBGMusic.freePrize
    },
    'maryGame':{
        textTime: 6.5,
        actionEndTime: 9,
        animation1: 'animation',
        animation2: 'animation2',
        spineIndex: 6,
        fastActionEndTime: 1.0,
        type:FruitsEffectType.Mary,
        sound: FruitsBGMusic.marysound
    }
}


/**
 * 服务端中奖下标
 */
export const FruitsItemConfig:any = {
    0:{icon:"wild"},                  
    1:{icon:"bonus"},                   
    2:{icon:"scatter"},                 
    3:{icon:"bar"},                               
    4:{icon:"yingtao",indexs:[2,10,16,21]},                  //4.樱桃
    5:{icon:"lingdang"},                                     //铃铛
    6:{icon:"boluo",indexs:[5,13]},                          //6.菠萝
    7:{icon:"putao",indexs:[4,14,19]},                       //7.葡萄
    8:{icon:"ningmeng",indexs:[11,22]},                      //8.柠檬
    9:{icon:"xigua",indexs:[3,7,15,20]},                     //9.西瓜
    10:{icon:"xiangjiao",indexs:[1,8,17]},                   //10.香蕉
    11:{icon:"juzi",indexs:[9,23]},                          //11 橘子
    12:{icon:"zhadan",indexs:[0,6,12,18]}                    //炸弹
}

/**
 * 服务端下标对应 客户端 下标
 */
export const ServerIndexToClinetIndex:any = {
    0: 2,
    1: 5,
    2: 8,
    3: 11,
    4: 14,
    5: 1,
    6: 4,
    7: 7,
    8: 10,
    9: 13,
    10: 0,
    11: 3,
    12: 6,
    13: 9,
    14: 12
}

export const LineEffectPoint: any = {
    0:{x:-345.5,y:128.42},
    1:{x:-172.5,y:128.42},
    2:{x:0.5,y:128.42},
    3:{x:174.5,y:128.42},
    4:{x:347.5,y:128.42},
    5:{x:-345.5,y:-18.5},
    6:{x:-172.5,y:-18.5},
    7:{x:0.5,y:-18.5},
    8:{x:174.5,y:-18.5},
    9:{x:347.5,y:-18.5},
    10:{x:-345.5,y:-165.5},
    11:{x:-172.5,y:-165.5},
    12:{x:0.5,y:-165.5},
    13:{x:174.5,y:-165.5},
    14:{x:347.5,y:-165.5},
}


const FastRollConfig: any = {
    2:[
        {time:0,  lines:[
            [0,1],[5,6],[10,11],[0,6],[10,6],[5,11],[5,1]
        ]},
    ],
    3: [
        {time:1,lines:[
            [1,2],[6,7],[11,12],[6,2],[6,12],[1,7],[11,7]
        ]},
    ],
    4: [
        {time:2, lines:[
            [2,3],[7,8],[12,13],[2,8],[12,8],[7,3],[7,13]
        ]},
    ]
}

//匹配快速滚动
export const matchFast = function(column:number,Cards:any){
    const datas = FastRollConfig[column];
    const nums = [0,1,2]
    for(let i = 0 ; i < nums.length ; ++i){
        if(nums[i] != 0 && nums[i] != 1 && nums[i] != 2){
            continue;
        }
        const {time, lines } = datas[0];
        let matchFlag = false;
    
        for(let j = 0 ; j < lines.length ; ++j){
            const c = lines[j];
            let match = true;
            for(let k = 0 ; k < c.length ; ++k){
                if(Cards[c[k]] != nums[i]){
                    match = false;
                    break;
                }
            }
            if(match){
                matchFlag = true;
                break
            }
        }
        if(matchFlag){
            return {time,fastRoll:true}
        }
    }
    return {time:0,fastRoll:false}
}

const matchAnimationConfig: any = {
    3: [
        {index:2,lines:[2,3]},
        {index:2,lines:[7,3]},
        {index:1,lines:[7,8]},
        {index:1,lines:[12,8]},
        {index:1,lines:[2,8]},
        {index:0,lines:[12,13]},
        {index:0,lines:[7,13]},
    ],
    4: [
        {index:2,lines:[2,3,4]},
        {index:2,lines:[12,8,4]},
        {index:2,lines:[7,3,4]},
        {index:1,lines:[7,8,9]},
        {index:1,lines:[7,3,9]},
        {index:1,lines:[7,13,9]},
        {index:0,lines:[12,13,14]},
        {index:0,lines:[2,8,14]},
        {index:2,lines:[7,13,14]},
    ]
}

export const matchPlayAnimationItem = function(column:number,Cards:any,target:number){
    const datas = matchAnimationConfig[column];
    let matchIndex:any[] = [];
    
    for(let i = 0 ; i < datas.length ; ++i){
        const {index,lines} = datas[i];
        let match = true;
        for(let k = 0 ; k < lines.length ; ++k){
            if(Cards[lines[k]] != target){
                match = false;
                break;
            }
        }
        if(match){
            matchIndex.push(index);
        }
    }
    return matchIndex;
}

export const RoomPoint: any = {
    0:{x:-241.18,y:60.671},
    1:{x:151.772,y:60.671},
    2:{x:-67.793,y:-190.235},
    3:{x:318.436,y:-179.937},
}