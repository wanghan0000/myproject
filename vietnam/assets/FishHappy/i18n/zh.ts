
const win = window as any;

export let languages:any = {
    fishhappy:{
        quedingTxt:"确定",
        quxiaoTxt:"取消",
        quedinglikaiTxt:"客官，确定要离开吗",

        xianfengyongzhe:"先锋勇者",
        hanbingshouwei:"寒冰守卫",
        lieyanqishi:"烈焰骑士",
        anyinglieshou:"暗影猎手",
        jihanzhiren:"极寒之刃",
        shikonghuanying:"时空幻影",
        youliangbaojun:"幽灵暴君",
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