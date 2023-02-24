/*
 * @Author: super_javan 296652579@qq.com
 * @Date: 2022-12-08 10:32:50
 * @LastEditors: super_javan 296652579@qq.com
 * @LastEditTime: 2022-12-30 14:10:46
 * @FilePath: \vietnam\assets\Richblessed\script\jackGame\JackGameConfig.ts
 * @Description: 定义男孩女孩对应的图片名称
 */
export default class JackGameConfig{
    static _iconMapping: { [key: number]: string; } = {
        0x00: "goldenBoy",
        0x01: "goldenGirl",
        0x02: "blueBoy",
        0x03: "blueGirl",
    };

    //0 金孩 1 蓝孩 2 绿孩 3 紫孩
    static _spineMapping: { [key: number]: [string,string]; } = {
        0x00: ['hongwa_1','hongwa_2'],
        0x01: ['lanwa_1','lanwa_2'],
        0x02: ['lvwa_1','lvwa_2'],
        0x03: ['ziwa_1','ziwa_2'],
    };

}