// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace pets. */
export namespace pets {

    /** PetsPacketID enum. */
    enum PetsPacketID {
        PACKET_CANDY_ZERO = 0,
        PACKET_CS_ROLE_INFO = 2550,
        PACKET_SC_ROLE_INFO = 2551,
        PACKET_CS_PET_INFO = 2552,
        PACKET_SC_PET_INFO = 2553,
        PACKET_CS_PET_RISINGSTAR = 2554,
        PACKET_SC_ROLE_RISINGSTAR = 2555,
        PACKET_SC_PET_RISINGSTAR = 2556,
        PACKET_CS_ROLEPETUSEOP = 2557,
        PACKET_SC_ROLEPETUSEOP = 2558,
        PACKET_CS_ROLEPETUNLOCK = 2559,
        PACKET_SC_ROLEPETUNLOCK = 2560
    }

    /** OpResultCode enum. */
    enum OpResultCode {
        OPRC_Sucess = 0,
        OPRC_Error = 1
    }

    /** Properties of a RoleInfo. */
    interface IRoleInfo {

        /** RoleInfo Id */
        Id?: (number|null);

        /** RoleInfo RoleId */
        RoleId?: (number|null);

        /** RoleInfo Name */
        Name?: (string|null);

        /** RoleInfo Grade */
        Grade?: (number|null);

        /** RoleInfo Level */
        Level?: (number|null);

        /** RoleInfo MaxLevel */
        MaxLevel?: (number|null);

        /** RoleInfo Fragment */
        Fragment?: (number|null);

        /** RoleInfo Amount */
        Amount?: (number|null);

        /** RoleInfo AwardType */
        AwardType?: (number|null);

        /** RoleInfo Award */
        Award?: (number|null);

        /** RoleInfo AwardRate */
        AwardRate?: (number|null);

        /** RoleInfo Story */
        Story?: (string|null);

        /** RoleInfo AwardTitle */
        AwardTitle?: (string|null);

        /** RoleInfo HaveAmount */
        HaveAmount?: (number|null);

        /** RoleInfo NextAward */
        NextAward?: (number|null);

        /** RoleInfo IsUsing */
        IsUsing?: (boolean|null);

        /** RoleInfo IsUnlock */
        IsUnlock?: (boolean|null);
    }

    /** Represents a RoleInfo. */
    class RoleInfo implements IRoleInfo {

        /**
         * Constructs a new RoleInfo.
         * @param [p] Properties to set
         */
        constructor(p?: pets.IRoleInfo);

        /** RoleInfo Id. */
        public Id: number;

        /** RoleInfo RoleId. */
        public RoleId: number;

        /** RoleInfo Name. */
        public Name: string;

        /** RoleInfo Grade. */
        public Grade: number;

        /** RoleInfo Level. */
        public Level: number;

        /** RoleInfo MaxLevel. */
        public MaxLevel: number;

        /** RoleInfo Fragment. */
        public Fragment: number;

        /** RoleInfo Amount. */
        public Amount: number;

        /** RoleInfo AwardType. */
        public AwardType: number;

        /** RoleInfo Award. */
        public Award: number;

        /** RoleInfo AwardRate. */
        public AwardRate: number;

        /** RoleInfo Story. */
        public Story: string;

        /** RoleInfo AwardTitle. */
        public AwardTitle: string;

        /** RoleInfo HaveAmount. */
        public HaveAmount: number;

        /** RoleInfo NextAward. */
        public NextAward: number;

        /** RoleInfo IsUsing. */
        public IsUsing: boolean;

        /** RoleInfo IsUnlock. */
        public IsUnlock: boolean;

        /**
         * Encodes the specified RoleInfo message. Does not implicitly {@link pets.RoleInfo.verify|verify} messages.
         * @param m RoleInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.IRoleInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.RoleInfo;
    }

    /** Properties of a CSRoleInfo. */
    interface ICSRoleInfo {
    }

    /** Represents a CSRoleInfo. */
    class CSRoleInfo implements ICSRoleInfo {

        /**
         * Constructs a new CSRoleInfo.
         * @param [p] Properties to set
         */
        constructor(p?: pets.ICSRoleInfo);

