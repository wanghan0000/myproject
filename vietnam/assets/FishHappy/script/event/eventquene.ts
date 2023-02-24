import { EventMgr, MyEventHandler } from "../../../ScriptCore/events/eventmgr";

export class EventQuene
{
    private static _instance: EventQuene;
    private _eventQuene: {event: string, msg: any}[];

    private constructor() {
        this._eventQuene = [];
    }

    static get instance (): EventQuene {
        if(this._instance == null) {
            this._instance = new EventQuene();
        }
        return this._instance;
    }

    public pushQuene (event:string, msg: any) {
        this._eventQuene.push({event, msg});
    }

    public popQuene (): {event: string, msg: any} | undefined {
        if (this._eventQuene.length > 0) {
            let eventData = this._eventQuene.shift();
            return eventData;
        }
    }

    public resetQuene () {
        this._eventQuene.length = 0;
    }

    public getQueneLen () {
        return this._eventQuene.length;
    }
}