const fs = require('fs');
const path = require('path');

const {dialog } = require("electron").remote;




exports.template = fs.readFileSync(path.join(__dirname, '/index.html'), 'utf8') + "";

exports.style = fs.readFileSync(path.join(__dirname, "/index.css"), "utf8") + "";

exports.$ = {
  btnSelect:'#btnSelect',
  btnGenerate:'#btnGenerate',
  lblPath:'#lblPath',
},
exports.ready = async function()  {
  this.$.btnSelect.addEventListener("confirm",()=>{
    console.log('选择要生成reslist的目录!');
    let assetsPath = `${Editor.Project.path}/assets/`;
    let isExist = fs.existsSync(this.gameRoot);

    if (this.gameRoot && this.gameRoot.length > 0 && isExist){
      assetsPath = this.gameRoot
    } 
      let result = dialog.showOpenDialogSync({
          title:"选择要生成资源列表的目录",
          defaultPath:assetsPath,
          properties:["openDirectory"]
      });
      if (-1 !== result) {
          this.gameRoot = result[0];
          this.$.lblPath.value = this.gameRoot;
      }
  });

  //生成资源清单
  let doGenerateReslist= function(rootPath){
    let list = [];
    let paths = fs.readdirSync(rootPath);
    for (let i = 0;i<paths.length;i++){
      let fileName = paths[i];
      fileName = rootPath + "/" + fileName;
      let statInfo = fs.statSync(fileName);
      if (statInfo.isFile()){
        let strExt = path.extname(paths[i]);
        if (strExt == ".prefab" && paths[i]!="reslist.ts"){
          list.push(fileName);
        }
      }else if(statInfo.isDirectory()){
        let subList = doGenerateReslist(fileName);
        for (let idx = 0;idx < subList.length;idx ++){
          list.push(subList[idx]);
        }
      }
    }
    return list;
  }


  let arrayData = function(list,rootPath){
    let data = {};
    let idx = rootPath.lastIndexOf("/");
    if (idx == -1){
      idx = rootPath.lastIndexOf("\\");
    }
    let root = rootPath.substring(idx + 1);
    if (list && list.length >0){
      for (let i = 0;i<list.length;i++){
        let fileName = list[i];
        let result = fileName.substring(idx+1);
        let extdotIdx = result.lastIndexOf(".");
        result = result.substring(0,extdotIdx);
        //后续还要扩展。如果是其他类型，看怎么扩展
        data[result] = "1";
      }
    }
    return data;
  }



  //将数据写入到文件中
  let writeFile = function(rootPath,data){
    let str = "/*generator by gen reslit tools do not edit it!*/" + "\n";
    str  = str +  "export let reslist:Map<string,number> = new Map<string,number>(["+"\n";
    for (let key in data){
      str = str + `["${key}",${data[key]}],`+ "\n";
    }
    str = str + "]);" + "\n";
    fs.writeFile(rootPath + "/reslist.ts",str,"utf-8",err=>{
      if (err){
        console.log("写入reslist失败" + err.message);
      }else{
        console.log(`生成${rootPath}下的reslist成功!`);
      }
    })
  }




  this.$.btnGenerate.addEventListener("confirm",()=>{
    console.log('开始生成!');
    if (this.gameRoot && this.gameRoot.length >0){
       if (fs.existsSync(this.gameRoot)){
         let list = doGenerateReslist(this.gameRoot);
         let data = arrayData(list,this.gameRoot);
         writeFile(this.gameRoot,data);
       }else{
         console.log("请选择要生成资源列表的bundle目录!");
       }
    };
  });
};
