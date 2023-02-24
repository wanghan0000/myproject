import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIBlock')
export class UIBlock extends Component {

    //点击屏蔽层的回调
    private onClickCallBack:Function = null;


    public setClickCallBack(cb:Function){
        this.onClickCallBack = cb;
    }


    public onBtnClick(){
        if(this.onClickCallBack != null){
            this.onClickCallBack();
        }
    }
}

