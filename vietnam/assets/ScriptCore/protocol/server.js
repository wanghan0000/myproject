/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.server = (function() {

    var server = {};

    server.DB_ActSign = (function() {

        function DB_ActSign(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_ActSign.prototype.Id = 0;
        DB_ActSign.prototype.Type = 0;
        DB_ActSign.prototype.Name = 0;
        DB_ActSign.prototype.Item_Id = 0;
        DB_ActSign.prototype.Grade = 0;

        DB_ActSign.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(16).int32(m.Type);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(24).int32(m.Name);
            if (m.Item_Id != null && Object.hasOwnProperty.call(m, "Item_Id"))
                w.uint32(32).int32(m.Item_Id);
            if (m.Grade != null && Object.hasOwnProperty.call(m, "Grade"))
                w.uint32(40).int32(m.Grade);
            return w;
        };

        DB_ActSign.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_ActSign();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Type = r.int32();
                    break;
                case 3:
                    m.Name = r.int32();
                    break;
                case 4:
                    m.Item_Id = r.int32();
                    break;
                case 5:
                    m.Grade = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_ActSign;
    })();

    server.DB_ActSignArray = (function() {

        function DB_ActSignArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_ActSignArray.prototype.Arr = $util.emptyArray;

        DB_ActSignArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_ActSign.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_ActSignArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_ActSignArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_ActSign.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_ActSignArray;
    })();

    server.DB_Activity1 = (function() {

        function DB_Activity1(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Activity1.prototype.Id = 0;
        DB_Activity1.prototype.Parameter = 0;
        DB_Activity1.prototype.Turn = 0;
        DB_Activity1.prototype.Title = "";
        DB_Activity1.prototype.Costype = 0;
        DB_Activity1.prototype.Costp = 0;
        DB_Activity1.prototype.Cost = 0;
        DB_Activity1.prototype.Typee = 0;
        DB_Activity1.prototype.Propid = 0;
        DB_Activity1.prototype.Value = 0;
        DB_Activity1.prototype.Getype = 0;

        DB_Activity1.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Parameter != null && Object.hasOwnProperty.call(m, "Parameter"))
                w.uint32(16).int32(m.Parameter);
            if (m.Turn != null && Object.hasOwnProperty.call(m, "Turn"))
                w.uint32(24).int32(m.Turn);
            if (m.Title != null && Object.hasOwnProperty.call(m, "Title"))
                w.uint32(34).string(m.Title);
            if (m.Costype != null && Object.hasOwnProperty.call(m, "Costype"))
                w.uint32(40).int32(m.Costype);
            if (m.Costp != null && Object.hasOwnProperty.call(m, "Costp"))
                w.uint32(48).int32(m.Costp);
            if (m.Cost != null && Object.hasOwnProperty.call(m, "Cost"))
                w.uint32(56).int32(m.Cost);
            if (m.Typee != null && Object.hasOwnProperty.call(m, "Typee"))
                w.uint32(64).int32(m.Typee);
            if (m.Propid != null && Object.hasOwnProperty.call(m, "Propid"))
                w.uint32(72).int32(m.Propid);
            if (m.Value != null && Object.hasOwnProperty.call(m, "Value"))
                w.uint32(80).int32(m.Value);
            if (m.Getype != null && Object.hasOwnProperty.call(m, "Getype"))
                w.uint32(88).int32(m.Getype);
            return w;
        };

        DB_Activity1.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Activity1();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Parameter = r.int32();
                    break;
                case 3:
                    m.Turn = r.int32();
                    break;
                case 4:
                    m.Title = r.string();
                    break;
                case 5:
                    m.Costype = r.int32();
                    break;
                case 6:
                    m.Costp = r.int32();
                    break;
                case 7:
                    m.Cost = r.int32();
                    break;
                case 8:
                    m.Typee = r.int32();
                    break;
                case 9:
                    m.Propid = r.int32();
                    break;
                case 10:
                    m.Value = r.int32();
                    break;
                case 11:
                    m.Getype = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Activity1;
    })();

    server.DB_Activity1Array = (function() {

        function DB_Activity1Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Activity1Array.prototype.Arr = $util.emptyArray;

        DB_Activity1Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Activity1.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Activity1Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Activity1Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Activity1.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Activity1Array;
    })();

    server.DB_AnimalColor = (function() {

        function DB_AnimalColor(p) {
            this.ColorChance = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_AnimalColor.prototype.Id = 0;
        DB_AnimalColor.prototype.Desc = "";
        DB_AnimalColor.prototype.ColorChance = $util.emptyArray;

        DB_AnimalColor.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Desc != null && Object.hasOwnProperty.call(m, "Desc"))
                w.uint32(18).string(m.Desc);
            if (m.ColorChance != null && m.ColorChance.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.ColorChance.length; ++i)
                    w.int32(m.ColorChance[i]);
                w.ldelim();
            }
            return w;
        };

        DB_AnimalColor.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_AnimalColor();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Desc = r.string();
                    break;
                case 3:
                    if (!(m.ColorChance && m.ColorChance.length))
                        m.ColorChance = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ColorChance.push(r.int32());
                    } else
                        m.ColorChance.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_AnimalColor;
    })();

    server.DB_AnimalColorArray = (function() {

        function DB_AnimalColorArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_AnimalColorArray.prototype.Arr = $util.emptyArray;

        DB_AnimalColorArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_AnimalColor.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_AnimalColorArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_AnimalColorArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_AnimalColor.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_AnimalColorArray;
    })();

    server.DB_ClientVer = (function() {

        function DB_ClientVer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_ClientVer.prototype.Id = 0;
        DB_ClientVer.prototype.PackageFlag = "";
        DB_ClientVer.prototype.PackVers = "";
        DB_ClientVer.prototype.GameVers = "";

        DB_ClientVer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.PackageFlag != null && Object.hasOwnProperty.call(m, "PackageFlag"))
                w.uint32(18).string(m.PackageFlag);
            if (m.PackVers != null && Object.hasOwnProperty.call(m, "PackVers"))
                w.uint32(26).string(m.PackVers);
            if (m.GameVers != null && Object.hasOwnProperty.call(m, "GameVers"))
                w.uint32(34).string(m.GameVers);
            return w;
        };

        DB_ClientVer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_ClientVer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.PackageFlag = r.string();
                    break;
                case 3:
                    m.PackVers = r.string();
                    break;
                case 4:
                    m.GameVers = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_ClientVer;
    })();

    server.DB_ClientVerArray = (function() {

        function DB_ClientVerArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_ClientVerArray.prototype.Arr = $util.emptyArray;

        DB_ClientVerArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_ClientVer.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_ClientVerArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_ClientVerArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_ClientVer.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_ClientVerArray;
    })();

    server.DB_Createroom = (function() {

        function DB_Createroom(p) {
            this.GoldRange = [];
            this.BetRange = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Createroom.prototype.Id = 0;
        DB_Createroom.prototype.GameId = 0;
        DB_Createroom.prototype.GameSite = 0;
        DB_Createroom.prototype.GoldRange = $util.emptyArray;
        DB_Createroom.prototype.BetRange = $util.emptyArray;

        DB_Createroom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(16).int32(m.GameId);
            if (m.GameSite != null && Object.hasOwnProperty.call(m, "GameSite"))
                w.uint32(24).int32(m.GameSite);
            if (m.GoldRange != null && m.GoldRange.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.GoldRange.length; ++i)
                    w.int32(m.GoldRange[i]);
                w.ldelim();
            }
            if (m.BetRange != null && m.BetRange.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.BetRange.length; ++i)
                    w.int32(m.BetRange[i]);
                w.ldelim();
            }
            return w;
        };

        DB_Createroom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Createroom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.GameId = r.int32();
                    break;
                case 3:
                    m.GameSite = r.int32();
                    break;
                case 4:
                    if (!(m.GoldRange && m.GoldRange.length))
                        m.GoldRange = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.GoldRange.push(r.int32());
                    } else
                        m.GoldRange.push(r.int32());
                    break;
                case 5:
                    if (!(m.BetRange && m.BetRange.length))
                        m.BetRange = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.BetRange.push(r.int32());
                    } else
                        m.BetRange.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Createroom;
    })();

    server.DB_CreateroomArray = (function() {

        function DB_CreateroomArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_CreateroomArray.prototype.Arr = $util.emptyArray;

        DB_CreateroomArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Createroom.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_CreateroomArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_CreateroomArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Createroom.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_CreateroomArray;
    })();

    server.DB_Fish = (function() {

        function DB_Fish(p) {
            this.ShowPos = [];
            this.GroupFishes = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Fish.prototype.Id = 0;
        DB_Fish.prototype.Name = "";
        DB_Fish.prototype.NameE = "";
        DB_Fish.prototype.Gold = 0;
        DB_Fish.prototype.Icon = "";
        DB_Fish.prototype.Speed = 0;
        DB_Fish.prototype.Exp = 0;
        DB_Fish.prototype.FrameCnt = 0;
        DB_Fish.prototype.FrameDelay = 0;
        DB_Fish.prototype.Rate = 0;
        DB_Fish.prototype.ShowType = 0;
        DB_Fish.prototype.Show = 0;
        DB_Fish.prototype.ShowScale = 0;
        DB_Fish.prototype.ShowPos = $util.emptyArray;
        DB_Fish.prototype.DieSound = "";
        DB_Fish.prototype.DieFrame = 0;
        DB_Fish.prototype.DieRotate = 0;
        DB_Fish.prototype.DieEffect = 0;
        DB_Fish.prototype.DieShake = 0;
        DB_Fish.prototype.ShakeRange = 0;
        DB_Fish.prototype.Shape = "";
        DB_Fish.prototype.IsBoss = 0;
        DB_Fish.prototype.ResId = 0;
        DB_Fish.prototype.DieParticle = "";
        DB_Fish.prototype.GroupShape = 0;
        DB_Fish.prototype.GroupFishes = $util.emptyArray;
        DB_Fish.prototype.Zorder = 0;
        DB_Fish.prototype.ResPng = "";
        DB_Fish.prototype.ResPlist = "";
        DB_Fish.prototype.ExportJson = "";
        DB_Fish.prototype.AimIcon = "";
        DB_Fish.prototype.GameId = 0;
        DB_Fish.prototype.Sort = 0;
        DB_Fish.prototype.FishType = 0;
        DB_Fish.prototype.RandomCoin = "";

        DB_Fish.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.NameE != null && Object.hasOwnProperty.call(m, "NameE"))
                w.uint32(26).string(m.NameE);
            if (m.Gold != null && Object.hasOwnProperty.call(m, "Gold"))
                w.uint32(32).int32(m.Gold);
            if (m.Icon != null && Object.hasOwnProperty.call(m, "Icon"))
                w.uint32(42).string(m.Icon);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Exp != null && Object.hasOwnProperty.call(m, "Exp"))
                w.uint32(56).int32(m.Exp);
            if (m.FrameCnt != null && Object.hasOwnProperty.call(m, "FrameCnt"))
                w.uint32(64).int32(m.FrameCnt);
            if (m.FrameDelay != null && Object.hasOwnProperty.call(m, "FrameDelay"))
                w.uint32(72).int32(m.FrameDelay);
            if (m.Rate != null && Object.hasOwnProperty.call(m, "Rate"))
                w.uint32(80).int32(m.Rate);
            if (m.ShowType != null && Object.hasOwnProperty.call(m, "ShowType"))
                w.uint32(88).int32(m.ShowType);
            if (m.Show != null && Object.hasOwnProperty.call(m, "Show"))
                w.uint32(96).int32(m.Show);
            if (m.ShowScale != null && Object.hasOwnProperty.call(m, "ShowScale"))
                w.uint32(104).int32(m.ShowScale);
            if (m.ShowPos != null && m.ShowPos.length) {
                w.uint32(114).fork();
                for (var i = 0; i < m.ShowPos.length; ++i)
                    w.int32(m.ShowPos[i]);
                w.ldelim();
            }
            if (m.DieSound != null && Object.hasOwnProperty.call(m, "DieSound"))
                w.uint32(122).string(m.DieSound);
            if (m.DieFrame != null && Object.hasOwnProperty.call(m, "DieFrame"))
                w.uint32(128).int32(m.DieFrame);
            if (m.DieRotate != null && Object.hasOwnProperty.call(m, "DieRotate"))
                w.uint32(136).int32(m.DieRotate);
            if (m.DieEffect != null && Object.hasOwnProperty.call(m, "DieEffect"))
                w.uint32(144).int32(m.DieEffect);
            if (m.DieShake != null && Object.hasOwnProperty.call(m, "DieShake"))
                w.uint32(152).int32(m.DieShake);
            if (m.ShakeRange != null && Object.hasOwnProperty.call(m, "ShakeRange"))
                w.uint32(160).int32(m.ShakeRange);
            if (m.Shape != null && Object.hasOwnProperty.call(m, "Shape"))
                w.uint32(170).string(m.Shape);
            if (m.IsBoss != null && Object.hasOwnProperty.call(m, "IsBoss"))
                w.uint32(176).int32(m.IsBoss);
            if (m.ResId != null && Object.hasOwnProperty.call(m, "ResId"))
                w.uint32(184).int32(m.ResId);
            if (m.DieParticle != null && Object.hasOwnProperty.call(m, "DieParticle"))
                w.uint32(194).string(m.DieParticle);
            if (m.GroupShape != null && Object.hasOwnProperty.call(m, "GroupShape"))
                w.uint32(200).int32(m.GroupShape);
            if (m.GroupFishes != null && m.GroupFishes.length) {
                w.uint32(210).fork();
                for (var i = 0; i < m.GroupFishes.length; ++i)
                    w.int32(m.GroupFishes[i]);
                w.ldelim();
            }
            if (m.Zorder != null && Object.hasOwnProperty.call(m, "Zorder"))
                w.uint32(216).int32(m.Zorder);
            if (m.ResPng != null && Object.hasOwnProperty.call(m, "ResPng"))
                w.uint32(226).string(m.ResPng);
            if (m.ResPlist != null && Object.hasOwnProperty.call(m, "ResPlist"))
                w.uint32(234).string(m.ResPlist);
            if (m.ExportJson != null && Object.hasOwnProperty.call(m, "ExportJson"))
                w.uint32(242).string(m.ExportJson);
            if (m.AimIcon != null && Object.hasOwnProperty.call(m, "AimIcon"))
                w.uint32(250).string(m.AimIcon);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(256).int32(m.GameId);
            if (m.Sort != null && Object.hasOwnProperty.call(m, "Sort"))
                w.uint32(264).int32(m.Sort);
            if (m.FishType != null && Object.hasOwnProperty.call(m, "FishType"))
                w.uint32(272).int32(m.FishType);
            if (m.RandomCoin != null && Object.hasOwnProperty.call(m, "RandomCoin"))
                w.uint32(282).string(m.RandomCoin);
            return w;
        };

        DB_Fish.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Fish();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.NameE = r.string();
                    break;
                case 4:
                    m.Gold = r.int32();
                    break;
                case 5:
                    m.Icon = r.string();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Exp = r.int32();
                    break;
                case 8:
                    m.FrameCnt = r.int32();
                    break;
                case 9:
                    m.FrameDelay = r.int32();
                    break;
                case 10:
                    m.Rate = r.int32();
                    break;
                case 11:
                    m.ShowType = r.int32();
                    break;
                case 12:
                    m.Show = r.int32();
                    break;
                case 13:
                    m.ShowScale = r.int32();
                    break;
                case 14:
                    if (!(m.ShowPos && m.ShowPos.length))
                        m.ShowPos = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ShowPos.push(r.int32());
                    } else
                        m.ShowPos.push(r.int32());
                    break;
                case 15:
                    m.DieSound = r.string();
                    break;
                case 16:
                    m.DieFrame = r.int32();
                    break;
                case 17:
                    m.DieRotate = r.int32();
                    break;
                case 18:
                    m.DieEffect = r.int32();
                    break;
                case 19:
                    m.DieShake = r.int32();
                    break;
                case 20:
                    m.ShakeRange = r.int32();
                    break;
                case 21:
                    m.Shape = r.string();
                    break;
                case 22:
                    m.IsBoss = r.int32();
                    break;
                case 23:
                    m.ResId = r.int32();
                    break;
                case 24:
                    m.DieParticle = r.string();
                    break;
                case 25:
                    m.GroupShape = r.int32();
                    break;
                case 26:
                    if (!(m.GroupFishes && m.GroupFishes.length))
                        m.GroupFishes = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.GroupFishes.push(r.int32());
                    } else
                        m.GroupFishes.push(r.int32());
                    break;
                case 27:
                    m.Zorder = r.int32();
                    break;
                case 28:
                    m.ResPng = r.string();
                    break;
                case 29:
                    m.ResPlist = r.string();
                    break;
                case 30:
                    m.ExportJson = r.string();
                    break;
                case 31:
                    m.AimIcon = r.string();
                    break;
                case 32:
                    m.GameId = r.int32();
                    break;
                case 33:
                    m.Sort = r.int32();
                    break;
                case 34:
                    m.FishType = r.int32();
                    break;
                case 35:
                    m.RandomCoin = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Fish;
    })();

    server.DB_FishArray = (function() {

        function DB_FishArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FishArray.prototype.Arr = $util.emptyArray;

        DB_FishArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Fish.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_FishArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FishArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Fish.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FishArray;
    })();

    server.DB_FishHP = (function() {

        function DB_FishHP(p) {
            this.Gold = [];
            this.Ratio1 = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FishHP.prototype.Id = 0;
        DB_FishHP.prototype.Name = "";
        DB_FishHP.prototype.Gold = $util.emptyArray;
        DB_FishHP.prototype.Rate = 0;
        DB_FishHP.prototype.Ratio = 0;
        DB_FishHP.prototype.Ratio1 = $util.emptyArray;

        DB_FishHP.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Gold != null && m.Gold.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Gold.length; ++i)
                    w.int32(m.Gold[i]);
                w.ldelim();
            }
            if (m.Rate != null && Object.hasOwnProperty.call(m, "Rate"))
                w.uint32(32).int32(m.Rate);
            if (m.Ratio != null && Object.hasOwnProperty.call(m, "Ratio"))
                w.uint32(40).int32(m.Ratio);
            if (m.Ratio1 != null && m.Ratio1.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.Ratio1.length; ++i)
                    w.int32(m.Ratio1[i]);
                w.ldelim();
            }
            return w;
        };

        DB_FishHP.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FishHP();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    if (!(m.Gold && m.Gold.length))
                        m.Gold = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Gold.push(r.int32());
                    } else
                        m.Gold.push(r.int32());
                    break;
                case 4:
                    m.Rate = r.int32();
                    break;
                case 5:
                    m.Ratio = r.int32();
                    break;
                case 6:
                    if (!(m.Ratio1 && m.Ratio1.length))
                        m.Ratio1 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Ratio1.push(r.int32());
                    } else
                        m.Ratio1.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FishHP;
    })();

    server.DB_FishHPArray = (function() {

        function DB_FishHPArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FishHPArray.prototype.Arr = $util.emptyArray;

        DB_FishHPArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_FishHP.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_FishHPArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FishHPArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_FishHP.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FishHPArray;
    })();

    server.DB_FishHP2 = (function() {

        function DB_FishHP2(p) {
            this.Gold = [];
            this.Level = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FishHP2.prototype.Id = 0;
        DB_FishHP2.prototype.Fishid = 0;
        DB_FishHP2.prototype.Name = "";
        DB_FishHP2.prototype.Gold = $util.emptyArray;
        DB_FishHP2.prototype.Level = $util.emptyArray;

        DB_FishHP2.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Fishid != null && Object.hasOwnProperty.call(m, "Fishid"))
                w.uint32(16).int32(m.Fishid);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Gold != null && m.Gold.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Gold.length; ++i)
                    w.int32(m.Gold[i]);
                w.ldelim();
            }
            if (m.Level != null && m.Level.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.Level.length; ++i)
                    w.int32(m.Level[i]);
                w.ldelim();
            }
            return w;
        };

        DB_FishHP2.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FishHP2();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Fishid = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    if (!(m.Gold && m.Gold.length))
                        m.Gold = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Gold.push(r.int32());
                    } else
                        m.Gold.push(r.int32());
                    break;
                case 5:
                    if (!(m.Level && m.Level.length))
                        m.Level = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Level.push(r.int32());
                    } else
                        m.Level.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FishHP2;
    })();

    server.DB_FishHP2Array = (function() {

        function DB_FishHP2Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FishHP2Array.prototype.Arr = $util.emptyArray;

        DB_FishHP2Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_FishHP2.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_FishHP2Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FishHP2Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_FishHP2.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FishHP2Array;
    })();

    server.DB_FishPool = (function() {

        function DB_FishPool(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FishPool.prototype.Id = 0;
        DB_FishPool.prototype.SceneType = 0;
        DB_FishPool.prototype.PoolType = 0;
        DB_FishPool.prototype.PoolMin = 0;
        DB_FishPool.prototype.PoolMax = 0;
        DB_FishPool.prototype.RateAdd = 0;

        DB_FishPool.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.SceneType != null && Object.hasOwnProperty.call(m, "SceneType"))
                w.uint32(16).int32(m.SceneType);
            if (m.PoolType != null && Object.hasOwnProperty.call(m, "PoolType"))
                w.uint32(24).int32(m.PoolType);
            if (m.PoolMin != null && Object.hasOwnProperty.call(m, "PoolMin"))
                w.uint32(32).int32(m.PoolMin);
            if (m.PoolMax != null && Object.hasOwnProperty.call(m, "PoolMax"))
                w.uint32(40).int32(m.PoolMax);
            if (m.RateAdd != null && Object.hasOwnProperty.call(m, "RateAdd"))
                w.uint32(48).int32(m.RateAdd);
            return w;
        };

        DB_FishPool.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FishPool();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.SceneType = r.int32();
                    break;
                case 3:
                    m.PoolType = r.int32();
                    break;
                case 4:
                    m.PoolMin = r.int32();
                    break;
                case 5:
                    m.PoolMax = r.int32();
                    break;
                case 6:
                    m.RateAdd = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FishPool;
    })();

    server.DB_FishPoolArray = (function() {

        function DB_FishPoolArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FishPoolArray.prototype.Arr = $util.emptyArray;

        DB_FishPoolArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_FishPool.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_FishPoolArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FishPoolArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_FishPool.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FishPoolArray;
    })();

    server.DB_FishRate = (function() {

        function DB_FishRate(p) {
            this.Gold = [];
            this.RateA = [];
            this.RateB = [];
            this.RateC = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FishRate.prototype.Id = 0;
        DB_FishRate.prototype.Name = "";
        DB_FishRate.prototype.Gold = $util.emptyArray;
        DB_FishRate.prototype.RunGold = 0;
        DB_FishRate.prototype.RateA = $util.emptyArray;
        DB_FishRate.prototype.RateB = $util.emptyArray;
        DB_FishRate.prototype.RateC = $util.emptyArray;
        DB_FishRate.prototype.PoolType = 0;

        DB_FishRate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Gold != null && m.Gold.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Gold.length; ++i)
                    w.int32(m.Gold[i]);
                w.ldelim();
            }
            if (m.RunGold != null && Object.hasOwnProperty.call(m, "RunGold"))
                w.uint32(32).int32(m.RunGold);
            if (m.RateA != null && m.RateA.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.RateA.length; ++i)
                    w.int32(m.RateA[i]);
                w.ldelim();
            }
            if (m.RateB != null && m.RateB.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.RateB.length; ++i)
                    w.int32(m.RateB[i]);
                w.ldelim();
            }
            if (m.RateC != null && m.RateC.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.RateC.length; ++i)
                    w.int32(m.RateC[i]);
                w.ldelim();
            }
            if (m.PoolType != null && Object.hasOwnProperty.call(m, "PoolType"))
                w.uint32(64).int32(m.PoolType);
            return w;
        };

        DB_FishRate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FishRate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    if (!(m.Gold && m.Gold.length))
                        m.Gold = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Gold.push(r.int32());
                    } else
                        m.Gold.push(r.int32());
                    break;
                case 4:
                    m.RunGold = r.int32();
                    break;
                case 5:
                    if (!(m.RateA && m.RateA.length))
                        m.RateA = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.RateA.push(r.int32());
                    } else
                        m.RateA.push(r.int32());
                    break;
                case 6:
                    if (!(m.RateB && m.RateB.length))
                        m.RateB = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.RateB.push(r.int32());
                    } else
                        m.RateB.push(r.int32());
                    break;
                case 7:
                    if (!(m.RateC && m.RateC.length))
                        m.RateC = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.RateC.push(r.int32());
                    } else
                        m.RateC.push(r.int32());
                    break;
                case 8:
                    m.PoolType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FishRate;
    })();

    server.DB_FishRateArray = (function() {

        function DB_FishRateArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FishRateArray.prototype.Arr = $util.emptyArray;

        DB_FishRateArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_FishRate.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_FishRateArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FishRateArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_FishRate.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FishRateArray;
    })();

    server.DB_FishRoom = (function() {

        function DB_FishRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FishRoom.prototype.Id = 0;
        DB_FishRoom.prototype.RoomId = 0;
        DB_FishRoom.prototype.Name = "";
        DB_FishRoom.prototype.SumGold1 = "";
        DB_FishRoom.prototype.SumGold2 = "";
        DB_FishRoom.prototype.SumGold3 = "";
        DB_FishRoom.prototype.SumGold4 = "";
        DB_FishRoom.prototype.SumGold5 = "";
        DB_FishRoom.prototype.BossCDTime = 0;
        DB_FishRoom.prototype.LittleBossCDTime = 0;
        DB_FishRoom.prototype.EnableBoss = "";
        DB_FishRoom.prototype.EnableLittleBoss = "";

        DB_FishRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(16).int32(m.RoomId);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.SumGold1 != null && Object.hasOwnProperty.call(m, "SumGold1"))
                w.uint32(34).string(m.SumGold1);
            if (m.SumGold2 != null && Object.hasOwnProperty.call(m, "SumGold2"))
                w.uint32(42).string(m.SumGold2);
            if (m.SumGold3 != null && Object.hasOwnProperty.call(m, "SumGold3"))
                w.uint32(50).string(m.SumGold3);
            if (m.SumGold4 != null && Object.hasOwnProperty.call(m, "SumGold4"))
                w.uint32(58).string(m.SumGold4);
            if (m.SumGold5 != null && Object.hasOwnProperty.call(m, "SumGold5"))
                w.uint32(66).string(m.SumGold5);
            if (m.BossCDTime != null && Object.hasOwnProperty.call(m, "BossCDTime"))
                w.uint32(72).int32(m.BossCDTime);
            if (m.LittleBossCDTime != null && Object.hasOwnProperty.call(m, "LittleBossCDTime"))
                w.uint32(80).int32(m.LittleBossCDTime);
            if (m.EnableBoss != null && Object.hasOwnProperty.call(m, "EnableBoss"))
                w.uint32(90).string(m.EnableBoss);
            if (m.EnableLittleBoss != null && Object.hasOwnProperty.call(m, "EnableLittleBoss"))
                w.uint32(98).string(m.EnableLittleBoss);
            return w;
        };

        DB_FishRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FishRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.RoomId = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.SumGold1 = r.string();
                    break;
                case 5:
                    m.SumGold2 = r.string();
                    break;
                case 6:
                    m.SumGold3 = r.string();
                    break;
                case 7:
                    m.SumGold4 = r.string();
                    break;
                case 8:
                    m.SumGold5 = r.string();
                    break;
                case 9:
                    m.BossCDTime = r.int32();
                    break;
                case 10:
                    m.LittleBossCDTime = r.int32();
                    break;
                case 11:
                    m.EnableBoss = r.string();
                    break;
                case 12:
                    m.EnableLittleBoss = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FishRoom;
    })();

    server.DB_FishRoomArray = (function() {

        function DB_FishRoomArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FishRoomArray.prototype.Arr = $util.emptyArray;

        DB_FishRoomArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_FishRoom.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_FishRoomArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FishRoomArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_FishRoom.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FishRoomArray;
    })();

    server.DB_FortuneGod_Odds = (function() {

        function DB_FortuneGod_Odds(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FortuneGod_Odds.prototype.Id = 0;
        DB_FortuneGod_Odds.prototype.Name = "";
        DB_FortuneGod_Odds.prototype.Rateodds3 = 0;
        DB_FortuneGod_Odds.prototype.Rateodds4 = 0;
        DB_FortuneGod_Odds.prototype.Rateodds5 = 0;

        DB_FortuneGod_Odds.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Rateodds3 != null && Object.hasOwnProperty.call(m, "Rateodds3"))
                w.uint32(24).int32(m.Rateodds3);
            if (m.Rateodds4 != null && Object.hasOwnProperty.call(m, "Rateodds4"))
                w.uint32(32).int32(m.Rateodds4);
            if (m.Rateodds5 != null && Object.hasOwnProperty.call(m, "Rateodds5"))
                w.uint32(40).int32(m.Rateodds5);
            return w;
        };

        DB_FortuneGod_Odds.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FortuneGod_Odds();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Rateodds3 = r.int32();
                    break;
                case 4:
                    m.Rateodds4 = r.int32();
                    break;
                case 5:
                    m.Rateodds5 = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FortuneGod_Odds;
    })();

    server.DB_FortuneGod_OddsArray = (function() {

        function DB_FortuneGod_OddsArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FortuneGod_OddsArray.prototype.Arr = $util.emptyArray;

        DB_FortuneGod_OddsArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_FortuneGod_Odds.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_FortuneGod_OddsArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FortuneGod_OddsArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_FortuneGod_Odds.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FortuneGod_OddsArray;
    })();

    server.DB_FortuneGod_TurnRate = (function() {

        function DB_FortuneGod_TurnRate(p) {
            this.Chance = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FortuneGod_TurnRate.prototype.Id = 0;
        DB_FortuneGod_TurnRate.prototype.ReturnRateMin = 0;
        DB_FortuneGod_TurnRate.prototype.ReturnRateMax = 0;
        DB_FortuneGod_TurnRate.prototype.Chance = $util.emptyArray;

        DB_FortuneGod_TurnRate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.ReturnRateMin != null && Object.hasOwnProperty.call(m, "ReturnRateMin"))
                w.uint32(16).int32(m.ReturnRateMin);
            if (m.ReturnRateMax != null && Object.hasOwnProperty.call(m, "ReturnRateMax"))
                w.uint32(24).int32(m.ReturnRateMax);
            if (m.Chance != null && m.Chance.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Chance.length; ++i)
                    w.int32(m.Chance[i]);
                w.ldelim();
            }
            return w;
        };

        DB_FortuneGod_TurnRate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FortuneGod_TurnRate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.ReturnRateMin = r.int32();
                    break;
                case 3:
                    m.ReturnRateMax = r.int32();
                    break;
                case 4:
                    if (!(m.Chance && m.Chance.length))
                        m.Chance = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Chance.push(r.int32());
                    } else
                        m.Chance.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FortuneGod_TurnRate;
    })();

    server.DB_FortuneGod_TurnRateArray = (function() {

        function DB_FortuneGod_TurnRateArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FortuneGod_TurnRateArray.prototype.Arr = $util.emptyArray;

        DB_FortuneGod_TurnRateArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_FortuneGod_TurnRate.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_FortuneGod_TurnRateArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FortuneGod_TurnRateArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_FortuneGod_TurnRate.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FortuneGod_TurnRateArray;
    })();

    server.DB_FortuneGod_Weight = (function() {

        function DB_FortuneGod_Weight(p) {
            this.Weight = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FortuneGod_Weight.prototype.Id = 0;
        DB_FortuneGod_Weight.prototype.Name = "";
        DB_FortuneGod_Weight.prototype.Weight = $util.emptyArray;

        DB_FortuneGod_Weight.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Weight != null && m.Weight.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Weight.length; ++i)
                    w.int32(m.Weight[i]);
                w.ldelim();
            }
            return w;
        };

        DB_FortuneGod_Weight.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FortuneGod_Weight();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    if (!(m.Weight && m.Weight.length))
                        m.Weight = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Weight.push(r.int32());
                    } else
                        m.Weight.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FortuneGod_Weight;
    })();

    server.DB_FortuneGod_WeightArray = (function() {

        function DB_FortuneGod_WeightArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FortuneGod_WeightArray.prototype.Arr = $util.emptyArray;

        DB_FortuneGod_WeightArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_FortuneGod_Weight.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_FortuneGod_WeightArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FortuneGod_WeightArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_FortuneGod_Weight.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FortuneGod_WeightArray;
    })();

    server.DB_FortuneGod_WeightCondition = (function() {

        function DB_FortuneGod_WeightCondition(p) {
            this.BetScope = [];
            this.TrueCalcRate = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FortuneGod_WeightCondition.prototype.Id = 0;
        DB_FortuneGod_WeightCondition.prototype.IsNew = 0;
        DB_FortuneGod_WeightCondition.prototype.BetScope = $util.emptyArray;
        DB_FortuneGod_WeightCondition.prototype.TrueCalcRate = $util.emptyArray;
        DB_FortuneGod_WeightCondition.prototype.WeightId = 0;

        DB_FortuneGod_WeightCondition.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.IsNew != null && Object.hasOwnProperty.call(m, "IsNew"))
                w.uint32(16).int32(m.IsNew);
            if (m.BetScope != null && m.BetScope.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.BetScope.length; ++i)
                    w.int32(m.BetScope[i]);
                w.ldelim();
            }
            if (m.TrueCalcRate != null && m.TrueCalcRate.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.TrueCalcRate.length; ++i)
                    w.int32(m.TrueCalcRate[i]);
                w.ldelim();
            }
            if (m.WeightId != null && Object.hasOwnProperty.call(m, "WeightId"))
                w.uint32(40).int32(m.WeightId);
            return w;
        };

        DB_FortuneGod_WeightCondition.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FortuneGod_WeightCondition();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.IsNew = r.int32();
                    break;
                case 3:
                    if (!(m.BetScope && m.BetScope.length))
                        m.BetScope = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.BetScope.push(r.int32());
                    } else
                        m.BetScope.push(r.int32());
                    break;
                case 4:
                    if (!(m.TrueCalcRate && m.TrueCalcRate.length))
                        m.TrueCalcRate = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.TrueCalcRate.push(r.int32());
                    } else
                        m.TrueCalcRate.push(r.int32());
                    break;
                case 5:
                    m.WeightId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FortuneGod_WeightCondition;
    })();

    server.DB_FortuneGod_WeightConditionArray = (function() {

        function DB_FortuneGod_WeightConditionArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_FortuneGod_WeightConditionArray.prototype.Arr = $util.emptyArray;

        DB_FortuneGod_WeightConditionArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_FortuneGod_WeightCondition.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_FortuneGod_WeightConditionArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_FortuneGod_WeightConditionArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_FortuneGod_WeightCondition.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_FortuneGod_WeightConditionArray;
    })();

    server.DB_GamMatchLV = (function() {

        function DB_GamMatchLV(p) {
            this.Star = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_GamMatchLV.prototype.Id = 0;
        DB_GamMatchLV.prototype.Star = $util.emptyArray;
        DB_GamMatchLV.prototype.Name = "";
        DB_GamMatchLV.prototype.Star2 = 0;
        DB_GamMatchLV.prototype.AwardType1 = 0;
        DB_GamMatchLV.prototype.AwardId1 = 0;
        DB_GamMatchLV.prototype.Number1 = 0;
        DB_GamMatchLV.prototype.AwardType2 = 0;
        DB_GamMatchLV.prototype.AwardId2 = 0;
        DB_GamMatchLV.prototype.Number2 = 0;
        DB_GamMatchLV.prototype.AwardType3 = 0;
        DB_GamMatchLV.prototype.AwardId3 = 0;
        DB_GamMatchLV.prototype.Number3 = 0;

        DB_GamMatchLV.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Star != null && m.Star.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.Star.length; ++i)
                    w.int32(m.Star[i]);
                w.ldelim();
            }
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Star2 != null && Object.hasOwnProperty.call(m, "Star2"))
                w.uint32(32).int32(m.Star2);
            if (m.AwardType1 != null && Object.hasOwnProperty.call(m, "AwardType1"))
                w.uint32(40).int32(m.AwardType1);
            if (m.AwardId1 != null && Object.hasOwnProperty.call(m, "AwardId1"))
                w.uint32(48).int32(m.AwardId1);
            if (m.Number1 != null && Object.hasOwnProperty.call(m, "Number1"))
                w.uint32(56).int32(m.Number1);
            if (m.AwardType2 != null && Object.hasOwnProperty.call(m, "AwardType2"))
                w.uint32(64).int32(m.AwardType2);
            if (m.AwardId2 != null && Object.hasOwnProperty.call(m, "AwardId2"))
                w.uint32(72).int32(m.AwardId2);
            if (m.Number2 != null && Object.hasOwnProperty.call(m, "Number2"))
                w.uint32(80).int32(m.Number2);
            if (m.AwardType3 != null && Object.hasOwnProperty.call(m, "AwardType3"))
                w.uint32(88).int32(m.AwardType3);
            if (m.AwardId3 != null && Object.hasOwnProperty.call(m, "AwardId3"))
                w.uint32(96).int32(m.AwardId3);
            if (m.Number3 != null && Object.hasOwnProperty.call(m, "Number3"))
                w.uint32(104).int32(m.Number3);
            return w;
        };

        DB_GamMatchLV.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_GamMatchLV();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    if (!(m.Star && m.Star.length))
                        m.Star = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Star.push(r.int32());
                    } else
                        m.Star.push(r.int32());
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.Star2 = r.int32();
                    break;
                case 5:
                    m.AwardType1 = r.int32();
                    break;
                case 6:
                    m.AwardId1 = r.int32();
                    break;
                case 7:
                    m.Number1 = r.int32();
                    break;
                case 8:
                    m.AwardType2 = r.int32();
                    break;
                case 9:
                    m.AwardId2 = r.int32();
                    break;
                case 10:
                    m.Number2 = r.int32();
                    break;
                case 11:
                    m.AwardType3 = r.int32();
                    break;
                case 12:
                    m.AwardId3 = r.int32();
                    break;
                case 13:
                    m.Number3 = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_GamMatchLV;
    })();

    server.DB_GamMatchLVArray = (function() {

        function DB_GamMatchLVArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_GamMatchLVArray.prototype.Arr = $util.emptyArray;

        DB_GamMatchLVArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_GamMatchLV.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_GamMatchLVArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_GamMatchLVArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_GamMatchLV.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_GamMatchLVArray;
    })();

    server.DB_GameCoinPool = (function() {

        function DB_GameCoinPool(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_GameCoinPool.prototype.Id = 0;
        DB_GameCoinPool.prototype.InitValue = 0;
        DB_GameCoinPool.prototype.LowerLimit = 0;
        DB_GameCoinPool.prototype.UpperLimit = 0;
        DB_GameCoinPool.prototype.UpperOffsetLimit = 0;
        DB_GameCoinPool.prototype.MaxOutValue = 0;
        DB_GameCoinPool.prototype.ChangeRate = 0;
        DB_GameCoinPool.prototype.MinOutPlayerNum = 0;
        DB_GameCoinPool.prototype.UpperLimitOfOdds = 0;
        DB_GameCoinPool.prototype.BaseRate = 0;
        DB_GameCoinPool.prototype.CtroRate = 0;
        DB_GameCoinPool.prototype.HardTimeMin = 0;
        DB_GameCoinPool.prototype.HardTimeMax = 0;
        DB_GameCoinPool.prototype.NormalTimeMin = 0;
        DB_GameCoinPool.prototype.NormalTimeMax = 0;
        DB_GameCoinPool.prototype.EasyTimeMin = 0;
        DB_GameCoinPool.prototype.EasyTimeMax = 0;
        DB_GameCoinPool.prototype.EasrierTimeMin = 0;
        DB_GameCoinPool.prototype.EasrierTimeMax = 0;
        DB_GameCoinPool.prototype.CpCangeType = 0;
        DB_GameCoinPool.prototype.CpChangeInterval = 0;
        DB_GameCoinPool.prototype.CpChangeTotle = 0;
        DB_GameCoinPool.prototype.CpChangeLower = 0;
        DB_GameCoinPool.prototype.CpChangeUpper = 0;
        DB_GameCoinPool.prototype.ProfitRate = 0;

        DB_GameCoinPool.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.InitValue != null && Object.hasOwnProperty.call(m, "InitValue"))
                w.uint32(16).int32(m.InitValue);
            if (m.LowerLimit != null && Object.hasOwnProperty.call(m, "LowerLimit"))
                w.uint32(24).int32(m.LowerLimit);
            if (m.UpperLimit != null && Object.hasOwnProperty.call(m, "UpperLimit"))
                w.uint32(32).int32(m.UpperLimit);
            if (m.UpperOffsetLimit != null && Object.hasOwnProperty.call(m, "UpperOffsetLimit"))
                w.uint32(40).int32(m.UpperOffsetLimit);
            if (m.MaxOutValue != null && Object.hasOwnProperty.call(m, "MaxOutValue"))
                w.uint32(48).int32(m.MaxOutValue);
            if (m.ChangeRate != null && Object.hasOwnProperty.call(m, "ChangeRate"))
                w.uint32(56).int32(m.ChangeRate);
            if (m.MinOutPlayerNum != null && Object.hasOwnProperty.call(m, "MinOutPlayerNum"))
                w.uint32(64).int32(m.MinOutPlayerNum);
            if (m.UpperLimitOfOdds != null && Object.hasOwnProperty.call(m, "UpperLimitOfOdds"))
                w.uint32(72).int32(m.UpperLimitOfOdds);
            if (m.BaseRate != null && Object.hasOwnProperty.call(m, "BaseRate"))
                w.uint32(80).int32(m.BaseRate);
            if (m.CtroRate != null && Object.hasOwnProperty.call(m, "CtroRate"))
                w.uint32(88).int32(m.CtroRate);
            if (m.HardTimeMin != null && Object.hasOwnProperty.call(m, "HardTimeMin"))
                w.uint32(96).int32(m.HardTimeMin);
            if (m.HardTimeMax != null && Object.hasOwnProperty.call(m, "HardTimeMax"))
                w.uint32(104).int32(m.HardTimeMax);
            if (m.NormalTimeMin != null && Object.hasOwnProperty.call(m, "NormalTimeMin"))
                w.uint32(112).int32(m.NormalTimeMin);
            if (m.NormalTimeMax != null && Object.hasOwnProperty.call(m, "NormalTimeMax"))
                w.uint32(120).int32(m.NormalTimeMax);
            if (m.EasyTimeMin != null && Object.hasOwnProperty.call(m, "EasyTimeMin"))
                w.uint32(128).int32(m.EasyTimeMin);
            if (m.EasyTimeMax != null && Object.hasOwnProperty.call(m, "EasyTimeMax"))
                w.uint32(136).int32(m.EasyTimeMax);
            if (m.EasrierTimeMin != null && Object.hasOwnProperty.call(m, "EasrierTimeMin"))
                w.uint32(144).int32(m.EasrierTimeMin);
            if (m.EasrierTimeMax != null && Object.hasOwnProperty.call(m, "EasrierTimeMax"))
                w.uint32(152).int32(m.EasrierTimeMax);
            if (m.CpCangeType != null && Object.hasOwnProperty.call(m, "CpCangeType"))
                w.uint32(160).int32(m.CpCangeType);
            if (m.CpChangeInterval != null && Object.hasOwnProperty.call(m, "CpChangeInterval"))
                w.uint32(168).int32(m.CpChangeInterval);
            if (m.CpChangeTotle != null && Object.hasOwnProperty.call(m, "CpChangeTotle"))
                w.uint32(176).int32(m.CpChangeTotle);
            if (m.CpChangeLower != null && Object.hasOwnProperty.call(m, "CpChangeLower"))
                w.uint32(184).int32(m.CpChangeLower);
            if (m.CpChangeUpper != null && Object.hasOwnProperty.call(m, "CpChangeUpper"))
                w.uint32(192).int32(m.CpChangeUpper);
            if (m.ProfitRate != null && Object.hasOwnProperty.call(m, "ProfitRate"))
                w.uint32(200).int32(m.ProfitRate);
            return w;
        };

        DB_GameCoinPool.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_GameCoinPool();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.InitValue = r.int32();
                    break;
                case 3:
                    m.LowerLimit = r.int32();
                    break;
                case 4:
                    m.UpperLimit = r.int32();
                    break;
                case 5:
                    m.UpperOffsetLimit = r.int32();
                    break;
                case 6:
                    m.MaxOutValue = r.int32();
                    break;
                case 7:
                    m.ChangeRate = r.int32();
                    break;
                case 8:
                    m.MinOutPlayerNum = r.int32();
                    break;
                case 9:
                    m.UpperLimitOfOdds = r.int32();
                    break;
                case 10:
                    m.BaseRate = r.int32();
                    break;
                case 11:
                    m.CtroRate = r.int32();
                    break;
                case 12:
                    m.HardTimeMin = r.int32();
                    break;
                case 13:
                    m.HardTimeMax = r.int32();
                    break;
                case 14:
                    m.NormalTimeMin = r.int32();
                    break;
                case 15:
                    m.NormalTimeMax = r.int32();
                    break;
                case 16:
                    m.EasyTimeMin = r.int32();
                    break;
                case 17:
                    m.EasyTimeMax = r.int32();
                    break;
                case 18:
                    m.EasrierTimeMin = r.int32();
                    break;
                case 19:
                    m.EasrierTimeMax = r.int32();
                    break;
                case 20:
                    m.CpCangeType = r.int32();
                    break;
                case 21:
                    m.CpChangeInterval = r.int32();
                    break;
                case 22:
                    m.CpChangeTotle = r.int32();
                    break;
                case 23:
                    m.CpChangeLower = r.int32();
                    break;
                case 24:
                    m.CpChangeUpper = r.int32();
                    break;
                case 25:
                    m.ProfitRate = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_GameCoinPool;
    })();

    server.DB_GameCoinPoolArray = (function() {

        function DB_GameCoinPoolArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_GameCoinPoolArray.prototype.Arr = $util.emptyArray;

        DB_GameCoinPoolArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_GameCoinPool.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_GameCoinPoolArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_GameCoinPoolArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_GameCoinPool.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_GameCoinPoolArray;
    })();

    server.DB_GameFree = (function() {

        function DB_GameFree(p) {
            this.Ai = [];
            this.OtherIntParams = [];
            this.Jackpot = [];
            this.RobotNumRng = [];
            this.RobotTakeCoin = [];
            this.RobotLimitCoin = [];
            this.MaxBetCoin = [];
            this.BalanceLine = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_GameFree.prototype.Id = 0;
        DB_GameFree.prototype.Name = "";
        DB_GameFree.prototype.Title = "";
        DB_GameFree.prototype.GameId = 0;
        DB_GameFree.prototype.GameMode = 0;
        DB_GameFree.prototype.GameRule = 0;
        DB_GameFree.prototype.GameType = 0;
        DB_GameFree.prototype.SceneType = 0;
        DB_GameFree.prototype.Desc = "";
        DB_GameFree.prototype.ShowType = 0;
        DB_GameFree.prototype.SubShowType = 0;
        DB_GameFree.prototype.Flag = 0;
        DB_GameFree.prototype.TestTakeCoin = 0;
        DB_GameFree.prototype.ShowId = 0;
        DB_GameFree.prototype.LimitCoin = 0;
        DB_GameFree.prototype.MaxCoinLimit = 0;
        DB_GameFree.prototype.ServiceFee = 0;
        DB_GameFree.prototype.LowerThanKick = 0;
        DB_GameFree.prototype.BaseScore = 0;
        DB_GameFree.prototype.Turn = 0;
        DB_GameFree.prototype.BetDec = "";
        DB_GameFree.prototype.Bot = 0;
        DB_GameFree.prototype.Ai = $util.emptyArray;
        DB_GameFree.prototype.Banker = 0;
        DB_GameFree.prototype.MaxChip = 0;
        DB_GameFree.prototype.OtherIntParams = $util.emptyArray;
        DB_GameFree.prototype.Jackpot = $util.emptyArray;
        DB_GameFree.prototype.RobotNumRng = $util.emptyArray;
        DB_GameFree.prototype.RobotTakeCoin = $util.emptyArray;
        DB_GameFree.prototype.RobotLimitCoin = $util.emptyArray;
        DB_GameFree.prototype.BetLimit = 0;
        DB_GameFree.prototype.TaxRate = 0;
        DB_GameFree.prototype.SameIpLimit = 0;
        DB_GameFree.prototype.SamePlaceLimit = 0;
        DB_GameFree.prototype.GameDif = "";
        DB_GameFree.prototype.GameClass = 0;
        DB_GameFree.prototype.PlatformName = "";
        DB_GameFree.prototype.MaxBetCoin = $util.emptyArray;
        DB_GameFree.prototype.PlayNumLimit = 0;
        DB_GameFree.prototype.CreateRoomNum = 0;
        DB_GameFree.prototype.MatchTrueMan = 0;
        DB_GameFree.prototype.PlayerWaterRate = 0;
        DB_GameFree.prototype.MatchMode = 0;
        DB_GameFree.prototype.KillingRate = 0;
        DB_GameFree.prototype.BetWaterRate = 0;
        DB_GameFree.prototype.Lottery = 0;
        DB_GameFree.prototype.LotteryConfig = "";
        DB_GameFree.prototype.BalanceLine = $util.emptyArray;

        DB_GameFree.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Title != null && Object.hasOwnProperty.call(m, "Title"))
                w.uint32(26).string(m.Title);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(32).int32(m.GameId);
            if (m.GameMode != null && Object.hasOwnProperty.call(m, "GameMode"))
                w.uint32(40).int32(m.GameMode);
            if (m.GameRule != null && Object.hasOwnProperty.call(m, "GameRule"))
                w.uint32(48).int32(m.GameRule);
            if (m.GameType != null && Object.hasOwnProperty.call(m, "GameType"))
                w.uint32(56).int32(m.GameType);
            if (m.SceneType != null && Object.hasOwnProperty.call(m, "SceneType"))
                w.uint32(64).int32(m.SceneType);
            if (m.Desc != null && Object.hasOwnProperty.call(m, "Desc"))
                w.uint32(74).string(m.Desc);
            if (m.ShowType != null && Object.hasOwnProperty.call(m, "ShowType"))
                w.uint32(80).int32(m.ShowType);
            if (m.SubShowType != null && Object.hasOwnProperty.call(m, "SubShowType"))
                w.uint32(88).int32(m.SubShowType);
            if (m.Flag != null && Object.hasOwnProperty.call(m, "Flag"))
                w.uint32(96).int32(m.Flag);
            if (m.TestTakeCoin != null && Object.hasOwnProperty.call(m, "TestTakeCoin"))
                w.uint32(104).int32(m.TestTakeCoin);
            if (m.ShowId != null && Object.hasOwnProperty.call(m, "ShowId"))
                w.uint32(112).int32(m.ShowId);
            if (m.LimitCoin != null && Object.hasOwnProperty.call(m, "LimitCoin"))
                w.uint32(120).int32(m.LimitCoin);
            if (m.MaxCoinLimit != null && Object.hasOwnProperty.call(m, "MaxCoinLimit"))
                w.uint32(128).int32(m.MaxCoinLimit);
            if (m.ServiceFee != null && Object.hasOwnProperty.call(m, "ServiceFee"))
                w.uint32(136).int32(m.ServiceFee);
            if (m.LowerThanKick != null && Object.hasOwnProperty.call(m, "LowerThanKick"))
                w.uint32(144).int32(m.LowerThanKick);
            if (m.BaseScore != null && Object.hasOwnProperty.call(m, "BaseScore"))
                w.uint32(152).int32(m.BaseScore);
            if (m.Turn != null && Object.hasOwnProperty.call(m, "Turn"))
                w.uint32(160).int32(m.Turn);
            if (m.BetDec != null && Object.hasOwnProperty.call(m, "BetDec"))
                w.uint32(170).string(m.BetDec);
            if (m.Bot != null && Object.hasOwnProperty.call(m, "Bot"))
                w.uint32(176).int32(m.Bot);
            if (m.Ai != null && m.Ai.length) {
                w.uint32(186).fork();
                for (var i = 0; i < m.Ai.length; ++i)
                    w.int32(m.Ai[i]);
                w.ldelim();
            }
            if (m.Banker != null && Object.hasOwnProperty.call(m, "Banker"))
                w.uint32(192).int32(m.Banker);
            if (m.MaxChip != null && Object.hasOwnProperty.call(m, "MaxChip"))
                w.uint32(200).int32(m.MaxChip);
            if (m.OtherIntParams != null && m.OtherIntParams.length) {
                w.uint32(210).fork();
                for (var i = 0; i < m.OtherIntParams.length; ++i)
                    w.int32(m.OtherIntParams[i]);
                w.ldelim();
            }
            if (m.Jackpot != null && m.Jackpot.length) {
                w.uint32(218).fork();
                for (var i = 0; i < m.Jackpot.length; ++i)
                    w.int32(m.Jackpot[i]);
                w.ldelim();
            }
            if (m.RobotNumRng != null && m.RobotNumRng.length) {
                w.uint32(226).fork();
                for (var i = 0; i < m.RobotNumRng.length; ++i)
                    w.int32(m.RobotNumRng[i]);
                w.ldelim();
            }
            if (m.RobotTakeCoin != null && m.RobotTakeCoin.length) {
                w.uint32(234).fork();
                for (var i = 0; i < m.RobotTakeCoin.length; ++i)
                    w.int32(m.RobotTakeCoin[i]);
                w.ldelim();
            }
            if (m.RobotLimitCoin != null && m.RobotLimitCoin.length) {
                w.uint32(242).fork();
                for (var i = 0; i < m.RobotLimitCoin.length; ++i)
                    w.int32(m.RobotLimitCoin[i]);
                w.ldelim();
            }
            if (m.BetLimit != null && Object.hasOwnProperty.call(m, "BetLimit"))
                w.uint32(248).int32(m.BetLimit);
            if (m.TaxRate != null && Object.hasOwnProperty.call(m, "TaxRate"))
                w.uint32(256).int32(m.TaxRate);
            if (m.SameIpLimit != null && Object.hasOwnProperty.call(m, "SameIpLimit"))
                w.uint32(264).int32(m.SameIpLimit);
            if (m.SamePlaceLimit != null && Object.hasOwnProperty.call(m, "SamePlaceLimit"))
                w.uint32(272).int32(m.SamePlaceLimit);
            if (m.GameDif != null && Object.hasOwnProperty.call(m, "GameDif"))
                w.uint32(282).string(m.GameDif);
            if (m.GameClass != null && Object.hasOwnProperty.call(m, "GameClass"))
                w.uint32(288).int32(m.GameClass);
            if (m.PlatformName != null && Object.hasOwnProperty.call(m, "PlatformName"))
                w.uint32(298).string(m.PlatformName);
            if (m.MaxBetCoin != null && m.MaxBetCoin.length) {
                w.uint32(306).fork();
                for (var i = 0; i < m.MaxBetCoin.length; ++i)
                    w.int32(m.MaxBetCoin[i]);
                w.ldelim();
            }
            if (m.PlayNumLimit != null && Object.hasOwnProperty.call(m, "PlayNumLimit"))
                w.uint32(312).int32(m.PlayNumLimit);
            if (m.CreateRoomNum != null && Object.hasOwnProperty.call(m, "CreateRoomNum"))
                w.uint32(320).int32(m.CreateRoomNum);
            if (m.MatchTrueMan != null && Object.hasOwnProperty.call(m, "MatchTrueMan"))
                w.uint32(328).int32(m.MatchTrueMan);
            if (m.PlayerWaterRate != null && Object.hasOwnProperty.call(m, "PlayerWaterRate"))
                w.uint32(336).int32(m.PlayerWaterRate);
            if (m.MatchMode != null && Object.hasOwnProperty.call(m, "MatchMode"))
                w.uint32(344).int32(m.MatchMode);
            if (m.KillingRate != null && Object.hasOwnProperty.call(m, "KillingRate"))
                w.uint32(352).int32(m.KillingRate);
            if (m.BetWaterRate != null && Object.hasOwnProperty.call(m, "BetWaterRate"))
                w.uint32(360).int32(m.BetWaterRate);
            if (m.Lottery != null && Object.hasOwnProperty.call(m, "Lottery"))
                w.uint32(368).int32(m.Lottery);
            if (m.LotteryConfig != null && Object.hasOwnProperty.call(m, "LotteryConfig"))
                w.uint32(378).string(m.LotteryConfig);
            if (m.BalanceLine != null && m.BalanceLine.length) {
                w.uint32(386).fork();
                for (var i = 0; i < m.BalanceLine.length; ++i)
                    w.int32(m.BalanceLine[i]);
                w.ldelim();
            }
            return w;
        };

        DB_GameFree.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_GameFree();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Title = r.string();
                    break;
                case 4:
                    m.GameId = r.int32();
                    break;
                case 5:
                    m.GameMode = r.int32();
                    break;
                case 6:
                    m.GameRule = r.int32();
                    break;
                case 7:
                    m.GameType = r.int32();
                    break;
                case 8:
                    m.SceneType = r.int32();
                    break;
                case 9:
                    m.Desc = r.string();
                    break;
                case 10:
                    m.ShowType = r.int32();
                    break;
                case 11:
                    m.SubShowType = r.int32();
                    break;
                case 12:
                    m.Flag = r.int32();
                    break;
                case 13:
                    m.TestTakeCoin = r.int32();
                    break;
                case 14:
                    m.ShowId = r.int32();
                    break;
                case 15:
                    m.LimitCoin = r.int32();
                    break;
                case 16:
                    m.MaxCoinLimit = r.int32();
                    break;
                case 17:
                    m.ServiceFee = r.int32();
                    break;
                case 18:
                    m.LowerThanKick = r.int32();
                    break;
                case 19:
                    m.BaseScore = r.int32();
                    break;
                case 20:
                    m.Turn = r.int32();
                    break;
                case 21:
                    m.BetDec = r.string();
                    break;
                case 22:
                    m.Bot = r.int32();
                    break;
                case 23:
                    if (!(m.Ai && m.Ai.length))
                        m.Ai = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Ai.push(r.int32());
                    } else
                        m.Ai.push(r.int32());
                    break;
                case 24:
                    m.Banker = r.int32();
                    break;
                case 25:
                    m.MaxChip = r.int32();
                    break;
                case 26:
                    if (!(m.OtherIntParams && m.OtherIntParams.length))
                        m.OtherIntParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OtherIntParams.push(r.int32());
                    } else
                        m.OtherIntParams.push(r.int32());
                    break;
                case 27:
                    if (!(m.Jackpot && m.Jackpot.length))
                        m.Jackpot = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Jackpot.push(r.int32());
                    } else
                        m.Jackpot.push(r.int32());
                    break;
                case 28:
                    if (!(m.RobotNumRng && m.RobotNumRng.length))
                        m.RobotNumRng = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.RobotNumRng.push(r.int32());
                    } else
                        m.RobotNumRng.push(r.int32());
                    break;
                case 29:
                    if (!(m.RobotTakeCoin && m.RobotTakeCoin.length))
                        m.RobotTakeCoin = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.RobotTakeCoin.push(r.int32());
                    } else
                        m.RobotTakeCoin.push(r.int32());
                    break;
                case 30:
                    if (!(m.RobotLimitCoin && m.RobotLimitCoin.length))
                        m.RobotLimitCoin = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.RobotLimitCoin.push(r.int32());
                    } else
                        m.RobotLimitCoin.push(r.int32());
                    break;
                case 31:
                    m.BetLimit = r.int32();
                    break;
                case 32:
                    m.TaxRate = r.int32();
                    break;
                case 33:
                    m.SameIpLimit = r.int32();
                    break;
                case 34:
                    m.SamePlaceLimit = r.int32();
                    break;
                case 35:
                    m.GameDif = r.string();
                    break;
                case 36:
                    m.GameClass = r.int32();
                    break;
                case 37:
                    m.PlatformName = r.string();
                    break;
                case 38:
                    if (!(m.MaxBetCoin && m.MaxBetCoin.length))
                        m.MaxBetCoin = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MaxBetCoin.push(r.int32());
                    } else
                        m.MaxBetCoin.push(r.int32());
                    break;
                case 39:
                    m.PlayNumLimit = r.int32();
                    break;
                case 40:
                    m.CreateRoomNum = r.int32();
                    break;
                case 41:
                    m.MatchTrueMan = r.int32();
                    break;
                case 42:
                    m.PlayerWaterRate = r.int32();
                    break;
                case 43:
                    m.MatchMode = r.int32();
                    break;
                case 44:
                    m.KillingRate = r.int32();
                    break;
                case 45:
                    m.BetWaterRate = r.int32();
                    break;
                case 46:
                    m.Lottery = r.int32();
                    break;
                case 47:
                    m.LotteryConfig = r.string();
                    break;
                case 48:
                    if (!(m.BalanceLine && m.BalanceLine.length))
                        m.BalanceLine = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.BalanceLine.push(r.int32());
                    } else
                        m.BalanceLine.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_GameFree;
    })();

    server.DB_GameFreeArray = (function() {

        function DB_GameFreeArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_GameFreeArray.prototype.Arr = $util.emptyArray;

        DB_GameFreeArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_GameFree.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_GameFreeArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_GameFreeArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_GameFree.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_GameFreeArray;
    })();

    server.DB_GameItem = (function() {

        function DB_GameItem(p) {
            this.ShowLocation = [];
            this.Classify = [];
            this.Effect0 = [];
            this.Effect = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_GameItem.prototype.Id = 0;
        DB_GameItem.prototype.Name = "";
        DB_GameItem.prototype.ShowLocation = $util.emptyArray;
        DB_GameItem.prototype.Classify = $util.emptyArray;
        DB_GameItem.prototype.Type = 0;
        DB_GameItem.prototype.Effect0 = $util.emptyArray;
        DB_GameItem.prototype.Effect = $util.emptyArray;
        DB_GameItem.prototype.SaleType = 0;
        DB_GameItem.prototype.SaleGold = 0;
        DB_GameItem.prototype.Composition = 0;
        DB_GameItem.prototype.CompositionMax = 0;
        DB_GameItem.prototype.Time = 0;
        DB_GameItem.prototype.Location = "";
        DB_GameItem.prototype.Describe = "";

        DB_GameItem.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.ShowLocation != null && m.ShowLocation.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.ShowLocation.length; ++i)
                    w.int32(m.ShowLocation[i]);
                w.ldelim();
            }
            if (m.Classify != null && m.Classify.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Classify.length; ++i)
                    w.int32(m.Classify[i]);
                w.ldelim();
            }
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(40).int32(m.Type);
            if (m.Effect0 != null && m.Effect0.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.Effect0.length; ++i)
                    w.int32(m.Effect0[i]);
                w.ldelim();
            }
            if (m.Effect != null && m.Effect.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.Effect.length; ++i)
                    w.int32(m.Effect[i]);
                w.ldelim();
            }
            if (m.SaleType != null && Object.hasOwnProperty.call(m, "SaleType"))
                w.uint32(64).int32(m.SaleType);
            if (m.SaleGold != null && Object.hasOwnProperty.call(m, "SaleGold"))
                w.uint32(72).int32(m.SaleGold);
            if (m.Composition != null && Object.hasOwnProperty.call(m, "Composition"))
                w.uint32(80).int32(m.Composition);
            if (m.CompositionMax != null && Object.hasOwnProperty.call(m, "CompositionMax"))
                w.uint32(88).int32(m.CompositionMax);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(96).int32(m.Time);
            if (m.Location != null && Object.hasOwnProperty.call(m, "Location"))
                w.uint32(106).string(m.Location);
            if (m.Describe != null && Object.hasOwnProperty.call(m, "Describe"))
                w.uint32(114).string(m.Describe);
            return w;
        };

        DB_GameItem.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_GameItem();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    if (!(m.ShowLocation && m.ShowLocation.length))
                        m.ShowLocation = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ShowLocation.push(r.int32());
                    } else
                        m.ShowLocation.push(r.int32());
                    break;
                case 4:
                    if (!(m.Classify && m.Classify.length))
                        m.Classify = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Classify.push(r.int32());
                    } else
                        m.Classify.push(r.int32());
                    break;
                case 5:
                    m.Type = r.int32();
                    break;
                case 6:
                    if (!(m.Effect0 && m.Effect0.length))
                        m.Effect0 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Effect0.push(r.int32());
                    } else
                        m.Effect0.push(r.int32());
                    break;
                case 7:
                    if (!(m.Effect && m.Effect.length))
                        m.Effect = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Effect.push(r.int32());
                    } else
                        m.Effect.push(r.int32());
                    break;
                case 8:
                    m.SaleType = r.int32();
                    break;
                case 9:
                    m.SaleGold = r.int32();
                    break;
                case 10:
                    m.Composition = r.int32();
                    break;
                case 11:
                    m.CompositionMax = r.int32();
                    break;
                case 12:
                    m.Time = r.int32();
                    break;
                case 13:
                    m.Location = r.string();
                    break;
                case 14:
                    m.Describe = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_GameItem;
    })();

    server.DB_GameItemArray = (function() {

        function DB_GameItemArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_GameItemArray.prototype.Arr = $util.emptyArray;

        DB_GameItemArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_GameItem.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_GameItemArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_GameItemArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_GameItem.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_GameItemArray;
    })();

    server.DB_GameRule = (function() {

        function DB_GameRule(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_GameRule.prototype.Id = 0;
        DB_GameRule.prototype.Name = "";
        DB_GameRule.prototype.GameId = 0;
        DB_GameRule.prototype.GameMode = 0;
        DB_GameRule.prototype.Params = $util.emptyArray;
        DB_GameRule.prototype.RuleDesc = "";
        DB_GameRule.prototype.GameDif = "";

        DB_GameRule.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(24).int32(m.GameId);
            if (m.GameMode != null && Object.hasOwnProperty.call(m, "GameMode"))
                w.uint32(32).int32(m.GameMode);
            if (m.Params != null && m.Params.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            if (m.RuleDesc != null && Object.hasOwnProperty.call(m, "RuleDesc"))
                w.uint32(50).string(m.RuleDesc);
            if (m.GameDif != null && Object.hasOwnProperty.call(m, "GameDif"))
                w.uint32(58).string(m.GameDif);
            return w;
        };

        DB_GameRule.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_GameRule();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.GameId = r.int32();
                    break;
                case 4:
                    m.GameMode = r.int32();
                    break;
                case 5:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                case 6:
                    m.RuleDesc = r.string();
                    break;
                case 7:
                    m.GameDif = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_GameRule;
    })();

    server.DB_GameRuleArray = (function() {

        function DB_GameRuleArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_GameRuleArray.prototype.Arr = $util.emptyArray;

        DB_GameRuleArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_GameRule.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_GameRuleArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_GameRuleArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_GameRule.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_GameRuleArray;
    })();

    server.DB_GameSubsidy = (function() {

        function DB_GameSubsidy(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_GameSubsidy.prototype.Id = 0;
        DB_GameSubsidy.prototype.LimitNum = 0;
        DB_GameSubsidy.prototype.Get = 0;
        DB_GameSubsidy.prototype.Times = 0;

        DB_GameSubsidy.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.LimitNum != null && Object.hasOwnProperty.call(m, "LimitNum"))
                w.uint32(16).int32(m.LimitNum);
            if (m.Get != null && Object.hasOwnProperty.call(m, "Get"))
                w.uint32(24).int32(m.Get);
            if (m.Times != null && Object.hasOwnProperty.call(m, "Times"))
                w.uint32(32).int32(m.Times);
            return w;
        };

        DB_GameSubsidy.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_GameSubsidy();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.LimitNum = r.int32();
                    break;
                case 3:
                    m.Get = r.int32();
                    break;
                case 4:
                    m.Times = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_GameSubsidy;
    })();

    server.DB_GameSubsidyArray = (function() {

        function DB_GameSubsidyArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_GameSubsidyArray.prototype.Arr = $util.emptyArray;

        DB_GameSubsidyArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_GameSubsidy.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_GameSubsidyArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_GameSubsidyArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_GameSubsidy.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_GameSubsidyArray;
    })();

    server.DB_Game_Drop = (function() {

        function DB_Game_Drop(p) {
            this.Amount1 = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Game_Drop.prototype.Id = 0;
        DB_Game_Drop.prototype.GameId = 0;
        DB_Game_Drop.prototype.Bet = 0;
        DB_Game_Drop.prototype.ItemName1 = 0;
        DB_Game_Drop.prototype.ItemId1 = 0;
        DB_Game_Drop.prototype.Rate1 = 0;
        DB_Game_Drop.prototype.Amount1 = $util.emptyArray;

        DB_Game_Drop.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(16).int32(m.GameId);
            if (m.Bet != null && Object.hasOwnProperty.call(m, "Bet"))
                w.uint32(24).int32(m.Bet);
            if (m.ItemName1 != null && Object.hasOwnProperty.call(m, "ItemName1"))
                w.uint32(32).int32(m.ItemName1);
            if (m.ItemId1 != null && Object.hasOwnProperty.call(m, "ItemId1"))
                w.uint32(40).int32(m.ItemId1);
            if (m.Rate1 != null && Object.hasOwnProperty.call(m, "Rate1"))
                w.uint32(48).int32(m.Rate1);
            if (m.Amount1 != null && m.Amount1.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.Amount1.length; ++i)
                    w.int32(m.Amount1[i]);
                w.ldelim();
            }
            return w;
        };

        DB_Game_Drop.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Game_Drop();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.GameId = r.int32();
                    break;
                case 3:
                    m.Bet = r.int32();
                    break;
                case 4:
                    m.ItemName1 = r.int32();
                    break;
                case 5:
                    m.ItemId1 = r.int32();
                    break;
                case 6:
                    m.Rate1 = r.int32();
                    break;
                case 7:
                    if (!(m.Amount1 && m.Amount1.length))
                        m.Amount1 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Amount1.push(r.int32());
                    } else
                        m.Amount1.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Game_Drop;
    })();

    server.DB_Game_DropArray = (function() {

        function DB_Game_DropArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Game_DropArray.prototype.Arr = $util.emptyArray;

        DB_Game_DropArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Game_Drop.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Game_DropArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Game_DropArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Game_Drop.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Game_DropArray;
    })();

    server.DB_Game_Introduction = (function() {

        function DB_Game_Introduction(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Game_Introduction.prototype.Id = 0;
        DB_Game_Introduction.prototype.Type = 0;
        DB_Game_Introduction.prototype.Name = "";
        DB_Game_Introduction.prototype.Story = "";
        DB_Game_Introduction.prototype.AwardTitle = "";
        DB_Game_Introduction.prototype.LevelMax = 0;

        DB_Game_Introduction.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(16).int32(m.Type);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Story != null && Object.hasOwnProperty.call(m, "Story"))
                w.uint32(34).string(m.Story);
            if (m.AwardTitle != null && Object.hasOwnProperty.call(m, "AwardTitle"))
                w.uint32(42).string(m.AwardTitle);
            if (m.LevelMax != null && Object.hasOwnProperty.call(m, "LevelMax"))
                w.uint32(48).int32(m.LevelMax);
            return w;
        };

        DB_Game_Introduction.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Game_Introduction();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Type = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.Story = r.string();
                    break;
                case 5:
                    m.AwardTitle = r.string();
                    break;
                case 6:
                    m.LevelMax = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Game_Introduction;
    })();

    server.DB_Game_IntroductionArray = (function() {

        function DB_Game_IntroductionArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Game_IntroductionArray.prototype.Arr = $util.emptyArray;

        DB_Game_IntroductionArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Game_Introduction.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Game_IntroductionArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Game_IntroductionArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Game_Introduction.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Game_IntroductionArray;
    })();

    server.DB_Game_Pet = (function() {

        function DB_Game_Pet(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Game_Pet.prototype.Id = 0;
        DB_Game_Pet.prototype.PetId = 0;
        DB_Game_Pet.prototype.Name = "";
        DB_Game_Pet.prototype.Grade = 0;
        DB_Game_Pet.prototype.Level = 0;
        DB_Game_Pet.prototype.Fragment = 0;
        DB_Game_Pet.prototype.Amount = 0;
        DB_Game_Pet.prototype.AwardType = 0;
        DB_Game_Pet.prototype.Award = 0;
        DB_Game_Pet.prototype.AwardRate = 0;

        DB_Game_Pet.encode = function encode(m, w) {
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
            if (m.Fragment != null && Object.hasOwnProperty.call(m, "Fragment"))
                w.uint32(48).int32(m.Fragment);
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(56).int32(m.Amount);
            if (m.AwardType != null && Object.hasOwnProperty.call(m, "AwardType"))
                w.uint32(64).int32(m.AwardType);
            if (m.Award != null && Object.hasOwnProperty.call(m, "Award"))
                w.uint32(72).int32(m.Award);
            if (m.AwardRate != null && Object.hasOwnProperty.call(m, "AwardRate"))
                w.uint32(80).int32(m.AwardRate);
            return w;
        };

        DB_Game_Pet.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Game_Pet();
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
                    m.Fragment = r.int32();
                    break;
                case 7:
                    m.Amount = r.int32();
                    break;
                case 8:
                    m.AwardType = r.int32();
                    break;
                case 9:
                    m.Award = r.int32();
                    break;
                case 10:
                    m.AwardRate = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Game_Pet;
    })();

    server.DB_Game_PetArray = (function() {

        function DB_Game_PetArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Game_PetArray.prototype.Arr = $util.emptyArray;

        DB_Game_PetArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Game_Pet.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Game_PetArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Game_PetArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Game_Pet.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Game_PetArray;
    })();

    server.DB_Game_Role = (function() {

        function DB_Game_Role(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Game_Role.prototype.Id = 0;
        DB_Game_Role.prototype.RoleId = 0;
        DB_Game_Role.prototype.Name = "";
        DB_Game_Role.prototype.Grade = 0;
        DB_Game_Role.prototype.Level = 0;
        DB_Game_Role.prototype.Fragment = 0;
        DB_Game_Role.prototype.Amount = 0;
        DB_Game_Role.prototype.AwardType = 0;
        DB_Game_Role.prototype.Award = 0;
        DB_Game_Role.prototype.AwardRate = 0;

        DB_Game_Role.encode = function encode(m, w) {
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
            if (m.Fragment != null && Object.hasOwnProperty.call(m, "Fragment"))
                w.uint32(48).int32(m.Fragment);
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(56).int32(m.Amount);
            if (m.AwardType != null && Object.hasOwnProperty.call(m, "AwardType"))
                w.uint32(64).int32(m.AwardType);
            if (m.Award != null && Object.hasOwnProperty.call(m, "Award"))
                w.uint32(72).int32(m.Award);
            if (m.AwardRate != null && Object.hasOwnProperty.call(m, "AwardRate"))
                w.uint32(80).int32(m.AwardRate);
            return w;
        };

        DB_Game_Role.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Game_Role();
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
                    m.Fragment = r.int32();
                    break;
                case 7:
                    m.Amount = r.int32();
                    break;
                case 8:
                    m.AwardType = r.int32();
                    break;
                case 9:
                    m.Award = r.int32();
                    break;
                case 10:
                    m.AwardRate = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Game_Role;
    })();

    server.DB_Game_RoleArray = (function() {

        function DB_Game_RoleArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Game_RoleArray.prototype.Arr = $util.emptyArray;

        DB_Game_RoleArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Game_Role.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Game_RoleArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Game_RoleArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Game_Role.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Game_RoleArray;
    })();

    server.DB_Legend_Odds = (function() {

        function DB_Legend_Odds(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Legend_Odds.prototype.Id = 0;
        DB_Legend_Odds.prototype.Name = "";
        DB_Legend_Odds.prototype.Rateodds3 = 0;
        DB_Legend_Odds.prototype.Rateodds4 = 0;
        DB_Legend_Odds.prototype.Rateodds5 = 0;

        DB_Legend_Odds.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Rateodds3 != null && Object.hasOwnProperty.call(m, "Rateodds3"))
                w.uint32(24).int32(m.Rateodds3);
            if (m.Rateodds4 != null && Object.hasOwnProperty.call(m, "Rateodds4"))
                w.uint32(32).int32(m.Rateodds4);
            if (m.Rateodds5 != null && Object.hasOwnProperty.call(m, "Rateodds5"))
                w.uint32(40).int32(m.Rateodds5);
            return w;
        };

        DB_Legend_Odds.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Legend_Odds();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Rateodds3 = r.int32();
                    break;
                case 4:
                    m.Rateodds4 = r.int32();
                    break;
                case 5:
                    m.Rateodds5 = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Legend_Odds;
    })();

    server.DB_Legend_OddsArray = (function() {

        function DB_Legend_OddsArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Legend_OddsArray.prototype.Arr = $util.emptyArray;

        DB_Legend_OddsArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Legend_Odds.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Legend_OddsArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Legend_OddsArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Legend_Odds.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Legend_OddsArray;
    })();

    server.DB_Legend_TurnRate = (function() {

        function DB_Legend_TurnRate(p) {
            this.Chance = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Legend_TurnRate.prototype.Id = 0;
        DB_Legend_TurnRate.prototype.ReturnRateMin = 0;
        DB_Legend_TurnRate.prototype.ReturnRateMax = 0;
        DB_Legend_TurnRate.prototype.Chance = $util.emptyArray;

        DB_Legend_TurnRate.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.ReturnRateMin != null && Object.hasOwnProperty.call(m, "ReturnRateMin"))
                w.uint32(16).int32(m.ReturnRateMin);
            if (m.ReturnRateMax != null && Object.hasOwnProperty.call(m, "ReturnRateMax"))
                w.uint32(24).int32(m.ReturnRateMax);
            if (m.Chance != null && m.Chance.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Chance.length; ++i)
                    w.int32(m.Chance[i]);
                w.ldelim();
            }
            return w;
        };

        DB_Legend_TurnRate.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Legend_TurnRate();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.ReturnRateMin = r.int32();
                    break;
                case 3:
                    m.ReturnRateMax = r.int32();
                    break;
                case 4:
                    if (!(m.Chance && m.Chance.length))
                        m.Chance = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Chance.push(r.int32());
                    } else
                        m.Chance.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Legend_TurnRate;
    })();

    server.DB_Legend_TurnRateArray = (function() {

        function DB_Legend_TurnRateArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Legend_TurnRateArray.prototype.Arr = $util.emptyArray;

        DB_Legend_TurnRateArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Legend_TurnRate.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Legend_TurnRateArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Legend_TurnRateArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Legend_TurnRate.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Legend_TurnRateArray;
    })();

    server.DB_Legend_Weight = (function() {

        function DB_Legend_Weight(p) {
            this.Weight = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Legend_Weight.prototype.Id = 0;
        DB_Legend_Weight.prototype.Name = "";
        DB_Legend_Weight.prototype.Weight = $util.emptyArray;

        DB_Legend_Weight.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Weight != null && m.Weight.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Weight.length; ++i)
                    w.int32(m.Weight[i]);
                w.ldelim();
            }
            return w;
        };

        DB_Legend_Weight.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Legend_Weight();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    if (!(m.Weight && m.Weight.length))
                        m.Weight = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Weight.push(r.int32());
                    } else
                        m.Weight.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Legend_Weight;
    })();

    server.DB_Legend_WeightArray = (function() {

        function DB_Legend_WeightArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Legend_WeightArray.prototype.Arr = $util.emptyArray;

        DB_Legend_WeightArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Legend_Weight.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Legend_WeightArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Legend_WeightArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Legend_Weight.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Legend_WeightArray;
    })();

    server.DB_Legend_WeightCondition = (function() {

        function DB_Legend_WeightCondition(p) {
            this.BetScope = [];
            this.TrueCalcRate = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Legend_WeightCondition.prototype.Id = 0;
        DB_Legend_WeightCondition.prototype.IsNew = 0;
        DB_Legend_WeightCondition.prototype.BetScope = $util.emptyArray;
        DB_Legend_WeightCondition.prototype.TrueCalcRate = $util.emptyArray;
        DB_Legend_WeightCondition.prototype.WeightId = 0;

        DB_Legend_WeightCondition.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.IsNew != null && Object.hasOwnProperty.call(m, "IsNew"))
                w.uint32(16).int32(m.IsNew);
            if (m.BetScope != null && m.BetScope.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.BetScope.length; ++i)
                    w.int32(m.BetScope[i]);
                w.ldelim();
            }
            if (m.TrueCalcRate != null && m.TrueCalcRate.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.TrueCalcRate.length; ++i)
                    w.int32(m.TrueCalcRate[i]);
                w.ldelim();
            }
            if (m.WeightId != null && Object.hasOwnProperty.call(m, "WeightId"))
                w.uint32(40).int32(m.WeightId);
            return w;
        };

        DB_Legend_WeightCondition.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Legend_WeightCondition();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.IsNew = r.int32();
                    break;
                case 3:
                    if (!(m.BetScope && m.BetScope.length))
                        m.BetScope = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.BetScope.push(r.int32());
                    } else
                        m.BetScope.push(r.int32());
                    break;
                case 4:
                    if (!(m.TrueCalcRate && m.TrueCalcRate.length))
                        m.TrueCalcRate = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.TrueCalcRate.push(r.int32());
                    } else
                        m.TrueCalcRate.push(r.int32());
                    break;
                case 5:
                    m.WeightId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Legend_WeightCondition;
    })();

    server.DB_Legend_WeightConditionArray = (function() {

        function DB_Legend_WeightConditionArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Legend_WeightConditionArray.prototype.Arr = $util.emptyArray;

        DB_Legend_WeightConditionArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Legend_WeightCondition.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Legend_WeightConditionArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Legend_WeightConditionArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Legend_WeightCondition.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Legend_WeightConditionArray;
    })();

    server.DB_Name = (function() {

        function DB_Name(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Name.prototype.Id = 0;
        DB_Name.prototype.Name = "";

        DB_Name.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            return w;
        };

        DB_Name.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Name();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Name;
    })();

    server.DB_NameArray = (function() {

        function DB_NameArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_NameArray.prototype.Arr = $util.emptyArray;

        DB_NameArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Name.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_NameArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_NameArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Name.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_NameArray;
    })();

    server.DB_NameBoy = (function() {

        function DB_NameBoy(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_NameBoy.prototype.Id = 0;
        DB_NameBoy.prototype.Name = "";

        DB_NameBoy.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            return w;
        };

        DB_NameBoy.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_NameBoy();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_NameBoy;
    })();

    server.DB_NameBoyArray = (function() {

        function DB_NameBoyArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_NameBoyArray.prototype.Arr = $util.emptyArray;

        DB_NameBoyArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_NameBoy.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_NameBoyArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_NameBoyArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_NameBoy.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_NameBoyArray;
    })();

    server.DB_NameGirl = (function() {

        function DB_NameGirl(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_NameGirl.prototype.Id = 0;
        DB_NameGirl.prototype.Name = "";

        DB_NameGirl.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            return w;
        };

        DB_NameGirl.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_NameGirl();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_NameGirl;
    })();

    server.DB_NameGirlArray = (function() {

        function DB_NameGirlArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_NameGirlArray.prototype.Arr = $util.emptyArray;

        DB_NameGirlArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_NameGirl.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_NameGirlArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_NameGirlArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_NameGirl.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_NameGirlArray;
    })();

    server.DB_PlayerInfo = (function() {

        function DB_PlayerInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_PlayerInfo.prototype.City = "";
        DB_PlayerInfo.prototype.Head = 0;
        DB_PlayerInfo.prototype.Name = "";
        DB_PlayerInfo.prototype.Sex = 0;
        DB_PlayerInfo.prototype.Id = 0;

        DB_PlayerInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.City != null && Object.hasOwnProperty.call(m, "City"))
                w.uint32(10).string(m.City);
            if (m.Head != null && Object.hasOwnProperty.call(m, "Head"))
                w.uint32(16).int32(m.Head);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Sex != null && Object.hasOwnProperty.call(m, "Sex"))
                w.uint32(32).int32(m.Sex);
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(40).int32(m.Id);
            return w;
        };

        DB_PlayerInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_PlayerInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.City = r.string();
                    break;
                case 2:
                    m.Head = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.Sex = r.int32();
                    break;
                case 5:
                    m.Id = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_PlayerInfo;
    })();

    server.DB_PlayerInfoArray = (function() {

        function DB_PlayerInfoArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_PlayerInfoArray.prototype.Arr = $util.emptyArray;

        DB_PlayerInfoArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_PlayerInfo.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_PlayerInfoArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_PlayerInfoArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_PlayerInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_PlayerInfoArray;
    })();

    server.DB_PlayerType = (function() {

        function DB_PlayerType(p) {
            this.CardValueRange = [];
            this.MatchPriority = [];
            this.ExcludeMatch = [];
            this.CardLibArr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_PlayerType.prototype.Id = 0;
        DB_PlayerType.prototype.Name = "";
        DB_PlayerType.prototype.GameFreeId = 0;
        DB_PlayerType.prototype.PayLowerLimit = 0;
        DB_PlayerType.prototype.PayUpperLimit = 0;
        DB_PlayerType.prototype.GameTimeLowerLimit = 0;
        DB_PlayerType.prototype.GameTimeUpperLimit = 0;
        DB_PlayerType.prototype.TotalInLowerLimit = 0;
        DB_PlayerType.prototype.TotalInUpperLimit = 0;
        DB_PlayerType.prototype.OddsLowerLimit = 0;
        DB_PlayerType.prototype.OddsUpperLimit = 0;
        DB_PlayerType.prototype.LuckyRate = 0;
        DB_PlayerType.prototype.ChangeCardRate = 0;
        DB_PlayerType.prototype.CardValueRange = $util.emptyArray;
        DB_PlayerType.prototype.MatchPriority = $util.emptyArray;
        DB_PlayerType.prototype.ExcludeMatch = $util.emptyArray;
        DB_PlayerType.prototype.CardLibRate = 0;
        DB_PlayerType.prototype.CardLibArr = $util.emptyArray;

        DB_PlayerType.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(24).int32(m.GameFreeId);
            if (m.PayLowerLimit != null && Object.hasOwnProperty.call(m, "PayLowerLimit"))
                w.uint32(32).int32(m.PayLowerLimit);
            if (m.PayUpperLimit != null && Object.hasOwnProperty.call(m, "PayUpperLimit"))
                w.uint32(40).int32(m.PayUpperLimit);
            if (m.GameTimeLowerLimit != null && Object.hasOwnProperty.call(m, "GameTimeLowerLimit"))
                w.uint32(48).int32(m.GameTimeLowerLimit);
            if (m.GameTimeUpperLimit != null && Object.hasOwnProperty.call(m, "GameTimeUpperLimit"))
                w.uint32(56).int32(m.GameTimeUpperLimit);
            if (m.TotalInLowerLimit != null && Object.hasOwnProperty.call(m, "TotalInLowerLimit"))
                w.uint32(64).int32(m.TotalInLowerLimit);
            if (m.TotalInUpperLimit != null && Object.hasOwnProperty.call(m, "TotalInUpperLimit"))
                w.uint32(72).int32(m.TotalInUpperLimit);
            if (m.OddsLowerLimit != null && Object.hasOwnProperty.call(m, "OddsLowerLimit"))
                w.uint32(80).int32(m.OddsLowerLimit);
            if (m.OddsUpperLimit != null && Object.hasOwnProperty.call(m, "OddsUpperLimit"))
                w.uint32(88).int32(m.OddsUpperLimit);
            if (m.LuckyRate != null && Object.hasOwnProperty.call(m, "LuckyRate"))
                w.uint32(96).int32(m.LuckyRate);
            if (m.ChangeCardRate != null && Object.hasOwnProperty.call(m, "ChangeCardRate"))
                w.uint32(104).int32(m.ChangeCardRate);
            if (m.CardValueRange != null && m.CardValueRange.length) {
                w.uint32(114).fork();
                for (var i = 0; i < m.CardValueRange.length; ++i)
                    w.int32(m.CardValueRange[i]);
                w.ldelim();
            }
            if (m.MatchPriority != null && m.MatchPriority.length) {
                w.uint32(122).fork();
                for (var i = 0; i < m.MatchPriority.length; ++i)
                    w.int32(m.MatchPriority[i]);
                w.ldelim();
            }
            if (m.ExcludeMatch != null && m.ExcludeMatch.length) {
                w.uint32(130).fork();
                for (var i = 0; i < m.ExcludeMatch.length; ++i)
                    w.int32(m.ExcludeMatch[i]);
                w.ldelim();
            }
            if (m.CardLibRate != null && Object.hasOwnProperty.call(m, "CardLibRate"))
                w.uint32(136).int32(m.CardLibRate);
            if (m.CardLibArr != null && m.CardLibArr.length) {
                w.uint32(146).fork();
                for (var i = 0; i < m.CardLibArr.length; ++i)
                    w.int32(m.CardLibArr[i]);
                w.ldelim();
            }
            return w;
        };

        DB_PlayerType.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_PlayerType();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.GameFreeId = r.int32();
                    break;
                case 4:
                    m.PayLowerLimit = r.int32();
                    break;
                case 5:
                    m.PayUpperLimit = r.int32();
                    break;
                case 6:
                    m.GameTimeLowerLimit = r.int32();
                    break;
                case 7:
                    m.GameTimeUpperLimit = r.int32();
                    break;
                case 8:
                    m.TotalInLowerLimit = r.int32();
                    break;
                case 9:
                    m.TotalInUpperLimit = r.int32();
                    break;
                case 10:
                    m.OddsLowerLimit = r.int32();
                    break;
                case 11:
                    m.OddsUpperLimit = r.int32();
                    break;
                case 12:
                    m.LuckyRate = r.int32();
                    break;
                case 13:
                    m.ChangeCardRate = r.int32();
                    break;
                case 14:
                    if (!(m.CardValueRange && m.CardValueRange.length))
                        m.CardValueRange = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.CardValueRange.push(r.int32());
                    } else
                        m.CardValueRange.push(r.int32());
                    break;
                case 15:
                    if (!(m.MatchPriority && m.MatchPriority.length))
                        m.MatchPriority = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MatchPriority.push(r.int32());
                    } else
                        m.MatchPriority.push(r.int32());
                    break;
                case 16:
                    if (!(m.ExcludeMatch && m.ExcludeMatch.length))
                        m.ExcludeMatch = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ExcludeMatch.push(r.int32());
                    } else
                        m.ExcludeMatch.push(r.int32());
                    break;
                case 17:
                    m.CardLibRate = r.int32();
                    break;
                case 18:
                    if (!(m.CardLibArr && m.CardLibArr.length))
                        m.CardLibArr = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.CardLibArr.push(r.int32());
                    } else
                        m.CardLibArr.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_PlayerType;
    })();

    server.DB_PlayerTypeArray = (function() {

        function DB_PlayerTypeArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_PlayerTypeArray.prototype.Arr = $util.emptyArray;

        DB_PlayerTypeArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_PlayerType.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_PlayerTypeArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_PlayerTypeArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_PlayerType.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_PlayerTypeArray;
    })();

    server.DB_Policy101 = (function() {

        function DB_Policy101(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy101.prototype.Id = 0;
        DB_Policy101.prototype.Time = 0;
        DB_Policy101.prototype.FishId = 0;
        DB_Policy101.prototype.Paths = $util.emptyArray;
        DB_Policy101.prototype.Count = 0;
        DB_Policy101.prototype.Speed = 0;
        DB_Policy101.prototype.Event = 0;
        DB_Policy101.prototype.RefreshInterval = 0;
        DB_Policy101.prototype.TimeToLive = 0;

        DB_Policy101.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy101.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy101();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy101;
    })();

    server.DB_Policy101Array = (function() {

        function DB_Policy101Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy101Array.prototype.Arr = $util.emptyArray;

        DB_Policy101Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy101.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy101Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy101Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy101.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy101Array;
    })();

    server.DB_Policy102 = (function() {

        function DB_Policy102(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy102.prototype.Id = 0;
        DB_Policy102.prototype.Time = 0;
        DB_Policy102.prototype.FishId = 0;
        DB_Policy102.prototype.Paths = $util.emptyArray;
        DB_Policy102.prototype.Count = 0;
        DB_Policy102.prototype.Speed = 0;
        DB_Policy102.prototype.Event = 0;
        DB_Policy102.prototype.RefreshInterval = 0;
        DB_Policy102.prototype.TimeToLive = 0;

        DB_Policy102.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy102.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy102();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy102;
    })();

    server.DB_Policy102Array = (function() {

        function DB_Policy102Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy102Array.prototype.Arr = $util.emptyArray;

        DB_Policy102Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy102.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy102Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy102Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy102.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy102Array;
    })();

    server.DB_Policy103 = (function() {

        function DB_Policy103(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy103.prototype.Id = 0;
        DB_Policy103.prototype.Time = 0;
        DB_Policy103.prototype.FishId = 0;
        DB_Policy103.prototype.Paths = $util.emptyArray;
        DB_Policy103.prototype.Count = 0;
        DB_Policy103.prototype.Speed = 0;
        DB_Policy103.prototype.Event = 0;
        DB_Policy103.prototype.RefreshInterval = 0;
        DB_Policy103.prototype.TimeToLive = 0;

        DB_Policy103.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy103.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy103();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy103;
    })();

    server.DB_Policy103Array = (function() {

        function DB_Policy103Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy103Array.prototype.Arr = $util.emptyArray;

        DB_Policy103Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy103.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy103Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy103Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy103.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy103Array;
    })();

    server.DB_Policy151 = (function() {

        function DB_Policy151(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy151.prototype.Id = 0;
        DB_Policy151.prototype.Time = 0;
        DB_Policy151.prototype.FishId = 0;
        DB_Policy151.prototype.Paths = $util.emptyArray;
        DB_Policy151.prototype.Count = 0;
        DB_Policy151.prototype.Speed = 0;
        DB_Policy151.prototype.Event = 0;
        DB_Policy151.prototype.RefreshInterval = 0;
        DB_Policy151.prototype.TimeToLive = 0;

        DB_Policy151.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy151.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy151();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy151;
    })();

    server.DB_Policy151Array = (function() {

        function DB_Policy151Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy151Array.prototype.Arr = $util.emptyArray;

        DB_Policy151Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy151.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy151Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy151Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy151.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy151Array;
    })();

    server.DB_Policy152 = (function() {

        function DB_Policy152(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy152.prototype.Id = 0;
        DB_Policy152.prototype.Time = 0;
        DB_Policy152.prototype.FishId = 0;
        DB_Policy152.prototype.Paths = $util.emptyArray;
        DB_Policy152.prototype.Count = 0;
        DB_Policy152.prototype.Speed = 0;
        DB_Policy152.prototype.Event = 0;
        DB_Policy152.prototype.RefreshInterval = 0;
        DB_Policy152.prototype.TimeToLive = 0;

        DB_Policy152.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy152.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy152();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy152;
    })();

    server.DB_Policy152Array = (function() {

        function DB_Policy152Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy152Array.prototype.Arr = $util.emptyArray;

        DB_Policy152Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy152.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy152Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy152Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy152.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy152Array;
    })();

    server.DB_Policy153 = (function() {

        function DB_Policy153(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy153.prototype.Id = 0;
        DB_Policy153.prototype.Time = 0;
        DB_Policy153.prototype.FishId = 0;
        DB_Policy153.prototype.Paths = $util.emptyArray;
        DB_Policy153.prototype.Count = 0;
        DB_Policy153.prototype.Speed = 0;
        DB_Policy153.prototype.Event = 0;
        DB_Policy153.prototype.RefreshInterval = 0;
        DB_Policy153.prototype.TimeToLive = 0;

        DB_Policy153.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy153.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy153();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy153;
    })();

    server.DB_Policy153Array = (function() {

        function DB_Policy153Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy153Array.prototype.Arr = $util.emptyArray;

        DB_Policy153Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy153.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy153Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy153Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy153.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy153Array;
    })();

    server.DB_Policy201 = (function() {

        function DB_Policy201(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy201.prototype.Id = 0;
        DB_Policy201.prototype.Time = 0;
        DB_Policy201.prototype.FishId = 0;
        DB_Policy201.prototype.Paths = $util.emptyArray;
        DB_Policy201.prototype.Count = 0;
        DB_Policy201.prototype.Speed = 0;
        DB_Policy201.prototype.Event = 0;
        DB_Policy201.prototype.RefreshInterval = 0;
        DB_Policy201.prototype.TimeToLive = 0;

        DB_Policy201.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy201.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy201();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy201;
    })();

    server.DB_Policy201Array = (function() {

        function DB_Policy201Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy201Array.prototype.Arr = $util.emptyArray;

        DB_Policy201Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy201.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy201Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy201Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy201.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy201Array;
    })();

    server.DB_Policy202 = (function() {

        function DB_Policy202(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy202.prototype.Id = 0;
        DB_Policy202.prototype.Time = 0;
        DB_Policy202.prototype.FishId = 0;
        DB_Policy202.prototype.Paths = $util.emptyArray;
        DB_Policy202.prototype.Count = 0;
        DB_Policy202.prototype.Speed = 0;
        DB_Policy202.prototype.Event = 0;
        DB_Policy202.prototype.RefreshInterval = 0;
        DB_Policy202.prototype.TimeToLive = 0;

        DB_Policy202.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy202.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy202();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy202;
    })();

    server.DB_Policy202Array = (function() {

        function DB_Policy202Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy202Array.prototype.Arr = $util.emptyArray;

        DB_Policy202Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy202.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy202Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy202Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy202.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy202Array;
    })();

    server.DB_Policy203 = (function() {

        function DB_Policy203(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy203.prototype.Id = 0;
        DB_Policy203.prototype.Time = 0;
        DB_Policy203.prototype.FishId = 0;
        DB_Policy203.prototype.Paths = $util.emptyArray;
        DB_Policy203.prototype.Count = 0;
        DB_Policy203.prototype.Speed = 0;
        DB_Policy203.prototype.Event = 0;
        DB_Policy203.prototype.RefreshInterval = 0;
        DB_Policy203.prototype.TimeToLive = 0;

        DB_Policy203.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy203.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy203();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy203;
    })();

    server.DB_Policy203Array = (function() {

        function DB_Policy203Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy203Array.prototype.Arr = $util.emptyArray;

        DB_Policy203Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy203.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy203Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy203Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy203.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy203Array;
    })();

    server.DB_Policy251 = (function() {

        function DB_Policy251(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy251.prototype.Id = 0;
        DB_Policy251.prototype.Time = 0;
        DB_Policy251.prototype.FishId = 0;
        DB_Policy251.prototype.Paths = $util.emptyArray;
        DB_Policy251.prototype.Count = 0;
        DB_Policy251.prototype.Speed = 0;
        DB_Policy251.prototype.Event = 0;
        DB_Policy251.prototype.RefreshInterval = 0;
        DB_Policy251.prototype.TimeToLive = 0;

        DB_Policy251.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy251.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy251();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy251;
    })();

    server.DB_Policy251Array = (function() {

        function DB_Policy251Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy251Array.prototype.Arr = $util.emptyArray;

        DB_Policy251Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy251.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy251Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy251Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy251.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy251Array;
    })();

    server.DB_Policy252 = (function() {

        function DB_Policy252(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy252.prototype.Id = 0;
        DB_Policy252.prototype.Time = 0;
        DB_Policy252.prototype.FishId = 0;
        DB_Policy252.prototype.Paths = $util.emptyArray;
        DB_Policy252.prototype.Count = 0;
        DB_Policy252.prototype.Speed = 0;
        DB_Policy252.prototype.Event = 0;
        DB_Policy252.prototype.RefreshInterval = 0;
        DB_Policy252.prototype.TimeToLive = 0;

        DB_Policy252.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy252.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy252();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy252;
    })();

    server.DB_Policy252Array = (function() {

        function DB_Policy252Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy252Array.prototype.Arr = $util.emptyArray;

        DB_Policy252Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy252.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy252Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy252Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy252.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy252Array;
    })();

    server.DB_Policy253 = (function() {

        function DB_Policy253(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy253.prototype.Id = 0;
        DB_Policy253.prototype.Time = 0;
        DB_Policy253.prototype.FishId = 0;
        DB_Policy253.prototype.Paths = $util.emptyArray;
        DB_Policy253.prototype.Count = 0;
        DB_Policy253.prototype.Speed = 0;
        DB_Policy253.prototype.Event = 0;
        DB_Policy253.prototype.RefreshInterval = 0;
        DB_Policy253.prototype.TimeToLive = 0;

        DB_Policy253.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy253.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy253();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy253;
    })();

    server.DB_Policy253Array = (function() {

        function DB_Policy253Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy253Array.prototype.Arr = $util.emptyArray;

        DB_Policy253Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy253.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy253Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy253Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy253.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy253Array;
    })();

    server.DB_Policy301 = (function() {

        function DB_Policy301(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy301.prototype.Id = 0;
        DB_Policy301.prototype.Time = 0;
        DB_Policy301.prototype.FishId = 0;
        DB_Policy301.prototype.Paths = $util.emptyArray;
        DB_Policy301.prototype.Count = 0;
        DB_Policy301.prototype.Speed = 0;
        DB_Policy301.prototype.Event = 0;
        DB_Policy301.prototype.RefreshInterval = 0;
        DB_Policy301.prototype.TimeToLive = 0;

        DB_Policy301.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy301.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy301();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy301;
    })();

    server.DB_Policy301Array = (function() {

        function DB_Policy301Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy301Array.prototype.Arr = $util.emptyArray;

        DB_Policy301Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy301.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy301Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy301Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy301.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy301Array;
    })();

    server.DB_Policy302 = (function() {

        function DB_Policy302(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy302.prototype.Id = 0;
        DB_Policy302.prototype.Time = 0;
        DB_Policy302.prototype.FishId = 0;
        DB_Policy302.prototype.Paths = $util.emptyArray;
        DB_Policy302.prototype.Count = 0;
        DB_Policy302.prototype.Speed = 0;
        DB_Policy302.prototype.Event = 0;
        DB_Policy302.prototype.RefreshInterval = 0;
        DB_Policy302.prototype.TimeToLive = 0;

        DB_Policy302.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy302.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy302();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy302;
    })();

    server.DB_Policy302Array = (function() {

        function DB_Policy302Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy302Array.prototype.Arr = $util.emptyArray;

        DB_Policy302Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy302.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy302Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy302Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy302.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy302Array;
    })();

    server.DB_Policy303 = (function() {

        function DB_Policy303(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy303.prototype.Id = 0;
        DB_Policy303.prototype.Time = 0;
        DB_Policy303.prototype.FishId = 0;
        DB_Policy303.prototype.Paths = $util.emptyArray;
        DB_Policy303.prototype.Count = 0;
        DB_Policy303.prototype.Speed = 0;
        DB_Policy303.prototype.Event = 0;
        DB_Policy303.prototype.RefreshInterval = 0;
        DB_Policy303.prototype.TimeToLive = 0;

        DB_Policy303.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy303.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy303();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy303;
    })();

    server.DB_Policy303Array = (function() {

        function DB_Policy303Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy303Array.prototype.Arr = $util.emptyArray;

        DB_Policy303Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy303.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy303Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy303Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy303.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy303Array;
    })();

    server.DB_Policy351 = (function() {

        function DB_Policy351(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy351.prototype.Id = 0;
        DB_Policy351.prototype.Time = 0;
        DB_Policy351.prototype.FishId = 0;
        DB_Policy351.prototype.Paths = $util.emptyArray;
        DB_Policy351.prototype.Count = 0;
        DB_Policy351.prototype.Speed = 0;
        DB_Policy351.prototype.Event = 0;
        DB_Policy351.prototype.RefreshInterval = 0;
        DB_Policy351.prototype.TimeToLive = 0;

        DB_Policy351.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy351.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy351();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy351;
    })();

    server.DB_Policy351Array = (function() {

        function DB_Policy351Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy351Array.prototype.Arr = $util.emptyArray;

        DB_Policy351Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy351.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy351Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy351Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy351.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy351Array;
    })();

    server.DB_Policy352 = (function() {

        function DB_Policy352(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy352.prototype.Id = 0;
        DB_Policy352.prototype.Time = 0;
        DB_Policy352.prototype.FishId = 0;
        DB_Policy352.prototype.Paths = $util.emptyArray;
        DB_Policy352.prototype.Count = 0;
        DB_Policy352.prototype.Speed = 0;
        DB_Policy352.prototype.Event = 0;
        DB_Policy352.prototype.RefreshInterval = 0;
        DB_Policy352.prototype.TimeToLive = 0;

        DB_Policy352.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy352.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy352();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy352;
    })();

    server.DB_Policy352Array = (function() {

        function DB_Policy352Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy352Array.prototype.Arr = $util.emptyArray;

        DB_Policy352Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy352.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy352Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy352Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy352.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy352Array;
    })();

    server.DB_Policy353 = (function() {

        function DB_Policy353(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy353.prototype.Id = 0;
        DB_Policy353.prototype.Time = 0;
        DB_Policy353.prototype.FishId = 0;
        DB_Policy353.prototype.Paths = $util.emptyArray;
        DB_Policy353.prototype.Count = 0;
        DB_Policy353.prototype.Speed = 0;
        DB_Policy353.prototype.Event = 0;
        DB_Policy353.prototype.RefreshInterval = 0;
        DB_Policy353.prototype.TimeToLive = 0;

        DB_Policy353.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy353.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy353();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy353;
    })();

    server.DB_Policy353Array = (function() {

        function DB_Policy353Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy353Array.prototype.Arr = $util.emptyArray;

        DB_Policy353Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy353.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy353Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy353Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy353.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy353Array;
    })();

    server.DB_Policy401 = (function() {

        function DB_Policy401(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy401.prototype.Id = 0;
        DB_Policy401.prototype.Time = 0;
        DB_Policy401.prototype.FishId = 0;
        DB_Policy401.prototype.Paths = $util.emptyArray;
        DB_Policy401.prototype.Count = 0;
        DB_Policy401.prototype.Speed = 0;
        DB_Policy401.prototype.Event = 0;
        DB_Policy401.prototype.RefreshInterval = 0;
        DB_Policy401.prototype.TimeToLive = 0;

        DB_Policy401.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy401.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy401();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy401;
    })();

    server.DB_Policy401Array = (function() {

        function DB_Policy401Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy401Array.prototype.Arr = $util.emptyArray;

        DB_Policy401Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy401.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy401Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy401Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy401.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy401Array;
    })();

    server.DB_Policy402 = (function() {

        function DB_Policy402(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy402.prototype.Id = 0;
        DB_Policy402.prototype.Time = 0;
        DB_Policy402.prototype.FishId = 0;
        DB_Policy402.prototype.Paths = $util.emptyArray;
        DB_Policy402.prototype.Count = 0;
        DB_Policy402.prototype.Speed = 0;
        DB_Policy402.prototype.Event = 0;
        DB_Policy402.prototype.RefreshInterval = 0;
        DB_Policy402.prototype.TimeToLive = 0;

        DB_Policy402.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy402.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy402();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy402;
    })();

    server.DB_Policy402Array = (function() {

        function DB_Policy402Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy402Array.prototype.Arr = $util.emptyArray;

        DB_Policy402Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy402.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy402Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy402Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy402.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy402Array;
    })();

    server.DB_Policy403 = (function() {

        function DB_Policy403(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy403.prototype.Id = 0;
        DB_Policy403.prototype.Time = 0;
        DB_Policy403.prototype.FishId = 0;
        DB_Policy403.prototype.Paths = $util.emptyArray;
        DB_Policy403.prototype.Count = 0;
        DB_Policy403.prototype.Speed = 0;
        DB_Policy403.prototype.Event = 0;
        DB_Policy403.prototype.RefreshInterval = 0;
        DB_Policy403.prototype.TimeToLive = 0;

        DB_Policy403.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy403.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy403();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy403;
    })();

    server.DB_Policy403Array = (function() {

        function DB_Policy403Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy403Array.prototype.Arr = $util.emptyArray;

        DB_Policy403Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy403.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy403Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy403Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy403.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy403Array;
    })();

    server.DB_Policy420 = (function() {

        function DB_Policy420(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy420.prototype.Id = 0;
        DB_Policy420.prototype.Time = 0;
        DB_Policy420.prototype.FishId = 0;
        DB_Policy420.prototype.Paths = $util.emptyArray;
        DB_Policy420.prototype.Count = 0;
        DB_Policy420.prototype.Speed = 0;
        DB_Policy420.prototype.Event = 0;
        DB_Policy420.prototype.RefreshInterval = 0;
        DB_Policy420.prototype.TimeToLive = 0;

        DB_Policy420.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy420.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy420();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy420;
    })();

    server.DB_Policy420Array = (function() {

        function DB_Policy420Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy420Array.prototype.Arr = $util.emptyArray;

        DB_Policy420Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy420.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy420Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy420Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy420.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy420Array;
    })();

    server.DB_Policy451 = (function() {

        function DB_Policy451(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy451.prototype.Id = 0;
        DB_Policy451.prototype.Time = 0;
        DB_Policy451.prototype.FishId = 0;
        DB_Policy451.prototype.Paths = $util.emptyArray;
        DB_Policy451.prototype.Count = 0;
        DB_Policy451.prototype.Speed = 0;
        DB_Policy451.prototype.Event = 0;
        DB_Policy451.prototype.RefreshInterval = 0;
        DB_Policy451.prototype.TimeToLive = 0;

        DB_Policy451.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy451.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy451();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy451;
    })();

    server.DB_Policy451Array = (function() {

        function DB_Policy451Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy451Array.prototype.Arr = $util.emptyArray;

        DB_Policy451Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy451.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy451Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy451Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy451.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy451Array;
    })();

    server.DB_Policy452 = (function() {

        function DB_Policy452(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy452.prototype.Id = 0;
        DB_Policy452.prototype.Time = 0;
        DB_Policy452.prototype.FishId = 0;
        DB_Policy452.prototype.Paths = $util.emptyArray;
        DB_Policy452.prototype.Count = 0;
        DB_Policy452.prototype.Speed = 0;
        DB_Policy452.prototype.Event = 0;
        DB_Policy452.prototype.RefreshInterval = 0;
        DB_Policy452.prototype.TimeToLive = 0;

        DB_Policy452.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy452.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy452();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy452;
    })();

    server.DB_Policy452Array = (function() {

        function DB_Policy452Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy452Array.prototype.Arr = $util.emptyArray;

        DB_Policy452Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy452.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy452Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy452Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy452.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy452Array;
    })();

    server.DB_Policy453 = (function() {

        function DB_Policy453(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy453.prototype.Id = 0;
        DB_Policy453.prototype.Time = 0;
        DB_Policy453.prototype.FishId = 0;
        DB_Policy453.prototype.Paths = $util.emptyArray;
        DB_Policy453.prototype.Count = 0;
        DB_Policy453.prototype.Speed = 0;
        DB_Policy453.prototype.Event = 0;
        DB_Policy453.prototype.RefreshInterval = 0;
        DB_Policy453.prototype.TimeToLive = 0;

        DB_Policy453.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy453.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy453();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy453;
    })();

    server.DB_Policy453Array = (function() {

        function DB_Policy453Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy453Array.prototype.Arr = $util.emptyArray;

        DB_Policy453Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy453.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy453Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy453Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy453.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy453Array;
    })();

    server.DB_Policy501 = (function() {

        function DB_Policy501(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy501.prototype.Id = 0;
        DB_Policy501.prototype.Time = 0;
        DB_Policy501.prototype.FishId = 0;
        DB_Policy501.prototype.Paths = $util.emptyArray;
        DB_Policy501.prototype.Count = 0;
        DB_Policy501.prototype.Speed = 0;
        DB_Policy501.prototype.Event = 0;
        DB_Policy501.prototype.RefreshInterval = 0;
        DB_Policy501.prototype.TimeToLive = 0;

        DB_Policy501.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy501.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy501();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy501;
    })();

    server.DB_Policy501Array = (function() {

        function DB_Policy501Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy501Array.prototype.Arr = $util.emptyArray;

        DB_Policy501Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy501.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy501Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy501Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy501.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy501Array;
    })();

    server.DB_Policy502 = (function() {

        function DB_Policy502(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy502.prototype.Id = 0;
        DB_Policy502.prototype.Time = 0;
        DB_Policy502.prototype.FishId = 0;
        DB_Policy502.prototype.Paths = $util.emptyArray;
        DB_Policy502.prototype.Count = 0;
        DB_Policy502.prototype.Speed = 0;
        DB_Policy502.prototype.Event = 0;
        DB_Policy502.prototype.RefreshInterval = 0;
        DB_Policy502.prototype.TimeToLive = 0;

        DB_Policy502.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy502.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy502();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy502;
    })();

    server.DB_Policy502Array = (function() {

        function DB_Policy502Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy502Array.prototype.Arr = $util.emptyArray;

        DB_Policy502Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy502.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy502Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy502Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy502.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy502Array;
    })();

    server.DB_Policy601 = (function() {

        function DB_Policy601(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy601.prototype.Id = 0;
        DB_Policy601.prototype.Time = 0;
        DB_Policy601.prototype.FishId = 0;
        DB_Policy601.prototype.Paths = $util.emptyArray;
        DB_Policy601.prototype.Count = 0;
        DB_Policy601.prototype.Speed = 0;
        DB_Policy601.prototype.Event = 0;
        DB_Policy601.prototype.RefreshInterval = 0;
        DB_Policy601.prototype.TimeToLive = 0;

        DB_Policy601.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy601.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy601();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy601;
    })();

    server.DB_Policy601Array = (function() {

        function DB_Policy601Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy601Array.prototype.Arr = $util.emptyArray;

        DB_Policy601Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy601.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy601Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy601Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy601.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy601Array;
    })();

    server.DB_Policy701 = (function() {

        function DB_Policy701(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy701.prototype.Id = 0;
        DB_Policy701.prototype.Time = 0;
        DB_Policy701.prototype.FishId = 0;
        DB_Policy701.prototype.Paths = $util.emptyArray;
        DB_Policy701.prototype.Count = 0;
        DB_Policy701.prototype.Speed = 0;
        DB_Policy701.prototype.Event = 0;
        DB_Policy701.prototype.RefreshInterval = 0;
        DB_Policy701.prototype.TimeToLive = 0;

        DB_Policy701.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy701.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy701();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy701;
    })();

    server.DB_Policy701Array = (function() {

        function DB_Policy701Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy701Array.prototype.Arr = $util.emptyArray;

        DB_Policy701Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy701.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy701Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy701Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy701.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy701Array;
    })();

    server.DB_Policy702 = (function() {

        function DB_Policy702(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy702.prototype.Id = 0;
        DB_Policy702.prototype.Time = 0;
        DB_Policy702.prototype.FishId = 0;
        DB_Policy702.prototype.Paths = $util.emptyArray;
        DB_Policy702.prototype.Count = 0;
        DB_Policy702.prototype.Speed = 0;
        DB_Policy702.prototype.Event = 0;
        DB_Policy702.prototype.RefreshInterval = 0;
        DB_Policy702.prototype.TimeToLive = 0;

        DB_Policy702.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy702.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy702();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy702;
    })();

    server.DB_Policy702Array = (function() {

        function DB_Policy702Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy702Array.prototype.Arr = $util.emptyArray;

        DB_Policy702Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy702.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy702Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy702Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy702.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy702Array;
    })();

    server.DB_Policy801 = (function() {

        function DB_Policy801(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy801.prototype.Id = 0;
        DB_Policy801.prototype.Time = 0;
        DB_Policy801.prototype.FishId = 0;
        DB_Policy801.prototype.Paths = $util.emptyArray;
        DB_Policy801.prototype.Count = 0;
        DB_Policy801.prototype.Speed = 0;
        DB_Policy801.prototype.Event = 0;
        DB_Policy801.prototype.RefreshInterval = 0;
        DB_Policy801.prototype.TimeToLive = 0;

        DB_Policy801.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy801.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy801();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy801;
    })();

    server.DB_Policy801Array = (function() {

        function DB_Policy801Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy801Array.prototype.Arr = $util.emptyArray;

        DB_Policy801Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy801.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy801Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy801Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy801.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy801Array;
    })();

    server.DB_Policy802 = (function() {

        function DB_Policy802(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy802.prototype.Id = 0;
        DB_Policy802.prototype.Time = 0;
        DB_Policy802.prototype.FishId = 0;
        DB_Policy802.prototype.Paths = $util.emptyArray;
        DB_Policy802.prototype.Count = 0;
        DB_Policy802.prototype.Speed = 0;
        DB_Policy802.prototype.Event = 0;
        DB_Policy802.prototype.RefreshInterval = 0;
        DB_Policy802.prototype.TimeToLive = 0;

        DB_Policy802.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy802.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy802();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy802;
    })();

    server.DB_Policy802Array = (function() {

        function DB_Policy802Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy802Array.prototype.Arr = $util.emptyArray;

        DB_Policy802Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy802.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy802Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy802Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy802.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy802Array;
    })();

    server.DB_Policy803 = (function() {

        function DB_Policy803(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy803.prototype.Id = 0;
        DB_Policy803.prototype.Time = 0;
        DB_Policy803.prototype.FishId = 0;
        DB_Policy803.prototype.Paths = $util.emptyArray;
        DB_Policy803.prototype.Count = 0;
        DB_Policy803.prototype.Speed = 0;
        DB_Policy803.prototype.Event = 0;
        DB_Policy803.prototype.RefreshInterval = 0;
        DB_Policy803.prototype.TimeToLive = 0;

        DB_Policy803.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy803.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy803();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy803;
    })();

    server.DB_Policy803Array = (function() {

        function DB_Policy803Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy803Array.prototype.Arr = $util.emptyArray;

        DB_Policy803Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy803.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy803Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy803Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy803.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy803Array;
    })();

    server.DB_Policy804 = (function() {

        function DB_Policy804(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy804.prototype.Id = 0;
        DB_Policy804.prototype.Time = 0;
        DB_Policy804.prototype.FishId = 0;
        DB_Policy804.prototype.Paths = $util.emptyArray;
        DB_Policy804.prototype.Count = 0;
        DB_Policy804.prototype.Speed = 0;
        DB_Policy804.prototype.Event = 0;
        DB_Policy804.prototype.RefreshInterval = 0;
        DB_Policy804.prototype.TimeToLive = 0;

        DB_Policy804.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy804.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy804();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy804;
    })();

    server.DB_Policy804Array = (function() {

        function DB_Policy804Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy804Array.prototype.Arr = $util.emptyArray;

        DB_Policy804Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy804.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy804Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy804Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy804.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy804Array;
    })();

    server.DB_Policy805 = (function() {

        function DB_Policy805(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy805.prototype.Id = 0;
        DB_Policy805.prototype.Time = 0;
        DB_Policy805.prototype.FishId = 0;
        DB_Policy805.prototype.Paths = $util.emptyArray;
        DB_Policy805.prototype.Count = 0;
        DB_Policy805.prototype.Speed = 0;
        DB_Policy805.prototype.Event = 0;
        DB_Policy805.prototype.RefreshInterval = 0;
        DB_Policy805.prototype.TimeToLive = 0;

        DB_Policy805.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy805.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy805();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy805;
    })();

    server.DB_Policy805Array = (function() {

        function DB_Policy805Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy805Array.prototype.Arr = $util.emptyArray;

        DB_Policy805Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy805.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy805Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy805Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy805.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy805Array;
    })();

    server.DB_Policy806 = (function() {

        function DB_Policy806(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy806.prototype.Id = 0;
        DB_Policy806.prototype.Time = 0;
        DB_Policy806.prototype.FishId = 0;
        DB_Policy806.prototype.Paths = $util.emptyArray;
        DB_Policy806.prototype.Count = 0;
        DB_Policy806.prototype.Speed = 0;
        DB_Policy806.prototype.Event = 0;
        DB_Policy806.prototype.RefreshInterval = 0;
        DB_Policy806.prototype.TimeToLive = 0;

        DB_Policy806.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy806.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy806();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy806;
    })();

    server.DB_Policy806Array = (function() {

        function DB_Policy806Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy806Array.prototype.Arr = $util.emptyArray;

        DB_Policy806Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy806.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy806Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy806Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy806.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy806Array;
    })();

    server.DB_Policy811 = (function() {

        function DB_Policy811(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy811.prototype.Id = 0;
        DB_Policy811.prototype.Time = 0;
        DB_Policy811.prototype.FishId = 0;
        DB_Policy811.prototype.Paths = $util.emptyArray;
        DB_Policy811.prototype.Count = 0;
        DB_Policy811.prototype.Speed = 0;
        DB_Policy811.prototype.Event = 0;
        DB_Policy811.prototype.RefreshInterval = 0;
        DB_Policy811.prototype.TimeToLive = 0;

        DB_Policy811.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy811.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy811();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy811;
    })();

    server.DB_Policy811Array = (function() {

        function DB_Policy811Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy811Array.prototype.Arr = $util.emptyArray;

        DB_Policy811Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy811.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy811Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy811Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy811.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy811Array;
    })();

    server.DB_Policy812 = (function() {

        function DB_Policy812(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy812.prototype.Id = 0;
        DB_Policy812.prototype.Time = 0;
        DB_Policy812.prototype.FishId = 0;
        DB_Policy812.prototype.Paths = $util.emptyArray;
        DB_Policy812.prototype.Count = 0;
        DB_Policy812.prototype.Speed = 0;
        DB_Policy812.prototype.Event = 0;
        DB_Policy812.prototype.RefreshInterval = 0;
        DB_Policy812.prototype.TimeToLive = 0;

        DB_Policy812.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy812.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy812();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy812;
    })();

    server.DB_Policy812Array = (function() {

        function DB_Policy812Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy812Array.prototype.Arr = $util.emptyArray;

        DB_Policy812Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy812.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy812Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy812Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy812.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy812Array;
    })();

    server.DB_Policy813 = (function() {

        function DB_Policy813(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy813.prototype.Id = 0;
        DB_Policy813.prototype.Time = 0;
        DB_Policy813.prototype.FishId = 0;
        DB_Policy813.prototype.Paths = $util.emptyArray;
        DB_Policy813.prototype.Count = 0;
        DB_Policy813.prototype.Speed = 0;
        DB_Policy813.prototype.Event = 0;
        DB_Policy813.prototype.RefreshInterval = 0;
        DB_Policy813.prototype.TimeToLive = 0;

        DB_Policy813.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy813.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy813();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy813;
    })();

    server.DB_Policy813Array = (function() {

        function DB_Policy813Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy813Array.prototype.Arr = $util.emptyArray;

        DB_Policy813Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy813.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy813Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy813Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy813.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy813Array;
    })();

    server.DB_Policy814 = (function() {

        function DB_Policy814(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy814.prototype.Id = 0;
        DB_Policy814.prototype.Time = 0;
        DB_Policy814.prototype.FishId = 0;
        DB_Policy814.prototype.Paths = $util.emptyArray;
        DB_Policy814.prototype.Count = 0;
        DB_Policy814.prototype.Speed = 0;
        DB_Policy814.prototype.Event = 0;
        DB_Policy814.prototype.RefreshInterval = 0;
        DB_Policy814.prototype.TimeToLive = 0;

        DB_Policy814.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy814.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy814();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy814;
    })();

    server.DB_Policy814Array = (function() {

        function DB_Policy814Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy814Array.prototype.Arr = $util.emptyArray;

        DB_Policy814Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy814.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy814Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy814Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy814.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy814Array;
    })();

    server.DB_Policy815 = (function() {

        function DB_Policy815(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy815.prototype.Id = 0;
        DB_Policy815.prototype.Time = 0;
        DB_Policy815.prototype.FishId = 0;
        DB_Policy815.prototype.Paths = $util.emptyArray;
        DB_Policy815.prototype.Count = 0;
        DB_Policy815.prototype.Speed = 0;
        DB_Policy815.prototype.Event = 0;
        DB_Policy815.prototype.RefreshInterval = 0;
        DB_Policy815.prototype.TimeToLive = 0;

        DB_Policy815.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy815.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy815();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy815;
    })();

    server.DB_Policy815Array = (function() {

        function DB_Policy815Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy815Array.prototype.Arr = $util.emptyArray;

        DB_Policy815Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy815.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy815Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy815Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy815.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy815Array;
    })();

    server.DB_Policy816 = (function() {

        function DB_Policy816(p) {
            this.Paths = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy816.prototype.Id = 0;
        DB_Policy816.prototype.Time = 0;
        DB_Policy816.prototype.FishId = 0;
        DB_Policy816.prototype.Paths = $util.emptyArray;
        DB_Policy816.prototype.Count = 0;
        DB_Policy816.prototype.Speed = 0;
        DB_Policy816.prototype.Event = 0;
        DB_Policy816.prototype.RefreshInterval = 0;
        DB_Policy816.prototype.TimeToLive = 0;

        DB_Policy816.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Time != null && Object.hasOwnProperty.call(m, "Time"))
                w.uint32(16).int32(m.Time);
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(24).int32(m.FishId);
            if (m.Paths != null && m.Paths.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Paths.length; ++i)
                    w.int32(m.Paths[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            if (m.Speed != null && Object.hasOwnProperty.call(m, "Speed"))
                w.uint32(48).int32(m.Speed);
            if (m.Event != null && Object.hasOwnProperty.call(m, "Event"))
                w.uint32(56).int32(m.Event);
            if (m.RefreshInterval != null && Object.hasOwnProperty.call(m, "RefreshInterval"))
                w.uint32(64).int32(m.RefreshInterval);
            if (m.TimeToLive != null && Object.hasOwnProperty.call(m, "TimeToLive"))
                w.uint32(72).int32(m.TimeToLive);
            return w;
        };

        DB_Policy816.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy816();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Time = r.int32();
                    break;
                case 3:
                    m.FishId = r.int32();
                    break;
                case 4:
                    if (!(m.Paths && m.Paths.length))
                        m.Paths = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Paths.push(r.int32());
                    } else
                        m.Paths.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                case 6:
                    m.Speed = r.int32();
                    break;
                case 7:
                    m.Event = r.int32();
                    break;
                case 8:
                    m.RefreshInterval = r.int32();
                    break;
                case 9:
                    m.TimeToLive = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy816;
    })();

    server.DB_Policy816Array = (function() {

        function DB_Policy816Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Policy816Array.prototype.Arr = $util.emptyArray;

        DB_Policy816Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Policy816.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Policy816Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Policy816Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Policy816.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Policy816Array;
    })();

    server.DB_RobotGame = (function() {

        function DB_RobotGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_RobotGame.prototype.Id = 0;
        DB_RobotGame.prototype.EnterCoin = 0;
        DB_RobotGame.prototype.LeaveCoin = 0;
        DB_RobotGame.prototype.GameTimes = 0;

        DB_RobotGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.EnterCoin != null && Object.hasOwnProperty.call(m, "EnterCoin"))
                w.uint32(16).int32(m.EnterCoin);
            if (m.LeaveCoin != null && Object.hasOwnProperty.call(m, "LeaveCoin"))
                w.uint32(24).int32(m.LeaveCoin);
            if (m.GameTimes != null && Object.hasOwnProperty.call(m, "GameTimes"))
                w.uint32(32).int32(m.GameTimes);
            return w;
        };

        DB_RobotGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_RobotGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.EnterCoin = r.int32();
                    break;
                case 3:
                    m.LeaveCoin = r.int32();
                    break;
                case 4:
                    m.GameTimes = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_RobotGame;
    })();

    server.DB_RobotGameArray = (function() {

        function DB_RobotGameArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_RobotGameArray.prototype.Arr = $util.emptyArray;

        DB_RobotGameArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_RobotGame.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_RobotGameArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_RobotGameArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_RobotGame.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_RobotGameArray;
    })();

    server.DB_Sensitive_Words = (function() {

        function DB_Sensitive_Words(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Sensitive_Words.prototype.Id = 0;
        DB_Sensitive_Words.prototype.Sensitive_Words = "";

        DB_Sensitive_Words.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Sensitive_Words != null && Object.hasOwnProperty.call(m, "Sensitive_Words"))
                w.uint32(18).string(m.Sensitive_Words);
            return w;
        };

        DB_Sensitive_Words.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Sensitive_Words();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Sensitive_Words = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Sensitive_Words;
    })();

    server.DB_Sensitive_WordsArray = (function() {

        function DB_Sensitive_WordsArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Sensitive_WordsArray.prototype.Arr = $util.emptyArray;

        DB_Sensitive_WordsArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Sensitive_Words.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Sensitive_WordsArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Sensitive_WordsArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Sensitive_Words.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Sensitive_WordsArray;
    })();

    server.DB_Shop = (function() {

        function DB_Shop(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Shop.prototype.Id = 0;
        DB_Shop.prototype.ShowType = 0;
        DB_Shop.prototype.Name = "";
        DB_Shop.prototype.Picture = "";
        DB_Shop.prototype.Desc = "";
        DB_Shop.prototype.Group = 0;
        DB_Shop.prototype.Rebate = 0;
        DB_Shop.prototype.Turn = 0;
        DB_Shop.prototype.Special = 0;
        DB_Shop.prototype.Costype = 0;
        DB_Shop.prototype.Costp = 0;
        DB_Shop.prototype.Cost = 0;
        DB_Shop.prototype.Typee = 0;
        DB_Shop.prototype.PropId = 0;
        DB_Shop.prototype.Value = 0;
        DB_Shop.prototype.Getype = 0;
        DB_Shop.prototype.Tpyes = 0;
        DB_Shop.prototype.Max = 0;
        DB_Shop.prototype.ConditionId = 0;
        DB_Shop.prototype.Reload = 0;
        DB_Shop.prototype.Amount = 0;
        DB_Shop.prototype.TimesLimit = 0;
        DB_Shop.prototype.DayLimit = 0;
        DB_Shop.prototype.PT_ItemCode = "";
        DB_Shop.prototype.PayPlatform_Flag = "";

        DB_Shop.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.ShowType != null && Object.hasOwnProperty.call(m, "ShowType"))
                w.uint32(16).int32(m.ShowType);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(26).string(m.Name);
            if (m.Picture != null && Object.hasOwnProperty.call(m, "Picture"))
                w.uint32(34).string(m.Picture);
            if (m.Desc != null && Object.hasOwnProperty.call(m, "Desc"))
                w.uint32(42).string(m.Desc);
            if (m.Group != null && Object.hasOwnProperty.call(m, "Group"))
                w.uint32(48).int32(m.Group);
            if (m.Rebate != null && Object.hasOwnProperty.call(m, "Rebate"))
                w.uint32(56).int32(m.Rebate);
            if (m.Turn != null && Object.hasOwnProperty.call(m, "Turn"))
                w.uint32(64).int32(m.Turn);
            if (m.Special != null && Object.hasOwnProperty.call(m, "Special"))
                w.uint32(72).int32(m.Special);
            if (m.Costype != null && Object.hasOwnProperty.call(m, "Costype"))
                w.uint32(80).int32(m.Costype);
            if (m.Costp != null && Object.hasOwnProperty.call(m, "Costp"))
                w.uint32(88).int32(m.Costp);
            if (m.Cost != null && Object.hasOwnProperty.call(m, "Cost"))
                w.uint32(96).int32(m.Cost);
            if (m.Typee != null && Object.hasOwnProperty.call(m, "Typee"))
                w.uint32(104).int32(m.Typee);
            if (m.PropId != null && Object.hasOwnProperty.call(m, "PropId"))
                w.uint32(112).int32(m.PropId);
            if (m.Value != null && Object.hasOwnProperty.call(m, "Value"))
                w.uint32(120).int32(m.Value);
            if (m.Getype != null && Object.hasOwnProperty.call(m, "Getype"))
                w.uint32(128).int32(m.Getype);
            if (m.Tpyes != null && Object.hasOwnProperty.call(m, "Tpyes"))
                w.uint32(136).int32(m.Tpyes);
            if (m.Max != null && Object.hasOwnProperty.call(m, "Max"))
                w.uint32(144).int32(m.Max);
            if (m.ConditionId != null && Object.hasOwnProperty.call(m, "ConditionId"))
                w.uint32(152).int32(m.ConditionId);
            if (m.Reload != null && Object.hasOwnProperty.call(m, "Reload"))
                w.uint32(160).int32(m.Reload);
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(168).int32(m.Amount);
            if (m.TimesLimit != null && Object.hasOwnProperty.call(m, "TimesLimit"))
                w.uint32(176).int32(m.TimesLimit);
            if (m.DayLimit != null && Object.hasOwnProperty.call(m, "DayLimit"))
                w.uint32(184).int32(m.DayLimit);
            if (m.PT_ItemCode != null && Object.hasOwnProperty.call(m, "PT_ItemCode"))
                w.uint32(194).string(m.PT_ItemCode);
            if (m.PayPlatform_Flag != null && Object.hasOwnProperty.call(m, "PayPlatform_Flag"))
                w.uint32(202).string(m.PayPlatform_Flag);
            return w;
        };

        DB_Shop.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Shop();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.ShowType = r.int32();
                    break;
                case 3:
                    m.Name = r.string();
                    break;
                case 4:
                    m.Picture = r.string();
                    break;
                case 5:
                    m.Desc = r.string();
                    break;
                case 6:
                    m.Group = r.int32();
                    break;
                case 7:
                    m.Rebate = r.int32();
                    break;
                case 8:
                    m.Turn = r.int32();
                    break;
                case 9:
                    m.Special = r.int32();
                    break;
                case 10:
                    m.Costype = r.int32();
                    break;
                case 11:
                    m.Costp = r.int32();
                    break;
                case 12:
                    m.Cost = r.int32();
                    break;
                case 13:
                    m.Typee = r.int32();
                    break;
                case 14:
                    m.PropId = r.int32();
                    break;
                case 15:
                    m.Value = r.int32();
                    break;
                case 16:
                    m.Getype = r.int32();
                    break;
                case 17:
                    m.Tpyes = r.int32();
                    break;
                case 18:
                    m.Max = r.int32();
                    break;
                case 19:
                    m.ConditionId = r.int32();
                    break;
                case 20:
                    m.Reload = r.int32();
                    break;
                case 21:
                    m.Amount = r.int32();
                    break;
                case 22:
                    m.TimesLimit = r.int32();
                    break;
                case 23:
                    m.DayLimit = r.int32();
                    break;
                case 24:
                    m.PT_ItemCode = r.string();
                    break;
                case 25:
                    m.PayPlatform_Flag = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Shop;
    })();

    server.DB_ShopArray = (function() {

        function DB_ShopArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_ShopArray.prototype.Arr = $util.emptyArray;

        DB_ShopArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Shop.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_ShopArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_ShopArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Shop.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_ShopArray;
    })();

    server.DB_Shop1 = (function() {

        function DB_Shop1(p) {
            this.Location = [];
            this.CoolingTime = [];
            this.Label = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Shop1.prototype.Id = 0;
        DB_Shop1.prototype.ItemId = 0;
        DB_Shop1.prototype.Page = 0;
        DB_Shop1.prototype.Order = 0;
        DB_Shop1.prototype.Type = 0;
        DB_Shop1.prototype.Location = $util.emptyArray;
        DB_Shop1.prototype.Picture = "";
        DB_Shop1.prototype.Name = "";
        DB_Shop1.prototype.Ad = 0;
        DB_Shop1.prototype.AdTime = 0;
        DB_Shop1.prototype.RepeatTimes = 0;
        DB_Shop1.prototype.CoolingTime = $util.emptyArray;
        DB_Shop1.prototype.Label = $util.emptyArray;
        DB_Shop1.prototype.Added = 0;
        DB_Shop1.prototype.Amount = 0;
        DB_Shop1.prototype.Consume = 0;
        DB_Shop1.prototype.ConsumptionAmount = 0;

        DB_Shop1.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.ItemId != null && Object.hasOwnProperty.call(m, "ItemId"))
                w.uint32(16).int32(m.ItemId);
            if (m.Page != null && Object.hasOwnProperty.call(m, "Page"))
                w.uint32(24).int32(m.Page);
            if (m.Order != null && Object.hasOwnProperty.call(m, "Order"))
                w.uint32(32).int32(m.Order);
            if (m.Type != null && Object.hasOwnProperty.call(m, "Type"))
                w.uint32(40).int32(m.Type);
            if (m.Location != null && m.Location.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.Location.length; ++i)
                    w.int32(m.Location[i]);
                w.ldelim();
            }
            if (m.Picture != null && Object.hasOwnProperty.call(m, "Picture"))
                w.uint32(58).string(m.Picture);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(66).string(m.Name);
            if (m.Ad != null && Object.hasOwnProperty.call(m, "Ad"))
                w.uint32(72).int32(m.Ad);
            if (m.AdTime != null && Object.hasOwnProperty.call(m, "AdTime"))
                w.uint32(80).int32(m.AdTime);
            if (m.RepeatTimes != null && Object.hasOwnProperty.call(m, "RepeatTimes"))
                w.uint32(88).int32(m.RepeatTimes);
            if (m.CoolingTime != null && m.CoolingTime.length) {
                w.uint32(98).fork();
                for (var i = 0; i < m.CoolingTime.length; ++i)
                    w.int32(m.CoolingTime[i]);
                w.ldelim();
            }
            if (m.Label != null && m.Label.length) {
                w.uint32(106).fork();
                for (var i = 0; i < m.Label.length; ++i)
                    w.int32(m.Label[i]);
                w.ldelim();
            }
            if (m.Added != null && Object.hasOwnProperty.call(m, "Added"))
                w.uint32(112).int32(m.Added);
            if (m.Amount != null && Object.hasOwnProperty.call(m, "Amount"))
                w.uint32(120).int32(m.Amount);
            if (m.Consume != null && Object.hasOwnProperty.call(m, "Consume"))
                w.uint32(128).int32(m.Consume);
            if (m.ConsumptionAmount != null && Object.hasOwnProperty.call(m, "ConsumptionAmount"))
                w.uint32(136).int32(m.ConsumptionAmount);
            return w;
        };

        DB_Shop1.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Shop1();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.ItemId = r.int32();
                    break;
                case 3:
                    m.Page = r.int32();
                    break;
                case 4:
                    m.Order = r.int32();
                    break;
                case 5:
                    m.Type = r.int32();
                    break;
                case 6:
                    if (!(m.Location && m.Location.length))
                        m.Location = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Location.push(r.int32());
                    } else
                        m.Location.push(r.int32());
                    break;
                case 7:
                    m.Picture = r.string();
                    break;
                case 8:
                    m.Name = r.string();
                    break;
                case 9:
                    m.Ad = r.int32();
                    break;
                case 10:
                    m.AdTime = r.int32();
                    break;
                case 11:
                    m.RepeatTimes = r.int32();
                    break;
                case 12:
                    if (!(m.CoolingTime && m.CoolingTime.length))
                        m.CoolingTime = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.CoolingTime.push(r.int32());
                    } else
                        m.CoolingTime.push(r.int32());
                    break;
                case 13:
                    if (!(m.Label && m.Label.length))
                        m.Label = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Label.push(r.int32());
                    } else
                        m.Label.push(r.int32());
                    break;
                case 14:
                    m.Added = r.int32();
                    break;
                case 15:
                    m.Amount = r.int32();
                    break;
                case 16:
                    m.Consume = r.int32();
                    break;
                case 17:
                    m.ConsumptionAmount = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Shop1;
    })();

    server.DB_Shop1Array = (function() {

        function DB_Shop1Array(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Shop1Array.prototype.Arr = $util.emptyArray;

        DB_Shop1Array.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Shop1.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_Shop1Array.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Shop1Array();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Shop1.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Shop1Array;
    })();

    server.DB_SlotRateWeight = (function() {

        function DB_SlotRateWeight(p) {
            this.NormCol1 = [];
            this.NormCol2 = [];
            this.NormCol3 = [];
            this.NormCol4 = [];
            this.NormCol5 = [];
            this.FreeCol1 = [];
            this.FreeCol2 = [];
            this.FreeCol3 = [];
            this.FreeCol4 = [];
            this.FreeCol5 = [];
            this.MaryOut = [];
            this.MaryMid = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_SlotRateWeight.prototype.Id = 0;
        DB_SlotRateWeight.prototype.Sortid = 0;
        DB_SlotRateWeight.prototype.NormCol1 = $util.emptyArray;
        DB_SlotRateWeight.prototype.NormCol2 = $util.emptyArray;
        DB_SlotRateWeight.prototype.NormCol3 = $util.emptyArray;
        DB_SlotRateWeight.prototype.NormCol4 = $util.emptyArray;
        DB_SlotRateWeight.prototype.NormCol5 = $util.emptyArray;
        DB_SlotRateWeight.prototype.FreeCol1 = $util.emptyArray;
        DB_SlotRateWeight.prototype.FreeCol2 = $util.emptyArray;
        DB_SlotRateWeight.prototype.FreeCol3 = $util.emptyArray;
        DB_SlotRateWeight.prototype.FreeCol4 = $util.emptyArray;
        DB_SlotRateWeight.prototype.FreeCol5 = $util.emptyArray;
        DB_SlotRateWeight.prototype.MaryOut = $util.emptyArray;
        DB_SlotRateWeight.prototype.MaryMid = $util.emptyArray;

        DB_SlotRateWeight.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Sortid != null && Object.hasOwnProperty.call(m, "Sortid"))
                w.uint32(16).int32(m.Sortid);
            if (m.NormCol1 != null && m.NormCol1.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.NormCol1.length; ++i)
                    w.int32(m.NormCol1[i]);
                w.ldelim();
            }
            if (m.NormCol2 != null && m.NormCol2.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.NormCol2.length; ++i)
                    w.int32(m.NormCol2[i]);
                w.ldelim();
            }
            if (m.NormCol3 != null && m.NormCol3.length) {
                w.uint32(42).fork();
                for (var i = 0; i < m.NormCol3.length; ++i)
                    w.int32(m.NormCol3[i]);
                w.ldelim();
            }
            if (m.NormCol4 != null && m.NormCol4.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.NormCol4.length; ++i)
                    w.int32(m.NormCol4[i]);
                w.ldelim();
            }
            if (m.NormCol5 != null && m.NormCol5.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.NormCol5.length; ++i)
                    w.int32(m.NormCol5[i]);
                w.ldelim();
            }
            if (m.FreeCol1 != null && m.FreeCol1.length) {
                w.uint32(66).fork();
                for (var i = 0; i < m.FreeCol1.length; ++i)
                    w.int32(m.FreeCol1[i]);
                w.ldelim();
            }
            if (m.FreeCol2 != null && m.FreeCol2.length) {
                w.uint32(74).fork();
                for (var i = 0; i < m.FreeCol2.length; ++i)
                    w.int32(m.FreeCol2[i]);
                w.ldelim();
            }
            if (m.FreeCol3 != null && m.FreeCol3.length) {
                w.uint32(82).fork();
                for (var i = 0; i < m.FreeCol3.length; ++i)
                    w.int32(m.FreeCol3[i]);
                w.ldelim();
            }
            if (m.FreeCol4 != null && m.FreeCol4.length) {
                w.uint32(90).fork();
                for (var i = 0; i < m.FreeCol4.length; ++i)
                    w.int32(m.FreeCol4[i]);
                w.ldelim();
            }
            if (m.FreeCol5 != null && m.FreeCol5.length) {
                w.uint32(98).fork();
                for (var i = 0; i < m.FreeCol5.length; ++i)
                    w.int32(m.FreeCol5[i]);
                w.ldelim();
            }
            if (m.MaryOut != null && m.MaryOut.length) {
                w.uint32(106).fork();
                for (var i = 0; i < m.MaryOut.length; ++i)
                    w.int32(m.MaryOut[i]);
                w.ldelim();
            }
            if (m.MaryMid != null && m.MaryMid.length) {
                w.uint32(114).fork();
                for (var i = 0; i < m.MaryMid.length; ++i)
                    w.int32(m.MaryMid[i]);
                w.ldelim();
            }
            return w;
        };

        DB_SlotRateWeight.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_SlotRateWeight();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Sortid = r.int32();
                    break;
                case 3:
                    if (!(m.NormCol1 && m.NormCol1.length))
                        m.NormCol1 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.NormCol1.push(r.int32());
                    } else
                        m.NormCol1.push(r.int32());
                    break;
                case 4:
                    if (!(m.NormCol2 && m.NormCol2.length))
                        m.NormCol2 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.NormCol2.push(r.int32());
                    } else
                        m.NormCol2.push(r.int32());
                    break;
                case 5:
                    if (!(m.NormCol3 && m.NormCol3.length))
                        m.NormCol3 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.NormCol3.push(r.int32());
                    } else
                        m.NormCol3.push(r.int32());
                    break;
                case 6:
                    if (!(m.NormCol4 && m.NormCol4.length))
                        m.NormCol4 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.NormCol4.push(r.int32());
                    } else
                        m.NormCol4.push(r.int32());
                    break;
                case 7:
                    if (!(m.NormCol5 && m.NormCol5.length))
                        m.NormCol5 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.NormCol5.push(r.int32());
                    } else
                        m.NormCol5.push(r.int32());
                    break;
                case 8:
                    if (!(m.FreeCol1 && m.FreeCol1.length))
                        m.FreeCol1 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.FreeCol1.push(r.int32());
                    } else
                        m.FreeCol1.push(r.int32());
                    break;
                case 9:
                    if (!(m.FreeCol2 && m.FreeCol2.length))
                        m.FreeCol2 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.FreeCol2.push(r.int32());
                    } else
                        m.FreeCol2.push(r.int32());
                    break;
                case 10:
                    if (!(m.FreeCol3 && m.FreeCol3.length))
                        m.FreeCol3 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.FreeCol3.push(r.int32());
                    } else
                        m.FreeCol3.push(r.int32());
                    break;
                case 11:
                    if (!(m.FreeCol4 && m.FreeCol4.length))
                        m.FreeCol4 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.FreeCol4.push(r.int32());
                    } else
                        m.FreeCol4.push(r.int32());
                    break;
                case 12:
                    if (!(m.FreeCol5 && m.FreeCol5.length))
                        m.FreeCol5 = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.FreeCol5.push(r.int32());
                    } else
                        m.FreeCol5.push(r.int32());
                    break;
                case 13:
                    if (!(m.MaryOut && m.MaryOut.length))
                        m.MaryOut = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MaryOut.push(r.int32());
                    } else
                        m.MaryOut.push(r.int32());
                    break;
                case 14:
                    if (!(m.MaryMid && m.MaryMid.length))
                        m.MaryMid = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MaryMid.push(r.int32());
                    } else
                        m.MaryMid.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_SlotRateWeight;
    })();

    server.DB_SlotRateWeightArray = (function() {

        function DB_SlotRateWeightArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_SlotRateWeightArray.prototype.Arr = $util.emptyArray;

        DB_SlotRateWeightArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_SlotRateWeight.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_SlotRateWeightArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_SlotRateWeightArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_SlotRateWeight.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_SlotRateWeightArray;
    })();

    server.DB_SystemChance = (function() {

        function DB_SystemChance(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_SystemChance.prototype.Id = 0;
        DB_SystemChance.prototype.Desc = "";
        DB_SystemChance.prototype.ChanceType = 0;
        DB_SystemChance.prototype.Coin = 0;
        DB_SystemChance.prototype.Rate = 0;

        DB_SystemChance.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Desc != null && Object.hasOwnProperty.call(m, "Desc"))
                w.uint32(18).string(m.Desc);
            if (m.ChanceType != null && Object.hasOwnProperty.call(m, "ChanceType"))
                w.uint32(24).int32(m.ChanceType);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(32).int32(m.Coin);
            if (m.Rate != null && Object.hasOwnProperty.call(m, "Rate"))
                w.uint32(40).int32(m.Rate);
            return w;
        };

        DB_SystemChance.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_SystemChance();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Desc = r.string();
                    break;
                case 3:
                    m.ChanceType = r.int32();
                    break;
                case 4:
                    m.Coin = r.int32();
                    break;
                case 5:
                    m.Rate = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_SystemChance;
    })();

    server.DB_SystemChanceArray = (function() {

        function DB_SystemChanceArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_SystemChanceArray.prototype.Arr = $util.emptyArray;

        DB_SystemChanceArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_SystemChance.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_SystemChanceArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_SystemChanceArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_SystemChance.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_SystemChanceArray;
    })();

    server.DB_Task = (function() {

        function DB_Task(p) {
            this.PostIds = [];
            this.AcceptConds = [];
            this.CompleteConds = [];
            this.Prize = [];
            this.FuncParam = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Task.prototype.Id = 0;
        DB_Task.prototype.Name = "";
        DB_Task.prototype.Desc = "";
        DB_Task.prototype.Sort = 0;
        DB_Task.prototype.TrunkTaskId = 0;
        DB_Task.prototype.PostIds = $util.emptyArray;
        DB_Task.prototype.PostLimitTime = 0;
        DB_Task.prototype.AcceptConds = $util.emptyArray;
        DB_Task.prototype.CompleteConds = $util.emptyArray;
        DB_Task.prototype.Prize = $util.emptyArray;
        DB_Task.prototype.PeriodOfTime = 0;
        DB_Task.prototype.StartOfTime = 0;
        DB_Task.prototype.NeedDel = 0;
        DB_Task.prototype.Func = 0;
        DB_Task.prototype.FuncParam = $util.emptyArray;
        DB_Task.prototype.ZeroEffect = 0;

        DB_Task.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Desc != null && Object.hasOwnProperty.call(m, "Desc"))
                w.uint32(26).string(m.Desc);
            if (m.Sort != null && Object.hasOwnProperty.call(m, "Sort"))
                w.uint32(32).int32(m.Sort);
            if (m.TrunkTaskId != null && Object.hasOwnProperty.call(m, "TrunkTaskId"))
                w.uint32(40).int32(m.TrunkTaskId);
            if (m.PostIds != null && m.PostIds.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.PostIds.length; ++i)
                    w.int32(m.PostIds[i]);
                w.ldelim();
            }
            if (m.PostLimitTime != null && Object.hasOwnProperty.call(m, "PostLimitTime"))
                w.uint32(56).int32(m.PostLimitTime);
            if (m.AcceptConds != null && m.AcceptConds.length) {
                w.uint32(66).fork();
                for (var i = 0; i < m.AcceptConds.length; ++i)
                    w.int32(m.AcceptConds[i]);
                w.ldelim();
            }
            if (m.CompleteConds != null && m.CompleteConds.length) {
                w.uint32(74).fork();
                for (var i = 0; i < m.CompleteConds.length; ++i)
                    w.int32(m.CompleteConds[i]);
                w.ldelim();
            }
            if (m.Prize != null && m.Prize.length) {
                w.uint32(82).fork();
                for (var i = 0; i < m.Prize.length; ++i)
                    w.int32(m.Prize[i]);
                w.ldelim();
            }
            if (m.PeriodOfTime != null && Object.hasOwnProperty.call(m, "PeriodOfTime"))
                w.uint32(88).int32(m.PeriodOfTime);
            if (m.StartOfTime != null && Object.hasOwnProperty.call(m, "StartOfTime"))
                w.uint32(96).int32(m.StartOfTime);
            if (m.NeedDel != null && Object.hasOwnProperty.call(m, "NeedDel"))
                w.uint32(104).int32(m.NeedDel);
            if (m.Func != null && Object.hasOwnProperty.call(m, "Func"))
                w.uint32(112).int32(m.Func);
            if (m.FuncParam != null && m.FuncParam.length) {
                w.uint32(122).fork();
                for (var i = 0; i < m.FuncParam.length; ++i)
                    w.int32(m.FuncParam[i]);
                w.ldelim();
            }
            if (m.ZeroEffect != null && Object.hasOwnProperty.call(m, "ZeroEffect"))
                w.uint32(128).int32(m.ZeroEffect);
            return w;
        };

        DB_Task.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Task();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Desc = r.string();
                    break;
                case 4:
                    m.Sort = r.int32();
                    break;
                case 5:
                    m.TrunkTaskId = r.int32();
                    break;
                case 6:
                    if (!(m.PostIds && m.PostIds.length))
                        m.PostIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.PostIds.push(r.int32());
                    } else
                        m.PostIds.push(r.int32());
                    break;
                case 7:
                    m.PostLimitTime = r.int32();
                    break;
                case 8:
                    if (!(m.AcceptConds && m.AcceptConds.length))
                        m.AcceptConds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.AcceptConds.push(r.int32());
                    } else
                        m.AcceptConds.push(r.int32());
                    break;
                case 9:
                    if (!(m.CompleteConds && m.CompleteConds.length))
                        m.CompleteConds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.CompleteConds.push(r.int32());
                    } else
                        m.CompleteConds.push(r.int32());
                    break;
                case 10:
                    if (!(m.Prize && m.Prize.length))
                        m.Prize = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Prize.push(r.int32());
                    } else
                        m.Prize.push(r.int32());
                    break;
                case 11:
                    m.PeriodOfTime = r.int32();
                    break;
                case 12:
                    m.StartOfTime = r.int32();
                    break;
                case 13:
                    m.NeedDel = r.int32();
                    break;
                case 14:
                    m.Func = r.int32();
                    break;
                case 15:
                    if (!(m.FuncParam && m.FuncParam.length))
                        m.FuncParam = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.FuncParam.push(r.int32());
                    } else
                        m.FuncParam.push(r.int32());
                    break;
                case 16:
                    m.ZeroEffect = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Task;
    })();

    server.DB_TaskArray = (function() {

        function DB_TaskArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_TaskArray.prototype.Arr = $util.emptyArray;

        DB_TaskArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Task.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_TaskArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_TaskArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Task.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_TaskArray;
    })();

    server.DB_TaskCond = (function() {

        function DB_TaskCond(p) {
            this.Param = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_TaskCond.prototype.Id = 0;
        DB_TaskCond.prototype.Name = "";
        DB_TaskCond.prototype.CondType = 0;
        DB_TaskCond.prototype.Param = $util.emptyArray;
        DB_TaskCond.prototype.Count = 0;

        DB_TaskCond.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.CondType != null && Object.hasOwnProperty.call(m, "CondType"))
                w.uint32(24).int32(m.CondType);
            if (m.Param != null && m.Param.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Param.length; ++i)
                    w.int32(m.Param[i]);
                w.ldelim();
            }
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(40).int32(m.Count);
            return w;
        };

        DB_TaskCond.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_TaskCond();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.CondType = r.int32();
                    break;
                case 4:
                    if (!(m.Param && m.Param.length))
                        m.Param = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Param.push(r.int32());
                    } else
                        m.Param.push(r.int32());
                    break;
                case 5:
                    m.Count = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_TaskCond;
    })();

    server.DB_TaskCondArray = (function() {

        function DB_TaskCondArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_TaskCondArray.prototype.Arr = $util.emptyArray;

        DB_TaskCondArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_TaskCond.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_TaskCondArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_TaskCondArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_TaskCond.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_TaskCondArray;
    })();

    server.DB_ThirdPlatformGameMapping = (function() {

        function DB_ThirdPlatformGameMapping(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_ThirdPlatformGameMapping.prototype.Id = 0;
        DB_ThirdPlatformGameMapping.prototype.SystemGameID = 0;
        DB_ThirdPlatformGameMapping.prototype.ThirdPlatformName = "";
        DB_ThirdPlatformGameMapping.prototype.ThirdGameID = "";
        DB_ThirdPlatformGameMapping.prototype.Desc = "";
        DB_ThirdPlatformGameMapping.prototype.ScreenOrientationType = 0;
        DB_ThirdPlatformGameMapping.prototype.ThirdID = 0;

        DB_ThirdPlatformGameMapping.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.SystemGameID != null && Object.hasOwnProperty.call(m, "SystemGameID"))
                w.uint32(16).int32(m.SystemGameID);
            if (m.ThirdPlatformName != null && Object.hasOwnProperty.call(m, "ThirdPlatformName"))
                w.uint32(26).string(m.ThirdPlatformName);
            if (m.ThirdGameID != null && Object.hasOwnProperty.call(m, "ThirdGameID"))
                w.uint32(34).string(m.ThirdGameID);
            if (m.Desc != null && Object.hasOwnProperty.call(m, "Desc"))
                w.uint32(42).string(m.Desc);
            if (m.ScreenOrientationType != null && Object.hasOwnProperty.call(m, "ScreenOrientationType"))
                w.uint32(48).int32(m.ScreenOrientationType);
            if (m.ThirdID != null && Object.hasOwnProperty.call(m, "ThirdID"))
                w.uint32(56).int32(m.ThirdID);
            return w;
        };

        DB_ThirdPlatformGameMapping.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_ThirdPlatformGameMapping();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.SystemGameID = r.int32();
                    break;
                case 3:
                    m.ThirdPlatformName = r.string();
                    break;
                case 4:
                    m.ThirdGameID = r.string();
                    break;
                case 5:
                    m.Desc = r.string();
                    break;
                case 6:
                    m.ScreenOrientationType = r.int32();
                    break;
                case 7:
                    m.ThirdID = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_ThirdPlatformGameMapping;
    })();

    server.DB_ThirdPlatformGameMappingArray = (function() {

        function DB_ThirdPlatformGameMappingArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_ThirdPlatformGameMappingArray.prototype.Arr = $util.emptyArray;

        DB_ThirdPlatformGameMappingArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_ThirdPlatformGameMapping.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_ThirdPlatformGameMappingArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_ThirdPlatformGameMappingArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_ThirdPlatformGameMapping.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_ThirdPlatformGameMappingArray;
    })();

    server.DB_Tips = (function() {

        function DB_Tips(p) {
            this.GameId = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_Tips.prototype.Id = 0;
        DB_Tips.prototype.GameId = $util.emptyArray;
        DB_Tips.prototype.Des = "";

        DB_Tips.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.GameId != null && m.GameId.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.GameId.length; ++i)
                    w.int32(m.GameId[i]);
                w.ldelim();
            }
            if (m.Des != null && Object.hasOwnProperty.call(m, "Des"))
                w.uint32(26).string(m.Des);
            return w;
        };

        DB_Tips.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_Tips();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    if (!(m.GameId && m.GameId.length))
                        m.GameId = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.GameId.push(r.int32());
                    } else
                        m.GameId.push(r.int32());
                    break;
                case 3:
                    m.Des = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_Tips;
    })();

    server.DB_TipsArray = (function() {

        function DB_TipsArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_TipsArray.prototype.Arr = $util.emptyArray;

        DB_TipsArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_Tips.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_TipsArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_TipsArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_Tips.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_TipsArray;
    })();

    server.DB_VIP = (function() {

        function DB_VIP(p) {
            this.Param = [];
            this.ParamName = [];
            this.RewardPaotaiID = [];
            this.RewardOutlineID = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_VIP.prototype.Id = 0;
        DB_VIP.prototype.Name = "";
        DB_VIP.prototype.Count = 0;
        DB_VIP.prototype.Param = $util.emptyArray;
        DB_VIP.prototype.ParamName = $util.emptyArray;
        DB_VIP.prototype.ExchangeRate = 0;
        DB_VIP.prototype.RewardPaotaiID = $util.emptyArray;
        DB_VIP.prototype.RewardOutlineID = $util.emptyArray;

        DB_VIP.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(24).int32(m.Count);
            if (m.Param != null && m.Param.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Param.length; ++i)
                    w.int32(m.Param[i]);
                w.ldelim();
            }
            if (m.ParamName != null && m.ParamName.length) {
                for (var i = 0; i < m.ParamName.length; ++i)
                    w.uint32(42).string(m.ParamName[i]);
            }
            if (m.ExchangeRate != null && Object.hasOwnProperty.call(m, "ExchangeRate"))
                w.uint32(48).int32(m.ExchangeRate);
            if (m.RewardPaotaiID != null && m.RewardPaotaiID.length) {
                w.uint32(58).fork();
                for (var i = 0; i < m.RewardPaotaiID.length; ++i)
                    w.int32(m.RewardPaotaiID[i]);
                w.ldelim();
            }
            if (m.RewardOutlineID != null && m.RewardOutlineID.length) {
                w.uint32(66).fork();
                for (var i = 0; i < m.RewardOutlineID.length; ++i)
                    w.int32(m.RewardOutlineID[i]);
                w.ldelim();
            }
            return w;
        };

        DB_VIP.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_VIP();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Count = r.int32();
                    break;
                case 4:
                    if (!(m.Param && m.Param.length))
                        m.Param = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Param.push(r.int32());
                    } else
                        m.Param.push(r.int32());
                    break;
                case 5:
                    if (!(m.ParamName && m.ParamName.length))
                        m.ParamName = [];
                    m.ParamName.push(r.string());
                    break;
                case 6:
                    m.ExchangeRate = r.int32();
                    break;
                case 7:
                    if (!(m.RewardPaotaiID && m.RewardPaotaiID.length))
                        m.RewardPaotaiID = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.RewardPaotaiID.push(r.int32());
                    } else
                        m.RewardPaotaiID.push(r.int32());
                    break;
                case 8:
                    if (!(m.RewardOutlineID && m.RewardOutlineID.length))
                        m.RewardOutlineID = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.RewardOutlineID.push(r.int32());
                    } else
                        m.RewardOutlineID.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_VIP;
    })();

    server.DB_VIPArray = (function() {

        function DB_VIPArray(p) {
            this.Arr = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DB_VIPArray.prototype.Arr = $util.emptyArray;

        DB_VIPArray.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Arr != null && m.Arr.length) {
                for (var i = 0; i < m.Arr.length; ++i)
                    $root.server.DB_VIP.encode(m.Arr[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        DB_VIPArray.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DB_VIPArray();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Arr && m.Arr.length))
                        m.Arr = [];
                    m.Arr.push($root.server.DB_VIP.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DB_VIPArray;
    })();

    server.SSPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_SERVER_ZERO"] = 0;
        values[valuesById[1000] = "PACKET_GB_CUR_LOAD"] = 1000;
        values[valuesById[1001] = "PACKET_GB_STATE_SWITCH"] = 1001;
        values[valuesById[1002] = "PACKET_SC_GATEINFO"] = 1002;
        values[valuesById[1004] = "PACKET_SS_DICONNECT"] = 1004;
        values[valuesById[1005] = "PACKET_MS_SRVCTRL"] = 1005;
        values[valuesById[1012] = "PACKET_WG_SERVER_STATE"] = 1012;
        values[valuesById[1013] = "PACKET_SG_BINDGROUPTAG"] = 1013;
        values[valuesById[1014] = "PACKET_SS_CUSTOMTAG_MULTICAST"] = 1014;
        values[valuesById[1101] = "PACKET_WG_CREATESCENE"] = 1101;
        values[valuesById[1102] = "PACKET_WG_DESTROYSCENE"] = 1102;
        values[valuesById[1103] = "PACKET_WG_PLAYERENTER"] = 1103;
        values[valuesById[1104] = "PACKET_GW_PLAYERLEAVE"] = 1104;
        values[valuesById[1105] = "PACKET_GW_BILLEDROOMCARD"] = 1105;
        values[valuesById[1106] = "PACKET_GW_DESTROYSCENE"] = 1106;
        values[valuesById[1107] = "PACKET_WG_PLAYERDROPLINE"] = 1107;
        values[valuesById[1108] = "PACKET_WG_PLAYERREHOLD"] = 1108;
        values[valuesById[1109] = "PACKET_GG_PLAYERSESSIONBIND"] = 1109;
        values[valuesById[1110] = "PACKET_GG_PLAYERSESSIONUNBIND"] = 1110;
        values[valuesById[1111] = "PACKET_WG_PLAYERRETURN"] = 1111;
        values[valuesById[1112] = "PACKET_GR_REPLAYRECORD"] = 1112;
        values[valuesById[1113] = "PACKET_GW_GAMEREC"] = 1113;
        values[valuesById[1114] = "PACKET_WG_AUDIENCEENTER"] = 1114;
        values[valuesById[1115] = "PACKET_GW_AUDIENCELEAVE"] = 1115;
        values[valuesById[1116] = "PACKET_GW_SCENESTART"] = 1116;
        values[valuesById[1117] = "PACKET_WR_INVITEROBOT"] = 1117;
        values[valuesById[1118] = "PACKET_WG_AGENTKICKOUTPLAYER"] = 1118;
        values[valuesById[1119] = "PACKET_WD_DATANALYSIS"] = 1119;
        values[valuesById[1121] = "PACKET_GW_CLUBBILLMONEY"] = 1121;
        values[valuesById[1122] = "PACKET_WG_REBIND_SNID"] = 1122;
        values[valuesById[1123] = "PACKET_WG_AUDIENCESIT"] = 1123;
        values[valuesById[1124] = "PACKET_WG_RECHARGE"] = 1124;
        values[valuesById[1125] = "PACKET_GW_SCENESTATE"] = 1125;
        values[valuesById[1126] = "PACKET_WG_GRACE_DESTROYSCENE"] = 1126;
        values[valuesById[1127] = "PACKET_GW_SCENEEND"] = 1127;
        values[valuesById[1128] = "PACKET_GW_FISHRECORD"] = 1128;
        values[valuesById[1129] = "PACKET_GW_PLAYERFORCELEAVE"] = 1129;
        values[valuesById[1130] = "PACKET_GW_PLAYERWINSOCORE"] = 1130;
        values[valuesById[1131] = "PACKET_GW_PLAYERBET"] = 1131;
        values[valuesById[1132] = "PACKET_DW_ThirdRebateMessage"] = 1132;
        values[valuesById[1133] = "PACKET_WD_ACKThirdRebateMessage"] = 1133;
        values[valuesById[1134] = "PACKET_DW_ThirdRoundMessage"] = 1134;
        values[valuesById[1135] = "PACKET_WR_INVITECREATEROOM"] = 1135;
        values[valuesById[1136] = "PACKET_WR_LoginRec"] = 1136;
        values[valuesById[1137] = "PACKET_WR_GameDetail"] = 1137;
        values[valuesById[1138] = "PACKET_WR_PlayerData"] = 1138;
        values[valuesById[1139] = "PACKET_WG_PlayerLEAVE"] = 1139;
        values[valuesById[1500] = "PACKET_GN_PLAYERCARDS"] = 1500;
        values[valuesById[1501] = "PACKET_GW_REBUILDSCENE"] = 1501;
        values[valuesById[1502] = "PACKET_GW_PLAYERSTATE"] = 1502;
        values[valuesById[1503] = "PACKET_GW_NEWNOTICE"] = 1503;
        values[valuesById[1504] = "PACKET_GW_PLAYERSTATIC"] = 1504;
        values[valuesById[1505] = "PACKET_WG_COINPOOLSETTING"] = 1505;
        values[valuesById[1506] = "PACKET_WG_SETPLAYERBLACKLEVEL"] = 1506;
        values[valuesById[1507] = "PACKET_GW_AUTORELIEVEWBLEVEL"] = 1507;
        values[valuesById[1508] = "PACKET_GN_PLAYERPARAM"] = 1508;
        values[valuesById[1509] = "PACKET_GW_SCENEPLAYERLOG"] = 1509;
        values[valuesById[1510] = "PACKET_GW_SYNCPLAYERCOIN"] = 1510;
        values[valuesById[1514] = "PACKET_WG_PlayerOnGameCount"] = 1514;
        values[valuesById[1515] = "PACKET_GR_GameFreeData"] = 1515;
        values[valuesById[1516] = "PACKET_WG_SyncPlayerSafeBoxCoin"] = 1516;
        values[valuesById[1517] = "PACKET_WG_RESETCOINPOOL"] = 1517;
        values[valuesById[1518] = "PACKET_WG_CLUB_MESSAGE"] = 1518;
        values[valuesById[1519] = "PACKET_GW_GAMESTATELOG"] = 1519;
        values[valuesById[1520] = "PACKET_GW_GAMESTATE"] = 1520;
        values[valuesById[1521] = "PACKET_GW_JACKPOTLIST"] = 1521;
        values[valuesById[1522] = "PACKET_GW_JACKPOTCOIN"] = 1522;
        values[valuesById[1523] = "PACKET_GW_NICEIDREBIND"] = 1523;
        values[valuesById[1524] = "PACKET_GW_PLAYERWINCOIN"] = 1524;
        values[valuesById[1525] = "PACKET_GW_PLAYERAUTOMARKTAG"] = 1525;
        values[valuesById[1526] = "PACKET_WG_INVITEROBENTERCOINSCENEQUEUE"] = 1526;
        values[valuesById[1527] = "PACKET_WG_GAMEFORCESTART"] = 1527;
        values[valuesById[1528] = "PACKET_WG_PROFITCONTROL_CORRECT"] = 1528;
        values[valuesById[1529] = "PACKET_GW_CHANGESCENEEVENT"] = 1529;
        values[valuesById[1530] = "PACKET_WT_PLAYERPAY"] = 1530;
        values[valuesById[1531] = "PACKET_GW_PLAYERMATCHBILLED"] = 1531;
        values[valuesById[1532] = "PACKET_GW_PLAYERMATCHGRADE"] = 1532;
        values[valuesById[1533] = "PACKET_WG_PLAYERQUITMATCH"] = 1533;
        values[valuesById[1534] = "PACKET_WG_SCENEMATCHBASECHANGE"] = 1534;
        values[valuesById[1535] = "PACKET_SS_REDIRECTTOPLAYER"] = 1535;
        values[valuesById[1536] = "PACKET_WG_INVITEMATCHROB"] = 1536;
        values[valuesById[1539] = "PACKET_WG_GAMEJACKPOT"] = 1539;
        values[valuesById[1540] = "PACKET_GW_GAMENEWBIGWINHISTORY"] = 1540;
        values[valuesById[1541] = "PACKET_WG_PLAYERENTER_MINIGAME"] = 1541;
        values[valuesById[1542] = "PACKET_WG_PLAYERLEAVE_MINIGAME"] = 1542;
        values[valuesById[1543] = "PACKET_GW_PLAYERLEAVE_MINIGAME"] = 1543;
        values[valuesById[1544] = "PACKET_GW_DESTROYMINISCENE"] = 1544;
        values[valuesById[1545] = "PACKET_GR_DESTROYSCENE"] = 1545;
        values[valuesById[1546] = "PACKET_WG_DTROOMINFO"] = 1546;
        values[valuesById[1547] = "PACKET_GW_DTROOMINFO"] = 1547;
        values[valuesById[1548] = "PACKET_WG_DTROOMRESULTS"] = 1548;
        values[valuesById[1549] = "PACKET_GW_DTROOMRESULTS"] = 1549;
        values[valuesById[1550] = "PACKET_WG_SINGLEADJUST"] = 1550;
        values[valuesById[1551] = "PACKET_GW_ADDSINGLEADJUST"] = 1551;
        return values;
    })();

    server.SGBindGroupTag = (function() {

        function SGBindGroupTag(p) {
            this.Tags = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SGBindGroupTag.prototype.Sid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SGBindGroupTag.prototype.Code = 0;
        SGBindGroupTag.prototype.Tags = $util.emptyArray;

        SGBindGroupTag.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Sid != null && Object.hasOwnProperty.call(m, "Sid"))
                w.uint32(8).int64(m.Sid);
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(16).int32(m.Code);
            if (m.Tags != null && m.Tags.length) {
                for (var i = 0; i < m.Tags.length; ++i)
                    w.uint32(26).string(m.Tags[i]);
            }
            return w;
        };

        SGBindGroupTag.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.SGBindGroupTag();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Sid = r.int64();
                    break;
                case 2:
                    m.Code = r.int32();
                    break;
                case 3:
                    if (!(m.Tags && m.Tags.length))
                        m.Tags = [];
                    m.Tags.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        SGBindGroupTag.OpCode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OpCode_Add"] = 0;
            values[valuesById[1] = "OpCode_Del"] = 1;
            return values;
        })();

        return SGBindGroupTag;
    })();

    server.SSCustomTagMulticast = (function() {

        function SSCustomTagMulticast(p) {
            this.Tags = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SSCustomTagMulticast.prototype.Tags = $util.emptyArray;
        SSCustomTagMulticast.prototype.RawData = $util.newBuffer([]);

        SSCustomTagMulticast.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tags != null && m.Tags.length) {
                for (var i = 0; i < m.Tags.length; ++i)
                    w.uint32(10).string(m.Tags[i]);
            }
            if (m.RawData != null && Object.hasOwnProperty.call(m, "RawData"))
                w.uint32(18).bytes(m.RawData);
            return w;
        };

        SSCustomTagMulticast.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.SSCustomTagMulticast();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Tags && m.Tags.length))
                        m.Tags = [];
                    m.Tags.push(r.string());
                    break;
                case 2:
                    m.RawData = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SSCustomTagMulticast;
    })();

    server.OpResultParam = (function() {

        function OpResultParam(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        OpResultParam.prototype.ParamInt64 = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        OpResultParam.prototype.ParamString = "";

        OpResultParam.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ParamInt64 != null && Object.hasOwnProperty.call(m, "ParamInt64"))
                w.uint32(8).int64(m.ParamInt64);
            if (m.ParamString != null && Object.hasOwnProperty.call(m, "ParamString"))
                w.uint32(18).string(m.ParamString);
            return w;
        };

        OpResultParam.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.OpResultParam();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ParamInt64 = r.int64();
                    break;
                case 2:
                    m.ParamString = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return OpResultParam;
    })();

    server.ServerLoad = (function() {

        function ServerLoad(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ServerLoad.prototype.SrvType = 0;
        ServerLoad.prototype.SrvId = 0;
        ServerLoad.prototype.CurLoad = 0;

        ServerLoad.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SrvType != null && Object.hasOwnProperty.call(m, "SrvType"))
                w.uint32(8).int32(m.SrvType);
            if (m.SrvId != null && Object.hasOwnProperty.call(m, "SrvId"))
                w.uint32(16).int32(m.SrvId);
            if (m.CurLoad != null && Object.hasOwnProperty.call(m, "CurLoad"))
                w.uint32(24).int32(m.CurLoad);
            return w;
        };

        ServerLoad.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.ServerLoad();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SrvType = r.int32();
                    break;
                case 2:
                    m.SrvId = r.int32();
                    break;
                case 3:
                    m.CurLoad = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ServerLoad;
    })();

    server.ServerStateSwitch = (function() {

        function ServerStateSwitch(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ServerStateSwitch.prototype.SrvType = 0;
        ServerStateSwitch.prototype.SrvId = 0;

        ServerStateSwitch.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SrvType != null && Object.hasOwnProperty.call(m, "SrvType"))
                w.uint32(8).int32(m.SrvType);
            if (m.SrvId != null && Object.hasOwnProperty.call(m, "SrvId"))
                w.uint32(16).int32(m.SrvId);
            return w;
        };

        ServerStateSwitch.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.ServerStateSwitch();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SrvType = r.int32();
                    break;
                case 2:
                    m.SrvId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ServerStateSwitch;
    })();

    server.ServerState = (function() {

        function ServerState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ServerState.prototype.SrvState = 0;

        ServerState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SrvState != null && Object.hasOwnProperty.call(m, "SrvState"))
                w.uint32(8).int32(m.SrvState);
            return w;
        };

        ServerState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.ServerState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SrvState = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ServerState;
    })();

    server.ServerCtrl = (function() {

        function ServerCtrl(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ServerCtrl.prototype.CtrlCode = 0;
        ServerCtrl.prototype.Params = $util.emptyArray;

        ServerCtrl.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.CtrlCode != null && Object.hasOwnProperty.call(m, "CtrlCode"))
                w.uint32(8).int32(m.CtrlCode);
            if (m.Params != null && m.Params.length) {
                for (var i = 0; i < m.Params.length; ++i)
                    $root.server.OpResultParam.encode(m.Params[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        ServerCtrl.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.ServerCtrl();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.CtrlCode = r.int32();
                    break;
                case 2:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    m.Params.push($root.server.OpResultParam.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ServerCtrl;
    })();

    server.ServerNotice = (function() {

        function ServerNotice(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ServerNotice.prototype.Text = "";

        ServerNotice.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Text != null && Object.hasOwnProperty.call(m, "Text"))
                w.uint32(10).string(m.Text);
            return w;
        };

        ServerNotice.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.ServerNotice();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Text = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ServerNotice;
    })();

    server.WGCreateScene = (function() {

        function WGCreateScene(p) {
            this.Params = [];
            this.ParamsEx = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGCreateScene.prototype.SceneId = 0;
        WGCreateScene.prototype.GameId = 0;
        WGCreateScene.prototype.GameMode = 0;
        WGCreateScene.prototype.Params = $util.emptyArray;
        WGCreateScene.prototype.Creator = 0;
        WGCreateScene.prototype.Agentor = 0;
        WGCreateScene.prototype.ReplayCode = "";
        WGCreateScene.prototype.ParamsEx = $util.emptyArray;
        WGCreateScene.prototype.SceneMode = 0;
        WGCreateScene.prototype.HallId = 0;
        WGCreateScene.prototype.Platform = "";
        WGCreateScene.prototype.DBGameFree = null;
        WGCreateScene.prototype.GroupId = 0;
        WGCreateScene.prototype.EnterAfterStart = false;
        WGCreateScene.prototype.TotalOfGames = 0;
        WGCreateScene.prototype.Club = 0;
        WGCreateScene.prototype.ClubRoomId = "";
        WGCreateScene.prototype.ClubRoomPos = 0;
        WGCreateScene.prototype.ClubRate = 0;
        WGCreateScene.prototype.BaseScore = 0;
        WGCreateScene.prototype.PlayerNum = 0;

        WGCreateScene.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(16).int32(m.GameId);
            if (m.GameMode != null && Object.hasOwnProperty.call(m, "GameMode"))
                w.uint32(24).int32(m.GameMode);
            if (m.Params != null && m.Params.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int32(m.Params[i]);
                w.ldelim();
            }
            if (m.Creator != null && Object.hasOwnProperty.call(m, "Creator"))
                w.uint32(40).int32(m.Creator);
            if (m.Agentor != null && Object.hasOwnProperty.call(m, "Agentor"))
                w.uint32(48).int32(m.Agentor);
            if (m.ReplayCode != null && Object.hasOwnProperty.call(m, "ReplayCode"))
                w.uint32(58).string(m.ReplayCode);
            if (m.ParamsEx != null && m.ParamsEx.length) {
                w.uint32(66).fork();
                for (var i = 0; i < m.ParamsEx.length; ++i)
                    w.int32(m.ParamsEx[i]);
                w.ldelim();
            }
            if (m.SceneMode != null && Object.hasOwnProperty.call(m, "SceneMode"))
                w.uint32(72).int32(m.SceneMode);
            if (m.HallId != null && Object.hasOwnProperty.call(m, "HallId"))
                w.uint32(80).int32(m.HallId);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(90).string(m.Platform);
            if (m.DBGameFree != null && Object.hasOwnProperty.call(m, "DBGameFree"))
                $root.server.DB_GameFree.encode(m.DBGameFree, w.uint32(98).fork()).ldelim();
            if (m.GroupId != null && Object.hasOwnProperty.call(m, "GroupId"))
                w.uint32(104).int32(m.GroupId);
            if (m.EnterAfterStart != null && Object.hasOwnProperty.call(m, "EnterAfterStart"))
                w.uint32(112).bool(m.EnterAfterStart);
            if (m.TotalOfGames != null && Object.hasOwnProperty.call(m, "TotalOfGames"))
                w.uint32(120).int32(m.TotalOfGames);
            if (m.Club != null && Object.hasOwnProperty.call(m, "Club"))
                w.uint32(128).int32(m.Club);
            if (m.ClubRoomId != null && Object.hasOwnProperty.call(m, "ClubRoomId"))
                w.uint32(138).string(m.ClubRoomId);
            if (m.ClubRoomPos != null && Object.hasOwnProperty.call(m, "ClubRoomPos"))
                w.uint32(144).int32(m.ClubRoomPos);
            if (m.ClubRate != null && Object.hasOwnProperty.call(m, "ClubRate"))
                w.uint32(152).int32(m.ClubRate);
            if (m.BaseScore != null && Object.hasOwnProperty.call(m, "BaseScore"))
                w.uint32(160).int32(m.BaseScore);
            if (m.PlayerNum != null && Object.hasOwnProperty.call(m, "PlayerNum"))
                w.uint32(168).int32(m.PlayerNum);
            return w;
        };

        WGCreateScene.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGCreateScene();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    m.GameId = r.int32();
                    break;
                case 3:
                    m.GameMode = r.int32();
                    break;
                case 4:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int32());
                    } else
                        m.Params.push(r.int32());
                    break;
                case 5:
                    m.Creator = r.int32();
                    break;
                case 6:
                    m.Agentor = r.int32();
                    break;
                case 7:
                    m.ReplayCode = r.string();
                    break;
                case 8:
                    if (!(m.ParamsEx && m.ParamsEx.length))
                        m.ParamsEx = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.ParamsEx.push(r.int32());
                    } else
                        m.ParamsEx.push(r.int32());
                    break;
                case 9:
                    m.SceneMode = r.int32();
                    break;
                case 10:
                    m.HallId = r.int32();
                    break;
                case 11:
                    m.Platform = r.string();
                    break;
                case 12:
                    m.DBGameFree = $root.server.DB_GameFree.decode(r, r.uint32());
                    break;
                case 13:
                    m.GroupId = r.int32();
                    break;
                case 14:
                    m.EnterAfterStart = r.bool();
                    break;
                case 15:
                    m.TotalOfGames = r.int32();
                    break;
                case 16:
                    m.Club = r.int32();
                    break;
                case 17:
                    m.ClubRoomId = r.string();
                    break;
                case 18:
                    m.ClubRoomPos = r.int32();
                    break;
                case 19:
                    m.ClubRate = r.int32();
                    break;
                case 20:
                    m.BaseScore = r.int32();
                    break;
                case 21:
                    m.PlayerNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGCreateScene;
    })();

    server.WGDestroyScene = (function() {

        function WGDestroyScene(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGDestroyScene.prototype.SceneId = 0;
        WGDestroyScene.prototype.IsCompleted = false;

        WGDestroyScene.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.IsCompleted != null && Object.hasOwnProperty.call(m, "IsCompleted"))
                w.uint32(16).bool(m.IsCompleted);
            return w;
        };

        WGDestroyScene.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGDestroyScene();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    m.IsCompleted = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGDestroyScene;
    })();

    server.GWDestroyScene = (function() {

        function GWDestroyScene(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWDestroyScene.prototype.SceneId = 0;
        GWDestroyScene.prototype.IsCompleted = false;

        GWDestroyScene.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.IsCompleted != null && Object.hasOwnProperty.call(m, "IsCompleted"))
                w.uint32(16).bool(m.IsCompleted);
            return w;
        };

        GWDestroyScene.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWDestroyScene();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    m.IsCompleted = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWDestroyScene;
    })();

    server.WGGraceDestroyScene = (function() {

        function WGGraceDestroyScene(p) {
            this.Ids = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGGraceDestroyScene.prototype.Ids = $util.emptyArray;

        WGGraceDestroyScene.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Ids != null && m.Ids.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.Ids.length; ++i)
                    w.int32(m.Ids[i]);
                w.ldelim();
            }
            return w;
        };

        WGGraceDestroyScene.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGGraceDestroyScene();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Ids && m.Ids.length))
                        m.Ids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Ids.push(r.int32());
                    } else
                        m.Ids.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGGraceDestroyScene;
    })();

    server.RebateTask = (function() {

        function RebateTask(p) {
            this.RebateGameCfg = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RebateTask.prototype.RebateSwitch = false;
        RebateTask.prototype.RebateGameCfg = $util.emptyArray;

        RebateTask.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RebateSwitch != null && Object.hasOwnProperty.call(m, "RebateSwitch"))
                w.uint32(8).bool(m.RebateSwitch);
            if (m.RebateGameCfg != null && m.RebateGameCfg.length) {
                for (var i = 0; i < m.RebateGameCfg.length; ++i)
                    w.uint32(18).string(m.RebateGameCfg[i]);
            }
            return w;
        };

        RebateTask.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.RebateTask();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RebateSwitch = r.bool();
                    break;
                case 2:
                    if (!(m.RebateGameCfg && m.RebateGameCfg.length))
                        m.RebateGameCfg = [];
                    m.RebateGameCfg.push(r.string());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RebateTask;
    })();

    server.WGPlayerEnter = (function() {

        function WGPlayerEnter(p) {
            this.IParams = [];
            this.SParams = [];
            this.CParams = [];
            this.Items = {};
            this.MatchParams = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGPlayerEnter.prototype.Sid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGPlayerEnter.prototype.GateSid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGPlayerEnter.prototype.SceneId = 0;
        WGPlayerEnter.prototype.PlayerData = $util.newBuffer([]);
        WGPlayerEnter.prototype.AgentCode = "";
        WGPlayerEnter.prototype.TakeCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGPlayerEnter.prototype.IsLoaded = false;
        WGPlayerEnter.prototype.IsQM = false;
        WGPlayerEnter.prototype.ExpectLeaveCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGPlayerEnter.prototype.ExpectGameTimes = 0;
        WGPlayerEnter.prototype.IParams = $util.emptyArray;
        WGPlayerEnter.prototype.SParams = $util.emptyArray;
        WGPlayerEnter.prototype.CParams = $util.emptyArray;
        WGPlayerEnter.prototype.SnId = 0;
        WGPlayerEnter.prototype.SingleAdjust = $util.newBuffer([]);
        WGPlayerEnter.prototype.Pos = 0;
        WGPlayerEnter.prototype.Items = $util.emptyObject;
        WGPlayerEnter.prototype.MatchParams = $util.emptyArray;

        WGPlayerEnter.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Sid != null && Object.hasOwnProperty.call(m, "Sid"))
                w.uint32(8).int64(m.Sid);
            if (m.GateSid != null && Object.hasOwnProperty.call(m, "GateSid"))
                w.uint32(16).int64(m.GateSid);
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(24).int32(m.SceneId);
            if (m.PlayerData != null && Object.hasOwnProperty.call(m, "PlayerData"))
                w.uint32(34).bytes(m.PlayerData);
            if (m.AgentCode != null && Object.hasOwnProperty.call(m, "AgentCode"))
                w.uint32(42).string(m.AgentCode);
            if (m.TakeCoin != null && Object.hasOwnProperty.call(m, "TakeCoin"))
                w.uint32(48).int64(m.TakeCoin);
            if (m.IsLoaded != null && Object.hasOwnProperty.call(m, "IsLoaded"))
                w.uint32(56).bool(m.IsLoaded);
            if (m.IsQM != null && Object.hasOwnProperty.call(m, "IsQM"))
                w.uint32(64).bool(m.IsQM);
            if (m.ExpectLeaveCoin != null && Object.hasOwnProperty.call(m, "ExpectLeaveCoin"))
                w.uint32(72).int64(m.ExpectLeaveCoin);
            if (m.ExpectGameTimes != null && Object.hasOwnProperty.call(m, "ExpectGameTimes"))
                w.uint32(80).int32(m.ExpectGameTimes);
            if (m.IParams != null && m.IParams.length) {
                for (var i = 0; i < m.IParams.length; ++i)
                    $root.server.PlayerIParam.encode(m.IParams[i], w.uint32(90).fork()).ldelim();
            }
            if (m.SParams != null && m.SParams.length) {
                for (var i = 0; i < m.SParams.length; ++i)
                    $root.server.PlayerSParam.encode(m.SParams[i], w.uint32(98).fork()).ldelim();
            }
            if (m.CParams != null && m.CParams.length) {
                for (var i = 0; i < m.CParams.length; ++i)
                    $root.server.PlayerCParam.encode(m.CParams[i], w.uint32(106).fork()).ldelim();
            }
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(112).int32(m.SnId);
            if (m.SingleAdjust != null && Object.hasOwnProperty.call(m, "SingleAdjust"))
                w.uint32(122).bytes(m.SingleAdjust);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(128).int32(m.Pos);
            if (m.Items != null && Object.hasOwnProperty.call(m, "Items")) {
                for (var ks = Object.keys(m.Items), i = 0; i < ks.length; ++i) {
                    w.uint32(138).fork().uint32(8).int32(ks[i]).uint32(16).int32(m.Items[ks[i]]).ldelim();
                }
            }
            if (m.MatchParams != null && m.MatchParams.length) {
                w.uint32(146).fork();
                for (var i = 0; i < m.MatchParams.length; ++i)
                    w.int32(m.MatchParams[i]);
                w.ldelim();
            }
            return w;
        };

        WGPlayerEnter.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGPlayerEnter(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Sid = r.int64();
                    break;
                case 2:
                    m.GateSid = r.int64();
                    break;
                case 3:
                    m.SceneId = r.int32();
                    break;
                case 4:
                    m.PlayerData = r.bytes();
                    break;
                case 5:
                    m.AgentCode = r.string();
                    break;
                case 6:
                    m.TakeCoin = r.int64();
                    break;
                case 7:
                    m.IsLoaded = r.bool();
                    break;
                case 8:
                    m.IsQM = r.bool();
                    break;
                case 9:
                    m.ExpectLeaveCoin = r.int64();
                    break;
                case 10:
                    m.ExpectGameTimes = r.int32();
                    break;
                case 11:
                    if (!(m.IParams && m.IParams.length))
                        m.IParams = [];
                    m.IParams.push($root.server.PlayerIParam.decode(r, r.uint32()));
                    break;
                case 12:
                    if (!(m.SParams && m.SParams.length))
                        m.SParams = [];
                    m.SParams.push($root.server.PlayerSParam.decode(r, r.uint32()));
                    break;
                case 13:
                    if (!(m.CParams && m.CParams.length))
                        m.CParams = [];
                    m.CParams.push($root.server.PlayerCParam.decode(r, r.uint32()));
                    break;
                case 14:
                    m.SnId = r.int32();
                    break;
                case 15:
                    m.SingleAdjust = r.bytes();
                    break;
                case 16:
                    m.Pos = r.int32();
                    break;
                case 17:
                    r.skip().pos++;
                    if (m.Items === $util.emptyObject)
                        m.Items = {};
                    k = r.int32();
                    r.pos++;
                    m.Items[k] = r.int32();
                    break;
                case 18:
                    if (!(m.MatchParams && m.MatchParams.length))
                        m.MatchParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.MatchParams.push(r.int32());
                    } else
                        m.MatchParams.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGPlayerEnter;
    })();

    server.WGAudienceSit = (function() {

        function WGAudienceSit(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGAudienceSit.prototype.SnId = 0;
        WGAudienceSit.prototype.TakeCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGAudienceSit.prototype.SceneId = 0;
        WGAudienceSit.prototype.Pos = 0;

        WGAudienceSit.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.TakeCoin != null && Object.hasOwnProperty.call(m, "TakeCoin"))
                w.uint32(16).int64(m.TakeCoin);
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(24).int32(m.SceneId);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(32).int32(m.Pos);
            return w;
        };

        WGAudienceSit.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGAudienceSit();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.TakeCoin = r.int64();
                    break;
                case 3:
                    m.SceneId = r.int32();
                    break;
                case 4:
                    m.Pos = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGAudienceSit;
    })();

    server.WGPlayerReturn = (function() {

        function WGPlayerReturn(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGPlayerReturn.prototype.PlayerId = 0;
        WGPlayerReturn.prototype.IsLoaded = false;
        WGPlayerReturn.prototype.RoomId = 0;
        WGPlayerReturn.prototype.EnterTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        WGPlayerReturn.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlayerId != null && Object.hasOwnProperty.call(m, "PlayerId"))
                w.uint32(8).int32(m.PlayerId);
            if (m.IsLoaded != null && Object.hasOwnProperty.call(m, "IsLoaded"))
                w.uint32(16).bool(m.IsLoaded);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(24).int32(m.RoomId);
            if (m.EnterTs != null && Object.hasOwnProperty.call(m, "EnterTs"))
                w.uint32(32).int64(m.EnterTs);
            return w;
        };

        WGPlayerReturn.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGPlayerReturn();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PlayerId = r.int32();
                    break;
                case 2:
                    m.IsLoaded = r.bool();
                    break;
                case 3:
                    m.RoomId = r.int32();
                    break;
                case 4:
                    m.EnterTs = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGPlayerReturn;
    })();

    server.GWPlayerLeave = (function() {

        function GWPlayerLeave(p) {
            this.Items = {};
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWPlayerLeave.prototype.RoomId = 0;
        GWPlayerLeave.prototype.PlayerId = 0;
        GWPlayerLeave.prototype.Reason = 0;
        GWPlayerLeave.prototype.PlayerData = $util.newBuffer([]);
        GWPlayerLeave.prototype.ReturnCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWPlayerLeave.prototype.ServiceFee = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWPlayerLeave.prototype.GameTimes = 0;
        GWPlayerLeave.prototype.GameCoinTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWPlayerLeave.prototype.SelVip = 0;
        GWPlayerLeave.prototype.BetCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWPlayerLeave.prototype.WinTimes = 0;
        GWPlayerLeave.prototype.LostTimes = 0;
        GWPlayerLeave.prototype.TotalConvertibleFlow = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWPlayerLeave.prototype.ValidCacheBetTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWPlayerLeave.prototype.Items = $util.emptyObject;
        GWPlayerLeave.prototype.MatchId = 0;
        GWPlayerLeave.prototype.CurIsWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GWPlayerLeave.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.PlayerId != null && Object.hasOwnProperty.call(m, "PlayerId"))
                w.uint32(16).int32(m.PlayerId);
            if (m.Reason != null && Object.hasOwnProperty.call(m, "Reason"))
                w.uint32(24).int32(m.Reason);
            if (m.PlayerData != null && Object.hasOwnProperty.call(m, "PlayerData"))
                w.uint32(34).bytes(m.PlayerData);
            if (m.ReturnCoin != null && Object.hasOwnProperty.call(m, "ReturnCoin"))
                w.uint32(40).int64(m.ReturnCoin);
            if (m.ServiceFee != null && Object.hasOwnProperty.call(m, "ServiceFee"))
                w.uint32(48).int64(m.ServiceFee);
            if (m.GameTimes != null && Object.hasOwnProperty.call(m, "GameTimes"))
                w.uint32(56).int32(m.GameTimes);
            if (m.GameCoinTs != null && Object.hasOwnProperty.call(m, "GameCoinTs"))
                w.uint32(64).int64(m.GameCoinTs);
            if (m.SelVip != null && Object.hasOwnProperty.call(m, "SelVip"))
                w.uint32(72).int32(m.SelVip);
            if (m.BetCoin != null && Object.hasOwnProperty.call(m, "BetCoin"))
                w.uint32(80).int64(m.BetCoin);
            if (m.WinTimes != null && Object.hasOwnProperty.call(m, "WinTimes"))
                w.uint32(88).int32(m.WinTimes);
            if (m.LostTimes != null && Object.hasOwnProperty.call(m, "LostTimes"))
                w.uint32(96).int32(m.LostTimes);
            if (m.TotalConvertibleFlow != null && Object.hasOwnProperty.call(m, "TotalConvertibleFlow"))
                w.uint32(104).int64(m.TotalConvertibleFlow);
            if (m.ValidCacheBetTotal != null && Object.hasOwnProperty.call(m, "ValidCacheBetTotal"))
                w.uint32(112).int64(m.ValidCacheBetTotal);
            if (m.Items != null && Object.hasOwnProperty.call(m, "Items")) {
                for (var ks = Object.keys(m.Items), i = 0; i < ks.length; ++i) {
                    w.uint32(122).fork().uint32(8).int32(ks[i]).uint32(16).int32(m.Items[ks[i]]).ldelim();
                }
            }
            if (m.MatchId != null && Object.hasOwnProperty.call(m, "MatchId"))
                w.uint32(128).int32(m.MatchId);
            if (m.CurIsWin != null && Object.hasOwnProperty.call(m, "CurIsWin"))
                w.uint32(136).int64(m.CurIsWin);
            return w;
        };

        GWPlayerLeave.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWPlayerLeave(), k;
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.PlayerId = r.int32();
                    break;
                case 3:
                    m.Reason = r.int32();
                    break;
                case 4:
                    m.PlayerData = r.bytes();
                    break;
                case 5:
                    m.ReturnCoin = r.int64();
                    break;
                case 6:
                    m.ServiceFee = r.int64();
                    break;
                case 7:
                    m.GameTimes = r.int32();
                    break;
                case 8:
                    m.GameCoinTs = r.int64();
                    break;
                case 9:
                    m.SelVip = r.int32();
                    break;
                case 10:
                    m.BetCoin = r.int64();
                    break;
                case 11:
                    m.WinTimes = r.int32();
                    break;
                case 12:
                    m.LostTimes = r.int32();
                    break;
                case 13:
                    m.TotalConvertibleFlow = r.int64();
                    break;
                case 14:
                    m.ValidCacheBetTotal = r.int64();
                    break;
                case 15:
                    r.skip().pos++;
                    if (m.Items === $util.emptyObject)
                        m.Items = {};
                    k = r.int32();
                    r.pos++;
                    m.Items[k] = r.int32();
                    break;
                case 16:
                    m.MatchId = r.int32();
                    break;
                case 17:
                    m.CurIsWin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWPlayerLeave;
    })();

    server.WGPlayerDropLine = (function() {

        function WGPlayerDropLine(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGPlayerDropLine.prototype.Id = 0;
        WGPlayerDropLine.prototype.SceneId = 0;

        WGPlayerDropLine.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(16).int32(m.SceneId);
            return w;
        };

        WGPlayerDropLine.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGPlayerDropLine();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.SceneId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGPlayerDropLine;
    })();

    server.WGPlayerRehold = (function() {

        function WGPlayerRehold(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGPlayerRehold.prototype.Id = 0;
        WGPlayerRehold.prototype.Sid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGPlayerRehold.prototype.SceneId = 0;
        WGPlayerRehold.prototype.GateSid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        WGPlayerRehold.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Sid != null && Object.hasOwnProperty.call(m, "Sid"))
                w.uint32(16).int64(m.Sid);
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(24).int32(m.SceneId);
            if (m.GateSid != null && Object.hasOwnProperty.call(m, "GateSid"))
                w.uint32(32).int64(m.GateSid);
            return w;
        };

        WGPlayerRehold.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGPlayerRehold();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Sid = r.int64();
                    break;
                case 3:
                    m.SceneId = r.int32();
                    break;
                case 4:
                    m.GateSid = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGPlayerRehold;
    })();

    server.GWBilledRoomCard = (function() {

        function GWBilledRoomCard(p) {
            this.SnId = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWBilledRoomCard.prototype.RoomId = 0;
        GWBilledRoomCard.prototype.SnId = $util.emptyArray;

        GWBilledRoomCard.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.SnId != null && m.SnId.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.SnId.length; ++i)
                    w.int32(m.SnId[i]);
                w.ldelim();
            }
            return w;
        };

        GWBilledRoomCard.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWBilledRoomCard();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    if (!(m.SnId && m.SnId.length))
                        m.SnId = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.SnId.push(r.int32());
                    } else
                        m.SnId.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWBilledRoomCard;
    })();

    server.GGPlayerSessionBind = (function() {

        function GGPlayerSessionBind(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GGPlayerSessionBind.prototype.Sid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GGPlayerSessionBind.prototype.SnId = 0;
        GGPlayerSessionBind.prototype.Vip = 0;
        GGPlayerSessionBind.prototype.CoinPayTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GGPlayerSessionBind.prototype.Ip = "";
        GGPlayerSessionBind.prototype.Platform = "";

        GGPlayerSessionBind.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Sid != null && Object.hasOwnProperty.call(m, "Sid"))
                w.uint32(8).int64(m.Sid);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(16).int32(m.SnId);
            if (m.Vip != null && Object.hasOwnProperty.call(m, "Vip"))
                w.uint32(24).int32(m.Vip);
            if (m.CoinPayTotal != null && Object.hasOwnProperty.call(m, "CoinPayTotal"))
                w.uint32(32).int64(m.CoinPayTotal);
            if (m.Ip != null && Object.hasOwnProperty.call(m, "Ip"))
                w.uint32(42).string(m.Ip);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(50).string(m.Platform);
            return w;
        };

        GGPlayerSessionBind.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GGPlayerSessionBind();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Sid = r.int64();
                    break;
                case 2:
                    m.SnId = r.int32();
                    break;
                case 3:
                    m.Vip = r.int32();
                    break;
                case 4:
                    m.CoinPayTotal = r.int64();
                    break;
                case 5:
                    m.Ip = r.string();
                    break;
                case 6:
                    m.Platform = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GGPlayerSessionBind;
    })();

    server.GGPlayerSessionUnBind = (function() {

        function GGPlayerSessionUnBind(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GGPlayerSessionUnBind.prototype.Sid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GGPlayerSessionUnBind.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Sid != null && Object.hasOwnProperty.call(m, "Sid"))
                w.uint32(8).int64(m.Sid);
            return w;
        };

        GGPlayerSessionUnBind.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GGPlayerSessionUnBind();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Sid = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GGPlayerSessionUnBind;
    })();

    server.WGDayTimeChange = (function() {

        function WGDayTimeChange(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGDayTimeChange.prototype.Minute = 0;
        WGDayTimeChange.prototype.Hour = 0;
        WGDayTimeChange.prototype.Day = 0;
        WGDayTimeChange.prototype.Week = 0;
        WGDayTimeChange.prototype.Month = 0;

        WGDayTimeChange.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Minute != null && Object.hasOwnProperty.call(m, "Minute"))
                w.uint32(8).int32(m.Minute);
            if (m.Hour != null && Object.hasOwnProperty.call(m, "Hour"))
                w.uint32(16).int32(m.Hour);
            if (m.Day != null && Object.hasOwnProperty.call(m, "Day"))
                w.uint32(24).int32(m.Day);
            if (m.Week != null && Object.hasOwnProperty.call(m, "Week"))
                w.uint32(32).int32(m.Week);
            if (m.Month != null && Object.hasOwnProperty.call(m, "Month"))
                w.uint32(40).int32(m.Month);
            return w;
        };

        WGDayTimeChange.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGDayTimeChange();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Minute = r.int32();
                    break;
                case 2:
                    m.Hour = r.int32();
                    break;
                case 3:
                    m.Day = r.int32();
                    break;
                case 4:
                    m.Week = r.int32();
                    break;
                case 5:
                    m.Month = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGDayTimeChange;
    })();

    server.ReplayPlayerData = (function() {

        function ReplayPlayerData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ReplayPlayerData.prototype.AccId = "";
        ReplayPlayerData.prototype.Platform = "";
        ReplayPlayerData.prototype.Pos = "";
        ReplayPlayerData.prototype.Name = "";
        ReplayPlayerData.prototype.SnId = 0;
        ReplayPlayerData.prototype.Head = 0;
        ReplayPlayerData.prototype.Sex = 0;
        ReplayPlayerData.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        ReplayPlayerData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.AccId != null && Object.hasOwnProperty.call(m, "AccId"))
                w.uint32(10).string(m.AccId);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(18).string(m.Platform);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(26).string(m.Pos);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(34).string(m.Name);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(40).int32(m.SnId);
            if (m.Head != null && Object.hasOwnProperty.call(m, "Head"))
                w.uint32(48).int32(m.Head);
            if (m.Sex != null && Object.hasOwnProperty.call(m, "Sex"))
                w.uint32(56).int32(m.Sex);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(64).int64(m.Coin);
            return w;
        };

        ReplayPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.ReplayPlayerData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.AccId = r.string();
                    break;
                case 2:
                    m.Platform = r.string();
                    break;
                case 3:
                    m.Pos = r.string();
                    break;
                case 4:
                    m.Name = r.string();
                    break;
                case 5:
                    m.SnId = r.int32();
                    break;
                case 6:
                    m.Head = r.int32();
                    break;
                case 7:
                    m.Sex = r.int32();
                    break;
                case 8:
                    m.Coin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReplayPlayerData;
    })();

    server.ReplayRecord = (function() {

        function ReplayRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ReplayRecord.prototype.TimeStamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        ReplayRecord.prototype.Pos = 0;
        ReplayRecord.prototype.PacketId = 0;
        ReplayRecord.prototype.BinData = $util.newBuffer([]);
        ReplayRecord.prototype.StrData = "";
        ReplayRecord.prototype.ExcludePos = 0;

        ReplayRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TimeStamp != null && Object.hasOwnProperty.call(m, "TimeStamp"))
                w.uint32(8).int64(m.TimeStamp);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(16).int32(m.Pos);
            if (m.PacketId != null && Object.hasOwnProperty.call(m, "PacketId"))
                w.uint32(24).int32(m.PacketId);
            if (m.BinData != null && Object.hasOwnProperty.call(m, "BinData"))
                w.uint32(34).bytes(m.BinData);
            if (m.StrData != null && Object.hasOwnProperty.call(m, "StrData"))
                w.uint32(42).string(m.StrData);
            if (m.ExcludePos != null && Object.hasOwnProperty.call(m, "ExcludePos"))
                w.uint32(48).int32(m.ExcludePos);
            return w;
        };

        ReplayRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.ReplayRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.TimeStamp = r.int64();
                    break;
                case 2:
                    m.Pos = r.int32();
                    break;
                case 3:
                    m.PacketId = r.int32();
                    break;
                case 4:
                    m.BinData = r.bytes();
                    break;
                case 5:
                    m.StrData = r.string();
                    break;
                case 6:
                    m.ExcludePos = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReplayRecord;
    })();

    server.ReplaySequene = (function() {

        function ReplaySequene(p) {
            this.Sequenes = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ReplaySequene.prototype.Sequenes = $util.emptyArray;

        ReplaySequene.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Sequenes != null && m.Sequenes.length) {
                for (var i = 0; i < m.Sequenes.length; ++i)
                    $root.server.ReplayRecord.encode(m.Sequenes[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        ReplaySequene.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.ReplaySequene();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Sequenes && m.Sequenes.length))
                        m.Sequenes = [];
                    m.Sequenes.push($root.server.ReplayRecord.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ReplaySequene;
    })();

    server.GRReplaySequene = (function() {

        function GRReplaySequene(p) {
            this.Datas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GRReplaySequene.prototype.Name = "";
        GRReplaySequene.prototype.Rec = null;
        GRReplaySequene.prototype.Platform = "";
        GRReplaySequene.prototype.Channel = "";
        GRReplaySequene.prototype.Promoter = "";
        GRReplaySequene.prototype.ClubId = 0;
        GRReplaySequene.prototype.ClubRoom = "";
        GRReplaySequene.prototype.GameFreeid = 0;
        GRReplaySequene.prototype.RoomId = 0;
        GRReplaySequene.prototype.GameId = 0;
        GRReplaySequene.prototype.RoomMode = 0;
        GRReplaySequene.prototype.NumOfGames = 0;
        GRReplaySequene.prototype.BankerPos = 0;
        GRReplaySequene.prototype.SceneType = 0;
        GRReplaySequene.prototype.LogId = "";
        GRReplaySequene.prototype.Datas = $util.emptyArray;
        GRReplaySequene.prototype.DatasVer = 0;

        GRReplaySequene.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(10).string(m.Name);
            if (m.Rec != null && Object.hasOwnProperty.call(m, "Rec"))
                $root.server.ReplaySequene.encode(m.Rec, w.uint32(18).fork()).ldelim();
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(26).string(m.Platform);
            if (m.Channel != null && Object.hasOwnProperty.call(m, "Channel"))
                w.uint32(34).string(m.Channel);
            if (m.Promoter != null && Object.hasOwnProperty.call(m, "Promoter"))
                w.uint32(42).string(m.Promoter);
            if (m.ClubId != null && Object.hasOwnProperty.call(m, "ClubId"))
                w.uint32(48).int32(m.ClubId);
            if (m.ClubRoom != null && Object.hasOwnProperty.call(m, "ClubRoom"))
                w.uint32(58).string(m.ClubRoom);
            if (m.GameFreeid != null && Object.hasOwnProperty.call(m, "GameFreeid"))
                w.uint32(64).int32(m.GameFreeid);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(72).int32(m.RoomId);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(80).int32(m.GameId);
            if (m.RoomMode != null && Object.hasOwnProperty.call(m, "RoomMode"))
                w.uint32(88).int32(m.RoomMode);
            if (m.NumOfGames != null && Object.hasOwnProperty.call(m, "NumOfGames"))
                w.uint32(96).int32(m.NumOfGames);
            if (m.BankerPos != null && Object.hasOwnProperty.call(m, "BankerPos"))
                w.uint32(104).int32(m.BankerPos);
            if (m.SceneType != null && Object.hasOwnProperty.call(m, "SceneType"))
                w.uint32(112).int32(m.SceneType);
            if (m.LogId != null && Object.hasOwnProperty.call(m, "LogId"))
                w.uint32(122).string(m.LogId);
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.server.ReplayPlayerData.encode(m.Datas[i], w.uint32(130).fork()).ldelim();
            }
            if (m.DatasVer != null && Object.hasOwnProperty.call(m, "DatasVer"))
                w.uint32(136).int32(m.DatasVer);
            return w;
        };

        GRReplaySequene.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GRReplaySequene();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Name = r.string();
                    break;
                case 2:
                    m.Rec = $root.server.ReplaySequene.decode(r, r.uint32());
                    break;
                case 3:
                    m.Platform = r.string();
                    break;
                case 4:
                    m.Channel = r.string();
                    break;
                case 5:
                    m.Promoter = r.string();
                    break;
                case 6:
                    m.ClubId = r.int32();
                    break;
                case 7:
                    m.ClubRoom = r.string();
                    break;
                case 8:
                    m.GameFreeid = r.int32();
                    break;
                case 9:
                    m.RoomId = r.int32();
                    break;
                case 10:
                    m.GameId = r.int32();
                    break;
                case 11:
                    m.RoomMode = r.int32();
                    break;
                case 12:
                    m.NumOfGames = r.int32();
                    break;
                case 13:
                    m.BankerPos = r.int32();
                    break;
                case 14:
                    m.SceneType = r.int32();
                    break;
                case 15:
                    m.LogId = r.string();
                    break;
                case 16:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.server.ReplayPlayerData.decode(r, r.uint32()));
                    break;
                case 17:
                    m.DatasVer = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GRReplaySequene;
    })();

    server.WRLoginRec = (function() {

        function WRLoginRec(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WRLoginRec.prototype.SnId = 0;
        WRLoginRec.prototype.RecType = 0;
        WRLoginRec.prototype.RecTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WRLoginRec.prototype.IsBind = false;
        WRLoginRec.prototype.City = "";
        WRLoginRec.prototype.Platform = "";
        WRLoginRec.prototype.LogId = "";

        WRLoginRec.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.RecType != null && Object.hasOwnProperty.call(m, "RecType"))
                w.uint32(16).int32(m.RecType);
            if (m.RecTime != null && Object.hasOwnProperty.call(m, "RecTime"))
                w.uint32(24).int64(m.RecTime);
            if (m.IsBind != null && Object.hasOwnProperty.call(m, "IsBind"))
                w.uint32(32).bool(m.IsBind);
            if (m.City != null && Object.hasOwnProperty.call(m, "City"))
                w.uint32(42).string(m.City);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(50).string(m.Platform);
            if (m.LogId != null && Object.hasOwnProperty.call(m, "LogId"))
                w.uint32(58).string(m.LogId);
            return w;
        };

        WRLoginRec.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WRLoginRec();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.RecType = r.int32();
                    break;
                case 3:
                    m.RecTime = r.int64();
                    break;
                case 4:
                    m.IsBind = r.bool();
                    break;
                case 5:
                    m.City = r.string();
                    break;
                case 6:
                    m.Platform = r.string();
                    break;
                case 7:
                    m.LogId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WRLoginRec;
    })();

    server.WRGameDetail = (function() {

        function WRGameDetail(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WRGameDetail.prototype.GameDetail = $util.newBuffer([]);

        WRGameDetail.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameDetail != null && Object.hasOwnProperty.call(m, "GameDetail"))
                w.uint32(10).bytes(m.GameDetail);
            return w;
        };

        WRGameDetail.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WRGameDetail();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameDetail = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WRGameDetail;
    })();

    server.WRPlayerData = (function() {

        function WRPlayerData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WRPlayerData.prototype.Sid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WRPlayerData.prototype.PlayerData = $util.newBuffer([]);

        WRPlayerData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Sid != null && Object.hasOwnProperty.call(m, "Sid"))
                w.uint32(8).int64(m.Sid);
            if (m.PlayerData != null && Object.hasOwnProperty.call(m, "PlayerData"))
                w.uint32(18).bytes(m.PlayerData);
            return w;
        };

        WRPlayerData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WRPlayerData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Sid = r.int64();
                    break;
                case 2:
                    m.PlayerData = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WRPlayerData;
    })();

    server.WTPlayerPay = (function() {

        function WTPlayerPay(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WTPlayerPay.prototype.PlayerData = $util.newBuffer([]);
        WTPlayerPay.prototype.AddCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        WTPlayerPay.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.PlayerData != null && Object.hasOwnProperty.call(m, "PlayerData"))
                w.uint32(10).bytes(m.PlayerData);
            if (m.AddCoin != null && Object.hasOwnProperty.call(m, "AddCoin"))
                w.uint32(16).int64(m.AddCoin);
            return w;
        };

        WTPlayerPay.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WTPlayerPay();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.PlayerData = r.bytes();
                    break;
                case 2:
                    m.AddCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WTPlayerPay;
    })();

    server.PlayerGameRec = (function() {

        function PlayerGameRec(p) {
            this.OtherParams = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerGameRec.prototype.Id = 0;
        PlayerGameRec.prototype.Name = "";
        PlayerGameRec.prototype.Head = 0;
        PlayerGameRec.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerGameRec.prototype.Pos = 0;
        PlayerGameRec.prototype.OtherParams = $util.emptyArray;

        PlayerGameRec.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Id != null && Object.hasOwnProperty.call(m, "Id"))
                w.uint32(8).int32(m.Id);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(18).string(m.Name);
            if (m.Head != null && Object.hasOwnProperty.call(m, "Head"))
                w.uint32(24).int32(m.Head);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(32).int64(m.Coin);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(40).int32(m.Pos);
            if (m.OtherParams != null && m.OtherParams.length) {
                w.uint32(50).fork();
                for (var i = 0; i < m.OtherParams.length; ++i)
                    w.int32(m.OtherParams[i]);
                w.ldelim();
            }
            return w;
        };

        PlayerGameRec.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.PlayerGameRec();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Id = r.int32();
                    break;
                case 2:
                    m.Name = r.string();
                    break;
                case 3:
                    m.Head = r.int32();
                    break;
                case 4:
                    m.Coin = r.int64();
                    break;
                case 5:
                    m.Pos = r.int32();
                    break;
                case 6:
                    if (!(m.OtherParams && m.OtherParams.length))
                        m.OtherParams = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.OtherParams.push(r.int32());
                    } else
                        m.OtherParams.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerGameRec;
    })();

    server.GWGameRec = (function() {

        function GWGameRec(p) {
            this.Datas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWGameRec.prototype.RoomId = 0;
        GWGameRec.prototype.Datas = $util.emptyArray;
        GWGameRec.prototype.NumOfGames = 0;
        GWGameRec.prototype.GameTime = 0;
        GWGameRec.prototype.ReplayCode = "";

        GWGameRec.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.server.PlayerGameRec.encode(m.Datas[i], w.uint32(18).fork()).ldelim();
            }
            if (m.NumOfGames != null && Object.hasOwnProperty.call(m, "NumOfGames"))
                w.uint32(24).int32(m.NumOfGames);
            if (m.GameTime != null && Object.hasOwnProperty.call(m, "GameTime"))
                w.uint32(32).int32(m.GameTime);
            if (m.ReplayCode != null && Object.hasOwnProperty.call(m, "ReplayCode"))
                w.uint32(42).string(m.ReplayCode);
            return w;
        };

        GWGameRec.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWGameRec();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.server.PlayerGameRec.decode(r, r.uint32()));
                    break;
                case 3:
                    m.NumOfGames = r.int32();
                    break;
                case 4:
                    m.GameTime = r.int32();
                    break;
                case 5:
                    m.ReplayCode = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWGameRec;
    })();

    server.GWSceneStart = (function() {

        function GWSceneStart(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWSceneStart.prototype.RoomId = 0;
        GWSceneStart.prototype.CurrRound = 0;
        GWSceneStart.prototype.Start = false;
        GWSceneStart.prototype.MaxRound = 0;

        GWSceneStart.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.CurrRound != null && Object.hasOwnProperty.call(m, "CurrRound"))
                w.uint32(16).int32(m.CurrRound);
            if (m.Start != null && Object.hasOwnProperty.call(m, "Start"))
                w.uint32(24).bool(m.Start);
            if (m.MaxRound != null && Object.hasOwnProperty.call(m, "MaxRound"))
                w.uint32(32).int32(m.MaxRound);
            return w;
        };

        GWSceneStart.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWSceneStart();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.CurrRound = r.int32();
                    break;
                case 3:
                    m.Start = r.bool();
                    break;
                case 4:
                    m.MaxRound = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWSceneStart;
    })();

    server.PlayerCtx = (function() {

        function PlayerCtx(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerCtx.prototype.SnId = 0;
        PlayerCtx.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        PlayerCtx.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int64(m.Coin);
            return w;
        };

        PlayerCtx.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.PlayerCtx();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Coin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerCtx;
    })();

    server.FishRecord = (function() {

        function FishRecord(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        FishRecord.prototype.FishId = 0;
        FishRecord.prototype.Count = 0;

        FishRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.FishId != null && Object.hasOwnProperty.call(m, "FishId"))
                w.uint32(8).int32(m.FishId);
            if (m.Count != null && Object.hasOwnProperty.call(m, "Count"))
                w.uint32(16).int32(m.Count);
            return w;
        };

        FishRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.FishRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.FishId = r.int32();
                    break;
                case 2:
                    m.Count = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return FishRecord;
    })();

    server.GWFishRecord = (function() {

        function GWFishRecord(p) {
            this.FishRecords = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWFishRecord.prototype.GameFreeId = 0;
        GWFishRecord.prototype.SnId = 0;
        GWFishRecord.prototype.FishRecords = $util.emptyArray;

        GWFishRecord.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(16).int32(m.SnId);
            if (m.FishRecords != null && m.FishRecords.length) {
                for (var i = 0; i < m.FishRecords.length; ++i)
                    $root.server.FishRecord.encode(m.FishRecords[i], w.uint32(26).fork()).ldelim();
            }
            return w;
        };

        GWFishRecord.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWFishRecord();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    m.SnId = r.int32();
                    break;
                case 3:
                    if (!(m.FishRecords && m.FishRecords.length))
                        m.FishRecords = [];
                    m.FishRecords.push($root.server.FishRecord.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWFishRecord;
    })();

    server.GWSceneState = (function() {

        function GWSceneState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWSceneState.prototype.RoomId = 0;
        GWSceneState.prototype.CurrState = 0;
        GWSceneState.prototype.Fishing = 0;

        GWSceneState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.CurrState != null && Object.hasOwnProperty.call(m, "CurrState"))
                w.uint32(16).int32(m.CurrState);
            if (m.Fishing != null && Object.hasOwnProperty.call(m, "Fishing"))
                w.uint32(24).int32(m.Fishing);
            return w;
        };

        GWSceneState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWSceneState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.CurrState = r.int32();
                    break;
                case 3:
                    m.Fishing = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWSceneState;
    })();

    server.WRInviteRobot = (function() {

        function WRInviteRobot(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WRInviteRobot.prototype.RoomId = 0;
        WRInviteRobot.prototype.Cnt = 0;
        WRInviteRobot.prototype.MatchId = 0;
        WRInviteRobot.prototype.Platform = "";
        WRInviteRobot.prototype.IsMatch = false;
        WRInviteRobot.prototype.NeedAwait = false;

        WRInviteRobot.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.Cnt != null && Object.hasOwnProperty.call(m, "Cnt"))
                w.uint32(16).int32(m.Cnt);
            if (m.MatchId != null && Object.hasOwnProperty.call(m, "MatchId"))
                w.uint32(24).int32(m.MatchId);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(34).string(m.Platform);
            if (m.IsMatch != null && Object.hasOwnProperty.call(m, "IsMatch"))
                w.uint32(40).bool(m.IsMatch);
            if (m.NeedAwait != null && Object.hasOwnProperty.call(m, "NeedAwait"))
                w.uint32(48).bool(m.NeedAwait);
            return w;
        };

        WRInviteRobot.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WRInviteRobot();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.Cnt = r.int32();
                    break;
                case 3:
                    m.MatchId = r.int32();
                    break;
                case 4:
                    m.Platform = r.string();
                    break;
                case 5:
                    m.IsMatch = r.bool();
                    break;
                case 6:
                    m.NeedAwait = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WRInviteRobot;
    })();

    server.WRInviteCreateRoom = (function() {

        function WRInviteCreateRoom(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WRInviteCreateRoom.prototype.Cnt = 0;
        WRInviteCreateRoom.prototype.MatchId = 0;

        WRInviteCreateRoom.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Cnt != null && Object.hasOwnProperty.call(m, "Cnt"))
                w.uint32(8).int32(m.Cnt);
            if (m.MatchId != null && Object.hasOwnProperty.call(m, "MatchId"))
                w.uint32(16).int32(m.MatchId);
            return w;
        };

        WRInviteCreateRoom.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WRInviteCreateRoom();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Cnt = r.int32();
                    break;
                case 2:
                    m.MatchId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WRInviteCreateRoom;
    })();

    server.WGAgentKickOutPlayer = (function() {

        function WGAgentKickOutPlayer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGAgentKickOutPlayer.prototype.RoomId = 0;
        WGAgentKickOutPlayer.prototype.AgentId = 0;
        WGAgentKickOutPlayer.prototype.PlayerId = 0;
        WGAgentKickOutPlayer.prototype.AgentSid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        WGAgentKickOutPlayer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.AgentId != null && Object.hasOwnProperty.call(m, "AgentId"))
                w.uint32(16).int32(m.AgentId);
            if (m.PlayerId != null && Object.hasOwnProperty.call(m, "PlayerId"))
                w.uint32(24).int32(m.PlayerId);
            if (m.AgentSid != null && Object.hasOwnProperty.call(m, "AgentSid"))
                w.uint32(32).int64(m.AgentSid);
            return w;
        };

        WGAgentKickOutPlayer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGAgentKickOutPlayer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.AgentId = r.int32();
                    break;
                case 3:
                    m.PlayerId = r.int32();
                    break;
                case 4:
                    m.AgentSid = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGAgentKickOutPlayer;
    })();

    server.WDDataAnalysis = (function() {

        function WDDataAnalysis(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WDDataAnalysis.prototype.DataType = 0;
        WDDataAnalysis.prototype.Data = $util.newBuffer([]);

        WDDataAnalysis.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.DataType != null && Object.hasOwnProperty.call(m, "DataType"))
                w.uint32(8).int32(m.DataType);
            if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
                w.uint32(18).bytes(m.Data);
            return w;
        };

        WDDataAnalysis.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WDDataAnalysis();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.DataType = r.int32();
                    break;
                case 2:
                    m.Data = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WDDataAnalysis;
    })();

    server.PlayerCard = (function() {

        function PlayerCard(p) {
            this.Cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerCard.prototype.Pos = 0;
        PlayerCard.prototype.Cards = $util.emptyArray;

        PlayerCard.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(8).int32(m.Pos);
            if (m.Cards != null && m.Cards.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            return w;
        };

        PlayerCard.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.PlayerCard();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Pos = r.int32();
                    break;
                case 2:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerCard;
    })();

    server.GNPlayerCards = (function() {

        function GNPlayerCards(p) {
            this.PlayerCards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GNPlayerCards.prototype.SceneId = 0;
        GNPlayerCards.prototype.PlayerCards = $util.emptyArray;
        GNPlayerCards.prototype.NowRobotMode = 0;

        GNPlayerCards.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.PlayerCards != null && m.PlayerCards.length) {
                for (var i = 0; i < m.PlayerCards.length; ++i)
                    $root.server.PlayerCard.encode(m.PlayerCards[i], w.uint32(18).fork()).ldelim();
            }
            if (m.NowRobotMode != null && Object.hasOwnProperty.call(m, "NowRobotMode"))
                w.uint32(24).int32(m.NowRobotMode);
            return w;
        };

        GNPlayerCards.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GNPlayerCards();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    if (!(m.PlayerCards && m.PlayerCards.length))
                        m.PlayerCards = [];
                    m.PlayerCards.push($root.server.PlayerCard.decode(r, r.uint32()));
                    break;
                case 3:
                    m.NowRobotMode = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GNPlayerCards;
    })();

    server.RobotData = (function() {

        function RobotData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RobotData.prototype.TotalIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RobotData.prototype.TotalOut = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RobotData.prototype.CoinPayTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RobotData.prototype.CoinExchangeTotal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        RobotData.prototype.Pos = 0;

        RobotData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.TotalIn != null && Object.hasOwnProperty.call(m, "TotalIn"))
                w.uint32(16).int64(m.TotalIn);
            if (m.TotalOut != null && Object.hasOwnProperty.call(m, "TotalOut"))
                w.uint32(24).int64(m.TotalOut);
            if (m.CoinPayTotal != null && Object.hasOwnProperty.call(m, "CoinPayTotal"))
                w.uint32(32).int64(m.CoinPayTotal);
            if (m.CoinExchangeTotal != null && Object.hasOwnProperty.call(m, "CoinExchangeTotal"))
                w.uint32(40).int64(m.CoinExchangeTotal);
            if (m.Pos != null && Object.hasOwnProperty.call(m, "Pos"))
                w.uint32(48).int32(m.Pos);
            return w;
        };

        RobotData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.RobotData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 2:
                    m.TotalIn = r.int64();
                    break;
                case 3:
                    m.TotalOut = r.int64();
                    break;
                case 4:
                    m.CoinPayTotal = r.int64();
                    break;
                case 5:
                    m.CoinExchangeTotal = r.int64();
                    break;
                case 6:
                    m.Pos = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RobotData;
    })();

    server.GNPlayerParam = (function() {

        function GNPlayerParam(p) {
            this.Playerdata = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GNPlayerParam.prototype.SceneId = 0;
        GNPlayerParam.prototype.Playerdata = $util.emptyArray;

        GNPlayerParam.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.Playerdata != null && m.Playerdata.length) {
                for (var i = 0; i < m.Playerdata.length; ++i)
                    $root.server.RobotData.encode(m.Playerdata[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        GNPlayerParam.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GNPlayerParam();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    if (!(m.Playerdata && m.Playerdata.length))
                        m.Playerdata = [];
                    m.Playerdata.push($root.server.RobotData.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GNPlayerParam;
    })();

    server.GWRebuildScene = (function() {

        function GWRebuildScene(p) {
            this.SceneIds = [];
            this.PlayerIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWRebuildScene.prototype.SceneIds = $util.emptyArray;
        GWRebuildScene.prototype.PlayerIds = $util.emptyArray;

        GWRebuildScene.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneIds != null && m.SceneIds.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.SceneIds.length; ++i)
                    w.int32(m.SceneIds[i]);
                w.ldelim();
            }
            if (m.PlayerIds != null && m.PlayerIds.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.PlayerIds.length; ++i)
                    w.int32(m.PlayerIds[i]);
                w.ldelim();
            }
            return w;
        };

        GWRebuildScene.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWRebuildScene();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.SceneIds && m.SceneIds.length))
                        m.SceneIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.SceneIds.push(r.int32());
                    } else
                        m.SceneIds.push(r.int32());
                    break;
                case 2:
                    if (!(m.PlayerIds && m.PlayerIds.length))
                        m.PlayerIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.PlayerIds.push(r.int32());
                    } else
                        m.PlayerIds.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWRebuildScene;
    })();

    server.WGRebindPlayerSnId = (function() {

        function WGRebindPlayerSnId(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGRebindPlayerSnId.prototype.OldSnId = 0;
        WGRebindPlayerSnId.prototype.NewSnId = 0;

        WGRebindPlayerSnId.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.OldSnId != null && Object.hasOwnProperty.call(m, "OldSnId"))
                w.uint32(8).int32(m.OldSnId);
            if (m.NewSnId != null && Object.hasOwnProperty.call(m, "NewSnId"))
                w.uint32(16).int32(m.NewSnId);
            return w;
        };

        WGRebindPlayerSnId.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGRebindPlayerSnId();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.OldSnId = r.int32();
                    break;
                case 2:
                    m.NewSnId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGRebindPlayerSnId;
    })();

    server.GWPlayerFlag = (function() {

        function GWPlayerFlag(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWPlayerFlag.prototype.SnId = 0;
        GWPlayerFlag.prototype.RoomId = 0;
        GWPlayerFlag.prototype.Flag = 0;

        GWPlayerFlag.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(16).int32(m.RoomId);
            if (m.Flag != null && Object.hasOwnProperty.call(m, "Flag"))
                w.uint32(24).int32(m.Flag);
            return w;
        };

        GWPlayerFlag.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWPlayerFlag();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.RoomId = r.int32();
                    break;
                case 3:
                    m.Flag = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWPlayerFlag;
    })();

    server.WGHundredOp = (function() {

        function WGHundredOp(p) {
            this.Params = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGHundredOp.prototype.snid = 0;
        WGHundredOp.prototype.OpCode = 0;
        WGHundredOp.prototype.Params = $util.emptyArray;

        WGHundredOp.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.snid != null && Object.hasOwnProperty.call(m, "snid"))
                w.uint32(8).int32(m.snid);
            if (m.OpCode != null && Object.hasOwnProperty.call(m, "OpCode"))
                w.uint32(16).int32(m.OpCode);
            if (m.Params != null && m.Params.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Params.length; ++i)
                    w.int64(m.Params[i]);
                w.ldelim();
            }
            return w;
        };

        WGHundredOp.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGHundredOp();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.snid = r.int32();
                    break;
                case 2:
                    m.OpCode = r.int32();
                    break;
                case 3:
                    if (!(m.Params && m.Params.length))
                        m.Params = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Params.push(r.int64());
                    } else
                        m.Params.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGHundredOp;
    })();

    server.GWNewNotice = (function() {

        function GWNewNotice(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWNewNotice.prototype.ch = "";
        GWNewNotice.prototype.content = "";
        GWNewNotice.prototype.start = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWNewNotice.prototype.interval = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWNewNotice.prototype.count = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWNewNotice.prototype.msgtype = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWNewNotice.prototype.platform = "";
        GWNewNotice.prototype.priority = 0;
        GWNewNotice.prototype.isrob = false;

        GWNewNotice.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ch != null && Object.hasOwnProperty.call(m, "ch"))
                w.uint32(10).string(m.ch);
            if (m.content != null && Object.hasOwnProperty.call(m, "content"))
                w.uint32(18).string(m.content);
            if (m.start != null && Object.hasOwnProperty.call(m, "start"))
                w.uint32(24).int64(m.start);
            if (m.interval != null && Object.hasOwnProperty.call(m, "interval"))
                w.uint32(32).int64(m.interval);
            if (m.count != null && Object.hasOwnProperty.call(m, "count"))
                w.uint32(40).int64(m.count);
            if (m.msgtype != null && Object.hasOwnProperty.call(m, "msgtype"))
                w.uint32(48).int64(m.msgtype);
            if (m.platform != null && Object.hasOwnProperty.call(m, "platform"))
                w.uint32(58).string(m.platform);
            if (m.priority != null && Object.hasOwnProperty.call(m, "priority"))
                w.uint32(64).int32(m.priority);
            if (m.isrob != null && Object.hasOwnProperty.call(m, "isrob"))
                w.uint32(72).bool(m.isrob);
            return w;
        };

        GWNewNotice.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWNewNotice();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ch = r.string();
                    break;
                case 2:
                    m.content = r.string();
                    break;
                case 3:
                    m.start = r.int64();
                    break;
                case 4:
                    m.interval = r.int64();
                    break;
                case 5:
                    m.count = r.int64();
                    break;
                case 6:
                    m.msgtype = r.int64();
                    break;
                case 7:
                    m.platform = r.string();
                    break;
                case 8:
                    m.priority = r.int32();
                    break;
                case 9:
                    m.isrob = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWNewNotice;
    })();

    server.PlayerStatics = (function() {

        function PlayerStatics(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerStatics.prototype.SnId = 0;
        PlayerStatics.prototype.GameTimes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerStatics.prototype.TotalIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerStatics.prototype.TotalOut = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerStatics.prototype.IsFoolPlayer = false;
        PlayerStatics.prototype.LoseGameTimes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerStatics.prototype.WinGameTimes = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerStatics.prototype.TotalSysIn = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerStatics.prototype.TotalSysOut = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        PlayerStatics.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.GameTimes != null && Object.hasOwnProperty.call(m, "GameTimes"))
                w.uint32(16).int64(m.GameTimes);
            if (m.TotalIn != null && Object.hasOwnProperty.call(m, "TotalIn"))
                w.uint32(24).int64(m.TotalIn);
            if (m.TotalOut != null && Object.hasOwnProperty.call(m, "TotalOut"))
                w.uint32(32).int64(m.TotalOut);
            if (m.IsFoolPlayer != null && Object.hasOwnProperty.call(m, "IsFoolPlayer"))
                w.uint32(40).bool(m.IsFoolPlayer);
            if (m.LoseGameTimes != null && Object.hasOwnProperty.call(m, "LoseGameTimes"))
                w.uint32(48).int64(m.LoseGameTimes);
            if (m.WinGameTimes != null && Object.hasOwnProperty.call(m, "WinGameTimes"))
                w.uint32(56).int64(m.WinGameTimes);
            if (m.TotalSysIn != null && Object.hasOwnProperty.call(m, "TotalSysIn"))
                w.uint32(64).int64(m.TotalSysIn);
            if (m.TotalSysOut != null && Object.hasOwnProperty.call(m, "TotalSysOut"))
                w.uint32(72).int64(m.TotalSysOut);
            return w;
        };

        PlayerStatics.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.PlayerStatics();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.GameTimes = r.int64();
                    break;
                case 3:
                    m.TotalIn = r.int64();
                    break;
                case 4:
                    m.TotalOut = r.int64();
                    break;
                case 5:
                    m.IsFoolPlayer = r.bool();
                    break;
                case 6:
                    m.LoseGameTimes = r.int64();
                    break;
                case 7:
                    m.WinGameTimes = r.int64();
                    break;
                case 8:
                    m.TotalSysIn = r.int64();
                    break;
                case 9:
                    m.TotalSysOut = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerStatics;
    })();

    server.GWPlayerStatics = (function() {

        function GWPlayerStatics(p) {
            this.Datas = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWPlayerStatics.prototype.RoomId = 0;
        GWPlayerStatics.prototype.Datas = $util.emptyArray;
        GWPlayerStatics.prototype.ClubId = 0;
        GWPlayerStatics.prototype.PumpTotalCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GWPlayerStatics.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.Datas != null && m.Datas.length) {
                for (var i = 0; i < m.Datas.length; ++i)
                    $root.server.PlayerStatics.encode(m.Datas[i], w.uint32(18).fork()).ldelim();
            }
            if (m.ClubId != null && Object.hasOwnProperty.call(m, "ClubId"))
                w.uint32(24).int32(m.ClubId);
            if (m.PumpTotalCoin != null && Object.hasOwnProperty.call(m, "PumpTotalCoin"))
                w.uint32(32).int64(m.PumpTotalCoin);
            return w;
        };

        GWPlayerStatics.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWPlayerStatics();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    if (!(m.Datas && m.Datas.length))
                        m.Datas = [];
                    m.Datas.push($root.server.PlayerStatics.decode(r, r.uint32()));
                    break;
                case 3:
                    m.ClubId = r.int32();
                    break;
                case 4:
                    m.PumpTotalCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWPlayerStatics;
    })();

    server.WGResetCoinPool = (function() {

        function WGResetCoinPool(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGResetCoinPool.prototype.Platform = "";
        WGResetCoinPool.prototype.GameFreeId = 0;
        WGResetCoinPool.prototype.ServerId = 0;
        WGResetCoinPool.prototype.GroupId = 0;
        WGResetCoinPool.prototype.PoolType = 0;
        WGResetCoinPool.prototype.Value = 0;

        WGResetCoinPool.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(10).string(m.Platform);
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(16).int32(m.GameFreeId);
            if (m.ServerId != null && Object.hasOwnProperty.call(m, "ServerId"))
                w.uint32(24).int32(m.ServerId);
            if (m.GroupId != null && Object.hasOwnProperty.call(m, "GroupId"))
                w.uint32(32).int32(m.GroupId);
            if (m.PoolType != null && Object.hasOwnProperty.call(m, "PoolType"))
                w.uint32(40).int32(m.PoolType);
            if (m.Value != null && Object.hasOwnProperty.call(m, "Value"))
                w.uint32(48).int32(m.Value);
            return w;
        };

        WGResetCoinPool.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGResetCoinPool();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Platform = r.string();
                    break;
                case 2:
                    m.GameFreeId = r.int32();
                    break;
                case 3:
                    m.ServerId = r.int32();
                    break;
                case 4:
                    m.GroupId = r.int32();
                    break;
                case 5:
                    m.PoolType = r.int32();
                    break;
                case 6:
                    m.Value = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGResetCoinPool;
    })();

    server.WGSetPlayerBlackLevel = (function() {

        function WGSetPlayerBlackLevel(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGSetPlayerBlackLevel.prototype.SnId = 0;
        WGSetPlayerBlackLevel.prototype.SceneId = 0;
        WGSetPlayerBlackLevel.prototype.WBLevel = 0;
        WGSetPlayerBlackLevel.prototype.WBCoinLimit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGSetPlayerBlackLevel.prototype.ResetTotalCoin = false;
        WGSetPlayerBlackLevel.prototype.MaxNum = 0;

        WGSetPlayerBlackLevel.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(16).int32(m.SceneId);
            if (m.WBLevel != null && Object.hasOwnProperty.call(m, "WBLevel"))
                w.uint32(24).int32(m.WBLevel);
            if (m.WBCoinLimit != null && Object.hasOwnProperty.call(m, "WBCoinLimit"))
                w.uint32(32).int64(m.WBCoinLimit);
            if (m.ResetTotalCoin != null && Object.hasOwnProperty.call(m, "ResetTotalCoin"))
                w.uint32(40).bool(m.ResetTotalCoin);
            if (m.MaxNum != null && Object.hasOwnProperty.call(m, "MaxNum"))
                w.uint32(48).int32(m.MaxNum);
            return w;
        };

        WGSetPlayerBlackLevel.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGSetPlayerBlackLevel();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.SceneId = r.int32();
                    break;
                case 3:
                    m.WBLevel = r.int32();
                    break;
                case 4:
                    m.WBCoinLimit = r.int64();
                    break;
                case 5:
                    m.ResetTotalCoin = r.bool();
                    break;
                case 6:
                    m.MaxNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGSetPlayerBlackLevel;
    })();

    server.GWAutoRelieveWBLevel = (function() {

        function GWAutoRelieveWBLevel(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWAutoRelieveWBLevel.prototype.SnId = 0;

        GWAutoRelieveWBLevel.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            return w;
        };

        GWAutoRelieveWBLevel.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWAutoRelieveWBLevel();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWAutoRelieveWBLevel;
    })();

    server.GWScenePlayerLog = (function() {

        function GWScenePlayerLog(p) {
            this.Snids = [];
            this.IsGameing = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWScenePlayerLog.prototype.GameId = 0;
        GWScenePlayerLog.prototype.GameFreeId = 0;
        GWScenePlayerLog.prototype.Snids = $util.emptyArray;
        GWScenePlayerLog.prototype.IsGameing = $util.emptyArray;

        GWScenePlayerLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(16).int32(m.GameFreeId);
            if (m.Snids != null && m.Snids.length) {
                w.uint32(26).fork();
                for (var i = 0; i < m.Snids.length; ++i)
                    w.int32(m.Snids[i]);
                w.ldelim();
            }
            if (m.IsGameing != null && m.IsGameing.length) {
                w.uint32(34).fork();
                for (var i = 0; i < m.IsGameing.length; ++i)
                    w.bool(m.IsGameing[i]);
                w.ldelim();
            }
            return w;
        };

        GWScenePlayerLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWScenePlayerLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.GameFreeId = r.int32();
                    break;
                case 3:
                    if (!(m.Snids && m.Snids.length))
                        m.Snids = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Snids.push(r.int32());
                    } else
                        m.Snids.push(r.int32());
                    break;
                case 4:
                    if (!(m.IsGameing && m.IsGameing.length))
                        m.IsGameing = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.IsGameing.push(r.bool());
                    } else
                        m.IsGameing.push(r.bool());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWScenePlayerLog;
    })();

    server.GWPlayerForceLeave = (function() {

        function GWPlayerForceLeave(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWPlayerForceLeave.prototype.RoomId = 0;
        GWPlayerForceLeave.prototype.PlayerId = 0;
        GWPlayerForceLeave.prototype.Reason = 0;
        GWPlayerForceLeave.prototype.EnterTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        GWPlayerForceLeave.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.PlayerId != null && Object.hasOwnProperty.call(m, "PlayerId"))
                w.uint32(16).int32(m.PlayerId);
            if (m.Reason != null && Object.hasOwnProperty.call(m, "Reason"))
                w.uint32(24).int32(m.Reason);
            if (m.EnterTs != null && Object.hasOwnProperty.call(m, "EnterTs"))
                w.uint32(32).int64(m.EnterTs);
            return w;
        };

        GWPlayerForceLeave.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWPlayerForceLeave();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.PlayerId = r.int32();
                    break;
                case 3:
                    m.Reason = r.int32();
                    break;
                case 4:
                    m.EnterTs = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWPlayerForceLeave;
    })();

    server.PlayerBet = (function() {

        function PlayerBet(p) {
            this.Card = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerBet.prototype.SnId = 0;
        PlayerBet.prototype.Bet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerBet.prototype.Gain = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerBet.prototype.Tax = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerBet.prototype.OtherTax = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerBet.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerBet.prototype.FlowCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerBet.prototype.Lottery = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerBet.prototype.Kind = 0;
        PlayerBet.prototype.Card = $util.emptyArray;
        PlayerBet.prototype.GameCoinTs = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        PlayerBet.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Bet != null && Object.hasOwnProperty.call(m, "Bet"))
                w.uint32(16).int64(m.Bet);
            if (m.Gain != null && Object.hasOwnProperty.call(m, "Gain"))
                w.uint32(24).int64(m.Gain);
            if (m.Tax != null && Object.hasOwnProperty.call(m, "Tax"))
                w.uint32(32).int64(m.Tax);
            if (m.OtherTax != null && Object.hasOwnProperty.call(m, "OtherTax"))
                w.uint32(40).int64(m.OtherTax);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(48).int64(m.Coin);
            if (m.FlowCoin != null && Object.hasOwnProperty.call(m, "FlowCoin"))
                w.uint32(56).int64(m.FlowCoin);
            if (m.Lottery != null && Object.hasOwnProperty.call(m, "Lottery"))
                w.uint32(64).int64(m.Lottery);
            if (m.Kind != null && Object.hasOwnProperty.call(m, "Kind"))
                w.uint32(72).int32(m.Kind);
            if (m.Card != null && m.Card.length) {
                w.uint32(82).fork();
                for (var i = 0; i < m.Card.length; ++i)
                    w.int32(m.Card[i]);
                w.ldelim();
            }
            if (m.GameCoinTs != null && Object.hasOwnProperty.call(m, "GameCoinTs"))
                w.uint32(88).int64(m.GameCoinTs);
            return w;
        };

        PlayerBet.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.PlayerBet();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Bet = r.int64();
                    break;
                case 3:
                    m.Gain = r.int64();
                    break;
                case 4:
                    m.Tax = r.int64();
                    break;
                case 5:
                    m.OtherTax = r.int64();
                    break;
                case 6:
                    m.Coin = r.int64();
                    break;
                case 7:
                    m.FlowCoin = r.int64();
                    break;
                case 8:
                    m.Lottery = r.int64();
                    break;
                case 9:
                    m.Kind = r.int32();
                    break;
                case 10:
                    if (!(m.Card && m.Card.length))
                        m.Card = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Card.push(r.int32());
                    } else
                        m.Card.push(r.int32());
                    break;
                case 11:
                    m.GameCoinTs = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerBet;
    })();

    server.GWPlayerBet = (function() {

        function GWPlayerBet(p) {
            this.PlayerBets = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWPlayerBet.prototype.GameFreeId = 0;
        GWPlayerBet.prototype.SceneId = 0;
        GWPlayerBet.prototype.RecId = "";
        GWPlayerBet.prototype.RobotGain = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWPlayerBet.prototype.PlayerBets = $util.emptyArray;

        GWPlayerBet.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(16).int32(m.SceneId);
            if (m.RecId != null && Object.hasOwnProperty.call(m, "RecId"))
                w.uint32(26).string(m.RecId);
            if (m.RobotGain != null && Object.hasOwnProperty.call(m, "RobotGain"))
                w.uint32(32).int64(m.RobotGain);
            if (m.PlayerBets != null && m.PlayerBets.length) {
                for (var i = 0; i < m.PlayerBets.length; ++i)
                    $root.server.PlayerBet.encode(m.PlayerBets[i], w.uint32(42).fork()).ldelim();
            }
            return w;
        };

        GWPlayerBet.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWPlayerBet();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    m.SceneId = r.int32();
                    break;
                case 3:
                    m.RecId = r.string();
                    break;
                case 4:
                    m.RobotGain = r.int64();
                    break;
                case 5:
                    if (!(m.PlayerBets && m.PlayerBets.length))
                        m.PlayerBets = [];
                    m.PlayerBets.push($root.server.PlayerBet.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWPlayerBet;
    })();

    server.PlayerWinScore = (function() {

        function PlayerWinScore(p) {
            this.Card = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerWinScore.prototype.SnId = 0;
        PlayerWinScore.prototype.WinScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerWinScore.prototype.Gain = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerWinScore.prototype.Tax = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerWinScore.prototype.Lottery = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerWinScore.prototype.Kind = 0;
        PlayerWinScore.prototype.Card = $util.emptyArray;

        PlayerWinScore.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(16).int32(m.SnId);
            if (m.WinScore != null && Object.hasOwnProperty.call(m, "WinScore"))
                w.uint32(24).int64(m.WinScore);
            if (m.Gain != null && Object.hasOwnProperty.call(m, "Gain"))
                w.uint32(32).int64(m.Gain);
            if (m.Tax != null && Object.hasOwnProperty.call(m, "Tax"))
                w.uint32(40).int64(m.Tax);
            if (m.Lottery != null && Object.hasOwnProperty.call(m, "Lottery"))
                w.uint32(48).int64(m.Lottery);
            if (m.Kind != null && Object.hasOwnProperty.call(m, "Kind"))
                w.uint32(56).int32(m.Kind);
            if (m.Card != null && m.Card.length) {
                w.uint32(66).fork();
                for (var i = 0; i < m.Card.length; ++i)
                    w.int32(m.Card[i]);
                w.ldelim();
            }
            return w;
        };

        PlayerWinScore.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.PlayerWinScore();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 2:
                    m.SnId = r.int32();
                    break;
                case 3:
                    m.WinScore = r.int64();
                    break;
                case 4:
                    m.Gain = r.int64();
                    break;
                case 5:
                    m.Tax = r.int64();
                    break;
                case 6:
                    m.Lottery = r.int64();
                    break;
                case 7:
                    m.Kind = r.int32();
                    break;
                case 8:
                    if (!(m.Card && m.Card.length))
                        m.Card = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Card.push(r.int32());
                    } else
                        m.Card.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerWinScore;
    })();

    server.GWPlayerWinScore = (function() {

        function GWPlayerWinScore(p) {
            this.PlayerWinScores = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWPlayerWinScore.prototype.GameFreeId = 0;
        GWPlayerWinScore.prototype.PlayerWinScores = $util.emptyArray;
        GWPlayerWinScore.prototype.RobotGain = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWPlayerWinScore.prototype.SceneId = 0;
        GWPlayerWinScore.prototype.RecId = "";

        GWPlayerWinScore.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.PlayerWinScores != null && m.PlayerWinScores.length) {
                for (var i = 0; i < m.PlayerWinScores.length; ++i)
                    $root.server.PlayerWinScore.encode(m.PlayerWinScores[i], w.uint32(18).fork()).ldelim();
            }
            if (m.RobotGain != null && Object.hasOwnProperty.call(m, "RobotGain"))
                w.uint32(24).int64(m.RobotGain);
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(32).int32(m.SceneId);
            if (m.RecId != null && Object.hasOwnProperty.call(m, "RecId"))
                w.uint32(42).string(m.RecId);
            return w;
        };

        GWPlayerWinScore.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWPlayerWinScore();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    if (!(m.PlayerWinScores && m.PlayerWinScores.length))
                        m.PlayerWinScores = [];
                    m.PlayerWinScores.push($root.server.PlayerWinScore.decode(r, r.uint32()));
                    break;
                case 3:
                    m.RobotGain = r.int64();
                    break;
                case 4:
                    m.SceneId = r.int32();
                    break;
                case 5:
                    m.RecId = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWPlayerWinScore;
    })();

    server.WGPayerOnGameCount = (function() {

        function WGPayerOnGameCount(p) {
            this.DTCount = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGPayerOnGameCount.prototype.DTCount = $util.emptyArray;

        WGPayerOnGameCount.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.DTCount != null && m.DTCount.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.DTCount.length; ++i)
                    w.int32(m.DTCount[i]);
                w.ldelim();
            }
            return w;
        };

        WGPayerOnGameCount.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGPayerOnGameCount();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.DTCount && m.DTCount.length))
                        m.DTCount = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.DTCount.push(r.int32());
                    } else
                        m.DTCount.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGPayerOnGameCount;
    })();

    server.GRGameFreeData = (function() {

        function GRGameFreeData(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GRGameFreeData.prototype.RoomId = 0;
        GRGameFreeData.prototype.DBGameFree = null;

        GRGameFreeData.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.DBGameFree != null && Object.hasOwnProperty.call(m, "DBGameFree"))
                $root.server.DB_GameFree.encode(m.DBGameFree, w.uint32(18).fork()).ldelim();
            return w;
        };

        GRGameFreeData.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GRGameFreeData();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.DBGameFree = $root.server.DB_GameFree.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GRGameFreeData;
    })();

    server.WGSyncPlayerSafeBoxCoin = (function() {

        function WGSyncPlayerSafeBoxCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGSyncPlayerSafeBoxCoin.prototype.SnId = 0;
        WGSyncPlayerSafeBoxCoin.prototype.SafeBoxCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        WGSyncPlayerSafeBoxCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.SafeBoxCoin != null && Object.hasOwnProperty.call(m, "SafeBoxCoin"))
                w.uint32(16).int64(m.SafeBoxCoin);
            return w;
        };

        WGSyncPlayerSafeBoxCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGSyncPlayerSafeBoxCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.SafeBoxCoin = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGSyncPlayerSafeBoxCoin;
    })();

    server.WGClubMessage = (function() {

        function WGClubMessage(p) {
            this.SceneIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGClubMessage.prototype.ClubId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGClubMessage.prototype.SceneIds = $util.emptyArray;
        WGClubMessage.prototype.PumpCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGClubMessage.prototype.DBGameFree = null;

        WGClubMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ClubId != null && Object.hasOwnProperty.call(m, "ClubId"))
                w.uint32(8).int64(m.ClubId);
            if (m.SceneIds != null && m.SceneIds.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.SceneIds.length; ++i)
                    w.int32(m.SceneIds[i]);
                w.ldelim();
            }
            if (m.PumpCoin != null && Object.hasOwnProperty.call(m, "PumpCoin"))
                w.uint32(24).int64(m.PumpCoin);
            if (m.DBGameFree != null && Object.hasOwnProperty.call(m, "DBGameFree"))
                $root.server.DB_GameFree.encode(m.DBGameFree, w.uint32(34).fork()).ldelim();
            return w;
        };

        WGClubMessage.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGClubMessage();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ClubId = r.int64();
                    break;
                case 2:
                    if (!(m.SceneIds && m.SceneIds.length))
                        m.SceneIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.SceneIds.push(r.int32());
                    } else
                        m.SceneIds.push(r.int32());
                    break;
                case 3:
                    m.PumpCoin = r.int64();
                    break;
                case 4:
                    m.DBGameFree = $root.server.DB_GameFree.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGClubMessage;
    })();

    server.DWThirdRebateMessage = (function() {

        function DWThirdRebateMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DWThirdRebateMessage.prototype.Tag = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        DWThirdRebateMessage.prototype.Snid = 0;
        DWThirdRebateMessage.prototype.AvailableBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        DWThirdRebateMessage.prototype.Third = "";
        DWThirdRebateMessage.prototype.Plt = 0;

        DWThirdRebateMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tag != null && Object.hasOwnProperty.call(m, "Tag"))
                w.uint32(8).uint64(m.Tag);
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(16).int32(m.Snid);
            if (m.AvailableBet != null && Object.hasOwnProperty.call(m, "AvailableBet"))
                w.uint32(24).int64(m.AvailableBet);
            if (m.Third != null && Object.hasOwnProperty.call(m, "Third"))
                w.uint32(34).string(m.Third);
            if (m.Plt != null && Object.hasOwnProperty.call(m, "Plt"))
                w.uint32(40).int32(m.Plt);
            return w;
        };

        DWThirdRebateMessage.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DWThirdRebateMessage();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Tag = r.uint64();
                    break;
                case 2:
                    m.Snid = r.int32();
                    break;
                case 3:
                    m.AvailableBet = r.int64();
                    break;
                case 4:
                    m.Third = r.string();
                    break;
                case 5:
                    m.Plt = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DWThirdRebateMessage;
    })();

    server.DWThirdRoundMessage = (function() {

        function DWThirdRoundMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        DWThirdRoundMessage.prototype.Tag = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        DWThirdRoundMessage.prototype.Snid = 0;
        DWThirdRoundMessage.prototype.Third = "";
        DWThirdRoundMessage.prototype.InThirdGameid = "";
        DWThirdRoundMessage.prototype.InThirdGameName = "";
        DWThirdRoundMessage.prototype.OneroundMaxwin = 0;
        DWThirdRoundMessage.prototype.AccRoundsInTime = 0;
        DWThirdRoundMessage.prototype.ProfitCoinInTime = 0;
        DWThirdRoundMessage.prototype.BetCoinInTime = 0;
        DWThirdRoundMessage.prototype.FlowCoinInTime = 0;
        DWThirdRoundMessage.prototype.Platform = 0;

        DWThirdRoundMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tag != null && Object.hasOwnProperty.call(m, "Tag"))
                w.uint32(8).uint64(m.Tag);
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(16).int32(m.Snid);
            if (m.Third != null && Object.hasOwnProperty.call(m, "Third"))
                w.uint32(26).string(m.Third);
            if (m.InThirdGameid != null && Object.hasOwnProperty.call(m, "InThirdGameid"))
                w.uint32(34).string(m.InThirdGameid);
            if (m.InThirdGameName != null && Object.hasOwnProperty.call(m, "InThirdGameName"))
                w.uint32(42).string(m.InThirdGameName);
            if (m.OneroundMaxwin != null && Object.hasOwnProperty.call(m, "OneroundMaxwin"))
                w.uint32(48).int32(m.OneroundMaxwin);
            if (m.AccRoundsInTime != null && Object.hasOwnProperty.call(m, "AccRoundsInTime"))
                w.uint32(56).int32(m.AccRoundsInTime);
            if (m.ProfitCoinInTime != null && Object.hasOwnProperty.call(m, "ProfitCoinInTime"))
                w.uint32(64).int32(m.ProfitCoinInTime);
            if (m.BetCoinInTime != null && Object.hasOwnProperty.call(m, "BetCoinInTime"))
                w.uint32(72).int32(m.BetCoinInTime);
            if (m.FlowCoinInTime != null && Object.hasOwnProperty.call(m, "FlowCoinInTime"))
                w.uint32(80).int32(m.FlowCoinInTime);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(88).int32(m.Platform);
            return w;
        };

        DWThirdRoundMessage.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.DWThirdRoundMessage();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Tag = r.uint64();
                    break;
                case 2:
                    m.Snid = r.int32();
                    break;
                case 3:
                    m.Third = r.string();
                    break;
                case 4:
                    m.InThirdGameid = r.string();
                    break;
                case 5:
                    m.InThirdGameName = r.string();
                    break;
                case 6:
                    m.OneroundMaxwin = r.int32();
                    break;
                case 7:
                    m.AccRoundsInTime = r.int32();
                    break;
                case 8:
                    m.ProfitCoinInTime = r.int32();
                    break;
                case 9:
                    m.BetCoinInTime = r.int32();
                    break;
                case 10:
                    m.FlowCoinInTime = r.int32();
                    break;
                case 11:
                    m.Platform = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return DWThirdRoundMessage;
    })();

    server.WDACKThirdRebateMessage = (function() {

        function WDACKThirdRebateMessage(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WDACKThirdRebateMessage.prototype.Tag = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
        WDACKThirdRebateMessage.prototype.Result = 0;

        WDACKThirdRebateMessage.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Tag != null && Object.hasOwnProperty.call(m, "Tag"))
                w.uint32(8).uint64(m.Tag);
            if (m.Result != null && Object.hasOwnProperty.call(m, "Result"))
                w.uint32(16).int32(m.Result);
            return w;
        };

        WDACKThirdRebateMessage.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WDACKThirdRebateMessage();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Tag = r.uint64();
                    break;
                case 2:
                    m.Result = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WDACKThirdRebateMessage;
    })();

    server.GWGameStateLog = (function() {

        function GWGameStateLog(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWGameStateLog.prototype.SceneId = 0;
        GWGameStateLog.prototype.GameLog = 0;
        GWGameStateLog.prototype.LogCnt = 0;

        GWGameStateLog.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.GameLog != null && Object.hasOwnProperty.call(m, "GameLog"))
                w.uint32(16).int32(m.GameLog);
            if (m.LogCnt != null && Object.hasOwnProperty.call(m, "LogCnt"))
                w.uint32(24).int32(m.LogCnt);
            return w;
        };

        GWGameStateLog.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWGameStateLog();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    m.GameLog = r.int32();
                    break;
                case 3:
                    m.LogCnt = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWGameStateLog;
    })();

    server.GWGameState = (function() {

        function GWGameState(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWGameState.prototype.SceneId = 0;
        GWGameState.prototype.State = 0;
        GWGameState.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWGameState.prototype.Sec = 0;
        GWGameState.prototype.BankerListNum = 0;

        GWGameState.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.State != null && Object.hasOwnProperty.call(m, "State"))
                w.uint32(16).int32(m.State);
            if (m.Ts != null && Object.hasOwnProperty.call(m, "Ts"))
                w.uint32(24).int64(m.Ts);
            if (m.Sec != null && Object.hasOwnProperty.call(m, "Sec"))
                w.uint32(32).int32(m.Sec);
            if (m.BankerListNum != null && Object.hasOwnProperty.call(m, "BankerListNum"))
                w.uint32(40).int32(m.BankerListNum);
            return w;
        };

        GWGameState.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWGameState();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    m.State = r.int32();
                    break;
                case 3:
                    m.Ts = r.int64();
                    break;
                case 4:
                    m.Sec = r.int32();
                    break;
                case 5:
                    m.BankerListNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWGameState;
    })();

    server.GWGameJackList = (function() {

        function GWGameJackList(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWGameJackList.prototype.SnId = 0;
        GWGameJackList.prototype.Coin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWGameJackList.prototype.RoomId = 0;
        GWGameJackList.prototype.JackType = 0;
        GWGameJackList.prototype.GameId = 0;
        GWGameJackList.prototype.Platform = "";
        GWGameJackList.prototype.Channel = "";
        GWGameJackList.prototype.Name = "";

        GWGameJackList.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int64(m.Coin);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(24).int32(m.RoomId);
            if (m.JackType != null && Object.hasOwnProperty.call(m, "JackType"))
                w.uint32(32).int32(m.JackType);
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(40).int32(m.GameId);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(50).string(m.Platform);
            if (m.Channel != null && Object.hasOwnProperty.call(m, "Channel"))
                w.uint32(58).string(m.Channel);
            if (m.Name != null && Object.hasOwnProperty.call(m, "Name"))
                w.uint32(66).string(m.Name);
            return w;
        };

        GWGameJackList.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWGameJackList();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Coin = r.int64();
                    break;
                case 3:
                    m.RoomId = r.int32();
                    break;
                case 4:
                    m.JackType = r.int32();
                    break;
                case 5:
                    m.GameId = r.int32();
                    break;
                case 6:
                    m.Platform = r.string();
                    break;
                case 7:
                    m.Channel = r.string();
                    break;
                case 8:
                    m.Name = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWGameJackList;
    })();

    server.GWGameJackCoin = (function() {

        function GWGameJackCoin(p) {
            this.Platform = [];
            this.Coin = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWGameJackCoin.prototype.Platform = $util.emptyArray;
        GWGameJackCoin.prototype.Coin = $util.emptyArray;

        GWGameJackCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Platform != null && m.Platform.length) {
                for (var i = 0; i < m.Platform.length; ++i)
                    w.uint32(10).string(m.Platform[i]);
            }
            if (m.Coin != null && m.Coin.length) {
                w.uint32(18).fork();
                for (var i = 0; i < m.Coin.length; ++i)
                    w.int64(m.Coin[i]);
                w.ldelim();
            }
            return w;
        };

        GWGameJackCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWGameJackCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Platform && m.Platform.length))
                        m.Platform = [];
                    m.Platform.push(r.string());
                    break;
                case 2:
                    if (!(m.Coin && m.Coin.length))
                        m.Coin = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Coin.push(r.int64());
                    } else
                        m.Coin.push(r.int64());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWGameJackCoin;
    })();

    server.WGNiceIdRebind = (function() {

        function WGNiceIdRebind(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGNiceIdRebind.prototype.User = 0;
        WGNiceIdRebind.prototype.NewId = 0;

        WGNiceIdRebind.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.User != null && Object.hasOwnProperty.call(m, "User"))
                w.uint32(8).int32(m.User);
            if (m.NewId != null && Object.hasOwnProperty.call(m, "NewId"))
                w.uint32(16).int32(m.NewId);
            return w;
        };

        WGNiceIdRebind.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGNiceIdRebind();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.User = r.int32();
                    break;
                case 2:
                    m.NewId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGNiceIdRebind;
    })();

    server.PLAYERWINCOININFO = (function() {

        function PLAYERWINCOININFO(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PLAYERWINCOININFO.prototype.SnId = 0;
        PLAYERWINCOININFO.prototype.GameFreeID = 0;
        PLAYERWINCOININFO.prototype.WinCoin = 0;

        PLAYERWINCOININFO.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.GameFreeID != null && Object.hasOwnProperty.call(m, "GameFreeID"))
                w.uint32(16).int32(m.GameFreeID);
            if (m.WinCoin != null && Object.hasOwnProperty.call(m, "WinCoin"))
                w.uint32(24).int32(m.WinCoin);
            return w;
        };

        PLAYERWINCOININFO.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.PLAYERWINCOININFO();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.GameFreeID = r.int32();
                    break;
                case 3:
                    m.WinCoin = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PLAYERWINCOININFO;
    })();

    server.GWPLAYERWINCOIN = (function() {

        function GWPLAYERWINCOIN(p) {
            this.player = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWPLAYERWINCOIN.prototype.player = $util.emptyArray;

        GWPLAYERWINCOIN.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.player != null && m.player.length) {
                for (var i = 0; i < m.player.length; ++i)
                    $root.server.PLAYERWINCOININFO.encode(m.player[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        GWPLAYERWINCOIN.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWPLAYERWINCOIN();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.player && m.player.length))
                        m.player = [];
                    m.player.push($root.server.PLAYERWINCOININFO.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWPLAYERWINCOIN;
    })();

    server.GWPlayerAutoMarkTag = (function() {

        function GWPlayerAutoMarkTag(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWPlayerAutoMarkTag.prototype.SnId = 0;
        GWPlayerAutoMarkTag.prototype.Tag = 0;

        GWPlayerAutoMarkTag.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Tag != null && Object.hasOwnProperty.call(m, "Tag"))
                w.uint32(16).int32(m.Tag);
            return w;
        };

        GWPlayerAutoMarkTag.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWPlayerAutoMarkTag();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Tag = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWPlayerAutoMarkTag;
    })();

    server.WGInviteRobEnterCoinSceneQueue = (function() {

        function WGInviteRobEnterCoinSceneQueue(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGInviteRobEnterCoinSceneQueue.prototype.Platform = "";
        WGInviteRobEnterCoinSceneQueue.prototype.GameFreeId = 0;
        WGInviteRobEnterCoinSceneQueue.prototype.RobNum = 0;

        WGInviteRobEnterCoinSceneQueue.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(10).string(m.Platform);
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(16).int32(m.GameFreeId);
            if (m.RobNum != null && Object.hasOwnProperty.call(m, "RobNum"))
                w.uint32(24).int32(m.RobNum);
            return w;
        };

        WGInviteRobEnterCoinSceneQueue.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGInviteRobEnterCoinSceneQueue();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Platform = r.string();
                    break;
                case 2:
                    m.GameFreeId = r.int32();
                    break;
                case 3:
                    m.RobNum = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGInviteRobEnterCoinSceneQueue;
    })();

    server.WGGameForceStart = (function() {

        function WGGameForceStart(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGGameForceStart.prototype.SceneId = 0;

        WGGameForceStart.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            return w;
        };

        WGGameForceStart.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGGameForceStart();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGGameForceStart;
    })();

    server.ProfitControlGameCfg = (function() {

        function ProfitControlGameCfg(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ProfitControlGameCfg.prototype.GameFreeId = 0;
        ProfitControlGameCfg.prototype.AutoCorrectRate = 0;
        ProfitControlGameCfg.prototype.ManualCorrectRate = 0;
        ProfitControlGameCfg.prototype.UseManual = false;
        ProfitControlGameCfg.prototype.DownPool = false;

        ProfitControlGameCfg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(8).int32(m.GameFreeId);
            if (m.AutoCorrectRate != null && Object.hasOwnProperty.call(m, "AutoCorrectRate"))
                w.uint32(16).int32(m.AutoCorrectRate);
            if (m.ManualCorrectRate != null && Object.hasOwnProperty.call(m, "ManualCorrectRate"))
                w.uint32(24).int32(m.ManualCorrectRate);
            if (m.UseManual != null && Object.hasOwnProperty.call(m, "UseManual"))
                w.uint32(32).bool(m.UseManual);
            if (m.DownPool != null && Object.hasOwnProperty.call(m, "DownPool"))
                w.uint32(40).bool(m.DownPool);
            return w;
        };

        ProfitControlGameCfg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.ProfitControlGameCfg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameFreeId = r.int32();
                    break;
                case 2:
                    m.AutoCorrectRate = r.int32();
                    break;
                case 3:
                    m.ManualCorrectRate = r.int32();
                    break;
                case 4:
                    m.UseManual = r.bool();
                    break;
                case 5:
                    m.DownPool = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ProfitControlGameCfg;
    })();

    server.ProfitControlPlatformCfg = (function() {

        function ProfitControlPlatformCfg(p) {
            this.GameCfg = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        ProfitControlPlatformCfg.prototype.Platform = "";
        ProfitControlPlatformCfg.prototype.GameCfg = $util.emptyArray;

        ProfitControlPlatformCfg.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(10).string(m.Platform);
            if (m.GameCfg != null && m.GameCfg.length) {
                for (var i = 0; i < m.GameCfg.length; ++i)
                    $root.server.ProfitControlGameCfg.encode(m.GameCfg[i], w.uint32(18).fork()).ldelim();
            }
            return w;
        };

        ProfitControlPlatformCfg.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.ProfitControlPlatformCfg();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Platform = r.string();
                    break;
                case 2:
                    if (!(m.GameCfg && m.GameCfg.length))
                        m.GameCfg = [];
                    m.GameCfg.push($root.server.ProfitControlGameCfg.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return ProfitControlPlatformCfg;
    })();

    server.WGProfitControlCorrect = (function() {

        function WGProfitControlCorrect(p) {
            this.Cfg = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGProfitControlCorrect.prototype.Cfg = $util.emptyArray;

        WGProfitControlCorrect.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Cfg != null && m.Cfg.length) {
                for (var i = 0; i < m.Cfg.length; ++i)
                    $root.server.ProfitControlPlatformCfg.encode(m.Cfg[i], w.uint32(10).fork()).ldelim();
            }
            return w;
        };

        WGProfitControlCorrect.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGProfitControlCorrect();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.Cfg && m.Cfg.length))
                        m.Cfg = [];
                    m.Cfg.push($root.server.ProfitControlPlatformCfg.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGProfitControlCorrect;
    })();

    server.GWChangeSceneEvent = (function() {

        function GWChangeSceneEvent(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWChangeSceneEvent.prototype.SceneId = 0;

        GWChangeSceneEvent.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            return w;
        };

        GWChangeSceneEvent.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWChangeSceneEvent();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWChangeSceneEvent;
    })();

    server.PlayerIParam = (function() {

        function PlayerIParam(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerIParam.prototype.ParamId = 0;
        PlayerIParam.prototype.IntVal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        PlayerIParam.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ParamId != null && Object.hasOwnProperty.call(m, "ParamId"))
                w.uint32(8).int32(m.ParamId);
            if (m.IntVal != null && Object.hasOwnProperty.call(m, "IntVal"))
                w.uint32(16).int64(m.IntVal);
            return w;
        };

        PlayerIParam.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.PlayerIParam();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ParamId = r.int32();
                    break;
                case 2:
                    m.IntVal = r.int64();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerIParam;
    })();

    server.PlayerSParam = (function() {

        function PlayerSParam(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerSParam.prototype.ParamId = 0;
        PlayerSParam.prototype.StrVal = "";

        PlayerSParam.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.ParamId != null && Object.hasOwnProperty.call(m, "ParamId"))
                w.uint32(8).int32(m.ParamId);
            if (m.StrVal != null && Object.hasOwnProperty.call(m, "StrVal"))
                w.uint32(18).string(m.StrVal);
            return w;
        };

        PlayerSParam.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.PlayerSParam();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.ParamId = r.int32();
                    break;
                case 2:
                    m.StrVal = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerSParam;
    })();

    server.PlayerCParam = (function() {

        function PlayerCParam(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerCParam.prototype.StrKey = "";
        PlayerCParam.prototype.StrVal = "";

        PlayerCParam.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.StrKey != null && Object.hasOwnProperty.call(m, "StrKey"))
                w.uint32(10).string(m.StrKey);
            if (m.StrVal != null && Object.hasOwnProperty.call(m, "StrVal"))
                w.uint32(18).string(m.StrVal);
            return w;
        };

        PlayerCParam.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.PlayerCParam();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.StrKey = r.string();
                    break;
                case 2:
                    m.StrVal = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerCParam;
    })();

    server.PlayerMatchCoin = (function() {

        function PlayerMatchCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerMatchCoin.prototype.SnId = 0;
        PlayerMatchCoin.prototype.Coin = 0;

        PlayerMatchCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Coin != null && Object.hasOwnProperty.call(m, "Coin"))
                w.uint32(16).int32(m.Coin);
            return w;
        };

        PlayerMatchCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.PlayerMatchCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Coin = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerMatchCoin;
    })();

    server.GWPlayerMatchBilled = (function() {

        function GWPlayerMatchBilled(p) {
            this.Players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWPlayerMatchBilled.prototype.SceneId = 0;
        GWPlayerMatchBilled.prototype.MatchId = 0;
        GWPlayerMatchBilled.prototype.Players = $util.emptyArray;
        GWPlayerMatchBilled.prototype.WinPos = 0;

        GWPlayerMatchBilled.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.MatchId != null && Object.hasOwnProperty.call(m, "MatchId"))
                w.uint32(16).int32(m.MatchId);
            if (m.Players != null && m.Players.length) {
                for (var i = 0; i < m.Players.length; ++i)
                    $root.server.PlayerMatchCoin.encode(m.Players[i], w.uint32(26).fork()).ldelim();
            }
            if (m.WinPos != null && Object.hasOwnProperty.call(m, "WinPos"))
                w.uint32(32).int32(m.WinPos);
            return w;
        };

        GWPlayerMatchBilled.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWPlayerMatchBilled();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    m.MatchId = r.int32();
                    break;
                case 3:
                    if (!(m.Players && m.Players.length))
                        m.Players = [];
                    m.Players.push($root.server.PlayerMatchCoin.decode(r, r.uint32()));
                    break;
                case 4:
                    m.WinPos = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWPlayerMatchBilled;
    })();

    server.GWPlayerMatchGrade = (function() {

        function GWPlayerMatchGrade(p) {
            this.Players = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWPlayerMatchGrade.prototype.SceneId = 0;
        GWPlayerMatchGrade.prototype.MatchId = 0;
        GWPlayerMatchGrade.prototype.NumOfGame = 0;
        GWPlayerMatchGrade.prototype.SpendTime = 0;
        GWPlayerMatchGrade.prototype.GameLogId = "";
        GWPlayerMatchGrade.prototype.Players = $util.emptyArray;

        GWPlayerMatchGrade.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.MatchId != null && Object.hasOwnProperty.call(m, "MatchId"))
                w.uint32(16).int32(m.MatchId);
            if (m.NumOfGame != null && Object.hasOwnProperty.call(m, "NumOfGame"))
                w.uint32(24).int32(m.NumOfGame);
            if (m.SpendTime != null && Object.hasOwnProperty.call(m, "SpendTime"))
                w.uint32(32).int32(m.SpendTime);
            if (m.GameLogId != null && Object.hasOwnProperty.call(m, "GameLogId"))
                w.uint32(42).string(m.GameLogId);
            if (m.Players != null && m.Players.length) {
                for (var i = 0; i < m.Players.length; ++i)
                    $root.server.PlayerMatchCoin.encode(m.Players[i], w.uint32(50).fork()).ldelim();
            }
            return w;
        };

        GWPlayerMatchGrade.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWPlayerMatchGrade();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    m.MatchId = r.int32();
                    break;
                case 3:
                    m.NumOfGame = r.int32();
                    break;
                case 4:
                    m.SpendTime = r.int32();
                    break;
                case 5:
                    m.GameLogId = r.string();
                    break;
                case 6:
                    if (!(m.Players && m.Players.length))
                        m.Players = [];
                    m.Players.push($root.server.PlayerMatchCoin.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWPlayerMatchGrade;
    })();

    server.WGPlayerQuitMatch = (function() {

        function WGPlayerQuitMatch(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGPlayerQuitMatch.prototype.SnId = 0;
        WGPlayerQuitMatch.prototype.SceneId = 0;
        WGPlayerQuitMatch.prototype.MatchId = 0;

        WGPlayerQuitMatch.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(16).int32(m.SceneId);
            if (m.MatchId != null && Object.hasOwnProperty.call(m, "MatchId"))
                w.uint32(24).int32(m.MatchId);
            return w;
        };

        WGPlayerQuitMatch.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGPlayerQuitMatch();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.SceneId = r.int32();
                    break;
                case 3:
                    m.MatchId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGPlayerQuitMatch;
    })();

    server.WGSceneMatchBaseChange = (function() {

        function WGSceneMatchBaseChange(p) {
            this.SceneIds = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGSceneMatchBaseChange.prototype.SceneIds = $util.emptyArray;
        WGSceneMatchBaseChange.prototype.BaseScore = 0;
        WGSceneMatchBaseChange.prototype.OutScore = 0;
        WGSceneMatchBaseChange.prototype.RestNum = 0;
        WGSceneMatchBaseChange.prototype.NextTs = 0;

        WGSceneMatchBaseChange.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneIds != null && m.SceneIds.length) {
                w.uint32(10).fork();
                for (var i = 0; i < m.SceneIds.length; ++i)
                    w.int32(m.SceneIds[i]);
                w.ldelim();
            }
            if (m.BaseScore != null && Object.hasOwnProperty.call(m, "BaseScore"))
                w.uint32(16).int32(m.BaseScore);
            if (m.OutScore != null && Object.hasOwnProperty.call(m, "OutScore"))
                w.uint32(24).int32(m.OutScore);
            if (m.RestNum != null && Object.hasOwnProperty.call(m, "RestNum"))
                w.uint32(32).int32(m.RestNum);
            if (m.NextTs != null && Object.hasOwnProperty.call(m, "NextTs"))
                w.uint32(40).int32(m.NextTs);
            return w;
        };

        WGSceneMatchBaseChange.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGSceneMatchBaseChange();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    if (!(m.SceneIds && m.SceneIds.length))
                        m.SceneIds = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.SceneIds.push(r.int32());
                    } else
                        m.SceneIds.push(r.int32());
                    break;
                case 2:
                    m.BaseScore = r.int32();
                    break;
                case 3:
                    m.OutScore = r.int32();
                    break;
                case 4:
                    m.RestNum = r.int32();
                    break;
                case 5:
                    m.NextTs = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGSceneMatchBaseChange;
    })();

    server.SSRedirectToPlayer = (function() {

        function SSRedirectToPlayer(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SSRedirectToPlayer.prototype.SnId = 0;
        SSRedirectToPlayer.prototype.SceneId = 0;
        SSRedirectToPlayer.prototype.PacketId = 0;
        SSRedirectToPlayer.prototype.Data = $util.newBuffer([]);

        SSRedirectToPlayer.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(16).int32(m.SceneId);
            if (m.PacketId != null && Object.hasOwnProperty.call(m, "PacketId"))
                w.uint32(24).int32(m.PacketId);
            if (m.Data != null && Object.hasOwnProperty.call(m, "Data"))
                w.uint32(34).bytes(m.Data);
            return w;
        };

        SSRedirectToPlayer.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.SSRedirectToPlayer();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.SceneId = r.int32();
                    break;
                case 3:
                    m.PacketId = r.int32();
                    break;
                case 4:
                    m.Data = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SSRedirectToPlayer;
    })();

    server.WGInviteMatchRob = (function() {

        function WGInviteMatchRob(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGInviteMatchRob.prototype.Platform = "";
        WGInviteMatchRob.prototype.MatchId = 0;
        WGInviteMatchRob.prototype.RobNum = 0;
        WGInviteMatchRob.prototype.NeedAwait = false;

        WGInviteMatchRob.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(10).string(m.Platform);
            if (m.MatchId != null && Object.hasOwnProperty.call(m, "MatchId"))
                w.uint32(16).int32(m.MatchId);
            if (m.RobNum != null && Object.hasOwnProperty.call(m, "RobNum"))
                w.uint32(24).int32(m.RobNum);
            if (m.NeedAwait != null && Object.hasOwnProperty.call(m, "NeedAwait"))
                w.uint32(32).bool(m.NeedAwait);
            return w;
        };

        WGInviteMatchRob.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGInviteMatchRob();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Platform = r.string();
                    break;
                case 2:
                    m.MatchId = r.int32();
                    break;
                case 3:
                    m.RobNum = r.int32();
                    break;
                case 4:
                    m.NeedAwait = r.bool();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGInviteMatchRob;
    })();

    server.GameInfo = (function() {

        function GameInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GameInfo.prototype.GameId = 0;
        GameInfo.prototype.GameFreeId = 0;
        GameInfo.prototype.GameType = 0;

        GameInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.GameId != null && Object.hasOwnProperty.call(m, "GameId"))
                w.uint32(8).int32(m.GameId);
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(16).int32(m.GameFreeId);
            if (m.GameType != null && Object.hasOwnProperty.call(m, "GameType"))
                w.uint32(24).int32(m.GameType);
            return w;
        };

        GameInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GameInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.GameId = r.int32();
                    break;
                case 2:
                    m.GameFreeId = r.int32();
                    break;
                case 3:
                    m.GameType = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GameInfo;
    })();

    server.WGGameJackpot = (function() {

        function WGGameJackpot(p) {
            this.Info = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGGameJackpot.prototype.Sid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGGameJackpot.prototype.GateSid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGGameJackpot.prototype.Platform = "";
        WGGameJackpot.prototype.Info = $util.emptyArray;

        WGGameJackpot.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Sid != null && Object.hasOwnProperty.call(m, "Sid"))
                w.uint32(8).int64(m.Sid);
            if (m.GateSid != null && Object.hasOwnProperty.call(m, "GateSid"))
                w.uint32(16).int64(m.GateSid);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(26).string(m.Platform);
            if (m.Info != null && m.Info.length) {
                for (var i = 0; i < m.Info.length; ++i)
                    $root.server.GameInfo.encode(m.Info[i], w.uint32(34).fork()).ldelim();
            }
            return w;
        };

        WGGameJackpot.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGGameJackpot();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Sid = r.int64();
                    break;
                case 2:
                    m.GateSid = r.int64();
                    break;
                case 3:
                    m.Platform = r.string();
                    break;
                case 4:
                    if (!(m.Info && m.Info.length))
                        m.Info = [];
                    m.Info.push($root.server.GameInfo.decode(r, r.uint32()));
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGGameJackpot;
    })();

    server.BigWinHistoryInfo = (function() {

        function BigWinHistoryInfo(p) {
            this.Cards = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        BigWinHistoryInfo.prototype.SpinID = "";
        BigWinHistoryInfo.prototype.CreatedTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BigWinHistoryInfo.prototype.BaseBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BigWinHistoryInfo.prototype.PriceValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BigWinHistoryInfo.prototype.UserName = "";
        BigWinHistoryInfo.prototype.IsVirtualData = false;
        BigWinHistoryInfo.prototype.TotalBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        BigWinHistoryInfo.prototype.Cards = $util.emptyArray;

        BigWinHistoryInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SpinID != null && Object.hasOwnProperty.call(m, "SpinID"))
                w.uint32(10).string(m.SpinID);
            if (m.CreatedTime != null && Object.hasOwnProperty.call(m, "CreatedTime"))
                w.uint32(16).int64(m.CreatedTime);
            if (m.BaseBet != null && Object.hasOwnProperty.call(m, "BaseBet"))
                w.uint32(24).int64(m.BaseBet);
            if (m.PriceValue != null && Object.hasOwnProperty.call(m, "PriceValue"))
                w.uint32(32).int64(m.PriceValue);
            if (m.UserName != null && Object.hasOwnProperty.call(m, "UserName"))
                w.uint32(42).string(m.UserName);
            if (m.IsVirtualData != null && Object.hasOwnProperty.call(m, "IsVirtualData"))
                w.uint32(48).bool(m.IsVirtualData);
            if (m.TotalBet != null && Object.hasOwnProperty.call(m, "TotalBet"))
                w.uint32(56).int64(m.TotalBet);
            if (m.Cards != null && m.Cards.length) {
                w.uint32(66).fork();
                for (var i = 0; i < m.Cards.length; ++i)
                    w.int32(m.Cards[i]);
                w.ldelim();
            }
            return w;
        };

        BigWinHistoryInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.BigWinHistoryInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SpinID = r.string();
                    break;
                case 2:
                    m.CreatedTime = r.int64();
                    break;
                case 3:
                    m.BaseBet = r.int64();
                    break;
                case 4:
                    m.PriceValue = r.int64();
                    break;
                case 5:
                    m.UserName = r.string();
                    break;
                case 6:
                    m.IsVirtualData = r.bool();
                    break;
                case 7:
                    m.TotalBet = r.int64();
                    break;
                case 8:
                    if (!(m.Cards && m.Cards.length))
                        m.Cards = [];
                    if ((t & 7) === 2) {
                        var c2 = r.uint32() + r.pos;
                        while (r.pos < c2)
                            m.Cards.push(r.int32());
                    } else
                        m.Cards.push(r.int32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return BigWinHistoryInfo;
    })();

    server.GWGameNewBigWinHistory = (function() {

        function GWGameNewBigWinHistory(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWGameNewBigWinHistory.prototype.SceneId = 0;
        GWGameNewBigWinHistory.prototype.BigWinHistory = null;

        GWGameNewBigWinHistory.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.BigWinHistory != null && Object.hasOwnProperty.call(m, "BigWinHistory"))
                $root.server.BigWinHistoryInfo.encode(m.BigWinHistory, w.uint32(18).fork()).ldelim();
            return w;
        };

        GWGameNewBigWinHistory.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWGameNewBigWinHistory();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    m.BigWinHistory = $root.server.BigWinHistoryInfo.decode(r, r.uint32());
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWGameNewBigWinHistory;
    })();

    server.WGPlayerEnterMiniGame = (function() {

        function WGPlayerEnterMiniGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGPlayerEnterMiniGame.prototype.Sid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGPlayerEnterMiniGame.prototype.GateSid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGPlayerEnterMiniGame.prototype.SnId = 0;
        WGPlayerEnterMiniGame.prototype.SceneId = 0;
        WGPlayerEnterMiniGame.prototype.PlayerData = $util.newBuffer([]);
        WGPlayerEnterMiniGame.prototype.TakeCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGPlayerEnterMiniGame.prototype.IsQM = false;
        WGPlayerEnterMiniGame.prototype.ExpectLeaveCoin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGPlayerEnterMiniGame.prototype.ExpectGameTimes = 0;
        WGPlayerEnterMiniGame.prototype.SingleAdjust = $util.newBuffer([]);

        WGPlayerEnterMiniGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Sid != null && Object.hasOwnProperty.call(m, "Sid"))
                w.uint32(8).int64(m.Sid);
            if (m.GateSid != null && Object.hasOwnProperty.call(m, "GateSid"))
                w.uint32(16).int64(m.GateSid);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(24).int32(m.SnId);
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(32).int32(m.SceneId);
            if (m.PlayerData != null && Object.hasOwnProperty.call(m, "PlayerData"))
                w.uint32(42).bytes(m.PlayerData);
            if (m.TakeCoin != null && Object.hasOwnProperty.call(m, "TakeCoin"))
                w.uint32(48).int64(m.TakeCoin);
            if (m.IsQM != null && Object.hasOwnProperty.call(m, "IsQM"))
                w.uint32(56).bool(m.IsQM);
            if (m.ExpectLeaveCoin != null && Object.hasOwnProperty.call(m, "ExpectLeaveCoin"))
                w.uint32(64).int64(m.ExpectLeaveCoin);
            if (m.ExpectGameTimes != null && Object.hasOwnProperty.call(m, "ExpectGameTimes"))
                w.uint32(72).int32(m.ExpectGameTimes);
            if (m.SingleAdjust != null && Object.hasOwnProperty.call(m, "SingleAdjust"))
                w.uint32(82).bytes(m.SingleAdjust);
            return w;
        };

        WGPlayerEnterMiniGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGPlayerEnterMiniGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Sid = r.int64();
                    break;
                case 2:
                    m.GateSid = r.int64();
                    break;
                case 3:
                    m.SnId = r.int32();
                    break;
                case 4:
                    m.SceneId = r.int32();
                    break;
                case 5:
                    m.PlayerData = r.bytes();
                    break;
                case 6:
                    m.TakeCoin = r.int64();
                    break;
                case 7:
                    m.IsQM = r.bool();
                    break;
                case 8:
                    m.ExpectLeaveCoin = r.int64();
                    break;
                case 9:
                    m.ExpectGameTimes = r.int32();
                    break;
                case 10:
                    m.SingleAdjust = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGPlayerEnterMiniGame;
    })();

    server.WGPlayerLeaveMiniGame = (function() {

        function WGPlayerLeaveMiniGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGPlayerLeaveMiniGame.prototype.Sid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGPlayerLeaveMiniGame.prototype.GateSid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        WGPlayerLeaveMiniGame.prototype.SnId = 0;
        WGPlayerLeaveMiniGame.prototype.SceneId = 0;

        WGPlayerLeaveMiniGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Sid != null && Object.hasOwnProperty.call(m, "Sid"))
                w.uint32(8).int64(m.Sid);
            if (m.GateSid != null && Object.hasOwnProperty.call(m, "GateSid"))
                w.uint32(16).int64(m.GateSid);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(24).int32(m.SnId);
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(32).int32(m.SceneId);
            return w;
        };

        WGPlayerLeaveMiniGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGPlayerLeaveMiniGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Sid = r.int64();
                    break;
                case 2:
                    m.GateSid = r.int64();
                    break;
                case 3:
                    m.SnId = r.int32();
                    break;
                case 4:
                    m.SceneId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGPlayerLeaveMiniGame;
    })();

    server.WGPlayerLeave = (function() {

        function WGPlayerLeave(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGPlayerLeave.prototype.SnId = 0;

        WGPlayerLeave.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            return w;
        };

        WGPlayerLeave.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGPlayerLeave();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGPlayerLeave;
    })();

    server.GWPlayerLeaveMiniGame = (function() {

        function GWPlayerLeaveMiniGame(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWPlayerLeaveMiniGame.prototype.SceneId = 0;
        GWPlayerLeaveMiniGame.prototype.GameFreeId = 0;
        GWPlayerLeaveMiniGame.prototype.SnId = 0;
        GWPlayerLeaveMiniGame.prototype.Reason = 0;
        GWPlayerLeaveMiniGame.prototype.PlayerData = $util.newBuffer([]);

        GWPlayerLeaveMiniGame.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(16).int32(m.GameFreeId);
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(24).int32(m.SnId);
            if (m.Reason != null && Object.hasOwnProperty.call(m, "Reason"))
                w.uint32(32).int32(m.Reason);
            if (m.PlayerData != null && Object.hasOwnProperty.call(m, "PlayerData"))
                w.uint32(42).bytes(m.PlayerData);
            return w;
        };

        GWPlayerLeaveMiniGame.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWPlayerLeaveMiniGame();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    m.GameFreeId = r.int32();
                    break;
                case 3:
                    m.SnId = r.int32();
                    break;
                case 4:
                    m.Reason = r.int32();
                    break;
                case 5:
                    m.PlayerData = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWPlayerLeaveMiniGame;
    })();

    server.GWDestroyMiniScene = (function() {

        function GWDestroyMiniScene(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWDestroyMiniScene.prototype.SceneId = 0;

        GWDestroyMiniScene.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            return w;
        };

        GWDestroyMiniScene.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWDestroyMiniScene();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWDestroyMiniScene;
    })();

    server.GRDestroyScene = (function() {

        function GRDestroyScene(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GRDestroyScene.prototype.SceneId = 0;

        GRDestroyScene.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            return w;
        };

        GRDestroyScene.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GRDestroyScene();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GRDestroyScene;
    })();

    server.RWAccountInvalid = (function() {

        function RWAccountInvalid(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        RWAccountInvalid.prototype.Acc = "";

        RWAccountInvalid.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Acc != null && Object.hasOwnProperty.call(m, "Acc"))
                w.uint32(10).string(m.Acc);
            return w;
        };

        RWAccountInvalid.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.RWAccountInvalid();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Acc = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return RWAccountInvalid;
    })();

    server.WGDTRoomInfo = (function() {

        function WGDTRoomInfo(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGDTRoomInfo.prototype.DataKey = "";
        WGDTRoomInfo.prototype.RoomId = 0;

        WGDTRoomInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.DataKey != null && Object.hasOwnProperty.call(m, "DataKey"))
                w.uint32(10).string(m.DataKey);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(16).int32(m.RoomId);
            return w;
        };

        WGDTRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGDTRoomInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.DataKey = r.string();
                    break;
                case 2:
                    m.RoomId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGDTRoomInfo;
    })();

    server.PlayerDTCoin = (function() {

        function PlayerDTCoin(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        PlayerDTCoin.prototype.NickName = "";
        PlayerDTCoin.prototype.Snid = 0;
        PlayerDTCoin.prototype.DCoin = 0;
        PlayerDTCoin.prototype.TCoin = 0;
        PlayerDTCoin.prototype.NCoin = 0;
        PlayerDTCoin.prototype.Totle = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        PlayerDTCoin.prototype.DDCoin = 0;
        PlayerDTCoin.prototype.TDCoin = 0;

        PlayerDTCoin.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.NickName != null && Object.hasOwnProperty.call(m, "NickName"))
                w.uint32(10).string(m.NickName);
            if (m.Snid != null && Object.hasOwnProperty.call(m, "Snid"))
                w.uint32(16).int32(m.Snid);
            if (m.DCoin != null && Object.hasOwnProperty.call(m, "DCoin"))
                w.uint32(24).int32(m.DCoin);
            if (m.TCoin != null && Object.hasOwnProperty.call(m, "TCoin"))
                w.uint32(32).int32(m.TCoin);
            if (m.NCoin != null && Object.hasOwnProperty.call(m, "NCoin"))
                w.uint32(40).int32(m.NCoin);
            if (m.Totle != null && Object.hasOwnProperty.call(m, "Totle"))
                w.uint32(48).int64(m.Totle);
            if (m.DDCoin != null && Object.hasOwnProperty.call(m, "DDCoin"))
                w.uint32(56).int32(m.DDCoin);
            if (m.TDCoin != null && Object.hasOwnProperty.call(m, "TDCoin"))
                w.uint32(64).int32(m.TDCoin);
            return w;
        };

        PlayerDTCoin.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.PlayerDTCoin();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.NickName = r.string();
                    break;
                case 2:
                    m.Snid = r.int32();
                    break;
                case 3:
                    m.DCoin = r.int32();
                    break;
                case 4:
                    m.TCoin = r.int32();
                    break;
                case 5:
                    m.NCoin = r.int32();
                    break;
                case 6:
                    m.Totle = r.int64();
                    break;
                case 7:
                    m.DDCoin = r.int32();
                    break;
                case 8:
                    m.TDCoin = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return PlayerDTCoin;
    })();

    server.EResult = (function() {

        function EResult(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        EResult.prototype.Index = "";
        EResult.prototype.Result = 0;

        EResult.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.Index != null && Object.hasOwnProperty.call(m, "Index"))
                w.uint32(10).string(m.Index);
            if (m.Result != null && Object.hasOwnProperty.call(m, "Result"))
                w.uint32(16).int32(m.Result);
            return w;
        };

        EResult.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.EResult();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.Index = r.string();
                    break;
                case 2:
                    m.Result = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return EResult;
    })();

    server.GWDTRoomInfo = (function() {

        function GWDTRoomInfo(p) {
            this.Players = [];
            this.Results = [];
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWDTRoomInfo.prototype.DataKey = "";
        GWDTRoomInfo.prototype.RoomId = 0;
        GWDTRoomInfo.prototype.DCoin = 0;
        GWDTRoomInfo.prototype.TCoin = 0;
        GWDTRoomInfo.prototype.NCoin = 0;
        GWDTRoomInfo.prototype.Players = $util.emptyArray;
        GWDTRoomInfo.prototype.Onlines = 0;
        GWDTRoomInfo.prototype.LeftTimes = 0;
        GWDTRoomInfo.prototype.CoinPool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        GWDTRoomInfo.prototype.NumOfGames = 0;
        GWDTRoomInfo.prototype.LoopNum = 0;
        GWDTRoomInfo.prototype.Results = $util.emptyArray;
        GWDTRoomInfo.prototype.DDCoin = 0;
        GWDTRoomInfo.prototype.TDCoin = 0;

        GWDTRoomInfo.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.DataKey != null && Object.hasOwnProperty.call(m, "DataKey"))
                w.uint32(10).string(m.DataKey);
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(16).int32(m.RoomId);
            if (m.DCoin != null && Object.hasOwnProperty.call(m, "DCoin"))
                w.uint32(24).int32(m.DCoin);
            if (m.TCoin != null && Object.hasOwnProperty.call(m, "TCoin"))
                w.uint32(32).int32(m.TCoin);
            if (m.NCoin != null && Object.hasOwnProperty.call(m, "NCoin"))
                w.uint32(40).int32(m.NCoin);
            if (m.Players != null && m.Players.length) {
                for (var i = 0; i < m.Players.length; ++i)
                    $root.server.PlayerDTCoin.encode(m.Players[i], w.uint32(50).fork()).ldelim();
            }
            if (m.Onlines != null && Object.hasOwnProperty.call(m, "Onlines"))
                w.uint32(56).int32(m.Onlines);
            if (m.LeftTimes != null && Object.hasOwnProperty.call(m, "LeftTimes"))
                w.uint32(64).int32(m.LeftTimes);
            if (m.CoinPool != null && Object.hasOwnProperty.call(m, "CoinPool"))
                w.uint32(72).int64(m.CoinPool);
            if (m.NumOfGames != null && Object.hasOwnProperty.call(m, "NumOfGames"))
                w.uint32(80).int32(m.NumOfGames);
            if (m.LoopNum != null && Object.hasOwnProperty.call(m, "LoopNum"))
                w.uint32(88).int32(m.LoopNum);
            if (m.Results != null && m.Results.length) {
                for (var i = 0; i < m.Results.length; ++i)
                    $root.server.EResult.encode(m.Results[i], w.uint32(98).fork()).ldelim();
            }
            if (m.DDCoin != null && Object.hasOwnProperty.call(m, "DDCoin"))
                w.uint32(104).int32(m.DDCoin);
            if (m.TDCoin != null && Object.hasOwnProperty.call(m, "TDCoin"))
                w.uint32(112).int32(m.TDCoin);
            return w;
        };

        GWDTRoomInfo.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWDTRoomInfo();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.DataKey = r.string();
                    break;
                case 2:
                    m.RoomId = r.int32();
                    break;
                case 3:
                    m.DCoin = r.int32();
                    break;
                case 4:
                    m.TCoin = r.int32();
                    break;
                case 5:
                    m.NCoin = r.int32();
                    break;
                case 6:
                    if (!(m.Players && m.Players.length))
                        m.Players = [];
                    m.Players.push($root.server.PlayerDTCoin.decode(r, r.uint32()));
                    break;
                case 7:
                    m.Onlines = r.int32();
                    break;
                case 8:
                    m.LeftTimes = r.int32();
                    break;
                case 9:
                    m.CoinPool = r.int64();
                    break;
                case 10:
                    m.NumOfGames = r.int32();
                    break;
                case 11:
                    m.LoopNum = r.int32();
                    break;
                case 12:
                    if (!(m.Results && m.Results.length))
                        m.Results = [];
                    m.Results.push($root.server.EResult.decode(r, r.uint32()));
                    break;
                case 13:
                    m.DDCoin = r.int32();
                    break;
                case 14:
                    m.TDCoin = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWDTRoomInfo;
    })();

    server.WGRoomResults = (function() {

        function WGRoomResults(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGRoomResults.prototype.RoomId = 0;
        WGRoomResults.prototype.Webuser = "";
        WGRoomResults.prototype.Results = "";
        WGRoomResults.prototype.DataKey = "";

        WGRoomResults.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.RoomId != null && Object.hasOwnProperty.call(m, "RoomId"))
                w.uint32(8).int32(m.RoomId);
            if (m.Webuser != null && Object.hasOwnProperty.call(m, "Webuser"))
                w.uint32(18).string(m.Webuser);
            if (m.Results != null && Object.hasOwnProperty.call(m, "Results"))
                w.uint32(26).string(m.Results);
            if (m.DataKey != null && Object.hasOwnProperty.call(m, "DataKey"))
                w.uint32(34).string(m.DataKey);
            return w;
        };

        WGRoomResults.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGRoomResults();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.RoomId = r.int32();
                    break;
                case 2:
                    m.Webuser = r.string();
                    break;
                case 3:
                    m.Results = r.string();
                    break;
                case 4:
                    m.DataKey = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGRoomResults;
    })();

    server.GWRoomResults = (function() {

        function GWRoomResults(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWRoomResults.prototype.DataKey = "";
        GWRoomResults.prototype.Code = 0;
        GWRoomResults.prototype.Msg = "";

        GWRoomResults.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.DataKey != null && Object.hasOwnProperty.call(m, "DataKey"))
                w.uint32(10).string(m.DataKey);
            if (m.Code != null && Object.hasOwnProperty.call(m, "Code"))
                w.uint32(16).int32(m.Code);
            if (m.Msg != null && Object.hasOwnProperty.call(m, "Msg"))
                w.uint32(26).string(m.Msg);
            return w;
        };

        GWRoomResults.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWRoomResults();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.DataKey = r.string();
                    break;
                case 2:
                    m.Code = r.int32();
                    break;
                case 3:
                    m.Msg = r.string();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWRoomResults;
    })();

    server.GWAddSingleAdjust = (function() {

        function GWAddSingleAdjust(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        GWAddSingleAdjust.prototype.SnId = 0;
        GWAddSingleAdjust.prototype.Platform = "";
        GWAddSingleAdjust.prototype.GameFreeId = 0;

        GWAddSingleAdjust.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SnId != null && Object.hasOwnProperty.call(m, "SnId"))
                w.uint32(8).int32(m.SnId);
            if (m.Platform != null && Object.hasOwnProperty.call(m, "Platform"))
                w.uint32(18).string(m.Platform);
            if (m.GameFreeId != null && Object.hasOwnProperty.call(m, "GameFreeId"))
                w.uint32(24).int32(m.GameFreeId);
            return w;
        };

        GWAddSingleAdjust.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.GWAddSingleAdjust();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SnId = r.int32();
                    break;
                case 2:
                    m.Platform = r.string();
                    break;
                case 3:
                    m.GameFreeId = r.int32();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return GWAddSingleAdjust;
    })();

    server.WGSingleAdjust = (function() {

        function WGSingleAdjust(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        WGSingleAdjust.prototype.SceneId = 0;
        WGSingleAdjust.prototype.Option = 0;
        WGSingleAdjust.prototype.PlayerSingleAdjust = $util.newBuffer([]);

        WGSingleAdjust.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SceneId != null && Object.hasOwnProperty.call(m, "SceneId"))
                w.uint32(8).int32(m.SceneId);
            if (m.Option != null && Object.hasOwnProperty.call(m, "Option"))
                w.uint32(16).int32(m.Option);
            if (m.PlayerSingleAdjust != null && Object.hasOwnProperty.call(m, "PlayerSingleAdjust"))
                w.uint32(26).bytes(m.PlayerSingleAdjust);
            return w;
        };

        WGSingleAdjust.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.WGSingleAdjust();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SceneId = r.int32();
                    break;
                case 2:
                    m.Option = r.int32();
                    break;
                case 3:
                    m.PlayerSingleAdjust = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return WGSingleAdjust;
    })();

    server.TransmitPacketID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PACKET_Transmit_ZERO"] = 0;
        values[valuesById[1003] = "PACKET_SS_PACKET_TRANSMIT"] = 1003;
        return values;
    })();

    server.SSTransmit = (function() {

        function SSTransmit(p) {
            if (p)
                for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
                    if (p[ks[i]] != null)
                        this[ks[i]] = p[ks[i]];
        }

        SSTransmit.prototype.SessionId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
        SSTransmit.prototype.PacketData = $util.newBuffer([]);

        SSTransmit.encode = function encode(m, w) {
            if (!w)
                w = $Writer.create();
            if (m.SessionId != null && Object.hasOwnProperty.call(m, "SessionId"))
                w.uint32(8).int64(m.SessionId);
            if (m.PacketData != null && Object.hasOwnProperty.call(m, "PacketData"))
                w.uint32(18).bytes(m.PacketData);
            return w;
        };

        SSTransmit.decode = function decode(r, l) {
            if (!(r instanceof $Reader))
                r = $Reader.create(r);
            var c = l === undefined ? r.len : r.pos + l, m = new $root.server.SSTransmit();
            while (r.pos < c) {
                var t = r.uint32();
                switch (t >>> 3) {
                case 1:
                    m.SessionId = r.int64();
                    break;
                case 2:
                    m.PacketData = r.bytes();
                    break;
                default:
                    r.skipType(t & 7);
                    break;
                }
            }
            return m;
        };

        return SSTransmit;
    })();

    return server;
})();

module.exports = $root;
