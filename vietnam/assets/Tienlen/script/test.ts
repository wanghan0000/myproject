import { _decorator, Component, Node, Prefab, director, instantiate, SpriteFrame, Label, BitmapFont, find, game, Game, macro, Button, Layout, UITransform, Widget, log, RichText, SpriteAtlas, approx, Sprite, ScrollView, Event, input, Input, SkeletalAnimation, Animation, Vec3, v3, sp, tween, view, ResolutionPolicy, screen, Size, sys, assetManager } from 'cc';
import AutoRegisterNet from './Protocol';
import { Card } from './common/component/Card';
import OpcodeTypeHelper from './common/helper/OpcodeTypeHelper';
import ResourceHelper from './common/helper/ResourceHelper';
import TienlenDefine from './TienlenDefine';
import { TienlenTips } from './view/TienlenTips';
import TienlenHelper from './TienlenHelper';
import { TienlenGame } from './view/TienlenGame';
import { TienlenOpCardList } from './view/TienlenOpCardList';
import { TienlenShowCardZone } from './view/TienlenShowCardZone';
import { TienlenPlayer } from './view/TienlenPlayer';
import { TienlenDispatchCard } from './view/TienlenDispatchCard';
import { WaitProgress } from './common/component/WaitProgress';
import { TienlenClock } from './view/TienlenClock';
import { BillGoldAnim } from './view/BillGoldAnim';
import { TaskFactory } from './common/async/TaskFactory';
import { SpineEffect } from './view/SpineEffect';
import ObjectWait from './common/async/ObjectWait';
import CardHelper from './common/helper/CardHelper';
import { ListCtrl } from './common/component/ListCtrl';
import { ItemRoom } from './view/ItemRoom';
import { gamehall } from '../../ScriptCore/protocol/gamehall';
import { ResMgr } from '../../ScriptCore/UIFrame/ResMgr';
import { Utils } from '../../ScriptCore/panda/utils/Utils';
import { WndRecommendList } from './friend/WndRecommendList';
import { ItemChatSelf } from './friend/ItemChatSelf';
import { WndSocial } from './friend/WndSocial';
import chat from '../../ScriptCore/protocol/chat.js';
import { ItemChatOther } from './friend/ItemChatOther';
import { ItemEmotion } from './friend/ItemEmotion';
import { WndEmotion } from './friend/WndEmotion';
import friend from '../../ScriptCore/protocol/friend.js';
import { PageChat } from './friend/PageChat';
import { PageFriend } from './friend/PageFriend';
import { SceneEffect } from './view/SceneEffect';
import { MatchSelect } from './match/MatchSelect';
import { MatchPromotion } from './match/MatchPromotion';
import tournament from './protocol/tournament.js';
import { MatchWaiting } from './match/MatchWaiting';
import { MatchRank } from './match/MatchRank';
import { TienlenRuntime } from './TienlenRuntime';
const { ccclass, property } = _decorator;

/**
 * @zh
 * Async Delegate 用于支持异步回调的代理，你可以新建一个异步代理，并注册异步回调，等到对应的时机触发代理事件。
 *
 * @en
 * Async Delegate is a delegate that supports asynchronous callbacks.
 * You can create a new AsyncDelegate, register the asynchronous callback, and wait until the corresponding time to dispatch the event.
 *
 * @example
 * ```ts
 * const ad = new AsyncDelegate();
 * ad.add(() => {
 *     return new Promise((resolve, reject) => {
 *        setTimeout(() => {
 *            console.log('hello world');
 *            resolve();
 *        }, 1000);
 *     })
 * });
 * await ad.dispatch();
 * ```
 */
export class AsyncDelegate<T extends (...args: any) => (Promise<void> | void) = () => (Promise<void> | void)> {
    private _delegates: T[] = [];

    /**
     * @en
     * Add an async callback or sync callback.
     *
     * @zh
     * 添加一个异步回调或同步回调。
     *
     * @param callback
     * @en The callback to add, and will be invoked when this delegate is dispatching.
     * @zh 要添加的回调，并将在该委托调度时被调用。
     */
    public add(callback: T) {
        if (!this._delegates.includes(callback)) {
            this._delegates.push(callback);
        }
    }

