import { _decorator, Component, Node, ScrollView, Label, Button, Vec3, UITransform, instantiate, error, Vec2, Prefab, v2 } from "cc";
const { ccclass, property, menu } = _decorator;

const _temp_vec3 = new Vec3();

@ccclass("ListCtrl")
@menu('UI/ListCtrl')
export class ListCtrl extends Component {
    @property
    public sameItemHeight: boolean = true;//每一项高度相同 初始数量和总数量可以不一样，否则必须一样
    @property(Prefab)
    public itemPrefab: Prefab;
    @property(Node)
    public itemTemplate: Node = null!;
    @property(ScrollView)
    public scrollView: ScrollView = null!;
    @property
    public spawnCount = 0; // 初始化 item 数量
    @property
    public _totalCount = 0; // 滚动列表里总的 item 数量
    @property
    public spacing = 0; // item 垂直排布间隔
    @property
    public bufferZone = 0;

    private _content: Node = null!;
    private _items: Node[] = [];
    private _updateTimer = 0;
    private _updateInterval = 0.2;
    private _lastContentPosY = 0;
    private _itemTemplateUITrans!: UITransform;
    private _contentUITrans!: UITransform;
    private _tmpList: Node[] = [];
    private _index: number = 0;
    private _dataList: any[];
    private _viewHeight: number;
    private _itemRenderFunction: (target: Node, cellIndx: number, dataIndex: number) => void;

    onLoad() {
        this.scrollView = this.scrollView || this.getComponent(ScrollView);
        this._content = this.scrollView.content;
        this.initialize();
        this._updateTimer = 0;
        this._updateInterval = 0.2;
        this._lastContentPosY = 0; // 
    }


    public set itemRenderFunction(value: (target: Node, cellIndx: number, dataIndex: number) => void) {
        this._itemRenderFunction = value;
    }

    public get dataList(): any[] {
        return this._dataList;
    }

    public set totalCount(value: number) {
        this._totalCount = value;
    }

    public get totalCount() {
        return this._totalCount;
    }

    public set dataList(list: any[]) {
        if (!this.sameItemHeight) {
            if (list.length != this.spawnCount) {
                console.warn('ListView数据配置冲突!')
            }
        }
        this._dataList = list;
        this.totalCount = list.length;
        this.resetScroll();
        for (const iterator of this._items) {
            iterator.active = false;
        }
        for (let i = 0; i < list.length; ++i) {
            if (i < this._items.length) {
                let item = this._items[i];
                item.active = true;
                this._itemRenderFunction && this._itemRenderFunction(item, i, i);
            }
        }
        this.updateContentHeight();
        this.updateContentLayout();
    }


    // 初始化 item
    initialize() {
        this.itemTemplate = this.itemTemplate || instantiate(this.itemPrefab);
        this._itemTemplateUITrans = this.itemTemplate.getComponent(UITransform);
        this._contentUITrans = this._content.getComponent(UITransform);
        for (let i = 0; i < this.spawnCount; ++i) { // spawn items, we only need to do this once
            let item = instantiate(this.itemTemplate) as Node;
            item.name = i.toString();
            item.active = false;
            this._content.addChild(item);
            let itemUITrans = item.getComponent(UITransform);
            item.setPosition(0, -itemUITrans.height * (0.5 + i) - this.spacing * (i + 1), 0);
            this._items.push(item);
        }
        this._index = 0;
        this._viewHeight = this.getComponent(UITransform).height;
        // this.updateContentHeight();
    }

    updateContentLayout() {
        let yOffset = 0;
        let lastHeight = 0;
        for (let i = 0; i < this._items.length; i++) {
            const item = this._items[i];
            let itemUITrans = item.getComponent(UITransform);
            if (i == 0) {
                yOffset -= (itemUITrans.height * 0.5 + this.spacing);
            } else {
                yOffset -= (lastHeight * 0.5 + itemUITrans.height * 0.5 + this.spacing)
            }
            item.setPosition(0, yOffset, 0);
            lastHeight = itemUITrans.height;
        }
    }

