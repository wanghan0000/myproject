import { assetManager, bezier, earcut, Graphics, Mask, SpriteFrame, toRadian } from "cc";
import tala from "../../protocol/tala.js";
import TalaHelper from "../../TalaHelper";
import { Card } from "../component/Card";
import { CardColor, CardPoint, TalaCardColor, TalaCardPoint, TalaCardType } from "../define";
import ResourceHelper from "./ResourceHelper";

export default class CardHelper {
    public static ABName = 'Tala';
    static getCardColor(cardId: number): CardColor {
        let color = 0;
        if (cardId == CardPoint._BlackJoker)
            return CardColor.BLACKJOKER;
        if (cardId == CardPoint._RedJoker)
            return CardColor.REDJOKER;
        color = Math.floor(cardId / 13);
        return color;
    }

    static getCardPoint(cardId: number): CardPoint {
        let point = 0;
        if (cardId == CardPoint._BlackJoker || cardId == CardPoint._RedJoker)
            return cardId;
        point = cardId % 13;
        return point;
    }

    static isJoker(cardId: number): boolean {
        let color = this.getCardColor(cardId);
        return color == CardColor.BLACKJOKER || color == CardColor.REDJOKER;
    }

    static getTalaCardColor(cardId: number): TalaCardColor {
        let color = Math.floor(cardId / 13);
        return color;
    }

    static getTalaCardPoint(cardId: number): TalaCardPoint {
        let point = cardId % 13;
        return point;
    }
    //牌面显示的值
    static getTalaCardValue(cardId: number): TalaCardPoint {
        let value = (cardId + 1) % 13;
        if (value == 0) return 13
        return value;
    }

    static getTalaCardPower(cardid: number) {
        let point = this.getTalaCardPoint(cardid);
        let color = this.getTalaCardColor(cardid);
        return point * 10 + color;
    }
    //理牌顺序:四张>三张>同花顺>垃圾牌
    static _tmpSortCards: number[] = [];
    static _tmpSortCards2: number[] = [];
    public static sortCards(ownCards: number[]) {
        let copy = this.getTmpList(this._tmpSortCards, ownCards);
        this.sortSmaller(copy);
        let result = this._tmpSortCards2;
        result.length = 0;
        //收集4张
        for (let index = 0; index < copy.length - 3; index++) {
            const element = this.getTalaCardPoint(copy[index]);
            const element2 = this.getTalaCardPoint(copy[index + 1]);
            const element3 = this.getTalaCardPoint(copy[index + 2]);
            const element4 = this.getTalaCardPoint(copy[index + 3]);
            if (element == element2 && element2 == element3 && element3 == element4) {
                result.push(copy[index]);
                result.push(copy[index + 1]);
                result.push(copy[index + 2]);
                result.push(copy[index + 3]);
                index += 3;
            }
        }
        this._removeCards(copy, result);
        //收集3张
        for (let index = 0; index < copy.length - 2; index++) {
            const element = this.getTalaCardPoint(copy[index]);
            const element2 = this.getTalaCardPoint(copy[index + 1]);
            const element3 = this.getTalaCardPoint(copy[index + 2]);
            if (element == element2 && element2 == element3) {
                result.push(copy[index]);
                result.push(copy[index + 1]);
                result.push(copy[index + 2]);
                index += 2;
            }
        }
        this._removeCards(copy, result);
        //收集同花顺
        this.sortColor(copy, false);
        for (let index = 0; index < copy.length - 2; index++) {
            let flag = true;
            let count = 0;
            for (let i = 0; i < 9; ++i) {
                if (index + i + 1 >= copy.length) break;
                let cur = this.getTalaCardPoint(copy[index + i]);
                let curColor = this.getTalaCardColor(copy[index + i]);
                let next = this.getTalaCardPoint(copy[index + i + 1]);
                let nextColor = this.getTalaCardColor(copy[index + i + 1]);
                if (next - cur != -1 || nextColor != curColor) {
                    flag = false;
                    break;
                } else {
                    ++count;
                }
            }
            if (count >= 2) {
                for (let i = 0; i < count + 1; ++i) {
                    result.push(copy[index + i]);
                }
            }
            index += count;
        }
        this._removeCards(copy, result);
        //收集准phom: 两张同点数或者两张同花顺
        //收集2张同点数
        this.sortSmaller(copy);
        for (let index = 0; index < copy.length - 1; index++) {
            const element = this.getTalaCardPoint(copy[index]);
            const element2 = this.getTalaCardPoint(copy[index + 1]);
            if (element == element2) {
                result.push(copy[index]);
                result.push(copy[index + 1]);
                index += 1;
            }
        }
        this._removeCards(copy, result);
        //收集两张同花顺
        this.sortColor(copy, false);
        for (let index = 0; index < copy.length - 2; index++) {
            let flag = true;
            let count = 0;
            for (let i = 0; i < 9; ++i) {
                if (index + i + 1 >= copy.length) break;
                let cur = this.getTalaCardPoint(copy[index + i]);
                let curColor = this.getTalaCardColor(copy[index + i]);
                let next = this.getTalaCardPoint(copy[index + i + 1]);
                let nextColor = this.getTalaCardColor(copy[index + i + 1]);
                if (next - cur != -1 || nextColor != curColor) {
                    flag = false;
                    break;
                } else {
                    ++count;
                }
            }
            if (count >= 1) {
                for (let i = 0; i < count + 1; ++i) {
                    result.push(copy[index + i]);
                }
            }
            index += count;
        }
        this._removeCards(copy, result);
        this.sortSmaller(copy);
        result = result.concat(copy);
        copy.length = 0;
        Object.assign(ownCards, result);
    }



