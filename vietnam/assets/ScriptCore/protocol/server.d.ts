// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace server. */
export namespace server {

    /** Properties of a DB_ActSign. */
    interface IDB_ActSign {

        /** DB_ActSign Id */
        Id?: (number | null);

        /** DB_ActSign Type */
        Type?: (number | null);

        /** DB_ActSign Name */
        Name?: (number | null);

        /** DB_ActSign Item_Id */
        Item_Id?: (number | null);

        /** DB_ActSign Grade */
        Grade?: (number | null);
    }

    /** Represents a DB_ActSign. */
    class DB_ActSign implements IDB_ActSign {

        /**
         * Constructs a new DB_ActSign.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_ActSign);

        /** DB_ActSign Id. */
        public Id: number;

        /** DB_ActSign Type. */
        public Type: number;

        /** DB_ActSign Name. */
        public Name: number;

        /** DB_ActSign Item_Id. */
        public Item_Id: number;

        /** DB_ActSign Grade. */
        public Grade: number;

        /**
         * Encodes the specified DB_ActSign message. Does not implicitly {@link server.DB_ActSign.verify|verify} messages.
         * @param m DB_ActSign message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_ActSign, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_ActSign message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_ActSign
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_ActSign;
    }

    /** Properties of a DB_ActSignArray. */
    interface IDB_ActSignArray {

        /** DB_ActSignArray Arr */
        Arr?: (server.IDB_ActSign[] | null);
    }

    /** Represents a DB_ActSignArray. */
    class DB_ActSignArray implements IDB_ActSignArray {

        /**
         * Constructs a new DB_ActSignArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_ActSignArray);

        /** DB_ActSignArray Arr. */
        public Arr: server.IDB_ActSign[];

        /**
         * Encodes the specified DB_ActSignArray message. Does not implicitly {@link server.DB_ActSignArray.verify|verify} messages.
         * @param m DB_ActSignArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_ActSignArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_ActSignArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_ActSignArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_ActSignArray;
    }

    /** Properties of a DB_Activity1. */
    interface IDB_Activity1 {

        /** DB_Activity1 Id */
        Id?: (number | null);

        /** DB_Activity1 Parameter */
        Parameter?: (number | null);

        /** DB_Activity1 Turn */
        Turn?: (number | null);

        /** DB_Activity1 Title */
        Title?: (string | null);

        /** DB_Activity1 Costype */
        Costype?: (number | null);

        /** DB_Activity1 Costp */
        Costp?: (number | null);

        /** DB_Activity1 Cost */
        Cost?: (number | null);

        /** DB_Activity1 Typee */
        Typee?: (number | null);

        /** DB_Activity1 Propid */
        Propid?: (number | null);

        /** DB_Activity1 Value */
        Value?: (number | null);

        /** DB_Activity1 Getype */
        Getype?: (number | null);
    }

    /** Represents a DB_Activity1. */
    class DB_Activity1 implements IDB_Activity1 {

        /**
         * Constructs a new DB_Activity1.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Activity1);

        /** DB_Activity1 Id. */
        public Id: number;

        /** DB_Activity1 Parameter. */
        public Parameter: number;

        /** DB_Activity1 Turn. */
        public Turn: number;

        /** DB_Activity1 Title. */
        public Title: string;

        /** DB_Activity1 Costype. */
        public Costype: number;

        /** DB_Activity1 Costp. */
        public Costp: number;

        /** DB_Activity1 Cost. */
        public Cost: number;

        /** DB_Activity1 Typee. */
        public Typee: number;

        /** DB_Activity1 Propid. */
        public Propid: number;

        /** DB_Activity1 Value. */
        public Value: number;

        /** DB_Activity1 Getype. */
        public Getype: number;

        /**
         * Encodes the specified DB_Activity1 message. Does not implicitly {@link server.DB_Activity1.verify|verify} messages.
         * @param m DB_Activity1 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Activity1, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Activity1 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Activity1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Activity1;
    }

    /** Properties of a DB_Activity1Array. */
    interface IDB_Activity1Array {

        /** DB_Activity1Array Arr */
        Arr?: (server.IDB_Activity1[] | null);
    }

    /** Represents a DB_Activity1Array. */
    class DB_Activity1Array implements IDB_Activity1Array {

        /**
         * Constructs a new DB_Activity1Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Activity1Array);

        /** DB_Activity1Array Arr. */
        public Arr: server.IDB_Activity1[];

        /**
         * Encodes the specified DB_Activity1Array message. Does not implicitly {@link server.DB_Activity1Array.verify|verify} messages.
         * @param m DB_Activity1Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Activity1Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Activity1Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Activity1Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Activity1Array;
    }

    /** Properties of a DB_AnimalColor. */
    interface IDB_AnimalColor {

        /** DB_AnimalColor Id */
        Id?: (number | null);

        /** DB_AnimalColor Desc */
        Desc?: (string | null);

        /** DB_AnimalColor ColorChance */
        ColorChance?: (number[] | null);
    }

    /** Represents a DB_AnimalColor. */
    class DB_AnimalColor implements IDB_AnimalColor {

        /**
         * Constructs a new DB_AnimalColor.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_AnimalColor);

        /** DB_AnimalColor Id. */
        public Id: number;

        /** DB_AnimalColor Desc. */
        public Desc: string;

        /** DB_AnimalColor ColorChance. */
        public ColorChance: number[];

        /**
         * Encodes the specified DB_AnimalColor message. Does not implicitly {@link server.DB_AnimalColor.verify|verify} messages.
         * @param m DB_AnimalColor message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_AnimalColor, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_AnimalColor message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_AnimalColor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_AnimalColor;
    }

    /** Properties of a DB_AnimalColorArray. */
    interface IDB_AnimalColorArray {

        /** DB_AnimalColorArray Arr */
        Arr?: (server.IDB_AnimalColor[] | null);
    }

    /** Represents a DB_AnimalColorArray. */
    class DB_AnimalColorArray implements IDB_AnimalColorArray {

        /**
         * Constructs a new DB_AnimalColorArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_AnimalColorArray);

        /** DB_AnimalColorArray Arr. */
        public Arr: server.IDB_AnimalColor[];

        /**
         * Encodes the specified DB_AnimalColorArray message. Does not implicitly {@link server.DB_AnimalColorArray.verify|verify} messages.
         * @param m DB_AnimalColorArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_AnimalColorArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_AnimalColorArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_AnimalColorArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_AnimalColorArray;
    }

    /** Properties of a DB_ClientVer. */
    interface IDB_ClientVer {

        /** DB_ClientVer Id */
        Id?: (number | null);

        /** DB_ClientVer PackageFlag */
        PackageFlag?: (string | null);

        /** DB_ClientVer PackVers */
        PackVers?: (string | null);

        /** DB_ClientVer GameVers */
        GameVers?: (string | null);
    }

    /** Represents a DB_ClientVer. */
    class DB_ClientVer implements IDB_ClientVer {

        /**
         * Constructs a new DB_ClientVer.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_ClientVer);

        /** DB_ClientVer Id. */
        public Id: number;

        /** DB_ClientVer PackageFlag. */
        public PackageFlag: string;

        /** DB_ClientVer PackVers. */
        public PackVers: string;

        /** DB_ClientVer GameVers. */
        public GameVers: string;

        /**
         * Encodes the specified DB_ClientVer message. Does not implicitly {@link server.DB_ClientVer.verify|verify} messages.
         * @param m DB_ClientVer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_ClientVer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_ClientVer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_ClientVer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_ClientVer;
    }

    /** Properties of a DB_ClientVerArray. */
    interface IDB_ClientVerArray {

        /** DB_ClientVerArray Arr */
        Arr?: (server.IDB_ClientVer[] | null);
    }

    /** Represents a DB_ClientVerArray. */
    class DB_ClientVerArray implements IDB_ClientVerArray {

        /**
         * Constructs a new DB_ClientVerArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_ClientVerArray);

        /** DB_ClientVerArray Arr. */
        public Arr: server.IDB_ClientVer[];

        /**
         * Encodes the specified DB_ClientVerArray message. Does not implicitly {@link server.DB_ClientVerArray.verify|verify} messages.
         * @param m DB_ClientVerArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_ClientVerArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_ClientVerArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_ClientVerArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_ClientVerArray;
    }

    /** Properties of a DB_Createroom. */
    interface IDB_Createroom {

        /** DB_Createroom Id */
        Id?: (number | null);

        /** DB_Createroom GameId */
        GameId?: (number | null);

        /** DB_Createroom GameSite */
        GameSite?: (number | null);

        /** DB_Createroom GoldRange */
        GoldRange?: (number[] | null);

        /** DB_Createroom BetRange */
        BetRange?: (number[] | null);
    }

    /** Represents a DB_Createroom. */
    class DB_Createroom implements IDB_Createroom {

        /**
         * Constructs a new DB_Createroom.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Createroom);

        /** DB_Createroom Id. */
        public Id: number;

        /** DB_Createroom GameId. */
        public GameId: number;

        /** DB_Createroom GameSite. */
        public GameSite: number;

        /** DB_Createroom GoldRange. */
        public GoldRange: number[];

        /** DB_Createroom BetRange. */
        public BetRange: number[];

        /**
         * Encodes the specified DB_Createroom message. Does not implicitly {@link server.DB_Createroom.verify|verify} messages.
         * @param m DB_Createroom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Createroom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Createroom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Createroom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Createroom;
    }

    /** Properties of a DB_CreateroomArray. */
    interface IDB_CreateroomArray {

        /** DB_CreateroomArray Arr */
        Arr?: (server.IDB_Createroom[] | null);
    }

    /** Represents a DB_CreateroomArray. */
    class DB_CreateroomArray implements IDB_CreateroomArray {

        /**
         * Constructs a new DB_CreateroomArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_CreateroomArray);

        /** DB_CreateroomArray Arr. */
        public Arr: server.IDB_Createroom[];

        /**
         * Encodes the specified DB_CreateroomArray message. Does not implicitly {@link server.DB_CreateroomArray.verify|verify} messages.
         * @param m DB_CreateroomArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_CreateroomArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_CreateroomArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_CreateroomArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_CreateroomArray;
    }

    /** Properties of a DB_Fish. */
    interface IDB_Fish {

        /** DB_Fish Id */
        Id?: (number | null);

        /** DB_Fish Name */
        Name?: (string | null);

        /** DB_Fish NameE */
        NameE?: (string | null);

        /** DB_Fish Gold */
        Gold?: (number | null);

        /** DB_Fish Icon */
        Icon?: (string | null);

        /** DB_Fish Speed */
        Speed?: (number | null);

        /** DB_Fish Exp */
        Exp?: (number | null);

        /** DB_Fish FrameCnt */
        FrameCnt?: (number | null);

        /** DB_Fish FrameDelay */
        FrameDelay?: (number | null);

        /** DB_Fish Rate */
        Rate?: (number | null);

        /** DB_Fish ShowType */
        ShowType?: (number | null);

        /** DB_Fish Show */
        Show?: (number | null);

        /** DB_Fish ShowScale */
        ShowScale?: (number | null);

        /** DB_Fish ShowPos */
        ShowPos?: (number[] | null);

        /** DB_Fish DieSound */
        DieSound?: (string | null);

        /** DB_Fish DieFrame */
        DieFrame?: (number | null);

        /** DB_Fish DieRotate */
        DieRotate?: (number | null);

        /** DB_Fish DieEffect */
        DieEffect?: (number | null);

        /** DB_Fish DieShake */
        DieShake?: (number | null);

        /** DB_Fish ShakeRange */
        ShakeRange?: (number | null);

        /** DB_Fish Shape */
        Shape?: (string | null);

        /** DB_Fish IsBoss */
        IsBoss?: (number | null);

        /** DB_Fish ResId */
        ResId?: (number | null);

        /** DB_Fish DieParticle */
        DieParticle?: (string | null);

        /** DB_Fish GroupShape */
        GroupShape?: (number | null);

        /** DB_Fish GroupFishes */
        GroupFishes?: (number[] | null);

        /** DB_Fish Zorder */
        Zorder?: (number | null);

        /** DB_Fish ResPng */
        ResPng?: (string | null);

        /** DB_Fish ResPlist */
        ResPlist?: (string | null);

        /** DB_Fish ExportJson */
        ExportJson?: (string | null);

        /** DB_Fish AimIcon */
        AimIcon?: (string | null);

        /** DB_Fish GameId */
        GameId?: (number | null);

        /** DB_Fish Sort */
        Sort?: (number | null);

        /** DB_Fish FishType */
        FishType?: (number | null);

        /** DB_Fish RandomCoin */
        RandomCoin?: (string | null);
    }

    /** Represents a DB_Fish. */
    class DB_Fish implements IDB_Fish {

        /**
         * Constructs a new DB_Fish.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Fish);

        /** DB_Fish Id. */
        public Id: number;

        /** DB_Fish Name. */
        public Name: string;

        /** DB_Fish NameE. */
        public NameE: string;

        /** DB_Fish Gold. */
        public Gold: number;

        /** DB_Fish Icon. */
        public Icon: string;

        /** DB_Fish Speed. */
        public Speed: number;

        /** DB_Fish Exp. */
        public Exp: number;

        /** DB_Fish FrameCnt. */
        public FrameCnt: number;

        /** DB_Fish FrameDelay. */
        public FrameDelay: number;

        /** DB_Fish Rate. */
        public Rate: number;

        /** DB_Fish ShowType. */
        public ShowType: number;

        /** DB_Fish Show. */
        public Show: number;

        /** DB_Fish ShowScale. */
        public ShowScale: number;

        /** DB_Fish ShowPos. */
        public ShowPos: number[];

        /** DB_Fish DieSound. */
        public DieSound: string;

        /** DB_Fish DieFrame. */
        public DieFrame: number;

        /** DB_Fish DieRotate. */
        public DieRotate: number;

        /** DB_Fish DieEffect. */
        public DieEffect: number;

        /** DB_Fish DieShake. */
        public DieShake: number;

        /** DB_Fish ShakeRange. */
        public ShakeRange: number;

        /** DB_Fish Shape. */
        public Shape: string;

        /** DB_Fish IsBoss. */
        public IsBoss: number;

        /** DB_Fish ResId. */
        public ResId: number;

        /** DB_Fish DieParticle. */
        public DieParticle: string;

        /** DB_Fish GroupShape. */
        public GroupShape: number;

        /** DB_Fish GroupFishes. */
        public GroupFishes: number[];

        /** DB_Fish Zorder. */
        public Zorder: number;

        /** DB_Fish ResPng. */
        public ResPng: string;

        /** DB_Fish ResPlist. */
        public ResPlist: string;

        /** DB_Fish ExportJson. */
        public ExportJson: string;

        /** DB_Fish AimIcon. */
        public AimIcon: string;

        /** DB_Fish GameId. */
        public GameId: number;

        /** DB_Fish Sort. */
        public Sort: number;

        /** DB_Fish FishType. */
        public FishType: number;

        /** DB_Fish RandomCoin. */
        public RandomCoin: string;

        /**
         * Encodes the specified DB_Fish message. Does not implicitly {@link server.DB_Fish.verify|verify} messages.
         * @param m DB_Fish message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Fish, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Fish message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Fish
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Fish;
    }

    /** Properties of a DB_FishArray. */
    interface IDB_FishArray {

        /** DB_FishArray Arr */
        Arr?: (server.IDB_Fish[] | null);
    }

    /** Represents a DB_FishArray. */
    class DB_FishArray implements IDB_FishArray {

        /**
         * Constructs a new DB_FishArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FishArray);

        /** DB_FishArray Arr. */
        public Arr: server.IDB_Fish[];

        /**
         * Encodes the specified DB_FishArray message. Does not implicitly {@link server.DB_FishArray.verify|verify} messages.
         * @param m DB_FishArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FishArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FishArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FishArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FishArray;
    }

    /** Properties of a DB_FishHP. */
    interface IDB_FishHP {

        /** DB_FishHP Id */
        Id?: (number | null);

        /** DB_FishHP Name */
        Name?: (string | null);

        /** DB_FishHP Gold */
        Gold?: (number[] | null);

        /** DB_FishHP Rate */
        Rate?: (number | null);

        /** DB_FishHP Ratio */
        Ratio?: (number | null);

        /** DB_FishHP Ratio1 */
        Ratio1?: (number[] | null);
    }

    /** Represents a DB_FishHP. */
    class DB_FishHP implements IDB_FishHP {

        /**
         * Constructs a new DB_FishHP.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FishHP);

        /** DB_FishHP Id. */
        public Id: number;

        /** DB_FishHP Name. */
        public Name: string;

        /** DB_FishHP Gold. */
        public Gold: number[];

        /** DB_FishHP Rate. */
        public Rate: number;

        /** DB_FishHP Ratio. */
        public Ratio: number;

        /** DB_FishHP Ratio1. */
        public Ratio1: number[];

        /**
         * Encodes the specified DB_FishHP message. Does not implicitly {@link server.DB_FishHP.verify|verify} messages.
         * @param m DB_FishHP message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FishHP, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FishHP message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FishHP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FishHP;
    }

    /** Properties of a DB_FishHPArray. */
    interface IDB_FishHPArray {

        /** DB_FishHPArray Arr */
        Arr?: (server.IDB_FishHP[] | null);
    }

    /** Represents a DB_FishHPArray. */
    class DB_FishHPArray implements IDB_FishHPArray {

        /**
         * Constructs a new DB_FishHPArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FishHPArray);

        /** DB_FishHPArray Arr. */
        public Arr: server.IDB_FishHP[];

        /**
         * Encodes the specified DB_FishHPArray message. Does not implicitly {@link server.DB_FishHPArray.verify|verify} messages.
         * @param m DB_FishHPArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FishHPArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FishHPArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FishHPArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FishHPArray;
    }

    /** Properties of a DB_FishHP2. */
    interface IDB_FishHP2 {

        /** DB_FishHP2 Id */
        Id?: (number | null);

        /** DB_FishHP2 Fishid */
        Fishid?: (number | null);

        /** DB_FishHP2 Name */
        Name?: (string | null);

        /** DB_FishHP2 Gold */
        Gold?: (number[] | null);

        /** DB_FishHP2 Level */
        Level?: (number[] | null);
    }

    /** Represents a DB_FishHP2. */
    class DB_FishHP2 implements IDB_FishHP2 {

        /**
         * Constructs a new DB_FishHP2.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FishHP2);

        /** DB_FishHP2 Id. */
        public Id: number;

        /** DB_FishHP2 Fishid. */
        public Fishid: number;

        /** DB_FishHP2 Name. */
        public Name: string;

        /** DB_FishHP2 Gold. */
        public Gold: number[];

        /** DB_FishHP2 Level. */
        public Level: number[];

        /**
         * Encodes the specified DB_FishHP2 message. Does not implicitly {@link server.DB_FishHP2.verify|verify} messages.
         * @param m DB_FishHP2 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FishHP2, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FishHP2 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FishHP2
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FishHP2;
    }

    /** Properties of a DB_FishHP2Array. */
    interface IDB_FishHP2Array {

        /** DB_FishHP2Array Arr */
        Arr?: (server.IDB_FishHP2[] | null);
    }

    /** Represents a DB_FishHP2Array. */
    class DB_FishHP2Array implements IDB_FishHP2Array {

        /**
         * Constructs a new DB_FishHP2Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FishHP2Array);

        /** DB_FishHP2Array Arr. */
        public Arr: server.IDB_FishHP2[];

        /**
         * Encodes the specified DB_FishHP2Array message. Does not implicitly {@link server.DB_FishHP2Array.verify|verify} messages.
         * @param m DB_FishHP2Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FishHP2Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FishHP2Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FishHP2Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FishHP2Array;
    }

    /** Properties of a DB_FishPool. */
    interface IDB_FishPool {

        /** DB_FishPool Id */
        Id?: (number | null);

        /** DB_FishPool SceneType */
        SceneType?: (number | null);

        /** DB_FishPool PoolType */
        PoolType?: (number | null);

        /** DB_FishPool PoolMin */
        PoolMin?: (number | null);

        /** DB_FishPool PoolMax */
        PoolMax?: (number | null);

        /** DB_FishPool RateAdd */
        RateAdd?: (number | null);
    }

    /** Represents a DB_FishPool. */
    class DB_FishPool implements IDB_FishPool {

        /**
         * Constructs a new DB_FishPool.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FishPool);

        /** DB_FishPool Id. */
        public Id: number;

        /** DB_FishPool SceneType. */
        public SceneType: number;

        /** DB_FishPool PoolType. */
        public PoolType: number;

        /** DB_FishPool PoolMin. */
        public PoolMin: number;

        /** DB_FishPool PoolMax. */
        public PoolMax: number;

        /** DB_FishPool RateAdd. */
        public RateAdd: number;

        /**
         * Encodes the specified DB_FishPool message. Does not implicitly {@link server.DB_FishPool.verify|verify} messages.
         * @param m DB_FishPool message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FishPool, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FishPool message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FishPool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FishPool;
    }

    /** Properties of a DB_FishPoolArray. */
    interface IDB_FishPoolArray {

        /** DB_FishPoolArray Arr */
        Arr?: (server.IDB_FishPool[] | null);
    }

    /** Represents a DB_FishPoolArray. */
    class DB_FishPoolArray implements IDB_FishPoolArray {

        /**
         * Constructs a new DB_FishPoolArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FishPoolArray);

        /** DB_FishPoolArray Arr. */
        public Arr: server.IDB_FishPool[];

        /**
         * Encodes the specified DB_FishPoolArray message. Does not implicitly {@link server.DB_FishPoolArray.verify|verify} messages.
         * @param m DB_FishPoolArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FishPoolArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FishPoolArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FishPoolArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FishPoolArray;
    }

    /** Properties of a DB_FishRate. */
    interface IDB_FishRate {

        /** DB_FishRate Id */
        Id?: (number | null);

        /** DB_FishRate Name */
        Name?: (string | null);

        /** DB_FishRate Gold */
        Gold?: (number[] | null);

        /** DB_FishRate RunGold */
        RunGold?: (number | null);

        /** DB_FishRate RateA */
        RateA?: (number[] | null);

        /** DB_FishRate RateB */
        RateB?: (number[] | null);

        /** DB_FishRate RateC */
        RateC?: (number[] | null);

        /** DB_FishRate PoolType */
        PoolType?: (number | null);
    }

    /** Represents a DB_FishRate. */
    class DB_FishRate implements IDB_FishRate {

        /**
         * Constructs a new DB_FishRate.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FishRate);

        /** DB_FishRate Id. */
        public Id: number;

        /** DB_FishRate Name. */
        public Name: string;

        /** DB_FishRate Gold. */
        public Gold: number[];

        /** DB_FishRate RunGold. */
        public RunGold: number;

        /** DB_FishRate RateA. */
        public RateA: number[];

        /** DB_FishRate RateB. */
        public RateB: number[];

        /** DB_FishRate RateC. */
        public RateC: number[];

        /** DB_FishRate PoolType. */
        public PoolType: number;

        /**
         * Encodes the specified DB_FishRate message. Does not implicitly {@link server.DB_FishRate.verify|verify} messages.
         * @param m DB_FishRate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FishRate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FishRate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FishRate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FishRate;
    }

    /** Properties of a DB_FishRateArray. */
    interface IDB_FishRateArray {

        /** DB_FishRateArray Arr */
        Arr?: (server.IDB_FishRate[] | null);
    }

    /** Represents a DB_FishRateArray. */
    class DB_FishRateArray implements IDB_FishRateArray {

        /**
         * Constructs a new DB_FishRateArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FishRateArray);

        /** DB_FishRateArray Arr. */
        public Arr: server.IDB_FishRate[];

        /**
         * Encodes the specified DB_FishRateArray message. Does not implicitly {@link server.DB_FishRateArray.verify|verify} messages.
         * @param m DB_FishRateArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FishRateArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FishRateArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FishRateArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FishRateArray;
    }

    /** Properties of a DB_FishRoom. */
    interface IDB_FishRoom {

        /** DB_FishRoom Id */
        Id?: (number | null);

        /** DB_FishRoom RoomId */
        RoomId?: (number | null);

        /** DB_FishRoom Name */
        Name?: (string | null);

        /** DB_FishRoom SumGold1 */
        SumGold1?: (string | null);

        /** DB_FishRoom SumGold2 */
        SumGold2?: (string | null);

        /** DB_FishRoom SumGold3 */
        SumGold3?: (string | null);

        /** DB_FishRoom SumGold4 */
        SumGold4?: (string | null);

        /** DB_FishRoom SumGold5 */
        SumGold5?: (string | null);

        /** DB_FishRoom BossCDTime */
        BossCDTime?: (number | null);

        /** DB_FishRoom LittleBossCDTime */
        LittleBossCDTime?: (number | null);

        /** DB_FishRoom EnableBoss */
        EnableBoss?: (string | null);

        /** DB_FishRoom EnableLittleBoss */
        EnableLittleBoss?: (string | null);
    }

    /** Represents a DB_FishRoom. */
    class DB_FishRoom implements IDB_FishRoom {

        /**
         * Constructs a new DB_FishRoom.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FishRoom);

        /** DB_FishRoom Id. */
        public Id: number;

        /** DB_FishRoom RoomId. */
        public RoomId: number;

        /** DB_FishRoom Name. */
        public Name: string;

        /** DB_FishRoom SumGold1. */
        public SumGold1: string;

        /** DB_FishRoom SumGold2. */
        public SumGold2: string;

        /** DB_FishRoom SumGold3. */
        public SumGold3: string;

        /** DB_FishRoom SumGold4. */
        public SumGold4: string;

        /** DB_FishRoom SumGold5. */
        public SumGold5: string;

        /** DB_FishRoom BossCDTime. */
        public BossCDTime: number;

        /** DB_FishRoom LittleBossCDTime. */
        public LittleBossCDTime: number;

        /** DB_FishRoom EnableBoss. */
        public EnableBoss: string;

        /** DB_FishRoom EnableLittleBoss. */
        public EnableLittleBoss: string;

        /**
         * Encodes the specified DB_FishRoom message. Does not implicitly {@link server.DB_FishRoom.verify|verify} messages.
         * @param m DB_FishRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FishRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FishRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FishRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FishRoom;
    }

    /** Properties of a DB_FishRoomArray. */
    interface IDB_FishRoomArray {

        /** DB_FishRoomArray Arr */
        Arr?: (server.IDB_FishRoom[] | null);
    }

    /** Represents a DB_FishRoomArray. */
    class DB_FishRoomArray implements IDB_FishRoomArray {

        /**
         * Constructs a new DB_FishRoomArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FishRoomArray);

        /** DB_FishRoomArray Arr. */
        public Arr: server.IDB_FishRoom[];

        /**
         * Encodes the specified DB_FishRoomArray message. Does not implicitly {@link server.DB_FishRoomArray.verify|verify} messages.
         * @param m DB_FishRoomArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FishRoomArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FishRoomArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FishRoomArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FishRoomArray;
    }

    /** Properties of a DB_FortuneGod_Odds. */
    interface IDB_FortuneGod_Odds {

        /** DB_FortuneGod_Odds Id */
        Id?: (number | null);

        /** DB_FortuneGod_Odds Name */
        Name?: (string | null);

        /** DB_FortuneGod_Odds Rateodds3 */
        Rateodds3?: (number | null);

        /** DB_FortuneGod_Odds Rateodds4 */
        Rateodds4?: (number | null);

        /** DB_FortuneGod_Odds Rateodds5 */
        Rateodds5?: (number | null);
    }

    /** Represents a DB_FortuneGod_Odds. */
    class DB_FortuneGod_Odds implements IDB_FortuneGod_Odds {

        /**
         * Constructs a new DB_FortuneGod_Odds.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FortuneGod_Odds);

        /** DB_FortuneGod_Odds Id. */
        public Id: number;

        /** DB_FortuneGod_Odds Name. */
        public Name: string;

        /** DB_FortuneGod_Odds Rateodds3. */
        public Rateodds3: number;

        /** DB_FortuneGod_Odds Rateodds4. */
        public Rateodds4: number;

        /** DB_FortuneGod_Odds Rateodds5. */
        public Rateodds5: number;

        /**
         * Encodes the specified DB_FortuneGod_Odds message. Does not implicitly {@link server.DB_FortuneGod_Odds.verify|verify} messages.
         * @param m DB_FortuneGod_Odds message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FortuneGod_Odds, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FortuneGod_Odds message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FortuneGod_Odds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FortuneGod_Odds;
    }

    /** Properties of a DB_FortuneGod_OddsArray. */
    interface IDB_FortuneGod_OddsArray {

        /** DB_FortuneGod_OddsArray Arr */
        Arr?: (server.IDB_FortuneGod_Odds[] | null);
    }

    /** Represents a DB_FortuneGod_OddsArray. */
    class DB_FortuneGod_OddsArray implements IDB_FortuneGod_OddsArray {

        /**
         * Constructs a new DB_FortuneGod_OddsArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FortuneGod_OddsArray);

        /** DB_FortuneGod_OddsArray Arr. */
        public Arr: server.IDB_FortuneGod_Odds[];

        /**
         * Encodes the specified DB_FortuneGod_OddsArray message. Does not implicitly {@link server.DB_FortuneGod_OddsArray.verify|verify} messages.
         * @param m DB_FortuneGod_OddsArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FortuneGod_OddsArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FortuneGod_OddsArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FortuneGod_OddsArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FortuneGod_OddsArray;
    }

    /** Properties of a DB_FortuneGod_TurnRate. */
    interface IDB_FortuneGod_TurnRate {

        /** DB_FortuneGod_TurnRate Id */
        Id?: (number | null);

        /** DB_FortuneGod_TurnRate ReturnRateMin */
        ReturnRateMin?: (number | null);

        /** DB_FortuneGod_TurnRate ReturnRateMax */
        ReturnRateMax?: (number | null);

        /** DB_FortuneGod_TurnRate Chance */
        Chance?: (number[] | null);
    }

    /** Represents a DB_FortuneGod_TurnRate. */
    class DB_FortuneGod_TurnRate implements IDB_FortuneGod_TurnRate {

        /**
         * Constructs a new DB_FortuneGod_TurnRate.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FortuneGod_TurnRate);

        /** DB_FortuneGod_TurnRate Id. */
        public Id: number;

        /** DB_FortuneGod_TurnRate ReturnRateMin. */
        public ReturnRateMin: number;

        /** DB_FortuneGod_TurnRate ReturnRateMax. */
        public ReturnRateMax: number;

        /** DB_FortuneGod_TurnRate Chance. */
        public Chance: number[];

        /**
         * Encodes the specified DB_FortuneGod_TurnRate message. Does not implicitly {@link server.DB_FortuneGod_TurnRate.verify|verify} messages.
         * @param m DB_FortuneGod_TurnRate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FortuneGod_TurnRate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FortuneGod_TurnRate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FortuneGod_TurnRate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FortuneGod_TurnRate;
    }

    /** Properties of a DB_FortuneGod_TurnRateArray. */
    interface IDB_FortuneGod_TurnRateArray {

        /** DB_FortuneGod_TurnRateArray Arr */
        Arr?: (server.IDB_FortuneGod_TurnRate[] | null);
    }

    /** Represents a DB_FortuneGod_TurnRateArray. */
    class DB_FortuneGod_TurnRateArray implements IDB_FortuneGod_TurnRateArray {

        /**
         * Constructs a new DB_FortuneGod_TurnRateArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FortuneGod_TurnRateArray);

        /** DB_FortuneGod_TurnRateArray Arr. */
        public Arr: server.IDB_FortuneGod_TurnRate[];

        /**
         * Encodes the specified DB_FortuneGod_TurnRateArray message. Does not implicitly {@link server.DB_FortuneGod_TurnRateArray.verify|verify} messages.
         * @param m DB_FortuneGod_TurnRateArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FortuneGod_TurnRateArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FortuneGod_TurnRateArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FortuneGod_TurnRateArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FortuneGod_TurnRateArray;
    }

    /** Properties of a DB_FortuneGod_Weight. */
    interface IDB_FortuneGod_Weight {

        /** DB_FortuneGod_Weight Id */
        Id?: (number | null);

        /** DB_FortuneGod_Weight Name */
        Name?: (string | null);

        /** DB_FortuneGod_Weight Weight */
        Weight?: (number[] | null);
    }

    /** Represents a DB_FortuneGod_Weight. */
    class DB_FortuneGod_Weight implements IDB_FortuneGod_Weight {

        /**
         * Constructs a new DB_FortuneGod_Weight.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FortuneGod_Weight);

        /** DB_FortuneGod_Weight Id. */
        public Id: number;

        /** DB_FortuneGod_Weight Name. */
        public Name: string;

        /** DB_FortuneGod_Weight Weight. */
        public Weight: number[];

        /**
         * Encodes the specified DB_FortuneGod_Weight message. Does not implicitly {@link server.DB_FortuneGod_Weight.verify|verify} messages.
         * @param m DB_FortuneGod_Weight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FortuneGod_Weight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FortuneGod_Weight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FortuneGod_Weight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FortuneGod_Weight;
    }

    /** Properties of a DB_FortuneGod_WeightArray. */
    interface IDB_FortuneGod_WeightArray {

        /** DB_FortuneGod_WeightArray Arr */
        Arr?: (server.IDB_FortuneGod_Weight[] | null);
    }

    /** Represents a DB_FortuneGod_WeightArray. */
    class DB_FortuneGod_WeightArray implements IDB_FortuneGod_WeightArray {

        /**
         * Constructs a new DB_FortuneGod_WeightArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FortuneGod_WeightArray);

        /** DB_FortuneGod_WeightArray Arr. */
        public Arr: server.IDB_FortuneGod_Weight[];

        /**
         * Encodes the specified DB_FortuneGod_WeightArray message. Does not implicitly {@link server.DB_FortuneGod_WeightArray.verify|verify} messages.
         * @param m DB_FortuneGod_WeightArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FortuneGod_WeightArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FortuneGod_WeightArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FortuneGod_WeightArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FortuneGod_WeightArray;
    }

    /** Properties of a DB_FortuneGod_WeightCondition. */
    interface IDB_FortuneGod_WeightCondition {

        /** DB_FortuneGod_WeightCondition Id */
        Id?: (number | null);

        /** DB_FortuneGod_WeightCondition IsNew */
        IsNew?: (number | null);

        /** DB_FortuneGod_WeightCondition BetScope */
        BetScope?: (number[] | null);

        /** DB_FortuneGod_WeightCondition TrueCalcRate */
        TrueCalcRate?: (number[] | null);

        /** DB_FortuneGod_WeightCondition WeightId */
        WeightId?: (number | null);
    }

    /** Represents a DB_FortuneGod_WeightCondition. */
    class DB_FortuneGod_WeightCondition implements IDB_FortuneGod_WeightCondition {

        /**
         * Constructs a new DB_FortuneGod_WeightCondition.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FortuneGod_WeightCondition);

        /** DB_FortuneGod_WeightCondition Id. */
        public Id: number;

        /** DB_FortuneGod_WeightCondition IsNew. */
        public IsNew: number;

        /** DB_FortuneGod_WeightCondition BetScope. */
        public BetScope: number[];

        /** DB_FortuneGod_WeightCondition TrueCalcRate. */
        public TrueCalcRate: number[];

        /** DB_FortuneGod_WeightCondition WeightId. */
        public WeightId: number;

        /**
         * Encodes the specified DB_FortuneGod_WeightCondition message. Does not implicitly {@link server.DB_FortuneGod_WeightCondition.verify|verify} messages.
         * @param m DB_FortuneGod_WeightCondition message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FortuneGod_WeightCondition, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FortuneGod_WeightCondition message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FortuneGod_WeightCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FortuneGod_WeightCondition;
    }

    /** Properties of a DB_FortuneGod_WeightConditionArray. */
    interface IDB_FortuneGod_WeightConditionArray {

        /** DB_FortuneGod_WeightConditionArray Arr */
        Arr?: (server.IDB_FortuneGod_WeightCondition[] | null);
    }

    /** Represents a DB_FortuneGod_WeightConditionArray. */
    class DB_FortuneGod_WeightConditionArray implements IDB_FortuneGod_WeightConditionArray {

        /**
         * Constructs a new DB_FortuneGod_WeightConditionArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_FortuneGod_WeightConditionArray);

        /** DB_FortuneGod_WeightConditionArray Arr. */
        public Arr: server.IDB_FortuneGod_WeightCondition[];

        /**
         * Encodes the specified DB_FortuneGod_WeightConditionArray message. Does not implicitly {@link server.DB_FortuneGod_WeightConditionArray.verify|verify} messages.
         * @param m DB_FortuneGod_WeightConditionArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_FortuneGod_WeightConditionArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_FortuneGod_WeightConditionArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_FortuneGod_WeightConditionArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_FortuneGod_WeightConditionArray;
    }

    /** Properties of a DB_GamMatchLV. */
    interface IDB_GamMatchLV {

        /** DB_GamMatchLV Id */
        Id?: (number | null);

        /** DB_GamMatchLV Star */
        Star?: (number[] | null);

        /** DB_GamMatchLV Name */
        Name?: (string | null);

        /** DB_GamMatchLV Star2 */
        Star2?: (number | null);

        /** DB_GamMatchLV AwardType1 */
        AwardType1?: (number | null);

        /** DB_GamMatchLV AwardId1 */
        AwardId1?: (number | null);

        /** DB_GamMatchLV Number1 */
        Number1?: (number | null);

        /** DB_GamMatchLV AwardType2 */
        AwardType2?: (number | null);

        /** DB_GamMatchLV AwardId2 */
        AwardId2?: (number | null);

        /** DB_GamMatchLV Number2 */
        Number2?: (number | null);

        /** DB_GamMatchLV AwardType3 */
        AwardType3?: (number | null);

        /** DB_GamMatchLV AwardId3 */
        AwardId3?: (number | null);

        /** DB_GamMatchLV Number3 */
        Number3?: (number | null);
    }

    /** Represents a DB_GamMatchLV. */
    class DB_GamMatchLV implements IDB_GamMatchLV {

        /**
         * Constructs a new DB_GamMatchLV.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_GamMatchLV);

        /** DB_GamMatchLV Id. */
        public Id: number;

        /** DB_GamMatchLV Star. */
        public Star: number[];

        /** DB_GamMatchLV Name. */
        public Name: string;

        /** DB_GamMatchLV Star2. */
        public Star2: number;

        /** DB_GamMatchLV AwardType1. */
        public AwardType1: number;

        /** DB_GamMatchLV AwardId1. */
        public AwardId1: number;

        /** DB_GamMatchLV Number1. */
        public Number1: number;

        /** DB_GamMatchLV AwardType2. */
        public AwardType2: number;

        /** DB_GamMatchLV AwardId2. */
        public AwardId2: number;

        /** DB_GamMatchLV Number2. */
        public Number2: number;

        /** DB_GamMatchLV AwardType3. */
        public AwardType3: number;

        /** DB_GamMatchLV AwardId3. */
        public AwardId3: number;

        /** DB_GamMatchLV Number3. */
        public Number3: number;

        /**
         * Encodes the specified DB_GamMatchLV message. Does not implicitly {@link server.DB_GamMatchLV.verify|verify} messages.
         * @param m DB_GamMatchLV message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_GamMatchLV, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_GamMatchLV message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_GamMatchLV
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_GamMatchLV;
    }

    /** Properties of a DB_GamMatchLVArray. */
    interface IDB_GamMatchLVArray {

        /** DB_GamMatchLVArray Arr */
        Arr?: (server.IDB_GamMatchLV[] | null);
    }

    /** Represents a DB_GamMatchLVArray. */
    class DB_GamMatchLVArray implements IDB_GamMatchLVArray {

        /**
         * Constructs a new DB_GamMatchLVArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_GamMatchLVArray);

        /** DB_GamMatchLVArray Arr. */
        public Arr: server.IDB_GamMatchLV[];

        /**
         * Encodes the specified DB_GamMatchLVArray message. Does not implicitly {@link server.DB_GamMatchLVArray.verify|verify} messages.
         * @param m DB_GamMatchLVArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_GamMatchLVArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_GamMatchLVArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_GamMatchLVArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_GamMatchLVArray;
    }

    /** Properties of a DB_GameCoinPool. */
    interface IDB_GameCoinPool {

        /** DB_GameCoinPool Id */
        Id?: (number | null);

        /** DB_GameCoinPool InitValue */
        InitValue?: (number | null);

        /** DB_GameCoinPool LowerLimit */
        LowerLimit?: (number | null);

        /** DB_GameCoinPool UpperLimit */
        UpperLimit?: (number | null);

        /** DB_GameCoinPool UpperOffsetLimit */
        UpperOffsetLimit?: (number | null);

        /** DB_GameCoinPool MaxOutValue */
        MaxOutValue?: (number | null);

        /** DB_GameCoinPool ChangeRate */
        ChangeRate?: (number | null);

        /** DB_GameCoinPool MinOutPlayerNum */
        MinOutPlayerNum?: (number | null);

        /** DB_GameCoinPool UpperLimitOfOdds */
        UpperLimitOfOdds?: (number | null);

        /** DB_GameCoinPool BaseRate */
        BaseRate?: (number | null);

        /** DB_GameCoinPool CtroRate */
        CtroRate?: (number | null);

        /** DB_GameCoinPool HardTimeMin */
        HardTimeMin?: (number | null);

        /** DB_GameCoinPool HardTimeMax */
        HardTimeMax?: (number | null);

        /** DB_GameCoinPool NormalTimeMin */
        NormalTimeMin?: (number | null);

        /** DB_GameCoinPool NormalTimeMax */
        NormalTimeMax?: (number | null);

        /** DB_GameCoinPool EasyTimeMin */
        EasyTimeMin?: (number | null);

        /** DB_GameCoinPool EasyTimeMax */
        EasyTimeMax?: (number | null);

        /** DB_GameCoinPool EasrierTimeMin */
        EasrierTimeMin?: (number | null);

        /** DB_GameCoinPool EasrierTimeMax */
        EasrierTimeMax?: (number | null);

        /** DB_GameCoinPool CpCangeType */
        CpCangeType?: (number | null);

        /** DB_GameCoinPool CpChangeInterval */
        CpChangeInterval?: (number | null);

        /** DB_GameCoinPool CpChangeTotle */
        CpChangeTotle?: (number | null);

        /** DB_GameCoinPool CpChangeLower */
        CpChangeLower?: (number | null);

        /** DB_GameCoinPool CpChangeUpper */
        CpChangeUpper?: (number | null);

        /** DB_GameCoinPool ProfitRate */
        ProfitRate?: (number | null);
    }

    /** Represents a DB_GameCoinPool. */
    class DB_GameCoinPool implements IDB_GameCoinPool {

        /**
         * Constructs a new DB_GameCoinPool.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_GameCoinPool);

        /** DB_GameCoinPool Id. */
        public Id: number;

        /** DB_GameCoinPool InitValue. */
        public InitValue: number;

        /** DB_GameCoinPool LowerLimit. */
        public LowerLimit: number;

        /** DB_GameCoinPool UpperLimit. */
        public UpperLimit: number;

        /** DB_GameCoinPool UpperOffsetLimit. */
        public UpperOffsetLimit: number;

        /** DB_GameCoinPool MaxOutValue. */
        public MaxOutValue: number;

        /** DB_GameCoinPool ChangeRate. */
        public ChangeRate: number;

        /** DB_GameCoinPool MinOutPlayerNum. */
        public MinOutPlayerNum: number;

        /** DB_GameCoinPool UpperLimitOfOdds. */
        public UpperLimitOfOdds: number;

        /** DB_GameCoinPool BaseRate. */
        public BaseRate: number;

        /** DB_GameCoinPool CtroRate. */
        public CtroRate: number;

        /** DB_GameCoinPool HardTimeMin. */
        public HardTimeMin: number;

        /** DB_GameCoinPool HardTimeMax. */
        public HardTimeMax: number;

        /** DB_GameCoinPool NormalTimeMin. */
        public NormalTimeMin: number;

        /** DB_GameCoinPool NormalTimeMax. */
        public NormalTimeMax: number;

        /** DB_GameCoinPool EasyTimeMin. */
        public EasyTimeMin: number;

        /** DB_GameCoinPool EasyTimeMax. */
        public EasyTimeMax: number;

        /** DB_GameCoinPool EasrierTimeMin. */
        public EasrierTimeMin: number;

        /** DB_GameCoinPool EasrierTimeMax. */
        public EasrierTimeMax: number;

        /** DB_GameCoinPool CpCangeType. */
        public CpCangeType: number;

        /** DB_GameCoinPool CpChangeInterval. */
        public CpChangeInterval: number;

        /** DB_GameCoinPool CpChangeTotle. */
        public CpChangeTotle: number;

        /** DB_GameCoinPool CpChangeLower. */
        public CpChangeLower: number;

        /** DB_GameCoinPool CpChangeUpper. */
        public CpChangeUpper: number;

        /** DB_GameCoinPool ProfitRate. */
        public ProfitRate: number;

        /**
         * Encodes the specified DB_GameCoinPool message. Does not implicitly {@link server.DB_GameCoinPool.verify|verify} messages.
         * @param m DB_GameCoinPool message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_GameCoinPool, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_GameCoinPool message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_GameCoinPool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_GameCoinPool;
    }

    /** Properties of a DB_GameCoinPoolArray. */
    interface IDB_GameCoinPoolArray {

        /** DB_GameCoinPoolArray Arr */
        Arr?: (server.IDB_GameCoinPool[] | null);
    }

    /** Represents a DB_GameCoinPoolArray. */
    class DB_GameCoinPoolArray implements IDB_GameCoinPoolArray {

        /**
         * Constructs a new DB_GameCoinPoolArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_GameCoinPoolArray);

        /** DB_GameCoinPoolArray Arr. */
        public Arr: server.IDB_GameCoinPool[];

        /**
         * Encodes the specified DB_GameCoinPoolArray message. Does not implicitly {@link server.DB_GameCoinPoolArray.verify|verify} messages.
         * @param m DB_GameCoinPoolArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_GameCoinPoolArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_GameCoinPoolArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_GameCoinPoolArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_GameCoinPoolArray;
    }

    /** Properties of a DB_GameFree. */
    interface IDB_GameFree {

        /** DB_GameFree Id */
        Id?: (number | null);

        /** DB_GameFree Name */
        Name?: (string | null);

        /** DB_GameFree Title */
        Title?: (string | null);

        /** DB_GameFree GameId */
        GameId?: (number | null);

        /** DB_GameFree GameMode */
        GameMode?: (number | null);

        /** DB_GameFree GameRule */
        GameRule?: (number | null);

        /** DB_GameFree GameType */
        GameType?: (number | null);

        /** DB_GameFree SceneType */
        SceneType?: (number | null);

        /** DB_GameFree Desc */
        Desc?: (string | null);

        /** DB_GameFree ShowType */
        ShowType?: (number | null);

        /** DB_GameFree SubShowType */
        SubShowType?: (number | null);

        /** DB_GameFree Flag */
        Flag?: (number | null);

        /** DB_GameFree TestTakeCoin */
        TestTakeCoin?: (number | null);

        /** DB_GameFree ShowId */
        ShowId?: (number | null);

        /** DB_GameFree LimitCoin */
        LimitCoin?: (number | null);

        /** DB_GameFree MaxCoinLimit */
        MaxCoinLimit?: (number | null);

        /** DB_GameFree ServiceFee */
        ServiceFee?: (number | null);

        /** DB_GameFree LowerThanKick */
        LowerThanKick?: (number | null);

        /** DB_GameFree BaseScore */
        BaseScore?: (number | null);

        /** DB_GameFree Turn */
        Turn?: (number | null);

        /** DB_GameFree BetDec */
        BetDec?: (string | null);

        /** DB_GameFree Bot */
        Bot?: (number | null);

        /** DB_GameFree Ai */
        Ai?: (number[] | null);

        /** DB_GameFree Banker */
        Banker?: (number | null);

        /** DB_GameFree MaxChip */
        MaxChip?: (number | null);

        /** DB_GameFree OtherIntParams */
        OtherIntParams?: (number[] | null);

        /** DB_GameFree Jackpot */
        Jackpot?: (number[] | null);

        /** DB_GameFree RobotNumRng */
        RobotNumRng?: (number[] | null);

        /** DB_GameFree RobotTakeCoin */
        RobotTakeCoin?: (number[] | null);

        /** DB_GameFree RobotLimitCoin */
        RobotLimitCoin?: (number[] | null);

        /** DB_GameFree BetLimit */
        BetLimit?: (number | null);

        /** DB_GameFree TaxRate */
        TaxRate?: (number | null);

        /** DB_GameFree SameIpLimit */
        SameIpLimit?: (number | null);

        /** DB_GameFree SamePlaceLimit */
        SamePlaceLimit?: (number | null);

        /** DB_GameFree GameDif */
        GameDif?: (string | null);

        /** DB_GameFree GameClass */
        GameClass?: (number | null);

        /** DB_GameFree PlatformName */
        PlatformName?: (string | null);

        /** DB_GameFree MaxBetCoin */
        MaxBetCoin?: (number[] | null);

        /** DB_GameFree PlayNumLimit */
        PlayNumLimit?: (number | null);

        /** DB_GameFree CreateRoomNum */
        CreateRoomNum?: (number | null);

        /** DB_GameFree MatchTrueMan */
        MatchTrueMan?: (number | null);

        /** DB_GameFree PlayerWaterRate */
        PlayerWaterRate?: (number | null);

        /** DB_GameFree MatchMode */
        MatchMode?: (number | null);

        /** DB_GameFree KillingRate */
        KillingRate?: (number | null);

        /** DB_GameFree BetWaterRate */
        BetWaterRate?: (number | null);

        /** DB_GameFree Lottery */
        Lottery?: (number | null);

        /** DB_GameFree LotteryConfig */
        LotteryConfig?: (string | null);

        /** DB_GameFree BalanceLine */
        BalanceLine?: (number[] | null);
    }

    /** Represents a DB_GameFree. */
    class DB_GameFree implements IDB_GameFree {

        /**
         * Constructs a new DB_GameFree.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_GameFree);

        /** DB_GameFree Id. */
        public Id: number;

        /** DB_GameFree Name. */
        public Name: string;

        /** DB_GameFree Title. */
        public Title: string;

        /** DB_GameFree GameId. */
        public GameId: number;

        /** DB_GameFree GameMode. */
        public GameMode: number;

        /** DB_GameFree GameRule. */
        public GameRule: number;

        /** DB_GameFree GameType. */
        public GameType: number;

        /** DB_GameFree SceneType. */
        public SceneType: number;

        /** DB_GameFree Desc. */
        public Desc: string;

        /** DB_GameFree ShowType. */
        public ShowType: number;

        /** DB_GameFree SubShowType. */
        public SubShowType: number;

        /** DB_GameFree Flag. */
        public Flag: number;

        /** DB_GameFree TestTakeCoin. */
        public TestTakeCoin: number;

        /** DB_GameFree ShowId. */
        public ShowId: number;

        /** DB_GameFree LimitCoin. */
        public LimitCoin: number;

        /** DB_GameFree MaxCoinLimit. */
        public MaxCoinLimit: number;

        /** DB_GameFree ServiceFee. */
        public ServiceFee: number;

        /** DB_GameFree LowerThanKick. */
        public LowerThanKick: number;

        /** DB_GameFree BaseScore. */
        public BaseScore: number;

        /** DB_GameFree Turn. */
        public Turn: number;

        /** DB_GameFree BetDec. */
        public BetDec: string;

        /** DB_GameFree Bot. */
        public Bot: number;

        /** DB_GameFree Ai. */
        public Ai: number[];

        /** DB_GameFree Banker. */
        public Banker: number;

        /** DB_GameFree MaxChip. */
        public MaxChip: number;

        /** DB_GameFree OtherIntParams. */
        public OtherIntParams: number[];

        /** DB_GameFree Jackpot. */
        public Jackpot: number[];

        /** DB_GameFree RobotNumRng. */
        public RobotNumRng: number[];

        /** DB_GameFree RobotTakeCoin. */
        public RobotTakeCoin: number[];

        /** DB_GameFree RobotLimitCoin. */
        public RobotLimitCoin: number[];

        /** DB_GameFree BetLimit. */
        public BetLimit: number;

        /** DB_GameFree TaxRate. */
        public TaxRate: number;

        /** DB_GameFree SameIpLimit. */
        public SameIpLimit: number;

        /** DB_GameFree SamePlaceLimit. */
        public SamePlaceLimit: number;

        /** DB_GameFree GameDif. */
        public GameDif: string;

        /** DB_GameFree GameClass. */
        public GameClass: number;

        /** DB_GameFree PlatformName. */
        public PlatformName: string;

        /** DB_GameFree MaxBetCoin. */
        public MaxBetCoin: number[];

        /** DB_GameFree PlayNumLimit. */
        public PlayNumLimit: number;

        /** DB_GameFree CreateRoomNum. */
        public CreateRoomNum: number;

        /** DB_GameFree MatchTrueMan. */
        public MatchTrueMan: number;

        /** DB_GameFree PlayerWaterRate. */
        public PlayerWaterRate: number;

        /** DB_GameFree MatchMode. */
        public MatchMode: number;

        /** DB_GameFree KillingRate. */
        public KillingRate: number;

        /** DB_GameFree BetWaterRate. */
        public BetWaterRate: number;

        /** DB_GameFree Lottery. */
        public Lottery: number;

        /** DB_GameFree LotteryConfig. */
        public LotteryConfig: string;

        /** DB_GameFree BalanceLine. */
        public BalanceLine: number[];

        /**
         * Encodes the specified DB_GameFree message. Does not implicitly {@link server.DB_GameFree.verify|verify} messages.
         * @param m DB_GameFree message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_GameFree, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_GameFree message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_GameFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_GameFree;
    }

    /** Properties of a DB_GameFreeArray. */
    interface IDB_GameFreeArray {

        /** DB_GameFreeArray Arr */
        Arr?: (server.IDB_GameFree[] | null);
    }

    /** Represents a DB_GameFreeArray. */
    class DB_GameFreeArray implements IDB_GameFreeArray {

        /**
         * Constructs a new DB_GameFreeArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_GameFreeArray);

        /** DB_GameFreeArray Arr. */
        public Arr: server.IDB_GameFree[];

        /**
         * Encodes the specified DB_GameFreeArray message. Does not implicitly {@link server.DB_GameFreeArray.verify|verify} messages.
         * @param m DB_GameFreeArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_GameFreeArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_GameFreeArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_GameFreeArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_GameFreeArray;
    }

    /** Properties of a DB_GameItem. */
    interface IDB_GameItem {

        /** DB_GameItem Id */
        Id?: (number | null);

        /** DB_GameItem Name */
        Name?: (string | null);

        /** DB_GameItem ShowLocation */
        ShowLocation?: (number[] | null);

        /** DB_GameItem Classify */
        Classify?: (number[] | null);

        /** DB_GameItem Type */
        Type?: (number | null);

        /** DB_GameItem Effect0 */
        Effect0?: (number[] | null);

        /** DB_GameItem Effect */
        Effect?: (number[] | null);

        /** DB_GameItem SaleType */
        SaleType?: (number | null);

        /** DB_GameItem SaleGold */
        SaleGold?: (number | null);

        /** DB_GameItem Composition */
        Composition?: (number | null);

        /** DB_GameItem CompositionMax */
        CompositionMax?: (number | null);

        /** DB_GameItem Time */
        Time?: (number | null);

        /** DB_GameItem Location */
        Location?: (string | null);

        /** DB_GameItem Describe */
        Describe?: (string | null);
    }

    /** Represents a DB_GameItem. */
    class DB_GameItem implements IDB_GameItem {

        /**
         * Constructs a new DB_GameItem.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_GameItem);

        /** DB_GameItem Id. */
        public Id: number;

        /** DB_GameItem Name. */
        public Name: string;

        /** DB_GameItem ShowLocation. */
        public ShowLocation: number[];

        /** DB_GameItem Classify. */
        public Classify: number[];

        /** DB_GameItem Type. */
        public Type: number;

        /** DB_GameItem Effect0. */
        public Effect0: number[];

        /** DB_GameItem Effect. */
        public Effect: number[];

        /** DB_GameItem SaleType. */
        public SaleType: number;

        /** DB_GameItem SaleGold. */
        public SaleGold: number;

        /** DB_GameItem Composition. */
        public Composition: number;

        /** DB_GameItem CompositionMax. */
        public CompositionMax: number;

        /** DB_GameItem Time. */
        public Time: number;

        /** DB_GameItem Location. */
        public Location: string;

        /** DB_GameItem Describe. */
        public Describe: string;

        /**
         * Encodes the specified DB_GameItem message. Does not implicitly {@link server.DB_GameItem.verify|verify} messages.
         * @param m DB_GameItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_GameItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_GameItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_GameItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_GameItem;
    }

    /** Properties of a DB_GameItemArray. */
    interface IDB_GameItemArray {

        /** DB_GameItemArray Arr */
        Arr?: (server.IDB_GameItem[] | null);
    }

    /** Represents a DB_GameItemArray. */
    class DB_GameItemArray implements IDB_GameItemArray {

        /**
         * Constructs a new DB_GameItemArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_GameItemArray);

        /** DB_GameItemArray Arr. */
        public Arr: server.IDB_GameItem[];

        /**
         * Encodes the specified DB_GameItemArray message. Does not implicitly {@link server.DB_GameItemArray.verify|verify} messages.
         * @param m DB_GameItemArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_GameItemArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_GameItemArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_GameItemArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_GameItemArray;
    }

    /** Properties of a DB_GameRule. */
    interface IDB_GameRule {

        /** DB_GameRule Id */
        Id?: (number | null);

        /** DB_GameRule Name */
        Name?: (string | null);

        /** DB_GameRule GameId */
        GameId?: (number | null);

        /** DB_GameRule GameMode */
        GameMode?: (number | null);

        /** DB_GameRule Params */
        Params?: (number[] | null);

        /** DB_GameRule RuleDesc */
        RuleDesc?: (string | null);

        /** DB_GameRule GameDif */
        GameDif?: (string | null);
    }

    /** Represents a DB_GameRule. */
    class DB_GameRule implements IDB_GameRule {

        /**
         * Constructs a new DB_GameRule.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_GameRule);

        /** DB_GameRule Id. */
        public Id: number;

        /** DB_GameRule Name. */
        public Name: string;

        /** DB_GameRule GameId. */
        public GameId: number;

        /** DB_GameRule GameMode. */
        public GameMode: number;

        /** DB_GameRule Params. */
        public Params: number[];

        /** DB_GameRule RuleDesc. */
        public RuleDesc: string;

        /** DB_GameRule GameDif. */
        public GameDif: string;

        /**
         * Encodes the specified DB_GameRule message. Does not implicitly {@link server.DB_GameRule.verify|verify} messages.
         * @param m DB_GameRule message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_GameRule, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_GameRule message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_GameRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_GameRule;
    }

    /** Properties of a DB_GameRuleArray. */
    interface IDB_GameRuleArray {

        /** DB_GameRuleArray Arr */
        Arr?: (server.IDB_GameRule[] | null);
    }

    /** Represents a DB_GameRuleArray. */
    class DB_GameRuleArray implements IDB_GameRuleArray {

        /**
         * Constructs a new DB_GameRuleArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_GameRuleArray);

        /** DB_GameRuleArray Arr. */
        public Arr: server.IDB_GameRule[];

        /**
         * Encodes the specified DB_GameRuleArray message. Does not implicitly {@link server.DB_GameRuleArray.verify|verify} messages.
         * @param m DB_GameRuleArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_GameRuleArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_GameRuleArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_GameRuleArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_GameRuleArray;
    }

    /** Properties of a DB_GameSubsidy. */
    interface IDB_GameSubsidy {

        /** DB_GameSubsidy Id */
        Id?: (number | null);

        /** DB_GameSubsidy LimitNum */
        LimitNum?: (number | null);

        /** DB_GameSubsidy Get */
        Get?: (number | null);

        /** DB_GameSubsidy Times */
        Times?: (number | null);
    }

    /** Represents a DB_GameSubsidy. */
    class DB_GameSubsidy implements IDB_GameSubsidy {

        /**
         * Constructs a new DB_GameSubsidy.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_GameSubsidy);

        /** DB_GameSubsidy Id. */
        public Id: number;

        /** DB_GameSubsidy LimitNum. */
        public LimitNum: number;

        /** DB_GameSubsidy Get. */
        public Get: number;

        /** DB_GameSubsidy Times. */
        public Times: number;

        /**
         * Encodes the specified DB_GameSubsidy message. Does not implicitly {@link server.DB_GameSubsidy.verify|verify} messages.
         * @param m DB_GameSubsidy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_GameSubsidy, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_GameSubsidy message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_GameSubsidy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_GameSubsidy;
    }

    /** Properties of a DB_GameSubsidyArray. */
    interface IDB_GameSubsidyArray {

        /** DB_GameSubsidyArray Arr */
        Arr?: (server.IDB_GameSubsidy[] | null);
    }

    /** Represents a DB_GameSubsidyArray. */
    class DB_GameSubsidyArray implements IDB_GameSubsidyArray {

        /**
         * Constructs a new DB_GameSubsidyArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_GameSubsidyArray);

        /** DB_GameSubsidyArray Arr. */
        public Arr: server.IDB_GameSubsidy[];

        /**
         * Encodes the specified DB_GameSubsidyArray message. Does not implicitly {@link server.DB_GameSubsidyArray.verify|verify} messages.
         * @param m DB_GameSubsidyArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_GameSubsidyArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_GameSubsidyArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_GameSubsidyArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_GameSubsidyArray;
    }

    /** Properties of a DB_Game_Drop. */
    interface IDB_Game_Drop {

        /** DB_Game_Drop Id */
        Id?: (number | null);

        /** DB_Game_Drop GameId */
        GameId?: (number | null);

        /** DB_Game_Drop Bet */
        Bet?: (number | null);

        /** DB_Game_Drop ItemName1 */
        ItemName1?: (number | null);

        /** DB_Game_Drop ItemId1 */
        ItemId1?: (number | null);

        /** DB_Game_Drop Rate1 */
        Rate1?: (number | null);

        /** DB_Game_Drop Amount1 */
        Amount1?: (number[] | null);
    }

    /** Represents a DB_Game_Drop. */
    class DB_Game_Drop implements IDB_Game_Drop {

        /**
         * Constructs a new DB_Game_Drop.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Game_Drop);

        /** DB_Game_Drop Id. */
        public Id: number;

        /** DB_Game_Drop GameId. */
        public GameId: number;

        /** DB_Game_Drop Bet. */
        public Bet: number;

        /** DB_Game_Drop ItemName1. */
        public ItemName1: number;

        /** DB_Game_Drop ItemId1. */
        public ItemId1: number;

        /** DB_Game_Drop Rate1. */
        public Rate1: number;

        /** DB_Game_Drop Amount1. */
        public Amount1: number[];

        /**
         * Encodes the specified DB_Game_Drop message. Does not implicitly {@link server.DB_Game_Drop.verify|verify} messages.
         * @param m DB_Game_Drop message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Game_Drop, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Game_Drop message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Game_Drop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Game_Drop;
    }

    /** Properties of a DB_Game_DropArray. */
    interface IDB_Game_DropArray {

        /** DB_Game_DropArray Arr */
        Arr?: (server.IDB_Game_Drop[] | null);
    }

    /** Represents a DB_Game_DropArray. */
    class DB_Game_DropArray implements IDB_Game_DropArray {

        /**
         * Constructs a new DB_Game_DropArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Game_DropArray);

        /** DB_Game_DropArray Arr. */
        public Arr: server.IDB_Game_Drop[];

        /**
         * Encodes the specified DB_Game_DropArray message. Does not implicitly {@link server.DB_Game_DropArray.verify|verify} messages.
         * @param m DB_Game_DropArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Game_DropArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Game_DropArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Game_DropArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Game_DropArray;
    }

    /** Properties of a DB_Game_Introduction. */
    interface IDB_Game_Introduction {

        /** DB_Game_Introduction Id */
        Id?: (number | null);

        /** DB_Game_Introduction Type */
        Type?: (number | null);

        /** DB_Game_Introduction Name */
        Name?: (string | null);

        /** DB_Game_Introduction Story */
        Story?: (string | null);

        /** DB_Game_Introduction AwardTitle */
        AwardTitle?: (string | null);

        /** DB_Game_Introduction LevelMax */
        LevelMax?: (number | null);
    }

    /** Represents a DB_Game_Introduction. */
    class DB_Game_Introduction implements IDB_Game_Introduction {

        /**
         * Constructs a new DB_Game_Introduction.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Game_Introduction);

        /** DB_Game_Introduction Id. */
        public Id: number;

        /** DB_Game_Introduction Type. */
        public Type: number;

        /** DB_Game_Introduction Name. */
        public Name: string;

        /** DB_Game_Introduction Story. */
        public Story: string;

        /** DB_Game_Introduction AwardTitle. */
        public AwardTitle: string;

        /** DB_Game_Introduction LevelMax. */
        public LevelMax: number;

        /**
         * Encodes the specified DB_Game_Introduction message. Does not implicitly {@link server.DB_Game_Introduction.verify|verify} messages.
         * @param m DB_Game_Introduction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Game_Introduction, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Game_Introduction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Game_Introduction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Game_Introduction;
    }

    /** Properties of a DB_Game_IntroductionArray. */
    interface IDB_Game_IntroductionArray {

        /** DB_Game_IntroductionArray Arr */
        Arr?: (server.IDB_Game_Introduction[] | null);
    }

    /** Represents a DB_Game_IntroductionArray. */
    class DB_Game_IntroductionArray implements IDB_Game_IntroductionArray {

        /**
         * Constructs a new DB_Game_IntroductionArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Game_IntroductionArray);

        /** DB_Game_IntroductionArray Arr. */
        public Arr: server.IDB_Game_Introduction[];

        /**
         * Encodes the specified DB_Game_IntroductionArray message. Does not implicitly {@link server.DB_Game_IntroductionArray.verify|verify} messages.
         * @param m DB_Game_IntroductionArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Game_IntroductionArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Game_IntroductionArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Game_IntroductionArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Game_IntroductionArray;
    }

    /** Properties of a DB_Game_Pet. */
    interface IDB_Game_Pet {

        /** DB_Game_Pet Id */
        Id?: (number | null);

        /** DB_Game_Pet PetId */
        PetId?: (number | null);

        /** DB_Game_Pet Name */
        Name?: (string | null);

        /** DB_Game_Pet Grade */
        Grade?: (number | null);

        /** DB_Game_Pet Level */
        Level?: (number | null);

        /** DB_Game_Pet Fragment */
        Fragment?: (number | null);

        /** DB_Game_Pet Amount */
        Amount?: (number | null);

        /** DB_Game_Pet AwardType */
        AwardType?: (number | null);

        /** DB_Game_Pet Award */
        Award?: (number | null);

        /** DB_Game_Pet AwardRate */
        AwardRate?: (number | null);
    }

    /** Represents a DB_Game_Pet. */
    class DB_Game_Pet implements IDB_Game_Pet {

        /**
         * Constructs a new DB_Game_Pet.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Game_Pet);

        /** DB_Game_Pet Id. */
        public Id: number;

        /** DB_Game_Pet PetId. */
        public PetId: number;

        /** DB_Game_Pet Name. */
        public Name: string;

        /** DB_Game_Pet Grade. */
        public Grade: number;

        /** DB_Game_Pet Level. */
        public Level: number;

        /** DB_Game_Pet Fragment. */
        public Fragment: number;

        /** DB_Game_Pet Amount. */
        public Amount: number;

        /** DB_Game_Pet AwardType. */
        public AwardType: number;

        /** DB_Game_Pet Award. */
        public Award: number;

        /** DB_Game_Pet AwardRate. */
        public AwardRate: number;

        /**
         * Encodes the specified DB_Game_Pet message. Does not implicitly {@link server.DB_Game_Pet.verify|verify} messages.
         * @param m DB_Game_Pet message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Game_Pet, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Game_Pet message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Game_Pet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Game_Pet;
    }

    /** Properties of a DB_Game_PetArray. */
    interface IDB_Game_PetArray {

        /** DB_Game_PetArray Arr */
        Arr?: (server.IDB_Game_Pet[] | null);
    }

    /** Represents a DB_Game_PetArray. */
    class DB_Game_PetArray implements IDB_Game_PetArray {

        /**
         * Constructs a new DB_Game_PetArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Game_PetArray);

        /** DB_Game_PetArray Arr. */
        public Arr: server.IDB_Game_Pet[];

        /**
         * Encodes the specified DB_Game_PetArray message. Does not implicitly {@link server.DB_Game_PetArray.verify|verify} messages.
         * @param m DB_Game_PetArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Game_PetArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Game_PetArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Game_PetArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Game_PetArray;
    }

    /** Properties of a DB_Game_Role. */
    interface IDB_Game_Role {

        /** DB_Game_Role Id */
        Id?: (number | null);

        /** DB_Game_Role RoleId */
        RoleId?: (number | null);

        /** DB_Game_Role Name */
        Name?: (string | null);

        /** DB_Game_Role Grade */
        Grade?: (number | null);

        /** DB_Game_Role Level */
        Level?: (number | null);

        /** DB_Game_Role Fragment */
        Fragment?: (number | null);

        /** DB_Game_Role Amount */
        Amount?: (number | null);

        /** DB_Game_Role AwardType */
        AwardType?: (number | null);

        /** DB_Game_Role Award */
        Award?: (number | null);

        /** DB_Game_Role AwardRate */
        AwardRate?: (number | null);
    }

    /** Represents a DB_Game_Role. */
    class DB_Game_Role implements IDB_Game_Role {

        /**
         * Constructs a new DB_Game_Role.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Game_Role);

        /** DB_Game_Role Id. */
        public Id: number;

        /** DB_Game_Role RoleId. */
        public RoleId: number;

        /** DB_Game_Role Name. */
        public Name: string;

        /** DB_Game_Role Grade. */
        public Grade: number;

        /** DB_Game_Role Level. */
        public Level: number;

        /** DB_Game_Role Fragment. */
        public Fragment: number;

        /** DB_Game_Role Amount. */
        public Amount: number;

        /** DB_Game_Role AwardType. */
        public AwardType: number;

        /** DB_Game_Role Award. */
        public Award: number;

        /** DB_Game_Role AwardRate. */
        public AwardRate: number;

        /**
         * Encodes the specified DB_Game_Role message. Does not implicitly {@link server.DB_Game_Role.verify|verify} messages.
         * @param m DB_Game_Role message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Game_Role, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Game_Role message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Game_Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Game_Role;
    }

    /** Properties of a DB_Game_RoleArray. */
    interface IDB_Game_RoleArray {

        /** DB_Game_RoleArray Arr */
        Arr?: (server.IDB_Game_Role[] | null);
    }

    /** Represents a DB_Game_RoleArray. */
    class DB_Game_RoleArray implements IDB_Game_RoleArray {

        /**
         * Constructs a new DB_Game_RoleArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Game_RoleArray);

        /** DB_Game_RoleArray Arr. */
        public Arr: server.IDB_Game_Role[];

        /**
         * Encodes the specified DB_Game_RoleArray message. Does not implicitly {@link server.DB_Game_RoleArray.verify|verify} messages.
         * @param m DB_Game_RoleArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Game_RoleArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Game_RoleArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Game_RoleArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Game_RoleArray;
    }

    /** Properties of a DB_Legend_Odds. */
    interface IDB_Legend_Odds {

        /** DB_Legend_Odds Id */
        Id?: (number | null);

        /** DB_Legend_Odds Name */
        Name?: (string | null);

        /** DB_Legend_Odds Rateodds3 */
        Rateodds3?: (number | null);

        /** DB_Legend_Odds Rateodds4 */
        Rateodds4?: (number | null);

        /** DB_Legend_Odds Rateodds5 */
        Rateodds5?: (number | null);
    }

    /** Represents a DB_Legend_Odds. */
    class DB_Legend_Odds implements IDB_Legend_Odds {

        /**
         * Constructs a new DB_Legend_Odds.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Legend_Odds);

        /** DB_Legend_Odds Id. */
        public Id: number;

        /** DB_Legend_Odds Name. */
        public Name: string;

        /** DB_Legend_Odds Rateodds3. */
        public Rateodds3: number;

        /** DB_Legend_Odds Rateodds4. */
        public Rateodds4: number;

        /** DB_Legend_Odds Rateodds5. */
        public Rateodds5: number;

        /**
         * Encodes the specified DB_Legend_Odds message. Does not implicitly {@link server.DB_Legend_Odds.verify|verify} messages.
         * @param m DB_Legend_Odds message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Legend_Odds, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Legend_Odds message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Legend_Odds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Legend_Odds;
    }

    /** Properties of a DB_Legend_OddsArray. */
    interface IDB_Legend_OddsArray {

        /** DB_Legend_OddsArray Arr */
        Arr?: (server.IDB_Legend_Odds[] | null);
    }

    /** Represents a DB_Legend_OddsArray. */
    class DB_Legend_OddsArray implements IDB_Legend_OddsArray {

        /**
         * Constructs a new DB_Legend_OddsArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Legend_OddsArray);

        /** DB_Legend_OddsArray Arr. */
        public Arr: server.IDB_Legend_Odds[];

        /**
         * Encodes the specified DB_Legend_OddsArray message. Does not implicitly {@link server.DB_Legend_OddsArray.verify|verify} messages.
         * @param m DB_Legend_OddsArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Legend_OddsArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Legend_OddsArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Legend_OddsArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Legend_OddsArray;
    }

    /** Properties of a DB_Legend_TurnRate. */
    interface IDB_Legend_TurnRate {

        /** DB_Legend_TurnRate Id */
        Id?: (number | null);

        /** DB_Legend_TurnRate ReturnRateMin */
        ReturnRateMin?: (number | null);

        /** DB_Legend_TurnRate ReturnRateMax */
        ReturnRateMax?: (number | null);

        /** DB_Legend_TurnRate Chance */
        Chance?: (number[] | null);
    }

    /** Represents a DB_Legend_TurnRate. */
    class DB_Legend_TurnRate implements IDB_Legend_TurnRate {

        /**
         * Constructs a new DB_Legend_TurnRate.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Legend_TurnRate);

        /** DB_Legend_TurnRate Id. */
        public Id: number;

        /** DB_Legend_TurnRate ReturnRateMin. */
        public ReturnRateMin: number;

        /** DB_Legend_TurnRate ReturnRateMax. */
        public ReturnRateMax: number;

        /** DB_Legend_TurnRate Chance. */
        public Chance: number[];

        /**
         * Encodes the specified DB_Legend_TurnRate message. Does not implicitly {@link server.DB_Legend_TurnRate.verify|verify} messages.
         * @param m DB_Legend_TurnRate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Legend_TurnRate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Legend_TurnRate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Legend_TurnRate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Legend_TurnRate;
    }

    /** Properties of a DB_Legend_TurnRateArray. */
    interface IDB_Legend_TurnRateArray {

        /** DB_Legend_TurnRateArray Arr */
        Arr?: (server.IDB_Legend_TurnRate[] | null);
    }

    /** Represents a DB_Legend_TurnRateArray. */
    class DB_Legend_TurnRateArray implements IDB_Legend_TurnRateArray {

        /**
         * Constructs a new DB_Legend_TurnRateArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Legend_TurnRateArray);

        /** DB_Legend_TurnRateArray Arr. */
        public Arr: server.IDB_Legend_TurnRate[];

        /**
         * Encodes the specified DB_Legend_TurnRateArray message. Does not implicitly {@link server.DB_Legend_TurnRateArray.verify|verify} messages.
         * @param m DB_Legend_TurnRateArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Legend_TurnRateArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Legend_TurnRateArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Legend_TurnRateArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Legend_TurnRateArray;
    }

    /** Properties of a DB_Legend_Weight. */
    interface IDB_Legend_Weight {

        /** DB_Legend_Weight Id */
        Id?: (number | null);

        /** DB_Legend_Weight Name */
        Name?: (string | null);

        /** DB_Legend_Weight Weight */
        Weight?: (number[] | null);
    }

    /** Represents a DB_Legend_Weight. */
    class DB_Legend_Weight implements IDB_Legend_Weight {

        /**
         * Constructs a new DB_Legend_Weight.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Legend_Weight);

        /** DB_Legend_Weight Id. */
        public Id: number;

        /** DB_Legend_Weight Name. */
        public Name: string;

        /** DB_Legend_Weight Weight. */
        public Weight: number[];

        /**
         * Encodes the specified DB_Legend_Weight message. Does not implicitly {@link server.DB_Legend_Weight.verify|verify} messages.
         * @param m DB_Legend_Weight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Legend_Weight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Legend_Weight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Legend_Weight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Legend_Weight;
    }

    /** Properties of a DB_Legend_WeightArray. */
    interface IDB_Legend_WeightArray {

        /** DB_Legend_WeightArray Arr */
        Arr?: (server.IDB_Legend_Weight[] | null);
    }

    /** Represents a DB_Legend_WeightArray. */
    class DB_Legend_WeightArray implements IDB_Legend_WeightArray {

        /**
         * Constructs a new DB_Legend_WeightArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Legend_WeightArray);

        /** DB_Legend_WeightArray Arr. */
        public Arr: server.IDB_Legend_Weight[];

        /**
         * Encodes the specified DB_Legend_WeightArray message. Does not implicitly {@link server.DB_Legend_WeightArray.verify|verify} messages.
         * @param m DB_Legend_WeightArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Legend_WeightArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Legend_WeightArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Legend_WeightArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Legend_WeightArray;
    }

    /** Properties of a DB_Legend_WeightCondition. */
    interface IDB_Legend_WeightCondition {

        /** DB_Legend_WeightCondition Id */
        Id?: (number | null);

        /** DB_Legend_WeightCondition IsNew */
        IsNew?: (number | null);

        /** DB_Legend_WeightCondition BetScope */
        BetScope?: (number[] | null);

        /** DB_Legend_WeightCondition TrueCalcRate */
        TrueCalcRate?: (number[] | null);

        /** DB_Legend_WeightCondition WeightId */
        WeightId?: (number | null);
    }

    /** Represents a DB_Legend_WeightCondition. */
    class DB_Legend_WeightCondition implements IDB_Legend_WeightCondition {

        /**
         * Constructs a new DB_Legend_WeightCondition.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Legend_WeightCondition);

        /** DB_Legend_WeightCondition Id. */
        public Id: number;

        /** DB_Legend_WeightCondition IsNew. */
        public IsNew: number;

        /** DB_Legend_WeightCondition BetScope. */
        public BetScope: number[];

        /** DB_Legend_WeightCondition TrueCalcRate. */
        public TrueCalcRate: number[];

        /** DB_Legend_WeightCondition WeightId. */
        public WeightId: number;

        /**
         * Encodes the specified DB_Legend_WeightCondition message. Does not implicitly {@link server.DB_Legend_WeightCondition.verify|verify} messages.
         * @param m DB_Legend_WeightCondition message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Legend_WeightCondition, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Legend_WeightCondition message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Legend_WeightCondition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Legend_WeightCondition;
    }

    /** Properties of a DB_Legend_WeightConditionArray. */
    interface IDB_Legend_WeightConditionArray {

        /** DB_Legend_WeightConditionArray Arr */
        Arr?: (server.IDB_Legend_WeightCondition[] | null);
    }

    /** Represents a DB_Legend_WeightConditionArray. */
    class DB_Legend_WeightConditionArray implements IDB_Legend_WeightConditionArray {

        /**
         * Constructs a new DB_Legend_WeightConditionArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Legend_WeightConditionArray);

        /** DB_Legend_WeightConditionArray Arr. */
        public Arr: server.IDB_Legend_WeightCondition[];

        /**
         * Encodes the specified DB_Legend_WeightConditionArray message. Does not implicitly {@link server.DB_Legend_WeightConditionArray.verify|verify} messages.
         * @param m DB_Legend_WeightConditionArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Legend_WeightConditionArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Legend_WeightConditionArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Legend_WeightConditionArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Legend_WeightConditionArray;
    }

    /** Properties of a DB_Name. */
    interface IDB_Name {

        /** DB_Name Id */
        Id?: (number | null);

        /** DB_Name Name */
        Name?: (string | null);
    }

    /** Represents a DB_Name. */
    class DB_Name implements IDB_Name {

        /**
         * Constructs a new DB_Name.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Name);

        /** DB_Name Id. */
        public Id: number;

        /** DB_Name Name. */
        public Name: string;

        /**
         * Encodes the specified DB_Name message. Does not implicitly {@link server.DB_Name.verify|verify} messages.
         * @param m DB_Name message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Name, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Name message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Name
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Name;
    }

    /** Properties of a DB_NameArray. */
    interface IDB_NameArray {

        /** DB_NameArray Arr */
        Arr?: (server.IDB_Name[] | null);
    }

    /** Represents a DB_NameArray. */
    class DB_NameArray implements IDB_NameArray {

        /**
         * Constructs a new DB_NameArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_NameArray);

        /** DB_NameArray Arr. */
        public Arr: server.IDB_Name[];

        /**
         * Encodes the specified DB_NameArray message. Does not implicitly {@link server.DB_NameArray.verify|verify} messages.
         * @param m DB_NameArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_NameArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_NameArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_NameArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_NameArray;
    }

    /** Properties of a DB_NameBoy. */
    interface IDB_NameBoy {

        /** DB_NameBoy Id */
        Id?: (number | null);

        /** DB_NameBoy Name */
        Name?: (string | null);
    }

    /** Represents a DB_NameBoy. */
    class DB_NameBoy implements IDB_NameBoy {

        /**
         * Constructs a new DB_NameBoy.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_NameBoy);

        /** DB_NameBoy Id. */
        public Id: number;

        /** DB_NameBoy Name. */
        public Name: string;

        /**
         * Encodes the specified DB_NameBoy message. Does not implicitly {@link server.DB_NameBoy.verify|verify} messages.
         * @param m DB_NameBoy message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_NameBoy, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_NameBoy message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_NameBoy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_NameBoy;
    }

    /** Properties of a DB_NameBoyArray. */
    interface IDB_NameBoyArray {

        /** DB_NameBoyArray Arr */
        Arr?: (server.IDB_NameBoy[] | null);
    }

    /** Represents a DB_NameBoyArray. */
    class DB_NameBoyArray implements IDB_NameBoyArray {

        /**
         * Constructs a new DB_NameBoyArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_NameBoyArray);

        /** DB_NameBoyArray Arr. */
        public Arr: server.IDB_NameBoy[];

        /**
         * Encodes the specified DB_NameBoyArray message. Does not implicitly {@link server.DB_NameBoyArray.verify|verify} messages.
         * @param m DB_NameBoyArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_NameBoyArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_NameBoyArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_NameBoyArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_NameBoyArray;
    }

    /** Properties of a DB_NameGirl. */
    interface IDB_NameGirl {

        /** DB_NameGirl Id */
        Id?: (number | null);

        /** DB_NameGirl Name */
        Name?: (string | null);
    }

    /** Represents a DB_NameGirl. */
    class DB_NameGirl implements IDB_NameGirl {

        /**
         * Constructs a new DB_NameGirl.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_NameGirl);

        /** DB_NameGirl Id. */
        public Id: number;

        /** DB_NameGirl Name. */
        public Name: string;

        /**
         * Encodes the specified DB_NameGirl message. Does not implicitly {@link server.DB_NameGirl.verify|verify} messages.
         * @param m DB_NameGirl message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_NameGirl, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_NameGirl message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_NameGirl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_NameGirl;
    }

    /** Properties of a DB_NameGirlArray. */
    interface IDB_NameGirlArray {

        /** DB_NameGirlArray Arr */
        Arr?: (server.IDB_NameGirl[] | null);
    }

    /** Represents a DB_NameGirlArray. */
    class DB_NameGirlArray implements IDB_NameGirlArray {

        /**
         * Constructs a new DB_NameGirlArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_NameGirlArray);

        /** DB_NameGirlArray Arr. */
        public Arr: server.IDB_NameGirl[];

        /**
         * Encodes the specified DB_NameGirlArray message. Does not implicitly {@link server.DB_NameGirlArray.verify|verify} messages.
         * @param m DB_NameGirlArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_NameGirlArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_NameGirlArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_NameGirlArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_NameGirlArray;
    }

    /** Properties of a DB_PlayerInfo. */
    interface IDB_PlayerInfo {

        /** DB_PlayerInfo City */
        City?: (string | null);

        /** DB_PlayerInfo Head */
        Head?: (number | null);

        /** DB_PlayerInfo Name */
        Name?: (string | null);

        /** DB_PlayerInfo Sex */
        Sex?: (number | null);

        /** DB_PlayerInfo Id */
        Id?: (number | null);
    }

    /** Represents a DB_PlayerInfo. */
    class DB_PlayerInfo implements IDB_PlayerInfo {

        /**
         * Constructs a new DB_PlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_PlayerInfo);

        /** DB_PlayerInfo City. */
        public City: string;

        /** DB_PlayerInfo Head. */
        public Head: number;

        /** DB_PlayerInfo Name. */
        public Name: string;

        /** DB_PlayerInfo Sex. */
        public Sex: number;

        /** DB_PlayerInfo Id. */
        public Id: number;

        /**
         * Encodes the specified DB_PlayerInfo message. Does not implicitly {@link server.DB_PlayerInfo.verify|verify} messages.
         * @param m DB_PlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_PlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_PlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_PlayerInfo;
    }

    /** Properties of a DB_PlayerInfoArray. */
    interface IDB_PlayerInfoArray {

        /** DB_PlayerInfoArray Arr */
        Arr?: (server.IDB_PlayerInfo[] | null);
    }

    /** Represents a DB_PlayerInfoArray. */
    class DB_PlayerInfoArray implements IDB_PlayerInfoArray {

        /**
         * Constructs a new DB_PlayerInfoArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_PlayerInfoArray);

        /** DB_PlayerInfoArray Arr. */
        public Arr: server.IDB_PlayerInfo[];

        /**
         * Encodes the specified DB_PlayerInfoArray message. Does not implicitly {@link server.DB_PlayerInfoArray.verify|verify} messages.
         * @param m DB_PlayerInfoArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_PlayerInfoArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_PlayerInfoArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_PlayerInfoArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_PlayerInfoArray;
    }

    /** Properties of a DB_PlayerType. */
    interface IDB_PlayerType {

        /** DB_PlayerType Id */
        Id?: (number | null);

        /** DB_PlayerType Name */
        Name?: (string | null);

        /** DB_PlayerType GameFreeId */
        GameFreeId?: (number | null);

        /** DB_PlayerType PayLowerLimit */
        PayLowerLimit?: (number | null);

        /** DB_PlayerType PayUpperLimit */
        PayUpperLimit?: (number | null);

        /** DB_PlayerType GameTimeLowerLimit */
        GameTimeLowerLimit?: (number | null);

        /** DB_PlayerType GameTimeUpperLimit */
        GameTimeUpperLimit?: (number | null);

        /** DB_PlayerType TotalInLowerLimit */
        TotalInLowerLimit?: (number | null);

        /** DB_PlayerType TotalInUpperLimit */
        TotalInUpperLimit?: (number | null);

        /** DB_PlayerType OddsLowerLimit */
        OddsLowerLimit?: (number | null);

        /** DB_PlayerType OddsUpperLimit */
        OddsUpperLimit?: (number | null);

        /** DB_PlayerType LuckyRate */
        LuckyRate?: (number | null);

        /** DB_PlayerType ChangeCardRate */
        ChangeCardRate?: (number | null);

        /** DB_PlayerType CardValueRange */
        CardValueRange?: (number[] | null);

        /** DB_PlayerType MatchPriority */
        MatchPriority?: (number[] | null);

        /** DB_PlayerType ExcludeMatch */
        ExcludeMatch?: (number[] | null);

        /** DB_PlayerType CardLibRate */
        CardLibRate?: (number | null);

        /** DB_PlayerType CardLibArr */
        CardLibArr?: (number[] | null);
    }

    /** Represents a DB_PlayerType. */
    class DB_PlayerType implements IDB_PlayerType {

        /**
         * Constructs a new DB_PlayerType.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_PlayerType);

        /** DB_PlayerType Id. */
        public Id: number;

        /** DB_PlayerType Name. */
        public Name: string;

        /** DB_PlayerType GameFreeId. */
        public GameFreeId: number;

        /** DB_PlayerType PayLowerLimit. */
        public PayLowerLimit: number;

        /** DB_PlayerType PayUpperLimit. */
        public PayUpperLimit: number;

        /** DB_PlayerType GameTimeLowerLimit. */
        public GameTimeLowerLimit: number;

        /** DB_PlayerType GameTimeUpperLimit. */
        public GameTimeUpperLimit: number;

        /** DB_PlayerType TotalInLowerLimit. */
        public TotalInLowerLimit: number;

        /** DB_PlayerType TotalInUpperLimit. */
        public TotalInUpperLimit: number;

        /** DB_PlayerType OddsLowerLimit. */
        public OddsLowerLimit: number;

        /** DB_PlayerType OddsUpperLimit. */
        public OddsUpperLimit: number;

        /** DB_PlayerType LuckyRate. */
        public LuckyRate: number;

        /** DB_PlayerType ChangeCardRate. */
        public ChangeCardRate: number;

        /** DB_PlayerType CardValueRange. */
        public CardValueRange: number[];

        /** DB_PlayerType MatchPriority. */
        public MatchPriority: number[];

        /** DB_PlayerType ExcludeMatch. */
        public ExcludeMatch: number[];

        /** DB_PlayerType CardLibRate. */
        public CardLibRate: number;

        /** DB_PlayerType CardLibArr. */
        public CardLibArr: number[];

        /**
         * Encodes the specified DB_PlayerType message. Does not implicitly {@link server.DB_PlayerType.verify|verify} messages.
         * @param m DB_PlayerType message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_PlayerType, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_PlayerType message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_PlayerType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_PlayerType;
    }

    /** Properties of a DB_PlayerTypeArray. */
    interface IDB_PlayerTypeArray {

        /** DB_PlayerTypeArray Arr */
        Arr?: (server.IDB_PlayerType[] | null);
    }

    /** Represents a DB_PlayerTypeArray. */
    class DB_PlayerTypeArray implements IDB_PlayerTypeArray {

        /**
         * Constructs a new DB_PlayerTypeArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_PlayerTypeArray);

        /** DB_PlayerTypeArray Arr. */
        public Arr: server.IDB_PlayerType[];

        /**
         * Encodes the specified DB_PlayerTypeArray message. Does not implicitly {@link server.DB_PlayerTypeArray.verify|verify} messages.
         * @param m DB_PlayerTypeArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_PlayerTypeArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_PlayerTypeArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_PlayerTypeArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_PlayerTypeArray;
    }

    /** Properties of a DB_Policy101. */
    interface IDB_Policy101 {

        /** DB_Policy101 Id */
        Id?: (number | null);

        /** DB_Policy101 Time */
        Time?: (number | null);

        /** DB_Policy101 FishId */
        FishId?: (number | null);

        /** DB_Policy101 Paths */
        Paths?: (number[] | null);

        /** DB_Policy101 Count */
        Count?: (number | null);

        /** DB_Policy101 Speed */
        Speed?: (number | null);

        /** DB_Policy101 Event */
        Event?: (number | null);

        /** DB_Policy101 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy101 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy101. */
    class DB_Policy101 implements IDB_Policy101 {

        /**
         * Constructs a new DB_Policy101.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy101);

        /** DB_Policy101 Id. */
        public Id: number;

        /** DB_Policy101 Time. */
        public Time: number;

        /** DB_Policy101 FishId. */
        public FishId: number;

        /** DB_Policy101 Paths. */
        public Paths: number[];

        /** DB_Policy101 Count. */
        public Count: number;

        /** DB_Policy101 Speed. */
        public Speed: number;

        /** DB_Policy101 Event. */
        public Event: number;

        /** DB_Policy101 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy101 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy101 message. Does not implicitly {@link server.DB_Policy101.verify|verify} messages.
         * @param m DB_Policy101 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy101, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy101 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy101
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy101;
    }

    /** Properties of a DB_Policy101Array. */
    interface IDB_Policy101Array {

        /** DB_Policy101Array Arr */
        Arr?: (server.IDB_Policy101[] | null);
    }

    /** Represents a DB_Policy101Array. */
    class DB_Policy101Array implements IDB_Policy101Array {

        /**
         * Constructs a new DB_Policy101Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy101Array);

        /** DB_Policy101Array Arr. */
        public Arr: server.IDB_Policy101[];

        /**
         * Encodes the specified DB_Policy101Array message. Does not implicitly {@link server.DB_Policy101Array.verify|verify} messages.
         * @param m DB_Policy101Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy101Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy101Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy101Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy101Array;
    }

    /** Properties of a DB_Policy102. */
    interface IDB_Policy102 {

        /** DB_Policy102 Id */
        Id?: (number | null);

        /** DB_Policy102 Time */
        Time?: (number | null);

        /** DB_Policy102 FishId */
        FishId?: (number | null);

        /** DB_Policy102 Paths */
        Paths?: (number[] | null);

        /** DB_Policy102 Count */
        Count?: (number | null);

        /** DB_Policy102 Speed */
        Speed?: (number | null);

        /** DB_Policy102 Event */
        Event?: (number | null);

        /** DB_Policy102 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy102 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy102. */
    class DB_Policy102 implements IDB_Policy102 {

        /**
         * Constructs a new DB_Policy102.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy102);

        /** DB_Policy102 Id. */
        public Id: number;

        /** DB_Policy102 Time. */
        public Time: number;

        /** DB_Policy102 FishId. */
        public FishId: number;

        /** DB_Policy102 Paths. */
        public Paths: number[];

        /** DB_Policy102 Count. */
        public Count: number;

        /** DB_Policy102 Speed. */
        public Speed: number;

        /** DB_Policy102 Event. */
        public Event: number;

        /** DB_Policy102 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy102 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy102 message. Does not implicitly {@link server.DB_Policy102.verify|verify} messages.
         * @param m DB_Policy102 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy102, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy102 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy102
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy102;
    }

    /** Properties of a DB_Policy102Array. */
    interface IDB_Policy102Array {

        /** DB_Policy102Array Arr */
        Arr?: (server.IDB_Policy102[] | null);
    }

    /** Represents a DB_Policy102Array. */
    class DB_Policy102Array implements IDB_Policy102Array {

        /**
         * Constructs a new DB_Policy102Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy102Array);

        /** DB_Policy102Array Arr. */
        public Arr: server.IDB_Policy102[];

        /**
         * Encodes the specified DB_Policy102Array message. Does not implicitly {@link server.DB_Policy102Array.verify|verify} messages.
         * @param m DB_Policy102Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy102Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy102Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy102Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy102Array;
    }

    /** Properties of a DB_Policy103. */
    interface IDB_Policy103 {

        /** DB_Policy103 Id */
        Id?: (number | null);

        /** DB_Policy103 Time */
        Time?: (number | null);

        /** DB_Policy103 FishId */
        FishId?: (number | null);

        /** DB_Policy103 Paths */
        Paths?: (number[] | null);

        /** DB_Policy103 Count */
        Count?: (number | null);

        /** DB_Policy103 Speed */
        Speed?: (number | null);

        /** DB_Policy103 Event */
        Event?: (number | null);

        /** DB_Policy103 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy103 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy103. */
    class DB_Policy103 implements IDB_Policy103 {

        /**
         * Constructs a new DB_Policy103.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy103);

        /** DB_Policy103 Id. */
        public Id: number;

        /** DB_Policy103 Time. */
        public Time: number;

        /** DB_Policy103 FishId. */
        public FishId: number;

        /** DB_Policy103 Paths. */
        public Paths: number[];

        /** DB_Policy103 Count. */
        public Count: number;

        /** DB_Policy103 Speed. */
        public Speed: number;

        /** DB_Policy103 Event. */
        public Event: number;

        /** DB_Policy103 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy103 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy103 message. Does not implicitly {@link server.DB_Policy103.verify|verify} messages.
         * @param m DB_Policy103 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy103, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy103 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy103
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy103;
    }

    /** Properties of a DB_Policy103Array. */
    interface IDB_Policy103Array {

        /** DB_Policy103Array Arr */
        Arr?: (server.IDB_Policy103[] | null);
    }

    /** Represents a DB_Policy103Array. */
    class DB_Policy103Array implements IDB_Policy103Array {

        /**
         * Constructs a new DB_Policy103Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy103Array);

        /** DB_Policy103Array Arr. */
        public Arr: server.IDB_Policy103[];

        /**
         * Encodes the specified DB_Policy103Array message. Does not implicitly {@link server.DB_Policy103Array.verify|verify} messages.
         * @param m DB_Policy103Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy103Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy103Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy103Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy103Array;
    }

    /** Properties of a DB_Policy151. */
    interface IDB_Policy151 {

        /** DB_Policy151 Id */
        Id?: (number | null);

        /** DB_Policy151 Time */
        Time?: (number | null);

        /** DB_Policy151 FishId */
        FishId?: (number | null);

        /** DB_Policy151 Paths */
        Paths?: (number[] | null);

        /** DB_Policy151 Count */
        Count?: (number | null);

        /** DB_Policy151 Speed */
        Speed?: (number | null);

        /** DB_Policy151 Event */
        Event?: (number | null);

        /** DB_Policy151 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy151 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy151. */
    class DB_Policy151 implements IDB_Policy151 {

        /**
         * Constructs a new DB_Policy151.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy151);

        /** DB_Policy151 Id. */
        public Id: number;

        /** DB_Policy151 Time. */
        public Time: number;

        /** DB_Policy151 FishId. */
        public FishId: number;

        /** DB_Policy151 Paths. */
        public Paths: number[];

        /** DB_Policy151 Count. */
        public Count: number;

        /** DB_Policy151 Speed. */
        public Speed: number;

        /** DB_Policy151 Event. */
        public Event: number;

        /** DB_Policy151 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy151 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy151 message. Does not implicitly {@link server.DB_Policy151.verify|verify} messages.
         * @param m DB_Policy151 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy151, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy151 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy151
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy151;
    }

    /** Properties of a DB_Policy151Array. */
    interface IDB_Policy151Array {

        /** DB_Policy151Array Arr */
        Arr?: (server.IDB_Policy151[] | null);
    }

    /** Represents a DB_Policy151Array. */
    class DB_Policy151Array implements IDB_Policy151Array {

        /**
         * Constructs a new DB_Policy151Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy151Array);

        /** DB_Policy151Array Arr. */
        public Arr: server.IDB_Policy151[];

        /**
         * Encodes the specified DB_Policy151Array message. Does not implicitly {@link server.DB_Policy151Array.verify|verify} messages.
         * @param m DB_Policy151Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy151Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy151Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy151Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy151Array;
    }

    /** Properties of a DB_Policy152. */
    interface IDB_Policy152 {

        /** DB_Policy152 Id */
        Id?: (number | null);

        /** DB_Policy152 Time */
        Time?: (number | null);

        /** DB_Policy152 FishId */
        FishId?: (number | null);

        /** DB_Policy152 Paths */
        Paths?: (number[] | null);

        /** DB_Policy152 Count */
        Count?: (number | null);

        /** DB_Policy152 Speed */
        Speed?: (number | null);

        /** DB_Policy152 Event */
        Event?: (number | null);

        /** DB_Policy152 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy152 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy152. */
    class DB_Policy152 implements IDB_Policy152 {

        /**
         * Constructs a new DB_Policy152.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy152);

        /** DB_Policy152 Id. */
        public Id: number;

        /** DB_Policy152 Time. */
        public Time: number;

        /** DB_Policy152 FishId. */
        public FishId: number;

        /** DB_Policy152 Paths. */
        public Paths: number[];

        /** DB_Policy152 Count. */
        public Count: number;

        /** DB_Policy152 Speed. */
        public Speed: number;

        /** DB_Policy152 Event. */
        public Event: number;

        /** DB_Policy152 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy152 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy152 message. Does not implicitly {@link server.DB_Policy152.verify|verify} messages.
         * @param m DB_Policy152 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy152, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy152 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy152
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy152;
    }

    /** Properties of a DB_Policy152Array. */
    interface IDB_Policy152Array {

        /** DB_Policy152Array Arr */
        Arr?: (server.IDB_Policy152[] | null);
    }

    /** Represents a DB_Policy152Array. */
    class DB_Policy152Array implements IDB_Policy152Array {

        /**
         * Constructs a new DB_Policy152Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy152Array);

        /** DB_Policy152Array Arr. */
        public Arr: server.IDB_Policy152[];

        /**
         * Encodes the specified DB_Policy152Array message. Does not implicitly {@link server.DB_Policy152Array.verify|verify} messages.
         * @param m DB_Policy152Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy152Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy152Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy152Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy152Array;
    }

    /** Properties of a DB_Policy153. */
    interface IDB_Policy153 {

        /** DB_Policy153 Id */
        Id?: (number | null);

        /** DB_Policy153 Time */
        Time?: (number | null);

        /** DB_Policy153 FishId */
        FishId?: (number | null);

        /** DB_Policy153 Paths */
        Paths?: (number[] | null);

        /** DB_Policy153 Count */
        Count?: (number | null);

        /** DB_Policy153 Speed */
        Speed?: (number | null);

        /** DB_Policy153 Event */
        Event?: (number | null);

        /** DB_Policy153 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy153 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy153. */
    class DB_Policy153 implements IDB_Policy153 {

        /**
         * Constructs a new DB_Policy153.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy153);

        /** DB_Policy153 Id. */
        public Id: number;

        /** DB_Policy153 Time. */
        public Time: number;

        /** DB_Policy153 FishId. */
        public FishId: number;

        /** DB_Policy153 Paths. */
        public Paths: number[];

        /** DB_Policy153 Count. */
        public Count: number;

        /** DB_Policy153 Speed. */
        public Speed: number;

        /** DB_Policy153 Event. */
        public Event: number;

        /** DB_Policy153 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy153 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy153 message. Does not implicitly {@link server.DB_Policy153.verify|verify} messages.
         * @param m DB_Policy153 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy153, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy153 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy153
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy153;
    }

    /** Properties of a DB_Policy153Array. */
    interface IDB_Policy153Array {

        /** DB_Policy153Array Arr */
        Arr?: (server.IDB_Policy153[] | null);
    }

    /** Represents a DB_Policy153Array. */
    class DB_Policy153Array implements IDB_Policy153Array {

        /**
         * Constructs a new DB_Policy153Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy153Array);

        /** DB_Policy153Array Arr. */
        public Arr: server.IDB_Policy153[];

        /**
         * Encodes the specified DB_Policy153Array message. Does not implicitly {@link server.DB_Policy153Array.verify|verify} messages.
         * @param m DB_Policy153Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy153Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy153Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy153Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy153Array;
    }

    /** Properties of a DB_Policy201. */
    interface IDB_Policy201 {

        /** DB_Policy201 Id */
        Id?: (number | null);

        /** DB_Policy201 Time */
        Time?: (number | null);

        /** DB_Policy201 FishId */
        FishId?: (number | null);

        /** DB_Policy201 Paths */
        Paths?: (number[] | null);

        /** DB_Policy201 Count */
        Count?: (number | null);

        /** DB_Policy201 Speed */
        Speed?: (number | null);

        /** DB_Policy201 Event */
        Event?: (number | null);

        /** DB_Policy201 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy201 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy201. */
    class DB_Policy201 implements IDB_Policy201 {

        /**
         * Constructs a new DB_Policy201.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy201);

        /** DB_Policy201 Id. */
        public Id: number;

        /** DB_Policy201 Time. */
        public Time: number;

        /** DB_Policy201 FishId. */
        public FishId: number;

        /** DB_Policy201 Paths. */
        public Paths: number[];

        /** DB_Policy201 Count. */
        public Count: number;

        /** DB_Policy201 Speed. */
        public Speed: number;

        /** DB_Policy201 Event. */
        public Event: number;

        /** DB_Policy201 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy201 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy201 message. Does not implicitly {@link server.DB_Policy201.verify|verify} messages.
         * @param m DB_Policy201 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy201, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy201 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy201
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy201;
    }

    /** Properties of a DB_Policy201Array. */
    interface IDB_Policy201Array {

        /** DB_Policy201Array Arr */
        Arr?: (server.IDB_Policy201[] | null);
    }

    /** Represents a DB_Policy201Array. */
    class DB_Policy201Array implements IDB_Policy201Array {

        /**
         * Constructs a new DB_Policy201Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy201Array);

        /** DB_Policy201Array Arr. */
        public Arr: server.IDB_Policy201[];

        /**
         * Encodes the specified DB_Policy201Array message. Does not implicitly {@link server.DB_Policy201Array.verify|verify} messages.
         * @param m DB_Policy201Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy201Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy201Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy201Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy201Array;
    }

    /** Properties of a DB_Policy202. */
    interface IDB_Policy202 {

        /** DB_Policy202 Id */
        Id?: (number | null);

        /** DB_Policy202 Time */
        Time?: (number | null);

        /** DB_Policy202 FishId */
        FishId?: (number | null);

        /** DB_Policy202 Paths */
        Paths?: (number[] | null);

        /** DB_Policy202 Count */
        Count?: (number | null);

        /** DB_Policy202 Speed */
        Speed?: (number | null);

        /** DB_Policy202 Event */
        Event?: (number | null);

        /** DB_Policy202 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy202 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy202. */
    class DB_Policy202 implements IDB_Policy202 {

        /**
         * Constructs a new DB_Policy202.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy202);

        /** DB_Policy202 Id. */
        public Id: number;

        /** DB_Policy202 Time. */
        public Time: number;

        /** DB_Policy202 FishId. */
        public FishId: number;

        /** DB_Policy202 Paths. */
        public Paths: number[];

        /** DB_Policy202 Count. */
        public Count: number;

        /** DB_Policy202 Speed. */
        public Speed: number;

        /** DB_Policy202 Event. */
        public Event: number;

        /** DB_Policy202 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy202 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy202 message. Does not implicitly {@link server.DB_Policy202.verify|verify} messages.
         * @param m DB_Policy202 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy202, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy202 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy202
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy202;
    }

    /** Properties of a DB_Policy202Array. */
    interface IDB_Policy202Array {

        /** DB_Policy202Array Arr */
        Arr?: (server.IDB_Policy202[] | null);
    }

    /** Represents a DB_Policy202Array. */
    class DB_Policy202Array implements IDB_Policy202Array {

        /**
         * Constructs a new DB_Policy202Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy202Array);

        /** DB_Policy202Array Arr. */
        public Arr: server.IDB_Policy202[];

        /**
         * Encodes the specified DB_Policy202Array message. Does not implicitly {@link server.DB_Policy202Array.verify|verify} messages.
         * @param m DB_Policy202Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy202Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy202Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy202Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy202Array;
    }

    /** Properties of a DB_Policy203. */
    interface IDB_Policy203 {

        /** DB_Policy203 Id */
        Id?: (number | null);

        /** DB_Policy203 Time */
        Time?: (number | null);

        /** DB_Policy203 FishId */
        FishId?: (number | null);

        /** DB_Policy203 Paths */
        Paths?: (number[] | null);

        /** DB_Policy203 Count */
        Count?: (number | null);

        /** DB_Policy203 Speed */
        Speed?: (number | null);

        /** DB_Policy203 Event */
        Event?: (number | null);

        /** DB_Policy203 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy203 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy203. */
    class DB_Policy203 implements IDB_Policy203 {

        /**
         * Constructs a new DB_Policy203.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy203);

        /** DB_Policy203 Id. */
        public Id: number;

        /** DB_Policy203 Time. */
        public Time: number;

        /** DB_Policy203 FishId. */
        public FishId: number;

        /** DB_Policy203 Paths. */
        public Paths: number[];

        /** DB_Policy203 Count. */
        public Count: number;

        /** DB_Policy203 Speed. */
        public Speed: number;

        /** DB_Policy203 Event. */
        public Event: number;

        /** DB_Policy203 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy203 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy203 message. Does not implicitly {@link server.DB_Policy203.verify|verify} messages.
         * @param m DB_Policy203 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy203, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy203 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy203
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy203;
    }

    /** Properties of a DB_Policy203Array. */
    interface IDB_Policy203Array {

        /** DB_Policy203Array Arr */
        Arr?: (server.IDB_Policy203[] | null);
    }

    /** Represents a DB_Policy203Array. */
    class DB_Policy203Array implements IDB_Policy203Array {

        /**
         * Constructs a new DB_Policy203Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy203Array);

        /** DB_Policy203Array Arr. */
        public Arr: server.IDB_Policy203[];

        /**
         * Encodes the specified DB_Policy203Array message. Does not implicitly {@link server.DB_Policy203Array.verify|verify} messages.
         * @param m DB_Policy203Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy203Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy203Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy203Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy203Array;
    }

    /** Properties of a DB_Policy251. */
    interface IDB_Policy251 {

        /** DB_Policy251 Id */
        Id?: (number | null);

        /** DB_Policy251 Time */
        Time?: (number | null);

        /** DB_Policy251 FishId */
        FishId?: (number | null);

        /** DB_Policy251 Paths */
        Paths?: (number[] | null);

        /** DB_Policy251 Count */
        Count?: (number | null);

        /** DB_Policy251 Speed */
        Speed?: (number | null);

        /** DB_Policy251 Event */
        Event?: (number | null);

        /** DB_Policy251 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy251 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy251. */
    class DB_Policy251 implements IDB_Policy251 {

        /**
         * Constructs a new DB_Policy251.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy251);

        /** DB_Policy251 Id. */
        public Id: number;

        /** DB_Policy251 Time. */
        public Time: number;

        /** DB_Policy251 FishId. */
        public FishId: number;

        /** DB_Policy251 Paths. */
        public Paths: number[];

        /** DB_Policy251 Count. */
        public Count: number;

        /** DB_Policy251 Speed. */
        public Speed: number;

        /** DB_Policy251 Event. */
        public Event: number;

        /** DB_Policy251 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy251 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy251 message. Does not implicitly {@link server.DB_Policy251.verify|verify} messages.
         * @param m DB_Policy251 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy251, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy251 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy251
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy251;
    }

    /** Properties of a DB_Policy251Array. */
    interface IDB_Policy251Array {

        /** DB_Policy251Array Arr */
        Arr?: (server.IDB_Policy251[] | null);
    }

    /** Represents a DB_Policy251Array. */
    class DB_Policy251Array implements IDB_Policy251Array {

        /**
         * Constructs a new DB_Policy251Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy251Array);

        /** DB_Policy251Array Arr. */
        public Arr: server.IDB_Policy251[];

        /**
         * Encodes the specified DB_Policy251Array message. Does not implicitly {@link server.DB_Policy251Array.verify|verify} messages.
         * @param m DB_Policy251Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy251Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy251Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy251Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy251Array;
    }

    /** Properties of a DB_Policy252. */
    interface IDB_Policy252 {

        /** DB_Policy252 Id */
        Id?: (number | null);

        /** DB_Policy252 Time */
        Time?: (number | null);

        /** DB_Policy252 FishId */
        FishId?: (number | null);

        /** DB_Policy252 Paths */
        Paths?: (number[] | null);

        /** DB_Policy252 Count */
        Count?: (number | null);

        /** DB_Policy252 Speed */
        Speed?: (number | null);

        /** DB_Policy252 Event */
        Event?: (number | null);

        /** DB_Policy252 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy252 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy252. */
    class DB_Policy252 implements IDB_Policy252 {

        /**
         * Constructs a new DB_Policy252.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy252);

        /** DB_Policy252 Id. */
        public Id: number;

        /** DB_Policy252 Time. */
        public Time: number;

        /** DB_Policy252 FishId. */
        public FishId: number;

        /** DB_Policy252 Paths. */
        public Paths: number[];

        /** DB_Policy252 Count. */
        public Count: number;

        /** DB_Policy252 Speed. */
        public Speed: number;

        /** DB_Policy252 Event. */
        public Event: number;

        /** DB_Policy252 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy252 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy252 message. Does not implicitly {@link server.DB_Policy252.verify|verify} messages.
         * @param m DB_Policy252 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy252, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy252 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy252
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy252;
    }

    /** Properties of a DB_Policy252Array. */
    interface IDB_Policy252Array {

        /** DB_Policy252Array Arr */
        Arr?: (server.IDB_Policy252[] | null);
    }

    /** Represents a DB_Policy252Array. */
    class DB_Policy252Array implements IDB_Policy252Array {

        /**
         * Constructs a new DB_Policy252Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy252Array);

        /** DB_Policy252Array Arr. */
        public Arr: server.IDB_Policy252[];

        /**
         * Encodes the specified DB_Policy252Array message. Does not implicitly {@link server.DB_Policy252Array.verify|verify} messages.
         * @param m DB_Policy252Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy252Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy252Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy252Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy252Array;
    }

    /** Properties of a DB_Policy253. */
    interface IDB_Policy253 {

        /** DB_Policy253 Id */
        Id?: (number | null);

        /** DB_Policy253 Time */
        Time?: (number | null);

        /** DB_Policy253 FishId */
        FishId?: (number | null);

        /** DB_Policy253 Paths */
        Paths?: (number[] | null);

        /** DB_Policy253 Count */
        Count?: (number | null);

        /** DB_Policy253 Speed */
        Speed?: (number | null);

        /** DB_Policy253 Event */
        Event?: (number | null);

        /** DB_Policy253 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy253 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy253. */
    class DB_Policy253 implements IDB_Policy253 {

        /**
         * Constructs a new DB_Policy253.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy253);

        /** DB_Policy253 Id. */
        public Id: number;

        /** DB_Policy253 Time. */
        public Time: number;

        /** DB_Policy253 FishId. */
        public FishId: number;

        /** DB_Policy253 Paths. */
        public Paths: number[];

        /** DB_Policy253 Count. */
        public Count: number;

        /** DB_Policy253 Speed. */
        public Speed: number;

        /** DB_Policy253 Event. */
        public Event: number;

        /** DB_Policy253 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy253 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy253 message. Does not implicitly {@link server.DB_Policy253.verify|verify} messages.
         * @param m DB_Policy253 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy253, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy253 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy253
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy253;
    }

    /** Properties of a DB_Policy253Array. */
    interface IDB_Policy253Array {

        /** DB_Policy253Array Arr */
        Arr?: (server.IDB_Policy253[] | null);
    }

    /** Represents a DB_Policy253Array. */
    class DB_Policy253Array implements IDB_Policy253Array {

        /**
         * Constructs a new DB_Policy253Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy253Array);

        /** DB_Policy253Array Arr. */
        public Arr: server.IDB_Policy253[];

        /**
         * Encodes the specified DB_Policy253Array message. Does not implicitly {@link server.DB_Policy253Array.verify|verify} messages.
         * @param m DB_Policy253Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy253Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy253Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy253Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy253Array;
    }

    /** Properties of a DB_Policy301. */
    interface IDB_Policy301 {

        /** DB_Policy301 Id */
        Id?: (number | null);

        /** DB_Policy301 Time */
        Time?: (number | null);

        /** DB_Policy301 FishId */
        FishId?: (number | null);

        /** DB_Policy301 Paths */
        Paths?: (number[] | null);

        /** DB_Policy301 Count */
        Count?: (number | null);

        /** DB_Policy301 Speed */
        Speed?: (number | null);

        /** DB_Policy301 Event */
        Event?: (number | null);

        /** DB_Policy301 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy301 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy301. */
    class DB_Policy301 implements IDB_Policy301 {

        /**
         * Constructs a new DB_Policy301.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy301);

        /** DB_Policy301 Id. */
        public Id: number;

        /** DB_Policy301 Time. */
        public Time: number;

        /** DB_Policy301 FishId. */
        public FishId: number;

        /** DB_Policy301 Paths. */
        public Paths: number[];

        /** DB_Policy301 Count. */
        public Count: number;

        /** DB_Policy301 Speed. */
        public Speed: number;

        /** DB_Policy301 Event. */
        public Event: number;

        /** DB_Policy301 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy301 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy301 message. Does not implicitly {@link server.DB_Policy301.verify|verify} messages.
         * @param m DB_Policy301 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy301, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy301 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy301
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy301;
    }

    /** Properties of a DB_Policy301Array. */
    interface IDB_Policy301Array {

        /** DB_Policy301Array Arr */
        Arr?: (server.IDB_Policy301[] | null);
    }

    /** Represents a DB_Policy301Array. */
    class DB_Policy301Array implements IDB_Policy301Array {

        /**
         * Constructs a new DB_Policy301Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy301Array);

        /** DB_Policy301Array Arr. */
        public Arr: server.IDB_Policy301[];

        /**
         * Encodes the specified DB_Policy301Array message. Does not implicitly {@link server.DB_Policy301Array.verify|verify} messages.
         * @param m DB_Policy301Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy301Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy301Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy301Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy301Array;
    }

    /** Properties of a DB_Policy302. */
    interface IDB_Policy302 {

        /** DB_Policy302 Id */
        Id?: (number | null);

        /** DB_Policy302 Time */
        Time?: (number | null);

        /** DB_Policy302 FishId */
        FishId?: (number | null);

        /** DB_Policy302 Paths */
        Paths?: (number[] | null);

        /** DB_Policy302 Count */
        Count?: (number | null);

        /** DB_Policy302 Speed */
        Speed?: (number | null);

        /** DB_Policy302 Event */
        Event?: (number | null);

        /** DB_Policy302 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy302 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy302. */
    class DB_Policy302 implements IDB_Policy302 {

        /**
         * Constructs a new DB_Policy302.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy302);

        /** DB_Policy302 Id. */
        public Id: number;

        /** DB_Policy302 Time. */
        public Time: number;

        /** DB_Policy302 FishId. */
        public FishId: number;

        /** DB_Policy302 Paths. */
        public Paths: number[];

        /** DB_Policy302 Count. */
        public Count: number;

        /** DB_Policy302 Speed. */
        public Speed: number;

        /** DB_Policy302 Event. */
        public Event: number;

        /** DB_Policy302 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy302 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy302 message. Does not implicitly {@link server.DB_Policy302.verify|verify} messages.
         * @param m DB_Policy302 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy302, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy302 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy302
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy302;
    }

    /** Properties of a DB_Policy302Array. */
    interface IDB_Policy302Array {

        /** DB_Policy302Array Arr */
        Arr?: (server.IDB_Policy302[] | null);
    }

    /** Represents a DB_Policy302Array. */
    class DB_Policy302Array implements IDB_Policy302Array {

        /**
         * Constructs a new DB_Policy302Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy302Array);

        /** DB_Policy302Array Arr. */
        public Arr: server.IDB_Policy302[];

        /**
         * Encodes the specified DB_Policy302Array message. Does not implicitly {@link server.DB_Policy302Array.verify|verify} messages.
         * @param m DB_Policy302Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy302Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy302Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy302Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy302Array;
    }

    /** Properties of a DB_Policy303. */
    interface IDB_Policy303 {

        /** DB_Policy303 Id */
        Id?: (number | null);

        /** DB_Policy303 Time */
        Time?: (number | null);

        /** DB_Policy303 FishId */
        FishId?: (number | null);

        /** DB_Policy303 Paths */
        Paths?: (number[] | null);

        /** DB_Policy303 Count */
        Count?: (number | null);

        /** DB_Policy303 Speed */
        Speed?: (number | null);

        /** DB_Policy303 Event */
        Event?: (number | null);

        /** DB_Policy303 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy303 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy303. */
    class DB_Policy303 implements IDB_Policy303 {

        /**
         * Constructs a new DB_Policy303.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy303);

        /** DB_Policy303 Id. */
        public Id: number;

        /** DB_Policy303 Time. */
        public Time: number;

        /** DB_Policy303 FishId. */
        public FishId: number;

        /** DB_Policy303 Paths. */
        public Paths: number[];

        /** DB_Policy303 Count. */
        public Count: number;

        /** DB_Policy303 Speed. */
        public Speed: number;

        /** DB_Policy303 Event. */
        public Event: number;

        /** DB_Policy303 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy303 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy303 message. Does not implicitly {@link server.DB_Policy303.verify|verify} messages.
         * @param m DB_Policy303 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy303, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy303 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy303
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy303;
    }

    /** Properties of a DB_Policy303Array. */
    interface IDB_Policy303Array {

        /** DB_Policy303Array Arr */
        Arr?: (server.IDB_Policy303[] | null);
    }

    /** Represents a DB_Policy303Array. */
    class DB_Policy303Array implements IDB_Policy303Array {

        /**
         * Constructs a new DB_Policy303Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy303Array);

        /** DB_Policy303Array Arr. */
        public Arr: server.IDB_Policy303[];

        /**
         * Encodes the specified DB_Policy303Array message. Does not implicitly {@link server.DB_Policy303Array.verify|verify} messages.
         * @param m DB_Policy303Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy303Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy303Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy303Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy303Array;
    }

    /** Properties of a DB_Policy351. */
    interface IDB_Policy351 {

        /** DB_Policy351 Id */
        Id?: (number | null);

        /** DB_Policy351 Time */
        Time?: (number | null);

        /** DB_Policy351 FishId */
        FishId?: (number | null);

        /** DB_Policy351 Paths */
        Paths?: (number[] | null);

        /** DB_Policy351 Count */
        Count?: (number | null);

        /** DB_Policy351 Speed */
        Speed?: (number | null);

        /** DB_Policy351 Event */
        Event?: (number | null);

        /** DB_Policy351 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy351 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy351. */
    class DB_Policy351 implements IDB_Policy351 {

        /**
         * Constructs a new DB_Policy351.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy351);

        /** DB_Policy351 Id. */
        public Id: number;

        /** DB_Policy351 Time. */
        public Time: number;

        /** DB_Policy351 FishId. */
        public FishId: number;

        /** DB_Policy351 Paths. */
        public Paths: number[];

        /** DB_Policy351 Count. */
        public Count: number;

        /** DB_Policy351 Speed. */
        public Speed: number;

        /** DB_Policy351 Event. */
        public Event: number;

        /** DB_Policy351 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy351 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy351 message. Does not implicitly {@link server.DB_Policy351.verify|verify} messages.
         * @param m DB_Policy351 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy351, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy351 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy351
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy351;
    }

    /** Properties of a DB_Policy351Array. */
    interface IDB_Policy351Array {

        /** DB_Policy351Array Arr */
        Arr?: (server.IDB_Policy351[] | null);
    }

    /** Represents a DB_Policy351Array. */
    class DB_Policy351Array implements IDB_Policy351Array {

        /**
         * Constructs a new DB_Policy351Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy351Array);

        /** DB_Policy351Array Arr. */
        public Arr: server.IDB_Policy351[];

        /**
         * Encodes the specified DB_Policy351Array message. Does not implicitly {@link server.DB_Policy351Array.verify|verify} messages.
         * @param m DB_Policy351Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy351Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy351Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy351Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy351Array;
    }

    /** Properties of a DB_Policy352. */
    interface IDB_Policy352 {

        /** DB_Policy352 Id */
        Id?: (number | null);

        /** DB_Policy352 Time */
        Time?: (number | null);

        /** DB_Policy352 FishId */
        FishId?: (number | null);

        /** DB_Policy352 Paths */
        Paths?: (number[] | null);

        /** DB_Policy352 Count */
        Count?: (number | null);

        /** DB_Policy352 Speed */
        Speed?: (number | null);

        /** DB_Policy352 Event */
        Event?: (number | null);

        /** DB_Policy352 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy352 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy352. */
    class DB_Policy352 implements IDB_Policy352 {

        /**
         * Constructs a new DB_Policy352.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy352);

        /** DB_Policy352 Id. */
        public Id: number;

        /** DB_Policy352 Time. */
        public Time: number;

        /** DB_Policy352 FishId. */
        public FishId: number;

        /** DB_Policy352 Paths. */
        public Paths: number[];

        /** DB_Policy352 Count. */
        public Count: number;

        /** DB_Policy352 Speed. */
        public Speed: number;

        /** DB_Policy352 Event. */
        public Event: number;

        /** DB_Policy352 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy352 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy352 message. Does not implicitly {@link server.DB_Policy352.verify|verify} messages.
         * @param m DB_Policy352 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy352, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy352 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy352
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy352;
    }

    /** Properties of a DB_Policy352Array. */
    interface IDB_Policy352Array {

        /** DB_Policy352Array Arr */
        Arr?: (server.IDB_Policy352[] | null);
    }

    /** Represents a DB_Policy352Array. */
    class DB_Policy352Array implements IDB_Policy352Array {

        /**
         * Constructs a new DB_Policy352Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy352Array);

        /** DB_Policy352Array Arr. */
        public Arr: server.IDB_Policy352[];

        /**
         * Encodes the specified DB_Policy352Array message. Does not implicitly {@link server.DB_Policy352Array.verify|verify} messages.
         * @param m DB_Policy352Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy352Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy352Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy352Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy352Array;
    }

    /** Properties of a DB_Policy353. */
    interface IDB_Policy353 {

        /** DB_Policy353 Id */
        Id?: (number | null);

        /** DB_Policy353 Time */
        Time?: (number | null);

        /** DB_Policy353 FishId */
        FishId?: (number | null);

        /** DB_Policy353 Paths */
        Paths?: (number[] | null);

        /** DB_Policy353 Count */
        Count?: (number | null);

        /** DB_Policy353 Speed */
        Speed?: (number | null);

        /** DB_Policy353 Event */
        Event?: (number | null);

        /** DB_Policy353 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy353 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy353. */
    class DB_Policy353 implements IDB_Policy353 {

        /**
         * Constructs a new DB_Policy353.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy353);

        /** DB_Policy353 Id. */
        public Id: number;

        /** DB_Policy353 Time. */
        public Time: number;

        /** DB_Policy353 FishId. */
        public FishId: number;

        /** DB_Policy353 Paths. */
        public Paths: number[];

        /** DB_Policy353 Count. */
        public Count: number;

        /** DB_Policy353 Speed. */
        public Speed: number;

        /** DB_Policy353 Event. */
        public Event: number;

        /** DB_Policy353 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy353 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy353 message. Does not implicitly {@link server.DB_Policy353.verify|verify} messages.
         * @param m DB_Policy353 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy353, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy353 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy353
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy353;
    }

    /** Properties of a DB_Policy353Array. */
    interface IDB_Policy353Array {

        /** DB_Policy353Array Arr */
        Arr?: (server.IDB_Policy353[] | null);
    }

    /** Represents a DB_Policy353Array. */
    class DB_Policy353Array implements IDB_Policy353Array {

        /**
         * Constructs a new DB_Policy353Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy353Array);

        /** DB_Policy353Array Arr. */
        public Arr: server.IDB_Policy353[];

        /**
         * Encodes the specified DB_Policy353Array message. Does not implicitly {@link server.DB_Policy353Array.verify|verify} messages.
         * @param m DB_Policy353Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy353Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy353Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy353Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy353Array;
    }

    /** Properties of a DB_Policy401. */
    interface IDB_Policy401 {

        /** DB_Policy401 Id */
        Id?: (number | null);

        /** DB_Policy401 Time */
        Time?: (number | null);

        /** DB_Policy401 FishId */
        FishId?: (number | null);

        /** DB_Policy401 Paths */
        Paths?: (number[] | null);

        /** DB_Policy401 Count */
        Count?: (number | null);

        /** DB_Policy401 Speed */
        Speed?: (number | null);

        /** DB_Policy401 Event */
        Event?: (number | null);

        /** DB_Policy401 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy401 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy401. */
    class DB_Policy401 implements IDB_Policy401 {

        /**
         * Constructs a new DB_Policy401.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy401);

        /** DB_Policy401 Id. */
        public Id: number;

        /** DB_Policy401 Time. */
        public Time: number;

        /** DB_Policy401 FishId. */
        public FishId: number;

        /** DB_Policy401 Paths. */
        public Paths: number[];

        /** DB_Policy401 Count. */
        public Count: number;

        /** DB_Policy401 Speed. */
        public Speed: number;

        /** DB_Policy401 Event. */
        public Event: number;

        /** DB_Policy401 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy401 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy401 message. Does not implicitly {@link server.DB_Policy401.verify|verify} messages.
         * @param m DB_Policy401 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy401, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy401 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy401
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy401;
    }

    /** Properties of a DB_Policy401Array. */
    interface IDB_Policy401Array {

        /** DB_Policy401Array Arr */
        Arr?: (server.IDB_Policy401[] | null);
    }

    /** Represents a DB_Policy401Array. */
    class DB_Policy401Array implements IDB_Policy401Array {

        /**
         * Constructs a new DB_Policy401Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy401Array);

        /** DB_Policy401Array Arr. */
        public Arr: server.IDB_Policy401[];

        /**
         * Encodes the specified DB_Policy401Array message. Does not implicitly {@link server.DB_Policy401Array.verify|verify} messages.
         * @param m DB_Policy401Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy401Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy401Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy401Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy401Array;
    }

    /** Properties of a DB_Policy402. */
    interface IDB_Policy402 {

        /** DB_Policy402 Id */
        Id?: (number | null);

        /** DB_Policy402 Time */
        Time?: (number | null);

        /** DB_Policy402 FishId */
        FishId?: (number | null);

        /** DB_Policy402 Paths */
        Paths?: (number[] | null);

        /** DB_Policy402 Count */
        Count?: (number | null);

        /** DB_Policy402 Speed */
        Speed?: (number | null);

        /** DB_Policy402 Event */
        Event?: (number | null);

        /** DB_Policy402 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy402 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy402. */
    class DB_Policy402 implements IDB_Policy402 {

        /**
         * Constructs a new DB_Policy402.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy402);

        /** DB_Policy402 Id. */
        public Id: number;

        /** DB_Policy402 Time. */
        public Time: number;

        /** DB_Policy402 FishId. */
        public FishId: number;

        /** DB_Policy402 Paths. */
        public Paths: number[];

        /** DB_Policy402 Count. */
        public Count: number;

        /** DB_Policy402 Speed. */
        public Speed: number;

        /** DB_Policy402 Event. */
        public Event: number;

        /** DB_Policy402 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy402 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy402 message. Does not implicitly {@link server.DB_Policy402.verify|verify} messages.
         * @param m DB_Policy402 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy402, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy402 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy402
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy402;
    }

    /** Properties of a DB_Policy402Array. */
    interface IDB_Policy402Array {

        /** DB_Policy402Array Arr */
        Arr?: (server.IDB_Policy402[] | null);
    }

    /** Represents a DB_Policy402Array. */
    class DB_Policy402Array implements IDB_Policy402Array {

        /**
         * Constructs a new DB_Policy402Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy402Array);

        /** DB_Policy402Array Arr. */
        public Arr: server.IDB_Policy402[];

        /**
         * Encodes the specified DB_Policy402Array message. Does not implicitly {@link server.DB_Policy402Array.verify|verify} messages.
         * @param m DB_Policy402Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy402Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy402Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy402Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy402Array;
    }

    /** Properties of a DB_Policy403. */
    interface IDB_Policy403 {

        /** DB_Policy403 Id */
        Id?: (number | null);

        /** DB_Policy403 Time */
        Time?: (number | null);

        /** DB_Policy403 FishId */
        FishId?: (number | null);

        /** DB_Policy403 Paths */
        Paths?: (number[] | null);

        /** DB_Policy403 Count */
        Count?: (number | null);

        /** DB_Policy403 Speed */
        Speed?: (number | null);

        /** DB_Policy403 Event */
        Event?: (number | null);

        /** DB_Policy403 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy403 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy403. */
    class DB_Policy403 implements IDB_Policy403 {

        /**
         * Constructs a new DB_Policy403.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy403);

        /** DB_Policy403 Id. */
        public Id: number;

        /** DB_Policy403 Time. */
        public Time: number;

        /** DB_Policy403 FishId. */
        public FishId: number;

        /** DB_Policy403 Paths. */
        public Paths: number[];

        /** DB_Policy403 Count. */
        public Count: number;

        /** DB_Policy403 Speed. */
        public Speed: number;

        /** DB_Policy403 Event. */
        public Event: number;

        /** DB_Policy403 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy403 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy403 message. Does not implicitly {@link server.DB_Policy403.verify|verify} messages.
         * @param m DB_Policy403 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy403, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy403 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy403
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy403;
    }

    /** Properties of a DB_Policy403Array. */
    interface IDB_Policy403Array {

        /** DB_Policy403Array Arr */
        Arr?: (server.IDB_Policy403[] | null);
    }

    /** Represents a DB_Policy403Array. */
    class DB_Policy403Array implements IDB_Policy403Array {

        /**
         * Constructs a new DB_Policy403Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy403Array);

        /** DB_Policy403Array Arr. */
        public Arr: server.IDB_Policy403[];

        /**
         * Encodes the specified DB_Policy403Array message. Does not implicitly {@link server.DB_Policy403Array.verify|verify} messages.
         * @param m DB_Policy403Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy403Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy403Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy403Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy403Array;
    }

    /** Properties of a DB_Policy420. */
    interface IDB_Policy420 {

        /** DB_Policy420 Id */
        Id?: (number | null);

        /** DB_Policy420 Time */
        Time?: (number | null);

        /** DB_Policy420 FishId */
        FishId?: (number | null);

        /** DB_Policy420 Paths */
        Paths?: (number[] | null);

        /** DB_Policy420 Count */
        Count?: (number | null);

        /** DB_Policy420 Speed */
        Speed?: (number | null);

        /** DB_Policy420 Event */
        Event?: (number | null);

        /** DB_Policy420 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy420 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy420. */
    class DB_Policy420 implements IDB_Policy420 {

        /**
         * Constructs a new DB_Policy420.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy420);

        /** DB_Policy420 Id. */
        public Id: number;

        /** DB_Policy420 Time. */
        public Time: number;

        /** DB_Policy420 FishId. */
        public FishId: number;

        /** DB_Policy420 Paths. */
        public Paths: number[];

        /** DB_Policy420 Count. */
        public Count: number;

        /** DB_Policy420 Speed. */
        public Speed: number;

        /** DB_Policy420 Event. */
        public Event: number;

        /** DB_Policy420 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy420 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy420 message. Does not implicitly {@link server.DB_Policy420.verify|verify} messages.
         * @param m DB_Policy420 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy420, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy420 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy420
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy420;
    }

    /** Properties of a DB_Policy420Array. */
    interface IDB_Policy420Array {

        /** DB_Policy420Array Arr */
        Arr?: (server.IDB_Policy420[] | null);
    }

    /** Represents a DB_Policy420Array. */
    class DB_Policy420Array implements IDB_Policy420Array {

        /**
         * Constructs a new DB_Policy420Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy420Array);

        /** DB_Policy420Array Arr. */
        public Arr: server.IDB_Policy420[];

        /**
         * Encodes the specified DB_Policy420Array message. Does not implicitly {@link server.DB_Policy420Array.verify|verify} messages.
         * @param m DB_Policy420Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy420Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy420Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy420Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy420Array;
    }

    /** Properties of a DB_Policy451. */
    interface IDB_Policy451 {

        /** DB_Policy451 Id */
        Id?: (number | null);

        /** DB_Policy451 Time */
        Time?: (number | null);

        /** DB_Policy451 FishId */
        FishId?: (number | null);

        /** DB_Policy451 Paths */
        Paths?: (number[] | null);

        /** DB_Policy451 Count */
        Count?: (number | null);

        /** DB_Policy451 Speed */
        Speed?: (number | null);

        /** DB_Policy451 Event */
        Event?: (number | null);

        /** DB_Policy451 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy451 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy451. */
    class DB_Policy451 implements IDB_Policy451 {

        /**
         * Constructs a new DB_Policy451.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy451);

        /** DB_Policy451 Id. */
        public Id: number;

        /** DB_Policy451 Time. */
        public Time: number;

        /** DB_Policy451 FishId. */
        public FishId: number;

        /** DB_Policy451 Paths. */
        public Paths: number[];

        /** DB_Policy451 Count. */
        public Count: number;

        /** DB_Policy451 Speed. */
        public Speed: number;

        /** DB_Policy451 Event. */
        public Event: number;

        /** DB_Policy451 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy451 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy451 message. Does not implicitly {@link server.DB_Policy451.verify|verify} messages.
         * @param m DB_Policy451 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy451, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy451 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy451
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy451;
    }

    /** Properties of a DB_Policy451Array. */
    interface IDB_Policy451Array {

        /** DB_Policy451Array Arr */
        Arr?: (server.IDB_Policy451[] | null);
    }

    /** Represents a DB_Policy451Array. */
    class DB_Policy451Array implements IDB_Policy451Array {

        /**
         * Constructs a new DB_Policy451Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy451Array);

        /** DB_Policy451Array Arr. */
        public Arr: server.IDB_Policy451[];

        /**
         * Encodes the specified DB_Policy451Array message. Does not implicitly {@link server.DB_Policy451Array.verify|verify} messages.
         * @param m DB_Policy451Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy451Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy451Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy451Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy451Array;
    }

    /** Properties of a DB_Policy452. */
    interface IDB_Policy452 {

        /** DB_Policy452 Id */
        Id?: (number | null);

        /** DB_Policy452 Time */
        Time?: (number | null);

        /** DB_Policy452 FishId */
        FishId?: (number | null);

        /** DB_Policy452 Paths */
        Paths?: (number[] | null);

        /** DB_Policy452 Count */
        Count?: (number | null);

        /** DB_Policy452 Speed */
        Speed?: (number | null);

        /** DB_Policy452 Event */
        Event?: (number | null);

        /** DB_Policy452 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy452 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy452. */
    class DB_Policy452 implements IDB_Policy452 {

        /**
         * Constructs a new DB_Policy452.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy452);

        /** DB_Policy452 Id. */
        public Id: number;

        /** DB_Policy452 Time. */
        public Time: number;

        /** DB_Policy452 FishId. */
        public FishId: number;

        /** DB_Policy452 Paths. */
        public Paths: number[];

        /** DB_Policy452 Count. */
        public Count: number;

        /** DB_Policy452 Speed. */
        public Speed: number;

        /** DB_Policy452 Event. */
        public Event: number;

        /** DB_Policy452 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy452 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy452 message. Does not implicitly {@link server.DB_Policy452.verify|verify} messages.
         * @param m DB_Policy452 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy452, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy452 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy452
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy452;
    }

    /** Properties of a DB_Policy452Array. */
    interface IDB_Policy452Array {

        /** DB_Policy452Array Arr */
        Arr?: (server.IDB_Policy452[] | null);
    }

    /** Represents a DB_Policy452Array. */
    class DB_Policy452Array implements IDB_Policy452Array {

        /**
         * Constructs a new DB_Policy452Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy452Array);

        /** DB_Policy452Array Arr. */
        public Arr: server.IDB_Policy452[];

        /**
         * Encodes the specified DB_Policy452Array message. Does not implicitly {@link server.DB_Policy452Array.verify|verify} messages.
         * @param m DB_Policy452Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy452Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy452Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy452Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy452Array;
    }

    /** Properties of a DB_Policy453. */
    interface IDB_Policy453 {

        /** DB_Policy453 Id */
        Id?: (number | null);

        /** DB_Policy453 Time */
        Time?: (number | null);

        /** DB_Policy453 FishId */
        FishId?: (number | null);

        /** DB_Policy453 Paths */
        Paths?: (number[] | null);

        /** DB_Policy453 Count */
        Count?: (number | null);

        /** DB_Policy453 Speed */
        Speed?: (number | null);

        /** DB_Policy453 Event */
        Event?: (number | null);

        /** DB_Policy453 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy453 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy453. */
    class DB_Policy453 implements IDB_Policy453 {

        /**
         * Constructs a new DB_Policy453.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy453);

        /** DB_Policy453 Id. */
        public Id: number;

        /** DB_Policy453 Time. */
        public Time: number;

        /** DB_Policy453 FishId. */
        public FishId: number;

        /** DB_Policy453 Paths. */
        public Paths: number[];

        /** DB_Policy453 Count. */
        public Count: number;

        /** DB_Policy453 Speed. */
        public Speed: number;

        /** DB_Policy453 Event. */
        public Event: number;

        /** DB_Policy453 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy453 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy453 message. Does not implicitly {@link server.DB_Policy453.verify|verify} messages.
         * @param m DB_Policy453 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy453, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy453 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy453
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy453;
    }

    /** Properties of a DB_Policy453Array. */
    interface IDB_Policy453Array {

        /** DB_Policy453Array Arr */
        Arr?: (server.IDB_Policy453[] | null);
    }

    /** Represents a DB_Policy453Array. */
    class DB_Policy453Array implements IDB_Policy453Array {

        /**
         * Constructs a new DB_Policy453Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy453Array);

        /** DB_Policy453Array Arr. */
        public Arr: server.IDB_Policy453[];

        /**
         * Encodes the specified DB_Policy453Array message. Does not implicitly {@link server.DB_Policy453Array.verify|verify} messages.
         * @param m DB_Policy453Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy453Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy453Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy453Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy453Array;
    }

    /** Properties of a DB_Policy501. */
    interface IDB_Policy501 {

        /** DB_Policy501 Id */
        Id?: (number | null);

        /** DB_Policy501 Time */
        Time?: (number | null);

        /** DB_Policy501 FishId */
        FishId?: (number | null);

        /** DB_Policy501 Paths */
        Paths?: (number[] | null);

        /** DB_Policy501 Count */
        Count?: (number | null);

        /** DB_Policy501 Speed */
        Speed?: (number | null);

        /** DB_Policy501 Event */
        Event?: (number | null);

        /** DB_Policy501 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy501 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy501. */
    class DB_Policy501 implements IDB_Policy501 {

        /**
         * Constructs a new DB_Policy501.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy501);

        /** DB_Policy501 Id. */
        public Id: number;

        /** DB_Policy501 Time. */
        public Time: number;

        /** DB_Policy501 FishId. */
        public FishId: number;

        /** DB_Policy501 Paths. */
        public Paths: number[];

        /** DB_Policy501 Count. */
        public Count: number;

        /** DB_Policy501 Speed. */
        public Speed: number;

        /** DB_Policy501 Event. */
        public Event: number;

        /** DB_Policy501 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy501 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy501 message. Does not implicitly {@link server.DB_Policy501.verify|verify} messages.
         * @param m DB_Policy501 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy501, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy501 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy501
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy501;
    }

    /** Properties of a DB_Policy501Array. */
    interface IDB_Policy501Array {

        /** DB_Policy501Array Arr */
        Arr?: (server.IDB_Policy501[] | null);
    }

    /** Represents a DB_Policy501Array. */
    class DB_Policy501Array implements IDB_Policy501Array {

        /**
         * Constructs a new DB_Policy501Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy501Array);

        /** DB_Policy501Array Arr. */
        public Arr: server.IDB_Policy501[];

        /**
         * Encodes the specified DB_Policy501Array message. Does not implicitly {@link server.DB_Policy501Array.verify|verify} messages.
         * @param m DB_Policy501Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy501Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy501Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy501Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy501Array;
    }

    /** Properties of a DB_Policy502. */
    interface IDB_Policy502 {

        /** DB_Policy502 Id */
        Id?: (number | null);

        /** DB_Policy502 Time */
        Time?: (number | null);

        /** DB_Policy502 FishId */
        FishId?: (number | null);

        /** DB_Policy502 Paths */
        Paths?: (number[] | null);

        /** DB_Policy502 Count */
        Count?: (number | null);

        /** DB_Policy502 Speed */
        Speed?: (number | null);

        /** DB_Policy502 Event */
        Event?: (number | null);

        /** DB_Policy502 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy502 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy502. */
    class DB_Policy502 implements IDB_Policy502 {

        /**
         * Constructs a new DB_Policy502.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy502);

        /** DB_Policy502 Id. */
        public Id: number;

        /** DB_Policy502 Time. */
        public Time: number;

        /** DB_Policy502 FishId. */
        public FishId: number;

        /** DB_Policy502 Paths. */
        public Paths: number[];

        /** DB_Policy502 Count. */
        public Count: number;

        /** DB_Policy502 Speed. */
        public Speed: number;

        /** DB_Policy502 Event. */
        public Event: number;

        /** DB_Policy502 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy502 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy502 message. Does not implicitly {@link server.DB_Policy502.verify|verify} messages.
         * @param m DB_Policy502 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy502, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy502 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy502
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy502;
    }

    /** Properties of a DB_Policy502Array. */
    interface IDB_Policy502Array {

        /** DB_Policy502Array Arr */
        Arr?: (server.IDB_Policy502[] | null);
    }

    /** Represents a DB_Policy502Array. */
    class DB_Policy502Array implements IDB_Policy502Array {

        /**
         * Constructs a new DB_Policy502Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy502Array);

        /** DB_Policy502Array Arr. */
        public Arr: server.IDB_Policy502[];

        /**
         * Encodes the specified DB_Policy502Array message. Does not implicitly {@link server.DB_Policy502Array.verify|verify} messages.
         * @param m DB_Policy502Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy502Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy502Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy502Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy502Array;
    }

    /** Properties of a DB_Policy601. */
    interface IDB_Policy601 {

        /** DB_Policy601 Id */
        Id?: (number | null);

        /** DB_Policy601 Time */
        Time?: (number | null);

        /** DB_Policy601 FishId */
        FishId?: (number | null);

        /** DB_Policy601 Paths */
        Paths?: (number[] | null);

        /** DB_Policy601 Count */
        Count?: (number | null);

        /** DB_Policy601 Speed */
        Speed?: (number | null);

        /** DB_Policy601 Event */
        Event?: (number | null);

        /** DB_Policy601 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy601 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy601. */
    class DB_Policy601 implements IDB_Policy601 {

        /**
         * Constructs a new DB_Policy601.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy601);

        /** DB_Policy601 Id. */
        public Id: number;

        /** DB_Policy601 Time. */
        public Time: number;

        /** DB_Policy601 FishId. */
        public FishId: number;

        /** DB_Policy601 Paths. */
        public Paths: number[];

        /** DB_Policy601 Count. */
        public Count: number;

        /** DB_Policy601 Speed. */
        public Speed: number;

        /** DB_Policy601 Event. */
        public Event: number;

        /** DB_Policy601 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy601 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy601 message. Does not implicitly {@link server.DB_Policy601.verify|verify} messages.
         * @param m DB_Policy601 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy601, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy601 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy601
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy601;
    }

    /** Properties of a DB_Policy601Array. */
    interface IDB_Policy601Array {

        /** DB_Policy601Array Arr */
        Arr?: (server.IDB_Policy601[] | null);
    }

    /** Represents a DB_Policy601Array. */
    class DB_Policy601Array implements IDB_Policy601Array {

        /**
         * Constructs a new DB_Policy601Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy601Array);

        /** DB_Policy601Array Arr. */
        public Arr: server.IDB_Policy601[];

        /**
         * Encodes the specified DB_Policy601Array message. Does not implicitly {@link server.DB_Policy601Array.verify|verify} messages.
         * @param m DB_Policy601Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy601Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy601Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy601Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy601Array;
    }

    /** Properties of a DB_Policy701. */
    interface IDB_Policy701 {

        /** DB_Policy701 Id */
        Id?: (number | null);

        /** DB_Policy701 Time */
        Time?: (number | null);

        /** DB_Policy701 FishId */
        FishId?: (number | null);

        /** DB_Policy701 Paths */
        Paths?: (number[] | null);

        /** DB_Policy701 Count */
        Count?: (number | null);

        /** DB_Policy701 Speed */
        Speed?: (number | null);

        /** DB_Policy701 Event */
        Event?: (number | null);

        /** DB_Policy701 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy701 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy701. */
    class DB_Policy701 implements IDB_Policy701 {

        /**
         * Constructs a new DB_Policy701.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy701);

        /** DB_Policy701 Id. */
        public Id: number;

        /** DB_Policy701 Time. */
        public Time: number;

        /** DB_Policy701 FishId. */
        public FishId: number;

        /** DB_Policy701 Paths. */
        public Paths: number[];

        /** DB_Policy701 Count. */
        public Count: number;

        /** DB_Policy701 Speed. */
        public Speed: number;

        /** DB_Policy701 Event. */
        public Event: number;

        /** DB_Policy701 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy701 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy701 message. Does not implicitly {@link server.DB_Policy701.verify|verify} messages.
         * @param m DB_Policy701 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy701, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy701 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy701
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy701;
    }

    /** Properties of a DB_Policy701Array. */
    interface IDB_Policy701Array {

        /** DB_Policy701Array Arr */
        Arr?: (server.IDB_Policy701[] | null);
    }

    /** Represents a DB_Policy701Array. */
    class DB_Policy701Array implements IDB_Policy701Array {

        /**
         * Constructs a new DB_Policy701Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy701Array);

        /** DB_Policy701Array Arr. */
        public Arr: server.IDB_Policy701[];

        /**
         * Encodes the specified DB_Policy701Array message. Does not implicitly {@link server.DB_Policy701Array.verify|verify} messages.
         * @param m DB_Policy701Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy701Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy701Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy701Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy701Array;
    }

    /** Properties of a DB_Policy702. */
    interface IDB_Policy702 {

        /** DB_Policy702 Id */
        Id?: (number | null);

        /** DB_Policy702 Time */
        Time?: (number | null);

        /** DB_Policy702 FishId */
        FishId?: (number | null);

        /** DB_Policy702 Paths */
        Paths?: (number[] | null);

        /** DB_Policy702 Count */
        Count?: (number | null);

        /** DB_Policy702 Speed */
        Speed?: (number | null);

        /** DB_Policy702 Event */
        Event?: (number | null);

        /** DB_Policy702 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy702 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy702. */
    class DB_Policy702 implements IDB_Policy702 {

        /**
         * Constructs a new DB_Policy702.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy702);

        /** DB_Policy702 Id. */
        public Id: number;

        /** DB_Policy702 Time. */
        public Time: number;

        /** DB_Policy702 FishId. */
        public FishId: number;

        /** DB_Policy702 Paths. */
        public Paths: number[];

        /** DB_Policy702 Count. */
        public Count: number;

        /** DB_Policy702 Speed. */
        public Speed: number;

        /** DB_Policy702 Event. */
        public Event: number;

        /** DB_Policy702 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy702 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy702 message. Does not implicitly {@link server.DB_Policy702.verify|verify} messages.
         * @param m DB_Policy702 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy702, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy702 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy702
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy702;
    }

    /** Properties of a DB_Policy702Array. */
    interface IDB_Policy702Array {

        /** DB_Policy702Array Arr */
        Arr?: (server.IDB_Policy702[] | null);
    }

    /** Represents a DB_Policy702Array. */
    class DB_Policy702Array implements IDB_Policy702Array {

        /**
         * Constructs a new DB_Policy702Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy702Array);

        /** DB_Policy702Array Arr. */
        public Arr: server.IDB_Policy702[];

        /**
         * Encodes the specified DB_Policy702Array message. Does not implicitly {@link server.DB_Policy702Array.verify|verify} messages.
         * @param m DB_Policy702Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy702Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy702Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy702Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy702Array;
    }

    /** Properties of a DB_Policy801. */
    interface IDB_Policy801 {

        /** DB_Policy801 Id */
        Id?: (number | null);

        /** DB_Policy801 Time */
        Time?: (number | null);

        /** DB_Policy801 FishId */
        FishId?: (number | null);

        /** DB_Policy801 Paths */
        Paths?: (number[] | null);

        /** DB_Policy801 Count */
        Count?: (number | null);

        /** DB_Policy801 Speed */
        Speed?: (number | null);

        /** DB_Policy801 Event */
        Event?: (number | null);

        /** DB_Policy801 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy801 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy801. */
    class DB_Policy801 implements IDB_Policy801 {

        /**
         * Constructs a new DB_Policy801.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy801);

        /** DB_Policy801 Id. */
        public Id: number;

        /** DB_Policy801 Time. */
        public Time: number;

        /** DB_Policy801 FishId. */
        public FishId: number;

        /** DB_Policy801 Paths. */
        public Paths: number[];

        /** DB_Policy801 Count. */
        public Count: number;

        /** DB_Policy801 Speed. */
        public Speed: number;

        /** DB_Policy801 Event. */
        public Event: number;

        /** DB_Policy801 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy801 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy801 message. Does not implicitly {@link server.DB_Policy801.verify|verify} messages.
         * @param m DB_Policy801 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy801, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy801 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy801
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy801;
    }

    /** Properties of a DB_Policy801Array. */
    interface IDB_Policy801Array {

        /** DB_Policy801Array Arr */
        Arr?: (server.IDB_Policy801[] | null);
    }

    /** Represents a DB_Policy801Array. */
    class DB_Policy801Array implements IDB_Policy801Array {

        /**
         * Constructs a new DB_Policy801Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy801Array);

        /** DB_Policy801Array Arr. */
        public Arr: server.IDB_Policy801[];

        /**
         * Encodes the specified DB_Policy801Array message. Does not implicitly {@link server.DB_Policy801Array.verify|verify} messages.
         * @param m DB_Policy801Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy801Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy801Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy801Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy801Array;
    }

    /** Properties of a DB_Policy802. */
    interface IDB_Policy802 {

        /** DB_Policy802 Id */
        Id?: (number | null);

        /** DB_Policy802 Time */
        Time?: (number | null);

        /** DB_Policy802 FishId */
        FishId?: (number | null);

        /** DB_Policy802 Paths */
        Paths?: (number[] | null);

        /** DB_Policy802 Count */
        Count?: (number | null);

        /** DB_Policy802 Speed */
        Speed?: (number | null);

        /** DB_Policy802 Event */
        Event?: (number | null);

        /** DB_Policy802 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy802 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy802. */
    class DB_Policy802 implements IDB_Policy802 {

        /**
         * Constructs a new DB_Policy802.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy802);

        /** DB_Policy802 Id. */
        public Id: number;

        /** DB_Policy802 Time. */
        public Time: number;

        /** DB_Policy802 FishId. */
        public FishId: number;

        /** DB_Policy802 Paths. */
        public Paths: number[];

        /** DB_Policy802 Count. */
        public Count: number;

        /** DB_Policy802 Speed. */
        public Speed: number;

        /** DB_Policy802 Event. */
        public Event: number;

        /** DB_Policy802 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy802 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy802 message. Does not implicitly {@link server.DB_Policy802.verify|verify} messages.
         * @param m DB_Policy802 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy802, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy802 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy802
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy802;
    }

    /** Properties of a DB_Policy802Array. */
    interface IDB_Policy802Array {

        /** DB_Policy802Array Arr */
        Arr?: (server.IDB_Policy802[] | null);
    }

    /** Represents a DB_Policy802Array. */
    class DB_Policy802Array implements IDB_Policy802Array {

        /**
         * Constructs a new DB_Policy802Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy802Array);

        /** DB_Policy802Array Arr. */
        public Arr: server.IDB_Policy802[];

        /**
         * Encodes the specified DB_Policy802Array message. Does not implicitly {@link server.DB_Policy802Array.verify|verify} messages.
         * @param m DB_Policy802Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy802Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy802Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy802Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy802Array;
    }

    /** Properties of a DB_Policy803. */
    interface IDB_Policy803 {

        /** DB_Policy803 Id */
        Id?: (number | null);

        /** DB_Policy803 Time */
        Time?: (number | null);

        /** DB_Policy803 FishId */
        FishId?: (number | null);

        /** DB_Policy803 Paths */
        Paths?: (number[] | null);

        /** DB_Policy803 Count */
        Count?: (number | null);

        /** DB_Policy803 Speed */
        Speed?: (number | null);

        /** DB_Policy803 Event */
        Event?: (number | null);

        /** DB_Policy803 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy803 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy803. */
    class DB_Policy803 implements IDB_Policy803 {

        /**
         * Constructs a new DB_Policy803.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy803);

        /** DB_Policy803 Id. */
        public Id: number;

        /** DB_Policy803 Time. */
        public Time: number;

        /** DB_Policy803 FishId. */
        public FishId: number;

        /** DB_Policy803 Paths. */
        public Paths: number[];

        /** DB_Policy803 Count. */
        public Count: number;

        /** DB_Policy803 Speed. */
        public Speed: number;

        /** DB_Policy803 Event. */
        public Event: number;

        /** DB_Policy803 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy803 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy803 message. Does not implicitly {@link server.DB_Policy803.verify|verify} messages.
         * @param m DB_Policy803 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy803, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy803 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy803
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy803;
    }

    /** Properties of a DB_Policy803Array. */
    interface IDB_Policy803Array {

        /** DB_Policy803Array Arr */
        Arr?: (server.IDB_Policy803[] | null);
    }

    /** Represents a DB_Policy803Array. */
    class DB_Policy803Array implements IDB_Policy803Array {

        /**
         * Constructs a new DB_Policy803Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy803Array);

        /** DB_Policy803Array Arr. */
        public Arr: server.IDB_Policy803[];

        /**
         * Encodes the specified DB_Policy803Array message. Does not implicitly {@link server.DB_Policy803Array.verify|verify} messages.
         * @param m DB_Policy803Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy803Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy803Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy803Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy803Array;
    }

    /** Properties of a DB_Policy804. */
    interface IDB_Policy804 {

        /** DB_Policy804 Id */
        Id?: (number | null);

        /** DB_Policy804 Time */
        Time?: (number | null);

        /** DB_Policy804 FishId */
        FishId?: (number | null);

        /** DB_Policy804 Paths */
        Paths?: (number[] | null);

        /** DB_Policy804 Count */
        Count?: (number | null);

        /** DB_Policy804 Speed */
        Speed?: (number | null);

        /** DB_Policy804 Event */
        Event?: (number | null);

        /** DB_Policy804 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy804 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy804. */
    class DB_Policy804 implements IDB_Policy804 {

        /**
         * Constructs a new DB_Policy804.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy804);

        /** DB_Policy804 Id. */
        public Id: number;

        /** DB_Policy804 Time. */
        public Time: number;

        /** DB_Policy804 FishId. */
        public FishId: number;

        /** DB_Policy804 Paths. */
        public Paths: number[];

        /** DB_Policy804 Count. */
        public Count: number;

        /** DB_Policy804 Speed. */
        public Speed: number;

        /** DB_Policy804 Event. */
        public Event: number;

        /** DB_Policy804 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy804 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy804 message. Does not implicitly {@link server.DB_Policy804.verify|verify} messages.
         * @param m DB_Policy804 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy804, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy804 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy804
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy804;
    }

    /** Properties of a DB_Policy804Array. */
    interface IDB_Policy804Array {

        /** DB_Policy804Array Arr */
        Arr?: (server.IDB_Policy804[] | null);
    }

    /** Represents a DB_Policy804Array. */
    class DB_Policy804Array implements IDB_Policy804Array {

        /**
         * Constructs a new DB_Policy804Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy804Array);

        /** DB_Policy804Array Arr. */
        public Arr: server.IDB_Policy804[];

        /**
         * Encodes the specified DB_Policy804Array message. Does not implicitly {@link server.DB_Policy804Array.verify|verify} messages.
         * @param m DB_Policy804Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy804Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy804Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy804Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy804Array;
    }

    /** Properties of a DB_Policy805. */
    interface IDB_Policy805 {

        /** DB_Policy805 Id */
        Id?: (number | null);

        /** DB_Policy805 Time */
        Time?: (number | null);

        /** DB_Policy805 FishId */
        FishId?: (number | null);

        /** DB_Policy805 Paths */
        Paths?: (number[] | null);

        /** DB_Policy805 Count */
        Count?: (number | null);

        /** DB_Policy805 Speed */
        Speed?: (number | null);

        /** DB_Policy805 Event */
        Event?: (number | null);

        /** DB_Policy805 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy805 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy805. */
    class DB_Policy805 implements IDB_Policy805 {

        /**
         * Constructs a new DB_Policy805.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy805);

        /** DB_Policy805 Id. */
        public Id: number;

        /** DB_Policy805 Time. */
        public Time: number;

        /** DB_Policy805 FishId. */
        public FishId: number;

        /** DB_Policy805 Paths. */
        public Paths: number[];

        /** DB_Policy805 Count. */
        public Count: number;

        /** DB_Policy805 Speed. */
        public Speed: number;

        /** DB_Policy805 Event. */
        public Event: number;

        /** DB_Policy805 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy805 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy805 message. Does not implicitly {@link server.DB_Policy805.verify|verify} messages.
         * @param m DB_Policy805 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy805, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy805 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy805
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy805;
    }

    /** Properties of a DB_Policy805Array. */
    interface IDB_Policy805Array {

        /** DB_Policy805Array Arr */
        Arr?: (server.IDB_Policy805[] | null);
    }

    /** Represents a DB_Policy805Array. */
    class DB_Policy805Array implements IDB_Policy805Array {

        /**
         * Constructs a new DB_Policy805Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy805Array);

        /** DB_Policy805Array Arr. */
        public Arr: server.IDB_Policy805[];

        /**
         * Encodes the specified DB_Policy805Array message. Does not implicitly {@link server.DB_Policy805Array.verify|verify} messages.
         * @param m DB_Policy805Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy805Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy805Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy805Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy805Array;
    }

    /** Properties of a DB_Policy806. */
    interface IDB_Policy806 {

        /** DB_Policy806 Id */
        Id?: (number | null);

        /** DB_Policy806 Time */
        Time?: (number | null);

        /** DB_Policy806 FishId */
        FishId?: (number | null);

        /** DB_Policy806 Paths */
        Paths?: (number[] | null);

        /** DB_Policy806 Count */
        Count?: (number | null);

        /** DB_Policy806 Speed */
        Speed?: (number | null);

        /** DB_Policy806 Event */
        Event?: (number | null);

        /** DB_Policy806 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy806 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy806. */
    class DB_Policy806 implements IDB_Policy806 {

        /**
         * Constructs a new DB_Policy806.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy806);

        /** DB_Policy806 Id. */
        public Id: number;

        /** DB_Policy806 Time. */
        public Time: number;

        /** DB_Policy806 FishId. */
        public FishId: number;

        /** DB_Policy806 Paths. */
        public Paths: number[];

        /** DB_Policy806 Count. */
        public Count: number;

        /** DB_Policy806 Speed. */
        public Speed: number;

        /** DB_Policy806 Event. */
        public Event: number;

        /** DB_Policy806 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy806 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy806 message. Does not implicitly {@link server.DB_Policy806.verify|verify} messages.
         * @param m DB_Policy806 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy806, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy806 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy806
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy806;
    }

    /** Properties of a DB_Policy806Array. */
    interface IDB_Policy806Array {

        /** DB_Policy806Array Arr */
        Arr?: (server.IDB_Policy806[] | null);
    }

    /** Represents a DB_Policy806Array. */
    class DB_Policy806Array implements IDB_Policy806Array {

        /**
         * Constructs a new DB_Policy806Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy806Array);

        /** DB_Policy806Array Arr. */
        public Arr: server.IDB_Policy806[];

        /**
         * Encodes the specified DB_Policy806Array message. Does not implicitly {@link server.DB_Policy806Array.verify|verify} messages.
         * @param m DB_Policy806Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy806Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy806Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy806Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy806Array;
    }

    /** Properties of a DB_Policy811. */
    interface IDB_Policy811 {

        /** DB_Policy811 Id */
        Id?: (number | null);

        /** DB_Policy811 Time */
        Time?: (number | null);

        /** DB_Policy811 FishId */
        FishId?: (number | null);

        /** DB_Policy811 Paths */
        Paths?: (number[] | null);

        /** DB_Policy811 Count */
        Count?: (number | null);

        /** DB_Policy811 Speed */
        Speed?: (number | null);

        /** DB_Policy811 Event */
        Event?: (number | null);

        /** DB_Policy811 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy811 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy811. */
    class DB_Policy811 implements IDB_Policy811 {

        /**
         * Constructs a new DB_Policy811.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy811);

        /** DB_Policy811 Id. */
        public Id: number;

        /** DB_Policy811 Time. */
        public Time: number;

        /** DB_Policy811 FishId. */
        public FishId: number;

        /** DB_Policy811 Paths. */
        public Paths: number[];

        /** DB_Policy811 Count. */
        public Count: number;

        /** DB_Policy811 Speed. */
        public Speed: number;

        /** DB_Policy811 Event. */
        public Event: number;

        /** DB_Policy811 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy811 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy811 message. Does not implicitly {@link server.DB_Policy811.verify|verify} messages.
         * @param m DB_Policy811 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy811, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy811 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy811
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy811;
    }

    /** Properties of a DB_Policy811Array. */
    interface IDB_Policy811Array {

        /** DB_Policy811Array Arr */
        Arr?: (server.IDB_Policy811[] | null);
    }

    /** Represents a DB_Policy811Array. */
    class DB_Policy811Array implements IDB_Policy811Array {

        /**
         * Constructs a new DB_Policy811Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy811Array);

        /** DB_Policy811Array Arr. */
        public Arr: server.IDB_Policy811[];

        /**
         * Encodes the specified DB_Policy811Array message. Does not implicitly {@link server.DB_Policy811Array.verify|verify} messages.
         * @param m DB_Policy811Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy811Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy811Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy811Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy811Array;
    }

    /** Properties of a DB_Policy812. */
    interface IDB_Policy812 {

        /** DB_Policy812 Id */
        Id?: (number | null);

        /** DB_Policy812 Time */
        Time?: (number | null);

        /** DB_Policy812 FishId */
        FishId?: (number | null);

        /** DB_Policy812 Paths */
        Paths?: (number[] | null);

        /** DB_Policy812 Count */
        Count?: (number | null);

        /** DB_Policy812 Speed */
        Speed?: (number | null);

        /** DB_Policy812 Event */
        Event?: (number | null);

        /** DB_Policy812 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy812 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy812. */
    class DB_Policy812 implements IDB_Policy812 {

        /**
         * Constructs a new DB_Policy812.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy812);

        /** DB_Policy812 Id. */
        public Id: number;

        /** DB_Policy812 Time. */
        public Time: number;

        /** DB_Policy812 FishId. */
        public FishId: number;

        /** DB_Policy812 Paths. */
        public Paths: number[];

        /** DB_Policy812 Count. */
        public Count: number;

        /** DB_Policy812 Speed. */
        public Speed: number;

        /** DB_Policy812 Event. */
        public Event: number;

        /** DB_Policy812 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy812 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy812 message. Does not implicitly {@link server.DB_Policy812.verify|verify} messages.
         * @param m DB_Policy812 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy812, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy812 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy812
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy812;
    }

    /** Properties of a DB_Policy812Array. */
    interface IDB_Policy812Array {

        /** DB_Policy812Array Arr */
        Arr?: (server.IDB_Policy812[] | null);
    }

    /** Represents a DB_Policy812Array. */
    class DB_Policy812Array implements IDB_Policy812Array {

        /**
         * Constructs a new DB_Policy812Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy812Array);

        /** DB_Policy812Array Arr. */
        public Arr: server.IDB_Policy812[];

        /**
         * Encodes the specified DB_Policy812Array message. Does not implicitly {@link server.DB_Policy812Array.verify|verify} messages.
         * @param m DB_Policy812Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy812Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy812Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy812Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy812Array;
    }

    /** Properties of a DB_Policy813. */
    interface IDB_Policy813 {

        /** DB_Policy813 Id */
        Id?: (number | null);

        /** DB_Policy813 Time */
        Time?: (number | null);

        /** DB_Policy813 FishId */
        FishId?: (number | null);

        /** DB_Policy813 Paths */
        Paths?: (number[] | null);

        /** DB_Policy813 Count */
        Count?: (number | null);

        /** DB_Policy813 Speed */
        Speed?: (number | null);

        /** DB_Policy813 Event */
        Event?: (number | null);

        /** DB_Policy813 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy813 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy813. */
    class DB_Policy813 implements IDB_Policy813 {

        /**
         * Constructs a new DB_Policy813.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy813);

        /** DB_Policy813 Id. */
        public Id: number;

        /** DB_Policy813 Time. */
        public Time: number;

        /** DB_Policy813 FishId. */
        public FishId: number;

        /** DB_Policy813 Paths. */
        public Paths: number[];

        /** DB_Policy813 Count. */
        public Count: number;

        /** DB_Policy813 Speed. */
        public Speed: number;

        /** DB_Policy813 Event. */
        public Event: number;

        /** DB_Policy813 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy813 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy813 message. Does not implicitly {@link server.DB_Policy813.verify|verify} messages.
         * @param m DB_Policy813 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy813, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy813 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy813
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy813;
    }

    /** Properties of a DB_Policy813Array. */
    interface IDB_Policy813Array {

        /** DB_Policy813Array Arr */
        Arr?: (server.IDB_Policy813[] | null);
    }

    /** Represents a DB_Policy813Array. */
    class DB_Policy813Array implements IDB_Policy813Array {

        /**
         * Constructs a new DB_Policy813Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy813Array);

        /** DB_Policy813Array Arr. */
        public Arr: server.IDB_Policy813[];

        /**
         * Encodes the specified DB_Policy813Array message. Does not implicitly {@link server.DB_Policy813Array.verify|verify} messages.
         * @param m DB_Policy813Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy813Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy813Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy813Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy813Array;
    }

    /** Properties of a DB_Policy814. */
    interface IDB_Policy814 {

        /** DB_Policy814 Id */
        Id?: (number | null);

        /** DB_Policy814 Time */
        Time?: (number | null);

        /** DB_Policy814 FishId */
        FishId?: (number | null);

        /** DB_Policy814 Paths */
        Paths?: (number[] | null);

        /** DB_Policy814 Count */
        Count?: (number | null);

        /** DB_Policy814 Speed */
        Speed?: (number | null);

        /** DB_Policy814 Event */
        Event?: (number | null);

        /** DB_Policy814 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy814 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy814. */
    class DB_Policy814 implements IDB_Policy814 {

        /**
         * Constructs a new DB_Policy814.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy814);

        /** DB_Policy814 Id. */
        public Id: number;

        /** DB_Policy814 Time. */
        public Time: number;

        /** DB_Policy814 FishId. */
        public FishId: number;

        /** DB_Policy814 Paths. */
        public Paths: number[];

        /** DB_Policy814 Count. */
        public Count: number;

        /** DB_Policy814 Speed. */
        public Speed: number;

        /** DB_Policy814 Event. */
        public Event: number;

        /** DB_Policy814 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy814 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy814 message. Does not implicitly {@link server.DB_Policy814.verify|verify} messages.
         * @param m DB_Policy814 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy814, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy814 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy814
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy814;
    }

    /** Properties of a DB_Policy814Array. */
    interface IDB_Policy814Array {

        /** DB_Policy814Array Arr */
        Arr?: (server.IDB_Policy814[] | null);
    }

    /** Represents a DB_Policy814Array. */
    class DB_Policy814Array implements IDB_Policy814Array {

        /**
         * Constructs a new DB_Policy814Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy814Array);

        /** DB_Policy814Array Arr. */
        public Arr: server.IDB_Policy814[];

        /**
         * Encodes the specified DB_Policy814Array message. Does not implicitly {@link server.DB_Policy814Array.verify|verify} messages.
         * @param m DB_Policy814Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy814Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy814Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy814Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy814Array;
    }

    /** Properties of a DB_Policy815. */
    interface IDB_Policy815 {

        /** DB_Policy815 Id */
        Id?: (number | null);

        /** DB_Policy815 Time */
        Time?: (number | null);

        /** DB_Policy815 FishId */
        FishId?: (number | null);

        /** DB_Policy815 Paths */
        Paths?: (number[] | null);

        /** DB_Policy815 Count */
        Count?: (number | null);

        /** DB_Policy815 Speed */
        Speed?: (number | null);

        /** DB_Policy815 Event */
        Event?: (number | null);

        /** DB_Policy815 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy815 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy815. */
    class DB_Policy815 implements IDB_Policy815 {

        /**
         * Constructs a new DB_Policy815.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy815);

        /** DB_Policy815 Id. */
        public Id: number;

        /** DB_Policy815 Time. */
        public Time: number;

        /** DB_Policy815 FishId. */
        public FishId: number;

        /** DB_Policy815 Paths. */
        public Paths: number[];

        /** DB_Policy815 Count. */
        public Count: number;

        /** DB_Policy815 Speed. */
        public Speed: number;

        /** DB_Policy815 Event. */
        public Event: number;

        /** DB_Policy815 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy815 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy815 message. Does not implicitly {@link server.DB_Policy815.verify|verify} messages.
         * @param m DB_Policy815 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy815, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy815 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy815
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy815;
    }

    /** Properties of a DB_Policy815Array. */
    interface IDB_Policy815Array {

        /** DB_Policy815Array Arr */
        Arr?: (server.IDB_Policy815[] | null);
    }

    /** Represents a DB_Policy815Array. */
    class DB_Policy815Array implements IDB_Policy815Array {

        /**
         * Constructs a new DB_Policy815Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy815Array);

        /** DB_Policy815Array Arr. */
        public Arr: server.IDB_Policy815[];

        /**
         * Encodes the specified DB_Policy815Array message. Does not implicitly {@link server.DB_Policy815Array.verify|verify} messages.
         * @param m DB_Policy815Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy815Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy815Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy815Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy815Array;
    }

    /** Properties of a DB_Policy816. */
    interface IDB_Policy816 {

        /** DB_Policy816 Id */
        Id?: (number | null);

        /** DB_Policy816 Time */
        Time?: (number | null);

        /** DB_Policy816 FishId */
        FishId?: (number | null);

        /** DB_Policy816 Paths */
        Paths?: (number[] | null);

        /** DB_Policy816 Count */
        Count?: (number | null);

        /** DB_Policy816 Speed */
        Speed?: (number | null);

        /** DB_Policy816 Event */
        Event?: (number | null);

        /** DB_Policy816 RefreshInterval */
        RefreshInterval?: (number | null);

        /** DB_Policy816 TimeToLive */
        TimeToLive?: (number | null);
    }

    /** Represents a DB_Policy816. */
    class DB_Policy816 implements IDB_Policy816 {

        /**
         * Constructs a new DB_Policy816.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy816);

        /** DB_Policy816 Id. */
        public Id: number;

        /** DB_Policy816 Time. */
        public Time: number;

        /** DB_Policy816 FishId. */
        public FishId: number;

        /** DB_Policy816 Paths. */
        public Paths: number[];

        /** DB_Policy816 Count. */
        public Count: number;

        /** DB_Policy816 Speed. */
        public Speed: number;

        /** DB_Policy816 Event. */
        public Event: number;

        /** DB_Policy816 RefreshInterval. */
        public RefreshInterval: number;

        /** DB_Policy816 TimeToLive. */
        public TimeToLive: number;

        /**
         * Encodes the specified DB_Policy816 message. Does not implicitly {@link server.DB_Policy816.verify|verify} messages.
         * @param m DB_Policy816 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy816, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy816 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy816
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy816;
    }

    /** Properties of a DB_Policy816Array. */
    interface IDB_Policy816Array {

        /** DB_Policy816Array Arr */
        Arr?: (server.IDB_Policy816[] | null);
    }

    /** Represents a DB_Policy816Array. */
    class DB_Policy816Array implements IDB_Policy816Array {

        /**
         * Constructs a new DB_Policy816Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Policy816Array);

        /** DB_Policy816Array Arr. */
        public Arr: server.IDB_Policy816[];

        /**
         * Encodes the specified DB_Policy816Array message. Does not implicitly {@link server.DB_Policy816Array.verify|verify} messages.
         * @param m DB_Policy816Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Policy816Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Policy816Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Policy816Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Policy816Array;
    }

    /** Properties of a DB_RobotGame. */
    interface IDB_RobotGame {

        /** DB_RobotGame Id */
        Id?: (number | null);

        /** DB_RobotGame EnterCoin */
        EnterCoin?: (number | null);

        /** DB_RobotGame LeaveCoin */
        LeaveCoin?: (number | null);

        /** DB_RobotGame GameTimes */
        GameTimes?: (number | null);
    }

    /** Represents a DB_RobotGame. */
    class DB_RobotGame implements IDB_RobotGame {

        /**
         * Constructs a new DB_RobotGame.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_RobotGame);

        /** DB_RobotGame Id. */
        public Id: number;

        /** DB_RobotGame EnterCoin. */
        public EnterCoin: number;

        /** DB_RobotGame LeaveCoin. */
        public LeaveCoin: number;

        /** DB_RobotGame GameTimes. */
        public GameTimes: number;

        /**
         * Encodes the specified DB_RobotGame message. Does not implicitly {@link server.DB_RobotGame.verify|verify} messages.
         * @param m DB_RobotGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_RobotGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_RobotGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_RobotGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_RobotGame;
    }

    /** Properties of a DB_RobotGameArray. */
    interface IDB_RobotGameArray {

        /** DB_RobotGameArray Arr */
        Arr?: (server.IDB_RobotGame[] | null);
    }

    /** Represents a DB_RobotGameArray. */
    class DB_RobotGameArray implements IDB_RobotGameArray {

        /**
         * Constructs a new DB_RobotGameArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_RobotGameArray);

        /** DB_RobotGameArray Arr. */
        public Arr: server.IDB_RobotGame[];

        /**
         * Encodes the specified DB_RobotGameArray message. Does not implicitly {@link server.DB_RobotGameArray.verify|verify} messages.
         * @param m DB_RobotGameArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_RobotGameArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_RobotGameArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_RobotGameArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_RobotGameArray;
    }

    /** Properties of a DB_Sensitive_Words. */
    interface IDB_Sensitive_Words {

        /** DB_Sensitive_Words Id */
        Id?: (number | null);

        /** DB_Sensitive_Words Sensitive_Words */
        Sensitive_Words?: (string | null);
    }

    /** Represents a DB_Sensitive_Words. */
    class DB_Sensitive_Words implements IDB_Sensitive_Words {

        /**
         * Constructs a new DB_Sensitive_Words.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Sensitive_Words);

        /** DB_Sensitive_Words Id. */
        public Id: number;

        /** DB_Sensitive_Words Sensitive_Words. */
        public Sensitive_Words: string;

        /**
         * Encodes the specified DB_Sensitive_Words message. Does not implicitly {@link server.DB_Sensitive_Words.verify|verify} messages.
         * @param m DB_Sensitive_Words message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Sensitive_Words, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Sensitive_Words message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Sensitive_Words
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Sensitive_Words;
    }

    /** Properties of a DB_Sensitive_WordsArray. */
    interface IDB_Sensitive_WordsArray {

        /** DB_Sensitive_WordsArray Arr */
        Arr?: (server.IDB_Sensitive_Words[] | null);
    }

    /** Represents a DB_Sensitive_WordsArray. */
    class DB_Sensitive_WordsArray implements IDB_Sensitive_WordsArray {

        /**
         * Constructs a new DB_Sensitive_WordsArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Sensitive_WordsArray);

        /** DB_Sensitive_WordsArray Arr. */
        public Arr: server.IDB_Sensitive_Words[];

        /**
         * Encodes the specified DB_Sensitive_WordsArray message. Does not implicitly {@link server.DB_Sensitive_WordsArray.verify|verify} messages.
         * @param m DB_Sensitive_WordsArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Sensitive_WordsArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Sensitive_WordsArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Sensitive_WordsArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Sensitive_WordsArray;
    }

    /** Properties of a DB_Shop. */
    interface IDB_Shop {

        /** DB_Shop Id */
        Id?: (number | null);

        /** DB_Shop ShowType */
        ShowType?: (number | null);

        /** DB_Shop Name */
        Name?: (string | null);

        /** DB_Shop Picture */
        Picture?: (string | null);

        /** DB_Shop Desc */
        Desc?: (string | null);

        /** DB_Shop Group */
        Group?: (number | null);

        /** DB_Shop Rebate */
        Rebate?: (number | null);

        /** DB_Shop Turn */
        Turn?: (number | null);

        /** DB_Shop Special */
        Special?: (number | null);

        /** DB_Shop Costype */
        Costype?: (number | null);

        /** DB_Shop Costp */
        Costp?: (number | null);

        /** DB_Shop Cost */
        Cost?: (number | null);

        /** DB_Shop Typee */
        Typee?: (number | null);

        /** DB_Shop PropId */
        PropId?: (number | null);

        /** DB_Shop Value */
        Value?: (number | null);

        /** DB_Shop Getype */
        Getype?: (number | null);

        /** DB_Shop Tpyes */
        Tpyes?: (number | null);

        /** DB_Shop Max */
        Max?: (number | null);

        /** DB_Shop ConditionId */
        ConditionId?: (number | null);

        /** DB_Shop Reload */
        Reload?: (number | null);

        /** DB_Shop Amount */
        Amount?: (number | null);

        /** DB_Shop TimesLimit */
        TimesLimit?: (number | null);

        /** DB_Shop DayLimit */
        DayLimit?: (number | null);

        /** DB_Shop PT_ItemCode */
        PT_ItemCode?: (string | null);

        /** DB_Shop PayPlatform_Flag */
        PayPlatform_Flag?: (string | null);
    }

    /** Represents a DB_Shop. */
    class DB_Shop implements IDB_Shop {

        /**
         * Constructs a new DB_Shop.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Shop);

        /** DB_Shop Id. */
        public Id: number;

        /** DB_Shop ShowType. */
        public ShowType: number;

        /** DB_Shop Name. */
        public Name: string;

        /** DB_Shop Picture. */
        public Picture: string;

        /** DB_Shop Desc. */
        public Desc: string;

        /** DB_Shop Group. */
        public Group: number;

        /** DB_Shop Rebate. */
        public Rebate: number;

        /** DB_Shop Turn. */
        public Turn: number;

        /** DB_Shop Special. */
        public Special: number;

        /** DB_Shop Costype. */
        public Costype: number;

        /** DB_Shop Costp. */
        public Costp: number;

        /** DB_Shop Cost. */
        public Cost: number;

        /** DB_Shop Typee. */
        public Typee: number;

        /** DB_Shop PropId. */
        public PropId: number;

        /** DB_Shop Value. */
        public Value: number;

        /** DB_Shop Getype. */
        public Getype: number;

        /** DB_Shop Tpyes. */
        public Tpyes: number;

        /** DB_Shop Max. */
        public Max: number;

        /** DB_Shop ConditionId. */
        public ConditionId: number;

        /** DB_Shop Reload. */
        public Reload: number;

        /** DB_Shop Amount. */
        public Amount: number;

        /** DB_Shop TimesLimit. */
        public TimesLimit: number;

        /** DB_Shop DayLimit. */
        public DayLimit: number;

        /** DB_Shop PT_ItemCode. */
        public PT_ItemCode: string;

        /** DB_Shop PayPlatform_Flag. */
        public PayPlatform_Flag: string;

        /**
         * Encodes the specified DB_Shop message. Does not implicitly {@link server.DB_Shop.verify|verify} messages.
         * @param m DB_Shop message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Shop, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Shop message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Shop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Shop;
    }

    /** Properties of a DB_ShopArray. */
    interface IDB_ShopArray {

        /** DB_ShopArray Arr */
        Arr?: (server.IDB_Shop[] | null);
    }

    /** Represents a DB_ShopArray. */
    class DB_ShopArray implements IDB_ShopArray {

        /**
         * Constructs a new DB_ShopArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_ShopArray);

        /** DB_ShopArray Arr. */
        public Arr: server.IDB_Shop[];

        /**
         * Encodes the specified DB_ShopArray message. Does not implicitly {@link server.DB_ShopArray.verify|verify} messages.
         * @param m DB_ShopArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_ShopArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_ShopArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_ShopArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_ShopArray;
    }

    /** Properties of a DB_Shop1. */
    interface IDB_Shop1 {

        /** DB_Shop1 Id */
        Id?: (number | null);

        /** DB_Shop1 ItemId */
        ItemId?: (number | null);

        /** DB_Shop1 Page */
        Page?: (number | null);

        /** DB_Shop1 Order */
        Order?: (number | null);

        /** DB_Shop1 Type */
        Type?: (number | null);

        /** DB_Shop1 Location */
        Location?: (number[] | null);

        /** DB_Shop1 Picture */
        Picture?: (string | null);

        /** DB_Shop1 Name */
        Name?: (string | null);

        /** DB_Shop1 Ad */
        Ad?: (number | null);

        /** DB_Shop1 AdTime */
        AdTime?: (number | null);

        /** DB_Shop1 RepeatTimes */
        RepeatTimes?: (number | null);

        /** DB_Shop1 CoolingTime */
        CoolingTime?: (number[] | null);

        /** DB_Shop1 Label */
        Label?: (number[] | null);

        /** DB_Shop1 Added */
        Added?: (number | null);

        /** DB_Shop1 Amount */
        Amount?: (number | null);

        /** DB_Shop1 Consume */
        Consume?: (number | null);

        /** DB_Shop1 ConsumptionAmount */
        ConsumptionAmount?: (number | null);
    }

    /** Represents a DB_Shop1. */
    class DB_Shop1 implements IDB_Shop1 {

        /**
         * Constructs a new DB_Shop1.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Shop1);

        /** DB_Shop1 Id. */
        public Id: number;

        /** DB_Shop1 ItemId. */
        public ItemId: number;

        /** DB_Shop1 Page. */
        public Page: number;

        /** DB_Shop1 Order. */
        public Order: number;

        /** DB_Shop1 Type. */
        public Type: number;

        /** DB_Shop1 Location. */
        public Location: number[];

        /** DB_Shop1 Picture. */
        public Picture: string;

        /** DB_Shop1 Name. */
        public Name: string;

        /** DB_Shop1 Ad. */
        public Ad: number;

        /** DB_Shop1 AdTime. */
        public AdTime: number;

        /** DB_Shop1 RepeatTimes. */
        public RepeatTimes: number;

        /** DB_Shop1 CoolingTime. */
        public CoolingTime: number[];

        /** DB_Shop1 Label. */
        public Label: number[];

        /** DB_Shop1 Added. */
        public Added: number;

        /** DB_Shop1 Amount. */
        public Amount: number;

        /** DB_Shop1 Consume. */
        public Consume: number;

        /** DB_Shop1 ConsumptionAmount. */
        public ConsumptionAmount: number;

        /**
         * Encodes the specified DB_Shop1 message. Does not implicitly {@link server.DB_Shop1.verify|verify} messages.
         * @param m DB_Shop1 message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Shop1, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Shop1 message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Shop1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Shop1;
    }

    /** Properties of a DB_Shop1Array. */
    interface IDB_Shop1Array {

        /** DB_Shop1Array Arr */
        Arr?: (server.IDB_Shop1[] | null);
    }

    /** Represents a DB_Shop1Array. */
    class DB_Shop1Array implements IDB_Shop1Array {

        /**
         * Constructs a new DB_Shop1Array.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Shop1Array);

        /** DB_Shop1Array Arr. */
        public Arr: server.IDB_Shop1[];

        /**
         * Encodes the specified DB_Shop1Array message. Does not implicitly {@link server.DB_Shop1Array.verify|verify} messages.
         * @param m DB_Shop1Array message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Shop1Array, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Shop1Array message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Shop1Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Shop1Array;
    }

    /** Properties of a DB_SlotRateWeight. */
    interface IDB_SlotRateWeight {

        /** DB_SlotRateWeight Id */
        Id?: (number | null);

        /** DB_SlotRateWeight Sortid */
        Sortid?: (number | null);

        /** DB_SlotRateWeight NormCol1 */
        NormCol1?: (number[] | null);

        /** DB_SlotRateWeight NormCol2 */
        NormCol2?: (number[] | null);

        /** DB_SlotRateWeight NormCol3 */
        NormCol3?: (number[] | null);

        /** DB_SlotRateWeight NormCol4 */
        NormCol4?: (number[] | null);

        /** DB_SlotRateWeight NormCol5 */
        NormCol5?: (number[] | null);

        /** DB_SlotRateWeight FreeCol1 */
        FreeCol1?: (number[] | null);

        /** DB_SlotRateWeight FreeCol2 */
        FreeCol2?: (number[] | null);

        /** DB_SlotRateWeight FreeCol3 */
        FreeCol3?: (number[] | null);

        /** DB_SlotRateWeight FreeCol4 */
        FreeCol4?: (number[] | null);

        /** DB_SlotRateWeight FreeCol5 */
        FreeCol5?: (number[] | null);

        /** DB_SlotRateWeight MaryOut */
        MaryOut?: (number[] | null);

        /** DB_SlotRateWeight MaryMid */
        MaryMid?: (number[] | null);
    }

    /** Represents a DB_SlotRateWeight. */
    class DB_SlotRateWeight implements IDB_SlotRateWeight {

        /**
         * Constructs a new DB_SlotRateWeight.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_SlotRateWeight);

        /** DB_SlotRateWeight Id. */
        public Id: number;

        /** DB_SlotRateWeight Sortid. */
        public Sortid: number;

        /** DB_SlotRateWeight NormCol1. */
        public NormCol1: number[];

        /** DB_SlotRateWeight NormCol2. */
        public NormCol2: number[];

        /** DB_SlotRateWeight NormCol3. */
        public NormCol3: number[];

        /** DB_SlotRateWeight NormCol4. */
        public NormCol4: number[];

        /** DB_SlotRateWeight NormCol5. */
        public NormCol5: number[];

        /** DB_SlotRateWeight FreeCol1. */
        public FreeCol1: number[];

        /** DB_SlotRateWeight FreeCol2. */
        public FreeCol2: number[];

        /** DB_SlotRateWeight FreeCol3. */
        public FreeCol3: number[];

        /** DB_SlotRateWeight FreeCol4. */
        public FreeCol4: number[];

        /** DB_SlotRateWeight FreeCol5. */
        public FreeCol5: number[];

        /** DB_SlotRateWeight MaryOut. */
        public MaryOut: number[];

        /** DB_SlotRateWeight MaryMid. */
        public MaryMid: number[];

        /**
         * Encodes the specified DB_SlotRateWeight message. Does not implicitly {@link server.DB_SlotRateWeight.verify|verify} messages.
         * @param m DB_SlotRateWeight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_SlotRateWeight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_SlotRateWeight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_SlotRateWeight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_SlotRateWeight;
    }

    /** Properties of a DB_SlotRateWeightArray. */
    interface IDB_SlotRateWeightArray {

        /** DB_SlotRateWeightArray Arr */
        Arr?: (server.IDB_SlotRateWeight[] | null);
    }

    /** Represents a DB_SlotRateWeightArray. */
    class DB_SlotRateWeightArray implements IDB_SlotRateWeightArray {

        /**
         * Constructs a new DB_SlotRateWeightArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_SlotRateWeightArray);

        /** DB_SlotRateWeightArray Arr. */
        public Arr: server.IDB_SlotRateWeight[];

        /**
         * Encodes the specified DB_SlotRateWeightArray message. Does not implicitly {@link server.DB_SlotRateWeightArray.verify|verify} messages.
         * @param m DB_SlotRateWeightArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_SlotRateWeightArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_SlotRateWeightArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_SlotRateWeightArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_SlotRateWeightArray;
    }

    /** Properties of a DB_SystemChance. */
    interface IDB_SystemChance {

        /** DB_SystemChance Id */
        Id?: (number | null);

        /** DB_SystemChance Desc */
        Desc?: (string | null);

        /** DB_SystemChance ChanceType */
        ChanceType?: (number | null);

        /** DB_SystemChance Coin */
        Coin?: (number | null);

        /** DB_SystemChance Rate */
        Rate?: (number | null);
    }

    /** Represents a DB_SystemChance. */
    class DB_SystemChance implements IDB_SystemChance {

        /**
         * Constructs a new DB_SystemChance.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_SystemChance);

        /** DB_SystemChance Id. */
        public Id: number;

        /** DB_SystemChance Desc. */
        public Desc: string;

        /** DB_SystemChance ChanceType. */
        public ChanceType: number;

        /** DB_SystemChance Coin. */
        public Coin: number;

        /** DB_SystemChance Rate. */
        public Rate: number;

        /**
         * Encodes the specified DB_SystemChance message. Does not implicitly {@link server.DB_SystemChance.verify|verify} messages.
         * @param m DB_SystemChance message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_SystemChance, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_SystemChance message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_SystemChance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_SystemChance;
    }

    /** Properties of a DB_SystemChanceArray. */
    interface IDB_SystemChanceArray {

        /** DB_SystemChanceArray Arr */
        Arr?: (server.IDB_SystemChance[] | null);
    }

    /** Represents a DB_SystemChanceArray. */
    class DB_SystemChanceArray implements IDB_SystemChanceArray {

        /**
         * Constructs a new DB_SystemChanceArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_SystemChanceArray);

        /** DB_SystemChanceArray Arr. */
        public Arr: server.IDB_SystemChance[];

        /**
         * Encodes the specified DB_SystemChanceArray message. Does not implicitly {@link server.DB_SystemChanceArray.verify|verify} messages.
         * @param m DB_SystemChanceArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_SystemChanceArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_SystemChanceArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_SystemChanceArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_SystemChanceArray;
    }

    /** Properties of a DB_Task. */
    interface IDB_Task {

        /** DB_Task Id */
        Id?: (number | null);

        /** DB_Task Name */
        Name?: (string | null);

        /** DB_Task Desc */
        Desc?: (string | null);

        /** DB_Task Sort */
        Sort?: (number | null);

        /** DB_Task TrunkTaskId */
        TrunkTaskId?: (number | null);

        /** DB_Task PostIds */
        PostIds?: (number[] | null);

        /** DB_Task PostLimitTime */
        PostLimitTime?: (number | null);

        /** DB_Task AcceptConds */
        AcceptConds?: (number[] | null);

        /** DB_Task CompleteConds */
        CompleteConds?: (number[] | null);

        /** DB_Task Prize */
        Prize?: (number[] | null);

        /** DB_Task PeriodOfTime */
        PeriodOfTime?: (number | null);

        /** DB_Task StartOfTime */
        StartOfTime?: (number | null);

        /** DB_Task NeedDel */
        NeedDel?: (number | null);

        /** DB_Task Func */
        Func?: (number | null);

        /** DB_Task FuncParam */
        FuncParam?: (number[] | null);

        /** DB_Task ZeroEffect */
        ZeroEffect?: (number | null);
    }

    /** Represents a DB_Task. */
    class DB_Task implements IDB_Task {

        /**
         * Constructs a new DB_Task.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Task);

        /** DB_Task Id. */
        public Id: number;

        /** DB_Task Name. */
        public Name: string;

        /** DB_Task Desc. */
        public Desc: string;

        /** DB_Task Sort. */
        public Sort: number;

        /** DB_Task TrunkTaskId. */
        public TrunkTaskId: number;

        /** DB_Task PostIds. */
        public PostIds: number[];

        /** DB_Task PostLimitTime. */
        public PostLimitTime: number;

        /** DB_Task AcceptConds. */
        public AcceptConds: number[];

        /** DB_Task CompleteConds. */
        public CompleteConds: number[];

        /** DB_Task Prize. */
        public Prize: number[];

        /** DB_Task PeriodOfTime. */
        public PeriodOfTime: number;

        /** DB_Task StartOfTime. */
        public StartOfTime: number;

        /** DB_Task NeedDel. */
        public NeedDel: number;

        /** DB_Task Func. */
        public Func: number;

        /** DB_Task FuncParam. */
        public FuncParam: number[];

        /** DB_Task ZeroEffect. */
        public ZeroEffect: number;

        /**
         * Encodes the specified DB_Task message. Does not implicitly {@link server.DB_Task.verify|verify} messages.
         * @param m DB_Task message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Task, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Task message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Task;
    }

    /** Properties of a DB_TaskArray. */
    interface IDB_TaskArray {

        /** DB_TaskArray Arr */
        Arr?: (server.IDB_Task[] | null);
    }

    /** Represents a DB_TaskArray. */
    class DB_TaskArray implements IDB_TaskArray {

        /**
         * Constructs a new DB_TaskArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_TaskArray);

        /** DB_TaskArray Arr. */
        public Arr: server.IDB_Task[];

        /**
         * Encodes the specified DB_TaskArray message. Does not implicitly {@link server.DB_TaskArray.verify|verify} messages.
         * @param m DB_TaskArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_TaskArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_TaskArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_TaskArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_TaskArray;
    }

    /** Properties of a DB_TaskCond. */
    interface IDB_TaskCond {

        /** DB_TaskCond Id */
        Id?: (number | null);

        /** DB_TaskCond Name */
        Name?: (string | null);

        /** DB_TaskCond CondType */
        CondType?: (number | null);

        /** DB_TaskCond Param */
        Param?: (number[] | null);

        /** DB_TaskCond Count */
        Count?: (number | null);
    }

    /** Represents a DB_TaskCond. */
    class DB_TaskCond implements IDB_TaskCond {

        /**
         * Constructs a new DB_TaskCond.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_TaskCond);

        /** DB_TaskCond Id. */
        public Id: number;

        /** DB_TaskCond Name. */
        public Name: string;

        /** DB_TaskCond CondType. */
        public CondType: number;

        /** DB_TaskCond Param. */
        public Param: number[];

        /** DB_TaskCond Count. */
        public Count: number;

        /**
         * Encodes the specified DB_TaskCond message. Does not implicitly {@link server.DB_TaskCond.verify|verify} messages.
         * @param m DB_TaskCond message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_TaskCond, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_TaskCond message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_TaskCond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_TaskCond;
    }

    /** Properties of a DB_TaskCondArray. */
    interface IDB_TaskCondArray {

        /** DB_TaskCondArray Arr */
        Arr?: (server.IDB_TaskCond[] | null);
    }

    /** Represents a DB_TaskCondArray. */
    class DB_TaskCondArray implements IDB_TaskCondArray {

        /**
         * Constructs a new DB_TaskCondArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_TaskCondArray);

        /** DB_TaskCondArray Arr. */
        public Arr: server.IDB_TaskCond[];

        /**
         * Encodes the specified DB_TaskCondArray message. Does not implicitly {@link server.DB_TaskCondArray.verify|verify} messages.
         * @param m DB_TaskCondArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_TaskCondArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_TaskCondArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_TaskCondArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_TaskCondArray;
    }

    /** Properties of a DB_ThirdPlatformGameMapping. */
    interface IDB_ThirdPlatformGameMapping {

        /** DB_ThirdPlatformGameMapping Id */
        Id?: (number | null);

        /** DB_ThirdPlatformGameMapping SystemGameID */
        SystemGameID?: (number | null);

        /** DB_ThirdPlatformGameMapping ThirdPlatformName */
        ThirdPlatformName?: (string | null);

        /** DB_ThirdPlatformGameMapping ThirdGameID */
        ThirdGameID?: (string | null);

        /** DB_ThirdPlatformGameMapping Desc */
        Desc?: (string | null);

        /** DB_ThirdPlatformGameMapping ScreenOrientationType */
        ScreenOrientationType?: (number | null);

        /** DB_ThirdPlatformGameMapping ThirdID */
        ThirdID?: (number | null);
    }

    /** Represents a DB_ThirdPlatformGameMapping. */
    class DB_ThirdPlatformGameMapping implements IDB_ThirdPlatformGameMapping {

        /**
         * Constructs a new DB_ThirdPlatformGameMapping.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_ThirdPlatformGameMapping);

        /** DB_ThirdPlatformGameMapping Id. */
        public Id: number;

        /** DB_ThirdPlatformGameMapping SystemGameID. */
        public SystemGameID: number;

        /** DB_ThirdPlatformGameMapping ThirdPlatformName. */
        public ThirdPlatformName: string;

        /** DB_ThirdPlatformGameMapping ThirdGameID. */
        public ThirdGameID: string;

        /** DB_ThirdPlatformGameMapping Desc. */
        public Desc: string;

        /** DB_ThirdPlatformGameMapping ScreenOrientationType. */
        public ScreenOrientationType: number;

        /** DB_ThirdPlatformGameMapping ThirdID. */
        public ThirdID: number;

        /**
         * Encodes the specified DB_ThirdPlatformGameMapping message. Does not implicitly {@link server.DB_ThirdPlatformGameMapping.verify|verify} messages.
         * @param m DB_ThirdPlatformGameMapping message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_ThirdPlatformGameMapping, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_ThirdPlatformGameMapping message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_ThirdPlatformGameMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_ThirdPlatformGameMapping;
    }

    /** Properties of a DB_ThirdPlatformGameMappingArray. */
    interface IDB_ThirdPlatformGameMappingArray {

        /** DB_ThirdPlatformGameMappingArray Arr */
        Arr?: (server.IDB_ThirdPlatformGameMapping[] | null);
    }

    /** Represents a DB_ThirdPlatformGameMappingArray. */
    class DB_ThirdPlatformGameMappingArray implements IDB_ThirdPlatformGameMappingArray {

        /**
         * Constructs a new DB_ThirdPlatformGameMappingArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_ThirdPlatformGameMappingArray);

        /** DB_ThirdPlatformGameMappingArray Arr. */
        public Arr: server.IDB_ThirdPlatformGameMapping[];

        /**
         * Encodes the specified DB_ThirdPlatformGameMappingArray message. Does not implicitly {@link server.DB_ThirdPlatformGameMappingArray.verify|verify} messages.
         * @param m DB_ThirdPlatformGameMappingArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_ThirdPlatformGameMappingArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_ThirdPlatformGameMappingArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_ThirdPlatformGameMappingArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_ThirdPlatformGameMappingArray;
    }

    /** Properties of a DB_Tips. */
    interface IDB_Tips {

        /** DB_Tips Id */
        Id?: (number | null);

        /** DB_Tips GameId */
        GameId?: (number[] | null);

        /** DB_Tips Des */
        Des?: (string | null);
    }

    /** Represents a DB_Tips. */
    class DB_Tips implements IDB_Tips {

        /**
         * Constructs a new DB_Tips.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_Tips);

        /** DB_Tips Id. */
        public Id: number;

        /** DB_Tips GameId. */
        public GameId: number[];

        /** DB_Tips Des. */
        public Des: string;

        /**
         * Encodes the specified DB_Tips message. Does not implicitly {@link server.DB_Tips.verify|verify} messages.
         * @param m DB_Tips message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_Tips, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_Tips message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_Tips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_Tips;
    }

    /** Properties of a DB_TipsArray. */
    interface IDB_TipsArray {

        /** DB_TipsArray Arr */
        Arr?: (server.IDB_Tips[] | null);
    }

    /** Represents a DB_TipsArray. */
    class DB_TipsArray implements IDB_TipsArray {

        /**
         * Constructs a new DB_TipsArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_TipsArray);

        /** DB_TipsArray Arr. */
        public Arr: server.IDB_Tips[];

        /**
         * Encodes the specified DB_TipsArray message. Does not implicitly {@link server.DB_TipsArray.verify|verify} messages.
         * @param m DB_TipsArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_TipsArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_TipsArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_TipsArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_TipsArray;
    }

    /** Properties of a DB_VIP. */
    interface IDB_VIP {

        /** DB_VIP Id */
        Id?: (number | null);

        /** DB_VIP Name */
        Name?: (string | null);

        /** DB_VIP Count */
        Count?: (number | null);

        /** DB_VIP Param */
        Param?: (number[] | null);

        /** DB_VIP ParamName */
        ParamName?: (string[] | null);

        /** DB_VIP ExchangeRate */
        ExchangeRate?: (number | null);

        /** DB_VIP RewardPaotaiID */
        RewardPaotaiID?: (number[] | null);

        /** DB_VIP RewardOutlineID */
        RewardOutlineID?: (number[] | null);
    }

    /** Represents a DB_VIP. */
    class DB_VIP implements IDB_VIP {

        /**
         * Constructs a new DB_VIP.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_VIP);

        /** DB_VIP Id. */
        public Id: number;

        /** DB_VIP Name. */
        public Name: string;

        /** DB_VIP Count. */
        public Count: number;

        /** DB_VIP Param. */
        public Param: number[];

        /** DB_VIP ParamName. */
        public ParamName: string[];

        /** DB_VIP ExchangeRate. */
        public ExchangeRate: number;

        /** DB_VIP RewardPaotaiID. */
        public RewardPaotaiID: number[];

        /** DB_VIP RewardOutlineID. */
        public RewardOutlineID: number[];

        /**
         * Encodes the specified DB_VIP message. Does not implicitly {@link server.DB_VIP.verify|verify} messages.
         * @param m DB_VIP message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_VIP, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_VIP message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_VIP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_VIP;
    }

    /** Properties of a DB_VIPArray. */
    interface IDB_VIPArray {

        /** DB_VIPArray Arr */
        Arr?: (server.IDB_VIP[] | null);
    }

    /** Represents a DB_VIPArray. */
    class DB_VIPArray implements IDB_VIPArray {

        /**
         * Constructs a new DB_VIPArray.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDB_VIPArray);

        /** DB_VIPArray Arr. */
        public Arr: server.IDB_VIP[];

        /**
         * Encodes the specified DB_VIPArray message. Does not implicitly {@link server.DB_VIPArray.verify|verify} messages.
         * @param m DB_VIPArray message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDB_VIPArray, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DB_VIPArray message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DB_VIPArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DB_VIPArray;
    }

    /** SSPacketID enum. */
    enum SSPacketID {
        PACKET_SERVER_ZERO = 0,
        PACKET_GB_CUR_LOAD = 1000,
        PACKET_GB_STATE_SWITCH = 1001,
        PACKET_SC_GATEINFO = 1002,
        PACKET_SS_DICONNECT = 1004,
        PACKET_MS_SRVCTRL = 1005,
        PACKET_WG_SERVER_STATE = 1012,
        PACKET_SG_BINDGROUPTAG = 1013,
        PACKET_SS_CUSTOMTAG_MULTICAST = 1014,
        PACKET_WG_CREATESCENE = 1101,
        PACKET_WG_DESTROYSCENE = 1102,
        PACKET_WG_PLAYERENTER = 1103,
        PACKET_GW_PLAYERLEAVE = 1104,
        PACKET_GW_BILLEDROOMCARD = 1105,
        PACKET_GW_DESTROYSCENE = 1106,
        PACKET_WG_PLAYERDROPLINE = 1107,
        PACKET_WG_PLAYERREHOLD = 1108,
        PACKET_GG_PLAYERSESSIONBIND = 1109,
        PACKET_GG_PLAYERSESSIONUNBIND = 1110,
        PACKET_WG_PLAYERRETURN = 1111,
        PACKET_GR_REPLAYRECORD = 1112,
        PACKET_GW_GAMEREC = 1113,
        PACKET_WG_AUDIENCEENTER = 1114,
        PACKET_GW_AUDIENCELEAVE = 1115,
        PACKET_GW_SCENESTART = 1116,
        PACKET_WR_INVITEROBOT = 1117,
        PACKET_WG_AGENTKICKOUTPLAYER = 1118,
        PACKET_WD_DATANALYSIS = 1119,
        PACKET_GW_CLUBBILLMONEY = 1121,
        PACKET_WG_REBIND_SNID = 1122,
        PACKET_WG_AUDIENCESIT = 1123,
        PACKET_WG_RECHARGE = 1124,
        PACKET_GW_SCENESTATE = 1125,
        PACKET_WG_GRACE_DESTROYSCENE = 1126,
        PACKET_GW_SCENEEND = 1127,
        PACKET_GW_FISHRECORD = 1128,
        PACKET_GW_PLAYERFORCELEAVE = 1129,
        PACKET_GW_PLAYERWINSOCORE = 1130,
        PACKET_GW_PLAYERBET = 1131,
        PACKET_DW_ThirdRebateMessage = 1132,
        PACKET_WD_ACKThirdRebateMessage = 1133,
        PACKET_DW_ThirdRoundMessage = 1134,
        PACKET_WR_INVITECREATEROOM = 1135,
        PACKET_WR_LoginRec = 1136,
        PACKET_WR_GameDetail = 1137,
        PACKET_WR_PlayerData = 1138,
        PACKET_WG_PlayerLEAVE = 1139,
        PACKET_GN_PLAYERCARDS = 1500,
        PACKET_GW_REBUILDSCENE = 1501,
        PACKET_GW_PLAYERSTATE = 1502,
        PACKET_GW_NEWNOTICE = 1503,
        PACKET_GW_PLAYERSTATIC = 1504,
        PACKET_WG_COINPOOLSETTING = 1505,
        PACKET_WG_SETPLAYERBLACKLEVEL = 1506,
        PACKET_GW_AUTORELIEVEWBLEVEL = 1507,
        PACKET_GN_PLAYERPARAM = 1508,
        PACKET_GW_SCENEPLAYERLOG = 1509,
        PACKET_GW_SYNCPLAYERCOIN = 1510,
        PACKET_WG_PlayerOnGameCount = 1514,
        PACKET_GR_GameFreeData = 1515,
        PACKET_WG_SyncPlayerSafeBoxCoin = 1516,
        PACKET_WG_RESETCOINPOOL = 1517,
        PACKET_WG_CLUB_MESSAGE = 1518,
        PACKET_GW_GAMESTATELOG = 1519,
        PACKET_GW_GAMESTATE = 1520,
        PACKET_GW_JACKPOTLIST = 1521,
        PACKET_GW_JACKPOTCOIN = 1522,
        PACKET_GW_NICEIDREBIND = 1523,
        PACKET_GW_PLAYERWINCOIN = 1524,
        PACKET_GW_PLAYERAUTOMARKTAG = 1525,
        PACKET_WG_INVITEROBENTERCOINSCENEQUEUE = 1526,
        PACKET_WG_GAMEFORCESTART = 1527,
        PACKET_WG_PROFITCONTROL_CORRECT = 1528,
        PACKET_GW_CHANGESCENEEVENT = 1529,
        PACKET_WT_PLAYERPAY = 1530,
        PACKET_GW_PLAYERMATCHBILLED = 1531,
        PACKET_GW_PLAYERMATCHGRADE = 1532,
        PACKET_WG_PLAYERQUITMATCH = 1533,
        PACKET_WG_SCENEMATCHBASECHANGE = 1534,
        PACKET_SS_REDIRECTTOPLAYER = 1535,
        PACKET_WG_INVITEMATCHROB = 1536,
        PACKET_WG_GAMEJACKPOT = 1539,
        PACKET_GW_GAMENEWBIGWINHISTORY = 1540,
        PACKET_WG_PLAYERENTER_MINIGAME = 1541,
        PACKET_WG_PLAYERLEAVE_MINIGAME = 1542,
        PACKET_GW_PLAYERLEAVE_MINIGAME = 1543,
        PACKET_GW_DESTROYMINISCENE = 1544,
        PACKET_GR_DESTROYSCENE = 1545,
        PACKET_WG_DTROOMINFO = 1546,
        PACKET_GW_DTROOMINFO = 1547,
        PACKET_WG_DTROOMRESULTS = 1548,
        PACKET_GW_DTROOMRESULTS = 1549,
        PACKET_WG_SINGLEADJUST = 1550,
        PACKET_GW_ADDSINGLEADJUST = 1551
    }

    /** Properties of a SGBindGroupTag. */
    interface ISGBindGroupTag {

        /** SGBindGroupTag Sid */
        Sid?: (number | Long | null);

        /** SGBindGroupTag Code */
        Code?: (server.SGBindGroupTag.OpCode | null);

        /** SGBindGroupTag Tags */
        Tags?: (string[] | null);
    }

    /** Represents a SGBindGroupTag. */
    class SGBindGroupTag implements ISGBindGroupTag {

        /**
         * Constructs a new SGBindGroupTag.
         * @param [p] Properties to set
         */
        constructor(p?: server.ISGBindGroupTag);

        /** SGBindGroupTag Sid. */
        public Sid: (number | Long);

        /** SGBindGroupTag Code. */
        public Code: server.SGBindGroupTag.OpCode;

        /** SGBindGroupTag Tags. */
        public Tags: string[];

        /**
         * Encodes the specified SGBindGroupTag message. Does not implicitly {@link server.SGBindGroupTag.verify|verify} messages.
         * @param m SGBindGroupTag message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.ISGBindGroupTag, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SGBindGroupTag message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SGBindGroupTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.SGBindGroupTag;
    }

    namespace SGBindGroupTag {

        /** OpCode enum. */
        enum OpCode {
            OpCode_Add = 0,
            OpCode_Del = 1
        }
    }

    /** Properties of a SSCustomTagMulticast. */
    interface ISSCustomTagMulticast {

        /** SSCustomTagMulticast Tags */
        Tags?: (string[] | null);

        /** SSCustomTagMulticast RawData */
        RawData?: (Uint8Array | null);
    }

    /** Represents a SSCustomTagMulticast. */
    class SSCustomTagMulticast implements ISSCustomTagMulticast {

        /**
         * Constructs a new SSCustomTagMulticast.
         * @param [p] Properties to set
         */
        constructor(p?: server.ISSCustomTagMulticast);

        /** SSCustomTagMulticast Tags. */
        public Tags: string[];

        /** SSCustomTagMulticast RawData. */
        public RawData: Uint8Array;

        /**
         * Encodes the specified SSCustomTagMulticast message. Does not implicitly {@link server.SSCustomTagMulticast.verify|verify} messages.
         * @param m SSCustomTagMulticast message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.ISSCustomTagMulticast, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SSCustomTagMulticast message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SSCustomTagMulticast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.SSCustomTagMulticast;
    }

    /** Properties of an OpResultParam. */
    interface IOpResultParam {

        /** OpResultParam ParamInt64 */
        ParamInt64?: (number | Long | null);

        /** OpResultParam ParamString */
        ParamString?: (string | null);
    }

    /** Represents an OpResultParam. */
    class OpResultParam implements IOpResultParam {

        /**
         * Constructs a new OpResultParam.
         * @param [p] Properties to set
         */
        constructor(p?: server.IOpResultParam);

        /** OpResultParam ParamInt64. */
        public ParamInt64: (number | Long);

        /** OpResultParam ParamString. */
        public ParamString: string;

        /**
         * Encodes the specified OpResultParam message. Does not implicitly {@link server.OpResultParam.verify|verify} messages.
         * @param m OpResultParam message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IOpResultParam, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpResultParam message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns OpResultParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.OpResultParam;
    }

    /** Properties of a ServerLoad. */
    interface IServerLoad {

        /** ServerLoad SrvType */
        SrvType?: (number | null);

        /** ServerLoad SrvId */
        SrvId?: (number | null);

        /** ServerLoad CurLoad */
        CurLoad?: (number | null);
    }

    /** Represents a ServerLoad. */
    class ServerLoad implements IServerLoad {

        /**
         * Constructs a new ServerLoad.
         * @param [p] Properties to set
         */
        constructor(p?: server.IServerLoad);

        /** ServerLoad SrvType. */
        public SrvType: number;

        /** ServerLoad SrvId. */
        public SrvId: number;

        /** ServerLoad CurLoad. */
        public CurLoad: number;

        /**
         * Encodes the specified ServerLoad message. Does not implicitly {@link server.ServerLoad.verify|verify} messages.
         * @param m ServerLoad message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IServerLoad, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerLoad message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ServerLoad
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.ServerLoad;
    }

    /** Properties of a ServerStateSwitch. */
    interface IServerStateSwitch {

        /** ServerStateSwitch SrvType */
        SrvType?: (number | null);

        /** ServerStateSwitch SrvId */
        SrvId?: (number | null);
    }

    /** Represents a ServerStateSwitch. */
    class ServerStateSwitch implements IServerStateSwitch {

        /**
         * Constructs a new ServerStateSwitch.
         * @param [p] Properties to set
         */
        constructor(p?: server.IServerStateSwitch);

        /** ServerStateSwitch SrvType. */
        public SrvType: number;

        /** ServerStateSwitch SrvId. */
        public SrvId: number;

        /**
         * Encodes the specified ServerStateSwitch message. Does not implicitly {@link server.ServerStateSwitch.verify|verify} messages.
         * @param m ServerStateSwitch message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IServerStateSwitch, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerStateSwitch message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ServerStateSwitch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.ServerStateSwitch;
    }

    /** Properties of a ServerState. */
    interface IServerState {

        /** ServerState SrvState */
        SrvState?: (number | null);
    }

    /** Represents a ServerState. */
    class ServerState implements IServerState {

        /**
         * Constructs a new ServerState.
         * @param [p] Properties to set
         */
        constructor(p?: server.IServerState);

        /** ServerState SrvState. */
        public SrvState: number;

        /**
         * Encodes the specified ServerState message. Does not implicitly {@link server.ServerState.verify|verify} messages.
         * @param m ServerState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IServerState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ServerState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.ServerState;
    }

    /** Properties of a ServerCtrl. */
    interface IServerCtrl {

        /** ServerCtrl CtrlCode */
        CtrlCode?: (number | null);

        /** ServerCtrl Params */
        Params?: (server.IOpResultParam[] | null);
    }

    /** Represents a ServerCtrl. */
    class ServerCtrl implements IServerCtrl {

        /**
         * Constructs a new ServerCtrl.
         * @param [p] Properties to set
         */
        constructor(p?: server.IServerCtrl);

        /** ServerCtrl CtrlCode. */
        public CtrlCode: number;

        /** ServerCtrl Params. */
        public Params: server.IOpResultParam[];

        /**
         * Encodes the specified ServerCtrl message. Does not implicitly {@link server.ServerCtrl.verify|verify} messages.
         * @param m ServerCtrl message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IServerCtrl, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerCtrl message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ServerCtrl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.ServerCtrl;
    }

    /** Properties of a ServerNotice. */
    interface IServerNotice {

        /** ServerNotice Text */
        Text?: (string | null);
    }

    /** Represents a ServerNotice. */
    class ServerNotice implements IServerNotice {

        /**
         * Constructs a new ServerNotice.
         * @param [p] Properties to set
         */
        constructor(p?: server.IServerNotice);

        /** ServerNotice Text. */
        public Text: string;

        /**
         * Encodes the specified ServerNotice message. Does not implicitly {@link server.ServerNotice.verify|verify} messages.
         * @param m ServerNotice message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IServerNotice, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerNotice message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ServerNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.ServerNotice;
    }

    /** Properties of a WGCreateScene. */
    interface IWGCreateScene {

        /** WGCreateScene SceneId */
        SceneId?: (number | null);

        /** WGCreateScene GameId */
        GameId?: (number | null);

        /** WGCreateScene GameMode */
        GameMode?: (number | null);

        /** WGCreateScene Params */
        Params?: (number[] | null);

        /** WGCreateScene Creator */
        Creator?: (number | null);

        /** WGCreateScene Agentor */
        Agentor?: (number | null);

        /** WGCreateScene ReplayCode */
        ReplayCode?: (string | null);

        /** WGCreateScene ParamsEx */
        ParamsEx?: (number[] | null);

        /** WGCreateScene SceneMode */
        SceneMode?: (number | null);

        /** WGCreateScene HallId */
        HallId?: (number | null);

        /** WGCreateScene Platform */
        Platform?: (string | null);

        /** WGCreateScene DBGameFree */
        DBGameFree?: (server.IDB_GameFree | null);

        /** WGCreateScene GroupId */
        GroupId?: (number | null);

        /** WGCreateScene EnterAfterStart */
        EnterAfterStart?: (boolean | null);

        /** WGCreateScene TotalOfGames */
        TotalOfGames?: (number | null);

        /** WGCreateScene Club */
        Club?: (number | null);

        /** WGCreateScene ClubRoomId */
        ClubRoomId?: (string | null);

        /** WGCreateScene ClubRoomPos */
        ClubRoomPos?: (number | null);

        /** WGCreateScene ClubRate */
        ClubRate?: (number | null);

        /** WGCreateScene BaseScore */
        BaseScore?: (number | null);

        /** WGCreateScene PlayerNum */
        PlayerNum?: (number | null);
    }

    /** Represents a WGCreateScene. */
    class WGCreateScene implements IWGCreateScene {

        /**
         * Constructs a new WGCreateScene.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGCreateScene);

        /** WGCreateScene SceneId. */
        public SceneId: number;

        /** WGCreateScene GameId. */
        public GameId: number;

        /** WGCreateScene GameMode. */
        public GameMode: number;

        /** WGCreateScene Params. */
        public Params: number[];

        /** WGCreateScene Creator. */
        public Creator: number;

        /** WGCreateScene Agentor. */
        public Agentor: number;

        /** WGCreateScene ReplayCode. */
        public ReplayCode: string;

        /** WGCreateScene ParamsEx. */
        public ParamsEx: number[];

        /** WGCreateScene SceneMode. */
        public SceneMode: number;

        /** WGCreateScene HallId. */
        public HallId: number;

        /** WGCreateScene Platform. */
        public Platform: string;

        /** WGCreateScene DBGameFree. */
        public DBGameFree?: (server.IDB_GameFree | null);

        /** WGCreateScene GroupId. */
        public GroupId: number;

        /** WGCreateScene EnterAfterStart. */
        public EnterAfterStart: boolean;

        /** WGCreateScene TotalOfGames. */
        public TotalOfGames: number;

        /** WGCreateScene Club. */
        public Club: number;

        /** WGCreateScene ClubRoomId. */
        public ClubRoomId: string;

        /** WGCreateScene ClubRoomPos. */
        public ClubRoomPos: number;

        /** WGCreateScene ClubRate. */
        public ClubRate: number;

        /** WGCreateScene BaseScore. */
        public BaseScore: number;

        /** WGCreateScene PlayerNum. */
        public PlayerNum: number;

        /**
         * Encodes the specified WGCreateScene message. Does not implicitly {@link server.WGCreateScene.verify|verify} messages.
         * @param m WGCreateScene message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGCreateScene, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGCreateScene message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGCreateScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGCreateScene;
    }

    /** Properties of a WGDestroyScene. */
    interface IWGDestroyScene {

        /** WGDestroyScene SceneId */
        SceneId?: (number | null);

        /** WGDestroyScene IsCompleted */
        IsCompleted?: (boolean | null);
    }

    /** Represents a WGDestroyScene. */
    class WGDestroyScene implements IWGDestroyScene {

        /**
         * Constructs a new WGDestroyScene.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGDestroyScene);

        /** WGDestroyScene SceneId. */
        public SceneId: number;

        /** WGDestroyScene IsCompleted. */
        public IsCompleted: boolean;

        /**
         * Encodes the specified WGDestroyScene message. Does not implicitly {@link server.WGDestroyScene.verify|verify} messages.
         * @param m WGDestroyScene message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGDestroyScene, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGDestroyScene message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGDestroyScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGDestroyScene;
    }

    /** Properties of a GWDestroyScene. */
    interface IGWDestroyScene {

        /** GWDestroyScene SceneId */
        SceneId?: (number | null);

        /** GWDestroyScene IsCompleted */
        IsCompleted?: (boolean | null);
    }

    /** Represents a GWDestroyScene. */
    class GWDestroyScene implements IGWDestroyScene {

        /**
         * Constructs a new GWDestroyScene.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWDestroyScene);

        /** GWDestroyScene SceneId. */
        public SceneId: number;

        /** GWDestroyScene IsCompleted. */
        public IsCompleted: boolean;

        /**
         * Encodes the specified GWDestroyScene message. Does not implicitly {@link server.GWDestroyScene.verify|verify} messages.
         * @param m GWDestroyScene message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWDestroyScene, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWDestroyScene message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWDestroyScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWDestroyScene;
    }

    /** Properties of a WGGraceDestroyScene. */
    interface IWGGraceDestroyScene {

        /** WGGraceDestroyScene Ids */
        Ids?: (number[] | null);
    }

    /** Represents a WGGraceDestroyScene. */
    class WGGraceDestroyScene implements IWGGraceDestroyScene {

        /**
         * Constructs a new WGGraceDestroyScene.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGGraceDestroyScene);

        /** WGGraceDestroyScene Ids. */
        public Ids: number[];

        /**
         * Encodes the specified WGGraceDestroyScene message. Does not implicitly {@link server.WGGraceDestroyScene.verify|verify} messages.
         * @param m WGGraceDestroyScene message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGGraceDestroyScene, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGGraceDestroyScene message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGGraceDestroyScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGGraceDestroyScene;
    }

    /** Properties of a RebateTask. */
    interface IRebateTask {

        /** RebateTask RebateSwitch */
        RebateSwitch?: (boolean | null);

        /** RebateTask RebateGameCfg */
        RebateGameCfg?: (string[] | null);
    }

    /** Represents a RebateTask. */
    class RebateTask implements IRebateTask {

        /**
         * Constructs a new RebateTask.
         * @param [p] Properties to set
         */
        constructor(p?: server.IRebateTask);

        /** RebateTask RebateSwitch. */
        public RebateSwitch: boolean;

        /** RebateTask RebateGameCfg. */
        public RebateGameCfg: string[];

        /**
         * Encodes the specified RebateTask message. Does not implicitly {@link server.RebateTask.verify|verify} messages.
         * @param m RebateTask message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IRebateTask, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RebateTask message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RebateTask
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.RebateTask;
    }

    /** Properties of a WGPlayerEnter. */
    interface IWGPlayerEnter {

        /** WGPlayerEnter Sid */
        Sid?: (number | Long | null);

        /** WGPlayerEnter GateSid */
        GateSid?: (number | Long | null);

        /** WGPlayerEnter SceneId */
        SceneId?: (number | null);

        /** WGPlayerEnter PlayerData */
        PlayerData?: (Uint8Array | null);

        /** WGPlayerEnter AgentCode */
        AgentCode?: (string | null);

        /** WGPlayerEnter TakeCoin */
        TakeCoin?: (number | Long | null);

        /** WGPlayerEnter IsLoaded */
        IsLoaded?: (boolean | null);

        /** WGPlayerEnter IsQM */
        IsQM?: (boolean | null);

        /** WGPlayerEnter ExpectLeaveCoin */
        ExpectLeaveCoin?: (number | Long | null);

        /** WGPlayerEnter ExpectGameTimes */
        ExpectGameTimes?: (number | null);

        /** WGPlayerEnter IParams */
        IParams?: (server.IPlayerIParam[] | null);

        /** WGPlayerEnter SParams */
        SParams?: (server.IPlayerSParam[] | null);

        /** WGPlayerEnter CParams */
        CParams?: (server.IPlayerCParam[] | null);

        /** WGPlayerEnter SnId */
        SnId?: (number | null);

        /** WGPlayerEnter SingleAdjust */
        SingleAdjust?: (Uint8Array | null);

        /** WGPlayerEnter Pos */
        Pos?: (number | null);

        /** WGPlayerEnter Items */
        Items?: ({ [k: string]: number } | null);

        /** WGPlayerEnter MatchParams */
        MatchParams?: (number[] | null);
    }

    /** Represents a WGPlayerEnter. */
    class WGPlayerEnter implements IWGPlayerEnter {

        /**
         * Constructs a new WGPlayerEnter.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGPlayerEnter);

        /** WGPlayerEnter Sid. */
        public Sid: (number | Long);

        /** WGPlayerEnter GateSid. */
        public GateSid: (number | Long);

        /** WGPlayerEnter SceneId. */
        public SceneId: number;

        /** WGPlayerEnter PlayerData. */
        public PlayerData: Uint8Array;

        /** WGPlayerEnter AgentCode. */
        public AgentCode: string;

        /** WGPlayerEnter TakeCoin. */
        public TakeCoin: (number | Long);

        /** WGPlayerEnter IsLoaded. */
        public IsLoaded: boolean;

        /** WGPlayerEnter IsQM. */
        public IsQM: boolean;

        /** WGPlayerEnter ExpectLeaveCoin. */
        public ExpectLeaveCoin: (number | Long);

        /** WGPlayerEnter ExpectGameTimes. */
        public ExpectGameTimes: number;

        /** WGPlayerEnter IParams. */
        public IParams: server.IPlayerIParam[];

        /** WGPlayerEnter SParams. */
        public SParams: server.IPlayerSParam[];

        /** WGPlayerEnter CParams. */
        public CParams: server.IPlayerCParam[];

        /** WGPlayerEnter SnId. */
        public SnId: number;

        /** WGPlayerEnter SingleAdjust. */
        public SingleAdjust: Uint8Array;

        /** WGPlayerEnter Pos. */
        public Pos: number;

        /** WGPlayerEnter Items. */
        public Items: { [k: string]: number };

        /** WGPlayerEnter MatchParams. */
        public MatchParams: number[];

        /**
         * Encodes the specified WGPlayerEnter message. Does not implicitly {@link server.WGPlayerEnter.verify|verify} messages.
         * @param m WGPlayerEnter message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGPlayerEnter, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGPlayerEnter message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGPlayerEnter
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGPlayerEnter;
    }

    /** Properties of a WGAudienceSit. */
    interface IWGAudienceSit {

        /** WGAudienceSit SnId */
        SnId?: (number | null);

        /** WGAudienceSit TakeCoin */
        TakeCoin?: (number | Long | null);

        /** WGAudienceSit SceneId */
        SceneId?: (number | null);

        /** WGAudienceSit Pos */
        Pos?: (number | null);
    }

    /** Represents a WGAudienceSit. */
    class WGAudienceSit implements IWGAudienceSit {

        /**
         * Constructs a new WGAudienceSit.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGAudienceSit);

        /** WGAudienceSit SnId. */
        public SnId: number;

        /** WGAudienceSit TakeCoin. */
        public TakeCoin: (number | Long);

        /** WGAudienceSit SceneId. */
        public SceneId: number;

        /** WGAudienceSit Pos. */
        public Pos: number;

        /**
         * Encodes the specified WGAudienceSit message. Does not implicitly {@link server.WGAudienceSit.verify|verify} messages.
         * @param m WGAudienceSit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGAudienceSit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGAudienceSit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGAudienceSit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGAudienceSit;
    }

    /** Properties of a WGPlayerReturn. */
    interface IWGPlayerReturn {

        /** WGPlayerReturn PlayerId */
        PlayerId?: (number | null);

        /** WGPlayerReturn IsLoaded */
        IsLoaded?: (boolean | null);

        /** WGPlayerReturn RoomId */
        RoomId?: (number | null);

        /** WGPlayerReturn EnterTs */
        EnterTs?: (number | Long | null);
    }

    /** Represents a WGPlayerReturn. */
    class WGPlayerReturn implements IWGPlayerReturn {

        /**
         * Constructs a new WGPlayerReturn.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGPlayerReturn);

        /** WGPlayerReturn PlayerId. */
        public PlayerId: number;

        /** WGPlayerReturn IsLoaded. */
        public IsLoaded: boolean;

        /** WGPlayerReturn RoomId. */
        public RoomId: number;

        /** WGPlayerReturn EnterTs. */
        public EnterTs: (number | Long);

        /**
         * Encodes the specified WGPlayerReturn message. Does not implicitly {@link server.WGPlayerReturn.verify|verify} messages.
         * @param m WGPlayerReturn message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGPlayerReturn, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGPlayerReturn message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGPlayerReturn
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGPlayerReturn;
    }

    /** Properties of a GWPlayerLeave. */
    interface IGWPlayerLeave {

        /** GWPlayerLeave RoomId */
        RoomId?: (number | null);

        /** GWPlayerLeave PlayerId */
        PlayerId?: (number | null);

        /** GWPlayerLeave Reason */
        Reason?: (number | null);

        /** GWPlayerLeave PlayerData */
        PlayerData?: (Uint8Array | null);

        /** GWPlayerLeave ReturnCoin */
        ReturnCoin?: (number | Long | null);

        /** GWPlayerLeave ServiceFee */
        ServiceFee?: (number | Long | null);

        /** GWPlayerLeave GameTimes */
        GameTimes?: (number | null);

        /** GWPlayerLeave GameCoinTs */
        GameCoinTs?: (number | Long | null);

        /** GWPlayerLeave SelVip */
        SelVip?: (number | null);

        /** GWPlayerLeave BetCoin */
        BetCoin?: (number | Long | null);

        /** GWPlayerLeave WinTimes */
        WinTimes?: (number | null);

        /** GWPlayerLeave LostTimes */
        LostTimes?: (number | null);

        /** GWPlayerLeave TotalConvertibleFlow */
        TotalConvertibleFlow?: (number | Long | null);

        /** GWPlayerLeave ValidCacheBetTotal */
        ValidCacheBetTotal?: (number | Long | null);

        /** GWPlayerLeave Items */
        Items?: ({ [k: string]: number } | null);

        /** GWPlayerLeave MatchId */
        MatchId?: (number | null);

        /** GWPlayerLeave CurIsWin */
        CurIsWin?: (number | Long | null);
    }

    /** Represents a GWPlayerLeave. */
    class GWPlayerLeave implements IGWPlayerLeave {

        /**
         * Constructs a new GWPlayerLeave.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWPlayerLeave);

        /** GWPlayerLeave RoomId. */
        public RoomId: number;

        /** GWPlayerLeave PlayerId. */
        public PlayerId: number;

        /** GWPlayerLeave Reason. */
        public Reason: number;

        /** GWPlayerLeave PlayerData. */
        public PlayerData: Uint8Array;

        /** GWPlayerLeave ReturnCoin. */
        public ReturnCoin: (number | Long);

        /** GWPlayerLeave ServiceFee. */
        public ServiceFee: (number | Long);

        /** GWPlayerLeave GameTimes. */
        public GameTimes: number;

        /** GWPlayerLeave GameCoinTs. */
        public GameCoinTs: (number | Long);

        /** GWPlayerLeave SelVip. */
        public SelVip: number;

        /** GWPlayerLeave BetCoin. */
        public BetCoin: (number | Long);

        /** GWPlayerLeave WinTimes. */
        public WinTimes: number;

        /** GWPlayerLeave LostTimes. */
        public LostTimes: number;

        /** GWPlayerLeave TotalConvertibleFlow. */
        public TotalConvertibleFlow: (number | Long);

        /** GWPlayerLeave ValidCacheBetTotal. */
        public ValidCacheBetTotal: (number | Long);

        /** GWPlayerLeave Items. */
        public Items: { [k: string]: number };

        /** GWPlayerLeave MatchId. */
        public MatchId: number;

        /** GWPlayerLeave CurIsWin. */
        public CurIsWin: (number | Long);

        /**
         * Encodes the specified GWPlayerLeave message. Does not implicitly {@link server.GWPlayerLeave.verify|verify} messages.
         * @param m GWPlayerLeave message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWPlayerLeave, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWPlayerLeave message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWPlayerLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWPlayerLeave;
    }

    /** Properties of a WGPlayerDropLine. */
    interface IWGPlayerDropLine {

        /** WGPlayerDropLine Id */
        Id?: (number | null);

        /** WGPlayerDropLine SceneId */
        SceneId?: (number | null);
    }

    /** Represents a WGPlayerDropLine. */
    class WGPlayerDropLine implements IWGPlayerDropLine {

        /**
         * Constructs a new WGPlayerDropLine.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGPlayerDropLine);

        /** WGPlayerDropLine Id. */
        public Id: number;

        /** WGPlayerDropLine SceneId. */
        public SceneId: number;

        /**
         * Encodes the specified WGPlayerDropLine message. Does not implicitly {@link server.WGPlayerDropLine.verify|verify} messages.
         * @param m WGPlayerDropLine message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGPlayerDropLine, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGPlayerDropLine message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGPlayerDropLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGPlayerDropLine;
    }

    /** Properties of a WGPlayerRehold. */
    interface IWGPlayerRehold {

        /** WGPlayerRehold Id */
        Id?: (number | null);

        /** WGPlayerRehold Sid */
        Sid?: (number | Long | null);

        /** WGPlayerRehold SceneId */
        SceneId?: (number | null);

        /** WGPlayerRehold GateSid */
        GateSid?: (number | Long | null);
    }

    /** Represents a WGPlayerRehold. */
    class WGPlayerRehold implements IWGPlayerRehold {

        /**
         * Constructs a new WGPlayerRehold.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGPlayerRehold);

        /** WGPlayerRehold Id. */
        public Id: number;

        /** WGPlayerRehold Sid. */
        public Sid: (number | Long);

        /** WGPlayerRehold SceneId. */
        public SceneId: number;

        /** WGPlayerRehold GateSid. */
        public GateSid: (number | Long);

        /**
         * Encodes the specified WGPlayerRehold message. Does not implicitly {@link server.WGPlayerRehold.verify|verify} messages.
         * @param m WGPlayerRehold message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGPlayerRehold, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGPlayerRehold message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGPlayerRehold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGPlayerRehold;
    }

    /** Properties of a GWBilledRoomCard. */
    interface IGWBilledRoomCard {

        /** GWBilledRoomCard RoomId */
        RoomId?: (number | null);

        /** GWBilledRoomCard SnId */
        SnId?: (number[] | null);
    }

    /** Represents a GWBilledRoomCard. */
    class GWBilledRoomCard implements IGWBilledRoomCard {

        /**
         * Constructs a new GWBilledRoomCard.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWBilledRoomCard);

        /** GWBilledRoomCard RoomId. */
        public RoomId: number;

        /** GWBilledRoomCard SnId. */
        public SnId: number[];

        /**
         * Encodes the specified GWBilledRoomCard message. Does not implicitly {@link server.GWBilledRoomCard.verify|verify} messages.
         * @param m GWBilledRoomCard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWBilledRoomCard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWBilledRoomCard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWBilledRoomCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWBilledRoomCard;
    }

    /** Properties of a GGPlayerSessionBind. */
    interface IGGPlayerSessionBind {

        /** GGPlayerSessionBind Sid */
        Sid?: (number | Long | null);

        /** GGPlayerSessionBind SnId */
        SnId?: (number | null);

        /** GGPlayerSessionBind Vip */
        Vip?: (number | null);

        /** GGPlayerSessionBind CoinPayTotal */
        CoinPayTotal?: (number | Long | null);

        /** GGPlayerSessionBind Ip */
        Ip?: (string | null);

        /** GGPlayerSessionBind Platform */
        Platform?: (string | null);
    }

    /** Represents a GGPlayerSessionBind. */
    class GGPlayerSessionBind implements IGGPlayerSessionBind {

        /**
         * Constructs a new GGPlayerSessionBind.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGGPlayerSessionBind);

        /** GGPlayerSessionBind Sid. */
        public Sid: (number | Long);

        /** GGPlayerSessionBind SnId. */
        public SnId: number;

        /** GGPlayerSessionBind Vip. */
        public Vip: number;

        /** GGPlayerSessionBind CoinPayTotal. */
        public CoinPayTotal: (number | Long);

        /** GGPlayerSessionBind Ip. */
        public Ip: string;

        /** GGPlayerSessionBind Platform. */
        public Platform: string;

        /**
         * Encodes the specified GGPlayerSessionBind message. Does not implicitly {@link server.GGPlayerSessionBind.verify|verify} messages.
         * @param m GGPlayerSessionBind message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGGPlayerSessionBind, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GGPlayerSessionBind message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GGPlayerSessionBind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GGPlayerSessionBind;
    }

    /** Properties of a GGPlayerSessionUnBind. */
    interface IGGPlayerSessionUnBind {

        /** GGPlayerSessionUnBind Sid */
        Sid?: (number | Long | null);
    }

    /** Represents a GGPlayerSessionUnBind. */
    class GGPlayerSessionUnBind implements IGGPlayerSessionUnBind {

        /**
         * Constructs a new GGPlayerSessionUnBind.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGGPlayerSessionUnBind);

        /** GGPlayerSessionUnBind Sid. */
        public Sid: (number | Long);

        /**
         * Encodes the specified GGPlayerSessionUnBind message. Does not implicitly {@link server.GGPlayerSessionUnBind.verify|verify} messages.
         * @param m GGPlayerSessionUnBind message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGGPlayerSessionUnBind, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GGPlayerSessionUnBind message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GGPlayerSessionUnBind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GGPlayerSessionUnBind;
    }

    /** Properties of a WGDayTimeChange. */
    interface IWGDayTimeChange {

        /** WGDayTimeChange Minute */
        Minute?: (number | null);

        /** WGDayTimeChange Hour */
        Hour?: (number | null);

        /** WGDayTimeChange Day */
        Day?: (number | null);

        /** WGDayTimeChange Week */
        Week?: (number | null);

        /** WGDayTimeChange Month */
        Month?: (number | null);
    }

    /** Represents a WGDayTimeChange. */
    class WGDayTimeChange implements IWGDayTimeChange {

        /**
         * Constructs a new WGDayTimeChange.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGDayTimeChange);

        /** WGDayTimeChange Minute. */
        public Minute: number;

        /** WGDayTimeChange Hour. */
        public Hour: number;

        /** WGDayTimeChange Day. */
        public Day: number;

        /** WGDayTimeChange Week. */
        public Week: number;

        /** WGDayTimeChange Month. */
        public Month: number;

        /**
         * Encodes the specified WGDayTimeChange message. Does not implicitly {@link server.WGDayTimeChange.verify|verify} messages.
         * @param m WGDayTimeChange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGDayTimeChange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGDayTimeChange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGDayTimeChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGDayTimeChange;
    }

    /** Properties of a ReplayPlayerData. */
    interface IReplayPlayerData {

        /** ReplayPlayerData AccId */
        AccId?: (string | null);

        /** ReplayPlayerData Platform */
        Platform?: (string | null);

        /** ReplayPlayerData Pos */
        Pos?: (string | null);

        /** ReplayPlayerData Name */
        Name?: (string | null);

        /** ReplayPlayerData SnId */
        SnId?: (number | null);

        /** ReplayPlayerData Head */
        Head?: (number | null);

        /** ReplayPlayerData Sex */
        Sex?: (number | null);

        /** ReplayPlayerData Coin */
        Coin?: (number | Long | null);
    }

    /** Represents a ReplayPlayerData. */
    class ReplayPlayerData implements IReplayPlayerData {

        /**
         * Constructs a new ReplayPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: server.IReplayPlayerData);

        /** ReplayPlayerData AccId. */
        public AccId: string;

        /** ReplayPlayerData Platform. */
        public Platform: string;

        /** ReplayPlayerData Pos. */
        public Pos: string;

        /** ReplayPlayerData Name. */
        public Name: string;

        /** ReplayPlayerData SnId. */
        public SnId: number;

        /** ReplayPlayerData Head. */
        public Head: number;

        /** ReplayPlayerData Sex. */
        public Sex: number;

        /** ReplayPlayerData Coin. */
        public Coin: (number | Long);

        /**
         * Encodes the specified ReplayPlayerData message. Does not implicitly {@link server.ReplayPlayerData.verify|verify} messages.
         * @param m ReplayPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IReplayPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplayPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReplayPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.ReplayPlayerData;
    }

    /** Properties of a ReplayRecord. */
    interface IReplayRecord {

        /** ReplayRecord TimeStamp */
        TimeStamp?: (number | Long | null);

        /** ReplayRecord Pos */
        Pos?: (number | null);

        /** ReplayRecord PacketId */
        PacketId?: (number | null);

        /** ReplayRecord BinData */
        BinData?: (Uint8Array | null);

        /** ReplayRecord StrData */
        StrData?: (string | null);

        /** ReplayRecord ExcludePos */
        ExcludePos?: (number | null);
    }

    /** Represents a ReplayRecord. */
    class ReplayRecord implements IReplayRecord {

        /**
         * Constructs a new ReplayRecord.
         * @param [p] Properties to set
         */
        constructor(p?: server.IReplayRecord);

        /** ReplayRecord TimeStamp. */
        public TimeStamp: (number | Long);

        /** ReplayRecord Pos. */
        public Pos: number;

        /** ReplayRecord PacketId. */
        public PacketId: number;

        /** ReplayRecord BinData. */
        public BinData: Uint8Array;

        /** ReplayRecord StrData. */
        public StrData: string;

        /** ReplayRecord ExcludePos. */
        public ExcludePos: number;

        /**
         * Encodes the specified ReplayRecord message. Does not implicitly {@link server.ReplayRecord.verify|verify} messages.
         * @param m ReplayRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IReplayRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplayRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReplayRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.ReplayRecord;
    }

    /** Properties of a ReplaySequene. */
    interface IReplaySequene {

        /** ReplaySequene Sequenes */
        Sequenes?: (server.IReplayRecord[] | null);
    }

    /** Represents a ReplaySequene. */
    class ReplaySequene implements IReplaySequene {

        /**
         * Constructs a new ReplaySequene.
         * @param [p] Properties to set
         */
        constructor(p?: server.IReplaySequene);

        /** ReplaySequene Sequenes. */
        public Sequenes: server.IReplayRecord[];

        /**
         * Encodes the specified ReplaySequene message. Does not implicitly {@link server.ReplaySequene.verify|verify} messages.
         * @param m ReplaySequene message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IReplaySequene, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReplaySequene message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ReplaySequene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.ReplaySequene;
    }

    /** Properties of a GRReplaySequene. */
    interface IGRReplaySequene {

        /** GRReplaySequene Name */
        Name?: (string | null);

        /** GRReplaySequene Rec */
        Rec?: (server.IReplaySequene | null);

        /** GRReplaySequene Platform */
        Platform?: (string | null);

        /** GRReplaySequene Channel */
        Channel?: (string | null);

        /** GRReplaySequene Promoter */
        Promoter?: (string | null);

        /** GRReplaySequene ClubId */
        ClubId?: (number | null);

        /** GRReplaySequene ClubRoom */
        ClubRoom?: (string | null);

        /** GRReplaySequene GameFreeid */
        GameFreeid?: (number | null);

        /** GRReplaySequene RoomId */
        RoomId?: (number | null);

        /** GRReplaySequene GameId */
        GameId?: (number | null);

        /** GRReplaySequene RoomMode */
        RoomMode?: (number | null);

        /** GRReplaySequene NumOfGames */
        NumOfGames?: (number | null);

        /** GRReplaySequene BankerPos */
        BankerPos?: (number | null);

        /** GRReplaySequene SceneType */
        SceneType?: (number | null);

        /** GRReplaySequene LogId */
        LogId?: (string | null);

        /** GRReplaySequene Datas */
        Datas?: (server.IReplayPlayerData[] | null);

        /** GRReplaySequene DatasVer */
        DatasVer?: (number | null);
    }

    /** Represents a GRReplaySequene. */
    class GRReplaySequene implements IGRReplaySequene {

        /**
         * Constructs a new GRReplaySequene.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGRReplaySequene);

        /** GRReplaySequene Name. */
        public Name: string;

        /** GRReplaySequene Rec. */
        public Rec?: (server.IReplaySequene | null);

        /** GRReplaySequene Platform. */
        public Platform: string;

        /** GRReplaySequene Channel. */
        public Channel: string;

        /** GRReplaySequene Promoter. */
        public Promoter: string;

        /** GRReplaySequene ClubId. */
        public ClubId: number;

        /** GRReplaySequene ClubRoom. */
        public ClubRoom: string;

        /** GRReplaySequene GameFreeid. */
        public GameFreeid: number;

        /** GRReplaySequene RoomId. */
        public RoomId: number;

        /** GRReplaySequene GameId. */
        public GameId: number;

        /** GRReplaySequene RoomMode. */
        public RoomMode: number;

        /** GRReplaySequene NumOfGames. */
        public NumOfGames: number;

        /** GRReplaySequene BankerPos. */
        public BankerPos: number;

        /** GRReplaySequene SceneType. */
        public SceneType: number;

        /** GRReplaySequene LogId. */
        public LogId: string;

        /** GRReplaySequene Datas. */
        public Datas: server.IReplayPlayerData[];

        /** GRReplaySequene DatasVer. */
        public DatasVer: number;

        /**
         * Encodes the specified GRReplaySequene message. Does not implicitly {@link server.GRReplaySequene.verify|verify} messages.
         * @param m GRReplaySequene message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGRReplaySequene, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GRReplaySequene message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GRReplaySequene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GRReplaySequene;
    }

    /** Properties of a WRLoginRec. */
    interface IWRLoginRec {

        /** WRLoginRec SnId */
        SnId?: (number | null);

        /** WRLoginRec RecType */
        RecType?: (number | null);

        /** WRLoginRec RecTime */
        RecTime?: (number | Long | null);

        /** WRLoginRec IsBind */
        IsBind?: (boolean | null);

        /** WRLoginRec City */
        City?: (string | null);

        /** WRLoginRec Platform */
        Platform?: (string | null);

        /** WRLoginRec LogId */
        LogId?: (string | null);
    }

    /** Represents a WRLoginRec. */
    class WRLoginRec implements IWRLoginRec {

        /**
         * Constructs a new WRLoginRec.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWRLoginRec);

        /** WRLoginRec SnId. */
        public SnId: number;

        /** WRLoginRec RecType. */
        public RecType: number;

        /** WRLoginRec RecTime. */
        public RecTime: (number | Long);

        /** WRLoginRec IsBind. */
        public IsBind: boolean;

        /** WRLoginRec City. */
        public City: string;

        /** WRLoginRec Platform. */
        public Platform: string;

        /** WRLoginRec LogId. */
        public LogId: string;

        /**
         * Encodes the specified WRLoginRec message. Does not implicitly {@link server.WRLoginRec.verify|verify} messages.
         * @param m WRLoginRec message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWRLoginRec, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WRLoginRec message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WRLoginRec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WRLoginRec;
    }

    /** Properties of a WRGameDetail. */
    interface IWRGameDetail {

        /** WRGameDetail GameDetail */
        GameDetail?: (Uint8Array | null);
    }

    /** Represents a WRGameDetail. */
    class WRGameDetail implements IWRGameDetail {

        /**
         * Constructs a new WRGameDetail.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWRGameDetail);

        /** WRGameDetail GameDetail. */
        public GameDetail: Uint8Array;

        /**
         * Encodes the specified WRGameDetail message. Does not implicitly {@link server.WRGameDetail.verify|verify} messages.
         * @param m WRGameDetail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWRGameDetail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WRGameDetail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WRGameDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WRGameDetail;
    }

    /** Properties of a WRPlayerData. */
    interface IWRPlayerData {

        /** WRPlayerData Sid */
        Sid?: (number | Long | null);

        /** WRPlayerData PlayerData */
        PlayerData?: (Uint8Array | null);
    }

    /** Represents a WRPlayerData. */
    class WRPlayerData implements IWRPlayerData {

        /**
         * Constructs a new WRPlayerData.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWRPlayerData);

        /** WRPlayerData Sid. */
        public Sid: (number | Long);

        /** WRPlayerData PlayerData. */
        public PlayerData: Uint8Array;

        /**
         * Encodes the specified WRPlayerData message. Does not implicitly {@link server.WRPlayerData.verify|verify} messages.
         * @param m WRPlayerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWRPlayerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WRPlayerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WRPlayerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WRPlayerData;
    }

    /** Properties of a WTPlayerPay. */
    interface IWTPlayerPay {

        /** WTPlayerPay PlayerData */
        PlayerData?: (Uint8Array | null);

        /** WTPlayerPay AddCoin */
        AddCoin?: (number | Long | null);
    }

    /** Represents a WTPlayerPay. */
    class WTPlayerPay implements IWTPlayerPay {

        /**
         * Constructs a new WTPlayerPay.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWTPlayerPay);

        /** WTPlayerPay PlayerData. */
        public PlayerData: Uint8Array;

        /** WTPlayerPay AddCoin. */
        public AddCoin: (number | Long);

        /**
         * Encodes the specified WTPlayerPay message. Does not implicitly {@link server.WTPlayerPay.verify|verify} messages.
         * @param m WTPlayerPay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWTPlayerPay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WTPlayerPay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WTPlayerPay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WTPlayerPay;
    }

    /** Properties of a PlayerGameRec. */
    interface IPlayerGameRec {

        /** PlayerGameRec Id */
        Id?: (number | null);

        /** PlayerGameRec Name */
        Name?: (string | null);

        /** PlayerGameRec Head */
        Head?: (number | null);

        /** PlayerGameRec Coin */
        Coin?: (number | Long | null);

        /** PlayerGameRec Pos */
        Pos?: (number | null);

        /** PlayerGameRec OtherParams */
        OtherParams?: (number[] | null);
    }

    /** Represents a PlayerGameRec. */
    class PlayerGameRec implements IPlayerGameRec {

        /**
         * Constructs a new PlayerGameRec.
         * @param [p] Properties to set
         */
        constructor(p?: server.IPlayerGameRec);

        /** PlayerGameRec Id. */
        public Id: number;

        /** PlayerGameRec Name. */
        public Name: string;

        /** PlayerGameRec Head. */
        public Head: number;

        /** PlayerGameRec Coin. */
        public Coin: (number | Long);

        /** PlayerGameRec Pos. */
        public Pos: number;

        /** PlayerGameRec OtherParams. */
        public OtherParams: number[];

        /**
         * Encodes the specified PlayerGameRec message. Does not implicitly {@link server.PlayerGameRec.verify|verify} messages.
         * @param m PlayerGameRec message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IPlayerGameRec, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerGameRec message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerGameRec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.PlayerGameRec;
    }

    /** Properties of a GWGameRec. */
    interface IGWGameRec {

        /** GWGameRec RoomId */
        RoomId?: (number | null);

        /** GWGameRec Datas */
        Datas?: (server.IPlayerGameRec[] | null);

        /** GWGameRec NumOfGames */
        NumOfGames?: (number | null);

        /** GWGameRec GameTime */
        GameTime?: (number | null);

        /** GWGameRec ReplayCode */
        ReplayCode?: (string | null);
    }

    /** Represents a GWGameRec. */
    class GWGameRec implements IGWGameRec {

        /**
         * Constructs a new GWGameRec.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWGameRec);

        /** GWGameRec RoomId. */
        public RoomId: number;

        /** GWGameRec Datas. */
        public Datas: server.IPlayerGameRec[];

        /** GWGameRec NumOfGames. */
        public NumOfGames: number;

        /** GWGameRec GameTime. */
        public GameTime: number;

        /** GWGameRec ReplayCode. */
        public ReplayCode: string;

        /**
         * Encodes the specified GWGameRec message. Does not implicitly {@link server.GWGameRec.verify|verify} messages.
         * @param m GWGameRec message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWGameRec, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWGameRec message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWGameRec
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWGameRec;
    }

    /** Properties of a GWSceneStart. */
    interface IGWSceneStart {

        /** GWSceneStart RoomId */
        RoomId?: (number | null);

        /** GWSceneStart CurrRound */
        CurrRound?: (number | null);

        /** GWSceneStart Start */
        Start?: (boolean | null);

        /** GWSceneStart MaxRound */
        MaxRound?: (number | null);
    }

    /** Represents a GWSceneStart. */
    class GWSceneStart implements IGWSceneStart {

        /**
         * Constructs a new GWSceneStart.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWSceneStart);

        /** GWSceneStart RoomId. */
        public RoomId: number;

        /** GWSceneStart CurrRound. */
        public CurrRound: number;

        /** GWSceneStart Start. */
        public Start: boolean;

        /** GWSceneStart MaxRound. */
        public MaxRound: number;

        /**
         * Encodes the specified GWSceneStart message. Does not implicitly {@link server.GWSceneStart.verify|verify} messages.
         * @param m GWSceneStart message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWSceneStart, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWSceneStart message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWSceneStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWSceneStart;
    }

    /** Properties of a PlayerCtx. */
    interface IPlayerCtx {

        /** PlayerCtx SnId */
        SnId?: (number | null);

        /** PlayerCtx Coin */
        Coin?: (number | Long | null);
    }

    /** Represents a PlayerCtx. */
    class PlayerCtx implements IPlayerCtx {

        /**
         * Constructs a new PlayerCtx.
         * @param [p] Properties to set
         */
        constructor(p?: server.IPlayerCtx);

        /** PlayerCtx SnId. */
        public SnId: number;

        /** PlayerCtx Coin. */
        public Coin: (number | Long);

        /**
         * Encodes the specified PlayerCtx message. Does not implicitly {@link server.PlayerCtx.verify|verify} messages.
         * @param m PlayerCtx message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IPlayerCtx, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerCtx message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerCtx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.PlayerCtx;
    }

    /** Properties of a FishRecord. */
    interface IFishRecord {

        /** FishRecord FishId */
        FishId?: (number | null);

        /** FishRecord Count */
        Count?: (number | null);
    }

    /** Represents a FishRecord. */
    class FishRecord implements IFishRecord {

        /**
         * Constructs a new FishRecord.
         * @param [p] Properties to set
         */
        constructor(p?: server.IFishRecord);

        /** FishRecord FishId. */
        public FishId: number;

        /** FishRecord Count. */
        public Count: number;

        /**
         * Encodes the specified FishRecord message. Does not implicitly {@link server.FishRecord.verify|verify} messages.
         * @param m FishRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IFishRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FishRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FishRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.FishRecord;
    }

    /** Properties of a GWFishRecord. */
    interface IGWFishRecord {

        /** GWFishRecord GameFreeId */
        GameFreeId?: (number | null);

        /** GWFishRecord SnId */
        SnId?: (number | null);

        /** GWFishRecord FishRecords */
        FishRecords?: (server.IFishRecord[] | null);
    }

    /** Represents a GWFishRecord. */
    class GWFishRecord implements IGWFishRecord {

        /**
         * Constructs a new GWFishRecord.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWFishRecord);

        /** GWFishRecord GameFreeId. */
        public GameFreeId: number;

        /** GWFishRecord SnId. */
        public SnId: number;

        /** GWFishRecord FishRecords. */
        public FishRecords: server.IFishRecord[];

        /**
         * Encodes the specified GWFishRecord message. Does not implicitly {@link server.GWFishRecord.verify|verify} messages.
         * @param m GWFishRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWFishRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWFishRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWFishRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWFishRecord;
    }

    /** Properties of a GWSceneState. */
    interface IGWSceneState {

        /** GWSceneState RoomId */
        RoomId?: (number | null);

        /** GWSceneState CurrState */
        CurrState?: (number | null);

        /** GWSceneState Fishing */
        Fishing?: (number | null);
    }

    /** Represents a GWSceneState. */
    class GWSceneState implements IGWSceneState {

        /**
         * Constructs a new GWSceneState.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWSceneState);

        /** GWSceneState RoomId. */
        public RoomId: number;

        /** GWSceneState CurrState. */
        public CurrState: number;

        /** GWSceneState Fishing. */
        public Fishing: number;

        /**
         * Encodes the specified GWSceneState message. Does not implicitly {@link server.GWSceneState.verify|verify} messages.
         * @param m GWSceneState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWSceneState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWSceneState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWSceneState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWSceneState;
    }

    /** Properties of a WRInviteRobot. */
    interface IWRInviteRobot {

        /** WRInviteRobot RoomId */
        RoomId?: (number | null);

        /** WRInviteRobot Cnt */
        Cnt?: (number | null);

        /** WRInviteRobot MatchId */
        MatchId?: (number | null);

        /** WRInviteRobot Platform */
        Platform?: (string | null);

        /** WRInviteRobot IsMatch */
        IsMatch?: (boolean | null);

        /** WRInviteRobot NeedAwait */
        NeedAwait?: (boolean | null);
    }

    /** Represents a WRInviteRobot. */
    class WRInviteRobot implements IWRInviteRobot {

        /**
         * Constructs a new WRInviteRobot.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWRInviteRobot);

        /** WRInviteRobot RoomId. */
        public RoomId: number;

        /** WRInviteRobot Cnt. */
        public Cnt: number;

        /** WRInviteRobot MatchId. */
        public MatchId: number;

        /** WRInviteRobot Platform. */
        public Platform: string;

        /** WRInviteRobot IsMatch. */
        public IsMatch: boolean;

        /** WRInviteRobot NeedAwait. */
        public NeedAwait: boolean;

        /**
         * Encodes the specified WRInviteRobot message. Does not implicitly {@link server.WRInviteRobot.verify|verify} messages.
         * @param m WRInviteRobot message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWRInviteRobot, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WRInviteRobot message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WRInviteRobot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WRInviteRobot;
    }

    /** Properties of a WRInviteCreateRoom. */
    interface IWRInviteCreateRoom {

        /** WRInviteCreateRoom Cnt */
        Cnt?: (number | null);

        /** WRInviteCreateRoom MatchId */
        MatchId?: (number | null);
    }

    /** Represents a WRInviteCreateRoom. */
    class WRInviteCreateRoom implements IWRInviteCreateRoom {

        /**
         * Constructs a new WRInviteCreateRoom.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWRInviteCreateRoom);

        /** WRInviteCreateRoom Cnt. */
        public Cnt: number;

        /** WRInviteCreateRoom MatchId. */
        public MatchId: number;

        /**
         * Encodes the specified WRInviteCreateRoom message. Does not implicitly {@link server.WRInviteCreateRoom.verify|verify} messages.
         * @param m WRInviteCreateRoom message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWRInviteCreateRoom, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WRInviteCreateRoom message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WRInviteCreateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WRInviteCreateRoom;
    }

    /** Properties of a WGAgentKickOutPlayer. */
    interface IWGAgentKickOutPlayer {

        /** WGAgentKickOutPlayer RoomId */
        RoomId?: (number | null);

        /** WGAgentKickOutPlayer AgentId */
        AgentId?: (number | null);

        /** WGAgentKickOutPlayer PlayerId */
        PlayerId?: (number | null);

        /** WGAgentKickOutPlayer AgentSid */
        AgentSid?: (number | Long | null);
    }

    /** Represents a WGAgentKickOutPlayer. */
    class WGAgentKickOutPlayer implements IWGAgentKickOutPlayer {

        /**
         * Constructs a new WGAgentKickOutPlayer.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGAgentKickOutPlayer);

        /** WGAgentKickOutPlayer RoomId. */
        public RoomId: number;

        /** WGAgentKickOutPlayer AgentId. */
        public AgentId: number;

        /** WGAgentKickOutPlayer PlayerId. */
        public PlayerId: number;

        /** WGAgentKickOutPlayer AgentSid. */
        public AgentSid: (number | Long);

        /**
         * Encodes the specified WGAgentKickOutPlayer message. Does not implicitly {@link server.WGAgentKickOutPlayer.verify|verify} messages.
         * @param m WGAgentKickOutPlayer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGAgentKickOutPlayer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGAgentKickOutPlayer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGAgentKickOutPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGAgentKickOutPlayer;
    }

    /** Properties of a WDDataAnalysis. */
    interface IWDDataAnalysis {

        /** WDDataAnalysis DataType */
        DataType?: (number | null);

        /** WDDataAnalysis Data */
        Data?: (Uint8Array | null);
    }

    /** Represents a WDDataAnalysis. */
    class WDDataAnalysis implements IWDDataAnalysis {

        /**
         * Constructs a new WDDataAnalysis.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWDDataAnalysis);

        /** WDDataAnalysis DataType. */
        public DataType: number;

        /** WDDataAnalysis Data. */
        public Data: Uint8Array;

        /**
         * Encodes the specified WDDataAnalysis message. Does not implicitly {@link server.WDDataAnalysis.verify|verify} messages.
         * @param m WDDataAnalysis message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWDDataAnalysis, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WDDataAnalysis message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WDDataAnalysis
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WDDataAnalysis;
    }

    /** Properties of a PlayerCard. */
    interface IPlayerCard {

        /** PlayerCard Pos */
        Pos?: (number | null);

        /** PlayerCard Cards */
        Cards?: (number[] | null);
    }

    /** Represents a PlayerCard. */
    class PlayerCard implements IPlayerCard {

        /**
         * Constructs a new PlayerCard.
         * @param [p] Properties to set
         */
        constructor(p?: server.IPlayerCard);

        /** PlayerCard Pos. */
        public Pos: number;

        /** PlayerCard Cards. */
        public Cards: number[];

        /**
         * Encodes the specified PlayerCard message. Does not implicitly {@link server.PlayerCard.verify|verify} messages.
         * @param m PlayerCard message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IPlayerCard, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerCard message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.PlayerCard;
    }

    /** Properties of a GNPlayerCards. */
    interface IGNPlayerCards {

        /** GNPlayerCards SceneId */
        SceneId?: (number | null);

        /** GNPlayerCards PlayerCards */
        PlayerCards?: (server.IPlayerCard[] | null);

        /** GNPlayerCards NowRobotMode */
        NowRobotMode?: (number | null);
    }

    /** Represents a GNPlayerCards. */
    class GNPlayerCards implements IGNPlayerCards {

        /**
         * Constructs a new GNPlayerCards.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGNPlayerCards);

        /** GNPlayerCards SceneId. */
        public SceneId: number;

        /** GNPlayerCards PlayerCards. */
        public PlayerCards: server.IPlayerCard[];

        /** GNPlayerCards NowRobotMode. */
        public NowRobotMode: number;

        /**
         * Encodes the specified GNPlayerCards message. Does not implicitly {@link server.GNPlayerCards.verify|verify} messages.
         * @param m GNPlayerCards message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGNPlayerCards, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GNPlayerCards message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GNPlayerCards
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GNPlayerCards;
    }

    /** Properties of a RobotData. */
    interface IRobotData {

        /** RobotData TotalIn */
        TotalIn?: (number | Long | null);

        /** RobotData TotalOut */
        TotalOut?: (number | Long | null);

        /** RobotData CoinPayTotal */
        CoinPayTotal?: (number | Long | null);

        /** RobotData CoinExchangeTotal */
        CoinExchangeTotal?: (number | Long | null);

        /** RobotData Pos */
        Pos?: (number | null);
    }

    /** Represents a RobotData. */
    class RobotData implements IRobotData {

        /**
         * Constructs a new RobotData.
         * @param [p] Properties to set
         */
        constructor(p?: server.IRobotData);

        /** RobotData TotalIn. */
        public TotalIn: (number | Long);

        /** RobotData TotalOut. */
        public TotalOut: (number | Long);

        /** RobotData CoinPayTotal. */
        public CoinPayTotal: (number | Long);

        /** RobotData CoinExchangeTotal. */
        public CoinExchangeTotal: (number | Long);

        /** RobotData Pos. */
        public Pos: number;

        /**
         * Encodes the specified RobotData message. Does not implicitly {@link server.RobotData.verify|verify} messages.
         * @param m RobotData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IRobotData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RobotData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RobotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.RobotData;
    }

    /** Properties of a GNPlayerParam. */
    interface IGNPlayerParam {

        /** GNPlayerParam SceneId */
        SceneId?: (number | null);

        /** GNPlayerParam Playerdata */
        Playerdata?: (server.IRobotData[] | null);
    }

    /** Represents a GNPlayerParam. */
    class GNPlayerParam implements IGNPlayerParam {

        /**
         * Constructs a new GNPlayerParam.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGNPlayerParam);

        /** GNPlayerParam SceneId. */
        public SceneId: number;

        /** GNPlayerParam Playerdata. */
        public Playerdata: server.IRobotData[];

        /**
         * Encodes the specified GNPlayerParam message. Does not implicitly {@link server.GNPlayerParam.verify|verify} messages.
         * @param m GNPlayerParam message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGNPlayerParam, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GNPlayerParam message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GNPlayerParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GNPlayerParam;
    }

    /** Properties of a GWRebuildScene. */
    interface IGWRebuildScene {

        /** GWRebuildScene SceneIds */
        SceneIds?: (number[] | null);

        /** GWRebuildScene PlayerIds */
        PlayerIds?: (number[] | null);
    }

    /** Represents a GWRebuildScene. */
    class GWRebuildScene implements IGWRebuildScene {

        /**
         * Constructs a new GWRebuildScene.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWRebuildScene);

        /** GWRebuildScene SceneIds. */
        public SceneIds: number[];

        /** GWRebuildScene PlayerIds. */
        public PlayerIds: number[];

        /**
         * Encodes the specified GWRebuildScene message. Does not implicitly {@link server.GWRebuildScene.verify|verify} messages.
         * @param m GWRebuildScene message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWRebuildScene, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWRebuildScene message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWRebuildScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWRebuildScene;
    }

    /** Properties of a WGRebindPlayerSnId. */
    interface IWGRebindPlayerSnId {

        /** WGRebindPlayerSnId OldSnId */
        OldSnId?: (number | null);

        /** WGRebindPlayerSnId NewSnId */
        NewSnId?: (number | null);
    }

    /** Represents a WGRebindPlayerSnId. */
    class WGRebindPlayerSnId implements IWGRebindPlayerSnId {

        /**
         * Constructs a new WGRebindPlayerSnId.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGRebindPlayerSnId);

        /** WGRebindPlayerSnId OldSnId. */
        public OldSnId: number;

        /** WGRebindPlayerSnId NewSnId. */
        public NewSnId: number;

        /**
         * Encodes the specified WGRebindPlayerSnId message. Does not implicitly {@link server.WGRebindPlayerSnId.verify|verify} messages.
         * @param m WGRebindPlayerSnId message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGRebindPlayerSnId, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGRebindPlayerSnId message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGRebindPlayerSnId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGRebindPlayerSnId;
    }

    /** Properties of a GWPlayerFlag. */
    interface IGWPlayerFlag {

        /** GWPlayerFlag SnId */
        SnId?: (number | null);

        /** GWPlayerFlag RoomId */
        RoomId?: (number | null);

        /** GWPlayerFlag Flag */
        Flag?: (number | null);
    }

    /** Represents a GWPlayerFlag. */
    class GWPlayerFlag implements IGWPlayerFlag {

        /**
         * Constructs a new GWPlayerFlag.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWPlayerFlag);

        /** GWPlayerFlag SnId. */
        public SnId: number;

        /** GWPlayerFlag RoomId. */
        public RoomId: number;

        /** GWPlayerFlag Flag. */
        public Flag: number;

        /**
         * Encodes the specified GWPlayerFlag message. Does not implicitly {@link server.GWPlayerFlag.verify|verify} messages.
         * @param m GWPlayerFlag message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWPlayerFlag, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWPlayerFlag message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWPlayerFlag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWPlayerFlag;
    }

    /** Properties of a WGHundredOp. */
    interface IWGHundredOp {

        /** WGHundredOp snid */
        snid?: (number | null);

        /** WGHundredOp OpCode */
        OpCode?: (number | null);

        /** WGHundredOp Params */
        Params?: ((number | Long)[] | null);
    }

    /** Represents a WGHundredOp. */
    class WGHundredOp implements IWGHundredOp {

        /**
         * Constructs a new WGHundredOp.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGHundredOp);

        /** WGHundredOp snid. */
        public snid: number;

        /** WGHundredOp OpCode. */
        public OpCode: number;

        /** WGHundredOp Params. */
        public Params: (number | Long)[];

        /**
         * Encodes the specified WGHundredOp message. Does not implicitly {@link server.WGHundredOp.verify|verify} messages.
         * @param m WGHundredOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGHundredOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGHundredOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGHundredOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGHundredOp;
    }

    /** Properties of a GWNewNotice. */
    interface IGWNewNotice {

        /** GWNewNotice ch */
        ch?: (string | null);

        /** GWNewNotice content */
        content?: (string | null);

        /** GWNewNotice start */
        start?: (number | Long | null);

        /** GWNewNotice interval */
        interval?: (number | Long | null);

        /** GWNewNotice count */
        count?: (number | Long | null);

        /** GWNewNotice msgtype */
        msgtype?: (number | Long | null);

        /** GWNewNotice platform */
        platform?: (string | null);

        /** GWNewNotice priority */
        priority?: (number | null);

        /** GWNewNotice isrob */
        isrob?: (boolean | null);
    }

    /** Represents a GWNewNotice. */
    class GWNewNotice implements IGWNewNotice {

        /**
         * Constructs a new GWNewNotice.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWNewNotice);

        /** GWNewNotice ch. */
        public ch: string;

        /** GWNewNotice content. */
        public content: string;

        /** GWNewNotice start. */
        public start: (number | Long);

        /** GWNewNotice interval. */
        public interval: (number | Long);

        /** GWNewNotice count. */
        public count: (number | Long);

        /** GWNewNotice msgtype. */
        public msgtype: (number | Long);

        /** GWNewNotice platform. */
        public platform: string;

        /** GWNewNotice priority. */
        public priority: number;

        /** GWNewNotice isrob. */
        public isrob: boolean;

        /**
         * Encodes the specified GWNewNotice message. Does not implicitly {@link server.GWNewNotice.verify|verify} messages.
         * @param m GWNewNotice message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWNewNotice, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWNewNotice message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWNewNotice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWNewNotice;
    }

    /** Properties of a PlayerStatics. */
    interface IPlayerStatics {

        /** PlayerStatics SnId */
        SnId?: (number | null);

        /** PlayerStatics GameTimes */
        GameTimes?: (number | Long | null);

        /** PlayerStatics TotalIn */
        TotalIn?: (number | Long | null);

        /** PlayerStatics TotalOut */
        TotalOut?: (number | Long | null);

        /** PlayerStatics IsFoolPlayer */
        IsFoolPlayer?: (boolean | null);

        /** PlayerStatics LoseGameTimes */
        LoseGameTimes?: (number | Long | null);

        /** PlayerStatics WinGameTimes */
        WinGameTimes?: (number | Long | null);

        /** PlayerStatics TotalSysIn */
        TotalSysIn?: (number | Long | null);

        /** PlayerStatics TotalSysOut */
        TotalSysOut?: (number | Long | null);
    }

    /** Represents a PlayerStatics. */
    class PlayerStatics implements IPlayerStatics {

        /**
         * Constructs a new PlayerStatics.
         * @param [p] Properties to set
         */
        constructor(p?: server.IPlayerStatics);

        /** PlayerStatics SnId. */
        public SnId: number;

        /** PlayerStatics GameTimes. */
        public GameTimes: (number | Long);

        /** PlayerStatics TotalIn. */
        public TotalIn: (number | Long);

        /** PlayerStatics TotalOut. */
        public TotalOut: (number | Long);

        /** PlayerStatics IsFoolPlayer. */
        public IsFoolPlayer: boolean;

        /** PlayerStatics LoseGameTimes. */
        public LoseGameTimes: (number | Long);

        /** PlayerStatics WinGameTimes. */
        public WinGameTimes: (number | Long);

        /** PlayerStatics TotalSysIn. */
        public TotalSysIn: (number | Long);

        /** PlayerStatics TotalSysOut. */
        public TotalSysOut: (number | Long);

        /**
         * Encodes the specified PlayerStatics message. Does not implicitly {@link server.PlayerStatics.verify|verify} messages.
         * @param m PlayerStatics message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IPlayerStatics, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerStatics message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerStatics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.PlayerStatics;
    }

    /** Properties of a GWPlayerStatics. */
    interface IGWPlayerStatics {

        /** GWPlayerStatics RoomId */
        RoomId?: (number | null);

        /** GWPlayerStatics Datas */
        Datas?: (server.IPlayerStatics[] | null);

        /** GWPlayerStatics ClubId */
        ClubId?: (number | null);

        /** GWPlayerStatics PumpTotalCoin */
        PumpTotalCoin?: (number | Long | null);
    }

    /** Represents a GWPlayerStatics. */
    class GWPlayerStatics implements IGWPlayerStatics {

        /**
         * Constructs a new GWPlayerStatics.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWPlayerStatics);

        /** GWPlayerStatics RoomId. */
        public RoomId: number;

        /** GWPlayerStatics Datas. */
        public Datas: server.IPlayerStatics[];

        /** GWPlayerStatics ClubId. */
        public ClubId: number;

        /** GWPlayerStatics PumpTotalCoin. */
        public PumpTotalCoin: (number | Long);

        /**
         * Encodes the specified GWPlayerStatics message. Does not implicitly {@link server.GWPlayerStatics.verify|verify} messages.
         * @param m GWPlayerStatics message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWPlayerStatics, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWPlayerStatics message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWPlayerStatics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWPlayerStatics;
    }

    /** Properties of a WGResetCoinPool. */
    interface IWGResetCoinPool {

        /** WGResetCoinPool Platform */
        Platform?: (string | null);

        /** WGResetCoinPool GameFreeId */
        GameFreeId?: (number | null);

        /** WGResetCoinPool ServerId */
        ServerId?: (number | null);

        /** WGResetCoinPool GroupId */
        GroupId?: (number | null);

        /** WGResetCoinPool PoolType */
        PoolType?: (number | null);

        /** WGResetCoinPool Value */
        Value?: (number | null);
    }

    /** Represents a WGResetCoinPool. */
    class WGResetCoinPool implements IWGResetCoinPool {

        /**
         * Constructs a new WGResetCoinPool.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGResetCoinPool);

        /** WGResetCoinPool Platform. */
        public Platform: string;

        /** WGResetCoinPool GameFreeId. */
        public GameFreeId: number;

        /** WGResetCoinPool ServerId. */
        public ServerId: number;

        /** WGResetCoinPool GroupId. */
        public GroupId: number;

        /** WGResetCoinPool PoolType. */
        public PoolType: number;

        /** WGResetCoinPool Value. */
        public Value: number;

        /**
         * Encodes the specified WGResetCoinPool message. Does not implicitly {@link server.WGResetCoinPool.verify|verify} messages.
         * @param m WGResetCoinPool message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGResetCoinPool, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGResetCoinPool message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGResetCoinPool
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGResetCoinPool;
    }

    /** Properties of a WGSetPlayerBlackLevel. */
    interface IWGSetPlayerBlackLevel {

        /** WGSetPlayerBlackLevel SnId */
        SnId?: (number | null);

        /** WGSetPlayerBlackLevel SceneId */
        SceneId?: (number | null);

        /** WGSetPlayerBlackLevel WBLevel */
        WBLevel?: (number | null);

        /** WGSetPlayerBlackLevel WBCoinLimit */
        WBCoinLimit?: (number | Long | null);

        /** WGSetPlayerBlackLevel ResetTotalCoin */
        ResetTotalCoin?: (boolean | null);

        /** WGSetPlayerBlackLevel MaxNum */
        MaxNum?: (number | null);
    }

    /** Represents a WGSetPlayerBlackLevel. */
    class WGSetPlayerBlackLevel implements IWGSetPlayerBlackLevel {

        /**
         * Constructs a new WGSetPlayerBlackLevel.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGSetPlayerBlackLevel);

        /** WGSetPlayerBlackLevel SnId. */
        public SnId: number;

        /** WGSetPlayerBlackLevel SceneId. */
        public SceneId: number;

        /** WGSetPlayerBlackLevel WBLevel. */
        public WBLevel: number;

        /** WGSetPlayerBlackLevel WBCoinLimit. */
        public WBCoinLimit: (number | Long);

        /** WGSetPlayerBlackLevel ResetTotalCoin. */
        public ResetTotalCoin: boolean;

        /** WGSetPlayerBlackLevel MaxNum. */
        public MaxNum: number;

        /**
         * Encodes the specified WGSetPlayerBlackLevel message. Does not implicitly {@link server.WGSetPlayerBlackLevel.verify|verify} messages.
         * @param m WGSetPlayerBlackLevel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGSetPlayerBlackLevel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGSetPlayerBlackLevel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGSetPlayerBlackLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGSetPlayerBlackLevel;
    }

    /** Properties of a GWAutoRelieveWBLevel. */
    interface IGWAutoRelieveWBLevel {

        /** GWAutoRelieveWBLevel SnId */
        SnId?: (number | null);
    }

    /** Represents a GWAutoRelieveWBLevel. */
    class GWAutoRelieveWBLevel implements IGWAutoRelieveWBLevel {

        /**
         * Constructs a new GWAutoRelieveWBLevel.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWAutoRelieveWBLevel);

        /** GWAutoRelieveWBLevel SnId. */
        public SnId: number;

        /**
         * Encodes the specified GWAutoRelieveWBLevel message. Does not implicitly {@link server.GWAutoRelieveWBLevel.verify|verify} messages.
         * @param m GWAutoRelieveWBLevel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWAutoRelieveWBLevel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWAutoRelieveWBLevel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWAutoRelieveWBLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWAutoRelieveWBLevel;
    }

    /** Properties of a GWScenePlayerLog. */
    interface IGWScenePlayerLog {

        /** GWScenePlayerLog GameId */
        GameId?: (number | null);

        /** GWScenePlayerLog GameFreeId */
        GameFreeId?: (number | null);

        /** GWScenePlayerLog Snids */
        Snids?: (number[] | null);

        /** GWScenePlayerLog IsGameing */
        IsGameing?: (boolean[] | null);
    }

    /** Represents a GWScenePlayerLog. */
    class GWScenePlayerLog implements IGWScenePlayerLog {

        /**
         * Constructs a new GWScenePlayerLog.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWScenePlayerLog);

        /** GWScenePlayerLog GameId. */
        public GameId: number;

        /** GWScenePlayerLog GameFreeId. */
        public GameFreeId: number;

        /** GWScenePlayerLog Snids. */
        public Snids: number[];

        /** GWScenePlayerLog IsGameing. */
        public IsGameing: boolean[];

        /**
         * Encodes the specified GWScenePlayerLog message. Does not implicitly {@link server.GWScenePlayerLog.verify|verify} messages.
         * @param m GWScenePlayerLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWScenePlayerLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWScenePlayerLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWScenePlayerLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWScenePlayerLog;
    }

    /** Properties of a GWPlayerForceLeave. */
    interface IGWPlayerForceLeave {

        /** GWPlayerForceLeave RoomId */
        RoomId?: (number | null);

        /** GWPlayerForceLeave PlayerId */
        PlayerId?: (number | null);

        /** GWPlayerForceLeave Reason */
        Reason?: (number | null);

        /** GWPlayerForceLeave EnterTs */
        EnterTs?: (number | Long | null);
    }

    /** Represents a GWPlayerForceLeave. */
    class GWPlayerForceLeave implements IGWPlayerForceLeave {

        /**
         * Constructs a new GWPlayerForceLeave.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWPlayerForceLeave);

        /** GWPlayerForceLeave RoomId. */
        public RoomId: number;

        /** GWPlayerForceLeave PlayerId. */
        public PlayerId: number;

        /** GWPlayerForceLeave Reason. */
        public Reason: number;

        /** GWPlayerForceLeave EnterTs. */
        public EnterTs: (number | Long);

        /**
         * Encodes the specified GWPlayerForceLeave message. Does not implicitly {@link server.GWPlayerForceLeave.verify|verify} messages.
         * @param m GWPlayerForceLeave message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWPlayerForceLeave, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWPlayerForceLeave message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWPlayerForceLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWPlayerForceLeave;
    }

    /** Properties of a PlayerBet. */
    interface IPlayerBet {

        /** PlayerBet SnId */
        SnId?: (number | null);

        /** PlayerBet Bet */
        Bet?: (number | Long | null);

        /** PlayerBet Gain */
        Gain?: (number | Long | null);

        /** PlayerBet Tax */
        Tax?: (number | Long | null);

        /** PlayerBet OtherTax */
        OtherTax?: (number | Long | null);

        /** PlayerBet Coin */
        Coin?: (number | Long | null);

        /** PlayerBet FlowCoin */
        FlowCoin?: (number | Long | null);

        /** PlayerBet Lottery */
        Lottery?: (number | Long | null);

        /** PlayerBet Kind */
        Kind?: (number | null);

        /** PlayerBet Card */
        Card?: (number[] | null);

        /** PlayerBet GameCoinTs */
        GameCoinTs?: (number | Long | null);
    }

    /** Represents a PlayerBet. */
    class PlayerBet implements IPlayerBet {

        /**
         * Constructs a new PlayerBet.
         * @param [p] Properties to set
         */
        constructor(p?: server.IPlayerBet);

        /** PlayerBet SnId. */
        public SnId: number;

        /** PlayerBet Bet. */
        public Bet: (number | Long);

        /** PlayerBet Gain. */
        public Gain: (number | Long);

        /** PlayerBet Tax. */
        public Tax: (number | Long);

        /** PlayerBet OtherTax. */
        public OtherTax: (number | Long);

        /** PlayerBet Coin. */
        public Coin: (number | Long);

        /** PlayerBet FlowCoin. */
        public FlowCoin: (number | Long);

        /** PlayerBet Lottery. */
        public Lottery: (number | Long);

        /** PlayerBet Kind. */
        public Kind: number;

        /** PlayerBet Card. */
        public Card: number[];

        /** PlayerBet GameCoinTs. */
        public GameCoinTs: (number | Long);

        /**
         * Encodes the specified PlayerBet message. Does not implicitly {@link server.PlayerBet.verify|verify} messages.
         * @param m PlayerBet message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IPlayerBet, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerBet message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.PlayerBet;
    }

    /** Properties of a GWPlayerBet. */
    interface IGWPlayerBet {

        /** GWPlayerBet GameFreeId */
        GameFreeId?: (number | null);

        /** GWPlayerBet SceneId */
        SceneId?: (number | null);

        /** GWPlayerBet RecId */
        RecId?: (string | null);

        /** GWPlayerBet RobotGain */
        RobotGain?: (number | Long | null);

        /** GWPlayerBet PlayerBets */
        PlayerBets?: (server.IPlayerBet[] | null);
    }

    /** Represents a GWPlayerBet. */
    class GWPlayerBet implements IGWPlayerBet {

        /**
         * Constructs a new GWPlayerBet.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWPlayerBet);

        /** GWPlayerBet GameFreeId. */
        public GameFreeId: number;

        /** GWPlayerBet SceneId. */
        public SceneId: number;

        /** GWPlayerBet RecId. */
        public RecId: string;

        /** GWPlayerBet RobotGain. */
        public RobotGain: (number | Long);

        /** GWPlayerBet PlayerBets. */
        public PlayerBets: server.IPlayerBet[];

        /**
         * Encodes the specified GWPlayerBet message. Does not implicitly {@link server.GWPlayerBet.verify|verify} messages.
         * @param m GWPlayerBet message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWPlayerBet, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWPlayerBet message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWPlayerBet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWPlayerBet;
    }

    /** Properties of a PlayerWinScore. */
    interface IPlayerWinScore {

        /** PlayerWinScore SnId */
        SnId?: (number | null);

        /** PlayerWinScore WinScore */
        WinScore?: (number | Long | null);

        /** PlayerWinScore Gain */
        Gain?: (number | Long | null);

        /** PlayerWinScore Tax */
        Tax?: (number | Long | null);

        /** PlayerWinScore Lottery */
        Lottery?: (number | Long | null);

        /** PlayerWinScore Kind */
        Kind?: (number | null);

        /** PlayerWinScore Card */
        Card?: (number[] | null);
    }

    /** Represents a PlayerWinScore. */
    class PlayerWinScore implements IPlayerWinScore {

        /**
         * Constructs a new PlayerWinScore.
         * @param [p] Properties to set
         */
        constructor(p?: server.IPlayerWinScore);

        /** PlayerWinScore SnId. */
        public SnId: number;

        /** PlayerWinScore WinScore. */
        public WinScore: (number | Long);

        /** PlayerWinScore Gain. */
        public Gain: (number | Long);

        /** PlayerWinScore Tax. */
        public Tax: (number | Long);

        /** PlayerWinScore Lottery. */
        public Lottery: (number | Long);

        /** PlayerWinScore Kind. */
        public Kind: number;

        /** PlayerWinScore Card. */
        public Card: number[];

        /**
         * Encodes the specified PlayerWinScore message. Does not implicitly {@link server.PlayerWinScore.verify|verify} messages.
         * @param m PlayerWinScore message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IPlayerWinScore, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerWinScore message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerWinScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.PlayerWinScore;
    }

    /** Properties of a GWPlayerWinScore. */
    interface IGWPlayerWinScore {

        /** GWPlayerWinScore GameFreeId */
        GameFreeId?: (number | null);

        /** GWPlayerWinScore PlayerWinScores */
        PlayerWinScores?: (server.IPlayerWinScore[] | null);

        /** GWPlayerWinScore RobotGain */
        RobotGain?: (number | Long | null);

        /** GWPlayerWinScore SceneId */
        SceneId?: (number | null);

        /** GWPlayerWinScore RecId */
        RecId?: (string | null);
    }

    /** Represents a GWPlayerWinScore. */
    class GWPlayerWinScore implements IGWPlayerWinScore {

        /**
         * Constructs a new GWPlayerWinScore.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWPlayerWinScore);

        /** GWPlayerWinScore GameFreeId. */
        public GameFreeId: number;

        /** GWPlayerWinScore PlayerWinScores. */
        public PlayerWinScores: server.IPlayerWinScore[];

        /** GWPlayerWinScore RobotGain. */
        public RobotGain: (number | Long);

        /** GWPlayerWinScore SceneId. */
        public SceneId: number;

        /** GWPlayerWinScore RecId. */
        public RecId: string;

        /**
         * Encodes the specified GWPlayerWinScore message. Does not implicitly {@link server.GWPlayerWinScore.verify|verify} messages.
         * @param m GWPlayerWinScore message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWPlayerWinScore, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWPlayerWinScore message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWPlayerWinScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWPlayerWinScore;
    }

    /** Properties of a WGPayerOnGameCount. */
    interface IWGPayerOnGameCount {

        /** WGPayerOnGameCount DTCount */
        DTCount?: (number[] | null);
    }

    /** Represents a WGPayerOnGameCount. */
    class WGPayerOnGameCount implements IWGPayerOnGameCount {

        /**
         * Constructs a new WGPayerOnGameCount.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGPayerOnGameCount);

        /** WGPayerOnGameCount DTCount. */
        public DTCount: number[];

        /**
         * Encodes the specified WGPayerOnGameCount message. Does not implicitly {@link server.WGPayerOnGameCount.verify|verify} messages.
         * @param m WGPayerOnGameCount message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGPayerOnGameCount, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGPayerOnGameCount message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGPayerOnGameCount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGPayerOnGameCount;
    }

    /** Properties of a GRGameFreeData. */
    interface IGRGameFreeData {

        /** GRGameFreeData RoomId */
        RoomId?: (number | null);

        /** GRGameFreeData DBGameFree */
        DBGameFree?: (server.IDB_GameFree | null);
    }

    /** Represents a GRGameFreeData. */
    class GRGameFreeData implements IGRGameFreeData {

        /**
         * Constructs a new GRGameFreeData.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGRGameFreeData);

        /** GRGameFreeData RoomId. */
        public RoomId: number;

        /** GRGameFreeData DBGameFree. */
        public DBGameFree?: (server.IDB_GameFree | null);

        /**
         * Encodes the specified GRGameFreeData message. Does not implicitly {@link server.GRGameFreeData.verify|verify} messages.
         * @param m GRGameFreeData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGRGameFreeData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GRGameFreeData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GRGameFreeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GRGameFreeData;
    }

    /** Properties of a WGSyncPlayerSafeBoxCoin. */
    interface IWGSyncPlayerSafeBoxCoin {

        /** WGSyncPlayerSafeBoxCoin SnId */
        SnId?: (number | null);

        /** WGSyncPlayerSafeBoxCoin SafeBoxCoin */
        SafeBoxCoin?: (number | Long | null);
    }

    /** Represents a WGSyncPlayerSafeBoxCoin. */
    class WGSyncPlayerSafeBoxCoin implements IWGSyncPlayerSafeBoxCoin {

        /**
         * Constructs a new WGSyncPlayerSafeBoxCoin.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGSyncPlayerSafeBoxCoin);

        /** WGSyncPlayerSafeBoxCoin SnId. */
        public SnId: number;

        /** WGSyncPlayerSafeBoxCoin SafeBoxCoin. */
        public SafeBoxCoin: (number | Long);

        /**
         * Encodes the specified WGSyncPlayerSafeBoxCoin message. Does not implicitly {@link server.WGSyncPlayerSafeBoxCoin.verify|verify} messages.
         * @param m WGSyncPlayerSafeBoxCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGSyncPlayerSafeBoxCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGSyncPlayerSafeBoxCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGSyncPlayerSafeBoxCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGSyncPlayerSafeBoxCoin;
    }

    /** Properties of a WGClubMessage. */
    interface IWGClubMessage {

        /** WGClubMessage ClubId */
        ClubId?: (number | Long | null);

        /** WGClubMessage SceneIds */
        SceneIds?: (number[] | null);

        /** WGClubMessage PumpCoin */
        PumpCoin?: (number | Long | null);

        /** WGClubMessage DBGameFree */
        DBGameFree?: (server.IDB_GameFree | null);
    }

    /** Represents a WGClubMessage. */
    class WGClubMessage implements IWGClubMessage {

        /**
         * Constructs a new WGClubMessage.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGClubMessage);

        /** WGClubMessage ClubId. */
        public ClubId: (number | Long);

        /** WGClubMessage SceneIds. */
        public SceneIds: number[];

        /** WGClubMessage PumpCoin. */
        public PumpCoin: (number | Long);

        /** WGClubMessage DBGameFree. */
        public DBGameFree?: (server.IDB_GameFree | null);

        /**
         * Encodes the specified WGClubMessage message. Does not implicitly {@link server.WGClubMessage.verify|verify} messages.
         * @param m WGClubMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGClubMessage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGClubMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGClubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGClubMessage;
    }

    /** Properties of a DWThirdRebateMessage. */
    interface IDWThirdRebateMessage {

        /** DWThirdRebateMessage Tag */
        Tag?: (number | Long | null);

        /** DWThirdRebateMessage Snid */
        Snid?: (number | null);

        /** DWThirdRebateMessage AvailableBet */
        AvailableBet?: (number | Long | null);

        /** DWThirdRebateMessage Third */
        Third?: (string | null);

        /** DWThirdRebateMessage Plt */
        Plt?: (number | null);
    }

    /** Represents a DWThirdRebateMessage. */
    class DWThirdRebateMessage implements IDWThirdRebateMessage {

        /**
         * Constructs a new DWThirdRebateMessage.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDWThirdRebateMessage);

        /** DWThirdRebateMessage Tag. */
        public Tag: (number | Long);

        /** DWThirdRebateMessage Snid. */
        public Snid: number;

        /** DWThirdRebateMessage AvailableBet. */
        public AvailableBet: (number | Long);

        /** DWThirdRebateMessage Third. */
        public Third: string;

        /** DWThirdRebateMessage Plt. */
        public Plt: number;

        /**
         * Encodes the specified DWThirdRebateMessage message. Does not implicitly {@link server.DWThirdRebateMessage.verify|verify} messages.
         * @param m DWThirdRebateMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDWThirdRebateMessage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DWThirdRebateMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DWThirdRebateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DWThirdRebateMessage;
    }

    /** Properties of a DWThirdRoundMessage. */
    interface IDWThirdRoundMessage {

        /** DWThirdRoundMessage Tag */
        Tag?: (number | Long | null);

        /** DWThirdRoundMessage Snid */
        Snid?: (number | null);

        /** DWThirdRoundMessage Third */
        Third?: (string | null);

        /** DWThirdRoundMessage InThirdGameid */
        InThirdGameid?: (string | null);

        /** DWThirdRoundMessage InThirdGameName */
        InThirdGameName?: (string | null);

        /** DWThirdRoundMessage OneroundMaxwin */
        OneroundMaxwin?: (number | null);

        /** DWThirdRoundMessage AccRoundsInTime */
        AccRoundsInTime?: (number | null);

        /** DWThirdRoundMessage ProfitCoinInTime */
        ProfitCoinInTime?: (number | null);

        /** DWThirdRoundMessage BetCoinInTime */
        BetCoinInTime?: (number | null);

        /** DWThirdRoundMessage FlowCoinInTime */
        FlowCoinInTime?: (number | null);

        /** DWThirdRoundMessage Platform */
        Platform?: (number | null);
    }

    /** Represents a DWThirdRoundMessage. */
    class DWThirdRoundMessage implements IDWThirdRoundMessage {

        /**
         * Constructs a new DWThirdRoundMessage.
         * @param [p] Properties to set
         */
        constructor(p?: server.IDWThirdRoundMessage);

        /** DWThirdRoundMessage Tag. */
        public Tag: (number | Long);

        /** DWThirdRoundMessage Snid. */
        public Snid: number;

        /** DWThirdRoundMessage Third. */
        public Third: string;

        /** DWThirdRoundMessage InThirdGameid. */
        public InThirdGameid: string;

        /** DWThirdRoundMessage InThirdGameName. */
        public InThirdGameName: string;

        /** DWThirdRoundMessage OneroundMaxwin. */
        public OneroundMaxwin: number;

        /** DWThirdRoundMessage AccRoundsInTime. */
        public AccRoundsInTime: number;

        /** DWThirdRoundMessage ProfitCoinInTime. */
        public ProfitCoinInTime: number;

        /** DWThirdRoundMessage BetCoinInTime. */
        public BetCoinInTime: number;

        /** DWThirdRoundMessage FlowCoinInTime. */
        public FlowCoinInTime: number;

        /** DWThirdRoundMessage Platform. */
        public Platform: number;

        /**
         * Encodes the specified DWThirdRoundMessage message. Does not implicitly {@link server.DWThirdRoundMessage.verify|verify} messages.
         * @param m DWThirdRoundMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IDWThirdRoundMessage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DWThirdRoundMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DWThirdRoundMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.DWThirdRoundMessage;
    }

    /** Properties of a WDACKThirdRebateMessage. */
    interface IWDACKThirdRebateMessage {

        /** WDACKThirdRebateMessage Tag */
        Tag?: (number | Long | null);

        /** WDACKThirdRebateMessage Result */
        Result?: (number | null);
    }

    /** Represents a WDACKThirdRebateMessage. */
    class WDACKThirdRebateMessage implements IWDACKThirdRebateMessage {

        /**
         * Constructs a new WDACKThirdRebateMessage.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWDACKThirdRebateMessage);

        /** WDACKThirdRebateMessage Tag. */
        public Tag: (number | Long);

        /** WDACKThirdRebateMessage Result. */
        public Result: number;

        /**
         * Encodes the specified WDACKThirdRebateMessage message. Does not implicitly {@link server.WDACKThirdRebateMessage.verify|verify} messages.
         * @param m WDACKThirdRebateMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWDACKThirdRebateMessage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WDACKThirdRebateMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WDACKThirdRebateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WDACKThirdRebateMessage;
    }

    /** Properties of a GWGameStateLog. */
    interface IGWGameStateLog {

        /** GWGameStateLog SceneId */
        SceneId?: (number | null);

        /** GWGameStateLog GameLog */
        GameLog?: (number | null);

        /** GWGameStateLog LogCnt */
        LogCnt?: (number | null);
    }

    /** Represents a GWGameStateLog. */
    class GWGameStateLog implements IGWGameStateLog {

        /**
         * Constructs a new GWGameStateLog.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWGameStateLog);

        /** GWGameStateLog SceneId. */
        public SceneId: number;

        /** GWGameStateLog GameLog. */
        public GameLog: number;

        /** GWGameStateLog LogCnt. */
        public LogCnt: number;

        /**
         * Encodes the specified GWGameStateLog message. Does not implicitly {@link server.GWGameStateLog.verify|verify} messages.
         * @param m GWGameStateLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWGameStateLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWGameStateLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWGameStateLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWGameStateLog;
    }

    /** Properties of a GWGameState. */
    interface IGWGameState {

        /** GWGameState SceneId */
        SceneId?: (number | null);

        /** GWGameState State */
        State?: (number | null);

        /** GWGameState Ts */
        Ts?: (number | Long | null);

        /** GWGameState Sec */
        Sec?: (number | null);

        /** GWGameState BankerListNum */
        BankerListNum?: (number | null);
    }

    /** Represents a GWGameState. */
    class GWGameState implements IGWGameState {

        /**
         * Constructs a new GWGameState.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWGameState);

        /** GWGameState SceneId. */
        public SceneId: number;

        /** GWGameState State. */
        public State: number;

        /** GWGameState Ts. */
        public Ts: (number | Long);

        /** GWGameState Sec. */
        public Sec: number;

        /** GWGameState BankerListNum. */
        public BankerListNum: number;

        /**
         * Encodes the specified GWGameState message. Does not implicitly {@link server.GWGameState.verify|verify} messages.
         * @param m GWGameState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWGameState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWGameState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWGameState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWGameState;
    }

    /** Properties of a GWGameJackList. */
    interface IGWGameJackList {

        /** GWGameJackList SnId */
        SnId?: (number | null);

        /** GWGameJackList Coin */
        Coin?: (number | Long | null);

        /** GWGameJackList RoomId */
        RoomId?: (number | null);

        /** GWGameJackList JackType */
        JackType?: (number | null);

        /** GWGameJackList GameId */
        GameId?: (number | null);

        /** GWGameJackList Platform */
        Platform?: (string | null);

        /** GWGameJackList Channel */
        Channel?: (string | null);

        /** GWGameJackList Name */
        Name?: (string | null);
    }

    /** Represents a GWGameJackList. */
    class GWGameJackList implements IGWGameJackList {

        /**
         * Constructs a new GWGameJackList.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWGameJackList);

        /** GWGameJackList SnId. */
        public SnId: number;

        /** GWGameJackList Coin. */
        public Coin: (number | Long);

        /** GWGameJackList RoomId. */
        public RoomId: number;

        /** GWGameJackList JackType. */
        public JackType: number;

        /** GWGameJackList GameId. */
        public GameId: number;

        /** GWGameJackList Platform. */
        public Platform: string;

        /** GWGameJackList Channel. */
        public Channel: string;

        /** GWGameJackList Name. */
        public Name: string;

        /**
         * Encodes the specified GWGameJackList message. Does not implicitly {@link server.GWGameJackList.verify|verify} messages.
         * @param m GWGameJackList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWGameJackList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWGameJackList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWGameJackList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWGameJackList;
    }

    /** Properties of a GWGameJackCoin. */
    interface IGWGameJackCoin {

        /** GWGameJackCoin Platform */
        Platform?: (string[] | null);

        /** GWGameJackCoin Coin */
        Coin?: ((number | Long)[] | null);
    }

    /** Represents a GWGameJackCoin. */
    class GWGameJackCoin implements IGWGameJackCoin {

        /**
         * Constructs a new GWGameJackCoin.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWGameJackCoin);

        /** GWGameJackCoin Platform. */
        public Platform: string[];

        /** GWGameJackCoin Coin. */
        public Coin: (number | Long)[];

        /**
         * Encodes the specified GWGameJackCoin message. Does not implicitly {@link server.GWGameJackCoin.verify|verify} messages.
         * @param m GWGameJackCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWGameJackCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWGameJackCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWGameJackCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWGameJackCoin;
    }

    /** Properties of a WGNiceIdRebind. */
    interface IWGNiceIdRebind {

        /** WGNiceIdRebind User */
        User?: (number | null);

        /** WGNiceIdRebind NewId */
        NewId?: (number | null);
    }

    /** Represents a WGNiceIdRebind. */
    class WGNiceIdRebind implements IWGNiceIdRebind {

        /**
         * Constructs a new WGNiceIdRebind.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGNiceIdRebind);

        /** WGNiceIdRebind User. */
        public User: number;

        /** WGNiceIdRebind NewId. */
        public NewId: number;

        /**
         * Encodes the specified WGNiceIdRebind message. Does not implicitly {@link server.WGNiceIdRebind.verify|verify} messages.
         * @param m WGNiceIdRebind message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGNiceIdRebind, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGNiceIdRebind message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGNiceIdRebind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGNiceIdRebind;
    }

    /** Properties of a PLAYERWINCOININFO. */
    interface IPLAYERWINCOININFO {

        /** PLAYERWINCOININFO SnId */
        SnId?: (number | null);

        /** PLAYERWINCOININFO GameFreeID */
        GameFreeID?: (number | null);

        /** PLAYERWINCOININFO WinCoin */
        WinCoin?: (number | null);
    }

    /** Represents a PLAYERWINCOININFO. */
    class PLAYERWINCOININFO implements IPLAYERWINCOININFO {

        /**
         * Constructs a new PLAYERWINCOININFO.
         * @param [p] Properties to set
         */
        constructor(p?: server.IPLAYERWINCOININFO);

        /** PLAYERWINCOININFO SnId. */
        public SnId: number;

        /** PLAYERWINCOININFO GameFreeID. */
        public GameFreeID: number;

        /** PLAYERWINCOININFO WinCoin. */
        public WinCoin: number;

        /**
         * Encodes the specified PLAYERWINCOININFO message. Does not implicitly {@link server.PLAYERWINCOININFO.verify|verify} messages.
         * @param m PLAYERWINCOININFO message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IPLAYERWINCOININFO, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PLAYERWINCOININFO message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PLAYERWINCOININFO
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.PLAYERWINCOININFO;
    }

    /** Properties of a GWPLAYERWINCOIN. */
    interface IGWPLAYERWINCOIN {

        /** GWPLAYERWINCOIN player */
        player?: (server.IPLAYERWINCOININFO[] | null);
    }

    /** Represents a GWPLAYERWINCOIN. */
    class GWPLAYERWINCOIN implements IGWPLAYERWINCOIN {

        /**
         * Constructs a new GWPLAYERWINCOIN.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWPLAYERWINCOIN);

        /** GWPLAYERWINCOIN player. */
        public player: server.IPLAYERWINCOININFO[];

        /**
         * Encodes the specified GWPLAYERWINCOIN message. Does not implicitly {@link server.GWPLAYERWINCOIN.verify|verify} messages.
         * @param m GWPLAYERWINCOIN message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWPLAYERWINCOIN, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWPLAYERWINCOIN message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWPLAYERWINCOIN
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWPLAYERWINCOIN;
    }

    /** Properties of a GWPlayerAutoMarkTag. */
    interface IGWPlayerAutoMarkTag {

        /** GWPlayerAutoMarkTag SnId */
        SnId?: (number | null);

        /** GWPlayerAutoMarkTag Tag */
        Tag?: (number | null);
    }

    /** Represents a GWPlayerAutoMarkTag. */
    class GWPlayerAutoMarkTag implements IGWPlayerAutoMarkTag {

        /**
         * Constructs a new GWPlayerAutoMarkTag.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWPlayerAutoMarkTag);

        /** GWPlayerAutoMarkTag SnId. */
        public SnId: number;

        /** GWPlayerAutoMarkTag Tag. */
        public Tag: number;

        /**
         * Encodes the specified GWPlayerAutoMarkTag message. Does not implicitly {@link server.GWPlayerAutoMarkTag.verify|verify} messages.
         * @param m GWPlayerAutoMarkTag message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWPlayerAutoMarkTag, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWPlayerAutoMarkTag message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWPlayerAutoMarkTag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWPlayerAutoMarkTag;
    }

    /** Properties of a WGInviteRobEnterCoinSceneQueue. */
    interface IWGInviteRobEnterCoinSceneQueue {

        /** WGInviteRobEnterCoinSceneQueue Platform */
        Platform?: (string | null);

        /** WGInviteRobEnterCoinSceneQueue GameFreeId */
        GameFreeId?: (number | null);

        /** WGInviteRobEnterCoinSceneQueue RobNum */
        RobNum?: (number | null);
    }

    /** Represents a WGInviteRobEnterCoinSceneQueue. */
    class WGInviteRobEnterCoinSceneQueue implements IWGInviteRobEnterCoinSceneQueue {

        /**
         * Constructs a new WGInviteRobEnterCoinSceneQueue.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGInviteRobEnterCoinSceneQueue);

        /** WGInviteRobEnterCoinSceneQueue Platform. */
        public Platform: string;

        /** WGInviteRobEnterCoinSceneQueue GameFreeId. */
        public GameFreeId: number;

        /** WGInviteRobEnterCoinSceneQueue RobNum. */
        public RobNum: number;

        /**
         * Encodes the specified WGInviteRobEnterCoinSceneQueue message. Does not implicitly {@link server.WGInviteRobEnterCoinSceneQueue.verify|verify} messages.
         * @param m WGInviteRobEnterCoinSceneQueue message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGInviteRobEnterCoinSceneQueue, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGInviteRobEnterCoinSceneQueue message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGInviteRobEnterCoinSceneQueue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGInviteRobEnterCoinSceneQueue;
    }

    /** Properties of a WGGameForceStart. */
    interface IWGGameForceStart {

        /** WGGameForceStart SceneId */
        SceneId?: (number | null);
    }

    /** Represents a WGGameForceStart. */
    class WGGameForceStart implements IWGGameForceStart {

        /**
         * Constructs a new WGGameForceStart.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGGameForceStart);

        /** WGGameForceStart SceneId. */
        public SceneId: number;

        /**
         * Encodes the specified WGGameForceStart message. Does not implicitly {@link server.WGGameForceStart.verify|verify} messages.
         * @param m WGGameForceStart message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGGameForceStart, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGGameForceStart message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGGameForceStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGGameForceStart;
    }

    /** Properties of a ProfitControlGameCfg. */
    interface IProfitControlGameCfg {

        /** ProfitControlGameCfg GameFreeId */
        GameFreeId?: (number | null);

        /** ProfitControlGameCfg AutoCorrectRate */
        AutoCorrectRate?: (number | null);

        /** ProfitControlGameCfg ManualCorrectRate */
        ManualCorrectRate?: (number | null);

        /** ProfitControlGameCfg UseManual */
        UseManual?: (boolean | null);

        /** ProfitControlGameCfg DownPool */
        DownPool?: (boolean | null);
    }

    /** Represents a ProfitControlGameCfg. */
    class ProfitControlGameCfg implements IProfitControlGameCfg {

        /**
         * Constructs a new ProfitControlGameCfg.
         * @param [p] Properties to set
         */
        constructor(p?: server.IProfitControlGameCfg);

        /** ProfitControlGameCfg GameFreeId. */
        public GameFreeId: number;

        /** ProfitControlGameCfg AutoCorrectRate. */
        public AutoCorrectRate: number;

        /** ProfitControlGameCfg ManualCorrectRate. */
        public ManualCorrectRate: number;

        /** ProfitControlGameCfg UseManual. */
        public UseManual: boolean;

        /** ProfitControlGameCfg DownPool. */
        public DownPool: boolean;

        /**
         * Encodes the specified ProfitControlGameCfg message. Does not implicitly {@link server.ProfitControlGameCfg.verify|verify} messages.
         * @param m ProfitControlGameCfg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IProfitControlGameCfg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfitControlGameCfg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ProfitControlGameCfg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.ProfitControlGameCfg;
    }

    /** Properties of a ProfitControlPlatformCfg. */
    interface IProfitControlPlatformCfg {

        /** ProfitControlPlatformCfg Platform */
        Platform?: (string | null);

        /** ProfitControlPlatformCfg GameCfg */
        GameCfg?: (server.IProfitControlGameCfg[] | null);
    }

    /** Represents a ProfitControlPlatformCfg. */
    class ProfitControlPlatformCfg implements IProfitControlPlatformCfg {

        /**
         * Constructs a new ProfitControlPlatformCfg.
         * @param [p] Properties to set
         */
        constructor(p?: server.IProfitControlPlatformCfg);

        /** ProfitControlPlatformCfg Platform. */
        public Platform: string;

        /** ProfitControlPlatformCfg GameCfg. */
        public GameCfg: server.IProfitControlGameCfg[];

        /**
         * Encodes the specified ProfitControlPlatformCfg message. Does not implicitly {@link server.ProfitControlPlatformCfg.verify|verify} messages.
         * @param m ProfitControlPlatformCfg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IProfitControlPlatformCfg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProfitControlPlatformCfg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ProfitControlPlatformCfg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.ProfitControlPlatformCfg;
    }

    /** Properties of a WGProfitControlCorrect. */
    interface IWGProfitControlCorrect {

        /** WGProfitControlCorrect Cfg */
        Cfg?: (server.IProfitControlPlatformCfg[] | null);
    }

    /** Represents a WGProfitControlCorrect. */
    class WGProfitControlCorrect implements IWGProfitControlCorrect {

        /**
         * Constructs a new WGProfitControlCorrect.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGProfitControlCorrect);

        /** WGProfitControlCorrect Cfg. */
        public Cfg: server.IProfitControlPlatformCfg[];

        /**
         * Encodes the specified WGProfitControlCorrect message. Does not implicitly {@link server.WGProfitControlCorrect.verify|verify} messages.
         * @param m WGProfitControlCorrect message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGProfitControlCorrect, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGProfitControlCorrect message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGProfitControlCorrect
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGProfitControlCorrect;
    }

    /** Properties of a GWChangeSceneEvent. */
    interface IGWChangeSceneEvent {

        /** GWChangeSceneEvent SceneId */
        SceneId?: (number | null);
    }

    /** Represents a GWChangeSceneEvent. */
    class GWChangeSceneEvent implements IGWChangeSceneEvent {

        /**
         * Constructs a new GWChangeSceneEvent.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWChangeSceneEvent);

        /** GWChangeSceneEvent SceneId. */
        public SceneId: number;

        /**
         * Encodes the specified GWChangeSceneEvent message. Does not implicitly {@link server.GWChangeSceneEvent.verify|verify} messages.
         * @param m GWChangeSceneEvent message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWChangeSceneEvent, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWChangeSceneEvent message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWChangeSceneEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWChangeSceneEvent;
    }

    /** Properties of a PlayerIParam. */
    interface IPlayerIParam {

        /** PlayerIParam ParamId */
        ParamId?: (number | null);

        /** PlayerIParam IntVal */
        IntVal?: (number | Long | null);
    }

    /** Represents a PlayerIParam. */
    class PlayerIParam implements IPlayerIParam {

        /**
         * Constructs a new PlayerIParam.
         * @param [p] Properties to set
         */
        constructor(p?: server.IPlayerIParam);

        /** PlayerIParam ParamId. */
        public ParamId: number;

        /** PlayerIParam IntVal. */
        public IntVal: (number | Long);

        /**
         * Encodes the specified PlayerIParam message. Does not implicitly {@link server.PlayerIParam.verify|verify} messages.
         * @param m PlayerIParam message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IPlayerIParam, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerIParam message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerIParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.PlayerIParam;
    }

    /** Properties of a PlayerSParam. */
    interface IPlayerSParam {

        /** PlayerSParam ParamId */
        ParamId?: (number | null);

        /** PlayerSParam StrVal */
        StrVal?: (string | null);
    }

    /** Represents a PlayerSParam. */
    class PlayerSParam implements IPlayerSParam {

        /**
         * Constructs a new PlayerSParam.
         * @param [p] Properties to set
         */
        constructor(p?: server.IPlayerSParam);

        /** PlayerSParam ParamId. */
        public ParamId: number;

        /** PlayerSParam StrVal. */
        public StrVal: string;

        /**
         * Encodes the specified PlayerSParam message. Does not implicitly {@link server.PlayerSParam.verify|verify} messages.
         * @param m PlayerSParam message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IPlayerSParam, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerSParam message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerSParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.PlayerSParam;
    }

    /** Properties of a PlayerCParam. */
    interface IPlayerCParam {

        /** PlayerCParam StrKey */
        StrKey?: (string | null);

        /** PlayerCParam StrVal */
        StrVal?: (string | null);
    }

    /** Represents a PlayerCParam. */
    class PlayerCParam implements IPlayerCParam {

        /**
         * Constructs a new PlayerCParam.
         * @param [p] Properties to set
         */
        constructor(p?: server.IPlayerCParam);

        /** PlayerCParam StrKey. */
        public StrKey: string;

        /** PlayerCParam StrVal. */
        public StrVal: string;

        /**
         * Encodes the specified PlayerCParam message. Does not implicitly {@link server.PlayerCParam.verify|verify} messages.
         * @param m PlayerCParam message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IPlayerCParam, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerCParam message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerCParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.PlayerCParam;
    }

    /** Properties of a PlayerMatchCoin. */
    interface IPlayerMatchCoin {

        /** PlayerMatchCoin SnId */
        SnId?: (number | null);

        /** PlayerMatchCoin Coin */
        Coin?: (number | null);
    }

    /** Represents a PlayerMatchCoin. */
    class PlayerMatchCoin implements IPlayerMatchCoin {

        /**
         * Constructs a new PlayerMatchCoin.
         * @param [p] Properties to set
         */
        constructor(p?: server.IPlayerMatchCoin);

        /** PlayerMatchCoin SnId. */
        public SnId: number;

        /** PlayerMatchCoin Coin. */
        public Coin: number;

        /**
         * Encodes the specified PlayerMatchCoin message. Does not implicitly {@link server.PlayerMatchCoin.verify|verify} messages.
         * @param m PlayerMatchCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IPlayerMatchCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerMatchCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerMatchCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.PlayerMatchCoin;
    }

    /** Properties of a GWPlayerMatchBilled. */
    interface IGWPlayerMatchBilled {

        /** GWPlayerMatchBilled SceneId */
        SceneId?: (number | null);

        /** GWPlayerMatchBilled MatchId */
        MatchId?: (number | null);

        /** GWPlayerMatchBilled Players */
        Players?: (server.IPlayerMatchCoin[] | null);

        /** GWPlayerMatchBilled WinPos */
        WinPos?: (number | null);
    }

    /** Represents a GWPlayerMatchBilled. */
    class GWPlayerMatchBilled implements IGWPlayerMatchBilled {

        /**
         * Constructs a new GWPlayerMatchBilled.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWPlayerMatchBilled);

        /** GWPlayerMatchBilled SceneId. */
        public SceneId: number;

        /** GWPlayerMatchBilled MatchId. */
        public MatchId: number;

        /** GWPlayerMatchBilled Players. */
        public Players: server.IPlayerMatchCoin[];

        /** GWPlayerMatchBilled WinPos. */
        public WinPos: number;

        /**
         * Encodes the specified GWPlayerMatchBilled message. Does not implicitly {@link server.GWPlayerMatchBilled.verify|verify} messages.
         * @param m GWPlayerMatchBilled message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWPlayerMatchBilled, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWPlayerMatchBilled message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWPlayerMatchBilled
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWPlayerMatchBilled;
    }

    /** Properties of a GWPlayerMatchGrade. */
    interface IGWPlayerMatchGrade {

        /** GWPlayerMatchGrade SceneId */
        SceneId?: (number | null);

        /** GWPlayerMatchGrade MatchId */
        MatchId?: (number | null);

        /** GWPlayerMatchGrade NumOfGame */
        NumOfGame?: (number | null);

        /** GWPlayerMatchGrade SpendTime */
        SpendTime?: (number | null);

        /** GWPlayerMatchGrade GameLogId */
        GameLogId?: (string | null);

        /** GWPlayerMatchGrade Players */
        Players?: (server.IPlayerMatchCoin[] | null);
    }

    /** Represents a GWPlayerMatchGrade. */
    class GWPlayerMatchGrade implements IGWPlayerMatchGrade {

        /**
         * Constructs a new GWPlayerMatchGrade.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWPlayerMatchGrade);

        /** GWPlayerMatchGrade SceneId. */
        public SceneId: number;

        /** GWPlayerMatchGrade MatchId. */
        public MatchId: number;

        /** GWPlayerMatchGrade NumOfGame. */
        public NumOfGame: number;

        /** GWPlayerMatchGrade SpendTime. */
        public SpendTime: number;

        /** GWPlayerMatchGrade GameLogId. */
        public GameLogId: string;

        /** GWPlayerMatchGrade Players. */
        public Players: server.IPlayerMatchCoin[];

        /**
         * Encodes the specified GWPlayerMatchGrade message. Does not implicitly {@link server.GWPlayerMatchGrade.verify|verify} messages.
         * @param m GWPlayerMatchGrade message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWPlayerMatchGrade, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWPlayerMatchGrade message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWPlayerMatchGrade
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWPlayerMatchGrade;
    }

    /** Properties of a WGPlayerQuitMatch. */
    interface IWGPlayerQuitMatch {

        /** WGPlayerQuitMatch SnId */
        SnId?: (number | null);

        /** WGPlayerQuitMatch SceneId */
        SceneId?: (number | null);

        /** WGPlayerQuitMatch MatchId */
        MatchId?: (number | null);
    }

    /** Represents a WGPlayerQuitMatch. */
    class WGPlayerQuitMatch implements IWGPlayerQuitMatch {

        /**
         * Constructs a new WGPlayerQuitMatch.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGPlayerQuitMatch);

        /** WGPlayerQuitMatch SnId. */
        public SnId: number;

        /** WGPlayerQuitMatch SceneId. */
        public SceneId: number;

        /** WGPlayerQuitMatch MatchId. */
        public MatchId: number;

        /**
         * Encodes the specified WGPlayerQuitMatch message. Does not implicitly {@link server.WGPlayerQuitMatch.verify|verify} messages.
         * @param m WGPlayerQuitMatch message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGPlayerQuitMatch, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGPlayerQuitMatch message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGPlayerQuitMatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGPlayerQuitMatch;
    }

    /** Properties of a WGSceneMatchBaseChange. */
    interface IWGSceneMatchBaseChange {

        /** WGSceneMatchBaseChange SceneIds */
        SceneIds?: (number[] | null);

        /** WGSceneMatchBaseChange BaseScore */
        BaseScore?: (number | null);

        /** WGSceneMatchBaseChange OutScore */
        OutScore?: (number | null);

        /** WGSceneMatchBaseChange RestNum */
        RestNum?: (number | null);

        /** WGSceneMatchBaseChange NextTs */
        NextTs?: (number | null);
    }

    /** Represents a WGSceneMatchBaseChange. */
    class WGSceneMatchBaseChange implements IWGSceneMatchBaseChange {

        /**
         * Constructs a new WGSceneMatchBaseChange.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGSceneMatchBaseChange);

        /** WGSceneMatchBaseChange SceneIds. */
        public SceneIds: number[];

        /** WGSceneMatchBaseChange BaseScore. */
        public BaseScore: number;

        /** WGSceneMatchBaseChange OutScore. */
        public OutScore: number;

        /** WGSceneMatchBaseChange RestNum. */
        public RestNum: number;

        /** WGSceneMatchBaseChange NextTs. */
        public NextTs: number;

        /**
         * Encodes the specified WGSceneMatchBaseChange message. Does not implicitly {@link server.WGSceneMatchBaseChange.verify|verify} messages.
         * @param m WGSceneMatchBaseChange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGSceneMatchBaseChange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGSceneMatchBaseChange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGSceneMatchBaseChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGSceneMatchBaseChange;
    }

    /** Properties of a SSRedirectToPlayer. */
    interface ISSRedirectToPlayer {

        /** SSRedirectToPlayer SnId */
        SnId?: (number | null);

        /** SSRedirectToPlayer SceneId */
        SceneId?: (number | null);

        /** SSRedirectToPlayer PacketId */
        PacketId?: (number | null);

        /** SSRedirectToPlayer Data */
        Data?: (Uint8Array | null);
    }

    /** Represents a SSRedirectToPlayer. */
    class SSRedirectToPlayer implements ISSRedirectToPlayer {

        /**
         * Constructs a new SSRedirectToPlayer.
         * @param [p] Properties to set
         */
        constructor(p?: server.ISSRedirectToPlayer);

        /** SSRedirectToPlayer SnId. */
        public SnId: number;

        /** SSRedirectToPlayer SceneId. */
        public SceneId: number;

        /** SSRedirectToPlayer PacketId. */
        public PacketId: number;

        /** SSRedirectToPlayer Data. */
        public Data: Uint8Array;

        /**
         * Encodes the specified SSRedirectToPlayer message. Does not implicitly {@link server.SSRedirectToPlayer.verify|verify} messages.
         * @param m SSRedirectToPlayer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.ISSRedirectToPlayer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SSRedirectToPlayer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SSRedirectToPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.SSRedirectToPlayer;
    }

    /** Properties of a WGInviteMatchRob. */
    interface IWGInviteMatchRob {

        /** WGInviteMatchRob Platform */
        Platform?: (string | null);

        /** WGInviteMatchRob MatchId */
        MatchId?: (number | null);

        /** WGInviteMatchRob RobNum */
        RobNum?: (number | null);

        /** WGInviteMatchRob NeedAwait */
        NeedAwait?: (boolean | null);
    }

    /** Represents a WGInviteMatchRob. */
    class WGInviteMatchRob implements IWGInviteMatchRob {

        /**
         * Constructs a new WGInviteMatchRob.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGInviteMatchRob);

        /** WGInviteMatchRob Platform. */
        public Platform: string;

        /** WGInviteMatchRob MatchId. */
        public MatchId: number;

        /** WGInviteMatchRob RobNum. */
        public RobNum: number;

        /** WGInviteMatchRob NeedAwait. */
        public NeedAwait: boolean;

        /**
         * Encodes the specified WGInviteMatchRob message. Does not implicitly {@link server.WGInviteMatchRob.verify|verify} messages.
         * @param m WGInviteMatchRob message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGInviteMatchRob, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGInviteMatchRob message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGInviteMatchRob
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGInviteMatchRob;
    }

    /** Properties of a GameInfo. */
    interface IGameInfo {

        /** GameInfo GameId */
        GameId?: (number | null);

        /** GameInfo GameFreeId */
        GameFreeId?: (number | null);

        /** GameInfo GameType */
        GameType?: (number | null);
    }

    /** Represents a GameInfo. */
    class GameInfo implements IGameInfo {

        /**
         * Constructs a new GameInfo.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGameInfo);

        /** GameInfo GameId. */
        public GameId: number;

        /** GameInfo GameFreeId. */
        public GameFreeId: number;

        /** GameInfo GameType. */
        public GameType: number;

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link server.GameInfo.verify|verify} messages.
         * @param m GameInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGameInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GameInfo;
    }

    /** Properties of a WGGameJackpot. */
    interface IWGGameJackpot {

        /** WGGameJackpot Sid */
        Sid?: (number | Long | null);

        /** WGGameJackpot GateSid */
        GateSid?: (number | Long | null);

        /** WGGameJackpot Platform */
        Platform?: (string | null);

        /** WGGameJackpot Info */
        Info?: (server.IGameInfo[] | null);
    }

    /** Represents a WGGameJackpot. */
    class WGGameJackpot implements IWGGameJackpot {

        /**
         * Constructs a new WGGameJackpot.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGGameJackpot);

        /** WGGameJackpot Sid. */
        public Sid: (number | Long);

        /** WGGameJackpot GateSid. */
        public GateSid: (number | Long);

        /** WGGameJackpot Platform. */
        public Platform: string;

        /** WGGameJackpot Info. */
        public Info: server.IGameInfo[];

        /**
         * Encodes the specified WGGameJackpot message. Does not implicitly {@link server.WGGameJackpot.verify|verify} messages.
         * @param m WGGameJackpot message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGGameJackpot, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGGameJackpot message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGGameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGGameJackpot;
    }

    /** Properties of a BigWinHistoryInfo. */
    interface IBigWinHistoryInfo {

        /** BigWinHistoryInfo SpinID */
        SpinID?: (string | null);

        /** BigWinHistoryInfo CreatedTime */
        CreatedTime?: (number | Long | null);

        /** BigWinHistoryInfo BaseBet */
        BaseBet?: (number | Long | null);

        /** BigWinHistoryInfo PriceValue */
        PriceValue?: (number | Long | null);

        /** BigWinHistoryInfo UserName */
        UserName?: (string | null);

        /** BigWinHistoryInfo IsVirtualData */
        IsVirtualData?: (boolean | null);

        /** BigWinHistoryInfo TotalBet */
        TotalBet?: (number | Long | null);

        /** BigWinHistoryInfo Cards */
        Cards?: (number[] | null);
    }

    /** Represents a BigWinHistoryInfo. */
    class BigWinHistoryInfo implements IBigWinHistoryInfo {

        /**
         * Constructs a new BigWinHistoryInfo.
         * @param [p] Properties to set
         */
        constructor(p?: server.IBigWinHistoryInfo);

        /** BigWinHistoryInfo SpinID. */
        public SpinID: string;

        /** BigWinHistoryInfo CreatedTime. */
        public CreatedTime: (number | Long);

        /** BigWinHistoryInfo BaseBet. */
        public BaseBet: (number | Long);

        /** BigWinHistoryInfo PriceValue. */
        public PriceValue: (number | Long);

        /** BigWinHistoryInfo UserName. */
        public UserName: string;

        /** BigWinHistoryInfo IsVirtualData. */
        public IsVirtualData: boolean;

        /** BigWinHistoryInfo TotalBet. */
        public TotalBet: (number | Long);

        /** BigWinHistoryInfo Cards. */
        public Cards: number[];

        /**
         * Encodes the specified BigWinHistoryInfo message. Does not implicitly {@link server.BigWinHistoryInfo.verify|verify} messages.
         * @param m BigWinHistoryInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IBigWinHistoryInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BigWinHistoryInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BigWinHistoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.BigWinHistoryInfo;
    }

    /** Properties of a GWGameNewBigWinHistory. */
    interface IGWGameNewBigWinHistory {

        /** GWGameNewBigWinHistory SceneId */
        SceneId?: (number | null);

        /** GWGameNewBigWinHistory BigWinHistory */
        BigWinHistory?: (server.IBigWinHistoryInfo | null);
    }

    /** Represents a GWGameNewBigWinHistory. */
    class GWGameNewBigWinHistory implements IGWGameNewBigWinHistory {

        /**
         * Constructs a new GWGameNewBigWinHistory.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWGameNewBigWinHistory);

        /** GWGameNewBigWinHistory SceneId. */
        public SceneId: number;

        /** GWGameNewBigWinHistory BigWinHistory. */
        public BigWinHistory?: (server.IBigWinHistoryInfo | null);

        /**
         * Encodes the specified GWGameNewBigWinHistory message. Does not implicitly {@link server.GWGameNewBigWinHistory.verify|verify} messages.
         * @param m GWGameNewBigWinHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWGameNewBigWinHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWGameNewBigWinHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWGameNewBigWinHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWGameNewBigWinHistory;
    }

    /** Properties of a WGPlayerEnterMiniGame. */
    interface IWGPlayerEnterMiniGame {

        /** WGPlayerEnterMiniGame Sid */
        Sid?: (number | Long | null);

        /** WGPlayerEnterMiniGame GateSid */
        GateSid?: (number | Long | null);

        /** WGPlayerEnterMiniGame SnId */
        SnId?: (number | null);

        /** WGPlayerEnterMiniGame SceneId */
        SceneId?: (number | null);

        /** WGPlayerEnterMiniGame PlayerData */
        PlayerData?: (Uint8Array | null);

        /** WGPlayerEnterMiniGame TakeCoin */
        TakeCoin?: (number | Long | null);

        /** WGPlayerEnterMiniGame IsQM */
        IsQM?: (boolean | null);

        /** WGPlayerEnterMiniGame ExpectLeaveCoin */
        ExpectLeaveCoin?: (number | Long | null);

        /** WGPlayerEnterMiniGame ExpectGameTimes */
        ExpectGameTimes?: (number | null);

        /** WGPlayerEnterMiniGame SingleAdjust */
        SingleAdjust?: (Uint8Array | null);
    }

    /** Represents a WGPlayerEnterMiniGame. */
    class WGPlayerEnterMiniGame implements IWGPlayerEnterMiniGame {

        /**
         * Constructs a new WGPlayerEnterMiniGame.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGPlayerEnterMiniGame);

        /** WGPlayerEnterMiniGame Sid. */
        public Sid: (number | Long);

        /** WGPlayerEnterMiniGame GateSid. */
        public GateSid: (number | Long);

        /** WGPlayerEnterMiniGame SnId. */
        public SnId: number;

        /** WGPlayerEnterMiniGame SceneId. */
        public SceneId: number;

        /** WGPlayerEnterMiniGame PlayerData. */
        public PlayerData: Uint8Array;

        /** WGPlayerEnterMiniGame TakeCoin. */
        public TakeCoin: (number | Long);

        /** WGPlayerEnterMiniGame IsQM. */
        public IsQM: boolean;

        /** WGPlayerEnterMiniGame ExpectLeaveCoin. */
        public ExpectLeaveCoin: (number | Long);

        /** WGPlayerEnterMiniGame ExpectGameTimes. */
        public ExpectGameTimes: number;

        /** WGPlayerEnterMiniGame SingleAdjust. */
        public SingleAdjust: Uint8Array;

        /**
         * Encodes the specified WGPlayerEnterMiniGame message. Does not implicitly {@link server.WGPlayerEnterMiniGame.verify|verify} messages.
         * @param m WGPlayerEnterMiniGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGPlayerEnterMiniGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGPlayerEnterMiniGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGPlayerEnterMiniGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGPlayerEnterMiniGame;
    }

    /** Properties of a WGPlayerLeaveMiniGame. */
    interface IWGPlayerLeaveMiniGame {

        /** WGPlayerLeaveMiniGame Sid */
        Sid?: (number | Long | null);

        /** WGPlayerLeaveMiniGame GateSid */
        GateSid?: (number | Long | null);

        /** WGPlayerLeaveMiniGame SnId */
        SnId?: (number | null);

        /** WGPlayerLeaveMiniGame SceneId */
        SceneId?: (number | null);
    }

    /** Represents a WGPlayerLeaveMiniGame. */
    class WGPlayerLeaveMiniGame implements IWGPlayerLeaveMiniGame {

        /**
         * Constructs a new WGPlayerLeaveMiniGame.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGPlayerLeaveMiniGame);

        /** WGPlayerLeaveMiniGame Sid. */
        public Sid: (number | Long);

        /** WGPlayerLeaveMiniGame GateSid. */
        public GateSid: (number | Long);

        /** WGPlayerLeaveMiniGame SnId. */
        public SnId: number;

        /** WGPlayerLeaveMiniGame SceneId. */
        public SceneId: number;

        /**
         * Encodes the specified WGPlayerLeaveMiniGame message. Does not implicitly {@link server.WGPlayerLeaveMiniGame.verify|verify} messages.
         * @param m WGPlayerLeaveMiniGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGPlayerLeaveMiniGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGPlayerLeaveMiniGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGPlayerLeaveMiniGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGPlayerLeaveMiniGame;
    }

    /** Properties of a WGPlayerLeave. */
    interface IWGPlayerLeave {

        /** WGPlayerLeave SnId */
        SnId?: (number | null);
    }

    /** Represents a WGPlayerLeave. */
    class WGPlayerLeave implements IWGPlayerLeave {

        /**
         * Constructs a new WGPlayerLeave.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGPlayerLeave);

        /** WGPlayerLeave SnId. */
        public SnId: number;

        /**
         * Encodes the specified WGPlayerLeave message. Does not implicitly {@link server.WGPlayerLeave.verify|verify} messages.
         * @param m WGPlayerLeave message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGPlayerLeave, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGPlayerLeave message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGPlayerLeave
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGPlayerLeave;
    }

    /** Properties of a GWPlayerLeaveMiniGame. */
    interface IGWPlayerLeaveMiniGame {

        /** GWPlayerLeaveMiniGame SceneId */
        SceneId?: (number | null);

        /** GWPlayerLeaveMiniGame GameFreeId */
        GameFreeId?: (number | null);

        /** GWPlayerLeaveMiniGame SnId */
        SnId?: (number | null);

        /** GWPlayerLeaveMiniGame Reason */
        Reason?: (number | null);

        /** GWPlayerLeaveMiniGame PlayerData */
        PlayerData?: (Uint8Array | null);
    }

    /** Represents a GWPlayerLeaveMiniGame. */
    class GWPlayerLeaveMiniGame implements IGWPlayerLeaveMiniGame {

        /**
         * Constructs a new GWPlayerLeaveMiniGame.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWPlayerLeaveMiniGame);

        /** GWPlayerLeaveMiniGame SceneId. */
        public SceneId: number;

        /** GWPlayerLeaveMiniGame GameFreeId. */
        public GameFreeId: number;

        /** GWPlayerLeaveMiniGame SnId. */
        public SnId: number;

        /** GWPlayerLeaveMiniGame Reason. */
        public Reason: number;

        /** GWPlayerLeaveMiniGame PlayerData. */
        public PlayerData: Uint8Array;

        /**
         * Encodes the specified GWPlayerLeaveMiniGame message. Does not implicitly {@link server.GWPlayerLeaveMiniGame.verify|verify} messages.
         * @param m GWPlayerLeaveMiniGame message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWPlayerLeaveMiniGame, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWPlayerLeaveMiniGame message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWPlayerLeaveMiniGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWPlayerLeaveMiniGame;
    }

    /** Properties of a GWDestroyMiniScene. */
    interface IGWDestroyMiniScene {

        /** GWDestroyMiniScene SceneId */
        SceneId?: (number | null);
    }

    /** Represents a GWDestroyMiniScene. */
    class GWDestroyMiniScene implements IGWDestroyMiniScene {

        /**
         * Constructs a new GWDestroyMiniScene.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWDestroyMiniScene);

        /** GWDestroyMiniScene SceneId. */
        public SceneId: number;

        /**
         * Encodes the specified GWDestroyMiniScene message. Does not implicitly {@link server.GWDestroyMiniScene.verify|verify} messages.
         * @param m GWDestroyMiniScene message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWDestroyMiniScene, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWDestroyMiniScene message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWDestroyMiniScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWDestroyMiniScene;
    }

    /** Properties of a GRDestroyScene. */
    interface IGRDestroyScene {

        /** GRDestroyScene SceneId */
        SceneId?: (number | null);
    }

    /** Represents a GRDestroyScene. */
    class GRDestroyScene implements IGRDestroyScene {

        /**
         * Constructs a new GRDestroyScene.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGRDestroyScene);

        /** GRDestroyScene SceneId. */
        public SceneId: number;

        /**
         * Encodes the specified GRDestroyScene message. Does not implicitly {@link server.GRDestroyScene.verify|verify} messages.
         * @param m GRDestroyScene message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGRDestroyScene, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GRDestroyScene message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GRDestroyScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GRDestroyScene;
    }

    /** Properties of a RWAccountInvalid. */
    interface IRWAccountInvalid {

        /** RWAccountInvalid Acc */
        Acc?: (string | null);
    }

    /** Represents a RWAccountInvalid. */
    class RWAccountInvalid implements IRWAccountInvalid {

        /**
         * Constructs a new RWAccountInvalid.
         * @param [p] Properties to set
         */
        constructor(p?: server.IRWAccountInvalid);

        /** RWAccountInvalid Acc. */
        public Acc: string;

        /**
         * Encodes the specified RWAccountInvalid message. Does not implicitly {@link server.RWAccountInvalid.verify|verify} messages.
         * @param m RWAccountInvalid message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IRWAccountInvalid, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RWAccountInvalid message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RWAccountInvalid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.RWAccountInvalid;
    }

    /** Properties of a WGDTRoomInfo. */
    interface IWGDTRoomInfo {

        /** WGDTRoomInfo DataKey */
        DataKey?: (string | null);

        /** WGDTRoomInfo RoomId */
        RoomId?: (number | null);
    }

    /** Represents a WGDTRoomInfo. */
    class WGDTRoomInfo implements IWGDTRoomInfo {

        /**
         * Constructs a new WGDTRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGDTRoomInfo);

        /** WGDTRoomInfo DataKey. */
        public DataKey: string;

        /** WGDTRoomInfo RoomId. */
        public RoomId: number;

        /**
         * Encodes the specified WGDTRoomInfo message. Does not implicitly {@link server.WGDTRoomInfo.verify|verify} messages.
         * @param m WGDTRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGDTRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGDTRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGDTRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGDTRoomInfo;
    }

    /** Properties of a PlayerDTCoin. */
    interface IPlayerDTCoin {

        /** PlayerDTCoin NickName */
        NickName?: (string | null);

        /** PlayerDTCoin Snid */
        Snid?: (number | null);

        /** PlayerDTCoin DCoin */
        DCoin?: (number | null);

        /** PlayerDTCoin TCoin */
        TCoin?: (number | null);

        /** PlayerDTCoin NCoin */
        NCoin?: (number | null);

        /** PlayerDTCoin Totle */
        Totle?: (number | Long | null);

        /** PlayerDTCoin DDCoin */
        DDCoin?: (number | null);

        /** PlayerDTCoin TDCoin */
        TDCoin?: (number | null);
    }

    /** Represents a PlayerDTCoin. */
    class PlayerDTCoin implements IPlayerDTCoin {

        /**
         * Constructs a new PlayerDTCoin.
         * @param [p] Properties to set
         */
        constructor(p?: server.IPlayerDTCoin);

        /** PlayerDTCoin NickName. */
        public NickName: string;

        /** PlayerDTCoin Snid. */
        public Snid: number;

        /** PlayerDTCoin DCoin. */
        public DCoin: number;

        /** PlayerDTCoin TCoin. */
        public TCoin: number;

        /** PlayerDTCoin NCoin. */
        public NCoin: number;

        /** PlayerDTCoin Totle. */
        public Totle: (number | Long);

        /** PlayerDTCoin DDCoin. */
        public DDCoin: number;

        /** PlayerDTCoin TDCoin. */
        public TDCoin: number;

        /**
         * Encodes the specified PlayerDTCoin message. Does not implicitly {@link server.PlayerDTCoin.verify|verify} messages.
         * @param m PlayerDTCoin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IPlayerDTCoin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerDTCoin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerDTCoin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.PlayerDTCoin;
    }

    /** Properties of a EResult. */
    interface IEResult {

        /** EResult Index */
        Index?: (string | null);

        /** EResult Result */
        Result?: (number | null);
    }

    /** Represents a EResult. */
    class EResult implements IEResult {

        /**
         * Constructs a new EResult.
         * @param [p] Properties to set
         */
        constructor(p?: server.IEResult);

        /** EResult Index. */
        public Index: string;

        /** EResult Result. */
        public Result: number;

        /**
         * Encodes the specified EResult message. Does not implicitly {@link server.EResult.verify|verify} messages.
         * @param m EResult message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IEResult, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a EResult message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.EResult;
    }

    /** Properties of a GWDTRoomInfo. */
    interface IGWDTRoomInfo {

        /** GWDTRoomInfo DataKey */
        DataKey?: (string | null);

        /** GWDTRoomInfo RoomId */
        RoomId?: (number | null);

        /** GWDTRoomInfo DCoin */
        DCoin?: (number | null);

        /** GWDTRoomInfo TCoin */
        TCoin?: (number | null);

        /** GWDTRoomInfo NCoin */
        NCoin?: (number | null);

        /** GWDTRoomInfo Players */
        Players?: (server.IPlayerDTCoin[] | null);

        /** GWDTRoomInfo Onlines */
        Onlines?: (number | null);

        /** GWDTRoomInfo LeftTimes */
        LeftTimes?: (number | null);

        /** GWDTRoomInfo CoinPool */
        CoinPool?: (number | Long | null);

        /** GWDTRoomInfo NumOfGames */
        NumOfGames?: (number | null);

        /** GWDTRoomInfo LoopNum */
        LoopNum?: (number | null);

        /** GWDTRoomInfo Results */
        Results?: (server.IEResult[] | null);

        /** GWDTRoomInfo DDCoin */
        DDCoin?: (number | null);

        /** GWDTRoomInfo TDCoin */
        TDCoin?: (number | null);
    }

    /** Represents a GWDTRoomInfo. */
    class GWDTRoomInfo implements IGWDTRoomInfo {

        /**
         * Constructs a new GWDTRoomInfo.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWDTRoomInfo);

        /** GWDTRoomInfo DataKey. */
        public DataKey: string;

        /** GWDTRoomInfo RoomId. */
        public RoomId: number;

        /** GWDTRoomInfo DCoin. */
        public DCoin: number;

        /** GWDTRoomInfo TCoin. */
        public TCoin: number;

        /** GWDTRoomInfo NCoin. */
        public NCoin: number;

        /** GWDTRoomInfo Players. */
        public Players: server.IPlayerDTCoin[];

        /** GWDTRoomInfo Onlines. */
        public Onlines: number;

        /** GWDTRoomInfo LeftTimes. */
        public LeftTimes: number;

        /** GWDTRoomInfo CoinPool. */
        public CoinPool: (number | Long);

        /** GWDTRoomInfo NumOfGames. */
        public NumOfGames: number;

        /** GWDTRoomInfo LoopNum. */
        public LoopNum: number;

        /** GWDTRoomInfo Results. */
        public Results: server.IEResult[];

        /** GWDTRoomInfo DDCoin. */
        public DDCoin: number;

        /** GWDTRoomInfo TDCoin. */
        public TDCoin: number;

        /**
         * Encodes the specified GWDTRoomInfo message. Does not implicitly {@link server.GWDTRoomInfo.verify|verify} messages.
         * @param m GWDTRoomInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWDTRoomInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWDTRoomInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWDTRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWDTRoomInfo;
    }

    /** Properties of a WGRoomResults. */
    interface IWGRoomResults {

        /** WGRoomResults RoomId */
        RoomId?: (number | null);

        /** WGRoomResults Webuser */
        Webuser?: (string | null);

        /** WGRoomResults Results */
        Results?: (string | null);

        /** WGRoomResults DataKey */
        DataKey?: (string | null);
    }

    /** Represents a WGRoomResults. */
    class WGRoomResults implements IWGRoomResults {

        /**
         * Constructs a new WGRoomResults.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGRoomResults);

        /** WGRoomResults RoomId. */
        public RoomId: number;

        /** WGRoomResults Webuser. */
        public Webuser: string;

        /** WGRoomResults Results. */
        public Results: string;

        /** WGRoomResults DataKey. */
        public DataKey: string;

        /**
         * Encodes the specified WGRoomResults message. Does not implicitly {@link server.WGRoomResults.verify|verify} messages.
         * @param m WGRoomResults message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGRoomResults, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGRoomResults message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGRoomResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGRoomResults;
    }

    /** Properties of a GWRoomResults. */
    interface IGWRoomResults {

        /** GWRoomResults DataKey */
        DataKey?: (string | null);

        /** GWRoomResults Code */
        Code?: (number | null);

        /** GWRoomResults Msg */
        Msg?: (string | null);
    }

    /** Represents a GWRoomResults. */
    class GWRoomResults implements IGWRoomResults {

        /**
         * Constructs a new GWRoomResults.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWRoomResults);

        /** GWRoomResults DataKey. */
        public DataKey: string;

        /** GWRoomResults Code. */
        public Code: number;

        /** GWRoomResults Msg. */
        public Msg: string;

        /**
         * Encodes the specified GWRoomResults message. Does not implicitly {@link server.GWRoomResults.verify|verify} messages.
         * @param m GWRoomResults message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWRoomResults, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWRoomResults message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWRoomResults
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWRoomResults;
    }

    /** Properties of a GWAddSingleAdjust. */
    interface IGWAddSingleAdjust {

        /** GWAddSingleAdjust SnId */
        SnId?: (number | null);

        /** GWAddSingleAdjust Platform */
        Platform?: (string | null);

        /** GWAddSingleAdjust GameFreeId */
        GameFreeId?: (number | null);
    }

    /** Represents a GWAddSingleAdjust. */
    class GWAddSingleAdjust implements IGWAddSingleAdjust {

        /**
         * Constructs a new GWAddSingleAdjust.
         * @param [p] Properties to set
         */
        constructor(p?: server.IGWAddSingleAdjust);

        /** GWAddSingleAdjust SnId. */
        public SnId: number;

        /** GWAddSingleAdjust Platform. */
        public Platform: string;

        /** GWAddSingleAdjust GameFreeId. */
        public GameFreeId: number;

        /**
         * Encodes the specified GWAddSingleAdjust message. Does not implicitly {@link server.GWAddSingleAdjust.verify|verify} messages.
         * @param m GWAddSingleAdjust message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IGWAddSingleAdjust, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GWAddSingleAdjust message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GWAddSingleAdjust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.GWAddSingleAdjust;
    }

    /** Properties of a WGSingleAdjust. */
    interface IWGSingleAdjust {

        /** WGSingleAdjust SceneId */
        SceneId?: (number | null);

        /** WGSingleAdjust Option */
        Option?: (number | null);

        /** WGSingleAdjust PlayerSingleAdjust */
        PlayerSingleAdjust?: (Uint8Array | null);
    }

    /** Represents a WGSingleAdjust. */
    class WGSingleAdjust implements IWGSingleAdjust {

        /**
         * Constructs a new WGSingleAdjust.
         * @param [p] Properties to set
         */
        constructor(p?: server.IWGSingleAdjust);

        /** WGSingleAdjust SceneId. */
        public SceneId: number;

        /** WGSingleAdjust Option. */
        public Option: number;

        /** WGSingleAdjust PlayerSingleAdjust. */
        public PlayerSingleAdjust: Uint8Array;

        /**
         * Encodes the specified WGSingleAdjust message. Does not implicitly {@link server.WGSingleAdjust.verify|verify} messages.
         * @param m WGSingleAdjust message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.IWGSingleAdjust, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WGSingleAdjust message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WGSingleAdjust
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.WGSingleAdjust;
    }

    /** TransmitPacketID enum. */
    enum TransmitPacketID {
        PACKET_Transmit_ZERO = 0,
        PACKET_SS_PACKET_TRANSMIT = 1003
    }

    /** Properties of a SSTransmit. */
    interface ISSTransmit {

        /** SSTransmit SessionId */
        SessionId?: (number | Long | null);

        /** SSTransmit PacketData */
        PacketData?: (Uint8Array | null);
    }

    /** Represents a SSTransmit. */
    class SSTransmit implements ISSTransmit {

        /**
         * Constructs a new SSTransmit.
         * @param [p] Properties to set
         */
        constructor(p?: server.ISSTransmit);

        /** SSTransmit SessionId. */
        public SessionId: (number | Long);

        /** SSTransmit PacketData. */
        public PacketData: Uint8Array;

        /**
         * Encodes the specified SSTransmit message. Does not implicitly {@link server.SSTransmit.verify|verify} messages.
         * @param m SSTransmit message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: server.ISSTransmit, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SSTransmit message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SSTransmit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader | Uint8Array), l?: number): server.SSTransmit;
    }
}
