import { _decorator, Component, Node, Animation, Enum ,sys, native} from "cc";


export default class Google {

    /**
     * 分享类型
     */
    public static SHARE_TYPE = {
        /**
         * 链接
         */
        LINK: 0,
        /**
         * 图片
         */
        PHOTO: 1
    }

    /**
     * 登录
     */
    public static login() {
        console.log("Google login");
        if (sys.isNative) {
            native.jsbBridgeWrapper.dispatchEventToNative("loginGoogle");
            // if (sys.os == sys.OS.ANDROID) {
            //     let className = "com/util/BridgeUtil";
            //     let methodName = "GoogleLogin";
            //     let methodSignature = "()V";
            //     jsb.reflection.callStaticMethod(className, methodName, methodSignature);
            // } else if (sys.os == sys.OS.IOS) {
            //     let className = "BridgeUtil";
            //     let methodName = "GoogleLogin";
            //     jsb.reflection.callStaticMethod(className, methodName,"");
            // }
        } else {
            let authInfo = '{"id":"1111111111111111","name":"Test","gender":"","email":"123456@qq.com","picture":"https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=xxx&height=50&width=50&ext=xxx","avatar":"https://graph.Google.com/xxx/picture?type=large"}';
            onGoogleLoginSuccess(authInfo);
        }
    }

    /**
     * 登出
     */
    public static logout() {
        console.log("Google logout");

        if (sys.isNative) {
            native.jsbBridgeWrapper.dispatchEventToNative("logOutGoogle");
            // if (sys.os == sys.OS.ANDROID) {
            //     let className = "com/util/BridgeUtil";
            //     let methodName = "GoogleLogout";
            //     let methodSignature = "()V";
            //     jsb.reflection.callStaticMethod(className, methodName, methodSignature);
            // } else if (sys.os == sys.OS.IOS) {
            //     let className = "BridgeUtil";
            //     let methodName = "GoogleLogout";
            //     jsb.reflection.callStaticMethod(className, methodName,"");
            // }
        }
    }

    /**
     * 支付
     */

}

/**
 * 登录成功
 */
const onGoogleLoginSuccess = function (authInfo: any) {
    console.log("onGoogleLoginSuccess authInfo = " + authInfo);
    //处理登录逻辑
};

/**
 * 登录取消
 */
 const onGoogleLoginCancel = function () {
    console.log("onGoogleLoginCancel");
};

/**
 * 登录错误
 */
 const onGoogleLoginError = function (error:any) {
    console.log("onGoogleLoginError error = " + error);
};


