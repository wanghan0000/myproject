/**
 * 开始游戏
 */
 export default class StartGameDTO {

    /**
     * 牌
     */
    cards: number[];

    constructor(cards: number[]) {
        this.cards = cards;
    }
}
