

 

 
export class HTTPUtils{
    public static async CallGet(api:string,data:any):Promise<string>{
        let http:XMLHttpRequest = new XMLHttpRequest();

        http.open("GET",api);

        http.setRequestHeader("Content-type", "application/json");
        http.setRequestHeader("Access-Control-Allow-Origin", "*");
        http.setRequestHeader("Access-Control-Allow-Credentials", "true");
        http.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        http.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        
        //todo dev 这个地方的翻译可能还有问题
        if(data !== null){
            http.send( JSON.parse(data) );
        }else{
            http.send();
        }
        

        return new Promise<string>((resolve,reject)=>{
            http.onreadystatechange = ()=>{
                if (http.readyState == 4 && http.status >=200 && http.status <400){
                    resolve(http.responseText);
                }else{
                    reject("error:" + http.readyState.toString());
                }
            }; 
        });
    }

    //异步post请求
    public static async CallPost(api:string,data:any):Promise<string>{
        let xhr:XMLHttpRequest = new XMLHttpRequest();
        xhr.open("POST",api);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
        xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
       
        
        if (data !== null){
            xhr.send(JSON.parse(data))
        }else{
            xhr.send();
        }
        

        return new Promise<string>( (resolve,reject)=>{
            if (xhr.readyState == 4 && xhr.status >=200 && xhr.status <400){
                resolve(xhr.responseText);
            }else{
                reject("error:"+xhr.readyState.toString());
            }
        } );
    }


    //判断google网络是否能够连接
    public static chkVPN():boolean{
        let xhr:XMLHttpRequest = new XMLHttpRequest();
        // xhr.setRequestHeader("Content-type", "application/json");
        // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
        // xhr.setRequestHeader("Access-Control-Allow-Credentials", "true");
        // xhr.setRequestHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
        // xhr.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
       
        let url = "https://www.google.com/";
        xhr.open("GET",url);
        xhr.send();

        if (xhr.readyState == 4 && xhr.status >=200 && xhr.status <400){
            return true;
        }else{
            return false;
        }
    }
}