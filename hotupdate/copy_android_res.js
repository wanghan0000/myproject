
/**
 * 该工具用于生成默认的manifest文件
 * 放置到hotupdate/default/bundle_manifest目录下
 */
var fs = require('fs');
var path = require('path');
var crypto = require('crypto');


var src = "../publish/android-003/data/"
var dest = "../publish/android-002/data/"


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
    case '-d' :
        dest = process.argv[i+1];
        i += 2;
        break;
    case '-s' :
        src = process.argv[i+1];
        i += 2;
    default :
        i++;
        break;
    }
}

console.log(`src = ${src}`);
console.log(`dest = ${dest}`);

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





/**
 * copy单个文件
 * @param {*} srcPath 
 * @param {*} tarPath 
 * @param {*} cb 
 */
function copyFile(src, dist) {  
    console.log(`copy file from ${src} to ${dest}`);  
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


  //删除dest目录下的资源
  clearDir(dest);
  console.log(`clear ${dest} 目录成功`);
  mkdirSync(dest);
  console.log(`recreate ${dest} 成功`);
  copyFileDir(src,dest);
  console.log(`All finished!!!`)



