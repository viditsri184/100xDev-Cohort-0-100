import {atom, selector} from 'recoil';
export const netWorkAtom = atom({
    key:"networkAtom",
    default:102
});
export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
});
export const notificationsAtom = atom({
    key: "notificationsAtom",
    default:12
});
export const messagingAtom = atom({
    key:"messagingAtom",
    default:5
});
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkNotificationCount = get(netWorkAtom);
        const jobNotificationCount = get(jobsAtom);
        const notificationCount = get(notificationsAtom);
        const messageNotificationCount = get(messagingAtom);
        return networkNotificationCount + jobNotificationCount + notificationCount + messageNotificationCount;
    }
})