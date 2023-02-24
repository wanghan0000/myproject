// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace tournament. */
export namespace tournament {

    /** TOURNAMENTID enum. */
    enum TOURNAMENTID {
        PACKET_TM_ZERO = 0,
        PACKET_TM_CSTMInfo = 2740,
        PACKET_TM_SCTMInfos = 2741,
        PACKET_TM_CSTMRankList = 2742,
        PACKET_TM_SCTMRankList = 2743,
        PACKET_TM_CSSignRace = 2744,
        PACKET_TM_SCSignRace = 2745,
        PACKET_TM_SCSyncSignNum = 2746,
        PACKET_TM_SCPromotionInfo = 2747,
        PACKET_TM_SCTMStart = 2748,
        PACKET_TM_SCTMStop = 2750,
        PACKET_TM_CSTMSeasonInfo = 2751,
        PACKET_TM_SCTMSeasonInfo = 2752,
        PACKET_TM_CSTMSeasonRank = 2753,
        PACKET_TM_SCTMSeasonRank = 2754,
        PACKET_TM_CSTMSeasonAward = 2755,
        PACKET_TM_SCTMSeasonAward = 2756
    }

    /** Properties of a CSTMInfo. */
    interface ICSTMInfo {
    }

    /** Represents a CSTMInfo. */
    class CSTMInfo implements ICSTMInfo {

        /**
         * Constructs a new CSTMInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ICSTMInfo);

        /**
         * Encodes the specified CSTMInfo message. Does not implicitly {@link tournament.CSTMInfo.verify|verify} messages.
         * @param m CSTMInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ICSTMInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSTMInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSTMInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.CSTMInfo;
    }

    /** Properties of an ItemInfo. */
    interface IItemInfo {

        /** ItemInfo ItemId */
        ItemId?: (number|null);

        /** ItemInfo ItemNum */
        ItemNum?: (number|null);

        /** ItemInfo Name */
        Name?: (string|null);
    }

    /** Represents an ItemInfo. */
    class ItemInfo implements IItemInfo {

        /**
         * Constructs a new ItemInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.IItemInfo);

        /** ItemInfo ItemId. */
        public ItemId: number;

        /** ItemInfo ItemNum. */
        public ItemNum: number;

        /** ItemInfo Name. */
        public Name: string;

        /**
         * Encodes the specified ItemInfo message. Does not implicitly {@link tournament.ItemInfo.verify|verify} messages.
         * @param m ItemInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.IItemInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.ItemInfo;
    }

    /** Properties of a MatchInfoAward. */
    interface IMatchInfoAward {

        /** MatchInfoAward ItemInfo */
        ItemInfo?: (tournament.IItemInfo[]|null);

        /** MatchInfoAward Coin */
        Coin?: (number|Long|null);

        /** MatchInfoAward Diamond */
        Diamond?: (number|Long|null);

        /** MatchInfoAward UpLimit */
        UpLimit?: (number|null);

        /** MatchInfoAward DownLimit */
        DownLimit?: (number|null);
    }

    /** Represents a MatchInfoAward. */
    class MatchInfoAward implements IMatchInfoAward {

        /**
         * Constructs a new MatchInfoAward.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.IMatchInfoAward);

        /** MatchInfoAward ItemInfo. */
        public ItemInfo: tournament.IItemInfo[];

        /** MatchInfoAward Coin. */
        public Coin: (number|Long);

        /** MatchInfoAward Diamond. */
        public Diamond: (number|Long);

        /** MatchInfoAward UpLimit. */
        public UpLimit: number;

        /** MatchInfoAward DownLimit. */
        public DownLimit: number;

        /**
         * Encodes the specified MatchInfoAward message. Does not implicitly {@link tournament.MatchInfoAward.verify|verify} messages.
         * @param m MatchInfoAward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.IMatchInfoAward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MatchInfoAward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MatchInfoAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.MatchInfoAward;
    }

    /** Properties of a TMInfo. */
    interface ITMInfo {

