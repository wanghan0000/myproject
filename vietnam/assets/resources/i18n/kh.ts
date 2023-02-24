
const win = window as any;

export const languages:any = {
   "main":{
      jiazaizhongtxt:"កំពុងទាញយក...{0}/100",
  }
};

if (!win.languages) {
    win.languages = {};
 }

 if(win.languages.kh){
    for(let item in languages){
        win.languages.kh[item] = languages[item];
    }
 }else{
 
    win.languages.kh = languages;
 }
