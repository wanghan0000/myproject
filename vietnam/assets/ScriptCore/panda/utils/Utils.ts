import { assetManager, ImageAsset, math, native, sp, SpriteFrame, sys, Texture2D } from "cc";
import { I18nMgr } from "../../i18n/I18nMgr";
import { ProjectConfig } from "../../ProjectConfig";
import { ResMgr } from "../../UIFrame/ResMgr";

// current state of the random number generator
let rand32_state = 1;
let rand32_m = 2147483647;
let rand32_a = 48271;
let rand32_q = Math.floor(rand32_m / rand32_a);
let rand32_r = rand32_m % rand32_a;






export namespace Utils {



    export function getTimeStamp(): number {
        return Math.round(Date.now() / 1000);
    }

    export function getTimeStampString(): string {
        return Utils.getTimeStamp().toString();
    }

    export function getAccurateTimeStamp(): number {
        return Date.now();
    }

    export function getAccurateTimeStampString(): string {
        return Utils.getAccurateTimeStamp().toString();
    }

    //格式化时间为年月日
    export function cvtDateTimeToYYYMMDD(date:Date):string{
        let y = date.getFullYear();
        let m = date.getMonth()+1;
        let mStr = m.toString();
        if(m<10){
            mStr = "0" + mStr;
        }
        let d = date.getDate();
        let dStr = d.toString();
        if(d<10){
            dStr = "0" + dStr;
        }
        return `${y}-${mStr}-${dStr}`;
    }

    //格式化日期到年月日 hh:mm:ss
    export function cvtDateTimeToYYYMMDDHHmmss(date:Date):string{
        let y = date.getFullYear();
        let m = date.getMonth()+1;
        let mStr = m.toString();
        if(m<10){
            mStr = "0" + mStr;
        }
        let d = date.getDate();
        let dStr = d.toString();
        if(d<10){
            dStr = "0" + dStr;
        }
        let h = date.getHours();
        let hStr = h.toString();
        if(h<10){
            hStr = `0${h}`;
        }
        let min = date.getMinutes();
        let minStr = min.toString();
        if(min <10){
            minStr = `0${min}`;
        }
        let second = date.getSeconds();
        let secondStr = second.toString();
        if(second <10){
            secondStr = `0${second}`;
        }
        return `${y}-${mStr}-${dStr} ${hStr}:${minStr}:${secondStr}`;
    }

    export function changeTimestampToData(timestamp: any): string {
        let date = new Date();
        date.setTime(timestamp * 1000);
        //在lib.eds.d.ts文件中有DateTimeFormatOptions这个表的定义，里面有个hour12的参数可以设置，不会用，期待后期优化
        let dateStr = date.toLocaleDateString(); //这个返回年份 如2020/2/20
        let timeStr = date.toLocaleTimeString(); //这个返回时间 上(下)午9:20:20
        //需要把中文的上下午变成英文,不知道切换成越南语会不会自动转
        let ningStr = timeStr.substring(0, 2)
        if (ningStr == "上午") {
            ningStr = "AM";
            timeStr = dateStr + " " + timeStr.substring(2) + ningStr;
        }
        else if (ningStr == "下午") {
            ningStr = "PM";
            timeStr = dateStr + " " + timeStr.substring(2) + ningStr;
        }
        return timeStr;
    }

    export function stringFormat(str: string,...params:any): string {
        if (0 === arguments.length) {
            return str;
        }

        let args = Array.prototype.slice.call(arguments, 1);
        return str.replace(/\{(\d+)\}/g, function (m, i) {
            return args[i];
        });
    }

    export function executeStringCode(str: string): any {
        let func = new Function(str)();
        return func();
    }

    export function stringIsEmpty(str: string): boolean {
        if (str == null || str == undefined || str.length == 0) {
            return true;
        }
        return false;
    }

    export function dumpTrack(count: number | null) {
        let caller = arguments.callee.caller;
        let i = 0;
        if (count == null) {
            count = 10;
        }
        while (caller && i < count) {
            console.log(caller.toString());
            caller = caller.caller;
            i++;
        }
    }

    /* Return a pseudo-random number in the range 0 .. RAND32_MAX.
    * Note: Not reentrant - if two threads call this simultaneously, they will likely
    * get the same random number. */

