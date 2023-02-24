



export namespace ProjectConfig {

    //是否跳过登录界面直接登录
    export const IsJumpLogin = true;

    export const isDebug = true;

    //是否跳过热更新检查
    export const isJumpCheckUpdate = true;

    //加载后的默认语言
    export const defaultCurLng = "vi";
    //当前包中包含的语言
    export const pkgLng = ["vi","en"];

    export const DesignScreenWidth = 720;
    export const DesignScreenHeight = 1280;

    //背景的宽度和高度
    export const BackDesignScreenWidth = 720;
    export const BackDesignScreenHeight = 1600;

    export const DesignScreenDirection = "landscape";
    export const DesignScreenFit = "fit-height";


    // 是否为本地开发测试.
    export const bIsLocalDevelop = true;
    // 默认配置为本地开发.
    export const AppId = "5c56d1644966f078bfb90c71";
    export const AuthKey = "www.jxjy.games.cn";

    export const HttpHost = "http://192.168.1.230/dbmis/public/game/api/";
    export const HttpHost_IP = "http://192.168.1.246/ip2region/public/";

    //export const HotUpdateUrl = "http://192.168.1.9/vitetname/updatetips/versiontips.txt";                                    //热更新地址
    export const HotUpdateUrl = "http://192.168.10.250:9001";
    export const HotUpdateTipsUrl = "http://192.168.10.250:9001/hotupdate/updatetips/versiontips.txt";

    //渠道号
    export const Channel_ID: string = "0";

    //平台
    export const Platform_ID: string = "1";

    // Need initialized once.
    export function init(): void {
        // 如果标记为非本地开发, 走外网配置
        if (ProjectConfig.bIsLocalDevelop) {
            return;
        }

        // ProjectConfig.GameHost                      = CustomTypes.GameHostInfo.create("192.168.1.240", 11002);      // 外网
        // ProjectConfig.HttpHost                      = "http://192.168.1.230/dbmis/public/game/api/";
        // ProjectConfig.HttpHost_IP                   = "http://192.168.1.246/ip2region/public/";
    }

    //websocket的连接配置和端口  240 and port



    //成都沟通和外网测试
    // export const HOST = "13.126.227.39";

    //内网测试
    //export const HOST = "192.168.10.240";

    //export const HOST = "192.168.10.233";

    //海外打包展示服务器地址
    export const HOST =  "3.110.111.158";
    
    //万明服务器
    //export const HOST = "192.168.10.35";
    

    //超明的服务器
    //export const HOST = "192.168.10.30";
    //gs 服务器
    //export const HOST = "192.168.10.49";
    export const PORT = 31004;

    //gs服务器
    // export const HOST = "192.168.2.57";
    // export const PORT = 31004;

    //李哲服务器
    // export const HOST = "192.168.2.103";
    // export const PORT = 31004;

    //dabai服务器
    // export const HOST = "192.168.2.32";
    // export const PORT = 31004;


}

// 初始化项目配置.
//ProjectConfig.init();