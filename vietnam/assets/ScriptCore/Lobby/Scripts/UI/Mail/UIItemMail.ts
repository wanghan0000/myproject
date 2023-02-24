import { _decorator, Component, Node, Label } from 'cc';

const { ccclass, property } = _decorator;

@ccclass('UIItemMail')
export class UIItemMail extends Component {
    @property
    public nodeBoxClose: Node | null = null;
    @property
    public nodeBoxOpen: Node | null = null;
    @property
    public labelTitle: Label | null = null;
    @property
    public labelContent: Label | null = null;
    @property
    public labelTime: Label | null = null;
    @property
    public nodeBoxIconNew: Node | null = null;

    init (index: any, data: any) {
        //cc.log("init:"+index);
        //this.index = index;
        //this.data = data;
        //this.labelTitle.string = data.Title;
        //this.labelTime.string = Utils.changeTimestampToData(data.CreatedTime);
        //this.nodeBoxIconNew.active = !data.IsRead;
        //if(data.Content == ""){
        //    this.labelContent.string = "Không có nội dung";
        //}
        //else{
        //    this.labelContent.string = data.Content;
        //}
        //this.updateStatus();
    }

    updateStatus () {
        //if(this.isOpenMail){
        //    this.nodeBoxOpen.active = true;
        //    this.nodeBoxClose.active = false;
        //    this.node.height = 120;
        //}
        //else{
        //    this.nodeBoxOpen.active = false;
        //    this.nodeBoxClose.active = true;
        //    this.node.height = 100;
        //}
    }

    onBtnDelete () {
        //this.node.destroy();
    }

    onBtnToggle () {
        //SoundManager.Instance.playClick();
        //this.isOpenMail = !this.isOpenMail;
        //this.updateStatus();
        //if(this.data.IsRead == false){
        //    this.nodeBoxIconNew.active = false;
        //}
    }

}