    export function randomseed(seed: number) {
        rand32_state = seed
    }

    export function random() {
        let hi = Math.floor(rand32_state / rand32_q);
        let lo = rand32_state % rand32_q;
        let test = rand32_a * lo - rand32_r * hi;
        if (test > 0) {
            rand32_state = test;
        } else {
            rand32_state = test + rand32_m;
        }
        return rand32_state - 1;
    }

    export function rand(max: number) {
        let ret = Utils.random() % max;
        return ret;
    }

    //获取 min-max之间的随机数
    export function getRanom(min: number, max: number): number {
        var Range = max - min;
        var Rand = Math.random();
        return (min + Math.round(Rand * Range));
    }

    // 求两点的夹角（弧度）
    export function radians4point(ax: number, ay: number, bx: number, by: number) {
        return Math.atan2(ay - by, bx - ax);
    }

    // 角度转换为弧度
    export function degrees2radians(degrees: number) {
        return degrees / 180 * Math.PI;
    }

    // 弧度转换为角度
    export function radians2degrees(radians: number) {
        return radians / Math.PI * 180;
    }

    // 求圆上一个点的位置
    export function pointAtCircle(px: number, py: number, radians: number, radius: number) {
        return px + Math.cos(radians) * radius, py - Math.sin(radians) * radius;
    }

    // 求两点间距离
    export function dist(ax: number, ay: number, bx: number, by: number) {
        let dx = bx - ax;
        let dy = by - ay;
        return Math.sqrt(dx * dx + dy * dy)
    }

    /**
     * 加载带有后缀的网络资源
     * 在获取到以后使用的时候要addRef() 释放的时候要进行decRef() 操作
     * @param url 类型 http://192.168.1.250/vitename/aa.png
     * @returns 返回ImageAsset类型 
     */
    export function loadRemoteImageAssetWithExt(url: string): Promise<ImageAsset | null> {
        return new Promise<ImageAsset | null>((reslove, reject) => {
            assetManager.loadRemote<ImageAsset>(url, (err, imageAsset: ImageAsset) => {
                if (err != null) {
                    console.log(`加载网络资源错误:${url}`);
                    reslove(null);
                    return;
                }
                reslove(imageAsset);
            });
        });
    }

    /**
     * 加载带有后缀的网络资源
     * @param url 
     * @returns 返回SpriteFrame格式
     */
    export function loadRemoteSpriteFrameWithExt(url: string): Promise<SpriteFrame | null> {
        return new Promise<SpriteFrame | null>((reslove, reject) => {
            assetManager.loadRemote<ImageAsset>(url, (err, imageAsset: ImageAsset) => {
                if (err != null) {
                    console.log(`加载网络资源错误${url}`);
                    reslove(null);
                    return;
                }
                const spriteFrame = new SpriteFrame();
                const texture = new Texture2D();
                texture.image = imageAsset;
                spriteFrame.texture = texture;
                reslove(spriteFrame);
            });
        });
    }


    /**
    * 加载不带后缀名的网络资源
    * 在获取到以后使用的使用要addRef() 不使用的时候要decRef()操作
    * @param url 网络资源的url    http://wwww.baidu.aa?head=xxxx   
    * @param ext 网络资源的类型  png|jpg|...
    */
    export function loadRemoteImageAssetWithoutExt(url: string, ext: string): Promise<ImageAsset | null> {
        return new Promise<ImageAsset | null>((reslove, reject) => {
            assetManager.loadRemote<ImageAsset>(url, { ext: ext }, (err, imageAsset: ImageAsset) => {
                if (err != null) {
                    console.log(`加载网络资源错误:${url},后缀:${ext}`);
                    reslove(null);
                    return;
                }
                reslove(imageAsset);
            });
        });
    }
    /**
     * 加载带有后缀的网络资源
     * @param url 
     * @param ext 
     * @returns 返回spriteFrame类型
     */
    export function loadRemoteSpriteFrameWithoutExt(url: string, ext: string): Promise<SpriteFrame | null> {
        return new Promise<SpriteFrame | null>((resolve, reject) => {
            assetManager.loadRemote<ImageAsset>(url, { ext: ext }, (err, imageAsset: ImageAsset) => {
                if (err != null) {
                    console.log(`加载网络资源错误:${url},后缀:${ext}`);
                    resolve(null);
                    return;
                }
                const spriteFrame = new SpriteFrame();
                const texture = new Texture2D();
                texture.image = imageAsset;
                spriteFrame.texture = texture;
                resolve(spriteFrame);
            });
        });
    }


