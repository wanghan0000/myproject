import { _decorator, Component, Node, Label } from 'cc';
import { I18nMgr } from '../../../ScriptCore/i18n/I18nMgr';
import { FuncExtend } from '../../../ScriptCore/panda/utils/FuncExtend';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import  message  from '../../../ScriptCore/protocol/message.js';
const { ccclass, property } = _decorator;

@ccclass('mailitem')
export class mailitem extends Component {
    start() {

    }

    update(deltaTime: number) {
        
    }


    private data:message.message.MessageData = null;
    public refreshView(d:message.message.MessageData){
        this.data = d;
        //是否选中状态  默认都不选中
        this.node.getChildByName("unselectbg").active = true;
        this.node.getChildByName("selectbg").active = false;
        //标题
        let titleStr = Utils.getLanguageString(this.data.Title);


        //未选中状态
        this.node.getChildByName("unselectbg").getChildByName("title").getComponent(Label).string = Utils.replaceStringWithStr(titleStr,8,"...");
        //选中状态
        this.node.getChildByName("selectbg").getChildByName("title").getComponent(Label).string = Utils.replaceStringWithStr(titleStr,8,"...");

        //发送时间
        //为选中状态
        this.node.getChildByName("unselectbg").getChildByName("sedtime").getComponent(Label).string = Utils.cvtDateTimeToYYYMMDD(new Date(this.data.Ts * 1000));
        //选中状态
        this.node.getChildByName("selectbg").getChildByName("sedtime").getComponent(Label).string = Utils.cvtDateTimeToYYYMMDD(new Date(this.data.Ts * 1000));

        //是否为已读 0:未读取 1：读取 2：已删除
        this.node.getChildByName("hasread").active = this.data.State == 1;
    }

    private isSelected:boolean = false;
    //当前是否处于已选中状态
    public setIsSelect(isSelect:boolean){
        this.node.getChildByName("unselectbg").active = !isSelect;
        this.node.getChildByName("selectbg").active = isSelect;
        this.isSelected = isSelect;
    }

    //获取当前是否处于选中状态
    public getIsSelected():boolean{
        return this.isSelected;
    }

    //设置当前是否为已读状态
    public setReadState(state:number){
        this.data.State = state;
        this.node.getChildByName("hasread").active = this.data.State == 1;
    }


    //红点
    public setRedDot(isRed:boolean){
        if(isRed){
            FuncExtend.warn( this.node,90,26);
        }else{
            FuncExtend.clearnWarn(this.node);
        }
        
    }


    public getId():string{
        return this.data.Id;
    }

    public getData():message.message.MessageData{
        return this.data;
    }
}