        /**
         * Encodes the specified CSRoleInfo message. Does not implicitly {@link pets.CSRoleInfo.verify|verify} messages.
         * @param m CSRoleInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.ICSRoleInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSRoleInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.CSRoleInfo;
    }

    /** Properties of a SCRoleInfo. */
    interface ISCRoleInfo {

        /** SCRoleInfo Infos */
        Infos?: (pets.IRoleInfo[]|null);
    }

    /** Represents a SCRoleInfo. */
    class SCRoleInfo implements ISCRoleInfo {

        /**
         * Constructs a new SCRoleInfo.
         * @param [p] Properties to set
         */
        constructor(p?: pets.ISCRoleInfo);

        /** SCRoleInfo Infos. */
        public Infos: pets.IRoleInfo[];

        /**
         * Encodes the specified SCRoleInfo message. Does not implicitly {@link pets.SCRoleInfo.verify|verify} messages.
         * @param m SCRoleInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.ISCRoleInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRoleInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.SCRoleInfo;
    }

    /** Properties of a PetInfo. */
    interface IPetInfo {

        /** PetInfo Id */
        Id?: (number|null);

        /** PetInfo PetId */
        PetId?: (number|null);

        /** PetInfo Name */
        Name?: (string|null);

        /** PetInfo Grade */
        Grade?: (number|null);

        /** PetInfo Level */
        Level?: (number|null);

        /** PetInfo MaxLevel */
        MaxLevel?: (number|null);

        /** PetInfo Fragment */
        Fragment?: (number|null);

        /** PetInfo Amount */
        Amount?: (number|null);

        /** PetInfo AwardType */
        AwardType?: (number|null);

        /** PetInfo Award */
        Award?: (number|null);

        /** PetInfo AwardRate */
        AwardRate?: (number|null);

        /** PetInfo Story */
        Story?: (string|null);

        /** PetInfo AwardTitle */
        AwardTitle?: (string|null);

        /** PetInfo HaveAmount */
        HaveAmount?: (number|null);

        /** PetInfo NextAward */
        NextAward?: (number|null);

        /** PetInfo IsUsing */
        IsUsing?: (boolean|null);

        /** PetInfo IsUnlock */
        IsUnlock?: (boolean|null);
    }

    /** Represents a PetInfo. */
    class PetInfo implements IPetInfo {

        /**
         * Constructs a new PetInfo.
         * @param [p] Properties to set
         */
        constructor(p?: pets.IPetInfo);

        /** PetInfo Id. */
        public Id: number;

        /** PetInfo PetId. */
        public PetId: number;

        /** PetInfo Name. */
        public Name: string;

        /** PetInfo Grade. */
        public Grade: number;

        /** PetInfo Level. */
        public Level: number;

        /** PetInfo MaxLevel. */
        public MaxLevel: number;

        /** PetInfo Fragment. */
        public Fragment: number;

        /** PetInfo Amount. */
        public Amount: number;

        /** PetInfo AwardType. */
        public AwardType: number;

        /** PetInfo Award. */
        public Award: number;

        /** PetInfo AwardRate. */
        public AwardRate: number;

        /** PetInfo Story. */
        public Story: string;

        /** PetInfo AwardTitle. */
        public AwardTitle: string;

        /** PetInfo HaveAmount. */
        public HaveAmount: number;

        /** PetInfo NextAward. */
        public NextAward: number;

        /** PetInfo IsUsing. */
        public IsUsing: boolean;

        /** PetInfo IsUnlock. */
        public IsUnlock: boolean;

        /**
         * Encodes the specified PetInfo message. Does not implicitly {@link pets.PetInfo.verify|verify} messages.
         * @param m PetInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.IPetInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PetInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.PetInfo;
    }

    /** Properties of a CSPetInfo. */
    interface ICSPetInfo {
    }

    /** Represents a CSPetInfo. */
    class CSPetInfo implements ICSPetInfo {

        /**
         * Constructs a new CSPetInfo.
         * @param [p] Properties to set
         */
        constructor(p?: pets.ICSPetInfo);

        /**
         * Encodes the specified CSPetInfo message. Does not implicitly {@link pets.CSPetInfo.verify|verify} messages.
         * @param m CSPetInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.ICSPetInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSPetInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSPetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.CSPetInfo;
    }

    /** Properties of a SCPetInfo. */
    interface ISCPetInfo {