    static _removeCards(list: number[], removeList: number[]) {
        for (let index = 0; index < removeList.length; index++) {
            const element = removeList[index];
            let idx = list.indexOf(element);
            idx != -1 && list.splice(idx, 1);
        }
    }


    public static _sortBiggerFunc(l: number, r: number) {
        let v1 = this.getTalaCardPower(l);
        let v2 = this.getTalaCardPower(r);
        return v1 - v2;
    }

    public static _sortSmallerFunc(l: number, r: number) {
        let v1 = this.getTalaCardPower(l);
        let v2 = this.getTalaCardPower(r);
        return v2 - v1;
    }

    public static _sortColorFunc(l: number, r: number) {
        let v1 = this.getTalaCardColor(l);
        let v2 = this.getTalaCardColor(r);
        if (v1 == v2) {
            return this.getTalaCardPower(l) - this.getTalaCardPower(r);
        }
        return v1 - v2;
    }

    public static _sortColorFunc2(l: number, r: number) {
        let v1 = this.getTalaCardColor(l);
        let v2 = this.getTalaCardColor(r);
        if (v1 == v2) {
            return this.getTalaCardPower(r) - this.getTalaCardPower(l);
        }
        return v1 - v2;
    }

    public static _sortRandomFunc(l: number, r: number) {
        return Math.random() - 0.5;
    }

    private static _tmpList: number[] = [];
    public static getTmpList(tmpList: number[], list: number[]) {
        tmpList.length = 0;
        Object.assign(tmpList, list);
        return tmpList;
    }

    static isStraight(cards: number[]) {//顺子
        if (cards.length < 3) return false;
        let tmp = this.getTmpList(this._tmpList, cards);
        this.sortBigger(tmp);
        for (let index = 0; index < tmp.length - 1; index++) {
            const cur = tmp[index];
            const next = tmp[index + 1];
            if (this.getTalaCardPoint(next) - this.getTalaCardPoint(cur) != 1) return false;
        }
        return true;
    }

    static isFlush(cards: number[]) {//同花顺
        if (!this.isStraight(cards)) return false;
        let color = this.getTalaCardColor(cards[0]);
        for (let index = 1; index < cards.length; index++) {
            const element = cards[index];
            if (this.getTalaCardColor(element) != color) return false;
        }
        return true;
    }

    static isTriple(cards: number[]) {//三张
        if (cards.length != 3) return false;
        if (this.getTalaCardPoint(cards[0]) != this.getTalaCardPoint(cards[1])) {
            return false;
        }
        if (this.getTalaCardPoint(cards[1]) != this.getTalaCardPoint(cards[2])) {
            return false;
        }
        return true;
    }

    static isBomb(cards: number[]) {//炸弹
        if (cards.length % 4 != 0) return false;
        for (let index = 0; index < cards.length - 1; index++) {
            const cur = cards[index];
            const next = cards[index + 1];
            if (this.getTalaCardPoint(cur) != this.getTalaCardPoint(next)) return false;
        }
        return true;
    }

    static getTalaCardType(cards: number[], traditional: boolean = true) {
        if (this.isTriple(cards)) return TalaCardType.Triple;
        if (this.isBomb(cards)) return TalaCardType.Four_Bomb;
        if (this.isFlush(cards)) return TalaCardType.ColorStraight;
        return TalaCardType.NONE;
    }

    static haveBomb(ownCards: number[], eatCard: number) {
        if (ownCards.length < 4) return false;
        for (let index = 0; index < ownCards.length - 3; index++) {
            const element = this.getTalaCardPoint(ownCards[index]);
            const element2 = this.getTalaCardPoint(ownCards[index + 1]);
            const element3 = this.getTalaCardPoint(ownCards[index + 2]);
            const element4 = this.getTalaCardPoint(ownCards[index + 3]);
            if (element == element2 && element2 == element3 && element3 == element4) {
                if (ownCards[index] == eatCard || ownCards[index + 1] == eatCard
                    || ownCards[index + 2] == eatCard || ownCards[index + 3] == eatCard) return true;
            }
        }
        return false;
    }

