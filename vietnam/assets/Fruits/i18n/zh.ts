
const win = window as any;

export let languages:any = {
    fruits:{
        enter:"限制",
        bet:"底注",
        goldCoinShortage: '金币不足',
        roomclosed:'房间已关闭',
        serverMaintenance:'服务器在维护',
        forbidBack: '不能离开房间'
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