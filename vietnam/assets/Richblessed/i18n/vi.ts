/*
 * @Author: super_javan 296652579@qq.com
 * @Date: 2023-01-08 18:34:41
 * @LastEditors: super_javan 296652579@qq.com
 * @LastEditTime: 2023-01-13 19:06:49
 * @FilePath: \vietnam\assets\Richblessed\i18n\vi.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

const win = window as any;

export let languages:any = {
    richblessed:{
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