import { assetManager, bezier, earcut, Graphics, Mask, SpriteFrame, toRadian } from "cc";
import TienlenDefine from "../../TienlenDefine";
import TienlenHelper from "../../TienlenHelper";
import { Card } from "../component/Card";
import { CardColor, CardPoint, TienlenCardColor, TienlenCardPoint, TienlenCardType } from "../define";
import ResourceHelper from "./ResourceHelper";
/**
 * 娱乐玩法和经典差异:
 * 1 新增3顺，eg 333444...
 * 2 新增三带单 eg 3334
 * 3 新增三带双 eg 33344
 * 4 炸弹可以压任何牌，除了4连对5连对
 */
export default class CardHelper {
    public static ABName = 'Tienlen';
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

    static getTienlenCardColor(cardId: number): TienlenCardColor {
        let color = Math.floor(cardId / 13);
        return color;
    }

    static getTienlenCardPoint(cardId: number): TienlenCardPoint {
        let point = cardId % 13;
        return point;
    }
    //牌面显示的值
    static getTienlenCardValue(cardId: number): TienlenCardPoint {
        let value = (cardId + 3) % 13;
        if (value == 0) return 13
        return value;
    }

    static getTienlenCardPower(cardid: number) {
        let point = this.getTienlenCardPoint(cardid);
        let color = this.getTienlenCardColor(cardid);
        return point * 10 + color;
    }

    public static _sortBiggerFunc(l: number, r: number) {
        let v1 = this.getTienlenCardPower(l);
        let v2 = this.getTienlenCardPower(r);
        return v1 - v2;
    }

    public static _sortSmallerFunc(l: number, r: number) {
        let v1 = this.getTienlenCardPower(l);
        let v2 = this.getTienlenCardPower(r);
        return v2 - v1;
    }