        /** TMInfo Id */
        Id?: (number|null);

        /** TMInfo GameFreeId */
        GameFreeId?: (number|null);

        /** TMInfo MatchType */
        MatchType?: (number|null);

        /** TMInfo MatchName */
        MatchName?: (string|null);

        /** TMInfo MatchNumebr */
        MatchNumebr?: (number|null);

        /** TMInfo MatchPromotion */
        MatchPromotion?: (number[]|null);

        /** TMInfo MatchSwitch */
        MatchSwitch?: (number|null);

        /** TMInfo Award */
        Award?: (tournament.IMatchInfoAward[]|null);

        /** TMInfo SignupCostCoin */
        SignupCostCoin?: (number|Long|null);

        /** TMInfo SignupCostDiamond */
        SignupCostDiamond?: (number|Long|null);

        /** TMInfo SignupCostItem */
        SignupCostItem?: (tournament.IItemInfo|null);

        /** TMInfo MatchTimeType */
        MatchTimeType?: (number|null);

        /** TMInfo MatchTimeWeek */
        MatchTimeWeek?: (number[]|null);

        /** TMInfo MatchTimeStartHMS */
        MatchTimeStartHMS?: (number|null);

        /** TMInfo MatchTimeEndHMS */
        MatchTimeEndHMS?: (number|null);

        /** TMInfo MatchTimeStamp */
        MatchTimeStamp?: ((number|Long)[]|null);

        /** TMInfo TitleURL */
        TitleURL?: (string|null);

        /** TMInfo AwardShow */
        AwardShow?: (string|null);

        /** TMInfo Rule */
        Rule?: (string|null);
    }

    /** Represents a TMInfo. */
    class TMInfo implements ITMInfo {

        /**
         * Constructs a new TMInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ITMInfo);

        /** TMInfo Id. */
        public Id: number;

        /** TMInfo GameFreeId. */
        public GameFreeId: number;

        /** TMInfo MatchType. */
        public MatchType: number;

        /** TMInfo MatchName. */
        public MatchName: string;

        /** TMInfo MatchNumebr. */
        public MatchNumebr: number;

        /** TMInfo MatchPromotion. */
        public MatchPromotion: number[];

        /** TMInfo MatchSwitch. */
        public MatchSwitch: number;

        /** TMInfo Award. */
        public Award: tournament.IMatchInfoAward[];

        /** TMInfo SignupCostCoin. */
        public SignupCostCoin: (number|Long);

        /** TMInfo SignupCostDiamond. */
        public SignupCostDiamond: (number|Long);

        /** TMInfo SignupCostItem. */
        public SignupCostItem?: (tournament.IItemInfo|null);

        /** TMInfo MatchTimeType. */
        public MatchTimeType: number;

        /** TMInfo MatchTimeWeek. */
        public MatchTimeWeek: number[];

        /** TMInfo MatchTimeStartHMS. */
        public MatchTimeStartHMS: number;

        /** TMInfo MatchTimeEndHMS. */
        public MatchTimeEndHMS: number;

        /** TMInfo MatchTimeStamp. */
        public MatchTimeStamp: (number|Long)[];

        /** TMInfo TitleURL. */
        public TitleURL: string;

        /** TMInfo AwardShow. */
        public AwardShow: string;

        /** TMInfo Rule. */
        public Rule: string;

        /**
         * Encodes the specified TMInfo message. Does not implicitly {@link tournament.TMInfo.verify|verify} messages.
         * @param m TMInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ITMInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TMInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TMInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.TMInfo;
    }

    /** Properties of a SCTMInfos. */
    interface ISCTMInfos {

        /** SCTMInfos TMInfo */
        TMInfo?: (tournament.ITMInfo[]|null);
    }

    /** Represents a SCTMInfos. */
    class SCTMInfos implements ISCTMInfos {

