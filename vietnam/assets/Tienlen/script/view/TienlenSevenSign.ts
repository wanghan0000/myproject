
import { _decorator, Node, SpriteFrame, instantiate, Size, UITransform, Sprite, sp, Button, Label, tween, Vec3, Color, ProgressBar, UIOpacity, ScrollView, Vec2, v2 } from 'cc';
import { EventMgr } from '../../../ScriptCore/events/eventmgr';
import { EventName } from '../../../ScriptCore/events/EventName';
import { UIMgr } from '../../../ScriptCore/Lobby/Scripts/UIMgr';
import { SocketMgr } from '../../../ScriptCore/panda/net/SocketMgr';
import { Utils } from '../../../ScriptCore/panda/utils/Utils';
import welfare from '../../../ScriptCore/protocol/welfare.js';
import { ResMgr } from '../../../ScriptCore/UIFrame/ResMgr';
import { UIWindow } from '../../../ScriptCore/UIFrame/UIForm';
import TienlenDefine from '../TienlenDefine';
import TienlenHelper from '../TienlenHelper';
import { TienlenUIMgr } from '../TienlenUIMgr';

const { ccclass, property } = _decorator;

@ccclass('TienlenSevenSign')
export class TienlenSevenSign extends UIWindow {
    @property(SpriteFrame)
    sprFrmDayTips: SpriteFrame[] = [];
    @property(SpriteFrame)
    sprFrmDaySelTips: SpriteFrame[] = [];
    @property(ScrollView)
    scrollView: ScrollView = null;
    @property(Node)
    scrollContent: Node = null;
    @property(Node)
    nodeItem: Node = null;
    @property(sp.Skeleton)
    spineTurntableMid: sp.Skeleton = null;
    @property(sp.Skeleton)
    spineTurntableTop: sp.Skeleton = null;
    @property(Button)
    btnStartTurn: Button = null;
    @property(Sprite)
    sprTurnTableItemGet: Sprite = null;
    @property(Node)
    nodeBoxArr: Node[] = [];
    @property(SpriteFrame)
    sprFrmBoxOpenArr: SpriteFrame[] = [];
    @property(ProgressBar)
    progressBar: ProgressBar = null;
    @property(sp.Skeleton)
    spine_coin: sp.Skeleton = null;
    @property(sp.Skeleton)
    spine_diamond: sp.Skeleton = null;

    private nodeItemArr: Node[] = [];
    private canGetRewardItem: Node = null;
    private canGetRewardIdx: number = -1;
    private itemWidth = 183;

    private signDays: number = 7;
    private progressBarLen = 848;
    private clickSignBoxIdx: number = -1;
    private haveSignDays: number = -1;

    private tempEulerAngles: Vec3 = new Vec3(0, 0, 0);

    start() {
        
    }

    onShow(...args: any[]) {
        EventMgr.getInstance().addEventListener(EventName.SC_WELF_GETTURNPLATE, this.onTurnTable, this);
        EventMgr.getInstance().addEventListener(EventName.SC_WELF_GETADDUPSIGN, this.onGetAddUpSign, this);
        let rewardInfo = args[0];
        this.initRewardInfo(rewardInfo);
    }

    onHide() {
        EventMgr.getInstance().remove(EventName.SC_WELF_GETTURNPLATE, this.onTurnTable, this);
        EventMgr.getInstance().remove(EventName.SC_WELF_GETADDUPSIGN, this.onGetAddUpSign, this);
    }

    btnOnClose() {
        this.closeSelf();
    }