    /**
     * @zh
     * 查询是否已注册某个回调。
     * @en
     * Queries if a callback has been registered.
     *
     * @param callback @en The callback to query. @zh 要查询的回调函数。
     * @returns @en Whether the callback has been added. @zh 是否已经添加了回调。
     */
    public hasListener(callback: T) {
        return this._delegates.includes(callback);
    }

    /**
     * @en
     * Remove the specific callback of this delegate.
     *
     * @zh
     * 移除此代理中某个具体的回调。
     *
     * @param callback @en The callback to remove. @zh 要移除的某个回调。
     */
    public remove(callback: T) {
        // array.fastRemove(this._delegates, callback);
    }

    /**
     * @en
     * Dispatching the delegate event. This function will trigger all previously registered callbacks and does not guarantee execution order.
     *
     * @zh
     * 派发代理事件。此函数会触发所有之前注册的回调，并且不保证执行顺序。
     *
     * @param args @en The parameters to be transferred to callback. @zh 传递给回调函数的参数。
     * @returns @en The promise awaiting all async callback resolved. @zh 等待所有异步回调结束的 Promise 对象。
     */
    public dispatch(...args: Parameters<T>) {
        let list = this._delegates.map((func) => func(...arguments));
        // list = list.filter(Boolean);
        return Promise.all(list);
    }
}



@ccclass('test')
export class test extends Component {
    @property(SpriteAtlas)
    public atlas: SpriteAtlas;
    @property(Sprite)
    public sp: Sprite;
    @property(Node)
    public cardNode: Node;
    @property(sp.Skeleton)
    public skeleton: sp.Skeleton;
    @property(TienlenClock)
    public clock: TienlenClock;
    private _scrollView: ScrollView;
    private _items: ItemChatSelf[];

    async onLoad() {
        console.log("onloaddddddddddddddddddd")
        // const ad = new AsyncDelegate();
        // ad.add(() => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             console.log('hello world 111');
        //             resolve();
        //         }, 1000);
        //     })
        // })
        // ad.add(() => {
        //     return new Promise((resolve, reject) => {
        //         setTimeout(() => {
        //             console.log('hello world 222');
        //             resolve();
        //         }, 2000);
        //     })
        // })
        // ad.add(() => {
        //     console.log("hello world 3333")
        // })
        // TienlenHelper.log("test async 000")
        // await ad.dispatch();
        // TienlenHelper.log("test async 111")
    }

    click() {
        console.log('clickkkkkkkkkkkkkkkkkkk')
    }

    async hideGame(game: TienlenGame) {
        await game.hideEffect();
        game.node.destroy();
    }

    async showPromotion() {
        let data = new tournament.tournament.SCPromotionInfo();
        data.RetCode = 2;
        data.MatchPromotion = [4, 3, 2, 1];
        data.Round = 1;
        data.RankId = 1;
        TienlenHelper.showMatchPromotion(data);
    }

