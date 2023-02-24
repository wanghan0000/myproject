
import { Sprite,Texture2D,sys} from "cc";
import {MD5} from "../General/MD5";



export class Common  {
    private static KEY_SIGN:string = "57f252c60b5b546b2f00f4283cf1ef03";
    private static IOS_API:string = "";
    public static LoadSpriteFromBase64(sprite:Sprite,dataBase64:string):void{
        //这里接口变了，还不知道咋整？
        // let imgData = "data:image/png;base64,"+dataBase64;
        // let img = new Image();
        // img.onload = function() {
        //     let texture = new Texture2D();
        //     texture.image = img;
        //     texture.initWithElement(image);
        //     texture.handleLoadedTexture();
        //     sprite.spriteFrame = new cc.SpriteFrame(texture);
        // };
        // img.src = imgData;
    }
    public static GenerateSign(tokenAuthen:string):string{
        var text = ">>>>>>>>>>BEGIN_MD5_" + tokenAuthen + "_" + this.KEY_SIGN + "_END_MD5<<<<<<<<<<<<";
        //return MD5(text);
        return MD5.MD5(text);
    }

    public static createElementHtml(urlstr:string):any{
        var obj:any = {};
        var url1 = urlstr.split(':');
        obj.protocol = url1[0]+":";
        obj.host = url1[1].slice(2,url1[1].length);
        obj.href = urlstr;
        var url2 = obj.host.split('/');
        obj.host = url2[0];
        return obj;
    }

    public static copy(text:string){
        try
        {
            if (sys.os == sys.OS.ANDROID) {
                jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "JavaCopy", "(Ljava/lang/String;)V", text);
            }
            else if (sys.os == sys.OS.IOS) {
                this.IOS_API = "AppController";
                jsb.reflection.callStaticMethod(this.IOS_API, "JavaCopy:", text);
            }
            else
            {
                const el = document.createElement('textarea');
                el.value = text;
                document.body.appendChild(el);
                el.select();
                document.execCommand('copy');
                document.body.removeChild(el);
            }
        }
        catch(message){

        }   
    }
    public static getRandomInt(min:number, max:number):number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }
    public static randomNumber(min:number, max:number):number {
        return Math.random() * (max - min) + min;
    }
    public static Shuffle(ids:string[]):string[]
    {
        var ints = [];
        for (var i = ids.length - 1; i >= 0; i--)
        {
            var index = Math.floor(Math.random() * ids.length); 
            ints.push(ids[index]);

            ids.splice(index,1);
        }
        ids = ids.concat(ints);
        return ids;
    }
    
}

