import { assetManager } from "cc";

//var downloadFile = cc.assetManager.downloader.downloadFile;
let downloadFile = assetManager.downloader.downloadFile;

var downloadJson = function (url:string, options:any, onComplete:any) {
    options.responseType = "json";
    downloadFile(url, options, options.onFileProgress, function (err, data) {
        if (!err && typeof data === 'string') {
            try {
                data = JSON.parse(data);
            }
            catch (e) {
                err = e;
            }
        }
        onComplete && onComplete(err, data);
    });
};

var downloadArrayBuffer = function (url:string, options:any, onComplete:any) {
    options.responseType = "arraybuffer";
    downloadFile(url, options, options.onFileProgress, onComplete);
};

var downloadText = function (url:string, options:any, onComplete:any) {
    options.responseType = "text";
    downloadFile(url, options, options.onFileProgress, onComplete);
};


// handler map
var downloaders = [
    {type: ".dat",              callback: downloadArrayBuffer},
    {type: ".atlas",            callback: downloadText},
];

for(let i = 0; i < downloaders.length; i++) {
    assetManager.downloader.register(downloaders[i].type, downloaders[i].callback);
}