    initRewardInfo(rewardInfo: welfare.welfare.SCWelfaredInfo) {
        this.haveSignDays = rewardInfo.SignDay;
        if (rewardInfo.DrawTurnplate == 2) {
            this.btnStartTurn.interactable = true;
        } else {
            this.btnStartTurn.interactable = false;
            this.spineTurntableTop.setAnimation(0, "end", true);
        }

        // 7日签到数据
        let itemWidth = 163;
        let itemHeight = 302;
        let count = rewardInfo.Slist.length;
        let boxIndex = 0;
        for (let i = 0; i < count; i++) {
            let data = rewardInfo.Slist[i];
            let posx = i * itemWidth;
            let item = instantiate(this.nodeItem);
            item.setPosition(posx, 0);
            this.scrollContent.addChild(item)
            item.active = true;
            this.nodeItemArr.push(item);

            let itemData = data.Date[0];
            let itemId = itemData.Item_Id;
            let labelCnt = item.getChildByName("label_cnt").getComponent(Label);
            if (itemData.Type == 1 || itemData.Type == 2) { //金币，钻石
                labelCnt.string = Utils.cvtToKMB(itemData.Grade);
                // itemId = itemData.Type - 1;
                if (itemData.Type == 1) {
                    let node = instantiate(this.spine_coin.node);
                    node.active = true;
                    node.setPosition(0,0,0);
                    node.setScale(0.7, 0.7, 1);
                    node.parent = item.getChildByName("spr_icon");
                } else if (itemData.Type == 2) {
                    let node = instantiate(this.spine_diamond.node);
                    node.active = true;
                    node.setPosition(0,0,0);
                    node.parent = item.getChildByName("spr_icon");
                }
            } else {
                labelCnt.string = itemData.Grade.toString();
                item.getChildByName("spr_icon").setScale(0.6, 0.6, 1);
                item.getChildByName("spr_icon").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_" + itemId);
            }
            
            let sprDayTip = item.getChildByName("spr_day").getComponent(Sprite);
            sprDayTip.spriteFrame = this.sprFrmDayTips[i];
            if (i < rewardInfo.SignDay) {
                item.getChildByName("spr_mask").active = true;
                if (i < rewardInfo.TurnplateIdx.length) {
                    let index = rewardInfo.TurnplateIdx[i];
                    if (index < rewardInfo.Tlist.length) {
                        let data = rewardInfo.Tlist[index];
                        let itemData = data.Date[0];
                        let labelAddCnt = item.getChildByName("label_cntadd").getComponent(Label);
                        labelAddCnt.node.active = true;
                        let itemId = itemData.Item_Id;
                        if (itemData.Type == 1 || itemData.Type == 2) { //金币，钻石
                            labelAddCnt.string = Utils.cvtToKMB(itemData.Grade);
                            // itemId = itemData.Type - 1;
                            if (itemData.Type == 1) {
                                let node = instantiate(this.spine_coin.node);
                                node.active = true;
                                node.setPosition(0,0,0);
                                node.setScale(0.7, 0.7, 1);
                                node.parent = item.getChildByName("spr_iconadd");
                                item.getChildByName("spr_iconadd").active = true;
                            } else if (itemData.Type == 2) {
                                let node = instantiate(this.spine_diamond.node);
                                node.active = true;
                                node.setPosition(0,0,0);
                                node.parent = item.getChildByName("spr_iconadd");
                                item.getChildByName("spr_iconadd").active = true;
                            }
                        } else {
                            labelAddCnt.string = itemData.Grade.toString();
                            let sprIconAdd = item.getChildByName("spr_iconadd").getComponent(Sprite);
                            sprIconAdd.node.active = true;
                            sprIconAdd.node.setScale(0.6, 0.6, 1);
                            sprIconAdd.spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_" + itemId);
                        }

                        item.getChildByName("spr_itemaddbg").active = true;
                    }
                }
            }
            if (rewardInfo.DrawTurnplate == 2 && i == rewardInfo.SignDay) {
                item.getChildByName("spr_sel").active = true;
                sprDayTip.spriteFrame = this.sprFrmDaySelTips[i];
                this.canGetRewardItem = item;
                this.canGetRewardIdx = i;
            }

            if (data.AddUpDate.length != 0) {
                // let posx = data.Day / this.signDays * this.progressBarLen;
                if (boxIndex < this.nodeBoxArr.length) {
                    let nodeBox = this.nodeBoxArr[boxIndex];
                    // nodeBox.setPosition(posx, 0, 0);
                    nodeBox.getChildByName("spr_di").getChildByName("label_daynum").getComponent(Label).string = data.Day.toString();
                    let itemData = data.AddUpDate[0].AddUpDate[0];
                    let itemId = itemData.Item_Id;
                    let labelCnt = nodeBox.getChildByName("spr_item").getChildByName("label_cnt").getComponent(Label);
                    if (itemData.Type == 1 || itemData.Type == 2) { //金币，钻石
                        labelCnt.string = Utils.cvtToKMB(itemData.Grade);
                        // itemId = itemData.Type - 1;
                        if (itemData.Type == 1) {
                            let node = instantiate(this.spine_coin.node);
                            node.active = true;
                            node.setPosition(0,0,0);
                            node.setScale(0.7, 0.7, 1);
                            node.parent = nodeBox.getChildByName("spr_item").getChildByName("spr_icon");
                        } else if (itemData.Type == 2) {
                            let node = instantiate(this.spine_diamond.node);
                            node.active = true;
                            node.setPosition(0,0,0);
                            node.parent = nodeBox.getChildByName("spr_item").getChildByName("spr_icon");
                        }
                    } else {
                        labelCnt.string = itemData.Grade.toString();
                        nodeBox.getChildByName("spr_item").getChildByName("spr_icon").setScale(0.6, 0.6, 1);
                        nodeBox.getChildByName("spr_item").getChildByName("spr_icon").getComponent(Sprite).spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_" + itemId);
                    }
                    
                    if (rewardInfo.AddUpSignDay.indexOf(data.Day) != -1) {
                        nodeBox.getChildByName("spr_box").getComponent(Sprite).spriteFrame = this.sprFrmBoxOpenArr[boxIndex];
                        nodeBox.getComponent(Button).interactable = false;
                        nodeBox.getChildByName("spine_open").active = true;
                    }
                    // if (this.haveSignDays >= data.Day && rewardInfo.AddUpSignDay.indexOf(data.Day) == -1) {
                    //     let sprBox = nodeBox.getChildByName("spr_box");
                    //     tween(sprBox).repeatForever(tween(sprBox)
                    //                                             .to(0.2, { eulerAngles: new Vec3(0, 0, 5)}) 
                    //                                             .to(0.2, { eulerAngles: new Vec3(0, 0, 5)})
                    //                                             .start())
                    //                     .start();
                    // }
                    boxIndex++;
                }
            }
        }
        this.scrollContent.getComponent(UITransform).contentSize = new Size(itemWidth * count, itemHeight);

        if (this.canGetRewardIdx > 2) {
            let count = this.canGetRewardIdx + 1;
            if (this.canGetRewardIdx) {
                count = this.canGetRewardIdx;
            }
            let len = count * itemWidth;
            this.scrollView.scrollToOffset(v2(len, 0));
        }

        // 转盘数据
        count = rewardInfo.Tlist.length;
        for (let i = 0; i < count; i++) {
            let data = rewardInfo.Tlist[i];
            let labelCnt = this.node.getChildByName("node_turntable").getChildByName("spine_turntable_mid").getChildByName("node_cnt" + data.Id).getChildByName("label_cnt").getComponent(Label);
            let itemData = data.Date[0];
            let itemId = itemData.Item_Id;
            if (itemData.Type == 1 || itemData.Type == 2) { //金币，钻石
                labelCnt.string = Utils.cvtToKMB(itemData.Grade);
                // itemId = itemData.Type - 1;
                let nodeIcon = this.node.getChildByName("node_turntable").getChildByName("spine_turntable_mid").getChildByName("node_pic" + data.Id).getChildByName("spr_icon");
                if (itemData.Type == 1) {
                    let node = instantiate(this.spine_coin.node);
                    node.active = true;
                    node.setPosition(0,0,0);
                    node.setScale(0.6, 0.6, 1);
                    node.parent = nodeIcon;
                } else if (itemData.Type == 2) {
                    let node = instantiate(this.spine_diamond.node);
                    node.active = true;
                    node.setPosition(0,0,0);
                    node.setScale(0.8, 0.8, 1);
                    node.parent = nodeIcon;
                }
            } else {
                labelCnt.string = itemData.Grade.toString();
                let spricon = this.node.getChildByName("node_turntable").getChildByName("spine_turntable_mid").getChildByName("node_pic" + data.Id).getChildByName("spr_icon").getComponent(Sprite);
                spricon.spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_" + itemId);
                spricon.node.setScale(0.6, 0.6, 1.0);
            }
        }

        // 宝箱
        this.progressBar.progress = this.haveSignDays / this.signDays;
        for (let i = 0; i < this.nodeBoxArr.length; i++) {
            let nodeBox = this.nodeBoxArr[i];
            let day = Number(nodeBox.getChildByName("spr_di").getChildByName("label_daynum").getComponent(Label).string);
            let isCanGet = false;
            if (this.haveSignDays >= day && rewardInfo.AddUpSignDay.indexOf(day) == -1) {
                isCanGet = true;
                nodeBox.getChildByName("spine_canopen").active = true;
            }
            nodeBox.on(Button.EventType.CLICK, () => {
                this.clickSignBoxIdx = i;

                if (isCanGet) {
                    console.log("send get addupsignday");
                    UIMgr.getInstance().showWaiting();
                    let pack = new welfare.welfare.CSGetAddupSign();
                    pack.AddUpDay = day;
                    SocketMgr.send(welfare.welfare.SPacketID.PACKET_CS_WELF_GETADDUPSIGN, pack);
                    nodeBox.getChildByName("spine_canopen").active = false;
                } else {
                    let nodeTip = nodeBox.getChildByName("spr_item");
                    if (!nodeTip.active) {
                        nodeTip.active = true;
                        let uiopacity = nodeTip.getComponent(UIOpacity);
                        tween(uiopacity).to(2.0, {opacity: 100})
                                        .call(() => {
                                            uiopacity.opacity = 255;
                                            nodeTip.active = false;
                                            let sprBox = nodeBox.getChildByName("spr_box");
                                            tween(sprBox).stop();
                                        })
                                        .start();
                    }
                }
            }, this);
        }
    }