    //获取头像
    //如果  //如果是网络头像一定要在使用的时候进行 addRef()  不用的时候执行 decRef() 操作
    export function getHeadSpriteFrame(head:number,headurl:string = "",ext:string = ""):Promise<SpriteFrame | null>{
        if(headurl != "" && ext != ""){
            return loadRemoteSpriteFrameWithoutExt(headurl,ext);
        }else{
            return new Promise<SpriteFrame | null>((resolve,reject)=>{
                head = (head-1) %6 +1;
                let sp = ResMgr.getInstance().getSpriteFrameByPath("Lobby/head/head_"+head);
                resolve(sp);
            });
        }
    }


    //proto中去字符串值
    export function getProtoString(val: any): string {
        if (val == null || val == undefined) {
            return "";
        }
        return val;
    }
    //proto中获取number值
    export function getProtoNumber(val: any): number {
        if (val == null || val == undefined) {
            return 0;
        }
        return val;
    }

    //获取proto中的boolean
    export function getProtoBoolean(val: any): boolean {
        if (val == null || val == undefined) {
            return false;
        }
        return true;
    }


    export function cvtToKMB(number: number, fixed: number = 2): string {
        if (number < 1000) {
            return number.toString();
        } else if (number < 1000000) {
            return (Math.floor( number / 1000 * 100 ) /100).toFixed(fixed) + "K";
        } else if (number < 1000000000) {
            return (Math.floor( number / 1000000 * 100 ) /100).toFixed(fixed) + "M";
        } else {
            return (Math.floor( number / 1000000000 * 100 ) /100).toFixed(fixed) + "B";
        }
    }

    //数字的千分制显示
    export function cvtNumberToThousand(val:number){
        let valStr = val.toString();
        let arr = valStr.split("");
        let result = "";
        let idx = 0;
        for(let i = arr.length-1;i>=0;i--){
            result =  arr[i] + result;
            idx++;
            if(idx %3 == 0 && i!=0){
                result = "," + result;
            }
        }
        return result;
    }

    export function convertMoney(money: number): string {
        // money.toFixed(2);
        return money.toString();
    }

    //判断字符串是否为整数
    export function chkStrIsInt(str: string): boolean {
        let regExp: RegExp = new RegExp("^[0-9]{1,}$");
        return regExp.test(str);
    }


    //将秒转换成为 00:00的格式
    export function cvtSecondToTimeFormat(second:number):string{
        second = parseInt(second.toString());
        let min =  Math.floor(second / 60);

        let minStr = "00";
        if (min < 10) {
            minStr = "0" + min;
        } else {
            minStr = min.toString();
        }
        let sec = Math.floor( (second - Math.floor(second / 60) * 60) );
        let secStr = "00";
        if (sec < 10) {
            secStr = "0" + sec;
        } else {
            secStr = sec.toString();
        }
        return `${minStr}:${secStr}`
    }


    //处理字符串过长的时候用某些特殊的字符替代
    export function replaceStringWithStr(srcString:string,len:number,cstr:string){
        let srcLen = srcString.length;
        if(srcLen <= len){
            return srcString;
        }
        else{
            let str:string = srcString.substring(0,len);
            return str + cstr;
        }
    }

    //判断当前字符串是否是json
    export function checkStringIsJson(str:string):boolean{
        if (typeof str === 'string'){
            try{
                let obj = JSON.parse(str);
                if(typeof obj === 'object' && obj){
                    return true;
                }else{
                    return false;
                }
            }catch{
                return false;
            }
        }else{
            return false
        }
    }

    //后去后台读取的多语言字符串
    export function getLanguageString(sourceString:string):string{
        if(Utils.checkStringIsJson(sourceString)){
            let sourceObj = JSON.parse(sourceString);
            return sourceObj[I18nMgr.getInstance().getCurLngKey()];
        }
        return sourceString;
    }


