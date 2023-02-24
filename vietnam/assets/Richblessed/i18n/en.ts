/*
 * @Author: super_javan 296652579@qq.com
 * @Date: 2023-01-09 12:00:46
 * @LastEditors: super_javan 296652579@qq.com
 * @LastEditTime: 2023-01-13 19:05:19
 * @FilePath: \vietnam\assets\Richblessed\i18n\en.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const win = window as any;

export let languages:any = {
    richblessed:{
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