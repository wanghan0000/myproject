import { _decorator, Component, Node, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;



import * as i18n from 'db://i18n/LanguageData';
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import { ResMgr } from '../UIFrame/ResMgr';

export class I18nMgr {
    private static instance:I18nMgr = null;

    public static getInstance():I18nMgr{
        if(this.instance == null){
            this.instance = new I18nMgr(); 
        }
        return this.instance;
    }

    //获取当前的语言 返回 zh en kh
    //默认为中文
    public getCurLngKey():string{
        return i18n._language;
    }

    public getStringByKey(keyStr:string):string{
       return i18n.t(keyStr) as string;
       //return keyStr;
    }

    ///获取格式化的字符串
    public getFormatStringByKey(keyStr:string,...params:any):string{
        let str = i18n.t(keyStr) as string;
        //let str = keyStr
        return Utils.stringFormat(str,...params);
    }

    //从道具表的多语言中获取多语言字符串
    public getStringFromItemConfig(itemId:number,columnName:string):string{
        let keyStr = `DBGameItem.item_${itemId}_${columnName}`;
        return i18n.t(keyStr) as string;
    }

    //从DBGameIntroduction 的配置文件中获取多语言的字符串
    public getStringFromIntroductionConfig(itemId:number,columnName:string):string{
        let keyStr = `DBGameIntroduction.Introduction_${itemId}_${columnName}`;
        return i18n.t(keyStr) as string;
    }
    //动态获取多语言中的内容
    public  getTienlenSpriteFrameByLanKey(sfName:string):SpriteFrame{
        let spriteAlatsPath = `Tienlen/texture-${this.getCurLngKey()}/${this.getCurLngKey()}_tienlen`;
        let key = `${this.getCurLngKey()}_${sfName}`;
        return ResMgr.getInstance().getSpriteAtlasByPath(spriteAlatsPath).getSpriteFrame(key);
    }
}

