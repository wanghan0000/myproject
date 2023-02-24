var fs = require('fs');
var path = require('path');
var crypto = require('crypto');

var manifest = {
    packageUrl: 'http://localhost/tutorial-hot-update/remote-assets/',
    remoteManifestUrl: 'http://localhost/tutorial-hot-update/remote-assets/project.manifest',
    remoteVersionUrl: 'http://localhost/tutorial-hot-update/remote-assets/version.manifest',
    version: '1.0.0',
    assets: {},
    searchPaths: []
};

var dest = './remote-assets/';
var src = './jsb/';
var bundle = '';
var targetPath = "";
var subGameBundleName = [
    "Avenger",
    "BoomOnline",
    "CaiShen",
    "Candy",
    "CaoThap",
    "CatchFish",
    "EasterIsland",
    "LuckyDice",
    "MiniPoker",
    "SlotIce",
    "TamQuoc",
    "FishHappy",
    "Tienlen",
];
/**
 * --u:标识 本地请求的远程地址
 * --version 本次打包的版本号
 * --src 从哪里开始生成对应的文件
 * --dest 将projec文件生成到哪里
 */ 
var i = 2;
while ( i < process.argv.length) {
    var arg = process.argv[i];

    switch (arg) {
    case '--url' :
    case '-u' :
        var url = process.argv[i+1];
        if (bundle == ""){
            manifest.packageUrl = url;
            manifest.remoteManifestUrl = url + 'project.manifest';
            manifest.remoteVersionUrl = url + 'version.manifest';
        }else{
            manifest.packageUrl = url + bundle +  "/";
            manifest.remoteManifestUrl = url + bundle + "/" + bundle + "_project.manifest"
            manifest.remoteVersionUrl = url  + bundle + "/" + bundle + "_version.manifest"
        }
        
        i += 2;
        break;
    case '--version' :
    case '-v' :
        manifest.version = process.argv[i+1];
        i += 2;
        break;
    case '--src' :
    case '-s' :
        if (bundle == ""){
            src = process.argv[i+1];
        }else{
            src = process.argv[i+1] + "assets/" + bundle +"/";
        }
        i += 2;
        break;
    case '--dest' :
    case '-d' :
        if (bundle == ""){
            dest = process.argv[i+1];
        }else{
            dest = process.argv[i+1] + bundle + "/";
        }
        i += 2;
        break;
    case '--bundle':
    case '-b':
        bundle = process.argv[i+1];
        // url = url + bundle + "/";
        // manifest.remoteManifestUrl = url + bundle + "_project.manifest"
        // manifest.remoteVersionUrl = url  + bundle + "_version.manifest"
        // src = src + "assets/" + bundle +"/";
        // dest = dest + bundle + "/";
        i += 2;
        break;
    case '-t':
        if (bundle == ""){
            targetPath = process.argv[i+1];
        }else{
            targetPath = process.argv[i+1] + bundle + "/";
        }
        i += 2;
        break;
    default :
        i++;
        break;
    }
}

console.log(manifest);
console.log("=================");
console.log(src);
console.log("src src======");
console.log(dest);
console.log("dest  dest =======");
console.log(targetPath);
console.log("targetPath target=======");
console.log(bundle);
console.log("bundle==============");
// if (true){
//     return;
// }

/**
 * 删除原来工程目录下的对应的project version 清单文件 否则在生成后清单文件中包含文件本身，而且是上个版本的。
 * @param {*} dir 
 * @param {*} obj 
 * @returns 
 */
if(bundle == ""){
    if (fs.existsSync(path.join(src,"project.manifest")) ) {
        fs.unlinkSync(path.join(src,"project.manifest"));
    }
    console.log(`删除${src}下的project.manifest`);
    if (fs.existsSync(path.join(src,"version.manifest"))){
        fs.unlinkSync(path.join(src,"version.manifest"));
    }
    console.log(`删除${src}version.manifest`);
}else{
    if (fs.existsSync(path.join(src,bundle + "_project.manifest"))){
        fs.unlinkSync(path.join(src,bundle + "_project.manifest"));
    }
    console.log(`删除${src}下的${bundle}_project.manifest`);
    if (fs.existsSync(path.join(src, bundle + "_version.manifest"))){
        fs.unlinkSync(path.join(src, bundle + "_version.manifest"));
    }
    console.log(`删除${src}下的${bundle}_version.manifest`);
}
 

//修改man.js在main.js中插入 对应的代码
let inject_script = 
`
(function () {
    if (typeof window.jsb === 'object') {
        var hotUpdateSearchPaths = localStorage.getItem('HotUpdateSearchPaths');
        if (hotUpdateSearchPaths) {
            var paths = JSON.parse(hotUpdateSearchPaths);
            jsb.fileUtils.setSearchPaths(paths);

            var fileList = [];
            var storagePath = paths[0] || '';
            var tempPath = storagePath + '_temp/';
            var baseOffset = tempPath.length;

            if (jsb.fileUtils.isDirectoryExist(tempPath) && !jsb.fileUtils.isFileExist(tempPath + 'project.manifest.temp')) {
                jsb.fileUtils.listFilesRecursively(tempPath, fileList);
                fileList.forEach(srcPath => {
                    var relativePath = srcPath.substr(baseOffset);
                    var dstPath = storagePath + relativePath;

                    if (srcPath[srcPath.length] == '/') {
                        jsb.fileUtils.createDirectory(dstPath)
                    }
                    else {
                        if (jsb.fileUtils.isFileExist(dstPath)) {
                            jsb.fileUtils.removeFile(dstPath)
                        }
                        jsb.fileUtils.renameFile(srcPath, dstPath);
                    }
                })
                jsb.fileUtils.removeDirectory(tempPath);
            }
        }
    }
})();

`;

