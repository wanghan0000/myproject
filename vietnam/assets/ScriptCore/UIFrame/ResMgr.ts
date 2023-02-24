import { Asset, assetManager, AssetManager, AudioClip, BufferAsset, director, error, js, Material, native, ParticleAsset, Prefab, sp, SpriteAtlas, SpriteFrame } from "cc";



/**
 * 资源类型
 */
export enum ResType {

    ResType_UnKnow = 0,                    //位置类型 该种资源不处理
    ResType_SpriteFrame = 1,                //图片资源 输出类型为 spriteFrame
    ResType_SpriteAtlas = 2,                //图集资源 输出类型为 SpriteAtlas 通过->getSpriteFrame() 能够获取对应的SpriteFrame 要求图集 plist和png的名字除了后缀是一样的
    ResType_AudioClip = 3,                  //音频资源 输出类型为 AudioClip   
    ResType_Prefab = 4,                     //预制体   输出类型为 Prefab
    ResType_Spine = 5,                      //骨骼动画资源 输出类型为 sp.SkeletionnData 要求三种资源类型必须一致
    ResType_Fnt = 6,                        //字体资源类型 输出格式为 LabelAtlas 要求 字体 fnt文件和png文件的名字除了后缀必须一致
    ResType_Animation = 7,                  //动画资源   输出格式为AnimationClip

    //一下几种是需要扩展的，以后会用到的。但是本次不准备实现
    ResType_Material = 8,                  //材质
    ResType_Shader = 9,                     //shader 高级效果展示，资源缓存的时候暂时不处理

    //粒子特效  粒子特效也可以动态加载进去。
    ResType_Particle = 10,                  //粒子特效
}


//灰色的材质的常量定义
export const Gray_Material_Name = "Lobby/materials/ui-sprite-gray-material";
//正常材质的常量定义
export const Normail_Material_Name = "Lobby/materials/ui-sprite-normal-material";

/**
 * 资源的加载和bundle的动态加载都放在ResMgr中。
 * 
 * 思路：
 * 1：进入大厅或者子游戏的时候，先加载bundle和对应的prefabs。全部都加载，但是不 initialize(initialize放在UIManger中，打开的时候处理)
 *    在加载界面的时候只需要来ResMgr中获取对应的prefab就可以了。
 * 2：Lobby Assset Bundle中的资源 不释放 --- 这个也看情况，如果真的某个子游戏的资源过大。需要释放大厅，也是可以的，暂时不用考虑，应该不会有太大的子游戏
 *    部分小游戏，需要放在游戏的bundle中，但是可能也不能释放。因为他是哪里都存在的
 * 
 * 3：需要有资源清单 大厅一个，每个子游戏一个。
 * 
 * 
 */
export class ResMgr {

    private static instance: ResMgr;
    public static getInstance() {
        if (this.instance == null) {
            this.instance = new ResMgr();
        }
        assetManager.downloader.maxConcurrency = 100;
        return this.instance;
    }


    //#region 管理不需要释放的资源。这些不释放的资源 要在loading的时候预加载进来避免 打开卡顿

    private loadProgress: { [key: string]: number } = js.createMap();

    private preloadProgressCallBack: Function | null = null;

    private preloadCompleteCallBack: Function | null = null;


