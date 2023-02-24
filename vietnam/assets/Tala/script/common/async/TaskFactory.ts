
import { Queue } from "../define";
import { CtorT } from "../Type";
import { Task } from "./Task";

export class Pool<T>{
    private readonly _pool: Queue<T> = new Queue<T>();
    private _ctor: CtorT<T>;
    constructor(cotr: CtorT<T>) {
        this._ctor = cotr;
    }
    public fetch(): T {
        if (this._pool.size() == 0) {
            return new this._ctor();
        }

        return this._pool.dequeue();
    }
    public recycle(o: T) {
        this._pool.enqueue(o);
    }
    public clear() {
        this._pool.clear();
    }

    public get queue(): Queue<T> {
        return this._pool;
    }

}

export class TaskPool {
    private _pool: Pool<Task<any>> = new Pool<Task<any>>(Task);
    public static readonly Instance = new TaskPool();
    public fetch() {
        return this._pool.fetch();
    }

    public recycle(obj: Task<any>) {
        obj.reset();
        this._pool.recycle(obj);
    }
}


export class TaskFactory {
    public static create<T>(): Task<T> {
        let task = TaskPool.Instance.fetch();
        let promise = new Promise<T>((resolve, reject) => {
            task.resolve = resolve;
            task.reject = reject;
        })
        task.promise = promise;
        return task;
    }

    public static recycle(task: any) {
        TaskPool.Instance.recycle(task);
    }
}