    btnOnStartTurn() {
        // if (!this.btnStartTurn.interactable) {
        //     TienlenUIMgr.getInstance().AlertTxt("请输入正确的兑换码!");
        //     return;
        // }

        this.btnStartTurn.interactable = false;

        console.log("send turntable get");
        let pack = new welfare.welfare.CSGetTurnplate();
        SocketMgr.send(welfare.welfare.SPacketID.PACKET_CS_WELF_GETTURNPLATE, pack);
    }

    onTurnTable(msg: welfare.welfare.SCGetTurnplate) {
        if (msg.OpRetCode == 0) {
            let index = msg.Idx + 1;

            if (this.canGetRewardIdx > 2) {
                let count = this.canGetRewardIdx + 1;
                if (this.canGetRewardIdx) {
                    count = this.canGetRewardIdx;
                }
                let len = count * this.itemWidth;
                this.scrollView.scrollToOffset(v2(len, 0), 0.5);
            } else {
                let len = this.canGetRewardIdx * this.itemWidth;
                this.scrollView.scrollToOffset(v2(len, 0), 0.5);
            }

            this.spineTurntableMid.setAnimation(0, index.toString(), false);
            this.spineTurntableTop.setAnimation(0, "zhuan", false);
            TienlenHelper.playSound(TienlenDefine.TIENLEN_VIP_TURN);
            this.spineTurntableMid.setCompleteListener(() => {
                this.spineTurntableTop.setAnimation(0, "end", true);

                if (this.canGetRewardItem != null) {
                    let nodeIcon = this.node.getChildByName("node_turntable").getChildByName("spine_turntable_mid").getChildByName("node_pic" + index).getChildByName("spr_icon");
                    let labelCnt = this.node.getChildByName("node_turntable").getChildByName("spine_turntable_mid").getChildByName("node_cnt" + index).getChildByName("label_cnt");
                    labelCnt.getComponent(Label).color = new Color(255, 92, 82);

                    let nodeIconPos = nodeIcon.getPosition();
                    let uiTransform = nodeIcon.parent.getComponent(UITransform);
                    let startPos = uiTransform.convertToWorldSpaceAR(nodeIconPos);
                    startPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(startPos);

                    let nodeEnd = this.canGetRewardItem.getChildByName("spr_iconadd");
                    let nodeEndPos = nodeEnd.getPosition();
                    uiTransform = nodeEnd.parent.getComponent(UITransform);
                    let endPos = uiTransform.convertToWorldSpaceAR(nodeEndPos);
                    endPos = this.node.getComponent(UITransform).convertToNodeSpaceAR(endPos);

                    let itemData = msg.Date[1];
                    let itemId = itemData.Item_Id;
                    if (itemData.Type == 1 || itemData.Type == 2) { //金币，钻石
                        // itemId = itemData.Type - 1;
                        if (itemData.Type == 1) {
                            let node = instantiate(this.spine_coin.node);
                            node.active = true;
                            node.setPosition(0,0,0);
                            node.setScale(0.7, 0.7, 1);
                            node.parent = this.sprTurnTableItemGet.node;
                        } else if (itemData.Type == 2) {
                            let node = instantiate(this.spine_diamond.node);
                            node.active = true;
                            node.setPosition(0,0,0);
                            // node.setScale(0.9, 0.9, 1);
                            node.parent = this.sprTurnTableItemGet.node;
                        }
                    } else {
                        this.sprTurnTableItemGet.spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_" + itemId);
                        this.sprTurnTableItemGet.node.setScale(0.6, 0.6, 1.0);
                    }
                    
                    this.sprTurnTableItemGet.node.active = true;
                    this.sprTurnTableItemGet.node.setPosition(startPos);
                    let spine = this.sprTurnTableItemGet.node.getChildByName("spine_getstart").getComponent(sp.Skeleton);
                    spine.node.active = true;
                    spine.setAnimation(0, "idle", false);
                    tween(this.sprTurnTableItemGet.node).to(0.5, {scale: new Vec3(1.2, 1.2, 1)})
                                                        .call(() => {
                                                            let spine = this.sprTurnTableItemGet.node.getChildByName("spine_run").getComponent(sp.Skeleton);
                                                            spine.node.active = true;
                                                            spine.setAnimation(0, "idle", false);
                                                        })
                                                        .to(1.0, {position: new Vec3(endPos.x, endPos.y, endPos.z)})
                                                        .call(() => {
                                                            let spine = this.sprTurnTableItemGet.node.getChildByName("spine_getend").getComponent(sp.Skeleton);
                                                            spine.node.active = true;
                                                            spine.setAnimation(0, "idle", false);
                                                                                                            
                                                            spine.setCompleteListener(() => {
                                                                let labelAddCnt = this.canGetRewardItem.getChildByName("label_cntadd").getComponent(Label);
                                                                labelAddCnt.node.active = true;
                                                                let itemData = msg.Date[1];
                                                                let itemId = itemData.Item_Id;
                                                                let sprIconAdd = this.canGetRewardItem.getChildByName("spr_iconadd").getComponent(Sprite);
                                                                sprIconAdd.node.active = true;
                                                                if (itemData.Type == 1 || itemData.Type == 2) { //金币，钻石
                                                                    labelAddCnt.string = Utils.cvtToKMB(itemData.Grade);
                                                                    // itemId = itemData.Type - 1;
                                                                    if (itemData.Type == 1) {
                                                                        let node = instantiate(this.spine_coin.node);
                                                                        node.active = true;
                                                                        node.setPosition(0,0,0);
                                                                        node.setScale(0.7, 0.7, 1);
                                                                        node.parent = sprIconAdd.node;
                                                                    } else if (itemData.Type == 2) {
                                                                        let node = instantiate(this.spine_diamond.node);
                                                                        node.active = true;
                                                                        node.setPosition(0,0,0);
                                                                        // node.setScale(0.9, 0.9, 1);
                                                                        node.parent = sprIconAdd.node;
                                                                    }
                                                                } else {
                                                                    labelAddCnt.string = itemData.Grade.toString();
                                                                    sprIconAdd.node.setScale(0.6, 0.6, 1.0);
                                                                    sprIconAdd.spriteFrame = ResMgr.getInstance().getSpriteAtlasByPath("Lobby/Textures/icon_plist").getSpriteFrame("icon_" + itemId);
                                                                }
                                                                                                    
                                                                this.sprTurnTableItemGet.node.active = false;
                                                                this.canGetRewardItem.getChildByName("spr_itemaddbg").active = true;

                                                                let list: { id: number, cnt: number }[] = [];
                                                                if (msg.Date.length > 0) {
                                                                    for (let i = 0; i < msg.Date.length; i++) {
                                                                        let itemData = msg.Date[i];
                                                                        if (itemData.Type == 1 || itemData.Type == 2) {
                                                                            list.push({ id: itemData.Type, cnt: itemData.Grade });
                                                                        } else {
                                                                            list.push({ id: itemData.Item_Id, cnt: itemData.Grade });
                                                                        }
                                                                    }
                                                                }
                                                                TienlenUIMgr.getInstance().showAwardGet(list);
                                                            });

                                                            this.canGetRewardItem.getChildByName("spr_add").active = true;
                                                            spine = this.sprTurnTableItemGet.node.getChildByName("spine_run").getComponent(sp.Skeleton);
                                                            spine.node.active = false;

                                                            this.progressBar.progress = msg.SignDay / this.signDays;
                                                            this.haveSignDays = msg.SignDay;
                                                        })
                                                        .start();
                }
            });
        }
    }

    onGetAddUpSign(msg: welfare.welfare.SCGetAddupSign) {
        console.log("recv addupsignday date");
        UIMgr.getInstance().clearWaiting();
        if (msg.OpRetCode == 0) {
            let dates = msg.Date[0].AddUpDate;
            let list: { id: number, cnt: number }[] = [];
            if (dates.length > 0) {
                for (let i = 0; i < dates.length; i++) {
                    let itemData = dates[i];
                    if (itemData.Type == 1 || itemData.Type == 2) {
                        list.push({ id: itemData.Type, cnt: itemData.Grade });
                    } else {
                        list.push({ id: itemData.Item_Id, cnt: itemData.Grade });
                    }
                }
            }
            TienlenUIMgr.getInstance().showAwardGet(list);

            if (this.clickSignBoxIdx != -1 && this.clickSignBoxIdx < this.nodeBoxArr.length) {
                let nodeBox = this.nodeBoxArr[this.clickSignBoxIdx];
                nodeBox.getChildByName("spr_box").getComponent(Sprite).spriteFrame = this.sprFrmBoxOpenArr[this.clickSignBoxIdx];
                nodeBox.getComponent(Button).interactable = false;
                nodeBox.getChildByName("spine_open").active = true;
            }
        }
    }
}