    updateContentHeight() {
        let newHeight: number = 0;
        if (this.sameItemHeight) {
            newHeight = this.totalCount * (this._itemTemplateUITrans.height + this.spacing) + this.spacing;
        } else {
            let h = 0;
            let items = this._items;
            for (let index = 0; index < items.length; index++) {
                const element = items[index];
                h += (element.getComponent(UITransform).height + this.spacing);
            }
            h += this.spacing;
            newHeight = h;
        }
        this._contentUITrans.height = Math.max(this._viewHeight, newHeight);
    }


    getPositionInView(item: Node) {
        // get item position in scrollview's node space
        let worldPos = item.parent!.getComponent(UITransform)!.convertToWorldSpaceAR(item.position);
        let viewPos = this.scrollView.node.getComponent(UITransform)!.convertToNodeSpaceAR(worldPos);
        return viewPos;
    }

    getTotalHeight(): number {
        let h = 0;
        let items = this._items;
        for (let index = 0; index < items.length; index++) {
            const element = items[index];
            h += (element.getComponent(UITransform).height + this.spacing);
        }
        return h;
    }

    update(dt: number) {
        this._updateTimer += dt;
        if (this._updateTimer < this._updateInterval) return; // we don't need to do the math every frame
        this._updateTimer = 0;
        let items = this._items;
        let buffer = this.bufferZone;
        let isDown = this.scrollView.content!.position.y < this._lastContentPosY; // scrolling direction
        // let offset = (this._itemTemplateUITrans.height + this.spacing) * items.length;
        let offset = this.getTotalHeight();
        this._tmpList.length = 0;
        for (let i = 0; i < items.length; ++i) {
            let viewPos = this.getPositionInView(items[i]);
            items[i].getPosition(_temp_vec3);
            if (isDown) {
                // if away from buffer zone and not reaching top of content
                if (viewPos.y < -buffer && _temp_vec3.y + offset < 0) {
                    _temp_vec3.y += offset;
                    items[i].setPosition(_temp_vec3);
                    --this._index;
                    this._tmpList.push(items[i]);
                }
            } else {
                // if away from buffer zone and not reaching bottom of content
                if (viewPos.y > buffer && _temp_vec3.y - offset > -this._contentUITrans.height) {
                    _temp_vec3.y -= offset;
                    items[i].setPosition(_temp_vec3);
                    ++this._index;
                    this._tmpList.push(items[i]);
                    this._itemRenderFunction && this._itemRenderFunction(items[i], i, this.spawnCount - 1 + this._index);
                }
            }
        }
        if (isDown) {
            for (let index = 0; index < this._tmpList.length; index++) {
                const element = this._tmpList[index];
                let nodeIdx = parseInt(element.name);
                this._itemRenderFunction && this._itemRenderFunction(element, nodeIdx, this._index + index);
            }
        }
        this._lastContentPosY = this.scrollView.content!.position.y;
    }

    moveBottomItemToTop() {
        let offset = (this._itemTemplateUITrans.height + this.spacing) * this._items.length;
        let length = this._items.length;
        let item = this.getItemAtBottom();
        item.getPosition(_temp_vec3);

        // whether need to move to top
        if (_temp_vec3.y + offset < 0) {
            _temp_vec3.y = _temp_vec3.y + offset;
            item.setPosition(_temp_vec3);
        }
    }

    getItemAtBottom() {
        let item = this._items[0];
        for (let i = 1; i < this._items.length; ++i) {
            if (item.position.y > this._items[i].position.y) {
                item = this._items[i];
            }
        }
        return item;
    }

    scrollToFixedPosition(y: number = 0, seconds: number = 1) {
        this.scrollView.stopAutoScroll();
        this.scrollView.scrollToOffset(new Vec2(0, y), null, true);
    }

    resetScroll() {
        this._index = 0;
        this.scrollView.scrollToOffset(Vec2.ZERO, null, true);
        this.scrollView.stopAutoScroll();
    }
}