    async start() {
        console.log('startttttttttttttttt')
        // view.setOrientation(macro.ORIENTATION_LANDSCAPE);
        screen.windowSize = new Size(1280, 720);
        // view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
        view.setDesignResolutionSize(1280, 720, ResolutionPolicy.FIXED_HEIGHT);

        // let list = [0, 1, 14, 27, 13, 26, 2, 3, 15, 16];
        // CardHelper.sortShowCard(list, false);
        // console.log(list)
        // let owncards = [4, 17, 5, 18, 6, 19, 32, 7, 20];
        // let otherCards = [0, 13];
        // let [flag, tip] = CardHelper.getCardTip(owncards, otherCards, true);

        // let owncards = [40, 2, 28, 29, 6, 45, 33, 46, 34, 22, 23, 36, 11];
        // let otherCards = [0, 13, 1, 27];
        // let [flag, tip] = CardHelper.getCardTip(owncards, otherCards, true);

        // let flag2 = CardHelper.checkLastCards([1, 14, 27, 2, 41, 50], [], true, true);
        // console.log("123")

        // ResourceHelper.loadPfbListInAB(TienlenDefine.ABName, ["texture-en/en_tienlen"], (f, t, item) => {
        //     TienlenHelper.log("res load progress: ", f, t, f / t);
        // }, async (e, data) => {
        //     // let res1 = assetManager.cacheManager.getCache("Tienlen/prefab/Game");
        //     // TienlenHelper.log("res1 ", res1);
        //     TienlenHelper.log("res load complete");
        // });

        // ResourceHelper.loadResListInAB(TienlenDefine.ABName, [
        //     ["prefab/Game"],
        //     ["prefab/Select"],
        //     ["texture-en/en_tienlen", "spriteatlas"]
        // ], (f, t, i) => {
        //     TienlenHelper.log("loadResListInAB progress ", f, t);
        // }, () => {
        //     TienlenHelper.log("loadResListInAB complete ");
        //     ResourceHelper.loadResInAB(TienlenDefine.ABName, "texture-en/en_tienlen", SpriteAtlas, (f, t, i) => {
        //         TienlenHelper.log("load atlas ", f, t);
        //     })
        // });




        // let promotion = this.getComponentInChildren(MatchPromotion);
        // let str = '{"Record":{"1":2," - 1":1},"MatchPromotion":[16,12,8,4,1],"RetCode":1,"Round":3,"RoundCoin":100,"RankId":7,"MatchId":24,"RankAward": { "ItemInfo": [{ "ItemId": 10001, "ItemNum": 10 }, { "ItemId": 20001, "ItemNum": 10 }, { "ItemId": 20002, "ItemNum": 10 }] }} ';
        // let data = JSON.parse(str);
        // promotion.showAwardUI(data);

        // let rank = this.getComponentInChildren(MatchRank);
        // this.node.active = false;
        // rank.show(1, 0);
        // // for (let i = 163; i > 0; --i) {
        // //     await TienlenHelper.wait(3);
        // //     rank.show(i, i + 1);
        // // }
        // await TienlenHelper.wait(3);
        // rank.show(4, 1);

        // await TienlenHelper.wait(3);
        // rank.show(4, 1);
        // await TienlenHelper.wait(3);
        // rank.show(7, 4);
        // await TienlenHelper.wait(5);
        // rank.show(27, 7);
        // let waiting = this.getComponentInChildren(MatchWaiting);
        // waiting.showEffect();

        // let game = this.getComponentInChildren(TienlenGame);
        // await TienlenHelper.wait(2);
        // this.hideGame(game);
        // this.showPromotion();

        // let node = this.node.getChildByName("bisaipaizhuo")
        // let spine = node.getComponent(sp.Skeleton)
        // TienlenHelper.log("play ")
        // spine.setAnimation(0, "jiesuan", false);
        // spine.setCompleteListener(() => {
        //     if (spine.animation == "jiesuan") {
        //         // spine.animation = "daiji";
        //         TienlenHelper.log(" complete")
        //     }
        // })

        // let promotion = this.getComponentInChildren(MatchPromotion);
        // promotion.showModel(2000001);
        // let list = [8, 7, 6, 5, 4, 3, 2, 1];
        // promotion.updateRound(list, 1, 2);
        // await TienlenHelper.wait(3);
        // promotion.updateRound(list, 1, 1);





        // await TienlenHelper.wait(8);
        // promotion.updateRound([8, 7, 6, 5, 4, 3, 2, 1], 1, 1);
        // await TienlenHelper.wait(8);
        // promotion.updateRound([8, 7, 6, 5, 4, 3, 2, 1], 1, 2);
        // this.play13Anim();
        // spine.animation = "daiding";
        // await TienlenHelper.wait(3);
        // spine.animation = "daidingloop";
        // await TienlenHelper.wait(3);
        // spine.animation = "jinji";
        // await TienlenHelper.wait(3);
        // spine.animation = "jinjiloop";
        // await TienlenHelper.wait(3);
        // spine.animation = "taotai";
        // await TienlenHelper.wait(3);
        // spine.animation = "taotailoop";

        // spine.animation = "1-9";
        // await TienlenHelper.wait(3);
        // spine.animation = "10";
        // await TienlenHelper.wait(3);
        // spine.animation = "11";
        // await TienlenHelper.wait(3);
        // spine.animation = "12";
        // await TienlenHelper.wait(3);
        // spine.animation = "13";
        // await TienlenHelper.wait(3);
        // spine.animation = "jieshu";



        // let select = this.getComponentInChildren(MatchSelect);
        // // select.onShow();
        // await TienlenHelper.wait(3);
        // select.playEnterEnrollAnim(null);

        // let spine = this.getComponentInChildren(sp.Skeleton);
        // spine.scheduleOnce(() => {
        //     TienlenHelper.log("5秒之后执行");
        // }, 5)
        // TienlenHelper.log("开始测试");
        // await TienlenHelper.wait(1);
        // spine.node.active = false;
        // await TienlenHelper.wait(3);
        // spine.node.active = true;
        // tween(spine.node).to(5, { position: v3(1024, 0) }).start();
        // await TienlenHelper.wait(1);
        // spine.node.active = false;
        // await TienlenHelper.wait(4);
        // spine.node.active = true;




        // let game = this.node.getChildByName("Game");
        // let target = game.getChildByName("desk").getChildByName('btnPass')
        // this.scheduleOnce(() => {
        //     game.destroy();
        // }, 4.9);
        // TienlenHelper.log("test game activeinhi ", game.activeInHierarchy)
        // let flag = await TienlenHelper.nodeWait(5, target);
        // TienlenHelper.log("test wait flag ", flag);
        // if (flag) {
        //     TienlenHelper.log("wait target name ", target.name)
        // } else {
        //     TienlenHelper.log("wait target is null ")
        //     console.log(target)
        //     console.log(game)
        // }

        // this.testAsync2();

        // let list = [13, 26, 39, 44, 34];
        // let type = CardHelper.getTienlenCardType(list, false);
        // console.log('');
        // let anim: Animation = null;
        // anim?.play('');


        // let page = this.getComponentInChildren(PageFriend);
        // page.listFriend.node.active = true;
        // for (let index = 0; index < 10; index++) {
        //     let item = instantiate(page.pfbFriendItem);
        //     page.listFriend.content.addChild(item);
        // }


        // let effect = this.getComponentInChildren(SceneEffect);
        // input.on(Input.EventType.MOUSE_UP, () => {
        //     console.log("mouseuppppppppppppppppppppppp")
        //     effect.playScare();
        // }, this)

        // this.clock.show(15);
        // await TienlenHelper.wait(3);
        // this.clock.hide();
        // this.clock.show(15);


        // let list = this.getComponentsInChildren(TienlenPlayer);
        // let billList = this.getComponentsInChildren(BillGoldAnim);
        // for (let index = 0; index < 10; index++) {
        //     // billList[1].show(list[0]);
        //     billList[2].show(list[0].coinNode);
        //     // billList[3].show(list[0]);
        //     await TienlenHelper.wait(5);
        // }



        // this.skeleton.setCompleteListener(() => {
        //     console.log('completeeeeeeeeeeeeeeeeeeeeee')
        // })
        // this.skeleton.setEndListener(() => {
        //     console.log('enddddddddddddddddddd')
        // });
        // this.skeleton.setAnimation(0, "tiao", true);

        // let player = this.getComponentInChildren(TienlenPlayer);
        // for (let index = 0; index < 10; index++) {
        //     SpineEffect.playBomb(this.cardNode, v3(0, 0), this.node);
        //     await TienlenHelper.wait(3);
        // }



        // let player = this.getComponentInChildren(TienlenPlayer);
        // console.log('test sp h: ', player.spPropBg.getComponent(UITransform).height);

        // let list = ['chipaidaiji', 'chipaisikao', 'chupai'];
        // let index = 0;
        // let anims = this.getComponentsInChildren(SkeletalAnimation);
        // anims[0].play('chipaisikao');
        // anims[1].play('chipaisikao');
        // input.on(Input.EventType.TOUCH_START, () => {
        //     anims[0].getState('chupai').speed = 2;
        //     anims[1].getState('chupai').speed = 2;
        //     anims[0].crossFade('chupai');
        //     anims[1].crossFade('chupai');
        //     anims[0].once(Animation.EventType.LASTFRAME, async () => {
        //         anims[0].crossFade('chipaisikao');
        //         // anims[0].once(Animation.EventType.LASTFRAME, async () => {
        //         //     anims[0].crossFade('chipaidaiji');
        //         // })
        //         await TienlenHelper.wait(0.5);
        //         anims[0].crossFade('chipaidaiji');
        //     }, this);
        //     anims[1].once(Animation.EventType.LASTFRAME, async () => {
        //         anims[1].crossFade('chipaisikao');
        //         // anims[1].once(Animation.EventType.LASTFRAME, async () => {
        //         //     anims[1].crossFade('chipaidaiji');
        //         // })
        //         await TienlenHelper.wait(0.5);
        //         anims[1].crossFade('chipaidaiji');
        //     }, this);
        //     // index = (index + 1) % list.length;
        // }, this)


        // let player = this.getComponentInChildren(TienlenPlayer);
        // player.labelUP.node.setSiblingIndex(1);

        // input.on(Input.EventType.MOUSE_UP, () => {
        //     console.log('2222222222')
        //     let anims = this.getComponentsInChildren(SkeletalAnimation);
        //     anims[0].play(list[index]);
        //     anims[1].play(list[index]);
        //     index = (index + 1) % list.length;
        // }, this)
        // let male = this.node.getChildByName("male2D").getChildByName("Vleng_male");
        // console.log(male)
        // male.on(Node.EventType.TOUCH_END, () => {
        //     console.log('123')
        // }, this);

        // male.on(Node.EventType.TOUCH_END, () => {
        //     console.log('clickkkkkkkkkkkkkkkkkkkkk')
        // })

        // let richText = this.getComponentInChildren(RichText);
        // richText.imageAtlas = this.atlas;
        // richText.string = "<color=#4B390A/>";

        // let path = `rawRes/emotion/emotion`;
        // let atlas = await ResourceHelper.loadResInAB(TienlenDefine.ABName, path, SpriteAtlas);
        // this.sp.spriteFrame = atlas.getSpriteFrame(`emotion_${0}_01`)
        // console.log('')

        // this.schedule(() => {
        //     console.log('hello');
        // }, 1, macro.REPEAT_FOREVER)

        // setInterval(() => {
        //     console.log("hello")
        // }, 1000);

        // this.scheduleOnce(() => {
        //     console.log('hello')
        // }, 2);

        // let id = setTimeout(() => {
        //     console.log('5s')
        // }, 5000);
        // setTimeout(() => {
        //     console.log('2s,stop 5s')
        //     clearTimeout(id);
        // }, 2000);

        // let cards = [39, 13, 1, 40];
        // let ownCards = [48, 22, 9, 49, 10]
        // CardHelper.sortBigger(ownCards);
        // TienlenHelper.logCards(ownCards);
        // let flag = CardHelper.canCutCards(ownCards, cards, true)
        // console.log(flag)

        // let wnd = this.getComponentInChildren(WndEmotion);
        // wnd.onShow();

        // let wnd = this.getComponentInChildren(WndSocial);
        // wnd.toggleIndex = -1;

        // let layout = this.getComponentInChildren(ItemChatSelf);
        // let log = new chat.chat.ChatLog();
        // log.Content = "我";
        // layout.init(log);
        // await TienlenHelper.wait(2);
        // layout.labelContent.maxWidth = 0;
        // log.Content = "0#0#0#0#0#0#00#0#0#0#0#0#00#0#0#0#0#0#00#0#0#0#0#0#00#0#0#0#0#0#00#0#0#0#0#0#00#0#0#0#0#0#00#0#0#0#0#0#00#0#0#0#0#0#0";
        // layout.init(log);
        // await TienlenHelper.wait(2);
        // layout.labelContent.maxWidth = 0;
        // log.Content = "1";
        // layout.init(log);

        // let otherChat = this.getComponentInChildren(ItemChatOther);
        // log = new chat.chat.ChatLog();
        // log.Content = "#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0#0";
        // otherChat.init(log);
        // layout.add([1]);
        // await TienlenHelper.wait(2);
        // layout.add([1, 2, 3]);
        // await TienlenHelper.wait(2);
        // layout.add([1, 2, 3]);
        // await TienlenHelper.wait(2);
        // layout.add([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,]);

        // let chat = this.getComponentInChildren(ItemChatSelf);
        // chat.init(null);


        // let wnd = this.getComponentInChildren(WndRecommendList);
        // wnd.onShow();
        // await TienlenHelper.wait(3);
        // wnd.onHide();

        // new Node().addComponent(Component).scheduleOnce(() => {
        //     console.log('testtttttttttttttttt')
        // }, 1)

        // let schedule = director.getScheduler();
        // let node = find("Canvas");
        // schedule.schedule(() => {
        //     console.log("定时器执行");
        // }, node, 1, 1); //repeat非0就不会执行

        // this.schedule(() => {
        //     console.log("定时器执行2");
        // }, 1, 5);

        // await TienlenHelper.wait(1);


        // let tips = this.getComponentInChildren(TienlenTips);
        // tips.show('aaaaaaaaaaa ');
        // console.log('aaaaaaaaaaaaa', new Date().toLocaleString())
        // await TienlenHelper.wait(1);
        // tips.show('bbbbbbbb', 6);
        // console.log('bbbbbbbbbbbb', new Date().toLocaleString())

        // let obj = {}
        // console.info(obj != '');

        // let root = find('Canvas');
        // TienlenHelper.showTips('11111', root);
        // await TienlenHelper.wait(0.5);
        // TienlenHelper.showTips('2222', root, 2);
        // TienlenHelper.showTips('33333', root, 3);
        // TienlenHelper.showTips('444', root, 4);

        // let label = this.getComponentInChildren(Label);
        // await TienlenHelper.wait(2);
        // let font = await ResourceHelper.loadResInAB(TienlenDefine.ABName, 'rawRes/font/failAward/font_XH2', BitmapFont);
        // label.useSystemFont = false;
        // label.font = font;
        // console.info(font)

        // let list = this.getComponentInChildren(TienlenOpCardList);
        // list.show([1, 2, 3, 4, 5]);
        // await TienlenHelper.wait(3);
        // list.hide();
        // await TienlenHelper.wait(1);
        // list.show([10, 23, 45, 0, 9, 11, 13, 14]);
        // await TienlenHelper.wait(2);
        // list.show([7, 8, 9]);

        let showlist = this.getComponentInChildren(TienlenShowCardZone);
        // showlist.showCards([1]);
        // await TienlenHelper.wait(3);
        // showlist.showCards([4]);
        // await TienlenHelper.wait(3);
        // showlist.showCards([19, 30]);
        // await TienlenHelper.wait(3);

        let players = this.getComponentsInChildren(TienlenPlayer);

        // await TienlenHelper.wait(2);
        // await showlist.flyOtherCards(players[1], [1]);
        // await showlist.flyOtherCards(players[2], [2, 3]);
        // await showlist.flyOtherCards(players[3], [4, 5, 6]);

        // players[0].showOpCards([7, 2, 3, 4, 1, 6, 5, 8, 11, 9, 12, 13, 10]);
        // await TienlenHelper.wait(2);
        // await showlist.flySelfCards(players[0], [7, 8, 9, 10]);
        // await TienlenHelper.wait(1);
        // await showlist.flySelfCards(players[0], [2, 11, 4, 13]);

        // let dispatch = this.getComponentInChildren(TienlenDispatchCard);
        // players[0].hideOpCards2();
        // let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        // players[0].fillOpCards(list)
        // await TienlenHelper.wait(2);
        // players[0].opCardList.autoLayout = false;
        // await dispatch.play(players, list);
        // await TienlenHelper.wait(3);
        // players[0].opCardList.autoLayout = true;
        // let p1 = players[0].opCardList.node.children[0];
        // p1.active = false;
        // await TienlenHelper.wait(2);
        // let p2 = players[0].opCardList.node.children[5];
        // p2.active = false;
        // await TienlenHelper.wait(2);
        // let p3 = players[0].opCardList.node.children[10];
        // p3.active = false;
        // await TienlenHelper.wait(2);
        // players[0].hideOpCards2();
        // players[0].fillOpCards(list)
        // await TienlenHelper.wait(2);
        // players[0].opCardList.autoLayout = false;
        // await dispatch.play(players, list);

        // players[0].opCardList.flip();
        // await TienlenHelper.wait(2);
        // players[0].opCardList.flip();
        // await TienlenHelper.wait(2);
        // players[0].opCardList.flip();
        // await TienlenHelper.wait(2);
        // players[0].opCardList.flip();

        // let clock = this.getComponentInChildren(TienlenClock);
        // clock.show(15);
        // await TienlenHelper.wait(2);
        // clock.show(10);
        // await TienlenHelper.wait(4);
        // clock.show(3);


        // await this.testAsync();
        // console.info('33333333333')

        // let obj = { b: 2, c: "c" };
        // let dst: any = { a: 1 };
        // dst['o'] = obj;
        // let src = { a: 999, o: { b: 111, c: "abc" } };
        // Object.assign(dst, src);
        // console.log(dst.o === src.o) //true
        // console.log(dst.o === obj) //false
        // console.info(dst)

        // let eft = this.getComponentInChildren(SpineEffect);
        // console.info('1111111111111')
        // await eft.play();
        // console.info('22222222222')

        // TienlenHelper.playBomb(find('Canvas'));
        // await TienlenHelper.wait(3);
        // TienlenHelper.playBomb(find('Canvas'));
        // await TienlenHelper.wait(3);
        // TienlenHelper.playBomb(find('Canvas'));

        // TienlenHelper.playMusic(TienlenDefine.MusicHall);
        // await TienlenHelper.wait(5);
        // console.info('111111111111111')
        // TienlenHelper.playMusic(TienlenDefine.MusicGame);
        // await TienlenHelper.wait(5);
        // TienlenHelper.playMusic(TienlenDefine.MusicWin, false);
        // await TienlenHelper.wait(5);
        // TienlenHelper.playMusic(TienlenDefine.MusicLose, false);
        // await TienlenHelper.wait(5);
        // TienlenHelper.playSound(TienlenDefine.SoundBomb);
        // await TienlenHelper.wait(2);
        // TienlenHelper.playSound(TienlenDefine.SoundClick);

        // game.on(Game.EVENT_SHOW, () => {
        //     TienlenHelper.log('game show');
        //     this.scheduleOnce(() => {
        //         TienlenHelper.log('game show time do')
        //     }, 1);
        // }, this)
        // game.on(Game.EVENT_HIDE, () => {
        //     TienlenHelper.log('game hide');
        //     this.scheduleOnce(() => {
        //         TienlenHelper.log('game hide time do')
        //     }, 1);
        // }, this)

        // await TienlenHelper.wait(2);
        // TienlenHelper.playCardSound([13, 40, 2, 3, 4]);

        // this.f1();
        // this.f3();
        // this.f2();
        // await TienlenHelper.wait(2);
        // console.log('start notify')
        // ObjectWait.instance.notify(test);

        //测试压牌逻辑
        // let a = [12];
        // let b = [12, 25];
        // let c = [3];
        // let own = [0, 1, 2, 13, 14, 15];
        // console.log(CardHelper.canCutCards(own, a));
        // console.log(CardHelper.canCutCards(own, b));
        // console.log(CardHelper.canCutCards(own, c));
        // console.log(CardHelper.canCutCards([0, 1, 2, 13, 14, 15, 3, 16], b));
        // console.log(CardHelper.canCutCards([0, 1, 2, 13, 14, 15, 3, 16], c));
        // console.log(CardHelper.canCutCards([0, 13, 26, 39], a));
        // console.log(CardHelper.canCutCards([0, 13, 26, 39], b));
        // console.log(CardHelper.canCutCards([0, 13, 26, 39], c));
        // console.log(CardHelper.canCutCards([0, 13, 26, 39], [0, 1, 2, 13, 14, 15]));
        // console.log(CardHelper.canCutCards([0, 1, 2, 3, 13, 14, 15, 16], [0, 1, 2, 13, 14, 15]));
        // console.log(CardHelper.canCutCards([0, 1, 2, 3, 13, 14, 15, 16], [4, 5, 17, 18]));
        // let flag = CardHelper.haveCutStraitPair2([13, 40, 2, 15, 31, 32, 7, 46, 24, 37, 50, 38, 51], 3);
        // flag = CardHelper.haveCutStraitPair2([13, 40, 2, 15, 31, 32, 7, 46, 24, 37, 50, 38, 51], 2);
        // let flag = CardHelper.haveCutStraitThree(CardHelper.sortBigger([0, 1, 13, 14, 26, 27]), -1, 2)
        // flag = CardHelper.haveCutStraitThree(CardHelper.sortBigger([0, 1, 2, 13, 14, 15, 26, 27, 28]), -1, 3);
        // flag = CardHelper.canCutCards([1, 14, 27, 28, 29], [0, 13, 26, 12], false);
        // flag = CardHelper.canCutCards([1, 14, 27, 28, 41], [0, 13, 26, 12, 25], false);
        // console.log(flag)
        // let flag = CardHelper.canCutCards([0, 14, 15], [26, 1, 28]);
        // flag = CardHelper.canCutCards([39, 14, 41, 2, 3], [26, 1, 28]);
        // let flag = CardHelper.canCutCards([4, 5, 6, 17, 18, 19, 30], [12]);
        // let flag2 = CardHelper.canCutCards([13, 14, 15, 16, 17], [0, 1, 2, 3, 4])
        //测试理牌逻辑
        // let list = [28, 3, 4, 6, 46, 21, 30, 43, 37, 50, 44, 32, 36]
        // TienlenHelper.log('理牌前');
        // TienlenHelper.logCards(list);
        // CardHelper.sortCards(list);
        // TienlenHelper.log('理牌后');
        // TienlenHelper.logCards(list);

        // let list = this.getComponentInChildren(ListCtrl);
        // let data: any[] = [];
        // for (let i = 0; i < 30; ++i) {
        //     let item: any = {};
        //     item.BaseCoin = Math.floor(Math.random() * 10000);
        //     item.GameId = Math.random() < 0.5 ? 207 : 208;
        //     item.MaxPlayer = Math.random() < 0.5 ? 4 : 2;
        //     item.CurrNum = Math.floor(Math.random() * item.MaxPlayer);
        //     data.push(item);
        // }
        // list.itemRenderFunction = (t, c, d) => {
        //     t.getComponent(ItemRoom).data = data[d];
        // }
        // list.dataList = data;

        // let maskPfb = await ResMgr.getInstance().getPrefabByPath("Lobby/Prefabs/UIMask");
        // let mask = instantiate(maskPfb);
    }

