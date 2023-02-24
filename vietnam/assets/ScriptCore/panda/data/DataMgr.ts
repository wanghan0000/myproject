
/**
 * 数据管理
 */

let datas: Map<string, Array<any>> = new Map<string, Array<any>>();

export namespace DataMgr {
    export function getDataTable(name: string): Array<any> | undefined {
        return datas.get(name);
    }

    export function getData(name: string, key: number): any {
        let dataTable = datas.get(name);
        if (undefined === dataTable) {
            return undefined;
        }

        for (let index = 0; index < dataTable.length; index++) {
            if (index === key) {
                return dataTable[index];
            }
        }
        return undefined;
    }
}

export namespace DataMgrInit {
    export function InitByArrayBuffer(name: string, data: any): void {
        // 没有二进制数据
        if (undefined === data._nativeAsset) {
            return;
        }

        const path = "db_" + name + "_pb.js";
        let pb: any;
        try {
            pb = require(path);
            if (undefined === pb) {
                return;
            }
        } catch (error) {
            console.log(error);
            return;
        }

        
    }
}
