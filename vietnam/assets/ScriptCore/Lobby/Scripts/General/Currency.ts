
export class Currency{

    //货币格式化转换
    public static ToVND(number:number):string{
        var result = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");    
        return result;
    }

    public static ToVNP(number:number):string{
        var result = number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");    
        return result;
    }

    //将货币格式转化成数字
    public static  ToInt(vnd:string):number{
        if(vnd == "") return 0;
        var vndtmp = vnd.split(',').join('');
        return parseInt(vndtmp);
    }


    public static  ToKMB(num:number|null, fixed:number = 2):string{
        if (num === null) { return ""; }    // terminate early
        if (num === 0) { return '0'; }      // terminate early
        fixed = (!fixed || fixed < 0) ? 2 : fixed; // number of decimal places to show
        let b = (num).toPrecision(3).split("e"); // get power
        let aa = b[1].slice(1);
        let k = b.length === 1 ? 0 : Math.floor((Math.min( Number(b[1].slice(1))),14) / 3); // floor at decimals, ceiling at trillions
        let c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed); // divide by power
        let d = Number(c) < 0 ? c : Math.abs(Number(c)); // enforce -0 is 0
        let e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
        return e;
    }

    public static  ToKMB2(num:number, fixed:number = 2):string{
         if (num === null) {
             // terminate early
              return ""; 
            } 
         if (num === 0) {
             // terminate early
              return '0'; 
            } 
         fixed = (!fixed || fixed < 0) ? 2 : fixed; // number of decimal places to show
         let b = (num).toPrecision(3).split("e"); // get power
         let k = b.length === 1 ? 0 : Math.floor(Math.min( Number(b[1].slice(1)) , 14) / 3); // floor at decimals, ceiling at trillions
         let c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed); // divide by power
         let d = Number(c) < 0 ? c : Math.abs(Number(c)); // enforce -0 is 0
         let e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power
        return e;
     }


     //时间格式转换
     public static ToTime(s:number):string{
         return(s-(s%=60))/60+(9<s?':':':0')+s;
    }


    public static ConvertCardIdToString(id:number):string{
        let card = "";
        let types = ["}", "]", "[", "{"] ;
        let value = id % 13;
        let type = id / 13;

        if (value < 9)
        {
            card += (value + 2).toString();
        }
        else
        {
            switch (value)
            {
                case 9:
                    card += "J";
                    break;
                case 10:
                    card += "Q";
                    break;
                case 11:
                    card += "K";
                    break;
                case 12:
                    card += "A";
                    break;
            }
        }
        card += types[type];
        //console.log("ConvertCardIdToString:"+card+"::"+type+":"+types.length+":"+id);
        return card;
    }
}
