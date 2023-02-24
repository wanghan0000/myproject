import { AssetManager, assetManager, BufferAsset, js, JsonAsset, resources, View } from "cc";

export class PathMgr {
    private static _instance: PathMgr;
    private pathfiles = ["path/LocusJson" , "path/custom1", "path/custom2", "path/custom3",
     "path/custom4", "path/custom5","path/custom6","path/custom7","path/custom8"];
    private pathspositive: Map<string, any> | undefined;
    private pathsreverse: Map<string, any> | undefined;

    //取屏幕的当前适配尺寸，如果使用标准设计分辨率尺寸，会使反转的路径不对称
    //需要更好的方式，比如重画路径，不让鱼路径影响屏幕适配
    // static FISHING_SCREEN_WIDTH = View.instance.getVisibleSize().height;//按竖凭设计的，高是横屏的宽
    // static FISHING_SCREEN_HEIGHT = View.instance.getVisibleSize().width;//宽是横屏的高
    static FISHING_SCREEN_WIDTH = 1280;
    static FISHING_SCREEN_HEIGHT = 720;

    private constructor () {
        this.pathspositive = new Map();
        this.pathsreverse = new Map();
    }

    static get instance () : PathMgr {
        if (this._instance == null) {
            this._instance = new PathMgr();
        }
        return this._instance;
    }

    public loadPath (str: string) {
        for (let i = 0; i < this.pathfiles.length; i++) {
            let filename = str + this.pathfiles[i];
            this.loadPathFromFile(filename);
        }
    }

    public loadPathFromFile (filename: string) {
        assetManager.loadBundle("FishHappy",(err,bundle:AssetManager.Bundle)=>{
            if (err !=null){
                console.error("loadBundle failed:",err);
                return;
            }
            bundle.load<BufferAsset>(filename,(err,buff:BufferAsset)=>{
                if (err != null){
                    console.error("load path file err",err);
                    return;
                }   
                let arr = filename.split("/");
                JSZip.loadAsync(buff.buffer()!).then((zip)=>{
                    zip.file(arr[1]+".json").async("text").then((data)=>{
                        //console.log(data);
                        let json = JSON.parse(data);
                        let jsondata = json.pools;
                        for (let i = 0; i < jsondata.length; i++) {
                            let path = jsondata[i];
                            this.pathspositive!.set(path.id.toString(), path);
                            let reversePath = JSON.parse(JSON.stringify(path));
                            for (let j = 0; j < path.points.length; j++) {
                                let pos = reversePath.points[j];
                                pos.x = PathMgr.FISHING_SCREEN_WIDTH - pos.x;
                                pos.y = PathMgr.FISHING_SCREEN_HEIGHT - pos.y;
                            }
                            this.pathsreverse!.set(path.id.toString(), reversePath);
                        }
                    });
                });
            });
        });

        // assetManager.loadBundle('FishHappy',(err,bundle:AssetManager.Bundle)=>{
        //     if (err != null){
        //         console.log('loadBundle failed:', err);
        //         return;
        //     }
        //     bundle.load(filename, JsonAsset, (err, jsonasset: any) => {
        //         if (err != null) {
        //             console.log('loadPathFromFile:', err);
        //             return;
        //         }
        //         // console.log("load path res:", filename);
        //         let jsondata = jsonasset!.json!.pools;
        //         for (let i = 0; i < jsondata.length; i++) {
        //             let path = jsondata[i];
        //             this.pathspositive!.set(path.id.toString(), path);
        //             let reversePath = JSON.parse(JSON.stringify(path));
        //             for (let j = 0; j < path.points.length; j++) {
        //                 let pos = reversePath.points[j];
        //                 pos.x = FISHING_SCREEN_WIDTH - pos.x;
        //                 pos.y = FISHING_SCREEN_HEIGHT - pos.y;
        //             }
        //             this.pathsreverse!.set(path.id.toString(), reversePath);
        //         }
        //     });
        // });
    }

    public getPath (pathid: string, needFlip: boolean) {
        if (needFlip) {
            return this.pathsreverse!.get(pathid);
        } else {
            return this.pathspositive!.get(pathid);
        }
    }
}