if (bundle == ""){
    console.log(src + "main.js");
    let  data = fs.readFileSync(src + "main.js",'utf-8');
    let newStr = inject_script + data; 
    fs.writeFileSync(src + "main.js",newStr);
    console.log("main.js文件修改成功!");
}




function readDir (dir, obj) {
    var stat = fs.statSync(dir);
    if (!stat.isDirectory()) {
        return;
    }
    var subpaths = fs.readdirSync(dir), subpath, size, md5, compressed, relative;
    for (var i = 0; i < subpaths.length; ++i) {
        if (subpaths[i][0] === '.') {
            continue;
        }
        subpath = path.join(dir, subpaths[i]);
        stat = fs.statSync(subpath);
        if (stat.isDirectory()) {
            readDir(subpath, obj);
        }
        else if (stat.isFile()) {
            // Size in Bytes
            size = stat['size'];
            md5 = crypto.createHash('md5').update(fs.readFileSync(subpath)).digest('hex');
            compressed = path.extname(subpath).toLowerCase() === '.zip';

            relative = path.relative(src, subpath);
            relative = relative.replace(/\\/g, '/');
            relative = encodeURI(relative);
            obj[relative] = {
                'size' : size,
                'md5' : md5
            };
            if (compressed) {
                obj[relative].compressed = true;
            }
        }
    }
}

//创建一个目录
var mkdirSync = function (path) {
    try {
        fs.mkdirSync(path);
    } catch(e) {
        if ( e.code != 'EEXIST' ) throw e;
    }
}


function clearDir(path) {
    var files = [];
    if(fs.existsSync(path)) {
      files = fs.readdirSync(path);
      files.forEach(function(file, index) {
        var curPath = path + "/" + file;
        if(fs.statSync(curPath).isDirectory()) { // recurse
            clearDir(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
      });
      fs.rmdirSync(path);
    }
 };



// Iterate assets and src folder
if(bundle == ""){
    //删除对应的子游戏
    for (let i = 0;i<subGameBundleName.length;i++){
        console.log(`删除子游戏${subGameBundleName[i]}目录为:${path.join(src + "assets",subGameBundleName[i])}`);
        clearDir(path.join(src + "assets",subGameBundleName[i]));
    }

    //大厅的
    readDir(path.join(src, 'src'), manifest.assets);
    readDir(path.join(src, 'assets'), manifest.assets);
    readDir(path.join(src, 'jsb-adapter'), manifest.assets);
}else{
    //子游戏的
    readDir(src, manifest.assets);
}
var destManifest = "";
var destVersion = ""
if (bundle == ""){
    //大厅的
    destManifest = path.join(dest, 'project.manifest');
    destVersion = path.join(dest, 'version.manifest');
    
}else{
    destManifest = path.join(dest, bundle+'_project.manifest');
    destVersion = path.join(dest,  bundle+'_version.manifest');
}


mkdirSync(dest);

fs.writeFileSync(destManifest, JSON.stringify(manifest));
console.log("project successfully generated");

delete manifest.assets;
delete manifest.searchPaths;
fs.writeFileSync(destVersion, JSON.stringify(manifest));
console.log('Version successfully generated');


/**
 * copy单个文件
 * @param {*} srcPath 
 * @param {*} tarPath 
 * @param {*} cb 
 */
function copyFile(src, dist) {    
    fs.writeFileSync(dist, fs.readFileSync(src));
}
  
/*
copy目录
*/
function copyDir(src,dist){
    var b = fs.existsSync(dist)
    if(!b){
      mkdirSync(dist);//创建目录
    }
    copyFileDir(src,dist);
  }
  
/**
 * copy目录文件
 * @param {*} src 
 * @param {*} dist 
 */
function copyFileDir(src, dist) {
    var paths = fs.readdirSync(src)
    paths.forEach(function(p) {
      var _src = path.join(src,p) ;
      var _dist = path.join(dist,p);
      var stat = fs.statSync(_src)
      if(stat.isFile()) {// 判断是文件还是目录
        //fs.writeFileSync(_dist, fs.readFileSync(_src));
        copyFile(_src,_dist);
      } else if(stat.isDirectory()) {
        copyDir(_src, _dist)// 当是目录是，递归复制
      }
    })
  }


/**
 * 将 dest目录下的project.manifest文件copy到生成目录中
 */
if (bundle == ""){
    //大厅操作
    //copy project.manifest 到 android 工程下。
    //将 工程下的project.manifest copy 到 Android/IOS 工程下
    copyFile(path.join(dest,"project.manifest"),path.join(src,"project.manifest"));
    //copyFile(dest + "/project.manifest",src + "/project.manifest");
    copyFile(path.join(dest,"version.manifest"),path.join(src,"version.manifest"));
    //copyFile(dest + "/version.manifest",src + "/version.manifest");

    //清空目录
    clearDir(targetPath);
    //创新创建目录
    mkdirSync(targetPath);


    //将Android工程下的文件copy到 hotupdate目录下
    copyFileDir(src,targetPath);  
    console.log("lobby All Finished !");  
}else{
    //子游戏操作
    copyFile(path.join(dest,bundle + "_project.manifest"),path.join(src,bundle + "_project.manifest"))
    //copyFile(dest + "/" + bundle + "_project.manifest", src + "/" + bundle + "_project.manifest");
    copyFile(path.join(dest,bundle + "_version.manifest"),path.join(src + bundle + "_version.manifest"));
    //copyFile(dest + "/" + bundle + "_version.manifest",src + "/" + bundle + "_version.manifest");
    //清空目录
    clearDir(targetPath);
    //创新创建目录
    mkdirSync(targetPath);
    copyFileDir(src,targetPath);  
    console.log("All Finished !");  
}


