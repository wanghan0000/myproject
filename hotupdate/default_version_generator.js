
/**
 * 该工具用于生成默认的manifest文件
 * 放置到hotupdate/default/bundle_manifest目录下
 */
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

var dest = './default_bundle_manifest/';
var bundle = '';
var targetPath = "";

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
        manifest.packageUrl = url;
        manifest.remoteManifestUrl = url + 'project.manifest';
        manifest.remoteVersionUrl = url + 'version.manifest';
        i += 2;
        break;
    case '--version' :
    case '-v' :
        manifest.version = process.argv[i+1];
        i += 2;
        break;
    case '--dest' :
    case '-d' :
        dest = process.argv[i+1];
        i += 2;
        break;
    case '--bundle':
    case '-b':
        bundle = process.argv[i+1];
        url = url + bundle + "/";
        manifest.remoteManifestUrl = url + bundle + "_project.manifest"
        manifest.remoteVersionUrl = url  + bundle + "_version.manifest"
        i += 2;
        break;
    case '-t':
        targetPath = process.argv[i+1] + bundle + "/";
        i += 2;
        break;
    default :
        i++;
        break;
    }
}

console.log(manifest);
console.log("=================");
console.log(dest);
console.log("dest  dest =======");
console.log(targetPath);
console.log("targetPath target=======");
console.log(bundle);
console.log("bundle==============");
// if (true){
//     return;
// }


 




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



var destVersion = ""

var destManifest = path.join(dest, bundle+'_project.manifest');
var destVersion = path.join(dest,  bundle+'_version.manifest');

//判定是否有对应的文件，如果有则删除
if (fs.existsSync(destManifest)){
    fs.unlinkSync(destManifest)
    console.log(`删除${destManifest}清单文件`);
}
if(fs.existsSync(destVersion)){
    fs.unlinkSync(destVersion)
    console.log(`删除${destVersion}版本文件`);
}

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



//将版本清单文件copy到大厅assets/defaultbundle下
copyFile(path.join(dest,bundle + "_project.manifest"),path.join(targetPath, bundle + "_project.manifest"));
console.log(`copy default bundle manifest到 assets/Core/version目录下 成功${bundle}`);
copyFile(path.join(dest,bundle + "_version.manifest"),path.join(targetPath + bundle + "_version.manifest"));
console.log(`copy default bundle manifest到 assets/Core/version目录下 成功${bundle}`);



