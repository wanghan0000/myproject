
//let Md5Lib                              = require("./md5.js");

import {MD5} from "./MD5";

export namespace CryptoTool {
    //暂时不考虑option 直接默认md5
    export function  Md5(str: string, options?: {}): string {
       return MD5.MD5(str)
    }
}