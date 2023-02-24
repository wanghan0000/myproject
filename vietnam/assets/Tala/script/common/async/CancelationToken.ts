import { Component } from "cc";
import TalaHelper from "../../TalaHelper";
import { ArraySet } from "../define";
import { Action } from "../Type";

export class CancelationToken {
    private _actions: ArraySet<Action> = new ArraySet<Action>();

    public add(action: Action) {
        this._actions?.add(action);
    }
    public remove(action: Action) {
        this._actions?.remove(action);
    }
    public isCancel(): boolean {
        return this._actions == null;
    }
    public cancel() {
        if (!this._actions) return;
        this.invoke();
    }
    public invoke() {
        let actions = this._actions.toArray();
        this._actions = null;
        try {
            for (const action of actions) {
                action();
            }
        } catch (error) {
            console.error(`CancelationToken invoke error:${error}`)
        }
    }
    public async cancelAfter(time: number) {
        if (this.isCancel()) return;
        await TalaHelper.wait(time);
        this.cancel();
    }
}