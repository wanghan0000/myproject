
export enum PlayerState{
    //当前玩家在登录界面,以后可能会扩展注册的情况
    Init = 0,
    //socket连接中
    Connecting,
    //连接打开成功
    Connected,
    //连接失败
    ConnectFailed,
    //登录中
    Logining,
    //登录成功
    LoginSuccess,
    //重连中
    Reconnecting,
    //重连失败
    ReconnectFailed,

    //退出登录。客户端主动退出登录
    LoginOut,

    //主动断开连接
    Disconnect,

}

export class PlayerStateMgr{

    private static instance:PlayerStateMgr = new PlayerStateMgr();
    public static getInstance():PlayerStateMgr{
        return this.instance;
    }




    private curState:PlayerState = PlayerState.Init;
    private lastState:PlayerState = PlayerState.Init;
    public setPlayerState(state:PlayerState){

        this.lastState = this.curState;
        this.curState = state;
    }

    //获取玩家状态
    public getPlayerState():PlayerState{
        return this.curState;
    }

    //获取玩家的上个状态
    public getPlayerLastState():PlayerState{
        return this.lastState;
    }


    public chkNeedLogin():boolean{
        if(this.curState == PlayerState.Init || 
            this.curState == PlayerState.ConnectFailed ||
            this.curState == PlayerState.LoginOut ||
            this.curState == PlayerState.Disconnect){
                return true;
            }
        return false;
    }
}


