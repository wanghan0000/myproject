import { IEventHandler, IMessageHandler } from "./Type";

export default class EventSystem {
    private static _instance: EventSystem;
    private readonly _allEventHandlers: Map<string, Array<IEventHandler>> = new Map<string, Array<IEventHandler>>();
    private readonly _allMessageHandlers: Map<number, Array<IMessageHandler>> = new Map<number, Array<IMessageHandler>>();


    public static get instance(): EventSystem {
        this._instance = this._instance || new EventSystem();
        return this._instance;
    }

    protected constructor() { }

    public registerEvtHandler(evt: string, cls: any) {
        let handler = new cls() as IEventHandler;
        let list = this._allEventHandlers.get(evt);
        if (list) {
            if (list.indexOf(handler) != -1) {
                throw Error(`registerEvtHandler 重复添加类型:${evt}`);
            }
            list.push(handler);
        } else {
            list = new Array<IEventHandler>();
            list.push(handler);
            this._allEventHandlers.set(evt, list);
        }
    }

    public registerMsgHandler(opcode: number, cls: any) {
        let handler = new cls() as IMessageHandler;
        let list = this._allMessageHandlers.get(opcode);
        if (list) {
            if (list.indexOf(handler) != -1) {
                throw Error(`registerMsgHandler 重复添加类型:${opcode}`);
            }
            list.push(handler);
        } else {
            list = new Array<IMessageHandler>();
            list.push(handler);
            this._allMessageHandlers.set(opcode, list);
        }
    }

    public get messageHandlers(): Map<number, Array<IMessageHandler>> {
        return this._allMessageHandlers;
    }


    public async publish(evt: string, ...args: any[]) {
        let list = this._allEventHandlers.get(evt);
        if (!list) return;
        for (const handler of list) {
            await handler.run(evt, ...args)
        }
    }
}