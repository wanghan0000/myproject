import { Color } from "cc";

export enum CardColor {
    DIAMOND,//方块
    CLUB,//梅花
    HEART,//红桃
    SPADE, //黑桃
    BLACKJOKER,
    REDJOKER
}

export enum TalaCardColor {
    SPADE, //黑桃
    CLUB,//梅花
    HEART,//红桃
    DIAMOND,//方块
}

export enum CardPoint {
    _1,
    _2,
    _3,
    _4,
    _5,
    _6,
    _7,
    _8,
    _9,
    _10,
    _11,
    _12,
    _13,
    _BlackJoker = 52,
    _RedJoker
}


export enum TalaCardPoint {
    _A,
    _2,
    _3,
    _4,
    _5,
    _6,
    _7,
    _8,
    _9,
    _10,
    _J,
    _Q,
    _K
}

export enum TalaCardType {
    NONE,
    ColorStraight,            // 同花顺
    Triple,                  // 三张
    Four_Bomb,                // 炸弹
}

export enum PlayerStateFlag {
    PlayerState_Online,      //在线标记	
    PlayerState_Ready,       //准备标记	
    PlayerState_SceneOwner,  //房主标记	
    PlayerState_Choke,       //呛标记	
    PlayerState_Ting,        //听牌标记	
    PlayerState_NoisyBanker, //闹庄标记
    PlayerState_WaitOp,      //等待操作标记	
    PlayerState_Auto,        //托管状态	
    PlayerState_Check,       //已看牌状态	
    PlayerState_Fold,        //弃牌状态	
    PlayerState_Lose,        //输状态
    PlayerState_Win,         //赢状态
    PlayerState_WaitNext,    //等待下一局游戏
    PlayerState_GameBreak,   //不能继续游戏	
    PlayerState_Leave,       //暂离状态	
    PlayerState_Audience = 15, //旁观者标记	
    PlayerState_AllIn,       //allin标记	
    PlayerState_FinalAllIn,  //最后一圈，最后一个人allin标记	
    PlayerState_Show,  		 //亮牌标记	
    PlayerState_Max          //max
}

export class ArraySet<T>{
    private arr: Array<T> = [];

    public add(t: T) {
        this.indexOf(t) < 0 && this.arr.push(t);
    }

    public remove(t: T) {
        var i = this.indexOf(t);
        if (i >= 0) {
            delete this.arr[i];
        }
    }

    public indexOf(t: T): number {
        return this.arr.indexOf(t);
    }

    public size(): number {
        return this.arr.length;
    }

    public clear() {
        this.arr.length = 0;
    }

    public toArray(): T[] {
        return this.arr;
    }
}

export class Queue<T> {

    private elements: Array<T>;
    private _size: number | undefined;

    public constructor(capacity?: number) {
        this.elements = new Array<T>();
        this._size = capacity;
    }

    public enqueue(o: T): boolean {
        if (o == null) {
            return false;
        }
        //如果传递了size参数就设置了队列的大小
        if (this._size) {
            if (this.elements.length == this._size) {
                this.dequeue();
            }
        }
        this.elements.push(o);
        return true;
    }

    public dequeue(): T {
        return this.elements.shift();
    }

    public size(): number {
        return this.elements.length;
    }

    public empty(): boolean {
        return this.size() == 0;
    }

    public clear() {
        delete this.elements;
        this.elements = new Array<T>();
    }
}

export let Color_Green: Color = new Color('#00ff00');
export let Color_Gray: Color = new Color('#808080');
