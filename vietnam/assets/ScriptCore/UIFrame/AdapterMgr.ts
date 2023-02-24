import { Component, Size, view, Widget } from "cc";


export class AdapterMgr {
    private static instance: AdapterMgr;

    public static getInstance(): AdapterMgr {
        if (this.instance == null) {
            this.instance = new AdapterMgr();
            this.instance.visibleSize = view.getVisibleSize();
            console.log(`visible size: ${this.instance.visibleSize}`);
        }

        return this.instance;
    }

    public visibleSize!: Size;


    public adapterByType(ty: AdapterType, com: Component, distance?: number) {
        let widget = com.node.getComponent(Widget);
        if (!widget) {
            widget = com.node.addComponent(Widget);
        }
        switch (ty) {
            case AdapterType.Top:
                break;
            case AdapterType.Bottom:
                break;
            case AdapterType.Center:
                break;
            case AdapterType.Left:
                break;
            case AdapterType.Right:
                break;
            case AdapterType.FullScreen:
                widget.left = 0;
                widget.right = 0;
                widget.top = 0;
                widget.bottom = 0;
                widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
                widget.isAlignBottom = true;
                widget.isAlignTop = true;
                widget.isAlignLeft = true;
                widget.isAlignRight = true;
                widget.target = com.node.parent;
                break;
        }

    }

    removeAdapter(node: Node) {
        // if(node.getComponent(Widget)){

        // }
    }

}

export enum AdapterType {
    Center = 0,
    Top = 1,
    Bottom = 2,
    Left = 3,
    Right = 4,
    FullScreen = 5,
}