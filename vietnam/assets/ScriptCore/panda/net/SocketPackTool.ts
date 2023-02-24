
/**
 * Socket 包处理工具.
 */

export class SocketPackTool {

    // 解包方法
    private static UnpackFuncMap: Map<number, any> = new Map<number, any>();
    // 解包回调方法
    private static UnpackHandleFuncMap: Map<number, Function> = new Map<number, Function>();

    // 是否打开标记
    private static bIsEnabledMark: boolean = false;

    // 解包方法 - 标记
    private static MarkUnpackFuncMap: Map<number, any> = new Map<number, any>();

    // 解包回调方法 - 标记
    private static MarkUnpackHandleFuncMap: Map<number, Function> = new Map<number, Function>();

    //封包使用的方法
    private static packFunMap: Map<number, any> = new Map<number, any>();

    /**
     * 开启标记
     */
    public static startMark(): void {
        SocketPackTool.bIsEnabledMark = true;
    }

    /**
     * 清理标记
     */
    public static clearMark(): void {
        SocketPackTool.bIsEnabledMark = false;
        SocketPackTool.MarkUnpackFuncMap.clear();
        SocketPackTool.MarkUnpackHandleFuncMap.clear();
    }

    /**
     * 
     * 注册
     * 
     * @param id                    协议ID
     * @param UnpackFunc            协议数据解包方法  
     * @param UnpackHandleFunc      协议数据回调方法
     */
    public static register(UnpackHandleFunc: Function, id: number, UnpackFunc: any): void {
        if (undefined === UnpackFunc || undefined === UnpackHandleFunc) {
            console.log("Error: SocketPackHandleTool.registe: packetId %d must register UnpackFunc or UnpackHandleFunc !!!", id);
            return;
        }

        if (SocketPackTool.UnpackFuncMap.has(id) || SocketPackTool.UnpackHandleFuncMap.has(id)) {
            console.log("Warn: SocketPackHandleTool.registe: packetId %d repeated register UnpackFunc or UnpackHandleFunc !!!", id);
        }

        SocketPackTool.UnpackFuncMap.set(id, UnpackFunc);
        SocketPackTool.UnpackHandleFuncMap.set(id, UnpackHandleFunc);

        if (SocketPackTool.bIsEnabledMark) {
            SocketPackTool.MarkUnpackFuncMap.set(id, UnpackFunc);
            SocketPackTool.MarkUnpackHandleFuncMap.set(id, UnpackHandleFunc);
        }
    }

    /**
     * 在字游戏中，进入游戏要进行消息的注册，在退出游戏的时候要取消注册
     * @param id 
     */
    public static unregister(id: number): void {
        if (!SocketPackTool.UnpackFuncMap.has(id)) {
            console.log("warn:SocketPackHandleTool.unregister packetId %d has been ungister or  %d has neer been registered!", id, id);
            return;
        }

        if (!SocketPackTool.UnpackHandleFuncMap.has(id)) {
            console.log("warn:SocketPackHandleTool.unregister packetId %d has been ungister or  %d has neer been registered!", id, id);
            return;
        }
        SocketPackTool.UnpackFuncMap.delete(id);
        SocketPackTool.UnpackHandleFuncMap.delete(id);

        if (SocketPackTool.bIsEnabledMark) {
            SocketPackTool.MarkUnpackFuncMap.delete(id);
            SocketPackTool.MarkUnpackHandleFuncMap.delete(id);
        }
    }

    /**
     * 封包使用的静态类
     * @param packFunc 封包静态类
     * @param id 包ID
     */
    public static registerPackFunc(id: number, packFunc: any): void {
        if (undefined == packFunc) {
            console.log("Error:Socket registerPackFunc %d must register packFunc", id);
            return;
        }
        if (SocketPackTool.packFunMap.has(id)) {
            console.log("Warn:SocketPackTool中,封包方法已经被注册了,不需要重复注册");
        }
        SocketPackTool.packFunMap.set(id, packFunc);
    }


    public static unregisterPackFunc(id: number) {
        if (!SocketPackTool.packFunMap.has(id)) {
            console.log("warn:SocketPacketTool %d 取消注册的序列化对象 不存在或者已经被取消注册了", id);
            return;
        }
        SocketPackTool.packFunMap.delete(id);
    }

    public static getPackFunc(id: number): any {
        if (!SocketPackTool.packFunMap.has(id)) {
            console.log(`Error:SocketPackTool没有找到${id}对应的消息注册`);
            return null;
        }
        return SocketPackTool.packFunMap.get(id);
    }


    public static getUnpackFunc(id: number): any {
        if (!SocketPackTool.UnpackFuncMap.has(id)) {
            console.log("Error: SocketPackHandleTool.getUnpackFunc: packetId %d not register UnpackFunc !!!", id);
            return undefined;
        }

        return SocketPackTool.UnpackFuncMap.get(id);
    }

    public static getUnpackHandleFunc(id: number): Function | undefined {
        if (!SocketPackTool.UnpackHandleFuncMap.has(id)) {
            console.log("Error: SocketPackHandleTool.getUnpackHandleFunc: packetId %d not register UnpackHandleFunc !!!", id);
            return undefined;
        }

        return SocketPackTool.UnpackHandleFuncMap.get(id);
    }
}