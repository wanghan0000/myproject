import { CtorT } from "../Type";
import { Task } from "./Task";
import { TaskFactory } from "./TaskFactory";

export default class ObjectWait {
    private static _instance: ObjectWait;
    private _taskMap: Map<any, Task<any>[]> = new Map<any, Task<any>[]>();

    public static get instance(): ObjectWait {
        this._instance = this._instance || new ObjectWait();
        return this._instance;
    }

    public async wait<T>(type: CtorT<T>) {
        let task = TaskFactory.create<T>();
        if (this._taskMap.has(type)) {
            this._taskMap.get(type).push(task);
        } else {
            this._taskMap.set(type, []);
            this._taskMap.get(type).push(task);
        }
        return await task.promise;
    }

    public notify<T>(type: CtorT<T>, value: T) {
        let list = this._taskMap.get(type);
        if (!list) return;
        for (let index = 0; index < list.length; index++) {
            const element = list[index];
            element.setResult(value);
            console.log('notify ', value)
        }
        list.length = 0;
    }

    public clear<T>(type: CtorT<T>) {
        let list = this._taskMap.get(type);
        if (!list) return;
        list.length = 0;
    }


}