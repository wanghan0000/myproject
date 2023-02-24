import { ProtoDataLoader } from "../../../ScriptCore/config/ConfLoader";
import { DB_Policy501 } from "../../data/db_policy501";
import { DB_Policy502 } from "../../data/db_policy502";
import { DB_Policy811 } from "../../data/db_policy811";
import { DB_Policy812 } from "../../data/db_policy812";
import { DB_Policy813 } from "../../data/db_policy813";
import { DB_Policy814 } from "../../data/db_policy814";
import { DB_Policy815 } from "../../data/db_policy815";
import { DB_Policy816 } from "../../data/db_policy816";

export class FishPolicyMgr {
    private static _instance: FishPolicyMgr|null = null;
    private _fishTables = new Map();
    private _policypool = new Map();

    private constructor () {

    }

    static get instance () : FishPolicyMgr {
        if (this._instance == null) {
            this._instance = new FishPolicyMgr();
        }
        return this._instance;
    }

    /**
     * 
     */
    public static clear(){
        if(this._instance){
            DB_Policy501.getInstance().clear();
            DB_Policy502.getInstance().clear();
            DB_Policy811.getInstance().clear();
            DB_Policy812.getInstance().clear();
            DB_Policy813.getInstance().clear();
            DB_Policy814.getInstance().clear();
            DB_Policy815.getInstance().clear();
            DB_Policy816.getInstance().clear();
            this.instance._fishTables.clear();
        }
        this._instance = null;
    }

    public loadPolicyData () {
        // ConfMgr.getInstance().registerLoader("DB_Policy501",new ProtoDataLoader(DB_Policy501.getInstance(),"FishHappy/data/DB_Policy501"));
        // ConfMgr.getInstance().registerLoader("DB_Policy502",new ProtoDataLoader(DB_Policy502.getInstance(),"FishHappy/data/DB_Policy502"));
        // ConfMgr.getInstance().registerLoader("DB_Policy811",new ProtoDataLoader(DB_Policy811.getInstance(),"FishHappy/data/DB_Policy811"));
        // ConfMgr.getInstance().registerLoader("DB_Policy812",new ProtoDataLoader(DB_Policy812.getInstance(),"FishHappy/data/DB_Policy812"));
        // ConfMgr.getInstance().registerLoader("DB_Policy813",new ProtoDataLoader(DB_Policy813.getInstance(),"FishHappy/data/DB_Policy813"));
        // ConfMgr.getInstance().registerLoader("DB_Policy814",new ProtoDataLoader(DB_Policy814.getInstance(),"FishHappy/data/DB_Policy814"));
        // ConfMgr.getInstance().registerLoader("DB_Policy815",new ProtoDataLoader(DB_Policy815.getInstance(),"FishHappy/data/DB_Policy815"));
        // ConfMgr.getInstance().registerLoader("DB_Policy816",new ProtoDataLoader(DB_Policy816.getInstance(),"FishHappy/data/DB_Policy816"));

        let db_policy501 = new ProtoDataLoader(DB_Policy501.getInstance(),"FishHappy/data/DB_Policy501");
        let db_policy502 = new ProtoDataLoader(DB_Policy502.getInstance(),"FishHappy/data/DB_Policy502");
        let db_policy811 = new ProtoDataLoader(DB_Policy811.getInstance(),"FishHappy/data/DB_Policy811");
        let db_policy812 = new ProtoDataLoader(DB_Policy812.getInstance(),"FishHappy/data/DB_Policy812");
        let db_policy813 = new ProtoDataLoader(DB_Policy813.getInstance(),"FishHappy/data/DB_Policy813");
        let db_policy814 = new ProtoDataLoader(DB_Policy814.getInstance(),"FishHappy/data/DB_Policy814");
        let db_policy815 = new ProtoDataLoader(DB_Policy815.getInstance(),"FishHappy/data/DB_Policy815");
        let db_policy816 = new ProtoDataLoader(DB_Policy816.getInstance(),"FishHappy/data/DB_Policy816");
        db_policy501.load();
        db_policy502.load();
        db_policy811.load();
        db_policy812.load();
        db_policy813.load();
        db_policy814.load();
        db_policy815.load();
        db_policy816.load();
    }

    public convertData () {
        this._fishTables.set(501, DB_Policy501.getInstance().datas);
        this._fishTables.set(502, DB_Policy502.getInstance().datas);
        this._fishTables.set(811, DB_Policy811.getInstance().datas);
        this._fishTables.set(812, DB_Policy812.getInstance().datas);
        this._fishTables.set(813, DB_Policy813.getInstance().datas);
        this._fishTables.set(814, DB_Policy814.getInstance().datas);
        this._fishTables.set(815, DB_Policy815.getInstance().datas);
        this._fishTables.set(816, DB_Policy816.getInstance().datas);
        this.tidyPolicy();
    }

    public tidyPolicy () {
        this._fishTables.forEach((datas, key) => {
            if (datas != null) {
                let minTimePoint = 99999;
                let maxTimePoint = 0;
                let orderTable = new Map();
                for (let j = 0; j < datas.Arr.length; j++) {
                    let data = datas.Arr[j];
                    let timepoint = data.Time;
                    let tpArr = orderTable.get(timepoint);
                    if (tpArr == null) {
                        tpArr = new Map();
                        orderTable.set(timepoint, tpArr);
                    }
                    tpArr.set(tpArr.size, data);
                    minTimePoint = Math.min(minTimePoint, timepoint);
                    orderTable.set("minTimePoint", minTimePoint);
                    maxTimePoint = Math.max(maxTimePoint, timepoint);
                    orderTable.set("maxTimePoint", maxTimePoint);
                }
                this._policypool.set(key, orderTable);
            }
        });
    }

    public getPolicyById (policyidx: number, policyid: number) {
        let policyDatas = this._fishTables.get(policyidx);
        if (policyDatas != null) {
            return policyDatas.Arr[policyid-1];
        }
        return null;
    }

    public getPolicy (policyidx: number, timepoint: number): Map<any, any> | null {
       let orderPolicys = this._policypool.get(policyidx);
       if (orderPolicys != null) {
           return orderPolicys.get(timepoint);
       }
       return null;
    }

    public getMinTimePoint (policyidx: number) {
        let orderPolicys = this._policypool.get(policyidx);
        if (orderPolicys != null) {
            return orderPolicys.get("minTimePoint");
        }
        return -1;
    }

    public getMaxTimePoint (policyidx: number) {
        let orderPolicys = this._policypool.get(policyidx);
        if (orderPolicys != null) {
            return orderPolicys.get("maxTimePoint");
        }
        return -1;
    }
}
