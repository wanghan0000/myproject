/*
 * @Author: super_javan 296652579@qq.com
 * @Date: 2023-01-08 18:34:41
 * @LastEditors: super_javan 296652579@qq.com
 * @LastEditTime: 2023-01-13 19:06:25
 * @FilePath: \vietnam\assets\Richblessed\i18n\zh.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const win = window as any;

export let languages:any = {
    richblessed:{
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