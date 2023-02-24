import { Asset, assetManager, AssetManager, AudioClip, BufferAsset, ImageAsset, js, JsonAsset, path, Prefab, resources, SceneAsset, SpriteAtlas, SpriteFrame, TextAsset, Texture2D } from "cc";
import { Task } from "../async/Task";
import { CtorT, ProgressCallback } from "../Type";


export default class ResourceHelper {

    private static _cacheRes: Map<string, Map<string, any>> = new Map<string, Map<string, any>>();
    private static _cacheDirRes: Map<string, Map<string, any>> = new Map<string, Map<string, any>>();

    static getCacheRes<T>(abName: string, path: string, cls: CtorT<T>): T | null {
        let ab = this._cacheRes.get(abName);
        if (ab) {
            let res = ab.get(path);
            if (!res) return null;
            if (res instanceof cls) {
                return res as T;
            } else {
                console.error(`getCacheRes error: 类型不匹配${cls}`)
            }
        }
        return null;
    }

    static setCacheRes(abName: string, path: string, res: any) {
        if (this._cacheRes.has(abName) && this._cacheRes.get(abName)?.has(path)) {
            // console.log(`setCacheRes 路径${path}已有资源`)
        }
        if (!this._cacheRes.has(abName)) this._cacheRes.set(abName, new Map<string, any>());
        this._cacheRes.get(abName)!.set(path, res);
    }

    static getCacheDirRes<T>(abName: string, path: string, cls: CtorT<T>): T[] | null {
        let ab = this._cacheDirRes.get(abName);
        if (ab) {
            let res = ab.get(path);
            if (!res) return null;
            if (res instanceof Array) {
                if (res.length > 0) {
                    if (res[0] instanceof cls) {
                        return res;
                    } else {
                        console.error(`getCacheDirRes error: 数组元素类型不匹配${cls}`)
                    }
                } else {
                    return res;
                }
            } else {
                console.error(`getCacheDirRes error: 类型不匹配${cls}`)
            }
        }
        return null;
    }

    static setCacheDirRes(abName: string, path: string, resList: any) {
        if (this._cacheDirRes.has(abName) && this._cacheDirRes.get(abName)?.has(path)) {
            // console.warn(`setCacheDirRes 路径${path}已有资源`)
        }
        if (!this._cacheDirRes.has(abName)) this._cacheDirRes.set(abName, new Map<string, any>());
        this._cacheDirRes.get(abName)!.set(path, resList);
    }

    static clearCacheRes(abName: string) {
        this._cacheRes.delete(abName);
    }

    static clearCacheDirRes(abName: string) {
        this._cacheDirRes.delete(abName);
    }

    static async loadBundle(abName: string): Promise<AssetManager.Bundle | null> {
        let ab = assetManager.getBundle(abName);
        if (ab) return ab;
        return new Promise((r) => {
            assetManager.loadBundle(abName, (error, bundle) => {
                if (error) {
                    console.error(`加载${abName}失败:${error}`)
                    r(null);
                } else {
                    r(bundle);
                }
            })
        });
    }

    static async loadResInAB<T extends Asset>(abName: string, path: string, cls: CtorT<T>, progressCallback: ProgressCallback = null): Promise<T | null> {
        let res = this.getCacheRes(abName, path, cls);
        if (res) {
            progressCallback && progressCallback(1, 1, null);
            return res;
        }
        let ab = assetManager.getBundle(abName);
        if (!ab) {
            ab = await this.loadBundle(abName);
        }
        return new Promise((r) => {
            ab!.load(path, cls, progressCallback, (error, prefab) => {
                if (error) {
                    console.error(`AB${abName}加载子资源${path}失败:${error}`)
                    r(null);
                } else {
                    this.setCacheRes(abName, path, prefab);
                    r(prefab);
                }
            });
        })
    }

    static async loadPfbListInAB(abName: string, paths: string[], progressCallback: ProgressCallback, completeCallback: (err: Error | null, data: any) => void) {
        let ab = assetManager.getBundle(abName);
        if (!ab) {
            ab = await this.loadBundle(abName);
        }
        ab.load(paths, progressCallback, completeCallback);
    }

    /**
     * 
     * @param abName 
     * @param paths  格式类似: [["prefab/Game"],["prefab/Select"],["texture-en/en_tienlen", "spriteatlas"]],默认格式预制件，如果其他格式，需要传入类型名称的全小写
     * @param progressCallback 
     * @param completeCallback 
     */
    static async loadResListInAB(abName: string, paths: string[][], progressCallback: ProgressCallback, completeCallback?: (err: Error | null) => void) {
        let ab = assetManager.getBundle(abName);
        if (!ab) {
            ab = await this.loadBundle(abName);
        }
        let progressMap = js.createMap();
        let _getType = (type: string) => {
            if (!type) return Prefab;
            if (type.indexOf("spriteatlas") == 0) return SpriteAtlas;
            else if (type.indexOf("spriteframe") == 0) return SpriteFrame;
            else if (type.indexOf("audioclip") == 0) return AudioClip;
            else if (type.indexOf("buffer") == 0) return BufferAsset;
            else if (type.indexOf("text") == 0) return TextAsset;
            else if (type.indexOf("json") == 0) return JsonAsset;
            else if (type.indexOf("scene") == 0) return SceneAsset;
            return Prefab;
        }
        let _getProgress = () => {
            let count = paths.length;
            let progress = 0;
            for (const key in progressMap) {
                progress += progressMap[key];
            }
            return progress / count;
        }
        let _isDirRes = (value: string) => {
            return value && value.indexOf("_dir") != -1;
        }
        for (let index = 0; index < paths.length; index++) {
            let path = paths[index][0];
            progressMap[path] = 0;
            let resType = paths[index][1];
            let isDir = _isDirRes(resType);
            let _type: any = _getType(resType);
            if (isDir) {
                ab.loadDir(path, _type, (f, t, i) => {
                    progressMap[path] = f / t;
                    let progress = _getProgress();
                    progressCallback(progress, 1, null);
                    if (progress == 1) {
                        completeCallback && completeCallback(null);
                    }
                }, null);
            } else {
                ab.load(path, _type, (f, t, i) => {
                    progressMap[path] = f / t;
                    let progress = _getProgress();
                    progressCallback(progress, 1, null);
                    if (progress == 1) {
                        completeCallback && completeCallback(null);
                    }
                }, null);
            }
        }
    }