        /**
         * Constructs a new SCTMInfos.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ISCTMInfos);

        /** SCTMInfos TMInfo. */
        public TMInfo: tournament.ITMInfo[];

        /**
         * Encodes the specified SCTMInfos message. Does not implicitly {@link tournament.SCTMInfos.verify|verify} messages.
         * @param m SCTMInfos message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ISCTMInfos, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTMInfos message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTMInfos
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.SCTMInfos;
    }

    /** Properties of a CSTMRankList. */
    interface ICSTMRankList {

        /** CSTMRankList TMId */
        TMId?: (number|null);
    }

    /** Represents a CSTMRankList. */
    class CSTMRankList implements ICSTMRankList {

        /**
         * Constructs a new CSTMRankList.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ICSTMRankList);

        /** CSTMRankList TMId. */
        public TMId: number;

        /**
         * Encodes the specified CSTMRankList message. Does not implicitly {@link tournament.CSTMRankList.verify|verify} messages.
         * @param m CSTMRankList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ICSTMRankList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSTMRankList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSTMRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.CSTMRankList;
    }

    /** Properties of a TMRank. */
    interface ITMRank {

        /** TMRank RankId */
        RankId?: (number|null);

        /** TMRank RankName */
        RankName?: (string|null);

        /** TMRank WinnerNum */
        WinnerNum?: (number|null);
    }

    /** Represents a TMRank. */
    class TMRank implements ITMRank {

        /**
         * Constructs a new TMRank.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ITMRank);

        /** TMRank RankId. */
        public RankId: number;

        /** TMRank RankName. */
        public RankName: string;

        /** TMRank WinnerNum. */
        public WinnerNum: number;

        /**
         * Encodes the specified TMRank message. Does not implicitly {@link tournament.TMRank.verify|verify} messages.
         * @param m TMRank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ITMRank, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TMRank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TMRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.TMRank;
    }

    /** Properties of a SCTMRankList. */
    interface ISCTMRankList {

        /** SCTMRankList TMId */
        TMId?: (number|null);

        /** SCTMRankList TimeRange */
        TimeRange?: (string|null);

        /** SCTMRankList TMRank */
        TMRank?: (tournament.ITMRank[]|null);
    }

    /** Represents a SCTMRankList. */
    class SCTMRankList implements ISCTMRankList {

        /**
         * Constructs a new SCTMRankList.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ISCTMRankList);

        /** SCTMRankList TMId. */
        public TMId: number;

        /** SCTMRankList TimeRange. */
        public TimeRange: string;

        /** SCTMRankList TMRank. */
        public TMRank: tournament.ITMRank[];

        /**
         * Encodes the specified SCTMRankList message. Does not implicitly {@link tournament.SCTMRankList.verify|verify} messages.
         * @param m SCTMRankList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ISCTMRankList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTMRankList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTMRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.SCTMRankList;
    }

    /** Properties of a CSSignRace. */
    interface ICSSignRace {

        /** CSSignRace OpCode */
        OpCode?: (number|null);

        /** CSSignRace TMId */
        TMId?: (number|null);
    }

    /** Represents a CSSignRace. */
    class CSSignRace implements ICSSignRace {

        /**
         * Constructs a new CSSignRace.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ICSSignRace);

        /** CSSignRace OpCode. */
        public OpCode: number;

        /** CSSignRace TMId. */
        public TMId: number;

        /**
         * Encodes the specified CSSignRace message. Does not implicitly {@link tournament.CSSignRace.verify|verify} messages.
         * @param m CSSignRace message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ICSSignRace, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSSignRace message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSSignRace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.CSSignRace;
    }

    /** Properties of a SCSignRace. */
    interface ISCSignRace {

        /** SCSignRace OpCode */
        OpCode?: (number|null);

        /** SCSignRace RetCode */
        RetCode?: (number|null);
    }

    /** Represents a SCSignRace. */
    class SCSignRace implements ISCSignRace {

