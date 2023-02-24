import { AssetManager } from "cc";
import EventSystem from "./EventSystem";

export type CtorT<T> = new (...args: any[]) => T;
export type Ctor = new (...args: any[]) => any;
export type Action = () => void;
export interface IMessage {

}

export interface IEventHandler {
    run(evt: string, ...args: any[]): Promise<void>;
}

export interface IMessageHandler {
    run(msg: IMessage): void;
}

export function EventHandler(evt: string) {
    return function (ctor: Function) {
        EventSystem.instance.registerEvtHandler(evt, ctor)
    }
}

export function MessageHandler(opcode: number) {
    return function (ctor: Function) {
        EventSystem.instance.registerMsgHandler(opcode, ctor)
    }
}

export type ProgressCallback = (finished: number, total: number, item: AssetManager.RequestItem) => void
