


export class NotifycationData  {
    private static instance:NotifycationData | null = null;

    public static getInstance():NotifycationData{
        if (this.instance == null){
            this.instance = new NotifycationData();
            this.instance.testData();
        }
        return this.instance;
    }


    private testData(){
        this.msgList.push("<color=#00ff00>我是</color><color=#0fffff>多文本</color>跑马灯哈哈哈哈哈哈");
        this.msgList.push("<color=#ffff00>仅仅做测试用的</color><color=#ff0000>多文本</color>多文本广播,长度测试，哈哈哈哈");
        this.msgList.push("<color=#ffff00>跑马灯可以设置</color><color=#ff0000>富文本不同的颜色</color>可以试试。获取conetentSize就能得到正确的长度。这点比cocos2dx好的多");
    }

    private msgList:string[] = [];

    /**
     * 正式的应该是获取 第一条数据 并且将第一条删除
     * 现在测试的，随机获取不删除
     */
    public getNextTxt():string{
        let idx:number = Math.floor( Math.random()*3 );
        return this.msgList[idx];
    }
}
