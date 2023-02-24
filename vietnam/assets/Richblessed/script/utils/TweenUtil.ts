/*
 * @Description: 
 * @Author: Super_Javan
 * @Date: 2022-12-02 15:07:23
 * @LastEditTime: 2022-12-17 16:49:38
 * @LastEditors: super_javan 296652579@qq.com
 */
import { _decorator, Component, Node, Prefab, instantiate, Label, EventHandler, Button, UITransform, size, Size, Sprite, SpriteAtlas, Vec3, tween } from 'cc';
 export default class TweenUtil {

    /**
     * 水平翻转（卡片翻转）
     * @param node 节点
     * @param duration 总时长
     * @param onComplete 完成回调
     */
    public static flip(node: Node, duration: number,onComplete?: Function): Promise<void> {
        return new Promise<void>(res => {
            const _tween = tween,
                time = duration / 2,
                scaleX = node.scale,
                skewY = scaleX.x > 0 ? 20 : -20;

            // _tween(node)
            //     .parallel(
            //         _tween().to(time, { scaleX: 0 }, { easing: 'quadIn' }),
            //         _tween().to(time, { skewY: -skewY }, { easing: 'quadOut' }),
            //     )
            //     .call(() => {
            //         onMiddle && onMiddle();
            //     })
            //     .parallel(
            //         _tween().to(time, { scaleX: -scaleX }, { easing: 'quadOut' }),
            //         _tween().to(time, { skewY: 0 }, { easing: 'quadIn' }),
            //     )
            //     .call(() => {
            //         onComplete && onComplete();
            //         res();
            //     })
            //     .start();
            tween(node)
                .to(time, {scale: new Vec3(0, 1, 1)},{easing: 'quadIn'})
                .call(() => {})
                .delay(time)
                .to(time, {scale: new Vec3(-scaleX.x, 1, 1)}, {easing: 'quadOut'})
                .call(() => { 
                    node.setScale(new Vec3(1, 1, 1));
                    onComplete && onComplete();
                    res();
                 })
                .start()
        });
    }

}
