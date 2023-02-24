import { JsonAsset, resources } from "cc";

const FISHING_SCREEN_WIDTH = 1280;
const FISHING_SCREEN_HEIGHT = 720;

export class PathMgr {
    private static instance: PathMgr;
    private pathfiles = ["path/LocusJson" , "path/custom1", "path/custom2", "path/custom3",
     "path/custom4", "path/custom5","path/custom6","path/custom7","path/custom8"];
    private pathspositive: Map<string, {}> | undefined;
    private pathsreverse: Map<string, {}> | undefined;

    private constructor () {
        this.pathspositive = new Map();
        this.pathsreverse = new Map();
    }

    static getInstance () : PathMgr {
        if (this.instance == null) {
            this.instance = new PathMgr();
        }
        return this.instance;
    }

    public loadPath (str: string) {
        for (let i = 0; i < this.pathfiles.length; i++) {
            let filename = str + this.pathfiles[i];
            this.loadPathFromFile(filename);
        }
    }

    public loadPathFromFile (filename: string) {
        resources.load(filename, JsonAsset, (err, jsonasset: JsonAsset) => {
            if (err != null) {
                console.log('loadPathFromFile:', err);
                return;
            }
            // console.log("load path res:", filename);
            let jsondata = jsonasset!.json!.pools!;
            for (let i = 0; i < jsondata.length; i++) {
                let path = jsondata[i];
                this.pathspositive!.set(path.id.toString(), path);
                let reversePath = JSON.parse(JSON.stringify(path));
                for (let j = 0; j < path.points.length; j++) {
                    let pos = reversePath.points[j];
                    pos.x = FISHING_SCREEN_WIDTH - pos.x;
                    pos.y = FISHING_SCREEN_HEIGHT - pos.y;
                }
                this.pathsreverse!.set(path.id.toString(), reversePath);
            }
        });
    }

    public getPath (pathid: string, needFlip: boolean) {
        if (needFlip) {
            return this.pathsreverse!.get(pathid);
        } else {
            return this.pathspositive!.get(pathid);
        }
    }
}