    static haveTriple(ownCards: number[], eatCard: number) {
        for (let index = 0; index < ownCards.length - 2; index++) {
            let cur = this.getTalaCardPoint(ownCards[index]);
            let next = this.getTalaCardPoint(ownCards[index + 1]);
            let next2 = this.getTalaCardPoint(ownCards[index + 2]);
            if (cur == next && next == next2) {
                if (ownCards[index] == eatCard || ownCards[index + 1] == eatCard || ownCards[index + 2] == eatCard) return true;
            }

        }
    }

    static haveColorStraight(ownCards: number[], eatCard: number) {
        CardHelper.sortColor(ownCards);
        let count = 3
        for (let index = ownCards.length - 1; index >= count - 1; index--) {
            let flag = true;
            for (let i = 0; i < count - 1; ++i) {
                let cur = this.getTalaCardPoint(ownCards[index - i]);
                let next = this.getTalaCardPoint(ownCards[index - i - 1]);
                let curColor = this.getTalaCardColor(ownCards[index - i]);
                let nextColor = this.getTalaCardColor(ownCards[index - i - 1]);
                if (cur - next != 1 || curColor != nextColor) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                if (ownCards[index] == eatCard || ownCards[index - 1] == eatCard || ownCards[index - 2] == eatCard) return true;
            }

        }
    }



    static sortBigger(cards: number[]) {
        return cards.sort(this._sortBiggerFunc.bind(this))
    }

    static sortRandom(cards: number[]) {
        return cards.sort(this._sortRandomFunc.bind(this))
    }

    static sortSmaller(cards: number[]) {
        return cards.sort(this._sortSmallerFunc.bind(this))
    }

    static sortColor(cards: number[], isBigger: boolean = true) {
        if (isBigger) {
            return cards.sort(this._sortColorFunc.bind(this))
        } else {
            return cards.sort(this._sortColorFunc2.bind(this))
        }
    }

    static getTalaCardPointResPath(point: TalaCardPoint, color: TalaCardColor): string {
        let prefix = 'rawRes';
        if (point == TalaCardPoint._A)
            point = 14;
        else if (point == TalaCardPoint._2)
            point = 15;
        else
            point += 1;
        let ziSkin: string = '';
        if (color == TalaCardColor.DIAMOND) {
            ziSkin = 'poker/poker_r' + point + '/spriteFrame';
        } else if (color == TalaCardColor.CLUB) {
            ziSkin = 'poker/poker_b' + point + '/spriteFrame';
        } else if (color == TalaCardColor.HEART) {
            ziSkin = 'poker/poker_r' + point + '/spriteFrame';
        } else if (color == TalaCardColor.SPADE) {
            ziSkin = 'poker/poker_b' + point + '/spriteFrame';
        }
        return `${prefix}/${ziSkin}`;
    }

    static getTalaCardColorResPath(color: TalaCardColor): string {
        let prefix = 'rawRes';
        let huaSkin: string = '';
        if (color == TalaCardColor.DIAMOND) {
            huaSkin = 'poker/poker_h4/spriteFrame';
        } else if (color == TalaCardColor.CLUB) {
            huaSkin = 'poker/poker_h3/spriteFrame';
        } else if (color == TalaCardColor.HEART) {
            huaSkin = 'poker/poker_h2/spriteFrame';
        } else if (color == TalaCardColor.SPADE) {
            huaSkin = 'poker/poker_h1/spriteFrame';
        }
        return `${prefix}/${huaSkin}`;
    }

    static async getCardPointRes(point: TalaCardPoint, color: TalaCardColor): Promise<SpriteFrame | null> {
        let path = this.getTalaCardPointResPath(point, color);
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(CardHelper.ABName, path, SpriteFrame);
        return sf;
    }

    static async getCardColorRes(color: TalaCardColor): Promise<SpriteFrame | null> {
        let path = this.getTalaCardColorResPath(color);
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(CardHelper.ABName, path, SpriteFrame);
        return sf;
    }

    static async preloadAllCardRes() {
        await ResourceHelper.preloadDirInAB(CardHelper.ABName, "rawRes/poker", SpriteFrame);
    }

    static checkCanEat(cardList: number[], cardId: number, excludeList: number[] = []) {
        let tmp = cardList.slice();
        tmp.push(cardId);
        this._removeCards(tmp, excludeList);
        this.sortBigger(tmp);
        if (this.haveBomb(tmp, cardId)) return true;
        if (this.haveTriple(tmp, cardId)) return true;
        if (this.haveColorStraight(tmp, cardId)) return true;
        return false;
    }

    static markPhoms(list: tala.tala.IPhoms[], cardId: number) {
        let result = [];
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            let tmp = element.Phom.concat(cardId);
            this.sortBigger(tmp);
            if (this.isBomb(tmp) || this.isFlush(tmp)) {
                result.push(index);
            }
        }
        return result;
    }

}

