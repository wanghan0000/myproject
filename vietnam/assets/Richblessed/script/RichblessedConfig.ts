import {RichblessedEffectType} from "./RichblessedEffectWin"

/**
 * room 房间选场背景音乐
 * game 游戏背景音乐
 * free 免费游戏背景音乐
 * jack jack小游戏背景音乐
 */
export const RICHBGMusic = {
    room: 'Richblessed/sound/BGM01',
    game: 'Richblessed/sound/BGM03',
    free: 'Richblessed/sound/BGM04',
    jack: 'Richblessed/sound/BGM02',

    click:'Richblessed/sound/click',
    opencard:'Richblessed/sound/openCard',
    stop:'Richblessed/sound/stop',
    addFree:'Richblessed/sound/freeSound',
    jackPot:'Richblessed/sound/jackPot',
    ordinary:'Richblessed/sound/ordinary',

    line:'Richblessed/sound/line',
    bigWin:'Richblessed/sound/bigWin',
    megaWin:'Richblessed/sound/megaWin',
    super:'Richblessed/sound/super',

    fu:'Richblessed/sound/fu',
    luo:'Richblessed/sound/luo'
}


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
export const RichblessedWinConfig =  [
    {
        //未中奖
        winMinRate: 0,
        winMaxRate: 1,
        actionEndTime: 0.5,
        actionWaitTime: 2,
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
        actionWaitTime: 2,
        spineIndex: -1,
        fastActionEndTime: 0.5,
        type:-1,
        sound: RICHBGMusic.line
    },
    {
        //普通奖
        winMinRate: 5,
        winMaxRate:10,
        textTime: 1,
        actionEndTime: 5,
        actionWaitTime: 2,
        animation1: 'animation',
        animation2: 'animation2',
        spineIndex: 0,
        fastActionEndTime: 0.5,
        type:RichblessedEffectType.Middle,
        sound:RICHBGMusic.ordinary
    },
    {
        //大奖 bigwin
        winMinRate: 10,
        winMaxRate:20,
        textTime: 1,
        actionEndTime: 5,
        actionWaitTime: 2,
        animation1: 'animation',
        animation2: 'animation2',
        spineIndex: 1,
        fastActionEndTime: 0.5,
        type:RichblessedEffectType.Big,
        sound:RICHBGMusic.bigWin
    },
    {
        //超大奖 megawin
        winMinRate: 20,
        winMaxRate:30,
        textTime: 1,
        actionEndTime: 5,
        actionWaitTime: 2,
        animation1: 'animation',
        animation2: 'animation2',
        spineIndex: 2,
        fastActionEndTime: 0.5,
        type:RichblessedEffectType.Mega,
        sound:RICHBGMusic.megaWin
    },
    {
        //巨奖
        winMinRate: 30,
        winMaxRate:Number.MAX_SAFE_INTEGER,
        textTime: 1,
        actionEndTime: 10,
        actionWaitTime: 2,
        animation1: 'animation',
        animation2: 'animation',
        spineIndex: 3,
        fastActionEndTime: 0.5,
        type:RichblessedEffectType.Super,
        sound:RICHBGMusic.super
    },
]

export const getFruitsConfigByRate = function(winRate:number){
    let config;
    // const rate = Math.floor(winRate / 9);
    for (let i = 0; i < RichblessedWinConfig.length; ++i) {
        if (winRate >= RichblessedWinConfig[i].winMinRate && winRate < RichblessedWinConfig[i].winMaxRate) {
            config = RichblessedWinConfig[i];
            break;
        }
    }
    return config;
}

export const SpecialWinConfig:any = {
    'jockPot':{
        textTime: 1,
        actionEndTime: 3,
        animation1: 'animation',
        animation2: 'animation2',
        spineIndex: 4,
        fastActionEndTime: 1.0,
        type:RichblessedEffectType.Jackpot,
        sound:RICHBGMusic.jackPot
    },
    'freeGame':{
        animation1: 'animation',
        animation2: 'animation2',
        animation3: 'animation3',
        spineIndex: 5,
        type:RichblessedEffectType.Free,
        sound:RICHBGMusic.addFree
    },
    'jackGame':{
        textTime: 1,
        actionEndTime: 5,
        animation1: 'animation',
        animation2: 'animation2',
        type:RichblessedEffectType.JackGame,
        fastActionEndTime: 1.0,
        sound:RICHBGMusic.addFree
    }
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

export const FruitConis: any = {
    0: "fu_icon",                   //福
    1: "luo_icon",                   //铜锣
    2: "fenghuang_icon",                 //金凤凰
    3: "fanchuan_icon",                     //帆船
    4: "wugui_icon",                  //4.金龟
    5: "yuanbao_icon",                //5.金元宝
    6: "jinbi_icon",                 //6.金币
    7: "a_icon",                   
    8: "k_icon",                   
    9: "q_icon",             
    10: "j_icon",                 
    11: "10_icon",                   
    12: "9_icon",
}

export const RoomPoint: any = {
    0:{x:-315,y:140},
    1:{x:110,y:140},
    2:{x:-60,y:-160},
    3:{x:380,y:-160},
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
        {index:0,lines:[7,13,14]},
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

export const fuLocalPos:any = [
    [-40,44],[40,36],[-45,-30],[51,-45]
]

export const fuWorldPos:any = [
    [[-413,150],[-320,135],[-412,85],[-333,77]],  //0
    [[-224,150],[-141,135],[-223,85],[-144,77]],  //1
    [[-42,150],[40,135],[-42,85],[37,77]],       //2
    [[150,150],[234,135],[145,85],[225,77]],       //3
    [[328,150],[411,135],[330,85],[408,77]],      //4

    [[-413,16],[-320,0],[-412,-50],[-333,-56]],   //5
    [[-224,16],[-141,0],[-223,-50],[-144,-56]],  //6
    [[-42,16],[40,0],[-42,-50],[37,-56]],      //7
    [[150,16],[234,0],[145,-50],[225,-56]],      //8
    [[328,16],[411,0],[330,-50],[408,-56]],     //9

    [[-413,-142],[-320,-156],[-412,-207],[-333,-215]],   //10
    [[-224,-142],[-141,-156],[-223,-207],[-144,-215]],  //11
    [[-42,-142],[40,-156],[-42,-207],[37,-215]],      //12
    [[150,-142],[234,-156],[145,-207],[225,-215]],      //13
    [[328,-142],[411,-156],[330,-207],[408,-215]],     //14
]

export const testData = [
    {
        Cards: [9, 0, 9, 11, 6, 3, 4, 6, 12, 1, 6, 12, 3, 10, 3],
        FreeNum : 2,
        AddFreeNum : 2,
        WinFreeTimes : 2,
        WinRate : 100,
        JackpotEle : -1,
    },
    {
        Cards: [9, 0, 9, 11, 6, 3, 4, 6, 12, 1, 6, 12, 3, 10, 3],
        FreeNum : 2,
        AddFreeNum : 2,
        WinFreeTimes : 2,
        WinRate : 50,
        JackpotEle : -1,
    },
    {
        Cards: [9, 0, 9, 11, 6, 3, 4, 6, 12, 1, 6, 12, 3, 10, 3],
        JackpotEle : 1
    },
    {
        Cards: [9, 0, 9, 11, 6, 3, 4, 6, 12, 1, 6, 12, 3, 10, 3],
    },
    {
        Cards: [9, 0, 9, 11, 6, 3, 4, 6, 12, 1, 6, 12, 3, 10, 3],
        FreeNum : 1,
        AddFreeNum : 1,
        WinFreeTimes : 1,
        WinRate : 250,
        JackpotEle : -1
    }
]