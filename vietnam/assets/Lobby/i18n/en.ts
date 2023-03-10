
const win = window as any;

export let languages:any = {
    lobby:{
        lastgame:"Recent Play",
        allgame:"All Games",
        pokerplaying:"Chess",
        fishingplaying:"Fish",
        emptyitemdesc:"You don't have any props yet, go play the game to get it",
        itembnt:"Numeber",
        bagsell:"Sell",
        bagsend:"Give",
        baguse:"Use",
        itemdetailinfo:"Item Details",
        confirm:"Confirm",
        confirmwithspace:"Confirm",
        sendcnt:"Give Numeber",
        sendid:" Given ID",
        friendlist:"LIST",
        nofrienddesc:"No friends, go to add friends",
        onlinetxt:"Online",
        offlinetxt:"Offline",
        consumelogs:"Expenses Record",
        roletxt:"Role",
        freetxt:"Free",
        freegettxt:"Get Free",
        warntitle:"Hint",
        consulelognotopen:"Consumption record has not been opened yet",
        coolingtime:"The cooling time is not up",
        exchangeshop:"Exchange Mall",
        exchangeshenhezhong:"Under Review",
        exchangeyiwancheng:"Passed",
        exchangeweitongguo:"Not Pass",
        exchangechedan:"Withdraw",
        qurendingdan:"Confirm",
        vcard:"V card",
        itemmoney:"Price",
        rechargetel:"Phone Number",
        inputtelno:"Enter phone number",
        ruledesc:"Rules",
        feepay:"Price",
        vcardnotenough:"Not enough V cards",
        shoujianxingming:"Name",
        shoujianrendianhua:"Number",
        shoujianrendizhi:"Address",
        nindexingming:"your name",
        nindeshoujihao:"your phone number",
        xaingxidizhi:"your address in detail",
        logouttxt:"Sign Out",
        zhanji:"Record",
        zhanjiliebiao:"Record List",
        settitle:"Setting",
        zhanneixin:"Mail",
        musictxt:"Music",
        soundtxt:"Effect",
        jiazaizhongtxt:"Loading...{0}/100",
        chushoushuliangTxt:"Number",
        huodejinbiTxt:"Get gold",
        haoyouwuzhanjiTxt:"This friend has no record",
        duihuanshbai:"Exchange failed",
        zuanshibuzuTxt:"You don't have enough diamonds to buy",
        wangluoduanxianTxt:"The network connection is disconnected. Please wait patiently",
        cishuyongwangTxt:"Times have been used up",
        duihuan_dengdaishenheTxt:"Redemption succeeded, please wait for approval",
        vcardbuzuTxt:"Insufficient V card, exchange failed",
        mingtianzailaiTxt:"The exchange limit has been reached today. Please come back tomorrow",
        duihuawangTxt:"This item has been exchanged",
        xinxiyouwuTxt:"Incorrect input information",
        shangpinxiajiaTxt:"This product has been taken off the shelves",
        telnumwucuoTxt:"Telephone number format error",
        dizhibunengkongTxt:"The recipient address cannot be empty",
        xingmingbunengkongTxt:"Recipient name cannot be empty",
        telnumbunengkongTxt:"The phone number cannot be empty",
        reqDataShiBaiTxt:"Data request failed",
        zanwuzhanjiTxt:"No record",
        lingqushibaiTxt:"Failed to collect",
        xuanzezengsonhaoyouTxt:"Please select friends to give away",
        xuanzezhegnqueshuliangTxt:"Please select the correct complimentary quantity",
        bunengzengsongSelfTxt:"Can't give it to yourself",
        enterrightsnid:"Please enter the correct SnId",
        zengsongchenggongTxt:"Gift succeeded",
        zengsongshibaiTxt:"Gift failed",
        daojubuzuTxt:"Insufficient props",
        recplayerbucunzaiTxt:"The complimentary player does not exist",
        diyuTxt:"lower than",
        kelingqubuzhuTxt:"Free benefits",
        meirilingqucishuTxt:"Daily collection times",
        lingqubuzhuTxt:"claim",
        zanweikaifangTxt:"Not yet open",
        caozuoshibaiTxt:"operation failed",
        duihuanwupinshibaiTxt:"Failed to obtain the exchange item!",
        gongnengweikaiqiTxt:"The function is not enabled temporarily",
        tijiaodingdanTxt:"Submit",
    }
};

if (!win.languages) {
    win.languages = {};
 }

 if(win.languages.en){
    for(let item in languages){
        win.languages.en[item] = languages[item];
    }
 }else{
 
    win.languages.en = languages;
 }