        /** SCPetInfo Infos */
        Infos?: (pets.IPetInfo[]|null);
    }

    /** Represents a SCPetInfo. */
    class SCPetInfo implements ISCPetInfo {

        /**
         * Constructs a new SCPetInfo.
         * @param [p] Properties to set
         */
        constructor(p?: pets.ISCPetInfo);

        /** SCPetInfo Infos. */
        public Infos: pets.IPetInfo[];

        /**
         * Encodes the specified SCPetInfo message. Does not implicitly {@link pets.SCPetInfo.verify|verify} messages.
         * @param m SCPetInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.ISCPetInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPetInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPetInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.SCPetInfo;
    }

    /** Properties of a CSRisingStar. */
    interface ICSRisingStar {

        /** CSRisingStar RisingType */
        RisingType?: (number|null);

        /** CSRisingStar RisingModId */
        RisingModId?: (number|null);
    }

    /** Represents a CSRisingStar. */
    class CSRisingStar implements ICSRisingStar {

        /**
         * Constructs a new CSRisingStar.
         * @param [p] Properties to set
         */
        constructor(p?: pets.ICSRisingStar);

        /** CSRisingStar RisingType. */
        public RisingType: number;

        /** CSRisingStar RisingModId. */
        public RisingModId: number;

        /**
         * Encodes the specified CSRisingStar message. Does not implicitly {@link pets.CSRisingStar.verify|verify} messages.
         * @param m CSRisingStar message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.ICSRisingStar, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSRisingStar message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSRisingStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.CSRisingStar;
    }

    /** Properties of a SCRoleRisingStar. */
    interface ISCRoleRisingStar {

        /** SCRoleRisingStar RoleInfo */
        RoleInfo?: (pets.IRoleInfo|null);

        /** SCRoleRisingStar RetCode */
        RetCode?: (pets.OpResultCode|null);
    }

    /** Represents a SCRoleRisingStar. */
    class SCRoleRisingStar implements ISCRoleRisingStar {

        /**
         * Constructs a new SCRoleRisingStar.
         * @param [p] Properties to set
         */
        constructor(p?: pets.ISCRoleRisingStar);

        /** SCRoleRisingStar RoleInfo. */
        public RoleInfo?: (pets.IRoleInfo|null);

        /** SCRoleRisingStar RetCode. */
        public RetCode: pets.OpResultCode;

        /**
         * Encodes the specified SCRoleRisingStar message. Does not implicitly {@link pets.SCRoleRisingStar.verify|verify} messages.
         * @param m SCRoleRisingStar message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.ISCRoleRisingStar, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRoleRisingStar message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRoleRisingStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.SCRoleRisingStar;
    }

    /** Properties of a SCPetRisingStar. */
    interface ISCPetRisingStar {

        /** SCPetRisingStar PetInfo */
        PetInfo?: (pets.IPetInfo|null);

        /** SCPetRisingStar RetCode */
        RetCode?: (pets.OpResultCode|null);
    }

    /** Represents a SCPetRisingStar. */
    class SCPetRisingStar implements ISCPetRisingStar {

        /**
         * Constructs a new SCPetRisingStar.
         * @param [p] Properties to set
         */
        constructor(p?: pets.ISCPetRisingStar);

        /** SCPetRisingStar PetInfo. */
        public PetInfo?: (pets.IPetInfo|null);

        /** SCPetRisingStar RetCode. */
        public RetCode: pets.OpResultCode;

        /**
         * Encodes the specified SCPetRisingStar message. Does not implicitly {@link pets.SCPetRisingStar.verify|verify} messages.
         * @param m SCPetRisingStar message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.ISCPetRisingStar, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCPetRisingStar message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCPetRisingStar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.SCPetRisingStar;
    }

    /** Properties of a CSRolePetUseOp. */
    interface ICSRolePetUseOp {

        /** CSRolePetUseOp UseModType */
        UseModType?: (number|null);

        /** CSRolePetUseOp UseModId */
        UseModId?: (number|null);
    }

    /** Represents a CSRolePetUseOp. */
    class CSRolePetUseOp implements ICSRolePetUseOp {

        /**
         * Constructs a new CSRolePetUseOp.
         * @param [p] Properties to set
         */
        constructor(p?: pets.ICSRolePetUseOp);

        /** CSRolePetUseOp UseModType. */
        public UseModType: number;

