
import { _decorator, Asset, native } from 'cc';
import { ProjectConfig } from '../ProjectConfig';
const { ccclass, property } = _decorator;


//const jsb = (<any>window).jsb;

export enum HotUpdateEventName{
    //没有找到本地的manifest
    ERROR_NO_LOCAL_MANIFEST = "ERROR_NO_LOCAL_MANIFEST",            
    //下载manifest失败
    ERROR_DOWNLOAD_MANIFEST = "ERROR_DOWNLOAD_MANIFEST",
    //转换manifest失败
    ERROR_PARSE_MANIFEST    = "ERROR_PARSE_MANIFEST",
    //准备好可以更新了
    ALREADY_UP_TO_DATE      = "ALREADY_UP_TO_DATE",
    //发现了新版本
    NEW_VERSION_FOUND       = "NEW_VERSION_FOUND",
    //更新完毕
    UPDATE_FINISHED         = "UPDATE_FINISHED",
    //更新进度 
    UPDATE_PROGRESSION      = "UPDATE_PROGRESSION",
    //更新失败
    UPDATE_FAILED           = "UPDATE_FAILED",
    //更新过程出现错误
    ERROR_UPDATING          = "ERROR_UPDATING",
    //解压缩失败
    ERROR_DECOMPRESS        = "ERROR_DECOMPRESS",
    //重新尝试
    Retry                   ="Retry",
    //开始检查更新
    JUSTCHECKINGSTART       ="JUSTCHECKINGSTART",
    //开始更新            
    STARTUPDATE             ="STARTUPDATE",
    //更新准备好了 可以进行检查更新或者直接更新了
    UPDATEREADY             = "UPDATEREADY",
    //延时后 重新启动
    DELAY_TO_RESTART     = "DELAY_TO_RESTART"
}


@ccclass('HotUpdate')
export class HotUpdate {


    private manifestUrl: Asset | null = null!;

    //热更新中的回调
    private updateListener:Function | null = null;
    //忽略的自定义脚本 这些脚本对应的不更新
    private customManifestStr:string = "";

    private _updating = false;
    private _canRetry = false;
    private _storagePath = '';
    private _am: native.AssetsManager = null!;
    private _checkListener:Function = null;
    private _failCount = 0;
    private versionCompareHandle: (versionA: string, versionB: string) => number = null!;
    //当前跟新的bundle
    private bundleName:string = "";

    public constructor( manifest:Asset | null,listener:Function,bundleName:string="",manifestStr:string = "" ){
        this.manifestUrl = manifest;
        this.updateListener = listener;
        this.bundleName = bundleName;
        this.customManifestStr = manifestStr;
    }

