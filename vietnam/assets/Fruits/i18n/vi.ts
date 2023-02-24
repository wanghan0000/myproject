
const win = window as any;

export let languages:any = {
    fruits:{
        enter:"Hạn chế",
        bet:"Đặt đi.",
        goldCoinShortage: 'Thiếu đồng tiền vàng',
        roomclosed:'Phòng đóng',
        serverMaintenance:'Bảo trì máy chủ',
        forbidBack: 'Không thể rời khỏi phòng'
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