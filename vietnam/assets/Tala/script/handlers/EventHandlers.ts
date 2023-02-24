


export const Evt_ChatChange = 'Evt_ChatChange';
export const Evt_UnreadChange = 'Evt_UnreadChange';
export const Evt_EmotionSel = 'Evt_EmotionSel';
export const Evt_NoFriend = 'Evt_NoFriend';
export const Evt_Shield = 'Evt_Shield';

// @EventHandler(Evt_ChatChange)
// class Evt_ChatChangeHandler implements IEventHandler {
//     async run(evt: string, ...args: any[]) {
//         // let wnd = WndSocial.instance;
//         // if (wnd) {
//         //     wnd.checkChatUnRead();
//         //     let pageFriend = wnd.pageFrined;
//         //     pageFriend && pageFriend.checkChatRead();
//         // } else {
//         //     let select = TienlenSelect.instance;
//         //     select && select.checkUnread();
//         // }
//     }
// }


// @EventHandler(Evt_UnreadChange)
// class Evt_UnreadChangeHandler implements IEventHandler {
//     async run(evt: string, ...args: any[]) {
//         // let select = TienlenSelect.instance;
//         // select && select.updateUnreadFlag(args[0]);
//     }
// }


// @EventHandler(Evt_EmotionSel)
// class Evt_EmotionSelHandler implements IEventHandler {
//     async run(evt: string, ...args: any[]) {
//         // let wnd = WndSocial.instance;
//         // wnd && wnd.onEmotion(args[0]);
//     }
// }

// @EventHandler(Evt_NoFriend)
// class Evt_NoFriendHandler implements IEventHandler {
//     async run(evt: string, ...args: any[]) {
//         // let wnd = WndSocial.instance;
//         // wnd && wnd.setChatEnable(!args[0]);
//     }
// }


// @EventHandler(Evt_Shield)
// class EvtShieldHandler implements IEventHandler {
//     async run(evt: string, ...args: any[]) {
//         // let wnd = WndSocial.instance;
//         // wnd && wnd.refreshPage(1);
//     }
// }