        /**
         * Constructs a new SCSignRace.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ISCSignRace);

        /** SCSignRace OpCode. */
        public OpCode: number;

        /** SCSignRace RetCode. */
        public RetCode: number;

        /**
         * Encodes the specified SCSignRace message. Does not implicitly {@link tournament.SCSignRace.verify|verify} messages.
         * @param m SCSignRace message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ISCSignRace, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSignRace message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSignRace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.SCSignRace;
    }

    /** Properties of a SCSyncSignNum. */
    interface ISCSyncSignNum {

        /** SCSyncSignNum SignNum */
        SignNum?: (number|null);

        /** SCSyncSignNum MaxSignNum */
        MaxSignNum?: (number|null);
    }

    /** Represents a SCSyncSignNum. */
    class SCSyncSignNum implements ISCSyncSignNum {

        /**
         * Constructs a new SCSyncSignNum.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ISCSyncSignNum);

        /** SCSyncSignNum SignNum. */
        public SignNum: number;

        /** SCSyncSignNum MaxSignNum. */
        public MaxSignNum: number;

        /**
         * Encodes the specified SCSyncSignNum message. Does not implicitly {@link tournament.SCSyncSignNum.verify|verify} messages.
         * @param m SCSyncSignNum message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ISCSyncSignNum, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCSyncSignNum message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCSyncSignNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.SCSyncSignNum;
    }

    /** Properties of a SCTMStart. */
    interface ISCTMStart {

        /** SCTMStart MatchId */
        MatchId?: (number|null);
    }

    /** Represents a SCTMStart. */
    class SCTMStart implements ISCTMStart {

        /**
         * Constructs a new SCTMStart.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ISCTMStart);

        /** SCTMStart MatchId. */
        public MatchId: number;

        /**
         * Encodes the specified SCTMStart message. Does not implicitly {@link tournament.SCTMStart.verify|verify} messages.
         * @param m SCTMStart message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ISCTMStart, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTMStart message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTMStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.SCTMStart;
    }

    /** Properties of a SCTMStop. */
    interface ISCTMStop {

        /** SCTMStop MatchId */
        MatchId?: (number|null);
    }

    /** Represents a SCTMStop. */
    class SCTMStop implements ISCTMStop {

        /**
         * Constructs a new SCTMStop.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ISCTMStop);

        /** SCTMStop MatchId. */
        public MatchId: number;

        /**
         * Encodes the specified SCTMStop message. Does not implicitly {@link tournament.SCTMStop.verify|verify} messages.
         * @param m SCTMStop message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ISCTMStop, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTMStop message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTMStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.SCTMStop;
    }

    /** Properties of a RankAward. */
    interface IRankAward {

        /** RankAward ItemInfo */
        ItemInfo?: (tournament.IItemInfo[]|null);

        /** RankAward Coin */
        Coin?: (number|Long|null);

        /** RankAward Diamond */
        Diamond?: (number|Long|null);
    }

    /** Represents a RankAward. */
    class RankAward implements IRankAward {

        /**
         * Constructs a new RankAward.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.IRankAward);

        /** RankAward ItemInfo. */
        public ItemInfo: tournament.IItemInfo[];

        /** RankAward Coin. */
        public Coin: (number|Long);

        /** RankAward Diamond. */
        public Diamond: (number|Long);

        /**
         * Encodes the specified RankAward message. Does not implicitly {@link tournament.RankAward.verify|verify} messages.
         * @param m RankAward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.IRankAward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankAward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RankAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.RankAward;
    }

    /** Properties of a SCPromotionInfo. */
    interface ISCPromotionInfo {

        /** SCPromotionInfo RetCode */
        RetCode?: (number|null);

        /** SCPromotionInfo Round */
        Round?: (number|null);

        /** SCPromotionInfo RoundCoin */
        RoundCoin?: (number|null);

        /** SCPromotionInfo RankId */
        RankId?: (number|null);

