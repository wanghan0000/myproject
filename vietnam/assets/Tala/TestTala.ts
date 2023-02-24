import { _decorator, Component, Node, Size, screen, view, ResolutionPolicy } from 'cc';
import { TienlenRuntime } from '../Tienlen/script/TienlenRuntime';
import { WaitProgress } from './script/common/component/WaitProgress';
import CardHelper from './script/common/helper/CardHelper';
import tala from './script/protocol/tala.js';
import TalaHelper from './script/TalaHelper';
import TalaRuntime from './script/TalaRuntime';
import { TalaGame } from './script/view/TalaGame';
const { ccclass, property } = _decorator;

@ccclass('TestTala')
export class TestTala extends Component {
    async start() {
        // view.setOrientation(macro.ORIENTATION_LANDSCAPE);
        let size = screen.windowSize;
        let max = Math.max(size.width, size.height);
        let min = Math.min(size.width, size.height);
        screen.windowSize = new Size(max, min);
        // view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
        view.setDesignResolutionSize(1280, 720, ResolutionPolicy.FIXED_HEIGHT);
        // let roominfo = new tala.tala.SCTaLaRoomInfo();
        // roominfo.State = -1;
        // roominfo.CurOpIdx = -1;
        // TalaRuntime.instance.roomInfo = roominfo;
        // roominfo.MaxPlayerNum = 4;
        // let player = this.makePlayer(10000, 0);
        // roominfo.Players = [player];
        // TalaRuntime.instance.selfPlayerData = player;
        // let game = this.getComponentInChildren(TalaGame);
        // game.onShow(roominfo);
        // await TalaHelper.wait(1);
        // player = this.makePlayer(10001, 3);
        // roominfo.Players.push(player);
        // let index = TalaHelper.PosToIndex(player.Pos, TalaHelper.getBaseSeat(), roominfo.MaxPlayerNum);
        // game.showPlayer(index, player, roominfo);
        // await TalaHelper.wait(1);
        // player = this.makePlayer(10002, 1);
        // roominfo.Players.push(player);
        // index = TalaHelper.PosToIndex(player.Pos, TalaHelper.getBaseSeat(), roominfo.MaxPlayerNum);
        // game.showPlayer(index, player, roominfo);
        // await TalaHelper.wait(1);
        // player = this.makePlayer(10003, 2);
        // roominfo.Players.push(player);
        // index = TalaHelper.PosToIndex(player.Pos, TalaHelper.getBaseSeat(), roominfo.MaxPlayerNum);
        // game.showPlayer(index, player, roominfo);
        // await TalaHelper.wait(2);
        // await game.dispatchCards([0, 1, 2, 3, 4, 5, 6, 7, 8]);
        // await TalaHelper.wait(2);
        //测试发牌单张
        // await game.dispatchCardToPlayer(game.getPlayer(0), 9);
        // await game.dispatchCardToPlayer(game.getPlayer(1), 10);
        // await game.dispatchCardToPlayer(game.getPlayer(2), 11);
        // await game.dispatchCardToPlayer(game.getPlayer(3), 12);
        // await TalaHelper.wait(1);
        //测试出牌
        // game.showShowCardZone();
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(0), 0);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(1), 10);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(2), 11);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(3), 12);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(0), 3);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(1), 13);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(2), 14);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(3), 15);



        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(0), 7);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(1), 16);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(2), 17);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(3), 18);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(0), 5);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(1), 19);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(2), 20);
        // await TalaHelper.wait(1);
        // game.playCard(game.getPlayer(3), 21);

        // await TalaHelper.wait(2);
        // game.moveShowCard(0, 1, 3);
        // await TalaHelper.wait(2);
        // game.moveShowCard(1, 2, 13);
        // await TalaHelper.wait(2);
        // game.moveShowCard(2, 3, 14);
        // await TalaHelper.wait(2);
        // game.moveShowCard(3, 0, 15);

        //测试吃牌
        // await TalaHelper.wait(2);
        // game.eatCard(0, 3, game.getPlayer(1));
        // await TalaHelper.wait(2);
        // game.eatCard(1, 10, game.getPlayer(2));
        // await TalaHelper.wait(2);
        // game.eatCard(2, 14, game.getPlayer(3));
        // await TalaHelper.wait(2);
        // game.eatCard(3, 15, game.getPlayer(0));
        // await TalaHelper.wait(1);
        // game.getPlayer(0).showPhom([1, 2, 3], [4, 5, 6]);
        // await TalaHelper.wait(1);
        // game.getPlayer(1).showPhom([1, 2, 3], [4, 5, 6]);
        // await TalaHelper.wait(1);
        // game.getPlayer(2).showPhom([1, 2, 3], [4, 5, 6]);
        // await TalaHelper.wait(1);
        // game.getPlayer(3).showPhom([1, 2, 3], [4, 5, 6]);

        // await TalaHelper.wait(1);
        // game.getPlayer(0).combinePhom(game.getPlayer(1), 7);
        // await TalaHelper.wait(1);
        // game.getPlayer(1).combinePhom(game.getPlayer(2), 7);
        // await TalaHelper.wait(1);
        // game.getPlayer(2).combinePhom(game.getPlayer(3), 7);
        // await TalaHelper.wait(1);
        // game.getPlayer(3).combinePhom(game.getPlayer(0), 7);

        //测试组牌提示
        // let data = new tala.tala.SCTaLaShowPhom();
        // data.Phoms = [new tala.tala.Phoms(), new tala.tala.Phoms()];
        // data.Phoms[0].Phom = [15, 16, 17];
        // data.Phoms[1].Phom = [19, 32, 45];
        // let list = data.Phoms;
        // //30 43 21
        // let result = CardHelper.markPhoms(list, 30);
        // result = CardHelper.markPhoms(list, 43);
        // result = CardHelper.markPhoms(list, 21);
        // console.log('123')
        // let wait = this.getComponentInChildren(WaitProgress);
        // wait.play(10);

    }

    makePlayer(snid: number, pos: number) {
        let player = new tala.tala.TaLaPlayerData();
        player.SnId = snid;
        player.Pos = pos;
        return player;
    }


}