    testAsync2() {
        let node = new Node();
        node.addComponent(Component);
        this.node.addChild(node);
        node.getComponent(Component).scheduleOnce(() => {
            TienlenHelper.log("test async once ")
        }, 5);
        node.getComponent(Component).schedule(() => {
            TienlenHelper.log("test async do")
        }, 1, macro.REPEAT_FOREVER);
        // tween(node).by(10, { position: v3(1000, 0) }, {
        //     onUpdate: (t, r) => {
        //         TienlenHelper.log("test async tween ")
        //     }
        // }).start();
        // this.node.getComponent(Component).scheduleOnce(() => {
        //     // node.active = false;
        //     // node.removeFromParent();
        //     node.destroy();
        // }, 3);
    }

    async f1() {
        console.log('f1 start')
        await ObjectWait.instance.wait(test);
        console.log('f1 end')
    }

    async f2() {
        console.log('f2 start')
        await ObjectWait.instance.wait(test);
        console.log('f2 end')
    }

    async f3() {
        console.log('f3 start')
        await ObjectWait.instance.wait(test);
        console.log('f3 end')
    }

    flag: boolean = true;
    update() {
        // TienlenHelper.log('game update')
        // if (this._scrollView.content.position.y > 365 && this.flag) {
        //     console.log('11111111111')
        //     this.flag = false;
        //     let item = this._items.shift();
        //     item.node.removeFromParent();
        //     this._scrollView.content.addChild(item.node);
        // }
    }

    doUpdate() {
        // TienlenHelper.log('game do update')
    }

    _update() {
        TienlenHelper.log('game _update')
    }

    async testAsync() {
        let task = TaskFactory.create<boolean>();
        this.scheduleOnce(() => {
            console.info('before setresult')
            task.setResult(true)
            console.info('after setresult')
        }, 1);
        console.info('1111111111111')
        await task.promise;
        console.info('22222222')
    }

    async testCardPrefab() {
        let prefab = await ResourceHelper.loadResInAB<Prefab>(TienlenDefine.ABName, "prefab/Card", Prefab);
        let card = instantiate(prefab!).getComponent(Card);
        this.node.addChild(card!.node);
        let id = 0;
        this.schedule(() => {
            card!.cardId = ++id;
        }, 1, 100);
    }


}

