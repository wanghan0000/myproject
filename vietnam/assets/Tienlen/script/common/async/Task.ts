
type Resolve<T> = (value: T | PromiseLike<T>) => void
type Reject<T> = (reason?: any) => void
export class Task<T>{
    promise: Promise<T>;
    resolve: Resolve<T>;
    reject: Reject<T>

    constructor() {
    }

    public reset() {
        this.promise = null;
        this.reject = null;
        this.resolve = null;
    }

    public setResult<T>(value?: any) {
        this.resolve && this.resolve(value)
    }
    public setException(reason?: any) {
        this.reject && this.reject(reason);
    }

}