    public static _sortColorFunc(l: number, r: number) {
        let v1 = this.getTienlenCardColor(l);
        let v2 = this.getTienlenCardColor(r);
        if (v1 == v2) {
            return this.getTienlenCardPower(l) - this.getTienlenCardPower(r);
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

    static isSingle(cards: number[]) {
        return cards.length == 1;
    }

    static isPair(cards: number[]) {
        if (cards.length != 2) return false;
        return this.getTienlenCardPoint(cards[0]) == this.getTienlenCardPoint(cards[1]);
    }

    static isStraight(cards: number[]) {//顺子
        if (cards.length < 3 || cards.length > 12) return false;
        for (let index = 0; index < cards.length; index++) {
            const element = cards[index];
            let point = this.getTienlenCardPoint(element);
            if (point == TienlenCardPoint._2) return false;
        }
        let tmp = this.getTmpList(this._tmpList, cards);
        this.sortBigger(tmp);
        for (let index = 0; index < tmp.length - 1; index++) {
            const cur = tmp[index];
            const next = tmp[index + 1];
            if (this.getTienlenCardPoint(next) - this.getTienlenCardPoint(cur) != 1) return false;
        }
        return true;
    }

    static isFlush(cards: number[]) {//同花顺
        if (!this.isStraight(cards)) return false;
        let color = this.getTienlenCardColor(cards[0]);
        for (let index = 1; index < cards.length; index++) {
            const element = cards[index];
            if (this.getTienlenCardColor(element) != color) return false;
        }
        return true;
    }

    static isStraightPair(cards: number[]) {//连对(双顺)
        if (cards.length < 4 || cards.length % 2 != 0) return false;
        for (let index = 0; index < cards.length; index++) {
            const element = cards[index];
            let point = this.getTienlenCardPoint(element);
            if (point == TienlenCardPoint._2) return false;
        }
        let tmp = this.getTmpList(this._tmpList, cards);
        this.sortBigger(tmp);
        for (let index = 0; index < tmp.length; index += 2) {
            let cur = tmp[index];
            let next = tmp[index + 1];
            if (this.getTienlenCardPoint(cur) != this.getTienlenCardPoint(next)) {
                return false;
            }
            if (index < tmp.length - 2) {
                next = tmp[index + 2];
                if (this.getTienlenCardPoint(next) - this.getTienlenCardPoint(cur) != 1) return false;
            }
        }
        return true;
    }

    static isStraightThree(cards: number[]) {//三顺
        if (cards.length < 6 || cards.length % 3 != 0) return false;
        for (let index = 0; index < cards.length; index++) {
            const element = cards[index];
            let point = this.getTienlenCardPoint(element);
            if (point == TienlenCardPoint._2) return false;
        }
        let tmp = this.getTmpList(this._tmpList, cards);
        this.sortBigger(tmp);
        for (let index = 0; index < tmp.length; index += 3) {
            let cur = this.getTienlenCardPoint(tmp[index]);
            let next = this.getTienlenCardPoint(tmp[index + 1]);
            let next2 = this.getTienlenCardPoint(tmp[index + 2]);
            if (cur != next || next != next2) {
                return false;
            }
            if (index < tmp.length - 3) {
                next = this.getTienlenCardPoint(tmp[index + 3]);
                if (next - cur != 1) return false;
            }
        }
        return true;
    }
    //三顺带4张牌
    static isPlane(cards: number[]) {
        if (cards.length != 10) return false;
        let basePower = -1;
        let pairCount = 2;
        this.sortBigger(cards);
        for (let index = 0; index < cards.length; index++) {
            if (this.getTienlenCardPower(cards[index]) > basePower) {
                let flag = true;
                for (let i = 0; i < pairCount - 1; ++i) {
                    if (index + i * 3 + 5 >= cards.length) {
                        flag = false;
                        break;
                    }
                    let cur = this.getTienlenCardPoint(cards[index + i * 3]);
                    let next = this.getTienlenCardPoint(cards[index + i * 3 + 1]);
                    let next2 = this.getTienlenCardPoint(cards[index + i * 3 + 2]);
                    if (cur != next || next != next2 || next2 == TienlenCardPoint._2) {
                        flag = false;
                        break;
                    }
                    next = this.getTienlenCardPoint(cards[index + i * 3 + 3]);
                    if (next - cur != 1) {
                        flag = false;
                        break;
                    }
                    next2 = this.getTienlenCardPoint(cards[index + i * 3 + 4]);
                    let next3 = this.getTienlenCardPoint(cards[index + i * 3 + 5]);
                    if (next != next2 || next2 != next3 || next3 == TienlenCardPoint._2) {
                        flag = false;
                        break;
                    }
                }
                if (flag) return true;
            }
        }
    }
    // static haveCutStraightThree(ownCards: number[], baseCard: number, pairCount: number) {
    //     if (ownCards.length < pairCount * 3) return false;
    //     let basePower = baseCard == -1 ? -1 : this.getTienlenCardPower(baseCard);
    //     for (let index = 0; index < ownCards.length; index++) {
    //         if (this.getTienlenCardPower(ownCards[index]) > basePower) {
    //             let flag = true;
    //             for (let i = 0; i < pairCount - 1; ++i) {
    //                 if (index + i * 3 + 5 >= ownCards.length) {
    //                     flag = false;
    //                     break;
    //                 }
    //                 let cur = this.getTienlenCardPoint(ownCards[index + i * 3]);
    //                 let next = this.getTienlenCardPoint(ownCards[index + i * 3 + 1]);
    //                 let next2 = this.getTienlenCardPoint(ownCards[index + i * 3 + 2]);
    //                 if (cur != next || next != next2 || next2 == TienlenCardPoint._2) {
    //                     flag = false;
    //                     break;
    //                 }
    //                 next = this.getTienlenCardPoint(ownCards[index + i * 3 + 3]);
    //                 if (next - cur != 1) {
    //                     flag = false;
    //                     break;
    //                 }
    //                 next2 = this.getTienlenCardPoint(ownCards[index + i * 3 + 4]);
    //                 let next3 = this.getTienlenCardPoint(ownCards[index + i * 3 + 5]);
    //                 if (next != next2 || next2 != next3 || next3 == TienlenCardPoint._2) {
    //                     flag = false;
    //                     break;
    //                 }
    //             }
    //             if (flag) return true;
    //         }
    //     }
    //     return false;
    // }

    static isTriple(cards: number[]) {//三张
        if (cards.length != 3) return false;
        if (this.getTienlenCardPoint(cards[0]) != this.getTienlenCardPoint(cards[1])) {
            return false;
        }
        if (this.getTienlenCardPoint(cards[1]) != this.getTienlenCardPoint(cards[2])) {
            return false;
        }
        return true;
    }

    static isPlaneOne(cards: number[]) {//三带一
        if (cards.length != 4) return false;
        let card0 = this.getTienlenCardPoint(cards[0]);
        let card1 = this.getTienlenCardPoint(cards[1]);
        let card2 = this.getTienlenCardPoint(cards[2]);
        let card3 = this.getTienlenCardPoint(cards[3]);
        if (card0 == card1 && card1 == card2) {
            return true;
        } else if (card1 == card2 && card2 == card3) {
            return true;
        }
        return false;
    }

    static isPlanePair(cards: number[]) {//三带二
        if (cards.length != 5) return false;
        let card0 = this.getTienlenCardPoint(cards[0]);
        let card1 = this.getTienlenCardPoint(cards[1]);
        let card2 = this.getTienlenCardPoint(cards[2]);
        let card3 = this.getTienlenCardPoint(cards[3]);
        let card4 = this.getTienlenCardPoint(cards[4]);
        if (card0 == card1 && card1 == card2) {
            return true;
        } else if (card2 == card3 && card3 == card4) {
            return true;
        }
        return false;
    }

    static isBomb(cards: number[]) {//炸弹
        if (cards.length % 4 != 0) return false;
        for (let index = 0; index < cards.length - 1; index++) {
            const cur = cards[index];
            const next = cards[index + 1];
            if (this.getTienlenCardPoint(cur) != this.getTienlenCardPoint(next)) return false;
        }
        return true;
    }

    static getTienlenCardType(cards: number[], traditional: boolean = true) {
        if (this.isSingle(cards)) return TienlenCardType.Single;
        if (this.isPair(cards)) return TienlenCardType.Twin;
        if (this.isTriple(cards)) return TienlenCardType.Triple;
        if (this.isBomb(cards)) return TienlenCardType.Four_Bomb;
        if (this.isFlush(cards)) return TienlenCardType.ColorStraight;
        if (!traditional && this.isStraightThree(cards)) return TienlenCardType.Straight_Three;
        if (!traditional && this.isPlaneOne(cards)) return TienlenCardType.Triple_One;
        if (!traditional && this.isPlanePair(cards)) return TienlenCardType.Triple_Pair;
        if (!traditional && this.isPlane(cards)) return TienlenCardType.Plane;
        if (this.isStraightPair(cards)) return TienlenCardType.Straight_Twin;
        if (this.isStraight(cards)) return TienlenCardType.Straight;
        return TienlenCardType.NONE;
    }

    static canCutCards(ownCards: number[], otherCards: number[], traditional: boolean = true) {
        let type = this.getTienlenCardType(otherCards, traditional);
        let copy = ownCards.slice();
        this.sortBigger(copy);
        this.sortBigger(otherCards);
        let baseCard = this._getBaseCard(otherCards, traditional);
        let [flag, count] = this.haveCutCard(copy, type, baseCard, otherCards.length, traditional);
        return flag;
    }

    static _getBaseCard(cards: number[], traditional: boolean = true) {
        let type = this.getTienlenCardType(cards, traditional);
        this.sortBigger(cards);
        if (type == TienlenCardType.Triple_One) {
            if (this.getTienlenCardPoint(cards[0]) == this.getTienlenCardPoint(cards[1])) return cards[0];
            else return cards[3];
        } else if (type == TienlenCardType.Triple_Pair) {
            if (this.getTienlenCardPoint(cards[0]) == this.getTienlenCardPoint(cards[1]) && this.getTienlenCardPoint(cards[1]) == this.getTienlenCardPoint(cards[2])) return cards[0];
            else return cards[4];
        } else if (type == TienlenCardType.Straight || type == TienlenCardType.ColorStraight || type == TienlenCardType.Straight_Twin || type == TienlenCardType.Twin) {
            return cards[cards.length - 1]
        } else {
            return cards[0];
        }
    }

    static checkLastCards(ownCards: number[], otherCards: number[], isNewRound: boolean, traditional: boolean = true) {
        if (isNewRound) {
            let type = this.getTienlenCardType(ownCards, traditional);
            return type != TienlenCardType.NONE;
        } else {
            let type = this.getTienlenCardType(otherCards, traditional);
            let copy = ownCards.slice();
            this.sortBigger(copy);
            this.sortBigger(otherCards);
            let baseCard = this._getBaseCard(otherCards, traditional);
            let [flag, count] = this.haveCutCard(copy, type, baseCard, otherCards.length, traditional);
            if (flag && count == ownCards.length) {
                return true;
            }
        }
        return false;
    }

    //根据对方牌型，最小牌和数量判断已排序手牌是否有可压牌
    static haveCutCard(ownCards: number[], cardType: TienlenCardType, baseCard: number, count: number, traditional: boolean = true) {
        let basePower = this.getTienlenCardPower(baseCard);
        let basePoint = this.getTienlenCardPoint(baseCard);
        if (cardType == TienlenCardType.Single) {
            if (ownCards.length < count) return [false];
            for (let index = 0; index < ownCards.length; index++) {
                const element = ownCards[index];
                if (this.getTienlenCardPower(element) > basePower) return [true, 1];
            }
            //如果是单2,炸弹,3,4,5连也能压
            if (basePoint == TienlenCardPoint._2) {
                if (this.haveBomb(ownCards)) {
                    return [true, 4];
                } else if (this.haveCutStraightPair2(ownCards, 5)) {
                    return [true, 10];
                } else if (this.haveCutStraightPair2(ownCards, 4)) {
                    return [true, 8];
                } else if (this.haveCutStraightPair2(ownCards, 3)) {
                    return [true, 6];
                }
            } else if (!traditional) {
                if (this.haveBomb(ownCards)) return [true, 4];
            }
        } else if (cardType == TienlenCardType.Twin) {
            if (ownCards.length < count) return [false];
            for (let index = ownCards.length - 1; index >= 1; index--) {
                const element = ownCards[index];
                let power = this.getTienlenCardPower(element);
                if (power > basePower) {
                    let cur = this.getTienlenCardPoint(element);
                    let next = this.getTienlenCardPoint(ownCards[index - 1]);
                    if (cur == next) return [true, 2];
                }
            }
            //如果是经典场 对2,炸弹,4,5连也能压
            if (basePoint == TienlenCardPoint._2) {
                if (this.haveBomb(ownCards)) return [true, 4];
                else if (this.haveCutStraightPair2(ownCards, 5)) return [true, 10];
                else if (this.haveCutStraightPair2(ownCards, 4)) return [true, 8];
            } else if (!traditional) {
                if (this.haveBomb(ownCards)) return [true, 4];
            }
        } else if (cardType == TienlenCardType.Triple) {
            if (ownCards.length < count) return [false];
            for (let index = 0; index < ownCards.length - 2; index++) {
                const element = ownCards[index];
                let point = this.getTienlenCardPoint(element);
                if (point > basePoint) {
                    let cur = this.getTienlenCardPoint(element);
                    let next = this.getTienlenCardPoint(ownCards[index + 1]);
                    let next2 = this.getTienlenCardPoint(ownCards[index + 2]);
                    if (cur == next && next == next2) return [true, 3];
                }
            }
            if (!traditional) {
                if (this.haveBomb(ownCards)) return [true, 4];
            }
        } else if (cardType == TienlenCardType.Four_Bomb) {
            if (ownCards.length < count) return [false];
            for (let index = 0; index < ownCards.length - 3; index++) {
                if (this.getTienlenCardPower(ownCards[index]) > basePower) {
                    const element = this.getTienlenCardPoint(ownCards[index]);
                    const element2 = this.getTienlenCardPoint(ownCards[index + 1]);
                    const element3 = this.getTienlenCardPoint(ownCards[index + 2]);
                    const element4 = this.getTienlenCardPoint(ownCards[index + 3]);
                    if (element == element2 && element2 == element3 && element3 == element4) return [true, 4];
                }
            }
        } else if (cardType == TienlenCardType.Straight_Twin) {
            let flag = this.haveCutStraightPair(ownCards, baseCard, count / 2);
            if (flag) {
                return [true, 4];
            }
            if (!flag) { //同对数连对如果没压牌，再判断多对数连对
                if (count / 2 == 4) {
                    if (this.haveCutStraightPair2(ownCards, 5)) return [true, 10];
                } else if (count / 2 == 3) {//炸弹只可以炸3连对
                    if (this.haveBomb(ownCards)) return [true, 4];
                    else if (this.haveCutStraightPair2(ownCards, 4)) return [true, 8];
                }
            }
            if (!flag && !traditional && count / 2 != 4 && count / 2 != 5) {
                if (this.haveBomb(ownCards)) return [true, 4];
            }
        } else if (cardType == TienlenCardType.Straight_Three && !traditional) {
            if (this.haveBomb(ownCards)) return [true, 4];
            if (this.haveCutStraightThree(ownCards, baseCard, count / 3)) return [true, count];
        } else if (cardType == TienlenCardType.Triple_One && !traditional) {
            let flag = this.haveBomb(ownCards);
            if (flag) return [true, 4];
            if (ownCards.length < count) return [false];
            for (let index = 0; index < ownCards.length; index++) {
                const element = this.getTienlenCardPoint(ownCards[index]);
                if (element > basePoint) {
                    if (index + 2 >= ownCards.length) return [false];
                    const next = this.getTienlenCardPoint(ownCards[index + 1]);
                    const next2 = this.getTienlenCardPoint(ownCards[index + 2]);
                    if (element == next && next == next2) return [true, 4];
                }
            }
        } else if (cardType == TienlenCardType.Triple_Pair && !traditional) {
            let flag = this.haveBomb(ownCards);
            if (flag) return [true, 4];
            if (ownCards.length < count) return [false];
            for (let index = 0; index < ownCards.length; index++) {
                const element = this.getTienlenCardPoint(ownCards[index]);
                if (element > basePoint) {
                    if (index + 2 >= ownCards.length) return [false];
                    const next = this.getTienlenCardPoint(ownCards[index + 1]);
                    const next2 = this.getTienlenCardPoint(ownCards[index + 2]);
                    if (element == next && next == next2) return [true, 5];
                }
            }
        } else if (cardType == TienlenCardType.Straight) {
            if (!traditional) {
                let flag = this.haveBomb(ownCards);
                if (flag) return [true, 4];
            }
            if (this.haveCutStraight(ownCards, baseCard, count)) return [true, count];
        } else if (cardType == TienlenCardType.ColorStraight) {
            if (!traditional) {
                let flag = this.haveBomb(ownCards);
                if (flag) return [true, 4];
            }
            if (this.haveCutColorStraight(ownCards, baseCard, count)) return [true, count];
        }
        return [false, 0];
    }

    static haveCutColorStraight(ownCards: number[], baseCard: number, count: number) {
        if (ownCards.length < count) return false;
        CardHelper.sortColor(ownCards);
        let basePower = this.getTienlenCardPower(baseCard);
        for (let index = ownCards.length - 1; index >= count - 1; index--) {
            const element = this.getTienlenCardPower(ownCards[index]);
            if (element > basePower) {
                let flag = true;
                for (let i = 0; i < count - 1; ++i) {
                    let cur = this.getTienlenCardPoint(ownCards[index - i]);
                    let next = this.getTienlenCardPoint(ownCards[index - i - 1]);
                    let curColor = this.getTienlenCardColor(ownCards[index - i]);
                    let nextColor = this.getTienlenCardColor(ownCards[index - i - 1]);
                    if (cur - next != 1 || cur == TienlenCardPoint._2 || curColor != nextColor) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    this.sortBigger(ownCards);
                    return true;
                }
            }
        }
        this.sortBigger(ownCards);
        return false;
    }

    static haveCutStraight(ownCards: number[], baseCard: number, count: number) {
        if (ownCards.length < count) return false;
        this._prepareCollectStraight(ownCards);
        let basePower = this.getTienlenCardPower(baseCard);
        //先判断手牌有没有点数大的顺子,从大到小比
        for (let index = ownCards.length - 1; index >= count - 1; index--) {
            const element = this.getTienlenCardPower(ownCards[index]);
            if (element > basePower) {
                let flag = true;
                for (let i = 0; i < count - 1; ++i) {
                    let cur = this.getTienlenCardPoint(ownCards[index - i]);
                    let next = this.getTienlenCardPoint(ownCards[index - i - 1]);
                    if (cur - next != 1 || cur == TienlenCardPoint._2) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    this.sortBigger(ownCards);
                    return true;
                }
            }
        }
        //再判断有没有同花顺 fix yy:同花顺压普通顺子，也必须是最大值牌大于普通顺子最大值，上面逻辑已经处理
        // for (let index = 0; index < ownCards.length - count + 1; index++) {
        //     let flag = true;
        //     for (let i = 0; i < count - 1; ++i) {
        //         let cur = this.getTienlenCardPoint(ownCards[index + i]);
        //         let next = this.getTienlenCardPoint(ownCards[index + i + 1]);
        //         let curColor = this.getTienlenCardColor(ownCards[index + i]);
        //         let nextColor = this.getTienlenCardColor(ownCards[index + i + 1]);
        //         if (next - cur != 1 || next == TienlenCardPoint._2 || curColor != nextColor) {
        //             flag = false;
        //             break;
        //         }
        //     }
        //     if (flag) {
        //         this.sortBigger(ownCards);
        //         return true;
        //     }
        // }
        this.sortBigger(ownCards);
        return false;
    }

    //获得是否有可压牌同对数连对
    static haveCutStraightPair(ownCards: number[], baseCard: number, pairCount: number) {
        if (ownCards.length < pairCount * 2) return false;
        this._prepareCollectStraightPair(ownCards);
        let basePower = baseCard == -1 ? -1 : this.getTienlenCardPower(baseCard);
        for (let index = ownCards.length - 1; index >= 0; index--) {
            if (this.getTienlenCardPower(ownCards[index]) > basePower) {
                let flag = true;
                for (let i = 0; i < pairCount - 1; ++i) {
                    if (index - i * 2 - 3 < 0) {
                        flag = false;
                        break;
                    }
                    let cur = this.getTienlenCardPoint(ownCards[index - i * 2]);
                    let next = this.getTienlenCardPoint(ownCards[index - i * 2 - 1]);
                    if (cur != next || next == TienlenCardPoint._2) {
                        flag = false;
                        break;
                    }
                    next = this.getTienlenCardPoint(ownCards[index - i * 2 - 2]);
                    if (cur - next != 1) {
                        flag = false;
                        break;
                    }
                    let next2 = this.getTienlenCardPoint(ownCards[index - i * 2 - 3]);
                    if (next != next2 || next2 == TienlenCardPoint._2) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    this.sortBigger(ownCards);
                    return true;
                }
            }
        }
        this.sortBigger(ownCards);
        return false;
    }
    //获得是否有可压牌的多对数连对
    static haveCutStraightPair2(ownCards: number[], pairCount: number) {
        if (ownCards.length < pairCount * 2) return false;
        this._prepareCollectStraightPair(ownCards);
        for (let index = 0; index < ownCards.length; index++) {
            let flag = true;
            for (let i = 0; i < pairCount - 1; ++i) {
                if (index + i * 2 + 3 >= ownCards.length) {
                    flag = false;
                    break;
                }
                let cur = this.getTienlenCardPoint(ownCards[index + i * 2]);
                let next = this.getTienlenCardPoint(ownCards[index + i * 2 + 1]);
                if (cur != next || next == TienlenCardPoint._2) {
                    flag = false;
                    break;
                }
                next = this.getTienlenCardPoint(ownCards[index + i * 2 + 2]);
                if (next - cur != 1) {
                    flag = false;
                    break;
                }
                let next2 = this.getTienlenCardPoint(ownCards[index + i * 2 + 3]);
                if (next != next2 || next2 == TienlenCardPoint._2) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                this.sortBigger(ownCards);
                return true;
            }
        }
        this.sortBigger(ownCards);
        return false;
    }

    static getCutStraightPair(ownCards2: number[], baseCard: number, pairCount: number, traditional: boolean) {
        let ownCards = ownCards2.slice();
        if (ownCards.length < pairCount * 2) return null;
        this._prepareCollectStraightPair(ownCards);
        let basePower = baseCard == -1 ? -1 : this.getTienlenCardPower(baseCard);
        let minIdx = -1;
        for (let index = ownCards.length - 1; index >= 0; index--) {
            if (this.getTienlenCardPower(ownCards[index]) > basePower) {
                let flag = true;
                for (let i = 0; i < pairCount - 1; ++i) {
                    if (index - i * 2 - 3 < 0) {
                        flag = false;
                        break;
                    }
                    let cur = this.getTienlenCardPoint(ownCards[index - i * 2]);
                    let next = this.getTienlenCardPoint(ownCards[index - i * 2 - 1]);
                    if (cur != next || next == TienlenCardPoint._2) {
                        flag = false;
                        break;
                    }
                    next = this.getTienlenCardPoint(ownCards[index - i * 2 - 2]);
                    if (cur - next != 1) {
                        flag = false;
                        break;
                    }
                    let next2 = this.getTienlenCardPoint(ownCards[index - i * 2 - 3]);
                    if (next != next2 || next2 == TienlenCardPoint._2) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    minIdx = index;
                    // let list = ownCards.slice(index - pairCount * 2 + 1, index + 1);
                    // return list;
                }
            }
        }
        if (minIdx != -1) {
            return ownCards.slice(minIdx - pairCount * 2 + 1, minIdx + 1);
        }
        this.sortBigger(ownCards);
        if (pairCount == 4) {
            let list = this.getStraightPair(ownCards, 5);
            if (list) return list;
        } else if (pairCount == 3) {
            let list = this.getStraightPair(ownCards, 4);
            if (list) return list;
            if (ownCards.length >= 4) {
                for (let index = 0; index < ownCards.length - 3; index++) {
                    const element = this.getTienlenCardPoint(ownCards[index]);
                    const element2 = this.getTienlenCardPoint(ownCards[index + 1]);
                    const element3 = this.getTienlenCardPoint(ownCards[index + 2]);
                    const element4 = this.getTienlenCardPoint(ownCards[index + 3]);
                    if (element == element2 && element2 == element3 && element3 == element4) {
                        return ownCards.slice(index, index + 4);
                    }
                }
            }
        }
        if (!traditional && pairCount != 4 && pairCount != 5) {
            if (ownCards.length >= 4) {
                for (let index = 0; index < ownCards.length - 3; index++) {
                    const element = this.getTienlenCardPoint(ownCards[index]);
                    const element2 = this.getTienlenCardPoint(ownCards[index + 1]);
                    const element3 = this.getTienlenCardPoint(ownCards[index + 2]);
                    const element4 = this.getTienlenCardPoint(ownCards[index + 3]);
                    if (element == element2 && element2 == element3 && element3 == element4) {
                        return ownCards.slice(index, index + 4);
                    }
                }
            }
        }
        return null;
    }

    //获得手牌相应对数最小连对
    static getStraightPair(ownCards2: number[], pairCount: number) {
        if (ownCards2.length < pairCount * 2) return null;
        let ownCards = ownCards2.slice();
        this._prepareCollectStraightPair(ownCards);
        for (let index = 0; index < ownCards.length; index++) {
            let flag = true;
            for (let i = 0; i < pairCount - 1; ++i) {
                if (index + i * 2 + 3 >= ownCards.length) {
                    flag = false;
                    break;
                }
                let cur = this.getTienlenCardPoint(ownCards[index + i * 2]);
                let next = this.getTienlenCardPoint(ownCards[index + i * 2 + 1]);
                if (cur != next || next == TienlenCardPoint._2) {
                    flag = false;
                    break;
                }
                next = this.getTienlenCardPoint(ownCards[index + i * 2 + 2]);
                if (next - cur != 1) {
                    flag = false;
                    break;
                }
                let next2 = this.getTienlenCardPoint(ownCards[index + i * 2 + 3]);
                if (next != next2 || next2 == TienlenCardPoint._2) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                let list = ownCards.slice(index, index + pairCount * 2);
                this.sortBigger(ownCards);
                return list;
            }
        }
        return null;
    }

    static haveCutStraightThree(ownCards: number[], baseCard: number, pairCount: number) {
        if (ownCards.length < pairCount * 3) return false;
        let basePower = baseCard == -1 ? -1 : this.getTienlenCardPower(baseCard);
        for (let index = 0; index < ownCards.length; index++) {
            if (this.getTienlenCardPower(ownCards[index]) > basePower) {
                let flag = true;
                for (let i = 0; i < pairCount - 1; ++i) {
                    if (index + i * 3 + 5 >= ownCards.length) {
                        flag = false;
                        break;
                    }
                    let cur = this.getTienlenCardPoint(ownCards[index + i * 3]);
                    let next = this.getTienlenCardPoint(ownCards[index + i * 3 + 1]);
                    let next2 = this.getTienlenCardPoint(ownCards[index + i * 3 + 2]);
                    if (cur != next || next != next2 || next2 == TienlenCardPoint._2) {
                        flag = false;
                        break;
                    }
                    next = this.getTienlenCardPoint(ownCards[index + i * 3 + 3]);
                    if (next - cur != 1) {
                        flag = false;
                        break;
                    }
                    next2 = this.getTienlenCardPoint(ownCards[index + i * 3 + 4]);
                    let next3 = this.getTienlenCardPoint(ownCards[index + i * 3 + 5]);
                    if (next != next2 || next2 != next3 || next3 == TienlenCardPoint._2) {
                        flag = false;
                        break;
                    }
                }
                if (flag) return true;
            }
        }
        return false;
    }

    static getCutStraightThree(ownCards: number[], baseCard: number, pairCount: number) {
        if (ownCards.length < pairCount * 3) return null;
        let basePower = baseCard == -1 ? -1 : this.getTienlenCardPower(baseCard);
        for (let index = 0; index < ownCards.length; index++) {
            if (this.getTienlenCardPower(ownCards[index]) > basePower) {
                let flag = true;
                for (let i = 0; i < pairCount - 1; ++i) {
                    if (index + i * 3 + 5 >= ownCards.length) {
                        flag = false;
                        break;
                    }
                    let cur = this.getTienlenCardPoint(ownCards[index + i * 3]);
                    let next = this.getTienlenCardPoint(ownCards[index + i * 3 + 1]);
                    let next2 = this.getTienlenCardPoint(ownCards[index + i * 3 + 2]);
                    if (cur != next || next != next2 || next2 == TienlenCardPoint._2) {
                        flag = false;
                        break;
                    }
                    next = this.getTienlenCardPoint(ownCards[index + i * 3 + 3]);
                    if (next - cur != 1) {
                        flag = false;
                        break;
                    }
                    next2 = this.getTienlenCardPoint(ownCards[index + i * 3 + 4]);
                    let next3 = this.getTienlenCardPoint(ownCards[index + i * 3 + 5]);
                    if (next != next2 || next2 != next3 || next3 == TienlenCardPoint._2) {
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    return ownCards.slice(index, index + pairCount * 3)
                }
            }
        }
        return null;
    }


    static haveBomb(ownCards: number[]) {
        if (ownCards.length < 4) return false;
        for (let index = 0; index < ownCards.length - 3; index++) {
            const element = this.getTienlenCardPoint(ownCards[index]);
            const element2 = this.getTienlenCardPoint(ownCards[index + 1]);
            const element3 = this.getTienlenCardPoint(ownCards[index + 2]);
            const element4 = this.getTienlenCardPoint(ownCards[index + 3]);
            if (element == element2 && element2 == element3 && element3 == element4) return true;
        }
        return false;
    }
    //理牌顺序:炸弹>5连对>4连对>3连对>2连对>顺子>3张>对子>单张
    static _tmpSortCards: number[] = [];
    static _tmpSortCards2: number[] = [];
    static _sectionList: any[] = [];
    static sortCards(ownCards: number[]) {
        let copy = this.getTmpList(this._tmpSortCards, ownCards);
        this.sortBigger(copy);
        let result = this._tmpSortCards2;
        result.length = 0;
        this._sectionList.length = 0;
        //收集炸弹
        for (let index = 0; index < copy.length - 3; index++) {
            const element = this.getTienlenCardPoint(copy[index]);
            const element2 = this.getTienlenCardPoint(copy[index + 1]);
            const element3 = this.getTienlenCardPoint(copy[index + 2]);
            const element4 = this.getTienlenCardPoint(copy[index + 3]);
            if (element == element2 && element2 == element3 && element3 == element4 && element != TienlenCardPoint._2) {
                result.push(copy[index]);
                result.push(copy[index + 1]);
                result.push(copy[index + 2]);
                result.push(copy[index + 3]);
                index += 3;
            }
        }
        let count = result.length;
        if (count > 0) {
            this._sectionList.push([TienlenCardType.Four_Bomb, 0, count - 1]);
        }
        this._removeCards(copy, result);
        //收集连对
        this.collectStraightPair(copy, result);
        count = result.length;
        //收集顺子最低3张 最多11张,12张就是天胡
        this.collectStraight(copy, result);
        if (result.length > count) {
            this._sectionList.push([TienlenCardType.Straight, count, result.length - 1]);
            count = result.length;
        }
        //收集三张
        for (let index = 0; index < copy.length - 2; index++) {
            let cur = this.getTienlenCardPoint(copy[index]);
            let next = this.getTienlenCardPoint(copy[index + 1]);
            let next2 = this.getTienlenCardPoint(copy[index + 2]);
            if (cur == next && next == next2 && cur != TienlenCardPoint._2) {
                result.push(copy[index]);
                result.push(copy[index + 1]);
                result.push(copy[index + 2])
                index += 2;
            }
        }
        if (result.length > count) {
            this._sectionList.push([TienlenCardType.Triple, count, result.length - 1]);
            count = result.length;
        }
        this._removeCards(copy, result);
        //收集对子
        for (let index = 0; index < copy.length - 1; index++) {
            let cur = this.getTienlenCardPoint(copy[index]);
            let next = this.getTienlenCardPoint(copy[index + 1]);
            if (cur == next && cur != TienlenCardPoint._2) {
                result.push(copy[index]);
                result.push(copy[index + 1]);
                index += 1;
            }
        }
        if (result.length > count) {
            this._sectionList.push([TienlenCardType.Twin, count, result.length - 1]);
            count = result.length;
        }
        this._removeCards(copy, result);
        //剩下的牌都是散牌和2
        for (let index = 0; index < copy.length; index++) {
            const element = copy[index];
            result.push(element);
        }
        if (result.length > count) {
            this._sectionList.push([TienlenCardType.Single, count, result.length - 1]);
            count = result.length;
        }
        copy.length = 0;
        Object.assign(ownCards, result);
        return this._sectionList;
    }

    //为了收集顺子先剔除三张的2张和对子的1张
    static _prepareCollectStraight(cards: number[]) {
        this._tmpList.length = 0;
        //剔除三张中的两张
        for (let index = 0; index < cards.length - 2; index++) {
            let cur = this.getTienlenCardPoint(cards[index]);
            let next = this.getTienlenCardPoint(cards[index + 1]);
            let next2 = this.getTienlenCardPoint(cards[index + 2]);
            if (cur == next && next == next2 && cur != TienlenCardPoint._2) {
                this._tmpList.push(cards[index]);
                this._tmpList.push(cards[index + 1]);
                index += 2;
            }
        }
        for (let index = 0; index < this._tmpList.length; index++) {
            const element = this._tmpList[index];
            let idx = cards.indexOf(element);
            idx != -1 && cards.splice(idx, 1);;
        }
        //剔除一对中的一张
        for (let index = 0; index < cards.length - 1; index++) {
            let cur = this.getTienlenCardPoint(cards[index]);
            let next = this.getTienlenCardPoint(cards[index + 1]);
            if (cur == next && cur != TienlenCardPoint._2) {
                let idx = this._tmpList.indexOf(cards[index]);
                idx == -1 && this._tmpList.push(cards[index]);
                index += 1;
            }
        }
        for (let index = 0; index < this._tmpList.length; index++) {
            const element = this._tmpList[index];
            let idx = cards.indexOf(element);
            idx != -1 && cards.splice(idx, 1);;
        }
        for (let index = 0; index < this._tmpList.length; index++) {
            const element = this._tmpList[index];
            cards.push(element);
        }
        this._tmpList.length = 0;
    }

    static _prepareCollectStraightPair(cards: number[]) {
        this._tmpList.length = 0;
        for (let index = 0; index < cards.length - 2; index++) {
            let cur = this.getTienlenCardPoint(cards[index]);
            let next = this.getTienlenCardPoint(cards[index + 1]);
            let next2 = this.getTienlenCardPoint(cards[index + 2]);
            if (cur == next && next == next2 && cur != TienlenCardPoint._2) {
                this._tmpList.push(cards[index]);
                index += 2;
            }
        }
        for (let index = 0; index < this._tmpList.length; index++) {
            const element = this._tmpList[index];
            let idx = cards.indexOf(element);
            idx != -1 && cards.splice(idx, 1);;
        }
        for (let index = 0; index < this._tmpList.length; index++) {
            const element = this._tmpList[index];
            cards.push(element);
        }
        this._tmpList.length = 0;
    }

    static collectStraight(cards: number[], result: number[]) {
        this._prepareCollectStraight(cards);
        for (let index = 0; index < cards.length - 2; index++) {
            let flag = true;
            let count = 0;
            for (let i = 0; i < 10; ++i) {
                if (index + i + 1 >= cards.length) break;
                let cur = this.getTienlenCardPoint(cards[index + i]);
                let next = this.getTienlenCardPoint(cards[index + i + 1]);
                if (next - cur != 1 || next == TienlenCardPoint._2) {
                    flag = false;
                    break;
                } else {
                    ++count;
                }
            }
            if (count >= 2) {
                for (let i = 0; i < count + 1; ++i) {
                    result.push(cards[index + i]);
                }
            }
            index += count;
        }
        this._removeCards(cards, result);
        this.sortBigger(cards);
    }

    static collectStraightPair(cards: number[], result: number[]) {
        //为了防止jjQQQkk此类收集连对失败,先剔除3张中的一张到最后
        this._prepareCollectStraightPair(cards);
        let count = result.length;
        this._collectStraightPair(cards, result, 5);
        if (result.length > count) {
            this._sectionList.push([TienlenCardType.Straight_Twin, count, result.length - 1]);
            count = result.length;
        }
        if (13 - result.length >= 8) {
            this._collectStraightPair(cards, result, 4);
        }
        if (result.length > count) {
            this._sectionList.push([TienlenCardType.Straight_Twin, count, result.length - 1]);
            count = result.length;
        }
        if (13 - result.length >= 6) {
            this._collectStraightPair(cards, result, 3);
        }
        if (result.length > count) {
            this._sectionList.push([TienlenCardType.Straight_Twin, count, result.length - 1]);
            count = result.length;
        }
        if (13 - result.length >= 4) {
            this._collectStraightPair(cards, result, 2);
        }
        if (result.length > count) {
            this._sectionList.push([TienlenCardType.Straight_Twin, count, result.length - 1]);
            count = result.length;
        }
        //收集完连对重新排序
        this.sortBigger(cards);
    }

    //收集cards里连对到result里，并移除cards连对的牌
    static _collectStraightPair(cards: number[], result: number[], pairCount: number) {
        for (let index = 0; index < cards.length; index++) {
            let flag = true;
            for (let i = 0; i < pairCount - 1; ++i) {
                if (index + i * 2 + 3 >= cards.length) {
                    flag = false;
                    break;
                }
                let cur = this.getTienlenCardPoint(cards[index + i * 2]);
                let next = this.getTienlenCardPoint(cards[index + i * 2 + 1]);
                if (cur != next || next == TienlenCardPoint._2) {
                    flag = false;
                    break;
                }
                next = this.getTienlenCardPoint(cards[index + i * 2 + 2]);
                if (next - cur != 1) {
                    flag = false;
                    break;
                }
                let next2 = this.getTienlenCardPoint(cards[index + i * 2 + 3]);
                if (next != next2 || next2 == TienlenCardPoint._2) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                for (let i = 0; i < pairCount * 2; ++i)
                    result.push(cards[index + i]);
                index += pairCount * 2 - 1;
            }
        }
        this._removeCards(cards, result);
    }

    static _removeCards(list: number[], removeList: number[]) {
        for (let index = 0; index < removeList.length; index++) {
            const element = removeList[index];
            let idx = list.indexOf(element);
            idx != -1 && list.splice(idx, 1);
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

    static sortColor(cards: number[]) {
        return cards.sort(this._sortColorFunc.bind(this))
    }
    //娱乐版排序:优先显示三张，再显示零牌
    static sortShowCard(cards: number[], traditional: boolean) {
        this.sortBigger(cards);
        let type = this.getTienlenCardType(cards, traditional);
        if (type == TienlenCardType.Triple_One) {
            let pt0 = this.getTienlenCardPoint(cards[0]);
            let pt1 = this.getTienlenCardPoint(cards[1]);
            if (pt0 != pt1) {
                let card = cards.shift();
                cards.push(card);
            }
        } else if (type == TienlenCardType.Triple_Pair) {
            let pt2 = this.getTienlenCardPoint(cards[2]);
            let pt3 = this.getTienlenCardPoint(cards[3]);
            let pt4 = this.getTienlenCardPoint(cards[4]);
            if (pt2 == pt3 && pt3 == pt4) {
                let card0 = cards.shift();
                let card1 = cards.shift();
                cards.push(card0);
                cards.push(card1);
            }
        } else if (type == TienlenCardType.Plane) {
            let list = []
            for (let index = 0; index < cards.length - 2; index++) {
                const element = this.getTienlenCardPoint(cards[index]);
                const element2 = this.getTienlenCardPoint(cards[index + 1]);
                const element3 = this.getTienlenCardPoint(cards[index + 2]);
                if (element == element2 && element2 == element3) {
                    list.push(cards[index]);
                    list.push(cards[index + 1]);
                    list.push(cards[index + 2]);
                }
            }
            for (let index = 0; index < cards.length; index++) {
                const element = cards[index];
                if (list.indexOf(element) == -1) {
                    list.push(cards[index]);
                }
            }
            for (let index = 0; index < list.length; index++) {
                cards[index] = list[index];
            }
        }
    }
    /**
     * 智能出牌提示:只在压牌情况下判断,同时有可用压牌才会调用此方法
     * 炸弹>5连对>4连对>3连对>2连对>顺子>3张>对子>单张
     */
    static getCardTip(ownCards: number[], otherCards: number[], traditional: boolean = true) {
        if (!CardHelper.canCutCards(ownCards, otherCards, traditional)) return [false, []];
        let baseCard = this._getBaseCard(otherCards, traditional);
        let basePower = this.getTienlenCardPower(baseCard);
        let basePoint = this.getTienlenCardPoint(baseCard);
        let selfCards = ownCards.slice();
        let sectionList = this.sortCards(selfCards);
        let type = this.getTienlenCardType(otherCards, traditional)
        if (type == TienlenCardType.Single) {
            let otherPower = this.getTienlenCardPower(otherCards[0]);
            let otherPoint = this.getTienlenCardPoint(otherCards[0]);
            for (let index = sectionList.length - 1; index >= 0; index--) {
                const element = sectionList[index];
                //娱乐玩法普通单牌可以被炸弹压,这里就不拆炸弹，走下面的逻辑
                if (element[0] == TienlenCardType.Four_Bomb && !traditional) continue;
                for (let i = element[1]; i <= element[2]; ++i) {
                    let power = this.getTienlenCardPower(selfCards[i]);
                    if (power > otherPower) {
                        return [true, [selfCards[i]]];
                    }
                }
            }
            if (otherPoint == TienlenCardPoint._2) {
                if (sectionList[0][0] == TienlenCardType.Four_Bomb) return [true, selfCards.slice(0, 4)];
                //获得最小三连对
                let pair = this.getStraightPair(ownCards, 3);
                if (pair) {
                    return [true, pair];
                }
            } else if (!traditional) {
                if (sectionList[0][0] == TienlenCardType.Four_Bomb) return [true, selfCards.slice(0, 4)];
            }
            TienlenHelper.warn("getCardTip single error: ", selfCards, otherCards);
        } else if (type == TienlenCardType.Twin) {
            let otherPower = this.getTienlenCardPower(otherCards[1]);
            let otherPoint = this.getTienlenCardPoint(otherCards[1]);
            let bombList: number[] = [];
            let stList: number[] = [];
            for (let index = sectionList.length - 1; index >= 0; index--) {
                const element = sectionList[index];
                if (element[0] == TienlenCardType.Single) continue;
                //不拆炸弹，3连对及以上
                if (element[0] == TienlenCardType.Four_Bomb) {
                    bombList = bombList.concat(selfCards.slice(element[1], element[2] + 1));
                    continue;
                }
                if (element[0] == TienlenCardType.Straight_Twin && (element[2] - element[1] >= 5)) {
                    stList = stList.concat(selfCards.slice(element[1], element[2] + 1));
                    continue;
                }
                for (let i = element[1]; i <= element[2] - 1; i++) {
                    let power = this.getTienlenCardPower(selfCards[i]);
                    let power2 = this.getTienlenCardPower(selfCards[i + 1]);
                    let point = this.getTienlenCardPoint(selfCards[i]);
                    let point2 = this.getTienlenCardPoint(selfCards[i + 1]);
                    if (point != point2) continue;
                    if (power2 > otherPower) {
                        return [true, selfCards.slice(i, i + 2)];
                    }
                }
            }
            if (otherPoint == TienlenCardPoint._2) {
                if (sectionList[0][0] == TienlenCardType.Four_Bomb) return [true, selfCards.slice(0, 4)];
                //获得最小四连对
                let pair = this.getStraightPair(ownCards, 4);
                if (pair) {
                    return [true, pair];
                }
            } else if (!traditional) {
                if (sectionList[0][0] == TienlenCardType.Four_Bomb) return [true, selfCards.slice(0, 4)];
            }
            //以上没有可压对子，需要按从小到大排序再次排查,去掉3连对里的牌
            for (let index = 0; index < ownCards.length - 1; index++) {
                const element = ownCards[index];
                const element2 = ownCards[index + 1];
                let power = this.getTienlenCardPower(element);
                let power2 = this.getTienlenCardPower(element2);
                let point = this.getTienlenCardPoint(element);
                let point2 = this.getTienlenCardPoint(element2);
                if (point == point2) {
                    if (power2 > basePower) {
                        if (bombList.indexOf(element) != -1 || bombList.indexOf(element2) != -1) continue;
                        if (stList.indexOf(element) != -1 || stList.indexOf(element2) != -1) continue;
                        return [true, ownCards.slice(index, index + 2)];
                    }
                }
            }
            TienlenHelper.warn("getCardTip pair error: ", selfCards, otherCards);
        } else if (type == TienlenCardType.Triple) {
            let bombList: number[] = [];
            let stList: number[] = [];
            for (let index = sectionList.length - 1; index >= 0; index--) {
                const element = sectionList[index];
                if (element[0] == TienlenCardType.Four_Bomb) {
                    bombList = bombList.concat(selfCards.slice(element[1], element[2] + 1));
                    continue;
                }
                if (element[0] == TienlenCardType.Straight_Twin && (element[2] - element[1] >= 5)) {
                    stList = stList.concat(selfCards.slice(element[1], element[2] + 1));
                    continue;
                }
                if (element[0] == TienlenCardType.Triple) {
                    let otherPower = this.getTienlenCardPower(otherCards[0]);
                    for (let i = element[1]; i <= element[2] - 2; i += 3) {
                        let power = this.getTienlenCardPower(selfCards[i]);
                        if (power > otherPower) {
                            return [true, selfCards.slice(i, i + 3)];
                        }
                    }
                }
            }
            //以上没有可压3张，就从小到大排序再找，排除炸弹和3连对
            for (let index = 0; index < ownCards.length - 2; index++) {
                const element = ownCards[index];
                let point = this.getTienlenCardPoint(element);
                if (point > basePoint) {
                    let cur = this.getTienlenCardPoint(element);
                    let next = this.getTienlenCardPoint(ownCards[index + 1]);
                    let next2 = this.getTienlenCardPoint(ownCards[index + 2]);
                    if (cur == next && next == next2) {
                        if (bombList.indexOf(element) != -1) continue;
                        if (stList.indexOf(element) != -1) continue;
                        return [true, ownCards.slice(index, index + 3)]
                    }
                }
            }
            TienlenHelper.warn("getCardTip triple error: ", selfCards, otherCards);
        } else if (type == TienlenCardType.Four_Bomb) {
            for (let index = sectionList.length - 1; index >= 0; index--) {
                const element = sectionList[index];
                if (element[0] == TienlenCardType.Four_Bomb) {
                    let otherPower = this.getTienlenCardPower(otherCards[0]);
                    for (let i = element[1]; i <= element[2] - 3; i += 4) {
                        let power = this.getTienlenCardPower(selfCards[i]);
                        if (power > otherPower) {
                            return [true, selfCards.slice(i, i + 4)];
                        }
                    }
                }
            }
            TienlenHelper.warn("getCardTip bomb error: ", selfCards, otherCards);
        } else if (type == TienlenCardType.Straight_Twin) {
            let list = this.getCutStraightPair(ownCards, baseCard, otherCards.length / 2, traditional);
            if (list) return [true, list];
            TienlenHelper.warn("getCardTip Straight_Twin error: ", selfCards, otherCards);
        } else if (type == TienlenCardType.Straight_Three && !traditional) {
            if (sectionList[0][0] == TienlenCardType.Four_Bomb) return [true, selfCards.slice(0, 4)];
            let reuslt = this.getCutStraightThree(ownCards, baseCard, otherCards.length / 3);
            if (reuslt) return [true, reuslt];
            TienlenHelper.warn("getCardTip stright three error: ", selfCards, otherCards);
        } else if ((type == TienlenCardType.Triple_One || type == TienlenCardType.Triple_Pair) && !traditional) {
            if (sectionList[0][0] == TienlenCardType.Four_Bomb) return [true, selfCards.slice(0, 4)];
            let result = null;
            for (let index = 0; index < ownCards.length; index++) {
                const element = this.getTienlenCardPoint(ownCards[index]);
                if (element > basePoint) {
                    if (index + 2 >= ownCards.length) break;
                    const next = this.getTienlenCardPoint(ownCards[index + 1]);
                    const next2 = this.getTienlenCardPoint(ownCards[index + 2]);
                    if (element == next && next == next2) {
                        result = ownCards.slice(index, index + 3);
                        break;
                    }
                }
            }
            if (!result) {
                TienlenHelper.warn("getCardTip trip error: ", type, selfCards, otherCards);
                return [true, []];
            }
            if (type == TienlenCardType.Triple_One) { //找最小1单张
                for (let index = sectionList.length - 1; index >= 0; index--) {
                    const element = sectionList[index];
                    for (let i = element[1]; i <= element[2]; ++i) {
                        if (result.indexOf(selfCards[i]) == -1) {
                            result.push(selfCards[i]);
                            return [true, result];
                        }
                    }
                }
            } else {
                for (let index = sectionList.length - 1; index >= 0; index--) {
                    const element = sectionList[index];
                    for (let i = element[1]; i <= element[2]; ++i) {
                        if (result.indexOf(selfCards[i]) == -1) {
                            result.push(selfCards[i]);
                            if (result.length == 5) return [true, result];
                        }
                    }
                }
            }
            TienlenHelper.warn("getCardTip trip error: ", type, selfCards, otherCards);
        } else if (type == TienlenCardType.Straight) {
            if (!traditional) {
                if (sectionList[0][0] == TienlenCardType.Four_Bomb) return [true, selfCards.slice(0, 4)];
            }
            //优先按保牌规则下判断有可压顺子
            for (let index = sectionList.length - 1; index >= 0; index--) {
                const element = sectionList[index];
                if (element[0] == TienlenCardType.Straight) {
                    let count = otherCards.length;
                    for (let i = element[1]; i <= element[2] - count + 1; i++) {
                        let power = this.getTienlenCardPower(selfCards[i + count - 1]);
                        let flag = true;
                        if (power > basePower) {
                            for (let j = 0; j < count - 1; ++j) {
                                let cur = this.getTienlenCardPoint(selfCards[i + j]);
                                let next = this.getTienlenCardPoint(selfCards[i + j + 1]);
                                if (next - cur != 1) {
                                    flag = false;
                                    break;
                                }
                            }
                            if (flag) {
                                return [true, selfCards.slice(i, i + count)];
                            }
                        }
                    }

                }
            }
            //保牌规则下没有顺子可压，就找任意可压顺子
            let ownCardsCopy = ownCards.slice();
            this._prepareCollectStraight(ownCardsCopy);
            //先判断手牌有没有点数大的顺子,从大到小比,找到最小的顺子
            let minIndex = -1;
            for (let index = ownCardsCopy.length - 1; index >= otherCards.length - 1; index--) {
                const element = this.getTienlenCardPower(ownCardsCopy[index]);
                if (element > basePower) {
                    let flag = true;
                    for (let i = 0; i < otherCards.length - 1; ++i) {
                        let cur = this.getTienlenCardPoint(ownCardsCopy[index - i]);
                        let next = this.getTienlenCardPoint(ownCardsCopy[index - i - 1]);
                        if (cur - next != 1 || cur == TienlenCardPoint._2) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        minIndex = index;
                    }
                }
            }
            if (minIndex != -1) {
                let list = ownCardsCopy.slice(minIndex - otherCards.length + 1, minIndex + 1);
                return [true, list];
            }
            TienlenHelper.warn("getCardTip straight error: ", selfCards, otherCards);
        } else if (type == TienlenCardType.ColorStraight) {
            if (!traditional) {
                if (sectionList[0][0] == TienlenCardType.Four_Bomb) return [true, selfCards.slice(0, 4)];
            }
            //优先按保牌规则下判断有可压顺子
            for (let index = sectionList.length - 1; index >= 0; index--) {
                const element = sectionList[index];
                if (element[0] == TienlenCardType.Straight) {
                    let minIdx = -1;
                    for (let i = element[2]; i >= element[1]; i--) {
                        const element2 = this.getTienlenCardPower(selfCards[i]);
                        if (element2 > basePower) {
                            let flag = true;
                            for (let j = 0; j < otherCards.length - 1; ++j) {
                                let cur = this.getTienlenCardPoint(selfCards[i - j]);
                                let next = this.getTienlenCardPoint(selfCards[i - j - 1]);
                                let curColor = this.getTienlenCardColor(selfCards[i - j]);
                                let nextColor = this.getTienlenCardColor(selfCards[i - j - 1]);
                                if (cur - next != 1 || cur == TienlenCardPoint._2 || curColor != nextColor) {
                                    flag = false;
                                    break;
                                }
                            }
                            if (flag) {
                                minIdx = i;
                            }
                        }
                    }
                    if (minIdx != -1) {
                        return [true, selfCards.slice(minIdx - otherCards.length + 1, minIdx + 1)];
                    }

                }
            }
            let ownCardsCopy = ownCards.slice();
            CardHelper.sortColor(ownCardsCopy);
            let minIndex = -1;
            for (let index = ownCardsCopy.length - 1; index >= otherCards.length - 1; index--) {
                const element = this.getTienlenCardPower(ownCardsCopy[index]);
                if (element > basePower) {
                    let flag = true;
                    for (let i = 0; i < otherCards.length - 1; ++i) {
                        let cur = this.getTienlenCardPoint(ownCardsCopy[index - i]);
                        let next = this.getTienlenCardPoint(ownCardsCopy[index - i - 1]);
                        let curColor = this.getTienlenCardColor(ownCardsCopy[index - i]);
                        let nextColor = this.getTienlenCardColor(ownCardsCopy[index - i - 1]);
                        if (cur - next != 1 || cur == TienlenCardPoint._2 || curColor != nextColor) {
                            flag = false;
                            break;
                        }
                    }
                    if (flag) {
                        minIndex = index;
                    }
                }
            }
            if (minIndex != -1) {
                return [true, ownCardsCopy.slice(minIndex - otherCards.length + 1, minIndex + 1)];
            }
            TienlenHelper.warn("getCardTip colorstraight error: ", selfCards, otherCards);
        }
        return [true, []];
    }

    static getCardPointResPath(point: CardPoint, color: CardColor): string {
        let prefix = 'rawRes';
        if (point == CardPoint._1)
            point = 14;
        else if (point == CardPoint._2)
            point = 15;
        else if (point != 52 && point != 53)
            point += 1;
        let ziSkin: string = '';
        if (color == CardColor.DIAMOND) {
            ziSkin = 'poker/poker_r' + point + '/spriteFrame';
        } else if (color == CardColor.CLUB) {
            ziSkin = 'poker/poker_b' + point + '/spriteFrame';
        } else if (color == CardColor.HEART) {
            ziSkin = 'poker/poker_r' + point + '/spriteFrame';
        } else if (color == CardColor.SPADE) {
            ziSkin = 'poker/poker_b' + point + '/spriteFrame';
        }
        return `${prefix}/${ziSkin}`;
    }

    static getTienlenCardPointResPath(point: TienlenCardPoint, color: TienlenCardColor): string {
        let prefix = 'rawRes';
        if (point == TienlenCardPoint._A)
            point = 14;
        else if (point == TienlenCardPoint._2)
            point = 15;
        else
            point += 3;
        let ziSkin: string = '';
        if (color == TienlenCardColor.DIAMOND) {
            ziSkin = 'poker/poker_r' + point + '/spriteFrame';
        } else if (color == TienlenCardColor.CLUB) {
            ziSkin = 'poker/poker_b' + point + '/spriteFrame';
        } else if (color == TienlenCardColor.HEART) {
            ziSkin = 'poker/poker_r' + point + '/spriteFrame';
        } else if (color == TienlenCardColor.SPADE) {
            ziSkin = 'poker/poker_b' + point + '/spriteFrame';
        }
        return `${prefix}/${ziSkin}`;
    }

    static getCardColorResPath(color: CardColor): string {
        let prefix = 'rawRes';
        let huaSkin: string = '';
        if (color == CardColor.DIAMOND) {
            huaSkin = 'poker/poker_h4/spriteFrame';
        } else if (color == CardColor.CLUB) {
            huaSkin = 'poker/poker_h3/spriteFrame';
        } else if (color == CardColor.HEART) {
            huaSkin = 'poker/poker_h2/spriteFrame';
        } else if (color == CardColor.SPADE) {
            huaSkin = 'poker/poker_h1/spriteFrame';
        } else if (color == CardColor.BLACKJOKER) {
            huaSkin = 'poker/poker_b16/spriteFrame'
        } else if (color == CardColor.REDJOKER) {
            huaSkin = 'poker/poker_r17/spriteFrame'
        }
        return `${prefix}/${huaSkin}`;
    }

    static getTienlenCardColorResPath(color: TienlenCardColor): string {
        let prefix = 'rawRes';
        let huaSkin: string = '';
        if (color == TienlenCardColor.DIAMOND) {
            huaSkin = 'poker/poker_h4/spriteFrame';
        } else if (color == TienlenCardColor.CLUB) {
            huaSkin = 'poker/poker_h3/spriteFrame';
        } else if (color == TienlenCardColor.HEART) {
            huaSkin = 'poker/poker_h2/spriteFrame';
        } else if (color == TienlenCardColor.SPADE) {
            huaSkin = 'poker/poker_h1/spriteFrame';
        }
        return `${prefix}/${huaSkin}`;
    }

    static async getCardPointRes(point: TienlenCardPoint, color: TienlenCardColor): Promise<SpriteFrame | null> {
        let path = this.getTienlenCardPointResPath(point, color);
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(CardHelper.ABName, path, SpriteFrame);
        return sf;
    }

    static async getCardColorRes(color: TienlenCardColor): Promise<SpriteFrame | null> {
        let path = this.getTienlenCardColorResPath(color);
        let sf = await ResourceHelper.loadResInAB<SpriteFrame>(CardHelper.ABName, path, SpriteFrame);
        return sf;
    }

    static async preloadAllCardRes() {
        await ResourceHelper.preloadDirInAB(CardHelper.ABName, "rawRes/poker", SpriteFrame);
    }

    static isSamePoint(cards1: number[], cards2: number[]) {
        if (!cards1 || !cards2) return false;
        CardHelper.sortBigger(cards1);
        CardHelper.sortBigger(cards2);
        let pt1 = CardHelper.getCardPoint(cards1[cards1.length - 1]);
        let pt2 = CardHelper.getCardPoint(cards2[cards2.length - 1]);
        let type1 = CardHelper.getTienlenCardType(cards1);
        let type2 = CardHelper.getTienlenCardType(cards2);
        return cards1.length == cards2.length && type1 == type2 && pt1 == pt2;
    }

}