        /** SCPromotionInfo Record */
        Record?: ({ [k: string]: number }|null);

        /** SCPromotionInfo MatchId */
        MatchId?: (number|null);

        /** SCPromotionInfo MatchPromotion */
        MatchPromotion?: (number[]|null);

        /** SCPromotionInfo RankAward */
        RankAward?: (tournament.IRankAward|null);
    }

    /** Represents a SCPromotionInfo. */
    class SCPromotionInfo implements ISCPromotionInfo {

        /**
         * Constructs a new SCPromotionInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ISCPromotionInfo);

        /** SCPromotionInfo RetCode. */
        public RetCode: number;

        /** SCPromotionInfo Round. */
        public Round: number;

        /** SCPromotionInfo RoundCoin. */
        public RoundCoin: number;

        /** SCPromotionInfo RankId. */
        public RankId: number;

        /** SCPromotionInfo Record. */
        public Record: { [k: string]: number };

        /** SCPromotionInfo MatchId. */
        public MatchId: number;

        /** SCPromotionInfo MatchPromotion. */
        public MatchPromotion: number[];

        /** SCPromotionInfo RankAward. */
        public RankAward?: (tournament.IRankAward|null);

        /**
         * Encodes the specified SCPromotionInfo message. Does not implicitly {@link tournament.SCPromotionInfo.verify|verify} messages.
         * @param m SCPromotionInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ISCPromotionInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPromotionInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPromotionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.SCPromotionInfo;
    }

    /** Properties of a CSTMSeasonInfo. */
    interface ICSTMSeasonInfo {
    }

    /** Represents a CSTMSeasonInfo. */
    class CSTMSeasonInfo implements ICSTMSeasonInfo {

        /**
         * Constructs a new CSTMSeasonInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ICSTMSeasonInfo);

        /**
         * Encodes the specified CSTMSeasonInfo message. Does not implicitly {@link tournament.CSTMSeasonInfo.verify|verify} messages.
         * @param m CSTMSeasonInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ICSTMSeasonInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSTMSeasonInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSTMSeasonInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.CSTMSeasonInfo;
    }

    /** Properties of a SCTMSeasonInfo. */
    interface ISCTMSeasonInfo {

        /** SCTMSeasonInfo Id */
        Id?: (number|null);

        /** SCTMSeasonInfo SeasonTimeStamp */
        SeasonTimeStamp?: ((number|Long)[]|null);

        /** SCTMSeasonInfo Lv */
        Lv?: (number|null);

        /** SCTMSeasonInfo LastLv */
        LastLv?: (number|null);

        /** SCTMSeasonInfo IsAward */
        IsAward?: (boolean|null);
    }

    /** Represents a SCTMSeasonInfo. */
    class SCTMSeasonInfo implements ISCTMSeasonInfo {

        /**
         * Constructs a new SCTMSeasonInfo.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ISCTMSeasonInfo);

        /** SCTMSeasonInfo Id. */
        public Id: number;

        /** SCTMSeasonInfo SeasonTimeStamp. */
        public SeasonTimeStamp: (number|Long)[];

        /** SCTMSeasonInfo Lv. */
        public Lv: number;

        /** SCTMSeasonInfo LastLv. */
        public LastLv: number;

        /** SCTMSeasonInfo IsAward. */
        public IsAward: boolean;

        /**
         * Encodes the specified SCTMSeasonInfo message. Does not implicitly {@link tournament.SCTMSeasonInfo.verify|verify} messages.
         * @param m SCTMSeasonInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ISCTMSeasonInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTMSeasonInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTMSeasonInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.SCTMSeasonInfo;
    }

    /** Properties of a SeasonRank. */
    interface ISeasonRank {

        /** SeasonRank Snid */
        Snid?: (number|null);

        /** SeasonRank Name */
        Name?: (string|null);

        /** SeasonRank Lv */
        Lv?: (number|null);

        /** SeasonRank Rank */
        Rank?: (number|null);
    }

