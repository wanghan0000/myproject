
import { ProjectConfig }               from "../../ProjectConfig";
import { CryptoTool }                  from "../libs/cryptos/CryptoTool"
import { Utils }                       from "../utils/Utils"


let HttpHostDefault                    = "http://127.0.0.1/";
let HttpTimeoutDefault                 = 1000 * 30;


let urlEncodeReplaceRegExp             = new RegExp("[^a-zA-Z0-9\.\-]", "g");
function urlEncodeReplaceFunction(char:string, pos:number, orginalText:string): string {
    if (" " === char) {
        return "+"
    }

    let str = char.charCodeAt(0).toString(16).toLocaleUpperCase();
    if (1 == str.length) {
        str = "0" + str;
    }
    return "%" + str;
}

export namespace WebAPI {

    export namespace Action {
        export const Null               = "";
        export const Init               = "api_init";
        export const IP                 = "ip";
    }

    export function getIpAndAddress(succCallback?: Function, failCallback?: Function): void {
        let host = GlobalVar.HttpHost_IP !== undefined ? GlobalVar.HttpHost_IP : HttpHostDefault;
        let params = new Map<string, string>([
            ["ts", Utils.getTimeStampString()],
        ]);
        WebAPI.doGet(WebAPI.Action.Null, params, succCallback, failCallback, undefined, host);
    }

    /**
     * Http get request.
     * 
     * @param action
     * @param params
     * @param succCallback
     * @param failCallback
     * @param timeout
     * @param _url
     */
    export function doGet(action: string, params: Map<string, string>, succCallback?: Function, 
        failCallback?: Function, timeout?: number, _url?: string): void {
        
        if (undefined === _url) {
            WebAPI.getHost(function(_url: string): void {
                WebAPI.doGet(action, params, succCallback, failCallback, timeout, _url);
            });
            return;
        }

        if (undefined === failCallback) {
            failCallback = succCallback;
        }

        let url = WebAPI.formatUrl(action, params, _url);
        console.log("Info-WebAPI-doGet: url=", url);

        let request = new XMLHttpRequest();
        request.timeout = undefined === timeout ? HttpTimeoutDefault : timeout;
        request.onreadystatechange = function(): void {
            if (XMLHttpRequest.DONE !== request.readyState) {
                return;
            }

            if (200 === request.status) {
                console.log("Info: Http request success. url=", url);
                let data = JSON.parse(request.response);
                if (succCallback) {
                    succCallback(data);
                }
                return;
            }

            console.log("Error: Http request failed. state=", request.status, "url=", url);
            if (failCallback) {
                failCallback();
            }
        };
        request.onerror = function(): void {
            console.log("Error: Http request error. url=", url);
            if (failCallback) {
                failCallback();
            }
        };
        request.ontimeout = function(): void {
            console.log("Error: Http request timeout. url=", url);
            if (failCallback) {
                failCallback();
            }
        };

        request.open("GET", url, true);
        request.send();
    }

    /**
     * Http post request.
     * 
     * @param action
     * @param params
     * @param data
     * @param succCallback
     * @param failCallback
     * @param timeout
     * @param _url
     */
    export function doPost(action: string, params: Map<string, string>, datas?: Map<string, string>, succCallback?: Function, 
        failCallback?: Function, timeout?: number, _url?: string): void {

        if (undefined === _url) {
            WebAPI.getHost(function(_url: string): void {
                WebAPI.doPost(action, params, datas, succCallback, failCallback, timeout, _url);
            });
            return;
        }

        if (undefined === failCallback) {
            failCallback = succCallback;
        }

        let url = WebAPI.formatUrl(action, params, _url);
        console.log("Info-WebAPI-doPost: url=", url);

        let request = new XMLHttpRequest();
        request.timeout = undefined === timeout ? HttpTimeoutDefault : timeout;

        let formData = new FormData();
        if (datas !== undefined) {
            datas.forEach(function(value: string, key: string): void {
                formData.append(key, value);
            });
        }

        request.onreadystatechange = function(): void {
            if (XMLHttpRequest.DONE !== request.readyState) {
                return;
            }

            if (200 === request.status) {
                let data = JSON.parse(request.response);
                if (succCallback) {
                    succCallback(data);
                }
                return;
            }

            if (failCallback) {
                failCallback();
            }
        };
        request.onerror = function(): void {
            console.log("Error: Http request error.");
            if (failCallback) {
                failCallback();
            }
        };
        request.ontimeout = function(): void {
            console.log("Error: Http request timeout.");
            if (failCallback) {
                failCallback();
            }
        };

        request.open("POST", url, true);
        request.send(formData);
    }

    export function formatUrl(action: string, params: Map<string, string>, url: string): string {
        params.set("sign", WebAPI.sign(params));
        let queryStr = "";
        params.forEach((value: string, key: string) => {
            if (queryStr !== "") {
                queryStr += "&";
            }
            queryStr += key + "=" + WebAPI.urlEncode(value);
        });
        return url + action + "?" + queryStr;
    }

    export function sign(params: Map<string, string>): string {
        let signStr = "";
        let valueArray = [];
        valueArray.push(ProjectConfig.AppId);

        params.forEach((value: string, key: string) => {
            if (key !== "sign") {
                valueArray.push(value);
            }
        });

        // value sort.
        valueArray.sort();

        // connect.
        for (let value of valueArray) {
            if (signStr !== "") {
                signStr += ";"
            }
            signStr += value;
        }

        return CryptoTool.Md5(signStr)
    }

    export function urlEncode(url: string): string {
        return url.replace(urlEncodeReplaceRegExp, urlEncodeReplaceFunction);
    }

    export function getHost(callback: Function): void {
        if (callback != undefined) {
            callback(HttpHostDefault);
        }
    }
}
