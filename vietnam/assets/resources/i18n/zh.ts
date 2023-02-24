
const win = window as any;

export let languages:any = {
    "main":{
        jiazaizhongtxt:"加载中...{0}/100",
    }
};

if (!win.languages) {
    win.languages = {};
 }

 if(win.languages.zh){
    for(let item in languages){
        win.languages.zh[item] = languages[item];
    }
 }else{
 
    win.languages.zh = languages;
 }