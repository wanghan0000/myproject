
const win = window as any;

export let languages:any = {
    fishhappy:{
        
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