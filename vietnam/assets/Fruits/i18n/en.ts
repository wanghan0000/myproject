
const win = window as any;

export let languages:any = {
    fruits:{
        enter:"admission",
        bet:"Low score",
        goldCoinShortage: 'Gold coin shortage',
        roomclosed:'Room closed',
        serverMaintenance:'Server maintenance',
        forbidBack: 'Can\'t leave the room'
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
 
    win.languages.en = languages;
 }