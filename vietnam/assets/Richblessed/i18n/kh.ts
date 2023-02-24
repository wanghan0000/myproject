
const win = window as any;

export let languages:any = {
    richblessed:{
        enter:"ប្រាកដ",
        bet:"បោះបង់",
        goldCoinShortage: 'Gold coin shortage',
        roomclosed:'Room closed',
        serverMaintenance:'Server maintenance',
        forbidBack: 'Can\'t leave the room'
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