    //如果仅仅为check
   public checkCb(event: any) {
        console.log('Code: ' + event.getEventCode());
        switch (event.getEventCode()) {
            case native.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                //this.panel.info.string = "No local manifest file found, hot update skipped.";
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.ERROR_NO_LOCAL_MANIFEST,event);
                }
                break;
            case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                //下载获取manifest失败
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.ERROR_DOWNLOAD_MANIFEST,event);
                }
                break;
            case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
                //manifest转换失败
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.ERROR_PARSE_MANIFEST,event)
                }
                break;
            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
                //准备更新
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.ALREADY_UP_TO_DATE,event);
                }
                //this.panel.info.string = "Already up to date with the latest remote version.";
                break;
            case native.EventAssetsManager.NEW_VERSION_FOUND:
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.NEW_VERSION_FOUND,event);
                }
                //this.panel.info.string = 'New version found, please try to update. (' + Math.ceil(this._am.getTotalBytes() / 1024) + 'kb)';
                //this.panel.checkBtn.active = false;
                //this.panel.fileProgress.progress = 0;
                //this.panel.byteProgress.progress = 0;
                break;
            default:
                return;
        }


        this._am.setEventCallback(null!);
        this._checkListener = null;
        console.log("当前不是正在更新了 this._updateing = false了");
        this._updating = false;
    }

    public updateCb(event: any) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
            case native.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                //this.panel.info.string = 'No local manifest file found, hot update skipped.';
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.ERROR_NO_LOCAL_MANIFEST,event);
                }
                failed = true;
                break;
            case native.EventAssetsManager.UPDATE_PROGRESSION:
                //this.panel.byteProgress.progress = event.getPercent();
                //this.panel.fileProgress.progress = event.getPercentByFile();

                // this.panel.fileLabel.string = event.getDownloadedFiles() + ' / ' + event.getTotalFiles();
                // this.panel.byteLabel.string = event.getDownloadedBytes() + ' / ' + event.getTotalBytes();
                // console.log(this.panel.fileLabel.string, this.panel.byteLabel.string);
                // var msg = event.getMessage();
                // if (msg) {
                //     this.panel.info.string = 'Updated file: ' + msg;
                //     // cc.log(event.getPercent()/100 + '% : ' + msg);
                // }
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.UPDATE_PROGRESSION,event)
                }
                break;
            case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.ERROR_DOWNLOAD_MANIFEST,event);
                }
            case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.ERROR_PARSE_MANIFEST,event);
                }
                //this.panel.info.string = 'Fail to download manifest file, hot update skipped.';
                failed = true;
                break;
            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
                //this.panel.info.string = 'Already up to date with the latest remote version.';
                // if(this.updateListener){
                //     this.updateListener(HotUpdateEventName.ALREADY_UP_TO_DATE,event);
                // }
                failed = true;
                break;
            case native.EventAssetsManager.UPDATE_FINISHED:
                //this.panel.info.string = 'Update finished. ' + event.getMessage();
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.UPDATE_FINISHED,event);
                }
                console.log("更新完成需要重新启动=====");
                needRestart = true;
                break;
            case native.EventAssetsManager.UPDATE_FAILED:
                // this.panel.info.string = 'Update failed. ' + event.getMessage();
                // this.panel.retryBtn.active = true;
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.UPDATE_FAILED,event);
                }
                this._updating = false;
                this._canRetry = true;
                break;
            case native.EventAssetsManager.ERROR_UPDATING:
                //this.panel.info.string = 'Asset update error: ' + event.getAssetId() + ', ' + event.getMessage();
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.ERROR_UPDATING,event);
                }
                break;
            case native.EventAssetsManager.ERROR_DECOMPRESS:
                //this.panel.info.string = event.getMessage();
                if(this.updateListener){
                    this.updateListener(HotUpdateEventName.ERROR_DECOMPRESS,event);
                }
                break;
            default:
                break;
        }

        if (failed) {
            this._am.setEventCallback(null!);
            //this._updateListener = null;
            this.updateListener = null;
            this._updating = false;
        }

        if (needRestart && this.bundleName != ""){
            console.log("子游戏更新完成不需要重新启动=====");
           
            this._am.setEventCallback(null!);

            //子游戏的话，还需要执行一次安装
            let storagePath = ((native.fileUtils ? native.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset/subgames/assets/' + this.bundleName );
            let newSearchPath = (native.fileUtils ? native.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset/subgames/';

            
            // let oldSearchPath = jsb.fileUtils.getSearchPaths();
            // Array.prototype.unshift.apply(oldSearchPath, [newSearchPath]);
            // jsb.fileUtils.setSearchPaths(oldSearchPath);

            console.log("新searchPath=========");
            console.log(newSearchPath);
            console.log("新searchPath=========");
            var oldSearchPath: string[] = native.fileUtils.getSearchPaths();
            //var newPaths: string[] = this.currentAssetsManager.manager.getLocalManifest().getSearchPaths();
            //cc.log(JSON.stringify(newPaths));
            Array.prototype.unshift.apply(oldSearchPath, [newSearchPath]);
            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.

            //这里做一个搜索路径去重处理
            let obj = new Map<string,boolean>();
            let targetSerchPaths:string[] = [];
            targetSerchPaths.push(newSearchPath);
            for (let i = 0; i < oldSearchPath.length; i++) {
                //obj.set(oldSearchPath[i] as string,true);
                targetSerchPaths.push(oldSearchPath[i]);
            }
            console.log("最终的搜索路径为");
            console.log(JSON.stringify(targetSerchPaths));
            console.log("最终的搜索路径为");
            
            localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(targetSerchPaths));
            native.fileUtils.setSearchPaths(targetSerchPaths);


            let tempPath = storagePath + "_temp/";
            var baseOffset = tempPath.length;
            let  fileList:string[] = [];
            if (native.fileUtils.isDirectoryExist(tempPath) && !native.fileUtils.isFileExist(tempPath +  this.bundleName + '_project.manifest.temp')) {
                native.fileUtils.listFilesRecursively(tempPath, fileList);
                fileList.forEach(srcPath => {
                    var relativePath = srcPath.substr(baseOffset);
                    var dstPath = storagePath + "/" + relativePath;
                    //src是下载文件===========
                    //dstPath是安装文件
                    console.log("srcPath");
                    console.log(srcPath);
                    console.log("srcPath");

                    console.log("dstPath");
                    console.log(dstPath);
                    console.log("dstPath");

                    let lastIdx = srcPath.lastIndexOf('/');
                    if (lastIdx == srcPath.length-1) {
                        //如果是一个目录 则创建目录
                        native.fileUtils.createDirectory(dstPath)
                    }
                    else {
                        //删除目标文件
                        if (native.fileUtils.isFileExist(dstPath)) {
                            native.fileUtils.removeFile(dstPath)
                        }
                        native.fileUtils.renameFile(srcPath, dstPath);
                    }
                })
                native.fileUtils.removeDirectory(tempPath);
            }
            //安装完成 则 可以加载bundle 了
            if (this.updateListener){
                this.updateListener(HotUpdateEventName.DELAY_TO_RESTART);
            }
            this.updateListener = null;
        }else if(needRestart) {
            if (this.updateListener){
                this.updateListener(HotUpdateEventName.DELAY_TO_RESTART);
            }
            this._am.setEventCallback(null!);
            //this._updateListener = null;
            this.updateListener = null;
            // Prepend the manifest's search path
            var searchPaths = native.fileUtils.getSearchPaths();
            var newPaths = this._am.getLocalManifest().getSearchPaths();
            console.log(JSON.stringify(newPaths));
            Array.prototype.unshift.apply(searchPaths, newPaths);
            // This value will be retrieved and appended to the default search path during game startup,
            // please refer to samples/js-tests/main.js for detailed usage.
            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.

            //目前仅仅针对  大厅 的热更新，子游戏的暂时先不管   tododev
            localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
            native.fileUtils.setSearchPaths(searchPaths);
        }
    }


    doRetry() {
        if (!this._updating && this._canRetry) {

            //this.panel.retryBtn.active = false;
            this._canRetry = false;
            if(this.updateListener){
                this.updateListener(HotUpdateEventName.Retry);
            }
            //this.panel.info.string = 'Retry failed Assets...';
            this._am.downloadFailedAssets();
        }
    }

    /*
    只检查不更新
    */ 
    checkUpdate() {

        if (this.updateListener){
            this.updateListener(HotUpdateEventName.JUSTCHECKINGSTART);
        }
        if (this._updating) {
            console.log("正在更新中======");
            //this.panel.info.string = 'Checking or updating ...';
            // if(this.updateListener){
            //     this.updateListener(HotUpdateEventName.JUSTCHECKINGSTART);
            // }
            return;
        }
        if (this._am.getState() === native.AssetsManager.State.UNINITED) {
            //初始化完成了 本地要比对的版本的manifest
            console.log("hotUpdate中的checkUpodate()===");
            console.log(this.manifestUrl);
            console.log(this.bundleName);
            console.log(this.manifestUrl == null);
            if (this.bundleName != ""){
                let manifestPath = this._storagePath + "/" + this.bundleName + "_project.manifest";
                console.log("manifestPath------ hotupdate中的 checkUpdate() 方法 中");
                console.log(manifestPath);
                if ( native.fileUtils.isFileExist(manifestPath)){
                    console.log("存在manifestPath 子游戏的");
                    let manifestStr = native.fileUtils.getStringFromFile(manifestPath);
                    let manifest = new native.Manifest(manifestStr, this._storagePath);
                    this._am.loadLocalManifest(manifest, this._storagePath);
                }else{
                    console.log("不存在构建一个xxxx");
                    let UIRLFILE = `${ProjectConfig.HotUpdateUrl}/hotupdate/subgame-remote-assets/${this.bundleName}`;
                    let customManifestStr = JSON.stringify({
                        "packageUrl": UIRLFILE,
                        "remoteManifestUrl": UIRLFILE + "/" + this.bundleName + "_project.manifest",
                        "remoteVersionUrl": UIRLFILE + + "/" + this.bundleName + "_version.manifest",
                        "version": "1.0.0",
                        "assets": {},
                        "searchPaths": []
                    });
                    let manifest = new native.Manifest(customManifestStr, this._storagePath);
                    this._am.loadLocalManifest(manifest, this._storagePath);
                }
            }else{
                if (native.fileUtils.isFileExist("project.manifest")){
                    console.log("main.js同级目录下的manifest文件 这样不需要构建两次 执行检查更新的时候判定");
                    let manifestStr = native.fileUtils.getStringFromFile("project.manifest");
                    let manifest = new native.Manifest(manifestStr,this._storagePath);
                    this._am.loadLocalManifest(manifest,this._storagePath);
                }else{
                    console.log("获取不到main.js同级目录下的manifest文件 需要构建两次 执行检查更新的时候判定");
                    var url = this.manifestUrl!.nativeUrl;
                    console.log("url地址");
                    console.log(url);
                    this._am.loadLocalManifest(url);
                }
            }
            
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {
            //this.panel.info.string = 'Failed to load local manifest ...';
            if(this.updateListener){
                this.updateListener(HotUpdateEventName.ERROR_NO_LOCAL_MANIFEST);
            }
            return;
        }
        this._am.setEventCallback(this.checkCb.bind(this));

        this._am.checkUpdate();
        this._updating = true;
    }



    //执行更新
    doHotUpdate() {
        console.log("开始执行更新 HotUpdate中的方法");
        console.log(this._updating,"当前是否正在更新");
        if (this._am && !this._updating) {
            this._am.setEventCallback(this.updateCb.bind(this));

            if (this._am.getState() === native.AssetsManager.State.UNINITED) {
                if (this.bundleName != ""){
                    let manifestPath = this._storagePath + "/" + this.bundleName + "_project.manifest";
                    if ( native.fileUtils.isFileExist(manifestPath)){
                        let manifestStr = native.fileUtils.getStringFromFile(manifestPath);
                        let manifest = new native.Manifest(manifestStr, this._storagePath);
                        this._am.loadLocalManifest(manifest, this._storagePath);
                    }else{
                        let UIRLFILE = `${ProjectConfig.HotUpdateUrl}/hotupdate/subgame-remote-assets/${this.bundleName}`;
                        let customManifestStr = JSON.stringify({
                            "packageUrl": UIRLFILE,
                            "remoteManifestUrl": UIRLFILE + "/" + this.bundleName + "_project.manifest",
                            "remoteVersionUrl": UIRLFILE + + "/" + this.bundleName + "_version.manifest",
                            "version": "1.0.0",
                            "assets": {},
                            "searchPaths": []
                        });
                        let manifest = new native.Manifest(customManifestStr, this._storagePath);
                        this._am.loadLocalManifest(manifest, this._storagePath);
                    }
                }else{
                    if (native.fileUtils.isFileExist("project.manifest")){
                        console.log("main.js同级目录下的manifest文件 这样不需要构建两次  执行更新的时候判定");
                        let manifestStr = native.fileUtils.getStringFromFile("project.manifest");
                        let manifest = new native.Manifest(manifestStr,this._storagePath);
                        this._am.loadLocalManifest(manifest,this._storagePath);
                    }else{
                        console.log("获取不到main.js同级目录下的manifest文件 需要构建两次  执行更新的时候判定");
                        var url = this.manifestUrl!.nativeUrl;
                        this._am.loadLocalManifest(url);
                    }
                }
            }

            this._failCount = 0;
            this._am.update();
            
            if(this.updateListener){
                //开始更新这个时候 要切换到进度条 0 的位置
                this.updateListener(HotUpdateEventName.STARTUPDATE);
            }
            this._updating = true;
        }
    }


    public doInit(){
        if (!native) {
            return;
        }
        if (this.bundleName == ""){
            //大厅更新
            this._storagePath = ((native.fileUtils ? native.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset');    
        }else{
            //子游戏的bundle更新
            this._storagePath = ((native.fileUtils ? native.fileUtils.getWritablePath() : '/') + 'blackjack-remote-asset/subgames/assets/' + this.bundleName);
        }
        
        console.log('Storage path for remote asset : ' + this._storagePath);

        // Setup your own version compare handler, versionA and B is versions in string
        // if the return value greater than 0, versionA is greater than B,
        // if the return value equals 0, versionA equals to B,
        // if the return value smaller than 0, versionA is smaller than B.
        this.versionCompareHandle = function (versionA: string, versionB: string) {
            console.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
            var vA = versionA.split('.');
            var vB = versionB.split('.');
            for (var i = 0; i < vA.length; ++i) {
                var a = parseInt(vA[i]);
                var b = parseInt(vB[i] || '0');
                if (a === b) {
                    continue;
                }
                else {
                    return a - b;
                }
            }
            if (vB.length > vA.length) {
                return -1;
            }
            else {
                return 0;
            }
        };

        // Init with empty manifest url for testing custom manifest
        this._am = new native.AssetsManager('', this._storagePath, this.versionCompareHandle);
        this._am.setVerifyCallback(function (path: string, asset: any) {
            // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
            var compressed = asset.compressed;
            // Retrieve the correct md5 value.
            var expectedMD5 = asset.md5;
            // asset.path is relative path and path is absolute.
            var relativePath = asset.path;
            // The size of asset file, but this value could be absent.
            var size = asset.size;
            if (compressed) {
                //panel.info.string = "Verification passed : " + relativePath;
                return true;
            }
            else {
                //panel.info.string = "Verification passed : " + relativePath + ' (' + expectedMD5 + ')';
                return true;
            }
        });
        
        if(this.updateListener){

            this.updateListener(HotUpdateEventName.UPDATEREADY);
        }
        //this.panel.info.string = 'Hot update is ready, please check or directly update.';
        //this.panel.fileProgress.progress = 0;
        //this.panel.byteProgress.progress = 0;
    }

    //热更新结束
    onFinish(){
        if(this.updateListener){
            this._am.setEventCallback(null!);
            this.updateListener = null;
        }
    }

}
