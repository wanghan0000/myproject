
/**
 * Panda 目录初始化
 */

import "./ccex/DownloaderEx"

import { DataMgr }                              from "./data/DataMgr";
import { CryptoTool }                           from "./libs/cryptos/CryptoTool";
import { SocketMgr }                            from "./net/SocketMgr"
import { WebAPI }                               from "./net/WebAPI";
import { Utils }                                from "./utils/Utils";



let windowThis                                  = window as any;


windowThis.DataMgr                              = DataMgr;
windowThis.CryptoTool                           = CryptoTool;
windowThis.SocketMgr                            = SocketMgr;
windowThis.WebAPI                               = WebAPI;
windowThis.Utils                                = Utils;