    export async function copyToClip(content:string){

        if (sys.isNative) {
            if (sys.os == sys.OS.ANDROID) {
                native.reflection.callStaticMethod("com/cocos/game/AppActivity", "CopyToClip", "(Ljava/lang/String;)V", content);
                
            } else if (sys.os == sys.OS.IOS) {
                //ios端
            }
            return true;
        } else if (sys.isBrowser) {
            let response = await new Promise<boolean>((resolve, reject) => {
                if (window.navigator && window.navigator.clipboard) {
                    window.navigator.clipboard.writeText(content).then(() => {
                        resolve(true);
                    }).catch(() => {
                        resolve(false);
                    })
                } else {
                    var textArea: any = null;
                    textArea = document.getElementById("clipBoard");
                    if (textArea === null) {
                        textArea = document.createElement("textarea");
                        textArea.id = "clipBoard";
                        textArea.textContent = content;
                        document.body.appendChild(textArea);
                    }
                    textArea.select();
                    try {
                        const msg = document.execCommand('copy') ? 'successful' : 'unsuccessful';
                        document.body.removeChild(textArea);
                        resolve(true)
                    } catch (err) {
                        resolve(false);
                    }
                }
            });
            return response;
        }
    }


    //获取当前多语言保存到本地的多语言
    export function getLocalStorageLng():string{
        let lng = ProjectConfig.defaultCurLng;
        let languageKey = localStorage.getItem("cur_language_type");
        if(languageKey == "" || languageKey == undefined || languageKey == null){
            return lng;
        }else{
            if(ProjectConfig.pkgLng.indexOf(languageKey) != -1 ){
                return languageKey;
            }else{
                return lng;
            }
        }
    }
    //设置本地保存得多语言
    export function setLocalStorageLng(lngKey:string){
        if(lngKey != "" && lngKey != null && lngKey != undefined){
            localStorage.setItem("cur_language_type",lngKey);
        }
    }



    // export async function changeSlotSkin(sk:sp.Skeleton, slotName:string, texture:Texture2D) {
    //         //获取插槽
    //         let slot = sk.findSlot(slotName);           
    //         //获取挂件
    //         let att = slot.attachment;
    //         //创建region
            
    //         let skeletonTexture = new sp.SkeletonTexture();
    //         skeletonTexture.setRealTexture(texture)
    //         let page = new sp.spine.TextureAtlasPage()
    //         page.name = texture.name
    //         page.uWrap = sp.spine.TextureWrap.ClampToEdge
    //         page.vWrap = sp.spine.TextureWrap.ClampToEdge
    //         page.texture = skeletonTexture
    //         page.texture.setWraps(page.uWrap, page.vWrap)
    //         page.width = texture.width
    //         page.height = texture.height
            
    //         let region = new sp.spine.TextureAtlasRegion()
    //         region.page = page
    //         region.width = texture.width
    //         region.height = texture.height
    //         region.originalWidth = texture.width
    //         region.originalHeight = texture.height
            
    //         region.rotate = false
    //         region.u = 0
    //         region.v = 0
    //         region.u2 = 1
    //         region.v2 = 1
    //         region.texture = skeletonTexture
    //         //替换region
    //         att.region = region
    //         att.setRegion(region)
    //         att.updateOffset();
        
    // }


    /**
     *  UpdateField_Coin int64 = 1 << iota
        UpdateField_SafeBoxCoin
        UpdateField_VIP
        UpdateField_CoinPayTotal
        UpdateField_TotalConvertibleFlow
        UpdateField_Ticket
        UpdateField_Grade
        UpdateField_Diamond
     */
    export const UpdateField_Coin: number = 1 << 0;
    export const UpdateField_SafeBoxCoin: number = 1 << 1;
    export const UpdateField_VIP: number = 1 << 2;
    export const UpdateField_CoinPayTotal: number = 1 << 3;
    export const UpdateField_TotalConvertibleFlow: number = 1 << 4;
    export const UpdateField_Ticket: number = 1 << 5;
    export const UpdateField_Grade: number = 1 << 6;
    export const UpdateField_Diamond: number = 1 << 7;
    export const UpdateField_VCoin: number = 1 << 8;
}
