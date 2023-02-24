
const win = window as any;

export const languages:any = {
    "main":{
        jiazaizhongtxt:"Loading...{0}/100",
    }
};

if (!win.languages) {
    win.languages = {};
 }

 if(win.languages.en){
    for(let item in languages){
        win.languages.en[item] = languages[item];
    }
 }else{
 
    win.languages.kh = languages;
 }


 /**
  * 该目录下的多语言主要用于热更新模块
  */