    /** Represents a SeasonRank. */
    class SeasonRank implements ISeasonRank {

        /**
         * Constructs a new SeasonRank.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ISeasonRank);

        /** SeasonRank Snid. */
        public Snid: number;

        /** SeasonRank Name. */
        public Name: string;

        /** SeasonRank Lv. */
        public Lv: number;

        /** SeasonRank Rank. */
        public Rank: number;

        /**
         * Encodes the specified SeasonRank message. Does not implicitly {@link tournament.SeasonRank.verify|verify} messages.
         * @param m SeasonRank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ISeasonRank, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SeasonRank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SeasonRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.SeasonRank;
    }

    /** Properties of a CSTMSeasonRank. */
    interface ICSTMSeasonRank {
    }

    /** Represents a CSTMSeasonRank. */
    class CSTMSeasonRank implements ICSTMSeasonRank {

        /**
         * Constructs a new CSTMSeasonRank.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ICSTMSeasonRank);

        /**
         * Encodes the specified CSTMSeasonRank message. Does not implicitly {@link tournament.CSTMSeasonRank.verify|verify} messages.
         * @param m CSTMSeasonRank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ICSTMSeasonRank, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSTMSeasonRank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSTMSeasonRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.CSTMSeasonRank;
    }

    /** Properties of a SCTMSeasonRank. */
    interface ISCTMSeasonRank {

        /** SCTMSeasonRank ReasonRanks */
        ReasonRanks?: (tournament.ISeasonRank[]|null);
    }

    /** Represents a SCTMSeasonRank. */
    class SCTMSeasonRank implements ISCTMSeasonRank {

        /**
         * Constructs a new SCTMSeasonRank.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ISCTMSeasonRank);

        /** SCTMSeasonRank ReasonRanks. */
        public ReasonRanks: tournament.ISeasonRank[];

        /**
         * Encodes the specified SCTMSeasonRank message. Does not implicitly {@link tournament.SCTMSeasonRank.verify|verify} messages.
         * @param m SCTMSeasonRank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ISCTMSeasonRank, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTMSeasonRank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTMSeasonRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.SCTMSeasonRank;
    }

    /** Properties of a CSTMSeasonAward. */
    interface ICSTMSeasonAward {

        /** CSTMSeasonAward Lv */
        Lv?: (number|null);
    }

    /** Represents a CSTMSeasonAward. */
    class CSTMSeasonAward implements ICSTMSeasonAward {

        /**
         * Constructs a new CSTMSeasonAward.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ICSTMSeasonAward);

        /** CSTMSeasonAward Lv. */
        public Lv: number;

        /**
         * Encodes the specified CSTMSeasonAward message. Does not implicitly {@link tournament.CSTMSeasonAward.verify|verify} messages.
         * @param m CSTMSeasonAward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ICSTMSeasonAward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSTMSeasonAward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSTMSeasonAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.CSTMSeasonAward;
    }

    /** Properties of a SCTMSeasonAward. */
    interface ISCTMSeasonAward {

        /** SCTMSeasonAward Lv */
        Lv?: (number|null);

        /** SCTMSeasonAward Code */
        Code?: (number|null);
    }

    /** Represents a SCTMSeasonAward. */
    class SCTMSeasonAward implements ISCTMSeasonAward {

        /**
         * Constructs a new SCTMSeasonAward.
         * @param [p] Properties to set
         */
        constructor(p?: tournament.ISCTMSeasonAward);

        /** SCTMSeasonAward Lv. */
        public Lv: number;

        /** SCTMSeasonAward Code. */
        public Code: number;

        /**
         * Encodes the specified SCTMSeasonAward message. Does not implicitly {@link tournament.SCTMSeasonAward.verify|verify} messages.
         * @param m SCTMSeasonAward message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: tournament.ISCTMSeasonAward, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCTMSeasonAward message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCTMSeasonAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): tournament.SCTMSeasonAward;
    }
}
