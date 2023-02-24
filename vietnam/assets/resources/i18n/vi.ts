
const win = window as any;

export const languages:any = {
    "main":{
        jiazaizhongtxt:"Đang tải...{0}/100",
    }
};

if (!win.languages) {
    win.languages = {};
 }

 if(win.languages.vi){
    for(let item in languages){
        win.languages.vi[item] = languages[item];
    }
 }else{
 
    win.languages.vi = languages;
 }
