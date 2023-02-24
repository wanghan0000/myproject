

import { ResMgr } from "../UIFrame/ResMgr";



//读取文件
export interface ConfLoader {
    load(): Promise<Error | null>;
    unload(): void;
}

export interface ConfHolder {
    decode(buff: Uint8Array): Error | null;
    clear(): void;
}

/**
 * protobuf去解析配置文件
 */
export class ProtoDataLoader implements ConfLoader {

    private holder: ConfHolder;
    private fileName: string = "";
    public constructor(holder: ConfHolder, fileName: string) {
        this.holder = holder;
        this.fileName = fileName
    }


    unload(): void {
        this.holder.clear();
    }

    public async load(): Promise<Error | null> {

        //1：读取文件中的二进制
        let arrBuff = await ResMgr.getInstance().loadBinaryFile(this.fileName);

        if (arrBuff != null) {
            let dataView = new DataView(arrBuff);
            let uIn8Arr = new Uint8Array(dataView.buffer);
            this.holder.decode(uIn8Arr)
        }
        return null;
    }
}