    static async preloadResInAB<T extends Asset>(abName: string, path: string, cls: CtorT<T>, progressCallback: ProgressCallback = null): Promise<T | null> {
        let res = this.getCacheRes(abName, path, cls);
        if (res) {
            progressCallback && progressCallback(1, 1, null);
            return res;
        }
        let ab = assetManager.getBundle(abName);
        if (!ab) {
            ab = await this.loadBundle(abName);
        }
        ab!.preload(path, cls, progressCallback, (error, list) => {
            if (error) {
                console.error(`AB${abName}预加载子资源${path}失败:${error}`)
            }
        });
    }


    static async loadDirInAB<T extends Asset>(abName: string, path: string, cls: CtorT<T>, progressCallback: ProgressCallback = null): Promise<T[] | null> {
        let res = this.getCacheDirRes(abName, path, cls);
        if (res) {
            progressCallback && progressCallback(1, 1, null);
            return res;
        }
        let ab = assetManager.getBundle(abName);
        if (!ab) {
            ab = await this.loadBundle(abName);
        }
        return new Promise((r) => {
            ab!.loadDir(path, cls, progressCallback, (error, resList) => {
                if (error) {
                    console.error(`AB${abName}加载子资源${path}失败:${error}`)
                    r(null);
                } else {
                    this.setCacheDirRes(abName, path, resList);
                    r(resList);
                }
            });
        })
    }

    static async preloadDirInAB<T extends Asset>(abName: string, path: string, cls: CtorT<T>, progressCallback: ProgressCallback = null): Promise<T[] | null> {
        let res = this.getCacheDirRes(abName, path, cls);
        if (res) {
            progressCallback && progressCallback(1, 1, null);
            return res;
        }
        let ab = assetManager.getBundle(abName);
        if (!ab) {
            ab = await this.loadBundle(abName);
        }
        ab!.preloadDir(path, cls, progressCallback, (error, list) => {
            if (error) {
                console.error(`AB${abName}预加载子资源${path}失败:${error}`)
            }
        });
    }

    /**
     * 图片路径，不用指定子资源类型spriteFrame
     * @param path 
     * @returns 
     */
    static async loadLocalSPFrame(path: string): Promise<SpriteFrame | null> {
        let sf = this.getCacheRes('resources', path, SpriteFrame);
        if (sf) return sf;
        return new Promise((r) => {
            resources.load(`${path}/spriteFrame`, SpriteFrame, (error, frame) => {
                if (error) {
                    console.error(`加载SpriteFrame ${path} 失败:${error}`)
                    r(null);
                } else {
                    this.setCacheRes('resources', path, frame);
                    r(frame);
                }
            })
        })
    }

    static async loadLocalSPFrameDir(path: string): Promise<Asset[] | null> {
        let list = this.getCacheRes<Asset[]>('resources', path, Array);
        if (list) return list;
        return new Promise((r) => {
            resources.loadDir(path, SpriteFrame, (error, list) => {
                if (error) {
                    console.error(`加载SpriteFrame目录 ${path}失败:${error}`);
                    r(null);
                } else {
                    this.setCacheRes('resources', path, list);
                    r(list);
                }
            })
        })
    }

    static async loadRemoteSPFrame(url: string): Promise<SpriteFrame | null> {
        let res = this.getCacheRes('remote', url, SpriteFrame);
        if (res) return res;
        return new Promise((r) => {
            assetManager.loadRemote<ImageAsset>(url, (error, image) => {
                if (error) {
                    console.error(`远程加载SpriteFrame ${url}失败:${error}`);
                    r(null);
                } else {
                    const tex = new Texture2D();
                    tex.image = image;
                    const sf = new SpriteFrame();
                    sf.texture = tex;
                    this.setCacheRes('remote', url, sf);
                    r(sf);
                }
            })
        })
    }
    /**
     * 移除并释放ab包以及所有资源
     * @param abName 
     */
    static releaseAB(abName: string) {
        this.clearCacheRes(abName);
        let bundle = assetManager.getBundle(abName);
        bundle.releaseAll();
        assetManager.removeBundle(bundle);
    }

    static releasePrefab(abName: string, pfbName: string) {
        let ab = assetManager.getBundle(abName);
        ab.release(pfbName, Prefab);
    }

}