        /** CSRolePetUseOp UseModId. */
        public UseModId: number;

        /**
         * Encodes the specified CSRolePetUseOp message. Does not implicitly {@link pets.CSRolePetUseOp.verify|verify} messages.
         * @param m CSRolePetUseOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.ICSRolePetUseOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSRolePetUseOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSRolePetUseOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.CSRolePetUseOp;
    }

    /** Properties of a SCRolePetUseOp. */
    interface ISCRolePetUseOp {

        /** SCRolePetUseOp UseModType */
        UseModType?: (number|null);

        /** SCRolePetUseOp UseModId */
        UseModId?: (number|null);

        /** SCRolePetUseOp RetCode */
        RetCode?: (pets.OpResultCode|null);
    }

    /** Represents a SCRolePetUseOp. */
    class SCRolePetUseOp implements ISCRolePetUseOp {

        /**
         * Constructs a new SCRolePetUseOp.
         * @param [p] Properties to set
         */
        constructor(p?: pets.ISCRolePetUseOp);

        /** SCRolePetUseOp UseModType. */
        public UseModType: number;

        /** SCRolePetUseOp UseModId. */
        public UseModId: number;

        /** SCRolePetUseOp RetCode. */
        public RetCode: pets.OpResultCode;

        /**
         * Encodes the specified SCRolePetUseOp message. Does not implicitly {@link pets.SCRolePetUseOp.verify|verify} messages.
         * @param m SCRolePetUseOp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.ISCRolePetUseOp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRolePetUseOp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRolePetUseOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.SCRolePetUseOp;
    }

    /** Properties of a CSRolePetUnlock. */
    interface ICSRolePetUnlock {

        /** CSRolePetUnlock UseModType */
        UseModType?: (number|null);

        /** CSRolePetUnlock UseModId */
        UseModId?: (number|null);
    }

    /** Represents a CSRolePetUnlock. */
    class CSRolePetUnlock implements ICSRolePetUnlock {

        /**
         * Constructs a new CSRolePetUnlock.
         * @param [p] Properties to set
         */
        constructor(p?: pets.ICSRolePetUnlock);

        /** CSRolePetUnlock UseModType. */
        public UseModType: number;

        /** CSRolePetUnlock UseModId. */
        public UseModId: number;

        /**
         * Encodes the specified CSRolePetUnlock message. Does not implicitly {@link pets.CSRolePetUnlock.verify|verify} messages.
         * @param m CSRolePetUnlock message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.ICSRolePetUnlock, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CSRolePetUnlock message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CSRolePetUnlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.CSRolePetUnlock;
    }

    /** Properties of a SCRolePetUnlock. */
    interface ISCRolePetUnlock {

        /** SCRolePetUnlock UseModType */
        UseModType?: (number|null);

        /** SCRolePetUnlock UseModId */
        UseModId?: (number|null);

        /** SCRolePetUnlock RetCode */
        RetCode?: (pets.OpResultCode|null);

        /** SCRolePetUnlock RoleInfo */
        RoleInfo?: (pets.IRoleInfo|null);

        /** SCRolePetUnlock PetInfo */
        PetInfo?: (pets.IPetInfo|null);
    }

    /** Represents a SCRolePetUnlock. */
    class SCRolePetUnlock implements ISCRolePetUnlock {

        /**
         * Constructs a new SCRolePetUnlock.
         * @param [p] Properties to set
         */
        constructor(p?: pets.ISCRolePetUnlock);

        /** SCRolePetUnlock UseModType. */
        public UseModType: number;

        /** SCRolePetUnlock UseModId. */
        public UseModId: number;

        /** SCRolePetUnlock RetCode. */
        public RetCode: pets.OpResultCode;

        /** SCRolePetUnlock RoleInfo. */
        public RoleInfo?: (pets.IRoleInfo|null);

        /** SCRolePetUnlock PetInfo. */
        public PetInfo?: (pets.IPetInfo|null);

        /**
         * Encodes the specified SCRolePetUnlock message. Does not implicitly {@link pets.SCRolePetUnlock.verify|verify} messages.
         * @param m SCRolePetUnlock message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: pets.ISCRolePetUnlock, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SCRolePetUnlock message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SCRolePetUnlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): pets.SCRolePetUnlock;
    }
}
