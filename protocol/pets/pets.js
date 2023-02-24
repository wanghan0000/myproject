/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pets = (function() {

    var pets = {};

    pets.PetsPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_CANDY_ZERO"] = 0;
        values[valuesById[2550] = "PACKET_CS_ROLE_INFO"] = 2550;
        values[valuesById[2551] = "PACKET_SC_ROLE_INFO"] = 2551;
        values[valuesById[2552] = "PACKET_CS_PET_INFO"] = 2552;
        values[valuesById[2553] = "PACKET_SC_PET_INFO"] = 2553;
        values[valuesById[2554] = "PACKET_CS_PET_RISINGSTAR"] = 2554;
        values[valuesById[2555] = "PACKET_SC_ROLE_RISINGSTAR"] = 2555;
        values[valuesById[2556] = "PACKET_SC_PET_RISINGSTAR"] = 2556;
        values[valuesById[2557] = "PACKET_CS_ROLEPETUSEOP"] = 2557;
        values[valuesById[2558] = "PACKET_SC_ROLEPETUSEOP"] = 2558;
        values[valuesById[2559] = "PACKET_CS_ROLEPETUNLOCK"] = 2559;
        values[valuesById[2560] = "PACKET_SC_ROLEPETUNLOCK"] = 2560;
        return values;
    })();

    pets.OpResultCode = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OPRC_Sucess"] = 0;
        values[valuesById[1] = "OPRC_Error"] = 1;
        return values;
    })();

    pets.RoleInfo = (function() {

        function RoleInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RoleInfo.prototype.Id = 0;
        RoleInfo.prototype.RoleId = 0;
        RoleInfo.prototype.Name = "";
        RoleInfo.prototype.Grade = 0;
        RoleInfo.prototype.Level = 0;
        RoleInfo.prototype.MaxLevel = 0;
        RoleInfo.prototype.Fragment = 0;
        RoleInfo.prototype.Amount = 0;
        RoleInfo.prototype.AwardType = 0;
        RoleInfo.prototype.Award = 0;
        RoleInfo.prototype.AwardRate = 0;
        RoleInfo.prototype.Story = "";
        RoleInfo.prototype.AwardTitle = "";
        RoleInfo.prototype.HaveAmount = 0;
        RoleInfo.prototype.NextAward = 0;
        RoleInfo.prototype.IsUsing = false;
        RoleInfo.prototype.IsUnlock = false;

        RoleInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.RoleId != null && Object.hasOwnProperty.call(m, "RoleId"))
                w.uint32(16).int32(m.RoleId);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Grade != null && Object.hasOwnProperty.call(m, "Grade"))
                w.uint32(32).int32(m.Grade);
            if (m.Level != null && Object.hasOwnProperty.call(m, "Level"))
                w.uint32(40).int32(m.Level);
            if (m.MaxLevel != null && Object.hasOwnProperty.call(m, "MaxLevel"))
                w.uint32(48).int32(m.MaxLevel);
            if (m.Fragment != null && Object.hasOwnProperty.call(m, "Fragment"))
                w.uint32(56).int32(m.Fragment);
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(64).int32(m.Amount);
            if (m.AwardType != null && Object.hasOwnProperty.call(m, "AwardType"))
                w.uint32(72).int32(m.AwardType);
            if (m.Award != null && Object.hasOwnProperty.call(m, "Award"))
                w.uint32(80).int32(m.Award);
            if (m.AwardRate != null && Object.hasOwnProperty.call(m, "AwardRate"))
                w.uint32(88).int32(m.AwardRate);
            if (m.Story != null && Object.hasOwnProperty.call(m, "Story"))
                w.uint32(98).string(m.Story);
            if (m.AwardTitle != null && Object.hasOwnProperty.call(m, "AwardTitle"))
                w.uint32(106).string(m.AwardTitle);
            if (m.HaveAmount != null && Object.hasOwnProperty.call(m, "HaveAmount"))
                w.uint32(112).int32(m.HaveAmount);
            if (m.NextAward != null && Object.hasOwnProperty.call(m, "NextAward"))
                w.uint32(120).int32(m.NextAward);
            if (m.IsUsing != null && Object.hasOwnProperty.call(m, "IsUsing"))
                w.uint32(128).bool(m.IsUsing);
            if (m.IsUnlock != null && Object.hasOwnProperty.call(m, "IsUnlock"))
                w.uint32(136).bool(m.IsUnlock);
            return w;
        };

        RoleInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.RoleInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.RoleId = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.Grade = r.int32();
                    break;
                case 5:
                    m.Level = r.int32();
                    break;
                case 6:
                    m.MaxLevel = r.int32();
                    break;
                case 7:
                    m.Fragment = r.int32();
                    break;
                case 8:
                    m.Amount = r.int32();
                    break;
                case 9:
                    m.AwardType = r.int32();
                    break;
                case 10:
                    m.Award = r.int32();
                    break;
                case 11:
                    m.AwardRate = r.int32();
                    break;
                case 12:
                    m.Story = r.string();
                    break;
                case 13:
                    m.AwardTitle = r.string();
                    break;
                case 14:
                    m.HaveAmount = r.int32();
                    break;
                case 15:
                    m.NextAward = r.int32();
                    break;
                case 16:
                    m.IsUsing = r.bool();
                    break;
                case 17:
                    m.IsUnlock = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RoleInfo;
    })();

    pets.CSRoleInfo = (function() {

        function CSRoleInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSRoleInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSRoleInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.CSRoleInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSRoleInfo;
    })();

    pets.SCRoleInfo = (function() {

        function SCRoleInfo(p) {
            this.Infos = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRoleInfo.prototype.Infos = $util.emptyArray;

        SCRoleInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Infos != null && m.Infos.length) {
                for (var i = 0; i < m.Infos.length; ++i)
                    $root.pets.RoleInfo.encode(m.Infos[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCRoleInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.SCRoleInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Infos && m.Infos.length))
                        m.Infos = [];
                    m.Infos.push($root.pets.RoleInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRoleInfo;
    })();

    pets.PetInfo = (function() {

        function PetInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PetInfo.prototype.Id = 0;
        PetInfo.prototype.PetId = 0;
        PetInfo.prototype.Name = "";
        PetInfo.prototype.Grade = 0;
        PetInfo.prototype.Level = 0;
        PetInfo.prototype.MaxLevel = 0;
        PetInfo.prototype.Fragment = 0;
        PetInfo.prototype.Amount = 0;
        PetInfo.prototype.AwardType = 0;
        PetInfo.prototype.Award = 0;
        PetInfo.prototype.AwardRate = 0;
        PetInfo.prototype.Story = "";
        PetInfo.prototype.AwardTitle = "";
        PetInfo.prototype.HaveAmount = 0;
        PetInfo.prototype.NextAward = 0;
        PetInfo.prototype.IsUsing = false;
        PetInfo.prototype.IsUnlock = false;

        PetInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.PetId != null && Object.hasOwnProperty.call(m, "PetId"))
                w.uint32(16).int32(m.PetId);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Grade != null && Object.hasOwnProperty.call(m, "Grade"))
                w.uint32(32).int32(m.Grade);
            if (m.Level != null && Object.hasOwnProperty.call(m, "Level"))
                w.uint32(40).int32(m.Level);
            if (m.MaxLevel != null && Object.hasOwnProperty.call(m, "MaxLevel"))
                w.uint32(48).int32(m.MaxLevel);
            if (m.Fragment != null && Object.hasOwnProperty.call(m, "Fragment"))
                w.uint32(56).int32(m.Fragment);
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(64).int32(m.Amount);
            if (m.AwardType != null && Object.hasOwnProperty.call(m, "AwardType"))
                w.uint32(72).int32(m.AwardType);
            if (m.Award != null && Object.hasOwnProperty.call(m, "Award"))
                w.uint32(80).int32(m.Award);
            if (m.AwardRate != null && Object.hasOwnProperty.call(m, "AwardRate"))
                w.uint32(88).int32(m.AwardRate);
            if (m.Story != null && Object.hasOwnProperty.call(m, "Story"))
                w.uint32(98).string(m.Story);
            if (m.AwardTitle != null && Object.hasOwnProperty.call(m, "AwardTitle"))
                w.uint32(106).string(m.AwardTitle);
            if (m.HaveAmount != null && Object.hasOwnProperty.call(m, "HaveAmount"))
                w.uint32(112).int32(m.HaveAmount);
            if (m.NextAward != null && Object.hasOwnProperty.call(m, "NextAward"))
                w.uint32(120).int32(m.NextAward);
            if (m.IsUsing != null && Object.hasOwnProperty.call(m, "IsUsing"))
                w.uint32(128).bool(m.IsUsing);
            if (m.IsUnlock != null && Object.hasOwnProperty.call(m, "IsUnlock"))
                w.uint32(136).bool(m.IsUnlock);
            return w;
        };

        PetInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.PetInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.PetId = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.Grade = r.int32();
                    break;
                case 5:
                    m.Level = r.int32();
                    break;
                case 6:
                    m.MaxLevel = r.int32();
                    break;
                case 7:
                    m.Fragment = r.int32();
                    break;
                case 8:
                    m.Amount = r.int32();
                    break;
                case 9:
                    m.AwardType = r.int32();
                    break;
                case 10:
                    m.Award = r.int32();
                    break;
                case 11:
                    m.AwardRate = r.int32();
                    break;
                case 12:
                    m.Story = r.string();
                    break;
                case 13:
                    m.AwardTitle = r.string();
                    break;
                case 14:
                    m.HaveAmount = r.int32();
                    break;
                case 15:
                    m.NextAward = r.int32();
                    break;
                case 16:
                    m.IsUsing = r.bool();
                    break;
                case 17:
                    m.IsUnlock = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PetInfo;
    })();

    pets.CSPetInfo = (function() {

        function CSPetInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSPetInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            return w;
        };

        CSPetInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.CSPetInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSPetInfo;
    })();

    pets.SCPetInfo = (function() {

        function SCPetInfo(p) {
            this.Infos = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPetInfo.prototype.Infos = $util.emptyArray;

        SCPetInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Infos != null && m.Infos.length) {
                for (var i = 0; i < m.Infos.length; ++i)
                    $root.pets.PetInfo.encode(m.Infos[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        SCPetInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.SCPetInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Infos && m.Infos.length))
                        m.Infos = [];
                    m.Infos.push($root.pets.PetInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPetInfo;
    })();

    pets.CSRisingStar = (function() {

        function CSRisingStar(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSRisingStar.prototype.RisingType = 0;
        CSRisingStar.prototype.RisingModId = 0;

        CSRisingStar.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RisingType != null && Object.hasOwnProperty.call(m, "RisingType"))
                w.uint32(8).int32(m.RisingType);
            if (m.RisingModId != null && Object.hasOwnProperty.call(m, "RisingModId"))
                w.uint32(16).int32(m.RisingModId);
            return w;
        };

        CSRisingStar.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.CSRisingStar();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RisingType = r.int32();
                    break;
                case 2:
                    m.RisingModId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSRisingStar;
    })();

    pets.SCRoleRisingStar = (function() {

        function SCRoleRisingStar(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRoleRisingStar.prototype.RoleInfo = null;
        SCRoleRisingStar.prototype.RetCode = 0;

        SCRoleRisingStar.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoleInfo != null && Object.hasOwnProperty.call(m, "RoleInfo"))
                $root.pets.RoleInfo.encode(m.RoleInfo, w.uint32(10).fork()).ldelim();
            if (m.RetCode != null && Object.hasOwnProperty.call(m, "RetCode"))
                w.uint32(16).int32(m.RetCode);
            return w;
        };

        SCRoleRisingStar.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.SCRoleRisingStar();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoleInfo = $root.pets.RoleInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.RetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRoleRisingStar;
    })();

    pets.SCPetRisingStar = (function() {

        function SCPetRisingStar(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCPetRisingStar.prototype.PetInfo = null;
        SCPetRisingStar.prototype.RetCode = 0;

        SCPetRisingStar.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PetInfo != null && Object.hasOwnProperty.call(m, "PetInfo"))
                $root.pets.PetInfo.encode(m.PetInfo, w.uint32(10).fork()).ldelim();
            if (m.RetCode != null && Object.hasOwnProperty.call(m, "RetCode"))
                w.uint32(16).int32(m.RetCode);
            return w;
        };

        SCPetRisingStar.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.SCPetRisingStar();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PetInfo = $root.pets.PetInfo.decode(r, r.uint32());
                    break;
                case 2:
                    m.RetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCPetRisingStar;
    })();

    pets.CSRolePetUseOp = (function() {

        function CSRolePetUseOp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSRolePetUseOp.prototype.UseModType = 0;
        CSRolePetUseOp.prototype.UseModId = 0;

        CSRolePetUseOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UseModType != null && Object.hasOwnProperty.call(m, "UseModType"))
                w.uint32(8).int32(m.UseModType);
            if (m.UseModId != null && Object.hasOwnProperty.call(m, "UseModId"))
                w.uint32(16).int32(m.UseModId);
            return w;
        };

        CSRolePetUseOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.CSRolePetUseOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UseModType = r.int32();
                    break;
                case 2:
                    m.UseModId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSRolePetUseOp;
    })();

    pets.SCRolePetUseOp = (function() {

        function SCRolePetUseOp(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRolePetUseOp.prototype.UseModType = 0;
        SCRolePetUseOp.prototype.UseModId = 0;
        SCRolePetUseOp.prototype.RetCode = 0;

        SCRolePetUseOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UseModType != null && Object.hasOwnProperty.call(m, "UseModType"))
                w.uint32(8).int32(m.UseModType);
            if (m.UseModId != null && Object.hasOwnProperty.call(m, "UseModId"))
                w.uint32(16).int32(m.UseModId);
            if (m.RetCode != null && Object.hasOwnProperty.call(m, "RetCode"))
                w.uint32(24).int32(m.RetCode);
            return w;
        };

        SCRolePetUseOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.SCRolePetUseOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UseModType = r.int32();
                    break;
                case 2:
                    m.UseModId = r.int32();
                    break;
                case 3:
                    m.RetCode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRolePetUseOp;
    })();

    pets.CSRolePetUnlock = (function() {

        function CSRolePetUnlock(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        CSRolePetUnlock.prototype.UseModType = 0;
        CSRolePetUnlock.prototype.UseModId = 0;

        CSRolePetUnlock.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UseModType != null && Object.hasOwnProperty.call(m, "UseModType"))
                w.uint32(8).int32(m.UseModType);
            if (m.UseModId != null && Object.hasOwnProperty.call(m, "UseModId"))
                w.uint32(16).int32(m.UseModId);
            return w;
        };

        CSRolePetUnlock.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.CSRolePetUnlock();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UseModType = r.int32();
                    break;
                case 2:
                    m.UseModId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return CSRolePetUnlock;
    })();

    pets.SCRolePetUnlock = (function() {

        function SCRolePetUnlock(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SCRolePetUnlock.prototype.UseModType = 0;
        SCRolePetUnlock.prototype.UseModId = 0;
        SCRolePetUnlock.prototype.RetCode = 0;
        SCRolePetUnlock.prototype.RoleInfo = null;
        SCRolePetUnlock.prototype.PetInfo = null;

        SCRolePetUnlock.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.UseModType != null && Object.hasOwnProperty.call(m, "UseModType"))
                w.uint32(8).int32(m.UseModType);
            if (m.UseModId != null && Object.hasOwnProperty.call(m, "UseModId"))
                w.uint32(16).int32(m.UseModId);
            if (m.RetCode != null && Object.hasOwnProperty.call(m, "RetCode"))
                w.uint32(24).int32(m.RetCode);
            if (m.RoleInfo != null && Object.hasOwnProperty.call(m, "RoleInfo"))
                $root.pets.RoleInfo.encode(m.RoleInfo, w.uint32(34).fork()).ldelim();
            if (m.PetInfo != null && Object.hasOwnProperty.call(m, "PetInfo"))
                $root.pets.PetInfo.encode(m.PetInfo, w.uint32(42).fork()).ldelim();
            return w;
        };

        SCRolePetUnlock.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.pets.SCRolePetUnlock();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.UseModType = r.int32();
                    break;
                case 2:
                    m.UseModId = r.int32();
                    break;
                case 3:
                    m.RetCode = r.int32();
                    break;
                case 4:
                    m.RoleInfo = $root.pets.RoleInfo.decode(r, r.uint32());
                    break;
                case 5:
                    m.PetInfo = $root.pets.PetInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SCRolePetUnlock;
    })();

    return pets;
})();

module.exports = $root;
