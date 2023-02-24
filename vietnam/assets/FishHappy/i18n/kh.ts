
const win = window as any;

export let languages:any = {
    fishhappy:{
        quedingTxt:"ប្រាកដ",
        quxiaoTxt:"បោះបង់",
        quedinglikaiTxt:"តើអ្នកចង់ចាកចេញមែនទេ?",

        xianfengyongzhe:"វីរក្លាហាន",
        hanbingshouwei:"ឆ្មាំទឹកកក",
        lieyanqishi:"ជិះសេះអង់អាច",
        anyinglieshou:"ប្រមាញ់ឥតស្រមោល",
        jihanzhiren:"កាំបិតត្រជាក់",
        shikonghuanying:"អ្នកឆ្លងពេលវេលា",
        youliangbaojun:"សម្តេចដ៏កាចសាហាវ",
    }
};

if (!win.languages) {
    win.languages = {};
 }

 if(win.languages.kh){
    for(let item in languages){
        win.languages.kh[item] = languages[item];
    }
 }else{
 
    win.languages.kh = languages;
 }