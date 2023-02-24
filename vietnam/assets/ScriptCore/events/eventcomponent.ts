
import { _decorator, Component } from 'cc';
import { MyEventHandler } from './eventmgr';
const { ccclass } = _decorator;

@ccclass('EventComponent')
export class EventComponent extends Component {
    private _eventListeners: {event: string, handler: MyEventHandler, target: any}[] = [];

    public addEventListener(event:string, handler: MyEventHandler, target: any) {
        this.node.on(event, handler, target);
        this._eventListeners.push({event, handler, target});
    }

    public remove (event: string, handler: MyEventHandler, target: any) {
        this.node.off(event, handler, target);
    }

    public dispatchEvent (event: string, ...params: any) {
        // 事件派发的时候可以指定派发参数，参数最多只支持 5 个事件参数
        this.node.emit(event, ...params);
    }

    private clearEventListeners() {
        const eventListeners = this._eventListeners;
        if(eventListeners && eventListeners.length != 0) {
            eventListeners.forEach(listener => {
                this.node.off(listener.event, listener.handler, listener.target);
            });
        }
        this._eventListeners.length = 0;
    }

    onDestroy () {
        this.clearEventListeners();
    }
}
