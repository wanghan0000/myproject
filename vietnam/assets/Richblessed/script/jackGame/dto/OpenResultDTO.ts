/**
 * 显示牌
 */
 export default class OpenResultDTO {
    /**
     * 牌的位置
     */
    index: number;
    /**
     * 牌
     */
    card: number;


    constructor(index: number, card: number) {
        this.index = index;
        this.card = card;
    }
}