    private subGameBundle: Map<string, AssetManager.Bundle> = new Map<string, AssetManager.Bundle>();
    /*
    仅仅加载bunle。主要用途为：子游戏在进入之前，要先加载bundle，然后才能执行对应的逻辑
    大厅字游戏必须保证 大厅对子游戏没有资源和代码引用。
    子游戏可以引用大厅的逻辑代码和资源
    */
    public preloadBundleOnly(bundleName: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            if (this.subGameBundle.has(bundleName)) {
                resolve(true);
                return;
            }
            assetManager.loadBundle(bundleName, (err, bundle: AssetManager.Bundle) => {
                if (err != null) {
                    resolve(false);
                    return;
                }
                this.subGameBundle.set(bundleName, bundle);
                resolve(true);
            });
        });
    }

    //#endregion


    /**
     * 处理reslist中所有需要被处理的资源
    */
    public async preLoad(list: Map<string, number>, progressCb: Function, completeCallBack: Function, resType?: & Map<ResType, boolean>) {
        if (resType == null || resType == undefined) {
            resType = new Map<ResType, boolean>();
        }
        if (resType.size == 0) {
            resType!.set(ResType.ResType_Prefab, true);
            resType!.set(ResType.ResType_AudioClip, true);
        }
        this.preloadProgressCallBack = progressCb;
        this.preloadCompleteCallBack = completeCallBack;
        this.loadProgress = js.createMap();
        let map = list;
        let idx = 0;
        for (let key of map.keys()) {
            idx++;
            if (map.get(key) == ResType.ResType_Prefab &&
                resType!.has(ResType.ResType_Prefab) &&
                resType!.get(ResType.ResType_Prefab)) {
                //加载 预制体 prefab
                this.loadProgress[key] = 0;
                setTimeout(() => {
                    this.preloadBundlePrefab(key);
                }, 0);
            }
            else if (map.get(key) == ResType.ResType_SpriteFrame &&
                resType!.has(ResType.ResType_SpriteFrame) &&
                resType!.get(ResType.ResType_SpriteFrame)) {
                //图片 spriteFrame
                this.loadProgress[key] = 0;
                setTimeout(() => {
                    this.preloadBunleSpriteFrame(key);
                }, 0);

            } else if (map.get(key) == ResType.ResType_SpriteAtlas &&
                resType!.has(ResType.ResType_SpriteAtlas) &&
                resType!.get(ResType.ResType_SpriteAtlas)
            ) {
                //图集 spriteAtlas
                this.loadProgress[key] = 0;
                
                setTimeout(() => {
                    this.preloadBundleSpriteAtlas(key);
                }, 0);

            } else if (map.get(key) == ResType.ResType_AudioClip &&
                resType!.has(ResType.ResType_AudioClip) &&
                resType!.get(ResType.ResType_AudioClip)
            ) {
                //音频资源 AudioClip
                this.loadProgress[key] = 0;
                setTimeout(() => {
                    this.preloadBundleAudioClip(key);
                }, 0);

            } else if (map.get(key) == ResType.ResType_Material &&
                resType!.has(ResType.ResType_Material) &&
                resType!.get(ResType.ResType_Material)
            ) {
                this.loadProgress[key] = 0;
                setTimeout(() => {
                    this.preloadBundleMaterial(key);
                }, 0);

            } else if (map.get(key) == ResType.ResType_Particle &&
                resType!.has(ResType.ResType_Particle) &&
                resType!.get(ResType.ResType_Particle)
            ) {
                this.loadProgress[key] = 0;

                setTimeout(() => {
                    this.preloadBundleParticleAsset(key);
                }, 0);
            }
        }
        setTimeout(() => {
            this.calProgress(1);
        }, 200);
    }

    //加载loading第一次这个时候 很多东西还没有仅仅加载 UILoading节点
    public async preloadLoading(prefabPath: string): Promise<boolean> {
        let data = this.splitFormName(prefabPath);
        let bundleName = data.bundle;
        let prefabName = data.prefabName;

        return new Promise<boolean>((reslove, reject) => {
            assetManager.loadBundle(bundleName, (err, bundle: AssetManager.Bundle) => {
                if (err !== null) {
                    reslove(true);
                    return;
                }
                bundle?.load<Prefab>(prefabName, (err, prefab: Prefab) => {
                    if (err != null) {
                        console.warn(`${prefabPath}加载失败`);
                        reslove(false);
                        return;
                    } else {
                        if (!this.loadPrefabWithBundleKey.has(bundleName)) {
                            this.loadPrefabWithBundleKey.set(bundleName, new Map<string, Prefab>());
                        }
                        this.loadPrefabWithBundleKey.get(bundleName)!.set(prefabPath, prefab);
                        this.loadPrefabWithBundleKey.get(bundleName)!.get(prefabPath)!.addRef();
                        reslove(true);
                    }
                });
            })
        })

    }


    /**
     * 计算加载进度 更新进度条
     */
    public calProgress(state: number) {
        let progress = 0;
        let allCnt = 0;
        for (let key in this.loadProgress) {
            allCnt = allCnt + 1;
            progress = progress + this.loadProgress[key];
        }
        if (this.preloadProgressCallBack != null) {
            this.preloadProgressCallBack(progress / allCnt);
        }
        if (progress / allCnt == 1 && state == 1) {
            this.preloadProgressCallBack = null;
            if (this.preloadCompleteCallBack != null) {
                this.preloadCompleteCallBack();
                this.preloadCompleteCallBack = null;
            }
        }
    }


    /**
     * 保存bundle对应的prefab 数据格式如下：
     * map<string,map<string,prefab>>
     * 
     * 优化后的预制体，prefab get set 都从该对象中获取
     * 
     */
    private loadPrefabWithBundleKey: Map<string, Map<string, Prefab>> = new Map<string, Map<string, Prefab>>();
    //加载到内存中spriteFrame
    private loadSpriteFrameWithBundleKey: Map<string, Map<string, SpriteFrame>> = new Map<string, Map<string, SpriteFrame>>();
    //合图的图集资源
    private loadSpriteAtlasWithBundleKey: Map<string, Map<string, SpriteAtlas>> = new Map<string, Map<string, SpriteAtlas>>();
    //音频资源
    private loadAudioClipWithBundleKey: Map<string, Map<string, AudioClip>> = new Map<string, Map<string, AudioClip>>();

    //Material 材质资源的加载
    private loadMaterialWithBundleKey: Map<string, Map<string, Material>> = new Map<string, Map<string, Material>>();

    //Particle 资源的动态加载
    private loadParticleWithBundleKey: Map<string, Map<string, ParticleAsset>> = new Map<string, Map<string, ParticleAsset>>();

    //spine动画
    private loadSpineWithBundleKey: Map<string, Map<string, sp.SkeletonData>> = new Map<string, Map<string, sp.SkeletonData>>();



    public getPrefabByPath(path: string): Prefab | null {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadPrefabWithBundleKey.has((bundleName)) && this.loadPrefabWithBundleKey.get(bundleName)!.has(path)) {
            this.loadPrefabWithBundleKey.get(bundleName)!.get(path)!.addRef();
            return this.loadPrefabWithBundleKey.get(bundleName)!.get(path)!;
        }
        return null;
    }

    //销毁一个prefab
    public destoryPrefabByPath(path: string) {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadPrefabWithBundleKey.has(bundleName) && this.loadPrefabWithBundleKey.get(bundleName)!.has(path)) {
            if (this.loadPrefabWithBundleKey.get(bundleName)!.get(path)!.refCount > 1) {
                this.loadPrefabWithBundleKey.get(bundleName)!.get(path)!.decRef();
            }
        }
    }




    //预加载bundle bundle对应的 prefabs
    public async preloadBundlePrefab(formName: string) {
        let data = this.splitFormName(formName);
        let bundleName = data.bundle;
        let prefabName = data.prefabName;
        if (this.loadPrefabWithBundleKey.has(bundleName) && this.loadPrefabWithBundleKey.get(bundleName)?.has(formName)) {
            this.loadProgress[formName] = 1;
            this.calProgress(2);
            return;
        }
        let bundle = this.subGameBundle.get(bundleName);
        if (bundle == undefined) {
            console.error(`${bundleName}不存在`);
            return;
        }
        if (!this.loadPrefabWithBundleKey.has(bundleName)) {
            this.loadPrefabWithBundleKey.set(bundleName, new Map<string, Prefab>());
        }
        bundle!.load<Prefab>(prefabName, (loadCnt: number, allCnt: number, item: AssetManager.RequestItem) => {
            this.loadProgress[formName] = loadCnt / allCnt;
            this.calProgress(0);
        }, (err, prefab: Prefab) => {
            if (err != null) {
                console.log(err);
                console.warn(`${formName}加载失败`);
            } else {
                this.loadProgress[formName] = 1;
                if (!this.loadPrefabWithBundleKey.has(bundleName)) {
                    this.loadPrefabWithBundleKey.set(bundleName, new Map<string, Prefab>());
                }
                this.loadPrefabWithBundleKey.get(bundleName)!.set(formName, prefab);
                this.loadPrefabWithBundleKey.get(bundleName)!.get(formName)!.addRef();
                this.calProgress(1);
            }
        });
    }

    //#region spriteFrame的处理 加载 获取 销毁
    public getSpriteFrameByPath(path: string): SpriteFrame | null {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadSpriteFrameWithBundleKey.has(bundleName) && this.loadSpriteFrameWithBundleKey.get(bundleName)!.has(path)) {
            this.loadSpriteFrameWithBundleKey.get(bundleName)!.get(path)!.addRef();
            return this.loadSpriteFrameWithBundleKey.get(bundleName)!.get(path)!;
        }
        return null;
    }

    //spriteFrame使用后 需要被销毁掉
    public destorySpriteFrameByPath(path: string): void {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadSpriteFrameWithBundleKey.has(bundleName) && this.loadSpriteFrameWithBundleKey.get(bundleName)!.has(path)) {
            //不能释放到 refCount ==0 因为 spriteFrame类资源的释放。 需要在离开游戏的时候被释放掉。也就是他的释放是通过bundle来释放的
            if (this.loadSpriteFrameWithBundleKey.get(bundleName)!.get(path)!.refCount > 1) {
                this.loadSpriteFrameWithBundleKey.get(bundleName)!.get(path)!.decRef();
            }
        }
    }

    //加载spriteFrame资源
    public async preloadBunleSpriteFrame(filePath: string) {
        let data = this.splitFormName(filePath);
        let bundleName = data.bundle;
        //单个资源如果要读取到spriteFrame，必须后边加上spriteFrame路径
        let spriteFrameName = data.prefabName + "/spriteFrame";


        if (this.loadSpriteFrameWithBundleKey.has(bundleName) && this.loadSpriteFrameWithBundleKey.get(bundleName)?.has(filePath)) {
            this.loadProgress[filePath] = 1;
            this.calProgress(2);
            return;
        }
        let bundle = this.subGameBundle.get(bundleName);
        if (bundle == undefined) {
            console.error(`${bundleName}不存在`);
            return;
        }
        if (!this.loadSpriteFrameWithBundleKey.has(bundleName)) {
            this.loadSpriteFrameWithBundleKey.set(bundleName, new Map<string, SpriteFrame>());
        }
        bundle.load<SpriteFrame>(spriteFrameName, (loadCnt: number, allCnt: number, item: AssetManager.RequestItem) => {
            this.loadProgress[filePath] = loadCnt / allCnt;
            this.calProgress(0);
        }, (err, spriteFrame: SpriteFrame) => {
            if (err != null) {
                console.log(err);
                console.error(`${filePath}加载失败`);
            } else {
                this.loadProgress[filePath] = 1;
                if (!this.loadSpriteFrameWithBundleKey.has(bundleName)) {
                    this.loadSpriteFrameWithBundleKey.set(bundleName, new Map<string, SpriteFrame>());
                }
                this.loadSpriteFrameWithBundleKey.get(bundleName)!.set(filePath, spriteFrame);
                this.loadSpriteFrameWithBundleKey.get(bundleName)!.get(filePath)!.addRef();
                this.calProgress(1);
            }
        })
        //});
    }
    //#endregion

    //#region 合图资源的处理 加载 获取 销毁

    //获取图集
    public getSpriteAtlasByPath(path: string): SpriteAtlas | null {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadSpriteAtlasWithBundleKey.has(bundleName) && this.loadSpriteAtlasWithBundleKey.get(bundleName)!.has(path)) {
            this.loadSpriteAtlasWithBundleKey.get(bundleName)!.get(path)!.addRef();
            return this.loadSpriteAtlasWithBundleKey.get(bundleName)!.get(path)!;
        }
        return null;
    }


    //销毁图集
    public destorySpriteAtlasByPath(path: string): void {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadSpriteAtlasWithBundleKey.has(bundleName) && this.loadSpriteAtlasWithBundleKey.get(bundleName)!.has(path)) {
            //不能释放到refCount <=0 
            if (this.loadSpriteAtlasWithBundleKey.get(bundleName)!.get(path)!.refCount > 1) {
                this.loadSpriteAtlasWithBundleKey.get(bundleName)!.get(path)!.decRef();
            }
        }
    }
    //加载图集
    public async preloadBundleSpriteAtlas(filePath: string) {
        let data = this.splitFormName(filePath);
        let bundleName = data.bundle;
        let spriteAtlasName = data.prefabName;
        // assetManager.loadBundle(bundleName,(err,bundle:AssetManager.Bundle)=>{
        //     if(err != null){
        //         console.error(`${bundleName}加载失败`);
        //         return;
        //     }

        if (this.loadSpriteAtlasWithBundleKey.has(bundleName) && this.loadSpriteAtlasWithBundleKey.get(bundleName)?.has(filePath)) {
            this.loadProgress[filePath] = 1;
            this.calProgress(2);
            return;
        }


        let bundle = this.subGameBundle.get(bundleName);
        if (bundle == undefined) {
            console.error(`${bundleName}不存在`);
            return;
        }
        if (!this.loadSpriteAtlasWithBundleKey.has(bundleName)) {
            this.loadSpriteAtlasWithBundleKey.set(bundleName, new Map<string, SpriteAtlas>());
        }
        bundle.load<SpriteAtlas>(spriteAtlasName, SpriteAtlas, (loadCnt: number, allCnt: number, item: AssetManager.RequestItem) => {
            this.loadProgress[filePath] = loadCnt / allCnt;
            this.calProgress(0);
        }, (err, spriteAtlas: SpriteAtlas) => {
            if (err != null) {
                console.log(err);
                console.error(`${filePath}加载失败`);
            } else {
                this.loadProgress[filePath] = 1;
                if (!this.loadSpriteAtlasWithBundleKey.has(bundleName)) {
                    this.loadSpriteAtlasWithBundleKey.set(bundleName, new Map<string, SpriteAtlas>());
                }
                this.loadSpriteAtlasWithBundleKey.get(bundleName)!.set(filePath, spriteAtlas);
                this.loadSpriteAtlasWithBundleKey.get(bundleName)!.get(filePath)!.addRef();
                this.calProgress(1);
            }
        });
        //});
    }
    //#endregion


    //#region 加载材质
    public preloadBundleMaterial(filePath: string) {
        let data = this.splitFormName(filePath);
        let bundleName = data.bundle;
        let materialName = data.prefabName;
        // assetManager.loadBundle(bundleName,(err,bundle:AssetManager.Bundle)=>{
        //     if(err != null){
        //         console.error(`${bundleName}加载失败`);
        //         return;
        //     }

        if (this.loadMaterialWithBundleKey.has(bundleName) && this.loadMaterialWithBundleKey.get(bundleName)?.has(filePath)) {
            this.loadProgress[filePath] = 1;
            this.calProgress(2);
            return;
        }
        let bundle = this.subGameBundle.get(bundleName);
        if (bundle == undefined) {
            console.error(`${bundleName}不存在`);
            return;
        }
        bundle.load<Material>(materialName, (loadCnt: number, allCnt: number, item: AssetManager.RequestItem) => {
            this.loadProgress[filePath] = loadCnt / allCnt;
            this.calProgress(0);
        }, (err, material: Material) => {
            if (err != null) {
                console.log(err);
                console.error(`${filePath}加载失败`);
            } else {
                this.loadProgress[filePath] = 1;
                if (!this.loadMaterialWithBundleKey.has(bundleName)) {
                    this.loadMaterialWithBundleKey.set(bundleName, new Map<string, Material>());
                }
                this.loadMaterialWithBundleKey.get(bundleName)!.set(filePath, material);
                this.loadMaterialWithBundleKey.get(bundleName)!.get(filePath)!.addRef();
            }
        });
        //});
    }

    public getMaterialByPath(path: string): Material | null {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadMaterialWithBundleKey.has(bundleName) && this.loadMaterialWithBundleKey.get(bundleName)!.has(path)) {
            this.loadMaterialWithBundleKey.get(bundleName)!.get(path)!.addRef();
            return this.loadMaterialWithBundleKey.get(bundleName)!.get(path)!;
        }
        return null;
    }
    //清楚一个材质
    public destoryMaterialByPath(path: string): void {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadMaterialWithBundleKey.has(bundleName) && this.loadMaterialWithBundleKey.get(bundleName)!.has(path)) {
            if (this.loadMaterialWithBundleKey.get(bundleName)!.get(path)!.refCount > 1) {
                this.loadMaterialWithBundleKey.get(bundleName)!.get(path)!.decRef();
            }
        }
    }
    //#endregion

    //#region 音频资源的处理 加载 获取 销毁

    //根据路径获取Audio Clip
    public getAudioClipByPath(path: string): AudioClip | null {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadAudioClipWithBundleKey.has(bundleName) && this.loadAudioClipWithBundleKey.get(bundleName)!.has(path)) {
            this.loadAudioClipWithBundleKey.get(bundleName)!.get(path)!.addRef();
            return this.loadAudioClipWithBundleKey.get(bundleName)!.get(path)!;
        }
        return null;
    }

    //销毁音频
    public destoryAudioClipByPath(path: string): void {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadAudioClipWithBundleKey.has(bundleName) && this.loadAudioClipWithBundleKey.get(bundleName)!.has(path)) {
            if (this.loadAudioClipWithBundleKey.get(bundleName)!.get(path)!.refCount > 1) {
                this.loadAudioClipWithBundleKey.get(bundleName)!.get(path)!.decRef();
            }
        }
    }

    //加载音频
    public async preloadBundleAudioClip(filePath: string) {
        let data = this.splitFormName(filePath);
        let bundleName = data.bundle;
        let audioClipName = data.prefabName;
        if (this.loadAudioClipWithBundleKey.has(bundleName) && this.loadAudioClipWithBundleKey.get(bundleName)?.has(filePath)) {
            this.loadProgress[filePath] = 1;
            this.calProgress(2);
            return;
        }
        let bundle = this.subGameBundle.get(bundleName);
        if (bundle == undefined) {
            console.error(`${bundleName}不存在`);
            return;
        }
        if (!this.loadAudioClipWithBundleKey.has(bundleName)) {
            this.loadAudioClipWithBundleKey.set(bundleName, new Map<string, AudioClip>());
        }
        bundle.load<AudioClip>(audioClipName, (loadCnt: number, allCnt: number, item: AssetManager.RequestItem) => {
            this.loadProgress[filePath] = loadCnt / allCnt;
            this.calProgress(0);
        }, (err, clip: AudioClip) => {
            if (err != null) {
                console.error(`${filePath}加载失败`);
            } else {
                this.loadProgress[filePath] = 1;
                if (!this.loadAudioClipWithBundleKey.has(bundleName)) {
                    this.loadAudioClipWithBundleKey.set(bundleName, new Map<string, AudioClip>());
                }
                this.loadAudioClipWithBundleKey.get(bundleName)!.set(filePath, clip);
                this.loadAudioClipWithBundleKey.get(bundleName)!.get(filePath)!.addRef();
                this.calProgress(1);
            }
        });
        //});
    }
    //#endregion

    //#region Particle粒子特效的加载


    public getParticleAssetByPath(path: string): ParticleAsset | null {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadParticleWithBundleKey.has(bundleName) && this.loadParticleWithBundleKey.get(bundleName)!.has(path)) {
            this.loadParticleWithBundleKey.get(bundleName)!.get(path)!.addRef();
            return this.loadParticleWithBundleKey.get(bundleName)!.get(path)!;
        }
        return null;
    }

    public destoryParticleAssetByPath(path: string): void {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadParticleWithBundleKey.has(bundleName) && this.loadParticleWithBundleKey.get(bundleName)!.has(path)) {
            if (this.loadParticleWithBundleKey.get(bundleName)!.get(path)!.refCount > 1) {
                this.loadParticleWithBundleKey.get(bundleName)!.get(path)!.decRef();
            }
        }
    }

    public async preloadBundleParticleAsset(filePath: string) {
        let data = this.splitFormName(filePath);
        let bundleName = data.bundle;
        let particleName = data.prefabName;


        if (this.loadParticleWithBundleKey.has(bundleName) && this.loadParticleWithBundleKey.get(bundleName)?.has(filePath)) {
            this.loadProgress[filePath] = 1;
            this.calProgress(2);
            return;
        }
        let bundle = this.subGameBundle.get(bundleName);
        if (bundle == undefined) {
            console.error(`${bundleName}不存在`);
            return;
        }
        if (!this.loadParticleWithBundleKey.has(bundleName)) {
            this.loadParticleWithBundleKey.set(bundleName, new Map<string, ParticleAsset>());
        }
        bundle.load<ParticleAsset>(particleName, ParticleAsset, (loadCnt: number, allCnt: number, item: AssetManager.RequestItem) => {
            this.loadProgress[filePath] = loadCnt / allCnt;
            this.calProgress(0);
        }, (err, particle: ParticleAsset) => {
            if (err != null) {
                console.error(`${filePath}加载失败`);
            } else {
                this.loadProgress[filePath] = 1;
                if (!this.loadParticleWithBundleKey.has(bundleName)) {
                    this.loadParticleWithBundleKey.set(bundleName, new Map<string, ParticleAsset>());
                }
                this.loadParticleWithBundleKey.get(bundleName)!.set(filePath, particle);
                this.loadParticleWithBundleKey.get(bundleName)!.get(filePath)!.addRef();
                this.calProgress(1);
            }
        });
        //});
    }
    //#endregion


    //new add by yy 清理ab资源缓存,真正资源释放是通过bundle.releaseAll
    public clearBundle(abName: string) {
        this.loadPrefabWithBundleKey.delete(abName)
        // let map : Map<String,Prefab> = this.loadPrefabWithBundleKey.get(abName);
        // for(let key  in map.keys){
        //     while(map.get(key).refCount >0){
        //         map.get(key).decRef();
        //     }
        // }
        // this.loadPrefabWithBundleKey.delete(abName);
    }
    /**
     * 释放当前bundle中的所有动态加载的资源
     * @param list 
     */
    public releaseAllResByList(list: Map<string, number>) {

        let bName = "";
        for (let key of list.keys()) {
            let resData = this.splitFormName(key);
            let bundleName = resData.bundle;
            bName = bundleName;
            if (list.get(key) == ResType.ResType_SpriteFrame) {
                if (!this.loadSpriteFrameWithBundleKey.has(bundleName)) {
                    continue;
                }

                if (!this.loadSpriteFrameWithBundleKey.get(bName)!.has(key)) {
                    continue;
                }
                while (this.loadSpriteFrameWithBundleKey.get(bName)!.get(key)!.refCount > 0) {
                    this.loadSpriteFrameWithBundleKey.get(bName)!.get(key)!.decRef();
                }
                this.loadSpriteFrameWithBundleKey.get(bName)!.delete(key);
            } else if (list.get(key) == ResType.ResType_SpriteAtlas) {
                //释放图集资源
                if (!this.loadSpriteAtlasWithBundleKey.has(bundleName)) {
                    continue;
                }
                if (!this.loadSpriteAtlasWithBundleKey.get(bName)!.has(key)) {
                    continue;
                }
                while (this.loadSpriteAtlasWithBundleKey.get(bName)!.get(key)!.refCount > 0) {
                    this.loadSpriteAtlasWithBundleKey.get(bName)!.get(key)!.decRef();
                }
                this.loadSpriteAtlasWithBundleKey.get(bName)!.delete(key);
            } else if (list.get(key) == ResType.ResType_Prefab) {
                //预制体资源
                if (!this.loadPrefabWithBundleKey.has(bundleName)) {
                    continue;
                }
                if (!this.loadPrefabWithBundleKey.get(bName)!.has(key)) {
                    continue;
                }
                while (this.loadPrefabWithBundleKey.get(bName)!.get(key)!.refCount > 0) {
                    this.loadPrefabWithBundleKey.get(bName)!.get(key)!.decRef();
                }
                this.loadPrefabWithBundleKey.get(bName)!.delete(key);
            } else if (list.get(key) == ResType.ResType_AudioClip) {
                //音频资源
                if (!this.loadAudioClipWithBundleKey.has(bundleName)) {
                    continue;
                }
                bName = bundleName;
                if (!this.loadAudioClipWithBundleKey.get(bName)!.has(key)) {
                    continue;
                }
                while (this.loadAudioClipWithBundleKey.get(bName)!.get(key)!.refCount > 0) {
                    this.loadAudioClipWithBundleKey.get(bName)!.get(key)!.decRef();
                }
                this.loadAudioClipWithBundleKey.get(bName)!.delete(key);
            }

        }
        if (bName != "") {
            this.loadPrefabWithBundleKey.delete(bName);
            this.loadAudioClipWithBundleKey.delete(bName);
            this.loadSpriteFrameWithBundleKey.delete(bName);
            this.loadSpriteAtlasWithBundleKey.delete(bName);

            if (this.subGameBundle.has(bName)) {
                this.subGameBundle.delete(bName);
            }
            //调用了 releaseAll 应该不需要再 desRef() 方法了。源码中tryRelease就是将
            //这里releaaseAll还不能调用，如果调用，第二次加载sprite的时候还是有问题的。 暂时不调用，但是回头要处理一下
            //需要调用releaseAll否则有的资源释放不掉
            if(assetManager.getBundle(bName)!= null){
                assetManager.getBundle(bName)!.releaseAll();
                assetManager.removeBundle(assetManager.getBundle(bName)!);
            }
            console.log("releaseAll执行了-----", bName);
        }
    }







    /**
     * 加载二进制文件
     */
    public async loadBinaryFile(fileName: string): Promise<ArrayBuffer | null> {
        return new Promise((resolve, reject) => {
            let data = this.splitFormName(fileName);
            let bundleName = data.bundle;
            let binaryName = data.prefabName;
            assetManager.loadBundle(bundleName, (err, bundle: AssetManager.Bundle) => {
                if (err != null) {
                    resolve(null);
                }
                bundle.load<BufferAsset>(binaryName, (err, buff: BufferAsset) => {
                    if (err != null) {
                        resolve(null);
                    }
                    //读取二进制文件成功
                    resolve(buff.buffer());
                });
            });
        });
    }

    /**
     * 1:优先判定常驻窗体中有没有节点
     * 需要先判定对应的bundle是否加载了
     * 切割formName为 bundleName prefabName
     * todo dev 这里以后配置成远程包的时候还需要处理为 远程资源的加载
     * @param formName 
     */
    public async loadForm(formName: string): Promise<Prefab | null> {
        return new Promise((resolve, reject) => {

            if (!formName || formName.length <= 0) {
                resolve(null);
            }
            let data = this.splitFormName(formName);
            let bundleName = data.bundle;
            let prefabName = data.prefabName;

            //如果缓存中有 则直接从缓存中获取，一般情况就是到这里就返回了。因为进入 字游戏或者大厅的时候就会预加载的
            if (this.loadPrefabWithBundleKey.has(bundleName) && this.loadPrefabWithBundleKey.get(bundleName)!.has(formName)) {
                resolve(this.loadPrefabWithBundleKey.get(bundleName)!.get(formName)!)
                return;
            }

            assetManager.loadBundle(bundleName, (err, bundle: AssetManager.Bundle) => {
                if (err != null) {
                    error(`${bundleName}加载失败`);
                    resolve(null);
                    return;
                }
                this.subGameBundle.set(bundleName, bundle);
                if (!this.loadPrefabWithBundleKey.has(bundleName)) {
                    this.loadPrefabWithBundleKey.set(bundleName, new Map<string, Prefab>());
                }
                bundle.load<Prefab>(prefabName, (err, prefab: Prefab) => {
                    if (err != null) {
                        error(`${prefabName}加载失败`);
                        resolve(null);
                        return;
                    }
                    //每加载一次prefab就保存一下。
                    //this.prefabs[formName] = prefab;
                    if (!this.loadPrefabWithBundleKey.has(bundleName)) {
                        this.loadPrefabWithBundleKey.set(bundleName, new Map<string, Prefab>());
                    }
                    this.loadPrefabWithBundleKey.get(bundleName)?.set(formName, prefab);
                    prefab.addRef();
                    resolve(prefab);
                });
            });
        });
    }

    //将prefab的路径分隔为 bundle 和 prefabName
    public splitFormName(formName: string): { bundle: string, prefabName: string } {
        let result = { bundle: "", prefabName: "" };
        let arr = formName.split('/');
        if (arr.length <= 0) {
            return result;
        }
        let bundleName = arr[0];
        let prefabName: string = "";
        for (let k = 1; k < arr.length; k++) {
            prefabName = prefabName + arr[k] + "/";
        }
        prefabName = prefabName.substring(0, prefabName.length - 1);
        result.bundle = bundleName;
        result.prefabName = prefabName;
        return result;
    }

    //销毁一个form对应的一个资源
    public destoryForm(formName: string) {
        if (formName == null || formName == undefined || formName.length <= 0) {
            return;
        }
        console.log(`destoryForm${formName}`);
        let data = this.splitFormName(formName);
        if (this.loadPrefabWithBundleKey.has(data.bundle) && this.loadPrefabWithBundleKey.get(data.bundle)!.has(formName)) {
            //窗体被销毁减少引用计数
            if (this.loadPrefabWithBundleKey.get(data.bundle)!.get(formName)!.refCount > 1) {
                this.loadPrefabWithBundleKey.get(data.bundle)!.get(formName)!.decRef();
            }
        }
    }

    /**
     * 根据bundleName获取对应的manifest asset
     * 这里边获取的肯定是 子游戏的bundle
     */
    public async getManifestByBundleName(bundleName: string): Promise<Asset | null> {
        return new Promise<Asset | null>((resolve, reject) => {
            //需要先判断路径存在不存在，如果存在则去获取，如果不存在则不用去获取
            let storagePath = (native.fileUtils ? native.fileUtils.getWritablePath(): "/" ) + 'blackjack-remote-asset/subgames/assets/' + bundleName;
            if(native.fileUtils.isDirectoryExist(storagePath)){
                console.log("当前的bundle路径存在");
                assetManager.loadBundle(bundleName, (err, bundle: AssetManager.Bundle) => {
                    if (err != null) {
                        resolve(null);
                    } else {
                        bundle.load(bundleName + "_project", (aerr, asset: Asset) => {
                            if (aerr != null) {
                                reject(null);
                            } else {
                                resolve(asset);
                            }
                        });
                    }
                })
            }else{
                console.log("当前的bundle路径不存在");
                resolve(null);
            }
            
        })

    }
    //去默认的地方获取对应的manifest
    public async getDefaultManifestByBundleName(bundleName: string): Promise<Asset | null> {
        return new Promise<Asset | null>((resolve, reject) => {
            assetManager.loadBundle("Core", (err, coreBundle: AssetManager.Bundle) => {
                if (err != null) {
                    resolve(null);
                }
                else {
                    coreBundle.load<Asset>("version/" + bundleName + "_project", (aerr, asset: Asset) => {
                        if (aerr != null) {
                            resolve(null);
                        } else {
                            resolve(asset);
                        }
                    });
                }
            });
        })
    }

    /*
    释放对应的bundle
     */
    public async destoryBundle(bundleName: string) {
        let bundle = assetManager.getBundle(bundleName);
        if (bundle != null) {
            bundle.releaseAll();
            assetManager.removeBundle(bundle);
        }
    }

    //#region lazy load res

    //销毁 spine 不再使用的spine
    public destorySpineByPath(path: string): void {
        let data = this.splitFormName(path);
        let bundleName = data.bundle;
        if (this.loadSpineWithBundleKey.has(bundleName) && this.loadSpineWithBundleKey.get(bundleName)!.has(path)) {
            if (this.loadSpineWithBundleKey.get(bundleName)!.get(path)!.refCount > 1) {
                this.loadSpineWithBundleKey.get(bundleName)!.get(path)!.decRef();
            }
        }
    }

    //用的时候去加载一个spine
    public lazyLoadySpine(path: string): Promise<sp.SkeletonData | null> {
        return new Promise<sp.SkeletonData | null>((resolve, reject) => {
            let data = this.splitFormName(path);
            let bundleName = data.bundle;
            let fileName = data.prefabName;
            if (this.loadSpineWithBundleKey.has(bundleName) && this.loadSpineWithBundleKey.get(bundleName)!.has(path)) {
                //如果缓存中有直接拿出来用
                this.loadSpineWithBundleKey.get(bundleName)!.get(path)!.addRef();
                resolve(this.loadSpineWithBundleKey.get(bundleName)!.get(path)!);
                return;
            }
            let bundle = assetManager.getBundle(bundleName);
            if (bundle == null) {
                resolve(null);
            } else {
                bundle.load<sp.SkeletonData>(fileName, sp.SkeletonData, (err, spine: sp.SkeletonData) => {
                    if (err != null) {
                        console.error(err);
                        resolve(null);
                    } else {
                        if (!this.loadSpineWithBundleKey.has(bundleName)) {
                            this.loadSpineWithBundleKey.set(bundleName, new Map<string, sp.SkeletonData>());
                        }
                        this.loadSpineWithBundleKey.get(bundleName)!.set(path, spine);
                        this.loadSpineWithBundleKey.get(bundleName)!.get(path)!.addRef();
                        resolve(spine);
                    }
                })
            }
        })
    }

    //加载一个图集
    public lazyLoadSpriteAtlas(path: string): Promise<SpriteAtlas | null> {
        return new Promise<SpriteAtlas | null>((resolve, reject) => {
            let data = this.splitFormName(path);
            let bundleName = data.bundle;
            let fileName = data.prefabName;

            if (this.loadSpriteAtlasWithBundleKey.has(bundleName) && this.loadSpriteAtlasWithBundleKey.get(bundleName)!.has(path)) {
                this.loadSpriteAtlasWithBundleKey.get(bundleName)!.get(path)!.addRef();
                resolve(this.loadSpriteAtlasWithBundleKey.get(bundleName)!.get(path)!);
                return;
            }

            let bundle = assetManager.getBundle(bundleName);
            if (bundle == null) {
                resolve(null);
            } else {
                bundle.load<SpriteAtlas>(fileName, SpriteAtlas, (err, atlas: SpriteAtlas) => {
                    if (err != null) {
                        console.error(err);
                        resolve(null);
                    } else {
                        if (!this.loadSpriteAtlasWithBundleKey.has(bundleName)) {
                            this.loadSpriteAtlasWithBundleKey.set(bundleName, new Map<string, SpriteAtlas>());
                        }
                        this.loadSpriteAtlasWithBundleKey.get(bundleName)!.set(path, atlas);
                        this.loadSpriteAtlasWithBundleKey.get(bundleName)!.get(path)!.addRef();
                        resolve(atlas);
                    }
                });
            }
        });
    }

    //加载单个图片
    public lazyLoadSpriteFrame(filePath: string): Promise<SpriteFrame | null> {
        return new Promise<SpriteFrame | null>((resolve, reject) => {
            let data = this.splitFormName(filePath);
            let bundleName = data.bundle;
            //单个资源如果要读取到spriteFrame，必须后边加上spriteFrame路径
            let spriteFrameName = data.prefabName + "/spriteFrame";


            if (this.loadSpriteFrameWithBundleKey.has(bundleName) && this.loadSpriteFrameWithBundleKey.get(bundleName)?.has(filePath)) {
                this.loadSpriteFrameWithBundleKey.get(bundleName)!.get(filePath)!.addRef();
                resolve(this.loadSpriteFrameWithBundleKey.get(bundleName)!.get(filePath)!);
                return;
            }
            let bundle = this.subGameBundle.get(bundleName);
            if (bundle == undefined) {
                console.error(`${bundleName}不存在`);
                resolve(null);
                return;
            }
            bundle.load<SpriteFrame>(spriteFrameName, (loadCnt: number, allCnt: number, item: AssetManager.RequestItem) => {
            }, (err, spriteFrame: SpriteFrame) => {
                if (err != null) {
                    console.error(`${filePath}加载失败`);
                    resolve(null);
                } else {
                    if (!this.loadSpriteFrameWithBundleKey.has(bundleName)) {
                        this.loadSpriteFrameWithBundleKey.set(bundleName, new Map<string, SpriteFrame>());
                    }
                    this.loadSpriteFrameWithBundleKey.get(bundleName)!.set(filePath, spriteFrame);
                    this.loadSpriteFrameWithBundleKey.get(bundleName)!.get(filePath)!.addRef();
                    resolve(this.loadSpriteFrameWithBundleKey.get(bundleName)!.get(filePath)!);
                }
            })
        });
    }

    //#endregion
}